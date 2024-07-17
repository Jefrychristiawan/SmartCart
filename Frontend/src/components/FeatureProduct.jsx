export default function FeatureProduct({image,category,title,price}) {
  return (
    <div className="flex flex-col items-center space-y-2">
        <div className="w-60 border border-gray-300 flex flex-col justify-center items-center py-6 gap-2">
            <img className="w-52 h-52 object-cover" src={image} alt="" />
            <span className="text-gray-500">{category}</span>
            <span className="font-bold">{title}</span>
            <span className="text-green-600 font-bold">{price}</span>
            <button className="bg-black text-white font-bold py-1 px-7 rounded">Add To Cart</button>
        </div>
            
    </div>
  )
}
