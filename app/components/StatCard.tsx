import { ReactNode } from 'react';

export function StatCard({
  title,
  value,
  subtitle,
  icon,
  color = 'bg-brand-50 text-brand-700',
}: {
  title: string;
  value: string;
  subtitle?: string;
  icon?: ReactNode;
  color?: string;
}) {
  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">
        {icon && (
          <div className={`grid h-10 w-10 place-items-center rounded-xl ${color}`}>{icon}</div>
        )}
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="mt-0.5 text-2xl font-bold leading-tight">{value}</p>
          {subtitle && <p className="text-xs text-gray-400">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}


