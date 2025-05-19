import React, { useState } from "react";
import Header from "./component/Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./component/Footer.jsx";
import UserContext from "../utils/usercontext";

const App = () => {
  const [user, setuser] = useState({
    name: "saran",
    email: "xyz@gmail.com",
  });

  return (
    <>
      <UserContext.Provider
        value={{
          user: user,
          setuser: setuser,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </>
  );
};

export default App;
