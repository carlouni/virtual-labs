import chunck from "lodash/chunk";
import React, { Component } from "react";
import { ReactSortable } from "react-sortablejs";
import { getVirtualLabs } from "../services/virtualLabs";
import Error from "./Error";
import LabItem from "./LabItem";
import Loader from "./Loader";
import Paginator from "./Paginator";

export default class VirtualLabs extends Component {
  constructor() {
    super();
    this.state = {
      pages: [],
      page: 0,
      error: "",
    };
    this.onPageChange = this.onPageChange.bind(this);
  }

  async componentDidMount() {
    try {
      const labs = await getVirtualLabs();
      const pages = chunck(labs, 5);
      this.setState({
        pages: pages,
      });
    } catch (e) {
      this.setState({
        error: e.message,
      });
    }
  }

  onPageChange(newPage) {
    this.setState({ page: newPage });
  }

  render() {
    // Render error message
    if (this.state.error.length > 0) {
      return <Error message={this.state.error} />;
    }

    // If pages found, render pages
    const { pages, page } = this.state;
    if (pages.length > 0) {
      return (
        <>
          <Paginator
            page={page}
            size={pages.length}
            onChange={this.onPageChange}
          />
          <ReactSortable
            list={pages[page]}
            setList={(sortedLabs) => {
              const newPages = pages;
              newPages[page] = sortedLabs;
              this.setState({ pages: newPages });
            }}
          >
            {pages[page].map((lab) => (
              <LabItem key={lab.id} data={lab}></LabItem>
            ))}
          </ReactSortable>
          <Paginator
            page={page}
            size={pages.length}
            onChange={this.onPageChange}
          />
        </>
      );
    }

    // Render spinner as default
    return <Loader />;
  }
}
