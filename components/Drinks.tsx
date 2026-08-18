"use client";

import { useState } from "react";
import clsx from "clsx";

type Category = {
  title: string;
  subtitle: string;
  items: string[];
  featured?: boolean;
};

const beerCategories: Category[] = [
  {
    title: "Steklenica",
    subtitle: "Buidéal",
    items: [
      "Bernard",
      "Corona",
      "Heineken",
      "Kilkenny pločevinka",
      "Kozel",
      "Radler",
      "Somersby",
      "Staropramen",
      "Sullivan’s pločevinka",
    ],
  },
  {
    title: "Brezalkoholno",
    subtitle: "",
    items: [
      "Heineken 0.0 brezalko.",
      "Isotonic brezalko.",
      "Stiegl Sport brezalko.",
      "Uni brezalko.",
    ],
  },
  {
    title: "Craft",
    subtitle: "",
    items: ["Mali Grad", "Maister", "Hoppy Lager"],
  },
  {
    title: "Točeno",
    subtitle: "Sconna",
    featured: true,
    items: [
      "Carlsberg svetlo",
      "Dizel",
      "Guinness temno",
      "Laško",
      "Paulaner svetlo",
      "Radler svetlo s Fanto",
      "Radler svetlo s Schweppes",
      "Radler temno s Schweppes",
      "Stiegl svetlo",
      "Tektonik Čehur",
      "Union svetlo nefiltrirano",
    ],
  },
];

const coffeeCategories: Category[] = [
  {
    title: "Kava",
    subtitle: "Caife",
    items: [
      "Espresso",
      "Macchiato",
      "Z mlekom",
      "S smetano",
      "Cappuccino",
      "Bela",
      "Latte Macchiato",
      "Irish Coffee",
      "Irish Creme Coffee",
    ],
  },
  {
    title: "Brezkofeinska",
    subtitle: "",
    items: [
      "Espresso",
      "Macchiato",
      "Z mlekom",
      "S smetano",
      "Cappuccino",
      "Bela",
    ],
  },
  {
    title: "Ječmenova",
    subtitle: "",
    items: [
      "Espresso",
      "Macchiato",
      "Z mlekom",
      "S smetano",
      "Cappuccino",
      "Bela",
    ],
  },
];

const whiskeyItems = [
  "Aberlour A’bunadh",
  "Bushmills Original",
  "Bushmills Black",
  "Bushmills 10",
  "Chivas Regal 12",
  "Chivas Regal 15",
  "Dubliner",
  "Four Roses SB",
  "Glenfiddich 12",
  "Glenfiddich 15",
  "Glenlivet 12",
  "Green Spot",
  "Jack Daniels",
  "Jameson",
  "Jameson Stout",
  "Jameson Black Barrel",
  "Redbreast 12",
  "Scapa",
  "Southern Comfort",
  "Tullamore D.E.W.",
];

const spiritsItems = [
  "Brinjevec",
  "Chili Medica",
  "Pelinkovec",
  "Sadjevec",
  "Travarica",
  "Viljamovka",
];

const otherSpiritsItems = [
  "Abshinte Pernod",
  "Agwa",
  "Carolans",
  "Cognac Martel XO",
  "Gin Beefeater",
  "Gin Beefeater 24",
  "Jagermeister",
  "Kahlua",
  "Shanky’s Whip",
  "Stock 84",
  "Tequila Olmeca",
  "Vodka Absolut",
  "Vodka sadna",
];

const rumItems = [
  "Bumbu",
  "Havana Club Original",
  "Havana Club Special",
  "Havana Club 7",
  "Malibu",
  "Pyrat XO",
  "Rum domači",
  "Rum Stroh",
  "Santa Teresa",
];

const cocktailsItems = [
  "B52",
  "Cuba Libre",
  "Mojito",
  "Moscow Mule",
  "Zajčje Tačke",
];

const wineItems = [
  "Cabernet Casillero del Diablo",
  "Cviček Jarkovič",
  "Refošk Kavrečič",
  "Haložan Ptujska klet",
  "Malvazija Vinakoper",
  "Sladki Muškat Vinakoper",
  "Srebrna Radg. Penina",
  "Kuhano vino belo",
];

