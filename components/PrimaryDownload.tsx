'use client';

import { useEffect, useState } from 'react';
import { Download, Apple, Monitor } from 'lucide-react';
import { downloads, detectPlatform, type Platform } from '@/lib/downloads';

const icons: Record<Platform, typeof Apple> = {
  mac: Apple,
  windows: Monitor,
};

export function PrimaryDownload() {
  const [platform, setPlatform] = useState<Platform>('windows');

  useEffect(() => {
    setPlatform(detectPlatform(navigator.userAgent));
  }, []);

  const target = downloads[platform];
  const Icon = icons[platform];
  const isWindows = platform === 'windows';
  const ctaLabel = isWindows
    ? 'Download for Windows'
    : target.available
      ? `Download for ${target.label}`
      : `View ${target.label} builds`;

  return (
    <div className="flex flex-col items-center gap-2 sm:items-start">
      <a
        href={target.url}
        className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-600/20 transition-all hover:bg-brand-700 hover:shadow-brand-600/30"
      >
        <Icon className="h-5 w-5" />
        {ctaLabel}
        <Download className="h-4 w-4 opacity-80" />
      </a>
      <span className="text-sm text-slate-500">{target.note}</span>
    </div>
  );
}
