function validateForm() {
  if (document.forms[0].email.value == "") {
    alert("Please enter an e-mail address.");
    return false;
  }
  return true;
}
