import React, { Component } from "react";
import { Input, Card, Button } from "react-native-elements";


export class Register extends Component {
  
  render() {
    return (
      <Card>
        <Input
          placeholder="Name"
        />
         <Input
          placeholder="Gender"
        />
        <Input
          placeholder="Age"
        />
         <Input
          placeholder="Religion"
        />
        <Input
          placeholder="E-mail"
        />
        <Input
          placeholder="Password"
          secureTextEntry={true}
        />
        <Input
          placeholder="Confirm Password"
          secureTextEntry={true}
          leftIcon={{ type: "font-awesome", name: "unlock" }}
        />
        <Button title={this.props.registerBtnTxt?this.props.registerBtnTxt:"Register Milan"} />
      </Card>
    );
  }
}

export default Register;
