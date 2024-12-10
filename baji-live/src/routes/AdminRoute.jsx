import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

const AdminRoute = ({ children }) => {
  const { token, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { addToast } = useToasts();

  if (!token || !user || user?.user.role !== "admin") {
    addToast("Please login as a admin", {
      appearance: "error",
      autoDismiss: true,
    });
    navigate("/");
  }

  return children;
};

export default AdminRoute;
