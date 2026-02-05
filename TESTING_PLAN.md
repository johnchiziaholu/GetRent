# SwipeRent Application Testing Plan

This document provides a comprehensive set of test cases for the SwipeRent application, covering unit, component, and integration testing.

---

### **Part 1: Component Tests**

#### **1.1. `ListingCard` Component (`src/components/ListingCard.js`)**

-   **Objective:** Ensure the `ListingCard` component renders correctly and displays the right information based on the props it receives.

-   **Test Cases:**
    -   **TC-C1.1:** It should render the component without crashing.
    -   **TC-C1.2:** It should correctly display the property image when a valid `imageUri` is provided.
    -   **TC-C1.3:** It should correctly display the rent, size, and city passed in the `card` prop.
    -   **TC-C1.4:** It should handle missing or null props gracefully without crashing (e.g., if `card` is missing details).

---

#### **1.2. Main Swiper Screen (e.g., `SwiperScreen.tsx`)**

-   **Objective:** Test the core swiping functionality and state management of the main screen.

-   **Test Cases:**
    -   **TC-C2.1:** It should render a `Swiper` component with a deck of `ListingCard` components.
    -   **TC-C2.2:** It should fire the `onSwipedRight` event when a card is swiped right.
    -   **TC-C2.3:** It should fire the `onSwipedLeft` event when a card is swiped left.
    -   **TC-C2.4:** The `onSwipedRight` event handler should add the card's ID to a "saved" list in the component's state.
    -   **TC-C2.5:** The `onSwipedLeft` event handler should correctly discard the card.
    -   **TC-C2.6:** When the deck of cards is exhausted (`onSwipedAll`), it should display a "No more listings" message.
    -   **TC-C2.7:** It should handle an empty initial list of listings by immediately showing the "No more listings" message.

---

#### **1.3. Saved Listings Screen (e.g., `SavedListingsScreen.tsx`)**

-   **Objective:** Ensure the screen correctly displays the list of saved properties.

-   **Test Cases:**
    -   **TC-C3.1:** It should render a list of `ListingCard` components based on the saved listings data passed to it.
    -   **TC-C3.2:** If there are no saved listings, it should display an appropriate message (e.g., "You have no saved listings yet.").
    -   **TC-C3.3:** It should correctly handle the removal of a listing from the list.

---

#### **1.4. Listing Details Screen (e.g., `ListingDetailsScreen.tsx`)**

-   **Objective:** Verify the detailed view of a single property.

-   **Test Cases:**
    -   **TC-C4.1:** It should render all the details of a listing, including the image gallery, description, and amenities.
    -   **TC-C4.2:** It should display a "Back" button to return to the previous screen.

---

### **Part 2: Integration Tests**

#### **2.1. Full Swipe-to-Save Flow**

-   **Objective:** Test the integration between the `SwiperScreen` and the `SavedListingsScreen`.

-   **Test Scenario:**
    -   **IT-1.1:**
        1.  Render the main app with navigation set up.
        2.  On the `SwiperScreen`, simulate a right swipe on the first card.
        3.  Navigate to the `SavedListingsScreen`.
        4.  **Assert:** The `SavedListingsScreen` now contains the card that was swiped right on.
        5.  Navigate back to the `SwiperScreen`.
        6.  **Assert:** The card that was swiped on is no longer in the deck.

---

### **Part 3: Unit Tests**

-   **Objective:** Test individual business logic functions. While there are none yet, we can anticipate needing them.

#### **3.1. Data Transformation / Utility Functions (e.g., `utils.ts`)**

-   **Potential Test Cases:**
    -   **UT-1.1:** A function that formats currency should correctly format different numbers into the desired string format (e.g., `formatCurrency(1200)` -> `"€1,200"`).
    -   **UT-1.2:** A function that filters listings based on user criteria should return the correct subset of listings.
