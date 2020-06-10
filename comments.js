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
        regardless = true;
    } else {
        let commentDiv = document.createElement("div");
        commentDiv.classList.add("commentDiv", "bg-light-green");

        let commentName = document.createElement("h2");
        commentName.classList.add("dark-green", "commentHeader");
        commentName.textContent = "No Comments!";

        commentDiv.appendChild(commentName);

        document.querySelector("div[name='comment-holder']").appendChild(commentDiv);
    }
}

// FROM HERE ON IS THE SERVER STUFF
function GetCommentsFromFamily() {
    fetch('https://gentle-ridge-58844.herokuapp.com/family', {
        method: 'get',
        headers: {'content-type': 'application/json'},
      })
      .then(data => data.json())
      .then(res => CreateComment(res.forEach(obj => CreateComment(obj))))
      .catch(console.log);
}

function GetCommentsFromSchool() {
    fetch('https://gentle-ridge-58844.herokuapp.com/school', {
        method: 'get',
        headers: {'content-type': 'application/json'},
      })
      .then(data => data.json())
      .then(res => CreateComment(res.forEach(obj => CreateComment(obj))))
      .catch(console.log);
}

function GetCommentsFromHobbies() {
    fetch('https://gentle-ridge-58844.herokuapp.com/hobbies', {
        method: 'get',
        headers: {'content-type': 'application/json'},
      })
      .then(data => data.json())
      .then(res => CreateComment(res.forEach(obj => CreateComment(obj))))
      .catch(console.log);
}

function GetCommentsFromLearning() {
    fetch('https://gentle-ridge-58844.herokuapp.com/learning', {
        method: 'get',
        headers: {'content-type': 'application/json'},
      })
      .then(data => data.json())
      .then(res => CreateComment(res.forEach(obj => CreateComment(obj))))
      .catch(console.log);
}

function GetCommentsFromExcercise() {
    fetch('https://gentle-ridge-58844.herokuapp.com/excercise', {
        method: 'get',
        headers: {'content-type': 'application/json'},
      })
      .then(data => data.json())
      .then(res => CreateComment(res.forEach(obj => CreateComment(obj))))
      .catch(console.log);
}

function GetCommentsFromOverall() {
    fetch('https://gentle-ridge-58844.herokuapp.com/overall', {
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