import {useEffect, useState} from "react"
import { GrAdd,GrSubtract } from "react-icons/gr";
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

const ItemCount = ({stock=0,initial=0,onAdd}) =>{
    const [count,setCount] = useState(0);

    useEffect(()=>{
        setCount(initial)
    },[]);

    const increment=()=>{
        (stock>count)?setCount(count+1):alert("No hay mas!")
    }
    const decrement=()=>{
        (initial+1<count)?setCount(count-1):alert("No podes comprar negativo!")
    }

    return(
        <div className="containerBtnCart">
            <div className="divAddSubsCart">
                <button className="btnSubs" onClick={decrement}><GrSubtract/></button>
                <div className="divCounter">{count}</div>
                <button className="btnAdd" onClick={increment}><GrAdd/></button>
            </div>
            <div className="divBuy">
            {
                stock&&count
                ? <button className="btnAddCartOn" onClick={()=>{onAdd(count)}}>Agregar al carrito</button>
                : <button className="btnAddCartOff">Agregar al carrito</button>
            }
            </div>
        </div>
    )
}
export default ItemCount