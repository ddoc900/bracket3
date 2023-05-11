const generate = document.getElementById('generate');

const game = document.getElementsByClassName('game');
const game2 = document.getElementsByClassName('game2');
const game3 = document.getElementsByClassName('game3');
const game4 = document.getElementsByClassName('game4');
const game5 = document.getElementsByClassName('game5');
const eastGame = document.getElementsByClassName('east-game');
const east4 = document.getElementsByClassName('east4');
const east3 = document.getElementsByClassName('east3');
const east2 = document.getElementsByClassName('east2');
const east1 = document.getElementsByClassName('east1');






const r21 = document.getElementById('r21');
const r22 = document.getElementById('r22');
const r23 = document.getElementById('r23');
const r24 = document.getElementById('r24');
const r25 = document.getElementById('r25');
const r26 = document.getElementById('r26');
const r27 = document.getElementById('r27');
const r28 = document.getElementById('r28');

const r31 = document.getElementById('r31');
const r32 = document.getElementById('r32');
const r33 = document.getElementById('r33');
const r34 = document.getElementById('r34');

const r41 = document.getElementById('r41');
const r42 = document.getElementById('r42');

const finalEast = document.getElementById('final-east');
const finalWest = document.getElementById('final-west');
const champ = document.getElementById('champ');

const e21 = document.getElementById('e21');
const e22 = document.getElementById('e22');
const e23 = document.getElementById('e23');
const e24 = document.getElementById('e24');
const e25 = document.getElementById('e25');
const e26 = document.getElementById('e26');
const e27 = document.getElementById('e27');
const e28 = document.getElementById('e28');

const e31 = document.getElementById('e31');
const e32 = document.getElementById('e32');
const e33 = document.getElementById('e33');
const e34 = document.getElementById('e34')

const e41 = document.getElementById('e41');
const e42 = document.getElementById('e42');






const findWinners = (x, y, z) => {
    

    let sum = x.value + y.value;
    let randomNum = Math.floor(Math.random()*101)
   

    if (x.value < y.value){
            let tempValue = (x.value/ sum) * 100
            if (randomNum > tempValue){
                z.value = x.value;
                z.innerHTML = x.textContent;
            } else {
                z.value = y.value;
                z.innerHTML = y.textContent
            }
            
        
    } else if (x.value > y.value) {
            let secondTemp = (y.value/ sum) *100
            if (randomNum > secondTemp){
                z.value = x.value;
                z.innerHTML = x.textContent;
            } else {
                z.value = y.value;
                z.innerHTML = y.textContent;
            }
    } else {
        let thirdTemp = 50;
        if (randomNum > 50) {
            z.value = x.value;
            z.innerHTML = x.textContent;
        } else {
            z.value = y.value;
            z.innerHTML = y.textContent;
        }
    }
}





 const battle = () => {
    
    
    


    findWinners(game[0], game[1], r21);
    findWinners(game[2], game[3], r22);
    findWinners(game[4], game[5], r23);
    findWinners(game[6], game[7], r24);
    findWinners(game[8], game[9], r25);
    findWinners(game[10], game[11], r26);
    findWinners(game[12], game[13], r27);
    findWinners(game[14], game[15], r28);


    findWinners(game2[0], game2[1], r31);
    findWinners(game2[2], game2[3], r32);
    findWinners(game2[4], game2[5], r33);
    findWinners(game2[6], game2[7], r34);
    
    findWinners(game3[0], game3[1], r41);
    findWinners(game3[2], game3[3], r42);

    findWinners(game4[0], game4[1], finalWest);
    
    findWinners(east1[0], east1[1], e21);
    findWinners(east1[2], east1[3], e22);
    findWinners(east1[4], east1[5], e23);
    findWinners(east1[6], east1[7], e24);
    findWinners(east1[8], east1[9], e25);
    findWinners(east1[10], east1[11], e26);
    findWinners(east1[12], east1[13], e27);
    findWinners(east1[14], east1[15], e28);

    findWinners(east2[0], east2[1], e31);
    findWinners(east2[2], east2[3], e32);
    findWinners(east2[4], east2[5], e33);
    findWinners(east2[6], east2[7], e34);

    findWinners(east3[0], east3[1], e41);
    findWinners(east3[2], east3[3], e42);

    findWinners(east4[0], east4[1], finalEast);

    findWinners(finalWest, finalEast, champ);

    
    
    
 }







generate.addEventListener('click', function (){
  
    battle();
    
});





