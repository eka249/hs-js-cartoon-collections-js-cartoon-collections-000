function dwarfRollCall(dwarves) {
  var text= "";
  for (var i=0; i<dwarves.length; i++){
    text += ((i+1) + ". " + dwarves[i] + " ");
   }
   return text.slice(0,-1)
}

function summonCaptainPlanet(planeteerCalls){
  for (var i=0; i<planeteerCalls.length; i++){
    planeteerCalls[i]= planeteerCalls[i].toUpperCase() + "!"
  }
  return planeteerCalls
}


function longPlaneteerCalls(words) {
  for (var i=0; i<words.length; i++){
    if (words[i].length >4) {
      return true}
      else {
        return false
      }
    }
  }

function findTheCheese (foods) {
  var validcheese= ["cheddar", "gouda", "camembert"];
    for (var i=0; i<validcheese.length; i++){
      if (foods.indexOf(validcheese[i])> -1){
        return validcheese[i];
        break;
      }
      else {
        return "no cheese!";
      }
    }
}
