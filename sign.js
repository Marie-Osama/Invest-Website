var emailRegexp= /^[a-z0-9]+@[a-z]+\.com$/;
var nameRegexp = /^[a-z]+$/;


$(window).on("hashchange", function () {
	if (location.hash.slice(1) == "signup") {
		$(".page").addClass("extend");
		$("#login").removeClass("active");
		$("#signup").addClass("active");
	} else {
		$(".page").removeClass("extend");
		$("#login").addClass("active");
		$("#signup").removeClass("active");
	}
});
$(window).trigger("hashchange");

var emails = [];
var pwd = [];
var hashpwd1 = "kjgnoejrntejnoj2/jnjgje234/22345*fns";
var hashpwd2 = "slfjngsojrpngwiuerngserng/ergeg234232*gergwrgkmgk";

function validateLoginForm() {
	var email = document.getElementById("logName").value;
	var password = document.getElementById("logPassword").value;

	if (email == "" || password == "") {
		document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
		return false;
	}
    else if(!emailRegexp.test(email)){
        document.getElementById("errorMsg").innerHTML = "Please put a valid email"
        return false;
    }
	else if (password.length < 8) {
		document.getElementById("errorMsg").innerHTML = "Password not valid"
		return false;
	}
    else if (!emails.includes(email) || !pwd.includes(hashpwd1 + password + hashpwd2)) {
        document.getElementById("errorMsg").innerHTML = "Invalid email or Passord"
        return false;
    }
	else {
		alert("Successfully logged in");
		return true;
	}
}
function validateSignupForm() {
	var mail = document.getElementById("signEmail").value;
	var name = document.getElementById("signName").value;
	var password = document.getElementById("signPassword").value;

	if (mail == "" || name == "" || password == "") {
		document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
		return false;
	}
    else if(!emailRegexp.test(mail)){
        document.getElementById("errorMsg").innerHTML = "Please put a valid email address"
        return false;
    }

	else if (password.length < 8) {
		document.getElementById("errorMsg").innerHTML = "Your password must include at least 8 characters"
		return false;
	}
    else if(password.search(/[a-z]/) < 0) { 
        document.getElementById("errorMsg").innerHTML = "Your password must include at least 1 lower character "
		return false;
        
    } 
    else if(password.search(/[A-Z]/) < 0) { 
        
        document.getElementById("errorMsg").innerHTML = "Your password must include at least 1 upper character"
		return false;
    } 
    else if(password.search(/[0-9]/) < 0) { 
        
        document.getElementById("errorMsg").innerHTML = "Your password must include at least 1 number character"
		return false;
    } 
	else {
        emails.push(mail);
        pwd.push(hashpwd1 + password + hashpwd2);
		alert("Successfully signed up");

        return true;
	}
}