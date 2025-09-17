'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Route } from 'next';

type Tab = { href: Route; label: string };

export default function BottomNav() {
  const pathname = usePathname();
  const tabs: Tab[] = [
    { href: '/' as Route, label: 'Dashboard' },
    { href: '/activity' as Route, label: 'Activity' },
    { href: '/workouts' as Route, label: 'Workouts' },
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


