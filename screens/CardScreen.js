import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import ProfileCard from '../components/ProfileCard';

export default function CardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ProfileCard
        name="Daniel Steven Palacios Flores"
        age={18}
        image="https://i.pravatar.cc/300" // Puedes poner tu imagen real
      />
      <Button title="Volver a Inicio" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
});
