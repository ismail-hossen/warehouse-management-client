import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useInventory from "../hook/useInventory";
import TableRow from "./TableRow";

const Inventories = () => {
  const navigate = useNavigate();
  const [reload, setReload] = useState(false);
  const handleNavigate = () => navigate("/add-item");
  const inventory = useInventory(reload);

  const handleDelete = (id) => {
    //handle reduce quantity by id
    fetch(`http://localhost:8080/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json(res))
      .then((data) => {
        console.log(data);
        setReload(!reload);
      });
  };
  return (
    <div>
      <Button variant="primary" onClick={handleNavigate}>
        add new item
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Name</th>
            <th>In Stock</th>
            <th>Supplier Name</th>
            <th>remove</th>
          </tr>
        </thead>
        <tbody>
          {inventory
            ? inventory.map((data, index) => (
                <TableRow
                index={index}
                  key={data._id}
                  handleDelete={handleDelete}
                  inventory={data}
                ></TableRow>
              ))
            : ""}
        </tbody>
      </Table>
    </div>
  );
};

export default Inventories;
