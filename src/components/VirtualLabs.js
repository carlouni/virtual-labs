import chunck from "lodash/chunk";
import React, { Component } from "react";
import { ReactSortable } from "react-sortablejs";
import { getVirtualLabs } from "../services/virtualLabs";
import Paginator from "./Paginator";
import VirtualLab from "./VirtualLab";

export default class VirtualLabs extends Component {
  constructor() {
    super();
    this.state = {
      pages: [],
      page: 0,
    };
    this.onPageChange = this.onPageChange.bind(this);
  }

  async componentDidMount() {
    const labs = await getVirtualLabs();
    const pages = chunck(labs, 5);
    this.setState({
      pages: pages,
    });
  }

  onPageChange(newPage) {
    this.setState({ page: newPage });
  }

  render() {
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
              <VirtualLab key={lab.id} data={lab}></VirtualLab>
            ))}
          </ReactSortable>
          <Paginator
            page={page}
            size={pages.length}
            onChange={this.onPageChange}
          />
        </>
      );
    } else {
      return <p>Loading</p>;
    }
  }
}
