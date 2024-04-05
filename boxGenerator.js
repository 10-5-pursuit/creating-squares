const container = document.getElementById('container');
const buttonGenerator = document.getElementById('click');
const colorArray =  ["#EA0B0B", "#6540FC", "#63AECE", "#D16FDC", "#238100", "#FEFF00", "#FF7B00", "#0055FF", "#1C1C2E", "#FFA9A3", "#F88FFF"];
const eachDiv = document.getElementsByTagName('div');

buttonGenerator.addEventListener('click', () => {
    newDiv();
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
        // const colorBox = document.createElement('div');
        // colorBox.setAttribute('class', 'colorDivvy');
        // colorBox.style.borderColor = colorArray[Math.floor(Math.random()*colorArray.length)];
        // container.appendChild(colorBox);
        
    


