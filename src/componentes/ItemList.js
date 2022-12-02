import Item from "./Item"
const ItemList = (props)=>{
    return(
        <div className="gallery">
            {
                props.datos.map(item=> <Item
                                        key={item.id}
                                        nombre={item.nombre}
                                        altura={item.caracteristicas.altura}
                                        color={item.caracteristicas.color}
                                        cantidad={item.caracteristicas.cantidad}
                                        precio={item.precio}
                                        foto={item.foto}
                                        stock={item.stock}
                                        />)
            }
        </div>
    )
}

export default ItemList