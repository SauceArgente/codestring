const { Builtins, Structure } = require("./index");

const { Program, Snippet } = Structure;
const { String, Literal } = Builtins.Types;
const { FunctionCall, ForEach } = Builtins.Methods;
const { Languages } = Builtins.Languages;

const program = new Program();

let call = new FunctionCall("console.log");

call.addArgs(new String("This is var B: "));
call.addArgs(new Literal("b"));

program.addSnippets(call);

let printStatement =  new FunctionCall("console.log");

printStatement.addArgs(new String("This is var B: "));
printStatement.addArgs(new Literal("b"));

let forContent = new Snippet(printStatement);

let fc = new ForEach(forContent, new Literal("list"), new Literal("element"));

program.addSnippets(fc);

let compiledOutput = program.toString("JavaScript::Modern", Languages);

console.log(compiledOutput);
