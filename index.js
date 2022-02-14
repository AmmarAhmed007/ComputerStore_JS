const workBalanceElement = document.getElementById("workBalance");
const bankAmountElement = document.getElementById("bankAmount");
const workButtonElement = document.getElementById("workButton");
const getLoanButtonElement = document.getElementById("getLoanButton");
const bankButtonElement = document.querySelector('#bankButton');
const payLoanButtonElement = document.getElementById("payLoanButton");
const computersSelectElement = document.getElementById("computersSelect");
const computersSpecElement = document.getElementById("computerSpec");
const buyBtnElement = document.getElementById("buyBtn");

const imageElement = document.getElementById("image")
const titleElement = document.getElementById("title");
const descriptionElement = document.getElementById("description");
const amountElement = document.getElementById("amount");

let computers = [];
let computerSpecs = [];
const url = "https://noroff-komputer-store-api.herokuapp.com";
let hasLoan = false;
let computersBought;
let displayLaptops;

(async function() {
    try {
        const res = await fetch(`${url}/computers`);
        const json = await res.json();
        displayLaptops = [...json];
    } catch(err) {
        console.log(err);
    }
     addComputersToSelect();
    //displayComputers(displayComputers[0]);
})();

workButtonElement.addEventListener('click', e => {
    const workBalance = Number.parseInt(workBalanceElement.innerHTML);
    workBalanceElement.innerHTML = workBalance + 100 + " kr";
});

bankButtonElement.addEventListener('click', e => {
    const bankBalance = Number.parseInt(bankAmountElement.innerHTML);
    const workBalance = Number.parseInt(workBalanceElement.innerHTML);
    bankAmountElement.innerHTML = bankBalance + workBalance + " kr";
    workBalanceElement.innerHTML = 0 + " kr";
})

//get a loan
getLoanButtonElement.addEventListener('click', e => {
    if(hasLoan) {
        alert("You already have a loan! You need to pay it back first.")
        return;
    }

const balance = Number.parseInt(bankAmountElement.innerHTML);
const loan = Number(window.prompt("How much would like to loan?", ""));

if(loan > balance * 2) {
    alert("You're poor. You need more money to receive a loan.")
} else {
    bankAmountElement.innerHTML = balance + loan + " kr";
    hasLoan = true;
    alert("You have received a loan of " + loan + " kr. The amount has been added to your bank balance");
}
});

//pay loan
payLoanButtonElement.addEventListener('click', e => {
    if (!hasLoan) {
        alert("You don't have a loan");
        return;
    } 

    const balance = Number.parseInt(bankAmountElement.innerHTML);
    const loan = Number(window.prompt("How much would you like to return?", ""));

    if(loan > balance * 2) {
        alert("You're poor. You need more money to receive a loan.")
        return;
    } else {
        bankAmountElement.innerHTML = balance - loan + " kr";
        hasLoan = false;
        alert("You have payed back your loan of " + loan);
        
    }
});

computersSelectElement.addEventListener('change', e => {
    const computer = displayLaptops.find(computer => computer.title === e.target.value);
    displayComputers(computer);
    console.log(computer.title + " | " + e.target.value);
});

function displayComputers(computer) {

    imageElement.src = `${url}/${computer.image}`;
    titleElement.innerHTML = computer.title;
    descriptionElement.innerHTML = computer.description;
    amountElement.innerHTML = computer.price + " kr";
    computersSpecElement.innerHTML = computer.specs;
    console.log(computer.title);

}

function addComputersToSelect() {
    for (const computer of displayLaptops) {
        const computerSelect = document.createElement('option');
        console.log(computer.title);
        computerSelect.text = computer.title;
        computersSelectElement.append(computerSelect);
        console.log(computer.title);
    }
}

buyBtnElement.addEventListener('click', e => {
    const bankAmount = Number.parseInt(bankAmountElement.innerHTML);
    const price = Number.parseInt(amountElement.innerHTML);
    if(bankAmount < price) {
        alert("You need more money. Go work some more! :)")
        return;
    } else {
        alert("Congrats! You are the lucky owner of a new computer");
        bankAmountElement.innerHTML = bankAmount - price + " kr";
    }
});

