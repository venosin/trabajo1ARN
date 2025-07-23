import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import InfoScreen from './screens/InfoScreen';
import CardScreen from './screens/CardScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Bienvenido' }} />
        <Stack.Screen name="Info" component={InfoScreen} options={{ title: 'Información' }} />
        <Stack.Screen name="Card" component={CardScreen} options={{ title: 'Mi Perfil' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}