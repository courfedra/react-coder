import {useContext} from "react"
import {CartContext} from '../componentes/CartContext';

const Cart = () => {

    const {cartList}=useContext(CartContext);
    const {deleteThis}=useContext(CartContext);
    return(
        <>
            <h1>Soy un Carrito</h1>
            <ul>
                {
                    cartList.length === 0
                    ? <p>Tu carrito esta vacio</p>
                    : cartList.map(item=> 
                        <li key={item.id}>{item.nombre} -cantidad: {item.cantidad}- <button onClick={()=>{deleteThis(item.id)}}>Eliminar producto</button></li>
                    )
                }
            </ul>
        </>
    )
}
export default Cart