import "./App.scss";
import Navbar from './componentes/Navbar'
import ItemListContainer from './componentes/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer'
import Footers from './componentes/Footers'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js';
import {BrowserRouter,Routes,Route} from "react-router-dom"

const App = () => {
  return (
      <>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}></Route>
            <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}></Route>
            <Route path="/item/:idItem" element={<ItemDetailContainer/>}></Route>
          </Routes>
          <Footers/>
        </BrowserRouter>
      </>

  )
}

export default App;