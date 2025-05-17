import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function MenuButton({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Menu</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1D3D47',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    margin: 10,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});