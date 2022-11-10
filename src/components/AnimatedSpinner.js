import travelpal from '../images/travelpal-logo.png';

const AnimatedSpinner = () => {
  return (
    <div className="absolute top-0 left-0 z-50 block w-full h-full bg-white opacity-75">
      <div className="relative flex justify-center top-1/2">
        <img alt='Travelpal logo' src={travelpal} />
      </div>
    </div>
  )
}

export default AnimatedSpinner;