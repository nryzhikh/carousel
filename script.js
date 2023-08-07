const container = document.getElementById('container');
const dots = document.getElementById('dots');
let currentTransformValue = 0;
let maxTransformValue = 0;
let minTranformValue = 0;


function nextSlide () {
    currentTransformValue -= 200
    if (currentTransformValue < minTranformValue) currentTransformValue = 0;
    container.style.transform = `translateX(${currentTransformValue}px)`;
    const activeDot = document.querySelector('.dot-active');
}

function prevSlide () {
    currentTransformValue += 200
    if (currentTransformValue > 0) currentTransformValue = minTranformValue;
    container.style.transform = `translateX(${currentTransformValue}px)`;
};

function nextDot () {
    const activeDot = document.querySelector('.dot-active');
    if(activeDot)activeDot.classList.remove('dot-active');
    const nextDot = document.querySelector(`[data-index="${-currentTransformValue / 200}"]`);
    nextDot.classList.add('dot-active');
};

function prevDot () {
    const activeDot = document.querySelector('.dot-active');
    if(activeDot)activeDot.classList.remove('dot-active');
    const prevDot = document.querySelector(`[data-index="${-currentTransformValue / 200}"]`);
    prevDot.classList.add('dot-active');
}

(function () {
    const images = [...document.querySelectorAll('img')];
    for (let i = 0; i < images.length; i++) {
        minTranformValue = -i * 200;
        // const img = images[i];
        // const imgWidth = img.clientWidth;
        // maxTransformValue += imgWidth;
        // img.style.left = `${i * imgWidth}px`;
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.setAttribute('data-index', i);
        dot.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            currentTransformValue = -index * 200;
            container.style.transform = `translateX(${currentTransformValue}px)`;
            const activeDot = document.querySelector('.dot-active');
            if(activeDot)activeDot.classList.remove('dot-active');
            e.target.classList.add('dot-active');
        });
        dots.appendChild(dot);
    };
    const specificDot = document.querySelector('.dot[data-index="0"]');
    specificDot.classList.add('dot-active');
    setInterval(() => {
        nextSlide();
        nextDot();
    }, 5000);
})();

document.getElementById('next').addEventListener('click', () => {
   nextSlide();
   nextDot();
});

document.getElementById('prev').addEventListener('click', () => {
    prevSlide();
    prevDot();
});
