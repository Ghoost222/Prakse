let colors = {
    red: '#671f23',
    hoverRed: '#af4046',
    
    blue: '#324b8f',
    hoverBlue: '#324b8f'
}

let file = {
    quizz1: {
        selected: false,
        questions: [{
                question: "Whitch of these is NOT a Monster energy drink product lineup?",
                questionAttachment: "images/Monster.png",
                answers: ["Juice Monster", "Java Monster", "Exotic Monster", "Rehab Monster"],
                correctAnswer: 2
            }, {
                question: 'What is the "best" laptop for programmers?',
                questionAttachment: "",
                answers: ["ThinkPad", "ChromeBook", "YogaBook", "MacBook"],
                correctAnswer: 0
            }, { 
                question: "For how long at a time can you sit at your computer? ", 
                questionAttachment: "", 
                answers: ["2h", "4h", "8h", "Does not matter :P"], 
                correctAnswer: 3
            }, { 
                question: "What IDE is superior?", 
                questionAttachment: "", 
                answers: ["NeoVim", "VS Code", "JetBrains", "Notepad"], 
                correctAnswer: 1 
            }, { 
                question: "Idk anymore. I just started browesing r/ProgrammerHumor, ngl", 
                questionAttachment: "images/jsonMeme.webp", 
                answers: ["lol", "lorem", "ipsum", "#TempleOS > Windows"], 
                correctAnswer: 1
            }]},

    quizz2: {
        selected: false,
        questions: [{
                question: "What year did the first video game console 'Magnavox Odyssey' come out?",
                questionAttachment: "images/MagnavoxOdyssey.jpg",
                answers: ["1969", "1970", "1971", "1972"],
                correctAnswer: 3
            }, {
                question: "What is the best selling game of all time?",
                questionAttachment: "",
                answers: ["Wii Sports", "Grand Theft Auto V", "Minecraft", "Tetris"],
                correctAnswer: 2
            }, {
                question: "Which game first implemented so called 'Battle Pass' system?",
                questionAttachment: "",
                answers: ["Fortnite", "Dota 2", "Genshin Impact", "Coffin of Andy and Leyley"],
                correctAnswer: 1
            }, {
                question: "Which game features the character 'Master Chief' as its protagonist?",
                questionAttachment: "images/MasterChief.webp",
                answers: ["Halo", "Destiny", "Gears of War", "Mass Effect"],
                correctAnswer: 0
            }, {
                question: "Which company developed the game 'The Witcher 3: Wild Hunt'?",
                questionAttachment: "images/TheWitcher3.jpg",
                answers: ["Bethesda Game Studios", "BioWare", "CD Projekt Red", "Ubisoft"],
                correctAnswer: 2
            }]},

    quizz3: {
        selected: false,
        questions: [{
                question: "What is the name of this species?",
                questionAttachment: "images/Qu.webp",
                answers: ["Titans", "Qu", "Spacers", "Temptors"],
                correctAnswer: 1
            }, {
                question: "What is the name of this species?", 
                questionAttachment: "images/Titan.webp", 
                answers: ["Lopsiders", "Spacers", "Star people", "Titans"], 
                correctAnswer: 3
            }, { 
                question: "What is the name of this species?", 
                questionAttachment: "images/Temptor.webp", 
                answers: ["Flyers", "Parasites", "Temptors", "Worms"], 
                correctAnswer: 2
            }, { 
                question: "What is the name of this species?", 
                questionAttachment: "images/Lopsiders.webp", 
                answers: ["Lopsiders", "Bone crushers", "Asymmetric People", "Terrestrials"], 
                correctAnswer: 0
            }, { 
                question: "Who was the Colonial species predecessors?",
                questionAttachment: "images/Colonials.webp",
                answers: ["Humans", "Qu", "Rats", "Temptors"],
                correctAnswer: 0
            }]}
}










let activeQuizz = "";
let quizzQuestionCounter = 0;
let errorColor = '#AF4046';

let node = document.getElementById("quest0").cloneNode(true);

