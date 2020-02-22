const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const images = document.querySelectorAll('.gallery-img');

let indexInImages = 0;

function disableButton() {
    if (indexInImages === 0) {
        prevButton.setAttribute('disabled', 'true');
    } else if (indexInImages === images.length - 1) {
        nextButton.setAttribute('disabled', 'true');
    } else {
        prevButton.removeAttribute('disabled');
        nextButton.removeAttribute('disabled');
    }
}

function showImage() {
    images[indexInImages].classList.remove('active');
    if (event.target === prevButton) {
        indexInImages -= 1;
    } else if (event.target === nextButton) {
        indexInImages += 1;
    }

    images[indexInImages].classList.add('active');  
}

function handleClick(event) {
    showImage();
    disableButton();
}

prevButton.addEventListener('click', handleClick);
nextButton.addEventListener('click', handleClick);