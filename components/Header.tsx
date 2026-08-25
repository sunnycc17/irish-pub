"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Sling as Hamburger } from "hamburger-react";
import { Uncial_Antiqua } from "next/font/google";
import {
  Beer,
  ChevronDown,
  Coffee,
  GlassWater,
  Martini,
  Wine,
} from "lucide-react";

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

const drinkCategories = [
  {
    label: "Pivo",
    id: "pivo",
    icon: Beer,
  },
  {
    label: "Kava",
    id: "kava",
    icon: Coffee,
  },
  {
    label: "Whiskey",
    id: "whiskey",
    icon: GlassWater,
  },
  {
    label: "Cocktaili",
    id: "cocktails",
    icon: Martini,
  },
  {
    label: "Vino",
    id: "vino",
    icon: Wine,
  },
];

function NavLink({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "relative h-full text-xs font-bold uppercase tracking-[0.2em]",
        "transition-colors duration-200",
        "focus-visible:outline-none focus-visible:text-irish-orange",
        active
          ? "text-irish-orange"
          : "text-white/65 hover:text-white",
      )}
    >
      {label}

      <span
        className={clsx(
          "absolute bottom-0 left-0 h-px bg-irish-orange",
          "transition-all duration-300",
          active ? "w-full" : "w-0",
        )}
      />
    </button>
  );
}

