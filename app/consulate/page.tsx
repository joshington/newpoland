
// app/consulate/page.tsx
"use client";

export default function ConsulatePage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Consulate</h1>
          <p>Honorary Consulate of the Republic of Poland in Kampala, Uganda</p>
        </div>
      </div>

      <div className="consulate-container container">
        <div className="consulate-grid">
          <div className="consulate-card map-card">
            <h2>Poland Consulate in Uganda</h2>
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7436!2d32.5825!3d0.3476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb6d8c6d8c6d%3A0x6d8c6d8c6d8c6d8c!2sKampala!5e0!3m2!1sen!2sug!4v1650000000000!5m2!1sen!2sug"
                loading="lazy"
                style={{ width: "100%", height: "400px", border: "0" }}
                allowFullScreen
              />
            </div>
            <div className="address-info">
              <p><strong>📍 Address:</strong> Plot 23B, Lumumba Avenue, Kampala, Uganda</p>
              <p><strong>📞 Phone:</strong> +256 701 439003</p>
              <p><strong>✉️ Email:</strong> info@polandconsulateug.com</p>
            </div>
          </div>

          <div className="consulate-card contact-card">
            <h2>For any Inquiries?</h2>
            <div className="contact-options">
              <a href="https://wa.me/256701439003" className="contact-wa">
                <img src="/images/wtsp1.png" alt="WhatsApp" />
                <span>Chat on WhatsApp</span>
              </a>
              <a href="mailto:info@polandconsulateug.com" className="contact-email">
                <img src="/images/mail.png" alt="Email" />
                <span>Email Us</span>
              </a>
            </div>
            <div className="working-hours">
              <h3>Working Hours</h3>
              <p>Monday - Friday: 9:00 AM - 4:00 PM</p>
              <p>Saturday - Sunday: Closed</p>
              <p className="note">* By appointment only</p>
            </div>
          </div>
        </div>
      </div>

      <section className="sectors">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="secdiv">
            {[
              { title: "VISIT POLAND", desc: "Discover the beautiful landscapes, rich history, and vibrant culture of Poland through tourism opportunities.", icon: "🏞️" },
              { title: "WORK IN POLAND", desc: "Information about employment opportunities, work permits, and professional development in Poland.", icon: "💼" },
              { title: "STUDY IN POLAND", desc: "Explore educational opportunities in Polish universities and higher education institutions.", icon: "🎓" },
              { title: "DOING BUSINESS WITH POLAND", desc: "Guidance on trade, investment opportunities, and business partnerships between Uganda and Poland.", icon: "📈" },
              { title: "VISITOR'S VISA AND PERMIT", desc: "Information about visa requirements, application procedures, and travel documentation.", icon: "🛂" },
              { title: "DIPLOMACY", desc: "Promoting diplomatic relations and cultural understanding between Poland and Uganda.", icon: "🤝" },
            ].map((service) => (
              <div className="sec" key={service.title}>
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