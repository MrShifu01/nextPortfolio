import { Container } from "react-bootstrap"
import Layout from "../components/Layout"

const about = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <Container>
        <h3>Who am I? The Question for the Ages...</h3>
        <p>Hey there! I'm Christian Stander, a South African web developer with a passion for problem-solving and building awesome digital experiences. With a background in data science and a love for all things tech, I bring a unique blend of analytical thinking and creative flair to my work. When I'm not coding away, you can find me indulging in my personal interests like mathematics, music, and even a good game of chess!</p>
        <h3>What do I do?</h3>
        <p>I specialize in full stack web development using the MERN stack (MongoDB, Express.js, React.js, and Node.js). From crafting intuitive user interfaces to implementing robust back-end functionality, I'm your go-to person for creating responsive and dynamic web applications. With my knowledge of UI and UX design, along with some nifty skills in Next.js, I strive to deliver seamless and engaging digital experiences that leave a lasting impression.</p>
        <h3>How can I help you?</h3>
        <p>If you're looking to bring your ideas to life on the web, I'm here to help! Whether you need a stunning website for your business, an interactive web application, or a complete revamp of your online presence, I've got you covered. I'll work closely with you to understand your vision and translate it into a functional and visually appealing digital solution. Together, we'll create something that not only looks great but also provides a smooth and enjoyable experience for your users. Let's collaborate and make your web dreams a reality!</p>
        <p>So, let's dive into the exciting world of web development together and create something awesome. Get in touch with me at <a href="mailto:christian@email.com">christian@email.com</a> or give me a call at +2712345678. I can't wait to hear about your project and help you shine online!</p>
      </Container>

      <style jsx>{`
        h1 {
          text-align:center;
          opacity:0.8;
          margin: 1rem;
        }

        h3 {
          opacity:0.9;
        }
      `}</style>
    </Layout>
  )
}

export default about