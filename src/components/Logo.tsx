import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Logo = () => (
  <View style={styles.container}>
    <Text style={styles.logoText}>
      <Text style={styles.swipeText}>Swipe</Text>
      <Text style={styles.rentText}>Rent</Text>
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  swipeText: {
    color: '#007AFF', // Blue color for "Swipe"
  },
  rentText: {
    color: '#333', // A dark grey for "Rent"
  },
});

export default Logo;
