// Netlify Function: Fetch Google Reviews from Places API (v1)
// Uses env vars: GOOGLE_MAPS_API_KEY, GOOGLE_PLACE_ID
// Returns minimal JSON with rating, count, and up to 5 latest reviews

// Note: Avoids importing @netlify/functions to keep dependencies minimal.

type Review = {
  rating: number;
  authorName: string;
  relativeTime: string;
  text?: string;
};

type GooglePlaceReview = {
  rating?: number;
  relativePublishTimeDescription?: string;
  text?: { text?: string };
  authorAttribution?: { displayName?: string };
};

type GooglePlaceResponse = {
  rating?: number;
  userRatingCount?: number;
  reviews?: GooglePlaceReview[];
};

export const handler = async (event?: { httpMethod?: string }) => {
  // Access env via globalThis to avoid requiring @types/node during local typecheck
  const env = (globalThis as unknown as { process?: { env?: Record<string, string | undefined> } }).process?.env ?? {};
  const apiKey = env.GOOGLE_MAPS_API_KEY;
  const placeId = env.GOOGLE_PLACE_ID;

  // Handle CORS preflight if needed
  if (event?.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: '',
    };
  }

  if (!apiKey || !placeId) {
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        error: 'Missing GOOGLE_MAPS_API_KEY or GOOGLE_PLACE_ID in environment.',
      }),
    };
  }

  try {
    const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(
      placeId
    )}`;

    // Request only the fields we need
    const res = await fetch(url, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': [
          'rating',
          'userRatingCount',
          'reviews.text.text',
          'reviews.rating',
          'reviews.relativePublishTimeDescription',
          'reviews.authorAttribution.displayName',
        ].join(','),
      },
    });

    if (!res.ok) {
      const msg = await res.text().catch(() => '');
      return {
        statusCode: res.status,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ error: 'Google API error', status: res.status, message: msg }),
      };
    }

  const data: GooglePlaceResponse = (await res.json()) as GooglePlaceResponse;

  const rating: number | undefined = data.rating;
  const userRatingCount: number | undefined = data.userRatingCount;
  const reviewsRaw: GooglePlaceReview[] = Array.isArray(data.reviews) ? data.reviews : [];

    const reviews: Review[] = reviewsRaw.slice(0, 5).map((r) => ({
      rating: r.rating ?? 0,
      authorName: r.authorAttribution?.displayName ?? 'Utilisateur Google',
      relativeTime: r.relativePublishTimeDescription ?? '',
      text: r.text?.text ?? undefined,
    }));

    const body = {
      rating: rating ?? null,
      userRatingCount: userRatingCount ?? 0,
      reviews,
    };

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        // Cache at CDN edge for 1 hour
        'Netlify-CDN-Cache-Control': 'public, max-age=3600',
        'Cache-Control': 'public, max-age=300', // Browser 5 min
      },
      body: JSON.stringify(body),
    };
  } catch (err: unknown) {
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ error: 'Server error', message: err instanceof Error ? err.message : String(err) }),
    };
  }
};
