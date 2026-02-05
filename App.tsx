/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SwiperScreen from './src/screens/SwiperScreen';
import SavedListingsScreen from './src/screens/SavedListingsScreen';

// Define the Listing type for shared state
interface Listing {
  id: string;
  imageUri: string;
  rent: number;
  size: number;
  city: string;
  companyName: string;
}

const Stack = createNativeStackNavigator();

function App() {
  const [savedListings, setSavedListings] = useState<Listing[]>([]);

  // Function to add a listing to the saved list
  const addSavedListing = (listing: Listing) => {
    setSavedListings(prev => [...prev, listing]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Swiper">
          {props => (
            <SwiperScreen
              {...props}
              addSavedListing={addSavedListing}
              savedListingsCount={savedListings.length}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="SavedListings"
          component={SavedListingsScreen}
          initialParams={{ savedListings: savedListings }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
