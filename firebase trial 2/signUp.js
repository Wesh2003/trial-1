function signUp () {
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    alert ("Success") 
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert (errorMessage)
    // ..
  });




}