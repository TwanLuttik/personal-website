"use client";

import { useRouter } from "next/navigation";
import { ProjectType } from "../page";

export const LinkBtn = (item: ProjectType) => {
  const router = useRouter();

  return (
    <p
      className="cursor-pointer text-sm italic opacity-30 transition hover:opacity-50 active:opacity-80"
      onClick={() => router.push(item.link)}
    >
      {item.link}
    </p>
  );
};
