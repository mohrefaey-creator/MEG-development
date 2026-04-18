export const dynamic = 'force-static';

import {
  dashboard,
  planner,
  coverage,
  coaching,
  survey,
  approvals,
  aiAssist,
  saudiMade,
  megLogo,
  heroImage,
  ratingMatrix,
} from '@/app/images';

export default function VisitiQLandingPage() {
  const features = [
    { title: 'Smart visit planning', desc: 'Tap-to-place weekly and monthly planning built for field teams.' },
    { title: 'Coverage & reach analytics', desc: 'Track actual vs. target visits with clear dashboard visibility.' },
    { title: 'Structured coaching', desc: 'Turn ride-alongs into measurable development with scoring and feedback.' },
    { title: 'Offline-first execution', desc: 'Keep working in clinics, hospitals, and remote areas with automatic sync.' },
    { title: 'Role-based hierarchy', desc: 'Admins, BU managers, district managers, and reps each see relevant data.' },
    { title: 'Approvals & governance', desc: 'Govern requests, exports, and edits within secure permission boundaries.' },
  ];

  // All images are now imported from ./images and embedded as base64 data URIs.
  const modules = [
    { title: 'Dashboard & analytics', src: dashboard },
    { title: 'Visit planner', src: planner },
    { title: 'Coverage & targets', src: coverage },
    { title: 'Coaching & evaluation', src: coaching },
    { title: 'Surveys & response insights', src: survey },
    { title: 'Approvals & secure access', src: approvals },
  ];

  const ScreenCard = ({ src, alt, title }: { src: string; alt: string; title: string }) => (
    <div className="overflow-hidden rounded-[26px] border border-white/10 bg-white shadow-2xl">
      <div className="border-b border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">{title}</div>
      <div className="bg-white p-3">
        <img src={src} alt={alt} className="w-full rounded-[16px] object-contain" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#071b56] text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.22),_transparent_40%),linear-gradient(180deg,#0a2a7a_0%,#071b56_100%)]">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '44px 44px' }} />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:px-10 lg:px-12 lg:py-24">
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <div className="text-4xl font-bold tracking-tight md:text-5xl">VisitiQ</div>
              <div className="mt-1 text-lg text-blue-200">Advancing Pharma Engagement.</div>
            </div>
            <div className="mb-4 inline-flex w-fit items-center rounded-full border border-blue-300/30 bg-white/5 px-4 py-2 text-sm text-blue-100 backdrop-blur">Pharma CRM • KSA • GCC</div>
            <h1 className="max-w-xl text-4xl font-semibold leading-tight md:text-6xl">Field-force excellence platform for pharma and medical-device teams.</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100/90 md:text-xl">A purpose-built CRM for planning, engaging, coaching, and growing HCP relationships with smarter planning, tighter governance, and stronger visibility.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-2xl bg-white px-6 py-3 font-medium text-[#071b56] shadow-lg">Request a demo</a>
              <a href="#features" className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 font-medium text-white">Explore features</a>
              <a href="#modules" className="rounded-2xl border border-blue-300/30 bg-blue-400/10 px-6 py-3 font-medium text-blue-100">Review product</a>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-4xl overflow-hidden rounded-[28px] shadow-2xl ring-1 ring-white/10">
              <img src={heroImage} alt="VisitiQ — field-force excellence for pharma and medical-device teams" className="w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12 lg:py-24">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">Why VisitiQ matters</div>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Built for real pharma field execution.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-200/90">VisitiQ streamlines the full field-force lifecycle: planning HCP visits, tracking coverage and reach, coaching reps, governing requests, and supporting offline execution.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-200/85">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:px-10 lg:px-12 lg:py-24">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">Operating model</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Segment the right HCPs. Align the right teams.</h2>
            <ul className="mt-8 space-y-4 text-lg leading-8 text-slate-200/90">
              <li>Dual-axis classification combines HCP potential with current company relationship.</li>
              <li>Default monthly targets support structured call planning by class.</li>
              <li>R-class adds a configurable remote-engagement layer for digital outreach.</li>
              <li>Hierarchical visibility ensures each role sees only relevant data.</li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white p-6 shadow-2xl">
            <img src={ratingMatrix} alt="VisitiQ operating model: HCP classification matrix and role hierarchy" className="h-full w-full object-contain" />
          </div>
        </div>
      </section>

      <section id="modules" className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12 lg:py-24">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">Connected modules</div>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Real product screens, not marketing placeholders.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-200/90">The platform connects planning, coverage, coaching, surveys, and governance in one product experience.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => (
            <ScreenCard key={module.title} src={module.src} alt={module.title} title={module.title} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">Differentiators</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Why this CRM stands out.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200/90">
              VisitiQ is designed for practical commercial execution, combining planning, coverage, coaching, governance, and offline continuity in one focused pharma CRM experience.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { title: 'Offline-first architecture', desc: 'Reliable field execution in low-connectivity environments.' },
                { title: 'Tap-to-place planning', desc: 'Reduce scheduling friction to a few quick taps.' },
                { title: 'Dual classification + R-class', desc: 'Potential value, relationship strength, and remote targeting in one model.' },
                { title: 'Integrated coaching', desc: 'Manager accompaniment, scoring, and analytics built into daily operations.' },
                { title: 'Hierarchical intelligence', desc: "Metrics and workflows automatically scope to the user's role." },
                { title: 'Enterprise-ready exports', desc: 'Excel and CSV outputs support downstream BI and compliance workflows.' },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-200/85">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-white/10 shadow-2xl">
            <img src={aiAssist} alt="VisitiQ AI assistance visual" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.95fr_1.05fr] md:px-10 lg:px-12 lg:py-20">
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white shadow-2xl">
            <img src={saudiMade} alt="Saudi-made VisitiQ visual" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">Region-ready platform</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Built in Saudi Arabia for pharma teams across the region.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200/90">
              VisitiQ is tailored for regional field-force realities, from structured HCP segmentation and coverage governance to mobile-first execution and manager-led coaching.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white/90">Designed for KSA and GCC commercial workflows</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white/90">Practical for pharmaceutical and medical-device teams</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-black/20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1fr_auto] md:px-10 lg:px-12 lg:py-20">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">Get started with VisitiQ</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Pilot in days. Roll out in weeks.</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200/90">Hosted as a fully managed PWA with role-based onboarding, custom data import for HCPs, HCOs, products, and territories, and a rollout model built for commercial teams.</p>
          </div>
          <div className="flex items-center">
            <div className="rounded-[28px] border border-white/10 bg-white p-6 text-center shadow-xl">
              <img src={megLogo} alt="MEG Development" className="mx-auto h-16 w-auto object-contain" />
              <div className="mt-5 text-xl font-semibold text-[#071b56]">Talk to MEG Development</div>
              <div className="mt-2 text-sm text-slate-600">Schedule a live demo for your team.</div>
              <button className="mt-6 rounded-2xl bg-[#071b56] px-6 py-3 font-medium text-white">Contact sales</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
