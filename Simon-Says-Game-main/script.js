let gameSeq = [] ; 
let userSeq = [] ; 
let btns = ["red", "blue", "yellow", "green"];

let h2 = document.querySelector("h2") ; 
let gameStart = false ; 
let level = 0 ; 

// document.addEventListener("click" , function() {
//     if(!gameStart) {
//         h2.textContent = "Game Start" ;
//         gameStart = true ;  
//         levelUp() ; 
//     }
// }) ; 

function startGame() {
    if(!gameStart) {
        gameStart = true;
        levelUp();
    }
}

document.addEventListener("keydown", startGame);

document.addEventListener("touchstart", startGame, {
    once: true
});

function levelUp() {
    level++ ; 
    h2.textContent = `Level ${level}` ;

    let randIdx = Math.floor(Math.random() * 4) ; 
    let randClr = btns   [randIdx] ; 
    let randbtn = document.querySelector(`.${randClr}`) ; 
    gameSeq.push(randbtn.classList[1]) ; 
    btnFlash(randbtn) ;
}

function btnFlash(btn) {
    btn.classList.add("flash") ;
    setTimeout(() => {
        btn.classList.remove("flash") ; 
    } , 100) ; 
}

function userFlash(btn) {
    btn.classList.add("userflash") ;
    setTimeout(() => {
        btn.classList.remove("userflash") ; 
    } , 100) ; 
}

function userInput() {
    let press = this ; 
    userSeq.push(press.classList[1]) ; 
    userFlash(press) ; 
    compare() ; 
}

let allBtn = document.querySelectorAll(".btn") ; 
for(let btn of allBtn) {
    btn.addEventListener("click" , userInput) ;
} 

function compare() {

    let idx = userSeq.length - 1;

    if(userSeq[idx] !== gameSeq[idx]) {
        gameEnd();
        return;
    }

    if(userSeq.length === gameSeq.length) {
        setTimeout(() => {
            userSeq = [];
            levelUp();
        }, 500);
    }
}

function gameEnd() {
    level = 0;
    gameSeq = [];
    userSeq = [];
    gameStart = false;

    h2.textContent = "Wrong Move : Game End. Press any key to restart";
}