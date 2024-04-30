// let randomNumber = (Math.random()*30)+1;
// let randomNum = parseInt(randomNumber);``  
// console.log(randomNumber);

function diceGame(){
    let randomNumber1 = (Math.random()*6)+1;
    let randomNumber2 = (Math.random()*6)+1;

    let player1 = parseInt(randomNumber1);
    let player2 = parseInt(randomNumber2);
    // console.log(player1);
    // console.log(player2);
    // document.getElementById(".sec1").innerHTML = background-color;

    document.querySelector(".img1").src = `images/dice-${player1}` + ".png";
    document.querySelector(".img2").src = `images/dice-${player2}` + ".png";
    // document.querySelector{".sec1"}.background = color: green;
    

    if(player1 > player2){
        document.getElementById("result").innerHTML = "PLAYER 1 WINS";
    }
    else if(player2 > player1){
        document.getElementById("result").innerHTML = "PLAYER 2 WINS";
    }
    
     else{
        document.getElementById("result").innerHTML = "PLAYER DRAW";
        
    }
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.querySelector('.sec1').style.backgroundColor = '#' + randomColor;
    
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.querySelector('.sec').style.backgroundColor = '#' + randomColor;
    
    }
    


// function diceGame(){
//     let randomNumber1 = (Math.random()*6)+1;
//     let randomNumber2 = (Math.random()*6)+1;

//     let player1 = parseInt(randomNumber1);
//     let player2 = parseInt(randomNumber2);
//     // console.log(player1);
//     // console.log(player2);
   
   

//     if(player1 > player2){
//         document.getElementById("result").innerHTML = "PLAYER 1 WINS";
//         document.querySelector("#img").innerHTML = img1;
//     }
//     else if(player2 > player1){
//         document.getElementById("result").innerHTML = "PLAYER 2 WINS";
//         document.querySelector("#img").innerHTML = img2;
//     }
    
//      else{
//         document.getElementById("result").innerHTML = "PLAYER DRAW";
        
//     }
// }