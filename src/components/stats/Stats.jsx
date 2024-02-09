import { stats } from '@/utils/data';
import parse from 'html-react-parser';


const Stats = () => {

  return (
    <>
      {
        stats.map(stat => (
          <div key={stat.id}>
            <h3>{stat.no}</h3>
            <p>{parse(stat.title)}</p>
          </div>
        ))
      }
    </>
  )
}

export default Stats