

// app/gallery/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

const galleryImages = [
  { src: "/images/ev2.jpeg", title: "Consulate Event", desc: "Official gathering at the Poland Consulate", category: "events" },
  { src: "/images/ev4.jpeg", title: "Diplomatic Meeting", desc: "High-level discussions between officials", category: "diplomacy" },
  { src: "/images/ev3.jpeg", title: "Cultural Event", desc: "Celebrating Polish-Ugandan relations", category: "culture" },
  { src: "/images/wpro.jpeg", title: "Consulate Proceedings", desc: "Official consulate proceedings", category: "events" },
  { src: "/images/ev6.jpeg", title: "Cultural Exchange", desc: "Polish-Ugandan cultural exchange", category: "culture" },
  { src: "/images/ev5.jpeg", title: "Official Ceremony", desc: "Official ceremonies at the consulate", category: "diplomacy" },
  { src: "/images/ev1.jpeg", title: "Consulate Launch", desc: "Launch event at the consulate", category: "events" },
  { src: "/images/incharge.jpeg", title: "Consulate Staff", desc: "Meet our staff", category: "staff" },
  { src: "/images/cem.jpeg", title: "Diplomatic Meeting", desc: "High-level diplomatic meeting", category: "diplomacy" },
];

const categories = ["all", "events", "diplomacy", "culture", "staff"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<null | typeof galleryImages[0]>(null);

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Gallery</h1>
          <p>Moments from diplomatic events, cultural exchanges, and official ceremonies</p>
        </div>
      </div>

      <div className="gallery-container container">
        {/* Category Filter */}
        <div className="gallery-filter">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredImages.map((image, index) => (
            <div 
              key={index} 
              className="gallery-item"
              onClick={() => setSelectedImage(image)}
            >
              <div className="gallery-image-wrapper">
                <Image
                  src={image.src}
                  alt={image.title}
                  width={500}
                  height={300}
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <span>🔍 View</span>
                </div>
              </div>
              <div className="gallery-caption">
                <h4>{image.title}</h4>
                <p>{image.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>×</button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              width={800}
              height={600}
              className="lightbox-image"
            />
            <div className="lightbox-caption">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.desc}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}