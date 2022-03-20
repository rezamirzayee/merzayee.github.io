const svg = document.querySelector('.round-progress__ring');
const circle = document.querySelector('.round-progress__circle');
let radius = 0;
let svgSize = 0;
let circumference = 0;
let currentPercentValue = 75;

let currentSlide = 0;

frame.onresize = function(){
    recalculateSizes();
}

recalculateSizes = function () {
    svgSize = svg.width.baseVal.value;
    radius = (svgSize / 2) - (15 * 2);
    radius += 20;
    circle.r.baseVal.value = radius;
    circumference = 2 * Math.PI * radius;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;
    setProgress(currentPercentValue);
};

function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
}

function getCurrentPercent() {
    currentSlide = document.querySelector('.slick-current');
    currentPercentValue = currentSlide.children[2].innerText.substr(0, 2);
    recalculateSizes();
}

recalculateSizes();

setInterval(getCurrentPercent, 500);