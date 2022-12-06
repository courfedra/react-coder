import logo from '../img/logo.png'
import {Link} from "react-router-dom"
const LogoNavbar = () =>{
    return(
        <Link to="/" className="navBarLogo">
            <img src={logo} alt="LogoNavbar"/>
        </Link>
    )
}
export default LogoNavbar