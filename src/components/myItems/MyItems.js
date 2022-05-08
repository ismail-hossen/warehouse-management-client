import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import TableRow from "../Inventories/TableRow";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [myItem, setMyItem] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetch(` https://intense-temple-54232.herokuapp.com/getItemByEmail?email=${user?.email}`, {
      headers: {
        authorization: `${localStorage.getItem("accessToken")}`,
      },
    }).then(async (response) => {
      const isJson = response.headers
        .get("content-type")
        ?.includes("application/json");
      const data = isJson ? await response.json() : null;

      if (response.status === 401 || response.status === 403) {
        signOut(auth);
        navigate("/login");
      }
      const myData = JSON.parse(JSON.stringify(data, null, 4));
      setMyItem(myData);
    });
  }, [user, reload, navigate]);

  const handleDelete = (id) => {
    //handle delete my item by one
    const isConfirm = window.confirm(
      "Would you like to remove this item from the list?"
    );
    if (isConfirm === true) {
      fetch(` https://intense-temple-54232.herokuapp.com/delete/${id}`, {
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
    <div className="container-fluid mt-5 mb-5">
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
            ? myItem.map((data, index) => (
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

export default MyItems;
