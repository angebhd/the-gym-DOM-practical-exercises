function addItem(e) {
    e.preventDefault();

    const task = document.getElementById("inputTask").value;
    const listItem = createItem(task);
    document.getElementById("todoList").appendChild(listItem);

}
function createItem(a) {
    // List element
    const newLi = document.createElement("li");

    // div elment
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("listItem")

    // paragraph that contains the task
    const p = document.createElement("p");
    p.textContent = a

    // Div button and it element
    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("buttons");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const button = document.createElement("button");
    button.textContent = 'Remove';
    // appending checkbox and remove button to the div
    buttonDiv.appendChild(checkbox);
    buttonDiv.appendChild(button)

    // appending the p to the listItem div
    itemDiv.appendChild(p)
    // append button div to listItem div
    itemDiv.appendChild(buttonDiv);
    newLi.appendChild(itemDiv)

    return newLi;


}







document.getElementById("myForm").addEventListener("submit", (e) => addItem(e));
console.log("JS loaded")