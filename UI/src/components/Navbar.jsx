import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Sprout, Menu, X } from "lucide-react";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-olson-ink/10 bg-olson-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-3 px-6 py-4 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-olson-clay">
            <Sprout className="size-4.5 text-olson-cream" />
          </span>
          <span className="truncate font-spectral text-lg font-bold text-olson-cactus">
            Olson <span className="font-outfit text-[10px] tracking-[0.3em] uppercase text-olson-ink/60">LLC</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-outfit text-sm font-semibold text-olson-ink/75 transition-colors hover:text-olson-clay"
              activeProps={{ className: "text-olson-clay" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/book"
            className="rounded-full bg-olson-clay px-5 py-2.5 font-outfit text-sm font-semibold text-olson-cream shadow-lg shadow-olson-ink/10 transition hover:bg-olson-cactus"
          >
            Get a Free Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-olson-ink/10 p-2 text-olson-ink md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-olson-ink/10 bg-olson-cream md:hidden">
          <div className="mx-auto flex max-w-[1320px] flex-col gap-1 px-6 py-4">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 font-outfit text-sm font-semibold text-olson-ink/80 hover:bg-olson-sand"
                activeProps={{ className: "text-olson-clay bg-olson-sand" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-olson-clay px-5 py-3 text-center font-outfit text-sm font-semibold text-olson-cream"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
