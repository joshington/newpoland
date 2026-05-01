
// components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="main-navigation">
        <div className="logo-section">
          <div className="polflag">
            <Image src="/images/polflag.png" alt="Poland Flag" width={50} height={40} />
          </div>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link href="/visas" onClick={() => setMenuOpen(false)}>Visas & Permits</Link></li>
          <li><Link href="/consulate" onClick={() => setMenuOpen(false)}>Consulate</Link></li>
          <li><Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li><Link href="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
          <li><Link href="/news" onClick={() => setMenuOpen(false)}>News & Events</Link></li>
          <li className="polflag">
            <Image src="/images/euflag.png" alt="EU Flag" width={40} height={30} />
          </li>
        </ul>
      </div>
    </header>
  );
}