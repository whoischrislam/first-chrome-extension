const saveBTN = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
let myLeads = [];
const ulEl = document.getElementById("ul-el");

saveBTN.addEventListener("click", saveInput);

myLeads = localStorage.getItem("myLeads");

if (myLeads === null) {
    myLeads = [];
    console.log("localStorage is empty");
    const existBTN = document.getElementById("clear-btn");
    if(existBTN !== null) {
        clearBTN.remove();
    }
} else {
    console.log("localStorage is NOT empty");
    myLeads = JSON.parse(myLeads);
    const clearBTN = document.createElement("button");
    clearBTN.textContent = "Delete All";
    clearBTN.id = "clear-btn";
    saveBTN.after(clearBTN);
    clearBTN.addEventListener("click", () => {
        localStorage.clear();
        myLeads = [];
        ulEl.innerHTML = "";
    });
    for (let i = 0; i < myLeads.length; i++) {
        ulEl.innerHTML += `<li><a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a></li>`;
    }
}

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
    localStorage.setItem("myLeads", JSON.stringify(myLeads));

    const existBTN = document.getElementById("clear-btn");
    if(existBTN === null) {
        const clearBTN = document.createElement("button");
        clearBTN.textContent = "Clear All";
        clearBTN.id = "clear-btn";
        saveBTN.after(clearBTN);
        clearBTN.addEventListener("click", () => {
            localStorage.clear();
            myLeads = [];
            ulEl.innerHTML = "";
            clearBTN.remove();
        });
    }
}
