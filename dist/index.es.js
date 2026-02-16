import Oe, { useState as P, useRef as ke, useEffect as ae, useMemo as Ke } from "react";
import { ChevronDown as dr, Search as ze, Check as Fr, X as Ae, Filter as Dr, ChevronLeft as Ar, ChevronRight as Ir, EllipsisVertical as Lr, User as cr, Plus as Br } from "lucide-react";
import { createPortal as $r } from "react-dom";
import { Icon as He } from "@iconify/react";
import { Editor as Gr } from "@tinymce/tinymce-react";
import { SnackbarProvider as Yr, enqueueSnackbar as $e } from "notistack";
import a from "prop-types";
var Ue = { exports: {} }, _e = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nr;
function Kr() {
  if (nr) return _e;
  nr = 1;
  var h = Oe, c = Symbol.for("react.element"), s = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, d = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, t = { key: !0, ref: !0, __self: !0, __source: !0 };
  function n(N, y, v) {
    var f, u = {}, g = null, C = null;
    v !== void 0 && (g = "" + v), y.key !== void 0 && (g = "" + y.key), y.ref !== void 0 && (C = y.ref);
    for (f in y) i.call(y, f) && !t.hasOwnProperty(f) && (u[f] = y[f]);
    if (N && N.defaultProps) for (f in y = N.defaultProps, y) u[f] === void 0 && (u[f] = y[f]);
    return { $$typeof: c, type: N, key: g, ref: C, props: u, _owner: d.current };
  }
  return _e.Fragment = s, _e.jsx = n, _e.jsxs = n, _e;
}
var Pe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lr;
function Ur() {
  return lr || (lr = 1, process.env.NODE_ENV !== "production" && function() {
    var h = Oe, c = Symbol.for("react.element"), s = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), t = Symbol.for("react.profiler"), n = Symbol.for("react.provider"), N = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), p = Symbol.iterator, E = "@@iterator";
    function M(r) {
      if (r === null || typeof r != "object")
        return null;
      var o = p && r[p] || r[E];
      return typeof o == "function" ? o : null;
    }
    var R = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(r) {
      {
        for (var o = arguments.length, b = new Array(o > 1 ? o - 1 : 0), k = 1; k < o; k++)
          b[k - 1] = arguments[k];
        L("error", r, b);
      }
    }
    function L(r, o, b) {
      {
        var k = R.ReactDebugCurrentFrame, I = k.getStackAddendum();
        I !== "" && (o += "%s", b = b.concat([I]));
        var Y = b.map(function(D) {
          return String(D);
        });
        Y.unshift("Warning: " + o), Function.prototype.apply.call(console[r], console, Y);
      }
    }
    var U = !1, V = !1, Z = !1, $ = !1, x = !1, B;
    B = Symbol.for("react.module.reference");
    function G(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === i || r === t || x || r === d || r === v || r === f || $ || r === C || U || V || Z || typeof r == "object" && r !== null && (r.$$typeof === g || r.$$typeof === u || r.$$typeof === n || r.$$typeof === N || r.$$typeof === y || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === B || r.getModuleId !== void 0));
    }
    function T(r, o, b) {
      var k = r.displayName;
      if (k)
        return k;
      var I = o.displayName || o.name || "";
      return I !== "" ? b + "(" + I + ")" : b;
    }
    function S(r) {
      return r.displayName || "Context";
    }
    function O(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case i:
          return "Fragment";
        case s:
          return "Portal";
        case t:
          return "Profiler";
        case d:
          return "StrictMode";
        case v:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case N:
            var o = r;
            return S(o) + ".Consumer";
          case n:
            var b = r;
            return S(b._context) + ".Provider";
          case y:
            return T(r, r.render, "ForwardRef");
          case u:
            var k = r.displayName || null;
            return k !== null ? k : O(r.type) || "Memo";
          case g: {
            var I = r, Y = I._payload, D = I._init;
            try {
              return O(D(Y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, Q = 0, oe, pe, ye, ge, ve, fe, se;
    function Se() {
    }
    Se.__reactDisabledLog = !0;
    function Ee() {
      {
        if (Q === 0) {
          oe = console.log, pe = console.info, ye = console.warn, ge = console.error, ve = console.group, fe = console.groupCollapsed, se = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: Se,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        Q++;
      }
    }
    function Te() {
      {
        if (Q--, Q === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, r, {
              value: oe
            }),
            info: W({}, r, {
              value: pe
            }),
            warn: W({}, r, {
              value: ye
            }),
            error: W({}, r, {
              value: ge
            }),
            group: W({}, r, {
              value: ve
            }),
            groupCollapsed: W({}, r, {
              value: fe
            }),
            groupEnd: W({}, r, {
              value: se
            })
          });
        }
        Q < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var me = R.ReactCurrentDispatcher, ie;
    function de(r, o, b) {
      {
        if (ie === void 0)
          try {
            throw Error();
          } catch (I) {
            var k = I.stack.trim().match(/\n( *(at )?)/);
            ie = k && k[1] || "";
          }
        return `
` + ie + r;
      }
    }
    var xe = !1, ce;
    {
      var Ne = typeof WeakMap == "function" ? WeakMap : Map;
      ce = new Ne();
    }
    function we(r, o) {
      if (!r || xe)
        return "";
      {
        var b = ce.get(r);
        if (b !== void 0)
          return b;
      }
      var k;
      xe = !0;
      var I = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Y;
      Y = me.current, me.current = null, Ee();
      try {
        if (o) {
          var D = function() {
            throw Error();
          };
          if (Object.defineProperty(D.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(D, []);
            } catch (he) {
              k = he;
            }
            Reflect.construct(r, [], D);
          } else {
            try {
              D.call();
            } catch (he) {
              k = he;
            }
            r.call(D.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (he) {
            k = he;
          }
          r();
        }
      } catch (he) {
        if (he && k && typeof he.stack == "string") {
          for (var _ = he.stack.split(`
`), re = k.stack.split(`
`), q = _.length - 1, J = re.length - 1; q >= 1 && J >= 0 && _[q] !== re[J]; )
            J--;
          for (; q >= 1 && J >= 0; q--, J--)
            if (_[q] !== re[J]) {
              if (q !== 1 || J !== 1)
                do
                  if (q--, J--, J < 0 || _[q] !== re[J]) {
                    var ne = `
` + _[q].replace(" at new ", " at ");
                    return r.displayName && ne.includes("<anonymous>") && (ne = ne.replace("<anonymous>", r.displayName)), typeof r == "function" && ce.set(r, ne), ne;
                  }
                while (q >= 1 && J >= 0);
              break;
            }
        }
      } finally {
        xe = !1, me.current = Y, Te(), Error.prepareStackTrace = I;
      }
      var Re = r ? r.displayName || r.name : "", tr = Re ? de(Re) : "";
      return typeof r == "function" && ce.set(r, tr), tr;
    }
    function l(r, o, b) {
      return we(r, !1);
    }
    function m(r) {
      var o = r.prototype;
      return !!(o && o.isReactComponent);
    }
    function A(r, o, b) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return we(r, m(r));
      if (typeof r == "string")
        return de(r);
      switch (r) {
        case v:
          return de("Suspense");
        case f:
          return de("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case y:
            return l(r.render);
          case u:
            return A(r.type, o, b);
          case g: {
            var k = r, I = k._payload, Y = k._init;
            try {
              return A(Y(I), o, b);
            } catch {
            }
          }
        }
      return "";
    }
    var H = Object.prototype.hasOwnProperty, z = {}, te = R.ReactDebugCurrentFrame;
    function X(r) {
      if (r) {
        var o = r._owner, b = A(r.type, r._source, o ? o.type : null);
        te.setExtraStackFrame(b);
      } else
        te.setExtraStackFrame(null);
    }
    function ue(r, o, b, k, I) {
      {
        var Y = Function.call.bind(H);
        for (var D in r)
          if (Y(r, D)) {
            var _ = void 0;
            try {
              if (typeof r[D] != "function") {
                var re = Error((k || "React class") + ": " + b + " type `" + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[D] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw re.name = "Invariant Violation", re;
              }
              _ = r[D](o, D, k, b, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (q) {
              _ = q;
            }
            _ && !(_ instanceof Error) && (X(I), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", k || "React class", b, D, typeof _), X(null)), _ instanceof Error && !(_.message in z) && (z[_.message] = !0, X(I), w("Failed %s type: %s", b, _.message), X(null));
          }
      }
    }
    var je = Array.isArray;
    function j(r) {
      return je(r);
    }
    function F(r) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, b = o && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return b;
      }
    }
    function K(r) {
      try {
        return le(r), !1;
      } catch {
        return !0;
      }
    }
    function le(r) {
      return "" + r;
    }
    function ee(r) {
      if (K(r))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", F(r)), le(r);
    }
    var We = R.ReactCurrentOwner, xr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, qe, Je;
    function yr(r) {
      if (H.call(r, "ref")) {
        var o = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function vr(r) {
      if (H.call(r, "key")) {
        var o = Object.getOwnPropertyDescriptor(r, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function wr(r, o) {
      typeof r.ref == "string" && We.current;
    }
    function jr(r, o) {
      {
        var b = function() {
          qe || (qe = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        b.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: b,
          configurable: !0
        });
      }
    }
    function kr(r, o) {
      {
        var b = function() {
          Je || (Je = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        b.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: b,
          configurable: !0
        });
      }
    }
    var Sr = function(r, o, b, k, I, Y, D) {
      var _ = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: c,
        // Built-in properties that belong on the element
        type: r,
        key: o,
        ref: b,
        props: D,
        // Record the component responsible for creating this element.
        _owner: Y
      };
      return _._store = {}, Object.defineProperty(_._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(_, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.defineProperty(_, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: I
      }), Object.freeze && (Object.freeze(_.props), Object.freeze(_)), _;
    };
    function Nr(r, o, b, k, I) {
      {
        var Y, D = {}, _ = null, re = null;
        b !== void 0 && (ee(b), _ = "" + b), vr(o) && (ee(o.key), _ = "" + o.key), yr(o) && (re = o.ref, wr(o, I));
        for (Y in o)
          H.call(o, Y) && !xr.hasOwnProperty(Y) && (D[Y] = o[Y]);
        if (r && r.defaultProps) {
          var q = r.defaultProps;
          for (Y in q)
            D[Y] === void 0 && (D[Y] = q[Y]);
        }
        if (_ || re) {
          var J = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          _ && jr(D, J), re && kr(D, J);
        }
        return Sr(r, _, re, I, k, We.current, D);
      }
    }
    var Ie = R.ReactCurrentOwner, Ze = R.ReactDebugCurrentFrame;
    function Ce(r) {
      if (r) {
        var o = r._owner, b = A(r.type, r._source, o ? o.type : null);
        Ze.setExtraStackFrame(b);
      } else
        Ze.setExtraStackFrame(null);
    }
    var Le;
    Le = !1;
    function Be(r) {
      return typeof r == "object" && r !== null && r.$$typeof === c;
    }
    function Xe() {
      {
        if (Ie.current) {
          var r = O(Ie.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function Cr(r) {
      return "";
    }
    var Qe = {};
    function Rr(r) {
      {
        var o = Xe();
        if (!o) {
          var b = typeof r == "string" ? r : r.displayName || r.name;
          b && (o = `

Check the top-level render call using <` + b + ">.");
        }
        return o;
      }
    }
    function er(r, o) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var b = Rr(o);
        if (Qe[b])
          return;
        Qe[b] = !0;
        var k = "";
        r && r._owner && r._owner !== Ie.current && (k = " It was passed a child from " + O(r._owner.type) + "."), Ce(r), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', b, k), Ce(null);
      }
    }
    function rr(r, o) {
      {
        if (typeof r != "object")
          return;
        if (j(r))
          for (var b = 0; b < r.length; b++) {
            var k = r[b];
            Be(k) && er(k, o);
          }
        else if (Be(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var I = M(r);
          if (typeof I == "function" && I !== r.entries)
            for (var Y = I.call(r), D; !(D = Y.next()).done; )
              Be(D.value) && er(D.value, o);
        }
      }
    }
    function Mr(r) {
      {
        var o = r.type;
        if (o == null || typeof o == "string")
          return;
        var b;
        if (typeof o == "function")
          b = o.propTypes;
        else if (typeof o == "object" && (o.$$typeof === y || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        o.$$typeof === u))
          b = o.propTypes;
        else
          return;
        if (b) {
          var k = O(o);
          ue(b, r.props, "prop", k, r);
        } else if (o.PropTypes !== void 0 && !Le) {
          Le = !0;
          var I = O(o);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", I || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Er(r) {
      {
        for (var o = Object.keys(r.props), b = 0; b < o.length; b++) {
          var k = o[b];
          if (k !== "children" && k !== "key") {
            Ce(r), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", k), Ce(null);
            break;
          }
        }
        r.ref !== null && (Ce(r), w("Invalid attribute `ref` supplied to `React.Fragment`."), Ce(null));
      }
    }
    function ar(r, o, b, k, I, Y) {
      {
        var D = G(r);
        if (!D) {
          var _ = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (_ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var re = Cr();
          re ? _ += re : _ += Xe();
          var q;
          r === null ? q = "null" : j(r) ? q = "array" : r !== void 0 && r.$$typeof === c ? (q = "<" + (O(r.type) || "Unknown") + " />", _ = " Did you accidentally export a JSX literal instead of a component?") : q = typeof r, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", q, _);
        }
        var J = Nr(r, o, b, I, Y);
        if (J == null)
          return J;
        if (D) {
          var ne = o.children;
          if (ne !== void 0)
            if (k)
              if (j(ne)) {
                for (var Re = 0; Re < ne.length; Re++)
                  rr(ne[Re], r);
                Object.freeze && Object.freeze(ne);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              rr(ne, r);
        }
        return r === i ? Er(J) : Mr(J), J;
      }
    }
    function Tr(r, o, b) {
      return ar(r, o, b, !0);
    }
    function _r(r, o, b) {
      return ar(r, o, b, !1);
    }
    var Pr = _r, Or = Tr;
    Pe.Fragment = i, Pe.jsx = Pr, Pe.jsxs = Or;
  }()), Pe;
}
process.env.NODE_ENV === "production" ? Ue.exports = Kr() : Ue.exports = Ur();
var e = Ue.exports;
const ur = (h, c = "DD MMM YYYY") => {
  if (!h) return "N/A";
  const s = new Date(h);
  if (isNaN(s)) return "Invalid Date";
  const i = (t) => String(t).padStart(2, "0"), d = {
    YYYY: s.getFullYear(),
    YY: String(s.getFullYear()).slice(-2),
    MMMM: s.toLocaleString("en-US", { month: "long" }),
    MMM: s.toLocaleString("en-US", { month: "short" }),
    MM: i(s.getMonth() + 1),
    M: s.getMonth() + 1,
    DD: i(s.getDate()),
    D: s.getDate(),
    dddd: s.toLocaleString("en-US", { weekday: "long" }),
    ddd: s.toLocaleString("en-US", { weekday: "short" }),
    HH: i(s.getHours()),
    hh: i(s.getHours() % 12 || 12),
    mm: i(s.getMinutes()),
    ss: i(s.getSeconds()),
    A: s.getHours() >= 12 ? "PM" : "AM"
  };
  return c.replace(
    /YYYY|YY|MMMM|MMM|MM|M|DD|D|dddd|ddd|HH|hh|mm|ss|A/g,
    (t) => d[t]
  );
}, zr = (h, c, s = []) => {
  if (!(c != null && c.trim())) return h;
  const i = c.toLowerCase(), d = (t) => t == null ? [] : typeof t == "object" ? Object.values(t).flatMap(d) : [String(t)];
  return h.filter((t) => {
    let n = [];
    return s.length > 0 ? s.forEach((N) => {
      t[N] !== void 0 && n.push(...d(t[N]));
    }) : n = d(t), n.some(
      (N) => N.toLowerCase().includes(i)
    );
  });
}, Me = Oe.forwardRef(
  ({
    className: h = "",
    variant: c = "contained",
    color: s = "default",
    size: i = "default",
    fullWidth: d = !1,
    children: t,
    ...n
  }, N) => {
    var p;
    const y = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", v = {
      sm: "h-8 px-3 rounded-md text-sm",
      md: "h-9 px-4 rounded-md text-sm",
      lg: "h-11 px-6 rounded-md text-base",
      xl: "h-12 px-8 rounded-lg text-lg",
      default: "h-9 px-4 rounded-md text-sm"
    }, f = {
      primary: {
        contained: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-sm",
        outlined: "border border-blue-600 bg-transparent text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
        text: "bg-transparent text-blue-600 hover:bg-blue-50 focus:ring-blue-500"
      },
      success: {
        contained: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 shadow-sm",
        outlined: "border border-green-600 bg-transparent text-green-600 hover:bg-green-50 focus:ring-green-500",
        text: "bg-transparent text-green-600 hover:bg-green-50 focus:ring-green-500"
      },
      error: {
        contained: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-sm",
        outlined: "border border-red-600 bg-transparent text-red-600 hover:bg-red-50 focus:ring-red-500",
        text: "bg-transparent text-red-600 hover:bg-red-50 focus:ring-red-500"
      },
      default: {
        contained: "border bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 dark:focus:ring-gray-600",
        outlined: "border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-300 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-500",
        text: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-300 dark:text-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-500"
      }
    }, u = ((p = f[s]) == null ? void 0 : p[c]) || f.default.contained, g = v[i], C = `
      ${y} 
      ${u} 
      ${g} 
      ${d ? "w-full" : ""} 
      ${h}
    `.trim();
    return /* @__PURE__ */ e.jsx(
      "button",
      {
        ref: N,
        type: n.type || "button",
        className: C,
        ...n,
        children: t
      }
    );
  }
);
Me.displayName = "Button";
function be({ label: h, required: c = !1 }) {
  return /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: [
    h,
    c && /* @__PURE__ */ e.jsx("span", { className: "ml-1", children: "*" })
  ] }) });
}
const Hr = ({
  options: h = [],
  value: c,
  onChange: s,
  placeholder: i = "Select option",
  className: d = "",
  disabled: t = !1,
  search: n = !1,
  label: N = "",
  required: y = !1,
  name: v = "",
  parentClass: f = "",
  multiple: u = !1,
  // ✅ NEW
  dropdownMaxHeight: g = ""
}) => {
  var T;
  const [C, p] = P(!1), [E, M] = P(""), [R, w] = P(!0), L = ke(null), U = ke(null), V = (S) => String(typeof S == "boolean" ? S : S ?? ""), Z = u ? (c || []).map(V) : V(c), $ = h.filter(
    (S) => S.label.toLowerCase().includes(E.toLowerCase())
  ), x = (S) => {
    const O = V(S);
    return u ? Z.includes(O) : O === Z;
  };
  ae(() => {
    const S = (O) => {
      L.current && !L.current.contains(O.target) && (p(!1), M(""));
    };
    return document.addEventListener("mousedown", S), () => document.removeEventListener("mousedown", S);
  }, []), ae(() => {
    if (C && L.current) {
      const S = L.current.getBoundingClientRect(), W = window.innerHeight - S.bottom;
      w(W < 200);
    }
  }, [C]), ae(() => {
    C && U.current && U.current.focus();
  }, [C]);
  const B = (S) => {
    let O = S;
    if (S === "true" ? O = !0 : S === "false" && (O = !1), u) {
      const W = Z.includes(V(S));
      let Q;
      W ? Q = c.filter(
        (oe) => V(oe) !== V(S)
      ) : Q = [...c || [], O], s(Q);
    } else
      s(O), p(!1);
    M("");
  }, G = u ? h.filter((S) => x(S.value)).map((S) => S.label).join(", ") : (T = h.find((S) => x(S.value))) == null ? void 0 : T.label;
  return /* @__PURE__ */ e.jsxs("div", { className: f || "col-span-12", children: [
    /* @__PURE__ */ e.jsx(be, { label: N, required: y }),
    /* @__PURE__ */ e.jsxs("div", { className: `relative ${d}`, ref: L, children: [
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          type: "button",
          onClick: () => !t && p(!C),
          disabled: t,
          className: `w-full h-10 px-3 border border-gray-300 dark:border-gray-600 rounded-md text-left text-sm flex items-center justify-between 
          ${G ? "dark:text-white" : "text-gray-500 dark:text-gray-400"} 
          ${t ? "opacity-50 cursor-not-allowed" : "dark:bg-gray-700"}`,
          children: [
            /* @__PURE__ */ e.jsx("span", { className: "truncate", children: G || i }),
            /* @__PURE__ */ e.jsx(
              dr,
              {
                className: `w-4 h-4 transition-transform ${C ? "rotate-180" : ""}`
              }
            )
          ]
        }
      ),
      C && /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: `absolute z-50 w-full border rounded-md bg-white dark:bg-gray-700 shadow-lg 
            ${R ? "bottom-full mb-1" : "top-full mt-1"}`,
          children: [
            n && /* @__PURE__ */ e.jsx("div", { className: "p-2 border-b border-gray-200 dark:border-gray-600", children: /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ e.jsx(ze, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  ref: U,
                  type: "text",
                  value: E,
                  onChange: (S) => M(S.target.value),
                  placeholder: "Search...",
                  className: "w-full pl-9 pr-3 py-2 text-sm border rounded-md bg-white dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
                }
              )
            ] }) }),
            /* @__PURE__ */ e.jsx(
              "div",
              {
                className: "max-h-40 overflow-y-auto",
                style: {
                  maxHeight: g || ""
                },
                children: $.length > 0 ? $.map((S) => /* @__PURE__ */ e.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => B(String(S.value)),
                    className: `w-full px-3 py-2 text-left text-sm flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 
                    ${x(S.value) ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300" : ""}`,
                    children: [
                      /* @__PURE__ */ e.jsx("span", { children: S.label }),
                      u && x(S.value) && /* @__PURE__ */ e.jsx(Fr, { className: "w-4 h-4" })
                    ]
                  },
                  String(S.value)
                )) : /* @__PURE__ */ e.jsx("div", { className: "px-3 py-2 text-sm text-gray-500 dark:text-gray-400", children: "No options found" })
              }
            )
          ]
        }
      )
    ] })
  ] }, v);
}, Vr = ({
  value: h = !0,
  onChange: c,
  text: s,
  options: i = [],
  label: d,
  required: t,
  name: n = "",
  disabled: N = !1,
  parentClass: y = ""
}) => {
  const v = i.length > 0 ? i : [
    { label: "Active", value: !0 },
    { label: "Inactive", value: !1 }
  ];
  return /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("div", { className: y || "col-span-12", children: [
    /* @__PURE__ */ e.jsx(be, { label: d, required: t }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between h-10 gap-4 bg-gray-100 dark:bg-gray-700 px-3 rounded-md border border-gray-100 dark:border-gray-600", children: [
      s && /* @__PURE__ */ e.jsx("p", { className: "text-xs text-gray-600 dark:text-gray-400 flex-shrink overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px]", children: s }),
      /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-6", children: v.map((f, u) => /* @__PURE__ */ e.jsxs(
        "label",
        {
          className: "flex items-center gap-2 cursor-pointer select-none",
          children: [
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "radio",
                name: "switch-field",
                required: t && u === 0,
                value: f.value,
                disabled: N,
                checked: h === f.value,
                onChange: () => c(f.value),
                className: "w-4 h-4  border-gray-300 cursor-pointer"
              }
            ),
            /* @__PURE__ */ e.jsx("span", { className: "text-sm text-gray-700 dark:text-white", children: f.label })
          ]
        },
        u
      )) })
    ] })
  ] }, n) });
}, Fe = [
  { label: "Afghanistan", code: "AF", phone: "93" },
  { label: "Aland Islands", code: "AX", phone: "358" },
  { label: "Albania", code: "AL", phone: "355" },
  { label: "Algeria", code: "DZ", phone: "213" },
  { label: "American Samoa", code: "AS", phone: "1" },
  { label: "Andorra", code: "AD", phone: "376" },
  { label: "Angola", code: "AO", phone: "244" },
  { label: "Anguilla", code: "AI", phone: "1" },
  { label: "Antarctica", code: "AQ", phone: "672" },
  { label: "Antigua and Barbuda", code: "AG", phone: "1" },
  { label: "Argentina", code: "AR", phone: "54" },
  { label: "Armenia", code: "AM", phone: "374" },
  { label: "Aruba", code: "AW", phone: "297" },
  { label: "Australia", code: "AU", phone: "61" },
  { label: "Austria", code: "AT", phone: "43" },
  { label: "Azerbaijan", code: "AZ", phone: "994" },
  { label: "Bahrain", code: "BH", phone: "973" },
  { label: "Bangladesh", code: "BD", phone: "880" },
  { label: "Barbados", code: "BB", phone: "1" },
  { label: "Belarus", code: "BY", phone: "375" },
  { label: "Belgium", code: "BE", phone: "32" },
  { label: "Belize", code: "BZ", phone: "501" },
  { label: "Benin", code: "BJ", phone: "229" },
  { label: "Bermuda", code: "BM", phone: "1" },
  { label: "Bhutan", code: "BT", phone: "975" },
  { label: "Bolivia", code: "BO", phone: "591" },
  { label: "Bonaire, Sint Eustatius and Saba", code: "BQ", phone: "599" },
  { label: "Bosnia and Herzegovina", code: "BA", phone: "387" },
  { label: "Botswana", code: "BW", phone: "267" },
  { label: "Bouvet Island", code: "BV", phone: "0055" },
  { label: "Brazil", code: "BR", phone: "55" },
  { label: "British Indian Ocean Territory", code: "IO", phone: "246" },
  { label: "Brunei", code: "BN", phone: "673" },
  { label: "Bulgaria", code: "BG", phone: "359" },
  { label: "Burkina Faso", code: "BF", phone: "226" },
  { label: "Burundi", code: "BI", phone: "257" },
  { label: "Cambodia", code: "KH", phone: "855" },
  { label: "Cameroon", code: "CM", phone: "237" },
  { label: "Canada", code: "CA", phone: "1" },
  { label: "Cape Verde", code: "CV", phone: "238" },
  { label: "Cayman Islands", code: "KY", phone: "1" },
  { label: "Central African Republic", code: "CF", phone: "236" },
  { label: "Chad", code: "TD", phone: "235" },
  { label: "Chile", code: "CL", phone: "56" },
  { label: "China", code: "CN", phone: "86" },
  { label: "Christmas Island", code: "CX", phone: "61" },
  { label: "Cocos (Keeling) Islands", code: "CC", phone: "61" },
  { label: "Colombia", code: "CO", phone: "57" },
  { label: "Comoros", code: "KM", phone: "269" },
  { label: "Congo", code: "CG", phone: "242" },
  { label: "Cook Islands", code: "CK", phone: "682" },
  { label: "Costa Rica", code: "CR", phone: "506" },
  { label: "Croatia", code: "HR", phone: "385" },
  { label: "Cuba", code: "CU", phone: "53" },
  { label: "Curaçao", code: "CW", phone: "599" },
  { label: "Cyprus", code: "CY", phone: "357" },
  { label: "Czech Republic", code: "CZ", phone: "420" },
  { label: "Democratic Republic of the Congo", code: "CD", phone: "243" },
  { label: "Denmark", code: "DK", phone: "45" },
  { label: "Djibouti", code: "DJ", phone: "253" },
  { label: "Dominica", code: "DM", phone: "1" },
  { label: "Dominican Republic", code: "DO", phone: "1" },
  { label: "Ecuador", code: "EC", phone: "593" },
  { label: "Egypt", code: "EG", phone: "20" },
  { label: "El Salvador", code: "SV", phone: "503" },
  { label: "Equatorial Guinea", code: "GQ", phone: "240" },
  { label: "Eritrea", code: "ER", phone: "291" },
  { label: "Estonia", code: "EE", phone: "372" },
  { label: "Eswatini", code: "SZ", phone: "268" },
  { label: "Ethiopia", code: "ET", phone: "251" },
  { label: "Falkland Islands", code: "FK", phone: "500" },
  { label: "Faroe Islands", code: "FO", phone: "298" },
  { label: "Fiji Islands", code: "FJ", phone: "679" },
  { label: "Finland", code: "FI", phone: "358" },
  { label: "France", code: "FR", phone: "33" },
  { label: "French Guiana", code: "GF", phone: "594" },
  { label: "French Polynesia", code: "PF", phone: "689" },
  { label: "French Southern Territories", code: "TF", phone: "262" },
  { label: "Gabon", code: "GA", phone: "241" },
  { label: "Georgia", code: "GE", phone: "995" },
  { label: "Germany", code: "DE", phone: "49" },
  { label: "Ghana", code: "GH", phone: "233" },
  { label: "Gibraltar", code: "GI", phone: "350" },
  { label: "Greece", code: "GR", phone: "30" },
  { label: "Greenland", code: "GL", phone: "299" },
  { label: "Grenada", code: "GD", phone: "1" },
  { label: "Guadeloupe", code: "GP", phone: "590" },
  { label: "Guam", code: "GU", phone: "1" },
  { label: "Guatemala", code: "GT", phone: "502" },
  { label: "Guernsey", code: "GG", phone: "44" },
  { label: "Guinea", code: "GN", phone: "224" },
  { label: "Guinea-Bissau", code: "GW", phone: "245" },
  { label: "Guyana", code: "GY", phone: "592" },
  { label: "Haiti", code: "HT", phone: "509" },
  { label: "Heard Island and McDonald Islands", code: "HM", phone: "672" },
  { label: "Honduras", code: "HN", phone: "504" },
  { label: "Hong Kong S.A.R.", code: "HK", phone: "852" },
  { label: "Hungary", code: "HU", phone: "36" },
  { label: "Iceland", code: "IS", phone: "354" },
  { label: "India", code: "IN", phone: "91" },
  { label: "Indonesia", code: "ID", phone: "62" },
  { label: "Iran", code: "IR", phone: "98" },
  { label: "Iraq", code: "IQ", phone: "964" },
  { label: "Ireland", code: "IE", phone: "353" },
  { label: "Israel", code: "IL", phone: "972" },
  { label: "Italy", code: "IT", phone: "39" },
  { label: "Ivory Coast", code: "CI", phone: "225" },
  { label: "Jamaica", code: "JM", phone: "1" },
  { label: "Japan", code: "JP", phone: "81" },
  { label: "Jersey", code: "JE", phone: "44" },
  { label: "Jordan", code: "JO", phone: "962" },
  { label: "Kazakhstan", code: "KZ", phone: "7" },
  { label: "Kenya", code: "KE", phone: "254" },
  { label: "Kiribati", code: "KI", phone: "686" },
  { label: "Kosovo", code: "XK", phone: "383" },
  { label: "Kuwait", code: "KW", phone: "965" },
  { label: "Kyrgyzstan", code: "KG", phone: "996" },
  { label: "Laos", code: "LA", phone: "856" },
  { label: "Latvia", code: "LV", phone: "371" },
  { label: "Lebanon", code: "LB", phone: "961" },
  { label: "Lesotho", code: "LS", phone: "266" },
  { label: "Liberia", code: "LR", phone: "231" },
  { label: "Libya", code: "LY", phone: "218" },
  { label: "Liechtenstein", code: "LI", phone: "423" },
  { label: "Lithuania", code: "LT", phone: "370" },
  { label: "Luxembourg", code: "LU", phone: "352" },
  { label: "Macau S.A.R.", code: "MO", phone: "853" },
  { label: "Madagascar", code: "MG", phone: "261" },
  { label: "Malawi", code: "MW", phone: "265" },
  { label: "Malaysia", code: "MY", phone: "60" },
  { label: "Maldives", code: "MV", phone: "960" },
  { label: "Mali", code: "ML", phone: "223" },
  { label: "Malta", code: "MT", phone: "356" },
  { label: "Man (Isle of)", code: "IM", phone: "44" },
  { label: "Marshall Islands", code: "MH", phone: "692" },
  { label: "Martinique", code: "MQ", phone: "596" },
  { label: "Mauritania", code: "MR", phone: "222" },
  { label: "Mauritius", code: "MU", phone: "230" },
  { label: "Mayotte", code: "YT", phone: "262" },
  { label: "Mexico", code: "MX", phone: "52" },
  { label: "Micronesia", code: "FM", phone: "691" },
  { label: "Moldova", code: "MD", phone: "373" },
  { label: "Monaco", code: "MC", phone: "377" },
  { label: "Mongolia", code: "MN", phone: "976" },
  { label: "Montenegro", code: "ME", phone: "382" },
  { label: "Montserrat", code: "MS", phone: "1" },
  { label: "Morocco", code: "MA", phone: "212" },
  { label: "Mozambique", code: "MZ", phone: "258" },
  { label: "Myanmar", code: "MM", phone: "95" },
  { label: "Namibia", code: "NA", phone: "264" },
  { label: "Nauru", code: "NR", phone: "674" },
  { label: "Nepal", code: "NP", phone: "977" },
  { label: "Netherlands", code: "NL", phone: "31" },
  { label: "New Caledonia", code: "NC", phone: "687" },
  { label: "New Zealand", code: "NZ", phone: "64" },
  { label: "Nicaragua", code: "NI", phone: "505" },
  { label: "Niger", code: "NE", phone: "227" },
  { label: "Nigeria", code: "NG", phone: "234" },
  { label: "Niue", code: "NU", phone: "683" },
  { label: "Norfolk Island", code: "NF", phone: "672" },
  { label: "North Korea", code: "KP", phone: "850" },
  { label: "North Macedonia", code: "MK", phone: "389" },
  { label: "Northern Mariana Islands", code: "MP", phone: "1" },
  { label: "Norway", code: "NO", phone: "47" },
  { label: "Oman", code: "OM", phone: "968" },
  { label: "Pakistan", code: "PK", phone: "92" },
  { label: "Palau", code: "PW", phone: "680" },
  { label: "Palestinian Territory Occupied", code: "PS", phone: "970" },
  { label: "Panama", code: "PA", phone: "507" },
  { label: "Papua New Guinea", code: "PG", phone: "675" },
  { label: "Paraguay", code: "PY", phone: "595" },
  { label: "Peru", code: "PE", phone: "51" },
  { label: "Philippines", code: "PH", phone: "63" },
  { label: "Pitcairn Island", code: "PN", phone: "870" },
  { label: "Poland", code: "PL", phone: "48" },
  { label: "Portugal", code: "PT", phone: "351" },
  { label: "Puerto Rico", code: "PR", phone: "1" },
  { label: "Qatar", code: "QA", phone: "974" },
  { label: "Reunion", code: "RE", phone: "262" },
  { label: "Romania", code: "RO", phone: "40" },
  { label: "Russia", code: "RU", phone: "7" },
  { label: "Rwanda", code: "RW", phone: "250" },
  { label: "Saint Helena", code: "SH", phone: "290" },
  { label: "Saint Kitts and Nevis", code: "KN", phone: "1" },
  { label: "Saint Lucia", code: "LC", phone: "1" },
  { label: "Saint Pierre and Miquelon", code: "PM", phone: "508" },
  { label: "Saint Vincent and the Grenadines", code: "VC", phone: "1" },
  { label: "Saint-Barthelemy", code: "BL", phone: "590" },
  { label: "Saint-Martin (French part)", code: "MF", phone: "590" },
  { label: "Samoa", code: "WS", phone: "685" },
  { label: "San Marino", code: "SM", phone: "378" },
  { label: "Sao Tome and Principe", code: "ST", phone: "239" },
  { label: "Saudi Arabia", code: "SA", phone: "966" },
  { label: "Senegal", code: "SN", phone: "221" },
  { label: "Serbia", code: "RS", phone: "381" },
  { label: "Seychelles", code: "SC", phone: "248" },
  { label: "Sierra Leone", code: "SL", phone: "232" },
  { label: "Singapore", code: "SG", phone: "65" },
  { label: "Sint Maarten (Dutch part)", code: "SX", phone: "1721" },
  { label: "Slovakia", code: "SK", phone: "421" },
  { label: "Slovenia", code: "SI", phone: "386" },
  { label: "Solomon Islands", code: "SB", phone: "677" },
  { label: "Somalia", code: "SO", phone: "252" },
  { label: "South Africa", code: "ZA", phone: "27" },
  { label: "South Georgia", code: "GS", phone: "500" },
  { label: "South Korea", code: "KR", phone: "82" },
  { label: "South Sudan", code: "SS", phone: "211" },
  { label: "Spain", code: "ES", phone: "34" },
  { label: "Sri Lanka", code: "LK", phone: "94" },
  { label: "Sudan", code: "SD", phone: "249" },
  { label: "Suriname", code: "SR", phone: "597" },
  { label: "Svalbard and Jan Mayen Islands", code: "SJ", phone: "47" },
  { label: "Sweden", code: "SE", phone: "46" },
  { label: "Switzerland", code: "CH", phone: "41" },
  { label: "Syria", code: "SY", phone: "963" },
  { label: "Taiwan", code: "TW", phone: "886" },
  { label: "Tajikistan", code: "TJ", phone: "992" },
  { label: "Tanzania", code: "TZ", phone: "255" },
  { label: "Thailand", code: "TH", phone: "66" },
  { label: "The Bahamas", code: "BS", phone: "1" },
  { label: "The Gambia", code: "GM", phone: "220" },
  { label: "Timor-Leste", code: "TL", phone: "670" },
  { label: "Togo", code: "TG", phone: "228" },
  { label: "Tokelau", code: "TK", phone: "690" },
  { label: "Tonga", code: "TO", phone: "676" },
  { label: "Trinidad and Tobago", code: "TT", phone: "1" },
  { label: "Tunisia", code: "TN", phone: "216" },
  { label: "Turkey", code: "TR", phone: "90" },
  { label: "Turkmenistan", code: "TM", phone: "993" },
  { label: "Turks and Caicos Islands", code: "TC", phone: "1" },
  { label: "Tuvalu", code: "TV", phone: "688" },
  { label: "Uganda", code: "UG", phone: "256" },
  { label: "Ukraine", code: "UA", phone: "380" },
  { label: "United Arab Emirates", code: "AE", phone: "971" },
  { label: "United Kingdom", code: "GB", phone: "44" },
  { label: "United States", code: "US", phone: "1" },
  { label: "United States Minor Outlying Islands", code: "UM", phone: "1" },
  { label: "Uruguay", code: "UY", phone: "598" },
  { label: "Uzbekistan", code: "UZ", phone: "998" },
  { label: "Vanuatu", code: "VU", phone: "678" },
  { label: "Vatican City State (Holy See)", code: "VA", phone: "379" },
  { label: "Venezuela", code: "VE", phone: "58" },
  { label: "Vietnam", code: "VN", phone: "84" },
  { label: "Virgin Islands (British)", code: "VG", phone: "1" },
  { label: "Virgin Islands (US)", code: "VI", phone: "1" },
  { label: "Wallis and Futuna Islands", code: "WF", phone: "681" },
  { label: "Western Sahara", code: "EH", phone: "212" },
  { label: "Yemen", code: "YE", phone: "967" },
  { label: "Zambia", code: "ZM", phone: "260" },
  { label: "Zimbabwe", code: "ZW", phone: "263" }
];
function Wr({
  label: h = "",
  value: c = "",
  name: s = "",
  parentClass: i = "",
  onChange: d,
  disabled: t = !1,
  required: n = !1,
  placeholder: N = "Phone number",
  search: y = !1,
  countriesList: v = !1,
  defaultCountry: f = ""
}) {
  const u = (x) => Fe.find((B) => B.code == x), [g, C] = P(
    u(f) || Fe[0]
  ), [p, E] = P(""), [M, R] = P(!1), [w, L] = P(""), U = ke();
  ae(() => {
    if (typeof c == "string" && c.startsWith("+")) {
      const x = Fe.filter((B) => c.startsWith("+" + B.phone)).sort((B, G) => G.phone.length - B.phone.length)[0];
      if (x) {
        C(x), E(c.replace("+" + x.phone, ""));
        return;
      }
    }
    E(c);
  }, [c]);
  const V = (x) => {
    const B = x.target.value.replace(/\D/g, "");
    E(B), g && d && d("+" + g.phone + B);
  }, Z = (x) => {
    C(x), d && d("+" + x.phone + p), R(!1), L("");
  };
  ae(() => {
    const x = (B) => {
      U.current && !U.current.contains(B.target) && R(!1);
    };
    return document.addEventListener("mousedown", x), () => document.removeEventListener("mousedown", x);
  }, []);
  const $ = Fe.filter(
    (x) => x.label.toLowerCase().includes(w.toLowerCase()) || x.phone.includes(w)
  );
  if (!v) {
    const x = (B) => {
      const G = B.target.value.replace(/[^+\d]/g, ""), T = G.startsWith("+") ? "+" + G.replace(/[+]/g, "").slice(0) : G;
      d(T);
    };
    return /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("div", { className: i || "col-span-12", children: [
      /* @__PURE__ */ e.jsx(be, { label: h, required: n }),
      /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "text",
          value: c,
          onChange: x,
          placeholder: N,
          disabled: t,
          required: n,
          className: `w-full h-10 px-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md \r
        bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none \r
        focus:ring-1 focus:ring-blue-300 dark:focus:ring-blue-200`,
          inputMode: "tel",
          pattern: "^\\+\\d{1,15}$"
        }
      )
    ] }, s) });
  }
  return /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("div", { className: i || "col-span-12", children: [
    /* @__PURE__ */ e.jsx(be, { label: h, required: n }),
    /* @__PURE__ */ e.jsxs("div", { className: "relative ", ref: U, children: [
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: `h-[40px] flex items-center border rounded-md px-2 bg-white dark:bg-gray-700 transition-all
  ${M ? "ring-0.5 ring-blue-100 border-blue-300" : "border-gray-300 dark:border-gray-600"}
  ${t ? "opacity-60 cursor-not-allowed" : ""}`,
          children: [
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                disabled: t,
                onClick: () => R(!M),
                className: "flex items-center gap-1 pr-2 border-r border-gray-300 dark:border-gray-700 focus:outline-none",
                children: [
                  g ? /* @__PURE__ */ e.jsx(
                    "img",
                    {
                      src: `https://flagcdn.com/w20/${g.code.toLowerCase()}.png`,
                      alt: g.code,
                      className: "w-5 h-3 object-cover"
                    }
                  ) : /* @__PURE__ */ e.jsx("span", { className: "text-gray-400 text-xs", children: "🌐" }),
                  /* @__PURE__ */ e.jsx(dr, { className: "w-3 h-3 text-gray-500" })
                ]
              }
            ),
            g && /* @__PURE__ */ e.jsxs("span", { className: "ml-2 text-sm text-gray-700 dark:text-gray-200 whitespace-nowrap", children: [
              "+",
              g.phone
            ] }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "tel",
                value: p,
                onChange: V,
                required: n,
                disabled: t || !g,
                placeholder: g ? N : "Select a country",
                className: "flex-1 ml-2 bg-transparent outline-none text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400"
              }
            ),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "tel",
                required: n,
                tabIndex: -1,
                readOnly: !0,
                value: g && p ? "+" + g.phone + p : "",
                style: {
                  position: "absolute",
                  opacity: 0,
                  pointerEvents: "none",
                  height: 0
                }
              }
            )
          ]
        }
      ),
      M && /* @__PURE__ */ e.jsxs("div", { className: "absolute top-full left-0 w-full mt-1 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 shadow-lg z-50 max-h-60 overflow-y-auto", children: [
        y && /* @__PURE__ */ e.jsx("div", { className: "p-2 border-b border-gray-200 dark:border-gray-700", children: /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsx(ze, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              value: w,
              onChange: (x) => L(x.target.value),
              placeholder: "Search country...",
              className: "w-full pl-9 pr-3 py-2 text-sm border rounded-md bg-white dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none "
            }
          )
        ] }) }),
        $.map((x) => /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            onClick: () => Z(x),
            className: "w-full flex items-center gap-2 px-2 py-1 text-sm hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100",
            children: [
              /* @__PURE__ */ e.jsx(
                "img",
                {
                  src: `https://flagcdn.com/w20/${x.code.toLowerCase()}.png`,
                  alt: x.code,
                  className: "w-5 h-3 object-cover"
                }
              ),
              /* @__PURE__ */ e.jsxs("span", { children: [
                x.label,
                " (+",
                x.phone,
                ")"
              ] })
            ]
          },
          x.code
        ))
      ] })
    ] })
  ] }, s) });
}
const hr = Oe.forwardRef(
  ({ className: h = "", label: c, required: s, ...i }, d) => {
    const t = `
      placeholder-gray-400 dark:placeholder-gray-400
      ${h}
    `.trim();
    return /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("div", { className: i.parentClass || "col-span-12", children: [
      /* @__PURE__ */ e.jsx(be, { label: c, required: s }),
      /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsx(
        "textarea",
        {
          className: t,
          ref: d,
          required: s,
          ...i
        }
      ) })
    ] }, i.name) });
  }
);
hr.displayName = "TextArea";
const qr = ({
  label: h = "",
  value: c = null,
  onChange: s,
  required: i = !1,
  accept: d = "image/*",
  id: t,
  dragDrop: n = !1,
  name: N = "",
  parentClass: y = ""
}) => {
  const [v, f] = P(c), [u, g] = P(!1), C = ke(null);
  ae(() => {
    f(c);
  }, [c]);
  const p = (w) => {
    if (!w || w.length === 0) {
      f(null), s == null || s(null);
      return;
    }
    const L = w[0], U = URL.createObjectURL(L);
    f({ file: L, preview: U }), s == null || s(U);
  }, E = (w) => {
    n && (w.preventDefault(), g(!0));
  }, M = (w) => {
    n && (w.preventDefault(), g(!1));
  }, R = (w) => {
    n && (w.preventDefault(), g(!1), p(w.dataTransfer.files));
  };
  return /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("div", { className: y || "col-span-12", children: [
    /* @__PURE__ */ e.jsx(be, { label: h, required: i }),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `relative  rounded-md p-2 transition-all ${u ? "border border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900" : "border bg-gray-50 dark:bg-gray-700"}`,
        onDragOver: E,
        onDragLeave: M,
        onDrop: R,
        children: [
          /* @__PURE__ */ e.jsxs(
            "div",
            {
              className: `flex items-center space-x-3 transition-all ${u ? "filter blur-sm" : ""}`,
              children: [
                /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: "cursor-pointer",
                    onClick: () => C.current.click(),
                    children: v ? /* @__PURE__ */ e.jsx(
                      "img",
                      {
                        src: v.preview || v,
                        alt: "preview",
                        className: "object-cover w-20 h-20 rounded-full"
                      }
                    ) : /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx("div", { className: "rounded-full bg-gray-200 dark:bg-gray-800 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ e.jsx(
                      He,
                      {
                        icon: "ri:image-add-fill",
                        className: "text-gray-400 w-10 h-10"
                      }
                    ) }) })
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    ref: C,
                    id: t,
                    type: "file",
                    accept: d,
                    onChange: (w) => p(w.target.files),
                    required: i && !v,
                    className: "inline-flex items-center justify-center p-2 text-gray-400 text-sm file:cursor-pointer"
                  }
                )
              ]
            }
          ),
          n && u && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ e.jsx("span", { className: "text-blue-500 font-semibold text-xl", children: "Drop here" }) })
        ]
      }
    )
  ] }, N) });
}, br = Oe.forwardRef(
  ({
    label: h,
    required: c,
    parentClass: s = "",
    className: i = "",
    type: d = "text",
    onKeyDown: t,
    ...n
  }, N) => {
    const [y, v] = P(!1), f = (g) => {
      d === "number" && ["e", "E"].includes(g.key) && g.preventDefault(), t == null || t(g);
    }, u = `
      h-10 placeholder-gray-400 dark:placeholder-gray-400
      ${d === "password" ? "pr-10" : ""}
      ${i}
    `.trim();
    return /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("div", { className: s || "col-span-12", children: [
      /* @__PURE__ */ e.jsx(be, { label: h, required: c }),
      /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: d === "password" && y ? "text" : d,
            ref: N,
            required: c,
            onKeyDown: f,
            className: u,
            ...n
          }
        ),
        d === "password" && /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            tabIndex: -1,
            onClick: () => v((g) => !g),
            className: "absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200",
            children: /* @__PURE__ */ e.jsx(
              He,
              {
                icon: y ? "mdi:eye-off-outline" : "mdi:eye-outline",
                className: "w-5 h-5"
              }
            )
          }
        )
      ] })
    ] }, n.name) });
  }
);
br.displayName = "Input";
const Jr = ({
  key: h,
  editorKey: c = "",
  value: s = "",
  onChange: i,
  label: d = "",
  required: t = !1,
  placeholder: n = "",
  parentClass: N = "col-span-12",
  height: y = 400,
  inline: v = !1,
  disabled: f = !1,
  plugins: u,
  toolbar: g,
  menubar: C = !1,
  fontFamily: p = "Inter, sans-serif",
  initConfig: E = {},
  imageUploadHandler: M
  // ✅ Promise function passed from parent
}) => {
  const R = [
    "advlist",
    "autolink",
    "lists",
    "link",
    "image",
    "charmap",
    "preview",
    "anchor",
    "searchreplace",
    "visualblocks",
    "code",
    "fullscreen",
    "insertdatetime",
    "media",
    "table",
    "help",
    "wordcount"
  ], w = "undo redo | blocks | bold italic underline forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media table | removeformat | code fullscreen preview", L = (U) => new Promise((V, Z) => {
    if (!M) {
      V(`data:${U.blob().type};base64,${U.base64()}`);
      return;
    }
    M(U).then(($) => {
      $ ? V($) : Z("Upload failed: No URL returned");
    }).catch(($) => {
      Z(
        typeof $ == "string" ? $ : ($ == null ? void 0 : $.message) || "Image upload failed"
      );
    });
  });
  return /* @__PURE__ */ e.jsxs("div", { className: N, children: [
    d && /* @__PURE__ */ e.jsx(be, { label: d, required: t }),
    /* @__PURE__ */ e.jsx(
      Gr,
      {
        apiKey: c,
        value: s,
        disabled: f,
        init: {
          height: y,
          inline: v,
          menubar: C,
          branding: !1,
          statusbar: !0,
          automatic_uploads: !0,
          images_upload_handler: L,
          plugins: u ?? R,
          toolbar: g ?? w,
          placeholder: n,
          content_style: `
            body {
                font-family: ${p};
            }
            `,
          ...E
        },
        onEditorChange: (U) => {
          i && i(U);
        }
      }
    )
  ] }, h);
}, Zr = ({
  name: h = "",
  label: c = "",
  // label for single checkbox
  options: s = [],
  // array of { label, value } for multiple
  value: i = null,
  // boolean for single, array for multiple, or string for single select
  onChange: d,
  disabled: t = !1,
  required: n = !1,
  parentClass: N = "col-span-12",
  className: y = "",
  multiSelect: v = !1
  // ✅ if true, only one option can be selected (like radio)
}) => {
  const f = Array.isArray(s) && s.length > 0, u = (p) => f ? v ? Array.isArray(i) && i.includes(p) : i === p : !!i, g = (p) => {
    d == null || d(p.target.checked, h);
  }, C = (p, E) => {
    if (d)
      if (!v)
        d(E ? p : "", h);
      else {
        const M = Array.isArray(i) ? [...i] : [];
        if (E)
          M.includes(p) || M.push(p);
        else {
          const R = M.indexOf(p);
          R > -1 && M.splice(R, 1);
        }
        d(M, h);
      }
  };
  return f ? /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("div", { className: `${N}`, children: [
    /* @__PURE__ */ e.jsx(be, { label: c, required: n }),
    /* @__PURE__ */ e.jsx("div", { className: "flex flex-col space-y-2", children: s.map((p, E) => /* @__PURE__ */ e.jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "checkbox",
          name: h,
          value: p.value,
          checked: u(p.value),
          disabled: t || p.disabled,
          required: n && E === 0,
          onChange: (M) => C(p.value, M.target.checked),
          className: `h-4 w-4 cursor-pointer text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${y}`
        },
        h
      ),
      p.label && /* @__PURE__ */ e.jsx(
        "label",
        {
          htmlFor: h,
          className: "ml-2 text-sm text-gray-700 dark:text-gray-200 select-none",
          children: p.label
        }
      )
    ] }, p.value || p.label)) })
  ] }) }) : /* @__PURE__ */ e.jsxs("div", { className: `flex items-center ${N}`, children: [
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "checkbox",
        name: h,
        checked: u(),
        disabled: t,
        required: n,
        onChange: g,
        className: `h-4 w-4 text-blue-600 cursor-pointer border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${y}`
      }
    ),
    c && /* @__PURE__ */ e.jsx(
      "label",
      {
        htmlFor: h,
        className: "ml-2 text-sm text-gray-700 dark:text-gray-200 select-none",
        children: c
      }
    )
  ] });
}, pr = ({ field: h, formData: c, handleChange: s }) => {
  const {
    key: i,
    label: d,
    type: t,
    options: n,
    placeholder: N,
    rows: y,
    inputClass: v,
    search: f,
    accept: u,
    text: g,
    required: C = !1,
    minLength: p,
    dragDrop: E,
    parentClass: M,
    countriesList: R,
    defaultCountry: w,
    multiple: L,
    dropdownMaxHeight: U,
    editorKey: V,
    fontFamily: Z,
    disabled: $
  } = h;
  let x = c == null ? void 0 : c[i];
  x == null && (x = "");
  const B = N || (t === "select" ? `Select ${d}` : `Enter ${d}`), G = "w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm focus:outline-none focus:ring-1 focus:ring-blue-200 bg-white text-black dark:bg-gray-700 dark:text-white";
  switch (t) {
    case "select":
      return /* @__PURE__ */ e.jsx(
        Hr,
        {
          options: n || [],
          value: x,
          onChange: (T) => s(i, T),
          placeholder: B,
          className: v || "",
          search: f,
          required: C,
          label: d,
          name: i,
          disabled: $,
          parentClass: M,
          multiple: L,
          dropdownMaxHeight: U
        }
      );
    case "checkbox":
      return /* @__PURE__ */ e.jsx(
        Zr,
        {
          name: i,
          label: d,
          options: n || [],
          value: x,
          onChange: (T) => s(i, T),
          required: C,
          parentClass: M,
          className: v || "",
          multiSelect: L,
          disabled: $
        }
      );
    case "switch":
      return /* @__PURE__ */ e.jsx(
        Vr,
        {
          value: x,
          onChange: (T) => s(i, T),
          text: g,
          options: n || [],
          label: d,
          required: C,
          name: i,
          disabled: $,
          parentClass: M
        }
      );
    case "phone":
      return /* @__PURE__ */ e.jsx(
        Wr,
        {
          value: x,
          onChange: (T) => s(i, T),
          countriesList: R,
          defaultCountry: w,
          required: C,
          placeholder: B,
          search: f,
          label: d,
          name: i,
          disabled: $,
          parentClass: M
        }
      );
    case "textarea":
      return /* @__PURE__ */ e.jsx(
        hr,
        {
          value: x,
          onChange: (T) => s(i, T.target.value),
          placeholder: B,
          rows: y || 3,
          className: `${G} ${v || ""}`,
          required: C,
          name: i,
          label: d,
          disabled: $,
          parentClass: M
        }
      );
    case "image":
      return /* @__PURE__ */ e.jsx(
        qr,
        {
          value: x,
          onChange: (T) => s(i, T),
          required: C,
          accept: u || "image/*",
          id: `file-${i}`,
          dragDrop: E,
          label: d,
          name: i,
          parentClass: M
        }
      );
    case "tinyEditor":
      return /* @__PURE__ */ e.jsx(
        Jr,
        {
          value: x,
          onChange: (T) => s(i, T),
          required: C,
          placeholder: B,
          label: d,
          parentClass: M,
          fontFamily: Z,
          editorKey: V,
          disabled: $
        },
        `editor-${i}`
      );
    default:
      return /* @__PURE__ */ e.jsx(
        br,
        {
          type: t || "text",
          value: x,
          onChange: (T) => s(i, T.target.value),
          placeholder: B,
          className: `${G} ${v || ""}`,
          required: C,
          name: i,
          minLength: p,
          label: d,
          parentClass: M,
          disabled: $
        }
      );
  }
}, Xr = ({ isOpen: h, onClose: c, config: s, onApply: i }) => {
  var v;
  const [d, t] = P({}), n = (f, u) => {
    t((g) => ({ ...g, [f]: u }));
  }, N = () => {
    i == null || i(d), c();
  }, y = () => {
    t({}), i == null || i({}), c();
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${h ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
        onClick: c
      }
    ),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `fixed top-0 right-0 h-full w-[28rem] bg-white dark:bg-gray-900 shadow-2xl z-50 flex flex-col border-l border-gray-200 dark:border-gray-700
          transform transition-transform duration-300 ease-in-out
          ${h ? "translate-x-0" : "translate-x-full"}
        `,
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700", children: [
            /* @__PURE__ */ e.jsx("h2", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: "Filters" }),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                onClick: c,
                className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition",
                children: /* @__PURE__ */ e.jsx(Ae, { className: "w-5 h-5 text-gray-500 dark:text-gray-400" })
              }
            )
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto px-4 py-3", children: s != null && s.component ? /* @__PURE__ */ e.jsx(s.component, { filters: d, onFilterChange: n }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: (v = s == null ? void 0 : s.fields) == null ? void 0 : v.map((f) => /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx(
            pr,
            {
              field: f,
              formData: d,
              handleChange: n
            },
            f.key
          ) })) }) }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex gap-2 px-4 py-3 border-t border-gray-200 dark:border-gray-700", children: [
            /* @__PURE__ */ e.jsx(
              Me,
              {
                onClick: N,
                variant: "contained",
                color: "primary",
                fullWidth: !0,
                children: "Apply Filters"
              }
            ),
            /* @__PURE__ */ e.jsx(
              Me,
              {
                onClick: y,
                variant: "contained",
                className: "min-w-[150px]",
                children: "Reset"
              }
            )
          ] })
        ]
      }
    )
  ] });
}, or = {
  blue: {
    bg: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    border: "border border-blue-300 text-blue-700 dark:border-blue-700 dark:text-blue-300"
  },
  teal: {
    bg: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300",
    border: "border border-teal-300 text-teal-700 dark:border-teal-700 dark:text-teal-300"
  },
  purple: {
    bg: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
    border: "border border-purple-300 text-purple-700 dark:border-purple-700 dark:text-purple-300"
  },
  yellow: {
    bg: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
    border: "border border-yellow-300 text-yellow-700 dark:border-yellow-700 dark:text-yellow-300"
  },
  green: {
    bg: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    border: "border border-green-300 text-green-700 dark:border-green-700 dark:text-green-300"
  },
  red: {
    bg: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
    border: "border border-red-300 text-red-700 dark:border-red-700 dark:text-red-300"
  },
  gray: {
    bg: "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300",
    border: "border border-gray-300 text-gray-700 dark:border-gray-700 dark:text-gray-300"
  }
}, sr = {
  contained: "bg",
  outline: "border !bg-transparent",
  soft: "bg opacity-90"
}, gr = ({
  label: h,
  variant: c = "contained",
  // contained | outline | soft
  color: s = "green",
  className: i = ""
}) => {
  const d = or[s] || or.green, t = sr[c] || sr.contained, n = c === "outline" ? d.border : d.bg;
  return /* @__PURE__ */ e.jsx(
    "span",
    {
      className: `inline-flex justify-center items-center rounded-sm text-xs font-semibold px-3 py-1 min-w-[78px]
        ${n}
        ${t}
        ${i}`,
      children: h
    }
  );
}, Qr = ({ rows: h = 5, columns: c = 5 }) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
  /* @__PURE__ */ e.jsx("div", { className: "w-full mb-6 inline-flex justify-end items-center", children: /* @__PURE__ */ e.jsx("div", { className: "h-8 w-80 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }),
  /* @__PURE__ */ e.jsx("div", { className: "overflow-hidden rounded-md border border-gray-200 dark:border-gray-800", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full border-collapse", children: [
    /* @__PURE__ */ e.jsx("thead", { children: /* @__PURE__ */ e.jsx("tr", { className: "bg-gray-50 dark:bg-gray-900", children: Array.from({ length: c }).map((s, i) => /* @__PURE__ */ e.jsx("th", { className: "px-4 py-3", children: /* @__PURE__ */ e.jsx("div", { className: "h-6 w-24 bg-gray-300 dark:bg-gray-700 rounded animate-pulse  inline-flex justify-center items-center" }) }, i)) }) }),
    /* @__PURE__ */ e.jsx("tbody", { children: Array.from({ length: h }).map((s, i) => /* @__PURE__ */ e.jsx(
      "tr",
      {
        className: "border-t border-gray-200 dark:border-gray-800",
        children: Array.from({ length: c }).map((d, t) => /* @__PURE__ */ e.jsx("td", { className: "px-4 py-6", children: /* @__PURE__ */ e.jsx("div", { className: "h-6 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }, t))
      },
      i
    )) })
  ] }) })
] }), fr = ({ src: h, alt: c = "preview", isOpen: s, setIsOpen: i }) => {
  const d = () => i(!1);
  return ae(() => {
    const t = (n) => {
      n.key === "Escape" && d();
    };
    return s && (document.body.style.overflow = "hidden", document.addEventListener("keydown", t)), () => {
      document.body.style.overflow = "", document.removeEventListener("keydown", t);
    };
  }, [s]), /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `fixed inset-0 z-50 flex items-center justify-center bg-black/70 dark:bg-black/80 \r
                   backdrop-blur-sm animate-in fade-in duration-200`,
      onClick: d,
      children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: d,
            className: `absolute top-4 right-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200\r
                     hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-2 shadow-lg transition`,
            children: /* @__PURE__ */ e.jsx(Ae, { size: 20 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "max-w-5xl w-full px-4 transform transition-all duration-200 scale-95 animate-in zoom-in-95",
            onClick: (t) => t.stopPropagation(),
            children: /* @__PURE__ */ e.jsx(
              "img",
              {
                src: h,
                alt: c,
                className: "w-full max-h-[90vh] object-contain rounded-xl"
              }
            )
          }
        )
      ]
    }
  ) });
}, ea = ({ config: h }) => {
  const {
    data: c = [],
    table_head: s = [],
    loading: i = !1,
    search: d = {
      enabled: !1,
      placeholder: "Search...",
      useServerSideSearch: !1
    },
    filter: t = {
      enabled: !1,
      useServerSideFilters: !1
    },
    pagination: n = {
      enabled: !1,
      rows_per_page: 10,
      useServerSidePagination: !1
    },
    emptyMessage: N = "No data available",
    onMenuAction: y,
    setServerSidePaginationData: v = () => {
    },
    onFilterApply: f,
    filterConfig: u = null
  } = h, [g, C] = P(""), [p, E] = P(null), [M, R] = P([]), [w, L] = P({}), [U, V] = P(!1), [Z, $] = P(null), [x, B] = P(!1), G = Ke(() => !d.enabled || !g.trim() || d.useServerSideSearch ? c : zr(c, g, d.searchKeys || []), [c, g, d]), [T, S] = P(1), [O, W] = P((n == null ? void 0 : n.rows_per_page) || 50), [Q, oe] = P(G.length || 0), pe = n != null && n.useServerSidePagination ? n.total_pages : Math.ceil(G.length / O), ye = Ke(() => {
    if (n.useServerSidePagination) return G;
    const l = (T - 1) * O;
    return G.slice(l, l + O);
  }, [G, T, O]), ge = ke(null), ve = ke({}), fe = ke(null), se = (l) => {
    C(l), S(1), d.useServerSideSearch && (fe.current && clearTimeout(fe.current), fe.current = setTimeout(async () => {
      try {
        await v((m) => ({
          ...m,
          search: l,
          current_page: 1
        }));
      } catch (m) {
        console.error("Search error:", m);
      }
    }, 800));
  }, Se = (l, m, A) => {
    A.stopPropagation(), E(null), y == null || y(l.type, m);
  }, Ee = (l, m, A) => {
    m.stopPropagation(), R(A);
    const H = m.currentTarget;
    ve.current[l] = H;
    const z = H.getBoundingClientRect(), te = 192, X = A.length * 40, ue = window.innerWidth, je = window.innerHeight, F = ue - z.right < te ? z.left - te + z.width : z.left, le = je - z.bottom < X && z.top > X ? z.top - X - 2 : z.bottom + 2;
    L({
      top: Math.max(8, Math.min(le, je - X - 8)),
      left: Math.max(8, Math.min(F, ue - te - 8))
    }), E(p === l ? null : l);
  }, Te = (l) => (T - 1) * O + l + 1, me = (l) => {
    $(l), B(!0);
  }, ie = (l, m, A, H = null) => /* @__PURE__ */ e.jsx(e.Fragment, { children: l ? /* @__PURE__ */ e.jsx(
    "img",
    {
      src: l,
      alt: m || "Avatar",
      onClick: (z) => {
        z.stopPropagation(), z.preventDefault(), me({ src: l, alt: m });
      },
      className: `w-10 h-10 cursor-pointer rounded-full object-cover border border-gray-200 dark:border-gray-700 ${A || ""}`
    }
  ) : /* @__PURE__ */ e.jsx(e.Fragment, { children: H || /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${A || ""}`,
      children: /* @__PURE__ */ e.jsx(cr, { className: "w-6 h-6 text-gray-400 dark:text-gray-400" })
    }
  ) }) }), de = (l, m) => /* @__PURE__ */ e.jsxs("div", { className: `flex items-center space-x-4 ${m.className || ""}`, children: [
    m.imageKey ? ie(l[m.imageKey], l[m.titleKey], "group-avatar") : "",
    /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("p", { className: "font-medium text-gray-900 dark:text-white group-title", children: l[m.titleKey] || "" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400 group-sub-title", children: l[m.subtitleKey] || "" })
    ] })
  ] }), xe = (l, m) => {
    var te;
    let A = String(l);
    const H = m.variant || "contained";
    let z = m.defaultColor;
    if (((te = m == null ? void 0 : m.chipOptions) == null ? void 0 : te.length) > 0) {
      let X = m == null ? void 0 : m.chipOptions.find((ue) => ue.value == l);
      X && (A = X.label, z = X.color);
    }
    return /* @__PURE__ */ e.jsx(
      gr,
      {
        label: A,
        variant: H,
        color: z,
        className: m.className || ""
      }
    );
  }, ce = (l, m, A) => {
    const H = m[l.key];
    return l.type === "menu_actions" ? /* @__PURE__ */ e.jsx("div", { className: `text-center ${l.className || ""}`, children: /* @__PURE__ */ e.jsx(
      "button",
      {
        ref: (z) => ve.current[m.id] = z,
        onClick: (z) => Ee(m.id, z, l.menuList),
        className: "p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition text-gray-700 dark:text-gray-300",
        children: /* @__PURE__ */ e.jsx(Lr, { className: "h-4 w-4" })
      }
    ) }) : l.type === "index" ? /* @__PURE__ */ e.jsx("span", { className: l.className || "", children: Te(A) }) : l.type === "group" ? de(m, l) : l.type === "chip" ? /* @__PURE__ */ e.jsx(e.Fragment, { children: xe(H, l) }) : l.type === "date" ? /* @__PURE__ */ e.jsx("span", { className: l.className || "", children: ur(H, l.format || "DD MMM YYYY") }) : l.type === "avatar" ? /* @__PURE__ */ e.jsx(e.Fragment, { children: ie(H, l.alt, l.className, l.fallback_icon) }) : /* @__PURE__ */ e.jsx("span", { className: l.className || "", children: H || "N/A" });
  }, Ne = (l, m) => {
    if (l.onClickDetails)
      return y == null ? void 0 : y("view", m);
    if (typeof l.handleClick == "function")
      return l.handleClick(m);
  }, we = (l) => l.onClickDetails || typeof l.handleClick == "function";
  return ae(() => {
    const l = () => {
      p && E(null);
    };
    return window.addEventListener("scroll", l, !0), () => {
      window.removeEventListener("scroll", l, !0);
    };
  }, [p]), ae(() => {
    const l = (m) => {
      ge.current && !ge.current.contains(m.target) && E(null);
    };
    return document.addEventListener("click", l), () => document.removeEventListener("click", l);
  }, []), ae(() => {
    n != null && n.rows_per_page && (n != null && n.useServerSidePagination) && W((n == null ? void 0 : n.rows_per_page) || 50), n.current_page && S(n.current_page);
  }, [
    n.rows_per_page,
    n == null ? void 0 : n.useServerSidePagination,
    n.current_page
  ]), ae(() => {
    oe(
      n != null && n.useServerSidePagination ? n.total_records : G.length
    ), G.length <= O * (T - 1) && !(n != null && n.useServerSidePagination) && S((l) => l - 1 || 1);
  }, [
    G.length,
    n.total_records,
    n == null ? void 0 : n.useServerSidePagination
  ]), i ? /* @__PURE__ */ e.jsx(Qr, { rows: 6, columns: 6 }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex justify-end items-center mb-6 gap-2", children: [
      d.enabled && /* @__PURE__ */ e.jsx("div", { className: "", children: /* @__PURE__ */ e.jsxs("div", { className: "relative min-w-[300px]", children: [
        /* @__PURE__ */ e.jsx(ze, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-300" }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "text",
            placeholder: d.placeholder || "Search...",
            value: g,
            onChange: (l) => se(l.target.value),
            className: "w-full h-[36px] pl-9 pr-4 py-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-300 dark:ring-blue-200 disabled:opacity-50"
          }
        )
      ] }) }),
      u && t.enabled && /* @__PURE__ */ e.jsxs(Me, { onClick: () => V(!0), variant: "contained", children: [
        /* @__PURE__ */ e.jsx(Dr, { className: "w-4 h-4 mr-2" }),
        "Filters"
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-700", children: [
      /* @__PURE__ */ e.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ e.jsxs("table", { className: "min-w-full divide-y divide-gray-200 dark:divide-gray-700", children: [
        /* @__PURE__ */ e.jsx("thead", { className: "bg-gray-50 dark:bg-gray-700/60", children: /* @__PURE__ */ e.jsx("tr", { children: s.map((l) => /* @__PURE__ */ e.jsx(
          "th",
          {
            className: "px-6 py-4 text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider min-w-max max-w-[180px] truncate",
            children: l.title
          },
          l.key
        )) }) }),
        /* @__PURE__ */ e.jsx("tbody", { className: "bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700", children: ye.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx(
          "td",
          {
            colSpan: s.length,
            className: "text-center py-10 text-gray-500 dark:text-gray-400",
            children: N
          }
        ) }) : ye.map((l, m) => /* @__PURE__ */ e.jsx(
          "tr",
          {
            className: "hover:bg-gray-50 dark:hover:bg-blue-800/10 transition",
            children: s.map((A) => /* @__PURE__ */ e.jsx(
              "td",
              {
                className: `px-6 py-4 text-sm text-gray-900 dark:text-gray-100 min-w-max max-w-[300px] truncate ${we(A) ? "cursor-pointer" : ""}`,
                title: String(l[A.key] ?? ""),
                onClick: () => Ne(A, l),
                children: A.render ? A.render(l, m) : ce(A, l, m)
              },
              A.key
            ))
          },
          l.id || m
        )) })
      ] }) }),
      (n == null ? void 0 : n.enabled) && G.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: " bg-gray-50 dark:bg-gray-700/60 px-6 py-3 flex flex-wrap items-center justify-between border-t border-gray-200 dark:border-gray-600 gap-3", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
          "Showing ",
          (T - 1) * O + 1,
          " to",
          " ",
          Math.min(T * O, Q),
          " of ",
          Q,
          " ",
          "results"
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx("span", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Rows per page:" }),
            /* @__PURE__ */ e.jsx(
              "select",
              {
                value: O,
                onChange: (l) => {
                  const m = Number(l.target.value);
                  W(m), S(1), n.useServerSidePagination && v((A) => ({
                    ...A,
                    current_page: 1,
                    rows_per_page: m
                  }));
                },
                className: "border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500",
                children: [2, 10, 25, 50, 100].map((l) => /* @__PURE__ */ e.jsx("option", { value: l, children: l }, l))
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                onClick: () => {
                  if (T > 1) {
                    const l = T - 1;
                    S(l), n.useServerSidePagination && v((m) => ({
                      ...m,
                      current_page: l
                    }));
                  }
                },
                disabled: T === 1,
                className: "p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition text-gray-500 dark:text-gray-300 disabled:opacity-50",
                children: /* @__PURE__ */ e.jsx(Ar, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ e.jsxs("span", { className: "text-sm text-gray-800 dark:text-gray-200", children: [
              "Page ",
              T,
              " of ",
              pe
            ] }),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                onClick: () => {
                  if (T < pe) {
                    const l = T + 1;
                    S(l), n.useServerSidePagination && v((m) => ({
                      ...m,
                      current_page: l
                    }));
                  }
                },
                disabled: T === pe,
                className: "p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition text-gray-500 dark:text-gray-300 disabled:opacity-50",
                children: /* @__PURE__ */ e.jsx(Ir, { className: "h-4 w-4" })
              }
            )
          ] })
        ] })
      ] })
    ] }),
    p && $r(
      /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: ge,
          style: {
            position: "fixed",
            top: `${w.top}px`,
            left: `${w.left}px`,
            zIndex: 9999
          },
          className: "w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg border border-gray-200 dark:border-gray-600",
          children: M.map((l, m) => /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: (A) => Se(
                l,
                c.find((H) => H.id === p),
                A
              ),
              className: `w-full flex items-center gap-2 px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-600 ${l.variant === "danger" ? "text-red-600 dark:text-red-500" : "text-gray-700 dark:text-gray-200"}`,
              children: [
                l.icon && /* @__PURE__ */ e.jsx("span", { className: "shrink-0", children: l.icon }),
                l.title
              ]
            },
            m
          ))
        }
      ),
      document.body
    ),
    u && /* @__PURE__ */ e.jsx(
      Xr,
      {
        isOpen: U,
        onClose: () => V(!1),
        config: u,
        onApply: f
      }
    ),
    x && /* @__PURE__ */ e.jsx(
      fr,
      {
        src: Z.src,
        alt: Z.alt,
        isOpen: x,
        setIsOpen: B
      }
    )
  ] });
}, De = ({
  isOpen: h,
  onClose: c,
  icon: s,
  title: i,
  children: d,
  size: t = "md",
  actionButtons: n = [],
  actions: N,
  showDefaultClose: y = !0,
  footerConfig: v = null,
  hideFooter: f = !1,
  onFormSubmit: u = () => {
  },
  onCancel: g,
  loadingBtn: C = !1,
  executeFunction: p = () => {
  },
  selectedItem: E = null
}) => {
  if (!h) return null;
  const M = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-full"
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "fixed inset-0 bg-gray-500 opacity-75",
        onClick: () => c()
      }
    ),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `relative bg-white rounded-lg shadow-xl w-full ${M[t] || M.md} max-h-[90vh] flex flex-col dark:bg-gray-800`,
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
              s && /* @__PURE__ */ e.jsx("span", { children: s }),
              /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-medium text-gray-900 dark:text-white", children: i })
            ] }),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                onClick: () => c(),
                className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
                children: /* @__PURE__ */ e.jsx(Ae, { className: "w-6 h-6" })
              }
            )
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto p-4", children: d }),
          n.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "px-4 py-3 flex justify-end gap-3 border-t border-gray-200 dark:border-gray-700 sm:px-6", children: n.map((R) => /* @__PURE__ */ e.jsx(
            Me,
            {
              onClick: (w) => {
                R.type == "submit" ? u(w) : p(
                  () => {
                    var L;
                    return (L = R == null ? void 0 : R.onClick) == null ? void 0 : L.call(R, w, E);
                  },
                  (L) => c == null ? void 0 : c(L)
                );
              },
              disabled: C || R.disabled,
              variant: R.variant || "contained",
              color: R.color || "primary",
              className: `min-w-[100px] ${R.className}`,
              type: R.type || "button",
              children: C ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center", children: [
                /* @__PURE__ */ e.jsx("div", { className: "animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-2 border-t-white mr-2" }),
                R.label || "Submit",
                "..."
              ] }) : R.label || "Submit"
            }
          )) })
        ]
      }
    )
  ] });
}, ir = ({ config: h, onSubmit: c, initialData: s = {} }) => {
  var v;
  const { formClass: i = "grid grid-cols-12 gap-4", formFields: d = [] } = h || {}, [t, n] = P(s);
  ae(() => {
    n(s);
  }, []);
  const N = (f, u) => {
    n((g) => ({ ...g, [f]: u }));
  }, y = (f) => {
    f.preventDefault();
    const u = f.target;
    if (!u.checkValidity()) {
      u.reportValidity();
      return;
    }
    c(t);
  };
  return /* @__PURE__ */ e.jsx(
    "form",
    {
      id: (v = h.title) != null && v.toLowerCase().includes("edit") ? "editForm" : "addForm",
      onSubmit: y,
      className: i,
      noValidate: !1,
      children: d.map((f) => /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx(
        pr,
        {
          field: f,
          formData: t,
          handleChange: N
        },
        f.key
      ) }))
    }
  );
};
function ra({ data: h, config: c }) {
  const { fields: s, containerClass: i } = c, [d, t] = P(null), [n, N] = P(!1), y = (u) => {
    t(u), N(!0);
  }, v = ({ col: u }) => {
    let g = u == null ? void 0 : u.icon, C = u.label, p = h[u.key], E = u.type, M = u.variant || "outline", R = u.defaultColor;
    if (E == "chip" && u.chipOptions.length > 0) {
      let w = u == null ? void 0 : u.chipOptions.find((L) => L.value == p);
      w && (p = w.label, R = w.color);
    }
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `col-span-12 flex items-center space-x-4 p-4 rounded-xl 
                    bg-gray-100 dark:bg-gray-900 ${u.blockClass}`,
        children: [
          g && /* @__PURE__ */ e.jsx("div", { className: "flex-shrink-0", children: g }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: C }),
            E == "chip" ? /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx(
              gr,
              {
                label: p,
                variant: M,
                color: R,
                className: "mt-1"
              }
            ) }) : E == "tinyEditor" ? /* @__PURE__ */ e.jsx(
              "p",
              {
                className: "mt-1 text-sm text-gray-900 dark:text-white break-words",
                dangerouslySetInnerHTML: {
                  __html: p
                }
              }
            ) : /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-gray-900 dark:text-white break-words", children: E == "date" ? /* @__PURE__ */ e.jsx("span", { children: ur(p, u.format || "DD MMM YYYY") }) : p || "N/A" })
          ] })
        ]
      }
    );
  }, f = ({ col: u }) => {
    let g = h[u.titleKey], C = h[u.subtitleKey], p = h[u.imageKey], E = h[u.fallback_icon];
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `col-span-12 flex items-center space-x-4 p-4 rounded-xl 
      bg-gray-100 dark:bg-gray-900 
      ${u.blockClass}`,
        children: [
          p ? /* @__PURE__ */ e.jsx(
            "img",
            {
              src: p,
              alt: g,
              onClick: () => y({ src: p, alt: g }),
              className: "w-16 h-16 cursor-pointer rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
            }
          ) : E || /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600", children: /* @__PURE__ */ e.jsx(cr, { className: "w-8 h-8 text-gray-400" }) }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: g }),
            /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: C })
          ] })
        ]
      }
    );
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    n && /* @__PURE__ */ e.jsx(
      fr,
      {
        src: d.src,
        alt: d.alt,
        isOpen: n,
        setIsOpen: N
      }
    ),
    /* @__PURE__ */ e.jsx("div", { className: `grid grid-cols-12 gap-4 ${i || ""}`, children: s.map(
      (u) => u.type == "group" ? /* @__PURE__ */ e.jsx(f, { col: u }) : /* @__PURE__ */ e.jsx(v, { col: u })
    ) })
  ] });
}
const mr = ({ config: h }) => {
  var me, ie, de, xe, ce, Ne, we, l, m, A, H, z, te, X, ue, je;
  const {
    title: c,
    fetchData: s = async () => {
    },
    isStaticData: i = !1,
    tableConfig: d = {},
    modalConfig: t = {},
    filterConfig: n
  } = h, [N, y] = P(!0), [v, f] = P(!1), [u, g] = P([]), [C, p] = P(null), [E, M] = P({
    search: "",
    rows_per_page: 50,
    current_page: 1
  }), [R, w] = P({}), [L, U] = P(!1), [V, Z] = P(!1), [$, x] = P(!1), [B, G] = P(!1), [T, S] = P(!1), [O, W] = P(null), Q = (j, F) => {
    j === "edit" ? (W(F), x(!0)) : j === "view" ? (W(F), S(!0)) : j === "delete" && (W(F), G(!0));
  }, oe = async (j, F, K = "", le = "") => {
    f(!0);
    try {
      const ee = await (j == null ? void 0 : j());
      (K || ee.message) && $e(K || ee.message, {
        variant: "success"
      }), F == null || F(ee);
    } catch (ee) {
      (le || ee.message) && $e(le || ee.message, { variant: "error" });
    } finally {
      f(!1);
    }
  }, pe = (j) => {
    let F = j.newObject;
    i ? (g((K) => [F, ...K]), p((K) => ({
      ...K,
      current_page: 1
    }))) : (M((K) => ({
      ...K,
      current_page: 1
    })), E.current_page == 1 && se()), Z(!1);
  }, ye = (j) => {
    let F = j.newObject, K = j.targetObject;
    i ? g(
      (le) => le.map(
        (ee) => ee.id === K.id ? { ...ee, ...F } : ee
      )
    ) : se(), x(!1);
  }, ge = (j) => {
    if (!j) {
      G(!1), W(null);
      return;
    }
    i ? g(
      (F) => F.filter((K) => K.id !== j.targetObject.id)
    ) : u.length == 1 && E.current_page > 1 ? M((F) => ({
      ...F,
      current_page: F.current_page - 1
    })) : se(), G(!1), W(null);
  }, ve = (j) => oe(
    () => {
      var F, K;
      return (K = (F = t == null ? void 0 : t.addModal) == null ? void 0 : F.handleSubmit) == null ? void 0 : K.call(F, j);
    },
    pe
  ), fe = (j) => oe(
    () => {
      var F, K;
      return (K = (F = t == null ? void 0 : t.editModal) == null ? void 0 : F.handleSubmit) == null ? void 0 : K.call(F, j, O);
    },
    ye
  ), se = async () => {
    y(!0), s == null || s({ ...E, ...R }).then((j) => {
      g(j.data), p(j.pagination);
    }).catch((j) => {
      $e(j.message, { variant: "error" });
    }).finally(() => {
      y(!1);
    });
  }, Se = (j) => {
    var F;
    w((K) => ({
      ...j
    })), (F = d == null ? void 0 : d.filter) != null && F.useServerSideFilters && U((K) => !K);
  }, Ee = (j, F) => j.filter(
    (K) => Object.entries(F).every(([le, ee]) => K[le] === ee)
  ), Te = Ke(() => {
    var j;
    return (j = d == null ? void 0 : d.filter) != null && j.useServerSideFilters ? data : Ee(u, R);
  }, [u, R]);
  return ae(() => {
    se();
  }, [
    E.search,
    E.rows_per_page,
    E.current_page,
    L
  ]), /* @__PURE__ */ e.jsx(
    Yr,
    {
      maxSnack: 3,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right"
      },
      autoHideDuration: 3e3,
      action: (j) => /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: () => {
            window.dispatchEvent(
              new CustomEvent("closeSnackbar", { detail: j })
            );
          },
          className: "p-1 hover:bg-white/20 rounded-full transition-colors duration-200 text-white flex items-center justify-center",
          children: /* @__PURE__ */ e.jsx(Ae, { className: "h-4 w-4" })
        }
      ),
      children: /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6", children: [
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("h1", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: c }),
            /* @__PURE__ */ e.jsx("p", { className: "text-md text-gray-600 dark:text-gray-400 mt-2", children: h == null ? void 0 : h.description })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "flex items-center space-x-3", children: /* @__PURE__ */ e.jsxs(
            Me,
            {
              onClick: () => Z(!0),
              variant: "contained",
              color: "primary",
              children: [
                /* @__PURE__ */ e.jsx(Br, { className: "w-4 h-4 mr-2" }),
                h.buttonText || "Add New"
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ e.jsx(
          ea,
          {
            config: {
              ...d,
              pagination: {
                ...d.pagination,
                ...C
              },
              data: Te,
              setServerSidePaginationData: M,
              onMenuAction: Q,
              filterConfig: n,
              onFilterApply: Se,
              loading: N
            }
          }
        ),
        /* @__PURE__ */ e.jsx(
          De,
          {
            isOpen: V,
            onClose: () => Z(!1),
            icon: (me = t.addModal) == null ? void 0 : me.icon,
            title: ((ie = t.addModal) == null ? void 0 : ie.title) || "Add New",
            size: ((de = t.addModal) == null ? void 0 : de.size) || "md",
            onFormSubmit: () => {
              var j;
              return (j = document.querySelector("#addForm")) == null ? void 0 : j.requestSubmit();
            },
            loadingBtn: v,
            actionButtons: t.addModal.actionButtons,
            children: /* @__PURE__ */ e.jsx(
              ir,
              {
                config: (t == null ? void 0 : t.addModal) || [],
                onSubmit: ve,
                initialData: {},
                loading: v
              }
            )
          }
        ),
        /* @__PURE__ */ e.jsx(
          De,
          {
            isOpen: $,
            onClose: () => x(!1),
            icon: (xe = t.editModal) == null ? void 0 : xe.icon,
            title: ((ce = t.editModal) == null ? void 0 : ce.title) || "Edit",
            size: ((Ne = t.editModal) == null ? void 0 : Ne.size) || "md",
            onFormSubmit: () => {
              var j;
              return (j = document.querySelector("#editForm")) == null ? void 0 : j.requestSubmit();
            },
            actionButtons: t.editModal.actionButtons,
            loadingBtn: v,
            children: /* @__PURE__ */ e.jsx(
              ir,
              {
                config: t.editModal || [],
                onSubmit: fe,
                initialData: O,
                loading: v
              }
            )
          }
        ),
        B && /* @__PURE__ */ e.jsx(
          De,
          {
            isOpen: B,
            onClose: (j) => {
              ge(j);
            },
            icon: ((we = t.deleteModal) == null ? void 0 : we.icon) || /* @__PURE__ */ e.jsx(He, { icon: "ph:warning-bold", className: "w-6 h-6 text-red-500" }),
            title: ((l = t.deleteModal) == null ? void 0 : l.title) || "Confirm Delete",
            size: ((m = t.deleteModal) == null ? void 0 : m.size) || "md",
            loading: v,
            actionButtons: t.deleteModal.actionButtons,
            executeFunction: oe,
            selectedItem: O,
            children: /* @__PURE__ */ e.jsx("div", { className: "flex items-center space-x-2 py-3", children: /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("p", { className: "text-md text-gray-700 dark:text-white", children: ((A = t.deleteModal) == null ? void 0 : A.confirmText) || "Are you sure you want to delete this item?" }),
              ((H = t.deleteModal) == null ? void 0 : H.referenceKey) && /* @__PURE__ */ e.jsx("p", { className: "text-md font-semibold text-gray-700 dark:text-white", children: O[(z = t.deleteModal) == null ? void 0 : z.referenceKey] })
            ] }) })
          }
        ),
        t.viewModal && /* @__PURE__ */ e.jsx(
          De,
          {
            isOpen: T,
            onClose: () => {
              S(!1), W(null);
            },
            icon: (te = t.viewModal) == null ? void 0 : te.icon,
            title: ((X = t.viewModal) == null ? void 0 : X.title) || "View Details",
            size: ((ue = t.viewModal) == null ? void 0 : ue.size) || "lg",
            footerConfig: t == null ? void 0 : t.viewModal.footer,
            children: (je = t.viewModal) != null && je.component ? /* @__PURE__ */ e.jsx(t.viewModal.component, { data: O }) : /* @__PURE__ */ e.jsx(
              ra,
              {
                data: O,
                config: t.viewModal || {}
              }
            )
          }
        )
      ] })
    }
  );
}, Ve = a.shape({
  value: a.oneOfType([
    a.string,
    a.number,
    a.bool
  ]).isRequired,
  label: a.string.isRequired,
  color: a.string
}), Ge = a.shape({
  type: a.string.isRequired,
  label: a.string.isRequired,
  color: a.string,
  variant: a.string,
  onClick: a.func
}), aa = a.shape({
  title: a.string.isRequired,
  type: a.string.isRequired,
  variant: a.string,
  icon: a.node
}), ta = a.shape({
  key: a.string.isRequired,
  title: a.string,
  type: a.string,
  imageKey: a.string,
  titleKey: a.string,
  subtitleKey: a.string,
  onClickDetails: a.bool,
  variant: a.string,
  chipOptions: a.arrayOf(Ve),
  defaultColor: a.string,
  className: a.string,
  format: a.string,
  menuList: a.arrayOf(aa)
}), Ye = a.shape({
  key: a.string.isRequired,
  label: a.string,
  type: a.string.isRequired,
  required: a.bool,
  minLength: a.number,
  parentClass: a.string,
  search: a.bool,
  multiple: a.bool,
  dropdownMaxHeight: a.string,
  dragDrop: a.bool,
  countriesList: a.bool,
  defaultCountry: a.string,
  placeholder: a.string,
  rows: a.number,
  text: a.string,
  editorKey: a.string,
  options: a.arrayOf(Ve)
}), na = a.shape({
  key: a.string,
  label: a.string,
  type: a.string,
  imageKey: a.string,
  titleKey: a.string,
  subtitleKey: a.string,
  blockClass: a.string,
  icon: a.node,
  variant: a.string,
  chipOptions: a.arrayOf(Ve),
  defaultColor: a.string,
  className: a.string,
  format: a.string
});
mr.propTypes = {
  config: a.shape({
    title: a.string.isRequired,
    description: a.string,
    buttonText: a.string,
    fetchData: a.func.isRequired,
    isStaticData: a.bool,
    /* ================= TABLE CONFIG ================= */
    tableConfig: a.shape({
      table_head: a.arrayOf(ta).isRequired,
      search: a.shape({
        enabled: a.bool,
        useServerSideSearch: a.bool,
        searchKeys: a.arrayOf(a.string)
      }),
      pagination: a.shape({
        enabled: a.bool,
        useServerSidePagination: a.bool
      }),
      filter: a.shape({
        enabled: a.bool,
        useServerSideFilters: a.bool
      })
    }).isRequired,
    /* ================= MODAL CONFIG ================= */
    modalConfig: a.shape({
      addModal: a.shape({
        title: a.string.isRequired,
        size: a.string,
        formClass: a.string,
        formFields: a.arrayOf(Ye),
        handleSubmit: a.func.isRequired,
        actionButtons: a.arrayOf(Ge)
      }),
      editModal: a.shape({
        title: a.string.isRequired,
        size: a.string,
        formClass: a.string,
        formFields: a.arrayOf(Ye),
        handleSubmit: a.func.isRequired,
        actionButtons: a.arrayOf(Ge)
      }),
      deleteModal: a.shape({
        title: a.string.isRequired,
        size: a.string,
        confirmText: a.string,
        referenceKey: a.string,
        actionButtons: a.arrayOf(Ge)
      }),
      viewModal: a.shape({
        title: a.string.isRequired,
        size: a.string,
        // 👇 This covers your commented code:
        component: a.elementType,
        // for custom component like TeamMemberDetail
        fields: a.arrayOf(na),
        footer: a.shape({
          cancelButton: a.bool,
          cancelText: a.string
        })
      })
    }),
    /* ================= FILTER CONFIG ================= */
    filterConfig: a.shape({
      fields: a.arrayOf(Ye)
    })
  }).isRequired
};
function ha(h) {
  return console.info(h, "props passed"), /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx(mr, { config: h.config }) });
}
export {
  ha as default
};
//# sourceMappingURL=index.es.js.map
