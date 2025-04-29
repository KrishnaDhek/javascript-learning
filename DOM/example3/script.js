
const input = document.getElementById("input");
const btn = document.getElementById("btn");
btn.addEventListener('click', () => {
    const name = input.value;
    const div = document.createElement("div");
    div.innerText = ` Hello, ${name}! Welcome to my website! inside the`
    document.body.appendChild(div)
    input.value = "";
})