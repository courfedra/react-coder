import { GrAdd,GrSubtract } from "react-icons/gr";
import {useState,useContext,useEffect} from "react"
import {CartContext} from '../componentes/CartContext'

import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

export const ProdCart = ({img,nombre,stock,cantidad,precio,id,firstTotalPrice,deleteThis})=>{

    const {showTotalAmount,cartList,actualizarCantidadCarrito}=useContext(CartContext)
    const [cantItem,setCantItem]=useState(cantidad)

//Toastify

const notifyMaxStock = () => toast("Alcanzaste el maximo stock!");
const notifyMinStock = () => toast("No puedes agregar menos cantidad!");



//PASAR TODO A LOCAL

    //actualizo el valor de la cantidad del item comprado
    const actualizarCantidadTotal = (cant)=>{
        setCantItem(cant)
    }

    //funcion para agregar si hay stock
    const addInCart=()=>{

        if(cantItem < stock){
            actualizarCantidadTotal(cantItem+1)
            showTotalAmount(precio,true);
            actualizarCantidadCarrito(id,cantItem+1,true)
        }else{
            notifyMaxStock();
        }
    }

    //funcion para restar si hay al menos 2 productos, no elimina el item, lo deja minimo=1
    const subInCart=()=>{

        if(cantItem>1){
            actualizarCantidadTotal(cantItem-1)
            showTotalAmount(precio,false);
            actualizarCantidadCarrito(id,cantItem-1,false)
        }else{
            notifyMinStock();
        }
    }

    //carga el precioTotal por primera vez
    useEffect(()=>{
        firstTotalPrice();
    },[])

    //renuevo el valor de cantidad y cantItem al eliminar un producto del array de cartList
    useEffect(()=>{
        setCantItem(cantidad)
    },[cartList])

    return(
            <>
            <div className="prodInCart">
                            <img src={img} alt={nombre}/>
                            <div className="prodInCartInfo">
                                <li key={id}>{nombre}</li>
                                <div className="addInCart">
                                    <button onClick={subInCart} className="btnSubInCart"><GrSubtract/></button>
                                    <li>Cantidad: {cantItem}</li>
                                    <button onClick={addInCart} className="btnAddInCart"><GrAdd/></button>
                                </div>
                                <li>Precio Unitario: ${precio}</li>
                                <li>Sub Total: ${cantItem*precio}</li>
                                <button className="btnDeleteThis" onClick={()=>{deleteThis(id,cantItem)}}>Eliminar producto</button>
                                <ToastContainer/>
                            </div>
                            
                        </div>
            </>
    )
}