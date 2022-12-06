import {Link} from "react-router-dom"
const Item = ({id,nombre,precio,foto,stock}) => {

    return (
            <>
                <div className="card">
                    <img src={foto} alt={nombre}/>
                    <h3>{nombre}</h3>
                    <p>Stock: {stock} Unidades</p>
                    <p>Precio: ${precio}</p>
                    <button className="botonCompra" onClick={()=>{console.log("Click")}}>Comprar</button>
                    <button className="botonInfo" > <Link to={`/item/${id}`}>Detalles</Link></button>
                </div>
            </>
    )
}

export default Item;