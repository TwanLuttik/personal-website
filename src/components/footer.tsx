export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full border-t border-border/60">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-2 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Twan Luttik
        </p>
        <p className="text-xs text-muted-foreground/70">
          Built with Next.js · From the Netherlands
        </p>
      </div>
    </footer>
  );
};
