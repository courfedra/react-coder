import {Link} from "react-router-dom"
const BotonLink=({link,name})=>{
    return(
        <>
            <button>
                <Link to={link}>{name}</Link>
            </button>
        </>
    )
}
export default BotonLink