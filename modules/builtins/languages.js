const { Language, LanguageTree } = require("./language");

const JS_Spec = new Language();

JS_Spec.SetProp("FunctionCall", (name, args) => `${name}(${args.join(", ")});`)
JS_Spec.SetProp("ForSES", (start, end, step, snippet) => `for(let i=${start}; i <= ${end}; i+= ${step}) { ${snippet} }`)

const ES6_Spec = new Language();

JS_Spec.AddSubset("ES6", ES6_Spec);

// 

const Languages = new LanguageTree();

Languages.AddLanguage("JavaScript", JS_Spec)

module.exports = { Languages };