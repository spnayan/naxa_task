import React, { useEffect } from "react";

import { fetchApiData } from "./state/action-creator";
import { useDispatch, useSelector } from "react-redux";

import Container from "./components/Container";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApiData());
  }, []);

  const fetchedData = useSelector((state) => state.fetchData);

  if (fetchedData.length) {
    function comparator(a, b) {
      return a.service_order - b.service_order;
    }
    fetchedData.sort(comparator);

    return (
      <div className="container">
        <Navbar />
        {fetchedData.map((data) => {
          const id = data.service_order;
          const imageLeft = id % 2 == 0 ? false : true;

          return <Container key={data.id} data={data} imageLeft={imageLeft} />;
        })}
      </div>
    );
  } else {
    return <div>No Data</div>;
  }
}

export default App;
