import { jsx as e, Fragment as j, jsxs as h } from "react/jsx-runtime";
import Le, { useState as R, useRef as ee, useEffect as K, useMemo as Re } from "react";
import { ChevronDown as Ie, Search as Oe, Check as Ye, X as Ne, Plus as Ve, Filter as We, ChevronLeft as qe, ChevronRight as Ze, EllipsisVertical as Je, User as Be, Music as Qe } from "lucide-react";
import { createPortal as Xe } from "react-dom";
import { Icon as re } from "@iconify/react";
import { Editor as ea } from "@tinymce/tinymce-react";
import { SnackbarProvider as aa, enqueueSnackbar as Se } from "notistack";
import r from "prop-types";
const Ue = (b, o = "DD MMM YYYY") => {
  if (!b) return "N/A";
  const s = new Date(b);
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
  return o.replace(
    /YYYY|YY|MMMM|MMM|MM|M|DD|D|dddd|ddd|HH|hh|mm|ss|A/g,
    (t) => d[t]
  );
}, ra = (b, o, s = []) => {
  if (!(o != null && o.trim())) return b;
  const i = o.toLowerCase(), d = (t) => t == null ? [] : typeof t == "object" ? Object.values(t).flatMap(d) : [String(t)];
  return b.filter((t) => {
    let g = [];
    return s.length > 0 ? s.forEach((M) => {
      t[M] !== void 0 && g.push(...d(t[M]));
    }) : g = d(t), g.some(
      (M) => M.toLowerCase().includes(i)
    );
  });
}, Z = Le.forwardRef(
  ({
    className: b = "",
    variant: o = "contained",
    color: s = "default",
    size: i = "default",
    fullWidth: d = !1,
    children: t,
    ...g
  }, M) => {
    var c;
    const S = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", p = {
      sm: "h-8 px-3 rounded-md text-sm",
      md: "h-9 px-4 rounded-md text-sm",
      lg: "h-11 px-6 rounded-md text-base",
      xl: "h-12 px-8 rounded-lg text-lg",
      default: "h-9 px-4 rounded-md text-sm"
    }, l = {
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
    }, u = ((c = l[s]) == null ? void 0 : c[o]) || l.default.contained, m = p[i], v = `
      ${S} 
      ${u} 
      ${m} 
      ${d ? "w-full" : ""} 
      ${b}
    `.trim();
    return /* @__PURE__ */ e(
      "button",
      {
        ref: M,
        type: g.type || "button",
        className: v,
        ...g,
        children: t
      }
    );
  }
);
Z.displayName = "Button";
function q({ label: b, required: o = !1 }) {
  return /* @__PURE__ */ e(j, { children: /* @__PURE__ */ h("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: [
    b,
    o && /* @__PURE__ */ e("span", { className: "ml-1", children: "*" })
  ] }) });
}
const ta = ({
  options: b = [],
  value: o = "",
  defaultValue: s = "",
  onChange: i,
  placeholder: d = "Select option",
  className: t = "",
  disabled: g = !1,
  search: M = !1,
  label: S = "",
  required: p = !1,
  name: l = "",
  parentClass: u = "",
  multiple: m = !1,
  // ✅ NEW
  dropdownMaxHeight: v = "",
  formData: c = {},
  dependencyKey: w = ""
}) => {
  var V;
  const [y, k] = R(!1), [I, A] = R(""), [C, O] = R(!0), F = ee(null), T = ee(null), [L, B] = R([]);
  let E = o || o === !1 ? o : s;
  const Y = (x) => x == null || x === "" ? "" : String(typeof x == "boolean" ? x : x ?? "");
  K(
    () => {
      (async () => {
        if (typeof b == "function") {
          const H = await b(c);
          B(H);
        } else
          B(b || []);
      })();
    },
    w ? [b, c == null ? void 0 : c[w]] : [b]
  );
  const $ = m ? (E || []).map(Y) : Y(E), _ = L.filter(
    (x) => x.label.toLowerCase().includes(I.toLowerCase())
  ), z = (x) => {
    const H = Y(x);
    return m ? $.includes(H) : H === $;
  };
  K(() => {
    const x = (H) => {
      F.current && !F.current.contains(H.target) && (k(!1), A(""));
    };
    return document.addEventListener("mousedown", x), () => document.removeEventListener("mousedown", x);
  }, []), K(() => {
    if (y && F.current) {
      const x = F.current.getBoundingClientRect(), J = window.innerHeight - x.bottom;
      O(J < 200);
    }
  }, [y]), K(() => {
    y && T.current && T.current.focus();
  }, [y]);
  const D = (x) => {
    let H = x;
    if (x === "true" ? H = !0 : x === "false" && (H = !1), m) {
      const J = $.includes(Y(x));
      let Q;
      J ? Q = o.filter(
        (W) => Y(W) !== Y(x)
      ) : Q = [...o || [], H], i(Q);
    } else
      i(H), k(!1);
    A("");
  }, U = m ? L.filter((x) => z(x.value)).map((x) => x.label).join(", ") : (V = L.find((x) => z(x.value))) == null ? void 0 : V.label;
  return K(() => {
    (E || E === !1) && setTimeout(() => {
      i(E);
    }, 100);
  }, []), /* @__PURE__ */ h("div", { className: u || "col-span-12", children: [
    /* @__PURE__ */ e(q, { label: S, required: p }),
    /* @__PURE__ */ h("div", { className: `relative ${t}`, ref: F, children: [
      /* @__PURE__ */ e(
        "select",
        {
          name: "hidden_select_for_validation",
          value: U || "",
          required: p,
          multiple: m,
          className: "absolute opacity-0 right-1/2 top-[80%] -translate-x-1/2 -translate-y-1/2 pointer-events-none h-[10px]",
          children: /* @__PURE__ */ e("option", { hidden: !0, value: U, children: U })
        }
      ),
      /* @__PURE__ */ h(
        "button",
        {
          type: "button",
          onClick: () => !g && k(!y),
          disabled: g,
          className: `w-full h-10 px-3 border border-gray-300 dark:border-gray-600 rounded-md text-left text-sm flex items-center justify-between 
          ${U ? "dark:text-white" : "text-gray-500 dark:text-gray-400"} 
          ${g ? "opacity-50 cursor-not-allowed" : "dark:bg-gray-700"}`,
          children: [
            /* @__PURE__ */ e("span", { className: "truncate", children: U || d }),
            /* @__PURE__ */ e(
              Ie,
              {
                className: `w-4 h-4 transition-transform ${y ? "rotate-180" : ""}`
              }
            )
          ]
        }
      ),
      y && /* @__PURE__ */ h(
        "div",
        {
          className: `absolute z-50 w-full border rounded-md bg-white dark:bg-gray-700 shadow-lg 
            ${C ? "bottom-full mb-1" : "top-full mt-1"}`,
          children: [
            M && /* @__PURE__ */ e("div", { className: "p-2 border-b border-gray-200 dark:border-gray-600", children: /* @__PURE__ */ h("div", { className: "relative", children: [
              /* @__PURE__ */ e(Oe, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }),
              /* @__PURE__ */ e(
                "input",
                {
                  ref: T,
                  type: "text",
                  value: I,
                  onChange: (x) => A(x.target.value),
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
                  maxHeight: v || ""
                },
                children: _.length > 0 ? _.map((x) => /* @__PURE__ */ h(
                  "button",
                  {
                    type: "button",
                    onClick: () => D(String(x.value)),
                    className: `w-full px-3 py-2 text-left text-sm flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 
                    ${z(x.value) ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300" : ""}`,
                    children: [
                      /* @__PURE__ */ e("span", { children: x.label }),
                      m && z(x.value) && /* @__PURE__ */ e(Ye, { className: "w-4 h-4" })
                    ]
                  },
                  String(x.value)
                )) : /* @__PURE__ */ e("div", { className: "px-3 py-2 text-sm text-gray-500 dark:text-gray-400", children: "No options found" })
              }
            )
          ]
        }
      )
    ] })
  ] }, l);
}, na = ({
  value: b = !0,
  onChange: o,
  text: s,
  options: i = [],
  label: d,
  required: t,
  name: g = "",
  disabled: M = !1,
  parentClass: S = ""
}) => {
  const p = i.length > 0 ? i : [
    { label: "Active", value: !0 },
    { label: "Inactive", value: !1 }
  ];
  return /* @__PURE__ */ e(j, { children: /* @__PURE__ */ h("div", { className: S || "col-span-12", children: [
    /* @__PURE__ */ e(q, { label: d, required: t }),
    /* @__PURE__ */ h("div", { className: "flex items-center justify-between h-10 gap-4 bg-gray-100 dark:bg-gray-700 px-3 rounded-md border border-gray-100 dark:border-gray-600", children: [
      s && /* @__PURE__ */ e("p", { className: "text-xs text-gray-600 dark:text-gray-400 flex-shrink overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px]", children: s }),
      /* @__PURE__ */ e("div", { className: "flex items-center gap-6", children: p.map((l, u) => /* @__PURE__ */ h(
        "label",
        {
          className: "flex items-center gap-2 cursor-pointer select-none",
          children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "radio",
                name: "switch-field",
                required: t && u === 0,
                value: l.value,
                disabled: M,
                checked: b === l.value,
                onChange: () => o(l.value),
                className: "w-4 h-4  border-gray-300 cursor-pointer"
              }
            ),
            /* @__PURE__ */ e("span", { className: "text-sm text-gray-700 dark:text-white", children: l.label })
          ]
        },
        u
      )) })
    ] })
  ] }, g) });
}, we = [
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
function la({
  label: b = "",
  value: o = "",
  name: s = "",
  parentClass: i = "",
  onChange: d,
  disabled: t = !1,
  required: g = !1,
  placeholder: M = "Phone number",
  search: S = !1,
  countriesList: p = !1,
  defaultCountry: l = ""
}) {
  const u = (L) => we.find((B) => B.code == L), [m, v] = R(
    u(l) || we[0]
  ), [c, w] = R(""), [y, k] = R(!1), [I, A] = R(""), C = ee();
  K(() => {
    if (typeof o == "string" && o.startsWith("+")) {
      const L = we.filter((B) => o.startsWith("+" + B.phone)).sort((B, E) => E.phone.length - B.phone.length)[0];
      if (L) {
        v(L), w(o.replace("+" + L.phone, ""));
        return;
      }
    }
    w(o);
  }, [o]);
  const O = (L) => {
    const B = L.target.value.replace(/\D/g, "");
    w(B), m && d && d("+" + m.phone + B);
  }, F = (L) => {
    v(L), d && d("+" + L.phone + c), k(!1), A("");
  };
  K(() => {
    const L = (B) => {
      C.current && !C.current.contains(B.target) && k(!1);
    };
    return document.addEventListener("mousedown", L), () => document.removeEventListener("mousedown", L);
  }, []);
  const T = we.filter(
    (L) => L.label.toLowerCase().includes(I.toLowerCase()) || L.phone.includes(I)
  );
  return p ? /* @__PURE__ */ e(j, { children: /* @__PURE__ */ h("div", { className: i || "col-span-12", children: [
    /* @__PURE__ */ e(q, { label: b, required: g }),
    /* @__PURE__ */ h("div", { className: "relative ", ref: C, children: [
      /* @__PURE__ */ h(
        "div",
        {
          className: `h-[40px] flex items-center border rounded-md px-2 bg-white dark:bg-gray-700 transition-all
  ${y ? "ring-0.5 ring-blue-100 border-blue-300" : "border-gray-300 dark:border-gray-600"}
  ${t ? "opacity-60 cursor-not-allowed" : ""}`,
          children: [
            /* @__PURE__ */ h(
              "button",
              {
                type: "button",
                disabled: t,
                onClick: () => k(!y),
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
                  /* @__PURE__ */ e(Ie, { className: "w-3 h-3 text-gray-500" })
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
                value: c,
                onChange: O,
                required: g,
                disabled: t || !m,
                placeholder: m ? M : "Select a country",
                className: "flex-1 ml-2 bg-transparent outline-none text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400"
              }
            ),
            /* @__PURE__ */ e(
              "input",
              {
                type: "tel",
                required: g,
                tabIndex: -1,
                readOnly: !0,
                value: m && c ? "+" + m.phone + c : "",
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
      y && /* @__PURE__ */ h("div", { className: "absolute top-full left-0 w-full mt-1 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 shadow-lg z-50 max-h-60 overflow-y-auto", children: [
        S && /* @__PURE__ */ e("div", { className: "p-2 border-b border-gray-200 dark:border-gray-700", children: /* @__PURE__ */ h("div", { className: "relative", children: [
          /* @__PURE__ */ e(Oe, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" }),
          /* @__PURE__ */ e(
            "input",
            {
              type: "text",
              value: I,
              onChange: (L) => A(L.target.value),
              placeholder: "Search country...",
              className: "w-full pl-9 pr-3 py-2 text-sm border rounded-md bg-white dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none "
            }
          )
        ] }) }),
        T.map((L) => /* @__PURE__ */ h(
          "button",
          {
            type: "button",
            onClick: () => F(L),
            className: "w-full flex items-center gap-2 px-2 py-1 text-sm hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100",
            children: [
              /* @__PURE__ */ e(
                "img",
                {
                  src: `https://flagcdn.com/w20/${L.code.toLowerCase()}.png`,
                  alt: L.code,
                  className: "w-5 h-3 object-cover"
                }
              ),
              /* @__PURE__ */ h("span", { children: [
                L.label,
                " (+",
                L.phone,
                ")"
              ] })
            ]
          },
          L.code
        ))
      ] })
    ] })
  ] }, s) }) : /* @__PURE__ */ e(j, { children: /* @__PURE__ */ h("div", { className: i || "col-span-12", children: [
    /* @__PURE__ */ e(q, { label: b, required: g }),
    /* @__PURE__ */ e(
      "input",
      {
        type: "text",
        value: o,
        onChange: (B) => {
          const E = B.target.value.replace(/[^+\d]/g, ""), Y = E.startsWith("+") ? "+" + E.replace(/[+]/g, "").slice(0) : E;
          d(Y);
        },
        placeholder: M,
        disabled: t,
        required: g,
        className: `w-full h-10 px-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md \r
        bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none \r
        focus:ring-1 focus:ring-blue-300 dark:focus:ring-blue-200`,
        inputMode: "tel",
        pattern: "^\\+\\d{1,15}$"
      }
    )
  ] }, s) });
}
const je = Le.forwardRef(
  ({ className: b = "", label: o, required: s, ...i }, d) => {
    const t = `
      placeholder-gray-400 dark:placeholder-gray-400
      ${b}
    `.trim();
    return /* @__PURE__ */ e(j, { children: /* @__PURE__ */ h("div", { className: i.parentClass || "col-span-12", children: [
      /* @__PURE__ */ e(q, { label: o, required: s }),
      /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ e(
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
je.displayName = "TextArea";
const oa = ({
  label: b = "",
  value: o = null,
  onChange: s,
  required: i = !1,
  accept: d = "image/*",
  id: t,
  dragDrop: g = !1,
  name: M = "",
  parentClass: S = ""
}) => {
  const [p, l] = R(o), [u, m] = R(!1), v = ee(null);
  K(() => (o instanceof File ? l({ file: o, preview: URL.createObjectURL(o) }) : (o != null && o.preview, l(o)), () => {
    p != null && p.preview && p.preview.startsWith("blob:") && URL.revokeObjectURL(p.preview);
  }), [o]);
  const c = (C) => {
    if (!C || C.length === 0)
      return;
    const O = C[0], F = URL.createObjectURL(O), T = { file: O, preview: F };
    p != null && p.preview && p.preview.startsWith("blob:") && URL.revokeObjectURL(p.preview), l(T), s == null || s(O);
  }, w = (C) => {
    C && C.stopPropagation(), p != null && p.preview && p.preview.startsWith("blob:") && URL.revokeObjectURL(p.preview), l(null), s == null || s(null), v.current && (v.current.value = "");
  }, y = (C) => {
    g && (C.preventDefault(), m(!0));
  }, k = (C) => {
    g && (C.preventDefault(), m(!1));
  }, I = (C) => {
    g && (C.preventDefault(), m(!1), c(C.dataTransfer.files));
  }, A = () => {
    v.current.click();
  };
  return /* @__PURE__ */ e(j, { children: /* @__PURE__ */ h("div", { className: S || "col-span-12", children: [
    /* @__PURE__ */ e(q, { label: b, required: i }),
    /* @__PURE__ */ h(
      "div",
      {
        className: `relative rounded-md p-2 transition-all ${u ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"}`,
        onDragOver: y,
        onDragLeave: k,
        onDrop: I,
        children: [
          /* @__PURE__ */ e(
            "input",
            {
              ref: v,
              id: t,
              type: "file",
              accept: d,
              onChange: (C) => c(C.target.files),
              required: i && !p,
              className: "absolute opacity-0 right-[50%] top-[80%] -translate-y-1/2 pointer-events-none h-[10px]"
            }
          ),
          /* @__PURE__ */ h(
            "div",
            {
              className: `flex items-center space-x-4 transition-all ${u ? "opacity-50" : ""}`,
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
                    Z,
                    {
                      type: "button",
                      onClick: A,
                      variant: "outlined",
                      color: "default",
                      children: p ? "Change Image" : "Select Image"
                    }
                  ),
                  g && !p && /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop" })
                ] })
              ]
            }
          ),
          g && u && /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-md", children: /* @__PURE__ */ e("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg", children: "Drop image here" }) })
        ]
      }
    )
  ] }, M) });
}, Ee = Le.forwardRef(
  ({
    label: b,
    required: o,
    parentClass: s = "",
    className: i = "",
    type: d = "text",
    onKeyDown: t,
    negativeNumberAllow: g = !0,
    defaultValue: M = "",
    ...S
  }, p) => {
    const [l, u] = R(!1), m = (c) => {
      if (d === "number") {
        if (["e", "E", "+"].includes(c.key)) {
          c.preventDefault();
          return;
        }
        if (g == !1 && c.key === "-") {
          c.preventDefault();
          return;
        }
        if (["ArrowUp", "ArrowDown"].includes(c.key)) {
          c.preventDefault();
          return;
        }
      }
      t == null || t(c);
    }, v = `
      h-10 placeholder-gray-400 dark:placeholder-gray-400
      ${d === "password" ? "pr-10" : ""}
      ${d === "number" ? "no-spinner" : ""}
      ${i}
    `.trim();
    return K(() => {
      M && setTimeout(() => {
        var c;
        (c = S.onChange) == null || c.call(S, { target: { value: M } });
      }, 100);
    }, [M]), /* @__PURE__ */ e(j, { children: /* @__PURE__ */ h("div", { className: s || "col-span-12", children: [
      /* @__PURE__ */ e(q, { label: b, required: o }),
      /* @__PURE__ */ h("div", { className: "relative", children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: d === "password" && l ? "text" : d,
            ref: p,
            required: o,
            onKeyDown: m,
            className: v,
            ...S
          }
        ),
        d === "password" && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            tabIndex: -1,
            onClick: () => u((c) => !c),
            className: "absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200",
            children: /* @__PURE__ */ e(
              re,
              {
                icon: l ? "mdi:eye-outline" : "mdi:eye-off-outline",
                className: "w-5 h-5"
              }
            )
          }
        )
      ] })
    ] }, S.name) });
  }
);
Ee.displayName = "Input";
const ia = ({
  key: b,
  editorKey: o = "",
  value: s = "",
  onChange: i,
  label: d = "",
  required: t = !1,
  placeholder: g = "",
  parentClass: M = "col-span-12",
  height: S = 400,
  inline: p = !1,
  disabled: l = !1,
  plugins: u,
  toolbar: m,
  menubar: v = !1,
  fontFamily: c = "Inter, sans-serif",
  initConfig: w = {},
  imageUploadHandler: y
  // ✅ Promise function passed from parent
}) => /* @__PURE__ */ h("div", { className: M, children: [
  d && /* @__PURE__ */ e(q, { label: d, required: t }),
  /* @__PURE__ */ e(
    ea,
    {
      apiKey: o,
      value: s,
      disabled: l,
      init: {
        height: S,
        inline: p,
        menubar: v,
        branding: !1,
        statusbar: !0,
        automatic_uploads: !0,
        images_upload_handler: (C) => new Promise((O, F) => {
          if (!y) {
            O(`data:${C.blob().type};base64,${C.base64()}`);
            return;
          }
          y(C).then((T) => {
            T ? O(T) : F("Upload failed: No URL returned");
          }).catch((T) => {
            F(
              typeof T == "string" ? T : (T == null ? void 0 : T.message) || "Image upload failed"
            );
          });
        }),
        plugins: u ?? [
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
        placeholder: g,
        content_style: `
            body {
                font-family: ${c};
            }
            `,
        ...w
      },
      onEditorChange: (C) => {
        i && i(C);
      }
    }
  )
] }, b), sa = ({
  name: b = "",
  label: o = "",
  // label for single checkbox
  options: s = [],
  // array of { label, value } for multiple
  value: i = null,
  // boolean for single, array for multiple, or string for single select
  onChange: d,
  disabled: t = !1,
  required: g = !1,
  parentClass: M = "col-span-12",
  className: S = "",
  multiSelect: p = !1
  // ✅ if true, only one option can be selected (like radio)
}) => {
  const l = Array.isArray(s) && s.length > 0, u = (c) => l ? p ? Array.isArray(i) && i.includes(c) : i === c : !!i, m = (c) => {
    d == null || d(c.target.checked, b);
  }, v = (c, w) => {
    if (d)
      if (!p)
        d(w ? c : "", b);
      else {
        const y = Array.isArray(i) ? [...i] : [];
        if (w)
          y.includes(c) || y.push(c);
        else {
          const k = y.indexOf(c);
          k > -1 && y.splice(k, 1);
        }
        d(y, b);
      }
  };
  return l ? /* @__PURE__ */ e(j, { children: /* @__PURE__ */ h("div", { className: `${M}`, children: [
    /* @__PURE__ */ e(q, { label: o, required: g }),
    /* @__PURE__ */ e("div", { className: "flex flex-col space-y-2", children: s.map((c, w) => /* @__PURE__ */ h("div", { className: "flex items-center", children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          name: b,
          value: c.value,
          checked: u(c.value),
          disabled: t || c.disabled,
          required: g && w === 0,
          onChange: (y) => v(c.value, y.target.checked),
          className: `h-4 w-4 cursor-pointer text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${S}`
        },
        b
      ),
      c.label && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: b,
          className: "ml-2 text-sm text-gray-700 dark:text-gray-200 select-none",
          children: c.label
        }
      )
    ] }, c.value || c.label)) })
  ] }) }) : /* @__PURE__ */ h("div", { className: `flex items-center ${M}`, children: [
    /* @__PURE__ */ e(
      "input",
      {
        type: "checkbox",
        name: b,
        checked: u(),
        disabled: t,
        required: g,
        onChange: m,
        className: `h-4 w-4 text-blue-600 cursor-pointer border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${S}`
      }
    ),
    o && /* @__PURE__ */ e(
      "label",
      {
        htmlFor: b,
        className: "ml-2 text-sm text-gray-700 dark:text-gray-200 select-none",
        children: o
      }
    )
  ] });
}, da = ({
  label: b = "",
  value: o = null,
  onChange: s,
  required: i = !1,
  accept: d = "audio/*",
  id: t,
  dragDrop: g = !1,
  name: M = "",
  parentClass: S = ""
}) => {
  const [p, l] = R(null), [u, m] = R(!1), v = ee(null);
  K(() => {
    if (!o) {
      c(), l(null);
      return;
    }
    if (o instanceof File) {
      const O = URL.createObjectURL(o);
      return l({ file: o, preview: O }), () => {
        URL.revokeObjectURL(O);
      };
    } else typeof o == "string" ? l({ preview: o }) : o != null && o.preview && l(o);
  }, [o]);
  const c = () => {
    p != null && p.preview && p.preview.startsWith("blob:") && URL.revokeObjectURL(p.preview);
  }, w = (O) => {
    if (!O || O.length === 0)
      return;
    const F = O[0], T = URL.createObjectURL(F);
    c(), l({ file: F, preview: T }), s == null || s(F);
  }, y = (O) => {
    O && O.stopPropagation(), c(), l(null), s == null || s(null), v.current && (v.current.value = "");
  }, k = (O) => {
    g && (O.preventDefault(), m(!0));
  }, I = (O) => {
    g && (O.preventDefault(), m(!1));
  }, A = (O) => {
    g && (O.preventDefault(), m(!1), w(O.dataTransfer.files));
  }, C = () => {
    v.current.click();
  };
  return /* @__PURE__ */ h("div", { className: S || "col-span-12", children: [
    /* @__PURE__ */ e(q, { label: b, required: i }),
    /* @__PURE__ */ h(
      "div",
      {
        className: `relative rounded-lg p-2 transition-all ${u ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"}`,
        onDragOver: k,
        onDragLeave: I,
        onDrop: A,
        children: [
          /* @__PURE__ */ e(
            "input",
            {
              ref: v,
              id: t,
              type: "file",
              accept: d,
              onChange: (O) => w(O.target.files),
              required: i && !p,
              className: "absolute opacity-0 right-[50%] top-[80%] -translate-y-1/2 pointer-events-none h-[10px]"
            }
          ),
          /* @__PURE__ */ e(
            "div",
            {
              className: `flex items-center space-x-4 transition-all ${u ? "opacity-50" : ""}`,
              children: p ? (
                // Audio player with close button and change button
                /* @__PURE__ */ h("div", { className: "flex items-center space-x-4", children: [
                  /* @__PURE__ */ h("div", { className: "relative w-full", children: [
                    !i && /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        onClick: y,
                        className: "absolute top-0 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800",
                        "aria-label": "Remove audio",
                        children: /* @__PURE__ */ e(re, { icon: "mdi:close", className: "w-3 h-3" })
                      }
                    ),
                    /* @__PURE__ */ e(
                      "audio",
                      {
                        src: p.preview,
                        controls: !0,
                        controlsList: "nodownload"
                      },
                      p.preview
                    )
                  ] }),
                  /* @__PURE__ */ e(Z, { type: "button", onClick: C, children: /* @__PURE__ */ e("span", { children: "Change Audio File" }) })
                ] })
              ) : (
                // Empty state with upload button
                /* @__PURE__ */ h("div", { className: "flex items-center justify-center space-x-4", children: [
                  /* @__PURE__ */ e("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ e(re, { icon: "mdi:music", className: "text-gray-400 w-10 h-10" }) }),
                  /* @__PURE__ */ e(
                    Z,
                    {
                      type: "button",
                      onClick: C,
                      variant: "outlined",
                      children: /* @__PURE__ */ e("span", { children: "Choose Audio File" })
                    }
                  ),
                  g && /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop your audio file here" })
                ] })
              )
            }
          ),
          g && u && !p && /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-lg", children: /* @__PURE__ */ e("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg", children: "Drop audio here" }) })
        ]
      }
    )
  ] }, M);
}, $e = ({ field: b, formData: o, handleChange: s }) => {
  const {
    key: i,
    label: d,
    type: t,
    options: g,
    placeholder: M,
    rows: S,
    inputClass: p,
    search: l,
    accept: u,
    text: m,
    required: v = !1,
    minLength: c,
    dragDrop: w,
    parentClass: y,
    countriesList: k,
    defaultCountry: I,
    multiple: A,
    dropdownMaxHeight: C,
    editorKey: O,
    fontFamily: F,
    disabled: T,
    negativeNumberAllow: L,
    defaultValue: B,
    renderCondition: E,
    optionDependencyKey: Y
  } = b;
  let $ = o == null ? void 0 : o[i];
  $ == null && ($ = "");
  const _ = M || (t === "select" ? `Select ${d}` : `Enter ${d}`), z = "w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm focus:outline-none focus:ring-1 focus:ring-blue-200 bg-white text-black dark:bg-gray-700 dark:text-white";
  if (E && typeof E == "function" && !E(o))
    return null;
  switch (t) {
    case "select":
      return /* @__PURE__ */ e(
        ta,
        {
          options: g || [],
          value: $,
          formData: o,
          dependencyKey: Y,
          onChange: (D) => s(i, D),
          placeholder: _,
          className: p || "",
          search: l,
          required: v,
          defaultValue: B,
          label: d,
          name: i,
          disabled: T,
          parentClass: y,
          multiple: A,
          dropdownMaxHeight: C
        }
      );
    case "checkbox":
      return /* @__PURE__ */ e(
        sa,
        {
          name: i,
          label: d,
          options: g || [],
          value: $,
          onChange: (D) => s(i, D),
          required: v,
          parentClass: y,
          className: p || "",
          multiSelect: A,
          disabled: T
        }
      );
    case "switch":
      return /* @__PURE__ */ e(
        na,
        {
          value: $,
          onChange: (D) => s(i, D),
          text: m,
          options: g || [],
          label: d,
          required: v,
          name: i,
          disabled: T,
          parentClass: y
        }
      );
    case "phone":
      return /* @__PURE__ */ e(
        la,
        {
          value: $,
          onChange: (D) => s(i, D),
          countriesList: k,
          defaultCountry: I,
          required: v,
          placeholder: _,
          search: l,
          label: d,
          name: i,
          disabled: T,
          parentClass: y
        }
      );
    case "textarea":
      return /* @__PURE__ */ e(
        je,
        {
          value: $,
          onChange: (D) => s(i, D.target.value),
          placeholder: _,
          rows: S || 3,
          className: `${z} ${p || ""}`,
          required: v,
          name: i,
          label: d,
          disabled: T,
          parentClass: y
        }
      );
    case "image":
      return /* @__PURE__ */ e(
        oa,
        {
          value: $,
          onChange: (D) => s(i, D),
          required: v,
          accept: u || "image/*",
          id: `file-${i}`,
          dragDrop: w,
          label: d,
          name: i,
          parentClass: y
        }
      );
    case "audio":
      return /* @__PURE__ */ e(
        da,
        {
          value: $,
          onChange: (D) => s(i, D),
          required: v,
          accept: u || "audio/*",
          id: `file-${i}`,
          dragDrop: w,
          label: d,
          name: i,
          parentClass: y
        }
      );
    case "tinyEditor":
      return /* @__PURE__ */ e(
        ia,
        {
          value: $,
          onChange: (D) => s(i, D),
          required: v,
          placeholder: _,
          label: d,
          parentClass: y,
          fontFamily: F,
          editorKey: O,
          disabled: T
        },
        `editor-${i}`
      );
    default:
      return /* @__PURE__ */ e(
        Ee,
        {
          type: t || "text",
          defaultValue: B,
          value: $,
          onChange: (D) => s(i, D.target.value),
          placeholder: _,
          className: `${z} ${p || ""}`,
          required: v,
          name: i,
          minLength: c,
          label: d,
          negativeNumberAllow: L,
          parentClass: y,
          disabled: T
        }
      );
  }
}, ca = ({ isOpen: b, onClose: o, config: s, onApply: i }) => {
  var p;
  const [d, t] = R({}), g = (l, u) => {
    t((m) => ({ ...m, [l]: u }));
  }, M = () => {
    i == null || i(d), o();
  }, S = () => {
    t({}), i == null || i({}), o();
  };
  return /* @__PURE__ */ h(j, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: `fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${b ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
        onClick: o
      }
    ),
    /* @__PURE__ */ h(
      "div",
      {
        className: `fixed top-0 right-0 h-full w-[28rem] bg-white dark:bg-gray-900 shadow-2xl z-50 flex flex-col border-l border-gray-200 dark:border-gray-700
          transform transition-transform duration-300 ease-in-out
          ${b ? "translate-x-0" : "translate-x-full"}
        `,
        children: [
          /* @__PURE__ */ h("div", { className: "flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700", children: [
            /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: "Filters" }),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: o,
                className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition",
                children: /* @__PURE__ */ e(Ne, { className: "w-5 h-5 text-gray-500 dark:text-gray-400" })
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 py-3", children: s != null && s.component ? /* @__PURE__ */ e(s.component, { filters: d, onFilterChange: g }) : /* @__PURE__ */ e("div", { className: "space-y-4", children: (p = s == null ? void 0 : s.fields) == null ? void 0 : p.map((l) => /* @__PURE__ */ e(j, { children: /* @__PURE__ */ e(
            $e,
            {
              field: l,
              formData: d,
              handleChange: g
            },
            l.key
          ) })) }) }),
          /* @__PURE__ */ h("div", { className: "flex gap-2 px-4 py-3 border-t border-gray-200 dark:border-gray-700", children: [
            /* @__PURE__ */ e(
              Z,
              {
                onClick: M,
                variant: "contained",
                color: "primary",
                fullWidth: !0,
                children: "Apply Filters"
              }
            ),
            /* @__PURE__ */ e(
              Z,
              {
                onClick: S,
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
}, Te = {
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
  label: b,
  variant: o = "contained",
  // contained | outline | soft
  color: s = "green",
  className: i = ""
}) => {
  const d = Te[s] || Te.green, t = Pe[o] || Pe.contained, g = o === "outline" ? d.border : d.bg;
  return /* @__PURE__ */ e(
    "span",
    {
      className: `inline-flex justify-center items-center rounded-sm text-xs font-semibold px-3 py-1 min-w-[78px]
        ${g}
        ${t}
        ${i}`,
      children: b
    }
  );
}, ha = ({ rows: b = 5, columns: o = 5 }) => /* @__PURE__ */ h(j, { children: [
  /* @__PURE__ */ e("div", { className: "w-full mb-6 inline-flex justify-end items-center", children: /* @__PURE__ */ e("div", { className: "h-8 w-80 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }),
  /* @__PURE__ */ e("div", { className: "overflow-hidden rounded-md border border-gray-200 dark:border-gray-800", children: /* @__PURE__ */ h("table", { className: "w-full border-collapse", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { className: "bg-gray-50 dark:bg-gray-900", children: Array.from({ length: o }).map((s, i) => /* @__PURE__ */ e("th", { className: "px-4 py-3", children: /* @__PURE__ */ e("div", { className: "h-6 w-24 bg-gray-300 dark:bg-gray-700 rounded animate-pulse  inline-flex justify-center items-center" }) }, i)) }) }),
    /* @__PURE__ */ e("tbody", { children: Array.from({ length: b }).map((s, i) => /* @__PURE__ */ e(
      "tr",
      {
        className: "border-t border-gray-200 dark:border-gray-800",
        children: Array.from({ length: o }).map((d, t) => /* @__PURE__ */ e("td", { className: "px-4 py-6", children: /* @__PURE__ */ e("div", { className: "h-6 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }, t))
      },
      i
    )) })
  ] }) })
] }), _e = ({ src: b, alt: o = "preview", isOpen: s, setIsOpen: i }) => {
  const d = () => i(!1);
  return K(() => {
    const t = (g) => {
      g.key === "Escape" && d();
    };
    return s && (document.body.style.overflow = "hidden", document.addEventListener("keydown", t)), () => {
      document.body.style.overflow = "", document.removeEventListener("keydown", t);
    };
  }, [s]), /* @__PURE__ */ e(j, { children: /* @__PURE__ */ h(
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
            children: /* @__PURE__ */ e(Ne, { size: 20 })
          }
        ),
        /* @__PURE__ */ e(
          "div",
          {
            className: "max-w-5xl w-full px-4 transform transition-all duration-200 scale-95 animate-in zoom-in-95",
            onClick: (t) => t.stopPropagation(),
            children: /* @__PURE__ */ e(
              "img",
              {
                src: b,
                alt: o,
                className: "w-full max-h-[90vh] object-contain rounded-xl"
              }
            )
          }
        )
      ]
    }
  ) });
}, ua = ({ config: b, setShowAdd: o, title: s, buttonText: i, description: d }) => {
  const {
    data: t = [],
    table_head: g = [],
    loading: M = !1,
    search: S = {
      enabled: !1,
      placeholder: "Search...",
      useServerSideSearch: !1
    },
    filter: p = {
      enabled: !1,
      useServerSideFilters: !1
    },
    pagination: l = {
      enabled: !1,
      rows_per_page: 10,
      useServerSidePagination: !1
    },
    emptyMessage: u = "No data available",
    onMenuAction: m,
    setServerSidePaginationData: v = () => {
    },
    onFilterApply: c,
    filterConfig: w = null,
    rowClick: y = null
  } = b, [k, I] = R(""), [A, C] = R(null), [O, F] = R([]), [T, L] = R({}), [B, E] = R(!1), [Y, $] = R(null), [_, z] = R(!1), D = Re(() => !S.enabled || !k.trim() || S.useServerSideSearch ? t : ra(t, k, S.searchKeys || []), [t, k, S]), [U, V] = R(1), [x, H] = R((l == null ? void 0 : l.rows_per_page) || 50), [J, Q] = R(D.length || 0), W = l != null && l.useServerSidePagination ? l.total_pages : Math.ceil(D.length / x), ie = Re(() => {
    if (l.useServerSidePagination) return D;
    const a = (U - 1) * x;
    return D.slice(a, a + x);
  }, [D, U, x]), te = ee(null), se = ee({}), ae = ee(null), de = (a) => {
    I(a), V(1), S.useServerSideSearch && (ae.current && clearTimeout(ae.current), ae.current = setTimeout(async () => {
      try {
        await v((n) => ({
          ...n,
          search: a,
          current_page: 1
        }));
      } catch (n) {
        console.error("Search error:", n);
      }
    }, 800));
  }, ce = (a, n, f) => {
    f.stopPropagation(), C(null), m == null || m(a.type, n);
  }, he = (a, n, f) => {
    n.stopPropagation(), F(f);
    const N = n.currentTarget;
    se.current[a] = N;
    const P = N.getBoundingClientRect(), G = 192, X = f.length * 40, ve = window.innerWidth, De = window.innerHeight, ze = ve - P.right < G ? P.left - G + P.width : P.left, He = De - P.bottom < X && P.top > X ? P.top - X - 2 : P.bottom + 2;
    L({
      top: Math.max(8, Math.min(He, De - X - 8)),
      left: Math.max(8, Math.min(ze, ve - G - 8))
    }), C(A === a ? null : a);
  }, ue = (a) => (U - 1) * x + a + 1, be = (a) => {
    a && a.src instanceof File && (a = { ...a, src: URL.createObjectURL(a.src) }), $(a), z(!0);
  }, ne = (a, n, f, N = null) => /* @__PURE__ */ e(j, { children: a ? /* @__PURE__ */ e(
    "img",
    {
      src: a instanceof File ? URL.createObjectURL(a) : a,
      alt: n || "Avatar",
      onClick: (P) => {
        P.stopPropagation(), P.preventDefault(), be({ src: a, alt: n });
      },
      className: `w-10 h-10 cursor-pointer shrink-0 rounded-full object-cover border border-gray-200 dark:border-gray-700 ${f || ""}`
    }
  ) : /* @__PURE__ */ e(j, { children: N || /* @__PURE__ */ e(
    "div",
    {
      className: `w-10 h-10 flex items-center shrink-0 justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${f || ""}`,
      children: /* @__PURE__ */ e(Be, { className: "w-6 h-6 text-gray-400 dark:text-gray-400" })
    }
  ) }) }), pe = (a, n) => /* @__PURE__ */ e(j, { children: a ? /* @__PURE__ */ e(
    "audio",
    {
      controls: !0,
      src: a instanceof File ? URL.createObjectURL(a) : a,
      onClick: (f) => {
        f.stopPropagation();
      },
      className: `w-64 cursor-pointer ${n || ""}`
    },
    a instanceof File ? URL.createObjectURL(a) : a
  ) : /* @__PURE__ */ e(j, { children: /* @__PURE__ */ e(
    "div",
    {
      className: `w-12 h-12 flex items-center shrink-0 justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${n || ""}`,
      children: /* @__PURE__ */ e(Qe, { className: "w-6 h-6 text-gray-400 dark:text-gray-400" })
    }
  ) }) }), ge = (a, n) => /* @__PURE__ */ h("div", { className: `flex items-center space-x-4 ${n.className || ""}`, children: [
    n.imageKey ? ne(a[n.imageKey], a[n.titleKey], "group-avatar") : "",
    /* @__PURE__ */ h("div", { children: [
      /* @__PURE__ */ e("p", { className: "font-medium text-gray-900 dark:text-white group-title", children: a[n.titleKey] || "" }),
      /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400 group-sub-title", children: a[n.subtitleKey] || "" })
    ] })
  ] }), me = (a, n) => {
    var G;
    let f = String(a);
    const N = n.variant || "contained";
    let P = n.defaultColor;
    if (((G = n == null ? void 0 : n.chipOptions) == null ? void 0 : G.length) > 0) {
      let X = n == null ? void 0 : n.chipOptions.find((ve) => ve.value == a);
      X && (f = X.label, P = X.color);
    }
    return /* @__PURE__ */ e(
      Ge,
      {
        label: f,
        variant: N,
        color: P,
        className: n.className || ""
      }
    );
  }, fe = (a, n, f) => {
    const N = n[a.key];
    return a.type === "menu_actions" ? /* @__PURE__ */ e("div", { className: `text-center ${a.className || ""}`, children: /* @__PURE__ */ e(
      "button",
      {
        ref: (P) => se.current[n.id || n._id] = P,
        onClick: (P) => he(n.id || n._id, P, a.menuList),
        className: "p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition text-gray-700 dark:text-gray-300",
        children: /* @__PURE__ */ e(Je, { className: "h-4 w-4" })
      }
    ) }) : a.type === "index" ? /* @__PURE__ */ e("span", { className: a.className || "", children: ue(f) }) : a.type === "group" ? ge(n, a) : a.type === "chip" ? /* @__PURE__ */ e(j, { children: me(N, a) }) : a.type === "date" ? /* @__PURE__ */ e("span", { className: a.className || "", children: Ue(N, a.format || "DD MMM YYYY") }) : a.type === "avatar" ? /* @__PURE__ */ e(j, { children: /* @__PURE__ */ e("div", { className: "min-w-[40px]", children: ne(N, a.alt, a.className, a.fallback_icon) }) }) : a.type === "audio" ? /* @__PURE__ */ e(j, { children: pe(N, a.className) }) : /* @__PURE__ */ e("span", { className: a.className || "", children: N || "N/A" });
  }, ye = (a) => {
    if (typeof y == "function")
      return y(a);
    if (y)
      return m == null ? void 0 : m("view", a);
  }, xe = (a, n) => {
    if (a.onClickDetails)
      return m == null ? void 0 : m("view", n);
    if (typeof a.handleClick == "function")
      return a.handleClick(n);
  }, le = () => y || typeof y == "function", oe = (a) => a.onClickDetails || typeof a.handleClick == "function";
  return K(() => {
    const a = () => {
      A && C(null);
    };
    return window.addEventListener("scroll", a, !0), () => {
      window.removeEventListener("scroll", a, !0);
    };
  }, [A]), K(() => {
    const a = (n) => {
      te.current && !te.current.contains(n.target) && C(null);
    };
    return document.addEventListener("click", a), () => document.removeEventListener("click", a);
  }, []), K(() => {
    l != null && l.rows_per_page && (l != null && l.useServerSidePagination) && H((l == null ? void 0 : l.rows_per_page) || 50), l.current_page && V(l.current_page);
  }, [
    l.rows_per_page,
    l == null ? void 0 : l.useServerSidePagination,
    l.current_page
  ]), K(() => {
    Q(
      l != null && l.useServerSidePagination ? l.total_records : D.length
    ), D.length <= x * (U - 1) && !(l != null && l.useServerSidePagination) && V((a) => a - 1 || 1);
  }, [
    D.length,
    l.total_records,
    l == null ? void 0 : l.useServerSidePagination
  ]), M ? /* @__PURE__ */ e(ha, { rows: 6, columns: 6 }) : /* @__PURE__ */ h(j, { children: [
    /* @__PURE__ */ h("div", { className: "flex flex-col sm:flex-row sm:justify-between gap-4 mb-3", children: [
      /* @__PURE__ */ h("div", { children: [
        /* @__PURE__ */ e("h1", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: s }),
        /* @__PURE__ */ e("p", { className: "text-md text-gray-600 dark:text-gray-400", children: d })
      ] }),
      /* @__PURE__ */ h("div", { className: "flex flex-col justify-end items-end gap-2", children: [
        /* @__PURE__ */ h(
          Z,
          {
            onClick: () => o(!0),
            variant: "contained",
            color: "primary",
            children: [
              /* @__PURE__ */ e(Ve, { className: "w-4 h-4 mr-2" }),
              i || "Add New"
            ]
          }
        ),
        /* @__PURE__ */ h("div", { className: "flex justify-end items-center gap-2", children: [
          S.enabled && /* @__PURE__ */ e("div", { className: "", children: /* @__PURE__ */ h("div", { className: "relative min-w-[300px]", children: [
            /* @__PURE__ */ e(Oe, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-300" }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                placeholder: S.placeholder || "Search...",
                value: k,
                onChange: (a) => de(a.target.value),
                className: "w-full h-[36px] pl-9 pr-4 py-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-300 dark:ring-blue-200 disabled:opacity-50"
              }
            )
          ] }) }),
          w && p.enabled && /* @__PURE__ */ h(Z, { onClick: () => E(!0), variant: "contained", children: [
            /* @__PURE__ */ e(We, { className: "w-4 h-4 mr-2" }),
            "Filters"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ h("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-700", children: [
      /* @__PURE__ */ e("div", { className: "overflow-x-auto", children: /* @__PURE__ */ h("table", { className: "min-w-full divide-y divide-gray-200 dark:divide-gray-700", children: [
        /* @__PURE__ */ e("thead", { className: "bg-gray-50 dark:bg-gray-700/60", children: /* @__PURE__ */ e("tr", { children: g.map((a) => /* @__PURE__ */ e(
          "th",
          {
            className: `px-6 py-4 text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider min-w-max max-w-[180px] truncate ${a.headClass || ""}`,
            children: a.title
          },
          a.key
        )) }) }),
        /* @__PURE__ */ e("tbody", { className: "bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700", children: ie.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e(
          "td",
          {
            colSpan: g.length,
            className: "text-center py-10 text-gray-500 dark:text-gray-400",
            children: u
          }
        ) }) : ie.map((a, n) => /* @__PURE__ */ e(
          "tr",
          {
            className: `hover:bg-gray-50 dark:hover:bg-blue-800/10 transition ${le() ? "cursor-pointer" : ""}`,
            onClick: (f) => {
              le() && ye(a);
            },
            children: g.map((f) => /* @__PURE__ */ e(
              "td",
              {
                className: `px-6 py-4 text-sm text-gray-900 dark:text-gray-100 min-w-max ${f.type == "audio" ? "" : "max-w-[300px]"} truncate ${oe(f) ? "cursor-pointer" : ""}`,
                title: String(a[f.key] ?? ""),
                onClick: (N) => {
                  oe(f) && (N.stopPropagation(), N.preventDefault(), xe(f, a));
                },
                children: f.render ? f.render(a, n) : fe(f, a, n)
              },
              f.key
            ))
          },
          a.id || a._id || n
        )) })
      ] }) }),
      (l == null ? void 0 : l.enabled) && D.length > 0 && /* @__PURE__ */ h("div", { className: " bg-gray-50 dark:bg-gray-700/60 px-6 py-3 flex flex-wrap items-center justify-between border-t border-gray-200 dark:border-gray-600 gap-3", children: [
        /* @__PURE__ */ h("div", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
          "Showing ",
          (U - 1) * x + 1,
          " to",
          " ",
          Math.min(U * x, J),
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
                value: x,
                onChange: (a) => {
                  const n = Number(a.target.value);
                  H(n), V(1), l.useServerSidePagination && v((f) => ({
                    ...f,
                    current_page: 1,
                    rows_per_page: n
                  }));
                },
                className: "border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500",
                children: [2, 10, 25, 50, 100].map((a) => /* @__PURE__ */ e("option", { value: a, children: a }, a))
              }
            )
          ] }),
          /* @__PURE__ */ h("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => {
                  if (U > 1) {
                    const a = U - 1;
                    V(a), l.useServerSidePagination && v((n) => ({
                      ...n,
                      current_page: a
                    }));
                  }
                },
                disabled: U === 1,
                className: "p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition text-gray-500 dark:text-gray-300 disabled:opacity-50",
                children: /* @__PURE__ */ e(qe, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ h("span", { className: "text-sm text-gray-800 dark:text-gray-200", children: [
              "Page ",
              U,
              " of ",
              W
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => {
                  if (U < W) {
                    const a = U + 1;
                    V(a), l.useServerSidePagination && v((n) => ({
                      ...n,
                      current_page: a
                    }));
                  }
                },
                disabled: U === W,
                className: "p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition text-gray-500 dark:text-gray-300 disabled:opacity-50",
                children: /* @__PURE__ */ e(Ze, { className: "h-4 w-4" })
              }
            )
          ] })
        ] })
      ] })
    ] }),
    A && Xe(
      /* @__PURE__ */ e(
        "div",
        {
          ref: te,
          style: {
            position: "fixed",
            top: `${T.top}px`,
            left: `${T.left}px`,
            zIndex: 9999
          },
          className: "w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg border border-gray-200 dark:border-gray-600",
          children: O.map((a, n) => /* @__PURE__ */ h(
            "button",
            {
              onClick: (f) => ce(
                a,
                t.find(
                  (N) => N.id === A || N._id == A
                ),
                f
              ),
              className: `w-full flex items-center gap-2 px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-600 ${a.variant === "danger" ? "text-red-600 dark:text-red-500" : "text-gray-700 dark:text-gray-200"}`,
              children: [
                a.icon && /* @__PURE__ */ e("span", { className: "shrink-0", children: a.icon }),
                a.title
              ]
            },
            n
          ))
        }
      ),
      document.body
    ),
    w && /* @__PURE__ */ e(
      ca,
      {
        isOpen: B,
        onClose: () => E(!1),
        config: w,
        onApply: c
      }
    ),
    _ && /* @__PURE__ */ e(
      _e,
      {
        src: Y.src,
        alt: Y.alt,
        isOpen: _,
        setIsOpen: z
      }
    )
  ] });
}, ke = ({
  isOpen: b,
  onClose: o,
  icon: s,
  title: i,
  children: d,
  size: t = "md",
  actionButtons: g = [],
  actions: M,
  showDefaultClose: S = !0,
  footerConfig: p = null,
  hideFooter: l = !1,
  onFormSubmit: u = () => {
  },
  onCancel: m,
  loadingBtn: v = !1,
  executeFunction: c = () => {
  },
  selectedItem: w = null
}) => {
  if (!b) return null;
  const y = {
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
        onClick: () => o()
      }
    ),
    /* @__PURE__ */ h(
      "div",
      {
        className: `relative bg-white rounded-lg shadow-xl w-full ${y[t] || y.md} max-h-[90vh] flex flex-col dark:bg-gray-800`,
        children: [
          /* @__PURE__ */ h("div", { className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0", children: [
            /* @__PURE__ */ h("div", { className: "flex items-center gap-1", children: [
              s && /* @__PURE__ */ e("span", { children: s }),
              /* @__PURE__ */ e("h3", { className: "text-lg font-medium text-gray-900 dark:text-white", children: i })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => o(),
                className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
                children: /* @__PURE__ */ e(Ne, { className: "w-6 h-6" })
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto p-4", children: d }),
          g.length > 0 && /* @__PURE__ */ e("div", { className: "px-4 py-3 flex justify-end gap-3 border-t border-gray-200 dark:border-gray-700 sm:px-6", children: g.map((k) => /* @__PURE__ */ e(
            Z,
            {
              onClick: (I) => {
                k.type == "submit" ? u(I) : c(
                  () => {
                    var A;
                    return (A = k == null ? void 0 : k.onClick) == null ? void 0 : A.call(k, I, w);
                  },
                  (A) => o == null ? void 0 : o(A)
                );
              },
              disabled: v || k.disabled,
              variant: k.variant || "contained",
              color: k.color || "primary",
              className: `min-w-[100px] ${k.className}`,
              type: k.type || "button",
              children: v ? /* @__PURE__ */ h("div", { className: "flex items-center", children: [
                /* @__PURE__ */ e("div", { className: "animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-2 border-t-white mr-2" }),
                k.label || "Submit",
                "..."
              ] }) : k.label || "Submit"
            }
          )) })
        ]
      }
    )
  ] });
}, Fe = ({ config: b, onSubmit: o, initialData: s = {}, type: i = "add" }) => {
  const { formClass: d = "grid grid-cols-12 gap-4", formFields: t = [] } = b || {}, [g, M] = R(s);
  K(() => {
    M(s);
  }, []);
  const S = (l, u) => {
    M((m) => ({ ...m, [l]: u }));
  }, p = (l) => {
    l.preventDefault();
    const u = l.target;
    if (!u.checkValidity()) {
      u.reportValidity();
      return;
    }
    o(g);
  };
  return /* @__PURE__ */ e(
    "form",
    {
      id: i == "add" ? "addForm" : i == "edit" ? "editForm" : "defaultForm",
      onSubmit: p,
      className: d,
      noValidate: !1,
      children: t.map((l) => /* @__PURE__ */ e(j, { children: /* @__PURE__ */ e(
        $e,
        {
          field: l,
          formData: g,
          handleChange: S
        },
        l.key
      ) }))
    }
  );
};
function ba({ data: b, config: o }) {
  const { fields: s, containerClass: i } = o, [d, t] = R(null), [g, M] = R(!1), S = (u) => {
    u && u.src instanceof File && (u = { ...u, src: URL.createObjectURL(u.src) }), t(u), M(!0);
  }, p = ({ col: u }) => {
    var I;
    let m = u == null ? void 0 : u.icon, v = u.label, c = b[u.key], w = u.type, y = u.variant || "outline", k = u.defaultColor;
    if (w === "chip" && ((I = u.chipOptions) == null ? void 0 : I.length) > 0) {
      let A = u == null ? void 0 : u.chipOptions.find((C) => C.value == c);
      A && (c = A.label, k = A.color);
    }
    return /* @__PURE__ */ h(
      "div",
      {
        className: `col-span-12 flex items-center space-x-4 p-4 rounded-xl 
                  bg-gray-100 dark:bg-gray-900 ${u.blockClass || ""}`,
        children: [
          m && /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: m }),
          /* @__PURE__ */ h("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ e("p", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: v }),
            w === "chip" ? /* @__PURE__ */ e(
              Ge,
              {
                label: c,
                variant: y,
                color: k,
                className: "mt-1"
              }
            ) : (
              /* TINY EDITOR */
              w === "tinyEditor" ? /* @__PURE__ */ e(
                "p",
                {
                  className: "mt-1 text-sm text-gray-900 dark:text-white break-words",
                  dangerouslySetInnerHTML: {
                    __html: c
                  }
                }
              ) : w === "audio" ? c ? /* @__PURE__ */ e(
                "audio",
                {
                  controls: !0,
                  src: c instanceof File ? URL.createObjectURL(c) : c,
                  onClick: (A) => A.stopPropagation(),
                  className: "shadow-md rounded-full"
                },
                c instanceof File ? URL.createObjectURL(c) : c
              ) : /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-gray-400", children: "N/A" }) : (
                /* DEFAULT */
                /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-gray-900 dark:text-white break-words", children: w == "date" ? /* @__PURE__ */ e("span", { children: Ue(c, u.format || "DD MMM YYYY") }) : c || "N/A" })
              )
            )
          ] })
        ]
      }
    );
  }, l = ({ col: u }) => {
    let m = b[u.titleKey], v = b[u.subtitleKey], c = b[u.imageKey], w = b[u.fallback_icon];
    return /* @__PURE__ */ h(
      "div",
      {
        className: `col-span-12 flex items-center space-x-4 p-4 rounded-xl 
      bg-gray-100 dark:bg-gray-900 
      ${u.blockClass}`,
        children: [
          c ? /* @__PURE__ */ e(
            "img",
            {
              src: c instanceof File ? URL.createObjectURL(c) : c,
              alt: m,
              onClick: () => S({ src: c, alt: m }),
              className: "w-16 h-16 cursor-pointer rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
            }
          ) : w || /* @__PURE__ */ e("div", { className: "w-16 h-16 flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600", children: /* @__PURE__ */ e(Be, { className: "w-8 h-8 text-gray-400" }) }),
          /* @__PURE__ */ h("div", { children: [
            /* @__PURE__ */ e("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: m }),
            /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: v })
          ] })
        ]
      }
    );
  };
  return /* @__PURE__ */ h(j, { children: [
    g && /* @__PURE__ */ e(
      _e,
      {
        src: d.src,
        alt: d.alt,
        isOpen: g,
        setIsOpen: M
      }
    ),
    /* @__PURE__ */ e("div", { className: `grid grid-cols-12 gap-4 ${i || ""}`, children: s.map(
      (u) => u.type == "group" ? /* @__PURE__ */ e(l, { col: u }) : /* @__PURE__ */ e(p, { col: u })
    ) })
  ] });
}
const Ke = ({ config: b }) => {
  var ae, de, ce, he, ue, be, ne, pe, ge, me, fe, ye, xe, le, oe, a;
  const {
    title: o,
    fetchData: s = async () => {
    },
    isStaticData: i = !1,
    tableConfig: d = {},
    modalConfig: t = {},
    filterConfig: g
  } = b, [M, S] = R(!0), [p, l] = R(!1), [u, m] = R([]), [v, c] = R(null), [w, y] = R({
    search: "",
    rows_per_page: 50,
    current_page: 1
  }), [k, I] = R({}), [A, C] = R(!1), [O, F] = R(!1), [T, L] = R(!1), [B, E] = R(!1), [Y, $] = R(!1), [_, z] = R(null), D = (n, f) => {
    n === "edit" ? (z(f), L(!0)) : n === "view" ? (z(f), $(!0)) : n === "delete" && (z(f), E(!0));
  }, U = async (n, f, N = "", P = "") => {
    l(!0);
    try {
      const G = await (n == null ? void 0 : n());
      (N || G.message) && Se(N || G.message, {
        variant: "success"
      }), f == null || f(G);
    } catch (G) {
      (P || G.message) && Se(P || G.message, { variant: "error" });
    } finally {
      l(!1);
    }
  }, V = (n) => {
    let f = n.newObject;
    i ? (m((N) => [f, ...N]), c((N) => ({
      ...N,
      current_page: 1
    }))) : (y((N) => ({
      ...N,
      current_page: 1
    })), w.current_page == 1 && W()), F(!1);
  }, x = (n) => {
    let f = n.newObject, N = n.targetObject;
    i ? m(
      (P) => P.map(
        (G) => G.id === N.id ? { ...G, ...f } : G
      )
    ) : W(), L(!1);
  }, H = (n) => {
    if (!n) {
      E(!1), z(null);
      return;
    }
    i ? m(
      (f) => f.filter((N) => N.id !== n.targetObject.id)
    ) : u.length == 1 && w.current_page > 1 ? y((f) => ({
      ...f,
      current_page: f.current_page - 1
    })) : W(), E(!1), z(null);
  }, J = (n) => U(
    () => {
      var f, N;
      return (N = (f = t == null ? void 0 : t.addModal) == null ? void 0 : f.handleSubmit) == null ? void 0 : N.call(f, n);
    },
    V
  ), Q = (n) => U(
    () => {
      var f, N;
      return (N = (f = t == null ? void 0 : t.editModal) == null ? void 0 : f.handleSubmit) == null ? void 0 : N.call(f, n, _);
    },
    x
  ), W = async () => {
    S(!0), s == null || s({ ...w, ...k }).then((n) => {
      m(n.data), c(n.pagination);
    }).catch((n) => {
      Se(n.message, { variant: "error" });
    }).finally(() => {
      S(!1);
    });
  }, ie = (n) => {
    var f;
    I((N) => ({
      ...n
    })), (f = d == null ? void 0 : d.filter) != null && f.useServerSideFilters && C((N) => !N);
  }, te = (n, f) => n.filter(
    (N) => Object.entries(f).every(([P, G]) => N[P] === G)
  ), se = Re(() => {
    var n;
    return (n = d == null ? void 0 : d.filter) != null && n.useServerSideFilters ? u : te(u, k);
  }, [u, k]);
  return K(() => {
    W();
  }, [
    w.search,
    w.rows_per_page,
    w.current_page,
    A
  ]), /* @__PURE__ */ e(
    aa,
    {
      maxSnack: 3,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right"
      },
      autoHideDuration: 3e3,
      action: (n) => /* @__PURE__ */ e(
        "button",
        {
          onClick: () => {
            window.dispatchEvent(
              new CustomEvent("closeSnackbar", { detail: n })
            );
          },
          className: "p-1 hover:bg-white/20 rounded-full transition-colors duration-200 text-white flex items-center justify-center",
          children: /* @__PURE__ */ e(Ne, { className: "h-4 w-4" })
        }
      ),
      children: /* @__PURE__ */ h("div", { children: [
        /* @__PURE__ */ e(
          ua,
          {
            title: o,
            setShowAdd: F,
            description: b.description,
            buttonText: b.buttonText,
            config: {
              ...d,
              pagination: {
                ...d.pagination,
                ...v
              },
              data: se,
              setServerSidePaginationData: y,
              onMenuAction: D,
              filterConfig: g,
              onFilterApply: ie,
              loading: M
            }
          }
        ),
        /* @__PURE__ */ e(
          ke,
          {
            isOpen: O,
            onClose: () => {
              p || F(!1);
            },
            icon: (ae = t.addModal) == null ? void 0 : ae.icon,
            title: ((de = t.addModal) == null ? void 0 : de.title) || "Add New",
            size: ((ce = t.addModal) == null ? void 0 : ce.size) || "md",
            onFormSubmit: () => {
              var n;
              return (n = document.querySelector("#addForm")) == null ? void 0 : n.requestSubmit();
            },
            loadingBtn: p,
            actionButtons: t.addModal.actionButtons,
            children: /* @__PURE__ */ e(
              Fe,
              {
                config: (t == null ? void 0 : t.addModal) || [],
                onSubmit: J,
                initialData: {},
                type: "add",
                loading: p
              }
            )
          }
        ),
        /* @__PURE__ */ e(
          ke,
          {
            isOpen: T,
            onClose: () => {
              p || L(!1);
            },
            icon: (he = t.editModal) == null ? void 0 : he.icon,
            title: ((ue = t.editModal) == null ? void 0 : ue.title) || "Edit",
            size: ((be = t.editModal) == null ? void 0 : be.size) || "md",
            onFormSubmit: () => {
              var n;
              return (n = document.querySelector("#editForm")) == null ? void 0 : n.requestSubmit();
            },
            actionButtons: t.editModal.actionButtons,
            loadingBtn: p,
            children: /* @__PURE__ */ e(
              Fe,
              {
                config: t.editModal || [],
                onSubmit: Q,
                initialData: _,
                type: "edit",
                loading: p
              }
            )
          }
        ),
        B && /* @__PURE__ */ e(
          ke,
          {
            isOpen: B,
            onClose: (n) => {
              H(n);
            },
            icon: ((ne = t.deleteModal) == null ? void 0 : ne.icon) || /* @__PURE__ */ e(re, { icon: "ph:warning-bold", className: "w-6 h-6 text-red-500" }),
            title: ((pe = t.deleteModal) == null ? void 0 : pe.title) || "Confirm Delete",
            size: ((ge = t.deleteModal) == null ? void 0 : ge.size) || "md",
            loading: p,
            actionButtons: t.deleteModal.actionButtons,
            executeFunction: U,
            selectedItem: _,
            children: /* @__PURE__ */ e("div", { className: "flex items-center space-x-2 py-3", children: /* @__PURE__ */ h("div", { children: [
              /* @__PURE__ */ e("p", { className: "text-md text-gray-700 dark:text-white", children: ((me = t.deleteModal) == null ? void 0 : me.confirmText) || "Are you sure you want to delete this item?" }),
              ((fe = t.deleteModal) == null ? void 0 : fe.referenceKey) && /* @__PURE__ */ e("p", { className: "text-md font-semibold text-gray-700 dark:text-white", children: _[(ye = t.deleteModal) == null ? void 0 : ye.referenceKey] })
            ] }) })
          }
        ),
        t.viewModal && /* @__PURE__ */ e(
          ke,
          {
            isOpen: Y,
            onClose: () => {
              $(!1), z(null);
            },
            icon: (xe = t.viewModal) == null ? void 0 : xe.icon,
            title: ((le = t.viewModal) == null ? void 0 : le.title) || "View Details",
            size: ((oe = t.viewModal) == null ? void 0 : oe.size) || "lg",
            footerConfig: t == null ? void 0 : t.viewModal.footer,
            children: (a = t.viewModal) != null && a.component ? /* @__PURE__ */ e(t.viewModal.component, { data: _ }) : /* @__PURE__ */ e(
              ba,
              {
                data: _,
                config: t.viewModal || {}
              }
            )
          }
        )
      ] })
    }
  );
}, Ae = r.shape({
  value: r.oneOfType([
    r.string,
    r.number,
    r.bool
  ]).isRequired,
  label: r.string.isRequired,
  color: r.string
}), Me = r.shape({
  type: r.string.isRequired,
  label: r.string.isRequired,
  color: r.string,
  variant: r.string,
  onClick: r.func
}), pa = r.shape({
  title: r.string.isRequired,
  type: r.string.isRequired,
  variant: r.string,
  icon: r.node
}), ga = r.shape({
  key: r.string.isRequired,
  title: r.string,
  type: r.string,
  imageKey: r.string,
  titleKey: r.string,
  subtitleKey: r.string,
  onClickDetails: r.bool,
  variant: r.string,
  chipOptions: r.arrayOf(Ae),
  defaultColor: r.string,
  className: r.string,
  format: r.string,
  menuList: r.arrayOf(pa)
}), Ce = r.shape({
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
  options: r.arrayOf(Ae)
}), ma = r.shape({
  key: r.string,
  label: r.string,
  type: r.string,
  imageKey: r.string,
  titleKey: r.string,
  subtitleKey: r.string,
  blockClass: r.string,
  icon: r.node,
  variant: r.string,
  chipOptions: r.arrayOf(Ae),
  defaultColor: r.string,
  className: r.string,
  format: r.string
});
Ke.propTypes = {
  config: r.shape({
    title: r.string.isRequired,
    description: r.string,
    buttonText: r.string,
    fetchData: r.func.isRequired,
    isStaticData: r.bool,
    /* ================= TABLE CONFIG ================= */
    tableConfig: r.shape({
      table_head: r.arrayOf(ga).isRequired,
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
        formFields: r.arrayOf(Ce),
        handleSubmit: r.func.isRequired,
        actionButtons: r.arrayOf(Me)
      }),
      editModal: r.shape({
        title: r.string.isRequired,
        size: r.string,
        formClass: r.string,
        formFields: r.arrayOf(Ce),
        handleSubmit: r.func.isRequired,
        actionButtons: r.arrayOf(Me)
      }),
      deleteModal: r.shape({
        title: r.string.isRequired,
        size: r.string,
        confirmText: r.string,
        referenceKey: r.string,
        actionButtons: r.arrayOf(Me)
      }),
      viewModal: r.shape({
        title: r.string.isRequired,
        size: r.string,
        // 👇 This covers your commented code:
        component: r.elementType,
        // for custom component like TeamMemberDetail
        fields: r.arrayOf(ma),
        footer: r.shape({
          cancelButton: r.bool,
          cancelText: r.string
        })
      })
    }),
    /* ================= FILTER CONFIG ================= */
    filterConfig: r.shape({
      fields: r.arrayOf(Ce)
    })
  }).isRequired
};
const fa = () => {
  if (typeof document > "u" || document.getElementById("react-admin-crud-manager-styles")) return;
  const b = document.createElement("style");
  b.id = "react-admin-crud-manager-styles";
  const o = `
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
  b.textContent = o, document.head.appendChild(b);
};
function La(b) {
  return K(() => {
    fa();
  }, []), /* @__PURE__ */ e(j, { children: /* @__PURE__ */ e(Ke, { config: b.config }) });
}
export {
  La as default
};
//# sourceMappingURL=index.es.js.map
