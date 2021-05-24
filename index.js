const Classes = require("./modules/structure");

let call = new Classes.FunctionCall("console.log")

call.addArgs(new Classes.String("This is var B: "))
call.addArgs(new Classes.Literal("b"))

console.log(call.toString("JavaScript::ES6"))