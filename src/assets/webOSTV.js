window.webOS = (function (e) {
  var n = {};
  function r(t) {
    if (n[t]) return n[t].exports;
    var o = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  return (
    (r.m = e),
    (r.c = n),
    (r.d = function (e, n, t) {
      r.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (r.r = function (e) {
      'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (r.t = function (e, n) {
      if ((1 & n && (e = r(e)), 8 & n)) return e;
      if (4 & n && 'object' == typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if ((r.r(t), Object.defineProperty(t, 'default', { enumerable: !0, value: e }), 2 & n && 'string' != typeof e))
        for (var o in e)
          r.d(
            t,
            o,
            function (n) {
              return e[n];
            }.bind(null, o)
          );
      return t;
    }),
    (r.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(n, 'a', n), n;
    }),
    (r.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (r.p = ''),
    r((r.s = 1))
  );
})([
  function (e) {
    e.exports = JSON.parse(
      '{"name":"webostv-js","version":"1.2.4","description":"","main":"index.js","scripts":{"belazy":"npm run lint && npm run docs && npm run release","build":"node scripts/build.js","build:dev":"node scripts/build.js develop","clean":"git clean -xdf","docs":"jsdoc -c jsdoc.json","lint":"eslint . --cache","release":"node scripts/release.js","test":"node scripts/test.js app","test:mocha":"node scripts/test.js mocha"},"repository":{"type":"git","url":"http://mod.lge.com/hub/tvsdk/webostv-js.git"},"keywords":[],"author":"LGE TV Lab","license":"Apache-2.0","dependencies":{"address":"^1.0.3","archiver":"^4.0.1","chalk":"^2.4.1","command-exists":"^1.2.7","fs-extra":"^8.1.0","jsdoc":"^3.5.5","webpack":"^4.10.1","webpack-dev-server":"^3.1.4","webpack-merge":"^4.1.2"},"devDependencies":{"@babel/cli":"^7.10.1","@babel/core":"^7.10.2","@babel/polyfill":"^7.10.1","@babel/preset-env":"^7.10.2","babel-loader":"^8.1.0","eslint":"^4.19.1","eslint-config-airbnb-base":"^12.1.0","eslint-loader":"^2.0.0","eslint-plugin-import":"^2.12.0","html-webpack-plugin":"^4.3.0","mocha":"^5.2.0","mocha-loader":"^1.1.3"}}'
    );
  },
  function (e, n, r) {
    'use strict';
    r.r(n),
      r.d(n, 'deviceInfo', function () {
        return P;
      }),
      r.d(n, 'fetchAppId', function () {
        return t;
      }),
      r.d(n, 'fetchAppInfo', function () {
        return i;
      }),
      r.d(n, 'fetchAppRootPath', function () {
        return s;
      }),
      r.d(n, 'keyboard', function () {
        return x;
      }),
      r.d(n, 'libVersion', function () {
        return D;
      }),
      r.d(n, 'platformBack', function () {
        return a;
      }),
      r.d(n, 'platform', function () {
        return V;
      }),
      r.d(n, 'service', function () {
        return p;
      }),
      r.d(n, 'systemInfo', function () {
        return k;
      });
    var t = function () {
        return window.PalmSystem && window.PalmSystem.identifier ? window.PalmSystem.identifier.split(' ')[0] : '';
      },
      o = {},
      i = function (e, n) {
        if (0 === Object.keys(o).length) {
          var r = function (n, r) {
              if (!n && r)
                try {
                  (o = JSON.parse(r)), e && e(o);
                } catch (n) {
                  console.error('Unable to parse appinfo.json file for', t()), e && e();
                }
              else e && e();
            },
            i = new window.XMLHttpRequest();
          i.onreadystatechange = function () {
            4 === i.readyState && ((i.status >= 200 && i.status < 300) || 0 === i.status ? r(null, i.responseText) : r({ status: 404 }));
          };
          try {
            i.open('GET', n || 'appinfo.json', !0), i.send(null);
          } catch (e) {
            r({ status: 404 });
          }
        } else e && e(o);
      },
      s = function () {
        var e = window.location.href;
        if ('baseURI' in window.document) e = window.document.baseURI;
        else {
          var n = window.document.getElementsByTagName('base');
          n.length > 0 && (e = n[0].href);
        }
        var r = e.match(new RegExp('.*://[^#]*/'));
        return r ? r[0] : '';
      },
      a = function () {
        if (window.PalmSystem && window.PalmSystem.platformBack) return window.PalmSystem.platformBack();
      };
    function c(e, n) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var t = Object.getOwnPropertySymbols(e);
        n &&
          (t = t.filter(function (n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable;
          })),
          r.push.apply(r, t);
      }
      return r;
    }
    function l(e) {
      for (var n = 1; n < arguments.length; n++) {
        var r = null != arguments[n] ? arguments[n] : {};
        n % 2
          ? c(Object(r), !0).forEach(function (n) {
              d(e, n, r[n]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : c(Object(r)).forEach(function (n) {
              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
            });
      }
      return e;
    }
    function d(e, n, r) {
      return n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = r), e;
    }
    function u(e, n) {
      for (var r = 0; r < n.length; r++) {
        var t = n[r];
        (t.enumerable = t.enumerable || !1), (t.configurable = !0), 'value' in t && (t.writable = !0), Object.defineProperty(e, t.key, t);
      }
    }
    var f = {},
      m = (function () {
        function e() {
          !(function (e, n) {
            if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.bridge = null),
            (this.cancelled = !1),
            (this.subscribe = !1);
        }
        var n, r, t;
        return (
          (n = e),
          (r = [
            {
              key: 'send',
              value: function (e) {
                var n = e.service,
                  r = void 0 === n ? '' : n,
                  t = e.method,
                  o = void 0 === t ? '' : t,
                  i = e.parameters,
                  s = void 0 === i ? {} : i,
                  a = e.onSuccess,
                  c = void 0 === a ? function () {} : a,
                  d = e.onFailure,
                  u = void 0 === d ? function () {} : d,
                  m = e.onComplete,
                  p = void 0 === m ? function () {} : m,
                  v = e.subscribe,
                  w = void 0 !== v && v;
                if (!window.PalmServiceBridge) {
                  var b = { errorCode: -1, errorText: 'PalmServiceBridge is not found.', returnValue: !1 };
                  return u(b), p(b), console.error('PalmServiceBridge is not found.'), this;
                }
                this.ts && f[this.ts] && delete f[this.ts];
                var h,
                  y = l({}, s);
                return (
                  (this.subscribe = w),
                  this.subscribe && (y.subscribe = this.subscribe),
                  y.subscribe && (this.subscribe = y.subscribe),
                  (this.ts = Date.now()),
                  (f[this.ts] = this),
                  (this.bridge = new PalmServiceBridge()),
                  (this.bridge.onservicecallback = this.callback.bind(this, c, u, p)),
                  this.bridge.call(('/' !== (h = r).slice(-1) && (h += '/'), h + o), JSON.stringify(y)),
                  this
                );
              },
            },
            {
              key: 'callback',
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function () {},
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {},
                  r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {},
                  t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : '';
                if (!this.cancelled) {
                  var o = {};
                  try {
                    o = JSON.parse(t);
                  } catch (e) {
                    o = { errorCode: -1, errorText: t, returnValue: !1 };
                  }
                  var i = o,
                    s = i.errorCode,
                    a = i.returnValue;
                  s || !1 === a ? ((o.returnValue = !1), n(o)) : ((o.returnValue = !0), e(o)), r(o), this.subscribe || this.cancel();
                }
              },
            },
            {
              key: 'cancel',
              value: function () {
                (this.cancelled = !0),
                  null !== this.bridge && (this.bridge.cancel(), (this.bridge = null)),
                  this.ts && f[this.ts] && delete f[this.ts];
              },
            },
          ]) && u(n.prototype, r),
          t && u(n, t),
          e
        );
      })(),
      p = {
        request: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = l({ service: e }, n);
          return new m().send(r);
        },
      };
    function v(e) {
      return (v =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
            })(e);
    }
    var w = {};
    if ('object' === ('undefined' == typeof window ? 'undefined' : v(window)) && window.PalmSystem) {
      if (window.navigator.userAgent.indexOf('SmartWatch') > -1) w.watch = !0;
      else if (window.navigator.userAgent.indexOf('SmartTV') > -1 || window.navigator.userAgent.indexOf('Large Screen') > -1) w.tv = !0;
      else {
        try {
          var b = JSON.parse(window.PalmSystem.deviceInfo || '{}');
          if (b.platformVersionMajor && b.platformVersionMinor) {
            var h = Number(b.platformVersionMajor),
              y = Number(b.platformVersionMinor);
            h < 3 || (3 === h && y <= 0) ? (w.legacy = !0) : (w.open = !0);
          }
        } catch (e) {
          w.open = !0;
        }
        (window.Mojo = window.Mojo || { relaunch: function () {} }), window.PalmSystem.stageReady && window.PalmSystem.stageReady();
      }
      if (window.navigator.userAgent.indexOf('Chr0me') > -1 || window.navigator.userAgent.indexOf('Chrome') > -1) {
        var g =
            window.navigator.userAgent.indexOf('Chr0me') > -1
              ? window.navigator.userAgent.indexOf('Chr0me')
              : window.navigator.userAgent.indexOf('Chrome'),
          S = window.navigator.userAgent.slice(g).indexOf(' '),
          O = window.navigator.userAgent.slice(g + 7, g + S).split('.');
        w.chrome = Number(O[0]);
      } else w.chrome = 0;
    } else w.unknown = !0;
    var V = w,
      j = {},
      P = function (e) {
        if (0 === Object.keys(j).length) {
          try {
            var n = JSON.parse(window.PalmSystem.deviceInfo);
            (j.modelName = n.modelName),
              (j.version = n.platformVersion),
              (j.versionMajor = n.platformVersionMajor),
              (j.versionMinor = n.platformVersionMinor),
              (j.versionDot = n.platformVersionDot),
              (j.sdkVersion = n.platformVersion),
              (j.screenWidth = n.screenWidth),
              (j.screenHeight = n.screenHeight);
          } catch (e) {
            j.modelName = 'webOS Device';
          }
          (j.screenHeight = j.screenHeight || window.screen.height),
            (j.screenWidth = j.screenWidth || window.screen.width),
            V.tv &&
              ((j.uhd = !1),
              (j.uhd8K = !1),
              (j.hdr10 = !1),
              (j.dolbyVision = !1),
              (j.dolbyAtmos = !1),
              new m().send({
                service: 'luna://com.webos.service.config',
                method: 'getConfigs',
                parameters: {
                  configNames: [
                    'tv.model.modelname',
                    'tv.nyx.platformVersion',
                    'tv.nyx.firmwareVersion',
                    'tv.hw.panelResolution',
                    'tv.hw.displayType',
                    'tv.hw.ddrSize',
                    'tv.model.supportHDR',
                    'tv.config.supportDolbyHDRContents',
                    'tv.config.supportDolbyTVATMOS',
                    'tv.model.supportTemp8K',
                  ],
                },
                onComplete: function (n) {
                  if (
                    n.configs &&
                    ((j.modelName = n.configs['tv.model.modelname'] || j.modelName),
                    (j.sdkVersion = n.configs['tv.nyx.platformVersion'] || j.sdkVersion),
                    (j.uhd = 'UD' === n.configs['tv.hw.panelResolution'] || '8K' === n.configs['tv.hw.panelResolution']),
                    (j.uhd8K = '8K' === n.configs['tv.hw.panelResolution'] || !0 === n.configs['tv.model.supportTemp8K']),
                    (j.oled = 'OLED' === n.configs['tv.hw.displayType']),
                    (j.ddrSize = n.configs['tv.hw.ddrSize']),
                    (j.hdr10 = !0 === n.configs['tv.model.supportHDR']),
                    (j.dolbyVision = !0 === n.configs['tv.config.supportDolbyHDRContents']),
                    (j.dolbyAtmos = !0 === n.configs['tv.config.supportDolbyTVATMOS']),
                    (n.configs['tv.nyx.firmwareVersion'] && '0.0.0' !== n.configs['tv.nyx.firmwareVersion']) ||
                      (n.configs['tv.nyx.firmwareVersion'] = n.configs['tv.nyx.platformVersion']),
                    n.configs['tv.nyx.firmwareVersion'])
                  ) {
                    j.version = n.configs['tv.nyx.firmwareVersion'];
                    for (var r = j.version.split('.'), t = ['versionMajor', 'versionMinor', 'versionDot'], o = 0; o < t.length; o += 1)
                      try {
                        j[t[o]] = parseInt(r[o], 10);
                      } catch (e) {
                        j[t[o]] = r[o];
                      }
                  }
                  !n.returnValue || n.missingConfigs
                    ? n.missingConfigs && 1 === n.missingConfigs.length && 'tv.model.supportTemp8K' === n.missingConfigs[0]
                      ? e(j)
                      : new m().send({
                          service: 'luna://com.webos.service.tv.systemproperty',
                          method: 'getSystemInfo',
                          parameters: { keys: ['firmwareVersion', 'modelName', 'sdkVersion', 'UHD', 'OLED', 'ddrSize'] },
                          onComplete: function (n) {
                            if (
                              ((j.modelName = n.modelName || j.modelName),
                              (j.sdkVersion = n.sdkVersion || j.sdkVersion),
                              (j.uhd = n.UHD ? 'true' === n.UHD : j.uhd),
                              (j.oled = n.OLED ? 'true' === n.OLED : j.oled),
                              (j.ddrSize = n.ddrSize || j.ddrSize),
                              (n.firmwareVersion && '0.0.0' !== n.firmwareVersion) || (n.firmwareVersion = n.sdkVersion),
                              n.firmwareVersion)
                            ) {
                              j.version = n.firmwareVersion;
                              for (
                                var r = j.version.split('.'), t = ['versionMajor', 'versionMinor', 'versionDot'], o = 0;
                                o < t.length;
                                o += 1
                              )
                                try {
                                  j[t[o]] = parseInt(r[o], 10);
                                } catch (e) {
                                  j[t[o]] = r[o];
                                }
                            }
                            e(j);
                          },
                        })
                    : e(j);
                },
              }));
        } else e(j);
      },
      x = {
        isShowing: function () {
          return PalmSystem && PalmSystem.isKeyboardVisible;
        },
      },
      k = function () {
        var e = {};
        if (window.PalmSystem) {
          if (window.PalmSystem.country) {
            var n = JSON.parse(window.PalmSystem.country);
            (e.country = n.country), (e.smartServiceCountry = n.smartServiceCountry);
          }
          window.PalmSystem.timeZone && (e.timezone = window.PalmSystem.timeZone);
        }
        return e;
      },
      D = r(0).version;
  },
]);
