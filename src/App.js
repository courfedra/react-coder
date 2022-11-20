import "./App.css";
const App = () => {
  return (
    <>
      <header className="headerTop">
        <h1 className="titulo">Hola Mundo!</h1>
      </header>
      <navbar className="navBar">
        <div className="enlacesNavBar">
          <a href="#" className="linkProducto">Link</a>
          <a href="#" className="linkProducto">Link</a>
          <a href="#" className="linkProducto">Link</a>
        </div>
        <div className="enlacesCarrito">
          <a href="#" className="iconoCarrito">Carrito</a>
        </div>
      </navbar>
    </>
  )
}

export default App;