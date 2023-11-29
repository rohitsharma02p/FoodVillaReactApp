import { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + " constructor()");
  }
  componentDidMount() {
    console.log(this.props.name + " componentDidMount()");
  }
  render() {
    console.log(this.props.name + " render()");
    return <div>Child render</div>;
  }
}

export default Child;
