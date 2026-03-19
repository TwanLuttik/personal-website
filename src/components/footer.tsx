export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t border-neutral-800 mt-auto">
      <div className="w-full max-w-4xl px-5 mx-auto py-6">
        <p className="text-sm text-neutral-600">
          &copy; {currentYear} Twan Luttik. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
