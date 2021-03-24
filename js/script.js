$(document).ready(function () {
    const age = parseInt(prompt("How old are you?"));
    if (age > 21) {
        $('#drinks').show();
    } else if (age === 21) {
        alert('Now do not go crazy here');
        $('#drinks').show();
    }
    else {
        $('#under-21').show()
    }
    const receipt = $("form#user-receipt").submit(function (event) {
        const beverage = parseInt($("#name-entry").val());
        const date = parseInt($("#date-entry").val());
        const address = parseInt($("#address-entry").val());

        const beer = $("#beer").parseInt(val());
        const wine = $("#wine").parseInt(val());
        const nonAl = $("#non-al").parseInt(val());
    })
});