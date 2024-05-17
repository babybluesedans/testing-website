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

    function slideElement(id, distance, speed, direction) {
        let interval = speed * 1;
        let iterator = speed * 1;
        let element = document.getElementById(id);
        console.log(element)
        element.style.marginRight = "1px";
        console.log(element.style.marginTop)

        switch (direction) {
        case 1:
            console.log(element.style.marginBottom)
            for (let i=0; i < distance; i++) {
                    setTimeout(() => {
                        element.style.marginRight = `${parseInt(element.style.marginRight) + 1}px`;
                    }, `${interval += iterator}`)
        
                }
            break;
        case 2:
            direction = "marginLeft";
            break;
        case 3:
            direction = "marginTop";
            break;
        case 4:
            direction =  "marginRight";
            break;
        }


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
        greeting.id = "greeting";
        this.setTimeout(() => {
            fadeInNewElement(greeting, 1);
            this.setTimeout(() => {
                let usernameElement = document.createElement('span');
                usernameElement.innerHTML = ' ' + username;
                usernameElement.style.fontStyle = "italic";
                usernameElement.style.fontWeight = '100';
                console.log("me! me!")
                this.setTimeout(slideElement(greeting.id, 161, 3, 1), `${duration * 2}`);
                fadeInNewElement(usernameElement, 2);
            }, `${duration}`) 
        }, `${duration}`);
        }
})


    