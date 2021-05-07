var characters = [];

for (var x = 0; x < (document.querySelectorAll(".drum").length); x++){
  characters[x] = document.querySelectorAll("button")[x].innerHTML;

  document.querySelectorAll("button")[x].addEventListener("click", function() {
    playAudio(this.innerHTML);
  });
}

document.addEventListener("keydown", function(){
  playAudio(event.key.toUpperCase());
})

function playAudio(key){
  for (var x = 0; x < characters.length; x++){
    if (key == characters[x]){
      var audio = new Audio("./sounds/"+x+".mp3");
      audio.play();
      makeAnimation(characters.indexOf(key));
    }
  }
}

function makeAnimation(key){
  document.querySelectorAll("button")[key].classList.add("pressed");
  document.querySelectorAll(".music-notes")[key].classList.add("music-notes-visible");

  setTimeout(function(){
    document.querySelectorAll("button")[key].classList.remove("pressed");
    document.querySelectorAll(".music-notes")[key].classList.remove("music-notes-visible");
  }, 200);
}
