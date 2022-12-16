import { createContext,useState } from "react"

export const CartContext = createContext();

const CartContextProvider = ({children}) =>{
    //array del carrito
    const [cartList,setCartList]=useState([])

    //funcion global, ver en el entregable
    const addToCart=(item,cantidad)=>{
        const itemRepetido=cartList.find(prod=>prod.id===item.id)
        const repetido=cartList.some(prod=>prod.id===item.id)

        if (repetido){

            console.log("Repetido")

            const indice = cartList.indexOf(itemRepetido)

            console.log(cartList[indice].cantidad)
        }else{
            setCartList([




                ...cartList,
                {
                    id:item.id,
                    nombre:item.nombre,
                    foto:item.foto,
                    precio:item.precio,
                    cantidad:cantidad
                }
            ])
        }
    }
    const deleteThis=(id)=>{
        const newCartList=cartList.filter(item=>item.id!==id)
        setCartList(newCartList)
    }
    return(
        <CartContext.Provider  value={{cartList, addToCart,deleteThis}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider