import React, { Component } from "react";
import { getVirtualLabs } from "../services/virtualLabs";
import VirtualLab from "./VirtualLab";
import { ReactSortable } from "react-sortablejs";
import chunck from "lodash/chunk";

export default class VirtualLabs extends Component {
  constructor() {
    super();
    this.state = {
      pages: [],
      page: 0,
    };
  }

  async componentDidMount() {
    const labs = await getVirtualLabs();
    const pages = chunck(labs, 5);
    this.setState({
        pages: pages,
    });
  }

  render() {
    const { pages, page } = this.state;
    if (pages.length > 0) {
        return (
            <ReactSortable
              list={pages[0]}
              setList={(sortedLabs) => {
                  console.log(sortedLabs);
                  const newPages = pages;
                  newPages[page] = sortedLabs;
                  this.setState({ pages: newPages });
              }}
            >
              {pages[page].map((lab) => (
                <VirtualLab key={lab.id} data={lab}></VirtualLab>
              ))}
            </ReactSortable>
          );
    } else {
        return (
            <p>Loading</p>
        );
    }

  }
}
