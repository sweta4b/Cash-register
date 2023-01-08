const billAmount=document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given")
const checkButton = document.querySelector("#check-button");
const noOfNotes= document.querySelectorAll(".no-of-notes");
const message=document.querySelector("#error");


const notes=[2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validation(){
    errorMessage("")
    if(billAmount.value>0){
        if(cashGiven.value >= billAmount.value){
           const amountTobeReturned = cashGiven.value-billAmount.value;
           calculate(amountTobeReturned);
        }else{
         errorMessage("cash given should be greater than bill amount");
        }
    }else{
       errorMessage("")
    }
});

function calculate(amountTobeReturned){
     for(let i=0; i<notes.length; i++){
        const numberOfNotes= Math.trunc(amountTobeReturned/notes[i]);
        amountTobeReturned = amountTobeReturned%notes[i];
        noOfNotes[i].innerText=numberOfNotes;
     }
}


function errorMessage(msg){
    message.style.display="block";
    message.innerText=msg;
}
