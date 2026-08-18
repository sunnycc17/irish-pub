import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      <Image
        src="/irish.webp"
        alt="Interior of Irish Pub Kranj"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Atmospheric overlays */}
      <div className="absolute inset-0 bg-[#0d3b25]/20" />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-32 text-center text-white sm:px-8">
        {/* Eyebrow */}
        <div className="mb-6 flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-irish-orange sm:w-16" />

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-irish-orange">
            Irish Pub · Kranj
          </p>

          <span className="h-px w-10 bg-irish-orange sm:w-16" />
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-8xl">
          Where friends
          <span className="block text-irish-green">meet.</span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
          Tam, kjer boste danes zvečer najverjetneje našli svoje prijatelje.
          <span className="mt-2 block font-semibold text-white">
            Sláinte! ☘️
          </span>
        </p>

        {/* Actions */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#ponudba"
            className="w-full rounded-full bg-irish-green px-8 py-4 font-bold text-white shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:bg-irish-dark sm:w-auto"
          >
            Explore our drinks
          </a>

          <a
            href="tel:+38651668832"
            aria-label="Call Irish Pub Kranj"
            className="w-full rounded-full border border-white/40 bg-white/5 px-8 py-4 font-bold backdrop-blur-sm transition duration-300 hover:bg-white hover:text-irish-dark sm:w-auto"
          >
            Call us
          </a>
        </div>

        {/* Bottom detail */}
        <div className="mt-16 flex items-center justify-center gap-3 text-sm text-white/60">
          <span className="h-px w-8 bg-white/30" />
          <span>Good drinks · Good music · Good company</span>
          <span className="h-px w-8 bg-white/30" />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-irish-cream to-transparent" />
    </section>
  );
}