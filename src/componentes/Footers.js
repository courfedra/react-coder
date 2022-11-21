import logo from '../img/logo.png'
const Footers = () => {
    return(
        <div className="footer">
            <img src={logo} alt="logoFooter"/>
            <ul>
                <li><span>Dirección:</span> Calle Falsa 123</li>
                <li><span>Ubicación:</span> Mendoza, Argentina</li>
                <li><span>Contacto:</span> +26123456789</li>
            </ul>
        </div>
    )
}
export default Footers