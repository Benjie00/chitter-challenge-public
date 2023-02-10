import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import { Label, Checkbox, TextInput, Button } from "flowbite-react";

const CreateAccount = () => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const createAccount = async (e) => {
    e.preventDefault();
    const { userName, email, password } = user;
    if (userName && email && password && password) {
      const res = await axios.post(
        `https://chitter-xdej.onrender.com/createAccount`,
        user
      );
      alert(res.data.message);
      setUser({ email: "", password: "", name: "" });
      return;
    }
    alert(`Invalid input`);
  };
  return (
    <>
      <div className="centerLogin w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 z-50">
        <NavLink to="/">
          <button
            type="button"
            className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 float-right"
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </NavLink>
        <form onSubmit={createAccount} className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label value="Your email" />
            </div>
            <TextInput
              type="email"
              name="email"
              id="createEmail"
              value={user.email}
              onChange={handleChange}
              placeholder="name@example.com"
              required={true}
              shadow={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Your username" />
            </div>
            <TextInput
              type="text"
              name="userName"
              id="createUsername"
              value={user.name}
              onChange={handleChange}
              placeholder="ExampleUser"
              required={true}
              shadow={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Your password" />
            </div>
            <TextInput
              id="createPassword"
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter password"
              required={true}
              shadow={true}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="agree" />
            <Label htmlFor="agree">
              I agree with the{" "}
              <a
                href="/forms"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>
            </Label>
          </div>
          <Button type="submit">Register new account</Button>
        </form>
      </div>
    </>
  );
};

export default CreateAccount;
