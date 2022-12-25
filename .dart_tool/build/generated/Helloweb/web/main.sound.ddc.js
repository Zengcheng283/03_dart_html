define(['dart_sdk'], (function load__web__main(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var main = Object.create(dart.library);
  var $innerHtml = dartx.innerHtml;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  main.main = function main$() {
    let randomGenerator = math.Random.new();
    let randomNum = randomGenerator.nextInt(100);
    dart.nullCheck(html.querySelector("#RipVanWinkle"))[$innerHtml] = "The server is started successfully<br/> \n      Random Number: " + dart.str(randomNum) + "<br/> \n      姓名：曾程<br/> \n      学号：20191060222<br/> \n      学院：信息学院";
  };
  dart.trackLibraries("web/main", {
    "org-dartlang-app:///web/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;AAIM,0BAAsB;AACtB,oBAAY,AAAgB,eAAD,SAAS;AAM1B,IALgB,AAAE,eAAhC,mBAAc,gCACV,AAIU,6EAHM,SAAS;EAI/B","file":"main.sound.ddc.js"}');
  // Exports:
  return {
    web__main: main
  };
}));

//# sourceMappingURL=main.sound.ddc.js.map
