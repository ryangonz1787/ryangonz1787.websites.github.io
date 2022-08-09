function CustomerInfo() {
    FormValidation();
}
var gender;
function FormValidation() {
    
    var fname = document.getElementById("fname")
    if (fname.value == "") {
        window.alert("please enter your first name");
        fname.focus();
        return false;
    }
    
    var lname = document.getElementById("lname")
    if (lname.value == "") {
        window.alert("please enter your last name");
        lname.focus();
        return false;
    }
    
    var email = document.getElementById("email")
    if (email.value == "") {
        window.alert("please enter a valid email address");
        email.focus();
        return false;
    }

     var password = document.getElementById("password")
    if (password.value == "") {
        window.alert("please enter your password");
        password.focus();
        return false;
    }
    
    var phone_number = document.getElementById("phoneNumber")
    if (phone_number.value == "") {
        window.alert("please enter your phone number.");
        phone_number.focus();
        return false;
    }
     
    gender = document.querySelector('input[name="gender"]:checked');
    if (gender === null) {
        window.alert("Gender required!");
        gender.focus();
        return false;
    }
    
    var birth_date = document.getElementById("birthDate")
    if (birth_date.value == "") {
        window.alert("please enter your Date of Birth");
        birth_date.focus();
        return false;
    }
    
    var address = document.getElementById("address")
    if (address.value == "") {
        window.alert("please enter your address details");
        address.focus();
        return false;
    }
    
    var city = document.getElementById("city")
    if (city.value == "") {
        window.alert("please enter your city name");
        city.focus();
        return false;
    }
    
    var zip_code = document.getElementById("zip")
    if (zip_code.value == "") {
        window.alert("please enter your Zip Code");
        zip_code.focus();
        return false;
    }
    
    var state = document.getElementById("state")
    if (state.value == "") {
        window.alert("please enter your state name");
        state.focus();
        return false;
    }
  
    var selectClasses = document.getElementById("selectClasses")
    if (selectClasses.selectedIndex < 1) {
        window.alert("please choose your classes");
        selectClasses.focus();
        return false;
    }
   
   

    FormValidation();

}
