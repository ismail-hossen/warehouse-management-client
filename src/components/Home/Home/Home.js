import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import InventoryCard from "../Card/InventoryCard";
import "./Home.css";

const Home = () => {
  const [inventory, setInventory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/inventory")
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);

  const handleUpdate = (id) => {
    console.log(id);
    navigate(`inventory/${id}`)
  };
  return (
    <Row className="container-fluid g-4">
      {inventory.map((data) => (
        <InventoryCard key={data._id} handleUpdate={handleUpdate} inventory={data}></InventoryCard>
      ))}
    </Row>
  );
};

export default Home;
