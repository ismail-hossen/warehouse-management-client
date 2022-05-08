import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TableRow from "./TableRow";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Pagination from "../pagination/Pagination";
import axios from "axios";
import { useQuery } from "react-query";

const Inventories = () => {
  const [activePage, setActivePage] = useState(1);
  const [pages, setPages] = useState(0);
  const navigate = useNavigate();
  const [reload, setReload] = useState(false);
  const handleNavigate = () => navigate("/add-item");

  const fetchData = (page) =>
    fetch(`http://localhost:8080/queryData?page=${page}`).then((res) =>
      res.json()
    );
  const { data } = useQuery(["queryData", activePage], () =>
    fetchData(activePage)
  );

  // geting total number of data in mongodb
  useEffect(() => {
    const count = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8080/totalInventoryCount"
        );
        const countPages = Math.ceil(data?.count / 10);
        setPages(countPages);
      } catch (error) {
        console.log(error);
      }
    };
    count();
  }, []);

  //handle reduce quantity by id
  const handleDelete = (id) => {
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
    <div className="container-fluid mt-5 mb-5">
      <Table responsive="sm" striped bordered hover>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Name</th>
            <th>In Stock</th>
            <th>Supplier Name</th>
            <th className="d-flex justify-content-end">
              <Button
                className="d-flex align-content-center justify-content-center align-items-center"
                variant="primary"
                onClick={handleNavigate}
              >
                <FontAwesomeIcon className="me-2" icon={faPlus} />{" "}
                <span>add new item</span>
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((data, index) => (
              <TableRow
                index={index}
                key={data._id}
                handleDelete={handleDelete}
                inventory={data}
              ></TableRow>
            ))}
        </tbody>
      </Table>
      <Pagination
        activePage={activePage}
        setActivePage={setActivePage}
        pages={pages}
      ></Pagination>
    </div>
  );
};

export default Inventories;
