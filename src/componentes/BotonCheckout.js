import {Link} from "react-router-dom"
const BotonCheckout = () => {
    return(
        <button className="botonCheckout">
            <Link to="/Cart" className="linkCheckout">
                Checkout Carrito
            </Link>
        </button>
    )
}
export default BotonCheckout
