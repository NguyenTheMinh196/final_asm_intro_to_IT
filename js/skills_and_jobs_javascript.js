var skill_descrip = ["content 1", "content 2", "content 3", "content 4", "content 5"];
var job_descrip = ["content 1", "content 2", "content 3", "content 4", "content 5"];
var job = document.getElementById("job");
var skill = document.getElementById("skill");
var erase = document.getElementById("erase")

function change_job_skill_description(click) {
    erase.innerHTML = ""
    switch (parseInt(click)) {
        case 1:
            job.innerHTML = job_descrip[0]
            skill.innerHTML = skill_descrip[0]
            break;
        case 2:
            job.innerHTML = job_descrip[1]
            skill.innerHTML = skill_descrip[1]
            break;
        case 3:
            job.innerHTML = job_descrip[2]
            skill.innerHTML = skill_descrip[2]
            break;
        case 4:
            job.innerHTML = job_descrip[3]
            skill.innerHTML = skill_descrip[3]
            break;
        case 5:
            job.innerHTML = job_descrip[4]
            skill.innerHTML = skill_descrip[4]
            break;
    }
}
document.getElementById("testing123").innerHTML = "testing"