import { Link } from "react-router-dom";
import { authService } from "../../libs/auth";
import { useAuth } from "../../containers/Auth/hooks/useAuth";

export const Header = () => {
  const { logoutMutation } = useAuth();
  const isLoggedIn = authService.getToken();

  return (
    <div className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">Booking.com</Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center text-white px-3 font-bold hover:bg-blue-600"
                to="booking"
              >
                My Bookings
              </Link>
              <Link
                className="flex items-center text-white px-3 font-bold hover:bg-blue-600"
                to="hotels"
              >
                My Hotels
              </Link>
              <Link
                to="/"
                onClick={() => logoutMutation.mutate()}
                className="flex bg-white items-center text-blue-600 p-3 py-1 rounded font-bold hover:bg-gray-100"
              >
                Logged Out
              </Link>
            </>
          ) : (
            <div className="flex items-center">
              <Link
                to="/register"
                className="flex bg-white items-center text-blue-600 p-3 py-1 rounded mr-2 font-bold hover:bg-gray-100"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="flex bg-white items-center text-blue-600 p-3 py-1 rounded font-bold hover:bg-gray-100"
              >
                Sign In
              </Link>
            </div>
          )}
        </span>
      </div>
    </div>
  );
};
