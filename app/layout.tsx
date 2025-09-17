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

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Nav() {
  const pathname = usePathname();
  const tabs = [
    { href: '/', label: 'Dashboard' },
    { href: '/activity', label: 'Activity' },
    { href: '/workouts', label: 'Workouts' },
  ];
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 mx-auto max-w-md border-t bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <ul className="grid grid-cols-3 text-sm">
        {tabs.map((t) => {
          const active = pathname === t.href;
          return (
            <li key={t.href}>
              <Link
                className={`flex flex-col items-center gap-1 p-3 ${active ? 'text-brand-600 font-medium' : 'hover:text-brand-600'}`}
                href={t.href}
              >
                {t.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

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
        {/* Client nav */}
        <Nav />
      </body>
    </html>
  );
}



