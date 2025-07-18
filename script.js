let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const genCompchoice = () => {
    const options =["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx]
    //rock ,paper,scissors
}

const drawGame = () => { 
    console.log("game was Draw");
    msg.innerText =" Game is Draw,Play Againn";
    msg.style.backgroundColor ="#081b31";
}; 

const showWinner = (userWin,userchoice,compchoice) =>{
    if(userWin){
        userscore++;
        userscorepara.innerText = userscore;
        console.log("You Win!");
        msg.innerText =`You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor ="green";
    }
    else{
        compscore++;
        compscorepara.innerText = compscore;
        console.log("You lose");
        msg.innerText =`You lostt! ${compchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor ="red";
    }

};


const playGame = (userchoice) => {
    console.log("user choice =",userchoice);
    //Generate computer choice
    const compchoice = genCompchoice();
    console.log("computer choice =",compchoice);

    if(userchoice ===compchoice){
        //Draw game;
        drawGame();
    
    }
    else{
       let userWin = true;
       if(userchoice === "rock") {
            //scissors,paper
            userWin = compchoice === "paper" ? false :true;
       }
       else if(userchoice ==="paper")
       {
            //rock,scissors
             userWin = compchoice === "scissors" ? false :true;
       }
       else{
         //rock,paper
         userWin = compchoice === "rock" ? false :true;
       }
       showWinner(userWin,userchoice,compchoice);
    }
    

};
 
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});