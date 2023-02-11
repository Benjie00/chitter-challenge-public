import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ClipLoader color="#3490dc" />
    </div>
  );
};

export default Spinner;
