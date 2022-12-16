import { createContext,useState } from "react"

export const CartContext = createContext();

const CartContextProvider = ({children}) =>{
    //array del carrito
    const [cartList,setCartList]=useState([])
    //funcion global, ver en el entregable
    const addToCart=(item)=>{
        setCartList([
            ...cartList,
            item
        ])
    }
    return(
        <CartContext.Provider  value={{cartList, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider