const taskArr=[]

window.onload=function(){
    taskLoad();
}


function addTaskfn() {
    const inputTask = document.getElementById("todoInput");
    const task = inputTask.value;

    if (task.trim() == "") {
        return;
    }

    taskArr.push(task);
    saveTasks();
    addTaskToDom(task);
    inputTask.value = "";
}
function addTaskToDom(task){
    const li = document.createElement("li");
    const checkbox=document.createElement("input")
    const taskSpan=document.createElement("span");
    taskSpan.textContent=task;
    checkbox.type="checkbox";
      checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            taskSpan.style.textDecoration = "line-through";
            taskSpan.style.color = "gray";
        } else {
            taskSpan.style.textDecoration = "none";
            taskSpan.style.color = "black";
        }
    });
    const deleteBtn=document.createElement("button")
    deleteBtn.textContent="deleteTask"
    deleteBtn.addEventListener("click",function(){
        li.remove();
        const index=taskArr.indexOf(task);
        if(task!==-1){
            taskArr.splice(index,1);
            saveTasks();
        }
    })
    li.appendChild(taskSpan);
    li.appendChild(checkbox);
    li.appendChild(deleteBtn);

    document.getElementById("todoList").appendChild(li);
}
function saveTasks(){
    localStorage.setItem("tasks",JSON.stringify(taskArr))
}

function taskLoad(){
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    taskArr.push(...storedTasks);
    storedTasks.forEach(task => {
        addTaskToDom(task);
    });
}