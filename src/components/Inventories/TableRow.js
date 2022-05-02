import React from "react";
import { Button } from "react-bootstrap";

const TableRow = ({ inventory, handleDelete, count, index}) => {
  const { name, quantity, supplierName, _id } = inventory;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{supplierName}</td>
      <td>
        <Button onClick={() => handleDelete(_id)}>delete</Button>
      </td>
    </tr>
  );
};

export default TableRow;
