import 'bootstrap/dist/css/bootstrap.min.css';
import  "./index.css";
import MainRoutes from './routes/MainRoutes';
import { CartProvider } from './context';

function App() {
  
  return (
    <div>
      <CartProvider>
        <MainRoutes />
      </CartProvider>
    </div>

  )
}
export default App
