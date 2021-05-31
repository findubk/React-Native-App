import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
import About from "../screens/About";
import Header from "../shared/header";

const AboutStack = createStackNavigator();
export default function myStacks({navigation}) {
  return (
    <AboutStack.Navigator initialRouteName="GameZone" headerMode="screen">
      <AboutStack.Screen
        name="About"
        component={About}
        options={{
            headerTitle: () => <Header navigation={navigation} title='About Game Zone'/>                           
        }}
      />
    </AboutStack.Navigator>
  );
}