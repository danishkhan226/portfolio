'use client';

import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('./Scene'), { 
  ssr: false,
  loading: () => <div style={{ width: '100%', height: '100%', background: '#060608' }} />
});

export default function ClientScene() {
  return <Scene />;
}
