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

    //alert(document.getElementById("launchStatus").innerHTML);

    //console.log("INSIDE");

    //alert(document.getElementById("pilotStatus"));

    //alert("INSIDE");

    let validPilot = validateInput(pilot); 
    let validCopilot = validateInput(copilot);
    let validFuelLevel = validateInput(fuelLevel);
    let validCargoLevel = validateInput(cargoLevel);

    let fuelCheck = true;
    let cargoCheck = true;

    //alert(validPilot+validCopilot+validFuelLevel+validCargoLevel);

    if(validPilot === "Empty" || validCopilot === "Empty" || validFuelLevel === "Empty" || validCargoLevel === "Empty"){
        alert("All fields are required!");
        // stop the form submission
        event.preventDefault();
        return;
    }else if(validPilot === "Is a Number" || validCopilot === "Is a Number"){
        alert("The pilots' names should be Strings!");
        // stop the form submission
        event.preventDefault();
        return;
    }else if(validFuelLevel === "Not a Number" || validCargoLevel === "Not a Number"){
        alert("Fuel Level and Cargo Mass need to be Numbers!")
        event.preventDefault();
        return;
    }

    const pilotElement = document.getElementById("pilotStatus");
    const copilotElement = document.getElementById("copilotStatus");

    pilotElement.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotElement.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    
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
    //alert("BEFORE"+document.getElementById("launchStatus").innerHTML);
    //alert(document.getElementById('launchStatus').innerHTML); 
    const element = document.getElementById("launchStatus"); 
    element.innerHTML = "Shuttle Not Ready for Launch";
    //document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch"; 
    //alert("AFTER"+document.getElementById("launchStatus").innerHTML);
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;