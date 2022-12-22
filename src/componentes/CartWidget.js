import {BsCart3} from 'react-icons/bs';
import {Link} from "react-router-dom"
import {CartContext} from "./CartContext"
import {useContext,useState,useEffect} from "react"

const CartWidget = () => {
    const {cartList}=useContext(CartContext);
    const[cantCompra,setCantCompra]=useState(0);
    let valor = 0
    cartList.forEach(item=>{valor+=item.cantidad})

    useEffect(()=>{
        setCantCompra(valor)
    },[valor])



    return(

            cartList.length===0
            ?<>
                <Link to="/Cart" ><BsCart3 style={{fontSize:'2em'}}/></Link>
             </>
            :<>
                <Link to="/Cart" className='linkCarrito' ><BsCart3 style={{fontSize:'2em'}}/><span>{cantCompra}</span></Link>
            </>

    )
}

export default CartWidget