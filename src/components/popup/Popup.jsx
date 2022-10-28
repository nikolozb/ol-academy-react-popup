import React from "react";
import { useRef, useEffect } from "react";
import "./Popup.styles.scss";

const Popup = ({ togglePopup }) => {
  const popupRef = useRef();

  useEffect(() => {
    const hidePopup = (event) => {
      //   console.log("componentDidMount");
      //   console.log("target:", event.target);
      //   console.log(!popupRef.current.contains(event.target));
      //   console.log(popupRef.current);
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        togglePopup();
      }
    };

    document.addEventListener("click", hidePopup);
    return () => document.removeEventListener("click", hidePopup);
  }, [togglePopup]);

  return (
    <div className="popup">
      <div className="popup__container" ref={popupRef}>
        <h1 className="popup__heading">Hide Popup</h1>
        <button className="popup__btn" onClick={togglePopup}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
