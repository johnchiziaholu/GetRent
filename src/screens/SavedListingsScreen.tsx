import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from 'react-native';
import ListingCard from '../components/ListingCard';
import Logo from '../components/Logo';

// Define the Listing type matching SwiperScreen
interface Listing {
  id: string;
  imageUri: string;
  rent: number;
  size: number;
  city: string;
  companyName: string;
}

// Define the props for the screen
interface SavedListingsScreenProps {
  navigation: any; // From React Navigation
  route: {
    params: {
      savedListings: Listing[];
    };
  };
}

const SavedListingsScreen: React.FC<SavedListingsScreenProps> = ({
  route,
  navigation,
}) => {
  const { savedListings } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>

      {savedListings.length > 0 ? (
        <FlatList
          data={savedListings}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <ListingCard card={item} />
            </View>
          )}
          contentContainerStyle={styles.list}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>You have no saved listings yet.</Text>
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
    paddingVertical: 5,
  },
  list: {
    paddingHorizontal: 10,
  },
  cardContainer: {
    height: 400,
    marginBottom: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 20,
    color: '#888',
  },
});

export default SavedListingsScreen;
