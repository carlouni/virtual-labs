import React, { Component } from "react";
import { getVirtualLabs } from "../services/virtualLabs";
import VirtualLab from "./VirtualLab";
import { ReactSortable } from "react-sortablejs";

export default class VirtualLabs extends Component {
  constructor() {
    super();
    this.state = {
      labs: [],
    };
    this.onSort.bind(this);
  }

  async componentDidMount() {
    const labs = await getVirtualLabs();
    this.setState({
      labs: labs,
    });
  }

  onSort(sortedLabs) {
    this.setState({ labs: sortedLabs });
  }

  render() {
    return (
      <ReactSortable
        list={this.state.labs}
        setList={(sortedLabs) => {
            this.setState({ labs: sortedLabs });
        }}
      >
        {this.state.labs.map((lab) => (
          <VirtualLab key={lab.id} data={lab}></VirtualLab>
        ))}
      </ReactSortable>
    );
  }
}
