// define the password
var haslo = "biednemu zawsze wiatr w oczy";
haslo = haslo.toUpperCase();
// empty var for the hide version of pass
var haslo1 = "";
// mistakes counter
var ile_pomylek = 0;

var litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";
// loop that prepares a hide version of pass
for (i = 0; i < haslo.length; i++)
 {
    if(haslo.charAt(i) == " ")
      haslo1 = haslo1 + " ";
    else haslo1 = haslo1 + "-";
  }
// creation of the new method, that changes the char of your choice in the string.
String.prototype.zamien = function(miejsce, znak)
{
  if(miejsce > this.length -1) return this.toString();
  else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}

// the function that checks if the chosen letter is one of the letters in the pass.
function sprawdz(nr){
  var flaga = false;

  for(i = 0; i < haslo.length; i++)
  {
    if (litery[nr] == haslo.charAt(i)) {
        haslo1 = haslo1.zamien(i, litery[nr]);
        document.getElementById('haslo').innerHTML = haslo1;
        flaga = true;
    }
  }
  if (flaga == true) {
    var element = 'lit'+ nr;
    document.getElementById(element).style.background = "green";
    document.getElementById(element).style.cursor = "default";
  }
  else {
    var element = 'lit'+ nr;
    document.getElementById(element).style.background = "red";
    document.getElementById(element).style.cursor = "default";
    document.getElementById(element).setAttribute("onclick", ";");
    ile_pomylek++;
    document.getElementById('main-left').innerHTML = '<img src="img/s'+ile_pomylek+'.jpg"/>';
  }

  if (haslo == haslo1) {
    document.getElementById('center').innerHTML = 'Tym razem Ci się udało, w nagrodę masz zdjęcie cyckow<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
    document.getElementById('main-left').innerHTML = '<img src="img/cycki.jpg"/>';

  }
  if (ile_pomylek == 9) {
    document.getElementById('center').innerHTML = 'Przegrywasz, a ja wygrywam.</br></br></br><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
  }
}




function start(){

  var kafelki = "";

  for(i = 0; i < 35; i++)
  {
    kafelki = kafelki + '<div class="kafelek" id="lit'+i+'" onclick="sprawdz('+i+')">'+litery[i]+'</div>';
    if((i+1)%7 == 0) kafelki = kafelki + '<div style="clear:both"></div>'
  }
  document.getElementById('center').innerHTML = kafelki;
  document.getElementById('haslo').innerHTML = haslo1;
}
window.onload = start;
