# TESTING

This file describes the testing carried out for each project requirement.

## The website contains a drop-down with five users

I verified that the user selector is populated from the data returned by `getUserIds()` in `storage.js`. When the application loads, the drop-down displays five options: User 1 through User 5.

## Selecting a user displays that user's bookmarks

I changed the selected user several times and checked that the bookmark list updates accordingly. The correct bookmarks are displayed for the currently selected user through the `displayBookmarks(userId)` function.

## A message is shown when a user has no bookmarks

To test this requirement, I selected a user with no saved bookmarks and confirmed that a message appears informing the user that no bookmarks have been created yet.

## Bookmarks are displayed in reverse chronological order

I created multiple bookmarks for the same user and checked that the newest bookmark appears at the top of the list. This behaviour is achieved by sorting bookmarks according to their creation timestamp.

## Each bookmark displays a title, description and timestamp

After adding bookmarks, I confirmed that every bookmark card shows:

* A title
* A description
* The date and time it was created

These values are rendered by `createBookmarkElement()`.

## Bookmark titles link to their URLs

I clicked several bookmark titles and verified that each one opens the correct web page in a new browser tab.

## The copy button copies the bookmark URL

I tested the copy functionality by clicking the "Copy URL" button and pasting the copied content into a text editor to verify that the correct URL was copied. I also opened the browser's Developer Tools console and confirmed that a "URL copied" message was logged each time the button was clicked, indicating that the copy action was successfully executed.
## Like counters work independently and persist after refresh

I increased the like count on multiple bookmarks and confirmed that each bookmark maintained its own count. After refreshing the page, the counts remained unchanged, showing that the data was successfully saved and restored.

## The form contains inputs for URL, title and description

I checked that the form includes fields for:

* URL
* Title
* Description

I also confirmed that bookmarks can be submitted using both the submit button and the Enter key.

## New bookmarks are added only for the selected user

I created a bookmark while one user was selected, then switched to a different user. The bookmark only appeared for the user who created it and was not visible for other users.

## The bookmark list updates immediately after submission

After submitting a new bookmark, I confirmed that it appears in the list straight away without requiring a page refresh.

## The website achieves 100 accessibility in Lighthouse

I ran Lighthouse audits in Chrome DevTools and verified that the Accessibility score was 100. Testing was performed both when bookmarks existed and when the selected user had no bookmarks.

## Unit tests for a non-trivial function

Unit tests are located in example.test.js.

The tests cover key application logic, including:

Correct bookmark creation and storage — Tested using unit tests in example.test.js by checking that addBookmark produces the correct object shape and that data is written to mocked localStorage.

URL validation behaviour — Tested using unit tests in example.test.js with multiple valid and invalid URL cases to ensure the validator accepts only proper web URLs.

ID generation behaviour — Tested using unit tests in example.test.js by verifying that generateId returns a string, produces unique values on repeated calls, and matches the expected base‑36 format.