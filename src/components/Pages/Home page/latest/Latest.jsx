import React, { useEffect, useState } from "react";
import Heading from "../../../layout/Heading";

import "./Latest.css";
import LatestCard from "./LatestCard";
import axios from "axios";
import Loader from "../../../layout/loader/Loader";

const Latest = () => {
  let [latest, setLatest] = useState([]);
  let [load, setLoad] = useState(false);

  useEffect(() => {
    getLatest();
  }, []);

  const getLatest = async () => {
    setLoad(true);
    let res = await axios.get(
      "https://blog-api-nodej.herokuapp.com/api/v1/blog/latest"
    );
    setLatest(res.data.data);
    setLoad(false);
  };

  return (
    <>
      <Heading text="The Latest" />
      <div className="latest-section">
        {load ? (
          <Loader />
        ) : (
          <>
            {latest.length > 0 &&
              latest.map((ar) => {
                return (
                  <LatestCard
                    key={ar.id}
                    id={ar.id}
                    img={ar.img_primary}
                    date={ar.date}
                    title={ar.title}
                    cat={ar.category}
                    overview={ar.overview}
                  />
                );
              })}
          </>
        )}
      </div>
    </>
  );
};

export default Latest;
