import { Camera, Mesh, Plane, Program, Renderer, Texture, Transform } from "ogl";
import { useEffect, useRef } from "react";

import "./CircularGallery.css";

function debounce(func: Function, wait: number) {
  let timeout: NodeJS.Timeout;
  return function (...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function lerp(p1: number, p2: number, t: number) {
  return p1 + (p2 - p1) * t;
}

function autoBind(instance: any) {
  const proto = Object.getPrototypeOf(instance);
  Object.getOwnPropertyNames(proto).forEach((key) => {
    if (key !== "constructor" && typeof instance[key] === "function") {
      instance[key] = instance[key].bind(instance);
    }
  });
}

function createTextTexture(gl: any, text: string, font = "bold 30px monospace", color = "white") {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d")!;
  context.font = font;
  const metrics = context.measureText(text);
  const textWidth = Math.ceil(metrics.width);
  const textHeight = Math.ceil(parseInt(font, 10) * 1.2);
  canvas.width = textWidth + 40;
  canvas.height = textHeight + 40;
  context.font = font;
  context.fillStyle = color;
  context.textBaseline = "middle";
  context.textAlign = "center";
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillText(text, canvas.width / 2, canvas.height / 2);
  const texture = new Texture(gl, { generateMipmaps: false });
  texture.image = canvas;
  return { texture, width: canvas.width, height: canvas.height };
}

class Title {
  gl: any;
  plane: any;
  renderer: any;
  text: string;
  textColor: string;
  font: string;
  mesh: any;

  constructor({ gl, plane, renderer, text, textColor = "#ffffff", font = "bold 24px Orbitron" }: any) {
    autoBind(this);
    this.gl = gl;
    this.plane = plane;
    this.renderer = renderer;
    this.text = text;
    this.textColor = textColor;
    this.font = font;
    this.createMesh();
  }

  createMesh() {
    const { texture, width, height } = createTextTexture(this.gl, this.text, this.font, this.textColor);
    const geometry = new Plane(this.gl);
    const program = new Program(this.gl, {
      vertex: `
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform sampler2D tMap;
        varying vec2 vUv;
        void main() {
          vec4 color = texture2D(tMap, vUv);
          if (color.a < 0.1) discard;
          gl_FragColor = color;
        }
      `,
      uniforms: { tMap: { value: texture } },
      transparent: true,
    });
    this.mesh = new Mesh(this.gl, { geometry, program });
    const aspect = width / height;
    const textHeight = this.plane.scale.y * 0.2;
    const textWidth = textHeight * aspect;
    this.mesh.scale.set(textWidth, textHeight, 1);
    this.mesh.position.y = -this.plane.scale.y * 0.6;
    this.mesh.setParent(this.plane);
  }
}

class Media {
  extra: number = 0;
  geometry: any;
  gl: any;
  image: string;
  price: string;
  index: number;
  length: number;
  renderer: any;
  scene: any;
  screen: any;
  text: string;
  viewport: any;
  bend: number;
  textColor: string;
  borderRadius: number;
  font: string;
  program: any;
  plane: any;
  title: any;
  scale: number = 1;
  padding: number = 2;
  width: number = 0;
  widthTotal: number = 0;
  x: number = 0;
  speed: number = 0;
  isBefore: boolean = false;
  isAfter: boolean = false;

  constructor({
    geometry,
    gl,
    image,
    price,
    description,
    features,
    category,
    index,
    length,
    renderer,
    scene,
    screen,
    text,
    viewport,
    bend,
    textColor,
    borderRadius = 0,
    font,
  }: any) {
    this.geometry = geometry;
    this.gl = gl;
    this.image = image;
    this.price = price;
    this.description = description;
    this.features = features;
    this.category = category;
    this.index = index;
    this.length = length;
    this.renderer = renderer;
    this.scene = scene;
    this.screen = screen;
    this.text = text;
    this.viewport = viewport;
    this.bend = bend;
    this.textColor = textColor;
    this.borderRadius = borderRadius;
    this.font = font;
    this.createShader();
    this.createMesh();
    this.createTitle();
    this.onResize();
  }

  createShader() {
    const texture = new Texture(this.gl, { 
      generateMipmaps: true,
      minFilter: this.gl.LINEAR_MIPMAP_LINEAR,
      magFilter: this.gl.LINEAR,
      wrapS: this.gl.CLAMP_TO_EDGE,
      wrapT: this.gl.CLAMP_TO_EDGE
    });
    this.program = new Program(this.gl, {
      depthTest: false,
      depthWrite: false,
      vertex: `
        precision highp float;
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform float uTime;
        uniform float uSpeed;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 p = position;
          p.z = (sin(p.x * 4.0 + uTime) * 1.5 + cos(p.y * 2.0 + uTime) * 1.5) * (0.1 + uSpeed * 0.5);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform vec2 uImageSizes;
        uniform vec2 uPlaneSizes;
        uniform sampler2D tMap;
        uniform float uBorderRadius;
        varying vec2 vUv;
        
        float roundedBoxSDF(vec2 p, vec2 b, float r) {
          vec2 d = abs(p) - b;
          return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
        }
        
        void main() {
          vec2 ratio = vec2(
            min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
            min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
          );
          vec2 uv = vec2(
            vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
            vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
          );
          vec4 color = texture2D(tMap, uv);
          
          float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
          
          float edgeSmooth = 0.002;
          float alpha = 1.0 - smoothstep(-edgeSmooth, edgeSmooth, d);
          
          gl_FragColor = vec4(color.rgb, alpha);
        }
      `,
      uniforms: {
        tMap: { value: texture },
        uPlaneSizes: { value: [0, 0] },
        uImageSizes: { value: [0, 0] },
        uSpeed: { value: 0 },
        uTime: { value: 100 * Math.random() },
        uBorderRadius: { value: this.borderRadius },
      },
      transparent: true,
    });

    // Créer une image de placeholder avec du texte
    const canvas = document.createElement('canvas');
    const scale = 5; // Force 5K resolution pour plus de netteté
    canvas.width = 800 * scale; // Largeur encore plus grande
    canvas.height = 1000 * scale; // Hauteur encore plus grande
    const ctx = canvas.getContext('2d')!;
    
    // Configuration pour un rendu haute qualité
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.textRenderingOptimization = 'geometricPrecision';
    ctx.scale(scale, scale);
    
    // Background moderne avec dégradé subtil
    const bgGradient = ctx.createLinearGradient(0, 0, 800, 1000);
    bgGradient.addColorStop(0, '#0f172a');
    bgGradient.addColorStop(0.2, '#1e293b');
    bgGradient.addColorStop(0.5, '#334155');
    bgGradient.addColorStop(0.8, '#1e293b');
    bgGradient.addColorStop(1, '#0f172a');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, 800, 1000);
    
    // Bordure élégante
    ctx.strokeStyle = 'rgba(6, 182, 212, 0.4)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.roundRect(6, 6, 788, 988, 40);
    ctx.stroke();
    
    // Header avec catégorie
    const headerGradient = ctx.createLinearGradient(0, 0, 800, 150);
    headerGradient.addColorStop(0, 'rgba(6, 182, 212, 0.1)');
    headerGradient.addColorStop(1, 'rgba(59, 130, 246, 0.05)');
    ctx.fillStyle = headerGradient;
    ctx.fillRect(0, 0, 800, 150);
    
    // Catégorie badge
    const category = this.category || 'SERVICE';
    ctx.fillStyle = 'rgba(6, 182, 212, 0.2)';
    ctx.beginPath();
    ctx.roundRect(40, 40, 160, 48, 24);
    ctx.fill();
    
    ctx.strokeStyle = 'rgba(6, 182, 212, 0.6)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(40, 40, 160, 48, 24);
    ctx.stroke();
    
    ctx.font = 'bold 20px "Orbitron", sans-serif';
    ctx.fillStyle = '#06b6d4';
    ctx.textAlign = 'center';
    ctx.fillText(category.toUpperCase(), 120, 70);
    
    // Zone icône avec effet moderne
    const iconCircle = ctx.createRadialGradient(400, 300, 0, 400, 300, 90);
    iconCircle.addColorStop(0, 'rgba(6, 182, 212, 0.2)');
    iconCircle.addColorStop(0.7, 'rgba(6, 182, 212, 0.1)');
    iconCircle.addColorStop(1, 'rgba(6, 182, 212, 0)');
    ctx.fillStyle = iconCircle;
    ctx.beginPath();
    ctx.arc(400, 300, 90, 0, Math.PI * 2);
    ctx.fill();
    
    // Icône principale plus grande
    ctx.font = 'bold 100px "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif';
    ctx.fillStyle = '#06b6d4';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.image, 400, 300);
    
    // Ligne de séparation élégante
    const lineGradient = ctx.createLinearGradient(120, 450, 680, 450);
    lineGradient.addColorStop(0, 'rgba(6, 182, 212, 0)');
    lineGradient.addColorStop(0.5, 'rgba(6, 182, 212, 0.6)');
    lineGradient.addColorStop(1, 'rgba(6, 182, 212, 0)');
    ctx.strokeStyle = lineGradient;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(120, 450);
    ctx.lineTo(680, 450);
    ctx.stroke();
    
    // Nom du service avec style moderne
    ctx.font = 'bold 40px "Orbitron", sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.text, 400, 520);
    
    // Description du service
    if (this.description) {
      ctx.font = '24px "Exo 2", sans-serif';
      ctx.fillStyle = '#94a3b8';
      ctx.textAlign = 'center';
      const words = this.description.split(' ');
      let line = '';
      let y = 600;
      
      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > 640 && n > 0) {
          ctx.fillText(line, 400, y);
          line = words[n] + ' ';
          y += 35;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, 400, y);
    }
    
    // Prix avec style premium
    ctx.font = 'bold 60px "Orbitron", sans-serif';
    const priceGradient = ctx.createLinearGradient(0, 720, 800, 720);
    priceGradient.addColorStop(0, '#06b6d4');
    priceGradient.addColorStop(0.5, '#22d3ee');
    priceGradient.addColorStop(1, '#3b82f6');
    ctx.fillStyle = priceGradient;
    ctx.textAlign = 'center';
    ctx.fillText(this.price, 400, 720);
    
    // Features list (si disponible)
    if (this.features && this.features.length > 0) {
      ctx.font = '22px "Exo 2", sans-serif';
      ctx.fillStyle = '#64748b';
      ctx.textAlign = 'left';
      
      this.features.slice(0, 6).forEach((feature, index) => {
        const y = 800 + (index * 32);
        
        // Bullet point
        ctx.fillStyle = '#06b6d4';
        ctx.beginPath();
        ctx.arc(80, y - 5, 4, 0, Math.PI * 2);
        ctx.fill();
        
        // Feature text
        ctx.fillStyle = '#94a3b8';
        ctx.fillText(feature, 100, y);
      });
    }
    
    // Badge "NOUVEAU" en haut à droite
    ctx.fillStyle = 'rgba(34, 211, 238, 0.2)';
    ctx.beginPath();
    ctx.roundRect(600, 40, 140, 48, 24);
    ctx.fill();
    
    ctx.strokeStyle = 'rgba(34, 211, 238, 0.6)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(600, 40, 140, 48, 24);
    ctx.stroke();
    
    ctx.font = 'bold 18px "Orbitron", sans-serif';
    ctx.fillStyle = '#22d3ee';
    ctx.textAlign = 'center';
    ctx.fillText('NOUVEAU', 670, 70);
    
    // Footer avec pattern subtil
    const footerGradient = ctx.createLinearGradient(0, 900, 800, 1000);
    footerGradient.addColorStop(0, 'rgba(15, 23, 42, 0.8)');
    footerGradient.addColorStop(1, 'rgba(30, 41, 59, 0.9)');
    ctx.fillStyle = footerGradient;
    ctx.fillRect(0, 900, 800, 100);
    
    // Indicateur de qualité
    ctx.font = 'bold 20px "Orbitron", sans-serif';
    ctx.fillStyle = '#06b6d4';
    ctx.textAlign = 'center';
    ctx.fillText('★ QUALITÉ PREMIUM ★', 400, 955);
    
    // Effet de lueur finale
    const glowGradient = ctx.createRadialGradient(400, 500, 0, 400, 500, 350);
    glowGradient.addColorStop(0, 'rgba(6, 182, 212, 0.03)');
    glowGradient.addColorStop(1, 'rgba(6, 182, 212, 0)');
    ctx.fillStyle = glowGradient;
    ctx.fillRect(0, 0, 800, 1000);
    
    texture.image = canvas;
    this.program.uniforms.uImageSizes.value = [800 * scale, 1000 * scale];
  }

  createMesh() {
    this.plane = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program,
    });
    this.plane.setParent(this.scene);
  }

  createTitle() {
    // Title is already included in the texture, so we skip this
  }

  update(scroll: any, direction: string) {
    this.plane.position.x = this.x - scroll.current - this.extra;

    const x = this.plane.position.x;
    const H = this.viewport.width / 2;

    if (this.bend === 0) {
      this.plane.position.y = 0;
      this.plane.rotation.z = 0;
    } else {
      const B_abs = Math.abs(this.bend);
      const R = (H * H + B_abs * B_abs) / (2 * B_abs);
      const effectiveX = Math.min(Math.abs(x), H);

      const arc = R - Math.sqrt(R * R - effectiveX * effectiveX);
      if (this.bend > 0) {
        this.plane.position.y = -arc;
        this.plane.rotation.z = -Math.sign(x) * Math.asin(effectiveX / R);
      } else {
        this.plane.position.y = arc;
        this.plane.rotation.z = Math.sign(x) * Math.asin(effectiveX / R);
      }
    }

    this.speed = scroll.current - scroll.last;
    this.program.uniforms.uTime.value += 0.04;
    this.program.uniforms.uSpeed.value = this.speed;

    const planeOffset = this.plane.scale.x / 2;
    const viewportOffset = this.viewport.width / 2;
    this.isBefore = this.plane.position.x + planeOffset < -viewportOffset;
    this.isAfter = this.plane.position.x - planeOffset > viewportOffset;
    if (direction === "right" && this.isBefore) {
      this.extra -= this.widthTotal;
      this.isBefore = this.isAfter = false;
    }
    if (direction === "left" && this.isAfter) {
      this.extra += this.widthTotal;
      this.isBefore = this.isAfter = false;
    }
  }

  onResize({ screen, viewport }: any = {}) {
    if (screen) this.screen = screen;
    if (viewport) {
      this.viewport = viewport;
    }
    this.scale = Math.min(this.screen.height / 1200, this.screen.width / 1600);
    const cardHeight = 900 * this.scale; // Hauteur encore plus grande
    const cardWidth = 720 * this.scale;  // Largeur encore plus grande
    this.plane.scale.y = (this.viewport.height * cardHeight) / this.screen.height;
    this.plane.scale.x = (this.viewport.width * cardWidth) / this.screen.width;
    this.plane.program.uniforms.uPlaneSizes.value = [this.plane.scale.x, this.plane.scale.y];
    this.padding = this.plane.scale.x * 0.3;
    this.width = this.plane.scale.x + this.padding;
    this.widthTotal = this.width * this.length;
    this.x = this.width * this.index;
  }
}

