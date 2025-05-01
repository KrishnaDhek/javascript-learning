const accordion = document.querySelectorAll('.accordion');

accordion.forEach(accordion => {
    const question = accordion.querySelector('.question');
    const toggle = accordion.querySelector('.toggle');
    question.addEventListener('click', () => {
        accordion.classList.toggle('active');

        if (accordion.classList.contains('active')) {
            toggle.textContent = '-';
        } else {
            toggle.textContent = '+';
        }
    })

})