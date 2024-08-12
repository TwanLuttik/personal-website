import { Assets } from "@/constants";
import Image from "next/image";
import { LinkBtn } from "./parts/LinkBtn";

export interface ProjectType {
  title: string;
  link: string;
  description: string;
  images_url?: string;
}

const Projects: ProjectType[] = [
  {
    title: "CoatCheck",
    link: "https://coatcheck.app",
    description:
      "Replacing the paper ticketws and much easier for your customers at busy places they visit.",
    images_url: Assets.CoatcheckPreview,
  },
  {
    title: "Streambk",
    link: "https://streambk.com",
    description: "Collaborate by placing notes on a timestamp",
  },
];
const Page = () => {
  return (
    <div className="min-w-[100px]">
      {Projects.map((item, index) => (
        <div className="mb-10 flex flex-col" key={index}>
          <LinkBtn {...item} />
          <p className="text-2xl font-bold">{item.title}</p>
          <p className="mb-4 opacity-50">{item.description}</p>
          {item?.images_url && (
            <Image
              src={item.images_url}
              height={200}
              width={200}
              className="w-fukl h-full rounded-lg"
              alt={item.title + "image"}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Page;
