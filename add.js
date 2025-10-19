// Adds the items to ToDo List
function updateList(){
    if (localStorage.getItem("itemsJson") == null) {
        itemsJsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    } else {
        itemsJsonArrayStr = localStorage.getItem('itemsJson');
        itemsJsonArray = JSON.parse(itemsJsonArrayStr);
    }
    let tableBody = document.getElementById('Tbody');
    let todo = "";
    itemsJsonArray.forEach((element, index) => {
        todo += `
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-sm btn-primary" onclick="delItem(${index})">Delete</button></td>
        </tr>`;
    });
    tableBody.innerHTML = todo;
}

// Adding the items to ToDo List
function GettingList() {
    console.log("Updating List");
    title = document.getElementById('title').value;
    description = document.getElementById('description').value;
    if (localStorage.getItem("itemsJson") == null) {
        itemsJsonArray = [];
        itemsJsonArray.push([title, description]);
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    } else {
        itemsJsonArrayStr = localStorage.getItem('itemsJson');
        itemsJsonArray = JSON.parse(itemsJsonArrayStr);
        itemsJsonArray.push([title, description]);
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    }
    updateList();
}

// Delete the items From ToDo List
function delItem(ItemIndex) {
    itemsJsonArrayStr = localStorage.getItem('itemsJson');
    itemsJsonArray = JSON.parse(itemsJsonArrayStr);
    itemsJsonArray.splice(ItemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    updateList();
}

// Clear All the Items in the ToDo List
function clearList() {
    if (confirm("Are You Sure. You Want to Clear List")) {
        localStorage.clear()
    }
    updateList();
}

// To updateList when new user comes or when old refresh the app
updateList();


// Thanks bro
