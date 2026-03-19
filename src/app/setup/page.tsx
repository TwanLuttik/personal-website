"use client";

export default function Setup() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-start py-16 px-5">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl">Workstation Setup</h1>
          <p className="text-lg text-neutral-200">Hardware and equipment.</p>
        </div>

        <ul className="w-full flex flex-col gap-3 text-neutral-300 pt-10">
          <li>• Macbook Pro M1 Max 16-Inch, 32 GB, 1TB SSD</li>
          <li>• LG 48 Inch OLED 4K</li>
          <li>• 1500 Dollar Standing Desk (brand not known)</li>
          <li>• iPhone 16 Pro Max</li>
          <li>• Samsung S24</li>
          <li>• iPad Pro 12.9 3rd Generation</li>
          <li>• Dell PowerEdge 720 Server (32GB RAM, 2 Intel Xeon CPU 2.1 GHz, 24 cores)</li>
          <li>• Windows Laptop (RTX 4060, 13th Gen Intell Core i9-13900HX )</li>
          <li>• Audio Technica AT2040 + Minifuse 1 Interface</li>
        </ul>
      </main>
    </div>
  );
}