class App {
  container: HTMLElement;
  scrollSpeed: number;
  scroll: any;
  onCheckDebounce: Function;
  renderer: any;
  gl: any;
  camera: any;
  scene: any;
  screen: any;
  viewport: any;
  planeGeometry: any;
  mediasImages: any[];
  medias: Media[];
  isDown: boolean = false;
  start: number = 0;
  raf: number = 0;
  boundOnResize: any;
  boundOnWheel: any;
  boundOnTouchDown: any;
  boundOnTouchMove: any;
  boundOnTouchUp: any;

  constructor(
    container: HTMLElement,
    {
      items,
      bend,
      textColor = "#ffffff",
      borderRadius = 0,
      font = "bold 24px Orbitron",
      scrollSpeed = 2,
      scrollEase = 0.05,
    }: any = {}
  ) {
    this.container = container;
    this.scrollSpeed = scrollSpeed;
    this.scroll = { ease: scrollEase, current: 0, target: 0, last: 0 };
    this.onCheckDebounce = debounce(this.onCheck.bind(this), 200);
    this.createRenderer();
    this.createCamera();
    this.createScene();
    this.onResize();
    this.createGeometry();
    this.createMedias(items, bend, textColor, borderRadius, font);
    this.update();
    this.addEventListeners();
  }

