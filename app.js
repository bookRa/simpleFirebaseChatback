var config = {
  apiKey: "AIzaSyBCVy7QIFCrTOgnHrHPj2Zy8RtKRa4-NLA",
  authDomain: "chatback-d00f9.firebaseapp.com",
  databaseURL: "https://chatback-d00f9.firebaseio.com",
  projectId: "chatback-d00f9",
  storageBucket: "",
  messagingSenderId: "165444001038"
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
