import { StatCard } from './components/StatCard';
import { BoltIcon, HeartIcon, FireIcon, ClockIcon } from '@heroicons/react/24/solid';

export default function Page() {
  const today = new Date().toLocaleDateString();
  return (
    <main className="space-y-5">
      <p className="text-sm text-gray-500">{today}</p>
      <section className="grid grid-cols-2 gap-3">
        <StatCard title="Steps" value="6,842" subtitle="Today" icon={<BoltIcon className="h-5 w-5" />} />
        <StatCard title="Calories" value="1,245" subtitle="kcal" icon={<FireIcon className="h-5 w-5" />} color="bg-orange-50 text-orange-700" />
        <StatCard title="Active" value="54m" subtitle="time" icon={<ClockIcon className="h-5 w-5" />} color="bg-emerald-50 text-emerald-700" />
        <StatCard title="Heart" value="72" subtitle="bpm" icon={<HeartIcon className="h-5 w-5" />} color="bg-rose-50 text-rose-700" />
      </section>
      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Recent Activity</h2>
        <ul className="overflow-hidden rounded-2xl border bg-white">
          {[
            { t: 'Morning Run', d: '3.2 km • 23 min' },
            { t: 'Yoga Session', d: '30 min • Stretch' },
            { t: 'Cycling', d: '8.5 km • 28 min' },
          ].map((it, i) => (
            <li key={i} className="flex items-center justify-between p-4 not-last:border-b">
              <span className="font-medium">{it.t}</span>
              <span className="text-sm text-gray-500">{it.d}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}



