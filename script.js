// This is a placeholder file which shows how you can access functions defined in other files.
// It can be loaded into index.html.
// You can delete the contents of the file once you have understood how it works.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

import { getUserIds, getData, clearData} from "./storage.js";

// DOM Elements
const users = getUserIds();
const userSelector = document.getElementById("user-selector");
const bookmarkForm = document.getElementById("book-form");
const bookmarkList = document.getElementById("bookmark-list");

console.log(userSelector);
// populate the dropdown

users.forEach((userId) => {
  const option = document.createElement("option");
  option.value = userId;
  option.textContent = `User ${userId}`;
  userSelector.appendChild(option);
  console.log(userSelector);

});

// handling user selection

userSelector.addEventListener("change", ()=> {
const currentUserId = userSelector.value;
console.log(currentUserId);
if(currentUserId === "Select the User"){
  bookmarkList.innerHTML = "";
}

})



