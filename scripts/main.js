document.addEventListener('DOMContentLoaded', () => {
    const nextButton = document.querySelector('.button--secondary');
    nextButton.addEventListener('click', () => {
        alert('Следующий вопрос!');
    });
});