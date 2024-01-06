import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";

export default function A() {
  return (<div className="footer-nav">
    <div className="container">
      <ul id="footer-nav-list1" className="footer-nav-list">
        <li className="footer-nav-item">
          <h2 className="nav-title">Our Centers</h2>
        </li>
        <li className="footer-nav-item">
          <li className="footerNavLink">Kota</li>
        </li>
        <li className="footer-nav-item">
          <li className="footerNavLink">Delhi</li>
        </li>
        <li className="footer-nav-item">
          <li className="footerNavLink">Banglore</li>
        </li>
        <li className="footer-nav-item">
          <li className="footerNavLink">Hydrabad</li>
        </li>
        <li className="footer-nav-item">
          <li className="footerNavLink">Kolkata</li>
        </li>
      </ul>
      <ul id="footer-nav-list2" className="footer-nav-list">
        <li className="footer-nav-item">
          <h2 className="nav-title">Popular Exams</h2>
        </li>
        <li className="footer-nav-item">
          <li className="footerNavLink">IIT JEE</li>
        </li>
        <li className="footer-nav-item">
          <li className="footerNavLink">UPSC</li>
        </li>
        <li className="footer-nav-item">
          <li className="footerNavLink">NEET</li>
        </li>
        <li className="footer-nav-item">
          <li className="footerNavLink">NDA</li>
        </li>
        <li className="footer-nav-item">
          <li className="footerNavLink">GATE</li>
        </li>
      </ul>
      <ul id="footer-nav-list3" className="footer-nav-list">
        <li className="footer-nav-item">
          <h2 className="nav-title">Our Company</h2>
        </li>
        <li className="footer-nav-item">
          <li className="footerNavLink">Career</li>
        </li>
        <li className="footer-nav-item">
          <li className="footerNavLink">Update</li>
        </li>
        <li className="footer-nav-item">
          <li className="footerNavLink">Terms and conditions</li>
        </li>
        <li className="footer-nav-item">
          <li className="footerNavLink">About us</li>
        </li>
        <li className="footer-nav-item">
          <li className="footerNavLink">Blogs</li>
        </li>
      </ul>
      <ul id="footer-nav-list4" className="footer-nav-list">
        <li className="footer-nav-item">
          <h2 className="nav-title">Services</h2>
        </li>
        <li className="footer-nav-item">
          <li className="footerNavLink">Prices drop</li>
        </li>
        <li className="footer-nav-item">
          <li className="footerNavLink">New Courses</li>
        </li>
        <li className="footer-nav-item">
          <li className="footerNavLink">Best Courses</li>
        </li>
        <li className="footer-nav-item">
          <li className="footerNavLink">Contact us</li>
        </li>
        <li className="footer-nav-item">
          <li className="footerNavLink">Best Reuslt</li>
        </li>
      </ul>
      <ul id="footer-nav-list5" className="footer-nav-list">
        <li className="footer-nav-item">
          <h2 className="nav-title">Contact</h2>
        </li>
        <li className="footer-nav-item flex">
          <div className="icon-box">
            <ion-icon name="location-outline"></ion-icon>
          </div>
          <address className="content">
            561 HAL Old Airport Rd, Murugeshpalya, Bengaluru, Karnataka 560017
          </address>
        </li>
        <li className="footer-nav-item flex">
          <div className="icon-box">
            <ion-icon name="call-outline"></ion-icon>
          </div>
          <li href="tel:8446590015" className="footerNavLink">8446590015</li>
        </li>
        <li className="footer-nav-item flex">
          <div className="icon-box">
            <ion-icon name="mail-outline"></ion-icon>
          </div>
          <li href="mailto:divyakumar768800@gmail.com" className="footerNavLink">divyakumar768800@gmail.com</li>
        </li>
      </ul>
    </div>
  </div>);
}