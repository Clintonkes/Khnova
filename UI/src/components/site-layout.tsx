import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Leaf, Menu, X } from "lucide-react";
import { useState } from "react";

export const BUSINESS = {
  name: "Alanrich LLC",
  phone: "+1 (469) 650-2595",
  phoneHref: "tel:+14696502595",
  email: "alanrichllc@gmail.com",
  address: "2741 Royal Avenue, Groves, TX 77619",
};

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const links = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/book", label: "Book Service" },
    { to: "/contact", label: "Contact" },
  ] as const;
  return (
    <nav className="sticky top-0 z-50 border-b border-primary/10 bg-background/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-4 md:flex md:justify-between md:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
            <Leaf className="size-5" />
          </span>
          <span className="truncate font-display text-lg font-extrabold tracking-tight">
            Alanrich <span className="text-primary">LLC</span>
          </span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/book"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Get a Free Quote
          </Link>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-primary/10 p-2 md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-primary/10 bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold hover:bg-secondary"
                activeProps={{ className: "text-primary bg-secondary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-primary/10 bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Leaf className="size-5" />
            </span>
            <span className="font-display text-lg font-extrabold tracking-tight">
              Alanrich LLC
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Professional lawn care and mowing serving Groves, Port Arthur, and the Golden Triangle.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Weekly Mowing</li>
            <li>Edging & Trimming</li>
            <li>Yard Cleanup</li>
            <li>Seasonal Care</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href={BUSINESS.phoneHref} className="hover:text-primary">{BUSINESS.phone}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href={`mailto:${BUSINESS.email}`} className="hover:text-primary break-all">{BUSINESS.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{BUSINESS.address}</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest">Hours</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Mon–Fri · 7am–7pm</li>
            <li>Saturday · 8am–5pm</li>
            <li>Sunday · Closed</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Alanrich LLC · All rights reserved.</p>
          <Link to="/admin" className="hover:text-primary">Staff Login</Link>
        </div>
      </div>
    </footer>
  );
}
