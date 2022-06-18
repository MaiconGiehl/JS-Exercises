; (function () {
    "use strict"


    function Task(name, completed, createdAt, updatedAt) {

        // toggleDone = function(completed) {
        // if (completed == true) {
        // obj.completed = false;
        // } else {
        // obj.completed = true;
        // }
        // }

        // create a constructor function called Task.
        // this function receives the name of the task as a mandatory parameter
        // also receives three optional parameters (completed, createdAt, updatedAt)
        // the object returned by this function must have four properties:
        // - name - string - required,
        // - completed - boolean - optional, false is the default,
        // - createdAt - timestamp - optional, current timestamp is the default value)
        // - updatedAt - timestamp - optional, null is the default value
        // the object returned by this function must have a method called toggleDone, which must invert the boolean completed

        if (!name) {
            throw new Error("Task need a required parameter: name");
        }
        this.name = name;
        this.completed = completed || false;
        this.createdAt = createdAt || Date.now();
        this.updatedAt = updatedAt || null;
        this.toggleDone = function () {
            this.completed = !this.completed;
        }
    }


    let arrTasks = [
        {
            name: "task 1",
            completed: true,
            createdAt: 1592667375012,
            updatedAt: null
        },
        {
            name: "task 2",
            createdAt: 1581667345723,
            updatedAt: 1592667325018
        },
        {
            name: "task 3",
            completed: true,
            createdAt: 1592667355018,
            updatedAt: 1593677457010
        }
    ]


    // from an array of literal objects, create an array containing instances of Tasks.
    // This array must call arrInstancesTasks

    const arrInstancesTasks = arrTasks.map(task => {
        const { name, completed, createdAt, updatedAt } = task
        return new Task(name, completed, createdAt, updatedAt);
    });

    // STORE THE DOM IN VARIABLES
    const itemInput = document.getElementById("item-input")
    const todoAddForm = document.getElementById("todo-add")
    const ul = document.getElementById("todo-list")
    const lis = ul.getElementsByTagName("li")


    function generateLiTask(obj) {

        const li = document.createElement("li")
        const p = document.createElement("p")
        const checkButton = document.createElement("button")
        const editButton = document.createElement("i")
        const deleteButton = document.createElement("i")

        li.className = "todo-item"

        checkButton.className = "button-check"
        checkButton.innerHTML = `
            <i class="fas fa-check ${obj.completed ? "" : "displayNone"}" data-action="checkButton"></i>`
        checkButton.setAttribute("data-action", "checkButton")

        li.appendChild(checkButton)

        p.className = "task-name"
        p.textContent = obj.name
        li.appendChild(p)

        editButton.className = "fas fa-edit"
        editButton.setAttribute("data-action", "editButton")
        li.appendChild(editButton)


        const containerEdit = document.createElement("div")
        containerEdit.className = "editContainer"
        const inputEdit = document.createElement("input")
        inputEdit.setAttribute("type", "text")
        inputEdit.className = "editInput"
        inputEdit.value = obj.name

        containerEdit.appendChild(inputEdit)
        const containerEditButton = document.createElement("button")
        containerEditButton.className = "editButton"
        containerEditButton.textContent = "Edit"
        containerEditButton.setAttribute("data-action", "containerEditButton")
        containerEdit.appendChild(containerEditButton)
        const containerCancelButton = document.createElement("button")
        containerCancelButton.className = "cancelButton"
        containerCancelButton.textContent = "Cancel"
        containerCancelButton.setAttribute("data-action", "containerCancelButton")
        containerEdit.appendChild(containerCancelButton)

        li.appendChild(containerEdit)



        deleteButton.className = "fas fa-trash-alt"
        deleteButton.setAttribute("data-action", "deleteButton")
        li.appendChild(deleteButton)

        return li
    }

    function renderTasks() {
        ul.innerHTML = ""
        arrInstancesTasks.forEach(taskObj => {
            ul.appendChild(generateLiTask(taskObj))
        });
    }

    function addTask(task) {
        // add a new Task instance
        // arrInstancesTasks.push(task);
        arrInstancesTasks.push(new Task(task));
        renderTasks();

    }

    function clickedUl(e) {
        const dataAction = e.target.getAttribute("data-action")
        console.log(e.target)
        if (!dataAction) return

        let currentLi = e.target
        while (currentLi.nodeName !== "LI") {
            currentLi = currentLi.parentElement
        }
        const currentLiIndex = [...lis].indexOf(currentLi)

        const actions = {
            editButton: function () {
                const editContainer = currentLi.querySelector(".editContainer");

                [...ul.querySelectorAll(".editContainer")].forEach(container => {
                    container.removeAttribute("style")
                });

                editContainer.style.display = "flex";


            },
            deleteButton: function () {
                arrInstancesTasks.splice(currentLiIndex, 1)
                renderTasks()

            },
            containerEditButton: function () {
                const val = currentLi.querySelector(".editInput").value
                arrInstancesTasks[currentLiIndex].name = val
                renderTasks()
            },
            containerCancelButton: function () {
                currentLi.querySelector(".editContainer").removeAttribute("style")
                currentLi.querySelector(".editInput").value = arrInstancesTasks[currentLiIndex].name
            },
            checkButton: function () {

                // MUST USE THE toggleDone METHOD of the correct object
                arrInstancesTasks[currentLiIndex].toggleDone();
                renderTasks();
            }
        }

        if (actions[dataAction]) {
            actions[dataAction]()
        }
    }

    todoAddForm.addEventListener("submit", function (e) {
        e.preventDefault()
        console.log(itemInput.value)
        addTask(itemInput.value)
        renderTasks()

        itemInput.value = ""
        itemInput.focus()
    });

    ul.addEventListener("click", clickedUl)

    renderTasks()

})();