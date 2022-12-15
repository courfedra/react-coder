import { createContext,useState } from "react"

export const CartContext = createContext();

const CartContextProvider = ({children}) =>{
    const [cartList,setCartList]=useState([ ])
    return(
        <CartContext.Provider  value={[cartList]}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider