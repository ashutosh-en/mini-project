function addTaskfn() {
    const inputTask = document.getElementById("todoInput");
    const task = inputTask.value;

    if (task.trim() == "") {
        return;
    }
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
    })
    li.appendChild(taskSpan);
    li.appendChild(checkbox);
    li.appendChild(deleteBtn);

    document.getElementById("todoList").appendChild(li);
    inputTask.value = "";
}
