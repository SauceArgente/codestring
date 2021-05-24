class Program {
    constructor(tree,...snippets){
        this.tree = tree;
        this.snippets = Snippet.Join(snippets);
    }


}

class Snippet {
    constructor(...statements) {
        this.statements = [];

        for(const statement in statements){
            let fst = statement; // final statement
            if(typeof statement == Snippet){
                fst = statement.flatten();
            }

            this.statements.push(fst);
        }
    }

    flatten()
    {
        return this.statements;
    }
}




module.exports = {
    Program,
}