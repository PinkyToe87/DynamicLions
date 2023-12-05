
// eslint-disable-next-line
import classes from "./Footer.module.css";
import Logo from '../../assests/Images/logo_2.png';

const Footer = () => {
  return (
    <footer>
      <h1>Dynamic Downtown Lions, San Angelo TX</h1>
      <img src={Logo} alt="Dynamic Lions logo"/>
      <nav>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/Dynamicdowntownlions/"
              target="_blank" rel="noreferrer"
            >
              Facebook
            </a>
          </li>
          {/* <li>
            <a href="#">Instagram</a>
          </li> */}
          <li>
            <a href="https://www.lionsclubs.org/en" target="_blank" rel="noreferrer">
              Lions Club International
            </a>
          </li>
          <li>
            <p>
              2023
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
