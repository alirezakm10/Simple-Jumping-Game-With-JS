var character = document.getElementById("character");
var block = document.getElementById("block");
var block2 = document.getElementById("block2");
var k = new Audio('https://s17.picofile.com/d/8428308250/955a05b4-5418-4f79-98f6-701428bc0203/jump.mp3');
var counter = 0;

function jump() {
    if (character.classList == "jumpOnce") { return };
    character.classList.add("jumpOnce");
    k.play();
    setTimeout(() => {
        character.classList.remove('jumpOnce');


    }, 1000);



}
function dblJump() {
    if (character.classList == "jumpDbl") { return };
    character.classList.add("jumpDbl");
    setTimeout(() => {
        character.classList.remove('jumpDbl');
    }, 1000);
}
var checkDead = setInterval(() => {
    // let characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let block1Left = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let block2Left = parseInt(window.getComputedStyle(block2).getPropertyValue("left"));
    if ((block1Left < 20 && block1Left > -20 && characterTop >= 130) || (block2Left < 20 && block2Left > -20 && characterTop >= 100)) {


        block.style.animation = "none";
        block2.style.animation = "none";
        alert("Game Over");
        counter = 0;
        block.style.animation = "block 2s infinite linear";

    } else {
        block2.style.animation = "block 4s infinite linear";
        counter++;

        document.getElementById('scorespan').textContent = Math.floor(counter / 100);
    }
}, 10);