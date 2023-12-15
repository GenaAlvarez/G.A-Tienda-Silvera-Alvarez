import React from 'react'
import Card from 'react-bootstrap/Card';
import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector';
import AddItemButton from '../AddItemButton/AddItemButton';


const ItemDetailContainer = ({ product }) => {
    return (
      <div>
             <Card
             key={product.id}
             style={{ width: '18rem' }}
             >
             <Card.Img variant="top" src={product.thumbnail} />
             <Card.Body>
                 <Card.Title>{product.title}</Card.Title>
                 <Card.Text> {product.description}</Card.Text>
             </Card.Body>
             <ItemQuantitySelector />
             
             </Card>
      </div>
    )
  }
export default ItemDetailContainer