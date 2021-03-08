const btns = document.querySelectorAll('.question-button');

btns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const questionCard = e.target.parentElement.parentElement.parentElement;
    questionCard.classList.toggle('open-question');
  });
});
