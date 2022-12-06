import ItemList from "./ItemList";
import data from "../utils/data";
import {useState, useEffect} from "react";
import customFetch from "../utils/customFetch";
import {useParams} from "react-router-dom"

const ItemListContainer = () => {

    const [datos,setDatos] = useState([]);
    const {idCategoria}=useParams();
    //componentDidMount
    useEffect(()=>{
        //consulta a BD a futuro
        if (idCategoria)
        {
            customFetch(2000,data.filter(item=>item.categoria===parseInt(idCategoria)))
            .then(response => setDatos(response))
            .catch(err=>console.log(err))
        }
        else
        {
            customFetch(2000,data)
            .then(response => setDatos(response))
            .catch(err=>console.log(err))
        }
    },[idCategoria]);



    return(
        <main className="container">
            <ItemList datos={datos}/>
        </main>
    )
}


export default ItemListContainer