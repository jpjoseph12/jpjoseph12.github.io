function open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
function close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}
function showMenu(){
  document.getElementById('myOverlay').classList.toggle("show");
}
// window.onclick = function(event){
//   if (!event.target.matches('')) {
//     var dropdowns =document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i=0; i < dropdowns.length; i++){
//       var openDropdown = dropdowns[i];
//
//       if (openDropdown.classList.contains('show')){
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }
function validate(){
  console.log("hello");
  var Na = document.getElementById("Name");
  var Em = document.getElementById("Email");

  var alphaExp = /^[a-zA-Z]+$/;
  var email = /^(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})$/;

  var x = document.forms["form"];

  console.log(x[0] + x[0].value);
  for (var i = 0; i < x.length; i++) {
    if (x[i].value == "Name"){
      if(x[i].value == ""){
        console.log("empty Name");
        return false;
      }if (x[i].value != alphaExp) {
        console.log("illegal characters Name");
        return false;
        }
    } else if (x[i].value == "Email") {
      if (x[i].value == "") {
        console.log("empty Email");
        return false;
      }if (x[i].value == email) {
        console.log("illegal character email");
      }
    }
}
}

  // if (x[0].value == ""){
  //   alert("Must fill the empty spaces within the form.");
  //   console.log("empty field");
  //   return false;
  //   // if x[i].name == "Name"
  // }if (x.Name.value != alphaExp) {
  //   console.log("illegal characters being");
  //   return false;
  //   }
  //   if (x.Email.value == "") {
  //     console.log("no email");
  //     return false;
  //   }if (x.Email.value != email){
  //     console.log("illegal in email");
  //     return false;
  //   }
  // }
