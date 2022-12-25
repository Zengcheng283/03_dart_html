define(['dart_sdk'], (function load__web__add_elements(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var add_elements = Object.create(dart.library);
  var $onChange = dartx.onChange;
  var $text = dartx.text;
  var $children = dartx.children;
  var $add = dartx.add;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    EventTovoid: () => (T.EventTovoid = dart.constFn(dart.fnType(dart.void, [html.Event])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(add_elements.addToDoItem, T.EventTovoid());
    }
  }, false);
  var C = [void 0];
  add_elements.main = function main() {
    add_elements.toDoInput[$onChange].listen(C[0] || CT.C0);
  };
  add_elements.addToDoItem = function addToDoItem(e) {
    let t0;
    let newToDo = (t0 = html.LIElement.new(), (() => {
      t0[$text] = add_elements.toDoInput.value;
      return t0;
    })());
    add_elements.toDoList[$children][$add](newToDo);
  };
  dart.defineLazy(add_elements, {
    /*add_elements.toDoInput*/get toDoInput() {
      return html.InputElement.as(html.querySelector("#to-do-input"));
    },
    /*add_elements.toDoList*/get toDoList() {
      return html.UListElement.as(html.querySelector("#to-do-list"));
    }
  }, false);
  dart.trackLibraries("web/add_elements", {
    "org-dartlang-app:///web/add_elements.dart": add_elements
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["add_elements.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;AAQwC,IAAtC,AAAU,AAAS;EACrB;kDAEuB;;AACf,8CAAU;AAAa,kBAAO,AAAU;;;AAMhB,IAA9B,AAAS,AAAS,uCAAI,OAAO;EAC/B;;MAfmB,sBAAS;YAAiC,sBAA9B,mBAAc;;MAC1B,qBAAQ;YAAgC,sBAA7B,mBAAc","file":"add_elements.sound.ddc.js"}');
  // Exports:
  return {
    web__add_elements: add_elements
  };
}));

//# sourceMappingURL=add_elements.sound.ddc.js.map
