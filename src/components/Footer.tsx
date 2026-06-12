export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-8 px-6 border-t border-[var(--color-border)]"
    >
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p
          className="text-sm text-[var(--color-text-tertiary)]"
        >
          &copy; {year} ary<span className="text-accent">.</span>dev — All
          rights reserved.
        </p>
        <p
          className="text-xs text-[var(--color-text-tertiary)]"
        >
          Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
