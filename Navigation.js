import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import RegisterScreen from '../Screens/RegisterScreen';
import LoginScrin from '../Screens/LoginScrin';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator()

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Registro'
          component={RegisterScreen}
        />
        <Stack.Screen
          name='Login'
          component={LoginScrin}
        />
         <Stack.Screen
          name='Home'
          component={TabNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation