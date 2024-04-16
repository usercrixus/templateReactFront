import React, { Profiler } from "react";
import "../../CSS/utilities.css";
import ProviderInterface from "../../Providers/ProviderInterface";
import BasicProvider from "../../Providers/BasicProvider";
import ProviderExample from "./ProviderExemple";


export default class HelloWorldProvider
  extends React.Component
  implements ProviderInterface {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    BasicProvider.subscribe(this);
  }
  componentWillUnmount() {
    BasicProvider.unsubscribe(this);
  }
  rerender() {
    this.forceUpdate();
  }
  myStyle = {
    color: 'white',
    backgroundColor: 'blue',
    padding: '10px',
    fontSize: '20px'
  };

  render() {
    return (
      <div className="fullCenter" style={{ display: "flex", flexDirection: "column" }}>
        <span>HELLO WORLD {BasicProvider.clock}</span>
        <ProviderExample />
      </div >
    );
  }
}
