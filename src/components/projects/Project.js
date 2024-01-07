import ProjectCard from './ProjectCard'
import style from './Projects.module.css'

const Project = () => {
  const projectList = [
    {
      id: 1,
      title: "My UI design book",
      type: "Book",
      img: "/images/learn-to-code.png"
    },
    {
      id: 2,
      title: "Creating a lean design system",
      type: "Design system",
      img: "/images/project-image-2.jpg"
    },
    {
      id: 3,
      title: "Interior design news feed",
      type: "Side project",
      img: "/images/project-image-3.jpg"
    },
  ]

  return (
    <section className='min-h-screen px-32 py-16 container mx-auto'>
      <h2 className={style.heading}>
        <hr className={style.hr} />
        some of my latest work
        <hr className={style.hr} />
      </h2>
      <div className={style.project_grid}>
        {

          projectList.map(n => {
            return (
              < ProjectCard 
                key={n.id} 
                title={n.title}  
                type={n.type} 
                img={n.img}
                url={n.title.trim().toLowerCase().split(" ").join("-")}
              />
            )
          }
          )
        }
      </div>
    </section>
  )
}

export default Project