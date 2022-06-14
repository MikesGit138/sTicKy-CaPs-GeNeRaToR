function generate() {
    let text = document.getElementById('text').value
    let result = document.getElementById('result')

    for (let i = 0; i < text.length; i++) {
        if (i % 2 === 0 || i === 0) {
            result.textContent += text[i].toLowerCase()
        } else {
            result.textContent += text[i].toUpperCase()
        }

    }

}

function newWord(){
    let result = document.getElementById('result')
    result.textContent = ''
}
