let opacity;
let username;

function raiseOpacity(element) {
    opacity += 10;
    string = `"${opacity}%"`;
    element.style.opacity = string;
    console.log(string)
}

function fadeInNewElement(element) {
    console.log('test');
    element.style.opacity = "0%";
    document.body.appendChild(element);
    let input = document.getElementById('name-field')
    opacity = 0;
    let interval = 0;
    for (let i=0; i < 20; i++) {
        interval += 50;
        setTimeout((input) => {
            opacity += 5;
            element.style.opacity = `${opacity}%`;
        }, `${interval}`);
     }}


function fadeOutElement(element) {
    element.style.opacity = "100%";
    opacity = 100;
    let interval = 0;
    for (let i=0; i < 20; i++) {
        interval += 50;
        setTimeout((input) => {
            opacity -=5;
            element.style.opacity = `${opacity}%`;
        }, `${interval}`);
    
    }}

addEventListener("DOMContentLoaded", (event) => {
    let input = document.createElement('input');
    input.setAttribute("id", "name-field");
    input.setAttribute("placeholder", "What is your name?");
    input.setAttribute("autofocus", "true");
    input.setAttribute("outline", "none");
    fadeInNewElement(input);
})

addEventListener("keydown", (event) => {
    if (event.defaultPrevented) {
        return;
    }

    if (event.code === "Enter") {
            username = document.getElementById("name-field").value;
            let element = document.getElementById("name-field");
            fadeOutElement(element);
        }
        
    
})


    