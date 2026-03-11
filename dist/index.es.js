<<<<<<< HEAD
import { jsx as n, Fragment as G, jsxs as f } from "react/jsx-runtime";
import * as de from "react";
import He, { useState as S, useRef as te, useEffect as U, useCallback as Kt, useMemo as be } from "react";
import { Info as Wt, ChevronDown as St, Search as ot, Check as Ht, X as Ze, User as it, ArrowUpDown as Zt, Plus as Yt, Filter as Vt, ChevronLeft as Xt, ChevronRight as Jt, EllipsisVertical as qt, Music as Qt } from "lucide-react";
import { createPortal as er } from "react-dom";
import { Icon as ue } from "@iconify/react";
import { Editor as tr } from "@tinymce/tinymce-react";
import { enqueueSnackbar as ge, SnackbarProvider as rr, useSnackbar as ar } from "notistack";
const Mt = (a, r = "DD MMM YYYY") => {
  if (!a) return "N/A";
  const e = new Date(a);
  if (isNaN(e.getTime())) return "Invalid Date";
  const t = (l) => String(l).padStart(2, "0"), o = {
    YYYY: e.getFullYear(),
    YY: String(e.getFullYear()).slice(-2),
    MMMM: e.toLocaleString("en-US", { month: "long" }),
    MMM: e.toLocaleString("en-US", { month: "short" }),
    MM: t(e.getMonth() + 1),
    M: e.getMonth() + 1,
    DD: t(e.getDate()),
    D: e.getDate(),
    dddd: e.toLocaleString("en-US", { weekday: "long" }),
    ddd: e.toLocaleString("en-US", { weekday: "short" }),
    HH: t(e.getHours()),
    hh: t(e.getHours() % 12 || 12),
    mm: t(e.getMinutes()),
    ss: t(e.getSeconds()),
    A: e.getHours() >= 12 ? "PM" : "AM"
  };
  return r.replace(
    /YYYY|YY|MMMM|MMM|MM|M|DD|D|dddd|ddd|HH|hh|mm|ss|A/g,
    (l) => String(o[l])
  );
}, nr = (a, r, e = []) => {
  if (!(r != null && r.trim())) return a;
  const t = r.toLowerCase(), o = (l) => l == null ? [] : typeof l == "object" ? Object.values(l).flatMap(o) : [String(l)];
  return a.filter((l) => {
    let i = [];
    return e.length > 0 ? e.forEach((c) => {
      l[c] !== void 0 && i.push(...o(l[c]));
    }) : i = o(l), i.some(
      (c) => c.toLowerCase().includes(t)
    );
  });
}, ie = He.forwardRef(
  ({
    className: a = "",
    variant: r = "contained",
    color: e = "default",
    size: t = "default",
    fullWidth: o = !1,
    children: l,
    ...i
  }, c) => {
    var g;
    const b = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", d = {
=======
import { jsx as e, Fragment as P, jsxs as b } from "react/jsx-runtime";
import Me, { useState as C, useRef as Q, useEffect as G, useMemo as Fe } from "react";
import { Info as Qe, ChevronDown as Ee, Search as Te, Check as er, X as Le, User as je, Plus as rr, Filter as tr, ChevronLeft as ar, ChevronRight as or, EllipsisVertical as nr, Music as ir } from "lucide-react";
import { createPortal as lr } from "react-dom";
import { Icon as oe } from "@iconify/react";
import { Editor as dr } from "@tinymce/tinymce-react";
import { enqueueSnackbar as ce, SnackbarProvider as sr, useSnackbar as cr } from "notistack";
import n from "prop-types";
const pr = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}:root{--background: 0 0% 100%;--foreground: 0 0% 3.9%;--card: 0 0% 100%;--card-foreground: 0 0% 3.9%;--popover: 0 0% 100%;--popover-foreground: 0 0% 3.9%;--primary: 0 0% 9%;--primary-foreground: 0 0% 98%;--secondary: 0 0% 96.1%;--secondary-foreground: 0 0% 9%;--muted: 0 0% 96.1%;--muted-foreground: 0 0% 45.1%;--accent: 0 0% 96.1%;--accent-foreground: 0 0% 9%;--destructive: 0 84.2% 60.2%;--destructive-foreground: 0 0% 98%;--border: 0 0% 89.8%;--input: 0 0% 89.8%;--ring: 0 0% 3.9%;--chart-1: 12 76% 61%;--chart-2: 173 58% 39%;--chart-3: 197 37% 24%;--chart-4: 43 74% 66%;--chart-5: 27 87% 67%;--radius: .5rem}*{border-color:hsl(var(--border))}body{background-color:hsl(var(--background));color:hsl(var(--foreground))}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{top:0;right:0;bottom:0;left:0}.inset-y-0{top:0;bottom:0}.-right-2{right:-.5rem}.bottom-full{bottom:100%}.left-0{left:0}.left-1{left:.25rem}.left-1\\/2{left:50%}.left-3{left:.75rem}.right-0{right:0}.right-1{right:.25rem}.right-1\\/2{right:50%}.right-3{right:.75rem}.right-4{right:1rem}.right-\\[50\\%\\]{right:50%}.top-0{top:0}.top-1{top:.25rem}.top-1\\/2{top:50%}.top-4{top:1rem}.top-\\[80\\%\\]{top:80%}.top-full{top:100%}.z-10{z-index:10}.z-40{z-index:40}.z-50{z-index:50}.col-span-12{grid-column:span 12 / span 12}.mb-0{margin-bottom:0}.mb-1{margin-bottom:.25rem}.mb-3{margin-bottom:.75rem}.mb-6{margin-bottom:1.5rem}.ml-1{margin-left:.25rem}.ml-2{margin-left:.5rem}.mr-2{margin-right:.5rem}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.hidden{display:none}.h-10{height:2.5rem}.h-11{height:2.75rem}.h-12{height:3rem}.h-16{height:4rem}.h-2{height:.5rem}.h-20{height:5rem}.h-3{height:.75rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-64{height:16rem}.h-8{height:2rem}.h-9{height:2.25rem}.h-\\[10px\\]{height:10px}.h-\\[36px\\]{height:36px}.h-\\[40px\\]{height:40px}.h-full{height:100%}.max-h-40{max-height:10rem}.max-h-60{max-height:15rem}.max-h-\\[90vh\\]{max-height:90vh}.w-10{width:2.5rem}.w-11{width:2.75rem}.w-12{width:3rem}.w-16{width:4rem}.w-2{width:.5rem}.w-20{width:5rem}.w-24{width:6rem}.w-3{width:.75rem}.w-4{width:1rem}.w-48{width:12rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-64{width:16rem}.w-8{width:2rem}.w-80{width:20rem}.w-\\[28rem\\]{width:28rem}.w-full{width:100%}.w-max{width:-moz-max-content;width:max-content}.min-w-0{min-width:0px}.min-w-\\[100px\\]{min-width:100px}.min-w-\\[150px\\]{min-width:150px}.min-w-\\[300px\\]{min-width:300px}.min-w-\\[40px\\]{min-width:40px}.min-w-\\[78px\\]{min-width:78px}.min-w-full{min-width:100%}.min-w-max{min-width:-moz-max-content;min-width:max-content}.max-w-2xl{max-width:42rem}.max-w-4xl{max-width:56rem}.max-w-5xl{max-width:64rem}.max-w-\\[180px\\]{max-width:180px}.max-w-\\[200px\\]{max-width:200px}.max-w-\\[300px\\]{max-width:300px}.max-w-full{max-width:100%}.max-w-lg{max-width:32rem}.max-w-md{max-width:28rem}.max-w-xs{max-width:20rem}.flex-1{flex:1 1 0%}.flex-shrink{flex-shrink:1}.flex-shrink-0,.shrink-0{flex-shrink:0}.border-collapse{border-collapse:collapse}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-0{--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-full{--tw-translate-x: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-95{--tw-scale-x: .95;--tw-scale-y: .95;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-6{gap:1.5rem}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.25rem * var(--tw-space-y-reverse))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse))}.divide-gray-200>:not([hidden])~:not([hidden]){--tw-divide-opacity: 1;border-color:rgb(229 231 235 / var(--tw-divide-opacity))}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.break-words{overflow-wrap:break-word}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:var(--radius)}.rounded-md{border-radius:calc(var(--radius) - 2px)}.rounded-sm{border-radius:calc(var(--radius) - 4px)}.rounded-xl{border-radius:.75rem}.border{border-width:1px}.border-2{border-width:2px}.border-4{border-width:4px}.border-8{border-width:8px}.border-b{border-bottom-width:1px}.border-l{border-left-width:1px}.border-r{border-right-width:1px}.border-t{border-top-width:1px}.border-t-2{border-top-width:2px}.border-dashed{border-style:dashed}.border-blue-300{--tw-border-opacity: 1;border-color:rgb(147 197 253 / var(--tw-border-opacity))}.border-blue-500{--tw-border-opacity: 1;border-color:rgb(59 130 246 / var(--tw-border-opacity))}.border-gray-100{--tw-border-opacity: 1;border-color:rgb(243 244 246 / var(--tw-border-opacity))}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity))}.border-green-300{--tw-border-opacity: 1;border-color:rgb(134 239 172 / var(--tw-border-opacity))}.border-green-600{--tw-border-opacity: 1;border-color:rgb(22 163 74 / var(--tw-border-opacity))}.border-primary,.border-primary-500{border-color:var(--primary-500)}.border-purple-300{--tw-border-opacity: 1;border-color:rgb(216 180 254 / var(--tw-border-opacity))}.border-red-300{--tw-border-opacity: 1;border-color:rgb(252 165 165 / var(--tw-border-opacity))}.border-red-600{--tw-border-opacity: 1;border-color:rgb(220 38 38 / var(--tw-border-opacity))}.border-teal-300{--tw-border-opacity: 1;border-color:rgb(94 234 212 / var(--tw-border-opacity))}.border-white\\/30{border-color:#ffffff4d}.border-yellow-300{--tw-border-opacity: 1;border-color:rgb(253 224 71 / var(--tw-border-opacity))}.border-t-gray-200{--tw-border-opacity: 1;border-top-color:rgb(229 231 235 / var(--tw-border-opacity))}.border-t-white{--tw-border-opacity: 1;border-top-color:rgb(255 255 255 / var(--tw-border-opacity))}.\\!bg-transparent{background-color:transparent!important}.bg-black\\/50{background-color:#00000080}.bg-black\\/70{background-color:#000000b3}.bg-blue-100{--tw-bg-opacity: 1;background-color:rgb(219 234 254 / var(--tw-bg-opacity))}.bg-blue-50{--tw-bg-opacity: 1;background-color:rgb(239 246 255 / var(--tw-bg-opacity))}.bg-blue-500\\/10{background-color:#3b82f61a}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.bg-gray-300{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity))}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.bg-gray-500{--tw-bg-opacity: 1;background-color:rgb(107 114 128 / var(--tw-bg-opacity))}.bg-green-100{--tw-bg-opacity: 1;background-color:rgb(220 252 231 / var(--tw-bg-opacity))}.bg-green-600{--tw-bg-opacity: 1;background-color:rgb(22 163 74 / var(--tw-bg-opacity))}.bg-primary{background-color:var(--primary-500)}.bg-purple-100{--tw-bg-opacity: 1;background-color:rgb(243 232 255 / var(--tw-bg-opacity))}.bg-red-100{--tw-bg-opacity: 1;background-color:rgb(254 226 226 / var(--tw-bg-opacity))}.bg-red-500{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.bg-red-600{--tw-bg-opacity: 1;background-color:rgb(220 38 38 / var(--tw-bg-opacity))}.bg-teal-100{--tw-bg-opacity: 1;background-color:rgb(204 251 241 / var(--tw-bg-opacity))}.bg-transparent{background-color:transparent}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-yellow-100{--tw-bg-opacity: 1;background-color:rgb(254 249 195 / var(--tw-bg-opacity))}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-4{padding:1rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-8{padding-left:2rem;padding-right:2rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-10{padding-top:2.5rem;padding-bottom:2.5rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.pl-9{padding-left:2.25rem}.pr-10{padding-right:2.5rem}.pr-2{padding-right:.5rem}.pr-3{padding-right:.75rem}.pr-4{padding-right:1rem}.text-left{text-align:left}.text-center{text-align:center}.text-2xl{font-size:1.5rem;line-height:2rem}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.italic{font-style:italic}.tracking-wider{letter-spacing:.05em}.text-black{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.text-blue-600{--tw-text-opacity: 1;color:rgb(37 99 235 / var(--tw-text-opacity))}.text-blue-700{--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity))}.text-blue-800{--tw-text-opacity: 1;color:rgb(30 64 175 / var(--tw-text-opacity))}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity))}.text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.text-green-600{--tw-text-opacity: 1;color:rgb(22 163 74 / var(--tw-text-opacity))}.text-green-700{--tw-text-opacity: 1;color:rgb(21 128 61 / var(--tw-text-opacity))}.text-green-800{--tw-text-opacity: 1;color:rgb(22 101 52 / var(--tw-text-opacity))}.text-primary{color:var(--primary-500)}.text-purple-700{--tw-text-opacity: 1;color:rgb(126 34 206 / var(--tw-text-opacity))}.text-purple-800{--tw-text-opacity: 1;color:rgb(107 33 168 / var(--tw-text-opacity))}.text-red-500{--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity))}.text-red-600{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity))}.text-red-700{--tw-text-opacity: 1;color:rgb(185 28 28 / var(--tw-text-opacity))}.text-red-800{--tw-text-opacity: 1;color:rgb(153 27 27 / var(--tw-text-opacity))}.text-teal-700{--tw-text-opacity: 1;color:rgb(15 118 110 / var(--tw-text-opacity))}.text-teal-800{--tw-text-opacity: 1;color:rgb(17 94 89 / var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.text-yellow-700{--tw-text-opacity: 1;color:rgb(161 98 7 / var(--tw-text-opacity))}.text-yellow-800{--tw-text-opacity: 1;color:rgb(133 77 14 / var(--tw-text-opacity))}.underline{text-decoration-line:underline}.placeholder-gray-400::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.placeholder-gray-400::placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.placeholder-gray-500::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(107 114 128 / var(--tw-placeholder-opacity))}.placeholder-gray-500::placeholder{--tw-placeholder-opacity: 1;color:rgb(107 114 128 / var(--tw-placeholder-opacity))}.opacity-0{opacity:0}.opacity-100{opacity:1}.opacity-50{opacity:.5}.opacity-60{opacity:.6}.opacity-75{opacity:.75}.opacity-90{opacity:.9}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-2xl{--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / .25);--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-xl{--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.ring-0{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.ring-blue-100{--tw-ring-opacity: 1;--tw-ring-color: rgb(219 234 254 / var(--tw-ring-opacity))}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-sm{--tw-backdrop-blur: blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200{transition-duration:.2s}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}:root{--primary-50: #eff6ff;--primary-100: #dbeafe;--primary-200: #bfdbfe;--primary-300: #93c5fd;--primary-400: #60a5fa;--primary-500: #3b82f6;--primary-600: #2563eb;--primary-700: #1d4ed8;--primary-800: #1e40af;--primary-900: #1e3a8a}.primary-bg{background-color:var(--primary-500)}.primary-bg-light{background-color:var(--primary-100)}.primary-bg-dark{background-color:var(--primary-700)}.primary-text{color:var(--primary-600)}.primary-border{border-color:var(--primary-300)}.primary-hover:hover{background-color:var(--primary-600)}:root{--foreground-rgb: 0, 0, 0;--background-start-rgb: 214, 219, 220;--background-end-rgb: 255, 255, 255}@media (prefers-color-scheme: dark){:root{--foreground-rgb: 255, 255, 255;--background-start-rgb: 0, 0, 0;--background-end-rgb: 0, 0, 0}}html,body{height:100%}:root{--scrollbar-thumb: #d1d5db;--scrollbar-thumb-hover: #9ca3af}.dark{--scrollbar-thumb: #4b5563;--scrollbar-thumb-hover: #6b7280}*{scrollbar-width:thin;scrollbar-color:var(--scrollbar-thumb) transparent}*::-webkit-scrollbar{width:6px;height:6px}*::-webkit-scrollbar-track{background:transparent}*::-webkit-scrollbar-thumb{background-color:var(--scrollbar-thumb);border-radius:3px}*::-webkit-scrollbar-thumb:hover{background-color:var(--scrollbar-thumb-hover)}.no-spinner::-webkit-outer-spin-button,.no-spinner::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.no-spinner{-moz-appearance:textfield}.tox.tox-tinymce .tox-edit-area:before{border:0!important;box-shadow:none!important}.hover\\:bg-blue-50:hover{--tw-bg-opacity: 1;background-color:rgb(239 246 255 / var(--tw-bg-opacity))}.hover\\:bg-gray-100:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.hover\\:bg-gray-200:hover{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.hover\\:bg-gray-300:hover{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity))}.hover\\:bg-gray-50:hover{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.hover\\:bg-green-50:hover{--tw-bg-opacity: 1;background-color:rgb(240 253 244 / var(--tw-bg-opacity))}.hover\\:bg-green-700:hover{--tw-bg-opacity: 1;background-color:rgb(21 128 61 / var(--tw-bg-opacity))}.hover\\:bg-primary-50:hover{background-color:var(--primary-50)}.hover\\:bg-primary-600:hover{background-color:var(--primary-600)}.hover\\:bg-red-50:hover{--tw-bg-opacity: 1;background-color:rgb(254 242 242 / var(--tw-bg-opacity))}.hover\\:bg-red-600:hover{--tw-bg-opacity: 1;background-color:rgb(220 38 38 / var(--tw-bg-opacity))}.hover\\:bg-red-700:hover{--tw-bg-opacity: 1;background-color:rgb(185 28 28 / var(--tw-bg-opacity))}.hover\\:bg-white\\/20:hover{background-color:#fff3}.hover\\:text-gray-600:hover{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-1:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-blue-200:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(191 219 254 / var(--tw-ring-opacity))}.focus\\:ring-blue-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity))}.focus\\:ring-blue-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity))}.focus\\:ring-gray-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity))}.focus\\:ring-green-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(34 197 94 / var(--tw-ring-opacity))}.focus\\:ring-primary-500:focus{--tw-ring-color: var(--primary-500)}.focus\\:ring-red-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(239 68 68 / var(--tw-ring-opacity))}.focus\\:ring-offset-2:focus{--tw-ring-offset-width: 2px}.focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:ring-2:focus-visible{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus-visible\\:ring-blue-400:focus-visible{--tw-ring-opacity: 1;--tw-ring-color: rgb(96 165 250 / var(--tw-ring-opacity))}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width: 2px}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:opacity-50:disabled{opacity:.5}.group:hover .group-hover\\:opacity-100{opacity:1}.peer:checked~.peer-checked\\:translate-x-5{--tw-translate-x: 1.25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.peer:checked~.peer-checked\\:bg-primary-600{background-color:var(--primary-600)}.peer:focus~.peer-focus\\:outline-none{outline:2px solid transparent;outline-offset:2px}.peer:disabled~.peer-disabled\\:cursor-not-allowed{cursor:not-allowed}.peer:disabled~.peer-disabled\\:opacity-50{opacity:.5}:is(.dark .dark\\:divide-gray-700)>:not([hidden])~:not([hidden]){--tw-divide-opacity: 1;border-color:rgb(55 65 81 / var(--tw-divide-opacity))}:is(.dark .dark\\:border-blue-700){--tw-border-opacity: 1;border-color:rgb(29 78 216 / var(--tw-border-opacity))}:is(.dark .dark\\:border-gray-600){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity))}:is(.dark .dark\\:border-gray-700){--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity))}:is(.dark .dark\\:border-gray-800){--tw-border-opacity: 1;border-color:rgb(31 41 55 / var(--tw-border-opacity))}:is(.dark .dark\\:border-green-700){--tw-border-opacity: 1;border-color:rgb(21 128 61 / var(--tw-border-opacity))}:is(.dark .dark\\:border-purple-700){--tw-border-opacity: 1;border-color:rgb(126 34 206 / var(--tw-border-opacity))}:is(.dark .dark\\:border-red-700){--tw-border-opacity: 1;border-color:rgb(185 28 28 / var(--tw-border-opacity))}:is(.dark .dark\\:border-teal-700){--tw-border-opacity: 1;border-color:rgb(15 118 110 / var(--tw-border-opacity))}:is(.dark .dark\\:border-yellow-700){--tw-border-opacity: 1;border-color:rgb(161 98 7 / var(--tw-border-opacity))}:is(.dark .dark\\:bg-black){--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}:is(.dark .dark\\:bg-black\\/80){background-color:#000c}:is(.dark .dark\\:bg-blue-900\\/20){background-color:#1e3a8a33}:is(.dark .dark\\:bg-blue-900\\/30){background-color:#1e3a8a4d}:is(.dark .dark\\:bg-gray-600){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity))}:is(.dark .dark\\:bg-gray-700){--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity))}:is(.dark .dark\\:bg-gray-700\\/60){background-color:#37415199}:is(.dark .dark\\:bg-gray-800){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}:is(.dark .dark\\:bg-gray-900){--tw-bg-opacity: 1;background-color:rgb(17 24 39 / var(--tw-bg-opacity))}:is(.dark .dark\\:bg-gray-900\\/30){background-color:#1118274d}:is(.dark .dark\\:bg-green-900\\/30){background-color:#14532d4d}:is(.dark .dark\\:bg-purple-900\\/30){background-color:#581c874d}:is(.dark .dark\\:bg-red-900\\/30){background-color:#7f1d1d4d}:is(.dark .dark\\:bg-teal-900\\/30){background-color:#134e4a4d}:is(.dark .dark\\:bg-yellow-900\\/30){background-color:#713f124d}:is(.dark .dark\\:text-blue-300){--tw-text-opacity: 1;color:rgb(147 197 253 / var(--tw-text-opacity))}:is(.dark .dark\\:text-blue-400){--tw-text-opacity: 1;color:rgb(96 165 250 / var(--tw-text-opacity))}:is(.dark .dark\\:text-gray-100){--tw-text-opacity: 1;color:rgb(243 244 246 / var(--tw-text-opacity))}:is(.dark .dark\\:text-gray-200){--tw-text-opacity: 1;color:rgb(229 231 235 / var(--tw-text-opacity))}:is(.dark .dark\\:text-gray-300){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}:is(.dark .dark\\:text-gray-400){--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}:is(.dark .dark\\:text-green-300){--tw-text-opacity: 1;color:rgb(134 239 172 / var(--tw-text-opacity))}:is(.dark .dark\\:text-purple-300){--tw-text-opacity: 1;color:rgb(216 180 254 / var(--tw-text-opacity))}:is(.dark .dark\\:text-red-300){--tw-text-opacity: 1;color:rgb(252 165 165 / var(--tw-text-opacity))}:is(.dark .dark\\:text-red-500){--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity))}:is(.dark .dark\\:text-teal-300){--tw-text-opacity: 1;color:rgb(94 234 212 / var(--tw-text-opacity))}:is(.dark .dark\\:text-white){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}:is(.dark .dark\\:text-yellow-300){--tw-text-opacity: 1;color:rgb(253 224 71 / var(--tw-text-opacity))}:is(.dark .dark\\:placeholder-gray-400)::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}:is(.dark .dark\\:placeholder-gray-400)::placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}:is(.dark .dark\\:ring-blue-200){--tw-ring-opacity: 1;--tw-ring-color: rgb(191 219 254 / var(--tw-ring-opacity))}:is(.dark .dark\\:hover\\:bg-blue-800\\/10:hover){background-color:#1e40af1a}:is(.dark .dark\\:hover\\:bg-gray-600:hover){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity))}:is(.dark .dark\\:hover\\:bg-gray-700:hover){--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity))}:is(.dark .dark\\:hover\\:bg-gray-800:hover){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}:is(.dark .dark\\:hover\\:text-gray-200:hover){--tw-text-opacity: 1;color:rgb(229 231 235 / var(--tw-text-opacity))}:is(.dark .dark\\:hover\\:text-gray-300:hover){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}:is(.dark .dark\\:focus\\:ring-blue-200:focus){--tw-ring-opacity: 1;--tw-ring-color: rgb(191 219 254 / var(--tw-ring-opacity))}:is(.dark .dark\\:focus\\:ring-blue-400:focus){--tw-ring-opacity: 1;--tw-ring-color: rgb(96 165 250 / var(--tw-ring-opacity))}:is(.dark .dark\\:focus\\:ring-gray-500:focus){--tw-ring-opacity: 1;--tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity))}:is(.dark .dark\\:focus\\:ring-gray-600:focus){--tw-ring-opacity: 1;--tw-ring-color: rgb(75 85 99 / var(--tw-ring-opacity))}:is(.dark .dark\\:focus\\:ring-offset-gray-800:focus){--tw-ring-offset-color: #1f2937}@media (min-width: 640px){.sm\\:flex-row{flex-direction:row}.sm\\:justify-between{justify-content:space-between}.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}', $e = (o, i = "DD MMM YYYY") => {
  if (!o) return "N/A";
  const a = new Date(o);
  if (isNaN(a)) return "Invalid Date";
  const d = (s) => String(s).padStart(2, "0"), l = {
    YYYY: a.getFullYear(),
    YY: String(a.getFullYear()).slice(-2),
    MMMM: a.toLocaleString("en-US", { month: "long" }),
    MMM: a.toLocaleString("en-US", { month: "short" }),
    MM: d(a.getMonth() + 1),
    M: a.getMonth() + 1,
    DD: d(a.getDate()),
    D: a.getDate(),
    dddd: a.toLocaleString("en-US", { weekday: "long" }),
    ddd: a.toLocaleString("en-US", { weekday: "short" }),
    HH: d(a.getHours()),
    hh: d(a.getHours() % 12 || 12),
    mm: d(a.getMinutes()),
    ss: d(a.getSeconds()),
    A: a.getHours() >= 12 ? "PM" : "AM"
  };
  return i.replace(
    /YYYY|YY|MMMM|MMM|MM|M|DD|D|dddd|ddd|HH|hh|mm|ss|A/g,
    (s) => l[s]
  );
}, br = (o, i, a = []) => {
  if (!(i != null && i.trim())) return o;
  const d = i.toLowerCase(), l = (s) => s == null ? [] : typeof s == "object" ? Object.values(s).flatMap(l) : [String(s)];
  return o.filter((s) => {
    let t = [];
    return a.length > 0 ? a.forEach((f) => {
      s[f] !== void 0 && t.push(...l(s[f]));
    }) : t = l(s), t.some(
      (f) => f.toLowerCase().includes(d)
    );
  });
}, X = Me.forwardRef(
  ({
    className: o = "",
    variant: i = "contained",
    color: a = "default",
    size: d = "default",
    fullWidth: l = !1,
    children: s,
    ...t
  }, f) => {
    var u;
    const S = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", c = {
>>>>>>> main
      sm: "h-8 px-3 rounded-md text-sm",
      md: "h-9 px-4 rounded-md text-sm",
      lg: "h-11 px-6 rounded-md text-base",
      xl: "h-12 px-8 rounded-lg text-lg",
      default: "h-9 px-4 rounded-md text-sm"
<<<<<<< HEAD
    }, p = {
=======
    }, g = {
>>>>>>> main
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
<<<<<<< HEAD
    }, h = ((g = p[e]) == null ? void 0 : g[r]) || p.default.contained, s = d[t] || d.default, m = `
      ${b} 
      ${h} 
      ${s} 
      ${o ? "w-full" : ""} 
      ${a}
=======
    }, p = ((u = g[a]) == null ? void 0 : u[i]) || g.default.contained, v = c[d], m = `
      ${S} 
      ${p} 
      ${v} 
      ${l ? "w-full" : ""} 
      ${o}
>>>>>>> main
    `.trim();
    return /* @__PURE__ */ n(
      "button",
      {
<<<<<<< HEAD
        ref: c,
        type: i.type || "button",
        className: m,
        ...i,
        children: l
=======
        ref: f,
        type: t.type || "button",
        className: m,
        ...t,
        children: s
>>>>>>> main
      }
    );
  }
);
<<<<<<< HEAD
ie.displayName = "Button";
function re({
  label: a,
  required: r = !1,
  infoText: e = ""
}) {
  return /* @__PURE__ */ n(G, { children: /* @__PURE__ */ f("label", { className: "flex text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: [
    a,
    r && /* @__PURE__ */ n("span", { className: "ml-1", children: "*" }),
    e && /* @__PURE__ */ f("span", { className: "ml-2 relative group inline-flex items-center cursor-pointer", children: [
      /* @__PURE__ */ n(Wt, { className: "w-4 h-4 text-gray-500 dark:text-gray-400" }),
      /* @__PURE__ */ n(
=======
X.displayName = "Button";
function q({ label: o, required: i = !1, infoText: a = "" }) {
  return /* @__PURE__ */ e(P, { children: /* @__PURE__ */ b("label", { className: "flex text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: [
    o,
    i && /* @__PURE__ */ e("span", { className: "ml-1", children: "*" }),
    a && /* @__PURE__ */ b("span", { className: "ml-2 relative group inline-flex items-center cursor-pointer", children: [
      /* @__PURE__ */ e(Qe, { className: "w-4 h-4 text-gray-500 dark:text-gray-400" }),
      /* @__PURE__ */ e(
>>>>>>> main
        "span",
        {
          className: `absolute left-1/2 top-full mt-2\r
                   w-max max-w-xs bg-white text-black dark:bg-black dark:text-white text-xs\r
                   rounded px-2 py-1 opacity-0 shadow-lg\r
                   group-hover:opacity-100 transition-opacity\r
                   duration-200 pointer-events-none z-50`,
<<<<<<< HEAD
          children: e
=======
          children: a
>>>>>>> main
        }
      )
    ] })
  ] }) });
}
<<<<<<< HEAD
const or = ({
  options: a = [],
  value: r = "",
  defaultValue: e = "",
  onChange: t,
  placeholder: o = "Select option",
  className: l = "",
  disabled: i = !1,
  search: c = !1,
  label: b = "",
  required: d = !1,
  name: p = "",
  parentClass: h = "",
  multiple: s = !1,
  dropdownMaxHeight: m = "",
  formData: g = {},
  dependencyKey: k = ""
}) => {
  var $;
  const [w, P] = S(!1), [I, T] = S(""), [D, O] = S(!0), A = te(null), y = te(null), [x, M] = S(
    []
  ), _ = r || r === !1 ? r : e, L = (C) => C == null || C === "" ? "" : String(typeof C == "boolean" ? C : C ?? "");
  U(
    () => {
      (async () => {
        if (typeof a == "function") {
          const N = await a(g);
          M(N || []);
        } else
          M(a || []);
      })();
    },
    k ? [a, g == null ? void 0 : g[k]] : [a]
  );
  const X = s ? (_ || []).map(L) : L(_), ae = x.filter(
    (C) => C.label.toLowerCase().includes(I.toLowerCase())
  ), W = (C) => {
    const N = L(C);
    return s ? X.includes(N) : N === X;
  };
  U(() => {
    const C = (N) => {
      A.current && !A.current.contains(N.target) && (P(!1), T(""));
    };
    return document.addEventListener("mousedown", C), () => document.removeEventListener("mousedown", C);
  }, []), U(() => {
    if (w && A.current) {
      const C = A.current.getBoundingClientRect(), B = window.innerHeight - C.bottom;
      O(B < 200);
    }
  }, [w]), U(() => {
    w && y.current && y.current.focus();
  }, [w]);
  const R = (C) => {
    let N = C;
    if (C === "true" ? N = !0 : C === "false" && (N = !1), s) {
      const B = X.includes(
        L(C)
      );
      let Y;
      B ? Y = (Array.isArray(r) ? r : []).filter(
        (F) => L(F) !== L(C)
      ) : Y = [...Array.isArray(r) ? r : [], N], t == null || t(Y);
    } else
      t == null || t(N), P(!1);
    T("");
  }, q = s ? x.filter((C) => W(C.value)).map((C) => C.label).join(", ") : ($ = x.find((C) => W(C.value))) == null ? void 0 : $.label;
  return U(() => {
    (_ || _ === !1) && setTimeout(() => {
      t == null || t(_);
    }, 100);
  }, []), /* @__PURE__ */ f("div", { className: h || "col-span-12", children: [
    /* @__PURE__ */ n(re, { label: b, required: d }),
    /* @__PURE__ */ f("div", { className: `relative ${l}`, ref: A, children: [
      /* @__PURE__ */ n(
        "select",
        {
          name: "hidden_select_for_validation",
          value: q || "",
          required: d,
          multiple: s,
=======
const gr = ({
  options: o = [],
  value: i = "",
  defaultValue: a = "",
  onChange: d,
  placeholder: l = "Select option",
  className: s = "",
  disabled: t = !1,
  search: f = !1,
  label: S = "",
  required: c = !1,
  name: g = "",
  parentClass: p = "",
  multiple: v = !1,
  // ✅ NEW
  dropdownMaxHeight: m = "",
  formData: u = {},
  dependencyKey: N = ""
}) => {
  var T;
  const [y, M] = C(!1), [A, U] = C(""), [L, O] = C(!0), B = Q(null), F = Q(null), [I, D] = C([]);
  let $ = i || i === !1 ? i : a;
  const K = (k) => k == null || k === "" ? "" : String(typeof k == "boolean" ? k : k ?? "");
  G(
    () => {
      (async () => {
        if (typeof o == "function") {
          const z = await o(u);
          D(z);
        } else
          D(o || []);
      })();
    },
    N ? [o, u == null ? void 0 : u[N]] : [o]
  );
  const J = v ? ($ || []).map(K) : K($), Z = I.filter(
    (k) => k.label.toLowerCase().includes(A.toLowerCase())
  ), j = (k) => {
    const z = K(k);
    return v ? J.includes(z) : z === J;
  };
  G(() => {
    const k = (z) => {
      B.current && !B.current.contains(z.target) && (M(!1), U(""));
    };
    return document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, []), G(() => {
    if (y && B.current) {
      const k = B.current.getBoundingClientRect(), W = window.innerHeight - k.bottom;
      O(W < 200);
    }
  }, [y]), G(() => {
    y && F.current && F.current.focus();
  }, [y]);
  const _ = (k) => {
    let z = k;
    if (k === "true" ? z = !0 : k === "false" && (z = !1), v) {
      const W = J.includes(K(k));
      let Y;
      W ? Y = i.filter(
        (re) => K(re) !== K(k)
      ) : Y = [...i || [], z], d(Y);
    } else
      d(z), M(!1);
    U("");
  }, V = v ? I.filter((k) => j(k.value)).map((k) => k.label).join(", ") : (T = I.find((k) => j(k.value))) == null ? void 0 : T.label;
  return G(() => {
    ($ || $ === !1) && setTimeout(() => {
      d($);
    }, 100);
  }, []), /* @__PURE__ */ b("div", { className: p || "col-span-12", children: [
    /* @__PURE__ */ e(q, { label: S, required: c }),
    /* @__PURE__ */ b("div", { className: `relative ${s}`, ref: B, children: [
      /* @__PURE__ */ e(
        "select",
        {
          name: "hidden_select_for_validation",
          value: V || "",
          required: c,
          multiple: v,
>>>>>>> main
          className: "absolute opacity-0 right-1/2 top-[80%] -translate-x-1/2 -translate-y-1/2 pointer-events-none h-[10px]",
          onChange: () => {
          },
          children: /* @__PURE__ */ n("option", { hidden: !0, value: q, children: q })
        }
      ),
<<<<<<< HEAD
      /* @__PURE__ */ f(
        "button",
        {
          type: "button",
          onClick: () => !i && P(!w),
          disabled: i,
          className: `w-full h-10 px-3 border border-gray-300 dark:border-gray-600 rounded-md text-left text-sm flex items-center justify-between 
          ${q ? "dark:text-white" : "text-gray-500 dark:text-gray-400"} 
          ${i ? "opacity-50 cursor-not-allowed" : "dark:bg-gray-700"}`,
          children: [
            /* @__PURE__ */ n("span", { className: "truncate", children: q || o }),
            /* @__PURE__ */ n(
              St,
=======
      /* @__PURE__ */ b(
        "button",
        {
          type: "button",
          onClick: () => !t && M(!y),
          disabled: t,
          className: `w-full h-10 px-3 border border-gray-300 dark:border-gray-600 rounded-md text-left text-sm flex items-center justify-between 
          ${V ? "dark:text-white" : "text-gray-500 dark:text-gray-400"} 
          ${t ? "opacity-50 cursor-not-allowed" : "dark:bg-gray-700"}`,
          children: [
            /* @__PURE__ */ e("span", { className: "truncate", children: V || l }),
            /* @__PURE__ */ e(
              Ee,
>>>>>>> main
              {
                className: `w-4 h-4 transition-transform ${w ? "rotate-180" : ""}`
              }
            )
          ]
        }
      ),
<<<<<<< HEAD
      w && /* @__PURE__ */ f(
=======
      y && /* @__PURE__ */ b(
>>>>>>> main
        "div",
        {
          className: `absolute z-50 w-full border rounded-md bg-white dark:bg-gray-700 shadow-lg 
            ${D ? "bottom-full mb-1" : "top-full mt-1"}`,
          children: [
<<<<<<< HEAD
            c && /* @__PURE__ */ n("div", { className: "p-2 border-b border-gray-200 dark:border-gray-600", children: /* @__PURE__ */ f("div", { className: "relative", children: [
              /* @__PURE__ */ n(ot, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }),
              /* @__PURE__ */ n(
=======
            f && /* @__PURE__ */ e("div", { className: "p-2 border-b border-gray-200 dark:border-gray-600", children: /* @__PURE__ */ b("div", { className: "relative", children: [
              /* @__PURE__ */ e(Te, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }),
              /* @__PURE__ */ e(
>>>>>>> main
                "input",
                {
                  ref: y,
                  type: "text",
<<<<<<< HEAD
                  value: I,
                  onChange: (C) => T(C.target.value),
=======
                  value: A,
                  onChange: (k) => U(k.target.value),
>>>>>>> main
                  placeholder: "Search...",
                  className: "w-full pl-9 pr-3 py-2 text-sm border rounded-md bg-white dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
                }
              )
            ] }) }),
            /* @__PURE__ */ n(
              "div",
              {
                className: "max-h-40 overflow-y-auto",
                style: {
                  maxHeight: m || ""
                },
<<<<<<< HEAD
                children: ae.length > 0 ? ae.map((C) => /* @__PURE__ */ f(
                  "button",
                  {
                    type: "button",
                    onClick: () => R(String(C.value)),
                    className: `w-full px-3 py-2 text-left text-sm flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 
                    ${W(C.value) ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300" : ""}`,
                    children: [
                      /* @__PURE__ */ n("span", { children: C.label }),
                      s && W(C.value) && /* @__PURE__ */ n(Ht, { className: "w-4 h-4" })
                    ]
                  },
                  String(C.value)
                )) : /* @__PURE__ */ n("div", { className: "px-3 py-2 text-sm text-gray-500 dark:text-gray-400", children: "No options found" })
