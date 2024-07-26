import { useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { useOrderContext } from '../hooks/useOrderContext'

export default function Cart() {
    const { orders, dispatch } = useOrderContext()
    const { user } = useAuthContext()
    const [error, setError] = useState('')
    const handleIncrement = (id) => {
        dispatch({ type: 'INCREMENT_QUANTITY', payload: { _id: id } })
    }
    const handleDecrement = (id) => {
        dispatch({ type: 'DECREMENT_QUANTITY', payload: { _id: id } })
    }
    const handleDelete = (id) => {
        dispatch({type: 'DELETE_ORDER', payload: { _id: id }})
    }

    const handleSubmit = async () => {
        
        if(!user){
            setError('You must be logged in')
            console.log(error)
            return
        }
        const listOrder = {
            email: user.email,
            products: orders

        }
        const response = await fetch('http://localhost:4000/api/order', {
            method: 'POST',
            body: JSON.stringify(listOrder),
            headers: {
              'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
    
        if (!response.ok) {
          setError(json.error)
        }
        if(response.ok){
            setError('')
        }
    }
    return (
        <div className="flex flex-col items-center">
            {orders.map((order) => {
                return (
                    <div key={order._id} className="flex rounded-xl border border-green-500 p-10 gap-5 w-96 mb-5">
                        <div>
                            <img className='w-32 h-32 object-cover' src={order.image} alt="" />
                        </div>
                        <div>
                            <span className='text-xl font-bold'>{order.name}</span><br />
                            <span><span className='font-bold'>Price for Each: </span>{order.price}</span><br />
                            <span><span className='font-bold'>Stock: </span>{order.stock}</span><br />
                            <button onClick={() => handleDecrement(order._id)} className='bg-gray-300 px-4 py-1 text-2xl font-bold'>-</button>
                            <span className='mx-4'>{order.quantity}</span>
                            <button onClick={() => handleIncrement(order._id)} className='bg-gray-300 px-4 py-1 text-2xl font-bold'>+</button>
                            <br />
                            <button onClick={() => handleDelete(order._id)} className='bg-red-500 text-white py-2 px-4 my-2'>Delete Order</button>
                        </div>
                    </div>
                )
            })}
            {(orders.length > 0) &&<button onClick={handleSubmit} className='bg-green-500 px-5 py-2 font-bold text-white'>Complete Order</button>}
        </div>
    )
}