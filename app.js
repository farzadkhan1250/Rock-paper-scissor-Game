let u_score = document.getElementById("user-score");
let c_score = document.querySelector("#comp-score");

let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg")

const gencompchoice = () =>{
    const options = ["rock" ,"paper","scissors"];
    let randidx = Math.floor(Math.random()*3);
    return options[randidx];
}

const drawgame = () =>{
    console.log("draw game");
    msg.innerText = "Game Was Draw! Play Again ";
    msg.style.backgroundColor = "black";
}

const showwinner = (userwin,userchoice,compchoice) =>{
    if(userwin)
    {   userscore++;
        u_score.innerText = userscore;
        console.log("user win");
        msg.innerText = `you won! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else
    {   compscore++;
        c_score.innerText = compscore
        console.log("computer win");
        msg.innerText = `you lost. ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playgame = (userchoice) =>{
    console.log("user choice: ",userchoice);
    let compchoice = gencompchoice()            // generate computer choice ->
    console.log("computer choice: ",compchoice)

    if(compchoice == userchoice)
    {
        drawgame();
    }
    else
    {
        let userwin = true
        if(userchoice === "rock")
        {
            userwin = compchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper")
        {
            userwin = compchoice === "scissors"? false : true;
        }
        else
        {
            userwin = compchoice === "rock"? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
});