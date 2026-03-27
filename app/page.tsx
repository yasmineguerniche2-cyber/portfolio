import { SectionHeading } from '@/components/section-heading';
import { SiteHeader } from '@/components/site-header';
import { projects, services, testimonials } from '@/data/content';

const highlights = ['Responsive design', 'Clean code', 'Clear communication'];

const processSteps = [
  {
    title: 'Share your needs',
    description:
      'Tell me your goals, audience, and priorities. We align on structure, timeline, and scope early.'
  },
  {
    title: 'Design & build',
    description:
      'I create polished, conversion-friendly layouts and implement a clean, responsive front-end experience.'
  },
  {
    title: 'Review & launch',
    description:
      'We review details together, refine where needed, then launch with confidence and clear next steps.'
  }
];

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:rounded-md focus:bg-white focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <div id="top" />
      <SiteHeader />
      <main id="main">
        <section className="section-shell grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-7">
            <span className="inline-flex rounded-full border border-plum/15 bg-white px-4 py-2 text-xs font-semibold tracking-wide text-plum">
              Freelance web designer &amp; developer
            </span>
            <div className="space-y-5">
              <h1 className="font-[var(--font-heading)] text-4xl font-semibold leading-tight md:text-6xl">
                Premium websites that help small businesses look credible and get more inquiries.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-ink/75">
                I design and build modern, user-friendly websites for freelancers, local services, and growing small
                teams who want a stronger online presence.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-plum focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum/40"
              >
                Let&apos;s work together
              </a>
              <a
                href="#work"
                className="rounded-full border border-ink/20 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:border-plum hover:text-plum focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum/30"
              >
                View my work
              </a>
            </div>
          </div>
          <div className="card relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-rose/20 to-accent/20" />
            <div className="relative space-y-4 rounded-xl border border-ink/10 bg-[#171524] p-5 text-sm text-white">
              <div className="flex items-center gap-2 pb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                <span className="ml-2 text-xs text-white/70">project-shell.tsx</span>
              </div>
              <p className="font-mono text-xs text-white/80">const result = buildWebsite({`{`}</p>
              <p className="pl-4 font-mono text-xs text-purple-200">business: "credible",</p>
              <p className="pl-4 font-mono text-xs text-purple-200">experience: "clear",</p>
              <p className="pl-4 font-mono text-xs text-purple-200">performance: "fast"</p>
              <p className="font-mono text-xs text-white/80">{`}`})</p>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-ink/10 bg-white p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-ink/60">Core stack</p>
                <p className="mt-2 text-sm font-semibold">Next.js · React · TypeScript</p>
              </div>
              <div className="rounded-xl border border-ink/10 bg-white p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-ink/60">Design focus</p>
                <p className="mt-2 text-sm font-semibold">Minimal · Elegant · Conversion-first</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section-shell">
          <SectionHeading
            eyebrow="Services"
            title="Website support tailored to small business goals"
            description="Choose the level of support you need, from a complete website build to focused front-end implementation."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="card" aria-label={service.title}>
                <p className="text-sm font-semibold text-plum">{service.marker}</p>
                <h3 className="mt-3 font-[var(--font-heading)] text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/75">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="section-shell">
          <SectionHeading
            eyebrow="Selected work"
            title="Example projects built for real-world business needs"
            description="Placeholder cases that reflect the type of websites I typically build for local brands and independent professionals."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="card flex h-full flex-col" aria-label={project.title}>
                <div className="mb-5 rounded-xl border border-ink/10 bg-gradient-to-br from-white to-mist p-4">
                  <div className="h-28 rounded-lg border border-dashed border-plum/30 bg-white/70 p-3 text-xs leading-relaxed text-ink/70">
                    {project.preview}
                  </div>
                </div>
                <h3 className="font-[var(--font-heading)] text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/75">{project.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Project stack">
                  {project.tags.map((tag) => (
                    <li key={tag} className="rounded-full bg-plum/10 px-3 py-1 text-xs font-medium text-plum">
                      {tag}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-5 inline-flex text-sm font-semibold text-plum underline-offset-4 transition hover:underline"
                >
                  View project
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section-shell grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <SectionHeading
              eyebrow="About"
              title="A freelance partner focused on practical, elegant websites"
              description="I’m behind yasmg.studio, a freelance web designer and developer helping small businesses and independent professionals launch websites that are simple, useful, and aligned with their goals. My approach combines clean design, modern front-end development, and thoughtful communication throughout the project."
            />
          </div>
          <div className="card space-y-4">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl bg-mist p-4">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-plum" aria-hidden="true" />
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="process" className="section-shell">
          <SectionHeading
            eyebrow="Process"
            title="A simple, transparent 3-step workflow"
            description="Every project is guided by clear milestones so you know what is happening and when."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <article key={step.title} className="card">
                <p className="text-sm font-semibold text-plum">Step {index + 1}</p>
                <h3 className="mt-2 font-[var(--font-heading)] text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="testimonials" className="section-shell">
          <SectionHeading
            eyebrow="Testimonials"
            title="What clients appreciated most"
            description="Short feedback snippets from fictional small business clients as realistic placeholders."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="card">
                <blockquote className="text-sm leading-relaxed text-ink/80">“{testimonial.quote}”</blockquote>
                <figcaption className="mt-4 text-sm font-medium">
                  {testimonial.name} <span className="text-ink/60">· {testimonial.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="contact" className="section-shell">
          <div className="card relative overflow-hidden">
            <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-gradient-to-bl from-accent/25 to-rose/25 blur-2xl" />
            <div className="relative grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-plum">Contact</p>
                <h2 className="font-[var(--font-heading)] text-3xl font-semibold leading-tight md:text-4xl">
                  Ready for a website that feels as professional as your business?
                </h2>
                <p className="max-w-xl leading-relaxed text-ink/75">
                  Let’s create a high-quality site that communicates your value clearly and helps the right clients reach
                  you.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="mailto:hello@yasmg.studio"
                    className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-plum focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum/30"
                  >
                    Let&apos;s start your project
                  </a>
                  <p className="text-sm text-ink/75">hello@yasmg.studio</p>
                </div>
              </div>
              <aside className="rounded-2xl border border-ink/10 bg-white p-5" aria-label="Contact details">
                <p className="text-sm font-semibold text-plum">Quick details</p>
                <ul className="mt-3 space-y-2 text-sm text-ink/75">
                  <li>Typical timeline: 2–6 weeks</li>
                  <li>Project type: one-page & multi-page websites</li>
                  <li>Location: remote collaboration</li>
                </ul>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-[var(--font-heading)] text-lg font-semibold">yasmg.studio</p>
            <p className="text-sm text-ink/70">Modern web design and development for growing small brands.</p>
          </div>
          <div className="flex gap-5 text-sm">
            <a href="#" className="transition hover:text-plum" aria-label="Instagram link placeholder">
              Instagram
            </a>
            <a href="#" className="transition hover:text-plum" aria-label="Fiverr link placeholder">
              Fiverr
            </a>
            <a href="#" className="transition hover:text-plum" aria-label="Malt link placeholder">
              Malt
            </a>
          </div>
        </div>
        <p className="border-t border-ink/10 py-4 text-center text-xs text-ink/60">
          © {new Date().getFullYear()} yasmg.studio. All rights reserved.
        </p>
      </footer>
    </>
  );
}
