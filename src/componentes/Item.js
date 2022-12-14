import {Link} from "react-router-dom"
import HayStock from "./HayStock"
const Item = ({id,nombre,precio,foto,stock}) => {

    return (
            <>
                <div className="card">
                    <img src={foto} alt={nombre}/>
                    <h3>{nombre}</h3>
                    <HayStock stock={stock}/>
                    <p>Precio: ${precio}</p>
                    <Link to={`/item/${id}`} className="linkInfo"><button className="botonInfo" >Detalles</button></Link>
                </div>
            </>
    )
}

export default Item;