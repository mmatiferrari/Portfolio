export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        <h2>Contactame 📫</h2>
        <p className="text-lg">
        No dudes en contactarme por este medio o cualquier red social.
        </p>
      </div>
      <form className="contact--form--container" action="https://formsubmit.co/matiasferrari96@gmail.com" method="POST">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
}
