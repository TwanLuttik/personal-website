import Link from "next/link";

const Page = () => {
	return (
		<div className="bg-black h-full w-full p-4">
			<p>Easy QR Scany</p>
			<div className="flex flex-col mt-4">
				<Link href={"Policy"}>
					<p className="hover:underline">Policy</p>
				</Link>
				<Link href={"Support"}>
					<p className="hover:underline">Terms</p>
				</Link>
			</div>
		</div>
	);
};

export default Page;
