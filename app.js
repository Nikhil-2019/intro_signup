var button = document.querySelector(".button");

button.addEventListener("click", function () {
  var fname = document.querySelector("#ifname").value;
  var lname = document.querySelector("#ilname").value;
  var email = document.querySelector("#iemail").value;
  var pass = document.querySelector("#ipass").value;


  if (fname == "") {

    document.querySelector("#ifname").classList.add("wrong");
    document.querySelector("#fname").textContent = "First Name cannot be empty";
  }
  if (lname == "") {

    document.querySelector("#ilname").classList.add("wrong");
    document.querySelector("#lname").textContent = "Last Name cannot be empty";
  }
  if (email.indexOf("@") == -1) {

    document.querySelector("#iemail").classList.add("wrong");
    document.querySelector("#email").textContent = "This is not a valid Email";
  }
  if (pass == "") {

    document.querySelector("#ipass").classList.add("wrong");
    document.querySelector("#pass").textContent = "Password cannot be empty";
  }


});