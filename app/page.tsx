
export default function HomePage() {
  return (
    <main
      dangerouslySetInnerHTML={{
        __html: `
<!-- Top Info Bar -->
<div class="header-now">
  <ul class="menu-now">
    <li><i class="fa fa-twitter"></i></li>
    <li><i class="fa fa-facebook"></i></li>
    <li><i class="fa fa-instagram"></i></li>
    <li><i class="fa fa-youtube"></i></li>
    <li>Have any questions?</li>
    <li>info@polandconsulateug.com</li>
    <li>+256 701 439003</li>
    <li>+256 780 168690</li>
  </ul>
</div>

<header>
  <div class="main-navigation">
    <div class="logo-section">
      <div class="polflag">
        <img src="/images/polflag.png" alt="pol_logo" />
      </div>

      <div class="mobile-socials">
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-instagram"></i></a>
        <a href="#"><i class="fa fa-youtube"></i></a>
      </div>

      <div class="hamburger" id="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <ul class="nav-menu" id="navMenu">
      <li><a href="/">Home</a></li>
      <li><a href="/visas">Visas & Permits</a></li>
      <li><a href="/consulate">Consulate</a></li>
      <li><a href="#">Citizen Services</a></li>
      <li><a href="/gallery">Gallery</a></li>
      <li><a href="#">Business</a></li>
      <li><a href="#">Cultural Exchange</a></li>
      <li><a href="/news">News & Events</a></li>
      <li class="polflag">
        <img src="/images/euflag.png" alt="eu_logo" />
      </li>
    </ul>
  </div>
</header>

<div class="con-head">
  <h5>The Honorary Consulate of the Republic of Poland in Uganda</h5>
</div>

<div class="nana-new">
  <div class="nan">
    <img src="/images/pres1.jpeg" />
    <h4>H.E President Andrzej Sebastian Duda</h4>
    <h6>President of the Republic of Poland</h6>
  </div>

  <div class="nan">
    <img src="/images/amb.jpeg" />
    <h4>H.E Amb Mirosław Gojdź</h4>
    <h6>Permanent Representative of Poland to UN Programs & Office in Nairobi</h6>
  </div>

  <div class="nana1-new">
    <img src="/images/ereal.jpg" />
    <h4>Prof. Ephraim Kamuntu</h4>
    <h6>Hon. Consul of Republic of Poland in Uganda</h6>
  </div>
</div>

<div class="addiv">
  <marquee>
    <strong>Important:</strong> Please note that the Poland consulate in Uganda
    does not handle visa processing.
    <a href="https://www.gov.pl/web/kenya/visas"> click for details</a>
  </marquee>
</div>

<div class="sectors">
  <h2 class="section-title">Our Services</h2>
</div>

<div class="mybottom">
  <div class="mybottom1">
    <h5>Consulate of Poland in Uganda</h5>
    <img src="/images/polflag.png" />
  </div>
</div>
        `,
      }}
    />
  );
}
