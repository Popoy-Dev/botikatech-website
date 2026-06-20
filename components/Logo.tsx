import Image from 'next/image';
import { site } from '@/lib/content';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <a href="#top" className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/botikatech-logo.webp"
        alt={`${site.name} logo`}
        width={32}
        height={32}
        className="h-8 w-8 rounded-md object-contain"
        priority
      />
      <span className="text-lg font-bold tracking-tight text-slate-900">
        Botika<span className="text-brand-600">Tech</span>
      </span>
    </a>
  );
}
