import {BsCart3} from 'react-icons/bs';

const CartWidget = () => {
    return(
        <a className='linkCarrito' href="#"><BsCart3 style={{fontSize:'2em'}}/><span>7</span></a>
    )
}

export default CartWidget