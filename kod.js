
const input = document.querySelector('input')
input.addEventListener("change", updateValue)
input.addEventListener('mousemove', updateValue)
function updateValue(){
    const percent = document.querySelector('span')
    //texContent pobiera zawartość tekstową danego tagu
    percent.textContent = this.value

    //documentElement - znaczy, że wchodzimy do właściwości elementu
    //style - do stylu
    //setProperty - dodaje w danym elemencie właściwość "--light" i ustawia jej wartość na this.value/100
    document.documentElement.style.setProperty("--light", this.value/100)
    document.documentElement.style.setProperty("--glow", this.value/3+ "px")
}
