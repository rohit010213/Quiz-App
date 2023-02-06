
const question = [
    {
        question : "Which of the following is markup language",
        a : "Html",
        b : "Javascript",
        c : "Php",
        d : " CSS",
        correct : "a" ,
    },

    {
        question : "What year was Javascript launched",
         a : "1996",
         b : "1995",
         c : "1994",
         d : "None of The Above",
         correct : "b" ,
    },

    {
        question : "Which type of JavaScript language is",

        a : "Object-Oriented",
        b : "Object-Based",
        c : "Assembly-language",
        d : "High-level",
        correct : "b",
    }

 ];

let index = 0;
let total = question.length;
let right = 0;
let wrong = 0;
const questionbox = document.getElementById("questionbox")
const Optioninput = document.querySelectorAll(".Option")
const loadquestuon =() => {
    if (index === total) {
        return endquiz()
    }
    reset();
    const data = question[index]
    questionbox.innerText = ` ${index + 1}) ${data.question}`;
    Optioninput[0].nextElementSibling.innerText = data.a;
    Optioninput[1].nextElementSibling.innerText = data.b;
    Optioninput[2].nextElementSibling.innerText = data.c;
    Optioninput[3].nextElementSibling.innerText = data.d;
}

const submitquiz =() => {
    const data = question[index]
    const ans = getAnswer()
    console.log(ans)
    
    if (ans == data.correct) {
        right++;
        
    } else {
        wrong++;
    }
    index++;
    loadquestuon();
    
} 

const getAnswer = () => {
    let answer;
    Optioninput.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;

            }
        }
    )
    return answer;
}

const reset = () => {
    Optioninput.forEach(
        (input) => {
            input.checked = false;

        }
    )
}

const endquiz = () => {
     document.getElementById("box").innerHTML = `
    <h3> Thank You For Playing The Quiz </h3>
    <h2> ${right} / ${total} are correct </h2> 
    `
}

loadquestuon();