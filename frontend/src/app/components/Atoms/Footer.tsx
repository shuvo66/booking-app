import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-primary p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h6 className="text-Capitalize text-3xl text-white font-bold">
          Booking.com
        </h6>
        <div className="flex items-start gap-5">
          <Link to={"/"} className="text-white text-sm font-bold">
            Privacy Policy
          </Link>
          <Link to={"/"} className="text-white text-sm font-bold">
            Term & Services
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
