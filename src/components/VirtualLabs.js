import React, { Component } from "react";
import { getVirtualLabs } from "../services/virtualLabs";
import VirtualLab from "./VirtualLab";

export default class VirtualLabs extends Component {
  constructor() {
    super();
    this.state = {
      labs: [],
    };
  }

  async componentDidMount() {
    const labs = await getVirtualLabs();
    this.setState({
        labs: labs,
    });
  }

  render() {
    return (
        <>
            {this.state.labs.map((lab) => (
                <VirtualLab key={lab.id} data={lab}></VirtualLab>
            ))}
        </>
    );
  }
}