function DrinkCategory({
  label,
  id,
  icon: Icon,
  onClick,
}: {
  label: string;
  id: string;
  icon: React.ElementType;
  onClick: (id: string) => void;
}) {
  return (
    <button
      onClick={() => onClick(id)}
      className="group/item flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors duration-200 hover:bg-white/[0.04] focus-visible:bg-white/[0.04] focus-visible:outline-none"
    >
      <Icon className="h-4 w-4 shrink-0 text-irish-orange/70 transition-colors group-hover/item:text-irish-orange" />

      <span className="text-xs font-bold uppercase tracking-[0.12em] text-white/55 transition-colors group-hover/item:text-white">
        {label}
      </span>

      <span className="ml-auto translate-x-[-4px] text-sm text-white/0 transition-all duration-200 group-hover/item:translate-x-0 group-hover/item:text-irish-orange">
        →
      </span>
    </button>
  );
}

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [drinksOpen, setDrinksOpen] = useState(false);
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
    setDrinksOpen(false);
  };

  useEffect(() => {
    const handleScrollPosition = () => {
      const scrollPosition =
        window.scrollY + window.innerHeight / 2;

      let activeSection = "home";

      navItems.forEach(({ id }) => {
        const element = document.getElementById(id);

        if (!element) return;

        const top = element.offsetTop;
        const bottom = top + element.offsetHeight;

        if (
          top <= scrollPosition &&
          scrollPosition < bottom
        ) {
          activeSection = id;
        }
      });

      setCurrentSection(activeSection);
    };

    window.addEventListener(
      "scroll",
      handleScrollPosition,
      { passive: true },
    );

    handleScrollPosition();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScrollPosition,
      );
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#0D0907]">
      {/* ===================================================== */}
      {/* Desktop / Main Navbar */}
      {/* ===================================================== */}

      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-2 sm:px-4">
        {/* Logo */}
        <button
          onClick={() => handleScroll("home")}
          aria-label="Go to homepage"
          className="relative z-50 shrink-0 focus-visible:outline-none"
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

        {/* ================================================= */}
        {/* Desktop Navigation */}
        {/* ================================================= */}

        <div className="hidden h-full items-center lg:flex">
          <div className="flex h-full items-center gap-8">
            {navItems.map((item) => {
              const active =
                currentSection === item.id;

              /* ------------------------------------------- */
              /* Drinks Dropdown */
              /* ------------------------------------------- */

              if (item.id === "ponudba") {
                return (
                  <div
                    key={item.id}
                    className="group/drinks relative h-full"
                  >
                    {/* Drinks trigger */}

                    <button
                      onClick={() =>
                        handleScroll("ponudba")
                      }
                      aria-haspopup="true"
                      className={clsx(
                        "relative flex h-full items-center gap-1.5",
                        "text-xs font-bold uppercase tracking-[0.2em]",
                        "transition-colors duration-200",
                        "focus-visible:outline-none focus-visible:text-irish-orange",
                        active
                          ? "text-irish-orange"
                          : "text-white/65 hover:text-white",
                      )}
                    >
                      Drinks

                      <ChevronDown
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover/drinks:rotate-180"
                      />

                      {/* Active underline */}

                      <span
                        className={clsx(
                          "absolute bottom-0 left-0 h-px bg-irish-orange",
                          "transition-all duration-300",
                          active
                            ? "w-full"
                            : "w-0 group-hover/drinks:w-full",
                        )}
                      />
                    </button>

                    {/* ----------------------------------- */}
                    {/* Connected Dropdown */}
                    {/* ----------------------------------- */}

                    <div
                      className={clsx(
                        "pointer-events-none absolute left-1/2 top-full",
                        "w-64 -translate-x-1/2",
                        "translate-y-[-4px] opacity-0",
                        "transition-all duration-200",
                        "group-hover/drinks:pointer-events-auto",
                        "group-hover/drinks:translate-y-0",
                        "group-hover/drinks:opacity-100",
                      )}
                    >
                      <div className="border-x border-b border-white/[0.07] bg-[#0D0907]">
                        {/* Dropdown heading */}

                        <div className="border-b border-white/[0.06] px-5 py-3">
                          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
                            Drinks menu
                          </p>
                        </div>

                        {/* Categories */}

                        <div className="p-2">
                          {drinkCategories.map(
                            (category) => (
                              <DrinkCategory
                                key={category.id}
                                {...category}
                                onClick={handleScroll}
                              />
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              /* ------------------------------------------- */
              /* Regular Desktop Link */
              /* ------------------------------------------- */

              return (
                <NavLink
                  key={item.id}
                  label={item.label}
                  active={active}
                  onClick={() =>
                    handleScroll(item.id)
                  }
                />
              );
            })}
          </div>

          {/* Phone */}

          <a
            href="tel:+38651668832"
            className="ml-10 border-l border-white/10 pl-10 text-xs font-bold tracking-[0.12em] text-white/60 transition-colors hover:text-white"
          >
            +386 51 668 832
          </a>
        </div>

        {/* ================================================= */}
        {/* Mobile Hamburger */}
        {/* ================================================= */}

        <div className="relative z-50 lg:hidden">
          <Hamburger
            toggled={open}
            toggle={setOpen}
            size={25}
            duration={0.35}
            color="#ffffff"
            label={open ? "Close menu" : "Open menu"}
          />
        </div>
      </nav>

      {/* ===================================================== */}
      {/* Mobile Overlay */}
      {/* ===================================================== */}

      <div
        className={clsx(
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm",
          "transition-opacity duration-500 lg:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* ===================================================== */}
      {/* Mobile Sidebar */}
      {/* ===================================================== */}

      <aside
        aria-label="Mobile navigation"
        className={clsx(
          "fixed right-0 top-0 z-50 h-[100dvh] w-[85%] max-w-sm",
          "border-l border-white/[0.08]",
          "bg-[#0D0907]",
          "shadow-2xl",
          "transition-transform duration-500 ease-in-out",
          "lg:hidden",
          open
            ? "translate-x-0"
            : "translate-x-full",
        )}
      >
        <div className="flex h-full flex-col overflow-y-auto px-6 py-6 sm:px-8">
          {/* Sidebar Header */}

          <div className="flex shrink-0 items-center justify-between border-b border-white/[0.07] pb-6">
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

          {/* Irish Flag Accent */}

          <div className="mt-6 flex h-1 shrink-0 w-full overflow-hidden rounded-full">
            <span className="w-1/3 bg-irish-green" />
            <span className="w-1/3 bg-white" />
            <span className="w-1/3 bg-irish-orange" />
          </div>

          {/* ================================================= */}
          {/* Mobile Navigation */}
          {/* ================================================= */}

          <nav className="mt-8">
            {navItems.map((item, index) => {
              const active =
                currentSection === item.id;

              /* ------------------------------------------- */
              /* Mobile Drinks */
              /* ------------------------------------------- */

              if (item.id === "ponudba") {
                return (
                  <div
                    key={item.id}
                    className={clsx(
                      "border-b border-white/[0.07]",
                      "transition-all duration-500",
                      open
                        ? "translate-x-0 opacity-100"
                        : "translate-x-8 opacity-0",
                    )}
                    style={{
                      transitionDelay: open
                        ? `${index * 70 + 100}ms`
                        : "0ms",
                    }}
                  >
                    {/* Drinks Row */}

                    <div className="flex items-center">
                      <button
                        onClick={() =>
                          handleScroll("ponudba")
                        }
                        className={clsx(
                          "flex-1 py-5 text-left",
                          `${uncial.className} text-2xl sm:text-3xl`,
                          "focus-visible:outline-none",
                          active
                            ? "text-irish-orange"
                            : "text-white",
                        )}
                      >
                        Drinks
                      </button>

                      <button
                        onClick={() =>
                          setDrinksOpen(
                            (previous) =>
                              !previous,
                          )
                        }
                        aria-label="Show drink categories"
                        aria-expanded={drinksOpen}
                        className="p-4 text-white/40 transition hover:text-white focus-visible:outline-none focus-visible:text-irish-orange"
                      >
                        <ChevronDown
                          className={clsx(
                            "h-5 w-5 transition-transform duration-300",
                            drinksOpen &&
                              "rotate-180",
                            active &&
                              "text-irish-orange",
                          )}
                        />
                      </button>
                    </div>

                    {/* ----------------------------------- */}
                    {/* Categories */}
                    {/* ----------------------------------- */}

                    <div
                      className={clsx(
                        "grid overflow-hidden transition-all duration-300",
                        drinksOpen
                          ? "grid-rows-[1fr] pb-3 opacity-100"
                          : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="min-h-0">
                        {drinkCategories.map(
                          (category) => (
                            <DrinkCategory
                              key={category.id}
                              {...category}
                              onClick={handleScroll}
                            />
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                );
              }

              /* ------------------------------------------- */
              /* Regular Mobile Link */
              /* ------------------------------------------- */

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
                    "focus-visible:outline-none",
                    open
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0",
                    active
                      ? "text-irish-orange"
                      : "text-white",
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
                        : "text-white/20",
                    )}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </nav>

          {/* ================================================= */}
          {/* Bottom Contact */}
          {/* ================================================= */}

          <div className="mt-auto shrink-0 pt-8">
            <a
              href="tel:+38651668832"
              className="block p-3"
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