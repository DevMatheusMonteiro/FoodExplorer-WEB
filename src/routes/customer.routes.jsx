import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";
import { ProductDetails } from "../pages/ProductDetails";
import { Profile } from "../pages/Profile";
import { Orders } from "../pages/Orders";
import { OrderHistory } from "../pages/OrderHistory";
import { OrderDetails } from "../pages/OrderDetails";

export function CustomerRoutes() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/orderHistory" element={<OrderHistory />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/product-details/:id" element={<ProductDetails />} />
      <Route path="/order-details/:id" element={<OrderDetails />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
