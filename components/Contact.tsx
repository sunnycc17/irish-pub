import Image from "next/image";

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
      className="bg-irish-dark px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-irish-orange" />

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-irish-orange">
              Kontakt
            </p>
          </div>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            Come say
            <span className="block text-irish-green">Sláinte.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
            Najdete nas v Kranju, na obrobju mestnega središča. Pridite na
            pivo, kavo ali samo pozdravit prijatelje.
          </p>
        </div>

        {/* Content */}
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {/* Address & contact */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-irish-orange">
              Naslov
            </p>

            <h3 className="mt-4 text-2xl font-black">
              IRISH d. o. o.
            </h3>

            <address className="mt-2 not-italic leading-relaxed text-white/60">
              Cesta Staneta Žagarja 16
              <br />
              4000 Kranj
            </address>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {/* Email */}
              <a
                href="mailto:info@irish.si"
                className="group rounded-2xl border border-white/10 bg-black/10 p-5 transition duration-300 hover:border-irish-green/40 hover:bg-irish-green/10"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-white/40">
                  Email
                </p>

                <p className="mt-2 break-all font-semibold text-white transition group-hover:text-irish-green">
                  info@irish.si
                </p>
              </a>

              {/* Phone */}
              <a
                href="tel:+38651668832"
                className="group rounded-2xl border border-white/10 bg-black/10 p-5 transition duration-300 hover:border-irish-green/40 hover:bg-irish-green/10"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-white/40">
                  Telefon
                </p>

                <p className="mt-2 font-semibold text-white transition group-hover:text-irish-green">
                  051 668 832
                </p>
              </a>
            </div>

            {/* Directions */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Cesta+Staneta+Žagarja+16,+4000+Kranj"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center justify-between rounded-2xl bg-irish-green px-6 py-4 font-bold text-white transition duration-300 hover:bg-irish-green/80"
            >
              <span>Get directions</span>
              <span className="text-xl">→</span>
            </a>
          </div>

          {/* Opening hours */}
          <div className="rounded-3xl bg-irish-cream p-6 text-irish-dark sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-irish-orange">
                  Opening hours
                </p>

                <h3 className="mt-2 text-2xl font-black">
                  Delovni čas
                </h3>
              </div>

              <span className="text-3xl">🕐</span>
            </div>

            <div className="mt-8">
              {openingHours.map((item) => (
                <div
                  key={item.day}
                  className="flex items-center justify-between border-b border-irish-dark/10 py-4 last:border-0"
                >
                  <span className="text-sm font-bold">
                    {item.day}
                  </span>

                  <span
                    className={
                      item.hours === "ZAPRTO"
                        ? "text-sm font-bold text-red-700"
                        : "text-sm font-semibold text-irish-dark/70"
                    }
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-irish-green/10 p-4">
              <p className="text-sm leading-relaxed text-irish-dark/70">
                <span className="font-bold text-irish-green">
                  Nedelja:
                </span>{" "}
                zaprto
              </p>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-5 flex flex-col items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-6 text-center sm:flex-row sm:text-left">
          <div>
            <p className="font-bold text-white">
              Irish Pub · Kranj
            </p>

            <p className="mt-1 text-sm text-white/40">
              Good drinks · Good music · Good company
            </p>
          </div>

          <a
            href="tel:+38651668832"
            className="rounded-full border border-irish-orange px-6 py-3 text-sm font-bold text-irish-orange transition duration-300 hover:bg-irish-orange hover:text-irish-dark"
          >
            051 668 832
          </a>
        </div>
      </div>
    </section>
  );
}