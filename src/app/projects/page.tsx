"use client";

const Page = () => {
  const openLink = (e: string) => {
    window.location.assign(e);
  };
  return (
    <>
      <div className="min-w-[100px]">
        <p className="mb-10 italic opacity-80">
          There are my projects currently
        </p>
        <p
          className="cursor-pointer text-white/60 hover:underline"
          onClick={() => {
            openLink("https://coatcheck.app");
          }}
        >
          coatcheck.app
        </p>
        <p
          className="cursor-pointer text-white/60 hover:underline"
          onClick={() => {
            openLink("https://streambk.com");
          }}
        >
          streambk.com
        </p>
      </div>
    </>
  );
};

export default Page;
