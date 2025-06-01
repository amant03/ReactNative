import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import HomeScreen from './src/screens/HomeScreen';
import NewsScreen from './src/screens/NewsScreen';

const Stack = createStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Home: { userName: string };
  News: { topic: string };
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} initialParams={{ userName: '' }} />
        <Stack.Screen name="News" component={NewsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;