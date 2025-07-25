import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import InfoScreen from './screens/InfoScreen';
import CardScreen from './screens/CardScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = route.name === 'Inicio'
              ? (focused ? 'home' : 'home-outline')
              : route.name === 'Información'
                ? (focused ? 'information-circle' : 'information-circle-outline')
                : (focused ? 'person' : 'person-outline');
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2563EB',
          tabBarInactiveTintColor: '#64748B',
          tabBarStyle: 'bg-white border-t border-gray-200 h-16',
          tabBarLabelStyle: 'text-xs',
        })}
      >
        <Tab.Screen name="Inicio" component={HomeScreen} />
        <Tab.Screen name="Información" component={InfoScreen} />
        <Tab.Screen name="Perfil" component={CardScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
