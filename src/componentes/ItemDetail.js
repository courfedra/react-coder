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
                <button className="btnSubs"> - Quitar </button>
                0
                <button className="btnAdd"> + Agregar</button>
            </div>
        </>
    )
}

export default ItemDetail