  createRenderer() {
    this.renderer = new Renderer({ 
      alpha: true,
      antialias: true,
      dpr: Math.min(window.devicePixelRatio || 1, 4), // Résolution 4K
      powerPreference: "high-performance"
    });
    this.gl = this.renderer.gl;
    this.gl.clearColor(0, 0, 0, 0);
    
    // Configuration ultra-premium
    this.gl.enable(this.gl.BLEND);
    this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.depthFunc(this.gl.LEQUAL);
    
    this.container.appendChild(this.gl.canvas);
  }

  createCamera() {
    this.camera = new Camera(this.gl);
    this.camera.fov = 45;
    this.camera.position.z = 20;
  }

  createScene() {
    this.scene = new Transform();
  }

  createGeometry() {
    this.planeGeometry = new Plane(this.gl, {
      heightSegments: 30,
      widthSegments: 50,
    });
  }

  createMedias(items: any[], bend = 1, textColor: string, borderRadius: number, font: string) {
    const galleryItems = items || [];
    this.mediasImages = galleryItems.concat(galleryItems);
    this.medias = this.mediasImages.map((data, index) => {
      return new Media({
        geometry: this.planeGeometry,
        gl: this.gl,
        image: data.icon,
        price: data.price,
        description: data.description,
        features: data.features,
        category: data.category,
        index,
        length: this.mediasImages.length,
        renderer: this.renderer,
        scene: this.scene,
        screen: this.screen,
        text: data.name,
        viewport: this.viewport,
        bend,
        textColor,
        borderRadius,
        font,
      });
    });
  }

