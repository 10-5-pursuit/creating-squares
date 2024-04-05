const container = document.getElementById('container');
const buttonGenerator = document.getElementById('click');
const colorArray =  ["#47ae5c", "#a89fcf", "#2b077b", "#6fcfdc", "#238100", "#FEFF00", "#FF7B00", "#0055FF", "#3636b1", "#931b12", "#F88FFF"];
const eachDiv = document.getElementsByTagName('div');

buttonGenerator.addEventListener('click', () => {
    newDiv();
    console.log(eachDiv); 
});

const newDiv = () => {
    const innerDiv = document.createElement('div');
    innerDiv.setAttribute('class', 'colorDivvy');
    innerDiv.style.borderColor = colorArray[Math.floor(Math.random() * colorArray.length)];

    if (eachDiv.length === 0) {
        container.appendChild(innerDiv);
    } else {
        eachDiv[eachDiv.length - 1].appendChild(innerDiv);
    }
};  


