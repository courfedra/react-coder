
import ItemDetail from "../componentes/ItemDetail"
import customFetch from "../utils/customFetch"
import data from "../utils/data"
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"

const ItemDetailContainer=()=>{
    const [datos,setDatos] = useState([]);
    const {idItem}=useParams();
    useEffect(()=>{
        customFetch(200, data.find(item=>item.id == idItem))
        .then(response => setDatos(response))
        .catch(err=>console.log(err))
    },[]);

    return(
        <main className="container">
            <ItemDetail datos={datos}/>
        </main>
    )
}
export default ItemDetailContainer