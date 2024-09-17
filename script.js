function tablePrint(){
    let tableNum = document.getElementById("table-num").value;
    let minLength = document.getElementById("min-length").value;
    let maxlength = document.getElementById("max-length").value;
    let display = document.getElementById("display");

    for(let i = minLength; i <= maxlength; i++){
        display.innerHTML += `${tableNum} x ${i} = ${tableNum * i} </br>`;
    }
}

function reset(){
    tableNum = document.getElementById("table-num").value = "";
    minLength = document.getElementById("min-length").value = "";
    maxlength = document.getElementById("max-length").value = "";

    document.getElementById("display").innerHTML = "";
}