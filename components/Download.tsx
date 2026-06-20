import { Apple, Monitor, Download as DownloadIcon, ExternalLink } from 'lucide-react';
import { downloads, APP_VERSION, RELEASES_URL, type Platform } from '@/lib/downloads';

const platformIcons: Record<Platform, typeof Apple> = {
  mac: Apple,
  windows: Monitor,
};

const order: Platform[] = ['windows', 'mac'];

export function Download() {
  return (
    <section id="download" className="bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Download BotikaTech for Windows
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Windows installer is recommended for most users. Version {APP_VERSION}. A macOS build
            is also available below.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {order.map((key) => {
            const target = downloads[key];
            const Icon = platformIcons[key];
            const isRecommended = key === 'windows';
            return (
              <a
                key={key}
                href={target.url}
                className={`flex flex-col items-center rounded-2xl border p-8 text-center transition-all hover:-translate-y-1 hover:bg-slate-800 ${
                  isRecommended
                    ? 'border-brand-500 bg-slate-800 ring-1 ring-brand-500/70'
                    : 'border-slate-700 bg-slate-800/60 hover:border-brand-500'
                }`}
              >
                <Icon className="h-10 w-10 text-white" />
                {isRecommended ? (
                  <span className="mt-3 rounded-full bg-brand-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-300">
                    Recommended
                  </span>
                ) : null}
                <span className="mt-4 text-lg font-semibold text-white">{target.label}</span>
                <span className="mt-1 text-sm text-slate-400">{target.note}</span>
                <span
                  className={`mt-5 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold ${
                    target.available
                      ? 'bg-brand-600 text-white'
                      : 'border border-slate-600 text-slate-300'
                  }`}
                >
                  {target.available ? (
                    <>
                      <DownloadIcon className="h-4 w-4" />
                      {isRecommended ? 'Download .exe' : 'Download'}
                    </>
                  ) : (
                    <>
                      <ExternalLink className="h-4 w-4" />
                      View releases
                    </>
                  )}
                </span>
              </a>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-slate-400">
          Looking for a specific version? Browse all builds on the{' '}
          <a
            href={RELEASES_URL}
            className="font-medium text-brand-400 underline-offset-2 hover:underline"
          >
            GitHub releases page
          </a>
          .
        </p>
      </div>
    </section>
  );
}
