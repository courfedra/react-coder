import {Link} from "react-router-dom"
const BotonCheckout = () => {
    return(
        <button className="botonCheckout">
            <Link to="/cart" className="linkCheckout">
                Checkout
            </Link>
        </button>
    )
}
export default BotonCheckout
