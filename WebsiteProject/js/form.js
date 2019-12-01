function validate() {
  alert("Form submited.");

  document.forms[0].name.value = '';
  document.forms[0].email.value = '';
  document.forms[0].textarea.value = '';

  return false;
}
