define(['dart_sdk'], (function load__web__load_remote_file(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var load_remote_file = Object.create(dart.library);
  var $onClick = dartx.onClick;
  var $children = dartx.children;
  var $text = dartx.text;
  var $add = dartx.add;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    EventToFutureOfvoid: () => (T.EventToFutureOfvoid = dart.constFn(dart.fnType(T.FutureOfvoid(), [html.Event])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(load_remote_file.makeRequest, T.EventToFutureOfvoid());
    }
  }, false);
  var C = [void 0];
  load_remote_file.main = function main() {
    dart.nullCheck(html.querySelector("#getWords"))[$onClick].listen(C[0] || CT.C0);
  };
  load_remote_file.makeRequest = function makeRequest(_) {
    return async.async(dart.void, function* makeRequest() {
      let t1;
      try {
        let jsonString = (yield html.HttpRequest.getString("portmanteaux.json"));
        load_remote_file.processResponse(jsonString);
      } catch (e$) {
        let e = dart.getThrown(e$);
        if (core.Object.is(e)) {
          core.print("Couldn't open " + "portmanteaux.json");
          load_remote_file.wordList[$children][$add]((t1 = html.LIElement.new(), (() => {
            t1[$text] = "Request failed.";
            return t1;
          })()));
        } else
          throw e$;
      }
    });
  };
  load_remote_file.processResponse = function processResponse(jsonString) {
    let t1;
    for (let portmanteau of core.List.as(convert.json.decode(jsonString))) {
      load_remote_file.wordList[$children][$add]((t1 = html.LIElement.new(), (() => {
        t1[$text] = core.String.as(portmanteau);
        return t1;
      })()));
    }
  };
  dart.defineLazy(load_remote_file, {
    /*load_remote_file.wordList*/get wordList() {
      return html.UListElement.as(html.querySelector("#wordList"));
    }
  }, false);
  dart.trackLibraries("web/load_remote_file", {
    "org-dartlang-app:///web/load_remote_file.dart": load_remote_file
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["load_remote_file.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;AASyD,IAA7B,AAAE,AAAQ,eAApC,mBAAc;EAChB;sDAE+B;AAAP;;AAGtB;AAEQ,0BAAa,MAAkB;AAEV,QAA3B,iCAAgB,UAAU;;YACnB;AAAP;AAE4B,UAA5B,WAAM,AAAqB;AACiC,UAA5D,AAAS,AAAS,uEAAI;AAAa,wBAAO;;;;;;IAE9C;;8DAE4B;;AAC1B,aAAW,cAAuC,cAAxB,AAAK,oBAAO,UAAU;AAEkB,MAAhE,AAAS,AAAS,uEAAI;AAAa,oBAAmB,eAAZ,WAAW;;;;EAEzD;;MA1BmB,yBAAQ;YAA8B,sBAA3B,mBAAc","file":"load_remote_file.sound.ddc.js"}');
  // Exports:
  return {
    web__load_remote_file: load_remote_file
  };
}));

//# sourceMappingURL=load_remote_file.sound.ddc.js.map
