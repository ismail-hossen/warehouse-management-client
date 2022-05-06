import { Button, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useInventory from "../../hook/useInventory";
import InventoryCard from "../Card/InventoryCard";
import "./Home.css";

const Home = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const getData = useInventory();
  const inventory = getData.slice(0, 6);
  const handleUpdate = (id) => navigate(`/inventory/${id}`);

  const handleInventory = () => navigate("/manage-items");
  return (
    <div>
      {" "}
      <div>
        <img
          className="bannerImg"
          src="https://img.freepik.com/free-photo/inventory-stock-manufacturing-assets-goods-concept_53876-133673.jpg?t=st=1651749176~exp=1651749776~hmac=f951acf54b676aa83528f6d95c5d829333bd5294e9adbd8023d5745ee804b06f&amp;w=1380"
          usemap="#image-map"
          alt=""
        />

        <map name="image-map">
          <area
            target="_blank"
            alt="let's with our new company to start your busniess journy"
            title="let's with our new company to start your busniess journy"
            href="#"
            coords="250,210,900,280"
            shape="rect"
          />
        </map>
      </div>
      <div>
        <h1 className="serviceHeading">Inventory</h1>
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
    </div>
  );
};

export default Home;
