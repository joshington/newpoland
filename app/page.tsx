

// app/page.tsx (Homepage)
import OfficialCard from "@/components/OfficialCard";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Consulate of the Republic of Poland</h1>
          <p>Strengthening diplomatic relations between Poland and Uganda</p>
          <div className="hero-buttons">
            <a href="/visas" className="btn-primary">Visas & Permits</a>
            <a href="/consulate" className="btn-secondary">About Us</a>
          </div>
        </div>
      </section>

      <section className="officials">
        <div className="container">
          <h2 className="section-title">Our Leadership</h2>
          <div className="officials-grid">
            <OfficialCard
              image="/images/pres1.jpeg"
              name="H.E Andrzej Duda"
              title="President of the Republic of Poland"
            />
            <OfficialCard
              image="/images/amb.jpeg"
              name="H.E Mirosław Gojdź"
              title="Ambassador of Poland to UNEP & UN-Habitat"
            />
            <OfficialCard
              image="/images/ereal.jpg"
              name="Prof. Ephraim Kamuntu"
              title="Honorary Consul of Poland in Uganda"
            />
          </div>
        </div>
      </section>

      <section className="quick-links">
        <div className="container">
          <h2 className="section-title">Quick Services</h2>
          <div className="links-grid">
            <a href="/visas" className="link-card">
              <span>🛂</span>
              <h3>Visas & Permits</h3>
              <p>Travel information & documentation</p>
            </a>
            <a href="/services" className="link-card">
              <span>💼</span>
              <h3>Consular Services</h3>
              <p>Legalization & citizen assistance</p>
            </a>
            <a href="/news" className="link-card">
              <span>📰</span>
              <h3>News & Events</h3>
              <p>Latest updates & announcements</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}