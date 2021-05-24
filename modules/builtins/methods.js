module.exports = { FunctionCall }

class FunctionCall {

    constructor(name, ...args) {
        this.functionName = name;
        if (args == []) {
            this.args = []
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
        this.stringArgs = this.args.map(arg => arg.toString());
        return tree.GetProp("FunctionCall", lang)(this.functionName, this.stringArgs);
    }
}