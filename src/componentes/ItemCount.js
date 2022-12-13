import {useEffect, useState} from "react"

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
                <button className="btnSubs" onClick={decrement}> - Quitar </button>
                <div className="divCounter">{count}</div>
                <button className="btnAdd" onClick={increment}> + Agregar</button>
            </div>
            <div className="divBuy">
            {
                stock&&count
                ? <button className="btnAddCartOn" onClick={onAdd}>Comprar</button>
                :<button className="btnAddCartOff">Comprar</button>
            }
            </div>
        </div>
    )
}
export default ItemCount