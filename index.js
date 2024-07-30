let userscore=0;
let compscore=0;

const choices=document.querySelectorAll('.choice');
const msg=document.querySelector('#msg');
const drawGame=()=>{
    console.log("game was drawn");
    msg.innerText="game was drawn";
}
const showWinner=(userwin)=>{
    if(userwin){
        console.log("you win");
        msg.innerText="you win";
    }
    else{
        console.log("you lost");
        msg.innerText="you lost";
    }
}

const genaCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randomIndx=Math.floor(Math.random()*3);
    return options[randomIndx];
}


const playGame=(userChoice)=>{
    //Gneerate computer choice
    const compChoice=genaCompChoice();
    console.log(compChoice);
    if(userChoice==compChoice){
          drawGame();
    }
    else{
        let userwin=true;
        if(userChoice==='rock'){
           userwin= compChoice==='paper'?false:true;
        }
        else if(userChoice==='paper'){
            userwin=compChoice==='scissors'?false:true;
        }
        else {
          userwin=  compChoice==='rock'?false:true;
        }
        showWinner(userwin);
    }

};


 choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener('click',()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice swas clicked",userChoice);
        playGame(userChoice);
    });
 });;