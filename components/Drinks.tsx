"use client";

import { Uncial_Antiqua } from "next/font/google";
import { Beer, Coffee } from "lucide-react";

const uncial = Uncial_Antiqua({
  subsets: ["latin"],
  weight: "400",
});

type MenuItem = {
  name: string;
  price: string;
};

type Category = {
  title: string;
  subtitle: string;
  items: MenuItem[];
};

const toMenuItems = (items: string[]): MenuItem[] =>
  items.map((name) => ({
    name,
    price: "€—",
  }));

const beerCategories: Category[] = [
  {
    title: "Steklenica",
    subtitle: "Buidéal",
    items: [
      { name: "Bernard", price: "€—" },
      { name: "Corona", price: "€—" },
      { name: "Heineken", price: "€—" },
      { name: "Kilkenny pločevinka", price: "€—" },
      { name: "Kozel", price: "€—" },
      { name: "Radler", price: "€—" },
      { name: "Somersby", price: "€—" },
      { name: "Staropramen", price: "€—" },
      { name: "Sullivan’s pločevinka", price: "€—" },
    ],
  },
  {
    title: "Brezalkoholno",
    subtitle: "",
    items: [
      { name: "Heineken 0.0 brezalko.", price: "€—" },
      { name: "Isotonic brezalko.", price: "€—" },
      { name: "Stiegl Sport brezalko.", price: "€—" },
      { name: "Uni brezalko.", price: "€—" },
    ],
  },
  {
    title: "Craft",
    subtitle: "",
    items: [
      { name: "Mali Grad", price: "€—" },
      { name: "Maister", price: "€—" },
      { name: "Hoppy Lager", price: "€—" },
    ],
  },
  {
    title: "Točeno",
    subtitle: "Sconna",
    items: [
      { name: "Carlsberg svetlo", price: "€—" },
      { name: "Dizel", price: "€—" },
      { name: "Guinness temno", price: "€—" },
      { name: "Laško", price: "€—" },
      { name: "Paulaner svetlo", price: "€—" },
      { name: "Radler svetlo s Fanto", price: "€—" },
      { name: "Radler svetlo s Schweppes", price: "€—" },
      { name: "Radler temno s Schweppes", price: "€—" },
      { name: "Stiegl svetlo", price: "€—" },
      { name: "Tektonik Čehur", price: "€—" },
      { name: "Union svetlo nefiltrirano", price: "€—" },
    ],
  },
];

