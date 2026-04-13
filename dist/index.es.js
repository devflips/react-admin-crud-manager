import { jsx as c, Fragment as Ve, jsxs as L } from "react/jsx-runtime";
import * as or from "react";
import Xr, { useState as pe, useRef as kt, useEffect as et, useCallback as Lc, useMemo as Ar } from "react";
import { Info as Oc, ChevronDown as _o, Search as Wa, Check as Dc, X as pa, User as qa, ArrowUpDown as Bc, Plus as zc, EllipsisVertical as ao, Filter as jc, Download as Tc, ChevronLeft as Hc, ChevronRight as Fc, Music as Pc } from "lucide-react";
import Uc, { createPortal as Ja } from "react-dom";
import { Icon as Ht } from "@iconify/react";
import { Editor as Qc } from "@tinymce/tinymce-react";
import { useSnackbar as Tr, SnackbarProvider as Gc } from "notistack";
const Yc = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";.racm-root *,.racm-root :before,.racm-root :after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}.racm-root :before,.racm-root :after{--tw-content: ""}.racm-root{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}.racm-root{margin:0;line-height:inherit}.racm-root hr{height:0;color:inherit;border-top-width:1px}.racm-root abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}.racm-root h1,.racm-root h2,.racm-root h3,.racm-root h4,.racm-root h5,.racm-root h6{font-size:inherit;font-weight:inherit}.racm-root a{color:inherit;text-decoration:inherit}.racm-root b,.racm-root strong{font-weight:bolder}.racm-root code,.racm-root kbd,.racm-root samp,.racm-root pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}.racm-root small{font-size:80%}.racm-root sub,.racm-root sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}.racm-root sub{bottom:-.25em}.racm-root sup{top:-.5em}.racm-root table{text-indent:0;border-color:inherit;border-collapse:collapse}.racm-root button,.racm-root input,.racm-root optgroup,.racm-root select,.racm-root textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}.racm-root button,.racm-root select{text-transform:none}.racm-root button,.racm-root [type=button],.racm-root [type=reset],.racm-root [type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}.racm-root :-moz-focusring{outline:auto}.racm-root :-moz-ui-invalid{box-shadow:none}.racm-root progress{vertical-align:baseline}.racm-root ::-webkit-inner-spin-button,.racm-root ::-webkit-outer-spin-button{height:auto}.racm-root [type=search]{-webkit-appearance:textfield;outline-offset:-2px}.racm-root ::-webkit-search-decoration{-webkit-appearance:none}.racm-root ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.racm-root summary{display:list-item}.racm-root blockquote,.racm-root dl,.racm-root dd,.racm-root h1,.racm-root h2,.racm-root h3,.racm-root h4,.racm-root h5,.racm-root h6,.racm-root hr,.racm-root figure,.racm-root p,.racm-root pre{margin:0}.racm-root fieldset{margin:0;padding:0}.racm-root legend{padding:0}.racm-root ol,.racm-root ul,.racm-root menu{list-style:none;margin:0;padding:0}.racm-root dialog{padding:0}.racm-root textarea{resize:vertical}.racm-root input::-moz-placeholder,.racm-root textarea::-moz-placeholder{opacity:1;color:#9ca3af}.racm-root input::placeholder,.racm-root textarea::placeholder{opacity:1;color:#9ca3af}.racm-root button,.racm-root [role=button]{cursor:pointer}.racm-root :disabled{cursor:default}.racm-root img,.racm-root svg,.racm-root video,.racm-root canvas,.racm-root audio,.racm-root iframe,.racm-root embed,.racm-root object{display:block;vertical-align:middle}.racm-root img,.racm-root video{max-width:100%;height:auto}.racm-root [hidden]{display:none}.racm-root{--background: 0 0% 100%;--foreground: 0 0% 3.9%;--card: 0 0% 100%;--card-foreground: 0 0% 3.9%;--popover: 0 0% 100%;--popover-foreground: 0 0% 3.9%;--primary: 0 0% 9%;--primary-foreground: 0 0% 98%;--secondary: 0 0% 96.1%;--secondary-foreground: 0 0% 9%;--muted: 0 0% 96.1%;--muted-foreground: 0 0% 45.1%;--accent: 0 0% 96.1%;--accent-foreground: 0 0% 9%;--destructive: 0 84.2% 60.2%;--destructive-foreground: 0 0% 98%;--border: 0 0% 89.8%;--input: 0 0% 89.8%;--ring: 0 0% 3.9%;--chart-1: 12 76% 61%;--chart-2: 173 58% 39%;--chart-3: 197 37% 24%;--chart-4: 43 74% 66%;--chart-5: 27 87% 67%;--radius: .5rem}.racm-root *{border-color:hsl(var(--border, 0 0% 89.8%))}.racm-root{background-color:hsl(var(--background, 0 0% 100%));color:hsl(var(--foreground, 0 0% 3.9%))}.racm-root *,.racm-root :before,.racm-root :after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.racm-root ::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.racm-root .container{width:100%}@media (min-width: 640px){.racm-root .container{max-width:640px}}@media (min-width: 768px){.racm-root .container{max-width:768px}}@media (min-width: 1024px){.racm-root .container{max-width:1024px}}@media (min-width: 1280px){.racm-root .container{max-width:1280px}}@media (min-width: 1536px){.racm-root .container{max-width:1536px}}.racm-root .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.racm-root .pointer-events-none{pointer-events:none}.racm-root .pointer-events-auto{pointer-events:auto}.racm-root .fixed{position:fixed}.racm-root .absolute{position:absolute}.racm-root .relative{position:relative}.racm-root .inset-0{top:0;right:0;bottom:0;left:0}.racm-root .inset-y-0{top:0;bottom:0}.racm-root .-bottom-4{bottom:-1rem}.racm-root .-right-2{right:-.5rem}.racm-root .-right-6{right:-1.5rem}.racm-root .-top-2{top:-.5rem}.racm-root .-top-6{top:-1.5rem}.racm-root .left-1{left:.25rem}.racm-root .left-1\\/2{left:50%}.racm-root .left-3{left:.75rem}.racm-root .right-0{right:0}.racm-root .right-1{right:.25rem}.racm-root .right-1\\/2{right:50%}.racm-root .right-2{right:.5rem}.racm-root .right-3{right:.75rem}.racm-root .right-4{right:1rem}.racm-root .right-\\[50\\%\\]{right:50%}.racm-root .top-0{top:0}.racm-root .top-1{top:.25rem}.racm-root .top-1\\/2{top:50%}.racm-root .top-2{top:.5rem}.racm-root .top-4{top:1rem}.racm-root .top-\\[80\\%\\]{top:80%}.racm-root .top-full{top:100%}.racm-root .z-10{z-index:10}.racm-root .z-20{z-index:20}.racm-root .z-40{z-index:40}.racm-root .z-50{z-index:50}.racm-root .col-span-12{grid-column:span 12 / span 12}.racm-root .col-span-6{grid-column:span 6 / span 6}.racm-root .mb-0{margin-bottom:0}.racm-root .mb-1{margin-bottom:.25rem}.racm-root .mb-3{margin-bottom:.75rem}.racm-root .mb-6{margin-bottom:1.5rem}.racm-root .ml-1{margin-left:.25rem}.racm-root .ml-2{margin-left:.5rem}.racm-root .mr-2{margin-right:.5rem}.racm-root .mt-1{margin-top:.25rem}.racm-root .mt-2{margin-top:.5rem}.racm-root .mt-auto{margin-top:auto}.racm-root .inline{display:inline}.racm-root .flex{display:flex}.racm-root .inline-flex{display:inline-flex}.racm-root .table{display:table}.racm-root .table-row{display:table-row}.racm-root .grid{display:grid}.racm-root .hidden{display:none}.racm-root .h-1{height:.25rem}.racm-root .h-10{height:2.5rem}.racm-root .h-11{height:2.75rem}.racm-root .h-12{height:3rem}.racm-root .h-16{height:4rem}.racm-root .h-2{height:.5rem}.racm-root .h-20{height:5rem}.racm-root .h-28{height:7rem}.racm-root .h-3{height:.75rem}.racm-root .h-32{height:8rem}.racm-root .h-4{height:1rem}.racm-root .h-5{height:1.25rem}.racm-root .h-6{height:1.5rem}.racm-root .h-64{height:16rem}.racm-root .h-7{height:1.75rem}.racm-root .h-72{height:18rem}.racm-root .h-8{height:2rem}.racm-root .h-9{height:2.25rem}.racm-root .h-\\[10px\\]{height:10px}.racm-root .h-\\[150px\\]{height:150px}.racm-root .h-\\[36px\\]{height:36px}.racm-root .h-\\[40px\\]{height:40px}.racm-root .h-full{height:100%}.racm-root .max-h-40{max-height:10rem}.racm-root .max-h-60{max-height:15rem}.racm-root .max-h-\\[250px\\]{max-height:250px}.racm-root .max-h-\\[260px\\]{max-height:260px}.racm-root .max-h-\\[90vh\\]{max-height:90vh}.racm-root .min-h-\\[52px\\]{min-height:52px}.racm-root .w-1{width:.25rem}.racm-root .w-10{width:2.5rem}.racm-root .w-11{width:2.75rem}.racm-root .w-12{width:3rem}.racm-root .w-16{width:4rem}.racm-root .w-2{width:.5rem}.racm-root .w-20{width:5rem}.racm-root .w-24{width:6rem}.racm-root .w-3{width:.75rem}.racm-root .w-32{width:8rem}.racm-root .w-4{width:1rem}.racm-root .w-48{width:12rem}.racm-root .w-5{width:1.25rem}.racm-root .w-6{width:1.5rem}.racm-root .w-64{width:16rem}.racm-root .w-7{width:1.75rem}.racm-root .w-8{width:2rem}.racm-root .w-80{width:20rem}.racm-root .w-\\[260px\\]{width:260px}.racm-root .w-\\[28rem\\]{width:28rem}.racm-root .w-\\[36px\\]{width:36px}.racm-root .w-\\[42\\%\\]{width:42%}.racm-root .w-full{width:100%}.racm-root .w-max{width:-moz-max-content;width:max-content}.racm-root .min-w-0{min-width:0px}.racm-root .min-w-\\[100px\\]{min-width:100px}.racm-root .min-w-\\[150px\\]{min-width:150px}.racm-root .min-w-\\[220px\\]{min-width:220px}.racm-root .min-w-\\[40px\\]{min-width:40px}.racm-root .min-w-\\[78px\\]{min-width:78px}.racm-root .max-w-2xl{max-width:42rem}.racm-root .max-w-4xl{max-width:56rem}.racm-root .max-w-5xl{max-width:64rem}.racm-root .max-w-\\[200px\\]{max-width:200px}.racm-root .max-w-\\[280px\\]{max-width:280px}.racm-root .max-w-\\[300px\\]{max-width:300px}.racm-root .max-w-full{max-width:100%}.racm-root .max-w-lg{max-width:32rem}.racm-root .max-w-md{max-width:28rem}.racm-root .max-w-xs{max-width:20rem}.racm-root .flex-1{flex:1 1 0%}.racm-root .flex-shrink{flex-shrink:1}.racm-root .flex-shrink-0,.racm-root .shrink-0{flex-shrink:0}.racm-root .border-collapse{border-collapse:collapse}.racm-root .-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .translate-x-0{--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .translate-x-full{--tw-translate-x: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .scale-95{--tw-scale-x: .95;--tw-scale-y: .95;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.racm-root .animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes spin{to{transform:rotate(360deg)}}.racm-root .animate-spin{animation:spin 1s linear infinite}.racm-root .cursor-not-allowed{cursor:not-allowed}.racm-root .cursor-pointer{cursor:pointer}.racm-root .select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.racm-root .resize{resize:both}.racm-root .grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.racm-root .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.racm-root .grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.racm-root .flex-col{flex-direction:column}.racm-root .items-center{align-items:center}.racm-root .items-stretch{align-items:stretch}.racm-root .justify-end{justify-content:flex-end}.racm-root .justify-center{justify-content:center}.racm-root .justify-between{justify-content:space-between}.racm-root .gap-1{gap:.25rem}.racm-root .gap-1\\.5{gap:.375rem}.racm-root .gap-2{gap:.5rem}.racm-root .gap-2\\.5{gap:.625rem}.racm-root .gap-3{gap:.75rem}.racm-root .gap-4{gap:1rem}.racm-root .gap-6{gap:1.5rem}.racm-root .-space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(-.5rem * var(--tw-space-x-reverse));margin-left:calc(-.5rem * calc(1 - var(--tw-space-x-reverse)))}.racm-root .space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.racm-root .space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.racm-root .space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.25rem * var(--tw-space-y-reverse))}.racm-root .space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.racm-root .space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.racm-root .divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse))}.racm-root .divide-gray-100>:not([hidden])~:not([hidden]){--tw-divide-opacity: 1;border-color:rgb(243 244 246 / var(--tw-divide-opacity))}.racm-root .overflow-auto{overflow:auto}.racm-root .overflow-hidden{overflow:hidden}.racm-root .overflow-x-auto{overflow-x:auto}.racm-root .overflow-y-auto{overflow-y:auto}.racm-root .truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.racm-root .text-ellipsis{text-overflow:ellipsis}.racm-root .whitespace-nowrap{white-space:nowrap}.racm-root .break-words{overflow-wrap:break-word}.racm-root .rounded{border-radius:.25rem}.racm-root .rounded-full{border-radius:9999px}.racm-root .rounded-lg{border-radius:var(--radius)}.racm-root .rounded-md{border-radius:calc(var(--radius) - 2px)}.racm-root .rounded-sm{border-radius:calc(var(--radius) - 4px)}.racm-root .rounded-xl{border-radius:.75rem}.racm-root .border{border-width:1px}.racm-root .border-2{border-width:2px}.racm-root .border-4{border-width:4px}.racm-root .border-8{border-width:8px}.racm-root .border-b{border-bottom-width:1px}.racm-root .border-l{border-left-width:1px}.racm-root .border-r{border-right-width:1px}.racm-root .border-t{border-top-width:1px}.racm-root .border-t-2{border-top-width:2px}.racm-root .border-dashed{border-style:dashed}.racm-root .border-blue-300{--tw-border-opacity: 1;border-color:rgb(147 197 253 / var(--tw-border-opacity))}.racm-root .border-blue-500{--tw-border-opacity: 1;border-color:rgb(59 130 246 / var(--tw-border-opacity))}.racm-root .border-gray-100{--tw-border-opacity: 1;border-color:rgb(243 244 246 / var(--tw-border-opacity))}.racm-root .border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.racm-root .border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity))}.racm-root .border-green-300{--tw-border-opacity: 1;border-color:rgb(134 239 172 / var(--tw-border-opacity))}.racm-root .border-green-600{--tw-border-opacity: 1;border-color:rgb(22 163 74 / var(--tw-border-opacity))}.racm-root .border-primary,.racm-root .border-primary-500{border-color:var(--primary-500, #3b82f6)}.racm-root .border-purple-300{--tw-border-opacity: 1;border-color:rgb(216 180 254 / var(--tw-border-opacity))}.racm-root .border-red-300{--tw-border-opacity: 1;border-color:rgb(252 165 165 / var(--tw-border-opacity))}.racm-root .border-red-500{--tw-border-opacity: 1;border-color:rgb(239 68 68 / var(--tw-border-opacity))}.racm-root .border-red-600{--tw-border-opacity: 1;border-color:rgb(220 38 38 / var(--tw-border-opacity))}.racm-root .border-teal-300{--tw-border-opacity: 1;border-color:rgb(94 234 212 / var(--tw-border-opacity))}.racm-root .border-white{--tw-border-opacity: 1;border-color:rgb(255 255 255 / var(--tw-border-opacity))}.racm-root .border-white\\/30{border-color:#ffffff4d}.racm-root .border-yellow-300{--tw-border-opacity: 1;border-color:rgb(253 224 71 / var(--tw-border-opacity))}.racm-root .border-t-gray-200{--tw-border-opacity: 1;border-top-color:rgb(229 231 235 / var(--tw-border-opacity))}.racm-root .border-t-white{--tw-border-opacity: 1;border-top-color:rgb(255 255 255 / var(--tw-border-opacity))}.racm-root .\\!bg-transparent{background-color:transparent!important}.racm-root .bg-black\\/50{background-color:#00000080}.racm-root .bg-black\\/70{background-color:#000000b3}.racm-root .bg-blue-100{--tw-bg-opacity: 1;background-color:rgb(219 234 254 / var(--tw-bg-opacity))}.racm-root .bg-blue-50{--tw-bg-opacity: 1;background-color:rgb(239 246 255 / var(--tw-bg-opacity))}.racm-root .bg-blue-500\\/10{background-color:#3b82f61a}.racm-root .bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.racm-root .bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.racm-root .bg-gray-300{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity))}.racm-root .bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.racm-root .bg-gray-500{--tw-bg-opacity: 1;background-color:rgb(107 114 128 / var(--tw-bg-opacity))}.racm-root .bg-gray-900{--tw-bg-opacity: 1;background-color:rgb(17 24 39 / var(--tw-bg-opacity))}.racm-root .bg-green-100{--tw-bg-opacity: 1;background-color:rgb(220 252 231 / var(--tw-bg-opacity))}.racm-root .bg-green-600{--tw-bg-opacity: 1;background-color:rgb(22 163 74 / var(--tw-bg-opacity))}.racm-root .bg-primary{background-color:var(--primary-500, #3b82f6)}.racm-root .bg-purple-100{--tw-bg-opacity: 1;background-color:rgb(243 232 255 / var(--tw-bg-opacity))}.racm-root .bg-red-100{--tw-bg-opacity: 1;background-color:rgb(254 226 226 / var(--tw-bg-opacity))}.racm-root .bg-red-500{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.racm-root .bg-red-500\\/95{background-color:#ef4444f2}.racm-root .bg-red-600{--tw-bg-opacity: 1;background-color:rgb(220 38 38 / var(--tw-bg-opacity))}.racm-root .bg-teal-100{--tw-bg-opacity: 1;background-color:rgb(204 251 241 / var(--tw-bg-opacity))}.racm-root .bg-transparent{background-color:transparent}.racm-root .bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.racm-root .bg-white\\/90{background-color:#ffffffe6}.racm-root .bg-yellow-100{--tw-bg-opacity: 1;background-color:rgb(254 249 195 / var(--tw-bg-opacity))}.racm-root .bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}.racm-root .to-transparent{--tw-gradient-to: transparent var(--tw-gradient-to-position)}.racm-root .object-contain{-o-object-fit:contain;object-fit:contain}.racm-root .object-cover{-o-object-fit:cover;object-fit:cover}.racm-root .p-1{padding:.25rem}.racm-root .p-2{padding:.5rem}.racm-root .p-4{padding:1rem}.racm-root .p-5{padding:1.25rem}.racm-root .px-2{padding-left:.5rem;padding-right:.5rem}.racm-root .px-3{padding-left:.75rem;padding-right:.75rem}.racm-root .px-4{padding-left:1rem;padding-right:1rem}.racm-root .px-5{padding-left:1.25rem;padding-right:1.25rem}.racm-root .px-6{padding-left:1.5rem;padding-right:1.5rem}.racm-root .px-8{padding-left:2rem;padding-right:2rem}.racm-root .py-1{padding-top:.25rem;padding-bottom:.25rem}.racm-root .py-2{padding-top:.5rem;padding-bottom:.5rem}.racm-root .py-3{padding-top:.75rem;padding-bottom:.75rem}.racm-root .py-4{padding-top:1rem;padding-bottom:1rem}.racm-root .py-6{padding-top:1.5rem;padding-bottom:1.5rem}.racm-root .pl-9{padding-left:2.25rem}.racm-root .pr-10{padding-right:2.5rem}.racm-root .pr-2{padding-right:.5rem}.racm-root .pr-3{padding-right:.75rem}.racm-root .text-left{text-align:left}.racm-root .text-center{text-align:center}.racm-root .text-base{font-size:1rem;line-height:1.5rem}.racm-root .text-lg{font-size:1.125rem;line-height:1.75rem}.racm-root .text-sm{font-size:.875rem;line-height:1.25rem}.racm-root .text-xl{font-size:1.25rem;line-height:1.75rem}.racm-root .text-xs{font-size:.75rem;line-height:1rem}.racm-root .font-bold{font-weight:700}.racm-root .font-medium{font-weight:500}.racm-root .font-semibold{font-weight:600}.racm-root .uppercase{text-transform:uppercase}.racm-root .italic{font-style:italic}.racm-root .leading-none{line-height:1}.racm-root .leading-snug{line-height:1.375}.racm-root .leading-tight{line-height:1.25}.racm-root .tracking-wide{letter-spacing:.025em}.racm-root .tracking-wider{letter-spacing:.05em}.racm-root .text-black{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.racm-root .text-blue-600{--tw-text-opacity: 1;color:rgb(37 99 235 / var(--tw-text-opacity))}.racm-root .text-blue-700{--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity))}.racm-root .text-blue-800{--tw-text-opacity: 1;color:rgb(30 64 175 / var(--tw-text-opacity))}.racm-root .text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.racm-root .text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.racm-root .text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.racm-root .text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.racm-root .text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity))}.racm-root .text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.racm-root .text-green-600{--tw-text-opacity: 1;color:rgb(22 163 74 / var(--tw-text-opacity))}.racm-root .text-green-700{--tw-text-opacity: 1;color:rgb(21 128 61 / var(--tw-text-opacity))}.racm-root .text-green-800{--tw-text-opacity: 1;color:rgb(22 101 52 / var(--tw-text-opacity))}.racm-root .text-primary{color:var(--primary-500, #3b82f6)}.racm-root .text-purple-700{--tw-text-opacity: 1;color:rgb(126 34 206 / var(--tw-text-opacity))}.racm-root .text-purple-800{--tw-text-opacity: 1;color:rgb(107 33 168 / var(--tw-text-opacity))}.racm-root .text-red-500{--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity))}.racm-root .text-red-600{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity))}.racm-root .text-red-700{--tw-text-opacity: 1;color:rgb(185 28 28 / var(--tw-text-opacity))}.racm-root .text-red-800{--tw-text-opacity: 1;color:rgb(153 27 27 / var(--tw-text-opacity))}.racm-root .text-teal-700{--tw-text-opacity: 1;color:rgb(15 118 110 / var(--tw-text-opacity))}.racm-root .text-teal-800{--tw-text-opacity: 1;color:rgb(17 94 89 / var(--tw-text-opacity))}.racm-root .text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.racm-root .text-yellow-700{--tw-text-opacity: 1;color:rgb(161 98 7 / var(--tw-text-opacity))}.racm-root .text-yellow-800{--tw-text-opacity: 1;color:rgb(133 77 14 / var(--tw-text-opacity))}.racm-root .underline{text-decoration-line:underline}.racm-root .placeholder-gray-400::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.racm-root .placeholder-gray-400::placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.racm-root .placeholder-gray-500::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(107 114 128 / var(--tw-placeholder-opacity))}.racm-root .placeholder-gray-500::placeholder{--tw-placeholder-opacity: 1;color:rgb(107 114 128 / var(--tw-placeholder-opacity))}.racm-root .opacity-100{opacity:1}.racm-root .opacity-50{opacity:.5}.racm-root .opacity-60{opacity:.6}.racm-root .opacity-70{opacity:.7}.racm-root .opacity-75{opacity:.75}.racm-root .opacity-90{opacity:.9}.racm-root .shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root .shadow-2xl{--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / .25);--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root .shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root .shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root .shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root .shadow-xl{--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root .outline-none{outline:2px solid transparent;outline-offset:2px}.racm-root .outline{outline-style:solid}.racm-root .ring-0{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.racm-root .ring-blue-100{--tw-ring-opacity: 1;--tw-ring-color: rgb(219 234 254 / var(--tw-ring-opacity))}.racm-root .filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.racm-root .backdrop-blur-sm{--tw-backdrop-blur: blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.racm-root .transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.racm-root .transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.racm-root .transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.racm-root .transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.racm-root .transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.racm-root .duration-200{transition-duration:.2s}.racm-root .duration-300{transition-duration:.3s}.racm-root .ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.racm-root .primary-bg{background-color:var(--primary-500)}.racm-root .primary-bg-light{background-color:var(--primary-100)}.racm-root .primary-bg-dark{background-color:var(--primary-700)}.racm-root .primary-text{color:var(--primary-600)}.racm-root .primary-border{border-color:var(--primary-300)}.racm-root .primary-hover:hover{background-color:var(--primary-600)}.racm-root .opacity-0{opacity:0}.racm-root{--foreground-rgb: 0, 0, 0;--background-start-rgb: 214, 219, 220;--background-end-rgb: 255, 255, 255}@media (prefers-color-scheme: dark){.racm-root{--foreground-rgb: 255, 255, 255;--background-start-rgb: 0, 0, 0;--background-end-rgb: 0, 0, 0}}.racm-root{height:100%}.racm-root{--scrollbar-thumb: #d1d5db;--scrollbar-thumb-hover: #9ca3af}.racm-root .dark{--scrollbar-thumb: #4b5563;--scrollbar-thumb-hover: #6b7280}.racm-root *{scrollbar-width:thin;scrollbar-color:var(--scrollbar-thumb) transparent}.racm-root *::-webkit-scrollbar{width:6px;height:6px}.racm-root *::-webkit-scrollbar-track{background:transparent}.racm-root *::-webkit-scrollbar-thumb{background-color:var(--scrollbar-thumb);border-radius:3px}.racm-root *::-webkit-scrollbar-thumb:hover{background-color:var(--scrollbar-thumb-hover)}.racm-root h1{font-size:1.5rem;line-height:2rem;font-weight:700;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.racm-root :is(.dark h1){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.racm-root p{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.racm-root :is(.dark p){--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.racm-root .table-search-field{position:relative;width:100%}@media (min-width: 640px){.racm-root .table-search-field{min-width:300px!important}}.racm-root .table-search-field .search-icon{position:absolute;left:.75rem;top:50%;height:1rem;width:1rem;--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.racm-root :is(.dark .table-search-field .search-icon){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.racm-root .table-search-field input{height:36px;width:100%;border-radius:calc(var(--radius) - 2px);border-width:1px;--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity));padding:.75rem 1rem .75rem 2.25rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.racm-root .table-search-field input::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(107 114 128 / var(--tw-placeholder-opacity))}.racm-root .table-search-field input::placeholder{--tw-placeholder-opacity: 1;color:rgb(107 114 128 / var(--tw-placeholder-opacity))}.racm-root .table-search-field input:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-opacity: 1;--tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity))}.racm-root .table-search-field input:disabled{opacity:.5}.racm-root :is(.dark .table-search-field input){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.racm-root :is(.dark .table-search-field input)::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.racm-root :is(.dark .table-search-field input)::placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.racm-root :is(.dark .table-search-field input){--tw-ring-opacity: 1;--tw-ring-color: rgb(191 219 254 / var(--tw-ring-opacity))}.racm-root .filter-button-wrapper{position:relative;width:100%}@media (min-width: 640px){.racm-root .filter-button-wrapper{width:auto!important}}.racm-root .filter-button-wrapper .red-dot{position:absolute;top:.25rem;right:.25rem;height:.5rem;width:.5rem;border-radius:9999px;--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.racm-root .table-container{overflow:hidden;border-radius:var(--radius);border-width:1px;--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root :is(.dark .table-container){--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.racm-root .table-container table{min-width:100%}.racm-root .table-container table>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse));--tw-divide-opacity: 1;border-color:rgb(229 231 235 / var(--tw-divide-opacity))}.racm-root :is(.dark .table-container table)>:not([hidden])~:not([hidden]){--tw-divide-opacity: 1;border-color:rgb(55 65 81 / var(--tw-divide-opacity))}.racm-root .table-container thead{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.racm-root :is(.dark .table-container thead){background-color:#37415199}.racm-root .table-container tbody>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse));--tw-divide-opacity: 1;border-color:rgb(229 231 235 / var(--tw-divide-opacity))}.racm-root .table-container tbody{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.racm-root :is(.dark .table-container tbody)>:not([hidden])~:not([hidden]){--tw-divide-opacity: 1;border-color:rgb(55 65 81 / var(--tw-divide-opacity))}.racm-root :is(.dark .table-container tbody){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.racm-root .table-container .table-head-data{min-width:-moz-max-content;min-width:max-content;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:1rem 1.5rem;text-align:left;font-size:.75rem;line-height:1rem;font-weight:500;text-transform:uppercase;letter-spacing:.05em;--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.racm-root :is(.dark .table-container .table-head-data){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.racm-root .table-container .no-data-message{padding-top:2.5rem;padding-bottom:2.5rem;text-align:center;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.racm-root :is(.dark .table-container .no-data-message){--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.racm-root .table-container .table-row{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.racm-root .table-container .table-row:hover{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.racm-root :is(.dark .table-container .table-row:hover){background-color:#1e40af1a}.racm-root .table-container .table-data{min-width:-moz-max-content;min-width:max-content;padding:1rem 1.5rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.racm-root :is(.dark .table-container .table-data){--tw-text-opacity: 1;color:rgb(243 244 246 / var(--tw-text-opacity))}.racm-root .table-container .pagination-wrapper{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:.75rem;border-top-width:1px;--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity));padding:.75rem 1.5rem}.racm-root :is(.dark .table-container .pagination-wrapper){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity));background-color:#37415199}.racm-root .table-container .pagination-wrapper span{font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.racm-root :is(.dark .table-container .pagination-wrapper span){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.racm-root .table-container .pagination-wrapper .rows-number-select{border-radius:calc(var(--radius) - 2px);border-width:1px;--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:.25rem .5rem;font-size:.875rem;line-height:1.25rem}.racm-root .table-container .pagination-wrapper .rows-number-select:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-opacity: 1;--tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity))}.racm-root :is(.dark .table-container .pagination-wrapper .rows-number-select){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.racm-root .table-container .pagination-wrapper .arrow-icons{border-radius:calc(var(--radius) - 2px);padding:.5rem;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity));transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.racm-root .table-container .pagination-wrapper .arrow-icons:hover{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.racm-root .table-container .pagination-wrapper .arrow-icons:disabled{opacity:.5}.racm-root :is(.dark .table-container .pagination-wrapper .arrow-icons){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.racm-root :is(.dark .table-container .pagination-wrapper .arrow-icons:hover){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity))}.racm-root .no-spinner::-webkit-outer-spin-button,.racm-root .no-spinner::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.racm-root .no-spinner{-moz-appearance:textfield}.racm-root .tox.tox-tinymce .tox-edit-area:before{border:0!important;box-shadow:none!important}.racm-root .hover\\:-translate-y-0:hover{--tw-translate-y: -0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .hover\\:-translate-y-0\\.5:hover{--tw-translate-y: -.125rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .hover\\:bg-blue-50:hover{--tw-bg-opacity: 1;background-color:rgb(239 246 255 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-gray-100:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-gray-200:hover{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-gray-300:hover{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-green-50:hover{--tw-bg-opacity: 1;background-color:rgb(240 253 244 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-green-700:hover{--tw-bg-opacity: 1;background-color:rgb(21 128 61 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-primary-50:hover{background-color:var(--primary-50, #eff6ff)}.racm-root .hover\\:bg-primary-600:hover{background-color:var(--primary-600, #2563eb)}.racm-root .hover\\:bg-red-50:hover{--tw-bg-opacity: 1;background-color:rgb(254 242 242 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-red-600:hover{--tw-bg-opacity: 1;background-color:rgb(220 38 38 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-red-700:hover{--tw-bg-opacity: 1;background-color:rgb(185 28 28 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-white:hover{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-white\\/20:hover{background-color:#fff3}.racm-root .hover\\:text-gray-600:hover{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.racm-root .hover\\:shadow-md:hover{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root .focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.racm-root .focus\\:ring-1:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.racm-root .focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.racm-root .focus\\:ring-blue-200:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(191 219 254 / var(--tw-ring-opacity))}.racm-root .focus\\:ring-blue-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity))}.racm-root .focus\\:ring-blue-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity))}.racm-root .focus\\:ring-gray-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity))}.racm-root .focus\\:ring-green-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(34 197 94 / var(--tw-ring-opacity))}.racm-root .focus\\:ring-primary-500:focus{--tw-ring-color: var(--primary-500, #3b82f6)}.racm-root .focus\\:ring-red-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(239 68 68 / var(--tw-ring-opacity))}.racm-root .focus\\:ring-offset-2:focus{--tw-ring-offset-width: 2px}.racm-root .focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.racm-root .focus-visible\\:ring-2:focus-visible{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.racm-root .focus-visible\\:ring-blue-400:focus-visible{--tw-ring-opacity: 1;--tw-ring-color: rgb(96 165 250 / var(--tw-ring-opacity))}.racm-root .focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width: 2px}.racm-root .disabled\\:pointer-events-none:disabled{pointer-events:none}.racm-root .disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.racm-root .disabled\\:opacity-50:disabled{opacity:.5}.racm-root .group:hover .group-hover\\:opacity-100{opacity:1}.racm-root .peer:checked~.peer-checked\\:translate-x-5{--tw-translate-x: 1.25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .peer:checked~.peer-checked\\:bg-primary-600{background-color:var(--primary-600, #2563eb)}.racm-root .peer:focus~.peer-focus\\:outline-none{outline:2px solid transparent;outline-offset:2px}.racm-root .peer:disabled~.peer-disabled\\:cursor-not-allowed{cursor:not-allowed}.racm-root .peer:disabled~.peer-disabled\\:opacity-50{opacity:.5}.racm-root :is(.dark .dark\\:divide-gray-800)>:not([hidden])~:not([hidden]){--tw-divide-opacity: 1;border-color:rgb(31 41 55 / var(--tw-divide-opacity))}.racm-root :is(.dark .dark\\:border-blue-700){--tw-border-opacity: 1;border-color:rgb(29 78 216 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-gray-600){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-gray-700){--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-gray-700\\/60){border-color:#37415199}.racm-root :is(.dark .dark\\:border-gray-800){--tw-border-opacity: 1;border-color:rgb(31 41 55 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-green-700){--tw-border-opacity: 1;border-color:rgb(21 128 61 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-purple-700){--tw-border-opacity: 1;border-color:rgb(126 34 206 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-red-700){--tw-border-opacity: 1;border-color:rgb(185 28 28 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-teal-700){--tw-border-opacity: 1;border-color:rgb(15 118 110 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-yellow-700){--tw-border-opacity: 1;border-color:rgb(161 98 7 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:bg-black){--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:bg-black\\/80){background-color:#000c}.racm-root :is(.dark .dark\\:bg-blue-900\\/20){background-color:#1e3a8a33}.racm-root :is(.dark .dark\\:bg-blue-900\\/30){background-color:#1e3a8a4d}.racm-root :is(.dark .dark\\:bg-gray-600){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:bg-gray-700){--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:bg-gray-800){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:bg-gray-800\\/80){background-color:#1f2937cc}.racm-root :is(.dark .dark\\:bg-gray-900){--tw-bg-opacity: 1;background-color:rgb(17 24 39 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:bg-gray-900\\/30){background-color:#1118274d}.racm-root :is(.dark .dark\\:bg-green-900\\/30){background-color:#14532d4d}.racm-root :is(.dark .dark\\:bg-purple-900\\/30){background-color:#581c874d}.racm-root :is(.dark .dark\\:bg-red-900\\/30){background-color:#7f1d1d4d}.racm-root :is(.dark .dark\\:bg-teal-900\\/30){background-color:#134e4a4d}.racm-root :is(.dark .dark\\:bg-yellow-900\\/30){background-color:#713f124d}.racm-root :is(.dark .dark\\:text-blue-300){--tw-text-opacity: 1;color:rgb(147 197 253 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-blue-400){--tw-text-opacity: 1;color:rgb(96 165 250 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-gray-100){--tw-text-opacity: 1;color:rgb(243 244 246 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-gray-200){--tw-text-opacity: 1;color:rgb(229 231 235 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-gray-300){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-gray-400){--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-gray-500){--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-green-300){--tw-text-opacity: 1;color:rgb(134 239 172 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-purple-300){--tw-text-opacity: 1;color:rgb(216 180 254 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-red-300){--tw-text-opacity: 1;color:rgb(252 165 165 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-red-500){--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-teal-300){--tw-text-opacity: 1;color:rgb(94 234 212 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-white){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-yellow-300){--tw-text-opacity: 1;color:rgb(253 224 71 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:placeholder-gray-400)::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.racm-root :is(.dark .dark\\:placeholder-gray-400)::placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.racm-root :is(.dark .dark\\:hover\\:bg-gray-600:hover){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:hover\\:bg-gray-700:hover){--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:hover\\:bg-gray-800:hover){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:hover\\:text-gray-200:hover){--tw-text-opacity: 1;color:rgb(229 231 235 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:hover\\:text-gray-300:hover){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:focus\\:ring-blue-200:focus){--tw-ring-opacity: 1;--tw-ring-color: rgb(191 219 254 / var(--tw-ring-opacity))}.racm-root :is(.dark .dark\\:focus\\:ring-blue-400:focus){--tw-ring-opacity: 1;--tw-ring-color: rgb(96 165 250 / var(--tw-ring-opacity))}.racm-root :is(.dark .dark\\:focus\\:ring-gray-500:focus){--tw-ring-opacity: 1;--tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity))}.racm-root :is(.dark .dark\\:focus\\:ring-gray-600:focus){--tw-ring-opacity: 1;--tw-ring-color: rgb(75 85 99 / var(--tw-ring-opacity))}.racm-root :is(.dark .dark\\:focus\\:ring-offset-gray-800:focus){--tw-ring-offset-color: #1f2937}@media (min-width: 640px){.racm-root .sm\\:\\!w-auto{width:auto!important}.racm-root .sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.racm-root .sm\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.racm-root .sm\\:\\!flex-row{flex-direction:row!important}.racm-root .sm\\:\\!flex-wrap{flex-wrap:wrap!important}.racm-root .sm\\:\\!items-center{align-items:center!important}.racm-root .sm\\:\\!px-6{padding-left:1.5rem!important;padding-right:1.5rem!important}.racm-root .sm\\:opacity-0{opacity:0}.racm-root .group:hover .sm\\:group-hover\\:opacity-100{opacity:1}}@media (min-width: 1024px){.racm-root .lg\\:\\!w-auto{width:auto!important}.racm-root .lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.racm-root .lg\\:\\!flex-row{flex-direction:row!important}.racm-root .lg\\:\\!items-end{align-items:flex-end!important}.racm-root .lg\\:\\!justify-between{justify-content:space-between!important}}.racm-root .\\[\\&\\>svg\\]\\:h-3\\.5>svg{height:.875rem}.racm-root .\\[\\&\\>svg\\]\\:h-4>svg{height:1rem}.racm-root .\\[\\&\\>svg\\]\\:w-3\\.5>svg{width:.875rem}.racm-root .\\[\\&\\>svg\\]\\:w-4>svg{width:1rem}', Ta = (m, d = "DD MMM YYYY") => {
  if (!m) return "N/A";
  const n = new Date(m);
  if (isNaN(n.getTime())) return "Invalid Date";
  const l = (e) => String(e).padStart(2, "0"), i = {
    YYYY: n.getFullYear(),
    YY: String(n.getFullYear()).slice(-2),
    MMMM: n.toLocaleString("en-US", { month: "long" }),
    MMM: n.toLocaleString("en-US", { month: "short" }),
    MM: l(n.getMonth() + 1),
    M: n.getMonth() + 1,
    DD: l(n.getDate()),
    D: n.getDate(),
    dddd: n.toLocaleString("en-US", { weekday: "long" }),
    ddd: n.toLocaleString("en-US", { weekday: "short" }),
    HH: l(n.getHours()),
    hh: l(n.getHours() % 12 || 12),
    mm: l(n.getMinutes()),
    ss: l(n.getSeconds()),
    A: n.getHours() >= 12 ? "PM" : "AM"
  };
  return d.replace(
    /YYYY|YY|MMMM|MMM|MM|M|DD|D|dddd|ddd|HH|hh|mm|ss|A/g,
    (e) => String(i[e])
  );
}, Kc = (m, d, n = []) => {
  if (!(d != null && d.trim())) return m;
  const l = d.toLowerCase(), i = (e) => e == null ? [] : typeof e == "object" ? Object.values(e).flatMap(i) : [String(e)];
  return m.filter((e) => {
    let b = [];
    return n.length > 0 ? n.forEach((o) => {
      e[o] !== void 0 && b.push(...i(e[o]));
    }) : b = i(e), b.some(
      (o) => o.toLowerCase().includes(l)
    );
  });
}, te = (...m) => m.filter(Boolean).join(" "), J = {
  crudPage: {
    root: "crud_page",
    deleteContent: "crud_page_delete_content"
  },
  button: {
    root: "crud_button"
  },
  chip: {
    root: "crud_chip"
  },
  modal: {
    root: "crud_modal",
    overlay: "crud_modal_overlay",
    container: "crud_modal_container",
    header: "crud_modal_header",
    title: "crud_modal_title",
    closeButton: "crud_modal_close_button",
    body: "crud_modal_body",
    footer: "crud_modal_footer",
    actionButton: "crud_modal_action_button",
    loadingIndicator: "crud_modal_loading_indicator"
  },
  table: {
    root: "crud_table",
    toolbar: "crud_table_toolbar",
    searchField: "crud_table_search_field",
    searchInput: "crud_table_search_input",
    container: "crud_table_container",
    element: "crud_table_element",
    head: "crud_table_head",
    headRow: "crud_table_head_row",
    headCell: "crud_table_head_cell",
    body: "crud_table_body",
    row: "crud_table_row",
    cell: "crud_table_cell",
    noData: "crud_table_no_data",
    actionButton: "crud_table_action_button",
    menu: "crud_table_menu",
    menuItem: "crud_table_menu_item",
    pagination: "crud_table_pagination"
  },
  tableSkeleton: {
    root: "crud_table_skeleton",
    table: "crud_table_skeleton_table"
  },
  sortDropdown: {
    root: "crud_sort_dropdown",
    trigger: "crud_sort_dropdown_trigger",
    menu: "crud_sort_dropdown_menu",
    item: "crud_sort_dropdown_item"
  },
  imagePreview: {
    root: "crud_image_preview",
    container: "crud_image_preview_container",
    image: "crud_image_preview_image"
  },
  filterDrawer: {
    overlay: "crud_filter_overlay",
    panel: "crud_filter_panel",
    header: "crud_filter_header",
    body: "crud_filter_body",
    footer: "crud_filter_footer"
  },
  form: {
    root: "crud_form",
    loading: "crud_form_loading"
  },
  field: {
    wrapper: "crud_field_wrapper",
    label: "crud_field_label",
    input: "crud_field_input",
    error: "crud_field_error"
  },
  mediaPicker: {
    image: "crud_media_image_picker",
    multiImage: "crud_media_multi_image_picker",
    audio: "crud_media_audio_picker",
    video: "crud_media_video_picker",
    dropzone: "crud_media_dropzone",
    cropModal: "crud_media_crop_modal"
  },
  details: {
    root: "crud_details",
    container: "crud_details_container",
    row: "crud_details_row"
  }
}, Tt = Xr.forwardRef(
  ({
    className: m = "",
    variant: d = "contained",
    color: n = "default",
    size: l = "default",
    fullWidth: i = !1,
    children: e,
    ...b
  }, o) => {
    var W;
    const R = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", S = {
      sm: "h-8 px-3 rounded-md text-sm",
      md: "h-9 px-4 rounded-md text-sm",
      lg: "h-11 px-6 rounded-md text-base",
      xl: "h-12 px-8 rounded-lg text-lg",
      default: "h-9 px-4 rounded-md text-sm"
    }, M = {
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
    }, D = ((W = M[n]) == null ? void 0 : W[d]) || M.default.contained, E = S[l] || S.default, z = te(
      J.button.root,
      R,
      D,
      E,
      i ? "w-full" : "",
      m
    );
    return /* @__PURE__ */ c(
      "button",
      {
        ref: o,
        type: b.type || "button",
        className: z,
        ...b,
        children: e
      }
    );
  }
);
Tt.displayName = "Button";
function Ft({
  label: m,
  required: d = !1,
  infoText: n = ""
}) {
  return /* @__PURE__ */ c(Ve, { children: /* @__PURE__ */ L(
    "label",
    {
      className: te(
        J.field.label,
        "flex text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
      ),
      children: [
        m,
        d && /* @__PURE__ */ c("span", { className: "ml-1", children: "*" }),
        n && /* @__PURE__ */ L("span", { className: "ml-2 relative group inline-flex items-center cursor-pointer", children: [
          /* @__PURE__ */ c(Oc, { className: "w-4 h-4 text-gray-500 dark:text-gray-400" }),
          /* @__PURE__ */ c(
            "span",
            {
              className: `absolute left-1/2 top-full mt-2\r
                   w-max max-w-xs bg-white text-black dark:bg-black dark:text-white text-xs\r
                   rounded px-2 py-1 opacity-0 shadow-lg\r
                   group-hover:opacity-100 transition-opacity\r
                   duration-200 pointer-events-none z-50`,
              children: n
            }
          )
        ] })
      ]
    }
  ) });
}
const Zr = [
  {
    label: "Afghanistan",
    code: "AF",
    phone: "93",
    pattern: "^[0-9]{9}$",
    mask: "### ### ###"
  },
  {
    label: "Aland Islands",
    code: "AX",
    phone: "358",
    pattern: "^[0-9]{6,10}$",
    mask: "### ### ### ##"
  },
  {
    label: "Albania",
    code: "AL",
    phone: "355",
    pattern: "^[0-9]{9}$",
    mask: "### ### ###"
  },
  {
    label: "Algeria",
    code: "DZ",
    phone: "213",
    pattern: "^[0-9]{9}$",
    mask: "### ### ###"
  },
  {
    label: "American Samoa",
    code: "AS",
    phone: "1",
    pattern: "^[0-9]{10}$",
    mask: "(###) ###-####"
  },
  {
    label: "Andorra",
    code: "AD",
    phone: "376",
    pattern: "^[0-9]{6,9}$",
    mask: "### ###"
  },
  {
    label: "Angola",
    code: "AO",
    phone: "244",
    pattern: "^[0-9]{9}$",
    mask: "### ### ###"
  },
  {
    label: "Anguilla",
    code: "AI",
    phone: "1",
    pattern: "^[0-9]{10}$",
    mask: "(###) ###-####"
  },
  {
    label: "Antarctica",
    code: "AQ",
    phone: "672",
    pattern: "^[0-9]{6,11}$",
    mask: "## #### ####"
  },
  {
    label: "Antigua and Barbuda",
    code: "AG",
    phone: "1",
    pattern: "^[0-9]{10}$",
    mask: "(###) ###-####"
  },
  {
    label: "Argentina",
    code: "AR",
    phone: "54",
    pattern: "^[0-9]{10,11}$",
    mask: "(###) ###-####"
  },
  {
    label: "Armenia",
    code: "AM",
    phone: "374",
    pattern: "^[0-9]{8}$",
    mask: "## ### ###"
  },
  {
    label: "Aruba",
    code: "AW",
    phone: "297",
    pattern: "^[0-9]{7}$",
    mask: "### ####"
  },
  {
    label: "Australia",
    code: "AU",
    phone: "61",
    pattern: "^[0-9]{9}$",
    mask: "### ### ###"
  },
  {
    label: "Austria",
    code: "AT",
    phone: "43",
    pattern: "^[0-9]{10,12}$",
    mask: "#### ######"
  },
  {
    label: "Azerbaijan",
    code: "AZ",
    phone: "994",
    pattern: "^[0-9]{9}$",
    mask: "## ### ## ##"
  },
  {
    label: "Bahrain",
    code: "BH",
    phone: "973",
    pattern: "^[0-9]{8}$",
    mask: "#### ####"
  },
  {
    label: "Bangladesh",
    code: "BD",
    phone: "880",
    pattern: "^[0-9]{10}$",
    mask: "### ### ####"
  },
  {
    label: "Barbados",
    code: "BB",
    phone: "1",
    pattern: "^[0-9]{10}$",
    mask: "(###) ###-####"
  },
  {
    label: "Belarus",
    code: "BY",
    phone: "375",
    pattern: "^[0-9]{9}$",
    mask: "## ### ## ##"
  },
  {
    label: "Belgium",
    code: "BE",
    phone: "32",
    pattern: "^[0-9]{9}$",
    mask: "### ## ## ##"
  },
  {
    label: "Belize",
    code: "BZ",
    phone: "501",
    pattern: "^[0-9]{7}$",
    mask: "### ####"
  },
  {
    label: "Benin",
    code: "BJ",
    phone: "229",
    pattern: "^[0-9]{8}$",
    mask: "## ## ####"
  },
  {
    label: "Bermuda",
    code: "BM",
    phone: "1",
    pattern: "^[0-9]{10}$",
    mask: "(###) ###-####"
  },
  {
    label: "Bhutan",
    code: "BT",
    phone: "975",
    pattern: "^[0-9]{8}$",
    mask: "## ### ###"
  },
  {
    label: "Bolivia",
    code: "BO",
    phone: "591",
    pattern: "^[0-9]{8}$",
    mask: "### ### ##"
  },
  {
    label: "Bonaire, Sint Eustatius and Saba",
    code: "BQ",
    phone: "599",
    pattern: "^[0-9]{7}$",
    mask: "### ####"
  },
  {
    label: "Bosnia and Herzegovina",
    code: "BA",
    phone: "387",
    pattern: "^[0-9]{8}$",
    mask: "## ### ###"
  },
  {
    label: "Botswana",
    code: "BW",
    phone: "267",
    pattern: "^[0-9]{8}$",
    mask: "## ### ###"
  },
  {
    label: "Bouvet Island",
    code: "BV",
    phone: "0055",
    pattern: "^[0-9]{8}$",
    mask: "#### ####"
  },
  {
    label: "Brazil",
    code: "BR",
    phone: "55",
    pattern: "^[0-9]{10,11}$",
    mask: "(##) #####-####"
  },
  {
    label: "British Indian Ocean Territory",
    code: "IO",
    phone: "246",
    pattern: "^[0-9]{7}$",
    mask: "### ####"
  },
  {
    label: "Brunei",
    code: "BN",
    phone: "673",
    pattern: "^[0-9]{7}$",
    mask: "### ####"
  },
  {
    label: "Bulgaria",
    code: "BG",
    phone: "359",
    pattern: "^[0-9]{9}$",
    mask: "### ### ###"
  },
  {
    label: "Burkina Faso",
    code: "BF",
    phone: "226",
    pattern: "^[0-9]{8}$",
    mask: "## ## ####"
  },
  {
    label: "Burundi",
    code: "BI",
    phone: "257",
    pattern: "^[0-9]{8}$",
    mask: "## ## ####"
  },
  {
    label: "Cambodia",
    code: "KH",
    phone: "855",
    pattern: "^[0-9]{9}$",
    mask: "## ### ###"
  },
  {
    label: "Cameroon",
    code: "CM",
    phone: "237",
    pattern: "^[0-9]{9}$",
    mask: "#### ## ##"
  },
  {
    label: "Canada",
    code: "CA",
    phone: "1",
    pattern: "^[0-9]{10}$",
    mask: "(###) ###-####"
  },
  {
    label: "Cape Verde",
    code: "CV",
    phone: "238",
    pattern: "^[0-9]{7}$",
    mask: "### ####"
  },
  {
    label: "Cayman Islands",
    code: "KY",
    phone: "1",
    pattern: "^[0-9]{10}$",
    mask: "(###) ###-####"
  },
  {
    label: "Central African Republic",
    code: "CF",
    phone: "236",
    pattern: "^[0-9]{8}$",
    mask: "## ## ####"
  },
  {
    label: "Chad",
    code: "TD",
    phone: "235",
    pattern: "^[0-9]{8}$",
    mask: "## ## ## ##"
  },
  {
    label: "Chile",
    code: "CL",
    phone: "56",
    pattern: "^[0-9]{9}$",
    mask: "## #### ###"
  },
  {
    label: "China",
    code: "CN",
    phone: "86",
    pattern: "^[0-9]{11}$",
    mask: "### #### ####"
  },
  {
    label: "Christmas Island",
    code: "CX",
    phone: "61",
    pattern: "^[0-9]{9}$",
    mask: "### ### ###"
  },
  {
    label: "Cocos (Keeling) Islands",
    code: "CC",
    phone: "61",
    pattern: "^[0-9]{9}$",
    mask: "### ### ###"
  },
  {
    label: "Colombia",
    code: "CO",
    phone: "57",
    pattern: "^[0-9]{10}$",
    mask: "### ### ####"
  },
  {
    label: "Comoros",
    code: "KM",
    phone: "269",
    pattern: "^[0-9]{7}$",
    mask: "## ## ###"
  },
  {
    label: "Congo",
    code: "CG",
    phone: "242",
    pattern: "^[0-9]{9}$",
    mask: "## ### ####"
  },
  {
    label: "Cook Islands",
    code: "CK",
    phone: "682",
    pattern: "^[0-9]{5}$",
    mask: "#####"
  },
  {
    label: "Costa Rica",
    code: "CR",
    phone: "506",
    pattern: "^[0-9]{8}$",
    mask: "#### ####"
  },
  {
    label: "Croatia",
    code: "HR",
    phone: "385",
    pattern: "^[0-9]{9}$",
    mask: "## ### ####"
  },
  {
    label: "Cuba",
    code: "CU",
    phone: "53",
    pattern: "^[0-9]{8}$",
    mask: "## ### ###"
  },
  {
    label: "Curaçao",
    code: "CW",
    phone: "599",
    pattern: "^[0-9]{7}$",
    mask: "### ####"
  },
  {
    label: "Cyprus",
    code: "CY",
    phone: "357",
    pattern: "^[0-9]{8}$",
    mask: "## ### ###"
  },
  {
    label: "Czech Republic",
    code: "CZ",
    phone: "420",
    pattern: "^[0-9]{9}$",
    mask: "### ### ###"
  },
  {
    label: "Democratic Republic of the Congo",
    code: "CD",
    phone: "243",
    pattern: "^[0-9]{9}$",
    mask: "### ### ###"
  },
  {
    label: "Denmark",
    code: "DK",
    phone: "45",
    pattern: "^[0-9]{8}$",
    mask: "## ## ## ##"
  },
  {
    label: "Djibouti",
    code: "DJ",
    phone: "253",
    pattern: "^[0-9]{8}$",
    mask: "## ## ## ##"
  },
  {
    label: "Dominica",
    code: "DM",
    phone: "1",
    pattern: "^[0-9]{10}$",
    mask: "(###) ###-####"
  },
  {
    label: "Dominican Republic",
    code: "DO",
    phone: "1",
    pattern: "^[0-9]{10}$",
    mask: "(###) ###-####"
  },
  {
    label: "Ecuador",
    code: "EC",
    phone: "593",
    pattern: "^[0-9]{9}$",
    mask: "## ### ####"
  },
  {
    label: "Egypt",
    code: "EG",
    phone: "20",
    pattern: "^[0-9]{10}$",
    mask: "### ### ####"
  },
  {
    label: "El Salvador",
    code: "SV",
    phone: "503",
    pattern: "^[0-9]{8}$",
    mask: "#### ####"
  },
  {
    label: "Equatorial Guinea",
    code: "GQ",
    phone: "240",
    pattern: "^[0-9]{9}$",
    mask: "## ### ####"
  },
  {
    label: "Eritrea",
    code: "ER",
    phone: "291",
    pattern: "^[0-9]{7}$",
    mask: "## ### ##"
  },
  {
    label: "Estonia",
    code: "EE",
    phone: "372",
    pattern: "^[0-9]{8}$",
    mask: "#### ####"
  },
  {
    label: "Eswatini",
    code: "SZ",
    phone: "268",
    pattern: "^[0-9]{8}$",
    mask: "#### ####"
  },
  {
    label: "Ethiopia",
    code: "ET",
    phone: "251",
    pattern: "^[0-9]{9}$",
    mask: "## ### ####"
  },
  {
    label: "Falkland Islands",
    code: "FK",
    phone: "500",
    pattern: "^[0-9]{5}$",
    mask: "#####"
  },
  {
    label: "Faroe Islands",
    code: "FO",
    phone: "298",
    pattern: "^[0-9]{6}$",
    mask: "### ###"
  },
  {
    label: "Fiji Islands",
    code: "FJ",
    phone: "679",
    pattern: "^[0-9]{7}$",
    mask: "### ####"
  },
  {
    label: "Finland",
    code: "FI",
    phone: "358",
    pattern: "^[0-9]{6,10}$",
    mask: "## ### ####"
  },
  {
    label: "France",
    code: "FR",
    phone: "33",
    pattern: "^[0-9]{9}$",
    mask: "## ## ## ## ##"
  },
  {
    label: "French Guiana",
    code: "GF",
    phone: "594",
    pattern: "^[0-9]{9}$",
    mask: "##### #####"
  },
  {
    label: "French Polynesia",
    code: "PF",
    phone: "689",
    pattern: "^[0-9]{8}$",
    mask: "## ## ## ##"
  },
  {
    label: "French Southern Territories",
    code: "TF",
    phone: "262",
    pattern: "^[0-9]{9}$",
    mask: "##### #####"
  },
  {
    label: "Gabon",
    code: "GA",
    phone: "241",
    pattern: "^[0-9]{7,8}$",
    mask: "## ## ####"
  },
  {
    label: "Georgia",
    code: "GE",
    phone: "995",
    pattern: "^[0-9]{9}$",
    mask: "### ## ## ##"
  },
  {
    label: "Germany",
    code: "DE",
    phone: "49",
    pattern: "^[0-9]{10,11}$",
    mask: "#### ######"
  },
  {
    label: "Ghana",
    code: "GH",
    phone: "233",
    pattern: "^[0-9]{9}$",
    mask: "## ### ####"
  },
  {
    label: "Gibraltar",
    code: "GI",
    phone: "350",
    pattern: "^[0-9]{8}$",
    mask: "#### ####"
  },
  {
    label: "Greece",
    code: "GR",
    phone: "30",
    pattern: "^[0-9]{10}$",
    mask: "### ### ####"
  },
  {
    label: "Greenland",
    code: "GL",
    phone: "299",
    pattern: "^[0-9]{6}$",
    mask: "## ## ##"
  },
  {
    label: "Grenada",
    code: "GD",
    phone: "1",
    pattern: "^[0-9]{10}$",
    mask: "(###) ###-####"
  },
  {
    label: "Guadeloupe",
    code: "GP",
    phone: "590",
    pattern: "^[0-9]{9}$",
    mask: "##### #####"
  },
  {
    label: "Guam",
    code: "GU",
    phone: "1",
    pattern: "^[0-9]{10}$",
    mask: "(###) ###-####"
  },
  {
    label: "Guatemala",
    code: "GT",
    phone: "502",
    pattern: "^[0-9]{8}$",
    mask: "#### ####"
  },
  {
    label: "Guernsey",
    code: "GG",
    phone: "44",
    pattern: "^[0-9]{10}$",
    mask: "#### ######"
  },
  {
    label: "Guinea",
    code: "GN",
    phone: "224",
    pattern: "^[0-9]{9}$",
    mask: "## ### ####"
  },
  {
    label: "Guinea-Bissau",
    code: "GW",
    phone: "245",
    pattern: "^[0-9]{9}$",
    mask: "## ### ####"
  },
  {
    label: "Guyana",
    code: "GY",
    phone: "592",
    pattern: "^[0-9]{7}$",
    mask: "### ####"
  },
  {
    label: "Haiti",
    code: "HT",
    phone: "509",
    pattern: "^[0-9]{8}$",
    mask: "#### ####"
  },
  {
    label: "Heard Island and McDonald Islands",
    code: "HM",
    phone: "672",
    pattern: "^[0-9]{6,11}$",
    mask: "## ### ###"
  },
  {
    label: "Honduras",
    code: "HN",
    phone: "504",
    pattern: "^[0-9]{8}$",
    mask: "#### ####"
  },
  {
    label: "Hong Kong S.A.R.",
    code: "HK",
    phone: "852",
    pattern: "^[0-9]{8}$",
    mask: "#### ####"
  },
  {
    label: "Hungary",
    code: "HU",
    phone: "36",
    pattern: "^[0-9]{9}$",
    mask: "### ### ###"
  },
  {
    label: "Iceland",
    code: "IS",
    phone: "354",
    pattern: "^[0-9]{7}$",
    mask: "### ####"
  },
  {
    label: "India",
    code: "IN",
    phone: "91",
    pattern: "^[0-9]{10}$",
    mask: "##### #####"
  },
  {
    label: "Indonesia",
    code: "ID",
    phone: "62",
    pattern: "^[0-9]{9,11}$",
    mask: "### #### ####"
  },
  {
    label: "Iran",
    code: "IR",
    phone: "98",
    pattern: "^[0-9]{10}$",
    mask: "### ### ####"
  },
  {
    label: "Iraq",
    code: "IQ",
    phone: "964",
    pattern: "^[0-9]{10}$",
    mask: "### ### ####"
  },
  {
    label: "Ireland",
    code: "IE",
    phone: "353",
    pattern: "^[0-9]{9}$",
    mask: "## ### ####"
  },
  {
    label: "Israel",
    code: "IL",
    phone: "972",
    pattern: "^[0-9]{9}$",
    mask: "## ### ####"
  },
  {
    label: "Italy",
    code: "IT",
    phone: "39",
    pattern: "^[0-9]{10,11}$",
    mask: "### ### ####"
  },
  {
    label: "Ivory Coast",
    code: "CI",
    phone: "225",
    pattern: "^[0-9]{10}$",
    mask: "## ## ## ## ##"
  },
  {
    label: "Jamaica",
    code: "JM",
    phone: "1",
    pattern: "^[0-9]{10}$",
    mask: "(###) ###-####"
  },
  {
    label: "Japan",
    code: "JP",
    phone: "81",
    pattern: "^[0-9]{10}$",
    mask: "## #### ####"
  },
  {
    label: "Jersey",
    code: "JE",
    phone: "44",
    pattern: "^[0-9]{10}$",
    mask: "#### ######"
  },
  {
    label: "Jordan",
    code: "JO",
    phone: "962",
    pattern: "^[0-9]{9}$",
    mask: "## #### ####"
  },
  {
    label: "Kazakhstan",
    code: "KZ",
    phone: "7",
    pattern: "^[0-9]{10}$",
    mask: "### ### ## ##"
  },
  {
    label: "Kenya",
    code: "KE",
    phone: "254",
    pattern: "^[0-9]{10}$",
    mask: "### ### ###"
  },
  {
    label: "Kiribati",
    code: "KI",
    phone: "686",
    pattern: "^[0-9]{5,8}$",
    mask: "## ###"
  },
  {
    label: "Kosovo",
    code: "XK",
    phone: "383",
    pattern: "^[0-9]{8,9}$",
    mask: "## ### ###"
  },
  {
    label: "Kuwait",
    code: "KW",
    phone: "965",
    pattern: "^[0-9]{8}$",
    mask: "#### ####"
  },
  {
    label: "Kyrgyzstan",
    code: "KG",
    phone: "996",
    pattern: "^[0-9]{9}$",
    mask: "### ### ###"
  },
  {
    label: "Laos",
    code: "LA",
    phone: "856",
    pattern: "^[0-9]{9,10}$",
    mask: "## ### ###"
  },
  {
    label: "Latvia",
    code: "LV",
    phone: "371",
    pattern: "^[0-9]{8}$",
    mask: "## ### ###"
  },
  {
    label: "Lebanon",
    code: "LB",
    phone: "961",
    pattern: "^[0-9]{8}$",
    mask: "## ### ###"
  },
  {
    label: "Lesotho",
    code: "LS",
    phone: "266",
    pattern: "^[0-9]{8}$",
    mask: "#### ####"
  },
  {
    label: "Liberia",
    code: "LR",
    phone: "231",
    pattern: "^[0-9]{7,8}$",
    mask: "## ### ###"
  },
  {
    label: "Libya",
    code: "LY",
    phone: "218",
    pattern: "^[0-9]{9,10}$",
    mask: "## ### ####"
  },
  {
    label: "Liechtenstein",
    code: "LI",
    phone: "423",
    pattern: "^[0-9]{7,9}$",
    mask: "### ####"
  },
  {
    label: "Lithuania",
    code: "LT",
    phone: "370",
    pattern: "^[0-9]{8}$",
    mask: "### ### ##"
  },
  {
    label: "Luxembourg",
    code: "LU",
    phone: "352",
    pattern: "^[0-9]{9}$",
    mask: "### ### ###"
  },
  {
    label: "Macau S.A.R.",
    code: "MO",
    phone: "853",
    pattern: "^[0-9]{8}$",
    mask: "#### ####"
  },
  {
    label: "Madagascar",
    code: "MG",
    phone: "261",
    pattern: "^[0-9]{9}$",
    mask: "## ## #####"
  },
  {
    label: "Malawi",
    code: "MW",
    phone: "265",
    pattern: "^[0-9]{9}$",
    mask: "### ### ###"
  },
  {
    label: "Malaysia",
    code: "MY",
    phone: "60",
    pattern: "^[0-9]{9,10}$",
    mask: "## ### ####"
  },
  {
    label: "Maldives",
    code: "MV",
    phone: "960",
    pattern: "^[0-9]{7}$",
    mask: "### ####"
  },
  {
    label: "Mali",
    code: "ML",
    phone: "223",
    pattern: "^[0-9]{8}$",
    mask: "## ## ####"
  },
  {
    label: "Malta",
    code: "MT",
    phone: "356",
    pattern: "^[0-9]{8}$",
    mask: "#### ####"
  },
  {
    label: "Man (Isle of)",
    code: "IM",
    phone: "44",
    pattern: "^[0-9]{10}$",
    mask: "#### ######"
  },
  {
    label: "Marshall Islands",
    code: "MH",
    phone: "692",
    pattern: "^[0-9]{7}$",
    mask: "### ####"
  },
  {
    label: "Martinique",
    code: "MQ",
    phone: "596",
    pattern: "^[0-9]{9}$",
    mask: "##### #####"
  },
  {
    label: "Mauritania",
    code: "MR",
    phone: "222",
    pattern: "^[0-9]{8}$",
    mask: "## ## ####"
  },
  {
    label: "Mauritius",
    code: "MU",
    phone: "230",
    pattern: "^[0-9]{8}$",
    mask: "#### ####"
  },
  {
    label: "Mayotte",
    code: "YT",
    phone: "262",
    pattern: "^[0-9]{9}$",
    mask: "##### #####"
  },
  {
    label: "Mexico",
    code: "MX",
    phone: "52",
    pattern: "^[0-9]{10}$",
    mask: "### ### ####"
  },
  {
    label: "Micronesia",
    code: "FM",
    phone: "691",
    pattern: "^[0-9]{7}$",
    mask: "### ####"
  },
  {
    label: "Moldova",
    code: "MD",
    phone: "373",
    pattern: "^[0-9]{8}$",
    mask: "#### ####"
  },
  {
    label: "Monaco",
    code: "MC",
    phone: "377",
    pattern: "^[0-9]{9}$",
    mask: "## ## ## ## ##"
  },
  {
    label: "Mongolia",
    code: "MN",
    phone: "976",
    pattern: "^[0-9]{8}$",
    mask: "## ## ####"
  },
  {
    label: "Montenegro",
    code: "ME",
    phone: "382",
    pattern: "^[0-9]{8,9}$",
    mask: "## ### ###"
  },
  {
    label: "Montserrat",
    code: "MS",
    phone: "1",
    pattern: "^[0-9]{10}$",
    mask: "(###) ###-####"
  },
  {
    label: "Morocco",
    code: "MA",
    phone: "212",
    pattern: "^[0-9]{9}$",
    mask: "## #### ###"
  },
  {
    label: "Mozambique",
    code: "MZ",
    phone: "258",
    pattern: "^[0-9]{9}$",
    mask: "## ### ###"
  },
  {
    label: "Myanmar",
    code: "MM",
    phone: "95",
    pattern: "^[0-9]{9,10}$",
    mask: "## ### ###"
  },
  {
    label: "Namibia",
    code: "NA",
    phone: "264",
    pattern: "^[0-9]{9}$",
    mask: "## ### ####"
  },
  {
    label: "Nauru",
    code: "NR",
    phone: "674",
    pattern: "^[0-9]{7}$",
    mask: "### ####"
  },
  {
    label: "Nepal",
    code: "NP",
    phone: "977",
    pattern: "^[0-9]{10}$",
    mask: "### #### ###"
  },
  {
    label: "Netherlands",
    code: "NL",
    phone: "31",
    pattern: "^[0-9]{9}$",
    mask: "## ### ####"
  },
  {
    label: "New Caledonia",
    code: "NC",
    phone: "687",
    pattern: "^[0-9]{6}$",
    mask: "## ####"
  },
  {
    label: "New Zealand",
    code: "NZ",
    phone: "64",
    pattern: "^[0-9]{9,10}$",
    mask: "## ### ####"
  },
  {
    label: "Nicaragua",
    code: "NI",
    phone: "505",
    pattern: "^[0-9]{8}$",
    mask: "#### ####"
  },
  {
    label: "Niger",
    code: "NE",
    phone: "227",
    pattern: "^[0-9]{8}$",
    mask: "## ## ####"
  },
  {
    label: "Nigeria",
    code: "NG",
    phone: "234",
    pattern: "^[0-9]{10}$",
    mask: "### ### ####"
  },
  {
    label: "Niue",
    code: "NU",
    phone: "683",
    pattern: "^[0-9]{4}$",
    mask: "####"
  },
  {
    label: "Norfolk Island",
    code: "NF",
    phone: "672",
    pattern: "^[0-9]{6,11}$",
    mask: "## ### ###"
  },
  {
    label: "North Korea",
    code: "KP",
    phone: "850",
    pattern: "^[0-9]{8,10}$",
    mask: "## ### ####"
  },
  {
    label: "North Macedonia",
    code: "MK",
    phone: "389",
    pattern: "^[0-9]{8}$",
    mask: "## ### ###"
  },
  {
    label: "Northern Mariana Islands",
    code: "MP",
    phone: "1",
    pattern: "^[0-9]{10}$",
    mask: "(###) ###-####"
  },
  {
    label: "Norway",
    code: "NO",
    phone: "47",
    pattern: "^[0-9]{8}$",
    mask: "### ## ###"
  },
  {
    label: "Oman",
    code: "OM",
    phone: "968",
    pattern: "^[0-9]{8}$",
    mask: "#### ####"
  },
  {
    label: "Pakistan",
    code: "PK",
    phone: "92",
    pattern: "^[0-9]{10,11}$",
    mask: "### #### ###"
  },
  {
    label: "Palau",
    code: "PW",
    phone: "680",
    pattern: "^[0-9]{7}$",
    mask: "### ####"
  },
  {
    label: "Palestinian Territory Occupied",
    code: "PS",
    phone: "970",
    pattern: "^[0-9]{9}$",
    mask: "## ### ####"
  },
  {
    label: "Panama",
    code: "PA",
    phone: "507",
    pattern: "^[0-9]{8}$",
    mask: "#### ####"
  },
  {
    label: "Papua New Guinea",
    code: "PG",
    phone: "675",
    pattern: "^[0-9]{8}$",
    mask: "### ## ###"
  },
  {
    label: "Paraguay",
    code: "PY",
    phone: "595",
    pattern: "^[0-9]{9}$",
    mask: "### ### ###"
  },
  {
    label: "Peru",
    code: "PE",
    phone: "51",
    pattern: "^[0-9]{9}$",
    mask: "### ### ###"
  },
  {
    label: "Philippines",
    code: "PH",
    phone: "63",
    pattern: "^[0-9]{10}$",
    mask: "### ### ####"
  },
  {
    label: "Pitcairn Island",
    code: "PN",
    phone: "870",
    pattern: "^[0-9]{9}$",
    mask: "### ### ###"
  },
  {
    label: "Poland",
    code: "PL",
    phone: "48",
    pattern: "^[0-9]{9}$",
    mask: "### ### ###"
  },
  {
    label: "Portugal",
    code: "PT",
    phone: "351",
    pattern: "^[0-9]{9}$",
    mask: "### ### ###"
  },
  {
    label: "Puerto Rico",
    code: "PR",
    phone: "1",
    pattern: "^[0-9]{10}$",
    mask: "(###) ###-####"
  },
  {
    label: "Qatar",
    code: "QA",
    phone: "974",
    pattern: "^[0-9]{8}$",
    mask: "#### ####"
  },
  {
    label: "Reunion",
    code: "RE",
    phone: "262",
    pattern: "^[0-9]{9}$",
    mask: "##### #####"
  },
  {
    label: "Romania",
    code: "RO",
    phone: "40",
    pattern: "^[0-9]{10}$",
    mask: "### ### ###"
  },
  {
    label: "Russia",
    code: "RU",
    phone: "7",
    pattern: "^[0-9]{10}$",
    mask: "### ### ## ##"
  },
  {
    label: "Rwanda",
    code: "RW",
    phone: "250",
    pattern: "^[0-9]{9}$",
    mask: "### ### ###"
  },
  {
    label: "Saint Helena",
    code: "SH",
    phone: "290",
    pattern: "^[0-9]{4}$",
    mask: "####"
  },
  {
    label: "Saint Kitts and Nevis",
    code: "KN",
    phone: "1",
    pattern: "^[0-9]{10}$",
    mask: "(###) ###-####"
  },
  {
    label: "Saint Lucia",
    code: "LC",
    phone: "1",
    pattern: "^[0-9]{10}$",
    mask: "(###) ###-####"
  },
  {
    label: "Saint Pierre and Miquelon",
    code: "PM",
    phone: "508",
    pattern: "^[0-9]{6}$",
    mask: "## ###"
  },
  {
    label: "Saint Vincent and the Grenadines",
    code: "VC",
    phone: "1",
    pattern: "^[0-9]{10}$",
    mask: "(###) ###-####"
  },
  {
    label: "Saint-Barthelemy",
    code: "BL",
    phone: "590",
    pattern: "^[0-9]{9}$",
    mask: "##### #####"
  },
  {
    label: "Saint-Martin (French part)",
    code: "MF",
    phone: "590",
    pattern: "^[0-9]{9}$",
    mask: "##### #####"
  },
  {
    label: "Samoa",
    code: "WS",
    phone: "685",
    pattern: "^[0-9]{7}$",
    mask: "## ####"
  },
  {
    label: "San Marino",
    code: "SM",
    phone: "378",
    pattern: "^[0-9]{10,12}$",
    mask: "#### ######"
  },
  {
    label: "Sao Tome and Principe",
    code: "ST",
    phone: "239",
    pattern: "^[0-9]{7}$",
    mask: "### ####"
  },
  {
    label: "Saudi Arabia",
    code: "SA",
    phone: "966",
    pattern: "^[0-9]{9}$",
    mask: "### ### ####"
  },
  {
    label: "Senegal",
    code: "SN",
    phone: "221",
    pattern: "^[0-9]{9}$",
    mask: "## ### ####"
  },
  {
    label: "Serbia",
    code: "RS",
    phone: "381",
    pattern: "^[0-9]{8,9}$",
    mask: "## ### ####"
  },
  {
    label: "Seychelles",
    code: "SC",
    phone: "248",
    pattern: "^[0-9]{7}$",
    mask: "### ####"
  },
  {
    label: "Sierra Leone",
    code: "SL",
    phone: "232",
    pattern: "^[0-9]{8}$",
    mask: "## ######"
  },
  {
    label: "Singapore",
    code: "SG",
    phone: "65",
    pattern: "^[0-9]{8}$",
    mask: "#### ####"
  },
  {
    label: "Sint Maarten (Dutch part)",
    code: "SX",
    phone: "1721",
    pattern: "^[0-9]{10}$",
    mask: "(###) ###-####"
  },
  {
    label: "Slovakia",
    code: "SK",
    phone: "421",
    pattern: "^[0-9]{9}$",
    mask: "### ### ###"
  },
  {
    label: "Slovenia",
    code: "SI",
    phone: "386",
    pattern: "^[0-9]{9}$",
    mask: "## ### ###"
  },
  {
    label: "Solomon Islands",
    code: "SB",
    phone: "677",
    pattern: "^[0-9]{7}$",
    mask: "##### ##"
  },
  {
    label: "Somalia",
    code: "SO",
    phone: "252",
    pattern: "^[0-9]{8}$",
    mask: "## ### ###"
  },
  {
    label: "South Africa",
    code: "ZA",
    phone: "27",
    pattern: "^[0-9]{9}$",
    mask: "## ### ####"
  },
  {
    label: "South Georgia",
    code: "GS",
    phone: "500",
    pattern: "^[0-9]{5}$",
    mask: "#####"
  },
  {
    label: "South Korea",
    code: "KR",
    phone: "82",
    pattern: "^[0-9]{9,10}$",
    mask: "## #### ####"
  },
  {
    label: "South Sudan",
    code: "SS",
    phone: "211",
    pattern: "^[0-9]{9}$",
    mask: "### ### ###"
  },
  {
    label: "Spain",
    code: "ES",
    phone: "34",
    pattern: "^[0-9]{9}$",
    mask: "### ### ###"
  },
  {
    label: "Sri Lanka",
    code: "LK",
    phone: "94",
    pattern: "^[0-9]{9}$",
    mask: "## ### ####"
  },
  {
    label: "Sudan",
    code: "SD",
    phone: "249",
    pattern: "^[0-9]{9}$",
    mask: "## ### ####"
  },
  {
    label: "Suriname",
    code: "SR",
    phone: "597",
    pattern: "^[0-9]{7}$",
    mask: "### ####"
  },
  {
    label: "Svalbard and Jan Mayen Islands",
    code: "SJ",
    phone: "47",
    pattern: "^[0-9]{8}$",
    mask: "### ## ###"
  },
  {
    label: "Sweden",
    code: "SE",
    phone: "46",
    pattern: "^[0-9]{9,10}$",
    mask: "## ### ####"
  },
  {
    label: "Switzerland",
    code: "CH",
    phone: "41",
    pattern: "^[0-9]{9}$",
    mask: "## ### ####"
  },
  {
    label: "Syria",
    code: "SY",
    phone: "963",
    pattern: "^[0-9]{9}$",
    mask: "## #### ###"
  },
  {
    label: "Taiwan",
    code: "TW",
    phone: "886",
    pattern: "^[0-9]{9}$",
    mask: "#### ####"
  },
  {
    label: "Tajikistan",
    code: "TJ",
    phone: "992",
    pattern: "^[0-9]{9}$",
    mask: "### ## ####"
  },
  {
    label: "Tanzania",
    code: "TZ",
    phone: "255",
    pattern: "^[0-9]{9}$",
    mask: "### ### ###"
  },
  {
    label: "Thailand",
    code: "TH",
    phone: "66",
    pattern: "^[0-9]{9}$",
    mask: "## ### ####"
  },
  {
    label: "The Bahamas",
    code: "BS",
    phone: "1",
    pattern: "^[0-9]{10}$",
    mask: "(###) ###-####"
  },
  {
    label: "The Gambia",
    code: "GM",
    phone: "220",
    pattern: "^[0-9]{7}$",
    mask: "### ####"
  },
  {
    label: "Timor-Leste",
    code: "TL",
    phone: "670",
    pattern: "^[0-9]{8}$",
    mask: "#### ####"
  },
  {
    label: "Togo",
    code: "TG",
    phone: "228",
    pattern: "^[0-9]{8}$",
    mask: "## ## ####"
  },
  {
    label: "Tokelau",
    code: "TK",
    phone: "690",
    pattern: "^[0-9]{4}$",
    mask: "####"
  },
  {
    label: "Tonga",
    code: "TO",
    phone: "676",
    pattern: "^[0-9]{7}$",
    mask: "##### ##"
  },
  {
    label: "Trinidad and Tobago",
    code: "TT",
    phone: "1",
    pattern: "^[0-9]{10}$",
    mask: "(###) ###-####"
  },
  {
    label: "Tunisia",
    code: "TN",
    phone: "216",
    pattern: "^[0-9]{8}$",
    mask: "## ### ###"
  },
  {
    label: "Turkey",
    code: "TR",
    phone: "90",
    pattern: "^[0-9]{10}$",
    mask: "### ### ####"
  },
  {
    label: "Turkmenistan",
    code: "TM",
    phone: "993",
    pattern: "^[0-9]{8}$",
    mask: "## #### ##"
  },
  {
    label: "Turks and Caicos Islands",
    code: "TC",
    phone: "1",
    pattern: "^[0-9]{10}$",
    mask: "(###) ###-####"
  },
  {
    label: "Tuvalu",
    code: "TV",
    phone: "688",
    pattern: "^[0-9]{5}$",
    mask: "#####"
  },
  {
    label: "Uganda",
    code: "UG",
    phone: "256",
    pattern: "^[0-9]{9}$",
    mask: "### ### ###"
  },
  {
    label: "Ukraine",
    code: "UA",
    phone: "380",
    pattern: "^[0-9]{9}$",
    mask: "## ### ## ##"
  },
  {
    label: "United Arab Emirates",
    code: "AE",
    phone: "971",
    pattern: "^[0-9]{9}$",
    mask: "## ### ####"
  },
  {
    label: "United Kingdom",
    code: "GB",
    phone: "44",
    pattern: "^[0-9]{10}$",
    mask: "#### ######"
  },
  {
    label: "United States",
    code: "US",
    phone: "1",
    pattern: "^[0-9]{10}$",
    mask: "(###) ###-####"
  },
  {
    label: "United States Minor Outlying Islands",
    code: "UM",
    phone: "1",
    pattern: "^[0-9]{10}$",
    mask: "(###) ###-####"
  },
  {
    label: "Uruguay",
    code: "UY",
    phone: "598",
    pattern: "^[0-9]{8}$",
    mask: "## ### ###"
  },
  {
    label: "Uzbekistan",
    code: "UZ",
    phone: "998",
    pattern: "^[0-9]{9}$",
    mask: "## ### ## ##"
  },
  {
    label: "Vanuatu",
    code: "VU",
    phone: "678",
    pattern: "^[0-9]{7}$",
    mask: "##### ##"
  },
  {
    label: "Vatican City State (Holy See)",
    code: "VA",
    phone: "379",
    pattern: "^[0-9]{10}$",
    mask: "## #### ####"
  },
  {
    label: "Venezuela",
    code: "VE",
    phone: "58",
    pattern: "^[0-9]{10}$",
    mask: "### ### ####"
  },
  {
    label: "Vietnam",
    code: "VN",
    phone: "84",
    pattern: "^[0-9]{9,10}$",
    mask: "## #### ###"
  },
  {
    label: "Virgin Islands (British)",
    code: "VG",
    phone: "1",
    pattern: "^[0-9]{10}$",
    mask: "(###) ###-####"
  },
  {
    label: "Virgin Islands (US)",
    code: "VI",
    phone: "1",
    pattern: "^[0-9]{10}$",
    mask: "(###) ###-####"
  },
  {
    label: "Wallis and Futuna Islands",
    code: "WF",
    phone: "681",
    pattern: "^[0-9]{6}$",
    mask: "## ####"
  },
  {
    label: "Western Sahara",
    code: "EH",
    phone: "212",
    pattern: "^[0-9]{9}$",
    mask: "## #### ###"
  },
  {
    label: "Yemen",
    code: "YE",
    phone: "967",
    pattern: "^[0-9]{9}$",
    mask: "### ### ###"
  },
  {
    label: "Zambia",
    code: "ZM",
    phone: "260",
    pattern: "^[0-9]{9}$",
    mask: "## ### ####"
  },
  {
    label: "Zimbabwe",
    code: "ZW",
    phone: "263",
    pattern: "^[0-9]{9}$",
    mask: "## ### ####"
  }
], Vc = ({
  options: m = [],
  value: d = "",
  defaultValue: n = "",
  onChange: l,
  placeholder: i = "Select option",
  className: e = "",
  disabled: b = !1,
  search: o = !1,
  label: R = "",
  required: S = !1,
  name: M = "",
  parentClass: D = "",
  multiple: E = !1,
  dropdownMaxHeight: z = "",
  formData: W = {},
  countriesList: P = !1,
  dependencyKey: ae = "",
  errorMessage: U = ""
}) => {
  var Ie, Pt;
  const [j, $] = pe(!1), [de, se] = pe(""), [ie, ke] = pe(!0), le = kt(null), K = kt(null), ue = kt(null), [_e, Oe] = pe(
    []
  ), [Fe, Mt] = pe({
    top: 0,
    left: 0,
    width: 0
  }), at = typeof document < "u" ? ((Ie = le.current) == null ? void 0 : Ie.closest(".racm-root")) || document.body : null, nt = d || d === !1 ? d : n, xe = (ge) => ge == null || ge === "" ? "" : String(typeof ge == "boolean" ? ge : ge ?? ""), Pe = () => Zr.map((tt) => ({
    value: tt.label,
    label: tt.label,
    code: tt.code
  }));
  et(
    () => {
      (async () => {
        if (P == !0)
          Oe(Pe());
        else if (typeof m == "function") {
          const tt = await m(W);
          Oe(tt || []);
        } else
          Oe(m || []);
      })();
    },
    ae ? [m, W == null ? void 0 : W[ae]] : [m]
  );
  const ze = E ? (nt || []).map(xe) : xe(nt), ne = _e.filter(
    (ge) => ge.label.toLowerCase().includes(de.toLowerCase())
  ), Ce = (ge) => {
    const tt = xe(ge);
    return E ? ze.includes(tt) : tt === ze;
  };
  et(() => {
    const ge = (tt) => {
      var we;
      le.current && !le.current.contains(tt.target) && !((we = K.current) != null && we.contains(tt.target)) && ($(!1), se(""));
    };
    return document.addEventListener("mousedown", ge), () => document.removeEventListener("mousedown", ge);
  }, []), et(() => {
    if (!j || !le.current) return;
    const ge = () => {
      if (!le.current) return;
      const tt = le.current.getBoundingClientRect(), Te = window.innerHeight - tt.bottom < (typeof z == "number" ? z : 200);
      ke(Te), Mt({
        top: Te ? tt.top - 4 : tt.bottom + 4,
        left: tt.left,
        width: tt.width
      });
    };
    return ge(), window.addEventListener("resize", ge), window.addEventListener("scroll", ge, !0), () => {
      window.removeEventListener("resize", ge), window.removeEventListener("scroll", ge, !0);
    };
  }, [j]), et(() => {
    j && ue.current && ue.current.focus();
  }, [j]);
  const Qe = (ge) => {
    let tt = ge;
    if (ge === "true" ? tt = !0 : ge === "false" && (tt = !1), E) {
      const we = ze.includes(
        xe(ge)
      );
      let je;
      we ? je = (Array.isArray(d) ? d : []).filter(
        (Ge) => xe(Ge) !== xe(ge)
      ) : je = [...Array.isArray(d) ? d : [], tt], l == null || l(je);
    } else
      l == null || l(tt), $(!1);
    se("");
  }, We = E ? _e.filter((ge) => Ce(ge.value)).map((ge) => ge.label).join(", ") : (Pt = _e.find((ge) => Ce(ge.value))) == null ? void 0 : Pt.label;
  return et(() => {
    (nt || nt === !1) && setTimeout(() => {
      l == null || l(nt);
    }, 100);
  }, []), /* @__PURE__ */ L(
    "div",
    {
      className: te(
        J.field.wrapper,
        D || "col-span-12"
      ),
      children: [
        /* @__PURE__ */ c(Ft, { label: R, required: S }),
        /* @__PURE__ */ L(
          "div",
          {
            className: te(J.field.input, "relative", e),
            ref: le,
            children: [
              /* @__PURE__ */ c(
                "select",
                {
                  name: "hidden_select_for_validation",
                  value: E ? We ? We.split(", ") : [] : We || "",
                  required: S,
                  multiple: E,
                  id: `field-${M}`,
                  className: "absolute opacity-0 right-1/2 top-[80%] -translate-x-1/2 -translate-y-1/2 pointer-events-none h-[10px]",
                  onChange: () => {
                  },
                  children: E ? We == null ? void 0 : We.split(", ").map((ge) => /* @__PURE__ */ c("option", { value: ge, children: ge }, ge)) : /* @__PURE__ */ c("option", { hidden: !0, value: We, children: We })
                }
              ),
              /* @__PURE__ */ L(
                "button",
                {
                  type: "button",
                  onClick: () => !b && $(!j),
                  disabled: b,
                  className: `w-full h-10 px-3 border border-gray-300 dark:border-gray-600 rounded-md text-left text-sm flex items-center justify-between 
          ${We ? "dark:text-white" : "text-gray-500 dark:text-gray-400"} 
          ${b ? "opacity-50 cursor-not-allowed" : "dark:bg-gray-700"}
          ${U ? "border-red-500" : ""}`,
                  children: [
                    /* @__PURE__ */ c("span", { className: "truncate", children: We || i }),
                    /* @__PURE__ */ c(
                      _o,
                      {
                        className: `w-4 h-4 transition-transform ${j ? "rotate-180" : ""}`
                      }
                    )
                  ]
                }
              ),
              j && at && Ja(
                /* @__PURE__ */ L(
                  "div",
                  {
                    ref: K,
                    className: "fixed z-50 border rounded-md bg-white dark:bg-gray-700 shadow-lg",
                    style: {
                      top: Fe.top,
                      left: Fe.left,
                      width: Fe.width,
                      transform: ie ? "translateY(-100%)" : void 0
                    },
                    children: [
                      o && /* @__PURE__ */ c("div", { className: "p-2 border-b border-gray-200 dark:border-gray-600", children: /* @__PURE__ */ L("div", { className: "relative", children: [
                        /* @__PURE__ */ c(Wa, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }),
                        /* @__PURE__ */ c(
                          "input",
                          {
                            ref: ue,
                            type: "text",
                            value: de,
                            onChange: (ge) => se(ge.target.value),
                            placeholder: "Search...",
                            className: "w-full pl-9 pr-3 py-2 text-sm border rounded-md bg-white dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
                          }
                        )
                      ] }) }),
                      /* @__PURE__ */ c(
                        "div",
                        {
                          className: "max-h-40 overflow-y-auto",
                          style: {
                            maxHeight: z || ""
                          },
                          children: ne.length > 0 ? ne.map((ge) => /* @__PURE__ */ L(
                            "button",
                            {
                              type: "button",
                              onClick: () => Qe(String(ge.value)),
                              className: `w-full px-3 py-2 text-left text-sm flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 
                    ${Ce(ge.value) ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300" : ""}`,
                              children: [
                                /* @__PURE__ */ L("div", { className: "flex gap-2 items-center", children: [
                                  P && (ge == null ? void 0 : ge.code) && /* @__PURE__ */ c(
                                    "img",
                                    {
                                      src: `https://flagcdn.com/w20/${ge == null ? void 0 : ge.code.toLowerCase()}.png`,
                                      alt: ge.code,
                                      className: "w-5 h-3 object-cover"
                                    }
                                  ),
                                  /* @__PURE__ */ c("span", { children: ge.label })
                                ] }),
                                E && Ce(ge.value) && /* @__PURE__ */ c(Dc, { className: "w-4 h-4" })
                              ]
                            },
                            String(ge.value)
                          )) : /* @__PURE__ */ c("div", { className: "px-3 py-2 text-sm text-gray-500 dark:text-gray-400", children: "No options found" })
                        }
                      )
                    ]
                  }
                ),
                at
              )
            ]
          }
        ),
        U && /* @__PURE__ */ c(
          "span",
          {
            className: te(
              J.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: U
          }
        )
      ]
    },
    M
  );
}, ko = Xr.forwardRef(
  ({
    label: m,
    required: d,
    parentClass: n = "col-span-12",
    className: l = "",
    value: i = !1,
    onChange: e,
    disabled: b = !1,
    errorMessage: o = "",
    name: R,
    ...S
  }, M) => (et(() => {
    let D;
    D = i || !1, setTimeout(() => {
      e == null || e(D);
    }, 100);
  }, []), /* @__PURE__ */ L(
    "div",
    {
      className: te(
        J.field.wrapper,
        "flex justify-between",
        n
      ),
      children: [
        m && /* @__PURE__ */ c(Ft, { label: m, required: d }),
        /* @__PURE__ */ L("label", { className: "relative inline-flex items-center cursor-pointer", children: [
          /* @__PURE__ */ c(
            "input",
            {
              type: "checkbox",
              ref: M,
              id: `field-${R}`,
              className: te(J.field.input, "sr-only peer"),
              checked: i,
              onChange: (D) => e == null ? void 0 : e(D.target.checked),
              disabled: b,
              ...S
            }
          ),
          /* @__PURE__ */ c(
            "div",
            {
              className: `
              w-11 h-6 bg-gray-200 peer-focus:outline-none
              rounded-full peer dark:bg-gray-700
              peer-checked:bg-primary-600
              peer-disabled:opacity-50 peer-disabled:cursor-not-allowed
              transition-colors duration-200
              ${o ? "border-red-500" : ""}
              ${l}
            `
            }
          ),
          /* @__PURE__ */ c(
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
        ] }),
        o && /* @__PURE__ */ c(
          "span",
          {
            className: te(
              J.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: o
          }
        )
      ]
    }
  ))
);
ko.displayName = "Switch";
function Wc({
  label: m = "",
  value: d = "",
  name: n = "",
  parentClass: l = "",
  onChange: i,
  disabled: e = !1,
  required: b = !1,
  placeholder: o = "Phone number",
  search: R = !1,
  countriesList: S = !1,
  defaultCountry: M = "",
  errorMessage: D = ""
}) {
  var nt;
  const E = (xe) => Zr.find(
    (Pe) => Pe.code == xe
  ), [z, W] = pe(
    E(M) || Zr[0]
  ), [P, ae] = pe(""), [U, j] = pe(""), [$, de] = pe(!1), [se, ie] = pe(""), ke = kt(null), le = kt(null), [K, ue] = pe({
    top: 0,
    left: 0,
    width: 0
  }), _e = typeof document < "u" ? ((nt = ke.current) == null ? void 0 : nt.closest(".racm-root")) || document.body : null, Oe = (xe, Pe) => {
    let ze = "", ne = 0;
    for (let Ce = 0; Ce < Pe.length && ne < xe.length; Ce++)
      Pe[Ce] === "#" ? (ze += xe[ne], ne++) : ze += Pe[Ce];
    return ze;
  }, Fe = (xe) => {
    const ze = xe.target.value.replace(/\D/g, "");
    if (S && (z != null && z.mask)) {
      const ne = Oe(ze, z.mask);
      j(ne), i == null || i("+" + z.phone + " " + ne);
      const Ce = ne.replace(/\D/g, "");
      ae(Ce);
    } else
      j(ze), ae(ze), z && i ? i("+" + z.phone + " " + ze) : i == null || i(ze);
  };
  et(() => {
    if (typeof d == "string" && d.startsWith("+")) {
      const xe = Zr.filter((Pe) => d.startsWith("+" + Pe.phone)).sort((Pe, ze) => ze.phone.length - Pe.phone.length)[0];
      if (xe) {
        W(xe);
        let Pe = d.replace("+" + xe.phone, "").replaceAll(" ", "");
        ae(Pe), j(Oe(Pe, xe.mask));
        return;
      }
    }
    ae(d || ""), j(d || "");
  }, []);
  const Mt = (xe) => {
    W(xe), i && i("+" + xe.phone + " " + P), de(!1), ie("");
  };
  et(() => {
    const xe = (Pe) => {
      var ze;
      ke.current && !ke.current.contains(Pe.target) && !((ze = le.current) != null && ze.contains(Pe.target)) && de(!1);
    };
    return document.addEventListener("mousedown", xe), () => document.removeEventListener("mousedown", xe);
  }, []), et(() => {
    if (!$ || !ke.current) return;
    const xe = () => {
      if (!ke.current) return;
      const Pe = ke.current.getBoundingClientRect();
      ue({
        top: Pe.bottom + 4,
        left: Pe.left,
        width: Pe.width
      });
    };
    return xe(), window.addEventListener("resize", xe), window.addEventListener("scroll", xe, !0), () => {
      window.removeEventListener("resize", xe), window.removeEventListener("scroll", xe, !0);
    };
  }, [$]);
  const at = Zr.filter(
    (xe) => xe.label.toLowerCase().includes(se.toLowerCase()) || xe.phone.includes(se)
  );
  if (!S) {
    const xe = (Pe) => {
      const ze = Pe.target.value.replace(/[^+\d]/g, ""), ne = ze.startsWith("+") ? "+" + ze.replace(/[+]/g, "").slice(0) : ze;
      i == null || i(ne);
    };
    return /* @__PURE__ */ c(Ve, { children: /* @__PURE__ */ L(
      "div",
      {
        className: te(
          J.field.wrapper,
          l || "col-span-12"
        ),
        children: [
          /* @__PURE__ */ c(Ft, { label: m, required: b }),
          /* @__PURE__ */ c(
            "input",
            {
              type: "text",
              value: d,
              onChange: xe,
              placeholder: o,
              disabled: e,
              required: b,
              className: `w-full h-10 px-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md \r
        bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none \r
        focus:ring-1 focus:ring-blue-300 dark:focus:ring-blue-200`,
              inputMode: "tel",
              pattern: "^\\+\\d{1,15}$"
            }
          )
        ]
      },
      n
    ) });
  }
  return /* @__PURE__ */ c(Ve, { children: /* @__PURE__ */ L(
    "div",
    {
      className: te(
        J.field.wrapper,
        l || "col-span-12"
      ),
      children: [
        /* @__PURE__ */ c(Ft, { label: m, required: b }),
        /* @__PURE__ */ L("div", { className: "relative ", ref: ke, children: [
          /* @__PURE__ */ L(
            "div",
            {
              className: `h-[40px] flex items-center border rounded-md px-2 bg-white dark:bg-gray-700 transition-all
  ${$ ? "ring-0.5 ring-blue-100 border-blue-300" : "border-gray-300 dark:border-gray-600"}
  ${e ? "opacity-60 cursor-not-allowed" : ""}
    ${D ? "border-red-500" : ""}`,
              children: [
                /* @__PURE__ */ L(
                  "button",
                  {
                    type: "button",
                    disabled: e,
                    onClick: () => de(!$),
                    className: "flex items-center gap-1 pr-2 border-r border-gray-300 dark:border-gray-700 focus:outline-none",
                    children: [
                      z ? /* @__PURE__ */ c(
                        "img",
                        {
                          src: `https://flagcdn.com/w20/${z.code.toLowerCase()}.png`,
                          alt: z.code,
                          className: "w-5 h-3 object-cover"
                        }
                      ) : /* @__PURE__ */ c("span", { className: "text-gray-400 text-xs", children: "🌐" }),
                      /* @__PURE__ */ c(_o, { className: "w-3 h-3 text-gray-500" })
                    ]
                  }
                ),
                z && /* @__PURE__ */ L("span", { className: "ml-2 text-sm text-gray-700 dark:text-gray-200 whitespace-nowrap", children: [
                  "+",
                  z.phone
                ] }),
                /* @__PURE__ */ c(
                  "input",
                  {
                    type: "tel",
                    value: U,
                    onChange: Fe,
                    required: b,
                    id: `field-${n}`,
                    disabled: e || !z,
                    placeholder: z ? o || "Enter phone number" : "Select a country",
                    className: "flex-1 ml-2 bg-transparent outline-none text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400"
                  }
                ),
                /* @__PURE__ */ c(
                  "input",
                  {
                    type: "tel",
                    required: b,
                    tabIndex: -1,
                    readOnly: !0,
                    value: z && P ? "+" + z.phone + P : "",
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
          $ && _e && Ja(
            /* @__PURE__ */ L(
              "div",
              {
                ref: le,
                className: "fixed border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 shadow-lg z-50 max-h-60 overflow-y-auto",
                style: {
                  top: K.top,
                  left: K.left,
                  width: K.width
                },
                children: [
                  R && /* @__PURE__ */ c("div", { className: "p-2 border-b border-gray-200 dark:border-gray-700", children: /* @__PURE__ */ L("div", { className: "relative", children: [
                    /* @__PURE__ */ c(Wa, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" }),
                    /* @__PURE__ */ c(
                      "input",
                      {
                        type: "text",
                        value: se,
                        onChange: (xe) => ie(xe.target.value),
                        placeholder: "Search country...",
                        className: "w-full pl-9 pr-3 py-2 text-sm border rounded-md bg-white dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none "
                      }
                    )
                  ] }) }),
                  at.map((xe) => /* @__PURE__ */ L(
                    "button",
                    {
                      type: "button",
                      onClick: () => Mt(xe),
                      className: "w-full flex items-center gap-2 px-2 py-1 text-sm hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100",
                      children: [
                        /* @__PURE__ */ c(
                          "img",
                          {
                            src: `https://flagcdn.com/w20/${xe.code.toLowerCase()}.png`,
                            alt: xe.code,
                            className: "w-5 h-3 object-cover"
                          }
                        ),
                        /* @__PURE__ */ L("span", { children: [
                          xe.label,
                          " (+",
                          xe.phone,
                          ")"
                        ] })
                      ]
                    },
                    xe.code
                  ))
                ]
              }
            ),
            _e
          )
        ] }),
        D && /* @__PURE__ */ c(
          "span",
          {
            className: te(
              J.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: D
          }
        )
      ]
    },
    n
  ) });
}
const Eo = Xr.forwardRef(
  ({ className: m = "", label: d, required: n, errorMessage: l = "", name: i, ...e }, b) => {
    const o = te(
      J.field.input,
      "placeholder-gray-400 dark:placeholder-gray-400",
      l ? "border-red-500" : "",
      m
    );
    return /* @__PURE__ */ c(Ve, { children: /* @__PURE__ */ L(
      "div",
      {
        className: te(
          J.field.wrapper,
          e.parentClass || "col-span-12"
        ),
        children: [
          /* @__PURE__ */ c(Ft, { label: d, required: n }),
          /* @__PURE__ */ L("div", { className: "relative", children: [
            /* @__PURE__ */ c(
              "textarea",
              {
                className: o,
                ref: b,
                id: `field-${i}`,
                required: n,
                ...e
              }
            ),
            l && /* @__PURE__ */ c(
              "span",
              {
                className: te(
                  J.field.error,
                  "text-red-500 text-xs mt-1"
                ),
                children: l
              }
            )
          ] })
        ]
      },
      i
    ) });
  }
);
Eo.displayName = "TextArea";
var Ha = function(m, d) {
  return Ha = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, l) {
    n.__proto__ = l;
  } || function(n, l) {
    for (var i in l) Object.prototype.hasOwnProperty.call(l, i) && (n[i] = l[i]);
  }, Ha(m, d);
};
function qc(m, d) {
  if (typeof d != "function" && d !== null)
    throw new TypeError("Class extends value " + String(d) + " is not a constructor or null");
  Ha(m, d);
  function n() {
    this.constructor = m;
  }
  m.prototype = d === null ? Object.create(d) : (n.prototype = d.prototype, new n());
}
var Lt = function() {
  return Lt = Object.assign || function(d) {
    for (var n, l = 1, i = arguments.length; l < i; l++) {
      n = arguments[l];
      for (var e in n) Object.prototype.hasOwnProperty.call(n, e) && (d[e] = n[e]);
    }
    return d;
  }, Lt.apply(this, arguments);
};
function Co(m) {
  return m && m.__esModule && Object.prototype.hasOwnProperty.call(m, "default") ? m.default : m;
}
var no = !1, Sr, Fa, Pa, da, ua, Ao, ma, Ua, Qa, Ga, So, Ya, Ka, Io, Mo;
function Qt() {
  if (!no) {
    no = !0;
    var m = navigator.userAgent, d = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(m), n = /(Mac OS X)|(Windows)|(Linux)/.exec(m);
    if (Ya = /\b(iPhone|iP[ao]d)/.exec(m), Ka = /\b(iP[ao]d)/.exec(m), Ga = /Android/i.exec(m), Io = /FBAN\/\w+;/i.exec(m), Mo = /Mobile/i.exec(m), So = !!/Win64/.exec(m), d) {
      Sr = d[1] ? parseFloat(d[1]) : d[5] ? parseFloat(d[5]) : NaN, Sr && document && document.documentMode && (Sr = document.documentMode);
      var l = /(?:Trident\/(\d+.\d+))/.exec(m);
      Ao = l ? parseFloat(l[1]) + 4 : Sr, Fa = d[2] ? parseFloat(d[2]) : NaN, Pa = d[3] ? parseFloat(d[3]) : NaN, da = d[4] ? parseFloat(d[4]) : NaN, da ? (d = /(?:Chrome\/(\d+\.\d+))/.exec(m), ua = d && d[1] ? parseFloat(d[1]) : NaN) : ua = NaN;
    } else
      Sr = Fa = Pa = ua = da = NaN;
    if (n) {
      if (n[1]) {
        var i = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(m);
        ma = i ? parseFloat(i[1].replace("_", ".")) : !0;
      } else
        ma = !1;
      Ua = !!n[2], Qa = !!n[3];
    } else
      ma = Ua = Qa = !1;
  }
}
var Va = {
  /**
   *  Check if the UA is Internet Explorer.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  ie: function() {
    return Qt() || Sr;
  },
  /**
   * Check if we're in Internet Explorer compatibility mode.
   *
   * @return bool true if in compatibility mode, false if
   * not compatibility mode or not ie
   */
  ieCompatibilityMode: function() {
    return Qt() || Ao > Sr;
  },
  /**
   * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
   * only need this because Skype can't handle 64-bit IE yet.  We need to remove
   * this when we don't need it -- tracked by #601957.
   */
  ie64: function() {
    return Va.ie() && So;
  },
  /**
   *  Check if the UA is Firefox.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  firefox: function() {
    return Qt() || Fa;
  },
  /**
   *  Check if the UA is Opera.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  opera: function() {
    return Qt() || Pa;
  },
  /**
   *  Check if the UA is WebKit.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  webkit: function() {
    return Qt() || da;
  },
  /**
   *  For Push
   *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
   */
  safari: function() {
    return Va.webkit();
  },
  /**
   *  Check if the UA is a Chrome browser.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  chrome: function() {
    return Qt() || ua;
  },
  /**
   *  Check if the user is running Windows.
   *
   *  @return bool `true' if the user's OS is Windows.
   */
  windows: function() {
    return Qt() || Ua;
  },
  /**
   *  Check if the user is running Mac OS X.
   *
   *  @return float|bool   Returns a float if a version number is detected,
   *                       otherwise true/false.
   */
  osx: function() {
    return Qt() || ma;
  },
  /**
   * Check if the user is running Linux.
   *
   * @return bool `true' if the user's OS is some flavor of Linux.
   */
  linux: function() {
    return Qt() || Qa;
  },
  /**
   * Check if the user is running on an iPhone or iPod platform.
   *
   * @return bool `true' if the user is running some flavor of the
   *    iPhone OS.
   */
  iphone: function() {
    return Qt() || Ya;
  },
  mobile: function() {
    return Qt() || Ya || Ka || Ga || Mo;
  },
  nativeApp: function() {
    return Qt() || Io;
  },
  android: function() {
    return Qt() || Ga;
  },
  ipad: function() {
    return Qt() || Ka;
  }
}, Jc = Va, Zc = !!(typeof window < "u" && window.document && window.document.createElement), Xc = {
  canUseDOM: Zc
}, $c = Xc, No = $c, Ro;
No.canUseDOM && (Ro = document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
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
function es(m, d) {
  if (!No.canUseDOM || d && !("addEventListener" in document))
    return !1;
  var n = "on" + m, l = n in document;
  if (!l) {
    var i = document.createElement("div");
    i.setAttribute(n, "return;"), l = typeof i[n] == "function";
  }
  return !l && Ro && m === "wheel" && (l = document.implementation.hasFeature("Events.wheel", "3.0")), l;
}
var ts = es, rs = Jc, as = ts, oo = 10, io = 40, lo = 800;
function Lo(m) {
  var d = 0, n = 0, l = 0, i = 0;
  return "detail" in m && (n = m.detail), "wheelDelta" in m && (n = -m.wheelDelta / 120), "wheelDeltaY" in m && (n = -m.wheelDeltaY / 120), "wheelDeltaX" in m && (d = -m.wheelDeltaX / 120), "axis" in m && m.axis === m.HORIZONTAL_AXIS && (d = n, n = 0), l = d * oo, i = n * oo, "deltaY" in m && (i = m.deltaY), "deltaX" in m && (l = m.deltaX), (l || i) && m.deltaMode && (m.deltaMode == 1 ? (l *= io, i *= io) : (l *= lo, i *= lo)), l && !d && (d = l < 1 ? -1 : 1), i && !n && (n = i < 1 ? -1 : 1), {
    spinX: d,
    spinY: n,
    pixelX: l,
    pixelY: i
  };
}
Lo.getEventType = function() {
  return rs.firefox() ? "DOMMouseScroll" : as("wheel") ? "wheel" : "mousewheel";
};
var ns = Lo, os = ns;
const is = /* @__PURE__ */ Co(os);
function ls(m, d, n, l, i, e) {
  e === void 0 && (e = 0);
  var b = jr(m, d, e), o = b.width, R = b.height, S = Math.min(o, n), M = Math.min(R, l);
  return S > M * i ? {
    width: M * i,
    height: M
  } : {
    width: S,
    height: S / i
  };
}
function cs(m) {
  return m.width > m.height ? m.width / m.naturalWidth : m.height / m.naturalHeight;
}
function Jr(m, d, n, l, i) {
  i === void 0 && (i = 0);
  var e = jr(d.width, d.height, i), b = e.width, o = e.height;
  return {
    x: co(m.x, b, n.width, l),
    y: co(m.y, o, n.height, l)
  };
}
function co(m, d, n, l) {
  var i = d * l / 2 - n / 2;
  return ha(m, -i, i);
}
function so(m, d) {
  return Math.sqrt(Math.pow(m.y - d.y, 2) + Math.pow(m.x - d.x, 2));
}
function uo(m, d) {
  return Math.atan2(d.y - m.y, d.x - m.x) * 180 / Math.PI;
}
function ss(m, d, n, l, i, e, b) {
  e === void 0 && (e = 0), b === void 0 && (b = !0);
  var o = b ? ds : us, R = jr(d.width, d.height, e), S = jr(d.naturalWidth, d.naturalHeight, e), M = {
    x: o(100, ((R.width - n.width / i) / 2 - m.x / i) / R.width * 100),
    y: o(100, ((R.height - n.height / i) / 2 - m.y / i) / R.height * 100),
    width: o(100, n.width / R.width * 100 / i),
    height: o(100, n.height / R.height * 100 / i)
  }, D = Math.round(o(S.width, M.width * S.width / 100)), E = Math.round(o(S.height, M.height * S.height / 100)), z = S.width >= S.height * l, W = z ? {
    width: Math.round(E * l),
    height: E
  } : {
    width: D,
    height: Math.round(D / l)
  }, P = Lt(Lt({}, W), {
    x: Math.round(o(S.width - W.width, M.x * S.width / 100)),
    y: Math.round(o(S.height - W.height, M.y * S.height / 100))
  });
  return {
    croppedAreaPercentages: M,
    croppedAreaPixels: P
  };
}
function ds(m, d) {
  return Math.min(m, Math.max(0, d));
}
function us(m, d) {
  return d;
}
function ms(m, d, n, l, i, e) {
  var b = jr(d.width, d.height, n), o = ha(l.width / b.width * (100 / m.width), i, e), R = {
    x: o * b.width / 2 - l.width / 2 - b.width * o * (m.x / 100),
    y: o * b.height / 2 - l.height / 2 - b.height * o * (m.y / 100)
  };
  return {
    crop: R,
    zoom: o
  };
}
function ps(m, d, n) {
  var l = cs(d);
  return n.height > n.width ? n.height / (m.height * l) : n.width / (m.width * l);
}
function hs(m, d, n, l, i, e) {
  n === void 0 && (n = 0);
  var b = jr(d.naturalWidth, d.naturalHeight, n), o = ha(ps(m, d, l), i, e), R = l.height > l.width ? l.height / m.height : l.width / m.width, S = {
    x: ((b.width - m.width) / 2 - m.x) * R,
    y: ((b.height - m.height) / 2 - m.y) * R
  };
  return {
    crop: S,
    zoom: o
  };
}
function mo(m, d) {
  return {
    x: (d.x + m.x) / 2,
    y: (d.y + m.y) / 2
  };
}
function fs(m) {
  return m * Math.PI / 180;
}
function jr(m, d, n) {
  var l = fs(n);
  return {
    width: Math.abs(Math.cos(l) * m) + Math.abs(Math.sin(l) * d),
    height: Math.abs(Math.sin(l) * m) + Math.abs(Math.cos(l) * d)
  };
}
function ha(m, d, n) {
  return Math.min(Math.max(m, d), n);
}
function ca() {
  for (var m = [], d = 0; d < arguments.length; d++)
    m[d] = arguments[d];
  return m.filter(function(n) {
    return typeof n == "string" && n.length > 0;
  }).join(" ").trim();
}
var gs = `.reactEasyCrop_Container {
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
`, vs = 1, bs = 3, ys = 1, ws = (
  /** @class */
  function(m) {
    qc(d, m);
    function d() {
      var n = m !== null && m.apply(this, arguments) || this;
      return n.cropperRef = or.createRef(), n.imageRef = or.createRef(), n.videoRef = or.createRef(), n.containerPosition = {
        x: 0,
        y: 0
      }, n.containerRef = null, n.styleRef = null, n.containerRect = null, n.mediaSize = {
        width: 0,
        height: 0,
        naturalWidth: 0,
        naturalHeight: 0
      }, n.dragStartPosition = {
        x: 0,
        y: 0
      }, n.dragStartCrop = {
        x: 0,
        y: 0
      }, n.gestureZoomStart = 0, n.gestureRotationStart = 0, n.isTouching = !1, n.lastPinchDistance = 0, n.lastPinchRotation = 0, n.rafDragTimeout = null, n.rafPinchTimeout = null, n.wheelTimer = null, n.currentDoc = typeof document < "u" ? document : null, n.currentWindow = typeof window < "u" ? window : null, n.resizeObserver = null, n.previousCropSize = null, n.isInitialized = !1, n.state = {
        cropSize: null,
        hasWheelJustStarted: !1,
        mediaObjectFit: void 0
      }, n.initResizeObserver = function() {
        if (!(typeof window.ResizeObserver > "u" || !n.containerRef)) {
          var l = !0;
          n.resizeObserver = new window.ResizeObserver(function(i) {
            if (l) {
              l = !1;
              return;
            }
            n.computeSizes();
          }), n.resizeObserver.observe(n.containerRef);
        }
      }, n.preventZoomSafari = function(l) {
        return l.preventDefault();
      }, n.cleanEvents = function() {
        n.currentDoc && (n.currentDoc.removeEventListener("mousemove", n.onMouseMove), n.currentDoc.removeEventListener("mouseup", n.onDragStopped), n.currentDoc.removeEventListener("touchmove", n.onTouchMove), n.currentDoc.removeEventListener("touchend", n.onDragStopped), n.currentDoc.removeEventListener("gesturechange", n.onGestureChange), n.currentDoc.removeEventListener("gestureend", n.onGestureEnd), n.currentDoc.removeEventListener("scroll", n.onScroll));
      }, n.clearScrollEvent = function() {
        n.containerRef && n.containerRef.removeEventListener("wheel", n.onWheel), n.wheelTimer && clearTimeout(n.wheelTimer);
      }, n.onMediaLoad = function() {
        var l = n.computeSizes();
        l && (n.previousCropSize = l, n.emitCropData(), n.setInitialCrop(l), n.isInitialized = !0), n.props.onMediaLoaded && n.props.onMediaLoaded(n.mediaSize);
      }, n.setInitialCrop = function(l) {
        if (n.props.initialCroppedAreaPercentages) {
          var i = ms(n.props.initialCroppedAreaPercentages, n.mediaSize, n.props.rotation, l, n.props.minZoom, n.props.maxZoom), e = i.crop, b = i.zoom;
          n.props.onCropChange(e), n.props.onZoomChange && n.props.onZoomChange(b);
        } else if (n.props.initialCroppedAreaPixels) {
          var o = hs(n.props.initialCroppedAreaPixels, n.mediaSize, n.props.rotation, l, n.props.minZoom, n.props.maxZoom), e = o.crop, b = o.zoom;
          n.props.onCropChange(e), n.props.onZoomChange && n.props.onZoomChange(b);
        }
      }, n.computeSizes = function() {
        var l, i, e, b, o, R, S = n.imageRef.current || n.videoRef.current;
        if (S && n.containerRef) {
          n.containerRect = n.containerRef.getBoundingClientRect(), n.saveContainerPosition();
          var M = n.containerRect.width / n.containerRect.height, D = ((l = n.imageRef.current) === null || l === void 0 ? void 0 : l.naturalWidth) || ((i = n.videoRef.current) === null || i === void 0 ? void 0 : i.videoWidth) || 0, E = ((e = n.imageRef.current) === null || e === void 0 ? void 0 : e.naturalHeight) || ((b = n.videoRef.current) === null || b === void 0 ? void 0 : b.videoHeight) || 0, z = S.offsetWidth < D || S.offsetHeight < E, W = D / E, P = void 0;
          if (z)
            switch (n.state.mediaObjectFit) {
              default:
              case "contain":
                P = M > W ? {
                  width: n.containerRect.height * W,
                  height: n.containerRect.height
                } : {
                  width: n.containerRect.width,
                  height: n.containerRect.width / W
                };
                break;
              case "horizontal-cover":
                P = {
                  width: n.containerRect.width,
                  height: n.containerRect.width / W
                };
                break;
              case "vertical-cover":
                P = {
                  width: n.containerRect.height * W,
                  height: n.containerRect.height
                };
                break;
            }
          else
            P = {
              width: S.offsetWidth,
              height: S.offsetHeight
            };
          n.mediaSize = Lt(Lt({}, P), {
            naturalWidth: D,
            naturalHeight: E
          }), n.props.setMediaSize && n.props.setMediaSize(n.mediaSize);
          var ae = n.props.cropSize ? n.props.cropSize : ls(n.mediaSize.width, n.mediaSize.height, n.containerRect.width, n.containerRect.height, n.props.aspect, n.props.rotation);
          return (((o = n.state.cropSize) === null || o === void 0 ? void 0 : o.height) !== ae.height || ((R = n.state.cropSize) === null || R === void 0 ? void 0 : R.width) !== ae.width) && n.props.onCropSizeChange && n.props.onCropSizeChange(ae), n.setState({
            cropSize: ae
          }, n.recomputeCropPosition), n.props.setCropSize && n.props.setCropSize(ae), ae;
        }
      }, n.saveContainerPosition = function() {
        if (n.containerRef) {
          var l = n.containerRef.getBoundingClientRect();
          n.containerPosition = {
            x: l.left,
            y: l.top
          };
        }
      }, n.onMouseDown = function(l) {
        n.currentDoc && (l.preventDefault(), n.currentDoc.addEventListener("mousemove", n.onMouseMove), n.currentDoc.addEventListener("mouseup", n.onDragStopped), n.saveContainerPosition(), n.onDragStart(d.getMousePoint(l)));
      }, n.onMouseMove = function(l) {
        return n.onDrag(d.getMousePoint(l));
      }, n.onScroll = function(l) {
        n.currentDoc && (l.preventDefault(), n.saveContainerPosition());
      }, n.onTouchStart = function(l) {
        n.currentDoc && (n.isTouching = !0, !(n.props.onTouchRequest && !n.props.onTouchRequest(l)) && (n.currentDoc.addEventListener("touchmove", n.onTouchMove, {
          passive: !1
        }), n.currentDoc.addEventListener("touchend", n.onDragStopped), n.saveContainerPosition(), l.touches.length === 2 ? n.onPinchStart(l) : l.touches.length === 1 && n.onDragStart(d.getTouchPoint(l.touches[0]))));
      }, n.onTouchMove = function(l) {
        l.preventDefault(), l.touches.length === 2 ? n.onPinchMove(l) : l.touches.length === 1 && n.onDrag(d.getTouchPoint(l.touches[0]));
      }, n.onGestureStart = function(l) {
        n.currentDoc && (l.preventDefault(), n.currentDoc.addEventListener("gesturechange", n.onGestureChange), n.currentDoc.addEventListener("gestureend", n.onGestureEnd), n.gestureZoomStart = n.props.zoom, n.gestureRotationStart = n.props.rotation);
      }, n.onGestureChange = function(l) {
        if (l.preventDefault(), !n.isTouching) {
          var i = d.getMousePoint(l), e = n.gestureZoomStart - 1 + l.scale;
          if (n.setNewZoom(e, i, {
            shouldUpdatePosition: !0
          }), n.props.onRotationChange) {
            var b = n.gestureRotationStart + l.rotation;
            n.props.onRotationChange(b);
          }
        }
      }, n.onGestureEnd = function(l) {
        n.cleanEvents();
      }, n.onDragStart = function(l) {
        var i, e, b = l.x, o = l.y;
        n.dragStartPosition = {
          x: b,
          y: o
        }, n.dragStartCrop = Lt({}, n.props.crop), (e = (i = n.props).onInteractionStart) === null || e === void 0 || e.call(i);
      }, n.onDrag = function(l) {
        var i = l.x, e = l.y;
        n.currentWindow && (n.rafDragTimeout && n.currentWindow.cancelAnimationFrame(n.rafDragTimeout), n.rafDragTimeout = n.currentWindow.requestAnimationFrame(function() {
          if (n.state.cropSize && !(i === void 0 || e === void 0)) {
            var b = i - n.dragStartPosition.x, o = e - n.dragStartPosition.y, R = {
              x: n.dragStartCrop.x + b,
              y: n.dragStartCrop.y + o
            }, S = n.props.restrictPosition ? Jr(R, n.mediaSize, n.state.cropSize, n.props.zoom, n.props.rotation) : R;
            n.props.onCropChange(S);
          }
        }));
      }, n.onDragStopped = function() {
        var l, i;
        n.isTouching = !1, n.cleanEvents(), n.emitCropData(), (i = (l = n.props).onInteractionEnd) === null || i === void 0 || i.call(l);
      }, n.onWheel = function(l) {
        if (n.currentWindow && !(n.props.onWheelRequest && !n.props.onWheelRequest(l))) {
          l.preventDefault();
          var i = d.getMousePoint(l), e = is(l).pixelY, b = n.props.zoom - e * n.props.zoomSpeed / 200;
          n.setNewZoom(b, i, {
            shouldUpdatePosition: !0
          }), n.state.hasWheelJustStarted || n.setState({
            hasWheelJustStarted: !0
          }, function() {
            var o, R;
            return (R = (o = n.props).onInteractionStart) === null || R === void 0 ? void 0 : R.call(o);
          }), n.wheelTimer && clearTimeout(n.wheelTimer), n.wheelTimer = n.currentWindow.setTimeout(function() {
            return n.setState({
              hasWheelJustStarted: !1
            }, function() {
              var o, R;
              return (R = (o = n.props).onInteractionEnd) === null || R === void 0 ? void 0 : R.call(o);
            });
          }, 250);
        }
      }, n.getPointOnContainer = function(l, i) {
        var e = l.x, b = l.y;
        if (!n.containerRect)
          throw new Error("The Cropper is not mounted");
        return {
          x: n.containerRect.width / 2 - (e - i.x),
          y: n.containerRect.height / 2 - (b - i.y)
        };
      }, n.getPointOnMedia = function(l) {
        var i = l.x, e = l.y, b = n.props, o = b.crop, R = b.zoom;
        return {
          x: (i + o.x) / R,
          y: (e + o.y) / R
        };
      }, n.setNewZoom = function(l, i, e) {
        var b = e === void 0 ? {} : e, o = b.shouldUpdatePosition, R = o === void 0 ? !0 : o;
        if (!(!n.state.cropSize || !n.props.onZoomChange)) {
          var S = ha(l, n.props.minZoom, n.props.maxZoom);
          if (R) {
            var M = n.getPointOnContainer(i, n.containerPosition), D = n.getPointOnMedia(M), E = {
              x: D.x * S - M.x,
              y: D.y * S - M.y
            }, z = n.props.restrictPosition ? Jr(E, n.mediaSize, n.state.cropSize, S, n.props.rotation) : E;
            n.props.onCropChange(z);
          }
          n.props.onZoomChange(S);
        }
      }, n.getCropData = function() {
        if (!n.state.cropSize)
          return null;
        var l = n.props.restrictPosition ? Jr(n.props.crop, n.mediaSize, n.state.cropSize, n.props.zoom, n.props.rotation) : n.props.crop;
        return ss(l, n.mediaSize, n.state.cropSize, n.getAspect(), n.props.zoom, n.props.rotation, n.props.restrictPosition);
      }, n.emitCropData = function() {
        var l = n.getCropData();
        if (l) {
          var i = l.croppedAreaPercentages, e = l.croppedAreaPixels;
          n.props.onCropComplete && n.props.onCropComplete(i, e), n.props.onCropAreaChange && n.props.onCropAreaChange(i, e);
        }
      }, n.emitCropAreaChange = function() {
        var l = n.getCropData();
        if (l) {
          var i = l.croppedAreaPercentages, e = l.croppedAreaPixels;
          n.props.onCropAreaChange && n.props.onCropAreaChange(i, e);
        }
      }, n.recomputeCropPosition = function() {
        var l, i;
        if (n.state.cropSize) {
          var e = n.props.crop;
          if (n.isInitialized && (!((l = n.previousCropSize) === null || l === void 0) && l.width) && (!((i = n.previousCropSize) === null || i === void 0) && i.height)) {
            var b = Math.abs(n.previousCropSize.width - n.state.cropSize.width) > 1e-6 || Math.abs(n.previousCropSize.height - n.state.cropSize.height) > 1e-6;
            if (b) {
              var o = n.state.cropSize.width / n.previousCropSize.width, R = n.state.cropSize.height / n.previousCropSize.height;
              e = {
                x: n.props.crop.x * o,
                y: n.props.crop.y * R
              };
            }
          }
          var S = n.props.restrictPosition ? Jr(e, n.mediaSize, n.state.cropSize, n.props.zoom, n.props.rotation) : e;
          n.previousCropSize = n.state.cropSize, n.props.onCropChange(S), n.emitCropData();
        }
      }, n.onKeyDown = function(l) {
        var i, e, b = n.props, o = b.crop, R = b.onCropChange, S = b.keyboardStep, M = b.zoom, D = b.rotation, E = S;
        if (n.state.cropSize) {
          l.shiftKey && (E *= 0.2);
          var z = Lt({}, o);
          switch (l.key) {
            case "ArrowUp":
              z.y -= E, l.preventDefault();
              break;
            case "ArrowDown":
              z.y += E, l.preventDefault();
              break;
            case "ArrowLeft":
              z.x -= E, l.preventDefault();
              break;
            case "ArrowRight":
              z.x += E, l.preventDefault();
              break;
            default:
              return;
          }
          n.props.restrictPosition && (z = Jr(z, n.mediaSize, n.state.cropSize, M, D)), l.repeat || (e = (i = n.props).onInteractionStart) === null || e === void 0 || e.call(i), R(z);
        }
      }, n.onKeyUp = function(l) {
        var i, e;
        switch (l.key) {
          case "ArrowUp":
          case "ArrowDown":
          case "ArrowLeft":
          case "ArrowRight":
            l.preventDefault();
            break;
          default:
            return;
        }
        n.emitCropData(), (e = (i = n.props).onInteractionEnd) === null || e === void 0 || e.call(i);
      }, n;
    }
    return d.prototype.componentDidMount = function() {
      !this.currentDoc || !this.currentWindow || (this.containerRef && (this.containerRef.ownerDocument && (this.currentDoc = this.containerRef.ownerDocument), this.currentDoc.defaultView && (this.currentWindow = this.currentDoc.defaultView), this.initResizeObserver(), typeof window.ResizeObserver > "u" && this.currentWindow.addEventListener("resize", this.computeSizes), this.props.zoomWithScroll && this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }), this.containerRef.addEventListener("gesturestart", this.onGestureStart)), this.currentDoc.addEventListener("scroll", this.onScroll), this.props.disableAutomaticStylesInjection || (this.styleRef = this.currentDoc.createElement("style"), this.styleRef.setAttribute("type", "text/css"), this.props.nonce && this.styleRef.setAttribute("nonce", this.props.nonce), this.styleRef.innerHTML = gs, this.currentDoc.head.appendChild(this.styleRef)), this.imageRef.current && this.imageRef.current.complete && this.onMediaLoad(), this.props.setImageRef && this.props.setImageRef(this.imageRef), this.props.setVideoRef && this.props.setVideoRef(this.videoRef), this.props.setCropperRef && this.props.setCropperRef(this.cropperRef));
    }, d.prototype.componentWillUnmount = function() {
      var n, l;
      !this.currentDoc || !this.currentWindow || (typeof window.ResizeObserver > "u" && this.currentWindow.removeEventListener("resize", this.computeSizes), (n = this.resizeObserver) === null || n === void 0 || n.disconnect(), this.containerRef && this.containerRef.removeEventListener("gesturestart", this.preventZoomSafari), this.styleRef && ((l = this.styleRef.parentNode) === null || l === void 0 || l.removeChild(this.styleRef)), this.cleanEvents(), this.props.zoomWithScroll && this.clearScrollEvent());
    }, d.prototype.componentDidUpdate = function(n) {
      var l, i, e, b, o, R, S, M, D;
      n.rotation !== this.props.rotation ? (this.computeSizes(), this.recomputeCropPosition()) : n.aspect !== this.props.aspect ? this.computeSizes() : n.objectFit !== this.props.objectFit ? this.computeSizes() : n.zoom !== this.props.zoom ? this.recomputeCropPosition() : ((l = n.cropSize) === null || l === void 0 ? void 0 : l.height) !== ((i = this.props.cropSize) === null || i === void 0 ? void 0 : i.height) || ((e = n.cropSize) === null || e === void 0 ? void 0 : e.width) !== ((b = this.props.cropSize) === null || b === void 0 ? void 0 : b.width) ? this.computeSizes() : (((o = n.crop) === null || o === void 0 ? void 0 : o.x) !== ((R = this.props.crop) === null || R === void 0 ? void 0 : R.x) || ((S = n.crop) === null || S === void 0 ? void 0 : S.y) !== ((M = this.props.crop) === null || M === void 0 ? void 0 : M.y)) && this.emitCropAreaChange(), n.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef && (this.props.zoomWithScroll ? this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }) : this.clearScrollEvent()), n.video !== this.props.video && ((D = this.videoRef.current) === null || D === void 0 || D.load());
      var E = this.getObjectFit();
      E !== this.state.mediaObjectFit && this.setState({
        mediaObjectFit: E
      }, this.computeSizes);
    }, d.prototype.getAspect = function() {
      var n = this.props, l = n.cropSize, i = n.aspect;
      return l ? l.width / l.height : i;
    }, d.prototype.getObjectFit = function() {
      var n, l, i, e;
      if (this.props.objectFit === "cover") {
        var b = this.imageRef.current || this.videoRef.current;
        if (b && this.containerRef) {
          this.containerRect = this.containerRef.getBoundingClientRect();
          var o = this.containerRect.width / this.containerRect.height, R = ((n = this.imageRef.current) === null || n === void 0 ? void 0 : n.naturalWidth) || ((l = this.videoRef.current) === null || l === void 0 ? void 0 : l.videoWidth) || 0, S = ((i = this.imageRef.current) === null || i === void 0 ? void 0 : i.naturalHeight) || ((e = this.videoRef.current) === null || e === void 0 ? void 0 : e.videoHeight) || 0, M = R / S;
          return M < o ? "horizontal-cover" : "vertical-cover";
        }
        return "horizontal-cover";
      }
      return this.props.objectFit;
    }, d.prototype.onPinchStart = function(n) {
      var l = d.getTouchPoint(n.touches[0]), i = d.getTouchPoint(n.touches[1]);
      this.lastPinchDistance = so(l, i), this.lastPinchRotation = uo(l, i), this.onDragStart(mo(l, i));
    }, d.prototype.onPinchMove = function(n) {
      var l = this;
      if (!(!this.currentDoc || !this.currentWindow)) {
        var i = d.getTouchPoint(n.touches[0]), e = d.getTouchPoint(n.touches[1]), b = mo(i, e);
        this.onDrag(b), this.rafPinchTimeout && this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout), this.rafPinchTimeout = this.currentWindow.requestAnimationFrame(function() {
          var o = so(i, e), R = l.props.zoom * (o / l.lastPinchDistance);
          l.setNewZoom(R, b, {
            shouldUpdatePosition: !1
          }), l.lastPinchDistance = o;
          var S = uo(i, e), M = l.props.rotation + (S - l.lastPinchRotation);
          l.props.onRotationChange && l.props.onRotationChange(M), l.lastPinchRotation = S;
        });
      }
    }, d.prototype.render = function() {
      var n = this, l, i = this.props, e = i.image, b = i.video, o = i.mediaProps, R = i.cropperProps, S = i.transform, M = i.crop, D = M.x, E = M.y, z = i.rotation, W = i.zoom, P = i.cropShape, ae = i.showGrid, U = i.roundCropAreaPixels, j = i.style, $ = j.containerStyle, de = j.cropAreaStyle, se = j.mediaStyle, ie = i.classes, ke = ie.containerClassName, le = ie.cropAreaClassName, K = ie.mediaClassName, ue = (l = this.state.mediaObjectFit) !== null && l !== void 0 ? l : this.getObjectFit();
      return or.createElement("div", {
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        ref: function(Oe) {
          return n.containerRef = Oe;
        },
        "data-testid": "container",
        style: $,
        className: ca("reactEasyCrop_Container", ke)
      }, e ? or.createElement("img", Lt({
        alt: "",
        className: ca("reactEasyCrop_Image", ue === "contain" && "reactEasyCrop_Contain", ue === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", ue === "vertical-cover" && "reactEasyCrop_Cover_Vertical", K)
      }, o, {
        src: e,
        ref: this.imageRef,
        style: Lt(Lt({}, se), {
          transform: S || "translate(".concat(D, "px, ").concat(E, "px) rotate(").concat(z, "deg) scale(").concat(W, ")")
        }),
        onLoad: this.onMediaLoad
      })) : b && or.createElement("video", Lt({
        autoPlay: !0,
        playsInline: !0,
        loop: !0,
        muted: !0,
        className: ca("reactEasyCrop_Video", ue === "contain" && "reactEasyCrop_Contain", ue === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", ue === "vertical-cover" && "reactEasyCrop_Cover_Vertical", K)
      }, o, {
        ref: this.videoRef,
        onLoadedMetadata: this.onMediaLoad,
        style: Lt(Lt({}, se), {
          transform: S || "translate(".concat(D, "px, ").concat(E, "px) rotate(").concat(z, "deg) scale(").concat(W, ")")
        }),
        controls: !1
      }), (Array.isArray(b) ? b : [{
        src: b
      }]).map(function(_e) {
        return or.createElement("source", Lt({
          key: _e.src
        }, _e));
      })), this.state.cropSize && or.createElement("div", Lt({
        ref: this.cropperRef,
        style: Lt(Lt({}, de), {
          width: U ? Math.round(this.state.cropSize.width) : this.state.cropSize.width,
          height: U ? Math.round(this.state.cropSize.height) : this.state.cropSize.height
        }),
        tabIndex: 0,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        "data-testid": "cropper",
        className: ca("reactEasyCrop_CropArea", P === "round" && "reactEasyCrop_CropAreaRound", ae && "reactEasyCrop_CropAreaGrid", le)
      }, R)));
    }, d.defaultProps = {
      zoom: 1,
      rotation: 0,
      aspect: 4 / 3,
      maxZoom: bs,
      minZoom: vs,
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
      keyboardStep: ys
    }, d.getMousePoint = function(n) {
      return {
        x: Number(n.clientX),
        y: Number(n.clientY)
      };
    }, d.getTouchPoint = function(n) {
      return {
        x: Number(n.clientX),
        y: Number(n.clientY)
      };
    }, d;
  }(or.Component)
);
const po = Tt, xs = (m) => new Promise((d, n) => {
  const l = new Image();
  l.addEventListener("load", () => d(l)), l.addEventListener("error", (i) => n(i)), l.setAttribute("crossOrigin", "anonymous"), l.src = m;
}), Oo = (m) => m * Math.PI / 180, _s = (m, d, n) => {
  const l = Oo(n);
  return {
    width: Math.abs(Math.cos(l) * m) + Math.abs(Math.sin(l) * d),
    height: Math.abs(Math.sin(l) * m) + Math.abs(Math.cos(l) * d)
  };
}, ks = async (m, d, n = "image/jpeg", l = 0) => {
  const i = await xs(m), e = document.createElement("canvas"), b = e.getContext("2d");
  if (!b)
    throw new Error("Canvas context is not available");
  const o = Oo(l), { width: R, height: S } = _s(
    i.width,
    i.height,
    l
  );
  e.width = R, e.height = S, b.translate(R / 2, S / 2), b.rotate(o), b.translate(-i.width / 2, -i.height / 2), b.drawImage(i, 0, 0);
  const M = document.createElement("canvas"), D = M.getContext("2d");
  if (!D)
    throw new Error("Canvas context is not available");
  return M.width = d.width, M.height = d.height, D.drawImage(
    e,
    d.x,
    d.y,
    d.width,
    d.height,
    0,
    0,
    d.width,
    d.height
  ), new Promise((E, z) => {
    M.toBlob(
      (W) => {
        if (!W) {
          z(new Error("Image cropping failed"));
          return;
        }
        E(W);
      },
      n,
      0.95
    );
  });
}, Do = ({
  isOpen: m,
  imageSrc: d,
  fileType: n = "image/jpeg",
  fileName: l = "cropped-image",
  aspect: i = 1 / 1,
  title: e = "Crop Image",
  onClose: b,
  onApply: o
}) => {
  const [R, S] = pe({ x: 0, y: 0 }), [M, D] = pe(1), [E, z] = pe(null);
  et(() => {
    m && (S({ x: 0, y: 0 }), D(1), z(null));
  }, [m]);
  const W = Lc((ae, U) => {
    z(U);
  }, []), P = async () => {
    var ae, U;
    if (!(!d || !E))
      try {
        const j = await ks(
          d,
          E,
          n
        ), $ = ((U = (ae = n == null ? void 0 : n.split("/")) == null ? void 0 : ae[1]) == null ? void 0 : U.replace("jpeg", "jpg")) || "jpg", de = new File([j], `${l}.${$}`, {
          type: n
        });
        o == null || o(de);
      } catch {
        b == null || b();
      }
  };
  return m ? /* @__PURE__ */ L(
    "div",
    {
      className: te(
        J.mediaPicker.cropModal,
        "fixed inset-0 z-50 flex items-center justify-center p-4"
      ),
      children: [
        /* @__PURE__ */ c(
          "div",
          {
            className: "fixed inset-0 bg-gray-500 opacity-75",
            onClick: b
          }
        ),
        /* @__PURE__ */ L("div", { className: "relative bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col dark:bg-gray-800", children: [
          /* @__PURE__ */ L("div", { className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0", children: [
            /* @__PURE__ */ c("h3", { className: "text-lg font-medium text-gray-900 dark:text-white", children: e }),
            /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                onClick: b,
                className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
                "aria-label": "Close crop modal",
                children: /* @__PURE__ */ c(Ht, { icon: "mdi:close", className: "w-6 h-6" })
              }
            )
          ] }),
          /* @__PURE__ */ L("div", { className: "p-4 space-y-4", children: [
            /* @__PURE__ */ c("div", { className: "relative h-72 w-full bg-gray-900 rounded-md overflow-hidden", children: d && /* @__PURE__ */ c(
              ws,
              {
                image: d,
                crop: R,
                zoom: M,
                aspect: i,
                onCropChange: S,
                onZoomChange: D,
                onCropComplete: W
              }
            ) }),
            /* @__PURE__ */ L("div", { className: "space-y-2", children: [
              /* @__PURE__ */ c("label", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Zoom" }),
              /* @__PURE__ */ c(
                "input",
                {
                  type: "range",
                  min: 1,
                  max: 3,
                  step: 0.1,
                  value: M,
                  onChange: (ae) => D(Number(ae.target.value)),
                  className: "w-full"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ L("div", { className: "px-4 py-3 flex justify-end gap-3 border-t border-gray-200 dark:border-gray-700 sm:!px-6", children: [
            /* @__PURE__ */ c(
              po,
              {
                type: "button",
                onClick: b,
                variant: "outlined",
                color: "default",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ c(
              po,
              {
                type: "button",
                onClick: P,
                variant: "contained",
                color: "primary",
                children: "Apply Crop"
              }
            )
          ] })
        ] })
      ]
    }
  ) : null;
}, Es = Tt, fr = (m) => {
  typeof m == "string" && m.startsWith("blob:") && URL.revokeObjectURL(m);
}, Cs = ({
  label: m = "",
  value: d = null,
  onChange: n,
  required: l = !1,
  accept: i = "image/*",
  aspect: e = "1",
  id: b,
  dragDrop: o = !1,
  cropImage: R = !1,
  name: S = "",
  parentClass: M = "",
  errorMessage: D = ""
}) => {
  const [E, z] = pe(d), [W, P] = pe(!1), [ae, U] = pe(!1), [j, $] = pe(""), [de, se] = pe("image/jpeg"), [ie, ke] = pe("cropped-image"), le = kt(null), K = kt(""), ue = kt("");
  et(() => {
    if (d instanceof File) {
      const ne = URL.createObjectURL(d);
      fr(ue.current), ue.current = ne, z({ file: d, preview: ne });
    } else d && typeof d == "object" && "preview" in d, z(d);
  }, [d]), et(() => () => {
    fr(ue.current), fr(K.current);
  }, []);
  const _e = () => {
    U(!1), fr(K.current), K.current = "", $(""), le.current && (le.current.value = "");
  }, Oe = (ne) => {
    const Ce = URL.createObjectURL(ne);
    fr(ue.current), ue.current = Ce, z({ file: ne, preview: Ce }), n == null || n(ne), _e();
  }, Fe = (ne) => {
    if (!ne || ne.length === 0)
      return;
    const Ce = ne[0];
    if (R) {
      const We = URL.createObjectURL(Ce);
      fr(K.current), K.current = We, $(We), se(Ce.type || "image/jpeg"), ke(
        (Ce.name || "cropped-image").replace(/\.[^/.]+$/, "")
      ), U(!0);
      return;
    }
    const Qe = URL.createObjectURL(Ce);
    fr(ue.current), ue.current = Qe, z({ file: Ce, preview: Qe }), n == null || n(Ce);
  }, Mt = (ne) => {
    ne && ne.stopPropagation(), fr(ue.current), ue.current = "", z(null), n == null || n(null), le.current && (le.current.value = "");
  }, at = (ne) => {
    o && (ne.preventDefault(), P(!0));
  }, nt = (ne) => {
    o && (ne.preventDefault(), P(!1));
  }, xe = (ne) => {
    var Ce, Qe, We, Ie;
    o && (ne.preventDefault(), P(!1), (Ie = (We = (Qe = (Ce = ne.dataTransfer) == null ? void 0 : Ce.files) == null ? void 0 : Qe[0]) == null ? void 0 : We.type) != null && Ie.includes("image/") && Fe(ne.dataTransfer.files));
  }, Pe = () => {
    var ne;
    (ne = le.current) == null || ne.click();
  }, ze = E && typeof E == "object" && "preview" in E ? E.preview : typeof E == "string" ? E : "";
  return /* @__PURE__ */ L(Ve, { children: [
    /* @__PURE__ */ L(
      "div",
      {
        className: te(
          J.mediaPicker.image,
          J.field.wrapper,
          M || "col-span-12"
        ),
        children: [
          /* @__PURE__ */ c(Ft, { label: m, required: l }),
          /* @__PURE__ */ L(
            "div",
            {
              className: te(
                J.mediaPicker.dropzone,
                "relative rounded-md p-2 transition-all",
                W ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800",
                D ? "border-red-500" : ""
              ),
              onDragOver: at,
              onDragLeave: nt,
              onDrop: xe,
              id: `field-${S}`,
              children: [
                /* @__PURE__ */ c(
                  "input",
                  {
                    ref: le,
                    id: b,
                    type: "file",
                    accept: i,
                    onChange: (ne) => Fe(ne.target.files),
                    required: l && !E,
                    className: "absolute opacity-0 right-[50%] top-[80%] -translate-y-1/2 pointer-events-none h-[10px]"
                  }
                ),
                /* @__PURE__ */ L(
                  "div",
                  {
                    className: `flex items-center space-x-4 transition-all ${W ? "opacity-50" : ""}`,
                    children: [
                      E ? /* @__PURE__ */ L("div", { className: "relative group", children: [
                        /* @__PURE__ */ c(
                          "img",
                          {
                            src: ze,
                            alt: "preview",
                            className: "object-cover w-20 h-20 rounded-full shadow-md"
                          }
                        ),
                        !l && /* @__PURE__ */ c(
                          "button",
                          {
                            type: "button",
                            onClick: Mt,
                            className: "absolute top-0 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
                            "aria-label": "Remove image",
                            children: /* @__PURE__ */ c(Ht, { icon: "mdi:close", className: "w-3 h-3" })
                          }
                        )
                      ] }) : /* @__PURE__ */ c("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ c(
                        Ht,
                        {
                          icon: "ri:image-add-fill",
                          className: "text-gray-400 w-10 h-10"
                        }
                      ) }),
                      /* @__PURE__ */ L("div", { className: "space-y-1", children: [
                        /* @__PURE__ */ c(
                          Es,
                          {
                            type: "button",
                            onClick: Pe,
                            variant: "outlined",
                            color: "default",
                            children: E ? "Change Image" : "Select Image"
                          }
                        ),
                        o && !E && /* @__PURE__ */ c("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop" })
                      ] })
                    ]
                  }
                ),
                o && W && /* @__PURE__ */ c("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-md", children: /* @__PURE__ */ c("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg", children: "Drop image here" }) })
              ]
            }
          ),
          D && /* @__PURE__ */ c(
            "span",
            {
              className: te(
                J.field.error,
                "text-red-500 text-xs mt-1"
              ),
              children: D
            }
          )
        ]
      },
      S
    ),
    /* @__PURE__ */ c(
      Do,
      {
        isOpen: ae,
        imageSrc: j,
        fileType: de,
        fileName: ie,
        onClose: _e,
        onApply: Oe,
        aspect: Number(e)
      }
    )
  ] });
}, Bo = Xr.forwardRef(
  ({
    label: m,
    value: d,
    name: n,
    required: l,
    parentClass: i = "",
    className: e = "",
    type: b = "text",
    onKeyDown: o,
    negativeNumberAllow: R = !0,
    defaultValue: S = "",
    field: M = {},
    onChange: D,
    mask: E = "",
    errorMessage: z = "",
    maskApplyOnValue: W = !0,
    ...P
  }, ae) => {
    const [U, j] = pe(!1), $ = (ie) => {
      if (b === "number") {
        if (["e", "E", "+"].includes(ie.key)) {
          ie.preventDefault();
          return;
        }
        if (R == !1 && ie.key === "-") {
          ie.preventDefault();
          return;
        }
        if (["ArrowUp", "ArrowDown"].includes(ie.key)) {
          ie.preventDefault();
          return;
        }
      }
      o == null || o(ie);
    }, de = te(
      J.field.input,
      "h-10 placeholder-gray-400 dark:placeholder-gray-400",
      b === "password" ? "pr-10" : "",
      b === "number" ? "no-spinner" : "",
      e,
      z ? "border-red-500" : ""
    );
    function se(ie, ke) {
      if (!ie) return ie;
      const le = String(ie).replace(/[^a-zA-Z0-9]/g, "");
      let K = "", ue = 0;
      for (let _e = 0; _e < (ke == null ? void 0 : ke.length) && ue < le.length; _e++) {
        const Oe = ke[_e], Fe = le[ue];
        Oe === "9" ? /\d/.test(Fe) ? (K += Fe, ue++) : (ue++, _e--) : Oe === "A" ? /[a-zA-Z]/.test(Fe) ? (K += Fe, ue++) : (ue++, _e--) : Oe === "X" ? /[a-zA-Z0-9]/.test(Fe) ? (K += Fe, ue++) : (ue++, _e--) : Oe === "*" ? (K += Fe, ue++) : (K += Oe, Fe === Oe && ue++);
      }
      return K;
    }
    return et(() => {
      if (S) {
        const ie = d || S;
        setTimeout(() => {
          D == null || D(ie);
        }, 100);
      }
    }, [S]), /* @__PURE__ */ c(Ve, { children: /* @__PURE__ */ L(
      "div",
      {
        className: te(
          J.field.wrapper,
          i || "col-span-12"
        ),
        children: [
          /* @__PURE__ */ c(
            Ft,
            {
              label: m,
              required: l,
              infoText: M == null ? void 0 : M.infoText
            }
          ),
          /* @__PURE__ */ L("div", { className: "relative", children: [
            /* @__PURE__ */ c(
              "input",
              {
                type: b === "password" && U ? "text" : b,
                ref: ae,
                id: `field-${n}`,
                required: l,
                onKeyDown: $,
                className: de,
                value: E ? se(d, E) : d,
                onChange: (ie) => {
                  D(E && W ? se(ie.target.value, E) : ie.target.value);
                },
                ...P
              }
            ),
            z && /* @__PURE__ */ c(
              "span",
              {
                className: te(
                  J.field.error,
                  "text-red-500 text-xs mt-1"
                ),
                children: z
              }
            ),
            b === "password" && /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                tabIndex: -1,
                onClick: () => j((ie) => !ie),
                className: "absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200",
                children: /* @__PURE__ */ c(
                  Ht,
                  {
                    icon: U ? "mdi:eye-outline" : "mdi:eye-off-outline",
                    className: "w-5 h-5"
                  }
                )
              }
            )
          ] })
        ]
      },
      n
    ) });
  }
);
Bo.displayName = "Input";
const As = ({
  editorKey: m = "",
  value: d = "",
  name: n = "",
  onChange: l,
  label: i = "",
  required: e = !1,
  placeholder: b = "",
  parentClass: o = "col-span-12",
  height: R = 400,
  inline: S = !1,
  disabled: M = !1,
  plugins: D,
  toolbar: E,
  menubar: z = !1,
  fontFamily: W = "Inter, sans-serif",
  initConfig: P = {},
  imageUploadHandler: ae,
  errorMessage: U = ""
}) => {
  const j = [
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
  ], $ = "undo redo | blocks | bold italic underline forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media table | removeformat | code fullscreen preview", de = (se) => new Promise((ie, ke) => {
    if (!ae) {
      ie(`data:${se.blob().type};base64,${se.base64()}`);
      return;
    }
    ae(se).then((le) => {
      le ? ie(le) : ke("Upload failed: No URL returned");
    }).catch((le) => {
      ke(
        typeof le == "string" ? le : (le == null ? void 0 : le.message) || "Image upload failed"
      );
    });
  });
  return /* @__PURE__ */ L(
    "div",
    {
      className: te(J.field.wrapper, o),
      id: `field-${n}`,
      children: [
        i && /* @__PURE__ */ c(Ft, { label: i, required: e }),
        /* @__PURE__ */ c(
          Qc,
          {
            apiKey: m,
            value: d,
            disabled: M,
            init: {
              height: R,
              inline: S,
              menubar: z,
              branding: !1,
              statusbar: !0,
              automatic_uploads: !0,
              images_upload_handler: de,
              plugins: D ?? j,
              toolbar: E ?? $,
              placeholder: b,
              content_style: `
            body {
                font-family: ${W};
                border: ${U ? "1px solid blue" : ""};
            }
            `,
              ...P
            },
            onEditorChange: (se) => {
              l == null || l(se);
            }
          }
        ),
        U && /* @__PURE__ */ c(
          "span",
          {
            className: te(
              J.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: U
          }
        )
      ]
    }
  );
};
var zo = { exports: {} };
(function(m) {
  m.exports = /******/
  function(d) {
    var n = {};
    function l(i) {
      if (n[i])
        return n[i].exports;
      var e = n[i] = {
        /******/
        i,
        /******/
        l: !1,
        /******/
        exports: {}
        /******/
      };
      return d[i].call(e.exports, e, e.exports, l), e.l = !0, e.exports;
    }
    return l.m = d, l.c = n, l.d = function(i, e, b) {
      l.o(i, e) || Object.defineProperty(i, e, { enumerable: !0, get: b });
    }, l.r = function(i) {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(i, "__esModule", { value: !0 });
    }, l.t = function(i, e) {
      if (e & 1 && (i = l(i)), e & 8 || e & 4 && typeof i == "object" && i && i.__esModule) return i;
      var b = /* @__PURE__ */ Object.create(null);
      if (l.r(b), Object.defineProperty(b, "default", { enumerable: !0, value: i }), e & 2 && typeof i != "string") for (var o in i) l.d(b, o, (function(R) {
        return i[R];
      }).bind(null, o));
      return b;
    }, l.n = function(i) {
      var e = i && i.__esModule ? (
        /******/
        function() {
          return i.default;
        }
      ) : (
        /******/
        function() {
          return i;
        }
      );
      return l.d(e, "a", e), e;
    }, l.o = function(i, e) {
      return Object.prototype.hasOwnProperty.call(i, e);
    }, l.p = "", l(l.s = 10);
  }([
    /* 0 */
    /***/
    function(d, n) {
      d.exports = Xr;
    },
    /* 1 */
    /***/
    function(d, n, l) {
      var i = l(3), e = l(7);
      e = e.__esModule ? e.default : e, typeof e == "string" && (e = [[d.i, e, ""]]);
      var b = {};
      b.insert = "head", b.singleton = !1, i(e, b), d.exports = e.locals || {};
    },
    /* 2 */
    /***/
    function(d, n) {
      d.exports = Uc;
    },
    /* 3 */
    /***/
    function(d, n, l) {
      var i = /* @__PURE__ */ function() {
        var j;
        return function() {
          return typeof j > "u" && (j = !!(window && document && document.all && !window.atob)), j;
        };
      }(), e = /* @__PURE__ */ function() {
        var j = {};
        return function(de) {
          if (typeof j[de] > "u") {
            var se = document.querySelector(de);
            if (window.HTMLIFrameElement && se instanceof window.HTMLIFrameElement)
              try {
                se = se.contentDocument.head;
              } catch {
                se = null;
              }
            j[de] = se;
          }
          return j[de];
        };
      }(), b = [];
      function o(U) {
        for (var j = -1, $ = 0; $ < b.length; $++)
          if (b[$].identifier === U) {
            j = $;
            break;
          }
        return j;
      }
      function R(U, j) {
        for (var $ = {}, de = [], se = 0; se < U.length; se++) {
          var ie = U[se], ke = j.base ? ie[0] + j.base : ie[0], le = $[ke] || 0, K = "".concat(ke, " ").concat(le);
          $[ke] = le + 1;
          var ue = o(K), _e = {
            css: ie[1],
            media: ie[2],
            sourceMap: ie[3]
          };
          ue !== -1 ? (b[ue].references++, b[ue].updater(_e)) : b.push({
            identifier: K,
            updater: ae(_e, j),
            references: 1
          }), de.push(K);
        }
        return de;
      }
      function S(U) {
        var j = document.createElement("style"), $ = U.attributes || {};
        if (typeof $.nonce > "u") {
          var de = l.nc;
          de && ($.nonce = de);
        }
        if (Object.keys($).forEach(function(ie) {
          j.setAttribute(ie, $[ie]);
        }), typeof U.insert == "function")
          U.insert(j);
        else {
          var se = e(U.insert || "head");
          if (!se)
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          se.appendChild(j);
        }
        return j;
      }
      function M(U) {
        if (U.parentNode === null)
          return !1;
        U.parentNode.removeChild(U);
      }
      var D = /* @__PURE__ */ function() {
        var j = [];
        return function(de, se) {
          return j[de] = se, j.filter(Boolean).join(`
`);
        };
      }();
      function E(U, j, $, de) {
        var se = $ ? "" : de.media ? "@media ".concat(de.media, " {").concat(de.css, "}") : de.css;
        if (U.styleSheet)
          U.styleSheet.cssText = D(j, se);
        else {
          var ie = document.createTextNode(se), ke = U.childNodes;
          ke[j] && U.removeChild(ke[j]), ke.length ? U.insertBefore(ie, ke[j]) : U.appendChild(ie);
        }
      }
      function z(U, j, $) {
        var de = $.css, se = $.media, ie = $.sourceMap;
        if (se ? U.setAttribute("media", se) : U.removeAttribute("media"), ie && typeof btoa < "u" && (de += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(ie)))), " */")), U.styleSheet)
          U.styleSheet.cssText = de;
        else {
          for (; U.firstChild; )
            U.removeChild(U.firstChild);
          U.appendChild(document.createTextNode(de));
        }
      }
      var W = null, P = 0;
      function ae(U, j) {
        var $, de, se;
        if (j.singleton) {
          var ie = P++;
          $ = W || (W = S(j)), de = E.bind(null, $, ie, !1), se = E.bind(null, $, ie, !0);
        } else
          $ = S(j), de = z.bind(null, $, j), se = function() {
            M($);
          };
        return de(U), function(le) {
          if (le) {
            if (le.css === U.css && le.media === U.media && le.sourceMap === U.sourceMap)
              return;
            de(U = le);
          } else
            se();
        };
      }
      d.exports = function(U, j) {
        j = j || {}, !j.singleton && typeof j.singleton != "boolean" && (j.singleton = i()), U = U || [];
        var $ = R(U, j);
        return function(se) {
          if (se = se || [], Object.prototype.toString.call(se) === "[object Array]") {
            for (var ie = 0; ie < $.length; ie++) {
              var ke = $[ie], le = o(ke);
              b[le].references--;
            }
            for (var K = R(se, j), ue = 0; ue < $.length; ue++) {
              var _e = $[ue], Oe = o(_e);
              b[Oe].references === 0 && (b[Oe].updater(), b.splice(Oe, 1));
            }
            $ = K;
          }
        };
      };
    },
    /* 4 */
    /***/
    function(d, n, l) {
      d.exports = function(b) {
        var o = [];
        return o.toString = function() {
          return this.map(function(S) {
            var M = i(S, b);
            return S[2] ? "@media ".concat(S[2], " {").concat(M, "}") : M;
          }).join("");
        }, o.i = function(R, S, M) {
          typeof R == "string" && (R = [[null, R, ""]]);
          var D = {};
          if (M)
            for (var E = 0; E < this.length; E++) {
              var z = this[E][0];
              z != null && (D[z] = !0);
            }
          for (var W = 0; W < R.length; W++) {
            var P = [].concat(R[W]);
            M && D[P[0]] || (S && (P[2] ? P[2] = "".concat(S, " and ").concat(P[2]) : P[2] = S), o.push(P));
          }
        }, o;
      };
      function i(b, o) {
        var R = b[1] || "", S = b[3];
        if (!S)
          return R;
        if (o && typeof btoa == "function") {
          var M = e(S), D = S.sources.map(function(E) {
            return "/*# sourceURL=".concat(S.sourceRoot || "").concat(E, " */");
          });
          return [R].concat(D).concat([M]).join(`
`);
        }
        return [R].join(`
`);
      }
      function e(b) {
        var o = btoa(unescape(encodeURIComponent(JSON.stringify(b)))), R = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o);
        return "/*# ".concat(R, " */");
      }
    },
    /* 5 */
    /***/
    function(d, n, l) {
      var i = l(3), e = l(6);
      e = e.__esModule ? e.default : e, typeof e == "string" && (e = [[d.i, e, ""]]);
      var b = {};
      b.insert = "head", b.singleton = !1, i(e, b), d.exports = e.locals || {};
    },
    /* 6 */
    /***/
    function(d, n, l) {
      var i = l(4);
      n = i(!1), n.push([d.i, `.resizeImageWrapper {\r
  outline: 3px solid #b4d7ff;\r
  position: relative;\r
}\r
\r
.resizer {\r
  position: absolute;\r
  width: 10px;\r
  height: 10px;\r
  background-color: #4099ff;\r
  right: -5px;\r
  bottom: -5px;\r
  cursor: se-resize;\r
}\r
\r
.resizer.topRight {\r
  right: -5px;\r
  top: -5px;\r
  cursor: ne-resize;\r
}\r
\r
.resizer.bottomLeft {\r
  bottom: -5px;\r
  left: -5px;\r
  cursor: ne-resize;\r
}\r
\r
.resizer.topLeft {\r
  top: -5px;\r
  left: -5px;\r
  cursor: se-resize;\r
}\r
\r
\r
/* Wrapper for iframe and overlay */\r
.iframe-wrapper {\r
  position: relative;\r
  display: inline-block;\r
}\r
\r
/* Overlay shown on hover */\r
.iframe-wrapper .iframe-overlay {\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  width: 100%;\r
  height: 100%;\r
  background: rgba(0, 0, 0, 0.35);\r
  z-index: 5;\r
  pointer-events: none;\r
  display: none;\r
}\r
\r
/* Settings button */\r
.iframe-wrapper .iframe-settings-btn {\r
  position: absolute;\r
  top: 5px;\r
  right: 5px;\r
  z-index: 10;\r
  display: none;\r
  background: #fff;\r
  border: 1px solid #ccc;\r
  border-radius: 4px;\r
  padding: 4px 6px;\r
  cursor: pointer;\r
  pointer-events: auto;\r
  text-align: center;\r
}\r
\r
/* Show both overlay and button on hover */\r
.iframe-wrapper:hover .iframe-overlay,\r
.iframe-wrapper:hover .iframe-settings-btn {\r
  display: block;\r
}`, ""]), d.exports = n;
    },
    /* 7 */
    /***/
    function(d, n, l) {
      var i = l(4);
      n = i(!1), n.push([d.i, `:root {\r
  --editor-background-color: #fff;\r
  --editor-border-color: #eee;\r
  --editor-text-color: #414141;\r
  --editor-toolbar-button-background: #fff;\r
  --editor-toolbar-text-color: #414141;\r
  --editor-toolbar-button-hover-background: #efefef;\r
  --editor-toolbar-button-selected-background: #dee0e2;\r
  --editor-svg-color: #414141;\r
  --editor-save-button-background: rgb(9, 134, 62);\r
}\r
\r
html,\r
body {\r
  padding: 0;\r
  margin: 0;\r
  box-sizing: border-box;\r
}\r
\r
.style-module__reactEditorMain___20UxI img {\r
  max-width: 100%;\r
  height: auto;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__selectOption___7easq p,\r
.style-module__reactEditorMain___20UxI .style-module__selectOption___7easq pre,\r
.style-module__reactEditorMain___20UxI .style-module__selectOption___7easq h2,\r
.style-module__reactEditorMain___20UxI .style-module__selectOption___7easq h3,\r
.style-module__reactEditorMain___20UxI .style-module__selectOption___7easq h4,\r
.style-module__reactEditorMain___20UxI .style-module__selectOption___7easq h5,\r
.style-module__reactEditorMain___20UxI .style-module__selectOption___7easq h6,\r
.style-module__reactEditorMain___20UxI .style-module__selectOption___7easq blockquote,\r
.style-module__reactEditorMain___20UxI .style-module__selectOption___7easq h1 {\r
  margin: 0;\r
  color: var(--editor-toolbar-text-color) !important;\r
}\r
\r
.style-module__reactEditorMain___20UxI {\r
  background-color: var(--editor-background-color);\r
  border: 2px solid var(--editor-border-color);\r
  color: var(--editor-text-color);\r
  line-height: 16px !important;\r
  font-family: system-ui !important;\r
  border-radius: 10px;\r
}\r
\r
.style-module__mlMainContentBox___3RMYj p {\r
  margin: 0 0 1em 0 !important;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__actionComponents___nnaIk {\r
  margin: 0px 12px;\r
  box-shadow: 0 2px 2px -2px rgba(34, 47, 62, 0.1),\r
    0 8px 8px -4px rgba(34, 47, 62, 0.07);\r
}\r
.style-module__reactEditorMain___20UxI .style-module__wysiwygEditorToolbar___3YLm2 {\r
  /* border-bottom: 1px solid var(--editor-border-color); */\r
  font-size: 18px;\r
  display: flex;\r
  align-items: center;\r
  flex-wrap: wrap;\r
  margin: 6px 0px;\r
  position: relative;\r
}\r
.style-module__reactEditorMain___20UxI .style-module__wysiwygEditorToolbarWrapper___Sl-RX {\r
  background-position: center top 42px;\r
  background-size: calc(100% - 0px * 2) calc(100% - 0px);\r
  background-attachment: local;\r
  background-color: #fff;\r
  background-image: repeating-linear-gradient(\r
    #e3e3e3 0 1px,\r
    transparent 1px 44px\r
  );\r
  background-repeat: no-repeat;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__wysiwygEditorToolbar___3YLm2 .style-module__hr1___2GDDO {\r
  position: absolute;\r
  width: 98%;\r
  border-color: var(--editor-border-color);\r
  border: none;\r
  border-top: 1px solid var(--editor-border-color);\r
  height: 1px;\r
  display: none;\r
  top: 32px;\r
  margin: 0;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__wysiwygEditorToolbar___3YLm2 .style-module__hr2___2wfnq {\r
  top: 64px;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__wysiwygEditorToolbar___3YLm2 .style-module__buttonGroup___2VL8t {\r
  display: inline-block;\r
  border-right: 1px solid var(--editor-border-color);\r
}\r
.style-module__reactEditorMain___20UxI .style-module__wysiwygEditorToolbar___3YLm2 button {\r
  background: var(--editor-toolbar-button-background);\r
  outline: none;\r
  border: none;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  padding: 6px 10px;\r
  color: var(--editor-toolbar-text-color);\r
  line-height: 16px;\r
}\r
.style-module__reactEditorMain___20UxI .style-module__wysiwygEditorToolbarWrapper___Sl-RX button {\r
  margin-block: 6px;\r
}\r
.style-module__wysiwygEditorToolbar___3YLm2 button:disabled,\r
.style-module__wysiwygEditorToolbar___3YLm2 button.style-module__disabled___31WG5 {\r
  cursor: not-allowed;\r
}\r
.style-module__wysiwygEditorToolbar___3YLm2 button:disabled svg,\r
.style-module__wysiwygEditorToolbar___3YLm2 button.style-module__disabled___31WG5 svg {\r
  fill: #9fa2a6;\r
}\r
\r
.style-module__wysiwygEditorToolbar___3YLm2 button:hover {\r
  background-color: var(--editor-toolbar-button-hover-background);\r
}\r
\r
.style-module__wysiwygEditorToolbar___3YLm2 input {\r
  background-color: transparent;\r
  border: 1px solid var(--editor-border-color);\r
  outline: none;\r
  cursor: pointer;\r
}\r
\r
.style-module__wysiwygEditorToolbar___3YLm2 select,\r
.style-module__wysiwygEditorToolbar___3YLm2 select:focus-visible {\r
  border: none !important;\r
  outline: none;\r
}\r
\r
.style-module__mlMainContentBox___3RMYj {\r
  padding: 8px 12px;\r
  margin: 2px;\r
  height: 250px;\r
  overflow: auto;\r
  resize: vertical;\r
  max-width: 100% !important;\r
  line-height: normal;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__placeholderText___20Ilw {\r
  opacity: 0.8;\r
  font-style: italic;\r
}\r
\r
.style-module__mlMainContentBox___3RMYj h1,\r
.style-module__mlMainContentBox___3RMYj h2,\r
.style-module__mlMainContentBox___3RMYj h3,\r
.style-module__mlMainContentBox___3RMYj h4,\r
.style-module__mlMainContentBox___3RMYj h5,\r
.style-module__mlMainContentBox___3RMYj h6,\r
.style-module__mlMainContentBox___3RMYj p {\r
  margin-top: 0;\r
  color: var(--editor-text-color);\r
}\r
\r
.style-module__mlMainContentBox___3RMYj h1 {\r
  font-size: 2em;\r
}\r
\r
.style-module__mlMainContentBox___3RMYj h2 {\r
  font-size: 1.5em;\r
}\r
\r
.style-module__mlMainContentBox___3RMYj h3 {\r
  font-size: 1.17em;\r
}\r
\r
.style-module__mlMainContentBox___3RMYj h4 {\r
  font-size: 1em;\r
}\r
\r
.style-module__mlMainContentBox___3RMYj h5 {\r
  font-size: 0.83em;\r
}\r
\r
.style-module__mlMainContentBox___3RMYj h6 {\r
  font-size: 0.67em;\r
}\r
\r
.style-module__mlMainContentBox___3RMYj p {\r
  font-size: 1em;\r
}\r
\r
.style-module__linkImage___M2hpC {\r
  height: 80px;\r
  width: 80px;\r
  object-fit: cover;\r
  border: 1px solid var(--editor-border-color);\r
  border-radius: 5px;\r
}\r
\r
.style-module__linkImageBox___d0yYz {\r
  height: 80px;\r
  width: 80px;\r
  position: relative;\r
  margin-top: 10px;\r
}\r
.style-module__linkImageCross___WbyR3 {\r
  position: absolute;\r
  top: -5px;\r
  right: -7px;\r
  height: 20px;\r
  width: 20px;\r
  background-color: red;\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
  border-radius: 50%;\r
  color: #fff;\r
  cursor: pointer;\r
  padding-bottom: 3px;\r
}\r
\r
.style-module__mlMainContentBox___3RMYj:focus-visible {\r
  outline: none;\r
}\r
\r
.style-module__wysiwygEditorSource___2DKV1 {\r
  width: 98%;\r
  height: 80%;\r
  outline: none;\r
  padding: 10px;\r
  font-family: "Courier New", Monospace !important;\r
  font-size: small;\r
  white-space: pre-wrap;\r
  margin: 0;\r
  display: block;\r
  font-size: 16px;\r
  resize: none;\r
}\r
\r
/* Modal.css */\r
\r
.style-module__modalOverlay___TXsmk {\r
  font-family: system-ui !important;\r
  position: fixed;\r
  top: 0;\r
  left: 0;\r
  width: 100%;\r
  height: 100%;\r
  background-color: rgba(0, 0, 0, 0.5);\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
  z-index: 999999;\r
}\r
\r
.style-module__imageModelOverlay___8jCM7 {\r
  z-index: 999999;\r
}\r
\r
.style-module__fillScreenView___13J2K {\r
  z-index: 999999;\r
}\r
\r
.style-module__modelTitle___3jHG7 {\r
  display: flex;\r
  justify-content: space-between;\r
}\r
\r
.style-module__modelTitle___3jHG7 h2 {\r
  margin: 0;\r
}\r
\r
.style-module__modelTitle___3jHG7 svg {\r
  font-size: 25px;\r
  cursor: pointer;\r
}\r
\r
.style-module__modalPopup___1C0ia {\r
  background-color: #fff;\r
  padding: 20px;\r
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r
  width: 400px;\r
  max-width: 85%;\r
  color: #000;\r
  border-radius: 5px;\r
}\r
\r
.style-module__fillScreenView___13J2K .style-module__modalPopup___1C0ia {\r
  max-width: 100% !important;\r
  width: 100vw !important;\r
  height: 100vh !important;\r
  z-index: 1;\r
  padding: 0 !important;\r
  overflow: hidden;\r
  border-radius: 0 !important;\r
}\r
\r
.style-module__modalPopup___1C0ia hr {\r
  margin-bottom: 0;\r
}\r
\r
.style-module__modalCloseBtn___2Qx0Z {\r
  position: absolute;\r
  top: 10px;\r
  right: 10px;\r
  background: none;\r
  border: none;\r
  cursor: pointer;\r
  padding: 5px 10px;\r
  font-size: 16px;\r
}\r
\r
.style-module__wysiwygEditorToolbar___3YLm2 button svg {\r
  fill: var(--editor-svg-color);\r
  color: var(--editor-svg-color);\r
  display: inline-block;\r
  height: 15px;\r
  width: 14px;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__customSelect___vdO64 {\r
  position: relative;\r
  display: inline-block;\r
  cursor: pointer;\r
  font-size: 16px;\r
  padding: 6px;\r
  color: var(--editor-toolbar-text-color);\r
  line-height: 16px;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__customSelectFormat___3e6iP {\r
  position: relative;\r
  display: inline-block;\r
  cursor: pointer;\r
  font-size: 14px;\r
  padding: 6px;\r
  line-height: 16px;\r
  margin-inline: 2px;\r
  background-color: #f7f7f7 !important;\r
}\r
.style-module__reactEditorMain___20UxI .style-module__customSelectFormat___3e6iP:hover {\r
  background-color: var(--editor-toolbar-button-hover-background) !important;\r
}\r
.style-module__reactEditorMain___20UxI .style-module__customSelectFormat___3e6iP .style-module__selectSelected___2eABi {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
}\r
.style-module__reactEditorMain___20UxI .style-module__customSelectFormat___3e6iP .style-module__selectSelected___2eABi svg {\r
  width: 10px;\r
  height: 10px;\r
  margin-inline-start: 12px;\r
  opacity: 0.5;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__mainColorComponent___KneIc svg {\r
  height: 15px !important;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__selectItems___3G3Z7 {\r
  position: absolute;\r
  background-color: #fff;\r
  border: 1px solid var(--editor-border-color);\r
  border-radius: 2px;\r
  z-index: 2;\r
  width: 160px;\r
  max-height: 200px;\r
  overflow-y: auto;\r
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r
  top: 29px;\r
  left: 0;\r
  display: none;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__selectItems___3G3Z7 button {\r
  display: flex !important;\r
  width: 100%;\r
  padding: 7px;\r
  font-family: system-ui !important;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__pItems___1bRzo .style-module__selectItems___3G3Z7 {\r
  left: 142px;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__selectItemsFormat___3EcHF {\r
  position: absolute;\r
  background-color: var(--editor-background-color);\r
  border: 1px solid var(--editor-border-color);\r
  border-top: none;\r
  border-radius: 2px;\r
  z-index: 1;\r
  max-height: 200px;\r
  overflow-y: auto;\r
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r
  left: 0;\r
  top: 30px;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__selectItemsFormat___3EcHF .style-module__selectOption___7easq:hover {\r
  background-color: var(--editor-toolbar-button-hover-background) !important;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__selectItemsFormat___3EcHF h1 {\r
  font-size: 32px !important;\r
  font-weight: 600;\r
  line-height: 32px;\r
}\r
.style-module__reactEditorMain___20UxI .style-module__selectItemsFormat___3EcHF h2 {\r
  font-size: 28px !important;\r
  font-weight: 600;\r
  line-height: 28px;\r
}\r
.style-module__reactEditorMain___20UxI .style-module__selectItemsFormat___3EcHF h3 {\r
  font-size: 24px !important;\r
  font-weight: 600;\r
  line-height: 24px;\r
}\r
.style-module__reactEditorMain___20UxI .style-module__selectItemsFormat___3EcHF h4 {\r
  font-size: 20px !important;\r
  line-height: 20px;\r
}\r
.style-module__reactEditorMain___20UxI .style-module__selectItemsFormat___3EcHF h5 {\r
  font-size: 16px !important;\r
}\r
.style-module__reactEditorMain___20UxI .style-module__selectItemsFormat___3EcHF h6 {\r
  font-size: 14px;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__selectItems___3G3Z7.style-module__show___3qCvb {\r
  display: block;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__selectItems___3G3Z7 .style-module__selectOption___7easq,\r
.style-module__reactEditorMain___20UxI .style-module__selectItemsFormat___3EcHF .style-module__selectOption___7easq {\r
  padding: 6px 10px;\r
  cursor: pointer;\r
  font-size: 16px;\r
  white-space: nowrap;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__selectItems___3G3Z7 .style-module__selectInsert___2lLJI svg {\r
  height: 20px;\r
  width: 20px;\r
  margin-right: 7px;\r
  color: var(--editor-svg-color);\r
  fill: var(--editor-svg-color);\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__selectItems___3G3Z7 button svg {\r
  height: 16px !important;\r
  width: 16px !important;\r
  margin-top: 2px;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__selectItems___3G3Z7 .style-module__selectInsert___2lLJI span {\r
  margin-top: 2px;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__selectedOption___bGTuj {\r
  background-color: var(--editor-toolbar-button-selected-background) !important;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__selectItems___3G3Z7 .style-module__selectOption___7easq:hover,\r
.style-module__reactEditorMain___20UxI .style-module__selectInsert___2lLJI:hover {\r
  background-color: var(--editor-toolbar-button-hover-background) !important;\r
}\r
\r
.style-module__formControlInput___JxKoB {\r
  font-family: system-ui !important;\r
  width: 100%;\r
  padding: 7px;\r
  border: 1px solid var(--editor-border-color);\r
  border-radius: 3px;\r
}\r
\r
.style-module__formControlInput___JxKoB:focus-visible {\r
  outline: none;\r
}\r
\r
.style-module__saveButton___jY5in {\r
  background-color: var(--editor-save-button-background);\r
  color: #fff;\r
  padding: 7px 14px;\r
  border: none;\r
  margin-top: 10px;\r
  border-radius: 3px;\r
  cursor: pointer;\r
}\r
\r
.style-module__saveButton___jY5in:disabled {\r
  opacity: 0.4;\r
  cursor: not-allowed;\r
}\r
\r
.style-module__cancel__btn___3wtVx {\r
  background-color: red;\r
  color: #fff;\r
  padding: 7px 14px;\r
  border: none;\r
  margin-top: 10px;\r
  border-radius: 3px;\r
  cursor: pointer;\r
}\r
\r
.style-module__selectType___2EuiV button {\r
  padding: 6px 20px;\r
  background-color: var(--editor-toolbar-button-background);\r
  border: 1px solid var(--editor-border-color);\r
  cursor: pointer;\r
}\r
\r
.style-module__selectType___2EuiV button.style-module__selectedType___1pN_w {\r
  background-color: #efefef;\r
}\r
\r
.style-module__specialCharBox___5ivgz {\r
  display: flex;\r
  flex-wrap: wrap;\r
}\r
\r
.style-module__specialChar___3kuh4 {\r
  width: 30px;\r
  height: 30px;\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
  cursor: pointer;\r
  border-radius: 2px;\r
}\r
\r
.style-module__specialChar___3kuh4:hover {\r
  background-color: #dee0e2;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__selectInsert___2lLJI {\r
  min-width: 120px;\r
  font-size: 16px;\r
  text-align: left;\r
  padding: 8px 10px;\r
  white-space: nowrap;\r
  display: flex;\r
  border-top: 1px solid var(--editor-border-color) !important;\r
  color: var(--editor-text-color) !important;\r
  background-color: var(--editor-background-color);\r
  border-radius: 0 !important;\r
  margin: 0 !important;\r
}\r
\r
/* width */\r
.style-module__reactEditorMain___20UxI ::-webkit-scrollbar {\r
  width: 5px;\r
}\r
\r
/* Track */\r
.style-module__reactEditorMain___20UxI ::-webkit-scrollbar-track {\r
  background: #f1f1f1;\r
}\r
\r
/* Handle */\r
.style-module__reactEditorMain___20UxI ::-webkit-scrollbar-thumb {\r
  background: #c4c4c4;\r
}\r
\r
/* Handle on hover */\r
.style-module__reactEditorMain___20UxI ::-webkit-scrollbar-thumb:hover {\r
  background: #555;\r
}\r
\r
.style-module__fullScreenModel___2BTIF {\r
  width: 95% !important;\r
  height: 85vh;\r
}\r
\r
.style-module__mlMainContentBox___3RMYj blockquote {\r
  border-left: 2px solid var(--editor-border-color);\r
  border-left-width: 5px;\r
  margin-left: 1.5rem;\r
  padding: 2px 0;\r
  padding-left: 1rem;\r
  font-style: italic;\r
  font-family: Georgia, Times, "Times New Roman", serif;\r
  color: var(--editor-text-color);\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__selectItemsNested___3AX3C.style-module__left___19fvP {\r
  left: -100%;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__selectFormationDropdown___2zsBU {\r
  position: absolute;\r
  background-color: var(--editor-background-color);\r
  border: 1px solid var(--editor-border-color);\r
  border-radius: 4px;\r
  left: 154px;\r
  display: none;\r
  min-width: 140px;\r
  z-index: 2;\r
  max-height: 200px;\r
  overflow-x: hidden;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__fontSizeDropdown___2JM1U {\r
  min-width: 90px;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__fontSizeDropdown___2JM1U .style-module__selectOption___7easq {\r
  padding: 10px;\r
  border-bottom: 1px solid var(--editor-border-color);\r
  font-size: 16px;\r
  width: 98%;\r
  margin: 0;\r
  border-radius: 0 !important;\r
  font-family: system-ui !important;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__selectFormationDropdown___2zsBU.style-module__show___3qCvb {\r
  display: block;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__fontFamilyOption___1iKD6 {\r
  display: block;\r
  width: 99%;\r
  padding: 9px !important;\r
  border-top: 1px solid var(--editor-border-color) !important;\r
  margin: 0 !important;\r
  border-radius: 0 !important;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__fontFamilyOption___1iKD6:hover {\r
  background-color: var(--editor-toolbar-button-hover-background);\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__bottomColoredLine___2ZzSJ {\r
  height: 3px;\r
  width: 14px;\r
  background-color: var(--editor-svg-color);\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__mainColorComponent___KneIc {\r
  position: relative;\r
  display: inline-block;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__openColorBox___HXFEl {\r
  position: absolute;\r
  height: 140px;\r
  width: 140px;\r
  background-color: var(--editor-background-color);\r
  border: 1px solid var(--editor-border-color);\r
  top: 30px;\r
  left: -1px;\r
  display: none;\r
  z-index: 1;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__colorBoxGrid___2aldn button {\r
  padding: 0 !important;\r
  margin: 0 !important;\r
  border-radius: 0 !important;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__openColorBox___HXFEl.style-module__show___3qCvb {\r
  display: block;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__colorBox___34xoe {\r
  height: 28px;\r
  width: 28px;\r
  cursor: pointer;\r
  background-color: var(--editor-background-color);\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__customColorPicker___1m1Pk {\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__customColorPicker___1m1Pk svg {\r
  height: 20px;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__increaseIconSize___jwjQX svg {\r
  height: 20px !important;\r
  width: 17px !important;\r
  /* margin-top: 3px; */\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__increaseIconSize___jwjQX button {\r
  padding: 3px 10px;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__colorBox___34xoe:hover {\r
  transform: scale(1.2);\r
  transition: transform 0.5s ease;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__verticalLine___3Ck-S {\r
  height: 32px;\r
  width: 12px;\r
  /* background-color: var(--editor-border-color); */\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__reactEditorMt2___6i1Q_ {\r
  margin-top: 2px;\r
}\r
.style-module__reactEditorMt10___2Crph {\r
  margin-top: 10px;\r
}\r
.style-module__reactEditorMain___20UxI .style-module__reactEditorMe5___280IF {\r
  margin-right: 5px;\r
}\r
\r
.style-module__reactEditorTextEnd___1pcIh {\r
  text-align: right;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__reactEditorTextLeft___3E-uy {\r
  text-align: left;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__reactEditorDFlex___XY9O6,\r
.style-module__reactEditorDFlex___XY9O6 {\r
  display: flex;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__reactEditorW47___2e5OR,\r
.style-module__reactEditorW47___2e5OR {\r
  width: 47%;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__reactEditorW45___18O_s,\r
.style-module__reactEditorW45___18O_s {\r
  width: 40%;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__justifyContentBetween___17lWt,\r
.style-module__justifyContentBetween___17lWt {\r
  justify-content: space-between;\r
}\r
\r
.style-module__reactEditorMain___20UxI .style-module__reactEditorFlexColumn___kYPWH,\r
.style-module__reactEditorFlexColumn___kYPWH {\r
  flex-direction: column;\r
}\r
\r
.style-module__editorErrorMessage___3IFX_ {\r
  color: red;\r
}\r
\r
.style-module__mlMainContentBox___3RMYj:empty:before {\r
  content: attr(data-placeholder);\r
  color: #aaa;\r
  pointer-events: none;\r
}\r
[contenteditable][data-mlx-editor-empty="true"]::before {\r
  content: attr(data-placeholder);\r
  color: #aaa;\r
  pointer-events: none;\r
  position: absolute;\r
}\r
\r
.style-module__fullScreen___2IkPb {\r
  position: fixed !important;\r
  top: 0;\r
  left: 0;\r
  width: 100% !important;\r
  height: 100% !important;\r
  background-color: var(--editor-toolbar-button-background);\r
  overflow: hidden;\r
  z-index: 99999 !important;\r
}\r
\r
.style-module__rightClickPopupBackground___2kc56 {\r
  position: absolute;\r
  cursor: pointer;\r
  background-color: var(--editor-toolbar-button-background);\r
  border: 1px solid var(--editor-border-color);\r
  border-radius: 5px;\r
  z-index: 1000;\r
  min-width: 100px;\r
  padding: 3px 0px;\r
}\r
\r
.style-module__rightClickPopupBackground___2kc56 hr {\r
  margin: 0;\r
  border: none;\r
  border-top: 1px solid var(--editor-border-color);\r
  width: 100%;\r
}\r
\r
.style-module__rightClickPopup___2fZw0 {\r
  padding: 5px 10px;\r
  font-family: system-ui;\r
  font-size: 15px;\r
  color: var(--editor-text-color);\r
}\r
\r
.style-module__rightClickPopup___2fZw0:hover {\r
  background: var(--editor-toolbar-button-hover-background);\r
}\r
\r
.style-module__rightClickPopup___2fZw0 svg {\r
  margin-right: 5px;\r
  height: 20px;\r
  width: 20px;\r
  vertical-align: bottom;\r
}\r
\r
.style-module__rightClickPopup___2fZw0.style-module__openLink___1piNb svg {\r
  height: 15px;\r
  margin-bottom: 1px;\r
}\r
\r
.style-module__lockUnlockIcon___1F-wI svg {\r
  height: 16px;\r
  margin-top: 38px;\r
  cursor: pointer;\r
}\r
\r
input::-webkit-outer-spin-button,\r
input::-webkit-inner-spin-button {\r
  -webkit-appearance: none;\r
  margin: 0;\r
}\r
\r
/* Firefox */\r
input[type="number"] {\r
  -moz-appearance: textfield;\r
}\r
\r
.style-module__content__editable__container___2AcZS {\r
  position: relative;\r
}\r
\r
.style-module__image__submit__container___2vOVM {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: flex-end;\r
  margin-top: 10px;\r
}\r
\r
.style-module__image__submit__container___2vOVM img {\r
  width: 80px;\r
  height: 80px;\r
  border-radius: 5px;\r
  border: 1px solid;\r
  cursor: pointer;\r
  background-color: rgb(0 0 0 / 13%);\r
  object-fit: cover;\r
}\r
\r
.style-module__image__cropper_btn___Jv5gI {\r
  display: flex;\r
  justify-content: center;\r
  gap: 10px;\r
}\r
\r
.style-module__image__cropper__box___JKomv img {\r
  background-color: rgb(0 0 0 / 13%);\r
}\r
\r
.style-module__image__preview__box___2hEkQ {\r
  position: relative;\r
}\r
\r
.style-module__image__preview__box___2hEkQ:last-child {\r
  max-height: 400px;\r
  overflow: auto;\r
}\r
\r
.style-module__image__preview__box___2hEkQ svg {\r
  position: absolute;\r
  top: 2px;\r
  right: 2px;\r
  height: 20px;\r
  fill: #fff;\r
}\r
`, ""]), n.locals = {
        reactEditorMain: "style-module__reactEditorMain___20UxI",
        selectOption: "style-module__selectOption___7easq",
        mlMainContentBox: "style-module__mlMainContentBox___3RMYj",
        actionComponents: "style-module__actionComponents___nnaIk",
        wysiwygEditorToolbar: "style-module__wysiwygEditorToolbar___3YLm2",
        wysiwygEditorToolbarWrapper: "style-module__wysiwygEditorToolbarWrapper___Sl-RX",
        hr1: "style-module__hr1___2GDDO",
        hr2: "style-module__hr2___2wfnq",
        buttonGroup: "style-module__buttonGroup___2VL8t",
        disabled: "style-module__disabled___31WG5",
        placeholderText: "style-module__placeholderText___20Ilw",
        linkImage: "style-module__linkImage___M2hpC",
        linkImageBox: "style-module__linkImageBox___d0yYz",
        linkImageCross: "style-module__linkImageCross___WbyR3",
        wysiwygEditorSource: "style-module__wysiwygEditorSource___2DKV1",
        modalOverlay: "style-module__modalOverlay___TXsmk",
        imageModelOverlay: "style-module__imageModelOverlay___8jCM7",
        fillScreenView: "style-module__fillScreenView___13J2K",
        modelTitle: "style-module__modelTitle___3jHG7",
        modalPopup: "style-module__modalPopup___1C0ia",
        modalCloseBtn: "style-module__modalCloseBtn___2Qx0Z",
        customSelect: "style-module__customSelect___vdO64",
        customSelectFormat: "style-module__customSelectFormat___3e6iP",
        selectSelected: "style-module__selectSelected___2eABi",
        mainColorComponent: "style-module__mainColorComponent___KneIc",
        selectItems: "style-module__selectItems___3G3Z7",
        pItems: "style-module__pItems___1bRzo",
        selectItemsFormat: "style-module__selectItemsFormat___3EcHF",
        show: "style-module__show___3qCvb",
        selectInsert: "style-module__selectInsert___2lLJI",
        selectedOption: "style-module__selectedOption___bGTuj",
        formControlInput: "style-module__formControlInput___JxKoB",
        saveButton: "style-module__saveButton___jY5in",
        cancel__btn: "style-module__cancel__btn___3wtVx",
        selectType: "style-module__selectType___2EuiV",
        selectedType: "style-module__selectedType___1pN_w",
        specialCharBox: "style-module__specialCharBox___5ivgz",
        specialChar: "style-module__specialChar___3kuh4",
        fullScreenModel: "style-module__fullScreenModel___2BTIF",
        selectItemsNested: "style-module__selectItemsNested___3AX3C",
        left: "style-module__left___19fvP",
        selectFormationDropdown: "style-module__selectFormationDropdown___2zsBU",
        fontSizeDropdown: "style-module__fontSizeDropdown___2JM1U",
        fontFamilyOption: "style-module__fontFamilyOption___1iKD6",
        bottomColoredLine: "style-module__bottomColoredLine___2ZzSJ",
        openColorBox: "style-module__openColorBox___HXFEl",
        colorBoxGrid: "style-module__colorBoxGrid___2aldn",
        colorBox: "style-module__colorBox___34xoe",
        customColorPicker: "style-module__customColorPicker___1m1Pk",
        increaseIconSize: "style-module__increaseIconSize___jwjQX",
        verticalLine: "style-module__verticalLine___3Ck-S",
        reactEditorMt2: "style-module__reactEditorMt2___6i1Q_",
        reactEditorMt10: "style-module__reactEditorMt10___2Crph",
        reactEditorMe5: "style-module__reactEditorMe5___280IF",
        reactEditorTextEnd: "style-module__reactEditorTextEnd___1pcIh",
        reactEditorTextLeft: "style-module__reactEditorTextLeft___3E-uy",
        reactEditorDFlex: "style-module__reactEditorDFlex___XY9O6",
        reactEditorW47: "style-module__reactEditorW47___2e5OR",
        reactEditorW45: "style-module__reactEditorW45___18O_s",
        justifyContentBetween: "style-module__justifyContentBetween___17lWt",
        reactEditorFlexColumn: "style-module__reactEditorFlexColumn___kYPWH",
        editorErrorMessage: "style-module__editorErrorMessage___3IFX_",
        fullScreen: "style-module__fullScreen___2IkPb",
        rightClickPopupBackground: "style-module__rightClickPopupBackground___2kc56",
        rightClickPopup: "style-module__rightClickPopup___2fZw0",
        openLink: "style-module__openLink___1piNb",
        lockUnlockIcon: "style-module__lockUnlockIcon___1F-wI",
        content__editable__container: "style-module__content__editable__container___2AcZS",
        image__submit__container: "style-module__image__submit__container___2vOVM",
        image__cropper_btn: "style-module__image__cropper_btn___Jv5gI",
        image__cropper__box: "style-module__image__cropper__box___JKomv",
        image__preview__box: "style-module__image__preview__box___2hEkQ"
      }, d.exports = n;
    },
    /* 8 */
    /***/
    function(d, n, l) {
      var i = l(3), e = l(9);
      e = e.__esModule ? e.default : e, typeof e == "string" && (e = [[d.i, e, ""]]);
      var b = {};
      b.insert = "head", b.singleton = !1, i(e, b), d.exports = e.locals || {};
    },
    /* 9 */
    /***/
    function(d, n, l) {
      var i = l(4);
      n = i(!1), n.push([d.i, `@keyframes marching-ants{0%{background-position:0 0,0 100%,0 0,100% 0}to{background-position:20px 0,-20px 100%,0 -20px,100% 20px}}:root{--rc-drag-handle-size: 12px;--rc-drag-handle-mobile-size: 24px;--rc-drag-handle-bg-colour: rgba(0, 0, 0, .2);--rc-drag-bar-size: 6px;--rc-border-color: rgba(255, 255, 255, .7);--rc-focus-color: #0088ff}.ReactCrop{position:relative;display:inline-block;cursor:crosshair;max-width:100%}.ReactCrop *,.ReactCrop *:before,.ReactCrop *:after{box-sizing:border-box}.ReactCrop--disabled,.ReactCrop--locked{cursor:inherit}.ReactCrop__child-wrapper{overflow:hidden;max-height:inherit}.ReactCrop__child-wrapper>img,.ReactCrop__child-wrapper>video{display:block;max-width:100%;max-height:inherit}.ReactCrop:not(.ReactCrop--disabled) .ReactCrop__child-wrapper>img,.ReactCrop:not(.ReactCrop--disabled) .ReactCrop__child-wrapper>video{touch-action:none}.ReactCrop:not(.ReactCrop--disabled) .ReactCrop__crop-selection{touch-action:none}.ReactCrop__crop-mask{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;width:calc(100% + .5px);height:calc(100% + .5px)}.ReactCrop__crop-selection{position:absolute;top:0;left:0;transform:translateZ(0);cursor:move}.ReactCrop--disabled .ReactCrop__crop-selection{cursor:inherit}.ReactCrop--circular-crop .ReactCrop__crop-selection{border-radius:50%}.ReactCrop--circular-crop .ReactCrop__crop-selection:after{pointer-events:none;content:"";position:absolute;top:-1px;right:-1px;bottom:-1px;left:-1px;border:1px solid var(--rc-border-color);opacity:.3}.ReactCrop--no-animate .ReactCrop__crop-selection{outline:1px dashed white}.ReactCrop__crop-selection:not(.ReactCrop--no-animate .ReactCrop__crop-selection){animation:marching-ants 1s;background-image:linear-gradient(to right,#fff 50%,#444 50%),linear-gradient(to right,#fff 50%,#444 50%),linear-gradient(to bottom,#fff 50%,#444 50%),linear-gradient(to bottom,#fff 50%,#444 50%);background-size:10px 1px,10px 1px,1px 10px,1px 10px;background-position:0 0,0 100%,0 0,100% 0;background-repeat:repeat-x,repeat-x,repeat-y,repeat-y;color:#fff;animation-play-state:running;animation-timing-function:linear;animation-iteration-count:infinite}.ReactCrop__crop-selection:focus{outline:2px solid var(--rc-focus-color);outline-offset:-1px}.ReactCrop--invisible-crop .ReactCrop__crop-mask,.ReactCrop--invisible-crop .ReactCrop__crop-selection{display:none}.ReactCrop__rule-of-thirds-vt:before,.ReactCrop__rule-of-thirds-vt:after,.ReactCrop__rule-of-thirds-hz:before,.ReactCrop__rule-of-thirds-hz:after{content:"";display:block;position:absolute;background-color:#fff6}.ReactCrop__rule-of-thirds-vt:before,.ReactCrop__rule-of-thirds-vt:after{width:1px;height:100%}.ReactCrop__rule-of-thirds-vt:before{left:33.3333333333%}.ReactCrop__rule-of-thirds-vt:after{left:66.6666666667%}.ReactCrop__rule-of-thirds-hz:before,.ReactCrop__rule-of-thirds-hz:after{width:100%;height:1px}.ReactCrop__rule-of-thirds-hz:before{top:33.3333333333%}.ReactCrop__rule-of-thirds-hz:after{top:66.6666666667%}.ReactCrop__drag-handle{position:absolute;width:var(--rc-drag-handle-size);height:var(--rc-drag-handle-size);background-color:var(--rc-drag-handle-bg-colour);border:1px solid var(--rc-border-color)}.ReactCrop__drag-handle:focus{background:var(--rc-focus-color)}.ReactCrop .ord-nw{top:0;left:0;transform:translate(-50%,-50%);cursor:nw-resize}.ReactCrop .ord-n{top:0;left:50%;transform:translate(-50%,-50%);cursor:n-resize}.ReactCrop .ord-ne{top:0;right:0;transform:translate(50%,-50%);cursor:ne-resize}.ReactCrop .ord-e{top:50%;right:0;transform:translate(50%,-50%);cursor:e-resize}.ReactCrop .ord-se{bottom:0;right:0;transform:translate(50%,50%);cursor:se-resize}.ReactCrop .ord-s{bottom:0;left:50%;transform:translate(-50%,50%);cursor:s-resize}.ReactCrop .ord-sw{bottom:0;left:0;transform:translate(-50%,50%);cursor:sw-resize}.ReactCrop .ord-w{top:50%;left:0;transform:translate(-50%,-50%);cursor:w-resize}.ReactCrop__disabled .ReactCrop__drag-handle{cursor:inherit}.ReactCrop__drag-bar{position:absolute}.ReactCrop__drag-bar.ord-n{top:0;left:0;width:100%;height:var(--rc-drag-bar-size);transform:translateY(-50%)}.ReactCrop__drag-bar.ord-e{right:0;top:0;width:var(--rc-drag-bar-size);height:100%;transform:translate(50%)}.ReactCrop__drag-bar.ord-s{bottom:0;left:0;width:100%;height:var(--rc-drag-bar-size);transform:translateY(50%)}.ReactCrop__drag-bar.ord-w{top:0;left:0;width:var(--rc-drag-bar-size);height:100%;transform:translate(-50%)}.ReactCrop--new-crop .ReactCrop__drag-bar,.ReactCrop--new-crop .ReactCrop__drag-handle,.ReactCrop--fixed-aspect .ReactCrop__drag-bar,.ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-n,.ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-e,.ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-s,.ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-w{display:none}@media (pointer: coarse){.ReactCrop .ord-n,.ReactCrop .ord-e,.ReactCrop .ord-s,.ReactCrop .ord-w{display:none}.ReactCrop__drag-handle{width:var(--rc-drag-handle-mobile-size);height:var(--rc-drag-handle-mobile-size)}}
`, ""]), d.exports = n;
    },
    /* 10 */
    /***/
    function(d, n, l) {
      l.r(n), l.d(n, "default", function() {
        return (
          /* binding */
          Pl
        );
      });
      var i = l(0), e = /* @__PURE__ */ l.n(i);
      l(5);
      var b = l(1), o = /* @__PURE__ */ l.n(b);
      function R() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          viewBox: "0 0 16 16"
        }, /* @__PURE__ */ e.a.createElement("path", {
          fill: "currentColor",
          "fill-rule": "evenodd",
          d: "M1.75 1H1v2.25a.75.75 0 0 0 1.5 0V2.5h.75a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 1 1.75 6m7.106 2.856l1.507 3.517l2.01-2.01zm-.558-1.871l5.344 2.29a1 1 0 0 1 .314 1.627l-.997.996l1.821 1.822a.75.75 0 1 1-1.06 1.06l-1.822-1.821l-.996.997a1 1 0 0 1-1.627-.314l-2.29-5.344c-.356-.83.483-1.669 1.313-1.313M1.75 15H1v-2.25a.75.75 0 0 1 1.5 0v.75h.75a.75.75 0 0 1 0 1.5zM6 1.75A.75.75 0 0 1 6.75 1h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 6 1.75M14.25 1H15v2.25a.75.75 0 0 1-1.5 0V2.5h-.75a.75.75 0 0 1 0-1.5z",
          "clip-rule": "evenodd"
        }));
      }
      function S() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 576 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M41.4 9.4C53.9-3.1 74.1-3.1 86.6 9.4L168 90.7l53.1-53.1c28.1-28.1 73.7-28.1 101.8 0L474.3 189.1c28.1 28.1 28.1 73.7 0 101.8L283.9 481.4c-37.5 37.5-98.3 37.5-135.8 0L30.6 363.9c-37.5-37.5-37.5-98.3 0-135.8L122.7 136 41.4 54.6c-12.5-12.5-12.5-32.8 0-45.3zm176 221.3L168 181.3 75.9 273.4c-4.2 4.2-7 9.3-8.4 14.6H386.7l42.3-42.3c3.1-3.1 3.1-8.2 0-11.3L277.7 82.9c-3.1-3.1-8.2-3.1-11.3 0L213.3 136l49.4 49.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0zM512 512c-35.3 0-64-28.7-64-64c0-25.2 32.6-79.6 51.2-108.7c6-9.4 19.5-9.4 25.5 0C543.4 368.4 576 422.8 576 448c0 35.3-28.7 64-64 64z"
        }));
      }
      function M() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-1.8l18-48H303.8l18 48H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H390.2L254 52.8zM279.8 304H168.2L224 155.1 279.8 304z"
        }));
      }
      function D() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 20 20"
        }, /* @__PURE__ */ e.a.createElement("path", {
          fill: "currentColor",
          d: "M16 9v8h-2V9h-4V7h10v2zM8 5v12H6V5H0V3h15v2z"
        }));
      }
      function E() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 15 15"
        }, /* @__PURE__ */ e.a.createElement("path", {
          fill: "currentColor",
          d: "M2.5 4.5C2.5 3.099 3.599 2 5 2h7.499a.5.5 0 0 1 .001 1H8.692l-.287.855A1887.39 1887.39 0 0 1 7.343 7H8.5a.5.5 0 0 1 0 1H7.004a286.12 286.12 0 0 1-1.046 3.039c-.322.9-.75 1.447-1.29 1.739c-.505.273-1.026.272-1.384.272H3.25a.55.55 0 0 1 0-1.1c.392 0 .654-.01.894-.14c.22-.119.511-.395.778-1.142c.185-.517.532-1.527.92-2.668H4.5a.5.5 0 0 1 0-1h1.682a1350.118 1350.118 0 0 0 1.18-3.496L7.533 3H5c-.849 0-1.5.651-1.5 1.5a.5.5 0 0 1-1 0"
        }));
      }
      function z() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24"
        }, /* @__PURE__ */ e.a.createElement("path", {
          fill: "currentColor",
          d: "M19 13H5v-2h14z"
        }));
      }
      function W() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24"
        }, /* @__PURE__ */ e.a.createElement("path", {
          fill: "currentColor",
          d: "M7 2a1 1 0 0 0-1 1v4H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2V3a1 1 0 0 0-1-1zm10 12H7a1 1 0 0 0-1 1v2H4V9h16v8h-2v-2a1 1 0 0 0-1-1m-1-7H8V4h8zM5 10v2h3v-2zm11 6v4H8v-4z"
        }));
      }
      function P() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 48 48"
        }, /* @__PURE__ */ e.a.createElement("g", {
          fill: "none",
          stroke: "currentColor",
          strokeLinejoin: "round",
          strokeWidth: "4"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M24 36c11.046 0 20-12 20-12s-8.954-12-20-12S4 24 4 24s8.954 12 20 12Z"
        }), /* @__PURE__ */ e.a.createElement("path", {
          d: "M24 29a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"
        })));
      }
      function ae() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 256 256"
        }, /* @__PURE__ */ e.a.createElement("path", {
          fill: "currentColor",
          d: "m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158ZM200 218H56a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2"
        }));
      }
      function U() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24"
        }, /* @__PURE__ */ e.a.createElement("path", {
          fill: "currentColor",
          d: "M18 7h4v2h-6V3h2zM8 9H2V7h4V3h2zm10 8v4h-2v-6h6v2zM8 15v6H6v-4H2v-2z"
        }));
      }
      function j() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24"
        }, /* @__PURE__ */ e.a.createElement("path", {
          fill: "currentColor",
          d: "M7 14H5v5h5v-2H7zm-2-4h2V7h3V5H5zm12 7h-3v2h5v-5h-2zM14 5v2h3v3h2V5z"
        }));
      }
      function $() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24"
        }, /* @__PURE__ */ e.a.createElement("path", {
          fill: "currentColor",
          d: "M12 5Q9.546 5 7.83 6.715q-1.715 1.716-1.715 4.17q0 1.844 1.037 3.352q1.036 1.507 2.77 2.15q.388.165.637.475q.249.311.249.711v1.215q0 .51-.351.861t-.86.351H5q-.413 0-.707-.293Q4 19.413 4 19t.293-.707Q4.587 18 5 18h3.615q-2.08-.99-3.29-2.904q-1.21-1.913-1.21-4.211q0-3.281 2.302-5.583T12 3q3.28 0 5.583 2.302t2.302 5.583q0 2.298-1.21 4.211q-1.21 1.914-3.29 2.904H19q.413 0 .707.293q.293.294.293.707t-.293.707Q19.413 20 19 20h-4.596q-.51 0-.86-.351q-.352-.35-.352-.86v-1.216q0-.4.25-.71q.248-.311.637-.476q1.733-.643 2.77-2.15q1.036-1.508 1.036-3.352q0-2.454-1.716-4.17Q14.454 5 12 5"
        }));
      }
      function de() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 16 16"
        }, /* @__PURE__ */ e.a.createElement("path", {
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "1.5",
          d: "m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"
        }));
      }
      function se() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1.17em",
          height: "1em",
          viewBox: "0 0 14 12"
        }, /* @__PURE__ */ e.a.createElement("path", {
          fill: "currentColor",
          d: "M9 2v9a1 1 0 0 1-2 0V6H6a3 3 0 1 1 0-6h7a1 1 0 0 1 0 2h-1v9a1 1 0 0 1-2 0V2zM1.657 9L.284 10.36a.955.955 0 0 0 0 1.358a.977.977 0 0 0 1.373 0L3.716 9.68a.955.955 0 0 0 0-1.36l-2.06-2.038a.977.977 0 0 0-1.372 0a.955.955 0 0 0 0 1.359zM7 2H6a1 1 0 1 0 0 2h1z"
        }));
      }
      function ie() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1.17em",
          height: "1em",
          viewBox: "0 0 14 12"
        }, /* @__PURE__ */ e.a.createElement("path", {
          fill: "currentColor",
          d: "M6.007 2v9a1 1 0 0 1-2.002 0V6H3.004A3.002 3.002 0 0 1 0 3c0-1.657 1.345-3 3.004-3h7.008a1 1 0 1 1 0 2h-1v9a1 1 0 0 1-2.003 0V2zm6.284 6.877l1.416 1.414a1 1 0 0 1 0 1.414c-.391.39-1.025.39-1.416 0l-2.124-2.121a1 1 0 0 1 0-1.415l2.124-2.12a1.002 1.002 0 0 1 1.416 0a1 1 0 0 1 0 1.413L12.29 8.877ZM4.005 2H3.004a1 1 0 1 0 0 2h1V2Z"
        }));
      }
      function ke() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M24 56c0-13.3 10.7-24 24-24H80c13.3 0 24 10.7 24 24V176h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H40c-13.3 0-24-10.7-24-24s10.7-24 24-24H56V80H48C34.7 80 24 69.3 24 56zM86.7 341.2c-6.5-7.4-18.3-6.9-24 1.2L51.5 357.9c-7.7 10.8-22.7 13.3-33.5 5.6s-13.3-22.7-5.6-33.5l11.1-15.6c23.7-33.2 72.3-35.6 99.2-4.9c21.3 24.4 20.8 60.9-1.1 84.7L86.8 432H120c13.3 0 24 10.7 24 24s-10.7 24-24 24H32c-9.5 0-18.2-5.6-22-14.4s-2.1-18.9 4.3-25.9l72-78c5.3-5.8 5.4-14.6 .3-20.5zM224 64H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
        }));
      }
      function le() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 512 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          fill: "currentColor",
          d: "M64 144a48 48 0 1 0 0-96a48 48 0 1 0 0 96m128-80c-17.7 0-32 14.3-32 32s14.3 32 32 32h288c17.7 0 32-14.3 32-32s-14.3-32-32-32zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32h288c17.7 0 32-14.3 32-32s-14.3-32-32-32zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32h288c17.7 0 32-14.3 32-32s-14.3-32-32-32zM64 464a48 48 0 1 0 0-96a48 48 0 1 0 0 96m48-208a48 48 0 1 0-96 0a48 48 0 1 0 96 0"
        }));
      }
      function K() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M16 64c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H128V224c0 53 43 96 96 96s96-43 96-96V96H304c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H384V224c0 88.4-71.6 160-160 160s-160-71.6-160-160V96H48C30.3 96 16 81.7 16 64zM0 448c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z"
        }));
      }
      function ue() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 640 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L355.7 253.5 400.2 96H503L497 120.2c-4.3 17.1 6.1 34.5 23.3 38.8s34.5-6.1 38.8-23.3l11-44.1C577.6 61.3 554.7 32 523.5 32H376.1h-.3H204.5c-22 0-41.2 15-46.6 36.4l-6.3 25.2L38.8 5.1zm168 131.7c.1-.3 .2-.7 .3-1L217 96H333.7L301.3 210.8l-94.5-74.1zM327.3 353.9L272.9 311 243.3 416H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H309.8l17.6-62.1z"
        }));
      }
      function _e() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M480 32c0-11.1-5.7-21.4-15.2-27.2s-21.2-6.4-31.1-1.4l-32 16c-15.8 7.9-22.2 27.1-14.3 42.9C393 73.5 404.3 80 416 80v80c-17.7 0-32 14.3-32 32s14.3 32 32 32h32 32c17.7 0 32-14.3 32-32s-14.3-32-32-32V32zM32 64C14.3 64 0 78.3 0 96s14.3 32 32 32H47.3l89.6 128L47.3 384H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H64c10.4 0 20.2-5.1 26.2-13.6L176 311.8l85.8 122.6c6 8.6 15.8 13.6 26.2 13.6h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H304.7L215.1 256l89.6-128H320c17.7 0 32-14.3 32-32s-14.3-32-32-32H288c-10.4 0-20.2 5.1-26.2 13.6L176 200.2 90.2 77.6C84.2 69.1 74.4 64 64 64H32z"
        }));
      }
      function Oe() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M32 64C14.3 64 0 78.3 0 96s14.3 32 32 32H47.3l89.6 128L47.3 384H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H64c10.4 0 20.2-5.1 26.2-13.6L176 311.8l85.8 122.6c6 8.6 15.8 13.6 26.2 13.6h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H304.7L215.1 256l89.6-128H320c17.7 0 32-14.3 32-32s-14.3-32-32-32H288c-10.4 0-20.2 5.1-26.2 13.6L176 200.2 90.2 77.6C84.2 69.1 74.4 64 64 64H32zM480 320c0-11.1-5.7-21.4-15.2-27.2s-21.2-6.4-31.1-1.4l-32 16c-15.8 7.9-22.2 27.1-14.3 42.9C393 361.5 404.3 368 416 368v80c-17.7 0-32 14.3-32 32s14.3 32 32 32h32 32c17.7 0 32-14.3 32-32s-14.3-32-32-32V320z"
        }));
      }
      function Fe() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"
        }));
      }
      function Mt() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z"
        }));
      }
      function at() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 640 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
        }));
      }
      function nt() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 384 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M128 64c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H293.3L160 416h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H90.7L224 96H160c-17.7 0-32-14.3-32-32z"
        }));
      }
      function xe() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 20 20"
        }, /* @__PURE__ */ e.a.createElement("path", {
          fill: "currentColor",
          d: "M1 1h18v2H1zm6 8h12v2H7zm-6 8h18v2H1zM7 5h12v2H7zm0 8h12v2H7zM5 6v8l-4-4z"
        }));
      }
      function Pe() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 20 20"
        }, /* @__PURE__ */ e.a.createElement("path", {
          fill: "currentColor",
          d: "M1 1h18v2H1zm6 8h12v2H7zm-6 8h18v2H1zM7 5h12v2H7zm0 8h12v2H7zM1 6l4 4l-4 4z"
        }));
      }
      function ze() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "15",
          height: "15",
          viewBox: "0 0 512 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          fill: "currentColor",
          d: "M0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm323.8 106.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6l-26.5-33.1c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4S78.8 416 88 416h336c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7zM112 192a48 48 0 1 0 0-96a48 48 0 1 0 0 96"
        }));
      }
      function ne() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "48",
          height: "48",
          viewBox: "0 0 48 48"
        }, /* @__PURE__ */ e.a.createElement("g", {
          fill: "none",
          stroke: "currentColor",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "4"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M11 7h26v34H11zm-7 4h7v26H4zm33 0h7v26h-7z"
        }), /* @__PURE__ */ e.a.createElement("path", {
          d: "m22 20l6 4l-6 4z"
        })));
      }
      function Ce() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 384 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M0 64C0 46.3 14.3 32 32 32H80 96 224c70.7 0 128 57.3 128 128c0 31.3-11.3 60.1-30 82.3c37.1 22.4 62 63.1 62 109.7c0 70.7-57.3 128-128 128H96 80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V256 96H32C14.3 96 0 81.7 0 64zM224 224c35.3 0 64-28.7 64-64s-28.7-64-64-64H112V224H224zM112 288V416H256c35.3 0 64-28.7 64-64s-28.7-64-64-64H224 112z"
        }));
      }
      function Qe() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          style: {
            marginTop: "0px"
          }
        }, /* @__PURE__ */ e.a.createElement("path", {
          fill: "currentColor",
          d: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6l6 6zm5.2 0l4.6-4.6l-4.6-4.6L16 6l6 6l-6 6z"
        }));
      }
      function We() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M448 64c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
        }));
      }
      function Ie() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M448 64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32zm0 256c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32zM0 192c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zM448 448c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32z"
        }));
      }
      function Pt() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M352 64c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32H320c17.7 0 32-14.3 32-32zm96 128c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32zM0 448c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zM352 320c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32H320c17.7 0 32-14.3 32-32z"
        }));
      }
      function ge() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M288 64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32H256c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
        }));
      }
      function tt() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 640 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L489.3 358.2l90.5-90.5c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114l-96 96-31.9-25C430.9 239.6 420.1 175.1 377 132c-52.2-52.3-134.5-56.2-191.3-11.7L38.8 5.1zM239 162c30.1-14.9 67.7-9.9 92.8 15.3c20 20 27.5 48.3 21.7 74.5L239 162zM116.6 187.9L60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5l61.8-61.8-50.6-39.9zM220.9 270c-2.1 39.8 12.2 80.1 42.2 110c38.9 38.9 94.4 51 143.6 36.3L220.9 270z"
        }));
      }
      function we() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M144 144c0-44.2 35.8-80 80-80c31.9 0 59.4 18.6 72.3 45.7c7.6 16 26.7 22.8 42.6 15.2s22.8-26.7 15.2-42.6C331 33.7 281.5 0 224 0C144.5 0 80 64.5 80 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H144V144z"
        }));
      }
      function je() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"
        }));
      }
      function Ge() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M128 32c0-17.7-14.3-32-32-32S64 14.3 64 32l0 32L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l32 0 0 256c0 35.3 28.7 64 64 64l224 0 0-64-224 0 0-352zM384 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-256c0-35.3-28.7-64-64-64L160 64l0 64 224 0 0 352z"
        }));
      }
      var Te = "data:image/gif;base64,R0lGODlhngHpANUrAJycnPLy8tjY2AAAANTU1Pb29sTExMrKysLCwtbW1ru7u/j4+Ojo6LKysu7u7tzc3Ly8vNDQ0BEREbCwsL6+vqqqqiIiIs7OzuDg4KampkRERDMzM7i4uMzMzIiIiHd3d8jIyN3d3WZmZlVVVfT09OTk5JmZmcbGxqCgoOzs7JaWlv///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc0MEVDNDE3NTBFNDExRTE5OTAzODVFNEI4NUU1MDAzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc0MEVDNDE4NTBFNDExRTE5OTAzODVFNEI4NUU1MDAzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzQwRUM0MTU1MEU0MTFFMTk5MDM4NUU0Qjg1RTUwMDMiIHN0UmVmOmRv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";
      function He(t) {
        var r = t.handleCharSelect, a = [
          "★",
          "❤",
          "☀",
          "✈",
          "♪",
          "✔",
          "⇧",
          "⇩",
          "♠",
          "♣",
          "♥",
          "♦",
          "♪",
          "♫",
          "☎",
          "✉",
          "☂",
          "☔",
          "☕",
          "⚓",
          "⚡",
          "⚠",
          "⚽",
          "⚾",
          "✂",
          "✏",
          "✒",
          "✨",
          "❄",
          "❅",
          "❆",
          "❇",
          "❈",
          "❉",
          "❊",
          "❋",
          "❌",
          "❍",
          "❎",
          "❏",
          "❐",
          "❑",
          "❒",
          "⚪",
          "⚫",
          "◆",
          "◇",
          "◈",
          "◉",
          "◊",
          "○",
          "◌",
          "◍",
          "◎",
          "●",
          "◐",
          "◑",
          "◒",
          "◓",
          "◔",
          "◕",
          "◖",
          "◗",
          "◘",
          "◙",
          "◚",
          "◛",
          "◜",
          "◝",
          "◞",
          "◟",
          "◠",
          "◡",
          "◢",
          "◣",
          "◤",
          "◥",
          "◦",
          "◧",
          "◨",
          "◩",
          "◪",
          "◫",
          "◬",
          "◭",
          "◮",
          "◯",
          "❘",
          "❙",
          "❚",
          "❛",
          "❜",
          "❝",
          "❞",
          "❟",
          "❠",
          "⚀",
          "⚁",
          "⚂",
          "⚃",
          "⚄",
          "⚅",
          "⚆",
          "⚇",
          "⚈",
          "⚉",
          "⚘",
          "⚙",
          "⚚",
          "⚛",
          "⚜",
          "⚝",
          "€",
          "¥",
          "£",
          "₪",
          "₩",
          "₱",
          "₲",
          "₳",
          "₴",
          "₵",
          "₦",
          "₭",
          "₮",
          "₯",
          "₨",
          "₰",
          "&",
          "<",
          ">",
          '"',
          "'",
          "¢",
          "£",
          "¥",
          "€",
          "©",
          "®",
          "™",
          "§",
          "×",
          "÷"
          // Add more special characters as needed
        ];
        return /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.specialCharBox
        }, a.map(function(s, u) {
          return /* @__PURE__ */ e.a.createElement("div", {
            key: "key".concat(u),
            onClick: function(y) {
              return r(y, s);
            },
            className: o.a.specialChar
          }, s);
        }));
      }
      function qe() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          width: "10",
          height: "10",
          focusable: "false"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 0 1 0-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8Z",
          "fill-rule": "nonzero"
        }));
      }
      function ir(t, r) {
        return lr(t) || Xt(t, r) || Ir(t, r) || rr();
      }
      function rr() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Ir(t, r) {
        if (t) {
          if (typeof t == "string") return ar(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? ar(t, r) : void 0;
        }
      }
      function ar(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, s = Array(r); a < r; a++) s[a] = t[a];
        return s;
      }
      function Xt(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var s, u, h, y, v = [], x = !0, k = !1;
          try {
            if (h = (a = a.call(t)).next, r !== 0) for (; !(x = (s = h.call(a)).done) && (v.push(s.value), v.length !== r); x = !0) ;
          } catch (O) {
            k = !0, u = O;
          } finally {
            try {
              if (!x && a.return != null && (y = a.return(), Object(y) !== y)) return;
            } finally {
              if (k) throw u;
            }
          }
          return v;
        }
      }
      function lr(t) {
        if (Array.isArray(t)) return t;
      }
      function cr(t) {
        var r = t.remove_from_toolbar, a = t.editorRef, s = Object(i.useState)(!1), u = ir(s, 2), h = u[0], y = u[1], v = Object(i.useState)("Paragraph"), x = ir(v, 2), k = x[0], O = x[1], Y = Object(i.useRef)(null), q = [{
          label: "Paragraph",
          value: "p"
        }, {
          label: "Heading 1",
          value: "h1"
        }, {
          label: "Heading 2",
          value: "h2"
        }, {
          label: "Heading 3",
          value: "h3"
        }, {
          label: "Heading 4",
          value: "h4"
        }, {
          label: "Heading 5",
          value: "h5"
        }, {
          label: "Heading 6",
          value: "h6"
        }, {
          label: "Blockquote",
          value: "blockquote"
        }, {
          label: "Preformatted",
          value: "pre"
        }];
        if ((r == null ? void 0 : r.length) > 0) {
          var Q, p = r.find(function(H) {
            return H.name === "format";
          });
          (p == null || (Q = p.options) === null || Q === void 0 ? void 0 : Q.length) > 0 && (q = q.filter(function(H) {
            return !(p != null && p.options.includes(H.value));
          }));
        }
        var oe = function(G) {
          G.preventDefault(), y(!h);
        }, V = function(G, ce) {
          G.preventDefault(), a.current.focus(), document.execCommand("formatBlock", !1, ce.value), O(ce.label), y(!1);
        }, F = function() {
          var G = window.getSelection();
          if (G.rangeCount > 0)
            for (var ce = G.getRangeAt(0), ee = ce.commonAncestorContainer, me = ee; me; ) {
              if (me.nodeName.match(/^(p|div|h[1-6]|blockquote|pre)$/i))
                return me.nodeName.toLowerCase();
              me = me.parentNode;
            }
          return null;
        }, T = function() {
          var G = a.current;
          G && G.contains(window.getSelection().anchorNode) && (G.focus(), G.innerText.trim() === "" && O("Paragraph"));
        };
        return Object(i.useEffect)(function() {
          var H = function(ee) {
            Y.current.contains(ee.target) || y(!1);
          }, G = function() {
            var ee;
            if (a != null && (ee = a.current) !== null && ee !== void 0 && ee.contains(window.getSelection().anchorNode)) {
              var me = F();
              if (me) {
                var Ae = q.find(function(B) {
                  return B.value === me;
                });
                O(Ae ? Ae.label : "Paragraph");
              }
            }
          };
          return document.addEventListener("click", H), document.addEventListener("selectionchange", G), document.addEventListener("keydown", T), function() {
            document.removeEventListener("click", H), document.removeEventListener("selectionchange", G), document.removeEventListener("keydown", T);
          };
        }, [a]), /* @__PURE__ */ e.a.createElement("button", {
          className: o.a.customSelectFormat,
          onClick: oe,
          ref: Y,
          style: {
            minWidth: "120px"
          }
        }, /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.selectSelected
        }, k, /* @__PURE__ */ e.a.createElement(qe, null)), h && /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.selectItemsFormat
        }, q.map(function(H, G) {
          return /* @__PURE__ */ e.a.createElement("div", {
            key: "key".concat(G),
            onClick: function(ee) {
              return V(ee, H);
            },
            className: o.a.selectOption
          }, /* @__PURE__ */ e.a.createElement(H.value, null, H.label));
        })));
      }
      var gr = cr;
      function sr(t, r) {
        return Nr(t) || Mr(t, r) || vr(t, r) || dr();
      }
      function dr() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function vr(t, r) {
        if (t) {
          if (typeof t == "string") return br(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? br(t, r) : void 0;
        }
      }
      function br(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, s = Array(r); a < r; a++) s[a] = t[a];
        return s;
      }
      function Mr(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var s, u, h, y, v = [], x = !0, k = !1;
          try {
            if (h = (a = a.call(t)).next, r !== 0) for (; !(x = (s = h.call(a)).done) && (v.push(s.value), v.length !== r); x = !0) ;
          } catch (O) {
            k = !0, u = O;
          } finally {
            try {
              if (!x && a.return != null && (y = a.return(), Object(y) !== y)) return;
            } finally {
              if (k) throw u;
            }
          }
          return v;
        }
      }
      function Nr(t) {
        if (Array.isArray(t)) return t;
      }
      var Rr = function(r) {
        var a = r.name, s = r.icon, u = r.title, h = r.item, y = r.disabled, v = r.editorRef, x = Object(i.useState)(!1), k = sr(x, 2), O = k[0], Y = k[1], q = Object(i.useState)(!0), Q = sr(q, 2), p = Q[0], oe = Q[1], V = function(H, G) {
          H.preventDefault(), G.current.focus(), G.current && G.current.contains(window.getSelection().anchorNode) && (h != null && h.handleClick && (h.handleClick(h), !h.add_functionality) || (Y(!O), document.execCommand(a)));
        };
        Object(i.useEffect)(function() {
          var T = function() {
            var G;
            if (v != null && (G = v.current) !== null && G !== void 0 && G.contains(window.getSelection().anchorNode)) {
              var ce = document.queryCommandState(a), ee = document.queryCommandEnabled(a);
              oe(!ee), Y(ce);
            }
          };
          return document.addEventListener("selectionchange", T), document.addEventListener("input", T), function() {
            document.removeEventListener("selectionchange", T), document.removeEventListener("input", T);
          };
        }, [v, a]);
        var F = function() {
          var H = "";
          return O && (H = o.a.selectedOption || ""), (a === "redo" || a === "undo") && p && (H += " ".concat(o.a.disabled || "")), H.trim();
        };
        return /* @__PURE__ */ e.a.createElement("button", {
          onClick: function(H) {
            return V(H, v);
          },
          className: F(),
          title: h != null && h.title ? h.title : u,
          disabled: y
        }, h != null && h.icon ? h.icon : s);
      }, mt = Rr;
      function Wt(t) {
        "@babel/helpers - typeof";
        return Wt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
          return typeof r;
        } : function(r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
        }, Wt(t);
      }
      function De() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
        De = function() {
          return r;
        };
        var t, r = {}, a = Object.prototype, s = a.hasOwnProperty, u = Object.defineProperty || function(_, f, w) {
          _[f] = w.value;
        }, h = typeof Symbol == "function" ? Symbol : {}, y = h.iterator || "@@iterator", v = h.asyncIterator || "@@asyncIterator", x = h.toStringTag || "@@toStringTag";
        function k(_, f, w) {
          return Object.defineProperty(_, f, { value: w, enumerable: !0, configurable: !0, writable: !0 }), _[f];
        }
        try {
          k({}, "");
        } catch {
          k = function(w, N, A) {
            return w[N] = A;
          };
        }
        function O(_, f, w, N) {
          var A = f && f.prototype instanceof F ? f : F, I = Object.create(A.prototype), he = new Re(N || []);
          return u(I, "_invoke", { value: Ye(_, w, he) }), I;
        }
        function Y(_, f, w) {
          try {
            return { type: "normal", arg: _.call(f, w) };
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        r.wrap = O;
        var q = "suspendedStart", Q = "suspendedYield", p = "executing", oe = "completed", V = {};
        function F() {
        }
        function T() {
        }
        function H() {
        }
        var G = {};
        k(G, y, function() {
          return this;
        });
        var ce = Object.getPrototypeOf, ee = ce && ce(ce(lt([])));
        ee && ee !== a && s.call(ee, y) && (G = ee);
        var me = H.prototype = F.prototype = Object.create(G);
        function Ae(_) {
          ["next", "throw", "return"].forEach(function(f) {
            k(_, f, function(w) {
              return this._invoke(f, w);
            });
          });
        }
        function B(_, f) {
          function w(A, I, he, Se) {
            var Me = Y(_[A], _, I);
            if (Me.type !== "throw") {
              var Ke = Me.arg, Xe = Ke.value;
              return Xe && Wt(Xe) == "object" && s.call(Xe, "__await") ? f.resolve(Xe.__await).then(function(ot) {
                w("next", ot, he, Se);
              }, function(ot) {
                w("throw", ot, he, Se);
              }) : f.resolve(Xe).then(function(ot) {
                Ke.value = ot, he(Ke);
              }, function(ot) {
                return w("throw", ot, he, Se);
              });
            }
            Se(Me.arg);
          }
          var N;
          u(this, "_invoke", { value: function(I, he) {
            function Se() {
              return new f(function(Me, Ke) {
                w(I, he, Me, Ke);
              });
            }
            return N = N ? N.then(Se, Se) : Se();
          } });
        }
        function Ye(_, f, w) {
          var N = q;
          return function(A, I) {
            if (N === p) throw Error("Generator is already running");
            if (N === oe) {
              if (A === "throw") throw I;
              return { value: t, done: !0 };
            }
            for (w.method = A, w.arg = I; ; ) {
              var he = w.delegate;
              if (he) {
                var Se = Le(he, w);
                if (Se) {
                  if (Se === V) continue;
                  return Se;
                }
              }
              if (w.method === "next") w.sent = w._sent = w.arg;
              else if (w.method === "throw") {
                if (N === q) throw N = oe, w.arg;
                w.dispatchException(w.arg);
              } else w.method === "return" && w.abrupt("return", w.arg);
              N = p;
              var Me = Y(_, f, w);
              if (Me.type === "normal") {
                if (N = w.done ? oe : Q, Me.arg === V) continue;
                return { value: Me.arg, done: w.done };
              }
              Me.type === "throw" && (N = oe, w.method = "throw", w.arg = Me.arg);
            }
          };
        }
        function Le(_, f) {
          var w = f.method, N = _.iterator[w];
          if (N === t) return f.delegate = null, w === "throw" && _.iterator.return && (f.method = "return", f.arg = t, Le(_, f), f.method === "throw") || w !== "return" && (f.method = "throw", f.arg = new TypeError("The iterator does not provide a '" + w + "' method")), V;
          var A = Y(N, _.iterator, f.arg);
          if (A.type === "throw") return f.method = "throw", f.arg = A.arg, f.delegate = null, V;
          var I = A.arg;
          return I ? I.done ? (f[_.resultName] = I.value, f.next = _.nextLoc, f.method !== "return" && (f.method = "next", f.arg = t), f.delegate = null, V) : I : (f.method = "throw", f.arg = new TypeError("iterator result is not an object"), f.delegate = null, V);
        }
        function Ee(_) {
          var f = { tryLoc: _[0] };
          1 in _ && (f.catchLoc = _[1]), 2 in _ && (f.finallyLoc = _[2], f.afterLoc = _[3]), this.tryEntries.push(f);
        }
        function Be(_) {
          var f = _.completion || {};
          f.type = "normal", delete f.arg, _.completion = f;
        }
        function Re(_) {
          this.tryEntries = [{ tryLoc: "root" }], _.forEach(Ee, this), this.reset(!0);
        }
        function lt(_) {
          if (_ || _ === "") {
            var f = _[y];
            if (f) return f.call(_);
            if (typeof _.next == "function") return _;
            if (!isNaN(_.length)) {
              var w = -1, N = function A() {
                for (; ++w < _.length; ) if (s.call(_, w)) return A.value = _[w], A.done = !1, A;
                return A.value = t, A.done = !0, A;
              };
              return N.next = N;
            }
          }
          throw new TypeError(Wt(_) + " is not iterable");
        }
        return T.prototype = H, u(me, "constructor", { value: H, configurable: !0 }), u(H, "constructor", { value: T, configurable: !0 }), T.displayName = k(H, x, "GeneratorFunction"), r.isGeneratorFunction = function(_) {
          var f = typeof _ == "function" && _.constructor;
          return !!f && (f === T || (f.displayName || f.name) === "GeneratorFunction");
        }, r.mark = function(_) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(_, H) : (_.__proto__ = H, k(_, x, "GeneratorFunction")), _.prototype = Object.create(me), _;
        }, r.awrap = function(_) {
          return { __await: _ };
        }, Ae(B.prototype), k(B.prototype, v, function() {
          return this;
        }), r.AsyncIterator = B, r.async = function(_, f, w, N, A) {
          A === void 0 && (A = Promise);
          var I = new B(O(_, f, w, N), A);
          return r.isGeneratorFunction(f) ? I : I.next().then(function(he) {
            return he.done ? he.value : I.next();
          });
        }, Ae(me), k(me, x, "Generator"), k(me, y, function() {
          return this;
        }), k(me, "toString", function() {
          return "[object Generator]";
        }), r.keys = function(_) {
          var f = Object(_), w = [];
          for (var N in f) w.push(N);
          return w.reverse(), function A() {
            for (; w.length; ) {
              var I = w.pop();
              if (I in f) return A.value = I, A.done = !1, A;
            }
            return A.done = !0, A;
          };
        }, r.values = lt, Re.prototype = { constructor: Re, reset: function(f) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(Be), !f) for (var w in this) w.charAt(0) === "t" && s.call(this, w) && !isNaN(+w.slice(1)) && (this[w] = t);
        }, stop: function() {
          this.done = !0;
          var f = this.tryEntries[0].completion;
          if (f.type === "throw") throw f.arg;
          return this.rval;
        }, dispatchException: function(f) {
          if (this.done) throw f;
          var w = this;
          function N(Ke, Xe) {
            return he.type = "throw", he.arg = f, w.next = Ke, Xe && (w.method = "next", w.arg = t), !!Xe;
          }
          for (var A = this.tryEntries.length - 1; A >= 0; --A) {
            var I = this.tryEntries[A], he = I.completion;
            if (I.tryLoc === "root") return N("end");
            if (I.tryLoc <= this.prev) {
              var Se = s.call(I, "catchLoc"), Me = s.call(I, "finallyLoc");
              if (Se && Me) {
                if (this.prev < I.catchLoc) return N(I.catchLoc, !0);
                if (this.prev < I.finallyLoc) return N(I.finallyLoc);
              } else if (Se) {
                if (this.prev < I.catchLoc) return N(I.catchLoc, !0);
              } else {
                if (!Me) throw Error("try statement without catch or finally");
                if (this.prev < I.finallyLoc) return N(I.finallyLoc);
              }
            }
          }
        }, abrupt: function(f, w) {
          for (var N = this.tryEntries.length - 1; N >= 0; --N) {
            var A = this.tryEntries[N];
            if (A.tryLoc <= this.prev && s.call(A, "finallyLoc") && this.prev < A.finallyLoc) {
              var I = A;
              break;
            }
          }
          I && (f === "break" || f === "continue") && I.tryLoc <= w && w <= I.finallyLoc && (I = null);
          var he = I ? I.completion : {};
          return he.type = f, he.arg = w, I ? (this.method = "next", this.next = I.finallyLoc, V) : this.complete(he);
        }, complete: function(f, w) {
          if (f.type === "throw") throw f.arg;
          return f.type === "break" || f.type === "continue" ? this.next = f.arg : f.type === "return" ? (this.rval = this.arg = f.arg, this.method = "return", this.next = "end") : f.type === "normal" && w && (this.next = w), V;
        }, finish: function(f) {
          for (var w = this.tryEntries.length - 1; w >= 0; --w) {
            var N = this.tryEntries[w];
            if (N.finallyLoc === f) return this.complete(N.completion, N.afterLoc), Be(N), V;
          }
        }, catch: function(f) {
          for (var w = this.tryEntries.length - 1; w >= 0; --w) {
            var N = this.tryEntries[w];
            if (N.tryLoc === f) {
              var A = N.completion;
              if (A.type === "throw") {
                var I = A.arg;
                Be(N);
              }
              return I;
            }
          }
          throw Error("illegal catch attempt");
        }, delegateYield: function(f, w, N) {
          return this.delegate = { iterator: lt(f), resultName: w, nextLoc: N }, this.method === "next" && (this.arg = t), V;
        } }, r;
      }
      function Ze(t, r, a, s, u, h, y) {
        try {
          var v = t[h](y), x = v.value;
        } catch (k) {
          return void a(k);
        }
        v.done ? r(x) : Promise.resolve(x).then(s, u);
      }
      function wt(t) {
        return function() {
          var r = this, a = arguments;
          return new Promise(function(s, u) {
            var h = t.apply(r, a);
            function y(x) {
              Ze(h, s, u, y, v, "next", x);
            }
            function v(x) {
              Ze(h, s, u, y, v, "throw", x);
            }
            y(void 0);
          });
        };
      }
      var qt = [
        "undo",
        "redo",
        "|",
        "format",
        "fontfamily",
        "fontsize",
        "|",
        "bold",
        "italic",
        "underline",
        "superscript",
        "subscript",
        "|",
        // "alignLeft",
        // "alignCenter",
        // "alignRight",
        // "alignJustify",
        "alignment",
        "|",
        "indent",
        "outdent",
        "|",
        "orderedList",
        "unorderedList",
        "|",
        "removeFormat",
        "|",
        "textColor",
        "backgroundColor",
        "|",
        "ltr",
        "rtl",
        "|",
        "copy",
        "cut",
        "paste",
        "select_all",
        "|",
        "image",
        "link",
        "video",
        "|",
        "source_code",
        "full_screen",
        "special_character",
        "horizontal_line"
      ], Et = ["file", "view", "insert", "format", "|", "select_all", "|", "image", "link", "video", "|", "copy", "cut", "paste", "|"], fa = ["bold", "italic", "underline", "superscript", "subscript", "font", "font_size", "alignment"], ga = ["image", "link", "video", "hr_line", "special_char"], va = ["new_document", "preview", "print"], ba = ["source_code", "full_screen"];
      function ya(t) {
        for (var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", a = "", s = 0; s < t; s++) {
          var u = Math.floor(Math.random() * r.length);
          a += r.charAt(u);
        }
        return a;
      }
      function Hr(t) {
        var r = new DOMParser();
        if (t) {
          var a = r.parseFromString(t, "text/html");
          a.querySelectorAll("div").forEach(function(y) {
            var v = a.createElement("p");
            v.innerHTML = y.innerHTML, y.replaceWith(v);
          });
          var s = a.body.innerHTML;
          s = s.replace(/<br\s*\/?>/g, "&nbsp;"), s = s.replace(/<(?=[^/])/g, function(y) {
            return `
`.concat(y);
          }), s = s.trim();
          var u = s.split(`
`), h = u.map(function(y) {
            var v = /^<.*?>|<.*?>$/.test(y);
            return !v && y.trim() ? "<p>".concat(y, "</p>") : y;
          });
          return h.join(`
`).trim();
        }
        return "";
      }
      var Lr = function() {
        var r = document.querySelector(".resizeImageWrapper"), a = document.querySelector(".resizer-image");
        r && a && (r.insertAdjacentElement("afterend", a), a.classList.remove("resizer-image"), r.parentNode.removeChild(r));
      }, wa = /* @__PURE__ */ function() {
        var t = wt(/* @__PURE__ */ De().mark(function r(a, s, u) {
          var h, y, v, x;
          return De().wrap(function(O) {
            for (; ; ) switch (O.prev = O.next) {
              case 0:
                if (!(!s || !a)) {
                  O.next = 3;
                  break;
                }
                return console.error("No crop data or image reference"), O.abrupt("return", null);
              case 3:
                return h = document.createElement("canvas"), y = a.naturalWidth / a.width, v = a.naturalHeight / a.height, h.width = s.width, h.height = s.height, x = h.getContext("2d"), x.clearRect(0, 0, h.width, h.height), x.drawImage(a, s.x * y, s.y * v, s.width * y, s.height * v, 0, 0, s.width, s.height), O.abrupt("return", new Promise(function(Y) {
                  var q = "image/png", Q = "png";
                  if (u)
                    if (typeof u == "string") {
                      var p = u.split(".");
                      Q = p[p.length - 1].toLowerCase(), q = "image/".concat(Q === "jpg" ? "jpeg" : Q);
                    } else
                      q = u.type || "image/png", Q = q.split("/").pop(), Q === "jpeg" && (Q = "jpg");
                  var oe = q === "image/png" || q === "image/gif", V = oe ? "image/png" : q;
                  h.toBlob(
                    function(F) {
                      if (!F) {
                        console.error("Canvas is empty"), Y(null);
                        return;
                      }
                      var T = "cropped-image.png";
                      if (u)
                        if (typeof u == "string") {
                          var H = u.split("/"), G = H[H.length - 1].replace(/\.[^/.]+$/, "");
                          T = "".concat(G, "-cropped.").concat(Q);
                        } else {
                          var ce = u.name.replace(/\.[^/.]+$/, "") || "cropped-image";
                          T = "".concat(ce, "-cropped.").concat(Q);
                        }
                      var ee = new File([F], T, {
                        type: V,
                        lastModified: Date.now()
                      });
                      Y(ee);
                    },
                    V,
                    // Use the determined output type
                    V === "image/jpeg" ? 0.9 : 1
                    // Only apply quality for JPEG
                  );
                }));
              case 12:
              case "end":
                return O.stop();
            }
          }, r);
        }));
        return function(a, s, u) {
          return t.apply(this, arguments);
        };
      }();
      function xa(t, r) {
        return Ne(t) || X(t, r) || $r(t, r) || _a();
      }
      function _a() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function $r(t, r) {
        if (t) {
          if (typeof t == "string") return C(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? C(t, r) : void 0;
        }
      }
      function C(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, s = Array(r); a < r; a++) s[a] = t[a];
        return s;
      }
      function X(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var s, u, h, y, v = [], x = !0, k = !1;
          try {
            if (h = (a = a.call(t)).next, r !== 0) for (; !(x = (s = h.call(a)).done) && (v.push(s.value), v.length !== r); x = !0) ;
          } catch (O) {
            k = !0, u = O;
          } finally {
            try {
              if (!x && a.return != null && (y = a.return(), Object(y) !== y)) return;
            } finally {
              if (k) throw u;
            }
          }
          return v;
        }
      }
      function Ne(t) {
        if (Array.isArray(t)) return t;
      }
      function rt(t) {
        var r, a = t.onSelectOption, s = t.handleInsertHR, u = t.item, h = t.remove_from_navbar, y = u.options;
        y || (y = ga);
        var v = Object(i.useState)(!1), x = xa(v, 2), k = x[0], O = x[1], Y = function(oe, V) {
          oe.preventDefault(), O(!1), V === "hr_line" ? s(oe) : a(oe, V);
        };
        if ((h == null ? void 0 : h.length) > 0) {
          var q, Q = h.find(function(p) {
            return p.name === "insert";
          });
          (Q == null || (q = Q.options) === null || q === void 0 ? void 0 : q.length) > 0 && (y = y.filter(function(p) {
            return !(Q != null && Q.options.includes(p));
          }));
        }
        return /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.customSelect,
          onMouseEnter: function() {
            return O(!0);
          },
          onMouseLeave: function() {
            return O(!1);
          }
        }, u != null && u.title ? u.title : "Insert", /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(o.a.selectItems, " ").concat(k ? "".concat(o.a.show) : "")
        }, ((r = y) === null || r === void 0 ? void 0 : r.length) > 0 && y.map(function(p, oe) {
          var V = p === "image" || p.name === "image", F = p === "link" || p.name === "link", T = p === "video" || p.name === "video", H = p === "hr_line" || p.name === "hr_line", G = p === "special_char" || p.name === "special_char";
          return /* @__PURE__ */ e.a.createElement("div", {
            key: "key".concat(oe)
          }, V && /* @__PURE__ */ e.a.createElement("div", {
            className: o.a.selectInsert,
            onClick: function(ee) {
              return Y(ee, "image");
            }
          }, p != null && p.icon ? p.icon : /* @__PURE__ */ e.a.createElement(ze, null), /* @__PURE__ */ e.a.createElement("span", null, p != null && p.title ? p.title : "Image")), F && /* @__PURE__ */ e.a.createElement("div", {
            className: o.a.selectInsert,
            onClick: function(ee) {
              return Y(ee, "link");
            }
          }, p != null && p.icon ? p.icon : /* @__PURE__ */ e.a.createElement(at, null), /* @__PURE__ */ e.a.createElement("span", null, p != null && p.title ? p.title : "Link")), T && /* @__PURE__ */ e.a.createElement("div", {
            className: o.a.selectInsert,
            onClick: function(ee) {
              return Y(ee, "video");
            }
          }, p != null && p.icon ? p.icon : /* @__PURE__ */ e.a.createElement(ne, null), /* @__PURE__ */ e.a.createElement("span", null, p != null && p.title ? p.title : "Video")), H && /* @__PURE__ */ e.a.createElement("div", {
            className: o.a.selectInsert,
            onClick: function(ee) {
              return Y(ee, "hr_line");
            }
          }, p != null && p.icon ? p.icon : /* @__PURE__ */ e.a.createElement(z, null), /* @__PURE__ */ e.a.createElement("span", null, p != null && p.title ? p.title : "Horizontal Line")), G && /* @__PURE__ */ e.a.createElement("div", {
            className: o.a.selectInsert,
            onClick: function(ee) {
              return Y(ee, "special_char");
            }
          }, p != null && p.icon ? p.icon : /* @__PURE__ */ e.a.createElement($, null), /* @__PURE__ */ e.a.createElement("span", null, p != null && p.title ? p.title : "Special Char")));
        })));
      }
      function ht(t, r) {
        return yr(t) || Gt(t, r) || Ut(t, r) || zt();
      }
      function zt() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Ut(t, r) {
        if (t) {
          if (typeof t == "string") return Ot(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? Ot(t, r) : void 0;
        }
      }
      function Ot(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, s = Array(r); a < r; a++) s[a] = t[a];
        return s;
      }
      function Gt(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var s, u, h, y, v = [], x = !0, k = !1;
          try {
            if (h = (a = a.call(t)).next, r !== 0) for (; !(x = (s = h.call(a)).done) && (v.push(s.value), v.length !== r); x = !0) ;
          } catch (O) {
            k = !0, u = O;
          } finally {
            try {
              if (!x && a.return != null && (y = a.return(), Object(y) !== y)) return;
            } finally {
              if (k) throw u;
            }
          }
          return v;
        }
      }
      function yr(t) {
        if (Array.isArray(t)) return t;
      }
      function Jt(t) {
        var r = t.handleViewSource, a = t.isFullScreen, s = t.toggleFullScreen, u = t.item;
        t.isPlaceholder, t.placeholder, t.value;
        var h = t.remove_from_navbar, y = u.options, v = Object(i.useState)(!1), x = ht(v, 2), k = x[0], O = x[1], Y = function(oe, V, F) {
          oe.preventDefault(), O(!1), !(F != null && F.handleClick && (F.handleClick(F, u), !F.add_functionality)) && (V === "code" ? r() : V === "screen" && s());
        };
        if (y || (y = ba), (h == null ? void 0 : h.length) > 0) {
          var q, Q = h.find(function(p) {
            return p.name === "view";
          });
          (Q == null || (q = Q.options) === null || q === void 0 ? void 0 : q.length) > 0 && (y = y.filter(function(p) {
            return !(Q != null && Q.options.includes(p));
          }));
        }
        return /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.customSelect,
          onMouseEnter: function() {
            return O(!0);
          },
          onMouseLeave: function() {
            return O(!1);
          }
        }, u != null && u.title ? u.title : "View", /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(o.a.selectItems, " ").concat(k ? "".concat(o.a.show) : "")
        }, y.map(function(p, oe) {
          var V = p === "source_code" || p.name === "source_code", F = p === "full_screen" || p.name === "full_screen";
          return /* @__PURE__ */ e.a.createElement("div", {
            key: "key".concat(oe)
          }, V && /* @__PURE__ */ e.a.createElement("div", {
            className: o.a.selectInsert,
            onClick: function(H) {
              return Y(H, "code", p);
            }
          }, p != null && p.icon ? p.icon : /* @__PURE__ */ e.a.createElement(Qe, null), /* @__PURE__ */ e.a.createElement("span", null, p != null && p.title ? p.title : "Source Code")), F && /* @__PURE__ */ e.a.createElement("div", {
            className: o.a.selectInsert,
            onClick: function(H) {
              return Y(H, "screen", p);
            }
          }, p != null && p.icon ? p.icon : a ? /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement(U, null), " ", /* @__PURE__ */ e.a.createElement("span", null, p != null && p.title ? p.title : "Exit Full Screen")) : /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement(j, null), " ", /* @__PURE__ */ e.a.createElement("span", null, p != null && p.title ? p.title : "Full Screen"))));
        })));
      }
      function ea(t, r) {
        return Yo(t) || Go(t, r) || Qo(t, r) || wr();
      }
      function wr() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Qo(t, r) {
        if (t) {
          if (typeof t == "string") return Za(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? Za(t, r) : void 0;
        }
      }
      function Za(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, s = Array(r); a < r; a++) s[a] = t[a];
        return s;
      }
      function Go(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var s, u, h, y, v = [], x = !0, k = !1;
          try {
            if (h = (a = a.call(t)).next, r !== 0) for (; !(x = (s = h.call(a)).done) && (v.push(s.value), v.length !== r); x = !0) ;
          } catch (O) {
            k = !0, u = O;
          } finally {
            try {
              if (!x && a.return != null && (y = a.return(), Object(y) !== y)) return;
            } finally {
              if (k) throw u;
            }
          }
          return v;
        }
      }
      function Yo(t) {
        if (Array.isArray(t)) return t;
      }
      function Ko(t) {
        var r = t.handleNewDocument, a = t.handlePreview, s = t.handlePrint, u = t.item, h = t.remove_from_navbar, y = u.options, v = Object(i.useState)(!1), x = ea(v, 2), k = x[0], O = x[1], Y = function(oe, V, F) {
          oe.preventDefault(), O(!1), !(F != null && F.handleClick && (F.handleClick(F, u), !F.add_functionality)) && (V === "new_document" ? r() : V === "preview" ? a() : V === "print" && setTimeout(function() {
            s();
          }, 1));
        };
        if (y || (y = va), (h == null ? void 0 : h.length) > 0) {
          var q, Q = h.find(function(p) {
            return p.name === "file";
          });
          (Q == null || (q = Q.options) === null || q === void 0 ? void 0 : q.length) > 0 && (y = y.filter(function(p) {
            return !(Q != null && Q.options.includes(p));
          }));
        }
        return /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.customSelect,
          onMouseEnter: function() {
            return O(!0);
          },
          onMouseLeave: function() {
            return O(!1);
          }
        }, u != null && u.title ? u.title : "File", /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(o.a.selectItems, " ").concat(k ? "".concat(o.a.show) : "")
        }, y.map(function(p, oe) {
          var V = p === "new_document" || p.name === "new_document", F = p === "preview" || p.name === "preview", T = p === "print" || p.name === "print";
          return p === "upload_file" || p.name, /* @__PURE__ */ e.a.createElement("div", {
            key: "key".concat(oe)
          }, V && /* @__PURE__ */ e.a.createElement("div", {
            className: o.a.selectInsert,
            onClick: function(G) {
              return Y(G, "new_document", p);
            }
          }, p != null && p.icon ? p.icon : /* @__PURE__ */ e.a.createElement(ae, null), /* @__PURE__ */ e.a.createElement("span", null, p != null && p.title ? p.title : "New Document")), F && /* @__PURE__ */ e.a.createElement("div", {
            className: o.a.selectInsert,
            onClick: function(G) {
              return Y(G, "preview", p);
            }
          }, p != null && p.icon ? p.icon : /* @__PURE__ */ e.a.createElement(P, null), /* @__PURE__ */ e.a.createElement("span", null, p != null && p.title ? p.title : "Preview")), T && /* @__PURE__ */ e.a.createElement("div", {
            className: o.a.selectInsert,
            onClick: function(G) {
              return Y(G, "print", p);
            }
          }, p != null && p.icon ? p.icon : /* @__PURE__ */ e.a.createElement(W, null), /* @__PURE__ */ e.a.createElement("span", null, p != null && p.title ? p.title : "Print")));
        })));
      }
      var Vo = l(2), Xa = /* @__PURE__ */ l.n(Vo), Wo = function(r) {
        var a = r.onClose, s = r.children, u = r.title, h = r.className, y = r.isFullScreen;
        return /* @__PURE__ */ Xa.a.createPortal(/* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(o.a.modalOverlay, " ").concat(y ? "".concat(o.a.fillScreenView) : "")
        }, /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(o.a.modalPopup, " ").concat(h || ""),
          onClick: function(x) {
            return x.stopPropagation();
          }
        }, !y && /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.modelTitle
        }, /* @__PURE__ */ e.a.createElement("h2", null, u), /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.cross,
          onClick: a
        }, /* @__PURE__ */ e.a.createElement(de, null))), /* @__PURE__ */ e.a.createElement("hr", null)), s)), document.getElementById("modal-root"));
      }, ka = Wo;
      function qo(t) {
        var r = t.viewSource, a = t.setViewSource, s = t.sourceCode, u = t.setSourceCode, h = t.handleSaveSource;
        return /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.mlMainContentBox
        }, /* @__PURE__ */ e.a.createElement(ka, {
          isOpen: r,
          onClose: function() {
            return a(!1);
          },
          title: "Source Code",
          className: o.a.fullScreenModel
        }, /* @__PURE__ */ e.a.createElement("textarea", {
          className: o.a.wysiwygEditorSource,
          value: s,
          onChange: function(v) {
            return u(v.target.value);
          }
        }), /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.reactEditorTextEnd
        }, /* @__PURE__ */ e.a.createElement("button", {
          className: o.a.saveButton,
          onClick: h
        }, "Save"))));
      }
      function Jo(t) {
        var r = t.openPreview, a = t.setOpenPreview, s = t.previewContent;
        return /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.mlMainContentBox
        }, /* @__PURE__ */ e.a.createElement(ka, {
          isOpen: r,
          onClose: function() {
            return a(!1);
          },
          title: "Preview",
          className: o.a.fullScreenModel
        }, /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.reactEditorMt10,
          dangerouslySetInnerHTML: {
            __html: s
          }
        })));
      }
      function Zo(t) {
        var r = t.handleHideChildOptions, a = t.editorRef, s = [
          {
            name: "Arial",
            style: "Arial, sans-serif"
          },
          {
            name: "Helvetica",
            style: "Helvetica, sans-serif"
          },
          {
            name: "Times New Roman",
            style: "Times New Roman, serif"
          },
          {
            name: "Courier New",
            style: "Courier New, monospace"
          },
          {
            name: "Courier",
            style: "Courier, monospace"
          },
          {
            name: "Verdana",
            style: "Verdana, sans-serif"
          },
          {
            name: "Georgia",
            style: "Georgia, serif"
          },
          {
            name: "Palatino",
            style: "Palatino, serif"
          },
          {
            name: "Garamond",
            style: "Garamond, serif"
          },
          {
            name: "Bookman",
            style: "Bookman, serif"
          },
          {
            name: "Comic Sans MS",
            style: "Comic Sans MS, sans-serif"
          },
          {
            name: "Trebuchet MS",
            style: "Trebuchet MS, sans-serif"
          },
          {
            name: "Arial Black",
            style: "Arial Black, sans-serif"
          },
          {
            name: "Impact",
            style: "Impact, sans-serif"
          },
          {
            name: "Roboto",
            style: "Roboto, sans-serif"
          },
          {
            name: "Open Sans",
            style: "Open Sans, sans-serif"
          },
          {
            name: "Lato",
            style: "Lato, sans-serif"
          },
          {
            name: "Montserrat",
            style: "Montserrat, sans-serif"
          },
          {
            name: "Roboto Condensed",
            style: "Roboto Condensed, sans-serif"
          },
          {
            name: "Oswald",
            style: "Oswald, sans-serif"
          },
          {
            name: "Raleway",
            style: "Raleway, sans-serif"
          },
          {
            name: "Noto Sans",
            style: "Noto Sans, sans-serif"
          },
          {
            name: "Poppins",
            style: "Poppins, sans-serif"
          },
          {
            name: "Ubuntu",
            style: "Ubuntu, sans-serif"
          },
          {
            name: "Source Sans Pro",
            style: "Source Sans Pro, sans-serif"
          }
          // Add more font families as needed
        ], u = function(y, v) {
          y.preventDefault(), a.current.focus();
          var x = window.getSelection();
          x.isCollapsed, document.execCommand("styleWithCSS", !1, !0), document.execCommand("fontName", !1, v.style), r();
        };
        return /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, s.map(function(h, y) {
          return /* @__PURE__ */ e.a.createElement("button", {
            key: "key".concat(y),
            style: {
              fontFamily: h.style
            },
            className: o.a.fontFamilyOption,
            onClick: function(x) {
              return u(x, h);
            }
          }, h.name);
        }));
      }
      var Xo = Zo;
      function $o(t) {
        var r = t.handleHideChildOptions, a = ["10", "12", "14", "16", "18", "20", "24", "28", "32", "36", "48", "60", "72"], s = function(h, y) {
          h.preventDefault();
          var v = window.getSelection();
          if (v.isCollapsed) {
            var O = v.getRangeAt(0), Y = document.createElement("span");
            Y.style.fontSize = y + "px", Y.innerHTML = "​", O.insertNode(Y), O.setStart(Y, 1), O.setEnd(Y, 1), v.removeAllRanges(), v.addRange(O);
          } else {
            document.execCommand("styleWithCSS", !1, !0), document.execCommand("fontSize", !1, "1");
            var x = v.getRangeAt(0), k = document.createElement("span");
            k.style.fontSize = y + "px", x.surroundContents(k);
          }
          r();
        };
        return /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, a.map(function(u, h) {
          return /* @__PURE__ */ e.a.createElement("button", {
            key: "key".concat(h),
            onClick: function(v) {
              return s(v, u);
            },
            className: o.a.selectOption
          }, "".concat(u, "px"));
        }));
      }
      var ei = $o;
      function ti(t) {
        var r = t.handleHideChildOptions, a = [{
          title: "Left",
          icon: /* @__PURE__ */ e.a.createElement(ge, null),
          type: "justifyLeft"
        }, {
          title: "Center",
          icon: /* @__PURE__ */ e.a.createElement(Pt, null),
          type: "justifyCenter"
        }, {
          title: "Right",
          icon: /* @__PURE__ */ e.a.createElement(We, null),
          type: "justifyRight"
        }, {
          title: "Justify",
          icon: /* @__PURE__ */ e.a.createElement(Ie, null),
          type: "justifyFull"
        }], s = function(h, y) {
          h.preventDefault(), document.execCommand(y.type), r();
        };
        return /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, a.map(function(u, h) {
          return /* @__PURE__ */ e.a.createElement("button", {
            key: "key".concat(h),
            onClick: function(v) {
              return s(v, u);
            },
            className: "".concat(o.a.selectOption, " ").concat(o.a.reactEditorTextLeft)
          }, /* @__PURE__ */ e.a.createElement("span", {
            className: o.a.reactEditorMe5
          }, u.icon), u.title);
        }));
      }
      var ri = ti;
      function ai(t) {
        return li(t) || ii(t) || oi(t) || ni();
      }
      function ni() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function oi(t, r) {
        if (t) {
          if (typeof t == "string") return Ea(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? Ea(t, r) : void 0;
        }
      }
      function ii(t) {
        if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
      }
      function li(t) {
        if (Array.isArray(t)) return Ea(t);
      }
      function Ea(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, s = Array(r); a < r; a++) s[a] = t[a];
        return s;
      }
      function ci(t) {
        var r = t.handleHideChildOptions, a = [1, 1.1, 1.2, 1.3, 1.4, 1.5, 2], s = function(h, y) {
          h.preventDeafult();
          var v = window.getSelection();
          if (v && v.rangeCount > 0 && v.toString().trim() !== "") {
            var x = v.getRangeAt(0), k = "line-height: ".concat(y, ";"), O = function q(Q) {
              if (Q.nodeType === Node.TEXT_NODE) {
                var p = document.createElement("span");
                return p.style.cssText = k, p.appendChild(Q.cloneNode(!0)), p;
              } else if (Q.nodeType === Node.ELEMENT_NODE && Q.tagName.toLowerCase() === "p") {
                var oe = Q.cloneNode(!1);
                return ai(Q.childNodes).forEach(function(V) {
                  oe.appendChild(q(V));
                }), oe;
              } else
                return Q.cloneNode(!0);
            }, Y = O(x.cloneContents());
            x.deleteContents(), x.insertNode(Y), v.removeAllRanges(), v.addRange(x);
          }
          r();
        };
        return /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, a.map(function(u, h) {
          return /* @__PURE__ */ e.a.createElement("button", {
            key: "key".concat(h),
            onClick: function(v) {
              return s(v, u);
            },
            className: o.a.selectOption
          }, u);
        }));
      }
      var si = ci;
      function Ca(t, r) {
        return pi(t) || mi(t, r) || ui(t, r) || di();
      }
      function di() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function ui(t, r) {
        if (t) {
          if (typeof t == "string") return $a(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? $a(t, r) : void 0;
        }
      }
      function $a(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, s = Array(r); a < r; a++) s[a] = t[a];
        return s;
      }
      function mi(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var s, u, h, y, v = [], x = !0, k = !1;
          try {
            if (h = (a = a.call(t)).next, r !== 0) for (; !(x = (s = h.call(a)).done) && (v.push(s.value), v.length !== r); x = !0) ;
          } catch (O) {
            k = !0, u = O;
          } finally {
            try {
              if (!x && a.return != null && (y = a.return(), Object(y) !== y)) return;
            } finally {
              if (k) throw u;
            }
          }
          return v;
        }
      }
      function pi(t) {
        if (Array.isArray(t)) return t;
      }
      function hi(t) {
        var r, a = t.item, s = t.isFullScreen, u = t.remove_from_navbar, h = t.editorRef, y = a.options;
        y || (y = fa);
        var v = Object(i.useState)(!1), x = Ca(v, 2), k = x[0], O = x[1], Y = Object(i.useState)(0), q = Ca(Y, 2), Q = q[0], p = q[1], oe = Object(i.useState)(0), V = Ca(oe, 2), F = V[0], T = V[1], H = ya(16), G = function(Ye, Le) {
          if (Le) {
            var Ee = document.getElementById(H), Be = Ee.getBoundingClientRect().top, Re = Le.currentTarget.getBoundingClientRect().top;
            T(s ? Re : Re - Be);
          }
          O(!0), p(Ye);
        }, ce = function() {
          O(!1), p(0);
        }, ee = function(Ye, Le, Ee) {
          Ye.preventDefault(), h.current.focus(), !(Ee != null && Ee.handleClick && (Ee.handleClick(Ee, a), !Ee.add_functionality)) && (document.execCommand(Le), ce());
        };
        if ((u == null ? void 0 : u.length) > 0) {
          var me, Ae = u.find(function(B) {
            return B.name === "format";
          });
          (Ae == null || (me = Ae.options) === null || me === void 0 ? void 0 : me.length) > 0 && (y = y.filter(function(B) {
            return !(Ae != null && Ae.options.includes(B));
          }));
        }
        return /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.customSelect,
          onMouseOver: function() {
            return O(!0);
          },
          onMouseLeave: ce,
          id: H
        }, a != null && a.title ? a.title : "Format", /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(o.a.selectItems, " ").concat(k ? "".concat(o.a.show) : "")
        }, ((r = y) === null || r === void 0 ? void 0 : r.length) > 0 && y.map(function(B, Ye) {
          var Le = B === "bold" || B.name === "bold", Ee = B === "italic" || B.name === "italic", Be = B === "underline" || B.name === "underline", Re = B === "superscript" || B.name === "superscript", lt = B === "subscript" || B.name === "subscript", _ = B === "font" || B.name === "font", f = B === "font_size" || B.name === "font_size", w = B === "alignment" || B.name === "alignment";
          return /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, Le && /* @__PURE__ */ e.a.createElement("button", {
            className: o.a.selectInsert,
            onClick: function(A) {
              return ee(A, "bold", B);
            }
          }, B != null && B.icon ? B.icon : /* @__PURE__ */ e.a.createElement(Ce, null), /* @__PURE__ */ e.a.createElement("span", null, B != null && B.title ? B.title : "Bold")), Ee && /* @__PURE__ */ e.a.createElement("button", {
            className: o.a.selectInsert,
            onClick: function(A) {
              return ee(A, "italic", B);
            }
          }, B != null && B.icon ? B.icon : /* @__PURE__ */ e.a.createElement(nt, null), /* @__PURE__ */ e.a.createElement("span", null, B != null && B.title ? B.title : "Italic")), Be && /* @__PURE__ */ e.a.createElement("button", {
            className: o.a.selectInsert,
            onClick: function(A) {
              return ee(A, "underline", B);
            }
          }, B != null && B.icon ? B.icon : /* @__PURE__ */ e.a.createElement(K, null), /* @__PURE__ */ e.a.createElement("span", null, B != null && B.title ? B.title : "Underline")), Re && /* @__PURE__ */ e.a.createElement("button", {
            className: o.a.selectInsert,
            onClick: function(A) {
              return ee(A, "superscript", B);
            }
          }, B != null && B.icon ? B.icon : /* @__PURE__ */ e.a.createElement(_e, null), /* @__PURE__ */ e.a.createElement("span", null, B != null && B.title ? B.title : "Superscript")), lt && /* @__PURE__ */ e.a.createElement("button", {
            className: o.a.selectInsert,
            onClick: function(A) {
              return ee(A, "subscript", B);
            }
          }, B != null && B.icon ? B.icon : /* @__PURE__ */ e.a.createElement(Oe, null), /* @__PURE__ */ e.a.createElement("span", null, B != null && B.title ? B.title : "Subscript")), _ && /* @__PURE__ */ e.a.createElement("div", {
            onMouseOver: function(A) {
              G(1, A);
            },
            onMouseLeave: ce
          }, /* @__PURE__ */ e.a.createElement("div", {
            className: o.a.selectInsert
          }, B != null && B.icon ? B.icon : /* @__PURE__ */ e.a.createElement(E, null), /* @__PURE__ */ e.a.createElement("span", null, B != null && B.title ? B.title : "Font Family"))), f && /* @__PURE__ */ e.a.createElement("div", {
            onMouseOver: function(A) {
              G(2, A);
            },
            onMouseLeave: ce
          }, /* @__PURE__ */ e.a.createElement("div", {
            className: o.a.selectInsert
          }, B != null && B.icon ? B.icon : /* @__PURE__ */ e.a.createElement(D, null), /* @__PURE__ */ e.a.createElement("span", null, B != null && B.title ? B.title : "Font Size"))), w && /* @__PURE__ */ e.a.createElement("div", {
            onMouseOver: function(A) {
              G(3, A);
            },
            onMouseLeave: ce
          }, /* @__PURE__ */ e.a.createElement("div", {
            className: o.a.selectInsert
          }, B != null && B.icon ? B.icon : /* @__PURE__ */ e.a.createElement(ge, null), /* @__PURE__ */ e.a.createElement("span", null, B != null && B.title ? B.title : "Align"))));
        })), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(o.a.selectFormationDropdown, " ").concat(Q === 1 ? "".concat(o.a.show) : ""),
          onMouseOver: function() {
            G(1);
          },
          onMouseLeave: function() {
            return p(!1);
          },
          style: {
            top: F
          }
        }, /* @__PURE__ */ e.a.createElement(Xo, {
          handleHideChildOptions: ce,
          editorRef: h
        })), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(o.a.selectFormationDropdown, " ").concat(o.a.fontSizeDropdown, " ").concat(Q === 2 ? "".concat(o.a.show) : ""),
          onMouseOver: function() {
            G(2);
          },
          onMouseLeave: function() {
            return p(!1);
          },
          style: {
            top: F
          }
        }, /* @__PURE__ */ e.a.createElement(ei, {
          handleHideChildOptions: ce
        })), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(o.a.selectFormationDropdown, " ").concat(o.a.fontSizeDropdown, " ").concat(Q === 3 ? "".concat(o.a.show) : ""),
          onMouseOver: function() {
            G(3);
          },
          onMouseLeave: function() {
            return p(!1);
          },
          style: {
            top: F
          }
        }, /* @__PURE__ */ e.a.createElement(ri, {
          handleHideChildOptions: ce
        })), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(o.a.selectFormationDropdown, " ").concat(o.a.fontSizeDropdown, " ").concat(Q === 4 ? "".concat(o.a.show) : ""),
          onMouseOver: function() {
            G(4);
          },
          onMouseLeave: function() {
            return p(!1);
          },
          style: {
            top: F
          }
        }, /* @__PURE__ */ e.a.createElement(si, {
          handleHideChildOptions: ce
        })));
      }
      function Aa(t, r) {
        return bi(t) || vi(t, r) || gi(t, r) || fi();
      }
      function fi() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function gi(t, r) {
        if (t) {
          if (typeof t == "string") return en(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? en(t, r) : void 0;
        }
      }
      function en(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, s = Array(r); a < r; a++) s[a] = t[a];
        return s;
      }
      function vi(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var s, u, h, y, v = [], x = !0, k = !1;
          try {
            if (h = (a = a.call(t)).next, r === 0) {
              if (Object(a) !== a) return;
              x = !1;
            } else for (; !(x = (s = h.call(a)).done) && (v.push(s.value), v.length !== r); x = !0) ;
          } catch (O) {
            k = !0, u = O;
          } finally {
            try {
              if (!x && a.return != null && (y = a.return(), Object(y) !== y)) return;
            } finally {
              if (k) throw u;
            }
          }
          return v;
        }
      }
      function bi(t) {
        if (Array.isArray(t)) return t;
      }
      function yi(t) {
        var r = t.match(/\d+/g), a = Aa(r, 3), s = a[0], u = a[1], h = a[2], y = parseInt(s).toString(16).padStart(2, "0"), v = parseInt(u).toString(16).padStart(2, "0"), x = parseInt(h).toString(16).padStart(2, "0"), k = "#".concat(y).concat(v).concat(x);
        return k;
      }
      function tn(t) {
        var r = t.type, a = t.item, s = t.title, u = t.editorRef, h = Object(i.useState)("#000"), y = Aa(h, 2), v = y[0], x = y[1], k = Object(i.useState)(!1), O = Aa(k, 2), Y = O[0], q = O[1], Q = Object(i.useRef)(null), p = function(T, H, G) {
          T.preventDefault(), G || q(!1), !(a != null && a.handleClick && (a.handleClick(a), !a.add_functionality)) && (x(H), document.execCommand(r, !1, H), G || q(!1));
        }, oe = function(T) {
          T.preventDefault(), q(!0);
        }, V = function(T) {
          Q.current && !Q.current.contains(T.target) && q(!1);
        };
        return Object(i.useEffect)(function() {
          var F = function() {
            var H;
            if (u != null && (H = u.current) !== null && H !== void 0 && H.contains(window.getSelection().anchorNode)) {
              var G = "transparent";
              if (r === "foreColor")
                G = document.queryCommandValue(r);
              else {
                var ce = window.getSelection();
                if (ce.rangeCount > 0) {
                  var ee = ce.getRangeAt(0), me = ee.commonAncestorContainer;
                  if (me.nodeType === 3) {
                    var Ae = me.parentElement;
                    G = window.getComputedStyle(Ae).backgroundColor;
                  } else
                    G = window.getComputedStyle(me).backgroundColor;
                }
              }
              G && G !== "transparent" && x(yi(G));
            }
          };
          return document.addEventListener("selectionchange", F), document.addEventListener("mousedown", V), function() {
            document.removeEventListener("selectionchange", F), document.addEventListener("mousedown", V);
          };
        }, [u]), /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.mainColorComponent,
          ref: Q
        }, /* @__PURE__ */ e.a.createElement("button", {
          onClick: oe,
          title: a != null && a.title ? a.title : s
        }, /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(o.a.reactEditorDFlex, " ").concat(o.a.reactEditorFlexColumn)
        }, a != null && a.icon ? a.icon : r === "foreColor" ? /* @__PURE__ */ e.a.createElement(M, null) : /* @__PURE__ */ e.a.createElement(S, null), /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.bottomColoredLine,
          style: {
            backgroundColor: v
          }
        }))), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(o.a.openColorBox, " ").concat(Y ? o.a.show : "")
        }, /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(o.a.colorBoxGrid, " ").concat(o.a.reactEditorDFlex)
        }, /* @__PURE__ */ e.a.createElement("button", {
          className: o.a.colorBox,
          style: {
            backgroundColor: "#BFEDD2"
          },
          title: "Light Green",
          onClick: function(T) {
            return p(T, "#BFEDD2");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: o.a.colorBox,
          style: {
            backgroundColor: "#FBEEB8"
          },
          title: "Light Yellow",
          onClick: function(T) {
            return p(T, "#FBEEB8");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: o.a.colorBox,
          style: {
            backgroundColor: "#F8CAC6"
          },
          title: "Light Red",
          onClick: function(T) {
            return p(T, "#BFEDD2");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: o.a.colorBox,
          style: {
            backgroundColor: "#ECCAFA"
          },
          title: "Light Purple",
          onClick: function(T) {
            return p(T, "#ECCAFA");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: o.a.colorBox,
          style: {
            backgroundColor: "#C2E0F4"
          },
          title: "Light Blue",
          onClick: function(T) {
            return p(T, "#C2E0F4");
          }
        })), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(o.a.colorBoxGrid, " ").concat(o.a.reactEditorDFlex)
        }, /* @__PURE__ */ e.a.createElement("button", {
          className: o.a.colorBox,
          style: {
            backgroundColor: "#2DC26B"
          },
          title: "Green",
          onClick: function(T) {
            return p(T, "#2DC26B");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: o.a.colorBox,
          style: {
            backgroundColor: "#F1C40F"
          },
          title: "Yellow",
          onClick: function(T) {
            return p(T, "#F1C40F");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: o.a.colorBox,
          style: {
            backgroundColor: "#E03E2D"
          },
          title: "Red",
          onClick: function(T) {
            return p(T, "#E03E2D");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: o.a.colorBox,
          style: {
            backgroundColor: "#B96AD9"
          },
          title: "Purple",
          onClick: function(T) {
            return p(T, "#B96AD9");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: o.a.colorBox,
          style: {
            backgroundColor: "#3598DB"
          },
          title: "Blue",
          onClick: function(T) {
            return p(T, "#3598DB");
          }
        })), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(o.a.colorBoxGrid, " ").concat(o.a.reactEditorDFlex)
        }, /* @__PURE__ */ e.a.createElement("button", {
          className: o.a.colorBox,
          style: {
            backgroundColor: "#169179"
          },
          title: "Dark Turquoise",
          onClick: function(T) {
            return p(T, "#169179");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: o.a.colorBox,
          style: {
            backgroundColor: "#E67E23"
          },
          title: "Orange",
          onClick: function(T) {
            return p(T, "#E67E23");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: o.a.colorBox,
          style: {
            backgroundColor: "#BA372A"
          },
          title: "Dark Red",
          onClick: function(T) {
            return p(T, "#BA372A");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: o.a.colorBox,
          style: {
            backgroundColor: "#843FA1"
          },
          title: "Dark Purple",
          onClick: function(T) {
            return p(T, "#843FA1");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: o.a.colorBox,
          style: {
            backgroundColor: "#236FA1"
          },
          title: "Dark Blue",
          onClick: function(T) {
            return p(T, "#236FA1");
          }
        })), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(o.a.colorBoxGrid, " ").concat(o.a.reactEditorDFlex)
        }, /* @__PURE__ */ e.a.createElement("button", {
          className: o.a.colorBox,
          style: {
            backgroundColor: "#ECF0F1"
          },
          title: "Light Gray",
          onClick: function(T) {
            return p(T, "#ECF0F1");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: o.a.colorBox,
          style: {
            backgroundColor: "#CED4D9"
          },
          title: "Medium Gray",
          onClick: function(T) {
            return p(T, "#CED4D9");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: o.a.colorBox,
          style: {
            backgroundColor: "#95A5A6"
          },
          title: "Gray",
          onClick: function(T) {
            return p(T, "#95A5A6");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: o.a.colorBox,
          style: {
            backgroundColor: "#7E8C8D"
          },
          title: "Dark Gray",
          onClick: function(T) {
            return p(T, "#7E8C8D");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: o.a.colorBox,
          style: {
            backgroundColor: "#34495E"
          },
          title: "Navy Blue",
          onClick: function(T) {
            return p(T, "#34495E");
          }
        })), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(o.a.colorBoxGrid, " ").concat(o.a.reactEditorDFlex)
        }, /* @__PURE__ */ e.a.createElement("button", {
          className: o.a.colorBox,
          style: {
            backgroundColor: "#fff"
          },
          title: "White",
          onClick: function(T) {
            return p(T, "#fff");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: o.a.colorBox,
          style: {
            backgroundColor: "#000"
          },
          title: "Black",
          onClick: function(T) {
            return p(T, "#000");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: o.a.colorBox,
          style: {
            pointerEvents: "none"
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: o.a.colorBox,
          style: {
            pointerEvents: "none"
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: o.a.colorBox,
          title: "Custom color",
          style: {
            cursor: "pointer",
            display: "flex",
            alignItems: "center"
          }
        }, /* @__PURE__ */ e.a.createElement("input", {
          id: "input-color",
          type: "color",
          value: v,
          onChange: function(T) {
            return p(T, T.target.value, "input");
          }
        })))));
      }
      function rn(t) {
        var r = t.name, a = t.icon, s = t.title, u = t.item, h = t.editorRef, y = function(x) {
          x.preventDefault(), !(u != null && u.handleClick && (u.handleClick(u), !u.add_functionality)) && h.current && (h.current.dir = r);
        };
        return /* @__PURE__ */ e.a.createElement("button", {
          onClick: y,
          title: u != null && u.title ? u.title : s
        }, u != null && u.icon ? u.icon : a);
      }
      var wi = function() {
        return /* @__PURE__ */ Xa.a.createPortal(/* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(o.a.modalOverlay, " ").concat(o.a.imageModelOverly)
        }, /* @__PURE__ */ e.a.createElement("div", {
          onClick: function(a) {
            return a.stopPropagation();
          }
        }, /* @__PURE__ */ e.a.createElement("img", {
          src: Te,
          alt: ""
        }))), document.getElementById("modal-root"));
      }, xi = wi;
      function an() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 512 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          fill: "currentColor",
          d: "M104.6 48H64C28.7 48 0 76.7 0 112v272c0 35.3 28.7 64 64 64h96v-48H64c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h16c0 17.7 14.3 32 32 32h72.4c17.6-19.6 43.2-32 71.6-32h62c-7.1-27.6-32.2-48-62-48h-40.6C211.6 20.9 188.2 0 160 0s-51.6 20.9-55.4 48m39.4 8a16 16 0 1 1 32 0a16 16 0 1 1-32 0m304 408H256c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16h140.1l67.9 67.9V448c0 8.8-7.2 16-16 16m-192 48h192c35.3 0 64-28.7 64-64V243.9c0-12.7-5.1-24.9-14.1-33.9L430 142.1c-9-9-21.2-14.1-33.9-14.1H256c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64"
        }));
      }
      function nn() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 16 16"
        }, /* @__PURE__ */ e.a.createElement("path", {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "m5.142 11.074l-1.912.548a2.532 2.532 0 1 1-1.395-4.867l1.947-.559a2.532 2.532 0 0 1 2.555.713l1.53-5.335c.139-.485.6-.897 1.159-1.238c.27-.164.52-.278.779-.32c.814-.132 1.503.558 1.261 1.422L9.574 6.643l4.988-1.43c.864-.242 1.554.447 1.422 1.26c-.042.26-.156.51-.32.78c-.341.56-.753 1.02-1.238 1.16L9.523 9.817a2.53 2.53 0 0 1 .56 2.4l-.56 1.947a2.532 2.532 0 1 1-4.867-1.395zm.33-1.148l.48-1.673a1.52 1.52 0 0 0-1.89-1.083l-1.948.558a1.52 1.52 0 0 0 .837 2.92zm3.773-2.135l-.33 1.148l5.232-1.5c.324-.093 1.182-1.39.694-1.253zM5.63 13.049a1.52 1.52 0 0 0 2.92.837l.559-1.947a1.52 1.52 0 0 0-1.553-1.935l2.537-8.845c.136-.488-1.16.37-1.253.694zm.973.279l.559-1.947a.506.506 0 1 1 .973.279l-.558 1.947a.506.506 0 1 1-.974-.28m-3.93-3.653a.506.506 0 1 1-.28-.973l1.947-.558a.506.506 0 0 1 .28.973z"
        }));
      }
      function on() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 16 16"
        }, /* @__PURE__ */ e.a.createElement("path", {
          fill: "currentColor",
          d: "M0 2.729V2a1 1 0 0 1 1-1h2v1H1v12h4v1H1a1 1 0 0 1-1-1V9zM12 5V2a1 1 0 0 0-1-1H9v1h2v3zm-1 1h2v9H6V6zV5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2z"
        }), /* @__PURE__ */ e.a.createElement("path", {
          fill: "currentColor",
          d: "M7 10h5V9H7zm0-2h5V7H7zm0 4h5v-1H7zm0 2h5v-1H7zM9 2V1a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v1h1V1h4v1zM3 3h6V2H3z"
        }));
      }
      function xr(t) {
        "@babel/helpers - typeof";
        return xr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
          return typeof r;
        } : function(r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
        }, xr(t);
      }
      function Sa() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
        Sa = function() {
          return r;
        };
        var t, r = {}, a = Object.prototype, s = a.hasOwnProperty, u = Object.defineProperty || function(_, f, w) {
          _[f] = w.value;
        }, h = typeof Symbol == "function" ? Symbol : {}, y = h.iterator || "@@iterator", v = h.asyncIterator || "@@asyncIterator", x = h.toStringTag || "@@toStringTag";
        function k(_, f, w) {
          return Object.defineProperty(_, f, { value: w, enumerable: !0, configurable: !0, writable: !0 }), _[f];
        }
        try {
          k({}, "");
        } catch {
          k = function(w, N, A) {
            return w[N] = A;
          };
        }
        function O(_, f, w, N) {
          var A = f && f.prototype instanceof F ? f : F, I = Object.create(A.prototype), he = new Re(N || []);
          return u(I, "_invoke", { value: Ye(_, w, he) }), I;
        }
        function Y(_, f, w) {
          try {
            return { type: "normal", arg: _.call(f, w) };
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        r.wrap = O;
        var q = "suspendedStart", Q = "suspendedYield", p = "executing", oe = "completed", V = {};
        function F() {
        }
        function T() {
        }
        function H() {
        }
        var G = {};
        k(G, y, function() {
          return this;
        });
        var ce = Object.getPrototypeOf, ee = ce && ce(ce(lt([])));
        ee && ee !== a && s.call(ee, y) && (G = ee);
        var me = H.prototype = F.prototype = Object.create(G);
        function Ae(_) {
          ["next", "throw", "return"].forEach(function(f) {
            k(_, f, function(w) {
              return this._invoke(f, w);
            });
          });
        }
        function B(_, f) {
          function w(A, I, he, Se) {
            var Me = Y(_[A], _, I);
            if (Me.type !== "throw") {
              var Ke = Me.arg, Xe = Ke.value;
              return Xe && xr(Xe) == "object" && s.call(Xe, "__await") ? f.resolve(Xe.__await).then(function(ot) {
                w("next", ot, he, Se);
              }, function(ot) {
                w("throw", ot, he, Se);
              }) : f.resolve(Xe).then(function(ot) {
                Ke.value = ot, he(Ke);
              }, function(ot) {
                return w("throw", ot, he, Se);
              });
            }
            Se(Me.arg);
          }
          var N;
          u(this, "_invoke", { value: function(I, he) {
            function Se() {
              return new f(function(Me, Ke) {
                w(I, he, Me, Ke);
              });
            }
            return N = N ? N.then(Se, Se) : Se();
          } });
        }
        function Ye(_, f, w) {
          var N = q;
          return function(A, I) {
            if (N === p) throw Error("Generator is already running");
            if (N === oe) {
              if (A === "throw") throw I;
              return { value: t, done: !0 };
            }
            for (w.method = A, w.arg = I; ; ) {
              var he = w.delegate;
              if (he) {
                var Se = Le(he, w);
                if (Se) {
                  if (Se === V) continue;
                  return Se;
                }
              }
              if (w.method === "next") w.sent = w._sent = w.arg;
              else if (w.method === "throw") {
                if (N === q) throw N = oe, w.arg;
                w.dispatchException(w.arg);
              } else w.method === "return" && w.abrupt("return", w.arg);
              N = p;
              var Me = Y(_, f, w);
              if (Me.type === "normal") {
                if (N = w.done ? oe : Q, Me.arg === V) continue;
                return { value: Me.arg, done: w.done };
              }
              Me.type === "throw" && (N = oe, w.method = "throw", w.arg = Me.arg);
            }
          };
        }
        function Le(_, f) {
          var w = f.method, N = _.iterator[w];
          if (N === t) return f.delegate = null, w === "throw" && _.iterator.return && (f.method = "return", f.arg = t, Le(_, f), f.method === "throw") || w !== "return" && (f.method = "throw", f.arg = new TypeError("The iterator does not provide a '" + w + "' method")), V;
          var A = Y(N, _.iterator, f.arg);
          if (A.type === "throw") return f.method = "throw", f.arg = A.arg, f.delegate = null, V;
          var I = A.arg;
          return I ? I.done ? (f[_.resultName] = I.value, f.next = _.nextLoc, f.method !== "return" && (f.method = "next", f.arg = t), f.delegate = null, V) : I : (f.method = "throw", f.arg = new TypeError("iterator result is not an object"), f.delegate = null, V);
        }
        function Ee(_) {
          var f = { tryLoc: _[0] };
          1 in _ && (f.catchLoc = _[1]), 2 in _ && (f.finallyLoc = _[2], f.afterLoc = _[3]), this.tryEntries.push(f);
        }
        function Be(_) {
          var f = _.completion || {};
          f.type = "normal", delete f.arg, _.completion = f;
        }
        function Re(_) {
          this.tryEntries = [{ tryLoc: "root" }], _.forEach(Ee, this), this.reset(!0);
        }
        function lt(_) {
          if (_ || _ === "") {
            var f = _[y];
            if (f) return f.call(_);
            if (typeof _.next == "function") return _;
            if (!isNaN(_.length)) {
              var w = -1, N = function A() {
                for (; ++w < _.length; ) if (s.call(_, w)) return A.value = _[w], A.done = !1, A;
                return A.value = t, A.done = !0, A;
              };
              return N.next = N;
            }
          }
          throw new TypeError(xr(_) + " is not iterable");
        }
        return T.prototype = H, u(me, "constructor", { value: H, configurable: !0 }), u(H, "constructor", { value: T, configurable: !0 }), T.displayName = k(H, x, "GeneratorFunction"), r.isGeneratorFunction = function(_) {
          var f = typeof _ == "function" && _.constructor;
          return !!f && (f === T || (f.displayName || f.name) === "GeneratorFunction");
        }, r.mark = function(_) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(_, H) : (_.__proto__ = H, k(_, x, "GeneratorFunction")), _.prototype = Object.create(me), _;
        }, r.awrap = function(_) {
          return { __await: _ };
        }, Ae(B.prototype), k(B.prototype, v, function() {
          return this;
        }), r.AsyncIterator = B, r.async = function(_, f, w, N, A) {
          A === void 0 && (A = Promise);
          var I = new B(O(_, f, w, N), A);
          return r.isGeneratorFunction(f) ? I : I.next().then(function(he) {
            return he.done ? he.value : I.next();
          });
        }, Ae(me), k(me, x, "Generator"), k(me, y, function() {
          return this;
        }), k(me, "toString", function() {
          return "[object Generator]";
        }), r.keys = function(_) {
          var f = Object(_), w = [];
          for (var N in f) w.push(N);
          return w.reverse(), function A() {
            for (; w.length; ) {
              var I = w.pop();
              if (I in f) return A.value = I, A.done = !1, A;
            }
            return A.done = !0, A;
          };
        }, r.values = lt, Re.prototype = { constructor: Re, reset: function(f) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(Be), !f) for (var w in this) w.charAt(0) === "t" && s.call(this, w) && !isNaN(+w.slice(1)) && (this[w] = t);
        }, stop: function() {
          this.done = !0;
          var f = this.tryEntries[0].completion;
          if (f.type === "throw") throw f.arg;
          return this.rval;
        }, dispatchException: function(f) {
          if (this.done) throw f;
          var w = this;
          function N(Ke, Xe) {
            return he.type = "throw", he.arg = f, w.next = Ke, Xe && (w.method = "next", w.arg = t), !!Xe;
          }
          for (var A = this.tryEntries.length - 1; A >= 0; --A) {
            var I = this.tryEntries[A], he = I.completion;
            if (I.tryLoc === "root") return N("end");
            if (I.tryLoc <= this.prev) {
              var Se = s.call(I, "catchLoc"), Me = s.call(I, "finallyLoc");
              if (Se && Me) {
                if (this.prev < I.catchLoc) return N(I.catchLoc, !0);
                if (this.prev < I.finallyLoc) return N(I.finallyLoc);
              } else if (Se) {
                if (this.prev < I.catchLoc) return N(I.catchLoc, !0);
              } else {
                if (!Me) throw Error("try statement without catch or finally");
                if (this.prev < I.finallyLoc) return N(I.finallyLoc);
              }
            }
          }
        }, abrupt: function(f, w) {
          for (var N = this.tryEntries.length - 1; N >= 0; --N) {
            var A = this.tryEntries[N];
            if (A.tryLoc <= this.prev && s.call(A, "finallyLoc") && this.prev < A.finallyLoc) {
              var I = A;
              break;
            }
          }
          I && (f === "break" || f === "continue") && I.tryLoc <= w && w <= I.finallyLoc && (I = null);
          var he = I ? I.completion : {};
          return he.type = f, he.arg = w, I ? (this.method = "next", this.next = I.finallyLoc, V) : this.complete(he);
        }, complete: function(f, w) {
          if (f.type === "throw") throw f.arg;
          return f.type === "break" || f.type === "continue" ? this.next = f.arg : f.type === "return" ? (this.rval = this.arg = f.arg, this.method = "return", this.next = "end") : f.type === "normal" && w && (this.next = w), V;
        }, finish: function(f) {
          for (var w = this.tryEntries.length - 1; w >= 0; --w) {
            var N = this.tryEntries[w];
            if (N.finallyLoc === f) return this.complete(N.completion, N.afterLoc), Be(N), V;
          }
        }, catch: function(f) {
          for (var w = this.tryEntries.length - 1; w >= 0; --w) {
            var N = this.tryEntries[w];
            if (N.tryLoc === f) {
              var A = N.completion;
              if (A.type === "throw") {
                var I = A.arg;
                Be(N);
              }
              return I;
            }
          }
          throw Error("illegal catch attempt");
        }, delegateYield: function(f, w, N) {
          return this.delegate = { iterator: lt(f), resultName: w, nextLoc: N }, this.method === "next" && (this.arg = t), V;
        } }, r;
      }
      function ln(t, r, a, s, u, h, y) {
        try {
          var v = t[h](y), x = v.value;
        } catch (k) {
          return void a(k);
        }
        v.done ? r(x) : Promise.resolve(x).then(s, u);
      }
      function _i(t) {
        return function() {
          var r = this, a = arguments;
          return new Promise(function(s, u) {
            var h = t.apply(r, a);
            function y(x) {
              ln(h, s, u, y, v, "next", x);
            }
            function v(x) {
              ln(h, s, u, y, v, "throw", x);
            }
            y(void 0);
          });
        };
      }
      function cn(t, r) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(t);
          r && (s = s.filter(function(u) {
            return Object.getOwnPropertyDescriptor(t, u).enumerable;
          })), a.push.apply(a, s);
        }
        return a;
      }
      function Fr(t) {
        for (var r = 1; r < arguments.length; r++) {
          var a = arguments[r] != null ? arguments[r] : {};
          r % 2 ? cn(Object(a), !0).forEach(function(s) {
            sn(t, s, a[s]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : cn(Object(a)).forEach(function(s) {
            Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(a, s));
          });
        }
        return t;
      }
      function sn(t, r, a) {
        return (r = ki(r)) in t ? Object.defineProperty(t, r, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : t[r] = a, t;
      }
      function ki(t) {
        var r = Ei(t, "string");
        return xr(r) == "symbol" ? r : r + "";
      }
      function Ei(t, r) {
        if (xr(t) != "object" || !t) return t;
        var a = t[Symbol.toPrimitive];
        if (a !== void 0) {
          var s = a.call(t, r);
          if (xr(s) != "object") return s;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (r === "string" ? String : Number)(t);
      }
      function dn(t, r) {
        return Ii(t) || Si(t, r) || Ai(t, r) || Ci();
      }
      function Ci() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Ai(t, r) {
        if (t) {
          if (typeof t == "string") return un(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? un(t, r) : void 0;
        }
      }
      function un(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, s = Array(r); a < r; a++) s[a] = t[a];
        return s;
      }
      function Si(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var s, u, h, y, v = [], x = !0, k = !1;
          try {
            if (h = (a = a.call(t)).next, r !== 0) for (; !(x = (s = h.call(a)).done) && (v.push(s.value), v.length !== r); x = !0) ;
          } catch (O) {
            k = !0, u = O;
          } finally {
            try {
              if (!x && a.return != null && (y = a.return(), Object(y) !== y)) return;
            } finally {
              if (k) throw u;
            }
          }
          return v;
        }
      }
      function Ii(t) {
        if (Array.isArray(t)) return t;
      }
      function Mi(t) {
        var r = t.onLinkInsert, a = t.item, s = t.setIsOpenModel, u = t.selectedData, h = t.imageUrl, y = t.setImageUrl, v = t.image_handler, x = t.setIsLoading, k = Object(i.useState)({}), O = dn(k, 2), Y = O[0], q = O[1], Q = Object(i.useState)({
          text: "",
          link: "",
          open_new_tab: !1,
          link_type: "text"
        }), p = dn(Q, 2), oe = p[0], V = p[1], F = function(me) {
          if (me.preventDefault(), oe.link) {
            if (oe.link_type === "image" && !h) {
              var B = {
                type: "image",
                message: "Please upload image"
              };
              q(B);
              return;
            } else if (oe.link_type === "button" && !oe.text) {
              var Ye = {
                type: "button",
                message: "Please add text to display on button"
              };
              q(Ye);
              return;
            }
          } else {
            var Ae = {
              type: "link",
              message: "Please add link URL"
            };
            q(Ae);
            return;
          }
          if (a != null && a.handleSubmit && (a.handleSubmit(a), !a.add_functionality)) {
            s("");
            return;
          }
          r(oe);
        }, T = function(me) {
          var Ae = me.target, B = Ae.name, Ye = Ae.value;
          V(function(Le) {
            return Fr(Fr({}, Le), {}, sn({}, B, Ye));
          });
        }, H = function() {
          y("");
        }, G = /* @__PURE__ */ function() {
          var ee = _i(/* @__PURE__ */ Sa().mark(function me(Ae) {
            var B, Ye, Le;
            return Sa().wrap(function(Be) {
              for (; ; ) switch (Be.prev = Be.next) {
                case 0:
                  if (B = Ae.target.files, Ye = {
                    image: B[0]
                  }, !v) {
                    Be.next = 10;
                    break;
                  }
                  return x(!0), Be.next = 6, v(Ye);
                case 6:
                  Le = Be.sent, Le && y(Le), x(!1), Be.next = 11;
                  break;
                case 10:
                  y(URL.createObjectURL(Ye.image));
                case 11:
                case "end":
                  return Be.stop();
              }
            }, me);
          }));
          return function(Ae) {
            return ee.apply(this, arguments);
          };
        }(), ce = function(me, Ae) {
          me.preventDefault(), V(function(B) {
            return Fr(Fr({}, B), {}, {
              link_type: Ae
            });
          }), q("");
        };
        return Object(i.useEffect)(function() {
          if (u != null && u.text) {
            var ee = Fr({}, u), me = ee.link_type;
            me || (ee.link_type = "text"), V(ee);
          }
        }, [u]), /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.selectType
        }, /* @__PURE__ */ e.a.createElement("button", {
          className: "".concat(oe.link_type === "text" ? o.a.selectedType : ""),
          onClick: function(me) {
            return ce(me, "text");
          }
        }, "Text"), /* @__PURE__ */ e.a.createElement("button", {
          className: "".concat(oe.link_type === "image" ? o.a.selectedType : ""),
          onClick: function(me) {
            return ce(me, "image");
          }
        }, "Image"), /* @__PURE__ */ e.a.createElement("button", {
          className: "".concat(oe.link_type === "button" ? o.a.selectedType : ""),
          onClick: function(me) {
            return ce(me, "button");
          }
        }, "Button")), /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.reactEditorMt10
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "link"
        }, "URL*"), /* @__PURE__ */ e.a.createElement("input", {
          id: "link",
          type: "text",
          name: "link",
          autoFocus: !0,
          className: o.a.formControlInput,
          value: oe.link,
          onChange: T
        }), Y.type === "link" && /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.editorErrorMessage
        }, "*", "".concat(Y.message))), oe.link_type === "image" ? /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, h ? /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.linkImageBox
        }, /* @__PURE__ */ e.a.createElement("span", {
          className: o.a.linkImageCross,
          onClick: H
        }, "x"), /* @__PURE__ */ e.a.createElement("img", {
          src: h,
          alt: "ImageLink",
          className: o.a.linkImage
        })) : /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.reactEditorMt10
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "image"
        }, "Choose File *"), /* @__PURE__ */ e.a.createElement("input", {
          type: "file",
          id: "image",
          name: "image",
          className: o.a.formControlInput,
          accept: "image/*",
          onChange: G
        }), Y.type === "image" && /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.editorErrorMessage
        }, "*", "".concat(Y.message)))) : /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.reactEditorMt10
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "text"
        }, "Text to display ".concat(oe.link_type === "button" ? "*" : "")), /* @__PURE__ */ e.a.createElement("input", {
          id: "text",
          type: "text",
          name: "text",
          value: oe.text,
          onChange: T,
          className: o.a.formControlInput
        }), Y.type === "button" && /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.editorErrorMessage
        }, "*", "".concat(Y.message))), /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.reactEditorMt10
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "open_new_tab"
        }, "Open in"), /* @__PURE__ */ e.a.createElement("select", {
          name: "open_new_tab",
          id: "open_new_tab",
          className: "".concat(o.a.formControlInput, " ").concat(o.a.reactEditorMt2),
          value: oe.open_new_tab,
          onChange: T
        }, /* @__PURE__ */ e.a.createElement("option", {
          value: !1
        }, "Current window"), /* @__PURE__ */ e.a.createElement("option", {
          value: !0
        }, "New window"))), /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.reactEditorTextEnd
        }, /* @__PURE__ */ e.a.createElement("button", {
          className: o.a.saveButton,
          onClick: F
        }, "Save"))));
      }
      var Ni = Object.defineProperty, Ri = (t, r, a) => r in t ? Ni(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[r] = a, ft = (t, r, a) => Ri(t, typeof r != "symbol" ? r + "" : r, a);
      const ta = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        unit: "px"
      }, Or = (t, r, a) => Math.min(Math.max(t, r), a), Li = (...t) => t.filter((r) => r && typeof r == "string").join(" "), mn = (t, r) => t === r || t.width === r.width && t.height === r.height && t.x === r.x && t.y === r.y && t.unit === r.unit;
      function Dr(t, r, a) {
        return t.unit === "%" ? { ...ta, ...t, unit: "%" } : {
          unit: "%",
          x: t.x ? t.x / r * 100 : 0,
          y: t.y ? t.y / a * 100 : 0,
          width: t.width ? t.width / r * 100 : 0,
          height: t.height ? t.height / a * 100 : 0
        };
      }
      function ur(t, r, a) {
        return t.unit ? t.unit === "px" ? { ...ta, ...t, unit: "px" } : {
          unit: "px",
          x: t.x ? t.x * r / 100 : 0,
          y: t.y ? t.y * a / 100 : 0,
          width: t.width ? t.width * r / 100 : 0,
          height: t.height ? t.height * a / 100 : 0
        } : { ...ta, ...t, unit: "px" };
      }
      function pn(t, r, a, s, u, h = 0, y = 0, v = s, x = u) {
        const k = { ...t };
        let O = Math.min(h, s), Y = Math.min(y, u), q = Math.min(v, s), Q = Math.min(x, u);
        r && (r > 1 ? (O = y ? y * r : O, Y = O / r, q = v * r) : (Y = h ? h / r : Y, O = Y * r, Q = x / r)), k.y < 0 && (k.height = Math.max(k.height + k.y, Y), k.y = 0), k.x < 0 && (k.width = Math.max(k.width + k.x, O), k.x = 0);
        const p = s - (k.x + k.width);
        p < 0 && (k.x = Math.min(k.x, s - O), k.width += p);
        const oe = u - (k.y + k.height);
        if (oe < 0 && (k.y = Math.min(k.y, u - Y), k.height += oe), k.width < O && ((a === "sw" || a == "nw") && (k.x -= O - k.width), k.width = O), k.height < Y && ((a === "nw" || a == "ne") && (k.y -= Y - k.height), k.height = Y), k.width > q && ((a === "sw" || a == "nw") && (k.x -= q - k.width), k.width = q), k.height > Q && ((a === "nw" || a == "ne") && (k.y -= Q - k.height), k.height = Q), r) {
          const V = k.width / k.height;
          if (V < r) {
            const F = Math.max(k.width / r, Y);
            (a === "nw" || a == "ne") && (k.y -= F - k.height), k.height = F;
          } else if (V > r) {
            const F = Math.max(k.height * r, O);
            (a === "sw" || a == "nw") && (k.x -= F - k.width), k.width = F;
          }
        }
        return k;
      }
      function Oi(t, r, a, s) {
        const u = { ...t };
        return r === "ArrowLeft" ? s === "nw" ? (u.x -= a, u.y -= a, u.width += a, u.height += a) : s === "w" ? (u.x -= a, u.width += a) : s === "sw" ? (u.x -= a, u.width += a, u.height += a) : s === "ne" ? (u.y += a, u.width -= a, u.height -= a) : s === "e" ? u.width -= a : s === "se" && (u.width -= a, u.height -= a) : r === "ArrowRight" && (s === "nw" ? (u.x += a, u.y += a, u.width -= a, u.height -= a) : s === "w" ? (u.x += a, u.width -= a) : s === "sw" ? (u.x += a, u.width -= a, u.height -= a) : s === "ne" ? (u.y -= a, u.width += a, u.height += a) : s === "e" ? u.width += a : s === "se" && (u.width += a, u.height += a)), r === "ArrowUp" ? s === "nw" ? (u.x -= a, u.y -= a, u.width += a, u.height += a) : s === "n" ? (u.y -= a, u.height += a) : s === "ne" ? (u.y -= a, u.width += a, u.height += a) : s === "sw" ? (u.x += a, u.width -= a, u.height -= a) : s === "s" ? u.height -= a : s === "se" && (u.width -= a, u.height -= a) : r === "ArrowDown" && (s === "nw" ? (u.x += a, u.y += a, u.width -= a, u.height -= a) : s === "n" ? (u.y += a, u.height -= a) : s === "ne" ? (u.y += a, u.width -= a, u.height -= a) : s === "sw" ? (u.x -= a, u.width += a, u.height += a) : s === "s" ? u.height += a : s === "se" && (u.width += a, u.height += a)), u;
      }
      const Br = { capture: !0, passive: !1 };
      let Di = 0;
      const mr = class Zt extends i.PureComponent {
        constructor() {
          super(...arguments), ft(this, "docMoveBound", !1), ft(this, "mouseDownOnCrop", !1), ft(this, "dragStarted", !1), ft(this, "evData", {
            startClientX: 0,
            startClientY: 0,
            startCropX: 0,
            startCropY: 0,
            clientX: 0,
            clientY: 0,
            isResize: !0
          }), ft(this, "componentRef", Object(i.createRef)()), ft(this, "mediaRef", Object(i.createRef)()), ft(this, "resizeObserver"), ft(this, "initChangeCalled", !1), ft(this, "instanceId", `rc-${Di++}`), ft(this, "state", {
            cropIsActive: !1,
            newCropIsBeingDrawn: !1
          }), ft(this, "onCropPointerDown", (r) => {
            const { crop: a, disabled: s } = this.props, u = this.getBox();
            if (!a)
              return;
            const h = ur(a, u.width, u.height);
            if (s)
              return;
            r.cancelable && r.preventDefault(), this.bindDocMove(), this.componentRef.current.focus({ preventScroll: !0 });
            const y = r.target.dataset.ord, v = !!y;
            let x = r.clientX, k = r.clientY, O = h.x, Y = h.y;
            if (y) {
              const q = r.clientX - u.x, Q = r.clientY - u.y;
              let p = 0, oe = 0;
              y === "ne" || y == "e" ? (p = q - (h.x + h.width), oe = Q - h.y, O = h.x, Y = h.y + h.height) : y === "se" || y === "s" ? (p = q - (h.x + h.width), oe = Q - (h.y + h.height), O = h.x, Y = h.y) : y === "sw" || y == "w" ? (p = q - h.x, oe = Q - (h.y + h.height), O = h.x + h.width, Y = h.y) : (y === "nw" || y == "n") && (p = q - h.x, oe = Q - h.y, O = h.x + h.width, Y = h.y + h.height), x = O + u.x + p, k = Y + u.y + oe;
            }
            this.evData = {
              startClientX: x,
              startClientY: k,
              startCropX: O,
              startCropY: Y,
              clientX: r.clientX,
              clientY: r.clientY,
              isResize: v,
              ord: y
            }, this.mouseDownOnCrop = !0, this.setState({ cropIsActive: !0 });
          }), ft(this, "onComponentPointerDown", (r) => {
            const { crop: a, disabled: s, locked: u, keepSelection: h, onChange: y } = this.props, v = this.getBox();
            if (s || u || h && a)
              return;
            r.cancelable && r.preventDefault(), this.bindDocMove(), this.componentRef.current.focus({ preventScroll: !0 });
            const x = r.clientX - v.x, k = r.clientY - v.y, O = {
              unit: "px",
              x,
              y: k,
              width: 0,
              height: 0
            };
            this.evData = {
              startClientX: r.clientX,
              startClientY: r.clientY,
              startCropX: x,
              startCropY: k,
              clientX: r.clientX,
              clientY: r.clientY,
              isResize: !0
            }, this.mouseDownOnCrop = !0, y(ur(O, v.width, v.height), Dr(O, v.width, v.height)), this.setState({ cropIsActive: !0, newCropIsBeingDrawn: !0 });
          }), ft(this, "onDocPointerMove", (r) => {
            const { crop: a, disabled: s, onChange: u, onDragStart: h } = this.props, y = this.getBox();
            if (s || !a || !this.mouseDownOnCrop)
              return;
            r.cancelable && r.preventDefault(), this.dragStarted || (this.dragStarted = !0, h && h(r));
            const { evData: v } = this;
            v.clientX = r.clientX, v.clientY = r.clientY;
            let x;
            v.isResize ? x = this.resizeCrop() : x = this.dragCrop(), mn(a, x) || u(
              ur(x, y.width, y.height),
              Dr(x, y.width, y.height)
            );
          }), ft(this, "onComponentKeyDown", (r) => {
            const { crop: a, disabled: s, onChange: u, onComplete: h } = this.props;
            if (s)
              return;
            const y = r.key;
            let v = !1;
            if (!a)
              return;
            const x = this.getBox(), k = this.makePixelCrop(x), O = (navigator.platform.match("Mac") ? r.metaKey : r.ctrlKey) ? Zt.nudgeStepLarge : r.shiftKey ? Zt.nudgeStepMedium : Zt.nudgeStep;
            if (y === "ArrowLeft" ? (k.x -= O, v = !0) : y === "ArrowRight" ? (k.x += O, v = !0) : y === "ArrowUp" ? (k.y -= O, v = !0) : y === "ArrowDown" && (k.y += O, v = !0), v) {
              r.cancelable && r.preventDefault(), k.x = Or(k.x, 0, x.width - k.width), k.y = Or(k.y, 0, x.height - k.height);
              const Y = ur(k, x.width, x.height), q = Dr(k, x.width, x.height);
              u(Y, q), h && h(Y, q);
            }
          }), ft(this, "onHandlerKeyDown", (r, a) => {
            const {
              aspect: s = 0,
              crop: u,
              disabled: h,
              minWidth: y = 0,
              minHeight: v = 0,
              maxWidth: x,
              maxHeight: k,
              onChange: O,
              onComplete: Y
            } = this.props, q = this.getBox();
            if (h || !u)
              return;
            if (r.key === "ArrowUp" || r.key === "ArrowDown" || r.key === "ArrowLeft" || r.key === "ArrowRight")
              r.stopPropagation(), r.preventDefault();
            else
              return;
            const Q = (navigator.platform.match("Mac") ? r.metaKey : r.ctrlKey) ? Zt.nudgeStepLarge : r.shiftKey ? Zt.nudgeStepMedium : Zt.nudgeStep, p = ur(u, q.width, q.height), oe = Oi(p, r.key, Q, a), V = pn(
              oe,
              s,
              a,
              q.width,
              q.height,
              y,
              v,
              x,
              k
            );
            if (!mn(u, V)) {
              const F = Dr(V, q.width, q.height);
              O(V, F), Y && Y(V, F);
            }
          }), ft(this, "onDocPointerDone", (r) => {
            const { crop: a, disabled: s, onComplete: u, onDragEnd: h } = this.props, y = this.getBox();
            this.unbindDocMove(), !(s || !a) && this.mouseDownOnCrop && (this.mouseDownOnCrop = !1, this.dragStarted = !1, h && h(r), u && u(ur(a, y.width, y.height), Dr(a, y.width, y.height)), this.setState({ cropIsActive: !1, newCropIsBeingDrawn: !1 }));
          }), ft(this, "onDragFocus", () => {
            var r;
            (r = this.componentRef.current) == null || r.scrollTo(0, 0);
          });
        }
        get document() {
          return document;
        }
        // We unfortunately get the bounding box every time as x+y changes
        // due to scrolling.
        getBox() {
          const r = this.mediaRef.current;
          if (!r)
            return { x: 0, y: 0, width: 0, height: 0 };
          const { x: a, y: s, width: u, height: h } = r.getBoundingClientRect();
          return { x: a, y: s, width: u, height: h };
        }
        componentDidUpdate(r) {
          const { crop: a, onComplete: s } = this.props;
          if (s && !r.crop && a) {
            const { width: u, height: h } = this.getBox();
            u && h && s(ur(a, u, h), Dr(a, u, h));
          }
        }
        componentWillUnmount() {
          this.resizeObserver && this.resizeObserver.disconnect(), this.unbindDocMove();
        }
        bindDocMove() {
          this.docMoveBound || (this.document.addEventListener("pointermove", this.onDocPointerMove, Br), this.document.addEventListener("pointerup", this.onDocPointerDone, Br), this.document.addEventListener("pointercancel", this.onDocPointerDone, Br), this.docMoveBound = !0);
        }
        unbindDocMove() {
          this.docMoveBound && (this.document.removeEventListener("pointermove", this.onDocPointerMove, Br), this.document.removeEventListener("pointerup", this.onDocPointerDone, Br), this.document.removeEventListener("pointercancel", this.onDocPointerDone, Br), this.docMoveBound = !1);
        }
        getCropStyle() {
          const { crop: r } = this.props;
          if (r)
            return {
              top: `${r.y}${r.unit}`,
              left: `${r.x}${r.unit}`,
              width: `${r.width}${r.unit}`,
              height: `${r.height}${r.unit}`
            };
        }
        dragCrop() {
          const { evData: r } = this, a = this.getBox(), s = this.makePixelCrop(a), u = r.clientX - r.startClientX, h = r.clientY - r.startClientY;
          return s.x = Or(r.startCropX + u, 0, a.width - s.width), s.y = Or(r.startCropY + h, 0, a.height - s.height), s;
        }
        getPointRegion(r, a, s, u) {
          const { evData: h } = this, y = h.clientX - r.x, v = h.clientY - r.y;
          let x;
          u && a ? x = a === "nw" || a === "n" || a === "ne" : x = v < h.startCropY;
          let k;
          return s && a ? k = a === "nw" || a === "w" || a === "sw" : k = y < h.startCropX, k ? x ? "nw" : "sw" : x ? "ne" : "se";
        }
        resolveMinDimensions(r, a, s = 0, u = 0) {
          const h = Math.min(s, r.width), y = Math.min(u, r.height);
          return !a || !h && !y ? [h, y] : a > 1 ? h ? [h, h / a] : [y * a, y] : y ? [y * a, y] : [h, h / a];
        }
        resizeCrop() {
          const { evData: r } = this, { aspect: a = 0, maxWidth: s, maxHeight: u } = this.props, h = this.getBox(), [y, v] = this.resolveMinDimensions(h, a, this.props.minWidth, this.props.minHeight);
          let x = this.makePixelCrop(h);
          const k = this.getPointRegion(h, r.ord, y, v), O = r.ord || k;
          let Y = r.clientX - r.startClientX, q = r.clientY - r.startClientY;
          (y && O === "nw" || O === "w" || O === "sw") && (Y = Math.min(Y, -y)), (v && O === "nw" || O === "n" || O === "ne") && (q = Math.min(q, -v));
          const Q = {
            unit: "px",
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
          k === "ne" ? (Q.x = r.startCropX, Q.width = Y, a ? (Q.height = Q.width / a, Q.y = r.startCropY - Q.height) : (Q.height = Math.abs(q), Q.y = r.startCropY - Q.height)) : k === "se" ? (Q.x = r.startCropX, Q.y = r.startCropY, Q.width = Y, a ? Q.height = Q.width / a : Q.height = q) : k === "sw" ? (Q.x = r.startCropX + Y, Q.y = r.startCropY, Q.width = Math.abs(Y), a ? Q.height = Q.width / a : Q.height = q) : k === "nw" && (Q.x = r.startCropX + Y, Q.width = Math.abs(Y), a ? (Q.height = Q.width / a, Q.y = r.startCropY - Q.height) : (Q.height = Math.abs(q), Q.y = r.startCropY + q));
          const p = pn(
            Q,
            a,
            k,
            h.width,
            h.height,
            y,
            v,
            s,
            u
          );
          return a || Zt.xyOrds.indexOf(O) > -1 ? x = p : Zt.xOrds.indexOf(O) > -1 ? (x.x = p.x, x.width = p.width) : Zt.yOrds.indexOf(O) > -1 && (x.y = p.y, x.height = p.height), x.x = Or(x.x, 0, h.width - x.width), x.y = Or(x.y, 0, h.height - x.height), x;
        }
        renderCropSelection() {
          const {
            ariaLabels: r = Zt.defaultProps.ariaLabels,
            disabled: a,
            locked: s,
            renderSelectionAddon: u,
            ruleOfThirds: h,
            crop: y
          } = this.props, v = this.getCropStyle();
          if (y)
            return /* @__PURE__ */ e.a.createElement(
              "div",
              {
                style: v,
                className: "ReactCrop__crop-selection",
                onPointerDown: this.onCropPointerDown,
                "aria-label": r.cropArea,
                tabIndex: 0,
                onKeyDown: this.onComponentKeyDown,
                role: "group"
              },
              !a && !s && /* @__PURE__ */ e.a.createElement("div", { className: "ReactCrop__drag-elements", onFocus: this.onDragFocus }, /* @__PURE__ */ e.a.createElement("div", { className: "ReactCrop__drag-bar ord-n", "data-ord": "n" }), /* @__PURE__ */ e.a.createElement("div", { className: "ReactCrop__drag-bar ord-e", "data-ord": "e" }), /* @__PURE__ */ e.a.createElement("div", { className: "ReactCrop__drag-bar ord-s", "data-ord": "s" }), /* @__PURE__ */ e.a.createElement("div", { className: "ReactCrop__drag-bar ord-w", "data-ord": "w" }), /* @__PURE__ */ e.a.createElement(
                "div",
                {
                  className: "ReactCrop__drag-handle ord-nw",
                  "data-ord": "nw",
                  tabIndex: 0,
                  "aria-label": r.nwDragHandle,
                  onKeyDown: (x) => this.onHandlerKeyDown(x, "nw"),
                  role: "button"
                }
              ), /* @__PURE__ */ e.a.createElement(
                "div",
                {
                  className: "ReactCrop__drag-handle ord-n",
                  "data-ord": "n",
                  tabIndex: 0,
                  "aria-label": r.nDragHandle,
                  onKeyDown: (x) => this.onHandlerKeyDown(x, "n"),
                  role: "button"
                }
              ), /* @__PURE__ */ e.a.createElement(
                "div",
                {
                  className: "ReactCrop__drag-handle ord-ne",
                  "data-ord": "ne",
                  tabIndex: 0,
                  "aria-label": r.neDragHandle,
                  onKeyDown: (x) => this.onHandlerKeyDown(x, "ne"),
                  role: "button"
                }
              ), /* @__PURE__ */ e.a.createElement(
                "div",
                {
                  className: "ReactCrop__drag-handle ord-e",
                  "data-ord": "e",
                  tabIndex: 0,
                  "aria-label": r.eDragHandle,
                  onKeyDown: (x) => this.onHandlerKeyDown(x, "e"),
                  role: "button"
                }
              ), /* @__PURE__ */ e.a.createElement(
                "div",
                {
                  className: "ReactCrop__drag-handle ord-se",
                  "data-ord": "se",
                  tabIndex: 0,
                  "aria-label": r.seDragHandle,
                  onKeyDown: (x) => this.onHandlerKeyDown(x, "se"),
                  role: "button"
                }
              ), /* @__PURE__ */ e.a.createElement(
                "div",
                {
                  className: "ReactCrop__drag-handle ord-s",
                  "data-ord": "s",
                  tabIndex: 0,
                  "aria-label": r.sDragHandle,
                  onKeyDown: (x) => this.onHandlerKeyDown(x, "s"),
                  role: "button"
                }
              ), /* @__PURE__ */ e.a.createElement(
                "div",
                {
                  className: "ReactCrop__drag-handle ord-sw",
                  "data-ord": "sw",
                  tabIndex: 0,
                  "aria-label": r.swDragHandle,
                  onKeyDown: (x) => this.onHandlerKeyDown(x, "sw"),
                  role: "button"
                }
              ), /* @__PURE__ */ e.a.createElement(
                "div",
                {
                  className: "ReactCrop__drag-handle ord-w",
                  "data-ord": "w",
                  tabIndex: 0,
                  "aria-label": r.wDragHandle,
                  onKeyDown: (x) => this.onHandlerKeyDown(x, "w"),
                  role: "button"
                }
              )),
              u && /* @__PURE__ */ e.a.createElement("div", { className: "ReactCrop__selection-addon", onPointerDown: (x) => x.stopPropagation() }, u(this.state)),
              h && /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement("div", { className: "ReactCrop__rule-of-thirds-hz" }), /* @__PURE__ */ e.a.createElement("div", { className: "ReactCrop__rule-of-thirds-vt" }))
            );
        }
        makePixelCrop(r) {
          const a = { ...ta, ...this.props.crop || {} };
          return ur(a, r.width, r.height);
        }
        render() {
          const { aspect: r, children: a, circularCrop: s, className: u, crop: h, disabled: y, locked: v, style: x, ruleOfThirds: k } = this.props, { cropIsActive: O, newCropIsBeingDrawn: Y } = this.state, q = h ? this.renderCropSelection() : null, Q = Li(
            "ReactCrop",
            u,
            O && "ReactCrop--active",
            y && "ReactCrop--disabled",
            v && "ReactCrop--locked",
            Y && "ReactCrop--new-crop",
            h && r && "ReactCrop--fixed-aspect",
            h && s && "ReactCrop--circular-crop",
            h && k && "ReactCrop--rule-of-thirds",
            !this.dragStarted && h && !h.width && !h.height && "ReactCrop--invisible-crop",
            s && "ReactCrop--no-animate"
          );
          return /* @__PURE__ */ e.a.createElement("div", { ref: this.componentRef, className: Q, style: x }, /* @__PURE__ */ e.a.createElement("div", { ref: this.mediaRef, className: "ReactCrop__child-wrapper", onPointerDown: this.onComponentPointerDown }, a), h ? /* @__PURE__ */ e.a.createElement("svg", { className: "ReactCrop__crop-mask", width: "100%", height: "100%" }, /* @__PURE__ */ e.a.createElement("defs", null, /* @__PURE__ */ e.a.createElement("mask", { id: `hole-${this.instanceId}` }, /* @__PURE__ */ e.a.createElement("rect", { width: "100%", height: "100%", fill: "white" }), s ? /* @__PURE__ */ e.a.createElement(
            "ellipse",
            {
              cx: `${h.x + h.width / 2}${h.unit}`,
              cy: `${h.y + h.height / 2}${h.unit}`,
              rx: `${h.width / 2}${h.unit}`,
              ry: `${h.height / 2}${h.unit}`,
              fill: "black"
            }
          ) : /* @__PURE__ */ e.a.createElement(
            "rect",
            {
              x: `${h.x}${h.unit}`,
              y: `${h.y}${h.unit}`,
              width: `${h.width}${h.unit}`,
              height: `${h.height}${h.unit}`,
              fill: "black"
            }
          ))), /* @__PURE__ */ e.a.createElement("rect", { fill: "black", fillOpacity: 0.5, width: "100%", height: "100%", mask: `url(#hole-${this.instanceId})` })) : void 0, q);
        }
      };
      ft(mr, "xOrds", ["e", "w"]), ft(mr, "yOrds", ["n", "s"]), ft(mr, "xyOrds", ["nw", "ne", "se", "sw"]), ft(mr, "nudgeStep", 1), ft(mr, "nudgeStepMedium", 10), ft(mr, "nudgeStepLarge", 100), ft(mr, "defaultProps", {
        ariaLabels: {
          cropArea: "Use the arrow keys to move the crop selection area",
          nwDragHandle: "Use the arrow keys to move the north west drag handle to change the crop selection area",
          nDragHandle: "Use the up and down arrow keys to move the north drag handle to change the crop selection area",
          neDragHandle: "Use the arrow keys to move the north east drag handle to change the crop selection area",
          eDragHandle: "Use the up and down arrow keys to move the east drag handle to change the crop selection area",
          seDragHandle: "Use the arrow keys to move the south east drag handle to change the crop selection area",
          sDragHandle: "Use the up and down arrow keys to move the south drag handle to change the crop selection area",
          swDragHandle: "Use the arrow keys to move the south west drag handle to change the crop selection area",
          wDragHandle: "Use the up and down arrow keys to move the west drag handle to change the crop selection area"
        }
      });
      let Bi = mr;
      function zi(t, r) {
        return Fi(t) || Hi(t, r) || Ti(t, r) || ji();
      }
      function ji() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Ti(t, r) {
        if (t) {
          if (typeof t == "string") return hn(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? hn(t, r) : void 0;
        }
      }
      function hn(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, s = Array(r); a < r; a++) s[a] = t[a];
        return s;
      }
      function Hi(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var s, u, h, y, v = [], x = !0, k = !1;
          try {
            if (h = (a = a.call(t)).next, r !== 0) for (; !(x = (s = h.call(a)).done) && (v.push(s.value), v.length !== r); x = !0) ;
          } catch (O) {
            k = !0, u = O;
          } finally {
            try {
              if (!x && a.return != null && (y = a.return(), Object(y) !== y)) return;
            } finally {
              if (k) throw u;
            }
          }
          return v;
        }
      }
      function Fi(t) {
        if (Array.isArray(t)) return t;
      }
      var Pi = function(r) {
        var a = r.imageSrc, s = r.onCropComplete, u = r.aspectRatio, h = u === void 0 ? 16 / 9 : u, y = Object(i.useState)({
          aspect: h
        }), v = zi(y, 2), x = v[0], k = v[1], O = Object(i.useRef)(null), Y = Object(i.useCallback)(function(Q) {
          return O.current = Q, !1;
        }, []), q = Object(i.useCallback)(function(Q) {
          s(Q, O.current);
        }, [s]);
        return /* @__PURE__ */ e.a.createElement(Bi, {
          crop: x,
          onChange: k,
          onComplete: q
        }, /* @__PURE__ */ e.a.createElement("img", {
          ref: O,
          src: a,
          alt: "Crop preview",
          onLoad: function(p) {
            return Y(p.currentTarget);
          }
        }));
      };
      function _r(t) {
        "@babel/helpers - typeof";
        return _r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
          return typeof r;
        } : function(r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
        }, _r(t);
      }
      function Pr() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
        Pr = function() {
          return r;
        };
        var t, r = {}, a = Object.prototype, s = a.hasOwnProperty, u = Object.defineProperty || function(_, f, w) {
          _[f] = w.value;
        }, h = typeof Symbol == "function" ? Symbol : {}, y = h.iterator || "@@iterator", v = h.asyncIterator || "@@asyncIterator", x = h.toStringTag || "@@toStringTag";
        function k(_, f, w) {
          return Object.defineProperty(_, f, { value: w, enumerable: !0, configurable: !0, writable: !0 }), _[f];
        }
        try {
          k({}, "");
        } catch {
          k = function(w, N, A) {
            return w[N] = A;
          };
        }
        function O(_, f, w, N) {
          var A = f && f.prototype instanceof F ? f : F, I = Object.create(A.prototype), he = new Re(N || []);
          return u(I, "_invoke", { value: Ye(_, w, he) }), I;
        }
        function Y(_, f, w) {
          try {
            return { type: "normal", arg: _.call(f, w) };
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        r.wrap = O;
        var q = "suspendedStart", Q = "suspendedYield", p = "executing", oe = "completed", V = {};
        function F() {
        }
        function T() {
        }
        function H() {
        }
        var G = {};
        k(G, y, function() {
          return this;
        });
        var ce = Object.getPrototypeOf, ee = ce && ce(ce(lt([])));
        ee && ee !== a && s.call(ee, y) && (G = ee);
        var me = H.prototype = F.prototype = Object.create(G);
        function Ae(_) {
          ["next", "throw", "return"].forEach(function(f) {
            k(_, f, function(w) {
              return this._invoke(f, w);
            });
          });
        }
        function B(_, f) {
          function w(A, I, he, Se) {
            var Me = Y(_[A], _, I);
            if (Me.type !== "throw") {
              var Ke = Me.arg, Xe = Ke.value;
              return Xe && _r(Xe) == "object" && s.call(Xe, "__await") ? f.resolve(Xe.__await).then(function(ot) {
                w("next", ot, he, Se);
              }, function(ot) {
                w("throw", ot, he, Se);
              }) : f.resolve(Xe).then(function(ot) {
                Ke.value = ot, he(Ke);
              }, function(ot) {
                return w("throw", ot, he, Se);
              });
            }
            Se(Me.arg);
          }
          var N;
          u(this, "_invoke", { value: function(I, he) {
            function Se() {
              return new f(function(Me, Ke) {
                w(I, he, Me, Ke);
              });
            }
            return N = N ? N.then(Se, Se) : Se();
          } });
        }
        function Ye(_, f, w) {
          var N = q;
          return function(A, I) {
            if (N === p) throw Error("Generator is already running");
            if (N === oe) {
              if (A === "throw") throw I;
              return { value: t, done: !0 };
            }
            for (w.method = A, w.arg = I; ; ) {
              var he = w.delegate;
              if (he) {
                var Se = Le(he, w);
                if (Se) {
                  if (Se === V) continue;
                  return Se;
                }
              }
              if (w.method === "next") w.sent = w._sent = w.arg;
              else if (w.method === "throw") {
                if (N === q) throw N = oe, w.arg;
                w.dispatchException(w.arg);
              } else w.method === "return" && w.abrupt("return", w.arg);
              N = p;
              var Me = Y(_, f, w);
              if (Me.type === "normal") {
                if (N = w.done ? oe : Q, Me.arg === V) continue;
                return { value: Me.arg, done: w.done };
              }
              Me.type === "throw" && (N = oe, w.method = "throw", w.arg = Me.arg);
            }
          };
        }
        function Le(_, f) {
          var w = f.method, N = _.iterator[w];
          if (N === t) return f.delegate = null, w === "throw" && _.iterator.return && (f.method = "return", f.arg = t, Le(_, f), f.method === "throw") || w !== "return" && (f.method = "throw", f.arg = new TypeError("The iterator does not provide a '" + w + "' method")), V;
          var A = Y(N, _.iterator, f.arg);
          if (A.type === "throw") return f.method = "throw", f.arg = A.arg, f.delegate = null, V;
          var I = A.arg;
          return I ? I.done ? (f[_.resultName] = I.value, f.next = _.nextLoc, f.method !== "return" && (f.method = "next", f.arg = t), f.delegate = null, V) : I : (f.method = "throw", f.arg = new TypeError("iterator result is not an object"), f.delegate = null, V);
        }
        function Ee(_) {
          var f = { tryLoc: _[0] };
          1 in _ && (f.catchLoc = _[1]), 2 in _ && (f.finallyLoc = _[2], f.afterLoc = _[3]), this.tryEntries.push(f);
        }
        function Be(_) {
          var f = _.completion || {};
          f.type = "normal", delete f.arg, _.completion = f;
        }
        function Re(_) {
          this.tryEntries = [{ tryLoc: "root" }], _.forEach(Ee, this), this.reset(!0);
        }
        function lt(_) {
          if (_ || _ === "") {
            var f = _[y];
            if (f) return f.call(_);
            if (typeof _.next == "function") return _;
            if (!isNaN(_.length)) {
              var w = -1, N = function A() {
                for (; ++w < _.length; ) if (s.call(_, w)) return A.value = _[w], A.done = !1, A;
                return A.value = t, A.done = !0, A;
              };
              return N.next = N;
            }
          }
          throw new TypeError(_r(_) + " is not iterable");
        }
        return T.prototype = H, u(me, "constructor", { value: H, configurable: !0 }), u(H, "constructor", { value: T, configurable: !0 }), T.displayName = k(H, x, "GeneratorFunction"), r.isGeneratorFunction = function(_) {
          var f = typeof _ == "function" && _.constructor;
          return !!f && (f === T || (f.displayName || f.name) === "GeneratorFunction");
        }, r.mark = function(_) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(_, H) : (_.__proto__ = H, k(_, x, "GeneratorFunction")), _.prototype = Object.create(me), _;
        }, r.awrap = function(_) {
          return { __await: _ };
        }, Ae(B.prototype), k(B.prototype, v, function() {
          return this;
        }), r.AsyncIterator = B, r.async = function(_, f, w, N, A) {
          A === void 0 && (A = Promise);
          var I = new B(O(_, f, w, N), A);
          return r.isGeneratorFunction(f) ? I : I.next().then(function(he) {
            return he.done ? he.value : I.next();
          });
        }, Ae(me), k(me, x, "Generator"), k(me, y, function() {
          return this;
        }), k(me, "toString", function() {
          return "[object Generator]";
        }), r.keys = function(_) {
          var f = Object(_), w = [];
          for (var N in f) w.push(N);
          return w.reverse(), function A() {
            for (; w.length; ) {
              var I = w.pop();
              if (I in f) return A.value = I, A.done = !1, A;
            }
            return A.done = !0, A;
          };
        }, r.values = lt, Re.prototype = { constructor: Re, reset: function(f) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(Be), !f) for (var w in this) w.charAt(0) === "t" && s.call(this, w) && !isNaN(+w.slice(1)) && (this[w] = t);
        }, stop: function() {
          this.done = !0;
          var f = this.tryEntries[0].completion;
          if (f.type === "throw") throw f.arg;
          return this.rval;
        }, dispatchException: function(f) {
          if (this.done) throw f;
          var w = this;
          function N(Ke, Xe) {
            return he.type = "throw", he.arg = f, w.next = Ke, Xe && (w.method = "next", w.arg = t), !!Xe;
          }
          for (var A = this.tryEntries.length - 1; A >= 0; --A) {
            var I = this.tryEntries[A], he = I.completion;
            if (I.tryLoc === "root") return N("end");
            if (I.tryLoc <= this.prev) {
              var Se = s.call(I, "catchLoc"), Me = s.call(I, "finallyLoc");
              if (Se && Me) {
                if (this.prev < I.catchLoc) return N(I.catchLoc, !0);
                if (this.prev < I.finallyLoc) return N(I.finallyLoc);
              } else if (Se) {
                if (this.prev < I.catchLoc) return N(I.catchLoc, !0);
              } else {
                if (!Me) throw Error("try statement without catch or finally");
                if (this.prev < I.finallyLoc) return N(I.finallyLoc);
              }
            }
          }
        }, abrupt: function(f, w) {
          for (var N = this.tryEntries.length - 1; N >= 0; --N) {
            var A = this.tryEntries[N];
            if (A.tryLoc <= this.prev && s.call(A, "finallyLoc") && this.prev < A.finallyLoc) {
              var I = A;
              break;
            }
          }
          I && (f === "break" || f === "continue") && I.tryLoc <= w && w <= I.finallyLoc && (I = null);
          var he = I ? I.completion : {};
          return he.type = f, he.arg = w, I ? (this.method = "next", this.next = I.finallyLoc, V) : this.complete(he);
        }, complete: function(f, w) {
          if (f.type === "throw") throw f.arg;
          return f.type === "break" || f.type === "continue" ? this.next = f.arg : f.type === "return" ? (this.rval = this.arg = f.arg, this.method = "return", this.next = "end") : f.type === "normal" && w && (this.next = w), V;
        }, finish: function(f) {
          for (var w = this.tryEntries.length - 1; w >= 0; --w) {
            var N = this.tryEntries[w];
            if (N.finallyLoc === f) return this.complete(N.completion, N.afterLoc), Be(N), V;
          }
        }, catch: function(f) {
          for (var w = this.tryEntries.length - 1; w >= 0; --w) {
            var N = this.tryEntries[w];
            if (N.tryLoc === f) {
              var A = N.completion;
              if (A.type === "throw") {
                var I = A.arg;
                Be(N);
              }
              return I;
            }
          }
          throw Error("illegal catch attempt");
        }, delegateYield: function(f, w, N) {
          return this.delegate = { iterator: lt(f), resultName: w, nextLoc: N }, this.method === "next" && (this.arg = t), V;
        } }, r;
      }
      function fn(t, r, a, s, u, h, y) {
        try {
          var v = t[h](y), x = v.value;
        } catch (k) {
          return void a(k);
        }
        v.done ? r(x) : Promise.resolve(x).then(s, u);
      }
      function gn(t) {
        return function() {
          var r = this, a = arguments;
          return new Promise(function(s, u) {
            var h = t.apply(r, a);
            function y(x) {
              fn(h, s, u, y, v, "next", x);
            }
            function v(x) {
              fn(h, s, u, y, v, "throw", x);
            }
            y(void 0);
          });
        };
      }
      function vn(t, r) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(t);
          r && (s = s.filter(function(u) {
            return Object.getOwnPropertyDescriptor(t, u).enumerable;
          })), a.push.apply(a, s);
        }
        return a;
      }
      function Ct(t) {
        for (var r = 1; r < arguments.length; r++) {
          var a = arguments[r] != null ? arguments[r] : {};
          r % 2 ? vn(Object(a), !0).forEach(function(s) {
            Ur(t, s, a[s]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : vn(Object(a)).forEach(function(s) {
            Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(a, s));
          });
        }
        return t;
      }
      function Ur(t, r, a) {
        return (r = Ui(r)) in t ? Object.defineProperty(t, r, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : t[r] = a, t;
      }
      function Ui(t) {
        var r = Qi(t, "string");
        return _r(r) == "symbol" ? r : r + "";
      }
      function Qi(t, r) {
        if (_r(t) != "object" || !t) return t;
        var a = t[Symbol.toPrimitive];
        if (a !== void 0) {
          var s = a.call(t, r);
          if (_r(s) != "object") return s;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (r === "string" ? String : Number)(t);
      }
      function pr(t, r) {
        return Vi(t) || Ki(t, r) || Yi(t, r) || Gi();
      }
      function Gi() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Yi(t, r) {
        if (t) {
          if (typeof t == "string") return bn(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? bn(t, r) : void 0;
        }
      }
      function bn(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, s = Array(r); a < r; a++) s[a] = t[a];
        return s;
      }
      function Ki(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var s, u, h, y, v = [], x = !0, k = !1;
          try {
            if (h = (a = a.call(t)).next, r !== 0) for (; !(x = (s = h.call(a)).done) && (v.push(s.value), v.length !== r); x = !0) ;
          } catch (O) {
            k = !0, u = O;
          } finally {
            try {
              if (!x && a.return != null && (y = a.return(), Object(y) !== y)) return;
            } finally {
              if (k) throw u;
            }
          }
          return v;
        }
      }
      function Vi(t) {
        if (Array.isArray(t)) return t;
      }
      function Wi(t) {
        var r = t.onImageInsert, a = t.item, s = t.setIsLoading, u = t.image_handler, h = t.selectedData, y = Object(i.useState)(""), v = pr(y, 2), x = v[0], k = v[1], O = Object(i.useState)(0), Y = pr(O, 2), q = Y[0], Q = Y[1], p = Object(i.useState)(!0), oe = pr(p, 2), V = oe[0], F = oe[1], T = Object(i.useState)(!1), H = pr(T, 2), G = H[0], ce = H[1], ee = Object(i.useState)("default"), me = pr(ee, 2), Ae = me[0], B = me[1], Ye = Object(i.useState)(null), Le = pr(Ye, 2), Ee = Le[0], Be = Le[1], Re = Object(i.useState)(null), lt = pr(Re, 2), _ = lt[0], f = lt[1], w = Object(i.useState)({
          link: "",
          height: "",
          width: "",
          image: null,
          type: "general"
        }), N = pr(w, 2), A = N[0], I = N[1], he = function(it) {
          var vt = it.target, ct = vt.name, xt = vt.files;
          I(function(bt) {
            return Ct(Ct({}, bt), {}, Ur(Ur(Ur({}, ct, xt[0]), "height", ""), "width", ""));
          });
        }, Se = 3, Me = function gt(it) {
          var vt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, ct = 0, xt = 0, bt = new Image();
          bt.onload = function() {
            ct = bt.width, xt = bt.height;
            var er = ct / xt;
            Q(er), ce(!0), I(function(_t) {
              return Ct(Ct({}, _t), {}, {
                width: ct,
                height: xt
              });
            }), s(!1);
          }, bt.onerror = function() {
            s(!1), vt < Se && gt(it, vt + 1);
          }, bt.src = it;
        }, Ke = /* @__PURE__ */ function() {
          var gt = gn(/* @__PURE__ */ Pr().mark(function it(vt) {
            var ct, xt, bt;
            return Pr().wrap(function(_t) {
              for (; ; ) switch (_t.prev = _t.next) {
                case 0:
                  if (vt.preventDefault(), A.type !== "general") {
                    _t.next = 9;
                    break;
                  }
                  if (A.link) {
                    _t.next = 6;
                    break;
                  }
                  return ct = "Image source is required", k(ct), _t.abrupt("return");
                case 6:
                  r(A), _t.next = 29;
                  break;
                case 9:
                  if (A.image) {
                    _t.next = 13;
                    break;
                  }
                  return xt = "Please upload image", k(xt), _t.abrupt("return");
                case 13:
                  if (!u) {
                    _t.next = 22;
                    break;
                  }
                  return s(!0), _t.next = 17, u(Ct({}, A), a);
                case 17:
                  return bt = _t.sent, bt ? (Me(bt), I(function(aa) {
                    return Ct(Ct({}, aa), {}, {
                      type: "general",
                      link: bt
                    });
                  })) : s(!1), _t.abrupt("return");
                case 22:
                  A.link = URL.createObjectURL(A.image), A.width = "", A.height = "";
                case 25:
                  if (A.link) {
                    _t.next = 28;
                    break;
                  }
                  return s(!1), _t.abrupt("return");
                case 28:
                  r(A);
                case 29:
                case "end":
                  return _t.stop();
              }
            }, it);
          }));
          return function(vt) {
            return gt.apply(this, arguments);
          };
        }(), Xe = function(it) {
          var vt = it.target, ct = vt.name, xt = vt.value, bt = A.height, er = A.width;
          ct === "width" ? (bt = xt / q, er = xt) : (er = xt * q, bt = xt), bt = Math.round(bt), er = Math.round(er), I(function(_t) {
            return Ct(Ct({}, _t), {}, {
              height: bt,
              width: er
            });
          });
        }, ot = function(it) {
          var vt = it.target, ct = vt.name, xt = vt.value;
          if (V && ct !== "link" && G && A.link) {
            Xe(it);
            return;
          }
          ct === "link" && xt === "" && (I(function(bt) {
            return Ct(Ct({}, bt), {}, {
              height: 0,
              width: 0
            });
          }), ce(!1)), I(function(bt) {
            return Ct(Ct({}, bt), {}, Ur({}, ct, xt));
          });
        }, Yr = function(it, vt) {
          it.preventDefault(), I(function(ct) {
            return Ct(Ct({}, ct), {}, {
              type: vt,
              image: null
            });
          }), k("");
        }, $t = Object(i.useCallback)(function(gt, it) {
          Be(gt), f(it);
        }, []), Yt = Object(i.useCallback)(function() {
          B("default"), Be(null);
        }, []), Ra = Object(i.useCallback)(/* @__PURE__ */ gn(/* @__PURE__ */ Pr().mark(function gt() {
          var it;
          return Pr().wrap(function(ct) {
            for (; ; ) switch (ct.prev = ct.next) {
              case 0:
                if (!(!Ee || !_)) {
                  ct.next = 3;
                  break;
                }
                return console.error("No crop data or image reference"), ct.abrupt("return");
              case 3:
                return ct.next = 5, wa(_, Ee, A.image);
              case 5:
                if (it = ct.sent, it) {
                  ct.next = 9;
                  break;
                }
                return console.error("Failed to crop image"), ct.abrupt("return");
              case 9:
                I(function(xt) {
                  return Ct(Ct({}, xt), {}, {
                    image: it
                  });
                }), Yt();
              case 11:
              case "end":
                return ct.stop();
            }
          }, gt);
        })), [Ee, _, Yt, A.image]);
        return Object(i.useEffect)(function() {
          if (h != null && h.link) {
            var gt = parseFloat(h.height), it = parseFloat(h.width), vt = it / gt;
            Q(vt), ce(!0), I(Ct(Ct(Ct({}, A), h), {}, {
              height: gt,
              width: it
            }));
          }
        }, [h, A]), Object(i.useEffect)(function() {
          if (Ae !== "default") {
            var gt = document.querySelector(".ReactCrop");
            console.log(gt, "reactCropElemreactCropElem"), gt.style.maxHeight = "350px";
          }
        }, [Ae]), /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, Ae === "crop" ? /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.image__cropper__box
        }, A.image && /* @__PURE__ */ e.a.createElement(Pi, {
          imageSrc: URL.createObjectURL(A.image),
          onCropComplete: $t
        }), /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.image__cropper_btn
        }, /* @__PURE__ */ e.a.createElement("button", {
          onClick: Ra,
          disabled: !Ee,
          className: o.a.saveButton
        }, "Apply Crop"), /* @__PURE__ */ e.a.createElement("button", {
          onClick: Yt,
          className: o.a.cancel__btn
        }, "Cancel"))) : /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.selectType
        }, /* @__PURE__ */ e.a.createElement("button", {
          className: "".concat(A.type === "general" ? "".concat(o.a.selectedType) : ""),
          onClick: function(it) {
            return Yr(it, "general");
          }
        }, "General"), /* @__PURE__ */ e.a.createElement("button", {
          className: "".concat(A.type === "upload" ? "".concat(o.a.selectedType) : ""),
          onClick: function(it) {
            return Yr(it, "upload");
          }
        }, "Upload")), /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, A.type === "general" ? /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.reactEditorMt10
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "link"
        }, "Source"), /* @__PURE__ */ e.a.createElement("input", {
          id: "link",
          type: "text",
          name: "link",
          autoFocus: !0,
          className: o.a.formControlInput,
          value: A.link,
          onChange: ot
        }), x && /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.editorErrorMessage
        }, "*", "".concat(x))), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(o.a.reactEditorDFlex, " ").concat(o.a.justifyContentBetween)
        }, /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(o.a.reactEditorMt10, " ").concat(o.a.reactEditorW45)
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "height"
        }, "Height"), /* @__PURE__ */ e.a.createElement("input", {
          id: "height",
          type: "number",
          name: "height",
          value: A.height,
          onChange: ot,
          className: o.a.formControlInput
        })), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(o.a.reactEditorMt10, " ").concat(o.a.reactEditorW45)
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "width"
        }, "Width"), /* @__PURE__ */ e.a.createElement("input", {
          id: "width",
          type: "number",
          name: "width",
          value: A.width,
          onChange: ot,
          className: o.a.formControlInput
        })), /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.lockUnlockIcon,
          onClick: function() {
            return F(!V);
          }
        }, V ? /* @__PURE__ */ e.a.createElement(je, null) : /* @__PURE__ */ e.a.createElement(we, null)))) : /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.reactEditorMt10
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "image"
        }, "Choose File"), /* @__PURE__ */ e.a.createElement("input", {
          type: "file",
          id: "image",
          name: "image",
          className: o.a.formControlInput,
          accept: "image/*",
          onChange: he
        }), x && /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.editorErrorMessage
        }, "*", "".concat(x))), /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.image__submit__container
        }, /* @__PURE__ */ e.a.createElement("div", null, A.type === "upload" && A.image && /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.image__preview__box
        }, /* @__PURE__ */ e.a.createElement(Ge, null), /* @__PURE__ */ e.a.createElement("img", {
          src: URL.createObjectURL(A.image),
          alt: "",
          srcset: "",
          title: "Click to crop image",
          onClick: function() {
            return B("crop");
          }
        }))), /* @__PURE__ */ e.a.createElement("button", {
          className: o.a.saveButton,
          onClick: Ke
        }, "Save")))));
      }
      function Qr(t) {
        "@babel/helpers - typeof";
        return Qr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
          return typeof r;
        } : function(r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
        }, Qr(t);
      }
      function yn(t, r) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(t);
          r && (s = s.filter(function(u) {
            return Object.getOwnPropertyDescriptor(t, u).enumerable;
          })), a.push.apply(a, s);
        }
        return a;
      }
      function zr(t) {
        for (var r = 1; r < arguments.length; r++) {
          var a = arguments[r] != null ? arguments[r] : {};
          r % 2 ? yn(Object(a), !0).forEach(function(s) {
            Ia(t, s, a[s]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : yn(Object(a)).forEach(function(s) {
            Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(a, s));
          });
        }
        return t;
      }
      function Ia(t, r, a) {
        return (r = qi(r)) in t ? Object.defineProperty(t, r, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : t[r] = a, t;
      }
      function qi(t) {
        var r = Ji(t, "string");
        return Qr(r) == "symbol" ? r : r + "";
      }
      function Ji(t, r) {
        if (Qr(t) != "object" || !t) return t;
        var a = t[Symbol.toPrimitive];
        if (a !== void 0) {
          var s = a.call(t, r);
          if (Qr(s) != "object") return s;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (r === "string" ? String : Number)(t);
      }
      function wn(t, r) {
        return el(t) || $i(t, r) || Xi(t, r) || Zi();
      }
      function Zi() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Xi(t, r) {
        if (t) {
          if (typeof t == "string") return xn(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? xn(t, r) : void 0;
        }
      }
      function xn(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, s = Array(r); a < r; a++) s[a] = t[a];
        return s;
      }
      function $i(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var s, u, h, y, v = [], x = !0, k = !1;
          try {
            if (h = (a = a.call(t)).next, r !== 0) for (; !(x = (s = h.call(a)).done) && (v.push(s.value), v.length !== r); x = !0) ;
          } catch (O) {
            k = !0, u = O;
          } finally {
            try {
              if (!x && a.return != null && (y = a.return(), Object(y) !== y)) return;
            } finally {
              if (k) throw u;
            }
          }
          return v;
        }
      }
      function el(t) {
        if (Array.isArray(t)) return t;
      }
      function tl(t) {
        var r = t.onMediaInsert, a = t.targetElement, s = a === void 0 ? null : a, u = t.targetElementType, h = u === void 0 ? "" : u, y = Object(i.useState)(""), v = wn(y, 2), x = v[0], k = v[1], O = Object(i.useState)({
          link: "",
          height: "",
          embed_code: "",
          width: "",
          type: "general"
        }), Y = wn(O, 2), q = Y[0], Q = Y[1], p = function(H) {
          var G = H.target, ce = G.name, ee = G.files;
          Q(function(me) {
            return zr(zr({}, me), {}, Ia({}, ce, ee[0]));
          });
        }, oe = function(H) {
          if (H.preventDefault(), q.type === "general" && !q.link) {
            var G = "Video source is required";
            k(G);
            return;
          } else if (q.type === "upload" && !q.link) {
            var ce = "Please upload media file";
            k(ce);
            return;
          } else if (q.type === "embed" && !q.embed_code) {
            var ee = "Please add video embed code";
            k(ee);
            return;
          }
          r(q, s);
        }, V = function(H) {
          var G = H.target, ce = G.name, ee = G.value;
          Q(function(me) {
            return zr(zr({}, me), {}, Ia({}, ce, ee));
          });
        }, F = function(H, G) {
          H.preventDefault(), Q(function(ce) {
            return zr(zr({}, ce), {}, {
              type: G
            });
          }), k("");
        };
        return Object(i.useEffect)(function() {
          if (s) {
            var T = {
              link: s.getAttribute("src") || "",
              height: s.getAttribute("height") || "",
              width: s.getAttribute("width") || "",
              embed_code: h == "general" ? "" : s.outerHTML || "",
              type: h || "general"
            };
            Q(T);
          }
        }, [s, h]), /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.mediaModal
        }, /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.selectType
        }, /* @__PURE__ */ e.a.createElement("button", {
          className: "".concat(q.type === "general" ? "".concat(o.a.selectedType) : ""),
          onClick: function(H) {
            return F(H, "general");
          }
        }, "General"), /* @__PURE__ */ e.a.createElement("button", {
          className: "".concat(q.type === "embed" ? "".concat(o.a.selectedType) : ""),
          onClick: function(H) {
            return F(H, "embed");
          }
        }, "Embed")), /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, q.type === "general" ? /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.reactEditorMt10
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "link"
        }, "Source"), /* @__PURE__ */ e.a.createElement("input", {
          id: "link",
          type: "text",
          name: "link",
          autoFocus: !0,
          className: o.a.formControlInput,
          value: q.link,
          onChange: V
        }), x && /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.editorErrorMessage
        }, "*", "".concat(x))), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(o.a.reactEditorDFlex, " ").concat(o.a.justifyContentBetween)
        }, /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(o.a.reactEditorMt10, " ").concat(o.a.reactEditorW47)
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "height"
        }, "Height"), /* @__PURE__ */ e.a.createElement("input", {
          id: "height",
          type: "number",
          name: "height",
          value: q.height,
          onChange: V,
          className: o.a.formControlInput
        })), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(o.a.reactEditorMt10, " ").concat(o.a.reactEditorW47)
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "width"
        }, "Width"), /* @__PURE__ */ e.a.createElement("input", {
          id: "width",
          type: "number",
          name: "width",
          value: q.width,
          onChange: V,
          className: o.a.formControlInput
        })))) : q.type === "embed" ? /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.reactEditorMt10
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "embed_code"
        }, "Paste your embed code below:"), /* @__PURE__ */ e.a.createElement("textarea", {
          id: "embed_code",
          name: "embed_code",
          rows: 5,
          autoFocus: !0,
          className: o.a.formControlInput,
          value: q.embed_code,
          onChange: V
        }), x && /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.editorErrorMessage
        }, "*", "".concat(x)))) : /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.reactEditorMt10
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "link"
        }, "Choose File"), /* @__PURE__ */ e.a.createElement("input", {
          type: "file",
          id: "link",
          name: "link",
          className: o.a.formControlInput,
          accept: "video/*",
          onChange: p
        }), x && /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.editorErrorMessage
        }, "*", "".concat(x)))), /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.reactEditorTextEnd
        }, /* @__PURE__ */ e.a.createElement("button", {
          className: o.a.saveButton,
          onClick: oe
        }, "Save"))));
      }
      function rl() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
        }));
      }
      function _n(t, r) {
        return il(t) || ol(t, r) || nl(t, r) || al();
      }
      function al() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function nl(t, r) {
        if (t) {
          if (typeof t == "string") return kn(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? kn(t, r) : void 0;
        }
      }
      function kn(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, s = Array(r); a < r; a++) s[a] = t[a];
        return s;
      }
      function ol(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var s, u, h, y, v = [], x = !0, k = !1;
          try {
            if (h = (a = a.call(t)).next, r !== 0) for (; !(x = (s = h.call(a)).done) && (v.push(s.value), v.length !== r); x = !0) ;
          } catch (O) {
            k = !0, u = O;
          } finally {
            try {
              if (!x && a.return != null && (y = a.return(), Object(y) !== y)) return;
            } finally {
              if (k) throw u;
            }
          }
          return v;
        }
      }
      function il(t) {
        if (Array.isArray(t)) return t;
      }
      var ll = function(r) {
        var a, s = r.editorRef, u = r.setIsOpenModel, h = r.setSelectedData, y = r.setSelectedEvent, v = r.selectedEvent, x = r.setImageUrl, k = r.handleRemoveLink, O = r.selectedRange, Y = Object(i.useRef)(null), q = Object(i.useState)({
          x: 0,
          y: 0
        }), Q = _n(q, 2), p = Q[0], oe = Q[1], V = Object(i.useState)(!1), F = _n(V, 2), T = F[0], H = F[1], G = function() {
          if (O) {
            var Ee = O.toString();
            return Ee;
          }
          return "";
        }, ce = function(Ee) {
          Ee.preventDefault(), Lr();
          var Be = Ee.target, Re = Be.parentElement.getBoundingClientRect();
          oe({
            x: Ee.clientX - Re.left,
            y: Ee.clientY - Re.top
          });
          var lt = ["IMG", "A", "BUTTON"];
          lt.includes(Be.tagName) && y(Be), H(!0);
        }, ee = function(Ee) {
          Y.current && !Y.current.contains(Ee.target) && H(!1);
        }, me = function() {
          var Ee = !1, Be = "", Re = G() || "", lt = "text";
          (v == null ? void 0 : v.tagName) === "A" ? (Be = v == null ? void 0 : v.href, Re = G() || (v == null ? void 0 : v.textContent.trim()), Ee = (v == null ? void 0 : v.target) === "_blank") : (v == null ? void 0 : v.tagName) === "IMG" ? (Re = "Image", lt = "image", x(v == null ? void 0 : v.src)) : (v == null ? void 0 : v.tagName) === "BUTTON" && (Re = v.textContent, lt = "button");
          var _ = v == null ? void 0 : v.parentElement;
          (_ == null ? void 0 : _.tagName) === "A" && (y(_), Be = _ == null ? void 0 : _.href, Ee = (_ == null ? void 0 : _.target) === "_blank");
          var f = {
            link: Be,
            text: Re,
            open_new_tab: Ee,
            link_type: lt
          };
          h(f), H(!1), u("link");
        }, Ae = function() {
          var Ee, Be = v == null ? void 0 : v.href;
          if ((v == null ? void 0 : v.tagName) !== "A" && (v == null || (Ee = v.parentElement) === null || Ee === void 0 ? void 0 : Ee.tagName) === "A") {
            var Re;
            Be = v == null || (Re = v.parentElement) === null || Re === void 0 ? void 0 : Re.href;
          }
          window.open(Be), H(!1);
        }, B = function() {
          k(), H(!1);
        }, Ye = function() {
          var Ee, Be;
          H(!1);
          var Re = (Ee = v.style) === null || Ee === void 0 ? void 0 : Ee.height, lt = (Be = v.style) === null || Be === void 0 ? void 0 : Be.width;
          Re || (Re = v == null ? void 0 : v.offsetHeight), lt || (lt = v == null ? void 0 : v.offsetWidth), h({
            link: v == null ? void 0 : v.src,
            height: Re,
            width: lt
          }), u("image");
        };
        return Object(i.useEffect)(function() {
          var Le = s.current;
          return Le && Le.addEventListener("contextmenu", ce), document.addEventListener("mousedown", ee), function() {
            Le && Le.removeEventListener("contextmenu", ce), document.removeEventListener("mousedown", ee);
          };
        }, [s]), /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, T && /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.rightClickPopupBackground,
          style: {
            top: p.y,
            left: p.x
          },
          ref: Y
        }, /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.rightClickPopup,
          onClick: me
        }, /* @__PURE__ */ e.a.createElement(at, null), " Link..."), ((v == null ? void 0 : v.tagName) === "A" || (v == null || (a = v.parentElement) === null || a === void 0 ? void 0 : a.tagName) === "A") && /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.rightClickPopup,
          onClick: B
        }, /* @__PURE__ */ e.a.createElement(tt, null), " Remove Link..."), " ", /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(o.a.rightClickPopup, " ").concat(o.a.openLink),
          onClick: Ae
        }, /* @__PURE__ */ e.a.createElement(rl, null), " Open Link...")), (v == null ? void 0 : v.tagName) === "IMG" && /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement("hr", null), /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.rightClickPopup,
          ref: Y,
          onClick: Ye
        }, /* @__PURE__ */ e.a.createElement(ze, null), " Image..."))));
      }, cl = ll;
      function En(t, r) {
        return ml(t) || ul(t, r) || dl(t, r) || sl();
      }
      function sl() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function dl(t, r) {
        if (t) {
          if (typeof t == "string") return Cn(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? Cn(t, r) : void 0;
        }
      }
      function Cn(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, s = Array(r); a < r; a++) s[a] = t[a];
        return s;
      }
      function ul(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var s, u, h, y, v = [], x = !0, k = !1;
          try {
            if (h = (a = a.call(t)).next, r !== 0) for (; !(x = (s = h.call(a)).done) && (v.push(s.value), v.length !== r); x = !0) ;
          } catch (O) {
            k = !0, u = O;
          } finally {
            try {
              if (!x && a.return != null && (y = a.return(), Object(y) !== y)) return;
            } finally {
              if (k) throw u;
            }
          }
          return v;
        }
      }
      function ml(t) {
        if (Array.isArray(t)) return t;
      }
      function pl(t) {
        var r = t.editorRef, a = Object(i.useState)(!1), s = En(a, 2), u = s[0], h = s[1], y = Object(i.useState)("Default"), v = En(y, 2), x = v[0], k = v[1], O = Object(i.useRef)(null), Y = [{
          label: "Arial",
          value: "Arial, sans-serif"
        }, {
          label: "Helvetica",
          value: "Helvetica, sans-serif"
        }, {
          label: "Times New Roman",
          value: "Times New Roman, serif"
        }, {
          label: "Courier New",
          value: "Courier New, monospace"
        }, {
          label: "Courier",
          value: "Courier, monospace"
        }, {
          label: "Verdana",
          value: "Verdana, sans-serif"
        }, {
          label: "Georgia",
          value: "Georgia, serif"
        }, {
          label: "Palatino",
          value: "Palatino, serif"
        }, {
          label: "Garamond",
          value: "Garamond, serif"
        }, {
          label: "Bookman",
          value: "Bookman, serif"
        }, {
          label: "Comic Sans MS",
          value: "Comic Sans MS, sans-serif"
        }, {
          label: "Trebuchet MS",
          value: "Trebuchet MS, sans-serif"
        }, {
          label: "Arial Black",
          value: "Arial Black, sans-serif"
        }, {
          label: "Impact",
          value: "Impact, sans-serif"
        }, {
          label: "Roboto",
          value: "Roboto, sans-serif"
        }, {
          label: "Open Sans",
          value: "Open Sans, sans-serif"
        }, {
          label: "Lato",
          value: "Lato, sans-serif"
        }, {
          label: "Montserrat",
          value: "Montserrat, sans-serif"
        }, {
          label: "Roboto Condensed",
          value: "Roboto Condensed, sans-serif"
        }, {
          label: "Oswald",
          value: "Oswald, sans-serif"
        }, {
          label: "Raleway",
          value: "Raleway, sans-serif"
        }, {
          label: "Noto Sans",
          value: "Noto Sans, sans-serif"
        }, {
          label: "Poppins",
          value: "Poppins, sans-serif"
        }, {
          label: "Ubuntu",
          value: "Ubuntu, sans-serif"
        }, {
          label: "Source Sans Pro",
          value: "Source Sans Pro, sans-serif"
        }], q = function(F) {
          F.preventDefault(), h(!u);
        }, Q = function(F, T) {
          F.preventDefault(), r.current.focus(), document.execCommand("styleWithCSS", !1, !0), document.execCommand("fontName", !1, T.value), k(T.label), h(!1);
        }, p = function() {
          var F = window.getSelection();
          if (F.rangeCount > 0)
            for (var T = F.getRangeAt(0), H = T.startContainer, G = H; G && G !== r.current; ) {
              if (G.nodeType === Node.ELEMENT_NODE && G.style.fontFamily)
                for (var ce = G.style.fontFamily.replace(/"/g, ""), ee = 0, me = Y; ee < me.length; ee++) {
                  var Ae = me[ee], B = Ae.value.split(",")[0].trim();
                  if (ce === Ae.value || ce.startsWith("".concat(B, ",")) || ce === B)
                    return Ae.label;
                }
              G = G.parentNode;
            }
          return null;
        }, oe = function() {
          var F = r.current;
          F && F.contains(window.getSelection().anchorNode) && F.focus();
        };
        return Object(i.useEffect)(function() {
          var V = function(H) {
            O.current && !O.current.contains(H.target) && h(!1);
          }, F = function() {
            var H;
            if (r != null && (H = r.current) !== null && H !== void 0 && H.contains(window.getSelection().anchorNode)) {
              var G = p();
              k(G || "Default");
            }
          };
          return document.addEventListener("click", V), document.addEventListener("selectionchange", F), document.addEventListener("keydown", oe), function() {
            document.removeEventListener("click", V), document.removeEventListener("selectionchange", F), document.removeEventListener("keydown", oe);
          };
        }, [r]), /* @__PURE__ */ e.a.createElement("button", {
          className: o.a.customSelectFormat,
          onClick: q,
          ref: O,
          style: {
            minWidth: "120px"
          }
        }, /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.selectSelected
        }, x, /* @__PURE__ */ e.a.createElement(qe, null)), u && /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.selectItemsFormat,
          style: {
            maxHeight: "200px",
            overflowY: "auto"
          }
        }, Y.map(function(V, F) {
          return /* @__PURE__ */ e.a.createElement("div", {
            key: "key".concat(F),
            onClick: function(H) {
              return Q(H, V);
            },
            className: o.a.selectOption,
            style: {
              fontFamily: V.value
            }
          }, V.label);
        })));
      }
      var hl = pl;
      function An(t, r) {
        return bl(t) || vl(t, r) || gl(t, r) || fl();
      }
      function fl() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function gl(t, r) {
        if (t) {
          if (typeof t == "string") return Sn(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? Sn(t, r) : void 0;
        }
      }
      function Sn(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, s = Array(r); a < r; a++) s[a] = t[a];
        return s;
      }
      function vl(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var s, u, h, y, v = [], x = !0, k = !1;
          try {
            if (h = (a = a.call(t)).next, r !== 0) for (; !(x = (s = h.call(a)).done) && (v.push(s.value), v.length !== r); x = !0) ;
          } catch (O) {
            k = !0, u = O;
          } finally {
            try {
              if (!x && a.return != null && (y = a.return(), Object(y) !== y)) return;
            } finally {
              if (k) throw u;
            }
          }
          return v;
        }
      }
      function bl(t) {
        if (Array.isArray(t)) return t;
      }
      function yl(t) {
        var r, a, s = t.editorRef, u = Object(i.useState)(!1), h = An(u, 2), y = h[0], v = h[1], x = Object(i.useState)("Alignment"), k = An(x, 2), O = k[0], Y = k[1], q = Object(i.useRef)(null), Q = [{
          label: "Left",
          value: "left",
          icon: /* @__PURE__ */ e.a.createElement(ge, null)
        }, {
          label: "Center",
          value: "center",
          icon: /* @__PURE__ */ e.a.createElement(Pt, null)
        }, {
          label: "Right",
          value: "right",
          icon: /* @__PURE__ */ e.a.createElement(We, null)
        }, {
          label: "Justify",
          value: "justify",
          icon: /* @__PURE__ */ e.a.createElement(Ie, null)
        }], p = function(H) {
          H.preventDefault(), v(!y);
        }, oe = function(H, G) {
          H.preventDefault(), s.current.focus(), document.execCommand("justify" + G.value.charAt(0).toUpperCase() + G.value.slice(1)), Y(G.label), v(!1);
        }, V = function() {
          var H = window.getSelection();
          if (H.rangeCount > 0) {
            for (var G = H.getRangeAt(0), ce = G.startContainer, ee = ce, me = function() {
              if (ee.nodeType === Node.ELEMENT_NODE && ee.style.textAlign) {
                var Ye = ee.style.textAlign, Le = Q.find(function(Ee) {
                  return Ee.value === Ye;
                });
                if (Le)
                  return {
                    v: Le.label
                  };
              }
              ee = ee.parentNode;
            }, Ae; ee && ee !== s.current; )
              if (Ae = me(), Ae) return Ae.v;
          }
          return null;
        }, F = function() {
          var H = s.current;
          H && H.contains(window.getSelection().anchorNode) && H.focus();
        };
        return Object(i.useEffect)(function() {
          var T = function(ce) {
            q.current && !q.current.contains(ce.target) && v(!1);
          }, H = function() {
            var ce;
            if (s != null && (ce = s.current) !== null && ce !== void 0 && ce.contains(window.getSelection().anchorNode)) {
              var ee = V();
              Y(ee || "Alignment");
            }
          };
          return document.addEventListener("click", T), document.addEventListener("selectionchange", H), document.addEventListener("keydown", F), function() {
            document.removeEventListener("click", T), document.removeEventListener("selectionchange", H), document.removeEventListener("keydown", F);
          };
        }, [s]), /* @__PURE__ */ e.a.createElement("button", {
          className: o.a.customSelectFormat,
          onClick: p,
          ref: q
        }, /* @__PURE__ */ e.a.createElement("div", {
          style: {
            display: "flex"
          }
        }, O === "Alignment" ? /* @__PURE__ */ e.a.createElement("span", null, (r = Q[0]) === null || r === void 0 ? void 0 : r.icon) : /* @__PURE__ */ e.a.createElement("span", null, (a = Q.find(function(T) {
          return T.label === O;
        })) === null || a === void 0 ? void 0 : a.icon), /* @__PURE__ */ e.a.createElement("span", {
          className: o.a.selectSelected
        }, /* @__PURE__ */ e.a.createElement(qe, null))), y && /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.selectItemsFormat
        }, Q.map(function(T, H) {
          return /* @__PURE__ */ e.a.createElement("div", {
            key: "key".concat(H),
            onClick: function(ce) {
              return oe(ce, T);
            },
            className: o.a.selectOption,
            style: {
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textAlign: T.value,
              fontSize: "12px"
            }
          }, /* @__PURE__ */ e.a.createElement("span", null, T.icon), /* @__PURE__ */ e.a.createElement("span", null, T.label));
        })));
      }
      var wl = yl;
      function In(t, r) {
        return El(t) || kl(t, r) || _l(t, r) || xl();
      }
      function xl() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function _l(t, r) {
        if (t) {
          if (typeof t == "string") return Mn(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? Mn(t, r) : void 0;
        }
      }
      function Mn(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, s = Array(r); a < r; a++) s[a] = t[a];
        return s;
      }
      function kl(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var s, u, h, y, v = [], x = !0, k = !1;
          try {
            if (h = (a = a.call(t)).next, r !== 0) for (; !(x = (s = h.call(a)).done) && (v.push(s.value), v.length !== r); x = !0) ;
          } catch (O) {
            k = !0, u = O;
          } finally {
            try {
              if (!x && a.return != null && (y = a.return(), Object(y) !== y)) return;
            } finally {
              if (k) throw u;
            }
          }
          return v;
        }
      }
      function El(t) {
        if (Array.isArray(t)) return t;
      }
      function Cl(t) {
        var r = t.editorRef, a = Object(i.useState)(!1), s = In(a, 2), u = s[0], h = s[1], y = Object(i.useState)("16px"), v = In(y, 2), x = v[0], k = v[1], O = Object(i.useRef)(null), Y = [{
          label: "10px",
          value: "10"
        }, {
          label: "12px",
          value: "12"
        }, {
          label: "14px",
          value: "14"
        }, {
          label: "16px",
          value: "16"
        }, {
          label: "18px",
          value: "18"
        }, {
          label: "20px",
          value: "20"
        }, {
          label: "24px",
          value: "24"
        }, {
          label: "28px",
          value: "28"
        }, {
          label: "32px",
          value: "32"
        }, {
          label: "36px",
          value: "36"
        }, {
          label: "48px",
          value: "48"
        }, {
          label: "60px",
          value: "60"
        }, {
          label: "72px",
          value: "72"
        }], q = function(F) {
          F.preventDefault(), h(!u);
        }, Q = function(F, T) {
          F.preventDefault(), r.current.focus();
          var H = window.getSelection();
          if (H.rangeCount) {
            var G = H.getRangeAt(0), ce = G.commonAncestorContainer, ee = G.toString(), me = T.value + "px", Ae = function(Re) {
              for (; Re && Re !== r.current; ) {
                if (Re.nodeType === 1 && Re.tagName === "SPAN")
                  return Re.textContent == ee || Re.innerText == ee ? Re : null;
                Re = Re.parentNode;
              }
              return null;
            }, B = Ae(ce);
            if (H.isCollapsed) {
              var Ee = document.createElement("span");
              Ee.style.fontSize = me, Ee.innerHTML = "​", G.insertNode(Ee), G.setStart(Ee.firstChild, 1), G.setEnd(Ee.firstChild, 1), H.removeAllRanges(), H.addRange(G);
            } else if (B)
              B.style.fontSize = me;
            else {
              var Ye = document.createElement("span");
              Ye.style.fontSize = me;
              var Le = G.extractContents();
              Ye.appendChild(Le), G.insertNode(Ye);
            }
            k(T.label), h(!1);
          }
        }, p = function() {
          var F = window.getSelection();
          if (F.rangeCount > 0) {
            for (var T = F.getRangeAt(0), H = T.startContainer, G = H, ce = function() {
              if (G.nodeType === Node.ELEMENT_NODE && G.style.fontSize) {
                var Ae = G.style.fontSize, B = Ae.replace("px", ""), Ye = Y.find(function(Le) {
                  return Le.value === B;
                });
                if (Ye)
                  return {
                    v: Ye.label
                  };
              }
              G = G.parentNode;
            }, ee; G && G !== r.current; )
              if (ee = ce(), ee) return ee.v;
          }
          return null;
        }, oe = function() {
          var F = r.current;
          F && F.contains(window.getSelection().anchorNode) && F.focus();
        };
        return Object(i.useEffect)(function() {
          var V = function(H) {
            O.current && !O.current.contains(H.target) && h(!1);
          }, F = function() {
            var H;
            if (r != null && (H = r.current) !== null && H !== void 0 && H.contains(window.getSelection().anchorNode)) {
              var G = p();
              k(G || "16px");
            }
          };
          return document.addEventListener("click", V), document.addEventListener("selectionchange", F), document.addEventListener("keydown", oe), function() {
            document.removeEventListener("click", V), document.removeEventListener("selectionchange", F), document.removeEventListener("keydown", oe);
          };
        }, [r]), /* @__PURE__ */ e.a.createElement("button", {
          className: o.a.customSelectFormat,
          onClick: q,
          ref: O
        }, /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.selectSelected
        }, x, /* @__PURE__ */ e.a.createElement(qe, null)), u && /* @__PURE__ */ e.a.createElement("div", {
          className: o.a.selectItemsFormat,
          style: {
            maxHeight: "200px",
            overflowY: "auto"
          }
        }, Y.map(function(V, F) {
          return /* @__PURE__ */ e.a.createElement("div", {
            key: "key".concat(F),
            onClick: function(H) {
              return Q(H, V);
            },
            className: o.a.selectOption,
            style: {
              fontSize: "14px"
            }
          }, V.label);
        })));
      }
      var Al = Cl;
      l(8);
      function Gr(t) {
        "@babel/helpers - typeof";
        return Gr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
          return typeof r;
        } : function(r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
        }, Gr(t);
      }
      var Sl = ["theme_config", "toolbar", "navbar", "value", "onChange", "getEditorRef", "mainProps", "placeholder", "image_handler", "handleFullScreen", "remove_from_toolbar", "remove_from_navbar", "style"];
      function ra() {
        return ra = Object.assign ? Object.assign.bind() : function(t) {
          for (var r = 1; r < arguments.length; r++) {
            var a = arguments[r];
            for (var s in a) ({}).hasOwnProperty.call(a, s) && (t[s] = a[s]);
          }
          return t;
        }, ra.apply(null, arguments);
      }
      function Nn(t, r) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(t);
          r && (s = s.filter(function(u) {
            return Object.getOwnPropertyDescriptor(t, u).enumerable;
          })), a.push.apply(a, s);
        }
        return a;
      }
      function Rn(t) {
        for (var r = 1; r < arguments.length; r++) {
          var a = arguments[r] != null ? arguments[r] : {};
          r % 2 ? Nn(Object(a), !0).forEach(function(s) {
            Il(t, s, a[s]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : Nn(Object(a)).forEach(function(s) {
            Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(a, s));
          });
        }
        return t;
      }
      function Il(t, r, a) {
        return (r = Ml(r)) in t ? Object.defineProperty(t, r, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : t[r] = a, t;
      }
      function Ml(t) {
        var r = Nl(t, "string");
        return Gr(r) == "symbol" ? r : r + "";
      }
      function Nl(t, r) {
        if (Gr(t) != "object" || !t) return t;
        var a = t[Symbol.toPrimitive];
        if (a !== void 0) {
          var s = a.call(t, r);
          if (Gr(s) != "object") return s;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (r === "string" ? String : Number)(t);
      }
      function Rl(t, r) {
        var a = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (!a) {
          if (Array.isArray(t) || (a = Ma(t)) || r) {
            a && (t = a);
            var s = 0, u = function() {
            };
            return { s: u, n: function() {
              return s >= t.length ? { done: !0 } : { done: !1, value: t[s++] };
            }, e: function(k) {
              throw k;
            }, f: u };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var h, y = !0, v = !1;
        return { s: function() {
          a = a.call(t);
        }, n: function() {
          var k = a.next();
          return y = k.done, k;
        }, e: function(k) {
          v = !0, h = k;
        }, f: function() {
          try {
            y || a.return == null || a.return();
          } finally {
            if (v) throw h;
          }
        } };
      }
      function Ll(t) {
        return Bl(t) || Dl(t) || Ma(t) || Ol();
      }
      function Ol() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Dl(t) {
        if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
      }
      function Bl(t) {
        if (Array.isArray(t)) return Na(t);
      }
      function St(t, r) {
        return Tl(t) || jl(t, r) || Ma(t, r) || zl();
      }
      function zl() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Ma(t, r) {
        if (t) {
          if (typeof t == "string") return Na(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? Na(t, r) : void 0;
        }
      }
      function Na(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, s = Array(r); a < r; a++) s[a] = t[a];
        return s;
      }
      function jl(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var s, u, h, y, v = [], x = !0, k = !1;
          try {
            if (h = (a = a.call(t)).next, r !== 0) for (; !(x = (s = h.call(a)).done) && (v.push(s.value), v.length !== r); x = !0) ;
          } catch (O) {
            k = !0, u = O;
          } finally {
            try {
              if (!x && a.return != null && (y = a.return(), Object(y) !== y)) return;
            } finally {
              if (k) throw u;
            }
          }
          return v;
        }
      }
      function Tl(t) {
        if (Array.isArray(t)) return t;
      }
      function Hl(t, r) {
        if (t == null) return {};
        var a, s, u = Fl(t, r);
        if (Object.getOwnPropertySymbols) {
          var h = Object.getOwnPropertySymbols(t);
          for (s = 0; s < h.length; s++) a = h[s], r.indexOf(a) >= 0 || {}.propertyIsEnumerable.call(t, a) && (u[a] = t[a]);
        }
        return u;
      }
      function Fl(t, r) {
        if (t == null) return {};
        var a = {};
        for (var s in t) if ({}.hasOwnProperty.call(t, s)) {
          if (r.indexOf(s) >= 0) continue;
          a[s] = t[s];
        }
        return a;
      }
      var Ln = function(r, a, s) {
        return r || (r = s), a && (r = r.filter(function(u) {
          return typeof u == "string" ? !a.includes(u) : !a.includes(u.name);
        }), r = r.filter(function(u, h) {
          return u !== "|" || h === 0 || r[h - 1] !== "|";
        })), r;
      }, On = function(r) {
        var a = new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i");
        return a.test(r);
      };
      function Pl(t) {
        var r = t.theme_config, a = t.toolbar, s = t.navbar, u = t.value, h = t.onChange, y = t.getEditorRef, v = t.mainProps, x = t.placeholder, k = t.image_handler;
        t.handleFullScreen;
        var O = t.remove_from_toolbar, Y = t.remove_from_navbar, q = t.style, Q = Hl(t, Sl), p = Object(i.useRef)(null), oe = Object(i.useState)(!1), V = St(oe, 2), F = V[0], T = V[1], H = Object(i.useState)(!1), G = St(H, 2), ce = G[0], ee = G[1], me = Object(i.useState)(!1), Ae = St(me, 2), B = Ae[0], Ye = Ae[1], Le = Object(i.useState)(!1), Ee = St(Le, 2), Be = Ee[0], Re = Ee[1], lt = Object(i.useState)(null), _ = St(lt, 2), f = _[0], w = _[1], N = Object(i.useState)(!1), A = St(N, 2), I = A[0], he = A[1], Se = Object(i.useState)(""), Me = St(Se, 2), Ke = Me[0], Xe = Me[1], ot = Object(i.useState)(""), Yr = St(ot, 2), $t = Yr[0], Yt = Yr[1], Ra = Object(i.useState)(null), gt = St(Ra, 2), it = gt[0], vt = gt[1], ct = Object(i.useState)(null), xt = St(ct, 2), bt = xt[0], er = xt[1], _t = Object(i.useState)(""), aa = St(_t, 2), Ul = aa[0], Ql = aa[1], Gl = Object(i.useState)({
          link: "",
          height: "",
          width: "",
          type: "general",
          text: "",
          open_new_tab: !1
        }), Dn = St(Gl, 2), Kt = Dn[0], Bn = Dn[1], Yl = Object(i.useState)(null), zn = St(Yl, 2), yt = zn[0], La = zn[1], Kl = Object(i.useState)(!0), jn = St(Kl, 2), kr = jn[0], Tn = jn[1], Vl = Object(i.useState)({}), Hn = St(Vl, 2), Fn = Hn[0], Wl = Hn[1], ql = Object(i.useState)(null), Pn = St(ql, 2), Kr = Pn[0], Un = Pn[1], Jl = Object(i.useState)(!1), Qn = St(Jl, 2), Zl = Qn[0], Xl = Qn[1], $l = Object(i.useState)(!1), Gn = St($l, 2), ec = Gn[0], tc = Gn[1], rc = Object(i.useState)(!1), Yn = St(rc, 2), ac = Yn[0], nc = Yn[1], oc = function() {
          var Z = p == null ? void 0 : p.current;
          if (Z) {
            var re = Z.querySelector("img");
            return !!re;
          }
          return !1;
        }, ic = function() {
          Re(!0);
          var Z = p == null ? void 0 : p.current;
          if (!Z) return;
          var re = oc();
          if (!re) {
            var fe = document.querySelector(".resizeImageWrapper");
            fe && fe.parentNode.removeChild(fe), La(null);
          }
          var ve = Ll(Z.childNodes).every(function(dt) {
            return dt.nodeType === Node.TEXT_NODE || dt.nodeType === Node.ELEMENT_NODE && dt.nodeName === "BR";
          });
          if (ve && Z.textContent.trim() !== "") {
            var be = window.getSelection(), ye = be == null ? void 0 : be.getRangeAt(0), Ue = ye == null ? void 0 : ye.cloneRange();
            Ue == null || Ue.selectNodeContents(Z), Ue == null || Ue.setEnd(ye.startContainer, ye.startOffset);
            for (var $e = (Ue == null ? void 0 : Ue.toString().length) || 0, st = document.createElement("p"); Z.firstChild; )
              st.appendChild(Z.firstChild);
            Z.appendChild(st), st.firstChild;
            var At = $e, pt = function(It, Rt) {
              var Bt = document.createRange(), nr = window.getSelection();
              Bt.setStart(It, Rt), Bt.collapse(!0), nr.removeAllRanges(), nr.addRange(Bt);
            }, Nt = function dt(It) {
              if (It.nodeType === Node.TEXT_NODE) {
                if (At <= It.length)
                  throw pt(It, At), "done";
                At -= It.length;
              } else
                for (var Rt = 0; Rt < It.childNodes.length; Rt++)
                  dt(It.childNodes[Rt]);
            };
            try {
              Nt(st);
            } catch {
            }
          }
          function jt(dt, It) {
            if (dt.getAttribute("data-mlx-editor-empty") || dt.classList.contains("empty")) {
              dt.setAttribute("data-mlx-editor-empty", "true");
              var Rt;
              if (It.tagName.toLowerCase() === "div") {
                var Bt = document.createElement("p");
                Bt.innerHTML = It.innerHTML;
                var nr = Rl(It.attributes), oa;
                try {
                  for (nr.s(); !(oa = nr.n()).done; ) {
                    var ia = oa.value;
                    Bt.setAttribute(ia.name, ia.value);
                  }
                } catch (Ba) {
                  nr.e(Ba);
                } finally {
                  nr.f();
                }
                Rt = Bt.outerHTML;
              } else
                Rt = It.outerHTML;
              dt.innerHTML = Rt;
              return;
            }
            dt.setAttribute("data-mlx-editor-empty", "true");
            var la = window.getSelection(), qr = document.createRange();
            qr.selectNodeContents(dt), qr.collapse(!0), la.removeAllRanges(), la.addRange(qr), dt.innerHTML = "<p><br></p>", document.execCommand("removeFormat", !1, null), dt.style.cssText = "";
          }
          var ut = Z.innerHTML;
          ut = Hr(ut);
          var Je = document.createElement("div");
          Je.innerHTML = ut;
          var Dt = lc(Z.innerHTML), Vt = (!Je.textContent || Je.textContent.replace(/\s/g, "").length === 0) && Dt.isEmpty;
          Vt ? jt(Z, Dt.tempDiv) : (Z.removeAttribute("data-mlx-editor-empty"), h == null || h(Je.innerHTML));
        };
        function lc(g) {
          var Z = document.createElement("div");
          if (Z.innerHTML = g, Z.childNodes.forEach(function(fe) {
            fe.type == Node.TEXT_NODE && !fe.textContent.trim() && Z.removeChild(fe);
          }), Z.children.length === 0 || Z.innerHTML === "<br>") {
            var re = document.createElement("P");
            return re.innerHTML = "<br>", {
              tempDiv: re,
              isEmpty: !0
            };
          }
          return Z.children.length === 1 && Z.children[0].children.length === 1 && Z.children[0].children[0].tagName === "BR" ? {
            tempDiv: Z.children[0],
            isEmpty: !0
          } : {
            isEmpty: !1
          };
        }
        var cc = function(Z) {
          if (Z.key === "Enter" && !Z.shiftKey) {
            var re;
            Z.preventDefault();
            var fe = p.current, ve = window.getSelection();
            if (!ve.rangeCount || !fe) return;
            for (var be = ve.getRangeAt(0), ye = be.startContainer, Ue = null; ye && ye !== fe; ) {
              if (ye.nodeName === "LI") {
                Ue = ye;
                break;
              }
              ye = ye.parentNode;
            }
            if (Ue) {
              var $e = document.createElement("li");
              $e.appendChild(document.createElement("br")), Ue.nextSibling ? Ue.parentNode.insertBefore($e, Ue.nextSibling) : Ue.parentNode.appendChild($e);
              var st = window.getSelection(), At = document.createRange();
              At.selectNodeContents($e), At.collapse(!0), st.removeAllRanges(), st.addRange(At);
              return;
            }
            for (; ye && ye.nodeName !== "P" && ye !== fe; )
              ye = ye.parentNode;
            var pt = ((re = ye) === null || re === void 0 ? void 0 : re.nodeName) === "P" ? ye : null;
            if (!pt) {
              pt = document.createElement("p"), pt.appendChild(document.createElement("br")), fe.appendChild(pt);
              var Nt = document.createRange();
              Nt.setStart(pt, 0), Nt.collapse(!0), ve.removeAllRanges(), ve.addRange(Nt);
              return;
            }
            var jt = be.startOffset, ut = be.startContainer, Je = document.createElement("p");
            if (ut.nodeType === Node.TEXT_NODE) {
              var Dt = ut.nodeValue, Vt = Dt.slice(0, jt), dt = Dt.slice(jt);
              if (ut.nodeValue = Vt, dt) {
                var It = document.createTextNode(dt);
                Je.appendChild(It);
              } else
                Je.appendChild(document.createElement("br"));
            } else
              Je.appendChild(document.createElement("br"));
            var Rt = pt.parentNode;
            Rt && Rt.contains(pt) && (pt.nextSibling ? Rt.insertBefore(Je, pt.nextSibling) : Rt.appendChild(Je));
            var Bt = document.createRange();
            Bt.setStart(Je, 0), Bt.collapse(!0), ve.removeAllRanges(), ve.addRange(Bt);
          }
        }, hr = function(Z, re, fe) {
          Z.preventDefault(), Yt(re), Wl(fe);
        }, Vr = function(Z) {
          Z && Z.preventDefault(), Xe(""), vt(""), Yt(""), Bn({}), La(null);
        }, Kn = function(Z) {
          if (Z.preventDefault(), p != null && p.current) {
            var re = f.replace(/\n\s*\n/g, `
`).replace(/\s+/g, " ").trim();
            p.current.innerHTML = re, T(!1), h && h(re);
          }
        }, Vn = function(Z) {
          Z.preventDefault();
          var re = window.getSelection();
          if (re.toString())
            re.removeAllRanges();
          else {
            var fe = document.createRange();
            fe.selectNodeContents(p == null ? void 0 : p.current), re.removeAllRanges(), re.addRange(fe);
          }
        }, Wn = function() {
          Er(), document.execCommand("insertHorizontalRule");
        }, Er = function() {
          var Z = p == null ? void 0 : p.current;
          if (Z && Kr) {
            var re = window.getSelection();
            re.removeAllRanges(), re.addRange(Kr), Z.focus();
          }
        }, sc = function(Z) {
          var re = Z.text, fe = Z.link, ve = Z.open_new_tab, be = Z.link_type;
          re || (re = fe);
          var ye = '<a href="'.concat(fe, '"');
          if (ve && ve !== "false" && (ye += ' target="_blank"'), be === "image" && Ke)
            if (yt)
              if (yt.tagName === "IMG") {
                var Ue = yt.src;
                Ue === Ke ? re = yt.outerHTML : re = '<img src="'.concat(Ke, '" alt="ImageLink" />');
              } else if (yt.tagName === "A") {
                var $e = yt.firstChild;
                $e && $e.nodeType === Node.ELEMENT_NODE && $e.tagName === "IMG" && $e.src === Ke ? re = $e.outerHTML : re = '<img src="'.concat(Ke, '" alt="ImageLink" />');
              } else
                re = '<img src="'.concat(Ke, '" alt="ImageLink" />');
            else
              re = '<img src="'.concat(Ke, '" alt="ImageLink" />');
          else be === "button" && (re = "<button contentEditable=false>".concat(re, "</button>"));
          ye += ">".concat(re, "</a>"), yt && yt.parentElement ? yt.parentElement.removeChild(yt) : $n(), Er(), document.execCommand("insertHTML", !1, ye), Vr();
        }, dc = function() {
          var Z = "".concat(yt.textContent.trim());
          if (yt.tagName === "IMG" && (Z = '<img src="'.concat(yt.src, '" alt="ImageLink" />')), yt) {
            var re = yt.parentElement;
            re && re.removeChild(yt);
          }
          Er(), document.execCommand("insertHTML", !1, Z), Vr();
        }, uc = function(Z) {
          var re = Z.link, fe = Z.height, ve = Z.width;
          if (yt && Kt)
            yt.src = re, fe ? yt.style.height = "".concat(fe, "px") : yt.style.height = null, ve ? yt.style.width = "".concat(ve, "px") : yt.style.width = null, setTimeout(function() {
              ee(!1), Vr();
            }, 0);
          else {
            Er();
            var be = '<img src="'.concat(re, '" alt="Image" style="');
            fe && (be += "height:".concat(fe, "px;")), ve && (be += "width:".concat(ve, "px;")), be += '"/>', document.execCommand("insertHTML", !1, be);
            var ye = document.querySelector('[contenteditable="true"]');
            ye && ye.dispatchEvent(new Event("input", {
              bubbles: !0
            })), ee(!1), Vr();
          }
        }, mc = function(Z, re) {
          var fe = Z.link, ve = Z.height, be = Z.width, ye = Z.type, Ue = Z.embed_code, $e = p.current, st = "";
          if (ye === "general")
            if (fe.match(/\.(mp4|mov|avi|wmv)$/))
              st = '<video width="'.concat(be || "640", '" height="').concat(ve || "360", '" controls><source src="').concat(fe, '" type="video/mp4"></video>');
            else {
              var At = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/, pt = /(?:https?:\/\/)?(?:www\.)?vimeo.com\/(\d+)/;
              if (fe.match(At)) {
                var Nt = fe.match(At)[1];
                st = '<iframe width="'.concat(be || "640", '" height="').concat(ve || "360", '" src="https://www.youtube.com/embed/').concat(Nt, '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
              } else if (fe.match(pt)) {
                var jt = fe.match(pt)[1];
                st = '<iframe src="https://player.vimeo.com/video/'.concat(jt, '" width="').concat(be || "640", '" height="').concat(ve || "360", '" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>');
              } else
                st = Ue || "";
            }
          else ye === "embed" && Ue && $e && (st = Ue);
          if (re && $e && st)
            Er(), re.parentNode.setAttribute("data-mtl-link-type", ye), re.outerHTML = st;
          else if ($e && st) {
            var ut = pc(st, ye, function(Vt) {
              var dt = Vt.querySelector("iframe");
              vt(dt), er(Vt.getAttribute("data-mtl-link-type") || "general"), Yt("video");
            });
            Er();
            var Je = window.getSelection();
            if (!Je.rangeCount) return;
            var Dt = Je.getRangeAt(0);
            Dt.deleteContents(), Dt.insertNode(ut), Dt.setStartAfter(ut), Dt.setEndAfter(ut), Je.removeAllRanges(), Je.addRange(Dt);
          }
          vt(null), Yt("");
        };
        function pc(g, Z, re) {
          var fe = document.createElement("div");
          fe.innerHTML = g;
          var ve = document.createElement("div");
          ve.className = "iframe-wrapper", ve.contentEditable = "true", ve.setAttribute("data-mtl-link-type", Z);
          var be = document.createElement("div");
          be.className = "iframe-overlay";
          var ye = document.createElement("button");
          return ye.className = "iframe-settings-btn", ye.contentEditable = "false", ye.innerHTML = '<div style="display: flex; align-items: center;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10.275 22q-.425 0-.75-.275t-.375-.7l-.3-2.225q-.325-.125-.612-.3t-.563-.375l-1.55.65q-.625.275-1.25.05t-.975-.8l-1.175-2.05q-.35-.575-.2-1.225t.675-1.075l1.325-1Q4.5 12.5 4.5 12.337v-.675q0-.162.025-.337l-1.325-1Q2.675 9.9 2.525 9.25t.2-1.225L3.9 5.975q.35-.575.975-.8t1.25.05l1.55.65q.275-.2.575-.375t.6-.3l.2-1.65q.075-.675.575-1.113T10.8 2h2.4q.675 0 1.175.438t.575 1.112l.2 1.65q.325.125.613.3t.562.375l1.5-.65q.625-.275 1.263-.05t.987.8l1.175 2.05q.35.575.213 1.225t-.663 1.075L19.125 11.6q-.275.2-.562.3t-.638.1h-2.35q0-1.45-1.037-2.475T12.05 8.5q-1.475 0-2.488 1.013T8.55 12q0 1.2.688 2.1T11 15.35v5.8q0 .35-.2.6t-.525.25M20 22h-6q-.425 0-.712-.288T13 21v-6q0-.425.288-.712T14 14h6q.425 0 .713.288T21 15v2l1.575-1.575q.125-.125.275-.062t.15.237v4.8q0 .175-.15.238t-.275-.063L21 19v2q0 .425-.288.713T20 22"/></svg> <span style="margin-inline: 8px;">Settings</span></div>', ye.addEventListener("click", function(Ue) {
            Ue.stopPropagation(), typeof re == "function" && re(ve);
          }), ve.appendChild(be), ve.appendChild(ye), ve.appendChild(fe.childNodes[0]), ve;
        }
        var hc = function() {
          var Z = p.current.innerHTML, re = document.createElement("iframe");
          re.style.display = "none", document.body.appendChild(re);
          var fe = re.contentDocument || re.contentWindow.document;
          fe.write(Z), fe.close(), re.contentWindow.print(), setTimeout(function() {
            document.body.removeChild(re);
          }, 100);
        }, fc = function(Z, re) {
          Z.preventDefault(), (p == null ? void 0 : p.current) !== null && (Er(), document.execCommand("insertHTML", !1, re), vt(null), Yt(""));
        }, qn = function(Z) {
          var re = Z.replace(/style="[^"]*"/g, "");
          return re;
        }, gc = function(Z) {
          Z.preventDefault(), navigator.clipboard.read().then(function(re) {
            re.forEach(function(fe) {
              fe.types.includes("image/png") || fe.types.includes("image/jpeg") ? fe.getType(fe.types[0]).then(function(ve) {
                var be = '<img src="'.concat(URL.createObjectURL(ve), '" alt="Image">');
                document.execCommand("insertHTML", !1, be);
              }).catch(function(ve) {
                console.error("Error reading image content:", ve);
              }) : fe.types.includes("text/html") ? fe.getType("text/html").then(function(ve) {
                ve.text().then(function(be) {
                  var ye = qn(be), Ue = ye.replace(/<!--[\s\S]*?-->/g, "");
                  document.execCommand("insertHTML", !1, Ue);
                }).catch(function(be) {
                  console.error("Error reading HTML content:", be);
                });
              }).catch(function(ve) {
                console.error("Error getting HTML type from ClipboardItem:", ve);
              }) : fe.types.includes("text/plain") && fe.getType("text/plain").then(function(ve) {
                ve.text().then(function(be) {
                  if (On(be)) {
                    var ye = '<a href="'.concat(be, '" target="_blank">').concat(be, "</a>");
                    document.execCommand("insertHTML", !1, ye);
                  } else
                    document.execCommand("insertText", !1, be);
                }).catch(function(be) {
                  console.error("Error reading text content:", be);
                });
              }).catch(function(ve) {
                console.error("Error getting text type from ClipboardItem:", ve);
              });
            });
          }).catch(function(re) {
            console.error("Error reading clipboard:", re);
          });
        }, vc = function() {
          Wr();
        }, bc = function() {
          p.current.innerHTML = "";
        }, yc = function() {
          Ql(p == null ? void 0 : p.current.innerHTML), Ye(!0);
        }, Jn = function() {
          if (!F && p !== null && p !== void 0 && p.current) {
            var Z = p == null ? void 0 : p.current.innerHTML, re = Hr(Z);
            w(re);
          } else
            w("");
          T(!F);
        }, Zn = function() {
          he(!I);
        }, Xn = function(Z) {
          Z.key === "Escape" && he(!1);
        }, Oa = function() {
          var Z = p == null ? void 0 : p.current;
          Z && (Z.innerText.trim() === "" ? (Z.classList.add("empty"), Tn(!0)) : (Z.classList.remove("empty"), Tn(!1)));
        }, Wr = function() {
          var Z = window.getSelection();
          Z.rangeCount > 0 && Un(Z.getRangeAt(0));
        }, $n = function() {
          if (Kr) {
            var Z = window.getSelection();
            Z.removeAllRanges(), Z.addRange(Kr);
          }
        };
        Object(i.useEffect)(function() {
          var g = function() {
            he(document.fullscreenElement !== null);
          };
          return Oa(), document.addEventListener("keydown", Xn), document.addEventListener("input", Oa), document.addEventListener("fullscreenchange", g), function() {
            document.removeEventListener("keydown", Xn), document.removeEventListener("input", Oa), document.removeEventListener("fullscreenchange", g);
          };
        }, []);
        var eo = function() {
          if ($t === "link")
            return {
              component: /* @__PURE__ */ e.a.createElement(Mi, {
                onLinkInsert: sc,
                item: Fn,
                setIsOpenModel: Yt,
                selectedData: Kt,
                imageUrl: Ke,
                setImageUrl: Xe,
                image_handler: k,
                setIsLoading: ee
              }),
              title: "".concat(Kt != null && Kt.link ? "Update" : "Insert", " Link")
            };
          if ($t === "image")
            return {
              component: /* @__PURE__ */ e.a.createElement(Wi, {
                onImageInsert: uc,
                item: Fn,
                setIsLoading: ee,
                setIsOpenModel: Yt,
                image_handler: k,
                selectedData: Kt
              }),
              title: "".concat(Kt != null && Kt.link ? "Update" : "Insert", " Image")
            };
          if ($t === "video")
            return {
              component: /* @__PURE__ */ e.a.createElement(tl, {
                onMediaInsert: mc,
                targetElement: it,
                targetElementType: bt
              }),
              title: "".concat(Kt != null && Kt.link ? "Update" : "Insert", " Video")
            };
          if ($t === "special_char")
            return {
              component: /* @__PURE__ */ e.a.createElement(He, {
                handleCharSelect: fc
              }),
              title: "Insert Special Characters"
            };
        };
        r && Object.keys(r).length > 0 && Object.keys(r).forEach(function(g, Z) {
          document.documentElement.style.setProperty("--editor-".concat(g), r[g]);
        }), a = Ln(a, O, qt), s = Ln(s, Y, Et), Object(i.useEffect)(function() {
          Be || p.current && u && (p.current.innerHTML = u, Re(!0)), u || (p.current.innerHTML = ""), y && y(p);
        }, [I, p, u]);
        var to = function(Z) {
          Z.preventDefault(), p.current ? $n() : setTimeout(function() {
            p.current.focus();
          }, 0), navigator.clipboard.read().then(function(re) {
            re.forEach(function(fe) {
              fe.types.includes("image/png") || fe.types.includes("image/jpeg") ? fe.getType(fe.types[0]).then(function(ve) {
                var be = '<img src="'.concat(URL.createObjectURL(ve), '" alt="Image">');
                document.execCommand("insertHTML", !1, be);
              }).catch(function(ve) {
                console.error("Error reading image content:", ve);
              }) : fe.types.includes("text/html") ? fe.getType("text/html").then(function(ve) {
                ve.text().then(function(be) {
                  var ye = qn(be), Ue = ye.replace(/<!--[\s\S]*?-->/g, "");
                  document.execCommand("insertHTML", !1, Ue);
                }).catch(function(be) {
                  console.error("Error reading HTML content:", be);
                });
              }).catch(function(ve) {
                console.error("Error getting HTML type from ClipboardItem:", ve);
              }) : fe.types.includes("text/plain") && fe.getType("text/plain").then(function(ve) {
                ve.text().then(function(be) {
                  if (On(be)) {
                    var ye = '<a href="'.concat(be, '" target="_blank">').concat(be, "</a>");
                    document.execCommand("insertHTML", !1, ye);
                  } else
                    document.execCommand("insertText", !1, be);
                }).catch(function(be) {
                  console.error("Error reading text content:", be);
                });
              }).catch(function(ve) {
                console.error("Error getting text type from ClipboardItem:", ve);
              });
            });
          }).catch(function(re) {
            console.error("Error reading clipboard:", re);
          });
        }, Da = function() {
          var Z = document.getElementsByClassName("style_wysiwygEditorToolbar__2W7yf")[0];
          Z && Xl(Z.offsetHeight > 34);
          var re = document.getElementsByClassName("style_wysiwygEditorToolbar__2W7yf")[1];
          re && (tc(re.offsetHeight > 34), nc(re.offsetHeight > 65));
        }, wc = function() {
          var Z = p.current;
          if (Z) {
            var re = document.createRange();
            Z.childNodes.length > 0 ? re.setStart(Z.childNodes[0], 0) : re.setStart(Z, 0), re.collapse(!0);
            var fe = window.getSelection();
            fe.removeAllRanges(), fe.addRange(re), Un(re);
          }
        }, na = function(Z, re) {
          Z.preventDefault();
          var fe = Z.clientX, ve = document.querySelector(".resizeImageWrapper"), be = document.querySelector(".resizer-image"), ye = parseFloat(be.style.width), Ue = parseFloat(be.style.height);
          isNaN(Ue) && (Ue = parseFloat(be.offsetHeight)), isNaN(ye) && (ye = parseFloat(be.offsetWidth));
          var $e = Ue / ye, st = function(Nt) {
            var jt = ye + (Nt.clientX - fe);
            re && (jt = ye - (Nt.clientX - fe));
            var ut = jt > 50 ? jt : 50, Je = $e * ut;
            Je = Math.round(Je), ut = Math.round(ut), ve.style.width = "".concat(ut, "px"), ve.style.height = "".concat(Je, "px"), be.style.width = "".concat(ut, "px"), be.style.height = "".concat(Je, "px");
          }, At = function pt() {
            window.removeEventListener("mousemove", st), window.removeEventListener("mouseup", pt);
          };
          window.addEventListener("mousemove", st), window.addEventListener("mouseup", At);
        }, ro = function(Z) {
          if (Z.target.tagName === "IMG" && p.current.contains(Z.target)) {
            var re, fe, ve = (re = Z.target.parentElement) === null || re === void 0 || (fe = re.classList) === null || fe === void 0 ? void 0 : fe.contains("resizeImageWrapper");
            if (ve) return;
            var be = document.querySelector(".resizer-image");
            be && Lr();
            var ye = Z.target, Ue = ye.offsetWidth, $e = document.createElement("div");
            $e.style.display = "inline-block", $e.style.width = "".concat(Ue, "px"), $e.classList.add("resizeImageWrapper");
            var st = document.createElement("div");
            st.classList.add("resizer"), st.onmousedown = na;
            var At = document.createElement("div");
            At.classList.add("resizer", "topRight"), At.onmousedown = na;
            var pt = document.createElement("div");
            pt.classList.add("resizer", "bottomLeft"), pt.onmousedown = function(Bt) {
              return na(Bt, "left");
            };
            var Nt = document.createElement("div");
            Nt.classList.add("resizer", "topLeft"), Nt.onmousedown = function(Bt) {
              return na(Bt, "left");
            }, ye.classList.add("resizer-image");
            var jt = ye.cloneNode(!0);
            $e.appendChild(jt), $e.appendChild(st), $e.appendChild(At), $e.appendChild(pt), $e.appendChild(Nt), ye.parentNode.replaceChild($e, ye);
          } else {
            var ut, Je, Dt, Vt, dt, It = (ut = Z.target) === null || ut === void 0 || (Je = ut.classList) === null || Je === void 0 ? void 0 : Je.contains("resizeImageWrapper"), Rt = (Dt = Z.target) === null || Dt === void 0 || (Vt = Dt.parentElement) === null || Vt === void 0 || (dt = Vt.classList) === null || dt === void 0 ? void 0 : dt.contains("resizeImageWrapper");
            !It && !Rt && Lr();
          }
        };
        Object(i.useEffect)(function() {
          Da(), wc();
          var g = p.current;
          return g && (window.addEventListener("click", ro), g.addEventListener("mouseup", Wr), g.addEventListener("keyup", Wr)), window.addEventListener("resize", Da), function() {
            window.removeEventListener("resize", Da), g && (window.removeEventListener("click", ro), g.removeEventListener("mouseup", Wr), g.removeEventListener("keyup", Wr));
          };
        }, [p]), Object(i.useEffect)(function() {
          I || $t || F || B ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
        }, [I, $t, F, B]);
        var xc = I && document.getElementById("action-components") ? {
          height: "calc(100vh - ".concat(document.getElementById("action-components").offsetHeight, "px - 22px)")
        } : {};
        return /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement("div", ra({}, v, {
          className: "".concat(o.a.reactEditorMain, " ").concat(I ? o.a.fullScreen : ""),
          id: "react-editor"
        }), /* @__PURE__ */ e.a.createElement("div", {
          id: "action-components",
          className: "".concat(o.a.actionComponents)
        }, s.length > 0 && /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(o.a.wysiwygEditorToolbar),
          id: "editor-navbar"
        }, /* @__PURE__ */ e.a.createElement("hr", {
          className: o.a.hr1,
          style: {
            display: Zl ? "block" : "none"
          }
        }), s.map(function(g, Z) {
          var re = g === "|", fe = g === "file" || g.name === "file", ve = g === "view" || g.name === "view", be = g === "format" || g.name === "format", ye = g === "insert" || g.name === "insert", Ue = g === "copy" || g.name === "copy", $e = g === "cut" || g.name === "cut", st = g === "paste" || g.name === "paste", At = g === "select_all" || g.name === "select_all", pt = g === "image" || g.name === "image", Nt = g === "link" || g.name === "link", jt = g === "video" || g.name === "video";
          return /* @__PURE__ */ e.a.createElement("div", {
            key: "key".concat(Z)
          }, re && /* @__PURE__ */ e.a.createElement("div", {
            className: o.a.verticalLine
          }), fe && /* @__PURE__ */ e.a.createElement(Ko, {
            handleNewDocument: bc,
            handlePreview: yc,
            handlePrint: hc,
            item: g,
            remove_from_navbar: Y
          }), ve && /* @__PURE__ */ e.a.createElement(Jt, {
            isFullScreen: I,
            handleViewSource: Jn,
            toggleFullScreen: Zn,
            item: g,
            isPlaceholder: kr,
            placeholder: x,
            value: u,
            remove_from_navbar: Y
          }), ye && /* @__PURE__ */ e.a.createElement(rt, {
            onSelectOption: hr,
            handleInsertHR: Wn,
            item: g,
            remove_from_navbar: Y
          }), be && /* @__PURE__ */ e.a.createElement(hi, {
            item: g,
            isFullScreen: I,
            remove_from_navbar: Y,
            editorRef: p
          }), At && /* @__PURE__ */ e.a.createElement("div", {
            className: o.a.increaseIconSize
          }, /* @__PURE__ */ e.a.createElement("button", {
            onClick: Vn,
            title: g != null && g.title ? g.title : "Select All",
            disabled: kr && x && !u
          }, g != null && g.icon ? g.icon : /* @__PURE__ */ e.a.createElement(R, null))), pt && /* @__PURE__ */ e.a.createElement("div", {
            className: o.a.increaseIconSize
          }, /* @__PURE__ */ e.a.createElement("button", {
            onClick: function(Je) {
              return hr(Je, "image", g);
            },
            title: g != null && g.title ? g.title : "Upload Image"
          }, g != null && g.icon ? g.icon : /* @__PURE__ */ e.a.createElement(ze, null))), Nt && /* @__PURE__ */ e.a.createElement("div", {
            className: o.a.increaseIconSize
          }, /* @__PURE__ */ e.a.createElement("button", {
            onClick: function(Je) {
              return hr(Je, "link", g);
            },
            title: g != null && g.title ? g.title : "Add Link"
          }, g != null && g.icon ? g.icon : /* @__PURE__ */ e.a.createElement(at, null))), jt && /* @__PURE__ */ e.a.createElement("div", {
            className: o.a.increaseIconSize
          }, /* @__PURE__ */ e.a.createElement("button", {
            onClick: function(Je) {
              return hr(Je, "video", g);
            },
            title: g != null && g.title ? g.title : "Upload Video"
          }, g != null && g.icon ? g.icon : /* @__PURE__ */ e.a.createElement(ne, null))), Ue && /* @__PURE__ */ e.a.createElement("div", {
            className: o.a.increaseIconSize
          }, /* @__PURE__ */ e.a.createElement(mt, {
            editorRef: p,
            name: "copy",
            icon: /* @__PURE__ */ e.a.createElement(on, null),
            title: "Copy",
            item: g,
            disabled: kr && x && !u
          })), $e && /* @__PURE__ */ e.a.createElement("div", {
            className: o.a.increaseIconSize
          }, /* @__PURE__ */ e.a.createElement(mt, {
            editorRef: p,
            name: "cut",
            icon: /* @__PURE__ */ e.a.createElement(nn, null),
            title: "Cut",
            item: g,
            disabled: kr && x && !u
          })), st && /* @__PURE__ */ e.a.createElement("div", {
            className: o.a.increaseIconSize
          }, /* @__PURE__ */ e.a.createElement("button", {
            onClick: to,
            title: g != null && g.title ? g.title : "Paste"
          }, g != null && g.icon ? g.icon : /* @__PURE__ */ e.a.createElement(an, null))));
        })), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(o.a.wysiwygEditorToolbar, " ").concat(o.a.wysiwygEditorToolbarWrapper)
        }, /* @__PURE__ */ e.a.createElement("hr", {
          className: o.a.hr1,
          style: {
            display: ec ? "block" : "none"
          }
        }), /* @__PURE__ */ e.a.createElement("hr", {
          className: "".concat(o.a.hr1, " ").concat(o.a.hr2),
          style: {
            display: ac ? "block" : "none"
          }
        }), a.map(function(g, Z) {
          var re = g === "|", fe = g === "undo" || g.name === "undo", ve = g === "redo" || g.name === "redo", be = g === "bold" || g.name === "bold", ye = g === "italic" || g.name === "italic", Ue = g === "underline" || g.name === "underline", $e = g === "superscript" || g.name === "superscript", st = g === "subscript" || g.name === "subscript", At = g === "alignLeft" || g.name === "alignLeft", pt = g === "alignCenter" || g.name === "alignCenter", Nt = g === "alignRight" || g.name === "alignRight", jt = g === "alignJustify" || g.name === "alignJustify", ut = g === "alignment" || g.name === "alignment", Je = g === "indent" || g.name === "indent", Dt = g === "outdent" || g.name === "outdent", Vt = g === "orderedList" || g.name === "orderedList", dt = g === "unorderedList" || g.name === "unorderedList", It = g === "removeFormat" || g.name === "removeFormat", Rt = g === "textColor" || g.name === "textColor", Bt = g === "backgroundColor" || g.name === "backgroundColor", nr = g === "ltr" || g.name === "ltr", oa = g === "rtl" || g.name === "rtl", ia = g === "format" || g.name === "format", la = g === "fontfamily" || g.name === "fontfamily", qr = g === "fontsize" || g.name === "fontsize", Ba = g === "copy" || g.name === "copy", _c = g === "cut" || g.name === "cut", kc = g === "paste" || g.name === "paste", Ec = g === "select_all" || g.name === "select_all", Cc = g === "image" || g.name === "image", Ac = g === "link" || g.name === "link", Sc = g === "video" || g.name === "video", Ic = g === "source_code" || g.name === "source_code", Mc = g === "full_screen" || g.name === "full_screen", Nc = g === "horizontal_line" || g.name === "horizontal_line", Rc = g === "special_character" || g.name === "special_character";
          return /* @__PURE__ */ e.a.createElement("div", {
            key: "key".concat(Z)
          }, re && /* @__PURE__ */ e.a.createElement("div", {
            className: o.a.verticalLine
          }), fe && /* @__PURE__ */ e.a.createElement(mt, {
            editorRef: p,
            name: "undo",
            icon: /* @__PURE__ */ e.a.createElement(Mt, null),
            title: g.title ? g.title : "Undo",
            item: g
          }), ve && /* @__PURE__ */ e.a.createElement(mt, {
            editorRef: p,
            name: "redo",
            icon: /* @__PURE__ */ e.a.createElement(Fe, null),
            title: "Redo",
            item: g
          }), ia && /* @__PURE__ */ e.a.createElement(gr, {
            remove_from_toolbar: O,
            editorRef: p
          }), la && /* @__PURE__ */ e.a.createElement(hl, {
            editorRef: p
          }), qr && /* @__PURE__ */ e.a.createElement(Al, {
            editorRef: p
          }), be && /* @__PURE__ */ e.a.createElement(mt, {
            editorRef: p,
            name: "bold",
            icon: /* @__PURE__ */ e.a.createElement(Ce, null),
            title: "Bold",
            item: g
          }), ye && /* @__PURE__ */ e.a.createElement(mt, {
            editorRef: p,
            name: "italic",
            icon: /* @__PURE__ */ e.a.createElement(nt, null),
            title: "Italic",
            item: g
          }), Ue && /* @__PURE__ */ e.a.createElement(mt, {
            editorRef: p,
            name: "underline",
            icon: /* @__PURE__ */ e.a.createElement(K, null),
            title: "Underline",
            item: g
          }), $e && /* @__PURE__ */ e.a.createElement(mt, {
            editorRef: p,
            name: "superscript",
            icon: /* @__PURE__ */ e.a.createElement(_e, null),
            title: "Superscript",
            item: g
          }), st && /* @__PURE__ */ e.a.createElement(mt, {
            editorRef: p,
            name: "subscript",
            icon: /* @__PURE__ */ e.a.createElement(Oe, null),
            title: "Subscript",
            item: g
          }), ut && /* @__PURE__ */ e.a.createElement(wl, {
            editorRef: p
          }), At && /* @__PURE__ */ e.a.createElement(mt, {
            editorRef: p,
            name: "justifyLeft",
            icon: /* @__PURE__ */ e.a.createElement(ge, null),
            title: "Align Left",
            item: g
          }), pt && /* @__PURE__ */ e.a.createElement(mt, {
            editorRef: p,
            name: "justifyCenter",
            icon: /* @__PURE__ */ e.a.createElement(Pt, null),
            title: "Align Center",
            item: g
          }), Nt && /* @__PURE__ */ e.a.createElement(mt, {
            editorRef: p,
            name: "justifyRight",
            icon: /* @__PURE__ */ e.a.createElement(We, null),
            title: "Align Right",
            item: g
          }), jt && /* @__PURE__ */ e.a.createElement(mt, {
            editorRef: p,
            name: "justifyFull",
            icon: /* @__PURE__ */ e.a.createElement(Ie, null),
            title: "Align Justify",
            item: g
          }), Je && /* @__PURE__ */ e.a.createElement(mt, {
            editorRef: p,
            name: "indent",
            icon: /* @__PURE__ */ e.a.createElement(Pe, null),
            title: "Increase IndentIcon",
            item: g
          }), Dt && /* @__PURE__ */ e.a.createElement(mt, {
            editorRef: p,
            name: "outdent",
            icon: /* @__PURE__ */ e.a.createElement(xe, null),
            title: "Decrease IndentIcon",
            item: g
          }), Vt && /* @__PURE__ */ e.a.createElement(mt, {
            editorRef: p,
            name: "insertOrderedList",
            icon: /* @__PURE__ */ e.a.createElement(ke, null),
            title: "Insert/Remove Numbered List",
            item: g
          }), dt && /* @__PURE__ */ e.a.createElement(mt, {
            editorRef: p,
            name: "insertUnorderedList",
            icon: /* @__PURE__ */ e.a.createElement(le, null),
            title: "Insert/Remove Bulleted List",
            item: g
          }), It && /* @__PURE__ */ e.a.createElement(mt, {
            editorRef: p,
            name: "removeFormat",
            icon: /* @__PURE__ */ e.a.createElement(ue, null),
            title: "Remove Format",
            item: g
          }), Rt && /* @__PURE__ */ e.a.createElement(tn, {
            type: "foreColor",
            title: "Text Color",
            item: g,
            editorRef: p
          }), Bt && /* @__PURE__ */ e.a.createElement(tn, {
            type: "hiliteColor",
            title: "Background Color",
            item: g,
            editorRef: p
          }), nr && /* @__PURE__ */ e.a.createElement(rn, {
            name: "ltr",
            title: "Left To Right",
            item: g,
            icon: /* @__PURE__ */ e.a.createElement(se, null),
            editorRef: p
          }), oa && /* @__PURE__ */ e.a.createElement(rn, {
            name: "rtl",
            title: "Right To Left",
            item: g,
            icon: /* @__PURE__ */ e.a.createElement(ie, null),
            editorRef: p
          }), Ec && /* @__PURE__ */ e.a.createElement("button", {
            onClick: Vn,
            title: g != null && g.title ? g.title : "Select All",
            disabled: kr && x && !u
          }, g != null && g.icon ? g.icon : /* @__PURE__ */ e.a.createElement(R, null)), Cc && /* @__PURE__ */ e.a.createElement("button", {
            onClick: function(Cr) {
              return hr(Cr, "image", g);
            },
            title: g != null && g.title ? g.title : "Upload Image"
          }, g != null && g.icon ? g.icon : /* @__PURE__ */ e.a.createElement(ze, null)), Ac && /* @__PURE__ */ e.a.createElement("button", {
            onClick: function(Cr) {
              return hr(Cr, "link", g);
            },
            title: g != null && g.title ? g.title : "Add Link"
          }, g != null && g.icon ? g.icon : /* @__PURE__ */ e.a.createElement(at, null)), Sc && /* @__PURE__ */ e.a.createElement("button", {
            onClick: function(Cr) {
              return hr(Cr, "video", g);
            },
            title: g != null && g.title ? g.title : "Upload Video"
          }, g != null && g.icon ? g.icon : /* @__PURE__ */ e.a.createElement(ne, null)), Ba && /* @__PURE__ */ e.a.createElement(mt, {
            editorRef: p,
            name: "copy",
            icon: /* @__PURE__ */ e.a.createElement(on, null),
            title: "Copy",
            item: g,
            disabled: kr && x && !u
          }), _c && /* @__PURE__ */ e.a.createElement(mt, {
            editorRef: p,
            name: "cut",
            icon: /* @__PURE__ */ e.a.createElement(nn, null),
            title: "Cut",
            item: g,
            disabled: kr && x && !u
          }), kc && /* @__PURE__ */ e.a.createElement("button", {
            onClick: to,
            title: g != null && g.title ? g.title : "Paste"
          }, g != null && g.icon ? g.icon : /* @__PURE__ */ e.a.createElement(an, null)), Ic && /* @__PURE__ */ e.a.createElement("div", {
            className: o.a.increaseIconSize
          }, /* @__PURE__ */ e.a.createElement("button", {
            onClick: Jn,
            title: (g == null ? void 0 : g.title) || "Source Code"
          }, /* @__PURE__ */ e.a.createElement(Qe, null))), Mc && /* @__PURE__ */ e.a.createElement("div", {
            className: o.a.increaseIconSize
          }, /* @__PURE__ */ e.a.createElement("button", {
            onClick: Zn,
            title: I ? (g == null ? void 0 : g.title) || "Exit Full Screen" : (g == null ? void 0 : g.title) || "Full Screen"
          }, I ? /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement(U, null)) : /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement(j, null)))), Nc && /* @__PURE__ */ e.a.createElement("div", {
            className: o.a.increaseIconSize
          }, /* @__PURE__ */ e.a.createElement("button", {
            onClick: Wn,
            title: (g == null ? void 0 : g.title) || "Horizontal Line"
          }, /* @__PURE__ */ e.a.createElement(z, null))), Rc && /* @__PURE__ */ e.a.createElement("div", {
            className: o.a.increaseIconSize
          }, /* @__PURE__ */ e.a.createElement("button", {
            onClick: function(Cr) {
              return hr(Cr, "special_char");
            },
            title: (g == null ? void 0 : g.title) || "Special Char"
          }, /* @__PURE__ */ e.a.createElement($, null))));
        }))), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(o.a.content__editable__container)
        }, /* @__PURE__ */ e.a.createElement("div", ra({}, Q, {
          className: "".concat(o.a.mlMainContentBox),
          autoFocus: I,
          contentEditable: !0,
          ref: p,
          onPaste: gc,
          spellCheck: "true",
          onInput: ic,
          onBlur: vc,
          "data-placeholder": x,
          onKeyDown: cc,
          style: Rn(Rn({}, q), xc)
        })), /* @__PURE__ */ e.a.createElement(cl, {
          editorRef: p,
          setIsOpenModel: Yt,
          setSelectedData: Bn,
          setSelectedEvent: La,
          setImageUrl: Xe,
          selectedEvent: yt,
          handleRemoveLink: dc,
          selectedRange: Kr
        }))), ce && /* @__PURE__ */ e.a.createElement(xi, {
          viewSource: F,
          setViewSource: T,
          sourceCode: f,
          setSourceCode: w,
          handleSaveSource: Kn
        }), $t && /* @__PURE__ */ e.a.createElement(ka, {
          isOpen: $t,
          onClose: Vr,
          title: eo().title
        }, eo().component), F && /* @__PURE__ */ e.a.createElement(qo, {
          viewSource: F,
          setViewSource: T,
          sourceCode: f,
          setSourceCode: w,
          handleSaveSource: Kn
        }), B && /* @__PURE__ */ e.a.createElement(Jo, {
          openPreview: B,
          setOpenPreview: Ye,
          previewContent: Ul
        }), /* @__PURE__ */ e.a.createElement("div", {
          id: "modal-root"
        }), /* @__PURE__ */ e.a.createElement("div", {
          id: "full-screen-overlay"
        }));
      }
    }
    /******/
  ]);
})(zo);
var Ss = zo.exports;
const Is = /* @__PURE__ */ Co(Ss), Ms = ({
  value: m = "",
  name: d = "",
  onChange: n,
  label: l = "",
  required: i = !1,
  placeholder: e = "",
  parentClass: b = "col-span-12",
  height: o = 300,
  disabled: R = !1,
  errorMessage: S = ""
}) => {
  const M = (D) => {
  };
  return /* @__PURE__ */ L(
    "div",
    {
      className: te(J.field.wrapper, b),
      id: `field-${d}`,
      children: [
        l && /* @__PURE__ */ c(Ft, { label: l, required: i }),
        /* @__PURE__ */ c(
          Is,
          {
            value: m,
            onChange: (D) => n == null ? void 0 : n(D || ""),
            getEditorRef: M,
            placeholder: e,
            mainProps: {
              className: `${R ? "pointer-events-none opacity-70" : ""}`,
              style: { minHeight: `${o}px` }
            }
          }
        ),
        S && /* @__PURE__ */ c(
          "span",
          {
            className: te(
              J.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: S
          }
        )
      ]
    }
  );
}, Ns = ({
  name: m = "",
  label: d = "",
  options: n = [],
  value: l = null,
  onChange: i,
  disabled: e = !1,
  required: b = !1,
  parentClass: o = "col-span-12",
  className: R = "",
  errorMessage: S = "",
  multiSelect: M = !1
}) => {
  const D = Array.isArray(n) && n.length > 0, E = (P) => D ? M ? Array.isArray(l) && l.includes(P) : l === P : !!l, z = (P) => {
    i == null || i(P.target.checked, m);
  }, W = (P, ae) => {
    if (i)
      if (!M)
        i(ae ? P : "", m);
      else {
        const U = Array.isArray(l) ? [...l] : [];
        if (ae)
          U.includes(P) || U.push(P);
        else {
          const j = U.indexOf(P);
          j > -1 && U.splice(j, 1);
        }
        i(U, m);
      }
  };
  return et(() => {
    let P;
    D ? M ? P = Array.isArray(l) ? l : [] : P = l || "" : P = !!l, setTimeout(() => {
      i == null || i(P, m);
    }, 100);
  }, []), D ? /* @__PURE__ */ c(Ve, { children: /* @__PURE__ */ L("div", { className: te(J.field.wrapper, o), children: [
    /* @__PURE__ */ c(Ft, { label: d, required: b }),
    /* @__PURE__ */ c("div", { className: "flex flex-col space-y-2", children: n.map((P, ae) => /* @__PURE__ */ L("div", { className: "flex items-center", children: [
      /* @__PURE__ */ c(
        "input",
        {
          type: "checkbox",
          name: m,
          id: `field-${m}`,
          value: P.value,
          checked: E(P.value),
          disabled: e || !!P.disabled,
          required: b && ae === 0,
          onChange: (U) => W(P.value, U.target.checked),
          className: te(
            J.field.input,
            "h-4 w-4 cursor-pointer text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400",
            R
          )
        },
        m
      ),
      P.label && /* @__PURE__ */ c(
        "label",
        {
          htmlFor: m,
          className: "ml-2 text-sm text-gray-700 dark:text-gray-200 select-none",
          children: P.label
        }
      )
    ] }, P.value || P.label)) }),
    S && /* @__PURE__ */ c(
      "span",
      {
        className: te(
          J.field.error,
          "text-red-500 text-xs mt-1"
        ),
        children: S
      }
    )
  ] }) }) : /* @__PURE__ */ L(
    "div",
    {
      className: te(
        J.field.wrapper,
        "flex items-center",
        o
      ),
      children: [
        /* @__PURE__ */ c(
          "input",
          {
            type: "checkbox",
            name: m,
            checked: E(),
            disabled: e,
            required: b,
            onChange: z,
            className: te(
              J.field.input,
              "h-4 w-4 text-blue-600 cursor-pointer border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400",
              R
            )
          }
        ),
        d && /* @__PURE__ */ c(
          "label",
          {
            htmlFor: m,
            className: "ml-2 text-sm text-gray-700 dark:text-gray-200 select-none",
            children: d
          }
        )
      ]
    }
  );
}, ho = Tt, Rs = ({
  label: m = "",
  value: d = null,
  onChange: n,
  required: l = !1,
  accept: i = "audio/*",
  id: e,
  dragDrop: b = !1,
  name: o = "",
  parentClass: R = "",
  errorMessage: S = "",
  maxSize: M = 0
}) => {
  const { enqueueSnackbar: D } = Tr(), [E, z] = pe(
    null
  ), [W, P] = pe(!1), ae = kt(null), U = M * 1024 * 1024;
  et(() => {
    if (!d) {
      j(), z(null);
      return;
    }
    if (d instanceof File) {
      const K = URL.createObjectURL(d);
      return z({ file: d, preview: K }), () => {
        URL.revokeObjectURL(K);
      };
    } else typeof d == "string" ? z({ preview: d }) : d != null && d.preview && z(d);
  }, [d]);
  const j = () => {
    E != null && E.preview && E.preview.startsWith("blob:") && URL.revokeObjectURL(E.preview);
  }, $ = (K) => {
    if (!K || K.length === 0)
      return;
    const ue = K[0];
    if (U && ue.size > U) {
      D(
        `Audio is too large. Maximum allowed size is ${M} MB`,
        { variant: "warning" }
      );
      return;
    }
    const _e = URL.createObjectURL(ue);
    j(), z({ file: ue, preview: _e }), n == null || n(ue);
  }, de = (K) => {
    K && K.stopPropagation(), j(), z(null), n == null || n(null), ae.current && (ae.current.value = "");
  }, se = (K) => {
    b && (K.preventDefault(), P(!0));
  }, ie = (K) => {
    b && (K.preventDefault(), P(!1));
  }, ke = (K) => {
    var ue, _e, Oe, Fe;
    b && (K.preventDefault(), P(!1), (Fe = (Oe = (_e = (ue = K.dataTransfer) == null ? void 0 : ue.files) == null ? void 0 : _e[0]) == null ? void 0 : Oe.type) != null && Fe.includes("audio/") && $(K.dataTransfer.files));
  }, le = () => {
    var K;
    (K = ae.current) == null || K.click();
  };
  return /* @__PURE__ */ L(
    "div",
    {
      className: te(
        J.mediaPicker.audio,
        J.field.wrapper,
        R || "col-span-12"
      ),
      children: [
        /* @__PURE__ */ c(Ft, { label: m, required: l }),
        /* @__PURE__ */ L(
          "div",
          {
            className: te(
              J.mediaPicker.dropzone,
              "relative rounded-lg p-2 transition-all",
              W ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800",
              S ? "border-red-500" : ""
            ),
            onDragOver: se,
            onDragLeave: ie,
            onDrop: ke,
            id: `field-${o}`,
            children: [
              /* @__PURE__ */ c(
                "input",
                {
                  ref: ae,
                  id: e,
                  type: "file",
                  accept: i,
                  onChange: (K) => $(K.target.files),
                  required: l && !E,
                  className: "absolute opacity-0 right-[50%] top-[80%] -translate-y-1/2 pointer-events-none h-[10px]"
                }
              ),
              /* @__PURE__ */ c(
                "div",
                {
                  className: `flex items-center space-x-4 transition-all ${W ? "opacity-50" : ""}`,
                  children: E ? /* @__PURE__ */ L("div", { className: "flex items-center space-x-4", children: [
                    /* @__PURE__ */ L("div", { className: "relative w-full", children: [
                      !l && /* @__PURE__ */ c(
                        "button",
                        {
                          type: "button",
                          onClick: de,
                          className: "absolute top-0 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800",
                          "aria-label": "Remove audio",
                          children: /* @__PURE__ */ c(Ht, { icon: "mdi:close", className: "w-3 h-3" })
                        }
                      ),
                      /* @__PURE__ */ c(
                        "audio",
                        {
                          src: E.preview,
                          controls: !0,
                          controlsList: "nodownload"
                        },
                        E.preview
                      )
                    ] }),
                    /* @__PURE__ */ c(ho, { type: "button", onClick: le, children: /* @__PURE__ */ c("span", { children: "Change Audio File" }) })
                  ] }) : /* @__PURE__ */ L("div", { className: "flex items-center justify-center space-x-4", children: [
                    /* @__PURE__ */ c("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ c(Ht, { icon: "mdi:music", className: "text-gray-400 w-10 h-10" }) }),
                    /* @__PURE__ */ L("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ c(
                        ho,
                        {
                          type: "button",
                          onClick: le,
                          variant: "outlined",
                          children: /* @__PURE__ */ c("span", { children: "Choose Audio File" })
                        }
                      ),
                      b && /* @__PURE__ */ c("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop your audio file here" })
                    ] })
                  ] })
                }
              ),
              b && W && !E && /* @__PURE__ */ c("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-lg", children: /* @__PURE__ */ c("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg", children: "Drop audio here" }) })
            ]
          }
        ),
        S && /* @__PURE__ */ c(
          "span",
          {
            className: te(
              J.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: S
          }
        )
      ]
    },
    o
  );
}, fo = Tt, Ls = (m) => {
  if (!m)
    return null;
  if (m instanceof File) {
    const d = URL.createObjectURL(m);
    return {
      id: `${Date.now()}-${Math.random()}`,
      file: m,
      preview: d,
      createdBlobUrl: d
    };
  }
  if (typeof m == "string")
    return {
      id: `${Date.now()}-${Math.random()}`,
      file: null,
      preview: m
    };
  if (typeof m == "object") {
    if (m.preview)
      return {
        id: `${Date.now()}-${Math.random()}`,
        file: m.file || null,
        preview: m.preview
      };
    if (m.file) {
      const d = URL.createObjectURL(m.file);
      return {
        id: `${Date.now()}-${Math.random()}`,
        file: m.file,
        preview: d,
        createdBlobUrl: d
      };
    }
  }
  return null;
}, Os = ({
  label: m = "",
  value: d = [],
  onChange: n,
  required: l = !1,
  accept: i = "image/*",
  aspect: e = "1",
  id: b,
  dragDrop: o = !1,
  cropImage: R = !1,
  name: S = "",
  parentClass: M = "",
  maxImages: D,
  errorMessage: E = ""
}) => {
  const [z, W] = pe([]), [P, ae] = pe(!1), [U, j] = pe(!1), [$, de] = pe(""), [se, ie] = pe("image/jpeg"), [ke, le] = pe("cropped-image"), [K, ue] = pe(null), _e = kt(null), Oe = kt(null), Fe = kt(""), Mt = kt([]);
  et(() => {
    Mt.current = z;
  }, [z]), et(() => () => {
    Mt.current.forEach((we) => {
      we.createdBlobUrl && URL.revokeObjectURL(we.createdBlobUrl);
    }), Fe.current && URL.revokeObjectURL(Fe.current);
  }, []), et(() => {
    if (!Array.isArray(d)) {
      W([]);
      return;
    }
    const we = d.map((je) => Ls(je)).filter(Boolean);
    W((je) => (je.forEach((Ge) => {
      Ge.createdBlobUrl && URL.revokeObjectURL(Ge.createdBlobUrl);
    }), we));
  }, [d]);
  const at = typeof D == "number" && D > 0 ? Math.max(D - z.length, 0) : Number.POSITIVE_INFINITY, nt = () => {
    j(!1), Fe.current && (URL.revokeObjectURL(Fe.current), Fe.current = ""), de(""), ue(null), _e.current && (_e.current.value = "");
  }, xe = (we) => {
    var je, Ge;
    de(we.preview), ie(((je = we.file) == null ? void 0 : je.type) || "image/jpeg"), le(
      (((Ge = we.file) == null ? void 0 : Ge.name) || "cropped-image").replace(/\.[^/.]+$/, "")
    ), ue(we.id), j(!0);
  }, Pe = (we) => {
    const je = URL.createObjectURL(we);
    W((Ge) => {
      const Te = Ge.map((He) => He.id !== K ? He : (He.createdBlobUrl && URL.revokeObjectURL(He.createdBlobUrl), {
        ...He,
        file: we,
        preview: je,
        createdBlobUrl: je
      }));
      return n == null || n(
        Te.map((He) => He.file ? He.file : He.preview)
      ), Te;
    }), nt();
  }, ze = (we) => {
    if (!we || we.length === 0 || at === 0)
      return;
    const je = Array.from(we).filter((Te) => Te.type.includes("image/")).slice(0, at);
    if (je.length === 0)
      return;
    const Ge = je.map((Te) => {
      const He = URL.createObjectURL(Te);
      return {
        id: `${Date.now()}-${Math.random()}`,
        file: Te,
        preview: He,
        createdBlobUrl: He
      };
    });
    W((Te) => {
      const He = [...Te, ...Ge];
      return n == null || n(
        He.map((qe) => qe.file ? qe.file : qe.preview)
      ), He;
    }), _e.current && (_e.current.value = "");
  }, ne = (we) => {
    W((je) => {
      const Ge = je.find((He) => He.id === we);
      Ge != null && Ge.createdBlobUrl && URL.revokeObjectURL(Ge.createdBlobUrl);
      const Te = je.filter((He) => He.id !== we);
      return n == null || n(
        Te.map((He) => He.file ? He.file : He.preview)
      ), Te;
    }), _e.current && (_e.current.value = "");
  }, Ce = (we) => {
    var je;
    ue(we), (je = Oe.current) == null || je.click();
  }, Qe = (we) => {
    if (!we || we.length === 0 || !K)
      return;
    const je = Array.from(we).find((Te) => Te.type.includes("image/"));
    if (!je)
      return;
    const Ge = URL.createObjectURL(je);
    W((Te) => {
      const He = Te.map((qe) => qe.id !== K ? qe : (qe.createdBlobUrl && URL.revokeObjectURL(qe.createdBlobUrl), {
        ...qe,
        file: je,
        preview: Ge,
        createdBlobUrl: Ge
      }));
      return n == null || n(
        He.map((qe) => qe.file ? qe.file : qe.preview)
      ), He;
    }), ue(null), Oe.current && (Oe.current.value = "");
  }, We = (we) => {
    o && (we.preventDefault(), ae(!0));
  }, Ie = (we) => {
    o && (we.preventDefault(), ae(!1));
  }, Pt = (we) => {
    var je;
    o && (we.preventDefault(), ae(!1), ze(((je = we.dataTransfer) == null ? void 0 : je.files) || null));
  }, ge = () => {
    var we;
    (we = _e.current) == null || we.click();
  }, tt = typeof D == "number" && D > 0 ? z.length < D : !0;
  return /* @__PURE__ */ L(Ve, { children: [
    /* @__PURE__ */ L(
      "div",
      {
        className: te(
          J.mediaPicker.multiImage,
          J.field.wrapper,
          M || "col-span-12"
        ),
        children: [
          /* @__PURE__ */ c(Ft, { label: m, required: l }),
          /* @__PURE__ */ L(
            "div",
            {
              className: te(
                J.mediaPicker.dropzone,
                "relative rounded-md p-2 transition-all",
                P ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800",
                E ? "border-red-500" : ""
              ),
              onDragOver: We,
              onDragLeave: Ie,
              onDrop: Pt,
              id: `field-${S}`,
              children: [
                /* @__PURE__ */ c(
                  "input",
                  {
                    ref: _e,
                    id: b,
                    type: "file",
                    accept: i,
                    multiple: !0,
                    onChange: (we) => ze(we.target.files),
                    required: l && z.length === 0,
                    className: "absolute opacity-0 pointer-events-none h-1 w-1"
                  }
                ),
                /* @__PURE__ */ c(
                  "input",
                  {
                    ref: Oe,
                    type: "file",
                    accept: i,
                    onChange: (we) => Qe(we.target.files),
                    className: "absolute opacity-0 pointer-events-none h-1 w-1"
                  }
                ),
                z.length === 0 ? /* @__PURE__ */ L("div", { className: "flex items-center space-x-4", children: [
                  /* @__PURE__ */ c("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ c(
                    Ht,
                    {
                      icon: "ri:multi-image-fill",
                      className: "text-gray-400 w-10 h-10"
                    }
                  ) }),
                  /* @__PURE__ */ L("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ c(
                      fo,
                      {
                        type: "button",
                        onClick: ge,
                        variant: "outlined",
                        color: "default",
                        children: /* @__PURE__ */ c("span", { className: "text-sm font-medium", children: "Choose Images" })
                      }
                    ),
                    o && /* @__PURE__ */ c("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop your images here" })
                  ] })
                ] }) : /* @__PURE__ */ L(Ve, { children: [
                  /* @__PURE__ */ L("div", { className: "flex items-center justify-between gap-2 mb-3", children: [
                    /* @__PURE__ */ c(
                      fo,
                      {
                        type: "button",
                        onClick: ge,
                        disabled: !tt,
                        variant: "outlined",
                        color: "default",
                        children: /* @__PURE__ */ c("span", { className: "text-sm font-medium", children: "Upload Images" })
                      }
                    ),
                    /* @__PURE__ */ c("span", { className: "text-xs text-gray-500 dark:text-gray-400", children: D ? `${z.length}/${D}` : `${z.length} selected` })
                  ] }),
                  /* @__PURE__ */ c("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3", children: z.map((we) => /* @__PURE__ */ L(
                    "div",
                    {
                      className: "relative group rounded-md overflow-hidden border border-gray-200 dark:border-gray-700",
                      children: [
                        /* @__PURE__ */ c(
                          "img",
                          {
                            src: we.preview,
                            alt: "preview",
                            className: "w-full h-28 object-cover"
                          }
                        ),
                        /* @__PURE__ */ L("div", { className: "absolute top-2 right-2 flex items-center gap-1.5 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity", children: [
                          /* @__PURE__ */ c(
                            "button",
                            {
                              type: "button",
                              onClick: () => Ce(we.id),
                              className: "w-7 h-7 rounded-full bg-white/90 text-gray-800 hover:bg-white flex items-center justify-center shadow",
                              "aria-label": "Replace image",
                              children: /* @__PURE__ */ c(Ht, { icon: "solar:refresh-bold", className: "w-4 h-4" })
                            }
                          ),
                          R && /* @__PURE__ */ c(
                            "button",
                            {
                              type: "button",
                              onClick: () => xe(we),
                              className: "w-7 h-7 rounded-full bg-white/90 text-gray-800 hover:bg-white flex items-center justify-center shadow",
                              "aria-label": "Crop image",
                              children: /* @__PURE__ */ c(Ht, { icon: "solar:crop-bold", className: "w-4 h-4" })
                            }
                          ),
                          /* @__PURE__ */ c(
                            "button",
                            {
                              type: "button",
                              onClick: () => ne(we.id),
                              className: "w-7 h-7 rounded-full bg-red-500/95 text-white hover:bg-red-600 flex items-center justify-center shadow",
                              "aria-label": "Delete image",
                              children: /* @__PURE__ */ c(
                                Ht,
                                {
                                  icon: "solar:trash-bin-trash-bold",
                                  className: "w-4 h-4"
                                }
                              )
                            }
                          )
                        ] })
                      ]
                    },
                    we.id
                  )) })
                ] }),
                o && P && z.length === 0 && /* @__PURE__ */ c("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-lg", children: /* @__PURE__ */ c("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg", children: "Drop images here" }) })
              ]
            }
          ),
          E && /* @__PURE__ */ c(
            "span",
            {
              className: te(
                J.field.error,
                "text-red-500 text-xs mt-1"
              ),
              children: E
            }
          )
        ]
      },
      S
    ),
    /* @__PURE__ */ c(
      Do,
      {
        isOpen: U,
        imageSrc: $,
        fileType: se,
        fileName: ke,
        onClose: nt,
        onApply: Pe,
        aspect: Number(e)
      }
    )
  ] });
}, tr = ({
  src: m,
  alt: d = "preview",
  isOpen: n,
  setIsOpen: l
}) => {
  const i = () => l(!1);
  return et(() => {
    const e = (b) => {
      b.key === "Escape" && i();
    };
    return n && (document.body.style.overflow = "hidden", document.addEventListener("keydown", e)), () => {
      document.body.style.overflow = "", document.removeEventListener("keydown", e);
    };
  }, [n]), /* @__PURE__ */ c(Ve, { children: /* @__PURE__ */ L(
    "div",
    {
      className: te(
        J.imagePreview.root,
        "fixed inset-0 z-50 flex items-center justify-center bg-black/70 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      ),
      onClick: i,
      children: [
        /* @__PURE__ */ c(
          "button",
          {
            onClick: i,
            className: `absolute top-4 right-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200\r
                     hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-2 shadow-lg transition`,
            children: /* @__PURE__ */ c(pa, { size: 20 })
          }
        ),
        /* @__PURE__ */ c(
          "div",
          {
            className: te(
              J.imagePreview.container,
              "max-w-5xl w-full px-4 transform transition-all duration-200 scale-95 animate-in zoom-in-95"
            ),
            onClick: (e) => e.stopPropagation(),
            children: /* @__PURE__ */ c(
              "img",
              {
                src: m,
                alt: d,
                className: te(
                  J.imagePreview.image,
                  "w-full max-h-[90vh] object-contain rounded-xl"
                )
              }
            )
          }
        )
      ]
    }
  ) });
}, jo = ({
  col: m,
  data: d,
  uiVariant: n = "default",
  styleConfig: l = {}
}) => {
  const i = d[m.titleKey], e = d[m.subtitleKey], b = d[m.imageKey], o = m.fallback_icon, [R, S] = pe(null), [M, D] = pe(!1), E = (W) => {
    let P = W;
    W && W.src instanceof File && (P = { ...W, src: URL.createObjectURL(W.src) }), S(P), D(!0);
  }, z = (W) => {
    const ae = {
      sm: { img: "w-8 h-8", wrap: "w-8 h-8", icon: "w-4 h-4" },
      md: { img: "w-12 h-12", wrap: "w-12 h-12", icon: "w-6 h-6" },
      lg: { img: "w-16 h-16", wrap: "w-16 h-16", icon: "w-8 h-8" }
    }[W];
    return b ? /* @__PURE__ */ c(
      "img",
      {
        src: b instanceof File ? URL.createObjectURL(b) : b,
        alt: i,
        onClick: () => E({ src: b, alt: i }),
        className: `${ae.img} cursor-pointer rounded-full object-cover border-2 border-white dark:border-gray-700 shadow flex-shrink-0`
      }
    ) : o ? o instanceof Function ? o(d) : o : /* @__PURE__ */ c(
      "div",
      {
        className: `${ae.wrap} flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-600 flex-shrink-0`,
        children: /* @__PURE__ */ c(qa, { className: `${ae.icon} text-gray-400` })
      }
    );
  };
  return n === "card" ? /* @__PURE__ */ L(Ve, { children: [
    M && R && /* @__PURE__ */ c(
      tr,
      {
        src: R.src,
        alt: R.alt,
        isOpen: M,
        setIsOpen: D
      }
    ),
    /* @__PURE__ */ L(
      "div",
      {
        className: te(
          J.details.row,
          "col-span-12 relative overflow-hidden rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent dark:from-primary/20 dark:via-primary/10 border border-primary/20 dark:border-primary/30 p-5 flex items-center gap-4",
          l.rowClass || "",
          l.groupClass || "",
          m.blockClass || ""
        ),
        children: [
          /* @__PURE__ */ c("div", { className: "pointer-events-none absolute -right-6 -top-6 w-32 h-32 rounded-full bg-primary/8 dark:bg-primary/12" }),
          /* @__PURE__ */ c("div", { className: "pointer-events-none absolute -right-2 -bottom-4 w-20 h-20 rounded-full bg-primary/5" }),
          z("lg"),
          /* @__PURE__ */ L("div", { className: "min-w-0 z-10", children: [
            /* @__PURE__ */ c(
              "h3",
              {
                className: `text-lg font-bold text-gray-900 dark:text-white truncate ${l.valueClass || ""}`,
                children: i
              }
            ),
            /* @__PURE__ */ c(
              "p",
              {
                className: `text-sm text-primary/70 dark:text-primary/60 font-medium truncate ${l.labelClass || ""}`,
                children: e
              }
            )
          ] })
        ]
      }
    )
  ] }) : n === "split" ? /* @__PURE__ */ L(Ve, { children: [
    M && R && /* @__PURE__ */ c(
      tr,
      {
        src: R.src,
        alt: R.alt,
        isOpen: M,
        setIsOpen: D
      }
    ),
    /* @__PURE__ */ L(
      "div",
      {
        className: te(
          J.details.row,
          "flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-primary/8 via-primary/4 to-transparent dark:from-primary/15 dark:via-primary/8",
          l.rowClass || "",
          l.groupClass || "",
          m.blockClass || ""
        ),
        children: [
          z("md"),
          /* @__PURE__ */ L("div", { className: "min-w-0", children: [
            /* @__PURE__ */ c(
              "h3",
              {
                className: `text-base font-bold text-gray-900 dark:text-white truncate ${l.valueClass || ""}`,
                children: i
              }
            ),
            /* @__PURE__ */ c(
              "p",
              {
                className: `text-xs font-semibold text-primary/70 dark:text-primary/60 truncate ${l.labelClass || ""}`,
                children: e
              }
            )
          ] })
        ]
      }
    )
  ] }) : /* @__PURE__ */ L(Ve, { children: [
    M && R && /* @__PURE__ */ c(
      tr,
      {
        src: R.src,
        alt: R.alt,
        isOpen: M,
        setIsOpen: D
      }
    ),
    /* @__PURE__ */ L(
      "div",
      {
        className: te(
          J.details.row,
          "col-span-12 flex items-center space-x-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-900",
          l.rowClass || "",
          l.groupClass || "",
          m.blockClass || ""
        ),
        children: [
          z("lg"),
          /* @__PURE__ */ L("div", { children: [
            /* @__PURE__ */ c(
              "h3",
              {
                className: `text-xl font-semibold text-gray-900 dark:text-white ${l.valueClass || ""}`,
                children: i
              }
            ),
            /* @__PURE__ */ c(
              "p",
              {
                className: `text-sm text-gray-500 dark:text-gray-400 ${l.labelClass || ""}`,
                children: e
              }
            )
          ] })
        ]
      }
    )
  ] });
}, To = ({
  col: m,
  data: d,
  uiVariant: n = "default",
  styleConfig: l = {}
}) => {
  const i = d[m.titleKey], e = d[m.subtitleKey], b = d[m.imageKey], o = m.label, R = m == null ? void 0 : m.icon, S = m.fallback_icon, [M, D] = pe(null), [E, z] = pe(!1), W = (ae) => {
    let U = ae;
    ae && ae.src instanceof File && (U = { ...ae, src: URL.createObjectURL(ae.src) }), D(U), z(!0);
  }, P = () => b ? /* @__PURE__ */ c(
    "img",
    {
      src: b instanceof File ? URL.createObjectURL(b) : b,
      alt: i,
      onClick: () => W({ src: b, alt: i }),
      className: "w-8 h-8 cursor-pointer rounded-full object-cover border-2 border-gray-200 dark:border-gray-700 flex-shrink-0"
    }
  ) : S ? S instanceof Function ? S(d) : S : /* @__PURE__ */ c("div", { className: "w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 flex-shrink-0", children: /* @__PURE__ */ c(qa, { className: "w-5 h-5 text-gray-400" }) });
  return n === "card" ? /* @__PURE__ */ L(Ve, { children: [
    E && M && /* @__PURE__ */ c(
      tr,
      {
        src: M.src,
        alt: M.alt,
        isOpen: E,
        setIsOpen: z
      }
    ),
    /* @__PURE__ */ L(
      "div",
      {
        className: te(
          J.details.row,
          m.blockClass || "col-span-6",
          "group bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 p-4 flex flex-col gap-2.5",
          l.rowClass || "",
          l.cardGroupClass || ""
        ),
        children: [
          R && /* @__PURE__ */ c(
            "div",
            {
              className: `w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 [&>svg]:w-4 [&>svg]:h-4 ${l.iconClass || ""}`,
              children: R
            }
          ),
          /* @__PURE__ */ c(
            "p",
            {
              className: `text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 leading-none ${l.labelClass || ""}`,
              children: o
            }
          ),
          /* @__PURE__ */ L("div", { className: "flex items-center gap-2 mt-auto", children: [
            P(),
            /* @__PURE__ */ L("div", { className: "min-w-0", children: [
              /* @__PURE__ */ c(
                "p",
                {
                  className: `text-sm font-semibold text-gray-800 dark:text-gray-100 truncate ${l.valueClass || ""}`,
                  children: i
                }
              ),
              e && /* @__PURE__ */ c("p", { className: "text-xs text-gray-400 dark:text-gray-500 truncate", children: e })
            ] })
          ] })
        ]
      }
    )
  ] }) : n === "split" ? /* @__PURE__ */ L(Ve, { children: [
    E && M && /* @__PURE__ */ c(
      tr,
      {
        src: M.src,
        alt: M.alt,
        isOpen: E,
        setIsOpen: z
      }
    ),
    /* @__PURE__ */ L(
      "div",
      {
        className: te(
          J.details.row,
          "flex items-stretch min-h-[52px]",
          l.rowClass || "",
          l.cardGroupClass || "",
          m.blockClass || ""
        ),
        children: [
          /* @__PURE__ */ L("div", { className: "w-[42%] flex-shrink-0 flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-gray-800/80 border-r border-gray-200 dark:border-gray-700", children: [
            R && /* @__PURE__ */ c(
              "span",
              {
                className: `text-primary/60 dark:text-primary/50 flex-shrink-0 [&>svg]:w-3.5 [&>svg]:h-3.5 ${l.iconClass || ""}`,
                children: R
              }
            ),
            /* @__PURE__ */ c(
              "p",
              {
                className: `text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 leading-tight ${l.labelClass || ""}`,
                children: o
              }
            )
          ] }),
          /* @__PURE__ */ L("div", { className: "flex-1 flex items-center gap-2.5 px-4 py-3 bg-white dark:bg-gray-900", children: [
            P(),
            /* @__PURE__ */ L("div", { className: "min-w-0", children: [
              /* @__PURE__ */ c(
                "p",
                {
                  className: `text-sm text-gray-800 dark:text-gray-100 break-words ${l.valueClass || ""}`,
                  children: i
                }
              ),
              e && /* @__PURE__ */ c("p", { className: "text-xs text-gray-400 dark:text-gray-500 truncate", children: e })
            ] })
          ] })
        ]
      }
    )
  ] }) : /* @__PURE__ */ L(Ve, { children: [
    E && M && /* @__PURE__ */ c(
      tr,
      {
        src: M.src,
        alt: M.alt,
        isOpen: E,
        setIsOpen: z
      }
    ),
    /* @__PURE__ */ L(
      "div",
      {
        className: te(
          J.details.row,
          "col-span-12 flex items-center space-x-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-900",
          l.rowClass || "",
          l.cardGroupClass || "",
          m.blockClass || ""
        ),
        children: [
          R && /* @__PURE__ */ c("div", { className: `flex-shrink-0 ${l.iconClass || ""}`, children: R }),
          /* @__PURE__ */ L("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ c(
              "p",
              {
                className: `text-sm font-medium text-gray-500 dark:text-gray-400 ${l.labelClass || ""}`,
                children: o
              }
            ),
            /* @__PURE__ */ L("div", { className: "flex items-center mt-1", children: [
              P(),
              /* @__PURE__ */ L("div", { className: "ml-2", children: [
                /* @__PURE__ */ c(
                  "p",
                  {
                    className: `mb-0 text-sm text-gray-900 dark:text-white break-words ${l.valueClass || ""}`,
                    children: i
                  }
                ),
                /* @__PURE__ */ c(
                  "p",
                  {
                    className: `text-xs text-gray-500 dark:text-gray-400 ${l.labelClass || ""}`,
                    children: e
                  }
                )
              ] })
            ] })
          ] })
        ]
      }
    )
  ] });
}, go = {
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
}, vo = {
  contained: "bg",
  outline: "border !bg-transparent",
  soft: "bg opacity-90"
}, Ho = ({
  label: m,
  variant: d = "contained",
  color: n = "green",
  className: l = ""
}) => {
  const i = go[n] || go.green, e = vo[d] || vo.contained, b = d === "outline" ? i.border : i.bg;
  return /* @__PURE__ */ c(
    "span",
    {
      className: te(
        J.chip.root,
        "inline-flex justify-center items-center rounded-sm text-xs font-semibold px-3 py-1 min-w-[78px]",
        b,
        e,
        l
      ),
      children: m
    }
  );
}, Fo = ({
  col: m,
  data: d,
  uiVariant: n = "default",
  styleConfig: l = {}
}) => {
  var U;
  const [i, e] = pe(null), [b, o] = pe(!1), R = m == null ? void 0 : m.icon, S = m.label;
  let M = d[m.key];
  const D = m.type, E = m.variant || "outline";
  let z = m.defaultColor;
  if (D === "chip" && ((U = m.chipOptions) == null ? void 0 : U.length) > 0) {
    const j = m == null ? void 0 : m.chipOptions.find(($) => $.value == M);
    j && (M = j.label, z = j.color);
  }
  const W = (j) => {
    if (!j) return "";
    if (typeof j == "string") return j;
    if (j instanceof File) return URL.createObjectURL(j);
    if (typeof j == "object") {
      if (typeof j.preview == "string") return j.preview;
      if (typeof j.src == "string") return j.src;
      if (j.src instanceof File) return URL.createObjectURL(j.src);
      if (j.file instanceof File) return URL.createObjectURL(j.file);
    }
    return "";
  }, P = (j, $) => {
    e({ src: j, alt: $ }), o(!0);
  }, ae = (j = "text-sm text-gray-900 dark:text-white break-words") => {
    if (typeof m.render == "function") {
      const $ = m.render(d, M);
      return /* @__PURE__ */ c("div", { className: l.valueClass || "", children: $ });
    }
    if (D === "chip")
      return /* @__PURE__ */ c(Ho, { label: M, variant: E, color: z, className: "mt-1" });
    if (D === "tinyEditor")
      return /* @__PURE__ */ c(
        "p",
        {
          className: `${j} ${l.valueClass || ""}`,
          dangerouslySetInnerHTML: { __html: M }
        }
      );
    if (D === "video")
      return M ? /* @__PURE__ */ c(
        "video",
        {
          controls: !0,
          src: M instanceof File ? URL.createObjectURL(M) : M,
          onClick: ($) => $.stopPropagation(),
          className: "shadow-sm mt-1 w-full max-w-xs max-h-[250px] rounded-md "
        },
        M instanceof File ? URL.createObjectURL(M) : M
      ) : /* @__PURE__ */ c("p", { className: "text-sm text-gray-400", children: "N/A" });
    if (D === "audio")
      return M ? /* @__PURE__ */ c(
        "audio",
        {
          controls: !0,
          src: M instanceof File ? URL.createObjectURL(M) : M,
          onClick: ($) => $.stopPropagation(),
          className: "shadow-sm rounded-full mt-1 w-full max-w-xs"
        },
        M instanceof File ? URL.createObjectURL(M) : M
      ) : /* @__PURE__ */ c("p", { className: "text-sm text-gray-400", children: "N/A" });
    if (D === "image") {
      const $ = W(M);
      return $ ? /* @__PURE__ */ c(
        "button",
        {
          type: "button",
          onClick: () => P($, S || "Image"),
          className: "mt-1 w-16 h-16 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700",
          children: /* @__PURE__ */ c(
            "img",
            {
              src: $,
              alt: S || "image",
              className: "w-full h-full object-cover"
            }
          )
        }
      ) : /* @__PURE__ */ c("p", { className: "text-sm text-gray-400", children: "N/A" });
    }
    return D === "multiImage" ? Array.isArray(M) && M.length > 0 ? /* @__PURE__ */ c(
      "div",
      {
        className: `mt-1 grid grid-cols-3 sm:grid-cols-4 gap-2 ${l.mediaGridClass || ""}`,
        children: M.map(($, de) => {
          const se = W($);
          return se ? /* @__PURE__ */ c(
            "button",
            {
              type: "button",
              onClick: () => P(se, `Gallery ${de + 1}`),
              className: "w-full h-16 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-colors",
              children: /* @__PURE__ */ c(
                "img",
                {
                  src: se,
                  alt: `gallery-${de + 1}`,
                  className: "w-full h-full object-cover"
                }
              )
            },
            `${se}-${de}`
          ) : null;
        })
      }
    ) : /* @__PURE__ */ c("p", { className: "text-sm text-gray-400", children: "N/A" }) : /* @__PURE__ */ c("p", { className: `${j} ${l.valueClass || ""}`, children: D === "date" ? /* @__PURE__ */ c("span", { children: Ta(M, m.format || "DD MMM YYYY") }) : /* @__PURE__ */ c("span", { children: M || "N/A" }) });
  };
  return n === "card" ? /* @__PURE__ */ L(Ve, { children: [
    /* @__PURE__ */ L(
      "div",
      {
        className: te(
          J.details.row,
          m.blockClass || "col-span-6",
          "group bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 p-4 flex flex-col gap-2.5",
          l.rowClass || ""
        ),
        children: [
          R && /* @__PURE__ */ c(
            "div",
            {
              className: `w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 [&>svg]:w-4 [&>svg]:h-4 ${l.iconClass || ""}`,
              children: R
            }
          ),
          /* @__PURE__ */ c(
            "p",
            {
              className: `text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 leading-none ${l.labelClass || ""}`,
              children: S
            }
          ),
          /* @__PURE__ */ c("div", { className: "mt-auto", children: ae(
            "text-sm font-semibold text-gray-800 dark:text-gray-100 break-words leading-snug"
          ) })
        ]
      }
    ),
    b && i && /* @__PURE__ */ c(
      tr,
      {
        src: i.src,
        alt: i.alt,
        isOpen: b,
        setIsOpen: o
      }
    )
  ] }) : n === "split" ? /* @__PURE__ */ L(Ve, { children: [
    /* @__PURE__ */ L(
      "div",
      {
        className: te(
          J.details.row,
          "flex items-stretch min-h-[52px]",
          l.rowClass || "",
          m.blockClass || ""
        ),
        children: [
          /* @__PURE__ */ L("div", { className: "w-[42%] flex-shrink-0 flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-gray-800/80 border-r border-gray-200 dark:border-gray-700", children: [
            R && /* @__PURE__ */ c(
              "span",
              {
                className: `text-primary/60 dark:text-primary/50 flex-shrink-0 [&>svg]:w-3.5 [&>svg]:h-3.5 ${l.iconClass || ""}`,
                children: R
              }
            ),
            /* @__PURE__ */ c(
              "p",
              {
                className: `text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 leading-tight ${l.labelClass || ""}`,
                children: S
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "flex-1 flex items-center px-4 py-3 bg-white dark:bg-gray-900", children: ae(
            "text-sm text-gray-800 dark:text-gray-100 break-words"
          ) })
        ]
      }
    ),
    b && i && /* @__PURE__ */ c(
      tr,
      {
        src: i.src,
        alt: i.alt,
        isOpen: b,
        setIsOpen: o
      }
    )
  ] }) : /* @__PURE__ */ L(Ve, { children: [
    /* @__PURE__ */ L(
      "div",
      {
        className: te(
          J.details.row,
          "col-span-12 flex items-center space-x-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-900",
          l.rowClass || "",
          m.blockClass || ""
        ),
        children: [
          R && /* @__PURE__ */ c("div", { className: `flex-shrink-0 ${l.iconClass || ""}`, children: R }),
          /* @__PURE__ */ L("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ c(
              "p",
              {
                className: `text-sm font-medium text-gray-500 dark:text-gray-400 ${l.labelClass || ""}`,
                children: S
              }
            ),
            ae(
              "mt-1 text-sm text-gray-900 dark:text-white break-words"
            )
          ] })
        ]
      }
    ),
    b && i && /* @__PURE__ */ c(
      tr,
      {
        src: i.src,
        alt: i.alt,
        isOpen: b,
        setIsOpen: o
      }
    )
  ] });
}, Ds = ({
  value: m = !0,
  onChange: d,
  text: n,
  options: l = [],
  label: i,
  required: e,
  name: b = "",
  disabled: o = !1,
  parentClass: R = "",
  errorMessage: S = ""
}) => {
  const M = l.length > 0 ? l : [
    { label: "Active", value: !0 },
    { label: "Inactive", value: !1 }
  ];
  return /* @__PURE__ */ c(Ve, { children: /* @__PURE__ */ L(
    "div",
    {
      className: te(
        J.field.wrapper,
        R || "col-span-12"
      ),
      children: [
        /* @__PURE__ */ c(Ft, { label: i, required: e }),
        /* @__PURE__ */ L(
          "div",
          {
            className: `flex items-center justify-between h-10 gap-4 bg-gray-100 dark:bg-gray-700 px-3 rounded-md border border-gray-100 dark:border-gray-600
          ${S ? "border-red-500" : ""}`,
            children: [
              n && /* @__PURE__ */ c("p", { className: "text-xs text-gray-600 dark:text-gray-400 flex-shrink overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px]", children: n }),
              /* @__PURE__ */ c("div", { className: "flex items-center gap-6", children: M.map((D, E) => /* @__PURE__ */ L(
                "label",
                {
                  className: "flex items-center gap-2 cursor-pointer select-none",
                  children: [
                    /* @__PURE__ */ c(
                      "input",
                      {
                        type: "radio",
                        name: "switch-field",
                        required: e && E === 0,
                        value: String(D.value),
                        disabled: o,
                        id: `field-${b}`,
                        checked: m === D.value,
                        onChange: () => d == null ? void 0 : d(D.value),
                        className: te(
                          J.field.input,
                          "w-4 h-4 border-gray-300 cursor-pointer"
                        )
                      }
                    ),
                    /* @__PURE__ */ c("span", { className: "text-sm text-gray-700 dark:text-white", children: D.label })
                  ]
                },
                E
              )) })
            ]
          }
        ),
        S && /* @__PURE__ */ c(
          "span",
          {
            className: te(
              J.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: S
          }
        )
      ]
    },
    b
  ) });
}, bo = Tt, Bs = ({
  label: m = "",
  value: d = null,
  onChange: n,
  required: l = !1,
  accept: i = "video/*",
  id: e,
  dragDrop: b = !1,
  name: o = "",
  parentClass: R = "",
  maxSize: S = 0,
  errorMessage: M = ""
}) => {
  const { enqueueSnackbar: D } = Tr(), [E, z] = pe(
    null
  ), [W, P] = pe(!1), ae = kt(null), U = S * 1024 * 1024;
  et(() => {
    if (!d) {
      j(), z(null);
      return;
    }
    if (d instanceof File) {
      const K = URL.createObjectURL(d);
      return z({ file: d, preview: K }), () => {
        URL.revokeObjectURL(K);
      };
    } else typeof d == "string" ? z({ preview: d }) : d != null && d.preview && z(d);
  }, [d]);
  const j = () => {
    E != null && E.preview && E.preview.startsWith("blob:") && URL.revokeObjectURL(E.preview);
  }, $ = (K) => {
    if (!K || K.length === 0) return;
    const ue = K[0];
    if (U && ue.size > U) {
      D(
        `File is too large. Maximum allowed size is ${S} MB`,
        {
          variant: "warning"
        }
      );
      return;
    }
    const _e = URL.createObjectURL(ue);
    j(), z({ file: ue, preview: _e }), n == null || n(ue);
  }, de = (K) => {
    K && K.stopPropagation(), j(), z(null), n == null || n(null), ae.current && (ae.current.value = "");
  }, se = (K) => {
    b && (K.preventDefault(), P(!0));
  }, ie = (K) => {
    b && (K.preventDefault(), P(!1));
  }, ke = (K) => {
    var ue, _e, Oe, Fe;
    b && (K.preventDefault(), P(!1), (Fe = (Oe = (_e = (ue = K.dataTransfer) == null ? void 0 : ue.files) == null ? void 0 : _e[0]) == null ? void 0 : Oe.type) != null && Fe.includes("video/") && $(K.dataTransfer.files));
  }, le = () => {
    var K;
    (K = ae.current) == null || K.click();
  };
  return /* @__PURE__ */ L(
    "div",
    {
      className: te(
        J.mediaPicker.video,
        J.field.wrapper,
        R || "col-span-12"
      ),
      children: [
        /* @__PURE__ */ c(Ft, { label: m, required: l }),
        /* @__PURE__ */ L(
          "div",
          {
            className: te(
              J.mediaPicker.dropzone,
              "relative rounded-lg p-2 transition-all",
              W ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800",
              M ? "border-red-500" : ""
            ),
            onDragOver: se,
            onDragLeave: ie,
            onDrop: ke,
            id: `field-${o}`,
            children: [
              /* @__PURE__ */ c(
                "input",
                {
                  ref: ae,
                  id: e,
                  type: "file",
                  accept: i,
                  onChange: (K) => $(K.target.files),
                  required: l && !E,
                  className: "absolute opacity-0 pointer-events-none h-[10px]"
                }
              ),
              /* @__PURE__ */ c(
                "div",
                {
                  className: `flex items-center space-x-4 transition-all ${W ? "opacity-50" : ""}`,
                  children: E ? /* @__PURE__ */ L("div", { className: "flex items-center space-x-4", children: [
                    /* @__PURE__ */ L("div", { className: "relative", children: [
                      !l && /* @__PURE__ */ c(
                        "button",
                        {
                          type: "button",
                          onClick: de,
                          className: "absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow hover:bg-red-600 z-10",
                          children: /* @__PURE__ */ c(Ht, { icon: "mdi:close", className: "w-3 h-3" })
                        }
                      ),
                      /* @__PURE__ */ c(
                        "video",
                        {
                          src: E.preview,
                          controls: !0,
                          controlsList: "nodownload",
                          className: "w-[260px] h-[150px] rounded-md object-cover"
                        },
                        E.preview
                      )
                    ] }),
                    /* @__PURE__ */ c(bo, { type: "button", onClick: le, children: "Change Video File" })
                  ] }) : /* @__PURE__ */ L("div", { className: "flex items-center justify-center space-x-4", children: [
                    /* @__PURE__ */ c("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ c(Ht, { icon: "mdi:video", className: "text-gray-400 w-10 h-10" }) }),
                    /* @__PURE__ */ L("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ c(
                        bo,
                        {
                          type: "button",
                          onClick: le,
                          variant: "outlined",
                          children: "Choose Video File"
                        }
                      ),
                      b && /* @__PURE__ */ c("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop your video here" })
                    ] })
                  ] })
                }
              ),
              b && W && !E && /* @__PURE__ */ c("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-lg", children: /* @__PURE__ */ c("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg", children: "Drop video here" }) })
            ]
          }
        ),
        M && /* @__PURE__ */ c(
          "span",
          {
            className: te(
              J.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: M
          }
        )
      ]
    },
    o
  );
}, yo = Tt, Po = (m) => {
  var n;
  const d = m.split(".");
  return d.length > 1 && ((n = d.pop()) == null ? void 0 : n.toLowerCase()) || "";
}, zs = (m) => {
  const d = Po(m);
  return ["pdf"].includes(d) ? "mdi:file-pdf-box" : ["doc", "docx"].includes(d) ? "mdi:file-word-box" : ["xls", "xlsx", "csv"].includes(d) ? "mdi:file-excel-box" : ["ppt", "pptx"].includes(d) ? "mdi:file-powerpoint-box" : ["zip", "rar", "7z", "tar", "gz"].includes(d) ? "mdi:folder-zip" : ["txt", "md", "json", "xml"].includes(d) ? "mdi:file-document-outline" : "mdi:file-outline";
}, js = (m) => m.split(",").map((d) => d.trim().toLowerCase()).filter(Boolean), Ts = (m, d) => {
  if (!d.trim()) return !0;
  const n = js(d), l = (m.type || "").toLowerCase(), i = `.${Po(m.name)}`;
  return n.some((e) => {
    if (e === "*/*") return !0;
    if (e.startsWith(".")) return i === e;
    if (e.endsWith("/*")) {
      const b = e.slice(0, -1);
      return l.startsWith(b);
    }
    return l === e;
  });
}, Hs = (m) => {
  var d;
  if (!m) return "";
  if (m instanceof File) return m.name;
  if (typeof m == "string") {
    const n = m.split("/");
    return n[n.length - 1] || "selected-file";
  }
  return typeof m == "object" && ((d = m.file) != null && d.name) ? m.file.name : "selected-file";
}, Fs = ({
  label: m = "",
  value: d = null,
  onChange: n,
  required: l = !1,
  accept: i = "*/*",
  id: e,
  dragDrop: b = !1,
  name: o = "",
  parentClass: R = "",
  maxSize: S = 0,
  errorMessage: M = ""
}) => {
  const { enqueueSnackbar: D } = Tr(), [E, z] = pe(d), [W, P] = pe(!1), ae = kt(null), U = S * 1024 * 1024;
  et(() => {
    z(d);
  }, [d]);
  const j = (K) => {
    if (!K || K.length === 0) return;
    const ue = K[0];
    if (!Ts(ue, i)) {
      D(`Only ${i} files are allowed`, {
        variant: "warning"
      });
      return;
    }
    if (U && ue.size > U) {
      D(
        `File is too large. Maximum allowed size is ${S} MB`,
        {
          variant: "warning"
        }
      );
      return;
    }
    z(ue), n == null || n(ue);
  }, $ = (K) => {
    K && K.stopPropagation(), z(null), n == null || n(null), ae.current && (ae.current.value = "");
  }, de = (K) => {
    b && (K.preventDefault(), P(!0));
  }, se = (K) => {
    b && (K.preventDefault(), P(!1));
  }, ie = (K) => {
    b && (K.preventDefault(), P(!1), j(K.dataTransfer.files));
  }, ke = () => {
    var K;
    (K = ae.current) == null || K.click();
  }, le = Hs(E);
  return /* @__PURE__ */ L(
    "div",
    {
      className: te(
        J.mediaPicker.audio,
        J.field.wrapper,
        R || "col-span-12"
      ),
      children: [
        /* @__PURE__ */ c(Ft, { label: m, required: l }),
        /* @__PURE__ */ L(
          "div",
          {
            className: te(
              J.mediaPicker.dropzone,
              "relative rounded-lg p-2 transition-all",
              W ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800",
              M ? "border-red-500" : ""
            ),
            onDragOver: de,
            onDragLeave: se,
            onDrop: ie,
            id: `field-${o}`,
            children: [
              /* @__PURE__ */ c(
                "input",
                {
                  ref: ae,
                  id: e,
                  type: "file",
                  accept: i,
                  onChange: (K) => j(K.target.files),
                  required: l && !E,
                  className: "absolute opacity-0 pointer-events-none h-[10px]"
                }
              ),
              /* @__PURE__ */ c(
                "div",
                {
                  className: `flex items-center space-x-4 transition-all ${W ? "opacity-50" : ""}`,
                  children: E ? /* @__PURE__ */ L("div", { className: "flex items-center space-x-4", children: [
                    /* @__PURE__ */ L("div", { className: "relative rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: [
                      !l && /* @__PURE__ */ c(
                        "button",
                        {
                          type: "button",
                          onClick: $,
                          className: "absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow hover:bg-red-600 z-10",
                          "aria-label": "Remove file",
                          children: /* @__PURE__ */ c(Ht, { icon: "mdi:close", className: "w-3 h-3" })
                        }
                      ),
                      /* @__PURE__ */ c(
                        Ht,
                        {
                          icon: zs(le),
                          className: "text-gray-500 w-10 h-10"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ L("div", { className: "space-y-1 max-w-[280px]", children: [
                      /* @__PURE__ */ c(
                        "p",
                        {
                          className: "text-sm text-gray-700 dark:text-gray-300 truncate",
                          title: le,
                          children: le
                        }
                      ),
                      /* @__PURE__ */ c(yo, { type: "button", onClick: ke, children: "Change File" })
                    ] })
                  ] }) : /* @__PURE__ */ L("div", { className: "flex items-center justify-center space-x-4", children: [
                    /* @__PURE__ */ c("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ c(
                      Ht,
                      {
                        icon: "mdi:file-upload-outline",
                        className: "text-gray-400 w-10 h-10"
                      }
                    ) }),
                    /* @__PURE__ */ L("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ c(
                        yo,
                        {
                          type: "button",
                          onClick: ke,
                          variant: "outlined",
                          children: "Choose File"
                        }
                      ),
                      b && /* @__PURE__ */ c("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop your file here" })
                    ] })
                  ] })
                }
              ),
              b && W && !E && /* @__PURE__ */ c("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-lg", children: /* @__PURE__ */ c("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg", children: "Drop file here" }) })
            ]
          }
        ),
        M && /* @__PURE__ */ c(
          "span",
          {
            className: te(
              J.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: M
          }
        )
      ]
    },
    o
  );
}, Uo = ({
  field: m,
  formData: d,
  handleChange: n,
  errorMessage: l
}) => {
  const {
    key: i,
    label: e,
    type: b,
    options: o,
    placeholder: R,
    rows: S,
    inputClass: M,
    search: D,
    accept: E,
    text: z,
    required: W = !1,
    minLength: P,
    dragDrop: ae,
    parentClass: U,
    countriesList: j,
    defaultCountry: $,
    multiple: de,
    dropdownMaxHeight: se,
    editorKey: ie,
    fontFamily: ke,
    disabled: le,
    negativeNumberAllow: K,
    defaultValue: ue,
    renderCondition: _e,
    pattern: Oe,
    renderType: Fe,
    cropImage: Mt,
    aspectRatio: at,
    dependencyKey: nt,
    mask: xe,
    maskApplyOnValue: Pe,
    maxSize: ze,
    editorVariant: ne
  } = m;
  let Ce = d == null ? void 0 : d[i];
  Ce == null && (Ce = "");
  const Qe = R || (b === "select" ? `Select ${e}` : `Enter ${e}`), We = "w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm focus:outline-none focus:ring-1 focus:ring-blue-200 bg-white text-black dark:bg-gray-700 dark:text-white";
  if (_e && typeof _e == "function" && !_e(d))
    return null;
  if (Fe && Fe == "details")
    switch (b) {
      case "group":
        return /* @__PURE__ */ c(jo, { col: m, data: d });
      case "cardGroup":
        return /* @__PURE__ */ c(To, { col: m, data: d });
      default:
        return /* @__PURE__ */ c(Fo, { col: m, data: d });
    }
  switch (b) {
    case "select":
      return /* @__PURE__ */ c(
        Vc,
        {
          options: o || [],
          value: Ce,
          formData: d,
          dependencyKey: nt,
          onChange: (Ie) => n(i, Ie),
          placeholder: Qe,
          className: M || "",
          search: D,
          required: W,
          defaultValue: ue,
          label: e || "",
          name: i,
          countriesList: j,
          disabled: le,
          parentClass: U || "",
          multiple: de,
          dropdownMaxHeight: se,
          errorMessage: l
        }
      );
    case "checkbox":
      return /* @__PURE__ */ c(Ve, { children: /* @__PURE__ */ c(
        Ns,
        {
          name: i,
          label: e || "",
          options: o || [],
          value: Ce,
          onChange: (Ie) => n(i, Ie),
          required: W,
          parentClass: U || "",
          className: M || "",
          multiSelect: de,
          disabled: le,
          errorMessage: l
        }
      ) });
    case "radio":
      return /* @__PURE__ */ c(
        Ds,
        {
          value: Ce,
          onChange: (Ie) => n(i, Ie),
          text: z,
          options: o || [],
          label: e || "",
          required: W,
          name: i,
          disabled: le,
          parentClass: U || "",
          errorMessage: l
        }
      );
    case "switch":
      return /* @__PURE__ */ c(
        ko,
        {
          value: !!Ce,
          onChange: (Ie) => n(i, Ie),
          label: e || "",
          required: W,
          name: i,
          disabled: le,
          className: "",
          parentClass: U || "",
          errorMessage: l
        }
      );
    case "phone":
      return /* @__PURE__ */ c(
        Wc,
        {
          value: Ce,
          onChange: (Ie) => n(i, Ie),
          countriesList: j,
          defaultCountry: $,
          required: W,
          placeholder: Qe,
          search: D,
          label: e || "",
          name: i,
          disabled: le,
          errorMessage: l,
          parentClass: U || ""
        }
      );
    case "textarea":
      return /* @__PURE__ */ c(
        Eo,
        {
          value: Ce,
          onChange: (Ie) => n(i, Ie.target.value),
          placeholder: Qe,
          rows: S || 3,
          className: `${We} ${M || ""}`,
          required: W,
          name: i,
          label: e || "",
          disabled: le,
          parentClass: U || "",
          errorMessage: l
        }
      );
    case "image":
    case "multiImage":
      return de || b === "multiImage" ? /* @__PURE__ */ c(
        Os,
        {
          value: Array.isArray(Ce) ? Ce : [],
          onChange: (Ie) => n(i, Ie),
          required: W,
          accept: E || "image/*",
          aspect: at,
          id: `file-${i}`,
          dragDrop: ae,
          cropImage: Mt,
          label: e || "",
          name: i,
          parentClass: U || "",
          maxImages: m.maxImages,
          errorMessage: l
        }
      ) : /* @__PURE__ */ c(
        Cs,
        {
          value: Ce,
          onChange: (Ie) => n(i, Ie),
          required: W,
          accept: E || "image/*",
          aspect: at,
          id: `file-${i}`,
          dragDrop: ae,
          cropImage: Mt,
          label: e || "",
          name: i,
          parentClass: U || "",
          errorMessage: l
        }
      );
    case "audio":
      return /* @__PURE__ */ c(
        Rs,
        {
          value: Ce,
          onChange: (Ie) => n(i, Ie),
          required: W,
          accept: E || "audio/*",
          id: `file-${i}`,
          dragDrop: ae,
          label: e || "",
          name: i,
          parentClass: U || "",
          maxSize: ze,
          errorMessage: l
        }
      );
    case "video":
      return /* @__PURE__ */ c(
        Bs,
        {
          value: Ce,
          onChange: (Ie) => n(i, Ie),
          required: W,
          accept: E || "video/*",
          id: `file-${i}`,
          dragDrop: ae,
          label: e || "",
          name: i,
          maxSize: ze,
          parentClass: U || "",
          errorMessage: l
        }
      );
    case "file":
      return /* @__PURE__ */ c(
        Fs,
        {
          value: Ce,
          onChange: (Ie) => n(i, Ie),
          required: W,
          accept: E || "*/*",
          id: `file-${i}`,
          dragDrop: ae,
          label: e || "",
          name: i,
          maxSize: ze,
          parentClass: U || "",
          errorMessage: l
        }
      );
    case "tinyEditor":
      return /* @__PURE__ */ c(
        As,
        {
          value: Ce,
          name: i,
          onChange: (Ie) => n(i, Ie),
          required: W,
          placeholder: Qe,
          label: e || "",
          parentClass: U || "",
          fontFamily: ke,
          editorKey: ie || "",
          disabled: le,
          errorMessage: l
        }
      );
    case "freeEditor":
      return /* @__PURE__ */ c(
        Ms,
        {
          value: Ce,
          name: i,
          onChange: (Ie) => n(i, Ie),
          required: W,
          placeholder: Qe,
          label: e || "",
          parentClass: U || "",
          disabled: le,
          height: m.height || 300,
          errorMessage: l
        }
      );
    default:
      return /* @__PURE__ */ c(
        Bo,
        {
          field: m,
          type: b || "text",
          defaultValue: ue,
          value: Ce,
          onChange: (Ie) => n(i, Ie),
          placeholder: Qe,
          className: `${We} ${M || ""}`,
          required: W,
          name: i,
          minLength: P,
          label: e || "",
          negativeNumberAllow: K,
          parentClass: U || "",
          disabled: le,
          pattern: Oe,
          mask: xe,
          errorMessage: l,
          maskApplyOnValue: Pe
        }
      );
  }
}, Ps = ({
  isOpen: m,
  onClose: d,
  config: n,
  onApply: l
}) => {
  var M;
  const [i, e] = pe({}), b = (D, E) => {
    e((z) => ({ ...z, [D]: E }));
  }, o = () => {
    l(i), d();
  }, R = () => {
    e({}), l({}), d();
  }, S = n == null ? void 0 : n.component;
  return /* @__PURE__ */ L(Ve, { children: [
    /* @__PURE__ */ c(
      "div",
      {
        className: te(
          J.filterDrawer.overlay,
          "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300",
          m ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        ),
        style: {
          opacity: m ? 1 : 0
        },
        onClick: d
      }
    ),
    /* @__PURE__ */ L(
      "div",
      {
        style: {
          opacity: m ? 1 : 0
        },
        className: te(
          J.filterDrawer.panel,
          "fixed top-0 right-0 h-full w-[28rem] bg-white dark:bg-gray-900 shadow-2xl z-50 flex flex-col border-l border-gray-200 dark:border-gray-700 transform transition-all duration-300 ease-in-out",
          m ? "translate-x-0" : "translate-x-full"
        ),
        children: [
          /* @__PURE__ */ L(
            "div",
            {
              className: te(
                J.filterDrawer.header,
                "flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700"
              ),
              children: [
                /* @__PURE__ */ c("h2", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: "Filters" }),
                /* @__PURE__ */ c(
                  "button",
                  {
                    onClick: d,
                    className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition",
                    children: /* @__PURE__ */ c(pa, { className: "w-5 h-5 text-gray-500 dark:text-gray-400" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ c(
            "div",
            {
              className: te(
                J.filterDrawer.body,
                "flex-1 overflow-y-auto px-4 py-3"
              ),
              children: S ? /* @__PURE__ */ c(S, { filters: i, onFilterChange: b }) : /* @__PURE__ */ c("div", { className: "space-y-4", children: (M = n == null ? void 0 : n.fields) == null ? void 0 : M.map((D) => /* @__PURE__ */ c(
                Uo,
                {
                  field: D,
                  formData: i,
                  handleChange: b
                },
                D.key
              )) })
            }
          ),
          /* @__PURE__ */ L(
            "div",
            {
              className: te(
                J.filterDrawer.footer,
                "flex gap-2 px-4 py-3 border-t border-gray-200 dark:border-gray-700"
              ),
              children: [
                /* @__PURE__ */ c(
                  Tt,
                  {
                    onClick: o,
                    variant: "contained",
                    color: "primary",
                    fullWidth: !0,
                    children: "Apply Filters"
                  }
                ),
                /* @__PURE__ */ c(
                  Tt,
                  {
                    onClick: R,
                    variant: "contained",
                    className: "min-w-[150px]",
                    children: "Reset"
                  }
                )
              ]
            }
          )
        ]
      }
    )
  ] });
}, Us = ({ rows: m = 5, columns: d = 5 }) => /* @__PURE__ */ L(Ve, { children: [
  /* @__PURE__ */ c("div", { className: "w-full mb-6 inline-flex justify-end items-center", children: /* @__PURE__ */ c("div", { className: "h-8 w-80 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }),
  /* @__PURE__ */ c("div", { className: "overflow-hidden rounded-md border border-gray-200 dark:border-gray-800", children: /* @__PURE__ */ L(
    "table",
    {
      className: te(
        J.tableSkeleton.root,
        J.tableSkeleton.table,
        "w-full border-collapse"
      ),
      children: [
        /* @__PURE__ */ c("thead", { children: /* @__PURE__ */ c("tr", { className: "bg-gray-50 dark:bg-gray-900", children: Array.from({ length: d }).map((n, l) => /* @__PURE__ */ c("th", { className: "px-4 py-3", children: /* @__PURE__ */ c("div", { className: "h-6 w-24 bg-gray-300 dark:bg-gray-700 rounded animate-pulse  inline-flex justify-center items-center" }) }, l)) }) }),
        /* @__PURE__ */ c("tbody", { children: Array.from({ length: m }).map((n, l) => /* @__PURE__ */ c(
          "tr",
          {
            className: "border-t border-gray-200 dark:border-gray-800",
            children: Array.from({ length: d }).map((i, e) => /* @__PURE__ */ c("td", { className: "px-4 py-6", children: /* @__PURE__ */ c("div", { className: "h-6 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }, e))
          },
          l
        )) })
      ]
    }
  ) })
] }), Qs = ({
  options: m = [],
  value: d = "",
  onChange: n,
  clearLabel: l = ""
}) => {
  const [i, e] = pe(!1), b = kt(null), o = !!d;
  et(() => {
    const S = (M) => {
      b.current && !b.current.contains(M.target) && e(!1);
    };
    return document.addEventListener("click", S), () => document.removeEventListener("click", S);
  }, []);
  const R = (S) => {
    const M = m.find((D) => D.value === S);
    n(S, M || null), e(!1);
  };
  return m != null && m.length ? /* @__PURE__ */ L(
    "div",
    {
      className: te(J.sortDropdown.root, "relative"),
      ref: b,
      children: [
        /* @__PURE__ */ L(
          "button",
          {
            type: "button",
            onClick: () => e((S) => !S),
            className: te(
              J.sortDropdown.trigger,
              "relative inline-flex items-center justify-center h-[36px] w-[36px] rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
            ),
            "aria-label": "Open sort options",
            children: [
              /* @__PURE__ */ c(Bc, { className: "w-4 h-4" }),
              o && /* @__PURE__ */ c("span", { className: "absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" })
            ]
          }
        ),
        i && /* @__PURE__ */ L(
          "div",
          {
            className: te(
              J.sortDropdown.menu,
              "absolute right-0 mt-2 z-20 min-w-[220px] max-h-[260px] overflow-auto rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg"
            ),
            children: [
              !!(l != null && l.trim()) && /* @__PURE__ */ c(
                "button",
                {
                  type: "button",
                  onClick: () => R(""),
                  className: te(
                    J.sortDropdown.item,
                    "w-full text-left px-3 py-2 text-sm transition hover:bg-gray-100 dark:hover:bg-gray-700",
                    d ? "text-gray-700 dark:text-gray-200" : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                  ),
                  children: l
                }
              ),
              m.map((S) => /* @__PURE__ */ c(
                "button",
                {
                  type: "button",
                  onClick: () => R(S.value),
                  className: te(
                    J.sortDropdown.item,
                    "w-full text-left px-3 py-2 text-sm transition hover:bg-gray-100 dark:hover:bg-gray-700",
                    d === S.value ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white" : "text-gray-700 dark:text-gray-200"
                  ),
                  children: S.label
                },
                S.value
              ))
            ]
          }
        )
      ]
    }
  ) : null;
}, ja = {
  enabled: !1,
  useServerSideSorting: !1,
  options: [],
  fields: [],
  defaultValue: "",
  autoGenerate: !0,
  clearLabel: "",
  onChange: null
}, Gs = (m) => m === !0 ? { ...ja, enabled: !0 } : !m || typeof m != "object" ? ja : {
  ...ja,
  ...m,
  enabled: m.enabled ?? !0,
  autoGenerate: m.autoGenerate ?? !0
}, Ys = (m = []) => m.filter((d) => {
  const n = ["menu_actions", "index", "audio", "avatar"];
  return d.type && n.includes(d.type) ? !1 : !!(d.sortKey || (d.type === "group" ? d.titleKey : d.key));
}), Ks = (m) => {
  if (m.sortType) return m.sortType;
  if (m.type === "date") return "date";
  if (m.type === "number") return "number";
  const d = String(
    m.sortKey || (m.type === "group" ? m.titleKey : m.key) || ""
  ).toLowerCase();
  return ["phone", "mobile", "contact", "tel", "whatsapp"].some(
    (l) => d.includes(l)
  ) ? "phone" : Array.isArray(m.chipOptions) && m.chipOptions.length > 0 && m.chipOptions.every(
    (i) => typeof i.value == "boolean"
  ) ? "boolean" : "string";
}, wo = (m = []) => m.flatMap((d) => {
  const n = d.sortKey || (d.type === "group" ? d.titleKey : d.key), l = d.sortLabel || d.title || n, i = Ks(d);
  return n ? i === "number" ? [
    {
      value: `${n}_asc`,
      label: `${l} (Low-High)`,
      key: n,
      order: "asc",
      type: i
    },
    {
      value: `${n}_desc`,
      label: `${l} (High-Low)`,
      key: n,
      order: "desc",
      type: i
    }
  ] : i === "phone" ? [
    {
      value: `${n}_asc`,
      label: `${l} (0-9)`,
      key: n,
      order: "asc",
      type: i
    },
    {
      value: `${n}_desc`,
      label: `${l} (9-0)`,
      key: n,
      order: "desc",
      type: i
    }
  ] : i === "date" ? [
    {
      value: `${n}_desc`,
      label: `${l} (Newest First)`,
      key: n,
      order: "desc",
      type: i
    },
    {
      value: `${n}_asc`,
      label: `${l} (Oldest First)`,
      key: n,
      order: "asc",
      type: i
    }
  ] : i === "boolean" ? [
    {
      value: `${n}_desc`,
      label: `${l} (True First)`,
      key: n,
      order: "desc",
      type: i
    },
    {
      value: `${n}_asc`,
      label: `${l} (False First)`,
      key: n,
      order: "asc",
      type: i
    }
  ] : [
    {
      value: `${n}_asc`,
      label: `${l} (A-Z)`,
      key: n,
      order: "asc",
      type: i
    },
    {
      value: `${n}_desc`,
      label: `${l} (Z-A)`,
      key: n,
      order: "desc",
      type: i
    }
  ] : [];
}), Vs = (m, d = []) => {
  if (Array.isArray(m.options) && m.options.length > 0)
    return m.options.map((i) => ({
      ...i,
      type: i.type || "string",
      order: i.order === "desc" ? "desc" : "asc"
    }));
  const l = Array.isArray(m.fields) ? m.fields : [];
  if (l.length > 0) {
    const i = l.map((e) => {
      const b = typeof e == "string" ? e : e.key, o = d.find(
        (R) => R.key === b || R.sortKey === b || R.type === "group" && R.titleKey === b
      );
      return o ? {
        ...o,
        sortKey: typeof e == "object" && e.key ? e.key : o.sortKey,
        sortType: typeof e == "object" && e.type ? e.type : o.sortType,
        sortLabel: typeof e == "object" && e.label ? e.label : o.sortLabel
      } : null;
    }).filter((e) => e !== null);
    return wo(i);
  }
  return m.autoGenerate ? wo(d) : [];
}, Ws = (m = [], d = "", n, l = []) => {
  if (!(n != null && n.enabled) || !d || n != null && n.useServerSideSorting)
    return m;
  const i = l == null ? void 0 : l.find(
    (S) => S.value === d
  );
  if (!(i != null && i.key))
    return m;
  const e = i.order === "desc" ? "desc" : "asc", b = i.key, o = i.type || "string", R = (S) => String(S ?? "").replace(/[^\d]/g, "").trim();
  return [...m].sort((S, M) => {
    const D = S == null ? void 0 : S[b], E = M == null ? void 0 : M[b];
    if (D == null && E == null) return 0;
    if (D == null) return e === "asc" ? 1 : -1;
    if (E == null) return e === "asc" ? -1 : 1;
    let z = 0;
    return o === "number" ? z = Number(D) - Number(E) : o === "phone" ? z = R(D).localeCompare(
      R(E),
      void 0,
      {
        numeric: !0
      }
    ) : o === "date" ? z = new Date(D).getTime() - new Date(E).getTime() : o === "boolean" ? z = +!!D - +!!E : z = String(D).localeCompare(String(E)), e === "asc" ? z : -z;
  });
}, qs = ({
  config: m,
  setShowAdd: d,
  title: n,
  buttonText: l,
  description: i,
  showAddButton: e
}) => {
  var $r;
  const {
    data: b = [],
    table_head: o = [],
    loading: R = !1,
    search: S = {
      enabled: !1,
      placeholder: "Search...",
      useServerSideSearch: !1
    },
    filter: M = {
      enabled: !1,
      useServerSideFilters: !1
    },
    sort: D = { enabled: !1 },
    pagination: E = {
      enabled: !1,
      rows_per_page: 10,
      useServerSidePagination: !1
    },
    exportCSV: z = {
      enabled: !1,
      fileName: "",
      fields: []
    },
    customButtons: W = [],
    customMenuItems: P = [],
    emptyMessage: ae = "No data available",
    onMenuAction: U,
    setServerSidePaginationData: j = () => {
    },
    onFilterApply: $,
    filterConfig: de = null,
    rowClick: se = null
  } = m, [ie, ke] = pe(""), [le, K] = pe(null), [ue, _e] = pe([]), [Oe, Fe] = pe({ top: 0, left: 0 }), [Mt, at] = pe(!1), [nt, xe] = pe({}), [Pe, ze] = pe(!1), ne = Ar(() => Gs(D), [D]), Ce = Ar(
    () => Ys(o),
    [o]
  ), Qe = Ar(() => Vs(ne, Ce), [ne, Ce]), [We, Ie] = pe(
    (ne == null ? void 0 : ne.defaultValue) || ""
  ), [Pt, ge] = pe(null), [tt, we] = pe(!1), je = Ar(() => !S.enabled || !ie.trim() || S.useServerSideSearch ? b : Kc(b, ie, S.searchKeys || []), [b, ie, S]), Ge = Ar(() => Ws(
    je,
    We,
    ne,
    Qe
  ), [je, We, ne, Qe]), [Te, He] = pe(1), [qe, ir] = pe((E == null ? void 0 : E.rows_per_page) || 50), [rr, Ir] = pe(je.length || 0), ar = E != null && E.useServerSidePagination ? E.total_pages : Math.ceil(je.length / qe), Xt = Ar(() => {
    if (E.useServerSidePagination) return Ge;
    const C = (Te - 1) * qe;
    return Ge.slice(C, C + qe);
  }, [Ge, Te, qe, E.useServerSidePagination]), lr = kt(null), cr = kt(null), gr = kt(null), sr = kt({}), dr = kt(null), vr = typeof document < "u" ? (($r = gr.current) == null ? void 0 : $r.closest(".racm-root")) || document.body : null, br = (C) => {
    ke(C), He(1), S.useServerSideSearch && (dr.current && clearTimeout(dr.current), dr.current = setTimeout(async () => {
      try {
        await j((X) => ({
          ...X,
          search: C,
          current_page: 1
        }));
      } catch (X) {
        console.error("Search error:", X);
      }
    }, 800));
  }, Mr = (C, X = null) => {
    Ie(C), He(1);
    const Ne = {
      value: C,
      option: X,
      key: (X == null ? void 0 : X.key) || "",
      order: (X == null ? void 0 : X.order) || "",
      type: (X == null ? void 0 : X.type) || ""
    };
    typeof (ne == null ? void 0 : ne.onChange) == "function" && ne.onChange(Ne);
  }, Nr = async (C, X, Ne) => {
    if (Ne.stopPropagation(), K(null), typeof (C == null ? void 0 : C.onClick) == "function") {
      await C.onClick(Ne, X);
      return;
    }
    U == null || U(C.type, X);
  }, Rr = (C, X, Ne) => {
    X.stopPropagation(), _e(Ne);
    const rt = X.currentTarget;
    sr.current[C] = rt;
    const ht = rt.getBoundingClientRect(), zt = 192, Ut = Ne.length * 40, Ot = window.innerWidth, Gt = window.innerHeight, Jt = Ot - ht.right < zt ? ht.left - zt + ht.width : ht.left, wr = Gt - ht.bottom < Ut && ht.top > Ut ? ht.top - Ut - 2 : ht.bottom + 2;
    Fe({
      top: Math.max(8, Math.min(wr, Gt - Ut - 8)),
      left: Math.max(8, Math.min(Jt, Ot - zt - 8))
    }), K(le === C ? null : C);
  }, mt = (C) => (Te - 1) * qe + C + 1, Wt = (C) => {
    let X = C;
    X && X.src instanceof File && (X = { ...X, src: URL.createObjectURL(X.src) }), ge(X), we(!0);
  }, De = (C) => {
    if (!C) return "";
    if (typeof C == "string")
      return C;
    if (C instanceof File)
      return URL.createObjectURL(C);
    if (typeof C == "object") {
      if (typeof C.preview == "string")
        return C.preview;
      if (typeof C.src == "string")
        return C.src;
      if (C.src instanceof File)
        return URL.createObjectURL(C.src);
      if (C.file instanceof File)
        return URL.createObjectURL(C.file);
    }
    return "";
  }, Ze = (C, X) => {
    const Ne = Array.isArray(C) ? C : [];
    if (Ne.length === 0)
      return /* @__PURE__ */ c("span", { className: X.className || "", children: "N/A" });
    const rt = X.maxPreview || 3, ht = Ne.slice(0, rt), zt = Ne.length - ht.length;
    return /* @__PURE__ */ L("div", { className: "flex items-center", children: [
      /* @__PURE__ */ c("div", { className: "flex -space-x-2", children: ht.map((Ut, Ot) => {
        const Gt = De(Ut);
        return Gt ? /* @__PURE__ */ c(
          "button",
          {
            type: "button",
            onClick: (yr) => {
              yr.stopPropagation(), Wt({ src: Gt, alt: `Gallery ${Ot + 1}` });
            },
            className: "w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden",
            children: /* @__PURE__ */ c(
              "img",
              {
                src: Gt,
                alt: `gallery-${Ot + 1}`,
                className: "w-full h-full object-cover"
              }
            )
          },
          `${Gt}-${Ot}`
        ) : null;
      }) }),
      zt > 0 && /* @__PURE__ */ L("span", { className: "ml-2 text-xs font-medium text-gray-600 dark:text-gray-300", children: [
        "+",
        zt
      ] })
    ] });
  }, wt = (C, X) => {
    const Ne = De(C);
    return Ne ? /* @__PURE__ */ c(
      "button",
      {
        type: "button",
        onClick: (rt) => {
          rt.stopPropagation(), Wt({ src: Ne, alt: X.title || "Image" });
        },
        className: "w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 overflow-hidden",
        children: /* @__PURE__ */ c(
          "img",
          {
            src: Ne,
            alt: X.title || "image",
            className: "w-full h-full object-cover"
          }
        )
      }
    ) : /* @__PURE__ */ c("span", { className: X.className || "", children: "N/A" });
  }, qt = (C, X, Ne, rt = null, ht = null) => /* @__PURE__ */ c(Ve, { children: C ? /* @__PURE__ */ c(
    "img",
    {
      src: C instanceof File ? URL.createObjectURL(C) : C,
      alt: X || "Avatar",
      onClick: (zt) => {
        zt.stopPropagation(), zt.preventDefault(), Wt({ src: C, alt: X });
      },
      className: `w-10 h-10 cursor-pointer shrink-0 rounded-full object-cover border border-gray-200 dark:border-gray-700 ${Ne || ""}`
    }
  ) : /* @__PURE__ */ c(Ve, { children: rt ? typeof rt == "function" ? rt(ht) : rt : /* @__PURE__ */ c(
    "div",
    {
      className: `w-10 h-10 flex items-center shrink-0 justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${Ne || ""}`,
      children: /* @__PURE__ */ c(qa, { className: "w-6 h-6 text-gray-400 dark:text-gray-400" })
    }
  ) }) }), Et = (C, X) => /* @__PURE__ */ c(Ve, { children: C ? /* @__PURE__ */ c(
    "audio",
    {
      controls: !0,
      src: C instanceof File ? URL.createObjectURL(C) : C,
      onClick: (Ne) => {
        Ne.stopPropagation();
      },
      className: `w-64 cursor-pointer ${X || ""}`
    },
    C instanceof File ? URL.createObjectURL(C) : C
  ) : /* @__PURE__ */ c(Ve, { children: /* @__PURE__ */ c(
    "div",
    {
      className: `w-12 h-12 flex items-center shrink-0 justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${X || ""}`,
      children: /* @__PURE__ */ c(Pc, { className: "w-6 h-6 text-gray-400 dark:text-gray-400" })
    }
  ) }) }), fa = (C, X) => /* @__PURE__ */ L("div", { className: `flex items-center space-x-4 ${X.className || ""}`, children: [
    X.imageKey ? qt(
      C[X.imageKey],
      C[X.titleKey],
      "group-avatar",
      X.fallback_icon,
      C
    ) : "",
    /* @__PURE__ */ L("div", { children: [
      /* @__PURE__ */ c("p", { className: "font-medium text-gray-900 dark:text-white group-title", children: C[X.titleKey] || "" }),
      /* @__PURE__ */ c("p", { className: "text-sm text-gray-500 dark:text-gray-400 group-sub-title", children: C[X.subtitleKey] || "" })
    ] })
  ] }), ga = (C, X) => {
    var zt;
    let Ne = String(C);
    const rt = X.variant || "contained";
    let ht = X.defaultColor;
    if (((zt = X == null ? void 0 : X.chipOptions) == null ? void 0 : zt.length) > 0) {
      const Ut = X == null ? void 0 : X.chipOptions.find((Ot) => Ot.value == C);
      Ut && (Ne = Ut.label, ht = Ut.color);
    }
    return /* @__PURE__ */ c(
      Ho,
      {
        label: Ne,
        variant: rt,
        color: ht,
        className: X.className || ""
      }
    );
  }, va = (C, X, Ne) => {
    const rt = X[C.key];
    return C.type === "menu_actions" ? /* @__PURE__ */ c("div", { className: `text-center ${C.className || ""}`, children: /* @__PURE__ */ c(
      "button",
      {
        ref: (ht) => {
          sr.current[X.id || X._id] = ht;
        },
        onClick: (ht) => Rr(X.id || X._id, ht, C.menuList),
        className: te(
          J.table.actionButton,
          "p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition text-gray-700 dark:text-gray-300"
        ),
        children: /* @__PURE__ */ c(ao, { className: "h-4 w-4" })
      }
    ) }) : C.type === "index" ? /* @__PURE__ */ c("span", { className: C.className || "", children: mt(Ne) }) : C.type === "group" ? fa(X, C) : C.type === "chip" ? /* @__PURE__ */ c(Ve, { children: ga(rt, C) }) : C.type === "date" ? /* @__PURE__ */ c("span", { className: C.className || "", children: Ta(rt, C.format || "DD MMM YYYY") }) : C.type === "avatar" ? /* @__PURE__ */ c(Ve, { children: /* @__PURE__ */ c("div", { className: "min-w-[40px]", children: qt(
      rt,
      C.alt,
      C.className,
      C.fallback_icon,
      X
    ) }) }) : C.type === "audio" ? /* @__PURE__ */ c(Ve, { children: Et(rt, C.className) }) : C.type === "image" ? /* @__PURE__ */ c(Ve, { children: wt(rt, C) }) : C.type === "multiImage" ? /* @__PURE__ */ c(Ve, { children: Ze(rt, C) }) : /* @__PURE__ */ c("span", { className: C.className || "", children: rt || "N/A" });
  }, ba = (C) => {
    if (typeof se == "function")
      return se(C);
    if (se)
      return U == null ? void 0 : U("view", C);
  }, ya = (C, X) => {
    if (C.onClickDetails)
      return U == null ? void 0 : U("view", X);
    if (typeof C.handleClick == "function")
      return C.handleClick(X);
  }, Hr = () => se || typeof se == "function", Lr = (C) => C.onClickDetails || typeof C.handleClick == "function", wa = () => {
    var yr;
    if (!(b != null && b.length) || !((yr = z == null ? void 0 : z.fields) != null && yr.length)) return;
    const C = z.fields.map((Jt) => Jt.label), X = Xt.map(
      (Jt) => z.fields.map((ea) => {
        const wr = Jt == null ? void 0 : Jt[ea.key];
        return `"${wr ?? ""}"`;
      })
    ), Ne = [
      C.join(","),
      ...X.map((Jt) => Jt.join(","))
    ].join(`
`), ht = `export-${Ta(/* @__PURE__ */ new Date(), "YYYY-MM-DD_HH-mm-ss")}.csv`, zt = z.fileName || ht, Ut = new Blob([Ne], { type: "text/csv;charset=utf-8;" }), Ot = document.createElement("a"), Gt = URL.createObjectURL(Ut);
    Ot.href = Gt, Ot.download = zt, document.body.appendChild(Ot), Ot.click(), document.body.removeChild(Ot), URL.revokeObjectURL(Gt);
  }, xa = async (C, X) => {
    typeof C.onClick == "function" && await C.onClick(X, {
      data: b,
      filteredData: je,
      sortedData: Ge,
      paginatedData: Xt,
      searchTerm: ie,
      appliedFilters: nt,
      currentPage: Te,
      pageSize: qe,
      totalRecords: rr
    });
  }, _a = async (C, X) => {
    X.stopPropagation(), ze(!1), typeof C.onClick == "function" && await C.onClick(X, {
      data: b,
      filteredData: je,
      sortedData: Ge,
      paginatedData: Xt,
      searchTerm: ie,
      appliedFilters: nt,
      currentPage: Te,
      pageSize: qe,
      totalRecords: rr
    });
  };
  return et(() => {
    const C = () => {
      le && K(null);
    };
    return window.addEventListener("scroll", C, !0), () => {
      window.removeEventListener("scroll", C, !0);
    };
  }, [le]), et(() => {
    const C = (X) => {
      lr.current && !lr.current.contains(X.target) && K(null), cr.current && !cr.current.contains(X.target) && ze(!1);
    };
    return document.addEventListener("click", C), () => document.removeEventListener("click", C);
  }, []), et(() => {
    E != null && E.rows_per_page && (E != null && E.useServerSidePagination) && ir((E == null ? void 0 : E.rows_per_page) || 50), E.current_page && He(E.current_page);
  }, [
    E.rows_per_page,
    E == null ? void 0 : E.useServerSidePagination,
    E.current_page
  ]), et(() => {
    Ir(
      E != null && E.useServerSidePagination ? E.total_records : Ge.length
    ), Ge.length <= qe * (Te - 1) && !(E != null && E.useServerSidePagination) && He((C) => C - 1 || 1);
  }, [
    Ge.length,
    E.total_records,
    E == null ? void 0 : E.useServerSidePagination
  ]), et(() => {
    if (!(ne != null && ne.enabled)) {
      Ie("");
      return;
    }
    if (Qe.some(
      (X) => X.value === ne.defaultValue
    )) {
      Ie(ne.defaultValue);
      return;
    }
    Ie("");
  }, [ne, Qe]), et(() => {
    if (!(ne != null && ne.enabled) || !(ne != null && ne.useServerSideSorting))
      return;
    const C = Qe == null ? void 0 : Qe.find(
      (X) => X.value === We
    );
    j((X) => ({
      ...X,
      current_page: 1,
      sort_by: (C == null ? void 0 : C.key) || "",
      sort_order: (C == null ? void 0 : C.order) || ""
    }));
  }, [
    We,
    ne == null ? void 0 : ne.enabled,
    ne == null ? void 0 : ne.useServerSideSorting,
    Qe,
    j
  ]), /* @__PURE__ */ L("div", { ref: gr, children: [
    R ? /* @__PURE__ */ c(Us, { rows: 6, columns: 6 }) : /* @__PURE__ */ L(Ve, { children: [
      /* @__PURE__ */ L(
        "div",
        {
          className: te(
            J.table.toolbar,
            "flex flex-col lg:!flex-row lg:!justify-between gap-4 mb-3"
          ),
          children: [
            /* @__PURE__ */ L("div", { className: "table-heading", children: [
              /* @__PURE__ */ c("h1", { children: n }),
              /* @__PURE__ */ c("p", { children: i })
            ] }),
            /* @__PURE__ */ L("div", { className: "flex flex-col justify-end items-stretch lg:!items-end gap-2 w-full lg:!w-auto", children: [
              (e || (W == null ? void 0 : W.length) > 0 || (P == null ? void 0 : P.length) > 0) && /* @__PURE__ */ L("div", { className: "flex flex-col sm:!flex-row sm:!flex-wrap justify-end items-stretch sm:!items-center gap-2 w-full", children: [
                e && /* @__PURE__ */ L(
                  Tt,
                  {
                    onClick: () => d(!0),
                    variant: "contained",
                    color: "primary",
                    children: [
                      /* @__PURE__ */ c(zc, { className: "w-4 h-4 mr-2" }),
                      l || "Add New"
                    ]
                  }
                ),
                W.filter(
                  (C) => (C == null ? void 0 : C.show) !== !1
                ).map((C, X) => /* @__PURE__ */ L(
                  Tt,
                  {
                    onClick: (Ne) => xa(C, Ne),
                    variant: C.variant || "contained",
                    color: C.color || "default",
                    className: C.className || "",
                    disabled: C.disabled,
                    children: [
                      C.icon ? /* @__PURE__ */ c("span", { className: "mr-2", children: C.icon }) : null,
                      C.label
                    ]
                  },
                  C.key || `${C.label}-${X}`
                )),
                P.filter(
                  (C) => (C == null ? void 0 : C.show) !== !1
                ).length > 0 && /* @__PURE__ */ L("div", { className: "relative", ref: cr, children: [
                  /* @__PURE__ */ c(
                    Tt,
                    {
                      onClick: (C) => {
                        C.stopPropagation(), ze((X) => !X);
                      },
                      variant: "outlined",
                      className: "px-2",
                      "aria-label": "More actions",
                      children: /* @__PURE__ */ c(ao, { className: "w-4 h-4" })
                    }
                  ),
                  Pe && /* @__PURE__ */ c("div", { className: "absolute right-0 mt-2 w-48 z-50 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg py-1", children: P.filter(
                    (C) => (C == null ? void 0 : C.show) !== !1
                  ).map(
                    (C, X) => /* @__PURE__ */ L(
                      "button",
                      {
                        type: "button",
                        onClick: (Ne) => _a(C, Ne),
                        disabled: C.disabled,
                        className: te(
                          "w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center",
                          C.className || ""
                        ),
                        children: [
                          C.icon ? /* @__PURE__ */ c("span", { className: "mr-2 inline-flex", children: C.icon }) : null,
                          C.label
                        ]
                      },
                      C.key || `${C.label}-${X}`
                    )
                  ) })
                ] })
              ] }),
              /* @__PURE__ */ L("div", { className: "flex flex-col sm:!flex-row sm:!flex-wrap justify-end items-stretch sm:!items-center gap-2 w-full", children: [
                S.enabled && /* @__PURE__ */ c("div", { className: "w-full sm:!w-auto", children: /* @__PURE__ */ L(
                  "div",
                  {
                    className: te(
                      J.table.searchField,
                      "table-search-field"
                    ),
                    children: [
                      /* @__PURE__ */ c(Wa, { className: "search-icon" }),
                      /* @__PURE__ */ c(
                        "input",
                        {
                          type: "text",
                          placeholder: S.placeholder || "Search...",
                          value: ie,
                          onChange: (C) => br(C.target.value),
                          className: J.table.searchInput
                        }
                      )
                    ]
                  }
                ) }),
                ne != null && ne.enabled && (Qe == null ? void 0 : Qe.length) > 0 || de && M.enabled || z && z.enabled ? /* @__PURE__ */ L("div", { className: "flex items-center justify-end gap-2 w-full sm:!w-auto", children: [
                  de && M.enabled && /* @__PURE__ */ L("div", { className: "filter-button-wrapper", children: [
                    /* @__PURE__ */ L(
                      Tt,
                      {
                        onClick: () => at(!0),
                        variant: "contained",
                        className: "w-full sm:!w-auto",
                        children: [
                          /* @__PURE__ */ c(jc, { className: "w-4 h-4 mr-2" }),
                          "Filters"
                        ]
                      }
                    ),
                    Object.keys(nt).length > 0 && /* @__PURE__ */ c("span", { className: "red-dot" })
                  ] }),
                  z && z.enabled && /* @__PURE__ */ c("div", { className: "filter-button-wrapper", children: /* @__PURE__ */ L(
                    Tt,
                    {
                      onClick: () => wa(),
                      variant: "contained",
                      className: "w-full sm:!w-auto",
                      children: [
                        /* @__PURE__ */ c(Tc, { className: "w-4 h-4 mr-2" }),
                        "Export CSV"
                      ]
                    }
                  ) }),
                  (ne == null ? void 0 : ne.enabled) && (Qe == null ? void 0 : Qe.length) > 0 && /* @__PURE__ */ c(
                    Qs,
                    {
                      options: Qe,
                      value: We,
                      onChange: Mr,
                      clearLabel: ne == null ? void 0 : ne.clearLabel
                    }
                  )
                ] }) : null
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ L(
        "div",
        {
          className: te(
            J.table.root,
            J.table.container,
            "table-container"
          ),
          children: [
            /* @__PURE__ */ c("div", { className: "overflow-x-auto", children: /* @__PURE__ */ L("table", { className: J.table.element, children: [
              /* @__PURE__ */ c("thead", { className: J.table.head, children: /* @__PURE__ */ c("tr", { className: J.table.headRow, children: o.map((C) => /* @__PURE__ */ c(
                "th",
                {
                  className: te(
                    J.table.headCell,
                    "table-head-data",
                    C.headClass || ""
                  ),
                  children: C.title
                },
                C.key
              )) }) }),
              /* @__PURE__ */ c("tbody", { className: J.table.body, children: Xt.length === 0 ? /* @__PURE__ */ c("tr", { children: /* @__PURE__ */ c(
                "td",
                {
                  colSpan: o.length,
                  className: te(
                    J.table.noData,
                    "no-data-message"
                  ),
                  children: ae
                }
              ) }) : Xt.map((C, X) => /* @__PURE__ */ c(
                "tr",
                {
                  className: te(
                    J.table.row,
                    "table-row",
                    Hr() ? "cursor-pointer" : ""
                  ),
                  onClick: () => {
                    Hr() && ba(C);
                  },
                  children: o.map((Ne) => /* @__PURE__ */ c(
                    "td",
                    {
                      className: te(
                        J.table.cell,
                        "table-data",
                        Ne.type == "audio" ? "" : "max-w-[300px]",
                        "truncate",
                        Lr(Ne) ? "cursor-pointer" : ""
                      ),
                      title: String(C[Ne.key] ?? ""),
                      onClick: (rt) => {
                        Lr(Ne) && (rt.stopPropagation(), rt.preventDefault(), ya(Ne, C));
                      },
                      children: Ne.render ? Ne.render(C, X) : va(Ne, C, X)
                    },
                    Ne.key
                  ))
                },
                C.id || C._id || X
              )) })
            ] }) }),
            (E == null ? void 0 : E.enabled) && Ge.length > 0 && /* @__PURE__ */ L(
              "div",
              {
                className: te(
                  J.table.pagination,
                  "pagination-wrapper"
                ),
                children: [
                  /* @__PURE__ */ L("span", { children: [
                    "Showing ",
                    (Te - 1) * qe + 1,
                    " to",
                    " ",
                    Math.min(Te * qe, rr),
                    " of",
                    " ",
                    rr,
                    " results"
                  ] }),
                  /* @__PURE__ */ L("div", { className: "flex items-center gap-4", children: [
                    /* @__PURE__ */ L("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ c("span", { children: "Rows per page:" }),
                      /* @__PURE__ */ c(
                        "select",
                        {
                          value: qe,
                          onChange: (C) => {
                            const X = Number(C.target.value);
                            ir(X), He(1), E.useServerSidePagination && j(
                              (Ne) => ({
                                ...Ne,
                                current_page: 1,
                                rows_per_page: X
                              })
                            );
                          },
                          className: "rows-number-select",
                          children: [10, 25, 50, 100].map((C) => /* @__PURE__ */ c("option", { value: C, children: C }, C))
                        }
                      )
                    ] }),
                    /* @__PURE__ */ L("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ c(
                        "button",
                        {
                          onClick: () => {
                            if (Te > 1) {
                              const C = Te - 1;
                              He(C), E.useServerSidePagination && j(
                                (X) => ({
                                  ...X,
                                  current_page: C
                                })
                              );
                            }
                          },
                          disabled: Te === 1,
                          className: "arrow-icons",
                          children: /* @__PURE__ */ c(Hc, { className: "h-4 w-4" })
                        }
                      ),
                      /* @__PURE__ */ L("span", { children: [
                        "Page ",
                        Te,
                        " of ",
                        ar
                      ] }),
                      /* @__PURE__ */ c(
                        "button",
                        {
                          onClick: () => {
                            if (Te < ar) {
                              const C = Te + 1;
                              He(C), E.useServerSidePagination && j(
                                (X) => ({
                                  ...X,
                                  current_page: C
                                })
                              );
                            }
                          },
                          disabled: Te === ar,
                          className: "arrow-icons",
                          children: /* @__PURE__ */ c(Fc, { className: "h-4 w-4" })
                        }
                      )
                    ] })
                  ] })
                ]
              }
            )
          ]
        }
      )
    ] }),
    le && vr && Ja(
      /* @__PURE__ */ c(
        "div",
        {
          ref: lr,
          style: {
            position: "fixed",
            top: `${Oe.top}px`,
            left: `${Oe.left}px`,
            zIndex: 9999
          },
          className: te(
            J.table.menu,
            "w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg border border-gray-200 dark:border-gray-600"
          ),
          children: ue.map((C, X) => /* @__PURE__ */ L(
            "button",
            {
              onClick: (Ne) => Nr(
                C,
                b.find(
                  (rt) => rt.id === le || rt._id == le
                ),
                Ne
              ),
              className: te(
                J.table.menuItem,
                "w-full flex items-center gap-2 px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-600",
                C.variant === "danger" ? "text-red-600 dark:text-red-500" : "text-gray-700 dark:text-gray-200"
              ),
              children: [
                C.icon && /* @__PURE__ */ c("span", { className: "shrink-0", children: C.icon }),
                C.title
              ]
            },
            X
          ))
        }
      ),
      vr
    ),
    de && /* @__PURE__ */ c(
      Ps,
      {
        isOpen: Mt,
        onClose: () => at(!1),
        config: de,
        onApply: (C) => {
          xe(C), $ == null || $(C);
        }
      }
    ),
    tt && Pt && /* @__PURE__ */ c(
      tr,
      {
        src: Pt.src,
        alt: Pt.alt,
        isOpen: tt,
        setIsOpen: we
      }
    )
  ] });
}, sa = ({
  isOpen: m,
  onClose: d,
  icon: n,
  title: l,
  children: i,
  size: e = "md",
  actionButtons: b = [],
  onFormSubmit: o = () => {
  },
  loadingBtn: R = !1,
  executeFunction: S = () => {
  },
  selectedItem: M = null,
  footerConfig: D,
  classNames: E
}) => {
  if (!m) return null;
  const z = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-full"
  }, W = b.length > 0 || !!(D != null && D.cancelButton);
  return /* @__PURE__ */ L(
    "div",
    {
      className: te(
        J.modal.root,
        "fixed inset-0 z-50 flex items-center justify-center p-4"
      ),
      children: [
        /* @__PURE__ */ c(
          "div",
          {
            className: te(
              J.modal.overlay,
              "fixed inset-0 bg-gray-500 opacity-75",
              E == null ? void 0 : E.overlay
            )
          }
        ),
        /* @__PURE__ */ L(
          "div",
          {
            className: te(
              J.modal.container,
              "relative bg-white rounded-lg shadow-xl w-full max-h-[90vh] flex flex-col dark:bg-gray-800",
              z[e] || z.md,
              E == null ? void 0 : E.container
            ),
            children: [
              /* @__PURE__ */ L(
                "div",
                {
                  className: te(
                    J.modal.header,
                    "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0",
                    E == null ? void 0 : E.header
                  ),
                  children: [
                    /* @__PURE__ */ L("div", { className: "flex items-center gap-1", children: [
                      n && /* @__PURE__ */ c("span", { children: n }),
                      /* @__PURE__ */ c(
                        "h3",
                        {
                          className: te(
                            J.modal.title,
                            "text-lg font-medium text-gray-900 dark:text-white",
                            E == null ? void 0 : E.title
                          ),
                          children: l
                        }
                      )
                    ] }),
                    /* @__PURE__ */ c(
                      "button",
                      {
                        onClick: () => d(),
                        className: te(
                          J.modal.closeButton,
                          "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
                          E == null ? void 0 : E.closeButton
                        ),
                        children: /* @__PURE__ */ c(pa, { className: "w-6 h-6" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ c(
                "div",
                {
                  className: te(
                    J.modal.body,
                    "flex-1 overflow-y-auto p-4",
                    E == null ? void 0 : E.body
                  ),
                  children: i
                }
              ),
              W && /* @__PURE__ */ L(
                "div",
                {
                  className: te(
                    J.modal.footer,
                    "px-4 py-3 flex justify-end gap-3 border-t border-gray-200 dark:border-gray-700 sm:!px-6",
                    E == null ? void 0 : E.footer
                  ),
                  children: [
                    (D == null ? void 0 : D.cancelButton) && /* @__PURE__ */ c(
                      Tt,
                      {
                        onClick: () => d(),
                        variant: "outlined",
                        color: "default",
                        className: te(
                          J.modal.actionButton,
                          "min-w-[100px]"
                        ),
                        type: "button",
                        children: (D == null ? void 0 : D.cancelText) || "Cancel"
                      }
                    ),
                    b.map((P, ae) => /* @__PURE__ */ c(
                      Tt,
                      {
                        onClick: (U) => {
                          P.type == "submit" ? o(U) : S(
                            () => {
                              var j;
                              return Promise.resolve((j = P == null ? void 0 : P.onClick) == null ? void 0 : j.call(P, U, M));
                            },
                            (j) => d == null ? void 0 : d(j)
                          );
                        },
                        disabled: R || P.disabled,
                        variant: P.variant || "contained",
                        color: P.color || "primary",
                        className: te(
                          J.modal.actionButton,
                          "min-w-[100px]",
                          P.className || ""
                        ),
                        type: P.type || "button",
                        children: R ? /* @__PURE__ */ L(
                          "div",
                          {
                            className: te(
                              J.modal.loadingIndicator,
                              "flex items-center"
                            ),
                            children: [
                              /* @__PURE__ */ c("div", { className: "animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-2 border-t-white mr-2" }),
                              P.label || "Submit",
                              "..."
                            ]
                          }
                        ) : P.label || "Submit"
                      },
                      `${P.label || "action"}-${ae}`
                    ))
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  );
}, xo = ({
  config: m,
  onSubmit: d,
  initialData: n,
  fetchRowDetails: l,
  type: i
}) => {
  const { enqueueSnackbar: e } = Tr(), b = n || {}, { formClass: o = "grid grid-cols-12 gap-4", formFields: R = [] } = m || {}, [S, M] = pe(b), [D, E] = pe(!1), [z, W] = pe({}), P = async () => {
    l == null || l(b).then((j) => {
      M(j.data);
    }).catch((j) => {
      e(j.message, { variant: "error" });
    }).finally(() => {
      E(!1);
    });
  };
  et(() => {
    l instanceof Function ? (E(!0), P()) : (M(b), E(!1));
  }, []);
  const ae = (j, $) => {
    M((de) => ({ ...de, [j]: $ })), W((de) => ({
      ...de,
      [j]: ""
    }));
  }, U = (j) => {
    j.preventDefault();
    const $ = j.currentTarget;
    if (!$.checkValidity()) {
      $.reportValidity();
      return;
    }
    const de = {};
    let se = !1;
    for (const ie of R) {
      const ke = S[ie.key] || "";
      if (ie.customValidation) {
        const le = ie.customValidation(ke);
        if (le !== !1 && (de[ie.key] = le, !se)) {
          const K = $.querySelector(
            `[id="field-${ie.key}"]`
          );
          K == null || K.focus(), se = !0;
        }
      }
    }
    W(de), !(Object.keys(de).length > 0) && d(S);
  };
  return D ? /* @__PURE__ */ c(
    "div",
    {
      className: te(
        J.form.loading,
        "flex items-center justify-center h-64"
      ),
      children: /* @__PURE__ */ c(
        "div",
        {
          className: "rounded-full border-4 border-blue-500 border-t-gray-200 animate-spin w-8 h-8",
          style: {
            borderTopColor: "border-primary-500"
          }
        }
      )
    }
  ) : /* @__PURE__ */ c(
    "form",
    {
      id: i === "add" ? "addForm" : i === "edit" ? "editForm" : "defaultForm",
      onSubmit: U,
      className: te(J.form.root, o),
      noValidate: !1,
      children: R.map((j) => /* @__PURE__ */ c(
        Uo,
        {
          field: j,
          formData: S,
          errorMessage: z[j.key] || "",
          handleChange: ae
        },
        j.key
      ))
    }
  );
};
function Js({
  data: m,
  config: d,
  fetchRowDetails: n
}) {
  const { enqueueSnackbar: l } = Tr(), {
    fields: i = [],
    containerClass: e,
    variant: b = "default",
    styles: o = {}
  } = d || {}, R = m || {}, [S, M] = pe(R), [D, E] = pe(!0), z = async () => {
    n == null || n(R).then((P) => {
      M(P.data);
    }).catch((P) => {
      l(P.message, { variant: "error" });
    }).finally(() => {
      E(!1);
    });
  };
  if (et(() => {
    n instanceof Function ? z() : (M(R), E(!1));
  }, []), D)
    return /* @__PURE__ */ c(
      "div",
      {
        className: te(
          J.form.loading,
          "flex items-center justify-center h-64"
        ),
        children: /* @__PURE__ */ c(
          "div",
          {
            className: "rounded-full border-4 border-blue-500 border-t-gray-200 animate-spin w-8 h-8",
            style: {
              borderTopColor: "border-primary-500"
            }
          }
        )
      }
    );
  const W = {
    default: "grid grid-cols-12 gap-4",
    // card: each field is a standalone elevated card in a 12-col grid
    card: "grid grid-cols-12 gap-3",
    // split: clean property-sheet — bordered box, rows divided by hairlines
    split: "rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden divide-y divide-gray-100 dark:divide-gray-800"
  };
  return /* @__PURE__ */ c(Ve, { children: /* @__PURE__ */ c(
    "div",
    {
      className: te(
        J.details.root,
        J.details.container,
        W[b] || W.default,
        e || "",
        o.containerClass || ""
      ),
      children: i.map((P) => P.renderCondition && typeof P.renderCondition == "function" && !P.renderCondition(S) ? null : P.type == "group" ? /* @__PURE__ */ c(
        jo,
        {
          col: P,
          data: S,
          uiVariant: b,
          styleConfig: o
        },
        P.key || P.titleKey
      ) : P.type == "cardGroup" ? /* @__PURE__ */ c(
        To,
        {
          col: P,
          data: S,
          uiVariant: b,
          styleConfig: o
        },
        P.key || P.titleKey
      ) : /* @__PURE__ */ c(
        Fo,
        {
          col: P,
          data: S,
          uiVariant: b,
          styleConfig: o
        },
        P.key || P.label
      ))
    }
  ) });
}
const Zs = ({ config: m }) => {
  var je, Ge, Te, He, qe, ir, rr, Ir, ar, Xt, lr, cr, gr, sr, dr, vr, br, Mr, Nr, Rr, mt, Wt;
  const { enqueueSnackbar: d } = Tr(), {
    title: n,
    fetchData: l,
    fetchRowDetails: i,
    isStaticData: e = !1,
    tableConfig: b,
    modalConfig: o,
    filterConfig: R
  } = m, [S, M] = pe(!0), [D, E] = pe(!1), [z, W] = pe([]), [P, ae] = pe(null), [U, j] = pe({
    search: "",
    rows_per_page: 50,
    current_page: 1,
    sort_by: "",
    sort_order: ""
  }), [$, de] = pe({}), [se, ie] = pe(!1), [ke, le] = pe(!1), [K, ue] = pe(!1), [_e, Oe] = pe(!1), [Fe, Mt] = pe(!1), [at, nt] = pe(
    null
  ), xe = (De, Ze) => {
    De === "edit" ? (nt(Ze), ue(!0)) : De === "view" ? (nt(Ze), Mt(!0)) : De === "delete" && (nt(Ze), Oe(!0));
  }, Pe = async (De, Ze, wt = "", qt = "") => {
    E(!0);
    try {
      if (!De) return;
      const Et = await De();
      (wt || Et != null && Et.message) && d(wt || Et.message || "Success", {
        variant: "success"
      }), Ze == null || Ze(Et);
    } catch (Et) {
      (qt || Et != null && Et.message) && d(qt || Et.message || "Error occurred", {
        variant: "error"
      });
    } finally {
      E(!1);
    }
  }, ze = (De) => {
    const Ze = De.newObject;
    e ? (W((wt) => [Ze, ...wt]), ae((wt) => ({
      ...wt,
      current_page: 1
    }))) : (j((wt) => ({
      ...wt,
      current_page: 1
    })), U.current_page === 1 && Ie()), le(!1);
  }, ne = (De) => {
    const { newObject: Ze, targetObject: wt } = De;
    e ? W(
      (qt) => qt.map(
        (Et) => Et.id === wt.id ? { ...Et, ...Ze } : Et
      )
    ) : Ie(), ue(!1);
  }, Ce = (De) => {
    if (!De) {
      Oe(!1), nt(null);
      return;
    }
    e ? W(
      (Ze) => Ze.filter((wt) => wt.id !== De.targetObject.id)
    ) : z.length === 1 && U.current_page > 1 ? j((Ze) => ({
      ...Ze,
      current_page: Ze.current_page - 1
    })) : Ie(), Oe(!1), nt(null);
  }, Qe = (De) => Pe(
    () => {
      var Ze;
      return (Ze = o == null ? void 0 : o.addModal) != null && Ze.handleSubmit ? o.addModal.handleSubmit(De) : Promise.resolve({ newObject: null });
    },
    ze
  ), We = (De) => Pe(
    () => {
      var Ze;
      return (Ze = o == null ? void 0 : o.editModal) != null && Ze.handleSubmit ? o.editModal.handleSubmit(De, at) : Promise.resolve({ newObject: null, targetObject: null });
    },
    ne
  ), Ie = async () => {
    M(!0);
    try {
      const De = await l({
        ...U,
        ...$
      });
      W(De.data || []), ae(De.pagination || null);
    } catch (De) {
      d(De.message || "Failed to fetch data", {
        variant: "error"
      });
    } finally {
      M(!1);
    }
  }, Pt = (De) => {
    var Ze;
    de((wt) => ({ ...De })), (Ze = b == null ? void 0 : b.filter) != null && Ze.useServerSideFilters && ie((wt) => !wt);
  }, ge = (De, Ze) => De.filter(
    (wt) => Object.entries(Ze).every(([qt, Et]) => wt[qt] === Et)
  ), tt = Ar(() => {
    var De;
    return (De = b == null ? void 0 : b.filter) != null && De.useServerSideFilters ? z : ge(z, $);
  }, [z, $, (je = b == null ? void 0 : b.filter) == null ? void 0 : je.useServerSideFilters]), we = (Ge = o == null ? void 0 : o.viewModal) == null ? void 0 : Ge.component;
  return et(() => {
    Ie();
  }, [
    U.search,
    U.rows_per_page,
    U.current_page,
    U.sort_by,
    U.sort_order,
    se
  ]), /* @__PURE__ */ L("div", { className: J.crudPage.root, children: [
    /* @__PURE__ */ c(
      qs,
      {
        title: n,
        setShowAdd: le,
        description: m.description,
        buttonText: m.buttonText,
        showAddButton: !!(o != null && o.addModal),
        config: {
          ...b,
          pagination: {
            ...b.pagination,
            ...P
          },
          data: tt,
          setServerSidePaginationData: j,
          onMenuAction: xe,
          filterConfig: R,
          onFilterApply: Pt,
          loading: S
        }
      }
    ),
    /* @__PURE__ */ c(
      sa,
      {
        isOpen: ke,
        onClose: () => {
          D || le(!1);
        },
        icon: (Te = o == null ? void 0 : o.addModal) == null ? void 0 : Te.icon,
        title: ((He = o == null ? void 0 : o.addModal) == null ? void 0 : He.title) || "Add New",
        size: ((qe = o == null ? void 0 : o.addModal) == null ? void 0 : qe.size) || "md",
        onFormSubmit: () => {
          var De;
          return (De = document.querySelector("#addForm")) == null ? void 0 : De.requestSubmit();
        },
        loadingBtn: D,
        actionButtons: ((ir = o == null ? void 0 : o.addModal) == null ? void 0 : ir.actionButtons) || [],
        children: /* @__PURE__ */ c(
          xo,
          {
            config: (o == null ? void 0 : o.addModal) || {},
            onSubmit: Qe,
            initialData: {},
            type: "add",
            loading: D
          }
        )
      }
    ),
    /* @__PURE__ */ c(
      sa,
      {
        isOpen: K,
        onClose: () => {
          D || ue(!1);
        },
        icon: (rr = o == null ? void 0 : o.editModal) == null ? void 0 : rr.icon,
        title: ((Ir = o == null ? void 0 : o.editModal) == null ? void 0 : Ir.title) || "Edit",
        size: ((ar = o == null ? void 0 : o.editModal) == null ? void 0 : ar.size) || "md",
        onFormSubmit: () => {
          var De;
          return (De = document.querySelector("#editForm")) == null ? void 0 : De.requestSubmit();
        },
        actionButtons: ((Xt = o == null ? void 0 : o.editModal) == null ? void 0 : Xt.actionButtons) || [],
        loadingBtn: D,
        children: /* @__PURE__ */ c(
          xo,
          {
            config: (o == null ? void 0 : o.editModal) || {},
            onSubmit: We,
            initialData: at,
            type: "edit",
            loading: D,
            fetchRowDetails: i
          }
        )
      }
    ),
    /* @__PURE__ */ c(
      sa,
      {
        isOpen: _e,
        onClose: (De) => {
          Ce(De);
        },
        icon: ((lr = o == null ? void 0 : o.deleteModal) == null ? void 0 : lr.icon) || /* @__PURE__ */ c(Ht, { icon: "ph:warning-bold", className: "w-6 h-6 text-red-500" }),
        title: ((cr = o == null ? void 0 : o.deleteModal) == null ? void 0 : cr.title) || "Confirm Delete",
        size: ((gr = o == null ? void 0 : o.deleteModal) == null ? void 0 : gr.size) || "md",
        loading: D,
        actionButtons: ((sr = o == null ? void 0 : o.deleteModal) == null ? void 0 : sr.actionButtons) || [],
        executeFunction: Pe,
        selectedItem: at,
        children: /* @__PURE__ */ c(
          "div",
          {
            className: te(
              J.crudPage.deleteContent,
              "flex items-center space-x-2 py-3"
            ),
            children: /* @__PURE__ */ L("div", { children: [
              /* @__PURE__ */ c("p", { className: "text-md text-gray-700 dark:text-white", children: ((dr = o == null ? void 0 : o.deleteModal) == null ? void 0 : dr.confirmText) || "Are you sure you want to delete this item?" }),
              ((vr = o == null ? void 0 : o.deleteModal) == null ? void 0 : vr.referenceKey) && /* @__PURE__ */ c("p", { className: "text-md font-semibold text-gray-700 dark:text-white", children: at == null ? void 0 : at[(br = o == null ? void 0 : o.deleteModal) == null ? void 0 : br.referenceKey] })
            ] })
          }
        )
      }
    ),
    (o == null ? void 0 : o.viewModal) && /* @__PURE__ */ c(
      sa,
      {
        isOpen: Fe,
        onClose: () => {
          Mt(!1), nt(null);
        },
        icon: (Mr = o == null ? void 0 : o.viewModal) == null ? void 0 : Mr.icon,
        title: ((Nr = o == null ? void 0 : o.viewModal) == null ? void 0 : Nr.title) || "View Details",
        size: ((Rr = o == null ? void 0 : o.viewModal) == null ? void 0 : Rr.size) || "lg",
        footerConfig: (mt = o == null ? void 0 : o.viewModal) == null ? void 0 : mt.footer,
        classNames: (Wt = o == null ? void 0 : o.viewModal) == null ? void 0 : Wt.modalClassNames,
        children: we ? /* @__PURE__ */ c(we, { data: at }) : /* @__PURE__ */ c(
          Js,
          {
            data: at,
            fetchRowDetails: i,
            config: (o == null ? void 0 : o.viewModal) || {}
          }
        )
      }
    )
  ] });
};
function Xs({
  children: m
}) {
  return /* @__PURE__ */ c(
    Gc,
    {
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right"
      },
      action: (d) => /* @__PURE__ */ c(
        "button",
        {
          onClick: () => {
            window.dispatchEvent(
              new CustomEvent("closeSnackbar", { detail: d })
            );
          },
          className: "p-1 hover:bg-white/20 rounded-full transition-colors duration-200 text-white flex items-center justify-center",
          children: /* @__PURE__ */ c(pa, { className: "h-4 w-4" })
        }
      ),
      maxSnack: 3,
      autoHideDuration: 3e3,
      children: m
    }
  );
}
const $s = () => {
  if (typeof document > "u" || document.getElementById("react-admin-crud-manager-styles")) return;
  const m = document.createElement("style");
  m.id = "react-admin-crud-manager-styles", m.textContent = Yc, document.head.appendChild(m);
};
function ld({ config: m }) {
  return et(() => {
    $s();
  }, []), /* @__PURE__ */ c("div", { className: "racm-root", children: /* @__PURE__ */ c(Xs, { children: /* @__PURE__ */ c(Zs, { config: m }) }) });
}
export {
  ld as default
};
//# sourceMappingURL=index.es.js.map
