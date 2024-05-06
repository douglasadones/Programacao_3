const main = () => {
    const addButton = document.getElementById("add");
    addButton.addEventListener("click", addInterest);

    const textElement = document.getElementById("data");
    textElement.addEventListener("keydown", (event) => {
        console.log(event)
        if (event.key == "Enter" ) {
            addInterest();
        } else if (event.key == "Escape") {
            textElement.innerText = "";
        }
    })
}

const addInterest = () => {
    const elemText = document.getElementById("data");
    const text = elemText.value.trim();
    const list = document.querySelector("ol");
    const item = document.createElement("li");
    item.innerText = text;
    item.innerHTML += "<i class='bx bx-window-close'></i>";
    list.appendChild(item);
    elemText.value = "";
    elemText.focus();

    item.lastElementChild.addEventListener("click", () => {
        item.remove();
    })
}

const removeInterest = (event) => {

}

window.addEventListener("DOMContentLoaded", main);

{/* <ol>
    <li></li>
</ol> */}