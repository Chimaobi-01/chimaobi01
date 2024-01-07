import { BsArrowRight } from 'react-icons/bs'
import style from './Projects.module.css'
import Link from 'next/link'

const ProjectCard = ({ title, type, img, url }) => {
    return (
        <Link href={`/project/${url}`} className='group'>
            <span className={style.grid_item}>
                <img 
                    src={img}
                    alt="project scrrenshot"
                    className='w-full h-full object-cover rounded-lg'
                    
                />
                <span className={style.screenshot_detail}>
                    <p className={style.title}>{title}</p>
                    <a href='#' className="text-lg font-normal leading-normal gap-2 items-center flex ">
                        <span className='underline'> {type} </span>
                        <BsArrowRight className='text-xl hidden group-hover:flex ' />
                    </a>
                </span>
            </span>
        </Link>
    )
}

export default ProjectCard