import { Component } from "react";
import Child from "./ChildComponent";

class Parent extends Component {
  constructor(props) {
    console.log("parent constructor()");
    super(props);
  }
  componentDidMount() {
    console.log("parent componentDidMount()");
  }
  render() {
    console.log("parent render()");
    return (
      <div>
        <div>Parent Component</div>
        <Child name = {"child 1"} />
        <Child name = {"child 2"} />
      </div>
    );
  }
}
export default Parent;
