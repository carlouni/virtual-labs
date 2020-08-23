import React, { Component } from "react";

export default class Paginator extends Component {
  constructor(props) {
    super(props);
    this.onClickPageNumber = this.onClickPageNumber.bind(this);
    this.onCLickPrevious = this.onCLickPrevious.bind(this);
    this.onCLickNext = this.onCLickNext.bind(this);
  }

  onCLickPrevious(e) {
    e.preventDefault();
    const page = this.props.page;
    if (page > 0) {
      this.props.onChange(page - 1);
    }
  }

  onCLickNext(e) {
    e.preventDefault();
    const { page, size } = this.props;
    if (page < size - 1) {
      this.props.onChange(page + 1);
    }
  }

  onClickPageNumber(newPage) {
    this.props.onChange(newPage);
  }

  render() {
    const size = this.props.size;
    const page = this.props.page;
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className={`page-item ${page < 1 ? "disabled" : ""}`}>
            <a
              className="page-link"
              href="#"
              aria-label="Previous"
              onClick={this.onCLickPrevious}
            >
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          {[...Array(size)].map((val, key) => (
            <li
              className={`page-item ${key === page ? "active" : ""}`}
              key={key}
            >
              <a
                className="page-link"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  this.onClickPageNumber(key);
                }}
              >
                {key + 1}
              </a>
            </li>
          ))}
          <li className={`page-item ${page >= size - 1 ? "disabled" : ""}`}>
            <a
              className="page-link"
              href="#"
              aria-label="Next"
              onClick={this.onCLickNext}
            >
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
