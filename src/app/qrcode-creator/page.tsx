import Link from "next/link";

const Page = () => {
	return (
		<div className="bg-black h-full w-full p-4">
			<p>QR Code Creator</p>

			<div className="flex flex-col mt-4">
				<Link href={"ollama_chat/policy"}>
					<p className="hover:underline">Policy</p>
				</Link>
				<Link href={"ollama_chat/support"}>
					<p className="hover:underline">Support</p>
				</Link>
			</div>
		</div>
	)
};

export default Page;
