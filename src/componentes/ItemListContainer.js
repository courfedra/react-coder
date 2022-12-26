import ItemList from "./ItemList";
import Loading from "./Loading"
import data from "../utils/data";
import {useState, useEffect,useContext} from "react";
import customFetch from "../utils/customFetch";
import {useParams} from "react-router-dom"
import {CartContext} from "./CartContext"
import { collection, getDocs } from "firebase/firestore";
import {db} from "../utils/firebaseConfig"
const ItemListContainer = () => {

    const [datos,setDatos] = useState([]);
    const {idCategoria}=useParams();

const dbAsync= async()=>{
        const querySnapshot = await getDocs(collection(db, "productos"));
        querySnapshot.forEach((doc) => {
            console.log("***")
            console.log(`${doc.id} => ${doc.data()}`);
            console.log("***")
        });
    }

//componentDidMount
    useEffect(()=>{
        dbAsync();
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