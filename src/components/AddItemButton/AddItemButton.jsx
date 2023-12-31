import React from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../../context'


const AddItemButton = ({label = "agregar al carrito", quantity, handleResetQuantity}) => {
  const {itemCount, setItemCount} = React.useContext(CartContext)

  const handleAddCart = () =>{
    setItemCount(itemCount + quantity);
    handleResetQuantity();
  }
  return (
    <Button onClick={handleAddCart}>{label}</Button>
  )
}

export default AddItemButton