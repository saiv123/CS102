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
    if(String.fromCharCode(keycode) == 'P'){
      getRandLink();
    }
    window.alert(String.fromCharCode(keycode));
  }
}

function getRandLink() {
  //add stuff to get number of entries in a json file, then randomely get a entry
  var datas = JSON.parse(websites);
  console.log("number of entries in json"+datas.length);

  //random number gen depending on the number of entries in the data file
  var index = Math.floor(Math.random()*datas.length);
  var urlOut = datas[index].url
  console.log("index for the url" + index);
  console.log("output of the url" + urlOut);
  window.location.replace(urlOut);
}
