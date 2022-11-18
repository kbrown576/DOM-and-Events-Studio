// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function (){
    const takeOffButton = document.getElementbyId("takeoff");

    takeOffButton.addEventListener('click', function (){
let confirmation = window.confirm("Confirm that the shuttle is ready for takeoff.")
if (confirmation === true) {
    document.getElementById("flightStatus").innerHTML = "Shuttle in flight."
    document.getElementById("shuttleBackground").style.backgroundColor = "blue";
    document.getElementById("shuttleHeight").innerHTML = 10000;
}
    });
    const landButton = documnet.getElementById("landing")
    landButton.addEventListener('click', function (){
        let confirmation = window.confirm("Confirm that the shuttle is landing. Landing gear engaged.")
        if (confirmation === true) {
            document.getElementById("flightStatus").innerHTML = "The shuttle has landed."
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("shuttleHeight").innerHTML = 0;
        }
    });
    const abortButton = documnet.getElementById("missionAbort")
    abortButton.addEventListener('click', function (){
        let confirmation = window.confirm("Confirm that you want to abort mission.")
        if (confirmation === true) {
            document.getElementById("flightStatus").innerHTML = "Mission Aborted."
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("shuttleHeight").innerHTML = 0;
        }
    });    
    
        })