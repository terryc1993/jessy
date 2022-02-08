//Detecting Button Press

var numOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfDrumButtons; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function() {

  var buttonInnerHTML = this.innerHTML;

  makeSound(buttonInnerHTML);

  buttonAni(buttonInnerHTML);

});
}

//Detecting Keyboard press

document.addEventListener("keydown", function(event){

  makeSound(event.key);

  buttonAni(event.key);



});

function makeSound(key){

  switch (key) {
    case "w":
          word = "w";
          console.log(word);
          break;

    case "a":
          word = word + "a";
          console.log(word);
          break;

    case "s":
    word = word + "s";
    console.log(word);
          break;

    case "d":
        word = word + "d";
        if (word === "wasd") {
          var victory = new Audio("sounds/victory.mp3");
          victory.play();
          document.querySelector(".message").innerHTML = "Jessy is ready for Warzone!!😁";
        } else {
          var wrong = new Audio("sounds/wrong.mp3");
          document.querySelector(".message").innerHTML = "Still needs recovery😥";
        wrong.play();
      }
          break;
        default: console.log(key);


  }
}

function buttonAni(currentKey) {
  var actButton = document.querySelector("."+currentKey);

  actButton.classList.add("pressed");

  setTimeout(function () {
    actButton.classList.remove("pressed");
  }, 100);
}








//
// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
