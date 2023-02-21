document.getElementById('name').addEventListener('keyup', function () {
    let name = document.getElementById('name').value
    let exp = /^[a-zA-Z \.]{3,}$/
    if (exp.test(name)) {
        document.getElementById('name').className = 'valid form-control form-control-lg'
        document.getElementById('name').style.border = '2px solid green'
        document.getElementById('para1').style.visibility = 'hidden'
    } else {
        document.getElementById('name').className = 'Invalid form-control form-control-lg'
        document.getElementById('para1').style.visibility = 'visible'
        document.getElementById('name').style.border = '2px solid red'
    }
})

document.getElementById('email').addEventListener('keyup', function () {
    let mail = document.getElementById('email').value
    let exp4 = /^([a-zA-Z\.-]+)@([a-zA-Z-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/
    if (exp4.test(mail)) {
        document.getElementById('email').className = 'valid form-control form-control-lg'
        document.getElementById('email').style.border = '2px solid green'
        document.getElementById('para3').style.visibility = 'hidden '
    } else {
        document.getElementById('email').className = 'Invalid form-control form-control-lg'
        document.getElementById('para3').style.visibility = 'visible'
        document.getElementById('email').style.border = '2px solid red'
    }
})


document.getElementById('mobilenumber').addEventListener('keyup', function () {
    let mobile = document.getElementById('mobilenumber').value
    let exp2 = /^[6-9][0-9]{9}$/
    if (exp2.test(mobile)) {
        document.getElementById('mobilenumber').className = 'valid form-control form-control-lg'
        document.getElementById('mobilenumber').style.border = '2px solid green'
        document.getElementById('para5').style.visibility = 'hidden'
    }
    else {
        document.getElementById('mobilenumber').className = 'Invalid form-control form-control-lg'
        document.getElementById('para5').style.visibility = 'visible'
        document.getElementById('mobilenumber').style.border = '2px solid red'
    }
})

document.getElementById('password').addEventListener('keyup', function () {
    let password = document.getElementById('password').value
    let exp3 = /^[a-zA-Z0-9!@#$%^&*]{7,12}$/
    if (exp3.test(password)) {
        document.getElementById('password').className = 'valid form-control form-control-lg'
        document.getElementById('password').style.border = '2px solid green'
        document.getElementById('para6').style.visibility = 'hidden'
    } else {
        document.getElementById('password').className = 'Invalid form-control form-control-lg'
        document.getElementById('para6').style.visibility = 'visible'
        document.getElementById('password').style.border = '2px solid red'
    }

})

console.log("Running Script");

function addCustomer() {
    event.preventDefault();
    console.log("calling addCustomer");
    // -----READING FORM INPUT-------
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let anumber = document.getElementById("anumber").value;
    let mobilenumber = document.getElementById("mobilenumber").value;
    let password = document.getElementById("password").value;
    let newCustomer = {
        "name": name,
        "email": email,
        "address": address,
        "anumber": anumber,
        "mobilenumber": mobilenumber,
        "password": password



    }
    // posting data to db.json using fetch call
    fetch("http://localhost:3001/Customers", {
        "method": "POST",
        "body": JSON.stringify(newCustomer),
        "headers": {
            "Content-Type": "application/json"
        }
    })
        .then((response) => {
            if (response.status === 201) {
                console.log("Records Added")
                alert("Register Successful")
            }
        })
        .catch((error) => {
            console.log("error");
            
        })
}

