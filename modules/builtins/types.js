module.exports = {
    Literal,
    String,
}

class Literal {
    constructor(literal){
        this.literal = literal.toString();
    }

    toString() {
        return this.literal;
    }
}

class String {
    constructor(string) {
        this.string = string;
    }

    toString() {
        return `"${this.string}"`
    }
}