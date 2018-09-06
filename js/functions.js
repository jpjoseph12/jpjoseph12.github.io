function open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
function close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}
function validate(){
  var element = document.getElementById("")

  var x = document.forms["form"]["Name"]["Email"]["Message"].value;
  if (x == ""){
    alert("Must fill the empty spaces within the form.")
  }
}
