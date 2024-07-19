/* eslint-disable react/prop-types */

export default function Category({image, category}) {
  return (
    <div className="flex flex-col items-center space-y-2">
        <div className="w-52 h-52 border border-gray-400">
            <img className="w-52 h-52 object-cover" src={image} alt="" />
        </div>
        <span className="font-bold">{category}</span>
    </div>
  )
}
