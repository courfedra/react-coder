import { useState } from "react"
const Item = ({nombre,altura,color,cantidad,precio,foto,stock}) => {

    const [mostrar,setMostrar] = useState("infoCardNone")

    const verDetalles=()=>{
        mostrar==="infoCardNone"?setMostrar("infoCardShow"):setMostrar("infoCardNone");
    }

    return (
            <>
                <div className="card">
                    <img src={foto} alt={nombre}/>
                    <h3>{nombre}</h3>
                    <button className="botonCompra" onClick={()=>{console.log("Click")}}>Comprar</button>
                    <button className="botonInfo" onClick={verDetalles}>Detalles</button>
                    <div className={mostrar}>
                        <p>Altura: {altura} metros</p>
                        <p>Color: {color}</p>
                        <p>Cantidad: {cantidad}</p>
                        <p>Precio: ${precio}</p>
                        <p>Stock: {stock} Unidades</p>
                    </div>
                </div>
            </>
    )
}

export default Item;