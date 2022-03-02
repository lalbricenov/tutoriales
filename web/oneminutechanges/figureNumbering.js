let figureNumbers = document.querySelectorAll(".figNumber")
for ( let i = 0; i < figureNumbers.length; i++){
    figureNumbers[i].innerHTML = `Figura ${i + 1}`;
}