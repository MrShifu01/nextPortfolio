import Layout from "../components/Layout";

const contact = () => {
  return (
    <Layout>
      {/* Contact container */}
      <div className="contact-container">
        {/* Left container */}
        <div className="left-container">
          {/* Header */}
          <div className="header">
            <h2 style={{ opacity: 0.8, fontSize: "3rem" }}>
              <strong>Contact Me</strong>
            </h2>
            <p>
              Let's discuss a project you have in mind, perhaps a position you think I'd be a good fit for or just to chat about web development.
            </p>
            <p>christian@email.com</p>
            <p>+2763 123 1234</p>
          </div>

          {/* Social links */}
          <div className="socials">
            <a href="https://github.com/MrShifu01" target="_blank">
              <img className="icons" src="/static/github.png" alt="GitHub" />
              Github
            </a>
            <a href="https://www.linkedin.com/in/christian-stander-310818276/" target="_blank">
              <img className="icons" src="/static/linkedin.png" alt="LinkedIn" />
              LinkedIn
            </a>
            <a href="mailto:abc@example.com" target="_blank">
              <img className="icons" src="/static/email.png" alt="Email" />
              Email
            </a>
          </div>
        </div>

        {/* Right container */}
        <div className="right-container">
          {/* Contact form */}
          <form className="contact-form">
            <label>Name</label>
            <input type="text" />
            <label>Email</label>
            <input type="text" />
            <label>Subject</label>
            <input type="text" />
            <label>Say Hi</label>
            <textarea type="text" />
            <button className="contact-button">Send Message</button>
          </form>
        </div>
      </div>

      {/* Add custom styling */}
      <style jsx>{`
        .contact-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }

        .left-container {
          padding: 3rem;
        }

        .socials {
          display: flex;
          flex-direction: column;
        }

        .icons {
          margin: 1rem;
          opacity: 0.7;
        }

        .contact-form {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
        }

        label {
          font-weight: 600;
          font-size: 1.5rem;
          opacity: 0.7;
          margin-top: 1rem;
        }

        input {
          width: 400px;
          height: 40px;
        }

        textarea {
          width: 600px;
        }

        .contact-button {
          background-color: #3C4F38;
          color: rgba(255, 255, 255, 0.7);
          font-size: 1.5rem;
          padding: 0 1rem;
          height: 60px;
          width: 300px;
          margin-top: 1.3rem;
          border-color: rgba(255, 255, 255, 0.5);
          border-radius: 25px;
          box-shadow: 0 0 22px 8px;
          opacity: 0.9;
          outline: none;
        }

        .contact-button:hover {
          font-size: 1.6rem;
          opacity: 1;
        }
      `}</style>
    </Layout>
  );
};

export default contact;
