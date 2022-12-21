import {useContext,useState} from "react"
import {CartContext} from '../componentes/CartContext'
import {ProdCart} from "./ProdCart"
import TotalPrice from "./TotalPrice"

const Cart = () => {

    const {cartList}=useContext(CartContext);
    const {deleteThis}=useContext(CartContext);
    const {clearCart}=useContext(CartContext);
    const {buyCart}=useContext(CartContext);
    const {precioFinal}=useContext(CartContext);
    const {firstTotalPrice}=useContext(CartContext);


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
                                <ProdCart
                                    stockActual={item.stock}
                                    cantidadActual={item.cantidad}
                                    cantidadComprada={item.comprado}
                                    precio={item.precio}
                                    id={item.id}
                                    firstTotalPrice={firstTotalPrice}
                                />
                                <button className="btnDeleteThis" onClick={()=>{deleteThis(item.id)}}>Eliminar producto</button>
                            </div>
                        </div>
                    )
                }
            </ul>
            {
                cartList.length>0&&
                <>
                    <TotalPrice totalPrice={precioFinal}/>
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