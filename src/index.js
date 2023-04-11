import {openSidebar, createForm, removeForm} from "./sidebar";
import {Task, openTodo} from "./todo";
import './style.css';


const Project = (label) => {
    let name = label;
    let tasks = [];
    return {name, tasks}
}

let allProjects = [];
allProjects.push(Project("Today"));
openSidebar(allProjects);
openTodo(allProjects[0]);

//Create new Project
let create = document.getElementById("create");
create.addEventListener("click", (e) => {
    createForm();

    btn.addEventListener("click", (e) => {
        let name = removeForm(create);
        allProjects.push(Project(name));
    })
});

let projects = document.querySelectorAll(".project");
projects.forEach(project => {
    project.addEventListener("click", (e) =>{
        openTodo(project);
    });
});
