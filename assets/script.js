const ageBlitter = document.querySelector('p#age-blitter')
const ageInput = document.querySelector('input#age-input')

function updateAgeBlitter() {
    ageBlitter.textContent = ageInput.value
    ageBlitter.style.transform = `translateX(${ageInput.value * 1.6}px)`
}

setInterval(updateAgeBlitter, 1)