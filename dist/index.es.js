import ve, { useState as T, useRef as ce, useEffect as W, useMemo as Se } from "react";
import { ChevronDown as Fe, Search as Ce, Check as ze, X as je, Filter as He, ChevronLeft as Ue, ChevronRight as Ve, EllipsisVertical as We, User as De, Plus as qe } from "lucide-react";
import { createPortal as Je } from "react-dom";
import { Icon as Re } from "@iconify/react";
import { Editor as Ze } from "@tinymce/tinymce-react";
import { SnackbarProvider as Xe, enqueueSnackbar as ke } from "notistack";
import a from "prop-types";
var Me = { exports: {} }, ge = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ee;
function Qe() {
  if (Ee) return ge;
  Ee = 1;
  var c = Symbol.for("react.transitional.element"), d = Symbol.for("react.fragment");
  function s(i, l, r) {
    var n = null;
    if (r !== void 0 && (n = "" + r), l.key !== void 0 && (n = "" + l.key), "key" in l) {
      r = {};
      for (var k in l)
        k !== "key" && (r[k] = l[k]);
    } else r = l;
    return l = r.ref, {
      $$typeof: c,
      type: i,
      key: n,
      ref: l !== void 0 ? l : null,
      props: r
    };
  }
  return ge.Fragment = d, ge.jsx = s, ge.jsxs = s, ge;
}
var pe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _e;
function ea() {
  return _e || (_e = 1, process.env.NODE_ENV !== "production" && function() {
    function c(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === C ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case j:
          return "Fragment";
        case R:
          return "Profiler";
        case S:
          return "StrictMode";
        case z:
          return "Suspense";
        case O:
          return "SuspenseList";
        case F:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case N:
            return "Portal";
          case B:
            return t.displayName || "Context";
          case P:
            return (t._context.displayName || "Context") + ".Consumer";
          case Y:
            var y = t.render;
            return t = t.displayName, t || (t = y.displayName || y.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case p:
            return y = t.displayName || null, y !== null ? y : c(t.type) || "Memo";
          case _:
            y = t._payload, t = t._init;
            try {
              return c(t(y));
            } catch {
            }
        }
      return null;
    }
    function d(t) {
      return "" + t;
    }
    function s(t) {
      try {
        d(t);
        var y = !1;
      } catch {
        y = !0;
      }
      if (y) {
        y = console;
        var L = y.error, G = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return L.call(
          y,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          G
        ), d(t);
      }
    }
    function i(t) {
      if (t === j) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === _)
        return "<...>";
      try {
        var y = c(t);
        return y ? "<" + y + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function l() {
      var t = f.A;
      return t === null ? null : t.getOwner();
    }
    function r() {
      return Error("react-stack-top-frame");
    }
    function n(t) {
      if (A.call(t, "key")) {
        var y = Object.getOwnPropertyDescriptor(t, "key").get;
        if (y && y.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function k(t, y) {
      function L() {
        X || (X = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          y
        ));
      }
      L.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: L,
        configurable: !0
      });
    }
    function M() {
      var t = c(this.type);
      return ae[t] || (ae[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function x(t, y, L, G, te, ne) {
      var I = L.ref;
      return t = {
        $$typeof: h,
        type: t,
        key: y,
        props: L,
        _owner: G
      }, (I !== void 0 ? I : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: M
      }) : Object.defineProperty(t, "ref", { enumerable: !1, value: null }), t._store = {}, Object.defineProperty(t._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(t, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(t, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: te
      }), Object.defineProperty(t, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ne
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function m(t, y, L, G, te, ne) {
      var I = y.children;
      if (I !== void 0)
        if (G)
          if (U(I)) {
            for (G = 0; G < I.length; G++)
              u(I[G]);
            Object.freeze && Object.freeze(I);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else u(I);
      if (A.call(y, "key")) {
        I = c(t);
        var J = Object.keys(y).filter(function(ue) {
          return ue !== "key";
        });
        G = 0 < J.length ? "{key: someKey, " + J.join(": ..., ") + ": ...}" : "{key: someKey}", ie[I + G] || (J = 0 < J.length ? "{" + J.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          G,
          I,
          J,
          I
        ), ie[I + G] = !0);
      }
      if (I = null, L !== void 0 && (s(L), I = "" + L), n(y) && (s(y.key), I = "" + y.key), "key" in y) {
        L = {};
        for (var le in y)
          le !== "key" && (L[le] = y[le]);
      } else L = y;
      return I && k(
        L,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), x(
        t,
        I,
        L,
        l(),
        te,
        ne
      );
    }
    function u(t) {
      b(t) ? t._store && (t._store.validated = 1) : typeof t == "object" && t !== null && t.$$typeof === _ && (t._payload.status === "fulfilled" ? b(t._payload.value) && t._payload.value._store && (t._payload.value._store.validated = 1) : t._store && (t._store.validated = 1));
    }
    function b(t) {
      return typeof t == "object" && t !== null && t.$$typeof === h;
    }
    var v = ve, h = Symbol.for("react.transitional.element"), N = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), P = Symbol.for("react.consumer"), B = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), O = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), F = Symbol.for("react.activity"), C = Symbol.for("react.client.reference"), f = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, A = Object.prototype.hasOwnProperty, U = Array.isArray, V = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      react_stack_bottom_frame: function(t) {
        return t();
      }
    };
    var X, ae = {}, oe = v.react_stack_bottom_frame.bind(
      v,
      r
    )(), re = V(i(r)), ie = {};
    pe.Fragment = j, pe.jsx = function(t, y, L) {
      var G = 1e4 > f.recentlyCreatedOwnerStacks++;
      return m(
        t,
        y,
        L,
        !1,
        G ? Error("react-stack-top-frame") : oe,
        G ? V(i(t)) : re
      );
    }, pe.jsxs = function(t, y, L) {
      var G = 1e4 > f.recentlyCreatedOwnerStacks++;
      return m(
        t,
        y,
        L,
        !0,
        G ? Error("react-stack-top-frame") : oe,
        G ? V(i(t)) : re
      );
    };
  }()), pe;
}
process.env.NODE_ENV === "production" ? Me.exports = Qe() : Me.exports = ea();
var e = Me.exports;
const Le = (c, d = "DD MMM YYYY") => {
  if (!c) return "N/A";
  const s = new Date(c);
  if (isNaN(s)) return "Invalid Date";
  const i = (r) => String(r).padStart(2, "0"), l = {
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
  return d.replace(
    /YYYY|YY|MMMM|MMM|MM|M|DD|D|dddd|ddd|HH|hh|mm|ss|A/g,
    (r) => l[r]
  );
}, aa = (c, d, s = []) => {
  if (!(d != null && d.trim())) return c;
  const i = d.toLowerCase(), l = (r) => r == null ? [] : typeof r == "object" ? Object.values(r).flatMap(l) : [String(r)];
  return c.filter((r) => {
    let n = [];
    return s.length > 0 ? s.forEach((k) => {
      r[k] !== void 0 && n.push(...l(r[k]));
    }) : n = l(r), n.some(
      (k) => k.toLowerCase().includes(i)
    );
  });
}, he = ve.forwardRef(
  ({
    className: c = "",
    variant: d = "contained",
    color: s = "default",
    size: i = "default",
    fullWidth: l = !1,
    children: r,
    ...n
  }, k) => {
    var h;
    const M = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", x = {
      sm: "h-8 px-3 rounded-md text-sm",
      md: "h-9 px-4 rounded-md text-sm",
      lg: "h-11 px-6 rounded-md text-base",
      xl: "h-12 px-8 rounded-lg text-lg",
      default: "h-9 px-4 rounded-md text-sm"
    }, m = {
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
    }, u = ((h = m[s]) == null ? void 0 : h[d]) || m.default.contained, b = x[i], v = `
      ${M} 
      ${u} 
      ${b} 
      ${l ? "w-full" : ""} 
      ${c}
    `.trim();
    return /* @__PURE__ */ e.jsx(
      "button",
      {
        ref: k,
        type: n.type || "button",
        className: v,
        ...n,
        children: r
      }
    );
  }
);
he.displayName = "Button";
function ee({ label: c, required: d = !1 }) {
  return /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: [
    c,
    d && /* @__PURE__ */ e.jsx("span", { className: "ml-1", children: "*" })
  ] }) });
}
const ra = ({
  options: c = [],
  value: d,
  onChange: s,
  placeholder: i = "Select option",
  className: l = "",
  disabled: r = !1,
  search: n = !1,
  label: k = "",
  required: M = !1,
  name: x = "",
  parentClass: m = "",
  multiple: u = !1,
  // ✅ NEW
  dropdownMaxHeight: b = ""
}) => {
  var C;
  const [v, h] = T(!1), [N, j] = T(""), [S, R] = T(!0), P = ce(null), B = ce(null), Y = (f) => String(typeof f == "boolean" ? f : f ?? ""), z = u ? (d || []).map(Y) : Y(d), O = c.filter(
    (f) => f.label.toLowerCase().includes(N.toLowerCase())
  ), p = (f) => {
    const A = Y(f);
    return u ? z.includes(A) : A === z;
  };
  W(() => {
    const f = (A) => {
      P.current && !P.current.contains(A.target) && (h(!1), j(""));
    };
    return document.addEventListener("mousedown", f), () => document.removeEventListener("mousedown", f);
  }, []), W(() => {
    if (v && P.current) {
      const f = P.current.getBoundingClientRect(), U = window.innerHeight - f.bottom;
      R(U < 200);
    }
  }, [v]), W(() => {
    v && B.current && B.current.focus();
  }, [v]);
  const _ = (f) => {
    let A = f;
    if (f === "true" ? A = !0 : f === "false" && (A = !1), u) {
      const U = z.includes(Y(f));
      let V;
      U ? V = d.filter(
        (X) => Y(X) !== Y(f)
      ) : V = [...d || [], A], s(V);
    } else
      s(A), h(!1);
    j("");
  }, F = u ? c.filter((f) => p(f.value)).map((f) => f.label).join(", ") : (C = c.find((f) => p(f.value))) == null ? void 0 : C.label;
  return /* @__PURE__ */ e.jsxs("div", { className: m || "col-span-12", children: [
    /* @__PURE__ */ e.jsx(ee, { label: k, required: M }),
    /* @__PURE__ */ e.jsxs("div", { className: `relative ${l}`, ref: P, children: [
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          type: "button",
          onClick: () => !r && h(!v),
          disabled: r,
          className: `w-full h-10 px-3 border border-gray-300 dark:border-gray-600 rounded-md text-left text-sm flex items-center justify-between 
          ${F ? "dark:text-white" : "text-gray-500 dark:text-gray-400"} 
          ${r ? "opacity-50 cursor-not-allowed" : "dark:bg-gray-700"}`,
          children: [
            /* @__PURE__ */ e.jsx("span", { className: "truncate", children: F || i }),
            /* @__PURE__ */ e.jsx(
              Fe,
              {
                className: `w-4 h-4 transition-transform ${v ? "rotate-180" : ""}`
              }
            )
          ]
        }
      ),
      v && /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: `absolute z-50 w-full border rounded-md bg-white dark:bg-gray-700 shadow-lg 
            ${S ? "bottom-full mb-1" : "top-full mt-1"}`,
          children: [
            n && /* @__PURE__ */ e.jsx("div", { className: "p-2 border-b border-gray-200 dark:border-gray-600", children: /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ e.jsx(Ce, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  ref: B,
                  type: "text",
                  value: N,
                  onChange: (f) => j(f.target.value),
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
                  maxHeight: b || ""
                },
                children: O.length > 0 ? O.map((f) => /* @__PURE__ */ e.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => _(String(f.value)),
                    className: `w-full px-3 py-2 text-left text-sm flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 
                    ${p(f.value) ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300" : ""}`,
                    children: [
                      /* @__PURE__ */ e.jsx("span", { children: f.label }),
                      u && p(f.value) && /* @__PURE__ */ e.jsx(ze, { className: "w-4 h-4" })
                    ]
                  },
                  String(f.value)
                )) : /* @__PURE__ */ e.jsx("div", { className: "px-3 py-2 text-sm text-gray-500 dark:text-gray-400", children: "No options found" })
              }
            )
          ]
        }
      )
    ] })
  ] }, x);
}, ta = ({
  value: c = !0,
  onChange: d,
  text: s,
  options: i = [],
  label: l,
  required: r,
  name: n = "",
  disabled: k = !1,
  parentClass: M = ""
}) => {
  const x = i.length > 0 ? i : [
    { label: "Active", value: !0 },
    { label: "Inactive", value: !1 }
  ];
  return /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("div", { className: M || "col-span-12", children: [
    /* @__PURE__ */ e.jsx(ee, { label: l, required: r }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between h-10 gap-4 bg-gray-100 dark:bg-gray-700 px-3 rounded-md border border-gray-100 dark:border-gray-600", children: [
      s && /* @__PURE__ */ e.jsx("p", { className: "text-xs text-gray-600 dark:text-gray-400 flex-shrink overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px]", children: s }),
      /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-6", children: x.map((m, u) => /* @__PURE__ */ e.jsxs(
        "label",
        {
          className: "flex items-center gap-2 cursor-pointer select-none",
          children: [
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "radio",
                name: "switch-field",
                required: r && u === 0,
                value: m.value,
                disabled: k,
                checked: c === m.value,
                onChange: () => d(m.value),
                className: "w-4 h-4  border-gray-300 cursor-pointer"
              }
            ),
            /* @__PURE__ */ e.jsx("span", { className: "text-sm text-gray-700 dark:text-white", children: m.label })
          ]
        },
        u
      )) })
    ] })
  ] }, n) });
}, fe = [
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
function na({
  label: c = "",
  value: d = "",
  name: s = "",
  parentClass: i = "",
  onChange: l,
  disabled: r = !1,
  required: n = !1,
  placeholder: k = "Phone number",
  search: M = !1,
  countriesList: x = !1,
  defaultCountry: m = ""
}) {
  const u = (p) => fe.find((_) => _.code == p), [b, v] = T(
    u(m) || fe[0]
  ), [h, N] = T(""), [j, S] = T(!1), [R, P] = T(""), B = ce();
  W(() => {
    if (typeof d == "string" && d.startsWith("+")) {
      const p = fe.filter((_) => d.startsWith("+" + _.phone)).sort((_, F) => F.phone.length - _.phone.length)[0];
      if (p) {
        v(p), N(d.replace("+" + p.phone, ""));
        return;
      }
    }
    N(d);
  }, [d]);
  const Y = (p) => {
    const _ = p.target.value.replace(/\D/g, "");
    N(_), b && l && l("+" + b.phone + _);
  }, z = (p) => {
    v(p), l && l("+" + p.phone + h), S(!1), P("");
  };
  W(() => {
    const p = (_) => {
      B.current && !B.current.contains(_.target) && S(!1);
    };
    return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, []);
  const O = fe.filter(
    (p) => p.label.toLowerCase().includes(R.toLowerCase()) || p.phone.includes(R)
  );
  if (!x) {
    const p = (_) => {
      const F = _.target.value.replace(/[^+\d]/g, ""), C = F.startsWith("+") ? "+" + F.replace(/[+]/g, "").slice(0) : F;
      l(C);
    };
    return /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("div", { className: i || "col-span-12", children: [
      /* @__PURE__ */ e.jsx(ee, { label: c, required: n }),
      /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "text",
          value: d,
          onChange: p,
          placeholder: k,
          disabled: r,
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
    /* @__PURE__ */ e.jsx(ee, { label: c, required: n }),
    /* @__PURE__ */ e.jsxs("div", { className: "relative ", ref: B, children: [
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: `h-[40px] flex items-center border rounded-md px-2 bg-white dark:bg-gray-700 transition-all
  ${j ? "ring-0.5 ring-blue-100 border-blue-300" : "border-gray-300 dark:border-gray-600"}
  ${r ? "opacity-60 cursor-not-allowed" : ""}`,
          children: [
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                disabled: r,
                onClick: () => S(!j),
                className: "flex items-center gap-1 pr-2 border-r border-gray-300 dark:border-gray-700 focus:outline-none",
                children: [
                  b ? /* @__PURE__ */ e.jsx(
                    "img",
                    {
                      src: `https://flagcdn.com/w20/${b.code.toLowerCase()}.png`,
                      alt: b.code,
                      className: "w-5 h-3 object-cover"
                    }
                  ) : /* @__PURE__ */ e.jsx("span", { className: "text-gray-400 text-xs", children: "🌐" }),
                  /* @__PURE__ */ e.jsx(Fe, { className: "w-3 h-3 text-gray-500" })
                ]
              }
            ),
            b && /* @__PURE__ */ e.jsxs("span", { className: "ml-2 text-sm text-gray-700 dark:text-gray-200 whitespace-nowrap", children: [
              "+",
              b.phone
            ] }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "tel",
                value: h,
                onChange: Y,
                required: n,
                disabled: r || !b,
                placeholder: b ? k : "Select a country",
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
                value: b && h ? "+" + b.phone + h : "",
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
      j && /* @__PURE__ */ e.jsxs("div", { className: "absolute top-full left-0 w-full mt-1 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 shadow-lg z-50 max-h-60 overflow-y-auto", children: [
        M && /* @__PURE__ */ e.jsx("div", { className: "p-2 border-b border-gray-200 dark:border-gray-700", children: /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsx(Ce, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              value: R,
              onChange: (p) => P(p.target.value),
              placeholder: "Search country...",
              className: "w-full pl-9 pr-3 py-2 text-sm border rounded-md bg-white dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none "
            }
          )
        ] }) }),
        O.map((p) => /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            onClick: () => z(p),
            className: "w-full flex items-center gap-2 px-2 py-1 text-sm hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100",
            children: [
              /* @__PURE__ */ e.jsx(
                "img",
                {
                  src: `https://flagcdn.com/w20/${p.code.toLowerCase()}.png`,
                  alt: p.code,
                  className: "w-5 h-3 object-cover"
                }
              ),
              /* @__PURE__ */ e.jsxs("span", { children: [
                p.label,
                " (+",
                p.phone,
                ")"
              ] })
            ]
          },
          p.code
        ))
      ] })
    ] })
  ] }, s) });
}
const Ie = ve.forwardRef(
  ({ className: c = "", label: d, required: s, ...i }, l) => {
    const r = `
      placeholder-gray-400 dark:placeholder-gray-400
      ${c}
    `.trim();
    return /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("div", { className: i.parentClass || "col-span-12", children: [
      /* @__PURE__ */ e.jsx(ee, { label: d, required: s }),
      /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsx(
        "textarea",
        {
          className: r,
          ref: l,
          required: s,
          ...i
        }
      ) })
    ] }, i.name) });
  }
);
Ie.displayName = "TextArea";
const la = ({
  label: c = "",
  value: d = null,
  onChange: s,
  required: i = !1,
  accept: l = "image/*",
  id: r,
  dragDrop: n = !1,
  name: k = "",
  parentClass: M = ""
}) => {
  const [x, m] = T(d), [u, b] = T(!1), v = ce(null);
  W(() => {
    m(d);
  }, [d]);
  const h = (R) => {
    if (!R || R.length === 0) {
      m(null), s == null || s(null);
      return;
    }
    const P = R[0], B = URL.createObjectURL(P);
    m({ file: P, preview: B }), s == null || s(B);
  }, N = (R) => {
    n && (R.preventDefault(), b(!0));
  }, j = (R) => {
    n && (R.preventDefault(), b(!1));
  }, S = (R) => {
    n && (R.preventDefault(), b(!1), h(R.dataTransfer.files));
  };
  return /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("div", { className: M || "col-span-12", children: [
    /* @__PURE__ */ e.jsx(ee, { label: c, required: i }),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `relative  rounded-md p-2 transition-all ${u ? "border border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900" : "border bg-gray-50 dark:bg-gray-700"}`,
        onDragOver: N,
        onDragLeave: j,
        onDrop: S,
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
                    onClick: () => v.current.click(),
                    children: x ? /* @__PURE__ */ e.jsx(
                      "img",
                      {
                        src: x.preview || x,
                        alt: "preview",
                        className: "object-cover w-20 h-20 rounded-full"
                      }
                    ) : /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx("div", { className: "rounded-full bg-gray-200 dark:bg-gray-800 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ e.jsx(
                      Re,
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
                    ref: v,
                    id: r,
                    type: "file",
                    accept: l,
                    onChange: (R) => h(R.target.files),
                    required: i && !x,
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
  ] }, k) });
}, Be = ve.forwardRef(
  ({
    label: c,
    required: d,
    parentClass: s = "",
    className: i = "",
    type: l = "text",
    onKeyDown: r,
    ...n
  }, k) => {
    const [M, x] = T(!1), m = (b) => {
      l === "number" && ["e", "E"].includes(b.key) && b.preventDefault(), r == null || r(b);
    }, u = `
      h-10 placeholder-gray-400 dark:placeholder-gray-400
      ${l === "password" ? "pr-10" : ""}
      ${i}
    `.trim();
    return /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("div", { className: s || "col-span-12", children: [
      /* @__PURE__ */ e.jsx(ee, { label: c, required: d }),
      /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: l === "password" && M ? "text" : l,
            ref: k,
            required: d,
            onKeyDown: m,
            className: u,
            ...n
          }
        ),
        l === "password" && /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            tabIndex: -1,
            onClick: () => x((b) => !b),
            className: "absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200",
            children: /* @__PURE__ */ e.jsx(
              Re,
              {
                icon: M ? "mdi:eye-off-outline" : "mdi:eye-outline",
                className: "w-5 h-5"
              }
            )
          }
        )
      ] })
    ] }, n.name) });
  }
);
Be.displayName = "Input";
const sa = ({
  key: c,
  editorKey: d = "",
  value: s = "",
  onChange: i,
  label: l = "",
  required: r = !1,
  placeholder: n = "",
  parentClass: k = "col-span-12",
  height: M = 400,
  inline: x = !1,
  disabled: m = !1,
  plugins: u,
  toolbar: b,
  menubar: v = !1,
  fontFamily: h = "Inter, sans-serif",
  initConfig: N = {},
  imageUploadHandler: j
  // ✅ Promise function passed from parent
}) => {
  const S = [
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
  ], R = "undo redo | blocks | bold italic underline forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media table | removeformat | code fullscreen preview", P = (B) => new Promise((Y, z) => {
    if (!j) {
      Y(`data:${B.blob().type};base64,${B.base64()}`);
      return;
    }
    j(B).then((O) => {
      O ? Y(O) : z("Upload failed: No URL returned");
    }).catch((O) => {
      z(
        typeof O == "string" ? O : (O == null ? void 0 : O.message) || "Image upload failed"
      );
    });
  });
  return /* @__PURE__ */ e.jsxs("div", { className: k, children: [
    l && /* @__PURE__ */ e.jsx(ee, { label: l, required: r }),
    /* @__PURE__ */ e.jsx(
      Ze,
      {
        apiKey: d,
        value: s,
        disabled: m,
        init: {
          height: M,
          inline: x,
          menubar: v,
          branding: !1,
          statusbar: !0,
          automatic_uploads: !0,
          images_upload_handler: P,
          plugins: u ?? S,
          toolbar: b ?? R,
          placeholder: n,
          content_style: `
            body {
                font-family: ${h};
            }
            `,
          ...N
        },
        onEditorChange: (B) => {
          i && i(B);
        }
      }
    )
  ] }, c);
}, oa = ({
  name: c = "",
  label: d = "",
  // label for single checkbox
  options: s = [],
  // array of { label, value } for multiple
  value: i = null,
  // boolean for single, array for multiple, or string for single select
  onChange: l,
  disabled: r = !1,
  required: n = !1,
  parentClass: k = "col-span-12",
  className: M = "",
  multiSelect: x = !1
  // ✅ if true, only one option can be selected (like radio)
}) => {
  const m = Array.isArray(s) && s.length > 0, u = (h) => m ? x ? Array.isArray(i) && i.includes(h) : i === h : !!i, b = (h) => {
    l == null || l(h.target.checked, c);
  }, v = (h, N) => {
    if (l)
      if (!x)
        l(N ? h : "", c);
      else {
        const j = Array.isArray(i) ? [...i] : [];
        if (N)
          j.includes(h) || j.push(h);
        else {
          const S = j.indexOf(h);
          S > -1 && j.splice(S, 1);
        }
        l(j, c);
      }
  };
  return m ? /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("div", { className: `${k}`, children: [
    /* @__PURE__ */ e.jsx(ee, { label: d, required: n }),
    /* @__PURE__ */ e.jsx("div", { className: "flex flex-col space-y-2", children: s.map((h, N) => /* @__PURE__ */ e.jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "checkbox",
          name: c,
          value: h.value,
          checked: u(h.value),
          disabled: r || h.disabled,
          required: n && N === 0,
          onChange: (j) => v(h.value, j.target.checked),
          className: `h-4 w-4 cursor-pointer text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${M}`
        },
        c
      ),
      h.label && /* @__PURE__ */ e.jsx(
        "label",
        {
          htmlFor: c,
          className: "ml-2 text-sm text-gray-700 dark:text-gray-200 select-none",
          children: h.label
        }
      )
    ] }, h.value || h.label)) })
  ] }) }) : /* @__PURE__ */ e.jsxs("div", { className: `flex items-center ${k}`, children: [
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "checkbox",
        name: c,
        checked: u(),
        disabled: r,
        required: n,
        onChange: b,
        className: `h-4 w-4 text-blue-600 cursor-pointer border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${M}`
      }
    ),
    d && /* @__PURE__ */ e.jsx(
      "label",
      {
        htmlFor: c,
        className: "ml-2 text-sm text-gray-700 dark:text-gray-200 select-none",
        children: d
      }
    )
  ] });
}, $e = ({ field: c, formData: d, handleChange: s }) => {
  const {
    key: i,
    label: l,
    type: r,
    options: n,
    placeholder: k,
    rows: M,
    inputClass: x,
    search: m,
    accept: u,
    text: b,
    required: v = !1,
    minLength: h,
    dragDrop: N,
    parentClass: j,
    countriesList: S,
    defaultCountry: R,
    multiple: P,
    dropdownMaxHeight: B,
    editorKey: Y,
    fontFamily: z,
    disabled: O
  } = c;
  let p = d == null ? void 0 : d[i];
  p == null && (p = "");
  const _ = k || (r === "select" ? `Select ${l}` : `Enter ${l}`), F = "w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm focus:outline-none focus:ring-1 focus:ring-blue-200 bg-white text-black dark:bg-gray-700 dark:text-white";
  switch (r) {
    case "select":
      return /* @__PURE__ */ e.jsx(
        ra,
        {
          options: n || [],
          value: p,
          onChange: (C) => s(i, C),
          placeholder: _,
          className: x || "",
          search: m,
          required: v,
          label: l,
          name: i,
          disabled: O,
          parentClass: j,
          multiple: P,
          dropdownMaxHeight: B
        }
      );
    case "checkbox":
      return /* @__PURE__ */ e.jsx(
        oa,
        {
          name: i,
          label: l,
          options: n || [],
          value: p,
          onChange: (C) => s(i, C),
          required: v,
          parentClass: j,
          className: x || "",
          multiSelect: P,
          disabled: O
        }
      );
    case "switch":
      return /* @__PURE__ */ e.jsx(
        ta,
        {
          value: p,
          onChange: (C) => s(i, C),
          text: b,
          options: n || [],
          label: l,
          required: v,
          name: i,
          disabled: O,
          parentClass: j
        }
      );
    case "phone":
      return /* @__PURE__ */ e.jsx(
        na,
        {
          value: p,
          onChange: (C) => s(i, C),
          countriesList: S,
          defaultCountry: R,
          required: v,
          placeholder: _,
          search: m,
          label: l,
          name: i,
          disabled: O,
          parentClass: j
        }
      );
    case "textarea":
      return /* @__PURE__ */ e.jsx(
        Ie,
        {
          value: p,
          onChange: (C) => s(i, C.target.value),
          placeholder: _,
          rows: M || 3,
          className: `${F} ${x || ""}`,
          required: v,
          name: i,
          label: l,
          disabled: O,
          parentClass: j
        }
      );
    case "image":
      return /* @__PURE__ */ e.jsx(
        la,
        {
          value: p,
          onChange: (C) => s(i, C),
          required: v,
          accept: u || "image/*",
          id: `file-${i}`,
          dragDrop: N,
          label: l,
          name: i,
          parentClass: j
        }
      );
    case "tinyEditor":
      return /* @__PURE__ */ e.jsx(
        sa,
        {
          value: p,
          onChange: (C) => s(i, C),
          required: v,
          placeholder: _,
          label: l,
          parentClass: j,
          fontFamily: z,
          editorKey: Y,
          disabled: O
        },
        `editor-${i}`
      );
    default:
      return /* @__PURE__ */ e.jsx(
        Be,
        {
          type: r || "text",
          value: p,
          onChange: (C) => s(i, C.target.value),
          placeholder: _,
          className: `${F} ${x || ""}`,
          required: v,
          name: i,
          minLength: h,
          label: l,
          parentClass: j,
          disabled: O
        }
      );
  }
}, ia = ({ isOpen: c, onClose: d, config: s, onApply: i }) => {
  var x;
  const [l, r] = T({}), n = (m, u) => {
    r((b) => ({ ...b, [m]: u }));
  }, k = () => {
    i == null || i(l), d();
  }, M = () => {
    r({}), i == null || i({}), d();
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${c ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
        onClick: d
      }
    ),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `fixed top-0 right-0 h-full w-[28rem] bg-white dark:bg-gray-900 shadow-2xl z-50 flex flex-col border-l border-gray-200 dark:border-gray-700
          transform transition-transform duration-300 ease-in-out
          ${c ? "translate-x-0" : "translate-x-full"}
        `,
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700", children: [
            /* @__PURE__ */ e.jsx("h2", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: "Filters" }),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                onClick: d,
                className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition",
                children: /* @__PURE__ */ e.jsx(je, { className: "w-5 h-5 text-gray-500 dark:text-gray-400" })
              }
            )
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto px-4 py-3", children: s != null && s.component ? /* @__PURE__ */ e.jsx(s.component, { filters: l, onFilterChange: n }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: (x = s == null ? void 0 : s.fields) == null ? void 0 : x.map((m) => /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx(
            $e,
            {
              field: m,
              formData: l,
              handleChange: n
            },
            m.key
          ) })) }) }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex gap-2 px-4 py-3 border-t border-gray-200 dark:border-gray-700", children: [
            /* @__PURE__ */ e.jsx(
              he,
              {
                onClick: k,
                variant: "contained",
                color: "primary",
                fullWidth: !0,
                children: "Apply Filters"
              }
            ),
            /* @__PURE__ */ e.jsx(
              he,
              {
                onClick: M,
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
}, Ae = {
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
}, Pe = {
  contained: "bg",
  outline: "border !bg-transparent",
  soft: "bg opacity-90"
}, Ge = ({
  label: c,
  variant: d = "contained",
  // contained | outline | soft
  color: s = "green",
  className: i = ""
}) => {
  const l = Ae[s] || Ae.green, r = Pe[d] || Pe.contained, n = d === "outline" ? l.border : l.bg;
  return /* @__PURE__ */ e.jsx(
    "span",
    {
      className: `inline-flex justify-center items-center rounded-sm text-xs font-semibold px-3 py-1 min-w-[78px]
        ${n}
        ${r}
        ${i}`,
      children: c
    }
  );
}, da = ({ rows: c = 5, columns: d = 5 }) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
  /* @__PURE__ */ e.jsx("div", { className: "w-full mb-6 inline-flex justify-end items-center", children: /* @__PURE__ */ e.jsx("div", { className: "h-8 w-80 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }),
  /* @__PURE__ */ e.jsx("div", { className: "overflow-hidden rounded-md border border-gray-200 dark:border-gray-800", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full border-collapse", children: [
    /* @__PURE__ */ e.jsx("thead", { children: /* @__PURE__ */ e.jsx("tr", { className: "bg-gray-50 dark:bg-gray-900", children: Array.from({ length: d }).map((s, i) => /* @__PURE__ */ e.jsx("th", { className: "px-4 py-3", children: /* @__PURE__ */ e.jsx("div", { className: "h-6 w-24 bg-gray-300 dark:bg-gray-700 rounded animate-pulse  inline-flex justify-center items-center" }) }, i)) }) }),
    /* @__PURE__ */ e.jsx("tbody", { children: Array.from({ length: c }).map((s, i) => /* @__PURE__ */ e.jsx(
      "tr",
      {
        className: "border-t border-gray-200 dark:border-gray-800",
        children: Array.from({ length: d }).map((l, r) => /* @__PURE__ */ e.jsx("td", { className: "px-4 py-6", children: /* @__PURE__ */ e.jsx("div", { className: "h-6 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }, r))
      },
      i
    )) })
  ] }) })
] }), Ye = ({ src: c, alt: d = "preview", isOpen: s, setIsOpen: i }) => {
  const l = () => i(!1);
  return W(() => {
    const r = (n) => {
      n.key === "Escape" && l();
    };
    return s && (document.body.style.overflow = "hidden", document.addEventListener("keydown", r)), () => {
      document.body.style.overflow = "", document.removeEventListener("keydown", r);
    };
  }, [s]), /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `fixed inset-0 z-50 flex items-center justify-center bg-black/70 dark:bg-black/80 \r
                   backdrop-blur-sm animate-in fade-in duration-200`,
      onClick: l,
      children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: l,
            className: `absolute top-4 right-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200\r
                     hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-2 shadow-lg transition`,
            children: /* @__PURE__ */ e.jsx(je, { size: 20 })
          }
        ),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "max-w-5xl w-full px-4 transform transition-all duration-200 scale-95 animate-in zoom-in-95",
            onClick: (r) => r.stopPropagation(),
            children: /* @__PURE__ */ e.jsx(
              "img",
              {
                src: c,
                alt: d,
                className: "w-full max-h-[90vh] object-contain rounded-xl"
              }
            )
          }
        )
      ]
    }
  ) });
}, ca = ({ config: c }) => {
  const {
    data: d = [],
    table_head: s = [],
    loading: i = !1,
    search: l = {
      enabled: !1,
      placeholder: "Search...",
      useServerSideSearch: !1
    },
    filter: r = {
      enabled: !1,
      useServerSideFilters: !1
    },
    pagination: n = {
      enabled: !1,
      rows_per_page: 10,
      useServerSidePagination: !1
    },
    emptyMessage: k = "No data available",
    onMenuAction: M,
    setServerSidePaginationData: x = () => {
    },
    onFilterApply: m,
    filterConfig: u = null
  } = c, [b, v] = T(""), [h, N] = T(null), [j, S] = T([]), [R, P] = T({}), [B, Y] = T(!1), [z, O] = T(null), [p, _] = T(!1), F = Se(() => !l.enabled || !b.trim() || l.useServerSideSearch ? d : aa(d, b, l.searchKeys || []), [d, b, l]), [C, f] = T(1), [A, U] = T((n == null ? void 0 : n.rows_per_page) || 50), [V, X] = T(F.length || 0), ae = n != null && n.useServerSidePagination ? n.total_pages : Math.ceil(F.length / A), oe = Se(() => {
    if (n.useServerSidePagination) return F;
    const o = (C - 1) * A;
    return F.slice(o, o + A);
  }, [F, C, A]), re = ce(null), ie = ce({}), t = ce(null), y = (o) => {
    v(o), f(1), l.useServerSideSearch && (t.current && clearTimeout(t.current), t.current = setTimeout(async () => {
      try {
        await x((g) => ({
          ...g,
          search: o,
          current_page: 1
        }));
      } catch (g) {
        console.error("Search error:", g);
      }
    }, 800));
  }, L = (o, g, D) => {
    D.stopPropagation(), N(null), M == null || M(o.type, g);
  }, G = (o, g, D) => {
    g.stopPropagation(), S(D);
    const H = g.currentTarget;
    ie.current[o] = H;
    const K = H.getBoundingClientRect(), Q = 192, Z = D.length * 40, de = window.innerWidth, be = window.innerHeight, E = de - K.right < Q ? K.left - Q + K.width : K.left, se = be - K.bottom < Z && K.top > Z ? K.top - Z - 2 : K.bottom + 2;
    P({
      top: Math.max(8, Math.min(se, be - Z - 8)),
      left: Math.max(8, Math.min(E, de - Q - 8))
    }), N(h === o ? null : o);
  }, te = (o) => (C - 1) * A + o + 1, ne = (o) => {
    O(o), _(!0);
  }, I = (o, g, D, H = null) => /* @__PURE__ */ e.jsx(e.Fragment, { children: o ? /* @__PURE__ */ e.jsx(
    "img",
    {
      src: o,
      alt: g || "Avatar",
      onClick: (K) => {
        K.stopPropagation(), K.preventDefault(), ne({ src: o, alt: g });
      },
      className: `w-10 h-10 cursor-pointer rounded-full object-cover border border-gray-200 dark:border-gray-700 ${D || ""}`
    }
  ) : /* @__PURE__ */ e.jsx(e.Fragment, { children: H || /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${D || ""}`,
      children: /* @__PURE__ */ e.jsx(De, { className: "w-6 h-6 text-gray-400 dark:text-gray-400" })
    }
  ) }) }), J = (o, g) => /* @__PURE__ */ e.jsxs("div", { className: `flex items-center space-x-4 ${g.className || ""}`, children: [
    g.imageKey ? I(o[g.imageKey], o[g.titleKey], "group-avatar") : "",
    /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("p", { className: "font-medium text-gray-900 dark:text-white group-title", children: o[g.titleKey] || "" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400 group-sub-title", children: o[g.subtitleKey] || "" })
    ] })
  ] }), le = (o, g) => {
    var Q;
    let D = String(o);
    const H = g.variant || "contained";
    let K = g.defaultColor;
    if (((Q = g == null ? void 0 : g.chipOptions) == null ? void 0 : Q.length) > 0) {
      let Z = g == null ? void 0 : g.chipOptions.find((de) => de.value == o);
      Z && (D = Z.label, K = Z.color);
    }
    return /* @__PURE__ */ e.jsx(
      Ge,
      {
        label: D,
        variant: H,
        color: K,
        className: g.className || ""
      }
    );
  }, ue = (o, g, D) => {
    const H = g[o.key];
    return o.type === "menu_actions" ? /* @__PURE__ */ e.jsx("div", { className: `text-center ${o.className || ""}`, children: /* @__PURE__ */ e.jsx(
      "button",
      {
        ref: (K) => ie.current[g.id] = K,
        onClick: (K) => G(g.id, K, o.menuList),
        className: "p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition text-gray-700 dark:text-gray-300",
        children: /* @__PURE__ */ e.jsx(We, { className: "h-4 w-4" })
      }
    ) }) : o.type === "index" ? /* @__PURE__ */ e.jsx("span", { className: o.className || "", children: te(D) }) : o.type === "group" ? J(g, o) : o.type === "chip" ? /* @__PURE__ */ e.jsx(e.Fragment, { children: le(H, o) }) : o.type === "date" ? /* @__PURE__ */ e.jsx("span", { className: o.className || "", children: Le(H, o.format || "DD MMM YYYY") }) : o.type === "avatar" ? /* @__PURE__ */ e.jsx(e.Fragment, { children: I(H, o.alt, o.className, o.fallback_icon) }) : /* @__PURE__ */ e.jsx("span", { className: o.className || "", children: H || "N/A" });
  }, me = (o, g) => {
    if (o.onClickDetails)
      return M == null ? void 0 : M("view", g);
    if (typeof o.handleClick == "function")
      return o.handleClick(g);
  }, xe = (o) => o.onClickDetails || typeof o.handleClick == "function";
  return W(() => {
    const o = () => {
      h && N(null);
    };
    return window.addEventListener("scroll", o, !0), () => {
      window.removeEventListener("scroll", o, !0);
    };
  }, [h]), W(() => {
    const o = (g) => {
      re.current && !re.current.contains(g.target) && N(null);
    };
    return document.addEventListener("click", o), () => document.removeEventListener("click", o);
  }, []), W(() => {
    n != null && n.rows_per_page && (n != null && n.useServerSidePagination) && U((n == null ? void 0 : n.rows_per_page) || 50), n.current_page && f(n.current_page);
  }, [
    n.rows_per_page,
    n == null ? void 0 : n.useServerSidePagination,
    n.current_page
  ]), W(() => {
    X(
      n != null && n.useServerSidePagination ? n.total_records : F.length
    ), F.length <= A * (C - 1) && !(n != null && n.useServerSidePagination) && f((o) => o - 1 || 1);
  }, [
    F.length,
    n.total_records,
    n == null ? void 0 : n.useServerSidePagination
  ]), i ? /* @__PURE__ */ e.jsx(da, { rows: 6, columns: 6 }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex justify-end items-center mb-6 gap-2", children: [
      l.enabled && /* @__PURE__ */ e.jsx("div", { className: "", children: /* @__PURE__ */ e.jsxs("div", { className: "relative min-w-[300px]", children: [
        /* @__PURE__ */ e.jsx(Ce, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-300" }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "text",
            placeholder: l.placeholder || "Search...",
            value: b,
            onChange: (o) => y(o.target.value),
            className: "w-full h-[36px] pl-9 pr-4 py-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-300 dark:ring-blue-200 disabled:opacity-50"
          }
        )
      ] }) }),
      u && r.enabled && /* @__PURE__ */ e.jsxs(he, { onClick: () => Y(!0), variant: "contained", children: [
        /* @__PURE__ */ e.jsx(He, { className: "w-4 h-4 mr-2" }),
        "Filters"
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-700", children: [
      /* @__PURE__ */ e.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ e.jsxs("table", { className: "min-w-full divide-y divide-gray-200 dark:divide-gray-700", children: [
        /* @__PURE__ */ e.jsx("thead", { className: "bg-gray-50 dark:bg-gray-700/60", children: /* @__PURE__ */ e.jsx("tr", { children: s.map((o) => /* @__PURE__ */ e.jsx(
          "th",
          {
            className: "px-6 py-4 text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider min-w-max max-w-[180px] truncate",
            children: o.title
          },
          o.key
        )) }) }),
        /* @__PURE__ */ e.jsx("tbody", { className: "bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700", children: oe.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx(
          "td",
          {
            colSpan: s.length,
            className: "text-center py-10 text-gray-500 dark:text-gray-400",
            children: k
          }
        ) }) : oe.map((o, g) => /* @__PURE__ */ e.jsx(
          "tr",
          {
            className: "hover:bg-gray-50 dark:hover:bg-blue-800/10 transition",
            children: s.map((D) => /* @__PURE__ */ e.jsx(
              "td",
              {
                className: `px-6 py-4 text-sm text-gray-900 dark:text-gray-100 min-w-max max-w-[300px] truncate ${xe(D) ? "cursor-pointer" : ""}`,
                title: String(o[D.key] ?? ""),
                onClick: () => me(D, o),
                children: D.render ? D.render(o, g) : ue(D, o, g)
              },
              D.key
            ))
          },
          o.id || g
        )) })
      ] }) }),
      (n == null ? void 0 : n.enabled) && F.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: " bg-gray-50 dark:bg-gray-700/60 px-6 py-3 flex flex-wrap items-center justify-between border-t border-gray-200 dark:border-gray-600 gap-3", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
          "Showing ",
          (C - 1) * A + 1,
          " to",
          " ",
          Math.min(C * A, V),
          " of ",
          V,
          " ",
          "results"
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx("span", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Rows per page:" }),
            /* @__PURE__ */ e.jsx(
              "select",
              {
                value: A,
                onChange: (o) => {
                  const g = Number(o.target.value);
                  U(g), f(1), n.useServerSidePagination && x((D) => ({
                    ...D,
                    current_page: 1,
                    rows_per_page: g
                  }));
                },
                className: "border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500",
                children: [2, 10, 25, 50, 100].map((o) => /* @__PURE__ */ e.jsx("option", { value: o, children: o }, o))
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                onClick: () => {
                  if (C > 1) {
                    const o = C - 1;
                    f(o), n.useServerSidePagination && x((g) => ({
                      ...g,
                      current_page: o
                    }));
                  }
                },
                disabled: C === 1,
                className: "p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition text-gray-500 dark:text-gray-300 disabled:opacity-50",
                children: /* @__PURE__ */ e.jsx(Ue, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ e.jsxs("span", { className: "text-sm text-gray-800 dark:text-gray-200", children: [
              "Page ",
              C,
              " of ",
              ae
            ] }),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                onClick: () => {
                  if (C < ae) {
                    const o = C + 1;
                    f(o), n.useServerSidePagination && x((g) => ({
                      ...g,
                      current_page: o
                    }));
                  }
                },
                disabled: C === ae,
                className: "p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition text-gray-500 dark:text-gray-300 disabled:opacity-50",
                children: /* @__PURE__ */ e.jsx(Ve, { className: "h-4 w-4" })
              }
            )
          ] })
        ] })
      ] })
    ] }),
    h && Je(
      /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: re,
          style: {
            position: "fixed",
            top: `${R.top}px`,
            left: `${R.left}px`,
            zIndex: 9999
          },
          className: "w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg border border-gray-200 dark:border-gray-600",
          children: j.map((o, g) => /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: (D) => L(
                o,
                d.find((H) => H.id === h),
                D
              ),
              className: `w-full flex items-center gap-2 px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-600 ${o.variant === "danger" ? "text-red-600 dark:text-red-500" : "text-gray-700 dark:text-gray-200"}`,
              children: [
                o.icon && /* @__PURE__ */ e.jsx("span", { className: "shrink-0", children: o.icon }),
                o.title
              ]
            },
            g
          ))
        }
      ),
      document.body
    ),
    u && /* @__PURE__ */ e.jsx(
      ia,
      {
        isOpen: B,
        onClose: () => Y(!1),
        config: u,
        onApply: m
      }
    ),
    p && /* @__PURE__ */ e.jsx(
      Ye,
      {
        src: z.src,
        alt: z.alt,
        isOpen: p,
        setIsOpen: _
      }
    )
  ] });
}, ye = ({
  isOpen: c,
  onClose: d,
  icon: s,
  title: i,
  children: l,
  size: r = "md",
  actionButtons: n = [],
  actions: k,
  showDefaultClose: M = !0,
  footerConfig: x = null,
  hideFooter: m = !1,
  onFormSubmit: u = () => {
  },
  onCancel: b,
  loadingBtn: v = !1,
  executeFunction: h = () => {
  },
  selectedItem: N = null
}) => {
  if (!c) return null;
  const j = {
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
        onClick: () => d()
      }
    ),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `relative bg-white rounded-lg shadow-xl w-full ${j[r] || j.md} max-h-[90vh] flex flex-col dark:bg-gray-800`,
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1", children: [
              s && /* @__PURE__ */ e.jsx("span", { children: s }),
              /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-medium text-gray-900 dark:text-white", children: i })
            ] }),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                onClick: () => d(),
                className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
                children: /* @__PURE__ */ e.jsx(je, { className: "w-6 h-6" })
              }
            )
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto p-4", children: l }),
          n.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "px-4 py-3 flex justify-end gap-3 border-t border-gray-200 dark:border-gray-700 sm:px-6", children: n.map((S) => /* @__PURE__ */ e.jsx(
            he,
            {
              onClick: (R) => {
                S.type == "submit" ? u(R) : h(
                  () => {
                    var P;
                    return (P = S == null ? void 0 : S.onClick) == null ? void 0 : P.call(S, R, N);
                  },
                  (P) => d == null ? void 0 : d(P)
                );
              },
              disabled: v || S.disabled,
              variant: S.variant || "contained",
              color: S.color || "primary",
              className: `min-w-[100px] ${S.className}`,
              type: S.type || "button",
              children: v ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center", children: [
                /* @__PURE__ */ e.jsx("div", { className: "animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-2 border-t-white mr-2" }),
                S.label || "Submit",
                "..."
              ] }) : S.label || "Submit"
            }
          )) })
        ]
      }
    )
  ] });
}, Oe = ({ config: c, onSubmit: d, initialData: s = {} }) => {
  var x;
  const { formClass: i = "grid grid-cols-12 gap-4", formFields: l = [] } = c || {}, [r, n] = T(s);
  W(() => {
    n(s);
  }, []);
  const k = (m, u) => {
    n((b) => ({ ...b, [m]: u }));
  }, M = (m) => {
    m.preventDefault();
    const u = m.target;
    if (!u.checkValidity()) {
      u.reportValidity();
      return;
    }
    d(r);
  };
  return /* @__PURE__ */ e.jsx(
    "form",
    {
      id: (x = c.title) != null && x.toLowerCase().includes("edit") ? "editForm" : "addForm",
      onSubmit: M,
      className: i,
      noValidate: !1,
      children: l.map((m) => /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx(
        $e,
        {
          field: m,
          formData: r,
          handleChange: k
        },
        m.key
      ) }))
    }
  );
};
function ua({ data: c, config: d }) {
  const { fields: s, containerClass: i } = d, [l, r] = T(null), [n, k] = T(!1), M = (u) => {
    r(u), k(!0);
  }, x = ({ col: u }) => {
    let b = u == null ? void 0 : u.icon, v = u.label, h = c[u.key], N = u.type, j = u.variant || "outline", S = u.defaultColor;
    if (N == "chip" && u.chipOptions.length > 0) {
      let R = u == null ? void 0 : u.chipOptions.find((P) => P.value == h);
      R && (h = R.label, S = R.color);
    }
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `col-span-12 flex items-center space-x-4 p-4 rounded-xl 
                    bg-gray-100 dark:bg-gray-900 ${u.blockClass}`,
        children: [
          b && /* @__PURE__ */ e.jsx("div", { className: "flex-shrink-0", children: b }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: v }),
            N == "chip" ? /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx(
              Ge,
              {
                label: h,
                variant: j,
                color: S,
                className: "mt-1"
              }
            ) }) : N == "tinyEditor" ? /* @__PURE__ */ e.jsx(
              "p",
              {
                className: "mt-1 text-sm text-gray-900 dark:text-white break-words",
                dangerouslySetInnerHTML: {
                  __html: h
                }
              }
            ) : /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-sm text-gray-900 dark:text-white break-words", children: N == "date" ? /* @__PURE__ */ e.jsx("span", { children: Le(h, u.format || "DD MMM YYYY") }) : h || "N/A" })
          ] })
        ]
      }
    );
  }, m = ({ col: u }) => {
    let b = c[u.titleKey], v = c[u.subtitleKey], h = c[u.imageKey], N = c[u.fallback_icon];
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `col-span-12 flex items-center space-x-4 p-4 rounded-xl 
      bg-gray-100 dark:bg-gray-900 
      ${u.blockClass}`,
        children: [
          h ? /* @__PURE__ */ e.jsx(
            "img",
            {
              src: h,
              alt: b,
              onClick: () => M({ src: h, alt: b }),
              className: "w-16 h-16 cursor-pointer rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
            }
          ) : N || /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600", children: /* @__PURE__ */ e.jsx(De, { className: "w-8 h-8 text-gray-400" }) }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: b }),
            /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: v })
          ] })
        ]
      }
    );
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    n && /* @__PURE__ */ e.jsx(
      Ye,
      {
        src: l.src,
        alt: l.alt,
        isOpen: n,
        setIsOpen: k
      }
    ),
    /* @__PURE__ */ e.jsx("div", { className: `grid grid-cols-12 gap-4 ${i || ""}`, children: s.map(
      (u) => u.type == "group" ? /* @__PURE__ */ e.jsx(m, { col: u }) : /* @__PURE__ */ e.jsx(x, { col: u })
    ) })
  ] });
}
const Ke = ({ config: c }) => {
  var ne, I, J, le, ue, me, xe, o, g, D, H, K, Q, Z, de, be;
  const {
    title: d,
    fetchData: s = async () => {
    },
    isStaticData: i = !1,
    tableConfig: l = {},
    modalConfig: r = {},
    filterConfig: n
  } = c, [k, M] = T(!0), [x, m] = T(!1), [u, b] = T([]), [v, h] = T(null), [N, j] = T({
    search: "",
    rows_per_page: 50,
    current_page: 1
  }), [S, R] = T({}), [P, B] = T(!1), [Y, z] = T(!1), [O, p] = T(!1), [_, F] = T(!1), [C, f] = T(!1), [A, U] = T(null), V = (w, E) => {
    w === "edit" ? (U(E), p(!0)) : w === "view" ? (U(E), f(!0)) : w === "delete" && (U(E), F(!0));
  }, X = async (w, E, $ = "", se = "") => {
    m(!0);
    try {
      const q = await (w == null ? void 0 : w());
      ($ || q.message) && ke($ || q.message, {
        variant: "success"
      }), E == null || E(q);
    } catch (q) {
      (se || q.message) && ke(se || q.message, { variant: "error" });
    } finally {
      m(!1);
    }
  }, ae = (w) => {
    let E = w.newObject;
    i ? (b(($) => [E, ...$]), h(($) => ({
      ...$,
      current_page: 1
    }))) : (j(($) => ({
      ...$,
      current_page: 1
    })), N.current_page == 1 && y()), z(!1);
  }, oe = (w) => {
    let E = w.newObject, $ = w.targetObject;
    i ? b(
      (se) => se.map(
        (q) => q.id === $.id ? { ...q, ...E } : q
      )
    ) : y(), p(!1);
  }, re = (w) => {
    if (!w) {
      F(!1), U(null);
      return;
    }
    i ? b(
      (E) => E.filter(($) => $.id !== w.targetObject.id)
    ) : u.length == 1 && N.current_page > 1 ? j((E) => ({
      ...E,
      current_page: E.current_page - 1
    })) : y(), F(!1), U(null);
  }, ie = (w) => X(
    () => {
      var E, $;
      return ($ = (E = r == null ? void 0 : r.addModal) == null ? void 0 : E.handleSubmit) == null ? void 0 : $.call(E, w);
    },
    ae
  ), t = (w) => X(
    () => {
      var E, $;
      return ($ = (E = r == null ? void 0 : r.editModal) == null ? void 0 : E.handleSubmit) == null ? void 0 : $.call(E, w, A);
    },
    oe
  ), y = async () => {
    M(!0), s == null || s({ ...N, ...S }).then((w) => {
      b(w.data), h(w.pagination);
    }).catch((w) => {
      ke(w.message, { variant: "error" });
    }).finally(() => {
      M(!1);
    });
  }, L = (w) => {
    var E;
    R(($) => ({
      ...w
    })), (E = l == null ? void 0 : l.filter) != null && E.useServerSideFilters && B(($) => !$);
  }, G = (w, E) => w.filter(
    ($) => Object.entries(E).every(([se, q]) => $[se] === q)
  ), te = Se(() => {
    var w;
    return (w = l == null ? void 0 : l.filter) != null && w.useServerSideFilters ? data : G(u, S);
  }, [u, S]);
  return W(() => {
    y();
  }, [
    N.search,
    N.rows_per_page,
    N.current_page,
    P
  ]), /* @__PURE__ */ e.jsx(
    Xe,
    {
      maxSnack: 3,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right"
      },
      autoHideDuration: 3e3,
      action: (w) => /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: () => {
            window.dispatchEvent(
              new CustomEvent("closeSnackbar", { detail: w })
            );
          },
          className: "p-1 hover:bg-white/20 rounded-full transition-colors duration-200 text-white flex items-center justify-center",
          children: /* @__PURE__ */ e.jsx(je, { className: "h-4 w-4" })
        }
      ),
      children: /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6", children: [
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("h1", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: d }),
            /* @__PURE__ */ e.jsx("p", { className: "text-md text-gray-600 dark:text-gray-400 mt-2", children: c == null ? void 0 : c.description })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "flex items-center space-x-3", children: /* @__PURE__ */ e.jsxs(
            he,
            {
              onClick: () => z(!0),
              variant: "contained",
              color: "primary",
              children: [
                /* @__PURE__ */ e.jsx(qe, { className: "w-4 h-4 mr-2" }),
                c.buttonText || "Add New"
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ e.jsx(
          ca,
          {
            config: {
              ...l,
              pagination: {
                ...l.pagination,
                ...v
              },
              data: te,
              setServerSidePaginationData: j,
              onMenuAction: V,
              filterConfig: n,
              onFilterApply: L,
              loading: k
            }
          }
        ),
        /* @__PURE__ */ e.jsx(
          ye,
          {
            isOpen: Y,
            onClose: () => z(!1),
            icon: (ne = r.addModal) == null ? void 0 : ne.icon,
            title: ((I = r.addModal) == null ? void 0 : I.title) || "Add New",
            size: ((J = r.addModal) == null ? void 0 : J.size) || "md",
            onFormSubmit: () => {
              var w;
              return (w = document.querySelector("#addForm")) == null ? void 0 : w.requestSubmit();
            },
            loadingBtn: x,
            actionButtons: r.addModal.actionButtons,
            children: /* @__PURE__ */ e.jsx(
              Oe,
              {
                config: (r == null ? void 0 : r.addModal) || [],
                onSubmit: ie,
                initialData: {},
                loading: x
              }
            )
          }
        ),
        /* @__PURE__ */ e.jsx(
          ye,
          {
            isOpen: O,
            onClose: () => p(!1),
            icon: (le = r.editModal) == null ? void 0 : le.icon,
            title: ((ue = r.editModal) == null ? void 0 : ue.title) || "Edit",
            size: ((me = r.editModal) == null ? void 0 : me.size) || "md",
            onFormSubmit: () => {
              var w;
              return (w = document.querySelector("#editForm")) == null ? void 0 : w.requestSubmit();
            },
            actionButtons: r.editModal.actionButtons,
            loadingBtn: x,
            children: /* @__PURE__ */ e.jsx(
              Oe,
              {
                config: r.editModal || [],
                onSubmit: t,
                initialData: A,
                loading: x
              }
            )
          }
        ),
        _ && /* @__PURE__ */ e.jsx(
          ye,
          {
            isOpen: _,
            onClose: (w) => {
              re(w);
            },
            icon: ((xe = r.deleteModal) == null ? void 0 : xe.icon) || /* @__PURE__ */ e.jsx(Re, { icon: "ph:warning-bold", className: "w-6 h-6 text-red-500" }),
            title: ((o = r.deleteModal) == null ? void 0 : o.title) || "Confirm Delete",
            size: ((g = r.deleteModal) == null ? void 0 : g.size) || "md",
            loading: x,
            actionButtons: r.deleteModal.actionButtons,
            executeFunction: X,
            selectedItem: A,
            children: /* @__PURE__ */ e.jsx("div", { className: "flex items-center space-x-2 py-3", children: /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("p", { className: "text-md text-gray-700 dark:text-white", children: ((D = r.deleteModal) == null ? void 0 : D.confirmText) || "Are you sure you want to delete this item?" }),
              ((H = r.deleteModal) == null ? void 0 : H.referenceKey) && /* @__PURE__ */ e.jsx("p", { className: "text-md font-semibold text-gray-700 dark:text-white", children: A[(K = r.deleteModal) == null ? void 0 : K.referenceKey] })
            ] }) })
          }
        ),
        r.viewModal && /* @__PURE__ */ e.jsx(
          ye,
          {
            isOpen: C,
            onClose: () => {
              f(!1), U(null);
            },
            icon: (Q = r.viewModal) == null ? void 0 : Q.icon,
            title: ((Z = r.viewModal) == null ? void 0 : Z.title) || "View Details",
            size: ((de = r.viewModal) == null ? void 0 : de.size) || "lg",
            footerConfig: r == null ? void 0 : r.viewModal.footer,
            children: (be = r.viewModal) != null && be.component ? /* @__PURE__ */ e.jsx(r.viewModal.component, { data: A }) : /* @__PURE__ */ e.jsx(
              ua,
              {
                data: A,
                config: r.viewModal || {}
              }
            )
          }
        )
      ] })
    }
  );
}, Te = a.shape({
  value: a.oneOfType([
    a.string,
    a.number,
    a.bool
  ]).isRequired,
  label: a.string.isRequired,
  color: a.string
}), we = a.shape({
  type: a.string.isRequired,
  label: a.string.isRequired,
  color: a.string,
  variant: a.string,
  onClick: a.func
}), ha = a.shape({
  title: a.string.isRequired,
  type: a.string.isRequired,
  variant: a.string,
  icon: a.node
}), ba = a.shape({
  key: a.string.isRequired,
  title: a.string,
  type: a.string,
  imageKey: a.string,
  titleKey: a.string,
  subtitleKey: a.string,
  onClickDetails: a.bool,
  variant: a.string,
  chipOptions: a.arrayOf(Te),
  defaultColor: a.string,
  className: a.string,
  format: a.string,
  menuList: a.arrayOf(ha)
}), Ne = a.shape({
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
  options: a.arrayOf(Te)
}), ga = a.shape({
  key: a.string,
  label: a.string,
  type: a.string,
  imageKey: a.string,
  titleKey: a.string,
  subtitleKey: a.string,
  blockClass: a.string,
  icon: a.node,
  variant: a.string,
  chipOptions: a.arrayOf(Te),
  defaultColor: a.string,
  className: a.string,
  format: a.string
});
Ke.propTypes = {
  config: a.shape({
    title: a.string.isRequired,
    description: a.string,
    buttonText: a.string,
    fetchData: a.func.isRequired,
    isStaticData: a.bool,
    /* ================= TABLE CONFIG ================= */
    tableConfig: a.shape({
      table_head: a.arrayOf(ba).isRequired,
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
        formFields: a.arrayOf(Ne),
        handleSubmit: a.func.isRequired,
        actionButtons: a.arrayOf(we)
      }),
      editModal: a.shape({
        title: a.string.isRequired,
        size: a.string,
        formClass: a.string,
        formFields: a.arrayOf(Ne),
        handleSubmit: a.func.isRequired,
        actionButtons: a.arrayOf(we)
      }),
      deleteModal: a.shape({
        title: a.string.isRequired,
        size: a.string,
        confirmText: a.string,
        referenceKey: a.string,
        actionButtons: a.arrayOf(we)
      }),
      viewModal: a.shape({
        title: a.string.isRequired,
        size: a.string,
        // 👇 This covers your commented code:
        component: a.elementType,
        // for custom component like TeamMemberDetail
        fields: a.arrayOf(ga),
        footer: a.shape({
          cancelButton: a.bool,
          cancelText: a.string
        })
      })
    }),
    /* ================= FILTER CONFIG ================= */
    filterConfig: a.shape({
      fields: a.arrayOf(Ne)
    })
  }).isRequired
};
function ka(c) {
  return console.info(c, "props passed"), /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx(Ke, { config: c.config }) });
}
export {
  ka as default
};
//# sourceMappingURL=index.es.js.map
