
import ItemDetail from "../componentes/ItemDetail"
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"

import { doc, getDoc } from "firebase/firestore";
import {db} from "../utils/firebaseConfig"

const ItemDetailContainer=()=>{
    const [datos,setDatos] = useState([]);
    const {idItem}=useParams();

    useEffect(()=>{
        //Funcion que deberia estar en otro archivo para modularizar y mejor practica
        const dbOneAsync= async()=>{
            //eleccion de item por ID
            let q=doc(db, "productos",idItem)
            const docSnap = await getDoc(q);

            if(docSnap.exists()){
                return{
                    id:idItem,
                    ...docSnap.data()
                }
            }else{
                console.log("No se encontro el item")
            }
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