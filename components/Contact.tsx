import { Uncial_Antiqua } from "next/font/google";

const uncial = Uncial_Antiqua({
  subsets: ["latin"],
  weight: "400",
});

const openingHours = [
  { day: "PON–ČET", hours: "16.00–1.00" },
  { day: "PET", hours: "16.00–2.00" },
  { day: "SOB", hours: "17.00–2.00" },
  { day: "NED", hours: "ZAPRTO" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-5 py-24 text-[#F5F2EA] sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="max-w-3xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-irish-orange" />

            <p className="text-xs font-bold uppercase tracking-[0.35em] text-irish-orange">
              Kontakt
            </p>
          </div>

          <h2
            className={`${uncial.className} text-5xl leading-[0.95] text-white sm:text-6xl md:text-7xl`}
          >
            Come say
            <br />
            <span className="text-white/75">Sláinte.</span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg">
            Najdete nas v Kranju, na obrobju mestnega središča. Pridite na pivo,
            kavo ali samo pozdravit prijatelje.
          </p>
        </header>

        {/* Main content */}
        <div className="mt-16 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Contact information */}
          <div className="rounded-3xl border border-white/[0.07] bg-[#100D0A] p-6 sm:p-8 lg:p-10">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-irish-orange">
                  Kje smo
                </p>

                <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                  IRISH d. o. o.
                </h3>
              </div>

              <span className="text-xs font-bold tracking-[0.2em] text-white/15">
                01
              </span>
            </div>

      {/* Contact cards */}
<div className="mt-8 grid gap-3 sm:grid-cols-3">

  {/* Green */}
  <a
    href="mailto:info@irish.si"
    className="group rounded-2xl border border-irish-green/40 bg-irish-green/[0.28] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-irish-green/[0.34]"
  >
    <span className="text-[10px] font-bold tracking-[0.2em] text-white/70">
      EMAIL
    </span>

    <p className="mt-5 break-all text-xs font-bold text-white">
      info@irish.si
    </p>
  </a>

  {/* White */}
  <a
    href="tel:+38651668832"
    className="group rounded-2xl border border-white/30 bg-white/[0.16] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.21]"
  >
    <span className="text-[10px] font-bold tracking-[0.2em] text-white/70">
      TELEFON
    </span>

    <p className="mt-5 text-xs font-bold text-white">
      051 668 832
    </p>
  </a>

  {/* Orange */}
  <a
    href="https://www.google.com/maps/search/?api=1&query=Cesta+Staneta+Žagarja+16,+4000+Kranj"
    target="_blank"
    rel="noopener noreferrer"
    className="group rounded-2xl border border-irish-orange/40 bg-irish-orange/[0.28] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-irish-orange/[0.34]"
  >
    <span className="text-[10px] font-bold tracking-[0.2em] text-white/70">
      NASLOV
    </span>

    <p className="mt-5 text-xs font-bold leading-relaxed text-white">
      Cesta Staneta Žagarja 16
      <br />
      4000 Kranj
    </p>
  </a>
</div>

            {/* Directions */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Cesta+Staneta+Žagarja+16,+4000+Kranj"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-3 flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.02] px-6 py-5 text-sm font-semibold text-white/70 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.04] hover:text-white"
            >
              <span>Odpri v Google Maps</span>

              <span className="text-xl text-irish-orange transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white">
                →
              </span>
            </a>
          </div>

          {/* Opening hours */}
          <div className="rounded-3xl border border-white/[0.07] bg-[#100D0A] p-6 sm:p-8 lg:p-10">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-irish-orange">
                  Opening hours
                </p>

                <h3
                  className={`${uncial.className} mt-3 text-4xl text-white sm:text-5xl`}
                >
                  Delovni čas
                </h3>
              </div>

              <span className="text-xs font-bold tracking-[0.2em] text-white/15">
                02
              </span>
            </div>

            {/* Hours */}
            <div className="mt-8">
              {openingHours.map((item, index) => {
                const isClosed = item.hours === "ZAPRTO";

                return (
                  <div
                    key={item.day}
                    className={`flex items-center justify-between py-5 ${
                      index !== openingHours.length - 1
                        ? "border-b border-white/[0.07]"
                        : ""
                    }`}
                  >
                    <span className="text-xs font-bold tracking-[0.15em] text-white/45">
                      {item.day}
                    </span>

                    <span
                      className={
                        isClosed
                          ? "text-sm font-bold text-irish-orange"
                          : "text-sm font-semibold text-white"
                      }
                    >
                      {item.hours}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Sunday note */}
            <div className="mt-7 border-l border-irish-orange pl-4">
              <p className="text-sm leading-relaxed text-white/45">
                Nedelja je dan za počitek.
                <span className="block font-semibold text-white/70">
                  Takrat smo zaprti.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-5 flex flex-col gap-5 rounded-3xl border border-white/[0.07] bg-[#100D0A] px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-irish-orange">
              Irish Pub · Kranj
            </p>

            <p
              className={`${uncial.className} mt-2 text-2xl text-white sm:text-3xl`}
            >
              Good drinks. Good company.
            </p>
          </div>

          <a
            href="tel:+38651668832"
            className="inline-flex items-center justify-center rounded-full border border-irish-orange px-7 py-3.5 text-sm font-bold text-irish-orange transition-all duration-300 hover:bg-irish-orange hover:text-black"
          >
            051 668 832
          </a>
        </div>
      </div>
    </section>
  );
}
