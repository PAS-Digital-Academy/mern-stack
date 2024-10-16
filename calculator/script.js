function activate_button(bid) {
    document.querySelectorAll(".operand").forEach(e => {
        if (e.id === bid) {
            e.classList.add("operand-selected");
        } else {
            e.classList.remove("operand-selected")
        }
    })
}





function clear_all_fields() {
    document.getElementById("input-box1").value = ''
    document.getElementById("input-box2").value = ''
    document.getElementById("input-box3").value = ''
}




function claculate_result() {
    let num1 = parseFloat(document.getElementById("input-box1").value)
    let num2 = parseFloat(document.getElementById("input-box2").value)


    let selected_operand = '';

    document.querySelectorAll(".operand").forEach(e => {
        if (e.classList.contains('operand-selected')) {
            selected_operand = e.id
        }
    })



    if (selected_operand === '') {
        alert("Please select an operand")
    } else {
        switch (selected_operand) {
            case 'add-btn':
                document.getElementById("input-box3").value = num1 + num2
                break;
            case 'subtract-btn':
                document.getElementById("input-box3").value = num1 - num2
                break;
            case 'multiply-btn':
                document.getElementById("input-box3").value = num1 * num2
                break
            case 'division-btn':
                document.getElementById("input-box3").value = num1 / num2
                break
        }

    }

}



function set_active_input(id) {
    if (id == 'input-box1') {
        document.querySelector("#input-box1").classList.add("active_input");
        document.querySelector("#input-box2").classList.remove("active_input");
    } else if (id == "input-box2") {
        document.querySelector("#input-box1").classList.remove("active_input");
        document.querySelector("#input-box2").classList.add("active_input");
    } else {
        document.querySelector("#input-box1").classList.remove("active_input");
        document.querySelector("#input-box2").classList.remove("active_input");
    }

}



function append_to_input_box(number) {


    // turnery operator 
    // boolean ? state1 : state2
    // true -> state1
    // false -> state2


    // let active_input = document.querySelectorAll(".input-box")[0].classList.contains("active_input") ?
    //     document.getElementById("input-box1") : document.querySelectorAll(".input-box")[1].classList.contains("active_input") ?
    //         document.getElementById("input-box2") : null


    let active_input = null;

    if (document.querySelector("#input-box1").classList.contains('active_input')) {
        active_input = document.getElementById("input-box1");
    }

    else if (document.querySelector("#input-box2").classList.contains('active_input')) {
        active_input = document.getElementById("input-box2");
    }



    // document.getElementById("input-box1").value = document.getElementById("input-box1").value + number

    active_input.value += number
}