console.log("hi")

window.addEventListener("load", function () {
    console.log(localStorage.getItem("users"))
    var userLogin = localStorage.getItem("users")
    if (userLogin) {
        window.location.replace("./dashboard.html")
    }

})



function signup() {
    window.location.href = "./signup.html"
}
function loginPage() {
    window.location.href = "./index.html"
}

function login() {
    var email = document.getElementById("Email").value
    var password = document.getElementById("Password").value
    var Users = JSON.parse(localStorage.getItem("users"))

    if(!email || !password){
        alert("Please Enter Email & Password")
        return
    }

    if (Users != null) {
        var user = Users.findIndex(function (value) {
            if (value.email === email && value.password === password) return true
        })

        if (user !== -1) {
            alert("success")
            window.location.replace("./dashboard.html")
        } else {
            alert("Creditional Error")
        }
    }else{
        alert("Email is not Existing")
    }


}