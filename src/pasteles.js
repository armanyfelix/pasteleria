import Filters from './components/Filters';
import CakeCard from './components/CakeCard';

function Pasteles() {
  return (
    <div className="mx-20 lg:mx-40 mt-14">
      <Filters />
      <div className='bg-container pt-10 px-10'>
        <CakeCard />
      </div>
    </div>
  )
}

export default Pasteles
