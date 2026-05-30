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



