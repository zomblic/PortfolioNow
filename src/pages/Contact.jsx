export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Feel free to reach out using the form below.</p>
      
      <form>
        <div>
          <label>Name</label>
          <input 
            type="text" 
            placeholder="Your Name"
          />
        </div>
        
        <div>
          <label>Email</label>
          <input 
            type="email" 
            placeholder="Your Email"
          />
        </div>
        
        <div>
          <label>Message</label>
          <textarea 
            rows="4" 
            placeholder="Your Message"
          ></textarea>
        </div>
        
        <button type="submit">
          Send Message
        </button>
      </form>
      
      <div>
        <p>Links:</p>
        <ul>
          <li><a href="#">Github</a></li>
          <li><a href="#">FakeEmail</a></li>
          <li><a href="#">FakeSocial</a></li>
          <li><a href="#">Medium</a></li>
          <li><a href="#">WordPress</a></li>
        </ul>
      </div>
    </div>
  );
}
