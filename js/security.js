document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', keyredirect)
function keyredirect(e) {
  var keycode = e.keyCode;

  if(keycode>=112 && keycode<=123){
    if(event.keyCode == 123){
      return false;
    }else{
      // do something stupid
    }
  }else{
    window.alert(String.fromCharCode(keycode));
  }
}
