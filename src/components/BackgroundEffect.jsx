'use client';

export default function BackgroundEffect() {
  return (

    <div className="bg-effect-container">
      {/* Comic Halftone Pattern */}
      <div className="bg-halftone" />

      <style jsx>{`
        .bg-effect-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
          background: var(--background);
          pointer-events: none;
        }
        
        .bg-halftone {
          position: absolute; 
          inset: 0; 
          background-image: radial-gradient(rgba(0, 0, 0, 0.15) 15%, transparent 15%);
          background-size: 12px 12px;
          opacity: 0.8;
          mask-image: radial-gradient(ellipse at center, black, transparent 80%);
        }
      `}</style>
    </div>
  );
}

