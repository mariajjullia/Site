const questions = [
  // mesmas 10 perguntas do exemplo anterior
  {
    question: "Qual linguagem é usada para aplicar estilos em páginas web?",
    options: ["HTML", "CSS", "JavaScript", "PHP"],
    answer: "CSS"
  },
  {
    question: "O que significa HTML?",
    options: ["HyperText Markup Language", "HighText Machine Language", "HyperTabular Markup Language", "None of the above"],
    answer: "HyperText Markup Language"
  },
  {
    question: "Qual é o resultado de 3 + '3' em JavaScript?",
    options: ["6", "33", "NaN", "Erro"],
    answer: "33"
  },
  {
    question: "Qual comando é usado para declarar uma variável em JavaScript?",
    options: ["var", "int", "String", "dim"],
    answer: "var"
  },
  {
    question: "Qual empresa desenvolveu a linguagem Python?",
    options: ["Microsoft", "Apple", "Google", "Nenhuma das anteriores"],
    answer: "Nenhuma das anteriores"
  },
  {
    question: "Como declaramos uma função em JavaScript?",
    options: ["function minhaFunc()", "def minhaFunc()", "fun minhaFunc()", "void minhaFunc()"],
    answer: "function minhaFunc()"
  },
  {
    question: "Qual símbolo é usado para comentários de linha única em JavaScript?",
    options: ["//", "/*", "#", "<!--"],
    answer: "//"
  },
  {
    question: "Qual desses é um framework JavaScript?",
    options: ["Laravel", "React", "Django", "Flask"],
    answer: "React"
  },
  {
    question: "Qual método converte uma string para número em JavaScript?",
    options: ["parseString()", "stringToNumber()", "parseInt()", "toInt()"],
    answer: "parseInt()"
  },
  {
    question: "Qual é a saída de: typeof [] em JavaScript?",
    options: ["object", "array", "list", "undefined"],
    answer: "object"
  }
];

if (document.getElementById('quiz-container')) {
  const name = localStorage.getItem('username');
  document.getElementById('greeting').innerText = `Olá, ${name}! Responda ao quiz:`;

  const container = document.getElementById('quiz-container');
  const progress = document.getElementById('progress');

  questions.forEach((q, i) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <p><strong>${i + 1}. ${q.question}</strong></p>
      ${q.options.map(opt => `
        <label>
          <input type="radio" name="q${i}" value="${opt}"> ${opt}
        </label>
      `).join('')}
      <hr/>
    `;
    container.appendChild(div);
  });

  // Timer
  let time = 300; // 5 minutos
  const timeDisplay = document.getElementById('time');
  const timer = setInterval(() => {
    time--;
    timeDisplay.textContent = time;
    if (time === 0) {
      clearInterval(timer);
      submitQuiz();
    }
  }, 1000);

  document.getElementById('submit-btn').addEventListener('click', submitQuiz);

  function submitQuiz() {
    let score = 0;
    questions.forEach((q, i) => {
      const selected = document.querySelector(`
