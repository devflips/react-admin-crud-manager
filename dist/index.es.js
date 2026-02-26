import { jsx as e, Fragment as $, jsxs as c } from "react/jsx-runtime";
import Oe, { useState as R, useRef as ae, useEffect as z, useMemo as Le } from "react";
import { Info as Ve, ChevronDown as Be, Search as Ae, Check as We, X as Se, Plus as qe, Filter as Ze, ChevronLeft as Je, ChevronRight as Qe, EllipsisVertical as Xe, User as Ue, Music as ea } from "lucide-react";
import { createPortal as aa } from "react-dom";
import { Icon as re } from "@iconify/react";
import { Editor as ta } from "@tinymce/tinymce-react";
import { SnackbarProvider as ra, enqueueSnackbar as Me } from "notistack";
import r from "prop-types";
const je = (h, o = "DD MMM YYYY") => {
  if (!h) return "N/A";
  const l = new Date(h);
  if (isNaN(l)) return "Invalid Date";
  const i = (n) => String(n).padStart(2, "0"), s = {
    YYYY: l.getFullYear(),
    YY: String(l.getFullYear()).slice(-2),
    MMMM: l.toLocaleString("en-US", { month: "long" }),
    MMM: l.toLocaleString("en-US", { month: "short" }),
    MM: i(l.getMonth() + 1),
    M: l.getMonth() + 1,
    DD: i(l.getDate()),
    D: l.getDate(),
    dddd: l.toLocaleString("en-US", { weekday: "long" }),
    ddd: l.toLocaleString("en-US", { weekday: "short" }),
    HH: i(l.getHours()),
    hh: i(l.getHours() % 12 || 12),
    mm: i(l.getMinutes()),
    ss: i(l.getSeconds()),
    A: l.getHours() >= 12 ? "PM" : "AM"
  };
  return o.replace(
    /YYYY|YY|MMMM|MMM|MM|M|DD|D|dddd|ddd|HH|hh|mm|ss|A/g,
    (n) => s[n]
  );
}, na = (h, o, l = []) => {
  if (!(o != null && o.trim())) return h;
  const i = o.toLowerCase(), s = (n) => n == null ? [] : typeof n == "object" ? Object.values(n).flatMap(s) : [String(n)];
  return h.filter((n) => {
    let p = [];
    return l.length > 0 ? l.forEach((S) => {
      n[S] !== void 0 && p.push(...s(n[S]));
    }) : p = s(n), p.some(
      (S) => S.toLowerCase().includes(i)
    );
  });
}, Q = Oe.forwardRef(
  ({
    className: h = "",
    variant: o = "contained",
    color: l = "default",
    size: i = "default",
    fullWidth: s = !1,
    children: n,
    ...p
  }, S) => {
    var u;
    const D = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", d = {
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
    }, a = ((u = f[l]) == null ? void 0 : u[o]) || f.default.contained, m = d[i], v = `
      ${D} 
      ${a} 
      ${m} 
      ${s ? "w-full" : ""} 
      ${h}
    `.trim();
    return /* @__PURE__ */ e(
      "button",
      {
        ref: S,
        type: p.type || "button",
        className: v,
        ...p,
        children: n
      }
    );
  }
);
Q.displayName = "Button";
function q({ label: h, required: o = !1, infoText: l = "" }) {
  return /* @__PURE__ */ e($, { children: /* @__PURE__ */ c("label", { className: "flex text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: [
    h,
    o && /* @__PURE__ */ e("span", { className: "ml-1", children: "*" }),
    l && /* @__PURE__ */ c("span", { className: "ml-2 relative group inline-flex items-center cursor-pointer", children: [
      /* @__PURE__ */ e(Ve, { className: "w-4 h-4 text-gray-500 dark:text-gray-400" }),
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
const la = ({
  options: h = [],
  value: o = "",
  defaultValue: l = "",
  onChange: i,
  placeholder: s = "Select option",
  className: n = "",
  disabled: p = !1,
  search: S = !1,
  label: D = "",
  required: d = !1,
  name: f = "",
  parentClass: a = "",
  multiple: m = !1,
  // ✅ NEW
  dropdownMaxHeight: v = "",
  formData: u = {},
  dependencyKey: y = ""
}) => {
  var _;
  const [x, N] = R(!1), [I, P] = R(""), [M, L] = R(!0), B = ae(null), F = ae(null), [C, E] = R([]);
  let G = o || o === !1 ? o : l;
  const Y = (k) => k == null || k === "" ? "" : String(typeof k == "boolean" ? k : k ?? "");
  z(
    () => {
      (async () => {
        if (typeof h == "function") {
          const j = await h(u);
          E(j);
        } else
          E(h || []);
      })();
    },
    y ? [h, u == null ? void 0 : u[y]] : [h]
  );
  const W = m ? (G || []).map(Y) : Y(G), U = C.filter(
    (k) => k.label.toLowerCase().includes(I.toLowerCase())
  ), K = (k) => {
    const j = Y(k);
    return m ? W.includes(j) : j === W;
  };
  z(() => {
    const k = (j) => {
      B.current && !B.current.contains(j.target) && (N(!1), P(""));
    };
    return document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, []), z(() => {
    if (x && B.current) {
      const k = B.current.getBoundingClientRect(), X = window.innerHeight - k.bottom;
      L(X < 200);
    }
  }, [x]), z(() => {
    x && F.current && F.current.focus();
  }, [x]);
  const Z = (k) => {
    let j = k;
    if (k === "true" ? j = !0 : k === "false" && (j = !1), m) {
      const X = W.includes(Y(k));
      let J;
      X ? J = o.filter(
        (ee) => Y(ee) !== Y(k)
      ) : J = [...o || [], j], i(J);
    } else
      i(j), N(!1);
    P("");
  }, O = m ? C.filter((k) => K(k.value)).map((k) => k.label).join(", ") : (_ = C.find((k) => K(k.value))) == null ? void 0 : _.label;
  return z(() => {
    (G || G === !1) && setTimeout(() => {
      i(G);
    }, 100);
  }, []), /* @__PURE__ */ c("div", { className: a || "col-span-12", children: [
    /* @__PURE__ */ e(q, { label: D, required: d }),
    /* @__PURE__ */ c("div", { className: `relative ${n}`, ref: B, children: [
      /* @__PURE__ */ e(
        "select",
        {
          name: "hidden_select_for_validation",
          value: O || "",
          required: d,
          multiple: m,
          className: "absolute opacity-0 right-1/2 top-[80%] -translate-x-1/2 -translate-y-1/2 pointer-events-none h-[10px]",
          children: /* @__PURE__ */ e("option", { hidden: !0, value: O, children: O })
        }
      ),
      /* @__PURE__ */ c(
        "button",
        {
          type: "button",
          onClick: () => !p && N(!x),
          disabled: p,
          className: `w-full h-10 px-3 border border-gray-300 dark:border-gray-600 rounded-md text-left text-sm flex items-center justify-between 
          ${O ? "dark:text-white" : "text-gray-500 dark:text-gray-400"} 
          ${p ? "opacity-50 cursor-not-allowed" : "dark:bg-gray-700"}`,
          children: [
            /* @__PURE__ */ e("span", { className: "truncate", children: O || s }),
            /* @__PURE__ */ e(
              Be,
              {
                className: `w-4 h-4 transition-transform ${x ? "rotate-180" : ""}`
              }
            )
          ]
        }
      ),
      x && /* @__PURE__ */ c(
        "div",
        {
          className: `absolute z-50 w-full border rounded-md bg-white dark:bg-gray-700 shadow-lg 
            ${M ? "bottom-full mb-1" : "top-full mt-1"}`,
          children: [
            S && /* @__PURE__ */ e("div", { className: "p-2 border-b border-gray-200 dark:border-gray-600", children: /* @__PURE__ */ c("div", { className: "relative", children: [
              /* @__PURE__ */ e(Ae, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }),
              /* @__PURE__ */ e(
                "input",
                {
                  ref: F,
                  type: "text",
                  value: I,
                  onChange: (k) => P(k.target.value),
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
                children: U.length > 0 ? U.map((k) => /* @__PURE__ */ c(
                  "button",
                  {
                    type: "button",
                    onClick: () => Z(String(k.value)),
                    className: `w-full px-3 py-2 text-left text-sm flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 
                    ${K(k.value) ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300" : ""}`,
                    children: [
                      /* @__PURE__ */ e("span", { children: k.label }),
                      m && K(k.value) && /* @__PURE__ */ e(We, { className: "w-4 h-4" })
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
  ] }, f);
}, oa = ({
  value: h = !0,
  onChange: o,
  text: l,
  options: i = [],
  label: s,
  required: n,
  name: p = "",
  disabled: S = !1,
  parentClass: D = ""
}) => {
  const d = i.length > 0 ? i : [
    { label: "Active", value: !0 },
    { label: "Inactive", value: !1 }
  ];
  return /* @__PURE__ */ e($, { children: /* @__PURE__ */ c("div", { className: D || "col-span-12", children: [
    /* @__PURE__ */ e(q, { label: s, required: n }),
    /* @__PURE__ */ c("div", { className: "flex items-center justify-between h-10 gap-4 bg-gray-100 dark:bg-gray-700 px-3 rounded-md border border-gray-100 dark:border-gray-600", children: [
      l && /* @__PURE__ */ e("p", { className: "text-xs text-gray-600 dark:text-gray-400 flex-shrink overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px]", children: l }),
      /* @__PURE__ */ e("div", { className: "flex items-center gap-6", children: d.map((f, a) => /* @__PURE__ */ c(
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
                value: f.value,
                disabled: S,
                checked: h === f.value,
                onChange: () => o(f.value),
                className: "w-4 h-4  border-gray-300 cursor-pointer"
              }
            ),
            /* @__PURE__ */ e("span", { className: "text-sm text-gray-700 dark:text-white", children: f.label })
          ]
        },
        a
      )) })
    ] })
  ] }, p) });
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
function ia({
  label: h = "",
  value: o = "",
  name: l = "",
  parentClass: i = "",
  onChange: s,
  disabled: n = !1,
  required: p = !1,
  placeholder: S = "Phone number",
  search: D = !1,
  countriesList: d = !1,
  defaultCountry: f = ""
}) {
  const a = (C) => ke.find((E) => E.code == C), [m, v] = R(
    a(f) || ke[0]
  ), [u, y] = R(""), [x, N] = R(!1), [I, P] = R(""), M = ae();
  z(() => {
    if (typeof o == "string" && o.startsWith("+")) {
      const C = ke.filter((E) => o.startsWith("+" + E.phone)).sort((E, G) => G.phone.length - E.phone.length)[0];
      if (C) {
        v(C), y(o.replace("+" + C.phone, ""));
        return;
      }
    }
    y(o);
  }, [o]);
  const L = (C) => {
    const E = C.target.value.replace(/\D/g, "");
    y(E), m && s && s("+" + m.phone + E);
  }, B = (C) => {
    v(C), s && s("+" + C.phone + u), N(!1), P("");
  };
  z(() => {
    const C = (E) => {
      M.current && !M.current.contains(E.target) && N(!1);
    };
    return document.addEventListener("mousedown", C), () => document.removeEventListener("mousedown", C);
  }, []);
  const F = ke.filter(
    (C) => C.label.toLowerCase().includes(I.toLowerCase()) || C.phone.includes(I)
  );
  return d ? /* @__PURE__ */ e($, { children: /* @__PURE__ */ c("div", { className: i || "col-span-12", children: [
    /* @__PURE__ */ e(q, { label: h, required: p }),
    /* @__PURE__ */ c("div", { className: "relative ", ref: M, children: [
      /* @__PURE__ */ c(
        "div",
        {
          className: `h-[40px] flex items-center border rounded-md px-2 bg-white dark:bg-gray-700 transition-all
  ${x ? "ring-0.5 ring-blue-100 border-blue-300" : "border-gray-300 dark:border-gray-600"}
  ${n ? "opacity-60 cursor-not-allowed" : ""}`,
          children: [
            /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                disabled: n,
                onClick: () => N(!x),
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
                  /* @__PURE__ */ e(Be, { className: "w-3 h-3 text-gray-500" })
                ]
              }
            ),
            m && /* @__PURE__ */ c("span", { className: "ml-2 text-sm text-gray-700 dark:text-gray-200 whitespace-nowrap", children: [
              "+",
              m.phone
            ] }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "tel",
                value: u,
                onChange: L,
                required: p,
                disabled: n || !m,
                placeholder: m ? S : "Select a country",
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
      x && /* @__PURE__ */ c("div", { className: "absolute top-full left-0 w-full mt-1 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 shadow-lg z-50 max-h-60 overflow-y-auto", children: [
        D && /* @__PURE__ */ e("div", { className: "p-2 border-b border-gray-200 dark:border-gray-700", children: /* @__PURE__ */ c("div", { className: "relative", children: [
          /* @__PURE__ */ e(Ae, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" }),
          /* @__PURE__ */ e(
            "input",
            {
              type: "text",
              value: I,
              onChange: (C) => P(C.target.value),
              placeholder: "Search country...",
              className: "w-full pl-9 pr-3 py-2 text-sm border rounded-md bg-white dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none "
            }
          )
        ] }) }),
        F.map((C) => /* @__PURE__ */ c(
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
              /* @__PURE__ */ c("span", { children: [
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
  ] }, l) }) : /* @__PURE__ */ e($, { children: /* @__PURE__ */ c("div", { className: i || "col-span-12", children: [
    /* @__PURE__ */ e(q, { label: h, required: p }),
    /* @__PURE__ */ e(
      "input",
      {
        type: "text",
        value: o,
        onChange: (E) => {
          const G = E.target.value.replace(/[^+\d]/g, ""), Y = G.startsWith("+") ? "+" + G.replace(/[+]/g, "").slice(0) : G;
          s(Y);
        },
        placeholder: S,
        disabled: n,
        required: p,
        className: `w-full h-10 px-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md \r
        bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none \r
        focus:ring-1 focus:ring-blue-300 dark:focus:ring-blue-200`,
        inputMode: "tel",
        pattern: "^\\+\\d{1,15}$"
      }
    )
  ] }, l) });
}
const Ee = Oe.forwardRef(
  ({ className: h = "", label: o, required: l, ...i }, s) => {
    const n = `
      placeholder-gray-400 dark:placeholder-gray-400
      ${h}
    `.trim();
    return /* @__PURE__ */ e($, { children: /* @__PURE__ */ c("div", { className: i.parentClass || "col-span-12", children: [
      /* @__PURE__ */ e(q, { label: o, required: l }),
      /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ e(
        "textarea",
        {
          className: n,
          ref: s,
          required: l,
          ...i
        }
      ) })
    ] }, i.name) });
  }
);
Ee.displayName = "TextArea";
const sa = ({
  label: h = "",
  value: o = null,
  onChange: l,
  required: i = !1,
  accept: s = "image/*",
  id: n,
  dragDrop: p = !1,
  name: S = "",
  parentClass: D = ""
}) => {
  const [d, f] = R(o), [a, m] = R(!1), v = ae(null);
  z(() => (o instanceof File ? f({ file: o, preview: URL.createObjectURL(o) }) : (o != null && o.preview, f(o)), () => {
    d != null && d.preview && d.preview.startsWith("blob:") && URL.revokeObjectURL(d.preview);
  }), [o]);
  const u = (M) => {
    if (!M || M.length === 0)
      return;
    const L = M[0], B = URL.createObjectURL(L), F = { file: L, preview: B };
    d != null && d.preview && d.preview.startsWith("blob:") && URL.revokeObjectURL(d.preview), f(F), l == null || l(L);
  }, y = (M) => {
    M && M.stopPropagation(), d != null && d.preview && d.preview.startsWith("blob:") && URL.revokeObjectURL(d.preview), f(null), l == null || l(null), v.current && (v.current.value = "");
  }, x = (M) => {
    p && (M.preventDefault(), m(!0));
  }, N = (M) => {
    p && (M.preventDefault(), m(!1));
  }, I = (M) => {
    p && (M.preventDefault(), m(!1), u(M.dataTransfer.files));
  }, P = () => {
    v.current.click();
  };
  return /* @__PURE__ */ e($, { children: /* @__PURE__ */ c("div", { className: D || "col-span-12", children: [
    /* @__PURE__ */ e(q, { label: h, required: i }),
    /* @__PURE__ */ c(
      "div",
      {
        className: `relative rounded-md p-2 transition-all ${a ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"}`,
        onDragOver: x,
        onDragLeave: N,
        onDrop: I,
        children: [
          /* @__PURE__ */ e(
            "input",
            {
              ref: v,
              id: n,
              type: "file",
              accept: s,
              onChange: (M) => u(M.target.files),
              required: i && !d,
              className: "absolute opacity-0 right-[50%] top-[80%] -translate-y-1/2 pointer-events-none h-[10px]"
            }
          ),
          /* @__PURE__ */ c(
            "div",
            {
              className: `flex items-center space-x-4 transition-all ${a ? "opacity-50" : ""}`,
              children: [
                d ? (
                  // Image preview with close button
                  /* @__PURE__ */ c("div", { className: "relative group", children: [
                    /* @__PURE__ */ e(
                      "img",
                      {
                        src: d.preview || d,
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
                /* @__PURE__ */ c("div", { className: "flex flex-col items-center space-y-1", children: [
                  /* @__PURE__ */ e(
                    Q,
                    {
                      type: "button",
                      onClick: P,
                      variant: "outlined",
                      color: "default",
                      children: d ? "Change Image" : "Select Image"
                    }
                  ),
                  p && !d && /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop" })
                ] })
              ]
            }
          ),
          p && a && /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-md", children: /* @__PURE__ */ e("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg", children: "Drop image here" }) })
        ]
      }
    )
  ] }, S) });
}, $e = Oe.forwardRef(
  ({
    label: h,
    required: o,
    parentClass: l = "",
    className: i = "",
    type: s = "text",
    onKeyDown: n,
    negativeNumberAllow: p = !0,
    defaultValue: S = "",
    field: D = {},
    ...d
  }, f) => {
    const [a, m] = R(!1), v = (y) => {
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
      n == null || n(y);
    }, u = `
      h-10 placeholder-gray-400 dark:placeholder-gray-400
      ${s === "password" ? "pr-10" : ""}
      ${s === "number" ? "no-spinner" : ""}
      ${i}
    `.trim();
    return z(() => {
      if (S) {
        let y = d.value || S;
        setTimeout(() => {
          var x;
          (x = d.onChange) == null || x.call(d, { target: { value: y } });
        }, 100);
      }
    }, [S]), /* @__PURE__ */ e($, { children: /* @__PURE__ */ c("div", { className: l || "col-span-12", children: [
      /* @__PURE__ */ e(
        q,
        {
          label: h,
          required: o,
          infoText: D.infoText
        }
      ),
      /* @__PURE__ */ c("div", { className: "relative", children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: s === "password" && a ? "text" : s,
            ref: f,
            required: o,
            onKeyDown: v,
            className: u,
            ...d
          }
        ),
        s === "password" && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            tabIndex: -1,
            onClick: () => m((y) => !y),
            className: "absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200",
            children: /* @__PURE__ */ e(
              re,
              {
                icon: a ? "mdi:eye-outline" : "mdi:eye-off-outline",
                className: "w-5 h-5"
              }
            )
          }
        )
      ] })
    ] }, d.name) });
  }
);
$e.displayName = "Input";
const da = ({
  key: h,
  editorKey: o = "",
  value: l = "",
  onChange: i,
  label: s = "",
  required: n = !1,
  placeholder: p = "",
  parentClass: S = "col-span-12",
  height: D = 400,
  inline: d = !1,
  disabled: f = !1,
  plugins: a,
  toolbar: m,
  menubar: v = !1,
  fontFamily: u = "Inter, sans-serif",
  initConfig: y = {},
  imageUploadHandler: x
  // ✅ Promise function passed from parent
}) => /* @__PURE__ */ c("div", { className: S, children: [
  s && /* @__PURE__ */ e(q, { label: s, required: n }),
  /* @__PURE__ */ e(
    ta,
    {
      apiKey: o,
      value: l,
      disabled: f,
      init: {
        height: D,
        inline: d,
        menubar: v,
        branding: !1,
        statusbar: !0,
        automatic_uploads: !0,
        images_upload_handler: (M) => new Promise((L, B) => {
          if (!x) {
            L(`data:${M.blob().type};base64,${M.base64()}`);
            return;
          }
          x(M).then((F) => {
            F ? L(F) : B("Upload failed: No URL returned");
          }).catch((F) => {
            B(
              typeof F == "string" ? F : (F == null ? void 0 : F.message) || "Image upload failed"
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
        toolbar: m ?? "undo redo | blocks | bold italic underline forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media table | removeformat | code fullscreen preview",
        placeholder: p,
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
] }, h), ca = ({
  name: h = "",
  label: o = "",
  // label for single checkbox
  options: l = [],
  // array of { label, value } for multiple
  value: i = null,
  // boolean for single, array for multiple, or string for single select
  onChange: s,
  disabled: n = !1,
  required: p = !1,
  parentClass: S = "col-span-12",
  className: D = "",
  multiSelect: d = !1
  // ✅ if true, only one option can be selected (like radio)
}) => {
  const f = Array.isArray(l) && l.length > 0, a = (u) => f ? d ? Array.isArray(i) && i.includes(u) : i === u : !!i, m = (u) => {
    s == null || s(u.target.checked, h);
  }, v = (u, y) => {
    if (s)
      if (!d)
        s(y ? u : "", h);
      else {
        const x = Array.isArray(i) ? [...i] : [];
        if (y)
          x.includes(u) || x.push(u);
        else {
          const N = x.indexOf(u);
          N > -1 && x.splice(N, 1);
        }
        s(x, h);
      }
  };
  return f ? /* @__PURE__ */ e($, { children: /* @__PURE__ */ c("div", { className: `${S}`, children: [
    /* @__PURE__ */ e(q, { label: o, required: p }),
    /* @__PURE__ */ e("div", { className: "flex flex-col space-y-2", children: l.map((u, y) => /* @__PURE__ */ c("div", { className: "flex items-center", children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          name: h,
          value: u.value,
          checked: a(u.value),
          disabled: n || u.disabled,
          required: p && y === 0,
          onChange: (x) => v(u.value, x.target.checked),
          className: `h-4 w-4 cursor-pointer text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${D}`
        },
        h
      ),
      u.label && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: h,
          className: "ml-2 text-sm text-gray-700 dark:text-gray-200 select-none",
          children: u.label
        }
      )
    ] }, u.value || u.label)) })
  ] }) }) : /* @__PURE__ */ c("div", { className: `flex items-center ${S}`, children: [
    /* @__PURE__ */ e(
      "input",
      {
        type: "checkbox",
        name: h,
        checked: a(),
        disabled: n,
        required: p,
        onChange: m,
        className: `h-4 w-4 text-blue-600 cursor-pointer border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${D}`
      }
    ),
    o && /* @__PURE__ */ e(
      "label",
      {
        htmlFor: h,
        className: "ml-2 text-sm text-gray-700 dark:text-gray-200 select-none",
        children: o
      }
    )
  ] });
}, ha = ({
  label: h = "",
  value: o = null,
  onChange: l,
  required: i = !1,
  accept: s = "audio/*",
  id: n,
  dragDrop: p = !1,
  name: S = "",
  parentClass: D = ""
}) => {
  const [d, f] = R(null), [a, m] = R(!1), v = ae(null);
  z(() => {
    if (!o) {
      u(), f(null);
      return;
    }
    if (o instanceof File) {
      const L = URL.createObjectURL(o);
      return f({ file: o, preview: L }), () => {
        URL.revokeObjectURL(L);
      };
    } else typeof o == "string" ? f({ preview: o }) : o != null && o.preview && f(o);
  }, [o]);
  const u = () => {
    d != null && d.preview && d.preview.startsWith("blob:") && URL.revokeObjectURL(d.preview);
  }, y = (L) => {
    if (!L || L.length === 0)
      return;
    const B = L[0], F = URL.createObjectURL(B);
    u(), f({ file: B, preview: F }), l == null || l(B);
  }, x = (L) => {
    L && L.stopPropagation(), u(), f(null), l == null || l(null), v.current && (v.current.value = "");
  }, N = (L) => {
    p && (L.preventDefault(), m(!0));
  }, I = (L) => {
    p && (L.preventDefault(), m(!1));
  }, P = (L) => {
    p && (L.preventDefault(), m(!1), y(L.dataTransfer.files));
  }, M = () => {
    v.current.click();
  };
  return /* @__PURE__ */ c("div", { className: D || "col-span-12", children: [
    /* @__PURE__ */ e(q, { label: h, required: i }),
    /* @__PURE__ */ c(
      "div",
      {
        className: `relative rounded-lg p-2 transition-all ${a ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"}`,
        onDragOver: N,
        onDragLeave: I,
        onDrop: P,
        children: [
          /* @__PURE__ */ e(
            "input",
            {
              ref: v,
              id: n,
              type: "file",
              accept: s,
              onChange: (L) => y(L.target.files),
              required: i && !d,
              className: "absolute opacity-0 right-[50%] top-[80%] -translate-y-1/2 pointer-events-none h-[10px]"
            }
          ),
          /* @__PURE__ */ e(
            "div",
            {
              className: `flex items-center space-x-4 transition-all ${a ? "opacity-50" : ""}`,
              children: d ? (
                // Audio player with close button and change button
                /* @__PURE__ */ c("div", { className: "flex items-center space-x-4", children: [
                  /* @__PURE__ */ c("div", { className: "relative w-full", children: [
                    !i && /* @__PURE__ */ e(
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
                        src: d.preview,
                        controls: !0,
                        controlsList: "nodownload"
                      },
                      d.preview
                    )
                  ] }),
                  /* @__PURE__ */ e(Q, { type: "button", onClick: M, children: /* @__PURE__ */ e("span", { children: "Change Audio File" }) })
                ] })
              ) : (
                // Empty state with upload button
                /* @__PURE__ */ c("div", { className: "flex items-center justify-center space-x-4", children: [
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
                  p && /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop your audio file here" })
                ] })
              )
            }
          ),
          p && a && !d && /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-lg", children: /* @__PURE__ */ e("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg", children: "Drop audio here" }) })
        ]
      }
    )
  ] }, S);
}, Ge = ({ field: h, formData: o, handleChange: l }) => {
  const {
    key: i,
    label: s,
    type: n,
    options: p,
    placeholder: S,
    rows: D,
    inputClass: d,
    search: f,
    accept: a,
    text: m,
    required: v = !1,
    minLength: u,
    dragDrop: y,
    parentClass: x,
    countriesList: N,
    defaultCountry: I,
    multiple: P,
    dropdownMaxHeight: M,
    editorKey: L,
    fontFamily: B,
    disabled: F,
    negativeNumberAllow: C,
    defaultValue: E,
    renderCondition: G,
    optionDependencyKey: Y,
    pattern: W
  } = h;
  let U = o == null ? void 0 : o[i];
  U == null && (U = "");
  const K = S || (n === "select" ? `Select ${s}` : `Enter ${s}`), Z = "w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm focus:outline-none focus:ring-1 focus:ring-blue-200 bg-white text-black dark:bg-gray-700 dark:text-white";
  if (G && typeof G == "function" && !G(o))
    return null;
  switch (n) {
    case "select":
      return /* @__PURE__ */ e(
        la,
        {
          options: p || [],
          value: U,
          formData: o,
          dependencyKey: Y,
          onChange: (O) => l(i, O),
          placeholder: K,
          className: d || "",
          search: f,
          required: v,
          defaultValue: E,
          label: s,
          name: i,
          disabled: F,
          parentClass: x,
          multiple: P,
          dropdownMaxHeight: M
        }
      );
    case "checkbox":
      return /* @__PURE__ */ e(
        ca,
        {
          name: i,
          label: s,
          options: p || [],
          value: U,
          onChange: (O) => l(i, O),
          required: v,
          parentClass: x,
          className: d || "",
          multiSelect: P,
          disabled: F
        }
      );
    case "switch":
      return /* @__PURE__ */ e(
        oa,
        {
          value: U,
          onChange: (O) => l(i, O),
          text: m,
          options: p || [],
          label: s,
          required: v,
          name: i,
          disabled: F,
          parentClass: x
        }
      );
    case "phone":
      return /* @__PURE__ */ e(
        ia,
        {
          value: U,
          onChange: (O) => l(i, O),
          countriesList: N,
          defaultCountry: I,
          required: v,
          placeholder: K,
          search: f,
          label: s,
          name: i,
          disabled: F,
          parentClass: x
        }
      );
    case "textarea":
      return /* @__PURE__ */ e(
        Ee,
        {
          value: U,
          onChange: (O) => l(i, O.target.value),
          placeholder: K,
          rows: D || 3,
          className: `${Z} ${d || ""}`,
          required: v,
          name: i,
          label: s,
          disabled: F,
          parentClass: x
        }
      );
    case "image":
      return /* @__PURE__ */ e(
        sa,
        {
          value: U,
          onChange: (O) => l(i, O),
          required: v,
          accept: a || "image/*",
          id: `file-${i}`,
          dragDrop: y,
          label: s,
          name: i,
          parentClass: x
        }
      );
    case "audio":
      return /* @__PURE__ */ e(
        ha,
        {
          value: U,
          onChange: (O) => l(i, O),
          required: v,
          accept: a || "audio/*",
          id: `file-${i}`,
          dragDrop: y,
          label: s,
          name: i,
          parentClass: x
        }
      );
    case "tinyEditor":
      return /* @__PURE__ */ e(
        da,
        {
          value: U,
          onChange: (O) => l(i, O),
          required: v,
          placeholder: K,
          label: s,
          parentClass: x,
          fontFamily: B,
          editorKey: L,
          disabled: F
        },
        `editor-${i}`
      );
    default:
      return /* @__PURE__ */ e(
        $e,
        {
          field: h,
          type: n || "text",
          defaultValue: E,
          value: U,
          onChange: (O) => l(i, O.target.value),
          placeholder: K,
          className: `${Z} ${d || ""}`,
          required: v,
          name: i,
          minLength: u,
          label: s,
          negativeNumberAllow: C,
          parentClass: x,
          disabled: F,
          pattern: W
        }
      );
  }
}, ua = ({ isOpen: h, onClose: o, config: l, onApply: i }) => {
  var d;
  const [s, n] = R({}), p = (f, a) => {
    n((m) => ({ ...m, [f]: a }));
  }, S = () => {
    i == null || i(s), o();
  }, D = () => {
    n({}), i == null || i({}), o();
  };
  return /* @__PURE__ */ c($, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: `fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${h ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
        onClick: o
      }
    ),
    /* @__PURE__ */ c(
      "div",
      {
        className: `fixed top-0 right-0 h-full w-[28rem] bg-white dark:bg-gray-900 shadow-2xl z-50 flex flex-col border-l border-gray-200 dark:border-gray-700
          transform transition-transform duration-300 ease-in-out
          ${h ? "translate-x-0" : "translate-x-full"}
        `,
        children: [
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700", children: [
            /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: "Filters" }),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: o,
                className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition",
                children: /* @__PURE__ */ e(Se, { className: "w-5 h-5 text-gray-500 dark:text-gray-400" })
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 py-3", children: l != null && l.component ? /* @__PURE__ */ e(l.component, { filters: s, onFilterChange: p }) : /* @__PURE__ */ e("div", { className: "space-y-4", children: (d = l == null ? void 0 : l.fields) == null ? void 0 : d.map((f) => /* @__PURE__ */ e($, { children: /* @__PURE__ */ e(
            Ge,
            {
              field: f,
              formData: s,
              handleChange: p
            },
            f.key
          ) })) }) }),
          /* @__PURE__ */ c("div", { className: "flex gap-2 px-4 py-3 border-t border-gray-200 dark:border-gray-700", children: [
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
                onClick: D,
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
  label: h,
  variant: o = "contained",
  // contained | outline | soft
  color: l = "green",
  className: i = ""
}) => {
  const s = Fe[l] || Fe.green, n = Pe[o] || Pe.contained, p = o === "outline" ? s.border : s.bg;
  return /* @__PURE__ */ e(
    "span",
    {
      className: `inline-flex justify-center items-center rounded-sm text-xs font-semibold px-3 py-1 min-w-[78px]
        ${p}
        ${n}
        ${i}`,
      children: h
    }
  );
}, pa = ({ rows: h = 5, columns: o = 5 }) => /* @__PURE__ */ c($, { children: [
  /* @__PURE__ */ e("div", { className: "w-full mb-6 inline-flex justify-end items-center", children: /* @__PURE__ */ e("div", { className: "h-8 w-80 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }),
  /* @__PURE__ */ e("div", { className: "overflow-hidden rounded-md border border-gray-200 dark:border-gray-800", children: /* @__PURE__ */ c("table", { className: "w-full border-collapse", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { className: "bg-gray-50 dark:bg-gray-900", children: Array.from({ length: o }).map((l, i) => /* @__PURE__ */ e("th", { className: "px-4 py-3", children: /* @__PURE__ */ e("div", { className: "h-6 w-24 bg-gray-300 dark:bg-gray-700 rounded animate-pulse  inline-flex justify-center items-center" }) }, i)) }) }),
    /* @__PURE__ */ e("tbody", { children: Array.from({ length: h }).map((l, i) => /* @__PURE__ */ e(
      "tr",
      {
        className: "border-t border-gray-200 dark:border-gray-800",
        children: Array.from({ length: o }).map((s, n) => /* @__PURE__ */ e("td", { className: "px-4 py-6", children: /* @__PURE__ */ e("div", { className: "h-6 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }, n))
      },
      i
    )) })
  ] }) })
] }), _e = ({ src: h, alt: o = "preview", isOpen: l, setIsOpen: i }) => {
  const s = () => i(!1);
  return z(() => {
    const n = (p) => {
      p.key === "Escape" && s();
    };
    return l && (document.body.style.overflow = "hidden", document.addEventListener("keydown", n)), () => {
      document.body.style.overflow = "", document.removeEventListener("keydown", n);
    };
  }, [l]), /* @__PURE__ */ e($, { children: /* @__PURE__ */ c(
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
                src: h,
                alt: o,
                className: "w-full max-h-[90vh] object-contain rounded-xl"
              }
            )
          }
        )
      ]
    }
  ) });
}, ba = ({
  config: h,
  setShowAdd: o,
  title: l,
  buttonText: i,
  description: s,
  showAddButton: n
}) => {
  const {
    data: p = [],
    table_head: S = [],
    loading: D = !1,
    search: d = {
      enabled: !1,
      placeholder: "Search...",
      useServerSideSearch: !1
    },
    filter: f = {
      enabled: !1,
      useServerSideFilters: !1
    },
    pagination: a = {
      enabled: !1,
      rows_per_page: 10,
      useServerSidePagination: !1
    },
    emptyMessage: m = "No data available",
    onMenuAction: v,
    setServerSidePaginationData: u = () => {
    },
    onFilterApply: y,
    filterConfig: x = null,
    rowClick: N = null
  } = h, [I, P] = R(""), [M, L] = R(null), [B, F] = R([]), [C, E] = R({}), [G, Y] = R(!1), [W, U] = R(null), [K, Z] = R(!1), O = Le(() => !d.enabled || !I.trim() || d.useServerSideSearch ? p : na(p, I, d.searchKeys || []), [p, I, d]), [_, k] = R(1), [j, X] = R((a == null ? void 0 : a.rows_per_page) || 50), [J, ee] = R(O.length || 0), ne = a != null && a.useServerSidePagination ? a.total_pages : Math.ceil(O.length / j), ce = Le(() => {
    if (a.useServerSidePagination) return O;
    const t = (_ - 1) * j;
    return O.slice(t, t + j);
  }, [O, _, j]), le = ae(null), oe = ae({}), te = ae(null), he = (t) => {
    P(t), k(1), d.useServerSideSearch && (te.current && clearTimeout(te.current), te.current = setTimeout(async () => {
      try {
        await u((g) => ({
          ...g,
          search: t,
          current_page: 1
        }));
      } catch (g) {
        console.error("Search error:", g);
      }
    }, 800));
  }, ue = (t, g, T) => {
    T.stopPropagation(), L(null), v == null || v(t.type, g);
  }, pe = (t, g, T) => {
    g.stopPropagation(), F(T);
    const b = g.currentTarget;
    oe.current[t] = b;
    const w = b.getBoundingClientRect(), A = 192, V = T.length * 40, H = window.innerWidth, Te = window.innerHeight, He = H - w.right < A ? w.left - A + w.width : w.left, Ye = Te - w.bottom < V && w.top > V ? w.top - V - 2 : w.bottom + 2;
    E({
      top: Math.max(8, Math.min(Ye, Te - V - 8)),
      left: Math.max(8, Math.min(He, H - A - 8))
    }), L(M === t ? null : t);
  }, be = (t) => (_ - 1) * j + t + 1, ge = (t) => {
    t && t.src instanceof File && (t = { ...t, src: URL.createObjectURL(t.src) }), U(t), Z(!0);
  }, ie = (t, g, T, b = null, w = null) => /* @__PURE__ */ e($, { children: t ? /* @__PURE__ */ e(
    "img",
    {
      src: t instanceof File ? URL.createObjectURL(t) : t,
      alt: g || "Avatar",
      onClick: (A) => {
        A.stopPropagation(), A.preventDefault(), ge({ src: t, alt: g });
      },
      className: `w-10 h-10 cursor-pointer shrink-0 rounded-full object-cover border border-gray-200 dark:border-gray-700 ${T || ""}`
    }
  ) : /* @__PURE__ */ e($, { children: b ? typeof b == "function" ? b(w) : b : /* @__PURE__ */ e(
    "div",
    {
      className: `w-10 h-10 flex items-center shrink-0 justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${T || ""}`,
      children: /* @__PURE__ */ e(Ue, { className: "w-6 h-6 text-gray-400 dark:text-gray-400" })
    }
  ) }) }), me = (t, g) => /* @__PURE__ */ e($, { children: t ? /* @__PURE__ */ e(
    "audio",
    {
      controls: !0,
      src: t instanceof File ? URL.createObjectURL(t) : t,
      onClick: (T) => {
        T.stopPropagation();
      },
      className: `w-64 cursor-pointer ${g || ""}`
    },
    t instanceof File ? URL.createObjectURL(t) : t
  ) : /* @__PURE__ */ e($, { children: /* @__PURE__ */ e(
    "div",
    {
      className: `w-12 h-12 flex items-center shrink-0 justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${g || ""}`,
      children: /* @__PURE__ */ e(ea, { className: "w-6 h-6 text-gray-400 dark:text-gray-400" })
    }
  ) }) }), fe = (t, g) => /* @__PURE__ */ c("div", { className: `flex items-center space-x-4 ${g.className || ""}`, children: [
    g.imageKey ? ie(
      t[g.imageKey],
      t[g.titleKey],
      "group-avatar",
      g.fallback_icon,
      t
    ) : "",
    /* @__PURE__ */ c("div", { children: [
      /* @__PURE__ */ e("p", { className: "font-medium text-gray-900 dark:text-white group-title", children: t[g.titleKey] || "" }),
      /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400 group-sub-title", children: t[g.subtitleKey] || "" })
    ] })
  ] }), ye = (t, g) => {
    var A;
    let T = String(t);
    const b = g.variant || "contained";
    let w = g.defaultColor;
    if (((A = g == null ? void 0 : g.chipOptions) == null ? void 0 : A.length) > 0) {
      let V = g == null ? void 0 : g.chipOptions.find((H) => H.value == t);
      V && (T = V.label, w = V.color);
    }
    return /* @__PURE__ */ e(
      Ke,
      {
        label: T,
        variant: b,
        color: w,
        className: g.className || ""
      }
    );
  }, xe = (t, g, T) => {
    const b = g[t.key];
    return t.type === "menu_actions" ? /* @__PURE__ */ e("div", { className: `text-center ${t.className || ""}`, children: /* @__PURE__ */ e(
      "button",
      {
        ref: (w) => oe.current[g.id || g._id] = w,
        onClick: (w) => pe(g.id || g._id, w, t.menuList),
        className: "p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition text-gray-700 dark:text-gray-300",
        children: /* @__PURE__ */ e(Xe, { className: "h-4 w-4" })
      }
    ) }) : t.type === "index" ? /* @__PURE__ */ e("span", { className: t.className || "", children: be(T) }) : t.type === "group" ? fe(g, t) : t.type === "chip" ? /* @__PURE__ */ e($, { children: ye(b, t) }) : t.type === "date" ? /* @__PURE__ */ e("span", { className: t.className || "", children: je(b, t.format || "DD MMM YYYY") }) : t.type === "avatar" ? /* @__PURE__ */ e($, { children: /* @__PURE__ */ e("div", { className: "min-w-[40px]", children: ie(
      b,
      t.alt,
      t.className,
      t.fallback_icon,
      g
    ) }) }) : t.type === "audio" ? /* @__PURE__ */ e($, { children: me(b, t.className) }) : /* @__PURE__ */ e("span", { className: t.className || "", children: b || "N/A" });
  }, ve = (t) => {
    if (typeof N == "function")
      return N(t);
    if (N)
      return v == null ? void 0 : v("view", t);
  }, we = (t, g) => {
    if (t.onClickDetails)
      return v == null ? void 0 : v("view", g);
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
      a != null && a.useServerSidePagination ? a.total_records : O.length
    ), O.length <= j * (_ - 1) && !(a != null && a.useServerSidePagination) && k((t) => t - 1 || 1);
  }, [
    O.length,
    a.total_records,
    a == null ? void 0 : a.useServerSidePagination
  ]), D ? /* @__PURE__ */ e(pa, { rows: 6, columns: 6 }) : /* @__PURE__ */ c($, { children: [
    /* @__PURE__ */ c("div", { className: "flex flex-col sm:flex-row sm:justify-between gap-4 mb-3", children: [
      /* @__PURE__ */ c("div", { children: [
        /* @__PURE__ */ e("h1", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: l }),
        /* @__PURE__ */ e("p", { className: "text-md text-gray-600 dark:text-gray-400", children: s })
      ] }),
      /* @__PURE__ */ c("div", { className: "flex flex-col justify-end items-end gap-2", children: [
        n && /* @__PURE__ */ c(
          Q,
          {
            onClick: () => o(!0),
            variant: "contained",
            color: "primary",
            children: [
              /* @__PURE__ */ e(qe, { className: "w-4 h-4 mr-2" }),
              i || "Add New"
            ]
          }
        ),
        /* @__PURE__ */ c("div", { className: "flex justify-end items-center gap-2", children: [
          d.enabled && /* @__PURE__ */ e("div", { className: "", children: /* @__PURE__ */ c("div", { className: "relative min-w-[300px]", children: [
            /* @__PURE__ */ e(Ae, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-300" }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                placeholder: d.placeholder || "Search...",
                value: I,
                onChange: (t) => he(t.target.value),
                className: "w-full h-[36px] pl-9 pr-4 py-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-300 dark:ring-blue-200 disabled:opacity-50"
              }
            )
          ] }) }),
          x && f.enabled && /* @__PURE__ */ c(Q, { onClick: () => Y(!0), variant: "contained", children: [
            /* @__PURE__ */ e(Ze, { className: "w-4 h-4 mr-2" }),
            "Filters"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ c("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-700", children: [
      /* @__PURE__ */ e("div", { className: "overflow-x-auto", children: /* @__PURE__ */ c("table", { className: "min-w-full divide-y divide-gray-200 dark:divide-gray-700", children: [
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
            children: m
          }
        ) }) : ce.map((t, g) => /* @__PURE__ */ e(
          "tr",
          {
            className: `hover:bg-gray-50 dark:hover:bg-blue-800/10 transition ${se() ? "cursor-pointer" : ""}`,
            onClick: (T) => {
              se() && ve(t);
            },
            children: S.map((T) => /* @__PURE__ */ e(
              "td",
              {
                className: `px-6 py-4 text-sm text-gray-900 dark:text-gray-100 min-w-max ${T.type == "audio" ? "" : "max-w-[300px]"} truncate ${de(T) ? "cursor-pointer" : ""}`,
                title: String(t[T.key] ?? ""),
                onClick: (b) => {
                  de(T) && (b.stopPropagation(), b.preventDefault(), we(T, t));
                },
                children: T.render ? T.render(t, g) : xe(T, t, g)
              },
              T.key
            ))
          },
          t.id || t._id || g
        )) })
      ] }) }),
      (a == null ? void 0 : a.enabled) && O.length > 0 && /* @__PURE__ */ c("div", { className: " bg-gray-50 dark:bg-gray-700/60 px-6 py-3 flex flex-wrap items-center justify-between border-t border-gray-200 dark:border-gray-600 gap-3", children: [
        /* @__PURE__ */ c("div", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
          "Showing ",
          (_ - 1) * j + 1,
          " to",
          " ",
          Math.min(_ * j, J),
          " of ",
          J,
          " ",
          "results"
        ] }),
        /* @__PURE__ */ c("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Rows per page:" }),
            /* @__PURE__ */ e(
              "select",
              {
                value: j,
                onChange: (t) => {
                  const g = Number(t.target.value);
                  X(g), k(1), a.useServerSidePagination && u((T) => ({
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
          /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => {
                  if (_ > 1) {
                    const t = _ - 1;
                    k(t), a.useServerSidePagination && u((g) => ({
                      ...g,
                      current_page: t
                    }));
                  }
                },
                disabled: _ === 1,
                className: "p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition text-gray-500 dark:text-gray-300 disabled:opacity-50",
                children: /* @__PURE__ */ e(Je, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ c("span", { className: "text-sm text-gray-800 dark:text-gray-200", children: [
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
                    k(t), a.useServerSidePagination && u((g) => ({
                      ...g,
                      current_page: t
                    }));
                  }
                },
                disabled: _ === ne,
                className: "p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition text-gray-500 dark:text-gray-300 disabled:opacity-50",
                children: /* @__PURE__ */ e(Qe, { className: "h-4 w-4" })
              }
            )
          ] })
        ] })
      ] })
    ] }),
    M && aa(
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
          children: B.map((t, g) => /* @__PURE__ */ c(
            "button",
            {
              onClick: (T) => ue(
                t,
                p.find(
                  (b) => b.id === M || b._id == M
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
    x && /* @__PURE__ */ e(
      ua,
      {
        isOpen: G,
        onClose: () => Y(!1),
        config: x,
        onApply: y
      }
    ),
    K && /* @__PURE__ */ e(
      _e,
      {
        src: W.src,
        alt: W.alt,
        isOpen: K,
        setIsOpen: Z
      }
    )
  ] });
}, Ne = ({
  isOpen: h,
  onClose: o,
  icon: l,
  title: i,
  children: s,
  size: n = "md",
  actionButtons: p = [],
  actions: S,
  showDefaultClose: D = !0,
  footerConfig: d = null,
  hideFooter: f = !1,
  onFormSubmit: a = () => {
  },
  onCancel: m,
  loadingBtn: v = !1,
  executeFunction: u = () => {
  },
  selectedItem: y = null
}) => {
  if (!h) return null;
  const x = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-full"
  };
  return /* @__PURE__ */ c("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: "fixed inset-0 bg-gray-500 opacity-75",
        onClick: () => o()
      }
    ),
    /* @__PURE__ */ c(
      "div",
      {
        className: `relative bg-white rounded-lg shadow-xl w-full ${x[n] || x.md} max-h-[90vh] flex flex-col dark:bg-gray-800`,
        children: [
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0", children: [
            /* @__PURE__ */ c("div", { className: "flex items-center gap-1", children: [
              l && /* @__PURE__ */ e("span", { children: l }),
              /* @__PURE__ */ e("h3", { className: "text-lg font-medium text-gray-900 dark:text-white", children: i })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => o(),
                className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
                children: /* @__PURE__ */ e(Se, { className: "w-6 h-6" })
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto p-4", children: s }),
          p.length > 0 && /* @__PURE__ */ e("div", { className: "px-4 py-3 flex justify-end gap-3 border-t border-gray-200 dark:border-gray-700 sm:px-6", children: p.map((N) => /* @__PURE__ */ e(
            Q,
            {
              onClick: (I) => {
                N.type == "submit" ? a(I) : u(
                  () => {
                    var P;
                    return (P = N == null ? void 0 : N.onClick) == null ? void 0 : P.call(N, I, y);
                  },
                  (P) => o == null ? void 0 : o(P)
                );
              },
              disabled: v || N.disabled,
              variant: N.variant || "contained",
              color: N.color || "primary",
              className: `min-w-[100px] ${N.className}`,
              type: N.type || "button",
              children: v ? /* @__PURE__ */ c("div", { className: "flex items-center", children: [
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
}, Ie = ({ config: h, onSubmit: o, initialData: l = {}, type: i = "add" }) => {
  const { formClass: s = "grid grid-cols-12 gap-4", formFields: n = [] } = h || {}, [p, S] = R(l);
  z(() => {
    S(l);
  }, []);
  const D = (f, a) => {
    S((m) => ({ ...m, [f]: a }));
  }, d = (f) => {
    f.preventDefault();
    const a = f.target;
    if (!a.checkValidity()) {
      a.reportValidity();
      return;
    }
    o(p);
  };
  return /* @__PURE__ */ e(
    "form",
    {
      id: i == "add" ? "addForm" : i == "edit" ? "editForm" : "defaultForm",
      onSubmit: d,
      className: s,
      noValidate: !1,
      children: n.map((f) => /* @__PURE__ */ e($, { children: /* @__PURE__ */ e(
        Ge,
        {
          field: f,
          formData: p,
          handleChange: D
        },
        f.key
      ) }))
    }
  );
};
function ga({ data: h, config: o }) {
  const { fields: l, containerClass: i } = o, [s, n] = R(null), [p, S] = R(!1), D = (a) => {
    a && a.src instanceof File && (a = { ...a, src: URL.createObjectURL(a.src) }), n(a), S(!0);
  }, d = ({ col: a }) => {
    var I;
    let m = a == null ? void 0 : a.icon, v = a.label, u = h[a.key], y = a.type, x = a.variant || "outline", N = a.defaultColor;
    if (y === "chip" && ((I = a.chipOptions) == null ? void 0 : I.length) > 0) {
      let P = a == null ? void 0 : a.chipOptions.find((M) => M.value == u);
      P && (u = P.label, N = P.color);
    }
    return /* @__PURE__ */ c(
      "div",
      {
        className: `col-span-12 flex items-center space-x-4 p-4 rounded-xl 
                  bg-gray-100 dark:bg-gray-900 ${a.blockClass || ""}`,
        children: [
          m && /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: m }),
          /* @__PURE__ */ c("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ e("p", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: v }),
            y === "chip" ? /* @__PURE__ */ e(
              Ke,
              {
                label: u,
                variant: x,
                color: N,
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
                  src: u instanceof File ? URL.createObjectURL(u) : u,
                  onClick: (P) => P.stopPropagation(),
                  className: "shadow-md rounded-full mt-1"
                },
                u instanceof File ? URL.createObjectURL(u) : u
              ) : /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-gray-400", children: "N/A" }) : (
                /* DEFAULT */
                /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-gray-900 dark:text-white break-words", children: y == "date" ? /* @__PURE__ */ e("span", { children: je(u, a.format || "DD MMM YYYY") }) : u || "N/A" })
              )
            )
          ] })
        ]
      }
    );
  }, f = ({ col: a }) => {
    let m = h[a.titleKey], v = h[a.subtitleKey], u = h[a.imageKey], y = a.fallback_icon;
    return /* @__PURE__ */ c(
      "div",
      {
        className: `col-span-12 flex items-center space-x-4 p-4 rounded-xl 
      bg-gray-100 dark:bg-gray-900 
      ${a.blockClass}`,
        children: [
          u ? /* @__PURE__ */ e(
            "img",
            {
              src: u instanceof File ? URL.createObjectURL(u) : u,
              alt: m,
              onClick: () => D({ src: u, alt: m }),
              className: "w-16 h-16 cursor-pointer rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
            }
          ) : y ? y instanceof Function ? y(h) : y : /* @__PURE__ */ e("div", { className: "w-16 h-16 flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600", children: /* @__PURE__ */ e(Ue, { className: "w-8 h-8 text-gray-400" }) }),
          /* @__PURE__ */ c("div", { children: [
            /* @__PURE__ */ e("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: m }),
            /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: v })
          ] })
        ]
      }
    );
  };
  return /* @__PURE__ */ c($, { children: [
    p && /* @__PURE__ */ e(
      _e,
      {
        src: s.src,
        alt: s.alt,
        isOpen: p,
        setIsOpen: S
      }
    ),
    /* @__PURE__ */ e("div", { className: `grid grid-cols-12 gap-4 ${i || ""}`, children: l.map((a) => a.renderCondition && typeof a.renderCondition == "function" && !a.renderCondition(h) ? null : a.type == "group" ? /* @__PURE__ */ e(f, { col: a }) : /* @__PURE__ */ e(d, { col: a })) })
  ] });
}
const ze = ({ config: h }) => {
  var oe, te, he, ue, pe, be, ge, ie, me, fe, ye, xe, ve, we, se, de, t, g, T;
  const {
    title: o,
    fetchData: l = async () => {
    },
    isStaticData: i = !1,
    tableConfig: s = {},
    modalConfig: n = {},
    filterConfig: p
  } = h, [S, D] = R(!0), [d, f] = R(!1), [a, m] = R([]), [v, u] = R(null), [y, x] = R({
    search: "",
    rows_per_page: 50,
    current_page: 1
  }), [N, I] = R({}), [P, M] = R(!1), [L, B] = R(!1), [F, C] = R(!1), [E, G] = R(!1), [Y, W] = R(!1), [U, K] = R(null), Z = (b, w) => {
    b === "edit" ? (K(w), C(!0)) : b === "view" ? (K(w), W(!0)) : b === "delete" && (K(w), G(!0));
  }, O = async (b, w, A = "", V = "") => {
    f(!0);
    try {
      const H = await (b == null ? void 0 : b());
      (A || H.message) && Me(A || H.message, {
        variant: "success"
      }), w == null || w(H);
    } catch (H) {
      (V || H.message) && Me(V || H.message, { variant: "error" });
    } finally {
      f(!1);
    }
  }, _ = (b) => {
    let w = b.newObject;
    i ? (m((A) => [w, ...A]), u((A) => ({
      ...A,
      current_page: 1
    }))) : (x((A) => ({
      ...A,
      current_page: 1
    })), y.current_page == 1 && ee()), B(!1);
  }, k = (b) => {
    let w = b.newObject, A = b.targetObject;
    i ? m(
      (V) => V.map(
        (H) => H.id === A.id ? { ...H, ...w } : H
      )
    ) : ee(), C(!1);
  }, j = (b) => {
    if (!b) {
      G(!1), K(null);
      return;
    }
    i ? m(
      (w) => w.filter((A) => A.id !== b.targetObject.id)
    ) : a.length == 1 && y.current_page > 1 ? x((w) => ({
      ...w,
      current_page: w.current_page - 1
    })) : ee(), G(!1), K(null);
  }, X = (b) => O(
    () => {
      var w, A;
      return (A = (w = n == null ? void 0 : n.addModal) == null ? void 0 : w.handleSubmit) == null ? void 0 : A.call(w, b);
    },
    _
  ), J = (b) => O(
    () => {
      var w, A;
      return (A = (w = n == null ? void 0 : n.editModal) == null ? void 0 : w.handleSubmit) == null ? void 0 : A.call(w, b, U);
    },
    k
  ), ee = async () => {
    D(!0), l == null || l({ ...y, ...N }).then((b) => {
      m(b.data), u(b.pagination);
    }).catch((b) => {
      Me(b.message, { variant: "error" });
    }).finally(() => {
      D(!1);
    });
  }, ne = (b) => {
    var w;
    I((A) => ({
      ...b
    })), (w = s == null ? void 0 : s.filter) != null && w.useServerSideFilters && M((A) => !A);
  }, ce = (b, w) => b.filter(
    (A) => Object.entries(w).every(([V, H]) => A[V] === H)
  ), le = Le(() => {
    var b;
    return (b = s == null ? void 0 : s.filter) != null && b.useServerSideFilters ? a : ce(a, N);
  }, [a, N]);
  return z(() => {
    ee();
  }, [
    y.search,
    y.rows_per_page,
    y.current_page,
    P
  ]), /* @__PURE__ */ e(
    ra,
    {
      maxSnack: 3,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right"
      },
      autoHideDuration: 3e3,
      action: (b) => /* @__PURE__ */ e(
        "button",
        {
          onClick: () => {
            window.dispatchEvent(
              new CustomEvent("closeSnackbar", { detail: b })
            );
          },
          className: "p-1 hover:bg-white/20 rounded-full transition-colors duration-200 text-white flex items-center justify-center",
          children: /* @__PURE__ */ e(Se, { className: "h-4 w-4" })
        }
      ),
      children: /* @__PURE__ */ c("div", { children: [
        /* @__PURE__ */ e(
          ba,
          {
            title: o,
            setShowAdd: B,
            description: h.description,
            buttonText: h.buttonText,
            showAddButton: !!n.addModal,
            config: {
              ...s,
              pagination: {
                ...s.pagination,
                ...v
              },
              data: le,
              setServerSidePaginationData: x,
              onMenuAction: Z,
              filterConfig: p,
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
              d || B(!1);
            },
            icon: (oe = n.addModal) == null ? void 0 : oe.icon,
            title: ((te = n.addModal) == null ? void 0 : te.title) || "Add New",
            size: ((he = n.addModal) == null ? void 0 : he.size) || "md",
            onFormSubmit: () => {
              var b;
              return (b = document.querySelector("#addForm")) == null ? void 0 : b.requestSubmit();
            },
            loadingBtn: d,
            actionButtons: ((ue = n == null ? void 0 : n.addModal) == null ? void 0 : ue.actionButtons) || [],
            children: /* @__PURE__ */ e(
              Ie,
              {
                config: (n == null ? void 0 : n.addModal) || {},
                onSubmit: X,
                initialData: {},
                type: "add",
                loading: d
              }
            )
          }
        ),
        /* @__PURE__ */ e(
          Ne,
          {
            isOpen: F,
            onClose: () => {
              d || C(!1);
            },
            icon: (pe = n.editModal) == null ? void 0 : pe.icon,
            title: ((be = n.editModal) == null ? void 0 : be.title) || "Edit",
            size: ((ge = n.editModal) == null ? void 0 : ge.size) || "md",
            onFormSubmit: () => {
              var b;
              return (b = document.querySelector("#editForm")) == null ? void 0 : b.requestSubmit();
            },
            actionButtons: ((ie = n == null ? void 0 : n.editModal) == null ? void 0 : ie.actionButtons) || [],
            loadingBtn: d,
            children: /* @__PURE__ */ e(
              Ie,
              {
                config: n.editModal || {},
                onSubmit: J,
                initialData: U,
                type: "edit",
                loading: d
              }
            )
          }
        ),
        E && /* @__PURE__ */ e(
          Ne,
          {
            isOpen: E,
            onClose: (b) => {
              j(b);
            },
            icon: ((me = n.deleteModal) == null ? void 0 : me.icon) || /* @__PURE__ */ e(re, { icon: "ph:warning-bold", className: "w-6 h-6 text-red-500" }),
            title: ((fe = n.deleteModal) == null ? void 0 : fe.title) || "Confirm Delete",
            size: ((ye = n.deleteModal) == null ? void 0 : ye.size) || "md",
            loading: d,
            actionButtons: ((xe = n == null ? void 0 : n.deleteModal) == null ? void 0 : xe.actionButtons) || [],
            executeFunction: O,
            selectedItem: U,
            children: /* @__PURE__ */ e("div", { className: "flex items-center space-x-2 py-3", children: /* @__PURE__ */ c("div", { children: [
              /* @__PURE__ */ e("p", { className: "text-md text-gray-700 dark:text-white", children: ((ve = n.deleteModal) == null ? void 0 : ve.confirmText) || "Are you sure you want to delete this item?" }),
              ((we = n.deleteModal) == null ? void 0 : we.referenceKey) && /* @__PURE__ */ e("p", { className: "text-md font-semibold text-gray-700 dark:text-white", children: U[(se = n.deleteModal) == null ? void 0 : se.referenceKey] })
            ] }) })
          }
        ),
        n.viewModal && /* @__PURE__ */ e(
          Ne,
          {
            isOpen: Y,
            onClose: () => {
              W(!1), K(null);
            },
            icon: (de = n.viewModal) == null ? void 0 : de.icon,
            title: ((t = n.viewModal) == null ? void 0 : t.title) || "View Details",
            size: ((g = n.viewModal) == null ? void 0 : g.size) || "lg",
            footerConfig: n == null ? void 0 : n.viewModal.footer,
            children: (T = n.viewModal) != null && T.component ? /* @__PURE__ */ e(n.viewModal.component, { data: U }) : /* @__PURE__ */ e(
              ga,
              {
                data: U,
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
}), ma = r.shape({
  title: r.string.isRequired,
  type: r.string.isRequired,
  variant: r.string,
  icon: r.node
}), fa = r.shape({
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
  menuList: r.arrayOf(ma)
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
}), ya = r.shape({
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
      table_head: r.arrayOf(fa).isRequired,
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
        fields: r.arrayOf(ya),
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
const xa = () => {
  if (typeof document > "u" || document.getElementById("react-admin-crud-manager-styles")) return;
  const h = document.createElement("style");
  h.id = "react-admin-crud-manager-styles";
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
  h.textContent = o, document.head.appendChild(h);
};
function Aa(h) {
  return z(() => {
    xa();
  }, []), /* @__PURE__ */ e($, { children: /* @__PURE__ */ e(ze, { config: h.config }) });
}
export {
  Aa as default
};
//# sourceMappingURL=index.es.js.map
