import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useInventory from "../hook/useInventory";
import TableRow from "./TableRow";

const Inventories = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate("add-item");
  const inventory = useInventory();

  return (
    <div>
      <Button variant="primary" onClick={handleNavigate}>
        add new item
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((data) => (
            <TableRow key={data._id} inventory={data}></TableRow>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Inventories;
