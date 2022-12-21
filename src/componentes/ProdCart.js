import { GrAdd,GrSubtract } from "react-icons/gr";
import {useState,useContext,useEffect} from "react"
import {CartContext} from '../componentes/CartContext'

export const ProdCart = ({stockActual,cantidadActual,cantidadComprada,precio,firstTotalPrice,id})=>{

    const {showTotalAmount}=useContext(CartContext)
    const {actualizarCarritoCantidad}=useContext(CartContext)
    const [cantItem,setCantItem]=useState(cantidadComprada)

//PASAR TODO A LOCAL

    const actualizarCantidadTotal = (cant)=>{
        console.log(cantItem+" el cantItem y el cant "+cant)
        setCantItem(cant)
    }

    //funcion para agregar si hay stock
    const addInCart=()=>{

        if(cantItem < stockActual){
            actualizarCantidadTotal(cantItem+1)
            actualizarCarritoCantidad(id,true)
            showTotalAmount(precio,true);
        }else{
            console.log("Error");
        }
    }

    //funcion para restar si hay al menos 2 productos, no elimina el item, lo deja minimo=1
    const subInCart=()=>{

        if(cantItem>1){
            actualizarCantidadTotal(cantItem-1)
            actualizarCarritoCantidad(id,false)
            showTotalAmount(precio,false);
        }else{
            console.log("Error");
        }
    }

    //carga el precioTotal por primera vez
    useEffect(()=>{
        firstTotalPrice();
    },[])


    return(
            <>
                <div className="addInCart">
                    <button onClick={subInCart} className="btnSubInCart"><GrSubtract/></button>
                    <li>Cantidad: {cantItem}</li>
                    <button onClick={addInCart} className="btnAddInCart"><GrAdd/></button>
                </div>
                <li>Precio Unitario: ${precio}</li>
                <li>Sub Total: ${cantItem*precio}</li>
            </>
    )
}