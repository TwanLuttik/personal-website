"use client";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800 bg-black">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Left side - Signed in status */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400">
            SIGNED IN AS
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#9ACD32]">
            TWAN LUTTIK
          </span>
        </div>

        {/* Right side - Status indicator */}
      </div>

      {/* Diagonal stripe section */}
      <div className="relative  overflow-hidden border-t border-neutral-800 bg-black">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              #25252500,
              #25252500 5px,
              #252525 5px,
              #252525 10px
            )`,
          }}
        />
        <div className="relative flex items-center justify-between px-4 py-3">
          {/* <span className="font-mono text-xs uppercase tracking-wider text-black mix-blend-difference">
            ADD A COMMENT
          </span>
          <button className="border border-neutral-700 bg-black px-6 py-1.5 font-mono text-xs uppercase tracking-wider text-neutral-300 transition-colors hover:bg-neutral-900">
            SEND
          </button> */}
        </div>
      </div>

      {/* Suggestions section */}
      {/* <div className="border-t border-neutral-800 bg-black px-4 py-2">
        <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-600">
          SUGGESTIONS
        </span>
      </div> */}

      {/* Action buttons */}
      {/* <div className="flex items-center justify-between border-t border-neutral-800 bg-black px-4 py-3">
        <div className="flex gap-4">
          <button className="border-b border-neutral-700 pb-1 font-mono text-[10px] uppercase tracking-wider text-neutral-400 transition-colors hover:border-neutral-500 hover:text-neutral-300">
            LET'S EMPHASISE THIS
          </button>
          <button className="border-b border-neutral-700 pb-1 font-mono text-[10px] uppercase tracking-wider text-neutral-400 transition-colors hover:border-neutral-500 hover:text-neutral-300">
            MAKE THIS PROMINENT
          </button>
        </div>

        <div className="relative">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                #9ACD32,
                #9ACD32 4px,
                #7BA428 4px,
                #7BA428 8px
              )`,
            }}
          />
          <div className="relative border border-[#9ACD32] px-4 py-1.5">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-black">
              YOU ARE CONNECTED!
            </span>
          </div>
        </div>
      </div> */}
    </header>
  );
};
