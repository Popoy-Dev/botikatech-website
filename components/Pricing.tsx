import { Check, Star } from 'lucide-react';
import { plans } from '@/lib/content';

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="section-eyebrow">Simple, honest pricing</span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Choose a plan that fits your pharmacy
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Every plan includes all features plus a preloaded 1000+ product list, so you can start
          selling fast with less manual setup.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-2xl border bg-white p-6 ${
              plan.highlight
                ? 'border-brand-300 shadow-xl shadow-brand-100/60 ring-1 ring-brand-200'
                : 'border-slate-100'
            }`}
          >
            {plan.highlight && (
              <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                <Star className="h-3 w-3" />
                Most popular
              </span>
            )}
            <h3 className="text-lg font-semibold text-slate-900">{plan.name}</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold tracking-tight text-slate-900">
                {plan.price}
              </span>
              <span className="text-sm text-slate-500">{plan.period}</span>
            </div>

            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={`mt-6 inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                plan.highlight
                  ? 'bg-brand-600 text-white hover:bg-brand-700'
                  : 'border border-slate-200 text-slate-700 hover:border-brand-300 hover:text-brand-700'
              }`}
            >
              Get activation key
            </a>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-slate-500">
        Activation keys are sent after payment confirmation. Contact us for payment options.
      </p>
    </section>
  );
}