function MenuCategory({
  category,
  defaultOpen = false,
}: {
  category: Category;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className={clsx(
        "overflow-hidden rounded-2xl border transition-all duration-300",
        category.featured
          ? "border-irish-green/40 bg-irish-dark text-white"
          : "border-irish-dark/10 bg-white",
      )}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-5 text-left sm:px-6"
      >
        <div>
          <h3
            className={clsx(
              "text-xl font-black uppercase tracking-wide",
              category.featured
                ? "text-white"
                : "text-irish-dark",
            )}
          >
            {category.title}
          </h3>

          {category.subtitle && (
            <p
              className={clsx(
                "mt-1 text-xs uppercase tracking-[0.2em]",
                category.featured
                  ? "text-irish-orange"
                  : "text-irish-green",
              )}
            >
              {category.subtitle}
            </p>
          )}
        </div>

        <span
          className={clsx(
            "flex h-8 w-8 items-center justify-center rounded-full text-lg transition-transform duration-300",
            category.featured
              ? "bg-white/10"
              : "bg-irish-cream",
            open && "rotate-45",
          )}
        >
          +
        </span>
      </button>

      <div
        className={clsx(
          "grid transition-all duration-300",
          open
            ? "grid-rows-[1fr]"
            : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div
            className={clsx(
              "grid grid-cols-1 gap-x-8 px-5 pb-5 sm:grid-cols-2 sm:px-6",
              category.featured
                ? "border-t border-white/10"
                : "border-t border-irish-dark/10",
            )}
          >
            {category.items.map((item) => (
              <div
                key={item}
                className={clsx(
                  "border-b py-3 text-sm font-medium",
                  category.featured
                    ? "border-white/10 text-white/80"
                    : "border-irish-dark/10 text-irish-dark/70",
                )}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SimpleCategory({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-irish-dark/10 bg-white p-5 sm:p-6">
      <div className="mb-5">
        <h3 className="text-xl font-black uppercase tracking-wide text-irish-dark">
          {title}
        </h3>

        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-irish-green">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item}
            className="border-b border-irish-dark/10 py-3 text-sm font-medium text-irish-dark/70"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Drinks() {
  return (
    <section
      id="ponudba"
      className="bg-irish-cream px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-irish-orange" />

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-irish-orange">
              Pijača
            </p>

            <span className="h-px w-10 bg-irish-orange" />
          </div>

          <h2 className="text-4xl font-black tracking-tight text-irish-dark sm:text-5xl md:text-6xl">
            Something for
            <span className="block text-irish-green">
              every taste.
            </span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-irish-dark/60 sm:text-lg">
            Od pravega Guinnessa do dobre kave, craft piva in irskega
            viskija. Izberite svojo pijačo.
          </p>
        </div>

        {/* Beer */}
        <div className="mt-16">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-irish-orange">
                Beer
              </p>

              <h3 className="mt-1 text-3xl font-black text-irish-dark sm:text-4xl">
                Pivo
              </h3>
            </div>

            <span className="hidden text-3xl sm:block">🍺</span>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {beerCategories.map((category) => (
              <MenuCategory
                key={category.title}
                category={category}
                defaultOpen={category.featured}
              />
            ))}
          </div>

          {/* Irish specials */}
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-irish-green p-6 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-irish-orange">
                Irish izbor
              </p>

              <h3 className="mt-2 text-2xl font-black">
                Točeno pivo po naši izbiri
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-white/75">
                Pivo menjamo, zato se tudi cena spreminja.
              </p>
            </div>

            <div className="rounded-2xl bg-irish-dark p-6 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-irish-orange">
                Irish Special
              </p>

              <h3 className="mt-2 text-2xl font-black">
                Irish Car Bomb
              </h3>

              <p className="mt-3 text-sm text-white/70">
                Guinness · Carolans · Jameson
              </p>
            </div>
          </div>
        </div>

        {/* Coffee */}
        <div className="mt-20">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-irish-orange">
                Coffee
              </p>

              <h3 className="mt-1 text-3xl font-black text-irish-dark sm:text-4xl">
                Kava
              </h3>
            </div>

            <span className="hidden text-3xl sm:block">☕</span>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {coffeeCategories.map((category) => (
              <MenuCategory
                key={category.title}
                category={category}
                defaultOpen={category.title === "Kava"}
              />
            ))}
          </div>
        </div>

        {/* Other drinks */}
        <div className="mt-20">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-irish-orange">
              More to choose from
            </p>

            <h3 className="mt-1 text-3xl font-black text-irish-dark sm:text-4xl">
              Ostala ponudba
            </h3>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <SimpleCategory
              title="Whiskey"
              subtitle="Uisce Beatha"
              items={whiskeyItems}
            />

            <SimpleCategory
              title="Žganje"
              subtitle="Biotáille"
              items={spiritsItems}
            />

            <SimpleCategory
              title="Ostalo"
              subtitle="Eile"
              items={otherSpiritsItems}
            />

            <SimpleCategory
              title="Rum"
              subtitle=""
              items={rumItems}
            />

            <SimpleCategory
              title="Cocktaili"
              subtitle="Manglam"
              items={cocktailsItems}
            />

            <SimpleCategory
              title="Vino"
              subtitle="Fíon"
              items={wineItems}
            />
          </div>
        </div>
      </div>
    </section>
  );
}