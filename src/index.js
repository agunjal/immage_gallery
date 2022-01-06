import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import imageData from "./image-data";
import Gallery from "./Gallery";

ReactDOM.render(
  <Gallery images={imageData} />,
  document.getElementById("root")
);
