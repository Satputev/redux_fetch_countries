import React from "react";

let Comp1 = (props) => {
  return (
    <h1>
      {props.key1}

      {props.children}
    </h1>
  );
};

export default class App1 extends React.Component {
  render() {
    return (
      <div>
        <Comp1>Hello</Comp1>
        <Comp1 key1="Welcome to "> Functional Component</Comp1>
        <Comp1 key1="Welcome to ">MongoDb</Comp1>
      </div>
    );
  }
}
