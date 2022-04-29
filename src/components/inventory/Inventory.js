import React, { useEffect, useState } from "react";
import { Card, Button, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Inventory = () => {
  const { id } = useParams();
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/inventory/${id}`)
      .then((res) => res.json(res))
      .then((data) => setInventory(data));
  }, [id]);

  return (
    <div>
      <Row className="justify-content-center my-5">
        <Card className="w-50">
          <Card.Img variant="top" src={inventory.image} />
          <Card.Body>
            <Card.Title>{inventory.name}</Card.Title>
            <Card.Text>{inventory.description}</Card.Text>
            <Card.Title>Supplier: {inventory.supplierName}</Card.Title>
          </Card.Body>
          <Button variant="primary">delivered</Button>
        </Card>
      </Row>
    </div>
  );
};

export default Inventory;
