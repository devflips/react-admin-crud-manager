import { jsx as e, Fragment as j, jsxs as u } from "react/jsx-runtime";
import Fe, { useState as R, useRef as X, useEffect as _, useMemo as Ae } from "react";
import { Info as qe, ChevronDown as Ee, Search as Te, Check as Ze, X as Me, Plus as Je, Filter as Qe, ChevronLeft as Xe, ChevronRight as ea, EllipsisVertical as aa, User as De, Music as ta } from "lucide-react";
import { createPortal as ra } from "react-dom";
import { Icon as re } from "@iconify/react";
import { Editor as na } from "@tinymce/tinymce-react";
import { SnackbarProvider as la, enqueueSnackbar as Re } from "notistack";
import t from "prop-types";
const $e = (b, o = "DD MMM YYYY") => {
  if (!b) return "N/A";
  const l = new Date(b);
  if (isNaN(l)) return "Invalid Date";
  const s = (r) => String(r).padStart(2, "0"), c = {
    YYYY: l.getFullYear(),
    YY: String(l.getFullYear()).slice(-2),
    MMMM: l.toLocaleString("en-US", { month: "long" }),
    MMM: l.toLocaleString("en-US", { month: "short" }),
    MM: s(l.getMonth() + 1),
    M: l.getMonth() + 1,
    DD: s(l.getDate()),
    D: l.getDate(),
    dddd: l.toLocaleString("en-US", { weekday: "long" }),
    ddd: l.toLocaleString("en-US", { weekday: "short" }),
    HH: s(l.getHours()),
    hh: s(l.getHours() % 12 || 12),
    mm: s(l.getMinutes()),
    ss: s(l.getSeconds()),
    A: l.getHours() >= 12 ? "PM" : "AM"
  };
  return o.replace(
    /YYYY|YY|MMMM|MMM|MM|M|DD|D|dddd|ddd|HH|hh|mm|ss|A/g,
    (r) => c[r]
  );
}, oa = (b, o, l = []) => {
  if (!(o != null && o.trim())) return b;
  const s = o.toLowerCase(), c = (r) => r == null ? [] : typeof r == "object" ? Object.values(r).flatMap(c) : [String(r)];
  return b.filter((r) => {
    let g = [];
    return l.length > 0 ? l.forEach((M) => {
      r[M] !== void 0 && g.push(...c(r[M]));
    }) : g = c(r), g.some(
      (M) => M.toLowerCase().includes(s)
    );
  });
}, Z = Fe.forwardRef(
  ({
    className: b = "",
    variant: o = "contained",
    color: l = "default",
    size: s = "default",
    fullWidth: c = !1,
    children: r,
    ...g
  }, M) => {
    var y;
    const O = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", h = {
      sm: "h-8 px-3 rounded-md text-sm",
      md: "h-9 px-4 rounded-md text-sm",
      lg: "h-11 px-6 rounded-md text-base",
      xl: "h-12 px-8 rounded-lg text-lg",
      default: "h-9 px-4 rounded-md text-sm"
    }, v = {
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
    }, d = ((y = v[l]) == null ? void 0 : y[o]) || v.default.contained, i = h[s], x = `
      ${O} 
      ${d} 
      ${i} 
      ${c ? "w-full" : ""} 
      ${b}
    `.trim();
    return /* @__PURE__ */ e(
      "button",
      {
        ref: M,
        type: g.type || "button",
        className: x,
        ...g,
        children: r
      }
    );
  }
);
Z.displayName = "Button";
function W({ label: b, required: o = !1, infoText: l = "" }) {
  return /* @__PURE__ */ e(j, { children: /* @__PURE__ */ u("label", { className: "flex text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: [
    b,
    o && /* @__PURE__ */ e("span", { className: "ml-1", children: "*" }),
    l && /* @__PURE__ */ u("span", { className: "ml-2 relative group inline-flex items-center cursor-pointer", children: [
      /* @__PURE__ */ e(qe, { className: "w-4 h-4 text-gray-500 dark:text-gray-400" }),
      /* @__PURE__ */ e(
        "span",
        {
          className: `absolute left-1/2 top-full mt-2\r
                   w-max max-w-xs bg-white text-black dark:bg-black dark:text-white text-xs\r
                   rounded px-2 py-1 opacity-0 shadow-lg\r
                   group-hover:opacity-100 transition-opacity\r
                   duration-200 pointer-events-none z-50`,
          children: l
        }
      )
    ] })
  ] }) });
}
const ia = ({
  options: b = [],
  value: o = "",
  defaultValue: l = "",
  onChange: s,
  placeholder: c = "Select option",
  className: r = "",
  disabled: g = !1,
  search: M = !1,
  label: O = "",
  required: h = !1,
  name: v = "",
  parentClass: d = "",
  multiple: i = !1,
  // ✅ NEW
  dropdownMaxHeight: x = "",
  formData: y = {},
  dependencyKey: p = ""
}) => {
  var ee;
  const [m, N] = R(!1), [A, I] = R(""), [k, C] = R(!0), P = X(null), F = X(null), [L, E] = R([]);
  let G = o || o === !1 ? o : l;
  const H = (w) => w == null || w === "" ? "" : String(typeof w == "boolean" ? w : w ?? "");
  _(
    () => {
      (async () => {
        if (typeof b == "function") {
          const T = await b(y);
          E(T);
        } else
          E(b || []);
      })();
    },
    p ? [b, y == null ? void 0 : y[p]] : [b]
  );
  const V = i ? (G || []).map(H) : H(G), B = L.filter(
    (w) => w.label.toLowerCase().includes(A.toLowerCase())
  ), K = (w) => {
    const T = H(w);
    return i ? V.includes(T) : T === V;
  };
  _(() => {
    const w = (T) => {
      P.current && !P.current.contains(T.target) && (N(!1), I(""));
    };
    return document.addEventListener("mousedown", w), () => document.removeEventListener("mousedown", w);
  }, []), _(() => {
    if (m && P.current) {
      const w = P.current.getBoundingClientRect(), Y = window.innerHeight - w.bottom;
      C(Y < 200);
    }
  }, [m]), _(() => {
    m && F.current && F.current.focus();
  }, [m]);
  const J = (w) => {
    let T = w;
    if (w === "true" ? T = !0 : w === "false" && (T = !1), i) {
      const Y = V.includes(H(w));
      let z;
      Y ? z = o.filter(
        (q) => H(q) !== H(w)
      ) : z = [...o || [], T], s(z);
    } else
      s(T), N(!1);
    I("");
  }, D = i ? L.filter((w) => K(w.value)).map((w) => w.label).join(", ") : (ee = L.find((w) => K(w.value))) == null ? void 0 : ee.label;
  return _(() => {
    (G || G === !1) && setTimeout(() => {
      s(G);
    }, 100);
  }, []), /* @__PURE__ */ u("div", { className: d || "col-span-12", children: [
    /* @__PURE__ */ e(W, { label: O, required: h }),
    /* @__PURE__ */ u("div", { className: `relative ${r}`, ref: P, children: [
      /* @__PURE__ */ e(
        "select",
        {
          name: "hidden_select_for_validation",
          value: D || "",
          required: h,
          multiple: i,
          className: "absolute opacity-0 right-1/2 top-[80%] -translate-x-1/2 -translate-y-1/2 pointer-events-none h-[10px]",
          children: /* @__PURE__ */ e("option", { hidden: !0, value: D, children: D })
        }
      ),
      /* @__PURE__ */ u(
        "button",
        {
          type: "button",
          onClick: () => !g && N(!m),
          disabled: g,
          className: `w-full h-10 px-3 border border-gray-300 dark:border-gray-600 rounded-md text-left text-sm flex items-center justify-between 
          ${D ? "dark:text-white" : "text-gray-500 dark:text-gray-400"} 
          ${g ? "opacity-50 cursor-not-allowed" : "dark:bg-gray-700"}`,
          children: [
            /* @__PURE__ */ e("span", { className: "truncate", children: D || c }),
            /* @__PURE__ */ e(
              Ee,
              {
                className: `w-4 h-4 transition-transform ${m ? "rotate-180" : ""}`
              }
            )
          ]
        }
      ),
      m && /* @__PURE__ */ u(
        "div",
        {
          className: `absolute z-50 w-full border rounded-md bg-white dark:bg-gray-700 shadow-lg 
            ${k ? "bottom-full mb-1" : "top-full mt-1"}`,
          children: [
            M && /* @__PURE__ */ e("div", { className: "p-2 border-b border-gray-200 dark:border-gray-600", children: /* @__PURE__ */ u("div", { className: "relative", children: [
              /* @__PURE__ */ e(Te, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }),
              /* @__PURE__ */ e(
                "input",
                {
                  ref: F,
                  type: "text",
                  value: A,
                  onChange: (w) => I(w.target.value),
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
                  maxHeight: x || ""
                },
                children: B.length > 0 ? B.map((w) => /* @__PURE__ */ u(
                  "button",
                  {
                    type: "button",
                    onClick: () => J(String(w.value)),
                    className: `w-full px-3 py-2 text-left text-sm flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 
                    ${K(w.value) ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300" : ""}`,
                    children: [
                      /* @__PURE__ */ e("span", { children: w.label }),
                      i && K(w.value) && /* @__PURE__ */ e(Ze, { className: "w-4 h-4" })
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
  ] }, v);
}, sa = ({
  value: b = !0,
  onChange: o,
  text: l,
  options: s = [],
  label: c,
  required: r,
  name: g = "",
  disabled: M = !1,
  parentClass: O = ""
}) => {
  const h = s.length > 0 ? s : [
    { label: "Active", value: !0 },
    { label: "Inactive", value: !1 }
  ];
  return /* @__PURE__ */ e(j, { children: /* @__PURE__ */ u("div", { className: O || "col-span-12", children: [
    /* @__PURE__ */ e(W, { label: c, required: r }),
    /* @__PURE__ */ u("div", { className: "flex items-center justify-between h-10 gap-4 bg-gray-100 dark:bg-gray-700 px-3 rounded-md border border-gray-100 dark:border-gray-600", children: [
      l && /* @__PURE__ */ e("p", { className: "text-xs text-gray-600 dark:text-gray-400 flex-shrink overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px]", children: l }),
      /* @__PURE__ */ e("div", { className: "flex items-center gap-6", children: h.map((v, d) => /* @__PURE__ */ u(
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
                value: v.value,
                disabled: M,
                checked: b === v.value,
                onChange: () => o(v.value),
                className: "w-4 h-4  border-gray-300 cursor-pointer"
              }
            ),
            /* @__PURE__ */ e("span", { className: "text-sm text-gray-700 dark:text-white", children: v.label })
          ]
        },
        d
      )) })
    ] })
  ] }, g) });
}, Ne = [
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
function da({
  label: b = "",
  value: o = "",
  name: l = "",
  parentClass: s = "",
  onChange: c,
  disabled: r = !1,
  required: g = !1,
  placeholder: M = "Phone number",
  search: O = !1,
  countriesList: h = !1,
  defaultCountry: v = ""
}) {
  const d = (L) => Ne.find((E) => E.code == L), [i, x] = R(
    d(v) || Ne[0]
  ), [y, p] = R(""), [m, N] = R(!1), [A, I] = R(""), k = X();
  _(() => {
    if (typeof o == "string" && o.startsWith("+")) {
      const L = Ne.filter((E) => o.startsWith("+" + E.phone)).sort((E, G) => G.phone.length - E.phone.length)[0];
      if (L) {
        x(L), p(o.replace("+" + L.phone, ""));
        return;
      }
    }
    p(o);
  }, [o]);
  const C = (L) => {
    const E = L.target.value.replace(/\D/g, "");
    p(E), i && c && c("+" + i.phone + E);
  }, P = (L) => {
    x(L), c && c("+" + L.phone + y), N(!1), I("");
  };
  _(() => {
    const L = (E) => {
      k.current && !k.current.contains(E.target) && N(!1);
    };
    return document.addEventListener("mousedown", L), () => document.removeEventListener("mousedown", L);
  }, []);
  const F = Ne.filter(
    (L) => L.label.toLowerCase().includes(A.toLowerCase()) || L.phone.includes(A)
  );
  return h ? /* @__PURE__ */ e(j, { children: /* @__PURE__ */ u("div", { className: s || "col-span-12", children: [
    /* @__PURE__ */ e(W, { label: b, required: g }),
    /* @__PURE__ */ u("div", { className: "relative ", ref: k, children: [
      /* @__PURE__ */ u(
        "div",
        {
          className: `h-[40px] flex items-center border rounded-md px-2 bg-white dark:bg-gray-700 transition-all
  ${m ? "ring-0.5 ring-blue-100 border-blue-300" : "border-gray-300 dark:border-gray-600"}
  ${r ? "opacity-60 cursor-not-allowed" : ""}`,
          children: [
            /* @__PURE__ */ u(
              "button",
              {
                type: "button",
                disabled: r,
                onClick: () => N(!m),
                className: "flex items-center gap-1 pr-2 border-r border-gray-300 dark:border-gray-700 focus:outline-none",
                children: [
                  i ? /* @__PURE__ */ e(
                    "img",
                    {
                      src: `https://flagcdn.com/w20/${i.code.toLowerCase()}.png`,
                      alt: i.code,
                      className: "w-5 h-3 object-cover"
                    }
                  ) : /* @__PURE__ */ e("span", { className: "text-gray-400 text-xs", children: "🌐" }),
                  /* @__PURE__ */ e(Ee, { className: "w-3 h-3 text-gray-500" })
                ]
              }
            ),
            i && /* @__PURE__ */ u("span", { className: "ml-2 text-sm text-gray-700 dark:text-gray-200 whitespace-nowrap", children: [
              "+",
              i.phone
            ] }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "tel",
                value: y,
                onChange: C,
                required: g,
                disabled: r || !i,
                placeholder: i ? M : "Select a country",
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
                value: i && y ? "+" + i.phone + y : "",
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
      m && /* @__PURE__ */ u("div", { className: "absolute top-full left-0 w-full mt-1 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 shadow-lg z-50 max-h-60 overflow-y-auto", children: [
        O && /* @__PURE__ */ e("div", { className: "p-2 border-b border-gray-200 dark:border-gray-700", children: /* @__PURE__ */ u("div", { className: "relative", children: [
          /* @__PURE__ */ e(Te, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" }),
          /* @__PURE__ */ e(
            "input",
            {
              type: "text",
              value: A,
              onChange: (L) => I(L.target.value),
              placeholder: "Search country...",
              className: "w-full pl-9 pr-3 py-2 text-sm border rounded-md bg-white dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none "
            }
          )
        ] }) }),
        F.map((L) => /* @__PURE__ */ u(
          "button",
          {
            type: "button",
            onClick: () => P(L),
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
              /* @__PURE__ */ u("span", { children: [
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
  ] }, l) }) : /* @__PURE__ */ e(j, { children: /* @__PURE__ */ u("div", { className: s || "col-span-12", children: [
    /* @__PURE__ */ e(W, { label: b, required: g }),
    /* @__PURE__ */ e(
      "input",
      {
        type: "text",
        value: o,
        onChange: (E) => {
          const G = E.target.value.replace(/[^+\d]/g, ""), H = G.startsWith("+") ? "+" + G.replace(/[+]/g, "").slice(0) : G;
          c(H);
        },
        placeholder: M,
        disabled: r,
        required: g,
        className: `w-full h-10 px-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md \r
        bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none \r
        focus:ring-1 focus:ring-blue-300 dark:focus:ring-blue-200`,
        inputMode: "tel",
        pattern: "^\\+\\d{1,15}$"
      }
    )
  ] }, l) });
}
const Ge = Fe.forwardRef(
  ({ className: b = "", label: o, required: l, ...s }, c) => {
    const r = `
      placeholder-gray-400 dark:placeholder-gray-400
      ${b}
    `.trim();
    return /* @__PURE__ */ e(j, { children: /* @__PURE__ */ u("div", { className: s.parentClass || "col-span-12", children: [
      /* @__PURE__ */ e(W, { label: o, required: l }),
      /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ e(
        "textarea",
        {
          className: r,
          ref: c,
          required: l,
          ...s
        }
      ) })
    ] }, s.name) });
  }
);
Ge.displayName = "TextArea";
const ca = ({
  label: b = "",
  value: o = null,
  onChange: l,
  required: s = !1,
  accept: c = "image/*",
  id: r,
  dragDrop: g = !1,
  name: M = "",
  parentClass: O = ""
}) => {
  const [h, v] = R(o), [d, i] = R(!1), x = X(null);
  _(() => (o instanceof File ? v({ file: o, preview: URL.createObjectURL(o) }) : (o != null && o.preview, v(o)), () => {
    h != null && h.preview && h.preview.startsWith("blob:") && URL.revokeObjectURL(h.preview);
  }), [o]);
  const y = (k) => {
    if (!k || k.length === 0)
      return;
    const C = k[0], P = URL.createObjectURL(C), F = { file: C, preview: P };
    h != null && h.preview && h.preview.startsWith("blob:") && URL.revokeObjectURL(h.preview), v(F), l == null || l(C);
  }, p = (k) => {
    k && k.stopPropagation(), h != null && h.preview && h.preview.startsWith("blob:") && URL.revokeObjectURL(h.preview), v(null), l == null || l(null), x.current && (x.current.value = "");
  }, m = (k) => {
    g && (k.preventDefault(), i(!0));
  }, N = (k) => {
    g && (k.preventDefault(), i(!1));
  }, A = (k) => {
    g && (k.preventDefault(), i(!1), y(k.dataTransfer.files));
  }, I = () => {
    x.current.click();
  };
  return /* @__PURE__ */ e(j, { children: /* @__PURE__ */ u("div", { className: O || "col-span-12", children: [
    /* @__PURE__ */ e(W, { label: b, required: s }),
    /* @__PURE__ */ u(
      "div",
      {
        className: `relative rounded-md p-2 transition-all ${d ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"}`,
        onDragOver: m,
        onDragLeave: N,
        onDrop: A,
        children: [
          /* @__PURE__ */ e(
            "input",
            {
              ref: x,
              id: r,
              type: "file",
              accept: c,
              onChange: (k) => y(k.target.files),
              required: s && !h,
              className: "absolute opacity-0 right-[50%] top-[80%] -translate-y-1/2 pointer-events-none h-[10px]"
            }
          ),
          /* @__PURE__ */ u(
            "div",
            {
              className: `flex items-center space-x-4 transition-all ${d ? "opacity-50" : ""}`,
              children: [
                h ? (
                  // Image preview with close button
                  /* @__PURE__ */ u("div", { className: "relative group", children: [
                    /* @__PURE__ */ e(
                      "img",
                      {
                        src: h.preview || h,
                        alt: "preview",
                        className: "object-cover w-20 h-20 rounded-full shadow-md"
                      }
                    ),
                    !s && /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        onClick: p,
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
                /* @__PURE__ */ u("div", { className: "flex flex-col items-center space-y-1", children: [
                  /* @__PURE__ */ e(
                    Z,
                    {
                      type: "button",
                      onClick: I,
                      variant: "outlined",
                      color: "default",
                      children: h ? "Change Image" : "Select Image"
                    }
                  ),
                  g && !h && /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop" })
                ] })
              ]
            }
          ),
          g && d && /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-md", children: /* @__PURE__ */ e("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg", children: "Drop image here" }) })
        ]
      }
    )
  ] }, M) });
}, Ke = Fe.forwardRef(
  ({
    label: b,
    required: o,
    parentClass: l = "",
    className: s = "",
    type: c = "text",
    onKeyDown: r,
    negativeNumberAllow: g = !0,
    defaultValue: M = "",
    field: O = {},
    ...h
  }, v) => {
    const [d, i] = R(!1), x = (p) => {
      if (c === "number") {
        if (["e", "E", "+"].includes(p.key)) {
          p.preventDefault();
          return;
        }
        if (g == !1 && p.key === "-") {
          p.preventDefault();
          return;
        }
        if (["ArrowUp", "ArrowDown"].includes(p.key)) {
          p.preventDefault();
          return;
        }
      }
      r == null || r(p);
    }, y = `
      h-10 placeholder-gray-400 dark:placeholder-gray-400
      ${c === "password" ? "pr-10" : ""}
      ${c === "number" ? "no-spinner" : ""}
      ${s}
    `.trim();
    return _(() => {
      if (M) {
        let p = h.value || M;
        setTimeout(() => {
          var m;
          (m = h.onChange) == null || m.call(h, { target: { value: p } });
        }, 100);
      }
    }, [M]), /* @__PURE__ */ e(j, { children: /* @__PURE__ */ u("div", { className: l || "col-span-12", children: [
      /* @__PURE__ */ e(
        W,
        {
          label: b,
          required: o,
          infoText: O.infoText
        }
      ),
      /* @__PURE__ */ u("div", { className: "relative", children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: c === "password" && d ? "text" : c,
            ref: v,
            required: o,
            onKeyDown: x,
            className: y,
            ...h
          }
        ),
        c === "password" && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            tabIndex: -1,
            onClick: () => i((p) => !p),
            className: "absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200",
            children: /* @__PURE__ */ e(
              re,
              {
                icon: d ? "mdi:eye-outline" : "mdi:eye-off-outline",
                className: "w-5 h-5"
              }
            )
          }
        )
      ] })
    ] }, h.name) });
  }
);
Ke.displayName = "Input";
const ha = ({
  key: b,
  editorKey: o = "",
  value: l = "",
  onChange: s,
  label: c = "",
  required: r = !1,
  placeholder: g = "",
  parentClass: M = "col-span-12",
  height: O = 400,
  inline: h = !1,
  disabled: v = !1,
  plugins: d,
  toolbar: i,
  menubar: x = !1,
  fontFamily: y = "Inter, sans-serif",
  initConfig: p = {},
  imageUploadHandler: m
  // ✅ Promise function passed from parent
}) => /* @__PURE__ */ u("div", { className: M, children: [
  c && /* @__PURE__ */ e(W, { label: c, required: r }),
  /* @__PURE__ */ e(
    na,
    {
      apiKey: o,
      value: l,
      disabled: v,
      init: {
        height: O,
        inline: h,
        menubar: x,
        branding: !1,
        statusbar: !0,
        automatic_uploads: !0,
        images_upload_handler: (k) => new Promise((C, P) => {
          if (!m) {
            C(`data:${k.blob().type};base64,${k.base64()}`);
            return;
          }
          m(k).then((F) => {
            F ? C(F) : P("Upload failed: No URL returned");
          }).catch((F) => {
            P(
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
        toolbar: i ?? "undo redo | blocks | bold italic underline forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media table | removeformat | code fullscreen preview",
        placeholder: g,
        content_style: `
            body {
                font-family: ${y};
            }
            `,
        ...p
      },
      onEditorChange: (k) => {
        s && s(k);
      }
    }
  )
] }, b), ua = ({
  name: b = "",
  label: o = "",
  // label for single checkbox
  options: l = [],
  // array of { label, value } for multiple
  value: s = null,
  // boolean for single, array for multiple, or string for single select
  onChange: c,
  disabled: r = !1,
  required: g = !1,
  parentClass: M = "col-span-12",
  className: O = "",
  multiSelect: h = !1
  // ✅ if true, only one option can be selected (like radio)
}) => {
  const v = Array.isArray(l) && l.length > 0, d = (y) => v ? h ? Array.isArray(s) && s.includes(y) : s === y : !!s, i = (y) => {
    c == null || c(y.target.checked, b);
  }, x = (y, p) => {
    if (c)
      if (!h)
        c(p ? y : "", b);
      else {
        const m = Array.isArray(s) ? [...s] : [];
        if (p)
          m.includes(y) || m.push(y);
        else {
          const N = m.indexOf(y);
          N > -1 && m.splice(N, 1);
        }
        c(m, b);
      }
  };
  return v ? /* @__PURE__ */ e(j, { children: /* @__PURE__ */ u("div", { className: `${M}`, children: [
    /* @__PURE__ */ e(W, { label: o, required: g }),
    /* @__PURE__ */ e("div", { className: "flex flex-col space-y-2", children: l.map((y, p) => /* @__PURE__ */ u("div", { className: "flex items-center", children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          name: b,
          value: y.value,
          checked: d(y.value),
          disabled: r || y.disabled,
          required: g && p === 0,
          onChange: (m) => x(y.value, m.target.checked),
          className: `h-4 w-4 cursor-pointer text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${O}`
        },
        b
      ),
      y.label && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: b,
          className: "ml-2 text-sm text-gray-700 dark:text-gray-200 select-none",
          children: y.label
        }
      )
    ] }, y.value || y.label)) })
  ] }) }) : /* @__PURE__ */ u("div", { className: `flex items-center ${M}`, children: [
    /* @__PURE__ */ e(
      "input",
      {
        type: "checkbox",
        name: b,
        checked: d(),
        disabled: r,
        required: g,
        onChange: i,
        className: `h-4 w-4 text-blue-600 cursor-pointer border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${O}`
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
}, ba = ({
  label: b = "",
  value: o = null,
  onChange: l,
  required: s = !1,
  accept: c = "audio/*",
  id: r,
  dragDrop: g = !1,
  name: M = "",
  parentClass: O = ""
}) => {
  const [h, v] = R(null), [d, i] = R(!1), x = X(null);
  _(() => {
    if (!o) {
      y(), v(null);
      return;
    }
    if (o instanceof File) {
      const C = URL.createObjectURL(o);
      return v({ file: o, preview: C }), () => {
        URL.revokeObjectURL(C);
      };
    } else typeof o == "string" ? v({ preview: o }) : o != null && o.preview && v(o);
  }, [o]);
  const y = () => {
    h != null && h.preview && h.preview.startsWith("blob:") && URL.revokeObjectURL(h.preview);
  }, p = (C) => {
    if (!C || C.length === 0)
      return;
    const P = C[0], F = URL.createObjectURL(P);
    y(), v({ file: P, preview: F }), l == null || l(P);
  }, m = (C) => {
    C && C.stopPropagation(), y(), v(null), l == null || l(null), x.current && (x.current.value = "");
  }, N = (C) => {
    g && (C.preventDefault(), i(!0));
  }, A = (C) => {
    g && (C.preventDefault(), i(!1));
  }, I = (C) => {
    g && (C.preventDefault(), i(!1), p(C.dataTransfer.files));
  }, k = () => {
    x.current.click();
  };
  return /* @__PURE__ */ u("div", { className: O || "col-span-12", children: [
    /* @__PURE__ */ e(W, { label: b, required: s }),
    /* @__PURE__ */ u(
      "div",
      {
        className: `relative rounded-lg p-2 transition-all ${d ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"}`,
        onDragOver: N,
        onDragLeave: A,
        onDrop: I,
        children: [
          /* @__PURE__ */ e(
            "input",
            {
              ref: x,
              id: r,
              type: "file",
              accept: c,
              onChange: (C) => p(C.target.files),
              required: s && !h,
              className: "absolute opacity-0 right-[50%] top-[80%] -translate-y-1/2 pointer-events-none h-[10px]"
            }
          ),
          /* @__PURE__ */ e(
            "div",
            {
              className: `flex items-center space-x-4 transition-all ${d ? "opacity-50" : ""}`,
              children: h ? (
                // Audio player with close button and change button
                /* @__PURE__ */ u("div", { className: "flex items-center space-x-4", children: [
                  /* @__PURE__ */ u("div", { className: "relative w-full", children: [
                    !s && /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        onClick: m,
                        className: "absolute top-0 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800",
                        "aria-label": "Remove audio",
                        children: /* @__PURE__ */ e(re, { icon: "mdi:close", className: "w-3 h-3" })
                      }
                    ),
                    /* @__PURE__ */ e(
                      "audio",
                      {
                        src: h.preview,
                        controls: !0,
                        controlsList: "nodownload"
                      },
                      h.preview
                    )
                  ] }),
                  /* @__PURE__ */ e(Z, { type: "button", onClick: k, children: /* @__PURE__ */ e("span", { children: "Change Audio File" }) })
                ] })
              ) : (
                // Empty state with upload button
                /* @__PURE__ */ u("div", { className: "flex items-center justify-center space-x-4", children: [
                  /* @__PURE__ */ e("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ e(re, { icon: "mdi:music", className: "text-gray-400 w-10 h-10" }) }),
                  /* @__PURE__ */ e(
                    Z,
                    {
                      type: "button",
                      onClick: k,
                      variant: "outlined",
                      children: /* @__PURE__ */ e("span", { children: "Choose Audio File" })
                    }
                  ),
                  g && /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop your audio file here" })
                ] })
              )
            }
          ),
          g && d && !h && /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-lg", children: /* @__PURE__ */ e("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg", children: "Drop audio here" }) })
        ]
      }
    )
  ] }, M);
}, _e = ({ field: b, formData: o, handleChange: l }) => {
  const {
    key: s,
    label: c,
    type: r,
    options: g,
    placeholder: M,
    rows: O,
    inputClass: h,
    search: v,
    accept: d,
    text: i,
    required: x = !1,
    minLength: y,
    dragDrop: p,
    parentClass: m,
    countriesList: N,
    defaultCountry: A,
    multiple: I,
    dropdownMaxHeight: k,
    editorKey: C,
    fontFamily: P,
    disabled: F,
    negativeNumberAllow: L,
    defaultValue: E,
    renderCondition: G,
    optionDependencyKey: H,
    pattern: V
  } = b;
  let B = o == null ? void 0 : o[s];
  B == null && (B = "");
  const K = M || (r === "select" ? `Select ${c}` : `Enter ${c}`), J = "w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm focus:outline-none focus:ring-1 focus:ring-blue-200 bg-white text-black dark:bg-gray-700 dark:text-white";
  if (G && typeof G == "function" && !G(o))
    return null;
  switch (r) {
    case "select":
      return /* @__PURE__ */ e(
        ia,
        {
          options: g || [],
          value: B,
          formData: o,
          dependencyKey: H,
          onChange: (D) => l(s, D),
          placeholder: K,
          className: h || "",
          search: v,
          required: x,
          defaultValue: E,
          label: c,
          name: s,
          disabled: F,
          parentClass: m,
          multiple: I,
          dropdownMaxHeight: k
        }
      );
    case "checkbox":
      return /* @__PURE__ */ e(
        ua,
        {
          name: s,
          label: c,
          options: g || [],
          value: B,
          onChange: (D) => l(s, D),
          required: x,
          parentClass: m,
          className: h || "",
          multiSelect: I,
          disabled: F
        }
      );
    case "switch":
      return /* @__PURE__ */ e(
        sa,
        {
          value: B,
          onChange: (D) => l(s, D),
          text: i,
          options: g || [],
          label: c,
          required: x,
          name: s,
          disabled: F,
          parentClass: m
        }
      );
    case "phone":
      return /* @__PURE__ */ e(
        da,
        {
          value: B,
          onChange: (D) => l(s, D),
          countriesList: N,
          defaultCountry: A,
          required: x,
          placeholder: K,
          search: v,
          label: c,
          name: s,
          disabled: F,
          parentClass: m
        }
      );
    case "textarea":
      return /* @__PURE__ */ e(
        Ge,
        {
          value: B,
          onChange: (D) => l(s, D.target.value),
          placeholder: K,
          rows: O || 3,
          className: `${J} ${h || ""}`,
          required: x,
          name: s,
          label: c,
          disabled: F,
          parentClass: m
        }
      );
    case "image":
      return /* @__PURE__ */ e(
        ca,
        {
          value: B,
          onChange: (D) => l(s, D),
          required: x,
          accept: d || "image/*",
          id: `file-${s}`,
          dragDrop: p,
          label: c,
          name: s,
          parentClass: m
        }
      );
    case "audio":
      return /* @__PURE__ */ e(
        ba,
        {
          value: B,
          onChange: (D) => l(s, D),
          required: x,
          accept: d || "audio/*",
          id: `file-${s}`,
          dragDrop: p,
          label: c,
          name: s,
          parentClass: m
        }
      );
    case "tinyEditor":
      return /* @__PURE__ */ e(
        ha,
        {
          value: B,
          onChange: (D) => l(s, D),
          required: x,
          placeholder: K,
          label: c,
          parentClass: m,
          fontFamily: P,
          editorKey: C,
          disabled: F
        },
        `editor-${s}`
      );
    default:
      return /* @__PURE__ */ e(
        Ke,
        {
          field: b,
          type: r || "text",
          defaultValue: E,
          value: B,
          onChange: (D) => l(s, D.target.value),
          placeholder: K,
          className: `${J} ${h || ""}`,
          required: x,
          name: s,
          minLength: y,
          label: c,
          negativeNumberAllow: L,
          parentClass: m,
          disabled: F,
          pattern: V
        }
      );
  }
}, pa = ({ isOpen: b, onClose: o, config: l, onApply: s }) => {
  var h;
  const [c, r] = R({}), g = (v, d) => {
    r((i) => ({ ...i, [v]: d }));
  }, M = () => {
    s == null || s(c), o();
  }, O = () => {
    r({}), s == null || s({}), o();
  };
  return /* @__PURE__ */ u(j, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: `fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${b ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
        onClick: o
      }
    ),
    /* @__PURE__ */ u(
      "div",
      {
        className: `fixed top-0 right-0 h-full w-[28rem] bg-white dark:bg-gray-900 shadow-2xl z-50 flex flex-col border-l border-gray-200 dark:border-gray-700
          transform transition-transform duration-300 ease-in-out
          ${b ? "translate-x-0" : "translate-x-full"}
        `,
        children: [
          /* @__PURE__ */ u("div", { className: "flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700", children: [
            /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: "Filters" }),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: o,
                className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition",
                children: /* @__PURE__ */ e(Me, { className: "w-5 h-5 text-gray-500 dark:text-gray-400" })
              }
            )
          ] }),
          b && /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 py-3", children: l != null && l.component ? /* @__PURE__ */ e(
            l.component,
            {
              filters: c,
              onFilterChange: g
            }
          ) : /* @__PURE__ */ e("div", { className: "space-y-4", children: (h = l == null ? void 0 : l.fields) == null ? void 0 : h.map((v) => /* @__PURE__ */ e(j, { children: /* @__PURE__ */ e(
            _e,
            {
              field: v,
              formData: c,
              handleChange: g
            },
            v.key
          ) })) }) }),
          /* @__PURE__ */ u("div", { className: "flex gap-2 px-4 py-3 border-t border-gray-200 dark:border-gray-700", children: [
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
}, Be = {
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
}, Ue = {
  contained: "bg",
  outline: "border !bg-transparent",
  soft: "bg opacity-90"
}, ze = ({
  label: b,
  variant: o = "contained",
  // contained | outline | soft
  color: l = "green",
  className: s = ""
}) => {
  const c = Be[l] || Be.green, r = Ue[o] || Ue.contained, g = o === "outline" ? c.border : c.bg;
  return /* @__PURE__ */ e(
    "span",
    {
      className: `inline-flex justify-center items-center rounded-sm text-xs font-semibold px-3 py-1 min-w-[78px]
        ${g}
        ${r}
        ${s}`,
      children: b
    }
  );
}, ga = ({ rows: b = 5, columns: o = 5 }) => /* @__PURE__ */ u(j, { children: [
  /* @__PURE__ */ e("div", { className: "w-full mb-6 inline-flex justify-end items-center", children: /* @__PURE__ */ e("div", { className: "h-8 w-80 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }),
  /* @__PURE__ */ e("div", { className: "overflow-hidden rounded-md border border-gray-200 dark:border-gray-800", children: /* @__PURE__ */ u("table", { className: "w-full border-collapse", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { className: "bg-gray-50 dark:bg-gray-900", children: Array.from({ length: o }).map((l, s) => /* @__PURE__ */ e("th", { className: "px-4 py-3", children: /* @__PURE__ */ e("div", { className: "h-6 w-24 bg-gray-300 dark:bg-gray-700 rounded animate-pulse  inline-flex justify-center items-center" }) }, s)) }) }),
    /* @__PURE__ */ e("tbody", { children: Array.from({ length: b }).map((l, s) => /* @__PURE__ */ e(
      "tr",
      {
        className: "border-t border-gray-200 dark:border-gray-800",
        children: Array.from({ length: o }).map((c, r) => /* @__PURE__ */ e("td", { className: "px-4 py-6", children: /* @__PURE__ */ e("div", { className: "h-6 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }, r))
      },
      s
    )) })
  ] }) })
] }), He = ({ src: b, alt: o = "preview", isOpen: l, setIsOpen: s }) => {
  const c = () => s(!1);
  return _(() => {
    const r = (g) => {
      g.key === "Escape" && c();
    };
    return l && (document.body.style.overflow = "hidden", document.addEventListener("keydown", r)), () => {
      document.body.style.overflow = "", document.removeEventListener("keydown", r);
    };
  }, [l]), /* @__PURE__ */ e(j, { children: /* @__PURE__ */ u(
    "div",
    {
      className: `fixed inset-0 z-50 flex items-center justify-center bg-black/70 dark:bg-black/80 \r
                   backdrop-blur-sm animate-in fade-in duration-200`,
      onClick: c,
      children: [
        /* @__PURE__ */ e(
          "button",
          {
            onClick: c,
            className: `absolute top-4 right-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200\r
                     hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-2 shadow-lg transition`,
            children: /* @__PURE__ */ e(Me, { size: 20 })
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
}, ma = ({
  config: b,
  setShowAdd: o,
  title: l,
  buttonText: s,
  description: c,
  showAddButton: r
}) => {
  const {
    data: g = [],
    table_head: M = [],
    loading: O = !1,
    search: h = {
      enabled: !1,
      placeholder: "Search...",
      useServerSideSearch: !1
    },
    filter: v = {
      enabled: !1,
      useServerSideFilters: !1
    },
    pagination: d = {
      enabled: !1,
      rows_per_page: 10,
      useServerSidePagination: !1
    },
    emptyMessage: i = "No data available",
    onMenuAction: x,
    setServerSidePaginationData: y = () => {
    },
    onFilterApply: p,
    filterConfig: m = null,
    rowClick: N = null
  } = b, [A, I] = R(""), [k, C] = R(null), [P, F] = R([]), [L, E] = R({}), [G, H] = R(!1), [V, B] = R({}), [K, J] = R(null), [D, ee] = R(!1), w = Ae(() => !h.enabled || !A.trim() || h.useServerSideSearch ? g : oa(g, A, h.searchKeys || []), [g, A, h]), [T, Y] = R(1), [z, q] = R((d == null ? void 0 : d.rows_per_page) || 50), [ce, Ce] = R(w.length || 0), ne = d != null && d.useServerSidePagination ? d.total_pages : Math.ceil(w.length / z), le = Ae(() => {
    if (d.useServerSidePagination) return w;
    const a = (T - 1) * z;
    return w.slice(a, a + z);
  }, [w, T, z]), ae = X(null), oe = X({}), te = X(null), he = (a) => {
    I(a), Y(1), h.useServerSideSearch && (te.current && clearTimeout(te.current), te.current = setTimeout(async () => {
      try {
        await y((n) => ({
          ...n,
          search: a,
          current_page: 1
        }));
      } catch (n) {
        console.error("Search error:", n);
      }
    }, 800));
  }, ue = (a, n, f) => {
    f.stopPropagation(), C(null), x == null || x(a.type, n);
  }, be = (a, n, f) => {
    n.stopPropagation(), F(f);
    const S = n.currentTarget;
    oe.current[a] = S;
    const U = S.getBoundingClientRect(), $ = 192, Q = f.length * 40, ke = window.innerWidth, Pe = window.innerHeight, Ve = ke - U.right < $ ? U.left - $ + U.width : U.left, We = Pe - U.bottom < Q && U.top > Q ? U.top - Q - 2 : U.bottom + 2;
    E({
      top: Math.max(8, Math.min(We, Pe - Q - 8)),
      left: Math.max(8, Math.min(Ve, ke - $ - 8))
    }), C(k === a ? null : a);
  }, pe = (a) => (T - 1) * z + a + 1, ge = (a) => {
    a && a.src instanceof File && (a = { ...a, src: URL.createObjectURL(a.src) }), J(a), ee(!0);
  }, ie = (a, n, f, S = null, U = null) => /* @__PURE__ */ e(j, { children: a ? /* @__PURE__ */ e(
    "img",
    {
      src: a instanceof File ? URL.createObjectURL(a) : a,
      alt: n || "Avatar",
      onClick: ($) => {
        $.stopPropagation(), $.preventDefault(), ge({ src: a, alt: n });
      },
      className: `w-10 h-10 cursor-pointer shrink-0 rounded-full object-cover border border-gray-200 dark:border-gray-700 ${f || ""}`
    }
  ) : /* @__PURE__ */ e(j, { children: S ? typeof S == "function" ? S(U) : S : /* @__PURE__ */ e(
    "div",
    {
      className: `w-10 h-10 flex items-center shrink-0 justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${f || ""}`,
      children: /* @__PURE__ */ e(De, { className: "w-6 h-6 text-gray-400 dark:text-gray-400" })
    }
  ) }) }), me = (a, n) => /* @__PURE__ */ e(j, { children: a ? /* @__PURE__ */ e(
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
      children: /* @__PURE__ */ e(ta, { className: "w-6 h-6 text-gray-400 dark:text-gray-400" })
    }
  ) }) }), fe = (a, n) => /* @__PURE__ */ u("div", { className: `flex items-center space-x-4 ${n.className || ""}`, children: [
    n.imageKey ? ie(
      a[n.imageKey],
      a[n.titleKey],
      "group-avatar",
      n.fallback_icon,
      a
    ) : "",
    /* @__PURE__ */ u("div", { children: [
      /* @__PURE__ */ e("p", { className: "font-medium text-gray-900 dark:text-white group-title", children: a[n.titleKey] || "" }),
      /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400 group-sub-title", children: a[n.subtitleKey] || "" })
    ] })
  ] }), ye = (a, n) => {
    var $;
    let f = String(a);
    const S = n.variant || "contained";
    let U = n.defaultColor;
    if ((($ = n == null ? void 0 : n.chipOptions) == null ? void 0 : $.length) > 0) {
      let Q = n == null ? void 0 : n.chipOptions.find((ke) => ke.value == a);
      Q && (f = Q.label, U = Q.color);
    }
    return /* @__PURE__ */ e(
      ze,
      {
        label: f,
        variant: S,
        color: U,
        className: n.className || ""
      }
    );
  }, xe = (a, n, f) => {
    const S = n[a.key];
    return a.type === "menu_actions" ? /* @__PURE__ */ e("div", { className: `text-center ${a.className || ""}`, children: /* @__PURE__ */ e(
      "button",
      {
        ref: (U) => oe.current[n.id || n._id] = U,
        onClick: (U) => be(n.id || n._id, U, a.menuList),
        className: "p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition text-gray-700 dark:text-gray-300",
        children: /* @__PURE__ */ e(aa, { className: "h-4 w-4" })
      }
    ) }) : a.type === "index" ? /* @__PURE__ */ e("span", { className: a.className || "", children: pe(f) }) : a.type === "group" ? fe(n, a) : a.type === "chip" ? /* @__PURE__ */ e(j, { children: ye(S, a) }) : a.type === "date" ? /* @__PURE__ */ e("span", { className: a.className || "", children: $e(S, a.format || "DD MMM YYYY") }) : a.type === "avatar" ? /* @__PURE__ */ e(j, { children: /* @__PURE__ */ e("div", { className: "min-w-[40px]", children: ie(
      S,
      a.alt,
      a.className,
      a.fallback_icon,
      n
    ) }) }) : a.type === "audio" ? /* @__PURE__ */ e(j, { children: me(S, a.className) }) : /* @__PURE__ */ e("span", { className: a.className || "", children: S || "N/A" });
  }, ve = (a) => {
    if (typeof N == "function")
      return N(a);
    if (N)
      return x == null ? void 0 : x("view", a);
  }, we = (a, n) => {
    if (a.onClickDetails)
      return x == null ? void 0 : x("view", n);
    if (typeof a.handleClick == "function")
      return a.handleClick(n);
  }, se = () => N || typeof N == "function", de = (a) => a.onClickDetails || typeof a.handleClick == "function";
  return _(() => {
    const a = () => {
      k && C(null);
    };
    return window.addEventListener("scroll", a, !0), () => {
      window.removeEventListener("scroll", a, !0);
    };
  }, [k]), _(() => {
    const a = (n) => {
      ae.current && !ae.current.contains(n.target) && C(null);
    };
    return document.addEventListener("click", a), () => document.removeEventListener("click", a);
  }, []), _(() => {
    d != null && d.rows_per_page && (d != null && d.useServerSidePagination) && q((d == null ? void 0 : d.rows_per_page) || 50), d.current_page && Y(d.current_page);
  }, [
    d.rows_per_page,
    d == null ? void 0 : d.useServerSidePagination,
    d.current_page
  ]), _(() => {
    Ce(
      d != null && d.useServerSidePagination ? d.total_records : w.length
    ), w.length <= z * (T - 1) && !(d != null && d.useServerSidePagination) && Y((a) => a - 1 || 1);
  }, [
    w.length,
    d.total_records,
    d == null ? void 0 : d.useServerSidePagination
  ]), /* @__PURE__ */ u(j, { children: [
    O ? /* @__PURE__ */ e(ga, { rows: 6, columns: 6 }) : /* @__PURE__ */ u(j, { children: [
      /* @__PURE__ */ u("div", { className: "flex flex-col sm:flex-row sm:justify-between gap-4 mb-3", children: [
        /* @__PURE__ */ u("div", { children: [
          /* @__PURE__ */ e("h1", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: l }),
          /* @__PURE__ */ e("p", { className: "text-md text-gray-600 dark:text-gray-400", children: c })
        ] }),
        /* @__PURE__ */ u("div", { className: "flex flex-col justify-end items-end gap-2", children: [
          r && /* @__PURE__ */ u(
            Z,
            {
              onClick: () => o(!0),
              variant: "contained",
              color: "primary",
              children: [
                /* @__PURE__ */ e(Je, { className: "w-4 h-4 mr-2" }),
                s || "Add New"
              ]
            }
          ),
          /* @__PURE__ */ u("div", { className: "flex justify-end items-center gap-2", children: [
            h.enabled && /* @__PURE__ */ e("div", { className: "", children: /* @__PURE__ */ u("div", { className: "relative min-w-[300px]", children: [
              /* @__PURE__ */ e(Te, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-300" }),
              /* @__PURE__ */ e(
                "input",
                {
                  type: "text",
                  placeholder: h.placeholder || "Search...",
                  value: A,
                  onChange: (a) => he(a.target.value),
                  className: "w-full h-[36px] pl-9 pr-4 py-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-300 dark:ring-blue-200 disabled:opacity-50"
                }
              )
            ] }) }),
            m && v.enabled && // add red dot if filter are applied
            /* @__PURE__ */ u("div", { className: "relative", children: [
              /* @__PURE__ */ u(
                Z,
                {
                  onClick: () => H(!0),
                  variant: "contained",
                  children: [
                    /* @__PURE__ */ e(Qe, { className: "w-4 h-4 mr-2" }),
                    "Filters"
                  ]
                }
              ),
              Object.keys(V).length > 0 && /* @__PURE__ */ e("span", { className: "absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ u("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-700", children: [
        /* @__PURE__ */ e("div", { className: "overflow-x-auto", children: /* @__PURE__ */ u("table", { className: "min-w-full divide-y divide-gray-200 dark:divide-gray-700", children: [
          /* @__PURE__ */ e("thead", { className: "bg-gray-50 dark:bg-gray-700/60", children: /* @__PURE__ */ e("tr", { children: M.map((a) => /* @__PURE__ */ e(
            "th",
            {
              className: `px-6 py-4 text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider min-w-max max-w-[180px] truncate ${a.headClass || ""}`,
              children: a.title
            },
            a.key
          )) }) }),
          /* @__PURE__ */ e("tbody", { className: "bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700", children: le.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e(
            "td",
            {
              colSpan: M.length,
              className: "text-center py-10 text-gray-500 dark:text-gray-400",
              children: i
            }
          ) }) : le.map((a, n) => /* @__PURE__ */ e(
            "tr",
            {
              className: `hover:bg-gray-50 dark:hover:bg-blue-800/10 transition ${se() ? "cursor-pointer" : ""}`,
              onClick: (f) => {
                se() && ve(a);
              },
              children: M.map((f) => /* @__PURE__ */ e(
                "td",
                {
                  className: `px-6 py-4 text-sm text-gray-900 dark:text-gray-100 min-w-max ${f.type == "audio" ? "" : "max-w-[300px]"} truncate ${de(f) ? "cursor-pointer" : ""}`,
                  title: String(a[f.key] ?? ""),
                  onClick: (S) => {
                    de(f) && (S.stopPropagation(), S.preventDefault(), we(f, a));
                  },
                  children: f.render ? f.render(a, n) : xe(f, a, n)
                },
                f.key
              ))
            },
            a.id || a._id || n
          )) })
        ] }) }),
        (d == null ? void 0 : d.enabled) && w.length > 0 && /* @__PURE__ */ u("div", { className: " bg-gray-50 dark:bg-gray-700/60 px-6 py-3 flex flex-wrap items-center justify-between border-t border-gray-200 dark:border-gray-600 gap-3", children: [
          /* @__PURE__ */ u("div", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
            "Showing ",
            (T - 1) * z + 1,
            " to",
            " ",
            Math.min(T * z, ce),
            " of",
            " ",
            ce,
            " results"
          ] }),
          /* @__PURE__ */ u("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ u("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e("span", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Rows per page:" }),
              /* @__PURE__ */ e(
                "select",
                {
                  value: z,
                  onChange: (a) => {
                    const n = Number(a.target.value);
                    q(n), Y(1), d.useServerSidePagination && y((f) => ({
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
            /* @__PURE__ */ u("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => {
                    if (T > 1) {
                      const a = T - 1;
                      Y(a), d.useServerSidePagination && y((n) => ({
                        ...n,
                        current_page: a
                      }));
                    }
                  },
                  disabled: T === 1,
                  className: "p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition text-gray-500 dark:text-gray-300 disabled:opacity-50",
                  children: /* @__PURE__ */ e(Xe, { className: "h-4 w-4" })
                }
              ),
              /* @__PURE__ */ u("span", { className: "text-sm text-gray-800 dark:text-gray-200", children: [
                "Page ",
                T,
                " of ",
                ne
              ] }),
              /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => {
                    if (T < ne) {
                      const a = T + 1;
                      Y(a), d.useServerSidePagination && y((n) => ({
                        ...n,
                        current_page: a
                      }));
                    }
                  },
                  disabled: T === ne,
                  className: "p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition text-gray-500 dark:text-gray-300 disabled:opacity-50",
                  children: /* @__PURE__ */ e(ea, { className: "h-4 w-4" })
                }
              )
            ] })
          ] })
        ] })
      ] })
    ] }),
    k && ra(
      /* @__PURE__ */ e(
        "div",
        {
          ref: ae,
          style: {
            position: "fixed",
            top: `${L.top}px`,
            left: `${L.left}px`,
            zIndex: 9999
          },
          className: "w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg border border-gray-200 dark:border-gray-600",
          children: P.map((a, n) => /* @__PURE__ */ u(
            "button",
            {
              onClick: (f) => ue(
                a,
                g.find(
                  (S) => S.id === k || S._id == k
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
    m && /* @__PURE__ */ e(
      pa,
      {
        isOpen: G,
        onClose: () => H(!1),
        config: m,
        onApply: (a) => {
          B(a), p == null || p(a);
        }
      }
    ),
    D && /* @__PURE__ */ e(
      He,
      {
        src: K.src,
        alt: K.alt,
        isOpen: D,
        setIsOpen: ee
      }
    )
  ] });
}, Se = ({
  isOpen: b,
  onClose: o,
  icon: l,
  title: s,
  children: c,
  size: r = "md",
  actionButtons: g = [],
  actions: M,
  showDefaultClose: O = !0,
  footerConfig: h = null,
  hideFooter: v = !1,
  onFormSubmit: d = () => {
  },
  onCancel: i,
  loadingBtn: x = !1,
  executeFunction: y = () => {
  },
  selectedItem: p = null
}) => {
  if (!b) return null;
  const m = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-full"
  };
  return /* @__PURE__ */ u("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: "fixed inset-0 bg-gray-500 opacity-75",
        onClick: () => o()
      }
    ),
    /* @__PURE__ */ u(
      "div",
      {
        className: `relative bg-white rounded-lg shadow-xl w-full ${m[r] || m.md} max-h-[90vh] flex flex-col dark:bg-gray-800`,
        children: [
          /* @__PURE__ */ u("div", { className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0", children: [
            /* @__PURE__ */ u("div", { className: "flex items-center gap-1", children: [
              l && /* @__PURE__ */ e("span", { children: l }),
              /* @__PURE__ */ e("h3", { className: "text-lg font-medium text-gray-900 dark:text-white", children: s })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => o(),
                className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
                children: /* @__PURE__ */ e(Me, { className: "w-6 h-6" })
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto p-4", children: c }),
          g.length > 0 && /* @__PURE__ */ e("div", { className: "px-4 py-3 flex justify-end gap-3 border-t border-gray-200 dark:border-gray-700 sm:px-6", children: g.map((N) => /* @__PURE__ */ e(
            Z,
            {
              onClick: (A) => {
                N.type == "submit" ? d(A) : y(
                  () => {
                    var I;
                    return (I = N == null ? void 0 : N.onClick) == null ? void 0 : I.call(N, A, p);
                  },
                  (I) => o == null ? void 0 : o(I)
                );
              },
              disabled: x || N.disabled,
              variant: N.variant || "contained",
              color: N.color || "primary",
              className: `min-w-[100px] ${N.className}`,
              type: N.type || "button",
              children: x ? /* @__PURE__ */ u("div", { className: "flex items-center", children: [
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
}, je = ({ config: b, onSubmit: o, initialData: l = {}, type: s = "add" }) => {
  const { formClass: c = "grid grid-cols-12 gap-4", formFields: r = [] } = b || {}, [g, M] = R(l);
  _(() => {
    M(l);
  }, []);
  const O = (v, d) => {
    M((i) => ({ ...i, [v]: d }));
  }, h = (v) => {
    v.preventDefault();
    const d = v.target;
    if (!d.checkValidity()) {
      d.reportValidity();
      return;
    }
    o(g);
  };
  return /* @__PURE__ */ e(
    "form",
    {
      id: s == "add" ? "addForm" : s == "edit" ? "editForm" : "defaultForm",
      onSubmit: h,
      className: c,
      noValidate: !1,
      children: r.map((v) => /* @__PURE__ */ e(j, { children: /* @__PURE__ */ e(
        _e,
        {
          field: v,
          formData: g,
          handleChange: O
        },
        v.key
      ) }))
    }
  );
};
function fa({ data: b, config: o }) {
  const { fields: l, containerClass: s } = o, [c, r] = R(null), [g, M] = R(!1), O = (i) => {
    i && i.src instanceof File && (i = { ...i, src: URL.createObjectURL(i.src) }), r(i), M(!0);
  }, h = ({ col: i }) => {
    var I;
    let x = i == null ? void 0 : i.icon, y = i.label, p = b[i.key], m = i.type, N = i.variant || "outline", A = i.defaultColor;
    if (m === "chip" && ((I = i.chipOptions) == null ? void 0 : I.length) > 0) {
      let k = i == null ? void 0 : i.chipOptions.find((C) => C.value == p);
      k && (p = k.label, A = k.color);
    }
    return /* @__PURE__ */ u(
      "div",
      {
        className: `col-span-12 flex items-center space-x-4 p-4 rounded-xl 
                  bg-gray-100 dark:bg-gray-900 ${i.blockClass || ""}`,
        children: [
          x && /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: x }),
          /* @__PURE__ */ u("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ e("p", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: y }),
            m === "chip" ? /* @__PURE__ */ e(
              ze,
              {
                label: p,
                variant: N,
                color: A,
                className: "mt-1"
              }
            ) : (
              /* TINY EDITOR */
              m === "tinyEditor" ? /* @__PURE__ */ e(
                "p",
                {
                  className: "mt-1 text-sm text-gray-900 dark:text-white break-words",
                  dangerouslySetInnerHTML: {
                    __html: p
                  }
                }
              ) : m === "audio" ? p ? /* @__PURE__ */ e(
                "audio",
                {
                  controls: !0,
                  src: p instanceof File ? URL.createObjectURL(p) : p,
                  onClick: (k) => k.stopPropagation(),
                  className: "shadow-md rounded-full mt-1"
                },
                p instanceof File ? URL.createObjectURL(p) : p
              ) : /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-gray-400", children: "N/A" }) : (
                /* DEFAULT */
                /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-gray-900 dark:text-white break-words", children: m == "date" ? /* @__PURE__ */ e("span", { children: $e(p, i.format || "DD MMM YYYY") }) : p || "N/A" })
              )
            )
          ] })
        ]
      }
    );
  }, v = ({ col: i }) => {
    let x = b[i.titleKey], y = b[i.subtitleKey], p = b[i.imageKey], m = i.fallback_icon;
    return /* @__PURE__ */ u(
      "div",
      {
        className: `col-span-12 flex items-center space-x-4 p-4 rounded-xl 
      bg-gray-100 dark:bg-gray-900 
      ${i.blockClass}`,
        children: [
          p ? /* @__PURE__ */ e(
            "img",
            {
              src: p instanceof File ? URL.createObjectURL(p) : p,
              alt: x,
              onClick: () => O({ src: p, alt: x }),
              className: "w-16 h-16 cursor-pointer rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
            }
          ) : m ? m instanceof Function ? m(b) : m : /* @__PURE__ */ e("div", { className: "w-16 h-16 flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600", children: /* @__PURE__ */ e(De, { className: "w-8 h-8 text-gray-400" }) }),
          /* @__PURE__ */ u("div", { children: [
            /* @__PURE__ */ e("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: x }),
            /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: y })
          ] })
        ]
      }
    );
  }, d = ({ col: i }) => {
    let x = b[i.titleKey], y = b[i.subtitleKey], p = b[i.imageKey], m = i.label, N = i == null ? void 0 : i.icon, A = i.fallback_icon;
    return /* @__PURE__ */ u(
      "div",
      {
        className: `col-span-12 flex items-center space-x-4 p-4 rounded-xl 
      bg-gray-100 dark:bg-gray-900 
      ${i.blockClass}`,
        children: [
          N && /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: N }),
          /* @__PURE__ */ u("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ e("p", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: m }),
            /* @__PURE__ */ u("div", { className: "flex items-center", children: [
              p ? /* @__PURE__ */ e(
                "img",
                {
                  src: p instanceof File ? URL.createObjectURL(p) : p,
                  alt: x,
                  onClick: () => O({ src: p, alt: x }),
                  className: "w-8 h-8 cursor-pointer rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
                }
              ) : A ? A instanceof Function ? A(b) : A : /* @__PURE__ */ e("div", { className: "w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600", children: /* @__PURE__ */ e(De, { className: "w-6 h-6 text-gray-400" }) }),
              /* @__PURE__ */ u("div", { className: "ml-2", children: [
                /* @__PURE__ */ e("p", { className: "mb-0 text-sm text-gray-900 dark:text-white break-words", children: x }),
                /* @__PURE__ */ e("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: y })
              ] })
            ] })
          ] })
        ]
      }
    );
  };
  return /* @__PURE__ */ u(j, { children: [
    g && /* @__PURE__ */ e(
      He,
      {
        src: c.src,
        alt: c.alt,
        isOpen: g,
        setIsOpen: M
      }
    ),
    /* @__PURE__ */ e("div", { className: `grid grid-cols-12 gap-4 ${s || ""}`, children: l.map((i) => i.renderCondition && typeof i.renderCondition == "function" && !i.renderCondition(b) ? null : i.type == "group" ? /* @__PURE__ */ e(v, { col: i }) : i.type == "cardGroup" ? /* @__PURE__ */ e(d, { col: i }) : /* @__PURE__ */ e(h, { col: i })) })
  ] });
}
const Ye = ({ config: b }) => {
  var le, ae, oe, te, he, ue, be, pe, ge, ie, me, fe, ye, xe, ve, we, se, de, a;
  const {
    title: o,
    fetchData: l = async () => {
    },
    isStaticData: s = !1,
    tableConfig: c = {},
    modalConfig: r = {},
    filterConfig: g
  } = b, [M, O] = R(!0), [h, v] = R(!1), [d, i] = R([]), [x, y] = R(null), [p, m] = R({
    search: "",
    rows_per_page: 50,
    current_page: 1
  }), [N, A] = R({}), [I, k] = R(!1), [C, P] = R(!1), [F, L] = R(!1), [E, G] = R(!1), [H, V] = R(!1), [B, K] = R(null), J = (n, f) => {
    n === "edit" ? (K(f), L(!0)) : n === "view" ? (K(f), V(!0)) : n === "delete" && (K(f), G(!0));
  }, D = async (n, f, S = "", U = "") => {
    v(!0);
    try {
      const $ = await (n == null ? void 0 : n());
      (S || $.message) && Re(S || $.message, {
        variant: "success"
      }), f == null || f($);
    } catch ($) {
      (U || $.message) && Re(U || $.message, { variant: "error" });
    } finally {
      v(!1);
    }
  }, ee = (n) => {
    let f = n.newObject;
    s ? (i((S) => [f, ...S]), y((S) => ({
      ...S,
      current_page: 1
    }))) : (m((S) => ({
      ...S,
      current_page: 1
    })), p.current_page == 1 && q()), P(!1);
  }, w = (n) => {
    let f = n.newObject, S = n.targetObject;
    s ? i(
      (U) => U.map(
        ($) => $.id === S.id ? { ...$, ...f } : $
      )
    ) : q(), L(!1);
  }, T = (n) => {
    if (!n) {
      G(!1), K(null);
      return;
    }
    s ? i(
      (f) => f.filter((S) => S.id !== n.targetObject.id)
    ) : d.length == 1 && p.current_page > 1 ? m((f) => ({
      ...f,
      current_page: f.current_page - 1
    })) : q(), G(!1), K(null);
  }, Y = (n) => D(
    () => {
      var f, S;
      return (S = (f = r == null ? void 0 : r.addModal) == null ? void 0 : f.handleSubmit) == null ? void 0 : S.call(f, n);
    },
    ee
  ), z = (n) => D(
    () => {
      var f, S;
      return (S = (f = r == null ? void 0 : r.editModal) == null ? void 0 : f.handleSubmit) == null ? void 0 : S.call(f, n, B);
    },
    w
  ), q = async () => {
    O(!0), l == null || l({ ...p, ...N }).then((n) => {
      i(n.data), y(n.pagination);
    }).catch((n) => {
      Re(n.message, { variant: "error" });
    }).finally(() => {
      O(!1);
    });
  }, ce = (n) => {
    var f;
    A((S) => ({
      ...n
    })), (f = c == null ? void 0 : c.filter) != null && f.useServerSideFilters && k((S) => !S);
  }, Ce = (n, f) => n.filter(
    (S) => Object.entries(f).every(([U, $]) => S[U] === $)
  ), ne = Ae(() => {
    var n;
    return (n = c == null ? void 0 : c.filter) != null && n.useServerSideFilters ? d : Ce(d, N);
  }, [d, N]);
  return _(() => {
    q();
  }, [
    p.search,
    p.rows_per_page,
    p.current_page,
    I
  ]), /* @__PURE__ */ e(
    la,
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
          children: /* @__PURE__ */ e(Me, { className: "h-4 w-4" })
        }
      ),
      children: /* @__PURE__ */ u("div", { children: [
        /* @__PURE__ */ e(
          ma,
          {
            title: o,
            setShowAdd: P,
            description: b.description,
            buttonText: b.buttonText,
            showAddButton: !!r.addModal,
            config: {
              ...c,
              pagination: {
                ...c.pagination,
                ...x
              },
              data: ne,
              setServerSidePaginationData: m,
              onMenuAction: J,
              filterConfig: g,
              onFilterApply: ce,
              loading: M
            }
          }
        ),
        /* @__PURE__ */ e(
          Se,
          {
            isOpen: C,
            onClose: () => {
              h || P(!1);
            },
            icon: (le = r.addModal) == null ? void 0 : le.icon,
            title: ((ae = r.addModal) == null ? void 0 : ae.title) || "Add New",
            size: ((oe = r.addModal) == null ? void 0 : oe.size) || "md",
            onFormSubmit: () => {
              var n;
              return (n = document.querySelector("#addForm")) == null ? void 0 : n.requestSubmit();
            },
            loadingBtn: h,
            actionButtons: ((te = r == null ? void 0 : r.addModal) == null ? void 0 : te.actionButtons) || [],
            children: /* @__PURE__ */ e(
              je,
              {
                config: (r == null ? void 0 : r.addModal) || {},
                onSubmit: Y,
                initialData: {},
                type: "add",
                loading: h
              }
            )
          }
        ),
        /* @__PURE__ */ e(
          Se,
          {
            isOpen: F,
            onClose: () => {
              h || L(!1);
            },
            icon: (he = r.editModal) == null ? void 0 : he.icon,
            title: ((ue = r.editModal) == null ? void 0 : ue.title) || "Edit",
            size: ((be = r.editModal) == null ? void 0 : be.size) || "md",
            onFormSubmit: () => {
              var n;
              return (n = document.querySelector("#editForm")) == null ? void 0 : n.requestSubmit();
            },
            actionButtons: ((pe = r == null ? void 0 : r.editModal) == null ? void 0 : pe.actionButtons) || [],
            loadingBtn: h,
            children: /* @__PURE__ */ e(
              je,
              {
                config: r.editModal || {},
                onSubmit: z,
                initialData: B,
                type: "edit",
                loading: h
              }
            )
          }
        ),
        E && /* @__PURE__ */ e(
          Se,
          {
            isOpen: E,
            onClose: (n) => {
              T(n);
            },
            icon: ((ge = r.deleteModal) == null ? void 0 : ge.icon) || /* @__PURE__ */ e(re, { icon: "ph:warning-bold", className: "w-6 h-6 text-red-500" }),
            title: ((ie = r.deleteModal) == null ? void 0 : ie.title) || "Confirm Delete",
            size: ((me = r.deleteModal) == null ? void 0 : me.size) || "md",
            loading: h,
            actionButtons: ((fe = r == null ? void 0 : r.deleteModal) == null ? void 0 : fe.actionButtons) || [],
            executeFunction: D,
            selectedItem: B,
            children: /* @__PURE__ */ e("div", { className: "flex items-center space-x-2 py-3", children: /* @__PURE__ */ u("div", { children: [
              /* @__PURE__ */ e("p", { className: "text-md text-gray-700 dark:text-white", children: ((ye = r.deleteModal) == null ? void 0 : ye.confirmText) || "Are you sure you want to delete this item?" }),
              ((xe = r.deleteModal) == null ? void 0 : xe.referenceKey) && /* @__PURE__ */ e("p", { className: "text-md font-semibold text-gray-700 dark:text-white", children: B[(ve = r.deleteModal) == null ? void 0 : ve.referenceKey] })
            ] }) })
          }
        ),
        r.viewModal && /* @__PURE__ */ e(
          Se,
          {
            isOpen: H,
            onClose: () => {
              V(!1), K(null);
            },
            icon: (we = r.viewModal) == null ? void 0 : we.icon,
            title: ((se = r.viewModal) == null ? void 0 : se.title) || "View Details",
            size: ((de = r.viewModal) == null ? void 0 : de.size) || "lg",
            footerConfig: r == null ? void 0 : r.viewModal.footer,
            children: (a = r.viewModal) != null && a.component ? /* @__PURE__ */ e(r.viewModal.component, { data: B }) : /* @__PURE__ */ e(
              fa,
              {
                data: B,
                config: r.viewModal || {}
              }
            )
          }
        )
      ] })
    }
  );
}, Ie = t.shape({
  value: t.oneOfType([
    t.string,
    t.number,
    t.bool
  ]).isRequired,
  label: t.string.isRequired,
  color: t.string
}), Le = t.shape({
  type: t.string.isRequired,
  label: t.string.isRequired,
  color: t.string,
  variant: t.string,
  onClick: t.func
}), ya = t.shape({
  title: t.string.isRequired,
  type: t.string.isRequired,
  variant: t.string,
  icon: t.node
}), xa = t.shape({
  key: t.string.isRequired,
  title: t.string,
  type: t.string,
  imageKey: t.string,
  titleKey: t.string,
  subtitleKey: t.string,
  onClickDetails: t.bool,
  variant: t.string,
  chipOptions: t.arrayOf(Ie),
  defaultColor: t.string,
  className: t.string,
  format: t.string,
  menuList: t.arrayOf(ya)
}), Oe = t.shape({
  key: t.string.isRequired,
  label: t.string,
  type: t.string.isRequired,
  required: t.bool,
  minLength: t.number,
  parentClass: t.string,
  search: t.bool,
  multiple: t.bool,
  dropdownMaxHeight: t.string,
  dragDrop: t.bool,
  countriesList: t.bool,
  defaultCountry: t.string,
  placeholder: t.string,
  rows: t.number,
  text: t.string,
  editorKey: t.string,
  options: t.arrayOf(Ie)
}), va = t.shape({
  key: t.string,
  label: t.string,
  type: t.string,
  imageKey: t.string,
  titleKey: t.string,
  subtitleKey: t.string,
  blockClass: t.string,
  icon: t.node,
  variant: t.string,
  chipOptions: t.arrayOf(Ie),
  defaultColor: t.string,
  className: t.string,
  format: t.string
});
Ye.propTypes = {
  config: t.shape({
    title: t.string.isRequired,
    description: t.string,
    buttonText: t.string,
    fetchData: t.func.isRequired,
    isStaticData: t.bool,
    /* ================= TABLE CONFIG ================= */
    tableConfig: t.shape({
      table_head: t.arrayOf(xa).isRequired,
      search: t.shape({
        enabled: t.bool,
        useServerSideSearch: t.bool,
        searchKeys: t.arrayOf(t.string)
      }),
      pagination: t.shape({
        enabled: t.bool,
        useServerSidePagination: t.bool
      }),
      filter: t.shape({
        enabled: t.bool,
        useServerSideFilters: t.bool
      })
    }).isRequired,
    /* ================= MODAL CONFIG ================= */
    modalConfig: t.shape({
      addModal: t.shape({
        title: t.string.isRequired,
        size: t.string,
        formClass: t.string,
        formFields: t.arrayOf(Oe),
        handleSubmit: t.func.isRequired,
        actionButtons: t.arrayOf(Le)
      }),
      editModal: t.shape({
        title: t.string.isRequired,
        size: t.string,
        formClass: t.string,
        formFields: t.arrayOf(Oe),
        handleSubmit: t.func.isRequired,
        actionButtons: t.arrayOf(Le)
      }),
      deleteModal: t.shape({
        title: t.string.isRequired,
        size: t.string,
        confirmText: t.string,
        referenceKey: t.string,
        actionButtons: t.arrayOf(Le)
      }),
      viewModal: t.shape({
        title: t.string.isRequired,
        size: t.string,
        // 👇 This covers your commented code:
        component: t.elementType,
        // for custom component like TeamMemberDetail
        fields: t.arrayOf(va),
        footer: t.shape({
          cancelButton: t.bool,
          cancelText: t.string
        })
      })
    }),
    /* ================= FILTER CONFIG ================= */
    filterConfig: t.shape({
      fields: t.arrayOf(Oe)
    })
  }).isRequired
};
const wa = () => {
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
function Fa(b) {
  return _(() => {
    wa();
  }, []), /* @__PURE__ */ e(j, { children: /* @__PURE__ */ e(Ye, { config: b.config }) });
}
export {
  Fa as default
};
//# sourceMappingURL=index.es.js.map
