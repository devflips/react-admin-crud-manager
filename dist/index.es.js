import { jsx as e, Fragment as $, jsxs as h } from "react/jsx-runtime";
import Ce, { useState as R, useRef as ee, useEffect as H, useMemo as Me } from "react";
import { ChevronDown as Te, Search as Re, Check as _e, X as ye, Filter as Ke, ChevronLeft as Ue, ChevronRight as ze, EllipsisVertical as He, User as Ie, Music as Ye, Plus as Ve } from "lucide-react";
import { createPortal as We } from "react-dom";
import { Icon as oe } from "@iconify/react";
import { Editor as qe } from "@tinymce/tinymce-react";
import { SnackbarProvider as Ze, enqueueSnackbar as ke } from "notistack";
import a from "prop-types";
const Oe = (c, n = "DD MMM YYYY") => {
  if (!c) return "N/A";
  const o = new Date(c);
  if (isNaN(o)) return "Invalid Date";
  const i = (l) => String(l).padStart(2, "0"), s = {
    YYYY: o.getFullYear(),
    YY: String(o.getFullYear()).slice(-2),
    MMMM: o.toLocaleString("en-US", { month: "long" }),
    MMM: o.toLocaleString("en-US", { month: "short" }),
    MM: i(o.getMonth() + 1),
    M: o.getMonth() + 1,
    DD: i(o.getDate()),
    D: o.getDate(),
    dddd: o.toLocaleString("en-US", { weekday: "long" }),
    ddd: o.toLocaleString("en-US", { weekday: "short" }),
    HH: i(o.getHours()),
    hh: i(o.getHours() % 12 || 12),
    mm: i(o.getMinutes()),
    ss: i(o.getSeconds()),
    A: o.getHours() >= 12 ? "PM" : "AM"
  };
  return n.replace(
    /YYYY|YY|MMMM|MMM|MM|M|DD|D|dddd|ddd|HH|hh|mm|ss|A/g,
    (l) => s[l]
  );
}, Je = (c, n, o = []) => {
  if (!(n != null && n.trim())) return c;
  const i = n.toLowerCase(), s = (l) => l == null ? [] : typeof l == "object" ? Object.values(l).flatMap(s) : [String(l)];
  return c.filter((l) => {
    let r = [];
    return o.length > 0 ? o.forEach((C) => {
      l[C] !== void 0 && r.push(...s(l[C]));
    }) : r = s(l), r.some(
      (C) => C.toLowerCase().includes(i)
    );
  });
}, Q = Ce.forwardRef(
  ({
    className: c = "",
    variant: n = "contained",
    color: o = "default",
    size: i = "default",
    fullWidth: s = !1,
    children: l,
    ...r
  }, C) => {
    var u;
    const L = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", p = {
      sm: "h-8 px-3 rounded-md text-sm",
      md: "h-9 px-4 rounded-md text-sm",
      lg: "h-11 px-6 rounded-md text-base",
      xl: "h-12 px-8 rounded-lg text-lg",
      default: "h-9 px-4 rounded-md text-sm"
    }, f = {
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
    }, d = ((u = f[o]) == null ? void 0 : u[n]) || f.default.contained, b = p[i], m = `
      ${L} 
      ${d} 
      ${b} 
      ${s ? "w-full" : ""} 
      ${c}
    `.trim();
    return /* @__PURE__ */ e(
      "button",
      {
        ref: C,
        type: r.type || "button",
        className: m,
        ...r,
        children: l
      }
    );
  }
);
Q.displayName = "Button";
function Z({ label: c, required: n = !1 }) {
  return /* @__PURE__ */ e($, { children: /* @__PURE__ */ h("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: [
    c,
    n && /* @__PURE__ */ e("span", { className: "ml-1", children: "*" })
  ] }) });
}
const Qe = ({
  options: c = [],
  value: n = "",
  defaultValue: o = "",
  onChange: i,
  placeholder: s = "Select option",
  className: l = "",
  disabled: r = !1,
  search: C = !1,
  label: L = "",
  required: p = !1,
  name: f = "",
  parentClass: d = "",
  multiple: b = !1,
  // ✅ NEW
  dropdownMaxHeight: m = ""
}) => {
  var ae;
  const [u, y] = R(!1), [w, S] = R(""), [E, O] = R(!0), M = ee(null), j = ee(null), [G, x] = R([]);
  let v = n || n === !1 ? n : o;
  const I = (N) => N == null || N === "" ? "" : String(typeof N == "boolean" ? N : N ?? "");
  H(() => {
    (async () => {
      if (typeof c == "function") {
        const U = await c();
        x(U);
      } else
        x(c || []);
    })();
  }, [c]);
  const D = b ? (v || []).map(I) : I(v), F = G.filter(
    (N) => N.label.toLowerCase().includes(w.toLowerCase())
  ), z = (N) => {
    const U = I(N);
    return b ? D.includes(U) : U === D;
  };
  H(() => {
    const N = (U) => {
      M.current && !M.current.contains(U.target) && (y(!1), S(""));
    };
    return document.addEventListener("mousedown", N), () => document.removeEventListener("mousedown", N);
  }, []), H(() => {
    if (u && M.current) {
      const N = M.current.getBoundingClientRect(), X = window.innerHeight - N.bottom;
      O(X < 200);
    }
  }, [u]), H(() => {
    u && j.current && j.current.focus();
  }, [u]);
  const A = (N) => {
    let U = N;
    if (N === "true" ? U = !0 : N === "false" && (U = !1), b) {
      const X = D.includes(I(N));
      let q;
      X ? q = n.filter(
        (le) => I(le) !== I(N)
      ) : q = [...n || [], U], i(q);
    } else
      i(U), y(!1);
    S("");
  }, Y = b ? G.filter((N) => z(N.value)).map((N) => N.label).join(", ") : (ae = G.find((N) => z(N.value))) == null ? void 0 : ae.label;
  return H(() => {
    (v || v === !1) && setTimeout(() => {
      i(v);
    }, 100);
  }, []), /* @__PURE__ */ h("div", { className: d || "col-span-12", children: [
    /* @__PURE__ */ e(Z, { label: L, required: p }),
    /* @__PURE__ */ h("div", { className: `relative ${l}`, ref: M, children: [
      /* @__PURE__ */ e(
        "select",
        {
          name: "hidden_select_for_validation",
          value: Y || "",
          required: p,
          multiple: b,
          className: "absolute opacity-0 right-1/2 top-[80%] -translate-x-1/2 -translate-y-1/2 pointer-events-none h-[10px]",
          children: /* @__PURE__ */ e("option", { hidden: !0, value: Y, children: Y })
        }
      ),
      /* @__PURE__ */ h(
        "button",
        {
          type: "button",
          onClick: () => !r && y(!u),
          disabled: r,
          className: `w-full h-10 px-3 border border-gray-300 dark:border-gray-600 rounded-md text-left text-sm flex items-center justify-between 
          ${Y ? "dark:text-white" : "text-gray-500 dark:text-gray-400"} 
          ${r ? "opacity-50 cursor-not-allowed" : "dark:bg-gray-700"}`,
          children: [
            /* @__PURE__ */ e("span", { className: "truncate", children: Y || s }),
            /* @__PURE__ */ e(
              Te,
              {
                className: `w-4 h-4 transition-transform ${u ? "rotate-180" : ""}`
              }
            )
          ]
        }
      ),
      u && /* @__PURE__ */ h(
        "div",
        {
          className: `absolute z-50 w-full border rounded-md bg-white dark:bg-gray-700 shadow-lg 
            ${E ? "bottom-full mb-1" : "top-full mt-1"}`,
          children: [
            C && /* @__PURE__ */ e("div", { className: "p-2 border-b border-gray-200 dark:border-gray-600", children: /* @__PURE__ */ h("div", { className: "relative", children: [
              /* @__PURE__ */ e(Re, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }),
              /* @__PURE__ */ e(
                "input",
                {
                  ref: j,
                  type: "text",
                  value: w,
                  onChange: (N) => S(N.target.value),
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
                  maxHeight: m || ""
                },
                children: F.length > 0 ? F.map((N) => /* @__PURE__ */ h(
                  "button",
                  {
                    type: "button",
                    onClick: () => A(String(N.value)),
                    className: `w-full px-3 py-2 text-left text-sm flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 
                    ${z(N.value) ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300" : ""}`,
                    children: [
                      /* @__PURE__ */ e("span", { children: N.label }),
                      b && z(N.value) && /* @__PURE__ */ e(_e, { className: "w-4 h-4" })
                    ]
                  },
                  String(N.value)
                )) : /* @__PURE__ */ e("div", { className: "px-3 py-2 text-sm text-gray-500 dark:text-gray-400", children: "No options found" })
              }
            )
          ]
        }
      )
    ] })
  ] }, f);
}, Xe = ({
  value: c = !0,
  onChange: n,
  text: o,
  options: i = [],
  label: s,
  required: l,
  name: r = "",
  disabled: C = !1,
  parentClass: L = ""
}) => {
  const p = i.length > 0 ? i : [
    { label: "Active", value: !0 },
    { label: "Inactive", value: !1 }
  ];
  return /* @__PURE__ */ e($, { children: /* @__PURE__ */ h("div", { className: L || "col-span-12", children: [
    /* @__PURE__ */ e(Z, { label: s, required: l }),
    /* @__PURE__ */ h("div", { className: "flex items-center justify-between h-10 gap-4 bg-gray-100 dark:bg-gray-700 px-3 rounded-md border border-gray-100 dark:border-gray-600", children: [
      o && /* @__PURE__ */ e("p", { className: "text-xs text-gray-600 dark:text-gray-400 flex-shrink overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px]", children: o }),
      /* @__PURE__ */ e("div", { className: "flex items-center gap-6", children: p.map((f, d) => /* @__PURE__ */ h(
        "label",
        {
          className: "flex items-center gap-2 cursor-pointer select-none",
          children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "radio",
                name: "switch-field",
                required: l && d === 0,
                value: f.value,
                disabled: C,
                checked: c === f.value,
                onChange: () => n(f.value),
                className: "w-4 h-4  border-gray-300 cursor-pointer"
              }
            ),
            /* @__PURE__ */ e("span", { className: "text-sm text-gray-700 dark:text-white", children: f.label })
          ]
        },
        d
      )) })
    ] })
  ] }, r) });
}, me = [
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
function ea({
  label: c = "",
  value: n = "",
  name: o = "",
  parentClass: i = "",
  onChange: s,
  disabled: l = !1,
  required: r = !1,
  placeholder: C = "Phone number",
  search: L = !1,
  countriesList: p = !1,
  defaultCountry: f = ""
}) {
  const d = (v) => me.find((I) => I.code == v), [b, m] = R(
    d(f) || me[0]
  ), [u, y] = R(""), [w, S] = R(!1), [E, O] = R(""), M = ee();
  H(() => {
    if (typeof n == "string" && n.startsWith("+")) {
      const v = me.filter((I) => n.startsWith("+" + I.phone)).sort((I, D) => D.phone.length - I.phone.length)[0];
      if (v) {
        m(v), y(n.replace("+" + v.phone, ""));
        return;
      }
    }
    y(n);
  }, [n]);
  const j = (v) => {
    const I = v.target.value.replace(/\D/g, "");
    y(I), b && s && s("+" + b.phone + I);
  }, G = (v) => {
    m(v), s && s("+" + v.phone + u), S(!1), O("");
  };
  H(() => {
    const v = (I) => {
      M.current && !M.current.contains(I.target) && S(!1);
    };
    return document.addEventListener("mousedown", v), () => document.removeEventListener("mousedown", v);
  }, []);
  const x = me.filter(
    (v) => v.label.toLowerCase().includes(E.toLowerCase()) || v.phone.includes(E)
  );
  return p ? /* @__PURE__ */ e($, { children: /* @__PURE__ */ h("div", { className: i || "col-span-12", children: [
    /* @__PURE__ */ e(Z, { label: c, required: r }),
    /* @__PURE__ */ h("div", { className: "relative ", ref: M, children: [
      /* @__PURE__ */ h(
        "div",
        {
          className: `h-[40px] flex items-center border rounded-md px-2 bg-white dark:bg-gray-700 transition-all
  ${w ? "ring-0.5 ring-blue-100 border-blue-300" : "border-gray-300 dark:border-gray-600"}
  ${l ? "opacity-60 cursor-not-allowed" : ""}`,
          children: [
            /* @__PURE__ */ h(
              "button",
              {
                type: "button",
                disabled: l,
                onClick: () => S(!w),
                className: "flex items-center gap-1 pr-2 border-r border-gray-300 dark:border-gray-700 focus:outline-none",
                children: [
                  b ? /* @__PURE__ */ e(
                    "img",
                    {
                      src: `https://flagcdn.com/w20/${b.code.toLowerCase()}.png`,
                      alt: b.code,
                      className: "w-5 h-3 object-cover"
                    }
                  ) : /* @__PURE__ */ e("span", { className: "text-gray-400 text-xs", children: "🌐" }),
                  /* @__PURE__ */ e(Te, { className: "w-3 h-3 text-gray-500" })
                ]
              }
            ),
            b && /* @__PURE__ */ h("span", { className: "ml-2 text-sm text-gray-700 dark:text-gray-200 whitespace-nowrap", children: [
              "+",
              b.phone
            ] }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "tel",
                value: u,
                onChange: j,
                required: r,
                disabled: l || !b,
                placeholder: b ? C : "Select a country",
                className: "flex-1 ml-2 bg-transparent outline-none text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400"
              }
            ),
            /* @__PURE__ */ e(
              "input",
              {
                type: "tel",
                required: r,
                tabIndex: -1,
                readOnly: !0,
                value: b && u ? "+" + b.phone + u : "",
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
      w && /* @__PURE__ */ h("div", { className: "absolute top-full left-0 w-full mt-1 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 shadow-lg z-50 max-h-60 overflow-y-auto", children: [
        L && /* @__PURE__ */ e("div", { className: "p-2 border-b border-gray-200 dark:border-gray-700", children: /* @__PURE__ */ h("div", { className: "relative", children: [
          /* @__PURE__ */ e(Re, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" }),
          /* @__PURE__ */ e(
            "input",
            {
              type: "text",
              value: E,
              onChange: (v) => O(v.target.value),
              placeholder: "Search country...",
              className: "w-full pl-9 pr-3 py-2 text-sm border rounded-md bg-white dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none "
            }
          )
        ] }) }),
        x.map((v) => /* @__PURE__ */ h(
          "button",
          {
            type: "button",
            onClick: () => G(v),
            className: "w-full flex items-center gap-2 px-2 py-1 text-sm hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100",
            children: [
              /* @__PURE__ */ e(
                "img",
                {
                  src: `https://flagcdn.com/w20/${v.code.toLowerCase()}.png`,
                  alt: v.code,
                  className: "w-5 h-3 object-cover"
                }
              ),
              /* @__PURE__ */ h("span", { children: [
                v.label,
                " (+",
                v.phone,
                ")"
              ] })
            ]
          },
          v.code
        ))
      ] })
    ] })
  ] }, o) }) : /* @__PURE__ */ e($, { children: /* @__PURE__ */ h("div", { className: i || "col-span-12", children: [
    /* @__PURE__ */ e(Z, { label: c, required: r }),
    /* @__PURE__ */ e(
      "input",
      {
        type: "text",
        value: n,
        onChange: (I) => {
          const D = I.target.value.replace(/[^+\d]/g, ""), F = D.startsWith("+") ? "+" + D.replace(/[+]/g, "").slice(0) : D;
          s(F);
        },
        placeholder: C,
        disabled: l,
        required: r,
        className: `w-full h-10 px-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md \r
        bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none \r
        focus:ring-1 focus:ring-blue-300 dark:focus:ring-blue-200`,
        inputMode: "tel",
        pattern: "^\\+\\d{1,15}$"
      }
    )
  ] }, o) });
}
const Fe = Ce.forwardRef(
  ({ className: c = "", label: n, required: o, ...i }, s) => {
    const l = `
      placeholder-gray-400 dark:placeholder-gray-400
      ${c}
    `.trim();
    return /* @__PURE__ */ e($, { children: /* @__PURE__ */ h("div", { className: i.parentClass || "col-span-12", children: [
      /* @__PURE__ */ e(Z, { label: n, required: o }),
      /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ e(
        "textarea",
        {
          className: l,
          ref: s,
          required: o,
          ...i
        }
      ) })
    ] }, i.name) });
  }
);
Fe.displayName = "TextArea";
const aa = ({
  label: c = "",
  value: n = null,
  onChange: o,
  required: i = !1,
  accept: s = "image/*",
  id: l,
  dragDrop: r = !1,
  name: C = "",
  parentClass: L = ""
}) => {
  const [p, f] = R(n), [d, b] = R(!1), m = ee(null);
  H(() => (n instanceof File ? f({ file: n, preview: URL.createObjectURL(n) }) : (n != null && n.preview, f(n)), () => {
    p != null && p.preview && p.preview.startsWith("blob:") && URL.revokeObjectURL(p.preview);
  }), [n]);
  const u = (M) => {
    if (!M || M.length === 0)
      return;
    const j = M[0], G = URL.createObjectURL(j), x = { file: j, preview: G };
    p != null && p.preview && p.preview.startsWith("blob:") && URL.revokeObjectURL(p.preview), f(x), o == null || o(j);
  }, y = (M) => {
    M && M.stopPropagation(), p != null && p.preview && p.preview.startsWith("blob:") && URL.revokeObjectURL(p.preview), f(null), o == null || o(null), m.current && (m.current.value = "");
  }, w = (M) => {
    r && (M.preventDefault(), b(!0));
  }, S = (M) => {
    r && (M.preventDefault(), b(!1));
  }, E = (M) => {
    r && (M.preventDefault(), b(!1), u(M.dataTransfer.files));
  }, O = () => {
    m.current.click();
  };
  return /* @__PURE__ */ e($, { children: /* @__PURE__ */ h("div", { className: L || "col-span-12", children: [
    /* @__PURE__ */ e(Z, { label: c, required: i }),
    /* @__PURE__ */ h(
      "div",
      {
        className: `relative rounded-md p-2 transition-all ${d ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"}`,
        onDragOver: w,
        onDragLeave: S,
        onDrop: E,
        children: [
          /* @__PURE__ */ e(
            "input",
            {
              ref: m,
              id: l,
              type: "file",
              accept: s,
              onChange: (M) => u(M.target.files),
              required: i && !p,
              className: "absolute opacity-0 right-[50%] top-[80%] -translate-y-1/2 pointer-events-none h-[10px]"
            }
          ),
          /* @__PURE__ */ h(
            "div",
            {
              className: `flex items-center space-x-4 transition-all ${d ? "opacity-50" : ""}`,
              children: [
                p ? (
                  // Image preview with close button
                  /* @__PURE__ */ h("div", { className: "relative group", children: [
                    /* @__PURE__ */ e(
                      "img",
                      {
                        src: p.preview || p,
                        alt: "preview",
                        className: "object-cover w-20 h-20 rounded-full shadow-md"
                      }
                    ),
                    !i && /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        onClick: y,
                        className: "absolute top-0 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
                        "aria-label": "Remove image",
                        children: /* @__PURE__ */ e(oe, { icon: "mdi:close", className: "w-3 h-3" })
                      }
                    )
                  ] })
                ) : (
                  // Placeholder icon
                  /* @__PURE__ */ e("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ e(
                    oe,
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
                      onClick: O,
                      variant: "outlined",
                      color: "default",
                      children: p ? "Change Image" : "Select Image"
                    }
                  ),
                  r && !p && /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop" })
                ] })
              ]
            }
          ),
          r && d && /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-md", children: /* @__PURE__ */ e("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg", children: "Drop image here" }) })
        ]
      }
    )
  ] }, C) });
}, Be = Ce.forwardRef(
  ({
    label: c,
    required: n,
    parentClass: o = "",
    className: i = "",
    type: s = "text",
    onKeyDown: l,
    negativeNumberAllow: r = !0,
    ...C
  }, L) => {
    const [p, f] = R(!1), d = (m) => {
      if (s === "number") {
        if (["e", "E", "+"].includes(m.key)) {
          m.preventDefault();
          return;
        }
        if (r == !1 && m.key === "-") {
          m.preventDefault();
          return;
        }
        if (["ArrowUp", "ArrowDown"].includes(m.key)) {
          m.preventDefault();
          return;
        }
      }
      l == null || l(m);
    }, b = `
      h-10 placeholder-gray-400 dark:placeholder-gray-400
      ${s === "password" ? "pr-10" : ""}
      ${s === "number" ? "no-spinner" : ""}
      ${i}
    `.trim();
    return /* @__PURE__ */ e($, { children: /* @__PURE__ */ h("div", { className: o || "col-span-12", children: [
      /* @__PURE__ */ e(Z, { label: c, required: n }),
      /* @__PURE__ */ h("div", { className: "relative", children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: s === "password" && p ? "text" : s,
            ref: L,
            required: n,
            onKeyDown: d,
            className: b,
            ...C
          }
        ),
        s === "password" && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            tabIndex: -1,
            onClick: () => f((m) => !m),
            className: "absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200",
            children: /* @__PURE__ */ e(
              oe,
              {
                icon: p ? "mdi:eye-outline" : "mdi:eye-off-outline",
                className: "w-5 h-5"
              }
            )
          }
        )
      ] })
    ] }, C.name) });
  }
);
Be.displayName = "Input";
const ra = ({
  key: c,
  editorKey: n = "",
  value: o = "",
  onChange: i,
  label: s = "",
  required: l = !1,
  placeholder: r = "",
  parentClass: C = "col-span-12",
  height: L = 400,
  inline: p = !1,
  disabled: f = !1,
  plugins: d,
  toolbar: b,
  menubar: m = !1,
  fontFamily: u = "Inter, sans-serif",
  initConfig: y = {},
  imageUploadHandler: w
  // ✅ Promise function passed from parent
}) => /* @__PURE__ */ h("div", { className: C, children: [
  s && /* @__PURE__ */ e(Z, { label: s, required: l }),
  /* @__PURE__ */ e(
    qe,
    {
      apiKey: n,
      value: o,
      disabled: f,
      init: {
        height: L,
        inline: p,
        menubar: m,
        branding: !1,
        statusbar: !0,
        automatic_uploads: !0,
        images_upload_handler: (M) => new Promise((j, G) => {
          if (!w) {
            j(`data:${M.blob().type};base64,${M.base64()}`);
            return;
          }
          w(M).then((x) => {
            x ? j(x) : G("Upload failed: No URL returned");
          }).catch((x) => {
            G(
              typeof x == "string" ? x : (x == null ? void 0 : x.message) || "Image upload failed"
            );
          });
        }),
        plugins: d ?? [
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
        toolbar: b ?? "undo redo | blocks | bold italic underline forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media table | removeformat | code fullscreen preview",
        placeholder: r,
        content_style: `
            body {
                font-family: ${u};
            }
            `,
        ...y
      },
      onEditorChange: (M) => {
        i && i(M);
      }
    }
  )
] }, c), ta = ({
  name: c = "",
  label: n = "",
  // label for single checkbox
  options: o = [],
  // array of { label, value } for multiple
  value: i = null,
  // boolean for single, array for multiple, or string for single select
  onChange: s,
  disabled: l = !1,
  required: r = !1,
  parentClass: C = "col-span-12",
  className: L = "",
  multiSelect: p = !1
  // ✅ if true, only one option can be selected (like radio)
}) => {
  const f = Array.isArray(o) && o.length > 0, d = (u) => f ? p ? Array.isArray(i) && i.includes(u) : i === u : !!i, b = (u) => {
    s == null || s(u.target.checked, c);
  }, m = (u, y) => {
    if (s)
      if (!p)
        s(y ? u : "", c);
      else {
        const w = Array.isArray(i) ? [...i] : [];
        if (y)
          w.includes(u) || w.push(u);
        else {
          const S = w.indexOf(u);
          S > -1 && w.splice(S, 1);
        }
        s(w, c);
      }
  };
  return f ? /* @__PURE__ */ e($, { children: /* @__PURE__ */ h("div", { className: `${C}`, children: [
    /* @__PURE__ */ e(Z, { label: n, required: r }),
    /* @__PURE__ */ e("div", { className: "flex flex-col space-y-2", children: o.map((u, y) => /* @__PURE__ */ h("div", { className: "flex items-center", children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          name: c,
          value: u.value,
          checked: d(u.value),
          disabled: l || u.disabled,
          required: r && y === 0,
          onChange: (w) => m(u.value, w.target.checked),
          className: `h-4 w-4 cursor-pointer text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${L}`
        },
        c
      ),
      u.label && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: c,
          className: "ml-2 text-sm text-gray-700 dark:text-gray-200 select-none",
          children: u.label
        }
      )
    ] }, u.value || u.label)) })
  ] }) }) : /* @__PURE__ */ h("div", { className: `flex items-center ${C}`, children: [
    /* @__PURE__ */ e(
      "input",
      {
        type: "checkbox",
        name: c,
        checked: d(),
        disabled: l,
        required: r,
        onChange: b,
        className: `h-4 w-4 text-blue-600 cursor-pointer border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${L}`
      }
    ),
    n && /* @__PURE__ */ e(
      "label",
      {
        htmlFor: c,
        className: "ml-2 text-sm text-gray-700 dark:text-gray-200 select-none",
        children: n
      }
    )
  ] });
}, la = ({
  label: c = "",
  value: n = null,
  onChange: o,
  required: i = !1,
  accept: s = "audio/*",
  id: l,
  dragDrop: r = !1,
  name: C = "",
  parentClass: L = "",
  buttonComponent: p = null,
  buttonProps: f = {}
}) => {
  const [d, b] = R(null), [m, u] = R(!1), y = ee(null);
  H(() => {
    if (!n) {
      w(), b(null);
      return;
    }
    if (n instanceof File) {
      const x = URL.createObjectURL(n);
      return b({ file: n, preview: x }), () => {
        URL.revokeObjectURL(x);
      };
    } else typeof n == "string" ? b({ preview: n }) : n != null && n.preview && b(n);
  }, [n]);
  const w = () => {
    d != null && d.preview && d.preview.startsWith("blob:") && URL.revokeObjectURL(d.preview);
  }, S = (x) => {
    if (!x || x.length === 0)
      return;
    const v = x[0], I = URL.createObjectURL(v);
    w(), b({ file: v, preview: I }), o == null || o(v);
  }, E = (x) => {
    x && x.stopPropagation(), w(), b(null), o == null || o(null), y.current && (y.current.value = "");
  }, O = (x) => {
    r && (x.preventDefault(), u(!0));
  }, M = (x) => {
    r && (x.preventDefault(), u(!1));
  }, j = (x) => {
    r && (x.preventDefault(), u(!1), S(x.dataTransfer.files));
  }, G = () => {
    y.current.click();
  };
  return /* @__PURE__ */ h("div", { className: L || "col-span-12", children: [
    /* @__PURE__ */ e(Z, { label: c, required: i }),
    /* @__PURE__ */ h(
      "div",
      {
        className: `relative rounded-lg p-2 transition-all ${m ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"}`,
        onDragOver: O,
        onDragLeave: M,
        onDrop: j,
        children: [
          /* @__PURE__ */ e(
            "input",
            {
              ref: y,
              id: l,
              type: "file",
              accept: s,
              onChange: (x) => S(x.target.files),
              required: i && !d,
              className: "absolute opacity-0 right-[50%] top-[80%] -translate-y-1/2 pointer-events-none h-[10px]"
            }
          ),
          /* @__PURE__ */ e(
            "div",
            {
              className: `flex items-center space-x-4 transition-all ${m ? "opacity-50" : ""}`,
              children: d ? (
                // Audio player with close button and change button
                /* @__PURE__ */ h("div", { className: "flex items-center space-x-4", children: [
                  /* @__PURE__ */ h("div", { className: "relative w-full", children: [
                    !i && /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        onClick: E,
                        className: "absolute top-0 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800",
                        "aria-label": "Remove audio",
                        children: /* @__PURE__ */ e(oe, { icon: "mdi:close", className: "w-3 h-3" })
                      }
                    ),
                    /* @__PURE__ */ e("audio", { src: d.preview, controls: !0 }, d.preview)
                  ] }),
                  /* @__PURE__ */ e(Q, { type: "button", onClick: G, children: /* @__PURE__ */ e("span", { children: "Change Audio File" }) })
                ] })
              ) : (
                // Empty state with upload button
                /* @__PURE__ */ h("div", { className: "flex items-center justify-center space-x-4", children: [
                  /* @__PURE__ */ e("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ e(oe, { icon: "mdi:music", className: "text-gray-400 w-10 h-10" }) }),
                  /* @__PURE__ */ e(
                    Q,
                    {
                      type: "button",
                      onClick: G,
                      variant: "outlined",
                      children: /* @__PURE__ */ e("span", { children: "Choose Audio File" })
                    }
                  ),
                  r && /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop your audio file here" })
                ] })
              )
            }
          ),
          r && m && !d && /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-lg", children: /* @__PURE__ */ e("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg", children: "Drop audio here" }) })
        ]
      }
    )
  ] }, C);
}, Ee = ({ field: c, formData: n, handleChange: o }) => {
  const {
    key: i,
    label: s,
    type: l,
    options: r,
    placeholder: C,
    rows: L,
    inputClass: p,
    search: f,
    accept: d,
    text: b,
    required: m = !1,
    minLength: u,
    dragDrop: y,
    parentClass: w,
    countriesList: S,
    defaultCountry: E,
    multiple: O,
    dropdownMaxHeight: M,
    editorKey: j,
    fontFamily: G,
    disabled: x,
    negativeNumberAllow: v,
    defaultValue: I
  } = c;
  let D = n == null ? void 0 : n[i];
  D == null && (D = "");
  const F = C || (l === "select" ? `Select ${s}` : `Enter ${s}`), z = "w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm focus:outline-none focus:ring-1 focus:ring-blue-200 bg-white text-black dark:bg-gray-700 dark:text-white";
  switch (l) {
    case "select":
      return /* @__PURE__ */ e(
        Qe,
        {
          options: r || [],
          value: D,
          onChange: (A) => o(i, A),
          placeholder: F,
          className: p || "",
          search: f,
          required: m,
          defaultValue: I,
          label: s,
          name: i,
          disabled: x,
          parentClass: w,
          multiple: O,
          dropdownMaxHeight: M
        }
      );
    case "checkbox":
      return /* @__PURE__ */ e(
        ta,
        {
          name: i,
          label: s,
          options: r || [],
          value: D,
          onChange: (A) => o(i, A),
          required: m,
          parentClass: w,
          className: p || "",
          multiSelect: O,
          disabled: x
        }
      );
    case "switch":
      return /* @__PURE__ */ e(
        Xe,
        {
          value: D,
          onChange: (A) => o(i, A),
          text: b,
          options: r || [],
          label: s,
          required: m,
          name: i,
          disabled: x,
          parentClass: w
        }
      );
    case "phone":
      return /* @__PURE__ */ e(
        ea,
        {
          value: D,
          onChange: (A) => o(i, A),
          countriesList: S,
          defaultCountry: E,
          required: m,
          placeholder: F,
          search: f,
          label: s,
          name: i,
          disabled: x,
          parentClass: w
        }
      );
    case "textarea":
      return /* @__PURE__ */ e(
        Fe,
        {
          value: D,
          onChange: (A) => o(i, A.target.value),
          placeholder: F,
          rows: L || 3,
          className: `${z} ${p || ""}`,
          required: m,
          name: i,
          label: s,
          disabled: x,
          parentClass: w
        }
      );
    case "image":
      return /* @__PURE__ */ e(
        aa,
        {
          value: D,
          onChange: (A) => o(i, A),
          required: m,
          accept: d || "image/*",
          id: `file-${i}`,
          dragDrop: y,
          label: s,
          name: i,
          parentClass: w
        }
      );
    case "audio":
      return /* @__PURE__ */ e(
        la,
        {
          value: D,
          onChange: (A) => o(i, A),
          required: m,
          accept: d || "audio/*",
          id: `file-${i}`,
          dragDrop: y,
          label: s,
          name: i,
          parentClass: w
        }
      );
    case "tinyEditor":
      return /* @__PURE__ */ e(
        ra,
        {
          value: D,
          onChange: (A) => o(i, A),
          required: m,
          placeholder: F,
          label: s,
          parentClass: w,
          fontFamily: G,
          editorKey: j,
          disabled: x
        },
        `editor-${i}`
      );
    default:
      return /* @__PURE__ */ e(
        Be,
        {
          type: l || "text",
          value: D,
          onChange: (A) => o(i, A.target.value),
          placeholder: F,
          className: `${z} ${p || ""}`,
          required: m,
          name: i,
          minLength: u,
          label: s,
          negativeNumberAllow: v,
          parentClass: w,
          disabled: x
        }
      );
  }
}, na = ({ isOpen: c, onClose: n, config: o, onApply: i }) => {
  var p;
  const [s, l] = R({}), r = (f, d) => {
    l((b) => ({ ...b, [f]: d }));
  }, C = () => {
    i == null || i(s), n();
  }, L = () => {
    l({}), i == null || i({}), n();
  };
  return /* @__PURE__ */ h($, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: `fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${c ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
        onClick: n
      }
    ),
    /* @__PURE__ */ h(
      "div",
      {
        className: `fixed top-0 right-0 h-full w-[28rem] bg-white dark:bg-gray-900 shadow-2xl z-50 flex flex-col border-l border-gray-200 dark:border-gray-700
          transform transition-transform duration-300 ease-in-out
          ${c ? "translate-x-0" : "translate-x-full"}
        `,
        children: [
          /* @__PURE__ */ h("div", { className: "flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700", children: [
            /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: "Filters" }),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: n,
                className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition",
                children: /* @__PURE__ */ e(ye, { className: "w-5 h-5 text-gray-500 dark:text-gray-400" })
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 py-3", children: o != null && o.component ? /* @__PURE__ */ e(o.component, { filters: s, onFilterChange: r }) : /* @__PURE__ */ e("div", { className: "space-y-4", children: (p = o == null ? void 0 : o.fields) == null ? void 0 : p.map((f) => /* @__PURE__ */ e($, { children: /* @__PURE__ */ e(
            Ee,
            {
              field: f,
              formData: s,
              handleChange: r
            },
            f.key
          ) })) }) }),
          /* @__PURE__ */ h("div", { className: "flex gap-2 px-4 py-3 border-t border-gray-200 dark:border-gray-700", children: [
            /* @__PURE__ */ e(
              Q,
              {
                onClick: C,
                variant: "contained",
                color: "primary",
                fullWidth: !0,
                children: "Apply Filters"
              }
            ),
            /* @__PURE__ */ e(
              Q,
              {
                onClick: L,
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
}, De = {
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
}, Ae = {
  contained: "bg",
  outline: "border !bg-transparent",
  soft: "bg opacity-90"
}, $e = ({
  label: c,
  variant: n = "contained",
  // contained | outline | soft
  color: o = "green",
  className: i = ""
}) => {
  const s = De[o] || De.green, l = Ae[n] || Ae.contained, r = n === "outline" ? s.border : s.bg;
  return /* @__PURE__ */ e(
    "span",
    {
      className: `inline-flex justify-center items-center rounded-sm text-xs font-semibold px-3 py-1 min-w-[78px]
        ${r}
        ${l}
        ${i}`,
      children: c
    }
  );
}, oa = ({ rows: c = 5, columns: n = 5 }) => /* @__PURE__ */ h($, { children: [
  /* @__PURE__ */ e("div", { className: "w-full mb-6 inline-flex justify-end items-center", children: /* @__PURE__ */ e("div", { className: "h-8 w-80 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }),
  /* @__PURE__ */ e("div", { className: "overflow-hidden rounded-md border border-gray-200 dark:border-gray-800", children: /* @__PURE__ */ h("table", { className: "w-full border-collapse", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { className: "bg-gray-50 dark:bg-gray-900", children: Array.from({ length: n }).map((o, i) => /* @__PURE__ */ e("th", { className: "px-4 py-3", children: /* @__PURE__ */ e("div", { className: "h-6 w-24 bg-gray-300 dark:bg-gray-700 rounded animate-pulse  inline-flex justify-center items-center" }) }, i)) }) }),
    /* @__PURE__ */ e("tbody", { children: Array.from({ length: c }).map((o, i) => /* @__PURE__ */ e(
      "tr",
      {
        className: "border-t border-gray-200 dark:border-gray-800",
        children: Array.from({ length: n }).map((s, l) => /* @__PURE__ */ e("td", { className: "px-4 py-6", children: /* @__PURE__ */ e("div", { className: "h-6 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }, l))
      },
      i
    )) })
  ] }) })
] }), Ge = ({ src: c, alt: n = "preview", isOpen: o, setIsOpen: i }) => {
  const s = () => i(!1);
  return H(() => {
    const l = (r) => {
      r.key === "Escape" && s();
    };
    return o && (document.body.style.overflow = "hidden", document.addEventListener("keydown", l)), () => {
      document.body.style.overflow = "", document.removeEventListener("keydown", l);
    };
  }, [o]), /* @__PURE__ */ e($, { children: /* @__PURE__ */ h(
    "div",
    {
      className: `fixed inset-0 z-50 flex items-center justify-center bg-black/70 dark:bg-black/80 \r
                   backdrop-blur-sm animate-in fade-in duration-200`,
      onClick: s,
      children: [
        /* @__PURE__ */ e(
          "button",
          {
            onClick: s,
            className: `absolute top-4 right-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200\r
                     hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-2 shadow-lg transition`,
            children: /* @__PURE__ */ e(ye, { size: 20 })
          }
        ),
        /* @__PURE__ */ e(
          "div",
          {
            className: "max-w-5xl w-full px-4 transform transition-all duration-200 scale-95 animate-in zoom-in-95",
            onClick: (l) => l.stopPropagation(),
            children: /* @__PURE__ */ e(
              "img",
              {
                src: c,
                alt: n,
                className: "w-full max-h-[90vh] object-contain rounded-xl"
              }
            )
          }
        )
      ]
    }
  ) });
}, ia = ({ config: c }) => {
  const {
    data: n = [],
    table_head: o = [],
    loading: i = !1,
    search: s = {
      enabled: !1,
      placeholder: "Search...",
      useServerSideSearch: !1
    },
    filter: l = {
      enabled: !1,
      useServerSideFilters: !1
    },
    pagination: r = {
      enabled: !1,
      rows_per_page: 10,
      useServerSidePagination: !1
    },
    emptyMessage: C = "No data available",
    onMenuAction: L,
    setServerSidePaginationData: p = () => {
    },
    onFilterApply: f,
    filterConfig: d = null
  } = c, [b, m] = R(""), [u, y] = R(null), [w, S] = R([]), [E, O] = R({}), [M, j] = R(!1), [G, x] = R(null), [v, I] = R(!1), D = Me(() => !s.enabled || !b.trim() || s.useServerSideSearch ? n : Je(n, b, s.searchKeys || []), [n, b, s]), [F, z] = R(1), [A, Y] = R((r == null ? void 0 : r.rows_per_page) || 50), [ae, N] = R(D.length || 0), U = r != null && r.useServerSidePagination ? r.total_pages : Math.ceil(D.length / A), X = Me(() => {
    if (r.useServerSidePagination) return D;
    const t = (F - 1) * A;
    return D.slice(t, t + A);
  }, [D, F, A]), q = ee(null), le = ee({}), ie = ee(null), ne = (t) => {
    m(t), z(1), s.useServerSideSearch && (ie.current && clearTimeout(ie.current), ie.current = setTimeout(async () => {
      try {
        await p((g) => ({
          ...g,
          search: t,
          current_page: 1
        }));
      } catch (g) {
        console.error("Search error:", g);
      }
    }, 800));
  }, xe = (t, g, T) => {
    T.stopPropagation(), y(null), L == null || L(t.type, g);
  }, ve = (t, g, T) => {
    g.stopPropagation(), S(T);
    const K = g.currentTarget;
    le.current[t] = K;
    const _ = K.getBoundingClientRect(), J = 192, W = T.length * 40, re = window.innerWidth, k = window.innerHeight, B = re - _.right < J ? _.left - J + _.width : _.left, V = k - _.bottom < W && _.top > W ? _.top - W - 2 : _.bottom + 2;
    O({
      top: Math.max(8, Math.min(V, k - W - 8)),
      left: Math.max(8, Math.min(B, re - J - 8))
    }), y(u === t ? null : t);
  }, we = (t) => (F - 1) * A + t + 1, de = (t) => {
    x(t), I(!0);
  }, se = (t, g, T, K = null) => /* @__PURE__ */ e($, { children: t ? /* @__PURE__ */ e(
    "img",
    {
      src: t,
      alt: g || "Avatar",
      onClick: (_) => {
        _.stopPropagation(), _.preventDefault(), de({ src: t, alt: g });
      },
      className: `w-10 h-10 cursor-pointer rounded-full object-cover border border-gray-200 dark:border-gray-700 ${T || ""}`
    }
  ) : /* @__PURE__ */ e($, { children: K || /* @__PURE__ */ e(
    "div",
    {
      className: `w-10 h-10 flex items-center shrink-0 justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${T || ""}`,
      children: /* @__PURE__ */ e(Ie, { className: "w-6 h-6 text-gray-400 dark:text-gray-400" })
    }
  ) }) }), ce = (t, g) => /* @__PURE__ */ e($, { children: t ? /* @__PURE__ */ e(
    "audio",
    {
      controls: !0,
      src: t,
      onClick: (T) => {
        T.stopPropagation();
      },
      className: `w-64 cursor-pointer ${g || ""}`
    },
    t
  ) : /* @__PURE__ */ e($, { children: /* @__PURE__ */ e(
    "div",
    {
      className: `w-12 h-12 flex items-center shrink-0 justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${g || ""}`,
      children: /* @__PURE__ */ e(Ye, { className: "w-6 h-6 text-gray-400 dark:text-gray-400" })
    }
  ) }) }), he = (t, g) => /* @__PURE__ */ h("div", { className: `flex items-center space-x-4 ${g.className || ""}`, children: [
    g.imageKey ? se(t[g.imageKey], t[g.titleKey], "group-avatar") : "",
    /* @__PURE__ */ h("div", { children: [
      /* @__PURE__ */ e("p", { className: "font-medium text-gray-900 dark:text-white group-title", children: t[g.titleKey] || "" }),
      /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400 group-sub-title", children: t[g.subtitleKey] || "" })
    ] })
  ] }), ue = (t, g) => {
    var J;
    let T = String(t);
    const K = g.variant || "contained";
    let _ = g.defaultColor;
    if (((J = g == null ? void 0 : g.chipOptions) == null ? void 0 : J.length) > 0) {
      let W = g == null ? void 0 : g.chipOptions.find((re) => re.value == t);
      W && (T = W.label, _ = W.color);
    }
    return /* @__PURE__ */ e(
      $e,
      {
        label: T,
        variant: K,
        color: _,
        className: g.className || ""
      }
    );
  }, pe = (t, g, T) => {
    const K = g[t.key];
    return t.type === "menu_actions" ? /* @__PURE__ */ e("div", { className: `text-center ${t.className || ""}`, children: /* @__PURE__ */ e(
      "button",
      {
        ref: (_) => le.current[g.id || g._id] = _,
        onClick: (_) => ve(g.id || g._id, _, t.menuList),
        className: "p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition text-gray-700 dark:text-gray-300",
        children: /* @__PURE__ */ e(He, { className: "h-4 w-4" })
      }
    ) }) : t.type === "index" ? /* @__PURE__ */ e("span", { className: t.className || "", children: we(T) }) : t.type === "group" ? he(g, t) : t.type === "chip" ? /* @__PURE__ */ e($, { children: ue(K, t) }) : t.type === "date" ? /* @__PURE__ */ e("span", { className: t.className || "", children: Oe(K, t.format || "DD MMM YYYY") }) : t.type === "avatar" ? /* @__PURE__ */ e($, { children: /* @__PURE__ */ e("div", { className: "min-w-[40px]", children: se(K, t.alt, t.className, t.fallback_icon) }) }) : t.type === "audio" ? /* @__PURE__ */ e($, { children: ce(K, t.className) }) : /* @__PURE__ */ e("span", { className: t.className || "", children: K || "N/A" });
  }, be = (t, g) => {
    if (t.onClickDetails)
      return L == null ? void 0 : L("view", g);
    if (typeof t.handleClick == "function")
      return t.handleClick(g);
  }, ge = (t) => t.onClickDetails || typeof t.handleClick == "function";
  return H(() => {
    const t = () => {
      u && y(null);
    };
    return window.addEventListener("scroll", t, !0), () => {
      window.removeEventListener("scroll", t, !0);
    };
  }, [u]), H(() => {
    const t = (g) => {
      q.current && !q.current.contains(g.target) && y(null);
    };
    return document.addEventListener("click", t), () => document.removeEventListener("click", t);
  }, []), H(() => {
    r != null && r.rows_per_page && (r != null && r.useServerSidePagination) && Y((r == null ? void 0 : r.rows_per_page) || 50), r.current_page && z(r.current_page);
  }, [
    r.rows_per_page,
    r == null ? void 0 : r.useServerSidePagination,
    r.current_page
  ]), H(() => {
    N(
      r != null && r.useServerSidePagination ? r.total_records : D.length
    ), D.length <= A * (F - 1) && !(r != null && r.useServerSidePagination) && z((t) => t - 1 || 1);
  }, [
    D.length,
    r.total_records,
    r == null ? void 0 : r.useServerSidePagination
  ]), i ? /* @__PURE__ */ e(oa, { rows: 6, columns: 6 }) : /* @__PURE__ */ h($, { children: [
    /* @__PURE__ */ h("div", { className: "flex justify-end items-center mb-4 gap-2", children: [
      s.enabled && /* @__PURE__ */ e("div", { className: "", children: /* @__PURE__ */ h("div", { className: "relative min-w-[300px]", children: [
        /* @__PURE__ */ e(Re, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-300" }),
        /* @__PURE__ */ e(
          "input",
          {
            type: "text",
            placeholder: s.placeholder || "Search...",
            value: b,
            onChange: (t) => ne(t.target.value),
            className: "w-full h-[36px] pl-9 pr-4 py-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-300 dark:ring-blue-200 disabled:opacity-50"
          }
        )
      ] }) }),
      d && l.enabled && /* @__PURE__ */ h(Q, { onClick: () => j(!0), variant: "contained", children: [
        /* @__PURE__ */ e(Ke, { className: "w-4 h-4 mr-2" }),
        "Filters"
      ] })
    ] }),
    /* @__PURE__ */ h("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-700", children: [
      /* @__PURE__ */ e("div", { className: "overflow-x-auto", children: /* @__PURE__ */ h("table", { className: "min-w-full divide-y divide-gray-200 dark:divide-gray-700", children: [
        /* @__PURE__ */ e("thead", { className: "bg-gray-50 dark:bg-gray-700/60", children: /* @__PURE__ */ e("tr", { children: o.map((t) => /* @__PURE__ */ e(
          "th",
          {
            className: `px-6 py-4 text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider min-w-max max-w-[180px] truncate ${t.headClass || ""}`,
            children: t.title
          },
          t.key
        )) }) }),
        /* @__PURE__ */ e("tbody", { className: "bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700", children: X.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e(
          "td",
          {
            colSpan: o.length,
            className: "text-center py-10 text-gray-500 dark:text-gray-400",
            children: C
          }
        ) }) : X.map((t, g) => /* @__PURE__ */ e(
          "tr",
          {
            className: "hover:bg-gray-50 dark:hover:bg-blue-800/10 transition",
            children: o.map((T) => /* @__PURE__ */ e(
              "td",
              {
                className: `px-6 py-4 text-sm text-gray-900 dark:text-gray-100 min-w-max ${T.type == "audio" ? "" : "max-w-[300px]"} truncate ${ge(T) ? "cursor-pointer" : ""}`,
                title: String(t[T.key] ?? ""),
                onClick: () => be(T, t),
                children: T.render ? T.render(t, g) : pe(T, t, g)
              },
              T.key
            ))
          },
          t.id || t._id || g
        )) })
      ] }) }),
      (r == null ? void 0 : r.enabled) && D.length > 0 && /* @__PURE__ */ h("div", { className: " bg-gray-50 dark:bg-gray-700/60 px-6 py-3 flex flex-wrap items-center justify-between border-t border-gray-200 dark:border-gray-600 gap-3", children: [
        /* @__PURE__ */ h("div", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
          "Showing ",
          (F - 1) * A + 1,
          " to",
          " ",
          Math.min(F * A, ae),
          " of ",
          ae,
          " ",
          "results"
        ] }),
        /* @__PURE__ */ h("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ h("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Rows per page:" }),
            /* @__PURE__ */ e(
              "select",
              {
                value: A,
                onChange: (t) => {
                  const g = Number(t.target.value);
                  Y(g), z(1), r.useServerSidePagination && p((T) => ({
                    ...T,
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
                  if (F > 1) {
                    const t = F - 1;
                    z(t), r.useServerSidePagination && p((g) => ({
                      ...g,
                      current_page: t
                    }));
                  }
                },
                disabled: F === 1,
                className: "p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition text-gray-500 dark:text-gray-300 disabled:opacity-50",
                children: /* @__PURE__ */ e(Ue, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ h("span", { className: "text-sm text-gray-800 dark:text-gray-200", children: [
              "Page ",
              F,
              " of ",
              U
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => {
                  if (F < U) {
                    const t = F + 1;
                    z(t), r.useServerSidePagination && p((g) => ({
                      ...g,
                      current_page: t
                    }));
                  }
                },
                disabled: F === U,
                className: "p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition text-gray-500 dark:text-gray-300 disabled:opacity-50",
                children: /* @__PURE__ */ e(ze, { className: "h-4 w-4" })
              }
            )
          ] })
        ] })
      ] })
    ] }),
    u && We(
      /* @__PURE__ */ e(
        "div",
        {
          ref: q,
          style: {
            position: "fixed",
            top: `${E.top}px`,
            left: `${E.left}px`,
            zIndex: 9999
          },
          className: "w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg border border-gray-200 dark:border-gray-600",
          children: w.map((t, g) => /* @__PURE__ */ h(
            "button",
            {
              onClick: (T) => xe(
                t,
                n.find(
                  (K) => K.id === u || K._id == u
                ),
                T
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
    d && /* @__PURE__ */ e(
      na,
      {
        isOpen: M,
        onClose: () => j(!1),
        config: d,
        onApply: f
      }
    ),
    v && /* @__PURE__ */ e(
      Ge,
      {
        src: G.src,
        alt: G.alt,
        isOpen: v,
        setIsOpen: I
      }
    )
  ] });
}, fe = ({
  isOpen: c,
  onClose: n,
  icon: o,
  title: i,
  children: s,
  size: l = "md",
  actionButtons: r = [],
  actions: C,
  showDefaultClose: L = !0,
  footerConfig: p = null,
  hideFooter: f = !1,
  onFormSubmit: d = () => {
  },
  onCancel: b,
  loadingBtn: m = !1,
  executeFunction: u = () => {
  },
  selectedItem: y = null
}) => {
  if (!c) return null;
  const w = {
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
        onClick: () => n()
      }
    ),
    /* @__PURE__ */ h(
      "div",
      {
        className: `relative bg-white rounded-lg shadow-xl w-full ${w[l] || w.md} max-h-[90vh] flex flex-col dark:bg-gray-800`,
        children: [
          /* @__PURE__ */ h("div", { className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0", children: [
            /* @__PURE__ */ h("div", { className: "flex items-center gap-1", children: [
              o && /* @__PURE__ */ e("span", { children: o }),
              /* @__PURE__ */ e("h3", { className: "text-lg font-medium text-gray-900 dark:text-white", children: i })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => n(),
                className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
                children: /* @__PURE__ */ e(ye, { className: "w-6 h-6" })
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto p-4", children: s }),
          r.length > 0 && /* @__PURE__ */ e("div", { className: "px-4 py-3 flex justify-end gap-3 border-t border-gray-200 dark:border-gray-700 sm:px-6", children: r.map((S) => /* @__PURE__ */ e(
            Q,
            {
              onClick: (E) => {
                S.type == "submit" ? d(E) : u(
                  () => {
                    var O;
                    return (O = S == null ? void 0 : S.onClick) == null ? void 0 : O.call(S, E, y);
                  },
                  (O) => n == null ? void 0 : n(O)
                );
              },
              disabled: m || S.disabled,
              variant: S.variant || "contained",
              color: S.color || "primary",
              className: `min-w-[100px] ${S.className}`,
              type: S.type || "button",
              children: m ? /* @__PURE__ */ h("div", { className: "flex items-center", children: [
                /* @__PURE__ */ e("div", { className: "animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-2 border-t-white mr-2" }),
                S.label || "Submit",
                "..."
              ] }) : S.label || "Submit"
            }
          )) })
        ]
      }
    )
  ] });
}, Pe = ({ config: c, onSubmit: n, initialData: o = {}, type: i = "add" }) => {
  const { formClass: s = "grid grid-cols-12 gap-4", formFields: l = [] } = c || {}, [r, C] = R(o);
  H(() => {
    C(o);
  }, []);
  const L = (f, d) => {
    C((b) => ({ ...b, [f]: d }));
  }, p = (f) => {
    f.preventDefault();
    const d = f.target;
    if (!d.checkValidity()) {
      d.reportValidity();
      return;
    }
    n(r);
  };
  return /* @__PURE__ */ e(
    "form",
    {
      id: i == "add" ? "addForm" : i == "edit" ? "editForm" : "defaultForm",
      onSubmit: p,
      className: s,
      noValidate: !1,
      children: l.map((f) => /* @__PURE__ */ e($, { children: /* @__PURE__ */ e(
        Ee,
        {
          field: f,
          formData: r,
          handleChange: L
        },
        f.key
      ) }))
    }
  );
};
function sa({ data: c, config: n }) {
  const { fields: o, containerClass: i } = n, [s, l] = R(null), [r, C] = R(!1), L = (d) => {
    l(d), C(!0);
  }, p = ({ col: d }) => {
    var E;
    let b = d == null ? void 0 : d.icon, m = d.label, u = c[d.key], y = d.type, w = d.variant || "outline", S = d.defaultColor;
    if (y === "chip" && ((E = d.chipOptions) == null ? void 0 : E.length) > 0) {
      let O = d == null ? void 0 : d.chipOptions.find((M) => M.value == u);
      O && (u = O.label, S = O.color);
    }
    return /* @__PURE__ */ h(
      "div",
      {
        className: `col-span-12 flex items-center space-x-4 p-4 rounded-xl 
                  bg-gray-100 dark:bg-gray-900 ${d.blockClass || ""}`,
        children: [
          b && /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: b }),
          /* @__PURE__ */ h("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ e("p", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: m }),
            y === "chip" ? /* @__PURE__ */ e(
              $e,
              {
                label: u,
                variant: w,
                color: S,
                className: "mt-1"
              }
            ) : (
              /* TINY EDITOR */
              y === "tinyEditor" ? /* @__PURE__ */ e(
                "p",
                {
                  className: "mt-1 text-sm text-gray-900 dark:text-white break-words",
                  dangerouslySetInnerHTML: {
                    __html: u
                  }
                }
              ) : y === "audio" ? u ? /* @__PURE__ */ e(
                "audio",
                {
                  controls: !0,
                  src: u,
                  onClick: (O) => O.stopPropagation(),
                  className: "shadow-md rounded-full"
                },
                u
              ) : /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-gray-400", children: "N/A" }) : (
                /* DEFAULT */
                /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-gray-900 dark:text-white break-words", children: y == "date" ? /* @__PURE__ */ e("span", { children: Oe(u, d.format || "DD MMM YYYY") }) : u || "N/A" })
              )
            )
          ] })
        ]
      }
    );
  }, f = ({ col: d }) => {
    let b = c[d.titleKey], m = c[d.subtitleKey], u = c[d.imageKey], y = c[d.fallback_icon];
    return /* @__PURE__ */ h(
      "div",
      {
        className: `col-span-12 flex items-center space-x-4 p-4 rounded-xl 
      bg-gray-100 dark:bg-gray-900 
      ${d.blockClass}`,
        children: [
          u ? /* @__PURE__ */ e(
            "img",
            {
              src: u,
              alt: b,
              onClick: () => L({ src: u, alt: b }),
              className: "w-16 h-16 cursor-pointer rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
            }
          ) : y || /* @__PURE__ */ e("div", { className: "w-16 h-16 flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600", children: /* @__PURE__ */ e(Ie, { className: "w-8 h-8 text-gray-400" }) }),
          /* @__PURE__ */ h("div", { children: [
            /* @__PURE__ */ e("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: b }),
            /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: m })
          ] })
        ]
      }
    );
  };
  return /* @__PURE__ */ h($, { children: [
    r && /* @__PURE__ */ e(
      Ge,
      {
        src: s.src,
        alt: s.alt,
        isOpen: r,
        setIsOpen: C
      }
    ),
    /* @__PURE__ */ e("div", { className: `grid grid-cols-12 gap-4 ${i || ""}`, children: o.map(
      (d) => d.type == "group" ? /* @__PURE__ */ e(f, { col: d }) : /* @__PURE__ */ e(p, { col: d })
    ) })
  ] });
}
const je = ({ config: c }) => {
  var de, se, ce, he, ue, pe, be, ge, t, g, T, K, _, J, W, re;
  const {
    title: n,
    fetchData: o = async () => {
    },
    isStaticData: i = !1,
    tableConfig: s = {},
    modalConfig: l = {},
    filterConfig: r
  } = c, [C, L] = R(!0), [p, f] = R(!1), [d, b] = R([]), [m, u] = R(null), [y, w] = R({
    search: "",
    rows_per_page: 50,
    current_page: 1
  }), [S, E] = R({}), [O, M] = R(!1), [j, G] = R(!1), [x, v] = R(!1), [I, D] = R(!1), [F, z] = R(!1), [A, Y] = R(null), ae = (k, P) => {
    k === "edit" ? (Y(P), v(!0)) : k === "view" ? (Y(P), z(!0)) : k === "delete" && (Y(P), D(!0));
  }, N = async (k, P, B = "", te = "") => {
    f(!0);
    try {
      const V = await (k == null ? void 0 : k());
      (B || V.message) && ke(B || V.message, {
        variant: "success"
      }), P == null || P(V);
    } catch (V) {
      (te || V.message) && ke(te || V.message, { variant: "error" });
    } finally {
      f(!1);
    }
  }, U = (k) => {
    let P = k.newObject;
    i ? (b((B) => [P, ...B]), u((B) => ({
      ...B,
      current_page: 1
    }))) : (w((B) => ({
      ...B,
      current_page: 1
    })), y.current_page == 1 && ne()), G(!1);
  }, X = (k) => {
    let P = k.newObject, B = k.targetObject;
    i ? b(
      (te) => te.map(
        (V) => V.id === B.id ? { ...V, ...P } : V
      )
    ) : ne(), v(!1);
  }, q = (k) => {
    if (!k) {
      D(!1), Y(null);
      return;
    }
    i ? b(
      (P) => P.filter((B) => B.id !== k.targetObject.id)
    ) : d.length == 1 && y.current_page > 1 ? w((P) => ({
      ...P,
      current_page: P.current_page - 1
    })) : ne(), D(!1), Y(null);
  }, le = (k) => N(
    () => {
      var P, B;
      return (B = (P = l == null ? void 0 : l.addModal) == null ? void 0 : P.handleSubmit) == null ? void 0 : B.call(P, k);
    },
    U
  ), ie = (k) => N(
    () => {
      var P, B;
      return (B = (P = l == null ? void 0 : l.editModal) == null ? void 0 : P.handleSubmit) == null ? void 0 : B.call(P, k, A);
    },
    X
  ), ne = async () => {
    L(!0), o == null || o({ ...y, ...S }).then((k) => {
      b(k.data), u(k.pagination);
    }).catch((k) => {
      ke(k.message, { variant: "error" });
    }).finally(() => {
      L(!1);
    });
  }, xe = (k) => {
    var P;
    E((B) => ({
      ...k
    })), (P = s == null ? void 0 : s.filter) != null && P.useServerSideFilters && M((B) => !B);
  }, ve = (k, P) => k.filter(
    (B) => Object.entries(P).every(([te, V]) => B[te] === V)
  ), we = Me(() => {
    var k;
    return (k = s == null ? void 0 : s.filter) != null && k.useServerSideFilters ? d : ve(d, S);
  }, [d, S]);
  return H(() => {
    ne();
  }, [
    y.search,
    y.rows_per_page,
    y.current_page,
    O
  ]), /* @__PURE__ */ e(
    Ze,
    {
      maxSnack: 3,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right"
      },
      autoHideDuration: 3e3,
      action: (k) => /* @__PURE__ */ e(
        "button",
        {
          onClick: () => {
            window.dispatchEvent(
              new CustomEvent("closeSnackbar", { detail: k })
            );
          },
          className: "p-1 hover:bg-white/20 rounded-full transition-colors duration-200 text-white flex items-center justify-center",
          children: /* @__PURE__ */ e(ye, { className: "h-4 w-4" })
        }
      ),
      children: /* @__PURE__ */ h("div", { children: [
        /* @__PURE__ */ h("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3", children: [
          /* @__PURE__ */ h("div", { children: [
            /* @__PURE__ */ e("h1", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: n }),
            /* @__PURE__ */ e("p", { className: "text-md text-gray-600 dark:text-gray-400", children: c == null ? void 0 : c.description })
          ] }),
          /* @__PURE__ */ e("div", { className: "flex items-center space-x-3", children: /* @__PURE__ */ h(
            Q,
            {
              onClick: () => G(!0),
              variant: "contained",
              color: "primary",
              children: [
                /* @__PURE__ */ e(Ve, { className: "w-4 h-4 mr-2" }),
                c.buttonText || "Add New"
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ e(
          ia,
          {
            config: {
              ...s,
              pagination: {
                ...s.pagination,
                ...m
              },
              data: we,
              setServerSidePaginationData: w,
              onMenuAction: ae,
              filterConfig: r,
              onFilterApply: xe,
              loading: C
            }
          }
        ),
        /* @__PURE__ */ e(
          fe,
          {
            isOpen: j,
            onClose: () => {
              p || G(!1);
            },
            icon: (de = l.addModal) == null ? void 0 : de.icon,
            title: ((se = l.addModal) == null ? void 0 : se.title) || "Add New",
            size: ((ce = l.addModal) == null ? void 0 : ce.size) || "md",
            onFormSubmit: () => {
              var k;
              return (k = document.querySelector("#addForm")) == null ? void 0 : k.requestSubmit();
            },
            loadingBtn: p,
            actionButtons: l.addModal.actionButtons,
            children: /* @__PURE__ */ e(
              Pe,
              {
                config: (l == null ? void 0 : l.addModal) || [],
                onSubmit: le,
                initialData: {},
                type: "add",
                loading: p
              }
            )
          }
        ),
        /* @__PURE__ */ e(
          fe,
          {
            isOpen: x,
            onClose: () => {
              p || v(!1);
            },
            icon: (he = l.editModal) == null ? void 0 : he.icon,
            title: ((ue = l.editModal) == null ? void 0 : ue.title) || "Edit",
            size: ((pe = l.editModal) == null ? void 0 : pe.size) || "md",
            onFormSubmit: () => {
              var k;
              return (k = document.querySelector("#editForm")) == null ? void 0 : k.requestSubmit();
            },
            actionButtons: l.editModal.actionButtons,
            loadingBtn: p,
            children: /* @__PURE__ */ e(
              Pe,
              {
                config: l.editModal || [],
                onSubmit: ie,
                initialData: A,
                type: "edit",
                loading: p
              }
            )
          }
        ),
        I && /* @__PURE__ */ e(
          fe,
          {
            isOpen: I,
            onClose: (k) => {
              q(k);
            },
            icon: ((be = l.deleteModal) == null ? void 0 : be.icon) || /* @__PURE__ */ e(oe, { icon: "ph:warning-bold", className: "w-6 h-6 text-red-500" }),
            title: ((ge = l.deleteModal) == null ? void 0 : ge.title) || "Confirm Delete",
            size: ((t = l.deleteModal) == null ? void 0 : t.size) || "md",
            loading: p,
            actionButtons: l.deleteModal.actionButtons,
            executeFunction: N,
            selectedItem: A,
            children: /* @__PURE__ */ e("div", { className: "flex items-center space-x-2 py-3", children: /* @__PURE__ */ h("div", { children: [
              /* @__PURE__ */ e("p", { className: "text-md text-gray-700 dark:text-white", children: ((g = l.deleteModal) == null ? void 0 : g.confirmText) || "Are you sure you want to delete this item?" }),
              ((T = l.deleteModal) == null ? void 0 : T.referenceKey) && /* @__PURE__ */ e("p", { className: "text-md font-semibold text-gray-700 dark:text-white", children: A[(K = l.deleteModal) == null ? void 0 : K.referenceKey] })
            ] }) })
          }
        ),
        l.viewModal && /* @__PURE__ */ e(
          fe,
          {
            isOpen: F,
            onClose: () => {
              z(!1), Y(null);
            },
            icon: (_ = l.viewModal) == null ? void 0 : _.icon,
            title: ((J = l.viewModal) == null ? void 0 : J.title) || "View Details",
            size: ((W = l.viewModal) == null ? void 0 : W.size) || "lg",
            footerConfig: l == null ? void 0 : l.viewModal.footer,
            children: (re = l.viewModal) != null && re.component ? /* @__PURE__ */ e(l.viewModal.component, { data: A }) : /* @__PURE__ */ e(
              sa,
              {
                data: A,
                config: l.viewModal || {}
              }
            )
          }
        )
      ] })
    }
  );
}, Le = a.shape({
  value: a.oneOfType([
    a.string,
    a.number,
    a.bool
  ]).isRequired,
  label: a.string.isRequired,
  color: a.string
}), Ne = a.shape({
  type: a.string.isRequired,
  label: a.string.isRequired,
  color: a.string,
  variant: a.string,
  onClick: a.func
}), da = a.shape({
  title: a.string.isRequired,
  type: a.string.isRequired,
  variant: a.string,
  icon: a.node
}), ca = a.shape({
  key: a.string.isRequired,
  title: a.string,
  type: a.string,
  imageKey: a.string,
  titleKey: a.string,
  subtitleKey: a.string,
  onClickDetails: a.bool,
  variant: a.string,
  chipOptions: a.arrayOf(Le),
  defaultColor: a.string,
  className: a.string,
  format: a.string,
  menuList: a.arrayOf(da)
}), Se = a.shape({
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
  options: a.arrayOf(Le)
}), ha = a.shape({
  key: a.string,
  label: a.string,
  type: a.string,
  imageKey: a.string,
  titleKey: a.string,
  subtitleKey: a.string,
  blockClass: a.string,
  icon: a.node,
  variant: a.string,
  chipOptions: a.arrayOf(Le),
  defaultColor: a.string,
  className: a.string,
  format: a.string
});
je.propTypes = {
  config: a.shape({
    title: a.string.isRequired,
    description: a.string,
    buttonText: a.string,
    fetchData: a.func.isRequired,
    isStaticData: a.bool,
    /* ================= TABLE CONFIG ================= */
    tableConfig: a.shape({
      table_head: a.arrayOf(ca).isRequired,
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
        formFields: a.arrayOf(Se),
        handleSubmit: a.func.isRequired,
        actionButtons: a.arrayOf(Ne)
      }),
      editModal: a.shape({
        title: a.string.isRequired,
        size: a.string,
        formClass: a.string,
        formFields: a.arrayOf(Se),
        handleSubmit: a.func.isRequired,
        actionButtons: a.arrayOf(Ne)
      }),
      deleteModal: a.shape({
        title: a.string.isRequired,
        size: a.string,
        confirmText: a.string,
        referenceKey: a.string,
        actionButtons: a.arrayOf(Ne)
      }),
      viewModal: a.shape({
        title: a.string.isRequired,
        size: a.string,
        // 👇 This covers your commented code:
        component: a.elementType,
        // for custom component like TeamMemberDetail
        fields: a.arrayOf(ha),
        footer: a.shape({
          cancelButton: a.bool,
          cancelText: a.string
        })
      })
    }),
    /* ================= FILTER CONFIG ================= */
    filterConfig: a.shape({
      fields: a.arrayOf(Se)
    })
  }).isRequired
};
const ua = () => {
  if (typeof document > "u" || document.getElementById("react-admin-crud-manager-styles")) return;
  const c = document.createElement("style");
  c.id = "react-admin-crud-manager-styles";
  const n = `
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
  c.textContent = n, document.head.appendChild(c);
};
function wa(c) {
  return H(() => {
    ua();
  }, []), /* @__PURE__ */ e($, { children: /* @__PURE__ */ e(je, { config: c.config }) });
}
export {
  wa as default
};
//# sourceMappingURL=index.es.js.map
