import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";


const Stack = createStackNavigator()

export const AccountNavigator = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={() => (<View><Text>Account</Text></View>)} />
            <Stack.Screen name="Login" component={() => (<View><Text>Login</Text></View>)}/>

    </Stack.Navigator>
  )
}