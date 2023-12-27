import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { useEffect, useState } from 'react';
import axios from "axios";
import { useAllProducts } from '../hooks/useProducts';
import LoaderComponent from '../components/LoaderComponent/LoaderComponent';



export const Home = () => {

    const {products, loading, error} = useAllProducts(15);
    
    return (
      <div>
          {loading ? (
            <LoaderComponent/>
          ) : error ? (
            <div>Se produjo un error.</div>
          ) :(
          <ItemListContainer products={products}/>
          )}
      </div>
  )
}

export default Home