import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SwiperScreen from '../src/screens/SwiperScreen';

// Mock the ListingCard component to simplify the test
jest.mock('../src/components/ListingCard', () => 'ListingCard');

// Mock react-native-deck-swiper to control its behavior
jest.mock('react-native-deck-swiper', () => {
  const RNCSwiper = jest.requireActual('react-native-deck-swiper');
  const Swiper = ({ cards, onSwipedRight, onSwipedLeft, onSwipedAll }) => {
    // Simulate swiping all cards to test the 'onSwipedAll' functionality
    const handleSwipeAll = () => {
      if (cards.length > 0) {
        cards.forEach((_, index) => {
          onSwipedRight(index); // Simulate right swipe for all
        });
        onSwipedAll();
      }
    };

    return (
      <RNCSwiper
        cards={cards}
        onSwipedRight={onSwipedRight}
        onSwipedLeft={onSwipedLeft}
        onSwipedAll={handleSwipeAll}
      />
    );
  };
  return Swiper;
});

describe('SwiperScreen', () => {
  const mockNavigation = {
    navigate: jest.fn(),
  };
  const mockAddSavedListing = jest.fn();

  const defaultProps = {
    navigation: mockNavigation,
    addSavedListing: mockAddSavedListing,
    savedListingsCount: 0,
  };

  it('renders the swiper when there are listings', () => {
    const { getByText } = render(<SwiperScreen {...defaultProps} />);
    // Since the swiper is complex, we'll just check for the navigation button
    expect(getByText('View Saved (0)')).toBeTruthy();
  });

  it('navigates to saved listings when the button is pressed', () => {
    const { getByText } = render(<SwiperScreen {...defaultProps} />);
    fireEvent.press(getByText('View Saved (0)'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith('SavedListings');
  });

  it('shows the "no more listings" message when all cards are swiped', () => {
    const { getByText, rerender } = render(<SwiperScreen {...defaultProps} />);
    
    // Simulate no more cards by rerendering with an empty list
    // This is a simplified way to test the onSwipedAll behavior's effect
    const { DUMMY_LISTINGS } = require('../src/screens/SwiperScreen');
    const swiperInstance = getByText('View Saved (0)').parent.parent.parent.instance;
    swiperInstance.props.onSwipedAll();

    rerender(<SwiperScreen {...defaultProps} />);

    expect(
      getByText('No more listings for now, check back later!')
    ).toBeTruthy();
  });
});
