import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileCard({ name, age, image }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.age}>Edad: {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  age: {
    fontSize: 16,
    color: '#555',
  },
});
