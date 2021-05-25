class FunctionCall {
  constructor(name, ...args) {
    this.functionName = name;
    if (args == []) {
      this.args = [];
    } else {
      this.args = args;
    }
  }

  setArgs(...args) {
    this.args = args;
  }

  addArgs(...args) {
    this.args = [...this.args, args];
  }

  toString(lang, tree) {
    this.stringArgs = this.args.map((arg) => arg.toString());

    let cb = tree.GetProp(
      "FunctionCall",
      undefined,
      lang
    );

    return cb(this.functionName, this.stringArgs);
  }
}

class ForEach {
  constructor(snippet, source, argument) {
    this.source = source;
    this.snippet = snippet;
    this.argument = argument;
  }

  toString(lang, tree) {
    this.stringsource = this.source.toString(lang, tree);
    this.stringsnippet = this.snippet.toString(lang, tree);
    this.stringargument = this.argument.toString(lang, tree);

    return tree.GetProp("Foreach", undefined, lang)(
      this.stringsnippet,
      this.stringsource,
      this.stringargument
    );
  }
}

module.exports = { FunctionCall, ForEach };
