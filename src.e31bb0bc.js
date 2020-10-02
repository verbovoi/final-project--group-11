// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\fonts\\ralewaybold.woff":[["ralewaybold.47e4d76f.woff","fonts/ralewaybold.woff"],"fonts/ralewaybold.woff"],"./..\\images\\header\\hero480.jpg":[["hero480.21547696.jpg","images/header/hero480.jpg"],"images/header/hero480.jpg"],"./..\\images\\header\\hero480@2x.jpg":[["hero480@2x.4526e881.jpg","images/header/hero480@2x.jpg"],"images/header/hero480@2x.jpg"],"./..\\images\\header\\hero480@3x.jpg":[["hero480@3x.962d27b8.jpg","images/header/hero480@3x.jpg"],"images/header/hero480@3x.jpg"],"./..\\images\\header\\slider768\\image768-1.jpg":[["image768-1.eff92afc.jpg","images/header/slider768/image768-1.jpg"],"images/header/slider768/image768-1.jpg"],"./..\\images\\header\\slider768\\image768-1@2x.jpg":[["image768-1@2x.31105fa5.jpg","images/header/slider768/image768-1@2x.jpg"],"images/header/slider768/image768-1@2x.jpg"],"./..\\images\\header\\slider768\\image768-1@3x.jpg":[["image768-1@3x.e7bd0329.jpg","images/header/slider768/image768-1@3x.jpg"],"images/header/slider768/image768-1@3x.jpg"],"./..\\images\\header\\slider1280\\image1280-1.jpg":[["image1280-1.5e8bdd7b.jpg","images/header/slider1280/image1280-1.jpg"],"images/header/slider1280/image1280-1.jpg"],"./..\\images\\header\\slider1280\\image1280-1@2x.jpg":[["image1280-1@2x.a4fd02ba.jpg","images/header/slider1280/image1280-1@2x.jpg"],"images/header/slider1280/image1280-1@2x.jpg"],"./..\\images\\header\\slider1280\\image1280-1@3x.jpg":[["image1280-1@3x.99b56f66.jpg","images/header/slider1280/image1280-1@3x.jpg"],"images/header/slider1280/image1280-1@3x.jpg"],"./..\\images\\header\\slider768\\image768-2.jpg":[["image768-2.f5c7ddfc.jpg","images/header/slider768/image768-2.jpg"],"images/header/slider768/image768-2.jpg"],"./..\\images\\header\\slider768\\image768-2@2x.jpg":[["image768-2@2x.78744081.jpg","images/header/slider768/image768-2@2x.jpg"],"images/header/slider768/image768-2@2x.jpg"],"./..\\images\\header\\slider768\\image768-2@3x.jpg":[["image768-2@3x.8ba533c3.jpg","images/header/slider768/image768-2@3x.jpg"],"images/header/slider768/image768-2@3x.jpg"],"./..\\images\\header\\slider1280\\image1280-2.jpg":[["image1280-2.38b81737.jpg","images/header/slider1280/image1280-2.jpg"],"images/header/slider1280/image1280-2.jpg"],"./..\\images\\header\\slider1280\\image1280-2@2x.jpg":[["image1280-2@2x.3008ff43.jpg","images/header/slider1280/image1280-2@2x.jpg"],"images/header/slider1280/image1280-2@2x.jpg"],"./..\\images\\header\\slider1280\\image1280-2@3x.jpg":[["image1280-2@3x.3fd3f79e.jpg","images/header/slider1280/image1280-2@3x.jpg"],"images/header/slider1280/image1280-2@3x.jpg"],"./..\\images\\header\\slider768\\image768-3.jpg":[["image768-3.148efdbd.jpg","images/header/slider768/image768-3.jpg"],"images/header/slider768/image768-3.jpg"],"./..\\images\\header\\slider768\\image768-3@2x.jpg":[["image768-3@2x.935c2d3d.jpg","images/header/slider768/image768-3@2x.jpg"],"images/header/slider768/image768-3@2x.jpg"],"./..\\images\\header\\slider768\\image768-3@3x.jpg":[["image768-3@3x.c4176624.jpg","images/header/slider768/image768-3@3x.jpg"],"images/header/slider768/image768-3@3x.jpg"],"./..\\images\\header\\slider1280\\image1280-3.jpg":[["image1280-3.4ec67489.jpg","images/header/slider1280/image1280-3.jpg"],"images/header/slider1280/image1280-3.jpg"],"./..\\images\\header\\slider1280\\image1280-3@2x.jpg":[["image1280-3@2x.84012105.jpg","images/header/slider1280/image1280-3@2x.jpg"],"images/header/slider1280/image1280-3@2x.jpg"],"./..\\images\\header\\slider1280\\image1280-3@3x.jpg":[["image1280-3@3x.42e7f034.jpg","images/header/slider1280/image1280-3@3x.jpg"],"images/header/slider1280/image1280-3@3x.jpg"],"./..\\images\\modal\\checkbox.svg":[["checkbox.c8853b49.svg","images/modal/checkbox.svg"],"images/modal/checkbox.svg"],"./..\\images\\footer\\footer-bgi480px.jpg":[["footer-bgi480px.2bd9ebaa.jpg","images/footer/footer-bgi480px.jpg"],"images/footer/footer-bgi480px.jpg"],"./..\\images\\footer\\footer-bgi480px@2x.jpg":[["footer-bgi480px@2x.5f2c7a67.jpg","images/footer/footer-bgi480px@2x.jpg"],"images/footer/footer-bgi480px@2x.jpg"],"./..\\images\\footer\\footer-bgi480px@3x.jpg":[["footer-bgi480px@3x.0041bd0f.jpg","images/footer/footer-bgi480px@3x.jpg"],"images/footer/footer-bgi480px@3x.jpg"],"./..\\images\\footer\\footer-bgi768px.jpg":[["footer-bgi768px.0d30b927.jpg","images/footer/footer-bgi768px.jpg"],"images/footer/footer-bgi768px.jpg"],"./..\\images\\footer\\footer-bgi768px@2x.jpg":[["footer-bgi768px@2x.42a2bd90.jpg","images/footer/footer-bgi768px@2x.jpg"],"images/footer/footer-bgi768px@2x.jpg"],"./..\\images\\footer\\footer-bgi768px@3x.jpg":[["footer-bgi768px@3x.e2c6494a.jpg","images/footer/footer-bgi768px@3x.jpg"],"images/footer/footer-bgi768px@3x.jpg"],"./..\\images\\footer\\footer-bgi1280px.jpg":[["footer-bgi1280px.a0b3944d.jpg","images/footer/footer-bgi1280px.jpg"],"images/footer/footer-bgi1280px.jpg"],"./..\\images\\footer\\footer-bgi1280px@2x.jpg":[["footer-bgi1280px@2x.1803c95e.jpg","images/footer/footer-bgi1280px@2x.jpg"],"images/footer/footer-bgi1280px@2x.jpg"],"./..\\images\\footer\\footer-bgi1280px@3x.jpg":[["footer-bgi1280px@3x.dc7a104e.jpg","images/footer/footer-bgi1280px@3x.jpg"],"images/footer/footer-bgi1280px@3x.jpg"],"./..\\images\\prices\\prices.jpg":[["prices.83d3b6df.jpg","images/prices/prices.jpg"],"images/prices/prices.jpg"],"./..\\images\\prices\\prices@2x.jpg":[["prices@2x.5c112cdb.jpg","images/prices/prices@2x.jpg"],"images/prices/prices@2x.jpg"],"./..\\images\\prices\\prices@3x.jpg":[["prices@3x.accafc39.jpg","images/prices/prices@3x.jpg"],"images/prices/prices@3x.jpg"],"./..\\images\\prices\\prices-tablet.jpg":[["prices-tablet.020dd831.jpg","images/prices/prices-tablet.jpg"],"images/prices/prices-tablet.jpg"],"./..\\images\\prices\\prices-tablet@2x.jpg":[["prices-tablet@2x.72c2916e.jpg","images/prices/prices-tablet@2x.jpg"],"images/prices/prices-tablet@2x.jpg"],"./..\\images\\prices\\prices-tablet@3x.jpg":[["prices-tablet@3x.3dbd591a.jpg","images/prices/prices-tablet@3x.jpg"],"images/prices/prices-tablet@3x.jpg"],"./..\\images\\prices\\prices-desktop.jpg":[["prices-desktop.048fc788.jpg","images/prices/prices-desktop.jpg"],"images/prices/prices-desktop.jpg"],"./..\\images\\prices\\prices-desktop@2x.jpg":[["prices-desktop@2x.6c5359f9.jpg","images/prices/prices-desktop@2x.jpg"],"images/prices/prices-desktop@2x.jpg"],"./..\\images\\prices\\prices-desktop@3x.jpg":[["prices-desktop@3x.41ee8db0.jpg","images/prices/prices-desktop@3x.jpg"],"images/prices/prices-desktop@3x.jpg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");
},{"./sass/main.scss":"sass/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52273" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map