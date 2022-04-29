import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const InventoryCard = ({handleUpdate,inventory }) => {
  const all = inventory;
  console.log(all)
  return (
    <Col className='col-md-4'>
    <Card>
      <Card.Img variant="top" src={all.image} />
      <Card.Body>
        <Card.Title>{all.name}</Card.Title>
        <Card.Text>
          {all.description}
        </Card.Text>
        <Card.Title>{all.quantity}</Card.Title>
      </Card.Body>
      <Button variant="primary" onClick={()=>handleUpdate(inventory._id)}>update</Button>
    </Card>
  </Col>
  );
};

export default InventoryCard;