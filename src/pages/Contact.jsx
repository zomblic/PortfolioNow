import "./Contact.css";

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
        <p>Links:</p>
        <ul>
          <a href="https://github.com/zomblic" target="_blank">Github</a>  
          <a href="https://binarypiano.com/">Twitter</a>  
          <a href="http://www.patience-is-a-virtue.org/">LinkedIn</a>  
          <a href="https://theuselessweb.com/">Medium</a>  
          <a href="https://zoomquilt.org/">Facebook</a>  
          <a href="https://www.nyan.cat/index.php?cat=original">Extra </a>  
        </ul>
      </div>
    </div>
  );
}
