import { jsx as e, Fragment as D, jsxs as h } from "react/jsx-runtime";
import Me, { useState as C, useRef as X, useEffect as K, useMemo as Fe } from "react";
import { Info as Xe, ChevronDown as $e, Search as Ie, Check as ea, X as Le, User as Ae, Plus as aa, Filter as ra, ChevronLeft as ta, ChevronRight as na, EllipsisVertical as la, Music as oa } from "lucide-react";
import { createPortal as ia } from "react-dom";
import { Icon as ne } from "@iconify/react";
import { Editor as sa } from "@tinymce/tinymce-react";
import { enqueueSnackbar as ce, SnackbarProvider as da } from "notistack";
import n from "prop-types";
const Ge = (o, l = "DD MMM YYYY") => {
  if (!o) return "N/A";
  const t = new Date(o);
  if (isNaN(t)) return "Invalid Date";
  const s = (d) => String(d).padStart(2, "0"), i = {
    YYYY: t.getFullYear(),
    YY: String(t.getFullYear()).slice(-2),
    MMMM: t.toLocaleString("en-US", { month: "long" }),
    MMM: t.toLocaleString("en-US", { month: "short" }),
    MM: s(t.getMonth() + 1),
    M: t.getMonth() + 1,
    DD: s(t.getDate()),
    D: t.getDate(),
    dddd: t.toLocaleString("en-US", { weekday: "long" }),
    ddd: t.toLocaleString("en-US", { weekday: "short" }),
    HH: s(t.getHours()),
    hh: s(t.getHours() % 12 || 12),
    mm: s(t.getMinutes()),
    ss: s(t.getSeconds()),
    A: t.getHours() >= 12 ? "PM" : "AM"
  };
  return l.replace(
    /YYYY|YY|MMMM|MMM|MM|M|DD|D|dddd|ddd|HH|hh|mm|ss|A/g,
    (d) => i[d]
  );
}, ca = (o, l, t = []) => {
  if (!(l != null && l.trim())) return o;
  const s = l.toLowerCase(), i = (d) => d == null ? [] : typeof d == "object" ? Object.values(d).flatMap(i) : [String(d)];
  return o.filter((d) => {
    let r = [];
    return t.length > 0 ? t.forEach((x) => {
      d[x] !== void 0 && r.push(...i(d[x]));
    }) : r = i(d), r.some(
      (x) => x.toLowerCase().includes(s)
    );
  });
}, Q = Me.forwardRef(
  ({
    className: o = "",
    variant: l = "contained",
    color: t = "default",
    size: s = "default",
    fullWidth: i = !1,
    children: d,
    ...r
  }, x) => {
    var g;
    const S = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", c = {
      sm: "h-8 px-3 rounded-md text-sm",
      md: "h-9 px-4 rounded-md text-sm",
      lg: "h-11 px-6 rounded-md text-base",
      xl: "h-12 px-8 rounded-lg text-lg",
      default: "h-9 px-4 rounded-md text-sm"
    }, b = {
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
    }, u = ((g = b[t]) == null ? void 0 : g[l]) || b.default.contained, w = c[s], f = `
      ${S} 
      ${u} 
      ${w} 
      ${i ? "w-full" : ""} 
      ${o}
    `.trim();
    return /* @__PURE__ */ e(
      "button",
      {
        ref: x,
        type: r.type || "button",
        className: f,
        ...r,
        children: d
      }
    );
  }
);
Q.displayName = "Button";
function q({ label: o, required: l = !1, infoText: t = "" }) {
  return /* @__PURE__ */ e(D, { children: /* @__PURE__ */ h("label", { className: "flex text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: [
    o,
    l && /* @__PURE__ */ e("span", { className: "ml-1", children: "*" }),
    t && /* @__PURE__ */ h("span", { className: "ml-2 relative group inline-flex items-center cursor-pointer", children: [
      /* @__PURE__ */ e(Xe, { className: "w-4 h-4 text-gray-500 dark:text-gray-400" }),
      /* @__PURE__ */ e(
        "span",
        {
          className: `absolute left-1/2 top-full mt-2\r
                   w-max max-w-xs bg-white text-black dark:bg-black dark:text-white text-xs\r
                   rounded px-2 py-1 opacity-0 shadow-lg\r
                   group-hover:opacity-100 transition-opacity\r
                   duration-200 pointer-events-none z-50`,
          children: t
        }
      )
    ] })
  ] }) });
}
const ua = ({
  options: o = [],
  value: l = "",
  defaultValue: t = "",
  onChange: s,
  placeholder: i = "Select option",
  className: d = "",
  disabled: r = !1,
  search: x = !1,
  label: S = "",
  required: c = !1,
  name: b = "",
  parentClass: u = "",
  multiple: w = !1,
  // ✅ NEW
  dropdownMaxHeight: f = "",
  formData: g = {},
  dependencyKey: N = ""
}) => {
  var I;
  const [y, M] = C(!1), [j, U] = C(""), [L, O] = C(!0), E = X(null), F = X(null), [T, B] = C([]);
  let G = l || l === !1 ? l : t;
  const _ = (k) => k == null || k === "" ? "" : String(typeof k == "boolean" ? k : k ?? "");
  K(
    () => {
      (async () => {
        if (typeof o == "function") {
          const P = await o(g);
          B(P);
        } else
          B(o || []);
      })();
    },
    N ? [o, g == null ? void 0 : g[N]] : [o]
  );
  const J = w ? (G || []).map(_) : _(G), Z = T.filter(
    (k) => k.label.toLowerCase().includes(j.toLowerCase())
  ), A = (k) => {
    const P = _(k);
    return w ? J.includes(P) : P === J;
  };
  K(() => {
    const k = (P) => {
      E.current && !E.current.contains(P.target) && (M(!1), U(""));
    };
    return document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, []), K(() => {
    if (y && E.current) {
      const k = E.current.getBoundingClientRect(), W = window.innerHeight - k.bottom;
      O(W < 200);
    }
  }, [y]), K(() => {
    y && F.current && F.current.focus();
  }, [y]);
  const z = (k) => {
    let P = k;
    if (k === "true" ? P = !0 : k === "false" && (P = !1), w) {
      const W = J.includes(_(k));
      let H;
      W ? H = l.filter(
        (ae) => _(ae) !== _(k)
      ) : H = [...l || [], P], s(H);
    } else
      s(P), M(!1);
    U("");
  }, V = w ? T.filter((k) => A(k.value)).map((k) => k.label).join(", ") : (I = T.find((k) => A(k.value))) == null ? void 0 : I.label;
  return K(() => {
    (G || G === !1) && setTimeout(() => {
      s(G);
    }, 100);
  }, []), /* @__PURE__ */ h("div", { className: u || "col-span-12", children: [
    /* @__PURE__ */ e(q, { label: S, required: c }),
    /* @__PURE__ */ h("div", { className: `relative ${d}`, ref: E, children: [
      /* @__PURE__ */ e(
        "select",
        {
          name: "hidden_select_for_validation",
          value: V || "",
          required: c,
          multiple: w,
          className: "absolute opacity-0 right-1/2 top-[80%] -translate-x-1/2 -translate-y-1/2 pointer-events-none h-[10px]",
          children: /* @__PURE__ */ e("option", { hidden: !0, value: V, children: V })
        }
      ),
      /* @__PURE__ */ h(
        "button",
        {
          type: "button",
          onClick: () => !r && M(!y),
          disabled: r,
          className: `w-full h-10 px-3 border border-gray-300 dark:border-gray-600 rounded-md text-left text-sm flex items-center justify-between 
          ${V ? "dark:text-white" : "text-gray-500 dark:text-gray-400"} 
          ${r ? "opacity-50 cursor-not-allowed" : "dark:bg-gray-700"}`,
          children: [
            /* @__PURE__ */ e("span", { className: "truncate", children: V || i }),
            /* @__PURE__ */ e(
              $e,
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
            ${L ? "bottom-full mb-1" : "top-full mt-1"}`,
          children: [
            x && /* @__PURE__ */ e("div", { className: "p-2 border-b border-gray-200 dark:border-gray-600", children: /* @__PURE__ */ h("div", { className: "relative", children: [
              /* @__PURE__ */ e(Ie, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }),
              /* @__PURE__ */ e(
                "input",
                {
                  ref: F,
                  type: "text",
                  value: j,
                  onChange: (k) => U(k.target.value),
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
                  maxHeight: f || ""
                },
                children: Z.length > 0 ? Z.map((k) => /* @__PURE__ */ h(
                  "button",
                  {
                    type: "button",
                    onClick: () => z(String(k.value)),
                    className: `w-full px-3 py-2 text-left text-sm flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 
                    ${A(k.value) ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300" : ""}`,
                    children: [
                      /* @__PURE__ */ e("span", { children: k.label }),
                      w && A(k.value) && /* @__PURE__ */ e(ea, { className: "w-4 h-4" })
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
  ] }, b);
}, Ke = Me.forwardRef(
  ({
    label: o,
    required: l,
    parentClass: t = "col-span-12",
    className: s = "",
    value: i,
    onChange: d,
    disabled: r = !1,
    ...x
  }, S) => /* @__PURE__ */ h("div", { className: `flex justify-between ${t}`, children: [
    o && /* @__PURE__ */ e(q, { label: o, required: l }),
    /* @__PURE__ */ h("label", { className: "relative inline-flex items-center cursor-pointer", children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          ref: S,
          className: "sr-only peer",
          checked: i,
          onChange: (c) => d(c.target.checked),
          disabled: r,
          ...x
        }
      ),
      /* @__PURE__ */ e(
        "div",
        {
          className: `
              w-11 h-6 bg-gray-200 peer-focus:outline-none
              rounded-full peer dark:bg-gray-700
              peer-checked:bg-primary-600
              peer-disabled:opacity-50 peer-disabled:cursor-not-allowed
              transition-colors duration-200
              ${s}
            `
        }
      ),
      /* @__PURE__ */ e(
        "div",
        {
          className: `\r
              absolute left-1 top-1\r
              w-4 h-4 bg-white rounded-full\r
              transition-transform duration-200\r
              peer-checked:translate-x-5\r
            `
        }
      )
    ] })
  ] })
);
Ke.displayName = "Switch";
const Se = [
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
function ha({
  label: o = "",
  value: l = "",
  name: t = "",
  parentClass: s = "",
  onChange: i,
  disabled: d = !1,
  required: r = !1,
  placeholder: x = "Phone number",
  search: S = !1,
  countriesList: c = !1,
  defaultCountry: b = ""
}) {
  const u = (T) => Se.find((B) => B.code == T), [w, f] = C(
    u(b) || Se[0]
  ), [g, N] = C(""), [y, M] = C(!1), [j, U] = C(""), L = X();
  K(() => {
    if (typeof l == "string" && l.startsWith("+")) {
      const T = Se.filter((B) => l.startsWith("+" + B.phone)).sort((B, G) => G.phone.length - B.phone.length)[0];
      if (T) {
        f(T), N(l.replace("+" + T.phone, ""));
        return;
      }
    }
    N(l);
  }, [l]);
  const O = (T) => {
    const B = T.target.value.replace(/\D/g, "");
    N(B), w && i && i("+" + w.phone + B);
  }, E = (T) => {
    f(T), i && i("+" + T.phone + g), M(!1), U("");
  };
  K(() => {
    const T = (B) => {
      L.current && !L.current.contains(B.target) && M(!1);
    };
    return document.addEventListener("mousedown", T), () => document.removeEventListener("mousedown", T);
  }, []);
  const F = Se.filter(
    (T) => T.label.toLowerCase().includes(j.toLowerCase()) || T.phone.includes(j)
  );
  return c ? /* @__PURE__ */ e(D, { children: /* @__PURE__ */ h("div", { className: s || "col-span-12", children: [
    /* @__PURE__ */ e(q, { label: o, required: r }),
    /* @__PURE__ */ h("div", { className: "relative ", ref: L, children: [
      /* @__PURE__ */ h(
        "div",
        {
          className: `h-[40px] flex items-center border rounded-md px-2 bg-white dark:bg-gray-700 transition-all
  ${y ? "ring-0.5 ring-blue-100 border-blue-300" : "border-gray-300 dark:border-gray-600"}
  ${d ? "opacity-60 cursor-not-allowed" : ""}`,
          children: [
            /* @__PURE__ */ h(
              "button",
              {
                type: "button",
                disabled: d,
                onClick: () => M(!y),
                className: "flex items-center gap-1 pr-2 border-r border-gray-300 dark:border-gray-700 focus:outline-none",
                children: [
                  w ? /* @__PURE__ */ e(
                    "img",
                    {
                      src: `https://flagcdn.com/w20/${w.code.toLowerCase()}.png`,
                      alt: w.code,
                      className: "w-5 h-3 object-cover"
                    }
                  ) : /* @__PURE__ */ e("span", { className: "text-gray-400 text-xs", children: "🌐" }),
                  /* @__PURE__ */ e($e, { className: "w-3 h-3 text-gray-500" })
                ]
              }
            ),
            w && /* @__PURE__ */ h("span", { className: "ml-2 text-sm text-gray-700 dark:text-gray-200 whitespace-nowrap", children: [
              "+",
              w.phone
            ] }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "tel",
                value: g,
                onChange: O,
                required: r,
                disabled: d || !w,
                placeholder: w ? x : "Select a country",
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
                value: w && g ? "+" + w.phone + g : "",
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
          /* @__PURE__ */ e(Ie, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" }),
          /* @__PURE__ */ e(
            "input",
            {
              type: "text",
              value: j,
              onChange: (T) => U(T.target.value),
              placeholder: "Search country...",
              className: "w-full pl-9 pr-3 py-2 text-sm border rounded-md bg-white dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none "
            }
          )
        ] }) }),
        F.map((T) => /* @__PURE__ */ h(
          "button",
          {
            type: "button",
            onClick: () => E(T),
            className: "w-full flex items-center gap-2 px-2 py-1 text-sm hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100",
            children: [
              /* @__PURE__ */ e(
                "img",
                {
                  src: `https://flagcdn.com/w20/${T.code.toLowerCase()}.png`,
                  alt: T.code,
                  className: "w-5 h-3 object-cover"
                }
              ),
              /* @__PURE__ */ h("span", { children: [
                T.label,
                " (+",
                T.phone,
                ")"
              ] })
            ]
          },
          T.code
        ))
      ] })
    ] })
  ] }, t) }) : /* @__PURE__ */ e(D, { children: /* @__PURE__ */ h("div", { className: s || "col-span-12", children: [
    /* @__PURE__ */ e(q, { label: o, required: r }),
    /* @__PURE__ */ e(
      "input",
      {
        type: "text",
        value: l,
        onChange: (B) => {
          const G = B.target.value.replace(/[^+\d]/g, ""), _ = G.startsWith("+") ? "+" + G.replace(/[+]/g, "").slice(0) : G;
          i(_);
        },
        placeholder: x,
        disabled: d,
        required: r,
        className: `w-full h-10 px-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md \r
        bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none \r
        focus:ring-1 focus:ring-blue-300 dark:focus:ring-blue-200`,
        inputMode: "tel",
        pattern: "^\\+\\d{1,15}$"
      }
    )
  ] }, t) });
}
const _e = Me.forwardRef(
  ({ className: o = "", label: l, required: t, ...s }, i) => {
    const d = `
      placeholder-gray-400 dark:placeholder-gray-400
      ${o}
    `.trim();
    return /* @__PURE__ */ e(D, { children: /* @__PURE__ */ h("div", { className: s.parentClass || "col-span-12", children: [
      /* @__PURE__ */ e(q, { label: l, required: t }),
      /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ e(
        "textarea",
        {
          className: d,
          ref: i,
          required: t,
          ...s
        }
      ) })
    ] }, s.name) });
  }
);
_e.displayName = "TextArea";
const ba = ({
  label: o = "",
  value: l = null,
  onChange: t,
  required: s = !1,
  accept: i = "image/*",
  id: d,
  dragDrop: r = !1,
  name: x = "",
  parentClass: S = ""
}) => {
  const [c, b] = C(l), [u, w] = C(!1), f = X(null);
  K(() => (l instanceof File ? b({ file: l, preview: URL.createObjectURL(l) }) : (l != null && l.preview, b(l)), () => {
    c != null && c.preview && c.preview.startsWith("blob:") && URL.revokeObjectURL(c.preview);
  }), [l]);
  const g = (L) => {
    if (!L || L.length === 0)
      return;
    const O = L[0], E = URL.createObjectURL(O), F = { file: O, preview: E };
    c != null && c.preview && c.preview.startsWith("blob:") && URL.revokeObjectURL(c.preview), b(F), t == null || t(O);
  }, N = (L) => {
    L && L.stopPropagation(), c != null && c.preview && c.preview.startsWith("blob:") && URL.revokeObjectURL(c.preview), b(null), t == null || t(null), f.current && (f.current.value = "");
  }, y = (L) => {
    r && (L.preventDefault(), w(!0));
  }, M = (L) => {
    r && (L.preventDefault(), w(!1));
  }, j = (L) => {
    r && (L.preventDefault(), w(!1), g(L.dataTransfer.files));
  }, U = () => {
    f.current.click();
  };
  return /* @__PURE__ */ e(D, { children: /* @__PURE__ */ h("div", { className: S || "col-span-12", children: [
    /* @__PURE__ */ e(q, { label: o, required: s }),
    /* @__PURE__ */ h(
      "div",
      {
        className: `relative rounded-md p-2 transition-all ${u ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"}`,
        onDragOver: y,
        onDragLeave: M,
        onDrop: j,
        children: [
          /* @__PURE__ */ e(
            "input",
            {
              ref: f,
              id: d,
              type: "file",
              accept: i,
              onChange: (L) => g(L.target.files),
              required: s && !c,
              className: "absolute opacity-0 right-[50%] top-[80%] -translate-y-1/2 pointer-events-none h-[10px]"
            }
          ),
          /* @__PURE__ */ h(
            "div",
            {
              className: `flex items-center space-x-4 transition-all ${u ? "opacity-50" : ""}`,
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
                    !s && /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        onClick: N,
                        className: "absolute top-0 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
                        "aria-label": "Remove image",
                        children: /* @__PURE__ */ e(ne, { icon: "mdi:close", className: "w-3 h-3" })
                      }
                    )
                  ] })
                ) : (
                  // Placeholder icon
                  /* @__PURE__ */ e("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ e(
                    ne,
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
                      onClick: U,
                      variant: "outlined",
                      color: "default",
                      children: c ? "Change Image" : "Select Image"
                    }
                  ),
                  r && !c && /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop" })
                ] })
              ]
            }
          ),
          r && u && /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-md", children: /* @__PURE__ */ e("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg", children: "Drop image here" }) })
        ]
      }
    )
  ] }, x) });
}, ze = Me.forwardRef(
  ({
    label: o,
    required: l,
    parentClass: t = "",
    className: s = "",
    type: i = "text",
    onKeyDown: d,
    negativeNumberAllow: r = !0,
    defaultValue: x = "",
    field: S = {},
    ...c
  }, b) => {
    const [u, w] = C(!1), f = (N) => {
      if (i === "number") {
        if (["e", "E", "+"].includes(N.key)) {
          N.preventDefault();
          return;
        }
        if (r == !1 && N.key === "-") {
          N.preventDefault();
          return;
        }
        if (["ArrowUp", "ArrowDown"].includes(N.key)) {
          N.preventDefault();
          return;
        }
      }
      d == null || d(N);
    }, g = `
      h-10 placeholder-gray-400 dark:placeholder-gray-400
      ${i === "password" ? "pr-10" : ""}
      ${i === "number" ? "no-spinner" : ""}
      ${s}
    `.trim();
    return K(() => {
      if (x) {
        let N = c.value || x;
        setTimeout(() => {
          var y;
          (y = c.onChange) == null || y.call(c, { target: { value: N } });
        }, 100);
      }
    }, [x]), /* @__PURE__ */ e(D, { children: /* @__PURE__ */ h("div", { className: t || "col-span-12", children: [
      /* @__PURE__ */ e(
        q,
        {
          label: o,
          required: l,
          infoText: S.infoText
        }
      ),
      /* @__PURE__ */ h("div", { className: "relative", children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: i === "password" && u ? "text" : i,
            ref: b,
            required: l,
            onKeyDown: f,
            className: g,
            ...c
          }
        ),
        i === "password" && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            tabIndex: -1,
            onClick: () => w((N) => !N),
            className: "absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200",
            children: /* @__PURE__ */ e(
              ne,
              {
                icon: u ? "mdi:eye-outline" : "mdi:eye-off-outline",
                className: "w-5 h-5"
              }
            )
          }
        )
      ] })
    ] }, c.name) });
  }
);
ze.displayName = "Input";
const pa = ({
  key: o,
  editorKey: l = "",
  value: t = "",
  onChange: s,
  label: i = "",
  required: d = !1,
  placeholder: r = "",
  parentClass: x = "col-span-12",
  height: S = 400,
  inline: c = !1,
  disabled: b = !1,
  plugins: u,
  toolbar: w,
  menubar: f = !1,
  fontFamily: g = "Inter, sans-serif",
  initConfig: N = {},
  imageUploadHandler: y
  // ✅ Promise function passed from parent
}) => /* @__PURE__ */ h("div", { className: x, children: [
  i && /* @__PURE__ */ e(q, { label: i, required: d }),
  /* @__PURE__ */ e(
    sa,
    {
      apiKey: l,
      value: t,
      disabled: b,
      init: {
        height: S,
        inline: c,
        menubar: f,
        branding: !1,
        statusbar: !0,
        automatic_uploads: !0,
        images_upload_handler: (L) => new Promise((O, E) => {
          if (!y) {
            O(`data:${L.blob().type};base64,${L.base64()}`);
            return;
          }
          y(L).then((F) => {
            F ? O(F) : E("Upload failed: No URL returned");
          }).catch((F) => {
            E(
              typeof F == "string" ? F : (F == null ? void 0 : F.message) || "Image upload failed"
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
        toolbar: w ?? "undo redo | blocks | bold italic underline forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media table | removeformat | code fullscreen preview",
        placeholder: r,
        content_style: `
            body {
                font-family: ${g};
            }
            `,
        ...N
      },
      onEditorChange: (L) => {
        s && s(L);
      }
    }
  )
] }, o), ga = ({
  name: o = "",
  label: l = "",
  // label for single checkbox
  options: t = [],
  // array of { label, value } for multiple
  value: s = null,
  // boolean for single, array for multiple, or string for single select
  onChange: i,
  disabled: d = !1,
  required: r = !1,
  parentClass: x = "col-span-12",
  className: S = "",
  multiSelect: c = !1
  // ✅ if true, only one option can be selected (like radio)
}) => {
  const b = Array.isArray(t) && t.length > 0, u = (g) => b ? c ? Array.isArray(s) && s.includes(g) : s === g : !!s, w = (g) => {
    i == null || i(g.target.checked, o);
  }, f = (g, N) => {
    if (i)
      if (!c)
        i(N ? g : "", o);
      else {
        const y = Array.isArray(s) ? [...s] : [];
        if (N)
          y.includes(g) || y.push(g);
        else {
          const M = y.indexOf(g);
          M > -1 && y.splice(M, 1);
        }
        i(y, o);
      }
  };
  return b ? /* @__PURE__ */ e(D, { children: /* @__PURE__ */ h("div", { className: `${x}`, children: [
    /* @__PURE__ */ e(q, { label: l, required: r }),
    /* @__PURE__ */ e("div", { className: "flex flex-col space-y-2", children: t.map((g, N) => /* @__PURE__ */ h("div", { className: "flex items-center", children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          name: o,
          value: g.value,
          checked: u(g.value),
          disabled: d || g.disabled,
          required: r && N === 0,
          onChange: (y) => f(g.value, y.target.checked),
          className: `h-4 w-4 cursor-pointer text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${S}`
        },
        o
      ),
      g.label && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: o,
          className: "ml-2 text-sm text-gray-700 dark:text-gray-200 select-none",
          children: g.label
        }
      )
    ] }, g.value || g.label)) })
  ] }) }) : /* @__PURE__ */ h("div", { className: `flex items-center ${x}`, children: [
    /* @__PURE__ */ e(
      "input",
      {
        type: "checkbox",
        name: o,
        checked: u(),
        disabled: d,
        required: r,
        onChange: w,
        className: `h-4 w-4 text-blue-600 cursor-pointer border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${S}`
      }
    ),
    l && /* @__PURE__ */ e(
      "label",
      {
        htmlFor: o,
        className: "ml-2 text-sm text-gray-700 dark:text-gray-200 select-none",
        children: l
      }
    )
  ] });
}, ma = ({
  label: o = "",
  value: l = null,
  onChange: t,
  required: s = !1,
  accept: i = "audio/*",
  id: d,
  dragDrop: r = !1,
  name: x = "",
  parentClass: S = ""
}) => {
  const [c, b] = C(null), [u, w] = C(!1), f = X(null);
  K(() => {
    if (!l) {
      g(), b(null);
      return;
    }
    if (l instanceof File) {
      const O = URL.createObjectURL(l);
      return b({ file: l, preview: O }), () => {
        URL.revokeObjectURL(O);
      };
    } else typeof l == "string" ? b({ preview: l }) : l != null && l.preview && b(l);
  }, [l]);
  const g = () => {
    c != null && c.preview && c.preview.startsWith("blob:") && URL.revokeObjectURL(c.preview);
  }, N = (O) => {
    if (!O || O.length === 0)
      return;
    const E = O[0], F = URL.createObjectURL(E);
    g(), b({ file: E, preview: F }), t == null || t(E);
  }, y = (O) => {
    O && O.stopPropagation(), g(), b(null), t == null || t(null), f.current && (f.current.value = "");
  }, M = (O) => {
    r && (O.preventDefault(), w(!0));
  }, j = (O) => {
    r && (O.preventDefault(), w(!1));
  }, U = (O) => {
    r && (O.preventDefault(), w(!1), N(O.dataTransfer.files));
  }, L = () => {
    f.current.click();
  };
  return /* @__PURE__ */ h("div", { className: S || "col-span-12", children: [
    /* @__PURE__ */ e(q, { label: o, required: s }),
    /* @__PURE__ */ h(
      "div",
      {
        className: `relative rounded-lg p-2 transition-all ${u ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"}`,
        onDragOver: M,
        onDragLeave: j,
        onDrop: U,
        children: [
          /* @__PURE__ */ e(
            "input",
            {
              ref: f,
              id: d,
              type: "file",
              accept: i,
              onChange: (O) => N(O.target.files),
              required: s && !c,
              className: "absolute opacity-0 right-[50%] top-[80%] -translate-y-1/2 pointer-events-none h-[10px]"
            }
          ),
          /* @__PURE__ */ e(
            "div",
            {
              className: `flex items-center space-x-4 transition-all ${u ? "opacity-50" : ""}`,
              children: c ? (
                // Audio player with close button and change button
                /* @__PURE__ */ h("div", { className: "flex items-center space-x-4", children: [
                  /* @__PURE__ */ h("div", { className: "relative w-full", children: [
                    !s && /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        onClick: y,
                        className: "absolute top-0 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800",
                        "aria-label": "Remove audio",
                        children: /* @__PURE__ */ e(ne, { icon: "mdi:close", className: "w-3 h-3" })
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
                  /* @__PURE__ */ e(Q, { type: "button", onClick: L, children: /* @__PURE__ */ e("span", { children: "Change Audio File" }) })
                ] })
              ) : (
                // Empty state with upload button
                /* @__PURE__ */ h("div", { className: "flex items-center justify-center space-x-4", children: [
                  /* @__PURE__ */ e("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ e(ne, { icon: "mdi:music", className: "text-gray-400 w-10 h-10" }) }),
                  /* @__PURE__ */ e(
                    Q,
                    {
                      type: "button",
                      onClick: L,
                      variant: "outlined",
                      children: /* @__PURE__ */ e("span", { children: "Choose Audio File" })
                    }
                  ),
                  r && /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop your audio file here" })
                ] })
              )
            }
          ),
          r && u && !c && /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-lg", children: /* @__PURE__ */ e("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg", children: "Drop audio here" }) })
        ]
      }
    )
  ] }, x);
}, Pe = ({ src: o, alt: l = "preview", isOpen: t, setIsOpen: s }) => {
  const i = () => s(!1);
  return K(() => {
    const d = (r) => {
      r.key === "Escape" && i();
    };
    return t && (document.body.style.overflow = "hidden", document.addEventListener("keydown", d)), () => {
      document.body.style.overflow = "", document.removeEventListener("keydown", d);
    };
  }, [t]), /* @__PURE__ */ e(D, { children: /* @__PURE__ */ h(
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
            children: /* @__PURE__ */ e(Le, { size: 20 })
          }
        ),
        /* @__PURE__ */ e(
          "div",
          {
            className: "max-w-5xl w-full px-4 transform transition-all duration-200 scale-95 animate-in zoom-in-95",
            onClick: (d) => d.stopPropagation(),
            children: /* @__PURE__ */ e(
              "img",
              {
                src: o,
                alt: l,
                className: "w-full max-h-[90vh] object-contain rounded-xl"
              }
            )
          }
        )
      ]
    }
  ) });
}, He = ({ col: o, data: l }) => {
  let t = l[o.titleKey], s = l[o.subtitleKey], i = l[o.imageKey], d = o.fallback_icon;
  const [r, x] = C(null), [S, c] = C(!1), b = (u) => {
    u && u.src instanceof File && (u = { ...u, src: URL.createObjectURL(u.src) }), x(u), c(!0);
  };
  return /* @__PURE__ */ h(D, { children: [
    S && /* @__PURE__ */ e(
      Pe,
      {
        src: r.src,
        alt: r.alt,
        isOpen: S,
        setIsOpen: c
      }
    ),
    /* @__PURE__ */ h(
      "div",
      {
        className: `col-span-12 flex items-center space-x-4 p-4 rounded-xl 
      bg-gray-100 dark:bg-gray-900 
      ${o.blockClass}`,
        children: [
          i ? /* @__PURE__ */ e(
            "img",
            {
              src: i instanceof File ? URL.createObjectURL(i) : i,
              alt: t,
              onClick: () => b({ src: i, alt: t }),
              className: "w-16 h-16 cursor-pointer rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
            }
          ) : d ? d instanceof Function ? d(l) : d : /* @__PURE__ */ e("div", { className: "w-16 h-16 flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600", children: /* @__PURE__ */ e(Ae, { className: "w-8 h-8 text-gray-400" }) }),
          /* @__PURE__ */ h("div", { children: [
            /* @__PURE__ */ e("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: t }),
            /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: s })
          ] })
        ]
      }
    )
  ] });
}, Ye = ({ col: o, data: l }) => {
  let t = l[o.titleKey], s = l[o.subtitleKey], i = l[o.imageKey], d = o.label, r = o == null ? void 0 : o.icon, x = o.fallback_icon;
  const [S, c] = C(null), [b, u] = C(!1), w = (f) => {
    f && f.src instanceof File && (f = { ...f, src: URL.createObjectURL(f.src) }), c(f), u(!0);
  };
  return /* @__PURE__ */ h(D, { children: [
    b && /* @__PURE__ */ e(
      Pe,
      {
        src: S.src,
        alt: S.alt,
        isOpen: b,
        setIsOpen: u
      }
    ),
    /* @__PURE__ */ h(
      "div",
      {
        className: `col-span-12 flex items-center space-x-4 p-4 rounded-xl 
      bg-gray-100 dark:bg-gray-900 
      ${o.blockClass}`,
        children: [
          r && /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: r }),
          /* @__PURE__ */ h("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ e("p", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: d }),
            /* @__PURE__ */ h("div", { className: "flex items-center", children: [
              i ? /* @__PURE__ */ e(
                "img",
                {
                  src: i instanceof File ? URL.createObjectURL(i) : i,
                  alt: t,
                  onClick: () => w({ src: i, alt: t }),
                  className: "w-8 h-8 cursor-pointer rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
                }
              ) : x ? x instanceof Function ? x(l) : x : /* @__PURE__ */ e("div", { className: "w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600", children: /* @__PURE__ */ e(Ae, { className: "w-6 h-6 text-gray-400" }) }),
              /* @__PURE__ */ h("div", { className: "ml-2", children: [
                /* @__PURE__ */ e("p", { className: "mb-0 text-sm text-gray-900 dark:text-white break-words", children: t }),
                /* @__PURE__ */ e("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: s })
              ] })
            ] })
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
}, Ve = ({
  label: o,
  variant: l = "contained",
  // contained | outline | soft
  color: t = "green",
  className: s = ""
}) => {
  const i = Be[t] || Be.green, d = Ue[l] || Ue.contained, r = l === "outline" ? i.border : i.bg;
  return /* @__PURE__ */ e(
    "span",
    {
      className: `inline-flex justify-center items-center rounded-sm text-xs font-semibold px-3 py-1 min-w-[78px]
        ${r}
        ${d}
        ${s}`,
      children: o
    }
  );
}, We = ({ col: o, data: l }) => {
  var S;
  let t = o == null ? void 0 : o.icon, s = o.label, i = l[o.key], d = o.type, r = o.variant || "outline", x = o.defaultColor;
  if (d === "chip" && ((S = o.chipOptions) == null ? void 0 : S.length) > 0) {
    let c = o == null ? void 0 : o.chipOptions.find((b) => b.value == i);
    c && (i = c.label, x = c.color);
  }
  return /* @__PURE__ */ h(
    "div",
    {
      className: `col-span-12 flex items-center space-x-4 p-4 rounded-xl 
                  bg-gray-100 dark:bg-gray-900 ${o.blockClass || ""}`,
      children: [
        t && /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: t }),
        /* @__PURE__ */ h("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ e("p", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: s }),
          d === "chip" ? /* @__PURE__ */ e(
            Ve,
            {
              label: i,
              variant: r,
              color: x,
              className: "mt-1"
            }
          ) : (
            /* TINY EDITOR */
            d === "tinyEditor" ? /* @__PURE__ */ e(
              "p",
              {
                className: "mt-1 text-sm text-gray-900 dark:text-white break-words",
                dangerouslySetInnerHTML: {
                  __html: i
                }
              }
            ) : d === "audio" ? i ? /* @__PURE__ */ e(
              "audio",
              {
                controls: !0,
                src: i instanceof File ? URL.createObjectURL(i) : i,
                onClick: (c) => c.stopPropagation(),
                className: "shadow-md rounded-full mt-1"
              },
              i instanceof File ? URL.createObjectURL(i) : i
            ) : /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-gray-400", children: "N/A" }) : (
              /* DEFAULT */
              /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-gray-900 dark:text-white break-words", children: d == "date" ? /* @__PURE__ */ e("span", { children: Ge(i, o.format || "DD MMM YYYY") }) : i || "N/A" })
            )
          )
        ] })
      ]
    }
  );
}, fa = ({
  value: o = !0,
  onChange: l,
  text: t,
  options: s = [],
  label: i,
  required: d,
  name: r = "",
  disabled: x = !1,
  parentClass: S = ""
}) => {
  const c = s.length > 0 ? s : [
    { label: "Active", value: !0 },
    { label: "Inactive", value: !1 }
  ];
  return /* @__PURE__ */ e(D, { children: /* @__PURE__ */ h("div", { className: S || "col-span-12", children: [
    /* @__PURE__ */ e(q, { label: i, required: d }),
    /* @__PURE__ */ h("div", { className: "flex items-center justify-between h-10 gap-4 bg-gray-100 dark:bg-gray-700 px-3 rounded-md border border-gray-100 dark:border-gray-600", children: [
      t && /* @__PURE__ */ e("p", { className: "text-xs text-gray-600 dark:text-gray-400 flex-shrink overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px]", children: t }),
      /* @__PURE__ */ e("div", { className: "flex items-center gap-6", children: c.map((b, u) => /* @__PURE__ */ h(
        "label",
        {
          className: "flex items-center gap-2 cursor-pointer select-none",
          children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "radio",
                name: "switch-field",
                required: d && u === 0,
                value: b.value,
                disabled: x,
                checked: o === b.value,
                onChange: () => l(b.value),
                className: "w-4 h-4  border-gray-300 cursor-pointer"
              }
            ),
            /* @__PURE__ */ e("span", { className: "text-sm text-gray-700 dark:text-white", children: b.label })
          ]
        },
        u
      )) })
    ] })
  ] }, r) });
}, qe = ({ field: o, formData: l, handleChange: t }) => {
  const {
    key: s,
    label: i,
    type: d,
    options: r,
    placeholder: x,
    rows: S,
    inputClass: c,
    search: b,
    accept: u,
    text: w,
    required: f = !1,
    minLength: g,
    dragDrop: N,
    parentClass: y,
    countriesList: M,
    defaultCountry: j,
    multiple: U,
    dropdownMaxHeight: L,
    editorKey: O,
    fontFamily: E,
    disabled: F,
    negativeNumberAllow: T,
    defaultValue: B,
    renderCondition: G,
    optionDependencyKey: _,
    pattern: J,
    renderType: Z
  } = o;
  let A = l == null ? void 0 : l[s];
  A == null && (A = "");
  const z = x || (d === "select" ? `Select ${i}` : `Enter ${i}`), V = "w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm focus:outline-none focus:ring-1 focus:ring-blue-200 bg-white text-black dark:bg-gray-700 dark:text-white";
  if (G && typeof G == "function" && !G(l))
    return null;
  if (Z && Z == "details")
    switch (d) {
      case "group":
        return /* @__PURE__ */ e(He, { col: o, data: l });
      case "cardGroup":
        return /* @__PURE__ */ e(Ye, { col: o, data: l });
      default:
        return /* @__PURE__ */ e(We, { col: o, data: l });
    }
  switch (d) {
    case "select":
      return /* @__PURE__ */ e(
        ua,
        {
          options: r || [],
          value: A,
          formData: l,
          dependencyKey: _,
          onChange: (I) => t(s, I),
          placeholder: z,
          className: c || "",
          search: b,
          required: f,
          defaultValue: B,
          label: i,
          name: s,
          disabled: F,
          parentClass: y,
          multiple: U,
          dropdownMaxHeight: L
        }
      );
    case "checkbox":
      return /* @__PURE__ */ e(
        ga,
        {
          name: s,
          label: i,
          options: r || [],
          value: A,
          onChange: (I) => t(s, I),
          required: f,
          parentClass: y,
          className: c || "",
          multiSelect: U,
          disabled: F
        }
      );
    case "radio":
      return /* @__PURE__ */ e(
        fa,
        {
          value: A,
          onChange: (I) => t(s, I),
          text: w,
          options: r || [],
          label: i,
          required: f,
          name: s,
          disabled: F,
          parentClass: y
        }
      );
    case "switch":
      return /* @__PURE__ */ e(
        Ke,
        {
          value: A,
          onChange: (I) => t(s, I),
          text: w,
          options: r || [],
          label: i,
          required: f,
          name: s,
          disabled: F,
          parentClass: y
        }
      );
    case "phone":
      return /* @__PURE__ */ e(
        ha,
        {
          value: A,
          onChange: (I) => t(s, I),
          countriesList: M,
          defaultCountry: j,
          required: f,
          placeholder: z,
          search: b,
          label: i,
          name: s,
          disabled: F,
          parentClass: y
        }
      );
    case "textarea":
      return /* @__PURE__ */ e(
        _e,
        {
          value: A,
          onChange: (I) => t(s, I.target.value),
          placeholder: z,
          rows: S || 3,
          className: `${V} ${c || ""}`,
          required: f,
          name: s,
          label: i,
          disabled: F,
          parentClass: y
        }
      );
    case "image":
      return /* @__PURE__ */ e(
        ba,
        {
          value: A,
          onChange: (I) => t(s, I),
          required: f,
          accept: u || "image/*",
          id: `file-${s}`,
          dragDrop: N,
          label: i,
          name: s,
          parentClass: y
        }
      );
    case "audio":
      return /* @__PURE__ */ e(
        ma,
        {
          value: A,
          onChange: (I) => t(s, I),
          required: f,
          accept: u || "audio/*",
          id: `file-${s}`,
          dragDrop: N,
          label: i,
          name: s,
          parentClass: y
        }
      );
    case "tinyEditor":
      return /* @__PURE__ */ e(
        pa,
        {
          value: A,
          onChange: (I) => t(s, I),
          required: f,
          placeholder: z,
          label: i,
          parentClass: y,
          fontFamily: E,
          editorKey: O,
          disabled: F
        },
        `editor-${s}`
      );
    default:
      return /* @__PURE__ */ e(
        ze,
        {
          field: o,
          type: d || "text",
          defaultValue: B,
          value: A,
          onChange: (I) => t(s, I.target.value),
          placeholder: z,
          className: `${V} ${c || ""}`,
          required: f,
          name: s,
          minLength: g,
          label: i,
          negativeNumberAllow: T,
          parentClass: y,
          disabled: F,
          pattern: J
        }
      );
  }
}, ya = ({ isOpen: o, onClose: l, config: t, onApply: s }) => {
  var c;
  const [i, d] = C({}), r = (b, u) => {
    d((w) => ({ ...w, [b]: u }));
  }, x = () => {
    s == null || s(i), l();
  }, S = () => {
    d({}), s == null || s({}), l();
  };
  return /* @__PURE__ */ h(D, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: `fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${o ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
        onClick: l
      }
    ),
    /* @__PURE__ */ h(
      "div",
      {
        className: `fixed top-0 right-0 h-full w-[28rem] bg-white dark:bg-gray-900 shadow-2xl z-50 flex flex-col border-l border-gray-200 dark:border-gray-700
          transform transition-transform duration-300 ease-in-out
          ${o ? "translate-x-0" : "translate-x-full"}
        `,
        children: [
          /* @__PURE__ */ h("div", { className: "flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700", children: [
            /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: "Filters" }),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: l,
                className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition",
                children: /* @__PURE__ */ e(Le, { className: "w-5 h-5 text-gray-500 dark:text-gray-400" })
              }
            )
          ] }),
          o && /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 py-3", children: t != null && t.component ? /* @__PURE__ */ e(
            t.component,
            {
              filters: i,
              onFilterChange: r
            }
          ) : /* @__PURE__ */ e("div", { className: "space-y-4", children: (c = t == null ? void 0 : t.fields) == null ? void 0 : c.map((b) => /* @__PURE__ */ e(D, { children: /* @__PURE__ */ e(
            qe,
            {
              field: b,
              formData: i,
              handleChange: r
            },
            b.key
          ) })) }) }),
          /* @__PURE__ */ h("div", { className: "flex gap-2 px-4 py-3 border-t border-gray-200 dark:border-gray-700", children: [
            /* @__PURE__ */ e(
              Q,
              {
                onClick: x,
                variant: "contained",
                color: "primary",
                fullWidth: !0,
                children: "Apply Filters"
              }
            ),
            /* @__PURE__ */ e(
              Q,
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
}, xa = ({ rows: o = 5, columns: l = 5 }) => /* @__PURE__ */ h(D, { children: [
  /* @__PURE__ */ e("div", { className: "w-full mb-6 inline-flex justify-end items-center", children: /* @__PURE__ */ e("div", { className: "h-8 w-80 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }),
  /* @__PURE__ */ e("div", { className: "overflow-hidden rounded-md border border-gray-200 dark:border-gray-800", children: /* @__PURE__ */ h("table", { className: "w-full border-collapse", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { className: "bg-gray-50 dark:bg-gray-900", children: Array.from({ length: l }).map((t, s) => /* @__PURE__ */ e("th", { className: "px-4 py-3", children: /* @__PURE__ */ e("div", { className: "h-6 w-24 bg-gray-300 dark:bg-gray-700 rounded animate-pulse  inline-flex justify-center items-center" }) }, s)) }) }),
    /* @__PURE__ */ e("tbody", { children: Array.from({ length: o }).map((t, s) => /* @__PURE__ */ e(
      "tr",
      {
        className: "border-t border-gray-200 dark:border-gray-800",
        children: Array.from({ length: l }).map((i, d) => /* @__PURE__ */ e("td", { className: "px-4 py-6", children: /* @__PURE__ */ e("div", { className: "h-6 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }, d))
      },
      s
    )) })
  ] }) })
] }), va = ({
  config: o,
  setShowAdd: l,
  title: t,
  buttonText: s,
  description: i,
  showAddButton: d
}) => {
  const {
    data: r = [],
    table_head: x = [],
    loading: S = !1,
    search: c = {
      enabled: !1,
      placeholder: "Search...",
      useServerSideSearch: !1
    },
    filter: b = {
      enabled: !1,
      useServerSideFilters: !1
    },
    pagination: u = {
      enabled: !1,
      rows_per_page: 10,
      useServerSidePagination: !1
    },
    emptyMessage: w = "No data available",
    onMenuAction: f,
    setServerSidePaginationData: g = () => {
    },
    onFilterApply: N,
    filterConfig: y = null,
    rowClick: M = null
  } = o, [j, U] = C(""), [L, O] = C(null), [E, F] = C([]), [T, B] = C({}), [G, _] = C(!1), [J, Z] = C({}), [A, z] = C(null), [V, I] = C(!1), k = Fe(() => !c.enabled || !j.trim() || c.useServerSideSearch ? r : ca(r, j, c.searchKeys || []), [r, j, c]), [P, W] = C(1), [H, ae] = C((u == null ? void 0 : u.rows_per_page) || 50), [ee, Re] = C(k.length || 0), le = u != null && u.useServerSidePagination ? u.total_pages : Math.ceil(k.length / H), ue = Fe(() => {
    if (u.useServerSidePagination) return k;
    const a = (P - 1) * H;
    return k.slice(a, a + H);
  }, [k, P, H]), re = X(null), oe = X({}), te = X(null), he = (a) => {
    U(a), W(1), c.useServerSideSearch && (te.current && clearTimeout(te.current), te.current = setTimeout(async () => {
      try {
        await g((m) => ({
          ...m,
          search: a,
          current_page: 1
        }));
      } catch (m) {
        console.error("Search error:", m);
      }
    }, 800));
  }, be = (a, m, p) => {
    p.stopPropagation(), O(null), f == null || f(a.type, m);
  }, pe = (a, m, p) => {
    m.stopPropagation(), F(p);
    const v = m.currentTarget;
    oe.current[a] = v;
    const R = v.getBoundingClientRect(), Y = 192, $ = p.length * 40, Ne = window.innerWidth, je = window.innerHeight, Je = Ne - R.right < Y ? R.left - Y + R.width : R.left, Qe = je - R.bottom < $ && R.top > $ ? R.top - $ - 2 : R.bottom + 2;
    B({
      top: Math.max(8, Math.min(Qe, je - $ - 8)),
      left: Math.max(8, Math.min(Je, Ne - Y - 8))
    }), O(L === a ? null : a);
  }, ge = (a) => (P - 1) * H + a + 1, me = (a) => {
    a && a.src instanceof File && (a = { ...a, src: URL.createObjectURL(a.src) }), z(a), I(!0);
  }, ie = (a, m, p, v = null, R = null) => /* @__PURE__ */ e(D, { children: a ? /* @__PURE__ */ e(
    "img",
    {
      src: a instanceof File ? URL.createObjectURL(a) : a,
      alt: m || "Avatar",
      onClick: (Y) => {
        Y.stopPropagation(), Y.preventDefault(), me({ src: a, alt: m });
      },
      className: `w-10 h-10 cursor-pointer shrink-0 rounded-full object-cover border border-gray-200 dark:border-gray-700 ${p || ""}`
    }
  ) : /* @__PURE__ */ e(D, { children: v ? typeof v == "function" ? v(R) : v : /* @__PURE__ */ e(
    "div",
    {
      className: `w-10 h-10 flex items-center shrink-0 justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${p || ""}`,
      children: /* @__PURE__ */ e(Ae, { className: "w-6 h-6 text-gray-400 dark:text-gray-400" })
    }
  ) }) }), fe = (a, m) => /* @__PURE__ */ e(D, { children: a ? /* @__PURE__ */ e(
    "audio",
    {
      controls: !0,
      src: a instanceof File ? URL.createObjectURL(a) : a,
      onClick: (p) => {
        p.stopPropagation();
      },
      className: `w-64 cursor-pointer ${m || ""}`
    },
    a instanceof File ? URL.createObjectURL(a) : a
  ) : /* @__PURE__ */ e(D, { children: /* @__PURE__ */ e(
    "div",
    {
      className: `w-12 h-12 flex items-center shrink-0 justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${m || ""}`,
      children: /* @__PURE__ */ e(oa, { className: "w-6 h-6 text-gray-400 dark:text-gray-400" })
    }
  ) }) }), ye = (a, m) => /* @__PURE__ */ h("div", { className: `flex items-center space-x-4 ${m.className || ""}`, children: [
    m.imageKey ? ie(
      a[m.imageKey],
      a[m.titleKey],
      "group-avatar",
      m.fallback_icon,
      a
    ) : "",
    /* @__PURE__ */ h("div", { children: [
      /* @__PURE__ */ e("p", { className: "font-medium text-gray-900 dark:text-white group-title", children: a[m.titleKey] || "" }),
      /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400 group-sub-title", children: a[m.subtitleKey] || "" })
    ] })
  ] }), xe = (a, m) => {
    var Y;
    let p = String(a);
    const v = m.variant || "contained";
    let R = m.defaultColor;
    if (((Y = m == null ? void 0 : m.chipOptions) == null ? void 0 : Y.length) > 0) {
      let $ = m == null ? void 0 : m.chipOptions.find((Ne) => Ne.value == a);
      $ && (p = $.label, R = $.color);
    }
    return /* @__PURE__ */ e(
      Ve,
      {
        label: p,
        variant: v,
        color: R,
        className: m.className || ""
      }
    );
  }, ve = (a, m, p) => {
    const v = m[a.key];
    return a.type === "menu_actions" ? /* @__PURE__ */ e("div", { className: `text-center ${a.className || ""}`, children: /* @__PURE__ */ e(
      "button",
      {
        ref: (R) => oe.current[m.id || m._id] = R,
        onClick: (R) => pe(m.id || m._id, R, a.menuList),
        className: "p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition text-gray-700 dark:text-gray-300",
        children: /* @__PURE__ */ e(la, { className: "h-4 w-4" })
      }
    ) }) : a.type === "index" ? /* @__PURE__ */ e("span", { className: a.className || "", children: ge(p) }) : a.type === "group" ? ye(m, a) : a.type === "chip" ? /* @__PURE__ */ e(D, { children: xe(v, a) }) : a.type === "date" ? /* @__PURE__ */ e("span", { className: a.className || "", children: Ge(v, a.format || "DD MMM YYYY") }) : a.type === "avatar" ? /* @__PURE__ */ e(D, { children: /* @__PURE__ */ e("div", { className: "min-w-[40px]", children: ie(
      v,
      a.alt,
      a.className,
      a.fallback_icon,
      m
    ) }) }) : a.type === "audio" ? /* @__PURE__ */ e(D, { children: fe(v, a.className) }) : /* @__PURE__ */ e("span", { className: a.className || "", children: v || "N/A" });
  }, we = (a) => {
    if (typeof M == "function")
      return M(a);
    if (M)
      return f == null ? void 0 : f("view", a);
  }, ke = (a, m) => {
    if (a.onClickDetails)
      return f == null ? void 0 : f("view", m);
    if (typeof a.handleClick == "function")
      return a.handleClick(m);
  }, se = () => M || typeof M == "function", de = (a) => a.onClickDetails || typeof a.handleClick == "function";
  return K(() => {
    const a = () => {
      L && O(null);
    };
    return window.addEventListener("scroll", a, !0), () => {
      window.removeEventListener("scroll", a, !0);
    };
  }, [L]), K(() => {
    const a = (m) => {
      re.current && !re.current.contains(m.target) && O(null);
    };
    return document.addEventListener("click", a), () => document.removeEventListener("click", a);
  }, []), K(() => {
    u != null && u.rows_per_page && (u != null && u.useServerSidePagination) && ae((u == null ? void 0 : u.rows_per_page) || 50), u.current_page && W(u.current_page);
  }, [
    u.rows_per_page,
    u == null ? void 0 : u.useServerSidePagination,
    u.current_page
  ]), K(() => {
    Re(
      u != null && u.useServerSidePagination ? u.total_records : k.length
    ), k.length <= H * (P - 1) && !(u != null && u.useServerSidePagination) && W((a) => a - 1 || 1);
  }, [
    k.length,
    u.total_records,
    u == null ? void 0 : u.useServerSidePagination
  ]), /* @__PURE__ */ h(D, { children: [
    S ? /* @__PURE__ */ e(xa, { rows: 6, columns: 6 }) : /* @__PURE__ */ h(D, { children: [
      /* @__PURE__ */ h("div", { className: "flex flex-col sm:flex-row sm:justify-between gap-4 mb-3", children: [
        /* @__PURE__ */ h("div", { children: [
          /* @__PURE__ */ e("h1", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: t }),
          /* @__PURE__ */ e("p", { className: "text-md text-gray-600 dark:text-gray-400", children: i })
        ] }),
        /* @__PURE__ */ h("div", { className: "flex flex-col justify-end items-end gap-2", children: [
          d && /* @__PURE__ */ h(
            Q,
            {
              onClick: () => l(!0),
              variant: "contained",
              color: "primary",
              children: [
                /* @__PURE__ */ e(aa, { className: "w-4 h-4 mr-2" }),
                s || "Add New"
              ]
            }
          ),
          /* @__PURE__ */ h("div", { className: "flex justify-end items-center gap-2", children: [
            c.enabled && /* @__PURE__ */ e("div", { className: "", children: /* @__PURE__ */ h("div", { className: "relative min-w-[300px]", children: [
              /* @__PURE__ */ e(Ie, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-300" }),
              /* @__PURE__ */ e(
                "input",
                {
                  type: "text",
                  placeholder: c.placeholder || "Search...",
                  value: j,
                  onChange: (a) => he(a.target.value),
                  className: "w-full h-[36px] pl-9 pr-4 py-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-300 dark:ring-blue-200 disabled:opacity-50"
                }
              )
            ] }) }),
            y && b.enabled && // add red dot if filter are applied
            /* @__PURE__ */ h("div", { className: "relative", children: [
              /* @__PURE__ */ h(
                Q,
                {
                  onClick: () => _(!0),
                  variant: "contained",
                  children: [
                    /* @__PURE__ */ e(ra, { className: "w-4 h-4 mr-2" }),
                    "Filters"
                  ]
                }
              ),
              Object.keys(J).length > 0 && /* @__PURE__ */ e("span", { className: "absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ h("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-700", children: [
        /* @__PURE__ */ e("div", { className: "overflow-x-auto", children: /* @__PURE__ */ h("table", { className: "min-w-full divide-y divide-gray-200 dark:divide-gray-700", children: [
          /* @__PURE__ */ e("thead", { className: "bg-gray-50 dark:bg-gray-700/60", children: /* @__PURE__ */ e("tr", { children: x.map((a) => /* @__PURE__ */ e(
            "th",
            {
              className: `px-6 py-4 text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider min-w-max max-w-[180px] truncate ${a.headClass || ""}`,
              children: a.title
            },
            a.key
          )) }) }),
          /* @__PURE__ */ e("tbody", { className: "bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700", children: ue.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e(
            "td",
            {
              colSpan: x.length,
              className: "text-center py-10 text-gray-500 dark:text-gray-400",
              children: w
            }
          ) }) : ue.map((a, m) => /* @__PURE__ */ e(
            "tr",
            {
              className: `hover:bg-gray-50 dark:hover:bg-blue-800/10 transition ${se() ? "cursor-pointer" : ""}`,
              onClick: (p) => {
                se() && we(a);
              },
              children: x.map((p) => /* @__PURE__ */ e(
                "td",
                {
                  className: `px-6 py-4 text-sm text-gray-900 dark:text-gray-100 min-w-max ${p.type == "audio" ? "" : "max-w-[300px]"} truncate ${de(p) ? "cursor-pointer" : ""}`,
                  title: String(a[p.key] ?? ""),
                  onClick: (v) => {
                    de(p) && (v.stopPropagation(), v.preventDefault(), ke(p, a));
                  },
                  children: p.render ? p.render(a, m) : ve(p, a, m)
                },
                p.key
              ))
            },
            a.id || a._id || m
          )) })
        ] }) }),
        (u == null ? void 0 : u.enabled) && k.length > 0 && /* @__PURE__ */ h("div", { className: " bg-gray-50 dark:bg-gray-700/60 px-6 py-3 flex flex-wrap items-center justify-between border-t border-gray-200 dark:border-gray-600 gap-3", children: [
          /* @__PURE__ */ h("div", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
            "Showing ",
            (P - 1) * H + 1,
            " to",
            " ",
            Math.min(P * H, ee),
            " of",
            " ",
            ee,
            " results"
          ] }),
          /* @__PURE__ */ h("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ h("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e("span", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Rows per page:" }),
              /* @__PURE__ */ e(
                "select",
                {
                  value: H,
                  onChange: (a) => {
                    const m = Number(a.target.value);
                    ae(m), W(1), u.useServerSidePagination && g((p) => ({
                      ...p,
                      current_page: 1,
                      rows_per_page: m
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
                    if (P > 1) {
                      const a = P - 1;
                      W(a), u.useServerSidePagination && g((m) => ({
                        ...m,
                        current_page: a
                      }));
                    }
                  },
                  disabled: P === 1,
                  className: "p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition text-gray-500 dark:text-gray-300 disabled:opacity-50",
                  children: /* @__PURE__ */ e(ta, { className: "h-4 w-4" })
                }
              ),
              /* @__PURE__ */ h("span", { className: "text-sm text-gray-800 dark:text-gray-200", children: [
                "Page ",
                P,
                " of ",
                le
              ] }),
              /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => {
                    if (P < le) {
                      const a = P + 1;
                      W(a), u.useServerSidePagination && g((m) => ({
                        ...m,
                        current_page: a
                      }));
                    }
                  },
                  disabled: P === le,
                  className: "p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition text-gray-500 dark:text-gray-300 disabled:opacity-50",
                  children: /* @__PURE__ */ e(na, { className: "h-4 w-4" })
                }
              )
            ] })
          ] })
        ] })
      ] })
    ] }),
    L && ia(
      /* @__PURE__ */ e(
        "div",
        {
          ref: re,
          style: {
            position: "fixed",
            top: `${T.top}px`,
            left: `${T.left}px`,
            zIndex: 9999
          },
          className: "w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg border border-gray-200 dark:border-gray-600",
          children: E.map((a, m) => /* @__PURE__ */ h(
            "button",
            {
              onClick: (p) => be(
                a,
                r.find(
                  (v) => v.id === L || v._id == L
                ),
                p
              ),
              className: `w-full flex items-center gap-2 px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-600 ${a.variant === "danger" ? "text-red-600 dark:text-red-500" : "text-gray-700 dark:text-gray-200"}`,
              children: [
                a.icon && /* @__PURE__ */ e("span", { className: "shrink-0", children: a.icon }),
                a.title
              ]
            },
            m
          ))
        }
      ),
      document.body
    ),
    y && /* @__PURE__ */ e(
      ya,
      {
        isOpen: G,
        onClose: () => _(!1),
        config: y,
        onApply: (a) => {
          Z(a), N == null || N(a);
        }
      }
    ),
    V && /* @__PURE__ */ e(
      Pe,
      {
        src: A.src,
        alt: A.alt,
        isOpen: V,
        setIsOpen: I
      }
    )
  ] });
}, Ce = ({
  isOpen: o,
  onClose: l,
  icon: t,
  title: s,
  children: i,
  size: d = "md",
  actionButtons: r = [],
  actions: x,
  showDefaultClose: S = !0,
  footerConfig: c = null,
  hideFooter: b = !1,
  onFormSubmit: u = () => {
  },
  onCancel: w,
  loadingBtn: f = !1,
  executeFunction: g = () => {
  },
  selectedItem: N = null
}) => {
  if (!o) return null;
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
        onClick: () => l()
      }
    ),
    /* @__PURE__ */ h(
      "div",
      {
        className: `relative bg-white rounded-lg shadow-xl w-full ${y[d] || y.md} max-h-[90vh] flex flex-col dark:bg-gray-800`,
        children: [
          /* @__PURE__ */ h("div", { className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0", children: [
            /* @__PURE__ */ h("div", { className: "flex items-center gap-1", children: [
              t && /* @__PURE__ */ e("span", { children: t }),
              /* @__PURE__ */ e("h3", { className: "text-lg font-medium text-gray-900 dark:text-white", children: s })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => l(),
                className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
                children: /* @__PURE__ */ e(Le, { className: "w-6 h-6" })
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto p-4", children: i }),
          r.length > 0 && /* @__PURE__ */ e("div", { className: "px-4 py-3 flex justify-end gap-3 border-t border-gray-200 dark:border-gray-700 sm:px-6", children: r.map((M) => /* @__PURE__ */ e(
            Q,
            {
              onClick: (j) => {
                M.type == "submit" ? u(j) : g(
                  () => {
                    var U;
                    return (U = M == null ? void 0 : M.onClick) == null ? void 0 : U.call(M, j, N);
                  },
                  (U) => l == null ? void 0 : l(U)
                );
              },
              disabled: f || M.disabled,
              variant: M.variant || "contained",
              color: M.color || "primary",
              className: `min-w-[100px] ${M.className}`,
              type: M.type || "button",
              children: f ? /* @__PURE__ */ h("div", { className: "flex items-center", children: [
                /* @__PURE__ */ e("div", { className: "animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-2 border-t-white mr-2" }),
                M.label || "Submit",
                "..."
              ] }) : M.label || "Submit"
            }
          )) })
        ]
      }
    )
  ] });
}, Ee = ({
  config: o,
  onSubmit: l,
  initialData: t = {},
  fetchRowDetails: s,
  type: i = "add"
}) => {
  const { formClass: d = "grid grid-cols-12 gap-4", formFields: r = [] } = o || {}, [x, S] = C(t), [c, b] = C(!0), u = async () => {
    s == null || s(t).then((g) => {
      S(g.data);
    }).catch((g) => {
      ce(g.message, { variant: "error" });
    }).finally(() => {
      b(!1);
    });
  };
  K(() => {
    s instanceof Function ? u() : (S(t), b(!1));
  }, []);
  const w = (g, N) => {
    S((y) => ({ ...y, [g]: N }));
  }, f = (g) => {
    g.preventDefault();
    const N = g.target;
    if (!N.checkValidity()) {
      N.reportValidity();
      return;
    }
    l(x);
  };
  return c ? (
    // spinner loader
    /* @__PURE__ */ e("div", { className: "flex items-center justify-center h-64", children: /* @__PURE__ */ e(
      "div",
      {
        className: "rounded-full border-4 border-blue-500 border-t-gray-200 animate-spin w-8 h-8 border-4",
        style: {
          borderTopColor: "border-primary-500"
        }
      }
    ) })
  ) : /* @__PURE__ */ e(
    "form",
    {
      id: i == "add" ? "addForm" : i == "edit" ? "editForm" : "defaultForm",
      onSubmit: f,
      className: d,
      noValidate: !1,
      children: r.map((g) => /* @__PURE__ */ e(D, { children: /* @__PURE__ */ e(
        qe,
        {
          field: g,
          formData: x,
          handleChange: w
        },
        g.key
      ) }))
    }
  );
};
function wa({ data: o, config: l, fetchRowDetails: t }) {
  const { fields: s, containerClass: i } = l, [d, r] = C(o), [x, S] = C(!0), c = async () => {
    t == null || t(o).then((b) => {
      r(b.data);
    }).catch((b) => {
      ce(b.message, { variant: "error" });
    }).finally(() => {
      S(!1);
    });
  };
  return K(() => {
    t instanceof Function ? c() : (r(o), S(!1));
  }, []), x ? (
    // spinner loader
    /* @__PURE__ */ e("div", { className: "flex items-center justify-center h-64", children: /* @__PURE__ */ e(
      "div",
      {
        className: "rounded-full border-4 border-blue-500 border-t-gray-200 animate-spin w-8 h-8 border-4",
        style: {
          borderTopColor: "border-primary-500"
        }
      }
    ) })
  ) : /* @__PURE__ */ e(D, { children: /* @__PURE__ */ e("div", { className: `grid grid-cols-12 gap-4 ${i || ""}`, children: s.map((b) => b.renderCondition && typeof b.renderCondition == "function" && !b.renderCondition(d) ? null : b.type == "group" ? /* @__PURE__ */ e(He, { col: b, data: d }) : b.type == "cardGroup" ? /* @__PURE__ */ e(Ye, { col: b, data: d }) : /* @__PURE__ */ e(We, { col: b, data: d })) }) });
}
const Ze = ({ config: o }) => {
  var re, oe, te, he, be, pe, ge, me, ie, fe, ye, xe, ve, we, ke, se, de, a, m;
  const {
    title: l,
    fetchData: t = async () => {
    },
    fetchRowDetails: s = null,
    isStaticData: i = !1,
    tableConfig: d = {},
    modalConfig: r = {},
    filterConfig: x
  } = o, [S, c] = C(!0), [b, u] = C(!1), [w, f] = C([]), [g, N] = C(null), [y, M] = C({
    search: "",
    rows_per_page: 50,
    current_page: 1
  }), [j, U] = C({}), [L, O] = C(!1), [E, F] = C(!1), [T, B] = C(!1), [G, _] = C(!1), [J, Z] = C(!1), [A, z] = C(null), V = (p, v) => {
    p === "edit" ? (z(v), B(!0)) : p === "view" ? (z(v), Z(!0)) : p === "delete" && (z(v), _(!0));
  }, I = async (p, v, R = "", Y = "") => {
    u(!0);
    try {
      const $ = await (p == null ? void 0 : p());
      (R || $.message) && ce(R || $.message, {
        variant: "success"
      }), v == null || v($);
    } catch ($) {
      (Y || $.message) && ce(Y || $.message, { variant: "error" });
    } finally {
      u(!1);
    }
  }, k = (p) => {
    let v = p.newObject;
    i ? (f((R) => [v, ...R]), N((R) => ({
      ...R,
      current_page: 1
    }))) : (M((R) => ({
      ...R,
      current_page: 1
    })), y.current_page == 1 && ee()), F(!1);
  }, P = (p) => {
    let v = p.newObject, R = p.targetObject;
    i ? f(
      (Y) => Y.map(
        ($) => $.id === R.id ? { ...$, ...v } : $
      )
    ) : ee(), B(!1);
  }, W = (p) => {
    if (!p) {
      _(!1), z(null);
      return;
    }
    i ? f(
      (v) => v.filter((R) => R.id !== p.targetObject.id)
    ) : w.length == 1 && y.current_page > 1 ? M((v) => ({
      ...v,
      current_page: v.current_page - 1
    })) : ee(), _(!1), z(null);
  }, H = (p) => I(
    () => {
      var v, R;
      return (R = (v = r == null ? void 0 : r.addModal) == null ? void 0 : v.handleSubmit) == null ? void 0 : R.call(v, p);
    },
    k
  ), ae = (p) => I(
    () => {
      var v, R;
      return (R = (v = r == null ? void 0 : r.editModal) == null ? void 0 : v.handleSubmit) == null ? void 0 : R.call(v, p, A);
    },
    P
  ), ee = async () => {
    c(!0), t == null || t({ ...y, ...j }).then((p) => {
      f(p.data), N(p.pagination);
    }).catch((p) => {
      ce(p.message, { variant: "error" });
    }).finally(() => {
      c(!1);
    });
  }, Re = (p) => {
    var v;
    U((R) => ({
      ...p
    })), (v = d == null ? void 0 : d.filter) != null && v.useServerSideFilters && O((R) => !R);
  }, le = (p, v) => p.filter(
    (R) => Object.entries(v).every(([Y, $]) => R[Y] === $)
  ), ue = Fe(() => {
    var p;
    return (p = d == null ? void 0 : d.filter) != null && p.useServerSideFilters ? w : le(w, j);
  }, [w, j]);
  return K(() => {
    ee();
  }, [
    y.search,
    y.rows_per_page,
    y.current_page,
    L
  ]), /* @__PURE__ */ e(
    da,
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
          children: /* @__PURE__ */ e(Le, { className: "h-4 w-4" })
        }
      ),
      children: /* @__PURE__ */ h("div", { children: [
        /* @__PURE__ */ e(
          va,
          {
            title: l,
            setShowAdd: F,
            description: o.description,
            buttonText: o.buttonText,
            showAddButton: !!r.addModal,
            config: {
              ...d,
              pagination: {
                ...d.pagination,
                ...g
              },
              data: ue,
              setServerSidePaginationData: M,
              onMenuAction: V,
              filterConfig: x,
              onFilterApply: Re,
              loading: S
            }
          }
        ),
        /* @__PURE__ */ e(
          Ce,
          {
            isOpen: E,
            onClose: () => {
              b || F(!1);
            },
            icon: (re = r.addModal) == null ? void 0 : re.icon,
            title: ((oe = r.addModal) == null ? void 0 : oe.title) || "Add New",
            size: ((te = r.addModal) == null ? void 0 : te.size) || "md",
            onFormSubmit: () => {
              var p;
              return (p = document.querySelector("#addForm")) == null ? void 0 : p.requestSubmit();
            },
            loadingBtn: b,
            actionButtons: ((he = r == null ? void 0 : r.addModal) == null ? void 0 : he.actionButtons) || [],
            children: /* @__PURE__ */ e(
              Ee,
              {
                config: (r == null ? void 0 : r.addModal) || {},
                onSubmit: H,
                initialData: {},
                type: "add",
                loading: b
              }
            )
          }
        ),
        /* @__PURE__ */ e(
          Ce,
          {
            isOpen: T,
            onClose: () => {
              b || B(!1);
            },
            icon: (be = r.editModal) == null ? void 0 : be.icon,
            title: ((pe = r.editModal) == null ? void 0 : pe.title) || "Edit",
            size: ((ge = r.editModal) == null ? void 0 : ge.size) || "md",
            onFormSubmit: () => {
              var p;
              return (p = document.querySelector("#editForm")) == null ? void 0 : p.requestSubmit();
            },
            actionButtons: ((me = r == null ? void 0 : r.editModal) == null ? void 0 : me.actionButtons) || [],
            loadingBtn: b,
            children: /* @__PURE__ */ e(
              Ee,
              {
                config: r.editModal || {},
                onSubmit: ae,
                initialData: A,
                type: "edit",
                loading: b,
                fetchRowDetails: s
              }
            )
          }
        ),
        G && /* @__PURE__ */ e(
          Ce,
          {
            isOpen: G,
            onClose: (p) => {
              W(p);
            },
            icon: ((ie = r.deleteModal) == null ? void 0 : ie.icon) || /* @__PURE__ */ e(ne, { icon: "ph:warning-bold", className: "w-6 h-6 text-red-500" }),
            title: ((fe = r.deleteModal) == null ? void 0 : fe.title) || "Confirm Delete",
            size: ((ye = r.deleteModal) == null ? void 0 : ye.size) || "md",
            loading: b,
            actionButtons: ((xe = r == null ? void 0 : r.deleteModal) == null ? void 0 : xe.actionButtons) || [],
            executeFunction: I,
            selectedItem: A,
            children: /* @__PURE__ */ e("div", { className: "flex items-center space-x-2 py-3", children: /* @__PURE__ */ h("div", { children: [
              /* @__PURE__ */ e("p", { className: "text-md text-gray-700 dark:text-white", children: ((ve = r.deleteModal) == null ? void 0 : ve.confirmText) || "Are you sure you want to delete this item?" }),
              ((we = r.deleteModal) == null ? void 0 : we.referenceKey) && /* @__PURE__ */ e("p", { className: "text-md font-semibold text-gray-700 dark:text-white", children: A[(ke = r.deleteModal) == null ? void 0 : ke.referenceKey] })
            ] }) })
          }
        ),
        r.viewModal && /* @__PURE__ */ e(
          Ce,
          {
            isOpen: J,
            onClose: () => {
              Z(!1), z(null);
            },
            icon: (se = r.viewModal) == null ? void 0 : se.icon,
            title: ((de = r.viewModal) == null ? void 0 : de.title) || "View Details",
            size: ((a = r.viewModal) == null ? void 0 : a.size) || "lg",
            footerConfig: r == null ? void 0 : r.viewModal.footer,
            children: (m = r.viewModal) != null && m.component ? /* @__PURE__ */ e(r.viewModal.component, { data: A }) : /* @__PURE__ */ e(
              wa,
              {
                data: A,
                fetchRowDetails: s,
                config: r.viewModal || {}
              }
            )
          }
        )
      ] })
    }
  );
}, De = n.shape({
  value: n.oneOfType([
    n.string,
    n.number,
    n.bool
  ]).isRequired,
  label: n.string.isRequired,
  color: n.string
}), Oe = n.shape({
  type: n.string.isRequired,
  label: n.string.isRequired,
  color: n.string,
  variant: n.string,
  onClick: n.func
}), ka = n.shape({
  title: n.string.isRequired,
  type: n.string.isRequired,
  variant: n.string,
  icon: n.node
}), Na = n.shape({
  key: n.string.isRequired,
  title: n.string,
  type: n.string,
  imageKey: n.string,
  titleKey: n.string,
  subtitleKey: n.string,
  onClickDetails: n.bool,
  variant: n.string,
  chipOptions: n.arrayOf(De),
  defaultColor: n.string,
  className: n.string,
  format: n.string,
  menuList: n.arrayOf(ka)
}), Te = n.shape({
  key: n.string.isRequired,
  label: n.string,
  type: n.string.isRequired,
  required: n.bool,
  minLength: n.number,
  parentClass: n.string,
  search: n.bool,
  multiple: n.bool,
  dropdownMaxHeight: n.string,
  dragDrop: n.bool,
  countriesList: n.bool,
  defaultCountry: n.string,
  placeholder: n.string,
  rows: n.number,
  text: n.string,
  editorKey: n.string,
  options: n.arrayOf(De)
}), Sa = n.shape({
  key: n.string,
  label: n.string,
  type: n.string,
  imageKey: n.string,
  titleKey: n.string,
  subtitleKey: n.string,
  blockClass: n.string,
  icon: n.node,
  variant: n.string,
  chipOptions: n.arrayOf(De),
  defaultColor: n.string,
  className: n.string,
  format: n.string
});
Ze.propTypes = {
  config: n.shape({
    title: n.string.isRequired,
    description: n.string,
    buttonText: n.string,
    fetchData: n.func.isRequired,
    isStaticData: n.bool,
    /* ================= TABLE CONFIG ================= */
    tableConfig: n.shape({
      table_head: n.arrayOf(Na).isRequired,
      search: n.shape({
        enabled: n.bool,
        useServerSideSearch: n.bool,
        searchKeys: n.arrayOf(n.string)
      }),
      pagination: n.shape({
        enabled: n.bool,
        useServerSidePagination: n.bool
      }),
      filter: n.shape({
        enabled: n.bool,
        useServerSideFilters: n.bool
      })
    }).isRequired,
    /* ================= MODAL CONFIG ================= */
    modalConfig: n.shape({
      addModal: n.shape({
        title: n.string.isRequired,
        size: n.string,
        formClass: n.string,
        formFields: n.arrayOf(Te),
        handleSubmit: n.func.isRequired,
        actionButtons: n.arrayOf(Oe)
      }),
      editModal: n.shape({
        title: n.string.isRequired,
        size: n.string,
        formClass: n.string,
        formFields: n.arrayOf(Te),
        handleSubmit: n.func.isRequired,
        actionButtons: n.arrayOf(Oe)
      }),
      deleteModal: n.shape({
        title: n.string.isRequired,
        size: n.string,
        confirmText: n.string,
        referenceKey: n.string,
        actionButtons: n.arrayOf(Oe)
      }),
      viewModal: n.shape({
        title: n.string.isRequired,
        size: n.string,
        // 👇 This covers your commented code:
        component: n.elementType,
        // for custom component like TeamMemberDetail
        fields: n.arrayOf(Sa),
        footer: n.shape({
          cancelButton: n.bool,
          cancelText: n.string
        })
      })
    }),
    /* ================= FILTER CONFIG ================= */
    filterConfig: n.shape({
      fields: n.arrayOf(Te)
    })
  }).isRequired
};
const Ca = () => {
  if (typeof document > "u" || document.getElementById("react-admin-crud-manager-styles")) return;
  const o = document.createElement("style");
  o.id = "react-admin-crud-manager-styles";
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
  o.textContent = l, document.head.appendChild(o);
};
function ja(o) {
  return K(() => {
    Ca();
  }, []), /* @__PURE__ */ e(D, { children: /* @__PURE__ */ e(Ze, { config: o.config }) });
}
export {
  ja as default
};
//# sourceMappingURL=index.es.js.map
