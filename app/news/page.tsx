

// app/news/page.tsx
import Image from "next/image";

export const metadata = {
  title: "News & Events | Poland Consulate in Uganda",
};

const newsItems = [
  {
    id: 1,
    title: "Consulate of the Republic of Poland in Uganda Launched",
    date: "28th May 2024",
    description: "The Honorary Consulate office was commissioned by H.E Amb Mirosław Gojdź, the Permanent Representative of Poland to UN Programs and Office in Nairobi. Instruments of Power were handed over to the Consul by Minister of Foreign Affairs Hon. Oryem Henry Okello.",
    images: ["/images/ev2.jpeg", "/images/ev4.jpeg", "/images/ev3.jpeg"],
    isMain: true
  },
  {
    id: 2,
    title: "Polish-Ugandan Business Forum",
    date: "15th June 2024",
    description: "A successful business forum was held between Polish and Ugandan entrepreneurs, focusing on trade and investment opportunities.",
    images: ["/images/ev5.jpeg"],
    isMain: false
  },
  {
    id: 3,
    title: "Cultural Exchange Program",
    date: "1st July 2024",
    description: "Polish and Ugandan artists came together for a cultural exchange program celebrating our shared heritage.",
    images: ["/images/ev6.jpeg"],
    isMain: false
  }
];

// Define services as an array of objects, not nested arrays
const servicesList = [
  {
    title: "VISIT POLAND",
    description: "Tourism opportunities in Poland."
  },
  {
    title: "WORK IN POLAND",
    description: "Employment and labor opportunities."
  },
  {
    title: "STUDY IN POLAND",
    description: "Higher education opportunities."
  },
  {
    title: "DOING BUSINESS WITH POLAND",
    description: "Trade and business relations."
  },
  {
    title: "VISITOR'S VISA AND PERMIT",
    description: "Visa and permit information."
  },
  {
    title: "DIPLOMACY",
    description: "Cultural and diplomatic relations."
  }
];

export default function NewsPage() {
  // Get the featured news item (the one with isMain === true)
  const featuredNews = newsItems.find(item => item.isMain === true);
  // Get other news items (those with isMain === false)
  const otherNews = newsItems.filter(item => item.isMain !== true);

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>News & Events</h1>
          <p>Stay updated with the latest happenings at the Poland Consulate in Uganda</p>
        </div>
      </div>

      <div className="news-container container">
        {/* Featured News */}
        {featuredNews && (
          <div className="featured-news">
            <div className="featured-news-content">
              <span className="news-badge">Featured</span>
              <h2>{featuredNews.title}</h2>
              <div className="news-date">{featuredNews.date}</div>
              <p>{featuredNews.description}</p>
              <p className="consul-note">
                <strong>The Hon. Consul is Prof. Ephraim Kamuntu</strong>
              </p>
            </div>
            <div className="featured-news-gallery">
              <div className="news-gallery-grid">
                {featuredNews.images.map((img, idx) => (
                  <div key={idx} className="news-gallery-item">
                    <Image 
                      src={img} 
                      alt={`News image ${idx + 1}`} 
                      width={400} 
                      height={250}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Other News Grid */}
        {otherNews.length > 0 && (
          <div className="news-grid">
            {otherNews.map((item) => (
              <div key={item.id} className="news-card">
                <div className="news-card-image">
                  <Image 
                    src={item.images[0]} 
                    alt={item.title} 
                    width={400} 
                    height={220}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="news-card-content">
                  <div className="news-date">{item.date}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href="#" className="read-more">Read More →</a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <section className="sectors">
        <div className="container">
          <h2 className="section-title">Our Focus Areas</h2>
          <div className="secdiv">
            {servicesList.map((service, index) => (
              <div className="sec" key={index}>
                <h5>{service.title}</h5>
                <hr className="newhr" />
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}