"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Items = [
  { name: "Projects", path: "/projects" },
  { name: "Socials", path: "/socials" },
  { name: "Blog", path: "/blog" },
];

export default function Component() {
  const pathname = usePathname();

  return (
    <div className="h-16 w-full">
      <div className="mx-auto flex h-full w-full max-w-screen-lg items-center space-x-5 px-5">
        <Link href="/">
          <Button
            variant="link"
            className="h-5 p-1"
            style={{ opacity: pathname === "/" ? 1 : 0.5 }}
          >
            Home
          </Button>
        </Link>
        {Items.map((item, index) => (
          <Link href={item.path} key={index}>
            <Button
              variant="link"
              className="h-5 p-1"
              style={{ opacity: pathname?.includes(item.path) ? 1 : 0.5 }}
            >
              {item.name}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
