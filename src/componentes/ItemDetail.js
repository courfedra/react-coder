import AddCart from './AddCart';
const ItemDetail=(props)=>{
    return(
        <>
            <div className="cardDetail">
                <img src={props.datos.foto} alt={props.datos.nombre}/>
                <div className="infoCardDetail">
                    <h3>{props.datos.nombre}</h3>
                    <p><b>Stock: </b>{props.datos.stock} Unidades</p>
                    <p><b>Precio: </b>${props.datos.precio}</p>
                    <p><b>Descripcion:</b> {props.datos.descripcion}</p>
                </div>
            </div>
            <div className="addCartDetail">
                <AddCart name={props.datos.nombre} stock={props.datos.stock} precio={props.datos.precio}/>
            </div>
        </>
    )
}

export default ItemDetail