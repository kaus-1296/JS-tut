// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Kaustav",
    "full name": "Kaustav Majumdar",
    age: 18,
    [mySym]: "myKey1",
    location: "Baroda",
    email: "kaustav@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.name);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "kaustavmajumdar@gmail.com";
// Object.freeze(JsUser);
JsUser.email = "kaustavmajumdar@yahoo.com";
// console.log(JsUser);


JsUser.greeting = function() {
    console.log("Hello Js User");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());