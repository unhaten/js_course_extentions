let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

localStorage.setItem("myLeads", "vk.com");

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    renderLeads();
    inputEl.value = "";
});

function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li>
            <a target='_blank' href='${myLeads[i]}'>
            ${myLeads[i]}
            </a>
            </li>`;
    }
    ulEl.innerHTML = listItems;
}

const containerEl = document.getElementById("container");
containerEl.innerHTML = "<button onclick='buy()'>Buy!</button>";

function buy() {
    containerEl.innerHTML += "<p>THANKS FOR BUYING!</p>";
}
