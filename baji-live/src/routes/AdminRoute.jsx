import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { token, user } = useSelector((state) => state.auth);

  console.log("Auth State:", { token, user });

  if (!token || !user || user?.user?.role !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
};

export default AdminRoute;
