// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
    document.getElementById("missionTarget").innerHTML =  `
    
    <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src="${imageUrl}"></img>

    `
 }
 
 function validateInput(testInput) {
    if(testInput === ""){
        return "Empty";
    }
    else if (isNaN(testInput)){
        return "Not a Number";
    }
    else if(!isNaN(testInput)){
        return "Is a Number";
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let validPilot = validateInput(pilot); 
    let validCopilot = validateInput(copilot);
    let validFuelLevel = validateInput(fuelLevel);
    let validCargoLevel = validateInput(cargoLevel);

    let fuelCheck = true;
    let cargoCheck = true;

    if(validPilot === "Empty" || validCopilot === "Empty" || validFuelLevel === "Empty" || validCargoLevel === "Empty"){
        alert("All fields are required!");
        event.preventDefault();
        return;
    }else if(validPilot === "Is a Number" || validCopilot === "Is a Number"){
        alert("The pilots' names should be Strings!");
        event.preventDefault();
        return;
    }else if(validFuelLevel === "Not a Number" || validCargoLevel === "Not a Number"){
        alert("Fuel Level and Cargo Mass need to be Numbers!")
        event.preventDefault();
        return;
    }

    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;

    if(fuelLevel < 10000){
        noGo(document);
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        fuelCheck = false;
    }else{
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
    }
    if(cargoLevel > 10000){
        noGo(document);
        document.getElementById("cargoStatus").innerHTML =  "Cargo mass too heavy for launch"
        cargoCheck = false;
    }else{
        document.getElementById("cargoStatus").innerHTML =  "Cargo mass low enough for launch";
    }
    if(fuelCheck && cargoCheck){
        document.getElementById('launchStatus').style.color ='green';
        document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch"; 
        return;
    }return;
 }

 function noGo(document){
    document.getElementById('faultyItems').style.visibility = 'visible';
    document.getElementById('launchStatus').style.color ='red';
    document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
 }
 
 async function myFetch() {
     let planetsReturned;
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
            return response.json();  
         });
    return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return (planets[index]);
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;