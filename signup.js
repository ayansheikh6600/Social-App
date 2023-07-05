function loginPage() {
    window.location.href = "./index.html"
}

function signUp() {
    var firstName = document.getElementById("FirstName").value
    var lastName = document.getElementById("LastName").value
    var fullName = firstName +" "+ lastName
    var email = document.getElementById("Email").value
    var password = document.getElementById("Password").value

    if(!fullName || !email || !password){
        alert("Enter email & password")
        return 
    }

    var userObject = {
        fullName,
        email,
        password,
    }

    var getUsers = JSON.parse(localStorage.getItem("users"))
    if (getUsers === null) {
        var arr = []
        arr.push(userObject)
        console.log("first user signup")
        localStorage.setItem("users", JSON.stringify(arr))
        alert("user signup")
        window.location.href = "./index.html"
    } else {
        console.log("getUser", getUsers)
        var findUser = getUsers.find(function (value) {
            console.log(value.email, "value")
            if (value.email === email) {
                return true
            }
        })

        if (findUser === undefined) {
            getUsers.push(userObject)
            localStorage.setItem("users", JSON.stringify(getUsers))
            alert("user signup")
            window.location.href = "./index.html"
        } else {
            alert("email address already exists")
        }
    }
}

