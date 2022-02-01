import React, {useState} from "react";
import MilanDashboard from "./components/dashboard/MilanDashboard";
import RegisterMilan from "./components/login/RegisterMilan";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MilanDetails from "./components/dashboard/MilanDetails";
import MilanLogin from "./components/login/Login";
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import MilanMenu from "./components/header/MilanMenu";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    secondary:'#fff',
    text:'#fff',
    error:'#c40000',
    background:"#d7dee0",
    accent: '#f1c40f',
  },
};

const navTheme = {
  dark: false,
  colors: {
    primary: '#3498db',
    background: '#d7dee0',
    card: '#fff',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const pinktheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#c40096',
    secondary:'#fff',
    backgroundColor:'#c40096',
    text:'#fff',
    error:'#c40000',
    background:"#d7dee0",
    accent: '#f1c40f',
  },
};

const navPinkTheme = {
  dark: false,
  colors: {
    primary: '#c40096',
    background: '#d7dee0',
    card: '#fff',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
    backgroundColor:'#c40096',
  },
};

export default function App() {
  const [isEducator, setisEducator] = useState(true);
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer  theme={isEducator?navTheme:navPinkTheme}>
      <PaperProvider theme={isEducator?theme:pinktheme}>
        <Stack.Navigator theme={isEducator?navTheme:navPinkTheme}>
          <Stack.Screen
            name="Register"
            component={RegisterMilan}
          ></Stack.Screen>
          <Stack.Screen name="Login" component={MilanLogin}></Stack.Screen>
          <Stack.Screen
            name="Dashboard"
            component={MilanMenu}
          ></Stack.Screen>
          <Stack.Screen name="Details" component={MilanDetails}></Stack.Screen>
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}
