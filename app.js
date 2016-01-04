
//global variables
var masterFontList = ["Open Sans","Roboto","Lato","Montserrat","Raleway","Droid Sans","Ubuntu","Arimo","Arial",
                      "Noto Sans","Oxygen","Cabin","Hind","Muli","Josefin Sans","Futura","Avenir","Helvetica","Verdana"],
    choices = [],
    answer = "",
    correct = 0,
    total = 0;

//add font choices and answer function
function addChoices(){
  //reset the choices array
  choices = [];
  //select three fonts from the array, push them to choices
  for (i = 0; i < 3; i++) {
    var rN = Math.floor((Math.random() * masterFontList.length));
    choices.push(masterFontList[rN]);
    //the first selected font is the answer
    if(i === 0){
      answer = masterFontList[rN];
    }
    //removes the font from the list so there wont be duplicates
    masterFontList.splice(rN,1);
  }
}

function placeChoices(){

  //randomly places the choices in the slots
  for (i = 0; i < 3; i++) {
    var rN = Math.floor((Math.random() * choices.length)),
        name = "#answer" + i;
    $(name).text(choices[rN]);
    //push the font back into the master array
    masterFontList.push(choices[rN]);
    //splice the font from the choices array
    choices.splice(rN,1);
  }

  $("#daFont").css("color", "black")
  $("#daFont").text("AaBbCcXxYyZz");
  $("#daFont").css("font-family", answer);
  $("#daFont").removeClass();

}

function success(){

  correct++;
  $("#correct").text(correct);
  total++;
  $("#total").text(total);

  $("#daFont").css("color", "lightgreen")
  $("#daFont").css("font-family", "Helvetica")
  $("#daFont").text("Correct!");
  $("#daFont").addClass("animated bounceIn");

  setTimeout(function(){
    addChoices();
    placeChoices();
  }, 2000)

}


function fail(){

  total++;
  $("#total").text(total);

  $("#daFont").css("color", "red");
  $("#daFont").css("font-family", "Helvetica")
  $("#daFont").text("Nope!");
  $("#daFont").addClass("animated bounceIn");

  setTimeout(function(){
    addChoices();
    placeChoices();
  }, 2000)
}

$(".answer").click(function(){
  if($(this).children().text() === answer){success();}
  else {fail();}
});

$(document).ready(function(){
  addChoices();
  placeChoices();
});
