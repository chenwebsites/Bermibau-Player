for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",
        function() {

            var buttonInnerHTML = this.innerHTML;
            makeSound(buttonInnerHTML);
            buttonAnimation(buttonInnerHTML);

        });
}


document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
       
        case "j":
            var buzz = new Audio("./sounds/sound1.mp3");
            buzz.play();
            break;
        case "k":
            var closed = new Audio("./sounds/sound2.mp3");
            closed.play();
            break;
        case "l":
            var open = new Audio("./sounds/sound3.mp3");
            open.play();
            break;

        default:
            break;
    }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

}