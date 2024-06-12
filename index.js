const type = document.querySelector(".type-writer")
const typeWords = ["Full Stack Developer", "Software Engineer", "Freelance Web Dev"]
var typeWordIndex = 0;
let sleepTime = 100;

function sleep(ms){
    return new Promise ((resolve) => {
        setTimeout(resolve, ms);
    })
}

const wordType = async () => {
    while(true){
        var currentWord = typeWords[typeWordIndex]
        for (var i=0; i < currentWord.length; i++){
            type.textContent = currentWord.substring(0, i + 1)
            await sleep(sleepTime)
        }

        await sleep(sleepTime * 10);

        for (var i=currentWord.length; i > 0; i--){
            type.innerText = currentWord.substring(0, i - 1)
            await sleep(sleepTime)
        }

        await sleep(sleepTime * 2);

        if (typeWordIndex === typeWords.length - 1){
            typeWordIndex = 0
        } else{
            typeWordIndex++
        }
    }
}

wordType()

function hide(){
    var bar = document.querySelector(".sidebar");
    bar.style.display = "none"

    }
