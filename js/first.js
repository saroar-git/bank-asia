//step 1: add click event handler with the login btn
document.getElementById('btn-login').addEventListener('click', function () {

    //step 2: get the email address input field and value
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    //step 3: get the password field and value
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // DO NOT verify email & password like this
    if (email === 'saroarjahannahid@gmail.com' && password === 'secret') {

        //step 4: connect with another html file
        window.location.href = 'bank-inside.html'
    }
    else {
        alert('Invalid User')
    }
})