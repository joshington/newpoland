

// app/visas/page.tsx
"use client";

import Link from "next/link";

export default function VisasPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Visas & Permits</h1>
          <p>Your guide to traveling, working, and studying in Poland</p>
        </div>
      </div>

      <div className="visa-content">
        <div className="container">
          <div className="visa-info-grid">
            <div className="visa-text">
              <p className="lead-text">
                The purpose of your intended travel and other facts will determine
                what type of visa is required under <strong>Poland immigration law</strong>.
              </p>

              <div className="important-notice">
                <h5>📢 Important Notice</h5>
                <p>
                  <strong>The Poland Consulate in Uganda</strong> does not process
                  visas. Visa processing is handled by the{" "}
                  <strong>Poland Embassy in Nairobi, Kenya</strong>.
                </p>
              </div>

              <div className="visa-types">
                <h3>Types of Visas</h3>
                <ul>
                  <li><strong>Schengen Visa (Type C)</strong> - For short stays up to 90 days (tourism, business, family visits)</li>
                  <li><strong>National Visa (Type D)</strong> - For long stays over 90 days (work, study, family reunification)</li>
                  <li><strong>Airport Transit Visa (ATV)</strong> - For passing through international transit areas</li>
                </ul>
              </div>

              <div className="buttondiv">
                <a
                  href="https://www.gov.pl/web/kenya/visas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Apply for Visa →</button>
                </a>
              </div>
            </div>

            <div className="visa-sidebar">
              <div className="info-card">
                <h4>Required Documents</h4>
                <ul>
                  <li>Valid passport (min. 3 months beyond stay)</li>
                  <li>Completed visa application form</li>
                  <li>Recent passport-size photographs</li>
                  <li>Travel insurance (min. €30,000 coverage)</li>
                  <li>Flight itinerary & accommodation proof</li>
                  <li>Financial means proof</li>
                  <li>Visa fee payment receipt</li>
                </ul>
              </div>
              <div className="info-card">
                <h4>Processing Time</h4>
                <p>Standard processing takes approximately <strong>15 calendar days</strong>. Apply well in advance of your intended travel date.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="sectors">
        <div className="container">
          <h2 className="section-title">Explore Poland</h2>
          <div className="secdiv">
            {[
              { title: "VISIT POLAND", desc: "Tourism, culture, and travel opportunities.", icon: "🏞️" },
              { title: "WORK IN POLAND", desc: "Employment and work permit guidance.", icon: "💼" },
              { title: "STUDY IN POLAND", desc: "Universities and academic programs.", icon: "🎓" },
              { title: "DOING BUSINESS", desc: "Trade and investment opportunities.", icon: "📈" },
              { title: "VISAS & PERMITS", desc: "Visa requirements and documentation.", icon: "🛂" },
              { title: "DIPLOMACY", desc: "Bilateral and cultural relations.", icon: "🤝" }
            ].map((service, idx) => (
              <div className="sec" key={idx}>
                <div className="sec-icon">{service.icon}</div>
                <h5>{service.title}</h5>
                <hr className="newhr" />
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}