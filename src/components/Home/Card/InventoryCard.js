import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const InventoryCard = ({handleUpdate,inventory }) => {
  return (
    <Col className='col-md-4'>
    <Card>
      <Card.Img variant="top" src={inventory.image} />
      <Card.Body>
        <Card.Title>{inventory.name}</Card.Title>
        <Card.Text>
          {inventory.description}
        </Card.Text>
        <Card.Title>Supplier: {inventory.supplierName}</Card.Title>
      </Card.Body>
      <Button variant="primary" onClick={()=>handleUpdate(inventory._id)}>update</Button>
    </Card>
  </Col>
  );
};

export default InventoryCard;