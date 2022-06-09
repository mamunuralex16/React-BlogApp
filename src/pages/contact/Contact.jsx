import "./contact.css";
import ReactFooter from "../../components/react-footer/ReactFooter";

export default function Contact() {
  return (
    <div className="contact">
      <h1 className="h1">Send Your Content</h1>
      <section className="form">
        <form>      
          <input name="name" type="text" className="feedback-input" placeholder="Name" required />   
          <input name="email" type="text" className="feedback-input" placeholder="Subject" required />
          <input name="email" type="email" className="feedback-input" placeholder="Email" required />
          <textarea name="text" className="feedback-input" placeholder="Write Your Content/ Article/ Message" required></textarea>
          <input type="submit" value="SUBMIT"/>
        </form>
      </section>

      <br /><br /><br /><br /><br /><br />
      <ReactFooter />
    </div>
  )
}
