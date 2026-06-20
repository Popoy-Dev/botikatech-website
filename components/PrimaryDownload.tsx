'use client';

import { useEffect, useState } from 'react';
import { Download, Apple, Monitor, Terminal } from 'lucide-react';
import { downloads, detectPlatform, type Platform } from '@/lib/downloads';

const icons: Record<Platform, typeof Apple> = {
  mac: Apple,
  windows: Monitor,
  linux: Terminal,
};

export function PrimaryDownload() {
  const [platform, setPlatform] = useState<Platform>('mac');

  useEffect(() => {
    setPlatform(detectPlatform(navigator.userAgent));
  }, []);

  const target = downloads[platform];
  const Icon = icons[platform];

  return (
    <div className="flex flex-col items-center gap-2 sm:items-start">
      <a
        href={target.url}
        className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-600/20 transition-all hover:bg-brand-700 hover:shadow-brand-600/30"
      >
        <Icon className="h-5 w-5" />
        {target.available ? `Download for ${target.label}` : `Get BotikaTech (${target.label})`}
        <Download className="h-4 w-4 opacity-80" />
      </a>
      <span className="text-sm text-slate-500">{target.note}</span>
    </div>
  );
}
