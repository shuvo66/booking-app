import { Outlet } from "react-router-dom";
import Footer from "../../components/Atoms/Footer";
import { Header } from "../../components/Atoms/Header";
import { Hero } from "../../components/Atoms/Hero";
import { withoutAuth } from "../hoc/withoutAuth";

const HomeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <div className="container mx-auto py-10 flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
const WrapperHomeLayout = withoutAuth(HomeLayout);
export default WrapperHomeLayout;
