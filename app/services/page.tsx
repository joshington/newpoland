

// app/services/page.tsx
export default function Services() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Consular Services</h1>
          <p>Comprehensive assistance for Polish citizens and foreign nationals</p>
        </div>
      </div>

      <div className="services-container container">
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🛂</div>
            <h3>Passport Services</h3>
            <p>Issuance and renewal of Polish passports, emergency travel documents.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📄</div>
            <h3>Legalization of Documents</h3>
            <p>Authentication and legalization of official documents for use in Poland and abroad.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">👥</div>
            <h3>Citizen Assistance</h3>
            <p>Emergency assistance, registration, and support for Polish citizens in Uganda.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📊</div>
            <h3>Trade Facilitation</h3>
            <p>Support for businesses and investors interested in Polish-Ugandan trade relations.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">⚖️</div>
            <h3>Notarial Services</h3>
            <p>Notarization of signatures, copies, and other legal documents.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🌍</div>
            <h3>Cultural Exchange</h3>
            <p>Promoting Polish culture, language, and educational opportunities in Uganda.</p>
          </div>
        </div>

        <div className="service-note">
          <div className="important-notice">
            <h5>Important Information</h5>
            <p>For visa-related inquiries, please note that the Poland Consulate in Uganda does not process visas directly. Visa applications are handled by the <strong>Poland Embassy in Nairobi</strong>.</p>
            <div className="buttondiv">
              <a href="https://www.gov.pl/web/kenya/visas" target="_blank" rel="noopener noreferrer">
                <button>Visit Embassy Website →</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}