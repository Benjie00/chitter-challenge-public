import React from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Spinner from "./components/Spinner";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import PeepCard from "./components/PeepCard";
import Post from "./components/Post";
import CreateAccount from "./components/CreateAccount";
import EllipsisButton from "./components/EllipsisButton";

function App() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});
  const [errorStatus, setErrorStatus] = useState();
  const [loading, setLoading] = useState(false);

  // https://chitter-xdej.onrender.com
  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://chitter-xdej.onrender.com`);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorStatus(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const addField = async (field) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `https://chitter-xdej.onrender.com`,
        field
      );
      setLoading(false);
      if (response.status === 201) {
        getData();
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setErrorStatus(error.message);
    }
  };

  const onDelete = async (post) => {
    setLoading(true);
    try {
      const response = await axios.delete(
        `https://chitter-xdej.onrender.com/posts/${post._id}`
      );
      setLoading(false);
      if (response.status === 200) {
        getData();
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setErrorStatus(error.message);
    }
  };

  // console.log(user);
  // console.log(data);

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet>
          <title>Chitter</title>
        </Helmet>
      </HelmetProvider>
      <div>
        <Header user={user} setUser={setUser} />
        {loading && <Spinner />}
        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route
            path="/"
            element={
              user && user._id ? (
                <>
                  <Post user={user} addField={addField} />
                  <PeepCard
                    data={data}
                    EllipsisButton={(props) => (
                      <EllipsisButton {...props} onDelete={onDelete} />
                    )}
                    user={user}
                  />
                </>
              ) : (
                <PeepCard
                  data={data}
                  EllipsisButton={(props) => (
                    <EllipsisButton {...props} onDelete={onDelete} />
                  )}
                  user={user}
                />
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
