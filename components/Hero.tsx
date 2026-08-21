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
      className="relative min-h-[100dvh] overflow-hidden bg-black"
    >
      {/* Background */}
      <Image
        src="/irish.webp"
        alt="Interior of Irish Pub Kranj"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark atmosphere */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/30" />

      {/* Main content */}
      <div className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-7xl flex-col px-5 pt-32 pb-8 sm:px-8 sm:pt-36 sm:pb-10 lg:px-16 lg:justify-center lg:pt-16 lg:pb-24">
        
        {/* Hero copy */}
        <div className="max-w-5xl lg:-mt-4">
          
          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-3 sm:mb-8 sm:gap-4">
            <span className="h-px w-8 bg-irish-orange sm:w-12" />

            <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-white/60 sm:text-xs sm:tracking-[0.35em]">
              Irish Pub · Kranj
            </p>
          </div>

          {/* Heading */}
          <h1
            className={`${uncial.className} text-[3.6rem] leading-[0.88] text-white min-[400px]:text-[4rem] sm:text-8xl md:text-9xl lg:text-[9.5rem]`}
          >
            Stay for
            <br />
            <span className="text-white/90">one more.</span>
          </h1>

          {/* Irish accents */}
          <div className="mt-6 flex items-center gap-1 sm:mt-7 sm:gap-2">
            <span className="h-1 w-7 rounded-full bg-irish-green sm:w-10" />
            <span className="h-1 w-7 rounded-full bg-white sm:w-10" />
            <span className="h-1 w-7 rounded-full bg-irish-orange sm:w-10" />
          </div>

          {/* Description */}
          <p className="mt-6 max-w-[22rem] text-sm leading-relaxed text-white/60 sm:mt-7 sm:max-w-lg sm:text-lg">
            Dobro pivo, dobra glasba in družba, zaradi katere ostaneš še eno
            rundo.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-row flex-wrap gap-2.5 sm:mt-9 sm:gap-4">
            <a
              href="#ponudba"
              className="flex min-h-12 flex-1 items-center justify-center rounded-xl bg-irish-orange px-2 py-3 text-sm font-bold text-black transition-all duration-300 hover:brightness-110 sm:flex-none sm:px-9 sm:py-4"
            >
              Poglej ponudbo
            </a>

            <a
              href="tel:+38651668832"
              className="flex min-h-12 flex-1 items-center justify-center rounded-xl border border-white/20 bg-white/[0.06] px-2 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.1] sm:flex-none sm:px-9 sm:py-4"
            >
              Pokliči nas
            </a>
          </div>
        </div>

        {/* Mobile information */}
        <div className="mt-auto pt-16 sm:pt-20 lg:hidden">
          <div className="border-t border-white/15 pt-4">
            <p className="text-[9px] uppercase tracking-[0.16em] text-white/40 sm:text-[10px] sm:tracking-[0.18em]">
              Cesta Staneta Žagarja 16 · Kranj
            </p>

            <p className="mt-2 text-[9px] uppercase tracking-[0.16em] text-white/30 sm:text-[10px] sm:tracking-[0.18em]">
              Pivo · Glasba · Druženje
            </p>
          </div>
        </div>
      </div>

      {/* Desktop information */}
      <div className="absolute bottom-7 left-0 right-0 z-10 hidden px-6 sm:px-8 lg:block lg:px-16">
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