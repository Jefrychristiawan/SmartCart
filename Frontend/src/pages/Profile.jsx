import { useState } from "react"
import Apple from "../assets/Apple.jpg"
import { CloseOutlined } from "@mui/icons-material"
export default function Profile() {
    const [addPopUp, setAddPopUp] = useState(false)
  return (
    <div className="flex m-10 gap-10">
        <div className="flex-1 flex flex-col items-center gap-4 border-2 border-gray-700 rounded-lg p-5">
            <img className="w-40 h-40 object-cover rounded-full" src={Apple} alt="" />
            <span className="font-extrabold text-2xl">Jefry Christiawan</span>
            <span className="font-bold text-xl">$10.00</span>
            <button className="bg-green-500 text-white px-5 py-3 rounded-lg">Top Up</button>
            <div className="bg-gray-300 border border-gray-400 rounded-lg px-6 py-3 w-96">
                <span className="font-bold text-gray-500">Email</span><br />
                <span className="font-bold">jefrychristiawan2005@gmail.com</span>
            </div>
            
            <div className="flex gap-2">
                <button className="bg-red-500 text-white px-5 py-2">Change Password</button>
                <button className="bg-green-500 text-white px-5 py-2" onClick={() => setAddPopUp(true)}>Add Your Product</button>
            </div>
            
        </div>
        <div className="flex-2 w-full">
            <div className="flex justify-center items-center h-full flex-col gap-20">
                <span className="text-4xl text-center font-bold">Interested In Becoming Seller ?? Click Button Below to add Your Product Now</span>
                <button className="bg-green-500 text-white px-10 py-5 rounded-lg text-xl" onClick={() => setAddPopUp(true)}>Add Your Product</button>
            </div>
        </div>
        {addPopUp && (
            <div className="flex justify-center fixed inset-0 bg-[rgba(0,0,0,0.5)] overflow-auto">
                <div className="bg-white flex flex-col w-[400px] p-10 gap-5 h-[1000px]">
                    <span className="ml-auto cursor-pointer" onClick={() => {setAddPopUp(false)}}>
                        <CloseOutlined sx={{color:"gray"}}></CloseOutlined>
                    </span>
                    <span className="font-bold text-2xl">Add New Product</span>
                    <label htmlFor="productName" className="block font-semibold">Product Name</label>
                    <input type="text" id="productName" placeholder="Enter Product Name" className="border border-gray-300 rounded-lg h-8 pl-5 focus:outline-none"/>
                    <label htmlFor="productDescription" className="block font-semibold">Product Description</label>
                    <textarea id="productDescription" placeholder="Enter Product Description" className="border border-gray-300 rounded-lg pl-5 focus:outline-none resize-none "/>
                    <label htmlFor="productPrice" className="block font-semibold">Price ($)</label>
                    <input type="number" id="productPrice" placeholder="Enter Price" className="border border-gray-300 rounded-lg h-8 pl-5 focus:outline-none"/>
                    <label htmlFor="productStock" className="block font-semibold">Stock</label>
                    <input type="number" id="productStock" placeholder="Enter Stock" className="border border-gray-300 rounded-lg h-8 pl-5 focus:outline-none"/>
                    
                    <div className="font-bold">Category</div>
                    {['Fruits', 'Vegetables', 'Snacks', 'Spices', 'Drinks'].map(category => (
                        <label key={category} className="flex items-center cursor-pointer">
                            <input type="checkbox" className="hidden peer" />
                            <span className="w-5 h-5 border-2 mr-2 rounded border-green-500 peer-checked:bg-green-500 peer-checked:text-transparent peer-checked:border-transparent flex items-center justify-center">
                                <svg className="w-3 h-3 text-white stroke-2" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                                    <path d="M6 10l4 4L18 6"></path>
                                </svg>
                            </span>
                            {category}
                        </label>
                    ))}
                    
                    <label className="block font-semibold">Upload Product Picture</label>
                    <input type="file" name="" id="productImage" />
                    <button className="bg-green-500 text-white font-bold px-6 py-3">Add Product</button>
                </div>
            </div>
        )}
    </div>
  )
}
