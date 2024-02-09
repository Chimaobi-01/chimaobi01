import profile from '@/assets/home.jpg'
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import Image from 'next/image';
import './home.scss'


const Home = () => {
  return (
    <section className="home">
      {/* 
      <Image
        src={profile}
        alt="image not showing"
        className="home_img"
        width={'auto'}
        height={'auto'}
      />
*/}

      <div className='home_data'>
        <span className=' font-bold greet'>Hi, my name is </span>
        <h1 className="font-extrabold h1 leading-8 text-slate-400 flex flex-col gap-4 pt-8 max-[425px]:pt-4 tracking-[1px]">
          <span>Chimaobi Chinaka.</span>
          <span className='text-slate-800 leading-10'>I build things for the web.</span>
        </h1>
        <p className='py-5 intro'>
          Hi there, my name is chimaobi chinaka and i'm a frontend developer based in Lagos, Nigeria
        </p>
        <Link href={'/project'} className="button ">
          <span className="font-['Poiret_One'] font-extrabold">See my latest projects</span>
          <BsArrowRight className='button_icon' />
        </Link>
        <div className='flex gap-4 text-slate-500 max-[425px]:justify-center'>
          <FaFacebookF className='social_icon' />
          <FaTwitter className='social_icon' />
          <FaLinkedinIn className='social_icon' />
          <FaGithub className='social_icon' />
        </div>
      </div>

      <div className="color_block"></div>

    </section>
  )
}

export default Home