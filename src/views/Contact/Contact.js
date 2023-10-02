import "./Contact.css";
import Navbar from "./../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";

 export default function Contact()
{
    return (
        <div className="contact-container">
            <Navbar/>
            <h1>Contact</h1>
            <p>This is the contact page.You can put information about your company here.</p>
            <Footer/>
        </div>
    );
}