class Program {
  constructor(tree, ...snippets) {
    this.tree = tree;
    this.code = snippets;
  }

  toString(lang, languages) {
    let finalProgram = "";

    for (const snippet of this.code) {
      let compiled = snippet.toString(lang, languages);
      finalProgram += compiled;
      finalProgram += "\n";
    }

    return finalProgram;
  }

  addSnippets(...snippets) {
    this.code = [...this.code, ...snippets];
  }
}

class Snippet {
  constructor(...statements) {
    this.statements = statements;
  }

  flatten() {
    return this.statements;
  }

  toString(lang, tree) {
    let finalProgram = "";

    for (const snippet of this.statements) {
      finalProgram += snippet.toString(lang, tree);
      finalProgram += "\n";
    }

    return finalProgram;
  }
}

module.exports = {
  Program,
  Snippet,
};
