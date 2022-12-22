import {Link} from "react-router-dom"
const Item = ({id,nombre,precio,foto,stock,stockCart}) => {
    return (
            <>
                <div className="card">
                    <img src={foto} alt={nombre}/>
                    <h3>{nombre}</h3>
                    <p>Stock: {stockCart} Unidades</p>
                    <p>Precio: ${precio}</p>
                    <Link to={`/item/${id}`} className="linkInfo"><button className="botonInfo" >Detalles</button></Link>
                </div>
            </>
    )
}

export default Item;