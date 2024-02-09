
import { FaDownload } from "react-icons/fa";
import './about.scss'
import Image from "next/image";


const About = () => {
  return (
    <main className="section about_main">

      <section className="about">

        <h2 className="section_title">About <span>Me</span></h2>

        <div className="about_container grid">

          <div className="about_info">
            <h3 className="greetings ">Hi there !</h3>
            <div className="about_info_text flex-col gap-4 flex">
              <p>
                 I'm a frontend developer currently navigating the fascinating world of web development. As an undergraduate student, I'm on a journey of continuous learning and growth. My passion for coding and design has been a driving force in shaping my academic and professional path.
              </p>
              <p>
                In the realm of technology, I thrive on challenges and enjoy crafting user-friendly interfaces that seamlessly blend aesthetics with functionality. The dynamic nature of frontend development keeps me on my toes, and I embrace the opportunity to stay ahead of the curve in this ever-evolving field.
              </p>
              <p>
                Let's connect and explore the exciting possibilities that lie at the intersection of education and frontend development!
              </p>
            </div>
            <div className="justify-center py-4 flex">
              <a href={''} download={''} className="button">
                Downlaod CV
                <span className="button_icon"><FaDownload /></span>
              </a>
            </div>
          </div>

          <div className="professional_image">
            <Image src={'/images/freeprofile.jpg'} alt="map" width={500} height={500} />
          </div>

        </div>

      </section>

    </main>
  )
}

export default About