import travelpal from '../images/travelpal-logo.png';

const AnimatedLoader = ({message=""}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mx-auto space-y-10">
      <div className="flex flex-col items-center justify-center h-full">
      <img alt='Travelpal logo' src={travelpal} />
      <span className="text-sm text-center">{message}</span>
      </div>
    </div>
  )
}

export default AnimatedLoader;