define(['dart_sdk'], (function load__web__fetch_data(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const convert = dart_sdk.convert;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var fetch_data = Object.create(dart.library);
  var $onKeyUp = dartx.onKeyUp;
  var $onClick = dartx.onClick;
  var $_get = dartx._get;
  var $toString = dartx.toString;
  var $checked = dartx.checked;
  var $text = dartx.text;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    EventN: () => (T.EventN = dart.constFn(dart.nullable(html.Event)))(),
    EventNTovoid: () => (T.EventNTovoid = dart.constFn(dart.fnType(dart.void, [], [T.EventN()])))(),
    MapOfString$dynamic: () => (T.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    IdentityMapOfString$ObjectN: () => (T.IdentityMapOfString$ObjectN = dart.constFn(_js_helper.IdentityMap$(core.String, T.ObjectN())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(fetch_data._showJson, T.EventNTovoid());
    }
  }, false);
  var C = [void 0];
  fetch_data.main = function main() {
    fetch_data.favoriteNumber[$onKeyUp].listen(C[0] || CT.C0);
    fetch_data.valueOfPi[$onKeyUp].listen(C[0] || CT.C0);
    fetch_data.loveChocolate[$onClick].listen(C[0] || CT.C0);
    fetch_data.noLoveForChocolate[$onClick].listen(C[0] || CT.C0);
    fetch_data.horoscope[$onKeyUp].listen(C[0] || CT.C0);
    fetch_data.favOne[$onKeyUp].listen(C[0] || CT.C0);
    fetch_data.favTwo[$onKeyUp].listen(C[0] || CT.C0);
    fetch_data.favThree[$onKeyUp].listen(C[0] || CT.C0);
    fetch_data._populateFromJson();
    fetch_data._showJson();
  };
  fetch_data._populateFromJson = function _populateFromJson() {
    let jsonDataAsString = "{\n    \"favoriteNumber\": 73,\n    \"valueOfPi\": 3.141592,\n    \"chocolate\": true,\n    \"horoscope\": \"Cancer\",\n    \"favoriteThings\": [\"monkeys\", \"parrots\", \"lattes\"]\n  }";
    let jsonData = T.MapOfString$dynamic().as(convert.json.decode(jsonDataAsString));
    fetch_data.favoriteNumber.value = dart.toString(jsonData[$_get]("favoriteNumber"));
    fetch_data.valueOfPi.value = dart.toString(jsonData[$_get]("valueOfPi"));
    fetch_data.horoscope.value = dart.toString(jsonData[$_get]("horoscope"));
    let favoriteThings = core.List.as(jsonData[$_get]("favoriteThings"));
    fetch_data.favOne.value = core.String.as(favoriteThings[$_get](0));
    fetch_data.favTwo.value = core.String.as(favoriteThings[$_get](1));
    fetch_data.favThree.value = core.String.as(favoriteThings[$_get](2));
    let chocolateRadioButton = dart.equals(jsonData[$_get]("chocolate"), false) ? fetch_data.noLoveForChocolate : fetch_data.loveChocolate;
    chocolateRadioButton[$checked] = true;
  };
  fetch_data._showJson = function _showJson(_ = null) {
    let t0, t0$, t0$0, t0$1, t0$2;
    let favNum = core.int.tryParse((t0 = fetch_data.favoriteNumber.value, t0 == null ? "" : t0));
    let pi = core.double.tryParse((t0$ = fetch_data.valueOfPi.value, t0$ == null ? "" : t0$));
    let chocolate = fetch_data.loveChocolate[$checked];
    let sign = fetch_data.horoscope.value;
    let favoriteThings = T.JSArrayOfString().of([(t0$0 = fetch_data.favOne.value, t0$0 == null ? "" : t0$0), (t0$1 = fetch_data.favTwo.value, t0$1 == null ? "" : t0$1), (t0$2 = fetch_data.favThree.value, t0$2 == null ? "" : t0$2)]);
    let formData = new (T.IdentityMapOfString$ObjectN()).from(["favoriteNumber", favNum, "valueOfPi", pi, "chocolate", chocolate, "horoscope", sign, "favoriteThings", favoriteThings]);
    fetch_data.intAsJson[$text] = convert.json.encode(favNum);
    fetch_data.doubleAsJson[$text] = convert.json.encode(pi);
    fetch_data.boolAsJson[$text] = convert.json.encode(chocolate);
    fetch_data.stringAsJson[$text] = convert.json.encode(sign);
    fetch_data.listAsJson[$text] = convert.json.encode(favoriteThings);
    fetch_data.mapAsJson[$text] = convert.json.encode(formData);
  };
  dart.defineLazy(fetch_data, {
    /*fetch_data.favoriteNumber*/get favoriteNumber() {
      return html.InputElement.as(html.querySelector("#favoriteNumber"));
    },
    /*fetch_data.valueOfPi*/get valueOfPi() {
      return html.InputElement.as(html.querySelector("#valueOfPi"));
    },
    /*fetch_data.horoscope*/get horoscope() {
      return html.InputElement.as(html.querySelector("#horoscope"));
    },
    /*fetch_data.favOne*/get favOne() {
      return html.InputElement.as(html.querySelector("#favOne"));
    },
    /*fetch_data.favTwo*/get favTwo() {
      return html.InputElement.as(html.querySelector("#favTwo"));
    },
    /*fetch_data.favThree*/get favThree() {
      return html.InputElement.as(html.querySelector("#favThree"));
    },
    /*fetch_data.loveChocolate*/get loveChocolate() {
      return html.RadioButtonInputElement.as(html.querySelector("#loveChocolate"));
    },
    /*fetch_data.noLoveForChocolate*/get noLoveForChocolate() {
      return html.RadioButtonInputElement.as(html.querySelector("#noLoveForChocolate"));
    },
    /*fetch_data.intAsJson*/get intAsJson() {
      return html.TextAreaElement.as(html.querySelector("#intAsJson"));
    },
    /*fetch_data.doubleAsJson*/get doubleAsJson() {
      return html.TextAreaElement.as(html.querySelector("#doubleAsJson"));
    },
    /*fetch_data.stringAsJson*/get stringAsJson() {
      return html.TextAreaElement.as(html.querySelector("#stringAsJson"));
    },
    /*fetch_data.listAsJson*/get listAsJson() {
      return html.TextAreaElement.as(html.querySelector("#listAsJson"));
    },
    /*fetch_data.boolAsJson*/get boolAsJson() {
      return html.TextAreaElement.as(html.querySelector("#boolAsJson"));
    },
    /*fetch_data.mapAsJson*/get mapAsJson() {
      return html.TextAreaElement.as(html.querySelector("#mapAsJson"));
    }
  }, false);
  dart.trackLibraries("web/fetch_data", {
    "org-dartlang-app:///web/fetch_data.dart": fetch_data
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["fetch_data.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkC0C,IAAxC,AAAe,AAAQ;AACY,IAAnC,AAAU,AAAQ;AACqB,IAAvC,AAAc,AAAQ;AACsB,IAA5C,AAAmB,AAAQ;AACQ,IAAnC,AAAU,AAAQ;AACc,IAAhC,AAAO,AAAQ;AACiB,IAAhC,AAAO,AAAQ;AACmB,IAAlC,AAAS,AAAQ;AAEE,IAAnB;AACW,IAAX;EACF;;AAIQ;AAQe,mBACa,2BAA9B,AAAK,oBAAO,gBAAgB;AAE4B,IAA5D,AAAe,kCAAmC,cAA3B,AAAQ,QAAA,QAAC;AACkB,IAAlD,AAAU,6BAA8B,cAAtB,AAAQ,QAAA,QAAC;AACuB,IAAlD,AAAU,6BAA8B,cAAtB,AAAQ,QAAA,QAAC;AACrB,yBAA4C,aAA3B,AAAQ,QAAA,QAAC;AACU,IAA1C,AAAO,0BAA0B,eAAlB,AAAc,cAAA,QAAC;AACY,IAA1C,AAAO,0BAA0B,eAAlB,AAAc,cAAA,QAAC;AACc,IAA5C,AAAS,4BAA0B,eAAlB,AAAc,cAAA,QAAC;AAE1B,+BACoB,YAAtB,AAAQ,QAAA,QAAC,cAAgB,SAAQ,gCAAqB;AACvB,IAAnC,AAAqB,oBAAD,aAAW;EACjC;4CAGuB;;AAEf,iBAAa,mBAA8B,KAArB,AAAe,iCAAA,aAAS;AAC9C,aAAY,sBAAyB,MAAhB,AAAU,4BAAA,cAAS;AACxC,oBAAY,AAAc;AAC1B,eAAO,AAAU;AACjB,yBAAyB,yBAChB,OAAb,AAAO,yBAAA,eAAS,aACH,OAAb,AAAO,yBAAA,eAAS,aACD,OAAf,AAAS,2BAAA,eAAS;AAId,mBAAW,4CACf,kBAAkB,MAAM,EACxB,aAAa,EAAE,EACf,aAAa,SAAS,EACtB,aAAa,IAAI,EACjB,kBAAkB,cAAc;AAIE,IAApC,AAAU,8BAAO,AAAK,oBAAO,MAAM;AACA,IAAnC,AAAa,iCAAO,AAAK,oBAAO,EAAE;AACM,IAAxC,AAAW,+BAAO,AAAK,oBAAO,SAAS;AACF,IAArC,AAAa,iCAAO,AAAK,oBAAO,IAAI;AACS,IAA7C,AAAW,+BAAO,AAAK,oBAAO,cAAc;AACN,IAAtC,AAAU,8BAAO,AAAK,oBAAO,QAAQ;EACvC;;MAhGmB,yBAAc;YACI,sBAAjC,mBAAc;;MACC,oBAAS;YAA+B,sBAA5B,mBAAc;;MAC1B,oBAAS;YAA+B,sBAA5B,mBAAc;;MAC1B,iBAAM;YAA4B,sBAAzB,mBAAc;;MACvB,iBAAM;YAA4B,sBAAzB,mBAAc;;MACvB,mBAAQ;YAA8B,sBAA3B,mBAAc;;MACd,wBAAa;YACP,iCAAhC,mBAAc;;MACY,6BAAkB;YACP,iCAArC,mBAAc;;MAGI,oBAAS;YACC,yBAA5B,mBAAc;;MACI,uBAAY;YACC,yBAA/B,mBAAc;;MACI,uBAAY;YACC,yBAA/B,mBAAc;;MACI,qBAAU;YACC,yBAA7B,mBAAc;;MACI,qBAAU;YACC,yBAA7B,mBAAc;;MACI,oBAAS;YACC,yBAA5B,mBAAc","file":"fetch_data.sound.ddc.js"}');
  // Exports:
  return {
    web__fetch_data: fetch_data
  };
}));

//# sourceMappingURL=fetch_data.sound.ddc.js.map
