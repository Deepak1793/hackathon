
function addStudent() {
    // event.preventDefault()
    console.log("Calling addStudent")
    //Reading form inputs
    name = document.getElementById("name").value
    email = document.getElementById("email").value
    phone = document.getElementById("phone").value
    Password = document.getElementById("password").value
    CPassword = document.getElementById("cpassword").value
    

    let NewStudent = {
        "name": name,
        "email": email,
        "phone": phone,
        "Password": password,
        "CPassword": cpassword,

    }
    //posting data to db.json using fetch call
    fetch("http://localhost:3004/StudentData", {
        "method": "POST",
        "body": JSON.stringify(NewStudent),
        "headers": {
            "Content-Type": "application/json"
        }
    }).
        then((response) => {
            if (response.status === 201) {
                console.log("Recoreded Added Successfully")
                addStudent()
            }
        }).
        catch((error) => {
            console.log(error)
        })
}






function validation() {
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const cpassword = document.getElementById('cpassword').value
    const phone = document.getElementById('phone').value

    const namecheck = /^[A-Za-z. ]{3,}$/
    const emailcheck = /^[A-Za-z._]{1,}@[A-Za-z]{1,}[.]{1}[A-Za-z.]{1,}$/
    const passwordcheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/
    const phonecheck = /^[6789][0-9]{9}$/


    if (namecheck.test(name)) {
        document.getElementById('nameerror').innerHTML = ' '
    } else {
        document.getElementById('nameerror').innerHTML = '**Name is Invalid'
        return false
    }

    if (emailcheck.test(email)) {
        document.getElementById('emailerror').innerHTML = ' '
    } else {
        document.getElementById('emailerror').innerHTML = '**Email is Invalid'
        return false
    }

    if (passwordcheck.test(password)) {
        document.getElementById('passworderror').innerHTML = ' '
    } else {
        document.getElementById('passworderror').innerHTML = '**Password is invalid. Password lenght should be 6-12 and should contain at least 1 lower case, upper case, numeric, and special character.' 
        return false
    }

    if (password.match(cpassword)) {
        document.getElementById('cpassworderror').innerHTML = ' '
    } else {
        document.getElementById('cpassworderror').innerHTML = '**Password is not same'
        return false
    }

    if (phonecheck.test(phone)) {
        document.getElementById('phoneerror').innerHTML = ' '
    } else {
        document.getElementById('phoneerror').innerHTML = '**Phone number is Invalid. Phone number should contain only 10 digits and should start with 9, 8 , 7 or 6.'
        return false
    }

}

