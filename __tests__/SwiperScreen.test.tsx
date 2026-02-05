import React from 'react';
import { render } from '@testing-library/react-native';
import SwiperScreen from '../src/screens/SwiperScreen';

// Mock child components to isolate the SwiperScreen test
jest.mock('../src/components/ListingCard', () => 'ListingCard');
jest.mock('../src/components/Logo', () => 'Logo');
jest.mock('react-native-deck-swiper', () => 'Swiper');

describe('SwiperScreen', () => {
  const mockAddSavedListing = jest.fn();

  const defaultProps = {
    addSavedListing: mockAddSavedListing,
  };

  it('renders correctly when there are listings', () => {
    // The goal of this test is just to ensure the component doesn't crash
    // during rendering with the expected props.
    const { toJSON } = render(<SwiperScreen {...defaultProps} />);
    expect(toJSON()).toBeTruthy();
  });

  it('shows the "no more listings" message when the listings are empty', () => {
    // To test the empty state, we can mock the useState hook
    const ReactActual = jest.requireActual('react');
    jest.spyOn(ReactActual, 'useState').mockImplementation(() => [[], jest.fn()]);

    const { getByText } = render(<SwiperScreen {...defaultProps} />);

    expect(
      getByText('No more listings for now, check back later!')
    ).toBeTruthy();

    // Clean up the mock
    jest.restoreAllMocks();
  });
});
