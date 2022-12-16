import {BsCart3} from 'react-icons/bs';
import {Link} from "react-router-dom"
import {CartContext} from "./CartContext"
import {useContext} from "react"

const CartWidget = () => {
    const {cartList}=useContext(CartContext);
    return(
        <Link to="/Cart" className='linkCarrito' ><BsCart3 style={{fontSize:'2em'}}/><span>{cartList.length}</span></Link>
    )
}

export default CartWidget