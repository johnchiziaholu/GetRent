
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ListingCard = ({ card }) => (
  <View style={styles.card}>
    <Image source={{ uri: card.imageUri }} style={styles.image} />
    <View style={styles.overlay}>
      <Text style={styles.rent}>{`€${card.rent}`}</Text>
      <Text style={styles.details}>{`${card.size} sqm - ${card.city}`}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  rent: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  details: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default ListingCard;
