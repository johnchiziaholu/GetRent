import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
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
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>{'< Back'}</Text>
        </TouchableOpacity>
        <Logo />
        <View style={{ width: 60 }} />{/* Spacer to balance the header */}
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 18,
    color: '#007AFF',
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
