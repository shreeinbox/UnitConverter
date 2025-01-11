/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/



function convertMeasures(){
    const nInput = document.getElementById("userInput").value;
    calculateConversions(nInput);
}

function calculateConversions(nInput){
    
    const nMeter = (nInput / 3.281).toFixed(3);
    const nFeet = (nInput * 3.281).toFixed(3);
    const nGallon = (nInput * 0.264).toFixed(3);
    const nLiter = (nInput / 0.264).toFixed(3);
    const nPound = (nInput * 2.204).toFixed(3);
    const nKilo = (nInput / 2.204).toFixed(3);
    console.log(nMeter)
    renderConversions(nInput,nMeter,nFeet,nGallon,nLiter,nPound,nKilo);
}

function renderConversions(nInput,nMeter,nFeet,nGallon,nLiter,nPound,nKilo){
    const lengthConv = `${nInput} meters = ${nFeet} feet | ${nInput} feet = ${nMeter} meters`
    const volumeConv = `${nInput} liters = ${nGallon} gallons | ${nInput} gallons = ${nLiter} liters`
    const massConv = `${nInput} kilos = ${nPound} pounds | ${nInput} pounds = ${nKilo} kilos`

    const lenEl = document.getElementById("lengthResult")
    const volEl = document.getElementById("volumeResult")
    const massEl = document.getElementById("massResult")
    lenEl.textContent = lengthConv;
    volEl.textContent = volumeConv;
    massEl.textContent = massConv;
}
