

"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="main-navigation">
      <div className="logo">Consulate of Poland 🇵🇱</div>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </div>

      <ul className={`nav-menu ${open ? "active" : ""}`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/visas">Visas</Link></li>
        <li><Link href="/consulate">Consulate</Link></li>
        <li><Link href="/news">News</Link></li>
      </ul>
    </header>
  );
}
