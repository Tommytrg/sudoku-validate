var Mocha = require("mocha");
var mocha = new Mocha({
    ui: "tdd",
    reporter: "spec"
});
mocha.addFile("test.js");

mocha.run();