=======
                children: Z.length > 0 ? Z.map((k) => /* @__PURE__ */ b(
                  "button",
                  {
                    type: "button",
                    onClick: () => _(String(k.value)),
                    className: `w-full px-3 py-2 text-left text-sm flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 
                    ${j(k.value) ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300" : ""}`,
                    children: [
                      /* @__PURE__ */ e("span", { children: k.label }),
                      v && j(k.value) && /* @__PURE__ */ e(er, { className: "w-4 h-4" })
                    ]
                  },
                  String(k.value)
                )) : /* @__PURE__ */ e("div", { className: "px-3 py-2 text-sm text-gray-500 dark:text-gray-400", children: "No options found" })
>>>>>>> main
              }
            )
          ]
        }
      )
    ] })
<<<<<<< HEAD
  ] }, p);
}, Rt = He.forwardRef(
  ({
    label: a,
    required: r,
    parentClass: e = "col-span-12",
    className: t = "",
    value: o = !1,
    onChange: l,
    disabled: i = !1,
    ...c
  }, b) => /* @__PURE__ */ f("div", { className: `flex justify-between ${e}`, children: [
    a && /* @__PURE__ */ n(re, { label: a, required: r }),
    /* @__PURE__ */ f("label", { className: "relative inline-flex items-center cursor-pointer", children: [
      /* @__PURE__ */ n(
=======
  ] }, g);
}, Ge = Me.forwardRef(
  ({
    label: o,
    required: i,
    parentClass: a = "col-span-12",
    className: d = "",
    value: l,
    onChange: s,
    disabled: t = !1,
    ...f
  }, S) => /* @__PURE__ */ b("div", { className: `flex justify-between ${a}`, children: [
    o && /* @__PURE__ */ e(q, { label: o, required: i }),
    /* @__PURE__ */ b("label", { className: "relative inline-flex items-center cursor-pointer", children: [
      /* @__PURE__ */ e(
>>>>>>> main
        "input",
        {
          type: "checkbox",
          ref: b,
          className: "sr-only peer",
<<<<<<< HEAD
          checked: o,
          onChange: (d) => l == null ? void 0 : l(d.target.checked),
          disabled: i,
          ...c
=======
          checked: l,
          onChange: (c) => s(c.target.checked),
          disabled: t,
          ...f
>>>>>>> main
        }
      ),
      /* @__PURE__ */ n(
        "div",
        {
          className: `
              w-11 h-6 bg-gray-200 peer-focus:outline-none
              rounded-full peer dark:bg-gray-700
              peer-checked:bg-primary-600
              peer-disabled:opacity-50 peer-disabled:cursor-not-allowed
              transition-colors duration-200
<<<<<<< HEAD
              ${t}
=======
              ${d}
>>>>>>> main
            `
        }
      ),
      /* @__PURE__ */ n(
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
<<<<<<< HEAD
Rt.displayName = "Switch";
const Be = [
=======
Ge.displayName = "Switch";
const Se = [
>>>>>>> main
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
<<<<<<< HEAD
function ir({
  label: a = "",
  value: r = "",
  name: e = "",
  parentClass: t = "",
  onChange: o,
  disabled: l = !1,
  required: i = !1,
  placeholder: c = "Phone number",
  search: b = !1,
  countriesList: d = !1,
  defaultCountry: p = ""
}) {
  const h = (x) => Be.find((M) => M.code == x), [s, m] = S(
    h(p) || Be[0]
  ), [g, k] = S(""), [w, P] = S(!1), [I, T] = S(""), D = te(null);
  U(() => {
    if (typeof r == "string" && r.startsWith("+")) {
      const x = Be.filter((M) => r.startsWith("+" + M.phone)).sort((M, _) => _.phone.length - M.phone.length)[0];
      if (x) {
        m(x), k(r.replace("+" + x.phone, ""));
        return;
      }
    }
    k(r || "");
  }, [r]);
  const O = (x) => {
    const M = x.target.value.replace(/\D/g, "");
    k(M), s && o && o("+" + s.phone + M);
  }, A = (x) => {
    m(x), o && o("+" + x.phone + g), P(!1), T("");
  };
  U(() => {
    const x = (M) => {
      D.current && !D.current.contains(M.target) && P(!1);
    };
    return document.addEventListener("mousedown", x), () => document.removeEventListener("mousedown", x);
  }, []);
  const y = Be.filter(
    (x) => x.label.toLowerCase().includes(I.toLowerCase()) || x.phone.includes(I)
  );
  return d ? /* @__PURE__ */ n(G, { children: /* @__PURE__ */ f("div", { className: t || "col-span-12", children: [
    /* @__PURE__ */ n(re, { label: a, required: i }),
    /* @__PURE__ */ f("div", { className: "relative ", ref: D, children: [
      /* @__PURE__ */ f(
        "div",
        {
          className: `h-[40px] flex items-center border rounded-md px-2 bg-white dark:bg-gray-700 transition-all
  ${w ? "ring-0.5 ring-blue-100 border-blue-300" : "border-gray-300 dark:border-gray-600"}
  ${l ? "opacity-60 cursor-not-allowed" : ""}`,
          children: [
            /* @__PURE__ */ f(
              "button",
              {
                type: "button",
                disabled: l,
                onClick: () => P(!w),
                className: "flex items-center gap-1 pr-2 border-r border-gray-300 dark:border-gray-700 focus:outline-none",
                children: [
                  s ? /* @__PURE__ */ n(
                    "img",
                    {
                      src: `https://flagcdn.com/w20/${s.code.toLowerCase()}.png`,
                      alt: s.code,
                      className: "w-5 h-3 object-cover"
                    }
                  ) : /* @__PURE__ */ n("span", { className: "text-gray-400 text-xs", children: "🌐" }),
                  /* @__PURE__ */ n(St, { className: "w-3 h-3 text-gray-500" })
                ]
              }
            ),
            s && /* @__PURE__ */ f("span", { className: "ml-2 text-sm text-gray-700 dark:text-gray-200 whitespace-nowrap", children: [
              "+",
              s.phone
=======
function hr({
  label: o = "",
  value: i = "",
  name: a = "",
  parentClass: d = "",
  onChange: l,
  disabled: s = !1,
  required: t = !1,
  placeholder: f = "Phone number",
  search: S = !1,
  countriesList: c = !1,
  defaultCountry: g = ""
}) {
  const p = (I) => Se.find((D) => D.code == I), [v, m] = C(
    p(g) || Se[0]
  ), [u, N] = C(""), [y, M] = C(!1), [A, U] = C(""), L = Q();
  G(() => {
    if (typeof i == "string" && i.startsWith("+")) {
      const I = Se.filter((D) => i.startsWith("+" + D.phone)).sort((D, $) => $.phone.length - D.phone.length)[0];
      if (I) {
        m(I), N(i.replace("+" + I.phone, ""));
        return;
      }
    }
    N(i);
  }, [i]);
  const O = (I) => {
    const D = I.target.value.replace(/\D/g, "");
    N(D), v && l && l("+" + v.phone + D);
  }, B = (I) => {
    m(I), l && l("+" + I.phone + u), M(!1), U("");
  };
  G(() => {
    const I = (D) => {
      L.current && !L.current.contains(D.target) && M(!1);
    };
    return document.addEventListener("mousedown", I), () => document.removeEventListener("mousedown", I);
  }, []);
  const F = Se.filter(
    (I) => I.label.toLowerCase().includes(A.toLowerCase()) || I.phone.includes(A)
  );
  return c ? /* @__PURE__ */ e(P, { children: /* @__PURE__ */ b("div", { className: d || "col-span-12", children: [
    /* @__PURE__ */ e(q, { label: o, required: t }),
    /* @__PURE__ */ b("div", { className: "relative ", ref: L, children: [
      /* @__PURE__ */ b(
        "div",
        {
          className: `h-[40px] flex items-center border rounded-md px-2 bg-white dark:bg-gray-700 transition-all
  ${y ? "ring-0.5 ring-blue-100 border-blue-300" : "border-gray-300 dark:border-gray-600"}
  ${s ? "opacity-60 cursor-not-allowed" : ""}`,
          children: [
            /* @__PURE__ */ b(
              "button",
              {
                type: "button",
                disabled: s,
                onClick: () => M(!y),
                className: "flex items-center gap-1 pr-2 border-r border-gray-300 dark:border-gray-700 focus:outline-none",
                children: [
                  v ? /* @__PURE__ */ e(
                    "img",
                    {
                      src: `https://flagcdn.com/w20/${v.code.toLowerCase()}.png`,
                      alt: v.code,
                      className: "w-5 h-3 object-cover"
                    }
                  ) : /* @__PURE__ */ e("span", { className: "text-gray-400 text-xs", children: "🌐" }),
                  /* @__PURE__ */ e(Ee, { className: "w-3 h-3 text-gray-500" })
                ]
              }
            ),
            v && /* @__PURE__ */ b("span", { className: "ml-2 text-sm text-gray-700 dark:text-gray-200 whitespace-nowrap", children: [
              "+",
              v.phone
>>>>>>> main
            ] }),
            /* @__PURE__ */ n(
              "input",
              {
                type: "tel",
                value: u,
                onChange: O,
<<<<<<< HEAD
                required: i,
                disabled: l || !s,
                placeholder: s ? c : "Select a country",
=======
                required: t,
                disabled: s || !v,
                placeholder: v ? f : "Select a country",
>>>>>>> main
                className: "flex-1 ml-2 bg-transparent outline-none text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400"
              }
            ),
            /* @__PURE__ */ n(
              "input",
              {
                type: "tel",
<<<<<<< HEAD
                required: i,
                tabIndex: -1,
                readOnly: !0,
                value: s && g ? "+" + s.phone + g : "",
=======
                required: t,
                tabIndex: -1,
                readOnly: !0,
                value: v && u ? "+" + v.phone + u : "",
>>>>>>> main
                style: {
                  position: "absolute",
                  opacity: 0,
                  pointerEvents: "none",
                  height: 0
                },
                onChange: () => {
                }
              }
            )
          ]
        }
      ),
<<<<<<< HEAD
      w && /* @__PURE__ */ f("div", { className: "absolute top-full left-0 w-full mt-1 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 shadow-lg z-50 max-h-60 overflow-y-auto", children: [
        b && /* @__PURE__ */ n("div", { className: "p-2 border-b border-gray-200 dark:border-gray-700", children: /* @__PURE__ */ f("div", { className: "relative", children: [
          /* @__PURE__ */ n(ot, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" }),
          /* @__PURE__ */ n(
            "input",
            {
              type: "text",
              value: I,
              onChange: (x) => T(x.target.value),
=======
      y && /* @__PURE__ */ b("div", { className: "absolute top-full left-0 w-full mt-1 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 shadow-lg z-50 max-h-60 overflow-y-auto", children: [
        S && /* @__PURE__ */ e("div", { className: "p-2 border-b border-gray-200 dark:border-gray-700", children: /* @__PURE__ */ b("div", { className: "relative", children: [
          /* @__PURE__ */ e(Te, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" }),
          /* @__PURE__ */ e(
            "input",
            {
              type: "text",
              value: A,
              onChange: (I) => U(I.target.value),
>>>>>>> main
              placeholder: "Search country...",
              className: "w-full pl-9 pr-3 py-2 text-sm border rounded-md bg-white dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none "
            }
          )
        ] }) }),
<<<<<<< HEAD
        y.map((x) => /* @__PURE__ */ f(
          "button",
          {
            type: "button",
            onClick: () => A(x),
=======
        F.map((I) => /* @__PURE__ */ b(
          "button",
          {
            type: "button",
            onClick: () => B(I),
>>>>>>> main
            className: "w-full flex items-center gap-2 px-2 py-1 text-sm hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100",
            children: [
              /* @__PURE__ */ n(
                "img",
                {
<<<<<<< HEAD
                  src: `https://flagcdn.com/w20/${x.code.toLowerCase()}.png`,
                  alt: x.code,
                  className: "w-5 h-3 object-cover"
                }
              ),
              /* @__PURE__ */ f("span", { children: [
                x.label,
                " (+",
                x.phone,
=======
                  src: `https://flagcdn.com/w20/${I.code.toLowerCase()}.png`,
                  alt: I.code,
                  className: "w-5 h-3 object-cover"
                }
              ),
              /* @__PURE__ */ b("span", { children: [
                I.label,
                " (+",
                I.phone,
>>>>>>> main
                ")"
              ] })
            ]
          },
<<<<<<< HEAD
          x.code
        ))
      ] })
    ] })
  ] }, e) }) : /* @__PURE__ */ n(G, { children: /* @__PURE__ */ f("div", { className: t || "col-span-12", children: [
    /* @__PURE__ */ n(re, { label: a, required: i }),
    /* @__PURE__ */ n(
      "input",
      {
        type: "text",
        value: r,
        onChange: (M) => {
          const _ = M.target.value.replace(/[^+\d]/g, ""), L = _.startsWith("+") ? "+" + _.replace(/[+]/g, "").slice(0) : _;
          o == null || o(L);
        },
        placeholder: c,
        disabled: l,
        required: i,
=======
          I.code
        ))
      ] })
    ] })
  ] }, a) }) : /* @__PURE__ */ e(P, { children: /* @__PURE__ */ b("div", { className: d || "col-span-12", children: [
    /* @__PURE__ */ e(q, { label: o, required: t }),
    /* @__PURE__ */ e(
      "input",
      {
        type: "text",
        value: i,
        onChange: (D) => {
          const $ = D.target.value.replace(/[^+\d]/g, ""), K = $.startsWith("+") ? "+" + $.replace(/[+]/g, "").slice(0) : $;
          l(K);
        },
        placeholder: f,
        disabled: s,
        required: t,
>>>>>>> main
        className: `w-full h-10 px-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md \r
        bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none \r
        focus:ring-1 focus:ring-blue-300 dark:focus:ring-blue-200`,
        inputMode: "tel",
        pattern: "^\\+\\d{1,15}$"
      }
    )
<<<<<<< HEAD
  ] }, e) });
}
const Ct = He.forwardRef(
  ({ className: a = "", label: r, required: e, ...t }, o) => {
    const l = `
      placeholder-gray-400 dark:placeholder-gray-400
      ${a}
    `.trim();
    return /* @__PURE__ */ n(G, { children: /* @__PURE__ */ f("div", { className: t.parentClass || "col-span-12", children: [
      /* @__PURE__ */ n(re, { label: r, required: e }),
      /* @__PURE__ */ n("div", { className: "relative", children: /* @__PURE__ */ n(
        "textarea",
        {
          className: l,
          ref: o,
          required: e,
          ...t
        }
      ) })
    ] }, t.name) });
  }
);
Ct.displayName = "TextArea";
var Xe = function(a, r) {
  return Xe = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
    e.__proto__ = t;
  } || function(e, t) {
    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
  }, Xe(a, r);
};
function lr(a, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  Xe(a, r);
  function e() {
    this.constructor = a;
  }
  a.prototype = r === null ? Object.create(r) : (e.prototype = r.prototype, new e());
}
var Z = function() {
  return Z = Object.assign || function(r) {
    for (var e, t = 1, o = arguments.length; t < o; t++) {
      e = arguments[t];
      for (var l in e) Object.prototype.hasOwnProperty.call(e, l) && (r[l] = e[l]);
    }
    return r;
  }, Z.apply(this, arguments);
};
function sr(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var ct = !1, fe, Je, qe, Ge, Ke, Dt, We, Qe, et, tt, _t, rt, at, Pt, At;
function Q() {
  if (!ct) {
    ct = !0;
    var a = navigator.userAgent, r = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(a), e = /(Mac OS X)|(Windows)|(Linux)/.exec(a);
    if (rt = /\b(iPhone|iP[ao]d)/.exec(a), at = /\b(iP[ao]d)/.exec(a), tt = /Android/i.exec(a), Pt = /FBAN\/\w+;/i.exec(a), At = /Mobile/i.exec(a), _t = !!/Win64/.exec(a), r) {
      fe = r[1] ? parseFloat(r[1]) : r[5] ? parseFloat(r[5]) : NaN, fe && document && document.documentMode && (fe = document.documentMode);
      var t = /(?:Trident\/(\d+.\d+))/.exec(a);
      Dt = t ? parseFloat(t[1]) + 4 : fe, Je = r[2] ? parseFloat(r[2]) : NaN, qe = r[3] ? parseFloat(r[3]) : NaN, Ge = r[4] ? parseFloat(r[4]) : NaN, Ge ? (r = /(?:Chrome\/(\d+\.\d+))/.exec(a), Ke = r && r[1] ? parseFloat(r[1]) : NaN) : Ke = NaN;
    } else
      fe = Je = qe = Ke = Ge = NaN;
    if (e) {
      if (e[1]) {
        var o = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(a);
        We = o ? parseFloat(o[1].replace("_", ".")) : !0;
      } else
        We = !1;
      Qe = !!e[2], et = !!e[3];
    } else
      We = Qe = et = !1;
  }
}
var nt = {
  /**
   *  Check if the UA is Internet Explorer.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  ie: function() {
    return Q() || fe;
  },
  /**
   * Check if we're in Internet Explorer compatibility mode.
   *
   * @return bool true if in compatibility mode, false if
   * not compatibility mode or not ie
   */
  ieCompatibilityMode: function() {
    return Q() || Dt > fe;
  },
  /**
   * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
   * only need this because Skype can't handle 64-bit IE yet.  We need to remove
   * this when we don't need it -- tracked by #601957.
   */
  ie64: function() {
    return nt.ie() && _t;
  },
  /**
   *  Check if the UA is Firefox.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  firefox: function() {
    return Q() || Je;
  },
  /**
   *  Check if the UA is Opera.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  opera: function() {
    return Q() || qe;
  },
  /**
   *  Check if the UA is WebKit.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  webkit: function() {
    return Q() || Ge;
  },
  /**
   *  For Push
   *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
   */
  safari: function() {
    return nt.webkit();
  },
  /**
   *  Check if the UA is a Chrome browser.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  chrome: function() {
    return Q() || Ke;
  },
  /**
   *  Check if the user is running Windows.
   *
   *  @return bool `true' if the user's OS is Windows.
   */
  windows: function() {
    return Q() || Qe;
  },
  /**
   *  Check if the user is running Mac OS X.
   *
   *  @return float|bool   Returns a float if a version number is detected,
   *                       otherwise true/false.
   */
  osx: function() {
    return Q() || We;
  },
  /**
   * Check if the user is running Linux.
   *
   * @return bool `true' if the user's OS is some flavor of Linux.
   */
  linux: function() {
    return Q() || et;
  },
  /**
   * Check if the user is running on an iPhone or iPod platform.
   *
   * @return bool `true' if the user is running some flavor of the
   *    iPhone OS.
   */
  iphone: function() {
    return Q() || rt;
  },
  mobile: function() {
    return Q() || rt || at || tt || At;
  },
  nativeApp: function() {
    return Q() || Pt;
  },
  android: function() {
    return Q() || tt;
  },
  ipad: function() {
    return Q() || at;
  }
}, cr = nt, dr = !!(typeof window < "u" && window.document && window.document.createElement), ur = {
  canUseDOM: dr
}, hr = ur, Et = hr, Lt;
Et.canUseDOM && (Lt = document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
// @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
document.implementation.hasFeature("", "") !== !0);
/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
function pr(a, r) {
  if (!Et.canUseDOM || r && !("addEventListener" in document))
    return !1;
  var e = "on" + a, t = e in document;
  if (!t) {
    var o = document.createElement("div");
    o.setAttribute(e, "return;"), t = typeof o[e] == "function";
  }
  return !t && Lt && a === "wheel" && (t = document.implementation.hasFeature("Events.wheel", "3.0")), t;
}
var br = pr, fr = cr, gr = br, dt = 10, ut = 40, ht = 800;
function Tt(a) {
  var r = 0, e = 0, t = 0, o = 0;
  return "detail" in a && (e = a.detail), "wheelDelta" in a && (e = -a.wheelDelta / 120), "wheelDeltaY" in a && (e = -a.wheelDeltaY / 120), "wheelDeltaX" in a && (r = -a.wheelDeltaX / 120), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (r = e, e = 0), t = r * dt, o = e * dt, "deltaY" in a && (o = a.deltaY), "deltaX" in a && (t = a.deltaX), (t || o) && a.deltaMode && (a.deltaMode == 1 ? (t *= ut, o *= ut) : (t *= ht, o *= ht)), t && !r && (r = t < 1 ? -1 : 1), o && !e && (e = o < 1 ? -1 : 1), {
    spinX: r,
    spinY: e,
    pixelX: t,
    pixelY: o
  };
}
Tt.getEventType = function() {
  return fr.firefox() ? "DOMMouseScroll" : gr("wheel") ? "wheel" : "mousewheel";
};
var mr = Tt, yr = mr;
const vr = /* @__PURE__ */ sr(yr);
function wr(a, r, e, t, o, l) {
  l === void 0 && (l = 0);
  var i = xe(a, r, l), c = i.width, b = i.height, d = Math.min(c, e), p = Math.min(b, t);
  return d > p * o ? {
    width: p * o,
    height: p
  } : {
    width: d,
    height: d / o
  };
}
function xr(a) {
  return a.width > a.height ? a.width / a.naturalWidth : a.height / a.naturalHeight;
}
function Ce(a, r, e, t, o) {
  o === void 0 && (o = 0);
  var l = xe(r.width, r.height, o), i = l.width, c = l.height;
  return {
    x: pt(a.x, i, e.width, t),
    y: pt(a.y, c, e.height, t)
  };
}
function pt(a, r, e, t) {
  var o = r * t / 2 - e / 2;
  return Ye(a, -o, o);
}
function bt(a, r) {
  return Math.sqrt(Math.pow(a.y - r.y, 2) + Math.pow(a.x - r.x, 2));
}
function ft(a, r) {
  return Math.atan2(r.y - a.y, r.x - a.x) * 180 / Math.PI;
}
function kr(a, r, e, t, o, l, i) {
  l === void 0 && (l = 0), i === void 0 && (i = !0);
  var c = i ? Nr : Sr, b = xe(r.width, r.height, l), d = xe(r.naturalWidth, r.naturalHeight, l), p = {
    x: c(100, ((b.width - e.width / o) / 2 - a.x / o) / b.width * 100),
    y: c(100, ((b.height - e.height / o) / 2 - a.y / o) / b.height * 100),
    width: c(100, e.width / b.width * 100 / o),
    height: c(100, e.height / b.height * 100 / o)
  }, h = Math.round(c(d.width, p.width * d.width / 100)), s = Math.round(c(d.height, p.height * d.height / 100)), m = d.width >= d.height * t, g = m ? {
    width: Math.round(s * t),
    height: s
  } : {
    width: h,
    height: Math.round(h / t)
  }, k = Z(Z({}, g), {
    x: Math.round(c(d.width - g.width, p.x * d.width / 100)),
    y: Math.round(c(d.height - g.height, p.y * d.height / 100))
  });
  return {
    croppedAreaPercentages: p,
    croppedAreaPixels: k
  };
}
function Nr(a, r) {
  return Math.min(a, Math.max(0, r));
}
function Sr(a, r) {
  return r;
}
function Mr(a, r, e, t, o, l) {
  var i = xe(r.width, r.height, e), c = Ye(t.width / i.width * (100 / a.width), o, l), b = {
    x: c * i.width / 2 - t.width / 2 - i.width * c * (a.x / 100),
    y: c * i.height / 2 - t.height / 2 - i.height * c * (a.y / 100)
  };
  return {
    crop: b,
    zoom: c
  };
}
function Rr(a, r, e) {
  var t = xr(r);
  return e.height > e.width ? e.height / (a.height * t) : e.width / (a.width * t);
}
function Cr(a, r, e, t, o, l) {
  e === void 0 && (e = 0);
  var i = xe(r.naturalWidth, r.naturalHeight, e), c = Ye(Rr(a, r, t), o, l), b = t.height > t.width ? t.height / a.height : t.width / a.width, d = {
    x: ((i.width - a.width) / 2 - a.x) * b,
    y: ((i.height - a.height) / 2 - a.y) * b
  };
  return {
    crop: d,
    zoom: c
  };
}
function gt(a, r) {
  return {
    x: (r.x + a.x) / 2,
    y: (r.y + a.y) / 2
  };
}
function Dr(a) {
  return a * Math.PI / 180;
}
function xe(a, r, e) {
  var t = Dr(e);
  return {
    width: Math.abs(Math.cos(t) * a) + Math.abs(Math.sin(t) * r),
    height: Math.abs(Math.sin(t) * a) + Math.abs(Math.cos(t) * r)
  };
}
function Ye(a, r, e) {
  return Math.min(Math.max(a, r), e);
}
function $e() {
  for (var a = [], r = 0; r < arguments.length; r++)
    a[r] = arguments[r];
  return a.filter(function(e) {
    return typeof e == "string" && e.length > 0;
  }).join(" ").trim();
}
var _r = `.reactEasyCrop_Container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  user-select: none;
  touch-action: none;
  cursor: move;
  display: flex;
  justify-content: center;
  align-items: center;
}

.reactEasyCrop_Image,
.reactEasyCrop_Video {
  will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */
}

.reactEasyCrop_Contain {
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.reactEasyCrop_Cover_Horizontal {
  width: 100%;
  height: auto;
}
.reactEasyCrop_Cover_Vertical {
  width: auto;
  height: 100%;
}

.reactEasyCrop_CropArea {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0 0 0 9999em;
  color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.reactEasyCrop_CropAreaRound {
  border-radius: 50%;
}

.reactEasyCrop_CropAreaGrid::before {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 0;
  bottom: 0;
  left: 33.33%;
  right: 33.33%;
  border-top: 0;
  border-bottom: 0;
}

.reactEasyCrop_CropAreaGrid::after {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 33.33%;
  bottom: 33.33%;
  left: 0;
  right: 0;
  border-left: 0;
  border-right: 0;
}
`, Pr = 1, Ar = 3, Er = 1, Lr = (
  /** @class */
  function(a) {
    lr(r, a);
    function r() {
      var e = a !== null && a.apply(this, arguments) || this;
      return e.cropperRef = de.createRef(), e.imageRef = de.createRef(), e.videoRef = de.createRef(), e.containerPosition = {
        x: 0,
        y: 0
      }, e.containerRef = null, e.styleRef = null, e.containerRect = null, e.mediaSize = {
        width: 0,
        height: 0,
        naturalWidth: 0,
        naturalHeight: 0
      }, e.dragStartPosition = {
        x: 0,
        y: 0
      }, e.dragStartCrop = {
        x: 0,
        y: 0
      }, e.gestureZoomStart = 0, e.gestureRotationStart = 0, e.isTouching = !1, e.lastPinchDistance = 0, e.lastPinchRotation = 0, e.rafDragTimeout = null, e.rafPinchTimeout = null, e.wheelTimer = null, e.currentDoc = typeof document < "u" ? document : null, e.currentWindow = typeof window < "u" ? window : null, e.resizeObserver = null, e.previousCropSize = null, e.isInitialized = !1, e.state = {
        cropSize: null,
        hasWheelJustStarted: !1,
        mediaObjectFit: void 0
      }, e.initResizeObserver = function() {
        if (!(typeof window.ResizeObserver > "u" || !e.containerRef)) {
          var t = !0;
          e.resizeObserver = new window.ResizeObserver(function(o) {
            if (t) {
              t = !1;
              return;
            }
            e.computeSizes();
          }), e.resizeObserver.observe(e.containerRef);
        }
      }, e.preventZoomSafari = function(t) {
        return t.preventDefault();
      }, e.cleanEvents = function() {
        e.currentDoc && (e.currentDoc.removeEventListener("mousemove", e.onMouseMove), e.currentDoc.removeEventListener("mouseup", e.onDragStopped), e.currentDoc.removeEventListener("touchmove", e.onTouchMove), e.currentDoc.removeEventListener("touchend", e.onDragStopped), e.currentDoc.removeEventListener("gesturechange", e.onGestureChange), e.currentDoc.removeEventListener("gestureend", e.onGestureEnd), e.currentDoc.removeEventListener("scroll", e.onScroll));
      }, e.clearScrollEvent = function() {
        e.containerRef && e.containerRef.removeEventListener("wheel", e.onWheel), e.wheelTimer && clearTimeout(e.wheelTimer);
      }, e.onMediaLoad = function() {
        var t = e.computeSizes();
        t && (e.previousCropSize = t, e.emitCropData(), e.setInitialCrop(t), e.isInitialized = !0), e.props.onMediaLoaded && e.props.onMediaLoaded(e.mediaSize);
      }, e.setInitialCrop = function(t) {
        if (e.props.initialCroppedAreaPercentages) {
          var o = Mr(e.props.initialCroppedAreaPercentages, e.mediaSize, e.props.rotation, t, e.props.minZoom, e.props.maxZoom), l = o.crop, i = o.zoom;
          e.props.onCropChange(l), e.props.onZoomChange && e.props.onZoomChange(i);
        } else if (e.props.initialCroppedAreaPixels) {
          var c = Cr(e.props.initialCroppedAreaPixels, e.mediaSize, e.props.rotation, t, e.props.minZoom, e.props.maxZoom), l = c.crop, i = c.zoom;
          e.props.onCropChange(l), e.props.onZoomChange && e.props.onZoomChange(i);
        }
      }, e.computeSizes = function() {
        var t, o, l, i, c, b, d = e.imageRef.current || e.videoRef.current;
        if (d && e.containerRef) {
          e.containerRect = e.containerRef.getBoundingClientRect(), e.saveContainerPosition();
          var p = e.containerRect.width / e.containerRect.height, h = ((t = e.imageRef.current) === null || t === void 0 ? void 0 : t.naturalWidth) || ((o = e.videoRef.current) === null || o === void 0 ? void 0 : o.videoWidth) || 0, s = ((l = e.imageRef.current) === null || l === void 0 ? void 0 : l.naturalHeight) || ((i = e.videoRef.current) === null || i === void 0 ? void 0 : i.videoHeight) || 0, m = d.offsetWidth < h || d.offsetHeight < s, g = h / s, k = void 0;
          if (m)
            switch (e.state.mediaObjectFit) {
              default:
              case "contain":
                k = p > g ? {
                  width: e.containerRect.height * g,
                  height: e.containerRect.height
                } : {
                  width: e.containerRect.width,
                  height: e.containerRect.width / g
                };
                break;
              case "horizontal-cover":
                k = {
                  width: e.containerRect.width,
                  height: e.containerRect.width / g
                };
                break;
              case "vertical-cover":
                k = {
                  width: e.containerRect.height * g,
                  height: e.containerRect.height
                };
                break;
            }
          else
            k = {
              width: d.offsetWidth,
              height: d.offsetHeight
            };
          e.mediaSize = Z(Z({}, k), {
            naturalWidth: h,
            naturalHeight: s
          }), e.props.setMediaSize && e.props.setMediaSize(e.mediaSize);
          var w = e.props.cropSize ? e.props.cropSize : wr(e.mediaSize.width, e.mediaSize.height, e.containerRect.width, e.containerRect.height, e.props.aspect, e.props.rotation);
          return (((c = e.state.cropSize) === null || c === void 0 ? void 0 : c.height) !== w.height || ((b = e.state.cropSize) === null || b === void 0 ? void 0 : b.width) !== w.width) && e.props.onCropSizeChange && e.props.onCropSizeChange(w), e.setState({
            cropSize: w
          }, e.recomputeCropPosition), e.props.setCropSize && e.props.setCropSize(w), w;
        }
      }, e.saveContainerPosition = function() {
        if (e.containerRef) {
          var t = e.containerRef.getBoundingClientRect();
          e.containerPosition = {
            x: t.left,
            y: t.top
          };
        }
      }, e.onMouseDown = function(t) {
        e.currentDoc && (t.preventDefault(), e.currentDoc.addEventListener("mousemove", e.onMouseMove), e.currentDoc.addEventListener("mouseup", e.onDragStopped), e.saveContainerPosition(), e.onDragStart(r.getMousePoint(t)));
      }, e.onMouseMove = function(t) {
        return e.onDrag(r.getMousePoint(t));
      }, e.onScroll = function(t) {
        e.currentDoc && (t.preventDefault(), e.saveContainerPosition());
      }, e.onTouchStart = function(t) {
        e.currentDoc && (e.isTouching = !0, !(e.props.onTouchRequest && !e.props.onTouchRequest(t)) && (e.currentDoc.addEventListener("touchmove", e.onTouchMove, {
          passive: !1
        }), e.currentDoc.addEventListener("touchend", e.onDragStopped), e.saveContainerPosition(), t.touches.length === 2 ? e.onPinchStart(t) : t.touches.length === 1 && e.onDragStart(r.getTouchPoint(t.touches[0]))));
      }, e.onTouchMove = function(t) {
        t.preventDefault(), t.touches.length === 2 ? e.onPinchMove(t) : t.touches.length === 1 && e.onDrag(r.getTouchPoint(t.touches[0]));
      }, e.onGestureStart = function(t) {
        e.currentDoc && (t.preventDefault(), e.currentDoc.addEventListener("gesturechange", e.onGestureChange), e.currentDoc.addEventListener("gestureend", e.onGestureEnd), e.gestureZoomStart = e.props.zoom, e.gestureRotationStart = e.props.rotation);
      }, e.onGestureChange = function(t) {
        if (t.preventDefault(), !e.isTouching) {
          var o = r.getMousePoint(t), l = e.gestureZoomStart - 1 + t.scale;
          if (e.setNewZoom(l, o, {
            shouldUpdatePosition: !0
          }), e.props.onRotationChange) {
            var i = e.gestureRotationStart + t.rotation;
            e.props.onRotationChange(i);
          }
        }
      }, e.onGestureEnd = function(t) {
        e.cleanEvents();
      }, e.onDragStart = function(t) {
        var o, l, i = t.x, c = t.y;
        e.dragStartPosition = {
          x: i,
          y: c
        }, e.dragStartCrop = Z({}, e.props.crop), (l = (o = e.props).onInteractionStart) === null || l === void 0 || l.call(o);
      }, e.onDrag = function(t) {
        var o = t.x, l = t.y;
        e.currentWindow && (e.rafDragTimeout && e.currentWindow.cancelAnimationFrame(e.rafDragTimeout), e.rafDragTimeout = e.currentWindow.requestAnimationFrame(function() {
          if (e.state.cropSize && !(o === void 0 || l === void 0)) {
            var i = o - e.dragStartPosition.x, c = l - e.dragStartPosition.y, b = {
              x: e.dragStartCrop.x + i,
              y: e.dragStartCrop.y + c
            }, d = e.props.restrictPosition ? Ce(b, e.mediaSize, e.state.cropSize, e.props.zoom, e.props.rotation) : b;
            e.props.onCropChange(d);
          }
        }));
      }, e.onDragStopped = function() {
        var t, o;
        e.isTouching = !1, e.cleanEvents(), e.emitCropData(), (o = (t = e.props).onInteractionEnd) === null || o === void 0 || o.call(t);
      }, e.onWheel = function(t) {
        if (e.currentWindow && !(e.props.onWheelRequest && !e.props.onWheelRequest(t))) {
          t.preventDefault();
          var o = r.getMousePoint(t), l = vr(t).pixelY, i = e.props.zoom - l * e.props.zoomSpeed / 200;
          e.setNewZoom(i, o, {
            shouldUpdatePosition: !0
          }), e.state.hasWheelJustStarted || e.setState({
            hasWheelJustStarted: !0
          }, function() {
            var c, b;
            return (b = (c = e.props).onInteractionStart) === null || b === void 0 ? void 0 : b.call(c);
          }), e.wheelTimer && clearTimeout(e.wheelTimer), e.wheelTimer = e.currentWindow.setTimeout(function() {
            return e.setState({
              hasWheelJustStarted: !1
            }, function() {
              var c, b;
              return (b = (c = e.props).onInteractionEnd) === null || b === void 0 ? void 0 : b.call(c);
            });
          }, 250);
        }
      }, e.getPointOnContainer = function(t, o) {
        var l = t.x, i = t.y;
        if (!e.containerRect)
          throw new Error("The Cropper is not mounted");
        return {
          x: e.containerRect.width / 2 - (l - o.x),
          y: e.containerRect.height / 2 - (i - o.y)
        };
      }, e.getPointOnMedia = function(t) {
        var o = t.x, l = t.y, i = e.props, c = i.crop, b = i.zoom;
        return {
          x: (o + c.x) / b,
          y: (l + c.y) / b
        };
      }, e.setNewZoom = function(t, o, l) {
        var i = l === void 0 ? {} : l, c = i.shouldUpdatePosition, b = c === void 0 ? !0 : c;
        if (!(!e.state.cropSize || !e.props.onZoomChange)) {
          var d = Ye(t, e.props.minZoom, e.props.maxZoom);
          if (b) {
            var p = e.getPointOnContainer(o, e.containerPosition), h = e.getPointOnMedia(p), s = {
              x: h.x * d - p.x,
              y: h.y * d - p.y
            }, m = e.props.restrictPosition ? Ce(s, e.mediaSize, e.state.cropSize, d, e.props.rotation) : s;
            e.props.onCropChange(m);
          }
          e.props.onZoomChange(d);
        }
      }, e.getCropData = function() {
        if (!e.state.cropSize)
          return null;
        var t = e.props.restrictPosition ? Ce(e.props.crop, e.mediaSize, e.state.cropSize, e.props.zoom, e.props.rotation) : e.props.crop;
        return kr(t, e.mediaSize, e.state.cropSize, e.getAspect(), e.props.zoom, e.props.rotation, e.props.restrictPosition);
      }, e.emitCropData = function() {
        var t = e.getCropData();
        if (t) {
          var o = t.croppedAreaPercentages, l = t.croppedAreaPixels;
          e.props.onCropComplete && e.props.onCropComplete(o, l), e.props.onCropAreaChange && e.props.onCropAreaChange(o, l);
        }
      }, e.emitCropAreaChange = function() {
        var t = e.getCropData();
        if (t) {
          var o = t.croppedAreaPercentages, l = t.croppedAreaPixels;
          e.props.onCropAreaChange && e.props.onCropAreaChange(o, l);
        }
      }, e.recomputeCropPosition = function() {
        var t, o;
        if (e.state.cropSize) {
          var l = e.props.crop;
          if (e.isInitialized && (!((t = e.previousCropSize) === null || t === void 0) && t.width) && (!((o = e.previousCropSize) === null || o === void 0) && o.height)) {
            var i = Math.abs(e.previousCropSize.width - e.state.cropSize.width) > 1e-6 || Math.abs(e.previousCropSize.height - e.state.cropSize.height) > 1e-6;
            if (i) {
              var c = e.state.cropSize.width / e.previousCropSize.width, b = e.state.cropSize.height / e.previousCropSize.height;
              l = {
                x: e.props.crop.x * c,
                y: e.props.crop.y * b
              };
            }
          }
          var d = e.props.restrictPosition ? Ce(l, e.mediaSize, e.state.cropSize, e.props.zoom, e.props.rotation) : l;
          e.previousCropSize = e.state.cropSize, e.props.onCropChange(d), e.emitCropData();
        }
      }, e.onKeyDown = function(t) {
        var o, l, i = e.props, c = i.crop, b = i.onCropChange, d = i.keyboardStep, p = i.zoom, h = i.rotation, s = d;
        if (e.state.cropSize) {
          t.shiftKey && (s *= 0.2);
          var m = Z({}, c);
          switch (t.key) {
            case "ArrowUp":
              m.y -= s, t.preventDefault();
              break;
            case "ArrowDown":
              m.y += s, t.preventDefault();
              break;
            case "ArrowLeft":
              m.x -= s, t.preventDefault();
              break;
            case "ArrowRight":
              m.x += s, t.preventDefault();
              break;
            default:
              return;
          }
          e.props.restrictPosition && (m = Ce(m, e.mediaSize, e.state.cropSize, p, h)), t.repeat || (l = (o = e.props).onInteractionStart) === null || l === void 0 || l.call(o), b(m);
        }
      }, e.onKeyUp = function(t) {
        var o, l;
        switch (t.key) {
          case "ArrowUp":
          case "ArrowDown":
          case "ArrowLeft":
          case "ArrowRight":
            t.preventDefault();
            break;
          default:
            return;
        }
        e.emitCropData(), (l = (o = e.props).onInteractionEnd) === null || l === void 0 || l.call(o);
      }, e;
    }
    return r.prototype.componentDidMount = function() {
      !this.currentDoc || !this.currentWindow || (this.containerRef && (this.containerRef.ownerDocument && (this.currentDoc = this.containerRef.ownerDocument), this.currentDoc.defaultView && (this.currentWindow = this.currentDoc.defaultView), this.initResizeObserver(), typeof window.ResizeObserver > "u" && this.currentWindow.addEventListener("resize", this.computeSizes), this.props.zoomWithScroll && this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }), this.containerRef.addEventListener("gesturestart", this.onGestureStart)), this.currentDoc.addEventListener("scroll", this.onScroll), this.props.disableAutomaticStylesInjection || (this.styleRef = this.currentDoc.createElement("style"), this.styleRef.setAttribute("type", "text/css"), this.props.nonce && this.styleRef.setAttribute("nonce", this.props.nonce), this.styleRef.innerHTML = _r, this.currentDoc.head.appendChild(this.styleRef)), this.imageRef.current && this.imageRef.current.complete && this.onMediaLoad(), this.props.setImageRef && this.props.setImageRef(this.imageRef), this.props.setVideoRef && this.props.setVideoRef(this.videoRef), this.props.setCropperRef && this.props.setCropperRef(this.cropperRef));
    }, r.prototype.componentWillUnmount = function() {
      var e, t;
      !this.currentDoc || !this.currentWindow || (typeof window.ResizeObserver > "u" && this.currentWindow.removeEventListener("resize", this.computeSizes), (e = this.resizeObserver) === null || e === void 0 || e.disconnect(), this.containerRef && this.containerRef.removeEventListener("gesturestart", this.preventZoomSafari), this.styleRef && ((t = this.styleRef.parentNode) === null || t === void 0 || t.removeChild(this.styleRef)), this.cleanEvents(), this.props.zoomWithScroll && this.clearScrollEvent());
    }, r.prototype.componentDidUpdate = function(e) {
      var t, o, l, i, c, b, d, p, h;
      e.rotation !== this.props.rotation ? (this.computeSizes(), this.recomputeCropPosition()) : e.aspect !== this.props.aspect ? this.computeSizes() : e.objectFit !== this.props.objectFit ? this.computeSizes() : e.zoom !== this.props.zoom ? this.recomputeCropPosition() : ((t = e.cropSize) === null || t === void 0 ? void 0 : t.height) !== ((o = this.props.cropSize) === null || o === void 0 ? void 0 : o.height) || ((l = e.cropSize) === null || l === void 0 ? void 0 : l.width) !== ((i = this.props.cropSize) === null || i === void 0 ? void 0 : i.width) ? this.computeSizes() : (((c = e.crop) === null || c === void 0 ? void 0 : c.x) !== ((b = this.props.crop) === null || b === void 0 ? void 0 : b.x) || ((d = e.crop) === null || d === void 0 ? void 0 : d.y) !== ((p = this.props.crop) === null || p === void 0 ? void 0 : p.y)) && this.emitCropAreaChange(), e.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef && (this.props.zoomWithScroll ? this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }) : this.clearScrollEvent()), e.video !== this.props.video && ((h = this.videoRef.current) === null || h === void 0 || h.load());
      var s = this.getObjectFit();
      s !== this.state.mediaObjectFit && this.setState({
        mediaObjectFit: s
      }, this.computeSizes);
    }, r.prototype.getAspect = function() {
      var e = this.props, t = e.cropSize, o = e.aspect;
      return t ? t.width / t.height : o;
    }, r.prototype.getObjectFit = function() {
      var e, t, o, l;
      if (this.props.objectFit === "cover") {
        var i = this.imageRef.current || this.videoRef.current;
        if (i && this.containerRef) {
          this.containerRect = this.containerRef.getBoundingClientRect();
          var c = this.containerRect.width / this.containerRect.height, b = ((e = this.imageRef.current) === null || e === void 0 ? void 0 : e.naturalWidth) || ((t = this.videoRef.current) === null || t === void 0 ? void 0 : t.videoWidth) || 0, d = ((o = this.imageRef.current) === null || o === void 0 ? void 0 : o.naturalHeight) || ((l = this.videoRef.current) === null || l === void 0 ? void 0 : l.videoHeight) || 0, p = b / d;
          return p < c ? "horizontal-cover" : "vertical-cover";
        }
        return "horizontal-cover";
      }
      return this.props.objectFit;
    }, r.prototype.onPinchStart = function(e) {
      var t = r.getTouchPoint(e.touches[0]), o = r.getTouchPoint(e.touches[1]);
      this.lastPinchDistance = bt(t, o), this.lastPinchRotation = ft(t, o), this.onDragStart(gt(t, o));
    }, r.prototype.onPinchMove = function(e) {
      var t = this;
      if (!(!this.currentDoc || !this.currentWindow)) {
        var o = r.getTouchPoint(e.touches[0]), l = r.getTouchPoint(e.touches[1]), i = gt(o, l);
        this.onDrag(i), this.rafPinchTimeout && this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout), this.rafPinchTimeout = this.currentWindow.requestAnimationFrame(function() {
          var c = bt(o, l), b = t.props.zoom * (c / t.lastPinchDistance);
          t.setNewZoom(b, i, {
            shouldUpdatePosition: !1
          }), t.lastPinchDistance = c;
          var d = ft(o, l), p = t.props.rotation + (d - t.lastPinchRotation);
          t.props.onRotationChange && t.props.onRotationChange(p), t.lastPinchRotation = d;
        });
      }
    }, r.prototype.render = function() {
      var e = this, t, o = this.props, l = o.image, i = o.video, c = o.mediaProps, b = o.cropperProps, d = o.transform, p = o.crop, h = p.x, s = p.y, m = o.rotation, g = o.zoom, k = o.cropShape, w = o.showGrid, P = o.roundCropAreaPixels, I = o.style, T = I.containerStyle, D = I.cropAreaStyle, O = I.mediaStyle, A = o.classes, y = A.containerClassName, x = A.cropAreaClassName, M = A.mediaClassName, _ = (t = this.state.mediaObjectFit) !== null && t !== void 0 ? t : this.getObjectFit();
      return de.createElement("div", {
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        ref: function(X) {
          return e.containerRef = X;
        },
        "data-testid": "container",
        style: T,
        className: $e("reactEasyCrop_Container", y)
      }, l ? de.createElement("img", Z({
        alt: "",
        className: $e("reactEasyCrop_Image", _ === "contain" && "reactEasyCrop_Contain", _ === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", _ === "vertical-cover" && "reactEasyCrop_Cover_Vertical", M)
      }, c, {
        src: l,
        ref: this.imageRef,
        style: Z(Z({}, O), {
          transform: d || "translate(".concat(h, "px, ").concat(s, "px) rotate(").concat(m, "deg) scale(").concat(g, ")")
        }),
        onLoad: this.onMediaLoad
      })) : i && de.createElement("video", Z({
        autoPlay: !0,
        playsInline: !0,
        loop: !0,
        muted: !0,
        className: $e("reactEasyCrop_Video", _ === "contain" && "reactEasyCrop_Contain", _ === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", _ === "vertical-cover" && "reactEasyCrop_Cover_Vertical", M)
      }, c, {
        ref: this.videoRef,
        onLoadedMetadata: this.onMediaLoad,
        style: Z(Z({}, O), {
          transform: d || "translate(".concat(h, "px, ").concat(s, "px) rotate(").concat(m, "deg) scale(").concat(g, ")")
        }),
        controls: !1
      }), (Array.isArray(i) ? i : [{
        src: i
      }]).map(function(L) {
        return de.createElement("source", Z({
          key: L.src
        }, L));
      })), this.state.cropSize && de.createElement("div", Z({
        ref: this.cropperRef,
        style: Z(Z({}, D), {
          width: P ? Math.round(this.state.cropSize.width) : this.state.cropSize.width,
          height: P ? Math.round(this.state.cropSize.height) : this.state.cropSize.height
        }),
        tabIndex: 0,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        "data-testid": "cropper",
        className: $e("reactEasyCrop_CropArea", k === "round" && "reactEasyCrop_CropAreaRound", w && "reactEasyCrop_CropAreaGrid", x)
      }, b)));
    }, r.defaultProps = {
      zoom: 1,
      rotation: 0,
      aspect: 4 / 3,
      maxZoom: Ar,
      minZoom: Pr,
      cropShape: "rect",
      objectFit: "contain",
      showGrid: !0,
      style: {},
      classes: {},
      mediaProps: {},
      cropperProps: {},
      zoomSpeed: 1,
      restrictPosition: !0,
      zoomWithScroll: !0,
      keyboardStep: Er
    }, r.getMousePoint = function(e) {
      return {
        x: Number(e.clientX),
        y: Number(e.clientY)
      };
    }, r.getTouchPoint = function(e) {
      return {
        x: Number(e.clientX),
        y: Number(e.clientY)
      };
    }, r;
  }(de.Component)
);
const mt = ie, Tr = (a) => new Promise((r, e) => {
  const t = new Image();
  t.addEventListener("load", () => r(t)), t.addEventListener("error", (o) => e(o)), t.setAttribute("crossOrigin", "anonymous"), t.src = a;
}), Ft = (a) => a * Math.PI / 180, Fr = (a, r, e) => {
  const t = Ft(e);
  return {
    width: Math.abs(Math.cos(t) * a) + Math.abs(Math.sin(t) * r),
    height: Math.abs(Math.sin(t) * a) + Math.abs(Math.cos(t) * r)
  };
}, Ir = async (a, r, e = "image/jpeg", t = 0) => {
  const o = await Tr(a), l = document.createElement("canvas"), i = l.getContext("2d");
  if (!i)
    throw new Error("Canvas context is not available");
  const c = Ft(t), { width: b, height: d } = Fr(
    o.width,
    o.height,
    t
  );
  l.width = b, l.height = d, i.translate(b / 2, d / 2), i.rotate(c), i.translate(-o.width / 2, -o.height / 2), i.drawImage(o, 0, 0);
  const p = document.createElement("canvas"), h = p.getContext("2d");
  if (!h)
    throw new Error("Canvas context is not available");
  return p.width = r.width, p.height = r.height, h.drawImage(
    l,
    r.x,
    r.y,
    r.width,
    r.height,
    0,
    0,
    r.width,
    r.height
  ), new Promise((s, m) => {
    p.toBlob(
      (g) => {
        if (!g) {
          m(new Error("Image cropping failed"));
          return;
        }
        s(g);
      },
      e,
      0.95
    );
  });
}, Or = ({
  isOpen: a,
  imageSrc: r,
  fileType: e = "image/jpeg",
  fileName: t = "cropped-image",
  aspect: o = 1 / 1,
  title: l = "Crop Image",
  onClose: i,
  onApply: c
}) => {
  const [b, d] = S({ x: 0, y: 0 }), [p, h] = S(1), [s, m] = S(null);
  U(() => {
    a && (d({ x: 0, y: 0 }), h(1), m(null));
  }, [a]);
  const g = Kt((w, P) => {
    m(P);
  }, []), k = async () => {
    var w, P;
    if (!(!r || !s))
      try {
        const I = await Ir(
          r,
          s,
          e
        ), T = ((P = (w = e == null ? void 0 : e.split("/")) == null ? void 0 : w[1]) == null ? void 0 : P.replace("jpeg", "jpg")) || "jpg", D = new File([I], `${t}.${T}`, {
          type: e
        });
        c == null || c(D);
      } catch {
        i == null || i();
      }
  };
  return a ? /* @__PURE__ */ f("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: [
    /* @__PURE__ */ n(
      "div",
      {
        className: "fixed inset-0 bg-gray-500 opacity-75",
        onClick: i
      }
    ),
    /* @__PURE__ */ f("div", { className: "relative bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col dark:bg-gray-800", children: [
      /* @__PURE__ */ f("div", { className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0", children: [
        /* @__PURE__ */ n("h3", { className: "text-lg font-medium text-gray-900 dark:text-white", children: l }),
        /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            onClick: i,
            className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
            "aria-label": "Close crop modal",
            children: /* @__PURE__ */ n(ue, { icon: "mdi:close", className: "w-6 h-6" })
          }
        )
      ] }),
      /* @__PURE__ */ f("div", { className: "p-4 space-y-4", children: [
        /* @__PURE__ */ n("div", { className: "relative h-72 w-full bg-gray-900 rounded-md overflow-hidden", children: r && /* @__PURE__ */ n(
          Lr,
          {
            image: r,
            crop: b,
            zoom: p,
            aspect: o,
            onCropChange: d,
            onZoomChange: h,
            onCropComplete: g
          }
        ) }),
        /* @__PURE__ */ f("div", { className: "space-y-2", children: [
          /* @__PURE__ */ n("label", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Zoom" }),
          /* @__PURE__ */ n(
            "input",
            {
              type: "range",
              min: 1,
              max: 3,
              step: 0.1,
              value: p,
              onChange: (w) => h(Number(w.target.value)),
              className: "w-full"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ f("div", { className: "px-4 py-3 flex justify-end gap-3 border-t border-gray-200 dark:border-gray-700 sm:!px-6", children: [
        /* @__PURE__ */ n(
          mt,
          {
            type: "button",
            onClick: i,
            variant: "outlined",
            color: "default",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ n(
          mt,
          {
            type: "button",
            onClick: k,
            variant: "contained",
            color: "primary",
            children: "Apply Crop"
          }
        )
      ] })
    ] })
  ] }) : null;
}, jr = ie, pe = (a) => {
  typeof a == "string" && a.startsWith("blob:") && URL.revokeObjectURL(a);
}, zr = ({
  label: a = "",
  value: r = null,
  onChange: e,
  required: t = !1,
  accept: o = "image/*",
  aspect: l = "1",
  id: i,
  dragDrop: c = !1,
  cropImage: b = !1,
  name: d = "",
  parentClass: p = ""
}) => {
  const [h, s] = S(r), [m, g] = S(!1), [k, w] = S(!1), [P, I] = S(""), [T, D] = S("image/jpeg"), [O, A] = S("cropped-image"), y = te(null), x = te(""), M = te("");
  U(() => {
    if (r instanceof File) {
      const N = URL.createObjectURL(r);
      pe(M.current), M.current = N, s({ file: r, preview: N });
    } else r && typeof r == "object" && "preview" in r, s(r);
  }, [r]), U(() => () => {
    pe(M.current), pe(x.current);
  }, []);
  const _ = () => {
    w(!1), pe(x.current), x.current = "", I(""), y.current && (y.current.value = "");
  }, L = (N) => {
    const B = URL.createObjectURL(N);
    pe(M.current), M.current = B, s({ file: N, preview: B }), e == null || e(N), _();
  }, X = (N) => {
    if (!N || N.length === 0)
      return;
    const B = N[0];
    if (b) {
      const F = URL.createObjectURL(B);
      pe(x.current), x.current = F, I(F), D(B.type || "image/jpeg"), A(
        (B.name || "cropped-image").replace(/\.[^/.]+$/, "")
      ), w(!0);
      return;
    }
    const Y = URL.createObjectURL(B);
    pe(M.current), M.current = Y, s({ file: B, preview: Y }), e == null || e(B);
  }, ae = (N) => {
    N && N.stopPropagation(), pe(M.current), M.current = "", s(null), e == null || e(null), y.current && (y.current.value = "");
  }, W = (N) => {
    c && (N.preventDefault(), g(!0));
  }, R = (N) => {
    c && (N.preventDefault(), g(!1));
  }, q = (N) => {
    var B, Y, F, ne;
    c && (N.preventDefault(), g(!1), (ne = (F = (Y = (B = N.dataTransfer) == null ? void 0 : B.files) == null ? void 0 : Y[0]) == null ? void 0 : F.type) != null && ne.includes("image/") && X(N.dataTransfer.files));
  }, $ = () => {
    var N;
    (N = y.current) == null || N.click();
  }, C = h && typeof h == "object" && "preview" in h ? h.preview : typeof h == "string" ? h : "";
  return /* @__PURE__ */ f(G, { children: [
    /* @__PURE__ */ f("div", { className: p || "col-span-12", children: [
      /* @__PURE__ */ n(re, { label: a, required: t }),
      /* @__PURE__ */ f(
        "div",
        {
          className: `relative rounded-md p-2 transition-all ${m ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"}`,
          onDragOver: W,
          onDragLeave: R,
          onDrop: q,
          children: [
            /* @__PURE__ */ n(
              "input",
              {
                ref: y,
                id: i,
                type: "file",
                accept: o,
                onChange: (N) => X(N.target.files),
                required: t && !h,
                className: "absolute opacity-0 right-[50%] top-[80%] -translate-y-1/2 pointer-events-none h-[10px]"
              }
            ),
            /* @__PURE__ */ f(
              "div",
              {
                className: `flex items-center space-x-4 transition-all ${m ? "opacity-50" : ""}`,
                children: [
                  h ? /* @__PURE__ */ f("div", { className: "relative group", children: [
                    /* @__PURE__ */ n(
=======
  ] }, a) });
}
const Ke = Me.forwardRef(
  ({ className: o = "", label: i, required: a, ...d }, l) => {
    const s = `
      placeholder-gray-400 dark:placeholder-gray-400
      ${o}
    `.trim();
    return /* @__PURE__ */ e(P, { children: /* @__PURE__ */ b("div", { className: d.parentClass || "col-span-12", children: [
      /* @__PURE__ */ e(q, { label: i, required: a }),
      /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ e(
        "textarea",
        {
          className: s,
          ref: l,
          required: a,
          ...d
        }
      ) })
    ] }, d.name) });
  }
);
Ke.displayName = "TextArea";
const ur = ({
  label: o = "",
  value: i = null,
  onChange: a,
  required: d = !1,
  accept: l = "image/*",
  id: s,
  dragDrop: t = !1,
  name: f = "",
  parentClass: S = ""
}) => {
  const [c, g] = C(i), [p, v] = C(!1), m = Q(null);
  G(() => (i instanceof File ? g({ file: i, preview: URL.createObjectURL(i) }) : (i != null && i.preview, g(i)), () => {
    c != null && c.preview && c.preview.startsWith("blob:") && URL.revokeObjectURL(c.preview);
  }), [i]);
  const u = (L) => {
    if (!L || L.length === 0)
      return;
    const O = L[0], B = URL.createObjectURL(O), F = { file: O, preview: B };
    c != null && c.preview && c.preview.startsWith("blob:") && URL.revokeObjectURL(c.preview), g(F), a == null || a(O);
  }, N = (L) => {
    L && L.stopPropagation(), c != null && c.preview && c.preview.startsWith("blob:") && URL.revokeObjectURL(c.preview), g(null), a == null || a(null), m.current && (m.current.value = "");
  }, y = (L) => {
    t && (L.preventDefault(), v(!0));
  }, M = (L) => {
    t && (L.preventDefault(), v(!1));
  }, A = (L) => {
    t && (L.preventDefault(), v(!1), u(L.dataTransfer.files));
  }, U = () => {
    m.current.click();
  };
  return /* @__PURE__ */ e(P, { children: /* @__PURE__ */ b("div", { className: S || "col-span-12", children: [
    /* @__PURE__ */ e(q, { label: o, required: d }),
    /* @__PURE__ */ b(
      "div",
      {
        className: `relative rounded-md p-2 transition-all ${p ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"}`,
        onDragOver: y,
        onDragLeave: M,
        onDrop: A,
        children: [
          /* @__PURE__ */ e(
            "input",
            {
              ref: m,
              id: s,
              type: "file",
              accept: l,
              onChange: (L) => u(L.target.files),
              required: d && !c,
              className: "absolute opacity-0 right-[50%] top-[80%] -translate-y-1/2 pointer-events-none h-[10px]"
            }
          ),
          /* @__PURE__ */ b(
            "div",
            {
              className: `flex items-center space-x-4 transition-all ${p ? "opacity-50" : ""}`,
              children: [
                c ? (
                  // Image preview with close button
                  /* @__PURE__ */ b("div", { className: "relative group", children: [
                    /* @__PURE__ */ e(
>>>>>>> main
                      "img",
                      {
                        src: C,
                        alt: "preview",
                        className: "object-cover w-20 h-20 rounded-full shadow-md"
                      }
                    ),
<<<<<<< HEAD
                    !t && /* @__PURE__ */ n(
=======
                    !d && /* @__PURE__ */ e(
>>>>>>> main
                      "button",
                      {
                        type: "button",
                        onClick: ae,
                        className: "absolute top-0 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
                        "aria-label": "Remove image",
<<<<<<< HEAD
                        children: /* @__PURE__ */ n(ue, { icon: "mdi:close", className: "w-3 h-3" })
                      }
                    )
                  ] }) : /* @__PURE__ */ n("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ n(
                    ue,
=======
                        children: /* @__PURE__ */ e(oe, { icon: "mdi:close", className: "w-3 h-3" })
                      }
                    )
                  ] })
                ) : (
                  // Placeholder icon
                  /* @__PURE__ */ e("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ e(
                    oe,
>>>>>>> main
                    {
                      icon: "ri:image-add-fill",
                      className: "text-gray-400 w-10 h-10"
                    }
<<<<<<< HEAD
                  ) }),
                  /* @__PURE__ */ f("div", { className: "flex flex-col items-center space-y-1", children: [
                    /* @__PURE__ */ n(
                      jr,
                      {
                        type: "button",
                        onClick: $,
                        variant: "outlined",
                        color: "default",
                        children: h ? "Change Image" : "Select Image"
                      }
                    ),
                    c && !h && /* @__PURE__ */ n("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop" })
                  ] })
                ]
              }
            ),
            c && m && /* @__PURE__ */ n("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-md", children: /* @__PURE__ */ n("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg", children: "Drop image here" }) })
          ]
        }
      )
    ] }, d),
    /* @__PURE__ */ n(
      Or,
      {
        isOpen: k,
        imageSrc: P,
        fileType: T,
        fileName: O,
        onClose: _,
        onApply: L,
        aspect: Number(l)
      }
    )
  ] });
}, It = He.forwardRef(
  ({
    label: a,
    value: r,
    required: e,
    parentClass: t = "",
    className: o = "",
    type: l = "text",
    onKeyDown: i,
    negativeNumberAllow: c = !0,
    defaultValue: b = "",
    field: d = {},
    onChange: p,
    mask: h = "",
    maskApplyOnValue: s = !0,
    ...m
  }, g) => {
    const [k, w] = S(!1), P = (D) => {
      if (l === "number") {
        if (["e", "E", "+"].includes(D.key)) {
          D.preventDefault();
          return;
        }
        if (c == !1 && D.key === "-") {
          D.preventDefault();
=======
                  ) })
                ),
                /* @__PURE__ */ b("div", { className: "flex flex-col items-center space-y-1", children: [
                  /* @__PURE__ */ e(
                    X,
                    {
                      type: "button",
                      onClick: U,
                      variant: "outlined",
                      color: "default",
                      children: c ? "Change Image" : "Select Image"
                    }
                  ),
                  t && !c && /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop" })
                ] })
              ]
            }
          ),
          t && p && /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-md", children: /* @__PURE__ */ e("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg", children: "Drop image here" }) })
        ]
      }
    )
  ] }, f) });
}, _e = Me.forwardRef(
  ({
    label: o,
    required: i,
    parentClass: a = "",
    className: d = "",
    type: l = "text",
    onKeyDown: s,
    negativeNumberAllow: t = !0,
    defaultValue: f = "",
    field: S = {},
    ...c
  }, g) => {
    const [p, v] = C(!1), m = (N) => {
      if (l === "number") {
        if (["e", "E", "+"].includes(N.key)) {
          N.preventDefault();
          return;
        }
        if (t == !1 && N.key === "-") {
          N.preventDefault();
>>>>>>> main
          return;
        }
        if (["ArrowUp", "ArrowDown"].includes(D.key)) {
          D.preventDefault();
          return;
        }
      }
<<<<<<< HEAD
      i == null || i(D);
    }, I = `
      h-10 placeholder-gray-400 dark:placeholder-gray-400
      ${l === "password" ? "pr-10" : ""}
      ${l === "number" ? "no-spinner" : ""}
      ${o}
    `.trim();
    function T(D, O) {
      if (!D) return D;
      const A = String(D).replace(/[^a-zA-Z0-9]/g, "");
      let y = "", x = 0;
      for (let M = 0; M < (O == null ? void 0 : O.length) && x < A.length; M++) {
        const _ = O[M], L = A[x];
        _ === "9" ? /\d/.test(L) ? (y += L, x++) : (x++, M--) : _ === "A" ? /[a-zA-Z]/.test(L) ? (y += L, x++) : (x++, M--) : _ === "X" ? /[a-zA-Z0-9]/.test(L) ? (y += L, x++) : (x++, M--) : _ === "*" ? (y += L, x++) : (y += _, L === _ && x++);
      }
      return y;
    }
    return U(() => {
      if (b) {
        const D = r || b;
=======
      s == null || s(N);
    }, u = `
      h-10 placeholder-gray-400 dark:placeholder-gray-400
      ${l === "password" ? "pr-10" : ""}
      ${l === "number" ? "no-spinner" : ""}
      ${d}
    `.trim();
    return G(() => {
      if (f) {
        let N = c.value || f;
>>>>>>> main
        setTimeout(() => {
          p == null || p(D);
        }, 100);
      }
<<<<<<< HEAD
    }, [b]), /* @__PURE__ */ n(G, { children: /* @__PURE__ */ f("div", { className: t || "col-span-12", children: [
      /* @__PURE__ */ n(
        re,
        {
          label: a,
          required: e,
          infoText: d == null ? void 0 : d.infoText
        }
      ),
      /* @__PURE__ */ f("div", { className: "relative", children: [
        /* @__PURE__ */ n(
          "input",
          {
            type: l === "password" && k ? "text" : l,
            ref: g,
            required: e,
            onKeyDown: P,
            className: I,
            value: h ? T(r, h) : r,
            onChange: (D) => {
              p(h && s ? T(D.target.value, h) : D.target.value);
            },
            ...m
          }
        ),
        l === "password" && /* @__PURE__ */ n(
=======
    }, [f]), /* @__PURE__ */ e(P, { children: /* @__PURE__ */ b("div", { className: a || "col-span-12", children: [
      /* @__PURE__ */ e(
        q,
        {
          label: o,
          required: i,
          infoText: S.infoText
        }
      ),
      /* @__PURE__ */ b("div", { className: "relative", children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: l === "password" && p ? "text" : l,
            ref: g,
            required: i,
            onKeyDown: m,
            className: u,
            ...c
          }
        ),
        l === "password" && /* @__PURE__ */ e(
>>>>>>> main
          "button",
          {
            type: "button",
            tabIndex: -1,
<<<<<<< HEAD
            onClick: () => w((D) => !D),
            className: "absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200",
            children: /* @__PURE__ */ n(
              ue,
              {
                icon: k ? "mdi:eye-outline" : "mdi:eye-off-outline",
=======
            onClick: () => v((N) => !N),
            className: "absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200",
            children: /* @__PURE__ */ e(
              oe,
              {
                icon: p ? "mdi:eye-outline" : "mdi:eye-off-outline",
>>>>>>> main
                className: "w-5 h-5"
              }
            )
          }
        )
      ] })
    ] }, m.name) });
  }
);
<<<<<<< HEAD
It.displayName = "Input";
const Br = ({
  editorKey: a = "",
  value: r = "",
  onChange: e,
  label: t = "",
  required: o = !1,
  placeholder: l = "",
  parentClass: i = "col-span-12",
  height: c = 400,
  inline: b = !1,
  disabled: d = !1,
  plugins: p,
  toolbar: h,
  menubar: s = !1,
  fontFamily: m = "Inter, sans-serif",
  initConfig: g = {},
  imageUploadHandler: k
}) => /* @__PURE__ */ f("div", { className: i, children: [
  t && /* @__PURE__ */ n(re, { label: t, required: o }),
  /* @__PURE__ */ n(
    tr,
    {
      apiKey: a,
      value: r,
      disabled: d,
      init: {
        height: c,
        inline: b,
        menubar: s,
        branding: !1,
        statusbar: !0,
        automatic_uploads: !0,
        images_upload_handler: (T) => new Promise((D, O) => {
          if (!k) {
            D(`data:${T.blob().type};base64,${T.base64()}`);
            return;
          }
          k(T).then((A) => {
            A ? D(A) : O("Upload failed: No URL returned");
          }).catch((A) => {
            O(
              typeof A == "string" ? A : (A == null ? void 0 : A.message) || "Image upload failed"
=======
_e.displayName = "Input";
const wr = ({
  key: o,
  editorKey: i = "",
  value: a = "",
  onChange: d,
  label: l = "",
  required: s = !1,
  placeholder: t = "",
  parentClass: f = "col-span-12",
  height: S = 400,
  inline: c = !1,
  disabled: g = !1,
  plugins: p,
  toolbar: v,
  menubar: m = !1,
  fontFamily: u = "Inter, sans-serif",
  initConfig: N = {},
  imageUploadHandler: y
  // ✅ Promise function passed from parent
}) => /* @__PURE__ */ b("div", { className: f, children: [
  l && /* @__PURE__ */ e(q, { label: l, required: s }),
  /* @__PURE__ */ e(
    dr,
    {
      apiKey: i,
      value: a,
      disabled: g,
      init: {
        height: S,
        inline: c,
        menubar: m,
        branding: !1,
        statusbar: !0,
        automatic_uploads: !0,
        images_upload_handler: (L) => new Promise((O, B) => {
          if (!y) {
            O(`data:${L.blob().type};base64,${L.base64()}`);
            return;
          }
          y(L).then((F) => {
            F ? O(F) : B("Upload failed: No URL returned");
          }).catch((F) => {
            B(
              typeof F == "string" ? F : (F == null ? void 0 : F.message) || "Image upload failed"
>>>>>>> main
            );
          });
        }),
        plugins: p ?? [
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
<<<<<<< HEAD
        toolbar: h ?? "undo redo | blocks | bold italic underline forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media table | removeformat | code fullscreen preview",
        placeholder: l,
        content_style: `
            body {
                font-family: ${m};
=======
        toolbar: v ?? "undo redo | blocks | bold italic underline forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media table | removeformat | code fullscreen preview",
        placeholder: t,
        content_style: `
            body {
                font-family: ${u};
>>>>>>> main
            }
            `,
        ...g
      },
<<<<<<< HEAD
      onEditorChange: (T) => {
        e == null || e(T);
      }
    }
  )
] }), $r = ({
  name: a = "",
  label: r = "",
  options: e = [],
  value: t = null,
  onChange: o,
  disabled: l = !1,
  required: i = !1,
  parentClass: c = "col-span-12",
  className: b = "",
  multiSelect: d = !1
}) => {
  const p = Array.isArray(e) && e.length > 0, h = (g) => p ? d ? Array.isArray(t) && t.includes(g) : t === g : !!t, s = (g) => {
    o == null || o(g.target.checked, a);
  }, m = (g, k) => {
    if (o)
      if (!d)
        o(k ? g : "", a);
      else {
        const w = Array.isArray(t) ? [...t] : [];
        if (k)
          w.includes(g) || w.push(g);
        else {
          const P = w.indexOf(g);
          P > -1 && w.splice(P, 1);
        }
        o(w, a);
      }
  };
  return p ? /* @__PURE__ */ n(G, { children: /* @__PURE__ */ f("div", { className: `${c}`, children: [
    /* @__PURE__ */ n(re, { label: r, required: i }),
    /* @__PURE__ */ n("div", { className: "flex flex-col space-y-2", children: e.map((g, k) => /* @__PURE__ */ f("div", { className: "flex items-center", children: [
      /* @__PURE__ */ n(
        "input",
        {
          type: "checkbox",
          name: a,
          value: g.value,
          checked: h(g.value),
          disabled: l || !!g.disabled,
          required: i && k === 0,
          onChange: (w) => m(g.value, w.target.checked),
          className: `h-4 w-4 cursor-pointer text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${b}`
        },
        a
      ),
      g.label && /* @__PURE__ */ n(
        "label",
        {
          htmlFor: a,
=======
      onEditorChange: (L) => {
        d && d(L);
      }
    }
  )
] }, o), mr = ({
  name: o = "",
  label: i = "",
  // label for single checkbox
  options: a = [],
  // array of { label, value } for multiple
  value: d = null,
  // boolean for single, array for multiple, or string for single select
  onChange: l,
  disabled: s = !1,
  required: t = !1,
  parentClass: f = "col-span-12",
  className: S = "",
  multiSelect: c = !1
  // ✅ if true, only one option can be selected (like radio)
}) => {
  const g = Array.isArray(a) && a.length > 0, p = (u) => g ? c ? Array.isArray(d) && d.includes(u) : d === u : !!d, v = (u) => {
    l == null || l(u.target.checked, o);
  }, m = (u, N) => {
    if (l)
      if (!c)
        l(N ? u : "", o);
      else {
        const y = Array.isArray(d) ? [...d] : [];
        if (N)
          y.includes(u) || y.push(u);
        else {
          const M = y.indexOf(u);
          M > -1 && y.splice(M, 1);
        }
        l(y, o);
      }
  };
  return g ? /* @__PURE__ */ e(P, { children: /* @__PURE__ */ b("div", { className: `${f}`, children: [
    /* @__PURE__ */ e(q, { label: i, required: t }),
    /* @__PURE__ */ e("div", { className: "flex flex-col space-y-2", children: a.map((u, N) => /* @__PURE__ */ b("div", { className: "flex items-center", children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          name: o,
          value: u.value,
          checked: p(u.value),
          disabled: s || u.disabled,
          required: t && N === 0,
          onChange: (y) => m(u.value, y.target.checked),
          className: `h-4 w-4 cursor-pointer text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${S}`
        },
        o
      ),
      u.label && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: o,
>>>>>>> main
          className: "ml-2 text-sm text-gray-700 dark:text-gray-200 select-none",
          children: u.label
        }
      )
<<<<<<< HEAD
    ] }, g.value || g.label)) })
  ] }) }) : /* @__PURE__ */ f("div", { className: `flex items-center ${c}`, children: [
    /* @__PURE__ */ n(
      "input",
      {
        type: "checkbox",
        name: a,
        checked: h(),
        disabled: l,
        required: i,
        onChange: s,
        className: `h-4 w-4 text-blue-600 cursor-pointer border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${b}`
      }
    ),
    r && /* @__PURE__ */ n(
      "label",
      {
        htmlFor: a,
        className: "ml-2 text-sm text-gray-700 dark:text-gray-200 select-none",
        children: r
      }
    )
  ] });
}, yt = ie, Ur = ({
  label: a = "",
  value: r = null,
  onChange: e,
  required: t = !1,
  accept: o = "audio/*",
  id: l,
  dragDrop: i = !1,
  name: c = "",
  parentClass: b = "",
  maxSize: d = 0
}) => {
  const [p, h] = S(
    null
  ), [s, m] = S(!1), g = te(null), k = d * 1024 * 1024;
  U(() => {
    if (!r) {
      w(), h(null);
      return;
    }
    if (r instanceof File) {
      const y = URL.createObjectURL(r);
      return h({ file: r, preview: y }), () => {
        URL.revokeObjectURL(y);
      };
    } else typeof r == "string" ? h({ preview: r }) : r != null && r.preview && h(r);
  }, [r]);
  const w = () => {
    p != null && p.preview && p.preview.startsWith("blob:") && URL.revokeObjectURL(p.preview);
  }, P = (y) => {
    if (!y || y.length === 0)
      return;
    const x = y[0];
    if (k && x.size > k) {
      ge(
        `Audio is too large. Maximum allowed size is ${d} MB`,
        { variant: "warning" }
      );
      return;
    }
    const M = URL.createObjectURL(x);
    w(), h({ file: x, preview: M }), e == null || e(x);
  }, I = (y) => {
    y && y.stopPropagation(), w(), h(null), e == null || e(null), g.current && (g.current.value = "");
  }, T = (y) => {
    i && (y.preventDefault(), m(!0));
  }, D = (y) => {
    i && (y.preventDefault(), m(!1));
  }, O = (y) => {
    var x, M, _, L;
    i && (y.preventDefault(), m(!1), (L = (_ = (M = (x = y.dataTransfer) == null ? void 0 : x.files) == null ? void 0 : M[0]) == null ? void 0 : _.type) != null && L.includes("audio/") && P(y.dataTransfer.files));
  }, A = () => {
    var y;
    (y = g.current) == null || y.click();
  };
  return /* @__PURE__ */ f("div", { className: b || "col-span-12", children: [
    /* @__PURE__ */ n(re, { label: a, required: t }),
    /* @__PURE__ */ f(
      "div",
      {
        className: `relative rounded-lg p-2 transition-all ${s ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"}`,
        onDragOver: T,
        onDragLeave: D,
        onDrop: O,
=======
    ] }, u.value || u.label)) })
  ] }) }) : /* @__PURE__ */ b("div", { className: `flex items-center ${f}`, children: [
    /* @__PURE__ */ e(
      "input",
      {
        type: "checkbox",
        name: o,
        checked: p(),
        disabled: s,
        required: t,
        onChange: v,
        className: `h-4 w-4 text-blue-600 cursor-pointer border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${S}`
      }
    ),
    i && /* @__PURE__ */ e(
      "label",
      {
        htmlFor: o,
        className: "ml-2 text-sm text-gray-700 dark:text-gray-200 select-none",
        children: i
      }
    )
  ] });
}, yr = ({
  label: o = "",
  value: i = null,
  onChange: a,
  required: d = !1,
  accept: l = "audio/*",
  id: s,
  dragDrop: t = !1,
  name: f = "",
  parentClass: S = ""
}) => {
  const [c, g] = C(null), [p, v] = C(!1), m = Q(null);
  G(() => {
    if (!i) {
      u(), g(null);
      return;
    }
    if (i instanceof File) {
      const O = URL.createObjectURL(i);
      return g({ file: i, preview: O }), () => {
        URL.revokeObjectURL(O);
      };
    } else typeof i == "string" ? g({ preview: i }) : i != null && i.preview && g(i);
  }, [i]);
  const u = () => {
    c != null && c.preview && c.preview.startsWith("blob:") && URL.revokeObjectURL(c.preview);
  }, N = (O) => {
    if (!O || O.length === 0)
      return;
    const B = O[0], F = URL.createObjectURL(B);
    u(), g({ file: B, preview: F }), a == null || a(B);
  }, y = (O) => {
    O && O.stopPropagation(), u(), g(null), a == null || a(null), m.current && (m.current.value = "");
  }, M = (O) => {
    t && (O.preventDefault(), v(!0));
  }, A = (O) => {
    t && (O.preventDefault(), v(!1));
  }, U = (O) => {
    t && (O.preventDefault(), v(!1), N(O.dataTransfer.files));
  }, L = () => {
    m.current.click();
  };
  return /* @__PURE__ */ b("div", { className: S || "col-span-12", children: [
    /* @__PURE__ */ e(q, { label: o, required: d }),
    /* @__PURE__ */ b(
      "div",
      {
        className: `relative rounded-lg p-2 transition-all ${p ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"}`,
        onDragOver: M,
        onDragLeave: A,
        onDrop: U,
>>>>>>> main
        children: [
          /* @__PURE__ */ n(
            "input",
            {
<<<<<<< HEAD
              ref: g,
              id: l,
              type: "file",
              accept: o,
              onChange: (y) => P(y.target.files),
              required: t && !p,
=======
              ref: m,
              id: s,
              type: "file",
              accept: l,
              onChange: (O) => N(O.target.files),
              required: d && !c,
>>>>>>> main
              className: "absolute opacity-0 right-[50%] top-[80%] -translate-y-1/2 pointer-events-none h-[10px]"
            }
          ),
          /* @__PURE__ */ n(
            "div",
            {
<<<<<<< HEAD
              className: `flex items-center space-x-4 transition-all ${s ? "opacity-50" : ""}`,
              children: p ? /* @__PURE__ */ f("div", { className: "flex items-center space-x-4", children: [
                /* @__PURE__ */ f("div", { className: "relative w-full", children: [
                  !t && /* @__PURE__ */ n(
                    "button",
=======
              className: `flex items-center space-x-4 transition-all ${p ? "opacity-50" : ""}`,
              children: c ? (
                // Audio player with close button and change button
                /* @__PURE__ */ b("div", { className: "flex items-center space-x-4", children: [
                  /* @__PURE__ */ b("div", { className: "relative w-full", children: [
                    !d && /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        onClick: y,
                        className: "absolute top-0 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800",
                        "aria-label": "Remove audio",
                        children: /* @__PURE__ */ e(oe, { icon: "mdi:close", className: "w-3 h-3" })
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
                  /* @__PURE__ */ e(X, { type: "button", onClick: L, children: /* @__PURE__ */ e("span", { children: "Change Audio File" }) })
                ] })
              ) : (
                // Empty state with upload button
                /* @__PURE__ */ b("div", { className: "flex items-center justify-center space-x-4", children: [
                  /* @__PURE__ */ e("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ e(oe, { icon: "mdi:music", className: "text-gray-400 w-10 h-10" }) }),
                  /* @__PURE__ */ e(
                    X,
>>>>>>> main
                    {
                      type: "button",
                      onClick: I,
                      className: "absolute top-0 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800",
                      "aria-label": "Remove audio",
                      children: /* @__PURE__ */ n(ue, { icon: "mdi:close", className: "w-3 h-3" })
                    }
                  ),
<<<<<<< HEAD
                  /* @__PURE__ */ n(
                    "audio",
                    {
                      src: p.preview,
                      controls: !0,
                      controlsList: "nodownload"
                    },
                    p.preview
                  )
                ] }),
                /* @__PURE__ */ n(yt, { type: "button", onClick: A, children: /* @__PURE__ */ n("span", { children: "Change Audio File" }) })
              ] }) : /* @__PURE__ */ f("div", { className: "flex items-center justify-center space-x-4", children: [
                /* @__PURE__ */ n("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ n(ue, { icon: "mdi:music", className: "text-gray-400 w-10 h-10" }) }),
                /* @__PURE__ */ n(
                  yt,
                  {
                    type: "button",
                    onClick: A,
                    variant: "outlined",
                    children: /* @__PURE__ */ n("span", { children: "Choose Audio File" })
                  }
                ),
                i && /* @__PURE__ */ n("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop your audio file here" })
              ] })
            }
          ),
          i && s && !p && /* @__PURE__ */ n("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-lg", children: /* @__PURE__ */ n("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg", children: "Drop audio here" }) })
        ]
      }
    )
  ] }, c);
}, lt = ({
  src: a,
  alt: r = "preview",
  isOpen: e,
  setIsOpen: t
}) => {
  const o = () => t(!1);
  return U(() => {
    const l = (i) => {
      i.key === "Escape" && o();
    };
    return e && (document.body.style.overflow = "hidden", document.addEventListener("keydown", l)), () => {
      document.body.style.overflow = "", document.removeEventListener("keydown", l);
    };
  }, [e]), /* @__PURE__ */ n(G, { children: /* @__PURE__ */ f(
=======
                  t && /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop your audio file here" })
                ] })
              )
            }
          ),
          t && p && !c && /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-lg", children: /* @__PURE__ */ e("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg", children: "Drop audio here" }) })
        ]
      }
    )
  ] }, f);
}, ze = ({ src: o, alt: i = "preview", isOpen: a, setIsOpen: d }) => {
  const l = () => d(!1);
  return G(() => {
    const s = (t) => {
      t.key === "Escape" && l();
    };
    return a && (document.body.style.overflow = "hidden", document.addEventListener("keydown", s)), () => {
      document.body.style.overflow = "", document.removeEventListener("keydown", s);
    };
  }, [a]), /* @__PURE__ */ e(P, { children: /* @__PURE__ */ b(
>>>>>>> main
    "div",
    {
      className: `fixed inset-0 z-50 flex items-center justify-center bg-black/70 dark:bg-black/80 \r
                   backdrop-blur-sm animate-in fade-in duration-200`,
<<<<<<< HEAD
      onClick: o,
=======
      onClick: l,
>>>>>>> main
      children: [
        /* @__PURE__ */ n(
          "button",
          {
<<<<<<< HEAD
            onClick: o,
=======
            onClick: l,
>>>>>>> main
            className: `absolute top-4 right-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200\r
                     hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-2 shadow-lg transition`,
            children: /* @__PURE__ */ n(Ze, { size: 20 })
          }
        ),
        /* @__PURE__ */ n(
          "div",
          {
            className: "max-w-5xl w-full px-4 transform transition-all duration-200 scale-95 animate-in zoom-in-95",
<<<<<<< HEAD
            onClick: (l) => l.stopPropagation(),
            children: /* @__PURE__ */ n(
              "img",
              {
                src: a,
                alt: r,
=======
            onClick: (s) => s.stopPropagation(),
            children: /* @__PURE__ */ e(
              "img",
              {
                src: o,
                alt: i,
>>>>>>> main
                className: "w-full max-h-[90vh] object-contain rounded-xl"
              }
            )
          }
        )
      ]
    }
  ) });
<<<<<<< HEAD
}, Ot = ({ col: a, data: r }) => {
  const e = r[a.titleKey], t = r[a.subtitleKey], o = r[a.imageKey], l = a.fallback_icon, [i, c] = S(null), [b, d] = S(!1), p = (h) => {
    let s = h;
    h && h.src instanceof File && (s = { ...h, src: URL.createObjectURL(h.src) }), c(s), d(!0);
  };
  return /* @__PURE__ */ f(G, { children: [
    b && i && /* @__PURE__ */ n(
      lt,
      {
        src: i.src,
        alt: i.alt,
        isOpen: b,
        setIsOpen: d
      }
    ),
    /* @__PURE__ */ f(
=======
}, Ye = ({ col: o, data: i }) => {
  let a = i[o.titleKey], d = i[o.subtitleKey], l = i[o.imageKey], s = o.fallback_icon;
  const [t, f] = C(null), [S, c] = C(!1), g = (p) => {
    p && p.src instanceof File && (p = { ...p, src: URL.createObjectURL(p.src) }), f(p), c(!0);
  };
  return /* @__PURE__ */ b(P, { children: [
    S && /* @__PURE__ */ e(
      ze,
      {
        src: t.src,
        alt: t.alt,
        isOpen: S,
        setIsOpen: c
      }
    ),
    /* @__PURE__ */ b(
>>>>>>> main
      "div",
      {
        className: `col-span-12 flex items-center space-x-4 p-4 rounded-xl 
      bg-gray-100 dark:bg-gray-900 
<<<<<<< HEAD
      ${a.blockClass}`,
        children: [
          o ? /* @__PURE__ */ n(
            "img",
            {
              src: o instanceof File ? URL.createObjectURL(o) : o,
              alt: e,
              onClick: () => p({ src: o, alt: e }),
              className: "w-16 h-16 cursor-pointer rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
            }
          ) : l ? l instanceof Function ? l(r) : l : /* @__PURE__ */ n("div", { className: "w-16 h-16 flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600", children: /* @__PURE__ */ n(it, { className: "w-8 h-8 text-gray-400" }) }),
          /* @__PURE__ */ f("div", { children: [
            /* @__PURE__ */ n("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: e }),
            /* @__PURE__ */ n("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: t })
=======
      ${o.blockClass}`,
        children: [
          l ? /* @__PURE__ */ e(
            "img",
            {
              src: l instanceof File ? URL.createObjectURL(l) : l,
              alt: a,
              onClick: () => g({ src: l, alt: a }),
              className: "w-16 h-16 cursor-pointer rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
            }
          ) : s ? s instanceof Function ? s(i) : s : /* @__PURE__ */ e("div", { className: "w-16 h-16 flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600", children: /* @__PURE__ */ e(je, { className: "w-8 h-8 text-gray-400" }) }),
          /* @__PURE__ */ b("div", { children: [
            /* @__PURE__ */ e("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: a }),
            /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: d })
>>>>>>> main
          ] })
        ]
      }
    )
  ] });
<<<<<<< HEAD
}, jt = ({ col: a, data: r }) => {
  const e = r[a.titleKey], t = r[a.subtitleKey], o = r[a.imageKey], l = a.label, i = a == null ? void 0 : a.icon, c = a.fallback_icon, [b, d] = S(null), [p, h] = S(!1), s = (m) => {
    let g = m;
    m && m.src instanceof File && (g = { ...m, src: URL.createObjectURL(m.src) }), d(g), h(!0);
  };
  return /* @__PURE__ */ f(G, { children: [
    p && b && /* @__PURE__ */ n(
      lt,
      {
        src: b.src,
        alt: b.alt,
        isOpen: p,
        setIsOpen: h
      }
    ),
    /* @__PURE__ */ f(
=======
}, He = ({ col: o, data: i }) => {
  let a = i[o.titleKey], d = i[o.subtitleKey], l = i[o.imageKey], s = o.label, t = o == null ? void 0 : o.icon, f = o.fallback_icon;
  const [S, c] = C(null), [g, p] = C(!1), v = (m) => {
    m && m.src instanceof File && (m = { ...m, src: URL.createObjectURL(m.src) }), c(m), p(!0);
  };
  return /* @__PURE__ */ b(P, { children: [
    g && /* @__PURE__ */ e(
      ze,
      {
        src: S.src,
        alt: S.alt,
        isOpen: g,
        setIsOpen: p
      }
    ),
    /* @__PURE__ */ b(
>>>>>>> main
      "div",
      {
        className: `col-span-12 flex items-center space-x-4 p-4 rounded-xl 
      bg-gray-100 dark:bg-gray-900 
<<<<<<< HEAD
      ${a.blockClass}`,
        children: [
          i && /* @__PURE__ */ n("div", { className: "flex-shrink-0", children: i }),
          /* @__PURE__ */ f("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ n("p", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: l }),
            /* @__PURE__ */ f("div", { className: "flex items-center", children: [
              o ? /* @__PURE__ */ n(
                "img",
                {
                  src: o instanceof File ? URL.createObjectURL(o) : o,
                  alt: e,
                  onClick: () => s({ src: o, alt: e }),
                  className: "w-8 h-8 cursor-pointer rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
                }
              ) : c ? c instanceof Function ? c(r) : c : /* @__PURE__ */ n("div", { className: "w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600", children: /* @__PURE__ */ n(it, { className: "w-6 h-6 text-gray-400" }) }),
              /* @__PURE__ */ f("div", { className: "ml-2", children: [
                /* @__PURE__ */ n("p", { className: "mb-0 text-sm text-gray-900 dark:text-white break-words", children: e }),
                /* @__PURE__ */ n("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: t })
=======
      ${o.blockClass}`,
        children: [
          t && /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: t }),
          /* @__PURE__ */ b("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ e("p", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: s }),
            /* @__PURE__ */ b("div", { className: "flex items-center", children: [
              l ? /* @__PURE__ */ e(
                "img",
                {
                  src: l instanceof File ? URL.createObjectURL(l) : l,
                  alt: a,
                  onClick: () => v({ src: l, alt: a }),
                  className: "w-8 h-8 cursor-pointer rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
                }
              ) : f ? f instanceof Function ? f(i) : f : /* @__PURE__ */ e("div", { className: "w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600", children: /* @__PURE__ */ e(je, { className: "w-6 h-6 text-gray-400" }) }),
              /* @__PURE__ */ b("div", { className: "ml-2", children: [
                /* @__PURE__ */ e("p", { className: "mb-0 text-sm text-gray-900 dark:text-white break-words", children: a }),
                /* @__PURE__ */ e("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: d })
>>>>>>> main
              ] })
            ] })
          ] })
        ]
      }
    )
  ] });
<<<<<<< HEAD
}, vt = {
=======
}, De = {
>>>>>>> main
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
}, wt = {
  contained: "bg",
  outline: "border !bg-transparent",
  soft: "bg opacity-90"
<<<<<<< HEAD
}, zt = ({
  label: a,
  variant: r = "contained",
  color: e = "green",
  className: t = ""
}) => {
  const o = vt[e] || vt.green, l = wt[r] || wt.contained, i = r === "outline" ? o.border : o.bg;
  return /* @__PURE__ */ n(
    "span",
    {
      className: `inline-flex justify-center items-center rounded-sm text-xs font-semibold px-3 py-1 min-w-[78px]
        ${i}
        ${l}
        ${t}`,
      children: a
    }
  );
}, Bt = ({ col: a, data: r }) => {
  var b;
  const e = a == null ? void 0 : a.icon, t = a.label;
  let o = r[a.key];
  const l = a.type, i = a.variant || "outline";
  let c = a.defaultColor;
  if (l === "chip" && ((b = a.chipOptions) == null ? void 0 : b.length) > 0) {
    const d = a == null ? void 0 : a.chipOptions.find((p) => p.value == o);
    d && (o = d.label, c = d.color);
  }
  return /* @__PURE__ */ f(
    "div",
    {
      className: `col-span-12 flex items-center space-x-4 p-4 rounded-xl 
                  bg-gray-100 dark:bg-gray-900 ${a.blockClass || ""}`,
      children: [
        e && /* @__PURE__ */ n("div", { className: "flex-shrink-0", children: e }),
        /* @__PURE__ */ f("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ n("p", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: t }),
          l === "chip" ? /* @__PURE__ */ n(
            zt,
            {
              label: o,
              variant: i,
              color: c,
              className: "mt-1"
            }
          ) : l === "tinyEditor" ? /* @__PURE__ */ n(
            "p",
            {
              className: "mt-1 text-sm text-gray-900 dark:text-white break-words",
              dangerouslySetInnerHTML: {
                __html: o
              }
            }
          ) : l === "audio" ? o ? /* @__PURE__ */ n(
            "audio",
            {
              controls: !0,
              src: o instanceof File ? URL.createObjectURL(o) : o,
              onClick: (d) => d.stopPropagation(),
              className: "shadow-md rounded-full mt-1"
            },
            o instanceof File ? URL.createObjectURL(o) : o
          ) : /* @__PURE__ */ n("p", { className: "mt-1 text-sm text-gray-400", children: "N/A" }) : /* @__PURE__ */ n("p", { className: "mt-1 text-sm text-gray-900 dark:text-white break-words", children: l == "date" ? /* @__PURE__ */ n("span", { children: Mt(o, a.format || "DD MMM YYYY") }) : o || "N/A" })
=======
}, Ve = ({
  label: o,
  variant: i = "contained",
  // contained | outline | soft
  color: a = "green",
  className: d = ""
}) => {
  const l = De[a] || De.green, s = Ue[i] || Ue.contained, t = i === "outline" ? l.border : l.bg;
  return /* @__PURE__ */ e(
    "span",
    {
      className: `inline-flex justify-center items-center rounded-sm text-xs font-semibold px-3 py-1 min-w-[78px]
        ${t}
        ${s}
        ${d}`,
      children: o
    }
  );
}, We = ({ col: o, data: i }) => {
  var S;
  let a = o == null ? void 0 : o.icon, d = o.label, l = i[o.key], s = o.type, t = o.variant || "outline", f = o.defaultColor;
  if (s === "chip" && ((S = o.chipOptions) == null ? void 0 : S.length) > 0) {
    let c = o == null ? void 0 : o.chipOptions.find((g) => g.value == l);
    c && (l = c.label, f = c.color);
  }
  return /* @__PURE__ */ b(
    "div",
    {
      className: `col-span-12 flex items-center space-x-4 p-4 rounded-xl 
                  bg-gray-100 dark:bg-gray-900 ${o.blockClass || ""}`,
      children: [
        a && /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: a }),
        /* @__PURE__ */ b("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ e("p", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: d }),
          s === "chip" ? /* @__PURE__ */ e(
            Ve,
            {
              label: l,
              variant: t,
              color: f,
              className: "mt-1"
            }
          ) : (
            /* TINY EDITOR */
            s === "tinyEditor" ? /* @__PURE__ */ e(
              "p",
              {
                className: "mt-1 text-sm text-gray-900 dark:text-white break-words",
                dangerouslySetInnerHTML: {
                  __html: l
                }
              }
            ) : s === "audio" ? l ? /* @__PURE__ */ e(
              "audio",
              {
                controls: !0,
                src: l instanceof File ? URL.createObjectURL(l) : l,
                onClick: (c) => c.stopPropagation(),
                className: "shadow-md rounded-full mt-1"
              },
              l instanceof File ? URL.createObjectURL(l) : l
            ) : /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-gray-400", children: "N/A" }) : (
              /* DEFAULT */
              /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-gray-900 dark:text-white break-words", children: s == "date" ? /* @__PURE__ */ e("span", { children: $e(l, o.format || "DD MMM YYYY") }) : l || "N/A" })
            )
          )
>>>>>>> main
        ] })
      ]
    }
  );
<<<<<<< HEAD
}, Gr = ({
  value: a = !0,
  onChange: r,
  text: e,
  options: t = [],
  label: o,
  required: l,
  name: i = "",
  disabled: c = !1,
  parentClass: b = ""
}) => {
  const d = t.length > 0 ? t : [
    { label: "Active", value: !0 },
    { label: "Inactive", value: !1 }
  ];
  return /* @__PURE__ */ n(G, { children: /* @__PURE__ */ f("div", { className: b || "col-span-12", children: [
    /* @__PURE__ */ n(re, { label: o, required: l }),
    /* @__PURE__ */ f("div", { className: "flex items-center justify-between h-10 gap-4 bg-gray-100 dark:bg-gray-700 px-3 rounded-md border border-gray-100 dark:border-gray-600", children: [
      e && /* @__PURE__ */ n("p", { className: "text-xs text-gray-600 dark:text-gray-400 flex-shrink overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px]", children: e }),
      /* @__PURE__ */ n("div", { className: "flex items-center gap-6", children: d.map((p, h) => /* @__PURE__ */ f(
=======
}, fr = ({
  value: o = !0,
  onChange: i,
  text: a,
  options: d = [],
  label: l,
  required: s,
  name: t = "",
  disabled: f = !1,
  parentClass: S = ""
}) => {
  const c = d.length > 0 ? d : [
    { label: "Active", value: !0 },
    { label: "Inactive", value: !1 }
  ];
  return /* @__PURE__ */ e(P, { children: /* @__PURE__ */ b("div", { className: S || "col-span-12", children: [
    /* @__PURE__ */ e(q, { label: l, required: s }),
    /* @__PURE__ */ b("div", { className: "flex items-center justify-between h-10 gap-4 bg-gray-100 dark:bg-gray-700 px-3 rounded-md border border-gray-100 dark:border-gray-600", children: [
      a && /* @__PURE__ */ e("p", { className: "text-xs text-gray-600 dark:text-gray-400 flex-shrink overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px]", children: a }),
      /* @__PURE__ */ e("div", { className: "flex items-center gap-6", children: c.map((g, p) => /* @__PURE__ */ b(
>>>>>>> main
        "label",
        {
          className: "flex items-center gap-2 cursor-pointer select-none",
          children: [
            /* @__PURE__ */ n(
              "input",
              {
                type: "radio",
                name: "switch-field",
<<<<<<< HEAD
                required: l && h === 0,
                value: String(p.value),
                disabled: c,
                checked: a === p.value,
                onChange: () => r == null ? void 0 : r(p.value),
                className: "w-4 h-4  border-gray-300 cursor-pointer"
              }
            ),
            /* @__PURE__ */ n("span", { className: "text-sm text-gray-700 dark:text-white", children: p.label })
          ]
        },
        h
      )) })
    ] })
  ] }, i) });
}, xt = ie, Kr = ({
  label: a = "",
  value: r = null,
  onChange: e,
  required: t = !1,
  accept: o = "video/*",
  id: l,
  dragDrop: i = !1,
  name: c = "",
  parentClass: b = "",
  maxSize: d = 0
}) => {
  const [p, h] = S(
    null
  ), [s, m] = S(!1), g = te(null), k = d * 1024 * 1024;
  U(() => {
    if (!r) {
      w(), h(null);
      return;
    }
    if (r instanceof File) {
      const y = URL.createObjectURL(r);
      return h({ file: r, preview: y }), () => {
        URL.revokeObjectURL(y);
      };
    } else typeof r == "string" ? h({ preview: r }) : r != null && r.preview && h(r);
  }, [r]);
  const w = () => {
    p != null && p.preview && p.preview.startsWith("blob:") && URL.revokeObjectURL(p.preview);
  }, P = (y) => {
    if (!y || y.length === 0) return;
    const x = y[0];
    if (k && x.size > k) {
      ge(
        `File is too large. Maximum allowed size is ${d} MB`,
        {
          variant: "warning"
        }
      );
      return;
    }
    const M = URL.createObjectURL(x);
    w(), h({ file: x, preview: M }), e == null || e(x);
  }, I = (y) => {
    y && y.stopPropagation(), w(), h(null), e == null || e(null), g.current && (g.current.value = "");
  }, T = (y) => {
    i && (y.preventDefault(), m(!0));
  }, D = (y) => {
    i && (y.preventDefault(), m(!1));
  }, O = (y) => {
    var x, M, _, L;
    i && (y.preventDefault(), m(!1), (L = (_ = (M = (x = y.dataTransfer) == null ? void 0 : x.files) == null ? void 0 : M[0]) == null ? void 0 : _.type) != null && L.includes("video/") && P(y.dataTransfer.files));
  }, A = () => {
    var y;
    (y = g.current) == null || y.click();
  };
  return /* @__PURE__ */ f("div", { className: b || "col-span-12", children: [
    /* @__PURE__ */ n(re, { label: a, required: t }),
    /* @__PURE__ */ f(
      "div",
      {
        className: `relative rounded-lg p-2 transition-all ${s ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"}`,
        onDragOver: T,
        onDragLeave: D,
        onDrop: O,
        children: [
          /* @__PURE__ */ n(
            "input",
            {
              ref: g,
              id: l,
              type: "file",
              accept: o,
              onChange: (y) => P(y.target.files),
              required: t && !p,
              className: "absolute opacity-0 pointer-events-none h-[10px]"
            }
          ),
          /* @__PURE__ */ n(
            "div",
            {
              className: `flex items-center space-x-4 transition-all ${s ? "opacity-50" : ""}`,
              children: p ? /* @__PURE__ */ f("div", { className: "flex items-center space-x-4", children: [
                /* @__PURE__ */ f("div", { className: "relative", children: [
                  !t && /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      onClick: I,
                      className: "absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow hover:bg-red-600 z-10",
                      children: /* @__PURE__ */ n(ue, { icon: "mdi:close", className: "w-3 h-3" })
                    }
                  ),
                  /* @__PURE__ */ n(
                    "video",
                    {
                      src: p.preview,
                      controls: !0,
                      controlsList: "nodownload",
                      className: "w-[260px] h-[150px] rounded-md object-cover"
                    },
                    p.preview
                  )
                ] }),
                /* @__PURE__ */ n(xt, { type: "button", onClick: A, children: "Change Video File" })
              ] }) : /* @__PURE__ */ f("div", { className: "flex items-center justify-center space-x-4", children: [
                /* @__PURE__ */ n("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ n(ue, { icon: "mdi:video", className: "text-gray-400 w-10 h-10" }) }),
                /* @__PURE__ */ n(
                  xt,
                  {
                    type: "button",
                    onClick: A,
                    variant: "outlined",
                    children: "Choose Video File"
                  }
                ),
                i && /* @__PURE__ */ n("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop your video here" })
              ] })
            }
          ),
          i && s && !p && /* @__PURE__ */ n("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-lg", children: /* @__PURE__ */ n("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg", children: "Drop video here" }) })
        ]
      }
    )
  ] }, c);
}, $t = ({ field: a, formData: r, handleChange: e }) => {
  const {
    key: t,
    label: o,
    type: l,
    options: i,
    placeholder: c,
    rows: b,
    inputClass: d,
    search: p,
    accept: h,
    text: s,
    required: m = !1,
    minLength: g,
    dragDrop: k,
    parentClass: w,
    countriesList: P,
    defaultCountry: I,
    multiple: T,
    dropdownMaxHeight: D,
    editorKey: O,
    fontFamily: A,
    disabled: y,
    negativeNumberAllow: x,
    defaultValue: M,
    renderCondition: _,
    pattern: L,
    renderType: X,
    cropImage: ae,
    aspectRatio: W,
    dependencyKey: R,
    mask: q,
    maskApplyOnValue: $,
    maxSize: C
  } = a;
  let N = r == null ? void 0 : r[t];
  N == null && (N = "");
  const B = c || (l === "select" ? `Select ${o}` : `Enter ${o}`), Y = "w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm focus:outline-none focus:ring-1 focus:ring-blue-200 bg-white text-black dark:bg-gray-700 dark:text-white";
  if (_ && typeof _ == "function" && !_(r))
    return null;
  if (X && X == "details")
    switch (l) {
      case "group":
        return /* @__PURE__ */ n(Ot, { col: a, data: r });
      case "cardGroup":
        return /* @__PURE__ */ n(jt, { col: a, data: r });
      default:
        return /* @__PURE__ */ n(Bt, { col: a, data: r });
    }
  switch (l) {
    case "select":
      return /* @__PURE__ */ n(
        or,
        {
          options: i || [],
          value: N,
          formData: r,
          dependencyKey: R,
          onChange: (F) => e(t, F),
          placeholder: B,
          className: d || "",
          search: p,
          required: m,
          defaultValue: M,
          label: o || "",
          name: t,
          disabled: y,
          parentClass: w || "",
          multiple: T,
          dropdownMaxHeight: D
        }
      );
    case "checkbox":
      return /* @__PURE__ */ n(
        $r,
        {
          name: t,
          label: o || "",
          options: i || [],
          value: N,
          onChange: (F) => e(t, F),
          required: m,
          parentClass: w || "",
          className: d || "",
          multiSelect: T,
          disabled: y
        }
      );
    case "radio":
      return /* @__PURE__ */ n(
        Gr,
        {
          value: N,
          onChange: (F) => e(t, F),
          text: s,
          options: i || [],
          label: o || "",
          required: m,
          name: t,
          disabled: y,
          parentClass: w || ""
        }
      );
    case "switch":
      return /* @__PURE__ */ n(
        Rt,
        {
          value: !!N,
          onChange: (F) => e(t, F),
          label: o || "",
          required: m,
          name: t,
          disabled: y,
          className: "",
          parentClass: w || ""
        }
      );
    case "phone":
      return /* @__PURE__ */ n(
        ir,
        {
          value: N,
          onChange: (F) => e(t, F),
          countriesList: P,
          defaultCountry: I,
          required: m,
          placeholder: B,
          search: p,
          label: o || "",
          name: t,
          disabled: y,
          parentClass: w || ""
        }
      );
    case "textarea":
      return /* @__PURE__ */ n(
        Ct,
        {
          value: N,
          onChange: (F) => e(t, F.target.value),
          placeholder: B,
          rows: b || 3,
          className: `${Y} ${d || ""}`,
          required: m,
          name: t,
          label: o || "",
          disabled: y,
          parentClass: w || ""
        }
      );
    case "image":
      return /* @__PURE__ */ n(
        zr,
        {
          value: N,
          onChange: (F) => e(t, F),
          required: m,
          accept: h || "image/*",
          aspect: W,
          id: `file-${t}`,
          dragDrop: k,
          cropImage: ae,
          label: o || "",
          name: t,
          parentClass: w || ""
        }
      );
    case "audio":
      return /* @__PURE__ */ n(
        Ur,
        {
          value: N,
          onChange: (F) => e(t, F),
          required: m,
          accept: h || "audio/*",
          id: `file-${t}`,
          dragDrop: k,
          label: o || "",
          name: t,
          parentClass: w || "",
          maxSize: C
        }
      );
    case "video":
      return /* @__PURE__ */ n(
        Kr,
        {
          value: N,
          onChange: (F) => e(t, F),
          required: m,
          accept: h || "video/*",
          id: `file-${t}`,
          dragDrop: k,
          label: o || "",
          name: t,
          maxSize: C,
          parentClass: w || ""
        }
      );
    case "tinyEditor":
      return /* @__PURE__ */ n(
        Br,
        {
          value: N,
          onChange: (F) => e(t, F),
          required: m,
          placeholder: B,
          label: o || "",
          parentClass: w || "",
          fontFamily: A,
          editorKey: O || "",
          disabled: y
        }
      );
    default:
      return /* @__PURE__ */ n(
        It,
        {
          field: a,
          type: l || "text",
          defaultValue: M,
          value: N,
          onChange: (F) => e(t, F),
          placeholder: B,
          className: `${Y} ${d || ""}`,
          required: m,
          name: t,
          minLength: g,
          label: o || "",
          negativeNumberAllow: x,
          parentClass: w || "",
          disabled: y,
          pattern: L,
          mask: q,
          maskApplyOnValue: $
        }
      );
  }
}, Wr = ({
  isOpen: a,
  onClose: r,
  config: e,
  onApply: t
}) => {
  var p;
  const [o, l] = S({}), i = (h, s) => {
    l((m) => ({ ...m, [h]: s }));
  }, c = () => {
    t(o), r();
  }, b = () => {
    l({}), t({}), r();
  }, d = e == null ? void 0 : e.component;
  return /* @__PURE__ */ f(G, { children: [
    /* @__PURE__ */ n(
      "div",
      {
        className: `fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${a ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
        onClick: r
      }
    ),
    /* @__PURE__ */ f(
=======
                required: s && p === 0,
                value: g.value,
                disabled: f,
                checked: o === g.value,
                onChange: () => i(g.value),
                className: "w-4 h-4  border-gray-300 cursor-pointer"
              }
            ),
            /* @__PURE__ */ e("span", { className: "text-sm text-gray-700 dark:text-white", children: g.label })
          ]
        },
        p
      )) })
    ] })
  ] }, t) });
}, qe = ({ field: o, formData: i, handleChange: a }) => {
  const {
    key: d,
    label: l,
    type: s,
    options: t,
    placeholder: f,
    rows: S,
    inputClass: c,
    search: g,
    accept: p,
    text: v,
    required: m = !1,
    minLength: u,
    dragDrop: N,
    parentClass: y,
    countriesList: M,
    defaultCountry: A,
    multiple: U,
    dropdownMaxHeight: L,
    editorKey: O,
    fontFamily: B,
    disabled: F,
    negativeNumberAllow: I,
    defaultValue: D,
    renderCondition: $,
    optionDependencyKey: K,
    pattern: J,
    renderType: Z
  } = o;
  let j = i == null ? void 0 : i[d];
  j == null && (j = "");
  const _ = f || (s === "select" ? `Select ${l}` : `Enter ${l}`), V = "w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm focus:outline-none focus:ring-1 focus:ring-blue-200 bg-white text-black dark:bg-gray-700 dark:text-white";
  if ($ && typeof $ == "function" && !$(i))
    return null;
  if (Z && Z == "details")
    switch (s) {
      case "group":
        return /* @__PURE__ */ e(Ye, { col: o, data: i });
      case "cardGroup":
        return /* @__PURE__ */ e(He, { col: o, data: i });
      default:
        return /* @__PURE__ */ e(We, { col: o, data: i });
    }
  switch (s) {
    case "select":
      return /* @__PURE__ */ e(
        gr,
        {
          options: t || [],
          value: j,
          formData: i,
          dependencyKey: K,
          onChange: (T) => a(d, T),
          placeholder: _,
          className: c || "",
          search: g,
          required: m,
          defaultValue: D,
          label: l,
          name: d,
          disabled: F,
          parentClass: y,
          multiple: U,
          dropdownMaxHeight: L
        }
      );
    case "checkbox":
      return /* @__PURE__ */ e(
        mr,
        {
          name: d,
          label: l,
          options: t || [],
          value: j,
          onChange: (T) => a(d, T),
          required: m,
          parentClass: y,
          className: c || "",
          multiSelect: U,
          disabled: F
        }
      );
    case "radio":
      return /* @__PURE__ */ e(
        fr,
        {
          value: j,
          onChange: (T) => a(d, T),
          text: v,
          options: t || [],
          label: l,
          required: m,
          name: d,
          disabled: F,
          parentClass: y
        }
      );
    case "switch":
      return /* @__PURE__ */ e(
        Ge,
        {
          value: j,
          onChange: (T) => a(d, T),
          text: v,
          options: t || [],
          label: l,
          required: m,
          name: d,
          disabled: F,
          parentClass: y
        }
      );
    case "phone":
      return /* @__PURE__ */ e(
        hr,
        {
          value: j,
          onChange: (T) => a(d, T),
          countriesList: M,
          defaultCountry: A,
          required: m,
          placeholder: _,
          search: g,
          label: l,
          name: d,
          disabled: F,
          parentClass: y
        }
      );
    case "textarea":
      return /* @__PURE__ */ e(
        Ke,
        {
          value: j,
          onChange: (T) => a(d, T.target.value),
          placeholder: _,
          rows: S || 3,
          className: `${V} ${c || ""}`,
          required: m,
          name: d,
          label: l,
          disabled: F,
          parentClass: y
        }
      );
    case "image":
      return /* @__PURE__ */ e(
        ur,
        {
          value: j,
          onChange: (T) => a(d, T),
          required: m,
          accept: p || "image/*",
          id: `file-${d}`,
          dragDrop: N,
          label: l,
          name: d,
          parentClass: y
        }
      );
    case "audio":
      return /* @__PURE__ */ e(
        yr,
        {
          value: j,
          onChange: (T) => a(d, T),
          required: m,
          accept: p || "audio/*",
          id: `file-${d}`,
          dragDrop: N,
          label: l,
          name: d,
          parentClass: y
        }
      );
    case "tinyEditor":
      return /* @__PURE__ */ e(
        wr,
        {
          value: j,
          onChange: (T) => a(d, T),
          required: m,
          placeholder: _,
          label: l,
          parentClass: y,
          fontFamily: B,
          editorKey: O,
          disabled: F
        },
        `editor-${d}`
      );
    default:
      return /* @__PURE__ */ e(
        _e,
        {
          field: o,
          type: s || "text",
          defaultValue: D,
          value: j,
          onChange: (T) => a(d, T.target.value),
          placeholder: _,
          className: `${V} ${c || ""}`,
          required: m,
          name: d,
          minLength: u,
          label: l,
          negativeNumberAllow: I,
          parentClass: y,
          disabled: F,
          pattern: J
        }
      );
  }
}, xr = ({ isOpen: o, onClose: i, config: a, onApply: d }) => {
  var c;
  const [l, s] = C({}), t = (g, p) => {
    s((v) => ({ ...v, [g]: p }));
  }, f = () => {
    d == null || d(l), i();
  }, S = () => {
    s({}), d == null || d({}), i();
  };
  return /* @__PURE__ */ b(P, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: `fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${o ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
        onClick: i
      }
    ),
    /* @__PURE__ */ b(
>>>>>>> main
      "div",
      {
        className: `fixed top-0 right-0 h-full w-[28rem] bg-white dark:bg-gray-900 shadow-2xl z-50 flex flex-col border-l border-gray-200 dark:border-gray-700
          transform transition-transform duration-300 ease-in-out
<<<<<<< HEAD
          ${a ? "translate-x-0" : "translate-x-full"}
        `,
        children: [
          /* @__PURE__ */ f("div", { className: "flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700", children: [
            /* @__PURE__ */ n("h2", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: "Filters" }),
            /* @__PURE__ */ n(
              "button",
              {
                onClick: r,
=======
          ${o ? "translate-x-0" : "translate-x-full"}
        `,
        children: [
          /* @__PURE__ */ b("div", { className: "flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700", children: [
            /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: "Filters" }),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: i,
>>>>>>> main
                className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition",
                children: /* @__PURE__ */ n(Ze, { className: "w-5 h-5 text-gray-500 dark:text-gray-400" })
              }
            )
          ] }),
<<<<<<< HEAD
          a && /* @__PURE__ */ n("div", { className: "flex-1 overflow-y-auto px-4 py-3", children: d ? /* @__PURE__ */ n(
            d,
            {
              filters: o,
              onFilterChange: i
            }
          ) : /* @__PURE__ */ n("div", { className: "space-y-4", children: (p = e == null ? void 0 : e.fields) == null ? void 0 : p.map((h) => /* @__PURE__ */ n(
            $t,
            {
              field: h,
              formData: o,
              handleChange: i
            },
            h.key
          )) }) }),
          /* @__PURE__ */ f("div", { className: "flex gap-2 px-4 py-3 border-t border-gray-200 dark:border-gray-700", children: [
            /* @__PURE__ */ n(
              ie,
              {
                onClick: c,
=======
          o && /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto px-4 py-3", children: a != null && a.component ? /* @__PURE__ */ e(
            a.component,
            {
              filters: l,
              onFilterChange: t
            }
          ) : /* @__PURE__ */ e("div", { className: "space-y-4", children: (c = a == null ? void 0 : a.fields) == null ? void 0 : c.map((g) => /* @__PURE__ */ e(P, { children: /* @__PURE__ */ e(
            qe,
            {
              field: g,
              formData: l,
              handleChange: t
            },
            g.key
          ) })) }) }),
          /* @__PURE__ */ b("div", { className: "flex gap-2 px-4 py-3 border-t border-gray-200 dark:border-gray-700", children: [
            /* @__PURE__ */ e(
              X,
              {
                onClick: f,
>>>>>>> main
                variant: "contained",
                color: "primary",
                fullWidth: !0,
                children: "Apply Filters"
              }
            ),
<<<<<<< HEAD
            /* @__PURE__ */ n(
              ie,
=======
            /* @__PURE__ */ e(
              X,
>>>>>>> main
              {
                onClick: b,
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
<<<<<<< HEAD
}, Hr = ({ rows: a = 5, columns: r = 5 }) => /* @__PURE__ */ f(G, { children: [
  /* @__PURE__ */ n("div", { className: "w-full mb-6 inline-flex justify-end items-center", children: /* @__PURE__ */ n("div", { className: "h-8 w-80 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }),
  /* @__PURE__ */ n("div", { className: "overflow-hidden rounded-md border border-gray-200 dark:border-gray-800", children: /* @__PURE__ */ f("table", { className: "w-full border-collapse", children: [
    /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ n("tr", { className: "bg-gray-50 dark:bg-gray-900", children: Array.from({ length: r }).map((e, t) => /* @__PURE__ */ n("th", { className: "px-4 py-3", children: /* @__PURE__ */ n("div", { className: "h-6 w-24 bg-gray-300 dark:bg-gray-700 rounded animate-pulse  inline-flex justify-center items-center" }) }, t)) }) }),
    /* @__PURE__ */ n("tbody", { children: Array.from({ length: a }).map((e, t) => /* @__PURE__ */ n(
      "tr",
      {
        className: "border-t border-gray-200 dark:border-gray-800",
        children: Array.from({ length: r }).map((o, l) => /* @__PURE__ */ n("td", { className: "px-4 py-6", children: /* @__PURE__ */ n("div", { className: "h-6 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }, l))
      },
      t
    )) })
  ] }) })
] }), Zr = ({
  options: a = [],
  value: r = "",
  onChange: e,
  clearLabel: t = ""
}) => {
  const [o, l] = S(!1), i = te(null), c = !!r;
  U(() => {
    const d = (p) => {
      i.current && !i.current.contains(p.target) && l(!1);
    };
    return document.addEventListener("click", d), () => document.removeEventListener("click", d);
  }, []);
  const b = (d) => {
    const p = a.find((h) => h.value === d);
    e(d, p || null), l(!1);
  };
  return a != null && a.length ? /* @__PURE__ */ f("div", { className: "relative", ref: i, children: [
    /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        onClick: () => l((d) => !d),
        className: "relative inline-flex items-center justify-center h-[36px] w-[36px] rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition",
        "aria-label": "Open sort options",
        children: [
          /* @__PURE__ */ n(Zt, { className: "w-4 h-4" }),
          c && /* @__PURE__ */ n("span", { className: "absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" })
        ]
      }
    ),
    o && /* @__PURE__ */ f("div", { className: "absolute right-0 mt-2 z-20 min-w-[220px] max-h-[260px] overflow-auto rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg", children: [
      !!(t != null && t.trim()) && /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          onClick: () => b(""),
          className: `w-full text-left px-3 py-2 text-sm transition hover:bg-gray-100 dark:hover:bg-gray-700 ${r ? "text-gray-700 dark:text-gray-200" : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"}`,
          children: t
        }
      ),
      a.map((d) => /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          onClick: () => b(d.value),
          className: `w-full text-left px-3 py-2 text-sm transition hover:bg-gray-100 dark:hover:bg-gray-700 ${r === d.value ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white" : "text-gray-700 dark:text-gray-200"}`,
          children: d.label
        },
        d.value
      ))
    ] })
  ] }) : null;
}, Ve = {
  enabled: !1,
  useServerSideSorting: !1,
  options: [],
  fields: [],
  defaultValue: "",
  autoGenerate: !0,
  clearLabel: "",
  onChange: null
}, Yr = (a) => a === !0 ? { ...Ve, enabled: !0 } : !a || typeof a != "object" ? Ve : {
  ...Ve,
  ...a,
  enabled: a.enabled ?? !0,
  autoGenerate: a.autoGenerate ?? !0
}, Vr = (a = []) => a.filter((r) => {
  const e = ["menu_actions", "index", "audio", "avatar"];
  return r.type && e.includes(r.type) ? !1 : !!(r.sortKey || (r.type === "group" ? r.titleKey : r.key));
}), Xr = (a) => {
  if (a.sortType) return a.sortType;
  if (a.type === "date") return "date";
  if (a.type === "number") return "number";
  const r = String(
    a.sortKey || (a.type === "group" ? a.titleKey : a.key) || ""
  ).toLowerCase();
  return ["phone", "mobile", "contact", "tel", "whatsapp"].some(
    (t) => r.includes(t)
  ) ? "phone" : Array.isArray(a.chipOptions) && a.chipOptions.length > 0 && a.chipOptions.every(
    (o) => typeof o.value == "boolean"
  ) ? "boolean" : "string";
}, kt = (a = []) => a.flatMap((r) => {
  const e = r.sortKey || (r.type === "group" ? r.titleKey : r.key), t = r.sortLabel || r.title || e, o = Xr(r);
  return e ? o === "number" ? [
    {
      value: `${e}_asc`,
      label: `${t} (Low-High)`,
      key: e,
      order: "asc",
      type: o
    },
    {
      value: `${e}_desc`,
      label: `${t} (High-Low)`,
      key: e,
      order: "desc",
      type: o
    }
  ] : o === "phone" ? [
    {
      value: `${e}_asc`,
      label: `${t} (0-9)`,
      key: e,
      order: "asc",
      type: o
    },
    {
      value: `${e}_desc`,
      label: `${t} (9-0)`,
      key: e,
      order: "desc",
      type: o
    }
  ] : o === "date" ? [
    {
      value: `${e}_desc`,
      label: `${t} (Newest First)`,
      key: e,
      order: "desc",
      type: o
    },
    {
      value: `${e}_asc`,
      label: `${t} (Oldest First)`,
      key: e,
      order: "asc",
      type: o
    }
  ] : o === "boolean" ? [
    {
      value: `${e}_desc`,
      label: `${t} (True First)`,
      key: e,
      order: "desc",
      type: o
    },
    {
      value: `${e}_asc`,
      label: `${t} (False First)`,
      key: e,
      order: "asc",
      type: o
    }
  ] : [
    {
      value: `${e}_asc`,
      label: `${t} (A-Z)`,
      key: e,
      order: "asc",
      type: o
    },
    {
      value: `${e}_desc`,
      label: `${t} (Z-A)`,
      key: e,
      order: "desc",
      type: o
    }
  ] : [];
}), Jr = (a, r = []) => {
  if (Array.isArray(a.options) && a.options.length > 0)
    return a.options.map((o) => ({
      ...o,
      type: o.type || "string",
      order: o.order === "desc" ? "desc" : "asc"
    }));
  const t = Array.isArray(a.fields) ? a.fields : [];
  if (t.length > 0) {
    const o = t.map((l) => {
      const i = typeof l == "string" ? l : l.key, c = r.find(
        (b) => b.key === i || b.sortKey === i || b.type === "group" && b.titleKey === i
      );
      return c ? {
        ...c,
        sortKey: typeof l == "object" && l.key ? l.key : c.sortKey,
        sortType: typeof l == "object" && l.type ? l.type : c.sortType,
        sortLabel: typeof l == "object" && l.label ? l.label : c.sortLabel
      } : null;
    }).filter((l) => l !== null);
    return kt(o);
  }
  return a.autoGenerate ? kt(r) : [];
}, qr = (a = [], r = "", e, t = []) => {
  if (!(e != null && e.enabled) || !r || e != null && e.useServerSideSorting)
    return a;
  const o = t == null ? void 0 : t.find(
    (d) => d.value === r
  );
  if (!(o != null && o.key))
    return a;
  const l = o.order === "desc" ? "desc" : "asc", i = o.key, c = o.type || "string", b = (d) => String(d ?? "").replace(/[^\d]/g, "").trim();
  return [...a].sort((d, p) => {
    const h = d == null ? void 0 : d[i], s = p == null ? void 0 : p[i];
    if (h == null && s == null) return 0;
    if (h == null) return l === "asc" ? 1 : -1;
    if (s == null) return l === "asc" ? -1 : 1;
    let m = 0;
    return c === "number" ? m = Number(h) - Number(s) : c === "phone" ? m = b(h).localeCompare(
      b(s),
      void 0,
      {
        numeric: !0
      }
    ) : c === "date" ? m = new Date(h).getTime() - new Date(s).getTime() : c === "boolean" ? m = +!!h - +!!s : m = String(h).localeCompare(String(s)), l === "asc" ? m : -m;
  });
}, Qr = ({
  config: a,
  setShowAdd: r,
  title: e,
  buttonText: t,
  description: o,
  showAddButton: l
}) => {
  const {
    data: i = [],
    table_head: c = [],
    loading: b = !1,
    search: d = {
=======
}, vr = ({ rows: o = 5, columns: i = 5 }) => /* @__PURE__ */ b(P, { children: [
  /* @__PURE__ */ e("div", { className: "w-full mb-6 inline-flex justify-end items-center", children: /* @__PURE__ */ e("div", { className: "h-8 w-80 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }),
  /* @__PURE__ */ e("div", { className: "overflow-hidden rounded-md border border-gray-200 dark:border-gray-800", children: /* @__PURE__ */ b("table", { className: "w-full border-collapse", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { className: "bg-gray-50 dark:bg-gray-900", children: Array.from({ length: i }).map((a, d) => /* @__PURE__ */ e("th", { className: "px-4 py-3", children: /* @__PURE__ */ e("div", { className: "h-6 w-24 bg-gray-300 dark:bg-gray-700 rounded animate-pulse  inline-flex justify-center items-center" }) }, d)) }) }),
    /* @__PURE__ */ e("tbody", { children: Array.from({ length: o }).map((a, d) => /* @__PURE__ */ e(
      "tr",
      {
        className: "border-t border-gray-200 dark:border-gray-800",
        children: Array.from({ length: i }).map((l, s) => /* @__PURE__ */ e("td", { className: "px-4 py-6", children: /* @__PURE__ */ e("div", { className: "h-6 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }, s))
      },
      d
    )) })
  ] }) })
] }), kr = ({
  config: o,
  setShowAdd: i,
  title: a,
  buttonText: d,
  description: l,
  showAddButton: s
}) => {
  const {
    data: t = [],
    table_head: f = [],
    loading: S = !1,
    search: c = {
>>>>>>> main
      enabled: !1,
      placeholder: "Search...",
      useServerSideSearch: !1
    },
<<<<<<< HEAD
    filter: p = {
      enabled: !1,
      useServerSideFilters: !1
    },
    sort: h = { enabled: !1 },
    pagination: s = {
=======
    filter: g = {
      enabled: !1,
      useServerSideFilters: !1
    },
    pagination: p = {
>>>>>>> main
      enabled: !1,
      rows_per_page: 10,
      useServerSidePagination: !1
    },
<<<<<<< HEAD
    emptyMessage: m = "No data available",
    onMenuAction: g,
    setServerSidePaginationData: k = () => {
    },
    onFilterApply: w,
    filterConfig: P = null,
    rowClick: I = null
  } = a, [T, D] = S(""), [O, A] = S(null), [y, x] = S([]), [M, _] = S({ top: 0, left: 0 }), [L, X] = S(!1), [ae, W] = S({}), R = be(() => Yr(h), [h]), q = be(
    () => Vr(c),
    [c]
  ), $ = be(() => Jr(R, q), [R, q]), [C, N] = S(
    (R == null ? void 0 : R.defaultValue) || ""
  ), [B, Y] = S(null), [F, ne] = S(!1), me = be(() => !d.enabled || !T.trim() || d.useServerSideSearch ? i : nr(i, T, d.searchKeys || []), [i, T, d]), le = be(() => qr(
    me,
    C,
    R,
    $
  ), [me, C, R, $]), [J, oe] = S(1), [ee, ke] = S((s == null ? void 0 : s.rows_per_page) || 50), [Ne, De] = S(me.length || 0), ye = s != null && s.useServerSidePagination ? s.total_pages : Math.ceil(me.length / ee), Se = be(() => {
    if (s.useServerSidePagination) return le;
    const u = (J - 1) * ee;
    return le.slice(u, u + ee);
  }, [le, J, ee, s.useServerSidePagination]), ve = te(null), Me = te({}), we = te(null), _e = (u) => {
    D(u), oe(1), d.useServerSideSearch && (we.current && clearTimeout(we.current), we.current = setTimeout(async () => {
      try {
        await k((v) => ({
          ...v,
          search: u,
          current_page: 1
        }));
      } catch (v) {
        console.error("Search error:", v);
      }
    }, 800));
  }, Pe = (u, v = null) => {
    N(u), oe(1);
    const j = {
      value: u,
      option: v,
      key: (v == null ? void 0 : v.key) || "",
      order: (v == null ? void 0 : v.order) || "",
      type: (v == null ? void 0 : v.type) || ""
    };
    typeof (R == null ? void 0 : R.onChange) == "function" && R.onChange(j);
  }, Ae = (u, v, j) => {
    j.stopPropagation(), A(null), g == null || g(u.type, v);
  }, Ee = (u, v, j) => {
    v.stopPropagation(), x(j);
    const K = v.currentTarget;
    Me.current[u] = K;
    const V = K.getBoundingClientRect(), ce = 192, he = j.length * 40, ze = window.innerWidth, st = window.innerHeight, Ut = ze - V.right < ce ? V.left - ce + V.width : V.left, Gt = st - V.bottom < he && V.top > he ? V.top - he - 2 : V.bottom + 2;
    _({
      top: Math.max(8, Math.min(Gt, st - he - 8)),
      left: Math.max(8, Math.min(Ut, ze - ce - 8))
    }), A(O === u ? null : u);
  }, Le = (u) => (J - 1) * ee + u + 1, Te = (u) => {
    let v = u;
    v && v.src instanceof File && (v = { ...v, src: URL.createObjectURL(v.src) }), Y(v), ne(!0);
  }, Re = (u, v, j, K = null, V = null) => /* @__PURE__ */ n(G, { children: u ? /* @__PURE__ */ n(
    "img",
    {
      src: u instanceof File ? URL.createObjectURL(u) : u,
      alt: v || "Avatar",
      onClick: (ce) => {
        ce.stopPropagation(), ce.preventDefault(), Te({ src: u, alt: v });
      },
      className: `w-10 h-10 cursor-pointer shrink-0 rounded-full object-cover border border-gray-200 dark:border-gray-700 ${j || ""}`
    }
  ) : /* @__PURE__ */ n(G, { children: K ? typeof K == "function" ? K(V) : K : /* @__PURE__ */ n(
    "div",
    {
      className: `w-10 h-10 flex items-center shrink-0 justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${j || ""}`,
      children: /* @__PURE__ */ n(it, { className: "w-6 h-6 text-gray-400 dark:text-gray-400" })
    }
  ) }) }), Fe = (u, v) => /* @__PURE__ */ n(G, { children: u ? /* @__PURE__ */ n(
    "audio",
    {
      controls: !0,
      src: u instanceof File ? URL.createObjectURL(u) : u,
      onClick: (j) => {
        j.stopPropagation();
      },
      className: `w-64 cursor-pointer ${v || ""}`
    },
    u instanceof File ? URL.createObjectURL(u) : u
  ) : /* @__PURE__ */ n(G, { children: /* @__PURE__ */ n(
    "div",
    {
      className: `w-12 h-12 flex items-center shrink-0 justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${v || ""}`,
      children: /* @__PURE__ */ n(Qt, { className: "w-6 h-6 text-gray-400 dark:text-gray-400" })
    }
  ) }) }), Ie = (u, v) => /* @__PURE__ */ f("div", { className: `flex items-center space-x-4 ${v.className || ""}`, children: [
    v.imageKey ? Re(
      u[v.imageKey],
      u[v.titleKey],
      "group-avatar",
      v.fallback_icon,
      u
    ) : "",
    /* @__PURE__ */ f("div", { children: [
      /* @__PURE__ */ n("p", { className: "font-medium text-gray-900 dark:text-white group-title", children: u[v.titleKey] || "" }),
      /* @__PURE__ */ n("p", { className: "text-sm text-gray-500 dark:text-gray-400 group-sub-title", children: u[v.subtitleKey] || "" })
    ] })
  ] }), Oe = (u, v) => {
    var ce;
    let j = String(u);
    const K = v.variant || "contained";
    let V = v.defaultColor;
    if (((ce = v == null ? void 0 : v.chipOptions) == null ? void 0 : ce.length) > 0) {
      const he = v == null ? void 0 : v.chipOptions.find((ze) => ze.value == u);
      he && (j = he.label, V = he.color);
=======
    emptyMessage: v = "No data available",
    onMenuAction: m,
    setServerSidePaginationData: u = () => {
    },
    onFilterApply: N,
    filterConfig: y = null,
    rowClick: M = null
  } = o, [A, U] = C(""), [L, O] = C(null), [B, F] = C([]), [I, D] = C({}), [$, K] = C(!1), [J, Z] = C({}), [j, _] = C(null), [V, T] = C(!1), k = Fe(() => !c.enabled || !A.trim() || c.useServerSideSearch ? t : br(t, A, c.searchKeys || []), [t, A, c]), [z, W] = C(1), [Y, re] = C((p == null ? void 0 : p.rows_per_page) || 50), [ee, Re] = C(k.length || 0), ne = p != null && p.useServerSidePagination ? p.total_pages : Math.ceil(k.length / Y), pe = Fe(() => {
    if (p.useServerSidePagination) return k;
    const r = (z - 1) * Y;
    return k.slice(r, r + Y);
  }, [k, z, Y]), te = Q(null), ie = Q({}), ae = Q(null), be = (r) => {
    U(r), W(1), c.useServerSideSearch && (ae.current && clearTimeout(ae.current), ae.current = setTimeout(async () => {
      try {
        await u((w) => ({
          ...w,
          search: r,
          current_page: 1
        }));
      } catch (w) {
        console.error("Search error:", w);
      }
    }, 800));
  }, ge = (r, w, h) => {
    h.stopPropagation(), O(null), m == null || m(r.type, w);
  }, he = (r, w, h) => {
    w.stopPropagation(), F(h);
    const x = w.currentTarget;
    ie.current[r] = x;
    const R = x.getBoundingClientRect(), H = 192, E = h.length * 40, Ne = window.innerWidth, Pe = window.innerHeight, Je = Ne - R.right < H ? R.left - H + R.width : R.left, Xe = Pe - R.bottom < E && R.top > E ? R.top - E - 2 : R.bottom + 2;
    D({
      top: Math.max(8, Math.min(Xe, Pe - E - 8)),
      left: Math.max(8, Math.min(Je, Ne - H - 8))
    }), O(L === r ? null : r);
  }, ue = (r) => (z - 1) * Y + r + 1, we = (r) => {
    r && r.src instanceof File && (r = { ...r, src: URL.createObjectURL(r.src) }), _(r), T(!0);
  }, le = (r, w, h, x = null, R = null) => /* @__PURE__ */ e(P, { children: r ? /* @__PURE__ */ e(
    "img",
    {
      src: r instanceof File ? URL.createObjectURL(r) : r,
      alt: w || "Avatar",
      onClick: (H) => {
        H.stopPropagation(), H.preventDefault(), we({ src: r, alt: w });
      },
      className: `w-10 h-10 cursor-pointer shrink-0 rounded-full object-cover border border-gray-200 dark:border-gray-700 ${h || ""}`
    }
  ) : /* @__PURE__ */ e(P, { children: x ? typeof x == "function" ? x(R) : x : /* @__PURE__ */ e(
    "div",
    {
      className: `w-10 h-10 flex items-center shrink-0 justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${h || ""}`,
      children: /* @__PURE__ */ e(je, { className: "w-6 h-6 text-gray-400 dark:text-gray-400" })
    }
  ) }) }), me = (r, w) => /* @__PURE__ */ e(P, { children: r ? /* @__PURE__ */ e(
    "audio",
    {
      controls: !0,
      src: r instanceof File ? URL.createObjectURL(r) : r,
      onClick: (h) => {
        h.stopPropagation();
      },
      className: `w-64 cursor-pointer ${w || ""}`
    },
    r instanceof File ? URL.createObjectURL(r) : r
  ) : /* @__PURE__ */ e(P, { children: /* @__PURE__ */ e(
    "div",
    {
      className: `w-12 h-12 flex items-center shrink-0 justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${w || ""}`,
      children: /* @__PURE__ */ e(ir, { className: "w-6 h-6 text-gray-400 dark:text-gray-400" })
    }
  ) }) }), ye = (r, w) => /* @__PURE__ */ b("div", { className: `flex items-center space-x-4 ${w.className || ""}`, children: [
    w.imageKey ? le(
      r[w.imageKey],
      r[w.titleKey],
      "group-avatar",
      w.fallback_icon,
      r
    ) : "",
    /* @__PURE__ */ b("div", { children: [
      /* @__PURE__ */ e("p", { className: "font-medium text-gray-900 dark:text-white group-title", children: r[w.titleKey] || "" }),
      /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400 group-sub-title", children: r[w.subtitleKey] || "" })
    ] })
  ] }), fe = (r, w) => {
    var H;
    let h = String(r);
    const x = w.variant || "contained";
    let R = w.defaultColor;
    if (((H = w == null ? void 0 : w.chipOptions) == null ? void 0 : H.length) > 0) {
      let E = w == null ? void 0 : w.chipOptions.find((Ne) => Ne.value == r);
      E && (h = E.label, R = E.color);
>>>>>>> main
    }
    return /* @__PURE__ */ n(
      zt,
      {
<<<<<<< HEAD
        label: j,
        variant: K,
        color: V,
        className: v.className || ""
      }
    );
  }, je = (u, v, j) => {
    const K = v[u.key];
    return u.type === "menu_actions" ? /* @__PURE__ */ n("div", { className: `text-center ${u.className || ""}`, children: /* @__PURE__ */ n(
      "button",
      {
        ref: (V) => {
          Me.current[v.id || v._id] = V;
        },
        onClick: (V) => Ee(v.id || v._id, V, u.menuList),
        className: "p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition text-gray-700 dark:text-gray-300",
        children: /* @__PURE__ */ n(qt, { className: "h-4 w-4" })
      }
    ) }) : u.type === "index" ? /* @__PURE__ */ n("span", { className: u.className || "", children: Le(j) }) : u.type === "group" ? Ie(v, u) : u.type === "chip" ? /* @__PURE__ */ n(G, { children: Oe(K, u) }) : u.type === "date" ? /* @__PURE__ */ n("span", { className: u.className || "", children: Mt(K, u.format || "DD MMM YYYY") }) : u.type === "avatar" ? /* @__PURE__ */ n(G, { children: /* @__PURE__ */ n("div", { className: "min-w-[40px]", children: Re(
      K,
      u.alt,
      u.className,
      u.fallback_icon,
      v
    ) }) }) : u.type === "audio" ? /* @__PURE__ */ n(G, { children: Fe(K, u.className) }) : /* @__PURE__ */ n("span", { className: u.className || "", children: K || "N/A" });
  }, E = (u) => {
    if (typeof I == "function")
      return I(u);
    if (I)
      return g == null ? void 0 : g("view", u);
  }, z = (u, v) => {
    if (u.onClickDetails)
      return g == null ? void 0 : g("view", v);
    if (typeof u.handleClick == "function")
      return u.handleClick(v);
  }, H = () => I || typeof I == "function", se = (u) => u.onClickDetails || typeof u.handleClick == "function";
  return U(() => {
    const u = () => {
      O && A(null);
    };
    return window.addEventListener("scroll", u, !0), () => {
      window.removeEventListener("scroll", u, !0);
    };
  }, [O]), U(() => {
    const u = (v) => {
      ve.current && !ve.current.contains(v.target) && A(null);
    };
    return document.addEventListener("click", u), () => document.removeEventListener("click", u);
  }, []), U(() => {
    s != null && s.rows_per_page && (s != null && s.useServerSidePagination) && ke((s == null ? void 0 : s.rows_per_page) || 50), s.current_page && oe(s.current_page);
  }, [
    s.rows_per_page,
    s == null ? void 0 : s.useServerSidePagination,
    s.current_page
  ]), U(() => {
    De(
      s != null && s.useServerSidePagination ? s.total_records : le.length
    ), le.length <= ee * (J - 1) && !(s != null && s.useServerSidePagination) && oe((u) => u - 1 || 1);
  }, [
    le.length,
    s.total_records,
    s == null ? void 0 : s.useServerSidePagination
  ]), U(() => {
    if (!(R != null && R.enabled)) {
      N("");
      return;
    }
    if ($.some(
      (v) => v.value === R.defaultValue
    )) {
      N(R.defaultValue);
      return;
    }
    N("");
  }, [R, $]), U(() => {
    if (!(R != null && R.enabled) || !(R != null && R.useServerSideSorting))
      return;
    const u = $ == null ? void 0 : $.find(
      (v) => v.value === C
    );
    k((v) => ({
      ...v,
      current_page: 1,
      sort_by: (u == null ? void 0 : u.key) || "",
      sort_order: (u == null ? void 0 : u.order) || ""
    }));
  }, [
    C,
    R == null ? void 0 : R.enabled,
    R == null ? void 0 : R.useServerSideSorting,
    $,
    k
  ]), /* @__PURE__ */ f(G, { children: [
    b ? /* @__PURE__ */ n(Hr, { rows: 6, columns: 6 }) : /* @__PURE__ */ f(G, { children: [
      /* @__PURE__ */ f("div", { className: "flex flex-col lg:!flex-row lg:!justify-between gap-4 mb-3", children: [
        /* @__PURE__ */ f("div", { className: "table-heading", children: [
          /* @__PURE__ */ n("h1", { children: e }),
          /* @__PURE__ */ n("p", { children: o })
        ] }),
        /* @__PURE__ */ f("div", { className: "flex flex-col justify-end items-stretch lg:!items-end gap-2 w-full lg:!w-auto", children: [
          l && /* @__PURE__ */ f(
            ie,
            {
              onClick: () => r(!0),
              variant: "contained",
              color: "primary",
              children: [
                /* @__PURE__ */ n(Yt, { className: "w-4 h-4 mr-2" }),
                t || "Add New"
              ]
            }
          ),
          /* @__PURE__ */ f("div", { className: "flex flex-col sm:!flex-row sm:!flex-wrap justify-end items-stretch sm:!items-center gap-2 w-full", children: [
            d.enabled && /* @__PURE__ */ n("div", { className: "w-full sm:!w-auto", children: /* @__PURE__ */ f("div", { className: "table-search-field", children: [
              /* @__PURE__ */ n(ot, { className: "search-icon" }),
              /* @__PURE__ */ n(
                "input",
                {
                  type: "text",
                  placeholder: d.placeholder || "Search...",
                  value: T,
                  onChange: (u) => _e(u.target.value)
                }
              )
            ] }) }),
            R != null && R.enabled && ($ == null ? void 0 : $.length) > 0 || P && p.enabled ? /* @__PURE__ */ f("div", { className: "flex items-center justify-end gap-2 w-full sm:!w-auto", children: [
              P && p.enabled && /* @__PURE__ */ f("div", { className: "filter-button-wrapper", children: [
                /* @__PURE__ */ f(
                  ie,
                  {
                    onClick: () => X(!0),
                    variant: "contained",
                    className: "w-full sm:!w-auto",
                    children: [
                      /* @__PURE__ */ n(Vt, { className: "w-4 h-4 mr-2" }),
                      "Filters"
                    ]
                  }
                ),
                Object.keys(ae).length > 0 && /* @__PURE__ */ n("span", { className: "red-dot" })
              ] }),
              (R == null ? void 0 : R.enabled) && ($ == null ? void 0 : $.length) > 0 && /* @__PURE__ */ n(
                Zr,
                {
                  options: $,
                  value: C,
                  onChange: Pe,
                  clearLabel: R == null ? void 0 : R.clearLabel
=======
        label: h,
        variant: x,
        color: R,
        className: w.className || ""
      }
    );
  }, xe = (r, w, h) => {
    const x = w[r.key];
    return r.type === "menu_actions" ? /* @__PURE__ */ e("div", { className: `text-center ${r.className || ""}`, children: /* @__PURE__ */ e(
      "button",
      {
        ref: (R) => ie.current[w.id || w._id] = R,
        onClick: (R) => he(w.id || w._id, R, r.menuList),
        className: "p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition text-gray-700 dark:text-gray-300",
        children: /* @__PURE__ */ e(nr, { className: "h-4 w-4" })
      }
    ) }) : r.type === "index" ? /* @__PURE__ */ e("span", { className: r.className || "", children: ue(h) }) : r.type === "group" ? ye(w, r) : r.type === "chip" ? /* @__PURE__ */ e(P, { children: fe(x, r) }) : r.type === "date" ? /* @__PURE__ */ e("span", { className: r.className || "", children: $e(x, r.format || "DD MMM YYYY") }) : r.type === "avatar" ? /* @__PURE__ */ e(P, { children: /* @__PURE__ */ e("div", { className: "min-w-[40px]", children: le(
      x,
      r.alt,
      r.className,
      r.fallback_icon,
      w
    ) }) }) : r.type === "audio" ? /* @__PURE__ */ e(P, { children: me(x, r.className) }) : /* @__PURE__ */ e("span", { className: r.className || "", children: x || "N/A" });
  }, ve = (r) => {
    if (typeof M == "function")
      return M(r);
    if (M)
      return m == null ? void 0 : m("view", r);
  }, ke = (r, w) => {
    if (r.onClickDetails)
      return m == null ? void 0 : m("view", w);
    if (typeof r.handleClick == "function")
      return r.handleClick(w);
  }, de = () => M || typeof M == "function", se = (r) => r.onClickDetails || typeof r.handleClick == "function";
  return G(() => {
    const r = () => {
      L && O(null);
    };
    return window.addEventListener("scroll", r, !0), () => {
      window.removeEventListener("scroll", r, !0);
    };
  }, [L]), G(() => {
    const r = (w) => {
      te.current && !te.current.contains(w.target) && O(null);
    };
    return document.addEventListener("click", r), () => document.removeEventListener("click", r);
  }, []), G(() => {
    p != null && p.rows_per_page && (p != null && p.useServerSidePagination) && re((p == null ? void 0 : p.rows_per_page) || 50), p.current_page && W(p.current_page);
  }, [
    p.rows_per_page,
    p == null ? void 0 : p.useServerSidePagination,
    p.current_page
  ]), G(() => {
    Re(
      p != null && p.useServerSidePagination ? p.total_records : k.length
    ), k.length <= Y * (z - 1) && !(p != null && p.useServerSidePagination) && W((r) => r - 1 || 1);
  }, [
    k.length,
    p.total_records,
    p == null ? void 0 : p.useServerSidePagination
  ]), /* @__PURE__ */ b(P, { children: [
    S ? /* @__PURE__ */ e(vr, { rows: 6, columns: 6 }) : /* @__PURE__ */ b(P, { children: [
      /* @__PURE__ */ b("div", { className: "flex flex-col sm:flex-row sm:justify-between gap-4 mb-3", children: [
        /* @__PURE__ */ b("div", { children: [
          /* @__PURE__ */ e("h1", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: a }),
          /* @__PURE__ */ e("p", { className: "text-md text-gray-600 dark:text-gray-400", children: l })
        ] }),
        /* @__PURE__ */ b("div", { className: "flex flex-col justify-end items-end gap-2", children: [
          s && /* @__PURE__ */ b(
            X,
            {
              onClick: () => i(!0),
              variant: "contained",
              color: "primary",
              children: [
                /* @__PURE__ */ e(rr, { className: "w-4 h-4 mr-2" }),
                d || "Add New"
              ]
            }
          ),
          /* @__PURE__ */ b("div", { className: "flex justify-end items-center gap-2", children: [
            c.enabled && /* @__PURE__ */ e("div", { className: "", children: /* @__PURE__ */ b("div", { className: "relative min-w-[300px]", children: [
              /* @__PURE__ */ e(Te, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-300" }),
              /* @__PURE__ */ e(
                "input",
                {
                  type: "text",
                  placeholder: c.placeholder || "Search...",
                  value: A,
                  onChange: (r) => be(r.target.value),
                  className: "w-full h-[36px] pl-9 pr-4 py-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-300 dark:ring-blue-200 disabled:opacity-50"
                }
              )
            ] }) }),
            y && g.enabled && // add red dot if filter are applied
            /* @__PURE__ */ b("div", { className: "relative", children: [
              /* @__PURE__ */ b(
                X,
                {
                  onClick: () => K(!0),
                  variant: "contained",
                  children: [
                    /* @__PURE__ */ e(tr, { className: "w-4 h-4 mr-2" }),
                    "Filters"
                  ]
>>>>>>> main
                }
              )
            ] }) : null
          ] })
        ] })
      ] }),
<<<<<<< HEAD
      /* @__PURE__ */ f("div", { className: "table-container", children: [
        /* @__PURE__ */ n("div", { className: "overflow-x-auto", children: /* @__PURE__ */ f("table", { children: [
          /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ n("tr", { children: c.map((u) => /* @__PURE__ */ n(
            "th",
            {
              className: `table-head-data ${u.headClass || ""}`,
              children: u.title
            },
            u.key
          )) }) }),
          /* @__PURE__ */ n("tbody", { children: Se.length === 0 ? /* @__PURE__ */ n("tr", { children: /* @__PURE__ */ n(
            "td",
            {
              colSpan: c.length,
              className: "no-data-message",
              children: m
            }
          ) }) : Se.map((u, v) => /* @__PURE__ */ n(
            "tr",
            {
              className: `table-row ${H() ? "cursor-pointer" : ""}`,
              onClick: () => {
                H() && E(u);
              },
              children: c.map((j) => /* @__PURE__ */ n(
                "td",
                {
                  className: `table-data ${j.type == "audio" ? "" : "max-w-[300px]"} truncate ${se(j) ? "cursor-pointer" : ""}`,
                  title: String(u[j.key] ?? ""),
                  onClick: (K) => {
                    se(j) && (K.stopPropagation(), K.preventDefault(), z(j, u));
                  },
                  children: j.render ? j.render(u, v) : je(j, u, v)
                },
                j.key
              ))
            },
            u.id || u._id || v
          )) })
        ] }) }),
        (s == null ? void 0 : s.enabled) && le.length > 0 && /* @__PURE__ */ f("div", { className: "pagination-wrapper", children: [
          /* @__PURE__ */ f("span", { children: [
            "Showing ",
            (J - 1) * ee + 1,
            " to",
            " ",
            Math.min(J * ee, Ne),
=======
      /* @__PURE__ */ b("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-700", children: [
        /* @__PURE__ */ e("div", { className: "overflow-x-auto", children: /* @__PURE__ */ b("table", { className: "min-w-full divide-y divide-gray-200 dark:divide-gray-700", children: [
          /* @__PURE__ */ e("thead", { className: "bg-gray-50 dark:bg-gray-700/60", children: /* @__PURE__ */ e("tr", { children: f.map((r) => /* @__PURE__ */ e(
            "th",
            {
              className: `px-6 py-4 text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider min-w-max max-w-[180px] truncate ${r.headClass || ""}`,
              children: r.title
            },
            r.key
          )) }) }),
          /* @__PURE__ */ e("tbody", { className: "bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700", children: pe.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e(
            "td",
            {
              colSpan: f.length,
              className: "text-center py-10 text-gray-500 dark:text-gray-400",
              children: v
            }
          ) }) : pe.map((r, w) => /* @__PURE__ */ e(
            "tr",
            {
              className: `hover:bg-gray-50 dark:hover:bg-blue-800/10 transition ${de() ? "cursor-pointer" : ""}`,
              onClick: (h) => {
                de() && ve(r);
              },
              children: f.map((h) => /* @__PURE__ */ e(
                "td",
                {
                  className: `px-6 py-4 text-sm text-gray-900 dark:text-gray-100 min-w-max ${h.type == "audio" ? "" : "max-w-[300px]"} truncate ${se(h) ? "cursor-pointer" : ""}`,
                  title: String(r[h.key] ?? ""),
                  onClick: (x) => {
                    se(h) && (x.stopPropagation(), x.preventDefault(), ke(h, r));
                  },
                  children: h.render ? h.render(r, w) : xe(h, r, w)
                },
                h.key
              ))
            },
            r.id || r._id || w
          )) })
        ] }) }),
        (p == null ? void 0 : p.enabled) && k.length > 0 && /* @__PURE__ */ b("div", { className: " bg-gray-50 dark:bg-gray-700/60 px-6 py-3 flex flex-wrap items-center justify-between border-t border-gray-200 dark:border-gray-600 gap-3", children: [
          /* @__PURE__ */ b("div", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
            "Showing ",
            (z - 1) * Y + 1,
            " to",
            " ",
            Math.min(z * Y, ee),
>>>>>>> main
            " of",
            " ",
            Ne,
            " results"
          ] }),
<<<<<<< HEAD
          /* @__PURE__ */ f("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ f("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ n("span", { children: "Rows per page:" }),
              /* @__PURE__ */ n(
                "select",
                {
                  value: ee,
                  onChange: (u) => {
                    const v = Number(u.target.value);
                    ke(v), oe(1), s.useServerSidePagination && k(
                      (j) => ({
                        ...j,
                        current_page: 1,
                        rows_per_page: v
                      })
                    );
                  },
                  className: "rows-number-select",
                  children: [10, 25, 50, 100].map((u) => /* @__PURE__ */ n("option", { value: u, children: u }, u))
                }
              )
            ] }),
            /* @__PURE__ */ f("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ n(
                "button",
                {
                  onClick: () => {
                    if (J > 1) {
                      const u = J - 1;
                      oe(u), s.useServerSidePagination && k(
                        (v) => ({
                          ...v,
                          current_page: u
                        })
                      );
                    }
                  },
                  disabled: J === 1,
                  className: "arrow-icons",
                  children: /* @__PURE__ */ n(Xt, { className: "h-4 w-4" })
                }
              ),
              /* @__PURE__ */ f("span", { children: [
                "Page ",
                J,
                " of ",
                ye
=======
          /* @__PURE__ */ b("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ b("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e("span", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Rows per page:" }),
              /* @__PURE__ */ e(
                "select",
                {
                  value: Y,
                  onChange: (r) => {
                    const w = Number(r.target.value);
                    re(w), W(1), p.useServerSidePagination && u((h) => ({
                      ...h,
                      current_page: 1,
                      rows_per_page: w
                    }));
                  },
                  className: "border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500",
                  children: [2, 10, 25, 50, 100].map((r) => /* @__PURE__ */ e("option", { value: r, children: r }, r))
                }
              )
            ] }),
            /* @__PURE__ */ b("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => {
                    if (z > 1) {
                      const r = z - 1;
                      W(r), p.useServerSidePagination && u((w) => ({
                        ...w,
                        current_page: r
                      }));
                    }
                  },
                  disabled: z === 1,
                  className: "p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition text-gray-500 dark:text-gray-300 disabled:opacity-50",
                  children: /* @__PURE__ */ e(ar, { className: "h-4 w-4" })
                }
              ),
              /* @__PURE__ */ b("span", { className: "text-sm text-gray-800 dark:text-gray-200", children: [
                "Page ",
                z,
                " of ",
                ne
>>>>>>> main
              ] }),
              /* @__PURE__ */ n(
                "button",
                {
                  onClick: () => {
<<<<<<< HEAD
                    if (J < ye) {
                      const u = J + 1;
                      oe(u), s.useServerSidePagination && k(
                        (v) => ({
                          ...v,
                          current_page: u
                        })
                      );
                    }
                  },
                  disabled: J === ye,
                  className: "arrow-icons",
                  children: /* @__PURE__ */ n(Jt, { className: "h-4 w-4" })
=======
                    if (z < ne) {
                      const r = z + 1;
                      W(r), p.useServerSidePagination && u((w) => ({
                        ...w,
                        current_page: r
                      }));
                    }
                  },
                  disabled: z === ne,
                  className: "p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition text-gray-500 dark:text-gray-300 disabled:opacity-50",
                  children: /* @__PURE__ */ e(or, { className: "h-4 w-4" })
>>>>>>> main
                }
              )
            ] })
          ] })
        ] })
      ] })
    ] }),
<<<<<<< HEAD
    O && er(
      /* @__PURE__ */ n(
        "div",
        {
          ref: ve,
          style: {
            position: "fixed",
            top: `${M.top}px`,
            left: `${M.left}px`,
            zIndex: 9999
          },
          className: "w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg border border-gray-200 dark:border-gray-600",
          children: y.map((u, v) => /* @__PURE__ */ f(
            "button",
            {
              onClick: (j) => Ae(
                u,
                i.find(
                  (K) => K.id === O || K._id == O
                ),
                j
              ),
              className: `w-full flex items-center gap-2 px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-600 ${u.variant === "danger" ? "text-red-600 dark:text-red-500" : "text-gray-700 dark:text-gray-200"}`,
              children: [
                u.icon && /* @__PURE__ */ n("span", { className: "shrink-0", children: u.icon }),
                u.title
              ]
            },
            v
=======
    L && lr(
      /* @__PURE__ */ e(
        "div",
        {
          ref: te,
          style: {
            position: "fixed",
            top: `${I.top}px`,
            left: `${I.left}px`,
            zIndex: 9999
          },
          className: "w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg border border-gray-200 dark:border-gray-600",
          children: B.map((r, w) => /* @__PURE__ */ b(
            "button",
            {
              onClick: (h) => ge(
                r,
                t.find(
                  (x) => x.id === L || x._id == L
                ),
                h
              ),
              className: `w-full flex items-center gap-2 px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-600 ${r.variant === "danger" ? "text-red-600 dark:text-red-500" : "text-gray-700 dark:text-gray-200"}`,
              children: [
                r.icon && /* @__PURE__ */ e("span", { className: "shrink-0", children: r.icon }),
                r.title
              ]
            },
            w
>>>>>>> main
          ))
        }
      ),
      document.body
    ),
<<<<<<< HEAD
    P && /* @__PURE__ */ n(
      Wr,
      {
        isOpen: L,
        onClose: () => X(!1),
        config: P,
        onApply: (u) => {
          W(u), w == null || w(u);
        }
      }
    ),
    F && B && /* @__PURE__ */ n(
      lt,
      {
        src: B.src,
        alt: B.alt,
        isOpen: F,
        setIsOpen: ne
      }
    )
  ] });
}, Ue = ({
  isOpen: a,
  onClose: r,
  icon: e,
  title: t,
  children: o,
  size: l = "md",
  actionButtons: i = [],
  onFormSubmit: c = () => {
  },
  loadingBtn: b = !1,
  executeFunction: d = () => {
=======
    y && /* @__PURE__ */ e(
      xr,
      {
        isOpen: $,
        onClose: () => K(!1),
        config: y,
        onApply: (r) => {
          Z(r), N == null || N(r);
        }
      }
    ),
    V && /* @__PURE__ */ e(
      ze,
      {
        src: j.src,
        alt: j.alt,
        isOpen: V,
        setIsOpen: T
      }
    )
  ] });
}, Ce = ({
  isOpen: o,
  onClose: i,
  icon: a,
  title: d,
  children: l,
  size: s = "md",
  actionButtons: t = [],
  actions: f,
  showDefaultClose: S = !0,
  footerConfig: c = null,
  hideFooter: g = !1,
  onFormSubmit: p = () => {
  },
  onCancel: v,
  loadingBtn: m = !1,
  executeFunction: u = () => {
>>>>>>> main
  },
  selectedItem: p = null
}) => {
<<<<<<< HEAD
  if (!a) return null;
  const h = {
=======
  if (!o) return null;
  const y = {
>>>>>>> main
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-full"
  };
<<<<<<< HEAD
  return /* @__PURE__ */ f("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: [
    /* @__PURE__ */ n(
      "div",
      {
        className: "fixed inset-0 bg-gray-500 opacity-75",
        onClick: () => r()
      }
    ),
    /* @__PURE__ */ f(
      "div",
      {
        className: `relative bg-white rounded-lg shadow-xl w-full ${h[l] || h.md} max-h-[90vh] flex flex-col dark:bg-gray-800`,
        children: [
          /* @__PURE__ */ f("div", { className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0", children: [
            /* @__PURE__ */ f("div", { className: "flex items-center gap-1", children: [
              e && /* @__PURE__ */ n("span", { children: e }),
              /* @__PURE__ */ n("h3", { className: "text-lg font-medium text-gray-900 dark:text-white", children: t })
=======
  return /* @__PURE__ */ b("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: "fixed inset-0 bg-gray-500 opacity-75",
        onClick: () => i()
      }
    ),
    /* @__PURE__ */ b(
      "div",
      {
        className: `relative bg-white rounded-lg shadow-xl w-full ${y[s] || y.md} max-h-[90vh] flex flex-col dark:bg-gray-800`,
        children: [
          /* @__PURE__ */ b("div", { className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0", children: [
            /* @__PURE__ */ b("div", { className: "flex items-center gap-1", children: [
              a && /* @__PURE__ */ e("span", { children: a }),
              /* @__PURE__ */ e("h3", { className: "text-lg font-medium text-gray-900 dark:text-white", children: d })
>>>>>>> main
            ] }),
            /* @__PURE__ */ n(
              "button",
              {
<<<<<<< HEAD
                onClick: () => r(),
=======
                onClick: () => i(),
>>>>>>> main
                className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
                children: /* @__PURE__ */ n(Ze, { className: "w-6 h-6" })
              }
            )
          ] }),
<<<<<<< HEAD
          /* @__PURE__ */ n("div", { className: "flex-1 overflow-y-auto p-4", children: o }),
          i.length > 0 && /* @__PURE__ */ n("div", { className: "px-4 py-3 flex justify-end gap-3 border-t border-gray-200 dark:border-gray-700 sm:!px-6", children: i.map((s, m) => /* @__PURE__ */ n(
            ie,
            {
              onClick: (g) => {
                s.type == "submit" ? c(g) : d(
                  () => {
                    var k;
                    return Promise.resolve((k = s == null ? void 0 : s.onClick) == null ? void 0 : k.call(s, g, p));
                  },
                  (k) => r == null ? void 0 : r(k)
                );
              },
              disabled: b || s.disabled,
              variant: s.variant || "contained",
              color: s.color || "primary",
              className: `min-w-[100px] ${s.className || ""}`,
              type: s.type || "button",
              children: b ? /* @__PURE__ */ f("div", { className: "flex items-center", children: [
                /* @__PURE__ */ n("div", { className: "animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-2 border-t-white mr-2" }),
                s.label || "Submit",
=======
          /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto p-4", children: l }),
          t.length > 0 && /* @__PURE__ */ e("div", { className: "px-4 py-3 flex justify-end gap-3 border-t border-gray-200 dark:border-gray-700 sm:px-6", children: t.map((M) => /* @__PURE__ */ e(
            X,
            {
              onClick: (A) => {
                M.type == "submit" ? p(A) : u(
                  () => {
                    var U;
                    return (U = M == null ? void 0 : M.onClick) == null ? void 0 : U.call(M, A, N);
                  },
                  (U) => i == null ? void 0 : i(U)
                );
              },
              disabled: m || M.disabled,
              variant: M.variant || "contained",
              color: M.color || "primary",
              className: `min-w-[100px] ${M.className}`,
              type: M.type || "button",
              children: m ? /* @__PURE__ */ b("div", { className: "flex items-center", children: [
                /* @__PURE__ */ e("div", { className: "animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-2 border-t-white mr-2" }),
                M.label || "Submit",
>>>>>>> main
                "..."
              ] }) : s.label || "Submit"
            },
            `${s.label || "action"}-${m}`
          )) })
        ]
      }
    )
  ] });
<<<<<<< HEAD
}, Nt = ({
  config: a,
  onSubmit: r,
  initialData: e,
  fetchRowDetails: t,
  type: o
}) => {
  const l = e || {}, { formClass: i = "grid grid-cols-12 gap-4", formFields: c = [] } = a || {}, [b, d] = S(l), [p, h] = S(!0), s = async () => {
    t == null || t(l).then((k) => {
      d(k.data);
    }).catch((k) => {
      ge(k.message, { variant: "error" });
    }).finally(() => {
      h(!1);
    });
  };
  U(() => {
    t instanceof Function ? s() : (d(l), h(!1));
  }, []);
  const m = (k, w) => {
    d((P) => ({ ...P, [k]: w }));
  }, g = (k) => {
    k.preventDefault();
    const w = k.currentTarget;
    if (!w.checkValidity()) {
      w.reportValidity();
      return;
    }
    r(b);
=======
}, Be = ({
  config: o,
  onSubmit: i,
  initialData: a = {},
  fetchRowDetails: d,
  type: l = "add"
}) => {
  const { formClass: s = "grid grid-cols-12 gap-4", formFields: t = [] } = o || {}, [f, S] = C(a), [c, g] = C(!0), p = async () => {
    d == null || d(a).then((u) => {
      S(u.data);
    }).catch((u) => {
      ce(u.message, { variant: "error" });
    }).finally(() => {
      g(!1);
    });
  };
  G(() => {
    d instanceof Function ? p() : (S(a), g(!1));
  }, []);
  const v = (u, N) => {
    S((y) => ({ ...y, [u]: N }));
  }, m = (u) => {
    u.preventDefault();
    const N = u.target;
    if (!N.checkValidity()) {
      N.reportValidity();
      return;
    }
    i(f);
>>>>>>> main
  };
  return p ? /* @__PURE__ */ n("div", { className: "flex items-center justify-center h-64", children: /* @__PURE__ */ n(
    "div",
    {
      className: "rounded-full border-4 border-blue-500 border-t-gray-200 animate-spin w-8 h-8",
      style: {
        borderTopColor: "border-primary-500"
      }
    }
  ) }) : /* @__PURE__ */ n(
    "form",
    {
<<<<<<< HEAD
      id: o === "add" ? "addForm" : o === "edit" ? "editForm" : "defaultForm",
      onSubmit: g,
      className: i,
      noValidate: !1,
      children: c.map((k) => /* @__PURE__ */ n(
        $t,
        {
          field: k,
          formData: b,
          handleChange: m
        },
        k.key
      ))
    }
  );
};
function ea({
  data: a,
  config: r,
  fetchRowDetails: e
}) {
  const { fields: t = [], containerClass: o } = r || {}, l = a || {}, [i, c] = S(l), [b, d] = S(!0), p = async () => {
    e == null || e(l).then((h) => {
      c(h.data);
    }).catch((h) => {
      ge(h.message, { variant: "error" });
=======
      id: l == "add" ? "addForm" : l == "edit" ? "editForm" : "defaultForm",
      onSubmit: m,
      className: s,
      noValidate: !1,
      children: t.map((u) => /* @__PURE__ */ e(P, { children: /* @__PURE__ */ e(
        qe,
        {
          field: u,
          formData: f,
          handleChange: v
        },
        u.key
      ) }))
    }
  );
};
function Nr({ data: o, config: i, fetchRowDetails: a }) {
  const { fields: d, containerClass: l } = i, [s, t] = C(o), [f, S] = C(!0), c = async () => {
    a == null || a(o).then((g) => {
      t(g.data);
    }).catch((g) => {
      ce(g.message, { variant: "error" });
>>>>>>> main
    }).finally(() => {
      d(!1);
    });
  };
<<<<<<< HEAD
  return U(() => {
    e instanceof Function ? p() : (c(l), d(!1));
  }, []), b ? /* @__PURE__ */ n("div", { className: "flex items-center justify-center h-64", children: /* @__PURE__ */ n(
    "div",
    {
      className: "rounded-full border-4 border-blue-500 border-t-gray-200 animate-spin w-8 h-8",
      style: {
        borderTopColor: "border-primary-500"
      }
    }
  ) }) : /* @__PURE__ */ n(G, { children: /* @__PURE__ */ n("div", { className: `grid grid-cols-12 gap-4 ${o || ""}`, children: t.map((h) => h.renderCondition && typeof h.renderCondition == "function" && !h.renderCondition(i) ? null : h.type == "group" ? /* @__PURE__ */ n(
    Ot,
    {
      col: h,
      data: i
    },
    h.key || h.titleKey
  ) : h.type == "cardGroup" ? /* @__PURE__ */ n(
    jt,
    {
      col: h,
      data: i
    },
    h.key || h.titleKey
  ) : /* @__PURE__ */ n(
    Bt,
    {
      col: h,
      data: i
    },
    h.key || h.label
  )) }) });
}
const ta = ({ config: a }) => {
  var ee, ke, Ne, De, ye, Se, ve, Me, we, _e, Pe, Ae, Ee, Le, Te, Re, Fe, Ie, Oe, je;
  const {
    title: r,
    fetchData: e,
    fetchRowDetails: t,
    isStaticData: o = !1,
    tableConfig: l,
    modalConfig: i,
    filterConfig: c
  } = a, [b, d] = S(!0), [p, h] = S(!1), [s, m] = S([]), [g, k] = S(null), [w, P] = S({
    search: "",
    rows_per_page: 50,
    current_page: 1,
    sort_by: "",
    sort_order: ""
  }), [I, T] = S({}), [D, O] = S(!1), [A, y] = S(!1), [x, M] = S(!1), [_, L] = S(!1), [X, ae] = S(!1), [W, R] = S(
    null
  ), q = (E, z) => {
    E === "edit" ? (R(z), M(!0)) : E === "view" ? (R(z), ae(!0)) : E === "delete" && (R(z), L(!0));
  }, $ = async (E, z, H = "", se = "") => {
    h(!0);
    try {
      if (!E) return;
      const u = await E();
      (H || u != null && u.message) && ge(H || u.message || "Success", {
        variant: "success"
      }), z == null || z(u);
    } catch (u) {
      (se || u != null && u.message) && ge(se || u.message || "Error occurred", {
        variant: "error"
      });
    } finally {
      h(!1);
    }
  }, C = (E) => {
    const z = E.newObject;
    o ? (m((H) => [z, ...H]), k((H) => ({
      ...H,
=======
  return G(() => {
    a instanceof Function ? c() : (t(o), S(!1));
  }, []), f ? (
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
  ) : /* @__PURE__ */ e(P, { children: /* @__PURE__ */ e("div", { className: `grid grid-cols-12 gap-4 ${l || ""}`, children: d.map((g) => g.renderCondition && typeof g.renderCondition == "function" && !g.renderCondition(s) ? null : g.type == "group" ? /* @__PURE__ */ e(Ye, { col: g, data: s }) : g.type == "cardGroup" ? /* @__PURE__ */ e(He, { col: g, data: s }) : /* @__PURE__ */ e(We, { col: g, data: s })) }) });
}
const Ze = ({ config: o }) => {
  var te, ie, ae, be, ge, he, ue, we, le, me, ye, fe, xe, ve, ke, de, se, r, w;
  const {
    title: i,
    fetchData: a = async () => {
    },
    fetchRowDetails: d = null,
    isStaticData: l = !1,
    tableConfig: s = {},
    modalConfig: t = {},
    filterConfig: f
  } = o, [S, c] = C(!0), [g, p] = C(!1), [v, m] = C([]), [u, N] = C(null), [y, M] = C({
    search: "",
    rows_per_page: 50,
    current_page: 1
  }), [A, U] = C({}), [L, O] = C(!1), [B, F] = C(!1), [I, D] = C(!1), [$, K] = C(!1), [J, Z] = C(!1), [j, _] = C(null), V = (h, x) => {
    h === "edit" ? (_(x), D(!0)) : h === "view" ? (_(x), Z(!0)) : h === "delete" && (_(x), K(!0));
  }, T = async (h, x, R = "", H = "") => {
    p(!0);
    try {
      const E = await (h == null ? void 0 : h());
      (R || E.message) && ce(R || E.message, {
        variant: "success"
      }), x == null || x(E);
    } catch (E) {
      (H || E.message) && ce(H || E.message, { variant: "error" });
    } finally {
      p(!1);
    }
  }, k = (h) => {
    let x = h.newObject;
    l ? (m((R) => [x, ...R]), N((R) => ({
      ...R,
>>>>>>> main
      current_page: 1
    }))) : (P((H) => ({
      ...H,
      current_page: 1
<<<<<<< HEAD
    })), w.current_page === 1 && ne()), y(!1);
  }, N = (E) => {
    const { newObject: z, targetObject: H } = E;
    o ? m(
      (se) => se.map(
        (u) => u.id === H.id ? { ...u, ...z } : u
      )
    ) : ne(), M(!1);
  }, B = (E) => {
    if (!E) {
      L(!1), R(null);
      return;
    }
    o ? m(
      (z) => z.filter((H) => H.id !== E.targetObject.id)
    ) : s.length === 1 && w.current_page > 1 ? P((z) => ({
      ...z,
      current_page: z.current_page - 1
    })) : ne(), L(!1), R(null);
  }, Y = (E) => $(
    () => {
      var z;
      return (z = i == null ? void 0 : i.addModal) != null && z.handleSubmit ? i.addModal.handleSubmit(E) : Promise.resolve({ newObject: null });
    },
    C
  ), F = (E) => $(
    () => {
      var z;
      return (z = i == null ? void 0 : i.editModal) != null && z.handleSubmit ? i.editModal.handleSubmit(E, W) : Promise.resolve({ newObject: null, targetObject: null });
    },
    N
  ), ne = async () => {
    d(!0);
    try {
      const E = await e({
        ...w,
        ...I
      });
      m(E.data || []), k(E.pagination || null);
    } catch (E) {
      ge(E.message || "Failed to fetch data", {
        variant: "error"
      });
    } finally {
      d(!1);
    }
  }, me = (E) => {
    var z;
    T(() => ({ ...E })), (z = l == null ? void 0 : l.filter) != null && z.useServerSideFilters && O((H) => !H);
  }, le = (E, z) => E.filter(
    (H) => Object.entries(z).every(([se, u]) => H[se] === u)
  ), J = be(() => {
    var E;
    return (E = l == null ? void 0 : l.filter) != null && E.useServerSideFilters ? s : le(s, I);
  }, [s, I, (ee = l == null ? void 0 : l.filter) == null ? void 0 : ee.useServerSideFilters]), oe = (ke = i == null ? void 0 : i.viewModal) == null ? void 0 : ke.component;
  return U(() => {
    ne();
  }, [
    w.search,
    w.rows_per_page,
    w.current_page,
    w.sort_by,
    w.sort_order,
    D
  ]), /* @__PURE__ */ f("div", { children: [
    /* @__PURE__ */ n(
      Qr,
      {
        title: r,
        setShowAdd: y,
        description: a.description,
        buttonText: a.buttonText,
        showAddButton: !!(i != null && i.addModal),
        config: {
          ...l,
          pagination: {
            ...l.pagination,
            ...g
          },
          data: J,
          setServerSidePaginationData: P,
          onMenuAction: q,
          filterConfig: c,
          onFilterApply: me,
          loading: b
=======
    })), y.current_page == 1 && ee()), F(!1);
  }, z = (h) => {
    let x = h.newObject, R = h.targetObject;
    l ? m(
      (H) => H.map(
        (E) => E.id === R.id ? { ...E, ...x } : E
      )
    ) : ee(), D(!1);
  }, W = (h) => {
    if (!h) {
      K(!1), _(null);
      return;
    }
    l ? m(
      (x) => x.filter((R) => R.id !== h.targetObject.id)
    ) : v.length == 1 && y.current_page > 1 ? M((x) => ({
      ...x,
      current_page: x.current_page - 1
    })) : ee(), K(!1), _(null);
  }, Y = (h) => T(
    () => {
      var x, R;
      return (R = (x = t == null ? void 0 : t.addModal) == null ? void 0 : x.handleSubmit) == null ? void 0 : R.call(x, h);
    },
    k
  ), re = (h) => T(
    () => {
      var x, R;
      return (R = (x = t == null ? void 0 : t.editModal) == null ? void 0 : x.handleSubmit) == null ? void 0 : R.call(x, h, j);
    },
    z
  ), ee = async () => {
    c(!0), a == null || a({ ...y, ...A }).then((h) => {
      m(h.data), N(h.pagination);
    }).catch((h) => {
      ce(h.message, { variant: "error" });
    }).finally(() => {
      c(!1);
    });
  }, Re = (h) => {
    var x;
    U((R) => ({
      ...h
    })), (x = s == null ? void 0 : s.filter) != null && x.useServerSideFilters && O((R) => !R);
  }, ne = (h, x) => h.filter(
    (R) => Object.entries(x).every(([H, E]) => R[H] === E)
  ), pe = Fe(() => {
    var h;
    return (h = s == null ? void 0 : s.filter) != null && h.useServerSideFilters ? v : ne(v, A);
  }, [v, A]);
  return G(() => {
    ee();
  }, [
    y.search,
    y.rows_per_page,
    y.current_page,
    L
  ]), /* @__PURE__ */ b("div", { children: [
    /* @__PURE__ */ e(
      kr,
      {
        title: i,
        setShowAdd: F,
        description: o.description,
        buttonText: o.buttonText,
        showAddButton: !!t.addModal,
        config: {
          ...s,
          pagination: {
            ...s.pagination,
            ...u
          },
          data: pe,
          setServerSidePaginationData: M,
          onMenuAction: V,
          filterConfig: f,
          onFilterApply: Re,
          loading: S
>>>>>>> main
        }
      }
    ),
    /* @__PURE__ */ n(
      Ue,
      {
<<<<<<< HEAD
        isOpen: A,
        onClose: () => {
          p || y(!1);
        },
        icon: (Ne = i == null ? void 0 : i.addModal) == null ? void 0 : Ne.icon,
        title: ((De = i == null ? void 0 : i.addModal) == null ? void 0 : De.title) || "Add New",
        size: ((ye = i == null ? void 0 : i.addModal) == null ? void 0 : ye.size) || "md",
        onFormSubmit: () => {
          var E;
          return (E = document.querySelector("#addForm")) == null ? void 0 : E.requestSubmit();
        },
        loadingBtn: p,
        actionButtons: ((Se = i == null ? void 0 : i.addModal) == null ? void 0 : Se.actionButtons) || [],
        children: /* @__PURE__ */ n(
          Nt,
          {
            config: (i == null ? void 0 : i.addModal) || {},
            onSubmit: Y,
            initialData: {},
            type: "add",
            loading: p
=======
        isOpen: B,
        onClose: () => {
          g || F(!1);
        },
        icon: (te = t.addModal) == null ? void 0 : te.icon,
        title: ((ie = t.addModal) == null ? void 0 : ie.title) || "Add New",
        size: ((ae = t.addModal) == null ? void 0 : ae.size) || "md",
        onFormSubmit: () => {
          var h;
          return (h = document.querySelector("#addForm")) == null ? void 0 : h.requestSubmit();
        },
        loadingBtn: g,
        actionButtons: ((be = t == null ? void 0 : t.addModal) == null ? void 0 : be.actionButtons) || [],
        children: /* @__PURE__ */ e(
          Be,
          {
            config: (t == null ? void 0 : t.addModal) || {},
            onSubmit: Y,
            initialData: {},
            type: "add",
            loading: g
>>>>>>> main
          }
        )
      }
    ),
    /* @__PURE__ */ n(
      Ue,
      {
<<<<<<< HEAD
        isOpen: x,
        onClose: () => {
          p || M(!1);
        },
        icon: (ve = i == null ? void 0 : i.editModal) == null ? void 0 : ve.icon,
        title: ((Me = i == null ? void 0 : i.editModal) == null ? void 0 : Me.title) || "Edit",
        size: ((we = i == null ? void 0 : i.editModal) == null ? void 0 : we.size) || "md",
        onFormSubmit: () => {
          var E;
          return (E = document.querySelector("#editForm")) == null ? void 0 : E.requestSubmit();
        },
        actionButtons: ((_e = i == null ? void 0 : i.editModal) == null ? void 0 : _e.actionButtons) || [],
        loadingBtn: p,
        children: /* @__PURE__ */ n(
          Nt,
          {
            config: (i == null ? void 0 : i.editModal) || {},
            onSubmit: F,
            initialData: W,
            type: "edit",
            loading: p,
            fetchRowDetails: t
=======
        isOpen: I,
        onClose: () => {
          g || D(!1);
        },
        icon: (ge = t.editModal) == null ? void 0 : ge.icon,
        title: ((he = t.editModal) == null ? void 0 : he.title) || "Edit",
        size: ((ue = t.editModal) == null ? void 0 : ue.size) || "md",
        onFormSubmit: () => {
          var h;
          return (h = document.querySelector("#editForm")) == null ? void 0 : h.requestSubmit();
        },
        actionButtons: ((we = t == null ? void 0 : t.editModal) == null ? void 0 : we.actionButtons) || [],
        loadingBtn: g,
        children: /* @__PURE__ */ e(
          Be,
          {
            config: t.editModal || {},
            onSubmit: re,
            initialData: j,
            type: "edit",
            loading: g,
            fetchRowDetails: d
>>>>>>> main
          }
        )
      }
    ),
<<<<<<< HEAD
    _ && /* @__PURE__ */ n(
      Ue,
      {
        isOpen: _,
        onClose: (E) => {
          B(E);
        },
        icon: ((Pe = i == null ? void 0 : i.deleteModal) == null ? void 0 : Pe.icon) || /* @__PURE__ */ n(ue, { icon: "ph:warning-bold", className: "w-6 h-6 text-red-500" }),
        title: ((Ae = i == null ? void 0 : i.deleteModal) == null ? void 0 : Ae.title) || "Confirm Delete",
        size: ((Ee = i == null ? void 0 : i.deleteModal) == null ? void 0 : Ee.size) || "md",
        loading: p,
        actionButtons: ((Le = i == null ? void 0 : i.deleteModal) == null ? void 0 : Le.actionButtons) || [],
        executeFunction: $,
        selectedItem: W,
        children: /* @__PURE__ */ n("div", { className: "flex items-center space-x-2 py-3", children: /* @__PURE__ */ f("div", { children: [
          /* @__PURE__ */ n("p", { className: "text-md text-gray-700 dark:text-white", children: ((Te = i == null ? void 0 : i.deleteModal) == null ? void 0 : Te.confirmText) || "Are you sure you want to delete this item?" }),
          ((Re = i == null ? void 0 : i.deleteModal) == null ? void 0 : Re.referenceKey) && /* @__PURE__ */ n("p", { className: "text-md font-semibold text-gray-700 dark:text-white", children: W == null ? void 0 : W[(Fe = i == null ? void 0 : i.deleteModal) == null ? void 0 : Fe.referenceKey] })
        ] }) })
      }
    ),
    (i == null ? void 0 : i.viewModal) && /* @__PURE__ */ n(
      Ue,
=======
    $ && /* @__PURE__ */ e(
      Ce,
      {
        isOpen: $,
        onClose: (h) => {
          W(h);
        },
        icon: ((le = t.deleteModal) == null ? void 0 : le.icon) || /* @__PURE__ */ e(oe, { icon: "ph:warning-bold", className: "w-6 h-6 text-red-500" }),
        title: ((me = t.deleteModal) == null ? void 0 : me.title) || "Confirm Delete",
        size: ((ye = t.deleteModal) == null ? void 0 : ye.size) || "md",
        loading: g,
        actionButtons: ((fe = t == null ? void 0 : t.deleteModal) == null ? void 0 : fe.actionButtons) || [],
        executeFunction: T,
        selectedItem: j,
        children: /* @__PURE__ */ e("div", { className: "flex items-center space-x-2 py-3", children: /* @__PURE__ */ b("div", { children: [
          /* @__PURE__ */ e("p", { className: "text-md text-gray-700 dark:text-white", children: ((xe = t.deleteModal) == null ? void 0 : xe.confirmText) || "Are you sure you want to delete this item?" }),
          ((ve = t.deleteModal) == null ? void 0 : ve.referenceKey) && /* @__PURE__ */ e("p", { className: "text-md font-semibold text-gray-700 dark:text-white", children: j[(ke = t.deleteModal) == null ? void 0 : ke.referenceKey] })
        ] }) })
      }
    ),
    t.viewModal && /* @__PURE__ */ e(
      Ce,
>>>>>>> main
      {
        isOpen: X,
        onClose: () => {
<<<<<<< HEAD
          ae(!1), R(null);
        },
        icon: (Ie = i == null ? void 0 : i.viewModal) == null ? void 0 : Ie.icon,
        title: ((Oe = i == null ? void 0 : i.viewModal) == null ? void 0 : Oe.title) || "View Details",
        size: ((je = i == null ? void 0 : i.viewModal) == null ? void 0 : je.size) || "lg",
        footerConfig: i == null ? void 0 : i.viewModal.footer,
        children: oe ? /* @__PURE__ */ n(oe, { data: W }) : /* @__PURE__ */ n(
          ea,
          {
            data: W,
            fetchRowDetails: t,
            config: (i == null ? void 0 : i.viewModal) || {}
=======
          Z(!1), _(null);
        },
        icon: (de = t.viewModal) == null ? void 0 : de.icon,
        title: ((se = t.viewModal) == null ? void 0 : se.title) || "View Details",
        size: ((r = t.viewModal) == null ? void 0 : r.size) || "lg",
        footerConfig: t == null ? void 0 : t.viewModal.footer,
        children: (w = t.viewModal) != null && w.component ? /* @__PURE__ */ e(t.viewModal.component, { data: j }) : /* @__PURE__ */ e(
          Nr,
          {
            data: j,
            fetchRowDetails: d,
            config: t.viewModal || {}
>>>>>>> main
          }
        )
      }
    )
  ] });
<<<<<<< HEAD
};
function ra({ children: a }) {
  return ar(), a;
}
function aa({
  children: a
}) {
  try {
    return /* @__PURE__ */ n(ra, { children: a });
  } catch {
    return /* @__PURE__ */ n(
      rr,
=======
}, Ae = n.shape({
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
}), Sr = n.shape({
  title: n.string.isRequired,
  type: n.string.isRequired,
  variant: n.string,
  icon: n.node
}), Cr = n.shape({
  key: n.string.isRequired,
  title: n.string,
  type: n.string,
  imageKey: n.string,
  titleKey: n.string,
  subtitleKey: n.string,
  onClickDetails: n.bool,
  variant: n.string,
  chipOptions: n.arrayOf(Ae),
  defaultColor: n.string,
  className: n.string,
  format: n.string,
  menuList: n.arrayOf(Sr)
}), Ie = n.shape({
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
  options: n.arrayOf(Ae)
}), Mr = n.shape({
  key: n.string,
  label: n.string,
  type: n.string,
  imageKey: n.string,
  titleKey: n.string,
  subtitleKey: n.string,
  blockClass: n.string,
  icon: n.node,
  variant: n.string,
  chipOptions: n.arrayOf(Ae),
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
      table_head: n.arrayOf(Cr).isRequired,
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
        formFields: n.arrayOf(Ie),
        handleSubmit: n.func.isRequired,
        actionButtons: n.arrayOf(Oe)
      }),
      editModal: n.shape({
        title: n.string.isRequired,
        size: n.string,
        formClass: n.string,
        formFields: n.arrayOf(Ie),
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
        fields: n.arrayOf(Mr),
        footer: n.shape({
          cancelButton: n.bool,
          cancelText: n.string
        })
      })
    }),
    /* ================= FILTER CONFIG ================= */
    filterConfig: n.shape({
      fields: n.arrayOf(Ie)
    })
  }).isRequired
};
function Lr({ children: o }) {
  return cr(), o;
}
function Rr({ children: o }) {
  try {
    return /* @__PURE__ */ e(Lr, { children: o });
  } catch {
    return /* @__PURE__ */ e(
      sr,
>>>>>>> main
      {
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right"
        },
<<<<<<< HEAD
        action: (e) => /* @__PURE__ */ n(
=======
        action: (a) => /* @__PURE__ */ e(
>>>>>>> main
          "button",
          {
            onClick: () => {
              window.dispatchEvent(
<<<<<<< HEAD
                new CustomEvent("closeSnackbar", { detail: e })
=======
                new CustomEvent("closeSnackbar", { detail: a })
>>>>>>> main
              );
            },
            className: "p-1 hover:bg-white/20 rounded-full transition-colors duration-200 text-white flex items-center justify-center",
            children: /* @__PURE__ */ n(Ze, { className: "h-4 w-4" })
          }
        ),
        maxSnack: 3,
        autoHideDuration: 3e3,
<<<<<<< HEAD
        children: a
=======
        children: o
>>>>>>> main
      }
    );
  }
}
<<<<<<< HEAD
const na = () => {
  if (typeof document > "u" || document.getElementById("react-admin-crud-manager-styles")) return;
  const a = document.createElement("style");
  a.id = "react-admin-crud-manager-styles", a.textContent = `
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
  `, document.head.appendChild(a);
};
function ba({ config: a }) {
  return U(() => {
    na();
  }, []), /* @__PURE__ */ n(aa, { children: /* @__PURE__ */ n(ta, { config: a }) });
}
export {
  ba as default
=======
const Or = () => {
  if (typeof document > "u" || document.getElementById("react-admin-crud-manager-styles")) return;
  const o = document.createElement("style");
  o.id = "react-admin-crud-manager-styles", o.textContent = pr, document.head.appendChild(o);
};
function Er(o) {
  return G(() => {
    Or();
  }, []), /* @__PURE__ */ e(Rr, { children: /* @__PURE__ */ e(Ze, { config: o.config }) });
}
export {
  Er as default
>>>>>>> main
};
//# sourceMappingURL=index.es.js.map
