import { Routes, Route } from "react-router-dom";
import { Home, Cart } from "../pages";

export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
      </Routes>
    </>
  );
}
