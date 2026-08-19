import Image from "next/image";
import { Uncial_Antiqua } from "next/font/google";

const uncial = Uncial_Antiqua({
  subsets: ["latin"],
  weight: "400",
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* Background */}
      <Image
        src="/irish.webp"
        alt="Interior of Irish Pub Kranj"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark atmosphere */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 pb-28 pt-28 sm:px-10 sm:pb-32 lg:px-16 lg:pb-24 lg:pt-16">
        <div className="max-w-5xl">

          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-4 sm:mb-8">
            <span className="h-px w-10 bg-irish-orange sm:w-12" />

            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/65 sm:text-xs sm:tracking-[0.35em]">
              Irish Pub · Kranj
            </p>

            <span className="h-2 w-2 rounded-full bg-irish-orange" />
          </div>

          {/* Heading */}
          <h1
            className={`${uncial.className} text-[4.5rem] leading-[0.88] text-white sm:text-8xl md:text-9xl lg:text-[9.5rem]`}
          >
            Stay for
            <br />
            <span className="text-white/90">one more.</span>
          </h1>

          {/* Irish accents */}
          <div className="mt-6 flex items-center gap-2 sm:mt-7 sm:gap-3">
            <span className="h-1 w-12 rounded-full bg-irish-green sm:w-16" />
            <span className="h-1 w-4 rounded-full bg-irish-orange sm:w-5" />
          </div>

          {/* Description */}
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/65 sm:mt-7 sm:text-lg">
            Dobro pivo, dobra glasba in družba, zaradi katere ostaneš še eno
            rundo.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">
            <a
              href="#ponudba"
              className="flex min-h-12 items-center justify-center rounded-xl bg-irish-orange px-7 py-3.5 text-sm font-bold text-black"
            >
              Poglej ponudbo
              <span className="ml-3 text-base">→</span>
            </a>

            <a
              href="tel:+38651668832"
              className="flex min-h-12 items-center justify-center rounded-xl border border-white/20 bg-white/[0.06] px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm"
            >
              Pokliči nas
            </a>
          </div>
        </div>

        {/* Mobile information */}
        <div className="mt-12 sm:mt-14 lg:hidden">
          <div className="border-t border-white/15 pt-5">
            <p className="text-[10px] uppercase tracking-[0.18em] text-white/40">
              Cesta Staneta Žagarja 16 · Kranj
            </p>

            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/30">
              Pivo · Glasba · Druženje
            </p>
          </div>
        </div>
      </div>

      {/* Desktop information */}
      <div className="absolute bottom-7 left-0 right-0 z-10 hidden px-6 sm:px-10 lg:block lg:px-16">
        <div className="mx-auto flex max-w-7xl items-center justify-between border-t border-white/15 pt-5">
          <p className="text-xs uppercase tracking-[0.18em] text-white/40">
            Cesta Staneta Žagarja 16 · Kranj
          </p>

          <p className="text-xs uppercase tracking-[0.18em] text-white/40">
            Pivo · Glasba · Druženje
          </p>
        </div>
      </div>
    </section>
  );
}