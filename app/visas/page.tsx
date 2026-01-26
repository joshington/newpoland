

"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function VisasPage() {
  useEffect(() => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    if (!hamburger || !navMenu) return;

    const toggleMenu = () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    };

    hamburger.addEventListener("click", toggleMenu);

    const navLinks = document.querySelectorAll(".nav-menu a");
    navLinks.forEach(link =>
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      })
    );

    const handleScroll = () => {
      const header = document.querySelector(".main-navigation") as HTMLElement | null;
      if (!header) return;

      if (window.scrollY > 100) {
        header.style.backgroundColor = "rgba(255,255,255,0.95)";
        header.style.backdropFilter = "blur(10px)";
      } else {
        header.style.backgroundColor = "white";
        header.style.backdropFilter = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      hamburger.removeEventListener("click", toggleMenu);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* HEADER */}
      {/*
      <header<header>
        <div className="main-navigation">
          <div className="logo-section">
            <div className="polflag">
              <img src="/images/polflag.png" alt="Poland Flag" />
            </div>

            <div className="mobile-socials">
              <a href="#"><i className="fa fa-twitter" /></a>
              <a href="#"><i className="fa fa-facebook" /></a>
              <a href="#"><i className="fa fa-instagram" /></a>
              <a href="#"><i className="fa fa-youtube" /></a>
            </div>

            <div className="hamburger" id="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <ul className="nav-menu" id="navMenu">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/visas">Visas & Permits</Link></li>
            <li><Link href="/consulate">Consulate</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/news">News & Events</Link></li>
            <li className="polflag">
              <img src="/images/euflag.png" alt="EU Flag" />
            </li>
          </ul>
        </div>
      </header>
      */}
      

      {/* VISAS HEADER
      <div className="visadiv">
        <h4>Visas & Permits</h4>
      </div>
      
      */}
      

      {/* MAIN CONTENT */}
      <div className="visa-content">
        <div className="visatext">
          <p>
            The purpose of your intended travel and other facts will determine
            what type of visa is required under{" "}
            <strong>Poland immigration law</strong>.
          </p>

          <div className="important-notice">
            <h5>Important Notice</h5>
            <p>
              <strong>The Poland Consulate in Uganda</strong> does not process
              visas. Visa processing is handled by the{" "}
              <strong>Poland Embassy in Nairobi</strong>.
            </p>
          </div>

          <div className="buttondiv">
            <a
              href="https://www.gov.pl/web/kenya/visas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Details about visa application</button>
            </a>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section className="sectors">
        <div className="secdiv">
          {[
            ["VISIT POLAND", "Tourism, culture, and travel opportunities."],
            ["WORK IN POLAND", "Employment and work permit guidance."],
            ["STUDY IN POLAND", "Universities and academic programs."],
            ["DOING BUSINESS", "Trade and investment opportunities."],
            ["VISAS & PERMITS", "Visa requirements and documentation."],
            ["DIPLOMACY", "Bilateral and cultural relations."]
          ].map(([title, text], i) => (
            <div className="sec" key={i}>
              <h5>{title}</h5>
              <hr className="newhr" />
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

     
    </>
  );
}