function startButtonSwitch() {
    let startButton = document.getElementById("start-button");

    if (activeQuizz == "") {
        startButton.firstElementChild.setAttribute("onClick", "startQuizz()" );
        startButton.style.setProperty('--background-color', "rgba(52, 97, 52, 0.5)");
        startButton.style.setProperty('--border-color', "rgb(52, 97, 52)");
        startButton.firstElementChild.innerHTML = "<button onclick='startQuizz()'><h3> BEGIN </h3></button>";
        return;}

    startButton.firstElementChild.setAttribute( "onClick", "" );
    startButton.style.setProperty('--background-color', "rgba(128, 128, 128, 0.2)");
    startButton.style.setProperty('--border-color', "grey");
    startButton.firstElementChild.innerHTML = "<h3> BEGIN </h3>";
    startButton.firstElementChild.style.height = 'var(--icon-size)';
    startButton.firstElementChild.style.width ='var(--icon-size)';
}

function stopButtonSwitch() {
    let stopButton = document.getElementById("stop-button");

    if (!activeQuizz == "") {
        stopButton.firstElementChild.setAttribute("onClick", "startQuizz()" );
        stopButton.style.setProperty('--background-color', "rgba(97, 52, 52, 0.5)");
        stopButton.style.setProperty('--border-color', "rgb(97, 52, 52)");
        stopButton.firstElementChild.innerHTML = "<button onclick='stopQuizz()'><h3> STOP </h3></button>";
        return;}

    stopButton.firstElementChild.setAttribute( "onClick", "" );
    stopButton.style.setProperty('--background-color', "rgba(128, 128, 128, 0.2)");
    stopButton.style.setProperty('--border-color', "grey");
    stopButton.firstElementChild.innerHTML = "<h3> STOP </h3>";
    stopButton.firstElementChild.style.height = 'var(--icon-size)';
    stopButton.firstElementChild.style.width ='var(--icon-size)';
}




function deselectAll (buttonNum) {
    let numberOfQuizz = 3;

    for (let i = 1; i <= numberOfQuizz; i++) {
        if (i === buttonNum) {
            continue;
        }

        let quizz = `quizz${i}`;
        let button = document.getElementById(`quizz-${i}-button`);
        file[quizz].selected = false;
        button.querySelector('#lip').firstElementChild.textContent = "SELECTED: " + file[quizz].selected;

       const outerBox = button.parentElement.parentElement;
        outerBox.style.setProperty('--border-color', colors.red);
        outerBox.style.setProperty('--hover-color', colors.hoverRed);
    }
}



function quizzButtonClickEvent (buttonID) {
    let buttonNum = parseInt(buttonID.split('-')[1]);
    let button = document.getElementById(buttonID);
    const outerBox = button.parentElement.parentElement;

    deselectAll(buttonNum);
    file[`quizz${buttonNum}`].selected = true;
    button.querySelector('#lip').firstElementChild.textContent = "SELECTED: true";

    outerBox.style.setProperty('--border-color', colors.blue);
    outerBox.style.setProperty('--hover-color', colors.hoverBlue);

    startButtonSwitch();
    stopButtonSwitch();
}



function startQuizz () {
    for (let quiz in file) {
        if (file[quiz].selected) {
            activeQuizz = quiz;}}

    if (!activeQuizz) {return;}

    document.getElementById("message-box").innerHTML = "";
    document.getElementById("message-box").appendChild(node.cloneNode(true));
    document.getElementById("point-label").innerText = "0/5";

    startButtonSwitch();
    stopButtonSwitch();
    
    document.getElementById("question-paragraph").textContent = file[activeQuizz].questions[quizzQuestionCounter].question;

    if (file[activeQuizz].questions[quizzQuestionCounter].questionAttachment == "") {document.getElementById("question-attachment").parentElement.parentElement.style.display = "none";}
    else {
        let img = document.getElementById("question-attachment");
        img.src = file[activeQuizz].questions[quizzQuestionCounter].questionAttachment;

        if (img.naturalWidth > img.naturalHeight){
            img.parentElement.parentElement.style.width = "50%";
        }
    }

    document.getElementById("answer-button-0").textContent = file[activeQuizz].questions[quizzQuestionCounter].answers[0];
    document.getElementById("answer-button-1").textContent = file[activeQuizz].questions[quizzQuestionCounter].answers[1];
    document.getElementById("answer-button-2").textContent = file[activeQuizz].questions[quizzQuestionCounter].answers[2];
    document.getElementById("answer-button-3").textContent = file[activeQuizz].questions[quizzQuestionCounter].answers[3];

    document.getElementById("quest0").style.display = "grid";
    document.getElementById("quest0").style.marginTop = "1vw";
    document.getElementById("quest0").style.marginBottom = "1vw";
}



