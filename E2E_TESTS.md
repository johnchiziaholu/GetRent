# SwipeRent End-to-End (E2E) Test Cases

This document outlines the end-to-end test cases for the SwipeRent application, based on the functional specifications. These tests are designed to simulate real user scenarios.

---

### Test Suite 1: Core Listing Discovery and Saving

#### Test Case 1.1: Successfully Save a Listing
- **Objective:** Verify that a user can swipe right on a listing, view it in their saved list, and see its details.
- **Steps:**
  1. Launch the application.
  2. **Assert:** The main screen is displayed with a stack of rental listing cards.
  3. Swipe right on the top-most listing card.
  4. **Assert:** The card animates off the screen to the right, and the next listing card is displayed.
  5. Navigate to the "Saved Listings" screen.
  6. **Assert:** The "Saved Listings" screen is displayed.
  7. **Assert:** The listing that was swiped right on is present in the saved listings.
  8. Tap on the saved listing.
  9. **Assert:** The "Listing Details" screen is displayed with comprehensive information about the property.

#### Test Case 1.2: Discard a Listing
- **Objective:** Verify that a user can swipe left to discard a listing and that it does not appear in the saved list.
- **Steps:**
  1. Launch the application.
  2. **Assert:** The main screen is displayed with a stack of rental listing cards.
  3. Note the details of the top-most card (e.g., address or rent).
  4. Swipe left on the top-most listing card.
  5. **Assert:** The card animates off the screen to the left, and the next listing card is displayed.
  6. Navigate to the "Saved Listings" screen.
  7. **Assert:** The "Saved Listings" screen is displayed.
  8. **Assert:** The listing that was swiped left on is **not** present in the saved listings.

---

### Test Suite 2: Edge Cases and Empty States

#### Test Case 2.1: Run Out of Listings
- **Objective:** Verify that a message is displayed when all listings have been viewed.
- **Steps:**
  1. Launch the application.
  2. **Assert:** The main screen is displayed with a stack of rental listing cards.
  3. Continuously swipe left or right on all available listing cards until the stack is empty.
  4. **Assert:** A message is displayed on the screen indicating that there are no more listings (e.g., "No more listings for now, check back later!").

---

### Test Suite 3: Saved Listings Management

#### Test Case 3.1: Remove a Listing from Saved List
- **Objective:** Verify that a user can remove a listing from their saved list.
- **Prerequisite:** At least one listing is already saved.
- **Steps:**
  1. Navigate to the "Saved Listings" screen.
  2. **Assert:** The "Saved Listings" screen is displayed with at least one saved listing.
  3. Perform the action to remove a specific listing (e.g., tap a "delete" icon or swipe to delete).
  4. **Assert:** The listing is removed from the "Saved Listings" screen.
  5. Navigate away from and back to the "Saved Listings" screen.
  6. **Assert:** The removed listing is still not present, confirming the deletion was persistent.

---
