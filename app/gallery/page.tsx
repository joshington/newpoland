
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
//import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const galleryImages = [
  { src: "/images/ev2.jpeg", title: "Consulate Event", desc: "Official gathering at the Poland Consulate" },
  { src: "/images/ev4.jpeg", title: "Diplomatic Meeting", desc: "High-level discussions between officials" },
  { src: "/images/ev3.jpeg", title: "Cultural Event", desc: "Celebrating Polish-Ugandan relations" },
  { src: "/images/wpro.jpeg", title: "Consulate Proceedings", desc: "Official consulate proceedings" },
  { src: "/images/ev6.jpeg", title: "Cultural Exchange", desc: "Polish-Ugandan cultural exchange" },
  { src: "/images/ev5.jpeg", title: "Official Ceremony", desc: "Official ceremonies at the consulate" },
  { src: "/images/ev1.jpeg", title: "Consulate Launch", desc: "Launch event at the consulate" },
  { src: "/images/incharge.jpeg", title: "Consulate Staff", desc: "Meet our staff" },
  { src: "/images/cem.jpeg", title: "Diplomatic Meeting", desc: "High-level diplomatic meeting" },
];

const services = [
  { title: "VISIT POLAND", desc: "Discover the beautiful landscapes, rich history, and vibrant culture of Poland through tourism opportunities.", icon: "🏞️" },
  { title: "WORK IN POLAND", desc: "Information about employment opportunities, work permits, and professional development in Poland.", icon: "💼" },
  { title: "STUDY IN POLAND", desc: "Explore educational opportunities in Polish universities and higher education institutions.", icon: "🎓" },
  { title: "DOING BUSINESS WITH POLAND", desc: "Guidance on trade, investment opportunities, and business partnerships between Uganda and Poland.", icon: "📈" },
  { title: "VISITOR'S VISA AND PERMIT", desc: "Information about visa requirements, application procedures, and travel documentation.", icon: "🛂" },
  { title: "DIPLOMACY", desc: "Promoting diplomatic relations and cultural understanding between Poland and Uganda.", icon: "🤝" },
];

export default function GalleryPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-roboto bg-white">
     
    </div>
  );
}
