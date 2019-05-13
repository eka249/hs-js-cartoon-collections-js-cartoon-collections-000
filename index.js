//accept array of names and return them numbered
function dwarfRollCall(dwarves) {
  var text= "";
  for (var i=Math.ceil((dwarves.length)/2); i<dwarves.length; i++){
    text += ((i+1) + ". " + dwarves[i] + " ");
   }
   return text
   //return text.slice(0,-1)
}

//accept array; capitalize and add ! after all elements
function summonCaptainPlanet(planeteerCalls){
  for (var i=0; i<planeteerCalls.length; i++){
    planeteerCalls[i]= planeteerCalls[i].toUpperCase() + "!"
  }
  return planeteerCalls
}

//trigger true/false depending on word length in given array
function longPlaneteerCalls(words) {
  for (var i=0; i<words.length; i++){
    if (words[i].length >4) {
      return true}
      else {
        return false
      }
    }
  }
//accept array and determine if a type of cheese is present
function findTheCheese (foods) {
  var validcheese= ["cheddar", "gouda", "camembert", "blue cheese"];
    for (var i=0; i<validcheese.length; i++){
      if (foods.indexOf(validcheese[i])> -1){
        return validcheese[i];
      }
    }
  return "no cheese!";
}

//return all words that start with b
function wordsWithB (words){
  var x=[];
  for (var i=0; i<words.length; i++){
    if (words[i][0].toLowerCase() =='b'){
      x.push(words[i]);
    }
  }
  return x;
}