function stopQuizz() {
    let presentQuest = document.getElementById("quest" + quizzQuestionCounter);

    for (let i = 0; i < 4; i++) {
        let answerButton = presentQuest.querySelector("#answer-button-" + i);
        answerButton.setAttribute("onClick", "");
        answerButton.parentElement.parentElement.style.setProperty("background-color", "#324B8F");}

    quizzQuestionCounter = 0;
    activeQuizz = "";
    startButtonSwitch();
    stopButtonSwitch();
}




function plusPoint() {
    let label = document.getElementById("point-label");
    //cont[0] = parseInt(cont[0]) + 1 || "1";
    let points = label.innerText[0];
    points = parseInt(points) + 1 || 1;
    label.innerText = points + "/5";
}



function answerButtonEvent (button) {
    let presentQuestion = file[activeQuizz].questions[quizzQuestionCounter];
    let buttonNum = button.id[14];

    for (let i = 0; i < 4; i++) {
        let presentButton = button.parentElement.parentElement.parentElement.querySelector("#answer-button-" + i);
        presentButton.setAttribute( "onClick", "" );

        if (buttonNum == i) {
            if (presentQuestion.correctAnswer == i) {
                presentButton.parentElement.parentElement.style.setProperty("--border-color", "rgb(52, 97, 52)");
                presentButton.parentElement.parentElement.style.setProperty("background-color", "rgb(52, 97, 52)");
                plusPoint();
                continue;}

            else {
                presentButton.parentElement.parentElement.style.setProperty("--border-color", errorColor);
                presentButton.parentElement.parentElement.style.setProperty("background-color", errorColor);
                continue;}
        }

        if (presentQuestion.correctAnswer == i) {
            presentButton.parentElement.parentElement.style.setProperty("--border-color", "rgb(52, 97, 52)");
            presentButton.parentElement.parentElement.style.setProperty("background-color", "rgb(52, 97, 52)");
            continue;}

        presentButton.parentElement.parentElement.style.setProperty("background-color", "var(--border-color)");
    }
    // answer confirm ^^^

    if (quizzQuestionCounter == 4) {
        quizzQuestionCounter = 0;
        activeQuizz = "";
        startButtonSwitch()
        stopButtonSwitch();
        return;}

    // checks if its the end of the quizz

    let nodeClone = node.cloneNode(true);
    nodeClone.id = "quest" + (quizzQuestionCounter + 1);
    nodeClone.style.display = "grid";
    document.getElementById("quest0").style.marginBottom = "0";
    nodeClone.style.marginBottom = "1vw";

    quizzQuestionCounter = quizzQuestionCounter + 1;
    presentQuestion = file[activeQuizz].questions[quizzQuestionCounter];

    nodeClone.querySelector("#question-paragraph").textContent = presentQuestion.question; // sets up the question

    if (file[activeQuizz].questions[quizzQuestionCounter].questionAttachment == "") {
        nodeClone.querySelector("#question-attachment").parentElement.parentElement.style.display = "none"; 
        nodeClone.querySelector("#question-attachment").parentElement.parentElement.style.width = "10vw";}
    else {
        let img = nodeClone.querySelector("#question-attachment");
        img.src = presentQuestion.questionAttachment;

        if (img.naturalWidth > img.naturalHeight){
            img.parentElement.parentElement.style.width = "50%";
        }
    }

    nodeClone.querySelector("#answer-button-0").textContent = presentQuestion.answers[0];
    nodeClone.querySelector("#answer-button-1").textContent = presentQuestion.answers[1];
    nodeClone.querySelector("#answer-button-2").textContent = presentQuestion.answers[2];
    nodeClone.querySelector("#answer-button-3").textContent = presentQuestion.answers[3];

    document.getElementById("message-box").appendChild(nodeClone);

    document.getElementById("message-box").scrollTo({
        top: document.getElementById("message-box").scrollHeight,
        behavior: "smooth"
    });
}