import SmartCart from "./components/SmartCart"
import Navbar from "./components/Navbar"
import Tagline from "./components/Tagline"
import { RocketLaunchOutlined, HistoryOutlined, CreditScoreOutlined, QuestionAnswerOutlined } from "@mui/icons-material"
import FeatureItem from "./components/FeatureItem"
import Category from "./components/Category"
import Fruits from "./assets/Fruits.png"
import Vegetables from "./assets/Vegetables.png"
import Snacks from "./assets/Snacks.png"
import Spices from "./assets/Spices.png"
import Drinks from "./assets/Drinks.png"
// https://i.pinimg.com/originals/f3/20/ee/f320eeb6a56143d7ef2879f4a77c3827.png
function App() {
  const features = [
    { Icon: RocketLaunchOutlined, title: "FREE DELIVERY", description: "For All Orders Over $100" },
    { Icon: HistoryOutlined, title: "90 DAYS RETURN", description: "If Goods Have Problems" },
    { Icon: CreditScoreOutlined, title: "SECURE PAYMENT", description: "100% Secure Payment" },
    { Icon: QuestionAnswerOutlined, title: "24/7 SUPPORT", description: "Dedicated Support" },
  ];

  const productCategories = [
    { image: Fruits, category: "Fruits"},
    { image: Vegetables, category: "Vegetables"},
    { image: Snacks, category: "Snacks"},
    { image: Spices, category: "Spices"},
    { image: Drinks, category: "Drinks"}
  ]
  return (
    <>
      <SmartCart />
      <hr />
      <Navbar />
      <Tagline />
      <div className="flex justify-around my-14">
        {features.map((feature, index) => (
          <FeatureItem 
            key={index}
            Icon={feature.Icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
      <hr />
      <div className="my-14">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-center font-bold font-serif text-4xl">Shop By Category</span>
          <span className="text-gray-500">Visit our shop to see amazing products</span>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-14">
          {productCategories.map((item,index) =>{
            return(
              <Category key={index} image={item.image} category={item.category}/>
            )
          })}
          
        </div>
      </div>
      <hr />
    </>
  )
}

export default App
