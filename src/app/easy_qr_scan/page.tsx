import Link from "next/link";

const Page = () => {
  return (
    <div className="bg-black h-full w-full p-4">
      <p>Easy QR Scany</p>
      <div className="flex flex-col mt-4">
        <Link href={"easy_qr_scan/policy"}>
          <p className="hover:underline">Policy</p>
        </Link>
        <Link href={"easy_qr_scan/support"}>
          <p className="hover:underline">Support</p>
        </Link>
      </div>
    </div>
  );
};

export default Page;
