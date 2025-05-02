const container = document.querySelectorAll('.container');

container.forEach((container) => {
    const ques = container.querySelector('.question');
    const ans = container.querySelector('.answer');
    const toggle = container.querySelector('.toggle');

    ques.addEventListener('click', () => {
        container.classList.toggle('active');

        if (container.classList.contains('active')) {
            toggle.textContent = '-';
            ans.style.display = 'block';
        } else {
            toggle.textContent = '+';
            ans.style.display = 'none';
        }

    })
})