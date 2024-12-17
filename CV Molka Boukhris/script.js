function submitQuiz() {
  
  const correctAnswers = {
       q1: 'c', 
      q2: 'c', 
      q3: 'b'  
    };
  let score = 0;
  const form = document.getElementById('quiz-form');
  const resultElement = document.createElement('div');
  resultElement.id = 'resultat';
  const answersElement = document.createElement('div');
  answersElement.id = 'reponses-correctes';
  
  for (let question in correctAnswers) {
      const selectedOption = form.querySelector(`input[name="${question}"]:checked`);
      if (!selectedOption) {
          alert(`Veuillez répondre à la question ${question}`);
          return; 
      }
  }

  for (let question in correctAnswers) {
      const selectedOption = form.querySelector(`input[name="${question}"]:checked`);
      if (selectedOption && selectedOption.value === correctAnswers[question]) {
          score++;
      }
  }

  
  resultElement.textContent = `Vous avez obtenu ${score} sur 3.`;
  form.appendChild(resultElement); 

  
  answersElement.textContent = "Les réponses correctes sont : " + JSON.stringify(correctAnswers, null, 2);
  answersElement.style.display = 'block';
  form.appendChild(answersElement); 
}


 
  
  