import React, {useState} from "react";
import { View } from "react-native";
import MilanLogin from "./Login";
import MilanHeader from "../header/MilanHeader";
import Register from "./Register";
import RegisterMilan from "./RegisterMilan";
import MilanMenu from "../header/MilanMenu";

function LoginContainer() {
  const [isLogin, setisLogin] = useState(true);
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
              <MilanLogin/>
            </View>
          );
    }
   
}

export default LoginContainer;
