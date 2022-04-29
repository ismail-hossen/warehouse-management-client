import { Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useInventory from "../../hook/useInventory";
import InventoryCard from "../Card/InventoryCard";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const inventory = useInventory();

  const handleUpdate = (id) => {
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
