const setupCategories = [
  {
    title: "Daily drivers",
    items: [
      {
        name: "MacBook Pro M1 Max",
        detail: "16-inch · 32 GB · 1 TB SSD",
      },
      {
        name: "Windows laptop",
        detail: "RTX 4060 · 13th Gen Intel Core i9-13900HX",
      },
      {
        name: "iPhone 16 Pro Max",
        detail: "Primary phone",
      },
      {
        name: "Samsung S24",
        detail: "Android device",
      },
      {
        name: "iPad Pro 12.9",
        detail: "3rd generation",
      },
    ],
  },
  {
    title: "Desk",
    items: [
      {
        name: "LG 48″ OLED 4K",
        detail: "Main display",
      },
      {
        name: "Standing desk",
        detail: "~$1,500 · brand unknown",
      },
    ],
  },
  {
    title: "Server & audio",
    items: [
      {
        name: "Dell PowerEdge 720",
        detail: "32 GB RAM · dual Intel Xeon 2.1 GHz · 24 cores",
      },
      {
        name: "Audio-Technica AT2040",
        detail: "With Minifuse 1 interface",
      },
    ],
  },
];

export default function Setup() {
  return (
    <main className="page-shell gap-10">
      <header className="flex flex-col gap-2">
        <p className="section-label">Gear</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Workstation setup
        </h1>
        <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
          Hardware and equipment I use day to day.
        </p>
      </header>

      <div className="flex w-full flex-col gap-8">
        {setupCategories.map((category) => (
          <section key={category.title} className="flex flex-col gap-3">
            <h2 className="text-sm font-medium text-muted-foreground">
              {category.title}
            </h2>
            <ul className="card-surface divide-y divide-border overflow-hidden">
              {category.items.map((item) => (
                <li
                  key={item.name}
                  className="flex flex-col gap-0.5 px-4 py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 sm:px-5"
                >
                  <span className="font-medium text-foreground">
                    {item.name}
                  </span>
                  <span className="text-sm text-muted-foreground sm:text-right">
                    {item.detail}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
