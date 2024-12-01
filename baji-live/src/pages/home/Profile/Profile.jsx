import Sidebar from "@/components/home/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Profile;
