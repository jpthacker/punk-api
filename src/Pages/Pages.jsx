import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../components/NotFound";
import Main from "../components/Main";

const Pages = (props) => {
  const {
    filteredBeers,
    isOpen,
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
            isOpen={isOpen}
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
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Pages;