const coffeeCategories: Category[] = [
  {
    title: "Kava",
    subtitle: "Caife",
    items: [
      { name: "Espresso", price: "€—" },
      { name: "Macchiato", price: "€—" },
      { name: "Z mlekom", price: "€—" },
      { name: "S smetano", price: "€—" },
      { name: "Cappuccino", price: "€—" },
      { name: "Bela", price: "€—" },
      { name: "Latte Macchiato", price: "€—" },
      { name: "Irish Coffee", price: "€—" },
      { name: "Irish Creme Coffee", price: "€—" },
    ],
  },
  {
    title: "Brezkofeinska",
    subtitle: "",
    items: [
      { name: "Espresso", price: "€—" },
      { name: "Macchiato", price: "€—" },
      { name: "Z mlekom", price: "€—" },
      { name: "S smetano", price: "€—" },
      { name: "Cappuccino", price: "€—" },
      { name: "Bela", price: "€—" },
    ],
  },
  {
    title: "Ječmenova",
    subtitle: "",
    items: [
      { name: "Espresso", price: "€—" },
      { name: "Macchiato", price: "€—" },
      { name: "Z mlekom", price: "€—" },
      { name: "S smetano", price: "€—" },
      { name: "Cappuccino", price: "€—" },
      { name: "Bela", price: "€—" },
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

function MenuCategory({ title, subtitle, items }: Category) {
  return (
    <div className="rounded-2xl border border-white/[0.07] bg-[#100D0A] p-5 sm:p-6">
      <div className="mb-5">
        <h3 className="text-xl font-black uppercase tracking-wide text-[#F5F2EA]">
          {title}
        </h3>

        {subtitle && (
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-irish-green">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between gap-4 border-b border-white/[0.07] py-3"
          >
            <span className="text-sm font-medium text-white/60">
              {item.name}
            </span>

            <span className="shrink-0 text-sm font-bold text-white/85">
              {item.price}
            </span>
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
      className="px-5 py-24 text-[#F5F2EA] sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-irish-orange" />

            <p className="text-xs font-bold uppercase tracking-[0.35em] text-irish-orange">
              Pijača
            </p>

            <span className="h-px w-12 bg-irish-orange" />
          </div>

          <h2
            className={`${uncial.className} text-5xl leading-none text-white sm:text-6xl md:text-7xl`}
          >
            Raise a glass.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
            Od pravega Guinnessa do craft piva, irskega viskija in dobre kave.
            Izberite svojo pijačo.
          </p>
        </div>

        {/* Beer */}
        <div id="pivo" className="mt-20 scroll-mt-28">
          <div className="mb-7 flex items-end justify-between border-b border-white/10 pb-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-irish-orange">
                Beer
              </p>

              <h3
                className={`${uncial.className} mt-1 text-4xl text-white sm:text-5xl`}
              >
                Pivo
              </h3>
            </div>

            <Beer className="h-8 w-8 text-white/50" />
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {beerCategories.map((category) => (
              <MenuCategory key={category.title} {...category} />
            ))}
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/[0.07] bg-[#100D0A] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-irish-orange">
                Irish izbor
              </p>

              <h3 className="mt-2 text-2xl font-black text-white">
                Točeno pivo po naši izbiri
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Pivo menjamo, zato se tudi cena spreminja.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.07] bg-[#100D0A] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-irish-orange">
                Irish Special
              </p>

              <h3 className="mt-2 text-2xl font-black text-white">
                Irish Car Bomb
              </h3>

              <p className="mt-3 text-sm text-white/60">
                Guinness · Carolans · Jameson
              </p>
            </div>
          </div>
        </div>

        {/* Coffee */}
        <div id="kava" className="mt-24 scroll-mt-28">
          <div className="mb-7 flex items-end justify-between border-b border-white/10 pb-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-irish-orange">
                Coffee
              </p>

              <h3
                className={`${uncial.className} mt-1 text-4xl text-white sm:text-5xl`}
              >
                Kava
              </h3>
            </div>

            <Coffee className="h-8 w-8 text-white/50" />
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {coffeeCategories.map((category) => (
              <MenuCategory key={category.title} {...category} />
            ))}
          </div>
        </div>

        {/* Other drinks */}
        <div className="mt-24">
          <div className="mb-8 border-b border-white/10 pb-5">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-irish-orange">
              More to choose from
            </p>

            <h3
              className={`${uncial.className} mt-1 text-4xl text-white sm:text-5xl`}
            >
              Ostala ponudba
            </h3>
          </div>

          <div className="grid gap-4 md:grid-cols-2">

            <div id="whiskey" className="scroll-mt-28">
              <MenuCategory
                title="Whiskey"
                subtitle="Uisce Beatha"
                items={toMenuItems(whiskeyItems)}
              />
            </div>

            <MenuCategory
              title="Žganje"
              subtitle="Biotáille"
              items={toMenuItems(spiritsItems)}
            />

            <MenuCategory
              title="Ostalo"
              subtitle="Eile"
              items={toMenuItems(otherSpiritsItems)}
            />

            <MenuCategory
              title="Rum"
              subtitle=""
              items={toMenuItems(rumItems)}
            />

            <div id="cocktails" className="scroll-mt-28">
              <MenuCategory
                title="Cocktaili"
                subtitle="Manglam"
                items={toMenuItems(cocktailsItems)}
              />
            </div>

            <div id="vino" className="scroll-mt-28">
              <MenuCategory
                title="Vino"
                subtitle="Fíon"
                items={toMenuItems(wineItems)}
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}