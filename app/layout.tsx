import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fitness App',
  description: 'Mobile-first fitness tracker with workouts and dashboard',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-gray-50 text-gray-900 antialiased">
        <div className="mx-auto max-w-md p-4 pb-24">
          {children}
        </div>
        <nav className="fixed inset-x-0 bottom-0 z-50 mx-auto max-w-md border-t bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <ul className="grid grid-cols-3 text-sm">
            <li>
              <a className="flex flex-col items-center gap-1 p-3 hover:text-brand-600" href="/">Dashboard</a>
            </li>
            <li>
              <a className="flex flex-col items-center gap-1 p-3 hover:text-brand-600" href="/activity">Activity</a>
            </li>
            <li>
              <a className="flex flex-col items-center gap-1 p-3 hover:text-brand-600" href="/workouts">Workouts</a>
            </li>
          </ul>
        </nav>
      </body>
    </html>
  );
}



