import { KeyRound } from 'lucide-react';
import { activationSteps } from '@/lib/content';

export function HowToActivate() {
  return (
    <section id="how-it-works" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">
            <KeyRound className="h-4 w-4" />
            Activation
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How to activate in 5 steps
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            BotikaTech installs free. Start with the Windows installer, then unlock premium
            features by choosing a plan and entering your activation key inside the app.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {activationSteps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-slate-100 bg-white p-6"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 text-base font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-slate-500">
          In the app, open <span className="font-semibold text-slate-700">Settings → Activation</span>,
          choose your plan duration, and paste the key we send you. Your remaining days are shown
          right after activation.
        </p>
      </div>
    </section>
  );
}
