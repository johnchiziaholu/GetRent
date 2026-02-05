# SwipeRent Application Specifications

This document outlines the functional specifications for the SwipeRent mobile application in the form of user stories.

## 1. Core Features: Listing Discovery

### 1.1. View Rental Listings
- **As a user, I want to see a stack of rental property cards one at a time, so I can focus on one property at a time.**
  - *Acceptance Criteria:*
    - The main screen displays a stack of `ListingCard` components.
    - Only the top card in the stack is fully visible and interactive.
    - Each card displays a primary photo, rent, size, and city.

### 1.2. Swipe Actions
- **As a user, I want to swipe right on a listing to save it to my "liked" list, so I can review it later.**
- **As a user, I want to swipe left on a listing to discard it, so I don't see it again.**
  - *Acceptance Criteria:*
    - Swiping the top card right removes it from the stack and adds it to a saved list.
    - Swiping the top card left removes it from the stack permanently for the session.
    - A smooth animation accompanies the swipe action.
    - The next card in the stack becomes visible and interactive after a swipe.

### 1.3. No More Listings
- **As a user, I want to see a clear message when I have viewed all available listings, so I know I'm up to date.**
  - *Acceptance Criteria:*
    - When the stack of cards is empty, a message like "No more listings for now, check back later!" is displayed.

## 2. Saved Listings

### 2.1. View Saved Listings
- **As a user, I want to access a separate screen to view all the listings I have swiped right on, so I can easily find the properties I'm interested in.**
  - *Acceptance Criteria:*
    - A navigation element (e.g., a tab or button) takes the user to a "Saved Listings" screen.
    - The "Saved Listings" screen displays a grid or list of all properties the user has liked.
    - Each item in the list is a summary of the property and is tappable.

### 2.2. Remove a Saved Listing
- **As a user, I want to be able to remove a listing from my saved list, so I can curate my choices.**
  - *Acceptance Criteria:*
    - Users can remove a property from the saved listings screen (e.g., via a button or a swipe action).

## 3. Listing Details

### 3.1. View Detailed Information
- **As a user, I want to tap on a card (either in the main stack or on the saved list) to view more detailed information about the property.**
  - *Acceptance Criteria:*
    - Tapping a card opens a detailed view.
    - The detailed view includes:
      - A gallery of multiple photos.
      - A full description of the property.
      - Key details (e.g., number of rooms, amenities, address/map).
      - Contact information for the landlord or agency.

## 4. Future Features (V2)

### 4.1. User Authentication
- **As a user, I want to create an account and log in, so that my saved listings are persisted across sessions and devices.**

### 4.2. Filtering
- **As a user, I want to filter the listings based on criteria such as city, price range, and property size, so I can find relevant properties more efficiently.**
