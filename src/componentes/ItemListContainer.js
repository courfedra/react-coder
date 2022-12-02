import ItemList from "./ItemList";
import data from "../utils/data";
import {useState, useEffect} from "react";
import customFetch from "../utils/customFetch";

const ItemListContainer = () => {

    const [datos,setDatos] = useState([]);
    //componentDidMount
    useEffect(()=>{
        //consulta a BD a futuro
        customFetch(2000,data)
            .then(response => setDatos(response))
            .catch(err=>console.log(err))
    });

    return(
        <main className="container">
            <ItemList datos={datos}/>
        </main>
    )
}


export default ItemListContainer