const BotonLink=(props)=>{
    return(
        <>
            <button>
                <a target="_blank" href={props.link}>{props.name}</a>
            </button>
        </>
    )
}
export default BotonLink