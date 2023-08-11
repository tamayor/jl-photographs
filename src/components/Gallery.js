import React, { useState } from "react";

function Gallery(props) {
  const [countClick, setCountClick] = useState(0);
  function handleCountClick() {
    if (countClick === 1) {
      setCountClick(2);
    } else {
      setCountClick(1);
    }
  }


  return (
    <section className="Gallery">
      <img
        src={props.img}
        alt="taken by JL"
        className={countClick === 1 ? "Gallery--img-expand":"Gallery--img"}
        onClick={handleCountClick}
      />
      <div className="Gallery--text">
        <h3 className="Gallery--title">{props.title}</h3>
        <p className="Gallery--caption">{props.caption}</p>
      </div>
    </section>
  );
}

export default Gallery;
