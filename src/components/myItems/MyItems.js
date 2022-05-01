import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import TableRow from "../Inventories/TableRow";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [myItem, setMyItem] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8080/getItemByEmail?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyItem(data));
  }, [user, reload]);

  const handleDelete = (id) => {
    //handle delete my item by one
    const isConfirm = window.confirm("Are you sure to execute this action?");
    if (isConfirm === true) {
      fetch(`http://localhost:8080/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json(res))
        .then((data) => {
          console.log(data);
          setReload(!reload);
        });
    }
  };
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>In Stock</th>
            <th>Supplier Name</th>
            <th>remove</th>
          </tr>
        </thead>
        <tbody>
          {myItem
            ? myItem.map((data) => (
                <TableRow
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

export default MyItems;
