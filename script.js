/* ==========================================
        ORIGINAL SECRET MESSAGE
========================================== */

/*
Change ONLY this line if you want a different puzzle.
The shift is automatically calculated from
the number of letters in the first word.
*/

const originalMessage = "RAVEN MEET ME AT THE BEACH";


/* ==========================================
        CALCULATE SECRET SHIFT
========================================== */

const firstWord = originalMessage.split(" ")[0];

const shift = firstWord.length;


/* ==========================================
        CAESAR ENCRYPTION
========================================== */

function encrypt(text, shift){

    let result = "";

    for(let i = 0; i < text.length; i++){

        let char = text[i];

        if(char >= "A" && char <= "Z"){

            result += String.fromCharCode(

                ((char.charCodeAt(0)-65+shift)%26)+65

            );

        }

        else if(char >= "a" && char <= "z"){

            result += String.fromCharCode(

                ((char.charCodeAt(0)-97+shift)%26)+97

            );

        }

        else{

            result += char;

        }

    }

    return result;

}


/* ==========================================
        DISPLAY ENCODED MESSAGE
========================================== */

const encodedMessage = encrypt(originalMessage, shift);

document.getElementById("cipherText").textContent = encodedMessage;


/* ==========================================
        HINT MODAL
========================================== */

const hintBtn = document.getElementById("hintBtn");

const hintModal = document.getElementById("hintModal");

const closeHint = document.getElementById("closeHint");

hintBtn.onclick = function(){

    hintModal.classList.remove("hidden");

}

closeHint.onclick = function(){

    hintModal.classList.add("hidden");

}

window.onclick = function(event){

    if(event.target === hintModal){

        hintModal.classList.add("hidden");

    }

}


/* ==========================================
        CHECK PLAYER ANSWER
========================================== */

const submitBtn = document.getElementById("submitBtn");

submitBtn.onclick = function(){

    const userAnswer =

        document
        .getElementById("answer")
        .value
        .trim()
        .toUpperCase();

    if(userAnswer === originalMessage){

        document.getElementById("result").innerHTML =

        "✅ Message Successfully Decoded!";

        document
        .getElementById("successScreen")
        .classList
        .remove("hidden");

    }

    else{

        document.getElementById("result").innerHTML =

        "❌ Incorrect. Keep trying.";

    }

}


/* ==========================================
        PRESS ENTER TO SUBMIT
========================================== */

document
.getElementById("answer")
.addEventListener("keypress",function(event){

    if(event.key==="Enter"){

        submitBtn.click();

    }

});
