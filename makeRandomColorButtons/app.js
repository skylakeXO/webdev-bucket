const buttons = document.querySelectorAll('button');
const h2s = document.querySelectorAll('h2');

const genRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `RGB(${r}, ${g}, ${b})`;
}

function colorIt() {
    this.style.backgroundColor = genRandColor();
    this.style.color = genRandColor();
}

for(let btn of buttons) {
    btn.addEventListener('click', colorIt);
}
for(let h2 of h2s) {
    h2.addEventListener('click', colorIt);
}