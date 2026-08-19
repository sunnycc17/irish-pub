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
        <div className="max-w-3xl">
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
            <span className="text-white/80">Sláinte.</span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
            Najdete nas v Kranju, na obrobju mestnega središča. Pridite na
            pivo, kavo ali samo pozdravit prijatelje.
          </p>
        </div>

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

              <span className="text-xs font-bold tracking-[0.2em] text-white/20">
                01
              </span>
            </div>

            {/* Address */}
            <address className="mt-5 not-italic text-base leading-relaxed text-white/55">
              Cesta Staneta Žagarja 16
              <br />
              4000 Kranj
            </address>

            <div className="my-8 h-px bg-white/[0.07]" />

            {/* Contact details */}
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="mailto:info@irish.si"
                className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/35">
                  Email
                </p>

                <p className="mt-3 break-all text-sm font-semibold text-white">
                  info@irish.si
                </p>
              </a>

              <a
                href="tel:+38651668832"
                className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/35">
                  Telefon
                </p>

                <p className="mt-3 text-sm font-semibold text-white">
                  051 668 832
                </p>
              </a>
            </div>

            {/* Directions */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Cesta+Staneta+Žagarja+16,+4000+Kranj"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center justify-between rounded-2xl border border-irish-green/40 bg-irish-green/[0.16] px-6 py-5 text-sm font-bold text-white"
            >
              <span>Odpri v Google Maps</span>

              <span className="text-xl text-irish-green">
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

              <span className="text-xs font-bold tracking-[0.2em] text-white/20">
                02
              </span>
            </div>

            {/* Hours */}
            <div className="mt-8">
              {openingHours.map((item, index) => (
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
                      item.hours === "ZAPRTO"
                        ? "text-sm font-bold text-irish-orange"
                        : "text-sm font-semibold text-white"
                    }
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
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
            className="inline-flex items-center justify-center rounded-full border border-irish-orange px-7 py-3.5 text-sm font-bold text-irish-orange"
          >
            051 668 832
          </a>
        </div>
      </div>
    </section>
  );
}