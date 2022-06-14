let text = 'software engineer'
let result = ''

for(let i = 0; i < text.length; i++){
    if(i % 2 === 0 || i === 0){
        result = text[i].toLowerCase()
    }else{
        result = text[i].toUpperCase()
    }
    console.log(result)
}
