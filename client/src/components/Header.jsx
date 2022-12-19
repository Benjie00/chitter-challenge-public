import { Navbar, Button } from "flowbite-react";
import { NavLink } from "react-router-dom";

const Header = ({ user, setUser }) => {
  return (
    <>
      <Navbar
        fluid={true}
        rounded={true}
        className="sticky top-0 z-50 p-4 bg-white rounded-lg shadow dark:bg-gray-900 bottom-0 w-full"
      >
        <Navbar.Brand>
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Chitter Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold  text-gray-600 dark:text-gray-300">
            Chitter
          </span>
        </Navbar.Brand>
        {user && user._id ? (
          <div className="flex md:order-2">
            <NavLink to="/">
              <Button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => setUser({})}
              >
                Log out
              </Button>
            </NavLink>
          </div>
        ) : (
          <div className="flex md:order-2">
            <NavLink to="/login">
              <Button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Get started
              </Button>
            </NavLink>
          </div>
        )}
      </Navbar>
    </>
  );
};

export default Header;
