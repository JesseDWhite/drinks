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
});