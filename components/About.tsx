import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-irish-cream px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Image */}
        <div className="relative">
          <div className="absolute -left-3 -top-3 h-full w-full rounded-3xl border-2 border-irish-orange/30 sm:-left-4 sm:-top-4" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="/irish.webp"
              alt="Irish Pub Kranj"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Year badge */}
          <div className="absolute -bottom-5 -right-3 rounded-2xl bg-irish-dark px-6 py-5 text-white shadow-xl sm:-right-5">
            <p className="text-3xl font-black text-irish-orange">1997</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/60">
              Since
            </p>
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-1 w-10 rounded-full bg-irish-orange" />

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-irish-green">
              O nas
            </p>
          </div>

          <h2 className="text-4xl font-black leading-tight tracking-tight text-irish-dark sm:text-5xl lg:text-6xl">
            A little bit of
            <span className="block text-irish-green">
              Ireland in Kranj.
            </span>
          </h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-irish-dark/70 sm:text-lg">
            <p>
              Irish ima kultno mesto med gostinsko ponudbo v Kranju, saj
              ohranja tradicijo prave irske pivnice že od leta{" "}
              <strong className="font-bold text-irish-dark">1997.</strong>
            </p>

            <p>
              Izbira točenih piv — Guinness, Carlsberg, Stiegl, Tektonik,
              Paulaner, Laško ali Union — in široka izbira ustekleničenih piv
              bo navdušila vse pivoljubce. Prijazna postrežba pa vključuje
              tudi slan prigrizek.
            </p>

            <p>
              Imate raje kavo? Energijo vam bo v žile poslala kava{" "}
              <strong className="font-semibold text-irish-dark">
                Hausbrandt.
              </strong>
            </p>

            <p>
              Nahaja se na obrobju mestnega središča in nudi možnost
              parkiranja pred pubom. Izbirate lahko med zasebnostjo pokrite
              zadnje terase ali ležernim opazovanjem mestnega vrveža na
              pokriti terasi pred vhodom.
            </p>
          </div>

          {/* Features */}
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <span className="text-2xl">🍺</span>
              <p className="mt-2 text-sm font-bold text-irish-dark">
                Great beers
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <span className="text-2xl">☕</span>
              <p className="mt-2 text-sm font-bold text-irish-dark">
                Hausbrandt coffee
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <span className="text-2xl">🌿</span>
              <p className="mt-2 text-sm font-bold text-irish-dark">
                Covered terraces
              </p>
            </div>
          </div>

          {/* Closing line */}
          <div className="mt-10 border-l-4 border-irish-orange pl-5">
            <p className="text-lg font-semibold italic text-irish-dark sm:text-xl">
              "Če nimate časa za pivo ali kavo, pa pridite le pozdravit
              prijatelje — vedno vas bomo veseli!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}