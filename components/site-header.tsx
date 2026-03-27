import { navItems } from '@/data/content';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-mist/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-[var(--font-heading)] text-lg font-semibold" aria-label="Go to top">
          yasmg.studio
        </a>
        <nav aria-label="Primary">
          <ul className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-ink/75 transition hover:text-plum focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum/30"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
