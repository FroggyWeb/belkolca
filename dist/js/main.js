"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function n(i) {
    if (t[i]) return t[i].exports;
    var o = t[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, i) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: i
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) {
      n.d(i, o, function (t) {
        return e[t];
      }.bind(null, o));
    }
    return i;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "/", n(n.s = 7);
}([function (e, t, n) {
  var i;
  /*!
   * jQuery JavaScript Library v3.5.1
   * https://jquery.com/
   *
   * Includes Sizzle.js
   * https://sizzlejs.com/
   *
   * Copyright JS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2020-05-04T22:49Z
   */

  !function (t, n) {
    "use strict";

    "object" == _typeof(e.exports) ? e.exports = t.document ? n(t, !0) : function (e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");
      return n(e);
    } : n(t);
  }("undefined" != typeof window ? window : this, function (n, o) {
    "use strict";

    var s = [],
        r = Object.getPrototypeOf,
        a = s.slice,
        l = s.flat ? function (e) {
      return s.flat.call(e);
    } : function (e) {
      return s.concat.apply([], e);
    },
        c = s.push,
        d = s.indexOf,
        u = {},
        p = u.toString,
        f = u.hasOwnProperty,
        h = f.toString,
        g = h.call(Object),
        v = {},
        m = function m(e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
        y = function y(e) {
      return null != e && e === e.window;
    },
        b = n.document,
        x = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };

    function w(e, t, n) {
      var i,
          o,
          s = (n = n || b).createElement("script");
      if (s.text = e, t) for (i in x) {
        (o = t[i] || t.getAttribute && t.getAttribute(i)) && s.setAttribute(i, o);
      }
      n.head.appendChild(s).parentNode.removeChild(s);
    }

    function T(e) {
      return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? u[p.call(e)] || "object" : _typeof(e);
    }

    var S = function S(e, t) {
      return new S.fn.init(e, t);
    };

    function C(e) {
      var t = !!e && "length" in e && e.length,
          n = T(e);
      return !m(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }

    S.fn = S.prototype = {
      jquery: "3.5.1",
      constructor: S,
      length: 0,
      toArray: function toArray() {
        return a.call(this);
      },
      get: function get(e) {
        return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e];
      },
      pushStack: function pushStack(e) {
        var t = S.merge(this.constructor(), e);
        return t.prevObject = this, t;
      },
      each: function each(e) {
        return S.each(this, e);
      },
      map: function map(e) {
        return this.pushStack(S.map(this, function (t, n) {
          return e.call(t, n, t);
        }));
      },
      slice: function slice() {
        return this.pushStack(a.apply(this, arguments));
      },
      first: function first() {
        return this.eq(0);
      },
      last: function last() {
        return this.eq(-1);
      },
      even: function even() {
        return this.pushStack(S.grep(this, function (e, t) {
          return (t + 1) % 2;
        }));
      },
      odd: function odd() {
        return this.pushStack(S.grep(this, function (e, t) {
          return t % 2;
        }));
      },
      eq: function eq(e) {
        var t = this.length,
            n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function end() {
        return this.prevObject || this.constructor();
      },
      push: c,
      sort: s.sort,
      splice: s.splice
    }, S.extend = S.fn.extend = function () {
      var e,
          t,
          n,
          i,
          o,
          s,
          r = arguments[0] || {},
          a = 1,
          l = arguments.length,
          c = !1;

      for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == _typeof(r) || m(r) || (r = {}), a === l && (r = this, a--); a < l; a++) {
        if (null != (e = arguments[a])) for (t in e) {
          i = e[t], "__proto__" !== t && r !== i && (c && i && (S.isPlainObject(i) || (o = Array.isArray(i))) ? (n = r[t], s = o && !Array.isArray(n) ? [] : o || S.isPlainObject(n) ? n : {}, o = !1, r[t] = S.extend(c, s, i)) : void 0 !== i && (r[t] = i));
        }
      }

      return r;
    }, S.extend({
      expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function error(e) {
        throw new Error(e);
      },
      noop: function noop() {},
      isPlainObject: function isPlainObject(e) {
        var t, n;
        return !(!e || "[object Object]" !== p.call(e)) && (!(t = r(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && h.call(n) === g);
      },
      isEmptyObject: function isEmptyObject(e) {
        var t;

        for (t in e) {
          return !1;
        }

        return !0;
      },
      globalEval: function globalEval(e, t, n) {
        w(e, {
          nonce: t && t.nonce
        }, n);
      },
      each: function each(e, t) {
        var n,
            i = 0;
        if (C(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) {
          ;
        } else for (i in e) {
          if (!1 === t.call(e[i], i, e[i])) break;
        }
        return e;
      },
      makeArray: function makeArray(e, t) {
        var n = t || [];
        return null != e && (C(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n;
      },
      inArray: function inArray(e, t, n) {
        return null == t ? -1 : d.call(t, e, n);
      },
      merge: function merge(e, t) {
        for (var n = +t.length, i = 0, o = e.length; i < n; i++) {
          e[o++] = t[i];
        }

        return e.length = o, e;
      },
      grep: function grep(e, t, n) {
        for (var i = [], o = 0, s = e.length, r = !n; o < s; o++) {
          !t(e[o], o) !== r && i.push(e[o]);
        }

        return i;
      },
      map: function map(e, t, n) {
        var i,
            o,
            s = 0,
            r = [];
        if (C(e)) for (i = e.length; s < i; s++) {
          null != (o = t(e[s], s, n)) && r.push(o);
        } else for (s in e) {
          null != (o = t(e[s], s, n)) && r.push(o);
        }
        return l(r);
      },
      guid: 1,
      support: v
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = s[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
      u["[object " + t + "]"] = t.toLowerCase();
    });

    var k =
    /*!
     * Sizzle CSS Selector Engine v2.3.5
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://js.foundation/
     *
     * Date: 2020-03-14
     */
    function (e) {
      var t,
          n,
          i,
          o,
          s,
          r,
          a,
          l,
          c,
          d,
          u,
          p,
          f,
          h,
          g,
          v,
          m,
          y,
          b,
          x = "sizzle" + 1 * new Date(),
          w = e.document,
          T = 0,
          S = 0,
          C = le(),
          k = le(),
          $ = le(),
          A = le(),
          E = function E(e, t) {
        return e === t && (u = !0), 0;
      },
          P = {}.hasOwnProperty,
          L = [],
          O = L.pop,
          M = L.push,
          D = L.push,
          H = L.slice,
          j = function j(e, t) {
        for (var n = 0, i = e.length; n < i; n++) {
          if (e[n] === t) return n;
        }

        return -1;
      },
          N = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          I = "[\\x20\\t\\r\\n\\f]",
          q = "(?:\\\\[\\da-fA-F]{1,6}" + I + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
          z = "\\[" + I + "*(" + q + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + I + "*\\]",
          F = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + z + ")*)|.*)\\)|)",
          R = new RegExp(I + "+", "g"),
          B = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
          W = new RegExp("^" + I + "*," + I + "*"),
          _ = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
          X = new RegExp(I + "|>"),
          Y = new RegExp(F),
          U = new RegExp("^" + q + "$"),
          V = {
        ID: new RegExp("^#(" + q + ")"),
        CLASS: new RegExp("^\\.(" + q + ")"),
        TAG: new RegExp("^(" + q + "|[*])"),
        ATTR: new RegExp("^" + z),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + N + ")$", "i"),
        needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
      },
          G = /HTML$/i,
          Z = /^(?:input|select|textarea|button)$/i,
          K = /^h\d$/i,
          Q = /^[^{]+\{\s*\[native \w/,
          J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          ee = /[+~]/,
          te = new RegExp("\\\\[\\da-fA-F]{1,6}" + I + "?|\\\\([^\\r\\n\\f])", "g"),
          ne = function ne(e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
      },
          ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          oe = function oe(e, t) {
        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
      },
          se = function se() {
        p();
      },
          re = xe(function (e) {
        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
      }, {
        dir: "parentNode",
        next: "legend"
      });

      try {
        D.apply(L = H.call(w.childNodes), w.childNodes), L[w.childNodes.length].nodeType;
      } catch (e) {
        D = {
          apply: L.length ? function (e, t) {
            M.apply(e, H.call(t));
          } : function (e, t) {
            for (var n = e.length, i = 0; e[n++] = t[i++];) {
              ;
            }

            e.length = n - 1;
          }
        };
      }

      function ae(e, t, i, o) {
        var s,
            a,
            c,
            d,
            u,
            h,
            m,
            y = t && t.ownerDocument,
            w = t ? t.nodeType : 9;
        if (i = i || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return i;

        if (!o && (p(t), t = t || f, g)) {
          if (11 !== w && (u = J.exec(e))) if (s = u[1]) {
            if (9 === w) {
              if (!(c = t.getElementById(s))) return i;
              if (c.id === s) return i.push(c), i;
            } else if (y && (c = y.getElementById(s)) && b(t, c) && c.id === s) return i.push(c), i;
          } else {
            if (u[2]) return D.apply(i, t.getElementsByTagName(e)), i;
            if ((s = u[3]) && n.getElementsByClassName && t.getElementsByClassName) return D.apply(i, t.getElementsByClassName(s)), i;
          }

          if (n.qsa && !A[e + " "] && (!v || !v.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
            if (m = e, y = t, 1 === w && (X.test(e) || _.test(e))) {
              for ((y = ee.test(e) && me(t.parentNode) || t) === t && n.scope || ((d = t.getAttribute("id")) ? d = d.replace(ie, oe) : t.setAttribute("id", d = x)), a = (h = r(e)).length; a--;) {
                h[a] = (d ? "#" + d : ":scope") + " " + be(h[a]);
              }

              m = h.join(",");
            }

            try {
              return D.apply(i, y.querySelectorAll(m)), i;
            } catch (t) {
              A(e, !0);
            } finally {
              d === x && t.removeAttribute("id");
            }
          }
        }

        return l(e.replace(B, "$1"), t, i, o);
      }

      function le() {
        var e = [];
        return function t(n, o) {
          return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = o;
        };
      }

      function ce(e) {
        return e[x] = !0, e;
      }

      function de(e) {
        var t = f.createElement("fieldset");

        try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), t = null;
        }
      }

      function ue(e, t) {
        for (var n = e.split("|"), o = n.length; o--;) {
          i.attrHandle[n[o]] = t;
        }
      }

      function pe(e, t) {
        var n = t && e,
            i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
        if (i) return i;
        if (n) for (; n = n.nextSibling;) {
          if (n === t) return -1;
        }
        return e ? 1 : -1;
      }

      function fe(e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e;
        };
      }

      function he(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e;
        };
      }

      function ge(e) {
        return function (t) {
          return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && re(t) === e : t.disabled === e : "label" in t && t.disabled === e;
        };
      }

      function ve(e) {
        return ce(function (t) {
          return t = +t, ce(function (n, i) {
            for (var o, s = e([], n.length, t), r = s.length; r--;) {
              n[o = s[r]] && (n[o] = !(i[o] = n[o]));
            }
          });
        });
      }

      function me(e) {
        return e && void 0 !== e.getElementsByTagName && e;
      }

      for (t in n = ae.support = {}, s = ae.isXML = function (e) {
        var t = e.namespaceURI,
            n = (e.ownerDocument || e).documentElement;
        return !G.test(t || n && n.nodeName || "HTML");
      }, p = ae.setDocument = function (e) {
        var t,
            o,
            r = e ? e.ownerDocument || e : w;
        return r != f && 9 === r.nodeType && r.documentElement ? (h = (f = r).documentElement, g = !s(f), w != f && (o = f.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", se, !1) : o.attachEvent && o.attachEvent("onunload", se)), n.scope = de(function (e) {
          return h.appendChild(e).appendChild(f.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
        }), n.attributes = de(function (e) {
          return e.className = "i", !e.getAttribute("className");
        }), n.getElementsByTagName = de(function (e) {
          return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length;
        }), n.getElementsByClassName = Q.test(f.getElementsByClassName), n.getById = de(function (e) {
          return h.appendChild(e).id = x, !f.getElementsByName || !f.getElementsByName(x).length;
        }), n.getById ? (i.filter.ID = function (e) {
          var t = e.replace(te, ne);
          return function (e) {
            return e.getAttribute("id") === t;
          };
        }, i.find.ID = function (e, t) {
          if (void 0 !== t.getElementById && g) {
            var n = t.getElementById(e);
            return n ? [n] : [];
          }
        }) : (i.filter.ID = function (e) {
          var t = e.replace(te, ne);
          return function (e) {
            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
            return n && n.value === t;
          };
        }, i.find.ID = function (e, t) {
          if (void 0 !== t.getElementById && g) {
            var n,
                i,
                o,
                s = t.getElementById(e);

            if (s) {
              if ((n = s.getAttributeNode("id")) && n.value === e) return [s];

              for (o = t.getElementsByName(e), i = 0; s = o[i++];) {
                if ((n = s.getAttributeNode("id")) && n.value === e) return [s];
              }
            }

            return [];
          }
        }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
          return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
        } : function (e, t) {
          var n,
              i = [],
              o = 0,
              s = t.getElementsByTagName(e);

          if ("*" === e) {
            for (; n = s[o++];) {
              1 === n.nodeType && i.push(n);
            }

            return i;
          }

          return s;
        }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
          if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
        }, m = [], v = [], (n.qsa = Q.test(f.querySelectorAll)) && (de(function (e) {
          var t;
          h.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + I + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + I + "*(?:value|" + N + ")"), e.querySelectorAll("[id~=" + x + "-]").length || v.push("~="), (t = f.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + I + "*name" + I + "*=" + I + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]");
        }), de(function (e) {
          e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
          var t = f.createElement("input");
          t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + I + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
        })), (n.matchesSelector = Q.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && de(function (e) {
          n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), m.push("!=", F);
        }), v = v.length && new RegExp(v.join("|")), m = m.length && new RegExp(m.join("|")), t = Q.test(h.compareDocumentPosition), b = t || Q.test(h.contains) ? function (e, t) {
          var n = 9 === e.nodeType ? e.documentElement : e,
              i = t && t.parentNode;
          return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
        } : function (e, t) {
          if (t) for (; t = t.parentNode;) {
            if (t === e) return !0;
          }
          return !1;
        }, E = t ? function (e, t) {
          if (e === t) return u = !0, 0;
          var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
          return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e == f || e.ownerDocument == w && b(w, e) ? -1 : t == f || t.ownerDocument == w && b(w, t) ? 1 : d ? j(d, e) - j(d, t) : 0 : 4 & i ? -1 : 1);
        } : function (e, t) {
          if (e === t) return u = !0, 0;
          var n,
              i = 0,
              o = e.parentNode,
              s = t.parentNode,
              r = [e],
              a = [t];
          if (!o || !s) return e == f ? -1 : t == f ? 1 : o ? -1 : s ? 1 : d ? j(d, e) - j(d, t) : 0;
          if (o === s) return pe(e, t);

          for (n = e; n = n.parentNode;) {
            r.unshift(n);
          }

          for (n = t; n = n.parentNode;) {
            a.unshift(n);
          }

          for (; r[i] === a[i];) {
            i++;
          }

          return i ? pe(r[i], a[i]) : r[i] == w ? -1 : a[i] == w ? 1 : 0;
        }, f) : f;
      }, ae.matches = function (e, t) {
        return ae(e, null, null, t);
      }, ae.matchesSelector = function (e, t) {
        if (p(e), n.matchesSelector && g && !A[t + " "] && (!m || !m.test(t)) && (!v || !v.test(t))) try {
          var i = y.call(e, t);
          if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i;
        } catch (e) {
          A(t, !0);
        }
        return ae(t, f, null, [e]).length > 0;
      }, ae.contains = function (e, t) {
        return (e.ownerDocument || e) != f && p(e), b(e, t);
      }, ae.attr = function (e, t) {
        (e.ownerDocument || e) != f && p(e);
        var o = i.attrHandle[t.toLowerCase()],
            s = o && P.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
        return void 0 !== s ? s : n.attributes || !g ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null;
      }, ae.escape = function (e) {
        return (e + "").replace(ie, oe);
      }, ae.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }, ae.uniqueSort = function (e) {
        var t,
            i = [],
            o = 0,
            s = 0;

        if (u = !n.detectDuplicates, d = !n.sortStable && e.slice(0), e.sort(E), u) {
          for (; t = e[s++];) {
            t === e[s] && (o = i.push(s));
          }

          for (; o--;) {
            e.splice(i[o], 1);
          }
        }

        return d = null, e;
      }, o = ae.getText = function (e) {
        var t,
            n = "",
            i = 0,
            s = e.nodeType;

        if (s) {
          if (1 === s || 9 === s || 11 === s) {
            if ("string" == typeof e.textContent) return e.textContent;

            for (e = e.firstChild; e; e = e.nextSibling) {
              n += o(e);
            }
          } else if (3 === s || 4 === s) return e.nodeValue;
        } else for (; t = e[i++];) {
          n += o(t);
        }

        return n;
      }, (i = ae.selectors = {
        cacheLength: 50,
        createPseudo: ce,
        match: V,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function ATTR(e) {
            return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
          },
          CHILD: function CHILD(e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e;
          },
          PSEUDO: function PSEUDO(e) {
            var t,
                n = !e[6] && e[2];
            return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Y.test(n) && (t = r(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
          }
        },
        filter: {
          TAG: function TAG(e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e ? function () {
              return !0;
            } : function (e) {
              return e.nodeName && e.nodeName.toLowerCase() === t;
            };
          },
          CLASS: function CLASS(e) {
            var t = C[e + " "];
            return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && C(e, function (e) {
              return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
            });
          },
          ATTR: function ATTR(e, t, n) {
            return function (i) {
              var o = ae.attr(i, e);
              return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(R, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"));
            };
          },
          CHILD: function CHILD(e, t, n, i, o) {
            var s = "nth" !== e.slice(0, 3),
                r = "last" !== e.slice(-4),
                a = "of-type" === t;
            return 1 === i && 0 === o ? function (e) {
              return !!e.parentNode;
            } : function (t, n, l) {
              var c,
                  d,
                  u,
                  p,
                  f,
                  h,
                  g = s !== r ? "nextSibling" : "previousSibling",
                  v = t.parentNode,
                  m = a && t.nodeName.toLowerCase(),
                  y = !l && !a,
                  b = !1;

              if (v) {
                if (s) {
                  for (; g;) {
                    for (p = t; p = p[g];) {
                      if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                    }

                    h = g = "only" === e && !h && "nextSibling";
                  }

                  return !0;
                }

                if (h = [r ? v.firstChild : v.lastChild], r && y) {
                  for (b = (f = (c = (d = (u = (p = v)[x] || (p[x] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === T && c[1]) && c[2], p = f && v.childNodes[f]; p = ++f && p && p[g] || (b = f = 0) || h.pop();) {
                    if (1 === p.nodeType && ++b && p === t) {
                      d[e] = [T, f, b];
                      break;
                    }
                  }
                } else if (y && (b = f = (c = (d = (u = (p = t)[x] || (p[x] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === T && c[1]), !1 === b) for (; (p = ++f && p && p[g] || (b = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++b || (y && ((d = (u = p[x] || (p[x] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] = [T, b]), p !== t));) {
                  ;
                }

                return (b -= o) === i || b % i == 0 && b / i >= 0;
              }
            };
          },
          PSEUDO: function PSEUDO(e, t) {
            var n,
                o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
            return o[x] ? o(t) : o.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ce(function (e, n) {
              for (var i, s = o(e, t), r = s.length; r--;) {
                e[i = j(e, s[r])] = !(n[i] = s[r]);
              }
            }) : function (e) {
              return o(e, 0, n);
            }) : o;
          }
        },
        pseudos: {
          not: ce(function (e) {
            var t = [],
                n = [],
                i = a(e.replace(B, "$1"));
            return i[x] ? ce(function (e, t, n, o) {
              for (var s, r = i(e, null, o, []), a = e.length; a--;) {
                (s = r[a]) && (e[a] = !(t[a] = s));
              }
            }) : function (e, o, s) {
              return t[0] = e, i(t, null, s, n), t[0] = null, !n.pop();
            };
          }),
          has: ce(function (e) {
            return function (t) {
              return ae(e, t).length > 0;
            };
          }),
          contains: ce(function (e) {
            return e = e.replace(te, ne), function (t) {
              return (t.textContent || o(t)).indexOf(e) > -1;
            };
          }),
          lang: ce(function (e) {
            return U.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), function (t) {
              var n;

              do {
                if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
              } while ((t = t.parentNode) && 1 === t.nodeType);

              return !1;
            };
          }),
          target: function target(t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function root(e) {
            return e === h;
          },
          focus: function focus(e) {
            return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function checked(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && !!e.checked || "option" === t && !!e.selected;
          },
          selected: function selected(e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
          },
          empty: function empty(e) {
            for (e = e.firstChild; e; e = e.nextSibling) {
              if (e.nodeType < 6) return !1;
            }

            return !0;
          },
          parent: function parent(e) {
            return !i.pseudos.empty(e);
          },
          header: function header(e) {
            return K.test(e.nodeName);
          },
          input: function input(e) {
            return Z.test(e.nodeName);
          },
          button: function button(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t;
          },
          text: function text(e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
          },
          first: ve(function () {
            return [0];
          }),
          last: ve(function (e, t) {
            return [t - 1];
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) {
              e.push(n);
            }

            return e;
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) {
              e.push(n);
            }

            return e;
          }),
          lt: ve(function (e, t, n) {
            for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0;) {
              e.push(i);
            }

            return e;
          }),
          gt: ve(function (e, t, n) {
            for (var i = n < 0 ? n + t : n; ++i < t;) {
              e.push(i);
            }

            return e;
          })
        }
      }).pseudos.nth = i.pseudos.eq, {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) {
        i.pseudos[t] = fe(t);
      }

      for (t in {
        submit: !0,
        reset: !0
      }) {
        i.pseudos[t] = he(t);
      }

      function ye() {}

      function be(e) {
        for (var t = 0, n = e.length, i = ""; t < n; t++) {
          i += e[t].value;
        }

        return i;
      }

      function xe(e, t, n) {
        var i = t.dir,
            o = t.next,
            s = o || i,
            r = n && "parentNode" === s,
            a = S++;
        return t.first ? function (t, n, o) {
          for (; t = t[i];) {
            if (1 === t.nodeType || r) return e(t, n, o);
          }

          return !1;
        } : function (t, n, l) {
          var c,
              d,
              u,
              p = [T, a];

          if (l) {
            for (; t = t[i];) {
              if ((1 === t.nodeType || r) && e(t, n, l)) return !0;
            }
          } else for (; t = t[i];) {
            if (1 === t.nodeType || r) if (d = (u = t[x] || (t[x] = {}))[t.uniqueID] || (u[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t;else {
              if ((c = d[s]) && c[0] === T && c[1] === a) return p[2] = c[2];
              if (d[s] = p, p[2] = e(t, n, l)) return !0;
            }
          }

          return !1;
        };
      }

      function we(e) {
        return e.length > 1 ? function (t, n, i) {
          for (var o = e.length; o--;) {
            if (!e[o](t, n, i)) return !1;
          }

          return !0;
        } : e[0];
      }

      function Te(e, t, n, i, o) {
        for (var s, r = [], a = 0, l = e.length, c = null != t; a < l; a++) {
          (s = e[a]) && (n && !n(s, i, o) || (r.push(s), c && t.push(a)));
        }

        return r;
      }

      function Se(e, t, n, i, o, s) {
        return i && !i[x] && (i = Se(i)), o && !o[x] && (o = Se(o, s)), ce(function (s, r, a, l) {
          var c,
              d,
              u,
              p = [],
              f = [],
              h = r.length,
              g = s || function (e, t, n) {
            for (var i = 0, o = t.length; i < o; i++) {
              ae(e, t[i], n);
            }

            return n;
          }(t || "*", a.nodeType ? [a] : a, []),
              v = !e || !s && t ? g : Te(g, p, e, a, l),
              m = n ? o || (s ? e : h || i) ? [] : r : v;

          if (n && n(v, m, a, l), i) for (c = Te(m, f), i(c, [], a, l), d = c.length; d--;) {
            (u = c[d]) && (m[f[d]] = !(v[f[d]] = u));
          }

          if (s) {
            if (o || e) {
              if (o) {
                for (c = [], d = m.length; d--;) {
                  (u = m[d]) && c.push(v[d] = u);
                }

                o(null, m = [], c, l);
              }

              for (d = m.length; d--;) {
                (u = m[d]) && (c = o ? j(s, u) : p[d]) > -1 && (s[c] = !(r[c] = u));
              }
            }
          } else m = Te(m === r ? m.splice(h, m.length) : m), o ? o(null, r, m, l) : D.apply(r, m);
        });
      }

      function Ce(e) {
        for (var t, n, o, s = e.length, r = i.relative[e[0].type], a = r || i.relative[" "], l = r ? 1 : 0, d = xe(function (e) {
          return e === t;
        }, a, !0), u = xe(function (e) {
          return j(t, e) > -1;
        }, a, !0), p = [function (e, n, i) {
          var o = !r && (i || n !== c) || ((t = n).nodeType ? d(e, n, i) : u(e, n, i));
          return t = null, o;
        }]; l < s; l++) {
          if (n = i.relative[e[l].type]) p = [xe(we(p), n)];else {
            if ((n = i.filter[e[l].type].apply(null, e[l].matches))[x]) {
              for (o = ++l; o < s && !i.relative[e[o].type]; o++) {
                ;
              }

              return Se(l > 1 && we(p), l > 1 && be(e.slice(0, l - 1).concat({
                value: " " === e[l - 2].type ? "*" : ""
              })).replace(B, "$1"), n, l < o && Ce(e.slice(l, o)), o < s && Ce(e = e.slice(o)), o < s && be(e));
            }

            p.push(n);
          }
        }

        return we(p);
      }

      return ye.prototype = i.filters = i.pseudos, i.setFilters = new ye(), r = ae.tokenize = function (e, t) {
        var n,
            o,
            s,
            r,
            a,
            l,
            c,
            d = k[e + " "];
        if (d) return t ? 0 : d.slice(0);

        for (a = e, l = [], c = i.preFilter; a;) {
          for (r in n && !(o = W.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(s = [])), n = !1, (o = _.exec(a)) && (n = o.shift(), s.push({
            value: n,
            type: o[0].replace(B, " ")
          }), a = a.slice(n.length)), i.filter) {
            !(o = V[r].exec(a)) || c[r] && !(o = c[r](o)) || (n = o.shift(), s.push({
              value: n,
              type: r,
              matches: o
            }), a = a.slice(n.length));
          }

          if (!n) break;
        }

        return t ? a.length : a ? ae.error(e) : k(e, l).slice(0);
      }, a = ae.compile = function (e, t) {
        var n,
            o = [],
            s = [],
            a = $[e + " "];

        if (!a) {
          for (t || (t = r(e)), n = t.length; n--;) {
            (a = Ce(t[n]))[x] ? o.push(a) : s.push(a);
          }

          (a = $(e, function (e, t) {
            var n = t.length > 0,
                o = e.length > 0,
                s = function s(_s, r, a, l, d) {
              var u,
                  h,
                  v,
                  m = 0,
                  y = "0",
                  b = _s && [],
                  x = [],
                  w = c,
                  S = _s || o && i.find.TAG("*", d),
                  C = T += null == w ? 1 : Math.random() || .1,
                  k = S.length;

              for (d && (c = r == f || r || d); y !== k && null != (u = S[y]); y++) {
                if (o && u) {
                  for (h = 0, r || u.ownerDocument == f || (p(u), a = !g); v = e[h++];) {
                    if (v(u, r || f, a)) {
                      l.push(u);
                      break;
                    }
                  }

                  d && (T = C);
                }

                n && ((u = !v && u) && m--, _s && b.push(u));
              }

              if (m += y, n && y !== m) {
                for (h = 0; v = t[h++];) {
                  v(b, x, r, a);
                }

                if (_s) {
                  if (m > 0) for (; y--;) {
                    b[y] || x[y] || (x[y] = O.call(l));
                  }
                  x = Te(x);
                }

                D.apply(l, x), d && !_s && x.length > 0 && m + t.length > 1 && ae.uniqueSort(l);
              }

              return d && (T = C, c = w), b;
            };

            return n ? ce(s) : s;
          }(s, o))).selector = e;
        }

        return a;
      }, l = ae.select = function (e, t, n, o) {
        var s,
            l,
            c,
            d,
            u,
            p = "function" == typeof e && e,
            f = !o && r(e = p.selector || e);

        if (n = n || [], 1 === f.length) {
          if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
            if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
            p && (t = t.parentNode), e = e.slice(l.shift().value.length);
          }

          for (s = V.needsContext.test(e) ? 0 : l.length; s-- && (c = l[s], !i.relative[d = c.type]);) {
            if ((u = i.find[d]) && (o = u(c.matches[0].replace(te, ne), ee.test(l[0].type) && me(t.parentNode) || t))) {
              if (l.splice(s, 1), !(e = o.length && be(l))) return D.apply(n, o), n;
              break;
            }
          }
        }

        return (p || a(e, f))(o, t, !g, n, !t || ee.test(e) && me(t.parentNode) || t), n;
      }, n.sortStable = x.split("").sort(E).join("") === x, n.detectDuplicates = !!u, p(), n.sortDetached = de(function (e) {
        return 1 & e.compareDocumentPosition(f.createElement("fieldset"));
      }), de(function (e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
      }) || ue("type|href|height|width", function (e, t, n) {
        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
      }), n.attributes && de(function (e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
      }) || ue("value", function (e, t, n) {
        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
      }), de(function (e) {
        return null == e.getAttribute("disabled");
      }) || ue(N, function (e, t, n) {
        var i;
        if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
      }), ae;
    }(n);

    S.find = k, S.expr = k.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = k.uniqueSort, S.text = k.getText, S.isXMLDoc = k.isXML, S.contains = k.contains, S.escapeSelector = k.escape;

    var $ = function $(e, t, n) {
      for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
        if (1 === e.nodeType) {
          if (o && S(e).is(n)) break;
          i.push(e);
        }
      }

      return i;
    },
        A = function A(e, t) {
      for (var n = []; e; e = e.nextSibling) {
        1 === e.nodeType && e !== t && n.push(e);
      }

      return n;
    },
        E = S.expr.match.needsContext;

    function P(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }

    var L = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function O(e, t, n) {
      return m(t) ? S.grep(e, function (e, i) {
        return !!t.call(e, i, e) !== n;
      }) : t.nodeType ? S.grep(e, function (e) {
        return e === t !== n;
      }) : "string" != typeof t ? S.grep(e, function (e) {
        return d.call(t, e) > -1 !== n;
      }) : S.filter(t, e, n);
    }

    S.filter = function (e, t, n) {
      var i = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? S.find.matchesSelector(i, e) ? [i] : [] : S.find.matches(e, S.grep(t, function (e) {
        return 1 === e.nodeType;
      }));
    }, S.fn.extend({
      find: function find(e) {
        var t,
            n,
            i = this.length,
            o = this;
        if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
          for (t = 0; t < i; t++) {
            if (S.contains(o[t], this)) return !0;
          }
        }));

        for (n = this.pushStack([]), t = 0; t < i; t++) {
          S.find(e, o[t], n);
        }

        return i > 1 ? S.uniqueSort(n) : n;
      },
      filter: function filter(e) {
        return this.pushStack(O(this, e || [], !1));
      },
      not: function not(e) {
        return this.pushStack(O(this, e || [], !0));
      },
      is: function is(e) {
        return !!O(this, "string" == typeof e && E.test(e) ? S(e) : e || [], !1).length;
      }
    });
    var M,
        D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function (e, t, n) {
      var i, o;
      if (!e) return this;

      if (n = n || M, "string" == typeof e) {
        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : D.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

        if (i[1]) {
          if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), L.test(i[1]) && S.isPlainObject(t)) for (i in t) {
            m(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
          }
          return this;
        }

        return (o = b.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
      }

      return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this);
    }).prototype = S.fn, M = S(b);
    var H = /^(?:parents|prev(?:Until|All))/,
        j = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };

    function N(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType;) {
        ;
      }

      return e;
    }

    S.fn.extend({
      has: function has(e) {
        var t = S(e, this),
            n = t.length;
        return this.filter(function () {
          for (var e = 0; e < n; e++) {
            if (S.contains(this, t[e])) return !0;
          }
        });
      },
      closest: function closest(e, t) {
        var n,
            i = 0,
            o = this.length,
            s = [],
            r = "string" != typeof e && S(e);
        if (!E.test(e)) for (; i < o; i++) {
          for (n = this[i]; n && n !== t; n = n.parentNode) {
            if (n.nodeType < 11 && (r ? r.index(n) > -1 : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
              s.push(n);
              break;
            }
          }
        }
        return this.pushStack(s.length > 1 ? S.uniqueSort(s) : s);
      },
      index: function index(e) {
        return e ? "string" == typeof e ? d.call(S(e), this[0]) : d.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      },
      add: function add(e, t) {
        return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
      },
      addBack: function addBack(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
      }
    }), S.each({
      parent: function parent(e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null;
      },
      parents: function parents(e) {
        return $(e, "parentNode");
      },
      parentsUntil: function parentsUntil(e, t, n) {
        return $(e, "parentNode", n);
      },
      next: function next(e) {
        return N(e, "nextSibling");
      },
      prev: function prev(e) {
        return N(e, "previousSibling");
      },
      nextAll: function nextAll(e) {
        return $(e, "nextSibling");
      },
      prevAll: function prevAll(e) {
        return $(e, "previousSibling");
      },
      nextUntil: function nextUntil(e, t, n) {
        return $(e, "nextSibling", n);
      },
      prevUntil: function prevUntil(e, t, n) {
        return $(e, "previousSibling", n);
      },
      siblings: function siblings(e) {
        return A((e.parentNode || {}).firstChild, e);
      },
      children: function children(e) {
        return A(e.firstChild);
      },
      contents: function contents(e) {
        return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (P(e, "template") && (e = e.content || e), S.merge([], e.childNodes));
      }
    }, function (e, t) {
      S.fn[e] = function (n, i) {
        var o = S.map(this, t, n);
        return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = S.filter(i, o)), this.length > 1 && (j[e] || S.uniqueSort(o), H.test(e) && o.reverse()), this.pushStack(o);
      };
    });
    var I = /[^\x20\t\r\n\f]+/g;

    function q(e) {
      return e;
    }

    function z(e) {
      throw e;
    }

    function F(e, t, n, i) {
      var o;

      try {
        e && m(o = e.promise) ? o.call(e).done(t).fail(n) : e && m(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i));
      } catch (e) {
        n.apply(void 0, [e]);
      }
    }

    S.Callbacks = function (e) {
      e = "string" == typeof e ? function (e) {
        var t = {};
        return S.each(e.match(I) || [], function (e, n) {
          t[n] = !0;
        }), t;
      }(e) : S.extend({}, e);

      var t,
          n,
          i,
          o,
          s = [],
          r = [],
          a = -1,
          l = function l() {
        for (o = o || e.once, i = t = !0; r.length; a = -1) {
          for (n = r.shift(); ++a < s.length;) {
            !1 === s[a].apply(n[0], n[1]) && e.stopOnFalse && (a = s.length, n = !1);
          }
        }

        e.memory || (n = !1), t = !1, o && (s = n ? [] : "");
      },
          c = {
        add: function add() {
          return s && (n && !t && (a = s.length - 1, r.push(n)), function t(n) {
            S.each(n, function (n, i) {
              m(i) ? e.unique && c.has(i) || s.push(i) : i && i.length && "string" !== T(i) && t(i);
            });
          }(arguments), n && !t && l()), this;
        },
        remove: function remove() {
          return S.each(arguments, function (e, t) {
            for (var n; (n = S.inArray(t, s, n)) > -1;) {
              s.splice(n, 1), n <= a && a--;
            }
          }), this;
        },
        has: function has(e) {
          return e ? S.inArray(e, s) > -1 : s.length > 0;
        },
        empty: function empty() {
          return s && (s = []), this;
        },
        disable: function disable() {
          return o = r = [], s = n = "", this;
        },
        disabled: function disabled() {
          return !s;
        },
        lock: function lock() {
          return o = r = [], n || t || (s = n = ""), this;
        },
        locked: function locked() {
          return !!o;
        },
        fireWith: function fireWith(e, n) {
          return o || (n = [e, (n = n || []).slice ? n.slice() : n], r.push(n), t || l()), this;
        },
        fire: function fire() {
          return c.fireWith(this, arguments), this;
        },
        fired: function fired() {
          return !!i;
        }
      };

      return c;
    }, S.extend({
      Deferred: function Deferred(e) {
        var t = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]],
            i = "pending",
            o = {
          state: function state() {
            return i;
          },
          always: function always() {
            return s.done(arguments).fail(arguments), this;
          },
          "catch": function _catch(e) {
            return o.then(null, e);
          },
          pipe: function pipe() {
            var e = arguments;
            return S.Deferred(function (n) {
              S.each(t, function (t, i) {
                var o = m(e[i[4]]) && e[i[4]];
                s[i[1]](function () {
                  var e = o && o.apply(this, arguments);
                  e && m(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, o ? [e] : arguments);
                });
              }), e = null;
            }).promise();
          },
          then: function then(e, i, o) {
            var s = 0;

            function r(e, t, i, o) {
              return function () {
                var a = this,
                    l = arguments,
                    c = function c() {
                  var n, c;

                  if (!(e < s)) {
                    if ((n = i.apply(a, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                    c = n && ("object" == _typeof(n) || "function" == typeof n) && n.then, m(c) ? o ? c.call(n, r(s, t, q, o), r(s, t, z, o)) : (s++, c.call(n, r(s, t, q, o), r(s, t, z, o), r(s, t, q, t.notifyWith))) : (i !== q && (a = void 0, l = [n]), (o || t.resolveWith)(a, l));
                  }
                },
                    d = o ? c : function () {
                  try {
                    c();
                  } catch (n) {
                    S.Deferred.exceptionHook && S.Deferred.exceptionHook(n, d.stackTrace), e + 1 >= s && (i !== z && (a = void 0, l = [n]), t.rejectWith(a, l));
                  }
                };

                e ? d() : (S.Deferred.getStackHook && (d.stackTrace = S.Deferred.getStackHook()), n.setTimeout(d));
              };
            }

            return S.Deferred(function (n) {
              t[0][3].add(r(0, n, m(o) ? o : q, n.notifyWith)), t[1][3].add(r(0, n, m(e) ? e : q)), t[2][3].add(r(0, n, m(i) ? i : z));
            }).promise();
          },
          promise: function promise(e) {
            return null != e ? S.extend(e, o) : o;
          }
        },
            s = {};
        return S.each(t, function (e, n) {
          var r = n[2],
              a = n[5];
          o[n[1]] = r.add, a && r.add(function () {
            i = a;
          }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), r.add(n[3].fire), s[n[0]] = function () {
            return s[n[0] + "With"](this === s ? void 0 : this, arguments), this;
          }, s[n[0] + "With"] = r.fireWith;
        }), o.promise(s), e && e.call(s, s), s;
      },
      when: function when(e) {
        var t = arguments.length,
            n = t,
            i = Array(n),
            o = a.call(arguments),
            s = S.Deferred(),
            r = function r(e) {
          return function (n) {
            i[e] = this, o[e] = arguments.length > 1 ? a.call(arguments) : n, --t || s.resolveWith(i, o);
          };
        };

        if (t <= 1 && (F(e, s.done(r(n)).resolve, s.reject, !t), "pending" === s.state() || m(o[n] && o[n].then))) return s.then();

        for (; n--;) {
          F(o[n], r(n), s.reject);
        }

        return s.promise();
      }
    });
    var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function (e, t) {
      n.console && n.console.warn && e && R.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }, S.readyException = function (e) {
      n.setTimeout(function () {
        throw e;
      });
    };
    var B = S.Deferred();

    function W() {
      b.removeEventListener("DOMContentLoaded", W), n.removeEventListener("load", W), S.ready();
    }

    S.fn.ready = function (e) {
      return B.then(e)["catch"](function (e) {
        S.readyException(e);
      }), this;
    }, S.extend({
      isReady: !1,
      readyWait: 1,
      ready: function ready(e) {
        (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0, !0 !== e && --S.readyWait > 0 || B.resolveWith(b, [S]));
      }
    }), S.ready.then = B.then, "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? n.setTimeout(S.ready) : (b.addEventListener("DOMContentLoaded", W), n.addEventListener("load", W));

    var _ = function _(e, t, n, i, o, s, r) {
      var a = 0,
          l = e.length,
          c = null == n;
      if ("object" === T(n)) for (a in o = !0, n) {
        _(e, t, a, n[a], !0, s, r);
      } else if (void 0 !== i && (o = !0, m(i) || (r = !0), c && (r ? (t.call(e, i), t = null) : (c = t, t = function t(e, _t2, n) {
        return c.call(S(e), n);
      })), t)) for (; a < l; a++) {
        t(e[a], n, r ? i : i.call(e[a], a, t(e[a], n)));
      }
      return o ? e : c ? t.call(e) : l ? t(e[0], n) : s;
    },
        X = /^-ms-/,
        Y = /-([a-z])/g;

    function U(e, t) {
      return t.toUpperCase();
    }

    function V(e) {
      return e.replace(X, "ms-").replace(Y, U);
    }

    var G = function G(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };

    function Z() {
      this.expando = S.expando + Z.uid++;
    }

    Z.uid = 1, Z.prototype = {
      cache: function cache(e) {
        var t = e[this.expando];
        return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
          value: t,
          configurable: !0
        }))), t;
      },
      set: function set(e, t, n) {
        var i,
            o = this.cache(e);
        if ("string" == typeof t) o[V(t)] = n;else for (i in t) {
          o[V(i)] = t[i];
        }
        return o;
      },
      get: function get(e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
      },
      access: function access(e, t, n) {
        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function remove(e, t) {
        var n,
            i = e[this.expando];

        if (void 0 !== i) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in i ? [t] : t.match(I) || []).length;

            for (; n--;) {
              delete i[t[n]];
            }
          }

          (void 0 === t || S.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
        }
      },
      hasData: function hasData(e) {
        var t = e[this.expando];
        return void 0 !== t && !S.isEmptyObject(t);
      }
    };
    var K = new Z(),
        Q = new Z(),
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;

    function te(e, t, n) {
      var i;
      if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
        try {
          n = function (e) {
            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : J.test(e) ? JSON.parse(e) : e);
          }(n);
        } catch (e) {}

        Q.set(e, t, n);
      } else n = void 0;
      return n;
    }

    S.extend({
      hasData: function hasData(e) {
        return Q.hasData(e) || K.hasData(e);
      },
      data: function data(e, t, n) {
        return Q.access(e, t, n);
      },
      removeData: function removeData(e, t) {
        Q.remove(e, t);
      },
      _data: function _data(e, t, n) {
        return K.access(e, t, n);
      },
      _removeData: function _removeData(e, t) {
        K.remove(e, t);
      }
    }), S.fn.extend({
      data: function data(e, t) {
        var n,
            i,
            o,
            s = this[0],
            r = s && s.attributes;

        if (void 0 === e) {
          if (this.length && (o = Q.get(s), 1 === s.nodeType && !K.get(s, "hasDataAttrs"))) {
            for (n = r.length; n--;) {
              r[n] && 0 === (i = r[n].name).indexOf("data-") && (i = V(i.slice(5)), te(s, i, o[i]));
            }

            K.set(s, "hasDataAttrs", !0);
          }

          return o;
        }

        return "object" == _typeof(e) ? this.each(function () {
          Q.set(this, e);
        }) : _(this, function (t) {
          var n;
          if (s && void 0 === t) return void 0 !== (n = Q.get(s, e)) || void 0 !== (n = te(s, e)) ? n : void 0;
          this.each(function () {
            Q.set(this, e, t);
          });
        }, null, t, arguments.length > 1, null, !0);
      },
      removeData: function removeData(e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      }
    }), S.extend({
      queue: function queue(e, t, n) {
        var i;
        if (e) return t = (t || "fx") + "queue", i = K.get(e, t), n && (!i || Array.isArray(n) ? i = K.access(e, t, S.makeArray(n)) : i.push(n)), i || [];
      },
      dequeue: function dequeue(e, t) {
        t = t || "fx";

        var n = S.queue(e, t),
            i = n.length,
            o = n.shift(),
            s = S._queueHooks(e, t);

        "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete s.stop, o.call(e, function () {
          S.dequeue(e, t);
        }, s)), !i && s && s.empty.fire();
      },
      _queueHooks: function _queueHooks(e, t) {
        var n = t + "queueHooks";
        return K.get(e, n) || K.access(e, n, {
          empty: S.Callbacks("once memory").add(function () {
            K.remove(e, [t + "queue", n]);
          })
        });
      }
    }), S.fn.extend({
      queue: function queue(e, t) {
        var n = 2;
        return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? S.queue(this[0], e) : void 0 === t ? this : this.each(function () {
          var n = S.queue(this, e, t);
          S._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && S.dequeue(this, e);
        });
      },
      dequeue: function dequeue(e) {
        return this.each(function () {
          S.dequeue(this, e);
        });
      },
      clearQueue: function clearQueue(e) {
        return this.queue(e || "fx", []);
      },
      promise: function promise(e, t) {
        var n,
            i = 1,
            o = S.Deferred(),
            s = this,
            r = this.length,
            a = function a() {
          --i || o.resolveWith(s, [s]);
        };

        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;) {
          (n = K.get(s[r], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
        }

        return a(), o.promise(t);
      }
    });

    var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ie = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"],
        se = b.documentElement,
        re = function re(e) {
      return S.contains(e.ownerDocument, e);
    },
        ae = {
      composed: !0
    };

    se.getRootNode && (re = function re(e) {
      return S.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument;
    });

    var le = function le(e, t) {
      return "none" === (e = t || e).style.display || "" === e.style.display && re(e) && "none" === S.css(e, "display");
    };

    function ce(e, t, n, i) {
      var o,
          s,
          r = 20,
          a = i ? function () {
        return i.cur();
      } : function () {
        return S.css(e, t, "");
      },
          l = a(),
          c = n && n[3] || (S.cssNumber[t] ? "" : "px"),
          d = e.nodeType && (S.cssNumber[t] || "px" !== c && +l) && ie.exec(S.css(e, t));

      if (d && d[3] !== c) {
        for (l /= 2, c = c || d[3], d = +l || 1; r--;) {
          S.style(e, t, d + c), (1 - s) * (1 - (s = a() / l || .5)) <= 0 && (r = 0), d /= s;
        }

        d *= 2, S.style(e, t, d + c), n = n || [];
      }

      return n && (d = +d || +l || 0, o = n[1] ? d + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = d, i.end = o)), o;
    }

    var de = {};

    function ue(e) {
      var t,
          n = e.ownerDocument,
          i = e.nodeName,
          o = de[i];
      return o || (t = n.body.appendChild(n.createElement(i)), o = S.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), de[i] = o, o);
    }

    function pe(e, t) {
      for (var n, i, o = [], s = 0, r = e.length; s < r; s++) {
        (i = e[s]).style && (n = i.style.display, t ? ("none" === n && (o[s] = K.get(i, "display") || null, o[s] || (i.style.display = "")), "" === i.style.display && le(i) && (o[s] = ue(i))) : "none" !== n && (o[s] = "none", K.set(i, "display", n)));
      }

      for (s = 0; s < r; s++) {
        null != o[s] && (e[s].style.display = o[s]);
      }

      return e;
    }

    S.fn.extend({
      show: function show() {
        return pe(this, !0);
      },
      hide: function hide() {
        return pe(this);
      },
      toggle: function toggle(e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
          le(this) ? S(this).show() : S(this).hide();
        });
      }
    });
    var fe,
        he,
        ge = /^(?:checkbox|radio)$/i,
        ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        me = /^$|^module$|\/(?:java|ecma)script/i;
    fe = b.createDocumentFragment().appendChild(b.createElement("div")), (he = b.createElement("input")).setAttribute("type", "radio"), he.setAttribute("checked", "checked"), he.setAttribute("name", "t"), fe.appendChild(he), v.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked, fe.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue, fe.innerHTML = "<option></option>", v.option = !!fe.lastChild;
    var ye = {
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };

    function be(e, t) {
      var n;
      return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && P(e, t) ? S.merge([e], n) : n;
    }

    function xe(e, t) {
      for (var n = 0, i = e.length; n < i; n++) {
        K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"));
      }
    }

    ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead, ye.th = ye.td, v.option || (ye.optgroup = ye.option = [1, "<select multiple='multiple'>", "</select>"]);
    var we = /<|&#?\w+;/;

    function Te(e, t, n, i, o) {
      for (var s, r, a, l, c, d, u = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++) {
        if ((s = e[f]) || 0 === s) if ("object" === T(s)) S.merge(p, s.nodeType ? [s] : s);else if (we.test(s)) {
          for (r = r || u.appendChild(t.createElement("div")), a = (ve.exec(s) || ["", ""])[1].toLowerCase(), l = ye[a] || ye._default, r.innerHTML = l[1] + S.htmlPrefilter(s) + l[2], d = l[0]; d--;) {
            r = r.lastChild;
          }

          S.merge(p, r.childNodes), (r = u.firstChild).textContent = "";
        } else p.push(t.createTextNode(s));
      }

      for (u.textContent = "", f = 0; s = p[f++];) {
        if (i && S.inArray(s, i) > -1) o && o.push(s);else if (c = re(s), r = be(u.appendChild(s), "script"), c && xe(r), n) for (d = 0; s = r[d++];) {
          me.test(s.type || "") && n.push(s);
        }
      }

      return u;
    }

    var Se = /^key/,
        Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ke = /^([^.]*)(?:\.(.+)|)/;

    function $e() {
      return !0;
    }

    function Ae() {
      return !1;
    }

    function Ee(e, t) {
      return e === function () {
        try {
          return b.activeElement;
        } catch (e) {}
      }() == ("focus" === t);
    }

    function Pe(e, t, n, i, o, s) {
      var r, a;

      if ("object" == _typeof(t)) {
        for (a in "string" != typeof n && (i = i || n, n = void 0), t) {
          Pe(e, a, n, i, t[a], s);
        }

        return e;
      }

      if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = Ae;else if (!o) return e;
      return 1 === s && (r = o, (o = function o(e) {
        return S().off(e), r.apply(this, arguments);
      }).guid = r.guid || (r.guid = S.guid++)), e.each(function () {
        S.event.add(this, t, o, i, n);
      });
    }

    function Le(e, t, n) {
      n ? (K.set(e, t, !1), S.event.add(e, t, {
        namespace: !1,
        handler: function handler(e) {
          var i,
              o,
              s = K.get(this, t);

          if (1 & e.isTrigger && this[t]) {
            if (s.length) (S.event.special[t] || {}).delegateType && e.stopPropagation();else if (s = a.call(arguments), K.set(this, t, s), i = n(this, t), this[t](), s !== (o = K.get(this, t)) || i ? K.set(this, t, !1) : o = {}, s !== o) return e.stopImmediatePropagation(), e.preventDefault(), o.value;
          } else s.length && (K.set(this, t, {
            value: S.event.trigger(S.extend(s[0], S.Event.prototype), s.slice(1), this)
          }), e.stopImmediatePropagation());
        }
      })) : void 0 === K.get(e, t) && S.event.add(e, t, $e);
    }

    S.event = {
      global: {},
      add: function add(e, t, n, i, o) {
        var s,
            r,
            a,
            l,
            c,
            d,
            u,
            p,
            f,
            h,
            g,
            v = K.get(e);
        if (G(e)) for (n.handler && (n = (s = n).handler, o = s.selector), o && S.find.matchesSelector(se, o), n.guid || (n.guid = S.guid++), (l = v.events) || (l = v.events = Object.create(null)), (r = v.handle) || (r = v.handle = function (t) {
          return void 0 !== S && S.event.triggered !== t.type ? S.event.dispatch.apply(e, arguments) : void 0;
        }), c = (t = (t || "").match(I) || [""]).length; c--;) {
          f = g = (a = ke.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), f && (u = S.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = S.event.special[f] || {}, d = S.extend({
            type: f,
            origType: g,
            data: i,
            handler: n,
            guid: n.guid,
            selector: o,
            needsContext: o && S.expr.match.needsContext.test(o),
            namespace: h.join(".")
          }, s), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, h, r) || e.addEventListener && e.addEventListener(f, r)), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), S.event.global[f] = !0);
        }
      },
      remove: function remove(e, t, n, i, o) {
        var s,
            r,
            a,
            l,
            c,
            d,
            u,
            p,
            f,
            h,
            g,
            v = K.hasData(e) && K.get(e);

        if (v && (l = v.events)) {
          for (c = (t = (t || "").match(I) || [""]).length; c--;) {
            if (f = g = (a = ke.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), f) {
              for (u = S.event.special[f] || {}, p = l[f = (i ? u.delegateType : u.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = p.length; s--;) {
                d = p[s], !o && g !== d.origType || n && n.guid !== d.guid || a && !a.test(d.namespace) || i && i !== d.selector && ("**" !== i || !d.selector) || (p.splice(s, 1), d.selector && p.delegateCount--, u.remove && u.remove.call(e, d));
              }

              r && !p.length && (u.teardown && !1 !== u.teardown.call(e, h, v.handle) || S.removeEvent(e, f, v.handle), delete l[f]);
            } else for (f in l) {
              S.event.remove(e, f + t[c], n, i, !0);
            }
          }

          S.isEmptyObject(l) && K.remove(e, "handle events");
        }
      },
      dispatch: function dispatch(e) {
        var t,
            n,
            i,
            o,
            s,
            r,
            a = new Array(arguments.length),
            l = S.event.fix(e),
            c = (K.get(this, "events") || Object.create(null))[l.type] || [],
            d = S.event.special[l.type] || {};

        for (a[0] = l, t = 1; t < arguments.length; t++) {
          a[t] = arguments[t];
        }

        if (l.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, l)) {
          for (r = S.event.handlers.call(this, l, c), t = 0; (o = r[t++]) && !l.isPropagationStopped();) {
            for (l.currentTarget = o.elem, n = 0; (s = o.handlers[n++]) && !l.isImmediatePropagationStopped();) {
              l.rnamespace && !1 !== s.namespace && !l.rnamespace.test(s.namespace) || (l.handleObj = s, l.data = s.data, void 0 !== (i = ((S.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
            }
          }

          return d.postDispatch && d.postDispatch.call(this, l), l.result;
        }
      },
      handlers: function handlers(e, t) {
        var n,
            i,
            o,
            s,
            r,
            a = [],
            l = t.delegateCount,
            c = e.target;
        if (l && c.nodeType && !("click" === e.type && e.button >= 1)) for (; c !== this; c = c.parentNode || this) {
          if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
            for (s = [], r = {}, n = 0; n < l; n++) {
              void 0 === r[o = (i = t[n]).selector + " "] && (r[o] = i.needsContext ? S(o, this).index(c) > -1 : S.find(o, this, null, [c]).length), r[o] && s.push(i);
            }

            s.length && a.push({
              elem: c,
              handlers: s
            });
          }
        }
        return c = this, l < t.length && a.push({
          elem: c,
          handlers: t.slice(l)
        }), a;
      },
      addProp: function addProp(e, t) {
        Object.defineProperty(S.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: m(t) ? function () {
            if (this.originalEvent) return t(this.originalEvent);
          } : function () {
            if (this.originalEvent) return this.originalEvent[e];
          },
          set: function set(t) {
            Object.defineProperty(this, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t
            });
          }
        });
      },
      fix: function fix(e) {
        return e[S.expando] ? e : new S.Event(e);
      },
      special: {
        load: {
          noBubble: !0
        },
        click: {
          setup: function setup(e) {
            var t = this || e;
            return ge.test(t.type) && t.click && P(t, "input") && Le(t, "click", $e), !1;
          },
          trigger: function trigger(e) {
            var t = this || e;
            return ge.test(t.type) && t.click && P(t, "input") && Le(t, "click"), !0;
          },
          _default: function _default(e) {
            var t = e.target;
            return ge.test(t.type) && t.click && P(t, "input") && K.get(t, "click") || P(t, "a");
          }
        },
        beforeunload: {
          postDispatch: function postDispatch(e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
          }
        }
      }
    }, S.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }, S.Event = function (e, t) {
      if (!(this instanceof S.Event)) return new S.Event(e, t);
      e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? $e : Ae, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0;
    }, S.Event.prototype = {
      constructor: S.Event,
      isDefaultPrevented: Ae,
      isPropagationStopped: Ae,
      isImmediatePropagationStopped: Ae,
      isSimulated: !1,
      preventDefault: function preventDefault() {
        var e = this.originalEvent;
        this.isDefaultPrevented = $e, e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function stopPropagation() {
        var e = this.originalEvent;
        this.isPropagationStopped = $e, e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function stopImmediatePropagation() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = $e, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
      }
    }, S.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      "char": !0,
      code: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function which(e) {
        var t = e.button;
        return null == e.which && Se.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
      }
    }, S.event.addProp), S.each({
      focus: "focusin",
      blur: "focusout"
    }, function (e, t) {
      S.event.special[e] = {
        setup: function setup() {
          return Le(this, e, Ee), !1;
        },
        trigger: function trigger() {
          return Le(this, e), !0;
        },
        delegateType: t
      };
    }), S.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function (e, t) {
      S.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function handle(e) {
          var n,
              i = this,
              o = e.relatedTarget,
              s = e.handleObj;
          return o && (o === i || S.contains(i, o)) || (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t), n;
        }
      };
    }), S.fn.extend({
      on: function on(e, t, n, i) {
        return Pe(this, e, t, n, i);
      },
      one: function one(e, t, n, i) {
        return Pe(this, e, t, n, i, 1);
      },
      off: function off(e, t, n) {
        var i, o;
        if (e && e.preventDefault && e.handleObj) return i = e.handleObj, S(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;

        if ("object" == _typeof(e)) {
          for (o in e) {
            this.off(o, t, e[o]);
          }

          return this;
        }

        return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ae), this.each(function () {
          S.event.remove(this, e, n, t);
        });
      }
    });
    var Oe = /<script|<style|<link/i,
        Me = /checked\s*(?:[^=]|=\s*.checked.)/i,
        De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function He(e, t) {
      return P(e, "table") && P(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e;
    }

    function je(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }

    function Ne(e) {
      return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
    }

    function Ie(e, t) {
      var n, i, o, s, r, a;

      if (1 === t.nodeType) {
        if (K.hasData(e) && (a = K.get(e).events)) for (o in K.remove(t, "handle events"), a) {
          for (n = 0, i = a[o].length; n < i; n++) {
            S.event.add(t, o, a[o][n]);
          }
        }
        Q.hasData(e) && (s = Q.access(e), r = S.extend({}, s), Q.set(t, r));
      }
    }

    function qe(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && ge.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
    }

    function ze(e, t, n, i) {
      t = l(t);
      var o,
          s,
          r,
          a,
          c,
          d,
          u = 0,
          p = e.length,
          f = p - 1,
          h = t[0],
          g = m(h);
      if (g || p > 1 && "string" == typeof h && !v.checkClone && Me.test(h)) return e.each(function (o) {
        var s = e.eq(o);
        g && (t[0] = h.call(this, o, s.html())), ze(s, t, n, i);
      });

      if (p && (s = (o = Te(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === o.childNodes.length && (o = s), s || i)) {
        for (a = (r = S.map(be(o, "script"), je)).length; u < p; u++) {
          c = o, u !== f && (c = S.clone(c, !0, !0), a && S.merge(r, be(c, "script"))), n.call(e[u], c, u);
        }

        if (a) for (d = r[r.length - 1].ownerDocument, S.map(r, Ne), u = 0; u < a; u++) {
          c = r[u], me.test(c.type || "") && !K.access(c, "globalEval") && S.contains(d, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? S._evalUrl && !c.noModule && S._evalUrl(c.src, {
            nonce: c.nonce || c.getAttribute("nonce")
          }, d) : w(c.textContent.replace(De, ""), c, d));
        }
      }

      return e;
    }

    function Fe(e, t, n) {
      for (var i, o = t ? S.filter(t, e) : e, s = 0; null != (i = o[s]); s++) {
        n || 1 !== i.nodeType || S.cleanData(be(i)), i.parentNode && (n && re(i) && xe(be(i, "script")), i.parentNode.removeChild(i));
      }

      return e;
    }

    S.extend({
      htmlPrefilter: function htmlPrefilter(e) {
        return e;
      },
      clone: function clone(e, t, n) {
        var i,
            o,
            s,
            r,
            a = e.cloneNode(!0),
            l = re(e);
        if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e))) for (r = be(a), i = 0, o = (s = be(e)).length; i < o; i++) {
          qe(s[i], r[i]);
        }
        if (t) if (n) for (s = s || be(e), r = r || be(a), i = 0, o = s.length; i < o; i++) {
          Ie(s[i], r[i]);
        } else Ie(e, a);
        return (r = be(a, "script")).length > 0 && xe(r, !l && be(e, "script")), a;
      },
      cleanData: function cleanData(e) {
        for (var t, n, i, o = S.event.special, s = 0; void 0 !== (n = e[s]); s++) {
          if (G(n)) {
            if (t = n[K.expando]) {
              if (t.events) for (i in t.events) {
                o[i] ? S.event.remove(n, i) : S.removeEvent(n, i, t.handle);
              }
              n[K.expando] = void 0;
            }

            n[Q.expando] && (n[Q.expando] = void 0);
          }
        }
      }
    }), S.fn.extend({
      detach: function detach(e) {
        return Fe(this, e, !0);
      },
      remove: function remove(e) {
        return Fe(this, e);
      },
      text: function text(e) {
        return _(this, function (e) {
          return void 0 === e ? S.text(this) : this.empty().each(function () {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
          });
        }, null, e, arguments.length);
      },
      append: function append() {
        return ze(this, arguments, function (e) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || He(this, e).appendChild(e);
        });
      },
      prepend: function prepend() {
        return ze(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = He(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function before() {
        return ze(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function after() {
        return ze(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function empty() {
        for (var e, t = 0; null != (e = this[t]); t++) {
          1 === e.nodeType && (S.cleanData(be(e, !1)), e.textContent = "");
        }

        return this;
      },
      clone: function clone(e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function () {
          return S.clone(this, e, t);
        });
      },
      html: function html(e) {
        return _(this, function (e) {
          var t = this[0] || {},
              n = 0,
              i = this.length;
          if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

          if ("string" == typeof e && !Oe.test(e) && !ye[(ve.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = S.htmlPrefilter(e);

            try {
              for (; n < i; n++) {
                1 === (t = this[n] || {}).nodeType && (S.cleanData(be(t, !1)), t.innerHTML = e);
              }

              t = 0;
            } catch (e) {}
          }

          t && this.empty().append(e);
        }, null, e, arguments.length);
      },
      replaceWith: function replaceWith() {
        var e = [];
        return ze(this, arguments, function (t) {
          var n = this.parentNode;
          S.inArray(this, e) < 0 && (S.cleanData(be(this)), n && n.replaceChild(t, this));
        }, e);
      }
    }), S.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function (e, t) {
      S.fn[e] = function (e) {
        for (var n, i = [], o = S(e), s = o.length - 1, r = 0; r <= s; r++) {
          n = r === s ? this : this.clone(!0), S(o[r])[t](n), c.apply(i, n.get());
        }

        return this.pushStack(i);
      };
    });

    var Re = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
        Be = function Be(e) {
      var t = e.ownerDocument.defaultView;
      return t && t.opener || (t = n), t.getComputedStyle(e);
    },
        We = function We(e, t, n) {
      var i,
          o,
          s = {};

      for (o in t) {
        s[o] = e.style[o], e.style[o] = t[o];
      }

      for (o in i = n.call(e), t) {
        e.style[o] = s[o];
      }

      return i;
    },
        _e = new RegExp(oe.join("|"), "i");

    function Xe(e, t, n) {
      var i,
          o,
          s,
          r,
          a = e.style;
      return (n = n || Be(e)) && ("" !== (r = n.getPropertyValue(t) || n[t]) || re(e) || (r = S.style(e, t)), !v.pixelBoxStyles() && Re.test(r) && _e.test(t) && (i = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = n.width, a.width = i, a.minWidth = o, a.maxWidth = s)), void 0 !== r ? r + "" : r;
    }

    function Ye(e, t) {
      return {
        get: function get() {
          if (!e()) return (this.get = t).apply(this, arguments);
          delete this.get;
        }
      };
    }

    !function () {
      function e() {
        if (d) {
          c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", d.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", se.appendChild(c).appendChild(d);
          var e = n.getComputedStyle(d);
          i = "1%" !== e.top, l = 12 === t(e.marginLeft), d.style.right = "60%", r = 36 === t(e.right), o = 36 === t(e.width), d.style.position = "absolute", s = 12 === t(d.offsetWidth / 3), se.removeChild(c), d = null;
        }
      }

      function t(e) {
        return Math.round(parseFloat(e));
      }

      var i,
          o,
          s,
          r,
          a,
          l,
          c = b.createElement("div"),
          d = b.createElement("div");
      d.style && (d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === d.style.backgroundClip, S.extend(v, {
        boxSizingReliable: function boxSizingReliable() {
          return e(), o;
        },
        pixelBoxStyles: function pixelBoxStyles() {
          return e(), r;
        },
        pixelPosition: function pixelPosition() {
          return e(), i;
        },
        reliableMarginLeft: function reliableMarginLeft() {
          return e(), l;
        },
        scrollboxSize: function scrollboxSize() {
          return e(), s;
        },
        reliableTrDimensions: function reliableTrDimensions() {
          var e, t, i, o;
          return null == a && (e = b.createElement("table"), t = b.createElement("tr"), i = b.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", i.style.height = "9px", se.appendChild(e).appendChild(t).appendChild(i), o = n.getComputedStyle(t), a = parseInt(o.height) > 3, se.removeChild(e)), a;
        }
      }));
    }();
    var Ue = ["Webkit", "Moz", "ms"],
        Ve = b.createElement("div").style,
        Ge = {};

    function Ze(e) {
      var t = S.cssProps[e] || Ge[e];
      return t || (e in Ve ? e : Ge[e] = function (e) {
        for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--;) {
          if ((e = Ue[n] + t) in Ve) return e;
        }
      }(e) || e);
    }

    var Ke = /^(none|table(?!-c[ea]).+)/,
        Qe = /^--/,
        Je = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
        et = {
      letterSpacing: "0",
      fontWeight: "400"
    };

    function tt(e, t, n) {
      var i = ie.exec(t);
      return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
    }

    function nt(e, t, n, i, o, s) {
      var r = "width" === t ? 1 : 0,
          a = 0,
          l = 0;
      if (n === (i ? "border" : "content")) return 0;

      for (; r < 4; r += 2) {
        "margin" === n && (l += S.css(e, n + oe[r], !0, o)), i ? ("content" === n && (l -= S.css(e, "padding" + oe[r], !0, o)), "margin" !== n && (l -= S.css(e, "border" + oe[r] + "Width", !0, o))) : (l += S.css(e, "padding" + oe[r], !0, o), "padding" !== n ? l += S.css(e, "border" + oe[r] + "Width", !0, o) : a += S.css(e, "border" + oe[r] + "Width", !0, o));
      }

      return !i && s >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - s - l - a - .5)) || 0), l;
    }

    function it(e, t, n) {
      var i = Be(e),
          o = (!v.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, i),
          s = o,
          r = Xe(e, t, i),
          a = "offset" + t[0].toUpperCase() + t.slice(1);

      if (Re.test(r)) {
        if (!n) return r;
        r = "auto";
      }

      return (!v.boxSizingReliable() && o || !v.reliableTrDimensions() && P(e, "tr") || "auto" === r || !parseFloat(r) && "inline" === S.css(e, "display", !1, i)) && e.getClientRects().length && (o = "border-box" === S.css(e, "boxSizing", !1, i), (s = a in e) && (r = e[a])), (r = parseFloat(r) || 0) + nt(e, t, n || (o ? "border" : "content"), s, i, r) + "px";
    }

    function ot(e, t, n, i, o) {
      return new ot.prototype.init(e, t, n, i, o);
    }

    S.extend({
      cssHooks: {
        opacity: {
          get: function get(e, t) {
            if (t) {
              var n = Xe(e, "opacity");
              return "" === n ? "1" : n;
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {},
      style: function style(e, t, n, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var o,
              s,
              r,
              a = V(t),
              l = Qe.test(t),
              c = e.style;
          if (l || (t = Ze(a)), r = S.cssHooks[t] || S.cssHooks[a], void 0 === n) return r && "get" in r && void 0 !== (o = r.get(e, !1, i)) ? o : c[t];
          "string" === (s = _typeof(n)) && (o = ie.exec(n)) && o[1] && (n = ce(e, t, o), s = "number"), null != n && n == n && ("number" !== s || l || (n += o && o[3] || (S.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), r && "set" in r && void 0 === (n = r.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n));
        }
      },
      css: function css(e, t, n, i) {
        var o,
            s,
            r,
            a = V(t);
        return Qe.test(t) || (t = Ze(a)), (r = S.cssHooks[t] || S.cssHooks[a]) && "get" in r && (o = r.get(e, !0, n)), void 0 === o && (o = Xe(e, t, i)), "normal" === o && t in et && (o = et[t]), "" === n || n ? (s = parseFloat(o), !0 === n || isFinite(s) ? s || 0 : o) : o;
      }
    }), S.each(["height", "width"], function (e, t) {
      S.cssHooks[t] = {
        get: function get(e, n, i) {
          if (n) return !Ke.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? it(e, t, i) : We(e, Je, function () {
            return it(e, t, i);
          });
        },
        set: function set(e, n, i) {
          var o,
              s = Be(e),
              r = !v.scrollboxSize() && "absolute" === s.position,
              a = (r || i) && "border-box" === S.css(e, "boxSizing", !1, s),
              l = i ? nt(e, t, i, a, s) : 0;
          return a && r && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(s[t]) - nt(e, t, "border", !1, s) - .5)), l && (o = ie.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = S.css(e, t)), tt(0, n, l);
        }
      };
    }), S.cssHooks.marginLeft = Ye(v.reliableMarginLeft, function (e, t) {
      if (t) return (parseFloat(Xe(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
        marginLeft: 0
      }, function () {
        return e.getBoundingClientRect().left;
      })) + "px";
    }), S.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function (e, t) {
      S.cssHooks[e + t] = {
        expand: function expand(n) {
          for (var i = 0, o = {}, s = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) {
            o[e + oe[i] + t] = s[i] || s[i - 2] || s[0];
          }

          return o;
        }
      }, "margin" !== e && (S.cssHooks[e + t].set = tt);
    }), S.fn.extend({
      css: function css(e, t) {
        return _(this, function (e, t, n) {
          var i,
              o,
              s = {},
              r = 0;

          if (Array.isArray(t)) {
            for (i = Be(e), o = t.length; r < o; r++) {
              s[t[r]] = S.css(e, t[r], !1, i);
            }

            return s;
          }

          return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
        }, e, t, arguments.length > 1);
      }
    }), S.Tween = ot, ot.prototype = {
      constructor: ot,
      init: function init(e, t, n, i, o, s) {
        this.elem = e, this.prop = n, this.easing = o || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = s || (S.cssNumber[n] ? "" : "px");
      },
      cur: function cur() {
        var e = ot.propHooks[this.prop];
        return e && e.get ? e.get(this) : ot.propHooks._default.get(this);
      },
      run: function run(e) {
        var t,
            n = ot.propHooks[this.prop];
        return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ot.propHooks._default.set(this), this;
      }
    }, ot.prototype.init.prototype = ot.prototype, ot.propHooks = {
      _default: {
        get: function get(e) {
          var t;
          return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
        },
        set: function set(e) {
          S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit);
        }
      }
    }, ot.propHooks.scrollTop = ot.propHooks.scrollLeft = {
      set: function set(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      }
    }, S.easing = {
      linear: function linear(e) {
        return e;
      },
      swing: function swing(e) {
        return .5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing"
    }, S.fx = ot.prototype.init, S.fx.step = {};
    var st,
        rt,
        at = /^(?:toggle|show|hide)$/,
        lt = /queueHooks$/;

    function ct() {
      rt && (!1 === b.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ct) : n.setTimeout(ct, S.fx.interval), S.fx.tick());
    }

    function dt() {
      return n.setTimeout(function () {
        st = void 0;
      }), st = Date.now();
    }

    function ut(e, t) {
      var n,
          i = 0,
          o = {
        height: e
      };

      for (t = t ? 1 : 0; i < 4; i += 2 - t) {
        o["margin" + (n = oe[i])] = o["padding" + n] = e;
      }

      return t && (o.opacity = o.width = e), o;
    }

    function pt(e, t, n) {
      for (var i, o = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), s = 0, r = o.length; s < r; s++) {
        if (i = o[s].call(n, t, e)) return i;
      }
    }

    function ft(e, t, n) {
      var i,
          o,
          s = 0,
          r = ft.prefilters.length,
          a = S.Deferred().always(function () {
        delete l.elem;
      }),
          l = function l() {
        if (o) return !1;

        for (var t = st || dt(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), s = 0, r = c.tweens.length; s < r; s++) {
          c.tweens[s].run(i);
        }

        return a.notifyWith(e, [c, i, n]), i < 1 && r ? n : (r || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1);
      },
          c = a.promise({
        elem: e,
        props: S.extend({}, t),
        opts: S.extend(!0, {
          specialEasing: {},
          easing: S.easing._default
        }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: st || dt(),
        duration: n.duration,
        tweens: [],
        createTween: function createTween(t, n) {
          var i = S.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
          return c.tweens.push(i), i;
        },
        stop: function stop(t) {
          var n = 0,
              i = t ? c.tweens.length : 0;
          if (o) return this;

          for (o = !0; n < i; n++) {
            c.tweens[n].run(1);
          }

          return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this;
        }
      }),
          d = c.props;

      for (!function (e, t) {
        var n, i, o, s, r;

        for (n in e) {
          if (o = t[i = V(n)], s = e[n], Array.isArray(s) && (o = s[1], s = e[n] = s[0]), n !== i && (e[i] = s, delete e[n]), (r = S.cssHooks[i]) && ("expand" in r)) for (n in s = r.expand(s), delete e[i], s) {
            (n in e) || (e[n] = s[n], t[n] = o);
          } else t[i] = o;
        }
      }(d, c.opts.specialEasing); s < r; s++) {
        if (i = ft.prefilters[s].call(c, e, d, c.opts)) return m(i.stop) && (S._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
      }

      return S.map(d, pt, c), m(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), S.fx.timer(S.extend(l, {
        elem: e,
        anim: c,
        queue: c.opts.queue
      })), c;
    }

    S.Animation = S.extend(ft, {
      tweeners: {
        "*": [function (e, t) {
          var n = this.createTween(e, t);
          return ce(n.elem, e, ie.exec(t), n), n;
        }]
      },
      tweener: function tweener(e, t) {
        m(e) ? (t = e, e = ["*"]) : e = e.match(I);

        for (var n, i = 0, o = e.length; i < o; i++) {
          n = e[i], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t);
        }
      },
      prefilters: [function (e, t, n) {
        var i,
            o,
            s,
            r,
            a,
            l,
            c,
            d,
            u = "width" in t || "height" in t,
            p = this,
            f = {},
            h = e.style,
            g = e.nodeType && le(e),
            v = K.get(e, "fxshow");

        for (i in n.queue || (null == (r = S._queueHooks(e, "fx")).unqueued && (r.unqueued = 0, a = r.empty.fire, r.empty.fire = function () {
          r.unqueued || a();
        }), r.unqueued++, p.always(function () {
          p.always(function () {
            r.unqueued--, S.queue(e, "fx").length || r.empty.fire();
          });
        })), t) {
          if (o = t[i], at.test(o)) {
            if (delete t[i], s = s || "toggle" === o, o === (g ? "hide" : "show")) {
              if ("show" !== o || !v || void 0 === v[i]) continue;
              g = !0;
            }

            f[i] = v && v[i] || S.style(e, i);
          }
        }

        if ((l = !S.isEmptyObject(t)) || !S.isEmptyObject(f)) for (i in u && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = v && v.display) && (c = K.get(e, "display")), "none" === (d = S.css(e, "display")) && (c ? d = c : (pe([e], !0), c = e.style.display || c, d = S.css(e, "display"), pe([e]))), ("inline" === d || "inline-block" === d && null != c) && "none" === S.css(e, "float") && (l || (p.done(function () {
          h.display = c;
        }), null == c && (d = h.display, c = "none" === d ? "" : d)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
          h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
        })), l = !1, f) {
          l || (v ? "hidden" in v && (g = v.hidden) : v = K.access(e, "fxshow", {
            display: c
          }), s && (v.hidden = !g), g && pe([e], !0), p.done(function () {
            for (i in g || pe([e]), K.remove(e, "fxshow"), f) {
              S.style(e, i, f[i]);
            }
          })), l = pt(g ? v[i] : 0, i, p), i in v || (v[i] = l.start, g && (l.end = l.start, l.start = 0));
        }
      }],
      prefilter: function prefilter(e, t) {
        t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
      }
    }), S.speed = function (e, t, n) {
      var i = e && "object" == _typeof(e) ? S.extend({}, e) : {
        complete: n || !n && t || m(e) && e,
        duration: e,
        easing: n && t || t && !m(t) && t
      };
      return S.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in S.fx.speeds ? i.duration = S.fx.speeds[i.duration] : i.duration = S.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
        m(i.old) && i.old.call(this), i.queue && S.dequeue(this, i.queue);
      }, i;
    }, S.fn.extend({
      fadeTo: function fadeTo(e, t, n, i) {
        return this.filter(le).css("opacity", 0).show().end().animate({
          opacity: t
        }, e, n, i);
      },
      animate: function animate(e, t, n, i) {
        var o = S.isEmptyObject(e),
            s = S.speed(t, n, i),
            r = function r() {
          var t = ft(this, S.extend({}, e), s);
          (o || K.get(this, "finish")) && t.stop(!0);
        };

        return r.finish = r, o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r);
      },
      stop: function stop(e, t, n) {
        var i = function i(e) {
          var t = e.stop;
          delete e.stop, t(n);
        };

        return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function () {
          var t = !0,
              o = null != e && e + "queueHooks",
              s = S.timers,
              r = K.get(this);
          if (o) r[o] && r[o].stop && i(r[o]);else for (o in r) {
            r[o] && r[o].stop && lt.test(o) && i(r[o]);
          }

          for (o = s.length; o--;) {
            s[o].elem !== this || null != e && s[o].queue !== e || (s[o].anim.stop(n), t = !1, s.splice(o, 1));
          }

          !t && n || S.dequeue(this, e);
        });
      },
      finish: function finish(e) {
        return !1 !== e && (e = e || "fx"), this.each(function () {
          var t,
              n = K.get(this),
              i = n[e + "queue"],
              o = n[e + "queueHooks"],
              s = S.timers,
              r = i ? i.length : 0;

          for (n.finish = !0, S.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = s.length; t--;) {
            s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
          }

          for (t = 0; t < r; t++) {
            i[t] && i[t].finish && i[t].finish.call(this);
          }

          delete n.finish;
        });
      }
    }), S.each(["toggle", "show", "hide"], function (e, t) {
      var n = S.fn[t];

      S.fn[t] = function (e, i, o) {
        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, i, o);
      };
    }), S.each({
      slideDown: ut("show"),
      slideUp: ut("hide"),
      slideToggle: ut("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function (e, t) {
      S.fn[e] = function (e, n, i) {
        return this.animate(t, e, n, i);
      };
    }), S.timers = [], S.fx.tick = function () {
      var e,
          t = 0,
          n = S.timers;

      for (st = Date.now(); t < n.length; t++) {
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      }

      n.length || S.fx.stop(), st = void 0;
    }, S.fx.timer = function (e) {
      S.timers.push(e), S.fx.start();
    }, S.fx.interval = 13, S.fx.start = function () {
      rt || (rt = !0, ct());
    }, S.fx.stop = function () {
      rt = null;
    }, S.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, S.fn.delay = function (e, t) {
      return e = S.fx && S.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, i) {
        var o = n.setTimeout(t, e);

        i.stop = function () {
          n.clearTimeout(o);
        };
      });
    }, function () {
      var e = b.createElement("input"),
          t = b.createElement("select").appendChild(b.createElement("option"));
      e.type = "checkbox", v.checkOn = "" !== e.value, v.optSelected = t.selected, (e = b.createElement("input")).value = "t", e.type = "radio", v.radioValue = "t" === e.value;
    }();
    var ht,
        gt = S.expr.attrHandle;
    S.fn.extend({
      attr: function attr(e, t) {
        return _(this, S.attr, e, t, arguments.length > 1);
      },
      removeAttr: function removeAttr(e) {
        return this.each(function () {
          S.removeAttr(this, e);
        });
      }
    }), S.extend({
      attr: function attr(e, t, n) {
        var i,
            o,
            s = e.nodeType;
        if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? S.prop(e, t, n) : (1 === s && S.isXMLDoc(e) || (o = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = S.find.attr(e, t)) ? void 0 : i);
      },
      attrHooks: {
        type: {
          set: function set(e, t) {
            if (!v.radioValue && "radio" === t && P(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          }
        }
      },
      removeAttr: function removeAttr(e, t) {
        var n,
            i = 0,
            o = t && t.match(I);
        if (o && 1 === e.nodeType) for (; n = o[i++];) {
          e.removeAttribute(n);
        }
      }
    }), ht = {
      set: function set(e, t, n) {
        return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
      }
    }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = gt[t] || S.find.attr;

      gt[t] = function (e, t, i) {
        var o,
            s,
            r = t.toLowerCase();
        return i || (s = gt[r], gt[r] = o, o = null != n(e, t, i) ? r : null, gt[r] = s), o;
      };
    });
    var vt = /^(?:input|select|textarea|button)$/i,
        mt = /^(?:a|area)$/i;

    function yt(e) {
      return (e.match(I) || []).join(" ");
    }

    function bt(e) {
      return e.getAttribute && e.getAttribute("class") || "";
    }

    function xt(e) {
      return Array.isArray(e) ? e : "string" == typeof e && e.match(I) || [];
    }

    S.fn.extend({
      prop: function prop(e, t) {
        return _(this, S.prop, e, t, arguments.length > 1);
      },
      removeProp: function removeProp(e) {
        return this.each(function () {
          delete this[S.propFix[e] || e];
        });
      }
    }), S.extend({
      prop: function prop(e, t, n) {
        var i,
            o,
            s = e.nodeType;
        if (3 !== s && 8 !== s && 2 !== s) return 1 === s && S.isXMLDoc(e) || (t = S.propFix[t] || t, o = S.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t];
      },
      propHooks: {
        tabIndex: {
          get: function get(e) {
            var t = S.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : vt.test(e.nodeName) || mt.test(e.nodeName) && e.href ? 0 : -1;
          }
        }
      },
      propFix: {
        "for": "htmlFor",
        "class": "className"
      }
    }), v.optSelected || (S.propHooks.selected = {
      get: function get(e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null;
      },
      set: function set(e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
      }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      S.propFix[this.toLowerCase()] = this;
    }), S.fn.extend({
      addClass: function addClass(e) {
        var t,
            n,
            i,
            o,
            s,
            r,
            a,
            l = 0;
        if (m(e)) return this.each(function (t) {
          S(this).addClass(e.call(this, t, bt(this)));
        });
        if ((t = xt(e)).length) for (; n = this[l++];) {
          if (o = bt(n), i = 1 === n.nodeType && " " + yt(o) + " ") {
            for (r = 0; s = t[r++];) {
              i.indexOf(" " + s + " ") < 0 && (i += s + " ");
            }

            o !== (a = yt(i)) && n.setAttribute("class", a);
          }
        }
        return this;
      },
      removeClass: function removeClass(e) {
        var t,
            n,
            i,
            o,
            s,
            r,
            a,
            l = 0;
        if (m(e)) return this.each(function (t) {
          S(this).removeClass(e.call(this, t, bt(this)));
        });
        if (!arguments.length) return this.attr("class", "");
        if ((t = xt(e)).length) for (; n = this[l++];) {
          if (o = bt(n), i = 1 === n.nodeType && " " + yt(o) + " ") {
            for (r = 0; s = t[r++];) {
              for (; i.indexOf(" " + s + " ") > -1;) {
                i = i.replace(" " + s + " ", " ");
              }
            }

            o !== (a = yt(i)) && n.setAttribute("class", a);
          }
        }
        return this;
      },
      toggleClass: function toggleClass(e, t) {
        var n = _typeof(e),
            i = "string" === n || Array.isArray(e);

        return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : m(e) ? this.each(function (n) {
          S(this).toggleClass(e.call(this, n, bt(this), t), t);
        }) : this.each(function () {
          var t, o, s, r;
          if (i) for (o = 0, s = S(this), r = xt(e); t = r[o++];) {
            s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
          } else void 0 !== e && "boolean" !== n || ((t = bt(this)) && K.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""));
        });
      },
      hasClass: function hasClass(e) {
        var t,
            n,
            i = 0;

        for (t = " " + e + " "; n = this[i++];) {
          if (1 === n.nodeType && (" " + yt(bt(n)) + " ").indexOf(t) > -1) return !0;
        }

        return !1;
      }
    });
    var wt = /\r/g;
    S.fn.extend({
      val: function val(e) {
        var t,
            n,
            i,
            o = this[0];
        return arguments.length ? (i = m(e), this.each(function (n) {
          var o;
          1 === this.nodeType && (null == (o = i ? e.call(this, n, S(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = S.map(o, function (e) {
            return null == e ? "" : e + "";
          })), (t = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o));
        })) : o ? (t = S.valHooks[o.type] || S.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(wt, "") : null == n ? "" : n : void 0;
      }
    }), S.extend({
      valHooks: {
        option: {
          get: function get(e) {
            var t = S.find.attr(e, "value");
            return null != t ? t : yt(S.text(e));
          }
        },
        select: {
          get: function get(e) {
            var t,
                n,
                i,
                o = e.options,
                s = e.selectedIndex,
                r = "select-one" === e.type,
                a = r ? null : [],
                l = r ? s + 1 : o.length;

            for (i = s < 0 ? l : r ? s : 0; i < l; i++) {
              if (((n = o[i]).selected || i === s) && !n.disabled && (!n.parentNode.disabled || !P(n.parentNode, "optgroup"))) {
                if (t = S(n).val(), r) return t;
                a.push(t);
              }
            }

            return a;
          },
          set: function set(e, t) {
            for (var n, i, o = e.options, s = S.makeArray(t), r = o.length; r--;) {
              ((i = o[r]).selected = S.inArray(S.valHooks.option.get(i), s) > -1) && (n = !0);
            }

            return n || (e.selectedIndex = -1), s;
          }
        }
      }
    }), S.each(["radio", "checkbox"], function () {
      S.valHooks[this] = {
        set: function set(e, t) {
          if (Array.isArray(t)) return e.checked = S.inArray(S(e).val(), t) > -1;
        }
      }, v.checkOn || (S.valHooks[this].get = function (e) {
        return null === e.getAttribute("value") ? "on" : e.value;
      });
    }), v.focusin = "onfocusin" in n;

    var Tt = /^(?:focusinfocus|focusoutblur)$/,
        St = function St(e) {
      e.stopPropagation();
    };

    S.extend(S.event, {
      trigger: function trigger(e, t, i, o) {
        var s,
            r,
            a,
            l,
            c,
            d,
            u,
            p,
            h = [i || b],
            g = f.call(e, "type") ? e.type : e,
            v = f.call(e, "namespace") ? e.namespace.split(".") : [];

        if (r = p = a = i = i || b, 3 !== i.nodeType && 8 !== i.nodeType && !Tt.test(g + S.event.triggered) && (g.indexOf(".") > -1 && (v = g.split("."), g = v.shift(), v.sort()), c = g.indexOf(":") < 0 && "on" + g, (e = e[S.expando] ? e : new S.Event(g, "object" == _typeof(e) && e)).isTrigger = o ? 2 : 3, e.namespace = v.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : S.makeArray(t, [e]), u = S.event.special[g] || {}, o || !u.trigger || !1 !== u.trigger.apply(i, t))) {
          if (!o && !u.noBubble && !y(i)) {
            for (l = u.delegateType || g, Tt.test(l + g) || (r = r.parentNode); r; r = r.parentNode) {
              h.push(r), a = r;
            }

            a === (i.ownerDocument || b) && h.push(a.defaultView || a.parentWindow || n);
          }

          for (s = 0; (r = h[s++]) && !e.isPropagationStopped();) {
            p = r, e.type = s > 1 ? l : u.bindType || g, (d = (K.get(r, "events") || Object.create(null))[e.type] && K.get(r, "handle")) && d.apply(r, t), (d = c && r[c]) && d.apply && G(r) && (e.result = d.apply(r, t), !1 === e.result && e.preventDefault());
          }

          return e.type = g, o || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(h.pop(), t) || !G(i) || c && m(i[g]) && !y(i) && ((a = i[c]) && (i[c] = null), S.event.triggered = g, e.isPropagationStopped() && p.addEventListener(g, St), i[g](), e.isPropagationStopped() && p.removeEventListener(g, St), S.event.triggered = void 0, a && (i[c] = a)), e.result;
        }
      },
      simulate: function simulate(e, t, n) {
        var i = S.extend(new S.Event(), n, {
          type: e,
          isSimulated: !0
        });
        S.event.trigger(i, null, t);
      }
    }), S.fn.extend({
      trigger: function trigger(e, t) {
        return this.each(function () {
          S.event.trigger(e, t, this);
        });
      },
      triggerHandler: function triggerHandler(e, t) {
        var n = this[0];
        if (n) return S.event.trigger(e, t, n, !0);
      }
    }), v.focusin || S.each({
      focus: "focusin",
      blur: "focusout"
    }, function (e, t) {
      var n = function n(e) {
        S.event.simulate(t, e.target, S.event.fix(e));
      };

      S.event.special[t] = {
        setup: function setup() {
          var i = this.ownerDocument || this.document || this,
              o = K.access(i, t);
          o || i.addEventListener(e, n, !0), K.access(i, t, (o || 0) + 1);
        },
        teardown: function teardown() {
          var i = this.ownerDocument || this.document || this,
              o = K.access(i, t) - 1;
          o ? K.access(i, t, o) : (i.removeEventListener(e, n, !0), K.remove(i, t));
        }
      };
    });
    var Ct = n.location,
        kt = {
      guid: Date.now()
    },
        $t = /\?/;

    S.parseXML = function (e) {
      var t;
      if (!e || "string" != typeof e) return null;

      try {
        t = new n.DOMParser().parseFromString(e, "text/xml");
      } catch (e) {
        t = void 0;
      }

      return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t;
    };

    var At = /\[\]$/,
        Et = /\r?\n/g,
        Pt = /^(?:submit|button|image|reset|file)$/i,
        Lt = /^(?:input|select|textarea|keygen)/i;

    function Ot(e, t, n, i) {
      var o;
      if (Array.isArray(t)) S.each(t, function (t, o) {
        n || At.test(e) ? i(e, o) : Ot(e + "[" + ("object" == _typeof(o) && null != o ? t : "") + "]", o, n, i);
      });else if (n || "object" !== T(t)) i(e, t);else for (o in t) {
        Ot(e + "[" + o + "]", t[o], n, i);
      }
    }

    S.param = function (e, t) {
      var n,
          i = [],
          o = function o(e, t) {
        var n = m(t) ? t() : t;
        i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };

      if (null == e) return "";
      if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
        o(this.name, this.value);
      });else for (n in e) {
        Ot(n, e[n], t, o);
      }
      return i.join("&");
    }, S.fn.extend({
      serialize: function serialize() {
        return S.param(this.serializeArray());
      },
      serializeArray: function serializeArray() {
        return this.map(function () {
          var e = S.prop(this, "elements");
          return e ? S.makeArray(e) : this;
        }).filter(function () {
          var e = this.type;
          return this.name && !S(this).is(":disabled") && Lt.test(this.nodeName) && !Pt.test(e) && (this.checked || !ge.test(e));
        }).map(function (e, t) {
          var n = S(this).val();
          return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
            return {
              name: t.name,
              value: e.replace(Et, "\r\n")
            };
          }) : {
            name: t.name,
            value: n.replace(Et, "\r\n")
          };
        }).get();
      }
    });
    var Mt = /%20/g,
        Dt = /#.*$/,
        Ht = /([?&])_=[^&]*/,
        jt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Nt = /^(?:GET|HEAD)$/,
        It = /^\/\//,
        qt = {},
        zt = {},
        Ft = "*/".concat("*"),
        Rt = b.createElement("a");

    function Bt(e) {
      return function (t, n) {
        "string" != typeof t && (n = t, t = "*");
        var i,
            o = 0,
            s = t.toLowerCase().match(I) || [];
        if (m(n)) for (; i = s[o++];) {
          "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
        }
      };
    }

    function Wt(e, t, n, i) {
      var o = {},
          s = e === zt;

      function r(a) {
        var l;
        return o[a] = !0, S.each(e[a] || [], function (e, a) {
          var c = a(t, n, i);
          return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1);
        }), l;
      }

      return r(t.dataTypes[0]) || !o["*"] && r("*");
    }

    function _t(e, t) {
      var n,
          i,
          o = S.ajaxSettings.flatOptions || {};

      for (n in t) {
        void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
      }

      return i && S.extend(!0, e, i), e;
    }

    Rt.href = Ct.href, S.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Ct.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ct.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Ft,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": S.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function ajaxSetup(e, t) {
        return t ? _t(_t(e, S.ajaxSettings), t) : _t(S.ajaxSettings, e);
      },
      ajaxPrefilter: Bt(qt),
      ajaxTransport: Bt(zt),
      ajax: function ajax(e, t) {
        "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
        var i,
            o,
            s,
            r,
            a,
            l,
            c,
            d,
            u,
            p,
            f = S.ajaxSetup({}, t),
            h = f.context || f,
            g = f.context && (h.nodeType || h.jquery) ? S(h) : S.event,
            v = S.Deferred(),
            m = S.Callbacks("once memory"),
            y = f.statusCode || {},
            x = {},
            w = {},
            T = "canceled",
            C = {
          readyState: 0,
          getResponseHeader: function getResponseHeader(e) {
            var t;

            if (c) {
              if (!r) for (r = {}; t = jt.exec(s);) {
                r[t[1].toLowerCase() + " "] = (r[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
              t = r[e.toLowerCase() + " "];
            }

            return null == t ? null : t.join(", ");
          },
          getAllResponseHeaders: function getAllResponseHeaders() {
            return c ? s : null;
          },
          setRequestHeader: function setRequestHeader(e, t) {
            return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this;
          },
          overrideMimeType: function overrideMimeType(e) {
            return null == c && (f.mimeType = e), this;
          },
          statusCode: function statusCode(e) {
            var t;
            if (e) if (c) C.always(e[C.status]);else for (t in e) {
              y[t] = [y[t], e[t]];
            }
            return this;
          },
          abort: function abort(e) {
            var t = e || T;
            return i && i.abort(t), k(0, t), this;
          }
        };

        if (v.promise(C), f.url = ((e || f.url || Ct.href) + "").replace(It, Ct.protocol + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(I) || [""], null == f.crossDomain) {
          l = b.createElement("a");

          try {
            l.href = f.url, l.href = l.href, f.crossDomain = Rt.protocol + "//" + Rt.host != l.protocol + "//" + l.host;
          } catch (e) {
            f.crossDomain = !0;
          }
        }

        if (f.data && f.processData && "string" != typeof f.data && (f.data = S.param(f.data, f.traditional)), Wt(qt, f, t, C), c) return C;

        for (u in (d = S.event && f.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Nt.test(f.type), o = f.url.replace(Dt, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Mt, "+")) : (p = f.url.slice(o.length), f.data && (f.processData || "string" == typeof f.data) && (o += ($t.test(o) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (o = o.replace(Ht, "$1"), p = ($t.test(o) ? "&" : "?") + "_=" + kt.guid++ + p), f.url = o + p), f.ifModified && (S.lastModified[o] && C.setRequestHeader("If-Modified-Since", S.lastModified[o]), S.etag[o] && C.setRequestHeader("If-None-Match", S.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : f.accepts["*"]), f.headers) {
          C.setRequestHeader(u, f.headers[u]);
        }

        if (f.beforeSend && (!1 === f.beforeSend.call(h, C, f) || c)) return C.abort();

        if (T = "abort", m.add(f.complete), C.done(f.success), C.fail(f.error), i = Wt(zt, f, t, C)) {
          if (C.readyState = 1, d && g.trigger("ajaxSend", [C, f]), c) return C;
          f.async && f.timeout > 0 && (a = n.setTimeout(function () {
            C.abort("timeout");
          }, f.timeout));

          try {
            c = !1, i.send(x, k);
          } catch (e) {
            if (c) throw e;
            k(-1, e);
          }
        } else k(-1, "No Transport");

        function k(e, t, r, l) {
          var u,
              p,
              b,
              x,
              w,
              T = t;
          c || (c = !0, a && n.clearTimeout(a), i = void 0, s = l || "", C.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, r && (x = function (e, t, n) {
            for (var i, o, s, r, a = e.contents, l = e.dataTypes; "*" === l[0];) {
              l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            }

            if (i) for (o in a) {
              if (a[o] && a[o].test(i)) {
                l.unshift(o);
                break;
              }
            }
            if (l[0] in n) s = l[0];else {
              for (o in n) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                  s = o;
                  break;
                }

                r || (r = o);
              }

              s = s || r;
            }
            if (s) return s !== l[0] && l.unshift(s), n[s];
          }(f, C, r)), !u && S.inArray("script", f.dataTypes) > -1 && (f.converters["text script"] = function () {}), x = function (e, t, n, i) {
            var o,
                s,
                r,
                a,
                l,
                c = {},
                d = e.dataTypes.slice();
            if (d[1]) for (r in e.converters) {
              c[r.toLowerCase()] = e.converters[r];
            }

            for (s = d.shift(); s;) {
              if (e.responseFields[s] && (n[e.responseFields[s]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = d.shift()) if ("*" === s) s = l;else if ("*" !== l && l !== s) {
                if (!(r = c[l + " " + s] || c["* " + s])) for (o in c) {
                  if ((a = o.split(" "))[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                    !0 === r ? r = c[o] : !0 !== c[o] && (s = a[0], d.unshift(a[1]));
                    break;
                  }
                }
                if (!0 !== r) if (r && e["throws"]) t = r(t);else try {
                  t = r(t);
                } catch (e) {
                  return {
                    state: "parsererror",
                    error: r ? e : "No conversion from " + l + " to " + s
                  };
                }
              }
            }

            return {
              state: "success",
              data: t
            };
          }(f, x, C, u), u ? (f.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (S.lastModified[o] = w), (w = C.getResponseHeader("etag")) && (S.etag[o] = w)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = x.state, p = x.data, u = !(b = x.error))) : (b = T, !e && T || (T = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (t || T) + "", u ? v.resolveWith(h, [p, T, C]) : v.rejectWith(h, [C, T, b]), C.statusCode(y), y = void 0, d && g.trigger(u ? "ajaxSuccess" : "ajaxError", [C, f, u ? p : b]), m.fireWith(h, [C, T]), d && (g.trigger("ajaxComplete", [C, f]), --S.active || S.event.trigger("ajaxStop")));
        }

        return C;
      },
      getJSON: function getJSON(e, t, n) {
        return S.get(e, t, n, "json");
      },
      getScript: function getScript(e, t) {
        return S.get(e, void 0, t, "script");
      }
    }), S.each(["get", "post"], function (e, t) {
      S[t] = function (e, n, i, o) {
        return m(n) && (o = o || i, i = n, n = void 0), S.ajax(S.extend({
          url: e,
          type: t,
          dataType: o,
          data: n,
          success: i
        }, S.isPlainObject(e) && e));
      };
    }), S.ajaxPrefilter(function (e) {
      var t;

      for (t in e.headers) {
        "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
      }
    }), S._evalUrl = function (e, t, n) {
      return S.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: {
          "text script": function textScript() {}
        },
        dataFilter: function dataFilter(e) {
          S.globalEval(e, t, n);
        }
      });
    }, S.fn.extend({
      wrapAll: function wrapAll(e) {
        var t;
        return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          for (var e = this; e.firstElementChild;) {
            e = e.firstElementChild;
          }

          return e;
        }).append(this)), this;
      },
      wrapInner: function wrapInner(e) {
        return m(e) ? this.each(function (t) {
          S(this).wrapInner(e.call(this, t));
        }) : this.each(function () {
          var t = S(this),
              n = t.contents();
          n.length ? n.wrapAll(e) : t.append(e);
        });
      },
      wrap: function wrap(e) {
        var t = m(e);
        return this.each(function (n) {
          S(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function unwrap(e) {
        return this.parent(e).not("body").each(function () {
          S(this).replaceWith(this.childNodes);
        }), this;
      }
    }), S.expr.pseudos.hidden = function (e) {
      return !S.expr.pseudos.visible(e);
    }, S.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, S.ajaxSettings.xhr = function () {
      try {
        return new n.XMLHttpRequest();
      } catch (e) {}
    };
    var Xt = {
      0: 200,
      1223: 204
    },
        Yt = S.ajaxSettings.xhr();
    v.cors = !!Yt && "withCredentials" in Yt, v.ajax = Yt = !!Yt, S.ajaxTransport(function (e) {
      var _t3, i;

      if (v.cors || Yt && !e.crossDomain) return {
        send: function send(o, s) {
          var r,
              a = e.xhr();
          if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (r in e.xhrFields) {
            a[r] = e.xhrFields[r];
          }

          for (r in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) {
            a.setRequestHeader(r, o[r]);
          }

          _t3 = function t(e) {
            return function () {
              _t3 && (_t3 = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(Xt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                binary: a.response
              } : {
                text: a.responseText
              }, a.getAllResponseHeaders()));
            };
          }, a.onload = _t3(), i = a.onerror = a.ontimeout = _t3("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
            4 === a.readyState && n.setTimeout(function () {
              _t3 && i();
            });
          }, _t3 = _t3("abort");

          try {
            a.send(e.hasContent && e.data || null);
          } catch (e) {
            if (_t3) throw e;
          }
        },
        abort: function abort() {
          _t3 && _t3();
        }
      };
    }), S.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }), S.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function textScript(e) {
          return S.globalEval(e), e;
        }
      }
    }), S.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), S.ajaxTransport("script", function (e) {
      var t, _n;

      if (e.crossDomain || e.scriptAttrs) return {
        send: function send(i, o) {
          t = S("<script>").attr(e.scriptAttrs || {}).prop({
            charset: e.scriptCharset,
            src: e.url
          }).on("load error", _n = function n(e) {
            t.remove(), _n = null, e && o("error" === e.type ? 404 : 200, e.type);
          }), b.head.appendChild(t[0]);
        },
        abort: function abort() {
          _n && _n();
        }
      };
    });
    var Ut,
        Vt = [],
        Gt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function jsonpCallback() {
        var e = Vt.pop() || S.expando + "_" + kt.guid++;
        return this[e] = !0, e;
      }
    }), S.ajaxPrefilter("json jsonp", function (e, t, i) {
      var o,
          s,
          r,
          a = !1 !== e.jsonp && (Gt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(e.data) && "data");
      if (a || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Gt, "$1" + o) : !1 !== e.jsonp && (e.url += ($t.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
        return r || S.error(o + " was not called"), r[0];
      }, e.dataTypes[0] = "json", s = n[o], n[o] = function () {
        r = arguments;
      }, i.always(function () {
        void 0 === s ? S(n).removeProp(o) : n[o] = s, e[o] && (e.jsonpCallback = t.jsonpCallback, Vt.push(o)), r && m(s) && s(r[0]), r = s = void 0;
      }), "script";
    }), v.createHTMLDocument = ((Ut = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function (e, t, n) {
      return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((i = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, t.head.appendChild(i)) : t = b), s = !n && [], (o = L.exec(e)) ? [t.createElement(o[1])] : (o = Te([e], t, s), s && s.length && S(s).remove(), S.merge([], o.childNodes)));
      var i, o, s;
    }, S.fn.load = function (e, t, n) {
      var i,
          o,
          s,
          r = this,
          a = e.indexOf(" ");
      return a > -1 && (i = yt(e.slice(a)), e = e.slice(0, a)), m(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (o = "POST"), r.length > 0 && S.ajax({
        url: e,
        type: o || "GET",
        dataType: "html",
        data: t
      }).done(function (e) {
        s = arguments, r.html(i ? S("<div>").append(S.parseHTML(e)).find(i) : e);
      }).always(n && function (e, t) {
        r.each(function () {
          n.apply(this, s || [e.responseText, t, e]);
        });
      }), this;
    }, S.expr.pseudos.animated = function (e) {
      return S.grep(S.timers, function (t) {
        return e === t.elem;
      }).length;
    }, S.offset = {
      setOffset: function setOffset(e, t, n) {
        var i,
            o,
            s,
            r,
            a,
            l,
            c = S.css(e, "position"),
            d = S(e),
            u = {};
        "static" === c && (e.style.position = "relative"), a = d.offset(), s = S.css(e, "top"), l = S.css(e, "left"), ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1 ? (r = (i = d.position()).top, o = i.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), m(t) && (t = t.call(e, n, S.extend({}, a))), null != t.top && (u.top = t.top - a.top + r), null != t.left && (u.left = t.left - a.left + o), "using" in t ? t.using.call(e, u) : ("number" == typeof u.top && (u.top += "px"), "number" == typeof u.left && (u.left += "px"), d.css(u));
      }
    }, S.fn.extend({
      offset: function offset(e) {
        if (arguments.length) return void 0 === e ? this : this.each(function (t) {
          S.offset.setOffset(this, e, t);
        });
        var t,
            n,
            i = this[0];
        return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
          top: t.top + n.pageYOffset,
          left: t.left + n.pageXOffset
        }) : {
          top: 0,
          left: 0
        } : void 0;
      },
      position: function position() {
        if (this[0]) {
          var e,
              t,
              n,
              i = this[0],
              o = {
            top: 0,
            left: 0
          };
          if ("fixed" === S.css(i, "position")) t = i.getBoundingClientRect();else {
            for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position");) {
              e = e.parentNode;
            }

            e && e !== i && 1 === e.nodeType && ((o = S(e).offset()).top += S.css(e, "borderTopWidth", !0), o.left += S.css(e, "borderLeftWidth", !0));
          }
          return {
            top: t.top - o.top - S.css(i, "marginTop", !0),
            left: t.left - o.left - S.css(i, "marginLeft", !0)
          };
        }
      },
      offsetParent: function offsetParent() {
        return this.map(function () {
          for (var e = this.offsetParent; e && "static" === S.css(e, "position");) {
            e = e.offsetParent;
          }

          return e || se;
        });
      }
    }), S.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function (e, t) {
      var n = "pageYOffset" === t;

      S.fn[e] = function (i) {
        return _(this, function (e, i, o) {
          var s;
          if (y(e) ? s = e : 9 === e.nodeType && (s = e.defaultView), void 0 === o) return s ? s[t] : e[i];
          s ? s.scrollTo(n ? s.pageXOffset : o, n ? o : s.pageYOffset) : e[i] = o;
        }, e, i, arguments.length);
      };
    }), S.each(["top", "left"], function (e, t) {
      S.cssHooks[t] = Ye(v.pixelPosition, function (e, n) {
        if (n) return n = Xe(e, t), Re.test(n) ? S(e).position()[t] + "px" : n;
      });
    }), S.each({
      Height: "height",
      Width: "width"
    }, function (e, t) {
      S.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
      }, function (n, i) {
        S.fn[i] = function (o, s) {
          var r = arguments.length && (n || "boolean" != typeof o),
              a = n || (!0 === o || !0 === s ? "margin" : "border");
          return _(this, function (t, n, o) {
            var s;
            return y(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === o ? S.css(t, n, a) : S.style(t, n, o, a);
          }, t, r ? o : void 0, r);
        };
      });
    }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
      S.fn[t] = function (e) {
        return this.on(t, e);
      };
    }), S.fn.extend({
      bind: function bind(e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function unbind(e, t) {
        return this.off(e, null, t);
      },
      delegate: function delegate(e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function undelegate(e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
      },
      hover: function hover(e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      }
    }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
      S.fn[t] = function (e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
      };
    });
    var Zt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function (e, t) {
      var n, i, o;
      if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return i = a.call(arguments, 2), (o = function o() {
        return e.apply(t || this, i.concat(a.call(arguments)));
      }).guid = e.guid = e.guid || S.guid++, o;
    }, S.holdReady = function (e) {
      e ? S.readyWait++ : S.ready(!0);
    }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = P, S.isFunction = m, S.isWindow = y, S.camelCase = V, S.type = T, S.now = Date.now, S.isNumeric = function (e) {
      var t = S.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }, S.trim = function (e) {
      return null == e ? "" : (e + "").replace(Zt, "");
    }, void 0 === (i = function () {
      return S;
    }.apply(t, [])) || (e.exports = i);
    var Kt = n.jQuery,
        Qt = n.$;
    return S.noConflict = function (e) {
      return n.$ === S && (n.$ = Qt), e && n.jQuery === S && (n.jQuery = Kt), S;
    }, void 0 === o && (n.jQuery = n.$ = S), S;
  });
}, function (e, t, n) {
  var i, o;
  o = this, void 0 === (i = function () {
    return o.svg4everybody = function () {
      /*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */
      function e(e, t, n) {
        if (n) {
          var i = document.createDocumentFragment(),
              o = !t.hasAttribute("viewBox") && n.getAttribute("viewBox");
          o && t.setAttribute("viewBox", o);

          for (var s = n.cloneNode(!0); s.childNodes.length;) {
            i.appendChild(s.firstChild);
          }

          e.appendChild(i);
        }
      }

      function t(t) {
        t.onreadystatechange = function () {
          if (4 === t.readyState) {
            var n = t._cachedDocument;
            n || ((n = t._cachedDocument = document.implementation.createHTMLDocument("")).body.innerHTML = t.responseText, t._cachedTarget = {}), t._embeds.splice(0).map(function (i) {
              var o = t._cachedTarget[i.id];
              o || (o = t._cachedTarget[i.id] = n.getElementById(i.id)), e(i.parent, i.svg, o);
            });
          }
        }, t.onreadystatechange();
      }

      function n(e) {
        for (var t = e; "svg" !== t.nodeName.toLowerCase() && (t = t.parentNode);) {
          ;
        }

        return t;
      }

      return function (i) {
        var o,
            s = Object(i),
            r = window.top !== window.self;
        o = "polyfill" in s ? s.polyfill : /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent) || (navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/) || [])[1] < 10547 || (navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/) || [])[1] < 537 || /\bEdge\/.(\d+)\b/.test(navigator.userAgent) && r;
        var a = {},
            l = window.requestAnimationFrame || setTimeout,
            c = document.getElementsByTagName("use"),
            d = 0;
        o && function i() {
          for (var r = 0; r < c.length;) {
            var u = c[r],
                p = u.parentNode,
                f = n(p),
                h = u.getAttribute("xlink:href") || u.getAttribute("href");

            if (!h && s.attributeName && (h = u.getAttribute(s.attributeName)), f && h) {
              if (o) if (!s.validate || s.validate(h, f, u)) {
                p.removeChild(u);
                var g = h.split("#"),
                    v = g.shift(),
                    m = g.join("#");

                if (v.length) {
                  var y = a[v];
                  y || ((y = a[v] = new XMLHttpRequest()).open("GET", v), y.send(), y._embeds = []), y._embeds.push({
                    parent: p,
                    svg: f,
                    id: m
                  }), t(y);
                } else e(p, f, document.getElementById(m));
              } else ++r, ++d;
            } else ++r;
          }

          (!c.length || c.length - d > 0) && l(i, 67);
        }();
      };
    }();
  }.apply(t, [])) || (e.exports = i);
}, function (e, t, n) {
  "use strict";

  (function (e) {
    n(3);
    e(document).ready(function (e) {
      e(".menu--main").hcOffcanvasNav({
        disableAt: !1,
        customToggle: e(".burger"),
        labelBack: "",
        position: "right",
        pushContent: "#container"
      });
    });
  }).call(this, n(0));
}, function (e, t, n) {
  "use strict";

  (function (e) {
    function t(e) {
      return (t = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    !function (n, i) {
      var o = i.document,
          s = n(i),
          r = n(o.getElementsByTagName("html")[0]),
          a = n(o),
          l = !1;

      try {
        var c = Object.defineProperty({}, "passive", {
          get: function get() {
            l = {
              passive: !1
            };
          }
        });
        i.addEventListener("testPassive", null, c), i.removeEventListener("testPassive", null, c);
      } catch (e) {}

      var d,
          u = function u() {
        return o.documentElement.scrollHeight > o.documentElement.clientHeight;
      },
          p = (/iPad|iPhone|iPod/.test(navigator.userAgent) || !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)) && !i.MSStream,
          f = "ontouchstart" in i || navigator.maxTouchPoints || i.DocumentTouch && o instanceof DocumentTouch,
          h = function h(e) {
        return !isNaN(parseFloat(e)) && isFinite(e);
      },
          g = function g(e) {
        return "auto" === e ? e : h(e) ? e + "px" : e;
      },
          v = function v(e) {
        return parseFloat(e) * (/\ds$/.test(e) ? 1e3 : 1);
      },
          m = function m() {
        return Math.random().toString(36).substr(2);
      },
          y = function y() {
        return i.addEventListener("touchmove", w, l);
      },
          b = function b() {
        return i.removeEventListener("touchmove", w, l);
      },
          x = function x(e) {
        return e.stopPropagation();
      },
          w = function w(e) {
        return e.preventDefault();
      },
          T = function T(e) {
        return function (t) {
          t.preventDefault(), t.stopPropagation(), "function" == typeof e && e();
        };
      },
          S = function S(e) {
        var t = ["Webkit", "Moz", "Ms", "O"],
            n = (o.body || o.documentElement).style,
            i = e.charAt(0).toUpperCase() + e.slice(1);
        if (void 0 !== n[e]) return e;

        for (var s = 0; s < t.length; s++) {
          if (void 0 !== n[t[s] + i]) return t[s] + i;
        }

        return !1;
      },
          C = function e(t) {
        return "string" == typeof t ? t : t.attr("id") ? "#" + t.attr("id") : t.attr("class") ? t.prop("tagName").toLowerCase() + "." + t.attr("class").replace(/\s+/g, ".") : e(t.parent()) + " " + t.prop("tagName").toLowerCase();
      },
          k = function k(e) {
        var t = n('<style id="'.concat(e, '">')).appendTo(n("head")),
            i = {},
            o = {},
            s = function s(e) {
          return ";" !== e.substr(-1) && (e += ";" !== e.substr(-1) ? ";" : ""), e;
        };

        return {
          reset: function reset() {
            i = {}, o = {};
          },
          add: function add(e, t, n) {
            e = e.trim(), t = t.trim(), n ? (n = n.trim(), o[n] = o[n] || {}, o[n][e] = s(t)) : i[e] = s(t);
          },
          remove: function remove(e, t) {
            e = e.trim(), t ? (t = t.trim(), void 0 !== o[t][e] && delete o[t][e]) : void 0 !== i[e] && delete i[e];
          },
          insert: function insert() {
            var e = "";

            for (var n in o) {
              for (var s in e += "@media screen and (".concat(n, ") {\n"), o[n]) {
                e += "".concat(s, " { ").concat(o[n][s], " }\n");
              }

              e += "}\n";
            }

            for (var r in i) {
              e += "".concat(r, " { ").concat(i[r], " }\n");
            }

            t.html(e);
          }
        };
      },
          $ = function $(e, t, n) {
        var i = n.children(),
            o = i.length,
            s = t > -1 ? Math.max(0, Math.min(t - 1, o)) : Math.max(0, Math.min(o + t + 1, o));
        0 === s ? n.prepend(e) : i.eq(s - 1).after(e);
      },
          A = function A(e) {
        return -1 !== ["left", "right"].indexOf(e) ? "x" : "y";
      },
          E = (d = S("transform"), function (e, t, n) {
        if (d) {
          if (!1 === t) e.css(d, "");else if ("x" === A(n)) {
            var i = "left" === n ? t : 0 - t;
            e.css(d, "translate3d(".concat(i, "px,0,0)"));
          } else {
            var o = "top" === n ? t : 0 - t;
            e.css(d, "translate3d(0,".concat(o, "px,0)"));
          }
        } else e.css(n, t);
      }),
          P = function P(e, t, n) {
        console.warn("%cHC Off-canvas Nav:%c " + n + "%c '" + e + "'%c is now deprecated and will be removed in the future. Use%c '" + t + "'%c option instead. See details about plugin usage at https://github.com/somewebmedia/hc-offcanvas-nav.", "color: #fa253b", "color: default", "color: #5595c6", "color: default", "color: #5595c6", "color: default");
      },
          L = 0;

      n.fn.extend({
        hcOffcanvasNav: function hcOffcanvasNav() {
          var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (!this.length) return this;
          var c = this,
              d = n(o.body),
              w = {
            width: 280,
            height: "auto",
            disableAt: !1,
            pushContent: !1,
            swipeGestures: !0,
            expanded: !1,
            position: "left",
            levelOpen: "overlap",
            levelSpacing: 40,
            levelTitles: !0,
            closeOpenLevels: !0,
            closeActiveLevel: !1,
            navTitle: null,
            navClass: "",
            disableBody: !0,
            closeOnClick: !0,
            customToggle: null,
            bodyInsert: "prepend",
            removeOriginalNav: !1,
            rtl: !1,
            insertClose: !0,
            insertBack: !0,
            levelTitleAsBack: !0,
            labelClose: "Close",
            labelBack: "Back"
          };
          void 0 !== i.maxWidth && (P("maxWidth", "disableAt", "option"), i.disableAt = i.maxWidth);

          var O = n.extend({}, w, i),
              M = [],
              D = "nav-open",
              H = function H(e) {
            if (!M.length) return !1;
            var t = !1;
            "string" == typeof e && (e = [e]);

            for (var n = e.length, i = 0; i < n; i++) {
              -1 !== M.indexOf(e[i]) && (t = !0);
            }

            return t;
          },
              j = function j() {
            var i = n(this);

            if (i.find("ul").addBack("ul").length) {
              L++;

              var w,
                  P,
                  j,
                  N = "hc-nav-".concat(L),
                  I = k("hc-offcanvas-".concat(L, "-style")),
                  q = n('<nav role="navigation">').on("click", x),
                  z = n('<div class="nav-container">').appendTo(q),
                  F = null,
                  R = null,
                  B = {},
                  W = !1,
                  _ = !1,
                  X = null,
                  Y = 0,
                  U = 0,
                  V = 0,
                  G = null,
                  Z = {},
                  K = [],
                  Q = !1,
                  J = [],
                  ee = null,
                  te = null,
                  ne = !1,
                  ie = !1;

              i.addClass("hc-nav-original ".concat(N)), O.customToggle ? F = n(O.customToggle).addClass("hc-nav-trigger ".concat(N)).on("click", Ce) : (F = n('<a href="#" aria-label="Open Menu" class="hc-nav-trigger '.concat(N, '"><span></span></a>')).on("click", Ce), i.after(F)), F.attr("role", "button").attr("aria-controls", N).on("keydown", function (e) {
                "Enter" !== e.key && 13 !== e.keyCode || setTimeout(function () {
                  oe(0, 0);
                }, 0);
              });

              var oe = function oe(e, t, i) {
                if ("number" == typeof t && ("number" == typeof e || J.length)) {
                  var s = '[tabindex=0], a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select',
                      r = z.find(".nav-wrapper").filter("[data-level=".concat(t, "]")).filter(function () {
                    return "number" != typeof i || n(this).is("[data-index=".concat(i, "]"));
                  }).children(".nav-content").children("ul").children("li").children(":not(.nav-wrapper)").find(s).addBack(s).filter(":not([tabindex=-1])");

                  if (r.length) {
                    var l = r.first(),
                        c = r.last();
                    "number" == typeof e ? r.eq(e).focus() : (J[J.length - 1].focus(), J.pop()), a.off("keydown.hc-offcanvas-nav"), a.on("keydown.hc-offcanvas-nav", function (e) {
                      ("Tab" === e.key || 9 === e.keyCode) && (e.shiftKey ? o.activeElement === l[0] && (e.preventDefault(), c.focus()) : o.activeElement === c[0] && (e.preventDefault(), l.focus()));
                    });
                  }
                }
              },
                  se = function se() {
                a.off("keydown.hc-offcanvas-nav"), setTimeout(function () {
                  F.focus();
                }, P);
              },
                  re = function re() {
                z.css("transition", "none"), U = z.outerWidth(), V = z.outerHeight(), I.add(".hc-offcanvas-nav.".concat(N, ".nav-position-left .nav-container"), "transform: translate3d(-".concat(U, "px, 0, 0)")), I.add(".hc-offcanvas-nav.".concat(N, ".nav-position-right .nav-container"), "transform: translate3d(".concat(U, "px, 0, 0)")), I.add(".hc-offcanvas-nav.".concat(N, ".nav-position-top .nav-container"), "transform: translate3d(0, -".concat(V, "px, 0)")), I.add(".hc-offcanvas-nav.".concat(N, ".nav-position-bottom .nav-container"), "transform: translate3d(0, ".concat(V, "px, 0)")), I.insert(), z.css("transition", ""), w = z.css("transition-property").split(",")[0], P = v(z.css("transition-duration").split(",")[0]), j = z.css("transition-timing-function").split(",")[0], O.pushContent && R && w && I.add(C(O.pushContent), "transition: ".concat(w, " ").concat(P, "ms ").concat(j)), I.insert();
              },
                  ae = function ae(t) {
                var i = F.css("display"),
                    o = !!O.disableAt && "max-width: ".concat(O.disableAt - 1, "px"),
                    s = g(O.width),
                    r = g(O.height);
                -1 !== s.indexOf("px") && (U = parseInt(s)), -1 !== r.indexOf("px") && (V = parseInt(r)), H(["disableAt", "position"]) && I.reset(), I.add(".hc-offcanvas-nav.".concat(N), "display: block", o), I.add(".hc-nav-original.".concat(N), "display: none", o), I.add(".hc-nav-trigger.".concat(N), "display: ".concat(i && "none" !== i ? i : "block"), o), -1 !== ["left", "right"].indexOf(O.position) ? I.add(".hc-offcanvas-nav.".concat(N, " .nav-container"), "width: ".concat(s)) : I.add(".hc-offcanvas-nav.".concat(N, " .nav-container"), "height: ".concat(r)), I.add(".hc-offcanvas-nav.".concat(N, ".nav-position-left .nav-container"), "transform: translate3d(-".concat("auto" === s ? "100%" : s, ", 0, 0);")), I.add(".hc-offcanvas-nav.".concat(N, ".nav-position-right .nav-container"), "transform: translate3d(".concat("auto" === s ? "100%" : s, ", 0, 0);")), I.add(".hc-offcanvas-nav.".concat(N, ".nav-position-top .nav-container"), "transform: translate3d(0, -".concat("auto" === r ? "100%" : r, ", 0);")), I.add(".hc-offcanvas-nav.".concat(N, ".nav-position-bottom .nav-container"), "transform: translate3d(0, ".concat("auto" === r ? "100%" : r, ", 0);")), I.add(".hc-offcanvas-nav.".concat(N, ".nav-levels-overlap.nav-position-left li.level-open > .nav-wrapper"), "transform: translate3d(-".concat(O.levelSpacing, "px,0,0)"), o), I.add(".hc-offcanvas-nav.".concat(N, ".nav-levels-overlap.nav-position-right li.level-open > .nav-wrapper"), "transform: translate3d(".concat(O.levelSpacing, "px,0,0)"), o), I.add(".hc-offcanvas-nav.".concat(N, ".nav-levels-overlap.nav-position-top li.level-open > .nav-wrapper"), "transform: translate3d(0,-".concat(O.levelSpacing, "px,0)"), o), I.add(".hc-offcanvas-nav.".concat(N, ".nav-levels-overlap.nav-position-bottom li.level-open > .nav-wrapper"), "transform: translate3d(0,".concat(O.levelSpacing, "px,0)"), o), I.insert(), (!t || t && H("pushContent")) && ("string" == typeof O.pushContent ? (R = n(O.pushContent)).length || (R = null) : R = O.pushContent instanceof e ? O.pushContent : null), z.css("transition", "none");
                var a = q.hasClass(D),
                    l = ["hc-offcanvas-nav", O.navClass || "", N, O.navClass || "", "nav-levels-" + O.levelOpen || !1, "nav-position-" + O.position, O.disableBody ? "disable-body" : "", p ? "is-ios" : "", f ? "touch-device" : "", a ? D : "", O.rtl ? "rtl" : ""].join(" ");
                q.off("click").attr("class", "").attr("aria-hidden", !0).attr("aria-labelledby", N).addClass(l), O.disableBody && q.on("click", Se), t ? re() : setTimeout(re, 0);
              },
                  le = function le() {
                var e;

                B = function e(t, i) {
                  var o = [];
                  return t.each(function () {
                    var t = n(this),
                        s = {
                      id: i,
                      classes: t.attr("class") || null,
                      items: []
                    };
                    void 0 !== t.attr("data-nav-active") && (X = i, t.removeAttr("data-nav-active")), t.children("li").each(function () {
                      var t = n(this),
                          i = void 0 !== t.attr("data-nav-custom-content"),
                          o = i ? t.children() : t.children().filter(function () {
                        var e = n(this);
                        return e.is(":not(ul)") && !e.find("ul").length;
                      }).add(t.contents().filter(function () {
                        return 3 === this.nodeType && this.nodeValue.trim();
                      })),
                          r = i ? n() : t.find("ul"),
                          a = r.first().add(r.first().siblings("ul")),
                          l = null;
                      a.length && (t.data("hc-uniqid") ? l = t.data("hc-uniqid") : (l = m(), t.data("hc-uniqid", l))), void 0 !== t.attr("data-nav-active") && (X = l, t.removeAttr("data-nav-active")), s.items.push({
                        id: l,
                        classes: t.attr("class") || null,
                        content: o,
                        custom: i,
                        subnav: a.length ? e(a, l) : [],
                        highlight: void 0 !== t.attr("data-nav-highlight")
                      });
                    }), o.push(s);
                  }), o;
                }((e = i.find("ul").addBack("ul")).first().add(e.first().siblings("ul")), null);
              },
                  ce = function ce(e) {
                e && (z.empty(), Z = {}), function e(t, i, o, s, r, a) {
                  var l = n('<div class="nav-wrapper nav-wrapper-'.concat(o, '" data-level="').concat(o, '" data-index="').concat(r || 0, '">')).appendTo(i).on("click", x),
                      c = n('<div class="nav-content">').appendTo(l);
                  s && c.prepend("<h2>".concat(s, "</h2>"));

                  if (n.each(t, function (t, i) {
                    var r = n('<ul role="menu" aria-level="'.concat(o + 1, '">')).addClass(i.classes).appendTo(c);
                    0 === t && s && r.attr("aria-label", s), i.id && r.attr("aria-labelledby", "menu-" + i.id), n.each(i.items, function (t, i) {
                      var a = i.content;

                      if (i.custom) {
                        var c = n('<li class="custom-content">').addClass(i.classes).append(n('<div class="nav-item nav-item-custom">').append(a.clone(!0, !0)));
                        r.append(c);
                      } else {
                        var d = a.find("a").addBack("a"),
                            u = d.length ? d.clone(!1, !0).addClass("nav-item") : n("<".concat(i.subnav.length ? 'a href="#"' : "span", ' class="nav-item">')).append(a.clone(!0, !0)).on("click", x);
                        u.is("a") && u.attr("tabindex", "0").attr("role", "menuitem"), d.length && u.on("click", function (e) {
                          e.stopPropagation(), (n._data(d[0], "events") || {}).click && d[0].click();
                        }), "#" === u.attr("href") && u.on("click", function (e) {
                          e.preventDefault();
                        }), O.closeOnClick && (be() ? u.filter("a").filter('[data-nav-close!="false"]:not([disabled])').filter(function () {
                          var e = n(this);
                          return !i.subnav.length || e.attr("href") && "#" !== e.attr("href").charAt(0);
                        }).on("click", Se) : u.filter("a").filter('[data-nav-close!="false"]:not([disabled])').on("click", Se));
                        var p = n("<li>").addClass(i.classes).append(u).appendTo(r);

                        if (i.highlight && p.addClass("nav-highlight"), u.wrap('<div class="nav-item-wrapper">'), O.levelSpacing && ("expand" === O.levelOpen || !1 === O.levelOpen || "none" === O.levelOpen)) {
                          var f = O.levelSpacing * o;
                          f && r.css("text-indent", "".concat(f, "px"));
                        }

                        if (i.subnav.length) {
                          var h = o + 1,
                              g = i.id,
                              v = "";

                          if (Z[h] || (Z[h] = 0), p.addClass("nav-parent"), be()) {
                            var m = Z[h],
                                y = n('<input type="checkbox" id="'.concat(N, "-").concat(h, "-").concat(m, '" class="hc-chk" tabindex="-1">')).attr("data-level", h).attr("data-index", m).val(g).on("click", x).on("change", ye).prependTo(p),
                                b = function b(e) {
                              e.on("click", function () {
                                y.prop("checked", !y.prop("checked")).trigger("change");
                              }).on("keydown", function (e) {
                                "Enter" !== e.key && 13 !== e.keyCode || (Q = !0, J.push(n(this)));
                              }).attr("aria-controls", "menu-" + g).attr("aria-haspopup", "overlap" === O.levelOpen).attr("aria-expanded", !1);
                            };

                            -1 !== K.indexOf(g) && (l.addClass("sub-level-open").on("click", function () {
                              return $e(h, m);
                            }), p.addClass("level-open"), y.prop("checked", !0)), v = !0 === O.levelTitles ? a.text().trim() : "", u.attr("href") && "#" !== u.attr("href") ? b(n('<a href="#" class="nav-next" aria-label="'.concat(v, ' Submenu" role="menuitem" tabindex="0"><span>')).on("click", T()).insertAfter(u)) : (n('<span class="nav-next"><span>').appendTo(u), b(u));
                          } else u.attr("aria-expanded", !0);

                          Z[h]++, e(i.subnav, p, h, v, Z[h] - 1, s);
                        }
                      }
                    });
                  }), o && void 0 !== r && !1 !== O.insertBack && "overlap" === O.levelOpen) {
                    var d = c.children("ul"),
                        u = O.levelTitleAsBack && a || O.labelBack || "",
                        p = n('<li class="nav-back"><a href="#" role="menuitem" tabindex="0">'.concat(u, "<span></span></a></li>"));
                    p.children("a").on("click", T(function () {
                      return $e(o, r);
                    })).on("keydown", function (e) {
                      "Enter" !== e.key && 13 !== e.keyCode || (Q = !0);
                    }).wrap('<div class="nav-item-wrapper">'), !0 === O.insertBack ? d.first().prepend(p) : h(O.insertBack) && $(p, O.insertBack, d);
                  }

                  if (0 === o && !1 !== O.insertClose) {
                    var f = c.children("ul"),
                        g = n('<li class="nav-close"><a href="#" role="menuitem" tabindex="0">'.concat(O.labelClose || "", "<span></span></a></li>"));
                    g.children("a").on("click", T(Se)).on("keydown", function (e) {
                      "Enter" !== e.key && 13 !== e.keyCode || se();
                    }).wrap('<div class="nav-item-wrapper">'), !0 === O.insertClose ? f.first().prepend(g) : h(O.insertClose) && $(g, O.insertClose, f.first().add(f.first().siblings("ul")));
                  }
                }(B, z, 0, O.navTitle);
              },
                  de = function de(e) {
                return function (t) {
                  "left" != O.position && "right" != O.position || (ee = t.touches[0].clientX, te = t.touches[0].clientY, "doc" == e ? ie || (o.addEventListener("touchmove", fe, l), o.addEventListener("touchend", he, l)) : (ie = !0, z[0].addEventListener("touchmove", ge, l), z[0].addEventListener("touchend", ve, l)));
                };
              },
                  ue = function ue(e, t) {
                y(), q.css("visibility", "visible"), z.css(S("transition"), "none"), E(z, e, O.position), R && (R.css(S("transition"), "none"), E(R, t, O.position));
              },
                  pe = function pe(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                b(), z.css(S("transition"), ""), E(z, n, O.position), R && (R.css(S("transition"), ""), E(R, i, O.position)), "open" == e ? Te() : (Se(), t ? setTimeout(function () {
                  q.css("visibility", "");
                }, P) : q.css("visibility", ""));
              },
                  fe = function fe(e) {
                var t = 0 - (ee - e.touches[0].clientX),
                    n = "overlap" === O.levelOpen ? we() * O.levelSpacing : 0,
                    i = U + n;
                t = "left" == O.position ? Math.min(Math.max(t, 0), i) : Math.abs(Math.min(Math.max(t, -i), 0)), ("left" == O.position && ee < 20 || "right" == O.position && ee > a.width() - 20) && (ne = !0, ue(0 - (U - t), Math.abs(t)));
              },
                  he = function e(t) {
                if (o.removeEventListener("touchmove", fe), o.removeEventListener("touchend", e), ne) {
                  var n = t.changedTouches[t.changedTouches.length - 1],
                      i = 0 - (ee - n.clientX),
                      s = "overlap" === O.levelOpen ? we() * O.levelSpacing : 0,
                      r = U + s;
                  (i = "left" == O.position ? Math.min(Math.max(i, 0), r) : Math.abs(Math.min(Math.max(i, -r), 0))) ? pe(i > 70 ? "open" : "close") : pe("close", !1), ee = null, te = null, ne = !1;
                }
              },
                  ge = function ge(e) {
                var t = 0 - (ee - e.touches[0].clientX),
                    n = 0 - (te - e.touches[0].clientY);

                if (!(Math.abs(t) < Math.abs(n))) {
                  var i = "overlap" === O.levelOpen ? we() * O.levelSpacing : 0,
                      o = U + i;
                  t = "left" == O.position ? Math.min(Math.max(t, -o), 0) : Math.min(Math.max(t, 0), o), ("left" == O.position && t < 0 || "right" == O.position && t > 0) && (ne = !0, ue(-Math.abs(t) + i, o - Math.abs(t)));
                }
              },
                  ve = function e(t) {
                if (z[0].removeEventListener("touchmove", ge), z[0].removeEventListener("touchend", e), ie = !1, ne) {
                  var n = t.changedTouches[t.changedTouches.length - 1],
                      i = 0 - (ee - n.clientX),
                      o = "overlap" === O.levelOpen ? we() * O.levelSpacing : 0,
                      s = U + o;
                  (i = "left" == O.position ? Math.abs(Math.min(Math.max(i, -s), 0)) : Math.abs(Math.min(Math.max(i, 0), s))) == s ? pe("close", !1) : i > 50 ? pe("close") : pe("open", !0, o, s), ee = null, te = null, ne = !1;
                }
              };

              ae(), le(), ce(), !0 === O.removeOriginalNav && i.remove(), "prepend" === O.bodyInsert ? d.prepend(q) : "append" === O.bodyInsert && d.append(q), !0 === O.expanded && (_ = !0, Te()), O.swipeGestures && (z[0].addEventListener("touchstart", de("nav"), l), o.addEventListener("touchstart", de("doc"), l)), a.on("keydown", function (e) {
                if (xe() && ("Escape" === e.key || 27 === e.keyCode)) {
                  var t = we();
                  0 === t ? (Se(), se()) : ($e(t), oe(null, t - 1));
                }
              });

              var me = function me(e, t, i) {
                var o = n("#".concat(N, "-").concat(e, "-").concat(t));

                if (o.length) {
                  var s = o.val(),
                      r = o.parent("li"),
                      a = r.closest(".nav-wrapper");

                  if (o.prop("checked", !1), a.removeClass("sub-level-open"), r.removeClass("level-open"), r.children(".nav-item-wrapper").children("[aria-controls]").attr("aria-expanded", !1), -1 !== K.indexOf(s) && K.splice(K.indexOf(s), 1), i && "overlap" === O.levelOpen && (a.off("click").on("click", x), E(z, (e - 1) * O.levelSpacing, O.position), R)) {
                    var l = "x" === A(O.position) ? U : V;
                    E(R, l + (e - 1) * O.levelSpacing, O.position);
                  }
                }
              };

              c.getSettings = function () {
                return Object.assign({}, O);
              }, c.isOpen = xe, c.open = Te, c.close = Se, c.update = function (e, i) {
                if (M = [], "object" === t(e)) {
                  for (var o in e) {
                    O[o] !== e[o] && M.push(o);
                  }

                  O = n.extend({}, O, e);
                }

                if (!0 === e || !0 === i) {
                  if (O.removeOriginalNav) return void console.warn("%c! HC Offcanvas Nav:%c Can't update because original navigation has been removed. Disable `removeOriginalNav` option.", "color: #fa253b", "color: default");
                  ae(!0), le(), ce(!0);
                } else ae(!0), ce(!0);
              };
            } else console.error("%c! HC Offcanvas Nav:%c Menu must contain <ul> element.", "color: #fa253b", "color: default");

            function ye() {
              var e = n(this),
                  t = e.data("level"),
                  i = e.data("index");
              e.prop("checked") ? ke(t, i) : $e(t, i);
            }

            function be() {
              return !1 !== O.levelOpen && "none" !== O.levelOpen;
            }

            function xe() {
              return W;
            }

            function we() {
              return K.length ? z.find(".hc-chk").filter("[value=".concat(K[K.length - 1], "]")).data("level") : 0;
            }

            function Te(e, t) {
              if ((!xe() || void 0 !== t) && (function () {
                if (xe()) return;
                W = !0, q.css("visibility", "visible").attr("aria-hidden", !1).addClass(D), F.addClass("toggle-open"), "expand" === O.levelOpen && G && clearTimeout(G);
                O.disableBody && (Y = s.scrollTop() || r.scrollTop() || d.scrollTop(), u() && r.addClass("hc-nav-yscroll"), d.addClass("hc-nav-open"), Y && d.css("top", -Y));

                if (R) {
                  var e = "x" === A(O.position) ? U : V;
                  E(R, e, O.position);
                }

                if (_) return void (_ = !1);
                setTimeout(function () {
                  c.trigger("open", n.extend({}, O));
                }, P);
              }(), be())) {
                var i;

                if ("number" == typeof e && "number" == typeof t) {
                  if (!(i = n("#".concat(N, "-").concat(e, "-").concat(t))).length) return void console.warn("HC Offcanvas Nav: level ".concat(e, " doesn't have index ").concat(t));
                } else X ? (i = z.find(".hc-chk").filter("[value=".concat(X, "]")), !O.closeActiveLevel && O.closeOpenLevels || (X = null)) : !1 === O.closeOpenLevels && (i = z.find(".hc-chk").filter(":checked").last());

                if (i && i.length) {
                  var o = [];
                  e = i.data("level"), t = i.data("index"), e > 1 && (i.parents(".nav-wrapper").each(function () {
                    var e = n(this),
                        t = e.data("level");
                    t > 0 && o.push({
                      level: t,
                      index: e.data("index")
                    });
                  }), o = o.reverse()), o.push({
                    level: e,
                    index: t
                  });

                  for (var a = 0; a < o.length; a++) {
                    ke(o[a].level, o[a].index, !1);
                  }
                }
              }
            }

            function Se() {
              if (xe()) {
                if (W = !1, R && E(R, !1), q.removeClass(D).attr("aria-hidden", !0), z.removeAttr("style"), F.removeClass("toggle-open"), "expand" === O.levelOpen && -1 !== ["top", "bottom"].indexOf(O.position) ? $e(0) : be() && (G = setTimeout(function () {
                  $e(0);
                }, "expand" === O.levelOpen ? P : 0)), O.disableBody && (d.removeClass("hc-nav-open"), r.removeClass("hc-nav-yscroll"), Y)) {
                  if (d.css("top", "").scrollTop(Y), r.scrollTop(Y), "bottom" === O.position) {
                    var e = Y;
                    setTimeout(function () {
                      d.scrollTop(e), r.scrollTop(e);
                    }, 0);
                  }

                  Y = 0;
                }

                setTimeout(function () {
                  q.css("visibility", ""), c.trigger("close.$", n.extend({}, O)), c.trigger("close.once", n.extend({}, O)).off("close.once");
                }, P);
              }
            }

            function Ce(e) {
              e.preventDefault(), e.stopPropagation(), W ? Se() : Te();
            }

            function ke(e, t) {
              var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                  o = n("#".concat(N, "-").concat(e, "-").concat(t)),
                  s = o.val(),
                  r = o.parent("li"),
                  a = r.closest(".nav-wrapper"),
                  l = r.children(".nav-wrapper");

              if (!1 === i && l.css("transition", "none"), o.prop("checked", !0), a.addClass("sub-level-open"), r.addClass("level-open"), r.children(".nav-item-wrapper").children("[aria-controls]").attr("aria-expanded", !0), !1 === i && setTimeout(function () {
                l.css("transition", "");
              }, P), -1 === K.indexOf(s) && K.push(s), "overlap" === O.levelOpen && (a.on("click", function () {
                return $e(e, t);
              }), E(z, e * O.levelSpacing, O.position), R)) {
                var c = "x" === A(O.position) ? U : V;
                E(R, c + e * O.levelSpacing, O.position);
              }

              Q && (oe(0, e, t), Q = !1);
            }

            function $e(e, t) {
              for (var n = e; n <= Object.keys(Z).length; n++) {
                if (n == e && void 0 !== t) me(e, t, !0);else if (0 !== e || O.closeOpenLevels) for (var i = 0; i < Z[n]; i++) {
                  me(n, i, n == e);
                } else ;
              }

              Q && (oe(null, e - 1), Q = !1);
            }
          };

          return this.each(j);
        }
      });
    }(e, "undefined" != typeof window ? window : this);
  }).call(this, n(0));
}, function (e, t, n) {
  "use strict";

  (function (e) {
    n(5), e(".sept-count").slick({
      asNavFor: ".septic-desc",
      slidesToShow: 1,
      rows: 1
    }), e(".septic-desc").slick({
      asNavFor: ".sept-count",
      slidesToShow: 1,
      rows: 1,
      arrows: !1
    });
  }).call(this, n(0));
}, function (e, t, n) {
  var i, o, s;

  function r(e) {
    return (r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    })(e);
  }

  !function (a) {
    "use strict";

    o = [n(0)], void 0 === (s = "function" == typeof (i = function i(e) {
      var t = window.Slick || {};
      (n = 0, t = function t(_t4, i) {
        var o,
            s = this;
        s.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: e(_t4),
          appendDots: e(_t4),
          arrows: !0,
          asNavFor: null,
          prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
          nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function customPaging(t, n) {
            return e('<button type="button" />').text(n + 1);
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: .35,
          fade: !1,
          focusOnSelect: !1,
          focusOnChange: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: "ondemand",
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: "window",
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: "",
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3
        }, s.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1
        }, e.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = e(_t4), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, o = e(_t4).data("slick") || {}, s.options = e.extend({}, s.defaults, i, o), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, void 0 !== document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = e.proxy(s.autoPlay, s), s.autoPlayClear = e.proxy(s.autoPlayClear, s), s.autoPlayIterator = e.proxy(s.autoPlayIterator, s), s.changeSlide = e.proxy(s.changeSlide, s), s.clickHandler = e.proxy(s.clickHandler, s), s.selectHandler = e.proxy(s.selectHandler, s), s.setPosition = e.proxy(s.setPosition, s), s.swipeHandler = e.proxy(s.swipeHandler, s), s.dragHandler = e.proxy(s.dragHandler, s), s.keyHandler = e.proxy(s.keyHandler, s), s.instanceUid = n++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0);
      }).prototype.activateADA = function () {
        this.$slideTrack.find(".slick-active").attr({
          "aria-hidden": "false"
        }).find("a, input, button, select").attr({
          tabindex: "0"
        });
      }, t.prototype.addSlide = t.prototype.slickAdd = function (t, n, i) {
        var o = this;
        if ("boolean" == typeof n) i = n, n = null;else if (n < 0 || n >= o.slideCount) return !1;
        o.unload(), "number" == typeof n ? 0 === n && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : i ? e(t).insertBefore(o.$slides.eq(n)) : e(t).insertAfter(o.$slides.eq(n)) : !0 === i ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function (t, n) {
          e(n).attr("data-slick-index", t);
        }), o.$slidesCache = o.$slides, o.reinit();
      }, t.prototype.animateHeight = function () {
        var e = this;

        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.animate({
            height: t
          }, e.options.speed);
        }
      }, t.prototype.animateSlide = function (t, n) {
        var i = {},
            o = this;
        o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
          left: t
        }, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({
          top: t
        }, o.options.speed, o.options.easing, n) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({
          animStart: o.currentLeft
        }).animate({
          animStart: t
        }, {
          duration: o.options.speed,
          easing: o.options.easing,
          step: function step(e) {
            e = Math.ceil(e), !1 === o.options.vertical ? (i[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(i));
          },
          complete: function complete() {
            n && n.call();
          }
        })) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? i[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(i), n && setTimeout(function () {
          o.disableTransition(), n.call();
        }, o.options.speed));
      }, t.prototype.getNavTarget = function () {
        var t = this.options.asNavFor;
        return t && null !== t && (t = e(t).not(this.$slider)), t;
      }, t.prototype.asNavFor = function (t) {
        var n = this.getNavTarget();
        null !== n && "object" === r(n) && n.each(function () {
          var n = e(this).slick("getSlick");
          n.unslicked || n.slideHandler(t, !0);
        });
      }, t.prototype.applyTransition = function (e) {
        var t = this,
            n = {};
        !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
      }, t.prototype.autoPlay = function () {
        var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed));
      }, t.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer);
      }, t.prototype.autoPlayIterator = function () {
        var e = this,
            t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t));
      }, t.prototype.buildArrows = function () {
        var t = this;
        !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
          "aria-disabled": "true",
          tabindex: "-1"
        }));
      }, t.prototype.buildDots = function () {
        var t,
            n,
            i = this;

        if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
          for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) {
            n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
          }

          i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active");
        }
      }, t.prototype.buildOut = function () {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function (t, n) {
          e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "");
        }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable");
      }, t.prototype.buildRows = function () {
        var e,
            t,
            n,
            i,
            o,
            s,
            r,
            a = this;

        if (i = document.createDocumentFragment(), s = a.$slider.children(), a.options.rows > 0) {
          for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(s.length / r), e = 0; e < o; e++) {
            var l = document.createElement("div");

            for (t = 0; t < a.options.rows; t++) {
              var c = document.createElement("div");

              for (n = 0; n < a.options.slidesPerRow; n++) {
                var d = e * r + (t * a.options.slidesPerRow + n);
                s.get(d) && c.appendChild(s.get(d));
              }

              l.appendChild(c);
            }

            i.appendChild(l);
          }

          a.$slider.empty().append(i), a.$slider.children().children().children().css({
            width: 100 / a.options.slidesPerRow + "%",
            display: "inline-block"
          });
        }
      }, t.prototype.checkResponsive = function (t, n) {
        var i,
            o,
            s,
            r = this,
            a = !1,
            l = r.$slider.width(),
            c = window.innerWidth || e(window).width();

        if ("window" === r.respondTo ? s = c : "slider" === r.respondTo ? s = l : "min" === r.respondTo && (s = Math.min(c, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
          for (i in o = null, r.breakpoints) {
            r.breakpoints.hasOwnProperty(i) && (!1 === r.originalSettings.mobileFirst ? s < r.breakpoints[i] && (o = r.breakpoints[i]) : s > r.breakpoints[i] && (o = r.breakpoints[i]));
          }

          null !== o ? null !== r.activeBreakpoint ? (o !== r.activeBreakpoint || n) && (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = o) : (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = o) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t), a = o), t || !1 === a || r.$slider.trigger("breakpoint", [r, a]);
        }
      }, t.prototype.changeSlide = function (t, n) {
        var i,
            o,
            s = this,
            r = e(t.currentTarget);

        switch (r.is("a") && t.preventDefault(), r.is("li") || (r = r.closest("li")), i = s.slideCount % s.options.slidesToScroll != 0 ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, t.data.message) {
          case "previous":
            o = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, n);
            break;

          case "next":
            o = 0 === i ? s.options.slidesToScroll : i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, n);
            break;

          case "index":
            var a = 0 === t.data.index ? 0 : t.data.index || r.index() * s.options.slidesToScroll;
            s.slideHandler(s.checkNavigable(a), !1, n), r.children().trigger("focus");
            break;

          default:
            return;
        }
      }, t.prototype.checkNavigable = function (e) {
        var t, n;
        if (n = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];else for (var i in t) {
          if (e < t[i]) {
            e = n;
            break;
          }

          n = t[i];
        }
        return e;
      }, t.prototype.cleanUpEvents = function () {
        var t = this;
        t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition);
      }, t.prototype.cleanUpSlideEvents = function () {
        var t = this;
        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1));
      }, t.prototype.cleanUpRows = function () {
        var e,
            t = this;
        t.options.rows > 0 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e));
      }, t.prototype.clickHandler = function (e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault());
      }, t.prototype.destroy = function (t) {
        var n = this;
        n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
          e(this).attr("style", e(this).data("originalStyling"));
        }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, t || n.$slider.trigger("destroy", [n]);
      }, t.prototype.disableTransition = function (e) {
        var t = this,
            n = {};
        n[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
      }, t.prototype.fadeSlide = function (e, t) {
        var n = this;
        !1 === n.cssTransitions ? (n.$slides.eq(e).css({
          zIndex: n.options.zIndex
        }), n.$slides.eq(e).animate({
          opacity: 1
        }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
          opacity: 1,
          zIndex: n.options.zIndex
        }), t && setTimeout(function () {
          n.disableTransition(e), t.call();
        }, n.options.speed));
      }, t.prototype.fadeSlideOut = function (e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
          opacity: 0,
          zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
          opacity: 0,
          zIndex: t.options.zIndex - 2
        }));
      }, t.prototype.filterSlides = t.prototype.slickFilter = function (e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit());
      }, t.prototype.focusHandler = function () {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick", "*", function (n) {
          var i = e(this);
          setTimeout(function () {
            t.options.pauseOnFocus && i.is(":focus") && (t.focussed = !0, t.autoPlay());
          }, 0);
        }).on("blur.slick", "*", function (n) {
          e(this);
          t.options.pauseOnFocus && (t.focussed = !1, t.autoPlay());
        });
      }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
        return this.currentSlide;
      }, t.prototype.getDotCount = function () {
        var e = this,
            t = 0,
            n = 0,
            i = 0;
        if (!0 === e.options.infinite) {
          if (e.slideCount <= e.options.slidesToShow) ++i;else for (; t < e.slideCount;) {
            ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
          }
        } else if (!0 === e.options.centerMode) i = e.slideCount;else if (e.options.asNavFor) for (; t < e.slideCount;) {
          ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        } else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return i - 1;
      }, t.prototype.getLeft = function (e) {
        var t,
            n,
            i,
            o,
            s = this,
            r = 0;
        return s.slideOffset = 0, n = s.$slides.first().outerHeight(!0), !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, o = -1, !0 === s.options.vertical && !0 === s.options.centerMode && (2 === s.options.slidesToShow ? o = -1.5 : 1 === s.options.slidesToShow && (o = -2)), r = n * s.options.slidesToShow * o), s.slideCount % s.options.slidesToScroll != 0 && e + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (e > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (e - s.slideCount)) * s.slideWidth * -1, r = (s.options.slidesToShow - (e - s.slideCount)) * n * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, r = s.slideCount % s.options.slidesToScroll * n * -1))) : e + s.options.slidesToShow > s.slideCount && (s.slideOffset = (e + s.options.slidesToShow - s.slideCount) * s.slideWidth, r = (e + s.options.slidesToShow - s.slideCount) * n), s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0, r = 0), !0 === s.options.centerMode && s.slideCount <= s.options.slidesToShow ? s.slideOffset = s.slideWidth * Math.floor(s.options.slidesToShow) / 2 - s.slideWidth * s.slideCount / 2 : !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), t = !1 === s.options.vertical ? e * s.slideWidth * -1 + s.slideOffset : e * n * -1 + r, !0 === s.options.variableWidth && (i = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow), t = !0 === s.options.rtl ? i[0] ? -1 * (s.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === s.options.centerMode && (i = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow + 1), t = !0 === s.options.rtl ? i[0] ? -1 * (s.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (s.$list.width() - i.outerWidth()) / 2)), t;
      }, t.prototype.getOption = t.prototype.slickGetOption = function (e) {
        return this.options[e];
      }, t.prototype.getNavigableIndexes = function () {
        var e,
            t = this,
            n = 0,
            i = 0,
            o = [];

        for (!1 === t.options.infinite ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); n < e;) {
          o.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        }

        return o;
      }, t.prototype.getSlick = function () {
        return this;
      }, t.prototype.getSlideCount = function () {
        var t,
            n,
            i,
            o = this;
        return i = !0 === o.options.centerMode ? Math.floor(o.$list.width() / 2) : 0, n = -1 * o.swipeLeft + i, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (i, s) {
          var r, a;
          if (r = e(s).outerWidth(), a = s.offsetLeft, !0 !== o.options.centerMode && (a += r / 2), n < a + r) return t = s, !1;
        }), Math.abs(e(t).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll;
      }, t.prototype.goTo = t.prototype.slickGoTo = function (e, t) {
        this.changeSlide({
          data: {
            message: "index",
            index: parseInt(e)
          }
        }, t);
      }, t.prototype.init = function (t) {
        var n = this;
        e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), t && n.$slider.trigger("init", [n]), !0 === n.options.accessibility && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay());
      }, t.prototype.initADA = function () {
        var t = this,
            n = Math.ceil(t.slideCount / t.options.slidesToShow),
            i = t.getNavigableIndexes().filter(function (e) {
          return e >= 0 && e < t.slideCount;
        });
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
          "aria-hidden": "true",
          tabindex: "-1"
        }).find("a, input, button, select").attr({
          tabindex: "-1"
        }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (n) {
          var o = i.indexOf(n);

          if (e(this).attr({
            role: "tabpanel",
            id: "slick-slide" + t.instanceUid + n,
            tabindex: -1
          }), -1 !== o) {
            var s = "slick-slide-control" + t.instanceUid + o;
            e("#" + s).length && e(this).attr({
              "aria-describedby": s
            });
          }
        }), t.$dots.attr("role", "tablist").find("li").each(function (o) {
          var s = i[o];
          e(this).attr({
            role: "presentation"
          }), e(this).find("button").first().attr({
            role: "tab",
            id: "slick-slide-control" + t.instanceUid + o,
            "aria-controls": "slick-slide" + t.instanceUid + s,
            "aria-label": o + 1 + " of " + n,
            "aria-selected": null,
            tabindex: "-1"
          });
        }).eq(t.currentSlide).find("button").attr({
          "aria-selected": "true",
          tabindex: "0"
        }).end());

        for (var o = t.currentSlide, s = o + t.options.slidesToShow; o < s; o++) {
          t.options.focusOnChange ? t.$slides.eq(o).attr({
            tabindex: "0"
          }) : t.$slides.eq(o).removeAttr("tabindex");
        }

        t.activateADA();
      }, t.prototype.initArrowEvents = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
          message: "previous"
        }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
          message: "next"
        }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)));
      }, t.prototype.initDotEvents = function () {
        var t = this;
        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && (e("li", t.$dots).on("click.slick", {
          message: "index"
        }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1));
      }, t.prototype.initSlideEvents = function () {
        var t = this;
        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)));
      }, t.prototype.initializeEvents = function () {
        var t = this;
        t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
          action: "start"
        }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
          action: "move"
        }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
          action: "end"
        }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
          action: "end"
        }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition);
      }, t.prototype.initUI = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show();
      }, t.prototype.keyHandler = function (e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
          data: {
            message: !0 === t.options.rtl ? "next" : "previous"
          }
        }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
          data: {
            message: !0 === t.options.rtl ? "previous" : "next"
          }
        }));
      }, t.prototype.lazyLoad = function () {
        var t,
            n,
            i,
            o = this;

        function s(t) {
          e("img[data-lazy]", t).each(function () {
            var t = e(this),
                n = e(this).attr("data-lazy"),
                i = e(this).attr("data-srcset"),
                s = e(this).attr("data-sizes") || o.$slider.attr("data-sizes"),
                r = document.createElement("img");
            r.onload = function () {
              t.animate({
                opacity: 0
              }, 100, function () {
                i && (t.attr("srcset", i), s && t.attr("sizes", s)), t.attr("src", n).animate({
                  opacity: 1
                }, 200, function () {
                  t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                }), o.$slider.trigger("lazyLoaded", [o, t, n]);
              });
            }, r.onerror = function () {
              t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, t, n]);
            }, r.src = n;
          });
        }

        if (!0 === o.options.centerMode ? !0 === o.options.infinite ? i = (n = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (n = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), i = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (n = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, i = Math.ceil(n + o.options.slidesToShow), !0 === o.options.fade && (n > 0 && n--, i <= o.slideCount && i++)), t = o.$slider.find(".slick-slide").slice(n, i), "anticipated" === o.options.lazyLoad) for (var r = n - 1, a = i, l = o.$slider.find(".slick-slide"), c = 0; c < o.options.slidesToScroll; c++) {
          r < 0 && (r = o.slideCount - 1), t = (t = t.add(l.eq(r))).add(l.eq(a)), r--, a++;
        }
        s(t), o.slideCount <= o.options.slidesToShow ? s(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? s(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && s(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow));
      }, t.prototype.loadSlider = function () {
        var e = this;
        e.setPosition(), e.$slideTrack.css({
          opacity: 1
        }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad();
      }, t.prototype.next = t.prototype.slickNext = function () {
        this.changeSlide({
          data: {
            message: "next"
          }
        });
      }, t.prototype.orientationChange = function () {
        this.checkResponsive(), this.setPosition();
      }, t.prototype.pause = t.prototype.slickPause = function () {
        this.autoPlayClear(), this.paused = !0;
      }, t.prototype.play = t.prototype.slickPlay = function () {
        var e = this;
        e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1;
      }, t.prototype.postSlide = function (t) {
        var n = this;
        n.unslicked || (n.$slider.trigger("afterChange", [n, t]), n.animating = !1, n.slideCount > n.options.slidesToShow && n.setPosition(), n.swipeLeft = null, n.options.autoplay && n.autoPlay(), !0 === n.options.accessibility && (n.initADA(), n.options.focusOnChange && e(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()));
      }, t.prototype.prev = t.prototype.slickPrev = function () {
        this.changeSlide({
          data: {
            message: "previous"
          }
        });
      }, t.prototype.preventDefault = function (e) {
        e.preventDefault();
      }, t.prototype.progressiveLazyLoad = function (t) {
        t = t || 1;
        var n,
            i,
            o,
            s,
            r,
            a = this,
            l = e("img[data-lazy]", a.$slider);
        l.length ? (n = l.first(), i = n.attr("data-lazy"), o = n.attr("data-srcset"), s = n.attr("data-sizes") || a.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
          o && (n.attr("srcset", o), s && n.attr("sizes", s)), n.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, n, i]), a.progressiveLazyLoad();
        }, r.onerror = function () {
          t < 3 ? setTimeout(function () {
            a.progressiveLazyLoad(t + 1);
          }, 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, n, i]), a.progressiveLazyLoad());
        }, r.src = i) : a.$slider.trigger("allImagesLoaded", [a]);
      }, t.prototype.refresh = function (t) {
        var n,
            i,
            o = this;
        i = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > i && (o.currentSlide = i), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), n = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, {
          currentSlide: n
        }), o.init(), t || o.changeSlide({
          data: {
            message: "index",
            index: n
          }
        }, !1);
      }, t.prototype.registerBreakpoints = function () {
        var t,
            n,
            i,
            o = this,
            s = o.options.responsive || null;

        if ("array" === e.type(s) && s.length) {
          for (t in o.respondTo = o.options.respondTo || "window", s) {
            if (i = o.breakpoints.length - 1, s.hasOwnProperty(t)) {
              for (n = s[t].breakpoint; i >= 0;) {
                o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1), i--;
              }

              o.breakpoints.push(n), o.breakpointSettings[n] = s[t].settings;
            }
          }

          o.breakpoints.sort(function (e, t) {
            return o.options.mobileFirst ? e - t : t - e;
          });
        }
      }, t.prototype.reinit = function () {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t]);
      }, t.prototype.resize = function () {
        var t = this;
        e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function () {
          t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition();
        }, 50));
      }, t.prototype.removeSlide = t.prototype.slickRemove = function (e, t, n) {
        var i = this;
        if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : i.slideCount - 1 : !0 === t ? --e : e, i.slideCount < 1 || e < 0 || e > i.slideCount - 1) return !1;
        i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit();
      }, t.prototype.setCSS = function (e) {
        var t,
            n,
            i = this,
            o = {};
        !0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, !1 === i.transformsEnabled ? i.$slideTrack.css(o) : (o = {}, !1 === i.cssTransitions ? (o[i.animType] = "translate(" + t + ", " + n + ")", i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", i.$slideTrack.css(o)));
      }, t.prototype.setDimensions = function () {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
          padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
          padding: e.options.centerPadding + " 0px"
        })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t);
      }, t.prototype.setFade = function () {
        var t,
            n = this;
        n.$slides.each(function (i, o) {
          t = n.slideWidth * i * -1, !0 === n.options.rtl ? e(o).css({
            position: "relative",
            right: t,
            top: 0,
            zIndex: n.options.zIndex - 2,
            opacity: 0
          }) : e(o).css({
            position: "relative",
            left: t,
            top: 0,
            zIndex: n.options.zIndex - 2,
            opacity: 0
          });
        }), n.$slides.eq(n.currentSlide).css({
          zIndex: n.options.zIndex - 1,
          opacity: 1
        });
      }, t.prototype.setHeight = function () {
        var e = this;

        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.css("height", t);
        }
      }, t.prototype.setOption = t.prototype.slickSetOption = function () {
        var t,
            n,
            i,
            o,
            s,
            r = this,
            a = !1;
        if ("object" === e.type(arguments[0]) ? (i = arguments[0], a = arguments[1], s = "multiple") : "string" === e.type(arguments[0]) && (i = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")), "single" === s) r.options[i] = o;else if ("multiple" === s) e.each(i, function (e, t) {
          r.options[e] = t;
        });else if ("responsive" === s) for (n in o) {
          if ("array" !== e.type(r.options.responsive)) r.options.responsive = [o[n]];else {
            for (t = r.options.responsive.length - 1; t >= 0;) {
              r.options.responsive[t].breakpoint === o[n].breakpoint && r.options.responsive.splice(t, 1), t--;
            }

            r.options.responsive.push(o[n]);
          }
        }
        a && (r.unload(), r.reinit());
      }, t.prototype.setPosition = function () {
        var e = this;
        e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e]);
      }, t.prototype.setProps = function () {
        var e = this,
            t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType;
      }, t.prototype.setSlideClasses = function (e) {
        var t,
            n,
            i,
            o,
            s = this;

        if (n = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(e).addClass("slick-current"), !0 === s.options.centerMode) {
          var r = s.options.slidesToShow % 2 == 0 ? 1 : 0;
          t = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (e >= t && e <= s.slideCount - 1 - t ? s.$slides.slice(e - t + r, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = s.options.slidesToShow + e, n.slice(i - t + 1 + r, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - s.options.slidesToShow).addClass("slick-center") : e === s.slideCount - 1 && n.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(e).addClass("slick-center");
        } else e >= 0 && e <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(e, e + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= s.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, i = !0 === s.options.infinite ? s.options.slidesToShow + e : e, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow ? n.slice(i - (s.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));

        "ondemand" !== s.options.lazyLoad && "anticipated" !== s.options.lazyLoad || s.lazyLoad();
      }, t.prototype.setupInfinite = function () {
        var t,
            n,
            i,
            o = this;

        if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (n = null, o.slideCount > o.options.slidesToShow)) {
          for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1) {
            n = t - 1, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
          }

          for (t = 0; t < i + o.slideCount; t += 1) {
            n = t, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
          }

          o.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
            e(this).attr("id", "");
          });
        }
      }, t.prototype.interrupt = function (e) {
        e || this.autoPlay(), this.interrupted = e;
      }, t.prototype.selectHandler = function (t) {
        var n = this,
            i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
            o = parseInt(i.attr("data-slick-index"));
        o || (o = 0), n.slideCount <= n.options.slidesToShow ? n.slideHandler(o, !1, !0) : n.slideHandler(o);
      }, t.prototype.slideHandler = function (e, t, n) {
        var i,
            o,
            s,
            r,
            a,
            l,
            c = this;
        if (t = t || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e)) if (!1 === t && c.asNavFor(e), i = e, a = c.getLeft(i), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(r, function () {
          c.postSlide(i);
        }) : c.postSlide(i));else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(r, function () {
          c.postSlide(i);
        }) : c.postSlide(i));else {
          if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = i < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), s = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (l = (l = c.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== n ? (c.fadeSlideOut(s), c.fadeSlide(o, function () {
            c.postSlide(o);
          })) : c.postSlide(o), void c.animateHeight();
          !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(a, function () {
            c.postSlide(o);
          }) : c.postSlide(o);
        }
      }, t.prototype.startLoad = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading");
      }, t.prototype.swipeDirection = function () {
        var e,
            t,
            n,
            i,
            o = this;
        return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(t, e), (i = Math.round(180 * n / Math.PI)) < 0 && (i = 360 - Math.abs(i)), i <= 45 && i >= 0 || i <= 360 && i >= 315 ? !1 === o.options.rtl ? "left" : "right" : i >= 135 && i <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? i >= 35 && i <= 135 ? "down" : "up" : "vertical";
      }, t.prototype.swipeEnd = function (e) {
        var t,
            n,
            i = this;
        if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1, !1;
        if (i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1;

        if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
          switch (n = i.swipeDirection()) {
            case "left":
            case "down":
              t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
              break;

            case "right":
            case "up":
              t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1;
          }

          "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]));
        } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {});
      }, t.prototype.swipeHandler = function (e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
          case "start":
            t.swipeStart(e);
            break;

          case "move":
            t.swipeMove(e);
            break;

          case "end":
            t.swipeEnd(e);
        }
      }, t.prototype.swipeMove = function (e) {
        var t,
            n,
            i,
            o,
            s,
            r,
            a = this;
        return s = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || s && 1 !== s.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX, a.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && r > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r), n = a.swipeDirection(), void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, e.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), i = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (i = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + i * o : a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))));
      }, t.prototype.swipeStart = function (e) {
        var t,
            n = this;
        if (n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return n.touchObject = {}, !1;
        void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, n.dragging = !0;
      }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit());
      }, t.prototype.unload = function () {
        var t = this;
        e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
      }, t.prototype.unslick = function (e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]), t.destroy();
      }, t.prototype.updateArrows = function () {
        var e = this;
        Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode || e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode) && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
      }, t.prototype.updateDots = function () {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"));
      }, t.prototype.visibility = function () {
        var e = this;
        e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1);
      }, e.fn.slick = function () {
        var e,
            n,
            i = this,
            o = arguments[0],
            s = Array.prototype.slice.call(arguments, 1),
            a = i.length;

        for (e = 0; e < a; e++) {
          if ("object" == r(o) || void 0 === o ? i[e].slick = new t(i[e], o) : n = i[e].slick[o].apply(i[e].slick, s), void 0 !== n) return n;
        }

        return i;
      };
      var n;
    }) ? i.apply(t, o) : i) || (e.exports = s);
  }();
}, function (e, t, n) {
  (function (e) {
    !function (e, t, n, i) {
      "use strict";

      if (e.console = e.console || {
        info: function info(e) {}
      }, n) if (n.fn.fancybox) console.info("fancyBox already initialized");else {
        var o,
            s,
            r = {
          closeExisting: !1,
          loop: !1,
          gutter: 50,
          keyboard: !0,
          preventCaptionOverlap: !0,
          arrows: !0,
          infobar: !0,
          smallBtn: "auto",
          toolbar: "auto",
          buttons: ["zoom", "slideShow", "thumbs", "close"],
          idleTime: 3,
          protect: !1,
          modal: !1,
          image: {
            preload: !1
          },
          ajax: {
            settings: {
              data: {
                fancybox: !0
              }
            }
          },
          iframe: {
            tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
            preload: !0,
            css: {},
            attr: {
              scrolling: "auto"
            }
          },
          video: {
            tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
            format: "",
            autoStart: !0
          },
          defaultType: "image",
          animationEffect: "zoom",
          animationDuration: 366,
          zoomOpacity: "auto",
          transitionEffect: "fade",
          transitionDuration: 366,
          slideClass: "",
          baseClass: "",
          baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
          spinnerTpl: '<div class="fancybox-loading"></div>',
          errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
          btnTpl: {
            download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
            zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
            close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
            arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
            arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
            smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
          },
          parentEl: "body",
          hideScrollbar: !0,
          autoFocus: !0,
          backFocus: !0,
          trapFocus: !0,
          fullScreen: {
            autoStart: !1
          },
          touch: {
            vertical: !0,
            momentum: !0
          },
          hash: null,
          media: {},
          slideShow: {
            autoStart: !1,
            speed: 3e3
          },
          thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y"
          },
          wheel: "auto",
          onInit: n.noop,
          beforeLoad: n.noop,
          afterLoad: n.noop,
          beforeShow: n.noop,
          afterShow: n.noop,
          beforeClose: n.noop,
          afterClose: n.noop,
          onActivate: n.noop,
          onDeactivate: n.noop,
          clickContent: function clickContent(e, t) {
            return "image" === e.type && "zoom";
          },
          clickSlide: "close",
          clickOutside: "close",
          dblclickContent: !1,
          dblclickSlide: !1,
          dblclickOutside: !1,
          mobile: {
            preventCaptionOverlap: !1,
            idleTime: !1,
            clickContent: function clickContent(e, t) {
              return "image" === e.type && "toggleControls";
            },
            clickSlide: function clickSlide(e, t) {
              return "image" === e.type ? "toggleControls" : "close";
            },
            dblclickContent: function dblclickContent(e, t) {
              return "image" === e.type && "zoom";
            },
            dblclickSlide: function dblclickSlide(e, t) {
              return "image" === e.type && "zoom";
            }
          },
          lang: "en",
          i18n: {
            en: {
              CLOSE: "Close",
              NEXT: "Next",
              PREV: "Previous",
              ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
              PLAY_START: "Start slideshow",
              PLAY_STOP: "Pause slideshow",
              FULL_SCREEN: "Full screen",
              THUMBS: "Thumbnails",
              DOWNLOAD: "Download",
              SHARE: "Share",
              ZOOM: "Zoom"
            },
            de: {
              CLOSE: "Schlie&szlig;en",
              NEXT: "Weiter",
              PREV: "Zur&uuml;ck",
              ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
              PLAY_START: "Diaschau starten",
              PLAY_STOP: "Diaschau beenden",
              FULL_SCREEN: "Vollbild",
              THUMBS: "Vorschaubilder",
              DOWNLOAD: "Herunterladen",
              SHARE: "Teilen",
              ZOOM: "Vergr&ouml;&szlig;ern"
            }
          }
        },
            a = n(e),
            l = n(t),
            c = 0,
            d = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || function (t) {
          return e.setTimeout(t, 1e3 / 60);
        },
            u = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.mozCancelAnimationFrame || e.oCancelAnimationFrame || function (t) {
          e.clearTimeout(t);
        },
            p = function () {
          var e,
              n = t.createElement("fakeelement"),
              i = {
            transition: "transitionend",
            OTransition: "oTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd"
          };

          for (e in i) {
            if (void 0 !== n.style[e]) return i[e];
          }

          return "transitionend";
        }(),
            f = function f(e) {
          return e && e.length && e[0].offsetHeight;
        },
            h = function h(e, t) {
          var i = n.extend(!0, {}, e, t);
          return n.each(t, function (e, t) {
            n.isArray(t) && (i[e] = t);
          }), i;
        },
            g = function g(e, t, i) {
          this.opts = h({
            index: i
          }, n.fancybox.defaults), n.isPlainObject(t) && (this.opts = h(this.opts, t)), n.fancybox.isMobile && (this.opts = h(this.opts, this.opts.mobile)), this.id = this.opts.id || ++c, this.currIndex = parseInt(this.opts.index, 10) || 0, this.prevIndex = null, this.prevPos = null, this.currPos = 0, this.firstRun = !0, this.group = [], this.slides = {}, this.addContent(e), this.group.length && this.init();
        };

        n.extend(g.prototype, {
          init: function init() {
            var i,
                o,
                s = this,
                r = s.group[s.currIndex].opts;
            r.closeExisting && n.fancybox.close(!0), n("body").addClass("fancybox-active"), !n.fancybox.getInstance() && !1 !== r.hideScrollbar && !n.fancybox.isMobile && t.body.scrollHeight > e.innerHeight && (n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (e.innerWidth - t.documentElement.clientWidth) + "px;}</style>"), n("body").addClass("compensate-for-scrollbar")), o = "", n.each(r.buttons, function (e, t) {
              o += r.btnTpl[t] || "";
            }), i = n(s.translate(s, r.baseTpl.replace("{{buttons}}", o).replace("{{arrows}}", r.btnTpl.arrowLeft + r.btnTpl.arrowRight))).attr("id", "fancybox-container-" + s.id).addClass(r.baseClass).data("FancyBox", s).appendTo(r.parentEl), s.$refs = {
              container: i
            }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (e) {
              s.$refs[e] = i.find(".fancybox-" + e);
            }), s.trigger("onInit"), s.activate(), s.jumpTo(s.currIndex);
          },
          translate: function translate(e, t) {
            var n = e.opts.i18n[e.opts.lang] || e.opts.i18n.en;
            return t.replace(/\{\{(\w+)\}\}/g, function (e, t) {
              return void 0 === n[t] ? e : n[t];
            });
          },
          addContent: function addContent(e) {
            var t,
                i = this,
                o = n.makeArray(e);
            n.each(o, function (e, t) {
              var o,
                  s,
                  r,
                  a,
                  l,
                  c = {},
                  d = {};
              n.isPlainObject(t) ? (c = t, d = t.opts || t) : "object" === n.type(t) && n(t).length ? (d = (o = n(t)).data() || {}, (d = n.extend(!0, {}, d, d.options)).$orig = o, c.src = i.opts.src || d.src || o.attr("href"), c.type || c.src || (c.type = "inline", c.src = t)) : c = {
                type: "html",
                src: t + ""
              }, c.opts = n.extend(!0, {}, i.opts, d), n.isArray(d.buttons) && (c.opts.buttons = d.buttons), n.fancybox.isMobile && c.opts.mobile && (c.opts = h(c.opts, c.opts.mobile)), s = c.type || c.opts.type, a = c.src || "", !s && a && ((r = a.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (s = "video", c.opts.video.format || (c.opts.video.format = "video/" + ("ogv" === r[1] ? "ogg" : r[1]))) : a.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s = "image" : a.match(/\.(pdf)((\?|#).*)?$/i) ? (s = "iframe", c = n.extend(!0, c, {
                contentType: "pdf",
                opts: {
                  iframe: {
                    preload: !1
                  }
                }
              })) : "#" === a.charAt(0) && (s = "inline")), s ? c.type = s : i.trigger("objectNeedsType", c), c.contentType || (c.contentType = n.inArray(c.type, ["html", "inline", "ajax"]) > -1 ? "html" : c.type), c.index = i.group.length, "auto" == c.opts.smallBtn && (c.opts.smallBtn = n.inArray(c.type, ["html", "inline", "ajax"]) > -1), "auto" === c.opts.toolbar && (c.opts.toolbar = !c.opts.smallBtn), c.$thumb = c.opts.$thumb || null, c.opts.$trigger && c.index === i.opts.index && (c.$thumb = c.opts.$trigger.find("img:first"), c.$thumb.length && (c.opts.$orig = c.opts.$trigger)), c.$thumb && c.$thumb.length || !c.opts.$orig || (c.$thumb = c.opts.$orig.find("img:first")), c.$thumb && !c.$thumb.length && (c.$thumb = null), c.thumb = c.opts.thumb || (c.$thumb ? c.$thumb[0].src : null), "function" === n.type(c.opts.caption) && (c.opts.caption = c.opts.caption.apply(t, [i, c])), "function" === n.type(i.opts.caption) && (c.opts.caption = i.opts.caption.apply(t, [i, c])), c.opts.caption instanceof n || (c.opts.caption = void 0 === c.opts.caption ? "" : c.opts.caption + ""), "ajax" === c.type && (l = a.split(/\s+/, 2)).length > 1 && (c.src = l.shift(), c.opts.filter = l.shift()), c.opts.modal && (c.opts = n.extend(!0, c.opts, {
                trapFocus: !0,
                infobar: 0,
                toolbar: 0,
                smallBtn: 0,
                keyboard: 0,
                slideShow: 0,
                fullScreen: 0,
                thumbs: 0,
                touch: 0,
                clickContent: !1,
                clickSlide: !1,
                clickOutside: !1,
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1
              })), i.group.push(c);
            }), Object.keys(i.slides).length && (i.updateControls(), (t = i.Thumbs) && t.isActive && (t.create(), t.focus()));
          },
          addEvents: function addEvents() {
            var t = this;
            t.removeEvents(), t.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (e) {
              e.stopPropagation(), e.preventDefault(), t.close(e);
            }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (e) {
              e.stopPropagation(), e.preventDefault(), t.previous();
            }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (e) {
              e.stopPropagation(), e.preventDefault(), t.next();
            }).on("click.fb", "[data-fancybox-zoom]", function (e) {
              t[t.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
            }), a.on("orientationchange.fb resize.fb", function (e) {
              e && e.originalEvent && "resize" === e.originalEvent.type ? (t.requestId && u(t.requestId), t.requestId = d(function () {
                t.update(e);
              })) : (t.current && "iframe" === t.current.type && t.$refs.stage.hide(), setTimeout(function () {
                t.$refs.stage.show(), t.update(e);
              }, n.fancybox.isMobile ? 600 : 250));
            }), l.on("keydown.fb", function (e) {
              var i = (n.fancybox ? n.fancybox.getInstance() : null).current,
                  o = e.keyCode || e.which;

              if (9 != o) {
                if (!(!i.opts.keyboard || e.ctrlKey || e.altKey || e.shiftKey || n(e.target).is("input,textarea,video,audio,select"))) return 8 === o || 27 === o ? (e.preventDefault(), void t.close(e)) : 37 === o || 38 === o ? (e.preventDefault(), void t.previous()) : 39 === o || 40 === o ? (e.preventDefault(), void t.next()) : void t.trigger("afterKeydown", e, o);
              } else i.opts.trapFocus && t.focus(e);
            }), t.group[t.currIndex].opts.idleTime && (t.idleSecondsCounter = 0, l.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (e) {
              t.idleSecondsCounter = 0, t.isIdle && t.showControls(), t.isIdle = !1;
            }), t.idleInterval = e.setInterval(function () {
              t.idleSecondsCounter++, t.idleSecondsCounter >= t.group[t.currIndex].opts.idleTime && !t.isDragging && (t.isIdle = !0, t.idleSecondsCounter = 0, t.hideControls());
            }, 1e3));
          },
          removeEvents: function removeEvents() {
            a.off("orientationchange.fb resize.fb"), l.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), this.idleInterval && (e.clearInterval(this.idleInterval), this.idleInterval = null);
          },
          previous: function previous(e) {
            return this.jumpTo(this.currPos - 1, e);
          },
          next: function next(e) {
            return this.jumpTo(this.currPos + 1, e);
          },
          jumpTo: function jumpTo(e, t) {
            var i,
                o,
                s,
                r,
                a,
                l,
                c,
                d,
                u,
                p = this,
                h = p.group.length;

            if (!(p.isDragging || p.isClosing || p.isAnimating && p.firstRun)) {
              if (e = parseInt(e, 10), !(s = p.current ? p.current.opts.loop : p.opts.loop) && (e < 0 || e >= h)) return !1;
              if (i = p.firstRun = !Object.keys(p.slides).length, a = p.current, p.prevIndex = p.currIndex, p.prevPos = p.currPos, r = p.createSlide(e), h > 1 && ((s || r.index < h - 1) && p.createSlide(e + 1), (s || r.index > 0) && p.createSlide(e - 1)), p.current = r, p.currIndex = r.index, p.currPos = r.pos, p.trigger("beforeShow", i), p.updateControls(), r.forcedDuration = void 0, n.isNumeric(t) ? r.forcedDuration = t : t = r.opts[i ? "animationDuration" : "transitionDuration"], t = parseInt(t, 10), o = p.isMoved(r), r.$slide.addClass("fancybox-slide--current"), i) return r.opts.animationEffect && t && p.$refs.container.css("transition-duration", t + "ms"), p.$refs.container.addClass("fancybox-is-open").trigger("focus"), p.loadSlide(r), void p.preload("image");
              l = n.fancybox.getTranslate(a.$slide), c = n.fancybox.getTranslate(p.$refs.stage), n.each(p.slides, function (e, t) {
                n.fancybox.stop(t.$slide, !0);
              }), a.pos !== r.pos && (a.isComplete = !1), a.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), o ? (u = l.left - (a.pos * l.width + a.pos * a.opts.gutter), n.each(p.slides, function (e, i) {
                i.$slide.removeClass("fancybox-animated").removeClass(function (e, t) {
                  return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                });
                var o = i.pos * l.width + i.pos * i.opts.gutter;
                n.fancybox.setTranslate(i.$slide, {
                  top: 0,
                  left: o - c.left + u
                }), i.pos !== r.pos && i.$slide.addClass("fancybox-slide--" + (i.pos > r.pos ? "next" : "previous")), f(i.$slide), n.fancybox.animate(i.$slide, {
                  top: 0,
                  left: (i.pos - r.pos) * l.width + (i.pos - r.pos) * i.opts.gutter
                }, t, function () {
                  i.$slide.css({
                    transform: "",
                    opacity: ""
                  }).removeClass("fancybox-slide--next fancybox-slide--previous"), i.pos === p.currPos && p.complete();
                });
              })) : t && r.opts.transitionEffect && (d = "fancybox-animated fancybox-fx-" + r.opts.transitionEffect, a.$slide.addClass("fancybox-slide--" + (a.pos > r.pos ? "next" : "previous")), n.fancybox.animate(a.$slide, d, t, function () {
                a.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous");
              }, !1)), r.isLoaded ? p.revealContent(r) : p.loadSlide(r), p.preload("image");
            }
          },
          createSlide: function createSlide(e) {
            var t, i;
            return i = (i = e % this.group.length) < 0 ? this.group.length + i : i, !this.slides[e] && this.group[i] && (t = n('<div class="fancybox-slide"></div>').appendTo(this.$refs.stage), this.slides[e] = n.extend(!0, {}, this.group[i], {
              pos: e,
              $slide: t,
              isLoaded: !1
            }), this.updateSlide(this.slides[e])), this.slides[e];
          },
          scaleToActual: function scaleToActual(e, t, i) {
            var o,
                s,
                r,
                a,
                l,
                c = this,
                d = c.current,
                u = d.$content,
                p = n.fancybox.getTranslate(d.$slide).width,
                f = n.fancybox.getTranslate(d.$slide).height,
                h = d.width,
                g = d.height;
            c.isAnimating || c.isMoved() || !u || "image" != d.type || !d.isLoaded || d.hasError || (c.isAnimating = !0, n.fancybox.stop(u), e = void 0 === e ? .5 * p : e, t = void 0 === t ? .5 * f : t, (o = n.fancybox.getTranslate(u)).top -= n.fancybox.getTranslate(d.$slide).top, o.left -= n.fancybox.getTranslate(d.$slide).left, a = h / o.width, l = g / o.height, s = .5 * p - .5 * h, r = .5 * f - .5 * g, h > p && ((s = o.left * a - (e * a - e)) > 0 && (s = 0), s < p - h && (s = p - h)), g > f && ((r = o.top * l - (t * l - t)) > 0 && (r = 0), r < f - g && (r = f - g)), c.updateCursor(h, g), n.fancybox.animate(u, {
              top: r,
              left: s,
              scaleX: a,
              scaleY: l
            }, i || 366, function () {
              c.isAnimating = !1;
            }), c.SlideShow && c.SlideShow.isActive && c.SlideShow.stop());
          },
          scaleToFit: function scaleToFit(e) {
            var t,
                i = this,
                o = i.current,
                s = o.$content;
            i.isAnimating || i.isMoved() || !s || "image" != o.type || !o.isLoaded || o.hasError || (i.isAnimating = !0, n.fancybox.stop(s), t = i.getFitPos(o), i.updateCursor(t.width, t.height), n.fancybox.animate(s, {
              top: t.top,
              left: t.left,
              scaleX: t.width / s.width(),
              scaleY: t.height / s.height()
            }, e || 366, function () {
              i.isAnimating = !1;
            }));
          },
          getFitPos: function getFitPos(e) {
            var t,
                i,
                o,
                s,
                r = e.$content,
                a = e.$slide,
                l = e.width || e.opts.width,
                c = e.height || e.opts.height,
                d = {};
            return !!(e.isLoaded && r && r.length) && (t = n.fancybox.getTranslate(this.$refs.stage).width, i = n.fancybox.getTranslate(this.$refs.stage).height, t -= parseFloat(a.css("paddingLeft")) + parseFloat(a.css("paddingRight")) + parseFloat(r.css("marginLeft")) + parseFloat(r.css("marginRight")), i -= parseFloat(a.css("paddingTop")) + parseFloat(a.css("paddingBottom")) + parseFloat(r.css("marginTop")) + parseFloat(r.css("marginBottom")), l && c || (l = t, c = i), (l *= o = Math.min(1, t / l, i / c)) > t - .5 && (l = t), (c *= o) > i - .5 && (c = i), "image" === e.type ? (d.top = Math.floor(.5 * (i - c)) + parseFloat(a.css("paddingTop")), d.left = Math.floor(.5 * (t - l)) + parseFloat(a.css("paddingLeft"))) : "video" === e.contentType && (c > l / (s = e.opts.width && e.opts.height ? l / c : e.opts.ratio || 16 / 9) ? c = l / s : l > c * s && (l = c * s)), d.width = l, d.height = c, d);
          },
          update: function update(e) {
            var t = this;
            n.each(t.slides, function (n, i) {
              t.updateSlide(i, e);
            });
          },
          updateSlide: function updateSlide(e, t) {
            var i = e && e.$content,
                o = e.width || e.opts.width,
                s = e.height || e.opts.height,
                r = e.$slide;
            this.adjustCaption(e), i && (o || s || "video" === e.contentType) && !e.hasError && (n.fancybox.stop(i), n.fancybox.setTranslate(i, this.getFitPos(e)), e.pos === this.currPos && (this.isAnimating = !1, this.updateCursor())), this.adjustLayout(e), r.length && (r.trigger("refresh"), e.pos === this.currPos && this.$refs.toolbar.add(this.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", r.get(0).scrollHeight > r.get(0).clientHeight)), this.trigger("onUpdate", e, t);
          },
          centerSlide: function centerSlide(e) {
            var t = this,
                i = t.current,
                o = i.$slide;
            !t.isClosing && i && (o.siblings().css({
              transform: "",
              opacity: ""
            }), o.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), n.fancybox.animate(o, {
              top: 0,
              left: 0,
              opacity: 1
            }, void 0 === e ? 0 : e, function () {
              o.css({
                transform: "",
                opacity: ""
              }), i.isComplete || t.complete();
            }, !1));
          },
          isMoved: function isMoved(e) {
            var t,
                i,
                o = e || this.current;
            return !!o && (i = n.fancybox.getTranslate(this.$refs.stage), t = n.fancybox.getTranslate(o.$slide), !o.$slide.hasClass("fancybox-animated") && (Math.abs(t.top - i.top) > .5 || Math.abs(t.left - i.left) > .5));
          },
          updateCursor: function updateCursor(e, t) {
            var i,
                o,
                s = this.current,
                r = this.$refs.container;
            s && !this.isClosing && this.Guestures && (r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), o = !!(i = this.canPan(e, t)) || this.isZoomable(), r.toggleClass("fancybox-is-zoomable", o), n("[data-fancybox-zoom]").prop("disabled", !o), i ? r.addClass("fancybox-can-pan") : o && ("zoom" === s.opts.clickContent || n.isFunction(s.opts.clickContent) && "zoom" == s.opts.clickContent(s)) ? r.addClass("fancybox-can-zoomIn") : s.opts.touch && (s.opts.touch.vertical || this.group.length > 1) && "video" !== s.contentType && r.addClass("fancybox-can-swipe"));
          },
          isZoomable: function isZoomable() {
            var e,
                t = this.current;

            if (t && !this.isClosing && "image" === t.type && !t.hasError) {
              if (!t.isLoaded) return !0;
              if ((e = this.getFitPos(t)) && (t.width > e.width || t.height > e.height)) return !0;
            }

            return !1;
          },
          isScaledDown: function isScaledDown(e, t) {
            var i = !1,
                o = this.current,
                s = o.$content;
            return void 0 !== e && void 0 !== t ? i = e < o.width && t < o.height : s && (i = (i = n.fancybox.getTranslate(s)).width < o.width && i.height < o.height), i;
          },
          canPan: function canPan(e, t) {
            var i = this.current,
                o = null,
                s = !1;
            return "image" === i.type && (i.isComplete || e && t) && !i.hasError && (s = this.getFitPos(i), void 0 !== e && void 0 !== t ? o = {
              width: e,
              height: t
            } : i.isComplete && (o = n.fancybox.getTranslate(i.$content)), o && s && (s = Math.abs(o.width - s.width) > 1.5 || Math.abs(o.height - s.height) > 1.5)), s;
          },
          loadSlide: function loadSlide(e) {
            var t,
                i,
                o,
                s = this;

            if (!e.isLoading && !e.isLoaded) {
              if (e.isLoading = !0, !1 === s.trigger("beforeLoad", e)) return e.isLoading = !1, !1;

              switch (t = e.type, (i = e.$slide).off("refresh").trigger("onReset").addClass(e.opts.slideClass), t) {
                case "image":
                  s.setImage(e);
                  break;

                case "iframe":
                  s.setIframe(e);
                  break;

                case "html":
                  s.setContent(e, e.src || e.content);
                  break;

                case "video":
                  s.setContent(e, e.opts.video.tpl.replace(/\{\{src\}\}/gi, e.src).replace("{{format}}", e.opts.videoFormat || e.opts.video.format || "").replace("{{poster}}", e.thumb || ""));
                  break;

                case "inline":
                  n(e.src).length ? s.setContent(e, n(e.src)) : s.setError(e);
                  break;

                case "ajax":
                  s.showLoading(e), o = n.ajax(n.extend({}, e.opts.ajax.settings, {
                    url: e.src,
                    success: function success(t, n) {
                      "success" === n && s.setContent(e, t);
                    },
                    error: function error(t, n) {
                      t && "abort" !== n && s.setError(e);
                    }
                  })), i.one("onReset", function () {
                    o.abort();
                  });
                  break;

                default:
                  s.setError(e);
              }

              return !0;
            }
          },
          setImage: function setImage(e) {
            var i,
                o = this;
            setTimeout(function () {
              var t = e.$image;
              o.isClosing || !e.isLoading || t && t.length && t[0].complete || e.hasError || o.showLoading(e);
            }, 50), o.checkSrcset(e), e.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide.addClass("fancybox-slide--image")), !1 !== e.opts.preload && e.opts.width && e.opts.height && e.thumb && (e.width = e.opts.width, e.height = e.opts.height, (i = t.createElement("img")).onerror = function () {
              n(this).remove(), e.$ghost = null;
            }, i.onload = function () {
              o.afterLoad(e);
            }, e.$ghost = n(i).addClass("fancybox-image").appendTo(e.$content).attr("src", e.thumb)), o.setBigImage(e);
          },
          checkSrcset: function checkSrcset(t) {
            var n,
                i,
                o,
                s,
                r = t.opts.srcset || t.opts.image.srcset;

            if (r) {
              o = e.devicePixelRatio || 1, s = e.innerWidth * o, (i = r.split(",").map(function (e) {
                var t = {};
                return e.trim().split(/\s+/).forEach(function (e, n) {
                  var i = parseInt(e.substring(0, e.length - 1), 10);
                  if (0 === n) return t.url = e;
                  i && (t.value = i, t.postfix = e[e.length - 1]);
                }), t;
              })).sort(function (e, t) {
                return e.value - t.value;
              });

              for (var a = 0; a < i.length; a++) {
                var l = i[a];

                if ("w" === l.postfix && l.value >= s || "x" === l.postfix && l.value >= o) {
                  n = l;
                  break;
                }
              }

              !n && i.length && (n = i[i.length - 1]), n && (t.src = n.url, t.width && t.height && "w" == n.postfix && (t.height = t.width / t.height * n.value, t.width = n.value), t.opts.srcset = r);
            }
          },
          setBigImage: function setBigImage(e) {
            var i = this,
                o = t.createElement("img"),
                s = n(o);
            e.$image = s.one("error", function () {
              i.setError(e);
            }).one("load", function () {
              var t;
              e.$ghost || (i.resolveImageSlideSize(e, this.naturalWidth, this.naturalHeight), i.afterLoad(e)), i.isClosing || (e.opts.srcset && ((t = e.opts.sizes) && "auto" !== t || (t = (e.width / e.height > 1 && a.width() / a.height() > 1 ? "100" : Math.round(e.width / e.height * 100)) + "vw"), s.attr("sizes", t).attr("srcset", e.opts.srcset)), e.$ghost && setTimeout(function () {
                e.$ghost && !i.isClosing && e.$ghost.hide();
              }, Math.min(300, Math.max(1e3, e.height / 1600))), i.hideLoading(e));
            }).addClass("fancybox-image").attr("src", e.src).appendTo(e.$content), (o.complete || "complete" == o.readyState) && s.naturalWidth && s.naturalHeight ? s.trigger("load") : o.error && s.trigger("error");
          },
          resolveImageSlideSize: function resolveImageSlideSize(e, t, n) {
            var i = parseInt(e.opts.width, 10),
                o = parseInt(e.opts.height, 10);
            e.width = t, e.height = n, i > 0 && (e.width = i, e.height = Math.floor(i * n / t)), o > 0 && (e.width = Math.floor(o * t / n), e.height = o);
          },
          setIframe: function setIframe(e) {
            var t,
                i = this,
                o = e.opts.iframe,
                s = e.$slide;
            e.$content = n('<div class="fancybox-content' + (o.preload ? " fancybox-is-hidden" : "") + '"></div>').css(o.css).appendTo(s), s.addClass("fancybox-slide--" + e.contentType), e.$iframe = t = n(o.tpl.replace(/\{rnd\}/g, new Date().getTime())).attr(o.attr).appendTo(e.$content), o.preload ? (i.showLoading(e), t.on("load.fb error.fb", function (t) {
              this.isReady = 1, e.$slide.trigger("refresh"), i.afterLoad(e);
            }), s.on("refresh.fb", function () {
              var n,
                  i = e.$content,
                  r = o.css.width,
                  a = o.css.height;

              if (1 === t[0].isReady) {
                try {
                  n = t.contents().find("body");
                } catch (e) {}

                n && n.length && n.children().length && (s.css("overflow", "visible"), i.css({
                  width: "100%",
                  "max-width": "100%",
                  height: "9999px"
                }), void 0 === r && (r = Math.ceil(Math.max(n[0].clientWidth, n.outerWidth(!0)))), i.css("width", r || "").css("max-width", ""), void 0 === a && (a = Math.ceil(Math.max(n[0].clientHeight, n.outerHeight(!0)))), i.css("height", a || ""), s.css("overflow", "auto")), i.removeClass("fancybox-is-hidden");
              }
            })) : i.afterLoad(e), t.attr("src", e.src), s.one("onReset", function () {
              try {
                n(this).find("iframe").hide().unbind().attr("src", "//about:blank");
              } catch (e) {}

              n(this).off("refresh.fb").empty(), e.isLoaded = !1, e.isRevealed = !1;
            });
          },
          setContent: function setContent(e, t) {
            var i;
            this.isClosing || (this.hideLoading(e), e.$content && n.fancybox.stop(e.$content), e.$slide.empty(), (i = t) && i.hasOwnProperty && i instanceof n && t.parent().length ? ((t.hasClass("fancybox-content") || t.parent().hasClass("fancybox-content")) && t.parents(".fancybox-slide").trigger("onReset"), e.$placeholder = n("<div>").hide().insertAfter(t), t.css("display", "inline-block")) : e.hasError || ("string" === n.type(t) && (t = n("<div>").append(n.trim(t)).contents()), e.opts.filter && (t = n("<div>").html(t).find(e.opts.filter))), e.$slide.one("onReset", function () {
              n(this).find("video,audio").trigger("pause"), e.$placeholder && (e.$placeholder.after(t.removeClass("fancybox-content").hide()).remove(), e.$placeholder = null), e.$smallBtn && (e.$smallBtn.remove(), e.$smallBtn = null), e.hasError || (n(this).empty(), e.isLoaded = !1, e.isRevealed = !1);
            }), n(t).appendTo(e.$slide), n(t).is("video,audio") && (n(t).addClass("fancybox-video"), n(t).wrap("<div></div>"), e.contentType = "video", e.opts.width = e.opts.width || n(t).attr("width"), e.opts.height = e.opts.height || n(t).attr("height")), e.$content = e.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), e.$content.siblings().hide(), e.$content.length || (e.$content = e.$slide.wrapInner("<div></div>").children().first()), e.$content.addClass("fancybox-content"), e.$slide.addClass("fancybox-slide--" + e.contentType), this.afterLoad(e));
          },
          setError: function setError(e) {
            e.hasError = !0, e.$slide.trigger("onReset").removeClass("fancybox-slide--" + e.contentType).addClass("fancybox-slide--error"), e.contentType = "html", this.setContent(e, this.translate(e, e.opts.errorTpl)), e.pos === this.currPos && (this.isAnimating = !1);
          },
          showLoading: function showLoading(e) {
            (e = e || this.current) && !e.$spinner && (e.$spinner = n(this.translate(this, this.opts.spinnerTpl)).appendTo(e.$slide).hide().fadeIn("fast"));
          },
          hideLoading: function hideLoading(e) {
            (e = e || this.current) && e.$spinner && (e.$spinner.stop().remove(), delete e.$spinner);
          },
          afterLoad: function afterLoad(e) {
            this.isClosing || (e.isLoading = !1, e.isLoaded = !0, this.trigger("afterLoad", e), this.hideLoading(e), !e.opts.smallBtn || e.$smallBtn && e.$smallBtn.length || (e.$smallBtn = n(this.translate(e, e.opts.btnTpl.smallBtn)).appendTo(e.$content)), e.opts.protect && e.$content && !e.hasError && (e.$content.on("contextmenu.fb", function (e) {
              return 2 == e.button && e.preventDefault(), !0;
            }), "image" === e.type && n('<div class="fancybox-spaceball"></div>').appendTo(e.$content)), this.adjustCaption(e), this.adjustLayout(e), e.pos === this.currPos && this.updateCursor(), this.revealContent(e));
          },
          adjustCaption: function adjustCaption(e) {
            var t,
                n = e || this.current,
                i = n.opts.caption,
                o = n.opts.preventCaptionOverlap,
                s = this.$refs.caption,
                r = !1;
            s.toggleClass("fancybox-caption--separate", o), o && i && i.length && (n.pos !== this.currPos ? ((t = s.clone().appendTo(s.parent())).children().eq(0).empty().html(i), r = t.outerHeight(!0), t.empty().remove()) : this.$caption && (r = this.$caption.outerHeight(!0)), n.$slide.css("padding-bottom", r || ""));
          },
          adjustLayout: function adjustLayout(e) {
            var t,
                n,
                i,
                o,
                s = e || this.current;
            s.isLoaded && !0 !== s.opts.disableLayoutFix && (s.$content.css("margin-bottom", ""), s.$content.outerHeight() > s.$slide.height() + .5 && (i = s.$slide[0].style["padding-bottom"], o = s.$slide.css("padding-bottom"), parseFloat(o) > 0 && (t = s.$slide[0].scrollHeight, s.$slide.css("padding-bottom", 0), Math.abs(t - s.$slide[0].scrollHeight) < 1 && (n = o), s.$slide.css("padding-bottom", i))), s.$content.css("margin-bottom", n));
          },
          revealContent: function revealContent(e) {
            var t,
                i,
                o,
                s,
                r = this,
                a = e.$slide,
                l = !1,
                c = !1,
                d = r.isMoved(e),
                u = e.isRevealed;
            return e.isRevealed = !0, t = e.opts[r.firstRun ? "animationEffect" : "transitionEffect"], o = e.opts[r.firstRun ? "animationDuration" : "transitionDuration"], o = parseInt(void 0 === e.forcedDuration ? o : e.forcedDuration, 10), !d && e.pos === r.currPos && o || (t = !1), "zoom" === t && (e.pos === r.currPos && o && "image" === e.type && !e.hasError && (c = r.getThumbPos(e)) ? l = r.getFitPos(e) : t = "fade"), "zoom" === t ? (r.isAnimating = !0, l.scaleX = l.width / c.width, l.scaleY = l.height / c.height, "auto" == (s = e.opts.zoomOpacity) && (s = Math.abs(e.width / e.height - c.width / c.height) > .1), s && (c.opacity = .1, l.opacity = 1), n.fancybox.setTranslate(e.$content.removeClass("fancybox-is-hidden"), c), f(e.$content), void n.fancybox.animate(e.$content, l, o, function () {
              r.isAnimating = !1, r.complete();
            })) : (r.updateSlide(e), t ? (n.fancybox.stop(a), i = "fancybox-slide--" + (e.pos >= r.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + t, a.addClass(i).removeClass("fancybox-slide--current"), e.$content.removeClass("fancybox-is-hidden"), f(a), "image" !== e.type && e.$content.hide().show(0), void n.fancybox.animate(a, "fancybox-slide--current", o, function () {
              a.removeClass(i).css({
                transform: "",
                opacity: ""
              }), e.pos === r.currPos && r.complete();
            }, !0)) : (e.$content.removeClass("fancybox-is-hidden"), u || !d || "image" !== e.type || e.hasError || e.$content.hide().fadeIn("fast"), void (e.pos === r.currPos && r.complete())));
          },
          getThumbPos: function getThumbPos(e) {
            var i,
                o,
                s,
                r,
                a,
                l,
                c = e.$thumb;
            return !(!c || !function (e) {
              var i, o;
              return !(!e || e.ownerDocument !== t) && (n(".fancybox-container").css("pointer-events", "none"), i = {
                x: e.getBoundingClientRect().left + e.offsetWidth / 2,
                y: e.getBoundingClientRect().top + e.offsetHeight / 2
              }, o = t.elementFromPoint(i.x, i.y) === e, n(".fancybox-container").css("pointer-events", ""), o);
            }(c[0])) && (o = n.fancybox.getTranslate(c), s = parseFloat(c.css("border-top-width") || 0), r = parseFloat(c.css("border-right-width") || 0), a = parseFloat(c.css("border-bottom-width") || 0), l = parseFloat(c.css("border-left-width") || 0), i = {
              top: o.top + s,
              left: o.left + l,
              width: o.width - r - l,
              height: o.height - s - a,
              scaleX: 1,
              scaleY: 1
            }, o.width > 0 && o.height > 0 && i);
          },
          complete: function complete() {
            var e,
                t = this,
                i = t.current,
                o = {};
            !t.isMoved() && i.isLoaded && (i.isComplete || (i.isComplete = !0, i.$slide.siblings().trigger("onReset"), t.preload("inline"), f(i.$slide), i.$slide.addClass("fancybox-slide--complete"), n.each(t.slides, function (e, i) {
              i.pos >= t.currPos - 1 && i.pos <= t.currPos + 1 ? o[i.pos] = i : i && (n.fancybox.stop(i.$slide), i.$slide.off().remove());
            }), t.slides = o), t.isAnimating = !1, t.updateCursor(), t.trigger("afterShow"), i.opts.video.autoStart && i.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function () {
              Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), t.next();
            }), i.opts.autoFocus && "html" === i.contentType && ((e = i.$content.find("input[autofocus]:enabled:visible:first")).length ? e.trigger("focus") : t.focus(null, !0)), i.$slide.scrollTop(0).scrollLeft(0));
          },
          preload: function preload(e) {
            var t, n;
            this.group.length < 2 || (n = this.slides[this.currPos + 1], (t = this.slides[this.currPos - 1]) && t.type === e && this.loadSlide(t), n && n.type === e && this.loadSlide(n));
          },
          focus: function focus(e, i) {
            var o,
                s,
                r = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
            this.isClosing || ((o = (o = !e && this.current && this.current.isComplete ? this.current.$slide.find("*:visible" + (i ? ":not(.fancybox-close-small)" : "")) : this.$refs.container.find("*:visible")).filter(r).filter(function () {
              return "hidden" !== n(this).css("visibility") && !n(this).hasClass("disabled");
            })).length ? (s = o.index(t.activeElement), e && e.shiftKey ? (s < 0 || 0 == s) && (e.preventDefault(), o.eq(o.length - 1).trigger("focus")) : (s < 0 || s == o.length - 1) && (e && e.preventDefault(), o.eq(0).trigger("focus"))) : this.$refs.container.trigger("focus"));
          },
          activate: function activate() {
            var e = this;
            n(".fancybox-container").each(function () {
              var t = n(this).data("FancyBox");
              t && t.id !== e.id && !t.isClosing && (t.trigger("onDeactivate"), t.removeEvents(), t.isVisible = !1);
            }), e.isVisible = !0, (e.current || e.isIdle) && (e.update(), e.updateControls()), e.trigger("onActivate"), e.addEvents();
          },
          close: function close(e, t) {
            var i,
                o,
                s,
                r,
                a,
                l,
                c,
                u = this,
                p = u.current,
                h = function h() {
              u.cleanUp(e);
            };

            return !u.isClosing && (u.isClosing = !0, !1 === u.trigger("beforeClose", e) ? (u.isClosing = !1, d(function () {
              u.update();
            }), !1) : (u.removeEvents(), s = p.$content, i = p.opts.animationEffect, o = n.isNumeric(t) ? t : i ? p.opts.animationDuration : 0, p.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== e ? n.fancybox.stop(p.$slide) : i = !1, p.$slide.siblings().trigger("onReset").remove(), o && u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", o + "ms"), u.hideLoading(p), u.hideControls(!0), u.updateCursor(), "zoom" !== i || s && o && "image" === p.type && !u.isMoved() && !p.hasError && (c = u.getThumbPos(p)) || (i = "fade"), "zoom" === i ? (n.fancybox.stop(s), l = {
              top: (r = n.fancybox.getTranslate(s)).top,
              left: r.left,
              scaleX: r.width / c.width,
              scaleY: r.height / c.height,
              width: c.width,
              height: c.height
            }, "auto" == (a = p.opts.zoomOpacity) && (a = Math.abs(p.width / p.height - c.width / c.height) > .1), a && (c.opacity = 0), n.fancybox.setTranslate(s, l), f(s), n.fancybox.animate(s, c, o, h), !0) : (i && o ? n.fancybox.animate(p.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + i, o, h) : !0 === e ? setTimeout(h, o) : h(), !0)));
          },
          cleanUp: function cleanUp(t) {
            var i,
                o,
                s,
                r = this.current.opts.$orig;
            this.current.$slide.trigger("onReset"), this.$refs.container.empty().remove(), this.trigger("afterClose", t), this.current.opts.backFocus && (r && r.length && r.is(":visible") || (r = this.$trigger), r && r.length && (o = e.scrollX, s = e.scrollY, r.trigger("focus"), n("html, body").scrollTop(s).scrollLeft(o))), this.current = null, (i = n.fancybox.getInstance()) ? i.activate() : (n("body").removeClass("fancybox-active compensate-for-scrollbar"), n("#fancybox-style-noscroll").remove());
          },
          trigger: function trigger(e, t) {
            var i,
                o = Array.prototype.slice.call(arguments, 1),
                s = this,
                r = t && t.opts ? t : s.current;
            if (r ? o.unshift(r) : r = s, o.unshift(s), n.isFunction(r.opts[e]) && (i = r.opts[e].apply(r, o)), !1 === i) return i;
            "afterClose" !== e && s.$refs ? s.$refs.container.trigger(e + ".fb", o) : l.trigger(e + ".fb", o);
          },
          updateControls: function updateControls() {
            var e = this.current,
                i = e.index,
                o = this.$refs.container,
                s = this.$refs.caption,
                r = e.opts.caption;
            e.$slide.trigger("refresh"), r && r.length ? (this.$caption = s, s.children().eq(0).html(r)) : this.$caption = null, this.hasHiddenControls || this.isIdle || this.showControls(), o.find("[data-fancybox-count]").html(this.group.length), o.find("[data-fancybox-index]").html(i + 1), o.find("[data-fancybox-prev]").prop("disabled", !e.opts.loop && i <= 0), o.find("[data-fancybox-next]").prop("disabled", !e.opts.loop && i >= this.group.length - 1), "image" === e.type ? o.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", e.opts.image.src || e.src).show() : e.opts.toolbar && o.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), n(t.activeElement).is(":hidden,[disabled]") && this.$refs.container.trigger("focus");
          },
          hideControls: function hideControls(e) {
            var t = ["infobar", "toolbar", "nav"];
            !e && this.current.opts.preventCaptionOverlap || t.push("caption"), this.$refs.container.removeClass(t.map(function (e) {
              return "fancybox-show-" + e;
            }).join(" ")), this.hasHiddenControls = !0;
          },
          showControls: function showControls() {
            var e = this.current ? this.current.opts : this.opts,
                t = this.$refs.container;
            this.hasHiddenControls = !1, this.idleSecondsCounter = 0, t.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && this.group.length > 1)).toggleClass("fancybox-show-caption", !!this.$caption).toggleClass("fancybox-show-nav", !!(e.arrows && this.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal);
          },
          toggleControls: function toggleControls() {
            this.hasHiddenControls ? this.showControls() : this.hideControls();
          }
        }), n.fancybox = {
          version: "3.5.7",
          defaults: r,
          getInstance: function getInstance(e) {
            var t = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                i = Array.prototype.slice.call(arguments, 1);
            return t instanceof g && ("string" === n.type(e) ? t[e].apply(t, i) : "function" === n.type(e) && e.apply(t, i), t);
          },
          open: function open(e, t, n) {
            return new g(e, t, n);
          },
          close: function close(e) {
            var t = this.getInstance();
            t && (t.close(), !0 === e && this.close(e));
          },
          destroy: function destroy() {
            this.close(!0), l.add("body").off("click.fb-start", "**");
          },
          isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
          use3d: (o = t.createElement("div"), e.getComputedStyle && e.getComputedStyle(o) && e.getComputedStyle(o).getPropertyValue("transform") && !(t.documentMode && t.documentMode < 11)),
          getTranslate: function getTranslate(e) {
            var t;
            return !(!e || !e.length) && {
              top: (t = e[0].getBoundingClientRect()).top || 0,
              left: t.left || 0,
              width: t.width,
              height: t.height,
              opacity: parseFloat(e.css("opacity"))
            };
          },
          setTranslate: function setTranslate(e, t) {
            var n = "",
                i = {};
            if (e && t) return void 0 === t.left && void 0 === t.top || (n = (void 0 === t.left ? e.position().left : t.left) + "px, " + (void 0 === t.top ? e.position().top : t.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), void 0 !== t.scaleX && void 0 !== t.scaleY ? n += " scale(" + t.scaleX + ", " + t.scaleY + ")" : void 0 !== t.scaleX && (n += " scaleX(" + t.scaleX + ")"), n.length && (i.transform = n), void 0 !== t.opacity && (i.opacity = t.opacity), void 0 !== t.width && (i.width = t.width), void 0 !== t.height && (i.height = t.height), e.css(i);
          },
          animate: function animate(e, t, i, o, s) {
            var r,
                a = this;
            n.isFunction(i) && (o = i, i = null), a.stop(e), r = a.getTranslate(e), e.on(p, function (l) {
              (!l || !l.originalEvent || e.is(l.originalEvent.target) && "z-index" != l.originalEvent.propertyName) && (a.stop(e), n.isNumeric(i) && e.css("transition-duration", ""), n.isPlainObject(t) ? void 0 !== t.scaleX && void 0 !== t.scaleY && a.setTranslate(e, {
                top: t.top,
                left: t.left,
                width: r.width * t.scaleX,
                height: r.height * t.scaleY,
                scaleX: 1,
                scaleY: 1
              }) : !0 !== s && e.removeClass(t), n.isFunction(o) && o(l));
            }), n.isNumeric(i) && e.css("transition-duration", i + "ms"), n.isPlainObject(t) ? (void 0 !== t.scaleX && void 0 !== t.scaleY && (delete t.width, delete t.height, e.parent().hasClass("fancybox-slide--image") && e.parent().addClass("fancybox-is-scaling")), n.fancybox.setTranslate(e, t)) : e.addClass(t), e.data("timer", setTimeout(function () {
              e.trigger(p);
            }, i + 33));
          },
          stop: function stop(e, t) {
            e && e.length && (clearTimeout(e.data("timer")), t && e.trigger(p), e.off(p).css("transition-duration", ""), e.parent().removeClass("fancybox-is-scaling"));
          }
        }, n.fn.fancybox = function (e) {
          var t;
          return (t = (e = e || {}).selector || !1) ? n("body").off("click.fb-start", t).on("click.fb-start", t, {
            options: e
          }, v) : this.off("click.fb-start").on("click.fb-start", {
            items: this,
            options: e
          }, v), this;
        }, l.on("click.fb-start", "[data-fancybox]", v), l.on("click.fb-start", "[data-fancybox-trigger]", function (e) {
          n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]').eq(n(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
            $trigger: n(this)
          });
        }), s = null, l.on("mousedown mouseup focus blur", ".fancybox-button", function (e) {
          switch (e.type) {
            case "mousedown":
              s = n(this);
              break;

            case "mouseup":
              s = null;
              break;

            case "focusin":
              n(".fancybox-button").removeClass("fancybox-focus"), n(this).is(s) || n(this).is("[disabled]") || n(this).addClass("fancybox-focus");
              break;

            case "focusout":
              n(".fancybox-button").removeClass("fancybox-focus");
          }
        });
      }

      function v(e, t) {
        var i,
            o,
            s,
            r = [],
            a = 0;
        e && e.isDefaultPrevented() || (e.preventDefault(), t = t || {}, e && e.data && (t = h(e.data.options, t)), i = t.$target || n(e.currentTarget).trigger("blur"), (s = n.fancybox.getInstance()) && s.$trigger && s.$trigger.is(i) || (r = t.selector ? n(t.selector) : (o = i.attr("data-fancybox") || "") ? (r = e.data ? e.data.items : []).length ? r.filter('[data-fancybox="' + o + '"]') : n('[data-fancybox="' + o + '"]') : [i], (a = n(r).index(i)) < 0 && (a = 0), (s = n.fancybox.open(r, t, a)).$trigger = i));
      }
    }(window, document, e), function (e) {
      "use strict";

      var t = {
        youtube: {
          matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
          params: {
            autoplay: 1,
            autohide: 1,
            fs: 1,
            rel: 0,
            hd: 1,
            wmode: "transparent",
            enablejsapi: 1,
            html5: 1
          },
          paramPlace: 8,
          type: "iframe",
          url: "https://www.youtube-nocookie.com/embed/$4",
          thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
        },
        vimeo: {
          matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
          params: {
            autoplay: 1,
            hd: 1,
            show_title: 1,
            show_byline: 1,
            show_portrait: 0,
            fullscreen: 1
          },
          paramPlace: 3,
          type: "iframe",
          url: "//player.vimeo.com/video/$2"
        },
        instagram: {
          matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
          type: "image",
          url: "//$1/p/$2/media/?size=l"
        },
        gmap_place: {
          matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
          type: "iframe",
          url: function url(e) {
            return "//maps.google." + e[2] + "/?ll=" + (e[9] ? e[9] + "&z=" + Math.floor(e[10]) + (e[12] ? e[12].replace(/^\//, "&") : "") : e[12] + "").replace(/\?/, "&") + "&output=" + (e[12] && e[12].indexOf("layer=c") > 0 ? "svembed" : "embed");
          }
        },
        gmap_search: {
          matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
          type: "iframe",
          url: function url(e) {
            return "//maps.google." + e[2] + "/maps?q=" + e[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
          }
        }
      },
          n = function n(t, _n2, i) {
        if (t) return i = i || "", "object" === e.type(i) && (i = e.param(i, !0)), e.each(_n2, function (e, n) {
          t = t.replace("$" + e, n || "");
        }), i.length && (t += (t.indexOf("?") > 0 ? "&" : "?") + i), t;
      };

      e(document).on("objectNeedsType.fb", function (i, o, s) {
        var r,
            a,
            l,
            c,
            d,
            u,
            p,
            f = s.src || "",
            h = !1;
        r = e.extend(!0, {}, t, s.opts.media), e.each(r, function (t, i) {
          if (l = f.match(i.matcher)) {
            if (h = i.type, p = t, u = {}, i.paramPlace && l[i.paramPlace]) {
              "?" == (d = l[i.paramPlace])[0] && (d = d.substring(1)), d = d.split("&");

              for (var o = 0; o < d.length; ++o) {
                var r = d[o].split("=", 2);
                2 == r.length && (u[r[0]] = decodeURIComponent(r[1].replace(/\+/g, " ")));
              }
            }

            return c = e.extend(!0, {}, i.params, s.opts[t], u), f = "function" === e.type(i.url) ? i.url.call(this, l, c, s) : n(i.url, l, c), a = "function" === e.type(i.thumb) ? i.thumb.call(this, l, c, s) : n(i.thumb, l), "youtube" === t ? f = f.replace(/&t=((\d+)m)?(\d+)s/, function (e, t, n, i) {
              return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(i, 10));
            }) : "vimeo" === t && (f = f.replace("&%23", "#")), !1;
          }
        }), h ? (s.opts.thumb || s.opts.$thumb && s.opts.$thumb.length || (s.opts.thumb = a), "iframe" === h && (s.opts = e.extend(!0, s.opts, {
          iframe: {
            preload: !1,
            attr: {
              scrolling: "no"
            }
          }
        })), e.extend(s, {
          type: h,
          src: f,
          origSrc: s.src,
          contentSource: p,
          contentType: "image" === h ? "image" : "gmap_place" == p || "gmap_search" == p ? "map" : "video"
        })) : f && (s.type = s.opts.defaultType);
      });
      var i = {
        youtube: {
          src: "https://www.youtube.com/iframe_api",
          "class": "YT",
          loading: !1,
          loaded: !1
        },
        vimeo: {
          src: "https://player.vimeo.com/api/player.js",
          "class": "Vimeo",
          loading: !1,
          loaded: !1
        },
        load: function load(e) {
          var t,
              n = this;
          this[e].loaded ? setTimeout(function () {
            n.done(e);
          }) : this[e].loading || (this[e].loading = !0, (t = document.createElement("script")).type = "text/javascript", t.src = this[e].src, "youtube" === e ? window.onYouTubeIframeAPIReady = function () {
            n[e].loaded = !0, n.done(e);
          } : t.onload = function () {
            n[e].loaded = !0, n.done(e);
          }, document.body.appendChild(t));
        },
        done: function done(t) {
          var n, i;
          "youtube" === t && delete window.onYouTubeIframeAPIReady, (n = e.fancybox.getInstance()) && (i = n.current.$content.find("iframe"), "youtube" === t && void 0 !== YT && YT ? new YT.Player(i.attr("id"), {
            events: {
              onStateChange: function onStateChange(e) {
                0 == e.data && n.next();
              }
            }
          }) : "vimeo" === t && void 0 !== Vimeo && Vimeo && new Vimeo.Player(i).on("ended", function () {
            n.next();
          }));
        }
      };
      e(document).on({
        "afterShow.fb": function afterShowFb(e, t, n) {
          t.group.length > 1 && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && i.load(n.contentSource);
        }
      });
    }(e), function (e, t, n) {
      "use strict";

      var i = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || function (t) {
        return e.setTimeout(t, 1e3 / 60);
      },
          o = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.mozCancelAnimationFrame || e.oCancelAnimationFrame || function (t) {
        e.clearTimeout(t);
      },
          s = function s(t) {
        var n = [];

        for (var i in t = (t = t.originalEvent || t || e.e).touches && t.touches.length ? t.touches : t.changedTouches && t.changedTouches.length ? t.changedTouches : [t]) {
          t[i].pageX ? n.push({
            x: t[i].pageX,
            y: t[i].pageY
          }) : t[i].clientX && n.push({
            x: t[i].clientX,
            y: t[i].clientY
          });
        }

        return n;
      },
          r = function r(e, t, n) {
        return t && e ? "x" === n ? e.x - t.x : "y" === n ? e.y - t.y : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)) : 0;
      },
          a = function a(e) {
        if (e.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || n.isFunction(e.get(0).onclick) || e.data("selectable")) return !0;

        for (var t = 0, i = e[0].attributes, o = i.length; t < o; t++) {
          if ("data-fancybox-" === i[t].nodeName.substr(0, 14)) return !0;
        }

        return !1;
      },
          l = function l(t) {
        for (var n, i, o, s, r, a = !1; n = t.get(0), i = void 0, o = void 0, s = void 0, r = void 0, i = e.getComputedStyle(n)["overflow-y"], o = e.getComputedStyle(n)["overflow-x"], s = ("scroll" === i || "auto" === i) && n.scrollHeight > n.clientHeight, r = ("scroll" === o || "auto" === o) && n.scrollWidth > n.clientWidth, !(a = s || r) && (t = t.parent()).length && !t.hasClass("fancybox-stage") && !t.is("body");) {
          ;
        }

        return a;
      },
          c = function c(e) {
        this.instance = e, this.$bg = e.$refs.bg, this.$stage = e.$refs.stage, this.$container = e.$refs.container, this.destroy(), this.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(this, "ontouchstart"));
      };

      c.prototype.destroy = function () {
        this.$container.off(".fb.touch"), n(t).off(".fb.touch"), this.requestId && (o(this.requestId), this.requestId = null), this.tapped && (clearTimeout(this.tapped), this.tapped = null);
      }, c.prototype.ontouchstart = function (i) {
        var o = n(i.target),
            c = this.instance,
            d = c.current,
            u = d.$slide,
            p = d.$content,
            f = "touchstart" == i.type;

        if (f && this.$container.off("mousedown.fb.touch"), (!i.originalEvent || 2 != i.originalEvent.button) && u.length && o.length && !a(o) && !a(o.parent()) && (o.is("img") || !(i.originalEvent.clientX > o[0].clientWidth + o.offset().left))) {
          if (!d || c.isAnimating || d.$slide.hasClass("fancybox-animated")) return i.stopPropagation(), void i.preventDefault();
          this.realPoints = this.startPoints = s(i), this.startPoints.length && (d.touch && i.stopPropagation(), this.startEvent = i, this.canTap = !0, this.$target = o, this.$content = p, this.opts = d.opts.touch, this.isPanning = !1, this.isSwiping = !1, this.isZooming = !1, this.isScrolling = !1, this.canPan = c.canPan(), this.startTime = new Date().getTime(), this.distanceX = this.distanceY = this.distance = 0, this.canvasWidth = Math.round(u[0].clientWidth), this.canvasHeight = Math.round(u[0].clientHeight), this.contentLastPos = null, this.contentStartPos = n.fancybox.getTranslate(this.$content) || {
            top: 0,
            left: 0
          }, this.sliderStartPos = n.fancybox.getTranslate(u), this.stagePos = n.fancybox.getTranslate(c.$refs.stage), this.sliderStartPos.top -= this.stagePos.top, this.sliderStartPos.left -= this.stagePos.left, this.contentStartPos.top -= this.stagePos.top, this.contentStartPos.left -= this.stagePos.left, n(t).off(".fb.touch").on(f ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(this, "ontouchend")).on(f ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(this, "ontouchmove")), n.fancybox.isMobile && t.addEventListener("scroll", this.onscroll, !0), ((this.opts || this.canPan) && (o.is(this.$stage) || this.$stage.find(o).length) || (o.is(".fancybox-image") && i.preventDefault(), n.fancybox.isMobile && o.parents(".fancybox-caption").length)) && (this.isScrollable = l(o) || l(o.parent()), n.fancybox.isMobile && this.isScrollable || i.preventDefault(), (1 === this.startPoints.length || d.hasError) && (this.canPan ? (n.fancybox.stop(this.$content), this.isPanning = !0) : this.isSwiping = !0, this.$container.addClass("fancybox-is-grabbing")), 2 === this.startPoints.length && "image" === d.type && (d.isLoaded || d.$ghost) && (this.canTap = !1, this.isSwiping = !1, this.isPanning = !1, this.isZooming = !0, n.fancybox.stop(this.$content), this.centerPointStartX = .5 * (this.startPoints[0].x + this.startPoints[1].x) - n(e).scrollLeft(), this.centerPointStartY = .5 * (this.startPoints[0].y + this.startPoints[1].y) - n(e).scrollTop(), this.percentageOfImageAtPinchPointX = (this.centerPointStartX - this.contentStartPos.left) / this.contentStartPos.width, this.percentageOfImageAtPinchPointY = (this.centerPointStartY - this.contentStartPos.top) / this.contentStartPos.height, this.startDistanceBetweenFingers = r(this.startPoints[0], this.startPoints[1]))));
        }
      }, c.prototype.onscroll = function (e) {
        this.isScrolling = !0, t.removeEventListener("scroll", this.onscroll, !0);
      }, c.prototype.ontouchmove = function (e) {
        void 0 === e.originalEvent.buttons || 0 !== e.originalEvent.buttons ? this.isScrolling ? this.canTap = !1 : (this.newPoints = s(e), (this.opts || this.canPan) && this.newPoints.length && this.newPoints.length && (this.isSwiping && !0 === this.isSwiping || e.preventDefault(), this.distanceX = r(this.newPoints[0], this.startPoints[0], "x"), this.distanceY = r(this.newPoints[0], this.startPoints[0], "y"), this.distance = r(this.newPoints[0], this.startPoints[0]), this.distance > 0 && (this.isSwiping ? this.onSwipe(e) : this.isPanning ? this.onPan() : this.isZooming && this.onZoom()))) : this.ontouchend(e);
      }, c.prototype.onSwipe = function (t) {
        var s,
            r = this,
            a = r.instance,
            l = r.isSwiping,
            c = r.sliderStartPos.left || 0;
        if (!0 !== l) "x" == l && (r.distanceX > 0 && (r.instance.group.length < 2 || 0 === r.instance.current.index && !r.instance.current.opts.loop) ? c += Math.pow(r.distanceX, .8) : r.distanceX < 0 && (r.instance.group.length < 2 || r.instance.current.index === r.instance.group.length - 1 && !r.instance.current.opts.loop) ? c -= Math.pow(-r.distanceX, .8) : c += r.distanceX), r.sliderLastPos = {
          top: "x" == l ? 0 : r.sliderStartPos.top + r.distanceY,
          left: c
        }, r.requestId && (o(r.requestId), r.requestId = null), r.requestId = i(function () {
          r.sliderLastPos && (n.each(r.instance.slides, function (e, t) {
            var i = t.pos - r.instance.currPos;
            n.fancybox.setTranslate(t.$slide, {
              top: r.sliderLastPos.top,
              left: r.sliderLastPos.left + i * r.canvasWidth + i * t.opts.gutter
            });
          }), r.$container.addClass("fancybox-is-sliding"));
        });else if (Math.abs(r.distance) > 10) {
          if (r.canTap = !1, a.group.length < 2 && r.opts.vertical ? r.isSwiping = "y" : a.isDragging || !1 === r.opts.vertical || "auto" === r.opts.vertical && n(e).width() > 800 ? r.isSwiping = "x" : (s = Math.abs(180 * Math.atan2(r.distanceY, r.distanceX) / Math.PI), r.isSwiping = s > 45 && s < 135 ? "y" : "x"), "y" === r.isSwiping && n.fancybox.isMobile && r.isScrollable) return void (r.isScrolling = !0);
          a.isDragging = r.isSwiping, r.startPoints = r.newPoints, n.each(a.slides, function (e, t) {
            var i, o;
            n.fancybox.stop(t.$slide), i = n.fancybox.getTranslate(t.$slide), o = n.fancybox.getTranslate(a.$refs.stage), t.$slide.css({
              transform: "",
              opacity: "",
              "transition-duration": ""
            }).removeClass("fancybox-animated").removeClass(function (e, t) {
              return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
            }), t.pos === a.current.pos && (r.sliderStartPos.top = i.top - o.top, r.sliderStartPos.left = i.left - o.left), n.fancybox.setTranslate(t.$slide, {
              top: i.top - o.top,
              left: i.left - o.left
            });
          }), a.SlideShow && a.SlideShow.isActive && a.SlideShow.stop();
        }
      }, c.prototype.onPan = function () {
        var e = this;
        r(e.newPoints[0], e.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5) ? e.startPoints = e.newPoints : (e.canTap = !1, e.contentLastPos = e.limitMovement(), e.requestId && o(e.requestId), e.requestId = i(function () {
          n.fancybox.setTranslate(e.$content, e.contentLastPos);
        }));
      }, c.prototype.limitMovement = function () {
        var e,
            t,
            n,
            i,
            o,
            s,
            r = this.canvasWidth,
            a = this.canvasHeight,
            l = this.distanceX,
            c = this.distanceY,
            d = this.contentStartPos,
            u = d.left,
            p = d.top,
            f = d.width,
            h = d.height;
        return o = f > r ? u + l : u, s = p + c, e = Math.max(0, .5 * r - .5 * f), t = Math.max(0, .5 * a - .5 * h), n = Math.min(r - f, .5 * r - .5 * f), i = Math.min(a - h, .5 * a - .5 * h), l > 0 && o > e && (o = e - 1 + Math.pow(-e + u + l, .8) || 0), l < 0 && o < n && (o = n + 1 - Math.pow(n - u - l, .8) || 0), c > 0 && s > t && (s = t - 1 + Math.pow(-t + p + c, .8) || 0), c < 0 && s < i && (s = i + 1 - Math.pow(i - p - c, .8) || 0), {
          top: s,
          left: o
        };
      }, c.prototype.limitPosition = function (e, t, n, i) {
        var o = this.canvasWidth,
            s = this.canvasHeight;
        return e = n > o ? (e = e > 0 ? 0 : e) < o - n ? o - n : e : Math.max(0, o / 2 - n / 2), {
          top: t = i > s ? (t = t > 0 ? 0 : t) < s - i ? s - i : t : Math.max(0, s / 2 - i / 2),
          left: e
        };
      }, c.prototype.onZoom = function () {
        var t = this,
            s = t.contentStartPos,
            a = s.width,
            l = s.height,
            c = s.left,
            d = s.top,
            u = r(t.newPoints[0], t.newPoints[1]) / t.startDistanceBetweenFingers,
            p = Math.floor(a * u),
            f = Math.floor(l * u),
            h = (a - p) * t.percentageOfImageAtPinchPointX,
            g = (l - f) * t.percentageOfImageAtPinchPointY,
            v = (t.newPoints[0].x + t.newPoints[1].x) / 2 - n(e).scrollLeft(),
            m = (t.newPoints[0].y + t.newPoints[1].y) / 2 - n(e).scrollTop(),
            y = v - t.centerPointStartX,
            b = {
          top: d + (g + (m - t.centerPointStartY)),
          left: c + (h + y),
          scaleX: u,
          scaleY: u
        };
        t.canTap = !1, t.newWidth = p, t.newHeight = f, t.contentLastPos = b, t.requestId && o(t.requestId), t.requestId = i(function () {
          n.fancybox.setTranslate(t.$content, t.contentLastPos);
        });
      }, c.prototype.ontouchend = function (e) {
        var i = this.isSwiping,
            r = this.isPanning,
            a = this.isZooming,
            l = this.isScrolling;
        if (this.endPoints = s(e), this.dMs = Math.max(new Date().getTime() - this.startTime, 1), this.$container.removeClass("fancybox-is-grabbing"), n(t).off(".fb.touch"), t.removeEventListener("scroll", this.onscroll, !0), this.requestId && (o(this.requestId), this.requestId = null), this.isSwiping = !1, this.isPanning = !1, this.isZooming = !1, this.isScrolling = !1, this.instance.isDragging = !1, this.canTap) return this.onTap(e);
        this.speed = 100, this.velocityX = this.distanceX / this.dMs * .5, this.velocityY = this.distanceY / this.dMs * .5, r ? this.endPanning() : a ? this.endZooming() : this.endSwiping(i, l);
      }, c.prototype.endSwiping = function (e, t) {
        var i = !1,
            o = this.instance.group.length,
            s = Math.abs(this.distanceX),
            r = "x" == e && o > 1 && (this.dMs > 130 && s > 10 || s > 50);
        this.sliderLastPos = null, "y" == e && !t && Math.abs(this.distanceY) > 50 ? (n.fancybox.animate(this.instance.current.$slide, {
          top: this.sliderStartPos.top + this.distanceY + 150 * this.velocityY,
          opacity: 0
        }, 200), i = this.instance.close(!0, 250)) : r && this.distanceX > 0 ? i = this.instance.previous(300) : r && this.distanceX < 0 && (i = this.instance.next(300)), !1 !== i || "x" != e && "y" != e || this.instance.centerSlide(200), this.$container.removeClass("fancybox-is-sliding");
      }, c.prototype.endPanning = function () {
        var e, t, i;
        this.contentLastPos && (!1 === this.opts.momentum || this.dMs > 350 ? (e = this.contentLastPos.left, t = this.contentLastPos.top) : (e = this.contentLastPos.left + 500 * this.velocityX, t = this.contentLastPos.top + 500 * this.velocityY), (i = this.limitPosition(e, t, this.contentStartPos.width, this.contentStartPos.height)).width = this.contentStartPos.width, i.height = this.contentStartPos.height, n.fancybox.animate(this.$content, i, 366));
      }, c.prototype.endZooming = function () {
        var e,
            t,
            i,
            o,
            s = this.instance.current,
            r = this.newWidth,
            a = this.newHeight;
        this.contentLastPos && (e = this.contentLastPos.left, o = {
          top: t = this.contentLastPos.top,
          left: e,
          width: r,
          height: a,
          scaleX: 1,
          scaleY: 1
        }, n.fancybox.setTranslate(this.$content, o), r < this.canvasWidth && a < this.canvasHeight ? this.instance.scaleToFit(150) : r > s.width || a > s.height ? this.instance.scaleToActual(this.centerPointStartX, this.centerPointStartY, 150) : (i = this.limitPosition(e, t, r, a), n.fancybox.animate(this.$content, i, 150)));
      }, c.prototype.onTap = function (t) {
        var i,
            o = this,
            r = n(t.target),
            a = o.instance,
            l = a.current,
            c = t && s(t) || o.startPoints,
            d = c[0] ? c[0].x - n(e).scrollLeft() - o.stagePos.left : 0,
            u = c[0] ? c[0].y - n(e).scrollTop() - o.stagePos.top : 0,
            p = function p(e) {
          var i = l.opts[e];
          if (n.isFunction(i) && (i = i.apply(a, [l, t])), i) switch (i) {
            case "close":
              a.close(o.startEvent);
              break;

            case "toggleControls":
              a.toggleControls();
              break;

            case "next":
              a.next();
              break;

            case "nextOrClose":
              a.group.length > 1 ? a.next() : a.close(o.startEvent);
              break;

            case "zoom":
              "image" == l.type && (l.isLoaded || l.$ghost) && (a.canPan() ? a.scaleToFit() : a.isScaledDown() ? a.scaleToActual(d, u) : a.group.length < 2 && a.close(o.startEvent));
          }
        };

        if ((!t.originalEvent || 2 != t.originalEvent.button) && (r.is("img") || !(d > r[0].clientWidth + r.offset().left))) {
          if (r.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) i = "Outside";else if (r.is(".fancybox-slide")) i = "Slide";else {
            if (!a.current.$content || !a.current.$content.find(r).addBack().filter(r).length) return;
            i = "Content";
          }

          if (o.tapped) {
            if (clearTimeout(o.tapped), o.tapped = null, Math.abs(d - o.tapX) > 50 || Math.abs(u - o.tapY) > 50) return this;
            p("dblclick" + i);
          } else o.tapX = d, o.tapY = u, l.opts["dblclick" + i] && l.opts["dblclick" + i] !== l.opts["click" + i] ? o.tapped = setTimeout(function () {
            o.tapped = null, a.isAnimating || p("click" + i);
          }, 500) : p("click" + i);

          return this;
        }
      }, n(t).on("onActivate.fb", function (e, t) {
        t && !t.Guestures && (t.Guestures = new c(t));
      }).on("beforeClose.fb", function (e, t) {
        t && t.Guestures && t.Guestures.destroy();
      });
    }(window, document, e), function (e, t) {
      "use strict";

      t.extend(!0, t.fancybox.defaults, {
        btnTpl: {
          slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
        },
        slideShow: {
          autoStart: !1,
          speed: 3e3,
          progress: !0
        }
      });

      var n = function n(e) {
        this.instance = e, this.init();
      };

      t.extend(n.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function init() {
          var e = this,
              n = e.instance,
              i = n.group[n.currIndex].opts.slideShow;
          e.$button = n.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
            e.toggle();
          }), n.group.length < 2 || !i ? e.$button.hide() : i.progress && (e.$progress = t('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner));
        },
        set: function set(e) {
          var n = this.instance,
              i = n.current;
          i && (!0 === e || i.opts.loop || n.currIndex < n.group.length - 1) ? this.isActive && "video" !== i.contentType && (this.$progress && t.fancybox.animate(this.$progress.show(), {
            scaleX: 1
          }, i.opts.slideShow.speed), this.timer = setTimeout(function () {
            n.current.opts.loop || n.current.index != n.group.length - 1 ? n.next() : n.jumpTo(0);
          }, i.opts.slideShow.speed)) : (this.stop(), n.idleSecondsCounter = 0, n.showControls());
        },
        clear: function clear() {
          clearTimeout(this.timer), this.timer = null, this.$progress && this.$progress.removeAttr("style").hide();
        },
        start: function start() {
          var e = this.instance.current;
          e && (this.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), this.isActive = !0, e.isComplete && this.set(!0), this.instance.trigger("onSlideShowChange", !0));
        },
        stop: function stop() {
          var e = this.instance.current;
          this.clear(), this.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), this.isActive = !1, this.instance.trigger("onSlideShowChange", !1), this.$progress && this.$progress.removeAttr("style").hide();
        },
        toggle: function toggle() {
          this.isActive ? this.stop() : this.start();
        }
      }), t(e).on({
        "onInit.fb": function onInitFb(e, t) {
          t && !t.SlideShow && (t.SlideShow = new n(t));
        },
        "beforeShow.fb": function beforeShowFb(e, t, n, i) {
          var o = t && t.SlideShow;
          i ? o && n.opts.slideShow.autoStart && o.start() : o && o.isActive && o.clear();
        },
        "afterShow.fb": function afterShowFb(e, t, n) {
          var i = t && t.SlideShow;
          i && i.isActive && i.set();
        },
        "afterKeydown.fb": function afterKeydownFb(n, i, o, s, r) {
          var a = i && i.SlideShow;
          !a || !o.opts.slideShow || 80 !== r && 32 !== r || t(e.activeElement).is("button,a,input") || (s.preventDefault(), a.toggle());
        },
        "beforeClose.fb onDeactivate.fb": function beforeCloseFbOnDeactivateFb(e, t) {
          var n = t && t.SlideShow;
          n && n.stop();
        }
      }), t(e).on("visibilitychange", function () {
        var n = t.fancybox.getInstance(),
            i = n && n.SlideShow;
        i && i.isActive && (e.hidden ? i.clear() : i.set());
      });
    }(document, e), function (e, t) {
      "use strict";

      var n = function () {
        for (var t = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], n = {}, i = 0; i < t.length; i++) {
          var o = t[i];

          if (o && o[1] in e) {
            for (var s = 0; s < o.length; s++) {
              n[t[0][s]] = o[s];
            }

            return n;
          }
        }

        return !1;
      }();

      if (n) {
        var i = {
          request: function request(t) {
            (t = t || e.documentElement)[n.requestFullscreen](t.ALLOW_KEYBOARD_INPUT);
          },
          exit: function exit() {
            e[n.exitFullscreen]();
          },
          toggle: function toggle(t) {
            t = t || e.documentElement, this.isFullscreen() ? this.exit() : this.request(t);
          },
          isFullscreen: function isFullscreen() {
            return Boolean(e[n.fullscreenElement]);
          },
          enabled: function enabled() {
            return Boolean(e[n.fullscreenEnabled]);
          }
        };
        t.extend(!0, t.fancybox.defaults, {
          btnTpl: {
            fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
          },
          fullScreen: {
            autoStart: !1
          }
        }), t(e).on(n.fullscreenchange, function () {
          var e = i.isFullscreen(),
              n = t.fancybox.getInstance();
          n && (n.current && "image" === n.current.type && n.isAnimating && (n.isAnimating = !1, n.update(!0, !0, 0), n.isComplete || n.complete()), n.trigger("onFullscreenChange", e), n.$refs.container.toggleClass("fancybox-is-fullscreen", e), n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !e).toggleClass("fancybox-button--fsexit", e));
        });
      }

      t(e).on({
        "onInit.fb": function onInitFb(e, t) {
          n ? t && t.group[t.currIndex].opts.fullScreen ? (t.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (e) {
            e.stopPropagation(), e.preventDefault(), i.toggle();
          }), t.opts.fullScreen && !0 === t.opts.fullScreen.autoStart && i.request(), t.FullScreen = i) : t && t.$refs.toolbar.find("[data-fancybox-fullscreen]").hide() : t.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
        },
        "afterKeydown.fb": function afterKeydownFb(e, t, n, i, o) {
          t && t.FullScreen && 70 === o && (i.preventDefault(), t.FullScreen.toggle());
        },
        "beforeClose.fb": function beforeCloseFb(e, t) {
          t && t.FullScreen && t.$refs.container.hasClass("fancybox-is-fullscreen") && i.exit();
        }
      });
    }(document, e), function (e, t) {
      "use strict";

      var n = "fancybox-thumbs";
      t.fancybox.defaults = t.extend(!0, {
        btnTpl: {
          thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
        },
        thumbs: {
          autoStart: !1,
          hideOnClose: !0,
          parentEl: ".fancybox-container",
          axis: "y"
        }
      }, t.fancybox.defaults);

      var i = function i(e) {
        this.init(e);
      };

      t.extend(i.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function init(e) {
          var t = this,
              n = e.group,
              i = 0;
          t.instance = e, t.opts = n[e.currIndex].opts.thumbs, e.Thumbs = t, t.$button = e.$refs.toolbar.find("[data-fancybox-thumbs]");

          for (var o = 0, s = n.length; o < s && (n[o].thumb && i++, !(i > 1)); o++) {
            ;
          }

          i > 1 && t.opts ? (t.$button.removeAttr("style").on("click", function () {
            t.toggle();
          }), t.isActive = !0) : t.$button.hide();
        },
        create: function create() {
          var e,
              i = this.instance,
              o = this.opts.parentEl,
              s = [];
          this.$grid || (this.$grid = t('<div class="' + n + " " + n + "-" + this.opts.axis + '"></div>').appendTo(i.$refs.container.find(o).addBack().filter(o)), this.$grid.on("click", "a", function () {
            i.jumpTo(t(this).attr("data-index"));
          })), this.$list || (this.$list = t('<div class="' + n + '__list">').appendTo(this.$grid)), t.each(i.group, function (t, n) {
            (e = n.thumb) || "image" !== n.type || (e = n.src), s.push('<a href="javascript:;" tabindex="0" data-index="' + t + '"' + (e && e.length ? ' style="background-image:url(' + e + ')"' : 'class="fancybox-thumbs-missing"') + "></a>");
          }), this.$list[0].innerHTML = s.join(""), "x" === this.opts.axis && this.$list.width(parseInt(this.$grid.css("padding-right"), 10) + i.group.length * this.$list.children().eq(0).outerWidth(!0));
        },
        focus: function focus(e) {
          var t,
              n,
              i = this.$list,
              o = this.$grid;
          this.instance.current && (n = (t = i.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + this.instance.current.index + '"]').addClass("fancybox-thumbs-active")).position(), "y" === this.opts.axis && (n.top < 0 || n.top > i.height() - t.outerHeight()) ? i.stop().animate({
            scrollTop: i.scrollTop() + n.top
          }, e) : "x" === this.opts.axis && (n.left < o.scrollLeft() || n.left > o.scrollLeft() + (o.width() - t.outerWidth())) && i.parent().stop().animate({
            scrollLeft: n.left
          }, e));
        },
        update: function update() {
          this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), this.focus(0)) : this.$grid && this.instance.trigger("onThumbsHide"), this.instance.update();
        },
        hide: function hide() {
          this.isVisible = !1, this.update();
        },
        show: function show() {
          this.isVisible = !0, this.update();
        },
        toggle: function toggle() {
          this.isVisible = !this.isVisible, this.update();
        }
      }), t(e).on({
        "onInit.fb": function onInitFb(e, t) {
          var n;
          t && !t.Thumbs && (n = new i(t)).isActive && !0 === n.opts.autoStart && n.show();
        },
        "beforeShow.fb": function beforeShowFb(e, t, n, i) {
          var o = t && t.Thumbs;
          o && o.isVisible && o.focus(i ? 0 : 250);
        },
        "afterKeydown.fb": function afterKeydownFb(e, t, n, i, o) {
          var s = t && t.Thumbs;
          s && s.isActive && 71 === o && (i.preventDefault(), s.toggle());
        },
        "beforeClose.fb": function beforeCloseFb(e, t) {
          var n = t && t.Thumbs;
          n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide();
        }
      });
    }(document, e), function (e, t) {
      "use strict";

      t.extend(!0, t.fancybox.defaults, {
        btnTpl: {
          share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
        },
        share: {
          url: function url(e, t) {
            return !e.currentHash && "inline" !== t.type && "html" !== t.type && (t.origSrc || t.src) || window.location;
          },
          tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
        }
      }), t(e).on("click", "[data-fancybox-share]", function () {
        var e,
            n,
            i,
            o,
            s = t.fancybox.getInstance(),
            r = s.current || null;
        r && ("function" === t.type(r.opts.share.url) && (e = r.opts.share.url.apply(r, [s, r])), n = r.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === r.type ? encodeURIComponent(r.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(e)).replace(/\{\{url_raw\}\}/g, (i = e, o = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
          "/": "&#x2F;",
          "`": "&#x60;",
          "=": "&#x3D;"
        }, String(i).replace(/[&<>"'`=\/]/g, function (e) {
          return o[e];
        }))).replace(/\{\{descr\}\}/g, s.$caption ? encodeURIComponent(s.$caption.text()) : ""), t.fancybox.open({
          src: s.translate(s, n),
          type: "html",
          opts: {
            touch: !1,
            animationEffect: !1,
            afterLoad: function afterLoad(e, t) {
              s.$refs.container.one("beforeClose.fb", function () {
                e.close(null, 0);
              }), t.$content.find(".fancybox-share__button").click(function () {
                return window.open(this.href, "Share", "width=550, height=450"), !1;
              });
            },
            mobile: {
              autoFocus: !1
            }
          }
        }));
      });
    }(document, e), function (e, t, n) {
      "use strict";

      function i() {
        var t = e.location.hash.substr(1),
            n = t.split("-"),
            i = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) && parseInt(n.pop(-1), 10) || 1;
        return {
          hash: t,
          index: i < 1 ? 1 : i,
          gallery: n.join("-")
        };
      }

      function o(e) {
        "" !== e.gallery && n("[data-fancybox='" + n.escapeSelector(e.gallery) + "']").eq(e.index - 1).focus().trigger("click.fb-start");
      }

      function s(e) {
        var t, n;
        return !!e && "" !== (n = (t = e.current ? e.current.opts : e.opts).hash || (t.$orig ? t.$orig.data("fancybox") || t.$orig.data("fancybox-trigger") : "")) && n;
      }

      n.escapeSelector || (n.escapeSelector = function (e) {
        return (e + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function (e, t) {
          return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
        });
      }), n(function () {
        !1 !== n.fancybox.defaults.hash && (n(t).on({
          "onInit.fb": function onInitFb(e, t) {
            var n, o;
            !1 !== t.group[t.currIndex].opts.hash && (n = i(), (o = s(t)) && n.gallery && o == n.gallery && (t.currIndex = n.index - 1));
          },
          "beforeShow.fb": function beforeShowFb(n, i, o, r) {
            var a;
            o && !1 !== o.opts.hash && (a = s(i)) && (i.currentHash = a + (i.group.length > 1 ? "-" + (o.index + 1) : ""), e.location.hash !== "#" + i.currentHash && (r && !i.origHash && (i.origHash = e.location.hash), i.hashTimer && clearTimeout(i.hashTimer), i.hashTimer = setTimeout(function () {
              "replaceState" in e.history ? (e.history[r ? "pushState" : "replaceState"]({}, t.title, e.location.pathname + e.location.search + "#" + i.currentHash), r && (i.hasCreatedHistory = !0)) : e.location.hash = i.currentHash, i.hashTimer = null;
            }, 300)));
          },
          "beforeClose.fb": function beforeCloseFb(n, i, o) {
            o && !1 !== o.opts.hash && (clearTimeout(i.hashTimer), i.currentHash && i.hasCreatedHistory ? e.history.back() : i.currentHash && ("replaceState" in e.history ? e.history.replaceState({}, t.title, e.location.pathname + e.location.search + (i.origHash || "")) : e.location.hash = i.origHash), i.currentHash = null);
          }
        }), n(e).on("hashchange.fb", function () {
          var e = i(),
              t = null;
          n.each(n(".fancybox-container").get().reverse(), function (e, i) {
            var o = n(i).data("FancyBox");
            if (o && o.currentHash) return t = o, !1;
          }), t ? t.currentHash === e.gallery + "-" + e.index || 1 === e.index && t.currentHash == e.gallery || (t.currentHash = null, t.close()) : "" !== e.gallery && o(e);
        }), setTimeout(function () {
          n.fancybox.getInstance() || o(i());
        }, 50));
      });
    }(window, document, e), function (e, t) {
      "use strict";

      var n = new Date().getTime();
      t(e).on({
        "onInit.fb": function onInitFb(e, t, i) {
          t.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (e) {
            var i = t.current,
                o = new Date().getTime();
            t.group.length < 2 || !1 === i.opts.wheel || "auto" === i.opts.wheel && "image" !== i.type || (e.preventDefault(), e.stopPropagation(), i.$slide.hasClass("fancybox-animated") || (e = e.originalEvent || e, o - n < 250 || (n = o, t[(-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0 ? "next" : "previous"]())));
          });
        }
      });
    }(document, e);
  }).call(this, n(0));
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var i = n(1),
      o = n.n(i);
  n(2), n(4), n(6);
  o()();
}]);