export default function Page() {
  const today = new Date().toLocaleDateString();
  return (
    <main className="space-y-4">
      <header className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-sm text-gray-500">{today}</p>
        </div>
      </header>
      <section className="grid grid-cols-2 gap-3">
        <Card title="Steps" value="6,842" subtitle="Today" />
        <Card title="Calories" value="1,245" subtitle="kcal" />
        <Card title="Active" value="54m" subtitle="time" />
        <Card title="Heart" value="72" subtitle="bpm" />
      </section>
      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Recent Activity</h2>
        <ul className="divide-y rounded-lg border bg-white">
          {[
            { t: 'Morning Run', d: '3.2 km • 23 min' },
            { t: 'Yoga Session', d: '30 min • Stretch' },
            { t: 'Cycling', d: '8.5 km • 28 min' },
          ].map((it, i) => (
            <li key={i} className="flex items-center justify-between p-3">
              <span>{it.t}</span>
              <span className="text-sm text-gray-500">{it.d}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

function Card({ title, value, subtitle }: { title: string; value: string; subtitle: string }) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="mt-1 text-2xl font-bold">{value}</p>
      <p className="text-xs text-gray-400">{subtitle}</p>
    </div>
  );
}



