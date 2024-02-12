//finds the classes of elements to access those elements. This is for the input field and button
const txtInput = document.querySelector(".inputs input"),
checkBtn = document.querySelector(".inputs button"),
infoTxt = document.querySelector(".info-txt");
let userInput;

checkBtn.addEventListener("click", () => {
    //this reverses the input and joins it together
    let reverseInput = userInput.split("").reverse().join("");
    infoTxt.style.display = "block";
    if(userInput != reverseInput) {
        return infoTxt.innerHTML = `No, <span>'${txtInput.value}'</span> isn't a palindrome!`;
    }
    infoTxt.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a palindrome!`;
});
//this removes special characters and spaces from what is entered
txtInput.addEventListener("keyup", () => {
    userInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(userInput) {
        return checkBtn.classList.add("active");
    }
    infoTxt.style.display = "none";
    checkBtn.classList.remove("active");
});