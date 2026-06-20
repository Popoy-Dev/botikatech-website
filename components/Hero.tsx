import { WifiOff, ShieldCheck, HardDrive } from 'lucide-react';
import { PrimaryDownload } from './PrimaryDownload';
import { site } from '@/lib/content';

const badges = [
  { icon: WifiOff, label: 'Works fully offline' },
  { icon: ShieldCheck, label: 'Your data stays local' },
  { icon: HardDrive, label: 'Windows installer ready' },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 to-white"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <div className="animate-fade-up text-center lg:text-left">
          <span className="section-eyebrow">Pharmacy software for small businesses</span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            {site.tagline}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">{site.description}</p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:items-start lg:items-center">
            <PrimaryDownload />
            <a
              href="#pricing"
              className="inline-flex items-center rounded-xl border border-slate-200 px-6 py-3.5 text-base font-semibold text-slate-700 transition-colors hover:border-brand-300 hover:text-brand-700"
            >
              View pricing
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 lg:justify-start">
            {badges.map((b) => (
              <li key={b.label} className="flex items-center gap-2 text-sm text-slate-600">
                <b.icon className="h-4 w-4 text-brand-600" />
                {b.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-up">
          <div className="relative mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-300/40">
            <div className="flex items-center gap-1.5 px-3 py-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <div className="overflow-hidden rounded-xl border border-slate-100">
              <AppPreview />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Lightweight stylized mock of the desktop app dashboard. */
function AppPreview() {
  return (
    <div className="flex h-72 bg-slate-50 text-[10px]">
      <aside className="flex w-28 flex-col gap-1 border-r border-slate-100 bg-white p-2">
        {['Dashboard', 'Advance Reports','Cash Fund', 'Products', 'Inventory', 'Orders', 'Reports', 'Customers'].map((item, i) => (
          <div
            key={item}
            className={`rounded px-2 py-1.5 font-medium ${
              i === 0 ? 'bg-brand-50 text-brand-700' : 'text-slate-500'
            }`}
          >
            {item}
          </div>
        ))}
      </aside>
      <main className="flex-1 p-3">
        <div className="mb-3 h-5 w-24 rounded bg-brand-100" />
        <div className="grid grid-cols-3 gap-2">
          {['Sales', 'Profit', 'Stock'].map((k) => (
            <div key={k} className="rounded-lg border border-slate-100 bg-white p-2">
              <div className="text-slate-400">{k}</div>
              <div className="mt-1 h-3 w-10 rounded bg-slate-200" />
            </div>
          ))}
        </div>
        <div className="mt-3 flex h-28 items-end gap-1.5 rounded-lg border border-slate-100 bg-white p-3">
          {[40, 65, 50, 80, 60, 90, 70].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-brand-400"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
