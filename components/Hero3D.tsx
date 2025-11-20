'use client';

import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Color, Vector2 } from 'three';
import gsap from 'gsap';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec2 uResolution;
  
  varying vec2 vUv;

  // Simplex 2D noise
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
             -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = vUv;
    
    // Create a flowing liquid effect
    float noise1 = snoise(uv * 3.0 + uTime * 0.1);
    float noise2 = snoise(uv * 6.0 - uTime * 0.15);
    
    // Mix noise for complexity
    float pattern = noise1 * 0.5 + noise2 * 0.5;
    
    // Create smooth bands
    float bands = sin(uv.y * 10.0 + pattern * 5.0 + uTime * 0.2);
    bands = smoothstep(-0.2, 0.2, bands);
    
    // Mix colors based on pattern
    vec3 color = mix(uColor1, uColor2, pattern + 0.5);
    
    // Add subtle grain/dither
    float grain = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
    color += grain * 0.03;

    gl_FragColor = vec4(color, 1.0);
  }
`;

const WaveMesh = () => {
    const meshRef = useRef<any>(null);

    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uColor1: { value: new Color('#0A192F') }, // Deep Navy
            uColor2: { value: new Color('#172A46') }, // Lighter Navy
            uResolution: { value: new Vector2(1, 1) },
        }),
        []
    );

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.material.uniforms.uTime.value = state.clock.getElapsedTime();
        }
    });

    return (
        <mesh ref={meshRef} scale={[10, 10, 1]}>
            <planeGeometry args={[2, 2, 32, 32]} />
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
            />
        </mesh>
    );
};

export default function Hero3D() {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (textRef.current) {
            const tl = gsap.timeline();

            tl.fromTo(
                '.hero-text-line',
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.2,
                    ease: 'power4.out',
                }
            );
        }
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden bg-primary-dark">
            {/* 3D Canvas */}
            <div className="absolute inset-0 z-0 opacity-60">
                <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 2]}>
                    <WaveMesh />
                </Canvas>
            </div>

            {/* Overlay Content */}
            <div
                ref={textRef}
                className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6"
            >
                <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
                    <div className="overflow-hidden">
                        <span className="hero-text-line block">The Art of</span>
                    </div>
                    <div className="overflow-hidden">
                        <span className="hero-text-line block text-secondary">Impossible</span>
                    </div>
                </h1>

                <p className="hero-text-line text-neutral-300 text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-12">
                    New York's premier luxury concierge. We curate the exceptional,
                    unlock the inaccessible, and redefine what it means to travel.
                </p>

                <div className="hero-text-line flex flex-col md:flex-row gap-6">
                    <a
                        href="/membership"
                        className="px-8 py-4 bg-white text-primary-dark font-bold tracking-widest uppercase hover:bg-secondary hover:text-white transition-colors duration-300"
                    >
                        Apply for Membership
                    </a>
                    <a
                        href="/services"
                        className="px-8 py-4 border border-white/30 text-white font-bold tracking-widest uppercase hover:bg-white/10 transition-colors duration-300"
                    >
                        Explore Services
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7-7-7" />
                </svg>
            </div>
        </div>
    );
}
