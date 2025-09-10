import Link from "next/link";

const Page = () => {
  return (
    <div className=" h-full w-full p-4">
      <p>Labubu Keychain</p>
      <div className="flex flex-col mt-4">
        <Link href={"labubu-keychain/policy"}>
          <p className="hover:underline">Policy</p>
        </Link>
        <Link href={"labubu-keychain/support"}>
          <p className="hover:underline">Support</p>
        </Link>
      </div>
    </div>
  );
};

export default Page;
