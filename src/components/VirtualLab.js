import React, { Component } from "react";

export default class VirtualLab extends Component {
  render() {
    const data = this.props.data;
    return (
      <div
        className="card"
        style={{ width: "100%", marginBottom: "5px", cursor: "move" }}
        draggable="true"
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-3 p-0">
              <img
                className="card-img-top"
                src={data.thumbnail}
                alt="Card image cap"
                style={{ margin: "0px" }}
              />
              <ul className="list-group list-group-flush">
                <li className="list-group-item p-1">
                  Durration: {data.formattedDuration}
                </li>
                <li className="list-group-item p-1">
                  Language: {data.language}
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-9 p-0">
              <div className="card-body p-2">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">{data.description}</p>
                <a href={data.viewDetailsURL} className="btn btn-primary">
                  view details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
