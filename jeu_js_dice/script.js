let newGame=document.querySelector('.newGame');
const winningScore = 20;

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 */
 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function initValues() {
    globScore1 = document.querySelector('div.globalScore1');
    globScore2 = document.querySelector('div.globalScore2');
    tempScore1 = document.querySelector('div.valueTempScore1');
    tempScore2 = document.querySelector('div.valueTempScore2');
    globScore1.innerText = 0;
    globScore2.innerText = 0;
    tempScore1.innerText = 0;
    tempScore2.innerText = 0;
}

function rollDiceAnimation() {
    var dice_value = getRandomInt(1,6);
    image_dice = document.querySelector('img.dice');
    image_dice.src = "./img/animation_de.gif"
    const music = new Audio('./audio/son_lancer_de.mp3');
    music.play();
    
    
    setTimeout(function() {
        image_dice.src = './img/dice_'+dice_value+'.png'
        music.pause();
    }, 1000);
    
    return dice_value;
}

newGame.addEventListener("click", function(){
    let j1_playing = true;
    initValues();
    let htmlGlobalScore1 = document.querySelector('div.globalScore1');
    let htmlGlobalScore2 = document.querySelector('div.globalScore2');
    let htmlValueTempScore1 = document.querySelector('div.valueTempScore1');
    let htmlValueTempScore2 = document.querySelector('div.valueTempScore2');
    let icon_j1_playing = document.querySelector('img.icon.j1');
    let icon_j2_playing = document.querySelector('img.icon.j2');
    icon_j2_playing.classList.add("hidden");
    let rollDice = document.querySelector('.rollDice');
    let hold = document.querySelector('.hold');
    const music_next = new Audio('./audio/son_verre_passe_tour.mp3');
    const music_winner = new Audio('./audio/son_victoire.mp3');
        
    
    rollDice.addEventListener("click", function(){
        var dice_value = rollDiceAnimation();
        if (j1_playing == true) {
            if (parseInt(htmlGlobalScore1.innerText) >= winningScore) {
                music_winner.play();
                alert("FELICITATIONS: JOUEUR 1 GAGNE LA PARTIE");
            }
            if (dice_value == 1) {
                j1_playing = false;
                htmlValueTempScore1.innerText = 0;
                icon_j1_playing.classList.add("hidden");
                icon_j2_playing.classList.remove("hidden");
                music_next.play();
            }
            else {
                htmlValueTempScore1.innerText = parseInt(htmlValueTempScore1.innerText) + dice_value;

            }

        }
        else {
            if (parseInt(htmlGlobalScore2.innerText) >= winningScore) {
                music_winner.play();
                alert("FELICITATIONS: JOUEUR 2 GAGNE LA PARTIE");
            }
            if (dice_value == 1) {
                j1_playing = true;
                htmlValueTempScore2.innerText = 0;
                icon_j1_playing.classList.remove("hidden");
                icon_j2_playing.classList.add("hidden");
                music_next.play();
            }
            else {
                htmlValueTempScore2.innerText = parseInt(htmlValueTempScore2.innerText) + dice_value;
            }
        }
    });
    
    hold.addEventListener("click", function(){
        if (j1_playing == true) {
            htmlGlobalScore1.innerText = parseInt(htmlGlobalScore1.innerText) + 
                                            parseInt(htmlValueTempScore1.innerText);
            htmlValueTempScore1.innerText = 0;
            if (parseInt(htmlGlobalScore1.innerText) >= winningScore) {
                music_winner.play();
                alert("FELICITATIONS: JOUEUR 1 GAGNE LA PARTIE");
            }
            j1_playing = false;
            icon_j1_playing.classList.add("hidden");
            icon_j2_playing.classList.remove("hidden");
        }
        else {
            htmlGlobalScore2.innerText = parseInt(htmlGlobalScore2.innerText) 
                                            + parseInt(htmlValueTempScore2.innerText);
            htmlValueTempScore2.innerText = 0;
            if (parseInt(htmlGlobalScore2.innerText) >= winningScore) {
                music_winner.play();
                alert("FELICITATIONS: JOUEUR 2 GAGNE LA PARTIE");
            }
            j1_playing = true;
            icon_j1_playing.classList.remove("hidden");
            icon_j2_playing.classList.add("hidden");
        }
     });       
});