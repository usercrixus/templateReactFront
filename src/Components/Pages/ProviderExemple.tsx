import React, { Profiler } from "react";
import "../../CSS/utilities.css";
import ProviderInterface from "../../Providers/ProviderInterface";
import BasicProvider from "../../Providers/BasicProvider";

export default class ProviderExample
    extends React.Component
    implements ProviderInterface {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() { }
    componentWillUnmount() { }
    rerender() {
        this.forceUpdate();
    }

    onClickedRender() {
        BasicProvider.setClock()
        BasicProvider.notify()
    }

    render() {
        return (
            <button onClick={() => this.onClickedRender()}>Click me</button>
        );
    }
}
