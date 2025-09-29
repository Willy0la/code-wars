function userManagement(name, username, password, confirmPassword){

    if(typeof username !== 'string' || typeof password !== 'string'){

        console.log('Input a valid credential')
        return;
    }

        if(password.length < 8){
            console.log('Password too short')
            return;
        }
         if(password !== confirmPassword) {
            console.log('Password does not match')
            return;
         }

 console.log(`welcome ${name}, your userName is ${username}  `)
        }
       
userManagement('Salawudeen', 'tolifati', 'qwerotyuiop', "werotyuiop")
userManagement('Salawudeen', 'totieee22222', 'quiwefwefweop')
userManagement('Salawudeen', 'tolifati', 'qwerotyuiop', "qwerotyuiop"); 
userManagement('Salawudeen', 'totieee22222', 'quiwefwefweop');
