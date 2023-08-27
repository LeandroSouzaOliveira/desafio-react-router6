import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Welcome from "./routes/Home/Welcome";
import Product from "./routes/Product";
import Computers from "./routes/Product/Computers";
import Eletronics from "./routes/Product/Electronics";
import Books from "./routes/Product/Books";
import AboutUS from "./routes/Home/AboutUS";
import NotFound from "./routes/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<Welcome />} />
          <Route path="about" element={<AboutUS />} />
        </Route>
        <Route path="product" element={<Product />}>
          <Route index element={<Navigate to="/product" />} />
          <Route path="computers" element={<Computers />} />
          <Route path="eletronics" element={<Eletronics />} />
          <Route path="books" element={<Books />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
