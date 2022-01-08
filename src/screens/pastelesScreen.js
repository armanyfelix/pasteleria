import Filters from '../components/Filters';
import CakeCard from '../components/CakeCard';
import { useRecoilState, useRecoilStateLoadable } from "recoil";
import { pastelesState, allPastelesState } from '../atoms/pastelesAtom';
function Pasteles() {

  const [pasteles, setPasteles] = useRecoilStateLoadable(allPastelesState);

  return (
    <div className="mx-20 lg:mx-36 mt-12">
      <Filters />
      <div className='bg-container pt-10 pb-10 px-24'>
        {
          pasteles.state === 'loading' ? (
            <div className="text-center">
              <div className="" role="status">
                <span className="font-bold text-xl fotn-mono ">Loading...</span>
              </div>
            </div>
          ) : (
            pasteles.contents.map((pastel) => (
              <CakeCard key={pastel.id} 
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

export default Pasteles
