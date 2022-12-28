import ItemList from "./ItemList";
import Loading from "./Loading"
import data from "../utils/data";
import {useState, useEffect,useContext} from "react";
import customFetch from "../utils/customFetch";
import {useParams} from "react-router-dom"
import {CartContext} from "./CartContext"
import { collection, getDocs,query,where,orderBy } from "firebase/firestore";
import {db} from "../utils/firebaseConfig"
const ItemListContainer = () => {

    const [datos,setDatos] = useState([]);
    const {idCategoria}=useParams();



//componentDidMount
    useEffect(()=>{

        const dbAsync= async()=>{
            //para cambiar categorias
            let q;
            if (idCategoria){
                q=query(collection(db, "productos"),where("categoria","==",idCategoria))
            }else{
                q=query(collection(db, "productos"),orderBy("categoria"))
            }
            const querySnapshot = await getDocs(q);
            //metodo "docs" convierte array de documentos a array de objetos
            const dataFromFirestone = querySnapshot.docs.map(item=>({
                id:item.id,
                ...item.data()
            }))
            return dataFromFirestone;
        }




        dbAsync()
            .then(result=>setDatos(result))
            .catch(err=>console.log(err))
    },[idCategoria]);


//componente willUnMount
    useEffect(()=>{
        return(()=>{
            setDatos([]);
        })
    },[])

    return(
        <main className="container">
            {datos.length>0
                ?<ItemList datos={datos}/>
                :<Loading/>
            }
        </main>
    )
}


export default ItemListContainer