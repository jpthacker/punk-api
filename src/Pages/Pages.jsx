import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../components/NotFound";
import Catalogue from "../containers/Catalogue";

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
          <Catalogue
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
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Pages;
