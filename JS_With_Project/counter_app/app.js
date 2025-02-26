let count = 0;
let previousCounts = "";
document.getElementById('incBtn').addEventListener("click", ()=> {
    count++;
    document.getElementById("counter").innerHTML = count;
});

document.getElementById('decBtn').addEventListener('click',  ()=> {
  count--;
  document.getElementById('counter').innerHTML = count;
});

document.getElementById('saveBtn').addEventListener('click', ()=> {
   previousCounts +=  count +" → ";
    document.getElementById('previousCount').textContent ="Previous Value: "+ previousCounts;
});

document.getElementById('resetBtn').addEventListener('click', () => {
    count = 0;
    previousCounts = "";
    document.getElementById('counter').textContent = count;
    document.getElementById('previousCount').textContent = "";
});