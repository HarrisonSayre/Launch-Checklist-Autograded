// Write your JavaScript code here!

//const { validateInput, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

    //console.log("Testing");
    //this.window.confirm("Gello");
    let form = document.querySelector("form");

    let pilotNameInput = document.querySelector("input[name=pilotName");
    let copilotNameInput = document.querySelector("input[name=copilotName"); 
    let fuelLevelInput = document.querySelector("input[name=fuelLevel"); 
    let cargoMassInput = document.querySelector("input[name=cargoMass");

    let shuttleList =  document.getElementById("faultyItems"); ///Placeholder???

    //alert(document.getElementById("launchStatus").innerHTML);

    //let oiginal =  document.getElementById("pilotStatus"); 
    //alert("HUH?"+oiginal.style.color.value);

    //alert(document.getElementById("pilotStatus"));

    form.addEventListener("submit", function(event) {

         

        formSubmission(document, shuttleList, pilotNameInput.value, copilotNameInput.value, fuelLevelInput.value, cargoMassInput.value);
        //shuttleList.
        //alert("HELLO");
        //alert(shuttleList);
        //if(validateInput(pilotNameInput.value) === "Empty"){
        //    alert("EMPTY");
        //}
        //alert("PilotNameInput="+pilotNameInput.value);
        //alert(`Submitted. ${pilotNameInput.value} ${copilotNameInput.value} ${fuelLevelInput.value} ${cargoMassInput.value}`);
    });



    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    
 });