

export const Task = (name) => {
    let title = name;
    let description = "";
    return {title, description}
}

export function openTodo(project){
    let content = document.getElementById("content");
    (project.tasks).forEach(task => {
        addCard(task);  // Card is each task box
    });
}

function addCard(task){
    let content = document.getElementById("content");
    let card = document.createElement("div");
    card.classList.add("task");

    let checkbox = document.createElement("button");
    checkbox.classList.add("checkbox");
    checkbox.setAttribute("checked", "false");
    card.appendChild(checkbox);

    let div = document.createElement("div");
    let title = document.createElement("h1");
    title.innerText = task.title;
    title.style.fontWeight = "bold";
    div.appendChild(title);

    let p =  document.createElement("p");
    p.innerText = task.description;
    div.appendChild(p);

    card.appendChild(div);
    content.appendChild(card);
}


