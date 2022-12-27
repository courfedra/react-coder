import ItemCount from './ItemCount';
import BotonCheckout from "./BotonCheckout"
import {useState,useContext} from "react"
import {CartContext} from "../componentes/CartContext"
import { Link } from 'react-router-dom';
import Cart from './Cart';

const ItemDetail=({datos})=>{

    const [itemCount, setItemCount]=useState(0);
    const {addToCart}=useContext(CartContext);
    const {cartList}=useContext(CartContext)


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
                /*para evitar que agregue mas cantidad de la que exite corroboro si esta en el carrito y directamente agrega mas unidades alli*/
                (itemCount===0 && (cartList.map(item=>item.id===datos.id)<1))
            ? <ItemCount stock={datos.stock} initial={itemCount} onAdd={onAdd}/>
            : <BotonCheckout/>

            }
            </div>
            <Link to="/" ><button className='btnVolver'>Volver al inicio</button></Link>
        </>
    )
}

export default ItemDetail