
const btn = document.getElementById("btn");

btn.addEventListener('click', () => {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
})

function getRandomColor(){
    const letter = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++){
        color += letter[Math.floor(Math.random() * 16)];
    }
    return color;
}