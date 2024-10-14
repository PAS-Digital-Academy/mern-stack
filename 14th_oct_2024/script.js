const body = document.getElementById("asjflkj");
const green_button = document.getElementById("button_green")
const red_button = document.getElementById("button_red")
const view_port = document.getElementById("button_container")


function change_to_red() {
    body.style.backgroundColor = "red";
    green_button.style.visibility = 'hidden';
    view_port.style.backgroundColor = "red"
}

function change_to_green() {
    body.style.backgroundColor = 'green'
    red_button.style.visibility = 'hidden'
    view_port.style.backgroundColor = "green"

}

function change_to_default() {
    body.style.backgroundColor = 'white'
    green_button.style.visibility = 'show'
    red_button.style.visibility = 'show'
    view_port.style.backgroundColor = "#797979"
}