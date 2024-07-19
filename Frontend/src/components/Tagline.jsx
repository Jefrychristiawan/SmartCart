import { Link } from 'react-router-dom';
import GreyWall from "../assets/GreyWall.jpg"
import Fruit from "../assets/fruit.png"

export default function Tagline() {
  return (
    <div className="w-full h-1/2 bg-cover 
          bg-no-repeat flex justify-center items-center" 
          style={{ backgroundImage: `url(${GreyWall})` }}>
        <div className="flex-1 flex-col space-y-10 ml-28">
          <p className="text-6xl font-bold font-serif">Healthy Food & Organic Market</p>
          <p className="font-bold">All Natural Products</p><br />
          <Link to="/shop"><button className="bg-lime-500 px-7 py-3 text-white rounded">Shop Now</button></Link>
        </div>
        <div className="flex-1">
          <img className="w-full h-full" src={Fruit} alt="" />
        </div>
    </div>
  )
}
