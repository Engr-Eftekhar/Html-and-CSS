var email = document.forms["form"]["email"].value;
var alamat = document.forms["form"]["password"].value;
if (email == "admin@example.com" && password == "12345") {
  alert("Login Successful!");
} else {
  alert("The email or password you entered is wrong!");
  return false;
}
