import { createContext,useState } from "react"
import Swal from "sweetalert2"
import {ToastContainer, toast} from "react-toastify"

export const CartContext = createContext();

const CartContextProvider = ({children}) =>{
    //array del carrito
    const [cartList,setCartList]=useState([])
    const [precioFinal,setPrecioFinal]=useState(0)

    //notify Toastify
    const notifyDeleteSuccess = () => toast("Borrado exitosamente");

    //funcion global, ver en el entregable
    const addToCart=(item,cantidad)=>{
        const itemRepetido=cartList.find(prod=>prod.id===item.id)
        const repetido=cartList.some(prod=>prod.id===item.id)

        if (repetido){
            itemRepetido.cantidad+=cantidad
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
                    stock:item.stock,
                    stockCart:item.stock
                }
            ])
        }
    }


    //borra el item seleccionado y resta el subtotal obtenido al precio final en pantalla
    const deleteThis=(id,cantidad)=>{
        Swal.fire({
            title: '¿Seguro que desea eliminar este producto?',
            text: "Modificaras tu carrito de manera irreversible",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#008f39',
            cancelButtonColor: '#f90000',
            confirmButtonText: '¡Si, quiero hacerlo!',
            cancelButtonText: '¡No!, quiero mi Navidad',
        }).then((result) => {
            if (result.isConfirmed) {
                //notify Success
                notifyDeleteSuccess();
                const itemFind=cartList.find(item=>item.id==id)
                const newCartList=cartList.filter(item=>item.id!==id)
                //setPrecioFinal(precioFinal-(itemFind.precio*(itemFind.cantidad-1)))
                setCartList(newCartList)
                showTotalAmount(itemFind.precio*(cantidad),false)
            }
            <ToastContainer/>
        });
    }

    //actualizo la cantidad de items agregados dentro del carrito
    const actualizarCantidadCarrito=(id, cant,sumRes)=>{
        const itemFind=cartList.find(item=>item.id==id)
        itemFind.cantidad=cant

        sumRes==true
        ?itemFind.stockCart-=1
        :itemFind.stockCart+=1

        setCartList([...cartList])

    }


    //limpia el carrito y setea el precio final a 0
    const clearCart=(compra)=>{
        if (compra){
            setCartList([]);
            setPrecioFinal(0)
        }else{
            Swal.fire({
                title: '¿Seguro que desea eliminar todo el carrito?',
                text: "Modificaras tu carrito de manera irreversible",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#008f39',
                cancelButtonColor: '#f90000',
                confirmButtonText: '¡Si, quiero hacerlo!',
                cancelButtonText: '¡No!, quiero mi Navidad',
                }).then((result) => {
                    if (result.isConfirmed) {
                        setCartList([]);
                        setPrecioFinal(0);
                        //notify Success
                        notifyDeleteSuccess();
                    }
            });
        };
    }

    //toma el cartList, lo lee, realiza las sumas de los subtotales y lo muestra por primera vez
    const firstTotalPrice=()=>{
        let subTotalArray=cartList.map(item=>item.precio*item.cantidad)
        let subTotalNumbers=0
        subTotalArray.forEach(item=>subTotalNumbers=item+subTotalNumbers)
        setPrecioFinal(subTotalNumbers)
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
                                        firstTotalPrice,
                                        precioFinal,
                                        showTotalAmount,
                                        actualizarCantidadCarrito,
                                        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider