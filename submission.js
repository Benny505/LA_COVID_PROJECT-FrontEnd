var submissionObject = {
    name: "Annonymous",
    body: ""
};

var spamLock = false; 

// SUBMIT CONFORMATION
const submitDivArray = document.querySelectorAll("div[name='submit-confirmation']");

// NAME AND BODY INPUT
const nameInput = document.querySelector("input[name='name-input']");
const bodyInput = document.querySelector("textarea[name='body-input']");

// SUBMIT BUTTON
const submitInput = document.querySelector("input[name='submit-input']");

// WARNING
const warning = document.querySelector("div[name='warning']");

const body = document.querySelector("body");

// THIS SECTION SENDS DATA TO BACK END
// ***************************************************************************
function SendObjectToFamily(objectToSend) {
    fetch('https://gentle-ridge-58844.herokuapp.com/family', {
        method: 'post',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({input: {
                name: objectToSend.name, 
                body: objectToSend.body
            }
        })
      }).catch(console.log);
}

function SendObjectToSchool(objectToSend) {
    fetch('https://gentle-ridge-58844.herokuapp.com/school', {
        method: 'post',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({input: {
                name: objectToSend.name, 
                body: objectToSend.body
            }
        })
      }).catch(console.log);
}

function SendObjectToHobbies(objectToSend) {
    fetch('https://gentle-ridge-58844.herokuapp.com/hobbies', {
        method: 'post',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({input: {
                name: objectToSend.name, 
                body: objectToSend.body
            }
        })
      }).catch(console.log);
}

function SendObjectToLearning(objectToSend) {
    fetch('https://gentle-ridge-58844.herokuapp.com/learning', {
        method: 'post',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({input: {
                name: objectToSend.name, 
                body: objectToSend.body
            }
        })
      }).catch(console.log);
}

function SendObjectToExcercise(objectToSend) {
    fetch('https://gentle-ridge-58844.herokuapp.com/excercise', {
        method: 'post',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({input: {
                name: objectToSend.name, 
                body: objectToSend.body
            }
        })
      }).catch(console.log);
}

function SendObjectToOverall(objectToSend) {
    fetch('https://gentle-ridge-58844.herokuapp.com/overall', {
        method: 'post',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({input: {
                name: objectToSend.name, 
                body: objectToSend.body
            }
        })
      }).catch(console.log);
}

function SendObjectToServer(objectToSend, id) {
    switch(id) {
        case "Family": SendObjectToFamily(objectToSend);
            break;
        case "School": SendObjectToSchool(objectToSend);
            break;
        case "Hobbies": SendObjectToHobbies(objectToSend);
            break;
        case "Learning": SendObjectLearning(objectToSend);
            break;
        case "Excercise": SendObjectToExcercise(objectToSend);
            break;
        case "Overall": SendObjectToOverall(objectToSend);
            break;
    }
}
// ***************************************************************************

function TurnOffSpamLock() {
    spamLock = false;
    console.log("off");
}

function DeactivateSubmitDivs() {
    for (div of submitDivArray) {
        div.classList.add("nullElement");
    }
}

function ActivateSubmitDivs() {
    for (div of submitDivArray) {
        div.classList.remove("nullElement");
    }

    setTimeout(DeactivateSubmitDivs, 500);
}

function DeactivateWarning() {
    warning.classList.add("nullElement");
    document.querySelector("p[name='charOverflow']").classList.add("nullElement");
    document.querySelector("p[name='spamWarning']").classList.add("nullElement");
    document.querySelector("p[name='nullBody']").classList.add("nullElement");
}

function ActivateWarning(type) {
    warning.classList.remove("nullElement");
    if (type == "charOverflow") {
        document.querySelector("p[name='charOverflow']").classList.remove("nullElement");
    } else if (type == "spamWarning") {
        document.querySelector("p[name='spamWarning']").classList.remove("nullElement");
    } else if (type == "nullBody") {
        document.querySelector("p[name='nullBody']").classList.remove("nullElement");
    }
    setTimeout(DeactivateWarning, 2000);
}

function SetInputObject() {
    if (!spamLock) {
        if (nameInput.value.length > 100 || bodyInput.value.length > 500) {
            ActivateWarning("charOverflow");
            return;
        } else if (bodyInput.value.length == 0) {
            ActivateWarning("nullBody");
            return;
        }

        ActivateSubmitDivs();

        spamLock = true;
        setTimeout(TurnOffSpamLock, 60000);

        if (name.length > 0) {
            submissionObject.name = nameInput.value;
        }
        submissionObject.body = bodyInput.value;
    
        nameInput.value = "";
        bodyInput.value = "";

        SendObjectToServer(submissionObject, body.id);
    } else {
        ActivateWarning("spamWarning");
    }
}

submitInput.addEventListener("click", SetInputObject);