// const delay = (seconds) => {
//     return new Promise((resolve, reject) => {
//         if(typeof seconds !== "number") {
//             reject(new Error("seconds must be a number"));
//         }
//
//         setTimeout(resolve, seconds * 1000);
//     });
// }
//
// delay(1).then(() => {
//     console.log("one sec");
// })

let p = new Promise((resolve, reject) => {
    let a = 1 + 2;
    if (a == 2) {
        resolve("Success");
    }
    else {
        reject("Failure");
    }
})

// .then will run when the promise is resolved
// .catch will run when the promise is rejected
p.then((message) => {
    console.log("This is in the then " + message);
}).catch((message) => {
    console.log("This is in the catch " + message);
})

