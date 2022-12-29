import {Link} from "react-router-dom"
const BotonCheckout = () => {
    return(
        <Link to="/Cart" className="linkCheckout">
            <button className="botonCheckout">
                Checkout Carrito - Producto Agregado
            </button>
        </Link>
    )
}
export default BotonCheckout
