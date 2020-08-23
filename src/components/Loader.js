import React from "react";
export default function Loader() {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-sm p-5 m-5"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <i className="fa fa-spinner fa-spin fa-3x" />
        </div>
      </div>
    </div>
  );
}
