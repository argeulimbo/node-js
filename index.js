const { Person } = require("./person");

// require("./modules/fs");
// require("./modules/path");
require("./modules/http");

const person = new Person('Felipe')

console.log(person.sayMyName());