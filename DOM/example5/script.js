const textArea = document.getElementById("textBox");
const charCount = document.getElementById('charCount');


textArea.addEventListener('input', () => {
   const count = textArea.value.length;
    charCount.innerHTML = `Character Count: ${count}`;
})