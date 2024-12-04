import Sidebar from "@/components/home/Sidebar/Sidebar";
import Container from "@/components/shared/Container";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div className="bg-[#4e4e4e] py-6">
      <Container>
        <div className="flex gap-2">
          <div className="w-[20%] bg-[#313131] rounded">
            <Sidebar />
          </div>
          <div className="w-[80%] bg-[#313131] rounded">
            <Outlet />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
