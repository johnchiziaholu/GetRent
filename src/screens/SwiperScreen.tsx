import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import ListingCard from '../components/ListingCard';
import Logo from '../components/Logo';

interface Listing {
  id: string;
  imageUri: string;
  rent: number;
  size: number;
  city: string;
  companyName: string;
}

// Define the props for the screen, including navigation and state logic
interface SwiperScreenProps {
  addSavedListing: (listing: Listing) => void;
  listings: Listing[];
}

export const DUMMY_LISTINGS: Listing[] = [
  {
    id: '1',
    imageUri: 'https://static.vecteezy.com/system/resources/previews/022/456/153/large_2x/beautiful-and-elegant-interior-of-a-modern-and-cozy-apartment-photo.jpg',
    rent: 1200,
    size: 75,
    city: 'Berlin',
    companyName: 'Urban Homes',
  },
  {
    id: '2',
    imageUri: 'https://img.freepik.com/free-photo/elegant-apartment-with-modern-interior-design-featuring-plush-sofa-curved-coffee-table-generated-by-ai_188544-24534.jpg',
    rent: 1500,
    size: 90,
    city: 'Munich',
    companyName: 'City Apartments',
  },
  {
    id: '3',
    imageUri: 'https://static.vecteezy.com/system/resources/previews/022/456/153/large_2x/beautiful-and-elegant-interior-of-a-modern-and-cozy-apartment-photo.jpg',
    rent: 950,
    size: 60,
    city: 'Hamburg',
    companyName: 'Harbor Rentals',
  },
  {
    id: '4',
    imageUri: 'https://img.freepik.com/free-photo/elegant-apartment-with-modern-interior-design-featuring-plush-sofa-curved-coffee-table-generated-by-ai_188544-24534.jpg',
    rent: 1800,
    size: 110,
    city: 'Frankfurt',
    companyName: 'Mainhattan Properties',
  },
];

const SwiperScreen: React.FC<SwiperScreenProps> = ({
  addSavedListing,
  listings: initialListings,
}) => {
  const [listings, setListings] = useState<Listing[]>(initialListings);

  const onSwipedRight = (cardIndex: number) => {
    const swipedListing = listings[cardIndex];
    if (swipedListing) {
      addSavedListing(swipedListing);
    }
  };

  const onSwipedLeft = (cardIndex: number) => {
    const swipedListing = listings[cardIndex];
    if (swipedListing) {
      console.log('Discarded listing:', swipedListing.city);
    }
  };

  const onSwipedAll = () => {
    setListings([]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>

      {listings.length > 0 ? (
        <Swiper
          cards={listings}
          renderCard={(card: Listing) => {
            return <ListingCard card={card} />;
          }}
          onSwipedRight={onSwipedRight}
          onSwipedLeft={onSwipedLeft}
          onSwipedAll={onSwipedAll}
          stackSize={3}
          stackSeparation={15}
          cardIndex={0}
          backgroundColor="transparent"
          containerStyle={styles.swiperContainer}
          overlayLabels={{
            left: {
              title: 'NOPE',
              style: {
                label: {
                  backgroundColor: 'red',
                  borderColor: 'red',
                  color: 'white',
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: -30,
                },
              },
            },
            right: {
              title: 'LIKE',
              style: {
                label: {
                  backgroundColor: 'green',
                  borderColor: 'green',
                  color: 'white',
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: 30,
                },
              },
            },
          }}
        />
      ) : (
        <View style={styles.noListingsContainer}>
          <Text style={styles.noListingsText}>
            No more listings for now, check back later!
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    width: '100%',
  },
  swiperContainer: {
    flex: 1,
    marginTop: 0,
  },
  noListingsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noListingsText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#888',
  },
});

export default SwiperScreen;
