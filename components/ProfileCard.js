import React from 'react';
import { View, Image, Text } from 'react-native';

export default function ProfileCard({ name, age, image }) {
  return (
<View className="bg-white rounded-2xl p-6 items-center w-full max-w-xs" style={{ elevation: 5 }}>
<Image source={image} className="w-32 h-32 rounded-full mb-4" />
      <Text className="text-xl font-bold text-gray-800 text-center">{name}</Text>
      <Text className="text-gray-600 mt-2">Edad: {age}</Text>
    </View>
  );
}
