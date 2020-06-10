var regardless = false;

function CreateComment(comment) {
    if (comment != undefined || regardless) {
        const { name, body } = comment;

        let commentDiv = document.createElement("div");
        commentDiv.classList.add("commentDiv", "bg-light-green");

        let commentName = document.createElement("h2");
        commentName.classList.add("dark-green", "commentHeader");
        commentName.textContent = name;

        let commentLine = document.createElement("hr");
        commentLine.classList.add("commentLine");

        let commentBody = document.createElement("p");
        commentBody.classList.add("dark-green", "f4", "commentBody");
        commentBody.textContent = body;

        commentDiv.appendChild(commentName);
        commentDiv.appendChild(commentLine);
        commentDiv.appendChild(commentBody);

        document.querySelector("div[name='comment-holder']").appendChild(commentDiv);
        console.log("Ran1");
        regardless = true;
    } else {
        let commentDiv = document.createElement("div");
        commentDiv.classList.add("commentDiv", "bg-light-green");

        let commentName = document.createElement("h2");
        commentName.classList.add("dark-green", "commentHeader");
        commentName.textContent = "No Comments!";

        commentDiv.appendChild(commentName);

        document.querySelector("div[name='comment-holder']").appendChild(commentDiv);
        console.log("Ran2");
    }
}

// FROM HERE ON IS THE SERVER STUFF
function GetCommentsFromFamily() {
    fetch('http://localhost:3000/family', {
        method: 'get',
        headers: {'content-type': 'application/json'},
      })
      .then(data => data.json())
      .then(res => CreateComment(res.forEach(obj => CreateComment(obj))))
      .catch(console.log);
}

function GetCommentsFromSchool() {
    fetch('http://localhost:3000/school', {
        method: 'get',
        headers: {'content-type': 'application/json'},
      })
      .then(data => data.json())
      .then(res => CreateComment(res.forEach(obj => CreateComment(obj))))
      .catch(console.log);
}

function GetCommentsFromHobbies() {
    fetch('http://localhost:3000/hobbies', {
        method: 'get',
        headers: {'content-type': 'application/json'},
      })
      .then(data => data.json())
      .then(res => CreateComment(res.forEach(obj => CreateComment(obj))))
      .catch(console.log);
}

function GetCommentsFromLearning() {
    fetch('http://localhost:3000/learning', {
        method: 'get',
        headers: {'content-type': 'application/json'},
      })
      .then(data => data.json())
      .then(res => CreateComment(res.forEach(obj => CreateComment(obj))))
      .catch(console.log);
}

function GetCommentsFromExcercise() {
    fetch('http://localhost:3000/excercise', {
        method: 'get',
        headers: {'content-type': 'application/json'},
      })
      .then(data => data.json())
      .then(res => CreateComment(res.forEach(obj => CreateComment(obj))))
      .catch(console.log);
}

function GetCommentsFromOverall() {
    fetch('http://localhost:3000/overall', {
        method: 'get',
        headers: {'content-type': 'application/json'},
      })
      .then(data => data.json())
      .then(res => CreateComment(res.forEach(obj => CreateComment(obj))))
      .catch(console.log);
}

function GetCommentsFromServer(id) {
    switch(id) {
        case "Family": GetCommentsFromFamily();
            break;
        case "School": GetCommentsFromSchool();
            break;
        case "Hobbies": GetCommentsFromHobbies();
            break;
        case "Learning": GetCommentsFromLearning();
            break;
        case "Excercise": GetCommentsFromExcercise();
            break;
        case "Overall": GetCommentsFromOverall();
            break;
    }
}

GetCommentsFromServer(document.querySelector("body").id);