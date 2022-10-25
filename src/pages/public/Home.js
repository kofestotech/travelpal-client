import Navbar from '../../components/Navbar';
import './Home.css';
import mohamedAjufaan from "../../images/mohamed-ajufaan.jpg";
import pierreDeguide from "../../images/pietro-de-grandi-guide.jpg";
import TheBund from "../../images/The-Bund.jpg";
import OperaHouse from "../../images/OperaHouse.jpg";
import kodaijiLight from "../../images/Kodaiji_Light.jpg";
import tsavoEast from "../../images/Tsavo-East-National-Park.jpg";
import maldives from '../../images/maldives.jpg'
import ourika from '../../images/ourika-from-marrakech.jpg'
import mongolia from '../../images/mongolia.jpg'

const Home = () => {
  return (
    <>
    <Navbar />
    <section className="pt-4">
      <div className="container mx-auto p-5 hero-img">
        <div>
          <h1 className="font-bold text-6xl text-indigo-900 text-center">Explore the world</h1>
          <p className="text-center font-bold text-3xl text-yellow-500 py-6">DISCOVER BEAUTIFUL PLACES WITH US</p>
          <div className="mx-auto rounded py-2">
            {/**Flight booking form component goes here ... */}
            <p className="text-violet-900">flight booking form component goes here</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="columns-2 mx-4">
          <div>
           <img className='img-fluid' alt='travel' src={mohamedAjufaan} style={{width:"100%"}} />
          </div>
          <div className="mt-5">
            <h1 className="font-bold text-5xl">A new way to explore the world</h1>
            <p className='mb-5'>
              For some time now, travellers have reached travelpal when looking to plan and execute their perfect trip, but now they can also let travelpal lead the way.
            </p>
            <button className='mt-2 explore-btn'>Learn more</button>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home;