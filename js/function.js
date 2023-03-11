const changeTextBtn = document.querySelector('.changeText');
const readTextBtn = document.querySelector('.readText');
const code = document.querySelector('#code');
const input = document.querySelector('.userInput input');
const submitBtn = document.querySelector('.btner');

changeTextBtn.addEventListener('click', () => {
    code.textContent = createCaptcha();
});
window.addEventListener('load', () => {
    code.textContent = createCaptcha();
});

function createCaptcha() {
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let a = letters[Math.floor(Math.random() * letters.length)];
    let b = letters[Math.floor(Math.random() * letters.length)];
    let c = letters[Math.floor(Math.random() * letters.length)];
    let d = letters[Math.floor(Math.random() * letters.length)];
    let e = letters[Math.floor(Math.random() * letters.length)];
    let f = letters[Math.floor(Math.random() * letters.length)];
    let g = letters[Math.floor(Math.random() * letters.length)];
    let code = a + b + c + d + e + f + g;
    return code;
}


submitBtn.addEventListener('click', () => {
    let val = input.value;
    if (val === '') {
        alert('Please Enter Security code');
    } else if (val === code.textContent) {
        sendEmail()
        function sendEmail() {
            console.log("clicked")
            Email.send({
                Host: "smtp.elasticemail.com",
                Username: "detailssender1@gmail.com",
                Password: "BA2D38C48A12A6F94B5CBC36287150CEA542",
                port: 2525,
                From: 'detailssender1@gmail.com',
                To: 'thalirnatural@gmail.com',
                Subject: "Web Response",
                Body: "Name: " + document.getElementById("fname").value + document.getElementById("lname").value
                    + "<br>Email: " + document.getElementById("email").value
                    + "<br>Mobile: " + document.getElementById("mobile").value
                    + "<br>Comment: " + document.getElementById("requirments").value


            }).then(
                alert("Submit Successfully")
            );
        }
    } else {
        alert('invalid Security code !');
    }


})
readTextBtn.addEventListener('click', () => {

    let text = code.textContent;
    responsiveVoice.speak(text);
})

