let selectedRole = "";

function selectRole(role){
    selectedRole = role;
}

function loginUser(){

    if(selectedRole === "student"){
        window.location.href = "student.html";
    }

    else if(selectedRole === "professor"){
        window.location.href = "professor.html";
    }

    else if(selectedRole === "staff"){
        window.location.href = "staff.html";
    }

    else if(selectedRole === "admin"){
        window.location.href = "admin.html";
    }

    else if(selectedRole === "director"){
        window.location.href = "director.html";
    }

    else{
        alert("Please select a role");
    }
}