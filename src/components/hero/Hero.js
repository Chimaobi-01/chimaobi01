import Navbar from '../navbar/Navbar'
import style from  './Hero.module.css'
import { BsArrowRight } from 'react-icons/bs'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa'


const Hero = () => {
    return (
        <section className={style.hero}>
            <Navbar />
            <div>
                <span className='text-green-400 font-bold '>Hi, my name is </span>
                <h1 className={style.h1}>
                    Chimaobi Chinaka. <br />
                    <span>I build things for the web.</span>
                </h1>
                <p className='pb-16'>Hi there, my name is chimaobi chinaka and i'm a frontend developer based in Lagos, Nigeria</p>
                <button className={style.btn}>
                    See more about me
                    <BsArrowRight className='text-2xl ' />
                </button>
                <div className='flex gap-6 mt-4 text-slate-500'>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaLinkedinIn />
                    <FaGithub />
                </div>
            </div>
        </section>
    )
}

export default Hero