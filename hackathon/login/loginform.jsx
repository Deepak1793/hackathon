

function validateStudent() {
    event.preventDefault()
    console.log("calling Validate Student");
    let useremail = document.getElementById('email').value;
    let pass = document.getElementById('password').value;
console.log(useremail, pass);
fetch(` http://localhost:3004/studentdata?email=${useremail}`)
           .then(res=>res.json())
           .then(data=>{
            console.log(data);
            if(data.length===0){
                alert("Email address does not exist")
            }
            if(data[0].password===pass){
                console.log("Success");
                alert("Logged in successfully")
                window.location="/index.html"
            }
            else{
                alert("Incorrect Password")
            }
           })
}
