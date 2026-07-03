const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");

const dueDate = document.querySelector("#taskDate");
const dueTime = document.querySelector("#taskTime");

const taskList = document.querySelector("#taskList");

taskForm.addEventListener("submit", function (e) {
    e.preventDefault();

    taskList.appendChild(
        createTask(
            taskInput.value,
            dueDate.value,
            dueTime.value
        )
    );
    let emptyState = document.querySelector("#emptyState") ; 
    emptyState.style.display = "none";

    taskForm.reset();
});



function createTask(text, date, time) {
    const li = document.createElement("li");

    li.innerHTML = `
        <div class="task-card">
            <input type="checkbox" class="check">

            <div class="task-info">
                <div class="task-title">${text}</div>
                <div class="task-date">
                    ${date} ${time}
                </div>
                <button class="delete-btn">❌</button>
            </div>
        </div>
    `;

    const checkbox = li.querySelector(".check");
    const title = li.querySelector(".task-title");

    checkbox.addEventListener("change", () => {
        title.classList.toggle("completed");
    });

    const deleteTask = li.querySelector(".delete-btn") ; 
    deleteTask.addEventListener("click" , function() {
        li.remove() ; 
        updateToDoList() ; 
    }) ; 

    return li;
}

function updateToDoList() {
    let emptyState = document.querySelector("#emptyState") ; 
    if(taskList.children.length === 0) {
        emptyState.style.display = "initial";
    }
    else {
        emptyState.style.display = "none";
    }
}