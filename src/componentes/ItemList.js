import Item from "./Item"
const ItemList = (props)=>{
    return(
        <div className="gallery">
            {
                props.datos.map(item=> <Item
                                        key={item.id}
                                        id={item.id}
                                        nombre={item.nombre}
                                        descripcion={item.descripcion}
                                        precio={item.precio}
                                        foto={item.foto}
                                        stock={item.stock}
                                        stockCart={item.stockCart}
                                        />)
            }
        </div>
    )
}


export default ItemList