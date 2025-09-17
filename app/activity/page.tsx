'use client';

import { useEffect, useMemo, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

type DayEntry = {
  date: string;
  steps: number;
  calories: number;
};

export default function ActivityPage() {
  const [history, setHistory] = useState<DayEntry[]>([]);

  useEffect(() => {
    const key = 'fitness.history.v1';
    const raw = localStorage.getItem(key);
    if (raw) {
      setHistory(JSON.parse(raw));
    } else {
      const seed = Array.from({ length: 7 }).map((_, i) => {
        const d = new Date();
        d.setDate(d.getDate() - i);
        return {
          date: d.toISOString().slice(0, 10),
          steps: Math.floor(4000 + Math.random() * 6000),
          calories: Math.floor(900 + Math.random() * 800),
        } satisfies DayEntry;
      }).reverse();
      localStorage.setItem(key, JSON.stringify(seed));
      setHistory(seed);
    }
  }, []);

  const totals = useMemo(() => {
    return history.reduce(
      (acc, d) => {
        acc.steps += d.steps;
        acc.calories += d.calories;
        return acc;
      },
      { steps: 0, calories: 0 }
    );
  }, [history]);

  return (
    <main className="space-y-4">
      <header>
        <h1 className="text-2xl font-bold">Activity</h1>
        <p className="text-sm text-gray-500">Last 7 days</p>
      </header>
      <section className="grid grid-cols-2 gap-3">
        <Tile title="Total Steps" value={totals.steps.toLocaleString()} />
        <Tile title="Total Calories" value={`${totals.calories.toLocaleString()} kcal`} />
      </section>
      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Daily breakdown</h2>
        <div className="overflow-hidden rounded-2xl border bg-white p-3">
          <Line
            data={{
              labels: history.map((d) => d.date.slice(5)),
              datasets: [
                {
                  label: 'Steps',
                  data: history.map((d) => d.steps),
                  borderColor: '#159eff',
                  backgroundColor: 'rgba(21,158,255,0.15)',
                  tension: 0.3,
                },
                {
                  label: 'Calories',
                  data: history.map((d) => d.calories),
                  borderColor: '#10b981',
                  backgroundColor: 'rgba(16,185,129,0.15)',
                  tension: 0.3,
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: { legend: { position: 'bottom' } },
              scales: { y: { beginAtZero: true } },
            }}
          />
        </div>
        <ul className="overflow-hidden rounded-2xl border bg-white">
          {history.map((d) => (
            <li key={d.date} className="flex items-center justify-between p-3">
              <span className="font-medium">{d.date}</span>
              <span className="text-sm text-gray-600">{d.steps.toLocaleString()} steps • {d.calories} kcal</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

function Tile({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="mt-1 text-2xl font-bold">{value}</p>
    </div>
  );
}



