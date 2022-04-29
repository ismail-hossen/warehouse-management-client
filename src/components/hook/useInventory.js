import { useEffect, useState } from "react";

function useInventory() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/inventory")
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);

  return inventory;
}

export default useInventory;