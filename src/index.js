import {openSidebar, createForm, removeForm} from "./sidebar";
import {Task, openTodo, promptTask, removePrompt} from "./todo";
import './style.css';


const Project = (label) => {
    let name = label;
    let tasks = [];
    let index = 0;
    return {name, tasks, index}
}

let allProjects = [];
allProjects.push(Project("- Today"));
openSidebar(allProjects);
openTodo(allProjects[0]);
let activeProject = 0;

let today = document.getElementById("today");
today.addEventListener("click", (e) =>{
    openTodo(allProjects[+today.getAttribute("index")]);
    activeProject = +today.getAttribute("index");
    enableCheck();
});

//Create new Project
let create = document.getElementById("create");
create.addEventListener("click", (e) => {
    createForm();
    let btn = document.getElementById("submit");
    btn.addEventListener("click", (e) => {
        let name = removeForm(allProjects.length);
        let project = Project(name);
        project.index = allProjects.length;
        allProjects.push(project);
        let projects = document.querySelectorAll(".project");
        projects.forEach(project => {
            project.addEventListener("click", (e) =>{
                openTodo(allProjects[+project.getAttribute("index")]);
                activeProject = +project.getAttribute("index");
                enableCheck();
            });
        });
    })
});




//create new task

let taskBtn = document.getElementById("taskBtn");
taskBtn.addEventListener("click", (e)=>{
    taskBtn.style.backgroundColor = "rgb(145, 182, 195)";
    promptTask();
    let submitTask = document.getElementById("submitTask");
    submitTask.addEventListener("click", (e)=>{
        taskBtn.style.backgroundColor = "lightblue";
        let task = removePrompt(allProjects[activeProject].tasks.length);
        allProjects[activeProject].tasks.push(task);
        enableCheck();
    });
});

function enableCheck(){
    let checkbox = document.querySelectorAll(".checkbox");
    checkbox.forEach(btn => {
        btn.addEventListener("click", (e) =>{
            let ind = btn.parentElement.getAttribute("index");
            if(btn.getAttribute("checked", "false")){
                btn.innerText = "X";
                allProjects[activeProject].tasks[+ind].active = false;
                btn.setAttribute("checked", "true");
            } else {
                btn.innerText = "";
                allProjects[activeProject].tasks[+ind].active = true;
                btn.setAttribute("checked", "false");
            }
        });
    });
}