import ItemCount from './ItemCount';
import BotonCheckout from "./BotonCheckout"
import {useState,useContext} from "react"
import {CartContext} from "../componentes/CartContext"
import { Link } from 'react-router-dom';

const ItemDetail=({datos})=>{

    const [itemCount, setItemCount]=useState(0);
    const {addToCart}=useContext(CartContext);
    const {cartList}=useContext(CartContext)

    const isInCart = cartList.some(item=>item.id==datos.id)

    const onAdd = (qty) => {
        setItemCount(qty);
        addToCart(datos,qty)
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
                (itemCount===0 && !(isInCart))
            ? <ItemCount stock={datos.stock} initial={itemCount} onAdd={onAdd}/>
            : <BotonCheckout/>

            }
            </div>
            <Link to="/" ><button className='btnVolver'>Volver al catalogo</button></Link>
        </>
    )
}

export default ItemDetail