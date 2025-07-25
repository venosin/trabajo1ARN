import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/stev.png')} style={styles.image} />
      <Text style={styles.title}>¡Hola, Daniel Steven!</Text>
      <Text style={styles.subtitle}>Bienvenido a tu app de presentación personal.</Text>
      <Text style={styles.description}>Explora tu perfil, aprende sobre React Native y más.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#f5faff',
  },
  image: {
    width: 120, height: 120, borderRadius: 60, marginBottom: 20,
  },
  title: {
    fontSize: 28, fontWeight: 'bold', color: '#2196F3', marginBottom: 10,
  },
  subtitle: {
    fontSize: 18, color: '#333', marginBottom: 10, textAlign: 'center',
  },
  description: {
    fontSize: 14, color: '#666', textAlign: 'center',
  },
});
