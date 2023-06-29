// fetch is a function that works natively in the browser
// takes in the url of our api
// chain .then()
// fetch returns a promise
// can use async/await or chain .then to it to get the result of the promise

fetch('https://reqres.in/api/users/2')
    .then(res => {
        if (res.ok) {
            console.log('SUCCESS')
        }
        else {
            console.log('Not Successful')
        }
    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))