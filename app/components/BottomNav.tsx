'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
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


