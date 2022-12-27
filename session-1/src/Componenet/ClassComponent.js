import React from "react";
class WelcomClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Fname: "FristState",
    };
  }
  // state = {
  //     Fname: 'FristState'
  // }
  render() {
    return <h1 className="container">Hello {this.state.Fname}</h1>;
  }
}
export default WelcomClass;
