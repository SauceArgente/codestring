class LanguageTree {
  constructor() {
    this.languages = {};
  }

  AddLanguage(name, language) {
    this.languages[name] = language;
  }

  DeconstructPath(path) {
    return path.split("::");
  }

  GetProp(prop, route, path) {
    var route;
    var firstRoute;

    if (path != undefined) {
      route = this.DeconstructPath(path);
    }

    let FROUTE = route[0];
    route.shift();

    if (route.length > 0) {
      let x =
        this.languages[FROUTE].SubsetTree.GetProp(prop, route, undefined) ||
        this.languages[FROUTE].GetProp(prop);

      return x;
    } else {
      if (this.languages[FROUTE] != undefined) {
        return this.languages[FROUTE].GetProp(prop);
      } else {
        return undefined;
      }
    }
  }
}

class Language {
  constructor() {
    this.props = {};
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

module.exports = { Language, LanguageTree };
