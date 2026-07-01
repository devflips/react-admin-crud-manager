import { jsx as s, Fragment as $e, jsxs as R } from "react/jsx-runtime";
import * as vr from "react";
import ya, { useState as le, useRef as Ct, useEffect as Ve, useCallback as Kc, useMemo as br } from "react";
import { Info as Vc, ChevronDown as Uo, Search as pn, Check as Wc, X as ja, User as hn, ArrowUpDown as qc, Plus as $c, EllipsisVertical as Eo, Filter as Jc, Download as Zc, ChevronLeft as Xc, ChevronRight as es, Music as ts } from "lucide-react";
import rs, { createPortal as fn } from "react-dom";
import { Icon as Bt } from "@iconify/react";
import { Editor as as } from "@tinymce/tinymce-react";
import { useSnackbar as oa, SnackbarProvider as ns } from "notistack";
const os = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";.racm-root *,.racm-root :before,.racm-root :after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}.racm-root :before,.racm-root :after{--tw-content: ""}.racm-root{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}.racm-root{margin:0;line-height:inherit}.racm-root hr{height:0;color:inherit;border-top-width:1px}.racm-root abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}.racm-root h1,.racm-root h2,.racm-root h3,.racm-root h4,.racm-root h5,.racm-root h6{font-size:inherit;font-weight:inherit}.racm-root a{color:inherit;text-decoration:inherit}.racm-root b,.racm-root strong{font-weight:bolder}.racm-root code,.racm-root kbd,.racm-root samp,.racm-root pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}.racm-root small{font-size:80%}.racm-root sub,.racm-root sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}.racm-root sub{bottom:-.25em}.racm-root sup{top:-.5em}.racm-root table{text-indent:0;border-color:inherit;border-collapse:collapse}.racm-root button,.racm-root input,.racm-root optgroup,.racm-root select,.racm-root textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}.racm-root button,.racm-root select{text-transform:none}.racm-root button,.racm-root [type=button],.racm-root [type=reset],.racm-root [type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}.racm-root :-moz-focusring{outline:auto}.racm-root :-moz-ui-invalid{box-shadow:none}.racm-root progress{vertical-align:baseline}.racm-root ::-webkit-inner-spin-button,.racm-root ::-webkit-outer-spin-button{height:auto}.racm-root [type=search]{-webkit-appearance:textfield;outline-offset:-2px}.racm-root ::-webkit-search-decoration{-webkit-appearance:none}.racm-root ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.racm-root summary{display:list-item}.racm-root blockquote,.racm-root dl,.racm-root dd,.racm-root h1,.racm-root h2,.racm-root h3,.racm-root h4,.racm-root h5,.racm-root h6,.racm-root hr,.racm-root figure,.racm-root p,.racm-root pre{margin:0}.racm-root fieldset{margin:0;padding:0}.racm-root legend{padding:0}.racm-root ol,.racm-root ul,.racm-root menu{list-style:none;margin:0;padding:0}.racm-root dialog{padding:0}.racm-root textarea{resize:vertical}.racm-root input::-moz-placeholder,.racm-root textarea::-moz-placeholder{opacity:1;color:#9ca3af}.racm-root input::placeholder,.racm-root textarea::placeholder{opacity:1;color:#9ca3af}.racm-root button,.racm-root [role=button]{cursor:pointer}.racm-root :disabled{cursor:default}.racm-root img,.racm-root svg,.racm-root video,.racm-root canvas,.racm-root audio,.racm-root iframe,.racm-root embed,.racm-root object{display:block;vertical-align:middle}.racm-root img,.racm-root video{max-width:100%;height:auto}.racm-root [hidden]{display:none}.racm-root{--background: 0 0% 100%;--foreground: 0 0% 3.9%;--card: 0 0% 100%;--card-foreground: 0 0% 3.9%;--popover: 0 0% 100%;--popover-foreground: 0 0% 3.9%;--primary: 0 0% 9%;--primary-foreground: 0 0% 98%;--secondary: 0 0% 96.1%;--secondary-foreground: 0 0% 9%;--muted: 0 0% 96.1%;--muted-foreground: 0 0% 45.1%;--accent: 0 0% 96.1%;--accent-foreground: 0 0% 9%;--destructive: 0 84.2% 60.2%;--destructive-foreground: 0 0% 98%;--border: 0 0% 89.8%;--input: 0 0% 89.8%;--ring: 0 0% 3.9%;--chart-1: 12 76% 61%;--chart-2: 173 58% 39%;--chart-3: 197 37% 24%;--chart-4: 43 74% 66%;--chart-5: 27 87% 67%;--radius: .5rem}.racm-root *{border-color:hsl(var(--border, 0 0% 89.8%))}.racm-root{background-color:hsl(var(--background, 0 0% 100%));color:hsl(var(--foreground, 0 0% 3.9%))}.racm-root *,.racm-root :before,.racm-root :after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.racm-root ::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.racm-root .container{width:100%}@media (min-width: 640px){.racm-root .container{max-width:640px}}@media (min-width: 768px){.racm-root .container{max-width:768px}}@media (min-width: 1024px){.racm-root .container{max-width:1024px}}@media (min-width: 1280px){.racm-root .container{max-width:1280px}}@media (min-width: 1536px){.racm-root .container{max-width:1536px}}.racm-root .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.racm-root .pointer-events-none{pointer-events:none}.racm-root .pointer-events-auto{pointer-events:auto}.racm-root .fixed{position:fixed}.racm-root .absolute{position:absolute}.racm-root .relative{position:relative}.racm-root .sticky{position:sticky}.racm-root .inset-0{top:0;right:0;bottom:0;left:0}.racm-root .inset-y-0{top:0;bottom:0}.racm-root .-bottom-4{bottom:-1rem}.racm-root .-right-2{right:-.5rem}.racm-root .-right-6{right:-1.5rem}.racm-root .-top-2{top:-.5rem}.racm-root .-top-6{top:-1.5rem}.racm-root .bottom-0{bottom:0}.racm-root .left-1{left:.25rem}.racm-root .left-1\\/2{left:50%}.racm-root .left-3{left:.75rem}.racm-root .right-0{right:0}.racm-root .right-1{right:.25rem}.racm-root .right-1\\/2{right:50%}.racm-root .right-2{right:.5rem}.racm-root .right-3{right:.75rem}.racm-root .right-4{right:1rem}.racm-root .right-\\[50\\%\\]{right:50%}.racm-root .top-0{top:0}.racm-root .top-1{top:.25rem}.racm-root .top-1\\/2{top:50%}.racm-root .top-2{top:.5rem}.racm-root .top-4{top:1rem}.racm-root .top-\\[80\\%\\]{top:80%}.racm-root .top-full{top:100%}.racm-root .z-10{z-index:10}.racm-root .z-20{z-index:20}.racm-root .z-40{z-index:40}.racm-root .z-50{z-index:50}.racm-root .col-span-12{grid-column:span 12 / span 12}.racm-root .col-span-6{grid-column:span 6 / span 6}.racm-root .mb-0{margin-bottom:0}.racm-root .mb-1{margin-bottom:.25rem}.racm-root .mb-3{margin-bottom:.75rem}.racm-root .mb-6{margin-bottom:1.5rem}.racm-root .ml-1{margin-left:.25rem}.racm-root .ml-2{margin-left:.5rem}.racm-root .mr-2{margin-right:.5rem}.racm-root .mt-1{margin-top:.25rem}.racm-root .mt-2{margin-top:.5rem}.racm-root .mt-4{margin-top:1rem}.racm-root .mt-auto{margin-top:auto}.racm-root .inline{display:inline}.racm-root .flex{display:flex}.racm-root .inline-flex{display:inline-flex}.racm-root .table{display:table}.racm-root .table-row{display:table-row}.racm-root .grid{display:grid}.racm-root .hidden{display:none}.racm-root .h-1{height:.25rem}.racm-root .h-10{height:2.5rem}.racm-root .h-11{height:2.75rem}.racm-root .h-12{height:3rem}.racm-root .h-16{height:4rem}.racm-root .h-2{height:.5rem}.racm-root .h-20{height:5rem}.racm-root .h-28{height:7rem}.racm-root .h-3{height:.75rem}.racm-root .h-32{height:8rem}.racm-root .h-4{height:1rem}.racm-root .h-5{height:1.25rem}.racm-root .h-6{height:1.5rem}.racm-root .h-64{height:16rem}.racm-root .h-7{height:1.75rem}.racm-root .h-72{height:18rem}.racm-root .h-8{height:2rem}.racm-root .h-9{height:2.25rem}.racm-root .h-\\[10px\\]{height:10px}.racm-root .h-\\[150px\\]{height:150px}.racm-root .h-\\[36px\\]{height:36px}.racm-root .h-\\[40px\\]{height:40px}.racm-root .h-full{height:100%}.racm-root .max-h-40{max-height:10rem}.racm-root .max-h-60{max-height:15rem}.racm-root .max-h-\\[250px\\]{max-height:250px}.racm-root .max-h-\\[260px\\]{max-height:260px}.racm-root .max-h-\\[90vh\\]{max-height:90vh}.racm-root .min-h-\\[52px\\]{min-height:52px}.racm-root .min-h-screen{min-height:100vh}.racm-root .w-1{width:.25rem}.racm-root .w-10{width:2.5rem}.racm-root .w-11{width:2.75rem}.racm-root .w-12{width:3rem}.racm-root .w-16{width:4rem}.racm-root .w-2{width:.5rem}.racm-root .w-20{width:5rem}.racm-root .w-24{width:6rem}.racm-root .w-3{width:.75rem}.racm-root .w-32{width:8rem}.racm-root .w-4{width:1rem}.racm-root .w-48{width:12rem}.racm-root .w-5{width:1.25rem}.racm-root .w-6{width:1.5rem}.racm-root .w-64{width:16rem}.racm-root .w-7{width:1.75rem}.racm-root .w-8{width:2rem}.racm-root .w-80{width:20rem}.racm-root .w-\\[260px\\]{width:260px}.racm-root .w-\\[36px\\]{width:36px}.racm-root .w-\\[42\\%\\]{width:42%}.racm-root .w-full{width:100%}.racm-root .w-max{width:-moz-max-content;width:max-content}.racm-root .w-px{width:1px}.racm-root .min-w-0{min-width:0px}.racm-root .min-w-\\[100px\\]{min-width:100px}.racm-root .min-w-\\[150px\\]{min-width:150px}.racm-root .min-w-\\[220px\\]{min-width:220px}.racm-root .min-w-\\[40px\\]{min-width:40px}.racm-root .min-w-\\[78px\\]{min-width:78px}.racm-root .max-w-2xl{max-width:42rem}.racm-root .max-w-4xl{max-width:56rem}.racm-root .max-w-5xl{max-width:64rem}.racm-root .max-w-\\[200px\\]{max-width:200px}.racm-root .max-w-\\[280px\\]{max-width:280px}.racm-root .max-w-\\[300px\\]{max-width:300px}.racm-root .max-w-full{max-width:100%}.racm-root .max-w-lg{max-width:32rem}.racm-root .max-w-md{max-width:28rem}.racm-root .max-w-xs{max-width:20rem}.racm-root .flex-1{flex:1 1 0%}.racm-root .flex-shrink{flex-shrink:1}.racm-root .flex-shrink-0,.racm-root .shrink-0{flex-shrink:0}.racm-root .border-collapse{border-collapse:collapse}.racm-root .-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .translate-x-0{--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .translate-x-full{--tw-translate-x: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .scale-95{--tw-scale-x: .95;--tw-scale-y: .95;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.racm-root .animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes spin{to{transform:rotate(360deg)}}.racm-root .animate-spin{animation:spin 1s linear infinite}.racm-root .cursor-not-allowed{cursor:not-allowed}.racm-root .cursor-pointer{cursor:pointer}.racm-root .select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.racm-root .resize{resize:both}.racm-root .grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.racm-root .grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.racm-root .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.racm-root .grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.racm-root .flex-col{flex-direction:column}.racm-root .flex-wrap{flex-wrap:wrap}.racm-root .items-center{align-items:center}.racm-root .items-stretch{align-items:stretch}.racm-root .justify-end{justify-content:flex-end}.racm-root .justify-center{justify-content:center}.racm-root .justify-between{justify-content:space-between}.racm-root .gap-1{gap:.25rem}.racm-root .gap-1\\.5{gap:.375rem}.racm-root .gap-2{gap:.5rem}.racm-root .gap-2\\.5{gap:.625rem}.racm-root .gap-3{gap:.75rem}.racm-root .gap-4{gap:1rem}.racm-root .gap-6{gap:1.5rem}.racm-root .-space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(-.5rem * var(--tw-space-x-reverse));margin-left:calc(-.5rem * calc(1 - var(--tw-space-x-reverse)))}.racm-root .space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.racm-root .space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.racm-root .space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.25rem * var(--tw-space-y-reverse))}.racm-root .space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.racm-root .space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.75rem * var(--tw-space-y-reverse))}.racm-root .space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.racm-root .divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse))}.racm-root .divide-gray-100>:not([hidden])~:not([hidden]){--tw-divide-opacity: 1;border-color:rgb(243 244 246 / var(--tw-divide-opacity))}.racm-root .overflow-auto{overflow:auto}.racm-root .overflow-hidden{overflow:hidden}.racm-root .overflow-x-auto{overflow-x:auto}.racm-root .overflow-y-auto{overflow-y:auto}.racm-root .truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.racm-root .text-ellipsis{text-overflow:ellipsis}.racm-root .whitespace-nowrap{white-space:nowrap}.racm-root .break-words{overflow-wrap:break-word}.racm-root .rounded{border-radius:.25rem}.racm-root .rounded-full{border-radius:9999px}.racm-root .rounded-lg{border-radius:var(--radius)}.racm-root .rounded-md{border-radius:calc(var(--radius) - 2px)}.racm-root .rounded-sm{border-radius:calc(var(--radius) - 4px)}.racm-root .rounded-xl{border-radius:.75rem}.racm-root .border{border-width:1px}.racm-root .border-2{border-width:2px}.racm-root .border-4{border-width:4px}.racm-root .border-8{border-width:8px}.racm-root .border-b{border-bottom-width:1px}.racm-root .border-b-2{border-bottom-width:2px}.racm-root .border-l{border-left-width:1px}.racm-root .border-r{border-right-width:1px}.racm-root .border-t{border-top-width:1px}.racm-root .border-t-2{border-top-width:2px}.racm-root .border-dashed{border-style:dashed}.racm-root .border-gray-100{--tw-border-opacity: 1;border-color:rgb(243 244 246 / var(--tw-border-opacity))}.racm-root .border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.racm-root .border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity))}.racm-root .border-gray-400{--tw-border-opacity: 1;border-color:rgb(156 163 175 / var(--tw-border-opacity))}.racm-root .border-green-300{--tw-border-opacity: 1;border-color:rgb(134 239 172 / var(--tw-border-opacity))}.racm-root .border-green-600{--tw-border-opacity: 1;border-color:rgb(22 163 74 / var(--tw-border-opacity))}.racm-root .border-primary{border-color:var(--primary-500, #3b82f6)}.racm-root .border-primary-300{border-color:var(--primary-300, #93c5fd)}.racm-root .border-primary-500{border-color:var(--primary-500, #3b82f6)}.racm-root .border-purple-300{--tw-border-opacity: 1;border-color:rgb(216 180 254 / var(--tw-border-opacity))}.racm-root .border-red-300{--tw-border-opacity: 1;border-color:rgb(252 165 165 / var(--tw-border-opacity))}.racm-root .border-red-500{--tw-border-opacity: 1;border-color:rgb(239 68 68 / var(--tw-border-opacity))}.racm-root .border-red-600{--tw-border-opacity: 1;border-color:rgb(220 38 38 / var(--tw-border-opacity))}.racm-root .border-teal-300{--tw-border-opacity: 1;border-color:rgb(94 234 212 / var(--tw-border-opacity))}.racm-root .border-white{--tw-border-opacity: 1;border-color:rgb(255 255 255 / var(--tw-border-opacity))}.racm-root .border-white\\/30{border-color:#ffffff4d}.racm-root .border-yellow-300{--tw-border-opacity: 1;border-color:rgb(253 224 71 / var(--tw-border-opacity))}.racm-root .border-t-gray-200{--tw-border-opacity: 1;border-top-color:rgb(229 231 235 / var(--tw-border-opacity))}.racm-root .border-t-transparent{border-top-color:transparent}.racm-root .border-t-white{--tw-border-opacity: 1;border-top-color:rgb(255 255 255 / var(--tw-border-opacity))}.racm-root .\\!bg-transparent{background-color:transparent!important}.racm-root .bg-black\\/50{background-color:#00000080}.racm-root .bg-black\\/70{background-color:#000000b3}.racm-root .bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.racm-root .bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.racm-root .bg-gray-300{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity))}.racm-root .bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.racm-root .bg-gray-500{--tw-bg-opacity: 1;background-color:rgb(107 114 128 / var(--tw-bg-opacity))}.racm-root .bg-gray-900{--tw-bg-opacity: 1;background-color:rgb(17 24 39 / var(--tw-bg-opacity))}.racm-root .bg-green-100{--tw-bg-opacity: 1;background-color:rgb(220 252 231 / var(--tw-bg-opacity))}.racm-root .bg-green-600{--tw-bg-opacity: 1;background-color:rgb(22 163 74 / var(--tw-bg-opacity))}.racm-root .bg-primary{background-color:var(--primary-500, #3b82f6)}.racm-root .bg-primary-100{background-color:var(--primary-100, #dbeafe)}.racm-root .bg-primary-50{background-color:var(--primary-50, #eff6ff)}.racm-root .bg-primary-600{background-color:var(--primary-600, #2563eb)}.racm-root .bg-purple-100{--tw-bg-opacity: 1;background-color:rgb(243 232 255 / var(--tw-bg-opacity))}.racm-root .bg-red-100{--tw-bg-opacity: 1;background-color:rgb(254 226 226 / var(--tw-bg-opacity))}.racm-root .bg-red-500{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.racm-root .bg-red-500\\/95{background-color:#ef4444f2}.racm-root .bg-red-600{--tw-bg-opacity: 1;background-color:rgb(220 38 38 / var(--tw-bg-opacity))}.racm-root .bg-teal-100{--tw-bg-opacity: 1;background-color:rgb(204 251 241 / var(--tw-bg-opacity))}.racm-root .bg-transparent{background-color:transparent}.racm-root .bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.racm-root .bg-white\\/20{background-color:#fff3}.racm-root .bg-white\\/90{background-color:#ffffffe6}.racm-root .bg-yellow-100{--tw-bg-opacity: 1;background-color:rgb(254 249 195 / var(--tw-bg-opacity))}.racm-root .bg-yellow-500{--tw-bg-opacity: 1;background-color:rgb(234 179 8 / var(--tw-bg-opacity))}.racm-root .bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}.racm-root .to-transparent{--tw-gradient-to: transparent var(--tw-gradient-to-position)}.racm-root .object-contain{-o-object-fit:contain;object-fit:contain}.racm-root .object-cover{-o-object-fit:cover;object-fit:cover}.racm-root .p-1{padding:.25rem}.racm-root .p-12{padding:3rem}.racm-root .p-2{padding:.5rem}.racm-root .p-3{padding:.75rem}.racm-root .p-4{padding:1rem}.racm-root .p-5{padding:1.25rem}.racm-root .p-6{padding:1.5rem}.racm-root .px-2{padding-left:.5rem;padding-right:.5rem}.racm-root .px-3{padding-left:.75rem;padding-right:.75rem}.racm-root .px-4{padding-left:1rem;padding-right:1rem}.racm-root .px-5{padding-left:1.25rem;padding-right:1.25rem}.racm-root .px-6{padding-left:1.5rem;padding-right:1.5rem}.racm-root .px-8{padding-left:2rem;padding-right:2rem}.racm-root .py-0{padding-top:0;padding-bottom:0}.racm-root .py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.racm-root .py-1{padding-top:.25rem;padding-bottom:.25rem}.racm-root .py-2{padding-top:.5rem;padding-bottom:.5rem}.racm-root .py-3{padding-top:.75rem;padding-bottom:.75rem}.racm-root .py-4{padding-top:1rem;padding-bottom:1rem}.racm-root .py-6{padding-top:1.5rem;padding-bottom:1.5rem}.racm-root .pl-9{padding-left:2.25rem}.racm-root .pr-10{padding-right:2.5rem}.racm-root .pr-2{padding-right:.5rem}.racm-root .pr-3{padding-right:.75rem}.racm-root .text-left{text-align:left}.racm-root .text-base{font-size:1rem;line-height:1.5rem}.racm-root .text-lg{font-size:1.125rem;line-height:1.75rem}.racm-root .text-sm{font-size:.875rem;line-height:1.25rem}.racm-root .text-xl{font-size:1.25rem;line-height:1.75rem}.racm-root .text-xs{font-size:.75rem;line-height:1rem}.racm-root .font-bold{font-weight:700}.racm-root .font-medium{font-weight:500}.racm-root .font-semibold{font-weight:600}.racm-root .uppercase{text-transform:uppercase}.racm-root .italic{font-style:italic}.racm-root .leading-none{line-height:1}.racm-root .leading-snug{line-height:1.375}.racm-root .leading-tight{line-height:1.25}.racm-root .tracking-wide{letter-spacing:.025em}.racm-root .tracking-wider{letter-spacing:.05em}.racm-root .text-black{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.racm-root .text-blue-500{--tw-text-opacity: 1;color:rgb(59 130 246 / var(--tw-text-opacity))}.racm-root .text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.racm-root .text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.racm-root .text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.racm-root .text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.racm-root .text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity))}.racm-root .text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.racm-root .text-green-500{--tw-text-opacity: 1;color:rgb(34 197 94 / var(--tw-text-opacity))}.racm-root .text-green-600{--tw-text-opacity: 1;color:rgb(22 163 74 / var(--tw-text-opacity))}.racm-root .text-green-700{--tw-text-opacity: 1;color:rgb(21 128 61 / var(--tw-text-opacity))}.racm-root .text-green-800{--tw-text-opacity: 1;color:rgb(22 101 52 / var(--tw-text-opacity))}.racm-root .text-primary{color:var(--primary-500, #3b82f6)}.racm-root .text-primary-600{color:var(--primary-600, #2563eb)}.racm-root .text-primary-700{color:var(--primary-700, #1d4ed8)}.racm-root .text-primary-800{color:var(--primary-800, #1e40af)}.racm-root .text-purple-500{--tw-text-opacity: 1;color:rgb(168 85 247 / var(--tw-text-opacity))}.racm-root .text-purple-700{--tw-text-opacity: 1;color:rgb(126 34 206 / var(--tw-text-opacity))}.racm-root .text-purple-800{--tw-text-opacity: 1;color:rgb(107 33 168 / var(--tw-text-opacity))}.racm-root .text-red-500{--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity))}.racm-root .text-red-600{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity))}.racm-root .text-red-700{--tw-text-opacity: 1;color:rgb(185 28 28 / var(--tw-text-opacity))}.racm-root .text-red-800{--tw-text-opacity: 1;color:rgb(153 27 27 / var(--tw-text-opacity))}.racm-root .text-teal-700{--tw-text-opacity: 1;color:rgb(15 118 110 / var(--tw-text-opacity))}.racm-root .text-teal-800{--tw-text-opacity: 1;color:rgb(17 94 89 / var(--tw-text-opacity))}.racm-root .text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.racm-root .text-yellow-700{--tw-text-opacity: 1;color:rgb(161 98 7 / var(--tw-text-opacity))}.racm-root .text-yellow-800{--tw-text-opacity: 1;color:rgb(133 77 14 / var(--tw-text-opacity))}.racm-root .underline{text-decoration-line:underline}.racm-root .placeholder-gray-400::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.racm-root .placeholder-gray-400::placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.racm-root .placeholder-gray-500::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(107 114 128 / var(--tw-placeholder-opacity))}.racm-root .placeholder-gray-500::placeholder{--tw-placeholder-opacity: 1;color:rgb(107 114 128 / var(--tw-placeholder-opacity))}.racm-root .opacity-100{opacity:1}.racm-root .opacity-50{opacity:.5}.racm-root .opacity-60{opacity:.6}.racm-root .opacity-70{opacity:.7}.racm-root .opacity-75{opacity:.75}.racm-root .opacity-90{opacity:.9}.racm-root .shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root .shadow-2xl{--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / .25);--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root .shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root .shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root .shadow-none{--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root .shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root .shadow-xl{--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root .outline-none{outline:2px solid transparent;outline-offset:2px}.racm-root .outline{outline-style:solid}.racm-root .ring-0{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.racm-root .ring-1{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.racm-root .ring-primary-100{--tw-ring-color: var(--primary-100, #dbeafe)}.racm-root .filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.racm-root .backdrop-blur-sm{--tw-backdrop-blur: blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.racm-root .transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.racm-root .transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.racm-root .transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.racm-root .transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.racm-root .transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.racm-root .duration-200{transition-duration:.2s}.racm-root .duration-300{transition-duration:.3s}.racm-root .ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.racm-root .primary-bg{background-color:var(--primary-500)}.racm-root .primary-bg-light{background-color:var(--primary-100)}.racm-root .primary-bg-dark{background-color:var(--primary-700)}.racm-root .primary-text{color:var(--primary-600)}.racm-root .primary-border{border-color:var(--primary-300)}.racm-root .primary-hover:hover{background-color:var(--primary-600)}.racm-root .opacity-0{opacity:0}.racm-root{--foreground-rgb: 0, 0, 0;--background-start-rgb: 214, 219, 220;--background-end-rgb: 255, 255, 255}@media (prefers-color-scheme: dark){.racm-root{--foreground-rgb: 255, 255, 255;--background-start-rgb: 0, 0, 0;--background-end-rgb: 0, 0, 0}}.racm-root{height:100%}.racm-root{--scrollbar-thumb: #d1d5db;--scrollbar-thumb-hover: #9ca3af}.racm-root .dark{--scrollbar-thumb: #4b5563;--scrollbar-thumb-hover: #6b7280}.racm-root *{scrollbar-width:thin;scrollbar-color:var(--scrollbar-thumb) transparent}.racm-root *::-webkit-scrollbar{width:6px;height:6px}.racm-root *::-webkit-scrollbar-track{background:transparent}.racm-root *::-webkit-scrollbar-thumb{background-color:var(--scrollbar-thumb);border-radius:3px}.racm-root *::-webkit-scrollbar-thumb:hover{background-color:var(--scrollbar-thumb-hover)}.racm-root h1{font-size:1.5rem;line-height:2rem;font-weight:700;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.racm-root :is(.dark h1){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.racm-root p{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.racm-root :is(.dark p){--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.racm-root .table-search-field{position:relative;width:100%}@media (min-width: 640px){.racm-root .table-search-field{min-width:300px!important}}.racm-root .table-search-field .search-icon{position:absolute;left:.75rem;top:50%;height:1rem;width:1rem;--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.racm-root :is(.dark .table-search-field .search-icon){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.racm-root .table-search-field input{height:36px;width:100%;border-radius:calc(var(--radius) - 2px);border-width:1px;--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity));padding:.75rem 1rem .75rem 2.25rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.racm-root .table-search-field input::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(107 114 128 / var(--tw-placeholder-opacity))}.racm-root .table-search-field input::placeholder{--tw-placeholder-opacity: 1;color:rgb(107 114 128 / var(--tw-placeholder-opacity))}.racm-root .table-search-field input:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-opacity: 1;--tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity))}.racm-root .table-search-field input:disabled{opacity:.5}.racm-root :is(.dark .table-search-field input){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.racm-root :is(.dark .table-search-field input)::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.racm-root :is(.dark .table-search-field input)::placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.racm-root :is(.dark .table-search-field input){--tw-ring-opacity: 1;--tw-ring-color: rgb(191 219 254 / var(--tw-ring-opacity))}.racm-root .filter-button-wrapper{position:relative;width:100%}@media (min-width: 640px){.racm-root .filter-button-wrapper{width:auto!important}}.racm-root .filter-button-wrapper .red-dot{position:absolute;top:.25rem;right:.25rem;height:.5rem;width:.5rem;border-radius:9999px;--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.racm-root .table-container{overflow:hidden;border-radius:var(--radius);border-width:1px;--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root :is(.dark .table-container){--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.racm-root .table-container table{min-width:100%}.racm-root .table-container table>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse));--tw-divide-opacity: 1;border-color:rgb(229 231 235 / var(--tw-divide-opacity))}.racm-root :is(.dark .table-container table)>:not([hidden])~:not([hidden]){--tw-divide-opacity: 1;border-color:rgb(55 65 81 / var(--tw-divide-opacity))}.racm-root .table-container thead{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.racm-root :is(.dark .table-container thead){background-color:#37415199}.racm-root .table-container tbody>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse));--tw-divide-opacity: 1;border-color:rgb(229 231 235 / var(--tw-divide-opacity))}.racm-root .table-container tbody{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.racm-root :is(.dark .table-container tbody)>:not([hidden])~:not([hidden]){--tw-divide-opacity: 1;border-color:rgb(55 65 81 / var(--tw-divide-opacity))}.racm-root :is(.dark .table-container tbody){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.racm-root .table-container .table-head-data{min-width:-moz-max-content;min-width:max-content;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:1rem 1.5rem;text-align:left;font-size:.75rem;line-height:1rem;font-weight:500;text-transform:uppercase;letter-spacing:.05em;--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.racm-root :is(.dark .table-container .table-head-data){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.racm-root .table-container .no-data-message{padding-top:2.5rem;padding-bottom:2.5rem;text-align:center;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.racm-root :is(.dark .table-container .no-data-message){--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.racm-root .table-container .table-row{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.racm-root .table-container .table-row:hover{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.racm-root :is(.dark .table-container .table-row:hover){background-color:#1e40af1a}.racm-root .table-container .table-data{min-width:-moz-max-content;min-width:max-content;padding:1rem 1.5rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.racm-root :is(.dark .table-container .table-data){--tw-text-opacity: 1;color:rgb(243 244 246 / var(--tw-text-opacity))}.racm-root .table-container .pagination-wrapper{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:.75rem;border-top-width:1px;--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity));padding:.75rem 1.5rem}.racm-root :is(.dark .table-container .pagination-wrapper){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity));background-color:#37415199}.racm-root .table-container .pagination-wrapper span{font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.racm-root :is(.dark .table-container .pagination-wrapper span){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.racm-root .table-container .pagination-wrapper .rows-number-select{border-radius:calc(var(--radius) - 2px);border-width:1px;--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:.25rem .5rem;font-size:.875rem;line-height:1.25rem}.racm-root .table-container .pagination-wrapper .rows-number-select:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-opacity: 1;--tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity))}.racm-root :is(.dark .table-container .pagination-wrapper .rows-number-select){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.racm-root .table-container .pagination-wrapper .arrow-icons{border-radius:calc(var(--radius) - 2px);padding:.5rem;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity));transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.racm-root .table-container .pagination-wrapper .arrow-icons:hover{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.racm-root .table-container .pagination-wrapper .arrow-icons:disabled{opacity:.5}.racm-root :is(.dark .table-container .pagination-wrapper .arrow-icons){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.racm-root :is(.dark .table-container .pagination-wrapper .arrow-icons:hover){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity))}.racm-root .no-spinner::-webkit-outer-spin-button,.racm-root .no-spinner::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.racm-root .no-spinner{-moz-appearance:textfield}.racm-root .tox.tox-tinymce .tox-edit-area:before{border:0!important;box-shadow:none!important}.racm-root .hover\\:-translate-y-0:hover{--tw-translate-y: -0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .hover\\:-translate-y-0\\.5:hover{--tw-translate-y: -.125rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .hover\\:bg-gray-100:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-gray-200:hover{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-gray-300:hover{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-gray-50:hover{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-green-50:hover{--tw-bg-opacity: 1;background-color:rgb(240 253 244 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-green-700:hover{--tw-bg-opacity: 1;background-color:rgb(21 128 61 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-primary-50:hover{background-color:var(--primary-50, #eff6ff)}.racm-root .hover\\:bg-primary-600:hover{background-color:var(--primary-600, #2563eb)}.racm-root .hover\\:bg-primary-700:hover{background-color:var(--primary-700, #1d4ed8)}.racm-root .hover\\:bg-red-50:hover{--tw-bg-opacity: 1;background-color:rgb(254 242 242 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-red-600:hover{--tw-bg-opacity: 1;background-color:rgb(220 38 38 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-red-700:hover{--tw-bg-opacity: 1;background-color:rgb(185 28 28 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-white:hover{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-white\\/20:hover{background-color:#fff3}.racm-root .hover\\:bg-yellow-600:hover{--tw-bg-opacity: 1;background-color:rgb(202 138 4 / var(--tw-bg-opacity))}.racm-root .hover\\:text-gray-600:hover{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.racm-root .hover\\:text-gray-800:hover{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity))}.racm-root .hover\\:shadow-md:hover{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root .focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.racm-root .focus\\:ring-1:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.racm-root .focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.racm-root .focus\\:ring-gray-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity))}.racm-root .focus\\:ring-green-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(34 197 94 / var(--tw-ring-opacity))}.racm-root .focus\\:ring-primary-200:focus{--tw-ring-color: var(--primary-200, #bfdbfe)}.racm-root .focus\\:ring-primary-300:focus{--tw-ring-color: var(--primary-300, #93c5fd)}.racm-root .focus\\:ring-primary-500:focus{--tw-ring-color: var(--primary-500, #3b82f6)}.racm-root .focus\\:ring-red-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(239 68 68 / var(--tw-ring-opacity))}.racm-root .focus\\:ring-offset-2:focus{--tw-ring-offset-width: 2px}.racm-root .focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.racm-root .focus-visible\\:ring-2:focus-visible{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.racm-root .focus-visible\\:ring-primary-400:focus-visible{--tw-ring-color: var(--primary-400, #60a5fa)}.racm-root .focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width: 2px}.racm-root .disabled\\:pointer-events-none:disabled{pointer-events:none}.racm-root .disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.racm-root .disabled\\:opacity-50:disabled{opacity:.5}.racm-root .disabled\\:opacity-60:disabled{opacity:.6}.racm-root .group:hover .group-hover\\:text-primary-600{color:var(--primary-600, #2563eb)}.racm-root .group:hover .group-hover\\:opacity-100{opacity:1}.racm-root .peer:checked~.peer-checked\\:translate-x-5{--tw-translate-x: 1.25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .peer:checked~.peer-checked\\:bg-primary-600{background-color:var(--primary-600, #2563eb)}.racm-root .peer:focus~.peer-focus\\:outline-none{outline:2px solid transparent;outline-offset:2px}.racm-root .peer:disabled~.peer-disabled\\:cursor-not-allowed{cursor:not-allowed}.racm-root .peer:disabled~.peer-disabled\\:opacity-50{opacity:.5}.racm-root :is(.dark .dark\\:divide-gray-800)>:not([hidden])~:not([hidden]){--tw-divide-opacity: 1;border-color:rgb(31 41 55 / var(--tw-divide-opacity))}.racm-root :is(.dark .dark\\:border-gray-600){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-gray-700){--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-gray-700\\/60){border-color:#37415199}.racm-root :is(.dark .dark\\:border-gray-800){--tw-border-opacity: 1;border-color:rgb(31 41 55 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-green-700){--tw-border-opacity: 1;border-color:rgb(21 128 61 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-primary-700){border-color:var(--primary-700, #1d4ed8)}.racm-root :is(.dark .dark\\:border-purple-700){--tw-border-opacity: 1;border-color:rgb(126 34 206 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-red-700){--tw-border-opacity: 1;border-color:rgb(185 28 28 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-teal-700){--tw-border-opacity: 1;border-color:rgb(15 118 110 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-yellow-700){--tw-border-opacity: 1;border-color:rgb(161 98 7 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:bg-black){--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:bg-black\\/80){background-color:#000c}.racm-root :is(.dark .dark\\:bg-gray-600){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:bg-gray-700){--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:bg-gray-800){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:bg-gray-800\\/80){background-color:#1f2937cc}.racm-root :is(.dark .dark\\:bg-gray-900){--tw-bg-opacity: 1;background-color:rgb(17 24 39 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:bg-gray-900\\/30){background-color:#1118274d}.racm-root :is(.dark .dark\\:bg-gray-950\\/80){background-color:#030712cc}.racm-root :is(.dark .dark\\:bg-green-900\\/30){background-color:#14532d4d}.racm-root :is(.dark .dark\\:bg-purple-900\\/30){background-color:#581c874d}.racm-root :is(.dark .dark\\:bg-red-900\\/30){background-color:#7f1d1d4d}.racm-root :is(.dark .dark\\:bg-teal-900\\/30){background-color:#134e4a4d}.racm-root :is(.dark .dark\\:bg-yellow-900\\/30){background-color:#713f124d}.racm-root :is(.dark .dark\\:text-gray-100){--tw-text-opacity: 1;color:rgb(243 244 246 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-gray-200){--tw-text-opacity: 1;color:rgb(229 231 235 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-gray-300){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-gray-400){--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-gray-500){--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-green-300){--tw-text-opacity: 1;color:rgb(134 239 172 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-primary){color:var(--primary-500, #3b82f6)}.racm-root :is(.dark .dark\\:text-primary-300){color:var(--primary-300, #93c5fd)}.racm-root :is(.dark .dark\\:text-primary-400){color:var(--primary-400, #60a5fa)}.racm-root :is(.dark .dark\\:text-purple-300){--tw-text-opacity: 1;color:rgb(216 180 254 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-red-300){--tw-text-opacity: 1;color:rgb(252 165 165 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-red-500){--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-teal-300){--tw-text-opacity: 1;color:rgb(94 234 212 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-white){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-yellow-300){--tw-text-opacity: 1;color:rgb(253 224 71 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:placeholder-gray-400)::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.racm-root :is(.dark .dark\\:placeholder-gray-400)::placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.racm-root :is(.dark .dark\\:hover\\:bg-gray-600:hover){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:hover\\:bg-gray-700:hover){--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:hover\\:bg-gray-800:hover){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:hover\\:text-gray-100:hover){--tw-text-opacity: 1;color:rgb(243 244 246 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:hover\\:text-gray-200:hover){--tw-text-opacity: 1;color:rgb(229 231 235 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:hover\\:text-gray-300:hover){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:focus\\:ring-gray-500:focus){--tw-ring-opacity: 1;--tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity))}.racm-root :is(.dark .dark\\:focus\\:ring-gray-600:focus){--tw-ring-opacity: 1;--tw-ring-color: rgb(75 85 99 / var(--tw-ring-opacity))}.racm-root :is(.dark .dark\\:focus\\:ring-primary-200:focus){--tw-ring-color: var(--primary-200, #bfdbfe)}.racm-root :is(.dark .dark\\:focus\\:ring-primary-400:focus){--tw-ring-color: var(--primary-400, #60a5fa)}.racm-root :is(.dark .dark\\:focus\\:ring-offset-gray-800:focus){--tw-ring-offset-color: #1f2937}.racm-root :is(.dark .group:hover .dark\\:group-hover\\:text-primary-400){color:var(--primary-400, #60a5fa)}@media (min-width: 640px){.racm-root .sm\\:\\!w-auto{width:auto!important}.racm-root .sm\\:w-\\[28rem\\]{width:28rem}.racm-root .sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.racm-root .sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.racm-root .sm\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.racm-root .sm\\:\\!flex-row{flex-direction:row!important}.racm-root .sm\\:\\!flex-wrap{flex-wrap:wrap!important}.racm-root .sm\\:\\!items-center{align-items:center!important}.racm-root .sm\\:\\!px-6{padding-left:1.5rem!important;padding-right:1.5rem!important}.racm-root .sm\\:opacity-0{opacity:0}.racm-root .group:hover .sm\\:group-hover\\:opacity-100{opacity:1}}@media (min-width: 1024px){.racm-root .lg\\:\\!w-auto{width:auto!important}.racm-root .lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.racm-root .lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.racm-root .lg\\:\\!flex-row{flex-direction:row!important}.racm-root .lg\\:\\!items-end{align-items:flex-end!important}.racm-root .lg\\:\\!justify-between{justify-content:space-between!important}}.racm-root .\\[\\&\\>svg\\]\\:h-3\\.5>svg{height:.875rem}.racm-root .\\[\\&\\>svg\\]\\:h-4>svg{height:1rem}.racm-root .\\[\\&\\>svg\\]\\:w-3\\.5>svg{width:.875rem}.racm-root .\\[\\&\\>svg\\]\\:w-4>svg{width:1rem}', en = (o, d = "DD MMM YYYY") => {
  if (!o) return "N/A";
  const n = new Date(o);
  if (isNaN(n.getTime())) return "Invalid Date";
  const i = (e) => String(e).padStart(2, "0"), l = {
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
    (e) => String(l[e])
  );
}, is = (o, d, n = []) => {
  if (!(d != null && d.trim())) return o;
  const i = d.toLowerCase(), l = (e) => e == null ? [] : typeof e == "object" ? Object.values(e).flatMap(l) : [String(e)];
  return o.filter((e) => {
    let v = [];
    return n.length > 0 ? n.forEach((c) => {
      e[c] !== void 0 && v.push(...l(e[c]));
    }) : v = l(e), v.some(
      (c) => c.toLowerCase().includes(i)
    );
  });
}, re = (...o) => o.filter(Boolean).join(" "), $ = {
  crudPage: {
    root: "crud_page",
    deleteContent: "crud_page_delete_content"
  },
  button: {
    root: "crud_button"
  },
  tabs: {
    root: "crud_tabs",
    tab: "crud_tabs_tab",
    count: "crud_tabs_count"
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
}, Yt = ya.forwardRef(
  ({
    className: o = "",
    variant: d = "contained",
    color: n = "default",
    size: i = "default",
    fullWidth: l = !1,
    children: e,
    ...v
  }, c) => {
    var K;
    const S = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", b = {
      sm: "h-8 px-3 rounded-md text-sm",
      md: "h-9 px-4 rounded-md text-sm",
      lg: "h-11 px-6 rounded-md text-base",
      xl: "h-12 px-8 rounded-lg text-lg",
      default: "h-9 px-4 rounded-md text-sm"
    }, N = {
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
    }, L = ((K = N[n]) == null ? void 0 : K[d]) || N.default.contained, C = b[i] || b.default, I = re(
      $.button.root,
      S,
      L,
      C,
      l ? "w-full" : "",
      o
    );
    return /* @__PURE__ */ s(
      "button",
      {
        ref: c,
        type: v.type || "button",
        className: I,
        ...v,
        children: e
      }
    );
  }
);
Yt.displayName = "Button";
function er({
  label: o,
  required: d = !1,
  infoText: n = ""
}) {
  return /* @__PURE__ */ s($e, { children: /* @__PURE__ */ R(
    "label",
    {
      className: re(
        $.field.label,
        "flex text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
      ),
      children: [
        o,
        d && /* @__PURE__ */ s("span", { className: "ml-1", children: "*" }),
        n && /* @__PURE__ */ R("span", { className: "ml-2 relative group inline-flex items-center cursor-pointer", children: [
          /* @__PURE__ */ s(Vc, { className: "w-4 h-4 text-gray-500 dark:text-gray-400" }),
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
const ba = [
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
], ls = ({
  options: o = [],
  value: d = "",
  defaultValue: n = "",
  onChange: i,
  placeholder: l = "Select option",
  className: e = "",
  disabled: v = !1,
  search: c = !1,
  label: S = "",
  required: b = !1,
  name: N = "",
  parentClass: L = "",
  multiple: C = !1,
  dropdownMaxHeight: I = "",
  formData: K = {},
  countriesList: H = !1,
  dependencyKey: ne = "",
  errorMessage: U = ""
}) => {
  var Ne, xe;
  const [G, T] = le(!1), [V, ce] = le(""), [ae, be] = le(!0), pe = Ct(null), te = Ct(null), se = Ct(null), [ee, Se] = le(
    []
  ), [Ie, ft] = le({
    top: 0,
    left: 0,
    width: 0
  }), it = typeof document < "u" ? ((Ne = pe.current) == null ? void 0 : Ne.closest(".racm-root")) || document.body : null, At = d || d === !1 ? d : n, ye = (ge) => ge == null || ge === "" ? "" : String(typeof ge == "boolean" ? ge : ge ?? ""), Ge = () => ba.map((ze) => ({
    value: ze.label,
    label: ze.label,
    code: ze.code
  }));
  Ve(
    () => {
      (async () => {
        if (H == !0)
          Se(Ge());
        else if (typeof o == "function") {
          const ze = await o(K);
          Se(ze || []);
        } else
          Se(o || []);
      })();
    },
    ne ? [o, K == null ? void 0 : K[ne]] : [o]
  );
  const Pe = C ? (At || []).map(ye) : ye(At), we = ee.filter(
    (ge) => ge.label.toLowerCase().includes(V.toLowerCase())
  ), ve = (ge) => {
    const ze = ye(ge);
    return C ? Pe.includes(ze) : ze === Pe;
  };
  Ve(() => {
    const ge = (ze) => {
      var St;
      pe.current && !pe.current.contains(ze.target) && !((St = te.current) != null && St.contains(ze.target)) && (T(!1), ce(""));
    };
    return document.addEventListener("mousedown", ge), () => document.removeEventListener("mousedown", ge);
  }, []), Ve(() => {
    if (!G || !pe.current) return;
    const ge = () => {
      if (!pe.current) return;
      const ze = pe.current.getBoundingClientRect(), et = window.innerHeight - ze.bottom < (typeof I == "number" ? I : 200);
      be(et), ft({
        top: et ? ze.top - 4 : ze.bottom + 4,
        left: ze.left,
        width: ze.width
      });
    };
    return ge(), window.addEventListener("resize", ge), window.addEventListener("scroll", ge, !0), () => {
      window.removeEventListener("resize", ge), window.removeEventListener("scroll", ge, !0);
    };
  }, [G]), Ve(() => {
    G && se.current && se.current.focus();
  }, [G]);
  const Ke = (ge) => {
    let ze = ge;
    if (ge === "true" ? ze = !0 : ge === "false" && (ze = !1), C) {
      const St = Array.isArray(d) ? d : [], Ee = St.some(
        (et) => ye(et) === ye(ge)
      );
      let Ue;
      Ee ? Ue = St.filter(
        (et) => ye(et) !== ye(ge)
      ) : Ue = [...St, ze], i == null || i(Ue);
    } else
      i == null || i(ze), T(!1);
    ce("");
  }, We = C ? ee.filter((ge) => ve(ge.value)).map((ge) => ge.label).join(", ") : (xe = ee.find((ge) => ve(ge.value))) == null ? void 0 : xe.label;
  return Ve(() => {
    (n || n === !1) && setTimeout(() => {
      i == null || i(n);
    }, 100);
  }, []), /* @__PURE__ */ R(
    "div",
    {
      className: re(
        $.field.wrapper,
        L || "col-span-12"
      ),
      children: [
        /* @__PURE__ */ s(er, { label: S, required: b }),
        /* @__PURE__ */ R(
          "div",
          {
            className: re($.field.input, "relative", e),
            ref: pe,
            children: [
              /* @__PURE__ */ s(
                "select",
                {
                  name: "hidden_select_for_validation",
                  value: C ? We ? We.split(", ") : [] : We || "",
                  required: b,
                  multiple: C,
                  id: `field-${N}`,
                  className: "absolute opacity-0 right-1/2 top-[80%] -translate-x-1/2 -translate-y-1/2 pointer-events-none h-[10px]",
                  onChange: () => {
                  },
                  children: C ? We == null ? void 0 : We.split(", ").map((ge) => /* @__PURE__ */ s("option", { value: ge, children: ge }, ge)) : /* @__PURE__ */ s("option", { hidden: !0, value: We, children: We })
                }
              ),
              /* @__PURE__ */ R(
                "button",
                {
                  type: "button",
                  onClick: () => !v && T(!G),
                  disabled: v,
                  className: `w-full h-10 px-3 border border-gray-300 dark:border-gray-600 rounded-md text-left text-sm flex items-center justify-between 
          ${We ? "dark:text-white" : "text-gray-500 dark:text-gray-400"} 
          ${v ? "opacity-50 cursor-not-allowed" : "dark:bg-gray-700"}
          ${U ? "border-red-500" : ""}`,
                  children: [
                    /* @__PURE__ */ s("span", { className: "truncate", children: We || l }),
                    /* @__PURE__ */ s(
                      Uo,
                      {
                        className: `w-4 h-4 transition-transform ${G ? "rotate-180" : ""}`
                      }
                    )
                  ]
                }
              ),
              G && it && fn(
                /* @__PURE__ */ R(
                  "div",
                  {
                    ref: te,
                    className: "fixed z-50 border rounded-md bg-white dark:bg-gray-700 shadow-lg",
                    style: {
                      top: Ie.top,
                      left: Ie.left,
                      width: Ie.width,
                      transform: ae ? "translateY(-100%)" : void 0
                    },
                    children: [
                      c && /* @__PURE__ */ s("div", { className: "p-2 border-b border-gray-200 dark:border-gray-600", children: /* @__PURE__ */ R("div", { className: "relative", children: [
                        /* @__PURE__ */ s(pn, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }),
                        /* @__PURE__ */ s(
                          "input",
                          {
                            ref: se,
                            type: "text",
                            value: V,
                            onChange: (ge) => ce(ge.target.value),
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
                            maxHeight: I || ""
                          },
                          children: we.length > 0 ? we.map((ge) => /* @__PURE__ */ R(
                            "button",
                            {
                              type: "button",
                              onClick: () => Ke(ge.value),
                              className: `w-full px-3 py-2 text-left text-sm flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 
                    ${ve(ge.value) ? "bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300" : ""}`,
                              children: [
                                /* @__PURE__ */ R("div", { className: "flex gap-2 items-center", children: [
                                  H && (ge == null ? void 0 : ge.code) && /* @__PURE__ */ s(
                                    "img",
                                    {
                                      src: `https://flagcdn.com/w20/${ge == null ? void 0 : ge.code.toLowerCase()}.png`,
                                      alt: ge.code,
                                      className: "w-5 h-3 object-cover"
                                    }
                                  ),
                                  /* @__PURE__ */ s("span", { children: ge.label })
                                ] }),
                                C && ve(ge.value) && /* @__PURE__ */ s(Wc, { className: "w-4 h-4" })
                              ]
                            },
                            String(ge.value)
                          )) : /* @__PURE__ */ s("div", { className: "px-3 py-2 text-sm text-gray-500 dark:text-gray-400", children: "No options found" })
                        }
                      )
                    ]
                  }
                ),
                it
              )
            ]
          }
        ),
        U && /* @__PURE__ */ s(
          "span",
          {
            className: re(
              $.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: U
          }
        )
      ]
    },
    N
  );
}, Qo = ya.forwardRef(
  ({
    label: o,
    required: d,
    parentClass: n = "col-span-12",
    className: i = "",
    value: l = !1,
    onChange: e,
    disabled: v = !1,
    errorMessage: c = "",
    name: S,
    ...b
  }, N) => (Ve(() => {
    let L;
    L = l || !1, setTimeout(() => {
      e == null || e(L);
    }, 100);
  }, []), /* @__PURE__ */ R(
    "div",
    {
      className: re(
        $.field.wrapper,
        "flex justify-between",
        n
      ),
      children: [
        o && /* @__PURE__ */ s(er, { label: o, required: d }),
        /* @__PURE__ */ R("label", { className: "relative inline-flex items-center cursor-pointer", children: [
          /* @__PURE__ */ s(
            "input",
            {
              type: "checkbox",
              ref: N,
              id: `field-${S}`,
              className: re($.field.input, "sr-only peer"),
              checked: l,
              onChange: (L) => e == null ? void 0 : e(L.target.checked),
              disabled: v,
              ...b
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
              ${c ? "border-red-500" : ""}
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
        c && /* @__PURE__ */ s(
          "span",
          {
            className: re(
              $.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: c
          }
        )
      ]
    }
  ))
);
Qo.displayName = "Switch";
function cs({
  label: o = "",
  value: d = "",
  name: n = "",
  parentClass: i = "",
  onChange: l,
  disabled: e = !1,
  required: v = !1,
  placeholder: c = "Phone number",
  search: S = !1,
  countriesList: b = !1,
  defaultCountry: N = "",
  errorMessage: L = ""
}) {
  var At;
  const C = (ye) => ba.find(
    (Ge) => Ge.code == ye
  ), [I, K] = le(
    C(N) || ba[0]
  ), [H, ne] = le(""), [U, G] = le(""), [T, V] = le(!1), [ce, ae] = le(""), be = Ct(null), pe = Ct(null), [te, se] = le({
    top: 0,
    left: 0,
    width: 0
  }), ee = typeof document < "u" ? ((At = be.current) == null ? void 0 : At.closest(".racm-root")) || document.body : null, Se = (ye, Ge) => {
    let Pe = "", we = 0;
    for (let ve = 0; ve < Ge.length && we < ye.length; ve++)
      Ge[ve] === "#" ? (Pe += ye[we], we++) : Pe += Ge[ve];
    return Pe;
  }, Ie = (ye) => {
    const Pe = ye.target.value.replace(/\D/g, "");
    if (b && (I != null && I.mask)) {
      const we = Se(Pe, I.mask);
      G(we), l == null || l("+" + I.phone + " " + we);
      const ve = we.replace(/\D/g, "");
      ne(ve);
    } else
      G(Pe), ne(Pe), I && l ? l("+" + I.phone + " " + Pe) : l == null || l(Pe);
  };
  Ve(() => {
    if (typeof d == "string" && d.startsWith("+")) {
      const ye = ba.filter((Ge) => d.startsWith("+" + Ge.phone)).sort((Ge, Pe) => Pe.phone.length - Ge.phone.length)[0];
      if (ye) {
        K(ye);
        let Ge = d.replace("+" + ye.phone, "").replaceAll(" ", "");
        ne(Ge), G(Se(Ge, ye.mask));
        return;
      }
    }
    ne(d || ""), G(d || "");
  }, []);
  const ft = (ye) => {
    K(ye), l && l("+" + ye.phone + " " + H), V(!1), ae("");
  };
  Ve(() => {
    const ye = (Ge) => {
      var Pe;
      be.current && !be.current.contains(Ge.target) && !((Pe = pe.current) != null && Pe.contains(Ge.target)) && V(!1);
    };
    return document.addEventListener("mousedown", ye), () => document.removeEventListener("mousedown", ye);
  }, []), Ve(() => {
    if (!T || !be.current) return;
    const ye = () => {
      if (!be.current) return;
      const Ge = be.current.getBoundingClientRect();
      se({
        top: Ge.bottom + 4,
        left: Ge.left,
        width: Ge.width
      });
    };
    return ye(), window.addEventListener("resize", ye), window.addEventListener("scroll", ye, !0), () => {
      window.removeEventListener("resize", ye), window.removeEventListener("scroll", ye, !0);
    };
  }, [T]);
  const it = ba.filter(
    (ye) => ye.label.toLowerCase().includes(ce.toLowerCase()) || ye.phone.includes(ce)
  );
  if (!b) {
    const ye = (Ge) => {
      const Pe = Ge.target.value.replace(/[^+\d]/g, ""), we = Pe.startsWith("+") ? "+" + Pe.replace(/[+]/g, "").slice(0) : Pe;
      l == null || l(we);
    };
    return /* @__PURE__ */ s($e, { children: /* @__PURE__ */ R(
      "div",
      {
        className: re(
          $.field.wrapper,
          i || "col-span-12"
        ),
        children: [
          /* @__PURE__ */ s(er, { label: o, required: v }),
          /* @__PURE__ */ s(
            "input",
            {
              type: "text",
              value: d,
              onChange: ye,
              placeholder: c,
              disabled: e,
              required: v,
              className: `w-full h-10 px-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md \r
        bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none \r
        focus:ring-1 focus:ring-primary-300 dark:focus:ring-primary-200`,
              inputMode: "tel",
              pattern: "^\\+\\d{1,15}$"
            }
          )
        ]
      },
      n
    ) });
  }
  return /* @__PURE__ */ s($e, { children: /* @__PURE__ */ R(
    "div",
    {
      className: re(
        $.field.wrapper,
        i || "col-span-12"
      ),
      children: [
        /* @__PURE__ */ s(er, { label: o, required: v }),
        /* @__PURE__ */ R("div", { className: "relative ", ref: be, children: [
          /* @__PURE__ */ R(
            "div",
            {
              className: `h-[40px] flex items-center border rounded-md px-2 bg-white dark:bg-gray-700 transition-all
  ${T ? "ring-0.5 ring-primary-100 border-primary-300" : "border-gray-300 dark:border-gray-600"}
  ${e ? "opacity-60 cursor-not-allowed" : ""}
    ${L ? "border-red-500" : ""}`,
              children: [
                /* @__PURE__ */ R(
                  "button",
                  {
                    type: "button",
                    disabled: e,
                    onClick: () => V(!T),
                    className: "flex items-center gap-1 pr-2 border-r border-gray-300 dark:border-gray-700 focus:outline-none",
                    children: [
                      I ? /* @__PURE__ */ s(
                        "img",
                        {
                          src: `https://flagcdn.com/w20/${I.code.toLowerCase()}.png`,
                          alt: I.code,
                          className: "w-5 h-3 object-cover"
                        }
                      ) : /* @__PURE__ */ s("span", { className: "text-gray-400 text-xs", children: "🌐" }),
                      /* @__PURE__ */ s(Uo, { className: "w-3 h-3 text-gray-500" })
                    ]
                  }
                ),
                I && /* @__PURE__ */ R("span", { className: "ml-2 text-sm text-gray-700 dark:text-gray-200 whitespace-nowrap", children: [
                  "+",
                  I.phone
                ] }),
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "tel",
                    value: U,
                    onChange: Ie,
                    required: v,
                    id: `field-${n}`,
                    disabled: e || !I,
                    placeholder: I ? c || "Enter phone number" : "Select a country",
                    className: "flex-1 ml-2 bg-transparent outline-none text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400"
                  }
                ),
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "tel",
                    required: v,
                    tabIndex: -1,
                    readOnly: !0,
                    value: I && H ? "+" + I.phone + H : "",
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
          T && ee && fn(
            /* @__PURE__ */ R(
              "div",
              {
                ref: pe,
                className: "fixed border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 shadow-lg z-50 max-h-60 overflow-y-auto",
                style: {
                  top: te.top,
                  left: te.left,
                  width: te.width
                },
                children: [
                  S && /* @__PURE__ */ s("div", { className: "p-2 border-b border-gray-200 dark:border-gray-700", children: /* @__PURE__ */ R("div", { className: "relative", children: [
                    /* @__PURE__ */ s(pn, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" }),
                    /* @__PURE__ */ s(
                      "input",
                      {
                        type: "text",
                        value: ce,
                        onChange: (ye) => ae(ye.target.value),
                        placeholder: "Search country...",
                        className: "w-full pl-9 pr-3 py-2 text-sm border rounded-md bg-white dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none "
                      }
                    )
                  ] }) }),
                  it.map((ye) => /* @__PURE__ */ R(
                    "button",
                    {
                      type: "button",
                      onClick: () => ft(ye),
                      className: "w-full flex items-center gap-2 px-2 py-1 text-sm hover:bg-primary-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100",
                      children: [
                        /* @__PURE__ */ s(
                          "img",
                          {
                            src: `https://flagcdn.com/w20/${ye.code.toLowerCase()}.png`,
                            alt: ye.code,
                            className: "w-5 h-3 object-cover"
                          }
                        ),
                        /* @__PURE__ */ R("span", { children: [
                          ye.label,
                          " (+",
                          ye.phone,
                          ")"
                        ] })
                      ]
                    },
                    ye.code
                  ))
                ]
              }
            ),
            ee
          )
        ] }),
        L && /* @__PURE__ */ s(
          "span",
          {
            className: re(
              $.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: L
          }
        )
      ]
    },
    n
  ) });
}
const Go = ya.forwardRef(
  ({ className: o = "", label: d, required: n, errorMessage: i = "", name: l, ...e }, v) => {
    const c = re(
      $.field.input,
      "placeholder-gray-400 dark:placeholder-gray-400",
      i ? "border-red-500" : "",
      o
    );
    return /* @__PURE__ */ s($e, { children: /* @__PURE__ */ R(
      "div",
      {
        className: re(
          $.field.wrapper,
          e.parentClass || "col-span-12"
        ),
        children: [
          /* @__PURE__ */ s(er, { label: d, required: n }),
          /* @__PURE__ */ R("div", { className: "relative", children: [
            /* @__PURE__ */ s(
              "textarea",
              {
                className: c,
                ref: v,
                id: `field-${l}`,
                required: n,
                ...e
              }
            ),
            i && /* @__PURE__ */ s(
              "span",
              {
                className: re(
                  $.field.error,
                  "text-red-500 text-xs mt-1"
                ),
                children: i
              }
            )
          ] })
        ]
      },
      l
    ) });
  }
);
Go.displayName = "TextArea";
var tn = function(o, d) {
  return tn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
    n.__proto__ = i;
  } || function(n, i) {
    for (var l in i) Object.prototype.hasOwnProperty.call(i, l) && (n[l] = i[l]);
  }, tn(o, d);
};
function ss(o, d) {
  if (typeof d != "function" && d !== null)
    throw new TypeError("Class extends value " + String(d) + " is not a constructor or null");
  tn(o, d);
  function n() {
    this.constructor = o;
  }
  o.prototype = d === null ? Object.create(d) : (n.prototype = d.prototype, new n());
}
var Pt = function() {
  return Pt = Object.assign || function(d) {
    for (var n, i = 1, l = arguments.length; i < l; i++) {
      n = arguments[i];
      for (var e in n) Object.prototype.hasOwnProperty.call(n, e) && (d[e] = n[e]);
    }
    return d;
  }, Pt.apply(this, arguments);
};
function Yo(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var Ao = !1, Ur, rn, an, La, Ra, Ko, Oa, nn, on, ln, Vo, cn, sn, Wo, qo;
function tr() {
  if (!Ao) {
    Ao = !0;
    var o = navigator.userAgent, d = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(o), n = /(Mac OS X)|(Windows)|(Linux)/.exec(o);
    if (cn = /\b(iPhone|iP[ao]d)/.exec(o), sn = /\b(iP[ao]d)/.exec(o), ln = /Android/i.exec(o), Wo = /FBAN\/\w+;/i.exec(o), qo = /Mobile/i.exec(o), Vo = !!/Win64/.exec(o), d) {
      Ur = d[1] ? parseFloat(d[1]) : d[5] ? parseFloat(d[5]) : NaN, Ur && document && document.documentMode && (Ur = document.documentMode);
      var i = /(?:Trident\/(\d+.\d+))/.exec(o);
      Ko = i ? parseFloat(i[1]) + 4 : Ur, rn = d[2] ? parseFloat(d[2]) : NaN, an = d[3] ? parseFloat(d[3]) : NaN, La = d[4] ? parseFloat(d[4]) : NaN, La ? (d = /(?:Chrome\/(\d+\.\d+))/.exec(o), Ra = d && d[1] ? parseFloat(d[1]) : NaN) : Ra = NaN;
    } else
      Ur = rn = an = Ra = La = NaN;
    if (n) {
      if (n[1]) {
        var l = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(o);
        Oa = l ? parseFloat(l[1].replace("_", ".")) : !0;
      } else
        Oa = !1;
      nn = !!n[2], on = !!n[3];
    } else
      Oa = nn = on = !1;
  }
}
var dn = {
  /**
   *  Check if the UA is Internet Explorer.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  ie: function() {
    return tr() || Ur;
  },
  /**
   * Check if we're in Internet Explorer compatibility mode.
   *
   * @return bool true if in compatibility mode, false if
   * not compatibility mode or not ie
   */
  ieCompatibilityMode: function() {
    return tr() || Ko > Ur;
  },
  /**
   * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
   * only need this because Skype can't handle 64-bit IE yet.  We need to remove
   * this when we don't need it -- tracked by #601957.
   */
  ie64: function() {
    return dn.ie() && Vo;
  },
  /**
   *  Check if the UA is Firefox.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  firefox: function() {
    return tr() || rn;
  },
  /**
   *  Check if the UA is Opera.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  opera: function() {
    return tr() || an;
  },
  /**
   *  Check if the UA is WebKit.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  webkit: function() {
    return tr() || La;
  },
  /**
   *  For Push
   *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
   */
  safari: function() {
    return dn.webkit();
  },
  /**
   *  Check if the UA is a Chrome browser.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  chrome: function() {
    return tr() || Ra;
  },
  /**
   *  Check if the user is running Windows.
   *
   *  @return bool `true' if the user's OS is Windows.
   */
  windows: function() {
    return tr() || nn;
  },
  /**
   *  Check if the user is running Mac OS X.
   *
   *  @return float|bool   Returns a float if a version number is detected,
   *                       otherwise true/false.
   */
  osx: function() {
    return tr() || Oa;
  },
  /**
   * Check if the user is running Linux.
   *
   * @return bool `true' if the user's OS is some flavor of Linux.
   */
  linux: function() {
    return tr() || on;
  },
  /**
   * Check if the user is running on an iPhone or iPod platform.
   *
   * @return bool `true' if the user is running some flavor of the
   *    iPhone OS.
   */
  iphone: function() {
    return tr() || cn;
  },
  mobile: function() {
    return tr() || cn || sn || ln || qo;
  },
  nativeApp: function() {
    return tr() || Wo;
  },
  android: function() {
    return tr() || ln;
  },
  ipad: function() {
    return tr() || sn;
  }
}, ds = dn, us = !!(typeof window < "u" && window.document && window.document.createElement), ms = {
  canUseDOM: us
}, ps = ms, $o = ps, Jo;
$o.canUseDOM && (Jo = document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
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
function hs(o, d) {
  if (!$o.canUseDOM || d && !("addEventListener" in document))
    return !1;
  var n = "on" + o, i = n in document;
  if (!i) {
    var l = document.createElement("div");
    l.setAttribute(n, "return;"), i = typeof l[n] == "function";
  }
  return !i && Jo && o === "wheel" && (i = document.implementation.hasFeature("Events.wheel", "3.0")), i;
}
var fs = hs, gs = ds, vs = fs, Co = 10, So = 40, Io = 800;
function Zo(o) {
  var d = 0, n = 0, i = 0, l = 0;
  return "detail" in o && (n = o.detail), "wheelDelta" in o && (n = -o.wheelDelta / 120), "wheelDeltaY" in o && (n = -o.wheelDeltaY / 120), "wheelDeltaX" in o && (d = -o.wheelDeltaX / 120), "axis" in o && o.axis === o.HORIZONTAL_AXIS && (d = n, n = 0), i = d * Co, l = n * Co, "deltaY" in o && (l = o.deltaY), "deltaX" in o && (i = o.deltaX), (i || l) && o.deltaMode && (o.deltaMode == 1 ? (i *= So, l *= So) : (i *= Io, l *= Io)), i && !d && (d = i < 1 ? -1 : 1), l && !n && (n = l < 1 ? -1 : 1), {
    spinX: d,
    spinY: n,
    pixelX: i,
    pixelY: l
  };
}
Zo.getEventType = function() {
  return gs.firefox() ? "DOMMouseScroll" : vs("wheel") ? "wheel" : "mousewheel";
};
var bs = Zo, ys = bs;
const ws = /* @__PURE__ */ Yo(ys);
function xs(o, d, n, i, l, e) {
  e === void 0 && (e = 0);
  var v = na(o, d, e), c = v.width, S = v.height, b = Math.min(c, n), N = Math.min(S, i);
  return b > N * l ? {
    width: N * l,
    height: N
  } : {
    width: b,
    height: b / l
  };
}
function _s(o) {
  return o.width > o.height ? o.width / o.naturalWidth : o.height / o.naturalHeight;
}
function va(o, d, n, i, l) {
  l === void 0 && (l = 0);
  var e = na(d.width, d.height, l), v = e.width, c = e.height;
  return {
    x: No(o.x, v, n.width, i),
    y: No(o.y, c, n.height, i)
  };
}
function No(o, d, n, i) {
  var l = Math.abs(d * i / 2 - n / 2);
  return za(o, -l, l);
}
function Mo(o, d) {
  return Math.sqrt(Math.pow(o.y - d.y, 2) + Math.pow(o.x - d.x, 2));
}
function Lo(o, d) {
  return Math.atan2(d.y - o.y, d.x - o.x) * 180 / Math.PI;
}
function ks(o, d, n, i, l, e, v) {
  e === void 0 && (e = 0), v === void 0 && (v = !0);
  var c = v ? Es : As, S = na(d.width, d.height, e), b = na(d.naturalWidth, d.naturalHeight, e), N = {
    x: c(100, ((S.width - n.width / l) / 2 - o.x / l) / S.width * 100),
    y: c(100, ((S.height - n.height / l) / 2 - o.y / l) / S.height * 100),
    width: c(100, n.width / S.width * 100 / l),
    height: c(100, n.height / S.height * 100 / l)
  }, L = Math.round(c(b.width, N.width * b.width / 100)), C = Math.round(c(b.height, N.height * b.height / 100)), I = b.width >= b.height * i, K = I ? {
    width: Math.round(C * i),
    height: C
  } : {
    width: L,
    height: Math.round(L / i)
  }, H = Pt(Pt({}, K), {
    x: Math.round(c(b.width - K.width, N.x * b.width / 100)),
    y: Math.round(c(b.height - K.height, N.y * b.height / 100))
  });
  return {
    croppedAreaPercentages: N,
    croppedAreaPixels: H
  };
}
function Es(o, d) {
  return Math.min(o, Math.max(0, d));
}
function As(o, d) {
  return d;
}
function Cs(o, d, n, i, l, e) {
  var v = na(d.width, d.height, n), c = za(i.width / v.width * (100 / o.width), l, e), S = {
    x: c * v.width / 2 - i.width / 2 - v.width * c * (o.x / 100),
    y: c * v.height / 2 - i.height / 2 - v.height * c * (o.y / 100)
  };
  return {
    crop: S,
    zoom: c
  };
}
function Ss(o, d, n) {
  var i = _s(d);
  return n.height > n.width ? n.height / (o.height * i) : n.width / (o.width * i);
}
function Is(o, d, n, i, l, e) {
  n === void 0 && (n = 0);
  var v = na(d.naturalWidth, d.naturalHeight, n), c = za(Ss(o, d, i), l, e), S = i.height > i.width ? i.height / o.height : i.width / o.width, b = {
    x: ((v.width - o.width) / 2 - o.x) * S,
    y: ((v.height - o.height) / 2 - o.y) * S
  };
  return {
    crop: b,
    zoom: c
  };
}
function Ro(o, d) {
  return {
    x: (d.x + o.x) / 2,
    y: (d.y + o.y) / 2
  };
}
function Ns(o) {
  return o * Math.PI / 180;
}
function na(o, d, n) {
  var i = Ns(n);
  return {
    width: Math.abs(Math.cos(i) * o) + Math.abs(Math.sin(i) * d),
    height: Math.abs(Math.sin(i) * o) + Math.abs(Math.cos(i) * d)
  };
}
function za(o, d, n) {
  return Math.min(Math.max(o, d), n);
}
function Sa() {
  for (var o = [], d = 0; d < arguments.length; d++)
    o[d] = arguments[d];
  return o.filter(function(n) {
    return typeof n == "string" && n.length > 0;
  }).join(" ").trim();
}
var Ms = `.reactEasyCrop_Container {
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
`, Ls = 1, Rs = 3, Os = 1, Ds = (
  /** @class */
  function(o) {
    ss(d, o);
    function d() {
      var n = o !== null && o.apply(this, arguments) || this;
      return n.cropperRef = vr.createRef(), n.imageRef = vr.createRef(), n.videoRef = vr.createRef(), n.containerPosition = {
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
          n.resizeObserver = new window.ResizeObserver(function(l) {
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
          var l = Cs(n.props.initialCroppedAreaPercentages, n.mediaSize, n.props.rotation, i, n.props.minZoom, n.props.maxZoom), e = l.crop, v = l.zoom;
          n.props.onCropChange(e), n.props.onZoomChange && n.props.onZoomChange(v);
        } else if (n.props.initialCroppedAreaPixels) {
          var c = Is(n.props.initialCroppedAreaPixels, n.mediaSize, n.props.rotation, i, n.props.minZoom, n.props.maxZoom), e = c.crop, v = c.zoom;
          n.props.onCropChange(e), n.props.onZoomChange && n.props.onZoomChange(v);
        }
      }, n.computeSizes = function() {
        var i, l, e, v, c, S, b = n.imageRef.current || n.videoRef.current;
        if (b && n.containerRef) {
          n.containerRect = n.containerRef.getBoundingClientRect(), n.saveContainerPosition();
          var N = n.containerRect.width / n.containerRect.height, L = ((i = n.imageRef.current) === null || i === void 0 ? void 0 : i.naturalWidth) || ((l = n.videoRef.current) === null || l === void 0 ? void 0 : l.videoWidth) || 0, C = ((e = n.imageRef.current) === null || e === void 0 ? void 0 : e.naturalHeight) || ((v = n.videoRef.current) === null || v === void 0 ? void 0 : v.videoHeight) || 0, I = b.offsetWidth < L || b.offsetHeight < C, K = L / C, H = void 0;
          if (I)
            switch (n.state.mediaObjectFit) {
              default:
              case "contain":
                H = N > K ? {
                  width: n.containerRect.height * K,
                  height: n.containerRect.height
                } : {
                  width: n.containerRect.width,
                  height: n.containerRect.width / K
                };
                break;
              case "horizontal-cover":
                H = {
                  width: n.containerRect.width,
                  height: n.containerRect.width / K
                };
                break;
              case "vertical-cover":
                H = {
                  width: n.containerRect.height * K,
                  height: n.containerRect.height
                };
                break;
            }
          else
            H = {
              width: b.offsetWidth,
              height: b.offsetHeight
            };
          n.mediaSize = Pt(Pt({}, H), {
            naturalWidth: L,
            naturalHeight: C
          }), n.props.setMediaSize && n.props.setMediaSize(n.mediaSize);
          var ne = n.props.cropSize ? n.props.cropSize : xs(n.mediaSize.width, n.mediaSize.height, n.containerRect.width, n.containerRect.height, n.props.aspect, n.props.rotation);
          return (((c = n.state.cropSize) === null || c === void 0 ? void 0 : c.height) !== ne.height || ((S = n.state.cropSize) === null || S === void 0 ? void 0 : S.width) !== ne.width) && n.props.onCropSizeChange && n.props.onCropSizeChange(ne), n.setState({
            cropSize: ne
          }, n.recomputeCropPosition), n.props.setCropSize && n.props.setCropSize(ne), ne;
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
        n.currentDoc && (i.preventDefault(), n.currentDoc.addEventListener("mousemove", n.onMouseMove), n.currentDoc.addEventListener("mouseup", n.onDragStopped), n.saveContainerPosition(), n.onDragStart(d.getMousePoint(i)));
      }, n.onMouseMove = function(i) {
        return n.onDrag(d.getMousePoint(i));
      }, n.onScroll = function(i) {
        n.currentDoc && (i.preventDefault(), n.saveContainerPosition());
      }, n.onTouchStart = function(i) {
        n.currentDoc && (n.isTouching = !0, !(n.props.onTouchRequest && !n.props.onTouchRequest(i)) && (n.currentDoc.addEventListener("touchmove", n.onTouchMove, {
          passive: !1
        }), n.currentDoc.addEventListener("touchend", n.onDragStopped), n.saveContainerPosition(), i.touches.length === 2 ? n.onPinchStart(i) : i.touches.length === 1 && n.onDragStart(d.getTouchPoint(i.touches[0]))));
      }, n.onTouchMove = function(i) {
        i.preventDefault(), i.touches.length === 2 ? n.onPinchMove(i) : i.touches.length === 1 && n.onDrag(d.getTouchPoint(i.touches[0]));
      }, n.onGestureStart = function(i) {
        n.currentDoc && (i.preventDefault(), n.currentDoc.addEventListener("gesturechange", n.onGestureChange), n.currentDoc.addEventListener("gestureend", n.onGestureEnd), n.gestureZoomStart = n.props.zoom, n.gestureRotationStart = n.props.rotation);
      }, n.onGestureChange = function(i) {
        if (i.preventDefault(), !n.isTouching) {
          var l = d.getMousePoint(i), e = n.gestureZoomStart - 1 + i.scale;
          if (n.setNewZoom(e, l, {
            shouldUpdatePosition: !0
          }), n.props.onRotationChange) {
            var v = n.gestureRotationStart + i.rotation;
            n.props.onRotationChange(v);
          }
        }
      }, n.onGestureEnd = function(i) {
        n.cleanEvents();
      }, n.onDragStart = function(i) {
        var l, e, v = i.x, c = i.y;
        n.dragStartPosition = {
          x: v,
          y: c
        }, n.dragStartCrop = Pt({}, n.props.crop), (e = (l = n.props).onInteractionStart) === null || e === void 0 || e.call(l);
      }, n.onDrag = function(i) {
        var l = i.x, e = i.y;
        n.currentWindow && (n.rafDragTimeout && n.currentWindow.cancelAnimationFrame(n.rafDragTimeout), n.rafDragTimeout = n.currentWindow.requestAnimationFrame(function() {
          if (n.state.cropSize && !(l === void 0 || e === void 0)) {
            var v = l - n.dragStartPosition.x, c = e - n.dragStartPosition.y, S = {
              x: n.dragStartCrop.x + v,
              y: n.dragStartCrop.y + c
            }, b = n.props.restrictPosition ? va(S, n.mediaSize, n.state.cropSize, n.props.zoom, n.props.rotation) : S;
            n.props.onCropChange(b);
          }
        }));
      }, n.onDragStopped = function() {
        var i, l;
        n.isTouching = !1, n.cleanEvents(), n.emitCropData(), (l = (i = n.props).onInteractionEnd) === null || l === void 0 || l.call(i);
      }, n.onWheel = function(i) {
        if (n.currentWindow && !(n.props.onWheelRequest && !n.props.onWheelRequest(i))) {
          i.preventDefault();
          var l = d.getMousePoint(i), e = ws(i).pixelY, v = n.props.zoom - e * n.props.zoomSpeed / 200;
          n.setNewZoom(v, l, {
            shouldUpdatePosition: !0
          }), n.state.hasWheelJustStarted || n.setState({
            hasWheelJustStarted: !0
          }, function() {
            var c, S;
            return (S = (c = n.props).onInteractionStart) === null || S === void 0 ? void 0 : S.call(c);
          }), n.wheelTimer && clearTimeout(n.wheelTimer), n.wheelTimer = n.currentWindow.setTimeout(function() {
            return n.setState({
              hasWheelJustStarted: !1
            }, function() {
              var c, S;
              return (S = (c = n.props).onInteractionEnd) === null || S === void 0 ? void 0 : S.call(c);
            });
          }, 250);
        }
      }, n.getPointOnContainer = function(i, l) {
        var e = i.x, v = i.y;
        if (!n.containerRect)
          throw new Error("The Cropper is not mounted");
        return {
          x: n.containerRect.width / 2 - (e - l.x),
          y: n.containerRect.height / 2 - (v - l.y)
        };
      }, n.getPointOnMedia = function(i) {
        var l = i.x, e = i.y, v = n.props, c = v.crop, S = v.zoom;
        return {
          x: (l + c.x) / S,
          y: (e + c.y) / S
        };
      }, n.setNewZoom = function(i, l, e) {
        var v = e === void 0 ? {} : e, c = v.shouldUpdatePosition, S = c === void 0 ? !0 : c;
        if (!(!n.state.cropSize || !n.props.onZoomChange)) {
          var b = za(i, n.props.minZoom, n.props.maxZoom);
          if (S) {
            var N = n.getPointOnContainer(l, n.containerPosition), L = n.getPointOnMedia(N), C = {
              x: L.x * b - N.x,
              y: L.y * b - N.y
            }, I = n.props.restrictPosition ? va(C, n.mediaSize, n.state.cropSize, b, n.props.rotation) : C;
            n.props.onCropChange(I);
          }
          n.props.onZoomChange(b);
        }
      }, n.getCropData = function() {
        if (!n.state.cropSize)
          return null;
        var i = n.props.restrictPosition ? va(n.props.crop, n.mediaSize, n.state.cropSize, n.props.zoom, n.props.rotation) : n.props.crop;
        return ks(i, n.mediaSize, n.state.cropSize, n.getAspect(), n.props.zoom, n.props.rotation, n.props.restrictPosition);
      }, n.emitCropData = function() {
        var i = n.getCropData();
        if (i) {
          var l = i.croppedAreaPercentages, e = i.croppedAreaPixels;
          n.props.onCropComplete && n.props.onCropComplete(l, e), n.props.onCropAreaChange && n.props.onCropAreaChange(l, e);
        }
      }, n.emitCropAreaChange = function() {
        var i = n.getCropData();
        if (i) {
          var l = i.croppedAreaPercentages, e = i.croppedAreaPixels;
          n.props.onCropAreaChange && n.props.onCropAreaChange(l, e);
        }
      }, n.recomputeCropPosition = function() {
        var i, l;
        if (n.state.cropSize) {
          var e = n.props.crop;
          if (n.isInitialized && (!((i = n.previousCropSize) === null || i === void 0) && i.width) && (!((l = n.previousCropSize) === null || l === void 0) && l.height)) {
            var v = Math.abs(n.previousCropSize.width - n.state.cropSize.width) > 1e-6 || Math.abs(n.previousCropSize.height - n.state.cropSize.height) > 1e-6;
            if (v) {
              var c = n.state.cropSize.width / n.previousCropSize.width, S = n.state.cropSize.height / n.previousCropSize.height;
              e = {
                x: n.props.crop.x * c,
                y: n.props.crop.y * S
              };
            }
          }
          var b = n.props.restrictPosition ? va(e, n.mediaSize, n.state.cropSize, n.props.zoom, n.props.rotation) : e;
          n.previousCropSize = n.state.cropSize, n.props.onCropChange(b), n.emitCropData();
        }
      }, n.onKeyDown = function(i) {
        var l, e, v = n.props, c = v.crop, S = v.onCropChange, b = v.keyboardStep, N = v.zoom, L = v.rotation, C = b;
        if (n.state.cropSize) {
          i.shiftKey && (C *= 0.2);
          var I = Pt({}, c);
          switch (i.key) {
            case "ArrowUp":
              I.y -= C, i.preventDefault();
              break;
            case "ArrowDown":
              I.y += C, i.preventDefault();
              break;
            case "ArrowLeft":
              I.x -= C, i.preventDefault();
              break;
            case "ArrowRight":
              I.x += C, i.preventDefault();
              break;
            default:
              return;
          }
          n.props.restrictPosition && (I = va(I, n.mediaSize, n.state.cropSize, N, L)), i.repeat || (e = (l = n.props).onInteractionStart) === null || e === void 0 || e.call(l), S(I);
        }
      }, n.onKeyUp = function(i) {
        var l, e;
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
        n.emitCropData(), (e = (l = n.props).onInteractionEnd) === null || e === void 0 || e.call(l);
      }, n;
    }
    return d.prototype.componentDidMount = function() {
      !this.currentDoc || !this.currentWindow || (this.containerRef && (this.containerRef.ownerDocument && (this.currentDoc = this.containerRef.ownerDocument), this.currentDoc.defaultView && (this.currentWindow = this.currentDoc.defaultView), this.initResizeObserver(), typeof window.ResizeObserver > "u" && this.currentWindow.addEventListener("resize", this.computeSizes), this.props.zoomWithScroll && this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }), this.containerRef.addEventListener("gesturestart", this.onGestureStart)), this.currentDoc.addEventListener("scroll", this.onScroll), this.props.disableAutomaticStylesInjection || (this.styleRef = this.currentDoc.createElement("style"), this.styleRef.setAttribute("type", "text/css"), this.props.nonce && this.styleRef.setAttribute("nonce", this.props.nonce), this.styleRef.innerHTML = Ms, this.currentDoc.head.appendChild(this.styleRef)), this.imageRef.current && this.imageRef.current.complete && this.onMediaLoad(), this.props.setImageRef && this.props.setImageRef(this.imageRef), this.props.setVideoRef && this.props.setVideoRef(this.videoRef), this.props.setCropperRef && this.props.setCropperRef(this.cropperRef));
    }, d.prototype.componentWillUnmount = function() {
      var n, i;
      !this.currentDoc || !this.currentWindow || (typeof window.ResizeObserver > "u" && this.currentWindow.removeEventListener("resize", this.computeSizes), (n = this.resizeObserver) === null || n === void 0 || n.disconnect(), this.containerRef && this.containerRef.removeEventListener("gesturestart", this.preventZoomSafari), this.styleRef && ((i = this.styleRef.parentNode) === null || i === void 0 || i.removeChild(this.styleRef)), this.cleanEvents(), this.props.zoomWithScroll && this.clearScrollEvent());
    }, d.prototype.componentDidUpdate = function(n) {
      var i, l, e, v, c, S, b, N, L;
      n.rotation !== this.props.rotation ? (this.computeSizes(), this.recomputeCropPosition()) : n.aspect !== this.props.aspect ? this.computeSizes() : n.objectFit !== this.props.objectFit ? this.computeSizes() : n.zoom !== this.props.zoom ? this.recomputeCropPosition() : ((i = n.cropSize) === null || i === void 0 ? void 0 : i.height) !== ((l = this.props.cropSize) === null || l === void 0 ? void 0 : l.height) || ((e = n.cropSize) === null || e === void 0 ? void 0 : e.width) !== ((v = this.props.cropSize) === null || v === void 0 ? void 0 : v.width) ? this.computeSizes() : (((c = n.crop) === null || c === void 0 ? void 0 : c.x) !== ((S = this.props.crop) === null || S === void 0 ? void 0 : S.x) || ((b = n.crop) === null || b === void 0 ? void 0 : b.y) !== ((N = this.props.crop) === null || N === void 0 ? void 0 : N.y)) && this.emitCropAreaChange(), n.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef && (this.props.zoomWithScroll ? this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }) : this.clearScrollEvent()), n.video !== this.props.video && ((L = this.videoRef.current) === null || L === void 0 || L.load());
      var C = this.getObjectFit();
      C !== this.state.mediaObjectFit && this.setState({
        mediaObjectFit: C
      }, this.computeSizes);
    }, d.prototype.getAspect = function() {
      var n = this.props, i = n.cropSize, l = n.aspect;
      return i ? i.width / i.height : l;
    }, d.prototype.getObjectFit = function() {
      var n, i, l, e;
      if (this.props.objectFit === "cover") {
        var v = this.imageRef.current || this.videoRef.current;
        if (v && this.containerRef) {
          this.containerRect = this.containerRef.getBoundingClientRect();
          var c = this.containerRect.width / this.containerRect.height, S = ((n = this.imageRef.current) === null || n === void 0 ? void 0 : n.naturalWidth) || ((i = this.videoRef.current) === null || i === void 0 ? void 0 : i.videoWidth) || 0, b = ((l = this.imageRef.current) === null || l === void 0 ? void 0 : l.naturalHeight) || ((e = this.videoRef.current) === null || e === void 0 ? void 0 : e.videoHeight) || 0, N = S / b;
          return N < c ? "horizontal-cover" : "vertical-cover";
        }
        return "horizontal-cover";
      }
      return this.props.objectFit;
    }, d.prototype.onPinchStart = function(n) {
      var i = d.getTouchPoint(n.touches[0]), l = d.getTouchPoint(n.touches[1]);
      this.lastPinchDistance = Mo(i, l), this.lastPinchRotation = Lo(i, l), this.onDragStart(Ro(i, l));
    }, d.prototype.onPinchMove = function(n) {
      var i = this;
      if (!(!this.currentDoc || !this.currentWindow)) {
        var l = d.getTouchPoint(n.touches[0]), e = d.getTouchPoint(n.touches[1]), v = Ro(l, e);
        this.onDrag(v), this.rafPinchTimeout && this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout), this.rafPinchTimeout = this.currentWindow.requestAnimationFrame(function() {
          var c = Mo(l, e), S = i.props.zoom * (c / i.lastPinchDistance);
          i.setNewZoom(S, v, {
            shouldUpdatePosition: !1
          }), i.lastPinchDistance = c;
          var b = Lo(l, e), N = i.props.rotation + (b - i.lastPinchRotation);
          i.props.onRotationChange && i.props.onRotationChange(N), i.lastPinchRotation = b;
        });
      }
    }, d.prototype.render = function() {
      var n = this, i, l = this.props, e = l.image, v = l.video, c = l.mediaProps, S = l.cropperProps, b = l.transform, N = l.crop, L = N.x, C = N.y, I = l.rotation, K = l.zoom, H = l.cropShape, ne = l.showGrid, U = l.roundCropAreaPixels, G = l.style, T = G.containerStyle, V = G.cropAreaStyle, ce = G.mediaStyle, ae = l.classes, be = ae.containerClassName, pe = ae.cropAreaClassName, te = ae.mediaClassName, se = (i = this.state.mediaObjectFit) !== null && i !== void 0 ? i : this.getObjectFit();
      return vr.createElement("div", {
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        ref: function(Se) {
          return n.containerRef = Se;
        },
        "data-testid": "container",
        style: T,
        className: Sa("reactEasyCrop_Container", be)
      }, e ? vr.createElement("img", Pt({
        alt: "",
        className: Sa("reactEasyCrop_Image", se === "contain" && "reactEasyCrop_Contain", se === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", se === "vertical-cover" && "reactEasyCrop_Cover_Vertical", te)
      }, c, {
        src: e,
        ref: this.imageRef,
        style: Pt(Pt({}, ce), {
          transform: b || "translate(".concat(L, "px, ").concat(C, "px) rotate(").concat(I, "deg) scale(").concat(K, ")")
        }),
        onLoad: this.onMediaLoad
      })) : v && vr.createElement("video", Pt({
        autoPlay: !0,
        playsInline: !0,
        loop: !0,
        muted: !0,
        className: Sa("reactEasyCrop_Video", se === "contain" && "reactEasyCrop_Contain", se === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", se === "vertical-cover" && "reactEasyCrop_Cover_Vertical", te)
      }, c, {
        ref: this.videoRef,
        onLoadedMetadata: this.onMediaLoad,
        style: Pt(Pt({}, ce), {
          transform: b || "translate(".concat(L, "px, ").concat(C, "px) rotate(").concat(I, "deg) scale(").concat(K, ")")
        }),
        controls: !1
      }), (Array.isArray(v) ? v : [{
        src: v
      }]).map(function(ee) {
        return vr.createElement("source", Pt({
          key: ee.src
        }, ee));
      })), this.state.cropSize && vr.createElement("div", Pt({
        ref: this.cropperRef,
        style: Pt(Pt({}, V), {
          width: U ? Math.round(this.state.cropSize.width) : this.state.cropSize.width,
          height: U ? Math.round(this.state.cropSize.height) : this.state.cropSize.height
        }),
        tabIndex: 0,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        "data-testid": "cropper",
        className: Sa("reactEasyCrop_CropArea", H === "round" && "reactEasyCrop_CropAreaRound", ne && "reactEasyCrop_CropAreaGrid", pe)
      }, S)));
    }, d.defaultProps = {
      zoom: 1,
      rotation: 0,
      aspect: 4 / 3,
      maxZoom: Rs,
      minZoom: Ls,
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
      keyboardStep: Os
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
  }(vr.Component)
);
const Oo = Yt, Bs = (o) => new Promise((d, n) => {
  const i = new Image();
  i.addEventListener("load", () => d(i)), i.addEventListener("error", (l) => n(l)), i.setAttribute("crossOrigin", "anonymous"), i.src = o;
}), Xo = (o) => o * Math.PI / 180, js = (o, d, n) => {
  const i = Xo(n);
  return {
    width: Math.abs(Math.cos(i) * o) + Math.abs(Math.sin(i) * d),
    height: Math.abs(Math.sin(i) * o) + Math.abs(Math.cos(i) * d)
  };
}, zs = async (o, d, n = "image/jpeg", i = 0) => {
  const l = await Bs(o), e = document.createElement("canvas"), v = e.getContext("2d");
  if (!v)
    throw new Error("Canvas context is not available");
  const c = Xo(i), { width: S, height: b } = js(
    l.width,
    l.height,
    i
  );
  e.width = S, e.height = b, v.translate(S / 2, b / 2), v.rotate(c), v.translate(-l.width / 2, -l.height / 2), v.drawImage(l, 0, 0);
  const N = document.createElement("canvas"), L = N.getContext("2d");
  if (!L)
    throw new Error("Canvas context is not available");
  return N.width = d.width, N.height = d.height, L.drawImage(
    e,
    d.x,
    d.y,
    d.width,
    d.height,
    0,
    0,
    d.width,
    d.height
  ), new Promise((C, I) => {
    N.toBlob(
      (K) => {
        if (!K) {
          I(new Error("Image cropping failed"));
          return;
        }
        C(K);
      },
      n,
      0.95
    );
  });
}, gn = ({
  isOpen: o,
  imageSrc: d,
  fileType: n = "image/jpeg",
  fileName: i = "cropped-image",
  aspect: l = 1 / 1,
  title: e = "Crop Image",
  onClose: v,
  onApply: c
}) => {
  const [S, b] = le({ x: 0, y: 0 }), [N, L] = le(1), [C, I] = le(null);
  Ve(() => {
    o && (b({ x: 0, y: 0 }), L(1), I(null));
  }, [o]);
  const K = Kc((ne, U) => {
    I(U);
  }, []), H = async () => {
    var ne, U;
    if (!(!d || !C))
      try {
        const G = await zs(
          d,
          C,
          n
        ), T = ((U = (ne = n == null ? void 0 : n.split("/")) == null ? void 0 : ne[1]) == null ? void 0 : U.replace("jpeg", "jpg")) || "jpg", V = new File([G], `${i}.${T}`, {
          type: n
        });
        c == null || c(V);
      } catch {
        v == null || v();
      }
  };
  return o ? /* @__PURE__ */ R(
    "div",
    {
      className: re(
        $.mediaPicker.cropModal,
        "fixed inset-0 z-50 flex items-center justify-center p-4"
      ),
      children: [
        /* @__PURE__ */ s(
          "div",
          {
            className: "fixed inset-0 bg-gray-500 opacity-75",
            onClick: v
          }
        ),
        /* @__PURE__ */ R("div", { className: "relative bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col dark:bg-gray-800", children: [
          /* @__PURE__ */ R("div", { className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0", children: [
            /* @__PURE__ */ s("h3", { className: "text-lg font-medium text-gray-900 dark:text-white", children: e }),
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                onClick: v,
                className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
                "aria-label": "Close crop modal",
                children: /* @__PURE__ */ s(Bt, { icon: "mdi:close", className: "w-6 h-6" })
              }
            )
          ] }),
          /* @__PURE__ */ R("div", { className: "p-4 space-y-4", children: [
            /* @__PURE__ */ s("div", { className: "relative h-72 w-full bg-gray-900 rounded-md overflow-hidden", children: d && /* @__PURE__ */ s(
              Ds,
              {
                image: d,
                crop: S,
                zoom: N,
                aspect: l,
                onCropChange: b,
                onZoomChange: L,
                onCropComplete: K
              }
            ) }),
            /* @__PURE__ */ R("div", { className: "space-y-2", children: [
              /* @__PURE__ */ s("label", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Zoom" }),
              /* @__PURE__ */ s(
                "input",
                {
                  type: "range",
                  min: 1,
                  max: 3,
                  step: 0.1,
                  value: N,
                  onChange: (ne) => L(Number(ne.target.value)),
                  className: "w-full"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ R("div", { className: "px-4 py-3 flex justify-end gap-3 border-t border-gray-200 dark:border-gray-700 sm:!px-6", children: [
            /* @__PURE__ */ s(
              Oo,
              {
                type: "button",
                onClick: v,
                variant: "outlined",
                color: "default",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ s(
              Oo,
              {
                type: "button",
                onClick: H,
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
}, Ts = Yt, Ir = (o) => {
  typeof o == "string" && o.startsWith("blob:") && URL.revokeObjectURL(o);
}, Fs = ({
  label: o = "",
  value: d = null,
  onChange: n,
  required: i = !1,
  accept: l = "image/*",
  aspect: e = "1",
  id: v,
  dragDrop: c = !1,
  cropImage: S = !1,
  name: b = "",
  parentClass: N = "",
  errorMessage: L = ""
}) => {
  const [C, I] = le(d), [K, H] = le(!1), [ne, U] = le(!1), [G, T] = le(""), [V, ce] = le("image/jpeg"), [ae, be] = le("cropped-image"), pe = Ct(null), te = Ct(""), se = Ct("");
  Ve(() => {
    if (d instanceof File) {
      const we = URL.createObjectURL(d);
      Ir(se.current), se.current = we, I({ file: d, preview: we });
    } else d && typeof d == "object" && "preview" in d, I(d);
  }, [d]), Ve(() => () => {
    Ir(se.current), Ir(te.current);
  }, []);
  const ee = () => {
    U(!1), Ir(te.current), te.current = "", T(""), pe.current && (pe.current.value = "");
  }, Se = (we) => {
    const ve = URL.createObjectURL(we);
    Ir(se.current), se.current = ve, I({ file: we, preview: ve }), n == null || n(we), ee();
  }, Ie = (we) => {
    if (!we || we.length === 0)
      return;
    const ve = we[0];
    if (S) {
      const We = URL.createObjectURL(ve);
      Ir(te.current), te.current = We, T(We), ce(ve.type || "image/jpeg"), be(
        (ve.name || "cropped-image").replace(/\.[^/.]+$/, "")
      ), U(!0);
      return;
    }
    const Ke = URL.createObjectURL(ve);
    Ir(se.current), se.current = Ke, I({ file: ve, preview: Ke }), n == null || n(ve);
  }, ft = (we) => {
    we && we.stopPropagation(), Ir(se.current), se.current = "", I(null), n == null || n(null), pe.current && (pe.current.value = "");
  }, it = (we) => {
    c && (we.preventDefault(), H(!0));
  }, At = (we) => {
    c && (we.preventDefault(), H(!1));
  }, ye = (we) => {
    var ve, Ke, We, Ne;
    c && (we.preventDefault(), H(!1), (Ne = (We = (Ke = (ve = we.dataTransfer) == null ? void 0 : ve.files) == null ? void 0 : Ke[0]) == null ? void 0 : We.type) != null && Ne.includes("image/") && Ie(we.dataTransfer.files));
  }, Ge = () => {
    var we;
    (we = pe.current) == null || we.click();
  }, Pe = C && typeof C == "object" && "preview" in C ? C.preview : typeof C == "string" ? C : "";
  return /* @__PURE__ */ R($e, { children: [
    /* @__PURE__ */ R(
      "div",
      {
        className: re(
          $.mediaPicker.image,
          $.field.wrapper,
          N || "col-span-12"
        ),
        children: [
          /* @__PURE__ */ s(er, { label: o, required: i }),
          /* @__PURE__ */ R(
            "div",
            {
              className: re(
                $.mediaPicker.dropzone,
                "relative rounded-md p-2 transition-all",
                K ? "border-2 border-dashed border-primary-500 bg-primary-50 dark:bg-primary-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800",
                L ? "border-red-500" : ""
              ),
              onDragOver: it,
              onDragLeave: At,
              onDrop: ye,
              id: `field-${b}`,
              children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    ref: pe,
                    id: v,
                    type: "file",
                    accept: l,
                    onChange: (we) => Ie(we.target.files),
                    required: i && !C,
                    className: "absolute opacity-0 right-[50%] top-[80%] -translate-y-1/2 pointer-events-none h-[10px]"
                  }
                ),
                /* @__PURE__ */ R(
                  "div",
                  {
                    className: `flex items-center space-x-4 transition-all ${K ? "opacity-50" : ""}`,
                    children: [
                      C ? /* @__PURE__ */ R("div", { className: "relative group", children: [
                        /* @__PURE__ */ s(
                          "img",
                          {
                            src: Pe,
                            alt: "preview",
                            className: "object-cover w-20 h-20 rounded-full shadow-md"
                          }
                        ),
                        !i && /* @__PURE__ */ s(
                          "button",
                          {
                            type: "button",
                            onClick: ft,
                            className: "absolute top-0 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
                            "aria-label": "Remove image",
                            children: /* @__PURE__ */ s(Bt, { icon: "mdi:close", className: "w-3 h-3" })
                          }
                        )
                      ] }) : /* @__PURE__ */ s("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ s(
                        Bt,
                        {
                          icon: "ri:image-add-fill",
                          className: "text-gray-400 w-10 h-10"
                        }
                      ) }),
                      /* @__PURE__ */ R("div", { className: "space-y-1", children: [
                        /* @__PURE__ */ s(
                          Ts,
                          {
                            type: "button",
                            onClick: Ge,
                            variant: "outlined",
                            color: "default",
                            children: C ? "Change Image" : "Select Image"
                          }
                        ),
                        c && !C && /* @__PURE__ */ s("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop" })
                      ] })
                    ]
                  }
                ),
                c && K && /* @__PURE__ */ s("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-primary-500/10 rounded-md", children: /* @__PURE__ */ s("span", { className: "text-primary-600 dark:text-primary-400 font-semibold text-lg", children: "Drop image here" }) })
              ]
            }
          ),
          L && /* @__PURE__ */ s(
            "span",
            {
              className: re(
                $.field.error,
                "text-red-500 text-xs mt-1"
              ),
              children: L
            }
          )
        ]
      },
      b
    ),
    /* @__PURE__ */ s(
      gn,
      {
        isOpen: ne,
        imageSrc: G,
        fileType: V,
        fileName: ae,
        onClose: ee,
        onApply: Se,
        aspect: Number(e)
      }
    )
  ] });
}, ei = ya.forwardRef(
  ({
    label: o,
    value: d,
    name: n,
    required: i,
    parentClass: l = "",
    className: e = "",
    type: v = "text",
    onKeyDown: c,
    negativeNumberAllow: S = !0,
    defaultValue: b = "",
    field: N = {},
    onChange: L,
    mask: C = "",
    errorMessage: I = "",
    maskApplyOnValue: K = !0,
    ...H
  }, ne) => {
    const [U, G] = le(!1), T = (ae) => {
      if (v === "number") {
        if (["e", "E", "+"].includes(ae.key)) {
          ae.preventDefault();
          return;
        }
        if (S == !1 && ae.key === "-") {
          ae.preventDefault();
          return;
        }
        if (["ArrowUp", "ArrowDown"].includes(ae.key)) {
          ae.preventDefault();
          return;
        }
      }
      c == null || c(ae);
    }, V = re(
      $.field.input,
      "h-10 placeholder-gray-400 dark:placeholder-gray-400",
      v === "password" ? "pr-10" : "",
      v === "number" ? "no-spinner" : "",
      e,
      I ? "border-red-500" : ""
    );
    function ce(ae, be) {
      if (!ae) return ae;
      const pe = String(ae).replace(/[^a-zA-Z0-9]/g, "");
      let te = "", se = 0;
      for (let ee = 0; ee < (be == null ? void 0 : be.length) && se < pe.length; ee++) {
        const Se = be[ee], Ie = pe[se];
        Se === "9" ? /\d/.test(Ie) ? (te += Ie, se++) : (se++, ee--) : Se === "A" ? /[a-zA-Z]/.test(Ie) ? (te += Ie, se++) : (se++, ee--) : Se === "X" ? /[a-zA-Z0-9]/.test(Ie) ? (te += Ie, se++) : (se++, ee--) : Se === "*" ? (te += Ie, se++) : (te += Se, Ie === Se && se++);
      }
      return te;
    }
    return Ve(() => {
      if (b) {
        const ae = d || b;
        setTimeout(() => {
          L == null || L(ae);
        }, 100);
      }
    }, [b]), /* @__PURE__ */ s($e, { children: /* @__PURE__ */ R(
      "div",
      {
        className: re(
          $.field.wrapper,
          l || "col-span-12"
        ),
        children: [
          /* @__PURE__ */ s(
            er,
            {
              label: o,
              required: i,
              infoText: N == null ? void 0 : N.infoText
            }
          ),
          /* @__PURE__ */ R("div", { className: "relative", children: [
            /* @__PURE__ */ s(
              "input",
              {
                type: v === "password" && U ? "text" : v,
                ref: ne,
                id: `field-${n}`,
                required: i,
                onKeyDown: T,
                className: V,
                value: C ? ce(d, C) : d,
                onChange: (ae) => {
                  L(C && K ? ce(ae.target.value, C) : ae.target.value);
                },
                ...H
              }
            ),
            I && /* @__PURE__ */ s(
              "span",
              {
                className: re(
                  $.field.error,
                  "text-red-500 text-xs mt-1"
                ),
                children: I
              }
            ),
            v === "password" && /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                tabIndex: -1,
                onClick: () => G((ae) => !ae),
                className: "absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200",
                children: /* @__PURE__ */ s(
                  Bt,
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
ei.displayName = "Input";
const Hs = ({
  editorKey: o = "",
  value: d = "",
  name: n = "",
  onChange: i,
  label: l = "",
  required: e = !1,
  placeholder: v = "",
  parentClass: c = "col-span-12",
  height: S = 400,
  inline: b = !1,
  disabled: N = !1,
  plugins: L,
  toolbar: C,
  menubar: I = !1,
  fontFamily: K = "Inter, sans-serif",
  initConfig: H = {},
  imageUploadHandler: ne,
  errorMessage: U = ""
}) => {
  const G = [
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
  ], T = "undo redo | blocks | bold italic underline forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media table | removeformat | code fullscreen preview", V = (ce) => new Promise((ae, be) => {
    if (!ne) {
      ae(`data:${ce.blob().type};base64,${ce.base64()}`);
      return;
    }
    ne(ce).then((pe) => {
      pe ? ae(pe) : be("Upload failed: No URL returned");
    }).catch((pe) => {
      be(
        typeof pe == "string" ? pe : (pe == null ? void 0 : pe.message) || "Image upload failed"
      );
    });
  });
  return /* @__PURE__ */ R(
    "div",
    {
      className: re($.field.wrapper, c),
      id: `field-${n}`,
      children: [
        l && /* @__PURE__ */ s(er, { label: l, required: e }),
        /* @__PURE__ */ s(
          as,
          {
            apiKey: o,
            value: d,
            disabled: N,
            init: {
              height: S,
              inline: b,
              menubar: I,
              branding: !1,
              statusbar: !0,
              automatic_uploads: !0,
              images_upload_handler: V,
              plugins: L ?? G,
              toolbar: C ?? T,
              placeholder: v,
              content_style: `
            body {
                font-family: ${K};
                border: ${U ? "1px solid blue" : ""};
            }
            `,
              ...H
            },
            onEditorChange: (ce) => {
              i == null || i(ce);
            }
          }
        ),
        U && /* @__PURE__ */ s(
          "span",
          {
            className: re(
              $.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: U
          }
        )
      ]
    }
  );
};
var ti = { exports: {} };
(function(o) {
  o.exports = /******/
  function(d) {
    var n = {};
    function i(l) {
      if (n[l])
        return n[l].exports;
      var e = n[l] = {
        /******/
        i: l,
        /******/
        l: !1,
        /******/
        exports: {}
        /******/
      };
      return d[l].call(e.exports, e, e.exports, i), e.l = !0, e.exports;
    }
    return i.m = d, i.c = n, i.d = function(l, e, v) {
      i.o(l, e) || Object.defineProperty(l, e, { enumerable: !0, get: v });
    }, i.r = function(l) {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(l, "__esModule", { value: !0 });
    }, i.t = function(l, e) {
      if (e & 1 && (l = i(l)), e & 8 || e & 4 && typeof l == "object" && l && l.__esModule) return l;
      var v = /* @__PURE__ */ Object.create(null);
      if (i.r(v), Object.defineProperty(v, "default", { enumerable: !0, value: l }), e & 2 && typeof l != "string") for (var c in l) i.d(v, c, (function(S) {
        return l[S];
      }).bind(null, c));
      return v;
    }, i.n = function(l) {
      var e = l && l.__esModule ? (
        /******/
        function() {
          return l.default;
        }
      ) : (
        /******/
        function() {
          return l;
        }
      );
      return i.d(e, "a", e), e;
    }, i.o = function(l, e) {
      return Object.prototype.hasOwnProperty.call(l, e);
    }, i.p = "", i(i.s = 10);
  }([
    /* 0 */
    /***/
    function(d, n) {
      d.exports = ya;
    },
    /* 1 */
    /***/
    function(d, n, i) {
      var l = i(3), e = i(7);
      e = e.__esModule ? e.default : e, typeof e == "string" && (e = [[d.i, e, ""]]);
      var v = {};
      v.insert = "head", v.singleton = !1, l(e, v), d.exports = e.locals || {};
    },
    /* 2 */
    /***/
    function(d, n) {
      d.exports = rs;
    },
    /* 3 */
    /***/
    function(d, n, i) {
      var l = /* @__PURE__ */ function() {
        var G;
        return function() {
          return typeof G > "u" && (G = !!(window && document && document.all && !window.atob)), G;
        };
      }(), e = /* @__PURE__ */ function() {
        var G = {};
        return function(V) {
          if (typeof G[V] > "u") {
            var ce = document.querySelector(V);
            if (window.HTMLIFrameElement && ce instanceof window.HTMLIFrameElement)
              try {
                ce = ce.contentDocument.head;
              } catch {
                ce = null;
              }
            G[V] = ce;
          }
          return G[V];
        };
      }(), v = [];
      function c(U) {
        for (var G = -1, T = 0; T < v.length; T++)
          if (v[T].identifier === U) {
            G = T;
            break;
          }
        return G;
      }
      function S(U, G) {
        for (var T = {}, V = [], ce = 0; ce < U.length; ce++) {
          var ae = U[ce], be = G.base ? ae[0] + G.base : ae[0], pe = T[be] || 0, te = "".concat(be, " ").concat(pe);
          T[be] = pe + 1;
          var se = c(te), ee = {
            css: ae[1],
            media: ae[2],
            sourceMap: ae[3]
          };
          se !== -1 ? (v[se].references++, v[se].updater(ee)) : v.push({
            identifier: te,
            updater: ne(ee, G),
            references: 1
          }), V.push(te);
        }
        return V;
      }
      function b(U) {
        var G = document.createElement("style"), T = U.attributes || {};
        if (typeof T.nonce > "u") {
          var V = i.nc;
          V && (T.nonce = V);
        }
        if (Object.keys(T).forEach(function(ae) {
          G.setAttribute(ae, T[ae]);
        }), typeof U.insert == "function")
          U.insert(G);
        else {
          var ce = e(U.insert || "head");
          if (!ce)
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          ce.appendChild(G);
        }
        return G;
      }
      function N(U) {
        if (U.parentNode === null)
          return !1;
        U.parentNode.removeChild(U);
      }
      var L = /* @__PURE__ */ function() {
        var G = [];
        return function(V, ce) {
          return G[V] = ce, G.filter(Boolean).join(`
`);
        };
      }();
      function C(U, G, T, V) {
        var ce = T ? "" : V.media ? "@media ".concat(V.media, " {").concat(V.css, "}") : V.css;
        if (U.styleSheet)
          U.styleSheet.cssText = L(G, ce);
        else {
          var ae = document.createTextNode(ce), be = U.childNodes;
          be[G] && U.removeChild(be[G]), be.length ? U.insertBefore(ae, be[G]) : U.appendChild(ae);
        }
      }
      function I(U, G, T) {
        var V = T.css, ce = T.media, ae = T.sourceMap;
        if (ce ? U.setAttribute("media", ce) : U.removeAttribute("media"), ae && typeof btoa < "u" && (V += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(ae)))), " */")), U.styleSheet)
          U.styleSheet.cssText = V;
        else {
          for (; U.firstChild; )
            U.removeChild(U.firstChild);
          U.appendChild(document.createTextNode(V));
        }
      }
      var K = null, H = 0;
      function ne(U, G) {
        var T, V, ce;
        if (G.singleton) {
          var ae = H++;
          T = K || (K = b(G)), V = C.bind(null, T, ae, !1), ce = C.bind(null, T, ae, !0);
        } else
          T = b(G), V = I.bind(null, T, G), ce = function() {
            N(T);
          };
        return V(U), function(pe) {
          if (pe) {
            if (pe.css === U.css && pe.media === U.media && pe.sourceMap === U.sourceMap)
              return;
            V(U = pe);
          } else
            ce();
        };
      }
      d.exports = function(U, G) {
        G = G || {}, !G.singleton && typeof G.singleton != "boolean" && (G.singleton = l()), U = U || [];
        var T = S(U, G);
        return function(ce) {
          if (ce = ce || [], Object.prototype.toString.call(ce) === "[object Array]") {
            for (var ae = 0; ae < T.length; ae++) {
              var be = T[ae], pe = c(be);
              v[pe].references--;
            }
            for (var te = S(ce, G), se = 0; se < T.length; se++) {
              var ee = T[se], Se = c(ee);
              v[Se].references === 0 && (v[Se].updater(), v.splice(Se, 1));
            }
            T = te;
          }
        };
      };
    },
    /* 4 */
    /***/
    function(d, n, i) {
      d.exports = function(v) {
        var c = [];
        return c.toString = function() {
          return this.map(function(b) {
            var N = l(b, v);
            return b[2] ? "@media ".concat(b[2], " {").concat(N, "}") : N;
          }).join("");
        }, c.i = function(S, b, N) {
          typeof S == "string" && (S = [[null, S, ""]]);
          var L = {};
          if (N)
            for (var C = 0; C < this.length; C++) {
              var I = this[C][0];
              I != null && (L[I] = !0);
            }
          for (var K = 0; K < S.length; K++) {
            var H = [].concat(S[K]);
            N && L[H[0]] || (b && (H[2] ? H[2] = "".concat(b, " and ").concat(H[2]) : H[2] = b), c.push(H));
          }
        }, c;
      };
      function l(v, c) {
        var S = v[1] || "", b = v[3];
        if (!b)
          return S;
        if (c && typeof btoa == "function") {
          var N = e(b), L = b.sources.map(function(C) {
            return "/*# sourceURL=".concat(b.sourceRoot || "").concat(C, " */");
          });
          return [S].concat(L).concat([N]).join(`
`);
        }
        return [S].join(`
`);
      }
      function e(v) {
        var c = btoa(unescape(encodeURIComponent(JSON.stringify(v)))), S = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c);
        return "/*# ".concat(S, " */");
      }
    },
    /* 5 */
    /***/
    function(d, n, i) {
      var l = i(3), e = i(6);
      e = e.__esModule ? e.default : e, typeof e == "string" && (e = [[d.i, e, ""]]);
      var v = {};
      v.insert = "head", v.singleton = !1, l(e, v), d.exports = e.locals || {};
    },
    /* 6 */
    /***/
    function(d, n, i) {
      var l = i(4);
      n = l(!1), n.push([d.i, `.resizeImageWrapper {\r
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
    function(d, n, i) {
      var l = i(4);
      n = l(!1), n.push([d.i, `:root {\r
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
    function(d, n, i) {
      var l = i(3), e = i(9);
      e = e.__esModule ? e.default : e, typeof e == "string" && (e = [[d.i, e, ""]]);
      var v = {};
      v.insert = "head", v.singleton = !1, l(e, v), d.exports = e.locals || {};
    },
    /* 9 */
    /***/
    function(d, n, i) {
      var l = i(4);
      n = l(!1), n.push([d.i, `@keyframes marching-ants{0%{background-position:0 0,0 100%,0 0,100% 0}to{background-position:20px 0,-20px 100%,0 -20px,100% 20px}}:root{--rc-drag-handle-size: 12px;--rc-drag-handle-mobile-size: 24px;--rc-drag-handle-bg-colour: rgba(0, 0, 0, .2);--rc-drag-bar-size: 6px;--rc-border-color: rgba(255, 255, 255, .7);--rc-focus-color: #0088ff}.ReactCrop{position:relative;display:inline-block;cursor:crosshair;max-width:100%}.ReactCrop *,.ReactCrop *:before,.ReactCrop *:after{box-sizing:border-box}.ReactCrop--disabled,.ReactCrop--locked{cursor:inherit}.ReactCrop__child-wrapper{overflow:hidden;max-height:inherit}.ReactCrop__child-wrapper>img,.ReactCrop__child-wrapper>video{display:block;max-width:100%;max-height:inherit}.ReactCrop:not(.ReactCrop--disabled) .ReactCrop__child-wrapper>img,.ReactCrop:not(.ReactCrop--disabled) .ReactCrop__child-wrapper>video{touch-action:none}.ReactCrop:not(.ReactCrop--disabled) .ReactCrop__crop-selection{touch-action:none}.ReactCrop__crop-mask{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;width:calc(100% + .5px);height:calc(100% + .5px)}.ReactCrop__crop-selection{position:absolute;top:0;left:0;transform:translateZ(0);cursor:move}.ReactCrop--disabled .ReactCrop__crop-selection{cursor:inherit}.ReactCrop--circular-crop .ReactCrop__crop-selection{border-radius:50%}.ReactCrop--circular-crop .ReactCrop__crop-selection:after{pointer-events:none;content:"";position:absolute;top:-1px;right:-1px;bottom:-1px;left:-1px;border:1px solid var(--rc-border-color);opacity:.3}.ReactCrop--no-animate .ReactCrop__crop-selection{outline:1px dashed white}.ReactCrop__crop-selection:not(.ReactCrop--no-animate .ReactCrop__crop-selection){animation:marching-ants 1s;background-image:linear-gradient(to right,#fff 50%,#444 50%),linear-gradient(to right,#fff 50%,#444 50%),linear-gradient(to bottom,#fff 50%,#444 50%),linear-gradient(to bottom,#fff 50%,#444 50%);background-size:10px 1px,10px 1px,1px 10px,1px 10px;background-position:0 0,0 100%,0 0,100% 0;background-repeat:repeat-x,repeat-x,repeat-y,repeat-y;color:#fff;animation-play-state:running;animation-timing-function:linear;animation-iteration-count:infinite}.ReactCrop__crop-selection:focus{outline:2px solid var(--rc-focus-color);outline-offset:-1px}.ReactCrop--invisible-crop .ReactCrop__crop-mask,.ReactCrop--invisible-crop .ReactCrop__crop-selection{display:none}.ReactCrop__rule-of-thirds-vt:before,.ReactCrop__rule-of-thirds-vt:after,.ReactCrop__rule-of-thirds-hz:before,.ReactCrop__rule-of-thirds-hz:after{content:"";display:block;position:absolute;background-color:#fff6}.ReactCrop__rule-of-thirds-vt:before,.ReactCrop__rule-of-thirds-vt:after{width:1px;height:100%}.ReactCrop__rule-of-thirds-vt:before{left:33.3333333333%}.ReactCrop__rule-of-thirds-vt:after{left:66.6666666667%}.ReactCrop__rule-of-thirds-hz:before,.ReactCrop__rule-of-thirds-hz:after{width:100%;height:1px}.ReactCrop__rule-of-thirds-hz:before{top:33.3333333333%}.ReactCrop__rule-of-thirds-hz:after{top:66.6666666667%}.ReactCrop__drag-handle{position:absolute;width:var(--rc-drag-handle-size);height:var(--rc-drag-handle-size);background-color:var(--rc-drag-handle-bg-colour);border:1px solid var(--rc-border-color)}.ReactCrop__drag-handle:focus{background:var(--rc-focus-color)}.ReactCrop .ord-nw{top:0;left:0;transform:translate(-50%,-50%);cursor:nw-resize}.ReactCrop .ord-n{top:0;left:50%;transform:translate(-50%,-50%);cursor:n-resize}.ReactCrop .ord-ne{top:0;right:0;transform:translate(50%,-50%);cursor:ne-resize}.ReactCrop .ord-e{top:50%;right:0;transform:translate(50%,-50%);cursor:e-resize}.ReactCrop .ord-se{bottom:0;right:0;transform:translate(50%,50%);cursor:se-resize}.ReactCrop .ord-s{bottom:0;left:50%;transform:translate(-50%,50%);cursor:s-resize}.ReactCrop .ord-sw{bottom:0;left:0;transform:translate(-50%,50%);cursor:sw-resize}.ReactCrop .ord-w{top:50%;left:0;transform:translate(-50%,-50%);cursor:w-resize}.ReactCrop__disabled .ReactCrop__drag-handle{cursor:inherit}.ReactCrop__drag-bar{position:absolute}.ReactCrop__drag-bar.ord-n{top:0;left:0;width:100%;height:var(--rc-drag-bar-size);transform:translateY(-50%)}.ReactCrop__drag-bar.ord-e{right:0;top:0;width:var(--rc-drag-bar-size);height:100%;transform:translate(50%)}.ReactCrop__drag-bar.ord-s{bottom:0;left:0;width:100%;height:var(--rc-drag-bar-size);transform:translateY(50%)}.ReactCrop__drag-bar.ord-w{top:0;left:0;width:var(--rc-drag-bar-size);height:100%;transform:translate(-50%)}.ReactCrop--new-crop .ReactCrop__drag-bar,.ReactCrop--new-crop .ReactCrop__drag-handle,.ReactCrop--fixed-aspect .ReactCrop__drag-bar,.ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-n,.ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-e,.ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-s,.ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-w{display:none}@media (pointer: coarse){.ReactCrop .ord-n,.ReactCrop .ord-e,.ReactCrop .ord-s,.ReactCrop .ord-w{display:none}.ReactCrop__drag-handle{width:var(--rc-drag-handle-mobile-size);height:var(--rc-drag-handle-mobile-size)}}
`, ""]), d.exports = n;
    },
    /* 10 */
    /***/
    function(d, n, i) {
      i.r(n), i.d(n, "default", function() {
        return (
          /* binding */
          tc
        );
      });
      var l = i(0), e = /* @__PURE__ */ i.n(l);
      i(5);
      var v = i(1), c = /* @__PURE__ */ i.n(v);
      function S() {
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
      function b() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 576 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M41.4 9.4C53.9-3.1 74.1-3.1 86.6 9.4L168 90.7l53.1-53.1c28.1-28.1 73.7-28.1 101.8 0L474.3 189.1c28.1 28.1 28.1 73.7 0 101.8L283.9 481.4c-37.5 37.5-98.3 37.5-135.8 0L30.6 363.9c-37.5-37.5-37.5-98.3 0-135.8L122.7 136 41.4 54.6c-12.5-12.5-12.5-32.8 0-45.3zm176 221.3L168 181.3 75.9 273.4c-4.2 4.2-7 9.3-8.4 14.6H386.7l42.3-42.3c3.1-3.1 3.1-8.2 0-11.3L277.7 82.9c-3.1-3.1-8.2-3.1-11.3 0L213.3 136l49.4 49.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0zM512 512c-35.3 0-64-28.7-64-64c0-25.2 32.6-79.6 51.2-108.7c6-9.4 19.5-9.4 25.5 0C543.4 368.4 576 422.8 576 448c0 35.3-28.7 64-64 64z"
        }));
      }
      function N() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-1.8l18-48H303.8l18 48H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H390.2L254 52.8zM279.8 304H168.2L224 155.1 279.8 304z"
        }));
      }
      function L() {
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
      function C() {
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
      function I() {
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
      function K() {
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
      function H() {
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
      function ne() {
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
      function G() {
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
      function T() {
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
      function V() {
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
      function ce() {
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
      function ae() {
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
      function be() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M24 56c0-13.3 10.7-24 24-24H80c13.3 0 24 10.7 24 24V176h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H40c-13.3 0-24-10.7-24-24s10.7-24 24-24H56V80H48C34.7 80 24 69.3 24 56zM86.7 341.2c-6.5-7.4-18.3-6.9-24 1.2L51.5 357.9c-7.7 10.8-22.7 13.3-33.5 5.6s-13.3-22.7-5.6-33.5l11.1-15.6c23.7-33.2 72.3-35.6 99.2-4.9c21.3 24.4 20.8 60.9-1.1 84.7L86.8 432H120c13.3 0 24 10.7 24 24s-10.7 24-24 24H32c-9.5 0-18.2-5.6-22-14.4s-2.1-18.9 4.3-25.9l72-78c5.3-5.8 5.4-14.6 .3-20.5zM224 64H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
        }));
      }
      function pe() {
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
      function te() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M16 64c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H128V224c0 53 43 96 96 96s96-43 96-96V96H304c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H384V224c0 88.4-71.6 160-160 160s-160-71.6-160-160V96H48C30.3 96 16 81.7 16 64zM0 448c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z"
        }));
      }
      function se() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 640 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L355.7 253.5 400.2 96H503L497 120.2c-4.3 17.1 6.1 34.5 23.3 38.8s34.5-6.1 38.8-23.3l11-44.1C577.6 61.3 554.7 32 523.5 32H376.1h-.3H204.5c-22 0-41.2 15-46.6 36.4l-6.3 25.2L38.8 5.1zm168 131.7c.1-.3 .2-.7 .3-1L217 96H333.7L301.3 210.8l-94.5-74.1zM327.3 353.9L272.9 311 243.3 416H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H309.8l17.6-62.1z"
        }));
      }
      function ee() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M480 32c0-11.1-5.7-21.4-15.2-27.2s-21.2-6.4-31.1-1.4l-32 16c-15.8 7.9-22.2 27.1-14.3 42.9C393 73.5 404.3 80 416 80v80c-17.7 0-32 14.3-32 32s14.3 32 32 32h32 32c17.7 0 32-14.3 32-32s-14.3-32-32-32V32zM32 64C14.3 64 0 78.3 0 96s14.3 32 32 32H47.3l89.6 128L47.3 384H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H64c10.4 0 20.2-5.1 26.2-13.6L176 311.8l85.8 122.6c6 8.6 15.8 13.6 26.2 13.6h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H304.7L215.1 256l89.6-128H320c17.7 0 32-14.3 32-32s-14.3-32-32-32H288c-10.4 0-20.2 5.1-26.2 13.6L176 200.2 90.2 77.6C84.2 69.1 74.4 64 64 64H32z"
        }));
      }
      function Se() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M32 64C14.3 64 0 78.3 0 96s14.3 32 32 32H47.3l89.6 128L47.3 384H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H64c10.4 0 20.2-5.1 26.2-13.6L176 311.8l85.8 122.6c6 8.6 15.8 13.6 26.2 13.6h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H304.7L215.1 256l89.6-128H320c17.7 0 32-14.3 32-32s-14.3-32-32-32H288c-10.4 0-20.2 5.1-26.2 13.6L176 200.2 90.2 77.6C84.2 69.1 74.4 64 64 64H32zM480 320c0-11.1-5.7-21.4-15.2-27.2s-21.2-6.4-31.1-1.4l-32 16c-15.8 7.9-22.2 27.1-14.3 42.9C393 361.5 404.3 368 416 368v80c-17.7 0-32 14.3-32 32s14.3 32 32 32h32 32c17.7 0 32-14.3 32-32s-14.3-32-32-32V320z"
        }));
      }
      function Ie() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"
        }));
      }
      function ft() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z"
        }));
      }
      function it() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 640 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
        }));
      }
      function At() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 384 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M128 64c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H293.3L160 416h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H90.7L224 96H160c-17.7 0-32-14.3-32-32z"
        }));
      }
      function ye() {
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
      function Ge() {
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
      function Pe() {
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
      function we() {
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
      function ve() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 384 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M0 64C0 46.3 14.3 32 32 32H80 96 224c70.7 0 128 57.3 128 128c0 31.3-11.3 60.1-30 82.3c37.1 22.4 62 63.1 62 109.7c0 70.7-57.3 128-128 128H96 80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V256 96H32C14.3 96 0 81.7 0 64zM224 224c35.3 0 64-28.7 64-64s-28.7-64-64-64H112V224H224zM112 288V416H256c35.3 0 64-28.7 64-64s-28.7-64-64-64H224 112z"
        }));
      }
      function Ke() {
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
      function Ne() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M448 64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32zm0 256c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32zM0 192c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zM448 448c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32z"
        }));
      }
      function xe() {
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
      function ze() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 640 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L489.3 358.2l90.5-90.5c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114l-96 96-31.9-25C430.9 239.6 420.1 175.1 377 132c-52.2-52.3-134.5-56.2-191.3-11.7L38.8 5.1zM239 162c30.1-14.9 67.7-9.9 92.8 15.3c20 20 27.5 48.3 21.7 74.5L239 162zM116.6 187.9L60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5l61.8-61.8-50.6-39.9zM220.9 270c-2.1 39.8 12.2 80.1 42.2 110c38.9 38.9 94.4 51 143.6 36.3L220.9 270z"
        }));
      }
      function St() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M144 144c0-44.2 35.8-80 80-80c31.9 0 59.4 18.6 72.3 45.7c7.6 16 26.7 22.8 42.6 15.2s22.8-26.7 15.2-42.6C331 33.7 281.5 0 224 0C144.5 0 80 64.5 80 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H144V144z"
        }));
      }
      function Ee() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"
        }));
      }
      function Ue() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M128 32c0-17.7-14.3-32-32-32S64 14.3 64 32l0 32L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l32 0 0 256c0 35.3 28.7 64 64 64l224 0 0-64-224 0 0-352zM384 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-256c0-35.3-28.7-64-64-64L160 64l0 64 224 0 0 352z"
        }));
      }
      var et = "data:image/gif;base64,R0lGODlhngHpANUrAJycnPLy8tjY2AAAANTU1Pb29sTExMrKysLCwtbW1ru7u/j4+Ojo6LKysu7u7tzc3Ly8vNDQ0BEREbCwsL6+vqqqqiIiIs7OzuDg4KampkRERDMzM7i4uMzMzIiIiHd3d8jIyN3d3WZmZlVVVfT09OTk5JmZmcbGxqCgoOzs7JaWlv///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc0MEVDNDE3NTBFNDExRTE5OTAzODVFNEI4NUU1MDAzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc0MEVDNDE4NTBFNDExRTE5OTAzODVFNEI4NUU1MDAzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzQwRUM0MTU1MEU0MTFFMTk5MDM4NUU0Qjg1RTUwMDMiIHN0UmVmOmRv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";
      function dt(t) {
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
          className: c.a.specialCharBox
        }, a.map(function(u, m) {
          return /* @__PURE__ */ e.a.createElement("div", {
            key: "key".concat(m),
            onClick: function(w) {
              return r(w, u);
            },
            className: c.a.specialChar
          }, u);
        }));
      }
      function Qe() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          width: "10",
          height: "10",
          focusable: "false"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 0 1 0-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8Z",
          "fill-rule": "nonzero"
        }));
      }
      function pt(t, r) {
        return Lt(t) || $t(t, r) || Kt(t, r) || rr();
      }
      function rr() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Kt(t, r) {
        if (t) {
          if (typeof t == "string") return gt(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? gt(t, r) : void 0;
        }
      }
      function gt(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, u = Array(r); a < r; a++) u[a] = t[a];
        return u;
      }
      function $t(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var u, m, h, w, y = [], _ = !0, E = !1;
          try {
            if (h = (a = a.call(t)).next, r !== 0) for (; !(_ = (u = h.call(a)).done) && (y.push(u.value), y.length !== r); _ = !0) ;
          } catch (B) {
            E = !0, m = B;
          } finally {
            try {
              if (!_ && a.return != null && (w = a.return(), Object(w) !== w)) return;
            } finally {
              if (E) throw m;
            }
          }
          return y;
        }
      }
      function Lt(t) {
        if (Array.isArray(t)) return t;
      }
      function Jt(t) {
        var r = t.remove_from_toolbar, a = t.editorRef, u = Object(l.useState)(!1), m = pt(u, 2), h = m[0], w = m[1], y = Object(l.useState)("Paragraph"), _ = pt(y, 2), E = _[0], B = _[1], W = Object(l.useRef)(null), J = [{
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
          var Q, p = r.find(function(F) {
            return F.name === "format";
          });
          (p == null || (Q = p.options) === null || Q === void 0 ? void 0 : Q.length) > 0 && (J = J.filter(function(F) {
            return !(p != null && p.options.includes(F.value));
          }));
        }
        var de = function(Y) {
          Y.preventDefault(), w(!h);
        }, q = function(Y, ue) {
          Y.preventDefault(), a.current.focus(), document.execCommand("formatBlock", !1, ue.value), B(ue.label), w(!1);
        }, P = function() {
          var Y = window.getSelection();
          if (Y.rangeCount > 0)
            for (var ue = Y.getRangeAt(0), oe = ue.commonAncestorContainer, me = oe; me; ) {
              if (me.nodeName.match(/^(p|div|h[1-6]|blockquote|pre)$/i))
                return me.nodeName.toLowerCase();
              me = me.parentNode;
            }
          return null;
        }, z = function() {
          var Y = a.current;
          Y && Y.contains(window.getSelection().anchorNode) && (Y.focus(), Y.innerText.trim() === "" && B("Paragraph"));
        };
        return Object(l.useEffect)(function() {
          var F = function(oe) {
            W.current.contains(oe.target) || w(!1);
          }, Y = function() {
            var oe;
            if (a != null && (oe = a.current) !== null && oe !== void 0 && oe.contains(window.getSelection().anchorNode)) {
              var me = P();
              if (me) {
                var Oe = J.find(function(j) {
                  return j.value === me;
                });
                B(Oe ? Oe.label : "Paragraph");
              }
            }
          };
          return document.addEventListener("click", F), document.addEventListener("selectionchange", Y), document.addEventListener("keydown", z), function() {
            document.removeEventListener("click", F), document.removeEventListener("selectionchange", Y), document.removeEventListener("keydown", z);
          };
        }, [a]), /* @__PURE__ */ e.a.createElement("button", {
          className: c.a.customSelectFormat,
          onClick: de,
          ref: W,
          style: {
            minWidth: "120px"
          }
        }, /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.selectSelected
        }, E, /* @__PURE__ */ e.a.createElement(Qe, null)), h && /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.selectItemsFormat
        }, J.map(function(F, Y) {
          return /* @__PURE__ */ e.a.createElement("div", {
            key: "key".concat(Y),
            onClick: function(oe) {
              return q(oe, F);
            },
            className: c.a.selectOption
          }, /* @__PURE__ */ e.a.createElement(F.value, null, F.label));
        })));
      }
      var sr = Jt;
      function Re(t, r) {
        return hr(t) || Zt(t, r) || Rt(t, r) || Je();
      }
      function Je() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Rt(t, r) {
        if (t) {
          if (typeof t == "string") return Tt(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? Tt(t, r) : void 0;
        }
      }
      function Tt(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, u = Array(r); a < r; a++) u[a] = t[a];
        return u;
      }
      function Zt(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var u, m, h, w, y = [], _ = !0, E = !1;
          try {
            if (h = (a = a.call(t)).next, r !== 0) for (; !(_ = (u = h.call(a)).done) && (y.push(u.value), y.length !== r); _ = !0) ;
          } catch (B) {
            E = !0, m = B;
          } finally {
            try {
              if (!_ && a.return != null && (w = a.return(), Object(w) !== w)) return;
            } finally {
              if (E) throw m;
            }
          }
          return y;
        }
      }
      function hr(t) {
        if (Array.isArray(t)) return t;
      }
      var Mr = function(r) {
        var a = r.name, u = r.icon, m = r.title, h = r.item, w = r.disabled, y = r.editorRef, _ = Object(l.useState)(!1), E = Re(_, 2), B = E[0], W = E[1], J = Object(l.useState)(!0), Q = Re(J, 2), p = Q[0], de = Q[1], q = function(F, Y) {
          F.preventDefault(), Y.current.focus(), Y.current && Y.current.contains(window.getSelection().anchorNode) && (h != null && h.handleClick && (h.handleClick(h), !h.add_functionality) || (W(!B), document.execCommand(a)));
        };
        Object(l.useEffect)(function() {
          var z = function() {
            var Y;
            if (y != null && (Y = y.current) !== null && Y !== void 0 && Y.contains(window.getSelection().anchorNode)) {
              var ue = document.queryCommandState(a), oe = document.queryCommandEnabled(a);
              de(!oe), W(ue);
            }
          };
          return document.addEventListener("selectionchange", z), document.addEventListener("input", z), function() {
            document.removeEventListener("selectionchange", z), document.removeEventListener("input", z);
          };
        }, [y, a]);
        var P = function() {
          var F = "";
          return B && (F = c.a.selectedOption || ""), (a === "redo" || a === "undo") && p && (F += " ".concat(c.a.disabled || "")), F.trim();
        };
        return /* @__PURE__ */ e.a.createElement("button", {
          onClick: function(F) {
            return q(F, y);
          },
          className: P(),
          title: h != null && h.title ? h.title : m,
          disabled: w
        }, h != null && h.icon ? h.icon : u);
      }, ut = Mr;
      function dr(t) {
        "@babel/helpers - typeof";
        return dr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
          return typeof r;
        } : function(r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
        }, dr(t);
      }
      function yr() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
        yr = function() {
          return r;
        };
        var t, r = {}, a = Object.prototype, u = a.hasOwnProperty, m = Object.defineProperty || function(k, f, x) {
          k[f] = x.value;
        }, h = typeof Symbol == "function" ? Symbol : {}, w = h.iterator || "@@iterator", y = h.asyncIterator || "@@asyncIterator", _ = h.toStringTag || "@@toStringTag";
        function E(k, f, x) {
          return Object.defineProperty(k, f, { value: x, enumerable: !0, configurable: !0, writable: !0 }), k[f];
        }
        try {
          E({}, "");
        } catch {
          E = function(x, D, M) {
            return x[D] = M;
          };
        }
        function B(k, f, x, D) {
          var M = f && f.prototype instanceof P ? f : P, O = Object.create(M.prototype), he = new Te(D || []);
          return m(O, "_invoke", { value: Ze(k, x, he) }), O;
        }
        function W(k, f, x) {
          try {
            return { type: "normal", arg: k.call(f, x) };
          } catch (D) {
            return { type: "throw", arg: D };
          }
        }
        r.wrap = B;
        var J = "suspendedStart", Q = "suspendedYield", p = "executing", de = "completed", q = {};
        function P() {
        }
        function z() {
        }
        function F() {
        }
        var Y = {};
        E(Y, w, function() {
          return this;
        });
        var ue = Object.getPrototypeOf, oe = ue && ue(ue(lt([])));
        oe && oe !== a && u.call(oe, w) && (Y = oe);
        var me = F.prototype = P.prototype = Object.create(Y);
        function Oe(k) {
          ["next", "throw", "return"].forEach(function(f) {
            E(k, f, function(x) {
              return this._invoke(f, x);
            });
          });
        }
        function j(k, f) {
          function x(M, O, he, De) {
            var je = W(k[M], k, O);
            if (je.type !== "throw") {
              var Xe = je.arg, rt = Xe.value;
              return rt && dr(rt) == "object" && u.call(rt, "__await") ? f.resolve(rt.__await).then(function(nt) {
                x("next", nt, he, De);
              }, function(nt) {
                x("throw", nt, he, De);
              }) : f.resolve(rt).then(function(nt) {
                Xe.value = nt, he(Xe);
              }, function(nt) {
                return x("throw", nt, he, De);
              });
            }
            De(je.arg);
          }
          var D;
          m(this, "_invoke", { value: function(O, he) {
            function De() {
              return new f(function(je, Xe) {
                x(O, he, je, Xe);
              });
            }
            return D = D ? D.then(De, De) : De();
          } });
        }
        function Ze(k, f, x) {
          var D = J;
          return function(M, O) {
            if (D === p) throw Error("Generator is already running");
            if (D === de) {
              if (M === "throw") throw O;
              return { value: t, done: !0 };
            }
            for (x.method = M, x.arg = O; ; ) {
              var he = x.delegate;
              if (he) {
                var De = Fe(he, x);
                if (De) {
                  if (De === q) continue;
                  return De;
                }
              }
              if (x.method === "next") x.sent = x._sent = x.arg;
              else if (x.method === "throw") {
                if (D === J) throw D = de, x.arg;
                x.dispatchException(x.arg);
              } else x.method === "return" && x.abrupt("return", x.arg);
              D = p;
              var je = W(k, f, x);
              if (je.type === "normal") {
                if (D = x.done ? de : Q, je.arg === q) continue;
                return { value: je.arg, done: x.done };
              }
              je.type === "throw" && (D = de, x.method = "throw", x.arg = je.arg);
            }
          };
        }
        function Fe(k, f) {
          var x = f.method, D = k.iterator[x];
          if (D === t) return f.delegate = null, x === "throw" && k.iterator.return && (f.method = "return", f.arg = t, Fe(k, f), f.method === "throw") || x !== "return" && (f.method = "throw", f.arg = new TypeError("The iterator does not provide a '" + x + "' method")), q;
          var M = W(D, k.iterator, f.arg);
          if (M.type === "throw") return f.method = "throw", f.arg = M.arg, f.delegate = null, q;
          var O = M.arg;
          return O ? O.done ? (f[k.resultName] = O.value, f.next = k.nextLoc, f.method !== "return" && (f.method = "next", f.arg = t), f.delegate = null, q) : O : (f.method = "throw", f.arg = new TypeError("iterator result is not an object"), f.delegate = null, q);
        }
        function Me(k) {
          var f = { tryLoc: k[0] };
          1 in k && (f.catchLoc = k[1]), 2 in k && (f.finallyLoc = k[2], f.afterLoc = k[3]), this.tryEntries.push(f);
        }
        function He(k) {
          var f = k.completion || {};
          f.type = "normal", delete f.arg, k.completion = f;
        }
        function Te(k) {
          this.tryEntries = [{ tryLoc: "root" }], k.forEach(Me, this), this.reset(!0);
        }
        function lt(k) {
          if (k || k === "") {
            var f = k[w];
            if (f) return f.call(k);
            if (typeof k.next == "function") return k;
            if (!isNaN(k.length)) {
              var x = -1, D = function M() {
                for (; ++x < k.length; ) if (u.call(k, x)) return M.value = k[x], M.done = !1, M;
                return M.value = t, M.done = !0, M;
              };
              return D.next = D;
            }
          }
          throw new TypeError(dr(k) + " is not iterable");
        }
        return z.prototype = F, m(me, "constructor", { value: F, configurable: !0 }), m(F, "constructor", { value: z, configurable: !0 }), z.displayName = E(F, _, "GeneratorFunction"), r.isGeneratorFunction = function(k) {
          var f = typeof k == "function" && k.constructor;
          return !!f && (f === z || (f.displayName || f.name) === "GeneratorFunction");
        }, r.mark = function(k) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(k, F) : (k.__proto__ = F, E(k, _, "GeneratorFunction")), k.prototype = Object.create(me), k;
        }, r.awrap = function(k) {
          return { __await: k };
        }, Oe(j.prototype), E(j.prototype, y, function() {
          return this;
        }), r.AsyncIterator = j, r.async = function(k, f, x, D, M) {
          M === void 0 && (M = Promise);
          var O = new j(B(k, f, x, D), M);
          return r.isGeneratorFunction(f) ? O : O.next().then(function(he) {
            return he.done ? he.value : O.next();
          });
        }, Oe(me), E(me, _, "Generator"), E(me, w, function() {
          return this;
        }), E(me, "toString", function() {
          return "[object Generator]";
        }), r.keys = function(k) {
          var f = Object(k), x = [];
          for (var D in f) x.push(D);
          return x.reverse(), function M() {
            for (; x.length; ) {
              var O = x.pop();
              if (O in f) return M.value = O, M.done = !1, M;
            }
            return M.done = !0, M;
          };
        }, r.values = lt, Te.prototype = { constructor: Te, reset: function(f) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(He), !f) for (var x in this) x.charAt(0) === "t" && u.call(this, x) && !isNaN(+x.slice(1)) && (this[x] = t);
        }, stop: function() {
          this.done = !0;
          var f = this.tryEntries[0].completion;
          if (f.type === "throw") throw f.arg;
          return this.rval;
        }, dispatchException: function(f) {
          if (this.done) throw f;
          var x = this;
          function D(Xe, rt) {
            return he.type = "throw", he.arg = f, x.next = Xe, rt && (x.method = "next", x.arg = t), !!rt;
          }
          for (var M = this.tryEntries.length - 1; M >= 0; --M) {
            var O = this.tryEntries[M], he = O.completion;
            if (O.tryLoc === "root") return D("end");
            if (O.tryLoc <= this.prev) {
              var De = u.call(O, "catchLoc"), je = u.call(O, "finallyLoc");
              if (De && je) {
                if (this.prev < O.catchLoc) return D(O.catchLoc, !0);
                if (this.prev < O.finallyLoc) return D(O.finallyLoc);
              } else if (De) {
                if (this.prev < O.catchLoc) return D(O.catchLoc, !0);
              } else {
                if (!je) throw Error("try statement without catch or finally");
                if (this.prev < O.finallyLoc) return D(O.finallyLoc);
              }
            }
          }
        }, abrupt: function(f, x) {
          for (var D = this.tryEntries.length - 1; D >= 0; --D) {
            var M = this.tryEntries[D];
            if (M.tryLoc <= this.prev && u.call(M, "finallyLoc") && this.prev < M.finallyLoc) {
              var O = M;
              break;
            }
          }
          O && (f === "break" || f === "continue") && O.tryLoc <= x && x <= O.finallyLoc && (O = null);
          var he = O ? O.completion : {};
          return he.type = f, he.arg = x, O ? (this.method = "next", this.next = O.finallyLoc, q) : this.complete(he);
        }, complete: function(f, x) {
          if (f.type === "throw") throw f.arg;
          return f.type === "break" || f.type === "continue" ? this.next = f.arg : f.type === "return" ? (this.rval = this.arg = f.arg, this.method = "return", this.next = "end") : f.type === "normal" && x && (this.next = x), q;
        }, finish: function(f) {
          for (var x = this.tryEntries.length - 1; x >= 0; --x) {
            var D = this.tryEntries[x];
            if (D.finallyLoc === f) return this.complete(D.completion, D.afterLoc), He(D), q;
          }
        }, catch: function(f) {
          for (var x = this.tryEntries.length - 1; x >= 0; --x) {
            var D = this.tryEntries[x];
            if (D.tryLoc === f) {
              var M = D.completion;
              if (M.type === "throw") {
                var O = M.arg;
                He(D);
              }
              return O;
            }
          }
          throw Error("illegal catch attempt");
        }, delegateYield: function(f, x, D) {
          return this.delegate = { iterator: lt(f), resultName: x, nextLoc: D }, this.method === "next" && (this.arg = t), q;
        } }, r;
      }
      function Lr(t, r, a, u, m, h, w) {
        try {
          var y = t[h](w), _ = y.value;
        } catch (E) {
          return void a(E);
        }
        y.done ? r(_) : Promise.resolve(_).then(u, m);
      }
      function Qr(t) {
        return function() {
          var r = this, a = arguments;
          return new Promise(function(u, m) {
            var h = t.apply(r, a);
            function w(_) {
              Lr(h, u, m, w, y, "next", _);
            }
            function y(_) {
              Lr(h, u, m, w, y, "throw", _);
            }
            w(void 0);
          });
        };
      }
      var Gr = [
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
      ], Yr = ["file", "view", "insert", "format", "|", "select_all", "|", "image", "link", "video", "|", "copy", "cut", "paste", "|"], Kr = ["bold", "italic", "underline", "superscript", "subscript", "font", "font_size", "alignment"], wr = ["image", "link", "video", "hr_line", "special_char"], Rr = ["new_document", "preview", "print"], Vr = ["source_code", "full_screen"];
      function Wr(t) {
        for (var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", a = "", u = 0; u < t; u++) {
          var m = Math.floor(Math.random() * r.length);
          a += r.charAt(m);
        }
        return a;
      }
      function xr(t) {
        var r = new DOMParser();
        if (t) {
          var a = r.parseFromString(t, "text/html");
          a.querySelectorAll("div").forEach(function(w) {
            var y = a.createElement("p");
            y.innerHTML = w.innerHTML, w.replaceWith(y);
          });
          var u = a.body.innerHTML;
          u = u.replace(/<br\s*\/?>/g, "&nbsp;"), u = u.replace(/<(?=[^/])/g, function(w) {
            return `
`.concat(w);
          }), u = u.trim();
          var m = u.split(`
`), h = m.map(function(w) {
            var y = /^<.*?>|<.*?>$/.test(w);
            return !y && w.trim() ? "<p>".concat(w, "</p>") : w;
          });
          return h.join(`
`).trim();
        }
        return "";
      }
      var _r = function() {
        var r = document.querySelector(".resizeImageWrapper"), a = document.querySelector(".resizer-image");
        r && a && (r.insertAdjacentElement("afterend", a), a.classList.remove("resizer-image"), r.parentNode.removeChild(r));
      }, qr = /* @__PURE__ */ function() {
        var t = Qr(/* @__PURE__ */ yr().mark(function r(a, u, m) {
          var h, w, y, _;
          return yr().wrap(function(B) {
            for (; ; ) switch (B.prev = B.next) {
              case 0:
                if (!(!u || !a)) {
                  B.next = 3;
                  break;
                }
                return console.error("No crop data or image reference"), B.abrupt("return", null);
              case 3:
                return h = document.createElement("canvas"), w = a.naturalWidth / a.width, y = a.naturalHeight / a.height, h.width = u.width, h.height = u.height, _ = h.getContext("2d"), _.clearRect(0, 0, h.width, h.height), _.drawImage(a, u.x * w, u.y * y, u.width * w, u.height * y, 0, 0, u.width, u.height), B.abrupt("return", new Promise(function(W) {
                  var J = "image/png", Q = "png";
                  if (m)
                    if (typeof m == "string") {
                      var p = m.split(".");
                      Q = p[p.length - 1].toLowerCase(), J = "image/".concat(Q === "jpg" ? "jpeg" : Q);
                    } else
                      J = m.type || "image/png", Q = J.split("/").pop(), Q === "jpeg" && (Q = "jpg");
                  var de = J === "image/png" || J === "image/gif", q = de ? "image/png" : J;
                  h.toBlob(
                    function(P) {
                      if (!P) {
                        console.error("Canvas is empty"), W(null);
                        return;
                      }
                      var z = "cropped-image.png";
                      if (m)
                        if (typeof m == "string") {
                          var F = m.split("/"), Y = F[F.length - 1].replace(/\.[^/.]+$/, "");
                          z = "".concat(Y, "-cropped.").concat(Q);
                        } else {
                          var ue = m.name.replace(/\.[^/.]+$/, "") || "cropped-image";
                          z = "".concat(ue, "-cropped.").concat(Q);
                        }
                      var oe = new File([P], z, {
                        type: q,
                        lastModified: Date.now()
                      });
                      W(oe);
                    },
                    q,
                    // Use the determined output type
                    q === "image/jpeg" ? 0.9 : 1
                    // Only apply quality for JPEG
                  );
                }));
              case 12:
              case "end":
                return B.stop();
            }
          }, r);
        }));
        return function(a, u, m) {
          return t.apply(this, arguments);
        };
      }();
      function $r(t, r) {
        return Be(t) || _e(t, r) || Zr(t, r) || Jr();
      }
      function Jr() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Zr(t, r) {
        if (t) {
          if (typeof t == "string") return Or(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? Or(t, r) : void 0;
        }
      }
      function Or(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, u = Array(r); a < r; a++) u[a] = t[a];
        return u;
      }
      function _e(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var u, m, h, w, y = [], _ = !0, E = !1;
          try {
            if (h = (a = a.call(t)).next, r !== 0) for (; !(_ = (u = h.call(a)).done) && (y.push(u.value), y.length !== r); _ = !0) ;
          } catch (B) {
            E = !0, m = B;
          } finally {
            try {
              if (!_ && a.return != null && (w = a.return(), Object(w) !== w)) return;
            } finally {
              if (E) throw m;
            }
          }
          return y;
        }
      }
      function Be(t) {
        if (Array.isArray(t)) return t;
      }
      function Ut(t) {
        var r, a = t.onSelectOption, u = t.handleInsertHR, m = t.item, h = t.remove_from_navbar, w = m.options;
        w || (w = wr);
        var y = Object(l.useState)(!1), _ = $r(y, 2), E = _[0], B = _[1], W = function(de, q) {
          de.preventDefault(), B(!1), q === "hr_line" ? u(de) : a(de, q);
        };
        if ((h == null ? void 0 : h.length) > 0) {
          var J, Q = h.find(function(p) {
            return p.name === "insert";
          });
          (Q == null || (J = Q.options) === null || J === void 0 ? void 0 : J.length) > 0 && (w = w.filter(function(p) {
            return !(Q != null && Q.options.includes(p));
          }));
        }
        return /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.customSelect,
          onMouseEnter: function() {
            return B(!0);
          },
          onMouseLeave: function() {
            return B(!1);
          }
        }, m != null && m.title ? m.title : "Insert", /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(c.a.selectItems, " ").concat(E ? "".concat(c.a.show) : "")
        }, ((r = w) === null || r === void 0 ? void 0 : r.length) > 0 && w.map(function(p, de) {
          var q = p === "image" || p.name === "image", P = p === "link" || p.name === "link", z = p === "video" || p.name === "video", F = p === "hr_line" || p.name === "hr_line", Y = p === "special_char" || p.name === "special_char";
          return /* @__PURE__ */ e.a.createElement("div", {
            key: "key".concat(de)
          }, q && /* @__PURE__ */ e.a.createElement("div", {
            className: c.a.selectInsert,
            onClick: function(oe) {
              return W(oe, "image");
            }
          }, p != null && p.icon ? p.icon : /* @__PURE__ */ e.a.createElement(Pe, null), /* @__PURE__ */ e.a.createElement("span", null, p != null && p.title ? p.title : "Image")), P && /* @__PURE__ */ e.a.createElement("div", {
            className: c.a.selectInsert,
            onClick: function(oe) {
              return W(oe, "link");
            }
          }, p != null && p.icon ? p.icon : /* @__PURE__ */ e.a.createElement(it, null), /* @__PURE__ */ e.a.createElement("span", null, p != null && p.title ? p.title : "Link")), z && /* @__PURE__ */ e.a.createElement("div", {
            className: c.a.selectInsert,
            onClick: function(oe) {
              return W(oe, "video");
            }
          }, p != null && p.icon ? p.icon : /* @__PURE__ */ e.a.createElement(we, null), /* @__PURE__ */ e.a.createElement("span", null, p != null && p.title ? p.title : "Video")), F && /* @__PURE__ */ e.a.createElement("div", {
            className: c.a.selectInsert,
            onClick: function(oe) {
              return W(oe, "hr_line");
            }
          }, p != null && p.icon ? p.icon : /* @__PURE__ */ e.a.createElement(I, null), /* @__PURE__ */ e.a.createElement("span", null, p != null && p.title ? p.title : "Horizontal Line")), Y && /* @__PURE__ */ e.a.createElement("div", {
            className: c.a.selectInsert,
            onClick: function(oe) {
              return W(oe, "special_char");
            }
          }, p != null && p.icon ? p.icon : /* @__PURE__ */ e.a.createElement(T, null), /* @__PURE__ */ e.a.createElement("span", null, p != null && p.title ? p.title : "Special Char")));
        })));
      }
      function fr(t, r) {
        return Z(t) || A(t, r) || kr(t, r) || kt();
      }
      function kt() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function kr(t, r) {
        if (t) {
          if (typeof t == "string") return Dr(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? Dr(t, r) : void 0;
        }
      }
      function Dr(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, u = Array(r); a < r; a++) u[a] = t[a];
        return u;
      }
      function A(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var u, m, h, w, y = [], _ = !0, E = !1;
          try {
            if (h = (a = a.call(t)).next, r !== 0) for (; !(_ = (u = h.call(a)).done) && (y.push(u.value), y.length !== r); _ = !0) ;
          } catch (B) {
            E = !0, m = B;
          } finally {
            try {
              if (!_ && a.return != null && (w = a.return(), Object(w) !== w)) return;
            } finally {
              if (E) throw m;
            }
          }
          return y;
        }
      }
      function Z(t) {
        if (Array.isArray(t)) return t;
      }
      function Le(t) {
        var r = t.handleViewSource, a = t.isFullScreen, u = t.toggleFullScreen, m = t.item;
        t.isPlaceholder, t.placeholder, t.value;
        var h = t.remove_from_navbar, w = m.options, y = Object(l.useState)(!1), _ = fr(y, 2), E = _[0], B = _[1], W = function(de, q, P) {
          de.preventDefault(), B(!1), !(P != null && P.handleClick && (P.handleClick(P, m), !P.add_functionality)) && (q === "code" ? r() : q === "screen" && u());
        };
        if (w || (w = Vr), (h == null ? void 0 : h.length) > 0) {
          var J, Q = h.find(function(p) {
            return p.name === "view";
          });
          (Q == null || (J = Q.options) === null || J === void 0 ? void 0 : J.length) > 0 && (w = w.filter(function(p) {
            return !(Q != null && Q.options.includes(p));
          }));
        }
        return /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.customSelect,
          onMouseEnter: function() {
            return B(!0);
          },
          onMouseLeave: function() {
            return B(!1);
          }
        }, m != null && m.title ? m.title : "View", /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(c.a.selectItems, " ").concat(E ? "".concat(c.a.show) : "")
        }, w.map(function(p, de) {
          var q = p === "source_code" || p.name === "source_code", P = p === "full_screen" || p.name === "full_screen";
          return /* @__PURE__ */ e.a.createElement("div", {
            key: "key".concat(de)
          }, q && /* @__PURE__ */ e.a.createElement("div", {
            className: c.a.selectInsert,
            onClick: function(F) {
              return W(F, "code", p);
            }
          }, p != null && p.icon ? p.icon : /* @__PURE__ */ e.a.createElement(Ke, null), /* @__PURE__ */ e.a.createElement("span", null, p != null && p.title ? p.title : "Source Code")), P && /* @__PURE__ */ e.a.createElement("div", {
            className: c.a.selectInsert,
            onClick: function(F) {
              return W(F, "screen", p);
            }
          }, p != null && p.icon ? p.icon : a ? /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement(U, null), " ", /* @__PURE__ */ e.a.createElement("span", null, p != null && p.title ? p.title : "Exit Full Screen")) : /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement(G, null), " ", /* @__PURE__ */ e.a.createElement("span", null, p != null && p.title ? p.title : "Full Screen"))));
        })));
      }
      function qe(t, r) {
        return ar(t) || Wt(t, r) || Vt(t, r) || bt();
      }
      function bt() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Vt(t, r) {
        if (t) {
          if (typeof t == "string") return Xt(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? Xt(t, r) : void 0;
        }
      }
      function Xt(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, u = Array(r); a < r; a++) u[a] = t[a];
        return u;
      }
      function Wt(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var u, m, h, w, y = [], _ = !0, E = !1;
          try {
            if (h = (a = a.call(t)).next, r !== 0) for (; !(_ = (u = h.call(a)).done) && (y.push(u.value), y.length !== r); _ = !0) ;
          } catch (B) {
            E = !0, m = B;
          } finally {
            try {
              if (!_ && a.return != null && (w = a.return(), Object(w) !== w)) return;
            } finally {
              if (E) throw m;
            }
          }
          return y;
        }
      }
      function ar(t) {
        if (Array.isArray(t)) return t;
      }
      function Br(t) {
        var r = t.handleNewDocument, a = t.handlePreview, u = t.handlePrint, m = t.item, h = t.remove_from_navbar, w = m.options, y = Object(l.useState)(!1), _ = qe(y, 2), E = _[0], B = _[1], W = function(de, q, P) {
          de.preventDefault(), B(!1), !(P != null && P.handleClick && (P.handleClick(P, m), !P.add_functionality)) && (q === "new_document" ? r() : q === "preview" ? a() : q === "print" && setTimeout(function() {
            u();
          }, 1));
        };
        if (w || (w = Rr), (h == null ? void 0 : h.length) > 0) {
          var J, Q = h.find(function(p) {
            return p.name === "file";
          });
          (Q == null || (J = Q.options) === null || J === void 0 ? void 0 : J.length) > 0 && (w = w.filter(function(p) {
            return !(Q != null && Q.options.includes(p));
          }));
        }
        return /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.customSelect,
          onMouseEnter: function() {
            return B(!0);
          },
          onMouseLeave: function() {
            return B(!1);
          }
        }, m != null && m.title ? m.title : "File", /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(c.a.selectItems, " ").concat(E ? "".concat(c.a.show) : "")
        }, w.map(function(p, de) {
          var q = p === "new_document" || p.name === "new_document", P = p === "preview" || p.name === "preview", z = p === "print" || p.name === "print";
          return p === "upload_file" || p.name, /* @__PURE__ */ e.a.createElement("div", {
            key: "key".concat(de)
          }, q && /* @__PURE__ */ e.a.createElement("div", {
            className: c.a.selectInsert,
            onClick: function(Y) {
              return W(Y, "new_document", p);
            }
          }, p != null && p.icon ? p.icon : /* @__PURE__ */ e.a.createElement(ne, null), /* @__PURE__ */ e.a.createElement("span", null, p != null && p.title ? p.title : "New Document")), P && /* @__PURE__ */ e.a.createElement("div", {
            className: c.a.selectInsert,
            onClick: function(Y) {
              return W(Y, "preview", p);
            }
          }, p != null && p.icon ? p.icon : /* @__PURE__ */ e.a.createElement(H, null), /* @__PURE__ */ e.a.createElement("span", null, p != null && p.title ? p.title : "Preview")), z && /* @__PURE__ */ e.a.createElement("div", {
            className: c.a.selectInsert,
            onClick: function(Y) {
              return W(Y, "print", p);
            }
          }, p != null && p.icon ? p.icon : /* @__PURE__ */ e.a.createElement(K, null), /* @__PURE__ */ e.a.createElement("span", null, p != null && p.title ? p.title : "Print")));
        })));
      }
      var lr = i(2), ia = /* @__PURE__ */ i.n(lr), jr = function(r) {
        var a = r.onClose, u = r.children, m = r.title, h = r.className, w = r.isFullScreen;
        return /* @__PURE__ */ ia.a.createPortal(/* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(c.a.modalOverlay, " ").concat(w ? "".concat(c.a.fillScreenView) : "")
        }, /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(c.a.modalPopup, " ").concat(h || ""),
          onClick: function(_) {
            return _.stopPropagation();
          }
        }, !w && /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.modelTitle
        }, /* @__PURE__ */ e.a.createElement("h2", null, m), /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.cross,
          onClick: a
        }, /* @__PURE__ */ e.a.createElement(V, null))), /* @__PURE__ */ e.a.createElement("hr", null)), u)), document.getElementById("modal-root"));
      }, Ta = jr;
      function si(t) {
        var r = t.viewSource, a = t.setViewSource, u = t.sourceCode, m = t.setSourceCode, h = t.handleSaveSource;
        return /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.mlMainContentBox
        }, /* @__PURE__ */ e.a.createElement(Ta, {
          isOpen: r,
          onClose: function() {
            return a(!1);
          },
          title: "Source Code",
          className: c.a.fullScreenModel
        }, /* @__PURE__ */ e.a.createElement("textarea", {
          className: c.a.wysiwygEditorSource,
          value: u,
          onChange: function(y) {
            return m(y.target.value);
          }
        }), /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.reactEditorTextEnd
        }, /* @__PURE__ */ e.a.createElement("button", {
          className: c.a.saveButton,
          onClick: h
        }, "Save"))));
      }
      function di(t) {
        var r = t.openPreview, a = t.setOpenPreview, u = t.previewContent;
        return /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.mlMainContentBox
        }, /* @__PURE__ */ e.a.createElement(Ta, {
          isOpen: r,
          onClose: function() {
            return a(!1);
          },
          title: "Preview",
          className: c.a.fullScreenModel
        }, /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.reactEditorMt10,
          dangerouslySetInnerHTML: {
            __html: u
          }
        })));
      }
      function ui(t) {
        var r = t.handleHideChildOptions, a = t.editorRef, u = [
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
        ], m = function(w, y) {
          w.preventDefault(), a.current.focus();
          var _ = window.getSelection();
          _.isCollapsed, document.execCommand("styleWithCSS", !1, !0), document.execCommand("fontName", !1, y.style), r();
        };
        return /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, u.map(function(h, w) {
          return /* @__PURE__ */ e.a.createElement("button", {
            key: "key".concat(w),
            style: {
              fontFamily: h.style
            },
            className: c.a.fontFamilyOption,
            onClick: function(_) {
              return m(_, h);
            }
          }, h.name);
        }));
      }
      var mi = ui;
      function pi(t) {
        var r = t.handleHideChildOptions, a = ["10", "12", "14", "16", "18", "20", "24", "28", "32", "36", "48", "60", "72"], u = function(h, w) {
          h.preventDefault();
          var y = window.getSelection();
          if (y.isCollapsed) {
            var B = y.getRangeAt(0), W = document.createElement("span");
            W.style.fontSize = w + "px", W.innerHTML = "​", B.insertNode(W), B.setStart(W, 1), B.setEnd(W, 1), y.removeAllRanges(), y.addRange(B);
          } else {
            document.execCommand("styleWithCSS", !1, !0), document.execCommand("fontSize", !1, "1");
            var _ = y.getRangeAt(0), E = document.createElement("span");
            E.style.fontSize = w + "px", _.surroundContents(E);
          }
          r();
        };
        return /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, a.map(function(m, h) {
          return /* @__PURE__ */ e.a.createElement("button", {
            key: "key".concat(h),
            onClick: function(y) {
              return u(y, m);
            },
            className: c.a.selectOption
          }, "".concat(m, "px"));
        }));
      }
      var hi = pi;
      function fi(t) {
        var r = t.handleHideChildOptions, a = [{
          title: "Left",
          icon: /* @__PURE__ */ e.a.createElement(ge, null),
          type: "justifyLeft"
        }, {
          title: "Center",
          icon: /* @__PURE__ */ e.a.createElement(xe, null),
          type: "justifyCenter"
        }, {
          title: "Right",
          icon: /* @__PURE__ */ e.a.createElement(We, null),
          type: "justifyRight"
        }, {
          title: "Justify",
          icon: /* @__PURE__ */ e.a.createElement(Ne, null),
          type: "justifyFull"
        }], u = function(h, w) {
          h.preventDefault(), document.execCommand(w.type), r();
        };
        return /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, a.map(function(m, h) {
          return /* @__PURE__ */ e.a.createElement("button", {
            key: "key".concat(h),
            onClick: function(y) {
              return u(y, m);
            },
            className: "".concat(c.a.selectOption, " ").concat(c.a.reactEditorTextLeft)
          }, /* @__PURE__ */ e.a.createElement("span", {
            className: c.a.reactEditorMe5
          }, m.icon), m.title);
        }));
      }
      var gi = fi;
      function vi(t) {
        return xi(t) || wi(t) || yi(t) || bi();
      }
      function bi() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function yi(t, r) {
        if (t) {
          if (typeof t == "string") return Fa(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? Fa(t, r) : void 0;
        }
      }
      function wi(t) {
        if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
      }
      function xi(t) {
        if (Array.isArray(t)) return Fa(t);
      }
      function Fa(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, u = Array(r); a < r; a++) u[a] = t[a];
        return u;
      }
      function _i(t) {
        var r = t.handleHideChildOptions, a = [1, 1.1, 1.2, 1.3, 1.4, 1.5, 2], u = function(h, w) {
          h.preventDeafult();
          var y = window.getSelection();
          if (y && y.rangeCount > 0 && y.toString().trim() !== "") {
            var _ = y.getRangeAt(0), E = "line-height: ".concat(w, ";"), B = function J(Q) {
              if (Q.nodeType === Node.TEXT_NODE) {
                var p = document.createElement("span");
                return p.style.cssText = E, p.appendChild(Q.cloneNode(!0)), p;
              } else if (Q.nodeType === Node.ELEMENT_NODE && Q.tagName.toLowerCase() === "p") {
                var de = Q.cloneNode(!1);
                return vi(Q.childNodes).forEach(function(q) {
                  de.appendChild(J(q));
                }), de;
              } else
                return Q.cloneNode(!0);
            }, W = B(_.cloneContents());
            _.deleteContents(), _.insertNode(W), y.removeAllRanges(), y.addRange(_);
          }
          r();
        };
        return /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, a.map(function(m, h) {
          return /* @__PURE__ */ e.a.createElement("button", {
            key: "key".concat(h),
            onClick: function(y) {
              return u(y, m);
            },
            className: c.a.selectOption
          }, m);
        }));
      }
      var ki = _i;
      function Ha(t, r) {
        return Si(t) || Ci(t, r) || Ai(t, r) || Ei();
      }
      function Ei() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Ai(t, r) {
        if (t) {
          if (typeof t == "string") return wn(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? wn(t, r) : void 0;
        }
      }
      function wn(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, u = Array(r); a < r; a++) u[a] = t[a];
        return u;
      }
      function Ci(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var u, m, h, w, y = [], _ = !0, E = !1;
          try {
            if (h = (a = a.call(t)).next, r !== 0) for (; !(_ = (u = h.call(a)).done) && (y.push(u.value), y.length !== r); _ = !0) ;
          } catch (B) {
            E = !0, m = B;
          } finally {
            try {
              if (!_ && a.return != null && (w = a.return(), Object(w) !== w)) return;
            } finally {
              if (E) throw m;
            }
          }
          return y;
        }
      }
      function Si(t) {
        if (Array.isArray(t)) return t;
      }
      function Ii(t) {
        var r, a = t.item, u = t.isFullScreen, m = t.remove_from_navbar, h = t.editorRef, w = a.options;
        w || (w = Kr);
        var y = Object(l.useState)(!1), _ = Ha(y, 2), E = _[0], B = _[1], W = Object(l.useState)(0), J = Ha(W, 2), Q = J[0], p = J[1], de = Object(l.useState)(0), q = Ha(de, 2), P = q[0], z = q[1], F = Wr(16), Y = function(Ze, Fe) {
          if (Fe) {
            var Me = document.getElementById(F), He = Me.getBoundingClientRect().top, Te = Fe.currentTarget.getBoundingClientRect().top;
            z(u ? Te : Te - He);
          }
          B(!0), p(Ze);
        }, ue = function() {
          B(!1), p(0);
        }, oe = function(Ze, Fe, Me) {
          Ze.preventDefault(), h.current.focus(), !(Me != null && Me.handleClick && (Me.handleClick(Me, a), !Me.add_functionality)) && (document.execCommand(Fe), ue());
        };
        if ((m == null ? void 0 : m.length) > 0) {
          var me, Oe = m.find(function(j) {
            return j.name === "format";
          });
          (Oe == null || (me = Oe.options) === null || me === void 0 ? void 0 : me.length) > 0 && (w = w.filter(function(j) {
            return !(Oe != null && Oe.options.includes(j));
          }));
        }
        return /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.customSelect,
          onMouseOver: function() {
            return B(!0);
          },
          onMouseLeave: ue,
          id: F
        }, a != null && a.title ? a.title : "Format", /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(c.a.selectItems, " ").concat(E ? "".concat(c.a.show) : "")
        }, ((r = w) === null || r === void 0 ? void 0 : r.length) > 0 && w.map(function(j, Ze) {
          var Fe = j === "bold" || j.name === "bold", Me = j === "italic" || j.name === "italic", He = j === "underline" || j.name === "underline", Te = j === "superscript" || j.name === "superscript", lt = j === "subscript" || j.name === "subscript", k = j === "font" || j.name === "font", f = j === "font_size" || j.name === "font_size", x = j === "alignment" || j.name === "alignment";
          return /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, Fe && /* @__PURE__ */ e.a.createElement("button", {
            className: c.a.selectInsert,
            onClick: function(M) {
              return oe(M, "bold", j);
            }
          }, j != null && j.icon ? j.icon : /* @__PURE__ */ e.a.createElement(ve, null), /* @__PURE__ */ e.a.createElement("span", null, j != null && j.title ? j.title : "Bold")), Me && /* @__PURE__ */ e.a.createElement("button", {
            className: c.a.selectInsert,
            onClick: function(M) {
              return oe(M, "italic", j);
            }
          }, j != null && j.icon ? j.icon : /* @__PURE__ */ e.a.createElement(At, null), /* @__PURE__ */ e.a.createElement("span", null, j != null && j.title ? j.title : "Italic")), He && /* @__PURE__ */ e.a.createElement("button", {
            className: c.a.selectInsert,
            onClick: function(M) {
              return oe(M, "underline", j);
            }
          }, j != null && j.icon ? j.icon : /* @__PURE__ */ e.a.createElement(te, null), /* @__PURE__ */ e.a.createElement("span", null, j != null && j.title ? j.title : "Underline")), Te && /* @__PURE__ */ e.a.createElement("button", {
            className: c.a.selectInsert,
            onClick: function(M) {
              return oe(M, "superscript", j);
            }
          }, j != null && j.icon ? j.icon : /* @__PURE__ */ e.a.createElement(ee, null), /* @__PURE__ */ e.a.createElement("span", null, j != null && j.title ? j.title : "Superscript")), lt && /* @__PURE__ */ e.a.createElement("button", {
            className: c.a.selectInsert,
            onClick: function(M) {
              return oe(M, "subscript", j);
            }
          }, j != null && j.icon ? j.icon : /* @__PURE__ */ e.a.createElement(Se, null), /* @__PURE__ */ e.a.createElement("span", null, j != null && j.title ? j.title : "Subscript")), k && /* @__PURE__ */ e.a.createElement("div", {
            onMouseOver: function(M) {
              Y(1, M);
            },
            onMouseLeave: ue
          }, /* @__PURE__ */ e.a.createElement("div", {
            className: c.a.selectInsert
          }, j != null && j.icon ? j.icon : /* @__PURE__ */ e.a.createElement(C, null), /* @__PURE__ */ e.a.createElement("span", null, j != null && j.title ? j.title : "Font Family"))), f && /* @__PURE__ */ e.a.createElement("div", {
            onMouseOver: function(M) {
              Y(2, M);
            },
            onMouseLeave: ue
          }, /* @__PURE__ */ e.a.createElement("div", {
            className: c.a.selectInsert
          }, j != null && j.icon ? j.icon : /* @__PURE__ */ e.a.createElement(L, null), /* @__PURE__ */ e.a.createElement("span", null, j != null && j.title ? j.title : "Font Size"))), x && /* @__PURE__ */ e.a.createElement("div", {
            onMouseOver: function(M) {
              Y(3, M);
            },
            onMouseLeave: ue
          }, /* @__PURE__ */ e.a.createElement("div", {
            className: c.a.selectInsert
          }, j != null && j.icon ? j.icon : /* @__PURE__ */ e.a.createElement(ge, null), /* @__PURE__ */ e.a.createElement("span", null, j != null && j.title ? j.title : "Align"))));
        })), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(c.a.selectFormationDropdown, " ").concat(Q === 1 ? "".concat(c.a.show) : ""),
          onMouseOver: function() {
            Y(1);
          },
          onMouseLeave: function() {
            return p(!1);
          },
          style: {
            top: P
          }
        }, /* @__PURE__ */ e.a.createElement(mi, {
          handleHideChildOptions: ue,
          editorRef: h
        })), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(c.a.selectFormationDropdown, " ").concat(c.a.fontSizeDropdown, " ").concat(Q === 2 ? "".concat(c.a.show) : ""),
          onMouseOver: function() {
            Y(2);
          },
          onMouseLeave: function() {
            return p(!1);
          },
          style: {
            top: P
          }
        }, /* @__PURE__ */ e.a.createElement(hi, {
          handleHideChildOptions: ue
        })), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(c.a.selectFormationDropdown, " ").concat(c.a.fontSizeDropdown, " ").concat(Q === 3 ? "".concat(c.a.show) : ""),
          onMouseOver: function() {
            Y(3);
          },
          onMouseLeave: function() {
            return p(!1);
          },
          style: {
            top: P
          }
        }, /* @__PURE__ */ e.a.createElement(gi, {
          handleHideChildOptions: ue
        })), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(c.a.selectFormationDropdown, " ").concat(c.a.fontSizeDropdown, " ").concat(Q === 4 ? "".concat(c.a.show) : ""),
          onMouseOver: function() {
            Y(4);
          },
          onMouseLeave: function() {
            return p(!1);
          },
          style: {
            top: P
          }
        }, /* @__PURE__ */ e.a.createElement(ki, {
          handleHideChildOptions: ue
        })));
      }
      function Pa(t, r) {
        return Ri(t) || Li(t, r) || Mi(t, r) || Ni();
      }
      function Ni() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Mi(t, r) {
        if (t) {
          if (typeof t == "string") return xn(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? xn(t, r) : void 0;
        }
      }
      function xn(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, u = Array(r); a < r; a++) u[a] = t[a];
        return u;
      }
      function Li(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var u, m, h, w, y = [], _ = !0, E = !1;
          try {
            if (h = (a = a.call(t)).next, r === 0) {
              if (Object(a) !== a) return;
              _ = !1;
            } else for (; !(_ = (u = h.call(a)).done) && (y.push(u.value), y.length !== r); _ = !0) ;
          } catch (B) {
            E = !0, m = B;
          } finally {
            try {
              if (!_ && a.return != null && (w = a.return(), Object(w) !== w)) return;
            } finally {
              if (E) throw m;
            }
          }
          return y;
        }
      }
      function Ri(t) {
        if (Array.isArray(t)) return t;
      }
      function Oi(t) {
        var r = t.match(/\d+/g), a = Pa(r, 3), u = a[0], m = a[1], h = a[2], w = parseInt(u).toString(16).padStart(2, "0"), y = parseInt(m).toString(16).padStart(2, "0"), _ = parseInt(h).toString(16).padStart(2, "0"), E = "#".concat(w).concat(y).concat(_);
        return E;
      }
      function _n(t) {
        var r = t.type, a = t.item, u = t.title, m = t.editorRef, h = Object(l.useState)("#000"), w = Pa(h, 2), y = w[0], _ = w[1], E = Object(l.useState)(!1), B = Pa(E, 2), W = B[0], J = B[1], Q = Object(l.useRef)(null), p = function(z, F, Y) {
          z.preventDefault(), Y || J(!1), !(a != null && a.handleClick && (a.handleClick(a), !a.add_functionality)) && (_(F), document.execCommand(r, !1, F), Y || J(!1));
        }, de = function(z) {
          z.preventDefault(), J(!0);
        }, q = function(z) {
          Q.current && !Q.current.contains(z.target) && J(!1);
        };
        return Object(l.useEffect)(function() {
          var P = function() {
            var F;
            if (m != null && (F = m.current) !== null && F !== void 0 && F.contains(window.getSelection().anchorNode)) {
              var Y = "transparent";
              if (r === "foreColor")
                Y = document.queryCommandValue(r);
              else {
                var ue = window.getSelection();
                if (ue.rangeCount > 0) {
                  var oe = ue.getRangeAt(0), me = oe.commonAncestorContainer;
                  if (me.nodeType === 3) {
                    var Oe = me.parentElement;
                    Y = window.getComputedStyle(Oe).backgroundColor;
                  } else
                    Y = window.getComputedStyle(me).backgroundColor;
                }
              }
              Y && Y !== "transparent" && _(Oi(Y));
            }
          };
          return document.addEventListener("selectionchange", P), document.addEventListener("mousedown", q), function() {
            document.removeEventListener("selectionchange", P), document.addEventListener("mousedown", q);
          };
        }, [m]), /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.mainColorComponent,
          ref: Q
        }, /* @__PURE__ */ e.a.createElement("button", {
          onClick: de,
          title: a != null && a.title ? a.title : u
        }, /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(c.a.reactEditorDFlex, " ").concat(c.a.reactEditorFlexColumn)
        }, a != null && a.icon ? a.icon : r === "foreColor" ? /* @__PURE__ */ e.a.createElement(N, null) : /* @__PURE__ */ e.a.createElement(b, null), /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.bottomColoredLine,
          style: {
            backgroundColor: y
          }
        }))), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(c.a.openColorBox, " ").concat(W ? c.a.show : "")
        }, /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(c.a.colorBoxGrid, " ").concat(c.a.reactEditorDFlex)
        }, /* @__PURE__ */ e.a.createElement("button", {
          className: c.a.colorBox,
          style: {
            backgroundColor: "#BFEDD2"
          },
          title: "Light Green",
          onClick: function(z) {
            return p(z, "#BFEDD2");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: c.a.colorBox,
          style: {
            backgroundColor: "#FBEEB8"
          },
          title: "Light Yellow",
          onClick: function(z) {
            return p(z, "#FBEEB8");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: c.a.colorBox,
          style: {
            backgroundColor: "#F8CAC6"
          },
          title: "Light Red",
          onClick: function(z) {
            return p(z, "#BFEDD2");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: c.a.colorBox,
          style: {
            backgroundColor: "#ECCAFA"
          },
          title: "Light Purple",
          onClick: function(z) {
            return p(z, "#ECCAFA");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: c.a.colorBox,
          style: {
            backgroundColor: "#C2E0F4"
          },
          title: "Light Blue",
          onClick: function(z) {
            return p(z, "#C2E0F4");
          }
        })), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(c.a.colorBoxGrid, " ").concat(c.a.reactEditorDFlex)
        }, /* @__PURE__ */ e.a.createElement("button", {
          className: c.a.colorBox,
          style: {
            backgroundColor: "#2DC26B"
          },
          title: "Green",
          onClick: function(z) {
            return p(z, "#2DC26B");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: c.a.colorBox,
          style: {
            backgroundColor: "#F1C40F"
          },
          title: "Yellow",
          onClick: function(z) {
            return p(z, "#F1C40F");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: c.a.colorBox,
          style: {
            backgroundColor: "#E03E2D"
          },
          title: "Red",
          onClick: function(z) {
            return p(z, "#E03E2D");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: c.a.colorBox,
          style: {
            backgroundColor: "#B96AD9"
          },
          title: "Purple",
          onClick: function(z) {
            return p(z, "#B96AD9");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: c.a.colorBox,
          style: {
            backgroundColor: "#3598DB"
          },
          title: "Blue",
          onClick: function(z) {
            return p(z, "#3598DB");
          }
        })), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(c.a.colorBoxGrid, " ").concat(c.a.reactEditorDFlex)
        }, /* @__PURE__ */ e.a.createElement("button", {
          className: c.a.colorBox,
          style: {
            backgroundColor: "#169179"
          },
          title: "Dark Turquoise",
          onClick: function(z) {
            return p(z, "#169179");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: c.a.colorBox,
          style: {
            backgroundColor: "#E67E23"
          },
          title: "Orange",
          onClick: function(z) {
            return p(z, "#E67E23");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: c.a.colorBox,
          style: {
            backgroundColor: "#BA372A"
          },
          title: "Dark Red",
          onClick: function(z) {
            return p(z, "#BA372A");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: c.a.colorBox,
          style: {
            backgroundColor: "#843FA1"
          },
          title: "Dark Purple",
          onClick: function(z) {
            return p(z, "#843FA1");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: c.a.colorBox,
          style: {
            backgroundColor: "#236FA1"
          },
          title: "Dark Blue",
          onClick: function(z) {
            return p(z, "#236FA1");
          }
        })), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(c.a.colorBoxGrid, " ").concat(c.a.reactEditorDFlex)
        }, /* @__PURE__ */ e.a.createElement("button", {
          className: c.a.colorBox,
          style: {
            backgroundColor: "#ECF0F1"
          },
          title: "Light Gray",
          onClick: function(z) {
            return p(z, "#ECF0F1");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: c.a.colorBox,
          style: {
            backgroundColor: "#CED4D9"
          },
          title: "Medium Gray",
          onClick: function(z) {
            return p(z, "#CED4D9");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: c.a.colorBox,
          style: {
            backgroundColor: "#95A5A6"
          },
          title: "Gray",
          onClick: function(z) {
            return p(z, "#95A5A6");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: c.a.colorBox,
          style: {
            backgroundColor: "#7E8C8D"
          },
          title: "Dark Gray",
          onClick: function(z) {
            return p(z, "#7E8C8D");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: c.a.colorBox,
          style: {
            backgroundColor: "#34495E"
          },
          title: "Navy Blue",
          onClick: function(z) {
            return p(z, "#34495E");
          }
        })), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(c.a.colorBoxGrid, " ").concat(c.a.reactEditorDFlex)
        }, /* @__PURE__ */ e.a.createElement("button", {
          className: c.a.colorBox,
          style: {
            backgroundColor: "#fff"
          },
          title: "White",
          onClick: function(z) {
            return p(z, "#fff");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: c.a.colorBox,
          style: {
            backgroundColor: "#000"
          },
          title: "Black",
          onClick: function(z) {
            return p(z, "#000");
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: c.a.colorBox,
          style: {
            pointerEvents: "none"
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: c.a.colorBox,
          style: {
            pointerEvents: "none"
          }
        }), /* @__PURE__ */ e.a.createElement("button", {
          className: c.a.colorBox,
          title: "Custom color",
          style: {
            cursor: "pointer",
            display: "flex",
            alignItems: "center"
          }
        }, /* @__PURE__ */ e.a.createElement("input", {
          id: "input-color",
          type: "color",
          value: y,
          onChange: function(z) {
            return p(z, z.target.value, "input");
          }
        })))));
      }
      function kn(t) {
        var r = t.name, a = t.icon, u = t.title, m = t.item, h = t.editorRef, w = function(_) {
          _.preventDefault(), !(m != null && m.handleClick && (m.handleClick(m), !m.add_functionality)) && h.current && (h.current.dir = r);
        };
        return /* @__PURE__ */ e.a.createElement("button", {
          onClick: w,
          title: m != null && m.title ? m.title : u
        }, m != null && m.icon ? m.icon : a);
      }
      var Di = function() {
        return /* @__PURE__ */ ia.a.createPortal(/* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(c.a.modalOverlay, " ").concat(c.a.imageModelOverly)
        }, /* @__PURE__ */ e.a.createElement("div", {
          onClick: function(a) {
            return a.stopPropagation();
          }
        }, /* @__PURE__ */ e.a.createElement("img", {
          src: et,
          alt: ""
        }))), document.getElementById("modal-root"));
      }, Bi = Di;
      function En() {
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
      function An() {
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
      function Cn() {
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
      function zr(t) {
        "@babel/helpers - typeof";
        return zr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
          return typeof r;
        } : function(r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
        }, zr(t);
      }
      function Ua() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
        Ua = function() {
          return r;
        };
        var t, r = {}, a = Object.prototype, u = a.hasOwnProperty, m = Object.defineProperty || function(k, f, x) {
          k[f] = x.value;
        }, h = typeof Symbol == "function" ? Symbol : {}, w = h.iterator || "@@iterator", y = h.asyncIterator || "@@asyncIterator", _ = h.toStringTag || "@@toStringTag";
        function E(k, f, x) {
          return Object.defineProperty(k, f, { value: x, enumerable: !0, configurable: !0, writable: !0 }), k[f];
        }
        try {
          E({}, "");
        } catch {
          E = function(x, D, M) {
            return x[D] = M;
          };
        }
        function B(k, f, x, D) {
          var M = f && f.prototype instanceof P ? f : P, O = Object.create(M.prototype), he = new Te(D || []);
          return m(O, "_invoke", { value: Ze(k, x, he) }), O;
        }
        function W(k, f, x) {
          try {
            return { type: "normal", arg: k.call(f, x) };
          } catch (D) {
            return { type: "throw", arg: D };
          }
        }
        r.wrap = B;
        var J = "suspendedStart", Q = "suspendedYield", p = "executing", de = "completed", q = {};
        function P() {
        }
        function z() {
        }
        function F() {
        }
        var Y = {};
        E(Y, w, function() {
          return this;
        });
        var ue = Object.getPrototypeOf, oe = ue && ue(ue(lt([])));
        oe && oe !== a && u.call(oe, w) && (Y = oe);
        var me = F.prototype = P.prototype = Object.create(Y);
        function Oe(k) {
          ["next", "throw", "return"].forEach(function(f) {
            E(k, f, function(x) {
              return this._invoke(f, x);
            });
          });
        }
        function j(k, f) {
          function x(M, O, he, De) {
            var je = W(k[M], k, O);
            if (je.type !== "throw") {
              var Xe = je.arg, rt = Xe.value;
              return rt && zr(rt) == "object" && u.call(rt, "__await") ? f.resolve(rt.__await).then(function(nt) {
                x("next", nt, he, De);
              }, function(nt) {
                x("throw", nt, he, De);
              }) : f.resolve(rt).then(function(nt) {
                Xe.value = nt, he(Xe);
              }, function(nt) {
                return x("throw", nt, he, De);
              });
            }
            De(je.arg);
          }
          var D;
          m(this, "_invoke", { value: function(O, he) {
            function De() {
              return new f(function(je, Xe) {
                x(O, he, je, Xe);
              });
            }
            return D = D ? D.then(De, De) : De();
          } });
        }
        function Ze(k, f, x) {
          var D = J;
          return function(M, O) {
            if (D === p) throw Error("Generator is already running");
            if (D === de) {
              if (M === "throw") throw O;
              return { value: t, done: !0 };
            }
            for (x.method = M, x.arg = O; ; ) {
              var he = x.delegate;
              if (he) {
                var De = Fe(he, x);
                if (De) {
                  if (De === q) continue;
                  return De;
                }
              }
              if (x.method === "next") x.sent = x._sent = x.arg;
              else if (x.method === "throw") {
                if (D === J) throw D = de, x.arg;
                x.dispatchException(x.arg);
              } else x.method === "return" && x.abrupt("return", x.arg);
              D = p;
              var je = W(k, f, x);
              if (je.type === "normal") {
                if (D = x.done ? de : Q, je.arg === q) continue;
                return { value: je.arg, done: x.done };
              }
              je.type === "throw" && (D = de, x.method = "throw", x.arg = je.arg);
            }
          };
        }
        function Fe(k, f) {
          var x = f.method, D = k.iterator[x];
          if (D === t) return f.delegate = null, x === "throw" && k.iterator.return && (f.method = "return", f.arg = t, Fe(k, f), f.method === "throw") || x !== "return" && (f.method = "throw", f.arg = new TypeError("The iterator does not provide a '" + x + "' method")), q;
          var M = W(D, k.iterator, f.arg);
          if (M.type === "throw") return f.method = "throw", f.arg = M.arg, f.delegate = null, q;
          var O = M.arg;
          return O ? O.done ? (f[k.resultName] = O.value, f.next = k.nextLoc, f.method !== "return" && (f.method = "next", f.arg = t), f.delegate = null, q) : O : (f.method = "throw", f.arg = new TypeError("iterator result is not an object"), f.delegate = null, q);
        }
        function Me(k) {
          var f = { tryLoc: k[0] };
          1 in k && (f.catchLoc = k[1]), 2 in k && (f.finallyLoc = k[2], f.afterLoc = k[3]), this.tryEntries.push(f);
        }
        function He(k) {
          var f = k.completion || {};
          f.type = "normal", delete f.arg, k.completion = f;
        }
        function Te(k) {
          this.tryEntries = [{ tryLoc: "root" }], k.forEach(Me, this), this.reset(!0);
        }
        function lt(k) {
          if (k || k === "") {
            var f = k[w];
            if (f) return f.call(k);
            if (typeof k.next == "function") return k;
            if (!isNaN(k.length)) {
              var x = -1, D = function M() {
                for (; ++x < k.length; ) if (u.call(k, x)) return M.value = k[x], M.done = !1, M;
                return M.value = t, M.done = !0, M;
              };
              return D.next = D;
            }
          }
          throw new TypeError(zr(k) + " is not iterable");
        }
        return z.prototype = F, m(me, "constructor", { value: F, configurable: !0 }), m(F, "constructor", { value: z, configurable: !0 }), z.displayName = E(F, _, "GeneratorFunction"), r.isGeneratorFunction = function(k) {
          var f = typeof k == "function" && k.constructor;
          return !!f && (f === z || (f.displayName || f.name) === "GeneratorFunction");
        }, r.mark = function(k) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(k, F) : (k.__proto__ = F, E(k, _, "GeneratorFunction")), k.prototype = Object.create(me), k;
        }, r.awrap = function(k) {
          return { __await: k };
        }, Oe(j.prototype), E(j.prototype, y, function() {
          return this;
        }), r.AsyncIterator = j, r.async = function(k, f, x, D, M) {
          M === void 0 && (M = Promise);
          var O = new j(B(k, f, x, D), M);
          return r.isGeneratorFunction(f) ? O : O.next().then(function(he) {
            return he.done ? he.value : O.next();
          });
        }, Oe(me), E(me, _, "Generator"), E(me, w, function() {
          return this;
        }), E(me, "toString", function() {
          return "[object Generator]";
        }), r.keys = function(k) {
          var f = Object(k), x = [];
          for (var D in f) x.push(D);
          return x.reverse(), function M() {
            for (; x.length; ) {
              var O = x.pop();
              if (O in f) return M.value = O, M.done = !1, M;
            }
            return M.done = !0, M;
          };
        }, r.values = lt, Te.prototype = { constructor: Te, reset: function(f) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(He), !f) for (var x in this) x.charAt(0) === "t" && u.call(this, x) && !isNaN(+x.slice(1)) && (this[x] = t);
        }, stop: function() {
          this.done = !0;
          var f = this.tryEntries[0].completion;
          if (f.type === "throw") throw f.arg;
          return this.rval;
        }, dispatchException: function(f) {
          if (this.done) throw f;
          var x = this;
          function D(Xe, rt) {
            return he.type = "throw", he.arg = f, x.next = Xe, rt && (x.method = "next", x.arg = t), !!rt;
          }
          for (var M = this.tryEntries.length - 1; M >= 0; --M) {
            var O = this.tryEntries[M], he = O.completion;
            if (O.tryLoc === "root") return D("end");
            if (O.tryLoc <= this.prev) {
              var De = u.call(O, "catchLoc"), je = u.call(O, "finallyLoc");
              if (De && je) {
                if (this.prev < O.catchLoc) return D(O.catchLoc, !0);
                if (this.prev < O.finallyLoc) return D(O.finallyLoc);
              } else if (De) {
                if (this.prev < O.catchLoc) return D(O.catchLoc, !0);
              } else {
                if (!je) throw Error("try statement without catch or finally");
                if (this.prev < O.finallyLoc) return D(O.finallyLoc);
              }
            }
          }
        }, abrupt: function(f, x) {
          for (var D = this.tryEntries.length - 1; D >= 0; --D) {
            var M = this.tryEntries[D];
            if (M.tryLoc <= this.prev && u.call(M, "finallyLoc") && this.prev < M.finallyLoc) {
              var O = M;
              break;
            }
          }
          O && (f === "break" || f === "continue") && O.tryLoc <= x && x <= O.finallyLoc && (O = null);
          var he = O ? O.completion : {};
          return he.type = f, he.arg = x, O ? (this.method = "next", this.next = O.finallyLoc, q) : this.complete(he);
        }, complete: function(f, x) {
          if (f.type === "throw") throw f.arg;
          return f.type === "break" || f.type === "continue" ? this.next = f.arg : f.type === "return" ? (this.rval = this.arg = f.arg, this.method = "return", this.next = "end") : f.type === "normal" && x && (this.next = x), q;
        }, finish: function(f) {
          for (var x = this.tryEntries.length - 1; x >= 0; --x) {
            var D = this.tryEntries[x];
            if (D.finallyLoc === f) return this.complete(D.completion, D.afterLoc), He(D), q;
          }
        }, catch: function(f) {
          for (var x = this.tryEntries.length - 1; x >= 0; --x) {
            var D = this.tryEntries[x];
            if (D.tryLoc === f) {
              var M = D.completion;
              if (M.type === "throw") {
                var O = M.arg;
                He(D);
              }
              return O;
            }
          }
          throw Error("illegal catch attempt");
        }, delegateYield: function(f, x, D) {
          return this.delegate = { iterator: lt(f), resultName: x, nextLoc: D }, this.method === "next" && (this.arg = t), q;
        } }, r;
      }
      function Sn(t, r, a, u, m, h, w) {
        try {
          var y = t[h](w), _ = y.value;
        } catch (E) {
          return void a(E);
        }
        y.done ? r(_) : Promise.resolve(_).then(u, m);
      }
      function ji(t) {
        return function() {
          var r = this, a = arguments;
          return new Promise(function(u, m) {
            var h = t.apply(r, a);
            function w(_) {
              Sn(h, u, m, w, y, "next", _);
            }
            function y(_) {
              Sn(h, u, m, w, y, "throw", _);
            }
            w(void 0);
          });
        };
      }
      function In(t, r) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(t);
          r && (u = u.filter(function(m) {
            return Object.getOwnPropertyDescriptor(t, m).enumerable;
          })), a.push.apply(a, u);
        }
        return a;
      }
      function la(t) {
        for (var r = 1; r < arguments.length; r++) {
          var a = arguments[r] != null ? arguments[r] : {};
          r % 2 ? In(Object(a), !0).forEach(function(u) {
            Nn(t, u, a[u]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : In(Object(a)).forEach(function(u) {
            Object.defineProperty(t, u, Object.getOwnPropertyDescriptor(a, u));
          });
        }
        return t;
      }
      function Nn(t, r, a) {
        return (r = zi(r)) in t ? Object.defineProperty(t, r, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : t[r] = a, t;
      }
      function zi(t) {
        var r = Ti(t, "string");
        return zr(r) == "symbol" ? r : r + "";
      }
      function Ti(t, r) {
        if (zr(t) != "object" || !t) return t;
        var a = t[Symbol.toPrimitive];
        if (a !== void 0) {
          var u = a.call(t, r);
          if (zr(u) != "object") return u;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (r === "string" ? String : Number)(t);
      }
      function Mn(t, r) {
        return Ui(t) || Pi(t, r) || Hi(t, r) || Fi();
      }
      function Fi() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Hi(t, r) {
        if (t) {
          if (typeof t == "string") return Ln(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? Ln(t, r) : void 0;
        }
      }
      function Ln(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, u = Array(r); a < r; a++) u[a] = t[a];
        return u;
      }
      function Pi(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var u, m, h, w, y = [], _ = !0, E = !1;
          try {
            if (h = (a = a.call(t)).next, r !== 0) for (; !(_ = (u = h.call(a)).done) && (y.push(u.value), y.length !== r); _ = !0) ;
          } catch (B) {
            E = !0, m = B;
          } finally {
            try {
              if (!_ && a.return != null && (w = a.return(), Object(w) !== w)) return;
            } finally {
              if (E) throw m;
            }
          }
          return y;
        }
      }
      function Ui(t) {
        if (Array.isArray(t)) return t;
      }
      function Qi(t) {
        var r = t.onLinkInsert, a = t.item, u = t.setIsOpenModel, m = t.selectedData, h = t.imageUrl, w = t.setImageUrl, y = t.image_handler, _ = t.setIsLoading, E = Object(l.useState)({}), B = Mn(E, 2), W = B[0], J = B[1], Q = Object(l.useState)({
          text: "",
          link: "",
          open_new_tab: !1,
          link_type: "text"
        }), p = Mn(Q, 2), de = p[0], q = p[1], P = function(me) {
          if (me.preventDefault(), de.link) {
            if (de.link_type === "image" && !h) {
              var j = {
                type: "image",
                message: "Please upload image"
              };
              J(j);
              return;
            } else if (de.link_type === "button" && !de.text) {
              var Ze = {
                type: "button",
                message: "Please add text to display on button"
              };
              J(Ze);
              return;
            }
          } else {
            var Oe = {
              type: "link",
              message: "Please add link URL"
            };
            J(Oe);
            return;
          }
          if (a != null && a.handleSubmit && (a.handleSubmit(a), !a.add_functionality)) {
            u("");
            return;
          }
          r(de);
        }, z = function(me) {
          var Oe = me.target, j = Oe.name, Ze = Oe.value;
          q(function(Fe) {
            return la(la({}, Fe), {}, Nn({}, j, Ze));
          });
        }, F = function() {
          w("");
        }, Y = /* @__PURE__ */ function() {
          var oe = ji(/* @__PURE__ */ Ua().mark(function me(Oe) {
            var j, Ze, Fe;
            return Ua().wrap(function(He) {
              for (; ; ) switch (He.prev = He.next) {
                case 0:
                  if (j = Oe.target.files, Ze = {
                    image: j[0]
                  }, !y) {
                    He.next = 10;
                    break;
                  }
                  return _(!0), He.next = 6, y(Ze);
                case 6:
                  Fe = He.sent, Fe && w(Fe), _(!1), He.next = 11;
                  break;
                case 10:
                  w(URL.createObjectURL(Ze.image));
                case 11:
                case "end":
                  return He.stop();
              }
            }, me);
          }));
          return function(Oe) {
            return oe.apply(this, arguments);
          };
        }(), ue = function(me, Oe) {
          me.preventDefault(), q(function(j) {
            return la(la({}, j), {}, {
              link_type: Oe
            });
          }), J("");
        };
        return Object(l.useEffect)(function() {
          if (m != null && m.text) {
            var oe = la({}, m), me = oe.link_type;
            me || (oe.link_type = "text"), q(oe);
          }
        }, [m]), /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.selectType
        }, /* @__PURE__ */ e.a.createElement("button", {
          className: "".concat(de.link_type === "text" ? c.a.selectedType : ""),
          onClick: function(me) {
            return ue(me, "text");
          }
        }, "Text"), /* @__PURE__ */ e.a.createElement("button", {
          className: "".concat(de.link_type === "image" ? c.a.selectedType : ""),
          onClick: function(me) {
            return ue(me, "image");
          }
        }, "Image"), /* @__PURE__ */ e.a.createElement("button", {
          className: "".concat(de.link_type === "button" ? c.a.selectedType : ""),
          onClick: function(me) {
            return ue(me, "button");
          }
        }, "Button")), /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.reactEditorMt10
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "link"
        }, "URL*"), /* @__PURE__ */ e.a.createElement("input", {
          id: "link",
          type: "text",
          name: "link",
          autoFocus: !0,
          className: c.a.formControlInput,
          value: de.link,
          onChange: z
        }), W.type === "link" && /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.editorErrorMessage
        }, "*", "".concat(W.message))), de.link_type === "image" ? /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, h ? /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.linkImageBox
        }, /* @__PURE__ */ e.a.createElement("span", {
          className: c.a.linkImageCross,
          onClick: F
        }, "x"), /* @__PURE__ */ e.a.createElement("img", {
          src: h,
          alt: "ImageLink",
          className: c.a.linkImage
        })) : /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.reactEditorMt10
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "image"
        }, "Choose File *"), /* @__PURE__ */ e.a.createElement("input", {
          type: "file",
          id: "image",
          name: "image",
          className: c.a.formControlInput,
          accept: "image/*",
          onChange: Y
        }), W.type === "image" && /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.editorErrorMessage
        }, "*", "".concat(W.message)))) : /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.reactEditorMt10
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "text"
        }, "Text to display ".concat(de.link_type === "button" ? "*" : "")), /* @__PURE__ */ e.a.createElement("input", {
          id: "text",
          type: "text",
          name: "text",
          value: de.text,
          onChange: z,
          className: c.a.formControlInput
        }), W.type === "button" && /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.editorErrorMessage
        }, "*", "".concat(W.message))), /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.reactEditorMt10
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "open_new_tab"
        }, "Open in"), /* @__PURE__ */ e.a.createElement("select", {
          name: "open_new_tab",
          id: "open_new_tab",
          className: "".concat(c.a.formControlInput, " ").concat(c.a.reactEditorMt2),
          value: de.open_new_tab,
          onChange: z
        }, /* @__PURE__ */ e.a.createElement("option", {
          value: !1
        }, "Current window"), /* @__PURE__ */ e.a.createElement("option", {
          value: !0
        }, "New window"))), /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.reactEditorTextEnd
        }, /* @__PURE__ */ e.a.createElement("button", {
          className: c.a.saveButton,
          onClick: P
        }, "Save"))));
      }
      var Gi = Object.defineProperty, Yi = (t, r, a) => r in t ? Gi(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[r] = a, yt = (t, r, a) => Yi(t, typeof r != "symbol" ? r + "" : r, a);
      const wa = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        unit: "px"
      }, Xr = (t, r, a) => Math.min(Math.max(t, r), a), Ki = (...t) => t.filter((r) => r && typeof r == "string").join(" "), Rn = (t, r) => t === r || t.width === r.width && t.height === r.height && t.x === r.x && t.y === r.y && t.unit === r.unit;
      function ea(t, r, a) {
        return t.unit === "%" ? { ...wa, ...t, unit: "%" } : {
          unit: "%",
          x: t.x ? t.x / r * 100 : 0,
          y: t.y ? t.y / a * 100 : 0,
          width: t.width ? t.width / r * 100 : 0,
          height: t.height ? t.height / a * 100 : 0
        };
      }
      function Er(t, r, a) {
        return t.unit ? t.unit === "px" ? { ...wa, ...t, unit: "px" } : {
          unit: "px",
          x: t.x ? t.x * r / 100 : 0,
          y: t.y ? t.y * a / 100 : 0,
          width: t.width ? t.width * r / 100 : 0,
          height: t.height ? t.height * a / 100 : 0
        } : { ...wa, ...t, unit: "px" };
      }
      function On(t, r, a, u, m, h = 0, w = 0, y = u, _ = m) {
        const E = { ...t };
        let B = Math.min(h, u), W = Math.min(w, m), J = Math.min(y, u), Q = Math.min(_, m);
        r && (r > 1 ? (B = w ? w * r : B, W = B / r, J = y * r) : (W = h ? h / r : W, B = W * r, Q = _ / r)), E.y < 0 && (E.height = Math.max(E.height + E.y, W), E.y = 0), E.x < 0 && (E.width = Math.max(E.width + E.x, B), E.x = 0);
        const p = u - (E.x + E.width);
        p < 0 && (E.x = Math.min(E.x, u - B), E.width += p);
        const de = m - (E.y + E.height);
        if (de < 0 && (E.y = Math.min(E.y, m - W), E.height += de), E.width < B && ((a === "sw" || a == "nw") && (E.x -= B - E.width), E.width = B), E.height < W && ((a === "nw" || a == "ne") && (E.y -= W - E.height), E.height = W), E.width > J && ((a === "sw" || a == "nw") && (E.x -= J - E.width), E.width = J), E.height > Q && ((a === "nw" || a == "ne") && (E.y -= Q - E.height), E.height = Q), r) {
          const q = E.width / E.height;
          if (q < r) {
            const P = Math.max(E.width / r, W);
            (a === "nw" || a == "ne") && (E.y -= P - E.height), E.height = P;
          } else if (q > r) {
            const P = Math.max(E.height * r, B);
            (a === "sw" || a == "nw") && (E.x -= P - E.width), E.width = P;
          }
        }
        return E;
      }
      function Vi(t, r, a, u) {
        const m = { ...t };
        return r === "ArrowLeft" ? u === "nw" ? (m.x -= a, m.y -= a, m.width += a, m.height += a) : u === "w" ? (m.x -= a, m.width += a) : u === "sw" ? (m.x -= a, m.width += a, m.height += a) : u === "ne" ? (m.y += a, m.width -= a, m.height -= a) : u === "e" ? m.width -= a : u === "se" && (m.width -= a, m.height -= a) : r === "ArrowRight" && (u === "nw" ? (m.x += a, m.y += a, m.width -= a, m.height -= a) : u === "w" ? (m.x += a, m.width -= a) : u === "sw" ? (m.x += a, m.width -= a, m.height -= a) : u === "ne" ? (m.y -= a, m.width += a, m.height += a) : u === "e" ? m.width += a : u === "se" && (m.width += a, m.height += a)), r === "ArrowUp" ? u === "nw" ? (m.x -= a, m.y -= a, m.width += a, m.height += a) : u === "n" ? (m.y -= a, m.height += a) : u === "ne" ? (m.y -= a, m.width += a, m.height += a) : u === "sw" ? (m.x += a, m.width -= a, m.height -= a) : u === "s" ? m.height -= a : u === "se" && (m.width -= a, m.height -= a) : r === "ArrowDown" && (u === "nw" ? (m.x += a, m.y += a, m.width -= a, m.height -= a) : u === "n" ? (m.y += a, m.height -= a) : u === "ne" ? (m.y += a, m.width -= a, m.height -= a) : u === "sw" ? (m.x -= a, m.width += a, m.height += a) : u === "s" ? m.height += a : u === "se" && (m.width += a, m.height += a)), m;
      }
      const ta = { capture: !0, passive: !1 };
      let Wi = 0;
      const Ar = class cr extends l.PureComponent {
        constructor() {
          super(...arguments), yt(this, "docMoveBound", !1), yt(this, "mouseDownOnCrop", !1), yt(this, "dragStarted", !1), yt(this, "evData", {
            startClientX: 0,
            startClientY: 0,
            startCropX: 0,
            startCropY: 0,
            clientX: 0,
            clientY: 0,
            isResize: !0
          }), yt(this, "componentRef", Object(l.createRef)()), yt(this, "mediaRef", Object(l.createRef)()), yt(this, "resizeObserver"), yt(this, "initChangeCalled", !1), yt(this, "instanceId", `rc-${Wi++}`), yt(this, "state", {
            cropIsActive: !1,
            newCropIsBeingDrawn: !1
          }), yt(this, "onCropPointerDown", (r) => {
            const { crop: a, disabled: u } = this.props, m = this.getBox();
            if (!a)
              return;
            const h = Er(a, m.width, m.height);
            if (u)
              return;
            r.cancelable && r.preventDefault(), this.bindDocMove(), this.componentRef.current.focus({ preventScroll: !0 });
            const w = r.target.dataset.ord, y = !!w;
            let _ = r.clientX, E = r.clientY, B = h.x, W = h.y;
            if (w) {
              const J = r.clientX - m.x, Q = r.clientY - m.y;
              let p = 0, de = 0;
              w === "ne" || w == "e" ? (p = J - (h.x + h.width), de = Q - h.y, B = h.x, W = h.y + h.height) : w === "se" || w === "s" ? (p = J - (h.x + h.width), de = Q - (h.y + h.height), B = h.x, W = h.y) : w === "sw" || w == "w" ? (p = J - h.x, de = Q - (h.y + h.height), B = h.x + h.width, W = h.y) : (w === "nw" || w == "n") && (p = J - h.x, de = Q - h.y, B = h.x + h.width, W = h.y + h.height), _ = B + m.x + p, E = W + m.y + de;
            }
            this.evData = {
              startClientX: _,
              startClientY: E,
              startCropX: B,
              startCropY: W,
              clientX: r.clientX,
              clientY: r.clientY,
              isResize: y,
              ord: w
            }, this.mouseDownOnCrop = !0, this.setState({ cropIsActive: !0 });
          }), yt(this, "onComponentPointerDown", (r) => {
            const { crop: a, disabled: u, locked: m, keepSelection: h, onChange: w } = this.props, y = this.getBox();
            if (u || m || h && a)
              return;
            r.cancelable && r.preventDefault(), this.bindDocMove(), this.componentRef.current.focus({ preventScroll: !0 });
            const _ = r.clientX - y.x, E = r.clientY - y.y, B = {
              unit: "px",
              x: _,
              y: E,
              width: 0,
              height: 0
            };
            this.evData = {
              startClientX: r.clientX,
              startClientY: r.clientY,
              startCropX: _,
              startCropY: E,
              clientX: r.clientX,
              clientY: r.clientY,
              isResize: !0
            }, this.mouseDownOnCrop = !0, w(Er(B, y.width, y.height), ea(B, y.width, y.height)), this.setState({ cropIsActive: !0, newCropIsBeingDrawn: !0 });
          }), yt(this, "onDocPointerMove", (r) => {
            const { crop: a, disabled: u, onChange: m, onDragStart: h } = this.props, w = this.getBox();
            if (u || !a || !this.mouseDownOnCrop)
              return;
            r.cancelable && r.preventDefault(), this.dragStarted || (this.dragStarted = !0, h && h(r));
            const { evData: y } = this;
            y.clientX = r.clientX, y.clientY = r.clientY;
            let _;
            y.isResize ? _ = this.resizeCrop() : _ = this.dragCrop(), Rn(a, _) || m(
              Er(_, w.width, w.height),
              ea(_, w.width, w.height)
            );
          }), yt(this, "onComponentKeyDown", (r) => {
            const { crop: a, disabled: u, onChange: m, onComplete: h } = this.props;
            if (u)
              return;
            const w = r.key;
            let y = !1;
            if (!a)
              return;
            const _ = this.getBox(), E = this.makePixelCrop(_), B = (navigator.platform.match("Mac") ? r.metaKey : r.ctrlKey) ? cr.nudgeStepLarge : r.shiftKey ? cr.nudgeStepMedium : cr.nudgeStep;
            if (w === "ArrowLeft" ? (E.x -= B, y = !0) : w === "ArrowRight" ? (E.x += B, y = !0) : w === "ArrowUp" ? (E.y -= B, y = !0) : w === "ArrowDown" && (E.y += B, y = !0), y) {
              r.cancelable && r.preventDefault(), E.x = Xr(E.x, 0, _.width - E.width), E.y = Xr(E.y, 0, _.height - E.height);
              const W = Er(E, _.width, _.height), J = ea(E, _.width, _.height);
              m(W, J), h && h(W, J);
            }
          }), yt(this, "onHandlerKeyDown", (r, a) => {
            const {
              aspect: u = 0,
              crop: m,
              disabled: h,
              minWidth: w = 0,
              minHeight: y = 0,
              maxWidth: _,
              maxHeight: E,
              onChange: B,
              onComplete: W
            } = this.props, J = this.getBox();
            if (h || !m)
              return;
            if (r.key === "ArrowUp" || r.key === "ArrowDown" || r.key === "ArrowLeft" || r.key === "ArrowRight")
              r.stopPropagation(), r.preventDefault();
            else
              return;
            const Q = (navigator.platform.match("Mac") ? r.metaKey : r.ctrlKey) ? cr.nudgeStepLarge : r.shiftKey ? cr.nudgeStepMedium : cr.nudgeStep, p = Er(m, J.width, J.height), de = Vi(p, r.key, Q, a), q = On(
              de,
              u,
              a,
              J.width,
              J.height,
              w,
              y,
              _,
              E
            );
            if (!Rn(m, q)) {
              const P = ea(q, J.width, J.height);
              B(q, P), W && W(q, P);
            }
          }), yt(this, "onDocPointerDone", (r) => {
            const { crop: a, disabled: u, onComplete: m, onDragEnd: h } = this.props, w = this.getBox();
            this.unbindDocMove(), !(u || !a) && this.mouseDownOnCrop && (this.mouseDownOnCrop = !1, this.dragStarted = !1, h && h(r), m && m(Er(a, w.width, w.height), ea(a, w.width, w.height)), this.setState({ cropIsActive: !1, newCropIsBeingDrawn: !1 }));
          }), yt(this, "onDragFocus", () => {
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
          const { x: a, y: u, width: m, height: h } = r.getBoundingClientRect();
          return { x: a, y: u, width: m, height: h };
        }
        componentDidUpdate(r) {
          const { crop: a, onComplete: u } = this.props;
          if (u && !r.crop && a) {
            const { width: m, height: h } = this.getBox();
            m && h && u(Er(a, m, h), ea(a, m, h));
          }
        }
        componentWillUnmount() {
          this.resizeObserver && this.resizeObserver.disconnect(), this.unbindDocMove();
        }
        bindDocMove() {
          this.docMoveBound || (this.document.addEventListener("pointermove", this.onDocPointerMove, ta), this.document.addEventListener("pointerup", this.onDocPointerDone, ta), this.document.addEventListener("pointercancel", this.onDocPointerDone, ta), this.docMoveBound = !0);
        }
        unbindDocMove() {
          this.docMoveBound && (this.document.removeEventListener("pointermove", this.onDocPointerMove, ta), this.document.removeEventListener("pointerup", this.onDocPointerDone, ta), this.document.removeEventListener("pointercancel", this.onDocPointerDone, ta), this.docMoveBound = !1);
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
          const { evData: r } = this, a = this.getBox(), u = this.makePixelCrop(a), m = r.clientX - r.startClientX, h = r.clientY - r.startClientY;
          return u.x = Xr(r.startCropX + m, 0, a.width - u.width), u.y = Xr(r.startCropY + h, 0, a.height - u.height), u;
        }
        getPointRegion(r, a, u, m) {
          const { evData: h } = this, w = h.clientX - r.x, y = h.clientY - r.y;
          let _;
          m && a ? _ = a === "nw" || a === "n" || a === "ne" : _ = y < h.startCropY;
          let E;
          return u && a ? E = a === "nw" || a === "w" || a === "sw" : E = w < h.startCropX, E ? _ ? "nw" : "sw" : _ ? "ne" : "se";
        }
        resolveMinDimensions(r, a, u = 0, m = 0) {
          const h = Math.min(u, r.width), w = Math.min(m, r.height);
          return !a || !h && !w ? [h, w] : a > 1 ? h ? [h, h / a] : [w * a, w] : w ? [w * a, w] : [h, h / a];
        }
        resizeCrop() {
          const { evData: r } = this, { aspect: a = 0, maxWidth: u, maxHeight: m } = this.props, h = this.getBox(), [w, y] = this.resolveMinDimensions(h, a, this.props.minWidth, this.props.minHeight);
          let _ = this.makePixelCrop(h);
          const E = this.getPointRegion(h, r.ord, w, y), B = r.ord || E;
          let W = r.clientX - r.startClientX, J = r.clientY - r.startClientY;
          (w && B === "nw" || B === "w" || B === "sw") && (W = Math.min(W, -w)), (y && B === "nw" || B === "n" || B === "ne") && (J = Math.min(J, -y));
          const Q = {
            unit: "px",
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
          E === "ne" ? (Q.x = r.startCropX, Q.width = W, a ? (Q.height = Q.width / a, Q.y = r.startCropY - Q.height) : (Q.height = Math.abs(J), Q.y = r.startCropY - Q.height)) : E === "se" ? (Q.x = r.startCropX, Q.y = r.startCropY, Q.width = W, a ? Q.height = Q.width / a : Q.height = J) : E === "sw" ? (Q.x = r.startCropX + W, Q.y = r.startCropY, Q.width = Math.abs(W), a ? Q.height = Q.width / a : Q.height = J) : E === "nw" && (Q.x = r.startCropX + W, Q.width = Math.abs(W), a ? (Q.height = Q.width / a, Q.y = r.startCropY - Q.height) : (Q.height = Math.abs(J), Q.y = r.startCropY + J));
          const p = On(
            Q,
            a,
            E,
            h.width,
            h.height,
            w,
            y,
            u,
            m
          );
          return a || cr.xyOrds.indexOf(B) > -1 ? _ = p : cr.xOrds.indexOf(B) > -1 ? (_.x = p.x, _.width = p.width) : cr.yOrds.indexOf(B) > -1 && (_.y = p.y, _.height = p.height), _.x = Xr(_.x, 0, h.width - _.width), _.y = Xr(_.y, 0, h.height - _.height), _;
        }
        renderCropSelection() {
          const {
            ariaLabels: r = cr.defaultProps.ariaLabels,
            disabled: a,
            locked: u,
            renderSelectionAddon: m,
            ruleOfThirds: h,
            crop: w
          } = this.props, y = this.getCropStyle();
          if (w)
            return /* @__PURE__ */ e.a.createElement(
              "div",
              {
                style: y,
                className: "ReactCrop__crop-selection",
                onPointerDown: this.onCropPointerDown,
                "aria-label": r.cropArea,
                tabIndex: 0,
                onKeyDown: this.onComponentKeyDown,
                role: "group"
              },
              !a && !u && /* @__PURE__ */ e.a.createElement("div", { className: "ReactCrop__drag-elements", onFocus: this.onDragFocus }, /* @__PURE__ */ e.a.createElement("div", { className: "ReactCrop__drag-bar ord-n", "data-ord": "n" }), /* @__PURE__ */ e.a.createElement("div", { className: "ReactCrop__drag-bar ord-e", "data-ord": "e" }), /* @__PURE__ */ e.a.createElement("div", { className: "ReactCrop__drag-bar ord-s", "data-ord": "s" }), /* @__PURE__ */ e.a.createElement("div", { className: "ReactCrop__drag-bar ord-w", "data-ord": "w" }), /* @__PURE__ */ e.a.createElement(
                "div",
                {
                  className: "ReactCrop__drag-handle ord-nw",
                  "data-ord": "nw",
                  tabIndex: 0,
                  "aria-label": r.nwDragHandle,
                  onKeyDown: (_) => this.onHandlerKeyDown(_, "nw"),
                  role: "button"
                }
              ), /* @__PURE__ */ e.a.createElement(
                "div",
                {
                  className: "ReactCrop__drag-handle ord-n",
                  "data-ord": "n",
                  tabIndex: 0,
                  "aria-label": r.nDragHandle,
                  onKeyDown: (_) => this.onHandlerKeyDown(_, "n"),
                  role: "button"
                }
              ), /* @__PURE__ */ e.a.createElement(
                "div",
                {
                  className: "ReactCrop__drag-handle ord-ne",
                  "data-ord": "ne",
                  tabIndex: 0,
                  "aria-label": r.neDragHandle,
                  onKeyDown: (_) => this.onHandlerKeyDown(_, "ne"),
                  role: "button"
                }
              ), /* @__PURE__ */ e.a.createElement(
                "div",
                {
                  className: "ReactCrop__drag-handle ord-e",
                  "data-ord": "e",
                  tabIndex: 0,
                  "aria-label": r.eDragHandle,
                  onKeyDown: (_) => this.onHandlerKeyDown(_, "e"),
                  role: "button"
                }
              ), /* @__PURE__ */ e.a.createElement(
                "div",
                {
                  className: "ReactCrop__drag-handle ord-se",
                  "data-ord": "se",
                  tabIndex: 0,
                  "aria-label": r.seDragHandle,
                  onKeyDown: (_) => this.onHandlerKeyDown(_, "se"),
                  role: "button"
                }
              ), /* @__PURE__ */ e.a.createElement(
                "div",
                {
                  className: "ReactCrop__drag-handle ord-s",
                  "data-ord": "s",
                  tabIndex: 0,
                  "aria-label": r.sDragHandle,
                  onKeyDown: (_) => this.onHandlerKeyDown(_, "s"),
                  role: "button"
                }
              ), /* @__PURE__ */ e.a.createElement(
                "div",
                {
                  className: "ReactCrop__drag-handle ord-sw",
                  "data-ord": "sw",
                  tabIndex: 0,
                  "aria-label": r.swDragHandle,
                  onKeyDown: (_) => this.onHandlerKeyDown(_, "sw"),
                  role: "button"
                }
              ), /* @__PURE__ */ e.a.createElement(
                "div",
                {
                  className: "ReactCrop__drag-handle ord-w",
                  "data-ord": "w",
                  tabIndex: 0,
                  "aria-label": r.wDragHandle,
                  onKeyDown: (_) => this.onHandlerKeyDown(_, "w"),
                  role: "button"
                }
              )),
              m && /* @__PURE__ */ e.a.createElement("div", { className: "ReactCrop__selection-addon", onPointerDown: (_) => _.stopPropagation() }, m(this.state)),
              h && /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement("div", { className: "ReactCrop__rule-of-thirds-hz" }), /* @__PURE__ */ e.a.createElement("div", { className: "ReactCrop__rule-of-thirds-vt" }))
            );
        }
        makePixelCrop(r) {
          const a = { ...wa, ...this.props.crop || {} };
          return Er(a, r.width, r.height);
        }
        render() {
          const { aspect: r, children: a, circularCrop: u, className: m, crop: h, disabled: w, locked: y, style: _, ruleOfThirds: E } = this.props, { cropIsActive: B, newCropIsBeingDrawn: W } = this.state, J = h ? this.renderCropSelection() : null, Q = Ki(
            "ReactCrop",
            m,
            B && "ReactCrop--active",
            w && "ReactCrop--disabled",
            y && "ReactCrop--locked",
            W && "ReactCrop--new-crop",
            h && r && "ReactCrop--fixed-aspect",
            h && u && "ReactCrop--circular-crop",
            h && E && "ReactCrop--rule-of-thirds",
            !this.dragStarted && h && !h.width && !h.height && "ReactCrop--invisible-crop",
            u && "ReactCrop--no-animate"
          );
          return /* @__PURE__ */ e.a.createElement("div", { ref: this.componentRef, className: Q, style: _ }, /* @__PURE__ */ e.a.createElement("div", { ref: this.mediaRef, className: "ReactCrop__child-wrapper", onPointerDown: this.onComponentPointerDown }, a), h ? /* @__PURE__ */ e.a.createElement("svg", { className: "ReactCrop__crop-mask", width: "100%", height: "100%" }, /* @__PURE__ */ e.a.createElement("defs", null, /* @__PURE__ */ e.a.createElement("mask", { id: `hole-${this.instanceId}` }, /* @__PURE__ */ e.a.createElement("rect", { width: "100%", height: "100%", fill: "white" }), u ? /* @__PURE__ */ e.a.createElement(
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
          ))), /* @__PURE__ */ e.a.createElement("rect", { fill: "black", fillOpacity: 0.5, width: "100%", height: "100%", mask: `url(#hole-${this.instanceId})` })) : void 0, J);
        }
      };
      yt(Ar, "xOrds", ["e", "w"]), yt(Ar, "yOrds", ["n", "s"]), yt(Ar, "xyOrds", ["nw", "ne", "se", "sw"]), yt(Ar, "nudgeStep", 1), yt(Ar, "nudgeStepMedium", 10), yt(Ar, "nudgeStepLarge", 100), yt(Ar, "defaultProps", {
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
      let qi = Ar;
      function $i(t, r) {
        return el(t) || Xi(t, r) || Zi(t, r) || Ji();
      }
      function Ji() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Zi(t, r) {
        if (t) {
          if (typeof t == "string") return Dn(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? Dn(t, r) : void 0;
        }
      }
      function Dn(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, u = Array(r); a < r; a++) u[a] = t[a];
        return u;
      }
      function Xi(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var u, m, h, w, y = [], _ = !0, E = !1;
          try {
            if (h = (a = a.call(t)).next, r !== 0) for (; !(_ = (u = h.call(a)).done) && (y.push(u.value), y.length !== r); _ = !0) ;
          } catch (B) {
            E = !0, m = B;
          } finally {
            try {
              if (!_ && a.return != null && (w = a.return(), Object(w) !== w)) return;
            } finally {
              if (E) throw m;
            }
          }
          return y;
        }
      }
      function el(t) {
        if (Array.isArray(t)) return t;
      }
      var tl = function(r) {
        var a = r.imageSrc, u = r.onCropComplete, m = r.aspectRatio, h = m === void 0 ? 16 / 9 : m, w = Object(l.useState)({
          aspect: h
        }), y = $i(w, 2), _ = y[0], E = y[1], B = Object(l.useRef)(null), W = Object(l.useCallback)(function(Q) {
          return B.current = Q, !1;
        }, []), J = Object(l.useCallback)(function(Q) {
          u(Q, B.current);
        }, [u]);
        return /* @__PURE__ */ e.a.createElement(qi, {
          crop: _,
          onChange: E,
          onComplete: J
        }, /* @__PURE__ */ e.a.createElement("img", {
          ref: B,
          src: a,
          alt: "Crop preview",
          onLoad: function(p) {
            return W(p.currentTarget);
          }
        }));
      };
      function Tr(t) {
        "@babel/helpers - typeof";
        return Tr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
          return typeof r;
        } : function(r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
        }, Tr(t);
      }
      function ca() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
        ca = function() {
          return r;
        };
        var t, r = {}, a = Object.prototype, u = a.hasOwnProperty, m = Object.defineProperty || function(k, f, x) {
          k[f] = x.value;
        }, h = typeof Symbol == "function" ? Symbol : {}, w = h.iterator || "@@iterator", y = h.asyncIterator || "@@asyncIterator", _ = h.toStringTag || "@@toStringTag";
        function E(k, f, x) {
          return Object.defineProperty(k, f, { value: x, enumerable: !0, configurable: !0, writable: !0 }), k[f];
        }
        try {
          E({}, "");
        } catch {
          E = function(x, D, M) {
            return x[D] = M;
          };
        }
        function B(k, f, x, D) {
          var M = f && f.prototype instanceof P ? f : P, O = Object.create(M.prototype), he = new Te(D || []);
          return m(O, "_invoke", { value: Ze(k, x, he) }), O;
        }
        function W(k, f, x) {
          try {
            return { type: "normal", arg: k.call(f, x) };
          } catch (D) {
            return { type: "throw", arg: D };
          }
        }
        r.wrap = B;
        var J = "suspendedStart", Q = "suspendedYield", p = "executing", de = "completed", q = {};
        function P() {
        }
        function z() {
        }
        function F() {
        }
        var Y = {};
        E(Y, w, function() {
          return this;
        });
        var ue = Object.getPrototypeOf, oe = ue && ue(ue(lt([])));
        oe && oe !== a && u.call(oe, w) && (Y = oe);
        var me = F.prototype = P.prototype = Object.create(Y);
        function Oe(k) {
          ["next", "throw", "return"].forEach(function(f) {
            E(k, f, function(x) {
              return this._invoke(f, x);
            });
          });
        }
        function j(k, f) {
          function x(M, O, he, De) {
            var je = W(k[M], k, O);
            if (je.type !== "throw") {
              var Xe = je.arg, rt = Xe.value;
              return rt && Tr(rt) == "object" && u.call(rt, "__await") ? f.resolve(rt.__await).then(function(nt) {
                x("next", nt, he, De);
              }, function(nt) {
                x("throw", nt, he, De);
              }) : f.resolve(rt).then(function(nt) {
                Xe.value = nt, he(Xe);
              }, function(nt) {
                return x("throw", nt, he, De);
              });
            }
            De(je.arg);
          }
          var D;
          m(this, "_invoke", { value: function(O, he) {
            function De() {
              return new f(function(je, Xe) {
                x(O, he, je, Xe);
              });
            }
            return D = D ? D.then(De, De) : De();
          } });
        }
        function Ze(k, f, x) {
          var D = J;
          return function(M, O) {
            if (D === p) throw Error("Generator is already running");
            if (D === de) {
              if (M === "throw") throw O;
              return { value: t, done: !0 };
            }
            for (x.method = M, x.arg = O; ; ) {
              var he = x.delegate;
              if (he) {
                var De = Fe(he, x);
                if (De) {
                  if (De === q) continue;
                  return De;
                }
              }
              if (x.method === "next") x.sent = x._sent = x.arg;
              else if (x.method === "throw") {
                if (D === J) throw D = de, x.arg;
                x.dispatchException(x.arg);
              } else x.method === "return" && x.abrupt("return", x.arg);
              D = p;
              var je = W(k, f, x);
              if (je.type === "normal") {
                if (D = x.done ? de : Q, je.arg === q) continue;
                return { value: je.arg, done: x.done };
              }
              je.type === "throw" && (D = de, x.method = "throw", x.arg = je.arg);
            }
          };
        }
        function Fe(k, f) {
          var x = f.method, D = k.iterator[x];
          if (D === t) return f.delegate = null, x === "throw" && k.iterator.return && (f.method = "return", f.arg = t, Fe(k, f), f.method === "throw") || x !== "return" && (f.method = "throw", f.arg = new TypeError("The iterator does not provide a '" + x + "' method")), q;
          var M = W(D, k.iterator, f.arg);
          if (M.type === "throw") return f.method = "throw", f.arg = M.arg, f.delegate = null, q;
          var O = M.arg;
          return O ? O.done ? (f[k.resultName] = O.value, f.next = k.nextLoc, f.method !== "return" && (f.method = "next", f.arg = t), f.delegate = null, q) : O : (f.method = "throw", f.arg = new TypeError("iterator result is not an object"), f.delegate = null, q);
        }
        function Me(k) {
          var f = { tryLoc: k[0] };
          1 in k && (f.catchLoc = k[1]), 2 in k && (f.finallyLoc = k[2], f.afterLoc = k[3]), this.tryEntries.push(f);
        }
        function He(k) {
          var f = k.completion || {};
          f.type = "normal", delete f.arg, k.completion = f;
        }
        function Te(k) {
          this.tryEntries = [{ tryLoc: "root" }], k.forEach(Me, this), this.reset(!0);
        }
        function lt(k) {
          if (k || k === "") {
            var f = k[w];
            if (f) return f.call(k);
            if (typeof k.next == "function") return k;
            if (!isNaN(k.length)) {
              var x = -1, D = function M() {
                for (; ++x < k.length; ) if (u.call(k, x)) return M.value = k[x], M.done = !1, M;
                return M.value = t, M.done = !0, M;
              };
              return D.next = D;
            }
          }
          throw new TypeError(Tr(k) + " is not iterable");
        }
        return z.prototype = F, m(me, "constructor", { value: F, configurable: !0 }), m(F, "constructor", { value: z, configurable: !0 }), z.displayName = E(F, _, "GeneratorFunction"), r.isGeneratorFunction = function(k) {
          var f = typeof k == "function" && k.constructor;
          return !!f && (f === z || (f.displayName || f.name) === "GeneratorFunction");
        }, r.mark = function(k) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(k, F) : (k.__proto__ = F, E(k, _, "GeneratorFunction")), k.prototype = Object.create(me), k;
        }, r.awrap = function(k) {
          return { __await: k };
        }, Oe(j.prototype), E(j.prototype, y, function() {
          return this;
        }), r.AsyncIterator = j, r.async = function(k, f, x, D, M) {
          M === void 0 && (M = Promise);
          var O = new j(B(k, f, x, D), M);
          return r.isGeneratorFunction(f) ? O : O.next().then(function(he) {
            return he.done ? he.value : O.next();
          });
        }, Oe(me), E(me, _, "Generator"), E(me, w, function() {
          return this;
        }), E(me, "toString", function() {
          return "[object Generator]";
        }), r.keys = function(k) {
          var f = Object(k), x = [];
          for (var D in f) x.push(D);
          return x.reverse(), function M() {
            for (; x.length; ) {
              var O = x.pop();
              if (O in f) return M.value = O, M.done = !1, M;
            }
            return M.done = !0, M;
          };
        }, r.values = lt, Te.prototype = { constructor: Te, reset: function(f) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(He), !f) for (var x in this) x.charAt(0) === "t" && u.call(this, x) && !isNaN(+x.slice(1)) && (this[x] = t);
        }, stop: function() {
          this.done = !0;
          var f = this.tryEntries[0].completion;
          if (f.type === "throw") throw f.arg;
          return this.rval;
        }, dispatchException: function(f) {
          if (this.done) throw f;
          var x = this;
          function D(Xe, rt) {
            return he.type = "throw", he.arg = f, x.next = Xe, rt && (x.method = "next", x.arg = t), !!rt;
          }
          for (var M = this.tryEntries.length - 1; M >= 0; --M) {
            var O = this.tryEntries[M], he = O.completion;
            if (O.tryLoc === "root") return D("end");
            if (O.tryLoc <= this.prev) {
              var De = u.call(O, "catchLoc"), je = u.call(O, "finallyLoc");
              if (De && je) {
                if (this.prev < O.catchLoc) return D(O.catchLoc, !0);
                if (this.prev < O.finallyLoc) return D(O.finallyLoc);
              } else if (De) {
                if (this.prev < O.catchLoc) return D(O.catchLoc, !0);
              } else {
                if (!je) throw Error("try statement without catch or finally");
                if (this.prev < O.finallyLoc) return D(O.finallyLoc);
              }
            }
          }
        }, abrupt: function(f, x) {
          for (var D = this.tryEntries.length - 1; D >= 0; --D) {
            var M = this.tryEntries[D];
            if (M.tryLoc <= this.prev && u.call(M, "finallyLoc") && this.prev < M.finallyLoc) {
              var O = M;
              break;
            }
          }
          O && (f === "break" || f === "continue") && O.tryLoc <= x && x <= O.finallyLoc && (O = null);
          var he = O ? O.completion : {};
          return he.type = f, he.arg = x, O ? (this.method = "next", this.next = O.finallyLoc, q) : this.complete(he);
        }, complete: function(f, x) {
          if (f.type === "throw") throw f.arg;
          return f.type === "break" || f.type === "continue" ? this.next = f.arg : f.type === "return" ? (this.rval = this.arg = f.arg, this.method = "return", this.next = "end") : f.type === "normal" && x && (this.next = x), q;
        }, finish: function(f) {
          for (var x = this.tryEntries.length - 1; x >= 0; --x) {
            var D = this.tryEntries[x];
            if (D.finallyLoc === f) return this.complete(D.completion, D.afterLoc), He(D), q;
          }
        }, catch: function(f) {
          for (var x = this.tryEntries.length - 1; x >= 0; --x) {
            var D = this.tryEntries[x];
            if (D.tryLoc === f) {
              var M = D.completion;
              if (M.type === "throw") {
                var O = M.arg;
                He(D);
              }
              return O;
            }
          }
          throw Error("illegal catch attempt");
        }, delegateYield: function(f, x, D) {
          return this.delegate = { iterator: lt(f), resultName: x, nextLoc: D }, this.method === "next" && (this.arg = t), q;
        } }, r;
      }
      function Bn(t, r, a, u, m, h, w) {
        try {
          var y = t[h](w), _ = y.value;
        } catch (E) {
          return void a(E);
        }
        y.done ? r(_) : Promise.resolve(_).then(u, m);
      }
      function jn(t) {
        return function() {
          var r = this, a = arguments;
          return new Promise(function(u, m) {
            var h = t.apply(r, a);
            function w(_) {
              Bn(h, u, m, w, y, "next", _);
            }
            function y(_) {
              Bn(h, u, m, w, y, "throw", _);
            }
            w(void 0);
          });
        };
      }
      function zn(t, r) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(t);
          r && (u = u.filter(function(m) {
            return Object.getOwnPropertyDescriptor(t, m).enumerable;
          })), a.push.apply(a, u);
        }
        return a;
      }
      function Ot(t) {
        for (var r = 1; r < arguments.length; r++) {
          var a = arguments[r] != null ? arguments[r] : {};
          r % 2 ? zn(Object(a), !0).forEach(function(u) {
            sa(t, u, a[u]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : zn(Object(a)).forEach(function(u) {
            Object.defineProperty(t, u, Object.getOwnPropertyDescriptor(a, u));
          });
        }
        return t;
      }
      function sa(t, r, a) {
        return (r = rl(r)) in t ? Object.defineProperty(t, r, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : t[r] = a, t;
      }
      function rl(t) {
        var r = al(t, "string");
        return Tr(r) == "symbol" ? r : r + "";
      }
      function al(t, r) {
        if (Tr(t) != "object" || !t) return t;
        var a = t[Symbol.toPrimitive];
        if (a !== void 0) {
          var u = a.call(t, r);
          if (Tr(u) != "object") return u;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (r === "string" ? String : Number)(t);
      }
      function Cr(t, r) {
        return ll(t) || il(t, r) || ol(t, r) || nl();
      }
      function nl() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function ol(t, r) {
        if (t) {
          if (typeof t == "string") return Tn(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? Tn(t, r) : void 0;
        }
      }
      function Tn(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, u = Array(r); a < r; a++) u[a] = t[a];
        return u;
      }
      function il(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var u, m, h, w, y = [], _ = !0, E = !1;
          try {
            if (h = (a = a.call(t)).next, r !== 0) for (; !(_ = (u = h.call(a)).done) && (y.push(u.value), y.length !== r); _ = !0) ;
          } catch (B) {
            E = !0, m = B;
          } finally {
            try {
              if (!_ && a.return != null && (w = a.return(), Object(w) !== w)) return;
            } finally {
              if (E) throw m;
            }
          }
          return y;
        }
      }
      function ll(t) {
        if (Array.isArray(t)) return t;
      }
      function cl(t) {
        var r = t.onImageInsert, a = t.item, u = t.setIsLoading, m = t.image_handler, h = t.selectedData, w = Object(l.useState)(""), y = Cr(w, 2), _ = y[0], E = y[1], B = Object(l.useState)(0), W = Cr(B, 2), J = W[0], Q = W[1], p = Object(l.useState)(!0), de = Cr(p, 2), q = de[0], P = de[1], z = Object(l.useState)(!1), F = Cr(z, 2), Y = F[0], ue = F[1], oe = Object(l.useState)("default"), me = Cr(oe, 2), Oe = me[0], j = me[1], Ze = Object(l.useState)(null), Fe = Cr(Ze, 2), Me = Fe[0], He = Fe[1], Te = Object(l.useState)(null), lt = Cr(Te, 2), k = lt[0], f = lt[1], x = Object(l.useState)({
          link: "",
          height: "",
          width: "",
          image: null,
          type: "general"
        }), D = Cr(x, 2), M = D[0], O = D[1], he = function(ot) {
          var xt = ot.target, ct = xt.name, It = xt.files;
          O(function(_t) {
            return Ot(Ot({}, _t), {}, sa(sa(sa({}, ct, It[0]), "height", ""), "width", ""));
          });
        }, De = 3, je = function wt(ot) {
          var xt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, ct = 0, It = 0, _t = new Image();
          _t.onload = function() {
            ct = _t.width, It = _t.height;
            var mr = ct / It;
            Q(mr), ue(!0), O(function(Nt) {
              return Ot(Ot({}, Nt), {}, {
                width: ct,
                height: It
              });
            }), u(!1);
          }, _t.onerror = function() {
            u(!1), xt < De && wt(ot, xt + 1);
          }, _t.src = ot;
        }, Xe = /* @__PURE__ */ function() {
          var wt = jn(/* @__PURE__ */ ca().mark(function ot(xt) {
            var ct, It, _t;
            return ca().wrap(function(Nt) {
              for (; ; ) switch (Nt.prev = Nt.next) {
                case 0:
                  if (xt.preventDefault(), M.type !== "general") {
                    Nt.next = 9;
                    break;
                  }
                  if (M.link) {
                    Nt.next = 6;
                    break;
                  }
                  return ct = "Image source is required", E(ct), Nt.abrupt("return");
                case 6:
                  r(M), Nt.next = 29;
                  break;
                case 9:
                  if (M.image) {
                    Nt.next = 13;
                    break;
                  }
                  return It = "Please upload image", E(It), Nt.abrupt("return");
                case 13:
                  if (!m) {
                    Nt.next = 22;
                    break;
                  }
                  return u(!0), Nt.next = 17, m(Ot({}, M), a);
                case 17:
                  return _t = Nt.sent, _t ? (je(_t), O(function(_a) {
                    return Ot(Ot({}, _a), {}, {
                      type: "general",
                      link: _t
                    });
                  })) : u(!1), Nt.abrupt("return");
                case 22:
                  M.link = URL.createObjectURL(M.image), M.width = "", M.height = "";
                case 25:
                  if (M.link) {
                    Nt.next = 28;
                    break;
                  }
                  return u(!1), Nt.abrupt("return");
                case 28:
                  r(M);
                case 29:
                case "end":
                  return Nt.stop();
              }
            }, ot);
          }));
          return function(xt) {
            return wt.apply(this, arguments);
          };
        }(), rt = function(ot) {
          var xt = ot.target, ct = xt.name, It = xt.value, _t = M.height, mr = M.width;
          ct === "width" ? (_t = It / J, mr = It) : (mr = It * J, _t = It), _t = Math.round(_t), mr = Math.round(mr), O(function(Nt) {
            return Ot(Ot({}, Nt), {}, {
              height: _t,
              width: mr
            });
          });
        }, nt = function(ot) {
          var xt = ot.target, ct = xt.name, It = xt.value;
          if (q && ct !== "link" && Y && M.link) {
            rt(ot);
            return;
          }
          ct === "link" && It === "" && (O(function(_t) {
            return Ot(Ot({}, _t), {}, {
              height: 0,
              width: 0
            });
          }), ue(!1)), O(function(_t) {
            return Ot(Ot({}, _t), {}, sa({}, ct, It));
          });
        }, ma = function(ot, xt) {
          ot.preventDefault(), O(function(ct) {
            return Ot(Ot({}, ct), {}, {
              type: xt,
              image: null
            });
          }), E("");
        }, ur = Object(l.useCallback)(function(wt, ot) {
          He(wt), f(ot);
        }, []), nr = Object(l.useCallback)(function() {
          j("default"), He(null);
        }, []), Ka = Object(l.useCallback)(/* @__PURE__ */ jn(/* @__PURE__ */ ca().mark(function wt() {
          var ot;
          return ca().wrap(function(ct) {
            for (; ; ) switch (ct.prev = ct.next) {
              case 0:
                if (!(!Me || !k)) {
                  ct.next = 3;
                  break;
                }
                return console.error("No crop data or image reference"), ct.abrupt("return");
              case 3:
                return ct.next = 5, qr(k, Me, M.image);
              case 5:
                if (ot = ct.sent, ot) {
                  ct.next = 9;
                  break;
                }
                return console.error("Failed to crop image"), ct.abrupt("return");
              case 9:
                O(function(It) {
                  return Ot(Ot({}, It), {}, {
                    image: ot
                  });
                }), nr();
              case 11:
              case "end":
                return ct.stop();
            }
          }, wt);
        })), [Me, k, nr, M.image]);
        return Object(l.useEffect)(function() {
          if (h != null && h.link) {
            var wt = parseFloat(h.height), ot = parseFloat(h.width), xt = ot / wt;
            Q(xt), ue(!0), O(Ot(Ot(Ot({}, M), h), {}, {
              height: wt,
              width: ot
            }));
          }
        }, [h, M]), Object(l.useEffect)(function() {
          if (Oe !== "default") {
            var wt = document.querySelector(".ReactCrop");
            console.log(wt, "reactCropElemreactCropElem"), wt.style.maxHeight = "350px";
          }
        }, [Oe]), /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, Oe === "crop" ? /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.image__cropper__box
        }, M.image && /* @__PURE__ */ e.a.createElement(tl, {
          imageSrc: URL.createObjectURL(M.image),
          onCropComplete: ur
        }), /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.image__cropper_btn
        }, /* @__PURE__ */ e.a.createElement("button", {
          onClick: Ka,
          disabled: !Me,
          className: c.a.saveButton
        }, "Apply Crop"), /* @__PURE__ */ e.a.createElement("button", {
          onClick: nr,
          className: c.a.cancel__btn
        }, "Cancel"))) : /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.selectType
        }, /* @__PURE__ */ e.a.createElement("button", {
          className: "".concat(M.type === "general" ? "".concat(c.a.selectedType) : ""),
          onClick: function(ot) {
            return ma(ot, "general");
          }
        }, "General"), /* @__PURE__ */ e.a.createElement("button", {
          className: "".concat(M.type === "upload" ? "".concat(c.a.selectedType) : ""),
          onClick: function(ot) {
            return ma(ot, "upload");
          }
        }, "Upload")), /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, M.type === "general" ? /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.reactEditorMt10
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "link"
        }, "Source"), /* @__PURE__ */ e.a.createElement("input", {
          id: "link",
          type: "text",
          name: "link",
          autoFocus: !0,
          className: c.a.formControlInput,
          value: M.link,
          onChange: nt
        }), _ && /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.editorErrorMessage
        }, "*", "".concat(_))), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(c.a.reactEditorDFlex, " ").concat(c.a.justifyContentBetween)
        }, /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(c.a.reactEditorMt10, " ").concat(c.a.reactEditorW45)
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "height"
        }, "Height"), /* @__PURE__ */ e.a.createElement("input", {
          id: "height",
          type: "number",
          name: "height",
          value: M.height,
          onChange: nt,
          className: c.a.formControlInput
        })), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(c.a.reactEditorMt10, " ").concat(c.a.reactEditorW45)
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "width"
        }, "Width"), /* @__PURE__ */ e.a.createElement("input", {
          id: "width",
          type: "number",
          name: "width",
          value: M.width,
          onChange: nt,
          className: c.a.formControlInput
        })), /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.lockUnlockIcon,
          onClick: function() {
            return P(!q);
          }
        }, q ? /* @__PURE__ */ e.a.createElement(Ee, null) : /* @__PURE__ */ e.a.createElement(St, null)))) : /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.reactEditorMt10
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "image"
        }, "Choose File"), /* @__PURE__ */ e.a.createElement("input", {
          type: "file",
          id: "image",
          name: "image",
          className: c.a.formControlInput,
          accept: "image/*",
          onChange: he
        }), _ && /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.editorErrorMessage
        }, "*", "".concat(_))), /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.image__submit__container
        }, /* @__PURE__ */ e.a.createElement("div", null, M.type === "upload" && M.image && /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.image__preview__box
        }, /* @__PURE__ */ e.a.createElement(Ue, null), /* @__PURE__ */ e.a.createElement("img", {
          src: URL.createObjectURL(M.image),
          alt: "",
          srcset: "",
          title: "Click to crop image",
          onClick: function() {
            return j("crop");
          }
        }))), /* @__PURE__ */ e.a.createElement("button", {
          className: c.a.saveButton,
          onClick: Xe
        }, "Save")))));
      }
      function da(t) {
        "@babel/helpers - typeof";
        return da = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
          return typeof r;
        } : function(r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
        }, da(t);
      }
      function Fn(t, r) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(t);
          r && (u = u.filter(function(m) {
            return Object.getOwnPropertyDescriptor(t, m).enumerable;
          })), a.push.apply(a, u);
        }
        return a;
      }
      function ra(t) {
        for (var r = 1; r < arguments.length; r++) {
          var a = arguments[r] != null ? arguments[r] : {};
          r % 2 ? Fn(Object(a), !0).forEach(function(u) {
            Qa(t, u, a[u]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : Fn(Object(a)).forEach(function(u) {
            Object.defineProperty(t, u, Object.getOwnPropertyDescriptor(a, u));
          });
        }
        return t;
      }
      function Qa(t, r, a) {
        return (r = sl(r)) in t ? Object.defineProperty(t, r, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : t[r] = a, t;
      }
      function sl(t) {
        var r = dl(t, "string");
        return da(r) == "symbol" ? r : r + "";
      }
      function dl(t, r) {
        if (da(t) != "object" || !t) return t;
        var a = t[Symbol.toPrimitive];
        if (a !== void 0) {
          var u = a.call(t, r);
          if (da(u) != "object") return u;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (r === "string" ? String : Number)(t);
      }
      function Hn(t, r) {
        return hl(t) || pl(t, r) || ml(t, r) || ul();
      }
      function ul() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function ml(t, r) {
        if (t) {
          if (typeof t == "string") return Pn(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? Pn(t, r) : void 0;
        }
      }
      function Pn(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, u = Array(r); a < r; a++) u[a] = t[a];
        return u;
      }
      function pl(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var u, m, h, w, y = [], _ = !0, E = !1;
          try {
            if (h = (a = a.call(t)).next, r !== 0) for (; !(_ = (u = h.call(a)).done) && (y.push(u.value), y.length !== r); _ = !0) ;
          } catch (B) {
            E = !0, m = B;
          } finally {
            try {
              if (!_ && a.return != null && (w = a.return(), Object(w) !== w)) return;
            } finally {
              if (E) throw m;
            }
          }
          return y;
        }
      }
      function hl(t) {
        if (Array.isArray(t)) return t;
      }
      function fl(t) {
        var r = t.onMediaInsert, a = t.targetElement, u = a === void 0 ? null : a, m = t.targetElementType, h = m === void 0 ? "" : m, w = Object(l.useState)(""), y = Hn(w, 2), _ = y[0], E = y[1], B = Object(l.useState)({
          link: "",
          height: "",
          embed_code: "",
          width: "",
          type: "general"
        }), W = Hn(B, 2), J = W[0], Q = W[1], p = function(F) {
          var Y = F.target, ue = Y.name, oe = Y.files;
          Q(function(me) {
            return ra(ra({}, me), {}, Qa({}, ue, oe[0]));
          });
        }, de = function(F) {
          if (F.preventDefault(), J.type === "general" && !J.link) {
            var Y = "Video source is required";
            E(Y);
            return;
          } else if (J.type === "upload" && !J.link) {
            var ue = "Please upload media file";
            E(ue);
            return;
          } else if (J.type === "embed" && !J.embed_code) {
            var oe = "Please add video embed code";
            E(oe);
            return;
          }
          r(J, u);
        }, q = function(F) {
          var Y = F.target, ue = Y.name, oe = Y.value;
          Q(function(me) {
            return ra(ra({}, me), {}, Qa({}, ue, oe));
          });
        }, P = function(F, Y) {
          F.preventDefault(), Q(function(ue) {
            return ra(ra({}, ue), {}, {
              type: Y
            });
          }), E("");
        };
        return Object(l.useEffect)(function() {
          if (u) {
            var z = {
              link: u.getAttribute("src") || "",
              height: u.getAttribute("height") || "",
              width: u.getAttribute("width") || "",
              embed_code: h == "general" ? "" : u.outerHTML || "",
              type: h || "general"
            };
            Q(z);
          }
        }, [u, h]), /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.mediaModal
        }, /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.selectType
        }, /* @__PURE__ */ e.a.createElement("button", {
          className: "".concat(J.type === "general" ? "".concat(c.a.selectedType) : ""),
          onClick: function(F) {
            return P(F, "general");
          }
        }, "General"), /* @__PURE__ */ e.a.createElement("button", {
          className: "".concat(J.type === "embed" ? "".concat(c.a.selectedType) : ""),
          onClick: function(F) {
            return P(F, "embed");
          }
        }, "Embed")), /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, J.type === "general" ? /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.reactEditorMt10
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "link"
        }, "Source"), /* @__PURE__ */ e.a.createElement("input", {
          id: "link",
          type: "text",
          name: "link",
          autoFocus: !0,
          className: c.a.formControlInput,
          value: J.link,
          onChange: q
        }), _ && /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.editorErrorMessage
        }, "*", "".concat(_))), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(c.a.reactEditorDFlex, " ").concat(c.a.justifyContentBetween)
        }, /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(c.a.reactEditorMt10, " ").concat(c.a.reactEditorW47)
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "height"
        }, "Height"), /* @__PURE__ */ e.a.createElement("input", {
          id: "height",
          type: "number",
          name: "height",
          value: J.height,
          onChange: q,
          className: c.a.formControlInput
        })), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(c.a.reactEditorMt10, " ").concat(c.a.reactEditorW47)
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "width"
        }, "Width"), /* @__PURE__ */ e.a.createElement("input", {
          id: "width",
          type: "number",
          name: "width",
          value: J.width,
          onChange: q,
          className: c.a.formControlInput
        })))) : J.type === "embed" ? /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.reactEditorMt10
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "embed_code"
        }, "Paste your embed code below:"), /* @__PURE__ */ e.a.createElement("textarea", {
          id: "embed_code",
          name: "embed_code",
          rows: 5,
          autoFocus: !0,
          className: c.a.formControlInput,
          value: J.embed_code,
          onChange: q
        }), _ && /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.editorErrorMessage
        }, "*", "".concat(_)))) : /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.reactEditorMt10
        }, /* @__PURE__ */ e.a.createElement("label", {
          htmlFor: "link"
        }, "Choose File"), /* @__PURE__ */ e.a.createElement("input", {
          type: "file",
          id: "link",
          name: "link",
          className: c.a.formControlInput,
          accept: "video/*",
          onChange: p
        }), _ && /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.editorErrorMessage
        }, "*", "".concat(_)))), /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.reactEditorTextEnd
        }, /* @__PURE__ */ e.a.createElement("button", {
          className: c.a.saveButton,
          onClick: de
        }, "Save"))));
      }
      function gl() {
        return /* @__PURE__ */ e.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512"
        }, /* @__PURE__ */ e.a.createElement("path", {
          d: "M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
        }));
      }
      function Un(t, r) {
        return wl(t) || yl(t, r) || bl(t, r) || vl();
      }
      function vl() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function bl(t, r) {
        if (t) {
          if (typeof t == "string") return Qn(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? Qn(t, r) : void 0;
        }
      }
      function Qn(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, u = Array(r); a < r; a++) u[a] = t[a];
        return u;
      }
      function yl(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var u, m, h, w, y = [], _ = !0, E = !1;
          try {
            if (h = (a = a.call(t)).next, r !== 0) for (; !(_ = (u = h.call(a)).done) && (y.push(u.value), y.length !== r); _ = !0) ;
          } catch (B) {
            E = !0, m = B;
          } finally {
            try {
              if (!_ && a.return != null && (w = a.return(), Object(w) !== w)) return;
            } finally {
              if (E) throw m;
            }
          }
          return y;
        }
      }
      function wl(t) {
        if (Array.isArray(t)) return t;
      }
      var xl = function(r) {
        var a, u = r.editorRef, m = r.setIsOpenModel, h = r.setSelectedData, w = r.setSelectedEvent, y = r.selectedEvent, _ = r.setImageUrl, E = r.handleRemoveLink, B = r.selectedRange, W = Object(l.useRef)(null), J = Object(l.useState)({
          x: 0,
          y: 0
        }), Q = Un(J, 2), p = Q[0], de = Q[1], q = Object(l.useState)(!1), P = Un(q, 2), z = P[0], F = P[1], Y = function() {
          if (B) {
            var Me = B.toString();
            return Me;
          }
          return "";
        }, ue = function(Me) {
          Me.preventDefault(), _r();
          var He = Me.target, Te = He.parentElement.getBoundingClientRect();
          de({
            x: Me.clientX - Te.left,
            y: Me.clientY - Te.top
          });
          var lt = ["IMG", "A", "BUTTON"];
          lt.includes(He.tagName) && w(He), F(!0);
        }, oe = function(Me) {
          W.current && !W.current.contains(Me.target) && F(!1);
        }, me = function() {
          var Me = !1, He = "", Te = Y() || "", lt = "text";
          (y == null ? void 0 : y.tagName) === "A" ? (He = y == null ? void 0 : y.href, Te = Y() || (y == null ? void 0 : y.textContent.trim()), Me = (y == null ? void 0 : y.target) === "_blank") : (y == null ? void 0 : y.tagName) === "IMG" ? (Te = "Image", lt = "image", _(y == null ? void 0 : y.src)) : (y == null ? void 0 : y.tagName) === "BUTTON" && (Te = y.textContent, lt = "button");
          var k = y == null ? void 0 : y.parentElement;
          (k == null ? void 0 : k.tagName) === "A" && (w(k), He = k == null ? void 0 : k.href, Me = (k == null ? void 0 : k.target) === "_blank");
          var f = {
            link: He,
            text: Te,
            open_new_tab: Me,
            link_type: lt
          };
          h(f), F(!1), m("link");
        }, Oe = function() {
          var Me, He = y == null ? void 0 : y.href;
          if ((y == null ? void 0 : y.tagName) !== "A" && (y == null || (Me = y.parentElement) === null || Me === void 0 ? void 0 : Me.tagName) === "A") {
            var Te;
            He = y == null || (Te = y.parentElement) === null || Te === void 0 ? void 0 : Te.href;
          }
          window.open(He), F(!1);
        }, j = function() {
          E(), F(!1);
        }, Ze = function() {
          var Me, He;
          F(!1);
          var Te = (Me = y.style) === null || Me === void 0 ? void 0 : Me.height, lt = (He = y.style) === null || He === void 0 ? void 0 : He.width;
          Te || (Te = y == null ? void 0 : y.offsetHeight), lt || (lt = y == null ? void 0 : y.offsetWidth), h({
            link: y == null ? void 0 : y.src,
            height: Te,
            width: lt
          }), m("image");
        };
        return Object(l.useEffect)(function() {
          var Fe = u.current;
          return Fe && Fe.addEventListener("contextmenu", ue), document.addEventListener("mousedown", oe), function() {
            Fe && Fe.removeEventListener("contextmenu", ue), document.removeEventListener("mousedown", oe);
          };
        }, [u]), /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, z && /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.rightClickPopupBackground,
          style: {
            top: p.y,
            left: p.x
          },
          ref: W
        }, /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.rightClickPopup,
          onClick: me
        }, /* @__PURE__ */ e.a.createElement(it, null), " Link..."), ((y == null ? void 0 : y.tagName) === "A" || (y == null || (a = y.parentElement) === null || a === void 0 ? void 0 : a.tagName) === "A") && /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.rightClickPopup,
          onClick: j
        }, /* @__PURE__ */ e.a.createElement(ze, null), " Remove Link..."), " ", /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(c.a.rightClickPopup, " ").concat(c.a.openLink),
          onClick: Oe
        }, /* @__PURE__ */ e.a.createElement(gl, null), " Open Link...")), (y == null ? void 0 : y.tagName) === "IMG" && /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement("hr", null), /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.rightClickPopup,
          ref: W,
          onClick: Ze
        }, /* @__PURE__ */ e.a.createElement(Pe, null), " Image..."))));
      }, _l = xl;
      function Gn(t, r) {
        return Cl(t) || Al(t, r) || El(t, r) || kl();
      }
      function kl() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function El(t, r) {
        if (t) {
          if (typeof t == "string") return Yn(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? Yn(t, r) : void 0;
        }
      }
      function Yn(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, u = Array(r); a < r; a++) u[a] = t[a];
        return u;
      }
      function Al(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var u, m, h, w, y = [], _ = !0, E = !1;
          try {
            if (h = (a = a.call(t)).next, r !== 0) for (; !(_ = (u = h.call(a)).done) && (y.push(u.value), y.length !== r); _ = !0) ;
          } catch (B) {
            E = !0, m = B;
          } finally {
            try {
              if (!_ && a.return != null && (w = a.return(), Object(w) !== w)) return;
            } finally {
              if (E) throw m;
            }
          }
          return y;
        }
      }
      function Cl(t) {
        if (Array.isArray(t)) return t;
      }
      function Sl(t) {
        var r = t.editorRef, a = Object(l.useState)(!1), u = Gn(a, 2), m = u[0], h = u[1], w = Object(l.useState)("Default"), y = Gn(w, 2), _ = y[0], E = y[1], B = Object(l.useRef)(null), W = [{
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
        }], J = function(P) {
          P.preventDefault(), h(!m);
        }, Q = function(P, z) {
          P.preventDefault(), r.current.focus(), document.execCommand("styleWithCSS", !1, !0), document.execCommand("fontName", !1, z.value), E(z.label), h(!1);
        }, p = function() {
          var P = window.getSelection();
          if (P.rangeCount > 0)
            for (var z = P.getRangeAt(0), F = z.startContainer, Y = F; Y && Y !== r.current; ) {
              if (Y.nodeType === Node.ELEMENT_NODE && Y.style.fontFamily)
                for (var ue = Y.style.fontFamily.replace(/"/g, ""), oe = 0, me = W; oe < me.length; oe++) {
                  var Oe = me[oe], j = Oe.value.split(",")[0].trim();
                  if (ue === Oe.value || ue.startsWith("".concat(j, ",")) || ue === j)
                    return Oe.label;
                }
              Y = Y.parentNode;
            }
          return null;
        }, de = function() {
          var P = r.current;
          P && P.contains(window.getSelection().anchorNode) && P.focus();
        };
        return Object(l.useEffect)(function() {
          var q = function(F) {
            B.current && !B.current.contains(F.target) && h(!1);
          }, P = function() {
            var F;
            if (r != null && (F = r.current) !== null && F !== void 0 && F.contains(window.getSelection().anchorNode)) {
              var Y = p();
              E(Y || "Default");
            }
          };
          return document.addEventListener("click", q), document.addEventListener("selectionchange", P), document.addEventListener("keydown", de), function() {
            document.removeEventListener("click", q), document.removeEventListener("selectionchange", P), document.removeEventListener("keydown", de);
          };
        }, [r]), /* @__PURE__ */ e.a.createElement("button", {
          className: c.a.customSelectFormat,
          onClick: J,
          ref: B,
          style: {
            minWidth: "120px"
          }
        }, /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.selectSelected
        }, _, /* @__PURE__ */ e.a.createElement(Qe, null)), m && /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.selectItemsFormat,
          style: {
            maxHeight: "200px",
            overflowY: "auto"
          }
        }, W.map(function(q, P) {
          return /* @__PURE__ */ e.a.createElement("div", {
            key: "key".concat(P),
            onClick: function(F) {
              return Q(F, q);
            },
            className: c.a.selectOption,
            style: {
              fontFamily: q.value
            }
          }, q.label);
        })));
      }
      var Il = Sl;
      function Kn(t, r) {
        return Rl(t) || Ll(t, r) || Ml(t, r) || Nl();
      }
      function Nl() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Ml(t, r) {
        if (t) {
          if (typeof t == "string") return Vn(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? Vn(t, r) : void 0;
        }
      }
      function Vn(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, u = Array(r); a < r; a++) u[a] = t[a];
        return u;
      }
      function Ll(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var u, m, h, w, y = [], _ = !0, E = !1;
          try {
            if (h = (a = a.call(t)).next, r !== 0) for (; !(_ = (u = h.call(a)).done) && (y.push(u.value), y.length !== r); _ = !0) ;
          } catch (B) {
            E = !0, m = B;
          } finally {
            try {
              if (!_ && a.return != null && (w = a.return(), Object(w) !== w)) return;
            } finally {
              if (E) throw m;
            }
          }
          return y;
        }
      }
      function Rl(t) {
        if (Array.isArray(t)) return t;
      }
      function Ol(t) {
        var r, a, u = t.editorRef, m = Object(l.useState)(!1), h = Kn(m, 2), w = h[0], y = h[1], _ = Object(l.useState)("Alignment"), E = Kn(_, 2), B = E[0], W = E[1], J = Object(l.useRef)(null), Q = [{
          label: "Left",
          value: "left",
          icon: /* @__PURE__ */ e.a.createElement(ge, null)
        }, {
          label: "Center",
          value: "center",
          icon: /* @__PURE__ */ e.a.createElement(xe, null)
        }, {
          label: "Right",
          value: "right",
          icon: /* @__PURE__ */ e.a.createElement(We, null)
        }, {
          label: "Justify",
          value: "justify",
          icon: /* @__PURE__ */ e.a.createElement(Ne, null)
        }], p = function(F) {
          F.preventDefault(), y(!w);
        }, de = function(F, Y) {
          F.preventDefault(), u.current.focus(), document.execCommand("justify" + Y.value.charAt(0).toUpperCase() + Y.value.slice(1)), W(Y.label), y(!1);
        }, q = function() {
          var F = window.getSelection();
          if (F.rangeCount > 0) {
            for (var Y = F.getRangeAt(0), ue = Y.startContainer, oe = ue, me = function() {
              if (oe.nodeType === Node.ELEMENT_NODE && oe.style.textAlign) {
                var Ze = oe.style.textAlign, Fe = Q.find(function(Me) {
                  return Me.value === Ze;
                });
                if (Fe)
                  return {
                    v: Fe.label
                  };
              }
              oe = oe.parentNode;
            }, Oe; oe && oe !== u.current; )
              if (Oe = me(), Oe) return Oe.v;
          }
          return null;
        }, P = function() {
          var F = u.current;
          F && F.contains(window.getSelection().anchorNode) && F.focus();
        };
        return Object(l.useEffect)(function() {
          var z = function(ue) {
            J.current && !J.current.contains(ue.target) && y(!1);
          }, F = function() {
            var ue;
            if (u != null && (ue = u.current) !== null && ue !== void 0 && ue.contains(window.getSelection().anchorNode)) {
              var oe = q();
              W(oe || "Alignment");
            }
          };
          return document.addEventListener("click", z), document.addEventListener("selectionchange", F), document.addEventListener("keydown", P), function() {
            document.removeEventListener("click", z), document.removeEventListener("selectionchange", F), document.removeEventListener("keydown", P);
          };
        }, [u]), /* @__PURE__ */ e.a.createElement("button", {
          className: c.a.customSelectFormat,
          onClick: p,
          ref: J
        }, /* @__PURE__ */ e.a.createElement("div", {
          style: {
            display: "flex"
          }
        }, B === "Alignment" ? /* @__PURE__ */ e.a.createElement("span", null, (r = Q[0]) === null || r === void 0 ? void 0 : r.icon) : /* @__PURE__ */ e.a.createElement("span", null, (a = Q.find(function(z) {
          return z.label === B;
        })) === null || a === void 0 ? void 0 : a.icon), /* @__PURE__ */ e.a.createElement("span", {
          className: c.a.selectSelected
        }, /* @__PURE__ */ e.a.createElement(Qe, null))), w && /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.selectItemsFormat
        }, Q.map(function(z, F) {
          return /* @__PURE__ */ e.a.createElement("div", {
            key: "key".concat(F),
            onClick: function(ue) {
              return de(ue, z);
            },
            className: c.a.selectOption,
            style: {
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textAlign: z.value,
              fontSize: "12px"
            }
          }, /* @__PURE__ */ e.a.createElement("span", null, z.icon), /* @__PURE__ */ e.a.createElement("span", null, z.label));
        })));
      }
      var Dl = Ol;
      function Wn(t, r) {
        return Tl(t) || zl(t, r) || jl(t, r) || Bl();
      }
      function Bl() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function jl(t, r) {
        if (t) {
          if (typeof t == "string") return qn(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? qn(t, r) : void 0;
        }
      }
      function qn(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, u = Array(r); a < r; a++) u[a] = t[a];
        return u;
      }
      function zl(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var u, m, h, w, y = [], _ = !0, E = !1;
          try {
            if (h = (a = a.call(t)).next, r !== 0) for (; !(_ = (u = h.call(a)).done) && (y.push(u.value), y.length !== r); _ = !0) ;
          } catch (B) {
            E = !0, m = B;
          } finally {
            try {
              if (!_ && a.return != null && (w = a.return(), Object(w) !== w)) return;
            } finally {
              if (E) throw m;
            }
          }
          return y;
        }
      }
      function Tl(t) {
        if (Array.isArray(t)) return t;
      }
      function Fl(t) {
        var r = t.editorRef, a = Object(l.useState)(!1), u = Wn(a, 2), m = u[0], h = u[1], w = Object(l.useState)("16px"), y = Wn(w, 2), _ = y[0], E = y[1], B = Object(l.useRef)(null), W = [{
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
        }], J = function(P) {
          P.preventDefault(), h(!m);
        }, Q = function(P, z) {
          P.preventDefault(), r.current.focus();
          var F = window.getSelection();
          if (F.rangeCount) {
            var Y = F.getRangeAt(0), ue = Y.commonAncestorContainer, oe = Y.toString(), me = z.value + "px", Oe = function(Te) {
              for (; Te && Te !== r.current; ) {
                if (Te.nodeType === 1 && Te.tagName === "SPAN")
                  return Te.textContent == oe || Te.innerText == oe ? Te : null;
                Te = Te.parentNode;
              }
              return null;
            }, j = Oe(ue);
            if (F.isCollapsed) {
              var Me = document.createElement("span");
              Me.style.fontSize = me, Me.innerHTML = "​", Y.insertNode(Me), Y.setStart(Me.firstChild, 1), Y.setEnd(Me.firstChild, 1), F.removeAllRanges(), F.addRange(Y);
            } else if (j)
              j.style.fontSize = me;
            else {
              var Ze = document.createElement("span");
              Ze.style.fontSize = me;
              var Fe = Y.extractContents();
              Ze.appendChild(Fe), Y.insertNode(Ze);
            }
            E(z.label), h(!1);
          }
        }, p = function() {
          var P = window.getSelection();
          if (P.rangeCount > 0) {
            for (var z = P.getRangeAt(0), F = z.startContainer, Y = F, ue = function() {
              if (Y.nodeType === Node.ELEMENT_NODE && Y.style.fontSize) {
                var Oe = Y.style.fontSize, j = Oe.replace("px", ""), Ze = W.find(function(Fe) {
                  return Fe.value === j;
                });
                if (Ze)
                  return {
                    v: Ze.label
                  };
              }
              Y = Y.parentNode;
            }, oe; Y && Y !== r.current; )
              if (oe = ue(), oe) return oe.v;
          }
          return null;
        }, de = function() {
          var P = r.current;
          P && P.contains(window.getSelection().anchorNode) && P.focus();
        };
        return Object(l.useEffect)(function() {
          var q = function(F) {
            B.current && !B.current.contains(F.target) && h(!1);
          }, P = function() {
            var F;
            if (r != null && (F = r.current) !== null && F !== void 0 && F.contains(window.getSelection().anchorNode)) {
              var Y = p();
              E(Y || "16px");
            }
          };
          return document.addEventListener("click", q), document.addEventListener("selectionchange", P), document.addEventListener("keydown", de), function() {
            document.removeEventListener("click", q), document.removeEventListener("selectionchange", P), document.removeEventListener("keydown", de);
          };
        }, [r]), /* @__PURE__ */ e.a.createElement("button", {
          className: c.a.customSelectFormat,
          onClick: J,
          ref: B
        }, /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.selectSelected
        }, _, /* @__PURE__ */ e.a.createElement(Qe, null)), m && /* @__PURE__ */ e.a.createElement("div", {
          className: c.a.selectItemsFormat,
          style: {
            maxHeight: "200px",
            overflowY: "auto"
          }
        }, W.map(function(q, P) {
          return /* @__PURE__ */ e.a.createElement("div", {
            key: "key".concat(P),
            onClick: function(F) {
              return Q(F, q);
            },
            className: c.a.selectOption,
            style: {
              fontSize: "14px"
            }
          }, q.label);
        })));
      }
      var Hl = Fl;
      i(8);
      function ua(t) {
        "@babel/helpers - typeof";
        return ua = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
          return typeof r;
        } : function(r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
        }, ua(t);
      }
      var Pl = ["theme_config", "toolbar", "navbar", "value", "onChange", "getEditorRef", "mainProps", "placeholder", "image_handler", "handleFullScreen", "remove_from_toolbar", "remove_from_navbar", "style"];
      function xa() {
        return xa = Object.assign ? Object.assign.bind() : function(t) {
          for (var r = 1; r < arguments.length; r++) {
            var a = arguments[r];
            for (var u in a) ({}).hasOwnProperty.call(a, u) && (t[u] = a[u]);
          }
          return t;
        }, xa.apply(null, arguments);
      }
      function $n(t, r) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(t);
          r && (u = u.filter(function(m) {
            return Object.getOwnPropertyDescriptor(t, m).enumerable;
          })), a.push.apply(a, u);
        }
        return a;
      }
      function Jn(t) {
        for (var r = 1; r < arguments.length; r++) {
          var a = arguments[r] != null ? arguments[r] : {};
          r % 2 ? $n(Object(a), !0).forEach(function(u) {
            Ul(t, u, a[u]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : $n(Object(a)).forEach(function(u) {
            Object.defineProperty(t, u, Object.getOwnPropertyDescriptor(a, u));
          });
        }
        return t;
      }
      function Ul(t, r, a) {
        return (r = Ql(r)) in t ? Object.defineProperty(t, r, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : t[r] = a, t;
      }
      function Ql(t) {
        var r = Gl(t, "string");
        return ua(r) == "symbol" ? r : r + "";
      }
      function Gl(t, r) {
        if (ua(t) != "object" || !t) return t;
        var a = t[Symbol.toPrimitive];
        if (a !== void 0) {
          var u = a.call(t, r);
          if (ua(u) != "object") return u;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (r === "string" ? String : Number)(t);
      }
      function Yl(t, r) {
        var a = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (!a) {
          if (Array.isArray(t) || (a = Ga(t)) || r) {
            a && (t = a);
            var u = 0, m = function() {
            };
            return { s: m, n: function() {
              return u >= t.length ? { done: !0 } : { done: !1, value: t[u++] };
            }, e: function(E) {
              throw E;
            }, f: m };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var h, w = !0, y = !1;
        return { s: function() {
          a = a.call(t);
        }, n: function() {
          var E = a.next();
          return w = E.done, E;
        }, e: function(E) {
          y = !0, h = E;
        }, f: function() {
          try {
            w || a.return == null || a.return();
          } finally {
            if (y) throw h;
          }
        } };
      }
      function Kl(t) {
        return ql(t) || Wl(t) || Ga(t) || Vl();
      }
      function Vl() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Wl(t) {
        if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
      }
      function ql(t) {
        if (Array.isArray(t)) return Ya(t);
      }
      function jt(t, r) {
        return Zl(t) || Jl(t, r) || Ga(t, r) || $l();
      }
      function $l() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Ga(t, r) {
        if (t) {
          if (typeof t == "string") return Ya(t, r);
          var a = {}.toString.call(t).slice(8, -1);
          return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? Ya(t, r) : void 0;
        }
      }
      function Ya(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var a = 0, u = Array(r); a < r; a++) u[a] = t[a];
        return u;
      }
      function Jl(t, r) {
        var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
        if (a != null) {
          var u, m, h, w, y = [], _ = !0, E = !1;
          try {
            if (h = (a = a.call(t)).next, r !== 0) for (; !(_ = (u = h.call(a)).done) && (y.push(u.value), y.length !== r); _ = !0) ;
          } catch (B) {
            E = !0, m = B;
          } finally {
            try {
              if (!_ && a.return != null && (w = a.return(), Object(w) !== w)) return;
            } finally {
              if (E) throw m;
            }
          }
          return y;
        }
      }
      function Zl(t) {
        if (Array.isArray(t)) return t;
      }
      function Xl(t, r) {
        if (t == null) return {};
        var a, u, m = ec(t, r);
        if (Object.getOwnPropertySymbols) {
          var h = Object.getOwnPropertySymbols(t);
          for (u = 0; u < h.length; u++) a = h[u], r.indexOf(a) >= 0 || {}.propertyIsEnumerable.call(t, a) && (m[a] = t[a]);
        }
        return m;
      }
      function ec(t, r) {
        if (t == null) return {};
        var a = {};
        for (var u in t) if ({}.hasOwnProperty.call(t, u)) {
          if (r.indexOf(u) >= 0) continue;
          a[u] = t[u];
        }
        return a;
      }
      var Zn = function(r, a, u) {
        return r || (r = u), a && (r = r.filter(function(m) {
          return typeof m == "string" ? !a.includes(m) : !a.includes(m.name);
        }), r = r.filter(function(m, h) {
          return m !== "|" || h === 0 || r[h - 1] !== "|";
        })), r;
      }, Xn = function(r) {
        var a = new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i");
        return a.test(r);
      };
      function tc(t) {
        var r = t.theme_config, a = t.toolbar, u = t.navbar, m = t.value, h = t.onChange, w = t.getEditorRef, y = t.mainProps, _ = t.placeholder, E = t.image_handler;
        t.handleFullScreen;
        var B = t.remove_from_toolbar, W = t.remove_from_navbar, J = t.style, Q = Xl(t, Pl), p = Object(l.useRef)(null), de = Object(l.useState)(!1), q = jt(de, 2), P = q[0], z = q[1], F = Object(l.useState)(!1), Y = jt(F, 2), ue = Y[0], oe = Y[1], me = Object(l.useState)(!1), Oe = jt(me, 2), j = Oe[0], Ze = Oe[1], Fe = Object(l.useState)(!1), Me = jt(Fe, 2), He = Me[0], Te = Me[1], lt = Object(l.useState)(null), k = jt(lt, 2), f = k[0], x = k[1], D = Object(l.useState)(!1), M = jt(D, 2), O = M[0], he = M[1], De = Object(l.useState)(""), je = jt(De, 2), Xe = je[0], rt = je[1], nt = Object(l.useState)(""), ma = jt(nt, 2), ur = ma[0], nr = ma[1], Ka = Object(l.useState)(null), wt = jt(Ka, 2), ot = wt[0], xt = wt[1], ct = Object(l.useState)(null), It = jt(ct, 2), _t = It[0], mr = It[1], Nt = Object(l.useState)(""), _a = jt(Nt, 2), rc = _a[0], ac = _a[1], nc = Object(l.useState)({
          link: "",
          height: "",
          width: "",
          type: "general",
          text: "",
          open_new_tab: !1
        }), eo = jt(nc, 2), or = eo[0], to = eo[1], oc = Object(l.useState)(null), ro = jt(oc, 2), Et = ro[0], Va = ro[1], ic = Object(l.useState)(!0), ao = jt(ic, 2), Fr = ao[0], no = ao[1], lc = Object(l.useState)({}), oo = jt(lc, 2), io = oo[0], cc = oo[1], sc = Object(l.useState)(null), lo = jt(sc, 2), pa = lo[0], co = lo[1], dc = Object(l.useState)(!1), so = jt(dc, 2), uc = so[0], mc = so[1], pc = Object(l.useState)(!1), uo = jt(pc, 2), hc = uo[0], fc = uo[1], gc = Object(l.useState)(!1), mo = jt(gc, 2), vc = mo[0], bc = mo[1], yc = function() {
          var X = p == null ? void 0 : p.current;
          if (X) {
            var ie = X.querySelector("img");
            return !!ie;
          }
          return !1;
        }, wc = function() {
          Te(!0);
          var X = p == null ? void 0 : p.current;
          if (!X) return;
          var ie = yc();
          if (!ie) {
            var fe = document.querySelector(".resizeImageWrapper");
            fe && fe.parentNode.removeChild(fe), Va(null);
          }
          var ke = Kl(X.childNodes).every(function(mt) {
            return mt.nodeType === Node.TEXT_NODE || mt.nodeType === Node.ELEMENT_NODE && mt.nodeName === "BR";
          });
          if (ke && X.textContent.trim() !== "") {
            var Ae = window.getSelection(), Ce = Ae == null ? void 0 : Ae.getRangeAt(0), Ye = Ce == null ? void 0 : Ce.cloneRange();
            Ye == null || Ye.selectNodeContents(X), Ye == null || Ye.setEnd(Ce.startContainer, Ce.startOffset);
            for (var at = (Ye == null ? void 0 : Ye.toString().length) || 0, st = document.createElement("p"); X.firstChild; )
              st.appendChild(X.firstChild);
            X.appendChild(st), st.firstChild;
            var Dt = at, vt = function(zt, Ht) {
              var Gt = document.createRange(), gr = window.getSelection();
              Gt.setStart(zt, Ht), Gt.collapse(!0), gr.removeAllRanges(), gr.addRange(Gt);
            }, Ft = function mt(zt) {
              if (zt.nodeType === Node.TEXT_NODE) {
                if (Dt <= zt.length)
                  throw vt(zt, Dt), "done";
                Dt -= zt.length;
              } else
                for (var Ht = 0; Ht < zt.childNodes.length; Ht++)
                  mt(zt.childNodes[Ht]);
            };
            try {
              Ft(st);
            } catch {
            }
          }
          function qt(mt, zt) {
            if (mt.getAttribute("data-mlx-editor-empty") || mt.classList.contains("empty")) {
              mt.setAttribute("data-mlx-editor-empty", "true");
              var Ht;
              if (zt.tagName.toLowerCase() === "div") {
                var Gt = document.createElement("p");
                Gt.innerHTML = zt.innerHTML;
                var gr = Yl(zt.attributes), Ea;
                try {
                  for (gr.s(); !(Ea = gr.n()).done; ) {
                    var Aa = Ea.value;
                    Gt.setAttribute(Aa.name, Aa.value);
                  }
                } catch ($a) {
                  gr.e($a);
                } finally {
                  gr.f();
                }
                Ht = Gt.outerHTML;
              } else
                Ht = zt.outerHTML;
              mt.innerHTML = Ht;
              return;
            }
            mt.setAttribute("data-mlx-editor-empty", "true");
            var Ca = window.getSelection(), ga = document.createRange();
            ga.selectNodeContents(mt), ga.collapse(!0), Ca.removeAllRanges(), Ca.addRange(ga), mt.innerHTML = "<p><br></p>", document.execCommand("removeFormat", !1, null), mt.style.cssText = "";
          }
          var ht = X.innerHTML;
          ht = xr(ht);
          var tt = document.createElement("div");
          tt.innerHTML = ht;
          var Qt = xc(X.innerHTML), ir = (!tt.textContent || tt.textContent.replace(/\s/g, "").length === 0) && Qt.isEmpty;
          ir ? qt(X, Qt.tempDiv) : (X.removeAttribute("data-mlx-editor-empty"), h == null || h(tt.innerHTML));
        };
        function xc(g) {
          var X = document.createElement("div");
          if (X.innerHTML = g, X.childNodes.forEach(function(fe) {
            fe.type == Node.TEXT_NODE && !fe.textContent.trim() && X.removeChild(fe);
          }), X.children.length === 0 || X.innerHTML === "<br>") {
            var ie = document.createElement("P");
            return ie.innerHTML = "<br>", {
              tempDiv: ie,
              isEmpty: !0
            };
          }
          return X.children.length === 1 && X.children[0].children.length === 1 && X.children[0].children[0].tagName === "BR" ? {
            tempDiv: X.children[0],
            isEmpty: !0
          } : {
            isEmpty: !1
          };
        }
        var _c = function(X) {
          if (X.key === "Enter" && !X.shiftKey) {
            var ie;
            X.preventDefault();
            var fe = p.current, ke = window.getSelection();
            if (!ke.rangeCount || !fe) return;
            for (var Ae = ke.getRangeAt(0), Ce = Ae.startContainer, Ye = null; Ce && Ce !== fe; ) {
              if (Ce.nodeName === "LI") {
                Ye = Ce;
                break;
              }
              Ce = Ce.parentNode;
            }
            if (Ye) {
              var at = document.createElement("li");
              at.appendChild(document.createElement("br")), Ye.nextSibling ? Ye.parentNode.insertBefore(at, Ye.nextSibling) : Ye.parentNode.appendChild(at);
              var st = window.getSelection(), Dt = document.createRange();
              Dt.selectNodeContents(at), Dt.collapse(!0), st.removeAllRanges(), st.addRange(Dt);
              return;
            }
            for (; Ce && Ce.nodeName !== "P" && Ce !== fe; )
              Ce = Ce.parentNode;
            var vt = ((ie = Ce) === null || ie === void 0 ? void 0 : ie.nodeName) === "P" ? Ce : null;
            if (!vt) {
              vt = document.createElement("p"), vt.appendChild(document.createElement("br")), fe.appendChild(vt);
              var Ft = document.createRange();
              Ft.setStart(vt, 0), Ft.collapse(!0), ke.removeAllRanges(), ke.addRange(Ft);
              return;
            }
            var qt = Ae.startOffset, ht = Ae.startContainer, tt = document.createElement("p");
            if (ht.nodeType === Node.TEXT_NODE) {
              var Qt = ht.nodeValue, ir = Qt.slice(0, qt), mt = Qt.slice(qt);
              if (ht.nodeValue = ir, mt) {
                var zt = document.createTextNode(mt);
                tt.appendChild(zt);
              } else
                tt.appendChild(document.createElement("br"));
            } else
              tt.appendChild(document.createElement("br"));
            var Ht = vt.parentNode;
            Ht && Ht.contains(vt) && (vt.nextSibling ? Ht.insertBefore(tt, vt.nextSibling) : Ht.appendChild(tt));
            var Gt = document.createRange();
            Gt.setStart(tt, 0), Gt.collapse(!0), ke.removeAllRanges(), ke.addRange(Gt);
          }
        }, Sr = function(X, ie, fe) {
          X.preventDefault(), nr(ie), cc(fe);
        }, ha = function(X) {
          X && X.preventDefault(), rt(""), xt(""), nr(""), to({}), Va(null);
        }, po = function(X) {
          if (X.preventDefault(), p != null && p.current) {
            var ie = f.replace(/\n\s*\n/g, `
`).replace(/\s+/g, " ").trim();
            p.current.innerHTML = ie, z(!1), h && h(ie);
          }
        }, ho = function(X) {
          X.preventDefault();
          var ie = window.getSelection();
          if (ie.toString())
            ie.removeAllRanges();
          else {
            var fe = document.createRange();
            fe.selectNodeContents(p == null ? void 0 : p.current), ie.removeAllRanges(), ie.addRange(fe);
          }
        }, fo = function() {
          Hr(), document.execCommand("insertHorizontalRule");
        }, Hr = function() {
          var X = p == null ? void 0 : p.current;
          if (X && pa) {
            var ie = window.getSelection();
            ie.removeAllRanges(), ie.addRange(pa), X.focus();
          }
        }, kc = function(X) {
          var ie = X.text, fe = X.link, ke = X.open_new_tab, Ae = X.link_type;
          ie || (ie = fe);
          var Ce = '<a href="'.concat(fe, '"');
          if (ke && ke !== "false" && (Ce += ' target="_blank"'), Ae === "image" && Xe)
            if (Et)
              if (Et.tagName === "IMG") {
                var Ye = Et.src;
                Ye === Xe ? ie = Et.outerHTML : ie = '<img src="'.concat(Xe, '" alt="ImageLink" />');
              } else if (Et.tagName === "A") {
                var at = Et.firstChild;
                at && at.nodeType === Node.ELEMENT_NODE && at.tagName === "IMG" && at.src === Xe ? ie = at.outerHTML : ie = '<img src="'.concat(Xe, '" alt="ImageLink" />');
              } else
                ie = '<img src="'.concat(Xe, '" alt="ImageLink" />');
            else
              ie = '<img src="'.concat(Xe, '" alt="ImageLink" />');
          else Ae === "button" && (ie = "<button contentEditable=false>".concat(ie, "</button>"));
          Ce += ">".concat(ie, "</a>"), Et && Et.parentElement ? Et.parentElement.removeChild(Et) : wo(), Hr(), document.execCommand("insertHTML", !1, Ce), ha();
        }, Ec = function() {
          var X = "".concat(Et.textContent.trim());
          if (Et.tagName === "IMG" && (X = '<img src="'.concat(Et.src, '" alt="ImageLink" />')), Et) {
            var ie = Et.parentElement;
            ie && ie.removeChild(Et);
          }
          Hr(), document.execCommand("insertHTML", !1, X), ha();
        }, Ac = function(X) {
          var ie = X.link, fe = X.height, ke = X.width;
          if (Et && or)
            Et.src = ie, fe ? Et.style.height = "".concat(fe, "px") : Et.style.height = null, ke ? Et.style.width = "".concat(ke, "px") : Et.style.width = null, setTimeout(function() {
              oe(!1), ha();
            }, 0);
          else {
            Hr();
            var Ae = '<img src="'.concat(ie, '" alt="Image" style="');
            fe && (Ae += "height:".concat(fe, "px;")), ke && (Ae += "width:".concat(ke, "px;")), Ae += '"/>', document.execCommand("insertHTML", !1, Ae);
            var Ce = document.querySelector('[contenteditable="true"]');
            Ce && Ce.dispatchEvent(new Event("input", {
              bubbles: !0
            })), oe(!1), ha();
          }
        }, Cc = function(X, ie) {
          var fe = X.link, ke = X.height, Ae = X.width, Ce = X.type, Ye = X.embed_code, at = p.current, st = "";
          if (Ce === "general")
            if (fe.match(/\.(mp4|mov|avi|wmv)$/))
              st = '<video width="'.concat(Ae || "640", '" height="').concat(ke || "360", '" controls><source src="').concat(fe, '" type="video/mp4"></video>');
            else {
              var Dt = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/, vt = /(?:https?:\/\/)?(?:www\.)?vimeo.com\/(\d+)/;
              if (fe.match(Dt)) {
                var Ft = fe.match(Dt)[1];
                st = '<iframe width="'.concat(Ae || "640", '" height="').concat(ke || "360", '" src="https://www.youtube.com/embed/').concat(Ft, '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
              } else if (fe.match(vt)) {
                var qt = fe.match(vt)[1];
                st = '<iframe src="https://player.vimeo.com/video/'.concat(qt, '" width="').concat(Ae || "640", '" height="').concat(ke || "360", '" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>');
              } else
                st = Ye || "";
            }
          else Ce === "embed" && Ye && at && (st = Ye);
          if (ie && at && st)
            Hr(), ie.parentNode.setAttribute("data-mtl-link-type", Ce), ie.outerHTML = st;
          else if (at && st) {
            var ht = Sc(st, Ce, function(ir) {
              var mt = ir.querySelector("iframe");
              xt(mt), mr(ir.getAttribute("data-mtl-link-type") || "general"), nr("video");
            });
            Hr();
            var tt = window.getSelection();
            if (!tt.rangeCount) return;
            var Qt = tt.getRangeAt(0);
            Qt.deleteContents(), Qt.insertNode(ht), Qt.setStartAfter(ht), Qt.setEndAfter(ht), tt.removeAllRanges(), tt.addRange(Qt);
          }
          xt(null), nr("");
        };
        function Sc(g, X, ie) {
          var fe = document.createElement("div");
          fe.innerHTML = g;
          var ke = document.createElement("div");
          ke.className = "iframe-wrapper", ke.contentEditable = "true", ke.setAttribute("data-mtl-link-type", X);
          var Ae = document.createElement("div");
          Ae.className = "iframe-overlay";
          var Ce = document.createElement("button");
          return Ce.className = "iframe-settings-btn", Ce.contentEditable = "false", Ce.innerHTML = '<div style="display: flex; align-items: center;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10.275 22q-.425 0-.75-.275t-.375-.7l-.3-2.225q-.325-.125-.612-.3t-.563-.375l-1.55.65q-.625.275-1.25.05t-.975-.8l-1.175-2.05q-.35-.575-.2-1.225t.675-1.075l1.325-1Q4.5 12.5 4.5 12.337v-.675q0-.162.025-.337l-1.325-1Q2.675 9.9 2.525 9.25t.2-1.225L3.9 5.975q.35-.575.975-.8t1.25.05l1.55.65q.275-.2.575-.375t.6-.3l.2-1.65q.075-.675.575-1.113T10.8 2h2.4q.675 0 1.175.438t.575 1.112l.2 1.65q.325.125.613.3t.562.375l1.5-.65q.625-.275 1.263-.05t.987.8l1.175 2.05q.35.575.213 1.225t-.663 1.075L19.125 11.6q-.275.2-.562.3t-.638.1h-2.35q0-1.45-1.037-2.475T12.05 8.5q-1.475 0-2.488 1.013T8.55 12q0 1.2.688 2.1T11 15.35v5.8q0 .35-.2.6t-.525.25M20 22h-6q-.425 0-.712-.288T13 21v-6q0-.425.288-.712T14 14h6q.425 0 .713.288T21 15v2l1.575-1.575q.125-.125.275-.062t.15.237v4.8q0 .175-.15.238t-.275-.063L21 19v2q0 .425-.288.713T20 22"/></svg> <span style="margin-inline: 8px;">Settings</span></div>', Ce.addEventListener("click", function(Ye) {
            Ye.stopPropagation(), typeof ie == "function" && ie(ke);
          }), ke.appendChild(Ae), ke.appendChild(Ce), ke.appendChild(fe.childNodes[0]), ke;
        }
        var Ic = function() {
          var X = p.current.innerHTML, ie = document.createElement("iframe");
          ie.style.display = "none", document.body.appendChild(ie);
          var fe = ie.contentDocument || ie.contentWindow.document;
          fe.write(X), fe.close(), ie.contentWindow.print(), setTimeout(function() {
            document.body.removeChild(ie);
          }, 100);
        }, Nc = function(X, ie) {
          X.preventDefault(), (p == null ? void 0 : p.current) !== null && (Hr(), document.execCommand("insertHTML", !1, ie), xt(null), nr(""));
        }, go = function(X) {
          var ie = X.replace(/style="[^"]*"/g, "");
          return ie;
        }, Mc = function(X) {
          X.preventDefault(), navigator.clipboard.read().then(function(ie) {
            ie.forEach(function(fe) {
              fe.types.includes("image/png") || fe.types.includes("image/jpeg") ? fe.getType(fe.types[0]).then(function(ke) {
                var Ae = '<img src="'.concat(URL.createObjectURL(ke), '" alt="Image">');
                document.execCommand("insertHTML", !1, Ae);
              }).catch(function(ke) {
                console.error("Error reading image content:", ke);
              }) : fe.types.includes("text/html") ? fe.getType("text/html").then(function(ke) {
                ke.text().then(function(Ae) {
                  var Ce = go(Ae), Ye = Ce.replace(/<!--[\s\S]*?-->/g, "");
                  document.execCommand("insertHTML", !1, Ye);
                }).catch(function(Ae) {
                  console.error("Error reading HTML content:", Ae);
                });
              }).catch(function(ke) {
                console.error("Error getting HTML type from ClipboardItem:", ke);
              }) : fe.types.includes("text/plain") && fe.getType("text/plain").then(function(ke) {
                ke.text().then(function(Ae) {
                  if (Xn(Ae)) {
                    var Ce = '<a href="'.concat(Ae, '" target="_blank">').concat(Ae, "</a>");
                    document.execCommand("insertHTML", !1, Ce);
                  } else
                    document.execCommand("insertText", !1, Ae);
                }).catch(function(Ae) {
                  console.error("Error reading text content:", Ae);
                });
              }).catch(function(ke) {
                console.error("Error getting text type from ClipboardItem:", ke);
              });
            });
          }).catch(function(ie) {
            console.error("Error reading clipboard:", ie);
          });
        }, Lc = function() {
          fa();
        }, Rc = function() {
          p.current.innerHTML = "";
        }, Oc = function() {
          ac(p == null ? void 0 : p.current.innerHTML), Ze(!0);
        }, vo = function() {
          if (!P && p !== null && p !== void 0 && p.current) {
            var X = p == null ? void 0 : p.current.innerHTML, ie = xr(X);
            x(ie);
          } else
            x("");
          z(!P);
        }, bo = function() {
          he(!O);
        }, yo = function(X) {
          X.key === "Escape" && he(!1);
        }, Wa = function() {
          var X = p == null ? void 0 : p.current;
          X && (X.innerText.trim() === "" ? (X.classList.add("empty"), no(!0)) : (X.classList.remove("empty"), no(!1)));
        }, fa = function() {
          var X = window.getSelection();
          X.rangeCount > 0 && co(X.getRangeAt(0));
        }, wo = function() {
          if (pa) {
            var X = window.getSelection();
            X.removeAllRanges(), X.addRange(pa);
          }
        };
        Object(l.useEffect)(function() {
          var g = function() {
            he(document.fullscreenElement !== null);
          };
          return Wa(), document.addEventListener("keydown", yo), document.addEventListener("input", Wa), document.addEventListener("fullscreenchange", g), function() {
            document.removeEventListener("keydown", yo), document.removeEventListener("input", Wa), document.removeEventListener("fullscreenchange", g);
          };
        }, []);
        var xo = function() {
          if (ur === "link")
            return {
              component: /* @__PURE__ */ e.a.createElement(Qi, {
                onLinkInsert: kc,
                item: io,
                setIsOpenModel: nr,
                selectedData: or,
                imageUrl: Xe,
                setImageUrl: rt,
                image_handler: E,
                setIsLoading: oe
              }),
              title: "".concat(or != null && or.link ? "Update" : "Insert", " Link")
            };
          if (ur === "image")
            return {
              component: /* @__PURE__ */ e.a.createElement(cl, {
                onImageInsert: Ac,
                item: io,
                setIsLoading: oe,
                setIsOpenModel: nr,
                image_handler: E,
                selectedData: or
              }),
              title: "".concat(or != null && or.link ? "Update" : "Insert", " Image")
            };
          if (ur === "video")
            return {
              component: /* @__PURE__ */ e.a.createElement(fl, {
                onMediaInsert: Cc,
                targetElement: ot,
                targetElementType: _t
              }),
              title: "".concat(or != null && or.link ? "Update" : "Insert", " Video")
            };
          if (ur === "special_char")
            return {
              component: /* @__PURE__ */ e.a.createElement(dt, {
                handleCharSelect: Nc
              }),
              title: "Insert Special Characters"
            };
        };
        r && Object.keys(r).length > 0 && Object.keys(r).forEach(function(g, X) {
          document.documentElement.style.setProperty("--editor-".concat(g), r[g]);
        }), a = Zn(a, B, Gr), u = Zn(u, W, Yr), Object(l.useEffect)(function() {
          He || p.current && m && (p.current.innerHTML = m, Te(!0)), m || (p.current.innerHTML = ""), w && w(p);
        }, [O, p, m]);
        var _o = function(X) {
          X.preventDefault(), p.current ? wo() : setTimeout(function() {
            p.current.focus();
          }, 0), navigator.clipboard.read().then(function(ie) {
            ie.forEach(function(fe) {
              fe.types.includes("image/png") || fe.types.includes("image/jpeg") ? fe.getType(fe.types[0]).then(function(ke) {
                var Ae = '<img src="'.concat(URL.createObjectURL(ke), '" alt="Image">');
                document.execCommand("insertHTML", !1, Ae);
              }).catch(function(ke) {
                console.error("Error reading image content:", ke);
              }) : fe.types.includes("text/html") ? fe.getType("text/html").then(function(ke) {
                ke.text().then(function(Ae) {
                  var Ce = go(Ae), Ye = Ce.replace(/<!--[\s\S]*?-->/g, "");
                  document.execCommand("insertHTML", !1, Ye);
                }).catch(function(Ae) {
                  console.error("Error reading HTML content:", Ae);
                });
              }).catch(function(ke) {
                console.error("Error getting HTML type from ClipboardItem:", ke);
              }) : fe.types.includes("text/plain") && fe.getType("text/plain").then(function(ke) {
                ke.text().then(function(Ae) {
                  if (Xn(Ae)) {
                    var Ce = '<a href="'.concat(Ae, '" target="_blank">').concat(Ae, "</a>");
                    document.execCommand("insertHTML", !1, Ce);
                  } else
                    document.execCommand("insertText", !1, Ae);
                }).catch(function(Ae) {
                  console.error("Error reading text content:", Ae);
                });
              }).catch(function(ke) {
                console.error("Error getting text type from ClipboardItem:", ke);
              });
            });
          }).catch(function(ie) {
            console.error("Error reading clipboard:", ie);
          });
        }, qa = function() {
          var X = document.getElementsByClassName("style_wysiwygEditorToolbar__2W7yf")[0];
          X && mc(X.offsetHeight > 34);
          var ie = document.getElementsByClassName("style_wysiwygEditorToolbar__2W7yf")[1];
          ie && (fc(ie.offsetHeight > 34), bc(ie.offsetHeight > 65));
        }, Dc = function() {
          var X = p.current;
          if (X) {
            var ie = document.createRange();
            X.childNodes.length > 0 ? ie.setStart(X.childNodes[0], 0) : ie.setStart(X, 0), ie.collapse(!0);
            var fe = window.getSelection();
            fe.removeAllRanges(), fe.addRange(ie), co(ie);
          }
        }, ka = function(X, ie) {
          X.preventDefault();
          var fe = X.clientX, ke = document.querySelector(".resizeImageWrapper"), Ae = document.querySelector(".resizer-image"), Ce = parseFloat(Ae.style.width), Ye = parseFloat(Ae.style.height);
          isNaN(Ye) && (Ye = parseFloat(Ae.offsetHeight)), isNaN(Ce) && (Ce = parseFloat(Ae.offsetWidth));
          var at = Ye / Ce, st = function(Ft) {
            var qt = Ce + (Ft.clientX - fe);
            ie && (qt = Ce - (Ft.clientX - fe));
            var ht = qt > 50 ? qt : 50, tt = at * ht;
            tt = Math.round(tt), ht = Math.round(ht), ke.style.width = "".concat(ht, "px"), ke.style.height = "".concat(tt, "px"), Ae.style.width = "".concat(ht, "px"), Ae.style.height = "".concat(tt, "px");
          }, Dt = function vt() {
            window.removeEventListener("mousemove", st), window.removeEventListener("mouseup", vt);
          };
          window.addEventListener("mousemove", st), window.addEventListener("mouseup", Dt);
        }, ko = function(X) {
          if (X.target.tagName === "IMG" && p.current.contains(X.target)) {
            var ie, fe, ke = (ie = X.target.parentElement) === null || ie === void 0 || (fe = ie.classList) === null || fe === void 0 ? void 0 : fe.contains("resizeImageWrapper");
            if (ke) return;
            var Ae = document.querySelector(".resizer-image");
            Ae && _r();
            var Ce = X.target, Ye = Ce.offsetWidth, at = document.createElement("div");
            at.style.display = "inline-block", at.style.width = "".concat(Ye, "px"), at.classList.add("resizeImageWrapper");
            var st = document.createElement("div");
            st.classList.add("resizer"), st.onmousedown = ka;
            var Dt = document.createElement("div");
            Dt.classList.add("resizer", "topRight"), Dt.onmousedown = ka;
            var vt = document.createElement("div");
            vt.classList.add("resizer", "bottomLeft"), vt.onmousedown = function(Gt) {
              return ka(Gt, "left");
            };
            var Ft = document.createElement("div");
            Ft.classList.add("resizer", "topLeft"), Ft.onmousedown = function(Gt) {
              return ka(Gt, "left");
            }, Ce.classList.add("resizer-image");
            var qt = Ce.cloneNode(!0);
            at.appendChild(qt), at.appendChild(st), at.appendChild(Dt), at.appendChild(vt), at.appendChild(Ft), Ce.parentNode.replaceChild(at, Ce);
          } else {
            var ht, tt, Qt, ir, mt, zt = (ht = X.target) === null || ht === void 0 || (tt = ht.classList) === null || tt === void 0 ? void 0 : tt.contains("resizeImageWrapper"), Ht = (Qt = X.target) === null || Qt === void 0 || (ir = Qt.parentElement) === null || ir === void 0 || (mt = ir.classList) === null || mt === void 0 ? void 0 : mt.contains("resizeImageWrapper");
            !zt && !Ht && _r();
          }
        };
        Object(l.useEffect)(function() {
          qa(), Dc();
          var g = p.current;
          return g && (window.addEventListener("click", ko), g.addEventListener("mouseup", fa), g.addEventListener("keyup", fa)), window.addEventListener("resize", qa), function() {
            window.removeEventListener("resize", qa), g && (window.removeEventListener("click", ko), g.removeEventListener("mouseup", fa), g.removeEventListener("keyup", fa));
          };
        }, [p]), Object(l.useEffect)(function() {
          O || ur || P || j ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
        }, [O, ur, P, j]);
        var Bc = O && document.getElementById("action-components") ? {
          height: "calc(100vh - ".concat(document.getElementById("action-components").offsetHeight, "px - 22px)")
        } : {};
        return /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement("div", xa({}, y, {
          className: "".concat(c.a.reactEditorMain, " ").concat(O ? c.a.fullScreen : ""),
          id: "react-editor"
        }), /* @__PURE__ */ e.a.createElement("div", {
          id: "action-components",
          className: "".concat(c.a.actionComponents)
        }, u.length > 0 && /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(c.a.wysiwygEditorToolbar),
          id: "editor-navbar"
        }, /* @__PURE__ */ e.a.createElement("hr", {
          className: c.a.hr1,
          style: {
            display: uc ? "block" : "none"
          }
        }), u.map(function(g, X) {
          var ie = g === "|", fe = g === "file" || g.name === "file", ke = g === "view" || g.name === "view", Ae = g === "format" || g.name === "format", Ce = g === "insert" || g.name === "insert", Ye = g === "copy" || g.name === "copy", at = g === "cut" || g.name === "cut", st = g === "paste" || g.name === "paste", Dt = g === "select_all" || g.name === "select_all", vt = g === "image" || g.name === "image", Ft = g === "link" || g.name === "link", qt = g === "video" || g.name === "video";
          return /* @__PURE__ */ e.a.createElement("div", {
            key: "key".concat(X)
          }, ie && /* @__PURE__ */ e.a.createElement("div", {
            className: c.a.verticalLine
          }), fe && /* @__PURE__ */ e.a.createElement(Br, {
            handleNewDocument: Rc,
            handlePreview: Oc,
            handlePrint: Ic,
            item: g,
            remove_from_navbar: W
          }), ke && /* @__PURE__ */ e.a.createElement(Le, {
            isFullScreen: O,
            handleViewSource: vo,
            toggleFullScreen: bo,
            item: g,
            isPlaceholder: Fr,
            placeholder: _,
            value: m,
            remove_from_navbar: W
          }), Ce && /* @__PURE__ */ e.a.createElement(Ut, {
            onSelectOption: Sr,
            handleInsertHR: fo,
            item: g,
            remove_from_navbar: W
          }), Ae && /* @__PURE__ */ e.a.createElement(Ii, {
            item: g,
            isFullScreen: O,
            remove_from_navbar: W,
            editorRef: p
          }), Dt && /* @__PURE__ */ e.a.createElement("div", {
            className: c.a.increaseIconSize
          }, /* @__PURE__ */ e.a.createElement("button", {
            onClick: ho,
            title: g != null && g.title ? g.title : "Select All",
            disabled: Fr && _ && !m
          }, g != null && g.icon ? g.icon : /* @__PURE__ */ e.a.createElement(S, null))), vt && /* @__PURE__ */ e.a.createElement("div", {
            className: c.a.increaseIconSize
          }, /* @__PURE__ */ e.a.createElement("button", {
            onClick: function(tt) {
              return Sr(tt, "image", g);
            },
            title: g != null && g.title ? g.title : "Upload Image"
          }, g != null && g.icon ? g.icon : /* @__PURE__ */ e.a.createElement(Pe, null))), Ft && /* @__PURE__ */ e.a.createElement("div", {
            className: c.a.increaseIconSize
          }, /* @__PURE__ */ e.a.createElement("button", {
            onClick: function(tt) {
              return Sr(tt, "link", g);
            },
            title: g != null && g.title ? g.title : "Add Link"
          }, g != null && g.icon ? g.icon : /* @__PURE__ */ e.a.createElement(it, null))), qt && /* @__PURE__ */ e.a.createElement("div", {
            className: c.a.increaseIconSize
          }, /* @__PURE__ */ e.a.createElement("button", {
            onClick: function(tt) {
              return Sr(tt, "video", g);
            },
            title: g != null && g.title ? g.title : "Upload Video"
          }, g != null && g.icon ? g.icon : /* @__PURE__ */ e.a.createElement(we, null))), Ye && /* @__PURE__ */ e.a.createElement("div", {
            className: c.a.increaseIconSize
          }, /* @__PURE__ */ e.a.createElement(ut, {
            editorRef: p,
            name: "copy",
            icon: /* @__PURE__ */ e.a.createElement(Cn, null),
            title: "Copy",
            item: g,
            disabled: Fr && _ && !m
          })), at && /* @__PURE__ */ e.a.createElement("div", {
            className: c.a.increaseIconSize
          }, /* @__PURE__ */ e.a.createElement(ut, {
            editorRef: p,
            name: "cut",
            icon: /* @__PURE__ */ e.a.createElement(An, null),
            title: "Cut",
            item: g,
            disabled: Fr && _ && !m
          })), st && /* @__PURE__ */ e.a.createElement("div", {
            className: c.a.increaseIconSize
          }, /* @__PURE__ */ e.a.createElement("button", {
            onClick: _o,
            title: g != null && g.title ? g.title : "Paste"
          }, g != null && g.icon ? g.icon : /* @__PURE__ */ e.a.createElement(En, null))));
        })), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(c.a.wysiwygEditorToolbar, " ").concat(c.a.wysiwygEditorToolbarWrapper)
        }, /* @__PURE__ */ e.a.createElement("hr", {
          className: c.a.hr1,
          style: {
            display: hc ? "block" : "none"
          }
        }), /* @__PURE__ */ e.a.createElement("hr", {
          className: "".concat(c.a.hr1, " ").concat(c.a.hr2),
          style: {
            display: vc ? "block" : "none"
          }
        }), a.map(function(g, X) {
          var ie = g === "|", fe = g === "undo" || g.name === "undo", ke = g === "redo" || g.name === "redo", Ae = g === "bold" || g.name === "bold", Ce = g === "italic" || g.name === "italic", Ye = g === "underline" || g.name === "underline", at = g === "superscript" || g.name === "superscript", st = g === "subscript" || g.name === "subscript", Dt = g === "alignLeft" || g.name === "alignLeft", vt = g === "alignCenter" || g.name === "alignCenter", Ft = g === "alignRight" || g.name === "alignRight", qt = g === "alignJustify" || g.name === "alignJustify", ht = g === "alignment" || g.name === "alignment", tt = g === "indent" || g.name === "indent", Qt = g === "outdent" || g.name === "outdent", ir = g === "orderedList" || g.name === "orderedList", mt = g === "unorderedList" || g.name === "unorderedList", zt = g === "removeFormat" || g.name === "removeFormat", Ht = g === "textColor" || g.name === "textColor", Gt = g === "backgroundColor" || g.name === "backgroundColor", gr = g === "ltr" || g.name === "ltr", Ea = g === "rtl" || g.name === "rtl", Aa = g === "format" || g.name === "format", Ca = g === "fontfamily" || g.name === "fontfamily", ga = g === "fontsize" || g.name === "fontsize", $a = g === "copy" || g.name === "copy", jc = g === "cut" || g.name === "cut", zc = g === "paste" || g.name === "paste", Tc = g === "select_all" || g.name === "select_all", Fc = g === "image" || g.name === "image", Hc = g === "link" || g.name === "link", Pc = g === "video" || g.name === "video", Uc = g === "source_code" || g.name === "source_code", Qc = g === "full_screen" || g.name === "full_screen", Gc = g === "horizontal_line" || g.name === "horizontal_line", Yc = g === "special_character" || g.name === "special_character";
          return /* @__PURE__ */ e.a.createElement("div", {
            key: "key".concat(X)
          }, ie && /* @__PURE__ */ e.a.createElement("div", {
            className: c.a.verticalLine
          }), fe && /* @__PURE__ */ e.a.createElement(ut, {
            editorRef: p,
            name: "undo",
            icon: /* @__PURE__ */ e.a.createElement(ft, null),
            title: g.title ? g.title : "Undo",
            item: g
          }), ke && /* @__PURE__ */ e.a.createElement(ut, {
            editorRef: p,
            name: "redo",
            icon: /* @__PURE__ */ e.a.createElement(Ie, null),
            title: "Redo",
            item: g
          }), Aa && /* @__PURE__ */ e.a.createElement(sr, {
            remove_from_toolbar: B,
            editorRef: p
          }), Ca && /* @__PURE__ */ e.a.createElement(Il, {
            editorRef: p
          }), ga && /* @__PURE__ */ e.a.createElement(Hl, {
            editorRef: p
          }), Ae && /* @__PURE__ */ e.a.createElement(ut, {
            editorRef: p,
            name: "bold",
            icon: /* @__PURE__ */ e.a.createElement(ve, null),
            title: "Bold",
            item: g
          }), Ce && /* @__PURE__ */ e.a.createElement(ut, {
            editorRef: p,
            name: "italic",
            icon: /* @__PURE__ */ e.a.createElement(At, null),
            title: "Italic",
            item: g
          }), Ye && /* @__PURE__ */ e.a.createElement(ut, {
            editorRef: p,
            name: "underline",
            icon: /* @__PURE__ */ e.a.createElement(te, null),
            title: "Underline",
            item: g
          }), at && /* @__PURE__ */ e.a.createElement(ut, {
            editorRef: p,
            name: "superscript",
            icon: /* @__PURE__ */ e.a.createElement(ee, null),
            title: "Superscript",
            item: g
          }), st && /* @__PURE__ */ e.a.createElement(ut, {
            editorRef: p,
            name: "subscript",
            icon: /* @__PURE__ */ e.a.createElement(Se, null),
            title: "Subscript",
            item: g
          }), ht && /* @__PURE__ */ e.a.createElement(Dl, {
            editorRef: p
          }), Dt && /* @__PURE__ */ e.a.createElement(ut, {
            editorRef: p,
            name: "justifyLeft",
            icon: /* @__PURE__ */ e.a.createElement(ge, null),
            title: "Align Left",
            item: g
          }), vt && /* @__PURE__ */ e.a.createElement(ut, {
            editorRef: p,
            name: "justifyCenter",
            icon: /* @__PURE__ */ e.a.createElement(xe, null),
            title: "Align Center",
            item: g
          }), Ft && /* @__PURE__ */ e.a.createElement(ut, {
            editorRef: p,
            name: "justifyRight",
            icon: /* @__PURE__ */ e.a.createElement(We, null),
            title: "Align Right",
            item: g
          }), qt && /* @__PURE__ */ e.a.createElement(ut, {
            editorRef: p,
            name: "justifyFull",
            icon: /* @__PURE__ */ e.a.createElement(Ne, null),
            title: "Align Justify",
            item: g
          }), tt && /* @__PURE__ */ e.a.createElement(ut, {
            editorRef: p,
            name: "indent",
            icon: /* @__PURE__ */ e.a.createElement(Ge, null),
            title: "Increase IndentIcon",
            item: g
          }), Qt && /* @__PURE__ */ e.a.createElement(ut, {
            editorRef: p,
            name: "outdent",
            icon: /* @__PURE__ */ e.a.createElement(ye, null),
            title: "Decrease IndentIcon",
            item: g
          }), ir && /* @__PURE__ */ e.a.createElement(ut, {
            editorRef: p,
            name: "insertOrderedList",
            icon: /* @__PURE__ */ e.a.createElement(be, null),
            title: "Insert/Remove Numbered List",
            item: g
          }), mt && /* @__PURE__ */ e.a.createElement(ut, {
            editorRef: p,
            name: "insertUnorderedList",
            icon: /* @__PURE__ */ e.a.createElement(pe, null),
            title: "Insert/Remove Bulleted List",
            item: g
          }), zt && /* @__PURE__ */ e.a.createElement(ut, {
            editorRef: p,
            name: "removeFormat",
            icon: /* @__PURE__ */ e.a.createElement(se, null),
            title: "Remove Format",
            item: g
          }), Ht && /* @__PURE__ */ e.a.createElement(_n, {
            type: "foreColor",
            title: "Text Color",
            item: g,
            editorRef: p
          }), Gt && /* @__PURE__ */ e.a.createElement(_n, {
            type: "hiliteColor",
            title: "Background Color",
            item: g,
            editorRef: p
          }), gr && /* @__PURE__ */ e.a.createElement(kn, {
            name: "ltr",
            title: "Left To Right",
            item: g,
            icon: /* @__PURE__ */ e.a.createElement(ce, null),
            editorRef: p
          }), Ea && /* @__PURE__ */ e.a.createElement(kn, {
            name: "rtl",
            title: "Right To Left",
            item: g,
            icon: /* @__PURE__ */ e.a.createElement(ae, null),
            editorRef: p
          }), Tc && /* @__PURE__ */ e.a.createElement("button", {
            onClick: ho,
            title: g != null && g.title ? g.title : "Select All",
            disabled: Fr && _ && !m
          }, g != null && g.icon ? g.icon : /* @__PURE__ */ e.a.createElement(S, null)), Fc && /* @__PURE__ */ e.a.createElement("button", {
            onClick: function(Pr) {
              return Sr(Pr, "image", g);
            },
            title: g != null && g.title ? g.title : "Upload Image"
          }, g != null && g.icon ? g.icon : /* @__PURE__ */ e.a.createElement(Pe, null)), Hc && /* @__PURE__ */ e.a.createElement("button", {
            onClick: function(Pr) {
              return Sr(Pr, "link", g);
            },
            title: g != null && g.title ? g.title : "Add Link"
          }, g != null && g.icon ? g.icon : /* @__PURE__ */ e.a.createElement(it, null)), Pc && /* @__PURE__ */ e.a.createElement("button", {
            onClick: function(Pr) {
              return Sr(Pr, "video", g);
            },
            title: g != null && g.title ? g.title : "Upload Video"
          }, g != null && g.icon ? g.icon : /* @__PURE__ */ e.a.createElement(we, null)), $a && /* @__PURE__ */ e.a.createElement(ut, {
            editorRef: p,
            name: "copy",
            icon: /* @__PURE__ */ e.a.createElement(Cn, null),
            title: "Copy",
            item: g,
            disabled: Fr && _ && !m
          }), jc && /* @__PURE__ */ e.a.createElement(ut, {
            editorRef: p,
            name: "cut",
            icon: /* @__PURE__ */ e.a.createElement(An, null),
            title: "Cut",
            item: g,
            disabled: Fr && _ && !m
          }), zc && /* @__PURE__ */ e.a.createElement("button", {
            onClick: _o,
            title: g != null && g.title ? g.title : "Paste"
          }, g != null && g.icon ? g.icon : /* @__PURE__ */ e.a.createElement(En, null)), Uc && /* @__PURE__ */ e.a.createElement("div", {
            className: c.a.increaseIconSize
          }, /* @__PURE__ */ e.a.createElement("button", {
            onClick: vo,
            title: (g == null ? void 0 : g.title) || "Source Code"
          }, /* @__PURE__ */ e.a.createElement(Ke, null))), Qc && /* @__PURE__ */ e.a.createElement("div", {
            className: c.a.increaseIconSize
          }, /* @__PURE__ */ e.a.createElement("button", {
            onClick: bo,
            title: O ? (g == null ? void 0 : g.title) || "Exit Full Screen" : (g == null ? void 0 : g.title) || "Full Screen"
          }, O ? /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement(U, null)) : /* @__PURE__ */ e.a.createElement(e.a.Fragment, null, /* @__PURE__ */ e.a.createElement(G, null)))), Gc && /* @__PURE__ */ e.a.createElement("div", {
            className: c.a.increaseIconSize
          }, /* @__PURE__ */ e.a.createElement("button", {
            onClick: fo,
            title: (g == null ? void 0 : g.title) || "Horizontal Line"
          }, /* @__PURE__ */ e.a.createElement(I, null))), Yc && /* @__PURE__ */ e.a.createElement("div", {
            className: c.a.increaseIconSize
          }, /* @__PURE__ */ e.a.createElement("button", {
            onClick: function(Pr) {
              return Sr(Pr, "special_char");
            },
            title: (g == null ? void 0 : g.title) || "Special Char"
          }, /* @__PURE__ */ e.a.createElement(T, null))));
        }))), /* @__PURE__ */ e.a.createElement("div", {
          className: "".concat(c.a.content__editable__container)
        }, /* @__PURE__ */ e.a.createElement("div", xa({}, Q, {
          className: "".concat(c.a.mlMainContentBox),
          autoFocus: O,
          contentEditable: !0,
          ref: p,
          onPaste: Mc,
          spellCheck: "true",
          onInput: wc,
          onBlur: Lc,
          "data-placeholder": _,
          onKeyDown: _c,
          style: Jn(Jn({}, J), Bc)
        })), /* @__PURE__ */ e.a.createElement(_l, {
          editorRef: p,
          setIsOpenModel: nr,
          setSelectedData: to,
          setSelectedEvent: Va,
          setImageUrl: rt,
          selectedEvent: Et,
          handleRemoveLink: Ec,
          selectedRange: pa
        }))), ue && /* @__PURE__ */ e.a.createElement(Bi, {
          viewSource: P,
          setViewSource: z,
          sourceCode: f,
          setSourceCode: x,
          handleSaveSource: po
        }), ur && /* @__PURE__ */ e.a.createElement(Ta, {
          isOpen: ur,
          onClose: ha,
          title: xo().title
        }, xo().component), P && /* @__PURE__ */ e.a.createElement(si, {
          viewSource: P,
          setViewSource: z,
          sourceCode: f,
          setSourceCode: x,
          handleSaveSource: po
        }), j && /* @__PURE__ */ e.a.createElement(di, {
          openPreview: j,
          setOpenPreview: Ze,
          previewContent: rc
        }), /* @__PURE__ */ e.a.createElement("div", {
          id: "modal-root"
        }), /* @__PURE__ */ e.a.createElement("div", {
          id: "full-screen-overlay"
        }));
      }
    }
    /******/
  ]);
})(ti);
var Ps = ti.exports;
const Us = /* @__PURE__ */ Yo(Ps), Qs = ({
  value: o = "",
  name: d = "",
  onChange: n,
  label: i = "",
  required: l = !1,
  placeholder: e = "",
  parentClass: v = "col-span-12",
  height: c = 300,
  disabled: S = !1,
  errorMessage: b = ""
}) => {
  const N = (L) => {
  };
  return /* @__PURE__ */ R(
    "div",
    {
      className: re($.field.wrapper, v),
      id: `field-${d}`,
      children: [
        i && /* @__PURE__ */ s(er, { label: i, required: l }),
        /* @__PURE__ */ s(
          Us,
          {
            value: o,
            onChange: (L) => n == null ? void 0 : n(L || ""),
            getEditorRef: N,
            placeholder: e,
            mainProps: {
              className: `${S ? "pointer-events-none opacity-70" : ""}`,
              style: { minHeight: `${c}px` }
            }
          }
        ),
        b && /* @__PURE__ */ s(
          "span",
          {
            className: re(
              $.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: b
          }
        )
      ]
    }
  );
}, Gs = ({
  name: o = "",
  label: d = "",
  options: n = [],
  value: i = null,
  onChange: l,
  disabled: e = !1,
  required: v = !1,
  parentClass: c = "col-span-12",
  className: S = "",
  errorMessage: b = "",
  multiSelect: N = !1
}) => {
  const L = Array.isArray(n) && n.length > 0, C = (H) => L ? N ? Array.isArray(i) && i.includes(H) : i === H : !!i, I = (H) => {
    l == null || l(H.target.checked, o);
  }, K = (H, ne) => {
    if (l)
      if (!N)
        l(ne ? H : "", o);
      else {
        const U = Array.isArray(i) ? [...i] : [];
        if (ne)
          U.includes(H) || U.push(H);
        else {
          const G = U.indexOf(H);
          G > -1 && U.splice(G, 1);
        }
        l(U, o);
      }
  };
  return Ve(() => {
    let H;
    L ? N ? H = Array.isArray(i) ? i : [] : H = i || "" : H = !!i, setTimeout(() => {
      l == null || l(H, o);
    }, 100);
  }, []), L ? /* @__PURE__ */ s($e, { children: /* @__PURE__ */ R("div", { className: re($.field.wrapper, c), children: [
    /* @__PURE__ */ s(er, { label: d, required: v }),
    /* @__PURE__ */ s("div", { className: "flex flex-col space-y-2", children: n.map((H, ne) => /* @__PURE__ */ R("div", { className: "flex items-center", children: [
      /* @__PURE__ */ s(
        "input",
        {
          type: "checkbox",
          name: o,
          id: `field-${o}`,
          value: H.value,
          checked: C(H.value),
          disabled: e || !!H.disabled,
          required: v && ne === 0,
          onChange: (U) => K(H.value, U.target.checked),
          className: re(
            $.field.input,
            "h-4 w-4 cursor-pointer text-primary-600 border-gray-300 rounded focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400",
            S
          )
        },
        o
      ),
      H.label && /* @__PURE__ */ s(
        "label",
        {
          htmlFor: o,
          className: "ml-2 text-sm text-gray-700 dark:text-gray-200 select-none",
          children: H.label
        }
      )
    ] }, H.value || H.label)) }),
    b && /* @__PURE__ */ s(
      "span",
      {
        className: re(
          $.field.error,
          "text-red-500 text-xs mt-1"
        ),
        children: b
      }
    )
  ] }) }) : /* @__PURE__ */ R(
    "div",
    {
      className: re(
        $.field.wrapper,
        "flex items-center",
        c
      ),
      children: [
        /* @__PURE__ */ s(
          "input",
          {
            type: "checkbox",
            name: o,
            checked: C(),
            disabled: e,
            required: v,
            onChange: I,
            className: re(
              $.field.input,
              "h-4 w-4 text-primary-600 cursor-pointer border-gray-300 rounded focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400",
              S
            )
          }
        ),
        d && /* @__PURE__ */ s(
          "label",
          {
            htmlFor: o,
            className: "ml-2 text-sm text-gray-700 dark:text-gray-200 select-none",
            children: d
          }
        )
      ]
    }
  );
}, Do = Yt, Ys = ({
  label: o = "",
  value: d = null,
  onChange: n,
  required: i = !1,
  accept: l = "audio/*",
  id: e,
  dragDrop: v = !1,
  name: c = "",
  parentClass: S = "",
  errorMessage: b = "",
  maxSize: N = 0
}) => {
  const { enqueueSnackbar: L } = oa(), [C, I] = le(
    null
  ), [K, H] = le(!1), ne = Ct(null), U = N * 1024 * 1024;
  Ve(() => {
    if (!d) {
      G(), I(null);
      return;
    }
    if (d instanceof File) {
      const te = URL.createObjectURL(d);
      return I({ file: d, preview: te }), () => {
        URL.revokeObjectURL(te);
      };
    } else typeof d == "string" ? I({ preview: d }) : d != null && d.preview && I(d);
  }, [d]);
  const G = () => {
    C != null && C.preview && C.preview.startsWith("blob:") && URL.revokeObjectURL(C.preview);
  }, T = (te) => {
    if (!te || te.length === 0)
      return;
    const se = te[0];
    if (U && se.size > U) {
      L(
        `Audio is too large. Maximum allowed size is ${N} MB`,
        { variant: "warning" }
      );
      return;
    }
    const ee = URL.createObjectURL(se);
    G(), I({ file: se, preview: ee }), n == null || n(se);
  }, V = (te) => {
    te && te.stopPropagation(), G(), I(null), n == null || n(null), ne.current && (ne.current.value = "");
  }, ce = (te) => {
    v && (te.preventDefault(), H(!0));
  }, ae = (te) => {
    v && (te.preventDefault(), H(!1));
  }, be = (te) => {
    var se, ee, Se, Ie;
    v && (te.preventDefault(), H(!1), (Ie = (Se = (ee = (se = te.dataTransfer) == null ? void 0 : se.files) == null ? void 0 : ee[0]) == null ? void 0 : Se.type) != null && Ie.includes("audio/") && T(te.dataTransfer.files));
  }, pe = () => {
    var te;
    (te = ne.current) == null || te.click();
  };
  return /* @__PURE__ */ R(
    "div",
    {
      className: re(
        $.mediaPicker.audio,
        $.field.wrapper,
        S || "col-span-12"
      ),
      children: [
        /* @__PURE__ */ s(er, { label: o, required: i }),
        /* @__PURE__ */ R(
          "div",
          {
            className: re(
              $.mediaPicker.dropzone,
              "relative rounded-lg p-2 transition-all",
              K ? "border-2 border-dashed border-primary-500 bg-primary-50 dark:bg-primary-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800",
              b ? "border-red-500" : ""
            ),
            onDragOver: ce,
            onDragLeave: ae,
            onDrop: be,
            id: `field-${c}`,
            children: [
              /* @__PURE__ */ s(
                "input",
                {
                  ref: ne,
                  id: e,
                  type: "file",
                  accept: l,
                  onChange: (te) => T(te.target.files),
                  required: i && !C,
                  className: "absolute opacity-0 right-[50%] top-[80%] -translate-y-1/2 pointer-events-none h-[10px]"
                }
              ),
              /* @__PURE__ */ s(
                "div",
                {
                  className: `flex items-center space-x-4 transition-all ${K ? "opacity-50" : ""}`,
                  children: C ? /* @__PURE__ */ R("div", { className: "flex items-center space-x-4", children: [
                    /* @__PURE__ */ R("div", { className: "relative w-full", children: [
                      !i && /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          onClick: V,
                          className: "absolute top-0 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800",
                          "aria-label": "Remove audio",
                          children: /* @__PURE__ */ s(Bt, { icon: "mdi:close", className: "w-3 h-3" })
                        }
                      ),
                      /* @__PURE__ */ s(
                        "audio",
                        {
                          src: C.preview,
                          controls: !0,
                          controlsList: "nodownload"
                        },
                        C.preview
                      )
                    ] }),
                    /* @__PURE__ */ s(Do, { type: "button", onClick: pe, children: /* @__PURE__ */ s("span", { children: "Change Audio File" }) })
                  ] }) : /* @__PURE__ */ R("div", { className: "flex items-center justify-center space-x-4", children: [
                    /* @__PURE__ */ s("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ s(Bt, { icon: "mdi:music", className: "text-gray-400 w-10 h-10" }) }),
                    /* @__PURE__ */ R("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ s(
                        Do,
                        {
                          type: "button",
                          onClick: pe,
                          variant: "outlined",
                          children: /* @__PURE__ */ s("span", { children: "Choose Audio File" })
                        }
                      ),
                      v && /* @__PURE__ */ s("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop your audio file here" })
                    ] })
                  ] })
                }
              ),
              v && K && !C && /* @__PURE__ */ s("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-primary-500/10 rounded-lg", children: /* @__PURE__ */ s("span", { className: "text-primary-600 dark:text-primary-400 font-semibold text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg", children: "Drop audio here" }) })
            ]
          }
        ),
        b && /* @__PURE__ */ s(
          "span",
          {
            className: re(
              $.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: b
          }
        )
      ]
    },
    c
  );
}, Bo = Yt, Ks = (o) => {
  if (!o)
    return null;
  if (o instanceof File) {
    const d = URL.createObjectURL(o);
    return {
      id: `${Date.now()}-${Math.random()}`,
      file: o,
      preview: d,
      createdBlobUrl: d
    };
  }
  if (typeof o == "string")
    return {
      id: `${Date.now()}-${Math.random()}`,
      file: null,
      preview: o
    };
  if (typeof o == "object") {
    if (o.preview)
      return {
        id: `${Date.now()}-${Math.random()}`,
        file: o.file || null,
        preview: o.preview
      };
    if (o.file) {
      const d = URL.createObjectURL(o.file);
      return {
        id: `${Date.now()}-${Math.random()}`,
        file: o.file,
        preview: d,
        createdBlobUrl: d
      };
    }
  }
  return null;
}, Vs = ({
  label: o = "",
  value: d = [],
  onChange: n,
  required: i = !1,
  accept: l = "image/*",
  aspect: e = "1",
  id: v,
  dragDrop: c = !1,
  cropImage: S = !1,
  name: b = "",
  parentClass: N = "",
  maxImages: L,
  errorMessage: C = ""
}) => {
  const [I, K] = le([]), [H, ne] = le(!1), [U, G] = le(!1), [T, V] = le(""), [ce, ae] = le("image/jpeg"), [be, pe] = le("cropped-image"), [te, se] = le(null), ee = Ct(null), Se = Ct(null), Ie = Ct(""), ft = Ct([]), it = Ct(!1);
  Ve(() => {
    ft.current = I;
  }, [I]), Ve(() => () => {
    ft.current.forEach((Ee) => {
      Ee.createdBlobUrl && URL.revokeObjectURL(Ee.createdBlobUrl);
    }), Ie.current && URL.revokeObjectURL(Ie.current);
  }, []), Ve(() => {
    if (!Array.isArray(d)) {
      K([]), it.current = !0;
      return;
    }
    if (it.current && d.length === 0)
      return;
    const Ee = d.map((Ue) => Ks(Ue)).filter(Boolean);
    K((Ue) => (Ue.forEach((et) => {
      et.createdBlobUrl && URL.revokeObjectURL(et.createdBlobUrl);
    }), Ee)), it.current = !0;
  }, [d]);
  const At = typeof L == "number" && L > 0 ? Math.max(L - I.length, 0) : Number.POSITIVE_INFINITY, ye = () => {
    G(!1), Ie.current && (URL.revokeObjectURL(Ie.current), Ie.current = ""), V(""), se(null), ee.current && (ee.current.value = "");
  }, Ge = (Ee) => {
    var Ue, et;
    V(Ee.preview), ae(((Ue = Ee.file) == null ? void 0 : Ue.type) || "image/jpeg"), pe(
      (((et = Ee.file) == null ? void 0 : et.name) || "cropped-image").replace(/\.[^/.]+$/, "")
    ), se(Ee.id), G(!0);
  }, Pe = (Ee) => {
    const Ue = URL.createObjectURL(Ee);
    K((et) => {
      const dt = et.map((Qe) => Qe.id !== te ? Qe : (Qe.createdBlobUrl && URL.revokeObjectURL(Qe.createdBlobUrl), {
        ...Qe,
        file: Ee,
        preview: Ue,
        createdBlobUrl: Ue
      }));
      return n == null || n(
        dt.map((Qe) => Qe.file ? Qe.file : Qe.preview)
      ), dt;
    }), ye();
  }, we = (Ee) => {
    if (!Ee || Ee.length === 0 || At === 0)
      return;
    const Ue = Array.from(Ee).filter((dt) => dt.type.includes("image/")).slice(0, At);
    if (Ue.length === 0)
      return;
    const et = Ue.map((dt) => {
      const Qe = URL.createObjectURL(dt);
      return {
        id: `${Date.now()}-${Math.random()}`,
        file: dt,
        preview: Qe,
        createdBlobUrl: Qe
      };
    });
    K((dt) => {
      const Qe = [...dt, ...et];
      return n == null || n(
        Qe.map((pt) => pt.file ? pt.file : pt.preview)
      ), Qe;
    }), ee.current && (ee.current.value = "");
  }, ve = (Ee) => {
    K((Ue) => {
      const et = Ue.find((Qe) => Qe.id === Ee);
      et != null && et.createdBlobUrl && URL.revokeObjectURL(et.createdBlobUrl);
      const dt = Ue.filter((Qe) => Qe.id !== Ee);
      return n == null || n(
        dt.map((Qe) => Qe.file ? Qe.file : Qe.preview)
      ), dt;
    }), ee.current && (ee.current.value = "");
  }, Ke = (Ee) => {
    var Ue;
    se(Ee), (Ue = Se.current) == null || Ue.click();
  }, We = (Ee) => {
    if (!Ee || Ee.length === 0 || !te)
      return;
    const Ue = Array.from(Ee).find((dt) => dt.type.includes("image/"));
    if (!Ue)
      return;
    const et = URL.createObjectURL(Ue);
    K((dt) => {
      const Qe = dt.map((pt) => pt.id !== te ? pt : (pt.createdBlobUrl && URL.revokeObjectURL(pt.createdBlobUrl), {
        ...pt,
        file: Ue,
        preview: et,
        createdBlobUrl: et
      }));
      return n == null || n(
        Qe.map((pt) => pt.file ? pt.file : pt.preview)
      ), Qe;
    }), se(null), Se.current && (Se.current.value = "");
  }, Ne = (Ee) => {
    c && (Ee.preventDefault(), ne(!0));
  }, xe = (Ee) => {
    c && (Ee.preventDefault(), ne(!1));
  }, ge = (Ee) => {
    var Ue;
    c && (Ee.preventDefault(), ne(!1), we(((Ue = Ee.dataTransfer) == null ? void 0 : Ue.files) || null));
  }, ze = () => {
    var Ee;
    (Ee = ee.current) == null || Ee.click();
  }, St = typeof L == "number" && L > 0 ? I.length < L : !0;
  return /* @__PURE__ */ R($e, { children: [
    /* @__PURE__ */ R(
      "div",
      {
        className: re(
          $.mediaPicker.multiImage,
          $.field.wrapper,
          N || "col-span-12"
        ),
        children: [
          /* @__PURE__ */ s(er, { label: o, required: i }),
          /* @__PURE__ */ R(
            "div",
            {
              className: re(
                $.mediaPicker.dropzone,
                "relative rounded-md p-2 transition-all",
                H ? "border-2 border-dashed border-primary-500 bg-primary-50 dark:bg-primary-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800",
                C ? "border-red-500" : ""
              ),
              onDragOver: Ne,
              onDragLeave: xe,
              onDrop: ge,
              id: `field-${b}`,
              children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    ref: ee,
                    id: v,
                    type: "file",
                    accept: l,
                    multiple: !0,
                    onChange: (Ee) => we(Ee.target.files),
                    required: i && I.length === 0,
                    className: "absolute opacity-0 pointer-events-none h-1 w-1"
                  }
                ),
                /* @__PURE__ */ s(
                  "input",
                  {
                    ref: Se,
                    type: "file",
                    accept: l,
                    onChange: (Ee) => We(Ee.target.files),
                    className: "absolute opacity-0 pointer-events-none h-1 w-1"
                  }
                ),
                I.length === 0 ? /* @__PURE__ */ R("div", { className: "flex items-center space-x-4", children: [
                  /* @__PURE__ */ s("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ s(
                    Bt,
                    {
                      icon: "ri:multi-image-fill",
                      className: "text-gray-400 w-10 h-10"
                    }
                  ) }),
                  /* @__PURE__ */ R("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ s(
                      Bo,
                      {
                        type: "button",
                        onClick: ze,
                        variant: "outlined",
                        color: "default",
                        children: /* @__PURE__ */ s("span", { className: "text-sm font-medium", children: "Choose Images" })
                      }
                    ),
                    c && /* @__PURE__ */ s("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop your images here" })
                  ] })
                ] }) : /* @__PURE__ */ R($e, { children: [
                  /* @__PURE__ */ R("div", { className: "flex items-center justify-between gap-2 mb-3", children: [
                    /* @__PURE__ */ s(
                      Bo,
                      {
                        type: "button",
                        onClick: ze,
                        disabled: !St,
                        variant: "outlined",
                        color: "default",
                        children: /* @__PURE__ */ s("span", { className: "text-sm font-medium", children: "Upload Images" })
                      }
                    ),
                    /* @__PURE__ */ s("span", { className: "text-xs text-gray-500 dark:text-gray-400", children: L ? `${I.length}/${L}` : `${I.length} selected` })
                  ] }),
                  /* @__PURE__ */ s("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3", children: I.map((Ee) => /* @__PURE__ */ R(
                    "div",
                    {
                      className: "relative group rounded-md overflow-hidden border border-gray-200 dark:border-gray-700",
                      children: [
                        /* @__PURE__ */ s(
                          "img",
                          {
                            src: Ee.preview,
                            alt: "preview",
                            className: "w-full h-28 object-cover"
                          }
                        ),
                        /* @__PURE__ */ R("div", { className: "absolute top-2 right-2 flex items-center gap-1.5 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity", children: [
                          /* @__PURE__ */ s(
                            "button",
                            {
                              type: "button",
                              onClick: () => Ke(Ee.id),
                              className: "w-7 h-7 rounded-full bg-white/90 text-gray-800 hover:bg-white flex items-center justify-center shadow",
                              "aria-label": "Replace image",
                              children: /* @__PURE__ */ s(Bt, { icon: "solar:refresh-bold", className: "w-4 h-4" })
                            }
                          ),
                          S && /* @__PURE__ */ s(
                            "button",
                            {
                              type: "button",
                              onClick: () => Ge(Ee),
                              className: "w-7 h-7 rounded-full bg-white/90 text-gray-800 hover:bg-white flex items-center justify-center shadow",
                              "aria-label": "Crop image",
                              children: /* @__PURE__ */ s(Bt, { icon: "solar:crop-bold", className: "w-4 h-4" })
                            }
                          ),
                          /* @__PURE__ */ s(
                            "button",
                            {
                              type: "button",
                              onClick: () => ve(Ee.id),
                              className: "w-7 h-7 rounded-full bg-red-500/95 text-white hover:bg-red-600 flex items-center justify-center shadow",
                              "aria-label": "Delete image",
                              children: /* @__PURE__ */ s(
                                Bt,
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
                    Ee.id
                  )) })
                ] }),
                c && H && I.length === 0 && /* @__PURE__ */ s("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-primary-500/10 rounded-lg", children: /* @__PURE__ */ s("span", { className: "text-primary-600 dark:text-primary-400 font-semibold text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg", children: "Drop images here" }) })
              ]
            }
          ),
          C && /* @__PURE__ */ s(
            "span",
            {
              className: re(
                $.field.error,
                "text-red-500 text-xs mt-1"
              ),
              children: C
            }
          )
        ]
      },
      b
    ),
    /* @__PURE__ */ s(
      gn,
      {
        isOpen: U,
        imageSrc: T,
        fileType: ce,
        fileName: be,
        onClose: ye,
        onApply: Pe,
        aspect: Number(e)
      }
    )
  ] });
}, pr = ({
  src: o,
  alt: d = "preview",
  isOpen: n,
  setIsOpen: i
}) => {
  const l = () => i(!1);
  return Ve(() => {
    const e = (v) => {
      v.key === "Escape" && l();
    };
    return n && (document.body.style.overflow = "hidden", document.addEventListener("keydown", e)), () => {
      document.body.style.overflow = "", document.removeEventListener("keydown", e);
    };
  }, [n]), /* @__PURE__ */ s($e, { children: /* @__PURE__ */ R(
    "div",
    {
      className: re(
        $.imagePreview.root,
        "fixed inset-0 z-50 flex items-center justify-center bg-black/70 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      ),
      onClick: l,
      children: [
        /* @__PURE__ */ s(
          "button",
          {
            onClick: l,
            className: `absolute top-4 right-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200\r
                     hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-2 shadow-lg transition`,
            children: /* @__PURE__ */ s(ja, { size: 20 })
          }
        ),
        /* @__PURE__ */ s(
          "div",
          {
            className: re(
              $.imagePreview.container,
              "max-w-5xl w-full px-4 transform transition-all duration-200 scale-95 animate-in zoom-in-95"
            ),
            onClick: (e) => e.stopPropagation(),
            children: /* @__PURE__ */ s(
              "img",
              {
                src: o,
                alt: d,
                className: re(
                  $.imagePreview.image,
                  "w-full max-h-[90vh] object-contain rounded-xl"
                )
              }
            )
          }
        )
      ]
    }
  ) });
}, ri = ({
  col: o,
  data: d,
  uiVariant: n = "default",
  styleConfig: i = {}
}) => {
  const l = d[o.titleKey], e = d[o.subtitleKey], v = d[o.imageKey], c = o.fallback_icon, [S, b] = le(null), [N, L] = le(!1), C = (K) => {
    let H = K;
    K && K.src instanceof File && (H = { ...K, src: URL.createObjectURL(K.src) }), b(H), L(!0);
  }, I = (K) => {
    const ne = {
      sm: { img: "w-8 h-8", wrap: "w-8 h-8", icon: "w-4 h-4" },
      md: { img: "w-12 h-12", wrap: "w-12 h-12", icon: "w-6 h-6" },
      lg: { img: "w-16 h-16", wrap: "w-16 h-16", icon: "w-8 h-8" }
    }[K];
    return v ? /* @__PURE__ */ s(
      "img",
      {
        src: v instanceof File ? URL.createObjectURL(v) : v,
        alt: l,
        onClick: () => C({ src: v, alt: l }),
        className: `${ne.img} cursor-pointer rounded-full object-cover border-2 border-white dark:border-gray-700 shadow flex-shrink-0`
      }
    ) : c ? c instanceof Function ? c(d) : c : /* @__PURE__ */ s(
      "div",
      {
        className: `${ne.wrap} flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-600 flex-shrink-0`,
        children: /* @__PURE__ */ s(hn, { className: `${ne.icon} text-gray-400` })
      }
    );
  };
  return n === "card" ? /* @__PURE__ */ R($e, { children: [
    N && S && /* @__PURE__ */ s(
      pr,
      {
        src: S.src,
        alt: S.alt,
        isOpen: N,
        setIsOpen: L
      }
    ),
    /* @__PURE__ */ R(
      "div",
      {
        className: re(
          $.details.row,
          "col-span-12 relative overflow-hidden rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent dark:from-primary/20 dark:via-primary/10 border border-primary/20 dark:border-primary/30 p-5 flex items-center gap-4",
          i.rowClass || "",
          i.groupClass || "",
          o.blockClass || ""
        ),
        children: [
          /* @__PURE__ */ s("div", { className: "pointer-events-none absolute -right-6 -top-6 w-32 h-32 rounded-full bg-primary/8 dark:bg-primary/12" }),
          /* @__PURE__ */ s("div", { className: "pointer-events-none absolute -right-2 -bottom-4 w-20 h-20 rounded-full bg-primary/5" }),
          I("lg"),
          /* @__PURE__ */ R("div", { className: "min-w-0 z-10", children: [
            /* @__PURE__ */ s(
              "h3",
              {
                className: `text-lg font-bold text-gray-900 dark:text-white truncate ${i.valueClass || ""}`,
                children: l
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
  ] }) : n === "split" ? /* @__PURE__ */ R($e, { children: [
    N && S && /* @__PURE__ */ s(
      pr,
      {
        src: S.src,
        alt: S.alt,
        isOpen: N,
        setIsOpen: L
      }
    ),
    /* @__PURE__ */ R(
      "div",
      {
        className: re(
          $.details.row,
          "flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-primary/8 via-primary/4 to-transparent dark:from-primary/15 dark:via-primary/8",
          i.rowClass || "",
          i.groupClass || "",
          o.blockClass || ""
        ),
        children: [
          I("md"),
          /* @__PURE__ */ R("div", { className: "min-w-0", children: [
            /* @__PURE__ */ s(
              "h3",
              {
                className: `text-base font-bold text-gray-900 dark:text-white truncate ${i.valueClass || ""}`,
                children: l
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
  ] }) : /* @__PURE__ */ R($e, { children: [
    N && S && /* @__PURE__ */ s(
      pr,
      {
        src: S.src,
        alt: S.alt,
        isOpen: N,
        setIsOpen: L
      }
    ),
    /* @__PURE__ */ R(
      "div",
      {
        className: re(
          $.details.row,
          "col-span-12 flex items-center space-x-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-900",
          i.rowClass || "",
          i.groupClass || "",
          o.blockClass || ""
        ),
        children: [
          I("lg"),
          /* @__PURE__ */ R("div", { children: [
            /* @__PURE__ */ s(
              "h3",
              {
                className: `text-xl font-semibold text-gray-900 dark:text-white ${i.valueClass || ""}`,
                children: l
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
}, ai = ({
  col: o,
  data: d,
  uiVariant: n = "default",
  styleConfig: i = {}
}) => {
  const l = d[o.titleKey], e = d[o.subtitleKey], v = d[o.imageKey], c = o.label, S = o == null ? void 0 : o.icon, b = o.fallback_icon, [N, L] = le(null), [C, I] = le(!1), K = (ne) => {
    let U = ne;
    ne && ne.src instanceof File && (U = { ...ne, src: URL.createObjectURL(ne.src) }), L(U), I(!0);
  }, H = () => v ? /* @__PURE__ */ s(
    "img",
    {
      src: v instanceof File ? URL.createObjectURL(v) : v,
      alt: l,
      onClick: () => K({ src: v, alt: l }),
      className: "w-8 h-8 cursor-pointer rounded-full object-cover border-2 border-gray-200 dark:border-gray-700 flex-shrink-0"
    }
  ) : b ? b instanceof Function ? b(d) : b : /* @__PURE__ */ s("div", { className: "w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 flex-shrink-0", children: /* @__PURE__ */ s(hn, { className: "w-5 h-5 text-gray-400" }) });
  return n === "card" ? /* @__PURE__ */ R($e, { children: [
    C && N && /* @__PURE__ */ s(
      pr,
      {
        src: N.src,
        alt: N.alt,
        isOpen: C,
        setIsOpen: I
      }
    ),
    /* @__PURE__ */ R(
      "div",
      {
        className: re(
          $.details.row,
          o.blockClass || "col-span-6",
          "group bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 p-4 flex flex-col gap-2.5",
          i.rowClass || "",
          i.cardGroupClass || ""
        ),
        children: [
          S && /* @__PURE__ */ s(
            "div",
            {
              className: `w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 [&>svg]:w-4 [&>svg]:h-4 ${i.iconClass || ""}`,
              children: S
            }
          ),
          /* @__PURE__ */ s(
            "p",
            {
              className: `text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 leading-none ${i.labelClass || ""}`,
              children: c
            }
          ),
          /* @__PURE__ */ R("div", { className: "flex items-center gap-2 mt-auto", children: [
            H(),
            /* @__PURE__ */ R("div", { className: "min-w-0", children: [
              /* @__PURE__ */ s(
                "p",
                {
                  className: `text-sm font-semibold text-gray-800 dark:text-gray-100 truncate ${i.valueClass || ""}`,
                  children: l
                }
              ),
              e && /* @__PURE__ */ s("p", { className: "text-xs text-gray-400 dark:text-gray-500 truncate", children: e })
            ] })
          ] })
        ]
      }
    )
  ] }) : n === "split" ? /* @__PURE__ */ R($e, { children: [
    C && N && /* @__PURE__ */ s(
      pr,
      {
        src: N.src,
        alt: N.alt,
        isOpen: C,
        setIsOpen: I
      }
    ),
    /* @__PURE__ */ R(
      "div",
      {
        className: re(
          $.details.row,
          "flex items-stretch min-h-[52px]",
          i.rowClass || "",
          i.cardGroupClass || "",
          o.blockClass || ""
        ),
        children: [
          /* @__PURE__ */ R("div", { className: "w-[42%] flex-shrink-0 flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-gray-800/80 border-r border-gray-200 dark:border-gray-700", children: [
            S && /* @__PURE__ */ s(
              "span",
              {
                className: `text-primary/60 dark:text-primary/50 flex-shrink-0 [&>svg]:w-3.5 [&>svg]:h-3.5 ${i.iconClass || ""}`,
                children: S
              }
            ),
            /* @__PURE__ */ s(
              "p",
              {
                className: `text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 leading-tight ${i.labelClass || ""}`,
                children: c
              }
            )
          ] }),
          /* @__PURE__ */ R("div", { className: "flex-1 flex items-center gap-2.5 px-4 py-3 bg-white dark:bg-gray-900", children: [
            H(),
            /* @__PURE__ */ R("div", { className: "min-w-0", children: [
              /* @__PURE__ */ s(
                "p",
                {
                  className: `text-sm text-gray-800 dark:text-gray-100 break-words ${i.valueClass || ""}`,
                  children: l
                }
              ),
              e && /* @__PURE__ */ s("p", { className: "text-xs text-gray-400 dark:text-gray-500 truncate", children: e })
            ] })
          ] })
        ]
      }
    )
  ] }) : /* @__PURE__ */ R($e, { children: [
    C && N && /* @__PURE__ */ s(
      pr,
      {
        src: N.src,
        alt: N.alt,
        isOpen: C,
        setIsOpen: I
      }
    ),
    /* @__PURE__ */ R(
      "div",
      {
        className: re(
          $.details.row,
          "col-span-12 flex items-center space-x-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-900",
          i.rowClass || "",
          i.cardGroupClass || "",
          o.blockClass || ""
        ),
        children: [
          S && /* @__PURE__ */ s("div", { className: `flex-shrink-0 ${i.iconClass || ""}`, children: S }),
          /* @__PURE__ */ R("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ s(
              "p",
              {
                className: `text-sm font-medium text-gray-500 dark:text-gray-400 ${i.labelClass || ""}`,
                children: c
              }
            ),
            /* @__PURE__ */ R("div", { className: "flex items-center mt-1", children: [
              H(),
              /* @__PURE__ */ R("div", { className: "ml-2", children: [
                /* @__PURE__ */ s(
                  "p",
                  {
                    className: `mb-0 text-sm text-gray-900 dark:text-white break-words ${i.valueClass || ""}`,
                    children: l
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
}, jo = {
  blue: {
    bg: "bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300",
    border: "border border-primary-300 text-primary-700 dark:border-primary-700 dark:text-primary-300"
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
}, zo = {
  contained: "bg",
  outline: "border !bg-transparent",
  soft: "bg opacity-90"
}, ni = ({
  label: o,
  variant: d = "contained",
  color: n = "green",
  className: i = ""
}) => {
  const l = jo[n] || jo.green, e = zo[d] || zo.contained, v = d === "outline" ? l.border : l.bg;
  return /* @__PURE__ */ s(
    "span",
    {
      className: re(
        $.chip.root,
        "inline-flex justify-center items-center rounded-sm text-xs font-semibold px-3 py-1 min-w-[78px]",
        v,
        e,
        i
      ),
      children: o
    }
  );
}, oi = ({
  col: o,
  data: d,
  uiVariant: n = "default",
  styleConfig: i = {}
}) => {
  var G;
  const [l, e] = le(null), [v, c] = le(!1), S = o == null ? void 0 : o.icon, b = o.label;
  let N = d[o.key];
  const L = o.type, C = o.variant || "outline";
  let I = o.defaultColor;
  if (L === "chip" && ((G = o.chipOptions) == null ? void 0 : G.length) > 0) {
    const T = o == null ? void 0 : o.chipOptions.find((V) => V.value == N);
    T && (N = T.label, I = T.color);
  }
  const K = (T) => {
    if (!T) return "";
    if (typeof T == "string") return T;
    if (T instanceof File) return URL.createObjectURL(T);
    if (typeof T == "object") {
      if (typeof T.preview == "string") return T.preview;
      if (typeof T.src == "string") return T.src;
      if (T.src instanceof File) return URL.createObjectURL(T.src);
      if (T.file instanceof File) return URL.createObjectURL(T.file);
    }
    return "";
  }, H = (T) => T == null ? "N/A" : typeof T == "string" ? T || "N/A" : typeof T == "number" || typeof T == "boolean" ? String(T) : T instanceof File ? T.name || "File" : Array.isArray(T) ? T.length === 0 ? "N/A" : T.map((V) => typeof V == "string" ? V : V instanceof File ? V.name : V && typeof V == "object" ? V.name || V.label || "File" : String(V)).join(", ") : typeof T == "object" && (T.name || T.label || T.preview) || "N/A", ne = (T, V) => {
    e({ src: T, alt: V }), c(!0);
  }, U = (T = "text-sm text-gray-900 dark:text-white break-words") => {
    if (typeof o.render == "function") {
      const V = o.render(d, N);
      return /* @__PURE__ */ s("div", { className: i.valueClass || "", children: V });
    }
    if (L === "chip")
      return /* @__PURE__ */ s(ni, { label: N, variant: C, color: I, className: "mt-1" });
    if (L === "tinyEditor")
      return /* @__PURE__ */ s(
        "p",
        {
          className: `${T} ${i.valueClass || ""}`,
          dangerouslySetInnerHTML: { __html: N }
        }
      );
    if (L === "video")
      return N ? /* @__PURE__ */ s(
        "video",
        {
          controls: !0,
          src: N instanceof File ? URL.createObjectURL(N) : N,
          onClick: (V) => V.stopPropagation(),
          className: "shadow-sm mt-1 w-full max-w-xs max-h-[250px] rounded-md"
        },
        N instanceof File ? URL.createObjectURL(N) : N
      ) : /* @__PURE__ */ s("p", { className: "text-sm text-gray-400", children: "N/A" });
    if (L === "audio")
      return N ? /* @__PURE__ */ s(
        "audio",
        {
          controls: !0,
          src: N instanceof File ? URL.createObjectURL(N) : N,
          onClick: (V) => V.stopPropagation(),
          className: "shadow-sm rounded-full mt-1 w-full max-w-xs"
        },
        N instanceof File ? URL.createObjectURL(N) : N
      ) : /* @__PURE__ */ s("p", { className: "text-sm text-gray-400", children: "N/A" });
    if (L === "image") {
      const V = K(N);
      return V ? /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          onClick: () => ne(V, b || "Image"),
          className: "mt-1 w-16 h-16 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700",
          children: /* @__PURE__ */ s(
            "img",
            {
              src: V,
              alt: b || "image",
              className: "w-full h-full object-cover"
            }
          )
        }
      ) : /* @__PURE__ */ s("p", { className: "text-sm text-gray-400", children: "N/A" });
    }
    if (L === "multiImage")
      return Array.isArray(N) && N.length > 0 ? /* @__PURE__ */ s(
        "div",
        {
          className: `mt-1 grid grid-cols-3 sm:grid-cols-4 gap-2 ${i.mediaGridClass || ""}`,
          children: N.map((V, ce) => {
            const ae = K(V);
            return ae ? /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                onClick: () => ne(ae, `Gallery ${ce + 1}`),
                className: "w-full h-16 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-colors",
                children: /* @__PURE__ */ s(
                  "img",
                  {
                    src: ae,
                    alt: `gallery-${ce + 1}`,
                    className: "w-full h-full object-cover"
                  }
                )
              },
              `${ae}-${ce}`
            ) : null;
          })
        }
      ) : /* @__PURE__ */ s("p", { className: "text-sm text-gray-400", children: "N/A" });
    if (L === "file") {
      const V = Array.isArray(N) ? N : N ? [N] : [];
      if (V.length === 0)
        return /* @__PURE__ */ s("p", { className: "text-sm text-gray-400", children: "N/A" });
      const ce = (ee) => {
        var Se;
        if (ee instanceof File) return ee.type || "";
        if (typeof ee == "string") {
          const Ie = ((Se = ee.split(".").pop()) == null ? void 0 : Se.toLowerCase()) || "";
          if (["jpg", "jpeg", "png", "gif", "webp", "svg", "bmp"].includes(Ie))
            return "image/";
          if (Ie === "pdf") return "application/pdf";
          if (["doc", "docx"].includes(Ie)) return "application/word";
          if (["xls", "xlsx"].includes(Ie)) return "application/excel";
          if (["mp4", "mov", "avi", "webm"].includes(Ie)) return "video/";
          if (["mp3", "wav", "ogg", "m4a"].includes(Ie)) return "audio/";
        }
        return (ee == null ? void 0 : ee.type) || "";
      }, ae = (ee) => ee instanceof File ? URL.createObjectURL(ee) : typeof ee == "string" ? ee : (ee == null ? void 0 : ee.preview) || (ee == null ? void 0 : ee.url) || "", be = (ee, Se) => ee instanceof File ? ee.name : typeof ee == "string" ? ee.split("/").pop() || ee : (ee == null ? void 0 : ee.name) || `File ${Se + 1}`, pe = ({ mime: ee }) => ee.startsWith("application/pdf") ? /* @__PURE__ */ s(
        "svg",
        {
          viewBox: "0 0 24 24",
          className: "w-5 h-5 text-red-500 flex-shrink-0",
          fill: "currentColor",
          children: /* @__PURE__ */ s("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM8.5 17.5h-1v-5h1.8c1.1 0 1.7.6 1.7 1.6 0 1-.6 1.6-1.7 1.6H8.5v1.8zm0-2.8h.7c.5 0 .8-.3.8-.8s-.3-.8-.8-.8H8.5v1.6zm4.5 2.8h-1.5v-5H13c1.4 0 2.2.9 2.2 2.5s-.8 2.5-2.2 2.5zm-.5-4v3h.4c.8 0 1.3-.5 1.3-1.5S13.2 13.5 12.4 13.5H12zm4.5 4h-1v-5h2.8v1h-1.8v1.1h1.6v1h-1.6v1.9z" })
        }
      ) : ee.startsWith("application/word") || ee.includes("doc") ? /* @__PURE__ */ s(
        "svg",
        {
          viewBox: "0 0 24 24",
          className: "w-5 h-5 text-blue-500 flex-shrink-0",
          fill: "currentColor",
          children: /* @__PURE__ */ s("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM7 17l1.5-5h1l1 3.5 1-3.5h1L14 17h-1l-1-3.3-1 3.3H7z" })
        }
      ) : ee.startsWith("video/") ? /* @__PURE__ */ s(
        "svg",
        {
          viewBox: "0 0 24 24",
          className: "w-5 h-5 text-purple-500 flex-shrink-0",
          fill: "currentColor",
          children: /* @__PURE__ */ s("path", { d: "M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z" })
        }
      ) : ee.startsWith("audio/") ? /* @__PURE__ */ s(
        "svg",
        {
          viewBox: "0 0 24 24",
          className: "w-5 h-5 text-green-500 flex-shrink-0",
          fill: "currentColor",
          children: /* @__PURE__ */ s("path", { d: "M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" })
        }
      ) : /* @__PURE__ */ s(
        "svg",
        {
          viewBox: "0 0 24 24",
          className: "w-5 h-5 text-gray-400 flex-shrink-0",
          fill: "currentColor",
          children: /* @__PURE__ */ s("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5z" })
        }
      ), te = V.filter(
        (ee) => ce(ee).startsWith("image/")
      ), se = V.filter(
        (ee) => !ce(ee).startsWith("image/")
      );
      return /* @__PURE__ */ R("div", { className: "mt-1 space-y-3", children: [
        te.length > 0 && /* @__PURE__ */ s(
          "div",
          {
            className: `grid grid-cols-3 sm:grid-cols-4 gap-2 ${i.mediaGridClass || ""}`,
            children: te.map((ee, Se) => {
              const Ie = ae(ee), ft = be(ee, Se);
              return Ie ? /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  onClick: () => ne(Ie, ft),
                  className: "w-full h-16 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-colors",
                  children: /* @__PURE__ */ s(
                    "img",
                    {
                      src: Ie,
                      alt: ft,
                      className: "w-full h-full object-cover"
                    }
                  )
                },
                `img-${Se}`
              ) : null;
            })
          }
        ),
        se.length > 0 && /* @__PURE__ */ s("div", { className: "flex flex-col gap-1.5", children: se.map((ee, Se) => {
          const Ie = ce(ee), ft = ae(ee), it = be(ee, Se);
          return /* @__PURE__ */ R(
            "a",
            {
              href: ft || void 0,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors max-w-xs group",
              children: [
                /* @__PURE__ */ s(pe, { mime: Ie }),
                /* @__PURE__ */ s("span", { className: "text-sm text-gray-700 dark:text-gray-300 truncate group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors", children: it })
              ]
            },
            `file-${Se}`
          );
        }) })
      ] });
    }
    return /* @__PURE__ */ s("p", { className: `${T} ${i.valueClass || ""}`, children: L === "date" ? /* @__PURE__ */ s("span", { children: en(N, o.format || "DD MMM YYYY") }) : /* @__PURE__ */ s("span", { children: H(N) }) });
  };
  return n === "card" ? /* @__PURE__ */ R($e, { children: [
    /* @__PURE__ */ R(
      "div",
      {
        className: re(
          $.details.row,
          o.blockClass || "col-span-6",
          "group bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 p-4 flex flex-col gap-2.5",
          i.rowClass || ""
        ),
        children: [
          S && /* @__PURE__ */ s(
            "div",
            {
              className: `w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 [&>svg]:w-4 [&>svg]:h-4 ${i.iconClass || ""}`,
              children: S
            }
          ),
          /* @__PURE__ */ s(
            "p",
            {
              className: `text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 leading-none ${i.labelClass || ""}`,
              children: b
            }
          ),
          /* @__PURE__ */ s("div", { className: "mt-auto", children: U(
            "text-sm font-semibold text-gray-800 dark:text-gray-100 break-words leading-snug"
          ) })
        ]
      }
    ),
    v && l && /* @__PURE__ */ s(
      pr,
      {
        src: l.src,
        alt: l.alt,
        isOpen: v,
        setIsOpen: c
      }
    )
  ] }) : n === "split" ? /* @__PURE__ */ R($e, { children: [
    /* @__PURE__ */ R(
      "div",
      {
        className: re(
          $.details.row,
          "flex items-stretch min-h-[52px]",
          i.rowClass || "",
          o.blockClass || ""
        ),
        children: [
          /* @__PURE__ */ R("div", { className: "w-[42%] flex-shrink-0 flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-gray-800/80 border-r border-gray-200 dark:border-gray-700", children: [
            S && /* @__PURE__ */ s(
              "span",
              {
                className: `text-primary/60 dark:text-primary/50 flex-shrink-0 [&>svg]:w-3.5 [&>svg]:h-3.5 ${i.iconClass || ""}`,
                children: S
              }
            ),
            /* @__PURE__ */ s(
              "p",
              {
                className: `text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 leading-tight ${i.labelClass || ""}`,
                children: b
              }
            )
          ] }),
          /* @__PURE__ */ s("div", { className: "flex-1 flex items-center px-4 py-3 bg-white dark:bg-gray-900", children: U(
            "text-sm text-gray-800 dark:text-gray-100 break-words"
          ) })
        ]
      }
    ),
    v && l && /* @__PURE__ */ s(
      pr,
      {
        src: l.src,
        alt: l.alt,
        isOpen: v,
        setIsOpen: c
      }
    )
  ] }) : /* @__PURE__ */ R($e, { children: [
    /* @__PURE__ */ R(
      "div",
      {
        className: re(
          $.details.row,
          "col-span-12 flex items-center space-x-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-900",
          i.rowClass || "",
          o.blockClass || ""
        ),
        children: [
          S && /* @__PURE__ */ s("div", { className: `flex-shrink-0 ${i.iconClass || ""}`, children: S }),
          /* @__PURE__ */ R("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ s(
              "p",
              {
                className: `text-sm font-medium text-gray-500 dark:text-gray-400 ${i.labelClass || ""}`,
                children: b
              }
            ),
            U(
              "mt-1 text-sm text-gray-900 dark:text-white break-words"
            )
          ] })
        ]
      }
    ),
    v && l && /* @__PURE__ */ s(
      pr,
      {
        src: l.src,
        alt: l.alt,
        isOpen: v,
        setIsOpen: c
      }
    )
  ] });
}, Ws = ({
  value: o = !0,
  onChange: d,
  text: n,
  options: i = [],
  label: l,
  required: e,
  name: v = "",
  disabled: c = !1,
  parentClass: S = "",
  errorMessage: b = ""
}) => {
  const N = i.length > 0 ? i : [
    { label: "Active", value: !0 },
    { label: "Inactive", value: !1 }
  ];
  return /* @__PURE__ */ s($e, { children: /* @__PURE__ */ R(
    "div",
    {
      className: re(
        $.field.wrapper,
        S || "col-span-12"
      ),
      children: [
        /* @__PURE__ */ s(er, { label: l, required: e }),
        /* @__PURE__ */ R(
          "div",
          {
            className: `flex items-center justify-between h-10 gap-4 bg-gray-100 dark:bg-gray-700 px-3 rounded-md border border-gray-100 dark:border-gray-600
          ${b ? "border-red-500" : ""}`,
            children: [
              n && /* @__PURE__ */ s("p", { className: "text-xs text-gray-600 dark:text-gray-400 flex-shrink overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px]", children: n }),
              /* @__PURE__ */ s("div", { className: "flex items-center gap-6", children: N.map((L, C) => /* @__PURE__ */ R(
                "label",
                {
                  className: "flex items-center gap-2 cursor-pointer select-none",
                  children: [
                    /* @__PURE__ */ s(
                      "input",
                      {
                        type: "radio",
                        name: "switch-field",
                        required: e && C === 0,
                        value: String(L.value),
                        disabled: c,
                        id: `field-${v}`,
                        checked: o === L.value,
                        onChange: () => d == null ? void 0 : d(L.value),
                        className: re(
                          $.field.input,
                          "w-4 h-4 border-gray-300 cursor-pointer"
                        )
                      }
                    ),
                    /* @__PURE__ */ s("span", { className: "text-sm text-gray-700 dark:text-white", children: L.label })
                  ]
                },
                C
              )) })
            ]
          }
        ),
        b && /* @__PURE__ */ s(
          "span",
          {
            className: re(
              $.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: b
          }
        )
      ]
    },
    v
  ) });
}, To = Yt, qs = ({
  label: o = "",
  value: d = null,
  onChange: n,
  required: i = !1,
  accept: l = "video/*",
  id: e,
  dragDrop: v = !1,
  name: c = "",
  parentClass: S = "",
  maxSize: b = 0,
  errorMessage: N = ""
}) => {
  const { enqueueSnackbar: L } = oa(), [C, I] = le(
    null
  ), [K, H] = le(!1), ne = Ct(null), U = b * 1024 * 1024;
  Ve(() => {
    if (!d) {
      G(), I(null);
      return;
    }
    if (d instanceof File) {
      const te = URL.createObjectURL(d);
      return I({ file: d, preview: te }), () => {
        URL.revokeObjectURL(te);
      };
    } else typeof d == "string" ? I({ preview: d }) : d != null && d.preview && I(d);
  }, [d]);
  const G = () => {
    C != null && C.preview && C.preview.startsWith("blob:") && URL.revokeObjectURL(C.preview);
  }, T = (te) => {
    if (!te || te.length === 0) return;
    const se = te[0];
    if (U && se.size > U) {
      L(
        `File is too large. Maximum allowed size is ${b} MB`,
        {
          variant: "warning"
        }
      );
      return;
    }
    const ee = URL.createObjectURL(se);
    G(), I({ file: se, preview: ee }), n == null || n(se);
  }, V = (te) => {
    te && te.stopPropagation(), G(), I(null), n == null || n(null), ne.current && (ne.current.value = "");
  }, ce = (te) => {
    v && (te.preventDefault(), H(!0));
  }, ae = (te) => {
    v && (te.preventDefault(), H(!1));
  }, be = (te) => {
    var se, ee, Se, Ie;
    v && (te.preventDefault(), H(!1), (Ie = (Se = (ee = (se = te.dataTransfer) == null ? void 0 : se.files) == null ? void 0 : ee[0]) == null ? void 0 : Se.type) != null && Ie.includes("video/") && T(te.dataTransfer.files));
  }, pe = () => {
    var te;
    (te = ne.current) == null || te.click();
  };
  return /* @__PURE__ */ R(
    "div",
    {
      className: re(
        $.mediaPicker.video,
        $.field.wrapper,
        S || "col-span-12"
      ),
      children: [
        /* @__PURE__ */ s(er, { label: o, required: i }),
        /* @__PURE__ */ R(
          "div",
          {
            className: re(
              $.mediaPicker.dropzone,
              "relative rounded-lg p-2 transition-all",
              K ? "border-2 border-dashed border-primary-500 bg-primary-50 dark:bg-primary-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800",
              N ? "border-red-500" : ""
            ),
            onDragOver: ce,
            onDragLeave: ae,
            onDrop: be,
            id: `field-${c}`,
            children: [
              /* @__PURE__ */ s(
                "input",
                {
                  ref: ne,
                  id: e,
                  type: "file",
                  accept: l,
                  onChange: (te) => T(te.target.files),
                  required: i && !C,
                  className: "absolute opacity-0 pointer-events-none h-[10px]"
                }
              ),
              /* @__PURE__ */ s(
                "div",
                {
                  className: `flex items-center space-x-4 transition-all ${K ? "opacity-50" : ""}`,
                  children: C ? /* @__PURE__ */ R("div", { className: "flex items-center space-x-4", children: [
                    /* @__PURE__ */ R("div", { className: "relative", children: [
                      !i && /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          onClick: V,
                          className: "absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow hover:bg-red-600 z-10",
                          children: /* @__PURE__ */ s(Bt, { icon: "mdi:close", className: "w-3 h-3" })
                        }
                      ),
                      /* @__PURE__ */ s(
                        "video",
                        {
                          src: C.preview,
                          controls: !0,
                          controlsList: "nodownload",
                          className: "w-[260px] h-[150px] rounded-md object-cover"
                        },
                        C.preview
                      )
                    ] }),
                    /* @__PURE__ */ s(To, { type: "button", onClick: pe, children: "Change Video File" })
                  ] }) : /* @__PURE__ */ R("div", { className: "flex items-center justify-center space-x-4", children: [
                    /* @__PURE__ */ s("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ s(Bt, { icon: "mdi:video", className: "text-gray-400 w-10 h-10" }) }),
                    /* @__PURE__ */ R("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ s(
                        To,
                        {
                          type: "button",
                          onClick: pe,
                          variant: "outlined",
                          children: "Choose Video File"
                        }
                      ),
                      v && /* @__PURE__ */ s("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop your video here" })
                    ] })
                  ] })
                }
              ),
              v && K && !C && /* @__PURE__ */ s("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-primary-500/10 rounded-lg", children: /* @__PURE__ */ s("span", { className: "text-primary-600 dark:text-primary-400 font-semibold text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg", children: "Drop video here" }) })
            ]
          }
        ),
        N && /* @__PURE__ */ s(
          "span",
          {
            className: re(
              $.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: N
          }
        )
      ]
    },
    c
  );
}, Ia = Yt, $s = (o, d) => {
  const n = Da(o), i = Zs(o);
  if (o instanceof File) {
    const e = URL.createObjectURL(o);
    return {
      id: `${d}-${o.name}-${o.size}`,
      name: n.name || o.name,
      preview: e,
      createdBlobUrl: e,
      isImage: i,
      fileType: o.type || "image/jpeg"
    };
  }
  if (typeof o == "object" && o.file instanceof File) {
    const e = URL.createObjectURL(o.file);
    return {
      id: `${d}-${o.file.name}-${o.file.size}`,
      name: n.name || o.file.name,
      preview: e,
      createdBlobUrl: e,
      isImage: i,
      fileType: o.file.type || "image/jpeg"
    };
  }
  const l = n.url || n.name;
  return {
    id: `${d}-${n.name || l}`,
    name: n.name || l,
    preview: l,
    isImage: i,
    fileType: i ? "image/jpeg" : ""
  };
}, Js = [
  "jpg",
  "jpeg",
  "png",
  "gif",
  "webp",
  "bmp",
  "svg",
  "avif",
  "tif",
  "tiff",
  "heic",
  "heif"
], vn = (o) => {
  var n;
  const d = o.split(".");
  return d.length > 1 && ((n = d.pop()) == null ? void 0 : n.toLowerCase()) || "";
}, Nr = (o) => {
  if (!o) return "";
  const d = (S) => /\.[a-z0-9]{1,10}$/i.test(S || ""), n = (S) => {
    if (!S) return "";
    const N = S.replace(/\\/g, "/").match(
      /[^/?#]+\.[a-z0-9]{1,10}(?=($|[?#/]))/gi
    );
    return (N == null ? void 0 : N[N.length - 1]) || "";
  };
  let i = o.split(/[?#]/)[0];
  try {
    i = new URL(o).pathname;
  } catch {
  }
  const l = i.split(/[\\/]/), e = l[l.length - 1] || "";
  if (!e) return "";
  const v = (S) => {
    const b = S.split("/");
    return b[b.length - 1] || S;
  };
  try {
    const S = decodeURIComponent(e), b = v(S);
    if (d(b))
      return b;
  } catch {
    const S = v(e);
    if (d(S))
      return S;
  }
  const c = [o, i];
  for (const S of c) {
    const b = n(S);
    if (b) return b;
    try {
      const N = decodeURIComponent(S), L = n(N);
      if (L) return L;
    } catch {
    }
  }
  return v(e);
}, bn = (o) => {
  const d = [
    "name",
    "fileName",
    "filename",
    "originalName",
    "originalname",
    "url",
    "downloadUrl",
    "downloadURL",
    "uri",
    "path",
    "filePath",
    "preview",
    "location",
    "src",
    "href",
    "link"
  ];
  for (const n of d) {
    const i = o == null ? void 0 : o[n];
    if (typeof i == "string" && i.trim())
      return i;
  }
  return "";
}, Fo = (o) => {
  const d = vn(o);
  return ["pdf"].includes(d) ? "mdi:file-pdf-box" : ["doc", "docx"].includes(d) ? "mdi:file-word-box" : ["xls", "xlsx", "csv"].includes(d) ? "mdi:file-excel-box" : ["ppt", "pptx"].includes(d) ? "mdi:file-powerpoint-box" : ["zip", "rar", "7z", "tar", "gz"].includes(d) ? "mdi:folder-zip" : ["txt", "md", "json", "xml"].includes(d) ? "mdi:file-document-outline" : "mdi:file-outline";
}, Ho = (o) => o.toLowerCase().startsWith("image/"), aa = (o) => Js.includes(vn(o)), Zs = (o) => {
  if (o instanceof File)
    return Ho(o.type) || aa(o.name);
  if (typeof o == "string")
    return aa(Nr(o)) || aa(o);
  if (typeof o == "object") {
    if (o.file instanceof File)
      return Ho(o.file.type) || aa(o.file.name);
    if (typeof o.file == "string")
      return aa(Nr(o.file));
    const d = bn(o);
    if (d)
      return aa(Nr(d));
  }
  return !1;
}, Xs = (o) => o.split(",").map((d) => d.trim().toLowerCase()).filter(Boolean), ed = (o, d) => {
  if (!d.trim()) return !0;
  const n = Xs(d), i = (o.type || "").toLowerCase(), l = `.${vn(o.name)}`;
  return n.some((e) => {
    if (e === "*/*") return !0;
    if (e.startsWith(".")) return l === e;
    if (e.endsWith("/*")) {
      const v = e.slice(0, -1);
      return i.startsWith(v);
    }
    return i === e;
  });
}, un = (o) => {
  if (!o) return "";
  if (o instanceof File) return o.name;
  if (typeof o == "string")
    return Nr(o);
  if (Array.isArray(o))
    return un(o[0]);
  if (typeof o == "object") {
    if (o.file instanceof File)
      return o.file.name;
    if (typeof o.file == "string")
      return Nr(o.file);
    if (o.file && typeof o.file == "object") {
      const n = un(o.file);
      if (n) return n;
    }
    const d = bn(o);
    if (d)
      return Nr(d);
  }
  return "";
}, Da = (o) => {
  const d = un(o);
  if (!o)
    return { name: "", url: "" };
  if (typeof o == "string")
    return {
      name: d,
      url: o
    };
  if (o instanceof File)
    return {
      name: o.name,
      url: ""
    };
  if (Array.isArray(o))
    return Da(o[0]);
  if (typeof o == "object") {
    if (o.file instanceof File)
      return {
        name: o.file.name,
        url: ""
      };
    if (typeof o.file == "string")
      return {
        name: Nr(o.file),
        url: o.file
      };
    if (o.file && typeof o.file == "object") {
      const i = Da(o.file);
      if (i.name || i.url)
        return i;
    }
    const n = bn(o);
    if (n)
      return {
        name: Nr(n),
        url: n
      };
  }
  return {
    name: d,
    url: ""
  };
}, td = ({
  label: o = "",
  value: d = null,
  onChange: n,
  required: i = !1,
  accept: l = "*/*",
  id: e,
  dragDrop: v = !1,
  multiple: c = !1,
  cropImage: S = !1,
  aspect: b = 1,
  name: N = "",
  parentClass: L = "",
  maxSize: C = 0,
  maxFiles: I,
  errorMessage: K = ""
}) => {
  const { enqueueSnackbar: H } = oa(), [ne, U] = le(d), [G, T] = le(!1), [V, ce] = le("add"), [ae, be] = le(
    null
  ), [pe, te] = le(null), [se, ee] = le(!1), [Se, Ie] = le(""), [ft, it] = le("image/jpeg"), [At, ye] = le("cropped-image"), [Ge, Pe] = le([]), we = Ct(null), ve = c ? ne : Array.isArray(ne) ? ne[0] ?? null : ne, Ke = Array.isArray(ve) ? ve : ve ? [ve] : [], We = C * 1024 * 1024, Ne = typeof I == "number" && I > 0 ? Ke.length < I : !0, xe = (Re) => {
    const Je = c ? Re : Re.length > 0 ? Re[0] : null;
    U(Je), n == null || n(Je);
  }, ge = () => {
    ee(!1), Ie(""), te(null), ye("cropped-image"), it("image/jpeg"), we.current && (we.current.value = "");
  };
  Ve(() => {
    const Re = c ? d : Array.isArray(d) ? d[0] ?? null : d;
    U(Re), !c && Array.isArray(d) && (n == null || n(Re));
  }, [c, d]), Ve(() => {
    const Re = Ke.map(
      (Je, Rt) => $s(Je, Rt)
    );
    return Pe(Re), () => {
      Re.forEach((Je) => {
        Je.createdBlobUrl && URL.revokeObjectURL(Je.createdBlobUrl);
      });
    };
  }, [ve]);
  const ze = (Re) => {
    if (!Re || Re.length === 0) return;
    if (!Ne && V === "add") {
      H(
        I ? `You can upload up to ${I} files` : "File limit reached",
        { variant: "warning" }
      );
      return;
    }
    const Je = Array.from(Re), Rt = Je.filter((Tt) => {
      const Zt = ed(Tt, l), hr = !We || Tt.size <= We;
      return Zt && hr;
    });
    if (Rt.length === 0) {
      H(`Only ${l} files are allowed`, {
        variant: "warning"
      });
      return;
    }
    if (Rt.length < Je.length && H(
      We ? `Some files were skipped because they are not allowed or exceed ${C} MB` : "Some files were skipped because they are not allowed",
      {
        variant: "warning"
      }
    ), V === "replace" && ae !== null) {
      const Tt = [...Ke], Zt = Rt[0];
      Zt && (Tt[ae] = Zt, xe(Tt));
    } else {
      const Tt = c ? [...Ke, ...Rt].slice(0, I || void 0) : [Rt[0]];
      xe(Tt);
    }
    ce("add"), be(null), we.current && (we.current.value = "");
  }, St = (Re) => {
    Re && Re.stopPropagation(), U(null), n == null || n(null), we.current && (we.current.value = "");
  }, Ee = (Re) => {
    v && (Re.preventDefault(), T(!0));
  }, Ue = (Re) => {
    v && (Re.preventDefault(), T(!1));
  }, et = (Re) => {
    v && (Re.preventDefault(), T(!1), ze(Re.dataTransfer.files));
  }, dt = () => {
    var Re;
    ce("add"), be(null), (Re = we.current) == null || Re.click();
  }, Qe = (Re) => {
    var Je;
    ce("replace"), be(Re), (Je = we.current) == null || Je.click();
  }, pt = (Re) => {
    const Je = Ge[Re];
    Je && (te(Re), Ie(Je.preview), it(Je.fileType || "image/jpeg"), ye((Je.name || "cropped-image").replace(/\.[^/.]+$/, "")), ee(!0));
  }, rr = (Re) => {
    if (pe === null) {
      ge();
      return;
    }
    const Je = [...Ke];
    Je[pe] = Re, xe(Je), ge();
  }, Kt = Da(Ke[0]), gt = Kt.name, $t = Kt.url, Lt = Ke.length > 0, Jt = Ge[0], sr = `${Ke.length} file${Ke.length === 1 ? "" : "s"} selected`;
  return /* @__PURE__ */ R($e, { children: [
    /* @__PURE__ */ R(
      "div",
      {
        className: re(
          $.mediaPicker.audio,
          $.field.wrapper,
          L || "col-span-12"
        ),
        children: [
          /* @__PURE__ */ s(er, { label: o, required: i }),
          /* @__PURE__ */ R(
            "div",
            {
              className: re(
                $.mediaPicker.dropzone,
                "relative rounded-lg p-2 transition-all",
                G ? "border-2 border-dashed border-primary-500 bg-primary-50 dark:bg-primary-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800",
                K ? "border-red-500" : ""
              ),
              onDragOver: Ee,
              onDragLeave: Ue,
              onDrop: et,
              id: `field-${N}`,
              children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    ref: we,
                    id: e,
                    type: "file",
                    accept: l,
                    multiple: c,
                    onChange: (Re) => ze(Re.target.files),
                    required: i && !Lt,
                    className: "absolute opacity-0 pointer-events-none h-[10px]"
                  }
                ),
                /* @__PURE__ */ s(
                  "div",
                  {
                    className: `flex items-center space-x-4 transition-all ${G ? "opacity-50" : ""}`,
                    children: Lt ? c ? /* @__PURE__ */ R("div", { className: "flex flex-col gap-3 w-full", children: [
                      /* @__PURE__ */ R("div", { className: "flex items-center justify-between gap-2", children: [
                        /* @__PURE__ */ s(
                          Ia,
                          {
                            type: "button",
                            onClick: dt,
                            disabled: !Ne,
                            variant: "outlined",
                            color: "default",
                            children: c ? "Add More Files" : "Change File"
                          }
                        ),
                        /* @__PURE__ */ s("span", { className: "text-xs text-gray-500 dark:text-gray-400", children: I ? `${Ke.length}/${I}` : sr })
                      ] }),
                      /* @__PURE__ */ s("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full", children: Ge.map((Re, Je) => /* @__PURE__ */ R(
                        "div",
                        {
                          className: "group relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm",
                          children: [
                            /* @__PURE__ */ R("div", { className: "relative h-28 overflow-hidden bg-gray-100 dark:bg-gray-700", children: [
                              Re.isImage ? /* @__PURE__ */ s(
                                "img",
                                {
                                  src: Re.preview,
                                  alt: Re.name,
                                  className: "h-full w-full object-cover"
                                }
                              ) : /* @__PURE__ */ s("div", { className: "flex h-full w-full items-center justify-center", children: /* @__PURE__ */ s(
                                Bt,
                                {
                                  icon: Fo(Re.name),
                                  className: "text-gray-500 w-12 h-12"
                                }
                              ) }),
                              /* @__PURE__ */ R("div", { className: "absolute top-2 right-2 flex items-center gap-1.5 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity", children: [
                                /* @__PURE__ */ s(
                                  "button",
                                  {
                                    type: "button",
                                    onClick: () => Qe(Je),
                                    className: "w-7 h-7 rounded-full bg-white/90 text-gray-800 hover:bg-white flex items-center justify-center shadow",
                                    "aria-label": "Replace file",
                                    children: /* @__PURE__ */ s(
                                      Bt,
                                      {
                                        icon: "solar:refresh-bold",
                                        className: "w-4 h-4"
                                      }
                                    )
                                  }
                                ),
                                S && Re.isImage && /* @__PURE__ */ s(
                                  "button",
                                  {
                                    type: "button",
                                    onClick: () => pt(Je),
                                    className: "w-7 h-7 rounded-full bg-white/90 text-gray-800 hover:bg-white flex items-center justify-center shadow",
                                    "aria-label": "Crop file",
                                    children: /* @__PURE__ */ s(
                                      Bt,
                                      {
                                        icon: "solar:crop-bold",
                                        className: "w-4 h-4"
                                      }
                                    )
                                  }
                                ),
                                !i && /* @__PURE__ */ s(
                                  "button",
                                  {
                                    type: "button",
                                    onClick: () => {
                                      const Rt = Ke.filter(
                                        (Tt, Zt) => Zt !== Je
                                      );
                                      xe(Rt), we.current && (we.current.value = "");
                                    },
                                    className: "w-7 h-7 rounded-full bg-red-500/95 text-white hover:bg-red-600 flex items-center justify-center shadow",
                                    "aria-label": "Remove file",
                                    children: /* @__PURE__ */ s(
                                      Bt,
                                      {
                                        icon: "solar:trash-bin-trash-bold",
                                        className: "w-4 h-4"
                                      }
                                    )
                                  }
                                )
                              ] })
                            ] }),
                            /* @__PURE__ */ s("div", { className: "p-3", children: /* @__PURE__ */ s(
                              "p",
                              {
                                className: "text-sm text-gray-700 dark:text-gray-300 truncate",
                                title: Re.name,
                                children: Re.name
                              }
                            ) })
                          ]
                        },
                        Re.id
                      )) })
                    ] }) : /* @__PURE__ */ R("div", { className: "flex items-center space-x-4 w-full", children: [
                      /* @__PURE__ */ R("div", { className: "relative rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center overflow-hidden", children: [
                        Jt != null && Jt.isImage ? /* @__PURE__ */ s(
                          "img",
                          {
                            src: Jt.preview,
                            alt: Jt.name,
                            className: "h-full w-full object-cover"
                          }
                        ) : /* @__PURE__ */ s(
                          Bt,
                          {
                            icon: Fo(gt || $t),
                            className: "text-gray-500 w-10 h-10"
                          }
                        ),
                        !i && /* @__PURE__ */ s(
                          "button",
                          {
                            type: "button",
                            onClick: St,
                            className: "absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow hover:bg-red-600 z-10",
                            "aria-label": "Remove file",
                            children: /* @__PURE__ */ s(Bt, { icon: "mdi:close", className: "w-3 h-3" })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ R("div", { className: "space-y-1 max-w-[280px]", children: [
                        /* @__PURE__ */ s(
                          "p",
                          {
                            className: "text-sm text-gray-700 dark:text-gray-300 truncate",
                            title: gt || $t,
                            children: gt || $t
                          }
                        ),
                        /* @__PURE__ */ R("div", { className: "flex flex-wrap gap-2", children: [
                          S && (Jt == null ? void 0 : Jt.isImage) && /* @__PURE__ */ s(
                            Ia,
                            {
                              type: "button",
                              onClick: () => pt(0),
                              variant: "outlined",
                              color: "default",
                              children: "Crop"
                            }
                          ),
                          /* @__PURE__ */ s(
                            Ia,
                            {
                              type: "button",
                              onClick: dt,
                              children: "Change File"
                            }
                          )
                        ] })
                      ] })
                    ] }) : /* @__PURE__ */ R("div", { className: "flex items-center justify-center space-x-4", children: [
                      /* @__PURE__ */ s("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ s(
                        Bt,
                        {
                          icon: "mdi:file-upload-outline",
                          className: "text-gray-400 w-10 h-10"
                        }
                      ) }),
                      /* @__PURE__ */ R("div", { className: "space-y-1", children: [
                        /* @__PURE__ */ s(
                          Ia,
                          {
                            type: "button",
                            onClick: dt,
                            variant: "outlined",
                            color: "default",
                            children: c ? "Choose Files" : "Choose File"
                          }
                        ),
                        v && /* @__PURE__ */ R("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: [
                          "or drag and drop your ",
                          c ? "files" : "file",
                          " here"
                        ] })
                      ] })
                    ] })
                  }
                ),
                v && G && !ne && /* @__PURE__ */ s("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-primary-500/10 rounded-lg", children: /* @__PURE__ */ R("span", { className: "text-primary-600 dark:text-primary-400 font-semibold text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg", children: [
                  "Drop ",
                  c ? "files" : "file",
                  " here"
                ] }) })
              ]
            }
          ),
          K && /* @__PURE__ */ s(
            "span",
            {
              className: re(
                $.field.error,
                "text-red-500 text-xs mt-1"
              ),
              children: K
            }
          )
        ]
      },
      N
    ),
    /* @__PURE__ */ s(
      gn,
      {
        isOpen: se,
        imageSrc: Se,
        fileType: ft,
        fileName: At,
        onClose: ge,
        onApply: rr,
        aspect: Number(b)
      }
    )
  ] });
}, ii = ({
  field: o,
  formData: d,
  handleChange: n,
  errorMessage: i
}) => {
  const {
    key: l,
    label: e,
    type: v,
    options: c,
    placeholder: S,
    rows: b,
    inputClass: N,
    search: L,
    accept: C,
    text: I,
    required: K = !1,
    minLength: H,
    dragDrop: ne,
    parentClass: U,
    countriesList: G,
    defaultCountry: T,
    multiple: V,
    dropdownMaxHeight: ce,
    editorKey: ae,
    fontFamily: be,
    disabled: pe,
    negativeNumberAllow: te,
    defaultValue: se,
    renderCondition: ee,
    pattern: Se,
    renderType: Ie,
    cropImage: ft,
    aspectRatio: it,
    dependencyKey: At,
    mask: ye,
    maskApplyOnValue: Ge,
    maxSize: Pe,
    editorVariant: we
  } = o;
  let ve = d == null ? void 0 : d[l];
  ve == null && (ve = V ? [] : "");
  const Ke = S || (v === "select" ? `Select ${e}` : `Enter ${e}`), We = "w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm focus:outline-none focus:ring-1 focus:ring-primary-200 bg-white text-black dark:bg-gray-700 dark:text-white";
  if (ee && typeof ee == "function" && !ee(d))
    return null;
  if (Ie && Ie == "details")
    switch (v) {
      case "group":
        return /* @__PURE__ */ s(ri, { col: o, data: d });
      case "cardGroup":
        return /* @__PURE__ */ s(ai, { col: o, data: d });
      default:
        return /* @__PURE__ */ s(oi, { col: o, data: d });
    }
  switch (v) {
    case "select":
      return /* @__PURE__ */ s(
        ls,
        {
          options: c || [],
          value: ve,
          formData: d,
          dependencyKey: At,
          onChange: (Ne) => n(l, Ne),
          placeholder: Ke,
          className: N || "",
          search: L,
          required: K,
          defaultValue: se,
          label: e || "",
          name: l,
          countriesList: G,
          disabled: pe,
          parentClass: U || "",
          multiple: V,
          dropdownMaxHeight: ce,
          errorMessage: i
        }
      );
    case "checkbox":
      return /* @__PURE__ */ s($e, { children: /* @__PURE__ */ s(
        Gs,
        {
          name: l,
          label: e || "",
          options: c || [],
          value: ve,
          onChange: (Ne) => n(l, Ne),
          required: K,
          parentClass: U || "",
          className: N || "",
          multiSelect: V,
          disabled: pe,
          errorMessage: i
        }
      ) });
    case "radio":
      return /* @__PURE__ */ s(
        Ws,
        {
          value: ve,
          onChange: (Ne) => n(l, Ne),
          text: I,
          options: c || [],
          label: e || "",
          required: K,
          name: l,
          disabled: pe,
          parentClass: U || "",
          errorMessage: i
        }
      );
    case "switch":
      return /* @__PURE__ */ s(
        Qo,
        {
          value: !!ve,
          onChange: (Ne) => n(l, Ne),
          label: e || "",
          required: K,
          name: l,
          disabled: pe,
          className: "",
          parentClass: U || "",
          errorMessage: i
        }
      );
    case "phone":
      return /* @__PURE__ */ s(
        cs,
        {
          value: ve,
          onChange: (Ne) => n(l, Ne),
          countriesList: G,
          defaultCountry: T,
          required: K,
          placeholder: Ke,
          search: L,
          label: e || "",
          name: l,
          disabled: pe,
          errorMessage: i,
          parentClass: U || ""
        }
      );
    case "textarea":
      return /* @__PURE__ */ s(
        Go,
        {
          value: ve,
          onChange: (Ne) => n(l, Ne.target.value),
          placeholder: Ke,
          rows: b || 3,
          className: `${We} ${N || ""}`,
          required: K,
          name: l,
          label: e || "",
          disabled: pe,
          parentClass: U || "",
          errorMessage: i
        }
      );
    case "image":
    case "multiImage":
      return V || v === "multiImage" ? /* @__PURE__ */ s(
        Vs,
        {
          value: Array.isArray(ve) ? ve : [],
          onChange: (Ne) => n(l, Ne),
          required: K,
          accept: C || "image/*",
          aspect: it,
          id: `file-${l}`,
          dragDrop: ne,
          cropImage: ft,
          label: e || "",
          name: l,
          parentClass: U || "",
          maxImages: o.maxImages,
          errorMessage: i
        }
      ) : /* @__PURE__ */ s(
        Fs,
        {
          value: ve,
          onChange: (Ne) => n(l, Ne),
          required: K,
          accept: C || "image/*",
          aspect: it,
          id: `file-${l}`,
          dragDrop: ne,
          cropImage: ft,
          label: e || "",
          name: l,
          parentClass: U || "",
          errorMessage: i
        }
      );
    case "audio":
      return /* @__PURE__ */ s(
        Ys,
        {
          value: ve,
          onChange: (Ne) => n(l, Ne),
          required: K,
          accept: C || "audio/*",
          id: `file-${l}`,
          dragDrop: ne,
          label: e || "",
          name: l,
          parentClass: U || "",
          maxSize: Pe,
          errorMessage: i
        }
      );
    case "video":
      return /* @__PURE__ */ s(
        qs,
        {
          value: ve,
          onChange: (Ne) => n(l, Ne),
          required: K,
          accept: C || "video/*",
          id: `file-${l}`,
          dragDrop: ne,
          label: e || "",
          name: l,
          maxSize: Pe,
          parentClass: U || "",
          errorMessage: i
        }
      );
    case "file":
      return /* @__PURE__ */ s(
        td,
        {
          value: V ? Array.isArray(ve) ? ve : [] : ve,
          onChange: (Ne) => n(l, Ne),
          required: K,
          accept: C || "*/*",
          id: `file-${l}`,
          dragDrop: ne,
          multiple: V,
          cropImage: ft,
          aspect: it,
          label: e || "",
          name: l,
          maxSize: Pe,
          maxFiles: o.maxFiles ?? o.maxImages,
          parentClass: U || "",
          errorMessage: i
        }
      );
    case "tinyEditor":
      return /* @__PURE__ */ s(
        Hs,
        {
          value: ve,
          name: l,
          onChange: (Ne) => n(l, Ne),
          required: K,
          placeholder: Ke,
          label: e || "",
          parentClass: U || "",
          fontFamily: be,
          editorKey: ae || "",
          disabled: pe,
          height: o.height || 400,
          errorMessage: i
        }
      );
    case "freeEditor":
      return /* @__PURE__ */ s(
        Qs,
        {
          value: ve,
          name: l,
          onChange: (Ne) => n(l, Ne),
          required: K,
          placeholder: Ke,
          label: e || "",
          parentClass: U || "",
          disabled: pe,
          height: o.height || 300,
          errorMessage: i
        }
      );
    default:
      return /* @__PURE__ */ s(
        ei,
        {
          field: o,
          type: v || "text",
          defaultValue: se,
          value: ve,
          onChange: (Ne) => n(l, Ne),
          placeholder: Ke,
          className: `${We} ${N || ""}`,
          required: K,
          name: l,
          minLength: H,
          label: e || "",
          negativeNumberAllow: te,
          parentClass: U || "",
          disabled: pe,
          pattern: Se,
          mask: ye,
          errorMessage: i,
          maskApplyOnValue: Ge
        }
      );
  }
}, rd = ({
  isOpen: o,
  onClose: d,
  config: n,
  onApply: i
}) => {
  var N;
  const [l, e] = le({}), v = (L, C) => {
    e((I) => ({ ...I, [L]: C }));
  }, c = () => {
    i(l), d();
  }, S = () => {
    e({}), i({}), d();
  }, b = n == null ? void 0 : n.component;
  return /* @__PURE__ */ R($e, { children: [
    /* @__PURE__ */ s(
      "div",
      {
        className: re(
          $.filterDrawer.overlay,
          "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300",
          o ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        ),
        style: {
          opacity: o ? 1 : 0
        },
        onClick: d
      }
    ),
    /* @__PURE__ */ R(
      "div",
      {
        style: {
          opacity: o ? 1 : 0
        },
        className: re(
          $.filterDrawer.panel,
          "fixed top-0 right-0 h-full w-full sm:w-[28rem] bg-white dark:bg-gray-900 shadow-2xl z-50 flex flex-col border-l border-gray-200 dark:border-gray-700 transform transition-all duration-300 ease-in-out",
          o ? "translate-x-0" : "translate-x-full"
        ),
        children: [
          /* @__PURE__ */ R(
            "div",
            {
              className: re(
                $.filterDrawer.header,
                "flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700"
              ),
              children: [
                /* @__PURE__ */ s("h2", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: "Filters" }),
                /* @__PURE__ */ s(
                  "button",
                  {
                    onClick: d,
                    className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition",
                    children: /* @__PURE__ */ s(ja, { className: "w-5 h-5 text-gray-500 dark:text-gray-400" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ s(
            "div",
            {
              className: re(
                $.filterDrawer.body,
                "flex-1 overflow-y-auto px-4 py-3"
              ),
              children: b ? /* @__PURE__ */ s(b, { filters: l, onFilterChange: v }) : /* @__PURE__ */ s("div", { className: "space-y-4", children: (N = n == null ? void 0 : n.fields) == null ? void 0 : N.map((L) => /* @__PURE__ */ s(
                ii,
                {
                  field: L,
                  formData: l,
                  handleChange: v
                },
                L.key
              )) })
            }
          ),
          /* @__PURE__ */ R(
            "div",
            {
              className: re(
                $.filterDrawer.footer,
                "flex gap-2 px-4 py-3 border-t border-gray-200 dark:border-gray-700"
              ),
              children: [
                /* @__PURE__ */ s(
                  Yt,
                  {
                    onClick: c,
                    variant: "contained",
                    color: "primary",
                    fullWidth: !0,
                    children: "Apply Filters"
                  }
                ),
                /* @__PURE__ */ s(
                  Yt,
                  {
                    onClick: S,
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
}, ad = ({ rows: o = 5, columns: d = 5 }) => /* @__PURE__ */ R($e, { children: [
  /* @__PURE__ */ s("div", { className: "w-full mb-6 inline-flex justify-end items-center", children: /* @__PURE__ */ s("div", { className: "h-8 w-80 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }),
  /* @__PURE__ */ s("div", { className: "overflow-hidden rounded-md border border-gray-200 dark:border-gray-800", children: /* @__PURE__ */ R(
    "table",
    {
      className: re(
        $.tableSkeleton.root,
        $.tableSkeleton.table,
        "w-full border-collapse"
      ),
      children: [
        /* @__PURE__ */ s("thead", { children: /* @__PURE__ */ s("tr", { className: "bg-gray-50 dark:bg-gray-900", children: Array.from({ length: d }).map((n, i) => /* @__PURE__ */ s("th", { className: "px-4 py-3", children: /* @__PURE__ */ s("div", { className: "h-6 w-24 bg-gray-300 dark:bg-gray-700 rounded animate-pulse  inline-flex justify-center items-center" }) }, i)) }) }),
        /* @__PURE__ */ s("tbody", { children: Array.from({ length: o }).map((n, i) => /* @__PURE__ */ s(
          "tr",
          {
            className: "border-t border-gray-200 dark:border-gray-800",
            children: Array.from({ length: d }).map((l, e) => /* @__PURE__ */ s("td", { className: "px-4 py-6", children: /* @__PURE__ */ s("div", { className: "h-6 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }, e))
          },
          i
        )) })
      ]
    }
  ) })
] }), nd = ({
  options: o = [],
  value: d = "",
  onChange: n,
  clearLabel: i = "",
  label: l,
  icon: e
}) => {
  const [v, c] = le(!1), S = Ct(null), b = !!d;
  Ve(() => {
    const L = (C) => {
      S.current && !S.current.contains(C.target) && c(!1);
    };
    return document.addEventListener("click", L), () => document.removeEventListener("click", L);
  }, []);
  const N = (L) => {
    const C = o.find((I) => I.value === L);
    n(L, C || null), c(!1);
  };
  return o != null && o.length ? /* @__PURE__ */ R(
    "div",
    {
      className: re($.sortDropdown.root, "relative"),
      ref: S,
      children: [
        /* @__PURE__ */ R(
          "button",
          {
            type: "button",
            onClick: () => c((L) => !L),
            className: re(
              $.sortDropdown.trigger,
              l ? "relative inline-flex items-center justify-center h-[36px] px-3 gap-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition text-sm font-medium" : "relative inline-flex items-center justify-center h-[36px] w-[36px] rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
            ),
            "aria-label": "Open sort options",
            children: [
              e !== void 0 ? e !== null ? e : null : /* @__PURE__ */ s(qc, { className: "w-4 h-4" }),
              l && /* @__PURE__ */ s("span", { children: l }),
              b && /* @__PURE__ */ s("span", { className: "absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" })
            ]
          }
        ),
        v && /* @__PURE__ */ R(
          "div",
          {
            className: re(
              $.sortDropdown.menu,
              "absolute right-0 mt-2 z-20 min-w-[220px] max-h-[260px] overflow-auto rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg"
            ),
            children: [
              !!(i != null && i.trim()) && /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  onClick: () => N(""),
                  className: re(
                    $.sortDropdown.item,
                    "w-full text-left px-3 py-2 text-sm transition hover:bg-gray-100 dark:hover:bg-gray-700",
                    d ? "text-gray-700 dark:text-gray-200" : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                  ),
                  children: i
                }
              ),
              o.map((L) => /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  onClick: () => N(L.value),
                  className: re(
                    $.sortDropdown.item,
                    "w-full text-left px-3 py-2 text-sm transition hover:bg-gray-100 dark:hover:bg-gray-700",
                    d === L.value ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white" : "text-gray-700 dark:text-gray-200"
                  ),
                  children: L.label
                },
                L.value
              ))
            ]
          }
        )
      ]
    }
  ) : null;
}, Za = {
  enabled: !1,
  useServerSideSorting: !1,
  options: [],
  fields: [],
  defaultValue: "",
  autoGenerate: !0,
  clearLabel: "",
  onChange: null,
  label: "",
  icon: ""
}, od = (o) => o === !0 ? { ...Za, enabled: !0 } : !o || typeof o != "object" ? Za : {
  ...Za,
  ...o,
  enabled: o.enabled ?? !0,
  autoGenerate: o.autoGenerate ?? !0
}, id = (o = []) => o.filter((d) => {
  const n = ["menu_actions", "index", "audio", "avatar"];
  return d.type && n.includes(d.type) ? !1 : !!(d.sortKey || (d.type === "group" ? d.titleKey : d.key));
}), ld = (o) => {
  if (o.sortType) return o.sortType;
  if (o.type === "date") return "date";
  if (o.type === "number") return "number";
  const d = String(
    o.sortKey || (o.type === "group" ? o.titleKey : o.key) || ""
  ).toLowerCase();
  return ["phone", "mobile", "contact", "tel", "whatsapp"].some(
    (i) => d.includes(i)
  ) ? "phone" : Array.isArray(o.chipOptions) && o.chipOptions.length > 0 && o.chipOptions.every(
    (l) => typeof l.value == "boolean"
  ) ? "boolean" : "string";
}, Po = (o = []) => o.flatMap((d) => {
  const n = d.sortKey || (d.type === "group" ? d.titleKey : d.key), i = d.sortLabel || d.title || n, l = ld(d);
  return n ? l === "number" ? [
    {
      value: `${n}_asc`,
      label: `${i} (Low-High)`,
      key: n,
      order: "asc",
      type: l
    },
    {
      value: `${n}_desc`,
      label: `${i} (High-Low)`,
      key: n,
      order: "desc",
      type: l
    }
  ] : l === "phone" ? [
    {
      value: `${n}_asc`,
      label: `${i} (0-9)`,
      key: n,
      order: "asc",
      type: l
    },
    {
      value: `${n}_desc`,
      label: `${i} (9-0)`,
      key: n,
      order: "desc",
      type: l
    }
  ] : l === "date" ? [
    {
      value: `${n}_desc`,
      label: `${i} (Newest First)`,
      key: n,
      order: "desc",
      type: l
    },
    {
      value: `${n}_asc`,
      label: `${i} (Oldest First)`,
      key: n,
      order: "asc",
      type: l
    }
  ] : l === "boolean" ? [
    {
      value: `${n}_desc`,
      label: `${i} (True First)`,
      key: n,
      order: "desc",
      type: l
    },
    {
      value: `${n}_asc`,
      label: `${i} (False First)`,
      key: n,
      order: "asc",
      type: l
    }
  ] : [
    {
      value: `${n}_asc`,
      label: `${i} (A-Z)`,
      key: n,
      order: "asc",
      type: l
    },
    {
      value: `${n}_desc`,
      label: `${i} (Z-A)`,
      key: n,
      order: "desc",
      type: l
    }
  ] : [];
}), cd = (o, d = []) => {
  if (Array.isArray(o.options) && o.options.length > 0)
    return o.options.map((l) => ({
      ...l,
      type: l.type || "string",
      order: l.order === "desc" ? "desc" : "asc"
    }));
  const i = Array.isArray(o.fields) ? o.fields : [];
  if (i.length > 0) {
    const l = i.map((e) => {
      const v = typeof e == "string" ? e : e.key, c = d.find(
        (S) => S.key === v || S.sortKey === v || S.type === "group" && S.titleKey === v
      );
      return c ? {
        ...c,
        sortKey: typeof e == "object" && e.key ? e.key : c.sortKey,
        sortType: typeof e == "object" && e.type ? e.type : c.sortType,
        sortLabel: typeof e == "object" && e.label ? e.label : c.sortLabel
      } : null;
    }).filter((e) => e !== null);
    return Po(l);
  }
  return o.autoGenerate ? Po(d) : [];
}, sd = (o = [], d = "", n, i = []) => {
  if (!(n != null && n.enabled) || !d || n != null && n.useServerSideSorting)
    return o;
  const l = i == null ? void 0 : i.find(
    (b) => b.value === d
  );
  if (!(l != null && l.key))
    return o;
  const e = l.order === "desc" ? "desc" : "asc", v = l.key, c = l.type || "string", S = (b) => String(b ?? "").replace(/[^\d]/g, "").trim();
  return [...o].sort((b, N) => {
    const L = b == null ? void 0 : b[v], C = N == null ? void 0 : N[v];
    if (L == null && C == null) return 0;
    if (L == null) return e === "asc" ? 1 : -1;
    if (C == null) return e === "asc" ? -1 : 1;
    let I = 0;
    return c === "number" ? I = Number(L) - Number(C) : c === "phone" ? I = S(L).localeCompare(
      S(C),
      void 0,
      {
        numeric: !0
      }
    ) : c === "date" ? I = new Date(L).getTime() - new Date(C).getTime() : c === "boolean" ? I = +!!L - +!!C : I = String(L).localeCompare(String(C)), e === "asc" ? I : -I;
  });
}, dd = ({ options: o, value: d, onChange: n, className: i = "" }) => o != null && o.length ? /* @__PURE__ */ s(
  "div",
  {
    className: re(
      $.tabs.root,
      "inline-flex w-full flex-wrap gap-2",
      i
    ),
    role: "tablist",
    "aria-label": "Table tabs",
    children: o.map((l, e) => {
      const v = l.value == d;
      return /* @__PURE__ */ s(
        Yt,
        {
          type: "button",
          role: "tab",
          "aria-selected": v,
          onClick: () => n(l),
          variant: v ? "contained" : "outlined",
          color: "primary",
          size: "sm",
          className: re(
            $.tabs.tab,
            "rounded-full px-4 py-2 shadow-none transition-all duration-200",
            v ? "ring-1 ring-primary/10" : "bg-white/90 text-primary hover:bg-primary/10 dark:bg-gray-950/80 dark:text-primary dark:hover:bg-primary/15",
            l.className || ""
          ),
          children: /* @__PURE__ */ R("span", { className: "inline-flex items-center gap-2", children: [
            /* @__PURE__ */ s("span", { children: l.label }),
            typeof l.count == "number" && /* @__PURE__ */ s(
              "span",
              {
                className: re(
                  $.tabs.count,
                  "inline-flex min-w-6 items-center justify-center rounded-full px-2 py-0.5 text-xs font-semibold",
                  v ? "bg-white/20 text-white" : "bg-primary/10 text-primary dark:bg-primary/20"
                ),
                children: l.count
              }
            )
          ] })
        },
        `${String(l.value)}-${e}`
      );
    })
  }
) : null, ud = ({
  config: o,
  setShowAdd: d,
  title: n,
  buttonText: i,
  description: l,
  showAddButton: e
}) => {
  var kr, Dr;
  const {
    data: v = [],
    table_head: c = [],
    loading: S = !1,
    search: b = {
      enabled: !1,
      placeholder: "Search...",
      useServerSideSearch: !1
    },
    filter: N = {
      enabled: !1,
      useServerSideFilters: !1
    },
    sort: L = { enabled: !1 },
    tabs: C = {
      enabled: !1,
      useServerSideTabs: !1,
      options: []
    },
    pagination: I = {
      enabled: !1,
      rows_per_page: 10,
      useServerSidePagination: !1
    },
    exportCSV: K = {
      enabled: !1,
      fileName: "",
      fields: []
    },
    customButtons: H = [],
    customMenuItems: ne = [],
    emptyMessage: U = "No data available",
    onMenuAction: G,
    setServerSidePaginationData: T = () => {
    },
    onFilterApply: V,
    filterConfig: ce = null,
    rowClick: ae = null
  } = o, [be, pe] = le(""), [te, se] = le(null), [ee, Se] = le([]), [Ie, ft] = le({ top: 0, left: 0 }), [it, At] = le(!1), [ye, Ge] = le({}), [Pe, we] = le(!1), ve = (C == null ? void 0 : C.options) || [], Ke = (C == null ? void 0 : C.defaultValue) ?? ((kr = ve[0]) == null ? void 0 : kr.value) ?? "all", [We, Ne] = le(
    Ke
  ), xe = br(() => od(L), [L]);
  Ve(() => {
    Ne(Ke);
  }, [Ke]);
  const ge = br(
    () => id(c),
    [c]
  ), ze = br(() => cd(xe, ge), [xe, ge]), [St, Ee] = le(
    (xe == null ? void 0 : xe.defaultValue) || ""
  ), [Ue, et] = le(null), [dt, Qe] = le(!1), pt = br(() => {
    if (!(C != null && C.enabled) || C != null && C.useServerSideTabs || ve.length === 0)
      return v;
    const A = ve.find((qe) => qe.value == We) || ve[0];
    if (!A) return v;
    const Z = A.filterKey || (C == null ? void 0 : C.filterKey), Le = A.serverValue ?? A.value;
    return !Z || Le === "all" ? v : v.filter((qe) => String(qe == null ? void 0 : qe[Z]) === String(Le));
  }, [v, C, ve, We]), rr = br(() => !b.enabled || !be.trim() || b.useServerSideSearch ? pt : is(
    pt,
    be,
    b.searchKeys || []
  ), [v, pt, be, b]), Kt = br(() => sd(
    rr,
    St,
    xe,
    ze
  ), [rr, St, xe, ze]), [gt, $t] = le(1), [Lt, Jt] = le((I == null ? void 0 : I.rows_per_page) || 50), [sr, Re] = le(rr.length || 0), Je = I != null && I.useServerSidePagination ? I.total_pages : Math.ceil(rr.length / Lt), Rt = br(() => {
    if (I.useServerSidePagination) return Kt;
    const A = (gt - 1) * Lt;
    return Kt.slice(A, A + Lt);
  }, [Kt, gt, Lt, I.useServerSidePagination]), Tt = Ct(null), Zt = Ct(null), hr = Ct(null), Mr = Ct({}), ut = Ct(null), dr = typeof document < "u" ? ((Dr = hr.current) == null ? void 0 : Dr.closest(".racm-root")) || document.body : null, yr = (A) => {
    pe(A), $t(1), b.useServerSideSearch && (ut.current && clearTimeout(ut.current), ut.current = setTimeout(async () => {
      try {
        await T((Z) => ({
          ...Z,
          search: A,
          current_page: 1
        }));
      } catch (Z) {
        console.error("Search error:", Z);
      }
    }, 800));
  }, Lr = (A, Z = null) => {
    Ee(A), $t(1);
    const Le = {
      value: A,
      option: Z,
      key: (Z == null ? void 0 : Z.key) || "",
      order: (Z == null ? void 0 : Z.order) || "",
      type: (Z == null ? void 0 : Z.type) || ""
    };
    typeof (xe == null ? void 0 : xe.onChange) == "function" && xe.onChange(Le);
  }, Qr = (A) => {
    if (Ne(A == null ? void 0 : A.value), $t(1), C != null && C.useServerSideTabs) {
      const Z = (A == null ? void 0 : A.serverValue) ?? (A == null ? void 0 : A.value);
      T((Le) => ({
        ...Le,
        current_page: 1,
        active_tab: A == null ? void 0 : A.value,
        active_tab_value: Z
      }));
    }
    typeof (C == null ? void 0 : C.onChange) == "function" && C.onChange({
      value: A == null ? void 0 : A.value,
      option: A,
      key: (A == null ? void 0 : A.filterKey) || (C == null ? void 0 : C.filterKey) || "",
      useServerSide: !!(C != null && C.useServerSideTabs),
      serverValue: (A == null ? void 0 : A.serverValue) ?? (A == null ? void 0 : A.value)
    });
  }, Gr = async (A, Z, Le) => {
    if (Le.stopPropagation(), se(null), typeof (A == null ? void 0 : A.onClick) == "function") {
      await A.onClick(Le, Z);
      return;
    }
    G == null || G(A.type, Z);
  }, Yr = (A, Z, Le) => {
    Z.stopPropagation(), Se(Le);
    const qe = Z.currentTarget;
    Mr.current[A] = qe;
    const bt = qe.getBoundingClientRect(), Vt = 192, Xt = Le.length * 40, Wt = window.innerWidth, ar = window.innerHeight, lr = Wt - bt.right < Vt ? bt.left - Vt + bt.width : bt.left, jr = ar - bt.bottom < Xt && bt.top > Xt ? bt.top - Xt - 2 : bt.bottom + 2;
    ft({
      top: Math.max(8, Math.min(jr, ar - Xt - 8)),
      left: Math.max(8, Math.min(lr, Wt - Vt - 8))
    }), se(te === A ? null : A);
  }, Kr = (A) => (gt - 1) * Lt + A + 1, wr = (A) => {
    let Z = A;
    Z && Z.src instanceof File && (Z = { ...Z, src: URL.createObjectURL(Z.src) }), et(Z), Qe(!0);
  }, Rr = (A) => {
    if (!A) return "";
    if (typeof A == "string")
      return A;
    if (A instanceof File)
      return URL.createObjectURL(A);
    if (typeof A == "object") {
      if (typeof A.preview == "string")
        return A.preview;
      if (typeof A.src == "string")
        return A.src;
      if (A.src instanceof File)
        return URL.createObjectURL(A.src);
      if (A.file instanceof File)
        return URL.createObjectURL(A.file);
    }
    return "";
  }, Vr = (A, Z) => {
    const Le = Array.isArray(A) ? A : [];
    if (Le.length === 0)
      return /* @__PURE__ */ s("span", { className: Z.className || "", children: "N/A" });
    const qe = Z.maxPreview || 3, bt = Le.slice(0, qe), Vt = Le.length - bt.length;
    return /* @__PURE__ */ R("div", { className: "flex items-center", children: [
      /* @__PURE__ */ s("div", { className: "flex -space-x-2", children: bt.map((Xt, Wt) => {
        const ar = Rr(Xt);
        return ar ? /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            onClick: (Br) => {
              Br.stopPropagation(), wr({ src: ar, alt: `Gallery ${Wt + 1}` });
            },
            className: "w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden",
            children: /* @__PURE__ */ s(
              "img",
              {
                src: ar,
                alt: `gallery-${Wt + 1}`,
                className: "w-full h-full object-cover"
              }
            )
          },
          `${ar}-${Wt}`
        ) : null;
      }) }),
      Vt > 0 && /* @__PURE__ */ R("span", { className: "ml-2 text-xs font-medium text-gray-600 dark:text-gray-300", children: [
        "+",
        Vt
      ] })
    ] });
  }, Wr = (A, Z) => {
    const Le = Rr(A);
    return Le ? /* @__PURE__ */ s(
      "button",
      {
        type: "button",
        onClick: (qe) => {
          qe.stopPropagation(), wr({ src: Le, alt: Z.title || "Image" });
        },
        className: "w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 overflow-hidden",
        children: /* @__PURE__ */ s(
          "img",
          {
            src: Le,
            alt: Z.title || "image",
            className: "w-full h-full object-cover"
          }
        )
      }
    ) : /* @__PURE__ */ s("span", { className: Z.className || "", children: "N/A" });
  }, xr = (A, Z, Le, qe = null, bt = null) => /* @__PURE__ */ s($e, { children: A ? /* @__PURE__ */ s(
    "img",
    {
      src: A instanceof File ? URL.createObjectURL(A) : A,
      alt: Z || "Avatar",
      onClick: (Vt) => {
        Vt.stopPropagation(), Vt.preventDefault(), wr({ src: A, alt: Z });
      },
      className: `w-10 h-10 cursor-pointer shrink-0 rounded-full object-cover border border-gray-200 dark:border-gray-700 ${Le || ""}`
    }
  ) : /* @__PURE__ */ s($e, { children: qe ? typeof qe == "function" ? qe(bt) : qe : /* @__PURE__ */ s(
    "div",
    {
      className: `w-10 h-10 flex items-center shrink-0 justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${Le || ""}`,
      children: /* @__PURE__ */ s(hn, { className: "w-6 h-6 text-gray-400 dark:text-gray-400" })
    }
  ) }) }), _r = (A, Z) => /* @__PURE__ */ s($e, { children: A ? /* @__PURE__ */ s(
    "audio",
    {
      controls: !0,
      src: A instanceof File ? URL.createObjectURL(A) : A,
      onClick: (Le) => {
        Le.stopPropagation();
      },
      className: `w-64 cursor-pointer ${Z || ""}`
    },
    A instanceof File ? URL.createObjectURL(A) : A
  ) : /* @__PURE__ */ s($e, { children: /* @__PURE__ */ s(
    "div",
    {
      className: `w-12 h-12 flex items-center shrink-0 justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${Z || ""}`,
      children: /* @__PURE__ */ s(ts, { className: "w-6 h-6 text-gray-400 dark:text-gray-400" })
    }
  ) }) }), qr = (A, Z) => /* @__PURE__ */ R("div", { className: `flex items-center space-x-4 ${Z.className || ""}`, children: [
    Z.imageKey ? xr(
      A[Z.imageKey],
      A[Z.titleKey],
      "group-avatar",
      Z.fallback_icon,
      A
    ) : "",
    /* @__PURE__ */ R("div", { children: [
      /* @__PURE__ */ s("p", { className: "font-medium text-gray-900 dark:text-white group-title", children: A[Z.titleKey] || "" }),
      /* @__PURE__ */ s("p", { className: "text-sm text-gray-500 dark:text-gray-400 group-sub-title", children: A[Z.subtitleKey] || "" })
    ] })
  ] }), $r = (A, Z) => {
    var Vt;
    let Le = String(A);
    const qe = Z.variant || "contained";
    let bt = Z.defaultColor;
    if (((Vt = Z == null ? void 0 : Z.chipOptions) == null ? void 0 : Vt.length) > 0) {
      const Xt = Z == null ? void 0 : Z.chipOptions.find((Wt) => Wt.value == A);
      Xt && (Le = Xt.label, bt = Xt.color);
    }
    return /* @__PURE__ */ s(
      ni,
      {
        label: Le,
        variant: qe,
        color: bt,
        className: Z.className || ""
      }
    );
  }, Jr = (A, Z, Le) => {
    const qe = Z[A.key];
    return A.type === "menu_actions" ? /* @__PURE__ */ s("div", { className: `text-left ${A.className || ""}`, children: /* @__PURE__ */ s(
      "button",
      {
        ref: (bt) => {
          Mr.current[Z.id || Z._id] = bt;
        },
        onClick: (bt) => Yr(Z.id || Z._id, bt, A.menuList),
        className: re(
          $.table.actionButton,
          "p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition text-gray-700 dark:text-gray-300"
        ),
        children: /* @__PURE__ */ s(Eo, { className: "h-4 w-4" })
      }
    ) }) : A.type === "index" ? /* @__PURE__ */ s("span", { className: A.className || "", children: Kr(Le) }) : A.type === "group" ? qr(Z, A) : A.type === "chip" ? /* @__PURE__ */ s($e, { children: $r(qe, A) }) : A.type === "date" ? /* @__PURE__ */ s("span", { className: A.className || "", children: en(qe, A.format || "DD MMM YYYY") }) : A.type === "avatar" ? /* @__PURE__ */ s($e, { children: /* @__PURE__ */ s("div", { className: "min-w-[40px]", children: xr(
      qe,
      A.alt,
      A.className,
      A.fallback_icon,
      Z
    ) }) }) : A.type === "audio" ? /* @__PURE__ */ s($e, { children: _r(qe, A.className) }) : A.type === "image" ? /* @__PURE__ */ s($e, { children: Wr(qe, A) }) : A.type === "multiImage" ? /* @__PURE__ */ s($e, { children: Vr(qe, A) }) : /* @__PURE__ */ s("span", { className: A.className || "", children: qe || "N/A" });
  }, Zr = (A) => {
    if (typeof ae == "function")
      return ae(A);
    if (ae)
      return G == null ? void 0 : G("view", A);
  }, Or = (A, Z) => {
    if (A.onClickDetails)
      return G == null ? void 0 : G("view", Z);
    if (typeof A.handleClick == "function")
      return A.handleClick(Z);
  }, _e = () => ae || typeof ae == "function", Be = (A) => A.onClickDetails || typeof A.handleClick == "function", Ut = () => {
    var Br;
    if (!(v != null && v.length) || !((Br = K == null ? void 0 : K.fields) != null && Br.length)) return;
    const A = K.fields.map((lr) => lr.label), Z = Rt.map(
      (lr) => K.fields.map((ia) => {
        const jr = lr == null ? void 0 : lr[ia.key];
        return `"${jr ?? ""}"`;
      })
    ), Le = [
      A.join(","),
      ...Z.map((lr) => lr.join(","))
    ].join(`
`), bt = `export-${en(/* @__PURE__ */ new Date(), "YYYY-MM-DD_HH-mm-ss")}.csv`, Vt = K.fileName || bt, Xt = new Blob([Le], { type: "text/csv;charset=utf-8;" }), Wt = document.createElement("a"), ar = URL.createObjectURL(Xt);
    Wt.href = ar, Wt.download = Vt, document.body.appendChild(Wt), Wt.click(), document.body.removeChild(Wt), URL.revokeObjectURL(ar);
  }, fr = async (A, Z) => {
    typeof A.onClick == "function" && await A.onClick(Z, {
      data: v,
      filteredData: rr,
      sortedData: Kt,
      paginatedData: Rt,
      searchTerm: be,
      appliedFilters: ye,
      currentPage: gt,
      pageSize: Lt,
      totalRecords: sr
    });
  }, kt = async (A, Z) => {
    Z.stopPropagation(), we(!1), typeof A.onClick == "function" && await A.onClick(Z, {
      data: v,
      filteredData: rr,
      sortedData: Kt,
      paginatedData: Rt,
      searchTerm: be,
      appliedFilters: ye,
      currentPage: gt,
      pageSize: Lt,
      totalRecords: sr
    });
  };
  return Ve(() => {
    const A = () => {
      te && se(null);
    };
    return window.addEventListener("scroll", A, !0), () => {
      window.removeEventListener("scroll", A, !0);
    };
  }, [te]), Ve(() => {
    const A = (Z) => {
      Tt.current && !Tt.current.contains(Z.target) && se(null), Zt.current && !Zt.current.contains(Z.target) && we(!1);
    };
    return document.addEventListener("click", A), () => document.removeEventListener("click", A);
  }, []), Ve(() => {
    I != null && I.rows_per_page && (I != null && I.useServerSidePagination) && Jt((I == null ? void 0 : I.rows_per_page) || 50), I.current_page && $t(I.current_page);
  }, [
    I.rows_per_page,
    I == null ? void 0 : I.useServerSidePagination,
    I.current_page
  ]), Ve(() => {
    Re(
      I != null && I.useServerSidePagination ? I.total_records : Kt.length
    ), Kt.length <= Lt * (gt - 1) && !(I != null && I.useServerSidePagination) && $t((A) => A - 1 || 1);
  }, [
    Kt.length,
    I.total_records,
    I == null ? void 0 : I.useServerSidePagination
  ]), Ve(() => {
    if (!(xe != null && xe.enabled)) {
      Ee("");
      return;
    }
    if (ze.some(
      (Z) => Z.value === xe.defaultValue
    )) {
      Ee(xe.defaultValue);
      return;
    }
    Ee("");
  }, [xe, ze]), Ve(() => {
    if (!(xe != null && xe.enabled) || !(xe != null && xe.useServerSideSorting))
      return;
    const A = ze == null ? void 0 : ze.find(
      (Z) => Z.value === St
    );
    T((Z) => ({
      ...Z,
      current_page: 1,
      sort_by: (A == null ? void 0 : A.key) || "",
      sort_order: (A == null ? void 0 : A.order) || ""
    }));
  }, [
    St,
    xe == null ? void 0 : xe.enabled,
    xe == null ? void 0 : xe.useServerSideSorting,
    ze,
    T
  ]), /* @__PURE__ */ R("div", { ref: hr, children: [
    S ? /* @__PURE__ */ s(ad, { rows: 6, columns: 6 }) : /* @__PURE__ */ R($e, { children: [
      /* @__PURE__ */ R(
        "div",
        {
          className: re(
            $.table.toolbar,
            "flex flex-col lg:!flex-row lg:!justify-between gap-4 mb-3"
          ),
          children: [
            /* @__PURE__ */ R("div", { className: "table-heading", children: [
              /* @__PURE__ */ s("h1", { children: n }),
              /* @__PURE__ */ s("p", { children: l }),
              (C == null ? void 0 : C.enabled) && ve.length > 0 && /* @__PURE__ */ s(
                dd,
                {
                  options: ve,
                  value: We,
                  onChange: Qr,
                  className: "mt-4"
                }
              )
            ] }),
            /* @__PURE__ */ R("div", { className: "flex flex-col justify-end items-stretch lg:!items-end gap-2 w-full lg:!w-auto", children: [
              (e || (H == null ? void 0 : H.length) > 0 || (ne == null ? void 0 : ne.length) > 0) && /* @__PURE__ */ R("div", { className: "flex flex-col sm:!flex-row sm:!flex-wrap justify-end items-stretch sm:!items-center gap-2 w-full", children: [
                e && /* @__PURE__ */ R(
                  Yt,
                  {
                    onClick: () => d(!0),
                    variant: "contained",
                    color: "primary",
                    children: [
                      /* @__PURE__ */ s($c, { className: "w-4 h-4 mr-2" }),
                      i || "Add New"
                    ]
                  }
                ),
                H.filter(
                  (A) => (A == null ? void 0 : A.show) !== !1
                ).map((A, Z) => /* @__PURE__ */ R(
                  Yt,
                  {
                    onClick: (Le) => fr(A, Le),
                    variant: A.variant || "contained",
                    color: A.color || "default",
                    className: A.className || "",
                    disabled: A.disabled,
                    children: [
                      A.icon ? /* @__PURE__ */ s("span", { className: "mr-2", children: A.icon }) : null,
                      A.label
                    ]
                  },
                  A.key || `${A.label}-${Z}`
                )),
                ne.filter(
                  (A) => (A == null ? void 0 : A.show) !== !1
                ).length > 0 && /* @__PURE__ */ R("div", { className: "relative", ref: Zt, children: [
                  /* @__PURE__ */ s(
                    Yt,
                    {
                      onClick: (A) => {
                        A.stopPropagation(), we((Z) => !Z);
                      },
                      variant: "outlined",
                      className: "px-2",
                      "aria-label": "More actions",
                      children: /* @__PURE__ */ s(Eo, { className: "w-4 h-4" })
                    }
                  ),
                  Pe && /* @__PURE__ */ s("div", { className: "absolute right-0 mt-2 w-48 z-50 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg py-1", children: ne.filter(
                    (A) => (A == null ? void 0 : A.show) !== !1
                  ).map(
                    (A, Z) => /* @__PURE__ */ R(
                      "button",
                      {
                        type: "button",
                        onClick: (Le) => kt(A, Le),
                        disabled: A.disabled,
                        className: re(
                          "w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center",
                          A.className || ""
                        ),
                        children: [
                          A.icon ? /* @__PURE__ */ s("span", { className: "mr-2 inline-flex", children: A.icon }) : null,
                          A.label
                        ]
                      },
                      A.key || `${A.label}-${Z}`
                    )
                  ) })
                ] })
              ] }),
              /* @__PURE__ */ R("div", { className: "flex flex-col sm:!flex-row sm:!flex-wrap justify-end items-stretch sm:!items-center gap-2 w-full", children: [
                b.enabled && /* @__PURE__ */ s("div", { className: "w-full sm:!w-auto", children: /* @__PURE__ */ R(
                  "div",
                  {
                    className: re(
                      $.table.searchField,
                      "table-search-field"
                    ),
                    children: [
                      /* @__PURE__ */ s(pn, { className: "search-icon" }),
                      /* @__PURE__ */ s(
                        "input",
                        {
                          type: "text",
                          placeholder: b.placeholder || "Search...",
                          value: be,
                          onChange: (A) => yr(A.target.value),
                          className: $.table.searchInput
                        }
                      )
                    ]
                  }
                ) }),
                xe != null && xe.enabled && (ze == null ? void 0 : ze.length) > 0 || ce && N.enabled || K && K.enabled ? /* @__PURE__ */ R("div", { className: "flex items-center justify-end gap-2 w-full sm:!w-auto", children: [
                  ce && N.enabled && /* @__PURE__ */ R("div", { className: "filter-button-wrapper", children: [
                    /* @__PURE__ */ R(
                      Yt,
                      {
                        onClick: () => At(!0),
                        variant: "contained",
                        className: "w-full sm:!w-auto",
                        children: [
                          N.icon !== void 0 ? N.icon !== null ? /* @__PURE__ */ s("span", { className: "mr-2", children: N.icon }) : null : /* @__PURE__ */ s(Jc, { className: "w-4 h-4 mr-2" }),
                          N.label ?? "Filters"
                        ]
                      }
                    ),
                    Object.keys(ye).length > 0 && /* @__PURE__ */ s("span", { className: "red-dot" })
                  ] }),
                  K && K.enabled && /* @__PURE__ */ s("div", { className: "filter-button-wrapper", children: /* @__PURE__ */ R(
                    Yt,
                    {
                      onClick: () => Ut(),
                      variant: "contained",
                      className: "w-full sm:!w-auto",
                      children: [
                        K.icon !== void 0 ? K.icon !== null ? /* @__PURE__ */ s("span", { className: "mr-2", children: K.icon }) : null : /* @__PURE__ */ s(Zc, { className: "w-4 h-4 mr-2" }),
                        K.label ?? "Export CSV"
                      ]
                    }
                  ) }),
                  (xe == null ? void 0 : xe.enabled) && (ze == null ? void 0 : ze.length) > 0 && /* @__PURE__ */ s(
                    nd,
                    {
                      options: ze,
                      value: St,
                      onChange: Lr,
                      clearLabel: xe == null ? void 0 : xe.clearLabel,
                      label: xe == null ? void 0 : xe.label,
                      icon: xe == null ? void 0 : xe.icon
                    }
                  )
                ] }) : null
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ R(
        "div",
        {
          className: re(
            $.table.root,
            $.table.container,
            "table-container"
          ),
          children: [
            /* @__PURE__ */ s("div", { className: "overflow-x-auto", children: /* @__PURE__ */ R("table", { className: $.table.element, children: [
              /* @__PURE__ */ s("thead", { className: $.table.head, children: /* @__PURE__ */ s("tr", { className: $.table.headRow, children: c.map((A) => /* @__PURE__ */ s(
                "th",
                {
                  className: re(
                    $.table.headCell,
                    "table-head-data",
                    A.headClass || ""
                  ),
                  children: A.title
                },
                A.key
              )) }) }),
              /* @__PURE__ */ s("tbody", { className: $.table.body, children: Rt.length === 0 ? /* @__PURE__ */ s("tr", { children: /* @__PURE__ */ s(
                "td",
                {
                  colSpan: c.length,
                  className: re(
                    $.table.noData,
                    "no-data-message"
                  ),
                  children: U
                }
              ) }) : Rt.map((A, Z) => /* @__PURE__ */ s(
                "tr",
                {
                  className: re(
                    $.table.row,
                    "table-row",
                    _e() ? "cursor-pointer" : ""
                  ),
                  onClick: () => {
                    _e() && Zr(A);
                  },
                  children: c.map((Le) => /* @__PURE__ */ s(
                    "td",
                    {
                      className: re(
                        $.table.cell,
                        "table-data",
                        Le.type == "audio" ? "" : "max-w-[300px]",
                        "truncate",
                        Be(Le) ? "cursor-pointer" : ""
                      ),
                      title: Le.showTooltip ? String(A[Le.key] ?? "") : void 0,
                      onClick: (qe) => {
                        Be(Le) && (qe.stopPropagation(), qe.preventDefault(), Or(Le, A));
                      },
                      children: Le.render ? Le.render(A, Z) : Jr(Le, A, Z)
                    },
                    Le.key
                  ))
                },
                A.id || A._id || Z
              )) })
            ] }) }),
            (I == null ? void 0 : I.enabled) && Kt.length > 0 && /* @__PURE__ */ R(
              "div",
              {
                className: re(
                  $.table.pagination,
                  "pagination-wrapper"
                ),
                children: [
                  /* @__PURE__ */ R("span", { children: [
                    "Showing ",
                    (gt - 1) * Lt + 1,
                    " to",
                    " ",
                    Math.min(gt * Lt, sr),
                    " of",
                    " ",
                    sr,
                    " results"
                  ] }),
                  /* @__PURE__ */ R("div", { className: "flex items-center gap-4", children: [
                    /* @__PURE__ */ R("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ s("span", { children: "Rows per page:" }),
                      /* @__PURE__ */ s(
                        "select",
                        {
                          value: Lt,
                          onChange: (A) => {
                            const Z = Number(A.target.value);
                            Jt(Z), $t(1), I.useServerSidePagination && T(
                              (Le) => ({
                                ...Le,
                                current_page: 1,
                                rows_per_page: Z
                              })
                            );
                          },
                          className: "rows-number-select",
                          children: [10, 25, 50, 100].map((A) => /* @__PURE__ */ s("option", { value: A, children: A }, A))
                        }
                      )
                    ] }),
                    /* @__PURE__ */ R("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ s(
                        "button",
                        {
                          onClick: () => {
                            if (gt > 1) {
                              const A = gt - 1;
                              $t(A), I.useServerSidePagination && T(
                                (Z) => ({
                                  ...Z,
                                  current_page: A
                                })
                              );
                            }
                          },
                          disabled: gt === 1,
                          className: "arrow-icons",
                          children: /* @__PURE__ */ s(Xc, { className: "h-4 w-4" })
                        }
                      ),
                      /* @__PURE__ */ R("span", { children: [
                        "Page ",
                        gt,
                        " of ",
                        Je
                      ] }),
                      /* @__PURE__ */ s(
                        "button",
                        {
                          onClick: () => {
                            if (gt < Je) {
                              const A = gt + 1;
                              $t(A), I.useServerSidePagination && T(
                                (Z) => ({
                                  ...Z,
                                  current_page: A
                                })
                              );
                            }
                          },
                          disabled: gt === Je,
                          className: "arrow-icons",
                          children: /* @__PURE__ */ s(es, { className: "h-4 w-4" })
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
    te && dr && fn(
      /* @__PURE__ */ s(
        "div",
        {
          ref: Tt,
          style: {
            position: "fixed",
            top: `${Ie.top}px`,
            left: `${Ie.left}px`,
            zIndex: 9999
          },
          className: re(
            $.table.menu,
            "w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg border border-gray-200 dark:border-gray-600"
          ),
          children: ee.map((A, Z) => /* @__PURE__ */ R(
            "button",
            {
              onClick: (Le) => Gr(
                A,
                v.find(
                  (qe) => qe.id === te || qe._id == te
                ),
                Le
              ),
              className: re(
                $.table.menuItem,
                "w-full flex items-center gap-2 px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-600",
                A.variant === "danger" ? "text-red-600 dark:text-red-500" : "text-gray-700 dark:text-gray-200"
              ),
              children: [
                A.icon && /* @__PURE__ */ s("span", { className: "shrink-0", children: A.icon }),
                A.title
              ]
            },
            Z
          ))
        }
      ),
      dr
    ),
    ce && /* @__PURE__ */ s(
      rd,
      {
        isOpen: it,
        onClose: () => At(!1),
        config: ce,
        onApply: (A) => {
          Ge(A), V == null || V(A);
        }
      }
    ),
    dt && Ue && /* @__PURE__ */ s(
      pr,
      {
        src: Ue.src,
        alt: Ue.alt,
        isOpen: dt,
        setIsOpen: Qe
      }
    )
  ] });
}, Na = ({
  isOpen: o,
  onClose: d,
  icon: n,
  title: i,
  children: l,
  size: e = "md",
  actionButtons: v = [],
  onFormSubmit: c = () => {
  },
  loadingBtn: S = !1,
  executeFunction: b = () => {
  },
  selectedItem: N = null,
  footerConfig: L,
  classNames: C
}) => {
  if (!o) return null;
  const I = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-full"
  }, K = v.length > 0 || !!(L != null && L.cancelButton);
  return /* @__PURE__ */ R(
    "div",
    {
      className: re(
        $.modal.root,
        "fixed inset-0 z-50 flex items-center justify-center p-4"
      ),
      children: [
        /* @__PURE__ */ s(
          "div",
          {
            className: re(
              $.modal.overlay,
              "fixed inset-0 bg-gray-500 opacity-75",
              C == null ? void 0 : C.overlay
            )
          }
        ),
        /* @__PURE__ */ R(
          "div",
          {
            className: re(
              $.modal.container,
              "relative bg-white rounded-lg shadow-xl w-full max-h-[90vh] flex flex-col dark:bg-gray-800",
              I[e] || I.md,
              C == null ? void 0 : C.container
            ),
            children: [
              /* @__PURE__ */ R(
                "div",
                {
                  className: re(
                    $.modal.header,
                    "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0",
                    C == null ? void 0 : C.header
                  ),
                  children: [
                    /* @__PURE__ */ R("div", { className: "flex items-center gap-1", children: [
                      n && /* @__PURE__ */ s("span", { children: n }),
                      /* @__PURE__ */ s(
                        "h3",
                        {
                          className: re(
                            $.modal.title,
                            "text-lg font-medium text-gray-900 dark:text-white",
                            C == null ? void 0 : C.title
                          ),
                          children: i
                        }
                      )
                    ] }),
                    /* @__PURE__ */ s(
                      "button",
                      {
                        onClick: () => d(),
                        className: re(
                          $.modal.closeButton,
                          "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
                          C == null ? void 0 : C.closeButton
                        ),
                        children: /* @__PURE__ */ s(ja, { className: "w-6 h-6" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ s(
                "div",
                {
                  className: re(
                    $.modal.body,
                    "flex-1 overflow-y-auto p-4",
                    C == null ? void 0 : C.body
                  ),
                  children: l
                }
              ),
              K && /* @__PURE__ */ R(
                "div",
                {
                  className: re(
                    $.modal.footer,
                    "px-4 py-3 flex justify-end gap-3 border-t border-gray-200 dark:border-gray-700 sm:!px-6",
                    C == null ? void 0 : C.footer
                  ),
                  children: [
                    (L == null ? void 0 : L.cancelButton) && /* @__PURE__ */ s(
                      Yt,
                      {
                        onClick: () => d(),
                        variant: "outlined",
                        color: "default",
                        className: re(
                          $.modal.actionButton,
                          "min-w-[100px]"
                        ),
                        type: "button",
                        children: (L == null ? void 0 : L.cancelText) || "Cancel"
                      }
                    ),
                    v.map((H, ne) => /* @__PURE__ */ s(
                      Yt,
                      {
                        onClick: (U) => {
                          H.type == "submit" ? c(U) : b(
                            () => {
                              var G;
                              return Promise.resolve((G = H == null ? void 0 : H.onClick) == null ? void 0 : G.call(H, U, N));
                            },
                            (G) => d == null ? void 0 : d(G)
                          );
                        },
                        disabled: S || H.disabled,
                        variant: H.variant || "contained",
                        color: H.color || "primary",
                        className: re(
                          $.modal.actionButton,
                          "min-w-[100px]",
                          H.className || ""
                        ),
                        type: H.type || "button",
                        children: S ? /* @__PURE__ */ R(
                          "div",
                          {
                            className: re(
                              $.modal.loadingIndicator,
                              "flex items-center"
                            ),
                            children: [
                              /* @__PURE__ */ s("div", { className: "animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-2 border-t-white mr-2" }),
                              H.label || "Submit",
                              "..."
                            ]
                          }
                        ) : H.label || "Submit"
                      },
                      `${H.label || "action"}-${ne}`
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
}, Ba = ({
  config: o,
  onSubmit: d,
  initialData: n,
  fetchRowDetails: i,
  type: l
}) => {
  const { enqueueSnackbar: e } = oa(), v = n || {}, { formClass: c = "grid grid-cols-12 gap-4", formFields: S = [] } = o || {}, [b, N] = le(v), [L, C] = le(!1), [I, K] = le({}), H = async () => {
    i == null || i(v).then((G) => {
      N(G.data);
    }).catch((G) => {
      e(G.message, { variant: "error" });
    }).finally(() => {
      C(!1);
    });
  };
  Ve(() => {
    i instanceof Function ? (C(!0), H()) : (N(v), C(!1));
  }, []);
  const ne = (G, T) => {
    N((V) => ({ ...V, [G]: T })), K((V) => ({
      ...V,
      [G]: ""
    }));
  }, U = (G) => {
    G.preventDefault();
    const T = G.currentTarget;
    if (!T.checkValidity()) {
      T.reportValidity();
      return;
    }
    const V = {};
    let ce = !1;
    for (const ae of S) {
      const be = b[ae.key] || "";
      if (ae.customValidation) {
        const pe = ae.customValidation(be);
        if (pe !== !1 && (V[ae.key] = pe, !ce)) {
          const te = T.querySelector(
            `[id="field-${ae.key}"]`
          );
          te == null || te.focus(), ce = !0;
        }
      }
    }
    K(V), !(Object.keys(V).length > 0) && d(b);
  };
  return L ? /* @__PURE__ */ s(
    "div",
    {
      className: re(
        $.form.loading,
        "flex items-center justify-center h-64"
      ),
      children: /* @__PURE__ */ s(
        "div",
        {
          className: "rounded-full border-4 border-primary-500 border-t-gray-200 animate-spin w-8 h-8",
          style: {
            borderTopColor: "border-primary-500"
          }
        }
      )
    }
  ) : /* @__PURE__ */ s(
    "form",
    {
      id: l === "add" ? "addForm" : l === "edit" ? "editForm" : "defaultForm",
      onSubmit: U,
      className: re($.form.root, c),
      noValidate: !1,
      children: S.map((G) => /* @__PURE__ */ s(
        ii,
        {
          field: G,
          formData: b,
          errorMessage: I[G.key] || "",
          handleChange: ne
        },
        G.key
      ))
    }
  );
};
function li({
  data: o,
  config: d,
  fetchRowDetails: n
}) {
  const { enqueueSnackbar: i } = oa(), {
    fields: l = [],
    containerClass: e,
    variant: v = "default",
    styles: c = {}
  } = d || {}, S = o || {}, [b, N] = le(S), [L, C] = le(!0), I = async () => {
    n == null || n(S).then((H) => {
      N(H.data);
    }).catch((H) => {
      i(H.message, { variant: "error" });
    }).finally(() => {
      C(!1);
    });
  };
  if (Ve(() => {
    n instanceof Function ? I() : (N(S), C(!1));
  }, []), L)
    return /* @__PURE__ */ s(
      "div",
      {
        className: re(
          $.form.loading,
          "flex items-center justify-center h-64"
        ),
        children: /* @__PURE__ */ s(
          "div",
          {
            className: "rounded-full border-4 border-primary-500 border-t-gray-200 animate-spin w-8 h-8",
            style: {
              borderTopColor: "border-primary-500"
            }
          }
        )
      }
    );
  const K = {
    default: "grid grid-cols-12 gap-4",
    // card: each field is a standalone elevated card in a 12-col grid
    card: "grid grid-cols-12 gap-3",
    // split: clean property-sheet — bordered box, rows divided by hairlines
    split: "rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden divide-y divide-gray-100 dark:divide-gray-800"
  };
  return /* @__PURE__ */ s($e, { children: /* @__PURE__ */ s(
    "div",
    {
      className: re(
        $.details.root,
        $.details.container,
        K[v] || K.default,
        e || "",
        c.containerClass || ""
      ),
      children: l.map((H) => H.renderCondition && typeof H.renderCondition == "function" && !H.renderCondition(b) ? null : H.type == "group" ? /* @__PURE__ */ s(
        ri,
        {
          col: H,
          data: b,
          uiVariant: v,
          styleConfig: c
        },
        H.key || H.titleKey
      ) : H.type == "cardGroup" ? /* @__PURE__ */ s(
        ai,
        {
          col: H,
          data: b,
          uiVariant: v,
          styleConfig: c
        },
        H.key || H.titleKey
      ) : /* @__PURE__ */ s(
        oi,
        {
          col: H,
          data: b,
          uiVariant: v,
          styleConfig: c
        },
        H.key || H.label
      ))
    }
  ) });
}
let Mt = null, Ma = null;
function md() {
  return Mt ? Promise.resolve(Mt) : Ma || (Ma = import("react-router-dom").then((o) => (Mt = o, o)).catch(() => (Mt = null, console.warn("[CrudPage] react-router-dom not found — modal mode."), null)), Ma);
}
function Xa(o, d) {
  const n = o.split("/").filter(Boolean), i = d.split("/").filter(Boolean);
  if (n.length !== i.length) return null;
  const l = {};
  for (let e = 0; e < n.length; e++)
    if (n[e].startsWith(":"))
      l[n[e].slice(1)] = i[e];
    else if (n[e] !== i[e])
      return null;
  return l;
}
const yn = ({ title: o, onBack: d, children: n, footer: i }) => /* @__PURE__ */ R("div", { className: "racm-root flex flex-col min-h-screen w-full bg-white dark:bg-gray-900", children: [
  /* @__PURE__ */ R("div", { className: "flex items-center gap-3 px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 sticky top-0 z-10", children: [
    /* @__PURE__ */ s(
      "button",
      {
        onClick: d,
        className: "inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 transition-colors",
        children: /* @__PURE__ */ s(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            className: "w-5 h-5",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /* @__PURE__ */ s("path", { d: "M19 12H5M12 5l-7 7 7 7" })
          }
        )
      }
    ),
    /* @__PURE__ */ s("div", { className: "w-px h-5 bg-gray-300 dark:bg-gray-600" }),
    /* @__PURE__ */ s("h1", { className: "text-lg font-semibold text-gray-800 dark:text-white", children: o })
  ] }),
  /* @__PURE__ */ s("div", { className: "flex-1 p-6 w-full", children: n }),
  i && /* @__PURE__ */ s("div", { className: "sticky bottom-0 z-10 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-6 py-4", children: i })
] }), ci = ({ formId: o, actionButtons: d = [], loading: n, onBack: i }) => {
  const l = {
    error: "bg-red-600 hover:bg-red-700 text-white",
    warning: "bg-yellow-500 hover:bg-yellow-600 text-white",
    success: "bg-green-600 hover:bg-green-700 text-white",
    default: "bg-primary-600 hover:bg-primary-700 text-white"
  }, e = d.find((c) => c.type === "submit"), v = d.filter((c) => c.type !== "submit");
  return /* @__PURE__ */ R("div", { className: "flex items-center justify-end gap-3", children: [
    v.map((c, S) => /* @__PURE__ */ s(
      "button",
      {
        type: "button",
        disabled: c.disabled || n,
        onClick: (b) => {
          var N;
          return (N = c.onClick) == null ? void 0 : N.call(c, b);
        },
        className: `px-4 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-60 ${l[c.color || "default"]}`,
        children: c.label
      },
      S
    )),
    /* @__PURE__ */ R(
      "button",
      {
        type: "button",
        disabled: n,
        onClick: () => {
          var c;
          return (c = document.getElementById(o)) == null ? void 0 : c.dispatchEvent(
            new Event("submit", { cancelable: !0, bubbles: !0 })
          );
        },
        className: "inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium bg-primary-600 hover:bg-primary-700 text-white transition-colors disabled:opacity-60",
        children: [
          n && /* @__PURE__ */ s("span", { className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" }),
          (e == null ? void 0 : e.label) ?? "Save"
        ]
      }
    )
  ] });
}, pd = ({
  modalConfig: o,
  enqueueSnackbar: d,
  hooks: n,
  onSuccess: i
  // ← ADDED
}) => {
  var S, b;
  const l = n.useNavigate(), [e, v] = le(!1), c = async (N) => {
    var L, C;
    v(!0);
    try {
      const I = await ((C = (L = o == null ? void 0 : o.addModal) == null ? void 0 : L.handleSubmit) == null ? void 0 : C.call(L, N));
      i == null || i("add", I), l(-1);
    } catch (I) {
      d((I == null ? void 0 : I.message) || "Error", { variant: "error" });
    } finally {
      v(!1);
    }
  };
  return /* @__PURE__ */ s(
    yn,
    {
      title: ((S = o == null ? void 0 : o.addModal) == null ? void 0 : S.title) ?? "Add",
      onBack: () => l(-1),
      footer: /* @__PURE__ */ s(
        ci,
        {
          formId: "addForm",
          actionButtons: ((b = o == null ? void 0 : o.addModal) == null ? void 0 : b.actionButtons) || [],
          loading: e,
          onBack: () => l(-1)
        }
      ),
      children: /* @__PURE__ */ s(
        Ba,
        {
          config: (o == null ? void 0 : o.addModal) || {},
          onSubmit: c,
          initialData: {},
          type: "add",
          loading: e
        }
      )
    }
  );
}, hd = ({
  modalConfig: o,
  fetchRowDetails: d,
  enqueueSnackbar: n,
  hooks: i,
  routeParams: l,
  onSuccess: e
}) => {
  var H, ne, U, G;
  const v = i.useNavigate(), c = i.useLocation(), [S, b] = le(((H = c == null ? void 0 : c.state) == null ? void 0 : H.item) ?? null), [N, L] = le(!((ne = c == null ? void 0 : c.state) != null && ne.item)), [C, I] = le(!1);
  Ve(() => {
    !S && l.id && d ? d({ id: l.id }).then((T) => b((T == null ? void 0 : T.data) ?? T)).finally(() => L(!1)) : L(!1);
  }, [l.id]);
  const K = async (T) => {
    var V, ce;
    I(!0);
    try {
      const ae = await ((ce = (V = o == null ? void 0 : o.editModal) == null ? void 0 : V.handleSubmit) == null ? void 0 : ce.call(V, T, S));
      e == null || e("edit", ae), v(-1);
    } catch (ae) {
      n((ae == null ? void 0 : ae.message) || "Error", { variant: "error" });
    } finally {
      I(!1);
    }
  };
  return N ? /* @__PURE__ */ s("div", { className: "flex justify-center p-12", children: /* @__PURE__ */ s("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-400" }) }) : /* @__PURE__ */ s(
    yn,
    {
      title: ((U = o == null ? void 0 : o.editModal) == null ? void 0 : U.title) ?? "Edit",
      onBack: () => v(-1),
      footer: /* @__PURE__ */ s(
        ci,
        {
          formId: "editForm",
          actionButtons: ((G = o == null ? void 0 : o.editModal) == null ? void 0 : G.actionButtons) || [],
          loading: C,
          onBack: () => v(-1)
        }
      ),
      children: /* @__PURE__ */ s(
        Ba,
        {
          config: (o == null ? void 0 : o.editModal) || {},
          onSubmit: K,
          initialData: S ?? {},
          type: "edit",
          loading: C,
          fetchRowDetails: d
        }
      )
    }
  );
}, fd = ({ modalConfig: o, fetchRowDetails: d, hooks: n, routeParams: i }) => {
  var N, L, C;
  const l = n.useNavigate(), e = n.useLocation(), [v, c] = le(((N = e == null ? void 0 : e.state) == null ? void 0 : N.item) ?? null), [S, b] = le(!((L = e == null ? void 0 : e.state) != null && L.item));
  return Ve(() => {
    !v && i.id && d ? d({ id: i.id }).then((I) => c((I == null ? void 0 : I.data) ?? I)).finally(() => b(!1)) : b(!1);
  }, [i.id]), S ? /* @__PURE__ */ s("div", { className: "flex justify-center p-12", children: /* @__PURE__ */ s("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-400" }) }) : /* @__PURE__ */ s(
    yn,
    {
      title: ((C = o == null ? void 0 : o.viewModal) == null ? void 0 : C.title) ?? "Details",
      onBack: () => l(-1),
      children: /* @__PURE__ */ s(
        li,
        {
          data: v,
          fetchRowDetails: d,
          config: (o == null ? void 0 : o.viewModal) || {}
        }
      )
    }
  );
}, mn = ({ config: o, onNavigate: d, rrdHooks: n }) => {
  var Re, Je, Rt, Tt, Zt, hr, Mr, ut, dr, yr, Lr, Qr, Gr, Yr, Kr, wr, Rr, Vr, Wr, xr, _r, qr, $r, Jr, Zr, Or;
  const { enqueueSnackbar: i } = oa(), {
    title: l,
    fetchData: e,
    fetchRowDetails: v,
    isStaticData: c = !1,
    tableConfig: S,
    modalConfig: b,
    filterConfig: N
  } = o, L = !!o.routes && !!n, C = !!o.routes && ((Re = o == null ? void 0 : o.routes) == null ? void 0 : Re.add) && !!n, I = !!o.routes && ((Je = o == null ? void 0 : o.routes) == null ? void 0 : Je.edit) && !!n, K = !!o.routes && ((Rt = o == null ? void 0 : o.routes) == null ? void 0 : Rt.view) && !!n, H = (Tt = n == null ? void 0 : n.useLocation) == null ? void 0 : Tt.call(n), ne = (H == null ? void 0 : H.pathname) ?? "", U = br(() => {
    if (!L || !o.routes) return null;
    if (o.routes.add) {
      const _e = Xa(o.routes.add, ne);
      if (_e) return { type: "add", params: _e };
    }
    if (o.routes.edit) {
      const _e = Xa(o.routes.edit, ne);
      if (_e) return { type: "edit", params: _e };
    }
    if (o.routes.view) {
      const _e = Xa(o.routes.view, ne);
      if (_e) return { type: "view", params: _e };
    }
    return null;
  }, [ne, L, o.routes]), [G, T] = le(!0), [V, ce] = le(!1), [ae, be] = le([]), [pe, te] = le(null), [se, ee] = le({
    search: "",
    rows_per_page: 50,
    current_page: 1,
    sort_by: "",
    sort_order: ""
  }), [Se, Ie] = le({}), [ft, it] = le(!1), [At, ye] = le(!1), [Ge, Pe] = le(!1), [we, ve] = le(!1), [Ke, We] = le(!1), [Ne, xe] = le(
    null
  ), ge = (_e, Be) => _e.replace(/:[^/]+/, String((Be == null ? void 0 : Be.id) ?? (Be == null ? void 0 : Be._id) ?? "")), ze = (_e, Be) => {
    if (L && o.routes) {
      if (_e === "edit" && o.routes.edit) {
        d(ge(o.routes.edit, Be), { state: { item: Be } });
        return;
      }
      if (_e === "view" && o.routes.view) {
        d(ge(o.routes.view, Be), { state: { item: Be } });
        return;
      }
    }
    _e === "edit" ? (xe(Be), Pe(!0)) : _e === "view" ? (xe(Be), We(!0)) : _e === "delete" && (xe(Be), ve(!0));
  }, St = () => {
    var _e;
    if (L && ((_e = o.routes) != null && _e.add)) {
      d(o.routes.add);
      return;
    }
    ye(!0);
  }, Ee = async (_e, Be, Ut = "", fr = "") => {
    ce(!0);
    try {
      if (!_e) return;
      const kt = await _e();
      (Ut || kt != null && kt.message) && i(Ut || kt.message || "Success", {
        variant: "success"
      }), Be == null || Be(kt);
    } catch (kt) {
      (fr || kt != null && kt.message) && i(fr || kt.message || "Error occurred", {
        variant: "error"
      });
    } finally {
      ce(!1);
    }
  }, Ue = (_e) => {
    c ? (be((Be) => [_e.newObject, ...Be]), te((Be) => ({ ...Be, current_page: 1 }))) : (ee((Be) => ({ ...Be, current_page: 1 })), se.current_page === 1 && Qe()), ye(!1);
  }, et = (_e) => {
    c ? be(
      (Be) => Be.map(
        (Ut) => Ut.id === _e.targetObject.id ? { ...Ut, ..._e.newObject } : Ut
      )
    ) : Qe(), Pe(!1);
  }, dt = (_e) => {
    if (!_e) {
      ve(!1), xe(null);
      return;
    }
    c ? be(
      (Be) => Be.filter((Ut) => Ut.id !== _e.targetObject.id)
    ) : ae.length === 1 && se.current_page > 1 ? ee((Be) => ({
      ...Be,
      current_page: Be.current_page - 1
    })) : Qe(), ve(!1), xe(null);
  }, Qe = async () => {
    T(!0);
    try {
      const _e = await e({
        ...se,
        ...Se
      });
      be(_e.data || []), te(_e.pagination || null);
    } catch (_e) {
      i(_e.message || "Failed to fetch data", {
        variant: "error"
      });
    } finally {
      T(!1);
    }
  }, pt = (_e) => {
    var Be;
    Ie(() => ({ ..._e })), (Be = S == null ? void 0 : S.filter) != null && Be.useServerSideFilters && it((Ut) => !Ut);
  }, rr = (_e, Be) => _e.filter(
    (Ut) => Object.entries(Be).every(([fr, kt]) => {
      if (kt === "" || kt === null || kt === void 0) return !0;
      if (Array.isArray(kt)) {
        if (kt.length === 0) return !0;
        const kr = Ut[fr];
        return Array.isArray(kr) ? kt.some((Dr) => kr.includes(Dr)) : kt.includes(kr);
      }
      return Ut[fr] === kt;
    })
  ), Kt = br(() => {
    var _e;
    return (_e = S == null ? void 0 : S.filter) != null && _e.useServerSideFilters ? ae : rr(ae, Se);
  }, [ae, Se, (Zt = S == null ? void 0 : S.filter) == null ? void 0 : Zt.useServerSideFilters]);
  Ve(() => {
    Qe();
  }, [
    se.search,
    se.rows_per_page,
    se.current_page,
    se.sort_by,
    se.sort_order,
    se.active_tab,
    ft
  ]);
  const gt = (hr = b == null ? void 0 : b.viewModal) == null ? void 0 : hr.component, Lt = {
    modalConfig: b,
    fetchRowDetails: v,
    enqueueSnackbar: i,
    hooks: n,
    onSuccess: (_e, Be) => {
      _e === "add" ? Ue(Be) : _e === "edit" && et(Be);
    }
    // ← ADDED
  };
  if ((U == null ? void 0 : U.type) === "add") return /* @__PURE__ */ s(pd, { ...Lt });
  if ((U == null ? void 0 : U.type) === "edit")
    return /* @__PURE__ */ s(hd, { ...Lt, routeParams: U.params });
  if ((U == null ? void 0 : U.type) === "view")
    return /* @__PURE__ */ s(fd, { ...Lt, routeParams: U.params });
  const Jt = (_e) => Ee(
    () => {
      var Be;
      return (Be = b == null ? void 0 : b.addModal) != null && Be.handleSubmit ? b.addModal.handleSubmit(_e) : Promise.resolve({ newObject: null });
    },
    Ue
  ), sr = (_e) => Ee(
    () => {
      var Be;
      return (Be = b == null ? void 0 : b.editModal) != null && Be.handleSubmit ? b.editModal.handleSubmit(_e, Ne) : Promise.resolve({ newObject: null, targetObject: null });
    },
    et
  );
  return /* @__PURE__ */ R("div", { className: $.crudPage.root, children: [
    /* @__PURE__ */ s(
      ud,
      {
        title: l,
        setShowAdd: St,
        description: o.description,
        buttonText: o.buttonText,
        showAddButton: !!(b != null && b.addModal),
        config: {
          ...S,
          pagination: { ...S.pagination, ...pe },
          data: Kt,
          setServerSidePaginationData: ee,
          onMenuAction: ze,
          filterConfig: N,
          onFilterApply: pt,
          loading: G
        }
      }
    ),
    !C && /* @__PURE__ */ s(
      Na,
      {
        isOpen: At,
        onClose: () => {
          V || ye(!1);
        },
        icon: (Mr = b == null ? void 0 : b.addModal) == null ? void 0 : Mr.icon,
        title: ((ut = b == null ? void 0 : b.addModal) == null ? void 0 : ut.title) || "Add New",
        size: ((dr = b == null ? void 0 : b.addModal) == null ? void 0 : dr.size) || "md",
        onFormSubmit: () => {
          var _e;
          return (_e = document.querySelector("#addForm")) == null ? void 0 : _e.requestSubmit();
        },
        loadingBtn: V,
        actionButtons: ((yr = b == null ? void 0 : b.addModal) == null ? void 0 : yr.actionButtons) || [],
        children: /* @__PURE__ */ s(
          Ba,
          {
            config: (b == null ? void 0 : b.addModal) || {},
            onSubmit: Jt,
            initialData: {},
            type: "add",
            loading: V
          }
        )
      }
    ),
    !I && /* @__PURE__ */ s(
      Na,
      {
        isOpen: Ge,
        onClose: () => {
          V || Pe(!1);
        },
        icon: (Lr = b == null ? void 0 : b.editModal) == null ? void 0 : Lr.icon,
        title: ((Qr = b == null ? void 0 : b.editModal) == null ? void 0 : Qr.title) || "Edit",
        size: ((Gr = b == null ? void 0 : b.editModal) == null ? void 0 : Gr.size) || "md",
        onFormSubmit: () => {
          var _e;
          return (_e = document.querySelector("#editForm")) == null ? void 0 : _e.requestSubmit();
        },
        actionButtons: ((Yr = b == null ? void 0 : b.editModal) == null ? void 0 : Yr.actionButtons) || [],
        loadingBtn: V,
        children: /* @__PURE__ */ s(
          Ba,
          {
            config: (b == null ? void 0 : b.editModal) || {},
            onSubmit: sr,
            initialData: Ne,
            type: "edit",
            loading: V,
            fetchRowDetails: v
          }
        )
      }
    ),
    /* @__PURE__ */ s(
      Na,
      {
        isOpen: we,
        onClose: (_e) => dt(_e),
        icon: ((Kr = b == null ? void 0 : b.deleteModal) == null ? void 0 : Kr.icon) || /* @__PURE__ */ s(Bt, { icon: "ph:warning-bold", className: "w-6 h-6 text-red-500" }),
        title: ((wr = b == null ? void 0 : b.deleteModal) == null ? void 0 : wr.title) || "Confirm Delete",
        size: ((Rr = b == null ? void 0 : b.deleteModal) == null ? void 0 : Rr.size) || "md",
        loading: V,
        actionButtons: ((Vr = b == null ? void 0 : b.deleteModal) == null ? void 0 : Vr.actionButtons) || [],
        executeFunction: Ee,
        selectedItem: Ne,
        children: /* @__PURE__ */ s(
          "div",
          {
            className: re(
              $.crudPage.deleteContent,
              "flex items-center space-x-2 py-3"
            ),
            children: /* @__PURE__ */ R("div", { children: [
              /* @__PURE__ */ s("p", { className: "text-md text-gray-700 dark:text-white", children: ((Wr = b == null ? void 0 : b.deleteModal) == null ? void 0 : Wr.confirmText) || "Are you sure you want to delete this item?" }),
              ((xr = b == null ? void 0 : b.deleteModal) == null ? void 0 : xr.referenceKey) && /* @__PURE__ */ s("p", { className: "text-md font-semibold text-gray-700 dark:text-white", children: Ne == null ? void 0 : Ne[(_r = b == null ? void 0 : b.deleteModal) == null ? void 0 : _r.referenceKey] })
            ] })
          }
        )
      }
    ),
    !K && (b == null ? void 0 : b.viewModal) && /* @__PURE__ */ s(
      Na,
      {
        isOpen: Ke,
        onClose: () => {
          We(!1), xe(null);
        },
        icon: (qr = b == null ? void 0 : b.viewModal) == null ? void 0 : qr.icon,
        title: (($r = b == null ? void 0 : b.viewModal) == null ? void 0 : $r.title) || "View Details",
        size: ((Jr = b == null ? void 0 : b.viewModal) == null ? void 0 : Jr.size) || "lg",
        footerConfig: (Zr = b == null ? void 0 : b.viewModal) == null ? void 0 : Zr.footer,
        classNames: (Or = b == null ? void 0 : b.viewModal) == null ? void 0 : Or.modalClassNames,
        children: gt ? /* @__PURE__ */ s(gt, { data: Ne }) : /* @__PURE__ */ s(
          li,
          {
            data: Ne,
            fetchRowDetails: v,
            config: (b == null ? void 0 : b.viewModal) || {}
          }
        )
      }
    )
  ] });
}, gd = ({
  config: o
}) => {
  if (Mt == null ? void 0 : Mt.useInRouterContext()) {
    const n = Mt == null ? void 0 : Mt.useNavigate(), i = {
      useNavigate: (Mt == null ? void 0 : Mt.useNavigate) || null,
      useParams: (Mt == null ? void 0 : Mt.useParams) || null,
      useLocation: (Mt == null ? void 0 : Mt.useLocation) || null
    };
    return /* @__PURE__ */ s(
      mn,
      {
        config: o,
        onNavigate: (l, e) => n(l, e),
        rrdHooks: i
      }
    );
  } else
    return /* @__PURE__ */ s(mn, { config: o, onNavigate: () => {
    }, rrdHooks: null });
}, vd = ({ config: o }) => {
  const [d, n] = le(Mt ? "available" : "loading");
  return Ve(() => {
    if (Mt) {
      n("available");
      return;
    }
    md().then((i) => n(i ? "available" : "unavailable"));
  }, []), d === "loading" ? null : d === "available" && o.routes ? /* @__PURE__ */ s(gd, { config: o }) : /* @__PURE__ */ s(mn, { config: o, onNavigate: () => {
  }, rrdHooks: null });
};
function bd({
  children: o
}) {
  return /* @__PURE__ */ s(
    ns,
    {
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right"
      },
      action: (d) => /* @__PURE__ */ s(
        "button",
        {
          onClick: () => {
            window.dispatchEvent(
              new CustomEvent("closeSnackbar", { detail: d })
            );
          },
          className: "p-1 hover:bg-white/20 rounded-full transition-colors duration-200 text-white flex items-center justify-center",
          children: /* @__PURE__ */ s(ja, { className: "h-4 w-4" })
        }
      ),
      maxSnack: 3,
      autoHideDuration: 3e3,
      children: o
    }
  );
}
const yd = () => {
  if (typeof document > "u" || document.getElementById("react-admin-crud-manager-styles")) return;
  const o = document.createElement("style");
  o.id = "react-admin-crud-manager-styles", o.textContent = os, document.head.appendChild(o);
};
function Sd({ config: o }) {
  return Ve(() => {
    yd();
  }, []), /* @__PURE__ */ s("div", { className: "racm-root", children: /* @__PURE__ */ s(bd, { children: /* @__PURE__ */ s(vd, { config: o }) }) });
}
export {
  Sd as default
};
//# sourceMappingURL=index.es.js.map
