import { jsx as e, Fragment as E, jsxs as h } from "react/jsx-runtime";
import Me, { useState as S, useRef as X, useEffect as z, useMemo as Se } from "react";
import { ChevronDown as Ie, Search as Ce, Check as _e, X as fe, Filter as je, ChevronLeft as ze, ChevronRight as He, EllipsisVertical as Ue, User as Pe, Plus as Ye } from "lucide-react";
import { createPortal as Ve } from "react-dom";
import { Icon as De } from "@iconify/react";
import { Editor as qe } from "@tinymce/tinymce-react";
import { SnackbarProvider as We, enqueueSnackbar as we } from "notistack";
import a from "prop-types";
const Oe = (s, d = "DD MMM YYYY") => {
  if (!s) return "N/A";
  const n = new Date(s);
  if (isNaN(n)) return "Invalid Date";
  const i = (r) => String(r).padStart(2, "0"), o = {
    YYYY: n.getFullYear(),
    YY: String(n.getFullYear()).slice(-2),
    MMMM: n.toLocaleString("en-US", { month: "long" }),
    MMM: n.toLocaleString("en-US", { month: "short" }),
    MM: i(n.getMonth() + 1),
    M: n.getMonth() + 1,
    DD: i(n.getDate()),
    D: n.getDate(),
    dddd: n.toLocaleString("en-US", { weekday: "long" }),
    ddd: n.toLocaleString("en-US", { weekday: "short" }),
    HH: i(n.getHours()),
    hh: i(n.getHours() % 12 || 12),
    mm: i(n.getMinutes()),
    ss: i(n.getSeconds()),
    A: n.getHours() >= 12 ? "PM" : "AM"
  };
  return d.replace(
    /YYYY|YY|MMMM|MMM|MM|M|DD|D|dddd|ddd|HH|hh|mm|ss|A/g,
    (r) => o[r]
  );
}, Ze = (s, d, n = []) => {
  if (!(d != null && d.trim())) return s;
  const i = d.toLowerCase(), o = (r) => r == null ? [] : typeof r == "object" ? Object.values(r).flatMap(o) : [String(r)];
  return s.filter((r) => {
    let l = [];
    return n.length > 0 ? n.forEach((N) => {
      r[N] !== void 0 && l.push(...o(r[N]));
    }) : l = o(r), l.some(
      (N) => N.toLowerCase().includes(i)
    );
  });
}, ae = Me.forwardRef(
  ({
    className: s = "",
    variant: d = "contained",
    color: n = "default",
    size: i = "default",
    fullWidth: o = !1,
    children: r,
    ...l
  }, N) => {
    var u;
    const M = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", y = {
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
    }, c = ((u = f[n]) == null ? void 0 : u[d]) || f.default.contained, g = y[i], m = `
      ${M} 
      ${c} 
      ${g} 
      ${o ? "w-full" : ""} 
      ${s}
    `.trim();
    return /* @__PURE__ */ e(
      "button",
      {
        ref: N,
        type: l.type || "button",
        className: m,
        ...l,
        children: r
      }
    );
  }
);
ae.displayName = "Button";
function W({ label: s, required: d = !1 }) {
  return /* @__PURE__ */ e(E, { children: /* @__PURE__ */ h("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: [
    s,
    d && /* @__PURE__ */ e("span", { className: "ml-1", children: "*" })
  ] }) });
}
const Je = ({
  options: s = [],
  value: d,
  onChange: n,
  placeholder: i = "Select option",
  className: o = "",
  disabled: r = !1,
  search: l = !1,
  label: N = "",
  required: M = !1,
  name: y = "",
  parentClass: f = "",
  multiple: c = !1,
  // ✅ NEW
  dropdownMaxHeight: g = ""
}) => {
  var B;
  const [m, u] = S(!1), [k, w] = S(""), [C, D] = S(!0), A = X(null), G = X(null), K = (b) => String(typeof b == "boolean" ? b : b ?? ""), j = c ? (d || []).map(K) : K(d), O = s.filter(
    (b) => b.label.toLowerCase().includes(k.toLowerCase())
  ), v = (b) => {
    const I = K(b);
    return c ? j.includes(I) : I === j;
  };
  z(() => {
    const b = (I) => {
      A.current && !A.current.contains(I.target) && (u(!1), w(""));
    };
    return document.addEventListener("mousedown", b), () => document.removeEventListener("mousedown", b);
  }, []), z(() => {
    if (m && A.current) {
      const b = A.current.getBoundingClientRect(), H = window.innerHeight - b.bottom;
      D(H < 200);
    }
  }, [m]), z(() => {
    m && G.current && G.current.focus();
  }, [m]);
  const L = (b) => {
    let I = b;
    if (b === "true" ? I = !0 : b === "false" && (I = !1), c) {
      const H = j.includes(K(b));
      let V;
      H ? V = d.filter(
        (J) => K(J) !== K(b)
      ) : V = [...d || [], I], n(V);
    } else
      n(I), u(!1);
    w("");
  }, T = c ? s.filter((b) => v(b.value)).map((b) => b.label).join(", ") : (B = s.find((b) => v(b.value))) == null ? void 0 : B.label;
  return /* @__PURE__ */ h("div", { className: f || "col-span-12", children: [
    /* @__PURE__ */ e(W, { label: N, required: M }),
    /* @__PURE__ */ h("div", { className: `relative ${o}`, ref: A, children: [
      /* @__PURE__ */ h(
        "button",
        {
          type: "button",
          onClick: () => !r && u(!m),
          disabled: r,
          className: `w-full h-10 px-3 border border-gray-300 dark:border-gray-600 rounded-md text-left text-sm flex items-center justify-between 
          ${T ? "dark:text-white" : "text-gray-500 dark:text-gray-400"} 
          ${r ? "opacity-50 cursor-not-allowed" : "dark:bg-gray-700"}`,
          children: [
            /* @__PURE__ */ e("span", { className: "truncate", children: T || i }),
            /* @__PURE__ */ e(
              Ie,
              {
                className: `w-4 h-4 transition-transform ${m ? "rotate-180" : ""}`
              }
            )
          ]
        }
      ),
      m && /* @__PURE__ */ h(
        "div",
        {
          className: `absolute z-50 w-full border rounded-md bg-white dark:bg-gray-700 shadow-lg 
            ${C ? "bottom-full mb-1" : "top-full mt-1"}`,
          children: [
            l && /* @__PURE__ */ e("div", { className: "p-2 border-b border-gray-200 dark:border-gray-600", children: /* @__PURE__ */ h("div", { className: "relative", children: [
              /* @__PURE__ */ e(Ce, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }),
              /* @__PURE__ */ e(
                "input",
                {
                  ref: G,
                  type: "text",
                  value: k,
                  onChange: (b) => w(b.target.value),
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
                  maxHeight: g || ""
                },
                children: O.length > 0 ? O.map((b) => /* @__PURE__ */ h(
                  "button",
                  {
                    type: "button",
                    onClick: () => L(String(b.value)),
                    className: `w-full px-3 py-2 text-left text-sm flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 
                    ${v(b.value) ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300" : ""}`,
                    children: [
                      /* @__PURE__ */ e("span", { children: b.label }),
                      c && v(b.value) && /* @__PURE__ */ e(_e, { className: "w-4 h-4" })
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
  ] }, y);
}, Qe = ({
  value: s = !0,
  onChange: d,
  text: n,
  options: i = [],
  label: o,
  required: r,
  name: l = "",
  disabled: N = !1,
  parentClass: M = ""
}) => {
  const y = i.length > 0 ? i : [
    { label: "Active", value: !0 },
    { label: "Inactive", value: !1 }
  ];
  return /* @__PURE__ */ e(E, { children: /* @__PURE__ */ h("div", { className: M || "col-span-12", children: [
    /* @__PURE__ */ e(W, { label: o, required: r }),
    /* @__PURE__ */ h("div", { className: "flex items-center justify-between h-10 gap-4 bg-gray-100 dark:bg-gray-700 px-3 rounded-md border border-gray-100 dark:border-gray-600", children: [
      n && /* @__PURE__ */ e("p", { className: "text-xs text-gray-600 dark:text-gray-400 flex-shrink overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px]", children: n }),
      /* @__PURE__ */ e("div", { className: "flex items-center gap-6", children: y.map((f, c) => /* @__PURE__ */ h(
        "label",
        {
          className: "flex items-center gap-2 cursor-pointer select-none",
          children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "radio",
                name: "switch-field",
                required: r && c === 0,
                value: f.value,
                disabled: N,
                checked: s === f.value,
                onChange: () => d(f.value),
                className: "w-4 h-4  border-gray-300 cursor-pointer"
              }
            ),
            /* @__PURE__ */ e("span", { className: "text-sm text-gray-700 dark:text-white", children: f.label })
          ]
        },
        c
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
function Xe({
  label: s = "",
  value: d = "",
  name: n = "",
  parentClass: i = "",
  onChange: o,
  disabled: r = !1,
  required: l = !1,
  placeholder: N = "Phone number",
  search: M = !1,
  countriesList: y = !1,
  defaultCountry: f = ""
}) {
  const c = (v) => ge.find((L) => L.code == v), [g, m] = S(
    c(f) || ge[0]
  ), [u, k] = S(""), [w, C] = S(!1), [D, A] = S(""), G = X();
  z(() => {
    if (typeof d == "string" && d.startsWith("+")) {
      const v = ge.filter((L) => d.startsWith("+" + L.phone)).sort((L, T) => T.phone.length - L.phone.length)[0];
      if (v) {
        m(v), k(d.replace("+" + v.phone, ""));
        return;
      }
    }
    k(d);
  }, [d]);
  const K = (v) => {
    const L = v.target.value.replace(/\D/g, "");
    k(L), g && o && o("+" + g.phone + L);
  }, j = (v) => {
    m(v), o && o("+" + v.phone + u), C(!1), A("");
  };
  z(() => {
    const v = (L) => {
      G.current && !G.current.contains(L.target) && C(!1);
    };
    return document.addEventListener("mousedown", v), () => document.removeEventListener("mousedown", v);
  }, []);
  const O = ge.filter(
    (v) => v.label.toLowerCase().includes(D.toLowerCase()) || v.phone.includes(D)
  );
  return y ? /* @__PURE__ */ e(E, { children: /* @__PURE__ */ h("div", { className: i || "col-span-12", children: [
    /* @__PURE__ */ e(W, { label: s, required: l }),
    /* @__PURE__ */ h("div", { className: "relative ", ref: G, children: [
      /* @__PURE__ */ h(
        "div",
        {
          className: `h-[40px] flex items-center border rounded-md px-2 bg-white dark:bg-gray-700 transition-all
  ${w ? "ring-0.5 ring-blue-100 border-blue-300" : "border-gray-300 dark:border-gray-600"}
  ${r ? "opacity-60 cursor-not-allowed" : ""}`,
          children: [
            /* @__PURE__ */ h(
              "button",
              {
                type: "button",
                disabled: r,
                onClick: () => C(!w),
                className: "flex items-center gap-1 pr-2 border-r border-gray-300 dark:border-gray-700 focus:outline-none",
                children: [
                  g ? /* @__PURE__ */ e(
                    "img",
                    {
                      src: `https://flagcdn.com/w20/${g.code.toLowerCase()}.png`,
                      alt: g.code,
                      className: "w-5 h-3 object-cover"
                    }
                  ) : /* @__PURE__ */ e("span", { className: "text-gray-400 text-xs", children: "🌐" }),
                  /* @__PURE__ */ e(Ie, { className: "w-3 h-3 text-gray-500" })
                ]
              }
            ),
            g && /* @__PURE__ */ h("span", { className: "ml-2 text-sm text-gray-700 dark:text-gray-200 whitespace-nowrap", children: [
              "+",
              g.phone
            ] }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "tel",
                value: u,
                onChange: K,
                required: l,
                disabled: r || !g,
                placeholder: g ? N : "Select a country",
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
                value: g && u ? "+" + g.phone + u : "",
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
        M && /* @__PURE__ */ e("div", { className: "p-2 border-b border-gray-200 dark:border-gray-700", children: /* @__PURE__ */ h("div", { className: "relative", children: [
          /* @__PURE__ */ e(Ce, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" }),
          /* @__PURE__ */ e(
            "input",
            {
              type: "text",
              value: D,
              onChange: (v) => A(v.target.value),
              placeholder: "Search country...",
              className: "w-full pl-9 pr-3 py-2 text-sm border rounded-md bg-white dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none "
            }
          )
        ] }) }),
        O.map((v) => /* @__PURE__ */ h(
          "button",
          {
            type: "button",
            onClick: () => j(v),
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
  ] }, n) }) : /* @__PURE__ */ e(E, { children: /* @__PURE__ */ h("div", { className: i || "col-span-12", children: [
    /* @__PURE__ */ e(W, { label: s, required: l }),
    /* @__PURE__ */ e(
      "input",
      {
        type: "text",
        value: d,
        onChange: (L) => {
          const T = L.target.value.replace(/[^+\d]/g, ""), B = T.startsWith("+") ? "+" + T.replace(/[+]/g, "").slice(0) : T;
          o(B);
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
const Fe = Me.forwardRef(
  ({ className: s = "", label: d, required: n, ...i }, o) => {
    const r = `
      placeholder-gray-400 dark:placeholder-gray-400
      ${s}
    `.trim();
    return /* @__PURE__ */ e(E, { children: /* @__PURE__ */ h("div", { className: i.parentClass || "col-span-12", children: [
      /* @__PURE__ */ e(W, { label: d, required: n }),
      /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ e(
        "textarea",
        {
          className: r,
          ref: o,
          required: n,
          ...i
        }
      ) })
    ] }, i.name) });
  }
);
Fe.displayName = "TextArea";
const ea = ({
  label: s = "",
  value: d = null,
  onChange: n,
  required: i = !1,
  accept: o = "image/*",
  id: r,
  dragDrop: l = !1,
  name: N = "",
  parentClass: M = ""
}) => {
  const [y, f] = S(d), [c, g] = S(!1), m = X(null);
  z(() => {
    f(d instanceof File ? URL.createObjectURL(d) : d);
  }, [d]);
  const u = (D) => {
    if (!D || D.length === 0) {
      f(null), n == null || n(null);
      return;
    }
    const A = D[0], G = URL.createObjectURL(A);
    f({ file: A, preview: G }), n == null || n(A);
  };
  return /* @__PURE__ */ e(E, { children: /* @__PURE__ */ h("div", { className: M || "col-span-12", children: [
    /* @__PURE__ */ e(W, { label: s, required: i }),
    /* @__PURE__ */ h(
      "div",
      {
        className: `relative  rounded-md p-2 transition-all ${c ? "border border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900" : "border bg-gray-50 dark:bg-gray-700"}`,
        onDragOver: (D) => {
          l && (D.preventDefault(), g(!0));
        },
        onDragLeave: (D) => {
          l && (D.preventDefault(), g(!1));
        },
        onDrop: (D) => {
          l && (D.preventDefault(), g(!1), u(D.dataTransfer.files));
        },
        children: [
          /* @__PURE__ */ h(
            "div",
            {
              className: `flex items-center space-x-3 transition-all ${c ? "filter blur-sm" : ""}`,
              children: [
                /* @__PURE__ */ e(
                  "div",
                  {
                    className: "cursor-pointer",
                    onClick: () => m.current.click(),
                    children: y ? /* @__PURE__ */ e(
                      "img",
                      {
                        src: y.preview || y,
                        alt: "preview",
                        className: "object-cover w-20 h-20 rounded-full"
                      }
                    ) : /* @__PURE__ */ e(E, { children: /* @__PURE__ */ e("div", { className: "rounded-full bg-gray-200 dark:bg-gray-800 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ e(
                      De,
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
                    ref: m,
                    id: r,
                    type: "file",
                    accept: o,
                    onChange: (D) => u(D.target.files),
                    required: i && !y,
                    className: "inline-flex items-center justify-center p-2 text-gray-400 text-sm file:cursor-pointer"
                  }
                )
              ]
            }
          ),
          l && c && /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ e("span", { className: "text-blue-500 font-semibold text-xl", children: "Drop here" }) })
        ]
      }
    )
  ] }, N) });
}, Be = Me.forwardRef(
  ({
    label: s,
    required: d,
    parentClass: n = "",
    className: i = "",
    type: o = "text",
    onKeyDown: r,
    negativeNumberAllow: l = !0,
    ...N
  }, M) => {
    const [y, f] = S(!1), c = (m) => {
      if (o === "number") {
        if (["e", "E", "+"].includes(m.key)) {
          m.preventDefault();
          return;
        }
        if (l == !1 && m.key === "-") {
          m.preventDefault();
          return;
        }
        if (["ArrowUp", "ArrowDown"].includes(m.key)) {
          m.preventDefault();
          return;
        }
      }
      r == null || r(m);
    }, g = `
      h-10 placeholder-gray-400 dark:placeholder-gray-400
      ${o === "password" ? "pr-10" : ""}
      ${o === "number" ? "no-spinner" : ""}
      ${i}
    `.trim();
    return /* @__PURE__ */ e(E, { children: /* @__PURE__ */ h("div", { className: n || "col-span-12", children: [
      /* @__PURE__ */ e(W, { label: s, required: d }),
      /* @__PURE__ */ h("div", { className: "relative", children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: o === "password" && y ? "text" : o,
            ref: M,
            required: d,
            onKeyDown: c,
            className: g,
            ...N
          }
        ),
        o === "password" && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            tabIndex: -1,
            onClick: () => f((m) => !m),
            className: "absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200",
            children: /* @__PURE__ */ e(
              De,
              {
                icon: y ? "mdi:eye-off-outline" : "mdi:eye-outline",
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
const aa = ({
  key: s,
  editorKey: d = "",
  value: n = "",
  onChange: i,
  label: o = "",
  required: r = !1,
  placeholder: l = "",
  parentClass: N = "col-span-12",
  height: M = 400,
  inline: y = !1,
  disabled: f = !1,
  plugins: c,
  toolbar: g,
  menubar: m = !1,
  fontFamily: u = "Inter, sans-serif",
  initConfig: k = {},
  imageUploadHandler: w
  // ✅ Promise function passed from parent
}) => /* @__PURE__ */ h("div", { className: N, children: [
  o && /* @__PURE__ */ e(W, { label: o, required: r }),
  /* @__PURE__ */ e(
    qe,
    {
      apiKey: d,
      value: n,
      disabled: f,
      init: {
        height: M,
        inline: y,
        menubar: m,
        branding: !1,
        statusbar: !0,
        automatic_uploads: !0,
        images_upload_handler: (G) => new Promise((K, j) => {
          if (!w) {
            K(`data:${G.blob().type};base64,${G.base64()}`);
            return;
          }
          w(G).then((O) => {
            O ? K(O) : j("Upload failed: No URL returned");
          }).catch((O) => {
            j(
              typeof O == "string" ? O : (O == null ? void 0 : O.message) || "Image upload failed"
            );
          });
        }),
        plugins: c ?? [
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
        toolbar: g ?? "undo redo | blocks | bold italic underline forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media table | removeformat | code fullscreen preview",
        placeholder: l,
        content_style: `
            body {
                font-family: ${u};
            }
            `,
        ...k
      },
      onEditorChange: (G) => {
        i && i(G);
      }
    }
  )
] }, s), ra = ({
  name: s = "",
  label: d = "",
  // label for single checkbox
  options: n = [],
  // array of { label, value } for multiple
  value: i = null,
  // boolean for single, array for multiple, or string for single select
  onChange: o,
  disabled: r = !1,
  required: l = !1,
  parentClass: N = "col-span-12",
  className: M = "",
  multiSelect: y = !1
  // ✅ if true, only one option can be selected (like radio)
}) => {
  const f = Array.isArray(n) && n.length > 0, c = (u) => f ? y ? Array.isArray(i) && i.includes(u) : i === u : !!i, g = (u) => {
    o == null || o(u.target.checked, s);
  }, m = (u, k) => {
    if (o)
      if (!y)
        o(k ? u : "", s);
      else {
        const w = Array.isArray(i) ? [...i] : [];
        if (k)
          w.includes(u) || w.push(u);
        else {
          const C = w.indexOf(u);
          C > -1 && w.splice(C, 1);
        }
        o(w, s);
      }
  };
  return f ? /* @__PURE__ */ e(E, { children: /* @__PURE__ */ h("div", { className: `${N}`, children: [
    /* @__PURE__ */ e(W, { label: d, required: l }),
    /* @__PURE__ */ e("div", { className: "flex flex-col space-y-2", children: n.map((u, k) => /* @__PURE__ */ h("div", { className: "flex items-center", children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          name: s,
          value: u.value,
          checked: c(u.value),
          disabled: r || u.disabled,
          required: l && k === 0,
          onChange: (w) => m(u.value, w.target.checked),
          className: `h-4 w-4 cursor-pointer text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${M}`
        },
        s
      ),
      u.label && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: s,
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
        name: s,
        checked: c(),
        disabled: r,
        required: l,
        onChange: g,
        className: `h-4 w-4 text-blue-600 cursor-pointer border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${M}`
      }
    ),
    d && /* @__PURE__ */ e(
      "label",
      {
        htmlFor: s,
        className: "ml-2 text-sm text-gray-700 dark:text-gray-200 select-none",
        children: d
      }
    )
  ] });
}, Ee = ({ field: s, formData: d, handleChange: n }) => {
  const {
    key: i,
    label: o,
    type: r,
    options: l,
    placeholder: N,
    rows: M,
    inputClass: y,
    search: f,
    accept: c,
    text: g,
    required: m = !1,
    minLength: u,
    dragDrop: k,
    parentClass: w,
    countriesList: C,
    defaultCountry: D,
    multiple: A,
    dropdownMaxHeight: G,
    editorKey: K,
    fontFamily: j,
    disabled: O,
    negativeNumberAllow: v
  } = s;
  let L = d == null ? void 0 : d[i];
  L == null && (L = "");
  const T = N || (r === "select" ? `Select ${o}` : `Enter ${o}`), B = "w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm focus:outline-none focus:ring-1 focus:ring-blue-200 bg-white text-black dark:bg-gray-700 dark:text-white";
  switch (r) {
    case "select":
      return /* @__PURE__ */ e(
        Je,
        {
          options: l || [],
          value: L,
          onChange: (b) => n(i, b),
          placeholder: T,
          className: y || "",
          search: f,
          required: m,
          label: o,
          name: i,
          disabled: O,
          parentClass: w,
          multiple: A,
          dropdownMaxHeight: G
        }
      );
    case "checkbox":
      return /* @__PURE__ */ e(
        ra,
        {
          name: i,
          label: o,
          options: l || [],
          value: L,
          onChange: (b) => n(i, b),
          required: m,
          parentClass: w,
          className: y || "",
          multiSelect: A,
          disabled: O
        }
      );
    case "switch":
      return /* @__PURE__ */ e(
        Qe,
        {
          value: L,
          onChange: (b) => n(i, b),
          text: g,
          options: l || [],
          label: o,
          required: m,
          name: i,
          disabled: O,
          parentClass: w
        }
      );
    case "phone":
      return /* @__PURE__ */ e(
        Xe,
        {
          value: L,
          onChange: (b) => n(i, b),
          countriesList: C,
          defaultCountry: D,
          required: m,
          placeholder: T,
          search: f,
          label: o,
          name: i,
          disabled: O,
          parentClass: w
        }
      );
    case "textarea":
      return /* @__PURE__ */ e(
        Fe,
        {
          value: L,
          onChange: (b) => n(i, b.target.value),
          placeholder: T,
          rows: M || 3,
          className: `${B} ${y || ""}`,
          required: m,
          name: i,
          label: o,
          disabled: O,
          parentClass: w
        }
      );
    case "image":
      return /* @__PURE__ */ e(
        ea,
        {
          value: L,
          onChange: (b) => n(i, b),
          required: m,
          accept: c || "image/*",
          id: `file-${i}`,
          dragDrop: k,
          label: o,
          name: i,
          parentClass: w
        }
      );
    case "tinyEditor":
      return /* @__PURE__ */ e(
        aa,
        {
          value: L,
          onChange: (b) => n(i, b),
          required: m,
          placeholder: T,
          label: o,
          parentClass: w,
          fontFamily: j,
          editorKey: K,
          disabled: O
        },
        `editor-${i}`
      );
    default:
      return /* @__PURE__ */ e(
        Be,
        {
          type: r || "text",
          value: L,
          onChange: (b) => n(i, b.target.value),
          placeholder: T,
          className: `${B} ${y || ""}`,
          required: m,
          name: i,
          minLength: u,
          label: o,
          negativeNumberAllow: v,
          parentClass: w,
          disabled: O
        }
      );
  }
}, ta = ({ isOpen: s, onClose: d, config: n, onApply: i }) => {
  var y;
  const [o, r] = S({}), l = (f, c) => {
    r((g) => ({ ...g, [f]: c }));
  }, N = () => {
    i == null || i(o), d();
  }, M = () => {
    r({}), i == null || i({}), d();
  };
  return /* @__PURE__ */ h(E, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: `fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${s ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
        onClick: d
      }
    ),
    /* @__PURE__ */ h(
      "div",
      {
        className: `fixed top-0 right-0 h-full w-[28rem] bg-white dark:bg-gray-900 shadow-2xl z-50 flex flex-col border-l border-gray-200 dark:border-gray-700
          transform transition-transform duration-300 ease-in-out
          ${s ? "translate-x-0" : "translate-x-full"}
        `,
        children: [
          /* @__PURE__ */ h("div", { className: "flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700", children: [
            /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: "Filters" }),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: d,
                className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition",
                children: /* @__PURE__ */ e(fe, { className: "w-5 h-5 text-gray-500 dark:text-gray-400" })
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 py-3", children: n != null && n.component ? /* @__PURE__ */ e(n.component, { filters: o, onFilterChange: l }) : /* @__PURE__ */ e("div", { className: "space-y-4", children: (y = n == null ? void 0 : n.fields) == null ? void 0 : y.map((f) => /* @__PURE__ */ e(E, { children: /* @__PURE__ */ e(
            Ee,
            {
              field: f,
              formData: o,
              handleChange: l
            },
            f.key
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
}, Te = {
  contained: "bg",
  outline: "border !bg-transparent",
  soft: "bg opacity-90"
}, Ge = ({
  label: s,
  variant: d = "contained",
  // contained | outline | soft
  color: n = "green",
  className: i = ""
}) => {
  const o = Le[n] || Le.green, r = Te[d] || Te.contained, l = d === "outline" ? o.border : o.bg;
  return /* @__PURE__ */ e(
    "span",
    {
      className: `inline-flex justify-center items-center rounded-sm text-xs font-semibold px-3 py-1 min-w-[78px]
        ${l}
        ${r}
        ${i}`,
      children: s
    }
  );
}, la = ({ rows: s = 5, columns: d = 5 }) => /* @__PURE__ */ h(E, { children: [
  /* @__PURE__ */ e("div", { className: "w-full mb-6 inline-flex justify-end items-center", children: /* @__PURE__ */ e("div", { className: "h-8 w-80 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }),
  /* @__PURE__ */ e("div", { className: "overflow-hidden rounded-md border border-gray-200 dark:border-gray-800", children: /* @__PURE__ */ h("table", { className: "w-full border-collapse", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { className: "bg-gray-50 dark:bg-gray-900", children: Array.from({ length: d }).map((n, i) => /* @__PURE__ */ e("th", { className: "px-4 py-3", children: /* @__PURE__ */ e("div", { className: "h-6 w-24 bg-gray-300 dark:bg-gray-700 rounded animate-pulse  inline-flex justify-center items-center" }) }, i)) }) }),
    /* @__PURE__ */ e("tbody", { children: Array.from({ length: s }).map((n, i) => /* @__PURE__ */ e(
      "tr",
      {
        className: "border-t border-gray-200 dark:border-gray-800",
        children: Array.from({ length: d }).map((o, r) => /* @__PURE__ */ e("td", { className: "px-4 py-6", children: /* @__PURE__ */ e("div", { className: "h-6 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }, r))
      },
      i
    )) })
  ] }) })
] }), $e = ({ src: s, alt: d = "preview", isOpen: n, setIsOpen: i }) => {
  const o = () => i(!1);
  return z(() => {
    const r = (l) => {
      l.key === "Escape" && o();
    };
    return n && (document.body.style.overflow = "hidden", document.addEventListener("keydown", r)), () => {
      document.body.style.overflow = "", document.removeEventListener("keydown", r);
    };
  }, [n]), /* @__PURE__ */ e(E, { children: /* @__PURE__ */ h(
    "div",
    {
      className: `fixed inset-0 z-50 flex items-center justify-center bg-black/70 dark:bg-black/80 \r
                   backdrop-blur-sm animate-in fade-in duration-200`,
      onClick: o,
      children: [
        /* @__PURE__ */ e(
          "button",
          {
            onClick: o,
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
                src: s,
                alt: d,
                className: "w-full max-h-[90vh] object-contain rounded-xl"
              }
            )
          }
        )
      ]
    }
  ) });
}, na = ({ config: s }) => {
  const {
    data: d = [],
    table_head: n = [],
    loading: i = !1,
    search: o = {
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
    onMenuAction: M,
    setServerSidePaginationData: y = () => {
    },
    onFilterApply: f,
    filterConfig: c = null
  } = s, [g, m] = S(""), [u, k] = S(null), [w, C] = S([]), [D, A] = S({}), [G, K] = S(!1), [j, O] = S(null), [v, L] = S(!1), T = Se(() => !o.enabled || !g.trim() || o.useServerSideSearch ? d : Ze(d, g, o.searchKeys || []), [d, g, o]), [B, b] = S(1), [I, H] = S((l == null ? void 0 : l.rows_per_page) || 50), [V, J] = S(T.length || 0), re = l != null && l.useServerSidePagination ? l.total_pages : Math.ceil(T.length / I), ie = Se(() => {
    if (l.useServerSidePagination) return T;
    const t = (B - 1) * I;
    return T.slice(t, t + I);
  }, [T, B, I]), te = X(null), de = X({}), le = X(null), ee = (t) => {
    m(t), b(1), o.useServerSideSearch && (le.current && clearTimeout(le.current), le.current = setTimeout(async () => {
      try {
        await y((p) => ({
          ...p,
          search: t,
          current_page: 1
        }));
      } catch (p) {
        console.error("Search error:", p);
      }
    }, 800));
  }, ye = (t, p, P) => {
    P.stopPropagation(), k(null), M == null || M(t.type, p);
  }, xe = (t, p, P) => {
    p.stopPropagation(), C(P);
    const _ = p.currentTarget;
    de.current[t] = _;
    const $ = _.getBoundingClientRect(), q = 192, Y = P.length * 40, Q = window.innerWidth, oe = window.innerHeight, R = Q - $.right < q ? $.left - q + $.width : $.left, Z = oe - $.bottom < Y && $.top > Y ? $.top - Y - 2 : $.bottom + 2;
    A({
      top: Math.max(8, Math.min(Z, oe - Y - 8)),
      left: Math.max(8, Math.min(R, Q - q - 8))
    }), k(u === t ? null : t);
  }, ve = (t) => (B - 1) * I + t + 1, se = (t) => {
    O(t), L(!0);
  }, ne = (t, p, P, _ = null) => /* @__PURE__ */ e(E, { children: t ? /* @__PURE__ */ e(
    "img",
    {
      src: t,
      alt: p || "Avatar",
      onClick: ($) => {
        $.stopPropagation(), $.preventDefault(), se({ src: t, alt: p });
      },
      className: `w-10 h-10 cursor-pointer rounded-full object-cover border border-gray-200 dark:border-gray-700 ${P || ""}`
    }
  ) : /* @__PURE__ */ e(E, { children: _ || /* @__PURE__ */ e(
    "div",
    {
      className: `w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${P || ""}`,
      children: /* @__PURE__ */ e(Pe, { className: "w-6 h-6 text-gray-400 dark:text-gray-400" })
    }
  ) }) }), ce = (t, p) => /* @__PURE__ */ h("div", { className: `flex items-center space-x-4 ${p.className || ""}`, children: [
    p.imageKey ? ne(t[p.imageKey], t[p.titleKey], "group-avatar") : "",
    /* @__PURE__ */ h("div", { children: [
      /* @__PURE__ */ e("p", { className: "font-medium text-gray-900 dark:text-white group-title", children: t[p.titleKey] || "" }),
      /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400 group-sub-title", children: t[p.subtitleKey] || "" })
    ] })
  ] }), he = (t, p) => {
    var q;
    let P = String(t);
    const _ = p.variant || "contained";
    let $ = p.defaultColor;
    if (((q = p == null ? void 0 : p.chipOptions) == null ? void 0 : q.length) > 0) {
      let Y = p == null ? void 0 : p.chipOptions.find((Q) => Q.value == t);
      Y && (P = Y.label, $ = Y.color);
    }
    return /* @__PURE__ */ e(
      Ge,
      {
        label: P,
        variant: _,
        color: $,
        className: p.className || ""
      }
    );
  }, ue = (t, p, P) => {
    const _ = p[t.key];
    return t.type === "menu_actions" ? /* @__PURE__ */ e("div", { className: `text-center ${t.className || ""}`, children: /* @__PURE__ */ e(
      "button",
      {
        ref: ($) => de.current[p.id || p._id] = $,
        onClick: ($) => xe(p.id || p._id, $, t.menuList),
        className: "p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition text-gray-700 dark:text-gray-300",
        children: /* @__PURE__ */ e(Ue, { className: "h-4 w-4" })
      }
    ) }) : t.type === "index" ? /* @__PURE__ */ e("span", { className: t.className || "", children: ve(P) }) : t.type === "group" ? ce(p, t) : t.type === "chip" ? /* @__PURE__ */ e(E, { children: he(_, t) }) : t.type === "date" ? /* @__PURE__ */ e("span", { className: t.className || "", children: Oe(_, t.format || "DD MMM YYYY") }) : t.type === "avatar" ? /* @__PURE__ */ e(E, { children: ne(_, t.alt, t.className, t.fallback_icon) }) : /* @__PURE__ */ e("span", { className: t.className || "", children: _ || "N/A" });
  }, be = (t, p) => {
    if (t.onClickDetails)
      return M == null ? void 0 : M("view", p);
    if (typeof t.handleClick == "function")
      return t.handleClick(p);
  }, pe = (t) => t.onClickDetails || typeof t.handleClick == "function";
  return z(() => {
    const t = () => {
      u && k(null);
    };
    return window.addEventListener("scroll", t, !0), () => {
      window.removeEventListener("scroll", t, !0);
    };
  }, [u]), z(() => {
    const t = (p) => {
      te.current && !te.current.contains(p.target) && k(null);
    };
    return document.addEventListener("click", t), () => document.removeEventListener("click", t);
  }, []), z(() => {
    l != null && l.rows_per_page && (l != null && l.useServerSidePagination) && H((l == null ? void 0 : l.rows_per_page) || 50), l.current_page && b(l.current_page);
  }, [
    l.rows_per_page,
    l == null ? void 0 : l.useServerSidePagination,
    l.current_page
  ]), z(() => {
    J(
      l != null && l.useServerSidePagination ? l.total_records : T.length
    ), T.length <= I * (B - 1) && !(l != null && l.useServerSidePagination) && b((t) => t - 1 || 1);
  }, [
    T.length,
    l.total_records,
    l == null ? void 0 : l.useServerSidePagination
  ]), i ? /* @__PURE__ */ e(la, { rows: 6, columns: 6 }) : /* @__PURE__ */ h(E, { children: [
    /* @__PURE__ */ h("div", { className: "flex justify-end items-center mb-4 gap-2", children: [
      o.enabled && /* @__PURE__ */ e("div", { className: "", children: /* @__PURE__ */ h("div", { className: "relative min-w-[300px]", children: [
        /* @__PURE__ */ e(Ce, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-300" }),
        /* @__PURE__ */ e(
          "input",
          {
            type: "text",
            placeholder: o.placeholder || "Search...",
            value: g,
            onChange: (t) => ee(t.target.value),
            className: "w-full h-[36px] pl-9 pr-4 py-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-300 dark:ring-blue-200 disabled:opacity-50"
          }
        )
      ] }) }),
      c && r.enabled && /* @__PURE__ */ h(ae, { onClick: () => K(!0), variant: "contained", children: [
        /* @__PURE__ */ e(je, { className: "w-4 h-4 mr-2" }),
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
        /* @__PURE__ */ e("tbody", { className: "bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700", children: ie.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e(
          "td",
          {
            colSpan: n.length,
            className: "text-center py-10 text-gray-500 dark:text-gray-400",
            children: N
          }
        ) }) : ie.map((t, p) => /* @__PURE__ */ e(
          "tr",
          {
            className: "hover:bg-gray-50 dark:hover:bg-blue-800/10 transition",
            children: n.map((P) => /* @__PURE__ */ e(
              "td",
              {
                className: `px-6 py-4 text-sm text-gray-900 dark:text-gray-100 min-w-max max-w-[300px] truncate ${pe(P) ? "cursor-pointer" : ""}`,
                title: String(t[P.key] ?? ""),
                onClick: () => be(P, t),
                children: P.render ? P.render(t, p) : ue(P, t, p)
              },
              P.key
            ))
          },
          t.id || t._id || p
        )) })
      ] }) }),
      (l == null ? void 0 : l.enabled) && T.length > 0 && /* @__PURE__ */ h("div", { className: " bg-gray-50 dark:bg-gray-700/60 px-6 py-3 flex flex-wrap items-center justify-between border-t border-gray-200 dark:border-gray-600 gap-3", children: [
        /* @__PURE__ */ h("div", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
          "Showing ",
          (B - 1) * I + 1,
          " to",
          " ",
          Math.min(B * I, V),
          " of ",
          V,
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
                  const p = Number(t.target.value);
                  H(p), b(1), l.useServerSidePagination && y((P) => ({
                    ...P,
                    current_page: 1,
                    rows_per_page: p
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
                  if (B > 1) {
                    const t = B - 1;
                    b(t), l.useServerSidePagination && y((p) => ({
                      ...p,
                      current_page: t
                    }));
                  }
                },
                disabled: B === 1,
                className: "p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition text-gray-500 dark:text-gray-300 disabled:opacity-50",
                children: /* @__PURE__ */ e(ze, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ h("span", { className: "text-sm text-gray-800 dark:text-gray-200", children: [
              "Page ",
              B,
              " of ",
              re
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => {
                  if (B < re) {
                    const t = B + 1;
                    b(t), l.useServerSidePagination && y((p) => ({
                      ...p,
                      current_page: t
                    }));
                  }
                },
                disabled: B === re,
                className: "p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition text-gray-500 dark:text-gray-300 disabled:opacity-50",
                children: /* @__PURE__ */ e(He, { className: "h-4 w-4" })
              }
            )
          ] })
        ] })
      ] })
    ] }),
    u && Ve(
      /* @__PURE__ */ e(
        "div",
        {
          ref: te,
          style: {
            position: "fixed",
            top: `${D.top}px`,
            left: `${D.left}px`,
            zIndex: 9999
          },
          className: "w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg border border-gray-200 dark:border-gray-600",
          children: w.map((t, p) => /* @__PURE__ */ h(
            "button",
            {
              onClick: (P) => ye(
                t,
                d.find(
                  (_) => _.id === u || _._id == u
                ),
                P
              ),
              className: `w-full flex items-center gap-2 px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-600 ${t.variant === "danger" ? "text-red-600 dark:text-red-500" : "text-gray-700 dark:text-gray-200"}`,
              children: [
                t.icon && /* @__PURE__ */ e("span", { className: "shrink-0", children: t.icon }),
                t.title
              ]
            },
            p
          ))
        }
      ),
      document.body
    ),
    c && /* @__PURE__ */ e(
      ta,
      {
        isOpen: G,
        onClose: () => K(!1),
        config: c,
        onApply: f
      }
    ),
    v && /* @__PURE__ */ e(
      $e,
      {
        src: j.src,
        alt: j.alt,
        isOpen: v,
        setIsOpen: L
      }
    )
  ] });
}, me = ({
  isOpen: s,
  onClose: d,
  icon: n,
  title: i,
  children: o,
  size: r = "md",
  actionButtons: l = [],
  actions: N,
  showDefaultClose: M = !0,
  footerConfig: y = null,
  hideFooter: f = !1,
  onFormSubmit: c = () => {
  },
  onCancel: g,
  loadingBtn: m = !1,
  executeFunction: u = () => {
  },
  selectedItem: k = null
}) => {
  if (!s) return null;
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
        onClick: () => d()
      }
    ),
    /* @__PURE__ */ h(
      "div",
      {
        className: `relative bg-white rounded-lg shadow-xl w-full ${w[r] || w.md} max-h-[90vh] flex flex-col dark:bg-gray-800`,
        children: [
          /* @__PURE__ */ h("div", { className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0", children: [
            /* @__PURE__ */ h("div", { className: "flex items-center gap-1", children: [
              n && /* @__PURE__ */ e("span", { children: n }),
              /* @__PURE__ */ e("h3", { className: "text-lg font-medium text-gray-900 dark:text-white", children: i })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => d(),
                className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
                children: /* @__PURE__ */ e(fe, { className: "w-6 h-6" })
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto p-4", children: o }),
          l.length > 0 && /* @__PURE__ */ e("div", { className: "px-4 py-3 flex justify-end gap-3 border-t border-gray-200 dark:border-gray-700 sm:px-6", children: l.map((C) => /* @__PURE__ */ e(
            ae,
            {
              onClick: (D) => {
                C.type == "submit" ? c(D) : u(
                  () => {
                    var A;
                    return (A = C == null ? void 0 : C.onClick) == null ? void 0 : A.call(C, D, k);
                  },
                  (A) => d == null ? void 0 : d(A)
                );
              },
              disabled: m || C.disabled,
              variant: C.variant || "contained",
              color: C.color || "primary",
              className: `min-w-[100px] ${C.className}`,
              type: C.type || "button",
              children: m ? /* @__PURE__ */ h("div", { className: "flex items-center", children: [
                /* @__PURE__ */ e("div", { className: "animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-2 border-t-white mr-2" }),
                C.label || "Submit",
                "..."
              ] }) : C.label || "Submit"
            }
          )) })
        ]
      }
    )
  ] });
}, Ae = ({ config: s, onSubmit: d, initialData: n = {} }) => {
  var y;
  const { formClass: i = "grid grid-cols-12 gap-4", formFields: o = [] } = s || {}, [r, l] = S(n);
  z(() => {
    l(n);
  }, []);
  const N = (f, c) => {
    l((g) => ({ ...g, [f]: c }));
  }, M = (f) => {
    f.preventDefault();
    const c = f.target;
    if (!c.checkValidity()) {
      c.reportValidity();
      return;
    }
    d(r);
  };
  return /* @__PURE__ */ e(
    "form",
    {
      id: (y = s.title) != null && y.toLowerCase().includes("edit") ? "editForm" : "addForm",
      onSubmit: M,
      className: i,
      noValidate: !1,
      children: o.map((f) => /* @__PURE__ */ e(E, { children: /* @__PURE__ */ e(
        Ee,
        {
          field: f,
          formData: r,
          handleChange: N
        },
        f.key
      ) }))
    }
  );
};
function oa({ data: s, config: d }) {
  const { fields: n, containerClass: i } = d, [o, r] = S(null), [l, N] = S(!1), M = (c) => {
    r(c), N(!0);
  }, y = ({ col: c }) => {
    let g = c == null ? void 0 : c.icon, m = c.label, u = s[c.key], k = c.type, w = c.variant || "outline", C = c.defaultColor;
    if (k == "chip" && c.chipOptions.length > 0) {
      let D = c == null ? void 0 : c.chipOptions.find((A) => A.value == u);
      D && (u = D.label, C = D.color);
    }
    return /* @__PURE__ */ h(
      "div",
      {
        className: `col-span-12 flex items-center space-x-4 p-4 rounded-xl 
                    bg-gray-100 dark:bg-gray-900 ${c.blockClass}`,
        children: [
          g && /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: g }),
          /* @__PURE__ */ h("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ e("p", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: m }),
            k == "chip" ? /* @__PURE__ */ e(E, { children: /* @__PURE__ */ e(
              Ge,
              {
                label: u,
                variant: w,
                color: C,
                className: "mt-1"
              }
            ) }) : k == "tinyEditor" ? /* @__PURE__ */ e(
              "p",
              {
                className: "mt-1 text-sm text-gray-900 dark:text-white break-words",
                dangerouslySetInnerHTML: {
                  __html: u
                }
              }
            ) : /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-gray-900 dark:text-white break-words", children: k == "date" ? /* @__PURE__ */ e("span", { children: Oe(u, c.format || "DD MMM YYYY") }) : u || "N/A" })
          ] })
        ]
      }
    );
  }, f = ({ col: c }) => {
    let g = s[c.titleKey], m = s[c.subtitleKey], u = s[c.imageKey], k = s[c.fallback_icon];
    return /* @__PURE__ */ h(
      "div",
      {
        className: `col-span-12 flex items-center space-x-4 p-4 rounded-xl 
      bg-gray-100 dark:bg-gray-900 
      ${c.blockClass}`,
        children: [
          u ? /* @__PURE__ */ e(
            "img",
            {
              src: u,
              alt: g,
              onClick: () => M({ src: u, alt: g }),
              className: "w-16 h-16 cursor-pointer rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
            }
          ) : k || /* @__PURE__ */ e("div", { className: "w-16 h-16 flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600", children: /* @__PURE__ */ e(Pe, { className: "w-8 h-8 text-gray-400" }) }),
          /* @__PURE__ */ h("div", { children: [
            /* @__PURE__ */ e("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: g }),
            /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: m })
          ] })
        ]
      }
    );
  };
  return /* @__PURE__ */ h(E, { children: [
    l && /* @__PURE__ */ e(
      $e,
      {
        src: o.src,
        alt: o.alt,
        isOpen: l,
        setIsOpen: N
      }
    ),
    /* @__PURE__ */ e("div", { className: `grid grid-cols-12 gap-4 ${i || ""}`, children: n.map(
      (c) => c.type == "group" ? /* @__PURE__ */ e(f, { col: c }) : /* @__PURE__ */ e(y, { col: c })
    ) })
  ] });
}
const Ke = ({ config: s }) => {
  var se, ne, ce, he, ue, be, pe, t, p, P, _, $, q, Y, Q, oe;
  const {
    title: d,
    fetchData: n = async () => {
    },
    isStaticData: i = !1,
    tableConfig: o = {},
    modalConfig: r = {},
    filterConfig: l
  } = s, [N, M] = S(!0), [y, f] = S(!1), [c, g] = S([]), [m, u] = S(null), [k, w] = S({
    search: "",
    rows_per_page: 50,
    current_page: 1
  }), [C, D] = S({}), [A, G] = S(!1), [K, j] = S(!1), [O, v] = S(!1), [L, T] = S(!1), [B, b] = S(!1), [I, H] = S(null), V = (x, R) => {
    x === "edit" ? (H(R), v(!0)) : x === "view" ? (H(R), b(!0)) : x === "delete" && (H(R), T(!0));
  }, J = async (x, R, F = "", Z = "") => {
    f(!0);
    try {
      const U = await (x == null ? void 0 : x());
      (F || U.message) && we(F || U.message, {
        variant: "success"
      }), R == null || R(U);
    } catch (U) {
      (Z || U.message) && we(Z || U.message, { variant: "error" });
    } finally {
      f(!1);
    }
  }, re = (x) => {
    let R = x.newObject;
    i ? (g((F) => [R, ...F]), u((F) => ({
      ...F,
      current_page: 1
    }))) : (w((F) => ({
      ...F,
      current_page: 1
    })), k.current_page == 1 && ee()), j(!1);
  }, ie = (x) => {
    let R = x.newObject, F = x.targetObject;
    i ? g(
      (Z) => Z.map(
        (U) => U.id === F.id ? { ...U, ...R } : U
      )
    ) : ee(), v(!1);
  }, te = (x) => {
    if (!x) {
      T(!1), H(null);
      return;
    }
    i ? g(
      (R) => R.filter((F) => F.id !== x.targetObject.id)
    ) : c.length == 1 && k.current_page > 1 ? w((R) => ({
      ...R,
      current_page: R.current_page - 1
    })) : ee(), T(!1), H(null);
  }, de = (x) => J(
    () => {
      var R, F;
      return (F = (R = r == null ? void 0 : r.addModal) == null ? void 0 : R.handleSubmit) == null ? void 0 : F.call(R, x);
    },
    re
  ), le = (x) => J(
    () => {
      var R, F;
      return (F = (R = r == null ? void 0 : r.editModal) == null ? void 0 : R.handleSubmit) == null ? void 0 : F.call(R, x, I);
    },
    ie
  ), ee = async () => {
    M(!0), n == null || n({ ...k, ...C }).then((x) => {
      g(x.data), u(x.pagination);
    }).catch((x) => {
      we(x.message, { variant: "error" });
    }).finally(() => {
      M(!1);
    });
  }, ye = (x) => {
    var R;
    D((F) => ({
      ...x
    })), (R = o == null ? void 0 : o.filter) != null && R.useServerSideFilters && G((F) => !F);
  }, xe = (x, R) => x.filter(
    (F) => Object.entries(R).every(([Z, U]) => F[Z] === U)
  ), ve = Se(() => {
    var x;
    return (x = o == null ? void 0 : o.filter) != null && x.useServerSideFilters ? c : xe(c, C);
  }, [c, C]);
  return z(() => {
    ee();
  }, [
    k.search,
    k.rows_per_page,
    k.current_page,
    A
  ]), /* @__PURE__ */ e(
    We,
    {
      maxSnack: 3,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right"
      },
      autoHideDuration: 3e3,
      action: (x) => /* @__PURE__ */ e(
        "button",
        {
          onClick: () => {
            window.dispatchEvent(
              new CustomEvent("closeSnackbar", { detail: x })
            );
          },
          className: "p-1 hover:bg-white/20 rounded-full transition-colors duration-200 text-white flex items-center justify-center",
          children: /* @__PURE__ */ e(fe, { className: "h-4 w-4" })
        }
      ),
      children: /* @__PURE__ */ h("div", { children: [
        /* @__PURE__ */ h("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3", children: [
          /* @__PURE__ */ h("div", { children: [
            /* @__PURE__ */ e("h1", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: d }),
            /* @__PURE__ */ e("p", { className: "text-md text-gray-600 dark:text-gray-400", children: s == null ? void 0 : s.description })
          ] }),
          /* @__PURE__ */ e("div", { className: "flex items-center space-x-3", children: /* @__PURE__ */ h(
            ae,
            {
              onClick: () => j(!0),
              variant: "contained",
              color: "primary",
              children: [
                /* @__PURE__ */ e(Ye, { className: "w-4 h-4 mr-2" }),
                s.buttonText || "Add New"
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ e(
          na,
          {
            config: {
              ...o,
              pagination: {
                ...o.pagination,
                ...m
              },
              data: ve,
              setServerSidePaginationData: w,
              onMenuAction: V,
              filterConfig: l,
              onFilterApply: ye,
              loading: N
            }
          }
        ),
        /* @__PURE__ */ e(
          me,
          {
            isOpen: K,
            onClose: () => j(!1),
            icon: (se = r.addModal) == null ? void 0 : se.icon,
            title: ((ne = r.addModal) == null ? void 0 : ne.title) || "Add New",
            size: ((ce = r.addModal) == null ? void 0 : ce.size) || "md",
            onFormSubmit: () => {
              var x;
              return (x = document.querySelector("#addForm")) == null ? void 0 : x.requestSubmit();
            },
            loadingBtn: y,
            actionButtons: r.addModal.actionButtons,
            children: /* @__PURE__ */ e(
              Ae,
              {
                config: (r == null ? void 0 : r.addModal) || [],
                onSubmit: de,
                initialData: {},
                loading: y
              }
            )
          }
        ),
        /* @__PURE__ */ e(
          me,
          {
            isOpen: O,
            onClose: () => v(!1),
            icon: (he = r.editModal) == null ? void 0 : he.icon,
            title: ((ue = r.editModal) == null ? void 0 : ue.title) || "Edit",
            size: ((be = r.editModal) == null ? void 0 : be.size) || "md",
            onFormSubmit: () => {
              var x;
              return (x = document.querySelector("#editForm")) == null ? void 0 : x.requestSubmit();
            },
            actionButtons: r.editModal.actionButtons,
            loadingBtn: y,
            children: /* @__PURE__ */ e(
              Ae,
              {
                config: r.editModal || [],
                onSubmit: le,
                initialData: I,
                loading: y
              }
            )
          }
        ),
        L && /* @__PURE__ */ e(
          me,
          {
            isOpen: L,
            onClose: (x) => {
              te(x);
            },
            icon: ((pe = r.deleteModal) == null ? void 0 : pe.icon) || /* @__PURE__ */ e(De, { icon: "ph:warning-bold", className: "w-6 h-6 text-red-500" }),
            title: ((t = r.deleteModal) == null ? void 0 : t.title) || "Confirm Delete",
            size: ((p = r.deleteModal) == null ? void 0 : p.size) || "md",
            loading: y,
            actionButtons: r.deleteModal.actionButtons,
            executeFunction: J,
            selectedItem: I,
            children: /* @__PURE__ */ e("div", { className: "flex items-center space-x-2 py-3", children: /* @__PURE__ */ h("div", { children: [
              /* @__PURE__ */ e("p", { className: "text-md text-gray-700 dark:text-white", children: ((P = r.deleteModal) == null ? void 0 : P.confirmText) || "Are you sure you want to delete this item?" }),
              ((_ = r.deleteModal) == null ? void 0 : _.referenceKey) && /* @__PURE__ */ e("p", { className: "text-md font-semibold text-gray-700 dark:text-white", children: I[($ = r.deleteModal) == null ? void 0 : $.referenceKey] })
            ] }) })
          }
        ),
        r.viewModal && /* @__PURE__ */ e(
          me,
          {
            isOpen: B,
            onClose: () => {
              b(!1), H(null);
            },
            icon: (q = r.viewModal) == null ? void 0 : q.icon,
            title: ((Y = r.viewModal) == null ? void 0 : Y.title) || "View Details",
            size: ((Q = r.viewModal) == null ? void 0 : Q.size) || "lg",
            footerConfig: r == null ? void 0 : r.viewModal.footer,
            children: (oe = r.viewModal) != null && oe.component ? /* @__PURE__ */ e(r.viewModal.component, { data: I }) : /* @__PURE__ */ e(
              oa,
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
}), ke = a.shape({
  type: a.string.isRequired,
  label: a.string.isRequired,
  color: a.string,
  variant: a.string,
  onClick: a.func
}), ia = a.shape({
  title: a.string.isRequired,
  type: a.string.isRequired,
  variant: a.string,
  icon: a.node
}), da = a.shape({
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
  menuList: a.arrayOf(ia)
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
  options: a.arrayOf(Re)
}), sa = a.shape({
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
Ke.propTypes = {
  config: a.shape({
    title: a.string.isRequired,
    description: a.string,
    buttonText: a.string,
    fetchData: a.func.isRequired,
    isStaticData: a.bool,
    /* ================= TABLE CONFIG ================= */
    tableConfig: a.shape({
      table_head: a.arrayOf(da).isRequired,
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
        actionButtons: a.arrayOf(ke)
      }),
      editModal: a.shape({
        title: a.string.isRequired,
        size: a.string,
        formClass: a.string,
        formFields: a.arrayOf(Ne),
        handleSubmit: a.func.isRequired,
        actionButtons: a.arrayOf(ke)
      }),
      deleteModal: a.shape({
        title: a.string.isRequired,
        size: a.string,
        confirmText: a.string,
        referenceKey: a.string,
        actionButtons: a.arrayOf(ke)
      }),
      viewModal: a.shape({
        title: a.string.isRequired,
        size: a.string,
        // 👇 This covers your commented code:
        component: a.elementType,
        // for custom component like TeamMemberDetail
        fields: a.arrayOf(sa),
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
const ca = () => {
  if (typeof document > "u" || document.getElementById("react-admin-crud-manager-styles")) return;
  const s = document.createElement("style");
  s.id = "react-admin-crud-manager-styles";
  const d = `
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
  s.textContent = d, document.head.appendChild(s);
};
function xa(s) {
  return z(() => {
    ca();
  }, []), /* @__PURE__ */ e(E, { children: /* @__PURE__ */ e(Ke, { config: s.config }) });
}
export {
  xa as default
};
//# sourceMappingURL=index.es.js.map
