import Tagline from "../components/Tagline"
import { RocketLaunchOutlined, HistoryOutlined, CreditScoreOutlined, QuestionAnswerOutlined } from "@mui/icons-material"
import FeatureItem from "../components/FeatureItem"
import Category from "../components/Category"
import Fruits from "../assets/Fruits.png"
import Vegetables from "../assets/Vegetables.png"
import Snacks from "../assets/Snacks.png"
import Spices from "../assets/Spices.png"
import Drinks from "../assets/Drinks.png"
import Apple from "../assets/Apple.jpg"
import Carrot from "../assets/Carrot.jpg"
import Organic from "../assets/Organic.png"
import FeatureProduct from "../components/FeatureProduct"
import Meal from "../assets/Meal.jpg"
export default function Home() {
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
            <div className="flex flex-col items-center space-y-4">
              <span className="text-center font-bold font-serif text-4xl">Shop By Category</span>
              <span className="text-gray-500">Visit our shop to see amazing products</span>
              <hr className="w-32 bg-black h-1 " />
            </div>
            <div className="flex flex-wrap justify-center gap-8 mt-14">
              {productCategories.map((item,index) =>{
                return(
                  <Category key={index} image={item.image} category={item.category}/>
                )
              })}
              
            </div>
          </div>
          <div className="flex justify-center gap-10">
              <div className="w-[600px] h-[300px] bg-gray-200 flex items-center">
                <div className="flex-1 ml-12 space-y-3">
                  <span className="font-serif font-bold text-xl">Tasty Healthy</span> <br />
                  <span className="font-serif font-bold text-orange-700 text-4xl">Organic Food</span><br />
                  <button className="bg-green-500 text-white font-bold px-2 rounded"> SALE UP TO -15%</button><br /><br />
                  <span className="font-bold underline">Shop Now!</span>
                </div>
                <img className="w-[250px] h-full object-cover flex-1" src={Organic} alt="" />
              </div>
              <div className="w-[600px] h-[300px] bg-green-500 flex items-center">
                <div className="flex-1 ml-12 space-y-3">
                  <div className="bg-red-500 inline-flex text-white font-bold px-2">
                    <div className="inline-flex items-center">
                      <span className="text-4xl ">20</span>
                    </div>
                    <div className="inline-flex flex-col">
                      <span className="text-5sm">%</span>
                      <span className="text-5sm">OFF</span>
                    </div>
                  </div><br />
                  
                  <span className="font-serif font-bold text-white text-4xl">Breakfast & Lunch</span><br />
                  <br />
                  <span className="font-bold underline">Shop Now!</span>
                </div>
                <img className="w-[250px] h-full object-cover flex-1" src={Meal} alt="" />
              </div>
          </div>
          <div className="my-14">
            <div className="flex flex-col items-center space-y-4">
              <span className="text-center font-bold font-serif text-4xl">Featured Products</span>
              <span className="text-gray-500">Visit our shop to see amazing products</span>
              <hr className="w-32 bg-black h-1 " />
            </div>
            <div className="flex flex-wrap justify-center mt-14">
              <FeatureProduct image={Apple} category="Fruits" title="Blue Apple" price="$100.67"/>
              <FeatureProduct image={Carrot} category="Vegetables" title="Carrot" price="$10.23"/>
              <FeatureProduct image={Apple} category="Fruits" title="Blue Apple" price="$100.67"/>
              <FeatureProduct image={Carrot} category="Vegetables" title="Carrot" price="$10.23"/>
              <FeatureProduct image={Apple} category="Fruits" title="Blue Apple" price="$100.67"/>
              <FeatureProduct image={Carrot} category="Vegetables" title="Carrot" price="$10.23"/>
              <FeatureProduct image={Apple} category="Fruits" title="Blue Apple" price="$100.67"/>
              <FeatureProduct image={Carrot} category="Vegetables" title="Carrot" price="$10.23"/>
              <FeatureProduct image={Apple} category="Fruits" title="Blue Apple" price="$100.67"/>
              <FeatureProduct image={Carrot} category="Vegetables" title="Carrot" price="$10.23"/>
            </div>
            
          </div>
        </>
      )
}
