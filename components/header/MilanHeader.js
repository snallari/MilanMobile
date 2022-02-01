import React from "react";
import { View} from 'react-native';
import { Header } from "react-native-elements";


function MilanHeader(props) {
  return (
      <Header
        leftComponent={{
          icon: "menu",
          color: "#fff",
          iconStyle: { color: "#fff" },
        }}
        centerComponent={{ text:props.header, style: { color: "#fff" } }}
        rightComponent={{ icon: "home", color: "#fff" }}
      />
  );
}

export default MilanHeader;
