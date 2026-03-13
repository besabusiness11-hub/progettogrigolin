import createGlobe from "cobe";
import { useEffect, useRef } from "react";

// Coordinate delle sedi (HQ a San Bonifacio, più altre città strategiche europee)
const locations = [
  { lat: 45.4000, lng: 11.2833, size: 0.1 }, // San Bonifacio (VR) - Sede Centrale
  { lat: 45.4642, lng: 9.1900, size: 0.06 }, // Milano
  { lat: 41.9028, lng: 12.4964, size: 0.05 }, // Roma
  { lat: 48.1351, lng: 11.5820, size: 0.05 }, // Monaco di Baviera
  { lat: 47.3769, lng: 8.5417, size: 0.05 }, // Zurigo
  { lat: 45.4384, lng: 10.9916, size: 0.06 }, // Verona
  { lat: 45.8906, lng: 11.0401, size: 0.05 }, // Rovereto/Trento
];

export default function GlobeMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  
  useEffect(() => {
    let phi = 0;
    let width = 0;
    
    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener('resize', onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3, // Inclinazione della terra
      dark: 0, // 0 = Tema Chiaro, 1 = Tema Scuro
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 4,
      baseColor: [0.96, 0.96, 0.96], // Colore dei continenti (grigio chiarissimo)
      markerColor: [0.1, 0.7, 0.35], // Verde Grigolin (RGB scalato a 0-1)
      glowColor: [1, 1, 1],
      markers: locations.map(loc => ({ location: [loc.lat, loc.lng], size: loc.size })),
      onRender: (state) => {
        // Se l'utente non sta trascinando, il mondo gira da solo
        if (pointerInteracting.current === null) {
          phi += 0.003;
        }
        state.phi = phi + pointerInteractionMovement.current;
        state.width = width * 2;
        state.height = width * 2;
      }
    });

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="w-full h-full min-h-[250px] flex items-center justify-center relative overflow-hidden bg-muted/30 rounded-xl border border-border group">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain cursor-grab active:cursor-grabbing transition-opacity duration-1000"
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
        }}
        onPointerMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta * 0.01;
          }
        }}
        style={{ width: '100%', height: '100%', aspectRatio: '1/1' }}
      />
      {/* Etichetta fluttuante */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity">
        <span className="bg-background/90 backdrop-blur-sm text-[10px] font-display tracking-widest uppercase px-3 py-1.5 rounded-full border border-border/50 text-foreground shadow-sm flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> 
          Presenza Internazionale
        </span>
      </div>
    </div>
  );
}