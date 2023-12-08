const quesData=[{
    question:"In golf, what name is given to a hole score of two under par?",
    a:"Birdie",
    b:"Bogey",
    c:"Albatross",
    d:"Eagle",
    correct:"d"
},
{
    question:"In what sport is a 'shuttlecock' used?",
    a:"Rugby",
    b:"Badminton",
    c:"Table Tennis",
    d:"Cricket",
    correct:"b"
},{
    question:"Who did Steven Gerrard win the Champions League with?",
    a:"Liverpool",
    b:"Real Madrid",
    c:"Chelsea",
    d:"Man City",
    correct:"a"
},{
    question:" 'Stadium of Light' is the home stadium for which soccer team?",
    a:"Paris Saints-Germain",
    b:"Barcelona FC",
    c:"Sunderland FC",
    d:"Manchester United",
    correct:"c"
},{
    question:" When was the first official international game played?",
    a:"1865",
    b:"1863",
    c:"1880",
    d:"1872",
    correct:"d"
},

]

const quiz=document.getElementById('quiz')
const answersList=document.querySelectorAll('.answer')
const question=document.getElementById('question')
const a_text= document.getElementById('a-data')
const b_text= document.getElementById('b-data')
const c_text= document.getElementById('c-data')
const d_text= document.getElementById('d-data')
const submitButton=document.getElementById('submit')

let currentQuiz=0
let score=0
loadQuiz()
function loadQuiz(){
    deSelectAns()
    const currentQuestionData= quesData[currentQuiz]
    question.innerText=currentQuestionData.question
    a_text.innerText= currentQuestionData.a
    b_text.innerText=currentQuestionData.b
    c_text.innerText=currentQuestionData.c
    d_text.innerText=currentQuestionData.d

}

function deSelectAns(){
    answersList.forEach(ans=>ans.checked=false)
}

function getAnswer(){
    let ansKey
    answersList.forEach(ans=>{
        if(ans.checked){
            ansKey=ans.id
        }
    })
    return ansKey
}

submitButton.addEventListener('click',()=>{
    const answer=getAnswer()
    if(answer){
        if(answer===quesData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if(currentQuiz<quesData.length){
            loadQuiz()
        } else{
            quiz.innerHTML=`
            <h2>You final score is ${score}</h2>
            <button onClick="location.reload()">Reload</button>`
        }
    }
})