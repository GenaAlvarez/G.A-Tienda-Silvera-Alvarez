import React from 'react'
import Card from 'react-bootstrap/Card';

const ItemListContainer = ({ products }) => {
  return (
    <div>
        {products.map((product) =>{
            
                <Card
                 key={product.id}
                 style={{ width: '18rem' }}
                 >
                  <link to={`/item/${product.id}`}><Card.Img variant="top" src={product.thumbnail} /></link>
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text> {product.description}</Card.Text>
                  </Card.Body>
                </Card>

        })}
    </div>
  ) 
}

export default ItemListContainer