import Link from "next/link";

const list = [{ name: "Twitter / X", link: "https://x.com/twanluttik" }];

export default function Page() {
  return (
    <div className="flex flex-col">
      <p className="mx-auto mb-10 text-center text-sm">
        my social media handles
      </p>

      <Link href="https://x.com/twanluttik">
        <p>Twitter</p>
      </Link>
      <Link href="https://instagram.com/twanluttik">
        <p>Instagram</p>
      </Link>
      <Link href="https://github.com/twanluttik">
        <p>Github</p>
      </Link>
    </div>
  );
}

const Btn = () => {
  return (
    <Link href="https://instagram.com/twanluttik">
      <p>Instagram</p>
    </Link>
  );
};
