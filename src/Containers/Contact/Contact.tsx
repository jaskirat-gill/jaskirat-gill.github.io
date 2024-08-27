import Canvas from "../../Components/Canvas/Canvas";
import "../../App.css";
import ContactCard from "./ContactCard";

function Contact() {

  return (
    <div className="container-root" id="contact">
      <Canvas />
      <ContactCard />
    </div>
  );
}

export default Contact;