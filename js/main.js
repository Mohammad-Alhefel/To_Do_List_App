const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === "") {
        alert("يجب أدخال شيء للحقل")
    }
    else {
        const element = document.createElement("li");
        element.innerHTML = inputBox.value;
        listContainer.appendChild(element);
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        element.appendChild(span)
    }
    inputBox.value == "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false)

// Local Storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();