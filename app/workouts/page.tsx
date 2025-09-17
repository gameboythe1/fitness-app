'use client';

import { useEffect, useState } from 'react';

type Workout = {
  id: string;
  name: string;
  durationMin: number;
  completedAt?: string;
};

const defaultPlans: Workout[] = [
  { id: 'w1', name: 'Full Body Beginner', durationMin: 30 },
  { id: 'w2', name: 'HIIT Blast', durationMin: 20 },
  { id: 'w3', name: 'Core Strength', durationMin: 25 },
];

export default function WorkoutsPage() {
  const [plans, setPlans] = useState<Workout[]>([]);

  useEffect(() => {
    const key = 'fitness.workouts.v1';
    const raw = localStorage.getItem(key);
    if (raw) setPlans(JSON.parse(raw));
    else {
      localStorage.setItem(key, JSON.stringify(defaultPlans));
      setPlans(defaultPlans);
    }
  }, []);

  const complete = (id: string) => {
    setPlans((prev) => {
      const next = prev.map((p) => (p.id === id ? { ...p, completedAt: new Date().toISOString() } : p));
      localStorage.setItem('fitness.workouts.v1', JSON.stringify(next));
      return next;
    });
  };

  return (
    <main className="space-y-4">
      <header>
        <h1 className="text-2xl font-bold">Workouts</h1>
        <p className="text-sm text-gray-500">Plans and logging</p>
      </header>
      <ul className="space-y-3">
        {plans.map((p) => (
          <li key={p.id} className="rounded-2xl border bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{p.name}</p>
                <p className="text-sm text-gray-500">{p.durationMin} min</p>
              </div>
              <button
                onClick={() => complete(p.id)}
                className="rounded-lg bg-brand-600 px-3 py-2 text-white shadow hover:brightness-105 active:translate-y-px disabled:opacity-50"
                disabled={!!p.completedAt}
              >
                {p.completedAt ? 'Completed' : 'Log'}
              </button>
            </div>
            {p.completedAt && (
              <p className="mt-2 text-xs text-green-700">Done at {new Date(p.completedAt).toLocaleString()}</p>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}



