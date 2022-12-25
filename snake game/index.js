//game constants
let inputDR = { x: 0, y: 0 };//direction
const foodsound = new Audio('food.mp3');
const gameover = new Audio('end.wav');
const move = new Audio('turns.wav');
let score = 0;
let speed = 10;
let lastPaintTime = 0;
let snakeArr = [
    { x: 13, y: 15 }
];//snake position 


food = { x: 11, y: 12 };//food position


//game functions
function main(ctime) {
    window.requestAnimationFrame(main);
    //console.log(ctime)
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}
function isCollide(snake) {
    //if bump into snake
    for (let i = 1; i < snakeArr.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true

        }
    }
    //hitting borders
    if (snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0) {
        return true;
    }


}


function gameEngine() {
    //part1 : updating snake variable and food
    if (isCollide(snakeArr)) {
        gameover.play();
        inputDR = { x: 0, y: 0 };
        alert("GAMEOVER PRESS ANY KEY TO PLAY AGAIN");
        snakeArr = [{ x:13, y:15 }];
        score = 0;
    }

    //if u have eaten food score incraese and display food
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        foodsound.play();
        score += 1;
        if (score > hiscoreval) {
            hiscoreval = score;
            localStorage.setItem("hiscoere", JSON.stringify(hiscoreval));
            hiscoreBox.innerHTML = "Hight Score:" + hiscoreval;
        }
        scoreBox.innerHTML = "score: " + score;
        snakeArr.unshift({ x: snakeArr[0].x + inputDR.x, y: snakeArr[0].y + inputDR.y });
        let a = 0;
        let b = 16;
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
    }

    //moving snake


    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] };

    }
    snakeArr[0].x += inputDR.x;
    snakeArr[0].y += inputDR.y;


    //part2 : display snake 
    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if (index == 0) {
            snakeElement.classList.add('head');
        }
        else {
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);

        //display food
        foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food');
        board.appendChild(foodElement);


    })
}




//main logic
let hiscore = localStorage.getItem("hiscoere");
if (hiscore === null) {
    hiscoreval = 0;
    localStorage.setItem("hiscoere", JSON.stringify(hiscoreval))
}
else {
    hiscoreval = JSON.parse(localStorage.getItem("hiscoere"))
    hiscoreBox.innerHTML = "Hight Score:" + hiscore;
}
window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    inputDR = { x: 0, y: 1 }//start game
    move.play();
    switch (e.key) {
        case "ArrowUp": console.log("ArrowUp")
            inputDR.x = 0;
            inputDR.y = -1;
            break;

        case "ArrowDown": console.log("ArrowDown")
            inputDR.x = 0;
            inputDR.y = 1;
            break;

        case "ArrowLeft": console.log("ArrowLeft")
            inputDR.x = -1;
            inputDR.y = 0;
            break;

        case "ArrowRight": console.log("ArrowRight")
            inputDR.x = 1;
            inputDR.y = 0;
            break;
        default:
            break;
    }
});