import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const ItemListContainer = ({products}) => {
  return (
    <div>
              {products.map((product) => (
               <Card
                 key={product.id}
                 style={{ width: '18rem' }}
                 >
                  <Link to={`/item/${product.id}`}><Card.Img variant="top" src={product.thumbnail} /></Link>
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text> {product.description}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
                  
    </div>
  ) 
}

export default ItemListContainer