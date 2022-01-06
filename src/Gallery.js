import React from "react";
import "./Gallery.css";

function Gallery({ images }) {
  let imagesList = images.map(({ title, alt, src }, index) => {
    return (
      <div key={index} className="img-box">
        <img title={title} src={src} alt={alt} />
      </div>
    );
  });

  return <section className="content">{imagesList}</section>;
}

export default Gallery;
