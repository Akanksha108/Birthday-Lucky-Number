let birthDate = document.querySelector("#birth_date");

// console.log(birthDate);
// console.log(birthDate.value);

let luckyNumber = document.querySelector("#lucky_number").value;

submitButton = document.getElementById("submit_btn");

function birthDateHandler(event){
    event.preventDefault();

    let birthDateInput = birthDate.value;
    console.log(birthDateInput);
}

submitButton.addEventListener('click', birthDateHandler);