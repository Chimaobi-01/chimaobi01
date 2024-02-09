import {
  FaEnvelopeOpen,
  FaDribbble,
  FaFacebookF,
  FaPhoneSquareAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import './contact.scss';
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";



const ContactNew = () => {
  return (
    <section className="contact section">
      <h2 className="section_title">
        Get in <span>Touch</span>
      </h2>

      <div className="contact_container container grid">

        <div className="contact_formdata">
          <div className="outside_form">
            <h3>Contact us</h3>
            <p>Reach out to us for any inquiries</p>
          </div>

          <form className="formdata_form">
            <input type="text" placeholder="Full name" />
            <input type="email" placeholder="Your email" />
            <textarea placeholder="Message"></textarea>
            <input type="submit" value="submit" />
          </form>
        </div>

        <div className="map_image">
          <Image src={'/images/map.png'} alt="map" width={500} height={500} />
        </div>

      </div>

      <div className="reach_out_to_info container grid">

        {
          contactDetails.map(item => (
            <div key={item.id} className=" info_item">
              {item.icon}
              <div className="wrapper">
                <span className="info_title">{item.title}: </span>
                <span className="info_desc">{item.desc}</span>
              </div>
            </div>
          ))
        }

      </div>

    </section>
  );
};

export default ContactNew;


const contactDetails = [
  {
    id: 1,
    icon: <FaLocationDot />,
    title: "Location",
    desc: "Lagos mainland, Lagos Nigeria"
  },
  {
    id: 2,
    icon: <FaEnvelopeOpen />,
    title: "Email",
    desc: "chimaobi01@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneSquareAlt />,
    title: "Phone",
    desc: "+234903 956 1136"
  },
]