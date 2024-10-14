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