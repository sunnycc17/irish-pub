import Link from "next/link";
import { Uncial_Antiqua } from "next/font/google";

const uncial = Uncial_Antiqua({
  subsets: ["latin"],
  weight: "400",
});

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#060403] text-[#F5F2EA]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">

        {/* Main footer */}
        <div className="grid gap-12 md:grid-cols-[1.5fr_0.75fr_1fr]">

          {/* Brand */}
          <div>
            <Link
              href="#home"
              className="inline-block"
            >
              <p
                className={`${uncial.className} text-4xl leading-none text-white sm:text-5xl`}
              >
                Irish Pub
              </p>

              <div className="mt-3 flex items-center gap-3">
                <span className="h-px w-8 bg-irish-orange" />

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
                  Kranj · Since 1997
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/45">
              Dobra pijača, dobra glasba in dobra družba.
              <br />
              Irish Pub Kranj od leta 1997.
            </p>

            {/* Irish accent */}
            <div className="mt-7 flex h-1 w-24 overflow-hidden rounded-full">
              <span className="w-1/3 bg-irish-green" />
              <span className="w-1/3 bg-white" />
              <span className="w-1/3 bg-irish-orange" />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-irish-orange">
              Navigation
            </p>

            <nav className="mt-6 flex flex-col gap-4">
              <a
                href="#home"
                className="w-fit text-sm text-white/55"
              >
                Home
              </a>

              <a
                href="#about"
                className="w-fit text-sm text-white/55"
              >
                About
              </a>

              <a
                href="#ponudba"
                className="w-fit text-sm text-white/55"
              >
                Drinks
              </a>

              <a
                href="#contact"
                className="w-fit text-sm text-white/55"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-irish-orange">
              Find us
            </p>

            <div className="mt-6 space-y-4 text-sm text-white/50">
              <p className="leading-relaxed">
                Cesta Staneta Žagarja 16
                <br />
                4000 Kranj
              </p>

              <a
                href="tel:+38651668832"
                className="block text-white/65"
              >
                051 668 832
              </a>

              <a
                href="mailto:info@irish.si"
                className="block text-white/65"
              >
                info@irish.si
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-5 border-t border-white/[0.07] pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p className="text-white/25">
            © {new Date().getFullYear()} IRISH d. o. o. All rights reserved.
          </p>

          <p className="text-white/25">
            Designed & built by{" "}
            <a
              href="https://my-portfolio-six-dun-65.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white/50"
            >
              Krista
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}