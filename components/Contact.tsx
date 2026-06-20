import { MessageCircle, Mail } from 'lucide-react';
import { site } from '@/lib/content';

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
      <div className="overflow-hidden rounded-3xl bg-brand-50 ring-1 ring-inset ring-brand-100">
        <div className="grid items-center gap-8 p-8 sm:p-12 lg:grid-cols-2">
          <div>
            <span className="section-eyebrow bg-white">Get your activation key</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Questions or ready to activate?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Message us on Facebook or send an email. After your payment is confirmed, we will
              send your unique activation key so you can unlock all premium features.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href={site.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
                <MessageCircle className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-sm font-medium text-slate-500">Message us on</span>
                <span className="block text-lg font-semibold text-slate-900">
                  {site.facebookLabel}
                </span>
              </span>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
                <Mail className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-sm font-medium text-slate-500">Email us at</span>
                <span className="block text-lg font-semibold text-slate-900">{site.email}</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
