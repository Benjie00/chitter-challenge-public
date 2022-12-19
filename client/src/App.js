import React from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import PeepCard from "./components/PeepCard";
import Post from "./components/Post";
import CreateAccount from "./components/CreateAccount";

function App() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});
  const [errorStatus, setErrorStatus] = useState();

  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/`);
      setData(response.data);
    } catch (error) {
      setErrorStatus(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const addField = async (field) => {
    try {
      const response = await axios.post("http://localhost:8080/", field);
      if (response.status === 201) {
        getData();
      }
    } catch (error) {
      console.log(error);
      setErrorStatus(error.message);
    }
  };

  return (
    <React.Fragment>
      <div>
        <Header user={user} setUser={setUser} />
        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route
            path="/"
            element={
              user && user._id ? (
                <>
                  <Post user={user} addField={addField} />
                  <PeepCard data={data} />
                </>
              ) : (
                <PeepCard data={data} />
              )
            }
          />
          <Route path="/createaccount" element={<CreateAccount />} />
        </Routes>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