  onTouchDown(e: any) {
    this.isDown = true;
    this.scroll.position = this.scroll.current;
    this.start = e.touches ? e.touches[0].clientX : e.clientX;
  }

  onTouchMove(e: any) {
    if (!this.isDown) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const distance = (this.start - x) * (this.scrollSpeed * 0.025);
    this.scroll.target = this.scroll.position + distance;
  }

  onTouchUp() {
    this.isDown = false;
    this.onCheck();
  }

  onWheel(e: any) {
    const delta = e.deltaY || e.wheelDelta || e.detail;
    this.scroll.target += (delta > 0 ? this.scrollSpeed : -this.scrollSpeed) * 0.3;
    this.onCheckDebounce();
  }

  onCheck() {
    if (!this.medias || !this.medias[0]) return;
    const width = this.medias[0].width;
    const itemIndex = Math.round(Math.abs(this.scroll.target) / width);
    const item = width * itemIndex;
    this.scroll.target = this.scroll.target < 0 ? -item : item;
  }

  onResize() {
    this.screen = {
      width: this.container.clientWidth,
      height: this.container.clientHeight,
    };
    this.renderer.setSize(this.screen.width, this.screen.height);
    this.camera.perspective({
      aspect: this.screen.width / this.screen.height,
    });
    const fov = (this.camera.fov * Math.PI) / 180;
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
    const width = height * this.camera.aspect;
    this.viewport = { width, height };
    if (this.medias) {
      this.medias.forEach((media) => media.onResize({ screen: this.screen, viewport: this.viewport }));
    }
  }

