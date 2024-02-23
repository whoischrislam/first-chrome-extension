const saveBTN = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
let myLeads = [];
const ulEl = document.getElementById("ul-el");

saveBTN.addEventListener("click", saveInput);

function saveInput() {
    myLeads.push(inputEl.value);
    ulEl.innerHTML += `<li>${inputEl.value}</li>`;
    console.log(`Current Array: ${myLeads}`);
}


for (let i = 0; i < myLeads.length; i++) {
    console.log("rendering: " + myLeads[i]);
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
}
console.log(myLeads);