
export default function ConsulatePage() {
  return (
    <>
      <div className="visadiv">
        <h4>Consulate</h4>
      </div>

      <div className="cons-main-div">
        <div className="consul">
          <h5>Poland Consulate in Uganda</h5>
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            loading="lazy"
            style={{ width: "100%", height: "400px", border: "0" }}
          />
        </div>

        <div className="consul-text">
          <h5>For any Inquiries?</h5>
          <a href="https://wa.me/256701439003">
            <img src="/images/wtsp1.png" alt="WhatsApp" />
          </a>

          <a href="mailto:info@polandconsulateug.com">
            <button className="em">
              <h5>Email us</h5>
              <img src="/images/mail.png" alt="Email" />
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
