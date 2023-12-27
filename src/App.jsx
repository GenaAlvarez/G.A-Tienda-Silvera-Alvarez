import 'bootstrap/dist/css/bootstrap.min.css';
import  "./index.css";
import MainRoutes from './routes/MainRoutes';
import { CartProvider } from './context';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAllProducts } from './hooks/useProducts';


function App() {
  const {products, loading, error} = useAllProducts(15);

  return (
    <div>
      <CartProvider>
        <MainRoutes />
      </CartProvider>
    </div>
    )
}

export default App
