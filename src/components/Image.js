import React from "react";

const Image = ({ src }) => {
  return (
    <>
      <img src={src} alt={src} height="200px" width="200px" />
    </>
  );
};

export default Image;
