import {useState} from "react"
const AddCart = (props) => {
    const [counter,setCounter] = useState(0);
    const addCart=()=>{
        setCounter(counter+1)
    }
    const subsCart=()=>{
        setCounter(counter-1)
    }
    return(
        <div className="containerBtnCart">
            <div className="divAddSubsCart">
                <button className="btnSubs" onClick={subsCart}> - Quitar </button>
                <div className="divCounter">{counter}</div>
                <button className="btnAdd" onClick={addCart}> + Agregar</button>
            </div>
            <div className="divBuy">
                <button className="btnAddCart" onClick={()=>{alert(props.name)}}>Comprar</button>
            </div>
        </div>
    )
}
export default AddCart