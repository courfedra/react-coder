const Item = ({nombre,altura,color,cantidad,precio,foto,stock}) => {
    return (
            <div className="card">
                <img src={foto} alt={nombre}/>
                <h3>{nombre}</h3>
                <p>Altura: {altura} metros</p>
                <p>Color: {color}</p>
                <p>Cantidad: {cantidad}</p>
                <p>Precio: ${precio}</p>
                <p>Stock: {stock} Unidades</p>
                <button onClick={()=>{console.log("Click")}}>Boton</button>
            </div>
    )
}

export default Item;