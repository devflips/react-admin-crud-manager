import { jsx as e, Fragment as E, jsxs as h } from "react/jsx-runtime";
import Oe, { useState as R, useRef as ae, useEffect as z, useMemo as Le } from "react";
import { ChevronDown as Be, Search as Ae, Check as Ve, X as Se, Plus as We, Filter as qe, ChevronLeft as Ze, ChevronRight as Je, EllipsisVertical as Qe, User as Ue, Music as Xe } from "lucide-react";
import { createPortal as ea } from "react-dom";
import { Icon as re } from "@iconify/react";
import { Editor as aa } from "@tinymce/tinymce-react";
import { SnackbarProvider as ta, enqueueSnackbar as Me } from "notistack";
import r from "prop-types";
const je = (u, l = "DD MMM YYYY") => {
  if (!u) return "N/A";
  const i = new Date(u);
  if (isNaN(i)) return "Invalid Date";
  const o = (n) => String(n).padStart(2, "0"), d = {
    YYYY: i.getFullYear(),
    YY: String(i.getFullYear()).slice(-2),
    MMMM: i.toLocaleString("en-US", { month: "long" }),
    MMM: i.toLocaleString("en-US", { month: "short" }),
    MM: o(i.getMonth() + 1),
    M: i.getMonth() + 1,
    DD: o(i.getDate()),
    D: i.getDate(),
    dddd: i.toLocaleString("en-US", { weekday: "long" }),
    ddd: i.toLocaleString("en-US", { weekday: "short" }),
    HH: o(i.getHours()),
    hh: o(i.getHours() % 12 || 12),
    mm: o(i.getMinutes()),
    ss: o(i.getSeconds()),
    A: i.getHours() >= 12 ? "PM" : "AM"
  };
  return l.replace(
    /YYYY|YY|MMMM|MMM|MM|M|DD|D|dddd|ddd|HH|hh|mm|ss|A/g,
    (n) => d[n]
  );
}, ra = (u, l, i = []) => {
  if (!(l != null && l.trim())) return u;
  const o = l.toLowerCase(), d = (n) => n == null ? [] : typeof n == "object" ? Object.values(n).flatMap(d) : [String(n)];
  return u.filter((n) => {
    let b = [];
    return i.length > 0 ? i.forEach((S) => {
      n[S] !== void 0 && b.push(...d(n[S]));
    }) : b = d(n), b.some(
      (S) => S.toLowerCase().includes(o)
    );
  });
}, Q = Oe.forwardRef(
  ({
    className: u = "",
    variant: l = "contained",
    color: i = "default",
    size: o = "default",
    fullWidth: d = !1,
    children: n,
    ...b
  }, S) => {
    var s;
    const O = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", c = {
      sm: "h-8 px-3 rounded-md text-sm",
      md: "h-9 px-4 rounded-md text-sm",
      lg: "h-11 px-6 rounded-md text-base",
      xl: "h-12 px-8 rounded-lg text-lg",
      default: "h-9 px-4 rounded-md text-sm"
    }, m = {
      primary: {
        contained: "bg-primary text-white hover:bg-primary-600 focus:ring-primary-500 shadow-sm",
        outlined: "border border-primary bg-transparent text-primary hover:bg-primary-50 focus:ring-primary-500",
        text: "bg-transparent text-primary hover:bg-primary-50 focus:ring-primary-500"
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
    }, a = ((s = m[i]) == null ? void 0 : s[l]) || m.default.contained, f = c[o], y = `
      ${O} 
      ${a} 
      ${f} 
      ${d ? "w-full" : ""} 
      ${u}
    `.trim();
    return /* @__PURE__ */ e(
      "button",
      {
        ref: S,
        type: b.type || "button",
        className: y,
        ...b,
        children: n
      }
    );
  }
);
Q.displayName = "Button";
function Z({ label: u, required: l = !1 }) {
  return /* @__PURE__ */ e(E, { children: /* @__PURE__ */ h("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: [
    u,
    l && /* @__PURE__ */ e("span", { className: "ml-1", children: "*" })
  ] }) });
}
const na = ({
  options: u = [],
  value: l = "",
  defaultValue: i = "",
  onChange: o,
  placeholder: d = "Select option",
  className: n = "",
  disabled: b = !1,
  search: S = !1,
  label: O = "",
  required: c = !1,
  name: m = "",
  parentClass: a = "",
  multiple: f = !1,
  // ✅ NEW
  dropdownMaxHeight: y = "",
  formData: s = {},
  dependencyKey: w = ""
}) => {
  var _;
  const [x, N] = R(!1), [P, F] = R(""), [M, L] = R(!0), B = ae(null), T = ae(null), [C, j] = R([]);
  let G = l || l === !1 ? l : i;
  const W = (k) => k == null || k === "" ? "" : String(typeof k == "boolean" ? k : k ?? "");
  z(
    () => {
      (async () => {
        if (typeof u == "function") {
          const U = await u(s);
          j(U);
        } else
          j(u || []);
      })();
    },
    w ? [u, s == null ? void 0 : s[w]] : [u]
  );
  const $ = f ? (G || []).map(W) : W(G), H = C.filter(
    (k) => k.label.toLowerCase().includes(P.toLowerCase())
  ), Y = (k) => {
    const U = W(k);
    return f ? $.includes(U) : U === $;
  };
  z(() => {
    const k = (U) => {
      B.current && !B.current.contains(U.target) && (N(!1), F(""));
    };
    return document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, []), z(() => {
    if (x && B.current) {
      const k = B.current.getBoundingClientRect(), X = window.innerHeight - k.bottom;
      L(X < 200);
    }
  }, [x]), z(() => {
    x && T.current && T.current.focus();
  }, [x]);
  const I = (k) => {
    let U = k;
    if (k === "true" ? U = !0 : k === "false" && (U = !1), f) {
      const X = $.includes(W(k));
      let J;
      X ? J = l.filter(
        (ee) => W(ee) !== W(k)
      ) : J = [...l || [], U], o(J);
    } else
      o(U), N(!1);
    F("");
  }, K = f ? C.filter((k) => Y(k.value)).map((k) => k.label).join(", ") : (_ = C.find((k) => Y(k.value))) == null ? void 0 : _.label;
  return z(() => {
    (G || G === !1) && setTimeout(() => {
      o(G);
    }, 100);
  }, []), /* @__PURE__ */ h("div", { className: a || "col-span-12", children: [
    /* @__PURE__ */ e(Z, { label: O, required: c }),
    /* @__PURE__ */ h("div", { className: `relative ${n}`, ref: B, children: [
      /* @__PURE__ */ e(
        "select",
        {
          name: "hidden_select_for_validation",
          value: K || "",
          required: c,
          multiple: f,
          className: "absolute opacity-0 right-1/2 top-[80%] -translate-x-1/2 -translate-y-1/2 pointer-events-none h-[10px]",
          children: /* @__PURE__ */ e("option", { hidden: !0, value: K, children: K })
        }
      ),
      /* @__PURE__ */ h(
        "button",
        {
          type: "button",
          onClick: () => !b && N(!x),
          disabled: b,
          className: `w-full h-10 px-3 border border-gray-300 dark:border-gray-600 rounded-md text-left text-sm flex items-center justify-between 
          ${K ? "dark:text-white" : "text-gray-500 dark:text-gray-400"} 
          ${b ? "opacity-50 cursor-not-allowed" : "dark:bg-gray-700"}`,
          children: [
            /* @__PURE__ */ e("span", { className: "truncate", children: K || d }),
            /* @__PURE__ */ e(
              Be,
              {
                className: `w-4 h-4 transition-transform ${x ? "rotate-180" : ""}`
              }
            )
          ]
        }
      ),
      x && /* @__PURE__ */ h(
        "div",
        {
          className: `absolute z-50 w-full border rounded-md bg-white dark:bg-gray-700 shadow-lg 
            ${M ? "bottom-full mb-1" : "top-full mt-1"}`,
          children: [
            S && /* @__PURE__ */ e("div", { className: "p-2 border-b border-gray-200 dark:border-gray-600", children: /* @__PURE__ */ h("div", { className: "relative", children: [
              /* @__PURE__ */ e(Ae, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }),
              /* @__PURE__ */ e(
                "input",
                {
                  ref: T,
                  type: "text",
                  value: P,
                  onChange: (k) => F(k.target.value),
                  placeholder: "Search...",
                  className: "w-full pl-9 pr-3 py-2 text-sm border rounded-md bg-white dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
                }
              )
            ] }) }),
            /* @__PURE__ */ e(
              "div",
              {
                className: "max-h-40 overflow-y-auto",
                style: {
                  maxHeight: y || ""
                },
                children: H.length > 0 ? H.map((k) => /* @__PURE__ */ h(
                  "button",
                  {
                    type: "button",
                    onClick: () => I(String(k.value)),
                    className: `w-full px-3 py-2 text-left text-sm flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 
                    ${Y(k.value) ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300" : ""}`,
                    children: [
                      /* @__PURE__ */ e("span", { children: k.label }),
                      f && Y(k.value) && /* @__PURE__ */ e(Ve, { className: "w-4 h-4" })
                    ]
                  },
                  String(k.value)
                )) : /* @__PURE__ */ e("div", { className: "px-3 py-2 text-sm text-gray-500 dark:text-gray-400", children: "No options found" })
              }
            )
          ]
        }
      )
    ] })
  ] }, m);
}, la = ({
  value: u = !0,
  onChange: l,
  text: i,
  options: o = [],
  label: d,
  required: n,
  name: b = "",
  disabled: S = !1,
  parentClass: O = ""
}) => {
  const c = o.length > 0 ? o : [
    { label: "Active", value: !0 },
    { label: "Inactive", value: !1 }
  ];
  return /* @__PURE__ */ e(E, { children: /* @__PURE__ */ h("div", { className: O || "col-span-12", children: [
    /* @__PURE__ */ e(Z, { label: d, required: n }),
    /* @__PURE__ */ h("div", { className: "flex items-center justify-between h-10 gap-4 bg-gray-100 dark:bg-gray-700 px-3 rounded-md border border-gray-100 dark:border-gray-600", children: [
      i && /* @__PURE__ */ e("p", { className: "text-xs text-gray-600 dark:text-gray-400 flex-shrink overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px]", children: i }),
      /* @__PURE__ */ e("div", { className: "flex items-center gap-6", children: c.map((m, a) => /* @__PURE__ */ h(
        "label",
        {
          className: "flex items-center gap-2 cursor-pointer select-none",
          children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "radio",
                name: "switch-field",
                required: n && a === 0,
                value: m.value,
                disabled: S,
                checked: u === m.value,
                onChange: () => l(m.value),
                className: "w-4 h-4  border-gray-300 cursor-pointer"
              }
            ),
            /* @__PURE__ */ e("span", { className: "text-sm text-gray-700 dark:text-white", children: m.label })
          ]
        },
        a
      )) })
    ] })
  ] }, b) });
}, ke = [
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
function oa({
  label: u = "",
  value: l = "",
  name: i = "",
  parentClass: o = "",
  onChange: d,
  disabled: n = !1,
  required: b = !1,
  placeholder: S = "Phone number",
  search: O = !1,
  countriesList: c = !1,
  defaultCountry: m = ""
}) {
  const a = (C) => ke.find((j) => j.code == C), [f, y] = R(
    a(m) || ke[0]
  ), [s, w] = R(""), [x, N] = R(!1), [P, F] = R(""), M = ae();
  z(() => {
    if (typeof l == "string" && l.startsWith("+")) {
      const C = ke.filter((j) => l.startsWith("+" + j.phone)).sort((j, G) => G.phone.length - j.phone.length)[0];
      if (C) {
        y(C), w(l.replace("+" + C.phone, ""));
        return;
      }
    }
    w(l);
  }, [l]);
  const L = (C) => {
    const j = C.target.value.replace(/\D/g, "");
    w(j), f && d && d("+" + f.phone + j);
  }, B = (C) => {
    y(C), d && d("+" + C.phone + s), N(!1), F("");
  };
  z(() => {
    const C = (j) => {
      M.current && !M.current.contains(j.target) && N(!1);
    };
    return document.addEventListener("mousedown", C), () => document.removeEventListener("mousedown", C);
  }, []);
  const T = ke.filter(
    (C) => C.label.toLowerCase().includes(P.toLowerCase()) || C.phone.includes(P)
  );
  return c ? /* @__PURE__ */ e(E, { children: /* @__PURE__ */ h("div", { className: o || "col-span-12", children: [
    /* @__PURE__ */ e(Z, { label: u, required: b }),
    /* @__PURE__ */ h("div", { className: "relative ", ref: M, children: [
      /* @__PURE__ */ h(
        "div",
        {
          className: `h-[40px] flex items-center border rounded-md px-2 bg-white dark:bg-gray-700 transition-all
  ${x ? "ring-0.5 ring-blue-100 border-blue-300" : "border-gray-300 dark:border-gray-600"}
  ${n ? "opacity-60 cursor-not-allowed" : ""}`,
          children: [
            /* @__PURE__ */ h(
              "button",
              {
                type: "button",
                disabled: n,
                onClick: () => N(!x),
                className: "flex items-center gap-1 pr-2 border-r border-gray-300 dark:border-gray-700 focus:outline-none",
                children: [
                  f ? /* @__PURE__ */ e(
                    "img",
                    {
                      src: `https://flagcdn.com/w20/${f.code.toLowerCase()}.png`,
                      alt: f.code,
                      className: "w-5 h-3 object-cover"
                    }
                  ) : /* @__PURE__ */ e("span", { className: "text-gray-400 text-xs", children: "🌐" }),
                  /* @__PURE__ */ e(Be, { className: "w-3 h-3 text-gray-500" })
                ]
              }
            ),
            f && /* @__PURE__ */ h("span", { className: "ml-2 text-sm text-gray-700 dark:text-gray-200 whitespace-nowrap", children: [
              "+",
              f.phone
            ] }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "tel",
                value: s,
                onChange: L,
                required: b,
                disabled: n || !f,
                placeholder: f ? S : "Select a country",
                className: "flex-1 ml-2 bg-transparent outline-none text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400"
              }
            ),
            /* @__PURE__ */ e(
              "input",
              {
                type: "tel",
                required: b,
                tabIndex: -1,
                readOnly: !0,
                value: f && s ? "+" + f.phone + s : "",
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
      x && /* @__PURE__ */ h("div", { className: "absolute top-full left-0 w-full mt-1 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 shadow-lg z-50 max-h-60 overflow-y-auto", children: [
        O && /* @__PURE__ */ e("div", { className: "p-2 border-b border-gray-200 dark:border-gray-700", children: /* @__PURE__ */ h("div", { className: "relative", children: [
          /* @__PURE__ */ e(Ae, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" }),
          /* @__PURE__ */ e(
            "input",
            {
              type: "text",
              value: P,
              onChange: (C) => F(C.target.value),
              placeholder: "Search country...",
              className: "w-full pl-9 pr-3 py-2 text-sm border rounded-md bg-white dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none "
            }
          )
        ] }) }),
        T.map((C) => /* @__PURE__ */ h(
          "button",
          {
            type: "button",
            onClick: () => B(C),
            className: "w-full flex items-center gap-2 px-2 py-1 text-sm hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100",
            children: [
              /* @__PURE__ */ e(
                "img",
                {
                  src: `https://flagcdn.com/w20/${C.code.toLowerCase()}.png`,
                  alt: C.code,
                  className: "w-5 h-3 object-cover"
                }
              ),
              /* @__PURE__ */ h("span", { children: [
                C.label,
                " (+",
                C.phone,
                ")"
              ] })
            ]
          },
          C.code
        ))
      ] })
    ] })
  ] }, i) }) : /* @__PURE__ */ e(E, { children: /* @__PURE__ */ h("div", { className: o || "col-span-12", children: [
    /* @__PURE__ */ e(Z, { label: u, required: b }),
    /* @__PURE__ */ e(
      "input",
      {
        type: "text",
        value: l,
        onChange: (j) => {
          const G = j.target.value.replace(/[^+\d]/g, ""), W = G.startsWith("+") ? "+" + G.replace(/[+]/g, "").slice(0) : G;
          d(W);
        },
        placeholder: S,
        disabled: n,
        required: b,
        className: `w-full h-10 px-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md \r
        bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none \r
        focus:ring-1 focus:ring-blue-300 dark:focus:ring-blue-200`,
        inputMode: "tel",
        pattern: "^\\+\\d{1,15}$"
      }
    )
  ] }, i) });
}
const Ee = Oe.forwardRef(
  ({ className: u = "", label: l, required: i, ...o }, d) => {
    const n = `
      placeholder-gray-400 dark:placeholder-gray-400
      ${u}
    `.trim();
    return /* @__PURE__ */ e(E, { children: /* @__PURE__ */ h("div", { className: o.parentClass || "col-span-12", children: [
      /* @__PURE__ */ e(Z, { label: l, required: i }),
      /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ e(
        "textarea",
        {
          className: n,
          ref: d,
          required: i,
          ...o
        }
      ) })
    ] }, o.name) });
  }
);
Ee.displayName = "TextArea";
const ia = ({
  label: u = "",
  value: l = null,
  onChange: i,
  required: o = !1,
  accept: d = "image/*",
  id: n,
  dragDrop: b = !1,
  name: S = "",
  parentClass: O = ""
}) => {
  const [c, m] = R(l), [a, f] = R(!1), y = ae(null);
  z(() => (l instanceof File ? m({ file: l, preview: URL.createObjectURL(l) }) : (l != null && l.preview, m(l)), () => {
    c != null && c.preview && c.preview.startsWith("blob:") && URL.revokeObjectURL(c.preview);
  }), [l]);
  const s = (M) => {
    if (!M || M.length === 0)
      return;
    const L = M[0], B = URL.createObjectURL(L), T = { file: L, preview: B };
    c != null && c.preview && c.preview.startsWith("blob:") && URL.revokeObjectURL(c.preview), m(T), i == null || i(L);
  }, w = (M) => {
    M && M.stopPropagation(), c != null && c.preview && c.preview.startsWith("blob:") && URL.revokeObjectURL(c.preview), m(null), i == null || i(null), y.current && (y.current.value = "");
  }, x = (M) => {
    b && (M.preventDefault(), f(!0));
  }, N = (M) => {
    b && (M.preventDefault(), f(!1));
  }, P = (M) => {
    b && (M.preventDefault(), f(!1), s(M.dataTransfer.files));
  }, F = () => {
    y.current.click();
  };
  return /* @__PURE__ */ e(E, { children: /* @__PURE__ */ h("div", { className: O || "col-span-12", children: [
    /* @__PURE__ */ e(Z, { label: u, required: o }),
    /* @__PURE__ */ h(
      "div",
      {
        className: `relative rounded-md p-2 transition-all ${a ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"}`,
        onDragOver: x,
        onDragLeave: N,
        onDrop: P,
        children: [
          /* @__PURE__ */ e(
            "input",
            {
              ref: y,
              id: n,
              type: "file",
              accept: d,
              onChange: (M) => s(M.target.files),
              required: o && !c,
              className: "absolute opacity-0 right-[50%] top-[80%] -translate-y-1/2 pointer-events-none h-[10px]"
            }
          ),
          /* @__PURE__ */ h(
            "div",
            {
              className: `flex items-center space-x-4 transition-all ${a ? "opacity-50" : ""}`,
              children: [
                c ? (
                  // Image preview with close button
                  /* @__PURE__ */ h("div", { className: "relative group", children: [
                    /* @__PURE__ */ e(
                      "img",
                      {
                        src: c.preview || c,
                        alt: "preview",
                        className: "object-cover w-20 h-20 rounded-full shadow-md"
                      }
                    ),
                    !o && /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        onClick: w,
                        className: "absolute top-0 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
                        "aria-label": "Remove image",
                        children: /* @__PURE__ */ e(re, { icon: "mdi:close", className: "w-3 h-3" })
                      }
                    )
                  ] })
                ) : (
                  // Placeholder icon
                  /* @__PURE__ */ e("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ e(
                    re,
                    {
                      icon: "ri:image-add-fill",
                      className: "text-gray-400 w-10 h-10"
                    }
                  ) })
                ),
                /* @__PURE__ */ h("div", { className: "flex flex-col items-center space-y-1", children: [
                  /* @__PURE__ */ e(
                    Q,
                    {
                      type: "button",
                      onClick: F,
                      variant: "outlined",
                      color: "default",
                      children: c ? "Change Image" : "Select Image"
                    }
                  ),
                  b && !c && /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop" })
                ] })
              ]
            }
          ),
          b && a && /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-md", children: /* @__PURE__ */ e("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg", children: "Drop image here" }) })
        ]
      }
    )
  ] }, S) });
}, $e = Oe.forwardRef(
  ({
    label: u,
    required: l,
    parentClass: i = "",
    className: o = "",
    type: d = "text",
    onKeyDown: n,
    negativeNumberAllow: b = !0,
    defaultValue: S = "",
    ...O
  }, c) => {
    const [m, a] = R(!1), f = (s) => {
      if (d === "number") {
        if (["e", "E", "+"].includes(s.key)) {
          s.preventDefault();
          return;
        }
        if (b == !1 && s.key === "-") {
          s.preventDefault();
          return;
        }
        if (["ArrowUp", "ArrowDown"].includes(s.key)) {
          s.preventDefault();
          return;
        }
      }
      n == null || n(s);
    }, y = `
      h-10 placeholder-gray-400 dark:placeholder-gray-400
      ${d === "password" ? "pr-10" : ""}
      ${d === "number" ? "no-spinner" : ""}
      ${o}
    `.trim();
    return z(() => {
      if (S) {
        let s = O.value || S;
        setTimeout(() => {
          var w;
          (w = O.onChange) == null || w.call(O, { target: { value: s } });
        }, 100);
      }
    }, [S]), /* @__PURE__ */ e(E, { children: /* @__PURE__ */ h("div", { className: i || "col-span-12", children: [
      /* @__PURE__ */ e(Z, { label: u, required: l }),
      /* @__PURE__ */ h("div", { className: "relative", children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: d === "password" && m ? "text" : d,
            ref: c,
            required: l,
            onKeyDown: f,
            className: y,
            ...O
          }
        ),
        d === "password" && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            tabIndex: -1,
            onClick: () => a((s) => !s),
            className: "absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200",
            children: /* @__PURE__ */ e(
              re,
              {
                icon: m ? "mdi:eye-outline" : "mdi:eye-off-outline",
                className: "w-5 h-5"
              }
            )
          }
        )
      ] })
    ] }, O.name) });
  }
);
$e.displayName = "Input";
const sa = ({
  key: u,
  editorKey: l = "",
  value: i = "",
  onChange: o,
  label: d = "",
  required: n = !1,
  placeholder: b = "",
  parentClass: S = "col-span-12",
  height: O = 400,
  inline: c = !1,
  disabled: m = !1,
  plugins: a,
  toolbar: f,
  menubar: y = !1,
  fontFamily: s = "Inter, sans-serif",
  initConfig: w = {},
  imageUploadHandler: x
  // ✅ Promise function passed from parent
}) => /* @__PURE__ */ h("div", { className: S, children: [
  d && /* @__PURE__ */ e(Z, { label: d, required: n }),
  /* @__PURE__ */ e(
    aa,
    {
      apiKey: l,
      value: i,
      disabled: m,
      init: {
        height: O,
        inline: c,
        menubar: y,
        branding: !1,
        statusbar: !0,
        automatic_uploads: !0,
        images_upload_handler: (M) => new Promise((L, B) => {
          if (!x) {
            L(`data:${M.blob().type};base64,${M.base64()}`);
            return;
          }
          x(M).then((T) => {
            T ? L(T) : B("Upload failed: No URL returned");
          }).catch((T) => {
            B(
              typeof T == "string" ? T : (T == null ? void 0 : T.message) || "Image upload failed"
            );
          });
        }),
        plugins: a ?? [
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
        ],
        toolbar: f ?? "undo redo | blocks | bold italic underline forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media table | removeformat | code fullscreen preview",
        placeholder: b,
        content_style: `
            body {
                font-family: ${s};
            }
            `,
        ...w
      },
      onEditorChange: (M) => {
        o && o(M);
      }
    }
  )
] }, u), da = ({
  name: u = "",
  label: l = "",
  // label for single checkbox
  options: i = [],
  // array of { label, value } for multiple
  value: o = null,
  // boolean for single, array for multiple, or string for single select
  onChange: d,
  disabled: n = !1,
  required: b = !1,
  parentClass: S = "col-span-12",
  className: O = "",
  multiSelect: c = !1
  // ✅ if true, only one option can be selected (like radio)
}) => {
  const m = Array.isArray(i) && i.length > 0, a = (s) => m ? c ? Array.isArray(o) && o.includes(s) : o === s : !!o, f = (s) => {
    d == null || d(s.target.checked, u);
  }, y = (s, w) => {
    if (d)
      if (!c)
        d(w ? s : "", u);
      else {
        const x = Array.isArray(o) ? [...o] : [];
        if (w)
          x.includes(s) || x.push(s);
        else {
          const N = x.indexOf(s);
          N > -1 && x.splice(N, 1);
        }
        d(x, u);
      }
  };
  return m ? /* @__PURE__ */ e(E, { children: /* @__PURE__ */ h("div", { className: `${S}`, children: [
    /* @__PURE__ */ e(Z, { label: l, required: b }),
    /* @__PURE__ */ e("div", { className: "flex flex-col space-y-2", children: i.map((s, w) => /* @__PURE__ */ h("div", { className: "flex items-center", children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          name: u,
          value: s.value,
          checked: a(s.value),
          disabled: n || s.disabled,
          required: b && w === 0,
          onChange: (x) => y(s.value, x.target.checked),
          className: `h-4 w-4 cursor-pointer text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${O}`
        },
        u
      ),
      s.label && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: u,
          className: "ml-2 text-sm text-gray-700 dark:text-gray-200 select-none",
          children: s.label
        }
      )
    ] }, s.value || s.label)) })
  ] }) }) : /* @__PURE__ */ h("div", { className: `flex items-center ${S}`, children: [
    /* @__PURE__ */ e(
      "input",
      {
        type: "checkbox",
        name: u,
        checked: a(),
        disabled: n,
        required: b,
        onChange: f,
        className: `h-4 w-4 text-blue-600 cursor-pointer border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${O}`
      }
    ),
    l && /* @__PURE__ */ e(
      "label",
      {
        htmlFor: u,
        className: "ml-2 text-sm text-gray-700 dark:text-gray-200 select-none",
        children: l
      }
    )
  ] });
}, ca = ({
  label: u = "",
  value: l = null,
  onChange: i,
  required: o = !1,
  accept: d = "audio/*",
  id: n,
  dragDrop: b = !1,
  name: S = "",
  parentClass: O = ""
}) => {
  const [c, m] = R(null), [a, f] = R(!1), y = ae(null);
  z(() => {
    if (!l) {
      s(), m(null);
      return;
    }
    if (l instanceof File) {
      const L = URL.createObjectURL(l);
      return m({ file: l, preview: L }), () => {
        URL.revokeObjectURL(L);
      };
    } else typeof l == "string" ? m({ preview: l }) : l != null && l.preview && m(l);
  }, [l]);
  const s = () => {
    c != null && c.preview && c.preview.startsWith("blob:") && URL.revokeObjectURL(c.preview);
  }, w = (L) => {
    if (!L || L.length === 0)
      return;
    const B = L[0], T = URL.createObjectURL(B);
    s(), m({ file: B, preview: T }), i == null || i(B);
  }, x = (L) => {
    L && L.stopPropagation(), s(), m(null), i == null || i(null), y.current && (y.current.value = "");
  }, N = (L) => {
    b && (L.preventDefault(), f(!0));
  }, P = (L) => {
    b && (L.preventDefault(), f(!1));
  }, F = (L) => {
    b && (L.preventDefault(), f(!1), w(L.dataTransfer.files));
  }, M = () => {
    y.current.click();
  };
  return /* @__PURE__ */ h("div", { className: O || "col-span-12", children: [
    /* @__PURE__ */ e(Z, { label: u, required: o }),
    /* @__PURE__ */ h(
      "div",
      {
        className: `relative rounded-lg p-2 transition-all ${a ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"}`,
        onDragOver: N,
        onDragLeave: P,
        onDrop: F,
        children: [
          /* @__PURE__ */ e(
            "input",
            {
              ref: y,
              id: n,
              type: "file",
              accept: d,
              onChange: (L) => w(L.target.files),
              required: o && !c,
              className: "absolute opacity-0 right-[50%] top-[80%] -translate-y-1/2 pointer-events-none h-[10px]"
            }
          ),
          /* @__PURE__ */ e(
            "div",
            {
              className: `flex items-center space-x-4 transition-all ${a ? "opacity-50" : ""}`,
              children: c ? (
                // Audio player with close button and change button
                /* @__PURE__ */ h("div", { className: "flex items-center space-x-4", children: [
                  /* @__PURE__ */ h("div", { className: "relative w-full", children: [
                    !o && /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        onClick: x,
                        className: "absolute top-0 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800",
                        "aria-label": "Remove audio",
                        children: /* @__PURE__ */ e(re, { icon: "mdi:close", className: "w-3 h-3" })
                      }
                    ),
                    /* @__PURE__ */ e(
                      "audio",
                      {
                        src: c.preview,
                        controls: !0,
                        controlsList: "nodownload"
                      },
                      c.preview
                    )
                  ] }),
                  /* @__PURE__ */ e(Q, { type: "button", onClick: M, children: /* @__PURE__ */ e("span", { children: "Change Audio File" }) })
                ] })
              ) : (
                // Empty state with upload button
                /* @__PURE__ */ h("div", { className: "flex items-center justify-center space-x-4", children: [
                  /* @__PURE__ */ e("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ e(re, { icon: "mdi:music", className: "text-gray-400 w-10 h-10" }) }),
                  /* @__PURE__ */ e(
                    Q,
                    {
                      type: "button",
                      onClick: M,
                      variant: "outlined",
                      children: /* @__PURE__ */ e("span", { children: "Choose Audio File" })
                    }
                  ),
                  b && /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop your audio file here" })
                ] })
              )
            }
          ),
          b && a && !c && /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-lg", children: /* @__PURE__ */ e("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg", children: "Drop audio here" }) })
        ]
      }
    )
  ] }, S);
}, Ge = ({ field: u, formData: l, handleChange: i }) => {
  const {
    key: o,
    label: d,
    type: n,
    options: b,
    placeholder: S,
    rows: O,
    inputClass: c,
    search: m,
    accept: a,
    text: f,
    required: y = !1,
    minLength: s,
    dragDrop: w,
    parentClass: x,
    countriesList: N,
    defaultCountry: P,
    multiple: F,
    dropdownMaxHeight: M,
    editorKey: L,
    fontFamily: B,
    disabled: T,
    negativeNumberAllow: C,
    defaultValue: j,
    renderCondition: G,
    optionDependencyKey: W
  } = u;
  let $ = l == null ? void 0 : l[o];
  $ == null && ($ = "");
  const H = S || (n === "select" ? `Select ${d}` : `Enter ${d}`), Y = "w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm focus:outline-none focus:ring-1 focus:ring-blue-200 bg-white text-black dark:bg-gray-700 dark:text-white";
  if (G && typeof G == "function" && !G(l))
    return null;
  switch (n) {
    case "select":
      return /* @__PURE__ */ e(
        na,
        {
          options: b || [],
          value: $,
          formData: l,
          dependencyKey: W,
          onChange: (I) => i(o, I),
          placeholder: H,
          className: c || "",
          search: m,
          required: y,
          defaultValue: j,
          label: d,
          name: o,
          disabled: T,
          parentClass: x,
          multiple: F,
          dropdownMaxHeight: M
        }
      );
    case "checkbox":
      return /* @__PURE__ */ e(
        da,
        {
          name: o,
          label: d,
          options: b || [],
          value: $,
          onChange: (I) => i(o, I),
          required: y,
          parentClass: x,
          className: c || "",
          multiSelect: F,
          disabled: T
        }
      );
    case "switch":
      return /* @__PURE__ */ e(
        la,
        {
          value: $,
          onChange: (I) => i(o, I),
          text: f,
          options: b || [],
          label: d,
          required: y,
          name: o,
          disabled: T,
          parentClass: x
        }
      );
    case "phone":
      return /* @__PURE__ */ e(
        oa,
        {
          value: $,
          onChange: (I) => i(o, I),
          countriesList: N,
          defaultCountry: P,
          required: y,
          placeholder: H,
          search: m,
          label: d,
          name: o,
          disabled: T,
          parentClass: x
        }
      );
    case "textarea":
      return /* @__PURE__ */ e(
        Ee,
        {
          value: $,
          onChange: (I) => i(o, I.target.value),
          placeholder: H,
          rows: O || 3,
          className: `${Y} ${c || ""}`,
          required: y,
          name: o,
          label: d,
          disabled: T,
          parentClass: x
        }
      );
    case "image":
      return /* @__PURE__ */ e(
        ia,
        {
          value: $,
          onChange: (I) => i(o, I),
          required: y,
          accept: a || "image/*",
          id: `file-${o}`,
          dragDrop: w,
          label: d,
          name: o,
          parentClass: x
        }
      );
    case "audio":
      return /* @__PURE__ */ e(
        ca,
        {
          value: $,
          onChange: (I) => i(o, I),
          required: y,
          accept: a || "audio/*",
          id: `file-${o}`,
          dragDrop: w,
          label: d,
          name: o,
          parentClass: x
        }
      );
    case "tinyEditor":
      return /* @__PURE__ */ e(
        sa,
        {
          value: $,
          onChange: (I) => i(o, I),
          required: y,
          placeholder: H,
          label: d,
          parentClass: x,
          fontFamily: B,
          editorKey: L,
          disabled: T
        },
        `editor-${o}`
      );
    default:
      return /* @__PURE__ */ e(
        $e,
        {
          type: n || "text",
          defaultValue: j,
          value: $,
          onChange: (I) => i(o, I.target.value),
          placeholder: H,
          className: `${Y} ${c || ""}`,
          required: y,
          name: o,
          minLength: s,
          label: d,
          negativeNumberAllow: C,
          parentClass: x,
          disabled: T
        }
      );
  }
}, ha = ({ isOpen: u, onClose: l, config: i, onApply: o }) => {
  var c;
  const [d, n] = R({}), b = (m, a) => {
    n((f) => ({ ...f, [m]: a }));
  }, S = () => {
    o == null || o(d), l();
  }, O = () => {
    n({}), o == null || o({}), l();
  };
  return /* @__PURE__ */ h(E, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: `fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${u ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
        onClick: l
      }
    ),
    /* @__PURE__ */ h(
      "div",
      {
        className: `fixed top-0 right-0 h-full w-[28rem] bg-white dark:bg-gray-900 shadow-2xl z-50 flex flex-col border-l border-gray-200 dark:border-gray-700
          transform transition-transform duration-300 ease-in-out
          ${u ? "translate-x-0" : "translate-x-full"}
        `,
        children: [
          /* @__PURE__ */ h("div", { className: "flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700", children: [
            /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: "Filters" }),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: l,
                className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition",
                children: /* @__PURE__ */ e(Se, { className: "w-5 h-5 text-gray-500 dark:text-gray-400" })
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 py-3", children: i != null && i.component ? /* @__PURE__ */ e(i.component, { filters: d, onFilterChange: b }) : /* @__PURE__ */ e("div", { className: "space-y-4", children: (c = i == null ? void 0 : i.fields) == null ? void 0 : c.map((m) => /* @__PURE__ */ e(E, { children: /* @__PURE__ */ e(
            Ge,
            {
              field: m,
              formData: d,
              handleChange: b
            },
            m.key
          ) })) }) }),
          /* @__PURE__ */ h("div", { className: "flex gap-2 px-4 py-3 border-t border-gray-200 dark:border-gray-700", children: [
            /* @__PURE__ */ e(
              Q,
              {
                onClick: S,
                variant: "contained",
                color: "primary",
                fullWidth: !0,
                children: "Apply Filters"
              }
            ),
            /* @__PURE__ */ e(
              Q,
              {
                onClick: O,
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
}, Fe = {
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
}, Ke = ({
  label: u,
  variant: l = "contained",
  // contained | outline | soft
  color: i = "green",
  className: o = ""
}) => {
  const d = Fe[i] || Fe.green, n = Pe[l] || Pe.contained, b = l === "outline" ? d.border : d.bg;
  return /* @__PURE__ */ e(
    "span",
    {
      className: `inline-flex justify-center items-center rounded-sm text-xs font-semibold px-3 py-1 min-w-[78px]
        ${b}
        ${n}
        ${o}`,
      children: u
    }
  );
}, ua = ({ rows: u = 5, columns: l = 5 }) => /* @__PURE__ */ h(E, { children: [
  /* @__PURE__ */ e("div", { className: "w-full mb-6 inline-flex justify-end items-center", children: /* @__PURE__ */ e("div", { className: "h-8 w-80 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }),
  /* @__PURE__ */ e("div", { className: "overflow-hidden rounded-md border border-gray-200 dark:border-gray-800", children: /* @__PURE__ */ h("table", { className: "w-full border-collapse", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { className: "bg-gray-50 dark:bg-gray-900", children: Array.from({ length: l }).map((i, o) => /* @__PURE__ */ e("th", { className: "px-4 py-3", children: /* @__PURE__ */ e("div", { className: "h-6 w-24 bg-gray-300 dark:bg-gray-700 rounded animate-pulse  inline-flex justify-center items-center" }) }, o)) }) }),
    /* @__PURE__ */ e("tbody", { children: Array.from({ length: u }).map((i, o) => /* @__PURE__ */ e(
      "tr",
      {
        className: "border-t border-gray-200 dark:border-gray-800",
        children: Array.from({ length: l }).map((d, n) => /* @__PURE__ */ e("td", { className: "px-4 py-6", children: /* @__PURE__ */ e("div", { className: "h-6 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }, n))
      },
      o
    )) })
  ] }) })
] }), _e = ({ src: u, alt: l = "preview", isOpen: i, setIsOpen: o }) => {
  const d = () => o(!1);
  return z(() => {
    const n = (b) => {
      b.key === "Escape" && d();
    };
    return i && (document.body.style.overflow = "hidden", document.addEventListener("keydown", n)), () => {
      document.body.style.overflow = "", document.removeEventListener("keydown", n);
    };
  }, [i]), /* @__PURE__ */ e(E, { children: /* @__PURE__ */ h(
    "div",
    {
      className: `fixed inset-0 z-50 flex items-center justify-center bg-black/70 dark:bg-black/80 \r
                   backdrop-blur-sm animate-in fade-in duration-200`,
      onClick: d,
      children: [
        /* @__PURE__ */ e(
          "button",
          {
            onClick: d,
            className: `absolute top-4 right-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200\r
                     hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-2 shadow-lg transition`,
            children: /* @__PURE__ */ e(Se, { size: 20 })
          }
        ),
        /* @__PURE__ */ e(
          "div",
          {
            className: "max-w-5xl w-full px-4 transform transition-all duration-200 scale-95 animate-in zoom-in-95",
            onClick: (n) => n.stopPropagation(),
            children: /* @__PURE__ */ e(
              "img",
              {
                src: u,
                alt: l,
                className: "w-full max-h-[90vh] object-contain rounded-xl"
              }
            )
          }
        )
      ]
    }
  ) });
}, ba = ({
  config: u,
  setShowAdd: l,
  title: i,
  buttonText: o,
  description: d,
  showAddButton: n
}) => {
  const {
    data: b = [],
    table_head: S = [],
    loading: O = !1,
    search: c = {
      enabled: !1,
      placeholder: "Search...",
      useServerSideSearch: !1
    },
    filter: m = {
      enabled: !1,
      useServerSideFilters: !1
    },
    pagination: a = {
      enabled: !1,
      rows_per_page: 10,
      useServerSidePagination: !1
    },
    emptyMessage: f = "No data available",
    onMenuAction: y,
    setServerSidePaginationData: s = () => {
    },
    onFilterApply: w,
    filterConfig: x = null,
    rowClick: N = null
  } = u, [P, F] = R(""), [M, L] = R(null), [B, T] = R([]), [C, j] = R({}), [G, W] = R(!1), [$, H] = R(null), [Y, I] = R(!1), K = Le(() => !c.enabled || !P.trim() || c.useServerSideSearch ? b : ra(b, P, c.searchKeys || []), [b, P, c]), [_, k] = R(1), [U, X] = R((a == null ? void 0 : a.rows_per_page) || 50), [J, ee] = R(K.length || 0), ne = a != null && a.useServerSidePagination ? a.total_pages : Math.ceil(K.length / U), ce = Le(() => {
    if (a.useServerSidePagination) return K;
    const t = (_ - 1) * U;
    return K.slice(t, t + U);
  }, [K, _, U]), le = ae(null), oe = ae({}), te = ae(null), he = (t) => {
    F(t), k(1), c.useServerSideSearch && (te.current && clearTimeout(te.current), te.current = setTimeout(async () => {
      try {
        await s((g) => ({
          ...g,
          search: t,
          current_page: 1
        }));
      } catch (g) {
        console.error("Search error:", g);
      }
    }, 800));
  }, ue = (t, g, D) => {
    D.stopPropagation(), L(null), y == null || y(t.type, g);
  }, be = (t, g, D) => {
    g.stopPropagation(), T(D);
    const p = g.currentTarget;
    oe.current[t] = p;
    const v = p.getBoundingClientRect(), A = 192, q = D.length * 40, V = window.innerWidth, Te = window.innerHeight, He = V - v.right < A ? v.left - A + v.width : v.left, Ye = Te - v.bottom < q && v.top > q ? v.top - q - 2 : v.bottom + 2;
    j({
      top: Math.max(8, Math.min(Ye, Te - q - 8)),
      left: Math.max(8, Math.min(He, V - A - 8))
    }), L(M === t ? null : t);
  }, pe = (t) => (_ - 1) * U + t + 1, ge = (t) => {
    t && t.src instanceof File && (t = { ...t, src: URL.createObjectURL(t.src) }), H(t), I(!0);
  }, ie = (t, g, D, p = null, v = null) => /* @__PURE__ */ e(E, { children: t ? /* @__PURE__ */ e(
    "img",
    {
      src: t instanceof File ? URL.createObjectURL(t) : t,
      alt: g || "Avatar",
      onClick: (A) => {
        A.stopPropagation(), A.preventDefault(), ge({ src: t, alt: g });
      },
      className: `w-10 h-10 cursor-pointer shrink-0 rounded-full object-cover border border-gray-200 dark:border-gray-700 ${D || ""}`
    }
  ) : /* @__PURE__ */ e(E, { children: p ? typeof p == "function" ? p(v) : p : /* @__PURE__ */ e(
    "div",
    {
      className: `w-10 h-10 flex items-center shrink-0 justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${D || ""}`,
      children: /* @__PURE__ */ e(Ue, { className: "w-6 h-6 text-gray-400 dark:text-gray-400" })
    }
  ) }) }), me = (t, g) => /* @__PURE__ */ e(E, { children: t ? /* @__PURE__ */ e(
    "audio",
    {
      controls: !0,
      src: t instanceof File ? URL.createObjectURL(t) : t,
      onClick: (D) => {
        D.stopPropagation();
      },
      className: `w-64 cursor-pointer ${g || ""}`
    },
    t instanceof File ? URL.createObjectURL(t) : t
  ) : /* @__PURE__ */ e(E, { children: /* @__PURE__ */ e(
    "div",
    {
      className: `w-12 h-12 flex items-center shrink-0 justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${g || ""}`,
      children: /* @__PURE__ */ e(Xe, { className: "w-6 h-6 text-gray-400 dark:text-gray-400" })
    }
  ) }) }), fe = (t, g) => /* @__PURE__ */ h("div", { className: `flex items-center space-x-4 ${g.className || ""}`, children: [
    g.imageKey ? ie(
      t[g.imageKey],
      t[g.titleKey],
      "group-avatar",
      g.fallback_icon,
      t
    ) : "",
    /* @__PURE__ */ h("div", { children: [
      /* @__PURE__ */ e("p", { className: "font-medium text-gray-900 dark:text-white group-title", children: t[g.titleKey] || "" }),
      /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400 group-sub-title", children: t[g.subtitleKey] || "" })
    ] })
  ] }), ye = (t, g) => {
    var A;
    let D = String(t);
    const p = g.variant || "contained";
    let v = g.defaultColor;
    if (((A = g == null ? void 0 : g.chipOptions) == null ? void 0 : A.length) > 0) {
      let q = g == null ? void 0 : g.chipOptions.find((V) => V.value == t);
      q && (D = q.label, v = q.color);
    }
    return /* @__PURE__ */ e(
      Ke,
      {
        label: D,
        variant: p,
        color: v,
        className: g.className || ""
      }
    );
  }, xe = (t, g, D) => {
    const p = g[t.key];
    return t.type === "menu_actions" ? /* @__PURE__ */ e("div", { className: `text-center ${t.className || ""}`, children: /* @__PURE__ */ e(
      "button",
      {
        ref: (v) => oe.current[g.id || g._id] = v,
        onClick: (v) => be(g.id || g._id, v, t.menuList),
        className: "p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition text-gray-700 dark:text-gray-300",
        children: /* @__PURE__ */ e(Qe, { className: "h-4 w-4" })
      }
    ) }) : t.type === "index" ? /* @__PURE__ */ e("span", { className: t.className || "", children: pe(D) }) : t.type === "group" ? fe(g, t) : t.type === "chip" ? /* @__PURE__ */ e(E, { children: ye(p, t) }) : t.type === "date" ? /* @__PURE__ */ e("span", { className: t.className || "", children: je(p, t.format || "DD MMM YYYY") }) : t.type === "avatar" ? /* @__PURE__ */ e(E, { children: /* @__PURE__ */ e("div", { className: "min-w-[40px]", children: ie(
      p,
      t.alt,
      t.className,
      t.fallback_icon,
      g
    ) }) }) : t.type === "audio" ? /* @__PURE__ */ e(E, { children: me(p, t.className) }) : /* @__PURE__ */ e("span", { className: t.className || "", children: p || "N/A" });
  }, ve = (t) => {
    if (typeof N == "function")
      return N(t);
    if (N)
      return y == null ? void 0 : y("view", t);
  }, we = (t, g) => {
    if (t.onClickDetails)
      return y == null ? void 0 : y("view", g);
    if (typeof t.handleClick == "function")
      return t.handleClick(g);
  }, se = () => N || typeof N == "function", de = (t) => t.onClickDetails || typeof t.handleClick == "function";
  return z(() => {
    const t = () => {
      M && L(null);
    };
    return window.addEventListener("scroll", t, !0), () => {
      window.removeEventListener("scroll", t, !0);
    };
  }, [M]), z(() => {
    const t = (g) => {
      le.current && !le.current.contains(g.target) && L(null);
    };
    return document.addEventListener("click", t), () => document.removeEventListener("click", t);
  }, []), z(() => {
    a != null && a.rows_per_page && (a != null && a.useServerSidePagination) && X((a == null ? void 0 : a.rows_per_page) || 50), a.current_page && k(a.current_page);
  }, [
    a.rows_per_page,
    a == null ? void 0 : a.useServerSidePagination,
    a.current_page
  ]), z(() => {
    ee(
      a != null && a.useServerSidePagination ? a.total_records : K.length
    ), K.length <= U * (_ - 1) && !(a != null && a.useServerSidePagination) && k((t) => t - 1 || 1);
  }, [
    K.length,
    a.total_records,
    a == null ? void 0 : a.useServerSidePagination
  ]), O ? /* @__PURE__ */ e(ua, { rows: 6, columns: 6 }) : /* @__PURE__ */ h(E, { children: [
    /* @__PURE__ */ h("div", { className: "flex flex-col sm:flex-row sm:justify-between gap-4 mb-3", children: [
      /* @__PURE__ */ h("div", { children: [
        /* @__PURE__ */ e("h1", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: i }),
        /* @__PURE__ */ e("p", { className: "text-md text-gray-600 dark:text-gray-400", children: d })
      ] }),
      /* @__PURE__ */ h("div", { className: "flex flex-col justify-end items-end gap-2", children: [
        n && /* @__PURE__ */ h(
          Q,
          {
            onClick: () => l(!0),
            variant: "contained",
            color: "primary",
            children: [
              /* @__PURE__ */ e(We, { className: "w-4 h-4 mr-2" }),
              o || "Add New"
            ]
          }
        ),
        /* @__PURE__ */ h("div", { className: "flex justify-end items-center gap-2", children: [
          c.enabled && /* @__PURE__ */ e("div", { className: "", children: /* @__PURE__ */ h("div", { className: "relative min-w-[300px]", children: [
            /* @__PURE__ */ e(Ae, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-300" }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                placeholder: c.placeholder || "Search...",
                value: P,
                onChange: (t) => he(t.target.value),
                className: "w-full h-[36px] pl-9 pr-4 py-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-300 dark:ring-blue-200 disabled:opacity-50"
              }
            )
          ] }) }),
          x && m.enabled && /* @__PURE__ */ h(Q, { onClick: () => W(!0), variant: "contained", children: [
            /* @__PURE__ */ e(qe, { className: "w-4 h-4 mr-2" }),
            "Filters"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ h("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-700", children: [
      /* @__PURE__ */ e("div", { className: "overflow-x-auto", children: /* @__PURE__ */ h("table", { className: "min-w-full divide-y divide-gray-200 dark:divide-gray-700", children: [
        /* @__PURE__ */ e("thead", { className: "bg-gray-50 dark:bg-gray-700/60", children: /* @__PURE__ */ e("tr", { children: S.map((t) => /* @__PURE__ */ e(
          "th",
          {
            className: `px-6 py-4 text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider min-w-max max-w-[180px] truncate ${t.headClass || ""}`,
            children: t.title
          },
          t.key
        )) }) }),
        /* @__PURE__ */ e("tbody", { className: "bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700", children: ce.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e(
          "td",
          {
            colSpan: S.length,
            className: "text-center py-10 text-gray-500 dark:text-gray-400",
            children: f
          }
        ) }) : ce.map((t, g) => /* @__PURE__ */ e(
          "tr",
          {
            className: `hover:bg-gray-50 dark:hover:bg-blue-800/10 transition ${se() ? "cursor-pointer" : ""}`,
            onClick: (D) => {
              se() && ve(t);
            },
            children: S.map((D) => /* @__PURE__ */ e(
              "td",
              {
                className: `px-6 py-4 text-sm text-gray-900 dark:text-gray-100 min-w-max ${D.type == "audio" ? "" : "max-w-[300px]"} truncate ${de(D) ? "cursor-pointer" : ""}`,
                title: String(t[D.key] ?? ""),
                onClick: (p) => {
                  de(D) && (p.stopPropagation(), p.preventDefault(), we(D, t));
                },
                children: D.render ? D.render(t, g) : xe(D, t, g)
              },
              D.key
            ))
          },
          t.id || t._id || g
        )) })
      ] }) }),
      (a == null ? void 0 : a.enabled) && K.length > 0 && /* @__PURE__ */ h("div", { className: " bg-gray-50 dark:bg-gray-700/60 px-6 py-3 flex flex-wrap items-center justify-between border-t border-gray-200 dark:border-gray-600 gap-3", children: [
        /* @__PURE__ */ h("div", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
          "Showing ",
          (_ - 1) * U + 1,
          " to",
          " ",
          Math.min(_ * U, J),
          " of ",
          J,
          " ",
          "results"
        ] }),
        /* @__PURE__ */ h("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ h("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Rows per page:" }),
            /* @__PURE__ */ e(
              "select",
              {
                value: U,
                onChange: (t) => {
                  const g = Number(t.target.value);
                  X(g), k(1), a.useServerSidePagination && s((D) => ({
                    ...D,
                    current_page: 1,
                    rows_per_page: g
                  }));
                },
                className: "border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500",
                children: [2, 10, 25, 50, 100].map((t) => /* @__PURE__ */ e("option", { value: t, children: t }, t))
              }
            )
          ] }),
          /* @__PURE__ */ h("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => {
                  if (_ > 1) {
                    const t = _ - 1;
                    k(t), a.useServerSidePagination && s((g) => ({
                      ...g,
                      current_page: t
                    }));
                  }
                },
                disabled: _ === 1,
                className: "p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition text-gray-500 dark:text-gray-300 disabled:opacity-50",
                children: /* @__PURE__ */ e(Ze, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ h("span", { className: "text-sm text-gray-800 dark:text-gray-200", children: [
              "Page ",
              _,
              " of ",
              ne
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => {
                  if (_ < ne) {
                    const t = _ + 1;
                    k(t), a.useServerSidePagination && s((g) => ({
                      ...g,
                      current_page: t
                    }));
                  }
                },
                disabled: _ === ne,
                className: "p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition text-gray-500 dark:text-gray-300 disabled:opacity-50",
                children: /* @__PURE__ */ e(Je, { className: "h-4 w-4" })
              }
            )
          ] })
        ] })
      ] })
    ] }),
    M && ea(
      /* @__PURE__ */ e(
        "div",
        {
          ref: le,
          style: {
            position: "fixed",
            top: `${C.top}px`,
            left: `${C.left}px`,
            zIndex: 9999
          },
          className: "w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg border border-gray-200 dark:border-gray-600",
          children: B.map((t, g) => /* @__PURE__ */ h(
            "button",
            {
              onClick: (D) => ue(
                t,
                b.find(
                  (p) => p.id === M || p._id == M
                ),
                D
              ),
              className: `w-full flex items-center gap-2 px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-600 ${t.variant === "danger" ? "text-red-600 dark:text-red-500" : "text-gray-700 dark:text-gray-200"}`,
              children: [
                t.icon && /* @__PURE__ */ e("span", { className: "shrink-0", children: t.icon }),
                t.title
              ]
            },
            g
          ))
        }
      ),
      document.body
    ),
    x && /* @__PURE__ */ e(
      ha,
      {
        isOpen: G,
        onClose: () => W(!1),
        config: x,
        onApply: w
      }
    ),
    Y && /* @__PURE__ */ e(
      _e,
      {
        src: $.src,
        alt: $.alt,
        isOpen: Y,
        setIsOpen: I
      }
    )
  ] });
}, Ne = ({
  isOpen: u,
  onClose: l,
  icon: i,
  title: o,
  children: d,
  size: n = "md",
  actionButtons: b = [],
  actions: S,
  showDefaultClose: O = !0,
  footerConfig: c = null,
  hideFooter: m = !1,
  onFormSubmit: a = () => {
  },
  onCancel: f,
  loadingBtn: y = !1,
  executeFunction: s = () => {
  },
  selectedItem: w = null
}) => {
  if (!u) return null;
  const x = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-full"
  };
  return /* @__PURE__ */ h("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: "fixed inset-0 bg-gray-500 opacity-75",
        onClick: () => l()
      }
    ),
    /* @__PURE__ */ h(
      "div",
      {
        className: `relative bg-white rounded-lg shadow-xl w-full ${x[n] || x.md} max-h-[90vh] flex flex-col dark:bg-gray-800`,
        children: [
          /* @__PURE__ */ h("div", { className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0", children: [
            /* @__PURE__ */ h("div", { className: "flex items-center gap-1", children: [
              i && /* @__PURE__ */ e("span", { children: i }),
              /* @__PURE__ */ e("h3", { className: "text-lg font-medium text-gray-900 dark:text-white", children: o })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => l(),
                className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
                children: /* @__PURE__ */ e(Se, { className: "w-6 h-6" })
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto p-4", children: d }),
          b.length > 0 && /* @__PURE__ */ e("div", { className: "px-4 py-3 flex justify-end gap-3 border-t border-gray-200 dark:border-gray-700 sm:px-6", children: b.map((N) => /* @__PURE__ */ e(
            Q,
            {
              onClick: (P) => {
                N.type == "submit" ? a(P) : s(
                  () => {
                    var F;
                    return (F = N == null ? void 0 : N.onClick) == null ? void 0 : F.call(N, P, w);
                  },
                  (F) => l == null ? void 0 : l(F)
                );
              },
              disabled: y || N.disabled,
              variant: N.variant || "contained",
              color: N.color || "primary",
              className: `min-w-[100px] ${N.className}`,
              type: N.type || "button",
              children: y ? /* @__PURE__ */ h("div", { className: "flex items-center", children: [
                /* @__PURE__ */ e("div", { className: "animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-2 border-t-white mr-2" }),
                N.label || "Submit",
                "..."
              ] }) : N.label || "Submit"
            }
          )) })
        ]
      }
    )
  ] });
}, Ie = ({ config: u, onSubmit: l, initialData: i = {}, type: o = "add" }) => {
  const { formClass: d = "grid grid-cols-12 gap-4", formFields: n = [] } = u || {}, [b, S] = R(i);
  z(() => {
    S(i);
  }, []);
  const O = (m, a) => {
    S((f) => ({ ...f, [m]: a }));
  }, c = (m) => {
    m.preventDefault();
    const a = m.target;
    if (!a.checkValidity()) {
      a.reportValidity();
      return;
    }
    l(b);
  };
  return /* @__PURE__ */ e(
    "form",
    {
      id: o == "add" ? "addForm" : o == "edit" ? "editForm" : "defaultForm",
      onSubmit: c,
      className: d,
      noValidate: !1,
      children: n.map((m) => /* @__PURE__ */ e(E, { children: /* @__PURE__ */ e(
        Ge,
        {
          field: m,
          formData: b,
          handleChange: O
        },
        m.key
      ) }))
    }
  );
};
function pa({ data: u, config: l }) {
  const { fields: i, containerClass: o } = l, [d, n] = R(null), [b, S] = R(!1), O = (a) => {
    a && a.src instanceof File && (a = { ...a, src: URL.createObjectURL(a.src) }), n(a), S(!0);
  }, c = ({ col: a }) => {
    var P;
    let f = a == null ? void 0 : a.icon, y = a.label, s = u[a.key], w = a.type, x = a.variant || "outline", N = a.defaultColor;
    if (w === "chip" && ((P = a.chipOptions) == null ? void 0 : P.length) > 0) {
      let F = a == null ? void 0 : a.chipOptions.find((M) => M.value == s);
      F && (s = F.label, N = F.color);
    }
    return /* @__PURE__ */ h(
      "div",
      {
        className: `col-span-12 flex items-center space-x-4 p-4 rounded-xl 
                  bg-gray-100 dark:bg-gray-900 ${a.blockClass || ""}`,
        children: [
          f && /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: f }),
          /* @__PURE__ */ h("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ e("p", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: y }),
            w === "chip" ? /* @__PURE__ */ e(
              Ke,
              {
                label: s,
                variant: x,
                color: N,
                className: "mt-1"
              }
            ) : (
              /* TINY EDITOR */
              w === "tinyEditor" ? /* @__PURE__ */ e(
                "p",
                {
                  className: "mt-1 text-sm text-gray-900 dark:text-white break-words",
                  dangerouslySetInnerHTML: {
                    __html: s
                  }
                }
              ) : w === "audio" ? s ? /* @__PURE__ */ e(
                "audio",
                {
                  controls: !0,
                  src: s instanceof File ? URL.createObjectURL(s) : s,
                  onClick: (F) => F.stopPropagation(),
                  className: "shadow-md rounded-full mt-1"
                },
                s instanceof File ? URL.createObjectURL(s) : s
              ) : /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-gray-400", children: "N/A" }) : (
                /* DEFAULT */
                /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-gray-900 dark:text-white break-words", children: w == "date" ? /* @__PURE__ */ e("span", { children: je(s, a.format || "DD MMM YYYY") }) : s || "N/A" })
              )
            )
          ] })
        ]
      }
    );
  }, m = ({ col: a }) => {
    let f = u[a.titleKey], y = u[a.subtitleKey], s = u[a.imageKey], w = a.fallback_icon;
    return /* @__PURE__ */ h(
      "div",
      {
        className: `col-span-12 flex items-center space-x-4 p-4 rounded-xl 
      bg-gray-100 dark:bg-gray-900 
      ${a.blockClass}`,
        children: [
          s ? /* @__PURE__ */ e(
            "img",
            {
              src: s instanceof File ? URL.createObjectURL(s) : s,
              alt: f,
              onClick: () => O({ src: s, alt: f }),
              className: "w-16 h-16 cursor-pointer rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
            }
          ) : w ? w instanceof Function ? w(u) : w : /* @__PURE__ */ e("div", { className: "w-16 h-16 flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600", children: /* @__PURE__ */ e(Ue, { className: "w-8 h-8 text-gray-400" }) }),
          /* @__PURE__ */ h("div", { children: [
            /* @__PURE__ */ e("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: f }),
            /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: y })
          ] })
        ]
      }
    );
  };
  return /* @__PURE__ */ h(E, { children: [
    b && /* @__PURE__ */ e(
      _e,
      {
        src: d.src,
        alt: d.alt,
        isOpen: b,
        setIsOpen: S
      }
    ),
    /* @__PURE__ */ e("div", { className: `grid grid-cols-12 gap-4 ${o || ""}`, children: i.map((a) => a.renderCondition && typeof a.renderCondition == "function" && !a.renderCondition(u) ? null : a.type == "group" ? /* @__PURE__ */ e(m, { col: a }) : /* @__PURE__ */ e(c, { col: a })) })
  ] });
}
const ze = ({ config: u }) => {
  var oe, te, he, ue, be, pe, ge, ie, me, fe, ye, xe, ve, we, se, de, t, g, D;
  const {
    title: l,
    fetchData: i = async () => {
    },
    isStaticData: o = !1,
    tableConfig: d = {},
    modalConfig: n = {},
    filterConfig: b
  } = u, [S, O] = R(!0), [c, m] = R(!1), [a, f] = R([]), [y, s] = R(null), [w, x] = R({
    search: "",
    rows_per_page: 50,
    current_page: 1
  }), [N, P] = R({}), [F, M] = R(!1), [L, B] = R(!1), [T, C] = R(!1), [j, G] = R(!1), [W, $] = R(!1), [H, Y] = R(null), I = (p, v) => {
    p === "edit" ? (Y(v), C(!0)) : p === "view" ? (Y(v), $(!0)) : p === "delete" && (Y(v), G(!0));
  }, K = async (p, v, A = "", q = "") => {
    m(!0);
    try {
      const V = await (p == null ? void 0 : p());
      (A || V.message) && Me(A || V.message, {
        variant: "success"
      }), v == null || v(V);
    } catch (V) {
      (q || V.message) && Me(q || V.message, { variant: "error" });
    } finally {
      m(!1);
    }
  }, _ = (p) => {
    let v = p.newObject;
    o ? (f((A) => [v, ...A]), s((A) => ({
      ...A,
      current_page: 1
    }))) : (x((A) => ({
      ...A,
      current_page: 1
    })), w.current_page == 1 && ee()), B(!1);
  }, k = (p) => {
    let v = p.newObject, A = p.targetObject;
    o ? f(
      (q) => q.map(
        (V) => V.id === A.id ? { ...V, ...v } : V
      )
    ) : ee(), C(!1);
  }, U = (p) => {
    if (!p) {
      G(!1), Y(null);
      return;
    }
    o ? f(
      (v) => v.filter((A) => A.id !== p.targetObject.id)
    ) : a.length == 1 && w.current_page > 1 ? x((v) => ({
      ...v,
      current_page: v.current_page - 1
    })) : ee(), G(!1), Y(null);
  }, X = (p) => K(
    () => {
      var v, A;
      return (A = (v = n == null ? void 0 : n.addModal) == null ? void 0 : v.handleSubmit) == null ? void 0 : A.call(v, p);
    },
    _
  ), J = (p) => K(
    () => {
      var v, A;
      return (A = (v = n == null ? void 0 : n.editModal) == null ? void 0 : v.handleSubmit) == null ? void 0 : A.call(v, p, H);
    },
    k
  ), ee = async () => {
    O(!0), i == null || i({ ...w, ...N }).then((p) => {
      f(p.data), s(p.pagination);
    }).catch((p) => {
      Me(p.message, { variant: "error" });
    }).finally(() => {
      O(!1);
    });
  }, ne = (p) => {
    var v;
    P((A) => ({
      ...p
    })), (v = d == null ? void 0 : d.filter) != null && v.useServerSideFilters && M((A) => !A);
  }, ce = (p, v) => p.filter(
    (A) => Object.entries(v).every(([q, V]) => A[q] === V)
  ), le = Le(() => {
    var p;
    return (p = d == null ? void 0 : d.filter) != null && p.useServerSideFilters ? a : ce(a, N);
  }, [a, N]);
  return z(() => {
    ee();
  }, [
    w.search,
    w.rows_per_page,
    w.current_page,
    F
  ]), /* @__PURE__ */ e(
    ta,
    {
      maxSnack: 3,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right"
      },
      autoHideDuration: 3e3,
      action: (p) => /* @__PURE__ */ e(
        "button",
        {
          onClick: () => {
            window.dispatchEvent(
              new CustomEvent("closeSnackbar", { detail: p })
            );
          },
          className: "p-1 hover:bg-white/20 rounded-full transition-colors duration-200 text-white flex items-center justify-center",
          children: /* @__PURE__ */ e(Se, { className: "h-4 w-4" })
        }
      ),
      children: /* @__PURE__ */ h("div", { children: [
        /* @__PURE__ */ e(
          ba,
          {
            title: l,
            setShowAdd: B,
            description: u.description,
            buttonText: u.buttonText,
            showAddButton: !!n.addModal,
            config: {
              ...d,
              pagination: {
                ...d.pagination,
                ...y
              },
              data: le,
              setServerSidePaginationData: x,
              onMenuAction: I,
              filterConfig: b,
              onFilterApply: ne,
              loading: S
            }
          }
        ),
        /* @__PURE__ */ e(
          Ne,
          {
            isOpen: L,
            onClose: () => {
              c || B(!1);
            },
            icon: (oe = n.addModal) == null ? void 0 : oe.icon,
            title: ((te = n.addModal) == null ? void 0 : te.title) || "Add New",
            size: ((he = n.addModal) == null ? void 0 : he.size) || "md",
            onFormSubmit: () => {
              var p;
              return (p = document.querySelector("#addForm")) == null ? void 0 : p.requestSubmit();
            },
            loadingBtn: c,
            actionButtons: ((ue = n == null ? void 0 : n.addModal) == null ? void 0 : ue.actionButtons) || [],
            children: /* @__PURE__ */ e(
              Ie,
              {
                config: (n == null ? void 0 : n.addModal) || {},
                onSubmit: X,
                initialData: {},
                type: "add",
                loading: c
              }
            )
          }
        ),
        /* @__PURE__ */ e(
          Ne,
          {
            isOpen: T,
            onClose: () => {
              c || C(!1);
            },
            icon: (be = n.editModal) == null ? void 0 : be.icon,
            title: ((pe = n.editModal) == null ? void 0 : pe.title) || "Edit",
            size: ((ge = n.editModal) == null ? void 0 : ge.size) || "md",
            onFormSubmit: () => {
              var p;
              return (p = document.querySelector("#editForm")) == null ? void 0 : p.requestSubmit();
            },
            actionButtons: ((ie = n == null ? void 0 : n.editModal) == null ? void 0 : ie.actionButtons) || [],
            loadingBtn: c,
            children: /* @__PURE__ */ e(
              Ie,
              {
                config: n.editModal || {},
                onSubmit: J,
                initialData: H,
                type: "edit",
                loading: c
              }
            )
          }
        ),
        j && /* @__PURE__ */ e(
          Ne,
          {
            isOpen: j,
            onClose: (p) => {
              U(p);
            },
            icon: ((me = n.deleteModal) == null ? void 0 : me.icon) || /* @__PURE__ */ e(re, { icon: "ph:warning-bold", className: "w-6 h-6 text-red-500" }),
            title: ((fe = n.deleteModal) == null ? void 0 : fe.title) || "Confirm Delete",
            size: ((ye = n.deleteModal) == null ? void 0 : ye.size) || "md",
            loading: c,
            actionButtons: ((xe = n == null ? void 0 : n.deleteModal) == null ? void 0 : xe.actionButtons) || [],
            executeFunction: K,
            selectedItem: H,
            children: /* @__PURE__ */ e("div", { className: "flex items-center space-x-2 py-3", children: /* @__PURE__ */ h("div", { children: [
              /* @__PURE__ */ e("p", { className: "text-md text-gray-700 dark:text-white", children: ((ve = n.deleteModal) == null ? void 0 : ve.confirmText) || "Are you sure you want to delete this item?" }),
              ((we = n.deleteModal) == null ? void 0 : we.referenceKey) && /* @__PURE__ */ e("p", { className: "text-md font-semibold text-gray-700 dark:text-white", children: H[(se = n.deleteModal) == null ? void 0 : se.referenceKey] })
            ] }) })
          }
        ),
        n.viewModal && /* @__PURE__ */ e(
          Ne,
          {
            isOpen: W,
            onClose: () => {
              $(!1), Y(null);
            },
            icon: (de = n.viewModal) == null ? void 0 : de.icon,
            title: ((t = n.viewModal) == null ? void 0 : t.title) || "View Details",
            size: ((g = n.viewModal) == null ? void 0 : g.size) || "lg",
            footerConfig: n == null ? void 0 : n.viewModal.footer,
            children: (D = n.viewModal) != null && D.component ? /* @__PURE__ */ e(n.viewModal.component, { data: H }) : /* @__PURE__ */ e(
              pa,
              {
                data: H,
                config: n.viewModal || {}
              }
            )
          }
        )
      ] })
    }
  );
}, De = r.shape({
  value: r.oneOfType([
    r.string,
    r.number,
    r.bool
  ]).isRequired,
  label: r.string.isRequired,
  color: r.string
}), Ce = r.shape({
  type: r.string.isRequired,
  label: r.string.isRequired,
  color: r.string,
  variant: r.string,
  onClick: r.func
}), ga = r.shape({
  title: r.string.isRequired,
  type: r.string.isRequired,
  variant: r.string,
  icon: r.node
}), ma = r.shape({
  key: r.string.isRequired,
  title: r.string,
  type: r.string,
  imageKey: r.string,
  titleKey: r.string,
  subtitleKey: r.string,
  onClickDetails: r.bool,
  variant: r.string,
  chipOptions: r.arrayOf(De),
  defaultColor: r.string,
  className: r.string,
  format: r.string,
  menuList: r.arrayOf(ga)
}), Re = r.shape({
  key: r.string.isRequired,
  label: r.string,
  type: r.string.isRequired,
  required: r.bool,
  minLength: r.number,
  parentClass: r.string,
  search: r.bool,
  multiple: r.bool,
  dropdownMaxHeight: r.string,
  dragDrop: r.bool,
  countriesList: r.bool,
  defaultCountry: r.string,
  placeholder: r.string,
  rows: r.number,
  text: r.string,
  editorKey: r.string,
  options: r.arrayOf(De)
}), fa = r.shape({
  key: r.string,
  label: r.string,
  type: r.string,
  imageKey: r.string,
  titleKey: r.string,
  subtitleKey: r.string,
  blockClass: r.string,
  icon: r.node,
  variant: r.string,
  chipOptions: r.arrayOf(De),
  defaultColor: r.string,
  className: r.string,
  format: r.string
});
ze.propTypes = {
  config: r.shape({
    title: r.string.isRequired,
    description: r.string,
    buttonText: r.string,
    fetchData: r.func.isRequired,
    isStaticData: r.bool,
    /* ================= TABLE CONFIG ================= */
    tableConfig: r.shape({
      table_head: r.arrayOf(ma).isRequired,
      search: r.shape({
        enabled: r.bool,
        useServerSideSearch: r.bool,
        searchKeys: r.arrayOf(r.string)
      }),
      pagination: r.shape({
        enabled: r.bool,
        useServerSidePagination: r.bool
      }),
      filter: r.shape({
        enabled: r.bool,
        useServerSideFilters: r.bool
      })
    }).isRequired,
    /* ================= MODAL CONFIG ================= */
    modalConfig: r.shape({
      addModal: r.shape({
        title: r.string.isRequired,
        size: r.string,
        formClass: r.string,
        formFields: r.arrayOf(Re),
        handleSubmit: r.func.isRequired,
        actionButtons: r.arrayOf(Ce)
      }),
      editModal: r.shape({
        title: r.string.isRequired,
        size: r.string,
        formClass: r.string,
        formFields: r.arrayOf(Re),
        handleSubmit: r.func.isRequired,
        actionButtons: r.arrayOf(Ce)
      }),
      deleteModal: r.shape({
        title: r.string.isRequired,
        size: r.string,
        confirmText: r.string,
        referenceKey: r.string,
        actionButtons: r.arrayOf(Ce)
      }),
      viewModal: r.shape({
        title: r.string.isRequired,
        size: r.string,
        // 👇 This covers your commented code:
        component: r.elementType,
        // for custom component like TeamMemberDetail
        fields: r.arrayOf(fa),
        footer: r.shape({
          cancelButton: r.bool,
          cancelText: r.string
        })
      })
    }),
    /* ================= FILTER CONFIG ================= */
    filterConfig: r.shape({
      fields: r.arrayOf(Re)
    })
  }).isRequired
};
const ya = () => {
  if (typeof document > "u" || document.getElementById("react-admin-crud-manager-styles")) return;
  const u = document.createElement("style");
  u.id = "react-admin-crud-manager-styles";
  const l = `
    .no-spinner::-webkit-outer-spin-button,
    .no-spinner::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    
    .no-spinner {
      -moz-appearance: textfield;
    }
    
    .tox.tox-tinymce .tox-edit-area::before {
      border: 0 !important;
      box-shadow: none !important;
    }
  `;
  u.textContent = l, document.head.appendChild(u);
};
function Oa(u) {
  return z(() => {
    ya();
  }, []), /* @__PURE__ */ e(E, { children: /* @__PURE__ */ e(ze, { config: u.config }) });
}
export {
  Oa as default
};
//# sourceMappingURL=index.es.js.map
