
function rollTheDice(){
    const numOfDice= document.getElementById('numOfDice').value;
    const diceResult=document.getElementById('diceResult');
    const diceimages=document.getElementById('diceimages');
    const values=[];
    const img=[];
    for(let i=0; i< numOfDice; i++){
    const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        img.push(`<img src="images/${value}.jpg">`);
    }
    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceimages.innerHTML =img.join('');


}