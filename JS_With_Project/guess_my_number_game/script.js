document.querySelector(".check").addEventListener('click', () => {
    let randomVal = Math.random(1, 20);
    let val = document.querySelector('.guess').value;
    if (randomVal == (Number) val) {
        document.querySelector('.label-highscore').textContent = val;
    }
    else {
        document.querySelector('.label-score').val = val--;
    }

})