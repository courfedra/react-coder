import { createContext,useState } from "react"

export const CartContext = createContext();

const CartContextProvider = ({children}) =>{
    //array del carrito
    const [cartList,setCartList]=useState([])
    const [totalPrice,setTotalPrice]=useState(0)
    const [precioFinal,setPrecioFinal]=useState(0)

    //funcion global, ver en el entregable
    const addToCart=(item,cantidad)=>{
        const itemRepetido=cartList.find(prod=>prod.id===item.id)
        const repetido=cartList.some(prod=>prod.id===item.id)

        if (repetido){
            itemRepetido.cantidad+=cantidad
            itemRepetido.comprado+=cantidad
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
                    stock:item.stock,
                    comprado:cantidad
                }
            ])
        }
    }

       //actualizo el carrito con los valores al aumentar  o disminuir la cantidad de cada item
    const actualizarCarritoCantidad=(id,valor)=>{
        console.log("actualizar carrito con el valor: "+valor)
        const itemParaActualizar=cartList.find(prod=>prod.id==id)
        if(valor===true){
            itemParaActualizar.comprado+=1
        }else{
            itemParaActualizar.comprado-=1
        }
        console.log("actualizado carrito en "+itemParaActualizar.comprado+" comprado y cantidad: "+itemParaActualizar.cantidad)
        setCartList(cartList)
    }

    //borra el item seleccionado y resta el subtotal obtenido al precio final en pantalla
    const deleteThis=(id)=>{
        const itemFind=cartList.find(item=>item.id==id)

        console.log(itemFind.precio+" el precio,"+itemFind.comprado+" lo comprado.")
        console.log((itemFind.precio*itemFind.comprado)+" deleteThis")

        const newCartList=cartList.filter(item=>item.id!==id)

        //setPrecioFinal(precioFinal-(itemFind.precio*(itemFind.cantidad-1)))
        setCartList([...newCartList])

        console.log("---new cart list")
        console.log([...newCartList])
        console.log("---cart list")
        console.log([...cartList])

        showTotalAmount(itemFind.precio*(itemFind.comprado),false)

        console.log("borrado------------------------")
        console.log(itemFind.precio+" el precio,"+itemFind.comprado+" lo comprado.")
        console.log((itemFind.precio*itemFind.comprado)+" deleteThis")
        console.log("hago first precio---------")

    }

    //limpia el carrito y setea el precio final a 0
    const clearCart=()=>{
        setCartList([]);
        setPrecioFinal(0)
    }

    //toma el cartList, lo lee, realiza las sumas de los subtotales y lo muestra por primera vez
    const firstTotalPrice=()=>{
        let subTotalArray=cartList.map(item=>item.precio*item.cantidad)
        let subTotalNumbers=0
        subTotalArray.forEach(item=>subTotalNumbers=item+subTotalNumbers)
        setPrecioFinal(subTotalNumbers)
        console.log(cartList)
        //cantida a aumentar en el contador de precio total
    }

    //toma el precio y el valor de si es suma o resta y edita el precio final
    const showTotalAmount=(precio,sumRes)=>{
        sumRes
        ?setPrecioFinal(precioFinal+precio)
        :setPrecioFinal(precioFinal-precio);

}

    return(
        <CartContext.Provider  value={{
                                        cartList,
                                        addToCart,
                                        deleteThis,
                                        clearCart,
                                        totalPrice,
                                        firstTotalPrice,
                                        precioFinal,
                                        showTotalAmount,
                                        actualizarCarritoCantidad
                                        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider