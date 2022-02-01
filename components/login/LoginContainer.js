import React from "react";
import { View } from "react-native";
import MilanLogin from "./Login";
import MilanHeader from "../header/MilanHeader";
import Register from "./Register";
import RegisterMilan from "./RegisterMilan";
import MilanMenu from "../header/MilanMenu";

function LoginContainer() {
    let isLogin=false;
    if(!isLogin){
        return (
            <View>
              <MilanHeader header={"Register"} />
              <RegisterMilan/>
            </View>
          );
    }else{
        return (
            <View>
              <MilanHeader header={"Login"} />
              <Login />
            </View>
          );
    }
   
}

export default LoginContainer;
