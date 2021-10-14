//get all relevant elements from DOM
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const button = document.getElementById('submitButton');





// validate credentials
function checkInput(){
    // get user name and password
    let username = usernameInput.value;
    let password = passwordInput.value;
    // console.log(username)
    // console.log(password)

    //Null Username
    // if(username==null && password==null){
    //     console.log('Type in your username');
    //     alert('Type in your username');
    //     return false;
    // }




    //Validating Username
    if (username.length<6){
        if(username == ""){
            alert('No value in username: Please type in your username');
            return false
        }
        console.log('Invalid username');
        alert('Characters in username must be six or more');
        return false;
    }

    //Validating password
    if(password.length<8){
        if(password==''){
            alert('No value in password: Please insert password')
            return false;
        }
        console.log('invalid password');
        alert('Password not match');
        return false;
    }
    console.log('Signed in');
    // store username in localstorage
    localStorage.setItem('username', username);

    // redirect to chat page
    window.location.href= 'index.html';
    
    return ;
    
}


// redirect to chat page
button.addEventListener('click', checkInput);
