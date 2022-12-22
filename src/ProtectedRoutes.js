import { Navigate, Outlet, useLocation } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();
export default function ProtectedRoutes() {
  const location = useLocation();

  const token = cookies.get("TOKEN");

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
}
