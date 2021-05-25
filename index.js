const Classes = require("./modules/structure");

const BMethods = require("./modules/builtins/methods");
const BTypes = require("./modules/builtins/types");
const BLanguages = require("./modules/builtins/languages");
const Structure = require("./modules/structure");

module.exports = {
    Builtins : {
        Methods : BMethods,
        Types : BTypes,
        Languages : BLanguages,
    },
    Structure,
}
