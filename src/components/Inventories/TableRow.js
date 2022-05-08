import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TableRow = ({ inventory, handleDelete, index }) => {
  const { name, quantity, supplierName, _id } = inventory;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{supplierName}</td>
      <td className="d-flex justify-content-center">
        <Button onClick={() => handleDelete(_id)}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </td>
    </tr>
  );
};

export default TableRow;
