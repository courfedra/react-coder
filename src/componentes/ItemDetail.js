import ItemCount from './ItemCount';
import BotonCheckout from "./BotonCheckout"
import {useState} from "react"
import {Link} from "react-router-dom"
const ItemDetail=({datos})=>{
    const [itemCount, setItemCount]=useState(0)
    const onAdd = (qty) => {
        setItemCount(qty);
        alert("Compraste")
    }
    return(
        <>
            <div className="cardDetail">
                <div className="ImgCardDetail">
                    <img src={datos.foto} alt={datos.nombre}/>
                </div>
                <div className="infoCardDetail">
                    <h3>{datos.nombre}</h3>
                    <p><b>Stock: </b>{datos.stock} Unidades</p>
                    <p><b>Precio: </b>${datos.precio}</p>
                    <p><b>Descripcion:</b> {datos.descripcion}</p>
                </div>
            </div>
            <div className="addCartDetail">
            {
                itemCount===0
            ? <ItemCount stock={datos.stock} initial={itemCount} onAdd={onAdd}/>
            : <Link to="/cart"><BotonCheckout link="/cart" name="Carrito"/></Link>

            }
            </div>
        </>
    )
}

export default ItemDetail