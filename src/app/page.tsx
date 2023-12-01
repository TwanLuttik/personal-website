"use client";

import Image from "next/image";

export default function Home() {
	const openLink = (e: string) => {
		window.location.assign(e);
	};

	return (
		<div className="flex h-full w-full items-center justify-center bg-black">
			<div className="flex flex-col">
				<Image
					src="/assets/me.jpg"
					alt="me"
					width="150"
					height="150"
					className="mb-6 rounded-2xl"
				/>
				<p className="text-2xl font-semibold">Twan Luttik</p>
				<p className="mt-1 font-light text-white italic">
					...A simple software engineer that likes katsu curry
				</p>

				<div className="mt-6">
					<LinkComp baseUrl="x.com" afterUrl="/twanluttik" />
					<LinkComp baseUrl="github.com" afterUrl="/twanluttik" />
					<LinkComp baseUrl="linkedin.com" afterUrl="/in/twanluttik" />
				</div>

				<p className="mt-10 font-medium">Projects</p>
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
	);
}

const LinkComp = ({
	baseUrl,
	afterUrl,
}: {
	baseUrl: string;
	afterUrl: string;
}) => {
	const openLink = (e: string) => {
		window.location.assign(e);
	};

	return (
		<div
			className="group flex flex-row cursor-pointer"
			onClick={() => openLink(`https://${baseUrl}/${afterUrl}`)}
		>
			<p className="text-white/60">{baseUrl}</p>
			<p className="text-white/60 group-hover:text-white transition">
				{afterUrl}
			</p>
		</div>
	);
};
