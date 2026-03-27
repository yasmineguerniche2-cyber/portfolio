type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-plum">{eyebrow}</p>
      <h2 className="font-[var(--font-heading)] text-3xl font-semibold leading-tight text-ink md:text-4xl">
        {title}
      </h2>
      {description ? <p className="text-base leading-relaxed text-ink/75">{description}</p> : null}
    </div>
  );
}
