//get button
let randomizeBtn= document.querySelector('#randomizeColor');

//function to randomize color
let randomizeColor = () => {
    let randomizedColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor="#"+ randomizedColor;
    document.querySelector('#currentColor').innerHTML="Current Color: #"+randomizedColor
}

randomizeBtn.addEventListener('click', randomizeColor);