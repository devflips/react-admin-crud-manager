import { jsx as e, Fragment as E, jsxs as d } from "react/jsx-runtime";
import Ce, { useState as S, useRef as ae, useEffect as H, useMemo as Me } from "react";
import { ChevronDown as Te, Search as Re, Check as Ke, X as we, Plus as ze, Filter as He, ChevronLeft as Ye, ChevronRight as Ve, EllipsisVertical as We, User as Fe, Music as qe } from "lucide-react";
import { createPortal as Ze } from "react-dom";
import { Icon as te } from "@iconify/react";
import { Editor as Je } from "@tinymce/tinymce-react";
import { SnackbarProvider as Qe, enqueueSnackbar as ke } from "notistack";
import a from "prop-types";
const Pe = (h, n = "DD MMM YYYY") => {
  if (!h) return "N/A";
  const i = new Date(h);
  if (isNaN(i)) return "Invalid Date";
  const o = (t) => String(t).padStart(2, "0"), s = {
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
  return n.replace(
    /YYYY|YY|MMMM|MMM|MM|M|DD|D|dddd|ddd|HH|hh|mm|ss|A/g,
    (t) => s[t]
  );
}, Xe = (h, n, i = []) => {
  if (!(n != null && n.trim())) return h;
  const o = n.toLowerCase(), s = (t) => t == null ? [] : typeof t == "object" ? Object.values(t).flatMap(s) : [String(t)];
  return h.filter((t) => {
    let p = [];
    return i.length > 0 ? i.forEach((k) => {
      t[k] !== void 0 && p.push(...s(t[k]));
    }) : p = s(t), p.some(
      (k) => k.toLowerCase().includes(o)
    );
  });
}, ee = Ce.forwardRef(
  ({
    className: h = "",
    variant: n = "contained",
    color: i = "default",
    size: o = "default",
    fullWidth: s = !1,
    children: t,
    ...p
  }, k) => {
    var b;
    const M = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", u = {
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
    }, c = ((b = l[i]) == null ? void 0 : b[n]) || l.default.contained, g = u[o], y = `
      ${M} 
      ${c} 
      ${g} 
      ${s ? "w-full" : ""} 
      ${h}
    `.trim();
    return /* @__PURE__ */ e(
      "button",
      {
        ref: k,
        type: p.type || "button",
        className: y,
        ...p,
        children: t
      }
    );
  }
);
ee.displayName = "Button";
function Q({ label: h, required: n = !1 }) {
  return /* @__PURE__ */ e(E, { children: /* @__PURE__ */ d("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: [
    h,
    n && /* @__PURE__ */ e("span", { className: "ml-1", children: "*" })
  ] }) });
}
const ea = ({
  options: h = [],
  value: n = "",
  defaultValue: i = "",
  onChange: o,
  placeholder: s = "Select option",
  className: t = "",
  disabled: p = !1,
  search: k = !1,
  label: M = "",
  required: u = !1,
  name: l = "",
  parentClass: c = "",
  multiple: g = !1,
  // ✅ NEW
  dropdownMaxHeight: y = "",
  formData: b = {},
  dependencyKey: v = ""
}) => {
  var q;
  const [x, N] = S(!1), [I, D] = S(""), [C, A] = S(!0), B = ae(null), F = ae(null), [R, j] = S([]);
  let $ = n || n === !1 ? n : i;
  const W = (w) => w == null || w === "" ? "" : String(typeof w == "boolean" ? w : w ?? "");
  H(
    () => {
      (async () => {
        if (typeof h == "function") {
          const z = await h(b);
          j(z);
        } else
          j(h || []);
      })();
    },
    v ? [h, b == null ? void 0 : b[v]] : [h]
  );
  const G = g ? ($ || []).map(W) : W($), K = R.filter(
    (w) => w.label.toLowerCase().includes(I.toLowerCase())
  ), U = (w) => {
    const z = W(w);
    return g ? G.includes(z) : z === G;
  };
  H(() => {
    const w = (z) => {
      B.current && !B.current.contains(z.target) && (N(!1), D(""));
    };
    return document.addEventListener("mousedown", w), () => document.removeEventListener("mousedown", w);
  }, []), H(() => {
    if (x && B.current) {
      const w = B.current.getBoundingClientRect(), re = window.innerHeight - w.bottom;
      A(re < 200);
    }
  }, [x]), H(() => {
    x && F.current && F.current.focus();
  }, [x]);
  const O = (w) => {
    let z = w;
    if (w === "true" ? z = !0 : w === "false" && (z = !1), g) {
      const re = G.includes(W(w));
      let J;
      re ? J = n.filter(
        (X) => W(X) !== W(w)
      ) : J = [...n || [], z], o(J);
    } else
      o(z), N(!1);
    D("");
  }, Y = g ? R.filter((w) => U(w.value)).map((w) => w.label).join(", ") : (q = R.find((w) => U(w.value))) == null ? void 0 : q.label;
  return H(() => {
    ($ || $ === !1) && setTimeout(() => {
      o($);
    }, 100);
  }, []), /* @__PURE__ */ d("div", { className: c || "col-span-12", children: [
    /* @__PURE__ */ e(Q, { label: M, required: u }),
    /* @__PURE__ */ d("div", { className: `relative ${t}`, ref: B, children: [
      /* @__PURE__ */ e(
        "select",
        {
          name: "hidden_select_for_validation",
          value: Y || "",
          required: u,
          multiple: g,
          className: "absolute opacity-0 right-1/2 top-[80%] -translate-x-1/2 -translate-y-1/2 pointer-events-none h-[10px]",
          children: /* @__PURE__ */ e("option", { hidden: !0, value: Y, children: Y })
        }
      ),
      /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          onClick: () => !p && N(!x),
          disabled: p,
          className: `w-full h-10 px-3 border border-gray-300 dark:border-gray-600 rounded-md text-left text-sm flex items-center justify-between 
          ${Y ? "dark:text-white" : "text-gray-500 dark:text-gray-400"} 
          ${p ? "opacity-50 cursor-not-allowed" : "dark:bg-gray-700"}`,
          children: [
            /* @__PURE__ */ e("span", { className: "truncate", children: Y || s }),
            /* @__PURE__ */ e(
              Te,
              {
                className: `w-4 h-4 transition-transform ${x ? "rotate-180" : ""}`
              }
            )
          ]
        }
      ),
      x && /* @__PURE__ */ d(
        "div",
        {
          className: `absolute z-50 w-full border rounded-md bg-white dark:bg-gray-700 shadow-lg 
            ${C ? "bottom-full mb-1" : "top-full mt-1"}`,
          children: [
            k && /* @__PURE__ */ e("div", { className: "p-2 border-b border-gray-200 dark:border-gray-600", children: /* @__PURE__ */ d("div", { className: "relative", children: [
              /* @__PURE__ */ e(Re, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }),
              /* @__PURE__ */ e(
                "input",
                {
                  ref: F,
                  type: "text",
                  value: I,
                  onChange: (w) => D(w.target.value),
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
                children: K.length > 0 ? K.map((w) => /* @__PURE__ */ d(
                  "button",
                  {
                    type: "button",
                    onClick: () => O(String(w.value)),
                    className: `w-full px-3 py-2 text-left text-sm flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 
                    ${U(w.value) ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300" : ""}`,
                    children: [
                      /* @__PURE__ */ e("span", { children: w.label }),
                      g && U(w.value) && /* @__PURE__ */ e(Ke, { className: "w-4 h-4" })
                    ]
                  },
                  String(w.value)
                )) : /* @__PURE__ */ e("div", { className: "px-3 py-2 text-sm text-gray-500 dark:text-gray-400", children: "No options found" })
              }
            )
          ]
        }
      )
    ] })
  ] }, l);
}, aa = ({
  value: h = !0,
  onChange: n,
  text: i,
  options: o = [],
  label: s,
  required: t,
  name: p = "",
  disabled: k = !1,
  parentClass: M = ""
}) => {
  const u = o.length > 0 ? o : [
    { label: "Active", value: !0 },
    { label: "Inactive", value: !1 }
  ];
  return /* @__PURE__ */ e(E, { children: /* @__PURE__ */ d("div", { className: M || "col-span-12", children: [
    /* @__PURE__ */ e(Q, { label: s, required: t }),
    /* @__PURE__ */ d("div", { className: "flex items-center justify-between h-10 gap-4 bg-gray-100 dark:bg-gray-700 px-3 rounded-md border border-gray-100 dark:border-gray-600", children: [
      i && /* @__PURE__ */ e("p", { className: "text-xs text-gray-600 dark:text-gray-400 flex-shrink overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px]", children: i }),
      /* @__PURE__ */ e("div", { className: "flex items-center gap-6", children: u.map((l, c) => /* @__PURE__ */ d(
        "label",
        {
          className: "flex items-center gap-2 cursor-pointer select-none",
          children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "radio",
                name: "switch-field",
                required: t && c === 0,
                value: l.value,
                disabled: k,
                checked: h === l.value,
                onChange: () => n(l.value),
                className: "w-4 h-4  border-gray-300 cursor-pointer"
              }
            ),
            /* @__PURE__ */ e("span", { className: "text-sm text-gray-700 dark:text-white", children: l.label })
          ]
        },
        c
      )) })
    ] })
  ] }, p) });
}, xe = [
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
function ra({
  label: h = "",
  value: n = "",
  name: i = "",
  parentClass: o = "",
  onChange: s,
  disabled: t = !1,
  required: p = !1,
  placeholder: k = "Phone number",
  search: M = !1,
  countriesList: u = !1,
  defaultCountry: l = ""
}) {
  const c = (R) => xe.find((j) => j.code == R), [g, y] = S(
    c(l) || xe[0]
  ), [b, v] = S(""), [x, N] = S(!1), [I, D] = S(""), C = ae();
  H(() => {
    if (typeof n == "string" && n.startsWith("+")) {
      const R = xe.filter((j) => n.startsWith("+" + j.phone)).sort((j, $) => $.phone.length - j.phone.length)[0];
      if (R) {
        y(R), v(n.replace("+" + R.phone, ""));
        return;
      }
    }
    v(n);
  }, [n]);
  const A = (R) => {
    const j = R.target.value.replace(/\D/g, "");
    v(j), g && s && s("+" + g.phone + j);
  }, B = (R) => {
    y(R), s && s("+" + R.phone + b), N(!1), D("");
  };
  H(() => {
    const R = (j) => {
      C.current && !C.current.contains(j.target) && N(!1);
    };
    return document.addEventListener("mousedown", R), () => document.removeEventListener("mousedown", R);
  }, []);
  const F = xe.filter(
    (R) => R.label.toLowerCase().includes(I.toLowerCase()) || R.phone.includes(I)
  );
  return u ? /* @__PURE__ */ e(E, { children: /* @__PURE__ */ d("div", { className: o || "col-span-12", children: [
    /* @__PURE__ */ e(Q, { label: h, required: p }),
    /* @__PURE__ */ d("div", { className: "relative ", ref: C, children: [
      /* @__PURE__ */ d(
        "div",
        {
          className: `h-[40px] flex items-center border rounded-md px-2 bg-white dark:bg-gray-700 transition-all
  ${x ? "ring-0.5 ring-blue-100 border-blue-300" : "border-gray-300 dark:border-gray-600"}
  ${t ? "opacity-60 cursor-not-allowed" : ""}`,
          children: [
            /* @__PURE__ */ d(
              "button",
              {
                type: "button",
                disabled: t,
                onClick: () => N(!x),
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
                  /* @__PURE__ */ e(Te, { className: "w-3 h-3 text-gray-500" })
                ]
              }
            ),
            g && /* @__PURE__ */ d("span", { className: "ml-2 text-sm text-gray-700 dark:text-gray-200 whitespace-nowrap", children: [
              "+",
              g.phone
            ] }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "tel",
                value: b,
                onChange: A,
                required: p,
                disabled: t || !g,
                placeholder: g ? k : "Select a country",
                className: "flex-1 ml-2 bg-transparent outline-none text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400"
              }
            ),
            /* @__PURE__ */ e(
              "input",
              {
                type: "tel",
                required: p,
                tabIndex: -1,
                readOnly: !0,
                value: g && b ? "+" + g.phone + b : "",
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
      x && /* @__PURE__ */ d("div", { className: "absolute top-full left-0 w-full mt-1 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 shadow-lg z-50 max-h-60 overflow-y-auto", children: [
        M && /* @__PURE__ */ e("div", { className: "p-2 border-b border-gray-200 dark:border-gray-700", children: /* @__PURE__ */ d("div", { className: "relative", children: [
          /* @__PURE__ */ e(Re, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" }),
          /* @__PURE__ */ e(
            "input",
            {
              type: "text",
              value: I,
              onChange: (R) => D(R.target.value),
              placeholder: "Search country...",
              className: "w-full pl-9 pr-3 py-2 text-sm border rounded-md bg-white dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none "
            }
          )
        ] }) }),
        F.map((R) => /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            onClick: () => B(R),
            className: "w-full flex items-center gap-2 px-2 py-1 text-sm hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100",
            children: [
              /* @__PURE__ */ e(
                "img",
                {
                  src: `https://flagcdn.com/w20/${R.code.toLowerCase()}.png`,
                  alt: R.code,
                  className: "w-5 h-3 object-cover"
                }
              ),
              /* @__PURE__ */ d("span", { children: [
                R.label,
                " (+",
                R.phone,
                ")"
              ] })
            ]
          },
          R.code
        ))
      ] })
    ] })
  ] }, i) }) : /* @__PURE__ */ e(E, { children: /* @__PURE__ */ d("div", { className: o || "col-span-12", children: [
    /* @__PURE__ */ e(Q, { label: h, required: p }),
    /* @__PURE__ */ e(
      "input",
      {
        type: "text",
        value: n,
        onChange: (j) => {
          const $ = j.target.value.replace(/[^+\d]/g, ""), W = $.startsWith("+") ? "+" + $.replace(/[+]/g, "").slice(0) : $;
          s(W);
        },
        placeholder: k,
        disabled: t,
        required: p,
        className: `w-full h-10 px-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md \r
        bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none \r
        focus:ring-1 focus:ring-blue-300 dark:focus:ring-blue-200`,
        inputMode: "tel",
        pattern: "^\\+\\d{1,15}$"
      }
    )
  ] }, i) });
}
const Ie = Ce.forwardRef(
  ({ className: h = "", label: n, required: i, ...o }, s) => {
    const t = `
      placeholder-gray-400 dark:placeholder-gray-400
      ${h}
    `.trim();
    return /* @__PURE__ */ e(E, { children: /* @__PURE__ */ d("div", { className: o.parentClass || "col-span-12", children: [
      /* @__PURE__ */ e(Q, { label: n, required: i }),
      /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ e(
        "textarea",
        {
          className: t,
          ref: s,
          required: i,
          ...o
        }
      ) })
    ] }, o.name) });
  }
);
Ie.displayName = "TextArea";
const ta = ({
  label: h = "",
  value: n = null,
  onChange: i,
  required: o = !1,
  accept: s = "image/*",
  id: t,
  dragDrop: p = !1,
  name: k = "",
  parentClass: M = ""
}) => {
  const [u, l] = S(n), [c, g] = S(!1), y = ae(null);
  H(() => (n instanceof File ? l({ file: n, preview: URL.createObjectURL(n) }) : (n != null && n.preview, l(n)), () => {
    u != null && u.preview && u.preview.startsWith("blob:") && URL.revokeObjectURL(u.preview);
  }), [n]);
  const b = (C) => {
    if (!C || C.length === 0)
      return;
    const A = C[0], B = URL.createObjectURL(A), F = { file: A, preview: B };
    u != null && u.preview && u.preview.startsWith("blob:") && URL.revokeObjectURL(u.preview), l(F), i == null || i(A);
  }, v = (C) => {
    C && C.stopPropagation(), u != null && u.preview && u.preview.startsWith("blob:") && URL.revokeObjectURL(u.preview), l(null), i == null || i(null), y.current && (y.current.value = "");
  }, x = (C) => {
    p && (C.preventDefault(), g(!0));
  }, N = (C) => {
    p && (C.preventDefault(), g(!1));
  }, I = (C) => {
    p && (C.preventDefault(), g(!1), b(C.dataTransfer.files));
  }, D = () => {
    y.current.click();
  };
  return /* @__PURE__ */ e(E, { children: /* @__PURE__ */ d("div", { className: M || "col-span-12", children: [
    /* @__PURE__ */ e(Q, { label: h, required: o }),
    /* @__PURE__ */ d(
      "div",
      {
        className: `relative rounded-md p-2 transition-all ${c ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"}`,
        onDragOver: x,
        onDragLeave: N,
        onDrop: I,
        children: [
          /* @__PURE__ */ e(
            "input",
            {
              ref: y,
              id: t,
              type: "file",
              accept: s,
              onChange: (C) => b(C.target.files),
              required: o && !u,
              className: "absolute opacity-0 right-[50%] top-[80%] -translate-y-1/2 pointer-events-none h-[10px]"
            }
          ),
          /* @__PURE__ */ d(
            "div",
            {
              className: `flex items-center space-x-4 transition-all ${c ? "opacity-50" : ""}`,
              children: [
                u ? (
                  // Image preview with close button
                  /* @__PURE__ */ d("div", { className: "relative group", children: [
                    /* @__PURE__ */ e(
                      "img",
                      {
                        src: u.preview || u,
                        alt: "preview",
                        className: "object-cover w-20 h-20 rounded-full shadow-md"
                      }
                    ),
                    !o && /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        onClick: v,
                        className: "absolute top-0 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
                        "aria-label": "Remove image",
                        children: /* @__PURE__ */ e(te, { icon: "mdi:close", className: "w-3 h-3" })
                      }
                    )
                  ] })
                ) : (
                  // Placeholder icon
                  /* @__PURE__ */ e("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ e(
                    te,
                    {
                      icon: "ri:image-add-fill",
                      className: "text-gray-400 w-10 h-10"
                    }
                  ) })
                ),
                /* @__PURE__ */ d("div", { className: "flex flex-col items-center space-y-1", children: [
                  /* @__PURE__ */ e(
                    ee,
                    {
                      type: "button",
                      onClick: D,
                      variant: "outlined",
                      color: "default",
                      children: u ? "Change Image" : "Select Image"
                    }
                  ),
                  p && !u && /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop" })
                ] })
              ]
            }
          ),
          p && c && /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-md", children: /* @__PURE__ */ e("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg", children: "Drop image here" }) })
        ]
      }
    )
  ] }, k) });
}, Be = Ce.forwardRef(
  ({
    label: h,
    required: n,
    parentClass: i = "",
    className: o = "",
    type: s = "text",
    onKeyDown: t,
    negativeNumberAllow: p = !0,
    ...k
  }, M) => {
    const [u, l] = S(!1), c = (y) => {
      if (s === "number") {
        if (["e", "E", "+"].includes(y.key)) {
          y.preventDefault();
          return;
        }
        if (p == !1 && y.key === "-") {
          y.preventDefault();
          return;
        }
        if (["ArrowUp", "ArrowDown"].includes(y.key)) {
          y.preventDefault();
          return;
        }
      }
      t == null || t(y);
    }, g = `
      h-10 placeholder-gray-400 dark:placeholder-gray-400
      ${s === "password" ? "pr-10" : ""}
      ${s === "number" ? "no-spinner" : ""}
      ${o}
    `.trim();
    return /* @__PURE__ */ e(E, { children: /* @__PURE__ */ d("div", { className: i || "col-span-12", children: [
      /* @__PURE__ */ e(Q, { label: h, required: n }),
      /* @__PURE__ */ d("div", { className: "relative", children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: s === "password" && u ? "text" : s,
            ref: M,
            required: n,
            onKeyDown: c,
            className: g,
            ...k
          }
        ),
        s === "password" && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            tabIndex: -1,
            onClick: () => l((y) => !y),
            className: "absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200",
            children: /* @__PURE__ */ e(
              te,
              {
                icon: u ? "mdi:eye-outline" : "mdi:eye-off-outline",
                className: "w-5 h-5"
              }
            )
          }
        )
      ] })
    ] }, k.name) });
  }
);
Be.displayName = "Input";
const na = ({
  key: h,
  editorKey: n = "",
  value: i = "",
  onChange: o,
  label: s = "",
  required: t = !1,
  placeholder: p = "",
  parentClass: k = "col-span-12",
  height: M = 400,
  inline: u = !1,
  disabled: l = !1,
  plugins: c,
  toolbar: g,
  menubar: y = !1,
  fontFamily: b = "Inter, sans-serif",
  initConfig: v = {},
  imageUploadHandler: x
  // ✅ Promise function passed from parent
}) => /* @__PURE__ */ d("div", { className: k, children: [
  s && /* @__PURE__ */ e(Q, { label: s, required: t }),
  /* @__PURE__ */ e(
    Je,
    {
      apiKey: n,
      value: i,
      disabled: l,
      init: {
        height: M,
        inline: u,
        menubar: y,
        branding: !1,
        statusbar: !0,
        automatic_uploads: !0,
        images_upload_handler: (C) => new Promise((A, B) => {
          if (!x) {
            A(`data:${C.blob().type};base64,${C.base64()}`);
            return;
          }
          x(C).then((F) => {
            F ? A(F) : B("Upload failed: No URL returned");
          }).catch((F) => {
            B(
              typeof F == "string" ? F : (F == null ? void 0 : F.message) || "Image upload failed"
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
        placeholder: p,
        content_style: `
            body {
                font-family: ${b};
            }
            `,
        ...v
      },
      onEditorChange: (C) => {
        o && o(C);
      }
    }
  )
] }, h), la = ({
  name: h = "",
  label: n = "",
  // label for single checkbox
  options: i = [],
  // array of { label, value } for multiple
  value: o = null,
  // boolean for single, array for multiple, or string for single select
  onChange: s,
  disabled: t = !1,
  required: p = !1,
  parentClass: k = "col-span-12",
  className: M = "",
  multiSelect: u = !1
  // ✅ if true, only one option can be selected (like radio)
}) => {
  const l = Array.isArray(i) && i.length > 0, c = (b) => l ? u ? Array.isArray(o) && o.includes(b) : o === b : !!o, g = (b) => {
    s == null || s(b.target.checked, h);
  }, y = (b, v) => {
    if (s)
      if (!u)
        s(v ? b : "", h);
      else {
        const x = Array.isArray(o) ? [...o] : [];
        if (v)
          x.includes(b) || x.push(b);
        else {
          const N = x.indexOf(b);
          N > -1 && x.splice(N, 1);
        }
        s(x, h);
      }
  };
  return l ? /* @__PURE__ */ e(E, { children: /* @__PURE__ */ d("div", { className: `${k}`, children: [
    /* @__PURE__ */ e(Q, { label: n, required: p }),
    /* @__PURE__ */ e("div", { className: "flex flex-col space-y-2", children: i.map((b, v) => /* @__PURE__ */ d("div", { className: "flex items-center", children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          name: h,
          value: b.value,
          checked: c(b.value),
          disabled: t || b.disabled,
          required: p && v === 0,
          onChange: (x) => y(b.value, x.target.checked),
          className: `h-4 w-4 cursor-pointer text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${M}`
        },
        h
      ),
      b.label && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: h,
          className: "ml-2 text-sm text-gray-700 dark:text-gray-200 select-none",
          children: b.label
        }
      )
    ] }, b.value || b.label)) })
  ] }) }) : /* @__PURE__ */ d("div", { className: `flex items-center ${k}`, children: [
    /* @__PURE__ */ e(
      "input",
      {
        type: "checkbox",
        name: h,
        checked: c(),
        disabled: t,
        required: p,
        onChange: g,
        className: `h-4 w-4 text-blue-600 cursor-pointer border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${M}`
      }
    ),
    n && /* @__PURE__ */ e(
      "label",
      {
        htmlFor: h,
        className: "ml-2 text-sm text-gray-700 dark:text-gray-200 select-none",
        children: n
      }
    )
  ] });
}, oa = ({
  label: h = "",
  value: n = null,
  onChange: i,
  required: o = !1,
  accept: s = "audio/*",
  id: t,
  dragDrop: p = !1,
  name: k = "",
  parentClass: M = ""
}) => {
  const [u, l] = S(null), [c, g] = S(!1), y = ae(null);
  H(() => {
    if (!n) {
      b(), l(null);
      return;
    }
    if (n instanceof File) {
      const A = URL.createObjectURL(n);
      return l({ file: n, preview: A }), () => {
        URL.revokeObjectURL(A);
      };
    } else typeof n == "string" ? l({ preview: n }) : n != null && n.preview && l(n);
  }, [n]);
  const b = () => {
    u != null && u.preview && u.preview.startsWith("blob:") && URL.revokeObjectURL(u.preview);
  }, v = (A) => {
    if (!A || A.length === 0)
      return;
    const B = A[0], F = URL.createObjectURL(B);
    b(), l({ file: B, preview: F }), i == null || i(B);
  }, x = (A) => {
    A && A.stopPropagation(), b(), l(null), i == null || i(null), y.current && (y.current.value = "");
  }, N = (A) => {
    p && (A.preventDefault(), g(!0));
  }, I = (A) => {
    p && (A.preventDefault(), g(!1));
  }, D = (A) => {
    p && (A.preventDefault(), g(!1), v(A.dataTransfer.files));
  }, C = () => {
    y.current.click();
  };
  return /* @__PURE__ */ d("div", { className: M || "col-span-12", children: [
    /* @__PURE__ */ e(Q, { label: h, required: o }),
    /* @__PURE__ */ d(
      "div",
      {
        className: `relative rounded-lg p-2 transition-all ${c ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"}`,
        onDragOver: N,
        onDragLeave: I,
        onDrop: D,
        children: [
          /* @__PURE__ */ e(
            "input",
            {
              ref: y,
              id: t,
              type: "file",
              accept: s,
              onChange: (A) => v(A.target.files),
              required: o && !u,
              className: "absolute opacity-0 right-[50%] top-[80%] -translate-y-1/2 pointer-events-none h-[10px]"
            }
          ),
          /* @__PURE__ */ e(
            "div",
            {
              className: `flex items-center space-x-4 transition-all ${c ? "opacity-50" : ""}`,
              children: u ? (
                // Audio player with close button and change button
                /* @__PURE__ */ d("div", { className: "flex items-center space-x-4", children: [
                  /* @__PURE__ */ d("div", { className: "relative w-full", children: [
                    !o && /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        onClick: x,
                        className: "absolute top-0 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800",
                        "aria-label": "Remove audio",
                        children: /* @__PURE__ */ e(te, { icon: "mdi:close", className: "w-3 h-3" })
                      }
                    ),
                    /* @__PURE__ */ e(
                      "audio",
                      {
                        src: u.preview,
                        controls: !0,
                        controlsList: "nodownload"
                      },
                      u.preview
                    )
                  ] }),
                  /* @__PURE__ */ e(ee, { type: "button", onClick: C, children: /* @__PURE__ */ e("span", { children: "Change Audio File" }) })
                ] })
              ) : (
                // Empty state with upload button
                /* @__PURE__ */ d("div", { className: "flex items-center justify-center space-x-4", children: [
                  /* @__PURE__ */ e("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ e(te, { icon: "mdi:music", className: "text-gray-400 w-10 h-10" }) }),
                  /* @__PURE__ */ e(
                    ee,
                    {
                      type: "button",
                      onClick: C,
                      variant: "outlined",
                      children: /* @__PURE__ */ e("span", { children: "Choose Audio File" })
                    }
                  ),
                  p && /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop your audio file here" })
                ] })
              )
            }
          ),
          p && c && !u && /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-lg", children: /* @__PURE__ */ e("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg", children: "Drop audio here" }) })
        ]
      }
    )
  ] }, k);
}, Ue = ({ field: h, formData: n, handleChange: i }) => {
  const {
    key: o,
    label: s,
    type: t,
    options: p,
    placeholder: k,
    rows: M,
    inputClass: u,
    search: l,
    accept: c,
    text: g,
    required: y = !1,
    minLength: b,
    dragDrop: v,
    parentClass: x,
    countriesList: N,
    defaultCountry: I,
    multiple: D,
    dropdownMaxHeight: C,
    editorKey: A,
    fontFamily: B,
    disabled: F,
    negativeNumberAllow: R,
    defaultValue: j,
    renderCondition: $,
    optionDependencyKey: W
  } = h;
  let G = n == null ? void 0 : n[o];
  G == null && (G = "");
  const K = k || (t === "select" ? `Select ${s}` : `Enter ${s}`), U = "w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm focus:outline-none focus:ring-1 focus:ring-blue-200 bg-white text-black dark:bg-gray-700 dark:text-white";
  if ($ && typeof $ == "function" && !$(n))
    return null;
  switch (t) {
    case "select":
      return /* @__PURE__ */ e(
        ea,
        {
          options: p || [],
          value: G,
          formData: n,
          dependencyKey: W,
          onChange: (O) => i(o, O),
          placeholder: K,
          className: u || "",
          search: l,
          required: y,
          defaultValue: j,
          label: s,
          name: o,
          disabled: F,
          parentClass: x,
          multiple: D,
          dropdownMaxHeight: C
        }
      );
    case "checkbox":
      return /* @__PURE__ */ e(
        la,
        {
          name: o,
          label: s,
          options: p || [],
          value: G,
          onChange: (O) => i(o, O),
          required: y,
          parentClass: x,
          className: u || "",
          multiSelect: D,
          disabled: F
        }
      );
    case "switch":
      return /* @__PURE__ */ e(
        aa,
        {
          value: G,
          onChange: (O) => i(o, O),
          text: g,
          options: p || [],
          label: s,
          required: y,
          name: o,
          disabled: F,
          parentClass: x
        }
      );
    case "phone":
      return /* @__PURE__ */ e(
        ra,
        {
          value: G,
          onChange: (O) => i(o, O),
          countriesList: N,
          defaultCountry: I,
          required: y,
          placeholder: K,
          search: l,
          label: s,
          name: o,
          disabled: F,
          parentClass: x
        }
      );
    case "textarea":
      return /* @__PURE__ */ e(
        Ie,
        {
          value: G,
          onChange: (O) => i(o, O.target.value),
          placeholder: K,
          rows: M || 3,
          className: `${U} ${u || ""}`,
          required: y,
          name: o,
          label: s,
          disabled: F,
          parentClass: x
        }
      );
    case "image":
      return /* @__PURE__ */ e(
        ta,
        {
          value: G,
          onChange: (O) => i(o, O),
          required: y,
          accept: c || "image/*",
          id: `file-${o}`,
          dragDrop: v,
          label: s,
          name: o,
          parentClass: x
        }
      );
    case "audio":
      return /* @__PURE__ */ e(
        oa,
        {
          value: G,
          onChange: (O) => i(o, O),
          required: y,
          accept: c || "audio/*",
          id: `file-${o}`,
          dragDrop: v,
          label: s,
          name: o,
          parentClass: x
        }
      );
    case "tinyEditor":
      return /* @__PURE__ */ e(
        na,
        {
          value: G,
          onChange: (O) => i(o, O),
          required: y,
          placeholder: K,
          label: s,
          parentClass: x,
          fontFamily: B,
          editorKey: A,
          disabled: F
        },
        `editor-${o}`
      );
    default:
      return /* @__PURE__ */ e(
        Be,
        {
          type: t || "text",
          value: G,
          onChange: (O) => i(o, O.target.value),
          placeholder: K,
          className: `${U} ${u || ""}`,
          required: y,
          name: o,
          minLength: b,
          label: s,
          negativeNumberAllow: R,
          parentClass: x,
          disabled: F
        }
      );
  }
}, ia = ({ isOpen: h, onClose: n, config: i, onApply: o }) => {
  var u;
  const [s, t] = S({}), p = (l, c) => {
    t((g) => ({ ...g, [l]: c }));
  }, k = () => {
    o == null || o(s), n();
  }, M = () => {
    t({}), o == null || o({}), n();
  };
  return /* @__PURE__ */ d(E, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: `fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${h ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
        onClick: n
      }
    ),
    /* @__PURE__ */ d(
      "div",
      {
        className: `fixed top-0 right-0 h-full w-[28rem] bg-white dark:bg-gray-900 shadow-2xl z-50 flex flex-col border-l border-gray-200 dark:border-gray-700
          transform transition-transform duration-300 ease-in-out
          ${h ? "translate-x-0" : "translate-x-full"}
        `,
        children: [
          /* @__PURE__ */ d("div", { className: "flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700", children: [
            /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: "Filters" }),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: n,
                className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition",
                children: /* @__PURE__ */ e(we, { className: "w-5 h-5 text-gray-500 dark:text-gray-400" })
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 py-3", children: i != null && i.component ? /* @__PURE__ */ e(i.component, { filters: s, onFilterChange: p }) : /* @__PURE__ */ e("div", { className: "space-y-4", children: (u = i == null ? void 0 : i.fields) == null ? void 0 : u.map((l) => /* @__PURE__ */ e(E, { children: /* @__PURE__ */ e(
            Ue,
            {
              field: l,
              formData: s,
              handleChange: p
            },
            l.key
          ) })) }) }),
          /* @__PURE__ */ d("div", { className: "flex gap-2 px-4 py-3 border-t border-gray-200 dark:border-gray-700", children: [
            /* @__PURE__ */ e(
              ee,
              {
                onClick: k,
                variant: "contained",
                color: "primary",
                fullWidth: !0,
                children: "Apply Filters"
              }
            ),
            /* @__PURE__ */ e(
              ee,
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
}, Oe = {
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
}, je = ({
  label: h,
  variant: n = "contained",
  // contained | outline | soft
  color: i = "green",
  className: o = ""
}) => {
  const s = Oe[i] || Oe.green, t = Ae[n] || Ae.contained, p = n === "outline" ? s.border : s.bg;
  return /* @__PURE__ */ e(
    "span",
    {
      className: `inline-flex justify-center items-center rounded-sm text-xs font-semibold px-3 py-1 min-w-[78px]
        ${p}
        ${t}
        ${o}`,
      children: h
    }
  );
}, sa = ({ rows: h = 5, columns: n = 5 }) => /* @__PURE__ */ d(E, { children: [
  /* @__PURE__ */ e("div", { className: "w-full mb-6 inline-flex justify-end items-center", children: /* @__PURE__ */ e("div", { className: "h-8 w-80 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }),
  /* @__PURE__ */ e("div", { className: "overflow-hidden rounded-md border border-gray-200 dark:border-gray-800", children: /* @__PURE__ */ d("table", { className: "w-full border-collapse", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { className: "bg-gray-50 dark:bg-gray-900", children: Array.from({ length: n }).map((i, o) => /* @__PURE__ */ e("th", { className: "px-4 py-3", children: /* @__PURE__ */ e("div", { className: "h-6 w-24 bg-gray-300 dark:bg-gray-700 rounded animate-pulse  inline-flex justify-center items-center" }) }, o)) }) }),
    /* @__PURE__ */ e("tbody", { children: Array.from({ length: h }).map((i, o) => /* @__PURE__ */ e(
      "tr",
      {
        className: "border-t border-gray-200 dark:border-gray-800",
        children: Array.from({ length: n }).map((s, t) => /* @__PURE__ */ e("td", { className: "px-4 py-6", children: /* @__PURE__ */ e("div", { className: "h-6 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }, t))
      },
      o
    )) })
  ] }) })
] }), Ee = ({ src: h, alt: n = "preview", isOpen: i, setIsOpen: o }) => {
  const s = () => o(!1);
  return H(() => {
    const t = (p) => {
      p.key === "Escape" && s();
    };
    return i && (document.body.style.overflow = "hidden", document.addEventListener("keydown", t)), () => {
      document.body.style.overflow = "", document.removeEventListener("keydown", t);
    };
  }, [i]), /* @__PURE__ */ e(E, { children: /* @__PURE__ */ d(
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
            children: /* @__PURE__ */ e(we, { size: 20 })
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
                src: h,
                alt: n,
                className: "w-full max-h-[90vh] object-contain rounded-xl"
              }
            )
          }
        )
      ]
    }
  ) });
}, da = ({ config: h, setShowAdd: n, title: i, buttonText: o, description: s }) => {
  const {
    data: t = [],
    table_head: p = [],
    loading: k = !1,
    search: M = {
      enabled: !1,
      placeholder: "Search...",
      useServerSideSearch: !1
    },
    filter: u = {
      enabled: !1,
      useServerSideFilters: !1
    },
    pagination: l = {
      enabled: !1,
      rows_per_page: 10,
      useServerSidePagination: !1
    },
    emptyMessage: c = "No data available",
    onMenuAction: g,
    setServerSidePaginationData: y = () => {
    },
    onFilterApply: b,
    filterConfig: v = null
  } = h, [x, N] = S(""), [I, D] = S(null), [C, A] = S([]), [B, F] = S({}), [R, j] = S(!1), [$, W] = S(null), [G, K] = S(!1), U = Me(() => !M.enabled || !x.trim() || M.useServerSideSearch ? t : Xe(t, x, M.searchKeys || []), [t, x, M]), [O, Y] = S(1), [q, w] = S((l == null ? void 0 : l.rows_per_page) || 50), [z, re] = S(U.length || 0), J = l != null && l.useServerSidePagination ? l.total_pages : Math.ceil(U.length / q), X = Me(() => {
    if (l.useServerSidePagination) return U;
    const r = (O - 1) * q;
    return U.slice(r, r + q);
  }, [U, O, q]), ne = ae(null), ie = ae({}), le = ae(null), se = (r) => {
    N(r), Y(1), M.useServerSideSearch && (le.current && clearTimeout(le.current), le.current = setTimeout(async () => {
      try {
        await y((f) => ({
          ...f,
          search: r,
          current_page: 1
        }));
      } catch (f) {
        console.error("Search error:", f);
      }
    }, 800));
  }, de = (r, f, P) => {
    P.stopPropagation(), D(null), g == null || g(r.type, f);
  }, ce = (r, f, P) => {
    f.stopPropagation(), A(P);
    const _ = f.currentTarget;
    ie.current[r] = _;
    const m = _.getBoundingClientRect(), L = 192, T = P.length * 40, Z = window.innerWidth, V = window.innerHeight, Ge = Z - m.right < L ? m.left - L + m.width : m.left, _e = V - m.bottom < T && m.top > T ? m.top - T - 2 : m.bottom + 2;
    F({
      top: Math.max(8, Math.min(_e, V - T - 8)),
      left: Math.max(8, Math.min(Ge, Z - L - 8))
    }), D(I === r ? null : r);
  }, he = (r) => (O - 1) * q + r + 1, ue = (r) => {
    r && r.src instanceof File && (r = { ...r, src: URL.createObjectURL(r.src) }), W(r), K(!0);
  }, oe = (r, f, P, _ = null) => /* @__PURE__ */ e(E, { children: r ? /* @__PURE__ */ e(
    "img",
    {
      src: r instanceof File ? URL.createObjectURL(r) : r,
      alt: f || "Avatar",
      onClick: (m) => {
        m.stopPropagation(), m.preventDefault(), ue({ src: r, alt: f });
      },
      className: `w-10 h-10 cursor-pointer shrink-0 rounded-full object-cover border border-gray-200 dark:border-gray-700 ${P || ""}`
    }
  ) : /* @__PURE__ */ e(E, { children: _ || /* @__PURE__ */ e(
    "div",
    {
      className: `w-10 h-10 flex items-center shrink-0 justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${P || ""}`,
      children: /* @__PURE__ */ e(Fe, { className: "w-6 h-6 text-gray-400 dark:text-gray-400" })
    }
  ) }) }), be = (r, f) => /* @__PURE__ */ e(E, { children: r ? /* @__PURE__ */ e(
    "audio",
    {
      controls: !0,
      src: r instanceof File ? URL.createObjectURL(r) : r,
      onClick: (P) => {
        P.stopPropagation();
      },
      className: `w-64 cursor-pointer ${f || ""}`
    },
    r instanceof File ? URL.createObjectURL(r) : r
  ) : /* @__PURE__ */ e(E, { children: /* @__PURE__ */ e(
    "div",
    {
      className: `w-12 h-12 flex items-center shrink-0 justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${f || ""}`,
      children: /* @__PURE__ */ e(qe, { className: "w-6 h-6 text-gray-400 dark:text-gray-400" })
    }
  ) }) }), pe = (r, f) => /* @__PURE__ */ d("div", { className: `flex items-center space-x-4 ${f.className || ""}`, children: [
    f.imageKey ? oe(r[f.imageKey], r[f.titleKey], "group-avatar") : "",
    /* @__PURE__ */ d("div", { children: [
      /* @__PURE__ */ e("p", { className: "font-medium text-gray-900 dark:text-white group-title", children: r[f.titleKey] || "" }),
      /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400 group-sub-title", children: r[f.subtitleKey] || "" })
    ] })
  ] }), ge = (r, f) => {
    var L;
    let P = String(r);
    const _ = f.variant || "contained";
    let m = f.defaultColor;
    if (((L = f == null ? void 0 : f.chipOptions) == null ? void 0 : L.length) > 0) {
      let T = f == null ? void 0 : f.chipOptions.find((Z) => Z.value == r);
      T && (P = T.label, m = T.color);
    }
    return /* @__PURE__ */ e(
      je,
      {
        label: P,
        variant: _,
        color: m,
        className: f.className || ""
      }
    );
  }, me = (r, f, P) => {
    const _ = f[r.key];
    return r.type === "menu_actions" ? /* @__PURE__ */ e("div", { className: `text-center ${r.className || ""}`, children: /* @__PURE__ */ e(
      "button",
      {
        ref: (m) => ie.current[f.id || f._id] = m,
        onClick: (m) => ce(f.id || f._id, m, r.menuList),
        className: "p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition text-gray-700 dark:text-gray-300",
        children: /* @__PURE__ */ e(We, { className: "h-4 w-4" })
      }
    ) }) : r.type === "index" ? /* @__PURE__ */ e("span", { className: r.className || "", children: he(P) }) : r.type === "group" ? pe(f, r) : r.type === "chip" ? /* @__PURE__ */ e(E, { children: ge(_, r) }) : r.type === "date" ? /* @__PURE__ */ e("span", { className: r.className || "", children: Pe(_, r.format || "DD MMM YYYY") }) : r.type === "avatar" ? /* @__PURE__ */ e(E, { children: /* @__PURE__ */ e("div", { className: "min-w-[40px]", children: oe(_, r.alt, r.className, r.fallback_icon) }) }) : r.type === "audio" ? /* @__PURE__ */ e(E, { children: be(_, r.className) }) : /* @__PURE__ */ e("span", { className: r.className || "", children: _ || "N/A" });
  }, fe = (r, f) => {
    if (r.onClickDetails)
      return g == null ? void 0 : g("view", f);
    if (typeof r.handleClick == "function")
      return r.handleClick(f);
  }, ye = (r) => r.onClickDetails || typeof r.handleClick == "function";
  return H(() => {
    const r = () => {
      I && D(null);
    };
    return window.addEventListener("scroll", r, !0), () => {
      window.removeEventListener("scroll", r, !0);
    };
  }, [I]), H(() => {
    const r = (f) => {
      ne.current && !ne.current.contains(f.target) && D(null);
    };
    return document.addEventListener("click", r), () => document.removeEventListener("click", r);
  }, []), H(() => {
    l != null && l.rows_per_page && (l != null && l.useServerSidePagination) && w((l == null ? void 0 : l.rows_per_page) || 50), l.current_page && Y(l.current_page);
  }, [
    l.rows_per_page,
    l == null ? void 0 : l.useServerSidePagination,
    l.current_page
  ]), H(() => {
    re(
      l != null && l.useServerSidePagination ? l.total_records : U.length
    ), U.length <= q * (O - 1) && !(l != null && l.useServerSidePagination) && Y((r) => r - 1 || 1);
  }, [
    U.length,
    l.total_records,
    l == null ? void 0 : l.useServerSidePagination
  ]), k ? /* @__PURE__ */ e(sa, { rows: 6, columns: 6 }) : /* @__PURE__ */ d(E, { children: [
    /* @__PURE__ */ d("div", { className: "flex flex-col sm:flex-row sm:justify-between gap-4 mb-3", children: [
      /* @__PURE__ */ d("div", { children: [
        /* @__PURE__ */ e("h1", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: i }),
        /* @__PURE__ */ e("p", { className: "text-md text-gray-600 dark:text-gray-400", children: s })
      ] }),
      /* @__PURE__ */ d("div", { className: "flex flex-col justify-end items-end gap-2", children: [
        /* @__PURE__ */ d(
          ee,
          {
            onClick: () => n(!0),
            variant: "contained",
            color: "primary",
            children: [
              /* @__PURE__ */ e(ze, { className: "w-4 h-4 mr-2" }),
              o || "Add New"
            ]
          }
        ),
        /* @__PURE__ */ d("div", { className: "flex justify-end items-center gap-2", children: [
          M.enabled && /* @__PURE__ */ e("div", { className: "", children: /* @__PURE__ */ d("div", { className: "relative min-w-[300px]", children: [
            /* @__PURE__ */ e(Re, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-300" }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                placeholder: M.placeholder || "Search...",
                value: x,
                onChange: (r) => se(r.target.value),
                className: "w-full h-[36px] pl-9 pr-4 py-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-300 dark:ring-blue-200 disabled:opacity-50"
              }
            )
          ] }) }),
          v && u.enabled && /* @__PURE__ */ d(ee, { onClick: () => j(!0), variant: "contained", children: [
            /* @__PURE__ */ e(He, { className: "w-4 h-4 mr-2" }),
            "Filters"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ d("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-700", children: [
      /* @__PURE__ */ e("div", { className: "overflow-x-auto", children: /* @__PURE__ */ d("table", { className: "min-w-full divide-y divide-gray-200 dark:divide-gray-700", children: [
        /* @__PURE__ */ e("thead", { className: "bg-gray-50 dark:bg-gray-700/60", children: /* @__PURE__ */ e("tr", { children: p.map((r) => /* @__PURE__ */ e(
          "th",
          {
            className: `px-6 py-4 text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider min-w-max max-w-[180px] truncate ${r.headClass || ""}`,
            children: r.title
          },
          r.key
        )) }) }),
        /* @__PURE__ */ e("tbody", { className: "bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700", children: X.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e(
          "td",
          {
            colSpan: p.length,
            className: "text-center py-10 text-gray-500 dark:text-gray-400",
            children: c
          }
        ) }) : X.map((r, f) => /* @__PURE__ */ e(
          "tr",
          {
            className: "hover:bg-gray-50 dark:hover:bg-blue-800/10 transition",
            children: p.map((P) => /* @__PURE__ */ e(
              "td",
              {
                className: `px-6 py-4 text-sm text-gray-900 dark:text-gray-100 min-w-max ${P.type == "audio" ? "" : "max-w-[300px]"} truncate ${ye(P) ? "cursor-pointer" : ""}`,
                title: String(r[P.key] ?? ""),
                onClick: () => fe(P, r),
                children: P.render ? P.render(r, f) : me(P, r, f)
              },
              P.key
            ))
          },
          r.id || r._id || f
        )) })
      ] }) }),
      (l == null ? void 0 : l.enabled) && U.length > 0 && /* @__PURE__ */ d("div", { className: " bg-gray-50 dark:bg-gray-700/60 px-6 py-3 flex flex-wrap items-center justify-between border-t border-gray-200 dark:border-gray-600 gap-3", children: [
        /* @__PURE__ */ d("div", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
          "Showing ",
          (O - 1) * q + 1,
          " to",
          " ",
          Math.min(O * q, z),
          " of ",
          z,
          " ",
          "results"
        ] }),
        /* @__PURE__ */ d("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Rows per page:" }),
            /* @__PURE__ */ e(
              "select",
              {
                value: q,
                onChange: (r) => {
                  const f = Number(r.target.value);
                  w(f), Y(1), l.useServerSidePagination && y((P) => ({
                    ...P,
                    current_page: 1,
                    rows_per_page: f
                  }));
                },
                className: "border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500",
                children: [2, 10, 25, 50, 100].map((r) => /* @__PURE__ */ e("option", { value: r, children: r }, r))
              }
            )
          ] }),
          /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => {
                  if (O > 1) {
                    const r = O - 1;
                    Y(r), l.useServerSidePagination && y((f) => ({
                      ...f,
                      current_page: r
                    }));
                  }
                },
                disabled: O === 1,
                className: "p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition text-gray-500 dark:text-gray-300 disabled:opacity-50",
                children: /* @__PURE__ */ e(Ye, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ d("span", { className: "text-sm text-gray-800 dark:text-gray-200", children: [
              "Page ",
              O,
              " of ",
              J
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => {
                  if (O < J) {
                    const r = O + 1;
                    Y(r), l.useServerSidePagination && y((f) => ({
                      ...f,
                      current_page: r
                    }));
                  }
                },
                disabled: O === J,
                className: "p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition text-gray-500 dark:text-gray-300 disabled:opacity-50",
                children: /* @__PURE__ */ e(Ve, { className: "h-4 w-4" })
              }
            )
          ] })
        ] })
      ] })
    ] }),
    I && Ze(
      /* @__PURE__ */ e(
        "div",
        {
          ref: ne,
          style: {
            position: "fixed",
            top: `${B.top}px`,
            left: `${B.left}px`,
            zIndex: 9999
          },
          className: "w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg border border-gray-200 dark:border-gray-600",
          children: C.map((r, f) => /* @__PURE__ */ d(
            "button",
            {
              onClick: (P) => de(
                r,
                t.find(
                  (_) => _.id === I || _._id == I
                ),
                P
              ),
              className: `w-full flex items-center gap-2 px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-600 ${r.variant === "danger" ? "text-red-600 dark:text-red-500" : "text-gray-700 dark:text-gray-200"}`,
              children: [
                r.icon && /* @__PURE__ */ e("span", { className: "shrink-0", children: r.icon }),
                r.title
              ]
            },
            f
          ))
        }
      ),
      document.body
    ),
    v && /* @__PURE__ */ e(
      ia,
      {
        isOpen: R,
        onClose: () => j(!1),
        config: v,
        onApply: b
      }
    ),
    G && /* @__PURE__ */ e(
      Ee,
      {
        src: $.src,
        alt: $.alt,
        isOpen: G,
        setIsOpen: K
      }
    )
  ] });
}, ve = ({
  isOpen: h,
  onClose: n,
  icon: i,
  title: o,
  children: s,
  size: t = "md",
  actionButtons: p = [],
  actions: k,
  showDefaultClose: M = !0,
  footerConfig: u = null,
  hideFooter: l = !1,
  onFormSubmit: c = () => {
  },
  onCancel: g,
  loadingBtn: y = !1,
  executeFunction: b = () => {
  },
  selectedItem: v = null
}) => {
  if (!h) return null;
  const x = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-full"
  };
  return /* @__PURE__ */ d("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: "fixed inset-0 bg-gray-500 opacity-75",
        onClick: () => n()
      }
    ),
    /* @__PURE__ */ d(
      "div",
      {
        className: `relative bg-white rounded-lg shadow-xl w-full ${x[t] || x.md} max-h-[90vh] flex flex-col dark:bg-gray-800`,
        children: [
          /* @__PURE__ */ d("div", { className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0", children: [
            /* @__PURE__ */ d("div", { className: "flex items-center gap-1", children: [
              i && /* @__PURE__ */ e("span", { children: i }),
              /* @__PURE__ */ e("h3", { className: "text-lg font-medium text-gray-900 dark:text-white", children: o })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => n(),
                className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
                children: /* @__PURE__ */ e(we, { className: "w-6 h-6" })
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto p-4", children: s }),
          p.length > 0 && /* @__PURE__ */ e("div", { className: "px-4 py-3 flex justify-end gap-3 border-t border-gray-200 dark:border-gray-700 sm:px-6", children: p.map((N) => /* @__PURE__ */ e(
            ee,
            {
              onClick: (I) => {
                N.type == "submit" ? c(I) : b(
                  () => {
                    var D;
                    return (D = N == null ? void 0 : N.onClick) == null ? void 0 : D.call(N, I, v);
                  },
                  (D) => n == null ? void 0 : n(D)
                );
              },
              disabled: y || N.disabled,
              variant: N.variant || "contained",
              color: N.color || "primary",
              className: `min-w-[100px] ${N.className}`,
              type: N.type || "button",
              children: y ? /* @__PURE__ */ d("div", { className: "flex items-center", children: [
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
}, De = ({ config: h, onSubmit: n, initialData: i = {}, type: o = "add" }) => {
  const { formClass: s = "grid grid-cols-12 gap-4", formFields: t = [] } = h || {}, [p, k] = S(i);
  H(() => {
    k(i);
  }, []);
  const M = (l, c) => {
    k((g) => ({ ...g, [l]: c }));
  }, u = (l) => {
    l.preventDefault();
    const c = l.target;
    if (!c.checkValidity()) {
      c.reportValidity();
      return;
    }
    n(p);
  };
  return /* @__PURE__ */ e(
    "form",
    {
      id: o == "add" ? "addForm" : o == "edit" ? "editForm" : "defaultForm",
      onSubmit: u,
      className: s,
      noValidate: !1,
      children: t.map((l) => /* @__PURE__ */ e(E, { children: /* @__PURE__ */ e(
        Ue,
        {
          field: l,
          formData: p,
          handleChange: M
        },
        l.key
      ) }))
    }
  );
};
function ca({ data: h, config: n }) {
  const { fields: i, containerClass: o } = n, [s, t] = S(null), [p, k] = S(!1), M = (c) => {
    c && c.src instanceof File && (c = { ...c, src: URL.createObjectURL(c.src) }), t(c), k(!0);
  }, u = ({ col: c }) => {
    var I;
    let g = c == null ? void 0 : c.icon, y = c.label, b = h[c.key], v = c.type, x = c.variant || "outline", N = c.defaultColor;
    if (v === "chip" && ((I = c.chipOptions) == null ? void 0 : I.length) > 0) {
      let D = c == null ? void 0 : c.chipOptions.find((C) => C.value == b);
      D && (b = D.label, N = D.color);
    }
    return /* @__PURE__ */ d(
      "div",
      {
        className: `col-span-12 flex items-center space-x-4 p-4 rounded-xl 
                  bg-gray-100 dark:bg-gray-900 ${c.blockClass || ""}`,
        children: [
          g && /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: g }),
          /* @__PURE__ */ d("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ e("p", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: y }),
            v === "chip" ? /* @__PURE__ */ e(
              je,
              {
                label: b,
                variant: x,
                color: N,
                className: "mt-1"
              }
            ) : (
              /* TINY EDITOR */
              v === "tinyEditor" ? /* @__PURE__ */ e(
                "p",
                {
                  className: "mt-1 text-sm text-gray-900 dark:text-white break-words",
                  dangerouslySetInnerHTML: {
                    __html: b
                  }
                }
              ) : v === "audio" ? b ? /* @__PURE__ */ e(
                "audio",
                {
                  controls: !0,
                  src: b instanceof File ? URL.createObjectURL(b) : b,
                  onClick: (D) => D.stopPropagation(),
                  className: "shadow-md rounded-full"
                },
                b instanceof File ? URL.createObjectURL(b) : b
              ) : /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-gray-400", children: "N/A" }) : (
                /* DEFAULT */
                /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-gray-900 dark:text-white break-words", children: v == "date" ? /* @__PURE__ */ e("span", { children: Pe(b, c.format || "DD MMM YYYY") }) : b || "N/A" })
              )
            )
          ] })
        ]
      }
    );
  }, l = ({ col: c }) => {
    let g = h[c.titleKey], y = h[c.subtitleKey], b = h[c.imageKey], v = h[c.fallback_icon];
    return /* @__PURE__ */ d(
      "div",
      {
        className: `col-span-12 flex items-center space-x-4 p-4 rounded-xl 
      bg-gray-100 dark:bg-gray-900 
      ${c.blockClass}`,
        children: [
          b ? /* @__PURE__ */ e(
            "img",
            {
              src: b instanceof File ? URL.createObjectURL(b) : b,
              alt: g,
              onClick: () => M({ src: b, alt: g }),
              className: "w-16 h-16 cursor-pointer rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
            }
          ) : v || /* @__PURE__ */ e("div", { className: "w-16 h-16 flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600", children: /* @__PURE__ */ e(Fe, { className: "w-8 h-8 text-gray-400" }) }),
          /* @__PURE__ */ d("div", { children: [
            /* @__PURE__ */ e("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: g }),
            /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: y })
          ] })
        ]
      }
    );
  };
  return /* @__PURE__ */ d(E, { children: [
    p && /* @__PURE__ */ e(
      Ee,
      {
        src: s.src,
        alt: s.alt,
        isOpen: p,
        setIsOpen: k
      }
    ),
    /* @__PURE__ */ e("div", { className: `grid grid-cols-12 gap-4 ${o || ""}`, children: i.map(
      (c) => c.type == "group" ? /* @__PURE__ */ e(l, { col: c }) : /* @__PURE__ */ e(u, { col: c })
    ) })
  ] });
}
const $e = ({ config: h }) => {
  var se, de, ce, he, ue, oe, be, pe, ge, me, fe, ye, r, f, P, _;
  const {
    title: n,
    fetchData: i = async () => {
    },
    isStaticData: o = !1,
    tableConfig: s = {},
    modalConfig: t = {},
    filterConfig: p
  } = h, [k, M] = S(!0), [u, l] = S(!1), [c, g] = S([]), [y, b] = S(null), [v, x] = S({
    search: "",
    rows_per_page: 50,
    current_page: 1
  }), [N, I] = S({}), [D, C] = S(!1), [A, B] = S(!1), [F, R] = S(!1), [j, $] = S(!1), [W, G] = S(!1), [K, U] = S(null), O = (m, L) => {
    m === "edit" ? (U(L), R(!0)) : m === "view" ? (U(L), G(!0)) : m === "delete" && (U(L), $(!0));
  }, Y = async (m, L, T = "", Z = "") => {
    l(!0);
    try {
      const V = await (m == null ? void 0 : m());
      (T || V.message) && ke(T || V.message, {
        variant: "success"
      }), L == null || L(V);
    } catch (V) {
      (Z || V.message) && ke(Z || V.message, { variant: "error" });
    } finally {
      l(!1);
    }
  }, q = (m) => {
    let L = m.newObject;
    o ? (g((T) => [L, ...T]), b((T) => ({
      ...T,
      current_page: 1
    }))) : (x((T) => ({
      ...T,
      current_page: 1
    })), v.current_page == 1 && X()), B(!1);
  }, w = (m) => {
    let L = m.newObject, T = m.targetObject;
    o ? g(
      (Z) => Z.map(
        (V) => V.id === T.id ? { ...V, ...L } : V
      )
    ) : X(), R(!1);
  }, z = (m) => {
    if (!m) {
      $(!1), U(null);
      return;
    }
    o ? g(
      (L) => L.filter((T) => T.id !== m.targetObject.id)
    ) : c.length == 1 && v.current_page > 1 ? x((L) => ({
      ...L,
      current_page: L.current_page - 1
    })) : X(), $(!1), U(null);
  }, re = (m) => Y(
    () => {
      var L, T;
      return (T = (L = t == null ? void 0 : t.addModal) == null ? void 0 : L.handleSubmit) == null ? void 0 : T.call(L, m);
    },
    q
  ), J = (m) => Y(
    () => {
      var L, T;
      return (T = (L = t == null ? void 0 : t.editModal) == null ? void 0 : L.handleSubmit) == null ? void 0 : T.call(L, m, K);
    },
    w
  ), X = async () => {
    M(!0), i == null || i({ ...v, ...N }).then((m) => {
      g(m.data), b(m.pagination);
    }).catch((m) => {
      ke(m.message, { variant: "error" });
    }).finally(() => {
      M(!1);
    });
  }, ne = (m) => {
    var L;
    I((T) => ({
      ...m
    })), (L = s == null ? void 0 : s.filter) != null && L.useServerSideFilters && C((T) => !T);
  }, ie = (m, L) => m.filter(
    (T) => Object.entries(L).every(([Z, V]) => T[Z] === V)
  ), le = Me(() => {
    var m;
    return (m = s == null ? void 0 : s.filter) != null && m.useServerSideFilters ? c : ie(c, N);
  }, [c, N]);
  return H(() => {
    X();
  }, [
    v.search,
    v.rows_per_page,
    v.current_page,
    D
  ]), /* @__PURE__ */ e(
    Qe,
    {
      maxSnack: 3,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right"
      },
      autoHideDuration: 3e3,
      action: (m) => /* @__PURE__ */ e(
        "button",
        {
          onClick: () => {
            window.dispatchEvent(
              new CustomEvent("closeSnackbar", { detail: m })
            );
          },
          className: "p-1 hover:bg-white/20 rounded-full transition-colors duration-200 text-white flex items-center justify-center",
          children: /* @__PURE__ */ e(we, { className: "h-4 w-4" })
        }
      ),
      children: /* @__PURE__ */ d("div", { children: [
        /* @__PURE__ */ e(
          da,
          {
            title: n,
            setShowAdd: B,
            description: h.description,
            buttonText: h.buttonText,
            config: {
              ...s,
              pagination: {
                ...s.pagination,
                ...y
              },
              data: le,
              setServerSidePaginationData: x,
              onMenuAction: O,
              filterConfig: p,
              onFilterApply: ne,
              loading: k
            }
          }
        ),
        /* @__PURE__ */ e(
          ve,
          {
            isOpen: A,
            onClose: () => {
              u || B(!1);
            },
            icon: (se = t.addModal) == null ? void 0 : se.icon,
            title: ((de = t.addModal) == null ? void 0 : de.title) || "Add New",
            size: ((ce = t.addModal) == null ? void 0 : ce.size) || "md",
            onFormSubmit: () => {
              var m;
              return (m = document.querySelector("#addForm")) == null ? void 0 : m.requestSubmit();
            },
            loadingBtn: u,
            actionButtons: t.addModal.actionButtons,
            children: /* @__PURE__ */ e(
              De,
              {
                config: (t == null ? void 0 : t.addModal) || [],
                onSubmit: re,
                initialData: {},
                type: "add",
                loading: u
              }
            )
          }
        ),
        /* @__PURE__ */ e(
          ve,
          {
            isOpen: F,
            onClose: () => {
              u || R(!1);
            },
            icon: (he = t.editModal) == null ? void 0 : he.icon,
            title: ((ue = t.editModal) == null ? void 0 : ue.title) || "Edit",
            size: ((oe = t.editModal) == null ? void 0 : oe.size) || "md",
            onFormSubmit: () => {
              var m;
              return (m = document.querySelector("#editForm")) == null ? void 0 : m.requestSubmit();
            },
            actionButtons: t.editModal.actionButtons,
            loadingBtn: u,
            children: /* @__PURE__ */ e(
              De,
              {
                config: t.editModal || [],
                onSubmit: J,
                initialData: K,
                type: "edit",
                loading: u
              }
            )
          }
        ),
        j && /* @__PURE__ */ e(
          ve,
          {
            isOpen: j,
            onClose: (m) => {
              z(m);
            },
            icon: ((be = t.deleteModal) == null ? void 0 : be.icon) || /* @__PURE__ */ e(te, { icon: "ph:warning-bold", className: "w-6 h-6 text-red-500" }),
            title: ((pe = t.deleteModal) == null ? void 0 : pe.title) || "Confirm Delete",
            size: ((ge = t.deleteModal) == null ? void 0 : ge.size) || "md",
            loading: u,
            actionButtons: t.deleteModal.actionButtons,
            executeFunction: Y,
            selectedItem: K,
            children: /* @__PURE__ */ e("div", { className: "flex items-center space-x-2 py-3", children: /* @__PURE__ */ d("div", { children: [
              /* @__PURE__ */ e("p", { className: "text-md text-gray-700 dark:text-white", children: ((me = t.deleteModal) == null ? void 0 : me.confirmText) || "Are you sure you want to delete this item?" }),
              ((fe = t.deleteModal) == null ? void 0 : fe.referenceKey) && /* @__PURE__ */ e("p", { className: "text-md font-semibold text-gray-700 dark:text-white", children: K[(ye = t.deleteModal) == null ? void 0 : ye.referenceKey] })
            ] }) })
          }
        ),
        t.viewModal && /* @__PURE__ */ e(
          ve,
          {
            isOpen: W,
            onClose: () => {
              G(!1), U(null);
            },
            icon: (r = t.viewModal) == null ? void 0 : r.icon,
            title: ((f = t.viewModal) == null ? void 0 : f.title) || "View Details",
            size: ((P = t.viewModal) == null ? void 0 : P.size) || "lg",
            footerConfig: t == null ? void 0 : t.viewModal.footer,
            children: (_ = t.viewModal) != null && _.component ? /* @__PURE__ */ e(t.viewModal.component, { data: K }) : /* @__PURE__ */ e(
              ca,
              {
                data: K,
                config: t.viewModal || {}
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
}), ha = a.shape({
  title: a.string.isRequired,
  type: a.string.isRequired,
  variant: a.string,
  icon: a.node
}), ua = a.shape({
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
  menuList: a.arrayOf(ha)
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
}), ba = a.shape({
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
$e.propTypes = {
  config: a.shape({
    title: a.string.isRequired,
    description: a.string,
    buttonText: a.string,
    fetchData: a.func.isRequired,
    isStaticData: a.bool,
    /* ================= TABLE CONFIG ================= */
    tableConfig: a.shape({
      table_head: a.arrayOf(ua).isRequired,
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
        fields: a.arrayOf(ba),
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
const pa = () => {
  if (typeof document > "u" || document.getElementById("react-admin-crud-manager-styles")) return;
  const h = document.createElement("style");
  h.id = "react-admin-crud-manager-styles";
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
  h.textContent = n, document.head.appendChild(h);
};
function Ma(h) {
  return H(() => {
    pa();
  }, []), /* @__PURE__ */ e(E, { children: /* @__PURE__ */ e($e, { config: h.config }) });
}
export {
  Ma as default
};
//# sourceMappingURL=index.es.js.map
