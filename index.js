let myLeads = [];

const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

// localStorage.clear();
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
// console.log(leadsFromLocalStorage);

if (leadsFromLocalStorage) {
    console.log(localStorage.getItem("myLeads"));
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

// const tabs = [{ url: "vk.com" }];

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        // console.log(tabs);
        myLeads.push(tabs[0].url);
        !localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    });

    // console.log(tabs[0].url);
});

deleteBtn.addEventListener("dblclick", function () {
    myLeads = [];
    localStorage.clear();
    render(myLeads);
});

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);

    // console.log(localStorage.getItem("myLeads"));
});

function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `<li>
            <a target='_blank' href='${leads[i]}'>
            ${leads[i]}
            </a>
            </li>`;
    }
    ulEl.innerHTML = listItems;
}

// const containerEl = document.getElementById("container");
// containerEl.innerHTML = "<button onclick='buy()'>Buy!</button>";

// function buy() {
//     containerEl.innerHTML += "<p>THANKS FOR BUYING!</p>";
// }
