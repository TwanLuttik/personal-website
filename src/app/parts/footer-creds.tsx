import { ThemeToggle } from "@/components/theme-toggle"

export const FooterCreds = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 flex items-center justify-center gap-3">
      <p className="text-gray-500 dark:text-neutral-600">2025 - Twan Luttik</p>
      <div className="w-px h-4 bg-gray-200 dark:bg-neutral-800" />
      <ThemeToggle />
    </div>
  );
};
