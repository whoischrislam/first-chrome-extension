const saveBTN = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
let myLeads = [];

saveBTN.addEventListener("click", saveInput);

function saveInput() {
    myLeads.push(inputEl.value);
    showLeads();
}

function showLeads() {
    console.log("myLeads: ");
    for (let i = 0; i < myLeads.length; i++) {
        console.log(myLeads[i]);
    }
}