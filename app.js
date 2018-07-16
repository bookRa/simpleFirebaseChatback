var config = {
  apiKey: "YOUR OWN",
  authDomain: "YOUR OWN",
  databaseURL: "YOUR OWN",
  projectId: "YOUR OWN",
  storageBucket: "",
  messagingSenderId: "YOUR OWN"
};
firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(user => {
  var name;
  console.log("Hello World");
  if (user) {
    name = user.email;
  } else {
    name = "Anonymous Guest";
  }
  document.getElementById("userName").innerText = name;
});
