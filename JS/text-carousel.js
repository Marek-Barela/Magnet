const textParagraphs = document.querySelectorAll('.carousel-paragraphs p'),
    leftArrow = document.getElementById('left-arrow'),
    rightArrow = document.getElementById('right-arrow');
let currentIndex = 0;
function nextText() {
    resetText()
    currentIndex++
    if(currentIndex <= textParagraphs.length-1) {
        textParagraphs[currentIndex].style.display = 'block'
    }
    else{
        currentIndex = 0
        textParagraphs[currentIndex].style.display = 'block'
    }
};
function previousText() {
    resetText()
    currentIndex--
    if(currentIndex >= 0) {
        textParagraphs[currentIndex].style.display = 'block'
    }
    else {
        currentIndex = textParagraphs.length - 1
        textParagraphs[currentIndex].style.display = 'block'
    }
}
function resetText() {
    textParagraphs.forEach(function(nr) {
        nr.style.display = 'none'
    });
}
rightArrow.addEventListener('click', nextText)
leftArrow.addEventListener('click', previousText)