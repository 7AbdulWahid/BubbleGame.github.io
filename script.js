let panel = document.getElementById("panel");
let Time = document.getElementById("Time");
let Bubble = document.querySelectorAll(".bubble");
let scoreBox = document.getElementById("Score");
let hitBox = document.getElementById("hit");
let startBtn = document.getElementById("start")
let gamemsg = document.getElementById("gamemsg")
let score = 0;

function TimeOver() {
    gamemsg.innerHTML = `Time up, Your score is ${score}`;
    startBtn.innerHTML = "restart";
    score = 0;
    gsap.to("#msg", {
        top: 0,
        duration: 0.5
    });
}



// Making Timer 
function gameTimer() {
    let initialTime = 60;
    let Timer = setInterval(() => {
        Time.innerHTML = initialTime;
        if (initialTime === 0) {
            clearInterval(Timer);
            TimeOver();
        }
        initialTime--;
    }, 1000);
}

// Start everything
function startGame() {
    gameTimer();
    BubbleUpdate();
    hitUpdate();
    scoreUpdate();
}



// Addign random number inside bubbles 
function BubbleUpdate() {
    Bubble.forEach((el) => {
        let randomnum = Math.random() * 10;
        el.innerHTML = Math.floor(randomnum);
    });
};

// Adding random number in Hit 
function hitUpdate() {
    hitBox.innerHTML = Math.floor(Math.random() * 10);
}

// Updating score
function scoreUpdate() {
    scoreBox.innerHTML = score;
    if (score < 0) {
        scoreBox.style.color = "red"
    }
    else {
        scoreBox.style.color = "#000"
    }
}


Bubble.forEach((el) => {
    el.addEventListener("click", () => {
        console.log("clicked")
        if (el.innerHTML === hitBox.innerHTML) {
            score += 1;
            gsap.from("#Score", {
                color: "#00cf15",
                duration: 2
            });
            scoreUpdate();
        }
        else {
            score -= 1;
            gsap.from("#Score", {
                color: "red",
                duration: 2
            });
            scoreUpdate();
        }
        hitUpdate();
        BubbleUpdate();
    });
});



// Start button function 
startBtn.addEventListener("click", () => {
    gsap.to("#msg", {
        top: "-100%",
        duration: 0.5,

    })
    startGame();
})
