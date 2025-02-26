// Obtendo elementos HTML
const ageBlitter = document.querySelector('p#age-blitter')
const ageInput = document.querySelector('input#age-input')

// Função que atualiza o exibidor de valor do input do tipo range
function updateAgeBlitter() {
    ageBlitter.textContent = ageInput.value
    ageBlitter.style.transform = `translateX(${ageInput.value * 1.6}px)`
}

setInterval(updateAgeBlitter, 1)