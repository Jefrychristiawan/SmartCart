import { OrdersContext } from "../context/OrderContext"
import { useContext } from "react"

export const useOrderContext = () => {
  const context = useContext(OrdersContext)

  if(!context) {
    throw Error('useOrderContext must be used inside an OrderContextProvider')
  }

  return context
}