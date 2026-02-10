import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import ListingCard from '../components/ListingCard';
import Logo from '../components/Logo';
import { useAuth } from '../context/AuthContext';

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
}) => {
  const { savedListings } = route.params;
  const { logout } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerSpacer} />
        <Logo />
        <TouchableOpacity onPress={logout} style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
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
  headerSpacer: {
    width: 60, // To balance the logout button
  },
  logoutButton: {
    padding: 10,
  },
  logoutButtonText: {
    fontSize: 16,
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
