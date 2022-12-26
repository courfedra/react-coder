const HayStock=({stock})=>{

    let textoStock,colorStock=""

    if (stock > 0){
        colorStock="green"
        textoStock="Tenemos stock"
    }else{
        colorStock="red"
        textoStock="No tenemos stock"
    }

    return(
        <p style={{color:`${colorStock}`}}>{textoStock}</p>
    )
}
export default HayStock