"use client";

import Image from "next/image";
import { GrLocationPin } from "react-icons/gr";
import { FaMusic } from "react-icons/fa";

export default function Home() {
	const openLink = (e: string) => {
		window.location.assign(e);
	};

	return (
		<div className="flex h-full w-full items-center justify-center bg-black py-10">
			<div className="mx-auto flex h-full w-full max-w-screen-xl flex-col px-10">
				<div className="mb-4">
					<p className="font-bold text-4xl mb-2">TWAN LUTTIK</p>
					<p className="font-bold mb-10">I{`'`}m a simple software engineer</p>

					<div className="flex flex-row">
						<GrLocationPin size={20} className="mr-1" />
						<p className="font-bold">CANADA, VANCOUVER</p>
					</div>
				</div>

				<div className="flex items-center">
					<FaMusic size={14} className="mr-2.5" />
					<p className="mb-1 text-xl text-white">Check out the <strong>twan de burger</strong> song</p>
				</div>


				<p className="hover:opacity-70 active:opacity-60 transition-all cursor-pointer select-none">https://github.com/Brendonovich/twan-de-burger</p>

				<p className="mt-10 text-2xl font-semibold tracking-tight">Socials</p>
				<div className="mt-2 flex flex-col gap-y-0.5">
					<LinkComp baseUrl="x.com" afterUrl="/twanluttik" />
					<LinkComp baseUrl="linkedin.com" afterUrl="/in/twanluttik" />
					<LinkComp baseUrl="github.com" afterUrl="/twanluttik" />
				</div>

				<p className="mt-10 text-2xl font-semibold tracking-tight">Projects</p>
				<div className="mt-2 flex flex-col gap-y-0.5">
					<div className="group mb-4">
						<p
							className="cursor-pointer text-green-400 transition-all group-hover:underline "
							onClick={() => {
								openLink("https://coatcheck.app");
							}}
						>
							coatcheck.app
						</p>
						<p className="opacity-70 transition-all group-hover:opacity-100">
							Cirtualize your coat ticket for the club or the bar and never lose
							it again.
						</p>
					</div>
					<div className="group mb-4">
						<div className="flex flex-row gap-x-2">
							<p
								className="cursor-pointer text-green-400 group-hover:underline"
								onClick={() => {
									openLink("https://streambk.com");
								}}
							>
								streambk.com
							</p>
							<p className="italic text-orange-500">(low priority)</p>
						</div>
						<p className="opacity-70 transition-all group-hover:opacity-100 ">
							Streambk is a audio collaboration tool where you can leave notes
							behind on the audio with a timestamp.
						</p>
					</div>
				</div>

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
			className="group flex w-fit cursor-pointer flex-row"
			onClick={() => openLink(`https://${baseUrl}/${afterUrl}`)}
		>
			<p className="text-white/60">{baseUrl}</p>
			<p className="text-white/60 transition-all group-hover:font-semibold group-hover:text-white">
				{afterUrl}
			</p>
		</div>
	);
};
