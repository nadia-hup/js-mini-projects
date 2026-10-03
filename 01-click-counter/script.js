const countdisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase-btn");
const decreaseBtn = document.getElementById("decrease-btn");
const resetBtn = document.getElementById("reset-btn");


let count = 0;
// to change the display of the text inside an element
function updateDisplay() {

    if (count < 0) {
        countdisplay.style.color = "red";
    } else {
        if (count > 0) {
            countdisplay.style.color = "green";
        }
        else {
             countdisplay.style.color = "black";

        }
    }


    countdisplay.textContent = count
}
// to increase the count 
increaseBtn.addEventListener("click", () => {
    count++;
    updateDisplay();
});
// to decreathe the count 
decreaseBtn.addEventListener("click", () => {
    count--;
    updateDisplay();
})
// to reset the count 
resetBtn.addEventListener("click", () => {
    count = 0;
    updateDisplay();

})
