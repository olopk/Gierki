var cards = ['ciri.png', 'geralt.png', 'iorweth.png', 'jaskier.png', 'triss.png', 'yen.png', 'ciri.png', 'geralt.png', 'iorweth.png', 'jaskier.png', 'triss.png', 'yen.png'];
var dealtCards = [];
var c = [];

// create a hook for every div containig the cards.
for (i = 0; i < 12; i++){
    c.push(document.getElementById('kar'+i));    
}

// prepare a function to handle clickevent for every card on board.
var clicking = (el, ix, arr) => {
    el.addEventListener('click', ()=>{
        revealCard(ix);
    });
}
//mount an eventListener to every div "kar".
c.forEach(clicking);

// prepare a function that will handle the main logic of the game.
var oneVisible, flag;
oneVisible = false;
var revealCard = (nr) => {
    if (oneVisible == false){
        $('#kar'+nr).css('background-image', 'url(img2/'+dealtCards[nr]+')');
        oneVisible = true;
    }
}










function start(){
    
// under we see some plan to create the div board for the "memory cards", but for now i create them manually directly in the html.
    
  /*var karty = "";
  for(i = 0; i < 12; i++){
    karty = karty + '<div class="karta" id="kar'+i+'"></div>';
    if((i+1)%4 == 0){
      karty = karty + '<div style="clear:both"></div>';
    }
  }
  document.getElementById('main').innerHTML = karty;*/
    
    // that was a plan to randomly put the elements from the cards array into the "karty" divs.
    
    /*
    for(i = 0; i < 12; i++){
        var losowa = Math.floor(Math.random() * cards.length);
        document.getElementById('kar'+i).style.backgroundImage = 'url(./img2/'+cards[losowa]+')';
        cards.splice(losowa, 1);
    }*/
    
    // but finally i decided to create a new array that contains the randomly selected elements from the cards array, and then put them into the "karty" divs.
    
    for(i = 0; i < 12; i++){
        var losowa = Math.floor(Math.random() * cards.length);
        dealtCards.push(cards[losowa]);
        cards.splice(losowa, 1);
    }
    
}



window.onload = start;

