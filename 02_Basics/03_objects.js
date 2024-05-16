// singleton
// object.create

// object literals

const mySys = Symbol("key1");

const JsUser = {
    name: "Sahil",
    "full name": "Sahil Panjwani",
    age: 18,
    [mySys]: "mykey1",
    location: "Jaipur",
    email: "sahil@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySys]);

JsUser.email = "sahil@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "sahil@microsoft.com"
console.log(JsUser);

JsUser.greeting = function () {
    console.log("hello JS user");
}
JsUser.greetingTwo = function () {
    console.log(`hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





