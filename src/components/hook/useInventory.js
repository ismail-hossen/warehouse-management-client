import { useEffect, useState } from "react";

function useInventory(reload) {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/inventory")
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [reload]);

  return inventory;
}

export default useInventory;