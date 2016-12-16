function validateForm() {

    var allLetters = /^[a-zA-Z]+$/;
    var letter = /[a-zA-Z]/;
    var number = /[0-9]/;

    var firstName = document.order_form.first_name.value;
    var surname = document.order_form.surname.value;
    var email = document.order_form.user_email.value;
    var password = document.order_form.password.value;

    var invalid = [];

    if (!allLetters.test(firstName)) {
        invalid.push("*First Name");
    }

    if (!allLetters.test(surname)) {
        invalid.push("*Surname Name");
    }

    if (email.indexOf("@") < 1 || email.lastIndexOf(".") < email.indexOf("@") + 2 || email.lastIndexOf(".") + 2 >= email.length) {
        invalid.push("*Email");
    }

    if (password.length < 4 || !letter.test(password) || !number.test(password)) {
        invalid.push("*Password");
    }

    if (invalid.length != 0) {
        alert("Please provide response: \n" + invalid.join("\n"));
        return false;
    }

    return true;
}