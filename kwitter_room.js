
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBj1YBZyGuOcucPIkUjHo_zTzIi17Um224",
      authDomain: "kwitter-4ba2d.firebaseapp.com",
      databaseURL: "https://kwitter-4ba2d-default-rtdb.firebaseio.com",
      projectId: "kwitter-4ba2d",
      storageBucket: "kwitter-4ba2d.appspot.com",
      messagingSenderId: "653651659889",
      appId: "1:653651659889:web:460e7b33fe98c8d6569fd0"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
