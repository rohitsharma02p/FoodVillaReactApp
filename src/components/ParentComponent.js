import { Component } from "react";
import Child from "./ChildComponent";
import UserContext from "../context/UserContext";

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
        <UserContext.Consumer>
          {({ user }) => {
            return (
              <div>
                <span className="mr-4">{user.name}</span>
                <span>{user.email}</span>
              </div>
            );
          }}
        </UserContext.Consumer>
        <Child name={"child 1"} />
        <Child name={"child 2"} />
      </div>
    );
  }
}
export default Parent;
