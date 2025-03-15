import "./Contact.css";
import githubLogo from '../assets/images/github.png';
import instaLogo from '../assets/images/insta.png';
import linkedinLogo from '../assets/images/Linkedin.png';
import facebookLogo from '../assets/images/facebook.png';
import whatsappLogo from '../assets/images/WhatsApp.png';


export default function Contact() {
  return (
    <div className="cyberpunk-container">
      <h1 className="cyberpunk-title">Contact Page</h1>
      <p className="cyberpunk-text">Feel free to reach out using the form below.</p>

      <form className="cyberpunk-form">
        <div className="input-group">
          <label>Name</label>
          <input type="text" placeholder="Your Name" />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Your Email" />
        </div>

        <div className="input-group">
          <label>Message</label>
          <textarea rows="4" placeholder="Your Message"></textarea>
        </div>

        <button type="submit" className="cyberpunk-button">
          Send Message
        </button>
      </form>

      <div className="cyberpunk-links">
      <ul>
  <a href="https://github.com/zomblic" target="_blank" rel="noopener noreferrer">
    <img src={githubLogo} alt="GitHub" />
  </a>  
  <a href="https://binarypiano.com/" target="_blank" rel="noopener noreferrer">
    <img src={instaLogo} alt="Instagram" />
  </a>  
  <a href="http://www.patience-is-a-virtue.org/" target="_blank" rel="noopener noreferrer">
    <img src={linkedinLogo} alt="LinkedIn" />
  </a>  
  <a href="https://theuselessweb.com/" target="_blank" rel="noopener noreferrer">
    <img src={facebookLogo} alt="Facebook" />
  </a>  
  <a href="https://zoomquilt.org/" target="_blank" rel="noopener noreferrer">
    <img src={whatsappLogo} alt="WhatsApp" />
  </a>  
  <a href="https://www.nyan.cat/index.php?cat=original" target="_blank" rel="noopener noreferrer">Extra</a>  
</ul>

      </div>
    </div>
  );
}
