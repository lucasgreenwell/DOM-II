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
    link.addEventListener("click", (e) => {
        e.preventDefault();
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

//nodelist of two text areas
const textContent = document.querySelectorAll(".text-content");

//changes textsize while being clicked on
for (let i = 0; i < textContent.length; i ++){
    let textArea = textContent[i];
    textArea.addEventListener("mousedown", () => {
        textArea.style.width = "100%";
    })
    textArea.addEventListener("mouseup", () => {
        textArea.style.width = "48%";
    })
}


//nodelist of two images
const imgContent = document.querySelectorAll(".img-content");

//rotates the images a bit while a key is pressed
document.addEventListener("keydown", function (){
    for (let i = 0; i < imgContent.length; i ++){
        let img = imgContent[i];
        img.style.transform = "rotate(45deg)"   
    }
})
document.addEventListener("keyup", function (){
    for (let i = 0; i < imgContent.length; i ++){
        let img = imgContent[i];
        img.style.transform = "rotate(0deg)"   
    }
})


const destinations = document.querySelectorAll(".destination");
// console.log(destinations);
//nodelist of three destination cards

document.addEventListener("keydown", () => {
    for (let i = 0 ; i < destinations.length; i ++){
        let destination = destinations[i];
        destination.style.display = "flex";
    }
})
document.addEventListener("scroll", () => {
    for (let i = 0 ; i < destinations.length; i ++){
        let destination = destinations[i];
        destination.style.display = "relative";
    }
})






