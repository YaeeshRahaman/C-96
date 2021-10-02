
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDgeum5oikkUOxRMgGE4qv1fLMrCHj-6Tw",
    authDomain: "classtest-82d91.firebaseapp.com",
    databaseURL: "https://classtest-82d91-default-rtdb.firebaseio.com",
    projectId: "classtest-82d91",
    storageBucket: "classtest-82d91.appspot.com",
    messagingSenderId: "271908013362",
    appId: "1:271908013362:web:a48245e0bc3378c5f8832b"
  };
  
  // Initialize Firebase
firebase.initialiseApp(firebasecofig);
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({ 
        purpose: "adding user"
    });
  }