  update() {
    this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.ease);
    const direction = this.scroll.current > this.scroll.last ? "right" : "left";
    if (this.medias) {
      this.medias.forEach((media) => media.update(this.scroll, direction));
    }
    this.renderer.render({ scene: this.scene, camera: this.camera });
    this.scroll.last = this.scroll.current;
    this.raf = window.requestAnimationFrame(this.update.bind(this));
  }

  addEventListeners() {
    this.boundOnResize = this.onResize.bind(this);
    this.boundOnWheel = this.onWheel.bind(this);
    this.boundOnTouchDown = this.onTouchDown.bind(this);
    this.boundOnTouchMove = this.onTouchMove.bind(this);
    this.boundOnTouchUp = this.onTouchUp.bind(this);
    window.addEventListener("resize", this.boundOnResize);
    window.addEventListener("mousewheel", this.boundOnWheel);
    window.addEventListener("wheel", this.boundOnWheel);
    window.addEventListener("mousedown", this.boundOnTouchDown);
    window.addEventListener("mousemove", this.boundOnTouchMove);
    window.addEventListener("mouseup", this.boundOnTouchUp);
    window.addEventListener("touchstart", this.boundOnTouchDown);
    window.addEventListener("touchmove", this.boundOnTouchMove);
    window.addEventListener("touchend", this.boundOnTouchUp);
  }

  destroy() {
    window.cancelAnimationFrame(this.raf);
    window.removeEventListener("resize", this.boundOnResize);
    window.removeEventListener("mousewheel", this.boundOnWheel);
    window.removeEventListener("wheel", this.boundOnWheel);
    window.removeEventListener("mousedown", this.boundOnTouchDown);
    window.removeEventListener("mousemove", this.boundOnTouchMove);
    window.removeEventListener("mouseup", this.boundOnTouchUp);
    window.removeEventListener("touchstart", this.boundOnTouchDown);
    window.removeEventListener("touchmove", this.boundOnTouchMove);
    window.removeEventListener("touchend", this.boundOnTouchUp);
    if (this.renderer && this.renderer.gl && this.renderer.gl.canvas.parentNode) {
      this.renderer.gl.canvas.parentNode.removeChild(this.renderer.gl.canvas);
    }
  }
}

