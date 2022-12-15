import {useContext} from "react"
import {CartContext} from '../componentes/CartContext';

const Cart = () => {

    const ctx=useContext(CartContext);

    console.log(ctx.length)

    return(
        <>
            <h1>Soy un Carrito</h1>
            <ul>
                {
                    ctx.length === 0
                    ? <p>Tu carrito esta vacio</p>
                    : ctx.map(item=> <li key={item.id}>{item.nombre}</li>)
                }
            </ul>
        </>
    )
}
export default Cart