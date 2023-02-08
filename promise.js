// A promise is just an object that gives us the result of an async operation

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Got the user data.");
//         resolve({ user: "Afton" });
//     }, 2000)
// })
//
// promise.then(user => {
//     console.log(user);
// })


console.log("Start");

function loginUser(email, password) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve( { userEmail: email, userPassword: password } );
        }, 1500);
    })

}

function getUserVideos(email) {
    return new Promise ((resolve, reject) => {
        console.log("Getting user's videos...")
        setTimeout(() => {
            resolve( ['video 1', 'video 2', 'video 3'] );
        }, 2000);
    })

}

function videoDetails(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("title of the video");
        }, 2000);
    })

}
// loginUser("afton21@goomail.com", 123456, person => {
//     console.log("Now we have the data.");
//     console.log(person.userEmail);
//     console.log(person.userAge);
//     getUserVideos(person.userEmail, videos => {
//         console.log(videos);
//     })
// });


async function displayUser() {
    const loggedUser = await loginUser('Afton', 12345);
    const videos = await getUserVideos(loggedUser.userEmail);
    const detail = await videoDetails(videos[0]);
    console.log(detail);
}

displayUser();