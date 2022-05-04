import { Button, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useInventory from "../../hook/useInventory";
import InventoryCard from "../Card/InventoryCard";
import "./Home.css";

const Home = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const getData = useInventory();
  const inventory = getData.slice(0, 6);
  const handleUpdate = (id) => navigate(`/inventory/${id}`);

  const handleInventory = () => navigate("/manage-items");
  return (
    <div>
      <Row className="container-fluid g-4">
        {inventory.map((data) => (
          <InventoryCard
            key={data._id}
            handleUpdate={handleUpdate}
            inventory={data}
          ></InventoryCard>
        ))}
      </Row>
      {user && (
        <Button variant="primary" onClick={handleInventory}>
          Manage Inventories
        </Button>
      )}
    </div>
  );
};

export default Home;
