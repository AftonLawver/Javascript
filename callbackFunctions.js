console.log("Start");

function loginUser(email, age, callback) {
    setTimeout(() => {
        callback( { userEmail: email, userAge: age } );
    }, 1500);
}

function getUserVideos(email, callback) {
    console.log("Getting user's videos...")
    setTimeout(() => {
        callback( ['video 1', 'video 2', 'video 3'] );
    }, 2000);
}
// person is the json object and we can call that whatever we want.
loginUser("afton21@goomail.com", 123456, person => {
    console.log("Now we have the data.");
    console.log(person.userEmail);
    console.log(person.userAge);
    getUserVideos(person.userEmail, videos => {
        console.log(videos);
    })
});

// It is common to use callbacks called onSuccess and onFailure to control
// what code gets executed for those cases.



console.log("Finish");