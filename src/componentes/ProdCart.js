import { GrAdd,GrSubtract } from "react-icons/gr";
import {useState,useContext,useEffect} from "react"
import {CartContext} from '../componentes/CartContext'

export const ProdCart = ({stockActual,cantidadActual,precio,caramelo})=>{

    const {showTotalAmount}=useContext(CartContext)
    const {cantProdActualizado}=useContext(CartContext)
    const {cantProd}=useContext(CartContext)
    const addInCart=()=>{
        if(cantidadActual < stockActual){
            cantProdActualizado(cantidadActual);
            showTotalAmount(precio,true)
        }else{
            console.log("Error")
        }
    }

    const subInCart=()=>{
        if(cantidadActual>1){
            cantProdActualizado(cantidadActual);
            showTotalAmount(precio,false)
        }else{
            console.log("Error")
        }
    }

    useEffect(()=>{
        caramelo();
    },[])

    return(
            <>
                <div className="addInCart">
                    <button onClick={subInCart} className="btnSubInCart"><GrSubtract/></button>
                    <li>Cantidad: {cantProd}</li>
                    <button onClick={addInCart} className="btnAddInCart"><GrAdd/></button>
                </div>
                <li>Precio Unitario: ${precio}</li>
                <li>Sub Total: ${cantProd*precio}</li>
            </>
    )
}