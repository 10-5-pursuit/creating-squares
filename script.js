const body = document.querySelector("body");
const button = document.querySelector("button");
let counter = 0;

//must first be able to create a div, you can console log to know if the div was created
button.addEventListener('click', () => {
    const div = document.createElement('div');
    div.setAttribute('class', `container${counter}`)
    div.style.border = `15px solid ${randomColorGenerator()}`;
    div.style.height = '100%';
    // const container = document.querySelector(`.container${counter < 1 ? '0' : counter}`)
    if(counter > 0) {
        // the querySelector is grabbing the class container based on the number container that it is at that current time.
        const container = document.querySelector(`.container${counter - 1}`) 
        // div.style.border = '15px solid blue';
        if(counter >= 28) {
            return ;
        } else {
        container.appendChild(div) 
        }
    } else {
        body.appendChild(div);
        
    }
    counter++;
    

    console.log(div.className);
})


function randomColorGenerator() {
    let red = Math.floor(Math.random() * 255);
    let blue =  Math.floor(Math.random() * 255);
    let green =  Math.floor(Math.random() * 255);
    
    return `rgb(${red}, ${green}, ${blue})`;
}









// // If it's not the first div, append the new div as a child of the previous one
// if (counter > 0) {
//     const prevDiv = document.querySelector(`.main__div${counter - 1}`);
//     prevDiv.appendChild(div);
// } else {
//     // If it's the first div, append it to the main__box
//     const mainBox = document.querySelector('.main__box');
//     mainBox.appendChild(div);
// }