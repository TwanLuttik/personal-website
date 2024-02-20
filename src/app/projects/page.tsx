"use client";
import Link from "next/link";

const Page = () => {
	const openLink = (e: string) => {
		window.location.assign(e);
	};
	return (
		<div className="flex h-full w-full items-center justify-center bg-black">
			<div className="flex flex-col">
				<div className="min-w-[100px]">
					<p className="text-xl">TWAN LUTTIK</p>
					<p className="mt-10 font-medium">PROJECTS</p>
					<p
						className="cursor-pointer text-white/60 hover:underline"
						onClick={() => {
							openLink("https://streambk.com");
						}}
					>
						streambk.com
					</p>
				</div>
			</div>
		</div>
	);
};

export default Page;
