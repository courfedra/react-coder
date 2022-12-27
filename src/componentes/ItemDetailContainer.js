
import ItemDetail from "../componentes/ItemDetail"
import customFetch from "../utils/customFetch"
import data from "../utils/data"
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"

import { doc, getDoc } from "firebase/firestore";
import {db} from "../utils/firebaseConfig"

const ItemDetailContainer=()=>{
    const [datos,setDatos] = useState([]);
    const {idItem}=useParams();

    useEffect(()=>{

        const dbOneAsync= async()=>{
            //eleccion deitem por ID
            let q=doc(db, "productos",idItem)
            const docSnap = await getDoc(q);
            let data=docSnap.data()
            return data;
        }

        dbOneAsync()
            .then(result=>setDatos(result))
            .catch(err=>console.log(err))
    },[]);

    return(
        <main className="container">
            <ItemDetail datos={datos}/>
        </main>
    )
}
export default ItemDetailContainer