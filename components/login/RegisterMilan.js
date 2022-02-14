import React, { useState } from 'react'
import { Input, Card, Button } from "react-native-elements";
import axios from "axios";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function RegisterMilan(props) {
    const {navigation}=props
    const [val, setVal] = useState({})
    const [loading, setloading] = useState(false);

    const submitValues=()=>{
        console.log("registration",val,navigation);
        axios
       .post("https://whispering-lowlands-74128.herokuapp.com/addClasses", val)

       .then((response) => {
           console.log(response.data);
           setloading(false);
           if(!loading){
            navigation.navigate('Login')
           }
       })
       .catch((response) => {
           console.log(response);
           setloading(false);
       });
    }

    const setValues=(e)=>{
       setVal({...val, [(e.target.placeholder).toLowerCase()]:e.target.value})
    }

    return (
        <Card>
        <Input
          placeholder="Name"
          autoFocus={true}
          onBlur={setValues}
        />
         <Input
          placeholder="Gender"
          onBlur={setValues}
        />
        <Input
          placeholder="Age"
          onBlur={setValues}
        />
         <Input
          placeholder="Religion"
          onBlur={setValues}
        />
        <Input
          placeholder="E-mail"
          onBlur={setValues}
        />
        <Input
          placeholder="Password"
          secureTextEntry={true}
          maxLength={8}
          onBlur={setValues}
        />
        <Input
          placeholder="Confirm Password"
          secureTextEntry={true}
          maxLength={8}
          leftIcon={{ type: "font-awesome", name: "unlock" }}
          onBlur={setValues}
        />
        <Button title="Register Milan" onPress={submitValues}  />
      </Card>
    )
}

export default RegisterMilan
