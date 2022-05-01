import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/login/Login";
import PrivateRoute from "./components/Auth/PrivateRoute";
import Footer from "./components/Home/Footer/Footer";
import Header from "./components/Home/Header/Header";
import Home from "./components/Home/Home/Home";
import Inventories from "./components/Inventories/Inventories";
import AddItem from "./components/inventory/addItem/AddItem";
import Inventory from "./components/inventory/Inventory";
import MyItems from "./components/myItems/MyItems";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/inventory/:id"
          element={
            <PrivateRoute>
              <Inventory />
            </PrivateRoute>
          }
        />
        <Route path="/manage-items" element={<Inventories />} />
        <Route path="/add-item" element={<AddItem />} />
        <Route path="/my-items" element={<MyItems />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
