// import Filters from '../components/Filters';
import CakeCard from '../components/CakeCard';
import { useRecoilStateLoadable, useRecoilValue } from "recoil";
import { filteredCakesState } from '../atoms/cakeAtom';
import { lazy } from 'react';

const Filters = lazy(() => import("../components/Filters"));


function Cakes() {

  const Cakes = useRecoilValue(filteredCakesState);


  return (
    <div className="mx-3 xl:mx-32 mt-12">
        <Filters />
      <div className="bg-container pt-10 pb-10 px-2 md:px-10 lg:px-24">
        {
          !Cakes.length ? (
            <div className="text-center" key={0}>
              <div>
                <span className="font-mono text-2xl text-purple-400 ">No hay resultados</span>
              </div>
            </div>
          ) : (
            Cakes.map((pastel) => (
              <CakeCard key={pastel._id}
                name={pastel.name}
                imageUrl={pastel.imageUrl}
                price={pastel.price}
                comboPrice={pastel.comboPrice}
                description={pastel.description}
                toppingType={pastel.toppingType}
                size={pastel.size}
              />
            ))
          )
        }
      </div>
    </div>
  )
}



export default Cakes
