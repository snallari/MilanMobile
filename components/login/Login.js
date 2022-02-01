import React, { Component } from "react";
import { Input, Card, Button } from "react-native-elements";

export class MilanLogin extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: "",
      password: ""
    };
   
  }
  setVal = (e) => {
    if (e.target.placeholder === "E-mail") {
      this.setState({
        email: e.target.value,
      });
    } else {
      this.setState({
        password: e.target.value,
      });
    }
  };

  submit = () => {
    const {navigation}=this.props
    console.log(this.state, this.props);
    navigation.navigate('Dashboard')
  };

  render() {
    return (
      <Card>
        <Input
          placeholder="E-mail"
          onChange={this.setVal}
          leftIcon={{ type: "font-awesome", name: "user" }}
        />
        <Input
          placeholder="Password"
          secureTextEntry={true}
          onChange={this.setVal}
          leftIcon={{ type: "font-awesome", name: "unlock" }}
        />
        <Button title="Login" onPress={this.submit} />
      </Card>
    );
  }
}

export default MilanLogin;
