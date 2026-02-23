import { jsx as e, Fragment as E, jsxs as h } from "react/jsx-runtime";
import Ce, { useState as M, useRef as Z, useEffect as U, useMemo as Me } from "react";
import { ChevronDown as Pe, Search as De, Check as Ke, X as fe, Filter as _e, ChevronLeft as Ue, ChevronRight as ze, EllipsisVertical as He, User as Ie, Music as Ye, Plus as Ve } from "lucide-react";
import { createPortal as qe } from "react-dom";
import { Icon as ye } from "@iconify/react";
import { Editor as We } from "@tinymce/tinymce-react";
import { SnackbarProvider as Ze, enqueueSnackbar as ke } from "notistack";
import a from "prop-types";
const Oe = (c, s = "DD MMM YYYY") => {
  if (!c) return "N/A";
  const n = new Date(c);
  if (isNaN(n)) return "Invalid Date";
  const o = (r) => String(r).padStart(2, "0"), i = {
    YYYY: n.getFullYear(),
    YY: String(n.getFullYear()).slice(-2),
    MMMM: n.toLocaleString("en-US", { month: "long" }),
    MMM: n.toLocaleString("en-US", { month: "short" }),
    MM: o(n.getMonth() + 1),
    M: n.getMonth() + 1,
    DD: o(n.getDate()),
    D: n.getDate(),
    dddd: n.toLocaleString("en-US", { weekday: "long" }),
    ddd: n.toLocaleString("en-US", { weekday: "short" }),
    HH: o(n.getHours()),
    hh: o(n.getHours() % 12 || 12),
    mm: o(n.getMinutes()),
    ss: o(n.getSeconds()),
    A: n.getHours() >= 12 ? "PM" : "AM"
  };
  return s.replace(
    /YYYY|YY|MMMM|MMM|MM|M|DD|D|dddd|ddd|HH|hh|mm|ss|A/g,
    (r) => i[r]
  );
}, Je = (c, s, n = []) => {
  if (!(s != null && s.trim())) return c;
  const o = s.toLowerCase(), i = (r) => r == null ? [] : typeof r == "object" ? Object.values(r).flatMap(i) : [String(r)];
  return c.filter((r) => {
    let l = [];
    return n.length > 0 ? n.forEach((N) => {
      r[N] !== void 0 && l.push(...i(r[N]));
    }) : l = i(r), l.some(
      (N) => N.toLowerCase().includes(o)
    );
  });
}, ae = Ce.forwardRef(
  ({
    className: c = "",
    variant: s = "contained",
    color: n = "default",
    size: o = "default",
    fullWidth: i = !1,
    children: r,
    ...l
  }, N) => {
    var u;
    const C = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", p = {
      sm: "h-8 px-3 rounded-md text-sm",
      md: "h-9 px-4 rounded-md text-sm",
      lg: "h-11 px-6 rounded-md text-base",
      xl: "h-12 px-8 rounded-lg text-lg",
      default: "h-9 px-4 rounded-md text-sm"
    }, y = {
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
    }, d = ((u = y[n]) == null ? void 0 : u[s]) || y.default.contained, m = p[o], f = `
      ${C} 
      ${d} 
      ${m} 
      ${i ? "w-full" : ""} 
      ${c}
    `.trim();
    return /* @__PURE__ */ e(
      "button",
      {
        ref: N,
        type: l.type || "button",
        className: f,
        ...l,
        children: r
      }
    );
  }
);
ae.displayName = "Button";
function V({ label: c, required: s = !1 }) {
  return /* @__PURE__ */ e(E, { children: /* @__PURE__ */ h("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: [
    c,
    s && /* @__PURE__ */ e("span", { className: "ml-1", children: "*" })
  ] }) });
}
const Qe = ({
  options: c = [],
  value: s,
  onChange: n,
  placeholder: o = "Select option",
  className: i = "",
  disabled: r = !1,
  search: l = !1,
  label: N = "",
  required: C = !1,
  name: p = "",
  parentClass: y = "",
  multiple: d = !1,
  // ✅ NEW
  dropdownMaxHeight: m = ""
}) => {
  var $;
  const [f, u] = M(!1), [w, k] = M(""), [D, x] = M(!0), R = Z(null), O = Z(null), j = (b) => String(typeof b == "boolean" ? b : b ?? ""), _ = d ? (s || []).map(j) : j(s), F = c.filter(
    (b) => b.label.toLowerCase().includes(w.toLowerCase())
  ), S = (b) => {
    const I = j(b);
    return d ? _.includes(I) : I === _;
  };
  U(() => {
    const b = (I) => {
      R.current && !R.current.contains(I.target) && (u(!1), k(""));
    };
    return document.addEventListener("mousedown", b), () => document.removeEventListener("mousedown", b);
  }, []), U(() => {
    if (f && R.current) {
      const b = R.current.getBoundingClientRect(), H = window.innerHeight - b.bottom;
      x(H < 200);
    }
  }, [f]), U(() => {
    f && O.current && O.current.focus();
  }, [f]);
  const L = (b) => {
    let I = b;
    if (b === "true" ? I = !0 : b === "false" && (I = !1), d) {
      const H = _.includes(j(b));
      let q;
      H ? q = s.filter(
        (J) => j(J) !== j(b)
      ) : q = [...s || [], I], n(q);
    } else
      n(I), u(!1);
    k("");
  }, P = d ? c.filter((b) => S(b.value)).map((b) => b.label).join(", ") : ($ = c.find((b) => S(b.value))) == null ? void 0 : $.label;
  return /* @__PURE__ */ h("div", { className: y || "col-span-12", children: [
    /* @__PURE__ */ e(V, { label: N, required: C }),
    /* @__PURE__ */ h("div", { className: `relative ${i}`, ref: R, children: [
      /* @__PURE__ */ h(
        "button",
        {
          type: "button",
          onClick: () => !r && u(!f),
          disabled: r,
          className: `w-full h-10 px-3 border border-gray-300 dark:border-gray-600 rounded-md text-left text-sm flex items-center justify-between 
          ${P ? "dark:text-white" : "text-gray-500 dark:text-gray-400"} 
          ${r ? "opacity-50 cursor-not-allowed" : "dark:bg-gray-700"}`,
          children: [
            /* @__PURE__ */ e("span", { className: "truncate", children: P || o }),
            /* @__PURE__ */ e(
              Pe,
              {
                className: `w-4 h-4 transition-transform ${f ? "rotate-180" : ""}`
              }
            )
          ]
        }
      ),
      f && /* @__PURE__ */ h(
        "div",
        {
          className: `absolute z-50 w-full border rounded-md bg-white dark:bg-gray-700 shadow-lg 
            ${D ? "bottom-full mb-1" : "top-full mt-1"}`,
          children: [
            l && /* @__PURE__ */ e("div", { className: "p-2 border-b border-gray-200 dark:border-gray-600", children: /* @__PURE__ */ h("div", { className: "relative", children: [
              /* @__PURE__ */ e(De, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }),
              /* @__PURE__ */ e(
                "input",
                {
                  ref: O,
                  type: "text",
                  value: w,
                  onChange: (b) => k(b.target.value),
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
                children: F.length > 0 ? F.map((b) => /* @__PURE__ */ h(
                  "button",
                  {
                    type: "button",
                    onClick: () => L(String(b.value)),
                    className: `w-full px-3 py-2 text-left text-sm flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 
                    ${S(b.value) ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300" : ""}`,
                    children: [
                      /* @__PURE__ */ e("span", { children: b.label }),
                      d && S(b.value) && /* @__PURE__ */ e(Ke, { className: "w-4 h-4" })
                    ]
                  },
                  String(b.value)
                )) : /* @__PURE__ */ e("div", { className: "px-3 py-2 text-sm text-gray-500 dark:text-gray-400", children: "No options found" })
              }
            )
          ]
        }
      )
    ] })
  ] }, p);
}, Xe = ({
  value: c = !0,
  onChange: s,
  text: n,
  options: o = [],
  label: i,
  required: r,
  name: l = "",
  disabled: N = !1,
  parentClass: C = ""
}) => {
  const p = o.length > 0 ? o : [
    { label: "Active", value: !0 },
    { label: "Inactive", value: !1 }
  ];
  return /* @__PURE__ */ e(E, { children: /* @__PURE__ */ h("div", { className: C || "col-span-12", children: [
    /* @__PURE__ */ e(V, { label: i, required: r }),
    /* @__PURE__ */ h("div", { className: "flex items-center justify-between h-10 gap-4 bg-gray-100 dark:bg-gray-700 px-3 rounded-md border border-gray-100 dark:border-gray-600", children: [
      n && /* @__PURE__ */ e("p", { className: "text-xs text-gray-600 dark:text-gray-400 flex-shrink overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px]", children: n }),
      /* @__PURE__ */ e("div", { className: "flex items-center gap-6", children: p.map((y, d) => /* @__PURE__ */ h(
        "label",
        {
          className: "flex items-center gap-2 cursor-pointer select-none",
          children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "radio",
                name: "switch-field",
                required: r && d === 0,
                value: y.value,
                disabled: N,
                checked: c === y.value,
                onChange: () => s(y.value),
                className: "w-4 h-4  border-gray-300 cursor-pointer"
              }
            ),
            /* @__PURE__ */ e("span", { className: "text-sm text-gray-700 dark:text-white", children: y.label })
          ]
        },
        d
      )) })
    ] })
  ] }, l) });
}, ge = [
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
  value: s = "",
  name: n = "",
  parentClass: o = "",
  onChange: i,
  disabled: r = !1,
  required: l = !1,
  placeholder: N = "Phone number",
  search: C = !1,
  countriesList: p = !1,
  defaultCountry: y = ""
}) {
  const d = (S) => ge.find((L) => L.code == S), [m, f] = M(
    d(y) || ge[0]
  ), [u, w] = M(""), [k, D] = M(!1), [x, R] = M(""), O = Z();
  U(() => {
    if (typeof s == "string" && s.startsWith("+")) {
      const S = ge.filter((L) => s.startsWith("+" + L.phone)).sort((L, P) => P.phone.length - L.phone.length)[0];
      if (S) {
        f(S), w(s.replace("+" + S.phone, ""));
        return;
      }
    }
    w(s);
  }, [s]);
  const j = (S) => {
    const L = S.target.value.replace(/\D/g, "");
    w(L), m && i && i("+" + m.phone + L);
  }, _ = (S) => {
    f(S), i && i("+" + S.phone + u), D(!1), R("");
  };
  U(() => {
    const S = (L) => {
      O.current && !O.current.contains(L.target) && D(!1);
    };
    return document.addEventListener("mousedown", S), () => document.removeEventListener("mousedown", S);
  }, []);
  const F = ge.filter(
    (S) => S.label.toLowerCase().includes(x.toLowerCase()) || S.phone.includes(x)
  );
  return p ? /* @__PURE__ */ e(E, { children: /* @__PURE__ */ h("div", { className: o || "col-span-12", children: [
    /* @__PURE__ */ e(V, { label: c, required: l }),
    /* @__PURE__ */ h("div", { className: "relative ", ref: O, children: [
      /* @__PURE__ */ h(
        "div",
        {
          className: `h-[40px] flex items-center border rounded-md px-2 bg-white dark:bg-gray-700 transition-all
  ${k ? "ring-0.5 ring-blue-100 border-blue-300" : "border-gray-300 dark:border-gray-600"}
  ${r ? "opacity-60 cursor-not-allowed" : ""}`,
          children: [
            /* @__PURE__ */ h(
              "button",
              {
                type: "button",
                disabled: r,
                onClick: () => D(!k),
                className: "flex items-center gap-1 pr-2 border-r border-gray-300 dark:border-gray-700 focus:outline-none",
                children: [
                  m ? /* @__PURE__ */ e(
                    "img",
                    {
                      src: `https://flagcdn.com/w20/${m.code.toLowerCase()}.png`,
                      alt: m.code,
                      className: "w-5 h-3 object-cover"
                    }
                  ) : /* @__PURE__ */ e("span", { className: "text-gray-400 text-xs", children: "🌐" }),
                  /* @__PURE__ */ e(Pe, { className: "w-3 h-3 text-gray-500" })
                ]
              }
            ),
            m && /* @__PURE__ */ h("span", { className: "ml-2 text-sm text-gray-700 dark:text-gray-200 whitespace-nowrap", children: [
              "+",
              m.phone
            ] }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "tel",
                value: u,
                onChange: j,
                required: l,
                disabled: r || !m,
                placeholder: m ? N : "Select a country",
                className: "flex-1 ml-2 bg-transparent outline-none text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400"
              }
            ),
            /* @__PURE__ */ e(
              "input",
              {
                type: "tel",
                required: l,
                tabIndex: -1,
                readOnly: !0,
                value: m && u ? "+" + m.phone + u : "",
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
      k && /* @__PURE__ */ h("div", { className: "absolute top-full left-0 w-full mt-1 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 shadow-lg z-50 max-h-60 overflow-y-auto", children: [
        C && /* @__PURE__ */ e("div", { className: "p-2 border-b border-gray-200 dark:border-gray-700", children: /* @__PURE__ */ h("div", { className: "relative", children: [
          /* @__PURE__ */ e(De, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" }),
          /* @__PURE__ */ e(
            "input",
            {
              type: "text",
              value: x,
              onChange: (S) => R(S.target.value),
              placeholder: "Search country...",
              className: "w-full pl-9 pr-3 py-2 text-sm border rounded-md bg-white dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none "
            }
          )
        ] }) }),
        F.map((S) => /* @__PURE__ */ h(
          "button",
          {
            type: "button",
            onClick: () => _(S),
            className: "w-full flex items-center gap-2 px-2 py-1 text-sm hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100",
            children: [
              /* @__PURE__ */ e(
                "img",
                {
                  src: `https://flagcdn.com/w20/${S.code.toLowerCase()}.png`,
                  alt: S.code,
                  className: "w-5 h-3 object-cover"
                }
              ),
              /* @__PURE__ */ h("span", { children: [
                S.label,
                " (+",
                S.phone,
                ")"
              ] })
            ]
          },
          S.code
        ))
      ] })
    ] })
  ] }, n) }) : /* @__PURE__ */ e(E, { children: /* @__PURE__ */ h("div", { className: o || "col-span-12", children: [
    /* @__PURE__ */ e(V, { label: c, required: l }),
    /* @__PURE__ */ e(
      "input",
      {
        type: "text",
        value: s,
        onChange: (L) => {
          const P = L.target.value.replace(/[^+\d]/g, ""), $ = P.startsWith("+") ? "+" + P.replace(/[+]/g, "").slice(0) : P;
          i($);
        },
        placeholder: N,
        disabled: r,
        required: l,
        className: `w-full h-10 px-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md \r
        bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none \r
        focus:ring-1 focus:ring-blue-300 dark:focus:ring-blue-200`,
        inputMode: "tel",
        pattern: "^\\+\\d{1,15}$"
      }
    )
  ] }, n) });
}
const Fe = Ce.forwardRef(
  ({ className: c = "", label: s, required: n, ...o }, i) => {
    const r = `
      placeholder-gray-400 dark:placeholder-gray-400
      ${c}
    `.trim();
    return /* @__PURE__ */ e(E, { children: /* @__PURE__ */ h("div", { className: o.parentClass || "col-span-12", children: [
      /* @__PURE__ */ e(V, { label: s, required: n }),
      /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ e(
        "textarea",
        {
          className: r,
          ref: i,
          required: n,
          ...o
        }
      ) })
    ] }, o.name) });
  }
);
Fe.displayName = "TextArea";
const aa = ({
  label: c = "",
  value: s = null,
  onChange: n,
  required: o = !1,
  accept: i = "image/*",
  id: r,
  dragDrop: l = !1,
  name: N = "",
  parentClass: C = ""
}) => {
  const [p, y] = M(s), [d, m] = M(!1), f = Z(null);
  U(() => {
    y(s instanceof File ? URL.createObjectURL(s) : s);
  }, [s]);
  const u = (x) => {
    if (!x || x.length === 0) {
      y(null), n == null || n(null);
      return;
    }
    const R = x[0], O = URL.createObjectURL(R);
    y({ file: R, preview: O }), n == null || n(R);
  };
  return /* @__PURE__ */ e(E, { children: /* @__PURE__ */ h("div", { className: C || "col-span-12", children: [
    /* @__PURE__ */ e(V, { label: c, required: o }),
    /* @__PURE__ */ h(
      "div",
      {
        className: `relative  rounded-md p-2 transition-all ${d ? "border border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900" : "border bg-gray-50 dark:bg-gray-700"}`,
        onDragOver: (x) => {
          l && (x.preventDefault(), m(!0));
        },
        onDragLeave: (x) => {
          l && (x.preventDefault(), m(!1));
        },
        onDrop: (x) => {
          l && (x.preventDefault(), m(!1), u(x.dataTransfer.files));
        },
        children: [
          /* @__PURE__ */ h(
            "div",
            {
              className: `flex items-center space-x-3 transition-all ${d ? "filter blur-sm" : ""}`,
              children: [
                /* @__PURE__ */ e(
                  "div",
                  {
                    className: "cursor-pointer",
                    onClick: () => f.current.click(),
                    children: p ? /* @__PURE__ */ e(
                      "img",
                      {
                        src: p.preview || p,
                        alt: "preview",
                        className: "object-cover w-20 h-20 rounded-full"
                      }
                    ) : /* @__PURE__ */ e(E, { children: /* @__PURE__ */ e("div", { className: "rounded-full bg-gray-200 dark:bg-gray-800 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ e(
                      ye,
                      {
                        icon: "ri:image-add-fill",
                        className: "text-gray-400 w-10 h-10"
                      }
                    ) }) })
                  }
                ),
                /* @__PURE__ */ e(
                  "input",
                  {
                    ref: f,
                    id: r,
                    type: "file",
                    accept: i,
                    onChange: (x) => u(x.target.files),
                    required: o && !p,
                    className: "inline-flex items-center justify-center p-2 text-gray-400 text-sm file:cursor-pointer"
                  }
                )
              ]
            }
          ),
          l && d && /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ e("span", { className: "text-blue-500 font-semibold text-xl", children: "Drop here" }) })
        ]
      }
    )
  ] }, N) });
}, Be = Ce.forwardRef(
  ({
    label: c,
    required: s,
    parentClass: n = "",
    className: o = "",
    type: i = "text",
    onKeyDown: r,
    negativeNumberAllow: l = !0,
    ...N
  }, C) => {
    const [p, y] = M(!1), d = (f) => {
      if (i === "number") {
        if (["e", "E", "+"].includes(f.key)) {
          f.preventDefault();
          return;
        }
        if (l == !1 && f.key === "-") {
          f.preventDefault();
          return;
        }
        if (["ArrowUp", "ArrowDown"].includes(f.key)) {
          f.preventDefault();
          return;
        }
      }
      r == null || r(f);
    }, m = `
      h-10 placeholder-gray-400 dark:placeholder-gray-400
      ${i === "password" ? "pr-10" : ""}
      ${i === "number" ? "no-spinner" : ""}
      ${o}
    `.trim();
    return /* @__PURE__ */ e(E, { children: /* @__PURE__ */ h("div", { className: n || "col-span-12", children: [
      /* @__PURE__ */ e(V, { label: c, required: s }),
      /* @__PURE__ */ h("div", { className: "relative", children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: i === "password" && p ? "text" : i,
            ref: C,
            required: s,
            onKeyDown: d,
            className: m,
            ...N
          }
        ),
        i === "password" && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            tabIndex: -1,
            onClick: () => y((f) => !f),
            className: "absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200",
            children: /* @__PURE__ */ e(
              ye,
              {
                icon: p ? "mdi:eye-off-outline" : "mdi:eye-outline",
                className: "w-5 h-5"
              }
            )
          }
        )
      ] })
    ] }, N.name) });
  }
);
Be.displayName = "Input";
const ra = ({
  key: c,
  editorKey: s = "",
  value: n = "",
  onChange: o,
  label: i = "",
  required: r = !1,
  placeholder: l = "",
  parentClass: N = "col-span-12",
  height: C = 400,
  inline: p = !1,
  disabled: y = !1,
  plugins: d,
  toolbar: m,
  menubar: f = !1,
  fontFamily: u = "Inter, sans-serif",
  initConfig: w = {},
  imageUploadHandler: k
  // ✅ Promise function passed from parent
}) => /* @__PURE__ */ h("div", { className: N, children: [
  i && /* @__PURE__ */ e(V, { label: i, required: r }),
  /* @__PURE__ */ e(
    We,
    {
      apiKey: s,
      value: n,
      disabled: y,
      init: {
        height: C,
        inline: p,
        menubar: f,
        branding: !1,
        statusbar: !0,
        automatic_uploads: !0,
        images_upload_handler: (O) => new Promise((j, _) => {
          if (!k) {
            j(`data:${O.blob().type};base64,${O.base64()}`);
            return;
          }
          k(O).then((F) => {
            F ? j(F) : _("Upload failed: No URL returned");
          }).catch((F) => {
            _(
              typeof F == "string" ? F : (F == null ? void 0 : F.message) || "Image upload failed"
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
        toolbar: m ?? "undo redo | blocks | bold italic underline forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media table | removeformat | code fullscreen preview",
        placeholder: l,
        content_style: `
            body {
                font-family: ${u};
            }
            `,
        ...w
      },
      onEditorChange: (O) => {
        o && o(O);
      }
    }
  )
] }, c), ta = ({
  name: c = "",
  label: s = "",
  // label for single checkbox
  options: n = [],
  // array of { label, value } for multiple
  value: o = null,
  // boolean for single, array for multiple, or string for single select
  onChange: i,
  disabled: r = !1,
  required: l = !1,
  parentClass: N = "col-span-12",
  className: C = "",
  multiSelect: p = !1
  // ✅ if true, only one option can be selected (like radio)
}) => {
  const y = Array.isArray(n) && n.length > 0, d = (u) => y ? p ? Array.isArray(o) && o.includes(u) : o === u : !!o, m = (u) => {
    i == null || i(u.target.checked, c);
  }, f = (u, w) => {
    if (i)
      if (!p)
        i(w ? u : "", c);
      else {
        const k = Array.isArray(o) ? [...o] : [];
        if (w)
          k.includes(u) || k.push(u);
        else {
          const D = k.indexOf(u);
          D > -1 && k.splice(D, 1);
        }
        i(k, c);
      }
  };
  return y ? /* @__PURE__ */ e(E, { children: /* @__PURE__ */ h("div", { className: `${N}`, children: [
    /* @__PURE__ */ e(V, { label: s, required: l }),
    /* @__PURE__ */ e("div", { className: "flex flex-col space-y-2", children: n.map((u, w) => /* @__PURE__ */ h("div", { className: "flex items-center", children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          name: c,
          value: u.value,
          checked: d(u.value),
          disabled: r || u.disabled,
          required: l && w === 0,
          onChange: (k) => f(u.value, k.target.checked),
          className: `h-4 w-4 cursor-pointer text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${C}`
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
  ] }) }) : /* @__PURE__ */ h("div", { className: `flex items-center ${N}`, children: [
    /* @__PURE__ */ e(
      "input",
      {
        type: "checkbox",
        name: c,
        checked: d(),
        disabled: r,
        required: l,
        onChange: m,
        className: `h-4 w-4 text-blue-600 cursor-pointer border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${C}`
      }
    ),
    s && /* @__PURE__ */ e(
      "label",
      {
        htmlFor: c,
        className: "ml-2 text-sm text-gray-700 dark:text-gray-200 select-none",
        children: s
      }
    )
  ] });
}, la = ({
  label: c = "",
  value: s = null,
  onChange: n,
  required: o = !1,
  accept: i = "audio/*",
  id: r,
  dragDrop: l = !1,
  name: N = "",
  parentClass: C = ""
}) => {
  const [p, y] = M(null), [d, m] = M(!1), f = Z(null);
  U(() => {
    if (!s) {
      y(null);
      return;
    }
    if (s instanceof File) {
      const x = URL.createObjectURL(s);
      return y({ file: s, preview: x }), () => {
        URL.revokeObjectURL(x);
      };
    } else
      y({ preview: s });
  }, [s]);
  const u = (x) => {
    if (!x || x.length === 0) {
      p != null && p.preview && URL.revokeObjectURL(p.preview), y(null), n == null || n(null);
      return;
    }
    const R = x[0], O = URL.createObjectURL(R);
    p != null && p.preview && URL.revokeObjectURL(p.preview), y({ file: R, preview: O }), n == null || n(R);
  };
  return /* @__PURE__ */ h("div", { className: C || "col-span-12", children: [
    /* @__PURE__ */ e(V, { label: c, required: o }),
    /* @__PURE__ */ h(
      "div",
      {
        className: `relative rounded-md p-2 transition-all ${d ? "border border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900" : "border bg-gray-50 dark:bg-gray-700"}`,
        onDragOver: (x) => {
          l && (x.preventDefault(), m(!0));
        },
        onDragLeave: (x) => {
          l && (x.preventDefault(), m(!1));
        },
        onDrop: (x) => {
          l && (x.preventDefault(), m(!1), u(x.dataTransfer.files));
        },
        children: [
          /* @__PURE__ */ h(
            "div",
            {
              className: `flex items-center space-x-4 transition-all ${d ? "filter blur-sm" : ""}`,
              children: [
                /* @__PURE__ */ e(
                  "div",
                  {
                    className: "cursor-pointer",
                    onClick: () => {
                      var x;
                      return (x = f.current) == null ? void 0 : x.click();
                    },
                    children: p ? /* @__PURE__ */ e(
                      "audio",
                      {
                        controls: !0,
                        src: p.preview,
                        className: "w-64"
                      },
                      p.preview
                    ) : /* @__PURE__ */ e("div", { className: "rounded-full bg-gray-200 dark:bg-gray-800 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ e(ye, { icon: "mdi:music", className: "text-gray-400 w-10 h-10" }) })
                  }
                ),
                /* @__PURE__ */ e(
                  "input",
                  {
                    ref: f,
                    id: r,
                    type: "file",
                    accept: i,
                    onChange: (x) => u(x.target.files),
                    required: o && !p,
                    className: "inline-flex items-center justify-center p-2 text-gray-400 text-sm file:cursor-pointer"
                  }
                )
              ]
            }
          ),
          l && d && /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ e("span", { className: "text-blue-500 font-semibold text-xl", children: "Drop audio here" }) })
        ]
      }
    )
  ] }, N);
}, Ee = ({ field: c, formData: s, handleChange: n }) => {
  const {
    key: o,
    label: i,
    type: r,
    options: l,
    placeholder: N,
    rows: C,
    inputClass: p,
    search: y,
    accept: d,
    text: m,
    required: f = !1,
    minLength: u,
    dragDrop: w,
    parentClass: k,
    countriesList: D,
    defaultCountry: x,
    multiple: R,
    dropdownMaxHeight: O,
    editorKey: j,
    fontFamily: _,
    disabled: F,
    negativeNumberAllow: S
  } = c;
  let L = s == null ? void 0 : s[o];
  L == null && (L = "");
  const P = N || (r === "select" ? `Select ${i}` : `Enter ${i}`), $ = "w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm focus:outline-none focus:ring-1 focus:ring-blue-200 bg-white text-black dark:bg-gray-700 dark:text-white";
  switch (r) {
    case "select":
      return /* @__PURE__ */ e(
        Qe,
        {
          options: l || [],
          value: L,
          onChange: (b) => n(o, b),
          placeholder: P,
          className: p || "",
          search: y,
          required: f,
          label: i,
          name: o,
          disabled: F,
          parentClass: k,
          multiple: R,
          dropdownMaxHeight: O
        }
      );
    case "checkbox":
      return /* @__PURE__ */ e(
        ta,
        {
          name: o,
          label: i,
          options: l || [],
          value: L,
          onChange: (b) => n(o, b),
          required: f,
          parentClass: k,
          className: p || "",
          multiSelect: R,
          disabled: F
        }
      );
    case "switch":
      return /* @__PURE__ */ e(
        Xe,
        {
          value: L,
          onChange: (b) => n(o, b),
          text: m,
          options: l || [],
          label: i,
          required: f,
          name: o,
          disabled: F,
          parentClass: k
        }
      );
    case "phone":
      return /* @__PURE__ */ e(
        ea,
        {
          value: L,
          onChange: (b) => n(o, b),
          countriesList: D,
          defaultCountry: x,
          required: f,
          placeholder: P,
          search: y,
          label: i,
          name: o,
          disabled: F,
          parentClass: k
        }
      );
    case "textarea":
      return /* @__PURE__ */ e(
        Fe,
        {
          value: L,
          onChange: (b) => n(o, b.target.value),
          placeholder: P,
          rows: C || 3,
          className: `${$} ${p || ""}`,
          required: f,
          name: o,
          label: i,
          disabled: F,
          parentClass: k
        }
      );
    case "image":
      return /* @__PURE__ */ e(
        aa,
        {
          value: L,
          onChange: (b) => n(o, b),
          required: f,
          accept: d || "image/*",
          id: `file-${o}`,
          dragDrop: w,
          label: i,
          name: o,
          parentClass: k
        }
      );
    case "audio":
      return /* @__PURE__ */ e(
        la,
        {
          value: L,
          onChange: (b) => n(o, b),
          required: f,
          accept: d || "audio/*",
          id: `file-${o}`,
          dragDrop: w,
          label: i,
          name: o,
          parentClass: k
        }
      );
    case "tinyEditor":
      return /* @__PURE__ */ e(
        ra,
        {
          value: L,
          onChange: (b) => n(o, b),
          required: f,
          placeholder: P,
          label: i,
          parentClass: k,
          fontFamily: _,
          editorKey: j,
          disabled: F
        },
        `editor-${o}`
      );
    default:
      return /* @__PURE__ */ e(
        Be,
        {
          type: r || "text",
          value: L,
          onChange: (b) => n(o, b.target.value),
          placeholder: P,
          className: `${$} ${p || ""}`,
          required: f,
          name: o,
          minLength: u,
          label: i,
          negativeNumberAllow: S,
          parentClass: k,
          disabled: F
        }
      );
  }
}, na = ({ isOpen: c, onClose: s, config: n, onApply: o }) => {
  var p;
  const [i, r] = M({}), l = (y, d) => {
    r((m) => ({ ...m, [y]: d }));
  }, N = () => {
    o == null || o(i), s();
  }, C = () => {
    r({}), o == null || o({}), s();
  };
  return /* @__PURE__ */ h(E, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: `fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${c ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
        onClick: s
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
                onClick: s,
                className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition",
                children: /* @__PURE__ */ e(fe, { className: "w-5 h-5 text-gray-500 dark:text-gray-400" })
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 py-3", children: n != null && n.component ? /* @__PURE__ */ e(n.component, { filters: i, onFilterChange: l }) : /* @__PURE__ */ e("div", { className: "space-y-4", children: (p = n == null ? void 0 : n.fields) == null ? void 0 : p.map((y) => /* @__PURE__ */ e(E, { children: /* @__PURE__ */ e(
            Ee,
            {
              field: y,
              formData: i,
              handleChange: l
            },
            y.key
          ) })) }) }),
          /* @__PURE__ */ h("div", { className: "flex gap-2 px-4 py-3 border-t border-gray-200 dark:border-gray-700", children: [
            /* @__PURE__ */ e(
              ae,
              {
                onClick: N,
                variant: "contained",
                color: "primary",
                fullWidth: !0,
                children: "Apply Filters"
              }
            ),
            /* @__PURE__ */ e(
              ae,
              {
                onClick: C,
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
}, Le = {
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
  variant: s = "contained",
  // contained | outline | soft
  color: n = "green",
  className: o = ""
}) => {
  const i = Le[n] || Le.green, r = Ae[s] || Ae.contained, l = s === "outline" ? i.border : i.bg;
  return /* @__PURE__ */ e(
    "span",
    {
      className: `inline-flex justify-center items-center rounded-sm text-xs font-semibold px-3 py-1 min-w-[78px]
        ${l}
        ${r}
        ${o}`,
      children: c
    }
  );
}, oa = ({ rows: c = 5, columns: s = 5 }) => /* @__PURE__ */ h(E, { children: [
  /* @__PURE__ */ e("div", { className: "w-full mb-6 inline-flex justify-end items-center", children: /* @__PURE__ */ e("div", { className: "h-8 w-80 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }),
  /* @__PURE__ */ e("div", { className: "overflow-hidden rounded-md border border-gray-200 dark:border-gray-800", children: /* @__PURE__ */ h("table", { className: "w-full border-collapse", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { className: "bg-gray-50 dark:bg-gray-900", children: Array.from({ length: s }).map((n, o) => /* @__PURE__ */ e("th", { className: "px-4 py-3", children: /* @__PURE__ */ e("div", { className: "h-6 w-24 bg-gray-300 dark:bg-gray-700 rounded animate-pulse  inline-flex justify-center items-center" }) }, o)) }) }),
    /* @__PURE__ */ e("tbody", { children: Array.from({ length: c }).map((n, o) => /* @__PURE__ */ e(
      "tr",
      {
        className: "border-t border-gray-200 dark:border-gray-800",
        children: Array.from({ length: s }).map((i, r) => /* @__PURE__ */ e("td", { className: "px-4 py-6", children: /* @__PURE__ */ e("div", { className: "h-6 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }, r))
      },
      o
    )) })
  ] }) })
] }), Ge = ({ src: c, alt: s = "preview", isOpen: n, setIsOpen: o }) => {
  const i = () => o(!1);
  return U(() => {
    const r = (l) => {
      l.key === "Escape" && i();
    };
    return n && (document.body.style.overflow = "hidden", document.addEventListener("keydown", r)), () => {
      document.body.style.overflow = "", document.removeEventListener("keydown", r);
    };
  }, [n]), /* @__PURE__ */ e(E, { children: /* @__PURE__ */ h(
    "div",
    {
      className: `fixed inset-0 z-50 flex items-center justify-center bg-black/70 dark:bg-black/80 \r
                   backdrop-blur-sm animate-in fade-in duration-200`,
      onClick: i,
      children: [
        /* @__PURE__ */ e(
          "button",
          {
            onClick: i,
            className: `absolute top-4 right-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200\r
                     hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-2 shadow-lg transition`,
            children: /* @__PURE__ */ e(fe, { size: 20 })
          }
        ),
        /* @__PURE__ */ e(
          "div",
          {
            className: "max-w-5xl w-full px-4 transform transition-all duration-200 scale-95 animate-in zoom-in-95",
            onClick: (r) => r.stopPropagation(),
            children: /* @__PURE__ */ e(
              "img",
              {
                src: c,
                alt: s,
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
    data: s = [],
    table_head: n = [],
    loading: o = !1,
    search: i = {
      enabled: !1,
      placeholder: "Search...",
      useServerSideSearch: !1
    },
    filter: r = {
      enabled: !1,
      useServerSideFilters: !1
    },
    pagination: l = {
      enabled: !1,
      rows_per_page: 10,
      useServerSidePagination: !1
    },
    emptyMessage: N = "No data available",
    onMenuAction: C,
    setServerSidePaginationData: p = () => {
    },
    onFilterApply: y,
    filterConfig: d = null
  } = c, [m, f] = M(""), [u, w] = M(null), [k, D] = M([]), [x, R] = M({}), [O, j] = M(!1), [_, F] = M(null), [S, L] = M(!1), P = Me(() => !i.enabled || !m.trim() || i.useServerSideSearch ? s : Je(s, m, i.searchKeys || []), [s, m, i]), [$, b] = M(1), [I, H] = M((l == null ? void 0 : l.rows_per_page) || 50), [q, J] = M(P.length || 0), re = l != null && l.useServerSidePagination ? l.total_pages : Math.ceil(P.length / I), oe = Me(() => {
    if (l.useServerSidePagination) return P;
    const t = ($ - 1) * I;
    return P.slice(t, t + I);
  }, [P, $, I]), te = Z(null), ie = Z({}), le = Z(null), ee = (t) => {
    f(t), b(1), i.useServerSideSearch && (le.current && clearTimeout(le.current), le.current = setTimeout(async () => {
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
    T.stopPropagation(), w(null), C == null || C(t.type, g);
  }, ve = (t, g, T) => {
    g.stopPropagation(), D(T);
    const K = g.currentTarget;
    ie.current[t] = K;
    const G = K.getBoundingClientRect(), W = 192, Y = T.length * 40, Q = window.innerWidth, v = window.innerHeight, B = Q - G.right < W ? G.left - W + G.width : G.left, z = v - G.bottom < Y && G.top > Y ? G.top - Y - 2 : G.bottom + 2;
    R({
      top: Math.max(8, Math.min(z, v - Y - 8)),
      left: Math.max(8, Math.min(B, Q - W - 8))
    }), w(u === t ? null : t);
  }, we = (t) => ($ - 1) * I + t + 1, se = (t) => {
    F(t), L(!0);
  }, ne = (t, g, T, K = null) => /* @__PURE__ */ e(E, { children: t ? /* @__PURE__ */ e(
    "img",
    {
      src: t,
      alt: g || "Avatar",
      onClick: (G) => {
        G.stopPropagation(), G.preventDefault(), se({ src: t, alt: g });
      },
      className: `w-10 h-10 cursor-pointer rounded-full object-cover border border-gray-200 dark:border-gray-700 ${T || ""}`
    }
  ) : /* @__PURE__ */ e(E, { children: K || /* @__PURE__ */ e(
    "div",
    {
      className: `w-10 h-10 flex items-center shrink-0 justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${T || ""}`,
      children: /* @__PURE__ */ e(Ie, { className: "w-6 h-6 text-gray-400 dark:text-gray-400" })
    }
  ) }) }), de = (t, g) => /* @__PURE__ */ e(E, { children: t ? /* @__PURE__ */ e(
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
  ) : /* @__PURE__ */ e(E, { children: /* @__PURE__ */ e(
    "div",
    {
      className: `w-12 h-12 flex items-center shrink-0 justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${g || ""}`,
      children: /* @__PURE__ */ e(Ye, { className: "w-6 h-6 text-gray-400 dark:text-gray-400" })
    }
  ) }) }), ce = (t, g) => /* @__PURE__ */ h("div", { className: `flex items-center space-x-4 ${g.className || ""}`, children: [
    g.imageKey ? ne(t[g.imageKey], t[g.titleKey], "group-avatar") : "",
    /* @__PURE__ */ h("div", { children: [
      /* @__PURE__ */ e("p", { className: "font-medium text-gray-900 dark:text-white group-title", children: t[g.titleKey] || "" }),
      /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400 group-sub-title", children: t[g.subtitleKey] || "" })
    ] })
  ] }), he = (t, g) => {
    var W;
    let T = String(t);
    const K = g.variant || "contained";
    let G = g.defaultColor;
    if (((W = g == null ? void 0 : g.chipOptions) == null ? void 0 : W.length) > 0) {
      let Y = g == null ? void 0 : g.chipOptions.find((Q) => Q.value == t);
      Y && (T = Y.label, G = Y.color);
    }
    return /* @__PURE__ */ e(
      $e,
      {
        label: T,
        variant: K,
        color: G,
        className: g.className || ""
      }
    );
  }, ue = (t, g, T) => {
    const K = g[t.key];
    return t.type === "menu_actions" ? /* @__PURE__ */ e("div", { className: `text-center ${t.className || ""}`, children: /* @__PURE__ */ e(
      "button",
      {
        ref: (G) => ie.current[g.id || g._id] = G,
        onClick: (G) => ve(g.id || g._id, G, t.menuList),
        className: "p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition text-gray-700 dark:text-gray-300",
        children: /* @__PURE__ */ e(He, { className: "h-4 w-4" })
      }
    ) }) : t.type === "index" ? /* @__PURE__ */ e("span", { className: t.className || "", children: we(T) }) : t.type === "group" ? ce(g, t) : t.type === "chip" ? /* @__PURE__ */ e(E, { children: he(K, t) }) : t.type === "date" ? /* @__PURE__ */ e("span", { className: t.className || "", children: Oe(K, t.format || "DD MMM YYYY") }) : t.type === "avatar" ? /* @__PURE__ */ e(E, { children: ne(K, t.alt, t.className, t.fallback_icon) }) : t.type === "audio" ? /* @__PURE__ */ e(E, { children: de(K, t.className) }) : /* @__PURE__ */ e("span", { className: t.className || "", children: K || "N/A" });
  }, be = (t, g) => {
    if (t.onClickDetails)
      return C == null ? void 0 : C("view", g);
    if (typeof t.handleClick == "function")
      return t.handleClick(g);
  }, pe = (t) => t.onClickDetails || typeof t.handleClick == "function";
  return U(() => {
    const t = () => {
      u && w(null);
    };
    return window.addEventListener("scroll", t, !0), () => {
      window.removeEventListener("scroll", t, !0);
    };
  }, [u]), U(() => {
    const t = (g) => {
      te.current && !te.current.contains(g.target) && w(null);
    };
    return document.addEventListener("click", t), () => document.removeEventListener("click", t);
  }, []), U(() => {
    l != null && l.rows_per_page && (l != null && l.useServerSidePagination) && H((l == null ? void 0 : l.rows_per_page) || 50), l.current_page && b(l.current_page);
  }, [
    l.rows_per_page,
    l == null ? void 0 : l.useServerSidePagination,
    l.current_page
  ]), U(() => {
    J(
      l != null && l.useServerSidePagination ? l.total_records : P.length
    ), P.length <= I * ($ - 1) && !(l != null && l.useServerSidePagination) && b((t) => t - 1 || 1);
  }, [
    P.length,
    l.total_records,
    l == null ? void 0 : l.useServerSidePagination
  ]), o ? /* @__PURE__ */ e(oa, { rows: 6, columns: 6 }) : /* @__PURE__ */ h(E, { children: [
    /* @__PURE__ */ h("div", { className: "flex justify-end items-center mb-4 gap-2", children: [
      i.enabled && /* @__PURE__ */ e("div", { className: "", children: /* @__PURE__ */ h("div", { className: "relative min-w-[300px]", children: [
        /* @__PURE__ */ e(De, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-300" }),
        /* @__PURE__ */ e(
          "input",
          {
            type: "text",
            placeholder: i.placeholder || "Search...",
            value: m,
            onChange: (t) => ee(t.target.value),
            className: "w-full h-[36px] pl-9 pr-4 py-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-300 dark:ring-blue-200 disabled:opacity-50"
          }
        )
      ] }) }),
      d && r.enabled && /* @__PURE__ */ h(ae, { onClick: () => j(!0), variant: "contained", children: [
        /* @__PURE__ */ e(_e, { className: "w-4 h-4 mr-2" }),
        "Filters"
      ] })
    ] }),
    /* @__PURE__ */ h("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-700", children: [
      /* @__PURE__ */ e("div", { className: "overflow-x-auto", children: /* @__PURE__ */ h("table", { className: "min-w-full divide-y divide-gray-200 dark:divide-gray-700", children: [
        /* @__PURE__ */ e("thead", { className: "bg-gray-50 dark:bg-gray-700/60", children: /* @__PURE__ */ e("tr", { children: n.map((t) => /* @__PURE__ */ e(
          "th",
          {
            className: `px-6 py-4 text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider min-w-max max-w-[180px] truncate ${t.headClass || ""}`,
            children: t.title
          },
          t.key
        )) }) }),
        /* @__PURE__ */ e("tbody", { className: "bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700", children: oe.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e(
          "td",
          {
            colSpan: n.length,
            className: "text-center py-10 text-gray-500 dark:text-gray-400",
            children: N
          }
        ) }) : oe.map((t, g) => /* @__PURE__ */ e(
          "tr",
          {
            className: "hover:bg-gray-50 dark:hover:bg-blue-800/10 transition",
            children: n.map((T) => /* @__PURE__ */ e(
              "td",
              {
                className: `px-6 py-4 text-sm text-gray-900 dark:text-gray-100 min-w-max ${T.type == "audio" ? "" : "max-w-[300px]"} truncate ${pe(T) ? "cursor-pointer" : ""}`,
                title: String(t[T.key] ?? ""),
                onClick: () => be(T, t),
                children: T.render ? T.render(t, g) : ue(T, t, g)
              },
              T.key
            ))
          },
          t.id || t._id || g
        )) })
      ] }) }),
      (l == null ? void 0 : l.enabled) && P.length > 0 && /* @__PURE__ */ h("div", { className: " bg-gray-50 dark:bg-gray-700/60 px-6 py-3 flex flex-wrap items-center justify-between border-t border-gray-200 dark:border-gray-600 gap-3", children: [
        /* @__PURE__ */ h("div", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
          "Showing ",
          ($ - 1) * I + 1,
          " to",
          " ",
          Math.min($ * I, q),
          " of ",
          q,
          " ",
          "results"
        ] }),
        /* @__PURE__ */ h("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ h("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Rows per page:" }),
            /* @__PURE__ */ e(
              "select",
              {
                value: I,
                onChange: (t) => {
                  const g = Number(t.target.value);
                  H(g), b(1), l.useServerSidePagination && p((T) => ({
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
                  if ($ > 1) {
                    const t = $ - 1;
                    b(t), l.useServerSidePagination && p((g) => ({
                      ...g,
                      current_page: t
                    }));
                  }
                },
                disabled: $ === 1,
                className: "p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition text-gray-500 dark:text-gray-300 disabled:opacity-50",
                children: /* @__PURE__ */ e(Ue, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ h("span", { className: "text-sm text-gray-800 dark:text-gray-200", children: [
              "Page ",
              $,
              " of ",
              re
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => {
                  if ($ < re) {
                    const t = $ + 1;
                    b(t), l.useServerSidePagination && p((g) => ({
                      ...g,
                      current_page: t
                    }));
                  }
                },
                disabled: $ === re,
                className: "p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition text-gray-500 dark:text-gray-300 disabled:opacity-50",
                children: /* @__PURE__ */ e(ze, { className: "h-4 w-4" })
              }
            )
          ] })
        ] })
      ] })
    ] }),
    u && qe(
      /* @__PURE__ */ e(
        "div",
        {
          ref: te,
          style: {
            position: "fixed",
            top: `${x.top}px`,
            left: `${x.left}px`,
            zIndex: 9999
          },
          className: "w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg border border-gray-200 dark:border-gray-600",
          children: k.map((t, g) => /* @__PURE__ */ h(
            "button",
            {
              onClick: (T) => xe(
                t,
                s.find(
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
        isOpen: O,
        onClose: () => j(!1),
        config: d,
        onApply: y
      }
    ),
    S && /* @__PURE__ */ e(
      Ge,
      {
        src: _.src,
        alt: _.alt,
        isOpen: S,
        setIsOpen: L
      }
    )
  ] });
}, me = ({
  isOpen: c,
  onClose: s,
  icon: n,
  title: o,
  children: i,
  size: r = "md",
  actionButtons: l = [],
  actions: N,
  showDefaultClose: C = !0,
  footerConfig: p = null,
  hideFooter: y = !1,
  onFormSubmit: d = () => {
  },
  onCancel: m,
  loadingBtn: f = !1,
  executeFunction: u = () => {
  },
  selectedItem: w = null
}) => {
  if (!c) return null;
  const k = {
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
        onClick: () => s()
      }
    ),
    /* @__PURE__ */ h(
      "div",
      {
        className: `relative bg-white rounded-lg shadow-xl w-full ${k[r] || k.md} max-h-[90vh] flex flex-col dark:bg-gray-800`,
        children: [
          /* @__PURE__ */ h("div", { className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0", children: [
            /* @__PURE__ */ h("div", { className: "flex items-center gap-1", children: [
              n && /* @__PURE__ */ e("span", { children: n }),
              /* @__PURE__ */ e("h3", { className: "text-lg font-medium text-gray-900 dark:text-white", children: o })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => s(),
                className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
                children: /* @__PURE__ */ e(fe, { className: "w-6 h-6" })
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto p-4", children: i }),
          l.length > 0 && /* @__PURE__ */ e("div", { className: "px-4 py-3 flex justify-end gap-3 border-t border-gray-200 dark:border-gray-700 sm:px-6", children: l.map((D) => /* @__PURE__ */ e(
            ae,
            {
              onClick: (x) => {
                D.type == "submit" ? d(x) : u(
                  () => {
                    var R;
                    return (R = D == null ? void 0 : D.onClick) == null ? void 0 : R.call(D, x, w);
                  },
                  (R) => s == null ? void 0 : s(R)
                );
              },
              disabled: f || D.disabled,
              variant: D.variant || "contained",
              color: D.color || "primary",
              className: `min-w-[100px] ${D.className}`,
              type: D.type || "button",
              children: f ? /* @__PURE__ */ h("div", { className: "flex items-center", children: [
                /* @__PURE__ */ e("div", { className: "animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-2 border-t-white mr-2" }),
                D.label || "Submit",
                "..."
              ] }) : D.label || "Submit"
            }
          )) })
        ]
      }
    )
  ] });
}, Te = ({ config: c, onSubmit: s, initialData: n = {}, type: o = "add" }) => {
  const { formClass: i = "grid grid-cols-12 gap-4", formFields: r = [] } = c || {}, [l, N] = M(n);
  U(() => {
    N(n);
  }, []);
  const C = (y, d) => {
    N((m) => ({ ...m, [y]: d }));
  }, p = (y) => {
    y.preventDefault();
    const d = y.target;
    if (!d.checkValidity()) {
      d.reportValidity();
      return;
    }
    s(l);
  };
  return /* @__PURE__ */ e(
    "form",
    {
      id: o == "add" ? "addForm" : o == "edit" ? "editForm" : "defaultForm",
      onSubmit: p,
      className: i,
      noValidate: !1,
      children: r.map((y) => /* @__PURE__ */ e(E, { children: /* @__PURE__ */ e(
        Ee,
        {
          field: y,
          formData: l,
          handleChange: C
        },
        y.key
      ) }))
    }
  );
};
function sa({ data: c, config: s }) {
  const { fields: n, containerClass: o } = s, [i, r] = M(null), [l, N] = M(!1), C = (d) => {
    r(d), N(!0);
  }, p = ({ col: d }) => {
    var x;
    let m = d == null ? void 0 : d.icon, f = d.label, u = c[d.key], w = d.type, k = d.variant || "outline", D = d.defaultColor;
    if (w === "chip" && ((x = d.chipOptions) == null ? void 0 : x.length) > 0) {
      let R = d == null ? void 0 : d.chipOptions.find((O) => O.value == u);
      R && (u = R.label, D = R.color);
    }
    return /* @__PURE__ */ h(
      "div",
      {
        className: `col-span-12 flex items-center space-x-4 p-4 rounded-xl 
                  bg-gray-100 dark:bg-gray-900 ${d.blockClass || ""}`,
        children: [
          m && /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: m }),
          /* @__PURE__ */ h("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ e("p", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: f }),
            w === "chip" ? /* @__PURE__ */ e(
              $e,
              {
                label: u,
                variant: k,
                color: D,
                className: "mt-1"
              }
            ) : (
              /* TINY EDITOR */
              w === "tinyEditor" ? /* @__PURE__ */ e(
                "p",
                {
                  className: "mt-1 text-sm text-gray-900 dark:text-white break-words",
                  dangerouslySetInnerHTML: {
                    __html: u
                  }
                }
              ) : w === "audio" ? u ? /* @__PURE__ */ e(
                "audio",
                {
                  controls: !0,
                  src: u,
                  onClick: (R) => R.stopPropagation(),
                  className: "shadow-md rounded-full"
                },
                u
              ) : /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-gray-400", children: "N/A" }) : (
                /* DEFAULT */
                /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-gray-900 dark:text-white break-words", children: w == "date" ? /* @__PURE__ */ e("span", { children: Oe(u, d.format || "DD MMM YYYY") }) : u || "N/A" })
              )
            )
          ] })
        ]
      }
    );
  }, y = ({ col: d }) => {
    let m = c[d.titleKey], f = c[d.subtitleKey], u = c[d.imageKey], w = c[d.fallback_icon];
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
              alt: m,
              onClick: () => C({ src: u, alt: m }),
              className: "w-16 h-16 cursor-pointer rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
            }
          ) : w || /* @__PURE__ */ e("div", { className: "w-16 h-16 flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600", children: /* @__PURE__ */ e(Ie, { className: "w-8 h-8 text-gray-400" }) }),
          /* @__PURE__ */ h("div", { children: [
            /* @__PURE__ */ e("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: m }),
            /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: f })
          ] })
        ]
      }
    );
  };
  return /* @__PURE__ */ h(E, { children: [
    l && /* @__PURE__ */ e(
      Ge,
      {
        src: i.src,
        alt: i.alt,
        isOpen: l,
        setIsOpen: N
      }
    ),
    /* @__PURE__ */ e("div", { className: `grid grid-cols-12 gap-4 ${o || ""}`, children: n.map(
      (d) => d.type == "group" ? /* @__PURE__ */ e(y, { col: d }) : /* @__PURE__ */ e(p, { col: d })
    ) })
  ] });
}
const je = ({ config: c }) => {
  var se, ne, de, ce, he, ue, be, pe, t, g, T, K, G, W, Y, Q;
  const {
    title: s,
    fetchData: n = async () => {
    },
    isStaticData: o = !1,
    tableConfig: i = {},
    modalConfig: r = {},
    filterConfig: l
  } = c, [N, C] = M(!0), [p, y] = M(!1), [d, m] = M([]), [f, u] = M(null), [w, k] = M({
    search: "",
    rows_per_page: 50,
    current_page: 1
  }), [D, x] = M({}), [R, O] = M(!1), [j, _] = M(!1), [F, S] = M(!1), [L, P] = M(!1), [$, b] = M(!1), [I, H] = M(null), q = (v, A) => {
    v === "edit" ? (H(A), S(!0)) : v === "view" ? (H(A), b(!0)) : v === "delete" && (H(A), P(!0));
  }, J = async (v, A, B = "", X = "") => {
    y(!0);
    try {
      const z = await (v == null ? void 0 : v());
      (B || z.message) && ke(B || z.message, {
        variant: "success"
      }), A == null || A(z);
    } catch (z) {
      (X || z.message) && ke(X || z.message, { variant: "error" });
    } finally {
      y(!1);
    }
  }, re = (v) => {
    let A = v.newObject;
    o ? (m((B) => [A, ...B]), u((B) => ({
      ...B,
      current_page: 1
    }))) : (k((B) => ({
      ...B,
      current_page: 1
    })), w.current_page == 1 && ee()), _(!1);
  }, oe = (v) => {
    let A = v.newObject, B = v.targetObject;
    o ? m(
      (X) => X.map(
        (z) => z.id === B.id ? { ...z, ...A } : z
      )
    ) : ee(), S(!1);
  }, te = (v) => {
    if (!v) {
      P(!1), H(null);
      return;
    }
    o ? m(
      (A) => A.filter((B) => B.id !== v.targetObject.id)
    ) : d.length == 1 && w.current_page > 1 ? k((A) => ({
      ...A,
      current_page: A.current_page - 1
    })) : ee(), P(!1), H(null);
  }, ie = (v) => J(
    () => {
      var A, B;
      return (B = (A = r == null ? void 0 : r.addModal) == null ? void 0 : A.handleSubmit) == null ? void 0 : B.call(A, v);
    },
    re
  ), le = (v) => J(
    () => {
      var A, B;
      return (B = (A = r == null ? void 0 : r.editModal) == null ? void 0 : A.handleSubmit) == null ? void 0 : B.call(A, v, I);
    },
    oe
  ), ee = async () => {
    C(!0), n == null || n({ ...w, ...D }).then((v) => {
      m(v.data), u(v.pagination);
    }).catch((v) => {
      ke(v.message, { variant: "error" });
    }).finally(() => {
      C(!1);
    });
  }, xe = (v) => {
    var A;
    x((B) => ({
      ...v
    })), (A = i == null ? void 0 : i.filter) != null && A.useServerSideFilters && O((B) => !B);
  }, ve = (v, A) => v.filter(
    (B) => Object.entries(A).every(([X, z]) => B[X] === z)
  ), we = Me(() => {
    var v;
    return (v = i == null ? void 0 : i.filter) != null && v.useServerSideFilters ? d : ve(d, D);
  }, [d, D]);
  return U(() => {
    ee();
  }, [
    w.search,
    w.rows_per_page,
    w.current_page,
    R
  ]), /* @__PURE__ */ e(
    Ze,
    {
      maxSnack: 3,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right"
      },
      autoHideDuration: 3e3,
      action: (v) => /* @__PURE__ */ e(
        "button",
        {
          onClick: () => {
            window.dispatchEvent(
              new CustomEvent("closeSnackbar", { detail: v })
            );
          },
          className: "p-1 hover:bg-white/20 rounded-full transition-colors duration-200 text-white flex items-center justify-center",
          children: /* @__PURE__ */ e(fe, { className: "h-4 w-4" })
        }
      ),
      children: /* @__PURE__ */ h("div", { children: [
        /* @__PURE__ */ h("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3", children: [
          /* @__PURE__ */ h("div", { children: [
            /* @__PURE__ */ e("h1", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: s }),
            /* @__PURE__ */ e("p", { className: "text-md text-gray-600 dark:text-gray-400", children: c == null ? void 0 : c.description })
          ] }),
          /* @__PURE__ */ e("div", { className: "flex items-center space-x-3", children: /* @__PURE__ */ h(
            ae,
            {
              onClick: () => _(!0),
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
              ...i,
              pagination: {
                ...i.pagination,
                ...f
              },
              data: we,
              setServerSidePaginationData: k,
              onMenuAction: q,
              filterConfig: l,
              onFilterApply: xe,
              loading: N
            }
          }
        ),
        /* @__PURE__ */ e(
          me,
          {
            isOpen: j,
            onClose: () => {
              p || _(!1);
            },
            icon: (se = r.addModal) == null ? void 0 : se.icon,
            title: ((ne = r.addModal) == null ? void 0 : ne.title) || "Add New",
            size: ((de = r.addModal) == null ? void 0 : de.size) || "md",
            onFormSubmit: () => {
              var v;
              return (v = document.querySelector("#addForm")) == null ? void 0 : v.requestSubmit();
            },
            loadingBtn: p,
            actionButtons: r.addModal.actionButtons,
            children: /* @__PURE__ */ e(
              Te,
              {
                config: (r == null ? void 0 : r.addModal) || [],
                onSubmit: ie,
                initialData: {},
                type: "add",
                loading: p
              }
            )
          }
        ),
        /* @__PURE__ */ e(
          me,
          {
            isOpen: F,
            onClose: () => {
              p || S(!1);
            },
            icon: (ce = r.editModal) == null ? void 0 : ce.icon,
            title: ((he = r.editModal) == null ? void 0 : he.title) || "Edit",
            size: ((ue = r.editModal) == null ? void 0 : ue.size) || "md",
            onFormSubmit: () => {
              var v;
              return (v = document.querySelector("#editForm")) == null ? void 0 : v.requestSubmit();
            },
            actionButtons: r.editModal.actionButtons,
            loadingBtn: p,
            children: /* @__PURE__ */ e(
              Te,
              {
                config: r.editModal || [],
                onSubmit: le,
                initialData: I,
                type: "edit",
                loading: p
              }
            )
          }
        ),
        L && /* @__PURE__ */ e(
          me,
          {
            isOpen: L,
            onClose: (v) => {
              te(v);
            },
            icon: ((be = r.deleteModal) == null ? void 0 : be.icon) || /* @__PURE__ */ e(ye, { icon: "ph:warning-bold", className: "w-6 h-6 text-red-500" }),
            title: ((pe = r.deleteModal) == null ? void 0 : pe.title) || "Confirm Delete",
            size: ((t = r.deleteModal) == null ? void 0 : t.size) || "md",
            loading: p,
            actionButtons: r.deleteModal.actionButtons,
            executeFunction: J,
            selectedItem: I,
            children: /* @__PURE__ */ e("div", { className: "flex items-center space-x-2 py-3", children: /* @__PURE__ */ h("div", { children: [
              /* @__PURE__ */ e("p", { className: "text-md text-gray-700 dark:text-white", children: ((g = r.deleteModal) == null ? void 0 : g.confirmText) || "Are you sure you want to delete this item?" }),
              ((T = r.deleteModal) == null ? void 0 : T.referenceKey) && /* @__PURE__ */ e("p", { className: "text-md font-semibold text-gray-700 dark:text-white", children: I[(K = r.deleteModal) == null ? void 0 : K.referenceKey] })
            ] }) })
          }
        ),
        r.viewModal && /* @__PURE__ */ e(
          me,
          {
            isOpen: $,
            onClose: () => {
              b(!1), H(null);
            },
            icon: (G = r.viewModal) == null ? void 0 : G.icon,
            title: ((W = r.viewModal) == null ? void 0 : W.title) || "View Details",
            size: ((Y = r.viewModal) == null ? void 0 : Y.size) || "lg",
            footerConfig: r == null ? void 0 : r.viewModal.footer,
            children: (Q = r.viewModal) != null && Q.component ? /* @__PURE__ */ e(r.viewModal.component, { data: I }) : /* @__PURE__ */ e(
              sa,
              {
                data: I,
                config: r.viewModal || {}
              }
            )
          }
        )
      ] })
    }
  );
}, Re = a.shape({
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
  chipOptions: a.arrayOf(Re),
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
  options: a.arrayOf(Re)
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
  chipOptions: a.arrayOf(Re),
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
  const s = `
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
  c.textContent = s, document.head.appendChild(c);
};
function wa(c) {
  return U(() => {
    ua();
  }, []), /* @__PURE__ */ e(E, { children: /* @__PURE__ */ e(je, { config: c.config }) });
}
export {
  wa as default
};
//# sourceMappingURL=index.es.js.map
