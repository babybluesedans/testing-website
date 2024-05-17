let opacity;
let username;
let duration = 0;

function raiseOpacity(element) {
    opacity += 10;
    string = `"${opacity}%"`;
    element.style.opacity = string;
    console.log(string)
}

function fadeInNewElement(element, speed) {
    console.log('test');
    element.style.opacity = "0%";
    document.body.appendChild(element);
    opacity = 0;
    let interval = 0;
    for (let i=0; i < 20; i++) {
        interval += speed * 25;
        setTimeout(() => {
            opacity += 5;
            element.style.opacity = `${opacity}%`;
        }, `${interval}`);

     }}


function fadeOutElement(element, speed) {
    element.style.opacity = "100%";
    opacity = 100;
    let interval = 0;
    for (let i=0; i < 20; i++) {
        interval += speed * 25;
        setTimeout((input) => {
            opacity -=5;
            element.style.opacity = `${opacity}%`;
        }, `${interval}`);
        duration =  speed * 25 * 20;
    
    }}

function slideElement(element, distance) {
    
}

addEventListener("DOMContentLoaded", (event) => {
    let input = document.createElement('input');
    input.setAttribute("id", "name-field");
    input.setAttribute("placeholder", "What is your name?");
    input.setAttribute("autofocus", "true");
    input.setAttribute("outline", "none");
    fadeInNewElement(input, 2);
})

addEventListener("keydown", function eventHandler(event) {
    if (event.defaultPrevented) {
        return;
    }

    if (event.code === "Enter") {
        removeEventListener("keydown", eventHandler)
        username = document.getElementById("name-field").value;
        let element = document.getElementById("name-field");
        fadeOutElement(element, 2);
        console.log(element);
        console.log('teeeeest');
        this.setTimeout(() => {
            console.log(element);
            element.remove();
            console.log('timer done should be true');
        }, `${duration}`)

        let greeting = document.createElement('span')
        greeting.innerHTML = "Hello ";
        this.setTimeout(() => {
            fadeInNewElement(greeting, 1);
            this.setTimeout(() => {
                let usernameElement = document.createElement('span');
                usernameElement.innerHTML = ' ' + username;
                usernameElement.style.fontStyle = "italic";
                usernameElement.style.fontWeight = '100';
                console.log("me! me!")
                fadeInNewElement(usernameElement, 1);
            }, `${duration}`) 
        }, `${duration}`);
        }
})


    