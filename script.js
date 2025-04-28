const qnData = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris"
    },
    {
      question: "What is the largest planet in our Solar System?",
      options: ["Earth", "Jupiter", "Saturn", "Mars"],
      answer: "Jupiter"
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Leo Tolstoy", "Oscar Wilde", "Charles Dickens"],
      answer: "William Shakespeare"
    },
    {
      question: "Which is the longest river in the world?",
      options: ["Amazon", "Yangtze", "Mississippi", "Nile"],
      answer: "Nile"
    },
    {
      question: "What is the currency of Japan?",
      options: ["Yen", "Won", "Dollar", "Euro"],
      answer: "Yen"
    },
    {
      question: "Which animal is known as the 'Ship of the Desert'?",
      options: ["Horse", "Camel", "Elephant", "Donkey"],
      answer: "Camel"
    },
    {
      question: "What is the highest waterfall in the world?",
      options: ["Niagara Falls", "Victoria Falls", "Angel Falls", "Iguazu Falls"],
      answer: "Angel Falls"
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      answer: "Pacific Ocean"
    },
    {
      question: "What is the biggest flower in the world?",
      options: ["Rose", "Sunflower", "Rafflesia", "Lily"],
      answer: "Rafflesia"
    },
    {
      question: "How many continents are there on Earth?",
      options: ["5", "6", "7", "8"],
      answer: "7"
    }
  ];
  
  let score = 0;
  let currentqn_index = 0;
  
  const startButton = document.querySelector("#start-btn");
  const quizContain = document.querySelector("#quiz-container");
  const qn1 = document.querySelector("#qn");
  const opt1 = document.querySelector("#opt");
  
  startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    quizContain.style.display = "block";
    loadquestion();
  });
  
  function loadquestion() {
    const currentqn = qnData[currentqn_index];
    qn1.innerHTML = currentqn.question; 
    opt1.innerHTML = "";
  
    currentqn.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.classList.add("option-btn");
  
      btn.addEventListener("click", () => {
        if (option === currentqn.answer) {
          score++;
          alert("✅ Correct!");
        } else {
          alert("❌ Oops! Wrong Answer!");
        }
        currentqn_index++;
        if (currentqn_index < qnData.length) {
          loadquestion();
        } else {
          showscore();
        }
      });
  
      opt1.appendChild(btn); 
    });
  }
  
  function showscore() {
    quizContain.innerHTML = `
      <h2>Your final score is ${score}/${qnData.length} 🎉</h2>
      <button onclick="location.reload()">Play Again</button>
    `;
  }
  