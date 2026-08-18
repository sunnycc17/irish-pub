import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#071b12] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="#home"
              className="inline-flex items-center gap-3"
            >
              <span className="text-3xl">☘️</span>

              <div>
                <p className="font-black uppercase tracking-wider">
                  Irish Pub
                </p>

                <p className="text-sm text-white/40">
                  Kranj
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              Dobra pijača, dobra glasba in dobra družba.
              Irish Pub Kranj od leta 1997.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-irish-orange">
              Navigation
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#home"
                className="w-fit text-sm text-white/60 transition hover:text-irish-green"
              >
                Home
              </a>

              <a
                href="#about"
                className="w-fit text-sm text-white/60 transition hover:text-irish-green"
              >
                About
              </a>

              <a
                href="#ponudba"
                className="w-fit text-sm text-white/60 transition hover:text-irish-green"
              >
                Drinks
              </a>

              <a
                href="#contact"
                className="w-fit text-sm text-white/60 transition hover:text-irish-green"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-irish-orange">
              Find us
            </p>

            <div className="mt-5 space-y-3 text-sm text-white/60">
              <p>
                Cesta Staneta Žagarja 16
                <br />
                4000 Kranj
              </p>

              <a
                href="tel:+38651668832"
                className="block transition hover:text-irish-green"
              >
                051 668 832
              </a>

              <a
                href="mailto:info@irish.si"
                className="block transition hover:text-irish-green"
              >
                info@irish.si
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-white/30">
            © {new Date().getFullYear()} IRISH d. o. o. All rights reserved.
          </p>

          <p className="text-white/30">
            Designed & built by{" "}
            <a
              href="https://my-portfolio-six-dun-65.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white/60 transition hover:text-irish-orange"
            >
              Krista
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}