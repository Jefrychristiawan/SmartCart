import FeatureProduct from "../components/FeatureProduct"
import Apple from "../assets/Apple.jpg"
import Carrot from "../assets/Carrot.jpg"
export default function Shop() {
  return (
    <div className="flex m-10">
        <div className='flex flex-col flex-1 space-y-2'>
            <span className="font-bold text-xl">
                Filter
            </span>
            <div className='border border-gray-300 pl-5 space-y-3 p-5'>
                <div className='font-bold'>
                    Category
                </div>
                <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="hidden peer" />
                    <span className="w-5 h-5 border-2 mr-2 rounded border-green-500 peer-checked:bg-green-500 peer-checked:text-transparent peer-checked:border-transparent flex items-center justify-center">
                        <svg className="w-3 h-3 text-white stroke-2" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                            <path d="M6 10l4 4L18 6"></path>
                        </svg>
                    </span>
                    Fruits
                </label>
                <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="hidden peer" />
                    <span className="w-5 h-5 border-2 mr-2 rounded border-green-500 peer-checked:bg-green-500 peer-checked:text-transparent peer-checked:border-transparent flex items-center justify-center">
                        <svg className="w-3 h-3 text-white stroke-2" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                            <path d="M6 10l4 4L18 6"></path>
                        </svg>
                    </span>
                    Vegetables
                </label>
                <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="hidden peer" />
                    <span className="w-5 h-5 border-2 mr-2 rounded border-green-500 peer-checked:bg-green-500 peer-checked:text-transparent peer-checked:border-transparent flex items-center justify-center">
                        <svg className="w-3 h-3 text-white stroke-2" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                            <path d="M6 10l4 4L18 6"></path>
                        </svg>
                    </span>
                    Snacks
                </label>
                <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="hidden peer" />
                    <span className="w-5 h-5 border-2 mr-2 rounded border-green-500 peer-checked:bg-green-500 peer-checked:text-transparent peer-checked:border-transparent flex items-center justify-center">
                        <svg className="w-3 h-3 text-white stroke-2" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                            <path d="M6 10l4 4L18 6"></path>
                        </svg>
                    </span>
                    Spices
                </label>
                <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="hidden peer" />
                    <span className="w-5 h-5 border-2 mr-2 rounded border-green-500 peer-checked:bg-green-500 peer-checked:text-transparent peer-checked:border-transparent flex items-center justify-center">
                        <svg className="w-3 h-3 text-white stroke-2" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                            <path d="M6 10l4 4L18 6"></path>
                        </svg>
                    </span>
                    Drinks
                </label>
                <div className='font-bold'>
                    Price
                </div>
                <div className="w-64">
                    
                    <div className="flex items-center">
                        <span className="inline-block px-3 py-2 bg-gray-200 text-gray-700 rounded-l-md">$</span>
                        <input type="text" id="harga-minimum" placeholder="Minimum Price" className="block w-full px-3 py-2 text-gray-700 border rounded-r-md focus:outline-none focus:ring-1 focus:ring-green-500" />
                    </div>
                </div>
                <div className="w-64 mt-4">
                    
                    <div className="flex items-center">
                        <span className="inline-block px-3 py-2 bg-gray-200 text-gray-700 rounded-l-md">$</span>
                        <input type="text" id="harga-maksimum" placeholder="Maximum Price" className="block w-full px-3 py-2 text-gray-700 border rounded-r-md focus:outline-none focus:ring-1 focus:ring-green-500" />
                    </div>
                </div>
            </div>
        </div>
        <div className='flex-3'>
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
    </div>
  )
}
