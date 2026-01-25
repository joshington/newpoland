
export const metadata = {
  title: "Visas | Poland Consulate in Uganda",
};

export default function VisasPage() {
  return (
    <>
      {/* Page Header */}
      <div className="visadiv">
        <h4>Visas</h4>
      </div>

      {/* Main Content */}
      <div className="visa-content">
        <div className="visatext">
          <p>
            The purpose of your intended travel and other facts will determine
            what type of visa is required under{" "}
            <strong>Poland immigration law</strong>. As a visa applicant, you
            will need to establish that you meet all requirements to receive
            the category of visa for which you are applying.
          </p>

          <div className="important-notice">
            <h5>Important Notice</h5>
            <p>
              Please Note: <strong>The Poland Consulate in Uganda</strong> does
              not process any visas. Visa processing is handled by the{" "}
              <strong>Poland Embassy in Nairobi</strong>.
            </p>
          </div>

          <div className="buttondiv">
            <a
              href="https://www.gov.pl/web/kenya/visas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Details about visa application</button>
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="sectors">
        <div className="secdiv">
          {[
            ["VISIT POLAND", "Discover tourism opportunities in Poland."],
            ["WORK IN POLAND", "Employment and work permit information."],
            ["STUDY IN POLAND", "Educational opportunities in Polish universities."],
            ["DOING BUSINESS WITH POLAND", "Trade and investment guidance."],
            ["VISITOR'S VISA AND PERMIT", "Visa requirements and procedures."],
            ["DIPLOMACY", "Strengthening Poland–Uganda relations."],
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
