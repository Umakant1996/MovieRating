var firebaseConfig = {
  apiKey: "AIzaSyAofDlNSK1b7MkUdTQRDKRwQr7qzII9GQU",
  authDomain: "movierating-28987.firebaseapp.com",
  databaseURL: "https://movierating-28987-default-rtdb.firebaseio.com",
  projectId: "movierating-28987",
  storageBucket: "movierating-28987.appspot.com",
  messagingSenderId: "154911075444",
  appId: "1:154911075444:web:6220d8894e35905d677521",
  measurementId: "G-Y9LKEWM58X"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
function signUp() {



  var emailV = document.getElementById("email").value;
  var passwordV = document.getElementById("password").value;

  if (validate()) {

  
     


            var postListRef = firebase.database().ref("Login");
            var newPostRef = postListRef.push();
            newPostRef.set({
              email: emailV,
              password: passwordV
              
              // ...
            });
          
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";

            alert("Sign Up Successful");
       
     


  
    //   window.location="rateus.html";




  }



  




}

function signIn() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));


  var emailV = document.getElementById("email").value;
  var passwordV = document.getElementById("password").value;

  firebase.database().ref("Login").on('value', function (snap) {
    snap.forEach(function (childNodes) {

      var emailId = childNodes.val().email;
      var pass = childNodes.val().password;
      if (emailV == emailId && passwordV == pass) {
        window.location = "rateus.html";

      }



    });


  });

}

function validate() {
  var email = document.getElementById("email").value;
  var regx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\.-]+).([a-z]{2,20})(.[a-z]{2,8})?$/;
  if (regx.test(email)) {

    document.getElementById("lblValidation").innerHTML = "Valid";
    document.getElementById("lblValidation").style.visibility = "visible";
    document.getElementById("lblValidation").style.color = "green";
    return true;

  }
  else {

    document.getElementById("lblValidation").innerHTML = "In Valid";
    document.getElementById("lblValidation").style.visibility = "visible";
    document.getElementById("lblValidation").style.color = "red";
    return false;
  }

}