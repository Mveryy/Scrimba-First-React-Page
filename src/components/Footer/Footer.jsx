import "../Footer/Footer.css";
import twitter from "../../images/twitter-icon.svg";
import facebook from "../../images/facebook-icon.svg";
import instagram from "../../images/instagram-icon.svg";
import github from "../../images/github-icon.svg";

export default function Footer() {
    return (
        <div className="footer">
            <a href="https://twitter.com" target="_blank">
                <img src={twitter} alt="Twitter Icon" />
            </a>
            <a href="https://facebook.com" target="_blank">
                <img src={facebook} alt="Facebook Icon" />
            </a>
            <a href="https://instagram.com" target="_blank">
                <img src={instagram} alt="Instagram Icon" />
            </a>
            <a href="https://github.com" target="_blank">
                <img src={github} alt="Github Icon" />
            </a>
        </div>
    );
}
