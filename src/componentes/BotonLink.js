const BotonLink=(props)=>{
    return(
        <li>
            <button>
                <a target="_blank" href={props.link}>{props.name}</a>
            </button>
        </li>
    )
}
export default BotonLink