import React from 'react'


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
             </Card>
      </div>
    )
  }
export default ItemDetailContainer