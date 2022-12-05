import "./App.scss";
import Navbar from './componentes/Navbar'
import ItemListContainer from './componentes/ItemListContainer'
import Footers from './componentes/Footers'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js';

const App = () => {
  return (
      <>
        <Navbar/>
        <ItemListContainer/>
        <Footers/>
      </>

  )
}

export default App;