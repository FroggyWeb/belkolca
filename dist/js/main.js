"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t) {
  var e = {};

  function n(i) {
    if (e[i]) return e[i].exports;
    var o = e[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }

  n.m = t, n.c = e, n.d = function (t, e, i) {
    n.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: i
    });
  }, n.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, n.t = function (t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;
    if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var o in t) {
      n.d(i, o, function (e) {
        return t[e];
      }.bind(null, o));
    }
    return i;
  }, n.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };
    return n.d(e, "a", e), e;
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, n.p = "/", n(n.s = 10);
}([function (t, e, n) {
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

  !function (e, n) {
    "use strict";

    "object" == _typeof(t.exports) ? t.exports = e.document ? n(e, !0) : function (t) {
      if (!t.document) throw new Error("jQuery requires a window with a document");
      return n(t);
    } : n(e);
  }("undefined" != typeof window ? window : this, function (n, o) {
    "use strict";

    var r = [],
        s = Object.getPrototypeOf,
        a = r.slice,
        l = r.flat ? function (t) {
      return r.flat.call(t);
    } : function (t) {
      return r.concat.apply([], t);
    },
        c = r.push,
        u = r.indexOf,
        d = {},
        p = d.toString,
        f = d.hasOwnProperty,
        h = f.toString,
        g = h.call(Object),
        v = {},
        m = function m(t) {
      return "function" == typeof t && "number" != typeof t.nodeType;
    },
        y = function y(t) {
      return null != t && t === t.window;
    },
        b = n.document,
        x = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };

    function w(t, e, n) {
      var i,
          o,
          r = (n = n || b).createElement("script");
      if (r.text = t, e) for (i in x) {
        (o = e[i] || e.getAttribute && e.getAttribute(i)) && r.setAttribute(i, o);
      }
      n.head.appendChild(r).parentNode.removeChild(r);
    }

    function T(t) {
      return null == t ? t + "" : "object" == _typeof(t) || "function" == typeof t ? d[p.call(t)] || "object" : _typeof(t);
    }

    var S = function S(t, e) {
      return new S.fn.init(t, e);
    };

    function k(t) {
      var e = !!t && "length" in t && t.length,
          n = T(t);
      return !m(t) && !y(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t);
    }

    S.fn = S.prototype = {
      jquery: "3.5.1",
      constructor: S,
      length: 0,
      toArray: function toArray() {
        return a.call(this);
      },
      get: function get(t) {
        return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t];
      },
      pushStack: function pushStack(t) {
        var e = S.merge(this.constructor(), t);
        return e.prevObject = this, e;
      },
      each: function each(t) {
        return S.each(this, t);
      },
      map: function map(t) {
        return this.pushStack(S.map(this, function (e, n) {
          return t.call(e, n, e);
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
        return this.pushStack(S.grep(this, function (t, e) {
          return (e + 1) % 2;
        }));
      },
      odd: function odd() {
        return this.pushStack(S.grep(this, function (t, e) {
          return e % 2;
        }));
      },
      eq: function eq(t) {
        var e = this.length,
            n = +t + (t < 0 ? e : 0);
        return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
      },
      end: function end() {
        return this.prevObject || this.constructor();
      },
      push: c,
      sort: r.sort,
      splice: r.splice
    }, S.extend = S.fn.extend = function () {
      var t,
          e,
          n,
          i,
          o,
          r,
          s = arguments[0] || {},
          a = 1,
          l = arguments.length,
          c = !1;

      for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == _typeof(s) || m(s) || (s = {}), a === l && (s = this, a--); a < l; a++) {
        if (null != (t = arguments[a])) for (e in t) {
          i = t[e], "__proto__" !== e && s !== i && (c && i && (S.isPlainObject(i) || (o = Array.isArray(i))) ? (n = s[e], r = o && !Array.isArray(n) ? [] : o || S.isPlainObject(n) ? n : {}, o = !1, s[e] = S.extend(c, r, i)) : void 0 !== i && (s[e] = i));
        }
      }

      return s;
    }, S.extend({
      expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function error(t) {
        throw new Error(t);
      },
      noop: function noop() {},
      isPlainObject: function isPlainObject(t) {
        var e, n;
        return !(!t || "[object Object]" !== p.call(t)) && (!(e = s(t)) || "function" == typeof (n = f.call(e, "constructor") && e.constructor) && h.call(n) === g);
      },
      isEmptyObject: function isEmptyObject(t) {
        var e;

        for (e in t) {
          return !1;
        }

        return !0;
      },
      globalEval: function globalEval(t, e, n) {
        w(t, {
          nonce: e && e.nonce
        }, n);
      },
      each: function each(t, e) {
        var n,
            i = 0;
        if (k(t)) for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++) {
          ;
        } else for (i in t) {
          if (!1 === e.call(t[i], i, t[i])) break;
        }
        return t;
      },
      makeArray: function makeArray(t, e) {
        var n = e || [];
        return null != t && (k(Object(t)) ? S.merge(n, "string" == typeof t ? [t] : t) : c.call(n, t)), n;
      },
      inArray: function inArray(t, e, n) {
        return null == e ? -1 : u.call(e, t, n);
      },
      merge: function merge(t, e) {
        for (var n = +e.length, i = 0, o = t.length; i < n; i++) {
          t[o++] = e[i];
        }

        return t.length = o, t;
      },
      grep: function grep(t, e, n) {
        for (var i = [], o = 0, r = t.length, s = !n; o < r; o++) {
          !e(t[o], o) !== s && i.push(t[o]);
        }

        return i;
      },
      map: function map(t, e, n) {
        var i,
            o,
            r = 0,
            s = [];
        if (k(t)) for (i = t.length; r < i; r++) {
          null != (o = e(t[r], r, n)) && s.push(o);
        } else for (r in t) {
          null != (o = e(t[r], r, n)) && s.push(o);
        }
        return l(s);
      },
      guid: 1,
      support: v
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = r[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
      d["[object " + e + "]"] = e.toLowerCase();
    });

    var C =
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
    function (t) {
      var e,
          n,
          i,
          o,
          r,
          s,
          a,
          l,
          c,
          u,
          d,
          p,
          f,
          h,
          g,
          v,
          m,
          y,
          b,
          x = "sizzle" + 1 * new Date(),
          w = t.document,
          T = 0,
          S = 0,
          k = lt(),
          C = lt(),
          _ = lt(),
          $ = lt(),
          A = function A(t, e) {
        return t === e && (d = !0), 0;
      },
          P = {}.hasOwnProperty,
          E = [],
          O = E.pop,
          M = E.push,
          D = E.push,
          L = E.slice,
          j = function j(t, e) {
        for (var n = 0, i = t.length; n < i; n++) {
          if (t[n] === e) return n;
        }

        return -1;
      },
          H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          N = "[\\x20\\t\\r\\n\\f]",
          z = "(?:\\\\[\\da-fA-F]{1,6}" + N + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
          I = "\\[" + N + "*(" + z + ")(?:" + N + "*([*^$|!~]?=)" + N + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + z + "))|)" + N + "*\\]",
          F = ":(" + z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
          q = new RegExp(N + "+", "g"),
          R = new RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$", "g"),
          B = new RegExp("^" + N + "*," + N + "*"),
          W = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"),
          X = new RegExp(N + "|>"),
          Y = new RegExp(F),
          U = new RegExp("^" + z + "$"),
          V = {
        ID: new RegExp("^#(" + z + ")"),
        CLASS: new RegExp("^\\.(" + z + ")"),
        TAG: new RegExp("^(" + z + "|[*])"),
        ATTR: new RegExp("^" + I),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + N + "*(even|odd|(([+-]|)(\\d*)n|)" + N + "*(?:([+-]|)" + N + "*(\\d+)|))" + N + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + H + ")$", "i"),
        needsContext: new RegExp("^" + N + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + N + "*((?:-\\d)?\\d*)" + N + "*\\)|)(?=[^-]|$)", "i")
      },
          G = /HTML$/i,
          Z = /^(?:input|select|textarea|button)$/i,
          K = /^h\d$/i,
          Q = /^[^{]+\{\s*\[native \w/,
          J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          tt = /[+~]/,
          et = new RegExp("\\\\[\\da-fA-F]{1,6}" + N + "?|\\\\([^\\r\\n\\f])", "g"),
          nt = function nt(t, e) {
        var n = "0x" + t.slice(1) - 65536;
        return e || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
      },
          it = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          ot = function ot(t, e) {
        return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t;
      },
          rt = function rt() {
        p();
      },
          st = xt(function (t) {
        return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase();
      }, {
        dir: "parentNode",
        next: "legend"
      });

      try {
        D.apply(E = L.call(w.childNodes), w.childNodes), E[w.childNodes.length].nodeType;
      } catch (t) {
        D = {
          apply: E.length ? function (t, e) {
            M.apply(t, L.call(e));
          } : function (t, e) {
            for (var n = t.length, i = 0; t[n++] = e[i++];) {
              ;
            }

            t.length = n - 1;
          }
        };
      }

      function at(t, e, i, o) {
        var r,
            a,
            c,
            u,
            d,
            h,
            m,
            y = e && e.ownerDocument,
            w = e ? e.nodeType : 9;
        if (i = i || [], "string" != typeof t || !t || 1 !== w && 9 !== w && 11 !== w) return i;

        if (!o && (p(e), e = e || f, g)) {
          if (11 !== w && (d = J.exec(t))) if (r = d[1]) {
            if (9 === w) {
              if (!(c = e.getElementById(r))) return i;
              if (c.id === r) return i.push(c), i;
            } else if (y && (c = y.getElementById(r)) && b(e, c) && c.id === r) return i.push(c), i;
          } else {
            if (d[2]) return D.apply(i, e.getElementsByTagName(t)), i;
            if ((r = d[3]) && n.getElementsByClassName && e.getElementsByClassName) return D.apply(i, e.getElementsByClassName(r)), i;
          }

          if (n.qsa && !$[t + " "] && (!v || !v.test(t)) && (1 !== w || "object" !== e.nodeName.toLowerCase())) {
            if (m = t, y = e, 1 === w && (X.test(t) || W.test(t))) {
              for ((y = tt.test(t) && mt(e.parentNode) || e) === e && n.scope || ((u = e.getAttribute("id")) ? u = u.replace(it, ot) : e.setAttribute("id", u = x)), a = (h = s(t)).length; a--;) {
                h[a] = (u ? "#" + u : ":scope") + " " + bt(h[a]);
              }

              m = h.join(",");
            }

            try {
              return D.apply(i, y.querySelectorAll(m)), i;
            } catch (e) {
              $(t, !0);
            } finally {
              u === x && e.removeAttribute("id");
            }
          }
        }

        return l(t.replace(R, "$1"), e, i, o);
      }

      function lt() {
        var t = [];
        return function e(n, o) {
          return t.push(n + " ") > i.cacheLength && delete e[t.shift()], e[n + " "] = o;
        };
      }

      function ct(t) {
        return t[x] = !0, t;
      }

      function ut(t) {
        var e = f.createElement("fieldset");

        try {
          return !!t(e);
        } catch (t) {
          return !1;
        } finally {
          e.parentNode && e.parentNode.removeChild(e), e = null;
        }
      }

      function dt(t, e) {
        for (var n = t.split("|"), o = n.length; o--;) {
          i.attrHandle[n[o]] = e;
        }
      }

      function pt(t, e) {
        var n = e && t,
            i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
        if (i) return i;
        if (n) for (; n = n.nextSibling;) {
          if (n === e) return -1;
        }
        return t ? 1 : -1;
      }

      function ft(t) {
        return function (e) {
          return "input" === e.nodeName.toLowerCase() && e.type === t;
        };
      }

      function ht(t) {
        return function (e) {
          var n = e.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && e.type === t;
        };
      }

      function gt(t) {
        return function (e) {
          return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && st(e) === t : e.disabled === t : "label" in e && e.disabled === t;
        };
      }

      function vt(t) {
        return ct(function (e) {
          return e = +e, ct(function (n, i) {
            for (var o, r = t([], n.length, e), s = r.length; s--;) {
              n[o = r[s]] && (n[o] = !(i[o] = n[o]));
            }
          });
        });
      }

      function mt(t) {
        return t && void 0 !== t.getElementsByTagName && t;
      }

      for (e in n = at.support = {}, r = at.isXML = function (t) {
        var e = t.namespaceURI,
            n = (t.ownerDocument || t).documentElement;
        return !G.test(e || n && n.nodeName || "HTML");
      }, p = at.setDocument = function (t) {
        var e,
            o,
            s = t ? t.ownerDocument || t : w;
        return s != f && 9 === s.nodeType && s.documentElement ? (h = (f = s).documentElement, g = !r(f), w != f && (o = f.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", rt, !1) : o.attachEvent && o.attachEvent("onunload", rt)), n.scope = ut(function (t) {
          return h.appendChild(t).appendChild(f.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length;
        }), n.attributes = ut(function (t) {
          return t.className = "i", !t.getAttribute("className");
        }), n.getElementsByTagName = ut(function (t) {
          return t.appendChild(f.createComment("")), !t.getElementsByTagName("*").length;
        }), n.getElementsByClassName = Q.test(f.getElementsByClassName), n.getById = ut(function (t) {
          return h.appendChild(t).id = x, !f.getElementsByName || !f.getElementsByName(x).length;
        }), n.getById ? (i.filter.ID = function (t) {
          var e = t.replace(et, nt);
          return function (t) {
            return t.getAttribute("id") === e;
          };
        }, i.find.ID = function (t, e) {
          if (void 0 !== e.getElementById && g) {
            var n = e.getElementById(t);
            return n ? [n] : [];
          }
        }) : (i.filter.ID = function (t) {
          var e = t.replace(et, nt);
          return function (t) {
            var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
            return n && n.value === e;
          };
        }, i.find.ID = function (t, e) {
          if (void 0 !== e.getElementById && g) {
            var n,
                i,
                o,
                r = e.getElementById(t);

            if (r) {
              if ((n = r.getAttributeNode("id")) && n.value === t) return [r];

              for (o = e.getElementsByName(t), i = 0; r = o[i++];) {
                if ((n = r.getAttributeNode("id")) && n.value === t) return [r];
              }
            }

            return [];
          }
        }), i.find.TAG = n.getElementsByTagName ? function (t, e) {
          return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0;
        } : function (t, e) {
          var n,
              i = [],
              o = 0,
              r = e.getElementsByTagName(t);

          if ("*" === t) {
            for (; n = r[o++];) {
              1 === n.nodeType && i.push(n);
            }

            return i;
          }

          return r;
        }, i.find.CLASS = n.getElementsByClassName && function (t, e) {
          if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t);
        }, m = [], v = [], (n.qsa = Q.test(f.querySelectorAll)) && (ut(function (t) {
          var e;
          h.appendChild(t).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + N + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || v.push("\\[" + N + "*(?:value|" + H + ")"), t.querySelectorAll("[id~=" + x + "-]").length || v.push("~="), (e = f.createElement("input")).setAttribute("name", ""), t.appendChild(e), t.querySelectorAll("[name='']").length || v.push("\\[" + N + "*name" + N + "*=" + N + "*(?:''|\"\")"), t.querySelectorAll(":checked").length || v.push(":checked"), t.querySelectorAll("a#" + x + "+*").length || v.push(".#.+[+~]"), t.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]");
        }), ut(function (t) {
          t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
          var e = f.createElement("input");
          e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && v.push("name" + N + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), h.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), v.push(",.*:");
        })), (n.matchesSelector = Q.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ut(function (t) {
          n.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), m.push("!=", F);
        }), v = v.length && new RegExp(v.join("|")), m = m.length && new RegExp(m.join("|")), e = Q.test(h.compareDocumentPosition), b = e || Q.test(h.contains) ? function (t, e) {
          var n = 9 === t.nodeType ? t.documentElement : t,
              i = e && e.parentNode;
          return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)));
        } : function (t, e) {
          if (e) for (; e = e.parentNode;) {
            if (e === t) return !0;
          }
          return !1;
        }, A = e ? function (t, e) {
          if (t === e) return d = !0, 0;
          var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
          return i || (1 & (i = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t == f || t.ownerDocument == w && b(w, t) ? -1 : e == f || e.ownerDocument == w && b(w, e) ? 1 : u ? j(u, t) - j(u, e) : 0 : 4 & i ? -1 : 1);
        } : function (t, e) {
          if (t === e) return d = !0, 0;
          var n,
              i = 0,
              o = t.parentNode,
              r = e.parentNode,
              s = [t],
              a = [e];
          if (!o || !r) return t == f ? -1 : e == f ? 1 : o ? -1 : r ? 1 : u ? j(u, t) - j(u, e) : 0;
          if (o === r) return pt(t, e);

          for (n = t; n = n.parentNode;) {
            s.unshift(n);
          }

          for (n = e; n = n.parentNode;) {
            a.unshift(n);
          }

          for (; s[i] === a[i];) {
            i++;
          }

          return i ? pt(s[i], a[i]) : s[i] == w ? -1 : a[i] == w ? 1 : 0;
        }, f) : f;
      }, at.matches = function (t, e) {
        return at(t, null, null, e);
      }, at.matchesSelector = function (t, e) {
        if (p(t), n.matchesSelector && g && !$[e + " "] && (!m || !m.test(e)) && (!v || !v.test(e))) try {
          var i = y.call(t, e);
          if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i;
        } catch (t) {
          $(e, !0);
        }
        return at(e, f, null, [t]).length > 0;
      }, at.contains = function (t, e) {
        return (t.ownerDocument || t) != f && p(t), b(t, e);
      }, at.attr = function (t, e) {
        (t.ownerDocument || t) != f && p(t);
        var o = i.attrHandle[e.toLowerCase()],
            r = o && P.call(i.attrHandle, e.toLowerCase()) ? o(t, e, !g) : void 0;
        return void 0 !== r ? r : n.attributes || !g ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null;
      }, at.escape = function (t) {
        return (t + "").replace(it, ot);
      }, at.error = function (t) {
        throw new Error("Syntax error, unrecognized expression: " + t);
      }, at.uniqueSort = function (t) {
        var e,
            i = [],
            o = 0,
            r = 0;

        if (d = !n.detectDuplicates, u = !n.sortStable && t.slice(0), t.sort(A), d) {
          for (; e = t[r++];) {
            e === t[r] && (o = i.push(r));
          }

          for (; o--;) {
            t.splice(i[o], 1);
          }
        }

        return u = null, t;
      }, o = at.getText = function (t) {
        var e,
            n = "",
            i = 0,
            r = t.nodeType;

        if (r) {
          if (1 === r || 9 === r || 11 === r) {
            if ("string" == typeof t.textContent) return t.textContent;

            for (t = t.firstChild; t; t = t.nextSibling) {
              n += o(t);
            }
          } else if (3 === r || 4 === r) return t.nodeValue;
        } else for (; e = t[i++];) {
          n += o(e);
        }

        return n;
      }, (i = at.selectors = {
        cacheLength: 50,
        createPseudo: ct,
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
          ATTR: function ATTR(t) {
            return t[1] = t[1].replace(et, nt), t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
          },
          CHILD: function CHILD(t) {
            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || at.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && at.error(t[0]), t;
          },
          PSEUDO: function PSEUDO(t) {
            var e,
                n = !t[6] && t[2];
            return V.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && Y.test(n) && (e = s(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3));
          }
        },
        filter: {
          TAG: function TAG(t) {
            var e = t.replace(et, nt).toLowerCase();
            return "*" === t ? function () {
              return !0;
            } : function (t) {
              return t.nodeName && t.nodeName.toLowerCase() === e;
            };
          },
          CLASS: function CLASS(t) {
            var e = k[t + " "];
            return e || (e = new RegExp("(^|" + N + ")" + t + "(" + N + "|$)")) && k(t, function (t) {
              return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "");
            });
          },
          ATTR: function ATTR(t, e, n) {
            return function (i) {
              var o = at.attr(i, t);
              return null == o ? "!=" === e : !e || (o += "", "=" === e ? o === n : "!=" === e ? o !== n : "^=" === e ? n && 0 === o.indexOf(n) : "*=" === e ? n && o.indexOf(n) > -1 : "$=" === e ? n && o.slice(-n.length) === n : "~=" === e ? (" " + o.replace(q, " ") + " ").indexOf(n) > -1 : "|=" === e && (o === n || o.slice(0, n.length + 1) === n + "-"));
            };
          },
          CHILD: function CHILD(t, e, n, i, o) {
            var r = "nth" !== t.slice(0, 3),
                s = "last" !== t.slice(-4),
                a = "of-type" === e;
            return 1 === i && 0 === o ? function (t) {
              return !!t.parentNode;
            } : function (e, n, l) {
              var c,
                  u,
                  d,
                  p,
                  f,
                  h,
                  g = r !== s ? "nextSibling" : "previousSibling",
                  v = e.parentNode,
                  m = a && e.nodeName.toLowerCase(),
                  y = !l && !a,
                  b = !1;

              if (v) {
                if (r) {
                  for (; g;) {
                    for (p = e; p = p[g];) {
                      if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                    }

                    h = g = "only" === t && !h && "nextSibling";
                  }

                  return !0;
                }

                if (h = [s ? v.firstChild : v.lastChild], s && y) {
                  for (b = (f = (c = (u = (d = (p = v)[x] || (p[x] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[t] || [])[0] === T && c[1]) && c[2], p = f && v.childNodes[f]; p = ++f && p && p[g] || (b = f = 0) || h.pop();) {
                    if (1 === p.nodeType && ++b && p === e) {
                      u[t] = [T, f, b];
                      break;
                    }
                  }
                } else if (y && (b = f = (c = (u = (d = (p = e)[x] || (p[x] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[t] || [])[0] === T && c[1]), !1 === b) for (; (p = ++f && p && p[g] || (b = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++b || (y && ((u = (d = p[x] || (p[x] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[t] = [T, b]), p !== e));) {
                  ;
                }

                return (b -= o) === i || b % i == 0 && b / i >= 0;
              }
            };
          },
          PSEUDO: function PSEUDO(t, e) {
            var n,
                o = i.pseudos[t] || i.setFilters[t.toLowerCase()] || at.error("unsupported pseudo: " + t);
            return o[x] ? o(e) : o.length > 1 ? (n = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? ct(function (t, n) {
              for (var i, r = o(t, e), s = r.length; s--;) {
                t[i = j(t, r[s])] = !(n[i] = r[s]);
              }
            }) : function (t) {
              return o(t, 0, n);
            }) : o;
          }
        },
        pseudos: {
          not: ct(function (t) {
            var e = [],
                n = [],
                i = a(t.replace(R, "$1"));
            return i[x] ? ct(function (t, e, n, o) {
              for (var r, s = i(t, null, o, []), a = t.length; a--;) {
                (r = s[a]) && (t[a] = !(e[a] = r));
              }
            }) : function (t, o, r) {
              return e[0] = t, i(e, null, r, n), e[0] = null, !n.pop();
            };
          }),
          has: ct(function (t) {
            return function (e) {
              return at(t, e).length > 0;
            };
          }),
          contains: ct(function (t) {
            return t = t.replace(et, nt), function (e) {
              return (e.textContent || o(e)).indexOf(t) > -1;
            };
          }),
          lang: ct(function (t) {
            return U.test(t || "") || at.error("unsupported lang: " + t), t = t.replace(et, nt).toLowerCase(), function (e) {
              var n;

              do {
                if (n = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-");
              } while ((e = e.parentNode) && 1 === e.nodeType);

              return !1;
            };
          }),
          target: function target(e) {
            var n = t.location && t.location.hash;
            return n && n.slice(1) === e.id;
          },
          root: function root(t) {
            return t === h;
          },
          focus: function focus(t) {
            return t === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
          },
          enabled: gt(!1),
          disabled: gt(!0),
          checked: function checked(t) {
            var e = t.nodeName.toLowerCase();
            return "input" === e && !!t.checked || "option" === e && !!t.selected;
          },
          selected: function selected(t) {
            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
          },
          empty: function empty(t) {
            for (t = t.firstChild; t; t = t.nextSibling) {
              if (t.nodeType < 6) return !1;
            }

            return !0;
          },
          parent: function parent(t) {
            return !i.pseudos.empty(t);
          },
          header: function header(t) {
            return K.test(t.nodeName);
          },
          input: function input(t) {
            return Z.test(t.nodeName);
          },
          button: function button(t) {
            var e = t.nodeName.toLowerCase();
            return "input" === e && "button" === t.type || "button" === e;
          },
          text: function text(t) {
            var e;
            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
          },
          first: vt(function () {
            return [0];
          }),
          last: vt(function (t, e) {
            return [e - 1];
          }),
          eq: vt(function (t, e, n) {
            return [n < 0 ? n + e : n];
          }),
          even: vt(function (t, e) {
            for (var n = 0; n < e; n += 2) {
              t.push(n);
            }

            return t;
          }),
          odd: vt(function (t, e) {
            for (var n = 1; n < e; n += 2) {
              t.push(n);
            }

            return t;
          }),
          lt: vt(function (t, e, n) {
            for (var i = n < 0 ? n + e : n > e ? e : n; --i >= 0;) {
              t.push(i);
            }

            return t;
          }),
          gt: vt(function (t, e, n) {
            for (var i = n < 0 ? n + e : n; ++i < e;) {
              t.push(i);
            }

            return t;
          })
        }
      }).pseudos.nth = i.pseudos.eq, {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) {
        i.pseudos[e] = ft(e);
      }

      for (e in {
        submit: !0,
        reset: !0
      }) {
        i.pseudos[e] = ht(e);
      }

      function yt() {}

      function bt(t) {
        for (var e = 0, n = t.length, i = ""; e < n; e++) {
          i += t[e].value;
        }

        return i;
      }

      function xt(t, e, n) {
        var i = e.dir,
            o = e.next,
            r = o || i,
            s = n && "parentNode" === r,
            a = S++;
        return e.first ? function (e, n, o) {
          for (; e = e[i];) {
            if (1 === e.nodeType || s) return t(e, n, o);
          }

          return !1;
        } : function (e, n, l) {
          var c,
              u,
              d,
              p = [T, a];

          if (l) {
            for (; e = e[i];) {
              if ((1 === e.nodeType || s) && t(e, n, l)) return !0;
            }
          } else for (; e = e[i];) {
            if (1 === e.nodeType || s) if (u = (d = e[x] || (e[x] = {}))[e.uniqueID] || (d[e.uniqueID] = {}), o && o === e.nodeName.toLowerCase()) e = e[i] || e;else {
              if ((c = u[r]) && c[0] === T && c[1] === a) return p[2] = c[2];
              if (u[r] = p, p[2] = t(e, n, l)) return !0;
            }
          }

          return !1;
        };
      }

      function wt(t) {
        return t.length > 1 ? function (e, n, i) {
          for (var o = t.length; o--;) {
            if (!t[o](e, n, i)) return !1;
          }

          return !0;
        } : t[0];
      }

      function Tt(t, e, n, i, o) {
        for (var r, s = [], a = 0, l = t.length, c = null != e; a < l; a++) {
          (r = t[a]) && (n && !n(r, i, o) || (s.push(r), c && e.push(a)));
        }

        return s;
      }

      function St(t, e, n, i, o, r) {
        return i && !i[x] && (i = St(i)), o && !o[x] && (o = St(o, r)), ct(function (r, s, a, l) {
          var c,
              u,
              d,
              p = [],
              f = [],
              h = s.length,
              g = r || function (t, e, n) {
            for (var i = 0, o = e.length; i < o; i++) {
              at(t, e[i], n);
            }

            return n;
          }(e || "*", a.nodeType ? [a] : a, []),
              v = !t || !r && e ? g : Tt(g, p, t, a, l),
              m = n ? o || (r ? t : h || i) ? [] : s : v;

          if (n && n(v, m, a, l), i) for (c = Tt(m, f), i(c, [], a, l), u = c.length; u--;) {
            (d = c[u]) && (m[f[u]] = !(v[f[u]] = d));
          }

          if (r) {
            if (o || t) {
              if (o) {
                for (c = [], u = m.length; u--;) {
                  (d = m[u]) && c.push(v[u] = d);
                }

                o(null, m = [], c, l);
              }

              for (u = m.length; u--;) {
                (d = m[u]) && (c = o ? j(r, d) : p[u]) > -1 && (r[c] = !(s[c] = d));
              }
            }
          } else m = Tt(m === s ? m.splice(h, m.length) : m), o ? o(null, s, m, l) : D.apply(s, m);
        });
      }

      function kt(t) {
        for (var e, n, o, r = t.length, s = i.relative[t[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = xt(function (t) {
          return t === e;
        }, a, !0), d = xt(function (t) {
          return j(e, t) > -1;
        }, a, !0), p = [function (t, n, i) {
          var o = !s && (i || n !== c) || ((e = n).nodeType ? u(t, n, i) : d(t, n, i));
          return e = null, o;
        }]; l < r; l++) {
          if (n = i.relative[t[l].type]) p = [xt(wt(p), n)];else {
            if ((n = i.filter[t[l].type].apply(null, t[l].matches))[x]) {
              for (o = ++l; o < r && !i.relative[t[o].type]; o++) {
                ;
              }

              return St(l > 1 && wt(p), l > 1 && bt(t.slice(0, l - 1).concat({
                value: " " === t[l - 2].type ? "*" : ""
              })).replace(R, "$1"), n, l < o && kt(t.slice(l, o)), o < r && kt(t = t.slice(o)), o < r && bt(t));
            }

            p.push(n);
          }
        }

        return wt(p);
      }

      return yt.prototype = i.filters = i.pseudos, i.setFilters = new yt(), s = at.tokenize = function (t, e) {
        var n,
            o,
            r,
            s,
            a,
            l,
            c,
            u = C[t + " "];
        if (u) return e ? 0 : u.slice(0);

        for (a = t, l = [], c = i.preFilter; a;) {
          for (s in n && !(o = B.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = W.exec(a)) && (n = o.shift(), r.push({
            value: n,
            type: o[0].replace(R, " ")
          }), a = a.slice(n.length)), i.filter) {
            !(o = V[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(), r.push({
              value: n,
              type: s,
              matches: o
            }), a = a.slice(n.length));
          }

          if (!n) break;
        }

        return e ? a.length : a ? at.error(t) : C(t, l).slice(0);
      }, a = at.compile = function (t, e) {
        var n,
            o = [],
            r = [],
            a = _[t + " "];

        if (!a) {
          for (e || (e = s(t)), n = e.length; n--;) {
            (a = kt(e[n]))[x] ? o.push(a) : r.push(a);
          }

          (a = _(t, function (t, e) {
            var n = e.length > 0,
                o = t.length > 0,
                r = function r(_r, s, a, l, u) {
              var d,
                  h,
                  v,
                  m = 0,
                  y = "0",
                  b = _r && [],
                  x = [],
                  w = c,
                  S = _r || o && i.find.TAG("*", u),
                  k = T += null == w ? 1 : Math.random() || .1,
                  C = S.length;

              for (u && (c = s == f || s || u); y !== C && null != (d = S[y]); y++) {
                if (o && d) {
                  for (h = 0, s || d.ownerDocument == f || (p(d), a = !g); v = t[h++];) {
                    if (v(d, s || f, a)) {
                      l.push(d);
                      break;
                    }
                  }

                  u && (T = k);
                }

                n && ((d = !v && d) && m--, _r && b.push(d));
              }

              if (m += y, n && y !== m) {
                for (h = 0; v = e[h++];) {
                  v(b, x, s, a);
                }

                if (_r) {
                  if (m > 0) for (; y--;) {
                    b[y] || x[y] || (x[y] = O.call(l));
                  }
                  x = Tt(x);
                }

                D.apply(l, x), u && !_r && x.length > 0 && m + e.length > 1 && at.uniqueSort(l);
              }

              return u && (T = k, c = w), b;
            };

            return n ? ct(r) : r;
          }(r, o))).selector = t;
        }

        return a;
      }, l = at.select = function (t, e, n, o) {
        var r,
            l,
            c,
            u,
            d,
            p = "function" == typeof t && t,
            f = !o && s(t = p.selector || t);

        if (n = n || [], 1 === f.length) {
          if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === e.nodeType && g && i.relative[l[1].type]) {
            if (!(e = (i.find.ID(c.matches[0].replace(et, nt), e) || [])[0])) return n;
            p && (e = e.parentNode), t = t.slice(l.shift().value.length);
          }

          for (r = V.needsContext.test(t) ? 0 : l.length; r-- && (c = l[r], !i.relative[u = c.type]);) {
            if ((d = i.find[u]) && (o = d(c.matches[0].replace(et, nt), tt.test(l[0].type) && mt(e.parentNode) || e))) {
              if (l.splice(r, 1), !(t = o.length && bt(l))) return D.apply(n, o), n;
              break;
            }
          }
        }

        return (p || a(t, f))(o, e, !g, n, !e || tt.test(t) && mt(e.parentNode) || e), n;
      }, n.sortStable = x.split("").sort(A).join("") === x, n.detectDuplicates = !!d, p(), n.sortDetached = ut(function (t) {
        return 1 & t.compareDocumentPosition(f.createElement("fieldset"));
      }), ut(function (t) {
        return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href");
      }) || dt("type|href|height|width", function (t, e, n) {
        if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
      }), n.attributes && ut(function (t) {
        return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
      }) || dt("value", function (t, e, n) {
        if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
      }), ut(function (t) {
        return null == t.getAttribute("disabled");
      }) || dt(H, function (t, e, n) {
        var i;
        if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null;
      }), at;
    }(n);

    S.find = C, S.expr = C.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = C.uniqueSort, S.text = C.getText, S.isXMLDoc = C.isXML, S.contains = C.contains, S.escapeSelector = C.escape;

    var _ = function _(t, e, n) {
      for (var i = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;) {
        if (1 === t.nodeType) {
          if (o && S(t).is(n)) break;
          i.push(t);
        }
      }

      return i;
    },
        $ = function $(t, e) {
      for (var n = []; t; t = t.nextSibling) {
        1 === t.nodeType && t !== e && n.push(t);
      }

      return n;
    },
        A = S.expr.match.needsContext;

    function P(t, e) {
      return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
    }

    var E = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function O(t, e, n) {
      return m(e) ? S.grep(t, function (t, i) {
        return !!e.call(t, i, t) !== n;
      }) : e.nodeType ? S.grep(t, function (t) {
        return t === e !== n;
      }) : "string" != typeof e ? S.grep(t, function (t) {
        return u.call(e, t) > -1 !== n;
      }) : S.filter(e, t, n);
    }

    S.filter = function (t, e, n) {
      var i = e[0];
      return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? S.find.matchesSelector(i, t) ? [i] : [] : S.find.matches(t, S.grep(e, function (t) {
        return 1 === t.nodeType;
      }));
    }, S.fn.extend({
      find: function find(t) {
        var e,
            n,
            i = this.length,
            o = this;
        if ("string" != typeof t) return this.pushStack(S(t).filter(function () {
          for (e = 0; e < i; e++) {
            if (S.contains(o[e], this)) return !0;
          }
        }));

        for (n = this.pushStack([]), e = 0; e < i; e++) {
          S.find(t, o[e], n);
        }

        return i > 1 ? S.uniqueSort(n) : n;
      },
      filter: function filter(t) {
        return this.pushStack(O(this, t || [], !1));
      },
      not: function not(t) {
        return this.pushStack(O(this, t || [], !0));
      },
      is: function is(t) {
        return !!O(this, "string" == typeof t && A.test(t) ? S(t) : t || [], !1).length;
      }
    });
    var M,
        D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function (t, e, n) {
      var i, o;
      if (!t) return this;

      if (n = n || M, "string" == typeof t) {
        if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : D.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);

        if (i[1]) {
          if (e = e instanceof S ? e[0] : e, S.merge(this, S.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : b, !0)), E.test(i[1]) && S.isPlainObject(e)) for (i in e) {
            m(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
          }
          return this;
        }

        return (o = b.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
      }

      return t.nodeType ? (this[0] = t, this.length = 1, this) : m(t) ? void 0 !== n.ready ? n.ready(t) : t(S) : S.makeArray(t, this);
    }).prototype = S.fn, M = S(b);
    var L = /^(?:parents|prev(?:Until|All))/,
        j = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };

    function H(t, e) {
      for (; (t = t[e]) && 1 !== t.nodeType;) {
        ;
      }

      return t;
    }

    S.fn.extend({
      has: function has(t) {
        var e = S(t, this),
            n = e.length;
        return this.filter(function () {
          for (var t = 0; t < n; t++) {
            if (S.contains(this, e[t])) return !0;
          }
        });
      },
      closest: function closest(t, e) {
        var n,
            i = 0,
            o = this.length,
            r = [],
            s = "string" != typeof t && S(t);
        if (!A.test(t)) for (; i < o; i++) {
          for (n = this[i]; n && n !== e; n = n.parentNode) {
            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && S.find.matchesSelector(n, t))) {
              r.push(n);
              break;
            }
          }
        }
        return this.pushStack(r.length > 1 ? S.uniqueSort(r) : r);
      },
      index: function index(t) {
        return t ? "string" == typeof t ? u.call(S(t), this[0]) : u.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      },
      add: function add(t, e) {
        return this.pushStack(S.uniqueSort(S.merge(this.get(), S(t, e))));
      },
      addBack: function addBack(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
      }
    }), S.each({
      parent: function parent(t) {
        var e = t.parentNode;
        return e && 11 !== e.nodeType ? e : null;
      },
      parents: function parents(t) {
        return _(t, "parentNode");
      },
      parentsUntil: function parentsUntil(t, e, n) {
        return _(t, "parentNode", n);
      },
      next: function next(t) {
        return H(t, "nextSibling");
      },
      prev: function prev(t) {
        return H(t, "previousSibling");
      },
      nextAll: function nextAll(t) {
        return _(t, "nextSibling");
      },
      prevAll: function prevAll(t) {
        return _(t, "previousSibling");
      },
      nextUntil: function nextUntil(t, e, n) {
        return _(t, "nextSibling", n);
      },
      prevUntil: function prevUntil(t, e, n) {
        return _(t, "previousSibling", n);
      },
      siblings: function siblings(t) {
        return $((t.parentNode || {}).firstChild, t);
      },
      children: function children(t) {
        return $(t.firstChild);
      },
      contents: function contents(t) {
        return null != t.contentDocument && s(t.contentDocument) ? t.contentDocument : (P(t, "template") && (t = t.content || t), S.merge([], t.childNodes));
      }
    }, function (t, e) {
      S.fn[t] = function (n, i) {
        var o = S.map(this, e, n);
        return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = S.filter(i, o)), this.length > 1 && (j[t] || S.uniqueSort(o), L.test(t) && o.reverse()), this.pushStack(o);
      };
    });
    var N = /[^\x20\t\r\n\f]+/g;

    function z(t) {
      return t;
    }

    function I(t) {
      throw t;
    }

    function F(t, e, n, i) {
      var o;

      try {
        t && m(o = t.promise) ? o.call(t).done(e).fail(n) : t && m(o = t.then) ? o.call(t, e, n) : e.apply(void 0, [t].slice(i));
      } catch (t) {
        n.apply(void 0, [t]);
      }
    }

    S.Callbacks = function (t) {
      t = "string" == typeof t ? function (t) {
        var e = {};
        return S.each(t.match(N) || [], function (t, n) {
          e[n] = !0;
        }), e;
      }(t) : S.extend({}, t);

      var e,
          n,
          i,
          o,
          r = [],
          s = [],
          a = -1,
          l = function l() {
        for (o = o || t.once, i = e = !0; s.length; a = -1) {
          for (n = s.shift(); ++a < r.length;) {
            !1 === r[a].apply(n[0], n[1]) && t.stopOnFalse && (a = r.length, n = !1);
          }
        }

        t.memory || (n = !1), e = !1, o && (r = n ? [] : "");
      },
          c = {
        add: function add() {
          return r && (n && !e && (a = r.length - 1, s.push(n)), function e(n) {
            S.each(n, function (n, i) {
              m(i) ? t.unique && c.has(i) || r.push(i) : i && i.length && "string" !== T(i) && e(i);
            });
          }(arguments), n && !e && l()), this;
        },
        remove: function remove() {
          return S.each(arguments, function (t, e) {
            for (var n; (n = S.inArray(e, r, n)) > -1;) {
              r.splice(n, 1), n <= a && a--;
            }
          }), this;
        },
        has: function has(t) {
          return t ? S.inArray(t, r) > -1 : r.length > 0;
        },
        empty: function empty() {
          return r && (r = []), this;
        },
        disable: function disable() {
          return o = s = [], r = n = "", this;
        },
        disabled: function disabled() {
          return !r;
        },
        lock: function lock() {
          return o = s = [], n || e || (r = n = ""), this;
        },
        locked: function locked() {
          return !!o;
        },
        fireWith: function fireWith(t, n) {
          return o || (n = [t, (n = n || []).slice ? n.slice() : n], s.push(n), e || l()), this;
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
      Deferred: function Deferred(t) {
        var e = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]],
            i = "pending",
            o = {
          state: function state() {
            return i;
          },
          always: function always() {
            return r.done(arguments).fail(arguments), this;
          },
          "catch": function _catch(t) {
            return o.then(null, t);
          },
          pipe: function pipe() {
            var t = arguments;
            return S.Deferred(function (n) {
              S.each(e, function (e, i) {
                var o = m(t[i[4]]) && t[i[4]];
                r[i[1]](function () {
                  var t = o && o.apply(this, arguments);
                  t && m(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, o ? [t] : arguments);
                });
              }), t = null;
            }).promise();
          },
          then: function then(t, i, o) {
            var r = 0;

            function s(t, e, i, o) {
              return function () {
                var a = this,
                    l = arguments,
                    c = function c() {
                  var n, c;

                  if (!(t < r)) {
                    if ((n = i.apply(a, l)) === e.promise()) throw new TypeError("Thenable self-resolution");
                    c = n && ("object" == _typeof(n) || "function" == typeof n) && n.then, m(c) ? o ? c.call(n, s(r, e, z, o), s(r, e, I, o)) : (r++, c.call(n, s(r, e, z, o), s(r, e, I, o), s(r, e, z, e.notifyWith))) : (i !== z && (a = void 0, l = [n]), (o || e.resolveWith)(a, l));
                  }
                },
                    u = o ? c : function () {
                  try {
                    c();
                  } catch (n) {
                    S.Deferred.exceptionHook && S.Deferred.exceptionHook(n, u.stackTrace), t + 1 >= r && (i !== I && (a = void 0, l = [n]), e.rejectWith(a, l));
                  }
                };

                t ? u() : (S.Deferred.getStackHook && (u.stackTrace = S.Deferred.getStackHook()), n.setTimeout(u));
              };
            }

            return S.Deferred(function (n) {
              e[0][3].add(s(0, n, m(o) ? o : z, n.notifyWith)), e[1][3].add(s(0, n, m(t) ? t : z)), e[2][3].add(s(0, n, m(i) ? i : I));
            }).promise();
          },
          promise: function promise(t) {
            return null != t ? S.extend(t, o) : o;
          }
        },
            r = {};
        return S.each(e, function (t, n) {
          var s = n[2],
              a = n[5];
          o[n[1]] = s.add, a && s.add(function () {
            i = a;
          }, e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock), s.add(n[3].fire), r[n[0]] = function () {
            return r[n[0] + "With"](this === r ? void 0 : this, arguments), this;
          }, r[n[0] + "With"] = s.fireWith;
        }), o.promise(r), t && t.call(r, r), r;
      },
      when: function when(t) {
        var e = arguments.length,
            n = e,
            i = Array(n),
            o = a.call(arguments),
            r = S.Deferred(),
            s = function s(t) {
          return function (n) {
            i[t] = this, o[t] = arguments.length > 1 ? a.call(arguments) : n, --e || r.resolveWith(i, o);
          };
        };

        if (e <= 1 && (F(t, r.done(s(n)).resolve, r.reject, !e), "pending" === r.state() || m(o[n] && o[n].then))) return r.then();

        for (; n--;) {
          F(o[n], s(n), r.reject);
        }

        return r.promise();
      }
    });
    var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function (t, e) {
      n.console && n.console.warn && t && q.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e);
    }, S.readyException = function (t) {
      n.setTimeout(function () {
        throw t;
      });
    };
    var R = S.Deferred();

    function B() {
      b.removeEventListener("DOMContentLoaded", B), n.removeEventListener("load", B), S.ready();
    }

    S.fn.ready = function (t) {
      return R.then(t)["catch"](function (t) {
        S.readyException(t);
      }), this;
    }, S.extend({
      isReady: !1,
      readyWait: 1,
      ready: function ready(t) {
        (!0 === t ? --S.readyWait : S.isReady) || (S.isReady = !0, !0 !== t && --S.readyWait > 0 || R.resolveWith(b, [S]));
      }
    }), S.ready.then = R.then, "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? n.setTimeout(S.ready) : (b.addEventListener("DOMContentLoaded", B), n.addEventListener("load", B));

    var W = function W(t, e, n, i, o, r, s) {
      var a = 0,
          l = t.length,
          c = null == n;
      if ("object" === T(n)) for (a in o = !0, n) {
        W(t, e, a, n[a], !0, r, s);
      } else if (void 0 !== i && (o = !0, m(i) || (s = !0), c && (s ? (e.call(t, i), e = null) : (c = e, e = function e(t, _e2, n) {
        return c.call(S(t), n);
      })), e)) for (; a < l; a++) {
        e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
      }
      return o ? t : c ? e.call(t) : l ? e(t[0], n) : r;
    },
        X = /^-ms-/,
        Y = /-([a-z])/g;

    function U(t, e) {
      return e.toUpperCase();
    }

    function V(t) {
      return t.replace(X, "ms-").replace(Y, U);
    }

    var G = function G(t) {
      return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
    };

    function Z() {
      this.expando = S.expando + Z.uid++;
    }

    Z.uid = 1, Z.prototype = {
      cache: function cache(t) {
        var e = t[this.expando];
        return e || (e = {}, G(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
          value: e,
          configurable: !0
        }))), e;
      },
      set: function set(t, e, n) {
        var i,
            o = this.cache(t);
        if ("string" == typeof e) o[V(e)] = n;else for (i in e) {
          o[V(i)] = e[i];
        }
        return o;
      },
      get: function get(t, e) {
        return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][V(e)];
      },
      access: function access(t, e, n) {
        return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e);
      },
      remove: function remove(t, e) {
        var n,
            i = t[this.expando];

        if (void 0 !== i) {
          if (void 0 !== e) {
            n = (e = Array.isArray(e) ? e.map(V) : (e = V(e)) in i ? [e] : e.match(N) || []).length;

            for (; n--;) {
              delete i[e[n]];
            }
          }

          (void 0 === e || S.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando]);
        }
      },
      hasData: function hasData(t) {
        var e = t[this.expando];
        return void 0 !== e && !S.isEmptyObject(e);
      }
    };
    var K = new Z(),
        Q = new Z(),
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        tt = /[A-Z]/g;

    function et(t, e, n) {
      var i;
      if (void 0 === n && 1 === t.nodeType) if (i = "data-" + e.replace(tt, "-$&").toLowerCase(), "string" == typeof (n = t.getAttribute(i))) {
        try {
          n = function (t) {
            return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : J.test(t) ? JSON.parse(t) : t);
          }(n);
        } catch (t) {}

        Q.set(t, e, n);
      } else n = void 0;
      return n;
    }

    S.extend({
      hasData: function hasData(t) {
        return Q.hasData(t) || K.hasData(t);
      },
      data: function data(t, e, n) {
        return Q.access(t, e, n);
      },
      removeData: function removeData(t, e) {
        Q.remove(t, e);
      },
      _data: function _data(t, e, n) {
        return K.access(t, e, n);
      },
      _removeData: function _removeData(t, e) {
        K.remove(t, e);
      }
    }), S.fn.extend({
      data: function data(t, e) {
        var n,
            i,
            o,
            r = this[0],
            s = r && r.attributes;

        if (void 0 === t) {
          if (this.length && (o = Q.get(r), 1 === r.nodeType && !K.get(r, "hasDataAttrs"))) {
            for (n = s.length; n--;) {
              s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = V(i.slice(5)), et(r, i, o[i]));
            }

            K.set(r, "hasDataAttrs", !0);
          }

          return o;
        }

        return "object" == _typeof(t) ? this.each(function () {
          Q.set(this, t);
        }) : W(this, function (e) {
          var n;
          if (r && void 0 === e) return void 0 !== (n = Q.get(r, t)) || void 0 !== (n = et(r, t)) ? n : void 0;
          this.each(function () {
            Q.set(this, t, e);
          });
        }, null, e, arguments.length > 1, null, !0);
      },
      removeData: function removeData(t) {
        return this.each(function () {
          Q.remove(this, t);
        });
      }
    }), S.extend({
      queue: function queue(t, e, n) {
        var i;
        if (t) return e = (e || "fx") + "queue", i = K.get(t, e), n && (!i || Array.isArray(n) ? i = K.access(t, e, S.makeArray(n)) : i.push(n)), i || [];
      },
      dequeue: function dequeue(t, e) {
        e = e || "fx";

        var n = S.queue(t, e),
            i = n.length,
            o = n.shift(),
            r = S._queueHooks(t, e);

        "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, function () {
          S.dequeue(t, e);
        }, r)), !i && r && r.empty.fire();
      },
      _queueHooks: function _queueHooks(t, e) {
        var n = e + "queueHooks";
        return K.get(t, n) || K.access(t, n, {
          empty: S.Callbacks("once memory").add(function () {
            K.remove(t, [e + "queue", n]);
          })
        });
      }
    }), S.fn.extend({
      queue: function queue(t, e) {
        var n = 2;
        return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? S.queue(this[0], t) : void 0 === e ? this : this.each(function () {
          var n = S.queue(this, t, e);
          S._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && S.dequeue(this, t);
        });
      },
      dequeue: function dequeue(t) {
        return this.each(function () {
          S.dequeue(this, t);
        });
      },
      clearQueue: function clearQueue(t) {
        return this.queue(t || "fx", []);
      },
      promise: function promise(t, e) {
        var n,
            i = 1,
            o = S.Deferred(),
            r = this,
            s = this.length,
            a = function a() {
          --i || o.resolveWith(r, [r]);
        };

        for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) {
          (n = K.get(r[s], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
        }

        return a(), o.promise(e);
      }
    });

    var nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        it = new RegExp("^(?:([+-])=|)(" + nt + ")([a-z%]*)$", "i"),
        ot = ["Top", "Right", "Bottom", "Left"],
        rt = b.documentElement,
        st = function st(t) {
      return S.contains(t.ownerDocument, t);
    },
        at = {
      composed: !0
    };

    rt.getRootNode && (st = function st(t) {
      return S.contains(t.ownerDocument, t) || t.getRootNode(at) === t.ownerDocument;
    });

    var lt = function lt(t, e) {
      return "none" === (t = e || t).style.display || "" === t.style.display && st(t) && "none" === S.css(t, "display");
    };

    function ct(t, e, n, i) {
      var o,
          r,
          s = 20,
          a = i ? function () {
        return i.cur();
      } : function () {
        return S.css(t, e, "");
      },
          l = a(),
          c = n && n[3] || (S.cssNumber[e] ? "" : "px"),
          u = t.nodeType && (S.cssNumber[e] || "px" !== c && +l) && it.exec(S.css(t, e));

      if (u && u[3] !== c) {
        for (l /= 2, c = c || u[3], u = +l || 1; s--;) {
          S.style(t, e, u + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), u /= r;
        }

        u *= 2, S.style(t, e, u + c), n = n || [];
      }

      return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o;
    }

    var ut = {};

    function dt(t) {
      var e,
          n = t.ownerDocument,
          i = t.nodeName,
          o = ut[i];
      return o || (e = n.body.appendChild(n.createElement(i)), o = S.css(e, "display"), e.parentNode.removeChild(e), "none" === o && (o = "block"), ut[i] = o, o);
    }

    function pt(t, e) {
      for (var n, i, o = [], r = 0, s = t.length; r < s; r++) {
        (i = t[r]).style && (n = i.style.display, e ? ("none" === n && (o[r] = K.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && lt(i) && (o[r] = dt(i))) : "none" !== n && (o[r] = "none", K.set(i, "display", n)));
      }

      for (r = 0; r < s; r++) {
        null != o[r] && (t[r].style.display = o[r]);
      }

      return t;
    }

    S.fn.extend({
      show: function show() {
        return pt(this, !0);
      },
      hide: function hide() {
        return pt(this);
      },
      toggle: function toggle(t) {
        return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
          lt(this) ? S(this).show() : S(this).hide();
        });
      }
    });
    var ft,
        ht,
        gt = /^(?:checkbox|radio)$/i,
        vt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        mt = /^$|^module$|\/(?:java|ecma)script/i;
    ft = b.createDocumentFragment().appendChild(b.createElement("div")), (ht = b.createElement("input")).setAttribute("type", "radio"), ht.setAttribute("checked", "checked"), ht.setAttribute("name", "t"), ft.appendChild(ht), v.checkClone = ft.cloneNode(!0).cloneNode(!0).lastChild.checked, ft.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!ft.cloneNode(!0).lastChild.defaultValue, ft.innerHTML = "<option></option>", v.option = !!ft.lastChild;
    var yt = {
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };

    function bt(t, e) {
      var n;
      return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && P(t, e) ? S.merge([t], n) : n;
    }

    function xt(t, e) {
      for (var n = 0, i = t.length; n < i; n++) {
        K.set(t[n], "globalEval", !e || K.get(e[n], "globalEval"));
      }
    }

    yt.tbody = yt.tfoot = yt.colgroup = yt.caption = yt.thead, yt.th = yt.td, v.option || (yt.optgroup = yt.option = [1, "<select multiple='multiple'>", "</select>"]);
    var wt = /<|&#?\w+;/;

    function Tt(t, e, n, i, o) {
      for (var r, s, a, l, c, u, d = e.createDocumentFragment(), p = [], f = 0, h = t.length; f < h; f++) {
        if ((r = t[f]) || 0 === r) if ("object" === T(r)) S.merge(p, r.nodeType ? [r] : r);else if (wt.test(r)) {
          for (s = s || d.appendChild(e.createElement("div")), a = (vt.exec(r) || ["", ""])[1].toLowerCase(), l = yt[a] || yt._default, s.innerHTML = l[1] + S.htmlPrefilter(r) + l[2], u = l[0]; u--;) {
            s = s.lastChild;
          }

          S.merge(p, s.childNodes), (s = d.firstChild).textContent = "";
        } else p.push(e.createTextNode(r));
      }

      for (d.textContent = "", f = 0; r = p[f++];) {
        if (i && S.inArray(r, i) > -1) o && o.push(r);else if (c = st(r), s = bt(d.appendChild(r), "script"), c && xt(s), n) for (u = 0; r = s[u++];) {
          mt.test(r.type || "") && n.push(r);
        }
      }

      return d;
    }

    var St = /^key/,
        kt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ct = /^([^.]*)(?:\.(.+)|)/;

    function _t() {
      return !0;
    }

    function $t() {
      return !1;
    }

    function At(t, e) {
      return t === function () {
        try {
          return b.activeElement;
        } catch (t) {}
      }() == ("focus" === e);
    }

    function Pt(t, e, n, i, o, r) {
      var s, a;

      if ("object" == _typeof(e)) {
        for (a in "string" != typeof n && (i = i || n, n = void 0), e) {
          Pt(t, a, n, i, e[a], r);
        }

        return t;
      }

      if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = $t;else if (!o) return t;
      return 1 === r && (s = o, (o = function o(t) {
        return S().off(t), s.apply(this, arguments);
      }).guid = s.guid || (s.guid = S.guid++)), t.each(function () {
        S.event.add(this, e, o, i, n);
      });
    }

    function Et(t, e, n) {
      n ? (K.set(t, e, !1), S.event.add(t, e, {
        namespace: !1,
        handler: function handler(t) {
          var i,
              o,
              r = K.get(this, e);

          if (1 & t.isTrigger && this[e]) {
            if (r.length) (S.event.special[e] || {}).delegateType && t.stopPropagation();else if (r = a.call(arguments), K.set(this, e, r), i = n(this, e), this[e](), r !== (o = K.get(this, e)) || i ? K.set(this, e, !1) : o = {}, r !== o) return t.stopImmediatePropagation(), t.preventDefault(), o.value;
          } else r.length && (K.set(this, e, {
            value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
          }), t.stopImmediatePropagation());
        }
      })) : void 0 === K.get(t, e) && S.event.add(t, e, _t);
    }

    S.event = {
      global: {},
      add: function add(t, e, n, i, o) {
        var r,
            s,
            a,
            l,
            c,
            u,
            d,
            p,
            f,
            h,
            g,
            v = K.get(t);
        if (G(t)) for (n.handler && (n = (r = n).handler, o = r.selector), o && S.find.matchesSelector(rt, o), n.guid || (n.guid = S.guid++), (l = v.events) || (l = v.events = Object.create(null)), (s = v.handle) || (s = v.handle = function (e) {
          return void 0 !== S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0;
        }), c = (e = (e || "").match(N) || [""]).length; c--;) {
          f = g = (a = Ct.exec(e[c]) || [])[1], h = (a[2] || "").split(".").sort(), f && (d = S.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = S.event.special[f] || {}, u = S.extend({
            type: f,
            origType: g,
            data: i,
            handler: n,
            guid: n.guid,
            selector: o,
            needsContext: o && S.expr.match.needsContext.test(o),
            namespace: h.join(".")
          }, r), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, h, s) || t.addEventListener && t.addEventListener(f, s)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), S.event.global[f] = !0);
        }
      },
      remove: function remove(t, e, n, i, o) {
        var r,
            s,
            a,
            l,
            c,
            u,
            d,
            p,
            f,
            h,
            g,
            v = K.hasData(t) && K.get(t);

        if (v && (l = v.events)) {
          for (c = (e = (e || "").match(N) || [""]).length; c--;) {
            if (f = g = (a = Ct.exec(e[c]) || [])[1], h = (a[2] || "").split(".").sort(), f) {
              for (d = S.event.special[f] || {}, p = l[f = (i ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) {
                u = p[r], !o && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(r, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(t, u));
              }

              s && !p.length && (d.teardown && !1 !== d.teardown.call(t, h, v.handle) || S.removeEvent(t, f, v.handle), delete l[f]);
            } else for (f in l) {
              S.event.remove(t, f + e[c], n, i, !0);
            }
          }

          S.isEmptyObject(l) && K.remove(t, "handle events");
        }
      },
      dispatch: function dispatch(t) {
        var e,
            n,
            i,
            o,
            r,
            s,
            a = new Array(arguments.length),
            l = S.event.fix(t),
            c = (K.get(this, "events") || Object.create(null))[l.type] || [],
            u = S.event.special[l.type] || {};

        for (a[0] = l, e = 1; e < arguments.length; e++) {
          a[e] = arguments[e];
        }

        if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
          for (s = S.event.handlers.call(this, l, c), e = 0; (o = s[e++]) && !l.isPropagationStopped();) {
            for (l.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !l.isImmediatePropagationStopped();) {
              l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace) || (l.handleObj = r, l.data = r.data, void 0 !== (i = ((S.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
            }
          }

          return u.postDispatch && u.postDispatch.call(this, l), l.result;
        }
      },
      handlers: function handlers(t, e) {
        var n,
            i,
            o,
            r,
            s,
            a = [],
            l = e.delegateCount,
            c = t.target;
        if (l && c.nodeType && !("click" === t.type && t.button >= 1)) for (; c !== this; c = c.parentNode || this) {
          if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
            for (r = [], s = {}, n = 0; n < l; n++) {
              void 0 === s[o = (i = e[n]).selector + " "] && (s[o] = i.needsContext ? S(o, this).index(c) > -1 : S.find(o, this, null, [c]).length), s[o] && r.push(i);
            }

            r.length && a.push({
              elem: c,
              handlers: r
            });
          }
        }
        return c = this, l < e.length && a.push({
          elem: c,
          handlers: e.slice(l)
        }), a;
      },
      addProp: function addProp(t, e) {
        Object.defineProperty(S.Event.prototype, t, {
          enumerable: !0,
          configurable: !0,
          get: m(e) ? function () {
            if (this.originalEvent) return e(this.originalEvent);
          } : function () {
            if (this.originalEvent) return this.originalEvent[t];
          },
          set: function set(e) {
            Object.defineProperty(this, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: e
            });
          }
        });
      },
      fix: function fix(t) {
        return t[S.expando] ? t : new S.Event(t);
      },
      special: {
        load: {
          noBubble: !0
        },
        click: {
          setup: function setup(t) {
            var e = this || t;
            return gt.test(e.type) && e.click && P(e, "input") && Et(e, "click", _t), !1;
          },
          trigger: function trigger(t) {
            var e = this || t;
            return gt.test(e.type) && e.click && P(e, "input") && Et(e, "click"), !0;
          },
          _default: function _default(t) {
            var e = t.target;
            return gt.test(e.type) && e.click && P(e, "input") && K.get(e, "click") || P(e, "a");
          }
        },
        beforeunload: {
          postDispatch: function postDispatch(t) {
            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
          }
        }
      }
    }, S.removeEvent = function (t, e, n) {
      t.removeEventListener && t.removeEventListener(e, n);
    }, S.Event = function (t, e) {
      if (!(this instanceof S.Event)) return new S.Event(t, e);
      t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? _t : $t, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && S.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[S.expando] = !0;
    }, S.Event.prototype = {
      constructor: S.Event,
      isDefaultPrevented: $t,
      isPropagationStopped: $t,
      isImmediatePropagationStopped: $t,
      isSimulated: !1,
      preventDefault: function preventDefault() {
        var t = this.originalEvent;
        this.isDefaultPrevented = _t, t && !this.isSimulated && t.preventDefault();
      },
      stopPropagation: function stopPropagation() {
        var t = this.originalEvent;
        this.isPropagationStopped = _t, t && !this.isSimulated && t.stopPropagation();
      },
      stopImmediatePropagation: function stopImmediatePropagation() {
        var t = this.originalEvent;
        this.isImmediatePropagationStopped = _t, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation();
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
      which: function which(t) {
        var e = t.button;
        return null == t.which && St.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && kt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which;
      }
    }, S.event.addProp), S.each({
      focus: "focusin",
      blur: "focusout"
    }, function (t, e) {
      S.event.special[t] = {
        setup: function setup() {
          return Et(this, t, At), !1;
        },
        trigger: function trigger() {
          return Et(this, t), !0;
        },
        delegateType: e
      };
    }), S.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function (t, e) {
      S.event.special[t] = {
        delegateType: e,
        bindType: e,
        handle: function handle(t) {
          var n,
              i = this,
              o = t.relatedTarget,
              r = t.handleObj;
          return o && (o === i || S.contains(i, o)) || (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n;
        }
      };
    }), S.fn.extend({
      on: function on(t, e, n, i) {
        return Pt(this, t, e, n, i);
      },
      one: function one(t, e, n, i) {
        return Pt(this, t, e, n, i, 1);
      },
      off: function off(t, e, n) {
        var i, o;
        if (t && t.preventDefault && t.handleObj) return i = t.handleObj, S(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;

        if ("object" == _typeof(t)) {
          for (o in t) {
            this.off(o, e, t[o]);
          }

          return this;
        }

        return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = $t), this.each(function () {
          S.event.remove(this, t, n, e);
        });
      }
    });
    var Ot = /<script|<style|<link/i,
        Mt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Dt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Lt(t, e) {
      return P(t, "table") && P(11 !== e.nodeType ? e : e.firstChild, "tr") && S(t).children("tbody")[0] || t;
    }

    function jt(t) {
      return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t;
    }

    function Ht(t) {
      return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t;
    }

    function Nt(t, e) {
      var n, i, o, r, s, a;

      if (1 === e.nodeType) {
        if (K.hasData(t) && (a = K.get(t).events)) for (o in K.remove(e, "handle events"), a) {
          for (n = 0, i = a[o].length; n < i; n++) {
            S.event.add(e, o, a[o][n]);
          }
        }
        Q.hasData(t) && (r = Q.access(t), s = S.extend({}, r), Q.set(e, s));
      }
    }

    function zt(t, e) {
      var n = e.nodeName.toLowerCase();
      "input" === n && gt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue);
    }

    function It(t, e, n, i) {
      e = l(e);
      var o,
          r,
          s,
          a,
          c,
          u,
          d = 0,
          p = t.length,
          f = p - 1,
          h = e[0],
          g = m(h);
      if (g || p > 1 && "string" == typeof h && !v.checkClone && Mt.test(h)) return t.each(function (o) {
        var r = t.eq(o);
        g && (e[0] = h.call(this, o, r.html())), It(r, e, n, i);
      });

      if (p && (r = (o = Tt(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
        for (a = (s = S.map(bt(o, "script"), jt)).length; d < p; d++) {
          c = o, d !== f && (c = S.clone(c, !0, !0), a && S.merge(s, bt(c, "script"))), n.call(t[d], c, d);
        }

        if (a) for (u = s[s.length - 1].ownerDocument, S.map(s, Ht), d = 0; d < a; d++) {
          c = s[d], mt.test(c.type || "") && !K.access(c, "globalEval") && S.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? S._evalUrl && !c.noModule && S._evalUrl(c.src, {
            nonce: c.nonce || c.getAttribute("nonce")
          }, u) : w(c.textContent.replace(Dt, ""), c, u));
        }
      }

      return t;
    }

    function Ft(t, e, n) {
      for (var i, o = e ? S.filter(e, t) : t, r = 0; null != (i = o[r]); r++) {
        n || 1 !== i.nodeType || S.cleanData(bt(i)), i.parentNode && (n && st(i) && xt(bt(i, "script")), i.parentNode.removeChild(i));
      }

      return t;
    }

    S.extend({
      htmlPrefilter: function htmlPrefilter(t) {
        return t;
      },
      clone: function clone(t, e, n) {
        var i,
            o,
            r,
            s,
            a = t.cloneNode(!0),
            l = st(t);
        if (!(v.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || S.isXMLDoc(t))) for (s = bt(a), i = 0, o = (r = bt(t)).length; i < o; i++) {
          zt(r[i], s[i]);
        }
        if (e) if (n) for (r = r || bt(t), s = s || bt(a), i = 0, o = r.length; i < o; i++) {
          Nt(r[i], s[i]);
        } else Nt(t, a);
        return (s = bt(a, "script")).length > 0 && xt(s, !l && bt(t, "script")), a;
      },
      cleanData: function cleanData(t) {
        for (var e, n, i, o = S.event.special, r = 0; void 0 !== (n = t[r]); r++) {
          if (G(n)) {
            if (e = n[K.expando]) {
              if (e.events) for (i in e.events) {
                o[i] ? S.event.remove(n, i) : S.removeEvent(n, i, e.handle);
              }
              n[K.expando] = void 0;
            }

            n[Q.expando] && (n[Q.expando] = void 0);
          }
        }
      }
    }), S.fn.extend({
      detach: function detach(t) {
        return Ft(this, t, !0);
      },
      remove: function remove(t) {
        return Ft(this, t);
      },
      text: function text(t) {
        return W(this, function (t) {
          return void 0 === t ? S.text(this) : this.empty().each(function () {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t);
          });
        }, null, t, arguments.length);
      },
      append: function append() {
        return It(this, arguments, function (t) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Lt(this, t).appendChild(t);
        });
      },
      prepend: function prepend() {
        return It(this, arguments, function (t) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var e = Lt(this, t);
            e.insertBefore(t, e.firstChild);
          }
        });
      },
      before: function before() {
        return It(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this);
        });
      },
      after: function after() {
        return It(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
        });
      },
      empty: function empty() {
        for (var t, e = 0; null != (t = this[e]); e++) {
          1 === t.nodeType && (S.cleanData(bt(t, !1)), t.textContent = "");
        }

        return this;
      },
      clone: function clone(t, e) {
        return t = null != t && t, e = null == e ? t : e, this.map(function () {
          return S.clone(this, t, e);
        });
      },
      html: function html(t) {
        return W(this, function (t) {
          var e = this[0] || {},
              n = 0,
              i = this.length;
          if (void 0 === t && 1 === e.nodeType) return e.innerHTML;

          if ("string" == typeof t && !Ot.test(t) && !yt[(vt.exec(t) || ["", ""])[1].toLowerCase()]) {
            t = S.htmlPrefilter(t);

            try {
              for (; n < i; n++) {
                1 === (e = this[n] || {}).nodeType && (S.cleanData(bt(e, !1)), e.innerHTML = t);
              }

              e = 0;
            } catch (t) {}
          }

          e && this.empty().append(t);
        }, null, t, arguments.length);
      },
      replaceWith: function replaceWith() {
        var t = [];
        return It(this, arguments, function (e) {
          var n = this.parentNode;
          S.inArray(this, t) < 0 && (S.cleanData(bt(this)), n && n.replaceChild(e, this));
        }, t);
      }
    }), S.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function (t, e) {
      S.fn[t] = function (t) {
        for (var n, i = [], o = S(t), r = o.length - 1, s = 0; s <= r; s++) {
          n = s === r ? this : this.clone(!0), S(o[s])[e](n), c.apply(i, n.get());
        }

        return this.pushStack(i);
      };
    });

    var qt = new RegExp("^(" + nt + ")(?!px)[a-z%]+$", "i"),
        Rt = function Rt(t) {
      var e = t.ownerDocument.defaultView;
      return e && e.opener || (e = n), e.getComputedStyle(t);
    },
        Bt = function Bt(t, e, n) {
      var i,
          o,
          r = {};

      for (o in e) {
        r[o] = t.style[o], t.style[o] = e[o];
      }

      for (o in i = n.call(t), e) {
        t.style[o] = r[o];
      }

      return i;
    },
        Wt = new RegExp(ot.join("|"), "i");

    function Xt(t, e, n) {
      var i,
          o,
          r,
          s,
          a = t.style;
      return (n = n || Rt(t)) && ("" !== (s = n.getPropertyValue(e) || n[e]) || st(t) || (s = S.style(t, e)), !v.pixelBoxStyles() && qt.test(s) && Wt.test(e) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s;
    }

    function Yt(t, e) {
      return {
        get: function get() {
          if (!t()) return (this.get = e).apply(this, arguments);
          delete this.get;
        }
      };
    }

    !function () {
      function t() {
        if (u) {
          c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", rt.appendChild(c).appendChild(u);
          var t = n.getComputedStyle(u);
          i = "1%" !== t.top, l = 12 === e(t.marginLeft), u.style.right = "60%", s = 36 === e(t.right), o = 36 === e(t.width), u.style.position = "absolute", r = 12 === e(u.offsetWidth / 3), rt.removeChild(c), u = null;
        }
      }

      function e(t) {
        return Math.round(parseFloat(t));
      }

      var i,
          o,
          r,
          s,
          a,
          l,
          c = b.createElement("div"),
          u = b.createElement("div");
      u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === u.style.backgroundClip, S.extend(v, {
        boxSizingReliable: function boxSizingReliable() {
          return t(), o;
        },
        pixelBoxStyles: function pixelBoxStyles() {
          return t(), s;
        },
        pixelPosition: function pixelPosition() {
          return t(), i;
        },
        reliableMarginLeft: function reliableMarginLeft() {
          return t(), l;
        },
        scrollboxSize: function scrollboxSize() {
          return t(), r;
        },
        reliableTrDimensions: function reliableTrDimensions() {
          var t, e, i, o;
          return null == a && (t = b.createElement("table"), e = b.createElement("tr"), i = b.createElement("div"), t.style.cssText = "position:absolute;left:-11111px", e.style.height = "1px", i.style.height = "9px", rt.appendChild(t).appendChild(e).appendChild(i), o = n.getComputedStyle(e), a = parseInt(o.height) > 3, rt.removeChild(t)), a;
        }
      }));
    }();
    var Ut = ["Webkit", "Moz", "ms"],
        Vt = b.createElement("div").style,
        Gt = {};

    function Zt(t) {
      var e = S.cssProps[t] || Gt[t];
      return e || (t in Vt ? t : Gt[t] = function (t) {
        for (var e = t[0].toUpperCase() + t.slice(1), n = Ut.length; n--;) {
          if ((t = Ut[n] + e) in Vt) return t;
        }
      }(t) || t);
    }

    var Kt = /^(none|table(?!-c[ea]).+)/,
        Qt = /^--/,
        Jt = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
        te = {
      letterSpacing: "0",
      fontWeight: "400"
    };

    function ee(t, e, n) {
      var i = it.exec(e);
      return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e;
    }

    function ne(t, e, n, i, o, r) {
      var s = "width" === e ? 1 : 0,
          a = 0,
          l = 0;
      if (n === (i ? "border" : "content")) return 0;

      for (; s < 4; s += 2) {
        "margin" === n && (l += S.css(t, n + ot[s], !0, o)), i ? ("content" === n && (l -= S.css(t, "padding" + ot[s], !0, o)), "margin" !== n && (l -= S.css(t, "border" + ot[s] + "Width", !0, o))) : (l += S.css(t, "padding" + ot[s], !0, o), "padding" !== n ? l += S.css(t, "border" + ot[s] + "Width", !0, o) : a += S.css(t, "border" + ot[s] + "Width", !0, o));
      }

      return !i && r >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - r - l - a - .5)) || 0), l;
    }

    function ie(t, e, n) {
      var i = Rt(t),
          o = (!v.boxSizingReliable() || n) && "border-box" === S.css(t, "boxSizing", !1, i),
          r = o,
          s = Xt(t, e, i),
          a = "offset" + e[0].toUpperCase() + e.slice(1);

      if (qt.test(s)) {
        if (!n) return s;
        s = "auto";
      }

      return (!v.boxSizingReliable() && o || !v.reliableTrDimensions() && P(t, "tr") || "auto" === s || !parseFloat(s) && "inline" === S.css(t, "display", !1, i)) && t.getClientRects().length && (o = "border-box" === S.css(t, "boxSizing", !1, i), (r = a in t) && (s = t[a])), (s = parseFloat(s) || 0) + ne(t, e, n || (o ? "border" : "content"), r, i, s) + "px";
    }

    function oe(t, e, n, i, o) {
      return new oe.prototype.init(t, e, n, i, o);
    }

    S.extend({
      cssHooks: {
        opacity: {
          get: function get(t, e) {
            if (e) {
              var n = Xt(t, "opacity");
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
      style: function style(t, e, n, i) {
        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
          var o,
              r,
              s,
              a = V(e),
              l = Qt.test(e),
              c = t.style;
          if (l || (e = Zt(a)), s = S.cssHooks[e] || S.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(t, !1, i)) ? o : c[e];
          "string" === (r = _typeof(n)) && (o = it.exec(n)) && o[1] && (n = ct(t, e, o), r = "number"), null != n && n == n && ("number" !== r || l || (n += o && o[3] || (S.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l ? c.setProperty(e, n) : c[e] = n));
        }
      },
      css: function css(t, e, n, i) {
        var o,
            r,
            s,
            a = V(e);
        return Qt.test(e) || (e = Zt(a)), (s = S.cssHooks[e] || S.cssHooks[a]) && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = Xt(t, e, i)), "normal" === o && e in te && (o = te[e]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o;
      }
    }), S.each(["height", "width"], function (t, e) {
      S.cssHooks[e] = {
        get: function get(t, n, i) {
          if (n) return !Kt.test(S.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? ie(t, e, i) : Bt(t, Jt, function () {
            return ie(t, e, i);
          });
        },
        set: function set(t, n, i) {
          var o,
              r = Rt(t),
              s = !v.scrollboxSize() && "absolute" === r.position,
              a = (s || i) && "border-box" === S.css(t, "boxSizing", !1, r),
              l = i ? ne(t, e, i, a, r) : 0;
          return a && s && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(r[e]) - ne(t, e, "border", !1, r) - .5)), l && (o = it.exec(n)) && "px" !== (o[3] || "px") && (t.style[e] = n, n = S.css(t, e)), ee(0, n, l);
        }
      };
    }), S.cssHooks.marginLeft = Yt(v.reliableMarginLeft, function (t, e) {
      if (e) return (parseFloat(Xt(t, "marginLeft")) || t.getBoundingClientRect().left - Bt(t, {
        marginLeft: 0
      }, function () {
        return t.getBoundingClientRect().left;
      })) + "px";
    }), S.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function (t, e) {
      S.cssHooks[t + e] = {
        expand: function expand(n) {
          for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) {
            o[t + ot[i] + e] = r[i] || r[i - 2] || r[0];
          }

          return o;
        }
      }, "margin" !== t && (S.cssHooks[t + e].set = ee);
    }), S.fn.extend({
      css: function css(t, e) {
        return W(this, function (t, e, n) {
          var i,
              o,
              r = {},
              s = 0;

          if (Array.isArray(e)) {
            for (i = Rt(t), o = e.length; s < o; s++) {
              r[e[s]] = S.css(t, e[s], !1, i);
            }

            return r;
          }

          return void 0 !== n ? S.style(t, e, n) : S.css(t, e);
        }, t, e, arguments.length > 1);
      }
    }), S.Tween = oe, oe.prototype = {
      constructor: oe,
      init: function init(t, e, n, i, o, r) {
        this.elem = t, this.prop = n, this.easing = o || S.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (S.cssNumber[n] ? "" : "px");
      },
      cur: function cur() {
        var t = oe.propHooks[this.prop];
        return t && t.get ? t.get(this) : oe.propHooks._default.get(this);
      },
      run: function run(t) {
        var e,
            n = oe.propHooks[this.prop];
        return this.options.duration ? this.pos = e = S.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : oe.propHooks._default.set(this), this;
      }
    }, oe.prototype.init.prototype = oe.prototype, oe.propHooks = {
      _default: {
        get: function get(t) {
          var e;
          return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = S.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0;
        },
        set: function set(t) {
          S.fx.step[t.prop] ? S.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !S.cssHooks[t.prop] && null == t.elem.style[Zt(t.prop)] ? t.elem[t.prop] = t.now : S.style(t.elem, t.prop, t.now + t.unit);
        }
      }
    }, oe.propHooks.scrollTop = oe.propHooks.scrollLeft = {
      set: function set(t) {
        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
      }
    }, S.easing = {
      linear: function linear(t) {
        return t;
      },
      swing: function swing(t) {
        return .5 - Math.cos(t * Math.PI) / 2;
      },
      _default: "swing"
    }, S.fx = oe.prototype.init, S.fx.step = {};
    var re,
        se,
        ae = /^(?:toggle|show|hide)$/,
        le = /queueHooks$/;

    function ce() {
      se && (!1 === b.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ce) : n.setTimeout(ce, S.fx.interval), S.fx.tick());
    }

    function ue() {
      return n.setTimeout(function () {
        re = void 0;
      }), re = Date.now();
    }

    function de(t, e) {
      var n,
          i = 0,
          o = {
        height: t
      };

      for (e = e ? 1 : 0; i < 4; i += 2 - e) {
        o["margin" + (n = ot[i])] = o["padding" + n] = t;
      }

      return e && (o.opacity = o.width = t), o;
    }

    function pe(t, e, n) {
      for (var i, o = (fe.tweeners[e] || []).concat(fe.tweeners["*"]), r = 0, s = o.length; r < s; r++) {
        if (i = o[r].call(n, e, t)) return i;
      }
    }

    function fe(t, e, n) {
      var i,
          o,
          r = 0,
          s = fe.prefilters.length,
          a = S.Deferred().always(function () {
        delete l.elem;
      }),
          l = function l() {
        if (o) return !1;

        for (var e = re || ue(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++) {
          c.tweens[r].run(i);
        }

        return a.notifyWith(t, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1);
      },
          c = a.promise({
        elem: t,
        props: S.extend({}, e),
        opts: S.extend(!0, {
          specialEasing: {},
          easing: S.easing._default
        }, n),
        originalProperties: e,
        originalOptions: n,
        startTime: re || ue(),
        duration: n.duration,
        tweens: [],
        createTween: function createTween(e, n) {
          var i = S.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
          return c.tweens.push(i), i;
        },
        stop: function stop(e) {
          var n = 0,
              i = e ? c.tweens.length : 0;
          if (o) return this;

          for (o = !0; n < i; n++) {
            c.tweens[n].run(1);
          }

          return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this;
        }
      }),
          u = c.props;

      for (!function (t, e) {
        var n, i, o, r, s;

        for (n in t) {
          if (o = e[i = V(n)], r = t[n], Array.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), (s = S.cssHooks[i]) && ("expand" in s)) for (n in r = s.expand(r), delete t[i], r) {
            (n in t) || (t[n] = r[n], e[n] = o);
          } else e[i] = o;
        }
      }(u, c.opts.specialEasing); r < s; r++) {
        if (i = fe.prefilters[r].call(c, t, u, c.opts)) return m(i.stop) && (S._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
      }

      return S.map(u, pe, c), m(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), S.fx.timer(S.extend(l, {
        elem: t,
        anim: c,
        queue: c.opts.queue
      })), c;
    }

    S.Animation = S.extend(fe, {
      tweeners: {
        "*": [function (t, e) {
          var n = this.createTween(t, e);
          return ct(n.elem, t, it.exec(e), n), n;
        }]
      },
      tweener: function tweener(t, e) {
        m(t) ? (e = t, t = ["*"]) : t = t.match(N);

        for (var n, i = 0, o = t.length; i < o; i++) {
          n = t[i], fe.tweeners[n] = fe.tweeners[n] || [], fe.tweeners[n].unshift(e);
        }
      },
      prefilters: [function (t, e, n) {
        var i,
            o,
            r,
            s,
            a,
            l,
            c,
            u,
            d = "width" in e || "height" in e,
            p = this,
            f = {},
            h = t.style,
            g = t.nodeType && lt(t),
            v = K.get(t, "fxshow");

        for (i in n.queue || (null == (s = S._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
          s.unqueued || a();
        }), s.unqueued++, p.always(function () {
          p.always(function () {
            s.unqueued--, S.queue(t, "fx").length || s.empty.fire();
          });
        })), e) {
          if (o = e[i], ae.test(o)) {
            if (delete e[i], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
              if ("show" !== o || !v || void 0 === v[i]) continue;
              g = !0;
            }

            f[i] = v && v[i] || S.style(t, i);
          }
        }

        if ((l = !S.isEmptyObject(e)) || !S.isEmptyObject(f)) for (i in d && 1 === t.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = v && v.display) && (c = K.get(t, "display")), "none" === (u = S.css(t, "display")) && (c ? u = c : (pt([t], !0), c = t.style.display || c, u = S.css(t, "display"), pt([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === S.css(t, "float") && (l || (p.done(function () {
          h.display = c;
        }), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
          h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
        })), l = !1, f) {
          l || (v ? "hidden" in v && (g = v.hidden) : v = K.access(t, "fxshow", {
            display: c
          }), r && (v.hidden = !g), g && pt([t], !0), p.done(function () {
            for (i in g || pt([t]), K.remove(t, "fxshow"), f) {
              S.style(t, i, f[i]);
            }
          })), l = pe(g ? v[i] : 0, i, p), i in v || (v[i] = l.start, g && (l.end = l.start, l.start = 0));
        }
      }],
      prefilter: function prefilter(t, e) {
        e ? fe.prefilters.unshift(t) : fe.prefilters.push(t);
      }
    }), S.speed = function (t, e, n) {
      var i = t && "object" == _typeof(t) ? S.extend({}, t) : {
        complete: n || !n && e || m(t) && t,
        duration: t,
        easing: n && e || e && !m(e) && e
      };
      return S.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in S.fx.speeds ? i.duration = S.fx.speeds[i.duration] : i.duration = S.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
        m(i.old) && i.old.call(this), i.queue && S.dequeue(this, i.queue);
      }, i;
    }, S.fn.extend({
      fadeTo: function fadeTo(t, e, n, i) {
        return this.filter(lt).css("opacity", 0).show().end().animate({
          opacity: e
        }, t, n, i);
      },
      animate: function animate(t, e, n, i) {
        var o = S.isEmptyObject(t),
            r = S.speed(e, n, i),
            s = function s() {
          var e = fe(this, S.extend({}, t), r);
          (o || K.get(this, "finish")) && e.stop(!0);
        };

        return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s);
      },
      stop: function stop(t, e, n) {
        var i = function i(t) {
          var e = t.stop;
          delete t.stop, e(n);
        };

        return "string" != typeof t && (n = e, e = t, t = void 0), e && this.queue(t || "fx", []), this.each(function () {
          var e = !0,
              o = null != t && t + "queueHooks",
              r = S.timers,
              s = K.get(this);
          if (o) s[o] && s[o].stop && i(s[o]);else for (o in s) {
            s[o] && s[o].stop && le.test(o) && i(s[o]);
          }

          for (o = r.length; o--;) {
            r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
          }

          !e && n || S.dequeue(this, t);
        });
      },
      finish: function finish(t) {
        return !1 !== t && (t = t || "fx"), this.each(function () {
          var e,
              n = K.get(this),
              i = n[t + "queue"],
              o = n[t + "queueHooks"],
              r = S.timers,
              s = i ? i.length : 0;

          for (n.finish = !0, S.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) {
            r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
          }

          for (e = 0; e < s; e++) {
            i[e] && i[e].finish && i[e].finish.call(this);
          }

          delete n.finish;
        });
      }
    }), S.each(["toggle", "show", "hide"], function (t, e) {
      var n = S.fn[e];

      S.fn[e] = function (t, i, o) {
        return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(de(e, !0), t, i, o);
      };
    }), S.each({
      slideDown: de("show"),
      slideUp: de("hide"),
      slideToggle: de("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function (t, e) {
      S.fn[t] = function (t, n, i) {
        return this.animate(e, t, n, i);
      };
    }), S.timers = [], S.fx.tick = function () {
      var t,
          e = 0,
          n = S.timers;

      for (re = Date.now(); e < n.length; e++) {
        (t = n[e])() || n[e] !== t || n.splice(e--, 1);
      }

      n.length || S.fx.stop(), re = void 0;
    }, S.fx.timer = function (t) {
      S.timers.push(t), S.fx.start();
    }, S.fx.interval = 13, S.fx.start = function () {
      se || (se = !0, ce());
    }, S.fx.stop = function () {
      se = null;
    }, S.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, S.fn.delay = function (t, e) {
      return t = S.fx && S.fx.speeds[t] || t, e = e || "fx", this.queue(e, function (e, i) {
        var o = n.setTimeout(e, t);

        i.stop = function () {
          n.clearTimeout(o);
        };
      });
    }, function () {
      var t = b.createElement("input"),
          e = b.createElement("select").appendChild(b.createElement("option"));
      t.type = "checkbox", v.checkOn = "" !== t.value, v.optSelected = e.selected, (t = b.createElement("input")).value = "t", t.type = "radio", v.radioValue = "t" === t.value;
    }();
    var he,
        ge = S.expr.attrHandle;
    S.fn.extend({
      attr: function attr(t, e) {
        return W(this, S.attr, t, e, arguments.length > 1);
      },
      removeAttr: function removeAttr(t) {
        return this.each(function () {
          S.removeAttr(this, t);
        });
      }
    }), S.extend({
      attr: function attr(t, e, n) {
        var i,
            o,
            r = t.nodeType;
        if (3 !== r && 8 !== r && 2 !== r) return void 0 === t.getAttribute ? S.prop(t, e, n) : (1 === r && S.isXMLDoc(t) || (o = S.attrHooks[e.toLowerCase()] || (S.expr.match.bool.test(e) ? he : void 0)), void 0 !== n ? null === n ? void S.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : null == (i = S.find.attr(t, e)) ? void 0 : i);
      },
      attrHooks: {
        type: {
          set: function set(t, e) {
            if (!v.radioValue && "radio" === e && P(t, "input")) {
              var n = t.value;
              return t.setAttribute("type", e), n && (t.value = n), e;
            }
          }
        }
      },
      removeAttr: function removeAttr(t, e) {
        var n,
            i = 0,
            o = e && e.match(N);
        if (o && 1 === t.nodeType) for (; n = o[i++];) {
          t.removeAttribute(n);
        }
      }
    }), he = {
      set: function set(t, e, n) {
        return !1 === e ? S.removeAttr(t, n) : t.setAttribute(n, n), n;
      }
    }, S.each(S.expr.match.bool.source.match(/\w+/g), function (t, e) {
      var n = ge[e] || S.find.attr;

      ge[e] = function (t, e, i) {
        var o,
            r,
            s = e.toLowerCase();
        return i || (r = ge[s], ge[s] = o, o = null != n(t, e, i) ? s : null, ge[s] = r), o;
      };
    });
    var ve = /^(?:input|select|textarea|button)$/i,
        me = /^(?:a|area)$/i;

    function ye(t) {
      return (t.match(N) || []).join(" ");
    }

    function be(t) {
      return t.getAttribute && t.getAttribute("class") || "";
    }

    function xe(t) {
      return Array.isArray(t) ? t : "string" == typeof t && t.match(N) || [];
    }

    S.fn.extend({
      prop: function prop(t, e) {
        return W(this, S.prop, t, e, arguments.length > 1);
      },
      removeProp: function removeProp(t) {
        return this.each(function () {
          delete this[S.propFix[t] || t];
        });
      }
    }), S.extend({
      prop: function prop(t, e, n) {
        var i,
            o,
            r = t.nodeType;
        if (3 !== r && 8 !== r && 2 !== r) return 1 === r && S.isXMLDoc(t) || (e = S.propFix[e] || e, o = S.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e];
      },
      propHooks: {
        tabIndex: {
          get: function get(t) {
            var e = S.find.attr(t, "tabindex");
            return e ? parseInt(e, 10) : ve.test(t.nodeName) || me.test(t.nodeName) && t.href ? 0 : -1;
          }
        }
      },
      propFix: {
        "for": "htmlFor",
        "class": "className"
      }
    }), v.optSelected || (S.propHooks.selected = {
      get: function get(t) {
        var e = t.parentNode;
        return e && e.parentNode && e.parentNode.selectedIndex, null;
      },
      set: function set(t) {
        var e = t.parentNode;
        e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
      }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      S.propFix[this.toLowerCase()] = this;
    }), S.fn.extend({
      addClass: function addClass(t) {
        var e,
            n,
            i,
            o,
            r,
            s,
            a,
            l = 0;
        if (m(t)) return this.each(function (e) {
          S(this).addClass(t.call(this, e, be(this)));
        });
        if ((e = xe(t)).length) for (; n = this[l++];) {
          if (o = be(n), i = 1 === n.nodeType && " " + ye(o) + " ") {
            for (s = 0; r = e[s++];) {
              i.indexOf(" " + r + " ") < 0 && (i += r + " ");
            }

            o !== (a = ye(i)) && n.setAttribute("class", a);
          }
        }
        return this;
      },
      removeClass: function removeClass(t) {
        var e,
            n,
            i,
            o,
            r,
            s,
            a,
            l = 0;
        if (m(t)) return this.each(function (e) {
          S(this).removeClass(t.call(this, e, be(this)));
        });
        if (!arguments.length) return this.attr("class", "");
        if ((e = xe(t)).length) for (; n = this[l++];) {
          if (o = be(n), i = 1 === n.nodeType && " " + ye(o) + " ") {
            for (s = 0; r = e[s++];) {
              for (; i.indexOf(" " + r + " ") > -1;) {
                i = i.replace(" " + r + " ", " ");
              }
            }

            o !== (a = ye(i)) && n.setAttribute("class", a);
          }
        }
        return this;
      },
      toggleClass: function toggleClass(t, e) {
        var n = _typeof(t),
            i = "string" === n || Array.isArray(t);

        return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : m(t) ? this.each(function (n) {
          S(this).toggleClass(t.call(this, n, be(this), e), e);
        }) : this.each(function () {
          var e, o, r, s;
          if (i) for (o = 0, r = S(this), s = xe(t); e = s[o++];) {
            r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
          } else void 0 !== t && "boolean" !== n || ((e = be(this)) && K.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : K.get(this, "__className__") || ""));
        });
      },
      hasClass: function hasClass(t) {
        var e,
            n,
            i = 0;

        for (e = " " + t + " "; n = this[i++];) {
          if (1 === n.nodeType && (" " + ye(be(n)) + " ").indexOf(e) > -1) return !0;
        }

        return !1;
      }
    });
    var we = /\r/g;
    S.fn.extend({
      val: function val(t) {
        var e,
            n,
            i,
            o = this[0];
        return arguments.length ? (i = m(t), this.each(function (n) {
          var o;
          1 === this.nodeType && (null == (o = i ? t.call(this, n, S(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = S.map(o, function (t) {
            return null == t ? "" : t + "";
          })), (e = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o));
        })) : o ? (e = S.valHooks[o.type] || S.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(we, "") : null == n ? "" : n : void 0;
      }
    }), S.extend({
      valHooks: {
        option: {
          get: function get(t) {
            var e = S.find.attr(t, "value");
            return null != e ? e : ye(S.text(t));
          }
        },
        select: {
          get: function get(t) {
            var e,
                n,
                i,
                o = t.options,
                r = t.selectedIndex,
                s = "select-one" === t.type,
                a = s ? null : [],
                l = s ? r + 1 : o.length;

            for (i = r < 0 ? l : s ? r : 0; i < l; i++) {
              if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !P(n.parentNode, "optgroup"))) {
                if (e = S(n).val(), s) return e;
                a.push(e);
              }
            }

            return a;
          },
          set: function set(t, e) {
            for (var n, i, o = t.options, r = S.makeArray(e), s = o.length; s--;) {
              ((i = o[s]).selected = S.inArray(S.valHooks.option.get(i), r) > -1) && (n = !0);
            }

            return n || (t.selectedIndex = -1), r;
          }
        }
      }
    }), S.each(["radio", "checkbox"], function () {
      S.valHooks[this] = {
        set: function set(t, e) {
          if (Array.isArray(e)) return t.checked = S.inArray(S(t).val(), e) > -1;
        }
      }, v.checkOn || (S.valHooks[this].get = function (t) {
        return null === t.getAttribute("value") ? "on" : t.value;
      });
    }), v.focusin = "onfocusin" in n;

    var Te = /^(?:focusinfocus|focusoutblur)$/,
        Se = function Se(t) {
      t.stopPropagation();
    };

    S.extend(S.event, {
      trigger: function trigger(t, e, i, o) {
        var r,
            s,
            a,
            l,
            c,
            u,
            d,
            p,
            h = [i || b],
            g = f.call(t, "type") ? t.type : t,
            v = f.call(t, "namespace") ? t.namespace.split(".") : [];

        if (s = p = a = i = i || b, 3 !== i.nodeType && 8 !== i.nodeType && !Te.test(g + S.event.triggered) && (g.indexOf(".") > -1 && (v = g.split("."), g = v.shift(), v.sort()), c = g.indexOf(":") < 0 && "on" + g, (t = t[S.expando] ? t : new S.Event(g, "object" == _typeof(t) && t)).isTrigger = o ? 2 : 3, t.namespace = v.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : S.makeArray(e, [t]), d = S.event.special[g] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, e))) {
          if (!o && !d.noBubble && !y(i)) {
            for (l = d.delegateType || g, Te.test(l + g) || (s = s.parentNode); s; s = s.parentNode) {
              h.push(s), a = s;
            }

            a === (i.ownerDocument || b) && h.push(a.defaultView || a.parentWindow || n);
          }

          for (r = 0; (s = h[r++]) && !t.isPropagationStopped();) {
            p = s, t.type = r > 1 ? l : d.bindType || g, (u = (K.get(s, "events") || Object.create(null))[t.type] && K.get(s, "handle")) && u.apply(s, e), (u = c && s[c]) && u.apply && G(s) && (t.result = u.apply(s, e), !1 === t.result && t.preventDefault());
          }

          return t.type = g, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(h.pop(), e) || !G(i) || c && m(i[g]) && !y(i) && ((a = i[c]) && (i[c] = null), S.event.triggered = g, t.isPropagationStopped() && p.addEventListener(g, Se), i[g](), t.isPropagationStopped() && p.removeEventListener(g, Se), S.event.triggered = void 0, a && (i[c] = a)), t.result;
        }
      },
      simulate: function simulate(t, e, n) {
        var i = S.extend(new S.Event(), n, {
          type: t,
          isSimulated: !0
        });
        S.event.trigger(i, null, e);
      }
    }), S.fn.extend({
      trigger: function trigger(t, e) {
        return this.each(function () {
          S.event.trigger(t, e, this);
        });
      },
      triggerHandler: function triggerHandler(t, e) {
        var n = this[0];
        if (n) return S.event.trigger(t, e, n, !0);
      }
    }), v.focusin || S.each({
      focus: "focusin",
      blur: "focusout"
    }, function (t, e) {
      var n = function n(t) {
        S.event.simulate(e, t.target, S.event.fix(t));
      };

      S.event.special[e] = {
        setup: function setup() {
          var i = this.ownerDocument || this.document || this,
              o = K.access(i, e);
          o || i.addEventListener(t, n, !0), K.access(i, e, (o || 0) + 1);
        },
        teardown: function teardown() {
          var i = this.ownerDocument || this.document || this,
              o = K.access(i, e) - 1;
          o ? K.access(i, e, o) : (i.removeEventListener(t, n, !0), K.remove(i, e));
        }
      };
    });
    var ke = n.location,
        Ce = {
      guid: Date.now()
    },
        _e = /\?/;

    S.parseXML = function (t) {
      var e;
      if (!t || "string" != typeof t) return null;

      try {
        e = new n.DOMParser().parseFromString(t, "text/xml");
      } catch (t) {
        e = void 0;
      }

      return e && !e.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + t), e;
    };

    var $e = /\[\]$/,
        Ae = /\r?\n/g,
        Pe = /^(?:submit|button|image|reset|file)$/i,
        Ee = /^(?:input|select|textarea|keygen)/i;

    function Oe(t, e, n, i) {
      var o;
      if (Array.isArray(e)) S.each(e, function (e, o) {
        n || $e.test(t) ? i(t, o) : Oe(t + "[" + ("object" == _typeof(o) && null != o ? e : "") + "]", o, n, i);
      });else if (n || "object" !== T(e)) i(t, e);else for (o in e) {
        Oe(t + "[" + o + "]", e[o], n, i);
      }
    }

    S.param = function (t, e) {
      var n,
          i = [],
          o = function o(t, e) {
        var n = m(e) ? e() : e;
        i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n);
      };

      if (null == t) return "";
      if (Array.isArray(t) || t.jquery && !S.isPlainObject(t)) S.each(t, function () {
        o(this.name, this.value);
      });else for (n in t) {
        Oe(n, t[n], e, o);
      }
      return i.join("&");
    }, S.fn.extend({
      serialize: function serialize() {
        return S.param(this.serializeArray());
      },
      serializeArray: function serializeArray() {
        return this.map(function () {
          var t = S.prop(this, "elements");
          return t ? S.makeArray(t) : this;
        }).filter(function () {
          var t = this.type;
          return this.name && !S(this).is(":disabled") && Ee.test(this.nodeName) && !Pe.test(t) && (this.checked || !gt.test(t));
        }).map(function (t, e) {
          var n = S(this).val();
          return null == n ? null : Array.isArray(n) ? S.map(n, function (t) {
            return {
              name: e.name,
              value: t.replace(Ae, "\r\n")
            };
          }) : {
            name: e.name,
            value: n.replace(Ae, "\r\n")
          };
        }).get();
      }
    });
    var Me = /%20/g,
        De = /#.*$/,
        Le = /([?&])_=[^&]*/,
        je = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        He = /^(?:GET|HEAD)$/,
        Ne = /^\/\//,
        ze = {},
        Ie = {},
        Fe = "*/".concat("*"),
        qe = b.createElement("a");

    function Re(t) {
      return function (e, n) {
        "string" != typeof e && (n = e, e = "*");
        var i,
            o = 0,
            r = e.toLowerCase().match(N) || [];
        if (m(n)) for (; i = r[o++];) {
          "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n);
        }
      };
    }

    function Be(t, e, n, i) {
      var o = {},
          r = t === Ie;

      function s(a) {
        var l;
        return o[a] = !0, S.each(t[a] || [], function (t, a) {
          var c = a(e, n, i);
          return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c), s(c), !1);
        }), l;
      }

      return s(e.dataTypes[0]) || !o["*"] && s("*");
    }

    function We(t, e) {
      var n,
          i,
          o = S.ajaxSettings.flatOptions || {};

      for (n in e) {
        void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
      }

      return i && S.extend(!0, t, i), t;
    }

    qe.href = ke.href, S.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: ke.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ke.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Fe,
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
      ajaxSetup: function ajaxSetup(t, e) {
        return e ? We(We(t, S.ajaxSettings), e) : We(S.ajaxSettings, t);
      },
      ajaxPrefilter: Re(ze),
      ajaxTransport: Re(Ie),
      ajax: function ajax(t, e) {
        "object" == _typeof(t) && (e = t, t = void 0), e = e || {};
        var i,
            o,
            r,
            s,
            a,
            l,
            c,
            u,
            d,
            p,
            f = S.ajaxSetup({}, e),
            h = f.context || f,
            g = f.context && (h.nodeType || h.jquery) ? S(h) : S.event,
            v = S.Deferred(),
            m = S.Callbacks("once memory"),
            y = f.statusCode || {},
            x = {},
            w = {},
            T = "canceled",
            k = {
          readyState: 0,
          getResponseHeader: function getResponseHeader(t) {
            var e;

            if (c) {
              if (!s) for (s = {}; e = je.exec(r);) {
                s[e[1].toLowerCase() + " "] = (s[e[1].toLowerCase() + " "] || []).concat(e[2]);
              }
              e = s[t.toLowerCase() + " "];
            }

            return null == e ? null : e.join(", ");
          },
          getAllResponseHeaders: function getAllResponseHeaders() {
            return c ? r : null;
          },
          setRequestHeader: function setRequestHeader(t, e) {
            return null == c && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t, x[t] = e), this;
          },
          overrideMimeType: function overrideMimeType(t) {
            return null == c && (f.mimeType = t), this;
          },
          statusCode: function statusCode(t) {
            var e;
            if (t) if (c) k.always(t[k.status]);else for (e in t) {
              y[e] = [y[e], t[e]];
            }
            return this;
          },
          abort: function abort(t) {
            var e = t || T;
            return i && i.abort(e), C(0, e), this;
          }
        };

        if (v.promise(k), f.url = ((t || f.url || ke.href) + "").replace(Ne, ke.protocol + "//"), f.type = e.method || e.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(N) || [""], null == f.crossDomain) {
          l = b.createElement("a");

          try {
            l.href = f.url, l.href = l.href, f.crossDomain = qe.protocol + "//" + qe.host != l.protocol + "//" + l.host;
          } catch (t) {
            f.crossDomain = !0;
          }
        }

        if (f.data && f.processData && "string" != typeof f.data && (f.data = S.param(f.data, f.traditional)), Be(ze, f, e, k), c) return k;

        for (d in (u = S.event && f.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !He.test(f.type), o = f.url.replace(De, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Me, "+")) : (p = f.url.slice(o.length), f.data && (f.processData || "string" == typeof f.data) && (o += (_e.test(o) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (o = o.replace(Le, "$1"), p = (_e.test(o) ? "&" : "?") + "_=" + Ce.guid++ + p), f.url = o + p), f.ifModified && (S.lastModified[o] && k.setRequestHeader("If-Modified-Since", S.lastModified[o]), S.etag[o] && k.setRequestHeader("If-None-Match", S.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || e.contentType) && k.setRequestHeader("Content-Type", f.contentType), k.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Fe + "; q=0.01" : "") : f.accepts["*"]), f.headers) {
          k.setRequestHeader(d, f.headers[d]);
        }

        if (f.beforeSend && (!1 === f.beforeSend.call(h, k, f) || c)) return k.abort();

        if (T = "abort", m.add(f.complete), k.done(f.success), k.fail(f.error), i = Be(Ie, f, e, k)) {
          if (k.readyState = 1, u && g.trigger("ajaxSend", [k, f]), c) return k;
          f.async && f.timeout > 0 && (a = n.setTimeout(function () {
            k.abort("timeout");
          }, f.timeout));

          try {
            c = !1, i.send(x, C);
          } catch (t) {
            if (c) throw t;
            C(-1, t);
          }
        } else C(-1, "No Transport");

        function C(t, e, s, l) {
          var d,
              p,
              b,
              x,
              w,
              T = e;
          c || (c = !0, a && n.clearTimeout(a), i = void 0, r = l || "", k.readyState = t > 0 ? 4 : 0, d = t >= 200 && t < 300 || 304 === t, s && (x = function (t, e, n) {
            for (var i, o, r, s, a = t.contents, l = t.dataTypes; "*" === l[0];) {
              l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
            }

            if (i) for (o in a) {
              if (a[o] && a[o].test(i)) {
                l.unshift(o);
                break;
              }
            }
            if (l[0] in n) r = l[0];else {
              for (o in n) {
                if (!l[0] || t.converters[o + " " + l[0]]) {
                  r = o;
                  break;
                }

                s || (s = o);
              }

              r = r || s;
            }
            if (r) return r !== l[0] && l.unshift(r), n[r];
          }(f, k, s)), !d && S.inArray("script", f.dataTypes) > -1 && (f.converters["text script"] = function () {}), x = function (t, e, n, i) {
            var o,
                r,
                s,
                a,
                l,
                c = {},
                u = t.dataTypes.slice();
            if (u[1]) for (s in t.converters) {
              c[s.toLowerCase()] = t.converters[s];
            }

            for (r = u.shift(); r;) {
              if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift()) if ("*" === r) r = l;else if ("*" !== l && l !== r) {
                if (!(s = c[l + " " + r] || c["* " + r])) for (o in c) {
                  if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                    !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                    break;
                  }
                }
                if (!0 !== s) if (s && t["throws"]) e = s(e);else try {
                  e = s(e);
                } catch (t) {
                  return {
                    state: "parsererror",
                    error: s ? t : "No conversion from " + l + " to " + r
                  };
                }
              }
            }

            return {
              state: "success",
              data: e
            };
          }(f, x, k, d), d ? (f.ifModified && ((w = k.getResponseHeader("Last-Modified")) && (S.lastModified[o] = w), (w = k.getResponseHeader("etag")) && (S.etag[o] = w)), 204 === t || "HEAD" === f.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = x.state, p = x.data, d = !(b = x.error))) : (b = T, !t && T || (T = "error", t < 0 && (t = 0))), k.status = t, k.statusText = (e || T) + "", d ? v.resolveWith(h, [p, T, k]) : v.rejectWith(h, [k, T, b]), k.statusCode(y), y = void 0, u && g.trigger(d ? "ajaxSuccess" : "ajaxError", [k, f, d ? p : b]), m.fireWith(h, [k, T]), u && (g.trigger("ajaxComplete", [k, f]), --S.active || S.event.trigger("ajaxStop")));
        }

        return k;
      },
      getJSON: function getJSON(t, e, n) {
        return S.get(t, e, n, "json");
      },
      getScript: function getScript(t, e) {
        return S.get(t, void 0, e, "script");
      }
    }), S.each(["get", "post"], function (t, e) {
      S[e] = function (t, n, i, o) {
        return m(n) && (o = o || i, i = n, n = void 0), S.ajax(S.extend({
          url: t,
          type: e,
          dataType: o,
          data: n,
          success: i
        }, S.isPlainObject(t) && t));
      };
    }), S.ajaxPrefilter(function (t) {
      var e;

      for (e in t.headers) {
        "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "");
      }
    }), S._evalUrl = function (t, e, n) {
      return S.ajax({
        url: t,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: {
          "text script": function textScript() {}
        },
        dataFilter: function dataFilter(t) {
          S.globalEval(t, e, n);
        }
      });
    }, S.fn.extend({
      wrapAll: function wrapAll(t) {
        var e;
        return this[0] && (m(t) && (t = t.call(this[0])), e = S(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
          for (var t = this; t.firstElementChild;) {
            t = t.firstElementChild;
          }

          return t;
        }).append(this)), this;
      },
      wrapInner: function wrapInner(t) {
        return m(t) ? this.each(function (e) {
          S(this).wrapInner(t.call(this, e));
        }) : this.each(function () {
          var e = S(this),
              n = e.contents();
          n.length ? n.wrapAll(t) : e.append(t);
        });
      },
      wrap: function wrap(t) {
        var e = m(t);
        return this.each(function (n) {
          S(this).wrapAll(e ? t.call(this, n) : t);
        });
      },
      unwrap: function unwrap(t) {
        return this.parent(t).not("body").each(function () {
          S(this).replaceWith(this.childNodes);
        }), this;
      }
    }), S.expr.pseudos.hidden = function (t) {
      return !S.expr.pseudos.visible(t);
    }, S.expr.pseudos.visible = function (t) {
      return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
    }, S.ajaxSettings.xhr = function () {
      try {
        return new n.XMLHttpRequest();
      } catch (t) {}
    };
    var Xe = {
      0: 200,
      1223: 204
    },
        Ye = S.ajaxSettings.xhr();
    v.cors = !!Ye && "withCredentials" in Ye, v.ajax = Ye = !!Ye, S.ajaxTransport(function (t) {
      var _e3, i;

      if (v.cors || Ye && !t.crossDomain) return {
        send: function send(o, r) {
          var s,
              a = t.xhr();
          if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) {
            a[s] = t.xhrFields[s];
          }

          for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) {
            a.setRequestHeader(s, o[s]);
          }

          _e3 = function e(t) {
            return function () {
              _e3 && (_e3 = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Xe[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                binary: a.response
              } : {
                text: a.responseText
              }, a.getAllResponseHeaders()));
            };
          }, a.onload = _e3(), i = a.onerror = a.ontimeout = _e3("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
            4 === a.readyState && n.setTimeout(function () {
              _e3 && i();
            });
          }, _e3 = _e3("abort");

          try {
            a.send(t.hasContent && t.data || null);
          } catch (t) {
            if (_e3) throw t;
          }
        },
        abort: function abort() {
          _e3 && _e3();
        }
      };
    }), S.ajaxPrefilter(function (t) {
      t.crossDomain && (t.contents.script = !1);
    }), S.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function textScript(t) {
          return S.globalEval(t), t;
        }
      }
    }), S.ajaxPrefilter("script", function (t) {
      void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
    }), S.ajaxTransport("script", function (t) {
      var e, _n2;

      if (t.crossDomain || t.scriptAttrs) return {
        send: function send(i, o) {
          e = S("<script>").attr(t.scriptAttrs || {}).prop({
            charset: t.scriptCharset,
            src: t.url
          }).on("load error", _n2 = function n(t) {
            e.remove(), _n2 = null, t && o("error" === t.type ? 404 : 200, t.type);
          }), b.head.appendChild(e[0]);
        },
        abort: function abort() {
          _n2 && _n2();
        }
      };
    });
    var Ue,
        Ve = [],
        Ge = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function jsonpCallback() {
        var t = Ve.pop() || S.expando + "_" + Ce.guid++;
        return this[t] = !0, t;
      }
    }), S.ajaxPrefilter("json jsonp", function (t, e, i) {
      var o,
          r,
          s,
          a = !1 !== t.jsonp && (Ge.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ge.test(t.data) && "data");
      if (a || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = m(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ge, "$1" + o) : !1 !== t.jsonp && (t.url += (_e.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
        return s || S.error(o + " was not called"), s[0];
      }, t.dataTypes[0] = "json", r = n[o], n[o] = function () {
        s = arguments;
      }, i.always(function () {
        void 0 === r ? S(n).removeProp(o) : n[o] = r, t[o] && (t.jsonpCallback = e.jsonpCallback, Ve.push(o)), s && m(r) && r(s[0]), s = r = void 0;
      }), "script";
    }), v.createHTMLDocument = ((Ue = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ue.childNodes.length), S.parseHTML = function (t, e, n) {
      return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (v.createHTMLDocument ? ((i = (e = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, e.head.appendChild(i)) : e = b), r = !n && [], (o = E.exec(t)) ? [e.createElement(o[1])] : (o = Tt([t], e, r), r && r.length && S(r).remove(), S.merge([], o.childNodes)));
      var i, o, r;
    }, S.fn.load = function (t, e, n) {
      var i,
          o,
          r,
          s = this,
          a = t.indexOf(" ");
      return a > -1 && (i = ye(t.slice(a)), t = t.slice(0, a)), m(e) ? (n = e, e = void 0) : e && "object" == _typeof(e) && (o = "POST"), s.length > 0 && S.ajax({
        url: t,
        type: o || "GET",
        dataType: "html",
        data: e
      }).done(function (t) {
        r = arguments, s.html(i ? S("<div>").append(S.parseHTML(t)).find(i) : t);
      }).always(n && function (t, e) {
        s.each(function () {
          n.apply(this, r || [t.responseText, e, t]);
        });
      }), this;
    }, S.expr.pseudos.animated = function (t) {
      return S.grep(S.timers, function (e) {
        return t === e.elem;
      }).length;
    }, S.offset = {
      setOffset: function setOffset(t, e, n) {
        var i,
            o,
            r,
            s,
            a,
            l,
            c = S.css(t, "position"),
            u = S(t),
            d = {};
        "static" === c && (t.style.position = "relative"), a = u.offset(), r = S.css(t, "top"), l = S.css(t, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (s = (i = u.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), m(e) && (e = e.call(t, n, S.extend({}, a))), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + o), "using" in e ? e.using.call(t, d) : ("number" == typeof d.top && (d.top += "px"), "number" == typeof d.left && (d.left += "px"), u.css(d));
      }
    }, S.fn.extend({
      offset: function offset(t) {
        if (arguments.length) return void 0 === t ? this : this.each(function (e) {
          S.offset.setOffset(this, t, e);
        });
        var e,
            n,
            i = this[0];
        return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
          top: e.top + n.pageYOffset,
          left: e.left + n.pageXOffset
        }) : {
          top: 0,
          left: 0
        } : void 0;
      },
      position: function position() {
        if (this[0]) {
          var t,
              e,
              n,
              i = this[0],
              o = {
            top: 0,
            left: 0
          };
          if ("fixed" === S.css(i, "position")) e = i.getBoundingClientRect();else {
            for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === S.css(t, "position");) {
              t = t.parentNode;
            }

            t && t !== i && 1 === t.nodeType && ((o = S(t).offset()).top += S.css(t, "borderTopWidth", !0), o.left += S.css(t, "borderLeftWidth", !0));
          }
          return {
            top: e.top - o.top - S.css(i, "marginTop", !0),
            left: e.left - o.left - S.css(i, "marginLeft", !0)
          };
        }
      },
      offsetParent: function offsetParent() {
        return this.map(function () {
          for (var t = this.offsetParent; t && "static" === S.css(t, "position");) {
            t = t.offsetParent;
          }

          return t || rt;
        });
      }
    }), S.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function (t, e) {
      var n = "pageYOffset" === e;

      S.fn[t] = function (i) {
        return W(this, function (t, i, o) {
          var r;
          if (y(t) ? r = t : 9 === t.nodeType && (r = t.defaultView), void 0 === o) return r ? r[e] : t[i];
          r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : t[i] = o;
        }, t, i, arguments.length);
      };
    }), S.each(["top", "left"], function (t, e) {
      S.cssHooks[e] = Yt(v.pixelPosition, function (t, n) {
        if (n) return n = Xt(t, e), qt.test(n) ? S(t).position()[e] + "px" : n;
      });
    }), S.each({
      Height: "height",
      Width: "width"
    }, function (t, e) {
      S.each({
        padding: "inner" + t,
        content: e,
        "": "outer" + t
      }, function (n, i) {
        S.fn[i] = function (o, r) {
          var s = arguments.length && (n || "boolean" != typeof o),
              a = n || (!0 === o || !0 === r ? "margin" : "border");
          return W(this, function (e, n, o) {
            var r;
            return y(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === o ? S.css(e, n, a) : S.style(e, n, o, a);
          }, e, s ? o : void 0, s);
        };
      });
    }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
      S.fn[e] = function (t) {
        return this.on(e, t);
      };
    }), S.fn.extend({
      bind: function bind(t, e, n) {
        return this.on(t, null, e, n);
      },
      unbind: function unbind(t, e) {
        return this.off(t, null, e);
      },
      delegate: function delegate(t, e, n, i) {
        return this.on(e, t, n, i);
      },
      undelegate: function undelegate(t, e, n) {
        return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n);
      },
      hover: function hover(t, e) {
        return this.mouseenter(t).mouseleave(e || t);
      }
    }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
      S.fn[e] = function (t, n) {
        return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e);
      };
    });
    var Ze = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function (t, e) {
      var n, i, o;
      if ("string" == typeof e && (n = t[e], e = t, t = n), m(t)) return i = a.call(arguments, 2), (o = function o() {
        return t.apply(e || this, i.concat(a.call(arguments)));
      }).guid = t.guid = t.guid || S.guid++, o;
    }, S.holdReady = function (t) {
      t ? S.readyWait++ : S.ready(!0);
    }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = P, S.isFunction = m, S.isWindow = y, S.camelCase = V, S.type = T, S.now = Date.now, S.isNumeric = function (t) {
      var e = S.type(t);
      return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
    }, S.trim = function (t) {
      return null == t ? "" : (t + "").replace(Ze, "");
    }, void 0 === (i = function () {
      return S;
    }.apply(e, [])) || (t.exports = i);
    var Ke = n.jQuery,
        Qe = n.$;
    return S.noConflict = function (t) {
      return n.$ === S && (n.$ = Qe), t && n.jQuery === S && (n.jQuery = Ke), S;
    }, void 0 === o && (n.jQuery = n.$ = S), S;
  });
}, function (t, e, n) {
  (function (t) {
    !function (t, e, n, i) {
      "use strict";

      if (t.console = t.console || {
        info: function info(t) {}
      }, n) if (n.fn.fancybox) console.info("fancyBox already initialized");else {
        var o,
            r,
            s = {
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
          clickContent: function clickContent(t, e) {
            return "image" === t.type && "zoom";
          },
          clickSlide: "close",
          clickOutside: "close",
          dblclickContent: !1,
          dblclickSlide: !1,
          dblclickOutside: !1,
          mobile: {
            preventCaptionOverlap: !1,
            idleTime: !1,
            clickContent: function clickContent(t, e) {
              return "image" === t.type && "toggleControls";
            },
            clickSlide: function clickSlide(t, e) {
              return "image" === t.type ? "toggleControls" : "close";
            },
            dblclickContent: function dblclickContent(t, e) {
              return "image" === t.type && "zoom";
            },
            dblclickSlide: function dblclickSlide(t, e) {
              return "image" === t.type && "zoom";
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
            a = n(t),
            l = n(e),
            c = 0,
            u = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
          return t.setTimeout(e, 1e3 / 60);
        },
            d = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function (e) {
          t.clearTimeout(e);
        },
            p = function () {
          var t,
              n = e.createElement("fakeelement"),
              i = {
            transition: "transitionend",
            OTransition: "oTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd"
          };

          for (t in i) {
            if (void 0 !== n.style[t]) return i[t];
          }

          return "transitionend";
        }(),
            f = function f(t) {
          return t && t.length && t[0].offsetHeight;
        },
            h = function h(t, e) {
          var i = n.extend(!0, {}, t, e);
          return n.each(e, function (t, e) {
            n.isArray(e) && (i[t] = e);
          }), i;
        },
            g = function g(t, e, i) {
          this.opts = h({
            index: i
          }, n.fancybox.defaults), n.isPlainObject(e) && (this.opts = h(this.opts, e)), n.fancybox.isMobile && (this.opts = h(this.opts, this.opts.mobile)), this.id = this.opts.id || ++c, this.currIndex = parseInt(this.opts.index, 10) || 0, this.prevIndex = null, this.prevPos = null, this.currPos = 0, this.firstRun = !0, this.group = [], this.slides = {}, this.addContent(t), this.group.length && this.init();
        };

        n.extend(g.prototype, {
          init: function init() {
            var i,
                o,
                r = this,
                s = r.group[r.currIndex].opts;
            s.closeExisting && n.fancybox.close(!0), n("body").addClass("fancybox-active"), !n.fancybox.getInstance() && !1 !== s.hideScrollbar && !n.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (t.innerWidth - e.documentElement.clientWidth) + "px;}</style>"), n("body").addClass("compensate-for-scrollbar")), o = "", n.each(s.buttons, function (t, e) {
              o += s.btnTpl[e] || "";
            }), i = n(r.translate(r, s.baseTpl.replace("{{buttons}}", o).replace("{{arrows}}", s.btnTpl.arrowLeft + s.btnTpl.arrowRight))).attr("id", "fancybox-container-" + r.id).addClass(s.baseClass).data("FancyBox", r).appendTo(s.parentEl), r.$refs = {
              container: i
            }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (t) {
              r.$refs[t] = i.find(".fancybox-" + t);
            }), r.trigger("onInit"), r.activate(), r.jumpTo(r.currIndex);
          },
          translate: function translate(t, e) {
            var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
            return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
              return void 0 === n[e] ? t : n[e];
            });
          },
          addContent: function addContent(t) {
            var e,
                i = this,
                o = n.makeArray(t);
            n.each(o, function (t, e) {
              var o,
                  r,
                  s,
                  a,
                  l,
                  c = {},
                  u = {};
              n.isPlainObject(e) ? (c = e, u = e.opts || e) : "object" === n.type(e) && n(e).length ? (u = (o = n(e)).data() || {}, (u = n.extend(!0, {}, u, u.options)).$orig = o, c.src = i.opts.src || u.src || o.attr("href"), c.type || c.src || (c.type = "inline", c.src = e)) : c = {
                type: "html",
                src: e + ""
              }, c.opts = n.extend(!0, {}, i.opts, u), n.isArray(u.buttons) && (c.opts.buttons = u.buttons), n.fancybox.isMobile && c.opts.mobile && (c.opts = h(c.opts, c.opts.mobile)), r = c.type || c.opts.type, a = c.src || "", !r && a && ((s = a.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (r = "video", c.opts.video.format || (c.opts.video.format = "video/" + ("ogv" === s[1] ? "ogg" : s[1]))) : a.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? r = "image" : a.match(/\.(pdf)((\?|#).*)?$/i) ? (r = "iframe", c = n.extend(!0, c, {
                contentType: "pdf",
                opts: {
                  iframe: {
                    preload: !1
                  }
                }
              })) : "#" === a.charAt(0) && (r = "inline")), r ? c.type = r : i.trigger("objectNeedsType", c), c.contentType || (c.contentType = n.inArray(c.type, ["html", "inline", "ajax"]) > -1 ? "html" : c.type), c.index = i.group.length, "auto" == c.opts.smallBtn && (c.opts.smallBtn = n.inArray(c.type, ["html", "inline", "ajax"]) > -1), "auto" === c.opts.toolbar && (c.opts.toolbar = !c.opts.smallBtn), c.$thumb = c.opts.$thumb || null, c.opts.$trigger && c.index === i.opts.index && (c.$thumb = c.opts.$trigger.find("img:first"), c.$thumb.length && (c.opts.$orig = c.opts.$trigger)), c.$thumb && c.$thumb.length || !c.opts.$orig || (c.$thumb = c.opts.$orig.find("img:first")), c.$thumb && !c.$thumb.length && (c.$thumb = null), c.thumb = c.opts.thumb || (c.$thumb ? c.$thumb[0].src : null), "function" === n.type(c.opts.caption) && (c.opts.caption = c.opts.caption.apply(e, [i, c])), "function" === n.type(i.opts.caption) && (c.opts.caption = i.opts.caption.apply(e, [i, c])), c.opts.caption instanceof n || (c.opts.caption = void 0 === c.opts.caption ? "" : c.opts.caption + ""), "ajax" === c.type && (l = a.split(/\s+/, 2)).length > 1 && (c.src = l.shift(), c.opts.filter = l.shift()), c.opts.modal && (c.opts = n.extend(!0, c.opts, {
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
            }), Object.keys(i.slides).length && (i.updateControls(), (e = i.Thumbs) && e.isActive && (e.create(), e.focus()));
          },
          addEvents: function addEvents() {
            var e = this;
            e.removeEvents(), e.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (t) {
              t.stopPropagation(), t.preventDefault(), e.close(t);
            }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (t) {
              t.stopPropagation(), t.preventDefault(), e.previous();
            }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (t) {
              t.stopPropagation(), t.preventDefault(), e.next();
            }).on("click.fb", "[data-fancybox-zoom]", function (t) {
              e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
            }), a.on("orientationchange.fb resize.fb", function (t) {
              t && t.originalEvent && "resize" === t.originalEvent.type ? (e.requestId && d(e.requestId), e.requestId = u(function () {
                e.update(t);
              })) : (e.current && "iframe" === e.current.type && e.$refs.stage.hide(), setTimeout(function () {
                e.$refs.stage.show(), e.update(t);
              }, n.fancybox.isMobile ? 600 : 250));
            }), l.on("keydown.fb", function (t) {
              var i = (n.fancybox ? n.fancybox.getInstance() : null).current,
                  o = t.keyCode || t.which;

              if (9 != o) {
                if (!(!i.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || n(t.target).is("input,textarea,video,audio,select"))) return 8 === o || 27 === o ? (t.preventDefault(), void e.close(t)) : 37 === o || 38 === o ? (t.preventDefault(), void e.previous()) : 39 === o || 40 === o ? (t.preventDefault(), void e.next()) : void e.trigger("afterKeydown", t, o);
              } else i.opts.trapFocus && e.focus(t);
            }), e.group[e.currIndex].opts.idleTime && (e.idleSecondsCounter = 0, l.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (t) {
              e.idleSecondsCounter = 0, e.isIdle && e.showControls(), e.isIdle = !1;
            }), e.idleInterval = t.setInterval(function () {
              e.idleSecondsCounter++, e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime && !e.isDragging && (e.isIdle = !0, e.idleSecondsCounter = 0, e.hideControls());
            }, 1e3));
          },
          removeEvents: function removeEvents() {
            a.off("orientationchange.fb resize.fb"), l.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), this.idleInterval && (t.clearInterval(this.idleInterval), this.idleInterval = null);
          },
          previous: function previous(t) {
            return this.jumpTo(this.currPos - 1, t);
          },
          next: function next(t) {
            return this.jumpTo(this.currPos + 1, t);
          },
          jumpTo: function jumpTo(t, e) {
            var i,
                o,
                r,
                s,
                a,
                l,
                c,
                u,
                d,
                p = this,
                h = p.group.length;

            if (!(p.isDragging || p.isClosing || p.isAnimating && p.firstRun)) {
              if (t = parseInt(t, 10), !(r = p.current ? p.current.opts.loop : p.opts.loop) && (t < 0 || t >= h)) return !1;
              if (i = p.firstRun = !Object.keys(p.slides).length, a = p.current, p.prevIndex = p.currIndex, p.prevPos = p.currPos, s = p.createSlide(t), h > 1 && ((r || s.index < h - 1) && p.createSlide(t + 1), (r || s.index > 0) && p.createSlide(t - 1)), p.current = s, p.currIndex = s.index, p.currPos = s.pos, p.trigger("beforeShow", i), p.updateControls(), s.forcedDuration = void 0, n.isNumeric(e) ? s.forcedDuration = e : e = s.opts[i ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), o = p.isMoved(s), s.$slide.addClass("fancybox-slide--current"), i) return s.opts.animationEffect && e && p.$refs.container.css("transition-duration", e + "ms"), p.$refs.container.addClass("fancybox-is-open").trigger("focus"), p.loadSlide(s), void p.preload("image");
              l = n.fancybox.getTranslate(a.$slide), c = n.fancybox.getTranslate(p.$refs.stage), n.each(p.slides, function (t, e) {
                n.fancybox.stop(e.$slide, !0);
              }), a.pos !== s.pos && (a.isComplete = !1), a.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), o ? (d = l.left - (a.pos * l.width + a.pos * a.opts.gutter), n.each(p.slides, function (t, i) {
                i.$slide.removeClass("fancybox-animated").removeClass(function (t, e) {
                  return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                });
                var o = i.pos * l.width + i.pos * i.opts.gutter;
                n.fancybox.setTranslate(i.$slide, {
                  top: 0,
                  left: o - c.left + d
                }), i.pos !== s.pos && i.$slide.addClass("fancybox-slide--" + (i.pos > s.pos ? "next" : "previous")), f(i.$slide), n.fancybox.animate(i.$slide, {
                  top: 0,
                  left: (i.pos - s.pos) * l.width + (i.pos - s.pos) * i.opts.gutter
                }, e, function () {
                  i.$slide.css({
                    transform: "",
                    opacity: ""
                  }).removeClass("fancybox-slide--next fancybox-slide--previous"), i.pos === p.currPos && p.complete();
                });
              })) : e && s.opts.transitionEffect && (u = "fancybox-animated fancybox-fx-" + s.opts.transitionEffect, a.$slide.addClass("fancybox-slide--" + (a.pos > s.pos ? "next" : "previous")), n.fancybox.animate(a.$slide, u, e, function () {
                a.$slide.removeClass(u).removeClass("fancybox-slide--next fancybox-slide--previous");
              }, !1)), s.isLoaded ? p.revealContent(s) : p.loadSlide(s), p.preload("image");
            }
          },
          createSlide: function createSlide(t) {
            var e, i;
            return i = (i = t % this.group.length) < 0 ? this.group.length + i : i, !this.slides[t] && this.group[i] && (e = n('<div class="fancybox-slide"></div>').appendTo(this.$refs.stage), this.slides[t] = n.extend(!0, {}, this.group[i], {
              pos: t,
              $slide: e,
              isLoaded: !1
            }), this.updateSlide(this.slides[t])), this.slides[t];
          },
          scaleToActual: function scaleToActual(t, e, i) {
            var o,
                r,
                s,
                a,
                l,
                c = this,
                u = c.current,
                d = u.$content,
                p = n.fancybox.getTranslate(u.$slide).width,
                f = n.fancybox.getTranslate(u.$slide).height,
                h = u.width,
                g = u.height;
            c.isAnimating || c.isMoved() || !d || "image" != u.type || !u.isLoaded || u.hasError || (c.isAnimating = !0, n.fancybox.stop(d), t = void 0 === t ? .5 * p : t, e = void 0 === e ? .5 * f : e, (o = n.fancybox.getTranslate(d)).top -= n.fancybox.getTranslate(u.$slide).top, o.left -= n.fancybox.getTranslate(u.$slide).left, a = h / o.width, l = g / o.height, r = .5 * p - .5 * h, s = .5 * f - .5 * g, h > p && ((r = o.left * a - (t * a - t)) > 0 && (r = 0), r < p - h && (r = p - h)), g > f && ((s = o.top * l - (e * l - e)) > 0 && (s = 0), s < f - g && (s = f - g)), c.updateCursor(h, g), n.fancybox.animate(d, {
              top: s,
              left: r,
              scaleX: a,
              scaleY: l
            }, i || 366, function () {
              c.isAnimating = !1;
            }), c.SlideShow && c.SlideShow.isActive && c.SlideShow.stop());
          },
          scaleToFit: function scaleToFit(t) {
            var e,
                i = this,
                o = i.current,
                r = o.$content;
            i.isAnimating || i.isMoved() || !r || "image" != o.type || !o.isLoaded || o.hasError || (i.isAnimating = !0, n.fancybox.stop(r), e = i.getFitPos(o), i.updateCursor(e.width, e.height), n.fancybox.animate(r, {
              top: e.top,
              left: e.left,
              scaleX: e.width / r.width(),
              scaleY: e.height / r.height()
            }, t || 366, function () {
              i.isAnimating = !1;
            }));
          },
          getFitPos: function getFitPos(t) {
            var e,
                i,
                o,
                r,
                s = t.$content,
                a = t.$slide,
                l = t.width || t.opts.width,
                c = t.height || t.opts.height,
                u = {};
            return !!(t.isLoaded && s && s.length) && (e = n.fancybox.getTranslate(this.$refs.stage).width, i = n.fancybox.getTranslate(this.$refs.stage).height, e -= parseFloat(a.css("paddingLeft")) + parseFloat(a.css("paddingRight")) + parseFloat(s.css("marginLeft")) + parseFloat(s.css("marginRight")), i -= parseFloat(a.css("paddingTop")) + parseFloat(a.css("paddingBottom")) + parseFloat(s.css("marginTop")) + parseFloat(s.css("marginBottom")), l && c || (l = e, c = i), (l *= o = Math.min(1, e / l, i / c)) > e - .5 && (l = e), (c *= o) > i - .5 && (c = i), "image" === t.type ? (u.top = Math.floor(.5 * (i - c)) + parseFloat(a.css("paddingTop")), u.left = Math.floor(.5 * (e - l)) + parseFloat(a.css("paddingLeft"))) : "video" === t.contentType && (c > l / (r = t.opts.width && t.opts.height ? l / c : t.opts.ratio || 16 / 9) ? c = l / r : l > c * r && (l = c * r)), u.width = l, u.height = c, u);
          },
          update: function update(t) {
            var e = this;
            n.each(e.slides, function (n, i) {
              e.updateSlide(i, t);
            });
          },
          updateSlide: function updateSlide(t, e) {
            var i = t && t.$content,
                o = t.width || t.opts.width,
                r = t.height || t.opts.height,
                s = t.$slide;
            this.adjustCaption(t), i && (o || r || "video" === t.contentType) && !t.hasError && (n.fancybox.stop(i), n.fancybox.setTranslate(i, this.getFitPos(t)), t.pos === this.currPos && (this.isAnimating = !1, this.updateCursor())), this.adjustLayout(t), s.length && (s.trigger("refresh"), t.pos === this.currPos && this.$refs.toolbar.add(this.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", s.get(0).scrollHeight > s.get(0).clientHeight)), this.trigger("onUpdate", t, e);
          },
          centerSlide: function centerSlide(t) {
            var e = this,
                i = e.current,
                o = i.$slide;
            !e.isClosing && i && (o.siblings().css({
              transform: "",
              opacity: ""
            }), o.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), n.fancybox.animate(o, {
              top: 0,
              left: 0,
              opacity: 1
            }, void 0 === t ? 0 : t, function () {
              o.css({
                transform: "",
                opacity: ""
              }), i.isComplete || e.complete();
            }, !1));
          },
          isMoved: function isMoved(t) {
            var e,
                i,
                o = t || this.current;
            return !!o && (i = n.fancybox.getTranslate(this.$refs.stage), e = n.fancybox.getTranslate(o.$slide), !o.$slide.hasClass("fancybox-animated") && (Math.abs(e.top - i.top) > .5 || Math.abs(e.left - i.left) > .5));
          },
          updateCursor: function updateCursor(t, e) {
            var i,
                o,
                r = this.current,
                s = this.$refs.container;
            r && !this.isClosing && this.Guestures && (s.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), o = !!(i = this.canPan(t, e)) || this.isZoomable(), s.toggleClass("fancybox-is-zoomable", o), n("[data-fancybox-zoom]").prop("disabled", !o), i ? s.addClass("fancybox-can-pan") : o && ("zoom" === r.opts.clickContent || n.isFunction(r.opts.clickContent) && "zoom" == r.opts.clickContent(r)) ? s.addClass("fancybox-can-zoomIn") : r.opts.touch && (r.opts.touch.vertical || this.group.length > 1) && "video" !== r.contentType && s.addClass("fancybox-can-swipe"));
          },
          isZoomable: function isZoomable() {
            var t,
                e = this.current;

            if (e && !this.isClosing && "image" === e.type && !e.hasError) {
              if (!e.isLoaded) return !0;
              if ((t = this.getFitPos(e)) && (e.width > t.width || e.height > t.height)) return !0;
            }

            return !1;
          },
          isScaledDown: function isScaledDown(t, e) {
            var i = !1,
                o = this.current,
                r = o.$content;
            return void 0 !== t && void 0 !== e ? i = t < o.width && e < o.height : r && (i = (i = n.fancybox.getTranslate(r)).width < o.width && i.height < o.height), i;
          },
          canPan: function canPan(t, e) {
            var i = this.current,
                o = null,
                r = !1;
            return "image" === i.type && (i.isComplete || t && e) && !i.hasError && (r = this.getFitPos(i), void 0 !== t && void 0 !== e ? o = {
              width: t,
              height: e
            } : i.isComplete && (o = n.fancybox.getTranslate(i.$content)), o && r && (r = Math.abs(o.width - r.width) > 1.5 || Math.abs(o.height - r.height) > 1.5)), r;
          },
          loadSlide: function loadSlide(t) {
            var e,
                i,
                o,
                r = this;

            if (!t.isLoading && !t.isLoaded) {
              if (t.isLoading = !0, !1 === r.trigger("beforeLoad", t)) return t.isLoading = !1, !1;

              switch (e = t.type, (i = t.$slide).off("refresh").trigger("onReset").addClass(t.opts.slideClass), e) {
                case "image":
                  r.setImage(t);
                  break;

                case "iframe":
                  r.setIframe(t);
                  break;

                case "html":
                  r.setContent(t, t.src || t.content);
                  break;

                case "video":
                  r.setContent(t, t.opts.video.tpl.replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.opts.videoFormat || t.opts.video.format || "").replace("{{poster}}", t.thumb || ""));
                  break;

                case "inline":
                  n(t.src).length ? r.setContent(t, n(t.src)) : r.setError(t);
                  break;

                case "ajax":
                  r.showLoading(t), o = n.ajax(n.extend({}, t.opts.ajax.settings, {
                    url: t.src,
                    success: function success(e, n) {
                      "success" === n && r.setContent(t, e);
                    },
                    error: function error(e, n) {
                      e && "abort" !== n && r.setError(t);
                    }
                  })), i.one("onReset", function () {
                    o.abort();
                  });
                  break;

                default:
                  r.setError(t);
              }

              return !0;
            }
          },
          setImage: function setImage(t) {
            var i,
                o = this;
            setTimeout(function () {
              var e = t.$image;
              o.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || o.showLoading(t);
            }, 50), o.checkSrcset(t), t.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")), !1 !== t.opts.preload && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width, t.height = t.opts.height, (i = e.createElement("img")).onerror = function () {
              n(this).remove(), t.$ghost = null;
            }, i.onload = function () {
              o.afterLoad(t);
            }, t.$ghost = n(i).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)), o.setBigImage(t);
          },
          checkSrcset: function checkSrcset(e) {
            var n,
                i,
                o,
                r,
                s = e.opts.srcset || e.opts.image.srcset;

            if (s) {
              o = t.devicePixelRatio || 1, r = t.innerWidth * o, (i = s.split(",").map(function (t) {
                var e = {};
                return t.trim().split(/\s+/).forEach(function (t, n) {
                  var i = parseInt(t.substring(0, t.length - 1), 10);
                  if (0 === n) return e.url = t;
                  i && (e.value = i, e.postfix = t[t.length - 1]);
                }), e;
              })).sort(function (t, e) {
                return t.value - e.value;
              });

              for (var a = 0; a < i.length; a++) {
                var l = i[a];

                if ("w" === l.postfix && l.value >= r || "x" === l.postfix && l.value >= o) {
                  n = l;
                  break;
                }
              }

              !n && i.length && (n = i[i.length - 1]), n && (e.src = n.url, e.width && e.height && "w" == n.postfix && (e.height = e.width / e.height * n.value, e.width = n.value), e.opts.srcset = s);
            }
          },
          setBigImage: function setBigImage(t) {
            var i = this,
                o = e.createElement("img"),
                r = n(o);
            t.$image = r.one("error", function () {
              i.setError(t);
            }).one("load", function () {
              var e;
              t.$ghost || (i.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), i.afterLoad(t)), i.isClosing || (t.opts.srcset && ((e = t.opts.sizes) && "auto" !== e || (e = (t.width / t.height > 1 && a.width() / a.height() > 1 ? "100" : Math.round(t.width / t.height * 100)) + "vw"), r.attr("sizes", e).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout(function () {
                t.$ghost && !i.isClosing && t.$ghost.hide();
              }, Math.min(300, Math.max(1e3, t.height / 1600))), i.hideLoading(t));
            }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (o.complete || "complete" == o.readyState) && r.naturalWidth && r.naturalHeight ? r.trigger("load") : o.error && r.trigger("error");
          },
          resolveImageSlideSize: function resolveImageSlideSize(t, e, n) {
            var i = parseInt(t.opts.width, 10),
                o = parseInt(t.opts.height, 10);
            t.width = e, t.height = n, i > 0 && (t.width = i, t.height = Math.floor(i * n / e)), o > 0 && (t.width = Math.floor(o * e / n), t.height = o);
          },
          setIframe: function setIframe(t) {
            var e,
                i = this,
                o = t.opts.iframe,
                r = t.$slide;
            t.$content = n('<div class="fancybox-content' + (o.preload ? " fancybox-is-hidden" : "") + '"></div>').css(o.css).appendTo(r), r.addClass("fancybox-slide--" + t.contentType), t.$iframe = e = n(o.tpl.replace(/\{rnd\}/g, new Date().getTime())).attr(o.attr).appendTo(t.$content), o.preload ? (i.showLoading(t), e.on("load.fb error.fb", function (e) {
              this.isReady = 1, t.$slide.trigger("refresh"), i.afterLoad(t);
            }), r.on("refresh.fb", function () {
              var n,
                  i = t.$content,
                  s = o.css.width,
                  a = o.css.height;

              if (1 === e[0].isReady) {
                try {
                  n = e.contents().find("body");
                } catch (t) {}

                n && n.length && n.children().length && (r.css("overflow", "visible"), i.css({
                  width: "100%",
                  "max-width": "100%",
                  height: "9999px"
                }), void 0 === s && (s = Math.ceil(Math.max(n[0].clientWidth, n.outerWidth(!0)))), i.css("width", s || "").css("max-width", ""), void 0 === a && (a = Math.ceil(Math.max(n[0].clientHeight, n.outerHeight(!0)))), i.css("height", a || ""), r.css("overflow", "auto")), i.removeClass("fancybox-is-hidden");
              }
            })) : i.afterLoad(t), e.attr("src", t.src), r.one("onReset", function () {
              try {
                n(this).find("iframe").hide().unbind().attr("src", "//about:blank");
              } catch (t) {}

              n(this).off("refresh.fb").empty(), t.isLoaded = !1, t.isRevealed = !1;
            });
          },
          setContent: function setContent(t, e) {
            var i;
            this.isClosing || (this.hideLoading(t), t.$content && n.fancybox.stop(t.$content), t.$slide.empty(), (i = e) && i.hasOwnProperty && i instanceof n && e.parent().length ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"), t.$placeholder = n("<div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents()), t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function () {
              n(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (n(this).empty(), t.isLoaded = !1, t.isRevealed = !1);
            }), n(e).appendTo(t.$slide), n(e).is("video,audio") && (n(e).addClass("fancybox-video"), n(e).wrap("<div></div>"), t.contentType = "video", t.opts.width = t.opts.width || n(e).attr("width"), t.opts.height = t.opts.height || n(e).attr("height")), t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), t.$content.siblings().hide(), t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()), t.$content.addClass("fancybox-content"), t.$slide.addClass("fancybox-slide--" + t.contentType), this.afterLoad(t));
          },
          setError: function setError(t) {
            t.hasError = !0, t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"), t.contentType = "html", this.setContent(t, this.translate(t, t.opts.errorTpl)), t.pos === this.currPos && (this.isAnimating = !1);
          },
          showLoading: function showLoading(t) {
            (t = t || this.current) && !t.$spinner && (t.$spinner = n(this.translate(this, this.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"));
          },
          hideLoading: function hideLoading(t) {
            (t = t || this.current) && t.$spinner && (t.$spinner.stop().remove(), delete t.$spinner);
          },
          afterLoad: function afterLoad(t) {
            this.isClosing || (t.isLoading = !1, t.isLoaded = !0, this.trigger("afterLoad", t), this.hideLoading(t), !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = n(this.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function (t) {
              return 2 == t.button && t.preventDefault(), !0;
            }), "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), this.adjustCaption(t), this.adjustLayout(t), t.pos === this.currPos && this.updateCursor(), this.revealContent(t));
          },
          adjustCaption: function adjustCaption(t) {
            var e,
                n = t || this.current,
                i = n.opts.caption,
                o = n.opts.preventCaptionOverlap,
                r = this.$refs.caption,
                s = !1;
            r.toggleClass("fancybox-caption--separate", o), o && i && i.length && (n.pos !== this.currPos ? ((e = r.clone().appendTo(r.parent())).children().eq(0).empty().html(i), s = e.outerHeight(!0), e.empty().remove()) : this.$caption && (s = this.$caption.outerHeight(!0)), n.$slide.css("padding-bottom", s || ""));
          },
          adjustLayout: function adjustLayout(t) {
            var e,
                n,
                i,
                o,
                r = t || this.current;
            r.isLoaded && !0 !== r.opts.disableLayoutFix && (r.$content.css("margin-bottom", ""), r.$content.outerHeight() > r.$slide.height() + .5 && (i = r.$slide[0].style["padding-bottom"], o = r.$slide.css("padding-bottom"), parseFloat(o) > 0 && (e = r.$slide[0].scrollHeight, r.$slide.css("padding-bottom", 0), Math.abs(e - r.$slide[0].scrollHeight) < 1 && (n = o), r.$slide.css("padding-bottom", i))), r.$content.css("margin-bottom", n));
          },
          revealContent: function revealContent(t) {
            var e,
                i,
                o,
                r,
                s = this,
                a = t.$slide,
                l = !1,
                c = !1,
                u = s.isMoved(t),
                d = t.isRevealed;
            return t.isRevealed = !0, e = t.opts[s.firstRun ? "animationEffect" : "transitionEffect"], o = t.opts[s.firstRun ? "animationDuration" : "transitionDuration"], o = parseInt(void 0 === t.forcedDuration ? o : t.forcedDuration, 10), !u && t.pos === s.currPos && o || (e = !1), "zoom" === e && (t.pos === s.currPos && o && "image" === t.type && !t.hasError && (c = s.getThumbPos(t)) ? l = s.getFitPos(t) : e = "fade"), "zoom" === e ? (s.isAnimating = !0, l.scaleX = l.width / c.width, l.scaleY = l.height / c.height, "auto" == (r = t.opts.zoomOpacity) && (r = Math.abs(t.width / t.height - c.width / c.height) > .1), r && (c.opacity = .1, l.opacity = 1), n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), c), f(t.$content), void n.fancybox.animate(t.$content, l, o, function () {
              s.isAnimating = !1, s.complete();
            })) : (s.updateSlide(t), e ? (n.fancybox.stop(a), i = "fancybox-slide--" + (t.pos >= s.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e, a.addClass(i).removeClass("fancybox-slide--current"), t.$content.removeClass("fancybox-is-hidden"), f(a), "image" !== t.type && t.$content.hide().show(0), void n.fancybox.animate(a, "fancybox-slide--current", o, function () {
              a.removeClass(i).css({
                transform: "",
                opacity: ""
              }), t.pos === s.currPos && s.complete();
            }, !0)) : (t.$content.removeClass("fancybox-is-hidden"), d || !u || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"), void (t.pos === s.currPos && s.complete())));
          },
          getThumbPos: function getThumbPos(t) {
            var i,
                o,
                r,
                s,
                a,
                l,
                c = t.$thumb;
            return !(!c || !function (t) {
              var i, o;
              return !(!t || t.ownerDocument !== e) && (n(".fancybox-container").css("pointer-events", "none"), i = {
                x: t.getBoundingClientRect().left + t.offsetWidth / 2,
                y: t.getBoundingClientRect().top + t.offsetHeight / 2
              }, o = e.elementFromPoint(i.x, i.y) === t, n(".fancybox-container").css("pointer-events", ""), o);
            }(c[0])) && (o = n.fancybox.getTranslate(c), r = parseFloat(c.css("border-top-width") || 0), s = parseFloat(c.css("border-right-width") || 0), a = parseFloat(c.css("border-bottom-width") || 0), l = parseFloat(c.css("border-left-width") || 0), i = {
              top: o.top + r,
              left: o.left + l,
              width: o.width - s - l,
              height: o.height - r - a,
              scaleX: 1,
              scaleY: 1
            }, o.width > 0 && o.height > 0 && i);
          },
          complete: function complete() {
            var t,
                e = this,
                i = e.current,
                o = {};
            !e.isMoved() && i.isLoaded && (i.isComplete || (i.isComplete = !0, i.$slide.siblings().trigger("onReset"), e.preload("inline"), f(i.$slide), i.$slide.addClass("fancybox-slide--complete"), n.each(e.slides, function (t, i) {
              i.pos >= e.currPos - 1 && i.pos <= e.currPos + 1 ? o[i.pos] = i : i && (n.fancybox.stop(i.$slide), i.$slide.off().remove());
            }), e.slides = o), e.isAnimating = !1, e.updateCursor(), e.trigger("afterShow"), i.opts.video.autoStart && i.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function () {
              Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), e.next();
            }), i.opts.autoFocus && "html" === i.contentType && ((t = i.$content.find("input[autofocus]:enabled:visible:first")).length ? t.trigger("focus") : e.focus(null, !0)), i.$slide.scrollTop(0).scrollLeft(0));
          },
          preload: function preload(t) {
            var e, n;
            this.group.length < 2 || (n = this.slides[this.currPos + 1], (e = this.slides[this.currPos - 1]) && e.type === t && this.loadSlide(e), n && n.type === t && this.loadSlide(n));
          },
          focus: function focus(t, i) {
            var o,
                r,
                s = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
            this.isClosing || ((o = (o = !t && this.current && this.current.isComplete ? this.current.$slide.find("*:visible" + (i ? ":not(.fancybox-close-small)" : "")) : this.$refs.container.find("*:visible")).filter(s).filter(function () {
              return "hidden" !== n(this).css("visibility") && !n(this).hasClass("disabled");
            })).length ? (r = o.index(e.activeElement), t && t.shiftKey ? (r < 0 || 0 == r) && (t.preventDefault(), o.eq(o.length - 1).trigger("focus")) : (r < 0 || r == o.length - 1) && (t && t.preventDefault(), o.eq(0).trigger("focus"))) : this.$refs.container.trigger("focus"));
          },
          activate: function activate() {
            var t = this;
            n(".fancybox-container").each(function () {
              var e = n(this).data("FancyBox");
              e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1);
            }), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents();
          },
          close: function close(t, e) {
            var i,
                o,
                r,
                s,
                a,
                l,
                c,
                d = this,
                p = d.current,
                h = function h() {
              d.cleanUp(t);
            };

            return !d.isClosing && (d.isClosing = !0, !1 === d.trigger("beforeClose", t) ? (d.isClosing = !1, u(function () {
              d.update();
            }), !1) : (d.removeEvents(), r = p.$content, i = p.opts.animationEffect, o = n.isNumeric(e) ? e : i ? p.opts.animationDuration : 0, p.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== t ? n.fancybox.stop(p.$slide) : i = !1, p.$slide.siblings().trigger("onReset").remove(), o && d.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", o + "ms"), d.hideLoading(p), d.hideControls(!0), d.updateCursor(), "zoom" !== i || r && o && "image" === p.type && !d.isMoved() && !p.hasError && (c = d.getThumbPos(p)) || (i = "fade"), "zoom" === i ? (n.fancybox.stop(r), l = {
              top: (s = n.fancybox.getTranslate(r)).top,
              left: s.left,
              scaleX: s.width / c.width,
              scaleY: s.height / c.height,
              width: c.width,
              height: c.height
            }, "auto" == (a = p.opts.zoomOpacity) && (a = Math.abs(p.width / p.height - c.width / c.height) > .1), a && (c.opacity = 0), n.fancybox.setTranslate(r, l), f(r), n.fancybox.animate(r, c, o, h), !0) : (i && o ? n.fancybox.animate(p.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + i, o, h) : !0 === t ? setTimeout(h, o) : h(), !0)));
          },
          cleanUp: function cleanUp(e) {
            var i,
                o,
                r,
                s = this.current.opts.$orig;
            this.current.$slide.trigger("onReset"), this.$refs.container.empty().remove(), this.trigger("afterClose", e), this.current.opts.backFocus && (s && s.length && s.is(":visible") || (s = this.$trigger), s && s.length && (o = t.scrollX, r = t.scrollY, s.trigger("focus"), n("html, body").scrollTop(r).scrollLeft(o))), this.current = null, (i = n.fancybox.getInstance()) ? i.activate() : (n("body").removeClass("fancybox-active compensate-for-scrollbar"), n("#fancybox-style-noscroll").remove());
          },
          trigger: function trigger(t, e) {
            var i,
                o = Array.prototype.slice.call(arguments, 1),
                r = this,
                s = e && e.opts ? e : r.current;
            if (s ? o.unshift(s) : s = r, o.unshift(r), n.isFunction(s.opts[t]) && (i = s.opts[t].apply(s, o)), !1 === i) return i;
            "afterClose" !== t && r.$refs ? r.$refs.container.trigger(t + ".fb", o) : l.trigger(t + ".fb", o);
          },
          updateControls: function updateControls() {
            var t = this.current,
                i = t.index,
                o = this.$refs.container,
                r = this.$refs.caption,
                s = t.opts.caption;
            t.$slide.trigger("refresh"), s && s.length ? (this.$caption = r, r.children().eq(0).html(s)) : this.$caption = null, this.hasHiddenControls || this.isIdle || this.showControls(), o.find("[data-fancybox-count]").html(this.group.length), o.find("[data-fancybox-index]").html(i + 1), o.find("[data-fancybox-prev]").prop("disabled", !t.opts.loop && i <= 0), o.find("[data-fancybox-next]").prop("disabled", !t.opts.loop && i >= this.group.length - 1), "image" === t.type ? o.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", t.opts.image.src || t.src).show() : t.opts.toolbar && o.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), n(e.activeElement).is(":hidden,[disabled]") && this.$refs.container.trigger("focus");
          },
          hideControls: function hideControls(t) {
            var e = ["infobar", "toolbar", "nav"];
            !t && this.current.opts.preventCaptionOverlap || e.push("caption"), this.$refs.container.removeClass(e.map(function (t) {
              return "fancybox-show-" + t;
            }).join(" ")), this.hasHiddenControls = !0;
          },
          showControls: function showControls() {
            var t = this.current ? this.current.opts : this.opts,
                e = this.$refs.container;
            this.hasHiddenControls = !1, this.idleSecondsCounter = 0, e.toggleClass("fancybox-show-toolbar", !(!t.toolbar || !t.buttons)).toggleClass("fancybox-show-infobar", !!(t.infobar && this.group.length > 1)).toggleClass("fancybox-show-caption", !!this.$caption).toggleClass("fancybox-show-nav", !!(t.arrows && this.group.length > 1)).toggleClass("fancybox-is-modal", !!t.modal);
          },
          toggleControls: function toggleControls() {
            this.hasHiddenControls ? this.showControls() : this.hideControls();
          }
        }), n.fancybox = {
          version: "3.5.7",
          defaults: s,
          getInstance: function getInstance(t) {
            var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                i = Array.prototype.slice.call(arguments, 1);
            return e instanceof g && ("string" === n.type(t) ? e[t].apply(e, i) : "function" === n.type(t) && t.apply(e, i), e);
          },
          open: function open(t, e, n) {
            return new g(t, e, n);
          },
          close: function close(t) {
            var e = this.getInstance();
            e && (e.close(), !0 === t && this.close(t));
          },
          destroy: function destroy() {
            this.close(!0), l.add("body").off("click.fb-start", "**");
          },
          isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
          use3d: (o = e.createElement("div"), t.getComputedStyle && t.getComputedStyle(o) && t.getComputedStyle(o).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)),
          getTranslate: function getTranslate(t) {
            var e;
            return !(!t || !t.length) && {
              top: (e = t[0].getBoundingClientRect()).top || 0,
              left: e.left || 0,
              width: e.width,
              height: e.height,
              opacity: parseFloat(t.css("opacity"))
            };
          },
          setTranslate: function setTranslate(t, e) {
            var n = "",
                i = {};
            if (t && e) return void 0 === e.left && void 0 === e.top || (n = (void 0 === e.left ? t.position().left : e.left) + "px, " + (void 0 === e.top ? t.position().top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), void 0 !== e.scaleX && void 0 !== e.scaleY ? n += " scale(" + e.scaleX + ", " + e.scaleY + ")" : void 0 !== e.scaleX && (n += " scaleX(" + e.scaleX + ")"), n.length && (i.transform = n), void 0 !== e.opacity && (i.opacity = e.opacity), void 0 !== e.width && (i.width = e.width), void 0 !== e.height && (i.height = e.height), t.css(i);
          },
          animate: function animate(t, e, i, o, r) {
            var s,
                a = this;
            n.isFunction(i) && (o = i, i = null), a.stop(t), s = a.getTranslate(t), t.on(p, function (l) {
              (!l || !l.originalEvent || t.is(l.originalEvent.target) && "z-index" != l.originalEvent.propertyName) && (a.stop(t), n.isNumeric(i) && t.css("transition-duration", ""), n.isPlainObject(e) ? void 0 !== e.scaleX && void 0 !== e.scaleY && a.setTranslate(t, {
                top: e.top,
                left: e.left,
                width: s.width * e.scaleX,
                height: s.height * e.scaleY,
                scaleX: 1,
                scaleY: 1
              }) : !0 !== r && t.removeClass(e), n.isFunction(o) && o(l));
            }), n.isNumeric(i) && t.css("transition-duration", i + "ms"), n.isPlainObject(e) ? (void 0 !== e.scaleX && void 0 !== e.scaleY && (delete e.width, delete e.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), n.fancybox.setTranslate(t, e)) : t.addClass(e), t.data("timer", setTimeout(function () {
              t.trigger(p);
            }, i + 33));
          },
          stop: function stop(t, e) {
            t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(p), t.off(p).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"));
          }
        }, n.fn.fancybox = function (t) {
          var e;
          return (e = (t = t || {}).selector || !1) ? n("body").off("click.fb-start", e).on("click.fb-start", e, {
            options: t
          }, v) : this.off("click.fb-start").on("click.fb-start", {
            items: this,
            options: t
          }, v), this;
        }, l.on("click.fb-start", "[data-fancybox]", v), l.on("click.fb-start", "[data-fancybox-trigger]", function (t) {
          n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]').eq(n(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
            $trigger: n(this)
          });
        }), r = null, l.on("mousedown mouseup focus blur", ".fancybox-button", function (t) {
          switch (t.type) {
            case "mousedown":
              r = n(this);
              break;

            case "mouseup":
              r = null;
              break;

            case "focusin":
              n(".fancybox-button").removeClass("fancybox-focus"), n(this).is(r) || n(this).is("[disabled]") || n(this).addClass("fancybox-focus");
              break;

            case "focusout":
              n(".fancybox-button").removeClass("fancybox-focus");
          }
        });
      }

      function v(t, e) {
        var i,
            o,
            r,
            s = [],
            a = 0;
        t && t.isDefaultPrevented() || (t.preventDefault(), e = e || {}, t && t.data && (e = h(t.data.options, e)), i = e.$target || n(t.currentTarget).trigger("blur"), (r = n.fancybox.getInstance()) && r.$trigger && r.$trigger.is(i) || (s = e.selector ? n(e.selector) : (o = i.attr("data-fancybox") || "") ? (s = t.data ? t.data.items : []).length ? s.filter('[data-fancybox="' + o + '"]') : n('[data-fancybox="' + o + '"]') : [i], (a = n(s).index(i)) < 0 && (a = 0), (r = n.fancybox.open(s, e, a)).$trigger = i));
      }
    }(window, document, t), function (t) {
      "use strict";

      var e = {
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
          url: function url(t) {
            return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed");
          }
        },
        gmap_search: {
          matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
          type: "iframe",
          url: function url(t) {
            return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
          }
        }
      },
          n = function n(e, _n3, i) {
        if (e) return i = i || "", "object" === t.type(i) && (i = t.param(i, !0)), t.each(_n3, function (t, n) {
          e = e.replace("$" + t, n || "");
        }), i.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + i), e;
      };

      t(document).on("objectNeedsType.fb", function (i, o, r) {
        var s,
            a,
            l,
            c,
            u,
            d,
            p,
            f = r.src || "",
            h = !1;
        s = t.extend(!0, {}, e, r.opts.media), t.each(s, function (e, i) {
          if (l = f.match(i.matcher)) {
            if (h = i.type, p = e, d = {}, i.paramPlace && l[i.paramPlace]) {
              "?" == (u = l[i.paramPlace])[0] && (u = u.substring(1)), u = u.split("&");

              for (var o = 0; o < u.length; ++o) {
                var s = u[o].split("=", 2);
                2 == s.length && (d[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")));
              }
            }

            return c = t.extend(!0, {}, i.params, r.opts[e], d), f = "function" === t.type(i.url) ? i.url.call(this, l, c, r) : n(i.url, l, c), a = "function" === t.type(i.thumb) ? i.thumb.call(this, l, c, r) : n(i.thumb, l), "youtube" === e ? f = f.replace(/&t=((\d+)m)?(\d+)s/, function (t, e, n, i) {
              return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(i, 10));
            }) : "vimeo" === e && (f = f.replace("&%23", "#")), !1;
          }
        }), h ? (r.opts.thumb || r.opts.$thumb && r.opts.$thumb.length || (r.opts.thumb = a), "iframe" === h && (r.opts = t.extend(!0, r.opts, {
          iframe: {
            preload: !1,
            attr: {
              scrolling: "no"
            }
          }
        })), t.extend(r, {
          type: h,
          src: f,
          origSrc: r.src,
          contentSource: p,
          contentType: "image" === h ? "image" : "gmap_place" == p || "gmap_search" == p ? "map" : "video"
        })) : f && (r.type = r.opts.defaultType);
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
        load: function load(t) {
          var e,
              n = this;
          this[t].loaded ? setTimeout(function () {
            n.done(t);
          }) : this[t].loading || (this[t].loading = !0, (e = document.createElement("script")).type = "text/javascript", e.src = this[t].src, "youtube" === t ? window.onYouTubeIframeAPIReady = function () {
            n[t].loaded = !0, n.done(t);
          } : e.onload = function () {
            n[t].loaded = !0, n.done(t);
          }, document.body.appendChild(e));
        },
        done: function done(e) {
          var n, i;
          "youtube" === e && delete window.onYouTubeIframeAPIReady, (n = t.fancybox.getInstance()) && (i = n.current.$content.find("iframe"), "youtube" === e && void 0 !== YT && YT ? new YT.Player(i.attr("id"), {
            events: {
              onStateChange: function onStateChange(t) {
                0 == t.data && n.next();
              }
            }
          }) : "vimeo" === e && void 0 !== Vimeo && Vimeo && new Vimeo.Player(i).on("ended", function () {
            n.next();
          }));
        }
      };
      t(document).on({
        "afterShow.fb": function afterShowFb(t, e, n) {
          e.group.length > 1 && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && i.load(n.contentSource);
        }
      });
    }(t), function (t, e, n) {
      "use strict";

      var i = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
        return t.setTimeout(e, 1e3 / 60);
      },
          o = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function (e) {
        t.clearTimeout(e);
      },
          r = function r(e) {
        var n = [];

        for (var i in e = (e = e.originalEvent || e || t.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e]) {
          e[i].pageX ? n.push({
            x: e[i].pageX,
            y: e[i].pageY
          }) : e[i].clientX && n.push({
            x: e[i].clientX,
            y: e[i].clientY
          });
        }

        return n;
      },
          s = function s(t, e, n) {
        return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0;
      },
          a = function a(t) {
        if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || n.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;

        for (var e = 0, i = t[0].attributes, o = i.length; e < o; e++) {
          if ("data-fancybox-" === i[e].nodeName.substr(0, 14)) return !0;
        }

        return !1;
      },
          l = function l(e) {
        for (var n, i, o, r, s, a = !1; n = e.get(0), i = void 0, o = void 0, r = void 0, s = void 0, i = t.getComputedStyle(n)["overflow-y"], o = t.getComputedStyle(n)["overflow-x"], r = ("scroll" === i || "auto" === i) && n.scrollHeight > n.clientHeight, s = ("scroll" === o || "auto" === o) && n.scrollWidth > n.clientWidth, !(a = r || s) && (e = e.parent()).length && !e.hasClass("fancybox-stage") && !e.is("body");) {
          ;
        }

        return a;
      },
          c = function c(t) {
        this.instance = t, this.$bg = t.$refs.bg, this.$stage = t.$refs.stage, this.$container = t.$refs.container, this.destroy(), this.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(this, "ontouchstart"));
      };

      c.prototype.destroy = function () {
        this.$container.off(".fb.touch"), n(e).off(".fb.touch"), this.requestId && (o(this.requestId), this.requestId = null), this.tapped && (clearTimeout(this.tapped), this.tapped = null);
      }, c.prototype.ontouchstart = function (i) {
        var o = n(i.target),
            c = this.instance,
            u = c.current,
            d = u.$slide,
            p = u.$content,
            f = "touchstart" == i.type;

        if (f && this.$container.off("mousedown.fb.touch"), (!i.originalEvent || 2 != i.originalEvent.button) && d.length && o.length && !a(o) && !a(o.parent()) && (o.is("img") || !(i.originalEvent.clientX > o[0].clientWidth + o.offset().left))) {
          if (!u || c.isAnimating || u.$slide.hasClass("fancybox-animated")) return i.stopPropagation(), void i.preventDefault();
          this.realPoints = this.startPoints = r(i), this.startPoints.length && (u.touch && i.stopPropagation(), this.startEvent = i, this.canTap = !0, this.$target = o, this.$content = p, this.opts = u.opts.touch, this.isPanning = !1, this.isSwiping = !1, this.isZooming = !1, this.isScrolling = !1, this.canPan = c.canPan(), this.startTime = new Date().getTime(), this.distanceX = this.distanceY = this.distance = 0, this.canvasWidth = Math.round(d[0].clientWidth), this.canvasHeight = Math.round(d[0].clientHeight), this.contentLastPos = null, this.contentStartPos = n.fancybox.getTranslate(this.$content) || {
            top: 0,
            left: 0
          }, this.sliderStartPos = n.fancybox.getTranslate(d), this.stagePos = n.fancybox.getTranslate(c.$refs.stage), this.sliderStartPos.top -= this.stagePos.top, this.sliderStartPos.left -= this.stagePos.left, this.contentStartPos.top -= this.stagePos.top, this.contentStartPos.left -= this.stagePos.left, n(e).off(".fb.touch").on(f ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(this, "ontouchend")).on(f ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(this, "ontouchmove")), n.fancybox.isMobile && e.addEventListener("scroll", this.onscroll, !0), ((this.opts || this.canPan) && (o.is(this.$stage) || this.$stage.find(o).length) || (o.is(".fancybox-image") && i.preventDefault(), n.fancybox.isMobile && o.parents(".fancybox-caption").length)) && (this.isScrollable = l(o) || l(o.parent()), n.fancybox.isMobile && this.isScrollable || i.preventDefault(), (1 === this.startPoints.length || u.hasError) && (this.canPan ? (n.fancybox.stop(this.$content), this.isPanning = !0) : this.isSwiping = !0, this.$container.addClass("fancybox-is-grabbing")), 2 === this.startPoints.length && "image" === u.type && (u.isLoaded || u.$ghost) && (this.canTap = !1, this.isSwiping = !1, this.isPanning = !1, this.isZooming = !0, n.fancybox.stop(this.$content), this.centerPointStartX = .5 * (this.startPoints[0].x + this.startPoints[1].x) - n(t).scrollLeft(), this.centerPointStartY = .5 * (this.startPoints[0].y + this.startPoints[1].y) - n(t).scrollTop(), this.percentageOfImageAtPinchPointX = (this.centerPointStartX - this.contentStartPos.left) / this.contentStartPos.width, this.percentageOfImageAtPinchPointY = (this.centerPointStartY - this.contentStartPos.top) / this.contentStartPos.height, this.startDistanceBetweenFingers = s(this.startPoints[0], this.startPoints[1]))));
        }
      }, c.prototype.onscroll = function (t) {
        this.isScrolling = !0, e.removeEventListener("scroll", this.onscroll, !0);
      }, c.prototype.ontouchmove = function (t) {
        void 0 === t.originalEvent.buttons || 0 !== t.originalEvent.buttons ? this.isScrolling ? this.canTap = !1 : (this.newPoints = r(t), (this.opts || this.canPan) && this.newPoints.length && this.newPoints.length && (this.isSwiping && !0 === this.isSwiping || t.preventDefault(), this.distanceX = s(this.newPoints[0], this.startPoints[0], "x"), this.distanceY = s(this.newPoints[0], this.startPoints[0], "y"), this.distance = s(this.newPoints[0], this.startPoints[0]), this.distance > 0 && (this.isSwiping ? this.onSwipe(t) : this.isPanning ? this.onPan() : this.isZooming && this.onZoom()))) : this.ontouchend(t);
      }, c.prototype.onSwipe = function (e) {
        var r,
            s = this,
            a = s.instance,
            l = s.isSwiping,
            c = s.sliderStartPos.left || 0;
        if (!0 !== l) "x" == l && (s.distanceX > 0 && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? c += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? c -= Math.pow(-s.distanceX, .8) : c += s.distanceX), s.sliderLastPos = {
          top: "x" == l ? 0 : s.sliderStartPos.top + s.distanceY,
          left: c
        }, s.requestId && (o(s.requestId), s.requestId = null), s.requestId = i(function () {
          s.sliderLastPos && (n.each(s.instance.slides, function (t, e) {
            var i = e.pos - s.instance.currPos;
            n.fancybox.setTranslate(e.$slide, {
              top: s.sliderLastPos.top,
              left: s.sliderLastPos.left + i * s.canvasWidth + i * e.opts.gutter
            });
          }), s.$container.addClass("fancybox-is-sliding"));
        });else if (Math.abs(s.distance) > 10) {
          if (s.canTap = !1, a.group.length < 2 && s.opts.vertical ? s.isSwiping = "y" : a.isDragging || !1 === s.opts.vertical || "auto" === s.opts.vertical && n(t).width() > 800 ? s.isSwiping = "x" : (r = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI), s.isSwiping = r > 45 && r < 135 ? "y" : "x"), "y" === s.isSwiping && n.fancybox.isMobile && s.isScrollable) return void (s.isScrolling = !0);
          a.isDragging = s.isSwiping, s.startPoints = s.newPoints, n.each(a.slides, function (t, e) {
            var i, o;
            n.fancybox.stop(e.$slide), i = n.fancybox.getTranslate(e.$slide), o = n.fancybox.getTranslate(a.$refs.stage), e.$slide.css({
              transform: "",
              opacity: "",
              "transition-duration": ""
            }).removeClass("fancybox-animated").removeClass(function (t, e) {
              return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
            }), e.pos === a.current.pos && (s.sliderStartPos.top = i.top - o.top, s.sliderStartPos.left = i.left - o.left), n.fancybox.setTranslate(e.$slide, {
              top: i.top - o.top,
              left: i.left - o.left
            });
          }), a.SlideShow && a.SlideShow.isActive && a.SlideShow.stop();
        }
      }, c.prototype.onPan = function () {
        var t = this;
        s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5) ? t.startPoints = t.newPoints : (t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && o(t.requestId), t.requestId = i(function () {
          n.fancybox.setTranslate(t.$content, t.contentLastPos);
        }));
      }, c.prototype.limitMovement = function () {
        var t,
            e,
            n,
            i,
            o,
            r,
            s = this.canvasWidth,
            a = this.canvasHeight,
            l = this.distanceX,
            c = this.distanceY,
            u = this.contentStartPos,
            d = u.left,
            p = u.top,
            f = u.width,
            h = u.height;
        return o = f > s ? d + l : d, r = p + c, t = Math.max(0, .5 * s - .5 * f), e = Math.max(0, .5 * a - .5 * h), n = Math.min(s - f, .5 * s - .5 * f), i = Math.min(a - h, .5 * a - .5 * h), l > 0 && o > t && (o = t - 1 + Math.pow(-t + d + l, .8) || 0), l < 0 && o < n && (o = n + 1 - Math.pow(n - d - l, .8) || 0), c > 0 && r > e && (r = e - 1 + Math.pow(-e + p + c, .8) || 0), c < 0 && r < i && (r = i + 1 - Math.pow(i - p - c, .8) || 0), {
          top: r,
          left: o
        };
      }, c.prototype.limitPosition = function (t, e, n, i) {
        var o = this.canvasWidth,
            r = this.canvasHeight;
        return t = n > o ? (t = t > 0 ? 0 : t) < o - n ? o - n : t : Math.max(0, o / 2 - n / 2), {
          top: e = i > r ? (e = e > 0 ? 0 : e) < r - i ? r - i : e : Math.max(0, r / 2 - i / 2),
          left: t
        };
      }, c.prototype.onZoom = function () {
        var e = this,
            r = e.contentStartPos,
            a = r.width,
            l = r.height,
            c = r.left,
            u = r.top,
            d = s(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers,
            p = Math.floor(a * d),
            f = Math.floor(l * d),
            h = (a - p) * e.percentageOfImageAtPinchPointX,
            g = (l - f) * e.percentageOfImageAtPinchPointY,
            v = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
            m = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
            y = v - e.centerPointStartX,
            b = {
          top: u + (g + (m - e.centerPointStartY)),
          left: c + (h + y),
          scaleX: d,
          scaleY: d
        };
        e.canTap = !1, e.newWidth = p, e.newHeight = f, e.contentLastPos = b, e.requestId && o(e.requestId), e.requestId = i(function () {
          n.fancybox.setTranslate(e.$content, e.contentLastPos);
        });
      }, c.prototype.ontouchend = function (t) {
        var i = this.isSwiping,
            s = this.isPanning,
            a = this.isZooming,
            l = this.isScrolling;
        if (this.endPoints = r(t), this.dMs = Math.max(new Date().getTime() - this.startTime, 1), this.$container.removeClass("fancybox-is-grabbing"), n(e).off(".fb.touch"), e.removeEventListener("scroll", this.onscroll, !0), this.requestId && (o(this.requestId), this.requestId = null), this.isSwiping = !1, this.isPanning = !1, this.isZooming = !1, this.isScrolling = !1, this.instance.isDragging = !1, this.canTap) return this.onTap(t);
        this.speed = 100, this.velocityX = this.distanceX / this.dMs * .5, this.velocityY = this.distanceY / this.dMs * .5, s ? this.endPanning() : a ? this.endZooming() : this.endSwiping(i, l);
      }, c.prototype.endSwiping = function (t, e) {
        var i = !1,
            o = this.instance.group.length,
            r = Math.abs(this.distanceX),
            s = "x" == t && o > 1 && (this.dMs > 130 && r > 10 || r > 50);
        this.sliderLastPos = null, "y" == t && !e && Math.abs(this.distanceY) > 50 ? (n.fancybox.animate(this.instance.current.$slide, {
          top: this.sliderStartPos.top + this.distanceY + 150 * this.velocityY,
          opacity: 0
        }, 200), i = this.instance.close(!0, 250)) : s && this.distanceX > 0 ? i = this.instance.previous(300) : s && this.distanceX < 0 && (i = this.instance.next(300)), !1 !== i || "x" != t && "y" != t || this.instance.centerSlide(200), this.$container.removeClass("fancybox-is-sliding");
      }, c.prototype.endPanning = function () {
        var t, e, i;
        this.contentLastPos && (!1 === this.opts.momentum || this.dMs > 350 ? (t = this.contentLastPos.left, e = this.contentLastPos.top) : (t = this.contentLastPos.left + 500 * this.velocityX, e = this.contentLastPos.top + 500 * this.velocityY), (i = this.limitPosition(t, e, this.contentStartPos.width, this.contentStartPos.height)).width = this.contentStartPos.width, i.height = this.contentStartPos.height, n.fancybox.animate(this.$content, i, 366));
      }, c.prototype.endZooming = function () {
        var t,
            e,
            i,
            o,
            r = this.instance.current,
            s = this.newWidth,
            a = this.newHeight;
        this.contentLastPos && (t = this.contentLastPos.left, o = {
          top: e = this.contentLastPos.top,
          left: t,
          width: s,
          height: a,
          scaleX: 1,
          scaleY: 1
        }, n.fancybox.setTranslate(this.$content, o), s < this.canvasWidth && a < this.canvasHeight ? this.instance.scaleToFit(150) : s > r.width || a > r.height ? this.instance.scaleToActual(this.centerPointStartX, this.centerPointStartY, 150) : (i = this.limitPosition(t, e, s, a), n.fancybox.animate(this.$content, i, 150)));
      }, c.prototype.onTap = function (e) {
        var i,
            o = this,
            s = n(e.target),
            a = o.instance,
            l = a.current,
            c = e && r(e) || o.startPoints,
            u = c[0] ? c[0].x - n(t).scrollLeft() - o.stagePos.left : 0,
            d = c[0] ? c[0].y - n(t).scrollTop() - o.stagePos.top : 0,
            p = function p(t) {
          var i = l.opts[t];
          if (n.isFunction(i) && (i = i.apply(a, [l, e])), i) switch (i) {
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
              "image" == l.type && (l.isLoaded || l.$ghost) && (a.canPan() ? a.scaleToFit() : a.isScaledDown() ? a.scaleToActual(u, d) : a.group.length < 2 && a.close(o.startEvent));
          }
        };

        if ((!e.originalEvent || 2 != e.originalEvent.button) && (s.is("img") || !(u > s[0].clientWidth + s.offset().left))) {
          if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) i = "Outside";else if (s.is(".fancybox-slide")) i = "Slide";else {
            if (!a.current.$content || !a.current.$content.find(s).addBack().filter(s).length) return;
            i = "Content";
          }

          if (o.tapped) {
            if (clearTimeout(o.tapped), o.tapped = null, Math.abs(u - o.tapX) > 50 || Math.abs(d - o.tapY) > 50) return this;
            p("dblclick" + i);
          } else o.tapX = u, o.tapY = d, l.opts["dblclick" + i] && l.opts["dblclick" + i] !== l.opts["click" + i] ? o.tapped = setTimeout(function () {
            o.tapped = null, a.isAnimating || p("click" + i);
          }, 500) : p("click" + i);

          return this;
        }
      }, n(e).on("onActivate.fb", function (t, e) {
        e && !e.Guestures && (e.Guestures = new c(e));
      }).on("beforeClose.fb", function (t, e) {
        e && e.Guestures && e.Guestures.destroy();
      });
    }(window, document, t), function (t, e) {
      "use strict";

      e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
          slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
        },
        slideShow: {
          autoStart: !1,
          speed: 3e3,
          progress: !0
        }
      });

      var n = function n(t) {
        this.instance = t, this.init();
      };

      e.extend(n.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function init() {
          var t = this,
              n = t.instance,
              i = n.group[n.currIndex].opts.slideShow;
          t.$button = n.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
            t.toggle();
          }), n.group.length < 2 || !i ? t.$button.hide() : i.progress && (t.$progress = e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner));
        },
        set: function set(t) {
          var n = this.instance,
              i = n.current;
          i && (!0 === t || i.opts.loop || n.currIndex < n.group.length - 1) ? this.isActive && "video" !== i.contentType && (this.$progress && e.fancybox.animate(this.$progress.show(), {
            scaleX: 1
          }, i.opts.slideShow.speed), this.timer = setTimeout(function () {
            n.current.opts.loop || n.current.index != n.group.length - 1 ? n.next() : n.jumpTo(0);
          }, i.opts.slideShow.speed)) : (this.stop(), n.idleSecondsCounter = 0, n.showControls());
        },
        clear: function clear() {
          clearTimeout(this.timer), this.timer = null, this.$progress && this.$progress.removeAttr("style").hide();
        },
        start: function start() {
          var t = this.instance.current;
          t && (this.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), this.isActive = !0, t.isComplete && this.set(!0), this.instance.trigger("onSlideShowChange", !0));
        },
        stop: function stop() {
          var t = this.instance.current;
          this.clear(), this.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), this.isActive = !1, this.instance.trigger("onSlideShowChange", !1), this.$progress && this.$progress.removeAttr("style").hide();
        },
        toggle: function toggle() {
          this.isActive ? this.stop() : this.start();
        }
      }), e(t).on({
        "onInit.fb": function onInitFb(t, e) {
          e && !e.SlideShow && (e.SlideShow = new n(e));
        },
        "beforeShow.fb": function beforeShowFb(t, e, n, i) {
          var o = e && e.SlideShow;
          i ? o && n.opts.slideShow.autoStart && o.start() : o && o.isActive && o.clear();
        },
        "afterShow.fb": function afterShowFb(t, e, n) {
          var i = e && e.SlideShow;
          i && i.isActive && i.set();
        },
        "afterKeydown.fb": function afterKeydownFb(n, i, o, r, s) {
          var a = i && i.SlideShow;
          !a || !o.opts.slideShow || 80 !== s && 32 !== s || e(t.activeElement).is("button,a,input") || (r.preventDefault(), a.toggle());
        },
        "beforeClose.fb onDeactivate.fb": function beforeCloseFbOnDeactivateFb(t, e) {
          var n = e && e.SlideShow;
          n && n.stop();
        }
      }), e(t).on("visibilitychange", function () {
        var n = e.fancybox.getInstance(),
            i = n && n.SlideShow;
        i && i.isActive && (t.hidden ? i.clear() : i.set());
      });
    }(document, t), function (t, e) {
      "use strict";

      var n = function () {
        for (var e = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], n = {}, i = 0; i < e.length; i++) {
          var o = e[i];

          if (o && o[1] in t) {
            for (var r = 0; r < o.length; r++) {
              n[e[0][r]] = o[r];
            }

            return n;
          }
        }

        return !1;
      }();

      if (n) {
        var i = {
          request: function request(e) {
            (e = e || t.documentElement)[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);
          },
          exit: function exit() {
            t[n.exitFullscreen]();
          },
          toggle: function toggle(e) {
            e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e);
          },
          isFullscreen: function isFullscreen() {
            return Boolean(t[n.fullscreenElement]);
          },
          enabled: function enabled() {
            return Boolean(t[n.fullscreenEnabled]);
          }
        };
        e.extend(!0, e.fancybox.defaults, {
          btnTpl: {
            fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
          },
          fullScreen: {
            autoStart: !1
          }
        }), e(t).on(n.fullscreenchange, function () {
          var t = i.isFullscreen(),
              n = e.fancybox.getInstance();
          n && (n.current && "image" === n.current.type && n.isAnimating && (n.isAnimating = !1, n.update(!0, !0, 0), n.isComplete || n.complete()), n.trigger("onFullscreenChange", t), n.$refs.container.toggleClass("fancybox-is-fullscreen", t), n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t));
        });
      }

      e(t).on({
        "onInit.fb": function onInitFb(t, e) {
          n ? e && e.group[e.currIndex].opts.fullScreen ? (e.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (t) {
            t.stopPropagation(), t.preventDefault(), i.toggle();
          }), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && i.request(), e.FullScreen = i) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide() : e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
        },
        "afterKeydown.fb": function afterKeydownFb(t, e, n, i, o) {
          e && e.FullScreen && 70 === o && (i.preventDefault(), e.FullScreen.toggle());
        },
        "beforeClose.fb": function beforeCloseFb(t, e) {
          e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && i.exit();
        }
      });
    }(document, t), function (t, e) {
      "use strict";

      var n = "fancybox-thumbs";
      e.fancybox.defaults = e.extend(!0, {
        btnTpl: {
          thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
        },
        thumbs: {
          autoStart: !1,
          hideOnClose: !0,
          parentEl: ".fancybox-container",
          axis: "y"
        }
      }, e.fancybox.defaults);

      var i = function i(t) {
        this.init(t);
      };

      e.extend(i.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function init(t) {
          var e = this,
              n = t.group,
              i = 0;
          e.instance = t, e.opts = n[t.currIndex].opts.thumbs, t.Thumbs = e, e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]");

          for (var o = 0, r = n.length; o < r && (n[o].thumb && i++, !(i > 1)); o++) {
            ;
          }

          i > 1 && e.opts ? (e.$button.removeAttr("style").on("click", function () {
            e.toggle();
          }), e.isActive = !0) : e.$button.hide();
        },
        create: function create() {
          var t,
              i = this.instance,
              o = this.opts.parentEl,
              r = [];
          this.$grid || (this.$grid = e('<div class="' + n + " " + n + "-" + this.opts.axis + '"></div>').appendTo(i.$refs.container.find(o).addBack().filter(o)), this.$grid.on("click", "a", function () {
            i.jumpTo(e(this).attr("data-index"));
          })), this.$list || (this.$list = e('<div class="' + n + '__list">').appendTo(this.$grid)), e.each(i.group, function (e, n) {
            (t = n.thumb) || "image" !== n.type || (t = n.src), r.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (t && t.length ? ' style="background-image:url(' + t + ')"' : 'class="fancybox-thumbs-missing"') + "></a>");
          }), this.$list[0].innerHTML = r.join(""), "x" === this.opts.axis && this.$list.width(parseInt(this.$grid.css("padding-right"), 10) + i.group.length * this.$list.children().eq(0).outerWidth(!0));
        },
        focus: function focus(t) {
          var e,
              n,
              i = this.$list,
              o = this.$grid;
          this.instance.current && (n = (e = i.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + this.instance.current.index + '"]').addClass("fancybox-thumbs-active")).position(), "y" === this.opts.axis && (n.top < 0 || n.top > i.height() - e.outerHeight()) ? i.stop().animate({
            scrollTop: i.scrollTop() + n.top
          }, t) : "x" === this.opts.axis && (n.left < o.scrollLeft() || n.left > o.scrollLeft() + (o.width() - e.outerWidth())) && i.parent().stop().animate({
            scrollLeft: n.left
          }, t));
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
      }), e(t).on({
        "onInit.fb": function onInitFb(t, e) {
          var n;
          e && !e.Thumbs && (n = new i(e)).isActive && !0 === n.opts.autoStart && n.show();
        },
        "beforeShow.fb": function beforeShowFb(t, e, n, i) {
          var o = e && e.Thumbs;
          o && o.isVisible && o.focus(i ? 0 : 250);
        },
        "afterKeydown.fb": function afterKeydownFb(t, e, n, i, o) {
          var r = e && e.Thumbs;
          r && r.isActive && 71 === o && (i.preventDefault(), r.toggle());
        },
        "beforeClose.fb": function beforeCloseFb(t, e) {
          var n = e && e.Thumbs;
          n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide();
        }
      });
    }(document, t), function (t, e) {
      "use strict";

      e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
          share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
        },
        share: {
          url: function url(t, e) {
            return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location;
          },
          tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
        }
      }), e(t).on("click", "[data-fancybox-share]", function () {
        var t,
            n,
            i,
            o,
            r = e.fancybox.getInstance(),
            s = r.current || null;
        s && ("function" === e.type(s.opts.share.url) && (t = s.opts.share.url.apply(s, [r, s])), n = s.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === s.type ? encodeURIComponent(s.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, (i = t, o = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
          "/": "&#x2F;",
          "`": "&#x60;",
          "=": "&#x3D;"
        }, String(i).replace(/[&<>"'`=\/]/g, function (t) {
          return o[t];
        }))).replace(/\{\{descr\}\}/g, r.$caption ? encodeURIComponent(r.$caption.text()) : ""), e.fancybox.open({
          src: r.translate(r, n),
          type: "html",
          opts: {
            touch: !1,
            animationEffect: !1,
            afterLoad: function afterLoad(t, e) {
              r.$refs.container.one("beforeClose.fb", function () {
                t.close(null, 0);
              }), e.$content.find(".fancybox-share__button").click(function () {
                return window.open(this.href, "Share", "width=550, height=450"), !1;
              });
            },
            mobile: {
              autoFocus: !1
            }
          }
        }));
      });
    }(document, t), function (t, e, n) {
      "use strict";

      function i() {
        var e = t.location.hash.substr(1),
            n = e.split("-"),
            i = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) && parseInt(n.pop(-1), 10) || 1;
        return {
          hash: e,
          index: i < 1 ? 1 : i,
          gallery: n.join("-")
        };
      }

      function o(t) {
        "" !== t.gallery && n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start");
      }

      function r(t) {
        var e, n;
        return !!t && "" !== (n = (e = t.current ? t.current.opts : t.opts).hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && n;
      }

      n.escapeSelector || (n.escapeSelector = function (t) {
        return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function (t, e) {
          return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t;
        });
      }), n(function () {
        !1 !== n.fancybox.defaults.hash && (n(e).on({
          "onInit.fb": function onInitFb(t, e) {
            var n, o;
            !1 !== e.group[e.currIndex].opts.hash && (n = i(), (o = r(e)) && n.gallery && o == n.gallery && (e.currIndex = n.index - 1));
          },
          "beforeShow.fb": function beforeShowFb(n, i, o, s) {
            var a;
            o && !1 !== o.opts.hash && (a = r(i)) && (i.currentHash = a + (i.group.length > 1 ? "-" + (o.index + 1) : ""), t.location.hash !== "#" + i.currentHash && (s && !i.origHash && (i.origHash = t.location.hash), i.hashTimer && clearTimeout(i.hashTimer), i.hashTimer = setTimeout(function () {
              "replaceState" in t.history ? (t.history[s ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + i.currentHash), s && (i.hasCreatedHistory = !0)) : t.location.hash = i.currentHash, i.hashTimer = null;
            }, 300)));
          },
          "beforeClose.fb": function beforeCloseFb(n, i, o) {
            o && !1 !== o.opts.hash && (clearTimeout(i.hashTimer), i.currentHash && i.hasCreatedHistory ? t.history.back() : i.currentHash && ("replaceState" in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (i.origHash || "")) : t.location.hash = i.origHash), i.currentHash = null);
          }
        }), n(t).on("hashchange.fb", function () {
          var t = i(),
              e = null;
          n.each(n(".fancybox-container").get().reverse(), function (t, i) {
            var o = n(i).data("FancyBox");
            if (o && o.currentHash) return e = o, !1;
          }), e ? e.currentHash === t.gallery + "-" + t.index || 1 === t.index && e.currentHash == t.gallery || (e.currentHash = null, e.close()) : "" !== t.gallery && o(t);
        }), setTimeout(function () {
          n.fancybox.getInstance() || o(i());
        }, 50));
      });
    }(window, document, t), function (t, e) {
      "use strict";

      var n = new Date().getTime();
      e(t).on({
        "onInit.fb": function onInitFb(t, e, i) {
          e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (t) {
            var i = e.current,
                o = new Date().getTime();
            e.group.length < 2 || !1 === i.opts.wheel || "auto" === i.opts.wheel && "image" !== i.type || (t.preventDefault(), t.stopPropagation(), i.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, o - n < 250 || (n = o, e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())));
          });
        }
      });
    }(document, t);
  }).call(this, n(0));
}, function (t, e, n) {
  var i, o;
  o = this, void 0 === (i = function () {
    return o.svg4everybody = function () {
      /*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */
      function t(t, e, n) {
        if (n) {
          var i = document.createDocumentFragment(),
              o = !e.hasAttribute("viewBox") && n.getAttribute("viewBox");
          o && e.setAttribute("viewBox", o);

          for (var r = n.cloneNode(!0); r.childNodes.length;) {
            i.appendChild(r.firstChild);
          }

          t.appendChild(i);
        }
      }

      function e(e) {
        e.onreadystatechange = function () {
          if (4 === e.readyState) {
            var n = e._cachedDocument;
            n || ((n = e._cachedDocument = document.implementation.createHTMLDocument("")).body.innerHTML = e.responseText, e._cachedTarget = {}), e._embeds.splice(0).map(function (i) {
              var o = e._cachedTarget[i.id];
              o || (o = e._cachedTarget[i.id] = n.getElementById(i.id)), t(i.parent, i.svg, o);
            });
          }
        }, e.onreadystatechange();
      }

      function n(t) {
        for (var e = t; "svg" !== e.nodeName.toLowerCase() && (e = e.parentNode);) {
          ;
        }

        return e;
      }

      return function (i) {
        var o,
            r = Object(i),
            s = window.top !== window.self;
        o = "polyfill" in r ? r.polyfill : /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent) || (navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/) || [])[1] < 10547 || (navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/) || [])[1] < 537 || /\bEdge\/.(\d+)\b/.test(navigator.userAgent) && s;
        var a = {},
            l = window.requestAnimationFrame || setTimeout,
            c = document.getElementsByTagName("use"),
            u = 0;
        o && function i() {
          for (var s = 0; s < c.length;) {
            var d = c[s],
                p = d.parentNode,
                f = n(p),
                h = d.getAttribute("xlink:href") || d.getAttribute("href");

            if (!h && r.attributeName && (h = d.getAttribute(r.attributeName)), f && h) {
              if (o) if (!r.validate || r.validate(h, f, d)) {
                p.removeChild(d);
                var g = h.split("#"),
                    v = g.shift(),
                    m = g.join("#");

                if (v.length) {
                  var y = a[v];
                  y || ((y = a[v] = new XMLHttpRequest()).open("GET", v), y.send(), y._embeds = []), y._embeds.push({
                    parent: p,
                    svg: f,
                    id: m
                  }), e(y);
                } else t(p, f, document.getElementById(m));
              } else ++s, ++u;
            } else ++s;
          }

          (!c.length || c.length - u > 0) && l(i, 67);
        }();
      };
    }();
  }.apply(e, [])) || (t.exports = i);
}, function (t, e, n) {
  "use strict";

  (function (t) {
    n(4), n(5), t(".navbar");

    var e = !1,
        i = function i() {
      e = t(".navbar").outerHeight();
    },
        o = (t(".menu--main").hcOffcanvasNav({
      disableAt: !1,
      customToggle: t(".burger"),
      labelBack: "",
      position: "left",
      pushContent: "#container",
      disableBody: !1
    }), t('<header class="mobnav-header"></header>')),
        r = t('<footer class="mobnav-footer"></footer>'),
        s = t(".hc-offcanvas-nav .nav-content");

    o.prependTo(s), r.appendTo(s), t(".navbar").mhead({
      scroll: {
        hide: 200
      }
    }), t(window).on("load", function () {
      i();
    }), t(window).on("resize", function () {
      i();
    }), t('a[href*="#"]:not(".fancyform")').on("click", function (n) {
      var i = this.hash,
          o = t(i);
      return o.length && (n.preventDefault(), t("html, body").stop().animate({
        scrollTop: o.offset().top - e
      }, 900, "swing", function () {
        return history.pushState({}, document.title, window.location.pathname + i), !1;
      })), !1;
    });
  }).call(this, n(0));
}, function (t, e, n) {
  "use strict";

  (function (t) {
    function e(t) {
      return (e = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      })(t);
    }

    !function (n, i) {
      var o = i.document,
          r = n(i),
          s = n(o.getElementsByTagName("html")[0]),
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
      } catch (t) {}

      var u,
          d = function d() {
        return o.documentElement.scrollHeight > o.documentElement.clientHeight;
      },
          p = (/iPad|iPhone|iPod/.test(navigator.userAgent) || !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)) && !i.MSStream,
          f = "ontouchstart" in i || navigator.maxTouchPoints || i.DocumentTouch && o instanceof DocumentTouch,
          h = function h(t) {
        return !isNaN(parseFloat(t)) && isFinite(t);
      },
          g = function g(t) {
        return "auto" === t ? t : h(t) ? t + "px" : t;
      },
          v = function v(t) {
        return parseFloat(t) * (/\ds$/.test(t) ? 1e3 : 1);
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
          x = function x(t) {
        return t.stopPropagation();
      },
          w = function w(t) {
        return t.preventDefault();
      },
          T = function T(t) {
        return function (e) {
          e.preventDefault(), e.stopPropagation(), "function" == typeof t && t();
        };
      },
          S = function S(t) {
        var e = ["Webkit", "Moz", "Ms", "O"],
            n = (o.body || o.documentElement).style,
            i = t.charAt(0).toUpperCase() + t.slice(1);
        if (void 0 !== n[t]) return t;

        for (var r = 0; r < e.length; r++) {
          if (void 0 !== n[e[r] + i]) return e[r] + i;
        }

        return !1;
      },
          k = function t(e) {
        return "string" == typeof e ? e : e.attr("id") ? "#" + e.attr("id") : e.attr("class") ? e.prop("tagName").toLowerCase() + "." + e.attr("class").replace(/\s+/g, ".") : t(e.parent()) + " " + e.prop("tagName").toLowerCase();
      },
          C = function C(t) {
        var e = n('<style id="'.concat(t, '">')).appendTo(n("head")),
            i = {},
            o = {},
            r = function r(t) {
          return ";" !== t.substr(-1) && (t += ";" !== t.substr(-1) ? ";" : ""), t;
        };

        return {
          reset: function reset() {
            i = {}, o = {};
          },
          add: function add(t, e, n) {
            t = t.trim(), e = e.trim(), n ? (n = n.trim(), o[n] = o[n] || {}, o[n][t] = r(e)) : i[t] = r(e);
          },
          remove: function remove(t, e) {
            t = t.trim(), e ? (e = e.trim(), void 0 !== o[e][t] && delete o[e][t]) : void 0 !== i[t] && delete i[t];
          },
          insert: function insert() {
            var t = "";

            for (var n in o) {
              for (var r in t += "@media screen and (".concat(n, ") {\n"), o[n]) {
                t += "".concat(r, " { ").concat(o[n][r], " }\n");
              }

              t += "}\n";
            }

            for (var s in i) {
              t += "".concat(s, " { ").concat(i[s], " }\n");
            }

            e.html(t);
          }
        };
      },
          _ = function _(t, e, n) {
        var i = n.children(),
            o = i.length,
            r = e > -1 ? Math.max(0, Math.min(e - 1, o)) : Math.max(0, Math.min(o + e + 1, o));
        0 === r ? n.prepend(t) : i.eq(r - 1).after(t);
      },
          $ = function $(t) {
        return -1 !== ["left", "right"].indexOf(t) ? "x" : "y";
      },
          A = (u = S("transform"), function (t, e, n) {
        if (u) {
          if (!1 === e) t.css(u, "");else if ("x" === $(n)) {
            var i = "left" === n ? e : 0 - e;
            t.css(u, "translate3d(".concat(i, "px,0,0)"));
          } else {
            var o = "top" === n ? e : 0 - e;
            t.css(u, "translate3d(0,".concat(o, "px,0)"));
          }
        } else t.css(n, e);
      }),
          P = function P(t, e, n) {
        console.warn("%cHC Off-canvas Nav:%c " + n + "%c '" + t + "'%c is now deprecated and will be removed in the future. Use%c '" + e + "'%c option instead. See details about plugin usage at https://github.com/somewebmedia/hc-offcanvas-nav.", "color: #fa253b", "color: default", "color: #5595c6", "color: default", "color: #5595c6", "color: default");
      },
          E = 0;

      n.fn.extend({
        hcOffcanvasNav: function hcOffcanvasNav() {
          var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (!this.length) return this;
          var c = this,
              u = n(o.body),
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
              L = function L(t) {
            if (!M.length) return !1;
            var e = !1;
            "string" == typeof t && (t = [t]);

            for (var n = t.length, i = 0; i < n; i++) {
              -1 !== M.indexOf(t[i]) && (e = !0);
            }

            return e;
          },
              j = function j() {
            var i = n(this);

            if (i.find("ul").addBack("ul").length) {
              E++;
              var w,
                  P,
                  j,
                  H = "hc-nav-".concat(E),
                  N = C("hc-offcanvas-".concat(E, "-style")),
                  z = n('<nav role="navigation">').on("click", x),
                  I = n('<div class="nav-container">').appendTo(z),
                  F = null,
                  q = null,
                  R = {},
                  B = !1,
                  W = !1,
                  X = null,
                  Y = 0,
                  U = 0,
                  V = 0,
                  G = null,
                  Z = {},
                  K = [],
                  Q = !1,
                  J = [],
                  tt = null,
                  et = null,
                  nt = !1,
                  it = !1;
              i.addClass("hc-nav-original ".concat(H)), O.customToggle ? F = n(O.customToggle).addClass("hc-nav-trigger ".concat(H)).on("click", kt) : (F = n('<a href="#" aria-label="Open Menu" class="hc-nav-trigger '.concat(H, '"><span></span></a>')).on("click", kt), i.after(F)), F.attr("role", "button").attr("aria-controls", H).on("keydown", function (t) {
                "Enter" !== t.key && 13 !== t.keyCode || setTimeout(function () {
                  ot(0, 0);
                }, 0);
              });

              var ot = function ot(t, e, i) {
                if ("number" == typeof e && ("number" == typeof t || J.length)) {
                  var r = '[tabindex=0], a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select',
                      s = I.find(".nav-wrapper").filter("[data-level=".concat(e, "]")).filter(function () {
                    return "number" != typeof i || n(this).is("[data-index=".concat(i, "]"));
                  }).children(".nav-content").children("ul").children("li").children(":not(.nav-wrapper)").find(r).addBack(r).filter(":not([tabindex=-1])");

                  if (s.length) {
                    var l = s.first(),
                        c = s.last();
                    "number" == typeof t ? s.eq(t).focus() : (J[J.length - 1].focus(), J.pop()), a.off("keydown.hc-offcanvas-nav"), a.on("keydown.hc-offcanvas-nav", function (t) {
                      ("Tab" === t.key || 9 === t.keyCode) && (t.shiftKey ? o.activeElement === l[0] && (t.preventDefault(), c.focus()) : o.activeElement === c[0] && (t.preventDefault(), l.focus()));
                    });
                  }
                }
              },
                  rt = function rt() {
                a.off("keydown.hc-offcanvas-nav"), setTimeout(function () {
                  F.focus();
                }, P);
              },
                  st = function st() {
                I.css("transition", "none"), U = I.outerWidth(), V = I.outerHeight(), N.add(".hc-offcanvas-nav.".concat(H, ".nav-position-left .nav-container"), "transform: translate3d(-".concat(U, "px, 0, 0)")), N.add(".hc-offcanvas-nav.".concat(H, ".nav-position-right .nav-container"), "transform: translate3d(".concat(U, "px, 0, 0)")), N.add(".hc-offcanvas-nav.".concat(H, ".nav-position-top .nav-container"), "transform: translate3d(0, -".concat(V, "px, 0)")), N.add(".hc-offcanvas-nav.".concat(H, ".nav-position-bottom .nav-container"), "transform: translate3d(0, ".concat(V, "px, 0)")), N.insert(), I.css("transition", ""), w = I.css("transition-property").split(",")[0], P = v(I.css("transition-duration").split(",")[0]), j = I.css("transition-timing-function").split(",")[0], O.pushContent && q && w && N.add(k(O.pushContent), "transition: ".concat(w, " ").concat(P, "ms ").concat(j)), N.insert();
              },
                  at = function at(e) {
                var i = F.css("display"),
                    o = !!O.disableAt && "max-width: ".concat(O.disableAt - 1, "px"),
                    r = g(O.width),
                    s = g(O.height);
                -1 !== r.indexOf("px") && (U = parseInt(r)), -1 !== s.indexOf("px") && (V = parseInt(s)), L(["disableAt", "position"]) && N.reset(), N.add(".hc-offcanvas-nav.".concat(H), "display: block", o), N.add(".hc-nav-original.".concat(H), "display: none", o), N.add(".hc-nav-trigger.".concat(H), "display: ".concat(i && "none" !== i ? i : "block"), o), -1 !== ["left", "right"].indexOf(O.position) ? N.add(".hc-offcanvas-nav.".concat(H, " .nav-container"), "width: ".concat(r)) : N.add(".hc-offcanvas-nav.".concat(H, " .nav-container"), "height: ".concat(s)), N.add(".hc-offcanvas-nav.".concat(H, ".nav-position-left .nav-container"), "transform: translate3d(-".concat("auto" === r ? "100%" : r, ", 0, 0);")), N.add(".hc-offcanvas-nav.".concat(H, ".nav-position-right .nav-container"), "transform: translate3d(".concat("auto" === r ? "100%" : r, ", 0, 0);")), N.add(".hc-offcanvas-nav.".concat(H, ".nav-position-top .nav-container"), "transform: translate3d(0, -".concat("auto" === s ? "100%" : s, ", 0);")), N.add(".hc-offcanvas-nav.".concat(H, ".nav-position-bottom .nav-container"), "transform: translate3d(0, ".concat("auto" === s ? "100%" : s, ", 0);")), N.add(".hc-offcanvas-nav.".concat(H, ".nav-levels-overlap.nav-position-left li.level-open > .nav-wrapper"), "transform: translate3d(-".concat(O.levelSpacing, "px,0,0)"), o), N.add(".hc-offcanvas-nav.".concat(H, ".nav-levels-overlap.nav-position-right li.level-open > .nav-wrapper"), "transform: translate3d(".concat(O.levelSpacing, "px,0,0)"), o), N.add(".hc-offcanvas-nav.".concat(H, ".nav-levels-overlap.nav-position-top li.level-open > .nav-wrapper"), "transform: translate3d(0,-".concat(O.levelSpacing, "px,0)"), o), N.add(".hc-offcanvas-nav.".concat(H, ".nav-levels-overlap.nav-position-bottom li.level-open > .nav-wrapper"), "transform: translate3d(0,".concat(O.levelSpacing, "px,0)"), o), N.insert(), (!e || e && L("pushContent")) && ("string" == typeof O.pushContent ? (q = n(O.pushContent)).length || (q = null) : q = O.pushContent instanceof t ? O.pushContent : null), I.css("transition", "none");
                var a = z.hasClass(D),
                    l = ["hc-offcanvas-nav", O.navClass || "", H, O.navClass || "", "nav-levels-" + O.levelOpen || !1, "nav-position-" + O.position, O.disableBody ? "disable-body" : "", p ? "is-ios" : "", f ? "touch-device" : "", a ? D : "", O.rtl ? "rtl" : ""].join(" ");
                z.off("click").attr("class", "").attr("aria-hidden", !0).attr("aria-labelledby", H).addClass(l), O.disableBody && z.on("click", St), e ? st() : setTimeout(st, 0);
              },
                  lt = function lt() {
                var t;

                R = function t(e, i) {
                  var o = [];
                  return e.each(function () {
                    var e = n(this),
                        r = {
                      id: i,
                      classes: e.attr("class") || null,
                      items: []
                    };
                    void 0 !== e.attr("data-nav-active") && (X = i, e.removeAttr("data-nav-active")), e.children("li").each(function () {
                      var e = n(this),
                          i = void 0 !== e.attr("data-nav-custom-content"),
                          o = i ? e.children() : e.children().filter(function () {
                        var t = n(this);
                        return t.is(":not(ul)") && !t.find("ul").length;
                      }).add(e.contents().filter(function () {
                        return 3 === this.nodeType && this.nodeValue.trim();
                      })),
                          s = i ? n() : e.find("ul"),
                          a = s.first().add(s.first().siblings("ul")),
                          l = null;
                      a.length && (e.data("hc-uniqid") ? l = e.data("hc-uniqid") : (l = m(), e.data("hc-uniqid", l))), void 0 !== e.attr("data-nav-active") && (X = l, e.removeAttr("data-nav-active")), r.items.push({
                        id: l,
                        classes: e.attr("class") || null,
                        content: o,
                        custom: i,
                        subnav: a.length ? t(a, l) : [],
                        highlight: void 0 !== e.attr("data-nav-highlight")
                      });
                    }), o.push(r);
                  }), o;
                }((t = i.find("ul").addBack("ul")).first().add(t.first().siblings("ul")), null);
              },
                  ct = function ct(t) {
                t && (I.empty(), Z = {}), function t(e, i, o, r, s, a) {
                  var l = n('<div class="nav-wrapper nav-wrapper-'.concat(o, '" data-level="').concat(o, '" data-index="').concat(s || 0, '">')).appendTo(i).on("click", x),
                      c = n('<div class="nav-content">').appendTo(l);
                  r && c.prepend("<h2>".concat(r, "</h2>"));

                  if (n.each(e, function (e, i) {
                    var s = n('<ul role="menu" aria-level="'.concat(o + 1, '">')).addClass(i.classes).appendTo(c);
                    0 === e && r && s.attr("aria-label", r), i.id && s.attr("aria-labelledby", "menu-" + i.id), n.each(i.items, function (e, i) {
                      var a = i.content;

                      if (i.custom) {
                        var c = n('<li class="custom-content">').addClass(i.classes).append(n('<div class="nav-item nav-item-custom">').append(a.clone(!0, !0)));
                        s.append(c);
                      } else {
                        var u = a.find("a").addBack("a"),
                            d = u.length ? u.clone(!1, !0).addClass("nav-item") : n("<".concat(i.subnav.length ? 'a href="#"' : "span", ' class="nav-item">')).append(a.clone(!0, !0)).on("click", x);
                        d.is("a") && d.attr("tabindex", "0").attr("role", "menuitem"), u.length && d.on("click", function (t) {
                          t.stopPropagation(), (n._data(u[0], "events") || {}).click && u[0].click();
                        }), "#" === d.attr("href") && d.on("click", function (t) {
                          t.preventDefault();
                        }), O.closeOnClick && (bt() ? d.filter("a").filter('[data-nav-close!="false"]:not([disabled])').filter(function () {
                          var t = n(this);
                          return !i.subnav.length || t.attr("href") && "#" !== t.attr("href").charAt(0);
                        }).on("click", St) : d.filter("a").filter('[data-nav-close!="false"]:not([disabled])').on("click", St));
                        var p = n("<li>").addClass(i.classes).append(d).appendTo(s);

                        if (i.highlight && p.addClass("nav-highlight"), d.wrap('<div class="nav-item-wrapper">'), O.levelSpacing && ("expand" === O.levelOpen || !1 === O.levelOpen || "none" === O.levelOpen)) {
                          var f = O.levelSpacing * o;
                          f && s.css("text-indent", "".concat(f, "px"));
                        }

                        if (i.subnav.length) {
                          var h = o + 1,
                              g = i.id,
                              v = "";

                          if (Z[h] || (Z[h] = 0), p.addClass("nav-parent"), bt()) {
                            var m = Z[h],
                                y = n('<input type="checkbox" id="'.concat(H, "-").concat(h, "-").concat(m, '" class="hc-chk" tabindex="-1">')).attr("data-level", h).attr("data-index", m).val(g).on("click", x).on("change", yt).prependTo(p),
                                b = function b(t) {
                              t.on("click", function () {
                                y.prop("checked", !y.prop("checked")).trigger("change");
                              }).on("keydown", function (t) {
                                "Enter" !== t.key && 13 !== t.keyCode || (Q = !0, J.push(n(this)));
                              }).attr("aria-controls", "menu-" + g).attr("aria-haspopup", "overlap" === O.levelOpen).attr("aria-expanded", !1);
                            };

                            -1 !== K.indexOf(g) && (l.addClass("sub-level-open").on("click", function () {
                              return _t(h, m);
                            }), p.addClass("level-open"), y.prop("checked", !0)), v = !0 === O.levelTitles ? a.text().trim() : "", d.attr("href") && "#" !== d.attr("href") ? b(n('<a href="#" class="nav-next" aria-label="'.concat(v, ' Submenu" role="menuitem" tabindex="0"><span>')).on("click", T()).insertAfter(d)) : (n('<span class="nav-next"><span>').appendTo(d), b(d));
                          } else d.attr("aria-expanded", !0);

                          Z[h]++, t(i.subnav, p, h, v, Z[h] - 1, r);
                        }
                      }
                    });
                  }), o && void 0 !== s && !1 !== O.insertBack && "overlap" === O.levelOpen) {
                    var u = c.children("ul"),
                        d = O.levelTitleAsBack && a || O.labelBack || "",
                        p = n('<li class="nav-back"><a href="#" role="menuitem" tabindex="0">'.concat(d, "<span></span></a></li>"));
                    p.children("a").on("click", T(function () {
                      return _t(o, s);
                    })).on("keydown", function (t) {
                      "Enter" !== t.key && 13 !== t.keyCode || (Q = !0);
                    }).wrap('<div class="nav-item-wrapper">'), !0 === O.insertBack ? u.first().prepend(p) : h(O.insertBack) && _(p, O.insertBack, u);
                  }

                  if (0 === o && !1 !== O.insertClose) {
                    var f = c.children("ul"),
                        g = n('<li class="nav-close"><a href="#" role="menuitem" tabindex="0">'.concat(O.labelClose || "", "<span></span></a></li>"));
                    g.children("a").on("click", T(St)).on("keydown", function (t) {
                      "Enter" !== t.key && 13 !== t.keyCode || rt();
                    }).wrap('<div class="nav-item-wrapper">'), !0 === O.insertClose ? f.first().prepend(g) : h(O.insertClose) && _(g, O.insertClose, f.first().add(f.first().siblings("ul")));
                  }
                }(R, I, 0, O.navTitle);
              },
                  ut = function ut(t) {
                return function (e) {
                  "left" != O.position && "right" != O.position || (tt = e.touches[0].clientX, et = e.touches[0].clientY, "doc" == t ? it || (o.addEventListener("touchmove", ft, l), o.addEventListener("touchend", ht, l)) : (it = !0, I[0].addEventListener("touchmove", gt, l), I[0].addEventListener("touchend", vt, l)));
                };
              },
                  dt = function dt(t, e) {
                y(), z.css("visibility", "visible"), I.css(S("transition"), "none"), A(I, t, O.position), q && (q.css(S("transition"), "none"), A(q, e, O.position));
              },
                  pt = function pt(t) {
                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                b(), I.css(S("transition"), ""), A(I, n, O.position), q && (q.css(S("transition"), ""), A(q, i, O.position)), "open" == t ? Tt() : (St(), e ? setTimeout(function () {
                  z.css("visibility", "");
                }, P) : z.css("visibility", ""));
              },
                  ft = function ft(t) {
                var e = 0 - (tt - t.touches[0].clientX),
                    n = "overlap" === O.levelOpen ? wt() * O.levelSpacing : 0,
                    i = U + n;
                e = "left" == O.position ? Math.min(Math.max(e, 0), i) : Math.abs(Math.min(Math.max(e, -i), 0)), ("left" == O.position && tt < 20 || "right" == O.position && tt > a.width() - 20) && (nt = !0, dt(0 - (U - e), Math.abs(e)));
              },
                  ht = function t(e) {
                if (o.removeEventListener("touchmove", ft), o.removeEventListener("touchend", t), nt) {
                  var n = e.changedTouches[e.changedTouches.length - 1],
                      i = 0 - (tt - n.clientX),
                      r = "overlap" === O.levelOpen ? wt() * O.levelSpacing : 0,
                      s = U + r;
                  (i = "left" == O.position ? Math.min(Math.max(i, 0), s) : Math.abs(Math.min(Math.max(i, -s), 0))) ? pt(i > 70 ? "open" : "close") : pt("close", !1), tt = null, et = null, nt = !1;
                }
              },
                  gt = function gt(t) {
                var e = 0 - (tt - t.touches[0].clientX),
                    n = 0 - (et - t.touches[0].clientY);

                if (!(Math.abs(e) < Math.abs(n))) {
                  var i = "overlap" === O.levelOpen ? wt() * O.levelSpacing : 0,
                      o = U + i;
                  e = "left" == O.position ? Math.min(Math.max(e, -o), 0) : Math.min(Math.max(e, 0), o), ("left" == O.position && e < 0 || "right" == O.position && e > 0) && (nt = !0, dt(-Math.abs(e) + i, o - Math.abs(e)));
                }
              },
                  vt = function t(e) {
                if (I[0].removeEventListener("touchmove", gt), I[0].removeEventListener("touchend", t), it = !1, nt) {
                  var n = e.changedTouches[e.changedTouches.length - 1],
                      i = 0 - (tt - n.clientX),
                      o = "overlap" === O.levelOpen ? wt() * O.levelSpacing : 0,
                      r = U + o;
                  (i = "left" == O.position ? Math.abs(Math.min(Math.max(i, -r), 0)) : Math.abs(Math.min(Math.max(i, 0), r))) == r ? pt("close", !1) : i > 50 ? pt("close") : pt("open", !0, o, r), tt = null, et = null, nt = !1;
                }
              };

              at(), lt(), ct(), !0 === O.removeOriginalNav && i.remove(), "prepend" === O.bodyInsert ? u.prepend(z) : "append" === O.bodyInsert && u.append(z), !0 === O.expanded && (W = !0, Tt()), O.swipeGestures && (I[0].addEventListener("touchstart", ut("nav"), l), o.addEventListener("touchstart", ut("doc"), l)), a.on("keydown", function (t) {
                if (xt() && ("Escape" === t.key || 27 === t.keyCode)) {
                  var e = wt();
                  0 === e ? (St(), rt()) : (_t(e), ot(null, e - 1));
                }
              });

              var mt = function mt(t, e, i) {
                var o = n("#".concat(H, "-").concat(t, "-").concat(e));

                if (o.length) {
                  var r = o.val(),
                      s = o.parent("li"),
                      a = s.closest(".nav-wrapper");

                  if (o.prop("checked", !1), a.removeClass("sub-level-open"), s.removeClass("level-open"), s.children(".nav-item-wrapper").children("[aria-controls]").attr("aria-expanded", !1), -1 !== K.indexOf(r) && K.splice(K.indexOf(r), 1), i && "overlap" === O.levelOpen && (a.off("click").on("click", x), A(I, (t - 1) * O.levelSpacing, O.position), q)) {
                    var l = "x" === $(O.position) ? U : V;
                    A(q, l + (t - 1) * O.levelSpacing, O.position);
                  }
                }
              };

              c.getSettings = function () {
                return Object.assign({}, O);
              }, c.isOpen = xt, c.open = Tt, c.close = St, c.update = function (t, i) {
                if (M = [], "object" === e(t)) {
                  for (var o in t) {
                    O[o] !== t[o] && M.push(o);
                  }

                  O = n.extend({}, O, t);
                }

                if (!0 === t || !0 === i) {
                  if (O.removeOriginalNav) return void console.warn("%c! HC Offcanvas Nav:%c Can't update because original navigation has been removed. Disable `removeOriginalNav` option.", "color: #fa253b", "color: default");
                  at(!0), lt(), ct(!0);
                } else at(!0), ct(!0);
              };
            } else console.error("%c! HC Offcanvas Nav:%c Menu must contain <ul> element.", "color: #fa253b", "color: default");

            function yt() {
              var t = n(this),
                  e = t.data("level"),
                  i = t.data("index");
              t.prop("checked") ? Ct(e, i) : _t(e, i);
            }

            function bt() {
              return !1 !== O.levelOpen && "none" !== O.levelOpen;
            }

            function xt() {
              return B;
            }

            function wt() {
              return K.length ? I.find(".hc-chk").filter("[value=".concat(K[K.length - 1], "]")).data("level") : 0;
            }

            function Tt(t, e) {
              if ((!xt() || void 0 !== e) && (function () {
                if (xt()) return;
                B = !0, z.css("visibility", "visible").attr("aria-hidden", !1).addClass(D), F.addClass("toggle-open"), "expand" === O.levelOpen && G && clearTimeout(G);
                O.disableBody && (Y = r.scrollTop() || s.scrollTop() || u.scrollTop(), d() && s.addClass("hc-nav-yscroll"), u.addClass("hc-nav-open"), Y && u.css("top", -Y));

                if (q) {
                  var t = "x" === $(O.position) ? U : V;
                  A(q, t, O.position);
                }

                if (W) return void (W = !1);
                setTimeout(function () {
                  c.trigger("open", n.extend({}, O));
                }, P);
              }(), bt())) {
                var i;

                if ("number" == typeof t && "number" == typeof e) {
                  if (!(i = n("#".concat(H, "-").concat(t, "-").concat(e))).length) return void console.warn("HC Offcanvas Nav: level ".concat(t, " doesn't have index ").concat(e));
                } else X ? (i = I.find(".hc-chk").filter("[value=".concat(X, "]")), !O.closeActiveLevel && O.closeOpenLevels || (X = null)) : !1 === O.closeOpenLevels && (i = I.find(".hc-chk").filter(":checked").last());

                if (i && i.length) {
                  var o = [];
                  t = i.data("level"), e = i.data("index"), t > 1 && (i.parents(".nav-wrapper").each(function () {
                    var t = n(this),
                        e = t.data("level");
                    e > 0 && o.push({
                      level: e,
                      index: t.data("index")
                    });
                  }), o = o.reverse()), o.push({
                    level: t,
                    index: e
                  });

                  for (var a = 0; a < o.length; a++) {
                    Ct(o[a].level, o[a].index, !1);
                  }
                }
              }
            }

            function St() {
              if (xt()) {
                if (B = !1, q && A(q, !1), z.removeClass(D).attr("aria-hidden", !0), I.removeAttr("style"), F.removeClass("toggle-open"), "expand" === O.levelOpen && -1 !== ["top", "bottom"].indexOf(O.position) ? _t(0) : bt() && (G = setTimeout(function () {
                  _t(0);
                }, "expand" === O.levelOpen ? P : 0)), O.disableBody && (u.removeClass("hc-nav-open"), s.removeClass("hc-nav-yscroll"), Y)) {
                  if (u.css("top", "").scrollTop(Y), s.scrollTop(Y), "bottom" === O.position) {
                    var t = Y;
                    setTimeout(function () {
                      u.scrollTop(t), s.scrollTop(t);
                    }, 0);
                  }

                  Y = 0;
                }

                setTimeout(function () {
                  z.css("visibility", ""), c.trigger("close.$", n.extend({}, O)), c.trigger("close.once", n.extend({}, O)).off("close.once");
                }, P);
              }
            }

            function kt(t) {
              t.preventDefault(), t.stopPropagation(), B ? St() : Tt();
            }

            function Ct(t, e) {
              var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                  o = n("#".concat(H, "-").concat(t, "-").concat(e)),
                  r = o.val(),
                  s = o.parent("li"),
                  a = s.closest(".nav-wrapper"),
                  l = s.children(".nav-wrapper");

              if (!1 === i && l.css("transition", "none"), o.prop("checked", !0), a.addClass("sub-level-open"), s.addClass("level-open"), s.children(".nav-item-wrapper").children("[aria-controls]").attr("aria-expanded", !0), !1 === i && setTimeout(function () {
                l.css("transition", "");
              }, P), -1 === K.indexOf(r) && K.push(r), "overlap" === O.levelOpen && (a.on("click", function () {
                return _t(t, e);
              }), A(I, t * O.levelSpacing, O.position), q)) {
                var c = "x" === $(O.position) ? U : V;
                A(q, c + t * O.levelSpacing, O.position);
              }

              Q && (ot(0, t, e), Q = !1);
            }

            function _t(t, e) {
              for (var n = t; n <= Object.keys(Z).length; n++) {
                if (n == t && void 0 !== e) mt(t, e, !0);else if (0 !== t || O.closeOpenLevels) for (var i = 0; i < Z[n]; i++) {
                  mt(n, i, n == t);
                } else ;
              }

              Q && (ot(null, t - 1), Q = !1);
            }
          };

          return this.each(j);
        }
      });
    }(t, "undefined" != typeof window ? window : this);
  }).call(this, n(0));
}, function (t, e, n) {
  (function (t) {
    function e(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    function n(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }

    function i(t) {
      return (i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      })(t);
    }

    !function (t) {
      var e = {};

      function n(i) {
        if (e[i]) return e[i].exports;
        var o = e[i] = {
          i: i,
          l: !1,
          exports: {}
        };
        return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
      }

      n.m = t, n.c = e, n.d = function (t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
          enumerable: !0,
          get: i
        });
      }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(t, "__esModule", {
          value: !0
        });
      }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == i(t) && t && t.__esModule) return t;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
          enumerable: !0,
          value: t
        }), 2 & e && "string" != typeof t) for (var r in t) {
          n.d(o, r, function (e) {
            return t[e];
          }.bind(null, r));
        }
        return o;
      }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
          return t["default"];
        } : function () {
          return t;
        };
        return n.d(e, "a", e), e;
      }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }, n.p = "", n(n.s = 0);
    }([function (i, o, r) {
      "use strict";

      r.r(o);

      var s,
          a = function () {
        function t(n) {
          var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};

          if (e(this, t), this.opts = {}, this.header = "string" == typeof n ? document.querySelector(n) : n, n) {
            for (var o = Object.keys(t.options), r = 0; r < o.length; r++) {
              this.opts[o[r]] = i[o[r]] || t.options[o[r]];
            }

            this.initScroll();
          }
        }

        var i, o, r;
        return i = t, (o = [{
          key: "initScroll",
          value: function value() {
            var e = this;

            if (!1 !== this.opts.unpin) {
              this.header.classList.add("mh-sticky");
              var n = 2 * this.header.offsetHeight;
              this.opts.unpin = Math.max(n, this.opts.unpin || 0), this.opts.pin = Math.max(n, this.opts.pin || 0), this.state = null;

              var i = 0,
                  o = function o() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                var n = document.documentElement.scrollTop || document.body.scrollTop,
                    o = i - n,
                    r = o < 0 ? "down" : "up";
                o = Math.abs(o), i = n, e.state == t.UNPINNED ? "up" == r && (n < e.opts.pin || o > e.opts.tolerance) && e.pin() : e.state == t.PINNED ? "down" == r && n > e.opts.unpin && o > e.opts.tolerance && e.unpin() : e.pin();
              };

              window.addEventListener("scroll", o, {
                passive: !0
              }), o();
            }
          }
        }, {
          key: "pin",
          value: function value() {
            this.header.classList.add("mh-pinned"), this.header.classList.remove("mh-unpinned"), this.state = t.PINNED;
          }
        }, {
          key: "unpin",
          value: function value() {
            this.header.classList.remove("mh-pinned"), this.header.classList.add("mh-unpinned"), this.state = t.UNPINNED;
          }
        }]) && n(i.prototype, o), r && n(i, r), t;
      }();

      a.version = "2.1.0", a.options = {
        pin: 0,
        unpin: 0,
        tolerance: 5
      }, a.PINNED = "pinned", a.UNPINNED = "unpinned",
      /*!
         * mhead.js
         * mmenu.frebsite.nl/mhead
         *
         * Copyright (c) Fred Heusschen
         * www.frebsite.nl
         *
         * License: CC-BY-4.0
         * http://creativecommons.org/licenses/by/4.0/
         */
      window && (window.Mhead = a, (s = t || window.Zepto || null) && (s.fn.mhead = function (t) {
        return this.each(function (e, n) {
          new a(n, t);
        });
      }));
    }]);
  }).call(this, n(0));
}, function (t, e, n) {
  "use strict";

  (function (t) {
    n(7);
    t(".sept-count").slick({
      asNavFor: ".septic-desc, .septic-img",
      rows: 0,
      slidesToShow: 1,
      infinite: !1
    });
    var e = {
      rows: 0,
      mobileFirst: !0,
      slidesToShow: 1,
      infinite: !1,
      ariableWidth: !0,
      responsive: [{
        breakpoint: 560,
        settings: "unslick"
      }]
    },
        i = t(".js-features").slick(e);
    t(window).on("resize", function () {
      t(window).width() < 560 && !i.hasClass("slick-initialized") && i.slick(e);
    }), t(".septic-desc").slick({
      asNavFor: ".sept-count, .septic-img",
      rows: 0,
      slidesToShow: 1,
      arrows: !1,
      infinite: !1
    }), t(".septic-img").slick({
      asNavFor: ".sept-count, .septic-desc",
      rows: 0,
      slidesToShow: 1,
      infinite: !1,
      fade: !0,
      speed: 1e3
    }), t(".photo-gall__wrap").slick({
      accessibility: !1,
      rows: 3,
      slidesToShow: 2,
      lazyLoad: "ondemand",
      responsive: [{
        breakpoint: 560,
        settings: {
          slidesToShow: 1
        }
      }]
    });
  }).call(this, n(0));
}, function (t, e, n) {
  var i, o, r;

  function s(t) {
    return (s = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    })(t);
  }

  !function (a) {
    "use strict";

    o = [n(0)], void 0 === (r = "function" == typeof (i = function i(t) {
      var e = window.Slick || {};
      (n = 0, e = function e(_e4, i) {
        var o,
            r = this;
        r.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: t(_e4),
          appendDots: t(_e4),
          arrows: !0,
          asNavFor: null,
          prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
          nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function customPaging(e, n) {
            return t('<button type="button" />').text(n + 1);
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
        }, r.initials = {
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
        }, t.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = t(_e4), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, o = t(_e4).data("slick") || {}, r.options = t.extend({}, r.defaults, i, o), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, void 0 !== document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = t.proxy(r.autoPlay, r), r.autoPlayClear = t.proxy(r.autoPlayClear, r), r.autoPlayIterator = t.proxy(r.autoPlayIterator, r), r.changeSlide = t.proxy(r.changeSlide, r), r.clickHandler = t.proxy(r.clickHandler, r), r.selectHandler = t.proxy(r.selectHandler, r), r.setPosition = t.proxy(r.setPosition, r), r.swipeHandler = t.proxy(r.swipeHandler, r), r.dragHandler = t.proxy(r.dragHandler, r), r.keyHandler = t.proxy(r.keyHandler, r), r.instanceUid = n++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0);
      }).prototype.activateADA = function () {
        this.$slideTrack.find(".slick-active").attr({
          "aria-hidden": "false"
        }).find("a, input, button, select").attr({
          tabindex: "0"
        });
      }, e.prototype.addSlide = e.prototype.slickAdd = function (e, n, i) {
        var o = this;
        if ("boolean" == typeof n) i = n, n = null;else if (n < 0 || n >= o.slideCount) return !1;
        o.unload(), "number" == typeof n ? 0 === n && 0 === o.$slides.length ? t(e).appendTo(o.$slideTrack) : i ? t(e).insertBefore(o.$slides.eq(n)) : t(e).insertAfter(o.$slides.eq(n)) : !0 === i ? t(e).prependTo(o.$slideTrack) : t(e).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function (e, n) {
          t(n).attr("data-slick-index", e);
        }), o.$slidesCache = o.$slides, o.reinit();
      }, e.prototype.animateHeight = function () {
        var t = this;

        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
          var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
          t.$list.animate({
            height: e
          }, t.options.speed);
        }
      }, e.prototype.animateSlide = function (e, n) {
        var i = {},
            o = this;
        o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (e = -e), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
          left: e
        }, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({
          top: e
        }, o.options.speed, o.options.easing, n) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), t({
          animStart: o.currentLeft
        }).animate({
          animStart: e
        }, {
          duration: o.options.speed,
          easing: o.options.easing,
          step: function step(t) {
            t = Math.ceil(t), !1 === o.options.vertical ? (i[o.animType] = "translate(" + t + "px, 0px)", o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + t + "px)", o.$slideTrack.css(i));
          },
          complete: function complete() {
            n && n.call();
          }
        })) : (o.applyTransition(), e = Math.ceil(e), !1 === o.options.vertical ? i[o.animType] = "translate3d(" + e + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + e + "px, 0px)", o.$slideTrack.css(i), n && setTimeout(function () {
          o.disableTransition(), n.call();
        }, o.options.speed));
      }, e.prototype.getNavTarget = function () {
        var e = this.options.asNavFor;
        return e && null !== e && (e = t(e).not(this.$slider)), e;
      }, e.prototype.asNavFor = function (e) {
        var n = this.getNavTarget();
        null !== n && "object" === s(n) && n.each(function () {
          var n = t(this).slick("getSlick");
          n.unslicked || n.slideHandler(e, !0);
        });
      }, e.prototype.applyTransition = function (t) {
        var e = this,
            n = {};
        !1 === e.options.fade ? n[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : n[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n);
      }, e.prototype.autoPlay = function () {
        var t = this;
        t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed));
      }, e.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer);
      }, e.prototype.autoPlayIterator = function () {
        var t = this,
            e = t.currentSlide + t.options.slidesToScroll;
        t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e));
      }, e.prototype.buildArrows = function () {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
          "aria-disabled": "true",
          tabindex: "-1"
        }));
      }, e.prototype.buildDots = function () {
        var e,
            n,
            i = this;

        if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
          for (i.$slider.addClass("slick-dotted"), n = t("<ul />").addClass(i.options.dotsClass), e = 0; e <= i.getDotCount(); e += 1) {
            n.append(t("<li />").append(i.options.customPaging.call(this, i, e)));
          }

          i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active");
        }
      }, e.prototype.buildOut = function () {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, n) {
          t(n).attr("data-slick-index", e).data("originalStyling", t(n).attr("style") || "");
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable");
      }, e.prototype.buildRows = function () {
        var t,
            e,
            n,
            i,
            o,
            r,
            s,
            a = this;

        if (i = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 0) {
          for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), t = 0; t < o; t++) {
            var l = document.createElement("div");

            for (e = 0; e < a.options.rows; e++) {
              var c = document.createElement("div");

              for (n = 0; n < a.options.slidesPerRow; n++) {
                var u = t * s + (e * a.options.slidesPerRow + n);
                r.get(u) && c.appendChild(r.get(u));
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
      }, e.prototype.checkResponsive = function (e, n) {
        var i,
            o,
            r,
            s = this,
            a = !1,
            l = s.$slider.width(),
            c = window.innerWidth || t(window).width();

        if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
          for (i in o = null, s.breakpoints) {
            s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[i] && (o = s.breakpoints[i]) : r > s.breakpoints[i] && (o = s.breakpoints[i]));
          }

          null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || n) && (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)), a = o) : (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e), a = o), e || !1 === a || s.$slider.trigger("breakpoint", [s, a]);
        }
      }, e.prototype.changeSlide = function (e, n) {
        var i,
            o,
            r = this,
            s = t(e.currentTarget);

        switch (s.is("a") && e.preventDefault(), s.is("li") || (s = s.closest("li")), i = r.slideCount % r.options.slidesToScroll != 0 ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
          case "previous":
            o = 0 === i ? r.options.slidesToScroll : r.options.slidesToShow - i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, n);
            break;

          case "next":
            o = 0 === i ? r.options.slidesToScroll : i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, n);
            break;

          case "index":
            var a = 0 === e.data.index ? 0 : e.data.index || s.index() * r.options.slidesToScroll;
            r.slideHandler(r.checkNavigable(a), !1, n), s.children().trigger("focus");
            break;

          default:
            return;
        }
      }, e.prototype.checkNavigable = function (t) {
        var e, n;
        if (n = 0, t > (e = this.getNavigableIndexes())[e.length - 1]) t = e[e.length - 1];else for (var i in e) {
          if (t < e[i]) {
            t = n;
            break;
          }

          n = e[i];
        }
        return t;
      }, e.prototype.cleanUpEvents = function () {
        var e = this;
        e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
      }, e.prototype.cleanUpSlideEvents = function () {
        var e = this;
        e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1));
      }, e.prototype.cleanUpRows = function () {
        var t,
            e = this;
        e.options.rows > 0 && ((t = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(t));
      }, e.prototype.clickHandler = function (t) {
        !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault());
      }, e.prototype.destroy = function (e) {
        var n = this;
        n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), t(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
          t(this).attr("style", t(this).data("originalStyling"));
        }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, e || n.$slider.trigger("destroy", [n]);
      }, e.prototype.disableTransition = function (t) {
        var e = this,
            n = {};
        n[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n);
      }, e.prototype.fadeSlide = function (t, e) {
        var n = this;
        !1 === n.cssTransitions ? (n.$slides.eq(t).css({
          zIndex: n.options.zIndex
        }), n.$slides.eq(t).animate({
          opacity: 1
        }, n.options.speed, n.options.easing, e)) : (n.applyTransition(t), n.$slides.eq(t).css({
          opacity: 1,
          zIndex: n.options.zIndex
        }), e && setTimeout(function () {
          n.disableTransition(t), e.call();
        }, n.options.speed));
      }, e.prototype.fadeSlideOut = function (t) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(t).animate({
          opacity: 0,
          zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
          opacity: 0,
          zIndex: e.options.zIndex - 2
        }));
      }, e.prototype.filterSlides = e.prototype.slickFilter = function (t) {
        var e = this;
        null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit());
      }, e.prototype.focusHandler = function () {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick", "*", function (n) {
          var i = t(this);
          setTimeout(function () {
            e.options.pauseOnFocus && i.is(":focus") && (e.focussed = !0, e.autoPlay());
          }, 0);
        }).on("blur.slick", "*", function (n) {
          t(this);
          e.options.pauseOnFocus && (e.focussed = !1, e.autoPlay());
        });
      }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
        return this.currentSlide;
      }, e.prototype.getDotCount = function () {
        var t = this,
            e = 0,
            n = 0,
            i = 0;
        if (!0 === t.options.infinite) {
          if (t.slideCount <= t.options.slidesToShow) ++i;else for (; e < t.slideCount;) {
            ++i, e = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
          }
        } else if (!0 === t.options.centerMode) i = t.slideCount;else if (t.options.asNavFor) for (; e < t.slideCount;) {
          ++i, e = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        } else i = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
        return i - 1;
      }, e.prototype.getLeft = function (t) {
        var e,
            n,
            i,
            o,
            r = this,
            s = 0;
        return r.slideOffset = 0, n = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = -1, !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? o = -1.5 : 1 === r.options.slidesToShow && (o = -2)), s = n * r.options.slidesToShow * o), r.slideCount % r.options.slidesToScroll != 0 && t + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (t > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (t - r.slideCount)) * r.slideWidth * -1, s = (r.options.slidesToShow - (t - r.slideCount)) * n * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, s = r.slideCount % r.options.slidesToScroll * n * -1))) : t + r.options.slidesToShow > r.slideCount && (r.slideOffset = (t + r.options.slidesToShow - r.slideCount) * r.slideWidth, s = (t + r.options.slidesToShow - r.slideCount) * n), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, s = 0), !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), e = !1 === r.options.vertical ? t * r.slideWidth * -1 + r.slideOffset : t * n * -1 + s, !0 === r.options.variableWidth && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(t) : r.$slideTrack.children(".slick-slide").eq(t + r.options.slidesToShow), e = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === r.options.centerMode && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(t) : r.$slideTrack.children(".slick-slide").eq(t + r.options.slidesToShow + 1), e = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, e += (r.$list.width() - i.outerWidth()) / 2)), e;
      }, e.prototype.getOption = e.prototype.slickGetOption = function (t) {
        return this.options[t];
      }, e.prototype.getNavigableIndexes = function () {
        var t,
            e = this,
            n = 0,
            i = 0,
            o = [];

        for (!1 === e.options.infinite ? t = e.slideCount : (n = -1 * e.options.slidesToScroll, i = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); n < t;) {
          o.push(n), n = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        }

        return o;
      }, e.prototype.getSlick = function () {
        return this;
      }, e.prototype.getSlideCount = function () {
        var e,
            n,
            i,
            o = this;
        return i = !0 === o.options.centerMode ? Math.floor(o.$list.width() / 2) : 0, n = -1 * o.swipeLeft + i, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (i, r) {
          var s, a;
          if (s = t(r).outerWidth(), a = r.offsetLeft, !0 !== o.options.centerMode && (a += s / 2), n < a + s) return e = r, !1;
        }), Math.abs(t(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll;
      }, e.prototype.goTo = e.prototype.slickGoTo = function (t, e) {
        this.changeSlide({
          data: {
            message: "index",
            index: parseInt(t)
          }
        }, e);
      }, e.prototype.init = function (e) {
        var n = this;
        t(n.$slider).hasClass("slick-initialized") || (t(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), e && n.$slider.trigger("init", [n]), !0 === n.options.accessibility && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay());
      }, e.prototype.initADA = function () {
        var e = this,
            n = Math.ceil(e.slideCount / e.options.slidesToShow),
            i = e.getNavigableIndexes().filter(function (t) {
          return t >= 0 && t < e.slideCount;
        });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
          "aria-hidden": "true",
          tabindex: "-1"
        }).find("a, input, button, select").attr({
          tabindex: "-1"
        }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (n) {
          var o = i.indexOf(n);

          if (t(this).attr({
            role: "tabpanel",
            id: "slick-slide" + e.instanceUid + n,
            tabindex: -1
          }), -1 !== o) {
            var r = "slick-slide-control" + e.instanceUid + o;
            t("#" + r).length && t(this).attr({
              "aria-describedby": r
            });
          }
        }), e.$dots.attr("role", "tablist").find("li").each(function (o) {
          var r = i[o];
          t(this).attr({
            role: "presentation"
          }), t(this).find("button").first().attr({
            role: "tab",
            id: "slick-slide-control" + e.instanceUid + o,
            "aria-controls": "slick-slide" + e.instanceUid + r,
            "aria-label": o + 1 + " of " + n,
            "aria-selected": null,
            tabindex: "-1"
          });
        }).eq(e.currentSlide).find("button").attr({
          "aria-selected": "true",
          tabindex: "0"
        }).end());

        for (var o = e.currentSlide, r = o + e.options.slidesToShow; o < r; o++) {
          e.options.focusOnChange ? e.$slides.eq(o).attr({
            tabindex: "0"
          }) : e.$slides.eq(o).removeAttr("tabindex");
        }

        e.activateADA();
      }, e.prototype.initArrowEvents = function () {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
          message: "previous"
        }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
          message: "next"
        }, t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler), t.$nextArrow.on("keydown.slick", t.keyHandler)));
      }, e.prototype.initDotEvents = function () {
        var e = this;
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && (t("li", e.$dots).on("click.slick", {
          message: "index"
        }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1));
      }, e.prototype.initSlideEvents = function () {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)));
      }, e.prototype.initializeEvents = function () {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
          action: "start"
        }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
          action: "move"
        }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
          action: "end"
        }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
          action: "end"
        }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(e.setPosition);
      }, e.prototype.initUI = function () {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show();
      }, e.prototype.keyHandler = function (t) {
        var e = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({
          data: {
            message: !0 === e.options.rtl ? "next" : "previous"
          }
        }) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({
          data: {
            message: !0 === e.options.rtl ? "previous" : "next"
          }
        }));
      }, e.prototype.lazyLoad = function () {
        var e,
            n,
            i,
            o = this;

        function r(e) {
          t("img[data-lazy]", e).each(function () {
            var e = t(this),
                n = t(this).attr("data-lazy"),
                i = t(this).attr("data-srcset"),
                r = t(this).attr("data-sizes") || o.$slider.attr("data-sizes"),
                s = document.createElement("img");
            s.onload = function () {
              e.animate({
                opacity: 0
              }, 100, function () {
                i && (e.attr("srcset", i), r && e.attr("sizes", r)), e.attr("src", n).animate({
                  opacity: 1
                }, 200, function () {
                  e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                }), o.$slider.trigger("lazyLoaded", [o, e, n]);
              });
            }, s.onerror = function () {
              e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, e, n]);
            }, s.src = n;
          });
        }

        if (!0 === o.options.centerMode ? !0 === o.options.infinite ? i = (n = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (n = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), i = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (n = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, i = Math.ceil(n + o.options.slidesToShow), !0 === o.options.fade && (n > 0 && n--, i <= o.slideCount && i++)), e = o.$slider.find(".slick-slide").slice(n, i), "anticipated" === o.options.lazyLoad) for (var s = n - 1, a = i, l = o.$slider.find(".slick-slide"), c = 0; c < o.options.slidesToScroll; c++) {
          s < 0 && (s = o.slideCount - 1), e = (e = e.add(l.eq(s))).add(l.eq(a)), s--, a++;
        }
        r(e), o.slideCount <= o.options.slidesToShow ? r(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? r(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && r(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow));
      }, e.prototype.loadSlider = function () {
        var t = this;
        t.setPosition(), t.$slideTrack.css({
          opacity: 1
        }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad();
      }, e.prototype.next = e.prototype.slickNext = function () {
        this.changeSlide({
          data: {
            message: "next"
          }
        });
      }, e.prototype.orientationChange = function () {
        this.checkResponsive(), this.setPosition();
      }, e.prototype.pause = e.prototype.slickPause = function () {
        this.autoPlayClear(), this.paused = !0;
      }, e.prototype.play = e.prototype.slickPlay = function () {
        var t = this;
        t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1;
      }, e.prototype.postSlide = function (e) {
        var n = this;
        n.unslicked || (n.$slider.trigger("afterChange", [n, e]), n.animating = !1, n.slideCount > n.options.slidesToShow && n.setPosition(), n.swipeLeft = null, n.options.autoplay && n.autoPlay(), !0 === n.options.accessibility && (n.initADA(), n.options.focusOnChange && t(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()));
      }, e.prototype.prev = e.prototype.slickPrev = function () {
        this.changeSlide({
          data: {
            message: "previous"
          }
        });
      }, e.prototype.preventDefault = function (t) {
        t.preventDefault();
      }, e.prototype.progressiveLazyLoad = function (e) {
        e = e || 1;
        var n,
            i,
            o,
            r,
            s,
            a = this,
            l = t("img[data-lazy]", a.$slider);
        l.length ? (n = l.first(), i = n.attr("data-lazy"), o = n.attr("data-srcset"), r = n.attr("data-sizes") || a.$slider.attr("data-sizes"), (s = document.createElement("img")).onload = function () {
          o && (n.attr("srcset", o), r && n.attr("sizes", r)), n.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, n, i]), a.progressiveLazyLoad();
        }, s.onerror = function () {
          e < 3 ? setTimeout(function () {
            a.progressiveLazyLoad(e + 1);
          }, 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, n, i]), a.progressiveLazyLoad());
        }, s.src = i) : a.$slider.trigger("allImagesLoaded", [a]);
      }, e.prototype.refresh = function (e) {
        var n,
            i,
            o = this;
        i = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > i && (o.currentSlide = i), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), n = o.currentSlide, o.destroy(!0), t.extend(o, o.initials, {
          currentSlide: n
        }), o.init(), e || o.changeSlide({
          data: {
            message: "index",
            index: n
          }
        }, !1);
      }, e.prototype.registerBreakpoints = function () {
        var e,
            n,
            i,
            o = this,
            r = o.options.responsive || null;

        if ("array" === t.type(r) && r.length) {
          for (e in o.respondTo = o.options.respondTo || "window", r) {
            if (i = o.breakpoints.length - 1, r.hasOwnProperty(e)) {
              for (n = r[e].breakpoint; i >= 0;) {
                o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1), i--;
              }

              o.breakpoints.push(n), o.breakpointSettings[n] = r[e].settings;
            }
          }

          o.breakpoints.sort(function (t, e) {
            return o.options.mobileFirst ? t - e : e - t;
          });
        }
      }, e.prototype.reinit = function () {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e]);
      }, e.prototype.resize = function () {
        var e = this;
        t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
          e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition();
        }, 50));
      }, e.prototype.removeSlide = e.prototype.slickRemove = function (t, e, n) {
        var i = this;
        if (t = "boolean" == typeof t ? !0 === (e = t) ? 0 : i.slideCount - 1 : !0 === e ? --t : t, i.slideCount < 1 || t < 0 || t > i.slideCount - 1) return !1;
        i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(t).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit();
      }, e.prototype.setCSS = function (t) {
        var e,
            n,
            i = this,
            o = {};
        !0 === i.options.rtl && (t = -t), e = "left" == i.positionProp ? Math.ceil(t) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(t) + "px" : "0px", o[i.positionProp] = t, !1 === i.transformsEnabled ? i.$slideTrack.css(o) : (o = {}, !1 === i.cssTransitions ? (o[i.animType] = "translate(" + e + ", " + n + ")", i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + e + ", " + n + ", 0px)", i.$slideTrack.css(o)));
      }, e.prototype.setDimensions = function () {
        var t = this;
        !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
          padding: "0px " + t.options.centerPadding
        }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({
          padding: t.options.centerPadding + " 0px"
        })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e);
      }, e.prototype.setFade = function () {
        var e,
            n = this;
        n.$slides.each(function (i, o) {
          e = n.slideWidth * i * -1, !0 === n.options.rtl ? t(o).css({
            position: "relative",
            right: e,
            top: 0,
            zIndex: n.options.zIndex - 2,
            opacity: 0
          }) : t(o).css({
            position: "relative",
            left: e,
            top: 0,
            zIndex: n.options.zIndex - 2,
            opacity: 0
          });
        }), n.$slides.eq(n.currentSlide).css({
          zIndex: n.options.zIndex - 1,
          opacity: 1
        });
      }, e.prototype.setHeight = function () {
        var t = this;

        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
          var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
          t.$list.css("height", e);
        }
      }, e.prototype.setOption = e.prototype.slickSetOption = function () {
        var e,
            n,
            i,
            o,
            r,
            s = this,
            a = !1;
        if ("object" === t.type(arguments[0]) ? (i = arguments[0], a = arguments[1], r = "multiple") : "string" === t.type(arguments[0]) && (i = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r) s.options[i] = o;else if ("multiple" === r) t.each(i, function (t, e) {
          s.options[t] = e;
        });else if ("responsive" === r) for (n in o) {
          if ("array" !== t.type(s.options.responsive)) s.options.responsive = [o[n]];else {
            for (e = s.options.responsive.length - 1; e >= 0;) {
              s.options.responsive[e].breakpoint === o[n].breakpoint && s.options.responsive.splice(e, 1), e--;
            }

            s.options.responsive.push(o[n]);
          }
        }
        a && (s.unload(), s.reinit());
      }, e.prototype.setPosition = function () {
        var t = this;
        t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t]);
      }, e.prototype.setProps = function () {
        var t = this,
            e = document.body.style;
        t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType;
      }, e.prototype.setSlideClasses = function (t) {
        var e,
            n,
            i,
            o,
            r = this;

        if (n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(t).addClass("slick-current"), !0 === r.options.centerMode) {
          var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
          e = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (t >= e && t <= r.slideCount - 1 - e ? r.$slides.slice(t - e + s, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + t, n.slice(i - e + 1 + s, i + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : t === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(t).addClass("slick-center");
        } else t >= 0 && t <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(t, t + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, i = !0 === r.options.infinite ? r.options.slidesToShow + t : t, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - t < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));

        "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad();
      }, e.prototype.setupInfinite = function () {
        var e,
            n,
            i,
            o = this;

        if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (n = null, o.slideCount > o.options.slidesToShow)) {
          for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, e = o.slideCount; e > o.slideCount - i; e -= 1) {
            n = e - 1, t(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
          }

          for (e = 0; e < i + o.slideCount; e += 1) {
            n = e, t(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
          }

          o.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
            t(this).attr("id", "");
          });
        }
      }, e.prototype.interrupt = function (t) {
        t || this.autoPlay(), this.interrupted = t;
      }, e.prototype.selectHandler = function (e) {
        var n = this,
            i = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
            o = parseInt(i.attr("data-slick-index"));
        o || (o = 0), n.slideCount <= n.options.slidesToShow ? n.slideHandler(o, !1, !0) : n.slideHandler(o);
      }, e.prototype.slideHandler = function (t, e, n) {
        var i,
            o,
            r,
            s,
            a,
            l,
            c = this;
        if (e = e || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === t)) if (!1 === e && c.asNavFor(t), i = t, a = c.getLeft(i), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(s, function () {
          c.postSlide(i);
        }) : c.postSlide(i));else if (!1 === c.options.infinite && !0 === c.options.centerMode && (t < 0 || t > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(s, function () {
          c.postSlide(i);
        }) : c.postSlide(i));else {
          if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = i < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), r = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (l = (l = c.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== n ? (c.fadeSlideOut(r), c.fadeSlide(o, function () {
            c.postSlide(o);
          })) : c.postSlide(o), void c.animateHeight();
          !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(a, function () {
            c.postSlide(o);
          }) : c.postSlide(o);
        }
      }, e.prototype.startLoad = function () {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading");
      }, e.prototype.swipeDirection = function () {
        var t,
            e,
            n,
            i,
            o = this;
        return t = o.touchObject.startX - o.touchObject.curX, e = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(e, t), (i = Math.round(180 * n / Math.PI)) < 0 && (i = 360 - Math.abs(i)), i <= 45 && i >= 0 || i <= 360 && i >= 315 ? !1 === o.options.rtl ? "left" : "right" : i >= 135 && i <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? i >= 35 && i <= 135 ? "down" : "up" : "vertical";
      }, e.prototype.swipeEnd = function (t) {
        var e,
            n,
            i = this;
        if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1, !1;
        if (i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1;

        if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
          switch (n = i.swipeDirection()) {
            case "left":
            case "down":
              e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
              break;

            case "right":
            case "up":
              e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1;
          }

          "vertical" != n && (i.slideHandler(e), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]));
        } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {});
      }, e.prototype.swipeHandler = function (t) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
          case "start":
            e.swipeStart(t);
            break;

          case "move":
            e.swipeMove(t);
            break;

          case "end":
            e.swipeEnd(t);
        }
      }, e.prototype.swipeMove = function (t) {
        var e,
            n,
            i,
            o,
            r,
            s,
            a = this;
        return r = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!a.dragging || a.scrolling || r && 1 !== r.length) && (e = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== r ? r[0].pageX : t.clientX, a.touchObject.curY = void 0 !== r ? r[0].pageY : t.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && s > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s), n = a.swipeDirection(), void 0 !== t.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, t.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), i = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (i = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = e + i * o : a.swipeLeft = e + i * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = e + i * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))));
      }, e.prototype.swipeStart = function (t) {
        var e,
            n = this;
        if (n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return n.touchObject = {}, !1;
        void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, n.dragging = !0;
      }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
        var t = this;
        null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit());
      }, e.prototype.unload = function () {
        var e = this;
        t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
      }, e.prototype.unslick = function (t) {
        var e = this;
        e.$slider.trigger("unslick", [e, t]), e.destroy();
      }, e.prototype.updateArrows = function () {
        var t = this;
        Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode || t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode) && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
      }, e.prototype.updateDots = function () {
        var t = this;
        null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").end(), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active"));
      }, e.prototype.visibility = function () {
        var t = this;
        t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1);
      }, t.fn.slick = function () {
        var t,
            n,
            i = this,
            o = arguments[0],
            r = Array.prototype.slice.call(arguments, 1),
            a = i.length;

        for (t = 0; t < a; t++) {
          if ("object" == s(o) || void 0 === o ? i[t].slick = new e(i[t], o) : n = i[t].slick[o].apply(i[t].slick, r), void 0 !== n) return n;
        }

        return i;
      };
      var n;
    }) ? i.apply(e, o) : i) || (t.exports = r);
  }();
}, function (t, e, n) {
  "use strict";

  (function (t) {
    n(1);
    t(".fancy-gall").fancybox({
      thumbs: {
        autoStart: !0,
        axis: "x"
      }
    }), t(".fancybox").fancybox({});
  }).call(this, n(0));
}, function (t, e, n) {
  "use strict";

  (function (t) {
    n(1);
    t(".fancyform").fancybox({});
  }).call(this, n(0));
}, function (t, e, n) {
  "use strict";

  n.r(e);
  var i = n(2),
      o = n.n(i);
  n(3), n(6), n(8), n(9);

  function r(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  function s(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
  }
  /*!
   * GSAP 3.3.1
   * https://greensock.com
   *
   * @license Copyright 2008-2020, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */


  var a,
      l,
      c,
      u,
      d,
      p,
      f,
      h,
      g,
      v,
      m,
      y,
      b,
      x,
      w,
      T,
      S,
      k,
      C,
      _,
      $,
      A,
      P,
      E,
      O,
      M = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  },
      D = {
    duration: .5,
    overwrite: !1,
    delay: 0
  },
      L = 1e8,
      j = 2 * Math.PI,
      H = j / 4,
      N = 0,
      z = Math.sqrt,
      I = Math.cos,
      F = Math.sin,
      q = function q(t) {
    return "string" == typeof t;
  },
      R = function R(t) {
    return "function" == typeof t;
  },
      B = function B(t) {
    return "number" == typeof t;
  },
      W = function W(t) {
    return void 0 === t;
  },
      X = function X(t) {
    return "object" == _typeof(t);
  },
      Y = function Y(t) {
    return !1 !== t;
  },
      U = function U() {
    return "undefined" != typeof window;
  },
      V = function V(t) {
    return R(t) || q(t);
  },
      G = Array.isArray,
      Z = /(?:-?\.?\d|\.)+/gi,
      K = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
      Q = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      J = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
      tt = /\(([^()]+)\)/i,
      et = /[+-]=-?[\.\d]+/,
      nt = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
      it = {},
      ot = {},
      rt = function rt(t) {
    return (ot = Ot(t, it)) && fn;
  },
      st = function st(t, e) {
    return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
  },
      at = function at(t, e) {
    return !e && console.warn(t);
  },
      lt = function lt(t, e) {
    return t && (it[t] = e) && ot && (ot[t] = e) || it;
  },
      ct = function ct() {
    return 0;
  },
      ut = {},
      dt = [],
      pt = {},
      ft = {},
      ht = {},
      gt = 30,
      vt = [],
      mt = "",
      yt = function yt(t) {
    var e,
        n,
        i = t[0];

    if (X(i) || R(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
      for (n = vt.length; n-- && !vt[n].targetTest(i);) {
        ;
      }

      e = vt[n];
    }

    for (n = t.length; n--;) {
      t[n] && (t[n]._gsap || (t[n]._gsap = new Ne(t[n], e))) || t.splice(n, 1);
    }

    return t;
  },
      bt = function bt(t) {
    return t._gsap || yt(ie(t))[0]._gsap;
  },
      xt = function xt(t, e) {
    var n = t[e];
    return R(n) ? t[e]() : W(n) && t.getAttribute(e) || n;
  },
      wt = function wt(t, e) {
    return (t = t.split(",")).forEach(e) || t;
  },
      Tt = function Tt(t) {
    return Math.round(1e5 * t) / 1e5 || 0;
  },
      St = function St(t, e) {
    for (var n = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < n;) {
      ;
    }

    return i < n;
  },
      kt = function kt(t, e, n) {
    var i,
        o = B(t[1]),
        r = (o ? 2 : 1) + (e < 2 ? 0 : 1),
        s = t[r];

    if (o && (s.duration = t[1]), s.parent = n, e) {
      for (i = s; n && !("immediateRender" in i);) {
        i = n.vars.defaults || {}, n = Y(n.vars.inherit) && n.parent;
      }

      s.immediateRender = Y(i.immediateRender), e < 2 ? s.runBackwards = 1 : s.startAt = t[r - 1];
    }

    return s;
  },
      Ct = function Ct() {
    var t,
        e,
        n = dt.length,
        i = dt.slice(0);

    for (pt = {}, dt.length = 0, t = 0; t < n; t++) {
      (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
    }
  },
      _t = function _t(t, e, n, i) {
    dt.length && Ct(), t.render(e, n, i), dt.length && Ct();
  },
      $t = function $t(t) {
    var e = parseFloat(t);
    return (e || 0 === e) && (t + "").match(nt).length < 2 ? e : t;
  },
      At = function At(t) {
    return t;
  },
      Pt = function Pt(t, e) {
    for (var n in e) {
      n in t || (t[n] = e[n]);
    }

    return t;
  },
      Et = function Et(t, e) {
    for (var n in e) {
      n in t || "duration" === n || "ease" === n || (t[n] = e[n]);
    }
  },
      Ot = function Ot(t, e) {
    for (var n in e) {
      t[n] = e[n];
    }

    return t;
  },
      Mt = function t(e, n) {
    for (var i in n) {
      e[i] = X(n[i]) ? t(e[i] || (e[i] = {}), n[i]) : n[i];
    }

    return e;
  },
      Dt = function Dt(t, e) {
    var n,
        i = {};

    for (n in t) {
      n in e || (i[n] = t[n]);
    }

    return i;
  },
      Lt = function Lt(t) {
    var e = t.parent || a,
        n = t.keyframes ? Et : Pt;
    if (Y(t.inherit)) for (; e;) {
      n(t, e.vars.defaults), e = e.parent || e._dp;
    }
    return t;
  },
      jt = function jt(t, e, n, i) {
    void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
    var o = e._prev,
        r = e._next;
    o ? o._next = r : t[n] === e && (t[n] = r), r ? r._prev = o : t[i] === e && (t[i] = o), e._next = e._prev = e.parent = null;
  },
      Ht = function Ht(t, e) {
    !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0;
  },
      Nt = function Nt(t) {
    for (var e = t; e;) {
      e._dirty = 1, e = e.parent;
    }

    return t;
  },
      zt = function zt(t) {
    for (var e = t.parent; e && e.parent;) {
      e._dirty = 1, e.totalDuration(), e = e.parent;
    }

    return t;
  },
      It = function It(t) {
    return t._repeat ? Ft(t._tTime, t = t.duration() + t._rDelay) * t : 0;
  },
      Ft = function Ft(t, e) {
    return (t /= e) && ~~t === t ? ~~t - 1 : ~~t;
  },
      qt = function qt(t, e) {
    return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
  },
      Rt = function Rt(t) {
    return t._end = Tt(t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0));
  },
      Bt = function Bt(t, e) {
    var n;

    if ((e._time || e._initted && !e._dur) && (n = qt(t.rawTime(), e), (!e._dur || Qt(0, e.totalDuration(), n) - e._tTime > 1e-8) && e.render(n, !0)), Nt(t)._dp && t._initted && t._time >= t._dur && t._ts) {
      if (t._dur < t.duration()) for (n = t; n._dp;) {
        n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
      }
      t._zTime = -1e-8;
    }
  },
      Wt = function Wt(t, e, n, i) {
    return e.parent && Ht(e), e._start = Tt(n + e._delay), e._end = Tt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), function (t, e, n, i, o) {
      void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
      var r,
          s = t[i];
      if (o) for (r = e[o]; s && s[o] > r;) {
        s = s._prev;
      }
      s ? (e._next = s._next, s._next = e) : (e._next = t[n], t[n] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t;
    }(t, e, "_first", "_last", t._sort ? "_start" : 0), t._recent = e, i || Bt(t, e), t;
  },
      Xt = function Xt(t, e) {
    return (it.ScrollTrigger || st("scrollTrigger", e)) && it.ScrollTrigger.create(e, t);
  },
      Yt = function Yt(t, e, n, i) {
    return We(t, e), t._initted ? !n && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && p !== ke.frame ? (dt.push(t), t._lazy = [e, i], 1) : void 0 : 1;
  },
      Ut = function Ut(t, e, n) {
    var i = t._repeat,
        o = Tt(e) || 0;
    return t._dur = o, t._tDur = i ? i < 0 ? 1e10 : Tt(o * (i + 1) + t._rDelay * i) : o, t._time > o && (t._time = o, t._tTime = Math.min(t._tTime, t._tDur)), !n && Nt(t.parent), t.parent && Rt(t), t;
  },
      Vt = function Vt(t) {
    return t instanceof Ie ? Nt(t) : Ut(t, t._dur);
  },
      Gt = {
    _start: 0,
    endTime: ct
  },
      Zt = function t(e, n) {
    var i,
        o,
        r = e.labels,
        s = e._recent || Gt,
        a = e.duration() >= L ? s.endTime(!1) : e._dur;
    return q(n) && (isNaN(n) || n in r) ? "<" === (i = n.charAt(0)) || ">" === i ? ("<" === i ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) : (i = n.indexOf("=")) < 0 ? (n in r || (r[n] = a), r[n]) : (o = +(n.charAt(i - 1) + n.substr(i + 1)), i > 1 ? t(e, n.substr(0, i - 1)) + o : a + o) : null == n ? a : +n;
  },
      Kt = function Kt(t, e) {
    return t || 0 === t ? e(t) : e;
  },
      Qt = function Qt(t, e, n) {
    return n < t ? t : n > e ? e : n;
  },
      Jt = function Jt(t) {
    return (t + "").substr((parseFloat(t) + "").length);
  },
      te = [].slice,
      ee = function ee(t, e) {
    return t && X(t) && "length" in t && (!e && !t.length || t.length - 1 in t && X(t[0])) && !t.nodeType && t !== l;
  },
      ne = function ne(t, e, n) {
    return void 0 === n && (n = []), t.forEach(function (t) {
      var i;
      return q(t) && !e || ee(t, 1) ? (i = n).push.apply(i, ie(t)) : n.push(t);
    }) || n;
  },
      ie = function ie(t, e) {
    return !q(t) || e || !c && Ce() ? G(t) ? ne(t, e) : ee(t) ? te.call(t, 0) : t ? [t] : [] : te.call(u.querySelectorAll(t), 0);
  },
      oe = function oe(t) {
    return t.sort(function () {
      return .5 - Math.random();
    });
  },
      re = function re(t) {
    if (R(t)) return t;
    var e = X(t) ? t : {
      each: t
    },
        n = Me(e.ease),
        i = e.from || 0,
        o = parseFloat(e.base) || 0,
        r = {},
        s = i > 0 && i < 1,
        a = isNaN(i) || s,
        l = e.axis,
        c = i,
        u = i;
    return q(i) ? c = u = {
      center: .5,
      edges: .5,
      end: 1
    }[i] || 0 : !s && a && (c = i[0], u = i[1]), function (t, s, d) {
      var p,
          f,
          h,
          g,
          v,
          m,
          y,
          b,
          x,
          w = (d || e).length,
          T = r[w];

      if (!T) {
        if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, L])[1])) {
          for (y = -L; y < (y = d[x++].getBoundingClientRect().left) && x < w;) {
            ;
          }

          x--;
        }

        for (T = r[w] = [], p = a ? Math.min(x, w) * c - .5 : i % x, f = a ? w * u / x - .5 : i / x | 0, y = 0, b = L, m = 0; m < w; m++) {
          h = m % x - p, g = f - (m / x | 0), T[m] = v = l ? Math.abs("y" === l ? g : h) : z(h * h + g * g), v > y && (y = v), v < b && (b = v);
        }

        "random" === i && oe(T), T.max = y - b, T.min = b, T.v = w = (parseFloat(e.amount) || parseFloat(e.each) * (x > w ? w - 1 : l ? "y" === l ? w / x : x : Math.max(x, w / x)) || 0) * ("edges" === i ? -1 : 1), T.b = w < 0 ? o - w : o, T.u = Jt(e.amount || e.each) || 0, n = n && w < 0 ? Ee(n) : n;
      }

      return w = (T[t] - T.min) / T.max || 0, Tt(T.b + (n ? n(w) : w) * T.v) + T.u;
    };
  },
      se = function se(t) {
    var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
    return function (n) {
      return Math.floor(Math.round(parseFloat(n) / t) * t * e) / e + (B(n) ? 0 : Jt(n));
    };
  },
      ae = function ae(t, e) {
    var n,
        i,
        o = G(t);
    return !o && X(t) && (n = o = t.radius || L, t.values ? (t = ie(t.values), (i = !B(t[0])) && (n *= n)) : t = se(t.increment)), Kt(e, o ? R(t) ? function (e) {
      return i = t(e), Math.abs(i - e) <= n ? i : e;
    } : function (e) {
      for (var o, r, s = parseFloat(i ? e.x : e), a = parseFloat(i ? e.y : 0), l = L, c = 0, u = t.length; u--;) {
        (o = i ? (o = t[u].x - s) * o + (r = t[u].y - a) * r : Math.abs(t[u] - s)) < l && (l = o, c = u);
      }

      return c = !n || l <= n ? t[c] : e, i || c === e || B(e) ? c : c + Jt(e);
    } : se(t));
  },
      le = function le(t, e, n, i) {
    return Kt(G(t) ? !e : !0 === n ? !!(n = 0) : !i, function () {
      return G(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t + Math.random() * (e - t)) / n) * n * i) / i;
    });
  },
      ce = function ce(t, e, n) {
    return Kt(n, function (n) {
      return t[~~e(n)];
    });
  },
      ue = function ue(t) {
    for (var e, n, i, o, r = 0, s = ""; ~(e = t.indexOf("random(", r));) {
      i = t.indexOf(")", e), o = "[" === t.charAt(e + 7), n = t.substr(e + 7, i - e - 7).match(o ? nt : Z), s += t.substr(r, e - r) + le(o ? n : +n[0], +n[1], +n[2] || 1e-5), r = i + 1;
    }

    return s + t.substr(r, t.length - r);
  },
      de = function de(t, e, n, i, o) {
    var r = e - t,
        s = i - n;
    return Kt(o, function (e) {
      return n + ((e - t) / r * s || 0);
    });
  },
      pe = function pe(t, e, n) {
    var i,
        o,
        r,
        s = t.labels,
        a = L;

    for (i in s) {
      (o = s[i] - e) < 0 == !!n && o && a > (o = Math.abs(o)) && (r = i, a = o);
    }

    return r;
  },
      fe = function fe(t, e, n) {
    var i,
        o,
        r = t.vars,
        s = r[e];
    if (s) return i = r[e + "Params"], o = r.callbackScope || t, n && dt.length && Ct(), i ? s.apply(o, i) : s.call(o);
  },
      he = function he(t) {
    return Ht(t), t.progress() < 1 && fe(t, "onInterrupt"), t;
  },
      ge = function ge(t) {
    var e = (t = !t.name && t["default"] || t).name,
        n = R(t),
        i = e && !n && t.init ? function () {
      this._props = [];
    } : t,
        o = {
      init: ct,
      render: on,
      add: Re,
      kill: sn,
      modifier: rn,
      rawVars: 0
    },
        r = {
      targetTest: 0,
      get: 0,
      getSetter: Je,
      aliases: {},
      register: 0
    };

    if (Ce(), t !== i) {
      if (ft[e]) return;
      Pt(i, Pt(Dt(t, o), r)), Ot(i.prototype, Ot(o, Dt(t, r))), ft[i.prop = e] = i, t.targetTest && (vt.push(i), ut[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
    }

    lt(e, i), t.register && t.register(fn, i, cn);
  },
      ve = {
    aqua: [0, 255, 255],
    lime: [0, 255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, 255],
    navy: [0, 0, 128],
    white: [255, 255, 255],
    olive: [128, 128, 0],
    yellow: [255, 255, 0],
    orange: [255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [255, 0, 0],
    pink: [255, 192, 203],
    cyan: [0, 255, 255],
    transparent: [255, 255, 255, 0]
  },
      me = function me(t, e, n) {
    return 255 * (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (n - e) * t * 6 : t < .5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) + .5 | 0;
  },
      ye = function ye(t, e, n) {
    var i,
        o,
        r,
        s,
        a,
        l,
        c,
        u,
        d,
        p,
        f = t ? B(t) ? [t >> 16, t >> 8 & 255, 255 & t] : 0 : ve.black;

    if (!f) {
      if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ve[t]) f = ve[t];else if ("#" === t.charAt(0)) 4 === t.length && (i = t.charAt(1), o = t.charAt(2), r = t.charAt(3), t = "#" + i + i + o + o + r + r), f = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];else if ("hsl" === t.substr(0, 3)) {
        if (f = p = t.match(Z), e) {
          if (~t.indexOf("=")) return f = t.match(K), n && f.length < 4 && (f[3] = 1), f;
        } else s = +f[0] % 360 / 360, a = +f[1] / 100, i = 2 * (l = +f[2] / 100) - (o = l <= .5 ? l * (a + 1) : l + a - l * a), f.length > 3 && (f[3] *= 1), f[0] = me(s + 1 / 3, i, o), f[1] = me(s, i, o), f[2] = me(s - 1 / 3, i, o);
      } else f = t.match(Z) || ve.transparent;
      f = f.map(Number);
    }

    return e && !p && (i = f[0] / 255, o = f[1] / 255, r = f[2] / 255, l = ((c = Math.max(i, o, r)) + (u = Math.min(i, o, r))) / 2, c === u ? s = a = 0 : (d = c - u, a = l > .5 ? d / (2 - c - u) : d / (c + u), s = c === i ? (o - r) / d + (o < r ? 6 : 0) : c === o ? (r - i) / d + 2 : (i - o) / d + 4, s *= 60), f[0] = ~~(s + .5), f[1] = ~~(100 * a + .5), f[2] = ~~(100 * l + .5)), n && f.length < 4 && (f[3] = 1), f;
  },
      be = function be(t) {
    var e = [],
        n = [],
        i = -1;
    return t.split(we).forEach(function (t) {
      var o = t.match(Q) || [];
      e.push.apply(e, o), n.push(i += o.length + 1);
    }), e.c = n, e;
  },
      xe = function xe(t, e, n) {
    var i,
        o,
        r,
        s,
        a = "",
        l = (t + a).match(we),
        c = e ? "hsla(" : "rgba(",
        u = 0;
    if (!l) return t;
    if (l = l.map(function (t) {
      return (t = ye(t, e, 1)) && c + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")";
    }), n && (r = be(t), (i = n.c).join(a) !== r.c.join(a))) for (s = (o = t.replace(we, "1").split(Q)).length - 1; u < s; u++) {
      a += o[u] + (~i.indexOf(u) ? l.shift() || c + "0,0,0,0)" : (r.length ? r : l.length ? l : n).shift());
    }
    if (!o) for (s = (o = t.split(we)).length - 1; u < s; u++) {
      a += o[u] + l[u];
    }
    return a + o[s];
  },
      we = function () {
    var t,
        e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";

    for (t in ve) {
      e += "|" + t + "\\b";
    }

    return new RegExp(e + ")", "gi");
  }(),
      Te = /hsl[a]?\(/,
      Se = function Se(t) {
    var e,
        n = t.join(" ");
    if (we.lastIndex = 0, we.test(n)) return e = Te.test(n), t[1] = xe(t[1], e), t[0] = xe(t[0], e, be(t[1])), !0;
  },
      ke = (b = Date.now, x = 500, w = 33, T = b(), S = T, C = k = 1 / 240, $ = function t(e) {
    var n,
        i,
        o = b() - S,
        r = !0 === e;
    o > x && (T += o - w), S += o, y.time = (S - T) / 1e3, ((n = y.time - C) > 0 || r) && (y.frame++, C += n + (n >= k ? .004 : k - n), i = 1), r || (g = v(t)), i && _.forEach(function (t) {
      return t(y.time, o, y.frame, e);
    });
  }, y = {
    time: 0,
    frame: 0,
    tick: function tick() {
      $(!0);
    },
    wake: function wake() {
      d && (!c && U() && (l = c = window, u = l.document || {}, it.gsap = fn, (l.gsapVersions || (l.gsapVersions = [])).push(fn.version), rt(ot || l.GreenSockGlobals || !l.gsap && l || {}), m = l.requestAnimationFrame), g && y.sleep(), v = m || function (t) {
        return setTimeout(t, 1e3 * (C - y.time) + 1 | 0);
      }, h = 1, $(2));
    },
    sleep: function sleep() {
      (m ? l.cancelAnimationFrame : clearTimeout)(g), h = 0, v = ct;
    },
    lagSmoothing: function lagSmoothing(t, e) {
      x = t || 1 / 1e-8, w = Math.min(e, x, 0);
    },
    fps: function fps(t) {
      k = 1 / (t || 240), C = y.time + k;
    },
    add: function add(t) {
      _.indexOf(t) < 0 && _.push(t), Ce();
    },
    remove: function remove(t) {
      var e;
      ~(e = _.indexOf(t)) && _.splice(e, 1);
    },
    _listeners: _ = []
  }),
      Ce = function Ce() {
    return !h && ke.wake();
  },
      _e = {},
      $e = /^[\d.\-M][\d.\-,\s]/,
      Ae = /["']/g,
      Pe = function Pe(t) {
    for (var e, n, i, o = {}, r = t.substr(1, t.length - 3).split(":"), s = r[0], a = 1, l = r.length; a < l; a++) {
      n = r[a], e = a !== l - 1 ? n.lastIndexOf(",") : n.length, i = n.substr(0, e), o[s] = isNaN(i) ? i.replace(Ae, "").trim() : +i, s = n.substr(e + 1).trim();
    }

    return o;
  },
      Ee = function Ee(t) {
    return function (e) {
      return 1 - t(1 - e);
    };
  },
      Oe = function t(e, n) {
    for (var i, o = e._first; o;) {
      o instanceof Ie ? t(o, n) : !o.vars.yoyoEase || o._yoyo && o._repeat || o._yoyo === n || (o.timeline ? t(o.timeline, n) : (i = o._ease, o._ease = o._yEase, o._yEase = i, o._yoyo = n)), o = o._next;
    }
  },
      Me = function Me(t, e) {
    return t && (R(t) ? t : _e[t] || function (t) {
      var e = (t + "").split("("),
          n = _e[e[0]];
      return n && e.length > 1 && n.config ? n.config.apply(null, ~t.indexOf("{") ? [Pe(e[1])] : tt.exec(t)[1].split(",").map($t)) : _e._CE && $e.test(t) ? _e._CE("", t) : n;
    }(t)) || e;
  },
      De = function De(t, e, n, i) {
    void 0 === n && (n = function n(t) {
      return 1 - e(1 - t);
    }), void 0 === i && (i = function i(t) {
      return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
    });
    var o,
        r = {
      easeIn: e,
      easeOut: n,
      easeInOut: i
    };
    return wt(t, function (t) {
      for (var e in _e[t] = it[t] = r, _e[o = t.toLowerCase()] = n, r) {
        _e[o + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = _e[t + "." + e] = r[e];
      }
    }), r;
  },
      Le = function Le(t) {
    return function (e) {
      return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2;
    };
  },
      je = function t(e, n, i) {
    var o = n >= 1 ? n : 1,
        r = (i || (e ? .3 : .45)) / (n < 1 ? n : 1),
        s = r / j * (Math.asin(1 / o) || 0),
        a = function a(t) {
      return 1 === t ? 1 : o * Math.pow(2, -10 * t) * F((t - s) * r) + 1;
    },
        l = "out" === e ? a : "in" === e ? function (t) {
      return 1 - a(1 - t);
    } : Le(a);

    return r = j / r, l.config = function (n, i) {
      return t(e, n, i);
    }, l;
  },
      He = function t(e, n) {
    void 0 === n && (n = 1.70158);

    var i = function i(t) {
      return t ? --t * t * ((n + 1) * t + n) + 1 : 0;
    },
        o = "out" === e ? i : "in" === e ? function (t) {
      return 1 - i(1 - t);
    } : Le(i);

    return o.config = function (n) {
      return t(e, n);
    }, o;
  };

  wt("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var n = e < 5 ? e + 1 : e;
    De(t + ",Power" + (n - 1), e ? function (t) {
      return Math.pow(t, n);
    } : function (t) {
      return t;
    }, function (t) {
      return 1 - Math.pow(1 - t, n);
    }, function (t) {
      return t < .5 ? Math.pow(2 * t, n) / 2 : 1 - Math.pow(2 * (1 - t), n) / 2;
    });
  }), _e.Linear.easeNone = _e.none = _e.Linear.easeIn, De("Elastic", je("in"), je("out"), je()), A = 7.5625, E = 1 / (P = 2.75), De("Bounce", function (t) {
    return 1 - O(1 - t);
  }, O = function O(t) {
    return t < E ? A * t * t : t < .7272727272727273 ? A * Math.pow(t - 1.5 / P, 2) + .75 : t < .9090909090909092 ? A * (t -= 2.25 / P) * t + .9375 : A * Math.pow(t - 2.625 / P, 2) + .984375;
  }), De("Expo", function (t) {
    return t ? Math.pow(2, 10 * (t - 1)) : 0;
  }), De("Circ", function (t) {
    return -(z(1 - t * t) - 1);
  }), De("Sine", function (t) {
    return 1 === t ? 1 : 1 - I(t * H);
  }), De("Back", He("in"), He("out"), He()), _e.SteppedEase = _e.steps = it.SteppedEase = {
    config: function config(t, e) {
      void 0 === t && (t = 1);
      var n = 1 / t,
          i = t + (e ? 0 : 1),
          o = e ? 1 : 0;
      return function (t) {
        return ((i * Qt(0, 1 - 1e-8, t) | 0) + o) * n;
      };
    }
  }, D.ease = _e["quad.out"], wt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
    return mt += t + "," + t + "Params,";
  });

  var Ne = function Ne(t, e) {
    this.id = N++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : xt, this.set = e ? e.getSetter : Je;
  },
      ze = function () {
    function t(t, e) {
      var n = t.parent || a;
      this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ut(this, +t.duration, 1), this.data = t.data, h || ke.wake(), n && Wt(n, this, e || 0 === e ? e : n._time, 1), t.reversed && this.reverse(), t.paused && this.paused(!0);
    }

    var e = t.prototype;
    return e.delay = function (t) {
      return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay;
    }, e.duration = function (t) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
    }, e.totalDuration = function (t) {
      return arguments.length ? (this._dirty = 0, Ut(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
    }, e.totalTime = function (t, e) {
      if (Ce(), !arguments.length) return this._tTime;
      var n = this.parent || this._dp;

      if (n && n.smoothChildTiming && this._ts) {
        for (this._start = Tt(n._time - (this._ts > 0 ? t / this._ts : ((this._dirty ? this.totalDuration() : this._tDur) - t) / -this._ts)), Rt(this), n._dirty || Nt(n); n.parent;) {
          n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
        }

        !this.parent && this._dp.autoRemoveChildren && Wt(this._dp, this, this._start - this._delay);
      }

      return (this._tTime !== t || !this._dur && !e || this._initted && 1e-8 === Math.abs(this._zTime) || !t && !this._initted) && (this._ts || (this._pTime = t), _t(this, t, e)), this;
    }, e.time = function (t, e) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + It(this)) % this._dur || (t ? this._dur : 0), e) : this._time;
    }, e.totalProgress = function (t, e) {
      return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
    }, e.progress = function (t, e) {
      return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + It(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
    }, e.iteration = function (t, e) {
      var n = this.duration() + this._rDelay;

      return arguments.length ? this.totalTime(this._time + (t - 1) * n, e) : this._repeat ? Ft(this._tTime, n) + 1 : 1;
    }, e.timeScale = function (t) {
      if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
      if (this._rts === t) return this;
      var e = this.parent && this._ts ? qt(this.parent._time, this) : this._tTime;
      return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, zt(this.totalTime(Qt(0, this._tDur, e), !0));
    }, e.paused = function (t) {
      return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ce(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= 1e-8) && 1e-8 !== Math.abs(this._zTime)))), this) : this._ps;
    }, e.startTime = function (t) {
      if (arguments.length) {
        this._start = t;
        var e = this.parent || this._dp;
        return e && (e._sort || !this.parent) && Wt(e, this, t - this._delay), this;
      }

      return this._start;
    }, e.endTime = function (t) {
      return this._start + (Y(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
    }, e.rawTime = function (t) {
      var e = this.parent || this._dp;
      return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? qt(e.rawTime(t), this) : this._tTime : this._tTime;
    }, e.repeat = function (t) {
      return arguments.length ? (this._repeat = t, Vt(this)) : this._repeat;
    }, e.repeatDelay = function (t) {
      return arguments.length ? (this._rDelay = t, Vt(this)) : this._rDelay;
    }, e.yoyo = function (t) {
      return arguments.length ? (this._yoyo = t, this) : this._yoyo;
    }, e.seek = function (t, e) {
      return this.totalTime(Zt(this, t), Y(e));
    }, e.restart = function (t, e) {
      return this.play().totalTime(t ? -this._delay : 0, Y(e));
    }, e.play = function (t, e) {
      return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
    }, e.reverse = function (t, e) {
      return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
    }, e.pause = function (t, e) {
      return null != t && this.seek(t, e), this.paused(!0);
    }, e.resume = function () {
      return this.paused(!1);
    }, e.reversed = function (t) {
      return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0;
    }, e.invalidate = function () {
      return this._initted = 0, this._zTime = -1e-8, this;
    }, e.isActive = function (t) {
      var e,
          n = this.parent || this._dp,
          i = this._start;
      return !(n && !(this._ts && (this._initted || !t) && n.isActive(t) && (e = n.rawTime(!0)) >= i && e < this.endTime(!0) - 1e-8));
    }, e.eventCallback = function (t, e, n) {
      var i = this.vars;
      return arguments.length > 1 ? (e ? (i[t] = e, n && (i[t + "Params"] = n), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t];
    }, e.then = function (t) {
      var e = this;
      return new Promise(function (n) {
        var i = R(t) ? t : At,
            o = function o() {
          var t = e.then;
          e.then = null, R(i) && (i = i(e)) && (i.then || i === e) && (e.then = t), n(i), e.then = t;
        };

        e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? o() : e._prom = o;
      });
    }, e.kill = function () {
      he(this);
    }, t;
  }();

  Pt(ze.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -1e-8,
    _prom: 0,
    _ps: !1,
    _rts: 1
  });

  var Ie = function (t) {
    function e(e, n) {
      var i;
      return void 0 === e && (e = {}), (i = t.call(this, e, n) || this).labels = {}, i.smoothChildTiming = !!e.smoothChildTiming, i.autoRemoveChildren = !!e.autoRemoveChildren, i._sort = Y(e.sortChildren), i.parent && Bt(i.parent, r(i)), e.scrollTrigger && Xt(r(i), e.scrollTrigger), i;
    }

    s(e, t);
    var n = e.prototype;
    return n.to = function (t, e, n) {
      return new Ve(t, kt(arguments, 0, this), Zt(this, B(e) ? arguments[3] : n)), this;
    }, n.from = function (t, e, n) {
      return new Ve(t, kt(arguments, 1, this), Zt(this, B(e) ? arguments[3] : n)), this;
    }, n.fromTo = function (t, e, n, i) {
      return new Ve(t, kt(arguments, 2, this), Zt(this, B(e) ? arguments[4] : i)), this;
    }, n.set = function (t, e, n) {
      return e.duration = 0, e.parent = this, Lt(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Ve(t, e, Zt(this, n), 1), this;
    }, n.call = function (t, e, n) {
      return Wt(this, Ve.delayedCall(0, t, e), Zt(this, n));
    }, n.staggerTo = function (t, e, n, i, o, r, s) {
      return n.duration = e, n.stagger = n.stagger || i, n.onComplete = r, n.onCompleteParams = s, n.parent = this, new Ve(t, n, Zt(this, o)), this;
    }, n.staggerFrom = function (t, e, n, i, o, r, s) {
      return n.runBackwards = 1, Lt(n).immediateRender = Y(n.immediateRender), this.staggerTo(t, e, n, i, o, r, s);
    }, n.staggerFromTo = function (t, e, n, i, o, r, s, a) {
      return i.startAt = n, Lt(i).immediateRender = Y(i.immediateRender), this.staggerTo(t, e, i, o, r, s, a);
    }, n.render = function (t, e, n) {
      var i,
          o,
          r,
          s,
          l,
          c,
          u,
          d,
          p,
          f,
          h,
          g,
          v = this._time,
          m = this._dirty ? this.totalDuration() : this._tDur,
          y = this._dur,
          b = this !== a && t > m - 1e-8 && t >= 0 ? m : t < 1e-8 ? 0 : t,
          x = this._zTime < 0 != t < 0 && (this._initted || !y);

      if (b !== this._tTime || n || x) {
        if (v !== this._time && y && (b += this._time - v, t += this._time - v), i = b, p = this._start, c = !(d = this._ts), x && (y || (v = this._zTime), (t || !e) && (this._zTime = t)), this._repeat && (h = this._yoyo, l = y + this._rDelay, ((i = Tt(b % l)) > y || m === b) && (i = y), (s = ~~(b / l)) && s === b / l && (i = y, s--), f = Ft(this._tTime, l), !v && this._tTime && f !== s && (f = s), h && 1 & s && (i = y - i, g = 1), s !== f && !this._lock)) {
          var w = h && 1 & f,
              T = w === (h && 1 & s);
          if (s < f && (w = !w), v = w ? 0 : y, this._lock = 1, this.render(v || (g ? 0 : Tt(s * l)), e, !y)._lock = 0, !e && this.parent && fe(this, "onRepeat"), this.vars.repeatRefresh && !g && (this.invalidate()._lock = 1), v !== this._time || c !== !this._ts) return this;
          if (T && (this._lock = 2, v = w ? y + 1e-4 : -1e-4, this.render(v, !0), this.vars.repeatRefresh && !g && this.invalidate()), this._lock = 0, !this._ts && !c) return this;
          Oe(this, g);
        }

        if (this._hasPause && !this._forcing && this._lock < 2 && (u = function (t, e, n) {
          var i;
          if (n > e) for (i = t._first; i && i._start <= n;) {
            if (!i._dur && "isPause" === i.data && i._start > e) return i;
            i = i._next;
          } else for (i = t._last; i && i._start >= n;) {
            if (!i._dur && "isPause" === i.data && i._start < e) return i;
            i = i._prev;
          }
        }(this, Tt(v), Tt(i))) && (b -= i - (i = u._start)), this._tTime = b, this._time = i, this._act = !d, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t), v || !i || e || fe(this, "onStart"), i >= v && t >= 0) for (o = this._first; o;) {
          if (r = o._next, (o._act || i >= o._start) && o._ts && u !== o) {
            if (o.parent !== this) return this.render(t, e, n);

            if (o.render(o._ts > 0 ? (i - o._start) * o._ts : (o._dirty ? o.totalDuration() : o._tDur) + (i - o._start) * o._ts, e, n), i !== this._time || !this._ts && !c) {
              u = 0, r && (b += this._zTime = -1e-8);
              break;
            }
          }

          o = r;
        } else {
          o = this._last;

          for (var S = t < 0 ? t : i; o;) {
            if (r = o._prev, (o._act || S <= o._end) && o._ts && u !== o) {
              if (o.parent !== this) return this.render(t, e, n);

              if (o.render(o._ts > 0 ? (S - o._start) * o._ts : (o._dirty ? o.totalDuration() : o._tDur) + (S - o._start) * o._ts, e, n), i !== this._time || !this._ts && !c) {
                u = 0, r && (b += this._zTime = S ? -1e-8 : 1e-8);
                break;
              }
            }

            o = r;
          }
        }
        if (u && !e && (this.pause(), u.render(i >= v ? 0 : -1e-8)._zTime = i >= v ? 1 : -1, this._ts)) return this._start = p, Rt(this), this.render(t, e, n);
        this._onUpdate && !e && fe(this, "onUpdate", !0), (b === m && m >= this.totalDuration() || !b && v) && (p !== this._start && Math.abs(d) === Math.abs(this._ts) || this._lock || ((t || !y) && (b === m && this._ts > 0 || !b && this._ts < 0) && Ht(this, 1), e || t < 0 && !v || !b && !v || (fe(this, b === m ? "onComplete" : "onReverseComplete", !0), this._prom && !(b < m && this.timeScale() > 0) && this._prom())));
      }

      return this;
    }, n.add = function (t, e) {
      var n = this;

      if (B(e) || (e = Zt(this, e)), !(t instanceof ze)) {
        if (G(t)) return t.forEach(function (t) {
          return n.add(t, e);
        }), Nt(this);
        if (q(t)) return this.addLabel(t, e);
        if (!R(t)) return this;
        t = Ve.delayedCall(0, t);
      }

      return this !== t ? Wt(this, t, e) : this;
    }, n.getChildren = function (t, e, n, i) {
      void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === n && (n = !0), void 0 === i && (i = -L);

      for (var o = [], r = this._first; r;) {
        r._start >= i && (r instanceof Ve ? e && o.push(r) : (n && o.push(r), t && o.push.apply(o, r.getChildren(!0, e, n)))), r = r._next;
      }

      return o;
    }, n.getById = function (t) {
      for (var e = this.getChildren(1, 1, 1), n = e.length; n--;) {
        if (e[n].vars.id === t) return e[n];
      }
    }, n.remove = function (t) {
      return q(t) ? this.removeLabel(t) : R(t) ? this.killTweensOf(t) : (jt(this, t), t === this._recent && (this._recent = this._last), Nt(this));
    }, n.totalTime = function (e, n) {
      return arguments.length ? (this._forcing = 1, this.parent || this._dp || !this._ts || (this._start = Tt(ke.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, n), this._forcing = 0, this) : this._tTime;
    }, n.addLabel = function (t, e) {
      return this.labels[t] = Zt(this, e), this;
    }, n.removeLabel = function (t) {
      return delete this.labels[t], this;
    }, n.addPause = function (t, e, n) {
      var i = Ve.delayedCall(0, e || ct, n);
      return i.data = "isPause", this._hasPause = 1, Wt(this, i, Zt(this, t));
    }, n.removePause = function (t) {
      var e = this._first;

      for (t = Zt(this, t); e;) {
        e._start === t && "isPause" === e.data && Ht(e), e = e._next;
      }
    }, n.killTweensOf = function (t, e, n) {
      for (var i = this.getTweensOf(t, n), o = i.length; o--;) {
        Fe !== i[o] && i[o].kill(t, e);
      }

      return this;
    }, n.getTweensOf = function (t, e) {
      for (var n, i = [], o = ie(t), r = this._first; r;) {
        r instanceof Ve ? !St(r._targets, o) || e && !r.isActive("started" === e) || i.push(r) : (n = r.getTweensOf(o, e)).length && i.push.apply(i, n), r = r._next;
      }

      return i;
    }, n.tweenTo = function (t, e) {
      e = e || {};
      var n = this,
          i = Zt(n, t),
          o = e,
          r = o.startAt,
          s = o.onStart,
          a = o.onStartParams,
          l = Ve.to(n, Pt(e, {
        ease: "none",
        lazy: !1,
        time: i,
        duration: e.duration || Math.abs((i - (r && "time" in r ? r.time : n._time)) / n.timeScale()) || 1e-8,
        onStart: function onStart() {
          n.pause();
          var t = e.duration || Math.abs((i - n._time) / n.timeScale());
          l._dur !== t && Ut(l, t).render(l._time, !0, !0), s && s.apply(l, a || []);
        }
      }));
      return l;
    }, n.tweenFromTo = function (t, e, n) {
      return this.tweenTo(e, Pt({
        startAt: {
          time: Zt(this, t)
        }
      }, n));
    }, n.recent = function () {
      return this._recent;
    }, n.nextLabel = function (t) {
      return void 0 === t && (t = this._time), pe(this, Zt(this, t));
    }, n.previousLabel = function (t) {
      return void 0 === t && (t = this._time), pe(this, Zt(this, t), 1);
    }, n.currentLabel = function (t) {
      return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + 1e-8);
    }, n.shiftChildren = function (t, e, n) {
      void 0 === n && (n = 0);

      for (var i, o = this._first, r = this.labels; o;) {
        o._start >= n && (o._start += t), o = o._next;
      }

      if (e) for (i in r) {
        r[i] >= n && (r[i] += t);
      }
      return Nt(this);
    }, n.invalidate = function () {
      var e = this._first;

      for (this._lock = 0; e;) {
        e.invalidate(), e = e._next;
      }

      return t.prototype.invalidate.call(this);
    }, n.clear = function (t) {
      void 0 === t && (t = !0);

      for (var e, n = this._first; n;) {
        e = n._next, this.remove(n), n = e;
      }

      return this._time = this._tTime = this._pTime = 0, t && (this.labels = {}), Nt(this);
    }, n.totalDuration = function (t) {
      var e,
          n,
          i,
          o,
          r = 0,
          s = this,
          l = s._last,
          c = L;
      if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));

      if (s._dirty) {
        for (o = s.parent; l;) {
          e = l._prev, l._dirty && l.totalDuration(), (i = l._start) > c && s._sort && l._ts && !s._lock ? (s._lock = 1, Wt(s, l, i - l._delay, 1)._lock = 0) : c = i, i < 0 && l._ts && (r -= i, (!o && !s._dp || o && o.smoothChildTiming) && (s._start += i / s._ts, s._time -= i, s._tTime -= i), s.shiftChildren(-i, !1, -Infinity), c = 0), (n = Rt(l)) > r && l._ts && (r = n), l = e;
        }

        Ut(s, s === a && s._time > r ? s._time : r, 1), s._dirty = 0;
      }

      return s._tDur;
    }, e.updateRoot = function (t) {
      if (a._ts && (_t(a, qt(t, a)), p = ke.frame), ke.frame >= gt) {
        gt += M.autoSleep || 120;
        var e = a._first;

        if ((!e || !e._ts) && M.autoSleep && ke._listeners.length < 2) {
          for (; e && !e._ts;) {
            e = e._next;
          }

          e || ke.sleep();
        }
      }
    }, e;
  }(ze);

  Pt(Ie.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });

  var Fe,
      qe = function qe(t, e, n, i, o, r, s) {
    var a,
        l,
        c,
        u,
        d,
        p,
        f,
        h,
        g = new cn(this._pt, t, e, 0, 1, nn, null, o),
        v = 0,
        m = 0;

    for (g.b = n, g.e = i, n += "", (f = ~(i += "").indexOf("random(")) && (i = ue(i)), r && (r(h = [n, i], t, e), n = h[0], i = h[1]), l = n.match(J) || []; a = J.exec(i);) {
      u = a[0], d = i.substring(v, a.index), c ? c = (c + 1) % 5 : "rgba(" === d.substr(-5) && (c = 1), u !== l[m++] && (p = parseFloat(l[m - 1]) || 0, g._pt = {
        _next: g._pt,
        p: d || 1 === m ? d : ",",
        s: p,
        c: "=" === u.charAt(1) ? parseFloat(u.substr(2)) * ("-" === u.charAt(0) ? -1 : 1) : parseFloat(u) - p,
        m: c && c < 4 ? Math.round : 0
      }, v = J.lastIndex);
    }

    return g.c = v < i.length ? i.substring(v, i.length) : "", g.fp = s, (et.test(i) || f) && (g.e = 0), this._pt = g, g;
  },
      Re = function Re(t, e, n, i, o, r, s, a, l) {
    R(i) && (i = i(o || 0, t, r));
    var c,
        u = t[e],
        d = "get" !== n ? n : R(u) ? l ? t[e.indexOf("set") || !R(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : u,
        p = R(u) ? l ? Ke : Ze : Ge;
    if (q(i) && (~i.indexOf("random(") && (i = ue(i)), "=" === i.charAt(1) && (i = parseFloat(d) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (Jt(d) || 0))), d !== i) return isNaN(d + i) ? (!u && !(e in t) && st(e, i), qe.call(this, t, e, d, i, p, a || M.stringFilter, l)) : (c = new cn(this._pt, t, e, +d || 0, i - (d || 0), "boolean" == typeof u ? en : tn, 0, p), l && (c.fp = l), s && c.modifier(s, this, t), this._pt = c);
  },
      Be = function Be(t, e, n, i, o, r) {
    var s, a, l, c;
    if (ft[t] && !1 !== (s = new ft[t]()).init(o, s.rawVars ? e[t] : function (t, e, n, i, o) {
      if (R(t) && (t = Xe(t, o, e, n, i)), !X(t) || t.style && t.nodeType || G(t)) return q(t) ? Xe(t, o, e, n, i) : t;
      var r,
          s = {};

      for (r in t) {
        s[r] = Xe(t[r], o, e, n, i);
      }

      return s;
    }(e[t], i, o, r, n), n, i, r) && (n._pt = a = new cn(n._pt, o, t, 0, 1, s.render, s, 0, s.priority), n !== f)) for (l = n._ptLookup[n._targets.indexOf(o)], c = s._props.length; c--;) {
      l[s._props[c]] = a;
    }
    return s;
  },
      We = function t(e, n) {
    var i,
        o,
        r,
        s,
        l,
        c,
        u,
        d,
        p,
        f,
        h,
        g,
        v = e.vars,
        m = v.ease,
        y = v.startAt,
        b = v.immediateRender,
        x = v.lazy,
        w = v.onUpdate,
        T = v.onUpdateParams,
        S = v.callbackScope,
        k = v.runBackwards,
        C = v.yoyoEase,
        _ = v.keyframes,
        $ = v.autoRevert,
        A = e._dur,
        P = e._startAt,
        E = e._targets,
        O = e.parent,
        M = O && "nested" === O.data ? O.parent._targets : E,
        L = "auto" === e._overwrite,
        j = e.timeline;

    if (j && (!_ || !m) && (m = "none"), e._ease = Me(m, D.ease), e._yEase = C ? Ee(Me(!0 === C ? m : C, D.ease)) : 0, C && e._yoyo && !e._repeat && (C = e._yEase, e._yEase = e._ease, e._ease = C), !j) {
      if (g = (d = E[0] ? bt(E[0]).harness : 0) && v[d.prop], i = Dt(v, ut), P && P.render(-1, !0).kill(), y) {
        if (Ht(e._startAt = Ve.set(E, Pt({
          data: "isStart",
          overwrite: !1,
          parent: O,
          immediateRender: !0,
          lazy: Y(x),
          startAt: null,
          delay: 0,
          onUpdate: w,
          onUpdateParams: T,
          callbackScope: S,
          stagger: 0
        }, y))), b) if (n > 0) !$ && (e._startAt = 0);else if (A) return;
      } else if (k && A) if (P) !$ && (e._startAt = 0);else if (n && (b = !1), r = Ot(i, {
        overwrite: !1,
        data: "isFromStart",
        lazy: b && Y(x),
        immediateRender: b,
        stagger: 0,
        parent: O
      }), g && (r[d.prop] = g), Ht(e._startAt = Ve.set(E, r)), b) {
        if (!n) return;
      } else t(e._startAt, 1e-8);

      for (e._pt = 0, x = A && Y(x) || x && !A, o = 0; o < E.length; o++) {
        if (u = (l = E[o])._gsap || yt(E)[o]._gsap, e._ptLookup[o] = f = {}, pt[u.id] && Ct(), h = M === E ? o : M.indexOf(l), d && !1 !== (p = new d()).init(l, g || i, e, h, M) && (e._pt = s = new cn(e._pt, l, p.name, 0, 1, p.render, p, 0, p.priority), p._props.forEach(function (t) {
          f[t] = s;
        }), p.priority && (c = 1)), !d || g) for (r in i) {
          ft[r] && (p = Be(r, i, e, h, l, M)) ? p.priority && (c = 1) : f[r] = s = Re.call(e, l, r, "get", i[r], h, M, 0, v.stringFilter);
        }
        e._op && e._op[o] && e.kill(l, e._op[o]), L && e._pt && (Fe = e, a.killTweensOf(l, f, "started"), Fe = 0), e._pt && x && (pt[u.id] = 1);
      }

      c && ln(e), e._onInit && e._onInit(e);
    }

    e._from = !j && !!v.runBackwards, e._onUpdate = w, e._initted = 1;
  },
      Xe = function Xe(t, e, n, i, o) {
    return R(t) ? t.call(e, n, i, o) : q(t) && ~t.indexOf("random(") ? ue(t) : t;
  },
      Ye = mt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
      Ue = (Ye + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
      Ve = function (t) {
    function e(e, n, i, o) {
      var s;
      "number" == typeof n && (i.duration = n, n = i, i = null);
      var l,
          c,
          u,
          d,
          p,
          f,
          h,
          g,
          v = (s = t.call(this, o ? n : Lt(n), i) || this).vars,
          m = v.duration,
          y = v.delay,
          b = v.immediateRender,
          x = v.stagger,
          w = v.overwrite,
          T = v.keyframes,
          S = v.defaults,
          k = v.scrollTrigger,
          C = v.yoyoEase,
          _ = s.parent,
          $ = (G(e) ? B(e[0]) : "length" in n) ? [e] : ie(e);

      if (s._targets = $.length ? yt($) : at("GSAP target " + e + " not found. https://greensock.com", !M.nullTargetWarn) || [], s._ptLookup = [], s._overwrite = w, T || x || V(m) || V(y)) {
        if (n = s.vars, (l = s.timeline = new Ie({
          data: "nested",
          defaults: S || {}
        })).kill(), l.parent = r(s), T) Pt(l.vars.defaults, {
          ease: "none"
        }), T.forEach(function (t) {
          return l.to($, t, ">");
        });else {
          if (d = $.length, h = x ? re(x) : ct, X(x)) for (p in x) {
            ~Ye.indexOf(p) && (g || (g = {}), g[p] = x[p]);
          }

          for (c = 0; c < d; c++) {
            for (p in u = {}, n) {
              Ue.indexOf(p) < 0 && (u[p] = n[p]);
            }

            u.stagger = 0, C && (u.yoyoEase = C), g && Ot(u, g), f = $[c], u.duration = +Xe(m, r(s), c, f, $), u.delay = (+Xe(y, r(s), c, f, $) || 0) - s._delay, !x && 1 === d && u.delay && (s._delay = y = u.delay, s._start += y, u.delay = 0), l.to(f, u, h(c, f, $));
          }

          l.duration() ? m = y = 0 : s.timeline = 0;
        }
        m || s.duration(m = l.duration());
      } else s.timeline = 0;

      return !0 === w && (Fe = r(s), a.killTweensOf($), Fe = 0), _ && Bt(_, r(s)), (b || !m && !T && s._start === Tt(_._time) && Y(b) && function t(e) {
        return !e || e._ts && t(e.parent);
      }(r(s)) && "nested" !== _.data) && (s._tTime = -1e-8, s.render(Math.max(0, -y))), k && Xt(r(s), k), s;
    }

    s(e, t);
    var n = e.prototype;
    return n.render = function (t, e, n) {
      var i,
          o,
          r,
          s,
          a,
          l,
          c,
          u,
          d,
          p = this._time,
          f = this._tDur,
          h = this._dur,
          g = t > f - 1e-8 && t >= 0 ? f : t < 1e-8 ? 0 : t;

      if (h) {
        if (g !== this._tTime || !t || n || this._startAt && this._zTime < 0 != t < 0) {
          if (i = g, u = this.timeline, this._repeat) {
            if (s = h + this._rDelay, ((i = Tt(g % s)) > h || f === g) && (i = h), (r = ~~(g / s)) && r === g / s && (i = h, r--), (l = this._yoyo && 1 & r) && (d = this._yEase, i = h - i), a = Ft(this._tTime, s), i === p && !n && this._initted) return this;
            r !== a && (u && this._yEase && Oe(u, l), !this.vars.repeatRefresh || l || this._lock || (this._lock = n = 1, this.render(Tt(s * r), !0).invalidate()._lock = 0));
          }

          if (!this._initted) {
            if (Yt(this, i, n, e)) return this._tTime = 0, this;
            if (h !== this._dur) return this.render(t, e, n);
          }

          for (this._tTime = g, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = c = (d || this._ease)(i / h), this._from && (this.ratio = c = 1 - c), i && !p && !e && fe(this, "onStart"), o = this._pt; o;) {
            o.r(c, o.d), o = o._next;
          }

          u && u.render(t < 0 ? t : !i && l ? -1e-8 : u._dur * c, e, n) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, n), fe(this, "onUpdate")), this._repeat && r !== a && this.vars.onRepeat && !e && this.parent && fe(this, "onRepeat"), g !== this._tDur && g || this._tTime !== g || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, n), (t || !h) && (g === this._tDur && this._ts > 0 || !g && this._ts < 0) && Ht(this, 1), e || t < 0 && !p || !g && !p || (fe(this, g === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(g < f && this.timeScale() > 0) && this._prom()));
        }
      } else !function (t, e, n, i) {
        var o,
            r,
            s = t.ratio,
            a = e < 0 || s && !e && !t._start && !t._dp._lock ? 0 : 1,
            l = t._rDelay,
            c = 0;
        if (l && t._repeat && (c = Qt(0, t._tDur, e), Ft(c, l) !== (r = Ft(t._tTime, l)) && (s = 1 - a, t.vars.repeatRefresh && t._initted && t.invalidate())), t._initted || !Yt(t, e, i, n)) if (a !== s || i || 1e-8 === t._zTime || !e && t._zTime) {
          for (r = t._zTime, t._zTime = e || (n ? 1e-8 : 0), n || (n = e && !r), t.ratio = a, t._from && (a = 1 - a), t._time = 0, t._tTime = c, n || fe(t, "onStart"), o = t._pt; o;) {
            o.r(a, o.d), o = o._next;
          }

          !a && t._startAt && !t._onUpdate && t._start && t._startAt.render(e, !0, i), t._onUpdate && !n && fe(t, "onUpdate"), c && t._repeat && !n && t.parent && fe(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === a && (a && Ht(t, 1), n || (fe(t, a ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
        } else t._zTime || (t._zTime = e);
      }(this, t, e, n);

      return this;
    }, n.targets = function () {
      return this._targets;
    }, n.invalidate = function () {
      return this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this);
    }, n.kill = function (t, e) {
      if (void 0 === e && (e = "all"), !(t || e && "all" !== e) && (this._lazy = 0, this.parent)) return he(this);

      if (this.timeline) {
        var n = this.timeline.totalDuration();
        return this.timeline.killTweensOf(t, e, Fe && !0 !== Fe.vars.overwrite)._first || he(this), this.parent && n !== this.timeline.totalDuration() && Ut(this, this._dur * this.timeline._tDur / n), this;
      }

      var i,
          o,
          r,
          s,
          a,
          l,
          c,
          u = this._targets,
          d = t ? ie(t) : u,
          p = this._ptLookup,
          f = this._pt;
      if ((!e || "all" === e) && function (t, e) {
        for (var n = t.length, i = n === e.length; i && n-- && t[n] === e[n];) {
          ;
        }

        return n < 0;
      }(u, d)) return he(this);

      for (i = this._op = this._op || [], "all" !== e && (q(e) && (a = {}, wt(e, function (t) {
        return a[t] = 1;
      }), e = a), e = function (t, e) {
        var n,
            i,
            o,
            r,
            s = t[0] ? bt(t[0]).harness : 0,
            a = s && s.aliases;
        if (!a) return e;

        for (i in n = Ot({}, e), a) {
          if ((i in n)) for (o = (r = a[i].split(",")).length; o--;) {
            n[r[o]] = n[i];
          }
        }

        return n;
      }(u, e)), c = u.length; c--;) {
        if (~d.indexOf(u[c])) for (a in o = p[c], "all" === e ? (i[c] = e, s = o, r = {}) : (r = i[c] = i[c] || {}, s = e), s) {
          (l = o && o[a]) && ("kill" in l.d && !0 !== l.d.kill(a) || jt(this, l, "_pt"), delete o[a]), "all" !== r && (r[a] = 1);
        }
      }

      return this._initted && !this._pt && f && he(this), this;
    }, e.to = function (t, n) {
      return new e(t, n, arguments[2]);
    }, e.from = function (t, n) {
      return new e(t, kt(arguments, 1));
    }, e.delayedCall = function (t, n, i, o) {
      return new e(n, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: t,
        onComplete: n,
        onReverseComplete: n,
        onCompleteParams: i,
        onReverseCompleteParams: i,
        callbackScope: o
      });
    }, e.fromTo = function (t, n, i) {
      return new e(t, kt(arguments, 2));
    }, e.set = function (t, n) {
      return n.duration = 0, n.repeatDelay || (n.repeat = 0), new e(t, n);
    }, e.killTweensOf = function (t, e, n) {
      return a.killTweensOf(t, e, n);
    }, e;
  }(ze);

  Pt(Ve.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  }), wt("staggerTo,staggerFrom,staggerFromTo", function (t) {
    Ve[t] = function () {
      var e = new Ie(),
          n = te.call(arguments, 0);
      return n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n);
    };
  });

  var Ge = function Ge(t, e, n) {
    return t[e] = n;
  },
      Ze = function Ze(t, e, n) {
    return t[e](n);
  },
      Ke = function Ke(t, e, n, i) {
    return t[e](i.fp, n);
  },
      Qe = function Qe(t, e, n) {
    return t.setAttribute(e, n);
  },
      Je = function Je(t, e) {
    return R(t[e]) ? Ze : W(t[e]) && t.setAttribute ? Qe : Ge;
  },
      tn = function tn(t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
  },
      en = function en(t, e) {
    return e.set(e.t, e.p, !!(e.s + e.c * t), e);
  },
      nn = function nn(t, e) {
    var n = e._pt,
        i = "";
    if (!t && e.b) i = e.b;else if (1 === t && e.e) i = e.e;else {
      for (; n;) {
        i = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round(1e4 * (n.s + n.c * t)) / 1e4) + i, n = n._next;
      }

      i += e.c;
    }
    e.set(e.t, e.p, i, e);
  },
      on = function on(t, e) {
    for (var n = e._pt; n;) {
      n.r(t, n.d), n = n._next;
    }
  },
      rn = function rn(t, e, n, i) {
    for (var o, r = this._pt; r;) {
      o = r._next, r.p === i && r.modifier(t, e, n), r = o;
    }
  },
      sn = function sn(t) {
    for (var e, n, i = this._pt; i;) {
      n = i._next, i.p === t && !i.op || i.op === t ? jt(this, i, "_pt") : i.dep || (e = 1), i = n;
    }

    return !e;
  },
      an = function an(t, e, n, i) {
    i.mSet(t, e, i.m.call(i.tween, n, i.mt), i);
  },
      ln = function ln(t) {
    for (var e, n, i, o, r = t._pt; r;) {
      for (e = r._next, n = i; n && n.pr > r.pr;) {
        n = n._next;
      }

      (r._prev = n ? n._prev : o) ? r._prev._next = r : i = r, (r._next = n) ? n._prev = r : o = r, r = e;
    }

    t._pt = i;
  },
      cn = function () {
    function t(t, e, n, i, o, r, s, a, l) {
      this.t = e, this.s = i, this.c = o, this.p = n, this.r = r || tn, this.d = s || this, this.set = a || Ge, this.pr = l || 0, this._next = t, t && (t._prev = this);
    }

    return t.prototype.modifier = function (t, e, n) {
      this.mSet = this.mSet || this.set, this.set = an, this.m = t, this.mt = n, this.tween = e;
    }, t;
  }();

  wt(mt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (t) {
    return ut[t] = 1;
  }), it.TweenMax = it.TweenLite = Ve, it.TimelineLite = it.TimelineMax = Ie, a = new Ie({
    sortChildren: !1,
    defaults: D,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
  }), M.stringFilter = Se;
  var un = {
    registerPlugin: function registerPlugin() {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) {
        e[n] = arguments[n];
      }

      e.forEach(function (t) {
        return ge(t);
      });
    },
    timeline: function timeline(t) {
      return new Ie(t);
    },
    getTweensOf: function getTweensOf(t, e) {
      return a.getTweensOf(t, e);
    },
    getProperty: function getProperty(t, e, n, i) {
      q(t) && (t = ie(t)[0]);
      var o = bt(t || {}).get,
          r = n ? At : $t;
      return "native" === n && (n = ""), t ? e ? r((ft[e] && ft[e].get || o)(t, e, n, i)) : function (e, n, i) {
        return r((ft[e] && ft[e].get || o)(t, e, n, i));
      } : t;
    },
    quickSetter: function quickSetter(t, e, n) {
      if ((t = ie(t)).length > 1) {
        var i = t.map(function (t) {
          return fn.quickSetter(t, e, n);
        }),
            o = i.length;
        return function (t) {
          for (var e = o; e--;) {
            i[e](t);
          }
        };
      }

      t = t[0] || {};
      var r = ft[e],
          s = bt(t),
          a = s.harness && (s.harness.aliases || {})[e] || e,
          l = r ? function (e) {
        var i = new r();
        f._pt = 0, i.init(t, n ? e + n : e, f, 0, [t]), i.render(1, i), f._pt && on(1, f);
      } : s.set(t, a);
      return r ? l : function (e) {
        return l(t, a, n ? e + n : e, s, 1);
      };
    },
    isTweening: function isTweening(t) {
      return a.getTweensOf(t, !0).length > 0;
    },
    defaults: function defaults(t) {
      return t && t.ease && (t.ease = Me(t.ease, D.ease)), Mt(D, t || {});
    },
    config: function config(t) {
      return Mt(M, t || {});
    },
    registerEffect: function registerEffect(t) {
      var e = t.name,
          n = t.effect,
          i = t.plugins,
          o = t.defaults,
          r = t.extendTimeline;
      (i || "").split(",").forEach(function (t) {
        return t && !ft[t] && !it[t] && at(e + " effect requires " + t + " plugin.");
      }), ht[e] = function (t, e, i) {
        return n(ie(t), Pt(e || {}, o), i);
      }, r && (Ie.prototype[e] = function (t, n, i) {
        return this.add(ht[e](t, X(n) ? n : (i = n) && {}, this), i);
      });
    },
    registerEase: function registerEase(t, e) {
      _e[t] = Me(e);
    },
    parseEase: function parseEase(t, e) {
      return arguments.length ? Me(t, e) : _e;
    },
    getById: function getById(t) {
      return a.getById(t);
    },
    exportRoot: function exportRoot(t, e) {
      void 0 === t && (t = {});
      var n,
          i,
          o = new Ie(t);

      for (o.smoothChildTiming = Y(t.smoothChildTiming), a.remove(o), o._dp = 0, o._time = o._tTime = a._time, n = a._first; n;) {
        i = n._next, !e && !n._dur && n instanceof Ve && n.vars.onComplete === n._targets[0] || Wt(o, n, n._start - n._delay), n = i;
      }

      return Wt(a, o, 0), o;
    },
    utils: {
      wrap: function t(e, n, i) {
        var o = n - e;
        return G(e) ? ce(e, t(0, e.length), n) : Kt(i, function (t) {
          return (o + (t - e) % o) % o + e;
        });
      },
      wrapYoyo: function t(e, n, i) {
        var o = n - e,
            r = 2 * o;
        return G(e) ? ce(e, t(0, e.length - 1), n) : Kt(i, function (t) {
          return e + ((t = (r + (t - e) % r) % r) > o ? r - t : t);
        });
      },
      distribute: re,
      random: le,
      snap: ae,
      normalize: function normalize(t, e, n) {
        return de(t, e, 0, 1, n);
      },
      getUnit: Jt,
      clamp: function clamp(t, e, n) {
        return Kt(n, function (n) {
          return Qt(t, e, n);
        });
      },
      splitColor: ye,
      toArray: ie,
      mapRange: de,
      pipe: function pipe() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) {
          e[n] = arguments[n];
        }

        return function (t) {
          return e.reduce(function (t, e) {
            return e(t);
          }, t);
        };
      },
      unitize: function unitize(t, e) {
        return function (n) {
          return t(parseFloat(n)) + (e || Jt(n));
        };
      },
      interpolate: function t(e, n, i, o) {
        var r = isNaN(e + n) ? 0 : function (t) {
          return (1 - t) * e + t * n;
        };

        if (!r) {
          var s,
              a,
              l,
              c,
              u,
              d = q(e),
              p = {};
          if (!0 === i && (o = 1) && (i = null), d) e = {
            p: e
          }, n = {
            p: n
          };else if (G(e) && !G(n)) {
            for (l = [], c = e.length, u = c - 2, a = 1; a < c; a++) {
              l.push(t(e[a - 1], e[a]));
            }

            c--, r = function r(t) {
              t *= c;
              var e = Math.min(u, ~~t);
              return l[e](t - e);
            }, i = n;
          } else o || (e = Ot(G(e) ? [] : {}, e));

          if (!l) {
            for (s in n) {
              Re.call(p, e, s, "get", n[s]);
            }

            r = function r(t) {
              return on(t, p) || (d ? e.p : e);
            };
          }
        }

        return Kt(i, r);
      },
      shuffle: oe
    },
    install: rt,
    effects: ht,
    ticker: ke,
    updateRoot: Ie.updateRoot,
    plugins: ft,
    globalTimeline: a,
    core: {
      PropTween: cn,
      globals: lt,
      Tween: Ve,
      Timeline: Ie,
      Animation: ze,
      getCache: bt,
      _removeLinkedListItem: jt
    }
  };
  wt("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return un[t] = Ve[t];
  }), ke.add(Ie.updateRoot), f = un.to({}, {
    duration: 0
  });

  var dn = function dn(t, e) {
    for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e;) {
      n = n._next;
    }

    return n;
  },
      pn = function pn(t, e) {
    return {
      name: t,
      rawVars: 1,
      init: function init(t, n, i) {
        i._onInit = function (t) {
          var i, o;

          if (q(n) && (i = {}, wt(n, function (t) {
            return i[t] = 1;
          }), n = i), e) {
            for (o in i = {}, n) {
              i[o] = e(n[o]);
            }

            n = i;
          }

          !function (t, e) {
            var n,
                i,
                o,
                r = t._targets;

            for (n in e) {
              for (i = r.length; i--;) {
                (o = t._ptLookup[i][n]) && (o = o.d) && (o._pt && (o = dn(o, n)), o && o.modifier && o.modifier(e[n], t, r[i], n));
              }
            }
          }(t, n);
        };
      }
    };
  },
      fn = un.registerPlugin({
    name: "attr",
    init: function init(t, e, n, i, o) {
      var r, s;

      for (r in e) {
        (s = this.add(t, "setAttribute", (t.getAttribute(r) || 0) + "", e[r], i, o, 0, 0, r)) && (s.op = r), this._props.push(r);
      }
    }
  }, {
    name: "endArray",
    init: function init(t, e) {
      for (var n = e.length; n--;) {
        this.add(t, n, t[n] || 0, e[n]);
      }
    }
  }, pn("roundProps", se), pn("modifiers"), pn("snap", ae)) || un;

  Ve.version = Ie.version = fn.version = "3.3.1", d = 1, U() && Ce();
  _e.Power0, _e.Power1, _e.Power2, _e.Power3, _e.Power4, _e.Linear, _e.Quad, _e.Cubic, _e.Quart, _e.Quint, _e.Strong, _e.Elastic, _e.Back, _e.SteppedEase, _e.Bounce, _e.Sine, _e.Expo, _e.Circ;
  /*!
   * CSSPlugin 3.3.1
   * https://greensock.com
   *
   * Copyright 2008-2020, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */

  var hn,
      gn,
      vn,
      mn,
      yn,
      bn,
      xn,
      wn,
      Tn = {},
      Sn = 180 / Math.PI,
      kn = Math.PI / 180,
      Cn = Math.atan2,
      _n = /([A-Z])/g,
      $n = /(?:left|right|width|margin|padding|x)/i,
      An = /[\s,\(]\S/,
      Pn = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  },
      En = function En(t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  },
      On = function On(t, e) {
    return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  },
      Mn = function Mn(t, e) {
    return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
  },
      Dn = function Dn(t, e) {
    var n = e.s + e.c * t;
    e.set(e.t, e.p, ~~(n + (n < 0 ? -.5 : .5)) + e.u, e);
  },
      Ln = function Ln(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  },
      jn = function jn(t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
  },
      Hn = function Hn(t, e, n) {
    return t.style[e] = n;
  },
      Nn = function Nn(t, e, n) {
    return t.style.setProperty(e, n);
  },
      zn = function zn(t, e, n) {
    return t._gsap[e] = n;
  },
      In = function In(t, e, n) {
    return t._gsap.scaleX = t._gsap.scaleY = n;
  },
      Fn = function Fn(t, e, n, i, o) {
    var r = t._gsap;
    r.scaleX = r.scaleY = n, r.renderTransform(o, r);
  },
      qn = function qn(t, e, n, i, o) {
    var r = t._gsap;
    r[e] = n, r.renderTransform(o, r);
  },
      Rn = "transform",
      Bn = Rn + "Origin",
      Wn = function Wn(t, e) {
    var n = gn.createElementNS ? gn.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : gn.createElement(t);
    return n.style ? n : gn.createElement(t);
  },
      Xn = function t(e, n, i) {
    var o = getComputedStyle(e);
    return o[n] || o.getPropertyValue(n.replace(_n, "-$1").toLowerCase()) || o.getPropertyValue(n) || !i && t(e, Un(n) || n, 1) || "";
  },
      Yn = "O,Moz,ms,Ms,Webkit".split(","),
      Un = function Un(t, e, n) {
    var i = (e || yn).style,
        o = 5;
    if (t in i && !n) return t;

    for (t = t.charAt(0).toUpperCase() + t.substr(1); o-- && !(Yn[o] + t in i);) {
      ;
    }

    return o < 0 ? null : (3 === o ? "ms" : o >= 0 ? Yn[o] : "") + t;
  },
      Vn = function Vn() {
    "undefined" != typeof window && window.document && (hn = window, gn = hn.document, vn = gn.documentElement, yn = Wn("div") || {
      style: {}
    }, bn = Wn("div"), Rn = Un(Rn), Bn = Un(Bn), yn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", wn = !!Un("perspective"), mn = 1);
  },
      Gn = function t(e) {
    var n,
        i = Wn("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
        o = this.parentNode,
        r = this.nextSibling,
        s = this.style.cssText;
    if (vn.appendChild(i), i.appendChild(this), this.style.display = "block", e) try {
      n = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t;
    } catch (t) {} else this._gsapBBox && (n = this._gsapBBox());
    return o && (r ? o.insertBefore(this, r) : o.appendChild(this)), vn.removeChild(i), this.style.cssText = s, n;
  },
      Zn = function Zn(t, e) {
    for (var n = e.length; n--;) {
      if (t.hasAttribute(e[n])) return t.getAttribute(e[n]);
    }
  },
      Kn = function Kn(t) {
    var e;

    try {
      e = t.getBBox();
    } catch (n) {
      e = Gn.call(t, !0);
    }

    return e && (e.width || e.height) || t.getBBox === Gn || (e = Gn.call(t, !0)), !e || e.width || e.x || e.y ? e : {
      x: +Zn(t, ["x", "cx", "x1"]) || 0,
      y: +Zn(t, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    };
  },
      Qn = function Qn(t) {
    return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Kn(t));
  },
      Jn = function Jn(t, e) {
    if (e) {
      var n = t.style;
      e in Tn && (e = Rn), n.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), n.removeProperty(e.replace(_n, "-$1").toLowerCase())) : n.removeAttribute(e);
    }
  },
      ti = function ti(t, e, n, i, o, r) {
    var s = new cn(t._pt, e, n, 0, 1, r ? jn : Ln);
    return t._pt = s, s.b = i, s.e = o, t._props.push(n), s;
  },
      ei = {
    deg: 1,
    rad: 1,
    turn: 1
  },
      ni = function t(e, n, i, o) {
    var r,
        s,
        a,
        l,
        c = parseFloat(i) || 0,
        u = (i + "").trim().substr((c + "").length) || "px",
        d = yn.style,
        p = $n.test(n),
        f = "svg" === e.tagName.toLowerCase(),
        h = (f ? "client" : "offset") + (p ? "Width" : "Height"),
        g = "px" === o,
        v = "%" === o;
    return o === u || !c || ei[o] || ei[u] ? c : ("px" !== u && !g && (c = t(e, n, i, "px")), l = e.getCTM && Qn(e), v && (Tn[n] || ~n.indexOf("adius")) ? Tt(c / (l ? e.getBBox()[p ? "width" : "height"] : e[h]) * 100) : (d[p ? "width" : "height"] = 100 + (g ? u : o), s = ~n.indexOf("adius") || "em" === o && e.appendChild && !f ? e : e.parentNode, l && (s = (e.ownerSVGElement || {}).parentNode), s && s !== gn && s.appendChild || (s = gn.body), (a = s._gsap) && v && a.width && p && a.time === ke.time ? Tt(c / a.width * 100) : ((v || "%" === u) && (d.position = Xn(e, "position")), s === e && (d.position = "static"), s.appendChild(yn), r = yn[h], s.removeChild(yn), d.position = "absolute", p && v && ((a = bt(s)).time = ke.time, a.width = s[h]), Tt(g ? r * c / 100 : r && c ? 100 / r * c : 0))));
  },
      ii = function ii(t, e, n, i) {
    var o;
    return mn || Vn(), e in Pn && "transform" !== e && ~(e = Pn[e]).indexOf(",") && (e = e.split(",")[0]), Tn[e] && "transform" !== e ? (o = hi(t, i), o = "transformOrigin" !== e ? o[e] : gi(Xn(t, Bn)) + " " + o.zOrigin + "px") : (!(o = t.style[e]) || "auto" === o || i || ~(o + "").indexOf("calc(")) && (o = ai[e] && ai[e](t, e, n) || Xn(t, e) || xt(t, e) || ("opacity" === e ? 1 : 0)), n && !~(o + "").indexOf(" ") ? ni(t, e, o, n) + n : o;
  },
      oi = function oi(t, e, n, i) {
    if (!n || "none" === n) {
      var o = Un(e, t, 1),
          r = o && Xn(t, o, 1);
      r && r !== n && (e = o, n = r);
    }

    var s,
        a,
        l,
        c,
        u,
        d,
        p,
        f,
        h,
        g,
        v,
        m,
        y = new cn(this._pt, t.style, e, 0, 1, nn),
        b = 0,
        x = 0;

    if (y.b = n, y.e = i, n += "", "auto" === (i += "") && (t.style[e] = i, i = Xn(t, e) || i, t.style[e] = n), Se(s = [n, i]), i = s[1], l = (n = s[0]).match(Q) || [], (i.match(Q) || []).length) {
      for (; a = Q.exec(i);) {
        p = a[0], h = i.substring(b, a.index), u ? u = (u + 1) % 5 : "rgba(" !== h.substr(-5) && "hsla(" !== h.substr(-5) || (u = 1), p !== (d = l[x++] || "") && (c = parseFloat(d) || 0, v = d.substr((c + "").length), (m = "=" === p.charAt(1) ? +(p.charAt(0) + "1") : 0) && (p = p.substr(2)), f = parseFloat(p), g = p.substr((f + "").length), b = Q.lastIndex - g.length, g || (g = g || M.units[e] || v, b === i.length && (i += g, y.e += g)), v !== g && (c = ni(t, e, d, g) || 0), y._pt = {
          _next: y._pt,
          p: h || 1 === x ? h : ",",
          s: c,
          c: m ? m * f : f - c,
          m: u && u < 4 ? Math.round : 0
        });
      }

      y.c = b < i.length ? i.substring(b, i.length) : "";
    } else y.r = "display" === e && "none" === i ? jn : Ln;

    return et.test(i) && (y.e = 0), this._pt = y, y;
  },
      ri = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  },
      si = function si(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var n,
          i,
          o,
          r = e.t,
          s = r.style,
          a = e.u,
          l = r._gsap;
      if ("all" === a || !0 === a) s.cssText = "", i = 1;else for (o = (a = a.split(",")).length; --o > -1;) {
        n = a[o], Tn[n] && (i = 1, n = "transformOrigin" === n ? Bn : Rn), Jn(r, n);
      }
      i && (Jn(r, Rn), l && (l.svg && r.removeAttribute("transform"), hi(r, 1), l.uncache = 1));
    }
  },
      ai = {
    clearProps: function clearProps(t, e, n, i, o) {
      if ("isFromStart" !== o.data) {
        var r = t._pt = new cn(t._pt, e, n, 0, 0, si);
        return r.u = i, r.pr = -10, r.tween = o, t._props.push(n), 1;
      }
    }
  },
      li = [1, 0, 0, 1, 0, 0],
      ci = {},
      ui = function ui(t) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
  },
      di = function di(t) {
    var e = Xn(t, Rn);
    return ui(e) ? li : e.substr(7).match(K).map(Tt);
  },
      pi = function pi(t, e) {
    var n,
        i,
        o,
        r,
        s = t._gsap || bt(t),
        a = t.style,
        l = di(t);
    return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(o = t.transform.baseVal.consolidate().matrix).a, o.b, o.c, o.d, o.e, o.f]).join(",") ? li : l : (l !== li || t.offsetParent || t === vn || s.svg || (o = a.display, a.display = "block", (n = t.parentNode) && gn.body.contains(t) || (r = 1, i = t.nextSibling, vn.appendChild(t)), l = di(t), o ? a.display = o : Jn(t, "display"), r && (i ? n.insertBefore(t, i) : n ? n.appendChild(t) : vn.removeChild(t))), e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
  },
      fi = function fi(t, e, n, i, o, r) {
    var s,
        a,
        l,
        c = t._gsap,
        u = o || pi(t, !0),
        d = c.xOrigin || 0,
        p = c.yOrigin || 0,
        f = c.xOffset || 0,
        h = c.yOffset || 0,
        g = u[0],
        v = u[1],
        m = u[2],
        y = u[3],
        b = u[4],
        x = u[5],
        w = e.split(" "),
        T = parseFloat(w[0]) || 0,
        S = parseFloat(w[1]) || 0;
    n ? u !== li && (a = g * y - v * m) && (l = T * (-v / a) + S * (g / a) - (g * x - v * b) / a, T = T * (y / a) + S * (-m / a) + (m * x - y * b) / a, S = l) : (T = (s = Kn(t)).x + (~w[0].indexOf("%") ? T / 100 * s.width : T), S = s.y + (~(w[1] || w[0]).indexOf("%") ? S / 100 * s.height : S)), i || !1 !== i && c.smooth ? (b = T - d, x = S - p, c.xOffset = f + (b * g + x * m) - b, c.yOffset = h + (b * v + x * y) - x) : c.xOffset = c.yOffset = 0, c.xOrigin = T, c.yOrigin = S, c.smooth = !!i, c.origin = e, c.originIsAbsolute = !!n, t.style[Bn] = "0px 0px", r && (ti(r, c, "xOrigin", d, T), ti(r, c, "yOrigin", p, S), ti(r, c, "xOffset", f, c.xOffset), ti(r, c, "yOffset", h, c.yOffset)), t.setAttribute("data-svg-origin", T + " " + S);
  },
      hi = function hi(t, e) {
    var n = t._gsap || new Ne(t);
    if ("x" in n && !e && !n.uncache) return n;

    var i,
        o,
        r,
        s,
        a,
        l,
        c,
        u,
        d,
        p,
        f,
        h,
        g,
        v,
        m,
        y,
        b,
        x,
        w,
        T,
        S,
        k,
        C,
        _,
        $,
        A,
        P,
        E,
        O,
        D,
        L,
        j,
        H = t.style,
        N = n.scaleX < 0,
        z = Xn(t, Bn) || "0";

    return i = o = r = l = c = u = d = p = f = 0, s = a = 1, n.svg = !(!t.getCTM || !Qn(t)), v = pi(t, n.svg), n.svg && (_ = !n.uncache && t.getAttribute("data-svg-origin"), fi(t, _ || z, !!_ || n.originIsAbsolute, !1 !== n.smooth, v)), h = n.xOrigin || 0, g = n.yOrigin || 0, v !== li && (x = v[0], w = v[1], T = v[2], S = v[3], i = k = v[4], o = C = v[5], 6 === v.length ? (s = Math.sqrt(x * x + w * w), a = Math.sqrt(S * S + T * T), l = x || w ? Cn(w, x) * Sn : 0, (d = T || S ? Cn(T, S) * Sn + l : 0) && (a *= Math.cos(d * kn)), n.svg && (i -= h - (h * x + g * T), o -= g - (h * w + g * S))) : (j = v[6], D = v[7], P = v[8], E = v[9], O = v[10], L = v[11], i = v[12], o = v[13], r = v[14], c = (m = Cn(j, O)) * Sn, m && (_ = k * (y = Math.cos(-m)) + P * (b = Math.sin(-m)), $ = C * y + E * b, A = j * y + O * b, P = k * -b + P * y, E = C * -b + E * y, O = j * -b + O * y, L = D * -b + L * y, k = _, C = $, j = A), u = (m = Cn(-T, O)) * Sn, m && (y = Math.cos(-m), L = S * (b = Math.sin(-m)) + L * y, x = _ = x * y - P * b, w = $ = w * y - E * b, T = A = T * y - O * b), l = (m = Cn(w, x)) * Sn, m && (_ = x * (y = Math.cos(m)) + w * (b = Math.sin(m)), $ = k * y + C * b, w = w * y - x * b, C = C * y - k * b, x = _, k = $), c && Math.abs(c) + Math.abs(l) > 359.9 && (c = l = 0, u = 180 - u), s = Tt(Math.sqrt(x * x + w * w + T * T)), a = Tt(Math.sqrt(C * C + j * j)), m = Cn(k, C), d = Math.abs(m) > 2e-4 ? m * Sn : 0, f = L ? 1 / (L < 0 ? -L : L) : 0), n.svg && (_ = t.getAttribute("transform"), n.forceCSS = t.setAttribute("transform", "") || !ui(Xn(t, Rn)), _ && t.setAttribute("transform", _))), Math.abs(d) > 90 && Math.abs(d) < 270 && (N ? (s *= -1, d += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (a *= -1, d += d <= 0 ? 180 : -180)), n.x = ((n.xPercent = i && Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0) ? 0 : i) + "px", n.y = ((n.yPercent = o && Math.round(t.offsetHeight / 2) === Math.round(-o) ? -50 : 0) ? 0 : o) + "px", n.z = r + "px", n.scaleX = Tt(s), n.scaleY = Tt(a), n.rotation = Tt(l) + "deg", n.rotationX = Tt(c) + "deg", n.rotationY = Tt(u) + "deg", n.skewX = d + "deg", n.skewY = p + "deg", n.transformPerspective = f + "px", (n.zOrigin = parseFloat(z.split(" ")[2]) || 0) && (H[Bn] = gi(z)), n.xOffset = n.yOffset = 0, n.force3D = M.force3D, n.renderTransform = n.svg ? bi : wn ? yi : mi, n.uncache = 0, n;
  },
      gi = function gi(t) {
    return (t = t.split(" "))[0] + " " + t[1];
  },
      vi = function vi(t, e, n) {
    var i = Jt(e);
    return Tt(parseFloat(e) + parseFloat(ni(t, "x", n + "px", i))) + i;
  },
      mi = function mi(t, e) {
    e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, yi(t, e);
  },
      yi = function yi(t, e) {
    var n = e || this,
        i = n.xPercent,
        o = n.yPercent,
        r = n.x,
        s = n.y,
        a = n.z,
        l = n.rotation,
        c = n.rotationY,
        u = n.rotationX,
        d = n.skewX,
        p = n.skewY,
        f = n.scaleX,
        h = n.scaleY,
        g = n.transformPerspective,
        v = n.force3D,
        m = n.target,
        y = n.zOrigin,
        b = "",
        x = "auto" === v && t && 1 !== t || !0 === v;

    if (y && ("0deg" !== u || "0deg" !== c)) {
      var w,
          T = parseFloat(c) * kn,
          S = Math.sin(T),
          k = Math.cos(T);
      T = parseFloat(u) * kn, w = Math.cos(T), r = vi(m, r, S * w * -y), s = vi(m, s, -Math.sin(T) * -y), a = vi(m, a, k * w * -y + y);
    }

    "0px" !== g && (b += "perspective(" + g + ") "), (i || o) && (b += "translate(" + i + "%, " + o + "%) "), (x || "0px" !== r || "0px" !== s || "0px" !== a) && (b += "0px" !== a || x ? "translate3d(" + r + ", " + s + ", " + a + ") " : "translate(" + r + ", " + s + ") "), "0deg" !== l && (b += "rotate(" + l + ") "), "0deg" !== c && (b += "rotateY(" + c + ") "), "0deg" !== u && (b += "rotateX(" + u + ") "), "0deg" === d && "0deg" === p || (b += "skew(" + d + ", " + p + ") "), 1 === f && 1 === h || (b += "scale(" + f + ", " + h + ") "), m.style[Rn] = b || "translate(0, 0)";
  },
      bi = function bi(t, e) {
    var n,
        i,
        o,
        r,
        s,
        a = e || this,
        l = a.xPercent,
        c = a.yPercent,
        u = a.x,
        d = a.y,
        p = a.rotation,
        f = a.skewX,
        h = a.skewY,
        g = a.scaleX,
        v = a.scaleY,
        m = a.target,
        y = a.xOrigin,
        b = a.yOrigin,
        x = a.xOffset,
        w = a.yOffset,
        T = a.forceCSS,
        S = parseFloat(u),
        k = parseFloat(d);
    p = parseFloat(p), f = parseFloat(f), (h = parseFloat(h)) && (f += h = parseFloat(h), p += h), p || f ? (p *= kn, f *= kn, n = Math.cos(p) * g, i = Math.sin(p) * g, o = Math.sin(p - f) * -v, r = Math.cos(p - f) * v, f && (h *= kn, s = Math.tan(f - h), o *= s = Math.sqrt(1 + s * s), r *= s, h && (s = Math.tan(h), n *= s = Math.sqrt(1 + s * s), i *= s)), n = Tt(n), i = Tt(i), o = Tt(o), r = Tt(r)) : (n = g, r = v, i = o = 0), (S && !~(u + "").indexOf("px") || k && !~(d + "").indexOf("px")) && (S = ni(m, "x", u, "px"), k = ni(m, "y", d, "px")), (y || b || x || w) && (S = Tt(S + y - (y * n + b * o) + x), k = Tt(k + b - (y * i + b * r) + w)), (l || c) && (s = m.getBBox(), S = Tt(S + l / 100 * s.width), k = Tt(k + c / 100 * s.height)), s = "matrix(" + n + "," + i + "," + o + "," + r + "," + S + "," + k + ")", m.setAttribute("transform", s), T && (m.style[Rn] = s);
  },
      xi = function xi(t, e, n, i, o, r) {
    var s,
        a,
        l = q(o),
        c = parseFloat(o) * (l && ~o.indexOf("rad") ? Sn : 1),
        u = r ? c * r : c - i,
        d = i + u + "deg";
    return l && ("short" === (s = o.split("_")[1]) && (u %= 360) !== u % 180 && (u += u < 0 ? 360 : -360), "cw" === s && u < 0 ? u = (u + 36e9) % 360 - 360 * ~~(u / 360) : "ccw" === s && u > 0 && (u = (u - 36e9) % 360 - 360 * ~~(u / 360))), t._pt = a = new cn(t._pt, e, n, i, u, On), a.e = d, a.u = "deg", t._props.push(n), a;
  },
      wi = function wi(t, e, n) {
    var i,
        o,
        r,
        s,
        a,
        l,
        c,
        u = bn.style,
        d = n._gsap;

    for (o in u.cssText = getComputedStyle(n).cssText + ";position:absolute;display:block;", u[Rn] = e, gn.body.appendChild(bn), i = hi(bn, 1), Tn) {
      (r = d[o]) !== (s = i[o]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(o) < 0 && (a = Jt(r) !== (c = Jt(s)) ? ni(n, o, r, c) : parseFloat(r), l = parseFloat(s), t._pt = new cn(t._pt, d, o, a, l - a, En), t._pt.u = c || 0, t._props.push(o));
    }

    gn.body.removeChild(bn);
  };

  wt("padding,margin,Width,Radius", function (t, e) {
    var n = "Top",
        i = "Right",
        o = "Bottom",
        r = "Left",
        s = (e < 3 ? [n, i, o, r] : [n + r, n + i, o + i, o + r]).map(function (n) {
      return e < 2 ? t + n : "border" + n + t;
    });

    ai[e > 1 ? "border" + t : t] = function (t, e, n, i, o) {
      var r, a;
      if (arguments.length < 4) return r = s.map(function (e) {
        return ii(t, e, n);
      }), 5 === (a = r.join(" ")).split(r[0]).length ? r[0] : a;
      r = (i + "").split(" "), a = {}, s.forEach(function (t, e) {
        return a[t] = r[e] = r[e] || r[(e - 1) / 2 | 0];
      }), t.init(e, a, o);
    };
  });
  var Ti,
      Si,
      ki = {
    name: "css",
    register: Vn,
    targetTest: function targetTest(t) {
      return t.style && t.nodeType;
    },
    init: function init(t, e, n, i, o) {
      var r,
          s,
          a,
          l,
          c,
          u,
          d,
          p,
          f,
          h,
          g,
          v,
          m,
          y,
          b,
          x,
          w,
          T,
          S,
          k = this._props,
          C = t.style;

      for (d in mn || Vn(), e) {
        if ("autoRound" !== d && (s = e[d], !ft[d] || !Be(d, e, n, i, t, o))) if (c = _typeof(s), u = ai[d], "function" === c && (c = _typeof(s = s.call(n, i, t, o))), "string" === c && ~s.indexOf("random(") && (s = ue(s)), u) u(this, t, d, s, n) && (b = 1);else if ("--" === d.substr(0, 2)) this.add(C, "setProperty", getComputedStyle(t).getPropertyValue(d) + "", s + "", i, o, 0, 0, d);else {
          if (r = ii(t, d), l = parseFloat(r), (h = "string" === c && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)), a = parseFloat(s), d in Pn && ("autoAlpha" === d && (1 === l && "hidden" === ii(t, "visibility") && a && (l = 0), ti(this, C, "visibility", l ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== d && "transform" !== d && ~(d = Pn[d]).indexOf(",") && (d = d.split(",")[0])), g = d in Tn) {
            if (v || ((m = t._gsap).renderTransform || hi(t), y = !1 !== e.smoothOrigin && m.smooth, (v = this._pt = new cn(this._pt, C, Rn, 0, 1, m.renderTransform, m, 0, -1)).dep = 1), "scale" === d) this._pt = new cn(this._pt, m, "scaleY", m.scaleY, h ? h * a : a - m.scaleY), k.push("scaleY", d), d += "X";else {
              if ("transformOrigin" === d) {
                w = void 0, T = void 0, S = void 0, w = (x = s).split(" "), T = w[0], S = w[1] || "50%", "top" !== T && "bottom" !== T && "left" !== S && "right" !== S || (x = T, T = S, S = x), w[0] = ri[T] || T, w[1] = ri[S] || S, s = w.join(" "), m.svg ? fi(t, s, 0, y, 0, this) : ((f = parseFloat(s.split(" ")[2]) || 0) !== m.zOrigin && ti(this, m, "zOrigin", m.zOrigin, f), ti(this, C, d, gi(r), gi(s)));
                continue;
              }

              if ("svgOrigin" === d) {
                fi(t, s, 1, y, 0, this);
                continue;
              }

              if (d in ci) {
                xi(this, m, d, l, s, h);
                continue;
              }

              if ("smoothOrigin" === d) {
                ti(this, m, "smooth", m.smooth, s);
                continue;
              }

              if ("force3D" === d) {
                m[d] = s;
                continue;
              }

              if ("transform" === d) {
                wi(this, s, t);
                continue;
              }
            }
          } else d in C || (d = Un(d) || d);
          if (g || (a || 0 === a) && (l || 0 === l) && !An.test(s) && d in C) a || (a = 0), (p = (r + "").substr((l + "").length)) !== (f = (s + "").substr((a + "").length) || (d in M.units ? M.units[d] : p)) && (l = ni(t, d, r, f)), this._pt = new cn(this._pt, g ? m : C, d, l, h ? h * a : a - l, "px" !== f || !1 === e.autoRound || g ? En : Dn), this._pt.u = f || 0, p !== f && (this._pt.b = r, this._pt.r = Mn);else if (d in C) oi.call(this, t, d, r, s);else {
            if (!(d in t)) {
              st(d, s);
              continue;
            }

            this.add(t, d, t[d], s, i, o);
          }
          k.push(d);
        }
      }

      b && ln(this);
    },
    get: ii,
    aliases: Pn,
    getSetter: function getSetter(t, e, n) {
      var i = Pn[e];
      return i && i.indexOf(",") < 0 && (e = i), e in Tn && e !== Bn && (t._gsap.x || ii(t, "x")) ? n && xn === n ? "scale" === e ? In : zn : (xn = n || {}) && ("scale" === e ? Fn : qn) : t.style && !W(t.style[e]) ? Hn : ~e.indexOf("-") ? Nn : Je(t, e);
    },
    core: {
      _removeProperty: Jn,
      _getMatrix: pi
    }
  };
  fn.utils.checkPrefix = Un, Si = wt("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + (Ti = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
    Tn[t] = 1;
  }), wt(Ti, function (t) {
    M.units[t] = "deg", ci[t] = 1;
  }), Pn[Si[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Ti, wt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
    var e = t.split(":");
    Pn[e[1]] = Si[e[0]];
  }), wt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
    M.units[t] = "px";
  }), fn.registerPlugin(ki);
  var Ci = fn.registerPlugin(ki) || fn;
  Ci.core.Tween;
  Ci.timeline().from(".title__big", {
    x: 100,
    opacity: 0,
    duration: 1.5
  }).from(".title__sub", {
    x: -100,
    opacity: 0,
    duration: 1.5
  }, 0).from(".intro__znak", {
    opacity: 0
  }, "-=.75").from(".intro__btn", {
    opacity: 0,
    scale: 1.3
  }, "-=1").from(".intro__img", {
    opacity: 0,
    duration: 3
  }, 0), o()();
}]);