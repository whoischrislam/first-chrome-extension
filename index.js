const saveBTN = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
let myLeads = [];
const ulEl = document.getElementById("ul-el");

saveBTN.addEventListener("click", saveInput);

function saveInput() {
    const li = document.createElement("li");
    const a = document.createElement("a");
    if (inputEl.value.includes("http://") || inputEl.value.includes("https://")) {
        a.textContent = inputEl.value;
        a.href = inputEl.value;
        myLeads.push(inputEl.value);
    } else {
        a.textContent = `http://${inputEl.value}`;
        a.href = `http://${inputEl.value}`;
        myLeads.push(`http://${inputEl.value}`);
    }
    
    a.target = "_blank";
    li.append(a);
    ulEl.append(li);
    inputEl.value = "";
}


for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += `<li>${myLeads[i]}</li>`;
}
