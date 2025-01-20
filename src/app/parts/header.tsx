import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <div className="bg-[#161616] h-16 w-full flex items-center justify-center">
      <div className="flex flex-row items-center max-w-screen-xl px-10 w-full">
        <Link href="/">
          <p className="text-foreground font-semibold tracking-tight">
            Twan Luttik
          </p>
        </Link>

        <div className="flex flex-row gap-2 ml-10">
          <Link href="/projects">
            <Button className="text-white" variant="link" size="default">
              Projects
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="text-white" variant="link" size="default">
              contact
            </Button>
          </Link>
        </div>
        {/* <Link href="/contact">
          <Button variant="link">Projects</Button>
        </Link> */}
      </div>
    </div>
  );
};
