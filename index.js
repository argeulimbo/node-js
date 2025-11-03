const { Person } = require("./person");

// require("./modules/fs");
// // require("./modules/path");
// require("./modules/http");
require("./modules/app");

const person = new Person('Felipe')

console.log(person.sayMyName());