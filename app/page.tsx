import { StatCard } from './components/StatCard';
import { BoltIcon, HeartIcon, FireIcon, ClockIcon, TrophyIcon } from '@heroicons/react/24/solid';
import ProgressRing from './components/ProgressRing';

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
      <section className="rounded-2xl border bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold flex items-center gap-2"><TrophyIcon className="h-5 w-5 text-amber-500"/> Goals & Streaks</h2>
          <span className="text-sm text-gray-500">7-day streak</span>
        </div>
        <div className="mt-4 flex items-center gap-6">
          <ProgressRing value={72} />
          <div className="space-y-2 text-sm">
            <p><span className="font-medium">Daily Steps:</span> 6,842 / 10,000</p>
            <p><span className="font-medium">Active Minutes:</span> 54 / 45 ✓</p>
            <p className="text-gray-500">Keep it up! 3 days to new record.</p>
          </div>
        </div>
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



