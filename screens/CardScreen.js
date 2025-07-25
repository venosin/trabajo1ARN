import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ProfileCard
        name="Daniel Steven Palacios Flores"
        age={18}
        image={require('../assets/stev.png')}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Inicio')}>
        <Ionicons name="arrow-back" size={20} color="#fff" />
        <Text style={styles.buttonText}> Volver a Inicio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor: '#f0f8ff' },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 20,
    elevation: 2,
  },
  buttonText: {
    color: '#fff', fontSize: 16, fontWeight: 'bold',
  },
});
