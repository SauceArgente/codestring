class LanguageTree{
    constructor() {
        this.languages = {}
    }

    AddLanguage(name, language) {
        this.languages[name] = language;
    }

    DeconstructPath(path){
        return path.split("::");
    }

    GetProp(prop, accessPath, restOfRoute) {
        var route;
        var firstRoute;

        if(restOfRoute == undefined){
            route = this.DeconstructPath(accessPath);
            firstRoute = route.splice(0,1);
        }else{
            route = restOfRoute;
            firstRoute = accessPath;
        }

        console.log(route, accessPath)

        if(route.length == 0){
            return this.languages[firstRoute].GetProp(prop);
        }else{
            return this.languages[firstRoute].GetProp(prop) || this.languages[firstRoute].SubsetTree.GetProp(prop, route[0], route);
        }
    }
}

class Language {
    constructor() {
        this.props = {}
        this.SubsetTree = new LanguageTree();
    }

    SetProp(name, callback) {
        this.props[name] = callback;
    }

    GetProp(name) {
        return this.props[name];
    }

    AddSubset(name, subset) {
        this.SubsetTree.AddLanguage(name, subset);
    }
}

module.exports = { Language, LanguageTree }