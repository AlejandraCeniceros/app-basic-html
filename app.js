const buttons = document.querySelectorAll('button');

const func = () => {
    console.log(event)
    alert ("Era OOP");

}

buttons.forEach(
    button => button.addEventListener("click")
);