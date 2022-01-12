
// select buttons and
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const sequence = document.getElementById("sequence");

// initialise array to hold sequence
var arithSequence = [];
var seqLength = 1;
var displaySequence = "";
var counter = 0;


// increase button click event
increaseBtn.addEventListener("click", function() {
    // receive input values
    const initialVal = document.getElementById("initial-val").value;
    const incrementVal = document.getElementById("increment-val").value;
    displaySequence = sequence.textContent;
        if (arithSequence.length ==0){
            arithSequence[0] = Number(initialVal);
            arithSequence[1] = Number(initialVal) + Number(incrementVal);
            displaySequence = arithSequence[0] + ", " + arithSequence[1];
            sequence.textContent = displaySequence;
            console.log(arithSequence);
        } else {
            seqLength++;
            arithSequence[seqLength] = Number(arithSequence[seqLength - 1]) + Number(incrementVal);
            displaySequence = displaySequence + ", " + arithSequence[seqLength];
            sequence.textContent = displaySequence;
        }
    
})

// reset button click event
resetBtn.addEventListener("click", function() {
    sequence.textContent = "";
    document.getElementById("initial-val").value = "";
    document.getElementById("increment-val").value = "";
    arithSequence = [];
    console.log(arithSequence);
    seqLength = 1;
    displaySequence = "";
})

// decrease button click event
decreaseBtn.addEventListener("click", function() {
    arithSequence.pop();
    seqLength--;
    var newSequence = arithSequence[0];
    for(count=1; count<arithSequence.length; count++) {
        newSequence = newSequence + ", " + arithSequence[count];
    }
    if(arithSequence.length==0) {
        sequence.textContent = "Sequence is now empty.";
        document.getElementById("initial-val").value = "";
        document.getElementById("increment-val").value = "";
        arithSequence = [];
    } else {
        sequence.textContent = newSequence;
        console.log(arithSequence);
    }
    
    console.log(newSequence);
})