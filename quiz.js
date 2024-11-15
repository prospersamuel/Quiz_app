const html = [
    {
        question: "What does HTML stand for?",
        answers:[
            {text:"Hypertext Markup Langage", correct: false},
            {text:"Hypertex Markup Language", correct: false},
            {text:"Hypertext Markup Langauge", correct: true},
            {text:"hyperlink Main language", correct: false}
        ]
    },
    {
        question: "Who is making the web standards",
        answers:[
            {text:"Google", correct: false},
            {text:"Mozilla", correct: false},
            {text:"The World Wide Web Consortium", correct: true},
            {text:"Microsoft", correct: false}
        ]
    },
    {
        question: "What is the correct HTML element for a line break",
        answers:[
            {text:`br`, correct: true},
            {text:`lb`, correct: false},
            {text:`break`, correct: false},
            {text:`line-break`, correct: false}
        ]
    },
    {
        question: "Which character is used to indicate an end tag",
        answers:[
            {text:"*", correct: false},
            {text:")", correct: false},
            {text:"/", correct: true},
            {text:"<", correct: false}
        ]
    },
    {
        question: "How can you open a link in a new tab/browser window",
        answers:[
            {text:`a href="url" target="_blank"`, correct: true},
            {text:`a href="url" target="new"`, correct: false},
            {text:`a href="url" target="_link"`, correct: false},
            {text:`a href="url" target="link"`, correct: false}
        ]
    }

]















const css = [
    {
        question: "What does CSS  stand for?",
        answers:[
            {text:"Cascading style sheets", correct: true},
            {text:"Creating style sheets", correct: false},
            {text:"Composing style sheets", correct: false},
            {text:"Creating style sheet", correct: false}
        ]
    },
    {
        question: "What is the correct for linking to an external stylesheet",
        answers:[
            {text:`Link tag`, correct: true},
            {text:`Script tag`, correct: false},
            {text:`Href tag`, correct: false},
            {text:`Src tag`, correct: false}
        ]
    },
    {
        question: "Which of the following is a pseudo element",
        answers:[
            {text:"::active", correct: false},
            {text:".body", correct: false},
            {text:"::body", correct: false},
            {text:":hover", correct: true}
        ]
    },
    {
        question: "One of these is the correct way to add marging to the left side only",
        answers:[
            {text:"margin: 5px-left;", correct: false},
            {text:"margin-start: 5px;", correct: false},
            {text:"margin-left: 5px;", correct: true},
            {text:"margin-left; 5px;", correct: false}
        ]
    },
    {
        question: "Which is correct for aligining text to the center",
        answers:[
            {text:"text : centers;", correct: false},
            {text:"margin: center;", correct: false},
            {text:"text-align: center;", correct: true},
            {text:"text- center;", correct: false}
        ]
    }

]


















const javaScript = [
    {
        question: "how do you link javaScript to an HTML webpage",
        answers:[
            {text:"With a link tag", correct: false},
            {text:"With a script tag", correct: true},
            {text:`With an html tag`, correct: false},
            {text:`With an img tag`, correct: false}
        ]
    },
    {
        question: "One of the following is a primitive data type",
        answers:[
            {text:"Array", correct: true},
            {text:"boolean", correct: false},
            {text:"symbol", correct: false},
            {text:"null", correct: false}
        ]
    },
    {
        question: "One of the following is a variable",
        answers:[
            {text:"va", correct: false},
            {text:"variable", correct: false},
            {text:"assign", correct: false},
            {text:"const", correct: true}
        ]
    },
    {
        question: "One of the following is not a data type",
        answers:[
            {text:"object", correct: false},
            {text:"range", correct: true},
            {text:"string", correct: false},
            {text:"number", correct: false}
        ]
    },
    {
        question: `what will be the value "44" -  4`,
        answers:[
            {text:"444", correct: false},
            {text:"40", correct: true},
            {text:"null", correct: false},
            {text:"undefined", correct: false}
        ]
    }

]







const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-btn")
const nextButton = document.getElementById("next-btn")
const selection = document.getElementById("selection")




let currentQuestionIndex = 0;
score = 0;


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0
    nextButton.innerHTML = "Next"
    showQuestions()
}

function showQuestions() {
    resetState();
    let currentQuestion = html[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerButtons.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
    })
}


function resetState(){ 
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct")
        score++
    }else{
        selectedBtn.classList.add("incorrect")

    }
    Array.from(answerButtons.children).forEach(button =>{
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = true;
    })
    nextButton.style.display = "block"
}
function showScore() {

    if(score < 3){
        resetState()
        questionElement.innerHTML = `i guess your preety dumb you...scored                          
                                   ${score} out of ${html.length}!`
                nextButton.innerHTML = "Play Again"
        nextButton.style.display = "block"
        questionElement.style.textAlign ="center"
        nextButton.style.cursor="pointer"

    }else if(score > 3){
        resetState();
        questionElement.innerHTML = `Wow you must be really proud of your self...
        you scored ${score} out of ${html.length}!`
  nextButton.innerHTML = "Play Again"
        nextButton.style.display = "block"
        questionElement.style.textAlign ="center"
        nextButton.style.cursor="pointer"


    }else{
        resetState();
        questionElement.innerHTML = `That's awesome you scored ${score} out of ${html.length}!`
  nextButton.innerHTML = "Play Again"
        nextButton.style.display = "block"
        questionElement.style.textAlign ="center"
        nextButton.style.cursor="pointer"

    }
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < html.length) {
        showQuestions()
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < html.length){
        handleNextButton();
    }else{
        startQuiz()
    }
})













