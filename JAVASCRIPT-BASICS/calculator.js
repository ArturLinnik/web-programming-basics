function numbers(myNumber) {
    document.getElementById("demo").innerHTML = "";
    var selectInput = "firstInput";

    if (document.getElementById("firstInput").value != "" && document.getElementById("secondInput").value == "")
        var selectInput = "secondInput";

    if (document.getElementById("firstInput").value != "" && document.getElementById("secondInput").value != "")
        document.getElementById("firstInput").value = "";
        document.getElementById("secondInput").value = "";

    document.getElementById(selectInput).value = document.getElementById(myNumber).id;
}

function operations(myOperation) {
    if (myOperation == "sum")
        var result = parseInt(document.getElementById("firstInput").value) + parseInt(document.getElementById("secondInput").value);
    if (myOperation == "sub")
        var result = parseInt(document.getElementById("firstInput").value) - parseInt(document.getElementById("secondInput").value);
    if (myOperation == "mult")
        var result = parseInt(document.getElementById("firstInput").value) * parseInt(document.getElementById("secondInput").value);
    if (myOperation == "div")
        var result = parseInt(document.getElementById("firstInput").value) / parseInt(document.getElementById("secondInput").value);

    document.getElementById("demo").innerHTML = "Your result is: " + result;
}