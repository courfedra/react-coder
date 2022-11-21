const ItemListContainer = () => {
    return(
        <div className="container">
            <Greeting  contenido="Soy un list container 😀"/>
        </div>
    )
}

const Greeting = (props)=>{
    return(
        <h2>{props.contenido}</h2>
    )
}

export default ItemListContainer