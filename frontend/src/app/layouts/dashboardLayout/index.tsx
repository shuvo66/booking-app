import { Outlet } from "react-router-dom";
import { Hero } from "../../components/Atoms/Hero";
import { withAuth } from "../hoc/withAuth";
import { Header } from "../../components/Atoms/Header";
import Footer from "../../components/Atoms/Footer";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* <Hero /> */}
      <div className="container mx-auto py-10 flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
const WrapperDashboardLayout = withAuth(DashboardLayout);
export default WrapperDashboardLayout;
