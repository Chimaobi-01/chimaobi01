import PortfolioItem from '@/components/portfolioItem/PortfolioItem';
import { portfolio } from '@/utils/data';
import './project.scss';


const ProjectNew = () => {
    return (
      <section className="portfolio section">

        <h2 className='section_title'>My <span>Portfolio</span></h2>

        <div className="portfolio_container container grid">
          {
            portfolio.map(item => (
              <PortfolioItem key={item.id} {...item} />
            ))
          }
        </div>

      </section>
    )
  }
  
  export default ProjectNew