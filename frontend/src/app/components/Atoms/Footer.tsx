import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-blue-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h6 className="text-Capitalize text-3xl text-white font-bold">
          Booking.com
        </h6>
        <div className="flex items-start gap-5">
          <Link to={"/"} className="text-white text-xl font-bold">
            Privacy Policy
          </Link>
          <Link to={"/"} className="text-white text-xl font-bold">
            Term & Services
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
