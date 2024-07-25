import { createContext, useReducer } from 'react';

export const OrdersContext = createContext();

export const ordersReducer = (state, action) => {
    switch (action.type) {
        case 'CREATE_ORDER': {
            const existingOrder = state.orders.find(order => order._id === action.payload._id);
            if (!existingOrder) {
                return {
                    orders: [action.payload, ...state.orders]
                };
            }
            return state;
        }
        case 'DELETE_ORDER':
            return {
                orders: state.orders.filter((w) => w._id !== action.payload._id)
            };
        default:
            return state;
    }
};

export const OrdersContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ordersReducer, {
        orders: []
    });

    return (
        <OrdersContext.Provider value={{ ...state, dispatch }}>
            {children}
        </OrdersContext.Provider>
    );
};