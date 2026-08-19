"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Sling as Hamburger } from "hamburger-react";
import { Uncial_Antiqua } from "next/font/google";

const uncial = Uncial_Antiqua({
  subsets: ["latin"],
  weight: "400",
});

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

    const offset =
      element.getBoundingClientRect().top +
      window.scrollY -
      90;

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });

    setOpen(false);
  };

  useEffect(() => {
    const handleScrollPosition = () => {
      const scrollPosition =
        window.scrollY + window.innerHeight / 2;

      let activeSection = "home";

      navItems.forEach(({ id }) => {
        const element = document.getElementById(id);

        if (
          element &&
          element.offsetTop <= scrollPosition &&
          scrollPosition <
            element.offsetTop + element.offsetHeight
        ) {
          activeSection = id;
        }
      });

      setCurrentSection(activeSection);
    };

    window.addEventListener(
      "scroll",
      handleScrollPosition
    );

    handleScrollPosition();

    return () =>
      window.removeEventListener(
        "scroll",
        handleScrollPosition
      );
  }, []);

  useEffect(() => {
    document.body.style.overflow = open
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Navbar */}
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Logo */}
        <button
          onClick={() => handleScroll("home")}
          aria-label="Go to homepage"
          className="relative z-50"
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
          <div className="flex items-center gap-9">
            {navItems.map((item) => {
              const active =
                currentSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() =>
                    handleScroll(item.id)
                  }
                  className={clsx(
                    "relative py-2 text-xs font-bold uppercase tracking-[0.2em]",
                    active
                      ? "text-irish-orange"
                      : "text-white/65"
                  )}
                >
                  {item.label}

                  <span
                    className={clsx(
                      "absolute -bottom-1 left-0 h-px bg-irish-orange",
                      active
                        ? "w-full"
                        : "w-0"
                    )}
                  />
                </button>
              );
            })}
          </div>

          {/* Phone */}
          <a
            href="tel:+38651668832"
            className="ml-10 border-l border-white/10 pl-10 text-xs font-bold tracking-[0.12em] text-white/70"
          >
            +386 51 668 832
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="relative z-50 lg:hidden">
          <Hamburger
            toggled={open}
            toggle={setOpen}
            size={25}
            duration={0.35}
            color="#ffffff"
            label={
              open
                ? "Close menu"
                : "Open menu"
            }
          />
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={clsx(
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-500 lg:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
        onClick={() => setOpen(false)}
      />

      {/* Mobile sidebar */}
      <aside
        className={clsx(
          "fixed right-0 top-0 z-50 h-screen w-[85%] max-w-sm",
          "border-l border-white/[0.08]",
          "bg-[#0D0907]",
          "shadow-2xl",
          "transition-transform duration-500 ease-in-out",
          open
            ? "translate-x-0"
            : "translate-x-full"
        )}
      >
        <div className="flex h-full flex-col px-6 py-6 sm:px-8">

          {/* Sidebar header */}
          <div className="flex items-center justify-between border-b border-white/[0.07] pb-6">
            <div>
              <p
                className={`${uncial.className} text-3xl text-white`}
              >
                Irish Pub
              </p>

              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
                Kranj · Slovenia
              </p>
            </div>

            <Hamburger
              toggled={open}
              toggle={setOpen}
              size={25}
              duration={0.35}
              color="#ffffff"
              label="Close menu"
            />
          </div>

          {/* Irish flag accent */}
          <div className="mt-6 flex h-1 w-full overflow-hidden rounded-full">
            <span className="w-1/3 bg-irish-green" />
            <span className="w-1/3 bg-white" />
            <span className="w-1/3 bg-irish-orange" />
          </div>

          {/* Navigation */}
          <nav className="mt-8">
            {navItems.map((item, index) => {
              const active =
                currentSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() =>
                    handleScroll(item.id)
                  }
                  className={clsx(
                    "flex w-full items-center justify-between",
                    "border-b border-white/[0.07]",
                    "py-5 text-left",
                    "transition-all duration-500",
                    open
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0",
                    active
                      ? "text-irish-orange"
                      : "text-white"
                  )}
                  style={{
                    transitionDelay: open
                      ? `${index * 70 + 100}ms`
                      : "0ms",
                  }}
                >
                  <span
                    className={`${uncial.className} text-2xl sm:text-3xl`}
                  >
                    {item.label}
                  </span>

                  <span
                    className={clsx(
                      "text-xl",
                      active
                        ? "text-irish-orange"
                        : "text-white/20"
                    )}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Bottom contact */}
          <div className="mt-auto pt-8">
            <a
              href="tel:+38651668832"
              className="block  p-3"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-irish-orange">
                Call the pub
              </p>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-white">
                  051 668 832
                </span>

                <span className="text-xl text-irish-orange">
                  →
                </span>
              </div>
            </a>

            <p className="mt-5 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
              Good drinks · Good music · Good company
            </p>
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Header;