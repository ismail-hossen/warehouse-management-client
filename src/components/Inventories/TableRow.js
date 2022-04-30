import React from "react";

const TableRow = ({inventory}) => {
    const {name, quantity} = inventory;
  return (
    <tr>
      <td>1</td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>@mdo</td>
    </tr>
  );
};

export default TableRow;
