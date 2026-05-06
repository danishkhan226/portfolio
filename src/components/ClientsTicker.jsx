'use client';

const clients = [
  'InnovateX', 'FlowState', 'Starlight', 'Nexus', 'Aura', 'Verda', 'Lumina', 'Pulse'
];

export default function ClientsTicker() {
  return (
    <div style={{ padding: '2rem 0', background: 'var(--primary)', borderTop: '4px solid var(--border)', borderBottom: '4px solid var(--border)', overflow: 'hidden' }}>
      <div style={{ display: 'flex', gap: '5rem', width: 'max-content', animation: 'scroll 30s linear infinite' }}>
        {[...clients, ...clients].map((client, i) => (
          <div key={i} style={{ 
            fontSize: '1.8rem', 
            fontWeight: 900, 
            color: 'var(--background)', 
            WebkitTextStroke: '2px var(--border)',
            letterSpacing: '0.1em',
            textShadow: '4px 4px 0px var(--border)'
          }}>
            {client.toUpperCase()}
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
