function login(){

  var database = firebase.database();

  var name = document.getElementById("name").value;
  var reg = document.getElementById("email").value;



alert(name)



  if(name!=='' && reg!=='')
  {
writeUserData(name,reg,phno,email,firstpref,secondpref);
  }
  else {
      alert("Please Fill All Details");

  }



}

function writeUserData(name,reg,phno,email,firstpref,secondpref) {

  var auth = firebase.auth();


  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

  auth.signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;

        alert("Thank You for Submiting the Form " + name);
        firebase.database().ref('users/' + reg).set({
          name: name,
          regno: reg,
          phone: phno,
          email: email,
          firstpref : firstpref,
          secondpref : secondpref
        });

        //alert(token)
        alert("Data uploaded"+user)


     }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(error.code)
        console.log(error.message)
     });



}
