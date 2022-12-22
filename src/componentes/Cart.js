import {useContext,useEffect,useState} from "react"
import {CartContext} from '../componentes/CartContext'
import {ProdCart} from "./ProdCart"
import TotalPrice from "./TotalPrice"
import {Link} from "react-router-dom"

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
                    ? <>
                        <p>Tu carrito esta vacio</p>
                        <button><Link to={"/"}>Volver al inicio</Link></button>
                      </>
                    : cartList.map(item=>
                        <ProdCart
                            key={item.id}
                            img={item.foto}
                            nombre={item.nombre}
                            stock={item.stock}
                            cantidad={item.cantidad}
                            precio={item.precio}
                            id={item.id}
                            firstTotalPrice={firstTotalPrice}
                            deleteThis={deleteThis}
                        />
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