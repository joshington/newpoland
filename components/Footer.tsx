

// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h4>Poland Consulate in Uganda</h4>
            <p>Honorary Consulate of the Republic of Poland</p>
            <p>Plot 23B, Lumumba Avenue<br />Kampala, Uganda</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <p><Link href="/">Home</Link></p>
            <p><Link href="/visas">Visas & Permits</Link></p>
            <p><Link href="/consulate">Consulate</Link></p>
            <p><Link href="/gallery">Gallery</Link></p>
            <p><Link href="/news">News & Events</Link></p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>📞 +256 701 439003</p>
            <p>✉️ info@polandconsulateug.com</p>
            <p>🕒 Mon-Fri: 9:00 AM - 4:00 PM</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Consulate of the Republic of Poland in Uganda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}