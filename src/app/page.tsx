"use client";

import Image from "next/image";

export default function Home() {
	const openLink = () => {
		window.location.assign("https://x.com/twanluttik");
	};

	return (
		<div className="bg-black h-full w-full justify-center items-center flex">
			<div className="flex flex-col">
				<Image
					src="/assets/me.jpg"
					alt="me"
					width="150"
					height="150"
					className="rounded-2xl mb-6"
				/>
				<p className="font-semibold text-2xl">Twan Luttik</p>
				<p className="font-light mt-1 text-white/60">
					... A simple software engineer that likes katsu curry
				</p>

				<p
					className="text-white/60 mt-10 hover:underline cursor-pointer"
					onClick={openLink}
				>
					x.com/twanluttik
				</p>
			</div>
		</div>
	);
}
