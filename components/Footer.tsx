import { Logo } from './Logo';
import { navLinks, site } from '@/lib/content';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 sm:px-6 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <Logo />
          <p className="text-sm text-slate-500">Offline pharmacy management software.</p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-brand-600"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${site.email}`}
            className="text-sm font-medium text-slate-600 hover:text-brand-600"
          >
            {site.email}
          </a>
        </nav>
      </div>
      <div className="border-t border-slate-100 py-4">
        <p className="text-center text-sm text-slate-400">
          {site.name} &copy;{year}
        </p>
      </div>
    </footer>
  );
}
