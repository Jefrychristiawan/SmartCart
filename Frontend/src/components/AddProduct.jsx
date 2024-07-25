/* eslint-disable react/prop-types */
import { useState } from "react"
import { CloseOutlined } from "@mui/icons-material"
import { useAuthContext } from "../hooks/useAuthContext"
export default function AddProduct({product, setAddPopUp}) {
    const [productId, setProductId] = useState(product? product._id:null)
    const [productName, setProductName]  = useState(product?.name)
    const [productDesc, setProductDesc] = useState(product?.description)
    const [productStock, setProductStock] = useState(product?.stock)
    const [productPrice, setProductPrice] = useState(product?.price)
    const [productCategory, setProductCategory] = useState(product? product.category.split(','): [])
    const [productImage, setProductImage] = useState(product?.image)
    const [error,setError] = useState(null)
    const { user } = useAuthContext()
    const handleCheckboxChange = (category) => {
        setProductCategory(prevState =>
          prevState.includes(category)
            ? prevState.filter(item => item !== category)
            : [...prevState, category]
        );
    };
    // console.log(productId)
    const handleSubmit = async () => {
      if(!user){
        setError('You must be logged in')
        console.log(error)
        return
      }

      if(!productId){
        const product = {
          name: productName,
          description: productDesc,
          price: productPrice,
          category: productCategory.join(','),
          image: productImage,
          stock: productStock
        }
      
        const response = await fetch('http://localhost:4000/api/products', {
          method: 'POST',
          body: JSON.stringify(product),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
          }
        })
        const json = await response.json()
    
        if (!response.ok) {
          setError(json.error)
        }
        if (response.ok) {
          setError(null)
          setProductName('')
          setProductDesc('')
          setProductStock(null)
          setProductPrice(null)
          setProductCategory([])
          setProductImage('')
          setAddPopUp(false)
          
        }
      }
      else{
        const product = {
          name: productName,
          description: productDesc,
          price: productPrice,
          category: productCategory.join(','),
          image: productImage,
          stock: productStock
        }
      
        const response = await fetch('http://localhost:4000/api/products/' + productId, {
          method: 'PATCH',
          body: JSON.stringify(product),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
          }
        })
        const json = await response.json()
    
        if (!response.ok) {
          setError(json.error)
        }
        if (response.ok) {
          setError(null)
          setProductId(null)
          setProductName('')
          setProductDesc('')
          setProductStock(null)
          setProductPrice(null)
          setProductCategory([])
          setProductImage('')
          setAddPopUp(false)
          
        }
      }
    
    }
    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        console.log(base64)
        setProductImage(base64)
    }
  return (
    <div className="flex justify-center fixed inset-0 bg-[rgba(0,0,0,0.5)] overflow-auto">
        <div className="bg-white flex flex-col w-[400px] p-10 gap-5 h-[1000px]">
            <span className="ml-auto cursor-pointer" onClick={() => {setAddPopUp(false)}}>
                <CloseOutlined sx={{color:"gray"}}></CloseOutlined>
            </span>
            <span className="font-bold text-2xl">Add New Product</span>
            <label htmlFor="productName" className="block font-semibold">Product Name</label>
            <input type="text" id="productName" placeholder="Enter Product Name" 
                className="border border-gray-300 rounded-lg h-8 pl-5 focus:outline-none"
                onChange={(e) => {setProductName(e.target.value)}}
                value={productName}
            />
            <label htmlFor="productDescription" className="block font-semibold">Product Description</label>
            <textarea id="productDescription" placeholder="Enter Product Description" 
                className="border border-gray-300 rounded-lg pl-5 focus:outline-none resize-none "
                onChange={(e) => {setProductDesc(e.target.value)}}
                value={productDesc}
            />
            <label htmlFor="productPrice" className="block font-semibold">Price ($)</label>
            <input type="number" id="productPrice" placeholder="Enter Price" 
                className="border border-gray-300 rounded-lg h-8 pl-5 focus:outline-none"
                onChange={(e) => {setProductPrice(e.target.value)}}
                value={productPrice}
            />
            <label htmlFor="productStock" className="block font-semibold">Stock</label>
            <input type="number" id="productStock" placeholder="Enter Stock" 
                className="border border-gray-300 rounded-lg h-8 pl-5 focus:outline-none"
                onChange={(e) => {setProductStock(e.target.value)}}
                value={productStock}
            />
            <div className="font-semibold">Category</div>
            {['Fruits', 'Vegetables', 'Snacks', 'Spices', 'Drinks'].map(category => (
                <label key={category} className="flex items-center cursor-pointer">
                    <input type="checkbox" className="hidden peer" 
                        checked={productCategory.includes(category)}
                        onChange={() => handleCheckboxChange(category)}
                    />
                    <span className="w-5 h-5 border-2 mr-2 rounded border-green-500 peer-checked:bg-green-500 peer-checked:text-transparent peer-checked:border-transparent flex items-center justify-center">
                        <svg className="w-3 h-3 text-white stroke-2" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                            <path d="M6 10l4 4L18 6"></path>
                        </svg>
                    </span>
                    {category}
                </label>
            ))}
                    
            <label className="block font-semibold">Upload {product? 'New' :''} Product Picture</label>
            <input type="file" name="" id="productImage" accept='.jpeg, .png, .jpg' onChange={(e) => handleFileUpload(e)}/>
            <button className="bg-green-500 text-white font-bold px-6 py-3" onClick={handleSubmit}>{product? 'Save Changes Product' : 'Add Product'}</button>
        </div>
    </div>
  )
}

function convertToBase64(file){
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result)
      };
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
}
