let birthDate = document.querySelector("#birth_date");

let luckyNumber = document.querySelector("#lucky_number");

let submitButton = document.getElementById("submit_btn");

let displayOutput = document.getElementById("output");

let happyImage = document.querySelector(".output_happy_image");

// let happyImage = document.querySelector("#happy_image");

let sadImage = document.querySelector(".output_sad_image");


function birthDateHandler(event){
    event.preventDefault();

    let birthDateInput = birthDate.value;

    let luckyNumberInput = luckyNumber.value;

    // let happyImageSrc = happyImage.value;

    let sum = 0;

    for(let i = 0; i < birthDateInput.length; i++){

        const num = parseInt(birthDateInput.charAt(i));

        if(!isNaN(num)){
            sum += num;
        }
        console.log(sum);
    }
    
    if(sum % luckyNumberInput == 0){
        // console.log("Hurray, you are a lucky person!!!");

        displayOutput.innerHTML += "Hurray, you are a lucky person🥳🥳🎉"+ "<br />" + "<img src = \"./images/undraw_Partying_re_at7f.svg\" width = \"60%\" height =\"40%\">";
    }
    else{
        displayOutput.innerHTML += "You are not a lucky person" + "<br />" + "<img src = \"./images/undraw_feeling_blue_4b7q (1).svg\" width = \"60%\" height =\"40%\">";
    }
}

submitButton.addEventListener('click', birthDateHandler);