import { useState, useEffect } from "react"
import { useOrderContext } from "../hooks/useOrderContext"
import { useParams } from 'react-router-dom'
export default function ProductDetail() {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const { orders, dispatch } = useOrderContext()
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const fetchProduct = async () => {
            setIsLoading(true)
            const response = await fetch('http://localhost:4000/api/products/' + id)
            const json = await response.json()
            if (response.ok) {
                setProduct(json)
                setIsLoading(false)
            }
        }
        fetchProduct()
    },[])
    console.log(orders)
  return (
    <>
    {isLoading && 
        <div className="flex justify-center items-center fixed inset-0 bg-[rgba(0,0,0,0.5)] overflow-auto">
            <div className="bg-white w-32 h-20 flex justify-center items-center">Loading...</div>
        </div>}
    <div className="flex py-10 px-32">
        <div className="flex-1">
            <img src={product.image} alt="" className='object-cover w-80 h-80 rounded-2xl'/>
        </div>
        <div className="flex-1 flex flex-col gap-3">
            <span className="font-semibold text-xl">{product.name}</span>
            <span className='text-3xl font-extrabold'>${product.price}</span>
            <span>{product.description}</span>
            <span><span className='text-green-500 font-bold'>Stock: </span> {product.stock} </span>
            <button className='bg-black text-white font-bold p-5' onClick={() => { dispatch({type:'CREATE_ORDER', payload: {...product, quantity: 1} })}}>Add To Cart</button>
        </div>
    </div>
    </>
  )
}
