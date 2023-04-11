


export function openSidebar(projects){
    let sidebar = document.getElementById("sidebar");
    let p = document.createElement("p");
    p.innerText = projects[0].name;
    p.style.fontWeight = "bold";
    p.classList.add("project");
    p.id = "today";
    sidebar.appendChild(p);

    let heading = document.createElement("h2");
    heading.innerText = "Your Tasks"
    heading.style.fontWeight = "bold";
    sidebar.appendChild(heading);

    let div = document.createElement("div");
    div.innerText = "Add Project";
    div.id = "create";
    sidebar.appendChild(div);
}

export function createForm(create){
    let form = document.createElement("form");
    let input = document.createElement("input");
    let btn = document.createElement("button");
    form.id = "addProj";
    btn.type = "submit";
    input.id = "newProj"
    input.type = "text";
    input.required = true;
    input.placeholder = "Project X";

    form.appendChild(input);
    form.appendChild(btn);
    let sidebar = document.getElementById("sidebar");
    sidebar.insertBefore(form, create);
    create.style.visibility = "hidden";

}

export function removeForm(create){
    let form = document.getElementById("addProj");
    let name = (document.getElementById("newProj")).value;
    form.innerHTML = "";
    form.remove();
    create.style.visibility = "visible";
    addProject(name);
    return name;
}

function addProject(name){
    let create = document.getElementById("create");
    let sidebar = document.getElementById("sidebar");
    let p = document.createElement("p");
    p.innerText = name;
    p.classList.add("project");
    sidebar.insertBefore(p, create);
}


