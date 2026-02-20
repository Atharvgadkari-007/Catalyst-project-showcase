var students = [];

function addStudent() {
    var name   = document.getElementById('nameInput').value.trim();
    var github = document.getElementById('githubInput').value.trim();
    var skill  = document.getElementById('skillInput').value.trim();

    if (name === '') {
        alert('Please enter your name!');
        return;
    }

    var newStudent = {
        name: name,
        github: github,
        skills: skill ? [skill] : []
    };

    students.push(newStudent);

    document.getElementById('nameInput').value   = '';
    document.getElementById('githubInput').value = '';
    document.getElementById('skillInput').value  = '';

    showStudents();
}

function addSkill(i) {
    var skill = prompt('Enter skill name:');

    if (skill === null || skill.trim() === '') {
        return;
    }

    if (!students[i].skills.includes(skill.trim())) {
        students[i].skills.push(skill.trim());
    }

    showStudents();
}

function removeSkill(i, j) {
    students[i].skills.splice(j, 1);
    showStudents();
}

function deleteStudent(i) {
    students.splice(i, 1);
    showStudents();
}

function showStudents() {
    var list = document.getElementById('studentList');
    list.innerHTML = '';

    if (students.length === 0) {
        list.innerHTML = '<p style="text-align:center;color:#aaa">No students yet. Be the first!</p>';
        return;
    }

    for (var i = 0; i < students.length; i++) {
        var s = students[i];

        var tags = '';
        for (var j = 0; j < s.skills.length; j++) {
            tags += '<span class="skill-tag" onclick="removeSkill(' + i + ',' + j + ')">' + s.skills[j] + ' x</span> ';
        }

        list.innerHTML +=
            '<div class="card">' +
                '<button onclick="deleteStudent(' + i + ')" style="float:right;background:none;border:none;font-size:18px;cursor:pointer;color:#aaa">x</button>' +
                '<h3>' + s.name + '</h3>' +
                (s.github ? '<a href="' + s.github + '" target="_blank">GitHub ↗</a>' : '') +
                '<p style="font-size:12px;color:#aaa;margin:10px 0 5px 0">SKILLS</p>' +
                tags +
                '<br><button onclick="addSkill(' + i + ')">+ Add Skill</button>' +
            '</div>';
    }
}

showStudents();