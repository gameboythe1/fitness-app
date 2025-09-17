import type { Metadata } from 'next';
import './globals.css';
import RegisterSW from './components/RegisterSW';
import BottomNav from './components/BottomNav';

export const metadata: Metadata = {
  title: 'Fitness App',
  description: 'Mobile-first fitness tracker with workouts and dashboard',
  manifest: '/manifest.json',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  themeColor: '#159eff',
};

 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-gray-50 text-gray-900 antialiased">
        <div className="mx-auto max-w-md pb-24">
          <div className="sticky top-0 z-40 bg-gradient-to-b from-white to-white/60 px-4 py-3 backdrop-blur">
            <h1 className="text-xl font-semibold">Fitness</h1>
          </div>
          <div className="px-4 pt-2">
            {children}
          </div>
        </div>
        <RegisterSW />
        {/* Client nav */}
        <BottomNav />
      </body>
    </html>
  );
}



