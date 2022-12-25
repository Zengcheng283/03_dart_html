define(['dart_sdk'], (function load__web__remove_elements(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var remove_elements = Object.create(dart.library);
  var $onChange = dartx.onChange;
  var $onClick = dartx.onClick;
  var $children = dartx.children;
  var $clear = dartx.clear;
  var $text = dartx.text;
  var $remove = dartx.remove;
  var $add = dartx.add;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    EventTovoid: () => (T.EventTovoid = dart.constFn(dart.fnType(dart.void, [html.Event])))(),
    MouseEventTovoid: () => (T.MouseEventTovoid = dart.constFn(dart.fnType(dart.void, [html.MouseEvent])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(remove_elements.addToDoItem, T.EventTovoid());
    }
  }, false);
  var C = [void 0];
  remove_elements.main = function main() {
    remove_elements.toDoInput[$onChange].listen(C[0] || CT.C0);
    remove_elements.deleteAll[$onClick].listen(dart.fn(_ => remove_elements.toDoList[$children][$clear](), T.MouseEventTovoid()));
  };
  remove_elements.addToDoItem = function addToDoItem(e) {
    let t0;
    let newToDo = (t0 = html.LIElement.new(), (() => {
      t0[$text] = remove_elements.toDoInput.value;
      return t0;
    })());
    newToDo[$onClick].listen(dart.fn(_ => newToDo[$remove](), T.MouseEventTovoid()));
    remove_elements.toDoInput.value = "";
    remove_elements.toDoList[$children][$add](newToDo);
  };
  dart.defineLazy(remove_elements, {
    /*remove_elements.toDoInput*/get toDoInput() {
      return html.InputElement.as(html.querySelector("#to-do-input"));
    },
    /*remove_elements.toDoList*/get toDoList() {
      return html.UListElement.as(html.querySelector("#to-do-list"));
    },
    /*remove_elements.deleteAll*/get deleteAll() {
      return html.ButtonElement.as(html.querySelector("#delete-all"));
    }
  }, false);
  dart.trackLibraries("web/remove_elements", {
    "org-dartlang-app:///web/remove_elements.dart": remove_elements
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["remove_elements.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AASwC,IAAtC,AAAU,AAAS;AACuC,IAA1D,AAAU,AAAQ,2CAAO,QAAC,KAAM,AAAS,AAAS;EACpD;qDAEuB;;AACf,8CAAU;AAAa,kBAAO,AAAU;;;AACC,IAA/C,AAAQ,AAAQ,OAAT,kBAAgB,QAAC,KAAM,AAAQ,OAAD;AACjB,IAApB,AAAU,kCAAQ;AACY,IAA9B,AAAS,AAAS,0CAAI,OAAO;EAC/B;;MAdmB,yBAAS;YAAiC,sBAA9B,mBAAc;;MAC1B,wBAAQ;YAAgC,sBAA7B,mBAAc;;MACxB,yBAAS;YAAgC,uBAA7B,mBAAc","file":"remove_elements.sound.ddc.js"}');
  // Exports:
  return {
    web__remove_elements: remove_elements
  };
}));

//# sourceMappingURL=remove_elements.sound.ddc.js.map
