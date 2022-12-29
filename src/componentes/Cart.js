import {useContext} from "react"
import {CartContext} from '../componentes/CartContext'
import {ProdCart} from "./ProdCart"
import TotalPrice from "./TotalPrice"
import {Link} from "react-router-dom"
import { increment,updateDoc,doc,setDoc,collection, serverTimestamp } from "firebase/firestore";
import {db} from "../utils/firebaseConfig"
import Swal from "sweetalert2"

const Cart = () => {

    const {cartList}=useContext(CartContext);
    const {deleteThis}=useContext(CartContext);
    const {clearCart}=useContext(CartContext);
    const {precioFinal}=useContext(CartContext);
    const {firstTotalPrice}=useContext(CartContext);

    const ctx = useContext(CartContext)


    const createOrder = () =>{
        const order ={
            comprador:{
                nombre:"Lio Messi",
                email:"lioMessi@psgfrancia.com",
                tel:"+34123456789"
            },
            date: serverTimestamp(),
            items: ctx.cartList.map(item=>({
                id:item.id,
                title:item.nombre,
                price:item.precio,
                qty:item.stockCart//va la cantidad comprada
            })),
            total: ctx.precioFinal
        }
        const createOrderInFirestore= async ()=>{
            const newOrderRef = doc(collection(db, "orders"))
            await setDoc(newOrderRef,order);
            return newOrderRef
        }
        createOrderInFirestore()
            .then(result=>{
                Swal.fire({
                    title:"¡Felicitaciones!",
                    text: 'Has realizado la compra exitosamente',
                    html:'Se ha generado su ticket de compra: '+result.id,
                    icon:'success',
                    width:"75%"
                });
                //actualizar stock deproductos comrpados
                ctx.cartList.forEach(async(item)=>{
                    const itemRef = doc(db,"productos",item.id)
                    await updateDoc(itemRef, {
                        stock: increment(-item.cantidad)
                      });
                    })
                //vacio el carrito y actualizo el preciofinal a 0
                ctx.clearCart(true)

            })
            .catch(err=>console.log(err))
    }

    return(
        <div className="cart">
            <ul className="cartCard">
                {
                    cartList.length === 0
                    ? <>
                        <p>Tu carrito esta vacio</p>
                        <Link to={"/"}><button className="btnVolver">Volver al inicio</button></Link>
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
                        <button className="btnClearCart" onClick={()=>{clearCart(false)}}>Borrar Carrito</button>
                        <button className="btnBuyCart" onClick={createOrder}>Comprar Carrito</button>
                    </div>
                </>
            }
        </div>
    )
}
export default Cart