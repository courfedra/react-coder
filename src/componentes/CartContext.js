import { createContext,useState } from "react"

export const CartContext = createContext();

const CartContextProvider = ({children}) =>{
    //array del carrito
    const [cartList,setCartList]=useState([])
    const [totalPrice,setTotalPrice]=useState(0)
    const [precioFinal,setPrecioFinal]=useState(0)
    const [cantProd,setCantProd]=useState(0)
    //funcion global, ver en el entregable
    const addToCart=(item,cantidad)=>{
        const itemRepetido=cartList.find(prod=>prod.id===item.id)
        const repetido=cartList.some(prod=>prod.id===item.id)

        if (repetido){
            itemRepetido.cantidad+=cantidad
            setCartList([...cartList])
        }else{
            setCartList([
                ...cartList,
                {
                    id:item.id,
                    nombre:item.nombre,
                    foto:item.foto,
                    precio:item.precio,
                    cantidad:cantidad,
                    stock:item.stock
                }
            ])
        }
    }

    const cantProdActualizado=(cant)=>{
        setCantProd(cant)
    }

    const deleteThis=(id)=>{
        const itemFind=cartList.find(item=>item.id==id)
        console.log(itemFind.precio+" el precio,"+itemFind.cantidad+" la cantidad.")
        console.log((itemFind.precio*cantProd)+" deleteThis")
        const newCartList=cartList.filter(item=>item.id!==id)
        //setPrecioFinal(precioFinal-(itemFind.precio*(itemFind.cantidad-1)))
        setCartList(newCartList)
        showTotalAmount(itemFind.precio*(itemFind.cantidad-1),false)

    }

    const clearCart=()=>{
        setCartList([]);
        setPrecioFinal(0)
    }

    const caramelo=()=>{
        let subTotalArray=cartList.map(item=>item.precio*item.cantidad)
        console.log(subTotalArray+" subArray caramelo")
        let subTotalNumbers=0
        subTotalArray.forEach(item=>subTotalNumbers=item+subTotalNumbers)
        setPrecioFinal(subTotalNumbers)
        console.log(subTotalNumbers+" subNumber caramelo")
        //cantida a aumentar en el contador de precio total
    }

    const showTotalAmount=(precio,sumRes)=>{

        sumRes
        ?setPrecioFinal(precioFinal+precio)
        :setPrecioFinal(precioFinal-precio);

        console.log(precioFinal+" precioFinal showtotalamount")

}

    return(
        <CartContext.Provider  value={{
                                        cartList,
                                        addToCart,
                                        deleteThis,
                                        clearCart,
                                        totalPrice,
                                        caramelo,
                                        precioFinal,
                                        showTotalAmount,
                                        cantProd,
                                        cantProdActualizado
                                        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider