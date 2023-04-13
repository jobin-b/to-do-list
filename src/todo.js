

export const Task = (name) => {
    let title = name;
    let active = true;
    let description = "";
    return {title, description, active}
}

export function openTodo(project){
    let content = document.getElementById("content");
    content.innerHTML = "";
    let index = 0;
    (project.tasks).forEach(task => {
        // Card is each task box
        if(task.active){
            addCard(task, index);  
        }
        index++;
    });
}

export function promptTask(){
    let content = document.getElementById("content");
    let card = document.createElement("div");
    card.id = "promptTask";

    let form = document.createElement("form");
    let input = document.createElement("input");
    let btn = document.createElement("button");

    form.id = "addTask";
    btn.id = "submitTask";
    btn.innerText = "Add Task";
    input.id = "newTask"
    input.type = "text";
    input.required = true;
    input.placeholder = "Task Y";

    form.appendChild(input);
    form.appendChild(btn);
    card.appendChild(form);
    let addTask = document.getElementById("addTask");
    content.insertBefore(card, addTask);
}

export function removePrompt(index){
    let content = document.getElementById("content");
    let prompt = document.getElementById("promptTask");
    let input = document.getElementById("newTask");
    let task = Task(input.value);
    prompt.innerHTML = "";
    content.removeChild(prompt);
    addCard(task, index);
    return task;
}

function addCard(task, index){
    let content = document.getElementById("content");
    let card = document.createElement("div");
    card.classList.add("task");
    card.setAttribute("index", index);

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

