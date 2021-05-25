const { Language, LanguageTree } = require("../language");

const JS_Spec = new Language();

JS_Spec.SetProp("FunctionCall", (name, args) => `${name}(${args.join(", ")});`);
JS_Spec.SetProp(
  "ForSES",
  (start, end, step, snippet) =>
    `for(let i=${start}; i <= ${end}; i+= ${step}) { ${snippet} }`
);
JS_Spec.SetProp(
  "Foreach",
  (snippet, source, argument) => `${source}.forEach((${argument}) => {
    ${snippet}
})`
);

const Modern_Spec = new Language();

Modern_Spec.SetProp(
  "Foreach",
  (snippet, source, argument) => `for(let ${argument} in ${source}){
    ${snippet}
}`
);

JS_Spec.AddSubset("Modern", Modern_Spec);

//

const Languages = new LanguageTree();

Languages.AddLanguage("JavaScript", JS_Spec);

module.exports = { Languages };
