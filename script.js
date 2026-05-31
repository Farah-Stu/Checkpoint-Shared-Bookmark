// This is a placeholder file which shows how you can access functions defined in other files.
// It can be loaded into index.html.
// You can delete the contents of the file once you have understood how it works.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

import { getUserIds, getData, clearData} from "./storage.js";

// DOM Elements
const users = getUserIds;

const userSelector = document.getElementById("user-selector");
const bookmarkForm = document.getElementById("book-form");
const bookmarkList = document.getElementById("bookmark-list");
const titleInput = document.getElementById("title");
const urlInput = document.getElementById("description");
const descriptionInput= document.getElementById("description");

// populate the dropdown

userSelector.addEventListener("change", ()=> {
  const currentUserId = userSelector.value;

  if(currentUserId === "Select the user"){
    bookmarkList.innerHTML = "";

  }else{
    displayBookmarks(currentUserId);
  }

});

function displayBookmarks(userId){

  const bookmarks = getData(currentUserId)


}



// window.onload = function () {
//   const users = getUserIds();
//   document.querySelector("body").innerText = `There are ${users.length} users`;
// };
let myBookmarks = [];

function renderBookmarks() {
  const container = document.getElementById('bookmarks-container');
  container.innerHTML = ""; // Clear the container first

  
  if (myBookmarks.length === 0) {
    // Create a message element if the list is empty
    const emptyMessage = document.createElement('p');
    emptyMessage.className = 'no-bookmarks-message';
    emptyMessage.textContent = "There are no bookmarks for this user.";

    container.appendChild(emptyMessage);
    return; // Stop the function here so it doesn't look for bookmarks
  }
  // Pull the latest saved likes object state (defaults to empty object if nothing saved)

  const savedLikesData = getData(STORAGE_USER_ID) || {};
  myBookmarks.forEach(bookmark => {
    // Get the saved likes for this bookmark ID, default to 0
    const currentLikes = savedLikesData[bookmark.id] || 0;
    

    // Create a wrapper div for the card
    const card = document.createElement('div');
    card.className = 'bookmark-card';

    // Build the inner HTML template including your copy and like buttons
    card.innerHTML = `
            <a href="${bookmark.url}" target="_blank"><strong>${bookmark.title}</strong></a>
            <div class="actions">
                <button class="copy-btn">📋 Copy URL</button>
                <button class="like-btn">❤️ Like (<span class="like-count">${currentLikes}</span>)</button>
            </div>
        `;

    // --- BUTTON 1 LOGIC: Copy to Clipboard ---
    const copyBtn = card.querySelector('.copy-btn');
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(bookmark.url)
        .then(() => {
          const originalText = copyBtn.textContent;
          copyBtn.textContent = "✅ Copied!";
          setTimeout(() => copyBtn.textContent = originalText, 1500);
        });
    });

    // --- BUTTON 2 LOGIC: Like Counter & Storage Sync ---
    const likeBtn = card.querySelector('.like-btn');
    const countSpan = card.querySelector('.like-count');

    likeBtn.addEventListener('click', () => {
      // Get fresh data state from local storage
      const currentSavedLikes = getData(STORAGE_USER_ID) || {};

      // Increment the counter
      const newLikes = (currentSavedLikes[bookmark.id] || 0) + 1;

      // Update UI
      countSpan.textContent = newLikes;

      // Update local storage object
      currentSavedLikes[bookmark.id] = newLikes;
      setData(STORAGE_USER_ID, currentSavedLikes);
    });

    // Append the finished card onto your web page container
    
    container.appendChild(card);
  });
}

// Run the function when the script loads
renderBookmarks();
