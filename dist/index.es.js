import { jsx as s, Fragment as Ye, jsxs as z } from "react/jsx-runtime";
import * as ar from "react";
import qr, { useState as pe, useRef as Mt, useEffect as Xe, useCallback as Mc, useMemo as kr } from "react";
import { Info as Nc, ChevronDown as ho, Search as Pa, Check as Rc, X as ma, User as Ua, ArrowUpDown as Lc, Plus as Oc, Filter as Dc, Download as Bc, ChevronLeft as zc, ChevronRight as Tc, EllipsisVertical as jc, Music as Hc } from "lucide-react";
import Fc, { createPortal as Qa } from "react-dom";
import { Icon as Ut } from "@iconify/react";
import { Editor as Pc } from "@tinymce/tinymce-react";
import { enqueueSnackbar as Cr, SnackbarProvider as Uc, useSnackbar as Qc } from "notistack";
const Gc = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";.racm-root *,.racm-root :before,.racm-root :after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}.racm-root :before,.racm-root :after{--tw-content: ""}.racm-root{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}.racm-root{margin:0;line-height:inherit}.racm-root hr{height:0;color:inherit;border-top-width:1px}.racm-root abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}.racm-root h1,.racm-root h2,.racm-root h3,.racm-root h4,.racm-root h5,.racm-root h6{font-size:inherit;font-weight:inherit}.racm-root a{color:inherit;text-decoration:inherit}.racm-root b,.racm-root strong{font-weight:bolder}.racm-root code,.racm-root kbd,.racm-root samp,.racm-root pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}.racm-root small{font-size:80%}.racm-root sub,.racm-root sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}.racm-root sub{bottom:-.25em}.racm-root sup{top:-.5em}.racm-root table{text-indent:0;border-color:inherit;border-collapse:collapse}.racm-root button,.racm-root input,.racm-root optgroup,.racm-root select,.racm-root textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}.racm-root button,.racm-root select{text-transform:none}.racm-root button,.racm-root [type=button],.racm-root [type=reset],.racm-root [type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}.racm-root :-moz-focusring{outline:auto}.racm-root :-moz-ui-invalid{box-shadow:none}.racm-root progress{vertical-align:baseline}.racm-root ::-webkit-inner-spin-button,.racm-root ::-webkit-outer-spin-button{height:auto}.racm-root [type=search]{-webkit-appearance:textfield;outline-offset:-2px}.racm-root ::-webkit-search-decoration{-webkit-appearance:none}.racm-root ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.racm-root summary{display:list-item}.racm-root blockquote,.racm-root dl,.racm-root dd,.racm-root h1,.racm-root h2,.racm-root h3,.racm-root h4,.racm-root h5,.racm-root h6,.racm-root hr,.racm-root figure,.racm-root p,.racm-root pre{margin:0}.racm-root fieldset{margin:0;padding:0}.racm-root legend{padding:0}.racm-root ol,.racm-root ul,.racm-root menu{list-style:none;margin:0;padding:0}.racm-root dialog{padding:0}.racm-root textarea{resize:vertical}.racm-root input::-moz-placeholder,.racm-root textarea::-moz-placeholder{opacity:1;color:#9ca3af}.racm-root input::placeholder,.racm-root textarea::placeholder{opacity:1;color:#9ca3af}.racm-root button,.racm-root [role=button]{cursor:pointer}.racm-root :disabled{cursor:default}.racm-root img,.racm-root svg,.racm-root video,.racm-root canvas,.racm-root audio,.racm-root iframe,.racm-root embed,.racm-root object{display:block;vertical-align:middle}.racm-root img,.racm-root video{max-width:100%;height:auto}.racm-root [hidden]{display:none}.racm-root{--background: 0 0% 100%;--foreground: 0 0% 3.9%;--card: 0 0% 100%;--card-foreground: 0 0% 3.9%;--popover: 0 0% 100%;--popover-foreground: 0 0% 3.9%;--primary: 0 0% 9%;--primary-foreground: 0 0% 98%;--secondary: 0 0% 96.1%;--secondary-foreground: 0 0% 9%;--muted: 0 0% 96.1%;--muted-foreground: 0 0% 45.1%;--accent: 0 0% 96.1%;--accent-foreground: 0 0% 9%;--destructive: 0 84.2% 60.2%;--destructive-foreground: 0 0% 98%;--border: 0 0% 89.8%;--input: 0 0% 89.8%;--ring: 0 0% 3.9%;--chart-1: 12 76% 61%;--chart-2: 173 58% 39%;--chart-3: 197 37% 24%;--chart-4: 43 74% 66%;--chart-5: 27 87% 67%;--radius: .5rem}.racm-root *{border-color:hsl(var(--border, 0 0% 89.8%))}.racm-root{background-color:hsl(var(--background, 0 0% 100%));color:hsl(var(--foreground, 0 0% 3.9%))}.racm-root *,.racm-root :before,.racm-root :after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.racm-root ::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.racm-root .container{width:100%}@media (min-width: 640px){.racm-root .container{max-width:640px}}@media (min-width: 768px){.racm-root .container{max-width:768px}}@media (min-width: 1024px){.racm-root .container{max-width:1024px}}@media (min-width: 1280px){.racm-root .container{max-width:1280px}}@media (min-width: 1536px){.racm-root .container{max-width:1536px}}.racm-root .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.racm-root .pointer-events-none{pointer-events:none}.racm-root .pointer-events-auto{pointer-events:auto}.racm-root .fixed{position:fixed}.racm-root .absolute{position:absolute}.racm-root .relative{position:relative}.racm-root .inset-0{top:0;right:0;bottom:0;left:0}.racm-root .inset-y-0{top:0;bottom:0}.racm-root .-bottom-4{bottom:-1rem}.racm-root .-right-2{right:-.5rem}.racm-root .-right-6{right:-1.5rem}.racm-root .-top-2{top:-.5rem}.racm-root .-top-6{top:-1.5rem}.racm-root .left-1{left:.25rem}.racm-root .left-1\\/2{left:50%}.racm-root .left-3{left:.75rem}.racm-root .right-0{right:0}.racm-root .right-1{right:.25rem}.racm-root .right-1\\/2{right:50%}.racm-root .right-2{right:.5rem}.racm-root .right-3{right:.75rem}.racm-root .right-4{right:1rem}.racm-root .right-\\[50\\%\\]{right:50%}.racm-root .top-0{top:0}.racm-root .top-1{top:.25rem}.racm-root .top-1\\/2{top:50%}.racm-root .top-2{top:.5rem}.racm-root .top-4{top:1rem}.racm-root .top-\\[80\\%\\]{top:80%}.racm-root .top-full{top:100%}.racm-root .z-10{z-index:10}.racm-root .z-20{z-index:20}.racm-root .z-40{z-index:40}.racm-root .z-50{z-index:50}.racm-root .col-span-12{grid-column:span 12 / span 12}.racm-root .col-span-6{grid-column:span 6 / span 6}.racm-root .mb-0{margin-bottom:0}.racm-root .mb-1{margin-bottom:.25rem}.racm-root .mb-3{margin-bottom:.75rem}.racm-root .mb-6{margin-bottom:1.5rem}.racm-root .ml-1{margin-left:.25rem}.racm-root .ml-2{margin-left:.5rem}.racm-root .mr-2{margin-right:.5rem}.racm-root .mt-1{margin-top:.25rem}.racm-root .mt-2{margin-top:.5rem}.racm-root .mt-auto{margin-top:auto}.racm-root .inline{display:inline}.racm-root .flex{display:flex}.racm-root .inline-flex{display:inline-flex}.racm-root .table{display:table}.racm-root .table-row{display:table-row}.racm-root .grid{display:grid}.racm-root .hidden{display:none}.racm-root .h-1{height:.25rem}.racm-root .h-10{height:2.5rem}.racm-root .h-11{height:2.75rem}.racm-root .h-12{height:3rem}.racm-root .h-16{height:4rem}.racm-root .h-2{height:.5rem}.racm-root .h-20{height:5rem}.racm-root .h-28{height:7rem}.racm-root .h-3{height:.75rem}.racm-root .h-32{height:8rem}.racm-root .h-4{height:1rem}.racm-root .h-5{height:1.25rem}.racm-root .h-6{height:1.5rem}.racm-root .h-64{height:16rem}.racm-root .h-7{height:1.75rem}.racm-root .h-72{height:18rem}.racm-root .h-8{height:2rem}.racm-root .h-9{height:2.25rem}.racm-root .h-\\[10px\\]{height:10px}.racm-root .h-\\[150px\\]{height:150px}.racm-root .h-\\[36px\\]{height:36px}.racm-root .h-\\[40px\\]{height:40px}.racm-root .h-full{height:100%}.racm-root .max-h-40{max-height:10rem}.racm-root .max-h-60{max-height:15rem}.racm-root .max-h-\\[250px\\]{max-height:250px}.racm-root .max-h-\\[260px\\]{max-height:260px}.racm-root .max-h-\\[90vh\\]{max-height:90vh}.racm-root .min-h-\\[52px\\]{min-height:52px}.racm-root .w-1{width:.25rem}.racm-root .w-10{width:2.5rem}.racm-root .w-11{width:2.75rem}.racm-root .w-12{width:3rem}.racm-root .w-16{width:4rem}.racm-root .w-2{width:.5rem}.racm-root .w-20{width:5rem}.racm-root .w-24{width:6rem}.racm-root .w-3{width:.75rem}.racm-root .w-32{width:8rem}.racm-root .w-4{width:1rem}.racm-root .w-48{width:12rem}.racm-root .w-5{width:1.25rem}.racm-root .w-6{width:1.5rem}.racm-root .w-64{width:16rem}.racm-root .w-7{width:1.75rem}.racm-root .w-8{width:2rem}.racm-root .w-80{width:20rem}.racm-root .w-\\[260px\\]{width:260px}.racm-root .w-\\[28rem\\]{width:28rem}.racm-root .w-\\[36px\\]{width:36px}.racm-root .w-\\[42\\%\\]{width:42%}.racm-root .w-full{width:100%}.racm-root .w-max{width:-moz-max-content;width:max-content}.racm-root .min-w-0{min-width:0px}.racm-root .min-w-\\[100px\\]{min-width:100px}.racm-root .min-w-\\[150px\\]{min-width:150px}.racm-root .min-w-\\[220px\\]{min-width:220px}.racm-root .min-w-\\[40px\\]{min-width:40px}.racm-root .min-w-\\[78px\\]{min-width:78px}.racm-root .max-w-2xl{max-width:42rem}.racm-root .max-w-4xl{max-width:56rem}.racm-root .max-w-5xl{max-width:64rem}.racm-root .max-w-\\[200px\\]{max-width:200px}.racm-root .max-w-\\[300px\\]{max-width:300px}.racm-root .max-w-full{max-width:100%}.racm-root .max-w-lg{max-width:32rem}.racm-root .max-w-md{max-width:28rem}.racm-root .max-w-xs{max-width:20rem}.racm-root .flex-1{flex:1 1 0%}.racm-root .flex-shrink{flex-shrink:1}.racm-root .flex-shrink-0,.racm-root .shrink-0{flex-shrink:0}.racm-root .border-collapse{border-collapse:collapse}.racm-root .-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .translate-x-0{--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .translate-x-full{--tw-translate-x: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .scale-95{--tw-scale-x: .95;--tw-scale-y: .95;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.racm-root .animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes spin{to{transform:rotate(360deg)}}.racm-root .animate-spin{animation:spin 1s linear infinite}.racm-root .cursor-not-allowed{cursor:not-allowed}.racm-root .cursor-pointer{cursor:pointer}.racm-root .select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.racm-root .resize{resize:both}.racm-root .grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.racm-root .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.racm-root .grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.racm-root .flex-col{flex-direction:column}.racm-root .items-center{align-items:center}.racm-root .items-stretch{align-items:stretch}.racm-root .justify-end{justify-content:flex-end}.racm-root .justify-center{justify-content:center}.racm-root .justify-between{justify-content:space-between}.racm-root .gap-1{gap:.25rem}.racm-root .gap-1\\.5{gap:.375rem}.racm-root .gap-2{gap:.5rem}.racm-root .gap-2\\.5{gap:.625rem}.racm-root .gap-3{gap:.75rem}.racm-root .gap-4{gap:1rem}.racm-root .gap-6{gap:1.5rem}.racm-root .-space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(-.5rem * var(--tw-space-x-reverse));margin-left:calc(-.5rem * calc(1 - var(--tw-space-x-reverse)))}.racm-root .space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.racm-root .space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.racm-root .space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.25rem * var(--tw-space-y-reverse))}.racm-root .space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.racm-root .space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.racm-root .divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse))}.racm-root .divide-gray-100>:not([hidden])~:not([hidden]){--tw-divide-opacity: 1;border-color:rgb(243 244 246 / var(--tw-divide-opacity))}.racm-root .overflow-auto{overflow:auto}.racm-root .overflow-hidden{overflow:hidden}.racm-root .overflow-x-auto{overflow-x:auto}.racm-root .overflow-y-auto{overflow-y:auto}.racm-root .truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.racm-root .text-ellipsis{text-overflow:ellipsis}.racm-root .whitespace-nowrap{white-space:nowrap}.racm-root .break-words{overflow-wrap:break-word}.racm-root .rounded{border-radius:.25rem}.racm-root .rounded-full{border-radius:9999px}.racm-root .rounded-lg{border-radius:var(--radius)}.racm-root .rounded-md{border-radius:calc(var(--radius) - 2px)}.racm-root .rounded-sm{border-radius:calc(var(--radius) - 4px)}.racm-root .rounded-xl{border-radius:.75rem}.racm-root .border{border-width:1px}.racm-root .border-2{border-width:2px}.racm-root .border-4{border-width:4px}.racm-root .border-8{border-width:8px}.racm-root .border-b{border-bottom-width:1px}.racm-root .border-l{border-left-width:1px}.racm-root .border-r{border-right-width:1px}.racm-root .border-t{border-top-width:1px}.racm-root .border-t-2{border-top-width:2px}.racm-root .border-dashed{border-style:dashed}.racm-root .border-blue-300{--tw-border-opacity: 1;border-color:rgb(147 197 253 / var(--tw-border-opacity))}.racm-root .border-blue-500{--tw-border-opacity: 1;border-color:rgb(59 130 246 / var(--tw-border-opacity))}.racm-root .border-gray-100{--tw-border-opacity: 1;border-color:rgb(243 244 246 / var(--tw-border-opacity))}.racm-root .border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.racm-root .border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity))}.racm-root .border-green-300{--tw-border-opacity: 1;border-color:rgb(134 239 172 / var(--tw-border-opacity))}.racm-root .border-green-600{--tw-border-opacity: 1;border-color:rgb(22 163 74 / var(--tw-border-opacity))}.racm-root .border-primary,.racm-root .border-primary-500{border-color:var(--primary-500, #3b82f6)}.racm-root .border-purple-300{--tw-border-opacity: 1;border-color:rgb(216 180 254 / var(--tw-border-opacity))}.racm-root .border-red-300{--tw-border-opacity: 1;border-color:rgb(252 165 165 / var(--tw-border-opacity))}.racm-root .border-red-500{--tw-border-opacity: 1;border-color:rgb(239 68 68 / var(--tw-border-opacity))}.racm-root .border-red-600{--tw-border-opacity: 1;border-color:rgb(220 38 38 / var(--tw-border-opacity))}.racm-root .border-teal-300{--tw-border-opacity: 1;border-color:rgb(94 234 212 / var(--tw-border-opacity))}.racm-root .border-white{--tw-border-opacity: 1;border-color:rgb(255 255 255 / var(--tw-border-opacity))}.racm-root .border-white\\/30{border-color:#ffffff4d}.racm-root .border-yellow-300{--tw-border-opacity: 1;border-color:rgb(253 224 71 / var(--tw-border-opacity))}.racm-root .border-t-gray-200{--tw-border-opacity: 1;border-top-color:rgb(229 231 235 / var(--tw-border-opacity))}.racm-root .border-t-white{--tw-border-opacity: 1;border-top-color:rgb(255 255 255 / var(--tw-border-opacity))}.racm-root .\\!bg-transparent{background-color:transparent!important}.racm-root .bg-black\\/50{background-color:#00000080}.racm-root .bg-black\\/70{background-color:#000000b3}.racm-root .bg-blue-100{--tw-bg-opacity: 1;background-color:rgb(219 234 254 / var(--tw-bg-opacity))}.racm-root .bg-blue-50{--tw-bg-opacity: 1;background-color:rgb(239 246 255 / var(--tw-bg-opacity))}.racm-root .bg-blue-500\\/10{background-color:#3b82f61a}.racm-root .bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.racm-root .bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.racm-root .bg-gray-300{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity))}.racm-root .bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.racm-root .bg-gray-500{--tw-bg-opacity: 1;background-color:rgb(107 114 128 / var(--tw-bg-opacity))}.racm-root .bg-gray-900{--tw-bg-opacity: 1;background-color:rgb(17 24 39 / var(--tw-bg-opacity))}.racm-root .bg-green-100{--tw-bg-opacity: 1;background-color:rgb(220 252 231 / var(--tw-bg-opacity))}.racm-root .bg-green-600{--tw-bg-opacity: 1;background-color:rgb(22 163 74 / var(--tw-bg-opacity))}.racm-root .bg-primary{background-color:var(--primary-500, #3b82f6)}.racm-root .bg-purple-100{--tw-bg-opacity: 1;background-color:rgb(243 232 255 / var(--tw-bg-opacity))}.racm-root .bg-red-100{--tw-bg-opacity: 1;background-color:rgb(254 226 226 / var(--tw-bg-opacity))}.racm-root .bg-red-500{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.racm-root .bg-red-500\\/95{background-color:#ef4444f2}.racm-root .bg-red-600{--tw-bg-opacity: 1;background-color:rgb(220 38 38 / var(--tw-bg-opacity))}.racm-root .bg-teal-100{--tw-bg-opacity: 1;background-color:rgb(204 251 241 / var(--tw-bg-opacity))}.racm-root .bg-transparent{background-color:transparent}.racm-root .bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.racm-root .bg-white\\/90{background-color:#ffffffe6}.racm-root .bg-yellow-100{--tw-bg-opacity: 1;background-color:rgb(254 249 195 / var(--tw-bg-opacity))}.racm-root .bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}.racm-root .to-transparent{--tw-gradient-to: transparent var(--tw-gradient-to-position)}.racm-root .object-contain{-o-object-fit:contain;object-fit:contain}.racm-root .object-cover{-o-object-fit:cover;object-fit:cover}.racm-root .p-1{padding:.25rem}.racm-root .p-2{padding:.5rem}.racm-root .p-4{padding:1rem}.racm-root .p-5{padding:1.25rem}.racm-root .px-2{padding-left:.5rem;padding-right:.5rem}.racm-root .px-3{padding-left:.75rem;padding-right:.75rem}.racm-root .px-4{padding-left:1rem;padding-right:1rem}.racm-root .px-5{padding-left:1.25rem;padding-right:1.25rem}.racm-root .px-6{padding-left:1.5rem;padding-right:1.5rem}.racm-root .px-8{padding-left:2rem;padding-right:2rem}.racm-root .py-1{padding-top:.25rem;padding-bottom:.25rem}.racm-root .py-2{padding-top:.5rem;padding-bottom:.5rem}.racm-root .py-3{padding-top:.75rem;padding-bottom:.75rem}.racm-root .py-4{padding-top:1rem;padding-bottom:1rem}.racm-root .py-6{padding-top:1.5rem;padding-bottom:1.5rem}.racm-root .pl-9{padding-left:2.25rem}.racm-root .pr-10{padding-right:2.5rem}.racm-root .pr-2{padding-right:.5rem}.racm-root .pr-3{padding-right:.75rem}.racm-root .text-left{text-align:left}.racm-root .text-center{text-align:center}.racm-root .text-base{font-size:1rem;line-height:1.5rem}.racm-root .text-lg{font-size:1.125rem;line-height:1.75rem}.racm-root .text-sm{font-size:.875rem;line-height:1.25rem}.racm-root .text-xl{font-size:1.25rem;line-height:1.75rem}.racm-root .text-xs{font-size:.75rem;line-height:1rem}.racm-root .font-bold{font-weight:700}.racm-root .font-medium{font-weight:500}.racm-root .font-semibold{font-weight:600}.racm-root .uppercase{text-transform:uppercase}.racm-root .italic{font-style:italic}.racm-root .leading-none{line-height:1}.racm-root .leading-snug{line-height:1.375}.racm-root .leading-tight{line-height:1.25}.racm-root .tracking-wide{letter-spacing:.025em}.racm-root .tracking-wider{letter-spacing:.05em}.racm-root .text-black{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.racm-root .text-blue-600{--tw-text-opacity: 1;color:rgb(37 99 235 / var(--tw-text-opacity))}.racm-root .text-blue-700{--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity))}.racm-root .text-blue-800{--tw-text-opacity: 1;color:rgb(30 64 175 / var(--tw-text-opacity))}.racm-root .text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.racm-root .text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.racm-root .text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.racm-root .text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.racm-root .text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity))}.racm-root .text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.racm-root .text-green-600{--tw-text-opacity: 1;color:rgb(22 163 74 / var(--tw-text-opacity))}.racm-root .text-green-700{--tw-text-opacity: 1;color:rgb(21 128 61 / var(--tw-text-opacity))}.racm-root .text-green-800{--tw-text-opacity: 1;color:rgb(22 101 52 / var(--tw-text-opacity))}.racm-root .text-primary{color:var(--primary-500, #3b82f6)}.racm-root .text-purple-700{--tw-text-opacity: 1;color:rgb(126 34 206 / var(--tw-text-opacity))}.racm-root .text-purple-800{--tw-text-opacity: 1;color:rgb(107 33 168 / var(--tw-text-opacity))}.racm-root .text-red-500{--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity))}.racm-root .text-red-600{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity))}.racm-root .text-red-700{--tw-text-opacity: 1;color:rgb(185 28 28 / var(--tw-text-opacity))}.racm-root .text-red-800{--tw-text-opacity: 1;color:rgb(153 27 27 / var(--tw-text-opacity))}.racm-root .text-teal-700{--tw-text-opacity: 1;color:rgb(15 118 110 / var(--tw-text-opacity))}.racm-root .text-teal-800{--tw-text-opacity: 1;color:rgb(17 94 89 / var(--tw-text-opacity))}.racm-root .text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.racm-root .text-yellow-700{--tw-text-opacity: 1;color:rgb(161 98 7 / var(--tw-text-opacity))}.racm-root .text-yellow-800{--tw-text-opacity: 1;color:rgb(133 77 14 / var(--tw-text-opacity))}.racm-root .underline{text-decoration-line:underline}.racm-root .placeholder-gray-400::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.racm-root .placeholder-gray-400::placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.racm-root .placeholder-gray-500::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(107 114 128 / var(--tw-placeholder-opacity))}.racm-root .placeholder-gray-500::placeholder{--tw-placeholder-opacity: 1;color:rgb(107 114 128 / var(--tw-placeholder-opacity))}.racm-root .opacity-100{opacity:1}.racm-root .opacity-50{opacity:.5}.racm-root .opacity-60{opacity:.6}.racm-root .opacity-70{opacity:.7}.racm-root .opacity-75{opacity:.75}.racm-root .opacity-90{opacity:.9}.racm-root .shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root .shadow-2xl{--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / .25);--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root .shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root .shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root .shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root .shadow-xl{--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root .outline-none{outline:2px solid transparent;outline-offset:2px}.racm-root .outline{outline-style:solid}.racm-root .ring-0{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.racm-root .ring-blue-100{--tw-ring-opacity: 1;--tw-ring-color: rgb(219 234 254 / var(--tw-ring-opacity))}.racm-root .filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.racm-root .backdrop-blur-sm{--tw-backdrop-blur: blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.racm-root .transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.racm-root .transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.racm-root .transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.racm-root .transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.racm-root .transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.racm-root .duration-200{transition-duration:.2s}.racm-root .duration-300{transition-duration:.3s}.racm-root .ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.racm-root .primary-bg{background-color:var(--primary-500)}.racm-root .primary-bg-light{background-color:var(--primary-100)}.racm-root .primary-bg-dark{background-color:var(--primary-700)}.racm-root .primary-text{color:var(--primary-600)}.racm-root .primary-border{border-color:var(--primary-300)}.racm-root .primary-hover:hover{background-color:var(--primary-600)}.racm-root .opacity-0{opacity:0}.racm-root{--foreground-rgb: 0, 0, 0;--background-start-rgb: 214, 219, 220;--background-end-rgb: 255, 255, 255}@media (prefers-color-scheme: dark){.racm-root{--foreground-rgb: 255, 255, 255;--background-start-rgb: 0, 0, 0;--background-end-rgb: 0, 0, 0}}.racm-root{height:100%}.racm-root{--scrollbar-thumb: #d1d5db;--scrollbar-thumb-hover: #9ca3af}.racm-root .dark{--scrollbar-thumb: #4b5563;--scrollbar-thumb-hover: #6b7280}.racm-root *{scrollbar-width:thin;scrollbar-color:var(--scrollbar-thumb) transparent}.racm-root *::-webkit-scrollbar{width:6px;height:6px}.racm-root *::-webkit-scrollbar-track{background:transparent}.racm-root *::-webkit-scrollbar-thumb{background-color:var(--scrollbar-thumb);border-radius:3px}.racm-root *::-webkit-scrollbar-thumb:hover{background-color:var(--scrollbar-thumb-hover)}.racm-root h1{font-size:1.5rem;line-height:2rem;font-weight:700;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.racm-root :is(.dark h1){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.racm-root p{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.racm-root :is(.dark p){--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.racm-root .table-search-field{position:relative;width:100%}@media (min-width: 640px){.racm-root .table-search-field{min-width:300px!important}}.racm-root .table-search-field .search-icon{position:absolute;left:.75rem;top:50%;height:1rem;width:1rem;--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.racm-root :is(.dark .table-search-field .search-icon){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.racm-root .table-search-field input{height:36px;width:100%;border-radius:calc(var(--radius) - 2px);border-width:1px;--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity));padding:.75rem 1rem .75rem 2.25rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.racm-root .table-search-field input::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(107 114 128 / var(--tw-placeholder-opacity))}.racm-root .table-search-field input::placeholder{--tw-placeholder-opacity: 1;color:rgb(107 114 128 / var(--tw-placeholder-opacity))}.racm-root .table-search-field input:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-opacity: 1;--tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity))}.racm-root .table-search-field input:disabled{opacity:.5}.racm-root :is(.dark .table-search-field input){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.racm-root :is(.dark .table-search-field input)::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.racm-root :is(.dark .table-search-field input)::placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.racm-root :is(.dark .table-search-field input){--tw-ring-opacity: 1;--tw-ring-color: rgb(191 219 254 / var(--tw-ring-opacity))}.racm-root .filter-button-wrapper{position:relative;width:100%}@media (min-width: 640px){.racm-root .filter-button-wrapper{width:auto!important}}.racm-root .filter-button-wrapper .red-dot{position:absolute;top:.25rem;right:.25rem;height:.5rem;width:.5rem;border-radius:9999px;--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.racm-root .table-container{overflow:hidden;border-radius:var(--radius);border-width:1px;--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root :is(.dark .table-container){--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.racm-root .table-container table{min-width:100%}.racm-root .table-container table>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse));--tw-divide-opacity: 1;border-color:rgb(229 231 235 / var(--tw-divide-opacity))}.racm-root :is(.dark .table-container table)>:not([hidden])~:not([hidden]){--tw-divide-opacity: 1;border-color:rgb(55 65 81 / var(--tw-divide-opacity))}.racm-root .table-container thead{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.racm-root :is(.dark .table-container thead){background-color:#37415199}.racm-root .table-container tbody>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse));--tw-divide-opacity: 1;border-color:rgb(229 231 235 / var(--tw-divide-opacity))}.racm-root .table-container tbody{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.racm-root :is(.dark .table-container tbody)>:not([hidden])~:not([hidden]){--tw-divide-opacity: 1;border-color:rgb(55 65 81 / var(--tw-divide-opacity))}.racm-root :is(.dark .table-container tbody){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.racm-root .table-container .table-head-data{min-width:-moz-max-content;min-width:max-content;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:1rem 1.5rem;text-align:left;font-size:.75rem;line-height:1rem;font-weight:500;text-transform:uppercase;letter-spacing:.05em;--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.racm-root :is(.dark .table-container .table-head-data){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.racm-root .table-container .no-data-message{padding-top:2.5rem;padding-bottom:2.5rem;text-align:center;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.racm-root :is(.dark .table-container .no-data-message){--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.racm-root .table-container .table-row{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.racm-root .table-container .table-row:hover{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.racm-root :is(.dark .table-container .table-row:hover){background-color:#1e40af1a}.racm-root .table-container .table-data{min-width:-moz-max-content;min-width:max-content;padding:1rem 1.5rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.racm-root :is(.dark .table-container .table-data){--tw-text-opacity: 1;color:rgb(243 244 246 / var(--tw-text-opacity))}.racm-root .table-container .pagination-wrapper{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:.75rem;border-top-width:1px;--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity));padding:.75rem 1.5rem}.racm-root :is(.dark .table-container .pagination-wrapper){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity));background-color:#37415199}.racm-root .table-container .pagination-wrapper span{font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.racm-root :is(.dark .table-container .pagination-wrapper span){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.racm-root .table-container .pagination-wrapper .rows-number-select{border-radius:calc(var(--radius) - 2px);border-width:1px;--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:.25rem .5rem;font-size:.875rem;line-height:1.25rem}.racm-root .table-container .pagination-wrapper .rows-number-select:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-opacity: 1;--tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity))}.racm-root :is(.dark .table-container .pagination-wrapper .rows-number-select){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.racm-root .table-container .pagination-wrapper .arrow-icons{border-radius:calc(var(--radius) - 2px);padding:.5rem;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity));transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.racm-root .table-container .pagination-wrapper .arrow-icons:hover{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.racm-root .table-container .pagination-wrapper .arrow-icons:disabled{opacity:.5}.racm-root :is(.dark .table-container .pagination-wrapper .arrow-icons){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.racm-root :is(.dark .table-container .pagination-wrapper .arrow-icons:hover){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity))}.racm-root .no-spinner::-webkit-outer-spin-button,.racm-root .no-spinner::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.racm-root .no-spinner{-moz-appearance:textfield}.racm-root .tox.tox-tinymce .tox-edit-area:before{border:0!important;box-shadow:none!important}.racm-root .hover\\:-translate-y-0:hover{--tw-translate-y: -0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .hover\\:-translate-y-0\\.5:hover{--tw-translate-y: -.125rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .hover\\:bg-blue-50:hover{--tw-bg-opacity: 1;background-color:rgb(239 246 255 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-gray-100:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-gray-200:hover{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-gray-300:hover{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-green-50:hover{--tw-bg-opacity: 1;background-color:rgb(240 253 244 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-green-700:hover{--tw-bg-opacity: 1;background-color:rgb(21 128 61 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-primary-50:hover{background-color:var(--primary-50, #eff6ff)}.racm-root .hover\\:bg-primary-600:hover{background-color:var(--primary-600, #2563eb)}.racm-root .hover\\:bg-red-50:hover{--tw-bg-opacity: 1;background-color:rgb(254 242 242 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-red-600:hover{--tw-bg-opacity: 1;background-color:rgb(220 38 38 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-red-700:hover{--tw-bg-opacity: 1;background-color:rgb(185 28 28 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-white:hover{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-white\\/20:hover{background-color:#fff3}.racm-root .hover\\:text-gray-600:hover{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.racm-root .hover\\:shadow-md:hover{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root .focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.racm-root .focus\\:ring-1:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.racm-root .focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.racm-root .focus\\:ring-blue-200:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(191 219 254 / var(--tw-ring-opacity))}.racm-root .focus\\:ring-blue-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity))}.racm-root .focus\\:ring-blue-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity))}.racm-root .focus\\:ring-gray-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity))}.racm-root .focus\\:ring-green-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(34 197 94 / var(--tw-ring-opacity))}.racm-root .focus\\:ring-primary-500:focus{--tw-ring-color: var(--primary-500, #3b82f6)}.racm-root .focus\\:ring-red-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(239 68 68 / var(--tw-ring-opacity))}.racm-root .focus\\:ring-offset-2:focus{--tw-ring-offset-width: 2px}.racm-root .focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.racm-root .focus-visible\\:ring-2:focus-visible{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.racm-root .focus-visible\\:ring-blue-400:focus-visible{--tw-ring-opacity: 1;--tw-ring-color: rgb(96 165 250 / var(--tw-ring-opacity))}.racm-root .focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width: 2px}.racm-root .disabled\\:pointer-events-none:disabled{pointer-events:none}.racm-root .disabled\\:opacity-50:disabled{opacity:.5}.racm-root .group:hover .group-hover\\:opacity-100{opacity:1}.racm-root .peer:checked~.peer-checked\\:translate-x-5{--tw-translate-x: 1.25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .peer:checked~.peer-checked\\:bg-primary-600{background-color:var(--primary-600, #2563eb)}.racm-root .peer:focus~.peer-focus\\:outline-none{outline:2px solid transparent;outline-offset:2px}.racm-root .peer:disabled~.peer-disabled\\:cursor-not-allowed{cursor:not-allowed}.racm-root .peer:disabled~.peer-disabled\\:opacity-50{opacity:.5}.racm-root :is(.dark .dark\\:divide-gray-800)>:not([hidden])~:not([hidden]){--tw-divide-opacity: 1;border-color:rgb(31 41 55 / var(--tw-divide-opacity))}.racm-root :is(.dark .dark\\:border-blue-700){--tw-border-opacity: 1;border-color:rgb(29 78 216 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-gray-600){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-gray-700){--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-gray-700\\/60){border-color:#37415199}.racm-root :is(.dark .dark\\:border-gray-800){--tw-border-opacity: 1;border-color:rgb(31 41 55 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-green-700){--tw-border-opacity: 1;border-color:rgb(21 128 61 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-purple-700){--tw-border-opacity: 1;border-color:rgb(126 34 206 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-red-700){--tw-border-opacity: 1;border-color:rgb(185 28 28 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-teal-700){--tw-border-opacity: 1;border-color:rgb(15 118 110 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-yellow-700){--tw-border-opacity: 1;border-color:rgb(161 98 7 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:bg-black){--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:bg-black\\/80){background-color:#000c}.racm-root :is(.dark .dark\\:bg-blue-900\\/20){background-color:#1e3a8a33}.racm-root :is(.dark .dark\\:bg-blue-900\\/30){background-color:#1e3a8a4d}.racm-root :is(.dark .dark\\:bg-gray-600){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:bg-gray-700){--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:bg-gray-800){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:bg-gray-800\\/80){background-color:#1f2937cc}.racm-root :is(.dark .dark\\:bg-gray-900){--tw-bg-opacity: 1;background-color:rgb(17 24 39 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:bg-gray-900\\/30){background-color:#1118274d}.racm-root :is(.dark .dark\\:bg-green-900\\/30){background-color:#14532d4d}.racm-root :is(.dark .dark\\:bg-purple-900\\/30){background-color:#581c874d}.racm-root :is(.dark .dark\\:bg-red-900\\/30){background-color:#7f1d1d4d}.racm-root :is(.dark .dark\\:bg-teal-900\\/30){background-color:#134e4a4d}.racm-root :is(.dark .dark\\:bg-yellow-900\\/30){background-color:#713f124d}.racm-root :is(.dark .dark\\:text-blue-300){--tw-text-opacity: 1;color:rgb(147 197 253 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-blue-400){--tw-text-opacity: 1;color:rgb(96 165 250 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-gray-100){--tw-text-opacity: 1;color:rgb(243 244 246 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-gray-200){--tw-text-opacity: 1;color:rgb(229 231 235 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-gray-300){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-gray-400){--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-gray-500){--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-green-300){--tw-text-opacity: 1;color:rgb(134 239 172 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-purple-300){--tw-text-opacity: 1;color:rgb(216 180 254 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-red-300){--tw-text-opacity: 1;color:rgb(252 165 165 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-red-500){--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-teal-300){--tw-text-opacity: 1;color:rgb(94 234 212 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-white){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-yellow-300){--tw-text-opacity: 1;color:rgb(253 224 71 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:placeholder-gray-400)::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.racm-root :is(.dark .dark\\:placeholder-gray-400)::placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.racm-root :is(.dark .dark\\:hover\\:bg-gray-600:hover){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:hover\\:bg-gray-700:hover){--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:hover\\:bg-gray-800:hover){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:hover\\:text-gray-200:hover){--tw-text-opacity: 1;color:rgb(229 231 235 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:hover\\:text-gray-300:hover){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:focus\\:ring-blue-200:focus){--tw-ring-opacity: 1;--tw-ring-color: rgb(191 219 254 / var(--tw-ring-opacity))}.racm-root :is(.dark .dark\\:focus\\:ring-blue-400:focus){--tw-ring-opacity: 1;--tw-ring-color: rgb(96 165 250 / var(--tw-ring-opacity))}.racm-root :is(.dark .dark\\:focus\\:ring-gray-500:focus){--tw-ring-opacity: 1;--tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity))}.racm-root :is(.dark .dark\\:focus\\:ring-gray-600:focus){--tw-ring-opacity: 1;--tw-ring-color: rgb(75 85 99 / var(--tw-ring-opacity))}.racm-root :is(.dark .dark\\:focus\\:ring-offset-gray-800:focus){--tw-ring-offset-color: #1f2937}@media (min-width: 640px){.racm-root .sm\\:\\!w-auto{width:auto!important}.racm-root .sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.racm-root .sm\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.racm-root .sm\\:\\!flex-row{flex-direction:row!important}.racm-root .sm\\:\\!flex-wrap{flex-wrap:wrap!important}.racm-root .sm\\:\\!items-center{align-items:center!important}.racm-root .sm\\:\\!px-6{padding-left:1.5rem!important;padding-right:1.5rem!important}.racm-root .sm\\:opacity-0{opacity:0}.racm-root .group:hover .sm\\:group-hover\\:opacity-100{opacity:1}}@media (min-width: 1024px){.racm-root .lg\\:\\!w-auto{width:auto!important}.racm-root .lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.racm-root .lg\\:\\!flex-row{flex-direction:row!important}.racm-root .lg\\:\\!items-end{align-items:flex-end!important}.racm-root .lg\\:\\!justify-between{justify-content:space-between!important}}.racm-root .\\[\\&\\>svg\\]\\:h-3\\.5>svg{height:.875rem}.racm-root .\\[\\&\\>svg\\]\\:h-4>svg{height:1rem}.racm-root .\\[\\&\\>svg\\]\\:w-3\\.5>svg{width:.875rem}.racm-root .\\[\\&\\>svg\\]\\:w-4>svg{width:1rem}', Ra = (p, u = "DD MMM YYYY") => {
  if (!p) return "N/A";
  const n = new Date(p);
  if (isNaN(n.getTime())) return "Invalid Date";
  const i = (e) => String(e).padStart(2, "0"), o = {
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
  return u.replace(
    /YYYY|YY|MMMM|MMM|MM|M|DD|D|dddd|ddd|HH|hh|mm|ss|A/g,
    (e) => String(o[e])
  );
}, Yc = (p, u, n = []) => {
  if (!(u != null && u.trim())) return p;
  const i = u.toLowerCase(), o = (e) => e == null ? [] : typeof e == "object" ? Object.values(e).flatMap(o) : [String(e)];
  return p.filter((e) => {
    let m = [];
    return n.length > 0 ? n.forEach((l) => {
      e[l] !== void 0 && m.push(...o(e[l]));
    }) : m = o(e), m.some(
      (l) => l.toLowerCase().includes(i)
    );
  });
}, te = (...p) => p.filter(Boolean).join(" "), Z = {
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
}, Qt = qr.forwardRef(
  ({
    className: p = "",
    variant: u = "contained",
    color: n = "default",
    size: i = "default",
    fullWidth: o = !1,
    children: e,
    ...m
  }, l) => {
    var Y;
    const R = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", A = {
      sm: "h-8 px-3 rounded-md text-sm",
      md: "h-9 px-4 rounded-md text-sm",
      lg: "h-11 px-6 rounded-md text-base",
      xl: "h-12 px-8 rounded-lg text-lg",
      default: "h-9 px-4 rounded-md text-sm"
    }, I = {
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
    }, M = ((Y = I[n]) == null ? void 0 : Y[u]) || I.default.contained, E = A[i] || A.default, j = te(
      Z.button.root,
      R,
      M,
      E,
      o ? "w-full" : "",
      p
    );
    return /* @__PURE__ */ s(
      "button",
      {
        ref: l,
        type: m.type || "button",
        className: j,
        ...m,
        children: e
      }
    );
  }
);
Qt.displayName = "Button";
function Pt({
  label: p,
  required: u = !1,
  infoText: n = ""
}) {
  return /* @__PURE__ */ s(Ye, { children: /* @__PURE__ */ z(
    "label",
    {
      className: te(
        Z.field.label,
        "flex text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
      ),
      children: [
        p,
        u && /* @__PURE__ */ s("span", { className: "ml-1", children: "*" }),
        n && /* @__PURE__ */ z("span", { className: "ml-2 relative group inline-flex items-center cursor-pointer", children: [
          /* @__PURE__ */ s(Nc, { className: "w-4 h-4 text-gray-500 dark:text-gray-400" }),
          /* @__PURE__ */ s(
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
const Wr = [
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
], Kc = ({
  options: p = [],
  value: u = "",
  defaultValue: n = "",
  onChange: i,
  placeholder: o = "Select option",
  className: e = "",
  disabled: m = !1,
  search: l = !1,
  label: R = "",
  required: A = !1,
  name: I = "",
  parentClass: M = "",
  multiple: E = !1,
  dropdownMaxHeight: j = "",
  formData: Y = {},
  countriesList: G = !1,
  dependencyKey: ae = "",
  errorMessage: P = ""
}) => {
  var je, jt;
  const [U, X] = pe(!1), [se, ie] = pe(""), [le, ye] = pe(!0), q = Mt(null), we = Mt(null), he = Mt(null), [Ee, Fe] = pe(
    []
  ), [Ue, pt] = pe({
    top: 0,
    left: 0,
    width: 0
  }), ct = typeof document < "u" ? ((je = q.current) == null ? void 0 : je.closest(".racm-root")) || document.body : null, xe = u || u === !1 ? u : n, _e = (ue) => ue == null || ue === "" ? "" : String(typeof ue == "boolean" ? ue : ue ?? ""), Me = () => Wr.map((He) => ({
    value: He.label,
    label: He.label,
    code: He.code
  }));
  Xe(
    () => {
      (async () => {
        if (G == !0)
          Fe(Me());
        else if (typeof p == "function") {
          const He = await p(Y);
          Fe(He || []);
        } else
          Fe(p || []);
      })();
    },
    ae ? [p, Y == null ? void 0 : Y[ae]] : [p]
  );
  const Te = E ? (xe || []).map(_e) : _e(xe), Ce = Ee.filter(
    (ue) => ue.label.toLowerCase().includes(se.toLowerCase())
  ), Ae = (ue) => {
    const He = _e(ue);
    return E ? Te.includes(He) : He === Te;
  };
  Xe(() => {
    const ue = (He) => {
      var fe;
      q.current && !q.current.contains(He.target) && !((fe = we.current) != null && fe.contains(He.target)) && (X(!1), ie(""));
    };
    return document.addEventListener("mousedown", ue), () => document.removeEventListener("mousedown", ue);
  }, []), Xe(() => {
    if (!U || !q.current) return;
    const ue = () => {
      if (!q.current) return;
      const He = q.current.getBoundingClientRect(), it = window.innerHeight - He.bottom < (typeof j == "number" ? j : 200);
      ye(it), pt({
        top: it ? He.top - 4 : He.bottom + 4,
        left: He.left,
        width: He.width
      });
    };
    return ue(), window.addEventListener("resize", ue), window.addEventListener("scroll", ue, !0), () => {
      window.removeEventListener("resize", ue), window.removeEventListener("scroll", ue, !0);
    };
  }, [U]), Xe(() => {
    U && he.current && he.current.focus();
  }, [U]);
  const yt = (ue) => {
    let He = ue;
    if (ue === "true" ? He = !0 : ue === "false" && (He = !1), E) {
      const fe = Te.includes(
        _e(ue)
      );
      let Le;
      fe ? Le = (Array.isArray(u) ? u : []).filter(
        (rt) => _e(rt) !== _e(ue)
      ) : Le = [...Array.isArray(u) ? u : [], He], i == null || i(Le);
    } else
      i == null || i(He), X(!1);
    ie("");
  }, Ke = E ? Ee.filter((ue) => Ae(ue.value)).map((ue) => ue.label).join(", ") : (jt = Ee.find((ue) => Ae(ue.value))) == null ? void 0 : jt.label;
  return Xe(() => {
    (xe || xe === !1) && setTimeout(() => {
      i == null || i(xe);
    }, 100);
  }, []), /* @__PURE__ */ z(
    "div",
    {
      className: te(
        Z.field.wrapper,
        M || "col-span-12"
      ),
      children: [
        /* @__PURE__ */ s(Pt, { label: R, required: A }),
        /* @__PURE__ */ z(
          "div",
          {
            className: te(Z.field.input, "relative", e),
            ref: q,
            children: [
              /* @__PURE__ */ s(
                "select",
                {
                  name: "hidden_select_for_validation",
                  value: E ? Ke ? Ke.split(", ") : [] : Ke || "",
                  required: A,
                  multiple: E,
                  id: `field-${I}`,
                  className: "absolute opacity-0 right-1/2 top-[80%] -translate-x-1/2 -translate-y-1/2 pointer-events-none h-[10px]",
                  onChange: () => {
                  },
                  children: E ? Ke == null ? void 0 : Ke.split(", ").map((ue) => /* @__PURE__ */ s("option", { value: ue, children: ue }, ue)) : /* @__PURE__ */ s("option", { hidden: !0, value: Ke, children: Ke })
                }
              ),
              /* @__PURE__ */ z(
                "button",
                {
                  type: "button",
                  onClick: () => !m && X(!U),
                  disabled: m,
                  className: `w-full h-10 px-3 border border-gray-300 dark:border-gray-600 rounded-md text-left text-sm flex items-center justify-between 
          ${Ke ? "dark:text-white" : "text-gray-500 dark:text-gray-400"} 
          ${m ? "opacity-50 cursor-not-allowed" : "dark:bg-gray-700"}
          ${P ? "border-red-500" : ""}`,
                  children: [
                    /* @__PURE__ */ s("span", { className: "truncate", children: Ke || o }),
                    /* @__PURE__ */ s(
                      ho,
                      {
                        className: `w-4 h-4 transition-transform ${U ? "rotate-180" : ""}`
                      }
                    )
                  ]
                }
              ),
              U && ct && Qa(
                /* @__PURE__ */ z(
                  "div",
                  {
                    ref: we,
                    className: "fixed z-50 border rounded-md bg-white dark:bg-gray-700 shadow-lg",
                    style: {
                      top: Ue.top,
                      left: Ue.left,
                      width: Ue.width,
                      transform: le ? "translateY(-100%)" : void 0
                    },
                    children: [
                      l && /* @__PURE__ */ s("div", { className: "p-2 border-b border-gray-200 dark:border-gray-600", children: /* @__PURE__ */ z("div", { className: "relative", children: [
                        /* @__PURE__ */ s(Pa, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }),
                        /* @__PURE__ */ s(
                          "input",
                          {
                            ref: he,
                            type: "text",
                            value: se,
                            onChange: (ue) => ie(ue.target.value),
                            placeholder: "Search...",
                            className: "w-full pl-9 pr-3 py-2 text-sm border rounded-md bg-white dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
                          }
                        )
                      ] }) }),
                      /* @__PURE__ */ s(
                        "div",
                        {
                          className: "max-h-40 overflow-y-auto",
                          style: {
                            maxHeight: j || ""
                          },
                          children: Ce.length > 0 ? Ce.map((ue) => /* @__PURE__ */ z(
                            "button",
                            {
                              type: "button",
                              onClick: () => yt(String(ue.value)),
                              className: `w-full px-3 py-2 text-left text-sm flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 
                    ${Ae(ue.value) ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300" : ""}`,
                              children: [
                                /* @__PURE__ */ z("div", { className: "flex gap-2 items-center", children: [
                                  G && (ue == null ? void 0 : ue.code) && /* @__PURE__ */ s(
                                    "img",
                                    {
                                      src: `https://flagcdn.com/w20/${ue == null ? void 0 : ue.code.toLowerCase()}.png`,
                                      alt: ue.code,
                                      className: "w-5 h-3 object-cover"
                                    }
                                  ),
                                  /* @__PURE__ */ s("span", { children: ue.label })
                                ] }),
                                E && Ae(ue.value) && /* @__PURE__ */ s(Rc, { className: "w-4 h-4" })
                              ]
                            },
                            String(ue.value)
                          )) : /* @__PURE__ */ s("div", { className: "px-3 py-2 text-sm text-gray-500 dark:text-gray-400", children: "No options found" })
                        }
                      )
                    ]
                  }
                ),
                ct
              )
            ]
          }
        ),
        P && /* @__PURE__ */ s(
          "span",
          {
            className: te(
              Z.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: P
          }
        )
      ]
    },
    I
  );
}, fo = qr.forwardRef(
  ({
    label: p,
    required: u,
    parentClass: n = "col-span-12",
    className: i = "",
    value: o = !1,
    onChange: e,
    disabled: m = !1,
    errorMessage: l = "",
    name: R,
    ...A
  }, I) => (Xe(() => {
    let M;
    M = o || !1, setTimeout(() => {
      e == null || e(M);
    }, 100);
  }, []), /* @__PURE__ */ z(
    "div",
    {
      className: te(
        Z.field.wrapper,
        "flex justify-between",
        n
      ),
      children: [
        p && /* @__PURE__ */ s(Pt, { label: p, required: u }),
        /* @__PURE__ */ z("label", { className: "relative inline-flex items-center cursor-pointer", children: [
          /* @__PURE__ */ s(
            "input",
            {
              type: "checkbox",
              ref: I,
              id: `field-${R}`,
              className: te(Z.field.input, "sr-only peer"),
              checked: o,
              onChange: (M) => e == null ? void 0 : e(M.target.checked),
              disabled: m,
              ...A
            }
          ),
          /* @__PURE__ */ s(
            "div",
            {
              className: `
              w-11 h-6 bg-gray-200 peer-focus:outline-none
              rounded-full peer dark:bg-gray-700
              peer-checked:bg-primary-600
              peer-disabled:opacity-50 peer-disabled:cursor-not-allowed
              transition-colors duration-200
              ${l ? "border-red-500" : ""}
              ${i}
            `
            }
          ),
          /* @__PURE__ */ s(
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
        l && /* @__PURE__ */ s(
          "span",
          {
            className: te(
              Z.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: l
          }
        )
      ]
    }
  ))
);
fo.displayName = "Switch";
function Vc({
  label: p = "",
  value: u = "",
  name: n = "",
  parentClass: i = "",
  onChange: o,
  disabled: e = !1,
  required: m = !1,
  placeholder: l = "Phone number",
  search: R = !1,
  countriesList: A = !1,
  defaultCountry: I = "",
  errorMessage: M = ""
}) {
  var xe;
  const E = (_e) => Wr.find(
    (Me) => Me.code == _e
  ), [j, Y] = pe(
    E(I) || Wr[0]
  ), [G, ae] = pe(""), [P, U] = pe(""), [X, se] = pe(!1), [ie, le] = pe(""), ye = Mt(null), q = Mt(null), [we, he] = pe({
    top: 0,
    left: 0,
    width: 0
  }), Ee = typeof document < "u" ? ((xe = ye.current) == null ? void 0 : xe.closest(".racm-root")) || document.body : null, Fe = (_e, Me) => {
    let Te = "", Ce = 0;
    for (let Ae = 0; Ae < Me.length && Ce < _e.length; Ae++)
      Me[Ae] === "#" ? (Te += _e[Ce], Ce++) : Te += Me[Ae];
    return Te;
  }, Ue = (_e) => {
    const Te = _e.target.value.replace(/\D/g, "");
    if (A && (j != null && j.mask)) {
      const Ce = Fe(Te, j.mask);
      U(Ce), o == null || o("+" + j.phone + " " + Ce);
      const Ae = Ce.replace(/\D/g, "");
      ae(Ae);
    } else
      U(Te), ae(Te), j && o ? o("+" + j.phone + " " + Te) : o == null || o(Te);
  };
  Xe(() => {
    if (typeof u == "string" && u.startsWith("+")) {
      const _e = Wr.filter((Me) => u.startsWith("+" + Me.phone)).sort((Me, Te) => Te.phone.length - Me.phone.length)[0];
      if (_e) {
        Y(_e);
        let Me = u.replace("+" + _e.phone, "").replaceAll(" ", "");
        ae(Me), U(Fe(Me, _e.mask));
        return;
      }
    }
    ae(u || ""), U(u || "");
  }, []);
  const pt = (_e) => {
    Y(_e), o && o("+" + _e.phone + " " + G), se(!1), le("");
  };
  Xe(() => {
    const _e = (Me) => {
      var Te;
      ye.current && !ye.current.contains(Me.target) && !((Te = q.current) != null && Te.contains(Me.target)) && se(!1);
    };
    return document.addEventListener("mousedown", _e), () => document.removeEventListener("mousedown", _e);
  }, []), Xe(() => {
    if (!X || !ye.current) return;
    const _e = () => {
      if (!ye.current) return;
      const Me = ye.current.getBoundingClientRect();
      he({
        top: Me.bottom + 4,
        left: Me.left,
        width: Me.width
      });
    };
    return _e(), window.addEventListener("resize", _e), window.addEventListener("scroll", _e, !0), () => {
      window.removeEventListener("resize", _e), window.removeEventListener("scroll", _e, !0);
    };
  }, [X]);
  const ct = Wr.filter(
    (_e) => _e.label.toLowerCase().includes(ie.toLowerCase()) || _e.phone.includes(ie)
  );
  if (!A) {
    const _e = (Me) => {
      const Te = Me.target.value.replace(/[^+\d]/g, ""), Ce = Te.startsWith("+") ? "+" + Te.replace(/[+]/g, "").slice(0) : Te;
      o == null || o(Ce);
    };
    return /* @__PURE__ */ s(Ye, { children: /* @__PURE__ */ z(
      "div",
      {
        className: te(
          Z.field.wrapper,
          i || "col-span-12"
        ),
        children: [
          /* @__PURE__ */ s(Pt, { label: p, required: m }),
          /* @__PURE__ */ s(
            "input",
            {
              type: "text",
              value: u,
              onChange: _e,
              placeholder: l,
              disabled: e,
              required: m,
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
  return /* @__PURE__ */ s(Ye, { children: /* @__PURE__ */ z(
    "div",
    {
      className: te(
        Z.field.wrapper,
        i || "col-span-12"
      ),
      children: [
        /* @__PURE__ */ s(Pt, { label: p, required: m }),
        /* @__PURE__ */ z("div", { className: "relative ", ref: ye, children: [
          /* @__PURE__ */ z(
            "div",
            {
              className: `h-[40px] flex items-center border rounded-md px-2 bg-white dark:bg-gray-700 transition-all
  ${X ? "ring-0.5 ring-blue-100 border-blue-300" : "border-gray-300 dark:border-gray-600"}
  ${e ? "opacity-60 cursor-not-allowed" : ""}
    ${M ? "border-red-500" : ""}`,
              children: [
                /* @__PURE__ */ z(
                  "button",
                  {
                    type: "button",
                    disabled: e,
                    onClick: () => se(!X),
                    className: "flex items-center gap-1 pr-2 border-r border-gray-300 dark:border-gray-700 focus:outline-none",
                    children: [
                      j ? /* @__PURE__ */ s(
                        "img",
                        {
                          src: `https://flagcdn.com/w20/${j.code.toLowerCase()}.png`,
                          alt: j.code,
                          className: "w-5 h-3 object-cover"
                        }
                      ) : /* @__PURE__ */ s("span", { className: "text-gray-400 text-xs", children: "🌐" }),
                      /* @__PURE__ */ s(ho, { className: "w-3 h-3 text-gray-500" })
                    ]
                  }
                ),
                j && /* @__PURE__ */ z("span", { className: "ml-2 text-sm text-gray-700 dark:text-gray-200 whitespace-nowrap", children: [
                  "+",
                  j.phone
                ] }),
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "tel",
                    value: P,
                    onChange: Ue,
                    required: m,
                    id: `field-${n}`,
                    disabled: e || !j,
                    placeholder: j ? l || "Enter phone number" : "Select a country",
                    className: "flex-1 ml-2 bg-transparent outline-none text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400"
                  }
                ),
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "tel",
                    required: m,
                    tabIndex: -1,
                    readOnly: !0,
                    value: j && G ? "+" + j.phone + G : "",
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
          X && Ee && Qa(
            /* @__PURE__ */ z(
              "div",
              {
                ref: q,
                className: "fixed border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 shadow-lg z-50 max-h-60 overflow-y-auto",
                style: {
                  top: we.top,
                  left: we.left,
                  width: we.width
                },
                children: [
                  R && /* @__PURE__ */ s("div", { className: "p-2 border-b border-gray-200 dark:border-gray-700", children: /* @__PURE__ */ z("div", { className: "relative", children: [
                    /* @__PURE__ */ s(Pa, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" }),
                    /* @__PURE__ */ s(
                      "input",
                      {
                        type: "text",
                        value: ie,
                        onChange: (_e) => le(_e.target.value),
                        placeholder: "Search country...",
                        className: "w-full pl-9 pr-3 py-2 text-sm border rounded-md bg-white dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none "
                      }
                    )
                  ] }) }),
                  ct.map((_e) => /* @__PURE__ */ z(
                    "button",
                    {
                      type: "button",
                      onClick: () => pt(_e),
                      className: "w-full flex items-center gap-2 px-2 py-1 text-sm hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100",
                      children: [
                        /* @__PURE__ */ s(
                          "img",
                          {
                            src: `https://flagcdn.com/w20/${_e.code.toLowerCase()}.png`,
                            alt: _e.code,
                            className: "w-5 h-3 object-cover"
                          }
                        ),
                        /* @__PURE__ */ z("span", { children: [
                          _e.label,
                          " (+",
                          _e.phone,
                          ")"
                        ] })
                      ]
                    },
                    _e.code
                  ))
                ]
              }
            ),
            Ee
          )
        ] }),
        M && /* @__PURE__ */ s(
          "span",
          {
            className: te(
              Z.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: M
          }
        )
      ]
    },
    n
  ) });
}
const go = qr.forwardRef(
  ({ className: p = "", label: u, required: n, errorMessage: i = "", name: o, ...e }, m) => {
    const l = te(
      Z.field.input,
      "placeholder-gray-400 dark:placeholder-gray-400",
      i ? "border-red-500" : "",
      p
    );
    return /* @__PURE__ */ s(Ye, { children: /* @__PURE__ */ z(
      "div",
      {
        className: te(
          Z.field.wrapper,
          e.parentClass || "col-span-12"
        ),
        children: [
          /* @__PURE__ */ s(Pt, { label: u, required: n }),
          /* @__PURE__ */ z("div", { className: "relative", children: [
            /* @__PURE__ */ s(
              "textarea",
              {
                className: l,
                ref: m,
                id: `field-${o}`,
                required: n,
                ...e
              }
            ),
            i && /* @__PURE__ */ s(
              "span",
              {
                className: te(
                  Z.field.error,
                  "text-red-500 text-xs mt-1"
                ),
                children: i
              }
            )
          ] })
        ]
      },
      o
    ) });
  }
);
go.displayName = "TextArea";
var La = function(p, u) {
  return La = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
    n.__proto__ = i;
  } || function(n, i) {
    for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
  }, La(p, u);
};
function Wc(p, u) {
  if (typeof u != "function" && u !== null)
    throw new TypeError("Class extends value " + String(u) + " is not a constructor or null");
  La(p, u);
  function n() {
    this.constructor = p;
  }
  p.prototype = u === null ? Object.create(u) : (n.prototype = u.prototype, new n());
}
var Lt = function() {
  return Lt = Object.assign || function(u) {
    for (var n, i = 1, o = arguments.length; i < o; i++) {
      n = arguments[i];
      for (var e in n) Object.prototype.hasOwnProperty.call(n, e) && (u[e] = n[e]);
    }
    return u;
  }, Lt.apply(this, arguments);
};
function vo(p) {
  return p && p.__esModule && Object.prototype.hasOwnProperty.call(p, "default") ? p.default : p;
}
var Zn = !1, Er, Oa, Da, sa, da, bo, ua, Ba, za, Ta, yo, ja, Ha, wo, xo;
function Ft() {
  if (!Zn) {
    Zn = !0;
    var p = navigator.userAgent, u = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(p), n = /(Mac OS X)|(Windows)|(Linux)/.exec(p);
    if (ja = /\b(iPhone|iP[ao]d)/.exec(p), Ha = /\b(iP[ao]d)/.exec(p), Ta = /Android/i.exec(p), wo = /FBAN\/\w+;/i.exec(p), xo = /Mobile/i.exec(p), yo = !!/Win64/.exec(p), u) {
      Er = u[1] ? parseFloat(u[1]) : u[5] ? parseFloat(u[5]) : NaN, Er && document && document.documentMode && (Er = document.documentMode);
      var i = /(?:Trident\/(\d+.\d+))/.exec(p);
      bo = i ? parseFloat(i[1]) + 4 : Er, Oa = u[2] ? parseFloat(u[2]) : NaN, Da = u[3] ? parseFloat(u[3]) : NaN, sa = u[4] ? parseFloat(u[4]) : NaN, sa ? (u = /(?:Chrome\/(\d+\.\d+))/.exec(p), da = u && u[1] ? parseFloat(u[1]) : NaN) : da = NaN;
    } else
      Er = Oa = Da = da = sa = NaN;
    if (n) {
      if (n[1]) {
        var o = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(p);
        ua = o ? parseFloat(o[1].replace("_", ".")) : !0;
      } else
        ua = !1;
      Ba = !!n[2], za = !!n[3];
    } else
      ua = Ba = za = !1;
  }
}
var Fa = {
  /**
   *  Check if the UA is Internet Explorer.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  ie: function() {
    return Ft() || Er;
  },
  /**
   * Check if we're in Internet Explorer compatibility mode.
   *
   * @return bool true if in compatibility mode, false if
   * not compatibility mode or not ie
   */
  ieCompatibilityMode: function() {
    return Ft() || bo > Er;
  },
  /**
   * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
   * only need this because Skype can't handle 64-bit IE yet.  We need to remove
   * this when we don't need it -- tracked by #601957.
   */
  ie64: function() {
    return Fa.ie() && yo;
  },
  /**
   *  Check if the UA is Firefox.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  firefox: function() {
    return Ft() || Oa;
  },
  /**
   *  Check if the UA is Opera.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  opera: function() {
    return Ft() || Da;
  },
  /**
   *  Check if the UA is WebKit.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  webkit: function() {
    return Ft() || sa;
  },
  /**
   *  For Push
   *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
   */
  safari: function() {
    return Fa.webkit();
  },
  /**
   *  Check if the UA is a Chrome browser.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  chrome: function() {
    return Ft() || da;
  },
  /**
   *  Check if the user is running Windows.
   *
   *  @return bool `true' if the user's OS is Windows.
   */
  windows: function() {
    return Ft() || Ba;
  },
  /**
   *  Check if the user is running Mac OS X.
   *
   *  @return float|bool   Returns a float if a version number is detected,
   *                       otherwise true/false.
   */
  osx: function() {
    return Ft() || ua;
  },
  /**
   * Check if the user is running Linux.
   *
   * @return bool `true' if the user's OS is some flavor of Linux.
   */
  linux: function() {
    return Ft() || za;
  },
  /**
   * Check if the user is running on an iPhone or iPod platform.
   *
   * @return bool `true' if the user is running some flavor of the
   *    iPhone OS.
   */
  iphone: function() {
    return Ft() || ja;
  },
  mobile: function() {
    return Ft() || ja || Ha || Ta || xo;
  },
  nativeApp: function() {
    return Ft() || wo;
  },
  android: function() {
    return Ft() || Ta;
  },
  ipad: function() {
    return Ft() || Ha;
  }
}, qc = Fa, Jc = !!(typeof window < "u" && window.document && window.document.createElement), Zc = {
  canUseDOM: Jc
}, Xc = Zc, _o = Xc, ko;
_o.canUseDOM && (ko = document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
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
function $c(p, u) {
  if (!_o.canUseDOM || u && !("addEventListener" in document))
    return !1;
  var n = "on" + p, i = n in document;
  if (!i) {
    var o = document.createElement("div");
    o.setAttribute(n, "return;"), i = typeof o[n] == "function";
  }
  return !i && ko && p === "wheel" && (i = document.implementation.hasFeature("Events.wheel", "3.0")), i;
}
var es = $c, ts = qc, rs = es, Xn = 10, $n = 40, eo = 800;
function Eo(p) {
  var u = 0, n = 0, i = 0, o = 0;
  return "detail" in p && (n = p.detail), "wheelDelta" in p && (n = -p.wheelDelta / 120), "wheelDeltaY" in p && (n = -p.wheelDeltaY / 120), "wheelDeltaX" in p && (u = -p.wheelDeltaX / 120), "axis" in p && p.axis === p.HORIZONTAL_AXIS && (u = n, n = 0), i = u * Xn, o = n * Xn, "deltaY" in p && (o = p.deltaY), "deltaX" in p && (i = p.deltaX), (i || o) && p.deltaMode && (p.deltaMode == 1 ? (i *= $n, o *= $n) : (i *= eo, o *= eo)), i && !u && (u = i < 1 ? -1 : 1), o && !n && (n = o < 1 ? -1 : 1), {
    spinX: u,
    spinY: n,
    pixelX: i,
    pixelY: o
  };
}
Eo.getEventType = function() {
  return ts.firefox() ? "DOMMouseScroll" : rs("wheel") ? "wheel" : "mousewheel";
};
var as = Eo, ns = as;
const os = /* @__PURE__ */ vo(ns);
function is(p, u, n, i, o, e) {
  e === void 0 && (e = 0);
  var m = zr(p, u, e), l = m.width, R = m.height, A = Math.min(l, n), I = Math.min(R, i);
  return A > I * o ? {
    width: I * o,
    height: I
  } : {
    width: A,
    height: A / o
  };
}
function ls(p) {
  return p.width > p.height ? p.width / p.naturalWidth : p.height / p.naturalHeight;
}
function Vr(p, u, n, i, o) {
  o === void 0 && (o = 0);
  var e = zr(u.width, u.height, o), m = e.width, l = e.height;
  return {
    x: to(p.x, m, n.width, i),
    y: to(p.y, l, n.height, i)
  };
}
function to(p, u, n, i) {
  var o = u * i / 2 - n / 2;
  return pa(p, -o, o);
}
function ro(p, u) {
  return Math.sqrt(Math.pow(p.y - u.y, 2) + Math.pow(p.x - u.x, 2));
}
function ao(p, u) {
  return Math.atan2(u.y - p.y, u.x - p.x) * 180 / Math.PI;
}
function cs(p, u, n, i, o, e, m) {
  e === void 0 && (e = 0), m === void 0 && (m = !0);
  var l = m ? ss : ds, R = zr(u.width, u.height, e), A = zr(u.naturalWidth, u.naturalHeight, e), I = {
    x: l(100, ((R.width - n.width / o) / 2 - p.x / o) / R.width * 100),
    y: l(100, ((R.height - n.height / o) / 2 - p.y / o) / R.height * 100),
    width: l(100, n.width / R.width * 100 / o),
    height: l(100, n.height / R.height * 100 / o)
  }, M = Math.round(l(A.width, I.width * A.width / 100)), E = Math.round(l(A.height, I.height * A.height / 100)), j = A.width >= A.height * i, Y = j ? {
    width: Math.round(E * i),
    height: E
  } : {
    width: M,
    height: Math.round(M / i)
  }, G = Lt(Lt({}, Y), {
    x: Math.round(l(A.width - Y.width, I.x * A.width / 100)),
    y: Math.round(l(A.height - Y.height, I.y * A.height / 100))
  });
  return {
    croppedAreaPercentages: I,
    croppedAreaPixels: G
  };
}
function ss(p, u) {
  return Math.min(p, Math.max(0, u));
}
function ds(p, u) {
  return u;
}
function us(p, u, n, i, o, e) {
  var m = zr(u.width, u.height, n), l = pa(i.width / m.width * (100 / p.width), o, e), R = {
    x: l * m.width / 2 - i.width / 2 - m.width * l * (p.x / 100),
    y: l * m.height / 2 - i.height / 2 - m.height * l * (p.y / 100)
  };
  return {
    crop: R,
    zoom: l
  };
}
function ms(p, u, n) {
  var i = ls(u);
  return n.height > n.width ? n.height / (p.height * i) : n.width / (p.width * i);
}
function ps(p, u, n, i, o, e) {
  n === void 0 && (n = 0);
  var m = zr(u.naturalWidth, u.naturalHeight, n), l = pa(ms(p, u, i), o, e), R = i.height > i.width ? i.height / p.height : i.width / p.width, A = {
    x: ((m.width - p.width) / 2 - p.x) * R,
    y: ((m.height - p.height) / 2 - p.y) * R
  };
  return {
    crop: A,
    zoom: l
  };
}
function no(p, u) {
  return {
    x: (u.x + p.x) / 2,
    y: (u.y + p.y) / 2
  };
}
function hs(p) {
  return p * Math.PI / 180;
}
function zr(p, u, n) {
  var i = hs(n);
  return {
    width: Math.abs(Math.cos(i) * p) + Math.abs(Math.sin(i) * u),
    height: Math.abs(Math.sin(i) * p) + Math.abs(Math.cos(i) * u)
  };
}
function pa(p, u, n) {
  return Math.min(Math.max(p, u), n);
}
function la() {
  for (var p = [], u = 0; u < arguments.length; u++)
    p[u] = arguments[u];
  return p.filter(function(n) {
    return typeof n == "string" && n.length > 0;
  }).join(" ").trim();
}
var fs = `.reactEasyCrop_Container {
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
`, gs = 1, vs = 3, bs = 1, ys = (
  /** @class */
  function(p) {
    Wc(u, p);
    function u() {
      var n = p !== null && p.apply(this, arguments) || this;
      return n.cropperRef = ar.createRef(), n.imageRef = ar.createRef(), n.videoRef = ar.createRef(), n.containerPosition = {
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
          var i = !0;
          n.resizeObserver = new window.ResizeObserver(function(o) {
            if (i) {
              i = !1;
              return;
            }
            n.computeSizes();
          }), n.resizeObserver.observe(n.containerRef);
        }
      }, n.preventZoomSafari = function(i) {
        return i.preventDefault();
      }, n.cleanEvents = function() {
        n.currentDoc && (n.currentDoc.removeEventListener("mousemove", n.onMouseMove), n.currentDoc.removeEventListener("mouseup", n.onDragStopped), n.currentDoc.removeEventListener("touchmove", n.onTouchMove), n.currentDoc.removeEventListener("touchend", n.onDragStopped), n.currentDoc.removeEventListener("gesturechange", n.onGestureChange), n.currentDoc.removeEventListener("gestureend", n.onGestureEnd), n.currentDoc.removeEventListener("scroll", n.onScroll));
      }, n.clearScrollEvent = function() {
        n.containerRef && n.containerRef.removeEventListener("wheel", n.onWheel), n.wheelTimer && clearTimeout(n.wheelTimer);
      }, n.onMediaLoad = function() {
        var i = n.computeSizes();
        i && (n.previousCropSize = i, n.emitCropData(), n.setInitialCrop(i), n.isInitialized = !0), n.props.onMediaLoaded && n.props.onMediaLoaded(n.mediaSize);
      }, n.setInitialCrop = function(i) {
        if (n.props.initialCroppedAreaPercentages) {
          var o = us(n.props.initialCroppedAreaPercentages, n.mediaSize, n.props.rotation, i, n.props.minZoom, n.props.maxZoom), e = o.crop, m = o.zoom;
          n.props.onCropChange(e), n.props.onZoomChange && n.props.onZoomChange(m);
        } else if (n.props.initialCroppedAreaPixels) {
          var l = ps(n.props.initialCroppedAreaPixels, n.mediaSize, n.props.rotation, i, n.props.minZoom, n.props.maxZoom), e = l.crop, m = l.zoom;
          n.props.onCropChange(e), n.props.onZoomChange && n.props.onZoomChange(m);
        }
      }, n.computeSizes = function() {
        var i, o, e, m, l, R, A = n.imageRef.current || n.videoRef.current;
        if (A && n.containerRef) {
          n.containerRect = n.containerRef.getBoundingClientRect(), n.saveContainerPosition();
          var I = n.containerRect.width / n.containerRect.height, M = ((i = n.imageRef.current) === null || i === void 0 ? void 0 : i.naturalWidth) || ((o = n.videoRef.current) === null || o === void 0 ? void 0 : o.videoWidth) || 0, E = ((e = n.imageRef.current) === null || e === void 0 ? void 0 : e.naturalHeight) || ((m = n.videoRef.current) === null || m === void 0 ? void 0 : m.videoHeight) || 0, j = A.offsetWidth < M || A.offsetHeight < E, Y = M / E, G = void 0;
          if (j)
            switch (n.state.mediaObjectFit) {
              default:
              case "contain":
                G = I > Y ? {
                  width: n.containerRect.height * Y,
                  height: n.containerRect.height
                } : {
                  width: n.containerRect.width,
                  height: n.containerRect.width / Y
                };
                break;
              case "horizontal-cover":
                G = {
                  width: n.containerRect.width,
                  height: n.containerRect.width / Y
                };
                break;
              case "vertical-cover":
                G = {
                  width: n.containerRect.height * Y,
                  height: n.containerRect.height
                };
                break;
            }
          else
            G = {
              width: A.offsetWidth,
              height: A.offsetHeight
            };
          n.mediaSize = Lt(Lt({}, G), {
            naturalWidth: M,
            naturalHeight: E
          }), n.props.setMediaSize && n.props.setMediaSize(n.mediaSize);
          var ae = n.props.cropSize ? n.props.cropSize : is(n.mediaSize.width, n.mediaSize.height, n.containerRect.width, n.containerRect.height, n.props.aspect, n.props.rotation);
          return (((l = n.state.cropSize) === null || l === void 0 ? void 0 : l.height) !== ae.height || ((R = n.state.cropSize) === null || R === void 0 ? void 0 : R.width) !== ae.width) && n.props.onCropSizeChange && n.props.onCropSizeChange(ae), n.setState({
            cropSize: ae
          }, n.recomputeCropPosition), n.props.setCropSize && n.props.setCropSize(ae), ae;
        }
      }, n.saveContainerPosition = function() {
        if (n.containerRef) {
          var i = n.containerRef.getBoundingClientRect();
          n.containerPosition = {
            x: i.left,
            y: i.top
          };
        }
      }, n.onMouseDown = function(i) {
        n.currentDoc && (i.preventDefault(), n.currentDoc.addEventListener("mousemove", n.onMouseMove), n.currentDoc.addEventListener("mouseup", n.onDragStopped), n.saveContainerPosition(), n.onDragStart(u.getMousePoint(i)));
      }, n.onMouseMove = function(i) {
        return n.onDrag(u.getMousePoint(i));
      }, n.onScroll = function(i) {
        n.currentDoc && (i.preventDefault(), n.saveContainerPosition());
      }, n.onTouchStart = function(i) {
        n.currentDoc && (n.isTouching = !0, !(n.props.onTouchRequest && !n.props.onTouchRequest(i)) && (n.currentDoc.addEventListener("touchmove", n.onTouchMove, {
          passive: !1
        }), n.currentDoc.addEventListener("touchend", n.onDragStopped), n.saveContainerPosition(), i.touches.length === 2 ? n.onPinchStart(i) : i.touches.length === 1 && n.onDragStart(u.getTouchPoint(i.touches[0]))));
      }, n.onTouchMove = function(i) {
        i.preventDefault(), i.touches.length === 2 ? n.onPinchMove(i) : i.touches.length === 1 && n.onDrag(u.getTouchPoint(i.touches[0]));
      }, n.onGestureStart = function(i) {
        n.currentDoc && (i.preventDefault(), n.currentDoc.addEventListener("gesturechange", n.onGestureChange), n.currentDoc.addEventListener("gestureend", n.onGestureEnd), n.gestureZoomStart = n.props.zoom, n.gestureRotationStart = n.props.rotation);
      }, n.onGestureChange = function(i) {
        if (i.preventDefault(), !n.isTouching) {
          var o = u.getMousePoint(i), e = n.gestureZoomStart - 1 + i.scale;
          if (n.setNewZoom(e, o, {
            shouldUpdatePosition: !0
          }), n.props.onRotationChange) {
            var m = n.gestureRotationStart + i.rotation;
            n.props.onRotationChange(m);
          }
        }
      }, n.onGestureEnd = function(i) {
        n.cleanEvents();
      }, n.onDragStart = function(i) {
        var o, e, m = i.x, l = i.y;
        n.dragStartPosition = {
          x: m,
          y: l
        }, n.dragStartCrop = Lt({}, n.props.crop), (e = (o = n.props).onInteractionStart) === null || e === void 0 || e.call(o);
      }, n.onDrag = function(i) {
        var o = i.x, e = i.y;
        n.currentWindow && (n.rafDragTimeout && n.currentWindow.cancelAnimationFrame(n.rafDragTimeout), n.rafDragTimeout = n.currentWindow.requestAnimationFrame(function() {
          if (n.state.cropSize && !(o === void 0 || e === void 0)) {
            var m = o - n.dragStartPosition.x, l = e - n.dragStartPosition.y, R = {
              x: n.dragStartCrop.x + m,
              y: n.dragStartCrop.y + l
            }, A = n.props.restrictPosition ? Vr(R, n.mediaSize, n.state.cropSize, n.props.zoom, n.props.rotation) : R;
            n.props.onCropChange(A);
          }
        }));
      }, n.onDragStopped = function() {
        var i, o;
        n.isTouching = !1, n.cleanEvents(), n.emitCropData(), (o = (i = n.props).onInteractionEnd) === null || o === void 0 || o.call(i);
      }, n.onWheel = function(i) {
        if (n.currentWindow && !(n.props.onWheelRequest && !n.props.onWheelRequest(i))) {
          i.preventDefault();
          var o = u.getMousePoint(i), e = os(i).pixelY, m = n.props.zoom - e * n.props.zoomSpeed / 200;
          n.setNewZoom(m, o, {
            shouldUpdatePosition: !0
          }), n.state.hasWheelJustStarted || n.setState({
            hasWheelJustStarted: !0
          }, function() {
            var l, R;
            return (R = (l = n.props).onInteractionStart) === null || R === void 0 ? void 0 : R.call(l);
          }), n.wheelTimer && clearTimeout(n.wheelTimer), n.wheelTimer = n.currentWindow.setTimeout(function() {
            return n.setState({
              hasWheelJustStarted: !1
            }, function() {
              var l, R;
              return (R = (l = n.props).onInteractionEnd) === null || R === void 0 ? void 0 : R.call(l);
            });
          }, 250);
        }
      }, n.getPointOnContainer = function(i, o) {
        var e = i.x, m = i.y;
        if (!n.containerRect)
          throw new Error("The Cropper is not mounted");
        return {
          x: n.containerRect.width / 2 - (e - o.x),
          y: n.containerRect.height / 2 - (m - o.y)
        };
      }, n.getPointOnMedia = function(i) {
        var o = i.x, e = i.y, m = n.props, l = m.crop, R = m.zoom;
        return {
          x: (o + l.x) / R,
          y: (e + l.y) / R
        };
      }, n.setNewZoom = function(i, o, e) {
        var m = e === void 0 ? {} : e, l = m.shouldUpdatePosition, R = l === void 0 ? !0 : l;
        if (!(!n.state.cropSize || !n.props.onZoomChange)) {
          var A = pa(i, n.props.minZoom, n.props.maxZoom);
          if (R) {
            var I = n.getPointOnContainer(o, n.containerPosition), M = n.getPointOnMedia(I), E = {
              x: M.x * A - I.x,
              y: M.y * A - I.y
            }, j = n.props.restrictPosition ? Vr(E, n.mediaSize, n.state.cropSize, A, n.props.rotation) : E;
            n.props.onCropChange(j);
          }
          n.props.onZoomChange(A);
        }
      }, n.getCropData = function() {
        if (!n.state.cropSize)
          return null;
        var i = n.props.restrictPosition ? Vr(n.props.crop, n.mediaSize, n.state.cropSize, n.props.zoom, n.props.rotation) : n.props.crop;
        return cs(i, n.mediaSize, n.state.cropSize, n.getAspect(), n.props.zoom, n.props.rotation, n.props.restrictPosition);
      }, n.emitCropData = function() {
        var i = n.getCropData();
        if (i) {
          var o = i.croppedAreaPercentages, e = i.croppedAreaPixels;
          n.props.onCropComplete && n.props.onCropComplete(o, e), n.props.onCropAreaChange && n.props.onCropAreaChange(o, e);
        }
      }, n.emitCropAreaChange = function() {
        var i = n.getCropData();
        if (i) {
          var o = i.croppedAreaPercentages, e = i.croppedAreaPixels;
          n.props.onCropAreaChange && n.props.onCropAreaChange(o, e);
        }
      }, n.recomputeCropPosition = function() {
        var i, o;
        if (n.state.cropSize) {
          var e = n.props.crop;
          if (n.isInitialized && (!((i = n.previousCropSize) === null || i === void 0) && i.width) && (!((o = n.previousCropSize) === null || o === void 0) && o.height)) {
            var m = Math.abs(n.previousCropSize.width - n.state.cropSize.width) > 1e-6 || Math.abs(n.previousCropSize.height - n.state.cropSize.height) > 1e-6;
            if (m) {
              var l = n.state.cropSize.width / n.previousCropSize.width, R = n.state.cropSize.height / n.previousCropSize.height;
              e = {
                x: n.props.crop.x * l,
                y: n.props.crop.y * R
              };
            }
          }
          var A = n.props.restrictPosition ? Vr(e, n.mediaSize, n.state.cropSize, n.props.zoom, n.props.rotation) : e;
          n.previousCropSize = n.state.cropSize, n.props.onCropChange(A), n.emitCropData();
        }
      }, n.onKeyDown = function(i) {
        var o, e, m = n.props, l = m.crop, R = m.onCropChange, A = m.keyboardStep, I = m.zoom, M = m.rotation, E = A;
        if (n.state.cropSize) {
          i.shiftKey && (E *= 0.2);
          var j = Lt({}, l);
          switch (i.key) {
            case "ArrowUp":
              j.y -= E, i.preventDefault();
              break;
            case "ArrowDown":
              j.y += E, i.preventDefault();
              break;
            case "ArrowLeft":
              j.x -= E, i.preventDefault();
              break;
            case "ArrowRight":
              j.x += E, i.preventDefault();
              break;
            default:
              return;
          }
          n.props.restrictPosition && (j = Vr(j, n.mediaSize, n.state.cropSize, I, M)), i.repeat || (e = (o = n.props).onInteractionStart) === null || e === void 0 || e.call(o), R(j);
        }
      }, n.onKeyUp = function(i) {
        var o, e;
        switch (i.key) {
          case "ArrowUp":
          case "ArrowDown":
          case "ArrowLeft":
          case "ArrowRight":
            i.preventDefault();
            break;
          default:
            return;
        }
        n.emitCropData(), (e = (o = n.props).onInteractionEnd) === null || e === void 0 || e.call(o);
      }, n;
    }
    return u.prototype.componentDidMount = function() {
      !this.currentDoc || !this.currentWindow || (this.containerRef && (this.containerRef.ownerDocument && (this.currentDoc = this.containerRef.ownerDocument), this.currentDoc.defaultView && (this.currentWindow = this.currentDoc.defaultView), this.initResizeObserver(), typeof window.ResizeObserver > "u" && this.currentWindow.addEventListener("resize", this.computeSizes), this.props.zoomWithScroll && this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }), this.containerRef.addEventListener("gesturestart", this.onGestureStart)), this.currentDoc.addEventListener("scroll", this.onScroll), this.props.disableAutomaticStylesInjection || (this.styleRef = this.currentDoc.createElement("style"), this.styleRef.setAttribute("type", "text/css"), this.props.nonce && this.styleRef.setAttribute("nonce", this.props.nonce), this.styleRef.innerHTML = fs, this.currentDoc.head.appendChild(this.styleRef)), this.imageRef.current && this.imageRef.current.complete && this.onMediaLoad(), this.props.setImageRef && this.props.setImageRef(this.imageRef), this.props.setVideoRef && this.props.setVideoRef(this.videoRef), this.props.setCropperRef && this.props.setCropperRef(this.cropperRef));
    }, u.prototype.componentWillUnmount = function() {
      var n, i;
      !this.currentDoc || !this.currentWindow || (typeof window.ResizeObserver > "u" && this.currentWindow.removeEventListener("resize", this.computeSizes), (n = this.resizeObserver) === null || n === void 0 || n.disconnect(), this.containerRef && this.containerRef.removeEventListener("gesturestart", this.preventZoomSafari), this.styleRef && ((i = this.styleRef.parentNode) === null || i === void 0 || i.removeChild(this.styleRef)), this.cleanEvents(), this.props.zoomWithScroll && this.clearScrollEvent());
    }, u.prototype.componentDidUpdate = function(n) {
      var i, o, e, m, l, R, A, I, M;
      n.rotation !== this.props.rotation ? (this.computeSizes(), this.recomputeCropPosition()) : n.aspect !== this.props.aspect ? this.computeSizes() : n.objectFit !== this.props.objectFit ? this.computeSizes() : n.zoom !== this.props.zoom ? this.recomputeCropPosition() : ((i = n.cropSize) === null || i === void 0 ? void 0 : i.height) !== ((o = this.props.cropSize) === null || o === void 0 ? void 0 : o.height) || ((e = n.cropSize) === null || e === void 0 ? void 0 : e.width) !== ((m = this.props.cropSize) === null || m === void 0 ? void 0 : m.width) ? this.computeSizes() : (((l = n.crop) === null || l === void 0 ? void 0 : l.x) !== ((R = this.props.crop) === null || R === void 0 ? void 0 : R.x) || ((A = n.crop) === null || A === void 0 ? void 0 : A.y) !== ((I = this.props.crop) === null || I === void 0 ? void 0 : I.y)) && this.emitCropAreaChange(), n.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef && (this.props.zoomWithScroll ? this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }) : this.clearScrollEvent()), n.video !== this.props.video && ((M = this.videoRef.current) === null || M === void 0 || M.load());
      var E = this.getObjectFit();
      E !== this.state.mediaObjectFit && this.setState({
        mediaObjectFit: E
      }, this.computeSizes);
    }, u.prototype.getAspect = function() {
      var n = this.props, i = n.cropSize, o = n.aspect;
      return i ? i.width / i.height : o;
    }, u.prototype.getObjectFit = function() {
      var n, i, o, e;
      if (this.props.objectFit === "cover") {
        var m = this.imageRef.current || this.videoRef.current;
        if (m && this.containerRef) {
          this.containerRect = this.containerRef.getBoundingClientRect();
          var l = this.containerRect.width / this.containerRect.height, R = ((n = this.imageRef.current) === null || n === void 0 ? void 0 : n.naturalWidth) || ((i = this.videoRef.current) === null || i === void 0 ? void 0 : i.videoWidth) || 0, A = ((o = this.imageRef.current) === null || o === void 0 ? void 0 : o.naturalHeight) || ((e = this.videoRef.current) === null || e === void 0 ? void 0 : e.videoHeight) || 0, I = R / A;
          return I < l ? "horizontal-cover" : "vertical-cover";
        }
        return "horizontal-cover";
      }
      return this.props.objectFit;
    }, u.prototype.onPinchStart = function(n) {
      var i = u.getTouchPoint(n.touches[0]), o = u.getTouchPoint(n.touches[1]);
      this.lastPinchDistance = ro(i, o), this.lastPinchRotation = ao(i, o), this.onDragStart(no(i, o));
    }, u.prototype.onPinchMove = function(n) {
      var i = this;
      if (!(!this.currentDoc || !this.currentWindow)) {
        var o = u.getTouchPoint(n.touches[0]), e = u.getTouchPoint(n.touches[1]), m = no(o, e);
        this.onDrag(m), this.rafPinchTimeout && this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout), this.rafPinchTimeout = this.currentWindow.requestAnimationFrame(function() {
          var l = ro(o, e), R = i.props.zoom * (l / i.lastPinchDistance);
          i.setNewZoom(R, m, {
            shouldUpdatePosition: !1
          }), i.lastPinchDistance = l;
          var A = ao(o, e), I = i.props.rotation + (A - i.lastPinchRotation);
          i.props.onRotationChange && i.props.onRotationChange(I), i.lastPinchRotation = A;
        });
      }
    }, u.prototype.render = function() {
      var n = this, i, o = this.props, e = o.image, m = o.video, l = o.mediaProps, R = o.cropperProps, A = o.transform, I = o.crop, M = I.x, E = I.y, j = o.rotation, Y = o.zoom, G = o.cropShape, ae = o.showGrid, P = o.roundCropAreaPixels, U = o.style, X = U.containerStyle, se = U.cropAreaStyle, ie = U.mediaStyle, le = o.classes, ye = le.containerClassName, q = le.cropAreaClassName, we = le.mediaClassName, he = (i = this.state.mediaObjectFit) !== null && i !== void 0 ? i : this.getObjectFit();
      return ar.createElement("div", {
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        ref: function(Fe) {
          return n.containerRef = Fe;
        },
        "data-testid": "container",
        style: X,
        className: la("reactEasyCrop_Container", ye)
      }, e ? ar.createElement("img", Lt({
        alt: "",
        className: la("reactEasyCrop_Image", he === "contain" && "reactEasyCrop_Contain", he === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", he === "vertical-cover" && "reactEasyCrop_Cover_Vertical", we)
      }, l, {
        src: e,
        ref: this.imageRef,
        style: Lt(Lt({}, ie), {
          transform: A || "translate(".concat(M, "px, ").concat(E, "px) rotate(").concat(j, "deg) scale(").concat(Y, ")")
        }),
        onLoad: this.onMediaLoad
      })) : m && ar.createElement("video", Lt({
        autoPlay: !0,
        playsInline: !0,
        loop: !0,
        muted: !0,
        className: la("reactEasyCrop_Video", he === "contain" && "reactEasyCrop_Contain", he === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", he === "vertical-cover" && "reactEasyCrop_Cover_Vertical", we)
      }, l, {
        ref: this.videoRef,
        onLoadedMetadata: this.onMediaLoad,
        style: Lt(Lt({}, ie), {
          transform: A || "translate(".concat(M, "px, ").concat(E, "px) rotate(").concat(j, "deg) scale(").concat(Y, ")")
        }),
        controls: !1
      }), (Array.isArray(m) ? m : [{
        src: m
      }]).map(function(Ee) {
        return ar.createElement("source", Lt({
          key: Ee.src
        }, Ee));
      })), this.state.cropSize && ar.createElement("div", Lt({
        ref: this.cropperRef,
        style: Lt(Lt({}, se), {
          width: P ? Math.round(this.state.cropSize.width) : this.state.cropSize.width,
          height: P ? Math.round(this.state.cropSize.height) : this.state.cropSize.height
        }),
        tabIndex: 0,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        "data-testid": "cropper",
        className: la("reactEasyCrop_CropArea", G === "round" && "reactEasyCrop_CropAreaRound", ae && "reactEasyCrop_CropAreaGrid", q)
      }, R)));
    }, u.defaultProps = {
      zoom: 1,
      rotation: 0,
      aspect: 4 / 3,
      maxZoom: vs,
      minZoom: gs,
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
      keyboardStep: bs
    }, u.getMousePoint = function(n) {
      return {
        x: Number(n.clientX),
        y: Number(n.clientY)
      };
    }, u.getTouchPoint = function(n) {
      return {
        x: Number(n.clientX),
        y: Number(n.clientY)
      };
    }, u;
  }(ar.Component)
);
const oo = Qt, ws = (p) => new Promise((u, n) => {
  const i = new Image();
  i.addEventListener("load", () => u(i)), i.addEventListener("error", (o) => n(o)), i.setAttribute("crossOrigin", "anonymous"), i.src = p;
}), Co = (p) => p * Math.PI / 180, xs = (p, u, n) => {
  const i = Co(n);
  return {
    width: Math.abs(Math.cos(i) * p) + Math.abs(Math.sin(i) * u),
    height: Math.abs(Math.sin(i) * p) + Math.abs(Math.cos(i) * u)
  };
}, _s = async (p, u, n = "image/jpeg", i = 0) => {
  const o = await ws(p), e = document.createElement("canvas"), m = e.getContext("2d");
  if (!m)
    throw new Error("Canvas context is not available");
  const l = Co(i), { width: R, height: A } = xs(
    o.width,
    o.height,
    i
  );
  e.width = R, e.height = A, m.translate(R / 2, A / 2), m.rotate(l), m.translate(-o.width / 2, -o.height / 2), m.drawImage(o, 0, 0);
  const I = document.createElement("canvas"), M = I.getContext("2d");
  if (!M)
    throw new Error("Canvas context is not available");
  return I.width = u.width, I.height = u.height, M.drawImage(
    e,
    u.x,
    u.y,
    u.width,
    u.height,
    0,
    0,
    u.width,
    u.height
  ), new Promise((E, j) => {
    I.toBlob(
      (Y) => {
        if (!Y) {
          j(new Error("Image cropping failed"));
          return;
        }
        E(Y);
      },
      n,
      0.95
    );
  });
}, Ao = ({
  isOpen: p,
  imageSrc: u,
  fileType: n = "image/jpeg",
  fileName: i = "cropped-image",
  aspect: o = 1 / 1,
  title: e = "Crop Image",
  onClose: m,
  onApply: l
}) => {
  const [R, A] = pe({ x: 0, y: 0 }), [I, M] = pe(1), [E, j] = pe(null);
  Xe(() => {
    p && (A({ x: 0, y: 0 }), M(1), j(null));
  }, [p]);
  const Y = Mc((ae, P) => {
    j(P);
  }, []), G = async () => {
    var ae, P;
    if (!(!u || !E))
      try {
        const U = await _s(
          u,
          E,
          n
        ), X = ((P = (ae = n == null ? void 0 : n.split("/")) == null ? void 0 : ae[1]) == null ? void 0 : P.replace("jpeg", "jpg")) || "jpg", se = new File([U], `${i}.${X}`, {
          type: n
        });
        l == null || l(se);
      } catch {
        m == null || m();
      }
  };
  return p ? /* @__PURE__ */ z(
    "div",
    {
      className: te(
        Z.mediaPicker.cropModal,
        "fixed inset-0 z-50 flex items-center justify-center p-4"
      ),
      children: [
        /* @__PURE__ */ s(
          "div",
          {
            className: "fixed inset-0 bg-gray-500 opacity-75",
            onClick: m
          }
        ),
        /* @__PURE__ */ z("div", { className: "relative bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col dark:bg-gray-800", children: [
          /* @__PURE__ */ z("div", { className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0", children: [
            /* @__PURE__ */ s("h3", { className: "text-lg font-medium text-gray-900 dark:text-white", children: e }),
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                onClick: m,
                className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
                "aria-label": "Close crop modal",
                children: /* @__PURE__ */ s(Ut, { icon: "mdi:close", className: "w-6 h-6" })
              }
            )
          ] }),
          /* @__PURE__ */ z("div", { className: "p-4 space-y-4", children: [
            /* @__PURE__ */ s("div", { className: "relative h-72 w-full bg-gray-900 rounded-md overflow-hidden", children: u && /* @__PURE__ */ s(
              ys,
              {
                image: u,
                crop: R,
                zoom: I,
                aspect: o,
                onCropChange: A,
                onZoomChange: M,
                onCropComplete: Y
              }
            ) }),
            /* @__PURE__ */ z("div", { className: "space-y-2", children: [
              /* @__PURE__ */ s("label", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Zoom" }),
              /* @__PURE__ */ s(
                "input",
                {
                  type: "range",
                  min: 1,
                  max: 3,
                  step: 0.1,
                  value: I,
                  onChange: (ae) => M(Number(ae.target.value)),
                  className: "w-full"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ z("div", { className: "px-4 py-3 flex justify-end gap-3 border-t border-gray-200 dark:border-gray-700 sm:!px-6", children: [
            /* @__PURE__ */ s(
              oo,
              {
                type: "button",
                onClick: m,
                variant: "outlined",
                color: "default",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ s(
              oo,
              {
                type: "button",
                onClick: G,
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
}, ks = Qt, ur = (p) => {
  typeof p == "string" && p.startsWith("blob:") && URL.revokeObjectURL(p);
}, Es = ({
  label: p = "",
  value: u = null,
  onChange: n,
  required: i = !1,
  accept: o = "image/*",
  aspect: e = "1",
  id: m,
  dragDrop: l = !1,
  cropImage: R = !1,
  name: A = "",
  parentClass: I = "",
  errorMessage: M = ""
}) => {
  const [E, j] = pe(u), [Y, G] = pe(!1), [ae, P] = pe(!1), [U, X] = pe(""), [se, ie] = pe("image/jpeg"), [le, ye] = pe("cropped-image"), q = Mt(null), we = Mt(""), he = Mt("");
  Xe(() => {
    if (u instanceof File) {
      const Ce = URL.createObjectURL(u);
      ur(he.current), he.current = Ce, j({ file: u, preview: Ce });
    } else u && typeof u == "object" && "preview" in u, j(u);
  }, [u]), Xe(() => () => {
    ur(he.current), ur(we.current);
  }, []);
  const Ee = () => {
    P(!1), ur(we.current), we.current = "", X(""), q.current && (q.current.value = "");
  }, Fe = (Ce) => {
    const Ae = URL.createObjectURL(Ce);
    ur(he.current), he.current = Ae, j({ file: Ce, preview: Ae }), n == null || n(Ce), Ee();
  }, Ue = (Ce) => {
    if (!Ce || Ce.length === 0)
      return;
    const Ae = Ce[0];
    if (R) {
      const Ke = URL.createObjectURL(Ae);
      ur(we.current), we.current = Ke, X(Ke), ie(Ae.type || "image/jpeg"), ye(
        (Ae.name || "cropped-image").replace(/\.[^/.]+$/, "")
      ), P(!0);
      return;
    }
    const yt = URL.createObjectURL(Ae);
    ur(he.current), he.current = yt, j({ file: Ae, preview: yt }), n == null || n(Ae);
  }, pt = (Ce) => {
    Ce && Ce.stopPropagation(), ur(he.current), he.current = "", j(null), n == null || n(null), q.current && (q.current.value = "");
  }, ct = (Ce) => {
    l && (Ce.preventDefault(), G(!0));
  }, xe = (Ce) => {
    l && (Ce.preventDefault(), G(!1));
  }, _e = (Ce) => {
    var Ae, yt, Ke, je;
    l && (Ce.preventDefault(), G(!1), (je = (Ke = (yt = (Ae = Ce.dataTransfer) == null ? void 0 : Ae.files) == null ? void 0 : yt[0]) == null ? void 0 : Ke.type) != null && je.includes("image/") && Ue(Ce.dataTransfer.files));
  }, Me = () => {
    var Ce;
    (Ce = q.current) == null || Ce.click();
  }, Te = E && typeof E == "object" && "preview" in E ? E.preview : typeof E == "string" ? E : "";
  return /* @__PURE__ */ z(Ye, { children: [
    /* @__PURE__ */ z(
      "div",
      {
        className: te(
          Z.mediaPicker.image,
          Z.field.wrapper,
          I || "col-span-12"
        ),
        children: [
          /* @__PURE__ */ s(Pt, { label: p, required: i }),
          /* @__PURE__ */ z(
            "div",
            {
              className: te(
                Z.mediaPicker.dropzone,
                "relative rounded-md p-2 transition-all",
                Y ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800",
                M ? "border-red-500" : ""
              ),
              onDragOver: ct,
              onDragLeave: xe,
              onDrop: _e,
              id: `field-${A}`,
              children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    ref: q,
                    id: m,
                    type: "file",
                    accept: o,
                    onChange: (Ce) => Ue(Ce.target.files),
                    required: i && !E,
                    className: "absolute opacity-0 right-[50%] top-[80%] -translate-y-1/2 pointer-events-none h-[10px]"
                  }
                ),
                /* @__PURE__ */ z(
                  "div",
                  {
                    className: `flex items-center space-x-4 transition-all ${Y ? "opacity-50" : ""}`,
                    children: [
                      E ? /* @__PURE__ */ z("div", { className: "relative group", children: [
                        /* @__PURE__ */ s(
                          "img",
                          {
                            src: Te,
                            alt: "preview",
                            className: "object-cover w-20 h-20 rounded-full shadow-md"
                          }
                        ),
                        !i && /* @__PURE__ */ s(
                          "button",
                          {
                            type: "button",
                            onClick: pt,
                            className: "absolute top-0 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
                            "aria-label": "Remove image",
                            children: /* @__PURE__ */ s(Ut, { icon: "mdi:close", className: "w-3 h-3" })
                          }
                        )
                      ] }) : /* @__PURE__ */ s("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ s(
                        Ut,
                        {
                          icon: "ri:image-add-fill",
                          className: "text-gray-400 w-10 h-10"
                        }
                      ) }),
                      /* @__PURE__ */ z("div", { className: "space-y-1", children: [
                        /* @__PURE__ */ s(
                          ks,
                          {
                            type: "button",
                            onClick: Me,
                            variant: "outlined",
                            color: "default",
                            children: E ? "Change Image" : "Select Image"
                          }
                        ),
                        l && !E && /* @__PURE__ */ s("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop" })
                      ] })
                    ]
                  }
                ),
                l && Y && /* @__PURE__ */ s("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-md", children: /* @__PURE__ */ s("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg", children: "Drop image here" }) })
              ]
            }
          ),
          M && /* @__PURE__ */ s(
            "span",
            {
              className: te(
                Z.field.error,
                "text-red-500 text-xs mt-1"
              ),
              children: M
            }
          )
        ]
      },
      A
    ),
    /* @__PURE__ */ s(
      Ao,
      {
        isOpen: ae,
        imageSrc: U,
        fileType: se,
        fileName: le,
        onClose: Ee,
        onApply: Fe,
        aspect: Number(e)
      }
    )
  ] });
}, So = qr.forwardRef(
  ({
    label: p,
    value: u,
    name: n,
    required: i,
    parentClass: o = "",
    className: e = "",
    type: m = "text",
    onKeyDown: l,
    negativeNumberAllow: R = !0,
    defaultValue: A = "",
    field: I = {},
    onChange: M,
    mask: E = "",
    errorMessage: j = "",
    maskApplyOnValue: Y = !0,
    ...G
  }, ae) => {
    const [P, U] = pe(!1), X = (le) => {
      if (m === "number") {
        if (["e", "E", "+"].includes(le.key)) {
          le.preventDefault();
          return;
        }
        if (R == !1 && le.key === "-") {
          le.preventDefault();
          return;
        }
        if (["ArrowUp", "ArrowDown"].includes(le.key)) {
          le.preventDefault();
          return;
        }
      }
      l == null || l(le);
    }, se = te(
      Z.field.input,
      "h-10 placeholder-gray-400 dark:placeholder-gray-400",
      m === "password" ? "pr-10" : "",
      m === "number" ? "no-spinner" : "",
      e,
      j ? "border-red-500" : ""
    );
    function ie(le, ye) {
      if (!le) return le;
      const q = String(le).replace(/[^a-zA-Z0-9]/g, "");
      let we = "", he = 0;
      for (let Ee = 0; Ee < (ye == null ? void 0 : ye.length) && he < q.length; Ee++) {
        const Fe = ye[Ee], Ue = q[he];
        Fe === "9" ? /\d/.test(Ue) ? (we += Ue, he++) : (he++, Ee--) : Fe === "A" ? /[a-zA-Z]/.test(Ue) ? (we += Ue, he++) : (he++, Ee--) : Fe === "X" ? /[a-zA-Z0-9]/.test(Ue) ? (we += Ue, he++) : (he++, Ee--) : Fe === "*" ? (we += Ue, he++) : (we += Fe, Ue === Fe && he++);
      }
      return we;
    }
    return Xe(() => {
      if (A) {
        const le = u || A;
        setTimeout(() => {
          M == null || M(le);
        }, 100);
      }
    }, [A]), /* @__PURE__ */ s(Ye, { children: /* @__PURE__ */ z(
      "div",
      {
        className: te(
          Z.field.wrapper,
          o || "col-span-12"
        ),
        children: [
          /* @__PURE__ */ s(
            Pt,
            {
              label: p,
              required: i,
              infoText: I == null ? void 0 : I.infoText
            }
          ),
          /* @__PURE__ */ z("div", { className: "relative", children: [
            /* @__PURE__ */ s(
              "input",
              {
                type: m === "password" && P ? "text" : m,
                ref: ae,
                id: `field-${n}`,
                required: i,
                onKeyDown: X,
                className: se,
                value: E ? ie(u, E) : u,
                onChange: (le) => {
                  M(E && Y ? ie(le.target.value, E) : le.target.value);
                },
                ...G
              }
            ),
            j && /* @__PURE__ */ s(
              "span",
              {
                className: te(
                  Z.field.error,
                  "text-red-500 text-xs mt-1"
                ),
                children: j
              }
            ),
            m === "password" && /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                tabIndex: -1,
                onClick: () => U((le) => !le),
                className: "absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200",
                children: /* @__PURE__ */ s(
                  Ut,
                  {
                    icon: P ? "mdi:eye-outline" : "mdi:eye-off-outline",
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
So.displayName = "Input";
const Cs = ({
  editorKey: p = "",
  value: u = "",
  name: n = "",
  onChange: i,
  label: o = "",
  required: e = !1,
  placeholder: m = "",
  parentClass: l = "col-span-12",
  height: R = 400,
  inline: A = !1,
  disabled: I = !1,
  plugins: M,
  toolbar: E,
  menubar: j = !1,
  fontFamily: Y = "Inter, sans-serif",
  initConfig: G = {},
  imageUploadHandler: ae,
  errorMessage: P = ""
}) => {
  const U = [
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
  ], X = "undo redo | blocks | bold italic underline forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media table | removeformat | code fullscreen preview", se = (ie) => new Promise((le, ye) => {
    if (!ae) {
      le(`data:${ie.blob().type};base64,${ie.base64()}`);
      return;
    }
    ae(ie).then((q) => {
      q ? le(q) : ye("Upload failed: No URL returned");
    }).catch((q) => {
      ye(
        typeof q == "string" ? q : (q == null ? void 0 : q.message) || "Image upload failed"
      );
    });
  });
  return /* @__PURE__ */ z(
    "div",
    {
      className: te(Z.field.wrapper, l),
      id: `field-${n}`,
      children: [
        o && /* @__PURE__ */ s(Pt, { label: o, required: e }),
        /* @__PURE__ */ s(
          Pc,
          {
            apiKey: p,
            value: u,
            disabled: I,
            init: {
              height: R,
              inline: A,
              menubar: j,
              branding: !1,
              statusbar: !0,
              automatic_uploads: !0,
              images_upload_handler: se,
              plugins: M ?? U,
              toolbar: E ?? X,
              placeholder: m,
              content_style: `
            body {
                font-family: ${Y};
                border: ${P ? "1px solid blue" : ""};
            }
            `,
              ...G
            },
            onEditorChange: (ie) => {
              i == null || i(ie);
            }
          }
        ),
        P && /* @__PURE__ */ s(
          "span",
          {
            className: te(
              Z.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: P
          }
        )
      ]
    }
  );
};
var Io = { exports: {} };
(function(p) {
  p.exports = /******/
  function(u) {
    var n = {};
    function i(o) {
      if (n[o])
        return n[o].exports;
      var e = n[o] = {
        /******/
        i: o,
        /******/
        l: !1,
        /******/
        exports: {}
        /******/
      };
      return u[o].call(e.exports, e, e.exports, i), e.l = !0, e.exports;
    }
    return i.m = u, i.c = n, i.d = function(o, e, m) {
      i.o(o, e) || Object.defineProperty(o, e, { enumerable: !0, get: m });
    }, i.r = function(o) {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(o, "__esModule", { value: !0 });
    }, i.t = function(o, e) {
      if (e & 1 && (o = i(o)), e & 8 || e & 4 && typeof o == "object" && o && o.__esModule) return o;
      var m = /* @__PURE__ */ Object.create(null);
      if (i.r(m), Object.defineProperty(m, "default", { enumerable: !0, value: o }), e & 2 && typeof o != "string") for (var l in o) i.d(m, l, (function(R) {
        return o[R];
      }).bind(null, l));
      return m;
    }, i.n = function(o) {
      var e = o && o.__esModule ? (
        /******/
        function() {
          return o.default;
        }
      ) : (
        /******/
        function() {
          return o;
        }
      );
      return i.d(e, "a", e), e;
    }, i.o = function(o, e) {
      return Object.prototype.hasOwnProperty.call(o, e);
    }, i.p = "", i(i.s = 10);
  }([
    /* 0 */
    /***/
    function(u, n) {
      u.exports = qr;
    },
    /* 1 */
    /***/
    function(u, n, i) {
      var o = i(3), e = i(7);
      e = e.__esModule ? e.default : e, typeof e == "string" && (e = [[u.i, e, ""]]);
      var m = {};
      m.insert = "head", m.singleton = !1, o(e, m), u.exports = e.locals || {};
    },
    /* 2 */
    /***/
    function(u, n) {
      u.exports = Fc;
    },
    /* 3 */
    /***/
    function(u, n, i) {
      var o = /* @__PURE__ */ function() {
        var U;
        return function() {
          return typeof U > "u" && (U = !!(window && document && document.all && !window.atob)), U;
        };
      }(), e = /* @__PURE__ */ function() {
        var U = {};
        return function(se) {
          if (typeof U[se] > "u") {
            var ie = document.querySelector(se);
            if (window.HTMLIFrameElement && ie instanceof window.HTMLIFrameElement)
              try {
                ie = ie.contentDocument.head;
              } catch {
                ie = null;
              }
            U[se] = ie;
          }
          return U[se];
        };
      }(), m = [];
      function l(P) {
        for (var U = -1, X = 0; X < m.length; X++)
          if (m[X].identifier === P) {
            U = X;
            break;
          }
        return U;
      }
      function R(P, U) {
        for (var X = {}, se = [], ie = 0; ie < P.length; ie++) {
          var le = P[ie], ye = U.base ? le[0] + U.base : le[0], q = X[ye] || 0, we = "".concat(ye, " ").concat(q);
          X[ye] = q + 1;
          var he = l(we), Ee = {
            css: le[1],
            media: le[2],
            sourceMap: le[3]
          };
          he !== -1 ? (m[he].references++, m[he].updater(Ee)) : m.push({
            identifier: we,
            updater: ae(Ee, U),
            references: 1
          }), se.push(we);
        }
        return se;
      }
      function A(P) {
        var U = document.createElement("style"), X = P.attributes || {};
        if (typeof X.nonce > "u") {
          var se = i.nc;
          se && (X.nonce = se);
        }
        if (Object.keys(X).forEach(function(le) {
          U.setAttribute(le, X[le]);
        }), typeof P.insert == "function")
          P.insert(U);
        else {
          var ie = e(P.insert || "head");
          if (!ie)
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          ie.appendChild(U);
        }
        return U;
      }
      function I(P) {
        if (P.parentNode === null)
          return !1;
        P.parentNode.removeChild(P);
      }
      var M = /* @__PURE__ */ function() {
        var U = [];
        return function(se, ie) {
          return U[se] = ie, U.filter(Boolean).join(`
`);
        };
      }();
      function E(P, U, X, se) {
        var ie = X ? "" : se.media ? "@media ".concat(se.media, " {").concat(se.css, "}") : se.css;
        if (P.styleSheet)
          P.styleSheet.cssText = M(U, ie);
        else {
          var le = document.createTextNode(ie), ye = P.childNodes;
          ye[U] && P.removeChild(ye[U]), ye.length ? P.insertBefore(le, ye[U]) : P.appendChild(le);
        }
      }
      function j(P, U, X) {
        var se = X.css, ie = X.media, le = X.sourceMap;
        if (ie ? P.setAttribute("media", ie) : P.removeAttribute("media"), le && typeof btoa < "u" && (se += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(le)))), " */")), P.styleSheet)
          P.styleSheet.cssText = se;
        else {
          for (; P.firstChild; )
            P.removeChild(P.firstChild);
          P.appendChild(document.createTextNode(se));
        }
      }
      var Y = null, G = 0;
      function ae(P, U) {
        var X, se, ie;
        if (U.singleton) {
          var le = G++;
          X = Y || (Y = A(U)), se = E.bind(null, X, le, !1), ie = E.bind(null, X, le, !0);
        } else
          X = A(U), se = j.bind(null, X, U), ie = function() {
            I(X);
          };
        return se(P), function(q) {
          if (q) {
            if (q.css === P.css && q.media === P.media && q.sourceMap === P.sourceMap)
              return;
            se(P = q);
          } else
            ie();
        };
      }
      u.exports = function(P, U) {
        U = U || {}, !U.singleton && typeof U.singleton != "boolean" && (U.singleton = o()), P = P || [];
        var X = R(P, U);
        return function(ie) {
          if (ie = ie || [], Object.prototype.toString.call(ie) === "[object Array]") {
            for (var le = 0; le < X.length; le++) {
              var ye = X[le], q = l(ye);
              m[q].references--;
            }
            for (var we = R(ie, U), he = 0; he < X.length; he++) {
              var Ee = X[he], Fe = l(Ee);
              m[Fe].references === 0 && (m[Fe].updater(), m.splice(Fe, 1));
            }
            X = we;
          }
        };
      };
    },
    /* 4 */
    /***/
    function(u, n, i) {
      u.exports = function(m) {
        var l = [];
        return l.toString = function() {
          return this.map(function(A) {
            var I = o(A, m);
            return A[2] ? "@media ".concat(A[2], " {").concat(I, "}") : I;
          }).join("");
        }, l.i = function(R, A, I) {
          typeof R == "string" && (R = [[null, R, ""]]);
          var M = {};
          if (I)
            for (var E = 0; E < this.length; E++) {
              var j = this[E][0];
              j != null && (M[j] = !0);
            }
          for (var Y = 0; Y < R.length; Y++) {
            var G = [].concat(R[Y]);
            I && M[G[0]] || (A && (G[2] ? G[2] = "".concat(A, " and ").concat(G[2]) : G[2] = A), l.push(G));
          }
        }, l;
      };
      function o(m, l) {
        var R = m[1] || "", A = m[3];
        if (!A)
          return R;
        if (l && typeof btoa == "function") {
          var I = e(A), M = A.sources.map(function(E) {
            return "/*# sourceURL=".concat(A.sourceRoot || "").concat(E, " */");
          });
          return [R].concat(M).concat([I]).join(`
`);
        }
        return [R].join(`
`);
      }
      function e(m) {
        var l = btoa(unescape(encodeURIComponent(JSON.stringify(m)))), R = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l);
        return "/*# ".concat(R, " */");
      }
    },
    /* 5 */
    /***/
    function(u, n, i) {
      var o = i(3), e = i(6);
      e = e.__esModule ? e.default : e, typeof e == "string" && (e = [[u.i, e, ""]]);
      var m = {};
      m.insert = "head", m.singleton = !1, o(e, m), u.exports = e.locals || {};
    },
    /* 6 */
    /***/
    function(u, n, i) {
      var o = i(4);
      n = o(!1), n.push([u.i, `.resizeImageWrapper {\r
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
}`, ""]), u.exports = n;
    },
    /* 7 */
    /***/
    function(u, n, i) {
      var o = i(4);
      n = o(!1), n.push([u.i, `:root {\r
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
      }, u.exports = n;
    },
    /* 8 */
    /***/
    function(u, n, i) {
      var o = i(3), e = i(9);
      e = e.__esModule ? e.default : e, typeof e == "string" && (e = [[u.i, e, ""]]);
      var m = {};
      m.insert = "head", m.singleton = !1, o(e, m), u.exports = e.locals || {};
    },
    /* 9 */
    /***/
    function(u, n, i) {
      var o = i(4);
      n = o(!1), n.push([u.i, `@keyframes marching-ants{0%{background-position:0 0,0 100%,0 0,100% 0}to{background-position:20px 0,-20px 100%,0 -20px,100% 20px}}:root{--rc-drag-handle-size: 12px;--rc-drag-handle-mobile-size: 24px;--rc-drag-handle-bg-colour: rgba(0, 0, 0, .2);--rc-drag-bar-size: 6px;--rc-border-color: rgba(255, 255, 255, .7);--rc-focus-color: #0088ff}.ReactCrop{position:relative;display:inline-block;cursor:crosshair;max-width:100%}.ReactCrop *,.ReactCrop *:before,.ReactCrop *:after{box-sizing:border-box}.ReactCrop--disabled,.ReactCrop--locked{cursor:inherit}.ReactCrop__child-wrapper{overflow:hidden;max-height:inherit}.ReactCrop__child-wrapper>img,.ReactCrop__child-wrapper>video{display:block;max-width:100%;max-height:inherit}.ReactCrop:not(.ReactCrop--disabled) .ReactCrop__child-wrapper>img,.ReactCrop:not(.ReactCrop--disabled) .ReactCrop__child-wrapper>video{touch-action:none}.ReactCrop:not(.ReactCrop--disabled) .ReactCrop__crop-selection{touch-action:none}.ReactCrop__crop-mask{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;width:calc(100% + .5px);height:calc(100% + .5px)}.ReactCrop__crop-selection{position:absolute;top:0;left:0;transform:translateZ(0);cursor:move}.ReactCrop--disabled .ReactCrop__crop-selection{cursor:inherit}.ReactCrop--circular-crop .ReactCrop__crop-selection{border-radius:50%}.ReactCrop--circular-crop .ReactCrop__crop-selection:after{pointer-events:none;content:"";position:absolute;top:-1px;right:-1px;bottom:-1px;left:-1px;border:1px solid var(--rc-border-color);opacity:.3}.ReactCrop--no-animate .ReactCrop__crop-selection{outline:1px dashed white}.ReactCrop__crop-selection:not(.ReactCrop--no-animate .ReactCrop__crop-selection){animation:marching-ants 1s;background-image:linear-gradient(to right,#fff 50%,#444 50%),linear-gradient(to right,#fff 50%,#444 50%),linear-gradient(to bottom,#fff 50%,#444 50%),linear-gradient(to bottom,#fff 50%,#444 50%);background-size:10px 1px,10px 1px,1px 10px,1px 10px;background-position:0 0,0 100%,0 0,100% 0;background-repeat:repeat-x,repeat-x,repeat-y,repeat-y;color:#fff;animation-play-state:running;animation-timing-function:linear;animation-iteration-count:infinite}.ReactCrop__crop-selection:focus{outline:2px solid var(--rc-focus-color);outline-offset:-1px}.ReactCrop--invisible-crop .ReactCrop__crop-mask,.ReactCrop--invisible-crop .ReactCrop__crop-selection{display:none}.ReactCrop__rule-of-thirds-vt:before,.ReactCrop__rule-of-thirds-vt:after,.ReactCrop__rule-of-thirds-hz:before,.ReactCrop__rule-of-thirds-hz:after{content:"";display:block;position:absolute;background-color:#fff6}.ReactCrop__rule-of-thirds-vt:before,.ReactCrop__rule-of-thirds-vt:after{width:1px;height:100%}.ReactCrop__rule-of-thirds-vt:before{left:33.3333333333%}.ReactCrop__rule-of-thirds-vt:after{left:66.6666666667%}.ReactCrop__rule-of-thirds-hz:before,.ReactCrop__rule-of-thirds-hz:after{width:100%;height:1px}.ReactCrop__rule-of-thirds-hz:before{top:33.3333333333%}.ReactCrop__rule-of-thirds-hz:after{top:66.6666666667%}.ReactCrop__drag-handle{position:absolute;width:var(--rc-drag-handle-size);height:var(--rc-drag-handle-size);background-color:var(--rc-drag-handle-bg-colour);border:1px solid var(--rc-border-color)}.ReactCrop__drag-handle:focus{background:var(--rc-focus-color)}.ReactCrop .ord-nw{top:0;left:0;transform:translate(-50%,-50%);cursor:nw-resize}.ReactCrop .ord-n{top:0;left:50%;transform:translate(-50%,-50%);cursor:n-resize}.ReactCrop .ord-ne{top:0;right:0;transform:translate(50%,-50%);cursor:ne-resize}.ReactCrop .ord-e{top:50%;right:0;transform:translate(50%,-50%);cursor:e-resize}.ReactCrop .ord-se{bottom:0;right:0;transform:translate(50%,50%);cursor:se-resize}.ReactCrop .ord-s{bottom:0;left:50%;transform:translate(-50%,50%);cursor:s-resize}.ReactCrop .ord-sw{bottom:0;left:0;transform:translate(-50%,50%);cursor:sw-resize}.ReactCrop .ord-w{top:50%;left:0;transform:translate(-50%,-50%);cursor:w-resize}.ReactCrop__disabled .ReactCrop__drag-handle{cursor:inherit}.ReactCrop__drag-bar{position:absolute}.ReactCrop__drag-bar.ord-n{top:0;left:0;width:100%;height:var(--rc-drag-bar-size);transform:translateY(-50%)}.ReactCrop__drag-bar.ord-e{right:0;top:0;width:var(--rc-drag-bar-size);height:100%;transform:translate(50%)}.ReactCrop__drag-bar.ord-s{bottom:0;left:0;width:100%;height:var(--rc-drag-bar-size);transform:translateY(50%)}.ReactCrop__drag-bar.ord-w{top:0;left:0;width:var(--rc-drag-bar-size);height:100%;transform:translate(-50%)}.ReactCrop--new-crop .ReactCrop__drag-bar,.ReactCrop--new-crop .ReactCrop__drag-handle,.ReactCrop--fixed-aspect .ReactCrop__drag-bar,.ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-n,.ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-e,.ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-s,.ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-w{display:none}@media (pointer: coarse){.ReactCrop .ord-n,.ReactCrop .ord-e,.ReactCrop .ord-s,.ReactCrop .ord-w{display:none}.ReactCrop__drag-handle{width:var(--rc-drag-handle-mobile-size);height:var(--rc-drag-handle-mobile-size)}}
`, ""]), u.exports = n;
    },
    /* 10 */
    /***/
    function(u, n, i) {
      i.r(n), i.d(n, "default", function() {
        return (
          /* binding */
          jl
        );
      });
      var o = i(0), e = /* @__PURE__ */ i.n(o);
      i(5);
      var m = i(1), l = /* @__PURE__ */ i.n(m);
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
      function A() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 576 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M41.4 9.4C53.9-3.1 74.1-3.1 86.6 9.4L168 90.7l53.1-53.1c28.1-28.1 73.7-28.1 101.8 0L474.3 189.1c28.1 28.1 28.1 73.7 0 101.8L283.9 481.4c-37.5 37.5-98.3 37.5-135.8 0L30.6 363.9c-37.5-37.5-37.5-98.3 0-135.8L122.7 136 41.4 54.6c-12.5-12.5-12.5-32.8 0-45.3zm176 221.3L168 181.3 75.9 273.4c-4.2 4.2-7 9.3-8.4 14.6H386.7l42.3-42.3c3.1-3.1 3.1-8.2 0-11.3L277.7 82.9c-3.1-3.1-8.2-3.1-11.3 0L213.3 136l49.4 49.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0zM512 512c-35.3 0-64-28.7-64-64c0-25.2 32.6-79.6 51.2-108.7c6-9.4 19.5-9.4 25.5 0C543.4 368.4 576 422.8 576 448c0 35.3-28.7 64-64 64z"
        }));
      }
      function I() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-1.8l18-48H303.8l18 48H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H390.2L254 52.8zM279.8 304H168.2L224 155.1 279.8 304z"
        }));
      }
      function M() {
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
      function j() {
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
      function Y() {
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
      function G() {
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
      function P() {
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
      function U() {
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
      function X() {
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
      function se() {
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
      function ie() {
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
      function le() {
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
      function ye() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M24 56c0-13.3 10.7-24 24-24H80c13.3 0 24 10.7 24 24V176h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H40c-13.3 0-24-10.7-24-24s10.7-24 24-24H56V80H48C34.7 80 24 69.3 24 56zM86.7 341.2c-6.5-7.4-18.3-6.9-24 1.2L51.5 357.9c-7.7 10.8-22.7 13.3-33.5 5.6s-13.3-22.7-5.6-33.5l11.1-15.6c23.7-33.2 72.3-35.6 99.2-4.9c21.3 24.4 20.8 60.9-1.1 84.7L86.8 432H120c13.3 0 24 10.7 24 24s-10.7 24-24 24H32c-9.5 0-18.2-5.6-22-14.4s-2.1-18.9 4.3-25.9l72-78c5.3-5.8 5.4-14.6 .3-20.5zM224 64H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
        }));
      }
      function q() {
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
      function we() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M16 64c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H128V224c0 53 43 96 96 96s96-43 96-96V96H304c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H384V224c0 88.4-71.6 160-160 160s-160-71.6-160-160V96H48C30.3 96 16 81.7 16 64zM0 448c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z"
        }));
      }
      function he() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 640 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L355.7 253.5 400.2 96H503L497 120.2c-4.3 17.1 6.1 34.5 23.3 38.8s34.5-6.1 38.8-23.3l11-44.1C577.6 61.3 554.7 32 523.5 32H376.1h-.3H204.5c-22 0-41.2 15-46.6 36.4l-6.3 25.2L38.8 5.1zm168 131.7c.1-.3 .2-.7 .3-1L217 96H333.7L301.3 210.8l-94.5-74.1zM327.3 353.9L272.9 311 243.3 416H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H309.8l17.6-62.1z"
        }));
      }
      function Ee() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M480 32c0-11.1-5.7-21.4-15.2-27.2s-21.2-6.4-31.1-1.4l-32 16c-15.8 7.9-22.2 27.1-14.3 42.9C393 73.5 404.3 80 416 80v80c-17.7 0-32 14.3-32 32s14.3 32 32 32h32 32c17.7 0 32-14.3 32-32s-14.3-32-32-32V32zM32 64C14.3 64 0 78.3 0 96s14.3 32 32 32H47.3l89.6 128L47.3 384H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H64c10.4 0 20.2-5.1 26.2-13.6L176 311.8l85.8 122.6c6 8.6 15.8 13.6 26.2 13.6h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H304.7L215.1 256l89.6-128H320c17.7 0 32-14.3 32-32s-14.3-32-32-32H288c-10.4 0-20.2 5.1-26.2 13.6L176 200.2 90.2 77.6C84.2 69.1 74.4 64 64 64H32z"
        }));
      }
      function Fe() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M32 64C14.3 64 0 78.3 0 96s14.3 32 32 32H47.3l89.6 128L47.3 384H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H64c10.4 0 20.2-5.1 26.2-13.6L176 311.8l85.8 122.6c6 8.6 15.8 13.6 26.2 13.6h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H304.7L215.1 256l89.6-128H320c17.7 0 32-14.3 32-32s-14.3-32-32-32H288c-10.4 0-20.2 5.1-26.2 13.6L176 200.2 90.2 77.6C84.2 69.1 74.4 64 64 64H32zM480 320c0-11.1-5.7-21.4-15.2-27.2s-21.2-6.4-31.1-1.4l-32 16c-15.8 7.9-22.2 27.1-14.3 42.9C393 361.5 404.3 368 416 368v80c-17.7 0-32 14.3-32 32s14.3 32 32 32h32 32c17.7 0 32-14.3 32-32s-14.3-32-32-32V320z"
        }));
      }
      function Ue() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"
        }));
      }
      function pt() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z"
        }));
      }
      function ct() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 640 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
        }));
      }
      function xe() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 384 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M128 64c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H293.3L160 416h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H90.7L224 96H160c-17.7 0-32-14.3-32-32z"
        }));
      }
      function _e() {
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
      function Me() {
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
      function Te() {
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
      function Ce() {
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
      function Ae() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 384 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M0 64C0 46.3 14.3 32 32 32H80 96 224c70.7 0 128 57.3 128 128c0 31.3-11.3 60.1-30 82.3c37.1 22.4 62 63.1 62 109.7c0 70.7-57.3 128-128 128H96 80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V256 96H32C14.3 96 0 81.7 0 64zM224 224c35.3 0 64-28.7 64-64s-28.7-64-64-64H112V224H224zM112 288V416H256c35.3 0 64-28.7 64-64s-28.7-64-64-64H224 112z"
        }));
      }
      function yt() {
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
      function Ke() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M448 64c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
        }));
      }
      function je() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M448 64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32zm0 256c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32zM0 192c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zM448 448c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32z"
        }));
      }
      function jt() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M352 64c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32H320c17.7 0 32-14.3 32-32zm96 128c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32zM0 448c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zM352 320c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32H320c17.7 0 32-14.3 32-32z"
        }));
      }
      function ue() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M288 64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32H256c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
        }));
      }
      function He() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 640 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L489.3 358.2l90.5-90.5c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114l-96 96-31.9-25C430.9 239.6 420.1 175.1 377 132c-52.2-52.3-134.5-56.2-191.3-11.7L38.8 5.1zM239 162c30.1-14.9 67.7-9.9 92.8 15.3c20 20 27.5 48.3 21.7 74.5L239 162zM116.6 187.9L60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5l61.8-61.8-50.6-39.9zM220.9 270c-2.1 39.8 12.2 80.1 42.2 110c38.9 38.9 94.4 51 143.6 36.3L220.9 270z"
        }));
      }
      function fe() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M144 144c0-44.2 35.8-80 80-80c31.9 0 59.4 18.6 72.3 45.7c7.6 16 26.7 22.8 42.6 15.2s22.8-26.7 15.2-42.6C331 33.7 281.5 0 224 0C144.5 0 80 64.5 80 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H144V144z"
        }));
      }
      function Le() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"
        }));
      }
      function rt() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M128 32c0-17.7-14.3-32-32-32S64 14.3 64 32l0 32L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l32 0 0 256c0 35.3 28.7 64 64 64l224 0 0-64-224 0 0-352zM384 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-256c0-35.3-28.7-64-64-64L160 64l0 64 224 0 0 352z"
        }));
      }
      var it = "data:image/gif;base64,R0lGODlhngHpANUrAJycnPLy8tjY2AAAANTU1Pb29sTExMrKysLCwtbW1ru7u/j4+Ojo6LKysu7u7tzc3Ly8vNDQ0BEREbCwsL6+vqqqqiIiIs7OzuDg4KampkRERDMzM7i4uMzMzIiIiHd3d8jIyN3d3WZmZlVVVfT09OTk5JmZmcbGxqCgoOzs7JaWlv///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc0MEVDNDE3NTBFNDExRTE5OTAzODVFNEI4NUU1MDAzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc0MEVDNDE4NTBFNDExRTE5OTAzODVFNEI4NUU1MDAzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzQwRUM0MTU1MEU0MTFFMTk5MDM4NUU0Qjg1RTUwMDMiIHN0UmVmOmRv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";
      function Ve(t) {
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
          className: l.a.specialCharBox
        }, a.map(function(c, d) {
          return /* @__PURE__ */ e.a.createElement("div", {
            key: "key".concat(d),
            onClick: function(y) {
              return r(y, c);
            },
            className: l.a.specialChar
          }, c);
        }));
      }
      function ut() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          width: "10",
          height: "10",
          focusable: "false"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 0 1 0-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8Z",
          "fill-rule": "nonzero"
        }));
      }
      function er(t, r) {
        return pr(t) || ir(t, r) || mr(t, r) || nr();
      }
      function nr() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function mr(t, r) {
        if (t) {
          if (typeof t == "string") return or(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? or(t, r) : void 0;
        }
      }
      function or(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, c = Array(r); a < r; a++) c[a] = t[a];
        return c;
      }
      function ir(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var c, d, f, y, b = [], x = !0, k = !1;
          try {
            if (f = (a = a.call(t)).next, r !== 0) for (; !(x = (c = f.call(a)).done) && (b.push(c.value), b.length !== r); x = !0) ;
          } catch (O) {
            k = !0, d = O;
          } finally {
            try {
              if (!x && a.return != null && (y = a.return(), Object(y) !== y)) return;
            } finally {
              if (k) throw d;
            }
          }
          return b;
        }
      }
      function pr(t) {
        if (Array.isArray(t)) return t;
      }
      function Ar(t) {
        var r = t.remove_from_toolbar, a = t.editorRef, c = Object(o.useState)(!1), d = er(c, 2), f = d[0], y = d[1], b = Object(o.useState)("Paragraph"), x = er(b, 2), k = x[0], O = x[1], K = Object(o.useRef)(null), W = [{
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
          var F, h = r.find(function(T) {
            return T.name === "format";
          });
          (h == null || (F = h.options) === null || F === void 0 ? void 0 : F.length) > 0 && (W = W.filter(function(T) {
            return !(h != null && h.options.includes(T.value));
          }));
        }
        var ne = function(Q) {
          Q.preventDefault(), y(!f);
        }, V = function(Q, oe) {
          Q.preventDefault(), a.current.focus(), document.execCommand("formatBlock", !1, oe.value), O(oe.label), y(!1);
        }, H = function() {
          var Q = window.getSelection();
          if (Q.rangeCount > 0)
            for (var oe = Q.getRangeAt(0), $ = oe.commonAncestorContainer, ce = $; ce; ) {
              if (ce.nodeName.match(/^(p|div|h[1-6]|blockquote|pre)$/i))
                return ce.nodeName.toLowerCase();
              ce = ce.parentNode;
            }
          return null;
        }, B = function() {
          var Q = a.current;
          Q && Q.contains(window.getSelection().anchorNode) && (Q.focus(), Q.innerText.trim() === "" && O("Paragraph"));
        };
        return Object(o.useEffect)(function() {
          var T = function($) {
            K.current.contains($.target) || y(!1);
          }, Q = function() {
            var $;
            if (a != null && ($ = a.current) !== null && $ !== void 0 && $.contains(window.getSelection().anchorNode)) {
              var ce = H();
              if (ce) {
                var Se = W.find(function(D) {
                  return D.value === ce;
                });
                O(Se ? Se.label : "Paragraph");
              }
            }
          };
          return document.addEventListener("click", T), document.addEventListener("selectionchange", Q), document.addEventListener("keydown", B), function() {
            document.removeEventListener("click", T), document.removeEventListener("selectionchange", Q), document.removeEventListener("keydown", B);
          };
        }, [a]), /* @__PURE__ */ e.a.createElement("button", {
          className: l.a.customSelectFormat,
          onClick: ne,
          ref: K,
          style: {
            minWidth: "120px"
          }
        }, /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.selectSelected
        }, k, /* @__PURE__ */ e.a.createElement(ut, null)), f && /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.selectItemsFormat
        }, W.map(function(T, Q) {
          return /* @__PURE__ */ e.a.createElement("div", {
            key: "key".concat(Q),
            onClick: function($) {
              return V($, T);
            },
            className: l.a.selectOption
          }, /* @__PURE__ */ e.a.createElement(T.value, null, T.label));
        })));
      }
      var Sr = Ar;
      function hr(t, r) {
        return Nr(t) || fr(t, r) || Mr(t, r) || Ir();
      }
      function Ir() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Mr(t, r) {
        if (t) {
          if (typeof t == "string") return tr(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? tr(t, r) : void 0;
        }
      }
      function tr(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, c = Array(r); a < r; a++) c[a] = t[a];
        return c;
      }
      function fr(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var c, d, f, y, b = [], x = !0, k = !1;
          try {
            if (f = (a = a.call(t)).next, r !== 0) for (; !(x = (c = f.call(a)).done) && (b.push(c.value), b.length !== r); x = !0) ;
          } catch (O) {
            k = !0, d = O;
          } finally {
            try {
              if (!x && a.return != null && (y = a.return(), Object(y) !== y)) return;
            } finally {
              if (k) throw d;
            }
          }
          return b;
        }
      }
      function Nr(t) {
        if (Array.isArray(t)) return t;
      }
      var Rr = function(r) {
        var a = r.name, c = r.icon, d = r.title, f = r.item, y = r.disabled, b = r.editorRef, x = Object(o.useState)(!1), k = hr(x, 2), O = k[0], K = k[1], W = Object(o.useState)(!0), F = hr(W, 2), h = F[0], ne = F[1], V = function(T, Q) {
          T.preventDefault(), Q.current.focus(), Q.current && Q.current.contains(window.getSelection().anchorNode) && (f != null && f.handleClick && (f.handleClick(f), !f.add_functionality) || (K(!O), document.execCommand(a)));
        };
        Object(o.useEffect)(function() {
          var B = function() {
            var Q;
            if (b != null && (Q = b.current) !== null && Q !== void 0 && Q.contains(window.getSelection().anchorNode)) {
              var oe = document.queryCommandState(a), $ = document.queryCommandEnabled(a);
              ne(!$), K(oe);
            }
          };
          return document.addEventListener("selectionchange", B), document.addEventListener("input", B), function() {
            document.removeEventListener("selectionchange", B), document.removeEventListener("input", B);
          };
        }, [b, a]);
        var H = function() {
          var T = "";
          return O && (T = l.a.selectedOption || ""), (a === "redo" || a === "undo") && h && (T += " ".concat(l.a.disabled || "")), T.trim();
        };
        return /* @__PURE__ */ e.a.createElement("button", {
          onClick: function(T) {
            return V(T, b);
          },
          className: H(),
          title: f != null && f.title ? f.title : d,
          disabled: y
        }, f != null && f.icon ? f.icon : c);
      }, st = Rr;
      function De(t) {
        "@babel/helpers - typeof";
        return De = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
          return typeof r;
        } : function(r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
        }, De(t);
      }
      function We() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
        We = function() {
          return r;
        };
        var t, r = {}, a = Object.prototype, c = a.hasOwnProperty, d = Object.defineProperty || function(_, g, w) {
          _[g] = w.value;
        }, f = typeof Symbol == "function" ? Symbol : {}, y = f.iterator || "@@iterator", b = f.asyncIterator || "@@asyncIterator", x = f.toStringTag || "@@toStringTag";
        function k(_, g, w) {
          return Object.defineProperty(_, g, { value: w, enumerable: !0, configurable: !0, writable: !0 }), _[g];
        }
        try {
          k({}, "");
        } catch {
          k = function(w, N, C) {
            return w[N] = C;
          };
        }
        function O(_, g, w, N) {
          var C = g && g.prototype instanceof H ? g : H, S = Object.create(C.prototype), de = new Re(N || []);
          return d(S, "_invoke", { value: Qe(_, w, de) }), S;
        }
        function K(_, g, w) {
          try {
            return { type: "normal", arg: _.call(g, w) };
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        r.wrap = O;
        var W = "suspendedStart", F = "suspendedYield", h = "executing", ne = "completed", V = {};
        function H() {
        }
        function B() {
        }
        function T() {
        }
        var Q = {};
        k(Q, y, function() {
          return this;
        });
        var oe = Object.getPrototypeOf, $ = oe && oe(oe(at([])));
        $ && $ !== a && c.call($, y) && (Q = $);
        var ce = T.prototype = H.prototype = Object.create(Q);
        function Se(_) {
          ["next", "throw", "return"].forEach(function(g) {
            k(_, g, function(w) {
              return this._invoke(g, w);
            });
          });
        }
        function D(_, g) {
          function w(C, S, de, Ie) {
            var Ne = K(_[C], _, S);
            if (Ne.type !== "throw") {
              var Ge = Ne.arg, Je = Ge.value;
              return Je && De(Je) == "object" && c.call(Je, "__await") ? g.resolve(Je.__await).then(function(et) {
                w("next", et, de, Ie);
              }, function(et) {
                w("throw", et, de, Ie);
              }) : g.resolve(Je).then(function(et) {
                Ge.value = et, de(Ge);
              }, function(et) {
                return w("throw", et, de, Ie);
              });
            }
            Ie(Ne.arg);
          }
          var N;
          d(this, "_invoke", { value: function(S, de) {
            function Ie() {
              return new g(function(Ne, Ge) {
                w(S, de, Ne, Ge);
              });
            }
            return N = N ? N.then(Ie, Ie) : Ie();
          } });
        }
        function Qe(_, g, w) {
          var N = W;
          return function(C, S) {
            if (N === h) throw Error("Generator is already running");
            if (N === ne) {
              if (C === "throw") throw S;
              return { value: t, done: !0 };
            }
            for (w.method = C, w.arg = S; ; ) {
              var de = w.delegate;
              if (de) {
                var Ie = Oe(de, w);
                if (Ie) {
                  if (Ie === V) continue;
                  return Ie;
                }
              }
              if (w.method === "next") w.sent = w._sent = w.arg;
              else if (w.method === "throw") {
                if (N === W) throw N = ne, w.arg;
                w.dispatchException(w.arg);
              } else w.method === "return" && w.abrupt("return", w.arg);
              N = h;
              var Ne = K(_, g, w);
              if (Ne.type === "normal") {
                if (N = w.done ? ne : F, Ne.arg === V) continue;
                return { value: Ne.arg, done: w.done };
              }
              Ne.type === "throw" && (N = ne, w.method = "throw", w.arg = Ne.arg);
            }
          };
        }
        function Oe(_, g) {
          var w = g.method, N = _.iterator[w];
          if (N === t) return g.delegate = null, w === "throw" && _.iterator.return && (g.method = "return", g.arg = t, Oe(_, g), g.method === "throw") || w !== "return" && (g.method = "throw", g.arg = new TypeError("The iterator does not provide a '" + w + "' method")), V;
          var C = K(N, _.iterator, g.arg);
          if (C.type === "throw") return g.method = "throw", g.arg = C.arg, g.delegate = null, V;
          var S = C.arg;
          return S ? S.done ? (g[_.resultName] = S.value, g.next = _.nextLoc, g.method !== "return" && (g.method = "next", g.arg = t), g.delegate = null, V) : S : (g.method = "throw", g.arg = new TypeError("iterator result is not an object"), g.delegate = null, V);
        }
        function ke(_) {
          var g = { tryLoc: _[0] };
          1 in _ && (g.catchLoc = _[1]), 2 in _ && (g.finallyLoc = _[2], g.afterLoc = _[3]), this.tryEntries.push(g);
        }
        function ze(_) {
          var g = _.completion || {};
          g.type = "normal", delete g.arg, _.completion = g;
        }
        function Re(_) {
          this.tryEntries = [{ tryLoc: "root" }], _.forEach(ke, this), this.reset(!0);
        }
        function at(_) {
          if (_ || _ === "") {
            var g = _[y];
            if (g) return g.call(_);
            if (typeof _.next == "function") return _;
            if (!isNaN(_.length)) {
              var w = -1, N = function C() {
                for (; ++w < _.length; ) if (c.call(_, w)) return C.value = _[w], C.done = !1, C;
                return C.value = t, C.done = !0, C;
              };
              return N.next = N;
            }
          }
          throw new TypeError(De(_) + " is not iterable");
        }
        return B.prototype = T, d(ce, "constructor", { value: T, configurable: !0 }), d(T, "constructor", { value: B, configurable: !0 }), B.displayName = k(T, x, "GeneratorFunction"), r.isGeneratorFunction = function(_) {
          var g = typeof _ == "function" && _.constructor;
          return !!g && (g === B || (g.displayName || g.name) === "GeneratorFunction");
        }, r.mark = function(_) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(_, T) : (_.__proto__ = T, k(_, x, "GeneratorFunction")), _.prototype = Object.create(ce), _;
        }, r.awrap = function(_) {
          return { __await: _ };
        }, Se(D.prototype), k(D.prototype, b, function() {
          return this;
        }), r.AsyncIterator = D, r.async = function(_, g, w, N, C) {
          C === void 0 && (C = Promise);
          var S = new D(O(_, g, w, N), C);
          return r.isGeneratorFunction(g) ? S : S.next().then(function(de) {
            return de.done ? de.value : S.next();
          });
        }, Se(ce), k(ce, x, "Generator"), k(ce, y, function() {
          return this;
        }), k(ce, "toString", function() {
          return "[object Generator]";
        }), r.keys = function(_) {
          var g = Object(_), w = [];
          for (var N in g) w.push(N);
          return w.reverse(), function C() {
            for (; w.length; ) {
              var S = w.pop();
              if (S in g) return C.value = S, C.done = !1, C;
            }
            return C.done = !0, C;
          };
        }, r.values = at, Re.prototype = { constructor: Re, reset: function(g) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(ze), !g) for (var w in this) w.charAt(0) === "t" && c.call(this, w) && !isNaN(+w.slice(1)) && (this[w] = t);
        }, stop: function() {
          this.done = !0;
          var g = this.tryEntries[0].completion;
          if (g.type === "throw") throw g.arg;
          return this.rval;
        }, dispatchException: function(g) {
          if (this.done) throw g;
          var w = this;
          function N(Ge, Je) {
            return de.type = "throw", de.arg = g, w.next = Ge, Je && (w.method = "next", w.arg = t), !!Je;
          }
          for (var C = this.tryEntries.length - 1; C >= 0; --C) {
            var S = this.tryEntries[C], de = S.completion;
            if (S.tryLoc === "root") return N("end");
            if (S.tryLoc <= this.prev) {
              var Ie = c.call(S, "catchLoc"), Ne = c.call(S, "finallyLoc");
              if (Ie && Ne) {
                if (this.prev < S.catchLoc) return N(S.catchLoc, !0);
                if (this.prev < S.finallyLoc) return N(S.finallyLoc);
              } else if (Ie) {
                if (this.prev < S.catchLoc) return N(S.catchLoc, !0);
              } else {
                if (!Ne) throw Error("try statement without catch or finally");
                if (this.prev < S.finallyLoc) return N(S.finallyLoc);
              }
            }
          }
        }, abrupt: function(g, w) {
          for (var N = this.tryEntries.length - 1; N >= 0; --N) {
            var C = this.tryEntries[N];
            if (C.tryLoc <= this.prev && c.call(C, "finallyLoc") && this.prev < C.finallyLoc) {
              var S = C;
              break;
            }
          }
          S && (g === "break" || g === "continue") && S.tryLoc <= w && w <= S.finallyLoc && (S = null);
          var de = S ? S.completion : {};
          return de.type = g, de.arg = w, S ? (this.method = "next", this.next = S.finallyLoc, V) : this.complete(de);
        }, complete: function(g, w) {
          if (g.type === "throw") throw g.arg;
          return g.type === "break" || g.type === "continue" ? this.next = g.arg : g.type === "return" ? (this.rval = this.arg = g.arg, this.method = "return", this.next = "end") : g.type === "normal" && w && (this.next = w), V;
        }, finish: function(g) {
          for (var w = this.tryEntries.length - 1; w >= 0; --w) {
            var N = this.tryEntries[w];
            if (N.finallyLoc === g) return this.complete(N.completion, N.afterLoc), ze(N), V;
          }
        }, catch: function(g) {
          for (var w = this.tryEntries.length - 1; w >= 0; --w) {
            var N = this.tryEntries[w];
            if (N.tryLoc === g) {
              var C = N.completion;
              if (C.type === "throw") {
                var S = C.arg;
                ze(N);
              }
              return S;
            }
          }
          throw Error("illegal catch attempt");
        }, delegateYield: function(g, w, N) {
          return this.delegate = { iterator: at(g), resultName: w, nextLoc: N }, this.method === "next" && (this.arg = t), V;
        } }, r;
      }
      function xt(t, r, a, c, d, f, y) {
        try {
          var b = t[f](y), x = b.value;
        } catch (k) {
          return void a(k);
        }
        b.done ? r(x) : Promise.resolve(x).then(c, d);
      }
      function Jt(t) {
        return function() {
          var r = this, a = arguments;
          return new Promise(function(c, d) {
            var f = t.apply(r, a);
            function y(x) {
              xt(f, c, d, y, b, "next", x);
            }
            function b(x) {
              xt(f, c, d, y, b, "throw", x);
            }
            y(void 0);
          });
        };
      }
      var Et = [
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
      ], ha = ["file", "view", "insert", "format", "|", "select_all", "|", "image", "link", "video", "|", "copy", "cut", "paste", "|"], Jr = ["bold", "italic", "underline", "superscript", "subscript", "font", "font_size", "alignment"], Zr = ["image", "link", "video", "hr_line", "special_char"], fa = ["new_document", "preview", "print"], Xr = ["source_code", "full_screen"];
      function L(t) {
        for (var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", a = "", c = 0; c < t; c++) {
          var d = Math.floor(Math.random() * r.length);
          a += r.charAt(d);
        }
        return a;
      }
      function ee(t) {
        var r = new DOMParser();
        if (t) {
          var a = r.parseFromString(t, "text/html");
          a.querySelectorAll("div").forEach(function(y) {
            var b = a.createElement("p");
            b.innerHTML = y.innerHTML, y.replaceWith(b);
          });
          var c = a.body.innerHTML;
          c = c.replace(/<br\s*\/?>/g, "&nbsp;"), c = c.replace(/<(?=[^/])/g, function(y) {
            return `
`.concat(y);
          }), c = c.trim();
          var d = c.split(`
`), f = d.map(function(y) {
            var b = /^<.*?>|<.*?>$/.test(y);
            return !b && y.trim() ? "<p>".concat(y, "</p>") : y;
          });
          return f.join(`
`).trim();
        }
        return "";
      }
      var Be = function() {
        var r = document.querySelector(".resizeImageWrapper"), a = document.querySelector(".resizer-image");
        r && a && (r.insertAdjacentElement("afterend", a), a.classList.remove("resizer-image"), r.parentNode.removeChild(r));
      }, $e = /* @__PURE__ */ function() {
        var t = Jt(/* @__PURE__ */ We().mark(function r(a, c, d) {
          var f, y, b, x;
          return We().wrap(function(O) {
            for (; ; ) switch (O.prev = O.next) {
              case 0:
                if (!(!c || !a)) {
                  O.next = 3;
                  break;
                }
                return console.error("No crop data or image reference"), O.abrupt("return", null);
              case 3:
                return f = document.createElement("canvas"), y = a.naturalWidth / a.width, b = a.naturalHeight / a.height, f.width = c.width, f.height = c.height, x = f.getContext("2d"), x.clearRect(0, 0, f.width, f.height), x.drawImage(a, c.x * y, c.y * b, c.width * y, c.height * b, 0, 0, c.width, c.height), O.abrupt("return", new Promise(function(K) {
                  var W = "image/png", F = "png";
                  if (d)
                    if (typeof d == "string") {
                      var h = d.split(".");
                      F = h[h.length - 1].toLowerCase(), W = "image/".concat(F === "jpg" ? "jpeg" : F);
                    } else
                      W = d.type || "image/png", F = W.split("/").pop(), F === "jpeg" && (F = "jpg");
                  var ne = W === "image/png" || W === "image/gif", V = ne ? "image/png" : W;
                  f.toBlob(
                    function(H) {
                      if (!H) {
                        console.error("Canvas is empty"), K(null);
                        return;
                      }
                      var B = "cropped-image.png";
                      if (d)
                        if (typeof d == "string") {
                          var T = d.split("/"), Q = T[T.length - 1].replace(/\.[^/.]+$/, "");
                          B = "".concat(Q, "-cropped.").concat(F);
                        } else {
                          var oe = d.name.replace(/\.[^/.]+$/, "") || "cropped-image";
                          B = "".concat(oe, "-cropped.").concat(F);
                        }
                      var $ = new File([H], B, {
                        type: V,
                        lastModified: Date.now()
                      });
                      K($);
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
        return function(a, c, d) {
          return t.apply(this, arguments);
        };
      }();
      function ht(t, r) {
        return gr(t) || Gt(t, r) || Ht(t, r) || zt();
      }
      function zt() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Ht(t, r) {
        if (t) {
          if (typeof t == "string") return Ot(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? Ot(t, r) : void 0;
        }
      }
      function Ot(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, c = Array(r); a < r; a++) c[a] = t[a];
        return c;
      }
      function Gt(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var c, d, f, y, b = [], x = !0, k = !1;
          try {
            if (f = (a = a.call(t)).next, r !== 0) for (; !(x = (c = f.call(a)).done) && (b.push(c.value), b.length !== r); x = !0) ;
          } catch (O) {
            k = !0, d = O;
          } finally {
            try {
              if (!x && a.return != null && (y = a.return(), Object(y) !== y)) return;
            } finally {
              if (k) throw d;
            }
          }
          return b;
        }
      }
      function gr(t) {
        if (Array.isArray(t)) return t;
      }
      function Wt(t) {
        var r, a = t.onSelectOption, c = t.handleInsertHR, d = t.item, f = t.remove_from_navbar, y = d.options;
        y || (y = Zr);
        var b = Object(o.useState)(!1), x = ht(b, 2), k = x[0], O = x[1], K = function(ne, V) {
          ne.preventDefault(), O(!1), V === "hr_line" ? c(ne) : a(ne, V);
        };
        if ((f == null ? void 0 : f.length) > 0) {
          var W, F = f.find(function(h) {
            return h.name === "insert";
          });
          (F == null || (W = F.options) === null || W === void 0 ? void 0 : W.length) > 0 && (y = y.filter(function(h) {
            return !(F != null && F.options.includes(h));
          }));
        }
        return /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.customSelect,
          onMouseEnter: function() {
            return O(!0);
          },
          onMouseLeave: function() {
            return O(!1);
          }
        }, d != null && d.title ? d.title : "Insert", /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(l.a.selectItems, " ").concat(k ? "".concat(l.a.show) : "")
        }, ((r = y) === null || r === void 0 ? void 0 : r.length) > 0 && y.map(function(h, ne) {
          var V = h === "image" || h.name === "image", H = h === "link" || h.name === "link", B = h === "video" || h.name === "video", T = h === "hr_line" || h.name === "hr_line", Q = h === "special_char" || h.name === "special_char";
          return /* @__PURE__ */ e.a.createElement("div", {
            key: "key".concat(ne)
          }, V && /* @__PURE__ */ e.a.createElement("div", {
            className: l.a.selectInsert,
            onClick: function($) {
              return K($, "image");
            }
          }, h != null && h.icon ? h.icon : /* @__PURE__ */ e.a.createElement(Te, null), /* @__PURE__ */ e.a.createElement("span", null, h != null && h.title ? h.title : "Image")), H && /* @__PURE__ */ e.a.createElement("div", {
            className: l.a.selectInsert,
            onClick: function($) {
              return K($, "link");
            }
          }, h != null && h.icon ? h.icon : /* @__PURE__ */ e.a.createElement(ct, null), /* @__PURE__ */ e.a.createElement("span", null, h != null && h.title ? h.title : "Link")), B && /* @__PURE__ */ e.a.createElement("div", {
            className: l.a.selectInsert,
            onClick: function($) {
              return K($, "video");
            }
          }, h != null && h.icon ? h.icon : /* @__PURE__ */ e.a.createElement(Ce, null), /* @__PURE__ */ e.a.createElement("span", null, h != null && h.title ? h.title : "Video")), T && /* @__PURE__ */ e.a.createElement("div", {
            className: l.a.selectInsert,
            onClick: function($) {
              return K($, "hr_line");
            }
          }, h != null && h.icon ? h.icon : /* @__PURE__ */ e.a.createElement(j, null), /* @__PURE__ */ e.a.createElement("span", null, h != null && h.title ? h.title : "Horizontal Line")), Q && /* @__PURE__ */ e.a.createElement("div", {
            className: l.a.selectInsert,
            onClick: function($) {
              return K($, "special_char");
            }
          }, h != null && h.icon ? h.icon : /* @__PURE__ */ e.a.createElement(X, null), /* @__PURE__ */ e.a.createElement("span", null, h != null && h.title ? h.title : "Special Char")));
        })));
      }
      function $r(t, r) {
        return zo(t) || Bo(t, r) || Do(t, r) || vr();
      }
      function vr() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Do(t, r) {
        if (t) {
          if (typeof t == "string") return Ga(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? Ga(t, r) : void 0;
        }
      }
      function Ga(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, c = Array(r); a < r; a++) c[a] = t[a];
        return c;
      }
      function Bo(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var c, d, f, y, b = [], x = !0, k = !1;
          try {
            if (f = (a = a.call(t)).next, r !== 0) for (; !(x = (c = f.call(a)).done) && (b.push(c.value), b.length !== r); x = !0) ;
          } catch (O) {
            k = !0, d = O;
          } finally {
            try {
              if (!x && a.return != null && (y = a.return(), Object(y) !== y)) return;
            } finally {
              if (k) throw d;
            }
          }
          return b;
        }
      }
      function zo(t) {
        if (Array.isArray(t)) return t;
      }
      function To(t) {
        var r = t.handleViewSource, a = t.isFullScreen, c = t.toggleFullScreen, d = t.item;
        t.isPlaceholder, t.placeholder, t.value;
        var f = t.remove_from_navbar, y = d.options, b = Object(o.useState)(!1), x = $r(b, 2), k = x[0], O = x[1], K = function(ne, V, H) {
          ne.preventDefault(), O(!1), !(H != null && H.handleClick && (H.handleClick(H, d), !H.add_functionality)) && (V === "code" ? r() : V === "screen" && c());
        };
        if (y || (y = Xr), (f == null ? void 0 : f.length) > 0) {
          var W, F = f.find(function(h) {
            return h.name === "view";
          });
          (F == null || (W = F.options) === null || W === void 0 ? void 0 : W.length) > 0 && (y = y.filter(function(h) {
            return !(F != null && F.options.includes(h));
          }));
        }
        return /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.customSelect,
          onMouseEnter: function() {
            return O(!0);
          },
          onMouseLeave: function() {
            return O(!1);
          }
        }, d != null && d.title ? d.title : "View", /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(l.a.selectItems, " ").concat(k ? "".concat(l.a.show) : "")
        }, y.map(function(h, ne) {
          var V = h === "source_code" || h.name === "source_code", H = h === "full_screen" || h.name === "full_screen";
          return /* @__PURE__ */ e.a.createElement("div", {
            key: "key".concat(ne)
          }, V && /* @__PURE__ */ e.a.createElement("div", {
            className: l.a.selectInsert,
            onClick: function(T) {
              return K(T, "code", h);
            }
          }, h != null && h.icon ? h.icon : /* @__PURE__ */ e.a.createElement(yt, null), /* @__PURE__ */ e.a.createElement("span", null, h != null && h.title ? h.title : "Source Code")), H && /* @__PURE__ */ e.a.createElement("div", {
            className: l.a.selectInsert,
            onClick: function(T) {
              return K(T, "screen", h);
            }
          }, h != null && h.icon ? h.icon : a ? /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement(P, null), " ", /* @__PURE__ */ e.a.createElement("span", null, h != null && h.title ? h.title : "Exit Full Screen")) : /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement(U, null), " ", /* @__PURE__ */ e.a.createElement("span", null, h != null && h.title ? h.title : "Full Screen"))));
        })));
      }
      function jo(t, r) {
        return Uo(t) || Po(t, r) || Fo(t, r) || Ho();
      }
      function Ho() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Fo(t, r) {
        if (t) {
          if (typeof t == "string") return Ya(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? Ya(t, r) : void 0;
        }
      }
      function Ya(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, c = Array(r); a < r; a++) c[a] = t[a];
        return c;
      }
      function Po(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var c, d, f, y, b = [], x = !0, k = !1;
          try {
            if (f = (a = a.call(t)).next, r !== 0) for (; !(x = (c = f.call(a)).done) && (b.push(c.value), b.length !== r); x = !0) ;
          } catch (O) {
            k = !0, d = O;
          } finally {
            try {
              if (!x && a.return != null && (y = a.return(), Object(y) !== y)) return;
            } finally {
              if (k) throw d;
            }
          }
          return b;
        }
      }
      function Uo(t) {
        if (Array.isArray(t)) return t;
      }
      function Qo(t) {
        var r = t.handleNewDocument, a = t.handlePreview, c = t.handlePrint, d = t.item, f = t.remove_from_navbar, y = d.options, b = Object(o.useState)(!1), x = jo(b, 2), k = x[0], O = x[1], K = function(ne, V, H) {
          ne.preventDefault(), O(!1), !(H != null && H.handleClick && (H.handleClick(H, d), !H.add_functionality)) && (V === "new_document" ? r() : V === "preview" ? a() : V === "print" && setTimeout(function() {
            c();
          }, 1));
        };
        if (y || (y = fa), (f == null ? void 0 : f.length) > 0) {
          var W, F = f.find(function(h) {
            return h.name === "file";
          });
          (F == null || (W = F.options) === null || W === void 0 ? void 0 : W.length) > 0 && (y = y.filter(function(h) {
            return !(F != null && F.options.includes(h));
          }));
        }
        return /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.customSelect,
          onMouseEnter: function() {
            return O(!0);
          },
          onMouseLeave: function() {
            return O(!1);
          }
        }, d != null && d.title ? d.title : "File", /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(l.a.selectItems, " ").concat(k ? "".concat(l.a.show) : "")
        }, y.map(function(h, ne) {
          var V = h === "new_document" || h.name === "new_document", H = h === "preview" || h.name === "preview", B = h === "print" || h.name === "print";
          return h === "upload_file" || h.name, /* @__PURE__ */ e.a.createElement("div", {
            key: "key".concat(ne)
          }, V && /* @__PURE__ */ e.a.createElement("div", {
            className: l.a.selectInsert,
            onClick: function(Q) {
              return K(Q, "new_document", h);
            }
          }, h != null && h.icon ? h.icon : /* @__PURE__ */ e.a.createElement(ae, null), /* @__PURE__ */ e.a.createElement("span", null, h != null && h.title ? h.title : "New Document")), H && /* @__PURE__ */ e.a.createElement("div", {
            className: l.a.selectInsert,
            onClick: function(Q) {
              return K(Q, "preview", h);
            }
          }, h != null && h.icon ? h.icon : /* @__PURE__ */ e.a.createElement(G, null), /* @__PURE__ */ e.a.createElement("span", null, h != null && h.title ? h.title : "Preview")), B && /* @__PURE__ */ e.a.createElement("div", {
            className: l.a.selectInsert,
            onClick: function(Q) {
              return K(Q, "print", h);
            }
          }, h != null && h.icon ? h.icon : /* @__PURE__ */ e.a.createElement(Y, null), /* @__PURE__ */ e.a.createElement("span", null, h != null && h.title ? h.title : "Print")));
        })));
      }
      var Go = i(2), Ka = /* @__PURE__ */ i.n(Go), Yo = function(r) {
        var a = r.onClose, c = r.children, d = r.title, f = r.className, y = r.isFullScreen;
        return /* @__PURE__ */ Ka.a.createPortal(/* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(l.a.modalOverlay, " ").concat(y ? "".concat(l.a.fillScreenView) : "")
        }, /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(l.a.modalPopup, " ").concat(f || ""),
          onClick: function(x) {
            return x.stopPropagation();
          }
        }, !y && /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.modelTitle
        }, /* @__PURE__ */ e.a.createElement("h2", null, d), /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.cross,
          onClick: a
        }, /* @__PURE__ */ e.a.createElement(se, null))), /* @__PURE__ */ e.a.createElement("hr", null)), c)), document.getElementById("modal-root"));
      }, ga = Yo;
      function Ko(t) {
        var r = t.viewSource, a = t.setViewSource, c = t.sourceCode, d = t.setSourceCode, f = t.handleSaveSource;
        return /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.mlMainContentBox
        }, /* @__PURE__ */ e.a.createElement(ga, {
          isOpen: r,
          onClose: function() {
            return a(!1);
          },
          title: "Source Code",
          className: l.a.fullScreenModel
        }, /* @__PURE__ */ e.a.createElement("textarea", {
          className: l.a.wysiwygEditorSource,
          value: c,
          onChange: function(b) {
            return d(b.target.value);
          }
        }), /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.reactEditorTextEnd
        }, /* @__PURE__ */ e.a.createElement("button", {
          className: l.a.saveButton,
          onClick: f
        }, "Save"))));
      }
      function Vo(t) {
        var r = t.openPreview, a = t.setOpenPreview, c = t.previewContent;
        return /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.mlMainContentBox
        }, /* @__PURE__ */ e.a.createElement(ga, {
          isOpen: r,
          onClose: function() {
            return a(!1);
          },
          title: "Preview",
          className: l.a.fullScreenModel
        }, /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.reactEditorMt10,
          dangerouslySetInnerHTML: {
            __html: c
          }
        })));
      }
      function Wo(t) {
        var r = t.handleHideChildOptions, a = t.editorRef, c = [
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
        ], d = function(y, b) {
          y.preventDefault(), a.current.focus();
          var x = window.getSelection();
          x.isCollapsed, document.execCommand("styleWithCSS", !1, !0), document.execCommand("fontName", !1, b.style), r();
        };
        return /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, c.map(function(f, y) {
          return /* @__PURE__ */ e.a.createElement("button", {
            key: "key".concat(y),
            style: {
              fontFamily: f.style
            },
            className: l.a.fontFamilyOption,
            onClick: function(x) {
              return d(x, f);
            }
          }, f.name);
        }));
      }
      var qo = Wo;
      function Jo(t) {
        var r = t.handleHideChildOptions, a = ["10", "12", "14", "16", "18", "20", "24", "28", "32", "36", "48", "60", "72"], c = function(f, y) {
          f.preventDefault();
          var b = window.getSelection();
          if (b.isCollapsed) {
            var O = b.getRangeAt(0), K = document.createElement("span");
            K.style.fontSize = y + "px", K.innerHTML = "​", O.insertNode(K), O.setStart(K, 1), O.setEnd(K, 1), b.removeAllRanges(), b.addRange(O);
          } else {
            document.execCommand("styleWithCSS", !1, !0), document.execCommand("fontSize", !1, "1");
            var x = b.getRangeAt(0), k = document.createElement("span");
            k.style.fontSize = y + "px", x.surroundContents(k);
          }
          r();
        };
        return /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, a.map(function(d, f) {
          return /* @__PURE__ */ e.a.createElement("button", {
            key: "key".concat(f),
            onClick: function(b) {
              return c(b, d);
            },
            className: l.a.selectOption
          }, "".concat(d, "px"));
        }));
      }
      var Zo = Jo;
      function Xo(t) {
        var r = t.handleHideChildOptions, a = [{
          title: "Left",
          icon: /* @__PURE__ */ e.a.createElement(ue, null),
          type: "justifyLeft"
        }, {
          title: "Center",
          icon: /* @__PURE__ */ e.a.createElement(jt, null),
          type: "justifyCenter"
        }, {
          title: "Right",
          icon: /* @__PURE__ */ e.a.createElement(Ke, null),
          type: "justifyRight"
        }, {
          title: "Justify",
          icon: /* @__PURE__ */ e.a.createElement(je, null),
          type: "justifyFull"
        }], c = function(f, y) {
          f.preventDefault(), document.execCommand(y.type), r();
        };
        return /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, a.map(function(d, f) {
          return /* @__PURE__ */ e.a.createElement("button", {
            key: "key".concat(f),
            onClick: function(b) {
              return c(b, d);
            },
            className: "".concat(l.a.selectOption, " ").concat(l.a.reactEditorTextLeft)
          }, /* @__PURE__ */ e.a.createElement("span", {
            className: l.a.reactEditorMe5
          }, d.icon), d.title);
        }));
      }
      var $o = Xo;
      function ei(t) {
        return ni(t) || ai(t) || ri(t) || ti();
      }
      function ti() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function ri(t, r) {
        if (t) {
          if (typeof t == "string") return va(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? va(t, r) : void 0;
        }
      }
      function ai(t) {
        if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
      }
      function ni(t) {
        if (Array.isArray(t)) return va(t);
      }
      function va(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, c = Array(r); a < r; a++) c[a] = t[a];
        return c;
      }
      function oi(t) {
        var r = t.handleHideChildOptions, a = [1, 1.1, 1.2, 1.3, 1.4, 1.5, 2], c = function(f, y) {
          f.preventDeafult();
          var b = window.getSelection();
          if (b && b.rangeCount > 0 && b.toString().trim() !== "") {
            var x = b.getRangeAt(0), k = "line-height: ".concat(y, ";"), O = function W(F) {
              if (F.nodeType === Node.TEXT_NODE) {
                var h = document.createElement("span");
                return h.style.cssText = k, h.appendChild(F.cloneNode(!0)), h;
              } else if (F.nodeType === Node.ELEMENT_NODE && F.tagName.toLowerCase() === "p") {
                var ne = F.cloneNode(!1);
                return ei(F.childNodes).forEach(function(V) {
                  ne.appendChild(W(V));
                }), ne;
              } else
                return F.cloneNode(!0);
            }, K = O(x.cloneContents());
            x.deleteContents(), x.insertNode(K), b.removeAllRanges(), b.addRange(x);
          }
          r();
        };
        return /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, a.map(function(d, f) {
          return /* @__PURE__ */ e.a.createElement("button", {
            key: "key".concat(f),
            onClick: function(b) {
              return c(b, d);
            },
            className: l.a.selectOption
          }, d);
        }));
      }
      var ii = oi;
      function ba(t, r) {
        return di(t) || si(t, r) || ci(t, r) || li();
      }
      function li() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function ci(t, r) {
        if (t) {
          if (typeof t == "string") return Va(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? Va(t, r) : void 0;
        }
      }
      function Va(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, c = Array(r); a < r; a++) c[a] = t[a];
        return c;
      }
      function si(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var c, d, f, y, b = [], x = !0, k = !1;
          try {
            if (f = (a = a.call(t)).next, r !== 0) for (; !(x = (c = f.call(a)).done) && (b.push(c.value), b.length !== r); x = !0) ;
          } catch (O) {
            k = !0, d = O;
          } finally {
            try {
              if (!x && a.return != null && (y = a.return(), Object(y) !== y)) return;
            } finally {
              if (k) throw d;
            }
          }
          return b;
        }
      }
      function di(t) {
        if (Array.isArray(t)) return t;
      }
      function ui(t) {
        var r, a = t.item, c = t.isFullScreen, d = t.remove_from_navbar, f = t.editorRef, y = a.options;
        y || (y = Jr);
        var b = Object(o.useState)(!1), x = ba(b, 2), k = x[0], O = x[1], K = Object(o.useState)(0), W = ba(K, 2), F = W[0], h = W[1], ne = Object(o.useState)(0), V = ba(ne, 2), H = V[0], B = V[1], T = L(16), Q = function(Qe, Oe) {
          if (Oe) {
            var ke = document.getElementById(T), ze = ke.getBoundingClientRect().top, Re = Oe.currentTarget.getBoundingClientRect().top;
            B(c ? Re : Re - ze);
          }
          O(!0), h(Qe);
        }, oe = function() {
          O(!1), h(0);
        }, $ = function(Qe, Oe, ke) {
          Qe.preventDefault(), f.current.focus(), !(ke != null && ke.handleClick && (ke.handleClick(ke, a), !ke.add_functionality)) && (document.execCommand(Oe), oe());
        };
        if ((d == null ? void 0 : d.length) > 0) {
          var ce, Se = d.find(function(D) {
            return D.name === "format";
          });
          (Se == null || (ce = Se.options) === null || ce === void 0 ? void 0 : ce.length) > 0 && (y = y.filter(function(D) {
            return !(Se != null && Se.options.includes(D));
          }));
        }
        return /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.customSelect,
          onMouseOver: function() {
            return O(!0);
          },
          onMouseLeave: oe,
          id: T
        }, a != null && a.title ? a.title : "Format", /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(l.a.selectItems, " ").concat(k ? "".concat(l.a.show) : "")
        }, ((r = y) === null || r === void 0 ? void 0 : r.length) > 0 && y.map(function(D, Qe) {
          var Oe = D === "bold" || D.name === "bold", ke = D === "italic" || D.name === "italic", ze = D === "underline" || D.name === "underline", Re = D === "superscript" || D.name === "superscript", at = D === "subscript" || D.name === "subscript", _ = D === "font" || D.name === "font", g = D === "font_size" || D.name === "font_size", w = D === "alignment" || D.name === "alignment";
          return /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, Oe && /* @__PURE__ */ e.a.createElement("button", {
            className: l.a.selectInsert,
            onClick: function(C) {
              return $(C, "bold", D);
            }
          }, D != null && D.icon ? D.icon : /* @__PURE__ */ e.a.createElement(Ae, null), /* @__PURE__ */ e.a.createElement("span", null, D != null && D.title ? D.title : "Bold")), ke && /* @__PURE__ */ e.a.createElement("button", {
            className: l.a.selectInsert,
            onClick: function(C) {
              return $(C, "italic", D);
            }
          }, D != null && D.icon ? D.icon : /* @__PURE__ */ e.a.createElement(xe, null), /* @__PURE__ */ e.a.createElement("span", null, D != null && D.title ? D.title : "Italic")), ze && /* @__PURE__ */ e.a.createElement("button", {
            className: l.a.selectInsert,
            onClick: function(C) {
              return $(C, "underline", D);
            }
          }, D != null && D.icon ? D.icon : /* @__PURE__ */ e.a.createElement(we, null), /* @__PURE__ */ e.a.createElement("span", null, D != null && D.title ? D.title : "Underline")), Re && /* @__PURE__ */ e.a.createElement("button", {
            className: l.a.selectInsert,
            onClick: function(C) {
              return $(C, "superscript", D);
            }
          }, D != null && D.icon ? D.icon : /* @__PURE__ */ e.a.createElement(Ee, null), /* @__PURE__ */ e.a.createElement("span", null, D != null && D.title ? D.title : "Superscript")), at && /* @__PURE__ */ e.a.createElement("button", {
            className: l.a.selectInsert,
            onClick: function(C) {
              return $(C, "subscript", D);
            }
          }, D != null && D.icon ? D.icon : /* @__PURE__ */ e.a.createElement(Fe, null), /* @__PURE__ */ e.a.createElement("span", null, D != null && D.title ? D.title : "Subscript")), _ && /* @__PURE__ */ e.a.createElement("div", {
            onMouseOver: function(C) {
              Q(1, C);
            },
            onMouseLeave: oe
          }, /* @__PURE__ */ e.a.createElement("div", {
            className: l.a.selectInsert
          }, D != null && D.icon ? D.icon : /* @__PURE__ */ e.a.createElement(E, null), /* @__PURE__ */ e.a.createElement("span", null, D != null && D.title ? D.title : "Font Family"))), g && /* @__PURE__ */ e.a.createElement("div", {
            onMouseOver: function(C) {
              Q(2, C);
            },
            onMouseLeave: oe
          }, /* @__PURE__ */ e.a.createElement("div", {
            className: l.a.selectInsert
          }, D != null && D.icon ? D.icon : /* @__PURE__ */ e.a.createElement(M, null), /* @__PURE__ */ e.a.createElement("span", null, D != null && D.title ? D.title : "Font Size"))), w && /* @__PURE__ */ e.a.createElement("div", {
            onMouseOver: function(C) {
              Q(3, C);
            },
            onMouseLeave: oe
          }, /* @__PURE__ */ e.a.createElement("div", {
            className: l.a.selectInsert
          }, D != null && D.icon ? D.icon : /* @__PURE__ */ e.a.createElement(ue, null), /* @__PURE__ */ e.a.createElement("span", null, D != null && D.title ? D.title : "Align"))));
        })), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(l.a.selectFormationDropdown, " ").concat(F === 1 ? "".concat(l.a.show) : ""),
          onMouseOver: function() {
            Q(1);
          },
          onMouseLeave: function() {
            return h(!1);
          },
          style: {
            top: H
          }
        }, /* @__PURE__ */ e.a.createElement(qo, {
          handleHideChildOptions: oe,
          editorRef: f
        })), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(l.a.selectFormationDropdown, " ").concat(l.a.fontSizeDropdown, " ").concat(F === 2 ? "".concat(l.a.show) : ""),
          onMouseOver: function() {
            Q(2);
          },
          onMouseLeave: function() {
            return h(!1);
          },
          style: {
            top: H
          }
        }, /* @__PURE__ */ e.a.createElement(Zo, {
          handleHideChildOptions: oe
        })), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(l.a.selectFormationDropdown, " ").concat(l.a.fontSizeDropdown, " ").concat(F === 3 ? "".concat(l.a.show) : ""),
          onMouseOver: function() {
            Q(3);
          },
          onMouseLeave: function() {
            return h(!1);
          },
          style: {
            top: H
          }
        }, /* @__PURE__ */ e.a.createElement($o, {
          handleHideChildOptions: oe
        })), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(l.a.selectFormationDropdown, " ").concat(l.a.fontSizeDropdown, " ").concat(F === 4 ? "".concat(l.a.show) : ""),
          onMouseOver: function() {
            Q(4);
          },
          onMouseLeave: function() {
            return h(!1);
          },
          style: {
            top: H
          }
        }, /* @__PURE__ */ e.a.createElement(ii, {
          handleHideChildOptions: oe
        })));
      }
      function ya(t, r) {
        return fi(t) || hi(t, r) || pi(t, r) || mi();
      }
      function mi() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function pi(t, r) {
        if (t) {
          if (typeof t == "string") return Wa(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? Wa(t, r) : void 0;
        }
      }
      function Wa(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, c = Array(r); a < r; a++) c[a] = t[a];
        return c;
      }
      function hi(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var c, d, f, y, b = [], x = !0, k = !1;
          try {
            if (f = (a = a.call(t)).next, r === 0) {
              if (Object(a) !== a) return;
              x = !1;
            } else for (; !(x = (c = f.call(a)).done) && (b.push(c.value), b.length !== r); x = !0) ;
          } catch (O) {
            k = !0, d = O;
          } finally {
            try {
              if (!x && a.return != null && (y = a.return(), Object(y) !== y)) return;
            } finally {
              if (k) throw d;
            }
          }
          return b;
        }
      }
      function fi(t) {
        if (Array.isArray(t)) return t;
      }
      function gi(t) {
        var r = t.match(/\d+/g), a = ya(r, 3), c = a[0], d = a[1], f = a[2], y = parseInt(c).toString(16).padStart(2, "0"), b = parseInt(d).toString(16).padStart(2, "0"), x = parseInt(f).toString(16).padStart(2, "0"), k = "#".concat(y).concat(b).concat(x);
        return k;
      }
      function qa(t) {
        var r = t.type, a = t.item, c = t.title, d = t.editorRef, f = Object(o.useState)("#000"), y = ya(f, 2), b = y[0], x = y[1], k = Object(o.useState)(!1), O = ya(k, 2), K = O[0], W = O[1], F = Object(o.useRef)(null), h = function(B, T, Q) {
          B.preventDefault(), Q || W(!1), !(a != null && a.handleClick && (a.handleClick(a), !a.add_functionality)) && (x(T), document.execCommand(r, !1, T), Q || W(!1));
        }, ne = function(B) {
          B.preventDefault(), W(!0);
        }, V = function(B) {
          F.current && !F.current.contains(B.target) && W(!1);
        };
        return Object(o.useEffect)(function() {
          var H = function() {
            var T;
            if (d != null && (T = d.current) !== null && T !== void 0 && T.contains(window.getSelection().anchorNode)) {
              var Q = "transparent";
              if (r === "foreColor")
                Q = document.queryCommandValue(r);
              else {
                var oe = window.getSelection();
                if (oe.rangeCount > 0) {
                  var $ = oe.getRangeAt(0), ce = $.commonAncestorContainer;
                  if (ce.nodeType === 3) {
                    var Se = ce.parentElement;
                    Q = window.getComputedStyle(Se).backgroundColor;
                  } else
                    Q = window.getComputedStyle(ce).backgroundColor;
                }
              }
              Q && Q !== "transparent" && x(gi(Q));
            }
          };
          return document.addEventListener("selectionchange", H), document.addEventListener("mousedown", V), function() {
            document.removeEventListener("selectionchange", H), document.addEventListener("mousedown", V);
          };
        }, [d]), /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.mainColorComponent,
          ref: F
        }, /* @__PURE__ */ e.a.createElement("button", {
          onClick: ne,
          title: a != null && a.title ? a.title : c
        }, /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(l.a.reactEditorDFlex, " ").concat(l.a.reactEditorFlexColumn)
        }, a != null && a.icon ? a.icon : r === "foreColor" ? /* @__PURE__ */ e.a.createElement(I, null) : /* @__PURE__ */ e.a.createElement(A, null), /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.bottomColoredLine,
          style: {
            backgroundColor: b
          }
        }))), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(l.a.openColorBox, " ").concat(K ? l.a.show : "")
        }, /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(l.a.colorBoxGrid, " ").concat(l.a.reactEditorDFlex)
        }, /* @__PURE__ */ e.a.createElement("button", {
          className: l.a.colorBox,
          style: {
            backgroundColor: "#BFEDD2"
          },
          title: "Light Green",
          onClick: function(B) {
            return h(B, "#BFEDD2");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: l.a.colorBox,
          style: {
            backgroundColor: "#FBEEB8"
          },
          title: "Light Yellow",
          onClick: function(B) {
            return h(B, "#FBEEB8");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: l.a.colorBox,
          style: {
            backgroundColor: "#F8CAC6"
          },
          title: "Light Red",
          onClick: function(B) {
            return h(B, "#BFEDD2");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: l.a.colorBox,
          style: {
            backgroundColor: "#ECCAFA"
          },
          title: "Light Purple",
          onClick: function(B) {
            return h(B, "#ECCAFA");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: l.a.colorBox,
          style: {
            backgroundColor: "#C2E0F4"
          },
          title: "Light Blue",
          onClick: function(B) {
            return h(B, "#C2E0F4");
          }
        })), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(l.a.colorBoxGrid, " ").concat(l.a.reactEditorDFlex)
        }, /* @__PURE__ */ e.a.createElement("button", {
          className: l.a.colorBox,
          style: {
            backgroundColor: "#2DC26B"
          },
          title: "Green",
          onClick: function(B) {
            return h(B, "#2DC26B");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: l.a.colorBox,
          style: {
            backgroundColor: "#F1C40F"
          },
          title: "Yellow",
          onClick: function(B) {
            return h(B, "#F1C40F");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: l.a.colorBox,
          style: {
            backgroundColor: "#E03E2D"
          },
          title: "Red",
          onClick: function(B) {
            return h(B, "#E03E2D");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: l.a.colorBox,
          style: {
            backgroundColor: "#B96AD9"
          },
          title: "Purple",
          onClick: function(B) {
            return h(B, "#B96AD9");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: l.a.colorBox,
          style: {
            backgroundColor: "#3598DB"
          },
          title: "Blue",
          onClick: function(B) {
            return h(B, "#3598DB");
          }
        })), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(l.a.colorBoxGrid, " ").concat(l.a.reactEditorDFlex)
        }, /* @__PURE__ */ e.a.createElement("button", {
          className: l.a.colorBox,
          style: {
            backgroundColor: "#169179"
          },
          title: "Dark Turquoise",
          onClick: function(B) {
            return h(B, "#169179");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: l.a.colorBox,
          style: {
            backgroundColor: "#E67E23"
          },
          title: "Orange",
          onClick: function(B) {
            return h(B, "#E67E23");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: l.a.colorBox,
          style: {
            backgroundColor: "#BA372A"
          },
          title: "Dark Red",
          onClick: function(B) {
            return h(B, "#BA372A");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: l.a.colorBox,
          style: {
            backgroundColor: "#843FA1"
          },
          title: "Dark Purple",
          onClick: function(B) {
            return h(B, "#843FA1");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: l.a.colorBox,
          style: {
            backgroundColor: "#236FA1"
          },
          title: "Dark Blue",
          onClick: function(B) {
            return h(B, "#236FA1");
          }
        })), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(l.a.colorBoxGrid, " ").concat(l.a.reactEditorDFlex)
        }, /* @__PURE__ */ e.a.createElement("button", {
          className: l.a.colorBox,
          style: {
            backgroundColor: "#ECF0F1"
          },
          title: "Light Gray",
          onClick: function(B) {
            return h(B, "#ECF0F1");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: l.a.colorBox,
          style: {
            backgroundColor: "#CED4D9"
          },
          title: "Medium Gray",
          onClick: function(B) {
            return h(B, "#CED4D9");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: l.a.colorBox,
          style: {
            backgroundColor: "#95A5A6"
          },
          title: "Gray",
          onClick: function(B) {
            return h(B, "#95A5A6");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: l.a.colorBox,
          style: {
            backgroundColor: "#7E8C8D"
          },
          title: "Dark Gray",
          onClick: function(B) {
            return h(B, "#7E8C8D");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: l.a.colorBox,
          style: {
            backgroundColor: "#34495E"
          },
          title: "Navy Blue",
          onClick: function(B) {
            return h(B, "#34495E");
          }
        })), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(l.a.colorBoxGrid, " ").concat(l.a.reactEditorDFlex)
        }, /* @__PURE__ */ e.a.createElement("button", {
          className: l.a.colorBox,
          style: {
            backgroundColor: "#fff"
          },
          title: "White",
          onClick: function(B) {
            return h(B, "#fff");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: l.a.colorBox,
          style: {
            backgroundColor: "#000"
          },
          title: "Black",
          onClick: function(B) {
            return h(B, "#000");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: l.a.colorBox,
          style: {
            pointerEvents: "none"
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: l.a.colorBox,
          style: {
            pointerEvents: "none"
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: l.a.colorBox,
          title: "Custom color",
          style: {
            cursor: "pointer",
            display: "flex",
            alignItems: "center"
          }
        }, /* @__PURE__ */ e.a.createElement("input", {
          id: "input-color",
          type: "color",
          value: b,
          onChange: function(B) {
            return h(B, B.target.value, "input");
          }
        })))));
      }
      function Ja(t) {
        var r = t.name, a = t.icon, c = t.title, d = t.item, f = t.editorRef, y = function(x) {
          x.preventDefault(), !(d != null && d.handleClick && (d.handleClick(d), !d.add_functionality)) && f.current && (f.current.dir = r);
        };
        return /* @__PURE__ */ e.a.createElement("button", {
          onClick: y,
          title: d != null && d.title ? d.title : c
        }, d != null && d.icon ? d.icon : a);
      }
      var vi = function() {
        return /* @__PURE__ */ Ka.a.createPortal(/* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(l.a.modalOverlay, " ").concat(l.a.imageModelOverly)
        }, /* @__PURE__ */ e.a.createElement("div", {
          onClick: function(a) {
            return a.stopPropagation();
          }
        }, /* @__PURE__ */ e.a.createElement("img", {
          src: it,
          alt: ""
        }))), document.getElementById("modal-root"));
      }, bi = vi;
      function Za() {
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
      function Xa() {
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
      function $a() {
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
      function br(t) {
        "@babel/helpers - typeof";
        return br = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
          return typeof r;
        } : function(r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
        }, br(t);
      }
      function wa() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
        wa = function() {
          return r;
        };
        var t, r = {}, a = Object.prototype, c = a.hasOwnProperty, d = Object.defineProperty || function(_, g, w) {
          _[g] = w.value;
        }, f = typeof Symbol == "function" ? Symbol : {}, y = f.iterator || "@@iterator", b = f.asyncIterator || "@@asyncIterator", x = f.toStringTag || "@@toStringTag";
        function k(_, g, w) {
          return Object.defineProperty(_, g, { value: w, enumerable: !0, configurable: !0, writable: !0 }), _[g];
        }
        try {
          k({}, "");
        } catch {
          k = function(w, N, C) {
            return w[N] = C;
          };
        }
        function O(_, g, w, N) {
          var C = g && g.prototype instanceof H ? g : H, S = Object.create(C.prototype), de = new Re(N || []);
          return d(S, "_invoke", { value: Qe(_, w, de) }), S;
        }
        function K(_, g, w) {
          try {
            return { type: "normal", arg: _.call(g, w) };
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        r.wrap = O;
        var W = "suspendedStart", F = "suspendedYield", h = "executing", ne = "completed", V = {};
        function H() {
        }
        function B() {
        }
        function T() {
        }
        var Q = {};
        k(Q, y, function() {
          return this;
        });
        var oe = Object.getPrototypeOf, $ = oe && oe(oe(at([])));
        $ && $ !== a && c.call($, y) && (Q = $);
        var ce = T.prototype = H.prototype = Object.create(Q);
        function Se(_) {
          ["next", "throw", "return"].forEach(function(g) {
            k(_, g, function(w) {
              return this._invoke(g, w);
            });
          });
        }
        function D(_, g) {
          function w(C, S, de, Ie) {
            var Ne = K(_[C], _, S);
            if (Ne.type !== "throw") {
              var Ge = Ne.arg, Je = Ge.value;
              return Je && br(Je) == "object" && c.call(Je, "__await") ? g.resolve(Je.__await).then(function(et) {
                w("next", et, de, Ie);
              }, function(et) {
                w("throw", et, de, Ie);
              }) : g.resolve(Je).then(function(et) {
                Ge.value = et, de(Ge);
              }, function(et) {
                return w("throw", et, de, Ie);
              });
            }
            Ie(Ne.arg);
          }
          var N;
          d(this, "_invoke", { value: function(S, de) {
            function Ie() {
              return new g(function(Ne, Ge) {
                w(S, de, Ne, Ge);
              });
            }
            return N = N ? N.then(Ie, Ie) : Ie();
          } });
        }
        function Qe(_, g, w) {
          var N = W;
          return function(C, S) {
            if (N === h) throw Error("Generator is already running");
            if (N === ne) {
              if (C === "throw") throw S;
              return { value: t, done: !0 };
            }
            for (w.method = C, w.arg = S; ; ) {
              var de = w.delegate;
              if (de) {
                var Ie = Oe(de, w);
                if (Ie) {
                  if (Ie === V) continue;
                  return Ie;
                }
              }
              if (w.method === "next") w.sent = w._sent = w.arg;
              else if (w.method === "throw") {
                if (N === W) throw N = ne, w.arg;
                w.dispatchException(w.arg);
              } else w.method === "return" && w.abrupt("return", w.arg);
              N = h;
              var Ne = K(_, g, w);
              if (Ne.type === "normal") {
                if (N = w.done ? ne : F, Ne.arg === V) continue;
                return { value: Ne.arg, done: w.done };
              }
              Ne.type === "throw" && (N = ne, w.method = "throw", w.arg = Ne.arg);
            }
          };
        }
        function Oe(_, g) {
          var w = g.method, N = _.iterator[w];
          if (N === t) return g.delegate = null, w === "throw" && _.iterator.return && (g.method = "return", g.arg = t, Oe(_, g), g.method === "throw") || w !== "return" && (g.method = "throw", g.arg = new TypeError("The iterator does not provide a '" + w + "' method")), V;
          var C = K(N, _.iterator, g.arg);
          if (C.type === "throw") return g.method = "throw", g.arg = C.arg, g.delegate = null, V;
          var S = C.arg;
          return S ? S.done ? (g[_.resultName] = S.value, g.next = _.nextLoc, g.method !== "return" && (g.method = "next", g.arg = t), g.delegate = null, V) : S : (g.method = "throw", g.arg = new TypeError("iterator result is not an object"), g.delegate = null, V);
        }
        function ke(_) {
          var g = { tryLoc: _[0] };
          1 in _ && (g.catchLoc = _[1]), 2 in _ && (g.finallyLoc = _[2], g.afterLoc = _[3]), this.tryEntries.push(g);
        }
        function ze(_) {
          var g = _.completion || {};
          g.type = "normal", delete g.arg, _.completion = g;
        }
        function Re(_) {
          this.tryEntries = [{ tryLoc: "root" }], _.forEach(ke, this), this.reset(!0);
        }
        function at(_) {
          if (_ || _ === "") {
            var g = _[y];
            if (g) return g.call(_);
            if (typeof _.next == "function") return _;
            if (!isNaN(_.length)) {
              var w = -1, N = function C() {
                for (; ++w < _.length; ) if (c.call(_, w)) return C.value = _[w], C.done = !1, C;
                return C.value = t, C.done = !0, C;
              };
              return N.next = N;
            }
          }
          throw new TypeError(br(_) + " is not iterable");
        }
        return B.prototype = T, d(ce, "constructor", { value: T, configurable: !0 }), d(T, "constructor", { value: B, configurable: !0 }), B.displayName = k(T, x, "GeneratorFunction"), r.isGeneratorFunction = function(_) {
          var g = typeof _ == "function" && _.constructor;
          return !!g && (g === B || (g.displayName || g.name) === "GeneratorFunction");
        }, r.mark = function(_) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(_, T) : (_.__proto__ = T, k(_, x, "GeneratorFunction")), _.prototype = Object.create(ce), _;
        }, r.awrap = function(_) {
          return { __await: _ };
        }, Se(D.prototype), k(D.prototype, b, function() {
          return this;
        }), r.AsyncIterator = D, r.async = function(_, g, w, N, C) {
          C === void 0 && (C = Promise);
          var S = new D(O(_, g, w, N), C);
          return r.isGeneratorFunction(g) ? S : S.next().then(function(de) {
            return de.done ? de.value : S.next();
          });
        }, Se(ce), k(ce, x, "Generator"), k(ce, y, function() {
          return this;
        }), k(ce, "toString", function() {
          return "[object Generator]";
        }), r.keys = function(_) {
          var g = Object(_), w = [];
          for (var N in g) w.push(N);
          return w.reverse(), function C() {
            for (; w.length; ) {
              var S = w.pop();
              if (S in g) return C.value = S, C.done = !1, C;
            }
            return C.done = !0, C;
          };
        }, r.values = at, Re.prototype = { constructor: Re, reset: function(g) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(ze), !g) for (var w in this) w.charAt(0) === "t" && c.call(this, w) && !isNaN(+w.slice(1)) && (this[w] = t);
        }, stop: function() {
          this.done = !0;
          var g = this.tryEntries[0].completion;
          if (g.type === "throw") throw g.arg;
          return this.rval;
        }, dispatchException: function(g) {
          if (this.done) throw g;
          var w = this;
          function N(Ge, Je) {
            return de.type = "throw", de.arg = g, w.next = Ge, Je && (w.method = "next", w.arg = t), !!Je;
          }
          for (var C = this.tryEntries.length - 1; C >= 0; --C) {
            var S = this.tryEntries[C], de = S.completion;
            if (S.tryLoc === "root") return N("end");
            if (S.tryLoc <= this.prev) {
              var Ie = c.call(S, "catchLoc"), Ne = c.call(S, "finallyLoc");
              if (Ie && Ne) {
                if (this.prev < S.catchLoc) return N(S.catchLoc, !0);
                if (this.prev < S.finallyLoc) return N(S.finallyLoc);
              } else if (Ie) {
                if (this.prev < S.catchLoc) return N(S.catchLoc, !0);
              } else {
                if (!Ne) throw Error("try statement without catch or finally");
                if (this.prev < S.finallyLoc) return N(S.finallyLoc);
              }
            }
          }
        }, abrupt: function(g, w) {
          for (var N = this.tryEntries.length - 1; N >= 0; --N) {
            var C = this.tryEntries[N];
            if (C.tryLoc <= this.prev && c.call(C, "finallyLoc") && this.prev < C.finallyLoc) {
              var S = C;
              break;
            }
          }
          S && (g === "break" || g === "continue") && S.tryLoc <= w && w <= S.finallyLoc && (S = null);
          var de = S ? S.completion : {};
          return de.type = g, de.arg = w, S ? (this.method = "next", this.next = S.finallyLoc, V) : this.complete(de);
        }, complete: function(g, w) {
          if (g.type === "throw") throw g.arg;
          return g.type === "break" || g.type === "continue" ? this.next = g.arg : g.type === "return" ? (this.rval = this.arg = g.arg, this.method = "return", this.next = "end") : g.type === "normal" && w && (this.next = w), V;
        }, finish: function(g) {
          for (var w = this.tryEntries.length - 1; w >= 0; --w) {
            var N = this.tryEntries[w];
            if (N.finallyLoc === g) return this.complete(N.completion, N.afterLoc), ze(N), V;
          }
        }, catch: function(g) {
          for (var w = this.tryEntries.length - 1; w >= 0; --w) {
            var N = this.tryEntries[w];
            if (N.tryLoc === g) {
              var C = N.completion;
              if (C.type === "throw") {
                var S = C.arg;
                ze(N);
              }
              return S;
            }
          }
          throw Error("illegal catch attempt");
        }, delegateYield: function(g, w, N) {
          return this.delegate = { iterator: at(g), resultName: w, nextLoc: N }, this.method === "next" && (this.arg = t), V;
        } }, r;
      }
      function en(t, r, a, c, d, f, y) {
        try {
          var b = t[f](y), x = b.value;
        } catch (k) {
          return void a(k);
        }
        b.done ? r(x) : Promise.resolve(x).then(c, d);
      }
      function yi(t) {
        return function() {
          var r = this, a = arguments;
          return new Promise(function(c, d) {
            var f = t.apply(r, a);
            function y(x) {
              en(f, c, d, y, b, "next", x);
            }
            function b(x) {
              en(f, c, d, y, b, "throw", x);
            }
            y(void 0);
          });
        };
      }
      function tn(t, r) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(t);
          r && (c = c.filter(function(d) {
            return Object.getOwnPropertyDescriptor(t, d).enumerable;
          })), a.push.apply(a, c);
        }
        return a;
      }
      function Tr(t) {
        for (var r = 1; r < arguments.length; r++) {
          var a = arguments[r] != null ? arguments[r] : {};
          r % 2 ? tn(Object(a), !0).forEach(function(c) {
            rn(t, c, a[c]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : tn(Object(a)).forEach(function(c) {
            Object.defineProperty(t, c, Object.getOwnPropertyDescriptor(a, c));
          });
        }
        return t;
      }
      function rn(t, r, a) {
        return (r = wi(r)) in t ? Object.defineProperty(t, r, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : t[r] = a, t;
      }
      function wi(t) {
        var r = xi(t, "string");
        return br(r) == "symbol" ? r : r + "";
      }
      function xi(t, r) {
        if (br(t) != "object" || !t) return t;
        var a = t[Symbol.toPrimitive];
        if (a !== void 0) {
          var c = a.call(t, r);
          if (br(c) != "object") return c;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (r === "string" ? String : Number)(t);
      }
      function an(t, r) {
        return Ci(t) || Ei(t, r) || ki(t, r) || _i();
      }
      function _i() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function ki(t, r) {
        if (t) {
          if (typeof t == "string") return nn(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? nn(t, r) : void 0;
        }
      }
      function nn(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, c = Array(r); a < r; a++) c[a] = t[a];
        return c;
      }
      function Ei(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var c, d, f, y, b = [], x = !0, k = !1;
          try {
            if (f = (a = a.call(t)).next, r !== 0) for (; !(x = (c = f.call(a)).done) && (b.push(c.value), b.length !== r); x = !0) ;
          } catch (O) {
            k = !0, d = O;
          } finally {
            try {
              if (!x && a.return != null && (y = a.return(), Object(y) !== y)) return;
            } finally {
              if (k) throw d;
            }
          }
          return b;
        }
      }
      function Ci(t) {
        if (Array.isArray(t)) return t;
      }
      function Ai(t) {
        var r = t.onLinkInsert, a = t.item, c = t.setIsOpenModel, d = t.selectedData, f = t.imageUrl, y = t.setImageUrl, b = t.image_handler, x = t.setIsLoading, k = Object(o.useState)({}), O = an(k, 2), K = O[0], W = O[1], F = Object(o.useState)({
          text: "",
          link: "",
          open_new_tab: !1,
          link_type: "text"
        }), h = an(F, 2), ne = h[0], V = h[1], H = function(ce) {
          if (ce.preventDefault(), ne.link) {
            if (ne.link_type === "image" && !f) {
              var D = {
                type: "image",
                message: "Please upload image"
              };
              W(D);
              return;
            } else if (ne.link_type === "button" && !ne.text) {
              var Qe = {
                type: "button",
                message: "Please add text to display on button"
              };
              W(Qe);
              return;
            }
          } else {
            var Se = {
              type: "link",
              message: "Please add link URL"
            };
            W(Se);
            return;
          }
          if (a != null && a.handleSubmit && (a.handleSubmit(a), !a.add_functionality)) {
            c("");
            return;
          }
          r(ne);
        }, B = function(ce) {
          var Se = ce.target, D = Se.name, Qe = Se.value;
          V(function(Oe) {
            return Tr(Tr({}, Oe), {}, rn({}, D, Qe));
          });
        }, T = function() {
          y("");
        }, Q = /* @__PURE__ */ function() {
          var $ = yi(/* @__PURE__ */ wa().mark(function ce(Se) {
            var D, Qe, Oe;
            return wa().wrap(function(ze) {
              for (; ; ) switch (ze.prev = ze.next) {
                case 0:
                  if (D = Se.target.files, Qe = {
                    image: D[0]
                  }, !b) {
                    ze.next = 10;
                    break;
                  }
                  return x(!0), ze.next = 6, b(Qe);
                case 6:
                  Oe = ze.sent, Oe && y(Oe), x(!1), ze.next = 11;
                  break;
                case 10:
                  y(URL.createObjectURL(Qe.image));
                case 11:
                case "end":
                  return ze.stop();
              }
            }, ce);
          }));
          return function(Se) {
            return $.apply(this, arguments);
          };
        }(), oe = function(ce, Se) {
          ce.preventDefault(), V(function(D) {
            return Tr(Tr({}, D), {}, {
              link_type: Se
            });
          }), W("");
        };
        return Object(o.useEffect)(function() {
          if (d != null && d.text) {
            var $ = Tr({}, d), ce = $.link_type;
            ce || ($.link_type = "text"), V($);
          }
        }, [d]), /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.selectType
        }, /* @__PURE__ */ e.a.createElement("button", {
          className: "".concat(ne.link_type === "text" ? l.a.selectedType : ""),
          onClick: function(ce) {
            return oe(ce, "text");
          }
        }, "Text"), /* @__PURE__ */ e.a.createElement("button", {
          className: "".concat(ne.link_type === "image" ? l.a.selectedType : ""),
          onClick: function(ce) {
            return oe(ce, "image");
          }
        }, "Image"), /* @__PURE__ */ e.a.createElement("button", {
          className: "".concat(ne.link_type === "button" ? l.a.selectedType : ""),
          onClick: function(ce) {
            return oe(ce, "button");
          }
        }, "Button")), /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.reactEditorMt10
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "link"
        }, "URL*"), /* @__PURE__ */ e.a.createElement("input", {
          id: "link",
          type: "text",
          name: "link",
          autoFocus: !0,
          className: l.a.formControlInput,
          value: ne.link,
          onChange: B
        }), K.type === "link" && /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.editorErrorMessage
        }, "*", "".concat(K.message))), ne.link_type === "image" ? /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, f ? /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.linkImageBox
        }, /* @__PURE__ */ e.a.createElement("span", {
          className: l.a.linkImageCross,
          onClick: T
        }, "x"), /* @__PURE__ */ e.a.createElement("img", {
          src: f,
          alt: "ImageLink",
          className: l.a.linkImage
        })) : /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.reactEditorMt10
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "image"
        }, "Choose File *"), /* @__PURE__ */ e.a.createElement("input", {
          type: "file",
          id: "image",
          name: "image",
          className: l.a.formControlInput,
          accept: "image/*",
          onChange: Q
        }), K.type === "image" && /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.editorErrorMessage
        }, "*", "".concat(K.message)))) : /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.reactEditorMt10
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "text"
        }, "Text to display ".concat(ne.link_type === "button" ? "*" : "")), /* @__PURE__ */ e.a.createElement("input", {
          id: "text",
          type: "text",
          name: "text",
          value: ne.text,
          onChange: B,
          className: l.a.formControlInput
        }), K.type === "button" && /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.editorErrorMessage
        }, "*", "".concat(K.message))), /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.reactEditorMt10
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "open_new_tab"
        }, "Open in"), /* @__PURE__ */ e.a.createElement("select", {
          name: "open_new_tab",
          id: "open_new_tab",
          className: "".concat(l.a.formControlInput, " ").concat(l.a.reactEditorMt2),
          value: ne.open_new_tab,
          onChange: B
        }, /* @__PURE__ */ e.a.createElement("option", {
          value: !1
        }, "Current window"), /* @__PURE__ */ e.a.createElement("option", {
          value: !0
        }, "New window"))), /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.reactEditorTextEnd
        }, /* @__PURE__ */ e.a.createElement("button", {
          className: l.a.saveButton,
          onClick: H
        }, "Save"))));
      }
      var Si = Object.defineProperty, Ii = (t, r, a) => r in t ? Si(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[r] = a, ft = (t, r, a) => Ii(t, typeof r != "symbol" ? r + "" : r, a);
      const ea = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        unit: "px"
      }, Lr = (t, r, a) => Math.min(Math.max(t, r), a), Mi = (...t) => t.filter((r) => r && typeof r == "string").join(" "), on = (t, r) => t === r || t.width === r.width && t.height === r.height && t.x === r.x && t.y === r.y && t.unit === r.unit;
      function Or(t, r, a) {
        return t.unit === "%" ? { ...ea, ...t, unit: "%" } : {
          unit: "%",
          x: t.x ? t.x / r * 100 : 0,
          y: t.y ? t.y / a * 100 : 0,
          width: t.width ? t.width / r * 100 : 0,
          height: t.height ? t.height / a * 100 : 0
        };
      }
      function lr(t, r, a) {
        return t.unit ? t.unit === "px" ? { ...ea, ...t, unit: "px" } : {
          unit: "px",
          x: t.x ? t.x * r / 100 : 0,
          y: t.y ? t.y * a / 100 : 0,
          width: t.width ? t.width * r / 100 : 0,
          height: t.height ? t.height * a / 100 : 0
        } : { ...ea, ...t, unit: "px" };
      }
      function ln(t, r, a, c, d, f = 0, y = 0, b = c, x = d) {
        const k = { ...t };
        let O = Math.min(f, c), K = Math.min(y, d), W = Math.min(b, c), F = Math.min(x, d);
        r && (r > 1 ? (O = y ? y * r : O, K = O / r, W = b * r) : (K = f ? f / r : K, O = K * r, F = x / r)), k.y < 0 && (k.height = Math.max(k.height + k.y, K), k.y = 0), k.x < 0 && (k.width = Math.max(k.width + k.x, O), k.x = 0);
        const h = c - (k.x + k.width);
        h < 0 && (k.x = Math.min(k.x, c - O), k.width += h);
        const ne = d - (k.y + k.height);
        if (ne < 0 && (k.y = Math.min(k.y, d - K), k.height += ne), k.width < O && ((a === "sw" || a == "nw") && (k.x -= O - k.width), k.width = O), k.height < K && ((a === "nw" || a == "ne") && (k.y -= K - k.height), k.height = K), k.width > W && ((a === "sw" || a == "nw") && (k.x -= W - k.width), k.width = W), k.height > F && ((a === "nw" || a == "ne") && (k.y -= F - k.height), k.height = F), r) {
          const V = k.width / k.height;
          if (V < r) {
            const H = Math.max(k.width / r, K);
            (a === "nw" || a == "ne") && (k.y -= H - k.height), k.height = H;
          } else if (V > r) {
            const H = Math.max(k.height * r, O);
            (a === "sw" || a == "nw") && (k.x -= H - k.width), k.width = H;
          }
        }
        return k;
      }
      function Ni(t, r, a, c) {
        const d = { ...t };
        return r === "ArrowLeft" ? c === "nw" ? (d.x -= a, d.y -= a, d.width += a, d.height += a) : c === "w" ? (d.x -= a, d.width += a) : c === "sw" ? (d.x -= a, d.width += a, d.height += a) : c === "ne" ? (d.y += a, d.width -= a, d.height -= a) : c === "e" ? d.width -= a : c === "se" && (d.width -= a, d.height -= a) : r === "ArrowRight" && (c === "nw" ? (d.x += a, d.y += a, d.width -= a, d.height -= a) : c === "w" ? (d.x += a, d.width -= a) : c === "sw" ? (d.x += a, d.width -= a, d.height -= a) : c === "ne" ? (d.y -= a, d.width += a, d.height += a) : c === "e" ? d.width += a : c === "se" && (d.width += a, d.height += a)), r === "ArrowUp" ? c === "nw" ? (d.x -= a, d.y -= a, d.width += a, d.height += a) : c === "n" ? (d.y -= a, d.height += a) : c === "ne" ? (d.y -= a, d.width += a, d.height += a) : c === "sw" ? (d.x += a, d.width -= a, d.height -= a) : c === "s" ? d.height -= a : c === "se" && (d.width -= a, d.height -= a) : r === "ArrowDown" && (c === "nw" ? (d.x += a, d.y += a, d.width -= a, d.height -= a) : c === "n" ? (d.y += a, d.height -= a) : c === "ne" ? (d.y += a, d.width -= a, d.height -= a) : c === "sw" ? (d.x -= a, d.width += a, d.height += a) : c === "s" ? d.height += a : c === "se" && (d.width += a, d.height += a)), d;
      }
      const Dr = { capture: !0, passive: !1 };
      let Ri = 0;
      const cr = class qt extends o.PureComponent {
        constructor() {
          super(...arguments), ft(this, "docMoveBound", !1), ft(this, "mouseDownOnCrop", !1), ft(this, "dragStarted", !1), ft(this, "evData", {
            startClientX: 0,
            startClientY: 0,
            startCropX: 0,
            startCropY: 0,
            clientX: 0,
            clientY: 0,
            isResize: !0
          }), ft(this, "componentRef", Object(o.createRef)()), ft(this, "mediaRef", Object(o.createRef)()), ft(this, "resizeObserver"), ft(this, "initChangeCalled", !1), ft(this, "instanceId", `rc-${Ri++}`), ft(this, "state", {
            cropIsActive: !1,
            newCropIsBeingDrawn: !1
          }), ft(this, "onCropPointerDown", (r) => {
            const { crop: a, disabled: c } = this.props, d = this.getBox();
            if (!a)
              return;
            const f = lr(a, d.width, d.height);
            if (c)
              return;
            r.cancelable && r.preventDefault(), this.bindDocMove(), this.componentRef.current.focus({ preventScroll: !0 });
            const y = r.target.dataset.ord, b = !!y;
            let x = r.clientX, k = r.clientY, O = f.x, K = f.y;
            if (y) {
              const W = r.clientX - d.x, F = r.clientY - d.y;
              let h = 0, ne = 0;
              y === "ne" || y == "e" ? (h = W - (f.x + f.width), ne = F - f.y, O = f.x, K = f.y + f.height) : y === "se" || y === "s" ? (h = W - (f.x + f.width), ne = F - (f.y + f.height), O = f.x, K = f.y) : y === "sw" || y == "w" ? (h = W - f.x, ne = F - (f.y + f.height), O = f.x + f.width, K = f.y) : (y === "nw" || y == "n") && (h = W - f.x, ne = F - f.y, O = f.x + f.width, K = f.y + f.height), x = O + d.x + h, k = K + d.y + ne;
            }
            this.evData = {
              startClientX: x,
              startClientY: k,
              startCropX: O,
              startCropY: K,
              clientX: r.clientX,
              clientY: r.clientY,
              isResize: b,
              ord: y
            }, this.mouseDownOnCrop = !0, this.setState({ cropIsActive: !0 });
          }), ft(this, "onComponentPointerDown", (r) => {
            const { crop: a, disabled: c, locked: d, keepSelection: f, onChange: y } = this.props, b = this.getBox();
            if (c || d || f && a)
              return;
            r.cancelable && r.preventDefault(), this.bindDocMove(), this.componentRef.current.focus({ preventScroll: !0 });
            const x = r.clientX - b.x, k = r.clientY - b.y, O = {
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
            }, this.mouseDownOnCrop = !0, y(lr(O, b.width, b.height), Or(O, b.width, b.height)), this.setState({ cropIsActive: !0, newCropIsBeingDrawn: !0 });
          }), ft(this, "onDocPointerMove", (r) => {
            const { crop: a, disabled: c, onChange: d, onDragStart: f } = this.props, y = this.getBox();
            if (c || !a || !this.mouseDownOnCrop)
              return;
            r.cancelable && r.preventDefault(), this.dragStarted || (this.dragStarted = !0, f && f(r));
            const { evData: b } = this;
            b.clientX = r.clientX, b.clientY = r.clientY;
            let x;
            b.isResize ? x = this.resizeCrop() : x = this.dragCrop(), on(a, x) || d(
              lr(x, y.width, y.height),
              Or(x, y.width, y.height)
            );
          }), ft(this, "onComponentKeyDown", (r) => {
            const { crop: a, disabled: c, onChange: d, onComplete: f } = this.props;
            if (c)
              return;
            const y = r.key;
            let b = !1;
            if (!a)
              return;
            const x = this.getBox(), k = this.makePixelCrop(x), O = (navigator.platform.match("Mac") ? r.metaKey : r.ctrlKey) ? qt.nudgeStepLarge : r.shiftKey ? qt.nudgeStepMedium : qt.nudgeStep;
            if (y === "ArrowLeft" ? (k.x -= O, b = !0) : y === "ArrowRight" ? (k.x += O, b = !0) : y === "ArrowUp" ? (k.y -= O, b = !0) : y === "ArrowDown" && (k.y += O, b = !0), b) {
              r.cancelable && r.preventDefault(), k.x = Lr(k.x, 0, x.width - k.width), k.y = Lr(k.y, 0, x.height - k.height);
              const K = lr(k, x.width, x.height), W = Or(k, x.width, x.height);
              d(K, W), f && f(K, W);
            }
          }), ft(this, "onHandlerKeyDown", (r, a) => {
            const {
              aspect: c = 0,
              crop: d,
              disabled: f,
              minWidth: y = 0,
              minHeight: b = 0,
              maxWidth: x,
              maxHeight: k,
              onChange: O,
              onComplete: K
            } = this.props, W = this.getBox();
            if (f || !d)
              return;
            if (r.key === "ArrowUp" || r.key === "ArrowDown" || r.key === "ArrowLeft" || r.key === "ArrowRight")
              r.stopPropagation(), r.preventDefault();
            else
              return;
            const F = (navigator.platform.match("Mac") ? r.metaKey : r.ctrlKey) ? qt.nudgeStepLarge : r.shiftKey ? qt.nudgeStepMedium : qt.nudgeStep, h = lr(d, W.width, W.height), ne = Ni(h, r.key, F, a), V = ln(
              ne,
              c,
              a,
              W.width,
              W.height,
              y,
              b,
              x,
              k
            );
            if (!on(d, V)) {
              const H = Or(V, W.width, W.height);
              O(V, H), K && K(V, H);
            }
          }), ft(this, "onDocPointerDone", (r) => {
            const { crop: a, disabled: c, onComplete: d, onDragEnd: f } = this.props, y = this.getBox();
            this.unbindDocMove(), !(c || !a) && this.mouseDownOnCrop && (this.mouseDownOnCrop = !1, this.dragStarted = !1, f && f(r), d && d(lr(a, y.width, y.height), Or(a, y.width, y.height)), this.setState({ cropIsActive: !1, newCropIsBeingDrawn: !1 }));
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
          const { x: a, y: c, width: d, height: f } = r.getBoundingClientRect();
          return { x: a, y: c, width: d, height: f };
        }
        componentDidUpdate(r) {
          const { crop: a, onComplete: c } = this.props;
          if (c && !r.crop && a) {
            const { width: d, height: f } = this.getBox();
            d && f && c(lr(a, d, f), Or(a, d, f));
          }
        }
        componentWillUnmount() {
          this.resizeObserver && this.resizeObserver.disconnect(), this.unbindDocMove();
        }
        bindDocMove() {
          this.docMoveBound || (this.document.addEventListener("pointermove", this.onDocPointerMove, Dr), this.document.addEventListener("pointerup", this.onDocPointerDone, Dr), this.document.addEventListener("pointercancel", this.onDocPointerDone, Dr), this.docMoveBound = !0);
        }
        unbindDocMove() {
          this.docMoveBound && (this.document.removeEventListener("pointermove", this.onDocPointerMove, Dr), this.document.removeEventListener("pointerup", this.onDocPointerDone, Dr), this.document.removeEventListener("pointercancel", this.onDocPointerDone, Dr), this.docMoveBound = !1);
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
          const { evData: r } = this, a = this.getBox(), c = this.makePixelCrop(a), d = r.clientX - r.startClientX, f = r.clientY - r.startClientY;
          return c.x = Lr(r.startCropX + d, 0, a.width - c.width), c.y = Lr(r.startCropY + f, 0, a.height - c.height), c;
        }
        getPointRegion(r, a, c, d) {
          const { evData: f } = this, y = f.clientX - r.x, b = f.clientY - r.y;
          let x;
          d && a ? x = a === "nw" || a === "n" || a === "ne" : x = b < f.startCropY;
          let k;
          return c && a ? k = a === "nw" || a === "w" || a === "sw" : k = y < f.startCropX, k ? x ? "nw" : "sw" : x ? "ne" : "se";
        }
        resolveMinDimensions(r, a, c = 0, d = 0) {
          const f = Math.min(c, r.width), y = Math.min(d, r.height);
          return !a || !f && !y ? [f, y] : a > 1 ? f ? [f, f / a] : [y * a, y] : y ? [y * a, y] : [f, f / a];
        }
        resizeCrop() {
          const { evData: r } = this, { aspect: a = 0, maxWidth: c, maxHeight: d } = this.props, f = this.getBox(), [y, b] = this.resolveMinDimensions(f, a, this.props.minWidth, this.props.minHeight);
          let x = this.makePixelCrop(f);
          const k = this.getPointRegion(f, r.ord, y, b), O = r.ord || k;
          let K = r.clientX - r.startClientX, W = r.clientY - r.startClientY;
          (y && O === "nw" || O === "w" || O === "sw") && (K = Math.min(K, -y)), (b && O === "nw" || O === "n" || O === "ne") && (W = Math.min(W, -b));
          const F = {
            unit: "px",
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
          k === "ne" ? (F.x = r.startCropX, F.width = K, a ? (F.height = F.width / a, F.y = r.startCropY - F.height) : (F.height = Math.abs(W), F.y = r.startCropY - F.height)) : k === "se" ? (F.x = r.startCropX, F.y = r.startCropY, F.width = K, a ? F.height = F.width / a : F.height = W) : k === "sw" ? (F.x = r.startCropX + K, F.y = r.startCropY, F.width = Math.abs(K), a ? F.height = F.width / a : F.height = W) : k === "nw" && (F.x = r.startCropX + K, F.width = Math.abs(K), a ? (F.height = F.width / a, F.y = r.startCropY - F.height) : (F.height = Math.abs(W), F.y = r.startCropY + W));
          const h = ln(
            F,
            a,
            k,
            f.width,
            f.height,
            y,
            b,
            c,
            d
          );
          return a || qt.xyOrds.indexOf(O) > -1 ? x = h : qt.xOrds.indexOf(O) > -1 ? (x.x = h.x, x.width = h.width) : qt.yOrds.indexOf(O) > -1 && (x.y = h.y, x.height = h.height), x.x = Lr(x.x, 0, f.width - x.width), x.y = Lr(x.y, 0, f.height - x.height), x;
        }
        renderCropSelection() {
          const {
            ariaLabels: r = qt.defaultProps.ariaLabels,
            disabled: a,
            locked: c,
            renderSelectionAddon: d,
            ruleOfThirds: f,
            crop: y
          } = this.props, b = this.getCropStyle();
          if (y)
            return /* @__PURE__ */ e.a.createElement(
              "div",
              {
                style: b,
                className: "ReactCrop__crop-selection",
                onPointerDown: this.onCropPointerDown,
                "aria-label": r.cropArea,
                tabIndex: 0,
                onKeyDown: this.onComponentKeyDown,
                role: "group"
              },
              !a && !c && /* @__PURE__ */ e.a.createElement("div", { className: "ReactCrop__drag-elements", onFocus: this.onDragFocus }, /* @__PURE__ */ e.a.createElement("div", { className: "ReactCrop__drag-bar ord-n", "data-ord": "n" }), /* @__PURE__ */ e.a.createElement("div", { className: "ReactCrop__drag-bar ord-e", "data-ord": "e" }), /* @__PURE__ */ e.a.createElement("div", { className: "ReactCrop__drag-bar ord-s", "data-ord": "s" }), /* @__PURE__ */ e.a.createElement("div", { className: "ReactCrop__drag-bar ord-w", "data-ord": "w" }), /* @__PURE__ */ e.a.createElement(
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
              d && /* @__PURE__ */ e.a.createElement("div", { className: "ReactCrop__selection-addon", onPointerDown: (x) => x.stopPropagation() }, d(this.state)),
              f && /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement("div", { className: "ReactCrop__rule-of-thirds-hz" }), /* @__PURE__ */ e.a.createElement("div", { className: "ReactCrop__rule-of-thirds-vt" }))
            );
        }
        makePixelCrop(r) {
          const a = { ...ea, ...this.props.crop || {} };
          return lr(a, r.width, r.height);
        }
        render() {
          const { aspect: r, children: a, circularCrop: c, className: d, crop: f, disabled: y, locked: b, style: x, ruleOfThirds: k } = this.props, { cropIsActive: O, newCropIsBeingDrawn: K } = this.state, W = f ? this.renderCropSelection() : null, F = Mi(
            "ReactCrop",
            d,
            O && "ReactCrop--active",
            y && "ReactCrop--disabled",
            b && "ReactCrop--locked",
            K && "ReactCrop--new-crop",
            f && r && "ReactCrop--fixed-aspect",
            f && c && "ReactCrop--circular-crop",
            f && k && "ReactCrop--rule-of-thirds",
            !this.dragStarted && f && !f.width && !f.height && "ReactCrop--invisible-crop",
            c && "ReactCrop--no-animate"
          );
          return /* @__PURE__ */ e.a.createElement("div", { ref: this.componentRef, className: F, style: x }, /* @__PURE__ */ e.a.createElement("div", { ref: this.mediaRef, className: "ReactCrop__child-wrapper", onPointerDown: this.onComponentPointerDown }, a), f ? /* @__PURE__ */ e.a.createElement("svg", { className: "ReactCrop__crop-mask", width: "100%", height: "100%" }, /* @__PURE__ */ e.a.createElement("defs", null, /* @__PURE__ */ e.a.createElement("mask", { id: `hole-${this.instanceId}` }, /* @__PURE__ */ e.a.createElement("rect", { width: "100%", height: "100%", fill: "white" }), c ? /* @__PURE__ */ e.a.createElement(
            "ellipse",
            {
              cx: `${f.x + f.width / 2}${f.unit}`,
              cy: `${f.y + f.height / 2}${f.unit}`,
              rx: `${f.width / 2}${f.unit}`,
              ry: `${f.height / 2}${f.unit}`,
              fill: "black"
            }
          ) : /* @__PURE__ */ e.a.createElement(
            "rect",
            {
              x: `${f.x}${f.unit}`,
              y: `${f.y}${f.unit}`,
              width: `${f.width}${f.unit}`,
              height: `${f.height}${f.unit}`,
              fill: "black"
            }
          ))), /* @__PURE__ */ e.a.createElement("rect", { fill: "black", fillOpacity: 0.5, width: "100%", height: "100%", mask: `url(#hole-${this.instanceId})` })) : void 0, W);
        }
      };
      ft(cr, "xOrds", ["e", "w"]), ft(cr, "yOrds", ["n", "s"]), ft(cr, "xyOrds", ["nw", "ne", "se", "sw"]), ft(cr, "nudgeStep", 1), ft(cr, "nudgeStepMedium", 10), ft(cr, "nudgeStepLarge", 100), ft(cr, "defaultProps", {
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
      let Li = cr;
      function Oi(t, r) {
        return Ti(t) || zi(t, r) || Bi(t, r) || Di();
      }
      function Di() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Bi(t, r) {
        if (t) {
          if (typeof t == "string") return cn(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? cn(t, r) : void 0;
        }
      }
      function cn(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, c = Array(r); a < r; a++) c[a] = t[a];
        return c;
      }
      function zi(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var c, d, f, y, b = [], x = !0, k = !1;
          try {
            if (f = (a = a.call(t)).next, r !== 0) for (; !(x = (c = f.call(a)).done) && (b.push(c.value), b.length !== r); x = !0) ;
          } catch (O) {
            k = !0, d = O;
          } finally {
            try {
              if (!x && a.return != null && (y = a.return(), Object(y) !== y)) return;
            } finally {
              if (k) throw d;
            }
          }
          return b;
        }
      }
      function Ti(t) {
        if (Array.isArray(t)) return t;
      }
      var ji = function(r) {
        var a = r.imageSrc, c = r.onCropComplete, d = r.aspectRatio, f = d === void 0 ? 16 / 9 : d, y = Object(o.useState)({
          aspect: f
        }), b = Oi(y, 2), x = b[0], k = b[1], O = Object(o.useRef)(null), K = Object(o.useCallback)(function(F) {
          return O.current = F, !1;
        }, []), W = Object(o.useCallback)(function(F) {
          c(F, O.current);
        }, [c]);
        return /* @__PURE__ */ e.a.createElement(Li, {
          crop: x,
          onChange: k,
          onComplete: W
        }, /* @__PURE__ */ e.a.createElement("img", {
          ref: O,
          src: a,
          alt: "Crop preview",
          onLoad: function(h) {
            return K(h.currentTarget);
          }
        }));
      };
      function yr(t) {
        "@babel/helpers - typeof";
        return yr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
          return typeof r;
        } : function(r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
        }, yr(t);
      }
      function jr() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
        jr = function() {
          return r;
        };
        var t, r = {}, a = Object.prototype, c = a.hasOwnProperty, d = Object.defineProperty || function(_, g, w) {
          _[g] = w.value;
        }, f = typeof Symbol == "function" ? Symbol : {}, y = f.iterator || "@@iterator", b = f.asyncIterator || "@@asyncIterator", x = f.toStringTag || "@@toStringTag";
        function k(_, g, w) {
          return Object.defineProperty(_, g, { value: w, enumerable: !0, configurable: !0, writable: !0 }), _[g];
        }
        try {
          k({}, "");
        } catch {
          k = function(w, N, C) {
            return w[N] = C;
          };
        }
        function O(_, g, w, N) {
          var C = g && g.prototype instanceof H ? g : H, S = Object.create(C.prototype), de = new Re(N || []);
          return d(S, "_invoke", { value: Qe(_, w, de) }), S;
        }
        function K(_, g, w) {
          try {
            return { type: "normal", arg: _.call(g, w) };
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        r.wrap = O;
        var W = "suspendedStart", F = "suspendedYield", h = "executing", ne = "completed", V = {};
        function H() {
        }
        function B() {
        }
        function T() {
        }
        var Q = {};
        k(Q, y, function() {
          return this;
        });
        var oe = Object.getPrototypeOf, $ = oe && oe(oe(at([])));
        $ && $ !== a && c.call($, y) && (Q = $);
        var ce = T.prototype = H.prototype = Object.create(Q);
        function Se(_) {
          ["next", "throw", "return"].forEach(function(g) {
            k(_, g, function(w) {
              return this._invoke(g, w);
            });
          });
        }
        function D(_, g) {
          function w(C, S, de, Ie) {
            var Ne = K(_[C], _, S);
            if (Ne.type !== "throw") {
              var Ge = Ne.arg, Je = Ge.value;
              return Je && yr(Je) == "object" && c.call(Je, "__await") ? g.resolve(Je.__await).then(function(et) {
                w("next", et, de, Ie);
              }, function(et) {
                w("throw", et, de, Ie);
              }) : g.resolve(Je).then(function(et) {
                Ge.value = et, de(Ge);
              }, function(et) {
                return w("throw", et, de, Ie);
              });
            }
            Ie(Ne.arg);
          }
          var N;
          d(this, "_invoke", { value: function(S, de) {
            function Ie() {
              return new g(function(Ne, Ge) {
                w(S, de, Ne, Ge);
              });
            }
            return N = N ? N.then(Ie, Ie) : Ie();
          } });
        }
        function Qe(_, g, w) {
          var N = W;
          return function(C, S) {
            if (N === h) throw Error("Generator is already running");
            if (N === ne) {
              if (C === "throw") throw S;
              return { value: t, done: !0 };
            }
            for (w.method = C, w.arg = S; ; ) {
              var de = w.delegate;
              if (de) {
                var Ie = Oe(de, w);
                if (Ie) {
                  if (Ie === V) continue;
                  return Ie;
                }
              }
              if (w.method === "next") w.sent = w._sent = w.arg;
              else if (w.method === "throw") {
                if (N === W) throw N = ne, w.arg;
                w.dispatchException(w.arg);
              } else w.method === "return" && w.abrupt("return", w.arg);
              N = h;
              var Ne = K(_, g, w);
              if (Ne.type === "normal") {
                if (N = w.done ? ne : F, Ne.arg === V) continue;
                return { value: Ne.arg, done: w.done };
              }
              Ne.type === "throw" && (N = ne, w.method = "throw", w.arg = Ne.arg);
            }
          };
        }
        function Oe(_, g) {
          var w = g.method, N = _.iterator[w];
          if (N === t) return g.delegate = null, w === "throw" && _.iterator.return && (g.method = "return", g.arg = t, Oe(_, g), g.method === "throw") || w !== "return" && (g.method = "throw", g.arg = new TypeError("The iterator does not provide a '" + w + "' method")), V;
          var C = K(N, _.iterator, g.arg);
          if (C.type === "throw") return g.method = "throw", g.arg = C.arg, g.delegate = null, V;
          var S = C.arg;
          return S ? S.done ? (g[_.resultName] = S.value, g.next = _.nextLoc, g.method !== "return" && (g.method = "next", g.arg = t), g.delegate = null, V) : S : (g.method = "throw", g.arg = new TypeError("iterator result is not an object"), g.delegate = null, V);
        }
        function ke(_) {
          var g = { tryLoc: _[0] };
          1 in _ && (g.catchLoc = _[1]), 2 in _ && (g.finallyLoc = _[2], g.afterLoc = _[3]), this.tryEntries.push(g);
        }
        function ze(_) {
          var g = _.completion || {};
          g.type = "normal", delete g.arg, _.completion = g;
        }
        function Re(_) {
          this.tryEntries = [{ tryLoc: "root" }], _.forEach(ke, this), this.reset(!0);
        }
        function at(_) {
          if (_ || _ === "") {
            var g = _[y];
            if (g) return g.call(_);
            if (typeof _.next == "function") return _;
            if (!isNaN(_.length)) {
              var w = -1, N = function C() {
                for (; ++w < _.length; ) if (c.call(_, w)) return C.value = _[w], C.done = !1, C;
                return C.value = t, C.done = !0, C;
              };
              return N.next = N;
            }
          }
          throw new TypeError(yr(_) + " is not iterable");
        }
        return B.prototype = T, d(ce, "constructor", { value: T, configurable: !0 }), d(T, "constructor", { value: B, configurable: !0 }), B.displayName = k(T, x, "GeneratorFunction"), r.isGeneratorFunction = function(_) {
          var g = typeof _ == "function" && _.constructor;
          return !!g && (g === B || (g.displayName || g.name) === "GeneratorFunction");
        }, r.mark = function(_) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(_, T) : (_.__proto__ = T, k(_, x, "GeneratorFunction")), _.prototype = Object.create(ce), _;
        }, r.awrap = function(_) {
          return { __await: _ };
        }, Se(D.prototype), k(D.prototype, b, function() {
          return this;
        }), r.AsyncIterator = D, r.async = function(_, g, w, N, C) {
          C === void 0 && (C = Promise);
          var S = new D(O(_, g, w, N), C);
          return r.isGeneratorFunction(g) ? S : S.next().then(function(de) {
            return de.done ? de.value : S.next();
          });
        }, Se(ce), k(ce, x, "Generator"), k(ce, y, function() {
          return this;
        }), k(ce, "toString", function() {
          return "[object Generator]";
        }), r.keys = function(_) {
          var g = Object(_), w = [];
          for (var N in g) w.push(N);
          return w.reverse(), function C() {
            for (; w.length; ) {
              var S = w.pop();
              if (S in g) return C.value = S, C.done = !1, C;
            }
            return C.done = !0, C;
          };
        }, r.values = at, Re.prototype = { constructor: Re, reset: function(g) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(ze), !g) for (var w in this) w.charAt(0) === "t" && c.call(this, w) && !isNaN(+w.slice(1)) && (this[w] = t);
        }, stop: function() {
          this.done = !0;
          var g = this.tryEntries[0].completion;
          if (g.type === "throw") throw g.arg;
          return this.rval;
        }, dispatchException: function(g) {
          if (this.done) throw g;
          var w = this;
          function N(Ge, Je) {
            return de.type = "throw", de.arg = g, w.next = Ge, Je && (w.method = "next", w.arg = t), !!Je;
          }
          for (var C = this.tryEntries.length - 1; C >= 0; --C) {
            var S = this.tryEntries[C], de = S.completion;
            if (S.tryLoc === "root") return N("end");
            if (S.tryLoc <= this.prev) {
              var Ie = c.call(S, "catchLoc"), Ne = c.call(S, "finallyLoc");
              if (Ie && Ne) {
                if (this.prev < S.catchLoc) return N(S.catchLoc, !0);
                if (this.prev < S.finallyLoc) return N(S.finallyLoc);
              } else if (Ie) {
                if (this.prev < S.catchLoc) return N(S.catchLoc, !0);
              } else {
                if (!Ne) throw Error("try statement without catch or finally");
                if (this.prev < S.finallyLoc) return N(S.finallyLoc);
              }
            }
          }
        }, abrupt: function(g, w) {
          for (var N = this.tryEntries.length - 1; N >= 0; --N) {
            var C = this.tryEntries[N];
            if (C.tryLoc <= this.prev && c.call(C, "finallyLoc") && this.prev < C.finallyLoc) {
              var S = C;
              break;
            }
          }
          S && (g === "break" || g === "continue") && S.tryLoc <= w && w <= S.finallyLoc && (S = null);
          var de = S ? S.completion : {};
          return de.type = g, de.arg = w, S ? (this.method = "next", this.next = S.finallyLoc, V) : this.complete(de);
        }, complete: function(g, w) {
          if (g.type === "throw") throw g.arg;
          return g.type === "break" || g.type === "continue" ? this.next = g.arg : g.type === "return" ? (this.rval = this.arg = g.arg, this.method = "return", this.next = "end") : g.type === "normal" && w && (this.next = w), V;
        }, finish: function(g) {
          for (var w = this.tryEntries.length - 1; w >= 0; --w) {
            var N = this.tryEntries[w];
            if (N.finallyLoc === g) return this.complete(N.completion, N.afterLoc), ze(N), V;
          }
        }, catch: function(g) {
          for (var w = this.tryEntries.length - 1; w >= 0; --w) {
            var N = this.tryEntries[w];
            if (N.tryLoc === g) {
              var C = N.completion;
              if (C.type === "throw") {
                var S = C.arg;
                ze(N);
              }
              return S;
            }
          }
          throw Error("illegal catch attempt");
        }, delegateYield: function(g, w, N) {
          return this.delegate = { iterator: at(g), resultName: w, nextLoc: N }, this.method === "next" && (this.arg = t), V;
        } }, r;
      }
      function sn(t, r, a, c, d, f, y) {
        try {
          var b = t[f](y), x = b.value;
        } catch (k) {
          return void a(k);
        }
        b.done ? r(x) : Promise.resolve(x).then(c, d);
      }
      function dn(t) {
        return function() {
          var r = this, a = arguments;
          return new Promise(function(c, d) {
            var f = t.apply(r, a);
            function y(x) {
              sn(f, c, d, y, b, "next", x);
            }
            function b(x) {
              sn(f, c, d, y, b, "throw", x);
            }
            y(void 0);
          });
        };
      }
      function un(t, r) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(t);
          r && (c = c.filter(function(d) {
            return Object.getOwnPropertyDescriptor(t, d).enumerable;
          })), a.push.apply(a, c);
        }
        return a;
      }
      function Ct(t) {
        for (var r = 1; r < arguments.length; r++) {
          var a = arguments[r] != null ? arguments[r] : {};
          r % 2 ? un(Object(a), !0).forEach(function(c) {
            Hr(t, c, a[c]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : un(Object(a)).forEach(function(c) {
            Object.defineProperty(t, c, Object.getOwnPropertyDescriptor(a, c));
          });
        }
        return t;
      }
      function Hr(t, r, a) {
        return (r = Hi(r)) in t ? Object.defineProperty(t, r, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : t[r] = a, t;
      }
      function Hi(t) {
        var r = Fi(t, "string");
        return yr(r) == "symbol" ? r : r + "";
      }
      function Fi(t, r) {
        if (yr(t) != "object" || !t) return t;
        var a = t[Symbol.toPrimitive];
        if (a !== void 0) {
          var c = a.call(t, r);
          if (yr(c) != "object") return c;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (r === "string" ? String : Number)(t);
      }
      function sr(t, r) {
        return Gi(t) || Qi(t, r) || Ui(t, r) || Pi();
      }
      function Pi() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Ui(t, r) {
        if (t) {
          if (typeof t == "string") return mn(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? mn(t, r) : void 0;
        }
      }
      function mn(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, c = Array(r); a < r; a++) c[a] = t[a];
        return c;
      }
      function Qi(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var c, d, f, y, b = [], x = !0, k = !1;
          try {
            if (f = (a = a.call(t)).next, r !== 0) for (; !(x = (c = f.call(a)).done) && (b.push(c.value), b.length !== r); x = !0) ;
          } catch (O) {
            k = !0, d = O;
          } finally {
            try {
              if (!x && a.return != null && (y = a.return(), Object(y) !== y)) return;
            } finally {
              if (k) throw d;
            }
          }
          return b;
        }
      }
      function Gi(t) {
        if (Array.isArray(t)) return t;
      }
      function Yi(t) {
        var r = t.onImageInsert, a = t.item, c = t.setIsLoading, d = t.image_handler, f = t.selectedData, y = Object(o.useState)(""), b = sr(y, 2), x = b[0], k = b[1], O = Object(o.useState)(0), K = sr(O, 2), W = K[0], F = K[1], h = Object(o.useState)(!0), ne = sr(h, 2), V = ne[0], H = ne[1], B = Object(o.useState)(!1), T = sr(B, 2), Q = T[0], oe = T[1], $ = Object(o.useState)("default"), ce = sr($, 2), Se = ce[0], D = ce[1], Qe = Object(o.useState)(null), Oe = sr(Qe, 2), ke = Oe[0], ze = Oe[1], Re = Object(o.useState)(null), at = sr(Re, 2), _ = at[0], g = at[1], w = Object(o.useState)({
          link: "",
          height: "",
          width: "",
          image: null,
          type: "general"
        }), N = sr(w, 2), C = N[0], S = N[1], de = function(tt) {
          var vt = tt.target, nt = vt.name, _t = vt.files;
          S(function(bt) {
            return Ct(Ct({}, bt), {}, Hr(Hr(Hr({}, nt, _t[0]), "height", ""), "width", ""));
          });
        }, Ie = 3, Ne = function gt(tt) {
          var vt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, nt = 0, _t = 0, bt = new Image();
          bt.onload = function() {
            nt = bt.width, _t = bt.height;
            var Xt = nt / _t;
            F(Xt), oe(!0), S(function(kt) {
              return Ct(Ct({}, kt), {}, {
                width: nt,
                height: _t
              });
            }), c(!1);
          }, bt.onerror = function() {
            c(!1), vt < Ie && gt(tt, vt + 1);
          }, bt.src = tt;
        }, Ge = /* @__PURE__ */ function() {
          var gt = dn(/* @__PURE__ */ jr().mark(function tt(vt) {
            var nt, _t, bt;
            return jr().wrap(function(kt) {
              for (; ; ) switch (kt.prev = kt.next) {
                case 0:
                  if (vt.preventDefault(), C.type !== "general") {
                    kt.next = 9;
                    break;
                  }
                  if (C.link) {
                    kt.next = 6;
                    break;
                  }
                  return nt = "Image source is required", k(nt), kt.abrupt("return");
                case 6:
                  r(C), kt.next = 29;
                  break;
                case 9:
                  if (C.image) {
                    kt.next = 13;
                    break;
                  }
                  return _t = "Please upload image", k(_t), kt.abrupt("return");
                case 13:
                  if (!d) {
                    kt.next = 22;
                    break;
                  }
                  return c(!0), kt.next = 17, d(Ct({}, C), a);
                case 17:
                  return bt = kt.sent, bt ? (Ne(bt), S(function(ra) {
                    return Ct(Ct({}, ra), {}, {
                      type: "general",
                      link: bt
                    });
                  })) : c(!1), kt.abrupt("return");
                case 22:
                  C.link = URL.createObjectURL(C.image), C.width = "", C.height = "";
                case 25:
                  if (C.link) {
                    kt.next = 28;
                    break;
                  }
                  return c(!1), kt.abrupt("return");
                case 28:
                  r(C);
                case 29:
                case "end":
                  return kt.stop();
              }
            }, tt);
          }));
          return function(vt) {
            return gt.apply(this, arguments);
          };
        }(), Je = function(tt) {
          var vt = tt.target, nt = vt.name, _t = vt.value, bt = C.height, Xt = C.width;
          nt === "width" ? (bt = _t / W, Xt = _t) : (Xt = _t * W, bt = _t), bt = Math.round(bt), Xt = Math.round(Xt), S(function(kt) {
            return Ct(Ct({}, kt), {}, {
              height: bt,
              width: Xt
            });
          });
        }, et = function(tt) {
          var vt = tt.target, nt = vt.name, _t = vt.value;
          if (V && nt !== "link" && Q && C.link) {
            Je(tt);
            return;
          }
          nt === "link" && _t === "" && (S(function(bt) {
            return Ct(Ct({}, bt), {}, {
              height: 0,
              width: 0
            });
          }), oe(!1)), S(function(bt) {
            return Ct(Ct({}, bt), {}, Hr({}, nt, _t));
          });
        }, Ur = function(tt, vt) {
          tt.preventDefault(), S(function(nt) {
            return Ct(Ct({}, nt), {}, {
              type: vt,
              image: null
            });
          }), k("");
        }, Zt = Object(o.useCallback)(function(gt, tt) {
          ze(gt), g(tt);
        }, []), Yt = Object(o.useCallback)(function() {
          D("default"), ze(null);
        }, []), Ea = Object(o.useCallback)(/* @__PURE__ */ dn(/* @__PURE__ */ jr().mark(function gt() {
          var tt;
          return jr().wrap(function(nt) {
            for (; ; ) switch (nt.prev = nt.next) {
              case 0:
                if (!(!ke || !_)) {
                  nt.next = 3;
                  break;
                }
                return console.error("No crop data or image reference"), nt.abrupt("return");
              case 3:
                return nt.next = 5, $e(_, ke, C.image);
              case 5:
                if (tt = nt.sent, tt) {
                  nt.next = 9;
                  break;
                }
                return console.error("Failed to crop image"), nt.abrupt("return");
              case 9:
                S(function(_t) {
                  return Ct(Ct({}, _t), {}, {
                    image: tt
                  });
                }), Yt();
              case 11:
              case "end":
                return nt.stop();
            }
          }, gt);
        })), [ke, _, Yt, C.image]);
        return Object(o.useEffect)(function() {
          if (f != null && f.link) {
            var gt = parseFloat(f.height), tt = parseFloat(f.width), vt = tt / gt;
            F(vt), oe(!0), S(Ct(Ct(Ct({}, C), f), {}, {
              height: gt,
              width: tt
            }));
          }
        }, [f, C]), Object(o.useEffect)(function() {
          if (Se !== "default") {
            var gt = document.querySelector(".ReactCrop");
            console.log(gt, "reactCropElemreactCropElem"), gt.style.maxHeight = "350px";
          }
        }, [Se]), /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, Se === "crop" ? /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.image__cropper__box
        }, C.image && /* @__PURE__ */ e.a.createElement(ji, {
          imageSrc: URL.createObjectURL(C.image),
          onCropComplete: Zt
        }), /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.image__cropper_btn
        }, /* @__PURE__ */ e.a.createElement("button", {
          onClick: Ea,
          disabled: !ke,
          className: l.a.saveButton
        }, "Apply Crop"), /* @__PURE__ */ e.a.createElement("button", {
          onClick: Yt,
          className: l.a.cancel__btn
        }, "Cancel"))) : /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.selectType
        }, /* @__PURE__ */ e.a.createElement("button", {
          className: "".concat(C.type === "general" ? "".concat(l.a.selectedType) : ""),
          onClick: function(tt) {
            return Ur(tt, "general");
          }
        }, "General"), /* @__PURE__ */ e.a.createElement("button", {
          className: "".concat(C.type === "upload" ? "".concat(l.a.selectedType) : ""),
          onClick: function(tt) {
            return Ur(tt, "upload");
          }
        }, "Upload")), /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, C.type === "general" ? /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.reactEditorMt10
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "link"
        }, "Source"), /* @__PURE__ */ e.a.createElement("input", {
          id: "link",
          type: "text",
          name: "link",
          autoFocus: !0,
          className: l.a.formControlInput,
          value: C.link,
          onChange: et
        }), x && /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.editorErrorMessage
        }, "*", "".concat(x))), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(l.a.reactEditorDFlex, " ").concat(l.a.justifyContentBetween)
        }, /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(l.a.reactEditorMt10, " ").concat(l.a.reactEditorW45)
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "height"
        }, "Height"), /* @__PURE__ */ e.a.createElement("input", {
          id: "height",
          type: "number",
          name: "height",
          value: C.height,
          onChange: et,
          className: l.a.formControlInput
        })), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(l.a.reactEditorMt10, " ").concat(l.a.reactEditorW45)
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "width"
        }, "Width"), /* @__PURE__ */ e.a.createElement("input", {
          id: "width",
          type: "number",
          name: "width",
          value: C.width,
          onChange: et,
          className: l.a.formControlInput
        })), /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.lockUnlockIcon,
          onClick: function() {
            return H(!V);
          }
        }, V ? /* @__PURE__ */ e.a.createElement(Le, null) : /* @__PURE__ */ e.a.createElement(fe, null)))) : /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.reactEditorMt10
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "image"
        }, "Choose File"), /* @__PURE__ */ e.a.createElement("input", {
          type: "file",
          id: "image",
          name: "image",
          className: l.a.formControlInput,
          accept: "image/*",
          onChange: de
        }), x && /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.editorErrorMessage
        }, "*", "".concat(x))), /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.image__submit__container
        }, /* @__PURE__ */ e.a.createElement("div", null, C.type === "upload" && C.image && /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.image__preview__box
        }, /* @__PURE__ */ e.a.createElement(rt, null), /* @__PURE__ */ e.a.createElement("img", {
          src: URL.createObjectURL(C.image),
          alt: "",
          srcset: "",
          title: "Click to crop image",
          onClick: function() {
            return D("crop");
          }
        }))), /* @__PURE__ */ e.a.createElement("button", {
          className: l.a.saveButton,
          onClick: Ge
        }, "Save")))));
      }
      function Fr(t) {
        "@babel/helpers - typeof";
        return Fr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
          return typeof r;
        } : function(r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
        }, Fr(t);
      }
      function pn(t, r) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(t);
          r && (c = c.filter(function(d) {
            return Object.getOwnPropertyDescriptor(t, d).enumerable;
          })), a.push.apply(a, c);
        }
        return a;
      }
      function Br(t) {
        for (var r = 1; r < arguments.length; r++) {
          var a = arguments[r] != null ? arguments[r] : {};
          r % 2 ? pn(Object(a), !0).forEach(function(c) {
            xa(t, c, a[c]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : pn(Object(a)).forEach(function(c) {
            Object.defineProperty(t, c, Object.getOwnPropertyDescriptor(a, c));
          });
        }
        return t;
      }
      function xa(t, r, a) {
        return (r = Ki(r)) in t ? Object.defineProperty(t, r, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : t[r] = a, t;
      }
      function Ki(t) {
        var r = Vi(t, "string");
        return Fr(r) == "symbol" ? r : r + "";
      }
      function Vi(t, r) {
        if (Fr(t) != "object" || !t) return t;
        var a = t[Symbol.toPrimitive];
        if (a !== void 0) {
          var c = a.call(t, r);
          if (Fr(c) != "object") return c;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (r === "string" ? String : Number)(t);
      }
      function hn(t, r) {
        return Zi(t) || Ji(t, r) || qi(t, r) || Wi();
      }
      function Wi() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function qi(t, r) {
        if (t) {
          if (typeof t == "string") return fn(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? fn(t, r) : void 0;
        }
      }
      function fn(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, c = Array(r); a < r; a++) c[a] = t[a];
        return c;
      }
      function Ji(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var c, d, f, y, b = [], x = !0, k = !1;
          try {
            if (f = (a = a.call(t)).next, r !== 0) for (; !(x = (c = f.call(a)).done) && (b.push(c.value), b.length !== r); x = !0) ;
          } catch (O) {
            k = !0, d = O;
          } finally {
            try {
              if (!x && a.return != null && (y = a.return(), Object(y) !== y)) return;
            } finally {
              if (k) throw d;
            }
          }
          return b;
        }
      }
      function Zi(t) {
        if (Array.isArray(t)) return t;
      }
      function Xi(t) {
        var r = t.onMediaInsert, a = t.targetElement, c = a === void 0 ? null : a, d = t.targetElementType, f = d === void 0 ? "" : d, y = Object(o.useState)(""), b = hn(y, 2), x = b[0], k = b[1], O = Object(o.useState)({
          link: "",
          height: "",
          embed_code: "",
          width: "",
          type: "general"
        }), K = hn(O, 2), W = K[0], F = K[1], h = function(T) {
          var Q = T.target, oe = Q.name, $ = Q.files;
          F(function(ce) {
            return Br(Br({}, ce), {}, xa({}, oe, $[0]));
          });
        }, ne = function(T) {
          if (T.preventDefault(), W.type === "general" && !W.link) {
            var Q = "Video source is required";
            k(Q);
            return;
          } else if (W.type === "upload" && !W.link) {
            var oe = "Please upload media file";
            k(oe);
            return;
          } else if (W.type === "embed" && !W.embed_code) {
            var $ = "Please add video embed code";
            k($);
            return;
          }
          r(W, c);
        }, V = function(T) {
          var Q = T.target, oe = Q.name, $ = Q.value;
          F(function(ce) {
            return Br(Br({}, ce), {}, xa({}, oe, $));
          });
        }, H = function(T, Q) {
          T.preventDefault(), F(function(oe) {
            return Br(Br({}, oe), {}, {
              type: Q
            });
          }), k("");
        };
        return Object(o.useEffect)(function() {
          if (c) {
            var B = {
              link: c.getAttribute("src") || "",
              height: c.getAttribute("height") || "",
              width: c.getAttribute("width") || "",
              embed_code: f == "general" ? "" : c.outerHTML || "",
              type: f || "general"
            };
            F(B);
          }
        }, [c, f]), /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.mediaModal
        }, /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.selectType
        }, /* @__PURE__ */ e.a.createElement("button", {
          className: "".concat(W.type === "general" ? "".concat(l.a.selectedType) : ""),
          onClick: function(T) {
            return H(T, "general");
          }
        }, "General"), /* @__PURE__ */ e.a.createElement("button", {
          className: "".concat(W.type === "embed" ? "".concat(l.a.selectedType) : ""),
          onClick: function(T) {
            return H(T, "embed");
          }
        }, "Embed")), /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, W.type === "general" ? /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.reactEditorMt10
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "link"
        }, "Source"), /* @__PURE__ */ e.a.createElement("input", {
          id: "link",
          type: "text",
          name: "link",
          autoFocus: !0,
          className: l.a.formControlInput,
          value: W.link,
          onChange: V
        }), x && /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.editorErrorMessage
        }, "*", "".concat(x))), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(l.a.reactEditorDFlex, " ").concat(l.a.justifyContentBetween)
        }, /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(l.a.reactEditorMt10, " ").concat(l.a.reactEditorW47)
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "height"
        }, "Height"), /* @__PURE__ */ e.a.createElement("input", {
          id: "height",
          type: "number",
          name: "height",
          value: W.height,
          onChange: V,
          className: l.a.formControlInput
        })), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(l.a.reactEditorMt10, " ").concat(l.a.reactEditorW47)
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "width"
        }, "Width"), /* @__PURE__ */ e.a.createElement("input", {
          id: "width",
          type: "number",
          name: "width",
          value: W.width,
          onChange: V,
          className: l.a.formControlInput
        })))) : W.type === "embed" ? /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.reactEditorMt10
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "embed_code"
        }, "Paste your embed code below:"), /* @__PURE__ */ e.a.createElement("textarea", {
          id: "embed_code",
          name: "embed_code",
          rows: 5,
          autoFocus: !0,
          className: l.a.formControlInput,
          value: W.embed_code,
          onChange: V
        }), x && /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.editorErrorMessage
        }, "*", "".concat(x)))) : /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.reactEditorMt10
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "link"
        }, "Choose File"), /* @__PURE__ */ e.a.createElement("input", {
          type: "file",
          id: "link",
          name: "link",
          className: l.a.formControlInput,
          accept: "video/*",
          onChange: h
        }), x && /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.editorErrorMessage
        }, "*", "".concat(x)))), /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.reactEditorTextEnd
        }, /* @__PURE__ */ e.a.createElement("button", {
          className: l.a.saveButton,
          onClick: ne
        }, "Save"))));
      }
      function $i() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
        }));
      }
      function gn(t, r) {
        return al(t) || rl(t, r) || tl(t, r) || el();
      }
      function el() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function tl(t, r) {
        if (t) {
          if (typeof t == "string") return vn(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? vn(t, r) : void 0;
        }
      }
      function vn(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, c = Array(r); a < r; a++) c[a] = t[a];
        return c;
      }
      function rl(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var c, d, f, y, b = [], x = !0, k = !1;
          try {
            if (f = (a = a.call(t)).next, r !== 0) for (; !(x = (c = f.call(a)).done) && (b.push(c.value), b.length !== r); x = !0) ;
          } catch (O) {
            k = !0, d = O;
          } finally {
            try {
              if (!x && a.return != null && (y = a.return(), Object(y) !== y)) return;
            } finally {
              if (k) throw d;
            }
          }
          return b;
        }
      }
      function al(t) {
        if (Array.isArray(t)) return t;
      }
      var nl = function(r) {
        var a, c = r.editorRef, d = r.setIsOpenModel, f = r.setSelectedData, y = r.setSelectedEvent, b = r.selectedEvent, x = r.setImageUrl, k = r.handleRemoveLink, O = r.selectedRange, K = Object(o.useRef)(null), W = Object(o.useState)({
          x: 0,
          y: 0
        }), F = gn(W, 2), h = F[0], ne = F[1], V = Object(o.useState)(!1), H = gn(V, 2), B = H[0], T = H[1], Q = function() {
          if (O) {
            var ke = O.toString();
            return ke;
          }
          return "";
        }, oe = function(ke) {
          ke.preventDefault(), Be();
          var ze = ke.target, Re = ze.parentElement.getBoundingClientRect();
          ne({
            x: ke.clientX - Re.left,
            y: ke.clientY - Re.top
          });
          var at = ["IMG", "A", "BUTTON"];
          at.includes(ze.tagName) && y(ze), T(!0);
        }, $ = function(ke) {
          K.current && !K.current.contains(ke.target) && T(!1);
        }, ce = function() {
          var ke = !1, ze = "", Re = Q() || "", at = "text";
          (b == null ? void 0 : b.tagName) === "A" ? (ze = b == null ? void 0 : b.href, Re = Q() || (b == null ? void 0 : b.textContent.trim()), ke = (b == null ? void 0 : b.target) === "_blank") : (b == null ? void 0 : b.tagName) === "IMG" ? (Re = "Image", at = "image", x(b == null ? void 0 : b.src)) : (b == null ? void 0 : b.tagName) === "BUTTON" && (Re = b.textContent, at = "button");
          var _ = b == null ? void 0 : b.parentElement;
          (_ == null ? void 0 : _.tagName) === "A" && (y(_), ze = _ == null ? void 0 : _.href, ke = (_ == null ? void 0 : _.target) === "_blank");
          var g = {
            link: ze,
            text: Re,
            open_new_tab: ke,
            link_type: at
          };
          f(g), T(!1), d("link");
        }, Se = function() {
          var ke, ze = b == null ? void 0 : b.href;
          if ((b == null ? void 0 : b.tagName) !== "A" && (b == null || (ke = b.parentElement) === null || ke === void 0 ? void 0 : ke.tagName) === "A") {
            var Re;
            ze = b == null || (Re = b.parentElement) === null || Re === void 0 ? void 0 : Re.href;
          }
          window.open(ze), T(!1);
        }, D = function() {
          k(), T(!1);
        }, Qe = function() {
          var ke, ze;
          T(!1);
          var Re = (ke = b.style) === null || ke === void 0 ? void 0 : ke.height, at = (ze = b.style) === null || ze === void 0 ? void 0 : ze.width;
          Re || (Re = b == null ? void 0 : b.offsetHeight), at || (at = b == null ? void 0 : b.offsetWidth), f({
            link: b == null ? void 0 : b.src,
            height: Re,
            width: at
          }), d("image");
        };
        return Object(o.useEffect)(function() {
          var Oe = c.current;
          return Oe && Oe.addEventListener("contextmenu", oe), document.addEventListener("mousedown", $), function() {
            Oe && Oe.removeEventListener("contextmenu", oe), document.removeEventListener("mousedown", $);
          };
        }, [c]), /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, B && /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.rightClickPopupBackground,
          style: {
            top: h.y,
            left: h.x
          },
          ref: K
        }, /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.rightClickPopup,
          onClick: ce
        }, /* @__PURE__ */ e.a.createElement(ct, null), " Link..."), ((b == null ? void 0 : b.tagName) === "A" || (b == null || (a = b.parentElement) === null || a === void 0 ? void 0 : a.tagName) === "A") && /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.rightClickPopup,
          onClick: D
        }, /* @__PURE__ */ e.a.createElement(He, null), " Remove Link..."), " ", /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(l.a.rightClickPopup, " ").concat(l.a.openLink),
          onClick: Se
        }, /* @__PURE__ */ e.a.createElement($i, null), " Open Link...")), (b == null ? void 0 : b.tagName) === "IMG" && /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement("hr", null), /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.rightClickPopup,
          ref: K,
          onClick: Qe
        }, /* @__PURE__ */ e.a.createElement(Te, null), " Image..."))));
      }, ol = nl;
      function bn(t, r) {
        return sl(t) || cl(t, r) || ll(t, r) || il();
      }
      function il() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function ll(t, r) {
        if (t) {
          if (typeof t == "string") return yn(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? yn(t, r) : void 0;
        }
      }
      function yn(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, c = Array(r); a < r; a++) c[a] = t[a];
        return c;
      }
      function cl(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var c, d, f, y, b = [], x = !0, k = !1;
          try {
            if (f = (a = a.call(t)).next, r !== 0) for (; !(x = (c = f.call(a)).done) && (b.push(c.value), b.length !== r); x = !0) ;
          } catch (O) {
            k = !0, d = O;
          } finally {
            try {
              if (!x && a.return != null && (y = a.return(), Object(y) !== y)) return;
            } finally {
              if (k) throw d;
            }
          }
          return b;
        }
      }
      function sl(t) {
        if (Array.isArray(t)) return t;
      }
      function dl(t) {
        var r = t.editorRef, a = Object(o.useState)(!1), c = bn(a, 2), d = c[0], f = c[1], y = Object(o.useState)("Default"), b = bn(y, 2), x = b[0], k = b[1], O = Object(o.useRef)(null), K = [{
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
        }], W = function(H) {
          H.preventDefault(), f(!d);
        }, F = function(H, B) {
          H.preventDefault(), r.current.focus(), document.execCommand("styleWithCSS", !1, !0), document.execCommand("fontName", !1, B.value), k(B.label), f(!1);
        }, h = function() {
          var H = window.getSelection();
          if (H.rangeCount > 0)
            for (var B = H.getRangeAt(0), T = B.startContainer, Q = T; Q && Q !== r.current; ) {
              if (Q.nodeType === Node.ELEMENT_NODE && Q.style.fontFamily)
                for (var oe = Q.style.fontFamily.replace(/"/g, ""), $ = 0, ce = K; $ < ce.length; $++) {
                  var Se = ce[$], D = Se.value.split(",")[0].trim();
                  if (oe === Se.value || oe.startsWith("".concat(D, ",")) || oe === D)
                    return Se.label;
                }
              Q = Q.parentNode;
            }
          return null;
        }, ne = function() {
          var H = r.current;
          H && H.contains(window.getSelection().anchorNode) && H.focus();
        };
        return Object(o.useEffect)(function() {
          var V = function(T) {
            O.current && !O.current.contains(T.target) && f(!1);
          }, H = function() {
            var T;
            if (r != null && (T = r.current) !== null && T !== void 0 && T.contains(window.getSelection().anchorNode)) {
              var Q = h();
              k(Q || "Default");
            }
          };
          return document.addEventListener("click", V), document.addEventListener("selectionchange", H), document.addEventListener("keydown", ne), function() {
            document.removeEventListener("click", V), document.removeEventListener("selectionchange", H), document.removeEventListener("keydown", ne);
          };
        }, [r]), /* @__PURE__ */ e.a.createElement("button", {
          className: l.a.customSelectFormat,
          onClick: W,
          ref: O,
          style: {
            minWidth: "120px"
          }
        }, /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.selectSelected
        }, x, /* @__PURE__ */ e.a.createElement(ut, null)), d && /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.selectItemsFormat,
          style: {
            maxHeight: "200px",
            overflowY: "auto"
          }
        }, K.map(function(V, H) {
          return /* @__PURE__ */ e.a.createElement("div", {
            key: "key".concat(H),
            onClick: function(T) {
              return F(T, V);
            },
            className: l.a.selectOption,
            style: {
              fontFamily: V.value
            }
          }, V.label);
        })));
      }
      var ul = dl;
      function wn(t, r) {
        return fl(t) || hl(t, r) || pl(t, r) || ml();
      }
      function ml() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function pl(t, r) {
        if (t) {
          if (typeof t == "string") return xn(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? xn(t, r) : void 0;
        }
      }
      function xn(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, c = Array(r); a < r; a++) c[a] = t[a];
        return c;
      }
      function hl(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var c, d, f, y, b = [], x = !0, k = !1;
          try {
            if (f = (a = a.call(t)).next, r !== 0) for (; !(x = (c = f.call(a)).done) && (b.push(c.value), b.length !== r); x = !0) ;
          } catch (O) {
            k = !0, d = O;
          } finally {
            try {
              if (!x && a.return != null && (y = a.return(), Object(y) !== y)) return;
            } finally {
              if (k) throw d;
            }
          }
          return b;
        }
      }
      function fl(t) {
        if (Array.isArray(t)) return t;
      }
      function gl(t) {
        var r, a, c = t.editorRef, d = Object(o.useState)(!1), f = wn(d, 2), y = f[0], b = f[1], x = Object(o.useState)("Alignment"), k = wn(x, 2), O = k[0], K = k[1], W = Object(o.useRef)(null), F = [{
          label: "Left",
          value: "left",
          icon: /* @__PURE__ */ e.a.createElement(ue, null)
        }, {
          label: "Center",
          value: "center",
          icon: /* @__PURE__ */ e.a.createElement(jt, null)
        }, {
          label: "Right",
          value: "right",
          icon: /* @__PURE__ */ e.a.createElement(Ke, null)
        }, {
          label: "Justify",
          value: "justify",
          icon: /* @__PURE__ */ e.a.createElement(je, null)
        }], h = function(T) {
          T.preventDefault(), b(!y);
        }, ne = function(T, Q) {
          T.preventDefault(), c.current.focus(), document.execCommand("justify" + Q.value.charAt(0).toUpperCase() + Q.value.slice(1)), K(Q.label), b(!1);
        }, V = function() {
          var T = window.getSelection();
          if (T.rangeCount > 0) {
            for (var Q = T.getRangeAt(0), oe = Q.startContainer, $ = oe, ce = function() {
              if ($.nodeType === Node.ELEMENT_NODE && $.style.textAlign) {
                var Qe = $.style.textAlign, Oe = F.find(function(ke) {
                  return ke.value === Qe;
                });
                if (Oe)
                  return {
                    v: Oe.label
                  };
              }
              $ = $.parentNode;
            }, Se; $ && $ !== c.current; )
              if (Se = ce(), Se) return Se.v;
          }
          return null;
        }, H = function() {
          var T = c.current;
          T && T.contains(window.getSelection().anchorNode) && T.focus();
        };
        return Object(o.useEffect)(function() {
          var B = function(oe) {
            W.current && !W.current.contains(oe.target) && b(!1);
          }, T = function() {
            var oe;
            if (c != null && (oe = c.current) !== null && oe !== void 0 && oe.contains(window.getSelection().anchorNode)) {
              var $ = V();
              K($ || "Alignment");
            }
          };
          return document.addEventListener("click", B), document.addEventListener("selectionchange", T), document.addEventListener("keydown", H), function() {
            document.removeEventListener("click", B), document.removeEventListener("selectionchange", T), document.removeEventListener("keydown", H);
          };
        }, [c]), /* @__PURE__ */ e.a.createElement("button", {
          className: l.a.customSelectFormat,
          onClick: h,
          ref: W
        }, /* @__PURE__ */ e.a.createElement("div", {
          style: {
            display: "flex"
          }
        }, O === "Alignment" ? /* @__PURE__ */ e.a.createElement("span", null, (r = F[0]) === null || r === void 0 ? void 0 : r.icon) : /* @__PURE__ */ e.a.createElement("span", null, (a = F.find(function(B) {
          return B.label === O;
        })) === null || a === void 0 ? void 0 : a.icon), /* @__PURE__ */ e.a.createElement("span", {
          className: l.a.selectSelected
        }, /* @__PURE__ */ e.a.createElement(ut, null))), y && /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.selectItemsFormat
        }, F.map(function(B, T) {
          return /* @__PURE__ */ e.a.createElement("div", {
            key: "key".concat(T),
            onClick: function(oe) {
              return ne(oe, B);
            },
            className: l.a.selectOption,
            style: {
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textAlign: B.value,
              fontSize: "12px"
            }
          }, /* @__PURE__ */ e.a.createElement("span", null, B.icon), /* @__PURE__ */ e.a.createElement("span", null, B.label));
        })));
      }
      var vl = gl;
      function _n(t, r) {
        return xl(t) || wl(t, r) || yl(t, r) || bl();
      }
      function bl() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function yl(t, r) {
        if (t) {
          if (typeof t == "string") return kn(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? kn(t, r) : void 0;
        }
      }
      function kn(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, c = Array(r); a < r; a++) c[a] = t[a];
        return c;
      }
      function wl(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var c, d, f, y, b = [], x = !0, k = !1;
          try {
            if (f = (a = a.call(t)).next, r !== 0) for (; !(x = (c = f.call(a)).done) && (b.push(c.value), b.length !== r); x = !0) ;
          } catch (O) {
            k = !0, d = O;
          } finally {
            try {
              if (!x && a.return != null && (y = a.return(), Object(y) !== y)) return;
            } finally {
              if (k) throw d;
            }
          }
          return b;
        }
      }
      function xl(t) {
        if (Array.isArray(t)) return t;
      }
      function _l(t) {
        var r = t.editorRef, a = Object(o.useState)(!1), c = _n(a, 2), d = c[0], f = c[1], y = Object(o.useState)("16px"), b = _n(y, 2), x = b[0], k = b[1], O = Object(o.useRef)(null), K = [{
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
        }], W = function(H) {
          H.preventDefault(), f(!d);
        }, F = function(H, B) {
          H.preventDefault(), r.current.focus();
          var T = window.getSelection();
          if (T.rangeCount) {
            var Q = T.getRangeAt(0), oe = Q.commonAncestorContainer, $ = Q.toString(), ce = B.value + "px", Se = function(Re) {
              for (; Re && Re !== r.current; ) {
                if (Re.nodeType === 1 && Re.tagName === "SPAN")
                  return Re.textContent == $ || Re.innerText == $ ? Re : null;
                Re = Re.parentNode;
              }
              return null;
            }, D = Se(oe);
            if (T.isCollapsed) {
              var ke = document.createElement("span");
              ke.style.fontSize = ce, ke.innerHTML = "​", Q.insertNode(ke), Q.setStart(ke.firstChild, 1), Q.setEnd(ke.firstChild, 1), T.removeAllRanges(), T.addRange(Q);
            } else if (D)
              D.style.fontSize = ce;
            else {
              var Qe = document.createElement("span");
              Qe.style.fontSize = ce;
              var Oe = Q.extractContents();
              Qe.appendChild(Oe), Q.insertNode(Qe);
            }
            k(B.label), f(!1);
          }
        }, h = function() {
          var H = window.getSelection();
          if (H.rangeCount > 0) {
            for (var B = H.getRangeAt(0), T = B.startContainer, Q = T, oe = function() {
              if (Q.nodeType === Node.ELEMENT_NODE && Q.style.fontSize) {
                var Se = Q.style.fontSize, D = Se.replace("px", ""), Qe = K.find(function(Oe) {
                  return Oe.value === D;
                });
                if (Qe)
                  return {
                    v: Qe.label
                  };
              }
              Q = Q.parentNode;
            }, $; Q && Q !== r.current; )
              if ($ = oe(), $) return $.v;
          }
          return null;
        }, ne = function() {
          var H = r.current;
          H && H.contains(window.getSelection().anchorNode) && H.focus();
        };
        return Object(o.useEffect)(function() {
          var V = function(T) {
            O.current && !O.current.contains(T.target) && f(!1);
          }, H = function() {
            var T;
            if (r != null && (T = r.current) !== null && T !== void 0 && T.contains(window.getSelection().anchorNode)) {
              var Q = h();
              k(Q || "16px");
            }
          };
          return document.addEventListener("click", V), document.addEventListener("selectionchange", H), document.addEventListener("keydown", ne), function() {
            document.removeEventListener("click", V), document.removeEventListener("selectionchange", H), document.removeEventListener("keydown", ne);
          };
        }, [r]), /* @__PURE__ */ e.a.createElement("button", {
          className: l.a.customSelectFormat,
          onClick: W,
          ref: O
        }, /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.selectSelected
        }, x, /* @__PURE__ */ e.a.createElement(ut, null)), d && /* @__PURE__ */ e.a.createElement("div", {
          className: l.a.selectItemsFormat,
          style: {
            maxHeight: "200px",
            overflowY: "auto"
          }
        }, K.map(function(V, H) {
          return /* @__PURE__ */ e.a.createElement("div", {
            key: "key".concat(H),
            onClick: function(T) {
              return F(T, V);
            },
            className: l.a.selectOption,
            style: {
              fontSize: "14px"
            }
          }, V.label);
        })));
      }
      var kl = _l;
      i(8);
      function Pr(t) {
        "@babel/helpers - typeof";
        return Pr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
          return typeof r;
        } : function(r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
        }, Pr(t);
      }
      var El = ["theme_config", "toolbar", "navbar", "value", "onChange", "getEditorRef", "mainProps", "placeholder", "image_handler", "handleFullScreen", "remove_from_toolbar", "remove_from_navbar", "style"];
      function ta() {
        return ta = Object.assign ? Object.assign.bind() : function(t) {
          for (var r = 1; r < arguments.length; r++) {
            var a = arguments[r];
            for (var c in a) ({}).hasOwnProperty.call(a, c) && (t[c] = a[c]);
          }
          return t;
        }, ta.apply(null, arguments);
      }
      function En(t, r) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(t);
          r && (c = c.filter(function(d) {
            return Object.getOwnPropertyDescriptor(t, d).enumerable;
          })), a.push.apply(a, c);
        }
        return a;
      }
      function Cn(t) {
        for (var r = 1; r < arguments.length; r++) {
          var a = arguments[r] != null ? arguments[r] : {};
          r % 2 ? En(Object(a), !0).forEach(function(c) {
            Cl(t, c, a[c]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : En(Object(a)).forEach(function(c) {
            Object.defineProperty(t, c, Object.getOwnPropertyDescriptor(a, c));
          });
        }
        return t;
      }
      function Cl(t, r, a) {
        return (r = Al(r)) in t ? Object.defineProperty(t, r, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : t[r] = a, t;
      }
      function Al(t) {
        var r = Sl(t, "string");
        return Pr(r) == "symbol" ? r : r + "";
      }
      function Sl(t, r) {
        if (Pr(t) != "object" || !t) return t;
        var a = t[Symbol.toPrimitive];
        if (a !== void 0) {
          var c = a.call(t, r);
          if (Pr(c) != "object") return c;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (r === "string" ? String : Number)(t);
      }
      function Il(t, r) {
        var a = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (!a) {
          if (Array.isArray(t) || (a = _a(t)) || r) {
            a && (t = a);
            var c = 0, d = function() {
            };
            return { s: d, n: function() {
              return c >= t.length ? { done: !0 } : { done: !1, value: t[c++] };
            }, e: function(k) {
              throw k;
            }, f: d };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var f, y = !0, b = !1;
        return { s: function() {
          a = a.call(t);
        }, n: function() {
          var k = a.next();
          return y = k.done, k;
        }, e: function(k) {
          b = !0, f = k;
        }, f: function() {
          try {
            y || a.return == null || a.return();
          } finally {
            if (b) throw f;
          }
        } };
      }
      function Ml(t) {
        return Ll(t) || Rl(t) || _a(t) || Nl();
      }
      function Nl() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Rl(t) {
        if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
      }
      function Ll(t) {
        if (Array.isArray(t)) return ka(t);
      }
      function St(t, r) {
        return Bl(t) || Dl(t, r) || _a(t, r) || Ol();
      }
      function Ol() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function _a(t, r) {
        if (t) {
          if (typeof t == "string") return ka(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? ka(t, r) : void 0;
        }
      }
      function ka(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, c = Array(r); a < r; a++) c[a] = t[a];
        return c;
      }
      function Dl(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var c, d, f, y, b = [], x = !0, k = !1;
          try {
            if (f = (a = a.call(t)).next, r !== 0) for (; !(x = (c = f.call(a)).done) && (b.push(c.value), b.length !== r); x = !0) ;
          } catch (O) {
            k = !0, d = O;
          } finally {
            try {
              if (!x && a.return != null && (y = a.return(), Object(y) !== y)) return;
            } finally {
              if (k) throw d;
            }
          }
          return b;
        }
      }
      function Bl(t) {
        if (Array.isArray(t)) return t;
      }
      function zl(t, r) {
        if (t == null) return {};
        var a, c, d = Tl(t, r);
        if (Object.getOwnPropertySymbols) {
          var f = Object.getOwnPropertySymbols(t);
          for (c = 0; c < f.length; c++) a = f[c], r.indexOf(a) >= 0 || {}.propertyIsEnumerable.call(t, a) && (d[a] = t[a]);
        }
        return d;
      }
      function Tl(t, r) {
        if (t == null) return {};
        var a = {};
        for (var c in t) if ({}.hasOwnProperty.call(t, c)) {
          if (r.indexOf(c) >= 0) continue;
          a[c] = t[c];
        }
        return a;
      }
      var An = function(r, a, c) {
        return r || (r = c), a && (r = r.filter(function(d) {
          return typeof d == "string" ? !a.includes(d) : !a.includes(d.name);
        }), r = r.filter(function(d, f) {
          return d !== "|" || f === 0 || r[f - 1] !== "|";
        })), r;
      }, Sn = function(r) {
        var a = new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i");
        return a.test(r);
      };
      function jl(t) {
        var r = t.theme_config, a = t.toolbar, c = t.navbar, d = t.value, f = t.onChange, y = t.getEditorRef, b = t.mainProps, x = t.placeholder, k = t.image_handler;
        t.handleFullScreen;
        var O = t.remove_from_toolbar, K = t.remove_from_navbar, W = t.style, F = zl(t, El), h = Object(o.useRef)(null), ne = Object(o.useState)(!1), V = St(ne, 2), H = V[0], B = V[1], T = Object(o.useState)(!1), Q = St(T, 2), oe = Q[0], $ = Q[1], ce = Object(o.useState)(!1), Se = St(ce, 2), D = Se[0], Qe = Se[1], Oe = Object(o.useState)(!1), ke = St(Oe, 2), ze = ke[0], Re = ke[1], at = Object(o.useState)(null), _ = St(at, 2), g = _[0], w = _[1], N = Object(o.useState)(!1), C = St(N, 2), S = C[0], de = C[1], Ie = Object(o.useState)(""), Ne = St(Ie, 2), Ge = Ne[0], Je = Ne[1], et = Object(o.useState)(""), Ur = St(et, 2), Zt = Ur[0], Yt = Ur[1], Ea = Object(o.useState)(null), gt = St(Ea, 2), tt = gt[0], vt = gt[1], nt = Object(o.useState)(null), _t = St(nt, 2), bt = _t[0], Xt = _t[1], kt = Object(o.useState)(""), ra = St(kt, 2), Hl = ra[0], Fl = ra[1], Pl = Object(o.useState)({
          link: "",
          height: "",
          width: "",
          type: "general",
          text: "",
          open_new_tab: !1
        }), In = St(Pl, 2), Kt = In[0], Mn = In[1], Ul = Object(o.useState)(null), Nn = St(Ul, 2), wt = Nn[0], Ca = Nn[1], Ql = Object(o.useState)(!0), Rn = St(Ql, 2), wr = Rn[0], Ln = Rn[1], Gl = Object(o.useState)({}), On = St(Gl, 2), Dn = On[0], Yl = On[1], Kl = Object(o.useState)(null), Bn = St(Kl, 2), Qr = Bn[0], zn = Bn[1], Vl = Object(o.useState)(!1), Tn = St(Vl, 2), Wl = Tn[0], ql = Tn[1], Jl = Object(o.useState)(!1), jn = St(Jl, 2), Zl = jn[0], Xl = jn[1], $l = Object(o.useState)(!1), Hn = St($l, 2), ec = Hn[0], tc = Hn[1], rc = function() {
          var J = h == null ? void 0 : h.current;
          if (J) {
            var re = J.querySelector("img");
            return !!re;
          }
          return !1;
        }, ac = function() {
          Re(!0);
          var J = h == null ? void 0 : h.current;
          if (!J) return;
          var re = rc();
          if (!re) {
            var me = document.querySelector(".resizeImageWrapper");
            me && me.parentNode.removeChild(me), Ca(null);
          }
          var ge = Ml(J.childNodes).every(function(lt) {
            return lt.nodeType === Node.TEXT_NODE || lt.nodeType === Node.ELEMENT_NODE && lt.nodeName === "BR";
          });
          if (ge && J.textContent.trim() !== "") {
            var ve = window.getSelection(), be = ve == null ? void 0 : ve.getRangeAt(0), Pe = be == null ? void 0 : be.cloneRange();
            Pe == null || Pe.selectNodeContents(J), Pe == null || Pe.setEnd(be.startContainer, be.startOffset);
            for (var Ze = (Pe == null ? void 0 : Pe.toString().length) || 0, ot = document.createElement("p"); J.firstChild; )
              ot.appendChild(J.firstChild);
            J.appendChild(ot), ot.firstChild;
            var At = Ze, mt = function(It, Rt) {
              var Bt = document.createRange(), rr = window.getSelection();
              Bt.setStart(It, Rt), Bt.collapse(!0), rr.removeAllRanges(), rr.addRange(Bt);
            }, Nt = function lt(It) {
              if (It.nodeType === Node.TEXT_NODE) {
                if (At <= It.length)
                  throw mt(It, At), "done";
                At -= It.length;
              } else
                for (var Rt = 0; Rt < It.childNodes.length; Rt++)
                  lt(It.childNodes[Rt]);
            };
            try {
              Nt(ot);
            } catch {
            }
          }
          function Tt(lt, It) {
            if (lt.getAttribute("data-mlx-editor-empty") || lt.classList.contains("empty")) {
              lt.setAttribute("data-mlx-editor-empty", "true");
              var Rt;
              if (It.tagName.toLowerCase() === "div") {
                var Bt = document.createElement("p");
                Bt.innerHTML = It.innerHTML;
                var rr = Il(It.attributes), na;
                try {
                  for (rr.s(); !(na = rr.n()).done; ) {
                    var oa = na.value;
                    Bt.setAttribute(oa.name, oa.value);
                  }
                } catch (Ia) {
                  rr.e(Ia);
                } finally {
                  rr.f();
                }
                Rt = Bt.outerHTML;
              } else
                Rt = It.outerHTML;
              lt.innerHTML = Rt;
              return;
            }
            lt.setAttribute("data-mlx-editor-empty", "true");
            var ia = window.getSelection(), Kr = document.createRange();
            Kr.selectNodeContents(lt), Kr.collapse(!0), ia.removeAllRanges(), ia.addRange(Kr), lt.innerHTML = "<p><br></p>", document.execCommand("removeFormat", !1, null), lt.style.cssText = "";
          }
          var dt = J.innerHTML;
          dt = ee(dt);
          var qe = document.createElement("div");
          qe.innerHTML = dt;
          var Dt = nc(J.innerHTML), Vt = (!qe.textContent || qe.textContent.replace(/\s/g, "").length === 0) && Dt.isEmpty;
          Vt ? Tt(J, Dt.tempDiv) : (J.removeAttribute("data-mlx-editor-empty"), f == null || f(qe.innerHTML));
        };
        function nc(v) {
          var J = document.createElement("div");
          if (J.innerHTML = v, J.childNodes.forEach(function(me) {
            me.type == Node.TEXT_NODE && !me.textContent.trim() && J.removeChild(me);
          }), J.children.length === 0 || J.innerHTML === "<br>") {
            var re = document.createElement("P");
            return re.innerHTML = "<br>", {
              tempDiv: re,
              isEmpty: !0
            };
          }
          return J.children.length === 1 && J.children[0].children.length === 1 && J.children[0].children[0].tagName === "BR" ? {
            tempDiv: J.children[0],
            isEmpty: !0
          } : {
            isEmpty: !1
          };
        }
        var oc = function(J) {
          if (J.key === "Enter" && !J.shiftKey) {
            var re;
            J.preventDefault();
            var me = h.current, ge = window.getSelection();
            if (!ge.rangeCount || !me) return;
            for (var ve = ge.getRangeAt(0), be = ve.startContainer, Pe = null; be && be !== me; ) {
              if (be.nodeName === "LI") {
                Pe = be;
                break;
              }
              be = be.parentNode;
            }
            if (Pe) {
              var Ze = document.createElement("li");
              Ze.appendChild(document.createElement("br")), Pe.nextSibling ? Pe.parentNode.insertBefore(Ze, Pe.nextSibling) : Pe.parentNode.appendChild(Ze);
              var ot = window.getSelection(), At = document.createRange();
              At.selectNodeContents(Ze), At.collapse(!0), ot.removeAllRanges(), ot.addRange(At);
              return;
            }
            for (; be && be.nodeName !== "P" && be !== me; )
              be = be.parentNode;
            var mt = ((re = be) === null || re === void 0 ? void 0 : re.nodeName) === "P" ? be : null;
            if (!mt) {
              mt = document.createElement("p"), mt.appendChild(document.createElement("br")), me.appendChild(mt);
              var Nt = document.createRange();
              Nt.setStart(mt, 0), Nt.collapse(!0), ge.removeAllRanges(), ge.addRange(Nt);
              return;
            }
            var Tt = ve.startOffset, dt = ve.startContainer, qe = document.createElement("p");
            if (dt.nodeType === Node.TEXT_NODE) {
              var Dt = dt.nodeValue, Vt = Dt.slice(0, Tt), lt = Dt.slice(Tt);
              if (dt.nodeValue = Vt, lt) {
                var It = document.createTextNode(lt);
                qe.appendChild(It);
              } else
                qe.appendChild(document.createElement("br"));
            } else
              qe.appendChild(document.createElement("br"));
            var Rt = mt.parentNode;
            Rt && Rt.contains(mt) && (mt.nextSibling ? Rt.insertBefore(qe, mt.nextSibling) : Rt.appendChild(qe));
            var Bt = document.createRange();
            Bt.setStart(qe, 0), Bt.collapse(!0), ge.removeAllRanges(), ge.addRange(Bt);
          }
        }, dr = function(J, re, me) {
          J.preventDefault(), Yt(re), Yl(me);
        }, Gr = function(J) {
          J && J.preventDefault(), Je(""), vt(""), Yt(""), Mn({}), Ca(null);
        }, Fn = function(J) {
          if (J.preventDefault(), h != null && h.current) {
            var re = g.replace(/\n\s*\n/g, `
`).replace(/\s+/g, " ").trim();
            h.current.innerHTML = re, B(!1), f && f(re);
          }
        }, Pn = function(J) {
          J.preventDefault();
          var re = window.getSelection();
          if (re.toString())
            re.removeAllRanges();
          else {
            var me = document.createRange();
            me.selectNodeContents(h == null ? void 0 : h.current), re.removeAllRanges(), re.addRange(me);
          }
        }, Un = function() {
          xr(), document.execCommand("insertHorizontalRule");
        }, xr = function() {
          var J = h == null ? void 0 : h.current;
          if (J && Qr) {
            var re = window.getSelection();
            re.removeAllRanges(), re.addRange(Qr), J.focus();
          }
        }, ic = function(J) {
          var re = J.text, me = J.link, ge = J.open_new_tab, ve = J.link_type;
          re || (re = me);
          var be = '<a href="'.concat(me, '"');
          if (ge && ge !== "false" && (be += ' target="_blank"'), ve === "image" && Ge)
            if (wt)
              if (wt.tagName === "IMG") {
                var Pe = wt.src;
                Pe === Ge ? re = wt.outerHTML : re = '<img src="'.concat(Ge, '" alt="ImageLink" />');
              } else if (wt.tagName === "A") {
                var Ze = wt.firstChild;
                Ze && Ze.nodeType === Node.ELEMENT_NODE && Ze.tagName === "IMG" && Ze.src === Ge ? re = Ze.outerHTML : re = '<img src="'.concat(Ge, '" alt="ImageLink" />');
              } else
                re = '<img src="'.concat(Ge, '" alt="ImageLink" />');
            else
              re = '<img src="'.concat(Ge, '" alt="ImageLink" />');
          else ve === "button" && (re = "<button contentEditable=false>".concat(re, "</button>"));
          be += ">".concat(re, "</a>"), wt && wt.parentElement ? wt.parentElement.removeChild(wt) : Vn(), xr(), document.execCommand("insertHTML", !1, be), Gr();
        }, lc = function() {
          var J = "".concat(wt.textContent.trim());
          if (wt.tagName === "IMG" && (J = '<img src="'.concat(wt.src, '" alt="ImageLink" />')), wt) {
            var re = wt.parentElement;
            re && re.removeChild(wt);
          }
          xr(), document.execCommand("insertHTML", !1, J), Gr();
        }, cc = function(J) {
          var re = J.link, me = J.height, ge = J.width;
          if (wt && Kt)
            wt.src = re, me ? wt.style.height = "".concat(me, "px") : wt.style.height = null, ge ? wt.style.width = "".concat(ge, "px") : wt.style.width = null, setTimeout(function() {
              $(!1), Gr();
            }, 0);
          else {
            xr();
            var ve = '<img src="'.concat(re, '" alt="Image" style="');
            me && (ve += "height:".concat(me, "px;")), ge && (ve += "width:".concat(ge, "px;")), ve += '"/>', document.execCommand("insertHTML", !1, ve);
            var be = document.querySelector('[contenteditable="true"]');
            be && be.dispatchEvent(new Event("input", {
              bubbles: !0
            })), $(!1), Gr();
          }
        }, sc = function(J, re) {
          var me = J.link, ge = J.height, ve = J.width, be = J.type, Pe = J.embed_code, Ze = h.current, ot = "";
          if (be === "general")
            if (me.match(/\.(mp4|mov|avi|wmv)$/))
              ot = '<video width="'.concat(ve || "640", '" height="').concat(ge || "360", '" controls><source src="').concat(me, '" type="video/mp4"></video>');
            else {
              var At = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/, mt = /(?:https?:\/\/)?(?:www\.)?vimeo.com\/(\d+)/;
              if (me.match(At)) {
                var Nt = me.match(At)[1];
                ot = '<iframe width="'.concat(ve || "640", '" height="').concat(ge || "360", '" src="https://www.youtube.com/embed/').concat(Nt, '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
              } else if (me.match(mt)) {
                var Tt = me.match(mt)[1];
                ot = '<iframe src="https://player.vimeo.com/video/'.concat(Tt, '" width="').concat(ve || "640", '" height="').concat(ge || "360", '" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>');
              } else
                ot = Pe || "";
            }
          else be === "embed" && Pe && Ze && (ot = Pe);
          if (re && Ze && ot)
            xr(), re.parentNode.setAttribute("data-mtl-link-type", be), re.outerHTML = ot;
          else if (Ze && ot) {
            var dt = dc(ot, be, function(Vt) {
              var lt = Vt.querySelector("iframe");
              vt(lt), Xt(Vt.getAttribute("data-mtl-link-type") || "general"), Yt("video");
            });
            xr();
            var qe = window.getSelection();
            if (!qe.rangeCount) return;
            var Dt = qe.getRangeAt(0);
            Dt.deleteContents(), Dt.insertNode(dt), Dt.setStartAfter(dt), Dt.setEndAfter(dt), qe.removeAllRanges(), qe.addRange(Dt);
          }
          vt(null), Yt("");
        };
        function dc(v, J, re) {
          var me = document.createElement("div");
          me.innerHTML = v;
          var ge = document.createElement("div");
          ge.className = "iframe-wrapper", ge.contentEditable = "true", ge.setAttribute("data-mtl-link-type", J);
          var ve = document.createElement("div");
          ve.className = "iframe-overlay";
          var be = document.createElement("button");
          return be.className = "iframe-settings-btn", be.contentEditable = "false", be.innerHTML = '<div style="display: flex; align-items: center;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10.275 22q-.425 0-.75-.275t-.375-.7l-.3-2.225q-.325-.125-.612-.3t-.563-.375l-1.55.65q-.625.275-1.25.05t-.975-.8l-1.175-2.05q-.35-.575-.2-1.225t.675-1.075l1.325-1Q4.5 12.5 4.5 12.337v-.675q0-.162.025-.337l-1.325-1Q2.675 9.9 2.525 9.25t.2-1.225L3.9 5.975q.35-.575.975-.8t1.25.05l1.55.65q.275-.2.575-.375t.6-.3l.2-1.65q.075-.675.575-1.113T10.8 2h2.4q.675 0 1.175.438t.575 1.112l.2 1.65q.325.125.613.3t.562.375l1.5-.65q.625-.275 1.263-.05t.987.8l1.175 2.05q.35.575.213 1.225t-.663 1.075L19.125 11.6q-.275.2-.562.3t-.638.1h-2.35q0-1.45-1.037-2.475T12.05 8.5q-1.475 0-2.488 1.013T8.55 12q0 1.2.688 2.1T11 15.35v5.8q0 .35-.2.6t-.525.25M20 22h-6q-.425 0-.712-.288T13 21v-6q0-.425.288-.712T14 14h6q.425 0 .713.288T21 15v2l1.575-1.575q.125-.125.275-.062t.15.237v4.8q0 .175-.15.238t-.275-.063L21 19v2q0 .425-.288.713T20 22"/></svg> <span style="margin-inline: 8px;">Settings</span></div>', be.addEventListener("click", function(Pe) {
            Pe.stopPropagation(), typeof re == "function" && re(ge);
          }), ge.appendChild(ve), ge.appendChild(be), ge.appendChild(me.childNodes[0]), ge;
        }
        var uc = function() {
          var J = h.current.innerHTML, re = document.createElement("iframe");
          re.style.display = "none", document.body.appendChild(re);
          var me = re.contentDocument || re.contentWindow.document;
          me.write(J), me.close(), re.contentWindow.print(), setTimeout(function() {
            document.body.removeChild(re);
          }, 100);
        }, mc = function(J, re) {
          J.preventDefault(), (h == null ? void 0 : h.current) !== null && (xr(), document.execCommand("insertHTML", !1, re), vt(null), Yt(""));
        }, Qn = function(J) {
          var re = J.replace(/style="[^"]*"/g, "");
          return re;
        }, pc = function(J) {
          J.preventDefault(), navigator.clipboard.read().then(function(re) {
            re.forEach(function(me) {
              me.types.includes("image/png") || me.types.includes("image/jpeg") ? me.getType(me.types[0]).then(function(ge) {
                var ve = '<img src="'.concat(URL.createObjectURL(ge), '" alt="Image">');
                document.execCommand("insertHTML", !1, ve);
              }).catch(function(ge) {
                console.error("Error reading image content:", ge);
              }) : me.types.includes("text/html") ? me.getType("text/html").then(function(ge) {
                ge.text().then(function(ve) {
                  var be = Qn(ve), Pe = be.replace(/<!--[\s\S]*?-->/g, "");
                  document.execCommand("insertHTML", !1, Pe);
                }).catch(function(ve) {
                  console.error("Error reading HTML content:", ve);
                });
              }).catch(function(ge) {
                console.error("Error getting HTML type from ClipboardItem:", ge);
              }) : me.types.includes("text/plain") && me.getType("text/plain").then(function(ge) {
                ge.text().then(function(ve) {
                  if (Sn(ve)) {
                    var be = '<a href="'.concat(ve, '" target="_blank">').concat(ve, "</a>");
                    document.execCommand("insertHTML", !1, be);
                  } else
                    document.execCommand("insertText", !1, ve);
                }).catch(function(ve) {
                  console.error("Error reading text content:", ve);
                });
              }).catch(function(ge) {
                console.error("Error getting text type from ClipboardItem:", ge);
              });
            });
          }).catch(function(re) {
            console.error("Error reading clipboard:", re);
          });
        }, hc = function() {
          Yr();
        }, fc = function() {
          h.current.innerHTML = "";
        }, gc = function() {
          Fl(h == null ? void 0 : h.current.innerHTML), Qe(!0);
        }, Gn = function() {
          if (!H && h !== null && h !== void 0 && h.current) {
            var J = h == null ? void 0 : h.current.innerHTML, re = ee(J);
            w(re);
          } else
            w("");
          B(!H);
        }, Yn = function() {
          de(!S);
        }, Kn = function(J) {
          J.key === "Escape" && de(!1);
        }, Aa = function() {
          var J = h == null ? void 0 : h.current;
          J && (J.innerText.trim() === "" ? (J.classList.add("empty"), Ln(!0)) : (J.classList.remove("empty"), Ln(!1)));
        }, Yr = function() {
          var J = window.getSelection();
          J.rangeCount > 0 && zn(J.getRangeAt(0));
        }, Vn = function() {
          if (Qr) {
            var J = window.getSelection();
            J.removeAllRanges(), J.addRange(Qr);
          }
        };
        Object(o.useEffect)(function() {
          var v = function() {
            de(document.fullscreenElement !== null);
          };
          return Aa(), document.addEventListener("keydown", Kn), document.addEventListener("input", Aa), document.addEventListener("fullscreenchange", v), function() {
            document.removeEventListener("keydown", Kn), document.removeEventListener("input", Aa), document.removeEventListener("fullscreenchange", v);
          };
        }, []);
        var Wn = function() {
          if (Zt === "link")
            return {
              component: /* @__PURE__ */ e.a.createElement(Ai, {
                onLinkInsert: ic,
                item: Dn,
                setIsOpenModel: Yt,
                selectedData: Kt,
                imageUrl: Ge,
                setImageUrl: Je,
                image_handler: k,
                setIsLoading: $
              }),
              title: "".concat(Kt != null && Kt.link ? "Update" : "Insert", " Link")
            };
          if (Zt === "image")
            return {
              component: /* @__PURE__ */ e.a.createElement(Yi, {
                onImageInsert: cc,
                item: Dn,
                setIsLoading: $,
                setIsOpenModel: Yt,
                image_handler: k,
                selectedData: Kt
              }),
              title: "".concat(Kt != null && Kt.link ? "Update" : "Insert", " Image")
            };
          if (Zt === "video")
            return {
              component: /* @__PURE__ */ e.a.createElement(Xi, {
                onMediaInsert: sc,
                targetElement: tt,
                targetElementType: bt
              }),
              title: "".concat(Kt != null && Kt.link ? "Update" : "Insert", " Video")
            };
          if (Zt === "special_char")
            return {
              component: /* @__PURE__ */ e.a.createElement(Ve, {
                handleCharSelect: mc
              }),
              title: "Insert Special Characters"
            };
        };
        r && Object.keys(r).length > 0 && Object.keys(r).forEach(function(v, J) {
          document.documentElement.style.setProperty("--editor-".concat(v), r[v]);
        }), a = An(a, O, Et), c = An(c, K, ha), Object(o.useEffect)(function() {
          ze || h.current && d && (h.current.innerHTML = d, Re(!0)), d || (h.current.innerHTML = ""), y && y(h);
        }, [S, h, d]);
        var qn = function(J) {
          J.preventDefault(), h.current ? Vn() : setTimeout(function() {
            h.current.focus();
          }, 0), navigator.clipboard.read().then(function(re) {
            re.forEach(function(me) {
              me.types.includes("image/png") || me.types.includes("image/jpeg") ? me.getType(me.types[0]).then(function(ge) {
                var ve = '<img src="'.concat(URL.createObjectURL(ge), '" alt="Image">');
                document.execCommand("insertHTML", !1, ve);
              }).catch(function(ge) {
                console.error("Error reading image content:", ge);
              }) : me.types.includes("text/html") ? me.getType("text/html").then(function(ge) {
                ge.text().then(function(ve) {
                  var be = Qn(ve), Pe = be.replace(/<!--[\s\S]*?-->/g, "");
                  document.execCommand("insertHTML", !1, Pe);
                }).catch(function(ve) {
                  console.error("Error reading HTML content:", ve);
                });
              }).catch(function(ge) {
                console.error("Error getting HTML type from ClipboardItem:", ge);
              }) : me.types.includes("text/plain") && me.getType("text/plain").then(function(ge) {
                ge.text().then(function(ve) {
                  if (Sn(ve)) {
                    var be = '<a href="'.concat(ve, '" target="_blank">').concat(ve, "</a>");
                    document.execCommand("insertHTML", !1, be);
                  } else
                    document.execCommand("insertText", !1, ve);
                }).catch(function(ve) {
                  console.error("Error reading text content:", ve);
                });
              }).catch(function(ge) {
                console.error("Error getting text type from ClipboardItem:", ge);
              });
            });
          }).catch(function(re) {
            console.error("Error reading clipboard:", re);
          });
        }, Sa = function() {
          var J = document.getElementsByClassName("style_wysiwygEditorToolbar__2W7yf")[0];
          J && ql(J.offsetHeight > 34);
          var re = document.getElementsByClassName("style_wysiwygEditorToolbar__2W7yf")[1];
          re && (Xl(re.offsetHeight > 34), tc(re.offsetHeight > 65));
        }, vc = function() {
          var J = h.current;
          if (J) {
            var re = document.createRange();
            J.childNodes.length > 0 ? re.setStart(J.childNodes[0], 0) : re.setStart(J, 0), re.collapse(!0);
            var me = window.getSelection();
            me.removeAllRanges(), me.addRange(re), zn(re);
          }
        }, aa = function(J, re) {
          J.preventDefault();
          var me = J.clientX, ge = document.querySelector(".resizeImageWrapper"), ve = document.querySelector(".resizer-image"), be = parseFloat(ve.style.width), Pe = parseFloat(ve.style.height);
          isNaN(Pe) && (Pe = parseFloat(ve.offsetHeight)), isNaN(be) && (be = parseFloat(ve.offsetWidth));
          var Ze = Pe / be, ot = function(Nt) {
            var Tt = be + (Nt.clientX - me);
            re && (Tt = be - (Nt.clientX - me));
            var dt = Tt > 50 ? Tt : 50, qe = Ze * dt;
            qe = Math.round(qe), dt = Math.round(dt), ge.style.width = "".concat(dt, "px"), ge.style.height = "".concat(qe, "px"), ve.style.width = "".concat(dt, "px"), ve.style.height = "".concat(qe, "px");
          }, At = function mt() {
            window.removeEventListener("mousemove", ot), window.removeEventListener("mouseup", mt);
          };
          window.addEventListener("mousemove", ot), window.addEventListener("mouseup", At);
        }, Jn = function(J) {
          if (J.target.tagName === "IMG" && h.current.contains(J.target)) {
            var re, me, ge = (re = J.target.parentElement) === null || re === void 0 || (me = re.classList) === null || me === void 0 ? void 0 : me.contains("resizeImageWrapper");
            if (ge) return;
            var ve = document.querySelector(".resizer-image");
            ve && Be();
            var be = J.target, Pe = be.offsetWidth, Ze = document.createElement("div");
            Ze.style.display = "inline-block", Ze.style.width = "".concat(Pe, "px"), Ze.classList.add("resizeImageWrapper");
            var ot = document.createElement("div");
            ot.classList.add("resizer"), ot.onmousedown = aa;
            var At = document.createElement("div");
            At.classList.add("resizer", "topRight"), At.onmousedown = aa;
            var mt = document.createElement("div");
            mt.classList.add("resizer", "bottomLeft"), mt.onmousedown = function(Bt) {
              return aa(Bt, "left");
            };
            var Nt = document.createElement("div");
            Nt.classList.add("resizer", "topLeft"), Nt.onmousedown = function(Bt) {
              return aa(Bt, "left");
            }, be.classList.add("resizer-image");
            var Tt = be.cloneNode(!0);
            Ze.appendChild(Tt), Ze.appendChild(ot), Ze.appendChild(At), Ze.appendChild(mt), Ze.appendChild(Nt), be.parentNode.replaceChild(Ze, be);
          } else {
            var dt, qe, Dt, Vt, lt, It = (dt = J.target) === null || dt === void 0 || (qe = dt.classList) === null || qe === void 0 ? void 0 : qe.contains("resizeImageWrapper"), Rt = (Dt = J.target) === null || Dt === void 0 || (Vt = Dt.parentElement) === null || Vt === void 0 || (lt = Vt.classList) === null || lt === void 0 ? void 0 : lt.contains("resizeImageWrapper");
            !It && !Rt && Be();
          }
        };
        Object(o.useEffect)(function() {
          Sa(), vc();
          var v = h.current;
          return v && (window.addEventListener("click", Jn), v.addEventListener("mouseup", Yr), v.addEventListener("keyup", Yr)), window.addEventListener("resize", Sa), function() {
            window.removeEventListener("resize", Sa), v && (window.removeEventListener("click", Jn), v.removeEventListener("mouseup", Yr), v.removeEventListener("keyup", Yr));
          };
        }, [h]), Object(o.useEffect)(function() {
          S || Zt || H || D ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
        }, [S, Zt, H, D]);
        var bc = S && document.getElementById("action-components") ? {
          height: "calc(100vh - ".concat(document.getElementById("action-components").offsetHeight, "px - 22px)")
        } : {};
        return /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement("div", ta({}, b, {
          className: "".concat(l.a.reactEditorMain, " ").concat(S ? l.a.fullScreen : ""),
          id: "react-editor"
        }), /* @__PURE__ */ e.a.createElement("div", {
          id: "action-components",
          className: "".concat(l.a.actionComponents)
        }, c.length > 0 && /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(l.a.wysiwygEditorToolbar),
          id: "editor-navbar"
        }, /* @__PURE__ */ e.a.createElement("hr", {
          className: l.a.hr1,
          style: {
            display: Wl ? "block" : "none"
          }
        }), c.map(function(v, J) {
          var re = v === "|", me = v === "file" || v.name === "file", ge = v === "view" || v.name === "view", ve = v === "format" || v.name === "format", be = v === "insert" || v.name === "insert", Pe = v === "copy" || v.name === "copy", Ze = v === "cut" || v.name === "cut", ot = v === "paste" || v.name === "paste", At = v === "select_all" || v.name === "select_all", mt = v === "image" || v.name === "image", Nt = v === "link" || v.name === "link", Tt = v === "video" || v.name === "video";
          return /* @__PURE__ */ e.a.createElement("div", {
            key: "key".concat(J)
          }, re && /* @__PURE__ */ e.a.createElement("div", {
            className: l.a.verticalLine
          }), me && /* @__PURE__ */ e.a.createElement(Qo, {
            handleNewDocument: fc,
            handlePreview: gc,
            handlePrint: uc,
            item: v,
            remove_from_navbar: K
          }), ge && /* @__PURE__ */ e.a.createElement(To, {
            isFullScreen: S,
            handleViewSource: Gn,
            toggleFullScreen: Yn,
            item: v,
            isPlaceholder: wr,
            placeholder: x,
            value: d,
            remove_from_navbar: K
          }), be && /* @__PURE__ */ e.a.createElement(Wt, {
            onSelectOption: dr,
            handleInsertHR: Un,
            item: v,
            remove_from_navbar: K
          }), ve && /* @__PURE__ */ e.a.createElement(ui, {
            item: v,
            isFullScreen: S,
            remove_from_navbar: K,
            editorRef: h
          }), At && /* @__PURE__ */ e.a.createElement("div", {
            className: l.a.increaseIconSize
          }, /* @__PURE__ */ e.a.createElement("button", {
            onClick: Pn,
            title: v != null && v.title ? v.title : "Select All",
            disabled: wr && x && !d
          }, v != null && v.icon ? v.icon : /* @__PURE__ */ e.a.createElement(R, null))), mt && /* @__PURE__ */ e.a.createElement("div", {
            className: l.a.increaseIconSize
          }, /* @__PURE__ */ e.a.createElement("button", {
            onClick: function(qe) {
              return dr(qe, "image", v);
            },
            title: v != null && v.title ? v.title : "Upload Image"
          }, v != null && v.icon ? v.icon : /* @__PURE__ */ e.a.createElement(Te, null))), Nt && /* @__PURE__ */ e.a.createElement("div", {
            className: l.a.increaseIconSize
          }, /* @__PURE__ */ e.a.createElement("button", {
            onClick: function(qe) {
              return dr(qe, "link", v);
            },
            title: v != null && v.title ? v.title : "Add Link"
          }, v != null && v.icon ? v.icon : /* @__PURE__ */ e.a.createElement(ct, null))), Tt && /* @__PURE__ */ e.a.createElement("div", {
            className: l.a.increaseIconSize
          }, /* @__PURE__ */ e.a.createElement("button", {
            onClick: function(qe) {
              return dr(qe, "video", v);
            },
            title: v != null && v.title ? v.title : "Upload Video"
          }, v != null && v.icon ? v.icon : /* @__PURE__ */ e.a.createElement(Ce, null))), Pe && /* @__PURE__ */ e.a.createElement("div", {
            className: l.a.increaseIconSize
          }, /* @__PURE__ */ e.a.createElement(st, {
            editorRef: h,
            name: "copy",
            icon: /* @__PURE__ */ e.a.createElement($a, null),
            title: "Copy",
            item: v,
            disabled: wr && x && !d
          })), Ze && /* @__PURE__ */ e.a.createElement("div", {
            className: l.a.increaseIconSize
          }, /* @__PURE__ */ e.a.createElement(st, {
            editorRef: h,
            name: "cut",
            icon: /* @__PURE__ */ e.a.createElement(Xa, null),
            title: "Cut",
            item: v,
            disabled: wr && x && !d
          })), ot && /* @__PURE__ */ e.a.createElement("div", {
            className: l.a.increaseIconSize
          }, /* @__PURE__ */ e.a.createElement("button", {
            onClick: qn,
            title: v != null && v.title ? v.title : "Paste"
          }, v != null && v.icon ? v.icon : /* @__PURE__ */ e.a.createElement(Za, null))));
        })), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(l.a.wysiwygEditorToolbar, " ").concat(l.a.wysiwygEditorToolbarWrapper)
        }, /* @__PURE__ */ e.a.createElement("hr", {
          className: l.a.hr1,
          style: {
            display: Zl ? "block" : "none"
          }
        }), /* @__PURE__ */ e.a.createElement("hr", {
          className: "".concat(l.a.hr1, " ").concat(l.a.hr2),
          style: {
            display: ec ? "block" : "none"
          }
        }), a.map(function(v, J) {
          var re = v === "|", me = v === "undo" || v.name === "undo", ge = v === "redo" || v.name === "redo", ve = v === "bold" || v.name === "bold", be = v === "italic" || v.name === "italic", Pe = v === "underline" || v.name === "underline", Ze = v === "superscript" || v.name === "superscript", ot = v === "subscript" || v.name === "subscript", At = v === "alignLeft" || v.name === "alignLeft", mt = v === "alignCenter" || v.name === "alignCenter", Nt = v === "alignRight" || v.name === "alignRight", Tt = v === "alignJustify" || v.name === "alignJustify", dt = v === "alignment" || v.name === "alignment", qe = v === "indent" || v.name === "indent", Dt = v === "outdent" || v.name === "outdent", Vt = v === "orderedList" || v.name === "orderedList", lt = v === "unorderedList" || v.name === "unorderedList", It = v === "removeFormat" || v.name === "removeFormat", Rt = v === "textColor" || v.name === "textColor", Bt = v === "backgroundColor" || v.name === "backgroundColor", rr = v === "ltr" || v.name === "ltr", na = v === "rtl" || v.name === "rtl", oa = v === "format" || v.name === "format", ia = v === "fontfamily" || v.name === "fontfamily", Kr = v === "fontsize" || v.name === "fontsize", Ia = v === "copy" || v.name === "copy", yc = v === "cut" || v.name === "cut", wc = v === "paste" || v.name === "paste", xc = v === "select_all" || v.name === "select_all", _c = v === "image" || v.name === "image", kc = v === "link" || v.name === "link", Ec = v === "video" || v.name === "video", Cc = v === "source_code" || v.name === "source_code", Ac = v === "full_screen" || v.name === "full_screen", Sc = v === "horizontal_line" || v.name === "horizontal_line", Ic = v === "special_character" || v.name === "special_character";
          return /* @__PURE__ */ e.a.createElement("div", {
            key: "key".concat(J)
          }, re && /* @__PURE__ */ e.a.createElement("div", {
            className: l.a.verticalLine
          }), me && /* @__PURE__ */ e.a.createElement(st, {
            editorRef: h,
            name: "undo",
            icon: /* @__PURE__ */ e.a.createElement(pt, null),
            title: v.title ? v.title : "Undo",
            item: v
          }), ge && /* @__PURE__ */ e.a.createElement(st, {
            editorRef: h,
            name: "redo",
            icon: /* @__PURE__ */ e.a.createElement(Ue, null),
            title: "Redo",
            item: v
          }), oa && /* @__PURE__ */ e.a.createElement(Sr, {
            remove_from_toolbar: O,
            editorRef: h
          }), ia && /* @__PURE__ */ e.a.createElement(ul, {
            editorRef: h
          }), Kr && /* @__PURE__ */ e.a.createElement(kl, {
            editorRef: h
          }), ve && /* @__PURE__ */ e.a.createElement(st, {
            editorRef: h,
            name: "bold",
            icon: /* @__PURE__ */ e.a.createElement(Ae, null),
            title: "Bold",
            item: v
          }), be && /* @__PURE__ */ e.a.createElement(st, {
            editorRef: h,
            name: "italic",
            icon: /* @__PURE__ */ e.a.createElement(xe, null),
            title: "Italic",
            item: v
          }), Pe && /* @__PURE__ */ e.a.createElement(st, {
            editorRef: h,
            name: "underline",
            icon: /* @__PURE__ */ e.a.createElement(we, null),
            title: "Underline",
            item: v
          }), Ze && /* @__PURE__ */ e.a.createElement(st, {
            editorRef: h,
            name: "superscript",
            icon: /* @__PURE__ */ e.a.createElement(Ee, null),
            title: "Superscript",
            item: v
          }), ot && /* @__PURE__ */ e.a.createElement(st, {
            editorRef: h,
            name: "subscript",
            icon: /* @__PURE__ */ e.a.createElement(Fe, null),
            title: "Subscript",
            item: v
          }), dt && /* @__PURE__ */ e.a.createElement(vl, {
            editorRef: h
          }), At && /* @__PURE__ */ e.a.createElement(st, {
            editorRef: h,
            name: "justifyLeft",
            icon: /* @__PURE__ */ e.a.createElement(ue, null),
            title: "Align Left",
            item: v
          }), mt && /* @__PURE__ */ e.a.createElement(st, {
            editorRef: h,
            name: "justifyCenter",
            icon: /* @__PURE__ */ e.a.createElement(jt, null),
            title: "Align Center",
            item: v
          }), Nt && /* @__PURE__ */ e.a.createElement(st, {
            editorRef: h,
            name: "justifyRight",
            icon: /* @__PURE__ */ e.a.createElement(Ke, null),
            title: "Align Right",
            item: v
          }), Tt && /* @__PURE__ */ e.a.createElement(st, {
            editorRef: h,
            name: "justifyFull",
            icon: /* @__PURE__ */ e.a.createElement(je, null),
            title: "Align Justify",
            item: v
          }), qe && /* @__PURE__ */ e.a.createElement(st, {
            editorRef: h,
            name: "indent",
            icon: /* @__PURE__ */ e.a.createElement(Me, null),
            title: "Increase IndentIcon",
            item: v
          }), Dt && /* @__PURE__ */ e.a.createElement(st, {
            editorRef: h,
            name: "outdent",
            icon: /* @__PURE__ */ e.a.createElement(_e, null),
            title: "Decrease IndentIcon",
            item: v
          }), Vt && /* @__PURE__ */ e.a.createElement(st, {
            editorRef: h,
            name: "insertOrderedList",
            icon: /* @__PURE__ */ e.a.createElement(ye, null),
            title: "Insert/Remove Numbered List",
            item: v
          }), lt && /* @__PURE__ */ e.a.createElement(st, {
            editorRef: h,
            name: "insertUnorderedList",
            icon: /* @__PURE__ */ e.a.createElement(q, null),
            title: "Insert/Remove Bulleted List",
            item: v
          }), It && /* @__PURE__ */ e.a.createElement(st, {
            editorRef: h,
            name: "removeFormat",
            icon: /* @__PURE__ */ e.a.createElement(he, null),
            title: "Remove Format",
            item: v
          }), Rt && /* @__PURE__ */ e.a.createElement(qa, {
            type: "foreColor",
            title: "Text Color",
            item: v,
            editorRef: h
          }), Bt && /* @__PURE__ */ e.a.createElement(qa, {
            type: "hiliteColor",
            title: "Background Color",
            item: v,
            editorRef: h
          }), rr && /* @__PURE__ */ e.a.createElement(Ja, {
            name: "ltr",
            title: "Left To Right",
            item: v,
            icon: /* @__PURE__ */ e.a.createElement(ie, null),
            editorRef: h
          }), na && /* @__PURE__ */ e.a.createElement(Ja, {
            name: "rtl",
            title: "Right To Left",
            item: v,
            icon: /* @__PURE__ */ e.a.createElement(le, null),
            editorRef: h
          }), xc && /* @__PURE__ */ e.a.createElement("button", {
            onClick: Pn,
            title: v != null && v.title ? v.title : "Select All",
            disabled: wr && x && !d
          }, v != null && v.icon ? v.icon : /* @__PURE__ */ e.a.createElement(R, null)), _c && /* @__PURE__ */ e.a.createElement("button", {
            onClick: function(_r) {
              return dr(_r, "image", v);
            },
            title: v != null && v.title ? v.title : "Upload Image"
          }, v != null && v.icon ? v.icon : /* @__PURE__ */ e.a.createElement(Te, null)), kc && /* @__PURE__ */ e.a.createElement("button", {
            onClick: function(_r) {
              return dr(_r, "link", v);
            },
            title: v != null && v.title ? v.title : "Add Link"
          }, v != null && v.icon ? v.icon : /* @__PURE__ */ e.a.createElement(ct, null)), Ec && /* @__PURE__ */ e.a.createElement("button", {
            onClick: function(_r) {
              return dr(_r, "video", v);
            },
            title: v != null && v.title ? v.title : "Upload Video"
          }, v != null && v.icon ? v.icon : /* @__PURE__ */ e.a.createElement(Ce, null)), Ia && /* @__PURE__ */ e.a.createElement(st, {
            editorRef: h,
            name: "copy",
            icon: /* @__PURE__ */ e.a.createElement($a, null),
            title: "Copy",
            item: v,
            disabled: wr && x && !d
          }), yc && /* @__PURE__ */ e.a.createElement(st, {
            editorRef: h,
            name: "cut",
            icon: /* @__PURE__ */ e.a.createElement(Xa, null),
            title: "Cut",
            item: v,
            disabled: wr && x && !d
          }), wc && /* @__PURE__ */ e.a.createElement("button", {
            onClick: qn,
            title: v != null && v.title ? v.title : "Paste"
          }, v != null && v.icon ? v.icon : /* @__PURE__ */ e.a.createElement(Za, null)), Cc && /* @__PURE__ */ e.a.createElement("div", {
            className: l.a.increaseIconSize
          }, /* @__PURE__ */ e.a.createElement("button", {
            onClick: Gn,
            title: (v == null ? void 0 : v.title) || "Source Code"
          }, /* @__PURE__ */ e.a.createElement(yt, null))), Ac && /* @__PURE__ */ e.a.createElement("div", {
            className: l.a.increaseIconSize
          }, /* @__PURE__ */ e.a.createElement("button", {
            onClick: Yn,
            title: S ? (v == null ? void 0 : v.title) || "Exit Full Screen" : (v == null ? void 0 : v.title) || "Full Screen"
          }, S ? /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement(P, null)) : /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement(U, null)))), Sc && /* @__PURE__ */ e.a.createElement("div", {
            className: l.a.increaseIconSize
          }, /* @__PURE__ */ e.a.createElement("button", {
            onClick: Un,
            title: (v == null ? void 0 : v.title) || "Horizontal Line"
          }, /* @__PURE__ */ e.a.createElement(j, null))), Ic && /* @__PURE__ */ e.a.createElement("div", {
            className: l.a.increaseIconSize
          }, /* @__PURE__ */ e.a.createElement("button", {
            onClick: function(_r) {
              return dr(_r, "special_char");
            },
            title: (v == null ? void 0 : v.title) || "Special Char"
          }, /* @__PURE__ */ e.a.createElement(X, null))));
        }))), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(l.a.content__editable__container)
        }, /* @__PURE__ */ e.a.createElement("div", ta({}, F, {
          className: "".concat(l.a.mlMainContentBox),
          autoFocus: S,
          contentEditable: !0,
          ref: h,
          onPaste: pc,
          spellCheck: "true",
          onInput: ac,
          onBlur: hc,
          "data-placeholder": x,
          onKeyDown: oc,
          style: Cn(Cn({}, W), bc)
        })), /* @__PURE__ */ e.a.createElement(ol, {
          editorRef: h,
          setIsOpenModel: Yt,
          setSelectedData: Mn,
          setSelectedEvent: Ca,
          setImageUrl: Je,
          selectedEvent: wt,
          handleRemoveLink: lc,
          selectedRange: Qr
        }))), oe && /* @__PURE__ */ e.a.createElement(bi, {
          viewSource: H,
          setViewSource: B,
          sourceCode: g,
          setSourceCode: w,
          handleSaveSource: Fn
        }), Zt && /* @__PURE__ */ e.a.createElement(ga, {
          isOpen: Zt,
          onClose: Gr,
          title: Wn().title
        }, Wn().component), H && /* @__PURE__ */ e.a.createElement(Ko, {
          viewSource: H,
          setViewSource: B,
          sourceCode: g,
          setSourceCode: w,
          handleSaveSource: Fn
        }), D && /* @__PURE__ */ e.a.createElement(Vo, {
          openPreview: D,
          setOpenPreview: Qe,
          previewContent: Hl
        }), /* @__PURE__ */ e.a.createElement("div", {
          id: "modal-root"
        }), /* @__PURE__ */ e.a.createElement("div", {
          id: "full-screen-overlay"
        }));
      }
    }
    /******/
  ]);
})(Io);
var As = Io.exports;
const Ss = /* @__PURE__ */ vo(As), Is = ({
  value: p = "",
  name: u = "",
  onChange: n,
  label: i = "",
  required: o = !1,
  placeholder: e = "",
  parentClass: m = "col-span-12",
  height: l = 300,
  disabled: R = !1,
  errorMessage: A = ""
}) => {
  const I = (M) => {
  };
  return /* @__PURE__ */ z(
    "div",
    {
      className: te(Z.field.wrapper, m),
      id: `field-${u}`,
      children: [
        i && /* @__PURE__ */ s(Pt, { label: i, required: o }),
        /* @__PURE__ */ s(
          Ss,
          {
            value: p,
            onChange: (M) => n == null ? void 0 : n(M || ""),
            getEditorRef: I,
            placeholder: e,
            mainProps: {
              className: `${R ? "pointer-events-none opacity-70" : ""}`,
              style: { minHeight: `${l}px` }
            }
          }
        ),
        A && /* @__PURE__ */ s(
          "span",
          {
            className: te(
              Z.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: A
          }
        )
      ]
    }
  );
}, Ms = ({
  name: p = "",
  label: u = "",
  options: n = [],
  value: i = null,
  onChange: o,
  disabled: e = !1,
  required: m = !1,
  parentClass: l = "col-span-12",
  className: R = "",
  errorMessage: A = "",
  multiSelect: I = !1
}) => {
  const M = Array.isArray(n) && n.length > 0, E = (G) => M ? I ? Array.isArray(i) && i.includes(G) : i === G : !!i, j = (G) => {
    o == null || o(G.target.checked, p);
  }, Y = (G, ae) => {
    if (o)
      if (!I)
        o(ae ? G : "", p);
      else {
        const P = Array.isArray(i) ? [...i] : [];
        if (ae)
          P.includes(G) || P.push(G);
        else {
          const U = P.indexOf(G);
          U > -1 && P.splice(U, 1);
        }
        o(P, p);
      }
  };
  return Xe(() => {
    let G;
    M ? I ? G = Array.isArray(i) ? i : [] : G = i || "" : G = !!i, setTimeout(() => {
      o == null || o(G, p);
    }, 100);
  }, []), M ? /* @__PURE__ */ s(Ye, { children: /* @__PURE__ */ z("div", { className: te(Z.field.wrapper, l), children: [
    /* @__PURE__ */ s(Pt, { label: u, required: m }),
    /* @__PURE__ */ s("div", { className: "flex flex-col space-y-2", children: n.map((G, ae) => /* @__PURE__ */ z("div", { className: "flex items-center", children: [
      /* @__PURE__ */ s(
        "input",
        {
          type: "checkbox",
          name: p,
          id: `field-${p}`,
          value: G.value,
          checked: E(G.value),
          disabled: e || !!G.disabled,
          required: m && ae === 0,
          onChange: (P) => Y(G.value, P.target.checked),
          className: te(
            Z.field.input,
            "h-4 w-4 cursor-pointer text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400",
            R
          )
        },
        p
      ),
      G.label && /* @__PURE__ */ s(
        "label",
        {
          htmlFor: p,
          className: "ml-2 text-sm text-gray-700 dark:text-gray-200 select-none",
          children: G.label
        }
      )
    ] }, G.value || G.label)) }),
    A && /* @__PURE__ */ s(
      "span",
      {
        className: te(
          Z.field.error,
          "text-red-500 text-xs mt-1"
        ),
        children: A
      }
    )
  ] }) }) : /* @__PURE__ */ z(
    "div",
    {
      className: te(
        Z.field.wrapper,
        "flex items-center",
        l
      ),
      children: [
        /* @__PURE__ */ s(
          "input",
          {
            type: "checkbox",
            name: p,
            checked: E(),
            disabled: e,
            required: m,
            onChange: j,
            className: te(
              Z.field.input,
              "h-4 w-4 text-blue-600 cursor-pointer border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400",
              R
            )
          }
        ),
        u && /* @__PURE__ */ s(
          "label",
          {
            htmlFor: p,
            className: "ml-2 text-sm text-gray-700 dark:text-gray-200 select-none",
            children: u
          }
        )
      ]
    }
  );
}, io = Qt, Ns = ({
  label: p = "",
  value: u = null,
  onChange: n,
  required: i = !1,
  accept: o = "audio/*",
  id: e,
  dragDrop: m = !1,
  name: l = "",
  parentClass: R = "",
  errorMessage: A = "",
  maxSize: I = 0
}) => {
  const [M, E] = pe(
    null
  ), [j, Y] = pe(!1), G = Mt(null), ae = I * 1024 * 1024;
  Xe(() => {
    if (!u) {
      P(), E(null);
      return;
    }
    if (u instanceof File) {
      const q = URL.createObjectURL(u);
      return E({ file: u, preview: q }), () => {
        URL.revokeObjectURL(q);
      };
    } else typeof u == "string" ? E({ preview: u }) : u != null && u.preview && E(u);
  }, [u]);
  const P = () => {
    M != null && M.preview && M.preview.startsWith("blob:") && URL.revokeObjectURL(M.preview);
  }, U = (q) => {
    if (!q || q.length === 0)
      return;
    const we = q[0];
    if (ae && we.size > ae) {
      Cr(
        `Audio is too large. Maximum allowed size is ${I} MB`,
        { variant: "warning" }
      );
      return;
    }
    const he = URL.createObjectURL(we);
    P(), E({ file: we, preview: he }), n == null || n(we);
  }, X = (q) => {
    q && q.stopPropagation(), P(), E(null), n == null || n(null), G.current && (G.current.value = "");
  }, se = (q) => {
    m && (q.preventDefault(), Y(!0));
  }, ie = (q) => {
    m && (q.preventDefault(), Y(!1));
  }, le = (q) => {
    var we, he, Ee, Fe;
    m && (q.preventDefault(), Y(!1), (Fe = (Ee = (he = (we = q.dataTransfer) == null ? void 0 : we.files) == null ? void 0 : he[0]) == null ? void 0 : Ee.type) != null && Fe.includes("audio/") && U(q.dataTransfer.files));
  }, ye = () => {
    var q;
    (q = G.current) == null || q.click();
  };
  return /* @__PURE__ */ z(
    "div",
    {
      className: te(
        Z.mediaPicker.audio,
        Z.field.wrapper,
        R || "col-span-12"
      ),
      children: [
        /* @__PURE__ */ s(Pt, { label: p, required: i }),
        /* @__PURE__ */ z(
          "div",
          {
            className: te(
              Z.mediaPicker.dropzone,
              "relative rounded-lg p-2 transition-all",
              j ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800",
              A ? "border-red-500" : ""
            ),
            onDragOver: se,
            onDragLeave: ie,
            onDrop: le,
            id: `field-${l}`,
            children: [
              /* @__PURE__ */ s(
                "input",
                {
                  ref: G,
                  id: e,
                  type: "file",
                  accept: o,
                  onChange: (q) => U(q.target.files),
                  required: i && !M,
                  className: "absolute opacity-0 right-[50%] top-[80%] -translate-y-1/2 pointer-events-none h-[10px]"
                }
              ),
              /* @__PURE__ */ s(
                "div",
                {
                  className: `flex items-center space-x-4 transition-all ${j ? "opacity-50" : ""}`,
                  children: M ? /* @__PURE__ */ z("div", { className: "flex items-center space-x-4", children: [
                    /* @__PURE__ */ z("div", { className: "relative w-full", children: [
                      !i && /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          onClick: X,
                          className: "absolute top-0 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800",
                          "aria-label": "Remove audio",
                          children: /* @__PURE__ */ s(Ut, { icon: "mdi:close", className: "w-3 h-3" })
                        }
                      ),
                      /* @__PURE__ */ s(
                        "audio",
                        {
                          src: M.preview,
                          controls: !0,
                          controlsList: "nodownload"
                        },
                        M.preview
                      )
                    ] }),
                    /* @__PURE__ */ s(io, { type: "button", onClick: ye, children: /* @__PURE__ */ s("span", { children: "Change Audio File" }) })
                  ] }) : /* @__PURE__ */ z("div", { className: "flex items-center justify-center space-x-4", children: [
                    /* @__PURE__ */ s("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ s(Ut, { icon: "mdi:music", className: "text-gray-400 w-10 h-10" }) }),
                    /* @__PURE__ */ z("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ s(
                        io,
                        {
                          type: "button",
                          onClick: ye,
                          variant: "outlined",
                          children: /* @__PURE__ */ s("span", { children: "Choose Audio File" })
                        }
                      ),
                      m && /* @__PURE__ */ s("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop your audio file here" })
                    ] })
                  ] })
                }
              ),
              m && j && !M && /* @__PURE__ */ s("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-lg", children: /* @__PURE__ */ s("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg", children: "Drop audio here" }) })
            ]
          }
        ),
        A && /* @__PURE__ */ s(
          "span",
          {
            className: te(
              Z.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: A
          }
        )
      ]
    },
    l
  );
}, lo = Qt, Rs = (p) => {
  if (!p)
    return null;
  if (p instanceof File) {
    const u = URL.createObjectURL(p);
    return {
      id: `${Date.now()}-${Math.random()}`,
      file: p,
      preview: u,
      createdBlobUrl: u
    };
  }
  if (typeof p == "string")
    return {
      id: `${Date.now()}-${Math.random()}`,
      file: null,
      preview: p
    };
  if (typeof p == "object") {
    if (p.preview)
      return {
        id: `${Date.now()}-${Math.random()}`,
        file: p.file || null,
        preview: p.preview
      };
    if (p.file) {
      const u = URL.createObjectURL(p.file);
      return {
        id: `${Date.now()}-${Math.random()}`,
        file: p.file,
        preview: u,
        createdBlobUrl: u
      };
    }
  }
  return null;
}, Ls = ({
  label: p = "",
  value: u = [],
  onChange: n,
  required: i = !1,
  accept: o = "image/*",
  aspect: e = "1",
  id: m,
  dragDrop: l = !1,
  cropImage: R = !1,
  name: A = "",
  parentClass: I = "",
  maxImages: M,
  errorMessage: E = ""
}) => {
  const [j, Y] = pe([]), [G, ae] = pe(!1), [P, U] = pe(!1), [X, se] = pe(""), [ie, le] = pe("image/jpeg"), [ye, q] = pe("cropped-image"), [we, he] = pe(null), Ee = Mt(null), Fe = Mt(null), Ue = Mt(""), pt = Mt([]);
  Xe(() => {
    pt.current = j;
  }, [j]), Xe(() => () => {
    pt.current.forEach((fe) => {
      fe.createdBlobUrl && URL.revokeObjectURL(fe.createdBlobUrl);
    }), Ue.current && URL.revokeObjectURL(Ue.current);
  }, []), Xe(() => {
    if (!Array.isArray(u)) {
      Y([]);
      return;
    }
    const fe = u.map((Le) => Rs(Le)).filter(Boolean);
    Y((Le) => (Le.forEach((rt) => {
      rt.createdBlobUrl && URL.revokeObjectURL(rt.createdBlobUrl);
    }), fe));
  }, [u]);
  const ct = typeof M == "number" && M > 0 ? Math.max(M - j.length, 0) : Number.POSITIVE_INFINITY, xe = () => {
    U(!1), Ue.current && (URL.revokeObjectURL(Ue.current), Ue.current = ""), se(""), he(null), Ee.current && (Ee.current.value = "");
  }, _e = (fe) => {
    var Le, rt;
    se(fe.preview), le(((Le = fe.file) == null ? void 0 : Le.type) || "image/jpeg"), q(
      (((rt = fe.file) == null ? void 0 : rt.name) || "cropped-image").replace(/\.[^/.]+$/, "")
    ), he(fe.id), U(!0);
  }, Me = (fe) => {
    const Le = URL.createObjectURL(fe);
    Y((rt) => {
      const it = rt.map((Ve) => Ve.id !== we ? Ve : (Ve.createdBlobUrl && URL.revokeObjectURL(Ve.createdBlobUrl), {
        ...Ve,
        file: fe,
        preview: Le,
        createdBlobUrl: Le
      }));
      return n == null || n(
        it.map((Ve) => Ve.file ? Ve.file : Ve.preview)
      ), it;
    }), xe();
  }, Te = (fe) => {
    if (!fe || fe.length === 0 || ct === 0)
      return;
    const Le = Array.from(fe).filter((it) => it.type.includes("image/")).slice(0, ct);
    if (Le.length === 0)
      return;
    const rt = Le.map((it) => {
      const Ve = URL.createObjectURL(it);
      return {
        id: `${Date.now()}-${Math.random()}`,
        file: it,
        preview: Ve,
        createdBlobUrl: Ve
      };
    });
    Y((it) => {
      const Ve = [...it, ...rt];
      return n == null || n(
        Ve.map((ut) => ut.file ? ut.file : ut.preview)
      ), Ve;
    }), Ee.current && (Ee.current.value = "");
  }, Ce = (fe) => {
    Y((Le) => {
      const rt = Le.find((Ve) => Ve.id === fe);
      rt != null && rt.createdBlobUrl && URL.revokeObjectURL(rt.createdBlobUrl);
      const it = Le.filter((Ve) => Ve.id !== fe);
      return n == null || n(
        it.map((Ve) => Ve.file ? Ve.file : Ve.preview)
      ), it;
    }), Ee.current && (Ee.current.value = "");
  }, Ae = (fe) => {
    var Le;
    he(fe), (Le = Fe.current) == null || Le.click();
  }, yt = (fe) => {
    if (!fe || fe.length === 0 || !we)
      return;
    const Le = Array.from(fe).find((it) => it.type.includes("image/"));
    if (!Le)
      return;
    const rt = URL.createObjectURL(Le);
    Y((it) => {
      const Ve = it.map((ut) => ut.id !== we ? ut : (ut.createdBlobUrl && URL.revokeObjectURL(ut.createdBlobUrl), {
        ...ut,
        file: Le,
        preview: rt,
        createdBlobUrl: rt
      }));
      return n == null || n(
        Ve.map((ut) => ut.file ? ut.file : ut.preview)
      ), Ve;
    }), he(null), Fe.current && (Fe.current.value = "");
  }, Ke = (fe) => {
    l && (fe.preventDefault(), ae(!0));
  }, je = (fe) => {
    l && (fe.preventDefault(), ae(!1));
  }, jt = (fe) => {
    var Le;
    l && (fe.preventDefault(), ae(!1), Te(((Le = fe.dataTransfer) == null ? void 0 : Le.files) || null));
  }, ue = () => {
    var fe;
    (fe = Ee.current) == null || fe.click();
  }, He = typeof M == "number" && M > 0 ? j.length < M : !0;
  return /* @__PURE__ */ z(Ye, { children: [
    /* @__PURE__ */ z(
      "div",
      {
        className: te(
          Z.mediaPicker.multiImage,
          Z.field.wrapper,
          I || "col-span-12"
        ),
        children: [
          /* @__PURE__ */ s(Pt, { label: p, required: i }),
          /* @__PURE__ */ z(
            "div",
            {
              className: te(
                Z.mediaPicker.dropzone,
                "relative rounded-md p-2 transition-all",
                G ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800",
                E ? "border-red-500" : ""
              ),
              onDragOver: Ke,
              onDragLeave: je,
              onDrop: jt,
              id: `field-${A}`,
              children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    ref: Ee,
                    id: m,
                    type: "file",
                    accept: o,
                    multiple: !0,
                    onChange: (fe) => Te(fe.target.files),
                    required: i && j.length === 0,
                    className: "absolute opacity-0 pointer-events-none h-1 w-1"
                  }
                ),
                /* @__PURE__ */ s(
                  "input",
                  {
                    ref: Fe,
                    type: "file",
                    accept: o,
                    onChange: (fe) => yt(fe.target.files),
                    className: "absolute opacity-0 pointer-events-none h-1 w-1"
                  }
                ),
                j.length === 0 ? /* @__PURE__ */ z("div", { className: "flex items-center space-x-4", children: [
                  /* @__PURE__ */ s("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ s(
                    Ut,
                    {
                      icon: "ri:multi-image-fill",
                      className: "text-gray-400 w-10 h-10"
                    }
                  ) }),
                  /* @__PURE__ */ z("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ s(
                      lo,
                      {
                        type: "button",
                        onClick: ue,
                        variant: "outlined",
                        color: "default",
                        children: /* @__PURE__ */ s("span", { className: "text-sm font-medium", children: "Choose Images" })
                      }
                    ),
                    l && /* @__PURE__ */ s("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop your images here" })
                  ] })
                ] }) : /* @__PURE__ */ z(Ye, { children: [
                  /* @__PURE__ */ z("div", { className: "flex items-center justify-between gap-2 mb-3", children: [
                    /* @__PURE__ */ s(
                      lo,
                      {
                        type: "button",
                        onClick: ue,
                        disabled: !He,
                        variant: "outlined",
                        color: "default",
                        children: /* @__PURE__ */ s("span", { className: "text-sm font-medium", children: "Upload Images" })
                      }
                    ),
                    /* @__PURE__ */ s("span", { className: "text-xs text-gray-500 dark:text-gray-400", children: M ? `${j.length}/${M}` : `${j.length} selected` })
                  ] }),
                  /* @__PURE__ */ s("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3", children: j.map((fe) => /* @__PURE__ */ z(
                    "div",
                    {
                      className: "relative group rounded-md overflow-hidden border border-gray-200 dark:border-gray-700",
                      children: [
                        /* @__PURE__ */ s(
                          "img",
                          {
                            src: fe.preview,
                            alt: "preview",
                            className: "w-full h-28 object-cover"
                          }
                        ),
                        /* @__PURE__ */ z("div", { className: "absolute top-2 right-2 flex items-center gap-1.5 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity", children: [
                          /* @__PURE__ */ s(
                            "button",
                            {
                              type: "button",
                              onClick: () => Ae(fe.id),
                              className: "w-7 h-7 rounded-full bg-white/90 text-gray-800 hover:bg-white flex items-center justify-center shadow",
                              "aria-label": "Replace image",
                              children: /* @__PURE__ */ s(Ut, { icon: "solar:refresh-bold", className: "w-4 h-4" })
                            }
                          ),
                          R && /* @__PURE__ */ s(
                            "button",
                            {
                              type: "button",
                              onClick: () => _e(fe),
                              className: "w-7 h-7 rounded-full bg-white/90 text-gray-800 hover:bg-white flex items-center justify-center shadow",
                              "aria-label": "Crop image",
                              children: /* @__PURE__ */ s(Ut, { icon: "solar:crop-bold", className: "w-4 h-4" })
                            }
                          ),
                          /* @__PURE__ */ s(
                            "button",
                            {
                              type: "button",
                              onClick: () => Ce(fe.id),
                              className: "w-7 h-7 rounded-full bg-red-500/95 text-white hover:bg-red-600 flex items-center justify-center shadow",
                              "aria-label": "Delete image",
                              children: /* @__PURE__ */ s(
                                Ut,
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
                    fe.id
                  )) })
                ] }),
                l && G && j.length === 0 && /* @__PURE__ */ s("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-lg", children: /* @__PURE__ */ s("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg", children: "Drop images here" }) })
              ]
            }
          ),
          E && /* @__PURE__ */ s(
            "span",
            {
              className: te(
                Z.field.error,
                "text-red-500 text-xs mt-1"
              ),
              children: E
            }
          )
        ]
      },
      A
    ),
    /* @__PURE__ */ s(
      Ao,
      {
        isOpen: P,
        imageSrc: X,
        fileType: ie,
        fileName: ye,
        onClose: xe,
        onApply: Me,
        aspect: Number(e)
      }
    )
  ] });
}, $t = ({
  src: p,
  alt: u = "preview",
  isOpen: n,
  setIsOpen: i
}) => {
  const o = () => i(!1);
  return Xe(() => {
    const e = (m) => {
      m.key === "Escape" && o();
    };
    return n && (document.body.style.overflow = "hidden", document.addEventListener("keydown", e)), () => {
      document.body.style.overflow = "", document.removeEventListener("keydown", e);
    };
  }, [n]), /* @__PURE__ */ s(Ye, { children: /* @__PURE__ */ z(
    "div",
    {
      className: te(
        Z.imagePreview.root,
        "fixed inset-0 z-50 flex items-center justify-center bg-black/70 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      ),
      onClick: o,
      children: [
        /* @__PURE__ */ s(
          "button",
          {
            onClick: o,
            className: `absolute top-4 right-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200\r
                     hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-2 shadow-lg transition`,
            children: /* @__PURE__ */ s(ma, { size: 20 })
          }
        ),
        /* @__PURE__ */ s(
          "div",
          {
            className: te(
              Z.imagePreview.container,
              "max-w-5xl w-full px-4 transform transition-all duration-200 scale-95 animate-in zoom-in-95"
            ),
            onClick: (e) => e.stopPropagation(),
            children: /* @__PURE__ */ s(
              "img",
              {
                src: p,
                alt: u,
                className: te(
                  Z.imagePreview.image,
                  "w-full max-h-[90vh] object-contain rounded-xl"
                )
              }
            )
          }
        )
      ]
    }
  ) });
}, Mo = ({
  col: p,
  data: u,
  uiVariant: n = "default",
  styleConfig: i = {}
}) => {
  const o = u[p.titleKey], e = u[p.subtitleKey], m = u[p.imageKey], l = p.fallback_icon, [R, A] = pe(null), [I, M] = pe(!1), E = (Y) => {
    let G = Y;
    Y && Y.src instanceof File && (G = { ...Y, src: URL.createObjectURL(Y.src) }), A(G), M(!0);
  }, j = (Y) => {
    const ae = {
      sm: { img: "w-8 h-8", wrap: "w-8 h-8", icon: "w-4 h-4" },
      md: { img: "w-12 h-12", wrap: "w-12 h-12", icon: "w-6 h-6" },
      lg: { img: "w-16 h-16", wrap: "w-16 h-16", icon: "w-8 h-8" }
    }[Y];
    return m ? /* @__PURE__ */ s(
      "img",
      {
        src: m instanceof File ? URL.createObjectURL(m) : m,
        alt: o,
        onClick: () => E({ src: m, alt: o }),
        className: `${ae.img} cursor-pointer rounded-full object-cover border-2 border-white dark:border-gray-700 shadow flex-shrink-0`
      }
    ) : l ? l instanceof Function ? l(u) : l : /* @__PURE__ */ s(
      "div",
      {
        className: `${ae.wrap} flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-600 flex-shrink-0`,
        children: /* @__PURE__ */ s(Ua, { className: `${ae.icon} text-gray-400` })
      }
    );
  };
  return n === "card" ? /* @__PURE__ */ z(Ye, { children: [
    I && R && /* @__PURE__ */ s(
      $t,
      {
        src: R.src,
        alt: R.alt,
        isOpen: I,
        setIsOpen: M
      }
    ),
    /* @__PURE__ */ z(
      "div",
      {
        className: te(
          Z.details.row,
          "col-span-12 relative overflow-hidden rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent dark:from-primary/20 dark:via-primary/10 border border-primary/20 dark:border-primary/30 p-5 flex items-center gap-4",
          i.rowClass || "",
          i.groupClass || "",
          p.blockClass || ""
        ),
        children: [
          /* @__PURE__ */ s("div", { className: "pointer-events-none absolute -right-6 -top-6 w-32 h-32 rounded-full bg-primary/8 dark:bg-primary/12" }),
          /* @__PURE__ */ s("div", { className: "pointer-events-none absolute -right-2 -bottom-4 w-20 h-20 rounded-full bg-primary/5" }),
          j("lg"),
          /* @__PURE__ */ z("div", { className: "min-w-0 z-10", children: [
            /* @__PURE__ */ s(
              "h3",
              {
                className: `text-lg font-bold text-gray-900 dark:text-white truncate ${i.valueClass || ""}`,
                children: o
              }
            ),
            /* @__PURE__ */ s(
              "p",
              {
                className: `text-sm text-primary/70 dark:text-primary/60 font-medium truncate ${i.labelClass || ""}`,
                children: e
              }
            )
          ] })
        ]
      }
    )
  ] }) : n === "split" ? /* @__PURE__ */ z(Ye, { children: [
    I && R && /* @__PURE__ */ s(
      $t,
      {
        src: R.src,
        alt: R.alt,
        isOpen: I,
        setIsOpen: M
      }
    ),
    /* @__PURE__ */ z(
      "div",
      {
        className: te(
          Z.details.row,
          "flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-primary/8 via-primary/4 to-transparent dark:from-primary/15 dark:via-primary/8",
          i.rowClass || "",
          i.groupClass || "",
          p.blockClass || ""
        ),
        children: [
          j("md"),
          /* @__PURE__ */ z("div", { className: "min-w-0", children: [
            /* @__PURE__ */ s(
              "h3",
              {
                className: `text-base font-bold text-gray-900 dark:text-white truncate ${i.valueClass || ""}`,
                children: o
              }
            ),
            /* @__PURE__ */ s(
              "p",
              {
                className: `text-xs font-semibold text-primary/70 dark:text-primary/60 truncate ${i.labelClass || ""}`,
                children: e
              }
            )
          ] })
        ]
      }
    )
  ] }) : /* @__PURE__ */ z(Ye, { children: [
    I && R && /* @__PURE__ */ s(
      $t,
      {
        src: R.src,
        alt: R.alt,
        isOpen: I,
        setIsOpen: M
      }
    ),
    /* @__PURE__ */ z(
      "div",
      {
        className: te(
          Z.details.row,
          "col-span-12 flex items-center space-x-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-900",
          i.rowClass || "",
          i.groupClass || "",
          p.blockClass || ""
        ),
        children: [
          j("lg"),
          /* @__PURE__ */ z("div", { children: [
            /* @__PURE__ */ s(
              "h3",
              {
                className: `text-xl font-semibold text-gray-900 dark:text-white ${i.valueClass || ""}`,
                children: o
              }
            ),
            /* @__PURE__ */ s(
              "p",
              {
                className: `text-sm text-gray-500 dark:text-gray-400 ${i.labelClass || ""}`,
                children: e
              }
            )
          ] })
        ]
      }
    )
  ] });
}, No = ({
  col: p,
  data: u,
  uiVariant: n = "default",
  styleConfig: i = {}
}) => {
  const o = u[p.titleKey], e = u[p.subtitleKey], m = u[p.imageKey], l = p.label, R = p == null ? void 0 : p.icon, A = p.fallback_icon, [I, M] = pe(null), [E, j] = pe(!1), Y = (ae) => {
    let P = ae;
    ae && ae.src instanceof File && (P = { ...ae, src: URL.createObjectURL(ae.src) }), M(P), j(!0);
  }, G = () => m ? /* @__PURE__ */ s(
    "img",
    {
      src: m instanceof File ? URL.createObjectURL(m) : m,
      alt: o,
      onClick: () => Y({ src: m, alt: o }),
      className: "w-8 h-8 cursor-pointer rounded-full object-cover border-2 border-gray-200 dark:border-gray-700 flex-shrink-0"
    }
  ) : A ? A instanceof Function ? A(u) : A : /* @__PURE__ */ s("div", { className: "w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 flex-shrink-0", children: /* @__PURE__ */ s(Ua, { className: "w-5 h-5 text-gray-400" }) });
  return n === "card" ? /* @__PURE__ */ z(Ye, { children: [
    E && I && /* @__PURE__ */ s(
      $t,
      {
        src: I.src,
        alt: I.alt,
        isOpen: E,
        setIsOpen: j
      }
    ),
    /* @__PURE__ */ z(
      "div",
      {
        className: te(
          Z.details.row,
          p.blockClass || "col-span-6",
          "group bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 p-4 flex flex-col gap-2.5",
          i.rowClass || "",
          i.cardGroupClass || ""
        ),
        children: [
          R && /* @__PURE__ */ s(
            "div",
            {
              className: `w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 [&>svg]:w-4 [&>svg]:h-4 ${i.iconClass || ""}`,
              children: R
            }
          ),
          /* @__PURE__ */ s(
            "p",
            {
              className: `text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 leading-none ${i.labelClass || ""}`,
              children: l
            }
          ),
          /* @__PURE__ */ z("div", { className: "flex items-center gap-2 mt-auto", children: [
            G(),
            /* @__PURE__ */ z("div", { className: "min-w-0", children: [
              /* @__PURE__ */ s(
                "p",
                {
                  className: `text-sm font-semibold text-gray-800 dark:text-gray-100 truncate ${i.valueClass || ""}`,
                  children: o
                }
              ),
              e && /* @__PURE__ */ s("p", { className: "text-xs text-gray-400 dark:text-gray-500 truncate", children: e })
            ] })
          ] })
        ]
      }
    )
  ] }) : n === "split" ? /* @__PURE__ */ z(Ye, { children: [
    E && I && /* @__PURE__ */ s(
      $t,
      {
        src: I.src,
        alt: I.alt,
        isOpen: E,
        setIsOpen: j
      }
    ),
    /* @__PURE__ */ z(
      "div",
      {
        className: te(
          Z.details.row,
          "flex items-stretch min-h-[52px]",
          i.rowClass || "",
          i.cardGroupClass || "",
          p.blockClass || ""
        ),
        children: [
          /* @__PURE__ */ z("div", { className: "w-[42%] flex-shrink-0 flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-gray-800/80 border-r border-gray-200 dark:border-gray-700", children: [
            R && /* @__PURE__ */ s(
              "span",
              {
                className: `text-primary/60 dark:text-primary/50 flex-shrink-0 [&>svg]:w-3.5 [&>svg]:h-3.5 ${i.iconClass || ""}`,
                children: R
              }
            ),
            /* @__PURE__ */ s(
              "p",
              {
                className: `text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 leading-tight ${i.labelClass || ""}`,
                children: l
              }
            )
          ] }),
          /* @__PURE__ */ z("div", { className: "flex-1 flex items-center gap-2.5 px-4 py-3 bg-white dark:bg-gray-900", children: [
            G(),
            /* @__PURE__ */ z("div", { className: "min-w-0", children: [
              /* @__PURE__ */ s(
                "p",
                {
                  className: `text-sm text-gray-800 dark:text-gray-100 break-words ${i.valueClass || ""}`,
                  children: o
                }
              ),
              e && /* @__PURE__ */ s("p", { className: "text-xs text-gray-400 dark:text-gray-500 truncate", children: e })
            ] })
          ] })
        ]
      }
    )
  ] }) : /* @__PURE__ */ z(Ye, { children: [
    E && I && /* @__PURE__ */ s(
      $t,
      {
        src: I.src,
        alt: I.alt,
        isOpen: E,
        setIsOpen: j
      }
    ),
    /* @__PURE__ */ z(
      "div",
      {
        className: te(
          Z.details.row,
          "col-span-12 flex items-center space-x-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-900",
          i.rowClass || "",
          i.cardGroupClass || "",
          p.blockClass || ""
        ),
        children: [
          R && /* @__PURE__ */ s("div", { className: `flex-shrink-0 ${i.iconClass || ""}`, children: R }),
          /* @__PURE__ */ z("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ s(
              "p",
              {
                className: `text-sm font-medium text-gray-500 dark:text-gray-400 ${i.labelClass || ""}`,
                children: l
              }
            ),
            /* @__PURE__ */ z("div", { className: "flex items-center mt-1", children: [
              G(),
              /* @__PURE__ */ z("div", { className: "ml-2", children: [
                /* @__PURE__ */ s(
                  "p",
                  {
                    className: `mb-0 text-sm text-gray-900 dark:text-white break-words ${i.valueClass || ""}`,
                    children: o
                  }
                ),
                /* @__PURE__ */ s(
                  "p",
                  {
                    className: `text-xs text-gray-500 dark:text-gray-400 ${i.labelClass || ""}`,
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
}, co = {
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
}, so = {
  contained: "bg",
  outline: "border !bg-transparent",
  soft: "bg opacity-90"
}, Ro = ({
  label: p,
  variant: u = "contained",
  color: n = "green",
  className: i = ""
}) => {
  const o = co[n] || co.green, e = so[u] || so.contained, m = u === "outline" ? o.border : o.bg;
  return /* @__PURE__ */ s(
    "span",
    {
      className: te(
        Z.chip.root,
        "inline-flex justify-center items-center rounded-sm text-xs font-semibold px-3 py-1 min-w-[78px]",
        m,
        e,
        i
      ),
      children: p
    }
  );
}, Lo = ({
  col: p,
  data: u,
  uiVariant: n = "default",
  styleConfig: i = {}
}) => {
  var P;
  const [o, e] = pe(null), [m, l] = pe(!1), R = p == null ? void 0 : p.icon, A = p.label;
  let I = u[p.key];
  const M = p.type, E = p.variant || "outline";
  let j = p.defaultColor;
  if (M === "chip" && ((P = p.chipOptions) == null ? void 0 : P.length) > 0) {
    const U = p == null ? void 0 : p.chipOptions.find((X) => X.value == I);
    U && (I = U.label, j = U.color);
  }
  const Y = (U) => {
    if (!U) return "";
    if (typeof U == "string") return U;
    if (U instanceof File) return URL.createObjectURL(U);
    if (typeof U == "object") {
      if (typeof U.preview == "string") return U.preview;
      if (typeof U.src == "string") return U.src;
      if (U.src instanceof File) return URL.createObjectURL(U.src);
      if (U.file instanceof File) return URL.createObjectURL(U.file);
    }
    return "";
  }, G = (U, X) => {
    e({ src: U, alt: X }), l(!0);
  }, ae = (U = "text-sm text-gray-900 dark:text-white break-words") => {
    if (typeof p.render == "function") {
      const X = p.render(u, I);
      return /* @__PURE__ */ s("div", { className: i.valueClass || "", children: X });
    }
    if (M === "chip")
      return /* @__PURE__ */ s(Ro, { label: I, variant: E, color: j, className: "mt-1" });
    if (M === "tinyEditor")
      return /* @__PURE__ */ s(
        "p",
        {
          className: `${U} ${i.valueClass || ""}`,
          dangerouslySetInnerHTML: { __html: I }
        }
      );
    if (M === "video")
      return I ? /* @__PURE__ */ s(
        "video",
        {
          controls: !0,
          src: I instanceof File ? URL.createObjectURL(I) : I,
          onClick: (X) => X.stopPropagation(),
          className: "shadow-sm mt-1 w-full max-w-xs max-h-[250px] rounded-md "
        },
        I instanceof File ? URL.createObjectURL(I) : I
      ) : /* @__PURE__ */ s("p", { className: "text-sm text-gray-400", children: "N/A" });
    if (M === "audio")
      return I ? /* @__PURE__ */ s(
        "audio",
        {
          controls: !0,
          src: I instanceof File ? URL.createObjectURL(I) : I,
          onClick: (X) => X.stopPropagation(),
          className: "shadow-sm rounded-full mt-1 w-full max-w-xs"
        },
        I instanceof File ? URL.createObjectURL(I) : I
      ) : /* @__PURE__ */ s("p", { className: "text-sm text-gray-400", children: "N/A" });
    if (M === "image") {
      const X = Y(I);
      return X ? /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          onClick: () => G(X, A || "Image"),
          className: "mt-1 w-16 h-16 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700",
          children: /* @__PURE__ */ s(
            "img",
            {
              src: X,
              alt: A || "image",
              className: "w-full h-full object-cover"
            }
          )
        }
      ) : /* @__PURE__ */ s("p", { className: "text-sm text-gray-400", children: "N/A" });
    }
    return M === "multiImage" ? Array.isArray(I) && I.length > 0 ? /* @__PURE__ */ s(
      "div",
      {
        className: `mt-1 grid grid-cols-3 sm:grid-cols-4 gap-2 ${i.mediaGridClass || ""}`,
        children: I.map((X, se) => {
          const ie = Y(X);
          return ie ? /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              onClick: () => G(ie, `Gallery ${se + 1}`),
              className: "w-full h-16 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-colors",
              children: /* @__PURE__ */ s(
                "img",
                {
                  src: ie,
                  alt: `gallery-${se + 1}`,
                  className: "w-full h-full object-cover"
                }
              )
            },
            `${ie}-${se}`
          ) : null;
        })
      }
    ) : /* @__PURE__ */ s("p", { className: "text-sm text-gray-400", children: "N/A" }) : /* @__PURE__ */ s("p", { className: `${U} ${i.valueClass || ""}`, children: M === "date" ? /* @__PURE__ */ s("span", { children: Ra(I, p.format || "DD MMM YYYY") }) : /* @__PURE__ */ s("span", { children: I || "N/A" }) });
  };
  return n === "card" ? /* @__PURE__ */ z(Ye, { children: [
    /* @__PURE__ */ z(
      "div",
      {
        className: te(
          Z.details.row,
          p.blockClass || "col-span-6",
          "group bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 p-4 flex flex-col gap-2.5",
          i.rowClass || ""
        ),
        children: [
          R && /* @__PURE__ */ s(
            "div",
            {
              className: `w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 [&>svg]:w-4 [&>svg]:h-4 ${i.iconClass || ""}`,
              children: R
            }
          ),
          /* @__PURE__ */ s(
            "p",
            {
              className: `text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 leading-none ${i.labelClass || ""}`,
              children: A
            }
          ),
          /* @__PURE__ */ s("div", { className: "mt-auto", children: ae(
            "text-sm font-semibold text-gray-800 dark:text-gray-100 break-words leading-snug"
          ) })
        ]
      }
    ),
    m && o && /* @__PURE__ */ s(
      $t,
      {
        src: o.src,
        alt: o.alt,
        isOpen: m,
        setIsOpen: l
      }
    )
  ] }) : n === "split" ? /* @__PURE__ */ z(Ye, { children: [
    /* @__PURE__ */ z(
      "div",
      {
        className: te(
          Z.details.row,
          "flex items-stretch min-h-[52px]",
          i.rowClass || "",
          p.blockClass || ""
        ),
        children: [
          /* @__PURE__ */ z("div", { className: "w-[42%] flex-shrink-0 flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-gray-800/80 border-r border-gray-200 dark:border-gray-700", children: [
            R && /* @__PURE__ */ s(
              "span",
              {
                className: `text-primary/60 dark:text-primary/50 flex-shrink-0 [&>svg]:w-3.5 [&>svg]:h-3.5 ${i.iconClass || ""}`,
                children: R
              }
            ),
            /* @__PURE__ */ s(
              "p",
              {
                className: `text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 leading-tight ${i.labelClass || ""}`,
                children: A
              }
            )
          ] }),
          /* @__PURE__ */ s("div", { className: "flex-1 flex items-center px-4 py-3 bg-white dark:bg-gray-900", children: ae(
            "text-sm text-gray-800 dark:text-gray-100 break-words"
          ) })
        ]
      }
    ),
    m && o && /* @__PURE__ */ s(
      $t,
      {
        src: o.src,
        alt: o.alt,
        isOpen: m,
        setIsOpen: l
      }
    )
  ] }) : /* @__PURE__ */ z(Ye, { children: [
    /* @__PURE__ */ z(
      "div",
      {
        className: te(
          Z.details.row,
          "col-span-12 flex items-center space-x-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-900",
          i.rowClass || "",
          p.blockClass || ""
        ),
        children: [
          R && /* @__PURE__ */ s("div", { className: `flex-shrink-0 ${i.iconClass || ""}`, children: R }),
          /* @__PURE__ */ z("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ s(
              "p",
              {
                className: `text-sm font-medium text-gray-500 dark:text-gray-400 ${i.labelClass || ""}`,
                children: A
              }
            ),
            ae(
              "mt-1 text-sm text-gray-900 dark:text-white break-words"
            )
          ] })
        ]
      }
    ),
    m && o && /* @__PURE__ */ s(
      $t,
      {
        src: o.src,
        alt: o.alt,
        isOpen: m,
        setIsOpen: l
      }
    )
  ] });
}, Os = ({
  value: p = !0,
  onChange: u,
  text: n,
  options: i = [],
  label: o,
  required: e,
  name: m = "",
  disabled: l = !1,
  parentClass: R = "",
  errorMessage: A = ""
}) => {
  const I = i.length > 0 ? i : [
    { label: "Active", value: !0 },
    { label: "Inactive", value: !1 }
  ];
  return /* @__PURE__ */ s(Ye, { children: /* @__PURE__ */ z(
    "div",
    {
      className: te(
        Z.field.wrapper,
        R || "col-span-12"
      ),
      children: [
        /* @__PURE__ */ s(Pt, { label: o, required: e }),
        /* @__PURE__ */ z(
          "div",
          {
            className: `flex items-center justify-between h-10 gap-4 bg-gray-100 dark:bg-gray-700 px-3 rounded-md border border-gray-100 dark:border-gray-600
          ${A ? "border-red-500" : ""}`,
            children: [
              n && /* @__PURE__ */ s("p", { className: "text-xs text-gray-600 dark:text-gray-400 flex-shrink overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px]", children: n }),
              /* @__PURE__ */ s("div", { className: "flex items-center gap-6", children: I.map((M, E) => /* @__PURE__ */ z(
                "label",
                {
                  className: "flex items-center gap-2 cursor-pointer select-none",
                  children: [
                    /* @__PURE__ */ s(
                      "input",
                      {
                        type: "radio",
                        name: "switch-field",
                        required: e && E === 0,
                        value: String(M.value),
                        disabled: l,
                        id: `field-${m}`,
                        checked: p === M.value,
                        onChange: () => u == null ? void 0 : u(M.value),
                        className: te(
                          Z.field.input,
                          "w-4 h-4 border-gray-300 cursor-pointer"
                        )
                      }
                    ),
                    /* @__PURE__ */ s("span", { className: "text-sm text-gray-700 dark:text-white", children: M.label })
                  ]
                },
                E
              )) })
            ]
          }
        ),
        A && /* @__PURE__ */ s(
          "span",
          {
            className: te(
              Z.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: A
          }
        )
      ]
    },
    m
  ) });
}, uo = Qt, Ds = ({
  label: p = "",
  value: u = null,
  onChange: n,
  required: i = !1,
  accept: o = "video/*",
  id: e,
  dragDrop: m = !1,
  name: l = "",
  parentClass: R = "",
  maxSize: A = 0,
  errorMessage: I = ""
}) => {
  const [M, E] = pe(
    null
  ), [j, Y] = pe(!1), G = Mt(null), ae = A * 1024 * 1024;
  Xe(() => {
    if (!u) {
      P(), E(null);
      return;
    }
    if (u instanceof File) {
      const q = URL.createObjectURL(u);
      return E({ file: u, preview: q }), () => {
        URL.revokeObjectURL(q);
      };
    } else typeof u == "string" ? E({ preview: u }) : u != null && u.preview && E(u);
  }, [u]);
  const P = () => {
    M != null && M.preview && M.preview.startsWith("blob:") && URL.revokeObjectURL(M.preview);
  }, U = (q) => {
    if (!q || q.length === 0) return;
    const we = q[0];
    if (ae && we.size > ae) {
      Cr(
        `File is too large. Maximum allowed size is ${A} MB`,
        {
          variant: "warning"
        }
      );
      return;
    }
    const he = URL.createObjectURL(we);
    P(), E({ file: we, preview: he }), n == null || n(we);
  }, X = (q) => {
    q && q.stopPropagation(), P(), E(null), n == null || n(null), G.current && (G.current.value = "");
  }, se = (q) => {
    m && (q.preventDefault(), Y(!0));
  }, ie = (q) => {
    m && (q.preventDefault(), Y(!1));
  }, le = (q) => {
    var we, he, Ee, Fe;
    m && (q.preventDefault(), Y(!1), (Fe = (Ee = (he = (we = q.dataTransfer) == null ? void 0 : we.files) == null ? void 0 : he[0]) == null ? void 0 : Ee.type) != null && Fe.includes("video/") && U(q.dataTransfer.files));
  }, ye = () => {
    var q;
    (q = G.current) == null || q.click();
  };
  return /* @__PURE__ */ z(
    "div",
    {
      className: te(
        Z.mediaPicker.video,
        Z.field.wrapper,
        R || "col-span-12"
      ),
      children: [
        /* @__PURE__ */ s(Pt, { label: p, required: i }),
        /* @__PURE__ */ z(
          "div",
          {
            className: te(
              Z.mediaPicker.dropzone,
              "relative rounded-lg p-2 transition-all",
              j ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800",
              I ? "border-red-500" : ""
            ),
            onDragOver: se,
            onDragLeave: ie,
            onDrop: le,
            id: `field-${l}`,
            children: [
              /* @__PURE__ */ s(
                "input",
                {
                  ref: G,
                  id: e,
                  type: "file",
                  accept: o,
                  onChange: (q) => U(q.target.files),
                  required: i && !M,
                  className: "absolute opacity-0 pointer-events-none h-[10px]"
                }
              ),
              /* @__PURE__ */ s(
                "div",
                {
                  className: `flex items-center space-x-4 transition-all ${j ? "opacity-50" : ""}`,
                  children: M ? /* @__PURE__ */ z("div", { className: "flex items-center space-x-4", children: [
                    /* @__PURE__ */ z("div", { className: "relative", children: [
                      !i && /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          onClick: X,
                          className: "absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow hover:bg-red-600 z-10",
                          children: /* @__PURE__ */ s(Ut, { icon: "mdi:close", className: "w-3 h-3" })
                        }
                      ),
                      /* @__PURE__ */ s(
                        "video",
                        {
                          src: M.preview,
                          controls: !0,
                          controlsList: "nodownload",
                          className: "w-[260px] h-[150px] rounded-md object-cover"
                        },
                        M.preview
                      )
                    ] }),
                    /* @__PURE__ */ s(uo, { type: "button", onClick: ye, children: "Change Video File" })
                  ] }) : /* @__PURE__ */ z("div", { className: "flex items-center justify-center space-x-4", children: [
                    /* @__PURE__ */ s("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ s(Ut, { icon: "mdi:video", className: "text-gray-400 w-10 h-10" }) }),
                    /* @__PURE__ */ z("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ s(
                        uo,
                        {
                          type: "button",
                          onClick: ye,
                          variant: "outlined",
                          children: "Choose Video File"
                        }
                      ),
                      m && /* @__PURE__ */ s("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop your video here" })
                    ] })
                  ] })
                }
              ),
              m && j && !M && /* @__PURE__ */ s("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-lg", children: /* @__PURE__ */ s("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg", children: "Drop video here" }) })
            ]
          }
        ),
        I && /* @__PURE__ */ s(
          "span",
          {
            className: te(
              Z.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: I
          }
        )
      ]
    },
    l
  );
}, Oo = ({
  field: p,
  formData: u,
  handleChange: n,
  errorMessage: i
}) => {
  const {
    key: o,
    label: e,
    type: m,
    options: l,
    placeholder: R,
    rows: A,
    inputClass: I,
    search: M,
    accept: E,
    text: j,
    required: Y = !1,
    minLength: G,
    dragDrop: ae,
    parentClass: P,
    countriesList: U,
    defaultCountry: X,
    multiple: se,
    dropdownMaxHeight: ie,
    editorKey: le,
    fontFamily: ye,
    disabled: q,
    negativeNumberAllow: we,
    defaultValue: he,
    renderCondition: Ee,
    pattern: Fe,
    renderType: Ue,
    cropImage: pt,
    aspectRatio: ct,
    dependencyKey: xe,
    mask: _e,
    maskApplyOnValue: Me,
    maxSize: Te,
    editorVariant: Ce
  } = p;
  let Ae = u == null ? void 0 : u[o];
  Ae == null && (Ae = "");
  const yt = R || (m === "select" ? `Select ${e}` : `Enter ${e}`), Ke = "w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm focus:outline-none focus:ring-1 focus:ring-blue-200 bg-white text-black dark:bg-gray-700 dark:text-white";
  if (Ee && typeof Ee == "function" && !Ee(u))
    return null;
  if (Ue && Ue == "details")
    switch (m) {
      case "group":
        return /* @__PURE__ */ s(Mo, { col: p, data: u });
      case "cardGroup":
        return /* @__PURE__ */ s(No, { col: p, data: u });
      default:
        return /* @__PURE__ */ s(Lo, { col: p, data: u });
    }
  switch (m) {
    case "select":
      return /* @__PURE__ */ s(
        Kc,
        {
          options: l || [],
          value: Ae,
          formData: u,
          dependencyKey: xe,
          onChange: (je) => n(o, je),
          placeholder: yt,
          className: I || "",
          search: M,
          required: Y,
          defaultValue: he,
          label: e || "",
          name: o,
          countriesList: U,
          disabled: q,
          parentClass: P || "",
          multiple: se,
          dropdownMaxHeight: ie,
          errorMessage: i
        }
      );
    case "checkbox":
      return /* @__PURE__ */ s(Ye, { children: /* @__PURE__ */ s(
        Ms,
        {
          name: o,
          label: e || "",
          options: l || [],
          value: Ae,
          onChange: (je) => n(o, je),
          required: Y,
          parentClass: P || "",
          className: I || "",
          multiSelect: se,
          disabled: q,
          errorMessage: i
        }
      ) });
    case "radio":
      return /* @__PURE__ */ s(
        Os,
        {
          value: Ae,
          onChange: (je) => n(o, je),
          text: j,
          options: l || [],
          label: e || "",
          required: Y,
          name: o,
          disabled: q,
          parentClass: P || "",
          errorMessage: i
        }
      );
    case "switch":
      return /* @__PURE__ */ s(
        fo,
        {
          value: !!Ae,
          onChange: (je) => n(o, je),
          label: e || "",
          required: Y,
          name: o,
          disabled: q,
          className: "",
          parentClass: P || "",
          errorMessage: i
        }
      );
    case "phone":
      return /* @__PURE__ */ s(
        Vc,
        {
          value: Ae,
          onChange: (je) => n(o, je),
          countriesList: U,
          defaultCountry: X,
          required: Y,
          placeholder: yt,
          search: M,
          label: e || "",
          name: o,
          disabled: q,
          errorMessage: i,
          parentClass: P || ""
        }
      );
    case "textarea":
      return /* @__PURE__ */ s(
        go,
        {
          value: Ae,
          onChange: (je) => n(o, je.target.value),
          placeholder: yt,
          rows: A || 3,
          className: `${Ke} ${I || ""}`,
          required: Y,
          name: o,
          label: e || "",
          disabled: q,
          parentClass: P || "",
          errorMessage: i
        }
      );
    case "image":
    case "multiImage":
      return se || m === "multiImage" ? /* @__PURE__ */ s(
        Ls,
        {
          value: Array.isArray(Ae) ? Ae : [],
          onChange: (je) => n(o, je),
          required: Y,
          accept: E || "image/*",
          aspect: ct,
          id: `file-${o}`,
          dragDrop: ae,
          cropImage: pt,
          label: e || "",
          name: o,
          parentClass: P || "",
          maxImages: p.maxImages,
          errorMessage: i
        }
      ) : /* @__PURE__ */ s(
        Es,
        {
          value: Ae,
          onChange: (je) => n(o, je),
          required: Y,
          accept: E || "image/*",
          aspect: ct,
          id: `file-${o}`,
          dragDrop: ae,
          cropImage: pt,
          label: e || "",
          name: o,
          parentClass: P || "",
          errorMessage: i
        }
      );
    case "audio":
      return /* @__PURE__ */ s(
        Ns,
        {
          value: Ae,
          onChange: (je) => n(o, je),
          required: Y,
          accept: E || "audio/*",
          id: `file-${o}`,
          dragDrop: ae,
          label: e || "",
          name: o,
          parentClass: P || "",
          maxSize: Te,
          errorMessage: i
        }
      );
    case "video":
      return /* @__PURE__ */ s(
        Ds,
        {
          value: Ae,
          onChange: (je) => n(o, je),
          required: Y,
          accept: E || "video/*",
          id: `file-${o}`,
          dragDrop: ae,
          label: e || "",
          name: o,
          maxSize: Te,
          parentClass: P || "",
          errorMessage: i
        }
      );
    case "tinyEditor":
      return /* @__PURE__ */ s(
        Cs,
        {
          value: Ae,
          name: o,
          onChange: (je) => n(o, je),
          required: Y,
          placeholder: yt,
          label: e || "",
          parentClass: P || "",
          fontFamily: ye,
          editorKey: le || "",
          disabled: q,
          errorMessage: i
        }
      );
    case "freeEditor":
      return /* @__PURE__ */ s(
        Is,
        {
          value: Ae,
          name: o,
          onChange: (je) => n(o, je),
          required: Y,
          placeholder: yt,
          label: e || "",
          parentClass: P || "",
          disabled: q,
          height: p.height || 300,
          errorMessage: i
        }
      );
    default:
      return /* @__PURE__ */ s(
        So,
        {
          field: p,
          type: m || "text",
          defaultValue: he,
          value: Ae,
          onChange: (je) => n(o, je),
          placeholder: yt,
          className: `${Ke} ${I || ""}`,
          required: Y,
          name: o,
          minLength: G,
          label: e || "",
          negativeNumberAllow: we,
          parentClass: P || "",
          disabled: q,
          pattern: Fe,
          mask: _e,
          errorMessage: i,
          maskApplyOnValue: Me
        }
      );
  }
}, Bs = ({
  isOpen: p,
  onClose: u,
  config: n,
  onApply: i
}) => {
  var I;
  const [o, e] = pe({}), m = (M, E) => {
    e((j) => ({ ...j, [M]: E }));
  }, l = () => {
    i(o), u();
  }, R = () => {
    e({}), i({}), u();
  }, A = n == null ? void 0 : n.component;
  return /* @__PURE__ */ z(Ye, { children: [
    /* @__PURE__ */ s(
      "div",
      {
        className: te(
          Z.filterDrawer.overlay,
          "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300",
          p ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        ),
        style: {
          opacity: p ? 1 : 0
        },
        onClick: u
      }
    ),
    /* @__PURE__ */ z(
      "div",
      {
        style: {
          opacity: p ? 1 : 0
        },
        className: te(
          Z.filterDrawer.panel,
          "fixed top-0 right-0 h-full w-[28rem] bg-white dark:bg-gray-900 shadow-2xl z-50 flex flex-col border-l border-gray-200 dark:border-gray-700 transform transition-all duration-300 ease-in-out",
          p ? "translate-x-0" : "translate-x-full"
        ),
        children: [
          /* @__PURE__ */ z(
            "div",
            {
              className: te(
                Z.filterDrawer.header,
                "flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700"
              ),
              children: [
                /* @__PURE__ */ s("h2", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: "Filters" }),
                /* @__PURE__ */ s(
                  "button",
                  {
                    onClick: u,
                    className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition",
                    children: /* @__PURE__ */ s(ma, { className: "w-5 h-5 text-gray-500 dark:text-gray-400" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ s(
            "div",
            {
              className: te(
                Z.filterDrawer.body,
                "flex-1 overflow-y-auto px-4 py-3"
              ),
              children: A ? /* @__PURE__ */ s(A, { filters: o, onFilterChange: m }) : /* @__PURE__ */ s("div", { className: "space-y-4", children: (I = n == null ? void 0 : n.fields) == null ? void 0 : I.map((M) => /* @__PURE__ */ s(
                Oo,
                {
                  field: M,
                  formData: o,
                  handleChange: m
                },
                M.key
              )) })
            }
          ),
          /* @__PURE__ */ z(
            "div",
            {
              className: te(
                Z.filterDrawer.footer,
                "flex gap-2 px-4 py-3 border-t border-gray-200 dark:border-gray-700"
              ),
              children: [
                /* @__PURE__ */ s(
                  Qt,
                  {
                    onClick: l,
                    variant: "contained",
                    color: "primary",
                    fullWidth: !0,
                    children: "Apply Filters"
                  }
                ),
                /* @__PURE__ */ s(
                  Qt,
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
}, zs = ({ rows: p = 5, columns: u = 5 }) => /* @__PURE__ */ z(Ye, { children: [
  /* @__PURE__ */ s("div", { className: "w-full mb-6 inline-flex justify-end items-center", children: /* @__PURE__ */ s("div", { className: "h-8 w-80 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }),
  /* @__PURE__ */ s("div", { className: "overflow-hidden rounded-md border border-gray-200 dark:border-gray-800", children: /* @__PURE__ */ z(
    "table",
    {
      className: te(
        Z.tableSkeleton.root,
        Z.tableSkeleton.table,
        "w-full border-collapse"
      ),
      children: [
        /* @__PURE__ */ s("thead", { children: /* @__PURE__ */ s("tr", { className: "bg-gray-50 dark:bg-gray-900", children: Array.from({ length: u }).map((n, i) => /* @__PURE__ */ s("th", { className: "px-4 py-3", children: /* @__PURE__ */ s("div", { className: "h-6 w-24 bg-gray-300 dark:bg-gray-700 rounded animate-pulse  inline-flex justify-center items-center" }) }, i)) }) }),
        /* @__PURE__ */ s("tbody", { children: Array.from({ length: p }).map((n, i) => /* @__PURE__ */ s(
          "tr",
          {
            className: "border-t border-gray-200 dark:border-gray-800",
            children: Array.from({ length: u }).map((o, e) => /* @__PURE__ */ s("td", { className: "px-4 py-6", children: /* @__PURE__ */ s("div", { className: "h-6 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }, e))
          },
          i
        )) })
      ]
    }
  ) })
] }), Ts = ({
  options: p = [],
  value: u = "",
  onChange: n,
  clearLabel: i = ""
}) => {
  const [o, e] = pe(!1), m = Mt(null), l = !!u;
  Xe(() => {
    const A = (I) => {
      m.current && !m.current.contains(I.target) && e(!1);
    };
    return document.addEventListener("click", A), () => document.removeEventListener("click", A);
  }, []);
  const R = (A) => {
    const I = p.find((M) => M.value === A);
    n(A, I || null), e(!1);
  };
  return p != null && p.length ? /* @__PURE__ */ z(
    "div",
    {
      className: te(Z.sortDropdown.root, "relative"),
      ref: m,
      children: [
        /* @__PURE__ */ z(
          "button",
          {
            type: "button",
            onClick: () => e((A) => !A),
            className: te(
              Z.sortDropdown.trigger,
              "relative inline-flex items-center justify-center h-[36px] w-[36px] rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
            ),
            "aria-label": "Open sort options",
            children: [
              /* @__PURE__ */ s(Lc, { className: "w-4 h-4" }),
              l && /* @__PURE__ */ s("span", { className: "absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" })
            ]
          }
        ),
        o && /* @__PURE__ */ z(
          "div",
          {
            className: te(
              Z.sortDropdown.menu,
              "absolute right-0 mt-2 z-20 min-w-[220px] max-h-[260px] overflow-auto rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg"
            ),
            children: [
              !!(i != null && i.trim()) && /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  onClick: () => R(""),
                  className: te(
                    Z.sortDropdown.item,
                    "w-full text-left px-3 py-2 text-sm transition hover:bg-gray-100 dark:hover:bg-gray-700",
                    u ? "text-gray-700 dark:text-gray-200" : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                  ),
                  children: i
                }
              ),
              p.map((A) => /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  onClick: () => R(A.value),
                  className: te(
                    Z.sortDropdown.item,
                    "w-full text-left px-3 py-2 text-sm transition hover:bg-gray-100 dark:hover:bg-gray-700",
                    u === A.value ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white" : "text-gray-700 dark:text-gray-200"
                  ),
                  children: A.label
                },
                A.value
              ))
            ]
          }
        )
      ]
    }
  ) : null;
}, Na = {
  enabled: !1,
  useServerSideSorting: !1,
  options: [],
  fields: [],
  defaultValue: "",
  autoGenerate: !0,
  clearLabel: "",
  onChange: null
}, js = (p) => p === !0 ? { ...Na, enabled: !0 } : !p || typeof p != "object" ? Na : {
  ...Na,
  ...p,
  enabled: p.enabled ?? !0,
  autoGenerate: p.autoGenerate ?? !0
}, Hs = (p = []) => p.filter((u) => {
  const n = ["menu_actions", "index", "audio", "avatar"];
  return u.type && n.includes(u.type) ? !1 : !!(u.sortKey || (u.type === "group" ? u.titleKey : u.key));
}), Fs = (p) => {
  if (p.sortType) return p.sortType;
  if (p.type === "date") return "date";
  if (p.type === "number") return "number";
  const u = String(
    p.sortKey || (p.type === "group" ? p.titleKey : p.key) || ""
  ).toLowerCase();
  return ["phone", "mobile", "contact", "tel", "whatsapp"].some(
    (i) => u.includes(i)
  ) ? "phone" : Array.isArray(p.chipOptions) && p.chipOptions.length > 0 && p.chipOptions.every(
    (o) => typeof o.value == "boolean"
  ) ? "boolean" : "string";
}, mo = (p = []) => p.flatMap((u) => {
  const n = u.sortKey || (u.type === "group" ? u.titleKey : u.key), i = u.sortLabel || u.title || n, o = Fs(u);
  return n ? o === "number" ? [
    {
      value: `${n}_asc`,
      label: `${i} (Low-High)`,
      key: n,
      order: "asc",
      type: o
    },
    {
      value: `${n}_desc`,
      label: `${i} (High-Low)`,
      key: n,
      order: "desc",
      type: o
    }
  ] : o === "phone" ? [
    {
      value: `${n}_asc`,
      label: `${i} (0-9)`,
      key: n,
      order: "asc",
      type: o
    },
    {
      value: `${n}_desc`,
      label: `${i} (9-0)`,
      key: n,
      order: "desc",
      type: o
    }
  ] : o === "date" ? [
    {
      value: `${n}_desc`,
      label: `${i} (Newest First)`,
      key: n,
      order: "desc",
      type: o
    },
    {
      value: `${n}_asc`,
      label: `${i} (Oldest First)`,
      key: n,
      order: "asc",
      type: o
    }
  ] : o === "boolean" ? [
    {
      value: `${n}_desc`,
      label: `${i} (True First)`,
      key: n,
      order: "desc",
      type: o
    },
    {
      value: `${n}_asc`,
      label: `${i} (False First)`,
      key: n,
      order: "asc",
      type: o
    }
  ] : [
    {
      value: `${n}_asc`,
      label: `${i} (A-Z)`,
      key: n,
      order: "asc",
      type: o
    },
    {
      value: `${n}_desc`,
      label: `${i} (Z-A)`,
      key: n,
      order: "desc",
      type: o
    }
  ] : [];
}), Ps = (p, u = []) => {
  if (Array.isArray(p.options) && p.options.length > 0)
    return p.options.map((o) => ({
      ...o,
      type: o.type || "string",
      order: o.order === "desc" ? "desc" : "asc"
    }));
  const i = Array.isArray(p.fields) ? p.fields : [];
  if (i.length > 0) {
    const o = i.map((e) => {
      const m = typeof e == "string" ? e : e.key, l = u.find(
        (R) => R.key === m || R.sortKey === m || R.type === "group" && R.titleKey === m
      );
      return l ? {
        ...l,
        sortKey: typeof e == "object" && e.key ? e.key : l.sortKey,
        sortType: typeof e == "object" && e.type ? e.type : l.sortType,
        sortLabel: typeof e == "object" && e.label ? e.label : l.sortLabel
      } : null;
    }).filter((e) => e !== null);
    return mo(o);
  }
  return p.autoGenerate ? mo(u) : [];
}, Us = (p = [], u = "", n, i = []) => {
  if (!(n != null && n.enabled) || !u || n != null && n.useServerSideSorting)
    return p;
  const o = i == null ? void 0 : i.find(
    (A) => A.value === u
  );
  if (!(o != null && o.key))
    return p;
  const e = o.order === "desc" ? "desc" : "asc", m = o.key, l = o.type || "string", R = (A) => String(A ?? "").replace(/[^\d]/g, "").trim();
  return [...p].sort((A, I) => {
    const M = A == null ? void 0 : A[m], E = I == null ? void 0 : I[m];
    if (M == null && E == null) return 0;
    if (M == null) return e === "asc" ? 1 : -1;
    if (E == null) return e === "asc" ? -1 : 1;
    let j = 0;
    return l === "number" ? j = Number(M) - Number(E) : l === "phone" ? j = R(M).localeCompare(
      R(E),
      void 0,
      {
        numeric: !0
      }
    ) : l === "date" ? j = new Date(M).getTime() - new Date(E).getTime() : l === "boolean" ? j = +!!M - +!!E : j = String(M).localeCompare(String(E)), e === "asc" ? j : -j;
  });
}, Qs = ({
  config: p,
  setShowAdd: u,
  title: n,
  buttonText: i,
  description: o,
  showAddButton: e
}) => {
  var Xr;
  const {
    data: m = [],
    table_head: l = [],
    loading: R = !1,
    search: A = {
      enabled: !1,
      placeholder: "Search...",
      useServerSideSearch: !1
    },
    filter: I = {
      enabled: !1,
      useServerSideFilters: !1
    },
    sort: M = { enabled: !1 },
    pagination: E = {
      enabled: !1,
      rows_per_page: 10,
      useServerSidePagination: !1
    },
    exportCSV: j = {
      enabled: !1,
      fileName: "",
      fields: []
    },
    emptyMessage: Y = "No data available",
    onMenuAction: G,
    setServerSidePaginationData: ae = () => {
    },
    onFilterApply: P,
    filterConfig: U = null,
    rowClick: X = null
  } = p, [se, ie] = pe(""), [le, ye] = pe(null), [q, we] = pe([]), [he, Ee] = pe({ top: 0, left: 0 }), [Fe, Ue] = pe(!1), [pt, ct] = pe({}), xe = kr(() => js(M), [M]), _e = kr(
    () => Hs(l),
    [l]
  ), Me = kr(() => Ps(xe, _e), [xe, _e]), [Te, Ce] = pe(
    (xe == null ? void 0 : xe.defaultValue) || ""
  ), [Ae, yt] = pe(null), [Ke, je] = pe(!1), jt = kr(() => !A.enabled || !se.trim() || A.useServerSideSearch ? m : Yc(m, se, A.searchKeys || []), [m, se, A]), ue = kr(() => Us(
    jt,
    Te,
    xe,
    Me
  ), [jt, Te, xe, Me]), [He, fe] = pe(1), [Le, rt] = pe((E == null ? void 0 : E.rows_per_page) || 50), [it, Ve] = pe(jt.length || 0), ut = E != null && E.useServerSidePagination ? E.total_pages : Math.ceil(jt.length / Le), er = kr(() => {
    if (E.useServerSidePagination) return ue;
    const L = (He - 1) * Le;
    return ue.slice(L, L + Le);
  }, [ue, He, Le, E.useServerSidePagination]), nr = Mt(null), mr = Mt(null), or = Mt({}), ir = Mt(null), pr = typeof document < "u" ? ((Xr = mr.current) == null ? void 0 : Xr.closest(".racm-root")) || document.body : null, Ar = (L) => {
    ie(L), fe(1), A.useServerSideSearch && (ir.current && clearTimeout(ir.current), ir.current = setTimeout(async () => {
      try {
        await ae((ee) => ({
          ...ee,
          search: L,
          current_page: 1
        }));
      } catch (ee) {
        console.error("Search error:", ee);
      }
    }, 800));
  }, Sr = (L, ee = null) => {
    Ce(L), fe(1);
    const Be = {
      value: L,
      option: ee,
      key: (ee == null ? void 0 : ee.key) || "",
      order: (ee == null ? void 0 : ee.order) || "",
      type: (ee == null ? void 0 : ee.type) || ""
    };
    typeof (xe == null ? void 0 : xe.onChange) == "function" && xe.onChange(Be);
  }, hr = (L, ee, Be) => {
    Be.stopPropagation(), ye(null), G == null || G(L.type, ee);
  }, Ir = (L, ee, Be) => {
    ee.stopPropagation(), we(Be);
    const $e = ee.currentTarget;
    or.current[L] = $e;
    const ht = $e.getBoundingClientRect(), zt = 192, Ht = Be.length * 40, Ot = window.innerWidth, Gt = window.innerHeight, Wt = Ot - ht.right < zt ? ht.left - zt + ht.width : ht.left, vr = Gt - ht.bottom < Ht && ht.top > Ht ? ht.top - Ht - 2 : ht.bottom + 2;
    Ee({
      top: Math.max(8, Math.min(vr, Gt - Ht - 8)),
      left: Math.max(8, Math.min(Wt, Ot - zt - 8))
    }), ye(le === L ? null : L);
  }, Mr = (L) => (He - 1) * Le + L + 1, tr = (L) => {
    let ee = L;
    ee && ee.src instanceof File && (ee = { ...ee, src: URL.createObjectURL(ee.src) }), yt(ee), je(!0);
  }, fr = (L) => {
    if (!L) return "";
    if (typeof L == "string")
      return L;
    if (L instanceof File)
      return URL.createObjectURL(L);
    if (typeof L == "object") {
      if (typeof L.preview == "string")
        return L.preview;
      if (typeof L.src == "string")
        return L.src;
      if (L.src instanceof File)
        return URL.createObjectURL(L.src);
      if (L.file instanceof File)
        return URL.createObjectURL(L.file);
    }
    return "";
  }, Nr = (L, ee) => {
    const Be = Array.isArray(L) ? L : [];
    if (Be.length === 0)
      return /* @__PURE__ */ s("span", { className: ee.className || "", children: "N/A" });
    const $e = ee.maxPreview || 3, ht = Be.slice(0, $e), zt = Be.length - ht.length;
    return /* @__PURE__ */ z("div", { className: "flex items-center", children: [
      /* @__PURE__ */ s("div", { className: "flex -space-x-2", children: ht.map((Ht, Ot) => {
        const Gt = fr(Ht);
        return Gt ? /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            onClick: (gr) => {
              gr.stopPropagation(), tr({ src: Gt, alt: `Gallery ${Ot + 1}` });
            },
            className: "w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden",
            children: /* @__PURE__ */ s(
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
      zt > 0 && /* @__PURE__ */ z("span", { className: "ml-2 text-xs font-medium text-gray-600 dark:text-gray-300", children: [
        "+",
        zt
      ] })
    ] });
  }, Rr = (L, ee) => {
    const Be = fr(L);
    return Be ? /* @__PURE__ */ s(
      "button",
      {
        type: "button",
        onClick: ($e) => {
          $e.stopPropagation(), tr({ src: Be, alt: ee.title || "Image" });
        },
        className: "w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 overflow-hidden",
        children: /* @__PURE__ */ s(
          "img",
          {
            src: Be,
            alt: ee.title || "image",
            className: "w-full h-full object-cover"
          }
        )
      }
    ) : /* @__PURE__ */ s("span", { className: ee.className || "", children: "N/A" });
  }, st = (L, ee, Be, $e = null, ht = null) => /* @__PURE__ */ s(Ye, { children: L ? /* @__PURE__ */ s(
    "img",
    {
      src: L instanceof File ? URL.createObjectURL(L) : L,
      alt: ee || "Avatar",
      onClick: (zt) => {
        zt.stopPropagation(), zt.preventDefault(), tr({ src: L, alt: ee });
      },
      className: `w-10 h-10 cursor-pointer shrink-0 rounded-full object-cover border border-gray-200 dark:border-gray-700 ${Be || ""}`
    }
  ) : /* @__PURE__ */ s(Ye, { children: $e ? typeof $e == "function" ? $e(ht) : $e : /* @__PURE__ */ s(
    "div",
    {
      className: `w-10 h-10 flex items-center shrink-0 justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${Be || ""}`,
      children: /* @__PURE__ */ s(Ua, { className: "w-6 h-6 text-gray-400 dark:text-gray-400" })
    }
  ) }) }), De = (L, ee) => /* @__PURE__ */ s(Ye, { children: L ? /* @__PURE__ */ s(
    "audio",
    {
      controls: !0,
      src: L instanceof File ? URL.createObjectURL(L) : L,
      onClick: (Be) => {
        Be.stopPropagation();
      },
      className: `w-64 cursor-pointer ${ee || ""}`
    },
    L instanceof File ? URL.createObjectURL(L) : L
  ) : /* @__PURE__ */ s(Ye, { children: /* @__PURE__ */ s(
    "div",
    {
      className: `w-12 h-12 flex items-center shrink-0 justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${ee || ""}`,
      children: /* @__PURE__ */ s(Hc, { className: "w-6 h-6 text-gray-400 dark:text-gray-400" })
    }
  ) }) }), We = (L, ee) => /* @__PURE__ */ z("div", { className: `flex items-center space-x-4 ${ee.className || ""}`, children: [
    ee.imageKey ? st(
      L[ee.imageKey],
      L[ee.titleKey],
      "group-avatar",
      ee.fallback_icon,
      L
    ) : "",
    /* @__PURE__ */ z("div", { children: [
      /* @__PURE__ */ s("p", { className: "font-medium text-gray-900 dark:text-white group-title", children: L[ee.titleKey] || "" }),
      /* @__PURE__ */ s("p", { className: "text-sm text-gray-500 dark:text-gray-400 group-sub-title", children: L[ee.subtitleKey] || "" })
    ] })
  ] }), xt = (L, ee) => {
    var zt;
    let Be = String(L);
    const $e = ee.variant || "contained";
    let ht = ee.defaultColor;
    if (((zt = ee == null ? void 0 : ee.chipOptions) == null ? void 0 : zt.length) > 0) {
      const Ht = ee == null ? void 0 : ee.chipOptions.find((Ot) => Ot.value == L);
      Ht && (Be = Ht.label, ht = Ht.color);
    }
    return /* @__PURE__ */ s(
      Ro,
      {
        label: Be,
        variant: $e,
        color: ht,
        className: ee.className || ""
      }
    );
  }, Jt = (L, ee, Be) => {
    const $e = ee[L.key];
    return L.type === "menu_actions" ? /* @__PURE__ */ s("div", { className: `text-center ${L.className || ""}`, children: /* @__PURE__ */ s(
      "button",
      {
        ref: (ht) => {
          or.current[ee.id || ee._id] = ht;
        },
        onClick: (ht) => Ir(ee.id || ee._id, ht, L.menuList),
        className: te(
          Z.table.actionButton,
          "p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition text-gray-700 dark:text-gray-300"
        ),
        children: /* @__PURE__ */ s(jc, { className: "h-4 w-4" })
      }
    ) }) : L.type === "index" ? /* @__PURE__ */ s("span", { className: L.className || "", children: Mr(Be) }) : L.type === "group" ? We(ee, L) : L.type === "chip" ? /* @__PURE__ */ s(Ye, { children: xt($e, L) }) : L.type === "date" ? /* @__PURE__ */ s("span", { className: L.className || "", children: Ra($e, L.format || "DD MMM YYYY") }) : L.type === "avatar" ? /* @__PURE__ */ s(Ye, { children: /* @__PURE__ */ s("div", { className: "min-w-[40px]", children: st(
      $e,
      L.alt,
      L.className,
      L.fallback_icon,
      ee
    ) }) }) : L.type === "audio" ? /* @__PURE__ */ s(Ye, { children: De($e, L.className) }) : L.type === "image" ? /* @__PURE__ */ s(Ye, { children: Rr($e, L) }) : L.type === "multiImage" ? /* @__PURE__ */ s(Ye, { children: Nr($e, L) }) : /* @__PURE__ */ s("span", { className: L.className || "", children: $e || "N/A" });
  }, Et = (L) => {
    if (typeof X == "function")
      return X(L);
    if (X)
      return G == null ? void 0 : G("view", L);
  }, ha = (L, ee) => {
    if (L.onClickDetails)
      return G == null ? void 0 : G("view", ee);
    if (typeof L.handleClick == "function")
      return L.handleClick(ee);
  }, Jr = () => X || typeof X == "function", Zr = (L) => L.onClickDetails || typeof L.handleClick == "function", fa = () => {
    var gr;
    if (!(m != null && m.length) || !((gr = j == null ? void 0 : j.fields) != null && gr.length)) return;
    const L = j.fields.map((Wt) => Wt.label), ee = er.map(
      (Wt) => j.fields.map(($r) => {
        const vr = Wt == null ? void 0 : Wt[$r.key];
        return `"${vr ?? ""}"`;
      })
    ), Be = [
      L.join(","),
      ...ee.map((Wt) => Wt.join(","))
    ].join(`
`), ht = `export-${Ra(/* @__PURE__ */ new Date(), "YYYY-MM-DD_HH-mm-ss")}.csv`, zt = j.fileName || ht, Ht = new Blob([Be], { type: "text/csv;charset=utf-8;" }), Ot = document.createElement("a"), Gt = URL.createObjectURL(Ht);
    Ot.href = Gt, Ot.download = zt, document.body.appendChild(Ot), Ot.click(), document.body.removeChild(Ot), URL.revokeObjectURL(Gt);
  };
  return Xe(() => {
    const L = () => {
      le && ye(null);
    };
    return window.addEventListener("scroll", L, !0), () => {
      window.removeEventListener("scroll", L, !0);
    };
  }, [le]), Xe(() => {
    const L = (ee) => {
      nr.current && !nr.current.contains(ee.target) && ye(null);
    };
    return document.addEventListener("click", L), () => document.removeEventListener("click", L);
  }, []), Xe(() => {
    E != null && E.rows_per_page && (E != null && E.useServerSidePagination) && rt((E == null ? void 0 : E.rows_per_page) || 50), E.current_page && fe(E.current_page);
  }, [
    E.rows_per_page,
    E == null ? void 0 : E.useServerSidePagination,
    E.current_page
  ]), Xe(() => {
    Ve(
      E != null && E.useServerSidePagination ? E.total_records : ue.length
    ), ue.length <= Le * (He - 1) && !(E != null && E.useServerSidePagination) && fe((L) => L - 1 || 1);
  }, [
    ue.length,
    E.total_records,
    E == null ? void 0 : E.useServerSidePagination
  ]), Xe(() => {
    if (!(xe != null && xe.enabled)) {
      Ce("");
      return;
    }
    if (Me.some(
      (ee) => ee.value === xe.defaultValue
    )) {
      Ce(xe.defaultValue);
      return;
    }
    Ce("");
  }, [xe, Me]), Xe(() => {
    if (!(xe != null && xe.enabled) || !(xe != null && xe.useServerSideSorting))
      return;
    const L = Me == null ? void 0 : Me.find(
      (ee) => ee.value === Te
    );
    ae((ee) => ({
      ...ee,
      current_page: 1,
      sort_by: (L == null ? void 0 : L.key) || "",
      sort_order: (L == null ? void 0 : L.order) || ""
    }));
  }, [
    Te,
    xe == null ? void 0 : xe.enabled,
    xe == null ? void 0 : xe.useServerSideSorting,
    Me,
    ae
  ]), /* @__PURE__ */ z("div", { ref: mr, children: [
    R ? /* @__PURE__ */ s(zs, { rows: 6, columns: 6 }) : /* @__PURE__ */ z(Ye, { children: [
      /* @__PURE__ */ z(
        "div",
        {
          className: te(
            Z.table.toolbar,
            "flex flex-col lg:!flex-row lg:!justify-between gap-4 mb-3"
          ),
          children: [
            /* @__PURE__ */ z("div", { className: "table-heading", children: [
              /* @__PURE__ */ s("h1", { children: n }),
              /* @__PURE__ */ s("p", { children: o })
            ] }),
            /* @__PURE__ */ z("div", { className: "flex flex-col justify-end items-stretch lg:!items-end gap-2 w-full lg:!w-auto", children: [
              e && /* @__PURE__ */ z(
                Qt,
                {
                  onClick: () => u(!0),
                  variant: "contained",
                  color: "primary",
                  children: [
                    /* @__PURE__ */ s(Oc, { className: "w-4 h-4 mr-2" }),
                    i || "Add New"
                  ]
                }
              ),
              /* @__PURE__ */ z("div", { className: "flex flex-col sm:!flex-row sm:!flex-wrap justify-end items-stretch sm:!items-center gap-2 w-full", children: [
                A.enabled && /* @__PURE__ */ s("div", { className: "w-full sm:!w-auto", children: /* @__PURE__ */ z(
                  "div",
                  {
                    className: te(
                      Z.table.searchField,
                      "table-search-field"
                    ),
                    children: [
                      /* @__PURE__ */ s(Pa, { className: "search-icon" }),
                      /* @__PURE__ */ s(
                        "input",
                        {
                          type: "text",
                          placeholder: A.placeholder || "Search...",
                          value: se,
                          onChange: (L) => Ar(L.target.value),
                          className: Z.table.searchInput
                        }
                      )
                    ]
                  }
                ) }),
                xe != null && xe.enabled && (Me == null ? void 0 : Me.length) > 0 || U && I.enabled || j && j.enabled ? /* @__PURE__ */ z("div", { className: "flex items-center justify-end gap-2 w-full sm:!w-auto", children: [
                  U && I.enabled && /* @__PURE__ */ z("div", { className: "filter-button-wrapper", children: [
                    /* @__PURE__ */ z(
                      Qt,
                      {
                        onClick: () => Ue(!0),
                        variant: "contained",
                        className: "w-full sm:!w-auto",
                        children: [
                          /* @__PURE__ */ s(Dc, { className: "w-4 h-4 mr-2" }),
                          "Filters"
                        ]
                      }
                    ),
                    Object.keys(pt).length > 0 && /* @__PURE__ */ s("span", { className: "red-dot" })
                  ] }),
                  j && j.enabled && /* @__PURE__ */ s("div", { className: "filter-button-wrapper", children: /* @__PURE__ */ z(
                    Qt,
                    {
                      onClick: () => fa(),
                      variant: "contained",
                      className: "w-full sm:!w-auto",
                      children: [
                        /* @__PURE__ */ s(Bc, { className: "w-4 h-4 mr-2" }),
                        "Export CSV"
                      ]
                    }
                  ) }),
                  (xe == null ? void 0 : xe.enabled) && (Me == null ? void 0 : Me.length) > 0 && /* @__PURE__ */ s(
                    Ts,
                    {
                      options: Me,
                      value: Te,
                      onChange: Sr,
                      clearLabel: xe == null ? void 0 : xe.clearLabel
                    }
                  )
                ] }) : null
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ z(
        "div",
        {
          className: te(
            Z.table.root,
            Z.table.container,
            "table-container"
          ),
          children: [
            /* @__PURE__ */ s("div", { className: "overflow-x-auto", children: /* @__PURE__ */ z("table", { className: Z.table.element, children: [
              /* @__PURE__ */ s("thead", { className: Z.table.head, children: /* @__PURE__ */ s("tr", { className: Z.table.headRow, children: l.map((L) => /* @__PURE__ */ s(
                "th",
                {
                  className: te(
                    Z.table.headCell,
                    "table-head-data",
                    L.headClass || ""
                  ),
                  children: L.title
                },
                L.key
              )) }) }),
              /* @__PURE__ */ s("tbody", { className: Z.table.body, children: er.length === 0 ? /* @__PURE__ */ s("tr", { children: /* @__PURE__ */ s(
                "td",
                {
                  colSpan: l.length,
                  className: te(
                    Z.table.noData,
                    "no-data-message"
                  ),
                  children: Y
                }
              ) }) : er.map((L, ee) => /* @__PURE__ */ s(
                "tr",
                {
                  className: te(
                    Z.table.row,
                    "table-row",
                    Jr() ? "cursor-pointer" : ""
                  ),
                  onClick: () => {
                    Jr() && Et(L);
                  },
                  children: l.map((Be) => /* @__PURE__ */ s(
                    "td",
                    {
                      className: te(
                        Z.table.cell,
                        "table-data",
                        Be.type == "audio" ? "" : "max-w-[300px]",
                        "truncate",
                        Zr(Be) ? "cursor-pointer" : ""
                      ),
                      title: String(L[Be.key] ?? ""),
                      onClick: ($e) => {
                        Zr(Be) && ($e.stopPropagation(), $e.preventDefault(), ha(Be, L));
                      },
                      children: Be.render ? Be.render(L, ee) : Jt(Be, L, ee)
                    },
                    Be.key
                  ))
                },
                L.id || L._id || ee
              )) })
            ] }) }),
            (E == null ? void 0 : E.enabled) && ue.length > 0 && /* @__PURE__ */ z(
              "div",
              {
                className: te(
                  Z.table.pagination,
                  "pagination-wrapper"
                ),
                children: [
                  /* @__PURE__ */ z("span", { children: [
                    "Showing ",
                    (He - 1) * Le + 1,
                    " to",
                    " ",
                    Math.min(He * Le, it),
                    " of",
                    " ",
                    it,
                    " results"
                  ] }),
                  /* @__PURE__ */ z("div", { className: "flex items-center gap-4", children: [
                    /* @__PURE__ */ z("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ s("span", { children: "Rows per page:" }),
                      /* @__PURE__ */ s(
                        "select",
                        {
                          value: Le,
                          onChange: (L) => {
                            const ee = Number(L.target.value);
                            rt(ee), fe(1), E.useServerSidePagination && ae(
                              (Be) => ({
                                ...Be,
                                current_page: 1,
                                rows_per_page: ee
                              })
                            );
                          },
                          className: "rows-number-select",
                          children: [10, 25, 50, 100].map((L) => /* @__PURE__ */ s("option", { value: L, children: L }, L))
                        }
                      )
                    ] }),
                    /* @__PURE__ */ z("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ s(
                        "button",
                        {
                          onClick: () => {
                            if (He > 1) {
                              const L = He - 1;
                              fe(L), E.useServerSidePagination && ae(
                                (ee) => ({
                                  ...ee,
                                  current_page: L
                                })
                              );
                            }
                          },
                          disabled: He === 1,
                          className: "arrow-icons",
                          children: /* @__PURE__ */ s(zc, { className: "h-4 w-4" })
                        }
                      ),
                      /* @__PURE__ */ z("span", { children: [
                        "Page ",
                        He,
                        " of ",
                        ut
                      ] }),
                      /* @__PURE__ */ s(
                        "button",
                        {
                          onClick: () => {
                            if (He < ut) {
                              const L = He + 1;
                              fe(L), E.useServerSidePagination && ae(
                                (ee) => ({
                                  ...ee,
                                  current_page: L
                                })
                              );
                            }
                          },
                          disabled: He === ut,
                          className: "arrow-icons",
                          children: /* @__PURE__ */ s(Tc, { className: "h-4 w-4" })
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
    le && pr && Qa(
      /* @__PURE__ */ s(
        "div",
        {
          ref: nr,
          style: {
            position: "fixed",
            top: `${he.top}px`,
            left: `${he.left}px`,
            zIndex: 9999
          },
          className: te(
            Z.table.menu,
            "w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg border border-gray-200 dark:border-gray-600"
          ),
          children: q.map((L, ee) => /* @__PURE__ */ z(
            "button",
            {
              onClick: (Be) => hr(
                L,
                m.find(
                  ($e) => $e.id === le || $e._id == le
                ),
                Be
              ),
              className: te(
                Z.table.menuItem,
                "w-full flex items-center gap-2 px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-600",
                L.variant === "danger" ? "text-red-600 dark:text-red-500" : "text-gray-700 dark:text-gray-200"
              ),
              children: [
                L.icon && /* @__PURE__ */ s("span", { className: "shrink-0", children: L.icon }),
                L.title
              ]
            },
            ee
          ))
        }
      ),
      pr
    ),
    U && /* @__PURE__ */ s(
      Bs,
      {
        isOpen: Fe,
        onClose: () => Ue(!1),
        config: U,
        onApply: (L) => {
          ct(L), P == null || P(L);
        }
      }
    ),
    Ke && Ae && /* @__PURE__ */ s(
      $t,
      {
        src: Ae.src,
        alt: Ae.alt,
        isOpen: Ke,
        setIsOpen: je
      }
    )
  ] });
}, ca = ({
  isOpen: p,
  onClose: u,
  icon: n,
  title: i,
  children: o,
  size: e = "md",
  actionButtons: m = [],
  onFormSubmit: l = () => {
  },
  loadingBtn: R = !1,
  executeFunction: A = () => {
  },
  selectedItem: I = null,
  footerConfig: M,
  classNames: E
}) => {
  if (!p) return null;
  const j = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-full"
  }, Y = m.length > 0 || !!(M != null && M.cancelButton);
  return /* @__PURE__ */ z(
    "div",
    {
      className: te(
        Z.modal.root,
        "fixed inset-0 z-50 flex items-center justify-center p-4"
      ),
      children: [
        /* @__PURE__ */ s(
          "div",
          {
            className: te(
              Z.modal.overlay,
              "fixed inset-0 bg-gray-500 opacity-75",
              E == null ? void 0 : E.overlay
            )
          }
        ),
        /* @__PURE__ */ z(
          "div",
          {
            className: te(
              Z.modal.container,
              "relative bg-white rounded-lg shadow-xl w-full max-h-[90vh] flex flex-col dark:bg-gray-800",
              j[e] || j.md,
              E == null ? void 0 : E.container
            ),
            children: [
              /* @__PURE__ */ z(
                "div",
                {
                  className: te(
                    Z.modal.header,
                    "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0",
                    E == null ? void 0 : E.header
                  ),
                  children: [
                    /* @__PURE__ */ z("div", { className: "flex items-center gap-1", children: [
                      n && /* @__PURE__ */ s("span", { children: n }),
                      /* @__PURE__ */ s(
                        "h3",
                        {
                          className: te(
                            Z.modal.title,
                            "text-lg font-medium text-gray-900 dark:text-white",
                            E == null ? void 0 : E.title
                          ),
                          children: i
                        }
                      )
                    ] }),
                    /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: () => u(),
                        className: te(
                          Z.modal.closeButton,
                          "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
                          E == null ? void 0 : E.closeButton
                        ),
                        children: /* @__PURE__ */ s(ma, { className: "w-6 h-6" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ s(
                "div",
                {
                  className: te(
                    Z.modal.body,
                    "flex-1 overflow-y-auto p-4",
                    E == null ? void 0 : E.body
                  ),
                  children: o
                }
              ),
              Y && /* @__PURE__ */ z(
                "div",
                {
                  className: te(
                    Z.modal.footer,
                    "px-4 py-3 flex justify-end gap-3 border-t border-gray-200 dark:border-gray-700 sm:!px-6",
                    E == null ? void 0 : E.footer
                  ),
                  children: [
                    (M == null ? void 0 : M.cancelButton) && /* @__PURE__ */ s(
                      Qt,
                      {
                        onClick: () => u(),
                        variant: "outlined",
                        color: "default",
                        className: te(
                          Z.modal.actionButton,
                          "min-w-[100px]"
                        ),
                        type: "button",
                        children: (M == null ? void 0 : M.cancelText) || "Cancel"
                      }
                    ),
                    m.map((G, ae) => /* @__PURE__ */ s(
                      Qt,
                      {
                        onClick: (P) => {
                          G.type == "submit" ? l(P) : A(
                            () => {
                              var U;
                              return Promise.resolve((U = G == null ? void 0 : G.onClick) == null ? void 0 : U.call(G, P, I));
                            },
                            (U) => u == null ? void 0 : u(U)
                          );
                        },
                        disabled: R || G.disabled,
                        variant: G.variant || "contained",
                        color: G.color || "primary",
                        className: te(
                          Z.modal.actionButton,
                          "min-w-[100px]",
                          G.className || ""
                        ),
                        type: G.type || "button",
                        children: R ? /* @__PURE__ */ z(
                          "div",
                          {
                            className: te(
                              Z.modal.loadingIndicator,
                              "flex items-center"
                            ),
                            children: [
                              /* @__PURE__ */ s("div", { className: "animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-2 border-t-white mr-2" }),
                              G.label || "Submit",
                              "..."
                            ]
                          }
                        ) : G.label || "Submit"
                      },
                      `${G.label || "action"}-${ae}`
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
}, po = ({
  config: p,
  onSubmit: u,
  initialData: n,
  fetchRowDetails: i,
  type: o
}) => {
  const e = n || {}, { formClass: m = "grid grid-cols-12 gap-4", formFields: l = [] } = p || {}, [R, A] = pe(e), [I, M] = pe(!1), [E, j] = pe({}), Y = async () => {
    i == null || i(e).then((P) => {
      A(P.data);
    }).catch((P) => {
      Cr(P.message, { variant: "error" });
    }).finally(() => {
      M(!1);
    });
  };
  Xe(() => {
    i instanceof Function ? (M(!0), Y()) : (A(e), M(!1));
  }, []);
  const G = (P, U) => {
    A((X) => ({ ...X, [P]: U })), j((X) => ({
      ...X,
      [P]: ""
    }));
  }, ae = (P) => {
    P.preventDefault();
    const U = P.currentTarget;
    if (!U.checkValidity()) {
      U.reportValidity();
      return;
    }
    const X = {};
    let se = !1;
    for (const ie of l) {
      const le = R[ie.key] || "";
      if (ie.customValidation) {
        const ye = ie.customValidation(le);
        if (ye !== !1 && (X[ie.key] = ye, !se)) {
          const q = U.querySelector(
            `[id="field-${ie.key}"]`
          );
          q == null || q.focus(), se = !0;
        }
      }
    }
    j(X), !(Object.keys(X).length > 0) && u(R);
  };
  return I ? /* @__PURE__ */ s(
    "div",
    {
      className: te(
        Z.form.loading,
        "flex items-center justify-center h-64"
      ),
      children: /* @__PURE__ */ s(
        "div",
        {
          className: "rounded-full border-4 border-blue-500 border-t-gray-200 animate-spin w-8 h-8",
          style: {
            borderTopColor: "border-primary-500"
          }
        }
      )
    }
  ) : /* @__PURE__ */ s(
    "form",
    {
      id: o === "add" ? "addForm" : o === "edit" ? "editForm" : "defaultForm",
      onSubmit: ae,
      className: te(Z.form.root, m),
      noValidate: !1,
      children: l.map((P) => /* @__PURE__ */ s(
        Oo,
        {
          field: P,
          formData: R,
          errorMessage: E[P.key] || "",
          handleChange: G
        },
        P.key
      ))
    }
  );
};
function Gs({
  data: p,
  config: u,
  fetchRowDetails: n
}) {
  const {
    fields: i = [],
    containerClass: o,
    variant: e = "default",
    styles: m = {}
  } = u || {}, l = p || {}, [R, A] = pe(l), [I, M] = pe(!0), E = async () => {
    n == null || n(l).then((Y) => {
      A(Y.data);
    }).catch((Y) => {
      Cr(Y.message, { variant: "error" });
    }).finally(() => {
      M(!1);
    });
  };
  if (Xe(() => {
    n instanceof Function ? E() : (A(l), M(!1));
  }, []), I)
    return /* @__PURE__ */ s(
      "div",
      {
        className: te(
          Z.form.loading,
          "flex items-center justify-center h-64"
        ),
        children: /* @__PURE__ */ s(
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
  const j = {
    default: "grid grid-cols-12 gap-4",
    // card: each field is a standalone elevated card in a 12-col grid
    card: "grid grid-cols-12 gap-3",
    // split: clean property-sheet — bordered box, rows divided by hairlines
    split: "rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden divide-y divide-gray-100 dark:divide-gray-800"
  };
  return /* @__PURE__ */ s(Ye, { children: /* @__PURE__ */ s(
    "div",
    {
      className: te(
        Z.details.root,
        Z.details.container,
        j[e] || j.default,
        o || "",
        m.containerClass || ""
      ),
      children: i.map((Y) => Y.renderCondition && typeof Y.renderCondition == "function" && !Y.renderCondition(R) ? null : Y.type == "group" ? /* @__PURE__ */ s(
        Mo,
        {
          col: Y,
          data: R,
          uiVariant: e,
          styleConfig: m
        },
        Y.key || Y.titleKey
      ) : Y.type == "cardGroup" ? /* @__PURE__ */ s(
        No,
        {
          col: Y,
          data: R,
          uiVariant: e,
          styleConfig: m
        },
        Y.key || Y.titleKey
      ) : /* @__PURE__ */ s(
        Lo,
        {
          col: Y,
          data: R,
          uiVariant: e,
          styleConfig: m
        },
        Y.key || Y.label
      ))
    }
  ) });
}
const Ys = ({ config: p }) => {
  var fe, Le, rt, it, Ve, ut, er, nr, mr, or, ir, pr, Ar, Sr, hr, Ir, Mr, tr, fr, Nr, Rr, st;
  const {
    title: u,
    fetchData: n,
    fetchRowDetails: i,
    isStaticData: o = !1,
    tableConfig: e,
    modalConfig: m,
    filterConfig: l
  } = p, [R, A] = pe(!0), [I, M] = pe(!1), [E, j] = pe([]), [Y, G] = pe(null), [ae, P] = pe({
    search: "",
    rows_per_page: 50,
    current_page: 1,
    sort_by: "",
    sort_order: ""
  }), [U, X] = pe({}), [se, ie] = pe(!1), [le, ye] = pe(!1), [q, we] = pe(!1), [he, Ee] = pe(!1), [Fe, Ue] = pe(!1), [pt, ct] = pe(
    null
  ), xe = (De, We) => {
    De === "edit" ? (ct(We), we(!0)) : De === "view" ? (ct(We), Ue(!0)) : De === "delete" && (ct(We), Ee(!0));
  }, _e = async (De, We, xt = "", Jt = "") => {
    M(!0);
    try {
      if (!De) return;
      const Et = await De();
      (xt || Et != null && Et.message) && Cr(xt || Et.message || "Success", {
        variant: "success"
      }), We == null || We(Et);
    } catch (Et) {
      (Jt || Et != null && Et.message) && Cr(Jt || Et.message || "Error occurred", {
        variant: "error"
      });
    } finally {
      M(!1);
    }
  }, Me = (De) => {
    const We = De.newObject;
    o ? (j((xt) => [We, ...xt]), G((xt) => ({
      ...xt,
      current_page: 1
    }))) : (P((xt) => ({
      ...xt,
      current_page: 1
    })), ae.current_page === 1 && Ke()), ye(!1);
  }, Te = (De) => {
    const { newObject: We, targetObject: xt } = De;
    o ? j(
      (Jt) => Jt.map(
        (Et) => Et.id === xt.id ? { ...Et, ...We } : Et
      )
    ) : Ke(), we(!1);
  }, Ce = (De) => {
    if (!De) {
      Ee(!1), ct(null);
      return;
    }
    o ? j(
      (We) => We.filter((xt) => xt.id !== De.targetObject.id)
    ) : E.length === 1 && ae.current_page > 1 ? P((We) => ({
      ...We,
      current_page: We.current_page - 1
    })) : Ke(), Ee(!1), ct(null);
  }, Ae = (De) => _e(
    () => {
      var We;
      return (We = m == null ? void 0 : m.addModal) != null && We.handleSubmit ? m.addModal.handleSubmit(De) : Promise.resolve({ newObject: null });
    },
    Me
  ), yt = (De) => _e(
    () => {
      var We;
      return (We = m == null ? void 0 : m.editModal) != null && We.handleSubmit ? m.editModal.handleSubmit(De, pt) : Promise.resolve({ newObject: null, targetObject: null });
    },
    Te
  ), Ke = async () => {
    A(!0);
    try {
      const De = await n({
        ...ae,
        ...U
      });
      j(De.data || []), G(De.pagination || null);
    } catch (De) {
      Cr(De.message || "Failed to fetch data", {
        variant: "error"
      });
    } finally {
      A(!1);
    }
  }, je = (De) => {
    var We;
    X((xt) => ({ ...De })), (We = e == null ? void 0 : e.filter) != null && We.useServerSideFilters && ie((xt) => !xt);
  }, jt = (De, We) => De.filter(
    (xt) => Object.entries(We).every(([Jt, Et]) => xt[Jt] === Et)
  ), ue = kr(() => {
    var De;
    return (De = e == null ? void 0 : e.filter) != null && De.useServerSideFilters ? E : jt(E, U);
  }, [E, U, (fe = e == null ? void 0 : e.filter) == null ? void 0 : fe.useServerSideFilters]), He = (Le = m == null ? void 0 : m.viewModal) == null ? void 0 : Le.component;
  return Xe(() => {
    Ke();
  }, [
    ae.search,
    ae.rows_per_page,
    ae.current_page,
    ae.sort_by,
    ae.sort_order,
    se
  ]), /* @__PURE__ */ z("div", { className: Z.crudPage.root, children: [
    /* @__PURE__ */ s(
      Qs,
      {
        title: u,
        setShowAdd: ye,
        description: p.description,
        buttonText: p.buttonText,
        showAddButton: !!(m != null && m.addModal),
        config: {
          ...e,
          pagination: {
            ...e.pagination,
            ...Y
          },
          data: ue,
          setServerSidePaginationData: P,
          onMenuAction: xe,
          filterConfig: l,
          onFilterApply: je,
          loading: R
        }
      }
    ),
    /* @__PURE__ */ s(
      ca,
      {
        isOpen: le,
        onClose: () => {
          I || ye(!1);
        },
        icon: (rt = m == null ? void 0 : m.addModal) == null ? void 0 : rt.icon,
        title: ((it = m == null ? void 0 : m.addModal) == null ? void 0 : it.title) || "Add New",
        size: ((Ve = m == null ? void 0 : m.addModal) == null ? void 0 : Ve.size) || "md",
        onFormSubmit: () => {
          var De;
          return (De = document.querySelector("#addForm")) == null ? void 0 : De.requestSubmit();
        },
        loadingBtn: I,
        actionButtons: ((ut = m == null ? void 0 : m.addModal) == null ? void 0 : ut.actionButtons) || [],
        children: /* @__PURE__ */ s(
          po,
          {
            config: (m == null ? void 0 : m.addModal) || {},
            onSubmit: Ae,
            initialData: {},
            type: "add",
            loading: I
          }
        )
      }
    ),
    /* @__PURE__ */ s(
      ca,
      {
        isOpen: q,
        onClose: () => {
          I || we(!1);
        },
        icon: (er = m == null ? void 0 : m.editModal) == null ? void 0 : er.icon,
        title: ((nr = m == null ? void 0 : m.editModal) == null ? void 0 : nr.title) || "Edit",
        size: ((mr = m == null ? void 0 : m.editModal) == null ? void 0 : mr.size) || "md",
        onFormSubmit: () => {
          var De;
          return (De = document.querySelector("#editForm")) == null ? void 0 : De.requestSubmit();
        },
        actionButtons: ((or = m == null ? void 0 : m.editModal) == null ? void 0 : or.actionButtons) || [],
        loadingBtn: I,
        children: /* @__PURE__ */ s(
          po,
          {
            config: (m == null ? void 0 : m.editModal) || {},
            onSubmit: yt,
            initialData: pt,
            type: "edit",
            loading: I,
            fetchRowDetails: i
          }
        )
      }
    ),
    /* @__PURE__ */ s(
      ca,
      {
        isOpen: he,
        onClose: (De) => {
          Ce(De);
        },
        icon: ((ir = m == null ? void 0 : m.deleteModal) == null ? void 0 : ir.icon) || /* @__PURE__ */ s(Ut, { icon: "ph:warning-bold", className: "w-6 h-6 text-red-500" }),
        title: ((pr = m == null ? void 0 : m.deleteModal) == null ? void 0 : pr.title) || "Confirm Delete",
        size: ((Ar = m == null ? void 0 : m.deleteModal) == null ? void 0 : Ar.size) || "md",
        loading: I,
        actionButtons: ((Sr = m == null ? void 0 : m.deleteModal) == null ? void 0 : Sr.actionButtons) || [],
        executeFunction: _e,
        selectedItem: pt,
        children: /* @__PURE__ */ s(
          "div",
          {
            className: te(
              Z.crudPage.deleteContent,
              "flex items-center space-x-2 py-3"
            ),
            children: /* @__PURE__ */ z("div", { children: [
              /* @__PURE__ */ s("p", { className: "text-md text-gray-700 dark:text-white", children: ((hr = m == null ? void 0 : m.deleteModal) == null ? void 0 : hr.confirmText) || "Are you sure you want to delete this item?" }),
              ((Ir = m == null ? void 0 : m.deleteModal) == null ? void 0 : Ir.referenceKey) && /* @__PURE__ */ s("p", { className: "text-md font-semibold text-gray-700 dark:text-white", children: pt == null ? void 0 : pt[(Mr = m == null ? void 0 : m.deleteModal) == null ? void 0 : Mr.referenceKey] })
            ] })
          }
        )
      }
    ),
    (m == null ? void 0 : m.viewModal) && /* @__PURE__ */ s(
      ca,
      {
        isOpen: Fe,
        onClose: () => {
          Ue(!1), ct(null);
        },
        icon: (tr = m == null ? void 0 : m.viewModal) == null ? void 0 : tr.icon,
        title: ((fr = m == null ? void 0 : m.viewModal) == null ? void 0 : fr.title) || "View Details",
        size: ((Nr = m == null ? void 0 : m.viewModal) == null ? void 0 : Nr.size) || "lg",
        footerConfig: (Rr = m == null ? void 0 : m.viewModal) == null ? void 0 : Rr.footer,
        classNames: (st = m == null ? void 0 : m.viewModal) == null ? void 0 : st.modalClassNames,
        children: He ? /* @__PURE__ */ s(He, { data: pt }) : /* @__PURE__ */ s(
          Gs,
          {
            data: pt,
            fetchRowDetails: i,
            config: (m == null ? void 0 : m.viewModal) || {}
          }
        )
      }
    )
  ] });
};
function Ks({ children: p }) {
  return Qc(), p;
}
function Vs({
  children: p
}) {
  try {
    return /* @__PURE__ */ s(Ks, { children: p });
  } catch {
    return /* @__PURE__ */ s(
      Uc,
      {
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right"
        },
        action: (n) => /* @__PURE__ */ s(
          "button",
          {
            onClick: () => {
              window.dispatchEvent(
                new CustomEvent("closeSnackbar", { detail: n })
              );
            },
            className: "p-1 hover:bg-white/20 rounded-full transition-colors duration-200 text-white flex items-center justify-center",
            children: /* @__PURE__ */ s(ma, { className: "h-4 w-4" })
          }
        ),
        maxSnack: 3,
        autoHideDuration: 3e3,
        children: p
      }
    );
  }
}
const Ws = () => {
  if (typeof document > "u" || document.getElementById("react-admin-crud-manager-styles")) return;
  const p = document.createElement("style");
  p.id = "react-admin-crud-manager-styles", p.textContent = Gc, document.head.appendChild(p);
};
function rd({ config: p }) {
  return Xe(() => {
    Ws();
  }, []), /* @__PURE__ */ s("div", { className: "racm-root", children: /* @__PURE__ */ s(Vs, { children: /* @__PURE__ */ s(Ys, { config: p }) }) });
}
export {
  rd as default
};
//# sourceMappingURL=index.es.js.map
