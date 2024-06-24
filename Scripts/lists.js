let ogNode = document.getElementById("listEntry-demo").cloneNode(true);



window.onload = function() {
    var main = document.getElementById('main');
    var header = document.getElementById('header');
    var headerHeight = header.clientHeight;
    main.style.marginTop = headerHeight + 'px';

    let data = JSON.parse(localStorage.getItem("userList")) || { entryCounter: 0 };
    let i = 1;

    for (entry in data) {
        if (entry == "entryCounter") {continue;}
        let node = ogNode.cloneNode(true);

        if (i == data.entryCounter) {
            node.style.marginBottom = "30%";
        }

        node.id = entry;
        node.querySelector("#entry-content").textContent = data[entry];
        node.style.display = "flex";

        document.getElementById("List").appendChild(node);
        i++;
    }
}



function clearEntries() {
    document.getElementById("List").innerHTML = "";
    localStorage.setItem("userList", JSON.stringify({ entryCounter: 0 }));
}



function removeEntry(button) {
    let entryId = button.parentElement.id.split('-')[1];
    let data = JSON.parse(localStorage.getItem("userList"));
    
    delete data["listEntry-" + entryId];
    data.entryCounter--;
    localStorage.setItem("userList", JSON.stringify(data));

    button.parentElement.remove();
    if (data.entryCounter != 0) {document.getElementById("List").lastChild.style.marginBottom = "40%";}
}



function addEntry() {
    let text = document.getElementById("text-entry").value;
    let data = JSON.parse(localStorage.getItem("userList")) || { entryCounter: 0 };
    let node = ogNode.cloneNode(true);

    if (data.entryCounter != 0) {
        document.getElementById("List").lastChild.style.marginBottom = "0";
    }

    data.entryCounter++;
    data["listEntry-" + data.entryCounter] = text;
    localStorage.setItem("userList", JSON.stringify(data));

    node.id = "listEntry-" + data.entryCounter;
    node.querySelector("#entry-content").textContent = text;
    node.style.display = "flex";
    node.style.marginBottom = "30%";

    document.getElementById("List").appendChild(node);
    document.getElementById("text-entry").value = "";
}