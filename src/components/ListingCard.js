import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ListingCard = ({ card }) => (
  <View style={styles.card}>
    <ImageBackground
      source={{ uri: card.imageUri }}
      style={styles.image}
      imageStyle={{ borderRadius: 15 }}>
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={styles.gradient}>
        <View style={styles.overlay}>
          <Text style={styles.rent}>{`€${card.rent}`}</Text>
          <Text style={styles.details}>{`${card.size} sqm - ${card.city}`}</Text>
          <Text style={styles.company}>{card.companyName}</Text>
        </View>
      </LinearGradient>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  gradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    borderRadius: 15,
  },
  overlay: {
    padding: 20,
  },
  rent: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  details: {
    color: '#FFF',
    fontSize: 20,
    marginBottom: 5,
  },
  company: {
    color: '#FFF',
    fontSize: 18,
    fontStyle: 'italic',
  },
});

export default ListingCard;
