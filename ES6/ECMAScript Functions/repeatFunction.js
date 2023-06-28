// repeat() allows us to make copies of strings as many times
// as we like

let yell = "woo!";
let party = yell.repeat(3);
console.log(party);

let cat = {
    meow(times) {
        console.log("meow".repeat(times));
    },
    purr(times) {
        console.log("prrr".repeat(times));
    },
    snore(times) {
        console.log("ZzZzZz".repeat(times));
    }
}

cat.meow(3);