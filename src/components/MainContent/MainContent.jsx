import "./MainContent.css";
import email from "../../images/email-icon.svg";
import linkedIn from "../../images/linkedin-icon.svg";

export default function MainContent() {
    return (
        <div className="mainContent">
            <h2>Laura Smith</h2>
            <h4>Frontend Developer</h4>
            <a className="web-site" href="#">
                laurasmith.website
            </a>
            <div className="buttons">
                <a className="email" href="https://gmail.com" target="_blank">
                    <img src={email} alt="Email Icon" /> Email
                </a>
                <a className="linkedIn" href="https://www.linkedin.com/" target="_blank">
                    <img src={linkedIn} alt="LinkedIn Icon" /> LinkedIn
                </a>
            </div>
            <div className="mainText">
                <h3 className="about">About</h3>
                <p className="about-text">
                    I am a frontend developer with a particular interest in making things simple and automating daily
                    tasks. I try to keep up with security and best practices, and am always looking for new things to
                    learn.
                </p>
                <h3 className="interests">Interests</h3>
                <p className="interests-text">
                    Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop
                    culture ninja. Coffee fanatic.
                </p>
            </div>
        </div>
    );
}
