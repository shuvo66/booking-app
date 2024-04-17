import { Outlet } from "react-router-dom";
import Footer from "../../components/Atoms/Footer";
import { Header } from "../../components/Atoms/Header";
import { withoutAuth } from "../hoc/withoutAuth";

const AuthLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="container mx-auto py-10 flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default withoutAuth(AuthLayout);