//css
selection.addEventListener("change", function () {
    selectedlength = this.selectedIndex
    if(this.selectedIndex === 1){

        let currentQuestionIndex = 0;
        score = 0;
        
        
        
        function startQuiz() {
            currentQuestionIndex = 0;
            score = 0
            nextButton.innerHTML = "Next"
            showQuestions()
        }
        
        function showQuestions() {
            resetState();
            let currentQuestion = css[currentQuestionIndex];
            let questionNo = currentQuestionIndex + 1;
            questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
            
            currentQuestion.answers.forEach(answer =>{
                const button = document.createElement("button");
                button.innerHTML = answer.text;
                button.classList.add("btn")
                answerButtons.appendChild(button)
                if(answer.correct){
                    button.dataset.correct = answer.correct
                }
                button.addEventListener("click", selectAnswer)
            })
        }
        
        
        function resetState(){ 
            nextButton.style.display = "none"
            while(answerButtons.firstChild){
                answerButtons.removeChild(answerButtons.firstChild)
            }
        }
        function selectAnswer(e){
            const selectedBtn = e.target;
            const isCorrect = selectedBtn.dataset.correct === "true";
            if (isCorrect) {
                selectedBtn.classList.add("correct")
                score++
            }else{
                selectedBtn.classList.add("incorrect")
        
            }
            Array.from(answerButtons.children).forEach(button =>{
                if (button.dataset.correct === "true") {
                    button.classList.add("correct")
                }
                button.disabled = true;
            })
            nextButton.style.display = "block"
        }
        function showScore() {
        
            if(score < 3){
                resetState()
                questionElement.innerHTML = `I guess your preety dumb you...scored                          
                                           ${score} out of ${css.length}!`
                        nextButton.innerHTML = "Play Again"
                nextButton.style.display = "block"
                questionElement.style.textAlign ="center"
                nextButton.style.cursor="pointer"
        
            }else if(score > 3){
                resetState();
                questionElement.innerHTML = `Wow you must be really proud of your self...
                you scored ${score} out of ${css.length}!`
          nextButton.innerHTML = "Play Again"
                nextButton.style.display = "block"
                questionElement.style.textAlign ="center"
                nextButton.style.cursor="pointer"
        
        
            }else{
                resetState();
                questionElement.innerHTML = `That's awesome you scored ${score} out of ${css.length}!`
          nextButton.innerHTML = "Play Again"
                nextButton.style.display = "block"
                questionElement.style.textAlign ="center"
                nextButton.style.cursor="pointer"
        
            }
        }
        
        function handleNextButton() {
            currentQuestionIndex++;
            if (currentQuestionIndex < css.length) {
                showQuestions()
            }else{
                showScore();
            }
        }
        nextButton.addEventListener("click", () =>{
            if(currentQuestionIndex < css.length){
                handleNextButton();
            }else{
                startQuiz()
            }
        })
        startQuiz()
    }












//javascrip
    selectedlength = this.selectedIndex
    if(this.selectedIndex === 2){
        let currentQuestionIndex = 0;
score = 0;


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0
    nextButton.innerHTML = "Next"
    showQuestions()
}

function showQuestions() {
    resetState();
    let currentQuestion = javaScript[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerButtons.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
    })
}


function resetState(){ 
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct")
        score++
    }else{
        selectedBtn.classList.add("incorrect")

    }
    Array.from(answerButtons.children).forEach(button =>{
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = true;
    })
    nextButton.style.display = "block"
}
function showScore() {

    if(score < 3){
        resetState()
        questionElement.innerHTML = `i guess your preety dumb you...scored                          
                                   ${score} out of ${javaScript.length}!`
                nextButton.innerHTML = "Play Again"
        nextButton.style.display = "block"
        questionElement.style.textAlign ="center"
        nextButton.style.cursor="pointer"

    }else if(score > 3){
        resetState();
        questionElement.innerHTML = `Wow you must be really proud of your self...
        you scored ${score} out of ${javaScript.length}!`
  nextButton.innerHTML = "Play Again"
        nextButton.style.display = "block"
        questionElement.style.textAlign ="center"
        nextButton.style.cursor="pointer"


    }else{
        resetState();
        questionElement.innerHTML = `That's awesome you scored ${score} out of ${javaScript.length}!`
  nextButton.innerHTML = "Play Again"
        nextButton.style.display = "block"
        questionElement.style.textAlign ="center"
        nextButton.style.cursor="pointer"

    }
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < javaScript.length) {
        showQuestions()
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < javaScript.length){
        handleNextButton();
    }else{
        startQuiz()
    }

})
    }startQuiz()

})







startQuiz()