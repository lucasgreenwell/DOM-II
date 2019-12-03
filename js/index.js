// Your code goes here

//nodelist of the four navlinks
const navLinks = document.querySelectorAll(".nav-link");

//creates hoverlike responses for the navlinks
for (let i = 0; i < navLinks.length; i ++){
    let link = navLinks[i];
    link.addEventListener("mouseenter", () => {
        link.style.color = "red";
        link.style.fontSize = "2rem";
    })
    link.addEventListener("mouseout", () => {
        link.style.color = "black";
        link.style.fontSize = "1.6rem";
    })
}

//nodelist of three buttons
const buttons = document.querySelectorAll(".btn");

//creates multiple color states for the buttons
for (let i = 0; i < buttons.length; i ++){
    let button = buttons[i];
    button.addEventListener("click", () => {
        button.style.backgroundColor = "#212529";
        button.style.color = "#17A2B8";
    })
    button.addEventListener("dblclick", () => {
        button.style.backgroundColor = "#746";
        button.style.color = "#123";
    })
}

const textContent = document.querySelectorAll(".text-content");
// console.log(textContent);
//nodelist of two textareas

const imgContent = document.querySelectorAll(".img-content");
// console.log(imgContent);
//nodelist of two images

const destinations = document.querySelectorAll(".destination");
// console.log(destinations);
//nodelist of three destination cards




for (let i = 0; i < textContent.length; i ++){
    let img = imgContent[i];
    let textArea = textContent[i];
    textArea.addEventListener("mousedown", () => {
        textArea.style.width = "100%";
        img.style.alignSelf = "center";
    })
    textArea.addEventListener("mouseup", () => {
        textArea.style.width = "48%";
        
    })
}




