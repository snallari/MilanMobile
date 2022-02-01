import React, { useState } from 'react'
import { Input, Card, Button } from "react-native-elements";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function RegisterMilan(props) {
    const {navigation}=props
    const [val, setVal] = useState({})

    const submitValues=()=>{
        console.log(navigation);
        navigation.navigate('Login')
    }

    const setValues=(e)=>{
       setVal({...val, [e.target.placeholder]:e.target.value})
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
