import Link from "next/link";

const Page = () => {
  return (
    <div className="bg-black h-full w-full p-4">
      <p className="font-bold text-3xl">QR Code Creator</p>

      <div className="flex flex-col mt-4">
        <Link href={"qrcode-creator/policy"}>
          <p className="hover:underline">Policy</p>
        </Link>
        <Link href={"qrcode-creator/support"}>
          <p className="hover:underline">Support</p>
        </Link>
      </div>
    </div>
  );
};

export default Page;
