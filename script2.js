var cards = ['ciri.png', 'geralt.png', 'iorweth.png', 'jaskier.png', 'triss.png', 'yen.png', 'ciri.png', 'geralt.png', 'iorweth.png', 'jaskier.png', 'triss.png', 'yen.png'];


function start(){
  var karty = "";
  for(i = 0; i < 12; i++){
    karty = karty + '<div class="karta" id="kar'+i+'"></div>';
    if((i+1)%4 == 0){
      karty = karty + '<div style="clear:both"></div>';
    }
  }
  document.getElementById('main').innerHTML = karty;
}

window.onload = start;
