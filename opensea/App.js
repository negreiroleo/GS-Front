import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './src/pages/Welcome';
import LoginScreen from './src/pages/Login';
import NewUserScreen from './src/pages/NewUser';
import HomePage from './src/pages/Home';
import Form from './src/pages/Form';
import Requests from './src/pages/Requests';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="NewUser" component={NewUserScreen} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Requests" component={Requests} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
