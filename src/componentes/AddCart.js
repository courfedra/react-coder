import {useState} from "react"

const AddCart = (props) =>
{
    const [counter,setCounter] = useState(0);

    const addCart=()=>{
        props.stock>counter?setCounter(counter+1):alert("No hay mas!")
    }
    const subsCart=()=>{
        0<counter?setCounter(counter-1):alert("No podes comprar negativo!")
    }

    return(
        <div className="containerBtnCart">
            <div className="divAddSubsCart">
                <button className="btnSubs" onClick={subsCart}> - Quitar </button>
                <div className="divCounter">{counter}</div>
                <button className="btnAdd" onClick={addCart}> + Agregar</button>
            </div>
            <div className="divBuy">
                <button className="btnAddCart" onClick={()=>{alert("Compraste "+counter+" "+props.name+" a un total de $"+counter*props.precio)}}>Comprar</button>
            </div>
        </div>
    )
}
export default AddCart