import React, { useEffect, useRef, useState } from "react";
import { Card, Button, Row, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Inventory = () => {
  const { id } = useParams();
  const [inventory, setInventory] = useState([]);
  const [reload, setReload] = useState(false);
  const ref = useRef(null);

  // get one item for details page
  useEffect(() => {
    fetch(` https://intense-temple-54232.herokuapp.com/inventory/${id}`)
      .then((res) => res.json(res))
      .then((data) => {
        setReload(!reload);
        setInventory(data);
      });
  }, [id, reload]);

  //handle reduce quantity by id
  const handleReduce = (id) => {
    fetch(` https://intense-temple-54232.herokuapp.com/quantity/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json(res))
      .then((data) => {
        setReload(!reload);
      });
  };

  // handle add quantity by id
  const updateQuantity = (id) => {
    const quantity = { quantity: ref.current.value };
    fetch(` https://intense-temple-54232.herokuapp.com/add-quantity/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(quantity),
    })
      .then((res) => res.json(res))
      .then((data) => {
        setReload(!reload);
      });

    ref.current.value = "";
  };

  return (
    <div>
      <Row className="justify-content-center my-5">
        <Card className="w-50">
          <Card.Img variant="top" src={inventory.image} />
          <Card.Body className="d-flex mt-3 mb-3">
            <div className="col-7">
              <Card.Title>{inventory.name}</Card.Title>
              <Card.Text>{inventory.description}</Card.Text>
              <Card.Title>Supplier: {inventory.supplierName}</Card.Title>
              <Card.Text>Stock: {inventory.quantity}</Card.Text>
              <Card.Text>Sold: {inventory.sold}</Card.Text>
            </div>
            <div className="col-5 d-flex flex-column align-items-center justify-content-center border-bottom border-start ">
              <h3 className="text-center mb-2">Restock the items</h3>
              <div className="d-flex justify-content-center">
                <Form.Control
                  ref={ref}
                  type="number"
                  placeholder="Add quantity"
                />
                <Button
                  variant="primary"
                  onClick={() => updateQuantity(inventory._id)}
                >
                  Submit
                </Button>
              </div>
            </div>
          </Card.Body>
          <Button onClick={() => handleReduce(inventory._id)} variant="primary">
            delivered
          </Button>
        </Card>
      </Row>
    </div>
  );
};

export default Inventory;
