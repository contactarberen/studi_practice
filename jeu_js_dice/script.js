let newGame=document.querySelector('.newGame');

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 */
 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

newGame.addEventListener("click", function(){
    let globalScore1 = 0;
    let globalScore2 = 0;
    let tempScore1 = 0;
    let tempScore2 = 0;
    let j1_playing = true;
    let htmlGlobalScore1 = document.querySelector('div.globalScore1');
    let htmlGlobalScore2 = document.querySelector('div.globalScore2');
    let htmlValueTempScore1 = document.querySelector('div.valueTempScore1');
    let htmlValueTempScore2 = document.querySelector('div.valueTempScore2');

    let rollDice = document.querySelector('.rollDice');
    let hold = document.querySelector('.hold');
    
    function affect_dice_value(player) {

    }
    
    rollDice.addEventListener("click", function(){
        var dice_value = dice_value = getRandomInt(1,6);
        if (j1_playing == true) {
            if (globalScore1 >= 100) {
                alert("FELICITATIONS: JOUEUR 1 GAGNE LA PARTIE");
            }
            if (dice_value == 1) {
                j1_playing = false;
                tempScore1 = 0;
                htmlValueTempScore1.innerText = tempScore1;
            }
            else {
                tempScore1 += dice_value;
                htmlValueTempScore1.innerText = tempScore1;

            }

        }
        else {
            if (globalScore1 >= 100) {
                alert("FELICITATIONS: JOUEUR 1 GAGNE LA PARTIE");
            }
            if (dice_value == 1) {
                j1_playing = true;
                tempScore2 = 0;
                htmlValueTempScore2.innerText = tempScore2;
            }
            else {
                tempScore2 += dice_value;
                htmlValueTempScore2.innerText = tempScore2;
            }
        }
        console.log("j1_temp "+tempScore1)
        console.log("j2_temp "+tempScore2)
        console.log("")
        
            
    });
    
    hold.addEventListener("click", function(){
        if (j1_playing == true) {
            globalScore1 += tempScore1;
            htmlGlobalScore1.innerText = globalScore1;
            tempScore1 = 0;
            htmlValueTempScore1.innerText = tempScore1;
            j1_playing = false;
        }
        else {
            globalScore2 += tempScore2;
            htmlGlobalScore2.innerText = globalScore2;
            tempScore2 = 0;
            htmlValueTempScore2.innerText = tempScore2;
            j1_playing = true;
        }
        console.log("j1_global_score "+globalScore1)
        console.log("j2_global_score "+globalScore2)
        console.log("")
    });       
});