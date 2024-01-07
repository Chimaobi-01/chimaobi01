import { BsArrowRight } from 'react-icons/bs'
import style from './Projects.module.css'

const ProjectCard = ({ title, type, img }) => {
    return (
        <div className={style.grid_item}>
            <img 
                src={img}
                alt="project scrrenshot"
                className='w-full h-full object-cover rounded-lg'
                
            />
            <div className={style.screenshot_detail}>
                <p className={style.title}>{title}</p>
                <a href='#' className="text-lg font-normal leading-normal gap-2 items-center flex group">
                    <span className='underline'> {type} </span>
                    <BsArrowRight className='text-xl hidden group-hover:flex ' />
                </a>
            </div>
        </div>
    )
}

export default ProjectCard