let birthDate = document.querySelector("#birth_date");

let luckyNumber = document.querySelector("#lucky_number");

submitButton = document.getElementById("submit_btn");

function birthDateHandler(event){
    event.preventDefault();

    let birthDateInput = birthDate.value;

    let luckyNumberInput = luckyNumber.value;

    let sum = 0;

    for(let i = 0; i < birthDateInput.length; i++){

        const num = parseInt(birthDateInput.charAt(i));

        if(!isNaN(num)){
            sum += num;
        }
        console.log(sum);
    }
    
    if(sum % luckyNumberInput == 0){
        console.log("Hurray, you are a lucky person!!!");
    }
}

submitButton.addEventListener('click', birthDateHandler);