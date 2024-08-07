import dayjs from "dayjs";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const LifeBlog = [
  {
    date: new Date(2024, 7),
    title: "5 years ago I left Europe",
    link: "/left-europe-5-years-ago",
  },
  {
    date: new Date(2019, 3),
    title: "Working at my first startup - Notify.me",
    link: "/first-tech-startup",
  },
  {
    date: new Date(2015, 1),
    title: "The beginning of my work-a-holic Life",
    link: "/start-of-my-life",
  },
];

export default function Home() {
  return (
    <div className="">
      <div className="flex w-full max-w-sm flex-col">
        {LifeBlog.map((item, index) => (
          <div
            className={twMerge(
              index === 0 ? "" : "opacity-50",
              "group mb-2 flex flex-row items-center rounded-xl px-3 py-1.5 transition-all hover:bg-secondary hover:opacity-100",
            )}
            key={index}
          >
            <Link href={"blog/" + item.link}>
              <p
                className={twMerge(
                  index === 0 ? "font-[500]" : "font-[400]",
                  "h-5 w-full p-0 text-[14px] ",
                )}
              >
                {item.title}
              </p>
            </Link>
            <div
              className={twMerge(
                index === 0
                  ? "animate-blink bg-green-500/80"
                  : "bg-zinc-600/10 transition group-hover:bg-primary",
                "mx-3 h-3 w-1 rounded-sm ",
              )}
              style={{ transform: "rotate(12deg)" }}
            ></div>
            <p className=" text-sm italic opacity-70">
              {dayjs(item.date).format("MMM - YYYY")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
