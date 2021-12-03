import React from "react";
import Image from "./Image";
import TextContent from "./TextContent";

const Container = ({ data, imageLeft }) => {
  console.log(imageLeft);
  return (
    <div id={data.service_order}>
      <div className="row margin">
        {imageLeft ? (
          <>
            <div className="col-6 center">
              <Image src={data.photo} />
            </div>
            <div className="col-6">
              <TextContent data={data} />
            </div>
          </>
        ) : (
          <>
            <div className="col-6">
              <TextContent data={data} />
            </div>
            <div className="col-6 center">
              <Image src={data.photo} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Container;
