var list_wrapper = document.getElementById("list-wrapper");

// Get csrf_token from cookie
function getCSRFToken() {
    var cookieValue = null;
    if (document.cookie && document.cookie != "") {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            if (cookie.substring(0, 10) == "csrftoken" + "=") {
                cookieValue = decodeURIComponent(cookie.substring(10));
                break;
            }
        }
    }
    return cookieValue;
}

csrf_token = getCSRFToken();

//create button function
function createButton(id, classname, type, value) {
    var button = document.createElement("input");
    button.setAttribute("class", classname);
    button.setAttribute("id", id);
    button.setAttribute("type", type);
    button.setAttribute("value", value);
    return button;
}

// Generate task list
function createtask(data, csrf_token) {
    var task, deleteButton, doneButton, editButton;
    for (var i = 0; i < data.length; i++) {
        task_data = data[i].task;
        is_completed = data[i].completed;

        task = document.createElement("div");
        task.textContent += task_data;
        if (is_completed === true) {
            task.setAttribute("class", "task-wrapper completed");
        } else {
            task.setAttribute("class", "task-wrapper");
        }
        task.setAttribute("id", i);

        var buttonDiv = document.createElement("div");
        buttonDiv.setAttribute("class", "button-wrapper");

        doneButton = createButton("done", "btn btn-success done", "submit", "DONE");
        editButton = createButton("edit", "btn btn-warning edit", "submit", "EDIT");
        deleteButton = createButton(
            "del",
            "btn btn-danger del",
            "submit",
            "DELETE"
        );

        buttonDiv.append(doneButton);
        buttonDiv.append(editButton);
        buttonDiv.append(deleteButton);

        task.append(buttonDiv);

        list_wrapper.append(task);

        //Turns background green when click and changes completed key in data to true
        doneButton.addEventListener("click", function(e) {
            e.preventDefault();
            target = e.target;
            var index = target.parentNode.parentNode.id;
            up_url = `http://127.0.0.1:8000/api/task-update/${data[index].id}/`;
            fetch(up_url, {
                method: "POST",
                body: JSON.stringify({
                    task: data[index].task,
                    completed: true,
                }),
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-Token": csrf_token,
                },
            }).then((res) => {
                clearChildren(list_wrapper);
                createList();
            });
        });

        //Deletes a task
        deleteButton.addEventListener("click", function(e) {
            e.preventDefault();
            target = e.target;
            var index = target.parentNode.parentNode.id;
            up_url = `http://127.0.0.1:8000/api/task-delete/${data[index].id}/`;
            fetch(up_url, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-Token": csrf_token,
                },
            }).then((res) => {
                clearChildren(list_wrapper);
                createList();
            });
        });

        //Edits a task
        editButton.addEventListener("click", function(e) {
            e.preventDefault();
            target = e.target;
            var index = target.parentNode.parentNode.id;
            target.parentNode.parentNode.innerHTML = `
                <form>
                    <div class="update-wrapper">
                        <input type="text" id="new-title" autofocus>
                        <input type="submit" value="UPDATE" class="btn btn-warning" id="update-button">
                        <input type="submit" value="CANCEL" class="btn btn-danger" id="cancel-button">
                    </div>
                </form>
            `;
            var updateButton = document.querySelector("#update-button");
            updateButton.addEventListener("click", function(e) {
                var newtask = document.querySelector("#new-title").value;
                up_url = `http://127.0.0.1:8000/api/task-update/${data[index].id}/`;
                fetch(up_url, {
                    method: "POST",
                    body: JSON.stringify({
                        task: newtask,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRF-Token": csrf_token,
                    },
                });
            });
            var cancelButton = document.querySelector("#cancel-button");
            cancelButton.addEventListener("click", function(e) {
                clearChildren(list_wrapper);
                createList();
            });
        });
    }
}

function clearChildren(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}

function createList() {
    url = "http://127.0.0.1:8000/api/task-list/";
    //Prints entire list
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            createtask(data, csrf_token);
        });
}

createList();

//Adds an task to the list
var addButton = document.querySelector("#submit");
addButton.addEventListener("click", function(e) {
    e.preventDefault();
    target = e.target;
    var title = document.querySelector("#title");
    var create_url = "http://127.0.0.1:8000/api/task-create/";
    fetch(create_url, {
        method: "POST",
        body: JSON.stringify({
            task: title.value,
        }),
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrf_token,
        },
    }).then((res) => {
        title.value = "";
        clearChildren(list_wrapper);
        createList();
    });
});