"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Sling as Hamburger } from "hamburger-react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Drinks", id: "ponudba" },
  { label: "Events", id: "events" },
  { label: "Contact", id: "contact" },
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    const offset = element.getBoundingClientRect().top + window.scrollY - 90;

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });

    setOpen(false);
  };

  useEffect(() => {
    const handleScrollPosition = () => {
      const scrollPosition = window.scrollY + 150;

      let activeSection = "home";

      navItems.forEach(({ id }) => {
        const element = document.getElementById(id);

        if (element && element.offsetTop <= scrollPosition) {
          activeSection = id;
        }
      });

      setCurrentSection(activeSection);
    };

    window.addEventListener("scroll", handleScrollPosition);
    handleScrollPosition();

    return () => window.removeEventListener("scroll", handleScrollPosition);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50">
        <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          {/* Logo */}
          <button
            onClick={() => handleScroll("home")}
            aria-label="Go to homepage"
            className="relative z-50 transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/irish-logo.webp"
              alt="Irish Pub Kranj"
              width={160}
              height={100}
              priority
              className="h-14 w-auto rounded-full object-contain sm:h-16"
            />
          </button>

          {/* Desktop navigation */}
          <div className="hidden items-center lg:flex">
            <div className="flex items-center gap-8">
              {navItems.map((item) => {
                const active = currentSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleScroll(item.id)}
                    className={clsx(
                      "relative py-2 text-sm font-bold uppercase tracking-wider transition-colors duration-300",
                      active
                        ? "text-irish-orange"
                        : "text-white/80 hover:text-white",
                    )}
                  >
                    {item.label}

                    <span
                      className={clsx(
                        "absolute -bottom-1 left-0 h-0.5 bg-irish-orange transition-all duration-300",
                        active ? "w-full" : "w-0",
                      )}
                    />
                  </button>
                );
              })}
            </div>

            {/* Phone */}
            <a
              href="tel:+38651668832"
              className="ml-10 border-l border-white/20 pl-10 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:text-irish-orange"
            >
              <span className="mr-2 text-irish-orange">✆</span>
              +386 51 668 832
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="relative z-50 lg:hidden">
            <Hamburger
              toggled={open}
              toggle={setOpen}
              size={26}
              duration={0.4}
              color="#ffffff"
              label={open ? "Close menu" : "Open menu"}
            />
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={clsx(
          "fixed inset-0 z-40 bg-black/70 transition-opacity duration-300 lg:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
      />

      {/* Mobile menu */}
      <div
        className={clsx(
          "fixed inset-x-0 top-0 z-40 min-h-screen bg-irish-dark lg:hidden",
          "transition-transform duration-500 ease-in-out",
          open ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <div className="flex min-h-screen flex-col px-6 pb-10 pt-28 sm:px-10">
          {/* Menu heading */}
          <div className="mb-10 border-b border-white/10 pb-6">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-irish-orange">
              Irish Pub
            </p>

            <p className="mt-2 text-sm text-white/40">Kranj · Slovenia</p>
          </div>

          {/* Links */}
          <div>
            {navItems.map((item, index) => {
              const active = currentSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className={clsx(
                    "group flex w-full items-center justify-between border-b border-white/10 py-5 text-left",
                    "transition-all duration-300",
                    open
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0",
                    active ? "text-irish-orange" : "text-white",
                  )}
                  style={{
                    transitionDelay: open ? `${index * 70 + 100}ms` : "0ms",
                  }}
                >
                  <span className="text-3xl font-black tracking-tight sm:text-4xl">
                    {item.label}
                  </span>

                  <span
                    className={clsx(
                      "text-2xl transition-transform duration-300",
                      active
                        ? "translate-x-0 text-irish-orange"
                        : "translate-x-3 text-white/20 group-hover:translate-x-0 group-hover:text-irish-green",
                    )}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Bottom */}
          <div className="mt-auto pt-10">
            <a
              href="tel:+38651668832"
              className="flex w-full items-center justify-center gap-3 bg-irish-green px-6 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-irish-green/80"
            >
              <span>✆</span>
              Call the pub
            </a>

            <p className="mt-6 text-center text-sm text-white/30">
              Good drinks · Good music · Good company
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
