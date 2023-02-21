const inputs = document.querySelectorAll('input');

const patterns = {
  username: /^[a-z\d]{5,12}$/i,
  password: /^[\d\w@-]{8,20}$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  phone: /^\d{3}-\d{3}-\d{4}$/
};

inputs.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    validate(e.target, patterns[e.target.attributes.id.value]);
  });
});

function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = 'form-control valid';
  } else {
    field.className = 'form-control invalid';
  }
}

let form = document.getElementById('form')
form.addEventListener('submit', function(e){
//auto submission of form
    e.preventDefault()
    let name = document.getElementById('username').value
    let pass = document.getElementById('password').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    //fetch post request
    fetch("http://localhost:3004/studentdata/",{
            method:'POST',
            body:JSON.stringify({
                name:name,
                pass:pass,
                email:email,
                phone: phone,
        }),
        headers:{
            "content-Type":"application/json; charset=UTF-8"
        }
    })
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        // var results = document.getElementById('results')
        // results.innerHTML = `<p> The title of the to do is ${data.username}</P>
        // <p>The body of the to do is ${data.password}</p>`
    })
})