import Link from "next/link";

export const Header = () => {
  return (
    <div className="w-full h-12">
      <div className="w-full max-w-4xl px-5 mx-auto flex-row h-full flex gap-x-5 items-center">
        <Link href="/">
          <p className="font-semibold hover:opacity-50 transition-opacity active:opacity-30">Home</p>
        </Link>
        <Link href="/projects">
          <p className="font-semibold hover:opacity-50 transition-opacity active:opacity-30">Projects</p>
        </Link>
        <Link href="/twan-de-burger">
          <p className="font-semibold hover:opacity-50 transition-opacity active:opacity-30">Twan de Burger</p>
        </Link>
        <Link href="/setup">
          <p className="font-semibold hover:opacity-50 transition-opacity active:opacity-30">Work Setup</p>
        </Link>
      </div>
    </div>
  );
};
