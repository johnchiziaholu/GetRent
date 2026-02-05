
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import ListingCard from './src/components/ListingCard';

// Sample data for the listings
const listings = [
  { id: 1, rent: 1200, size: 75, city: 'Berlin', imageUri: 'https://via.placeholder.com/350x500.png?text=Apartment+1' },
  { id: 2, rent: 950, size: 60, city: 'Munich', imageUri: 'https://via.placeholder.com/350x500.png?text=Apartment+2' },
  { id: 3, rent: 800, size: 50, city: 'Hamburg', imageUri: 'https://via.placeholder.com/350x500.png?text=Apartment+3' },
  { id: 4, rent: 1500, size: 100, city: 'Frankfurt', imageUri: 'https://via.placeholder.com/350x500.png?text=Apartment+4' },
];

const App = () => {
  return (
    <View style={styles.container}>
      <Swiper
        cards={listings}
        renderCard={(card) => <ListingCard card={card} />}
        onSwipedLeft={(cardIndex) => console.log('Swiped Left on:', listings[cardIndex].id)}
        onSwipedRight={(cardIndex) => console.log('Swiped Right (Saved):', listings[cardIndex].id)}
        onSwipedAll={() => console.log('No more cards')}
        cardIndex={0}
        backgroundColor={'#f2f2f2'}
        stackSize={3}
        stackSeparation={15}
        overlayLabels={{
          left: {
            title: 'NOPE',
            style: {
              label: {
                backgroundColor: '#FF5A5F',
                borderColor: '#FF5A5F',
                color: 'white',
                borderWidth: 1,
                fontSize: 24
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
                marginTop: 30,
                marginLeft: -30
              }
            }
          },
          right: {
            title: 'LIKE',
            style: {
              label: {
                backgroundColor: '#4CAF50',
                borderColor: '#4CAF50',
                color: 'white',
                borderWidth: 1,
                fontSize: 24
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginTop: 30,
                marginLeft: 30
              }
            }
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});

export default App;
