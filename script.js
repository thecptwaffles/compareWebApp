var output = document.getElementById("cool")

function returnText(){
    let start = document.getElementById("userInput").value;
    let end = document.getElementById("userInputCompare").value;

    document.getElementById('cool').innerHTML = start == end
}