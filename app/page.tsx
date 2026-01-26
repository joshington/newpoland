

import OfficialCard from "@/components/OfficialCard";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Consulate of the Republic of Poland</h1>
        <p>Strengthening diplomatic relations between Poland and Uganda</p>
      </section>

      <section className="officials">
        <OfficialCard
          image="/images/pres1.jpeg"
          name="H.E Andrzej Duda"
          title="President of the Republic of Poland"
        />
        <OfficialCard
          image="/images/amb.jpeg"
          name="H.E Mirosław Gojdź"
          title="Ambassador of Poland"
        />
        <OfficialCard
          image="/images/ereal.jpg"
          name="Prof. Ephraim Kamuntu"
          title="Honorary Consul of Poland in Uganda"
        />
      </section>
      


    </>
  );
}
