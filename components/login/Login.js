import React, { Component } from "react";
import { Input, Card, Button } from "react-native-elements";
import axios from "axios";

export class MilanLogin extends Component {
  loading=false;
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
    const { navigation } = this.props
    this.loading=true;
    console.log("req", this.state)
    axios
      .post("http://localhost:8081/login", this.state)
      .then((response) => {
        this.loading=false;
        console.log(response.data);
        if (!this.loading) {
          navigation.navigate('Dashboard')
        }
      })
      .catch((response) => {
        this.loading=false;
        console.log(response);
      });

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
