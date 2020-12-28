import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./loaderBox.scss"

export function BoxLoader() {
  return (
    <div className="wrap">
      <Loader
        type="Puff"
        color="#3A80BA"
        height={100}
        width={100}
        // timeout={3000} //3 secs
      />
    </div>
  );
}
