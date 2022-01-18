import React from "react";
import { List } from "react-router-dom";

const AsteroidListing = (props) => {
  const renderlist = ({ datalist }) => {
    if (datalist) {
      return datalist.near_earth_objects
        .filter((item, idx) => idx < 10)
        .map((item) => {
          return (
            <div className="">
              <p>{item.name}</p>
            </div>
          );
        });

      // console.log(datalist.near_earth_objects[1].name);
    }
  };
  return <div>{renderlist(props)}</div>;
};

export default AsteroidListing;
