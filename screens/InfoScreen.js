import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function InfoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>¿Qué es React Native?</Text>
      <Text style={styles.text}>
        React Native es un framework de desarrollo móvil creado por Facebook que permite construir
        aplicaciones nativas usando JavaScript y React. A diferencia de otros frameworks, no utiliza
        WebView, sino componentes nativos reales.
      </Text>
      <Button title="Ver Mi Card" onPress={() => navigation.navigate('Card')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20, backgroundColor: '#fff', flexGrow: 1,
  },
  title: {
    fontSize: 26, fontWeight: 'bold', color: '#2196F3', marginBottom: 15,
  },
  subtitle: {
    fontSize: 20, fontWeight: '600', color: '#444', marginTop: 20, marginBottom: 10,
  },
  text: {
    fontSize: 16, color: '#555', lineHeight: 22,
  },
  list: {
    fontSize: 16, color: '#555', paddingLeft: 10, marginVertical: 3,
  },
});
