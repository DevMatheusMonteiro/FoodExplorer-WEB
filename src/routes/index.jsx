import { BrowserRouter, Route, Navigate } from "react-router-dom";

import { AuthRoutes } from "./auth.routes";
import { CustomerRoutes } from "./customer.routes";

import { useAuth } from "../hooks/authContext";
import { AdminRoutes } from "./admin.routes";

export function Routes() {
  const { user, role } = useAuth();

  function AccessRoutes() {
    switch (role) {
      case "customer":
        return <CustomerRoutes />;
      case "admin":
        return <AdminRoutes />;

      default:
        return <CustomerRoutes />;
    }
  }

  return (
    <BrowserRouter>{user ? <AccessRoutes /> : <AuthRoutes />}</BrowserRouter>
  );
}
