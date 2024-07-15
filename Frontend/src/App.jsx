import SmartCart from "./components/SmartCart"
import GreyWall from "./assets/GreyWall.jpg"
import Fruit from "./assets/fruit.png"
// https://i.pinimg.com/originals/f3/20/ee/f320eeb6a56143d7ef2879f4a77c3827.png
function App() {
  

  return (
    <>
      <SmartCart />
      <hr />
      <div className="flex justify-center space-x-8 my-6">
        <p className="font-bold">Home</p>
        <p className="font-bold">Shop</p>
        <p className="font-bold">News</p>
      </div>
      <div className="w-full h-1/2 bg-cover 
          bg-no-repeat flex justify-center items-center" 
          style={{ backgroundImage: `url(${GreyWall})` }}>
        <div className="flex-1 flex-col space-y-10 ml-28">
          <p className="text-6xl font-bold">Healthy Food & Organic Market</p>
          <p className="font-bold">All Natural Products</p>
          <button className="bg-lime-500 px-7 py-3 text-white rounded">Shop Now</button>
        </div>
        <div className="flex-1">
          <img className="w-full h-full" src={Fruit} alt="" />
        </div>
      </div>
    </>
  )
}

export default App
