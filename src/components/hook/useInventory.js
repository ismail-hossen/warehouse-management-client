import { useEffect, useState } from "react";

const useInventory = (reload) => {
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    fetch("https://still-everglades-64188.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [reload]);
  return inventory;
};

export default useInventory;
