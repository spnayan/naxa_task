import React from "react";

const TextContent = ({ data }) => {
  return (
    <>
      <img
        src="./img.svg"
        height="50px"
        width="50px"
        className="margin"
        alt="img"
      />
      <h3>{data.title}</h3>
      <p dangerouslySetInnerHTML={{ __html: data.description1 }}></p>
      <div
        dangerouslySetInnerHTML={{ __html: data.description2 }}
        className="description2"
      ></div>
    </>
  );
};

export default TextContent;
