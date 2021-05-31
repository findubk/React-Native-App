// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
// import Home from '../screens/Home';
// import ReviewDetails from '../screens/ReviewDetails';

// const Stack = createStackNavigator();


// export const AppNavigator = () => (
//   <NavigationContainer>
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={Home} options={{title:'Game Zone', headerStyle:{backgroundColor:'grey',height:90},headerTintColor:'#444'}}/>
//       <Stack.Screen name="Details" component={ReviewDetails} options={{title:'Review Deatail', headerStyle:{backgroundColor:'#f4511e'}}}/>
//     </Stack.Navigator>
//   </NavigationContainer>
// );



import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import Header from "../shared/header";

const HomeStack = createStackNavigator();
export default function myStacks({navigation}) {
  return (
    <HomeStack.Navigator initialRouteName="GameZone" headerMode="screen">
      <HomeStack.Screen name="GameZone" component={Home}  options={{
                headerTitle: () => <Header navigation={navigation} title='Game Zone'/>                           
            }}/>
      <HomeStack.Screen name="ReviewDetails" component={ReviewDetails} />
    </HomeStack.Navigator>
  );
}