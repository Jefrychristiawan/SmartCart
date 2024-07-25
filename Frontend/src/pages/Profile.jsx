import { useEffect, useState } from "react"
import Apple from "../assets/Apple.jpg"
import AddProduct from "../components/AddProduct"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"


export default function Profile() {
    const [addPopUp, setAddPopUp] = useState(false)
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState(null)
    const { user } = useAuthContext()
    useEffect(() => {
        const fetchProducts = async () => {
        const response = await fetch('http://localhost:4000/api/products',{
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (response.ok) {
            setProducts(json)
            setLoading(false)
        }
        }
        if(user){
            fetchProducts()
        }
        
    }, [addPopUp, user])
    
    const handleDelete = async (id) => {
        if(!user){
            return
        }
        const response = await fetch('http://localhost:4000/api/products/' + id, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        })
        const json = await response.json()
    
        if (response.ok) {
          setProducts(products.filter(item => item._id !== id))
        }
    }
    // console.log(products)
    const handleEdit = async (id) => {
        
        const response = await fetch('http://localhost:4000/api/products/' + id)
        const json = await response.json()
        if (response.ok) {
            setProduct(json)
            setAddPopUp(true)
        }
        console.log(product)
    }

    const { logout } = useLogout()
    const handleClick = () => {
        logout()
    }
  return (
    <div className="flex m-10 gap-10">
        <div className="flex-1 flex flex-col items-center gap-4 border-2 border-gray-700 rounded-lg p-5">
            <img className="w-40 h-40 object-cover rounded-full" src={Apple} alt="" />
            <span className="font-extrabold text-2xl">{user?.username}</span>
            <span className="font-bold text-xl">${user?.balance}</span>
            <button className="bg-red-500 text-white px-5 py-3 rounded-lg" onClick={handleClick}> Logout </button>
            <button className="bg-green-500 text-white px-5 py-3 rounded-lg">Top Up</button>
            <div className="bg-gray-300 border border-gray-400 rounded-lg px-6 py-3 w-96">
                <span className="font-bold text-gray-500">Email</span><br />
                <span className="font-bold">{user?.email}</span>
            </div>
            
            <div className="flex gap-2">
                <button className="bg-red-500 text-white px-5 py-2">Change Password</button>
                <button className="bg-green-500 text-white px-5 py-2" onClick={() => setAddPopUp(true)}>Add Your Product</button>
            </div>
            
        </div>
        <div className="flex-2 w-full">
            {((!products || !products.length) && !loading) &&
                <div className="flex justify-center items-center h-full flex-col gap-20">
                    <span className="text-4xl text-center font-bold">Interested In Becoming Seller ?? Click Button Below to add Your Product Now</span>
                    <button className="bg-green-500 text-white px-10 py-5 rounded-lg text-xl" onClick={() => setAddPopUp(true)}>Add Your Product</button>
                </div>
            }
            {(products && products.length >0) && <span className="font-bold">List of Your Products</span>}
            
            <div className="flex flex-wrap">
            {
                products?.map((product) => {
                    return(
                        
                            <div key={product._id} className="flex flex-col items-center space-y-2">
                                <div className="w-56 border border-gray-300 flex flex-col justify-center items-center py-6 gap-2">
                                    <img className="w-40 h-40 object-cover" src={product.image} alt="" />
                                    <span className="text-gray-500">{product.category} </span>
                                    <span className="font-bold">{product.name}</span>
                                    <span className="text-green-600 font-bold">{product.price}</span>
                                    <div className="space-x-2">
                                        <button className="bg-green-500 text-white py-1 px-2" onClick={() => handleEdit(product._id)}>Edit</button>
                                        <button className="bg-red-500 text-white py-1 px-2" onClick={() => handleDelete(product._id)}>Delete</button>
                                    </div>
                                    
                                </div>
                                    
                            </div>
                        
                    )
                    
                })
                
            }
            </div>
        </div>
        {addPopUp && (
            <AddProduct product = {product} setAddPopUp={setAddPopUp}/>
        )}
    </div>
  )
}