interface CircularGalleryProps {
  items?: Array<{ name: string; price: string; icon: string }>;
  bend?: number;
  textColor?: string;
  borderRadius?: number;
  font?: string;
  scrollSpeed?: number;
  scrollEase?: number;
}

export default function CircularGallery({
  items,
  bend = 2,
  textColor = "#ffffff",
  borderRadius = 0.05,
  font = "bold 24px Orbitron",
  scrollSpeed = 2,
  scrollEase = 0.05,
}: CircularGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Attendre que le DOM soit complètement chargé
    const timer = setTimeout(() => {
      if (!containerRef.current) return;
      
      try {
    const app = new App(containerRef.current, { 
      items, 
      bend, 
      textColor, 
      borderRadius, 
      font, 
      scrollSpeed, 
      scrollEase 
    });
        
        return () => {
          if (app && typeof app.destroy === 'function') {
            app.destroy();
          }
        };
      } catch (error) {
        console.warn('CircularGallery initialization error:', error);
      }
    }, 100);
  }, [items, bend, textColor, borderRadius, font, scrollSpeed, scrollEase]);

  return (
    <div className="circular-gallery" ref={containerRef}>
      <div className="gallery-instructions">
        🖱️ Molette ou glisser pour naviguer
      </div>
    </div>
  );
}