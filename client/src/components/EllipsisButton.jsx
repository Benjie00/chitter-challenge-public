import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const EllipsisButton = ({ onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleDelete = () => {
    onDelete();
    setIsOpen(false); // close the dropdown menu after the delete button is clicked
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={handleClick}
        className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 p-2"
      >
        <FontAwesomeIcon icon={faEllipsisV} />
      </button>

      {isOpen && (
        <div
          id="dropdown"
          className="z-10 absolute right-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700"
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <button
                className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                type="button"
              >
                Edit
              </button>
            </li>
            <li>
              <button
                onClick={handleDelete}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                type="button"
              >
                Delete
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default EllipsisButton;
