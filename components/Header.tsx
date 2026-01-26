

"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <img src="/images/myflag.jpeg" className="flag" />

        <nav className={`nav ${open ? "open" : ""}`}>
          <Link href="/">Home</Link>
          <Link href="/visas">Visas</Link>
          <Link href="/services">Consulate Services</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/news">News</Link>
        </nav>

        <img src="/images/euflag.png" className="flag" />

        <button className="hamburger" onClick={() => setOpen(!open)}>☰</button>
      </div>
    </header>
  );
}
