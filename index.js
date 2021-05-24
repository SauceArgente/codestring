const Classes = require("./modules/structure");

const { FunctionCall } = require("./modules/builtins/methods");
const { String, Literal } = require("./modules/builtins/types");
const { Languages } = require("./modules/builtins/languages");
const { Program } = require("./modules/structure");

const program = new Program();

let call = new FunctionCall("console.log");

call.addArgs(new String("This is var B: "));
call.addArgs(new Literal("b"));

program.addSnippets(call);

let compiledOutput = program.toString("JavaScript::ES6", Languages);

console.log(compiledOutput);
