import './globals.css';
import { Inter, Outfit } from 'next/font/google';
import BackgroundEffect from '@/components/BackgroundEffect';
import BackgroundVideo from '@/components/animations/BackgroundVideo';
import SmoothScroll from '@/components/SmoothScroll';
import ClientScene from '@/components/3d/ClientScene';
import PageLoader from '@/components/animations/PageLoader';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-main',
});

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-heading',
});

export const metadata = {
  title: 'Danish Khan | Product Designer & Developer',
  description: 'A professional portfolio showcasing digital experiences and engineering excellence.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body>
        <PageLoader />
        <CustomCursor />
        <Navbar />
        <div className="noise-overlay" />

        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
          <ClientScene />
        </div>
        
        <BackgroundVideo />
        <BackgroundEffect />
        
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

