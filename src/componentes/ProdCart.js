import { GrAdd,GrSubtract } from "react-icons/gr";
import {useState,useContext} from "react"
import {CartContext} from '../componentes/CartContext'

export const ProdCart = ({stockActual,cantidadActual,precio,id,totalAmount})=>{
    const [cantProd,setCantProd]=useState(cantidadActual)

    const addInCart=()=>{

        if(cantProd < stockActual){
            setCantProd(cantProd+1);
            totalAmount(precio,true)
        }else{
            console.log("Error")
        }
    }

    const subInCart=()=>{
        if(cantProd>1){
            setCantProd(cantProd-1);
            totalAmount(precio,false)
        }else{
            console.log("Error")
        }
    }

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