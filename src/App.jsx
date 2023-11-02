import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import  "./index.css";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBarComponent/>
      <ItemListContainer greeting="Bienvenido a G.A Tienda, espero que disfrutes de nuestros productos!"/>
    </div>

  )
}
export default App