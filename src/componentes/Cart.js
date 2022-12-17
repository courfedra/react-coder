import {useContext} from "react"
import {CartContext} from '../componentes/CartContext';

const Cart = () => {

    const {cartList}=useContext(CartContext);
    const {deleteThis}=useContext(CartContext);
    const {clearCart}=useContext(CartContext);
    const {buyCart}=useContext(CartContext);
    return(
        <div className="cart">
            <ul className="cartCard">
                {
                    cartList.length === 0
                    ? <p>Tu carrito esta vacio</p>
                    : cartList.map(item=>
                        <div className="prodInCart">
                            <img src={item.foto} alt={item.nombre}/>
                            <div className="prodInCartInfo">
                                <li key={item.id}>{item.nombre}</li>
                                <li>Cantidad: {item.cantidad}</li>
                                <li>Precio Unitario: ${item.precio}</li>
                                <li>Sub Total: ${item.precio*item.cantidad}</li>
                                <button className="btnDeleteThis" onClick={()=>{deleteThis(item.id)}}>Eliminar producto</button>
                            </div>
                        </div>
                    )
                }
            </ul>
            {
                cartList.length>0&&
                <>
                    <h6>El total es: Muchisimo! $$$</h6>
                    <div className="btnCard">
                        <button className="btnClearCart" onClick={clearCart}>Borrar Carrito</button>
                        <button className="btnBuyCart" onClick={buyCart}>Celebrar Navidad</button>
                    </div>
                </>
            }
        </div>
    )
}
export default Cart