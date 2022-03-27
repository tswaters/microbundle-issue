(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.microbundleTest = {}));
})(this, (function (exports) {
  const shallowClone = obj => {
    return { ...obj
    };
  };

  exports.shallowClone = shallowClone;

}));
//# sourceMappingURL=foo.umd.js.map
