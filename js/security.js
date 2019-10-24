document.addEventListener('contextmenu', event => event.preventDefault());

//this was the code to disable all key function on the website

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
    getRandLink();
  }
}

function getRandLink() {
  //add stuff to get number of entries in a json file, then randomely get a entry
}
