const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

function initApp() {
    startHTML();
    addEmployee();
};



function addEmployee() {
    inquirer.prompt([{
        message: "Enter team-member's name.",
        name: "name"
    },
    {
        type: "list",
        message: "Select team-member's job.",
        choices: ["Engineer", "Intern", "Manager"],
        name: "job"
    },
    {
        message: "Enter team-member's id.",
        name: "id"
    },
    {
        message: "Enter team-member's email.",
        name: "email"
    }])
    .then(function({name, role, id, email}) {
        let jobInfo = "";
        if (job === "Engineer") {
         jobInfo = "GitHub username";
        } else if (job === "Intern") {
         jobInfo = "school name";
        } else {
         jobInfo = "phone number";
        }
        inquirer.prompt([{
            message: `Enter team member's ${jobInfo}`,
            name:  "jobInfo"
        },
        {
            type: "list",
            message: "Would you like to add more team-member's?",
            choices: ["yes", "no"],
            name: "addMembers"
        }])
        .then(function({jobInfo, addMembers}) {
            let newMember;
            if (job === "Engineer") {
                newMember = new Engineer(name, id, email, jobInfo);
            } else if (job === "Intern") {
                newMember = new Intern(name, id, email, jobInfo);
            } else {
                newMember = new Manager(name, id, email, jobInfo);
            }
            employees.push(newMember);
            addHtml(newMember)
            .then(function() {
                if (addMembers === "yes") {
                    addMember();
                } else {
                    finishHtml();
                }
            }); 
        });
    });
}


function startHTML() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profiles</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profiles</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile("./output/team.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("Start");
}



function addHTML () {
    return new Promise(function(resolve, reject) {
        const name = member.getName();
        const job = member.getJob();
        const id = member.getId();
        const email = member.getEmail();
        let data = "";

        if (job === "Engineer")  {
            const github = member.getUser();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 20rem">
            <h5 class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">GitHub: ${gitHub}</li>
            </ul>
            </div>
        </div>`;
        }else if(job === "Intern") {
            const school = member.getSchool();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 20rem">
            <h5 class="card-header">${name}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`;
        }else{
            const phoneNumber = member.getPhoneNumber();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 20rem">
            <h5 class="card-header">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">Office Phone: ${officePhone}</li>
            </ul>
            </div>
        </div>`
        }

        console.log("Adding Team-member");
        fs.appendFile("./output/team.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    
    
    })};

initApp();