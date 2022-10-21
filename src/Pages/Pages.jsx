import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../components/NotFound";
import Main from "../components/Main";

const Pages = (props) => {
  const {
    filteredBeers,
    setBrewedBefore,
    setPh,
    setIBU,
    minABV,
    maxABV,
    setMinABV,
    setMaxABV,
  } = props;

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Main
            filteredBeers={filteredBeers}
            setBrewedBefore={setBrewedBefore}
            setPh={setPh}
            setIBU={setIBU}
            minABV={minABV}
            maxABV={maxABV}
            setMinABV={setMinABV}
            setMaxABV={setMaxABV}
          />
        }
      ></Route>
      <Route
        path="*"
        element={
          <NotFound
            title={"404 NOT FOUND"}
            messageOne={"OOPS! THIS PAGE IS STILL BEING BREWED"}
            messageTwo={"CLICK ON THE LOGO ABOVE TO RETURN TO CATALOGUE"}
          />
        }
      />
    </Routes>
  );
};

export default Pages;
