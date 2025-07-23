import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function InfoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Información Básica sobre React Native</Text>
      <Text style={styles.text}>
        React Native es un framework de desarrollo móvil que permite crear apps nativas usando JavaScript y React.
      </Text>
      <Button title="Ver Mi Card" onPress={() => navigation.navigate('Card')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, marginBottom: 20 },
});
