import { Outlet } from "react-router-dom";
import { Hero } from "../../components/Atoms/Hero";
import { withAuth } from "../hoc/withAuth";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <div className="container mx-auto py-10 flex-1">
        <Outlet />
      </div>
    </div>
  );
};
const WrapperDashboardLayout = withAuth(DashboardLayout);
export default WrapperDashboardLayout;
