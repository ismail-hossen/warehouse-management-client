import React, { useEffect, useState } from "react";
import { Card, Button, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Inventory = () => {
  const { id } = useParams();
  const [inventory, setInventory] = useState([]);
  const [reload, setReload] = useState(false);

  // get one item for details page
  useEffect(() => {
    fetch(`http://localhost:8080/inventory/${id}`)
      .then((res) => res.json(res))
      .then((data) =>{
        setReload(!reload)
         setInventory(data)
      });
  }, [id, reload]);

  const handleReduce = () => {
    console.log("id", id);
    // reduce quantity by id
    fetch(`http://localhost:8080/quantity/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json(res))
      .then((data) => {
        setReload(!reload)
        console.log(data)
      });
  };
  return (
    <div>
      <Row className="justify-content-center my-5">
        <Card className="w-50">
          <Card.Img variant="top" src={inventory.image} />
          <Card.Body>
            <Card.Title>{inventory.name}</Card.Title>
            <Card.Text>{inventory.description}</Card.Text>
            <Card.Title>Supplier: {inventory.supplierName}</Card.Title>
            <Card.Text>{inventory.quantity}</Card.Text>
          </Card.Body>
          <Button onClick={handleReduce} variant="primary">
            delivered
          </Button>
        </Card>
      </Row>
    </div>
  );
};

export default Inventory;
