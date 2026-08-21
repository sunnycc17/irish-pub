import Image from "next/image";
import { Uncial_Antiqua } from "next/font/google";

const uncial = Uncial_Antiqua({
  subsets: ["latin"],
  weight: "400",
});

export default function About() {
  return (
    <section
      id="about"
      className="px-5 py-24 text-[#F5F2EA] sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Image */}
        <div className="relative">
          {/* Orange offset frame */}
          <div className="absolute -bottom-4 -left-4 h-full w-full rounded-3xl border border-irish-orange/40" />

          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#100D0A] p-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/irish-about.webp"
                alt="Interior of Irish Pub Kranj"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>

          {/* Since badge */}
          <div className="absolute -bottom-7 right-4 rounded-2xl border border-white/10 bg-[#15110D] px-6 py-5 shadow-2xl sm:right-6">
            <p className={`${uncial.className} text-4xl text-white`}>1997</p>

            <div className="mt-1 flex items-center gap-2">
              <span className="h-px w-5 bg-irish-orange" />
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/45">
                Since
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-irish-orange" />

            <p className="text-xs font-bold uppercase tracking-[0.35em] text-irish-orange">
              O nas
            </p>
          </div>

          {/* Heading */}
          <h2
            className={`${uncial.className} max-w-2xl text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl`}
          >
            A little bit of
            <br />
            <span className="text-white/80">Ireland in Kranj.</span>
          </h2>

          {/* Accent */}
          <div className="mt-7 flex gap-2">
            <span className="h-1 w-12 rounded-full bg-irish-green" />
            <span className="h-1 w-3 rounded-full bg-irish-orange" />
          </div>

          {/* Text */}
          <div className="mt-9 space-y-5 text-base leading-relaxed text-white/60 sm:text-lg">
            <p>
              Irish ima kultno mesto med gostinsko ponudbo v Kranju, saj ohranja
              tradicijo prave irske pivnice že od leta{" "}
              <strong className="font-semibold text-white">1997.</strong>
            </p>

            <p>
              Izbira točenih piv — Guinness, Carlsberg, Stiegl, Tektonik,
              Paulaner, Laško ali Union — in široka izbira ustekleničenih piv bo
              navdušila vse pivoljubce. Prijazna postrežba pa vključuje tudi
              slan prigrizek.
            </p>

            <p>
              Imate raje kavo? Energijo vam bo v žile poslala kava{" "}
              <strong className="font-semibold text-white">Hausbrandt.</strong>
            </p>

            <p>
              Nahaja se na obrobju mestnega središča in nudi možnost parkiranja
              pred pubom. Izbirate lahko med zasebnostjo pokrite zadnje terase
              ali ležernim opazovanjem mestnega vrveža na pokriti terasi pred
              vhodom.
            </p>
          </div>

   {/* Features */}
<div className="mt-10 grid gap-3 sm:grid-cols-3">
  {/* Great beers */}
  <div className="group flex items-center gap-4 rounded-2xl border border-irish-green/40 bg-irish-green/[0.22] p-4 sm:block sm:p-5">
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-irish-green/40 text-[10px] font-bold tracking-[0.15em] text-white/70 sm:block sm:h-auto sm:w-auto sm:rounded-none sm:border-0">
      01
    </span>

    <div>
      <h3 className="text-sm font-bold text-white sm:mt-8">
        Great beers
      </h3>
      <p className="mt-0.5 text-xs leading-relaxed text-white/60">
        Guinness, craft & more
      </p>
    </div>
  </div>

  {/* Hausbrandt */}
  <div className="group flex items-center gap-4 rounded-2xl border border-white/20 bg-white/[0.10] p-4 sm:block sm:p-5">
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-[10px] font-bold tracking-[0.15em] text-white/70 sm:block sm:h-auto sm:w-auto sm:rounded-none sm:border-0">
      02
    </span>

    <div>
      <h3 className="text-sm font-bold text-white sm:mt-8">
        Hausbrandt coffee
      </h3>
      <p className="mt-0.5 text-xs leading-relaxed text-white/60">
        Italian coffee tradition
      </p>
    </div>
  </div>

  {/* Terraces */}
  <div className="group flex items-center gap-4 rounded-2xl border border-irish-orange/40 bg-irish-orange/[0.22] p-4 sm:block sm:p-5">
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-irish-orange/40 text-[10px] font-bold tracking-[0.15em] text-white/70 sm:block sm:h-auto sm:w-auto sm:rounded-none sm:border-0">
      03
    </span>

    <div>
      <h3 className="text-sm font-bold text-white sm:mt-8">
        Covered terraces
      </h3>
      <p className="mt-0.5 text-xs leading-relaxed text-white/60">
        Sit inside or outside
      </p>
    </div>
  </div>
</div>
          {/* Closing quote */}
          <div className="mt-10 border-l border-irish-orange pl-5">
            <p className="text-base font-medium italic leading-relaxed text-white/70 sm:text-lg">
              "Če nimate časa za pivo ali kavo, pa pridite le pozdravit
              prijatelje — vedno vas bomo veseli!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
