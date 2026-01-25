

import Image from "next/image";

export const metadata = {
  title: "News & Events | Poland Consulate in Uganda",
};

export default function NewsPage() {
  return (
    <>
      {/* Page Header */}
      <div className="visadiv">
        <h4>Consulate News</h4>
      </div>

      {/* News Content */}
      <div className="cons-main-news">
        <h5>
          The Consulate of the Republic of Poland in Uganda was launched on 28th
          May 2024
        </h5>

        <p>
          The Honorary Consulate office was commissioned by H.E Amb Mirosław
          Gojdź, the Permanent Representative of Poland to UN Programs and
          Office in Nairobi. Instruments of Power were handed over to the
          Consul by Minister of Foreign Affairs Hon. Oryem Henry Okello.
          <br />
          <br />
          The Hon. Consul is{" "}
          <strong>Professor Ephraim Kamuntu</strong>.
        </p>

        {/* Photos */}
        <div className="cons-main-sub">
          <div className="cons-main-sub-1">
            <h5>Photos</h5>

            <div className="photos-div">
              <Image
                src="/images/ev2.jpeg"
                alt="Consulate event"
                width={500}
                height={300}
              />
              <Image
                src="/images/ev4.jpeg"
                alt="Consulate event"
                width={500}
                height={300}
              />
              <Image
                src="/images/ev3.jpeg"
                alt="Consulate event"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="sectors">
        <div className="secdiv">
          {[
            ["VISIT POLAND", "Tourism opportunities in Poland."],
            ["WORK IN POLAND", "Employment and labor opportunities."],
            ["STUDY IN POLAND", "Higher education opportunities."],
            ["DOING BUSINESS WITH POLAND", "Trade and business relations."],
            ["VISITOR'S VISA AND PERMIT", "Visa and permit information."],
            ["DIPLOMACY", "Cultural and diplomatic relations."],
          ].map(([title, text]) => (
            <div className="sec" key={title}>
              <h5>{title}</h5>
              <hr className="newhr" />
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
