import "./mainSection.css";
import { SiGithub, SiTwitter, SiWhatsapp } from "react-icons/si";

const MainSection = () => {
  return (
    <section className="main-section" id="home">
      <h1 className="main-heading">Hello! My name is Saran Pariyar</h1>
      <h2 className="second-heading">I'm a frontend developer</h2>
      <a href="#contact" className="contact-btn">
        Have a chat with me :)
      </a>
      {/* <p className="find-me-p">Find me on :</p> */}
      <section className="find-me-section">
        <a
          href="https://github.com/Saran-pariyar"
          className="github-link-icon link-icon"
          target="_blank"
        >
          <SiGithub />
        </a>
        <a
          href="https://twitter.com/saran_pariyar1"
          className="twitter-link-icon link-icon"
        >
          <SiTwitter />
        </a>
        <a
          href=" https://wa.me/+9779842092296"
          className="whatsapp-link-icon link-icon"
        >
          <SiWhatsapp />
        </a>
      </section>
    </section>
  );
};

export default MainSection;
