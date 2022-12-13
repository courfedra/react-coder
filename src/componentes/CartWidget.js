import {BsCart3} from 'react-icons/bs';
import {Link} from "react-router-dom"


const CartWidget = () => {
    return(
        <Link to="/Cart" className='linkCarrito' ><BsCart3 style={{fontSize:'2em'}}/><span>7</span></Link>
    )
}

export default CartWidget