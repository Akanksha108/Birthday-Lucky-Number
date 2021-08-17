let birthDate = document.querySelector("#birth_date");

let luckyNumber = document.querySelector("#lucky_number");

let submitButton = document.getElementById("submit_btn");

let displayOutput = document.getElementById("output");

let close = document.querySelector(".close"); 


function birthDateHandler(event){
    event.preventDefault();

    let birthDateInput = birthDate.value;

    let luckyNumberInput = luckyNumber.value;

    let sum = 0;

    if(birthDateInput && luckyNumberInput){
        for(let i = 0; i < birthDateInput.length; i++){

            const num = parseInt(birthDateInput.charAt(i));
    
            if(!isNaN(num)){
                sum += num;
            }
        }
        
        if(sum % luckyNumberInput == 0){
            // console.log("Hurray, you are a lucky person!!!");
    
            displayOutput.innerHTML += "Hurray, you are a lucky person🥳🥳🎉"+ "<br />" + "<img src = \"./images/undraw_Partying_re_at7f.svg\" width = \"60%\" height =\"40%\">";
        }
        else{
            displayOutput.innerHTML += "You are not a lucky person" + "<br />" + "<img src = \"./images/undraw_feeling_blue_4b7q (1).svg\" width = \"45%\" height =\"25%\">";
        }
    }
    else{
        displayOutput.innerHTML = "Please enter valid input";
    }
}


close.addEventListener('click', function(){
    this.parentElement.style.display = 'none';
});


submitButton.addEventListener('click', birthDateHandler);