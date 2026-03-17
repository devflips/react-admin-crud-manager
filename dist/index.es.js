import { jsx as t, Fragment as Z, jsxs as h } from "react/jsx-runtime";
import * as $e from "react";
import tr, { useState as _, useRef as le, useEffect as q, useCallback as ot, useMemo as Re } from "react";
import { Info as nt, ChevronDown as Fr, Search as gr, Check as it, X as ar, User as wr, ArrowUpDown as ct, Plus as lt, Filter as st, Download as dt, ChevronLeft as pt, ChevronRight as mt, EllipsisVertical as ut, Music as ht } from "lucide-react";
import { createPortal as fr } from "react-dom";
import { Icon as be } from "@iconify/react";
import { Editor as bt } from "@tinymce/tinymce-react";
import { enqueueSnackbar as Ce, SnackbarProvider as gt, useSnackbar as wt } from "notistack";
const ft = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";.racm-root *,.racm-root :before,.racm-root :after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}.racm-root :before,.racm-root :after{--tw-content: ""}.racm-root{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}.racm-root{margin:0;line-height:inherit}.racm-root hr{height:0;color:inherit;border-top-width:1px}.racm-root abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}.racm-root h1,.racm-root h2,.racm-root h3,.racm-root h4,.racm-root h5,.racm-root h6{font-size:inherit;font-weight:inherit}.racm-root a{color:inherit;text-decoration:inherit}.racm-root b,.racm-root strong{font-weight:bolder}.racm-root code,.racm-root kbd,.racm-root samp,.racm-root pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}.racm-root small{font-size:80%}.racm-root sub,.racm-root sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}.racm-root sub{bottom:-.25em}.racm-root sup{top:-.5em}.racm-root table{text-indent:0;border-color:inherit;border-collapse:collapse}.racm-root button,.racm-root input,.racm-root optgroup,.racm-root select,.racm-root textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}.racm-root button,.racm-root select{text-transform:none}.racm-root button,.racm-root [type=button],.racm-root [type=reset],.racm-root [type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}.racm-root :-moz-focusring{outline:auto}.racm-root :-moz-ui-invalid{box-shadow:none}.racm-root progress{vertical-align:baseline}.racm-root ::-webkit-inner-spin-button,.racm-root ::-webkit-outer-spin-button{height:auto}.racm-root [type=search]{-webkit-appearance:textfield;outline-offset:-2px}.racm-root ::-webkit-search-decoration{-webkit-appearance:none}.racm-root ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.racm-root summary{display:list-item}.racm-root blockquote,.racm-root dl,.racm-root dd,.racm-root h1,.racm-root h2,.racm-root h3,.racm-root h4,.racm-root h5,.racm-root h6,.racm-root hr,.racm-root figure,.racm-root p,.racm-root pre{margin:0}.racm-root fieldset{margin:0;padding:0}.racm-root legend{padding:0}.racm-root ol,.racm-root ul,.racm-root menu{list-style:none;margin:0;padding:0}.racm-root dialog{padding:0}.racm-root textarea{resize:vertical}.racm-root input::-moz-placeholder,.racm-root textarea::-moz-placeholder{opacity:1;color:#9ca3af}.racm-root input::placeholder,.racm-root textarea::placeholder{opacity:1;color:#9ca3af}.racm-root button,.racm-root [role=button]{cursor:pointer}.racm-root :disabled{cursor:default}.racm-root img,.racm-root svg,.racm-root video,.racm-root canvas,.racm-root audio,.racm-root iframe,.racm-root embed,.racm-root object{display:block;vertical-align:middle}.racm-root img,.racm-root video{max-width:100%;height:auto}.racm-root [hidden]{display:none}.racm-root{--background: 0 0% 100%;--foreground: 0 0% 3.9%;--card: 0 0% 100%;--card-foreground: 0 0% 3.9%;--popover: 0 0% 100%;--popover-foreground: 0 0% 3.9%;--primary: 0 0% 9%;--primary-foreground: 0 0% 98%;--secondary: 0 0% 96.1%;--secondary-foreground: 0 0% 9%;--muted: 0 0% 96.1%;--muted-foreground: 0 0% 45.1%;--accent: 0 0% 96.1%;--accent-foreground: 0 0% 9%;--destructive: 0 84.2% 60.2%;--destructive-foreground: 0 0% 98%;--border: 0 0% 89.8%;--input: 0 0% 89.8%;--ring: 0 0% 3.9%;--chart-1: 12 76% 61%;--chart-2: 173 58% 39%;--chart-3: 197 37% 24%;--chart-4: 43 74% 66%;--chart-5: 27 87% 67%;--radius: .5rem}.racm-root *{border-color:hsl(var(--border, 0 0% 89.8%))}.racm-root{background-color:hsl(var(--background, 0 0% 100%));color:hsl(var(--foreground, 0 0% 3.9%))}.racm-root *,.racm-root :before,.racm-root :after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.racm-root ::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.racm-root .container{width:100%}@media (min-width: 640px){.racm-root .container{max-width:640px}}@media (min-width: 768px){.racm-root .container{max-width:768px}}@media (min-width: 1024px){.racm-root .container{max-width:1024px}}@media (min-width: 1280px){.racm-root .container{max-width:1280px}}@media (min-width: 1536px){.racm-root .container{max-width:1536px}}.racm-root .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.racm-root .pointer-events-none{pointer-events:none}.racm-root .pointer-events-auto{pointer-events:auto}.racm-root .fixed{position:fixed}.racm-root .absolute{position:absolute}.racm-root .relative{position:relative}.racm-root .inset-0{top:0;right:0;bottom:0;left:0}.racm-root .inset-y-0{top:0;bottom:0}.racm-root .-bottom-4{bottom:-1rem}.racm-root .-right-2{right:-.5rem}.racm-root .-right-6{right:-1.5rem}.racm-root .-top-2{top:-.5rem}.racm-root .-top-6{top:-1.5rem}.racm-root .left-1{left:.25rem}.racm-root .left-1\\/2{left:50%}.racm-root .left-3{left:.75rem}.racm-root .right-0{right:0}.racm-root .right-1{right:.25rem}.racm-root .right-1\\/2{right:50%}.racm-root .right-2{right:.5rem}.racm-root .right-3{right:.75rem}.racm-root .right-4{right:1rem}.racm-root .right-\\[50\\%\\]{right:50%}.racm-root .top-0{top:0}.racm-root .top-1{top:.25rem}.racm-root .top-1\\/2{top:50%}.racm-root .top-2{top:.5rem}.racm-root .top-4{top:1rem}.racm-root .top-\\[80\\%\\]{top:80%}.racm-root .top-full{top:100%}.racm-root .z-10{z-index:10}.racm-root .z-20{z-index:20}.racm-root .z-40{z-index:40}.racm-root .z-50{z-index:50}.racm-root .col-span-12{grid-column:span 12 / span 12}.racm-root .col-span-6{grid-column:span 6 / span 6}.racm-root .mb-0{margin-bottom:0}.racm-root .mb-1{margin-bottom:.25rem}.racm-root .mb-3{margin-bottom:.75rem}.racm-root .mb-6{margin-bottom:1.5rem}.racm-root .ml-1{margin-left:.25rem}.racm-root .ml-2{margin-left:.5rem}.racm-root .mr-2{margin-right:.5rem}.racm-root .mt-1{margin-top:.25rem}.racm-root .mt-2{margin-top:.5rem}.racm-root .mt-auto{margin-top:auto}.racm-root .inline{display:inline}.racm-root .flex{display:flex}.racm-root .inline-flex{display:inline-flex}.racm-root .table{display:table}.racm-root .table-row{display:table-row}.racm-root .grid{display:grid}.racm-root .hidden{display:none}.racm-root .h-1{height:.25rem}.racm-root .h-10{height:2.5rem}.racm-root .h-11{height:2.75rem}.racm-root .h-12{height:3rem}.racm-root .h-16{height:4rem}.racm-root .h-2{height:.5rem}.racm-root .h-20{height:5rem}.racm-root .h-28{height:7rem}.racm-root .h-3{height:.75rem}.racm-root .h-32{height:8rem}.racm-root .h-4{height:1rem}.racm-root .h-5{height:1.25rem}.racm-root .h-6{height:1.5rem}.racm-root .h-64{height:16rem}.racm-root .h-7{height:1.75rem}.racm-root .h-72{height:18rem}.racm-root .h-8{height:2rem}.racm-root .h-9{height:2.25rem}.racm-root .h-\\[10px\\]{height:10px}.racm-root .h-\\[150px\\]{height:150px}.racm-root .h-\\[36px\\]{height:36px}.racm-root .h-\\[40px\\]{height:40px}.racm-root .h-full{height:100%}.racm-root .max-h-40{max-height:10rem}.racm-root .max-h-60{max-height:15rem}.racm-root .max-h-\\[250px\\]{max-height:250px}.racm-root .max-h-\\[260px\\]{max-height:260px}.racm-root .max-h-\\[90vh\\]{max-height:90vh}.racm-root .min-h-\\[52px\\]{min-height:52px}.racm-root .w-1{width:.25rem}.racm-root .w-10{width:2.5rem}.racm-root .w-11{width:2.75rem}.racm-root .w-12{width:3rem}.racm-root .w-16{width:4rem}.racm-root .w-2{width:.5rem}.racm-root .w-20{width:5rem}.racm-root .w-24{width:6rem}.racm-root .w-3{width:.75rem}.racm-root .w-32{width:8rem}.racm-root .w-4{width:1rem}.racm-root .w-48{width:12rem}.racm-root .w-5{width:1.25rem}.racm-root .w-6{width:1.5rem}.racm-root .w-64{width:16rem}.racm-root .w-7{width:1.75rem}.racm-root .w-8{width:2rem}.racm-root .w-80{width:20rem}.racm-root .w-\\[260px\\]{width:260px}.racm-root .w-\\[28rem\\]{width:28rem}.racm-root .w-\\[36px\\]{width:36px}.racm-root .w-\\[42\\%\\]{width:42%}.racm-root .w-full{width:100%}.racm-root .w-max{width:-moz-max-content;width:max-content}.racm-root .min-w-0{min-width:0px}.racm-root .min-w-\\[100px\\]{min-width:100px}.racm-root .min-w-\\[150px\\]{min-width:150px}.racm-root .min-w-\\[220px\\]{min-width:220px}.racm-root .min-w-\\[40px\\]{min-width:40px}.racm-root .min-w-\\[78px\\]{min-width:78px}.racm-root .max-w-2xl{max-width:42rem}.racm-root .max-w-4xl{max-width:56rem}.racm-root .max-w-5xl{max-width:64rem}.racm-root .max-w-\\[200px\\]{max-width:200px}.racm-root .max-w-\\[300px\\]{max-width:300px}.racm-root .max-w-full{max-width:100%}.racm-root .max-w-lg{max-width:32rem}.racm-root .max-w-md{max-width:28rem}.racm-root .max-w-xs{max-width:20rem}.racm-root .flex-1{flex:1 1 0%}.racm-root .flex-shrink{flex-shrink:1}.racm-root .flex-shrink-0,.racm-root .shrink-0{flex-shrink:0}.racm-root .border-collapse{border-collapse:collapse}.racm-root .-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .translate-x-0{--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .translate-x-full{--tw-translate-x: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .scale-95{--tw-scale-x: .95;--tw-scale-y: .95;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.racm-root .animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes spin{to{transform:rotate(360deg)}}.racm-root .animate-spin{animation:spin 1s linear infinite}.racm-root .cursor-not-allowed{cursor:not-allowed}.racm-root .cursor-pointer{cursor:pointer}.racm-root .select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.racm-root .resize{resize:both}.racm-root .grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.racm-root .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.racm-root .grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.racm-root .flex-col{flex-direction:column}.racm-root .items-center{align-items:center}.racm-root .items-stretch{align-items:stretch}.racm-root .justify-end{justify-content:flex-end}.racm-root .justify-center{justify-content:center}.racm-root .justify-between{justify-content:space-between}.racm-root .gap-1{gap:.25rem}.racm-root .gap-1\\.5{gap:.375rem}.racm-root .gap-2{gap:.5rem}.racm-root .gap-2\\.5{gap:.625rem}.racm-root .gap-3{gap:.75rem}.racm-root .gap-4{gap:1rem}.racm-root .gap-6{gap:1.5rem}.racm-root .-space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(-.5rem * var(--tw-space-x-reverse));margin-left:calc(-.5rem * calc(1 - var(--tw-space-x-reverse)))}.racm-root .space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.racm-root .space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.racm-root .space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.25rem * var(--tw-space-y-reverse))}.racm-root .space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.racm-root .space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.racm-root .divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse))}.racm-root .divide-gray-100>:not([hidden])~:not([hidden]){--tw-divide-opacity: 1;border-color:rgb(243 244 246 / var(--tw-divide-opacity))}.racm-root .overflow-auto{overflow:auto}.racm-root .overflow-hidden{overflow:hidden}.racm-root .overflow-x-auto{overflow-x:auto}.racm-root .overflow-y-auto{overflow-y:auto}.racm-root .truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.racm-root .text-ellipsis{text-overflow:ellipsis}.racm-root .whitespace-nowrap{white-space:nowrap}.racm-root .break-words{overflow-wrap:break-word}.racm-root .rounded{border-radius:.25rem}.racm-root .rounded-full{border-radius:9999px}.racm-root .rounded-lg{border-radius:var(--radius)}.racm-root .rounded-md{border-radius:calc(var(--radius) - 2px)}.racm-root .rounded-sm{border-radius:calc(var(--radius) - 4px)}.racm-root .rounded-xl{border-radius:.75rem}.racm-root .border{border-width:1px}.racm-root .border-2{border-width:2px}.racm-root .border-4{border-width:4px}.racm-root .border-8{border-width:8px}.racm-root .border-b{border-bottom-width:1px}.racm-root .border-l{border-left-width:1px}.racm-root .border-r{border-right-width:1px}.racm-root .border-t{border-top-width:1px}.racm-root .border-t-2{border-top-width:2px}.racm-root .border-dashed{border-style:dashed}.racm-root .border-blue-300{--tw-border-opacity: 1;border-color:rgb(147 197 253 / var(--tw-border-opacity))}.racm-root .border-blue-500{--tw-border-opacity: 1;border-color:rgb(59 130 246 / var(--tw-border-opacity))}.racm-root .border-gray-100{--tw-border-opacity: 1;border-color:rgb(243 244 246 / var(--tw-border-opacity))}.racm-root .border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.racm-root .border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity))}.racm-root .border-green-300{--tw-border-opacity: 1;border-color:rgb(134 239 172 / var(--tw-border-opacity))}.racm-root .border-green-600{--tw-border-opacity: 1;border-color:rgb(22 163 74 / var(--tw-border-opacity))}.racm-root .border-primary,.racm-root .border-primary-500{border-color:var(--primary-500, #3b82f6)}.racm-root .border-purple-300{--tw-border-opacity: 1;border-color:rgb(216 180 254 / var(--tw-border-opacity))}.racm-root .border-red-300{--tw-border-opacity: 1;border-color:rgb(252 165 165 / var(--tw-border-opacity))}.racm-root .border-red-500{--tw-border-opacity: 1;border-color:rgb(239 68 68 / var(--tw-border-opacity))}.racm-root .border-red-600{--tw-border-opacity: 1;border-color:rgb(220 38 38 / var(--tw-border-opacity))}.racm-root .border-teal-300{--tw-border-opacity: 1;border-color:rgb(94 234 212 / var(--tw-border-opacity))}.racm-root .border-white{--tw-border-opacity: 1;border-color:rgb(255 255 255 / var(--tw-border-opacity))}.racm-root .border-white\\/30{border-color:#ffffff4d}.racm-root .border-yellow-300{--tw-border-opacity: 1;border-color:rgb(253 224 71 / var(--tw-border-opacity))}.racm-root .border-t-gray-200{--tw-border-opacity: 1;border-top-color:rgb(229 231 235 / var(--tw-border-opacity))}.racm-root .border-t-white{--tw-border-opacity: 1;border-top-color:rgb(255 255 255 / var(--tw-border-opacity))}.racm-root .\\!bg-transparent{background-color:transparent!important}.racm-root .bg-black\\/50{background-color:#00000080}.racm-root .bg-black\\/70{background-color:#000000b3}.racm-root .bg-blue-100{--tw-bg-opacity: 1;background-color:rgb(219 234 254 / var(--tw-bg-opacity))}.racm-root .bg-blue-50{--tw-bg-opacity: 1;background-color:rgb(239 246 255 / var(--tw-bg-opacity))}.racm-root .bg-blue-500\\/10{background-color:#3b82f61a}.racm-root .bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.racm-root .bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.racm-root .bg-gray-300{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity))}.racm-root .bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.racm-root .bg-gray-500{--tw-bg-opacity: 1;background-color:rgb(107 114 128 / var(--tw-bg-opacity))}.racm-root .bg-gray-900{--tw-bg-opacity: 1;background-color:rgb(17 24 39 / var(--tw-bg-opacity))}.racm-root .bg-green-100{--tw-bg-opacity: 1;background-color:rgb(220 252 231 / var(--tw-bg-opacity))}.racm-root .bg-green-600{--tw-bg-opacity: 1;background-color:rgb(22 163 74 / var(--tw-bg-opacity))}.racm-root .bg-primary{background-color:var(--primary-500, #3b82f6)}.racm-root .bg-purple-100{--tw-bg-opacity: 1;background-color:rgb(243 232 255 / var(--tw-bg-opacity))}.racm-root .bg-red-100{--tw-bg-opacity: 1;background-color:rgb(254 226 226 / var(--tw-bg-opacity))}.racm-root .bg-red-500{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.racm-root .bg-red-500\\/95{background-color:#ef4444f2}.racm-root .bg-red-600{--tw-bg-opacity: 1;background-color:rgb(220 38 38 / var(--tw-bg-opacity))}.racm-root .bg-teal-100{--tw-bg-opacity: 1;background-color:rgb(204 251 241 / var(--tw-bg-opacity))}.racm-root .bg-transparent{background-color:transparent}.racm-root .bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.racm-root .bg-white\\/90{background-color:#ffffffe6}.racm-root .bg-yellow-100{--tw-bg-opacity: 1;background-color:rgb(254 249 195 / var(--tw-bg-opacity))}.racm-root .bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}.racm-root .to-transparent{--tw-gradient-to: transparent var(--tw-gradient-to-position)}.racm-root .object-contain{-o-object-fit:contain;object-fit:contain}.racm-root .object-cover{-o-object-fit:cover;object-fit:cover}.racm-root .p-1{padding:.25rem}.racm-root .p-2{padding:.5rem}.racm-root .p-4{padding:1rem}.racm-root .p-5{padding:1.25rem}.racm-root .px-2{padding-left:.5rem;padding-right:.5rem}.racm-root .px-3{padding-left:.75rem;padding-right:.75rem}.racm-root .px-4{padding-left:1rem;padding-right:1rem}.racm-root .px-5{padding-left:1.25rem;padding-right:1.25rem}.racm-root .px-6{padding-left:1.5rem;padding-right:1.5rem}.racm-root .px-8{padding-left:2rem;padding-right:2rem}.racm-root .py-1{padding-top:.25rem;padding-bottom:.25rem}.racm-root .py-2{padding-top:.5rem;padding-bottom:.5rem}.racm-root .py-3{padding-top:.75rem;padding-bottom:.75rem}.racm-root .py-4{padding-top:1rem;padding-bottom:1rem}.racm-root .py-6{padding-top:1.5rem;padding-bottom:1.5rem}.racm-root .pl-9{padding-left:2.25rem}.racm-root .pr-10{padding-right:2.5rem}.racm-root .pr-2{padding-right:.5rem}.racm-root .pr-3{padding-right:.75rem}.racm-root .text-left{text-align:left}.racm-root .text-center{text-align:center}.racm-root .text-base{font-size:1rem;line-height:1.5rem}.racm-root .text-lg{font-size:1.125rem;line-height:1.75rem}.racm-root .text-sm{font-size:.875rem;line-height:1.25rem}.racm-root .text-xl{font-size:1.25rem;line-height:1.75rem}.racm-root .text-xs{font-size:.75rem;line-height:1rem}.racm-root .font-bold{font-weight:700}.racm-root .font-medium{font-weight:500}.racm-root .font-semibold{font-weight:600}.racm-root .uppercase{text-transform:uppercase}.racm-root .italic{font-style:italic}.racm-root .leading-none{line-height:1}.racm-root .leading-snug{line-height:1.375}.racm-root .leading-tight{line-height:1.25}.racm-root .tracking-wide{letter-spacing:.025em}.racm-root .tracking-wider{letter-spacing:.05em}.racm-root .text-black{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.racm-root .text-blue-600{--tw-text-opacity: 1;color:rgb(37 99 235 / var(--tw-text-opacity))}.racm-root .text-blue-700{--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity))}.racm-root .text-blue-800{--tw-text-opacity: 1;color:rgb(30 64 175 / var(--tw-text-opacity))}.racm-root .text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.racm-root .text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.racm-root .text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.racm-root .text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.racm-root .text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity))}.racm-root .text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.racm-root .text-green-600{--tw-text-opacity: 1;color:rgb(22 163 74 / var(--tw-text-opacity))}.racm-root .text-green-700{--tw-text-opacity: 1;color:rgb(21 128 61 / var(--tw-text-opacity))}.racm-root .text-green-800{--tw-text-opacity: 1;color:rgb(22 101 52 / var(--tw-text-opacity))}.racm-root .text-primary{color:var(--primary-500, #3b82f6)}.racm-root .text-purple-700{--tw-text-opacity: 1;color:rgb(126 34 206 / var(--tw-text-opacity))}.racm-root .text-purple-800{--tw-text-opacity: 1;color:rgb(107 33 168 / var(--tw-text-opacity))}.racm-root .text-red-500{--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity))}.racm-root .text-red-600{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity))}.racm-root .text-red-700{--tw-text-opacity: 1;color:rgb(185 28 28 / var(--tw-text-opacity))}.racm-root .text-red-800{--tw-text-opacity: 1;color:rgb(153 27 27 / var(--tw-text-opacity))}.racm-root .text-teal-700{--tw-text-opacity: 1;color:rgb(15 118 110 / var(--tw-text-opacity))}.racm-root .text-teal-800{--tw-text-opacity: 1;color:rgb(17 94 89 / var(--tw-text-opacity))}.racm-root .text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.racm-root .text-yellow-700{--tw-text-opacity: 1;color:rgb(161 98 7 / var(--tw-text-opacity))}.racm-root .text-yellow-800{--tw-text-opacity: 1;color:rgb(133 77 14 / var(--tw-text-opacity))}.racm-root .underline{text-decoration-line:underline}.racm-root .placeholder-gray-400::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.racm-root .placeholder-gray-400::placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.racm-root .placeholder-gray-500::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(107 114 128 / var(--tw-placeholder-opacity))}.racm-root .placeholder-gray-500::placeholder{--tw-placeholder-opacity: 1;color:rgb(107 114 128 / var(--tw-placeholder-opacity))}.racm-root .opacity-100{opacity:1}.racm-root .opacity-50{opacity:.5}.racm-root .opacity-60{opacity:.6}.racm-root .opacity-75{opacity:.75}.racm-root .opacity-90{opacity:.9}.racm-root .shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root .shadow-2xl{--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / .25);--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root .shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root .shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root .shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root .shadow-xl{--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root .outline-none{outline:2px solid transparent;outline-offset:2px}.racm-root .outline{outline-style:solid}.racm-root .ring-0{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.racm-root .ring-blue-100{--tw-ring-opacity: 1;--tw-ring-color: rgb(219 234 254 / var(--tw-ring-opacity))}.racm-root .filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.racm-root .backdrop-blur-sm{--tw-backdrop-blur: blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.racm-root .transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.racm-root .transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.racm-root .transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.racm-root .transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.racm-root .transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.racm-root .duration-200{transition-duration:.2s}.racm-root .duration-300{transition-duration:.3s}.racm-root .ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.racm-root .primary-bg{background-color:var(--primary-500)}.racm-root .primary-bg-light{background-color:var(--primary-100)}.racm-root .primary-bg-dark{background-color:var(--primary-700)}.racm-root .primary-text{color:var(--primary-600)}.racm-root .primary-border{border-color:var(--primary-300)}.racm-root .primary-hover:hover{background-color:var(--primary-600)}.racm-root .opacity-0{opacity:0}.racm-root{--foreground-rgb: 0, 0, 0;--background-start-rgb: 214, 219, 220;--background-end-rgb: 255, 255, 255}@media (prefers-color-scheme: dark){.racm-root{--foreground-rgb: 255, 255, 255;--background-start-rgb: 0, 0, 0;--background-end-rgb: 0, 0, 0}}.racm-root{height:100%}.racm-root{--scrollbar-thumb: #d1d5db;--scrollbar-thumb-hover: #9ca3af}.racm-root .dark{--scrollbar-thumb: #4b5563;--scrollbar-thumb-hover: #6b7280}.racm-root *{scrollbar-width:thin;scrollbar-color:var(--scrollbar-thumb) transparent}.racm-root *::-webkit-scrollbar{width:6px;height:6px}.racm-root *::-webkit-scrollbar-track{background:transparent}.racm-root *::-webkit-scrollbar-thumb{background-color:var(--scrollbar-thumb);border-radius:3px}.racm-root *::-webkit-scrollbar-thumb:hover{background-color:var(--scrollbar-thumb-hover)}.racm-root h1{font-size:1.5rem;line-height:2rem;font-weight:700;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.racm-root :is(.dark h1){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.racm-root p{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.racm-root :is(.dark p){--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.racm-root .table-search-field{position:relative;width:100%}@media (min-width: 640px){.racm-root .table-search-field{min-width:300px!important}}.racm-root .table-search-field .search-icon{position:absolute;left:.75rem;top:50%;height:1rem;width:1rem;--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.racm-root :is(.dark .table-search-field .search-icon){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.racm-root .table-search-field input{height:36px;width:100%;border-radius:calc(var(--radius) - 2px);border-width:1px;--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity));padding:.75rem 1rem .75rem 2.25rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.racm-root .table-search-field input::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(107 114 128 / var(--tw-placeholder-opacity))}.racm-root .table-search-field input::placeholder{--tw-placeholder-opacity: 1;color:rgb(107 114 128 / var(--tw-placeholder-opacity))}.racm-root .table-search-field input:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-opacity: 1;--tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity))}.racm-root .table-search-field input:disabled{opacity:.5}.racm-root :is(.dark .table-search-field input){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.racm-root :is(.dark .table-search-field input)::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.racm-root :is(.dark .table-search-field input)::placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.racm-root :is(.dark .table-search-field input){--tw-ring-opacity: 1;--tw-ring-color: rgb(191 219 254 / var(--tw-ring-opacity))}.racm-root .filter-button-wrapper{position:relative;width:100%}@media (min-width: 640px){.racm-root .filter-button-wrapper{width:auto!important}}.racm-root .filter-button-wrapper .red-dot{position:absolute;top:.25rem;right:.25rem;height:.5rem;width:.5rem;border-radius:9999px;--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.racm-root .table-container{overflow:hidden;border-radius:var(--radius);border-width:1px;--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root :is(.dark .table-container){--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.racm-root .table-container table{min-width:100%}.racm-root .table-container table>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse));--tw-divide-opacity: 1;border-color:rgb(229 231 235 / var(--tw-divide-opacity))}.racm-root :is(.dark .table-container table)>:not([hidden])~:not([hidden]){--tw-divide-opacity: 1;border-color:rgb(55 65 81 / var(--tw-divide-opacity))}.racm-root .table-container thead{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.racm-root :is(.dark .table-container thead){background-color:#37415199}.racm-root .table-container tbody>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse));--tw-divide-opacity: 1;border-color:rgb(229 231 235 / var(--tw-divide-opacity))}.racm-root .table-container tbody{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.racm-root :is(.dark .table-container tbody)>:not([hidden])~:not([hidden]){--tw-divide-opacity: 1;border-color:rgb(55 65 81 / var(--tw-divide-opacity))}.racm-root :is(.dark .table-container tbody){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.racm-root .table-container .table-head-data{min-width:-moz-max-content;min-width:max-content;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:1rem 1.5rem;text-align:left;font-size:.75rem;line-height:1rem;font-weight:500;text-transform:uppercase;letter-spacing:.05em;--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.racm-root :is(.dark .table-container .table-head-data){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.racm-root .table-container .no-data-message{padding-top:2.5rem;padding-bottom:2.5rem;text-align:center;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.racm-root :is(.dark .table-container .no-data-message){--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.racm-root .table-container .table-row{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.racm-root .table-container .table-row:hover{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.racm-root :is(.dark .table-container .table-row:hover){background-color:#1e40af1a}.racm-root .table-container .table-data{min-width:-moz-max-content;min-width:max-content;padding:1rem 1.5rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.racm-root :is(.dark .table-container .table-data){--tw-text-opacity: 1;color:rgb(243 244 246 / var(--tw-text-opacity))}.racm-root .table-container .pagination-wrapper{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:.75rem;border-top-width:1px;--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity));padding:.75rem 1.5rem}.racm-root :is(.dark .table-container .pagination-wrapper){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity));background-color:#37415199}.racm-root .table-container .pagination-wrapper span{font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.racm-root :is(.dark .table-container .pagination-wrapper span){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.racm-root .table-container .pagination-wrapper .rows-number-select{border-radius:calc(var(--radius) - 2px);border-width:1px;--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:.25rem .5rem;font-size:.875rem;line-height:1.25rem}.racm-root .table-container .pagination-wrapper .rows-number-select:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-opacity: 1;--tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity))}.racm-root :is(.dark .table-container .pagination-wrapper .rows-number-select){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.racm-root .table-container .pagination-wrapper .arrow-icons{border-radius:calc(var(--radius) - 2px);padding:.5rem;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity));transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.racm-root .table-container .pagination-wrapper .arrow-icons:hover{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.racm-root .table-container .pagination-wrapper .arrow-icons:disabled{opacity:.5}.racm-root :is(.dark .table-container .pagination-wrapper .arrow-icons){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.racm-root :is(.dark .table-container .pagination-wrapper .arrow-icons:hover){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity))}.racm-root .no-spinner::-webkit-outer-spin-button,.racm-root .no-spinner::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.racm-root .no-spinner{-moz-appearance:textfield}.racm-root .tox.tox-tinymce .tox-edit-area:before{border:0!important;box-shadow:none!important}.racm-root .hover\\:-translate-y-0:hover{--tw-translate-y: -0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .hover\\:-translate-y-0\\.5:hover{--tw-translate-y: -.125rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .hover\\:bg-blue-50:hover{--tw-bg-opacity: 1;background-color:rgb(239 246 255 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-gray-100:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-gray-200:hover{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-gray-300:hover{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-green-50:hover{--tw-bg-opacity: 1;background-color:rgb(240 253 244 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-green-700:hover{--tw-bg-opacity: 1;background-color:rgb(21 128 61 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-primary-50:hover{background-color:var(--primary-50, #eff6ff)}.racm-root .hover\\:bg-primary-600:hover{background-color:var(--primary-600, #2563eb)}.racm-root .hover\\:bg-red-50:hover{--tw-bg-opacity: 1;background-color:rgb(254 242 242 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-red-600:hover{--tw-bg-opacity: 1;background-color:rgb(220 38 38 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-red-700:hover{--tw-bg-opacity: 1;background-color:rgb(185 28 28 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-white:hover{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-white\\/20:hover{background-color:#fff3}.racm-root .hover\\:text-gray-600:hover{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.racm-root .hover\\:shadow-md:hover{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root .focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.racm-root .focus\\:ring-1:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.racm-root .focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.racm-root .focus\\:ring-blue-200:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(191 219 254 / var(--tw-ring-opacity))}.racm-root .focus\\:ring-blue-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity))}.racm-root .focus\\:ring-blue-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity))}.racm-root .focus\\:ring-gray-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity))}.racm-root .focus\\:ring-green-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(34 197 94 / var(--tw-ring-opacity))}.racm-root .focus\\:ring-primary-500:focus{--tw-ring-color: var(--primary-500, #3b82f6)}.racm-root .focus\\:ring-red-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(239 68 68 / var(--tw-ring-opacity))}.racm-root .focus\\:ring-offset-2:focus{--tw-ring-offset-width: 2px}.racm-root .focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.racm-root .focus-visible\\:ring-2:focus-visible{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.racm-root .focus-visible\\:ring-blue-400:focus-visible{--tw-ring-opacity: 1;--tw-ring-color: rgb(96 165 250 / var(--tw-ring-opacity))}.racm-root .focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width: 2px}.racm-root .disabled\\:pointer-events-none:disabled{pointer-events:none}.racm-root .disabled\\:opacity-50:disabled{opacity:.5}.racm-root .group:hover .group-hover\\:opacity-100{opacity:1}.racm-root .peer:checked~.peer-checked\\:translate-x-5{--tw-translate-x: 1.25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .peer:checked~.peer-checked\\:bg-primary-600{background-color:var(--primary-600, #2563eb)}.racm-root .peer:focus~.peer-focus\\:outline-none{outline:2px solid transparent;outline-offset:2px}.racm-root .peer:disabled~.peer-disabled\\:cursor-not-allowed{cursor:not-allowed}.racm-root .peer:disabled~.peer-disabled\\:opacity-50{opacity:.5}.racm-root :is(.dark .dark\\:divide-gray-800)>:not([hidden])~:not([hidden]){--tw-divide-opacity: 1;border-color:rgb(31 41 55 / var(--tw-divide-opacity))}.racm-root :is(.dark .dark\\:border-blue-700){--tw-border-opacity: 1;border-color:rgb(29 78 216 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-gray-600){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-gray-700){--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-gray-700\\/60){border-color:#37415199}.racm-root :is(.dark .dark\\:border-gray-800){--tw-border-opacity: 1;border-color:rgb(31 41 55 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-green-700){--tw-border-opacity: 1;border-color:rgb(21 128 61 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-purple-700){--tw-border-opacity: 1;border-color:rgb(126 34 206 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-red-700){--tw-border-opacity: 1;border-color:rgb(185 28 28 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-teal-700){--tw-border-opacity: 1;border-color:rgb(15 118 110 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-yellow-700){--tw-border-opacity: 1;border-color:rgb(161 98 7 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:bg-black){--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:bg-black\\/80){background-color:#000c}.racm-root :is(.dark .dark\\:bg-blue-900\\/20){background-color:#1e3a8a33}.racm-root :is(.dark .dark\\:bg-blue-900\\/30){background-color:#1e3a8a4d}.racm-root :is(.dark .dark\\:bg-gray-600){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:bg-gray-700){--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:bg-gray-800){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:bg-gray-800\\/80){background-color:#1f2937cc}.racm-root :is(.dark .dark\\:bg-gray-900){--tw-bg-opacity: 1;background-color:rgb(17 24 39 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:bg-gray-900\\/30){background-color:#1118274d}.racm-root :is(.dark .dark\\:bg-green-900\\/30){background-color:#14532d4d}.racm-root :is(.dark .dark\\:bg-purple-900\\/30){background-color:#581c874d}.racm-root :is(.dark .dark\\:bg-red-900\\/30){background-color:#7f1d1d4d}.racm-root :is(.dark .dark\\:bg-teal-900\\/30){background-color:#134e4a4d}.racm-root :is(.dark .dark\\:bg-yellow-900\\/30){background-color:#713f124d}.racm-root :is(.dark .dark\\:text-blue-300){--tw-text-opacity: 1;color:rgb(147 197 253 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-blue-400){--tw-text-opacity: 1;color:rgb(96 165 250 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-gray-100){--tw-text-opacity: 1;color:rgb(243 244 246 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-gray-200){--tw-text-opacity: 1;color:rgb(229 231 235 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-gray-300){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-gray-400){--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-gray-500){--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-green-300){--tw-text-opacity: 1;color:rgb(134 239 172 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-purple-300){--tw-text-opacity: 1;color:rgb(216 180 254 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-red-300){--tw-text-opacity: 1;color:rgb(252 165 165 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-red-500){--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-teal-300){--tw-text-opacity: 1;color:rgb(94 234 212 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-white){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-yellow-300){--tw-text-opacity: 1;color:rgb(253 224 71 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:placeholder-gray-400)::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.racm-root :is(.dark .dark\\:placeholder-gray-400)::placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.racm-root :is(.dark .dark\\:hover\\:bg-gray-600:hover){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:hover\\:bg-gray-700:hover){--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:hover\\:bg-gray-800:hover){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:hover\\:text-gray-200:hover){--tw-text-opacity: 1;color:rgb(229 231 235 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:hover\\:text-gray-300:hover){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:focus\\:ring-blue-200:focus){--tw-ring-opacity: 1;--tw-ring-color: rgb(191 219 254 / var(--tw-ring-opacity))}.racm-root :is(.dark .dark\\:focus\\:ring-blue-400:focus){--tw-ring-opacity: 1;--tw-ring-color: rgb(96 165 250 / var(--tw-ring-opacity))}.racm-root :is(.dark .dark\\:focus\\:ring-gray-500:focus){--tw-ring-opacity: 1;--tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity))}.racm-root :is(.dark .dark\\:focus\\:ring-gray-600:focus){--tw-ring-opacity: 1;--tw-ring-color: rgb(75 85 99 / var(--tw-ring-opacity))}.racm-root :is(.dark .dark\\:focus\\:ring-offset-gray-800:focus){--tw-ring-offset-color: #1f2937}@media (min-width: 640px){.racm-root .sm\\:\\!w-auto{width:auto!important}.racm-root .sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.racm-root .sm\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.racm-root .sm\\:\\!flex-row{flex-direction:row!important}.racm-root .sm\\:\\!flex-wrap{flex-wrap:wrap!important}.racm-root .sm\\:\\!items-center{align-items:center!important}.racm-root .sm\\:\\!px-6{padding-left:1.5rem!important;padding-right:1.5rem!important}.racm-root .sm\\:opacity-0{opacity:0}.racm-root .group:hover .sm\\:group-hover\\:opacity-100{opacity:1}}@media (min-width: 1024px){.racm-root .lg\\:\\!w-auto{width:auto!important}.racm-root .lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.racm-root .lg\\:\\!flex-row{flex-direction:row!important}.racm-root .lg\\:\\!items-end{align-items:flex-end!important}.racm-root .lg\\:\\!justify-between{justify-content:space-between!important}}.racm-root .\\[\\&\\>svg\\]\\:h-3\\.5>svg{height:.875rem}.racm-root .\\[\\&\\>svg\\]\\:h-4>svg{height:1rem}.racm-root .\\[\\&\\>svg\\]\\:w-3\\.5>svg{width:.875rem}.racm-root .\\[\\&\\>svg\\]\\:w-4>svg{width:1rem}', ir = (a, n = "DD MMM YYYY") => {
  if (!a) return "N/A";
  const e = new Date(a);
  if (isNaN(e.getTime())) return "Invalid Date";
  const r = (c) => String(c).padStart(2, "0"), o = {
    YYYY: e.getFullYear(),
    YY: String(e.getFullYear()).slice(-2),
    MMMM: e.toLocaleString("en-US", { month: "long" }),
    MMM: e.toLocaleString("en-US", { month: "short" }),
    MM: r(e.getMonth() + 1),
    M: e.getMonth() + 1,
    DD: r(e.getDate()),
    D: e.getDate(),
    dddd: e.toLocaleString("en-US", { weekday: "long" }),
    ddd: e.toLocaleString("en-US", { weekday: "short" }),
    HH: r(e.getHours()),
    hh: r(e.getHours() % 12 || 12),
    mm: r(e.getMinutes()),
    ss: r(e.getSeconds()),
    A: e.getHours() >= 12 ? "PM" : "AM"
  };
  return n.replace(
    /YYYY|YY|MMMM|MMM|MM|M|DD|D|dddd|ddd|HH|hh|mm|ss|A/g,
    (c) => String(o[c])
  );
}, yt = (a, n, e = []) => {
  if (!(n != null && n.trim())) return a;
  const r = n.toLowerCase(), o = (c) => c == null ? [] : typeof c == "object" ? Object.values(c).flatMap(o) : [String(c)];
  return a.filter((c) => {
    let i = [];
    return e.length > 0 ? e.forEach((s) => {
      c[s] !== void 0 && i.push(...o(c[s]));
    }) : i = o(c), i.some(
      (s) => s.toLowerCase().includes(r)
    );
  });
}, x = (...a) => a.filter(Boolean).join(" "), y = {
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
}, ge = tr.forwardRef(
  ({
    className: a = "",
    variant: n = "contained",
    color: e = "default",
    size: r = "default",
    fullWidth: o = !1,
    children: c,
    ...i
  }, s) => {
    var f;
    const b = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", p = {
      sm: "h-8 px-3 rounded-md text-sm",
      md: "h-9 px-4 rounded-md text-sm",
      lg: "h-11 px-6 rounded-md text-base",
      xl: "h-12 px-8 rounded-lg text-lg",
      default: "h-9 px-4 rounded-md text-sm"
    }, u = {
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
    }, d = ((f = u[e]) == null ? void 0 : f[n]) || u.default.contained, l = p[r] || p.default, g = x(
      y.button.root,
      b,
      d,
      l,
      o ? "w-full" : "",
      a
    );
    return /* @__PURE__ */ t(
      "button",
      {
        ref: s,
        type: i.type || "button",
        className: g,
        ...i,
        children: c
      }
    );
  }
);
ge.displayName = "Button";
function we({
  label: a,
  required: n = !1,
  infoText: e = ""
}) {
  return /* @__PURE__ */ t(Z, { children: /* @__PURE__ */ h(
    "label",
    {
      className: x(
        y.field.label,
        "flex text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
      ),
      children: [
        a,
        n && /* @__PURE__ */ t("span", { className: "ml-1", children: "*" }),
        e && /* @__PURE__ */ h("span", { className: "ml-2 relative group inline-flex items-center cursor-pointer", children: [
          /* @__PURE__ */ t(nt, { className: "w-4 h-4 text-gray-500 dark:text-gray-400" }),
          /* @__PURE__ */ t(
            "span",
            {
              className: `absolute left-1/2 top-full mt-2\r
                   w-max max-w-xs bg-white text-black dark:bg-black dark:text-white text-xs\r
                   rounded px-2 py-1 opacity-0 shadow-lg\r
                   group-hover:opacity-100 transition-opacity\r
                   duration-200 pointer-events-none z-50`,
              children: e
            }
          )
        ] })
      ]
    }
  ) });
}
const Be = [
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
], vt = ({
  options: a = [],
  value: n = "",
  defaultValue: e = "",
  onChange: r,
  placeholder: o = "Select option",
  className: c = "",
  disabled: i = !1,
  search: s = !1,
  label: b = "",
  required: p = !1,
  name: u = "",
  parentClass: d = "",
  multiple: l = !1,
  dropdownMaxHeight: g = "",
  formData: f = {},
  countriesList: w = !1,
  dependencyKey: $ = "",
  errorMessage: N = ""
}) => {
  var fe, ve;
  const [S, A] = _(!1), [B, F] = _(""), [E, O] = _(!0), v = le(null), z = le(null), L = le(null), [U, V] = _(
    []
  ), [X, ae] = _({
    top: 0,
    left: 0,
    width: 0
  }), ne = typeof document < "u" ? ((fe = v.current) == null ? void 0 : fe.closest(".racm-root")) || document.body : null, P = n || n === !1 ? n : e, D = (M) => M == null || M === "" ? "" : String(typeof M == "boolean" ? M : M ?? ""), I = () => Be.map((G) => ({
    value: G.label,
    label: G.label,
    code: G.code
  }));
  q(
    () => {
      (async () => {
        if (w == !0)
          V(I());
        else if (typeof a == "function") {
          const G = await a(f);
          V(G || []);
        } else
          V(a || []);
      })();
    },
    $ ? [a, f == null ? void 0 : f[$]] : [a]
  );
  const K = l ? (P || []).map(D) : D(P), R = U.filter(
    (M) => M.label.toLowerCase().includes(B.toLowerCase())
  ), W = (M) => {
    const G = D(M);
    return l ? K.includes(G) : G === K;
  };
  q(() => {
    const M = (G) => {
      var C;
      v.current && !v.current.contains(G.target) && !((C = z.current) != null && C.contains(G.target)) && (A(!1), F(""));
    };
    return document.addEventListener("mousedown", M), () => document.removeEventListener("mousedown", M);
  }, []), q(() => {
    if (!S || !v.current) return;
    const M = () => {
      if (!v.current) return;
      const G = v.current.getBoundingClientRect(), re = window.innerHeight - G.bottom < (typeof g == "number" ? g : 200);
      O(re), ae({
        top: re ? G.top - 4 : G.bottom + 4,
        left: G.left,
        width: G.width
      });
    };
    return M(), window.addEventListener("resize", M), window.addEventListener("scroll", M, !0), () => {
      window.removeEventListener("resize", M), window.removeEventListener("scroll", M, !0);
    };
  }, [S]), q(() => {
    S && L.current && L.current.focus();
  }, [S]);
  const pe = (M) => {
    let G = M;
    if (M === "true" ? G = !0 : M === "false" && (G = !1), l) {
      const C = K.includes(
        D(M)
      );
      let T;
      C ? T = (Array.isArray(n) ? n : []).filter(
        (ee) => D(ee) !== D(M)
      ) : T = [...Array.isArray(n) ? n : [], G], r == null || r(T);
    } else
      r == null || r(G), A(!1);
    F("");
  }, j = l ? U.filter((M) => W(M.value)).map((M) => M.label).join(", ") : (ve = U.find((M) => W(M.value))) == null ? void 0 : ve.label;
  return q(() => {
    (P || P === !1) && setTimeout(() => {
      r == null || r(P);
    }, 100);
  }, []), /* @__PURE__ */ h(
    "div",
    {
      className: x(
        y.field.wrapper,
        d || "col-span-12"
      ),
      children: [
        /* @__PURE__ */ t(we, { label: b, required: p }),
        /* @__PURE__ */ h(
          "div",
          {
            className: x(y.field.input, "relative", c),
            ref: v,
            children: [
              /* @__PURE__ */ t(
                "select",
                {
                  name: "hidden_select_for_validation",
                  value: l ? j ? j.split(", ") : [] : j || "",
                  required: p,
                  multiple: l,
                  id: `field-${u}`,
                  className: "absolute opacity-0 right-1/2 top-[80%] -translate-x-1/2 -translate-y-1/2 pointer-events-none h-[10px]",
                  onChange: () => {
                  },
                  children: l ? j == null ? void 0 : j.split(", ").map((M) => /* @__PURE__ */ t("option", { value: M, children: M }, M)) : /* @__PURE__ */ t("option", { hidden: !0, value: j, children: j })
                }
              ),
              /* @__PURE__ */ h(
                "button",
                {
                  type: "button",
                  onClick: () => !i && A(!S),
                  disabled: i,
                  className: `w-full h-10 px-3 border border-gray-300 dark:border-gray-600 rounded-md text-left text-sm flex items-center justify-between 
          ${j ? "dark:text-white" : "text-gray-500 dark:text-gray-400"} 
          ${i ? "opacity-50 cursor-not-allowed" : "dark:bg-gray-700"}
          ${N ? "border-red-500" : ""}`,
                  children: [
                    /* @__PURE__ */ t("span", { className: "truncate", children: j || o }),
                    /* @__PURE__ */ t(
                      Fr,
                      {
                        className: `w-4 h-4 transition-transform ${S ? "rotate-180" : ""}`
                      }
                    )
                  ]
                }
              ),
              S && ne && fr(
                /* @__PURE__ */ h(
                  "div",
                  {
                    ref: z,
                    className: "fixed z-50 border rounded-md bg-white dark:bg-gray-700 shadow-lg",
                    style: {
                      top: X.top,
                      left: X.left,
                      width: X.width,
                      transform: E ? "translateY(-100%)" : void 0
                    },
                    children: [
                      s && /* @__PURE__ */ t("div", { className: "p-2 border-b border-gray-200 dark:border-gray-600", children: /* @__PURE__ */ h("div", { className: "relative", children: [
                        /* @__PURE__ */ t(gr, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }),
                        /* @__PURE__ */ t(
                          "input",
                          {
                            ref: L,
                            type: "text",
                            value: B,
                            onChange: (M) => F(M.target.value),
                            placeholder: "Search...",
                            className: "w-full pl-9 pr-3 py-2 text-sm border rounded-md bg-white dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
                          }
                        )
                      ] }) }),
                      /* @__PURE__ */ t(
                        "div",
                        {
                          className: "max-h-40 overflow-y-auto",
                          style: {
                            maxHeight: g || ""
                          },
                          children: R.length > 0 ? R.map((M) => /* @__PURE__ */ h(
                            "button",
                            {
                              type: "button",
                              onClick: () => pe(String(M.value)),
                              className: `w-full px-3 py-2 text-left text-sm flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 
                    ${W(M.value) ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300" : ""}`,
                              children: [
                                /* @__PURE__ */ h("div", { className: "flex gap-2 items-center", children: [
                                  w && (M == null ? void 0 : M.code) && /* @__PURE__ */ t(
                                    "img",
                                    {
                                      src: `https://flagcdn.com/w20/${M == null ? void 0 : M.code.toLowerCase()}.png`,
                                      alt: M.code,
                                      className: "w-5 h-3 object-cover"
                                    }
                                  ),
                                  /* @__PURE__ */ t("span", { children: M.label })
                                ] }),
                                l && W(M.value) && /* @__PURE__ */ t(it, { className: "w-4 h-4" })
                              ]
                            },
                            String(M.value)
                          )) : /* @__PURE__ */ t("div", { className: "px-3 py-2 text-sm text-gray-500 dark:text-gray-400", children: "No options found" })
                        }
                      )
                    ]
                  }
                ),
                ne
              )
            ]
          }
        ),
        N && /* @__PURE__ */ t(
          "span",
          {
            className: x(
              y.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: N
          }
        )
      ]
    },
    u
  );
}, Or = tr.forwardRef(
  ({
    label: a,
    required: n,
    parentClass: e = "col-span-12",
    className: r = "",
    value: o = !1,
    onChange: c,
    disabled: i = !1,
    errorMessage: s = "",
    name: b,
    ...p
  }, u) => (q(() => {
    let d;
    d = o || !1, setTimeout(() => {
      c == null || c(d);
    }, 100);
  }, []), /* @__PURE__ */ h(
    "div",
    {
      className: x(
        y.field.wrapper,
        "flex justify-between",
        e
      ),
      children: [
        a && /* @__PURE__ */ t(we, { label: a, required: n }),
        /* @__PURE__ */ h("label", { className: "relative inline-flex items-center cursor-pointer", children: [
          /* @__PURE__ */ t(
            "input",
            {
              type: "checkbox",
              ref: u,
              id: `field-${b}`,
              className: x(y.field.input, "sr-only peer"),
              checked: o,
              onChange: (d) => c == null ? void 0 : c(d.target.checked),
              disabled: i,
              ...p
            }
          ),
          /* @__PURE__ */ t(
            "div",
            {
              className: `
              w-11 h-6 bg-gray-200 peer-focus:outline-none
              rounded-full peer dark:bg-gray-700
              peer-checked:bg-primary-600
              peer-disabled:opacity-50 peer-disabled:cursor-not-allowed
              transition-colors duration-200
              ${s ? "border-red-500" : ""}
              ${r}
            `
            }
          ),
          /* @__PURE__ */ t(
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
        s && /* @__PURE__ */ t(
          "span",
          {
            className: x(
              y.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: s
          }
        )
      ]
    }
  ))
);
Or.displayName = "Switch";
function xt({
  label: a = "",
  value: n = "",
  name: e = "",
  parentClass: r = "",
  onChange: o,
  disabled: c = !1,
  required: i = !1,
  placeholder: s = "Phone number",
  search: b = !1,
  countriesList: p = !1,
  defaultCountry: u = "",
  errorMessage: d = ""
}) {
  var P;
  const l = (D) => Be.find(
    (I) => I.code == D
  ), [g, f] = _(
    l(u) || Be[0]
  ), [w, $] = _(""), [N, S] = _(""), [A, B] = _(!1), [F, E] = _(""), O = le(null), v = le(null), [z, L] = _({
    top: 0,
    left: 0,
    width: 0
  }), U = typeof document < "u" ? ((P = O.current) == null ? void 0 : P.closest(".racm-root")) || document.body : null, V = (D, I) => {
    let K = "", R = 0;
    for (let W = 0; W < I.length && R < D.length; W++)
      I[W] === "#" ? (K += D[R], R++) : K += I[W];
    return K;
  }, X = (D) => {
    const K = D.target.value.replace(/\D/g, "");
    if (p && (g != null && g.mask)) {
      const R = V(K, g.mask);
      S(R), o == null || o("+" + g.phone + " " + R);
      const W = R.replace(/\D/g, "");
      $(W);
    } else
      S(K), $(K), g && o ? o("+" + g.phone + " " + K) : o == null || o(K);
  };
  q(() => {
    if (typeof n == "string" && n.startsWith("+")) {
      const D = Be.filter((I) => n.startsWith("+" + I.phone)).sort((I, K) => K.phone.length - I.phone.length)[0];
      if (D) {
        f(D);
        let I = n.replace("+" + D.phone, "").replaceAll(" ", "");
        $(I), S(V(I, D.mask));
        return;
      }
    }
    $(n || ""), S(n || "");
  }, []);
  const ae = (D) => {
    f(D), o && o("+" + D.phone + " " + w), B(!1), E("");
  };
  q(() => {
    const D = (I) => {
      var K;
      O.current && !O.current.contains(I.target) && !((K = v.current) != null && K.contains(I.target)) && B(!1);
    };
    return document.addEventListener("mousedown", D), () => document.removeEventListener("mousedown", D);
  }, []), q(() => {
    if (!A || !O.current) return;
    const D = () => {
      if (!O.current) return;
      const I = O.current.getBoundingClientRect();
      L({
        top: I.bottom + 4,
        left: I.left,
        width: I.width
      });
    };
    return D(), window.addEventListener("resize", D), window.addEventListener("scroll", D, !0), () => {
      window.removeEventListener("resize", D), window.removeEventListener("scroll", D, !0);
    };
  }, [A]);
  const ne = Be.filter(
    (D) => D.label.toLowerCase().includes(F.toLowerCase()) || D.phone.includes(F)
  );
  if (!p) {
    const D = (I) => {
      const K = I.target.value.replace(/[^+\d]/g, ""), R = K.startsWith("+") ? "+" + K.replace(/[+]/g, "").slice(0) : K;
      o == null || o(R);
    };
    return /* @__PURE__ */ t(Z, { children: /* @__PURE__ */ h(
      "div",
      {
        className: x(
          y.field.wrapper,
          r || "col-span-12"
        ),
        children: [
          /* @__PURE__ */ t(we, { label: a, required: i }),
          /* @__PURE__ */ t(
            "input",
            {
              type: "text",
              value: n,
              onChange: D,
              placeholder: s,
              disabled: c,
              required: i,
              className: `w-full h-10 px-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md \r
        bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none \r
        focus:ring-1 focus:ring-blue-300 dark:focus:ring-blue-200`,
              inputMode: "tel",
              pattern: "^\\+\\d{1,15}$"
            }
          )
        ]
      },
      e
    ) });
  }
  return /* @__PURE__ */ t(Z, { children: /* @__PURE__ */ h(
    "div",
    {
      className: x(
        y.field.wrapper,
        r || "col-span-12"
      ),
      children: [
        /* @__PURE__ */ t(we, { label: a, required: i }),
        /* @__PURE__ */ h("div", { className: "relative ", ref: O, children: [
          /* @__PURE__ */ h(
            "div",
            {
              className: `h-[40px] flex items-center border rounded-md px-2 bg-white dark:bg-gray-700 transition-all
  ${A ? "ring-0.5 ring-blue-100 border-blue-300" : "border-gray-300 dark:border-gray-600"}
  ${c ? "opacity-60 cursor-not-allowed" : ""}
    ${d ? "border-red-500" : ""}`,
              children: [
                /* @__PURE__ */ h(
                  "button",
                  {
                    type: "button",
                    disabled: c,
                    onClick: () => B(!A),
                    className: "flex items-center gap-1 pr-2 border-r border-gray-300 dark:border-gray-700 focus:outline-none",
                    children: [
                      g ? /* @__PURE__ */ t(
                        "img",
                        {
                          src: `https://flagcdn.com/w20/${g.code.toLowerCase()}.png`,
                          alt: g.code,
                          className: "w-5 h-3 object-cover"
                        }
                      ) : /* @__PURE__ */ t("span", { className: "text-gray-400 text-xs", children: "🌐" }),
                      /* @__PURE__ */ t(Fr, { className: "w-3 h-3 text-gray-500" })
                    ]
                  }
                ),
                g && /* @__PURE__ */ h("span", { className: "ml-2 text-sm text-gray-700 dark:text-gray-200 whitespace-nowrap", children: [
                  "+",
                  g.phone
                ] }),
                /* @__PURE__ */ t(
                  "input",
                  {
                    type: "tel",
                    value: N,
                    onChange: X,
                    required: i,
                    id: `field-${e}`,
                    disabled: c || !g,
                    placeholder: g ? s || "Enter phone number" : "Select a country",
                    className: "flex-1 ml-2 bg-transparent outline-none text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400"
                  }
                ),
                /* @__PURE__ */ t(
                  "input",
                  {
                    type: "tel",
                    required: i,
                    tabIndex: -1,
                    readOnly: !0,
                    value: g && w ? "+" + g.phone + w : "",
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
          A && U && fr(
            /* @__PURE__ */ h(
              "div",
              {
                ref: v,
                className: "fixed border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 shadow-lg z-50 max-h-60 overflow-y-auto",
                style: {
                  top: z.top,
                  left: z.left,
                  width: z.width
                },
                children: [
                  b && /* @__PURE__ */ t("div", { className: "p-2 border-b border-gray-200 dark:border-gray-700", children: /* @__PURE__ */ h("div", { className: "relative", children: [
                    /* @__PURE__ */ t(gr, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" }),
                    /* @__PURE__ */ t(
                      "input",
                      {
                        type: "text",
                        value: F,
                        onChange: (D) => E(D.target.value),
                        placeholder: "Search country...",
                        className: "w-full pl-9 pr-3 py-2 text-sm border rounded-md bg-white dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none "
                      }
                    )
                  ] }) }),
                  ne.map((D) => /* @__PURE__ */ h(
                    "button",
                    {
                      type: "button",
                      onClick: () => ae(D),
                      className: "w-full flex items-center gap-2 px-2 py-1 text-sm hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100",
                      children: [
                        /* @__PURE__ */ t(
                          "img",
                          {
                            src: `https://flagcdn.com/w20/${D.code.toLowerCase()}.png`,
                            alt: D.code,
                            className: "w-5 h-3 object-cover"
                          }
                        ),
                        /* @__PURE__ */ h("span", { children: [
                          D.label,
                          " (+",
                          D.phone,
                          ")"
                        ] })
                      ]
                    },
                    D.code
                  ))
                ]
              }
            ),
            U
          )
        ] }),
        d && /* @__PURE__ */ t(
          "span",
          {
            className: x(
              y.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: d
          }
        )
      ]
    },
    e
  ) });
}
const Tr = tr.forwardRef(
  ({ className: a = "", label: n, required: e, errorMessage: r = "", name: o, ...c }, i) => {
    const s = x(
      y.field.input,
      "placeholder-gray-400 dark:placeholder-gray-400",
      r ? "border-red-500" : "",
      a
    );
    return /* @__PURE__ */ t(Z, { children: /* @__PURE__ */ h(
      "div",
      {
        className: x(
          y.field.wrapper,
          c.parentClass || "col-span-12"
        ),
        children: [
          /* @__PURE__ */ t(we, { label: n, required: e }),
          /* @__PURE__ */ h("div", { className: "relative", children: [
            /* @__PURE__ */ t(
              "textarea",
              {
                className: s,
                ref: i,
                id: `field-${o}`,
                required: e,
                ...c
              }
            ),
            r && /* @__PURE__ */ t(
              "span",
              {
                className: x(
                  y.field.error,
                  "text-red-500 text-xs mt-1"
                ),
                children: r
              }
            )
          ] })
        ]
      },
      o
    ) });
  }
);
Tr.displayName = "TextArea";
var cr = function(a, n) {
  return cr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, r) {
    e.__proto__ = r;
  } || function(e, r) {
    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
  }, cr(a, n);
};
function kt(a, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
  cr(a, n);
  function e() {
    this.constructor = a;
  }
  a.prototype = n === null ? Object.create(n) : (e.prototype = n.prototype, new e());
}
var de = function() {
  return de = Object.assign || function(n) {
    for (var e, r = 1, o = arguments.length; r < o; r++) {
      e = arguments[r];
      for (var c in e) Object.prototype.hasOwnProperty.call(e, c) && (n[c] = e[c]);
    }
    return n;
  }, de.apply(this, arguments);
};
function Nt(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var Nr = !1, Me, lr, sr, Qe, er, Br, rr, dr, pr, mr, Gr, ur, hr, Yr, Kr;
function he() {
  if (!Nr) {
    Nr = !0;
    var a = navigator.userAgent, n = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(a), e = /(Mac OS X)|(Windows)|(Linux)/.exec(a);
    if (ur = /\b(iPhone|iP[ao]d)/.exec(a), hr = /\b(iP[ao]d)/.exec(a), mr = /Android/i.exec(a), Yr = /FBAN\/\w+;/i.exec(a), Kr = /Mobile/i.exec(a), Gr = !!/Win64/.exec(a), n) {
      Me = n[1] ? parseFloat(n[1]) : n[5] ? parseFloat(n[5]) : NaN, Me && document && document.documentMode && (Me = document.documentMode);
      var r = /(?:Trident\/(\d+.\d+))/.exec(a);
      Br = r ? parseFloat(r[1]) + 4 : Me, lr = n[2] ? parseFloat(n[2]) : NaN, sr = n[3] ? parseFloat(n[3]) : NaN, Qe = n[4] ? parseFloat(n[4]) : NaN, Qe ? (n = /(?:Chrome\/(\d+\.\d+))/.exec(a), er = n && n[1] ? parseFloat(n[1]) : NaN) : er = NaN;
    } else
      Me = lr = sr = er = Qe = NaN;
    if (e) {
      if (e[1]) {
        var o = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(a);
        rr = o ? parseFloat(o[1].replace("_", ".")) : !0;
      } else
        rr = !1;
      dr = !!e[2], pr = !!e[3];
    } else
      rr = dr = pr = !1;
  }
}
var br = {
  /**
   *  Check if the UA is Internet Explorer.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  ie: function() {
    return he() || Me;
  },
  /**
   * Check if we're in Internet Explorer compatibility mode.
   *
   * @return bool true if in compatibility mode, false if
   * not compatibility mode or not ie
   */
  ieCompatibilityMode: function() {
    return he() || Br > Me;
  },
  /**
   * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
   * only need this because Skype can't handle 64-bit IE yet.  We need to remove
   * this when we don't need it -- tracked by #601957.
   */
  ie64: function() {
    return br.ie() && Gr;
  },
  /**
   *  Check if the UA is Firefox.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  firefox: function() {
    return he() || lr;
  },
  /**
   *  Check if the UA is Opera.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  opera: function() {
    return he() || sr;
  },
  /**
   *  Check if the UA is WebKit.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  webkit: function() {
    return he() || Qe;
  },
  /**
   *  For Push
   *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
   */
  safari: function() {
    return br.webkit();
  },
  /**
   *  Check if the UA is a Chrome browser.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  chrome: function() {
    return he() || er;
  },
  /**
   *  Check if the user is running Windows.
   *
   *  @return bool `true' if the user's OS is Windows.
   */
  windows: function() {
    return he() || dr;
  },
  /**
   *  Check if the user is running Mac OS X.
   *
   *  @return float|bool   Returns a float if a version number is detected,
   *                       otherwise true/false.
   */
  osx: function() {
    return he() || rr;
  },
  /**
   * Check if the user is running Linux.
   *
   * @return bool `true' if the user's OS is some flavor of Linux.
   */
  linux: function() {
    return he() || pr;
  },
  /**
   * Check if the user is running on an iPhone or iPod platform.
   *
   * @return bool `true' if the user is running some flavor of the
   *    iPhone OS.
   */
  iphone: function() {
    return he() || ur;
  },
  mobile: function() {
    return he() || ur || hr || mr || Kr;
  },
  nativeApp: function() {
    return he() || Yr;
  },
  android: function() {
    return he() || mr;
  },
  ipad: function() {
    return he() || hr;
  }
}, $t = br, St = !!(typeof window < "u" && window.document && window.document.createElement), _t = {
  canUseDOM: St
}, Rt = _t, Wr = Rt, Hr;
Wr.canUseDOM && (Hr = document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
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
function Mt(a, n) {
  if (!Wr.canUseDOM || n && !("addEventListener" in document))
    return !1;
  var e = "on" + a, r = e in document;
  if (!r) {
    var o = document.createElement("div");
    o.setAttribute(e, "return;"), r = typeof o[e] == "function";
  }
  return !r && Hr && a === "wheel" && (r = document.implementation.hasFeature("Events.wheel", "3.0")), r;
}
var Ct = Mt, Dt = $t, Lt = Ct, $r = 10, Sr = 40, _r = 800;
function Vr(a) {
  var n = 0, e = 0, r = 0, o = 0;
  return "detail" in a && (e = a.detail), "wheelDelta" in a && (e = -a.wheelDelta / 120), "wheelDeltaY" in a && (e = -a.wheelDeltaY / 120), "wheelDeltaX" in a && (n = -a.wheelDeltaX / 120), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (n = e, e = 0), r = n * $r, o = e * $r, "deltaY" in a && (o = a.deltaY), "deltaX" in a && (r = a.deltaX), (r || o) && a.deltaMode && (a.deltaMode == 1 ? (r *= Sr, o *= Sr) : (r *= _r, o *= _r)), r && !n && (n = r < 1 ? -1 : 1), o && !e && (e = o < 1 ? -1 : 1), {
    spinX: n,
    spinY: e,
    pixelX: r,
    pixelY: o
  };
}
Vr.getEventType = function() {
  return Dt.firefox() ? "DOMMouseScroll" : Lt("wheel") ? "wheel" : "mousewheel";
};
var Pt = Vr, At = Pt;
const Et = /* @__PURE__ */ Nt(At);
function jt(a, n, e, r, o, c) {
  c === void 0 && (c = 0);
  var i = Ae(a, n, c), s = i.width, b = i.height, p = Math.min(s, e), u = Math.min(b, r);
  return p > u * o ? {
    width: u * o,
    height: u
  } : {
    width: p,
    height: p / o
  };
}
function zt(a) {
  return a.width > a.height ? a.width / a.naturalWidth : a.height / a.naturalHeight;
}
function Te(a, n, e, r, o) {
  o === void 0 && (o = 0);
  var c = Ae(n.width, n.height, o), i = c.width, s = c.height;
  return {
    x: Rr(a.x, i, e.width, r),
    y: Rr(a.y, s, e.height, r)
  };
}
function Rr(a, n, e, r) {
  var o = n * r / 2 - e / 2;
  return or(a, -o, o);
}
function Mr(a, n) {
  return Math.sqrt(Math.pow(a.y - n.y, 2) + Math.pow(a.x - n.x, 2));
}
function Cr(a, n) {
  return Math.atan2(n.y - a.y, n.x - a.x) * 180 / Math.PI;
}
function It(a, n, e, r, o, c, i) {
  c === void 0 && (c = 0), i === void 0 && (i = !0);
  var s = i ? Ut : Ft, b = Ae(n.width, n.height, c), p = Ae(n.naturalWidth, n.naturalHeight, c), u = {
    x: s(100, ((b.width - e.width / o) / 2 - a.x / o) / b.width * 100),
    y: s(100, ((b.height - e.height / o) / 2 - a.y / o) / b.height * 100),
    width: s(100, e.width / b.width * 100 / o),
    height: s(100, e.height / b.height * 100 / o)
  }, d = Math.round(s(p.width, u.width * p.width / 100)), l = Math.round(s(p.height, u.height * p.height / 100)), g = p.width >= p.height * r, f = g ? {
    width: Math.round(l * r),
    height: l
  } : {
    width: d,
    height: Math.round(d / r)
  }, w = de(de({}, f), {
    x: Math.round(s(p.width - f.width, u.x * p.width / 100)),
    y: Math.round(s(p.height - f.height, u.y * p.height / 100))
  });
  return {
    croppedAreaPercentages: u,
    croppedAreaPixels: w
  };
}
function Ut(a, n) {
  return Math.min(a, Math.max(0, n));
}
function Ft(a, n) {
  return n;
}
function Ot(a, n, e, r, o, c) {
  var i = Ae(n.width, n.height, e), s = or(r.width / i.width * (100 / a.width), o, c), b = {
    x: s * i.width / 2 - r.width / 2 - i.width * s * (a.x / 100),
    y: s * i.height / 2 - r.height / 2 - i.height * s * (a.y / 100)
  };
  return {
    crop: b,
    zoom: s
  };
}
function Tt(a, n, e) {
  var r = zt(n);
  return e.height > e.width ? e.height / (a.height * r) : e.width / (a.width * r);
}
function Bt(a, n, e, r, o, c) {
  e === void 0 && (e = 0);
  var i = Ae(n.naturalWidth, n.naturalHeight, e), s = or(Tt(a, n, r), o, c), b = r.height > r.width ? r.height / a.height : r.width / a.width, p = {
    x: ((i.width - a.width) / 2 - a.x) * b,
    y: ((i.height - a.height) / 2 - a.y) * b
  };
  return {
    crop: p,
    zoom: s
  };
}
function Dr(a, n) {
  return {
    x: (n.x + a.x) / 2,
    y: (n.y + a.y) / 2
  };
}
function Gt(a) {
  return a * Math.PI / 180;
}
function Ae(a, n, e) {
  var r = Gt(e);
  return {
    width: Math.abs(Math.cos(r) * a) + Math.abs(Math.sin(r) * n),
    height: Math.abs(Math.sin(r) * a) + Math.abs(Math.cos(r) * n)
  };
}
function or(a, n, e) {
  return Math.min(Math.max(a, n), e);
}
function Je() {
  for (var a = [], n = 0; n < arguments.length; n++)
    a[n] = arguments[n];
  return a.filter(function(e) {
    return typeof e == "string" && e.length > 0;
  }).join(" ").trim();
}
var Yt = `.reactEasyCrop_Container {
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
`, Kt = 1, Wt = 3, Ht = 1, Vt = (
  /** @class */
  function(a) {
    kt(n, a);
    function n() {
      var e = a !== null && a.apply(this, arguments) || this;
      return e.cropperRef = $e.createRef(), e.imageRef = $e.createRef(), e.videoRef = $e.createRef(), e.containerPosition = {
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
          var r = !0;
          e.resizeObserver = new window.ResizeObserver(function(o) {
            if (r) {
              r = !1;
              return;
            }
            e.computeSizes();
          }), e.resizeObserver.observe(e.containerRef);
        }
      }, e.preventZoomSafari = function(r) {
        return r.preventDefault();
      }, e.cleanEvents = function() {
        e.currentDoc && (e.currentDoc.removeEventListener("mousemove", e.onMouseMove), e.currentDoc.removeEventListener("mouseup", e.onDragStopped), e.currentDoc.removeEventListener("touchmove", e.onTouchMove), e.currentDoc.removeEventListener("touchend", e.onDragStopped), e.currentDoc.removeEventListener("gesturechange", e.onGestureChange), e.currentDoc.removeEventListener("gestureend", e.onGestureEnd), e.currentDoc.removeEventListener("scroll", e.onScroll));
      }, e.clearScrollEvent = function() {
        e.containerRef && e.containerRef.removeEventListener("wheel", e.onWheel), e.wheelTimer && clearTimeout(e.wheelTimer);
      }, e.onMediaLoad = function() {
        var r = e.computeSizes();
        r && (e.previousCropSize = r, e.emitCropData(), e.setInitialCrop(r), e.isInitialized = !0), e.props.onMediaLoaded && e.props.onMediaLoaded(e.mediaSize);
      }, e.setInitialCrop = function(r) {
        if (e.props.initialCroppedAreaPercentages) {
          var o = Ot(e.props.initialCroppedAreaPercentages, e.mediaSize, e.props.rotation, r, e.props.minZoom, e.props.maxZoom), c = o.crop, i = o.zoom;
          e.props.onCropChange(c), e.props.onZoomChange && e.props.onZoomChange(i);
        } else if (e.props.initialCroppedAreaPixels) {
          var s = Bt(e.props.initialCroppedAreaPixels, e.mediaSize, e.props.rotation, r, e.props.minZoom, e.props.maxZoom), c = s.crop, i = s.zoom;
          e.props.onCropChange(c), e.props.onZoomChange && e.props.onZoomChange(i);
        }
      }, e.computeSizes = function() {
        var r, o, c, i, s, b, p = e.imageRef.current || e.videoRef.current;
        if (p && e.containerRef) {
          e.containerRect = e.containerRef.getBoundingClientRect(), e.saveContainerPosition();
          var u = e.containerRect.width / e.containerRect.height, d = ((r = e.imageRef.current) === null || r === void 0 ? void 0 : r.naturalWidth) || ((o = e.videoRef.current) === null || o === void 0 ? void 0 : o.videoWidth) || 0, l = ((c = e.imageRef.current) === null || c === void 0 ? void 0 : c.naturalHeight) || ((i = e.videoRef.current) === null || i === void 0 ? void 0 : i.videoHeight) || 0, g = p.offsetWidth < d || p.offsetHeight < l, f = d / l, w = void 0;
          if (g)
            switch (e.state.mediaObjectFit) {
              default:
              case "contain":
                w = u > f ? {
                  width: e.containerRect.height * f,
                  height: e.containerRect.height
                } : {
                  width: e.containerRect.width,
                  height: e.containerRect.width / f
                };
                break;
              case "horizontal-cover":
                w = {
                  width: e.containerRect.width,
                  height: e.containerRect.width / f
                };
                break;
              case "vertical-cover":
                w = {
                  width: e.containerRect.height * f,
                  height: e.containerRect.height
                };
                break;
            }
          else
            w = {
              width: p.offsetWidth,
              height: p.offsetHeight
            };
          e.mediaSize = de(de({}, w), {
            naturalWidth: d,
            naturalHeight: l
          }), e.props.setMediaSize && e.props.setMediaSize(e.mediaSize);
          var $ = e.props.cropSize ? e.props.cropSize : jt(e.mediaSize.width, e.mediaSize.height, e.containerRect.width, e.containerRect.height, e.props.aspect, e.props.rotation);
          return (((s = e.state.cropSize) === null || s === void 0 ? void 0 : s.height) !== $.height || ((b = e.state.cropSize) === null || b === void 0 ? void 0 : b.width) !== $.width) && e.props.onCropSizeChange && e.props.onCropSizeChange($), e.setState({
            cropSize: $
          }, e.recomputeCropPosition), e.props.setCropSize && e.props.setCropSize($), $;
        }
      }, e.saveContainerPosition = function() {
        if (e.containerRef) {
          var r = e.containerRef.getBoundingClientRect();
          e.containerPosition = {
            x: r.left,
            y: r.top
          };
        }
      }, e.onMouseDown = function(r) {
        e.currentDoc && (r.preventDefault(), e.currentDoc.addEventListener("mousemove", e.onMouseMove), e.currentDoc.addEventListener("mouseup", e.onDragStopped), e.saveContainerPosition(), e.onDragStart(n.getMousePoint(r)));
      }, e.onMouseMove = function(r) {
        return e.onDrag(n.getMousePoint(r));
      }, e.onScroll = function(r) {
        e.currentDoc && (r.preventDefault(), e.saveContainerPosition());
      }, e.onTouchStart = function(r) {
        e.currentDoc && (e.isTouching = !0, !(e.props.onTouchRequest && !e.props.onTouchRequest(r)) && (e.currentDoc.addEventListener("touchmove", e.onTouchMove, {
          passive: !1
        }), e.currentDoc.addEventListener("touchend", e.onDragStopped), e.saveContainerPosition(), r.touches.length === 2 ? e.onPinchStart(r) : r.touches.length === 1 && e.onDragStart(n.getTouchPoint(r.touches[0]))));
      }, e.onTouchMove = function(r) {
        r.preventDefault(), r.touches.length === 2 ? e.onPinchMove(r) : r.touches.length === 1 && e.onDrag(n.getTouchPoint(r.touches[0]));
      }, e.onGestureStart = function(r) {
        e.currentDoc && (r.preventDefault(), e.currentDoc.addEventListener("gesturechange", e.onGestureChange), e.currentDoc.addEventListener("gestureend", e.onGestureEnd), e.gestureZoomStart = e.props.zoom, e.gestureRotationStart = e.props.rotation);
      }, e.onGestureChange = function(r) {
        if (r.preventDefault(), !e.isTouching) {
          var o = n.getMousePoint(r), c = e.gestureZoomStart - 1 + r.scale;
          if (e.setNewZoom(c, o, {
            shouldUpdatePosition: !0
          }), e.props.onRotationChange) {
            var i = e.gestureRotationStart + r.rotation;
            e.props.onRotationChange(i);
          }
        }
      }, e.onGestureEnd = function(r) {
        e.cleanEvents();
      }, e.onDragStart = function(r) {
        var o, c, i = r.x, s = r.y;
        e.dragStartPosition = {
          x: i,
          y: s
        }, e.dragStartCrop = de({}, e.props.crop), (c = (o = e.props).onInteractionStart) === null || c === void 0 || c.call(o);
      }, e.onDrag = function(r) {
        var o = r.x, c = r.y;
        e.currentWindow && (e.rafDragTimeout && e.currentWindow.cancelAnimationFrame(e.rafDragTimeout), e.rafDragTimeout = e.currentWindow.requestAnimationFrame(function() {
          if (e.state.cropSize && !(o === void 0 || c === void 0)) {
            var i = o - e.dragStartPosition.x, s = c - e.dragStartPosition.y, b = {
              x: e.dragStartCrop.x + i,
              y: e.dragStartCrop.y + s
            }, p = e.props.restrictPosition ? Te(b, e.mediaSize, e.state.cropSize, e.props.zoom, e.props.rotation) : b;
            e.props.onCropChange(p);
          }
        }));
      }, e.onDragStopped = function() {
        var r, o;
        e.isTouching = !1, e.cleanEvents(), e.emitCropData(), (o = (r = e.props).onInteractionEnd) === null || o === void 0 || o.call(r);
      }, e.onWheel = function(r) {
        if (e.currentWindow && !(e.props.onWheelRequest && !e.props.onWheelRequest(r))) {
          r.preventDefault();
          var o = n.getMousePoint(r), c = Et(r).pixelY, i = e.props.zoom - c * e.props.zoomSpeed / 200;
          e.setNewZoom(i, o, {
            shouldUpdatePosition: !0
          }), e.state.hasWheelJustStarted || e.setState({
            hasWheelJustStarted: !0
          }, function() {
            var s, b;
            return (b = (s = e.props).onInteractionStart) === null || b === void 0 ? void 0 : b.call(s);
          }), e.wheelTimer && clearTimeout(e.wheelTimer), e.wheelTimer = e.currentWindow.setTimeout(function() {
            return e.setState({
              hasWheelJustStarted: !1
            }, function() {
              var s, b;
              return (b = (s = e.props).onInteractionEnd) === null || b === void 0 ? void 0 : b.call(s);
            });
          }, 250);
        }
      }, e.getPointOnContainer = function(r, o) {
        var c = r.x, i = r.y;
        if (!e.containerRect)
          throw new Error("The Cropper is not mounted");
        return {
          x: e.containerRect.width / 2 - (c - o.x),
          y: e.containerRect.height / 2 - (i - o.y)
        };
      }, e.getPointOnMedia = function(r) {
        var o = r.x, c = r.y, i = e.props, s = i.crop, b = i.zoom;
        return {
          x: (o + s.x) / b,
          y: (c + s.y) / b
        };
      }, e.setNewZoom = function(r, o, c) {
        var i = c === void 0 ? {} : c, s = i.shouldUpdatePosition, b = s === void 0 ? !0 : s;
        if (!(!e.state.cropSize || !e.props.onZoomChange)) {
          var p = or(r, e.props.minZoom, e.props.maxZoom);
          if (b) {
            var u = e.getPointOnContainer(o, e.containerPosition), d = e.getPointOnMedia(u), l = {
              x: d.x * p - u.x,
              y: d.y * p - u.y
            }, g = e.props.restrictPosition ? Te(l, e.mediaSize, e.state.cropSize, p, e.props.rotation) : l;
            e.props.onCropChange(g);
          }
          e.props.onZoomChange(p);
        }
      }, e.getCropData = function() {
        if (!e.state.cropSize)
          return null;
        var r = e.props.restrictPosition ? Te(e.props.crop, e.mediaSize, e.state.cropSize, e.props.zoom, e.props.rotation) : e.props.crop;
        return It(r, e.mediaSize, e.state.cropSize, e.getAspect(), e.props.zoom, e.props.rotation, e.props.restrictPosition);
      }, e.emitCropData = function() {
        var r = e.getCropData();
        if (r) {
          var o = r.croppedAreaPercentages, c = r.croppedAreaPixels;
          e.props.onCropComplete && e.props.onCropComplete(o, c), e.props.onCropAreaChange && e.props.onCropAreaChange(o, c);
        }
      }, e.emitCropAreaChange = function() {
        var r = e.getCropData();
        if (r) {
          var o = r.croppedAreaPercentages, c = r.croppedAreaPixels;
          e.props.onCropAreaChange && e.props.onCropAreaChange(o, c);
        }
      }, e.recomputeCropPosition = function() {
        var r, o;
        if (e.state.cropSize) {
          var c = e.props.crop;
          if (e.isInitialized && (!((r = e.previousCropSize) === null || r === void 0) && r.width) && (!((o = e.previousCropSize) === null || o === void 0) && o.height)) {
            var i = Math.abs(e.previousCropSize.width - e.state.cropSize.width) > 1e-6 || Math.abs(e.previousCropSize.height - e.state.cropSize.height) > 1e-6;
            if (i) {
              var s = e.state.cropSize.width / e.previousCropSize.width, b = e.state.cropSize.height / e.previousCropSize.height;
              c = {
                x: e.props.crop.x * s,
                y: e.props.crop.y * b
              };
            }
          }
          var p = e.props.restrictPosition ? Te(c, e.mediaSize, e.state.cropSize, e.props.zoom, e.props.rotation) : c;
          e.previousCropSize = e.state.cropSize, e.props.onCropChange(p), e.emitCropData();
        }
      }, e.onKeyDown = function(r) {
        var o, c, i = e.props, s = i.crop, b = i.onCropChange, p = i.keyboardStep, u = i.zoom, d = i.rotation, l = p;
        if (e.state.cropSize) {
          r.shiftKey && (l *= 0.2);
          var g = de({}, s);
          switch (r.key) {
            case "ArrowUp":
              g.y -= l, r.preventDefault();
              break;
            case "ArrowDown":
              g.y += l, r.preventDefault();
              break;
            case "ArrowLeft":
              g.x -= l, r.preventDefault();
              break;
            case "ArrowRight":
              g.x += l, r.preventDefault();
              break;
            default:
              return;
          }
          e.props.restrictPosition && (g = Te(g, e.mediaSize, e.state.cropSize, u, d)), r.repeat || (c = (o = e.props).onInteractionStart) === null || c === void 0 || c.call(o), b(g);
        }
      }, e.onKeyUp = function(r) {
        var o, c;
        switch (r.key) {
          case "ArrowUp":
          case "ArrowDown":
          case "ArrowLeft":
          case "ArrowRight":
            r.preventDefault();
            break;
          default:
            return;
        }
        e.emitCropData(), (c = (o = e.props).onInteractionEnd) === null || c === void 0 || c.call(o);
      }, e;
    }
    return n.prototype.componentDidMount = function() {
      !this.currentDoc || !this.currentWindow || (this.containerRef && (this.containerRef.ownerDocument && (this.currentDoc = this.containerRef.ownerDocument), this.currentDoc.defaultView && (this.currentWindow = this.currentDoc.defaultView), this.initResizeObserver(), typeof window.ResizeObserver > "u" && this.currentWindow.addEventListener("resize", this.computeSizes), this.props.zoomWithScroll && this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }), this.containerRef.addEventListener("gesturestart", this.onGestureStart)), this.currentDoc.addEventListener("scroll", this.onScroll), this.props.disableAutomaticStylesInjection || (this.styleRef = this.currentDoc.createElement("style"), this.styleRef.setAttribute("type", "text/css"), this.props.nonce && this.styleRef.setAttribute("nonce", this.props.nonce), this.styleRef.innerHTML = Yt, this.currentDoc.head.appendChild(this.styleRef)), this.imageRef.current && this.imageRef.current.complete && this.onMediaLoad(), this.props.setImageRef && this.props.setImageRef(this.imageRef), this.props.setVideoRef && this.props.setVideoRef(this.videoRef), this.props.setCropperRef && this.props.setCropperRef(this.cropperRef));
    }, n.prototype.componentWillUnmount = function() {
      var e, r;
      !this.currentDoc || !this.currentWindow || (typeof window.ResizeObserver > "u" && this.currentWindow.removeEventListener("resize", this.computeSizes), (e = this.resizeObserver) === null || e === void 0 || e.disconnect(), this.containerRef && this.containerRef.removeEventListener("gesturestart", this.preventZoomSafari), this.styleRef && ((r = this.styleRef.parentNode) === null || r === void 0 || r.removeChild(this.styleRef)), this.cleanEvents(), this.props.zoomWithScroll && this.clearScrollEvent());
    }, n.prototype.componentDidUpdate = function(e) {
      var r, o, c, i, s, b, p, u, d;
      e.rotation !== this.props.rotation ? (this.computeSizes(), this.recomputeCropPosition()) : e.aspect !== this.props.aspect ? this.computeSizes() : e.objectFit !== this.props.objectFit ? this.computeSizes() : e.zoom !== this.props.zoom ? this.recomputeCropPosition() : ((r = e.cropSize) === null || r === void 0 ? void 0 : r.height) !== ((o = this.props.cropSize) === null || o === void 0 ? void 0 : o.height) || ((c = e.cropSize) === null || c === void 0 ? void 0 : c.width) !== ((i = this.props.cropSize) === null || i === void 0 ? void 0 : i.width) ? this.computeSizes() : (((s = e.crop) === null || s === void 0 ? void 0 : s.x) !== ((b = this.props.crop) === null || b === void 0 ? void 0 : b.x) || ((p = e.crop) === null || p === void 0 ? void 0 : p.y) !== ((u = this.props.crop) === null || u === void 0 ? void 0 : u.y)) && this.emitCropAreaChange(), e.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef && (this.props.zoomWithScroll ? this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }) : this.clearScrollEvent()), e.video !== this.props.video && ((d = this.videoRef.current) === null || d === void 0 || d.load());
      var l = this.getObjectFit();
      l !== this.state.mediaObjectFit && this.setState({
        mediaObjectFit: l
      }, this.computeSizes);
    }, n.prototype.getAspect = function() {
      var e = this.props, r = e.cropSize, o = e.aspect;
      return r ? r.width / r.height : o;
    }, n.prototype.getObjectFit = function() {
      var e, r, o, c;
      if (this.props.objectFit === "cover") {
        var i = this.imageRef.current || this.videoRef.current;
        if (i && this.containerRef) {
          this.containerRect = this.containerRef.getBoundingClientRect();
          var s = this.containerRect.width / this.containerRect.height, b = ((e = this.imageRef.current) === null || e === void 0 ? void 0 : e.naturalWidth) || ((r = this.videoRef.current) === null || r === void 0 ? void 0 : r.videoWidth) || 0, p = ((o = this.imageRef.current) === null || o === void 0 ? void 0 : o.naturalHeight) || ((c = this.videoRef.current) === null || c === void 0 ? void 0 : c.videoHeight) || 0, u = b / p;
          return u < s ? "horizontal-cover" : "vertical-cover";
        }
        return "horizontal-cover";
      }
      return this.props.objectFit;
    }, n.prototype.onPinchStart = function(e) {
      var r = n.getTouchPoint(e.touches[0]), o = n.getTouchPoint(e.touches[1]);
      this.lastPinchDistance = Mr(r, o), this.lastPinchRotation = Cr(r, o), this.onDragStart(Dr(r, o));
    }, n.prototype.onPinchMove = function(e) {
      var r = this;
      if (!(!this.currentDoc || !this.currentWindow)) {
        var o = n.getTouchPoint(e.touches[0]), c = n.getTouchPoint(e.touches[1]), i = Dr(o, c);
        this.onDrag(i), this.rafPinchTimeout && this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout), this.rafPinchTimeout = this.currentWindow.requestAnimationFrame(function() {
          var s = Mr(o, c), b = r.props.zoom * (s / r.lastPinchDistance);
          r.setNewZoom(b, i, {
            shouldUpdatePosition: !1
          }), r.lastPinchDistance = s;
          var p = Cr(o, c), u = r.props.rotation + (p - r.lastPinchRotation);
          r.props.onRotationChange && r.props.onRotationChange(u), r.lastPinchRotation = p;
        });
      }
    }, n.prototype.render = function() {
      var e = this, r, o = this.props, c = o.image, i = o.video, s = o.mediaProps, b = o.cropperProps, p = o.transform, u = o.crop, d = u.x, l = u.y, g = o.rotation, f = o.zoom, w = o.cropShape, $ = o.showGrid, N = o.roundCropAreaPixels, S = o.style, A = S.containerStyle, B = S.cropAreaStyle, F = S.mediaStyle, E = o.classes, O = E.containerClassName, v = E.cropAreaClassName, z = E.mediaClassName, L = (r = this.state.mediaObjectFit) !== null && r !== void 0 ? r : this.getObjectFit();
      return $e.createElement("div", {
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        ref: function(V) {
          return e.containerRef = V;
        },
        "data-testid": "container",
        style: A,
        className: Je("reactEasyCrop_Container", O)
      }, c ? $e.createElement("img", de({
        alt: "",
        className: Je("reactEasyCrop_Image", L === "contain" && "reactEasyCrop_Contain", L === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", L === "vertical-cover" && "reactEasyCrop_Cover_Vertical", z)
      }, s, {
        src: c,
        ref: this.imageRef,
        style: de(de({}, F), {
          transform: p || "translate(".concat(d, "px, ").concat(l, "px) rotate(").concat(g, "deg) scale(").concat(f, ")")
        }),
        onLoad: this.onMediaLoad
      })) : i && $e.createElement("video", de({
        autoPlay: !0,
        playsInline: !0,
        loop: !0,
        muted: !0,
        className: Je("reactEasyCrop_Video", L === "contain" && "reactEasyCrop_Contain", L === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", L === "vertical-cover" && "reactEasyCrop_Cover_Vertical", z)
      }, s, {
        ref: this.videoRef,
        onLoadedMetadata: this.onMediaLoad,
        style: de(de({}, F), {
          transform: p || "translate(".concat(d, "px, ").concat(l, "px) rotate(").concat(g, "deg) scale(").concat(f, ")")
        }),
        controls: !1
      }), (Array.isArray(i) ? i : [{
        src: i
      }]).map(function(U) {
        return $e.createElement("source", de({
          key: U.src
        }, U));
      })), this.state.cropSize && $e.createElement("div", de({
        ref: this.cropperRef,
        style: de(de({}, B), {
          width: N ? Math.round(this.state.cropSize.width) : this.state.cropSize.width,
          height: N ? Math.round(this.state.cropSize.height) : this.state.cropSize.height
        }),
        tabIndex: 0,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        "data-testid": "cropper",
        className: Je("reactEasyCrop_CropArea", w === "round" && "reactEasyCrop_CropAreaRound", $ && "reactEasyCrop_CropAreaGrid", v)
      }, b)));
    }, n.defaultProps = {
      zoom: 1,
      rotation: 0,
      aspect: 4 / 3,
      maxZoom: Wt,
      minZoom: Kt,
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
      keyboardStep: Ht
    }, n.getMousePoint = function(e) {
      return {
        x: Number(e.clientX),
        y: Number(e.clientY)
      };
    }, n.getTouchPoint = function(e) {
      return {
        x: Number(e.clientX),
        y: Number(e.clientY)
      };
    }, n;
  }($e.Component)
);
const Lr = ge, Zt = (a) => new Promise((n, e) => {
  const r = new Image();
  r.addEventListener("load", () => n(r)), r.addEventListener("error", (o) => e(o)), r.setAttribute("crossOrigin", "anonymous"), r.src = a;
}), Zr = (a) => a * Math.PI / 180, Xt = (a, n, e) => {
  const r = Zr(e);
  return {
    width: Math.abs(Math.cos(r) * a) + Math.abs(Math.sin(r) * n),
    height: Math.abs(Math.sin(r) * a) + Math.abs(Math.cos(r) * n)
  };
}, Jt = async (a, n, e = "image/jpeg", r = 0) => {
  const o = await Zt(a), c = document.createElement("canvas"), i = c.getContext("2d");
  if (!i)
    throw new Error("Canvas context is not available");
  const s = Zr(r), { width: b, height: p } = Xt(
    o.width,
    o.height,
    r
  );
  c.width = b, c.height = p, i.translate(b / 2, p / 2), i.rotate(s), i.translate(-o.width / 2, -o.height / 2), i.drawImage(o, 0, 0);
  const u = document.createElement("canvas"), d = u.getContext("2d");
  if (!d)
    throw new Error("Canvas context is not available");
  return u.width = n.width, u.height = n.height, d.drawImage(
    c,
    n.x,
    n.y,
    n.width,
    n.height,
    0,
    0,
    n.width,
    n.height
  ), new Promise((l, g) => {
    u.toBlob(
      (f) => {
        if (!f) {
          g(new Error("Image cropping failed"));
          return;
        }
        l(f);
      },
      e,
      0.95
    );
  });
}, Xr = ({
  isOpen: a,
  imageSrc: n,
  fileType: e = "image/jpeg",
  fileName: r = "cropped-image",
  aspect: o = 1 / 1,
  title: c = "Crop Image",
  onClose: i,
  onApply: s
}) => {
  const [b, p] = _({ x: 0, y: 0 }), [u, d] = _(1), [l, g] = _(null);
  q(() => {
    a && (p({ x: 0, y: 0 }), d(1), g(null));
  }, [a]);
  const f = ot(($, N) => {
    g(N);
  }, []), w = async () => {
    var $, N;
    if (!(!n || !l))
      try {
        const S = await Jt(
          n,
          l,
          e
        ), A = ((N = ($ = e == null ? void 0 : e.split("/")) == null ? void 0 : $[1]) == null ? void 0 : N.replace("jpeg", "jpg")) || "jpg", B = new File([S], `${r}.${A}`, {
          type: e
        });
        s == null || s(B);
      } catch {
        i == null || i();
      }
  };
  return a ? /* @__PURE__ */ h(
    "div",
    {
      className: x(
        y.mediaPicker.cropModal,
        "fixed inset-0 z-50 flex items-center justify-center p-4"
      ),
      children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: "fixed inset-0 bg-gray-500 opacity-75",
            onClick: i
          }
        ),
        /* @__PURE__ */ h("div", { className: "relative bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col dark:bg-gray-800", children: [
          /* @__PURE__ */ h("div", { className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0", children: [
            /* @__PURE__ */ t("h3", { className: "text-lg font-medium text-gray-900 dark:text-white", children: c }),
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                onClick: i,
                className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
                "aria-label": "Close crop modal",
                children: /* @__PURE__ */ t(be, { icon: "mdi:close", className: "w-6 h-6" })
              }
            )
          ] }),
          /* @__PURE__ */ h("div", { className: "p-4 space-y-4", children: [
            /* @__PURE__ */ t("div", { className: "relative h-72 w-full bg-gray-900 rounded-md overflow-hidden", children: n && /* @__PURE__ */ t(
              Vt,
              {
                image: n,
                crop: b,
                zoom: u,
                aspect: o,
                onCropChange: p,
                onZoomChange: d,
                onCropComplete: f
              }
            ) }),
            /* @__PURE__ */ h("div", { className: "space-y-2", children: [
              /* @__PURE__ */ t("label", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Zoom" }),
              /* @__PURE__ */ t(
                "input",
                {
                  type: "range",
                  min: 1,
                  max: 3,
                  step: 0.1,
                  value: u,
                  onChange: ($) => d(Number($.target.value)),
                  className: "w-full"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ h("div", { className: "px-4 py-3 flex justify-end gap-3 border-t border-gray-200 dark:border-gray-700 sm:!px-6", children: [
            /* @__PURE__ */ t(
              Lr,
              {
                type: "button",
                onClick: i,
                variant: "outlined",
                color: "default",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ t(
              Lr,
              {
                type: "button",
                onClick: w,
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
}, qt = ge, _e = (a) => {
  typeof a == "string" && a.startsWith("blob:") && URL.revokeObjectURL(a);
}, Qt = ({
  label: a = "",
  value: n = null,
  onChange: e,
  required: r = !1,
  accept: o = "image/*",
  aspect: c = "1",
  id: i,
  dragDrop: s = !1,
  cropImage: b = !1,
  name: p = "",
  parentClass: u = "",
  errorMessage: d = ""
}) => {
  const [l, g] = _(n), [f, w] = _(!1), [$, N] = _(!1), [S, A] = _(""), [B, F] = _("image/jpeg"), [E, O] = _("cropped-image"), v = le(null), z = le(""), L = le("");
  q(() => {
    if (n instanceof File) {
      const R = URL.createObjectURL(n);
      _e(L.current), L.current = R, g({ file: n, preview: R });
    } else n && typeof n == "object" && "preview" in n, g(n);
  }, [n]), q(() => () => {
    _e(L.current), _e(z.current);
  }, []);
  const U = () => {
    N(!1), _e(z.current), z.current = "", A(""), v.current && (v.current.value = "");
  }, V = (R) => {
    const W = URL.createObjectURL(R);
    _e(L.current), L.current = W, g({ file: R, preview: W }), e == null || e(R), U();
  }, X = (R) => {
    if (!R || R.length === 0)
      return;
    const W = R[0];
    if (b) {
      const j = URL.createObjectURL(W);
      _e(z.current), z.current = j, A(j), F(W.type || "image/jpeg"), O(
        (W.name || "cropped-image").replace(/\.[^/.]+$/, "")
      ), N(!0);
      return;
    }
    const pe = URL.createObjectURL(W);
    _e(L.current), L.current = pe, g({ file: W, preview: pe }), e == null || e(W);
  }, ae = (R) => {
    R && R.stopPropagation(), _e(L.current), L.current = "", g(null), e == null || e(null), v.current && (v.current.value = "");
  }, ne = (R) => {
    s && (R.preventDefault(), w(!0));
  }, P = (R) => {
    s && (R.preventDefault(), w(!1));
  }, D = (R) => {
    var W, pe, j, fe;
    s && (R.preventDefault(), w(!1), (fe = (j = (pe = (W = R.dataTransfer) == null ? void 0 : W.files) == null ? void 0 : pe[0]) == null ? void 0 : j.type) != null && fe.includes("image/") && X(R.dataTransfer.files));
  }, I = () => {
    var R;
    (R = v.current) == null || R.click();
  }, K = l && typeof l == "object" && "preview" in l ? l.preview : typeof l == "string" ? l : "";
  return /* @__PURE__ */ h(Z, { children: [
    /* @__PURE__ */ h(
      "div",
      {
        className: x(
          y.mediaPicker.image,
          y.field.wrapper,
          u || "col-span-12"
        ),
        children: [
          /* @__PURE__ */ t(we, { label: a, required: r }),
          /* @__PURE__ */ h(
            "div",
            {
              className: x(
                y.mediaPicker.dropzone,
                "relative rounded-md p-2 transition-all",
                f ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800",
                d ? "border-red-500" : ""
              ),
              onDragOver: ne,
              onDragLeave: P,
              onDrop: D,
              id: `field-${p}`,
              children: [
                /* @__PURE__ */ t(
                  "input",
                  {
                    ref: v,
                    id: i,
                    type: "file",
                    accept: o,
                    onChange: (R) => X(R.target.files),
                    required: r && !l,
                    className: "absolute opacity-0 right-[50%] top-[80%] -translate-y-1/2 pointer-events-none h-[10px]"
                  }
                ),
                /* @__PURE__ */ h(
                  "div",
                  {
                    className: `flex items-center space-x-4 transition-all ${f ? "opacity-50" : ""}`,
                    children: [
                      l ? /* @__PURE__ */ h("div", { className: "relative group", children: [
                        /* @__PURE__ */ t(
                          "img",
                          {
                            src: K,
                            alt: "preview",
                            className: "object-cover w-20 h-20 rounded-full shadow-md"
                          }
                        ),
                        !r && /* @__PURE__ */ t(
                          "button",
                          {
                            type: "button",
                            onClick: ae,
                            className: "absolute top-0 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
                            "aria-label": "Remove image",
                            children: /* @__PURE__ */ t(be, { icon: "mdi:close", className: "w-3 h-3" })
                          }
                        )
                      ] }) : /* @__PURE__ */ t("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ t(
                        be,
                        {
                          icon: "ri:image-add-fill",
                          className: "text-gray-400 w-10 h-10"
                        }
                      ) }),
                      /* @__PURE__ */ h("div", { className: "space-y-1", children: [
                        /* @__PURE__ */ t(
                          qt,
                          {
                            type: "button",
                            onClick: I,
                            variant: "outlined",
                            color: "default",
                            children: l ? "Change Image" : "Select Image"
                          }
                        ),
                        s && !l && /* @__PURE__ */ t("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop" })
                      ] })
                    ]
                  }
                ),
                s && f && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-md", children: /* @__PURE__ */ t("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg", children: "Drop image here" }) })
              ]
            }
          ),
          d && /* @__PURE__ */ t(
            "span",
            {
              className: x(
                y.field.error,
                "text-red-500 text-xs mt-1"
              ),
              children: d
            }
          )
        ]
      },
      p
    ),
    /* @__PURE__ */ t(
      Xr,
      {
        isOpen: $,
        imageSrc: S,
        fileType: B,
        fileName: E,
        onClose: U,
        onApply: V,
        aspect: Number(c)
      }
    )
  ] });
}, Jr = tr.forwardRef(
  ({
    label: a,
    value: n,
    name: e,
    required: r,
    parentClass: o = "",
    className: c = "",
    type: i = "text",
    onKeyDown: s,
    negativeNumberAllow: b = !0,
    defaultValue: p = "",
    field: u = {},
    onChange: d,
    mask: l = "",
    errorMessage: g = "",
    maskApplyOnValue: f = !0,
    ...w
  }, $) => {
    const [N, S] = _(!1), A = (E) => {
      if (i === "number") {
        if (["e", "E", "+"].includes(E.key)) {
          E.preventDefault();
          return;
        }
        if (b == !1 && E.key === "-") {
          E.preventDefault();
          return;
        }
        if (["ArrowUp", "ArrowDown"].includes(E.key)) {
          E.preventDefault();
          return;
        }
      }
      s == null || s(E);
    }, B = x(
      y.field.input,
      "h-10 placeholder-gray-400 dark:placeholder-gray-400",
      i === "password" ? "pr-10" : "",
      i === "number" ? "no-spinner" : "",
      c,
      g ? "border-red-500" : ""
    );
    function F(E, O) {
      if (!E) return E;
      const v = String(E).replace(/[^a-zA-Z0-9]/g, "");
      let z = "", L = 0;
      for (let U = 0; U < (O == null ? void 0 : O.length) && L < v.length; U++) {
        const V = O[U], X = v[L];
        V === "9" ? /\d/.test(X) ? (z += X, L++) : (L++, U--) : V === "A" ? /[a-zA-Z]/.test(X) ? (z += X, L++) : (L++, U--) : V === "X" ? /[a-zA-Z0-9]/.test(X) ? (z += X, L++) : (L++, U--) : V === "*" ? (z += X, L++) : (z += V, X === V && L++);
      }
      return z;
    }
    return q(() => {
      if (p) {
        const E = n || p;
        setTimeout(() => {
          d == null || d(E);
        }, 100);
      }
    }, [p]), /* @__PURE__ */ t(Z, { children: /* @__PURE__ */ h(
      "div",
      {
        className: x(
          y.field.wrapper,
          o || "col-span-12"
        ),
        children: [
          /* @__PURE__ */ t(
            we,
            {
              label: a,
              required: r,
              infoText: u == null ? void 0 : u.infoText
            }
          ),
          /* @__PURE__ */ h("div", { className: "relative", children: [
            /* @__PURE__ */ t(
              "input",
              {
                type: i === "password" && N ? "text" : i,
                ref: $,
                id: `field-${e}`,
                required: r,
                onKeyDown: A,
                className: B,
                value: l ? F(n, l) : n,
                onChange: (E) => {
                  d(l && f ? F(E.target.value, l) : E.target.value);
                },
                ...w
              }
            ),
            g && /* @__PURE__ */ t(
              "span",
              {
                className: x(
                  y.field.error,
                  "text-red-500 text-xs mt-1"
                ),
                children: g
              }
            ),
            i === "password" && /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                tabIndex: -1,
                onClick: () => S((E) => !E),
                className: "absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200",
                children: /* @__PURE__ */ t(
                  be,
                  {
                    icon: N ? "mdi:eye-outline" : "mdi:eye-off-outline",
                    className: "w-5 h-5"
                  }
                )
              }
            )
          ] })
        ]
      },
      e
    ) });
  }
);
Jr.displayName = "Input";
const ea = ({
  editorKey: a = "",
  value: n = "",
  name: e = "",
  onChange: r,
  label: o = "",
  required: c = !1,
  placeholder: i = "",
  parentClass: s = "col-span-12",
  height: b = 400,
  inline: p = !1,
  disabled: u = !1,
  plugins: d,
  toolbar: l,
  menubar: g = !1,
  fontFamily: f = "Inter, sans-serif",
  initConfig: w = {},
  imageUploadHandler: $,
  errorMessage: N = ""
}) => {
  const S = [
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
  ], A = "undo redo | blocks | bold italic underline forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media table | removeformat | code fullscreen preview", B = (F) => new Promise((E, O) => {
    if (!$) {
      E(`data:${F.blob().type};base64,${F.base64()}`);
      return;
    }
    $(F).then((v) => {
      v ? E(v) : O("Upload failed: No URL returned");
    }).catch((v) => {
      O(
        typeof v == "string" ? v : (v == null ? void 0 : v.message) || "Image upload failed"
      );
    });
  });
  return /* @__PURE__ */ h(
    "div",
    {
      className: x(y.field.wrapper, s),
      id: `field-${e}`,
      children: [
        o && /* @__PURE__ */ t(we, { label: o, required: c }),
        /* @__PURE__ */ t(
          bt,
          {
            apiKey: a,
            value: n,
            disabled: u,
            init: {
              height: b,
              inline: p,
              menubar: g,
              branding: !1,
              statusbar: !0,
              automatic_uploads: !0,
              images_upload_handler: B,
              plugins: d ?? S,
              toolbar: l ?? A,
              placeholder: i,
              content_style: `
            body {
                font-family: ${f};
                border: ${N ? "1px solid blue" : ""};
            }
            `,
              ...w
            },
            onEditorChange: (F) => {
              r == null || r(F);
            }
          }
        ),
        N && /* @__PURE__ */ t(
          "span",
          {
            className: x(
              y.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: N
          }
        )
      ]
    }
  );
}, ra = ({
  name: a = "",
  label: n = "",
  options: e = [],
  value: r = null,
  onChange: o,
  disabled: c = !1,
  required: i = !1,
  parentClass: s = "col-span-12",
  className: b = "",
  errorMessage: p = "",
  multiSelect: u = !1
}) => {
  const d = Array.isArray(e) && e.length > 0, l = (w) => d ? u ? Array.isArray(r) && r.includes(w) : r === w : !!r, g = (w) => {
    o == null || o(w.target.checked, a);
  }, f = (w, $) => {
    if (o)
      if (!u)
        o($ ? w : "", a);
      else {
        const N = Array.isArray(r) ? [...r] : [];
        if ($)
          N.includes(w) || N.push(w);
        else {
          const S = N.indexOf(w);
          S > -1 && N.splice(S, 1);
        }
        o(N, a);
      }
  };
  return q(() => {
    let w;
    d ? u ? w = Array.isArray(r) ? r : [] : w = r || "" : w = !!r, setTimeout(() => {
      o == null || o(w, a);
    }, 100);
  }, []), d ? /* @__PURE__ */ t(Z, { children: /* @__PURE__ */ h("div", { className: x(y.field.wrapper, s), children: [
    /* @__PURE__ */ t(we, { label: n, required: i }),
    /* @__PURE__ */ t("div", { className: "flex flex-col space-y-2", children: e.map((w, $) => /* @__PURE__ */ h("div", { className: "flex items-center", children: [
      /* @__PURE__ */ t(
        "input",
        {
          type: "checkbox",
          name: a,
          id: `field-${a}`,
          value: w.value,
          checked: l(w.value),
          disabled: c || !!w.disabled,
          required: i && $ === 0,
          onChange: (N) => f(w.value, N.target.checked),
          className: x(
            y.field.input,
            "h-4 w-4 cursor-pointer text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400",
            b
          )
        },
        a
      ),
      w.label && /* @__PURE__ */ t(
        "label",
        {
          htmlFor: a,
          className: "ml-2 text-sm text-gray-700 dark:text-gray-200 select-none",
          children: w.label
        }
      )
    ] }, w.value || w.label)) }),
    p && /* @__PURE__ */ t(
      "span",
      {
        className: x(
          y.field.error,
          "text-red-500 text-xs mt-1"
        ),
        children: p
      }
    )
  ] }) }) : /* @__PURE__ */ h(
    "div",
    {
      className: x(
        y.field.wrapper,
        "flex items-center",
        s
      ),
      children: [
        /* @__PURE__ */ t(
          "input",
          {
            type: "checkbox",
            name: a,
            checked: l(),
            disabled: c,
            required: i,
            onChange: g,
            className: x(
              y.field.input,
              "h-4 w-4 text-blue-600 cursor-pointer border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400",
              b
            )
          }
        ),
        n && /* @__PURE__ */ t(
          "label",
          {
            htmlFor: a,
            className: "ml-2 text-sm text-gray-700 dark:text-gray-200 select-none",
            children: n
          }
        )
      ]
    }
  );
}, Pr = ge, ta = ({
  label: a = "",
  value: n = null,
  onChange: e,
  required: r = !1,
  accept: o = "audio/*",
  id: c,
  dragDrop: i = !1,
  name: s = "",
  parentClass: b = "",
  errorMessage: p = "",
  maxSize: u = 0
}) => {
  const [d, l] = _(
    null
  ), [g, f] = _(!1), w = le(null), $ = u * 1024 * 1024;
  q(() => {
    if (!n) {
      N(), l(null);
      return;
    }
    if (n instanceof File) {
      const v = URL.createObjectURL(n);
      return l({ file: n, preview: v }), () => {
        URL.revokeObjectURL(v);
      };
    } else typeof n == "string" ? l({ preview: n }) : n != null && n.preview && l(n);
  }, [n]);
  const N = () => {
    d != null && d.preview && d.preview.startsWith("blob:") && URL.revokeObjectURL(d.preview);
  }, S = (v) => {
    if (!v || v.length === 0)
      return;
    const z = v[0];
    if ($ && z.size > $) {
      Ce(
        `Audio is too large. Maximum allowed size is ${u} MB`,
        { variant: "warning" }
      );
      return;
    }
    const L = URL.createObjectURL(z);
    N(), l({ file: z, preview: L }), e == null || e(z);
  }, A = (v) => {
    v && v.stopPropagation(), N(), l(null), e == null || e(null), w.current && (w.current.value = "");
  }, B = (v) => {
    i && (v.preventDefault(), f(!0));
  }, F = (v) => {
    i && (v.preventDefault(), f(!1));
  }, E = (v) => {
    var z, L, U, V;
    i && (v.preventDefault(), f(!1), (V = (U = (L = (z = v.dataTransfer) == null ? void 0 : z.files) == null ? void 0 : L[0]) == null ? void 0 : U.type) != null && V.includes("audio/") && S(v.dataTransfer.files));
  }, O = () => {
    var v;
    (v = w.current) == null || v.click();
  };
  return /* @__PURE__ */ h(
    "div",
    {
      className: x(
        y.mediaPicker.audio,
        y.field.wrapper,
        b || "col-span-12"
      ),
      children: [
        /* @__PURE__ */ t(we, { label: a, required: r }),
        /* @__PURE__ */ h(
          "div",
          {
            className: x(
              y.mediaPicker.dropzone,
              "relative rounded-lg p-2 transition-all",
              g ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800",
              p ? "border-red-500" : ""
            ),
            onDragOver: B,
            onDragLeave: F,
            onDrop: E,
            id: `field-${s}`,
            children: [
              /* @__PURE__ */ t(
                "input",
                {
                  ref: w,
                  id: c,
                  type: "file",
                  accept: o,
                  onChange: (v) => S(v.target.files),
                  required: r && !d,
                  className: "absolute opacity-0 right-[50%] top-[80%] -translate-y-1/2 pointer-events-none h-[10px]"
                }
              ),
              /* @__PURE__ */ t(
                "div",
                {
                  className: `flex items-center space-x-4 transition-all ${g ? "opacity-50" : ""}`,
                  children: d ? /* @__PURE__ */ h("div", { className: "flex items-center space-x-4", children: [
                    /* @__PURE__ */ h("div", { className: "relative w-full", children: [
                      !r && /* @__PURE__ */ t(
                        "button",
                        {
                          type: "button",
                          onClick: A,
                          className: "absolute top-0 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800",
                          "aria-label": "Remove audio",
                          children: /* @__PURE__ */ t(be, { icon: "mdi:close", className: "w-3 h-3" })
                        }
                      ),
                      /* @__PURE__ */ t(
                        "audio",
                        {
                          src: d.preview,
                          controls: !0,
                          controlsList: "nodownload"
                        },
                        d.preview
                      )
                    ] }),
                    /* @__PURE__ */ t(Pr, { type: "button", onClick: O, children: /* @__PURE__ */ t("span", { children: "Change Audio File" }) })
                  ] }) : /* @__PURE__ */ h("div", { className: "flex items-center justify-center space-x-4", children: [
                    /* @__PURE__ */ t("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ t(be, { icon: "mdi:music", className: "text-gray-400 w-10 h-10" }) }),
                    /* @__PURE__ */ h("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ t(
                        Pr,
                        {
                          type: "button",
                          onClick: O,
                          variant: "outlined",
                          children: /* @__PURE__ */ t("span", { children: "Choose Audio File" })
                        }
                      ),
                      i && /* @__PURE__ */ t("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop your audio file here" })
                    ] })
                  ] })
                }
              ),
              i && g && !d && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-lg", children: /* @__PURE__ */ t("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg", children: "Drop audio here" }) })
            ]
          }
        ),
        p && /* @__PURE__ */ t(
          "span",
          {
            className: x(
              y.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: p
          }
        )
      ]
    },
    s
  );
}, Ar = ge, aa = (a) => {
  if (!a)
    return null;
  if (a instanceof File) {
    const n = URL.createObjectURL(a);
    return {
      id: `${Date.now()}-${Math.random()}`,
      file: a,
      preview: n,
      createdBlobUrl: n
    };
  }
  if (typeof a == "string")
    return {
      id: `${Date.now()}-${Math.random()}`,
      file: null,
      preview: a
    };
  if (typeof a == "object") {
    if (a.preview)
      return {
        id: `${Date.now()}-${Math.random()}`,
        file: a.file || null,
        preview: a.preview
      };
    if (a.file) {
      const n = URL.createObjectURL(a.file);
      return {
        id: `${Date.now()}-${Math.random()}`,
        file: a.file,
        preview: n,
        createdBlobUrl: n
      };
    }
  }
  return null;
}, oa = ({
  label: a = "",
  value: n = [],
  onChange: e,
  required: r = !1,
  accept: o = "image/*",
  aspect: c = "1",
  id: i,
  dragDrop: s = !1,
  cropImage: b = !1,
  name: p = "",
  parentClass: u = "",
  maxImages: d,
  errorMessage: l = ""
}) => {
  const [g, f] = _([]), [w, $] = _(!1), [N, S] = _(!1), [A, B] = _(""), [F, E] = _("image/jpeg"), [O, v] = _("cropped-image"), [z, L] = _(null), U = le(null), V = le(null), X = le(""), ae = le([]);
  q(() => {
    ae.current = g;
  }, [g]), q(() => () => {
    ae.current.forEach((C) => {
      C.createdBlobUrl && URL.revokeObjectURL(C.createdBlobUrl);
    }), X.current && URL.revokeObjectURL(X.current);
  }, []), q(() => {
    if (!Array.isArray(n)) {
      f([]);
      return;
    }
    const C = n.map((T) => aa(T)).filter(Boolean);
    f((T) => (T.forEach((ee) => {
      ee.createdBlobUrl && URL.revokeObjectURL(ee.createdBlobUrl);
    }), C));
  }, [n]);
  const ne = typeof d == "number" && d > 0 ? Math.max(d - g.length, 0) : Number.POSITIVE_INFINITY, P = () => {
    S(!1), X.current && (URL.revokeObjectURL(X.current), X.current = ""), B(""), L(null), U.current && (U.current.value = "");
  }, D = (C) => {
    var T, ee;
    B(C.preview), E(((T = C.file) == null ? void 0 : T.type) || "image/jpeg"), v(
      (((ee = C.file) == null ? void 0 : ee.name) || "cropped-image").replace(/\.[^/.]+$/, "")
    ), L(C.id), S(!0);
  }, I = (C) => {
    const T = URL.createObjectURL(C);
    f((ee) => {
      const re = ee.map((J) => J.id !== z ? J : (J.createdBlobUrl && URL.revokeObjectURL(J.createdBlobUrl), {
        ...J,
        file: C,
        preview: T,
        createdBlobUrl: T
      }));
      return e == null || e(
        re.map((J) => J.file ? J.file : J.preview)
      ), re;
    }), P();
  }, K = (C) => {
    if (!C || C.length === 0 || ne === 0)
      return;
    const T = Array.from(C).filter((re) => re.type.includes("image/")).slice(0, ne);
    if (T.length === 0)
      return;
    const ee = T.map((re) => {
      const J = URL.createObjectURL(re);
      return {
        id: `${Date.now()}-${Math.random()}`,
        file: re,
        preview: J,
        createdBlobUrl: J
      };
    });
    f((re) => {
      const J = [...re, ...ee];
      return e == null || e(
        J.map((ie) => ie.file ? ie.file : ie.preview)
      ), J;
    }), U.current && (U.current.value = "");
  }, R = (C) => {
    f((T) => {
      const ee = T.find((J) => J.id === C);
      ee != null && ee.createdBlobUrl && URL.revokeObjectURL(ee.createdBlobUrl);
      const re = T.filter((J) => J.id !== C);
      return e == null || e(
        re.map((J) => J.file ? J.file : J.preview)
      ), re;
    }), U.current && (U.current.value = "");
  }, W = (C) => {
    var T;
    L(C), (T = V.current) == null || T.click();
  }, pe = (C) => {
    if (!C || C.length === 0 || !z)
      return;
    const T = Array.from(C).find((re) => re.type.includes("image/"));
    if (!T)
      return;
    const ee = URL.createObjectURL(T);
    f((re) => {
      const J = re.map((ie) => ie.id !== z ? ie : (ie.createdBlobUrl && URL.revokeObjectURL(ie.createdBlobUrl), {
        ...ie,
        file: T,
        preview: ee,
        createdBlobUrl: ee
      }));
      return e == null || e(
        J.map((ie) => ie.file ? ie.file : ie.preview)
      ), J;
    }), L(null), V.current && (V.current.value = "");
  }, j = (C) => {
    s && (C.preventDefault(), $(!0));
  }, fe = (C) => {
    s && (C.preventDefault(), $(!1));
  }, ve = (C) => {
    var T;
    s && (C.preventDefault(), $(!1), K(((T = C.dataTransfer) == null ? void 0 : T.files) || null));
  }, M = () => {
    var C;
    (C = U.current) == null || C.click();
  }, G = typeof d == "number" && d > 0 ? g.length < d : !0;
  return /* @__PURE__ */ h(Z, { children: [
    /* @__PURE__ */ h(
      "div",
      {
        className: x(
          y.mediaPicker.multiImage,
          y.field.wrapper,
          u || "col-span-12"
        ),
        children: [
          /* @__PURE__ */ t(we, { label: a, required: r }),
          /* @__PURE__ */ h(
            "div",
            {
              className: x(
                y.mediaPicker.dropzone,
                "relative rounded-md p-2 transition-all",
                w ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800",
                l ? "border-red-500" : ""
              ),
              onDragOver: j,
              onDragLeave: fe,
              onDrop: ve,
              id: `field-${p}`,
              children: [
                /* @__PURE__ */ t(
                  "input",
                  {
                    ref: U,
                    id: i,
                    type: "file",
                    accept: o,
                    multiple: !0,
                    onChange: (C) => K(C.target.files),
                    required: r && g.length === 0,
                    className: "absolute opacity-0 pointer-events-none h-1 w-1"
                  }
                ),
                /* @__PURE__ */ t(
                  "input",
                  {
                    ref: V,
                    type: "file",
                    accept: o,
                    onChange: (C) => pe(C.target.files),
                    className: "absolute opacity-0 pointer-events-none h-1 w-1"
                  }
                ),
                g.length === 0 ? /* @__PURE__ */ h("div", { className: "flex items-center space-x-4", children: [
                  /* @__PURE__ */ t("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ t(
                    be,
                    {
                      icon: "ri:multi-image-fill",
                      className: "text-gray-400 w-10 h-10"
                    }
                  ) }),
                  /* @__PURE__ */ h("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ t(
                      Ar,
                      {
                        type: "button",
                        onClick: M,
                        variant: "outlined",
                        color: "default",
                        children: /* @__PURE__ */ t("span", { className: "text-sm font-medium", children: "Choose Images" })
                      }
                    ),
                    s && /* @__PURE__ */ t("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop your images here" })
                  ] })
                ] }) : /* @__PURE__ */ h(Z, { children: [
                  /* @__PURE__ */ h("div", { className: "flex items-center justify-between gap-2 mb-3", children: [
                    /* @__PURE__ */ t(
                      Ar,
                      {
                        type: "button",
                        onClick: M,
                        disabled: !G,
                        variant: "outlined",
                        color: "default",
                        children: /* @__PURE__ */ t("span", { className: "text-sm font-medium", children: "Upload Images" })
                      }
                    ),
                    /* @__PURE__ */ t("span", { className: "text-xs text-gray-500 dark:text-gray-400", children: d ? `${g.length}/${d}` : `${g.length} selected` })
                  ] }),
                  /* @__PURE__ */ t("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3", children: g.map((C) => /* @__PURE__ */ h(
                    "div",
                    {
                      className: "relative group rounded-md overflow-hidden border border-gray-200 dark:border-gray-700",
                      children: [
                        /* @__PURE__ */ t(
                          "img",
                          {
                            src: C.preview,
                            alt: "preview",
                            className: "w-full h-28 object-cover"
                          }
                        ),
                        /* @__PURE__ */ h("div", { className: "absolute top-2 right-2 flex items-center gap-1.5 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity", children: [
                          /* @__PURE__ */ t(
                            "button",
                            {
                              type: "button",
                              onClick: () => W(C.id),
                              className: "w-7 h-7 rounded-full bg-white/90 text-gray-800 hover:bg-white flex items-center justify-center shadow",
                              "aria-label": "Replace image",
                              children: /* @__PURE__ */ t(be, { icon: "solar:refresh-bold", className: "w-4 h-4" })
                            }
                          ),
                          b && /* @__PURE__ */ t(
                            "button",
                            {
                              type: "button",
                              onClick: () => D(C),
                              className: "w-7 h-7 rounded-full bg-white/90 text-gray-800 hover:bg-white flex items-center justify-center shadow",
                              "aria-label": "Crop image",
                              children: /* @__PURE__ */ t(be, { icon: "solar:crop-bold", className: "w-4 h-4" })
                            }
                          ),
                          /* @__PURE__ */ t(
                            "button",
                            {
                              type: "button",
                              onClick: () => R(C.id),
                              className: "w-7 h-7 rounded-full bg-red-500/95 text-white hover:bg-red-600 flex items-center justify-center shadow",
                              "aria-label": "Delete image",
                              children: /* @__PURE__ */ t(
                                be,
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
                    C.id
                  )) })
                ] }),
                s && w && g.length === 0 && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-lg", children: /* @__PURE__ */ t("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg", children: "Drop images here" }) })
              ]
            }
          ),
          l && /* @__PURE__ */ t(
            "span",
            {
              className: x(
                y.field.error,
                "text-red-500 text-xs mt-1"
              ),
              children: l
            }
          )
        ]
      },
      p
    ),
    /* @__PURE__ */ t(
      Xr,
      {
        isOpen: N,
        imageSrc: A,
        fileType: F,
        fileName: O,
        onClose: P,
        onApply: I,
        aspect: Number(c)
      }
    )
  ] });
}, ke = ({
  src: a,
  alt: n = "preview",
  isOpen: e,
  setIsOpen: r
}) => {
  const o = () => r(!1);
  return q(() => {
    const c = (i) => {
      i.key === "Escape" && o();
    };
    return e && (document.body.style.overflow = "hidden", document.addEventListener("keydown", c)), () => {
      document.body.style.overflow = "", document.removeEventListener("keydown", c);
    };
  }, [e]), /* @__PURE__ */ t(Z, { children: /* @__PURE__ */ h(
    "div",
    {
      className: x(
        y.imagePreview.root,
        "fixed inset-0 z-50 flex items-center justify-center bg-black/70 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      ),
      onClick: o,
      children: [
        /* @__PURE__ */ t(
          "button",
          {
            onClick: o,
            className: `absolute top-4 right-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200\r
                     hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-2 shadow-lg transition`,
            children: /* @__PURE__ */ t(ar, { size: 20 })
          }
        ),
        /* @__PURE__ */ t(
          "div",
          {
            className: x(
              y.imagePreview.container,
              "max-w-5xl w-full px-4 transform transition-all duration-200 scale-95 animate-in zoom-in-95"
            ),
            onClick: (c) => c.stopPropagation(),
            children: /* @__PURE__ */ t(
              "img",
              {
                src: a,
                alt: n,
                className: x(
                  y.imagePreview.image,
                  "w-full max-h-[90vh] object-contain rounded-xl"
                )
              }
            )
          }
        )
      ]
    }
  ) });
}, qr = ({
  col: a,
  data: n,
  uiVariant: e = "default",
  styleConfig: r = {}
}) => {
  const o = n[a.titleKey], c = n[a.subtitleKey], i = n[a.imageKey], s = a.fallback_icon, [b, p] = _(null), [u, d] = _(!1), l = (f) => {
    let w = f;
    f && f.src instanceof File && (w = { ...f, src: URL.createObjectURL(f.src) }), p(w), d(!0);
  }, g = (f) => {
    const $ = {
      sm: { img: "w-8 h-8", wrap: "w-8 h-8", icon: "w-4 h-4" },
      md: { img: "w-12 h-12", wrap: "w-12 h-12", icon: "w-6 h-6" },
      lg: { img: "w-16 h-16", wrap: "w-16 h-16", icon: "w-8 h-8" }
    }[f];
    return i ? /* @__PURE__ */ t(
      "img",
      {
        src: i instanceof File ? URL.createObjectURL(i) : i,
        alt: o,
        onClick: () => l({ src: i, alt: o }),
        className: `${$.img} cursor-pointer rounded-full object-cover border-2 border-white dark:border-gray-700 shadow flex-shrink-0`
      }
    ) : s ? s instanceof Function ? s(n) : s : /* @__PURE__ */ t(
      "div",
      {
        className: `${$.wrap} flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-600 flex-shrink-0`,
        children: /* @__PURE__ */ t(wr, { className: `${$.icon} text-gray-400` })
      }
    );
  };
  return e === "card" ? /* @__PURE__ */ h(Z, { children: [
    u && b && /* @__PURE__ */ t(
      ke,
      {
        src: b.src,
        alt: b.alt,
        isOpen: u,
        setIsOpen: d
      }
    ),
    /* @__PURE__ */ h(
      "div",
      {
        className: x(
          y.details.row,
          "col-span-12 relative overflow-hidden rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent dark:from-primary/20 dark:via-primary/10 border border-primary/20 dark:border-primary/30 p-5 flex items-center gap-4",
          r.rowClass || "",
          r.groupClass || "",
          a.blockClass || ""
        ),
        children: [
          /* @__PURE__ */ t("div", { className: "pointer-events-none absolute -right-6 -top-6 w-32 h-32 rounded-full bg-primary/8 dark:bg-primary/12" }),
          /* @__PURE__ */ t("div", { className: "pointer-events-none absolute -right-2 -bottom-4 w-20 h-20 rounded-full bg-primary/5" }),
          g("lg"),
          /* @__PURE__ */ h("div", { className: "min-w-0 z-10", children: [
            /* @__PURE__ */ t(
              "h3",
              {
                className: `text-lg font-bold text-gray-900 dark:text-white truncate ${r.valueClass || ""}`,
                children: o
              }
            ),
            /* @__PURE__ */ t(
              "p",
              {
                className: `text-sm text-primary/70 dark:text-primary/60 font-medium truncate ${r.labelClass || ""}`,
                children: c
              }
            )
          ] })
        ]
      }
    )
  ] }) : e === "split" ? /* @__PURE__ */ h(Z, { children: [
    u && b && /* @__PURE__ */ t(
      ke,
      {
        src: b.src,
        alt: b.alt,
        isOpen: u,
        setIsOpen: d
      }
    ),
    /* @__PURE__ */ h(
      "div",
      {
        className: x(
          y.details.row,
          "flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-primary/8 via-primary/4 to-transparent dark:from-primary/15 dark:via-primary/8",
          r.rowClass || "",
          r.groupClass || "",
          a.blockClass || ""
        ),
        children: [
          g("md"),
          /* @__PURE__ */ h("div", { className: "min-w-0", children: [
            /* @__PURE__ */ t(
              "h3",
              {
                className: `text-base font-bold text-gray-900 dark:text-white truncate ${r.valueClass || ""}`,
                children: o
              }
            ),
            /* @__PURE__ */ t(
              "p",
              {
                className: `text-xs font-semibold text-primary/70 dark:text-primary/60 truncate ${r.labelClass || ""}`,
                children: c
              }
            )
          ] })
        ]
      }
    )
  ] }) : /* @__PURE__ */ h(Z, { children: [
    u && b && /* @__PURE__ */ t(
      ke,
      {
        src: b.src,
        alt: b.alt,
        isOpen: u,
        setIsOpen: d
      }
    ),
    /* @__PURE__ */ h(
      "div",
      {
        className: x(
          y.details.row,
          "col-span-12 flex items-center space-x-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-900",
          r.rowClass || "",
          r.groupClass || "",
          a.blockClass || ""
        ),
        children: [
          g("lg"),
          /* @__PURE__ */ h("div", { children: [
            /* @__PURE__ */ t(
              "h3",
              {
                className: `text-xl font-semibold text-gray-900 dark:text-white ${r.valueClass || ""}`,
                children: o
              }
            ),
            /* @__PURE__ */ t(
              "p",
              {
                className: `text-sm text-gray-500 dark:text-gray-400 ${r.labelClass || ""}`,
                children: c
              }
            )
          ] })
        ]
      }
    )
  ] });
}, Qr = ({
  col: a,
  data: n,
  uiVariant: e = "default",
  styleConfig: r = {}
}) => {
  const o = n[a.titleKey], c = n[a.subtitleKey], i = n[a.imageKey], s = a.label, b = a == null ? void 0 : a.icon, p = a.fallback_icon, [u, d] = _(null), [l, g] = _(!1), f = ($) => {
    let N = $;
    $ && $.src instanceof File && (N = { ...$, src: URL.createObjectURL($.src) }), d(N), g(!0);
  }, w = () => i ? /* @__PURE__ */ t(
    "img",
    {
      src: i instanceof File ? URL.createObjectURL(i) : i,
      alt: o,
      onClick: () => f({ src: i, alt: o }),
      className: "w-8 h-8 cursor-pointer rounded-full object-cover border-2 border-gray-200 dark:border-gray-700 flex-shrink-0"
    }
  ) : p ? p instanceof Function ? p(n) : p : /* @__PURE__ */ t("div", { className: "w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 flex-shrink-0", children: /* @__PURE__ */ t(wr, { className: "w-5 h-5 text-gray-400" }) });
  return e === "card" ? /* @__PURE__ */ h(Z, { children: [
    l && u && /* @__PURE__ */ t(
      ke,
      {
        src: u.src,
        alt: u.alt,
        isOpen: l,
        setIsOpen: g
      }
    ),
    /* @__PURE__ */ h(
      "div",
      {
        className: x(
          y.details.row,
          a.blockClass || "col-span-6",
          "group bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 p-4 flex flex-col gap-2.5",
          r.rowClass || "",
          r.cardGroupClass || ""
        ),
        children: [
          b && /* @__PURE__ */ t(
            "div",
            {
              className: `w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 [&>svg]:w-4 [&>svg]:h-4 ${r.iconClass || ""}`,
              children: b
            }
          ),
          /* @__PURE__ */ t(
            "p",
            {
              className: `text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 leading-none ${r.labelClass || ""}`,
              children: s
            }
          ),
          /* @__PURE__ */ h("div", { className: "flex items-center gap-2 mt-auto", children: [
            w(),
            /* @__PURE__ */ h("div", { className: "min-w-0", children: [
              /* @__PURE__ */ t(
                "p",
                {
                  className: `text-sm font-semibold text-gray-800 dark:text-gray-100 truncate ${r.valueClass || ""}`,
                  children: o
                }
              ),
              c && /* @__PURE__ */ t("p", { className: "text-xs text-gray-400 dark:text-gray-500 truncate", children: c })
            ] })
          ] })
        ]
      }
    )
  ] }) : e === "split" ? /* @__PURE__ */ h(Z, { children: [
    l && u && /* @__PURE__ */ t(
      ke,
      {
        src: u.src,
        alt: u.alt,
        isOpen: l,
        setIsOpen: g
      }
    ),
    /* @__PURE__ */ h(
      "div",
      {
        className: x(
          y.details.row,
          "flex items-stretch min-h-[52px]",
          r.rowClass || "",
          r.cardGroupClass || "",
          a.blockClass || ""
        ),
        children: [
          /* @__PURE__ */ h("div", { className: "w-[42%] flex-shrink-0 flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-gray-800/80 border-r border-gray-200 dark:border-gray-700", children: [
            b && /* @__PURE__ */ t(
              "span",
              {
                className: `text-primary/60 dark:text-primary/50 flex-shrink-0 [&>svg]:w-3.5 [&>svg]:h-3.5 ${r.iconClass || ""}`,
                children: b
              }
            ),
            /* @__PURE__ */ t(
              "p",
              {
                className: `text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 leading-tight ${r.labelClass || ""}`,
                children: s
              }
            )
          ] }),
          /* @__PURE__ */ h("div", { className: "flex-1 flex items-center gap-2.5 px-4 py-3 bg-white dark:bg-gray-900", children: [
            w(),
            /* @__PURE__ */ h("div", { className: "min-w-0", children: [
              /* @__PURE__ */ t(
                "p",
                {
                  className: `text-sm text-gray-800 dark:text-gray-100 break-words ${r.valueClass || ""}`,
                  children: o
                }
              ),
              c && /* @__PURE__ */ t("p", { className: "text-xs text-gray-400 dark:text-gray-500 truncate", children: c })
            ] })
          ] })
        ]
      }
    )
  ] }) : /* @__PURE__ */ h(Z, { children: [
    l && u && /* @__PURE__ */ t(
      ke,
      {
        src: u.src,
        alt: u.alt,
        isOpen: l,
        setIsOpen: g
      }
    ),
    /* @__PURE__ */ h(
      "div",
      {
        className: x(
          y.details.row,
          "col-span-12 flex items-center space-x-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-900",
          r.rowClass || "",
          r.cardGroupClass || "",
          a.blockClass || ""
        ),
        children: [
          b && /* @__PURE__ */ t("div", { className: `flex-shrink-0 ${r.iconClass || ""}`, children: b }),
          /* @__PURE__ */ h("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ t(
              "p",
              {
                className: `text-sm font-medium text-gray-500 dark:text-gray-400 ${r.labelClass || ""}`,
                children: s
              }
            ),
            /* @__PURE__ */ h("div", { className: "flex items-center mt-1", children: [
              w(),
              /* @__PURE__ */ h("div", { className: "ml-2", children: [
                /* @__PURE__ */ t(
                  "p",
                  {
                    className: `mb-0 text-sm text-gray-900 dark:text-white break-words ${r.valueClass || ""}`,
                    children: o
                  }
                ),
                /* @__PURE__ */ t(
                  "p",
                  {
                    className: `text-xs text-gray-500 dark:text-gray-400 ${r.labelClass || ""}`,
                    children: c
                  }
                )
              ] })
            ] })
          ] })
        ]
      }
    )
  ] });
}, Er = {
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
}, jr = {
  contained: "bg",
  outline: "border !bg-transparent",
  soft: "bg opacity-90"
}, et = ({
  label: a,
  variant: n = "contained",
  color: e = "green",
  className: r = ""
}) => {
  const o = Er[e] || Er.green, c = jr[n] || jr.contained, i = n === "outline" ? o.border : o.bg;
  return /* @__PURE__ */ t(
    "span",
    {
      className: x(
        y.chip.root,
        "inline-flex justify-center items-center rounded-sm text-xs font-semibold px-3 py-1 min-w-[78px]",
        i,
        c,
        r
      ),
      children: a
    }
  );
}, rt = ({
  col: a,
  data: n,
  uiVariant: e = "default",
  styleConfig: r = {}
}) => {
  var N;
  const [o, c] = _(null), [i, s] = _(!1), b = a == null ? void 0 : a.icon, p = a.label;
  let u = n[a.key];
  const d = a.type, l = a.variant || "outline";
  let g = a.defaultColor;
  if (d === "chip" && ((N = a.chipOptions) == null ? void 0 : N.length) > 0) {
    const S = a == null ? void 0 : a.chipOptions.find((A) => A.value == u);
    S && (u = S.label, g = S.color);
  }
  const f = (S) => {
    if (!S) return "";
    if (typeof S == "string") return S;
    if (S instanceof File) return URL.createObjectURL(S);
    if (typeof S == "object") {
      if (typeof S.preview == "string") return S.preview;
      if (typeof S.src == "string") return S.src;
      if (S.src instanceof File) return URL.createObjectURL(S.src);
      if (S.file instanceof File) return URL.createObjectURL(S.file);
    }
    return "";
  }, w = (S, A) => {
    c({ src: S, alt: A }), s(!0);
  }, $ = (S = "text-sm text-gray-900 dark:text-white break-words") => d === "chip" ? /* @__PURE__ */ t(et, { label: u, variant: l, color: g, className: "mt-1" }) : d === "tinyEditor" ? /* @__PURE__ */ t(
    "p",
    {
      className: `${S} ${r.valueClass || ""}`,
      dangerouslySetInnerHTML: { __html: u }
    }
  ) : d === "video" ? u ? /* @__PURE__ */ t(
    "video",
    {
      controls: !0,
      src: u instanceof File ? URL.createObjectURL(u) : u,
      onClick: (A) => A.stopPropagation(),
      className: "shadow-sm mt-1 w-full max-w-xs max-h-[250px] rounded-md "
    },
    u instanceof File ? URL.createObjectURL(u) : u
  ) : /* @__PURE__ */ t("p", { className: "text-sm text-gray-400", children: "N/A" }) : d === "audio" ? u ? /* @__PURE__ */ t(
    "audio",
    {
      controls: !0,
      src: u instanceof File ? URL.createObjectURL(u) : u,
      onClick: (A) => A.stopPropagation(),
      className: "shadow-sm rounded-full mt-1 w-full max-w-xs"
    },
    u instanceof File ? URL.createObjectURL(u) : u
  ) : /* @__PURE__ */ t("p", { className: "text-sm text-gray-400", children: "N/A" }) : d === "multiImage" ? Array.isArray(u) && u.length > 0 ? /* @__PURE__ */ t(
    "div",
    {
      className: `mt-1 grid grid-cols-3 sm:grid-cols-4 gap-2 ${r.mediaGridClass || ""}`,
      children: u.map((A, B) => {
        const F = f(A);
        return F ? /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            onClick: () => w(F, `Gallery ${B + 1}`),
            className: "w-full h-16 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-colors",
            children: /* @__PURE__ */ t(
              "img",
              {
                src: F,
                alt: `gallery-${B + 1}`,
                className: "w-full h-full object-cover"
              }
            )
          },
          `${F}-${B}`
        ) : null;
      })
    }
  ) : /* @__PURE__ */ t("p", { className: "text-sm text-gray-400", children: "N/A" }) : /* @__PURE__ */ t("p", { className: `${S} ${r.valueClass || ""}`, children: d === "date" ? /* @__PURE__ */ t("span", { children: ir(u, a.format || "DD MMM YYYY") }) : /* @__PURE__ */ t("span", { children: u || "N/A" }) });
  return e === "card" ? /* @__PURE__ */ h(Z, { children: [
    /* @__PURE__ */ h(
      "div",
      {
        className: x(
          y.details.row,
          a.blockClass || "col-span-6",
          "group bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 p-4 flex flex-col gap-2.5",
          r.rowClass || ""
        ),
        children: [
          b && /* @__PURE__ */ t(
            "div",
            {
              className: `w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 [&>svg]:w-4 [&>svg]:h-4 ${r.iconClass || ""}`,
              children: b
            }
          ),
          /* @__PURE__ */ t(
            "p",
            {
              className: `text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 leading-none ${r.labelClass || ""}`,
              children: p
            }
          ),
          /* @__PURE__ */ t("div", { className: "mt-auto", children: $(
            "text-sm font-semibold text-gray-800 dark:text-gray-100 break-words leading-snug"
          ) })
        ]
      }
    ),
    i && o && /* @__PURE__ */ t(
      ke,
      {
        src: o.src,
        alt: o.alt,
        isOpen: i,
        setIsOpen: s
      }
    )
  ] }) : e === "split" ? /* @__PURE__ */ h(Z, { children: [
    /* @__PURE__ */ h(
      "div",
      {
        className: x(
          y.details.row,
          "flex items-stretch min-h-[52px]",
          r.rowClass || "",
          a.blockClass || ""
        ),
        children: [
          /* @__PURE__ */ h("div", { className: "w-[42%] flex-shrink-0 flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-gray-800/80 border-r border-gray-200 dark:border-gray-700", children: [
            b && /* @__PURE__ */ t(
              "span",
              {
                className: `text-primary/60 dark:text-primary/50 flex-shrink-0 [&>svg]:w-3.5 [&>svg]:h-3.5 ${r.iconClass || ""}`,
                children: b
              }
            ),
            /* @__PURE__ */ t(
              "p",
              {
                className: `text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 leading-tight ${r.labelClass || ""}`,
                children: p
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { className: "flex-1 flex items-center px-4 py-3 bg-white dark:bg-gray-900", children: $(
            "text-sm text-gray-800 dark:text-gray-100 break-words"
          ) })
        ]
      }
    ),
    i && o && /* @__PURE__ */ t(
      ke,
      {
        src: o.src,
        alt: o.alt,
        isOpen: i,
        setIsOpen: s
      }
    )
  ] }) : /* @__PURE__ */ h(Z, { children: [
    /* @__PURE__ */ h(
      "div",
      {
        className: x(
          y.details.row,
          "col-span-12 flex items-center space-x-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-900",
          r.rowClass || "",
          a.blockClass || ""
        ),
        children: [
          b && /* @__PURE__ */ t("div", { className: `flex-shrink-0 ${r.iconClass || ""}`, children: b }),
          /* @__PURE__ */ h("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ t(
              "p",
              {
                className: `text-sm font-medium text-gray-500 dark:text-gray-400 ${r.labelClass || ""}`,
                children: p
              }
            ),
            $(
              "mt-1 text-sm text-gray-900 dark:text-white break-words"
            )
          ] })
        ]
      }
    ),
    i && o && /* @__PURE__ */ t(
      ke,
      {
        src: o.src,
        alt: o.alt,
        isOpen: i,
        setIsOpen: s
      }
    )
  ] });
}, na = ({
  value: a = !0,
  onChange: n,
  text: e,
  options: r = [],
  label: o,
  required: c,
  name: i = "",
  disabled: s = !1,
  parentClass: b = "",
  errorMessage: p = ""
}) => {
  const u = r.length > 0 ? r : [
    { label: "Active", value: !0 },
    { label: "Inactive", value: !1 }
  ];
  return /* @__PURE__ */ t(Z, { children: /* @__PURE__ */ h(
    "div",
    {
      className: x(
        y.field.wrapper,
        b || "col-span-12"
      ),
      children: [
        /* @__PURE__ */ t(we, { label: o, required: c }),
        /* @__PURE__ */ h(
          "div",
          {
            className: `flex items-center justify-between h-10 gap-4 bg-gray-100 dark:bg-gray-700 px-3 rounded-md border border-gray-100 dark:border-gray-600
          ${p ? "border-red-500" : ""}`,
            children: [
              e && /* @__PURE__ */ t("p", { className: "text-xs text-gray-600 dark:text-gray-400 flex-shrink overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px]", children: e }),
              /* @__PURE__ */ t("div", { className: "flex items-center gap-6", children: u.map((d, l) => /* @__PURE__ */ h(
                "label",
                {
                  className: "flex items-center gap-2 cursor-pointer select-none",
                  children: [
                    /* @__PURE__ */ t(
                      "input",
                      {
                        type: "radio",
                        name: "switch-field",
                        required: c && l === 0,
                        value: String(d.value),
                        disabled: s,
                        id: `field-${i}`,
                        checked: a === d.value,
                        onChange: () => n == null ? void 0 : n(d.value),
                        className: x(
                          y.field.input,
                          "w-4 h-4 border-gray-300 cursor-pointer"
                        )
                      }
                    ),
                    /* @__PURE__ */ t("span", { className: "text-sm text-gray-700 dark:text-white", children: d.label })
                  ]
                },
                l
              )) })
            ]
          }
        ),
        p && /* @__PURE__ */ t(
          "span",
          {
            className: x(
              y.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: p
          }
        )
      ]
    },
    i
  ) });
}, zr = ge, ia = ({
  label: a = "",
  value: n = null,
  onChange: e,
  required: r = !1,
  accept: o = "video/*",
  id: c,
  dragDrop: i = !1,
  name: s = "",
  parentClass: b = "",
  maxSize: p = 0,
  errorMessage: u = ""
}) => {
  const [d, l] = _(
    null
  ), [g, f] = _(!1), w = le(null), $ = p * 1024 * 1024;
  q(() => {
    if (!n) {
      N(), l(null);
      return;
    }
    if (n instanceof File) {
      const v = URL.createObjectURL(n);
      return l({ file: n, preview: v }), () => {
        URL.revokeObjectURL(v);
      };
    } else typeof n == "string" ? l({ preview: n }) : n != null && n.preview && l(n);
  }, [n]);
  const N = () => {
    d != null && d.preview && d.preview.startsWith("blob:") && URL.revokeObjectURL(d.preview);
  }, S = (v) => {
    if (!v || v.length === 0) return;
    const z = v[0];
    if ($ && z.size > $) {
      Ce(
        `File is too large. Maximum allowed size is ${p} MB`,
        {
          variant: "warning"
        }
      );
      return;
    }
    const L = URL.createObjectURL(z);
    N(), l({ file: z, preview: L }), e == null || e(z);
  }, A = (v) => {
    v && v.stopPropagation(), N(), l(null), e == null || e(null), w.current && (w.current.value = "");
  }, B = (v) => {
    i && (v.preventDefault(), f(!0));
  }, F = (v) => {
    i && (v.preventDefault(), f(!1));
  }, E = (v) => {
    var z, L, U, V;
    i && (v.preventDefault(), f(!1), (V = (U = (L = (z = v.dataTransfer) == null ? void 0 : z.files) == null ? void 0 : L[0]) == null ? void 0 : U.type) != null && V.includes("video/") && S(v.dataTransfer.files));
  }, O = () => {
    var v;
    (v = w.current) == null || v.click();
  };
  return /* @__PURE__ */ h(
    "div",
    {
      className: x(
        y.mediaPicker.video,
        y.field.wrapper,
        b || "col-span-12"
      ),
      children: [
        /* @__PURE__ */ t(we, { label: a, required: r }),
        /* @__PURE__ */ h(
          "div",
          {
            className: x(
              y.mediaPicker.dropzone,
              "relative rounded-lg p-2 transition-all",
              g ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800",
              u ? "border-red-500" : ""
            ),
            onDragOver: B,
            onDragLeave: F,
            onDrop: E,
            id: `field-${s}`,
            children: [
              /* @__PURE__ */ t(
                "input",
                {
                  ref: w,
                  id: c,
                  type: "file",
                  accept: o,
                  onChange: (v) => S(v.target.files),
                  required: r && !d,
                  className: "absolute opacity-0 pointer-events-none h-[10px]"
                }
              ),
              /* @__PURE__ */ t(
                "div",
                {
                  className: `flex items-center space-x-4 transition-all ${g ? "opacity-50" : ""}`,
                  children: d ? /* @__PURE__ */ h("div", { className: "flex items-center space-x-4", children: [
                    /* @__PURE__ */ h("div", { className: "relative", children: [
                      !r && /* @__PURE__ */ t(
                        "button",
                        {
                          type: "button",
                          onClick: A,
                          className: "absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow hover:bg-red-600 z-10",
                          children: /* @__PURE__ */ t(be, { icon: "mdi:close", className: "w-3 h-3" })
                        }
                      ),
                      /* @__PURE__ */ t(
                        "video",
                        {
                          src: d.preview,
                          controls: !0,
                          controlsList: "nodownload",
                          className: "w-[260px] h-[150px] rounded-md object-cover"
                        },
                        d.preview
                      )
                    ] }),
                    /* @__PURE__ */ t(zr, { type: "button", onClick: O, children: "Change Video File" })
                  ] }) : /* @__PURE__ */ h("div", { className: "flex items-center justify-center space-x-4", children: [
                    /* @__PURE__ */ t("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ t(be, { icon: "mdi:video", className: "text-gray-400 w-10 h-10" }) }),
                    /* @__PURE__ */ h("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ t(
                        zr,
                        {
                          type: "button",
                          onClick: O,
                          variant: "outlined",
                          children: "Choose Video File"
                        }
                      ),
                      i && /* @__PURE__ */ t("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop your video here" })
                    ] })
                  ] })
                }
              ),
              i && g && !d && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-lg", children: /* @__PURE__ */ t("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg", children: "Drop video here" }) })
            ]
          }
        ),
        u && /* @__PURE__ */ t(
          "span",
          {
            className: x(
              y.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: u
          }
        )
      ]
    },
    s
  );
}, tt = ({
  field: a,
  formData: n,
  handleChange: e,
  errorMessage: r
}) => {
  const {
    key: o,
    label: c,
    type: i,
    options: s,
    placeholder: b,
    rows: p,
    inputClass: u,
    search: d,
    accept: l,
    text: g,
    required: f = !1,
    minLength: w,
    dragDrop: $,
    parentClass: N,
    countriesList: S,
    defaultCountry: A,
    multiple: B,
    dropdownMaxHeight: F,
    editorKey: E,
    fontFamily: O,
    disabled: v,
    negativeNumberAllow: z,
    defaultValue: L,
    renderCondition: U,
    pattern: V,
    renderType: X,
    cropImage: ae,
    aspectRatio: ne,
    dependencyKey: P,
    mask: D,
    maskApplyOnValue: I,
    maxSize: K
  } = a;
  let R = n == null ? void 0 : n[o];
  R == null && (R = "");
  const W = b || (i === "select" ? `Select ${c}` : `Enter ${c}`), pe = "w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm focus:outline-none focus:ring-1 focus:ring-blue-200 bg-white text-black dark:bg-gray-700 dark:text-white";
  if (U && typeof U == "function" && !U(n))
    return null;
  if (X && X == "details")
    switch (i) {
      case "group":
        return /* @__PURE__ */ t(qr, { col: a, data: n });
      case "cardGroup":
        return /* @__PURE__ */ t(Qr, { col: a, data: n });
      default:
        return /* @__PURE__ */ t(rt, { col: a, data: n });
    }
  switch (i) {
    case "select":
      return /* @__PURE__ */ t(
        vt,
        {
          options: s || [],
          value: R,
          formData: n,
          dependencyKey: P,
          onChange: (j) => e(o, j),
          placeholder: W,
          className: u || "",
          search: d,
          required: f,
          defaultValue: L,
          label: c || "",
          name: o,
          countriesList: S,
          disabled: v,
          parentClass: N || "",
          multiple: B,
          dropdownMaxHeight: F,
          errorMessage: r
        }
      );
    case "checkbox":
      return /* @__PURE__ */ t(Z, { children: /* @__PURE__ */ t(
        ra,
        {
          name: o,
          label: c || "",
          options: s || [],
          value: R,
          onChange: (j) => e(o, j),
          required: f,
          parentClass: N || "",
          className: u || "",
          multiSelect: B,
          disabled: v,
          errorMessage: r
        }
      ) });
    case "radio":
      return /* @__PURE__ */ t(
        na,
        {
          value: R,
          onChange: (j) => e(o, j),
          text: g,
          options: s || [],
          label: c || "",
          required: f,
          name: o,
          disabled: v,
          parentClass: N || "",
          errorMessage: r
        }
      );
    case "switch":
      return /* @__PURE__ */ t(
        Or,
        {
          value: !!R,
          onChange: (j) => e(o, j),
          label: c || "",
          required: f,
          name: o,
          disabled: v,
          className: "",
          parentClass: N || "",
          errorMessage: r
        }
      );
    case "phone":
      return /* @__PURE__ */ t(
        xt,
        {
          value: R,
          onChange: (j) => e(o, j),
          countriesList: S,
          defaultCountry: A,
          required: f,
          placeholder: W,
          search: d,
          label: c || "",
          name: o,
          disabled: v,
          errorMessage: r,
          parentClass: N || ""
        }
      );
    case "textarea":
      return /* @__PURE__ */ t(
        Tr,
        {
          value: R,
          onChange: (j) => e(o, j.target.value),
          placeholder: W,
          rows: p || 3,
          className: `${pe} ${u || ""}`,
          required: f,
          name: o,
          label: c || "",
          disabled: v,
          parentClass: N || "",
          errorMessage: r
        }
      );
    case "image":
    case "multiImage":
      return B || i === "multiImage" ? /* @__PURE__ */ t(
        oa,
        {
          value: Array.isArray(R) ? R : [],
          onChange: (j) => e(o, j),
          required: f,
          accept: l || "image/*",
          aspect: ne,
          id: `file-${o}`,
          dragDrop: $,
          cropImage: ae,
          label: c || "",
          name: o,
          parentClass: N || "",
          maxImages: a.maxImages,
          errorMessage: r
        }
      ) : /* @__PURE__ */ t(
        Qt,
        {
          value: R,
          onChange: (j) => e(o, j),
          required: f,
          accept: l || "image/*",
          aspect: ne,
          id: `file-${o}`,
          dragDrop: $,
          cropImage: ae,
          label: c || "",
          name: o,
          parentClass: N || "",
          errorMessage: r
        }
      );
    case "audio":
      return /* @__PURE__ */ t(
        ta,
        {
          value: R,
          onChange: (j) => e(o, j),
          required: f,
          accept: l || "audio/*",
          id: `file-${o}`,
          dragDrop: $,
          label: c || "",
          name: o,
          parentClass: N || "",
          maxSize: K,
          errorMessage: r
        }
      );
    case "video":
      return /* @__PURE__ */ t(
        ia,
        {
          value: R,
          onChange: (j) => e(o, j),
          required: f,
          accept: l || "video/*",
          id: `file-${o}`,
          dragDrop: $,
          label: c || "",
          name: o,
          maxSize: K,
          parentClass: N || "",
          errorMessage: r
        }
      );
    case "tinyEditor":
      return /* @__PURE__ */ t(
        ea,
        {
          value: R,
          name: o,
          onChange: (j) => e(o, j),
          required: f,
          placeholder: W,
          label: c || "",
          parentClass: N || "",
          fontFamily: O,
          editorKey: E || "",
          disabled: v,
          errorMessage: r
        }
      );
    default:
      return /* @__PURE__ */ t(
        Jr,
        {
          field: a,
          type: i || "text",
          defaultValue: L,
          value: R,
          onChange: (j) => e(o, j),
          placeholder: W,
          className: `${pe} ${u || ""}`,
          required: f,
          name: o,
          minLength: w,
          label: c || "",
          negativeNumberAllow: z,
          parentClass: N || "",
          disabled: v,
          pattern: V,
          mask: D,
          errorMessage: r,
          maskApplyOnValue: I
        }
      );
  }
}, ca = ({
  isOpen: a,
  onClose: n,
  config: e,
  onApply: r
}) => {
  var u;
  const [o, c] = _({}), i = (d, l) => {
    c((g) => ({ ...g, [d]: l }));
  }, s = () => {
    r(o), n();
  }, b = () => {
    c({}), r({}), n();
  }, p = e == null ? void 0 : e.component;
  return /* @__PURE__ */ h(Z, { children: [
    /* @__PURE__ */ t(
      "div",
      {
        className: x(
          y.filterDrawer.overlay,
          "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300",
          a ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        ),
        style: {
          opacity: a ? 1 : 0
        },
        onClick: n
      }
    ),
    /* @__PURE__ */ h(
      "div",
      {
        style: {
          opacity: a ? 1 : 0
        },
        className: x(
          y.filterDrawer.panel,
          "fixed top-0 right-0 h-full w-[28rem] bg-white dark:bg-gray-900 shadow-2xl z-50 flex flex-col border-l border-gray-200 dark:border-gray-700 transform transition-all duration-300 ease-in-out",
          a ? "translate-x-0" : "translate-x-full"
        ),
        children: [
          /* @__PURE__ */ h(
            "div",
            {
              className: x(
                y.filterDrawer.header,
                "flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700"
              ),
              children: [
                /* @__PURE__ */ t("h2", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: "Filters" }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: n,
                    className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition",
                    children: /* @__PURE__ */ t(ar, { className: "w-5 h-5 text-gray-500 dark:text-gray-400" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ t(
            "div",
            {
              className: x(
                y.filterDrawer.body,
                "flex-1 overflow-y-auto px-4 py-3"
              ),
              children: p ? /* @__PURE__ */ t(p, { filters: o, onFilterChange: i }) : /* @__PURE__ */ t("div", { className: "space-y-4", children: (u = e == null ? void 0 : e.fields) == null ? void 0 : u.map((d) => /* @__PURE__ */ t(
                tt,
                {
                  field: d,
                  formData: o,
                  handleChange: i
                },
                d.key
              )) })
            }
          ),
          /* @__PURE__ */ h(
            "div",
            {
              className: x(
                y.filterDrawer.footer,
                "flex gap-2 px-4 py-3 border-t border-gray-200 dark:border-gray-700"
              ),
              children: [
                /* @__PURE__ */ t(
                  ge,
                  {
                    onClick: s,
                    variant: "contained",
                    color: "primary",
                    fullWidth: !0,
                    children: "Apply Filters"
                  }
                ),
                /* @__PURE__ */ t(
                  ge,
                  {
                    onClick: b,
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
}, la = ({ rows: a = 5, columns: n = 5 }) => /* @__PURE__ */ h(Z, { children: [
  /* @__PURE__ */ t("div", { className: "w-full mb-6 inline-flex justify-end items-center", children: /* @__PURE__ */ t("div", { className: "h-8 w-80 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }),
  /* @__PURE__ */ t("div", { className: "overflow-hidden rounded-md border border-gray-200 dark:border-gray-800", children: /* @__PURE__ */ h(
    "table",
    {
      className: x(
        y.tableSkeleton.root,
        y.tableSkeleton.table,
        "w-full border-collapse"
      ),
      children: [
        /* @__PURE__ */ t("thead", { children: /* @__PURE__ */ t("tr", { className: "bg-gray-50 dark:bg-gray-900", children: Array.from({ length: n }).map((e, r) => /* @__PURE__ */ t("th", { className: "px-4 py-3", children: /* @__PURE__ */ t("div", { className: "h-6 w-24 bg-gray-300 dark:bg-gray-700 rounded animate-pulse  inline-flex justify-center items-center" }) }, r)) }) }),
        /* @__PURE__ */ t("tbody", { children: Array.from({ length: a }).map((e, r) => /* @__PURE__ */ t(
          "tr",
          {
            className: "border-t border-gray-200 dark:border-gray-800",
            children: Array.from({ length: n }).map((o, c) => /* @__PURE__ */ t("td", { className: "px-4 py-6", children: /* @__PURE__ */ t("div", { className: "h-6 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }, c))
          },
          r
        )) })
      ]
    }
  ) })
] }), sa = ({
  options: a = [],
  value: n = "",
  onChange: e,
  clearLabel: r = ""
}) => {
  const [o, c] = _(!1), i = le(null), s = !!n;
  q(() => {
    const p = (u) => {
      i.current && !i.current.contains(u.target) && c(!1);
    };
    return document.addEventListener("click", p), () => document.removeEventListener("click", p);
  }, []);
  const b = (p) => {
    const u = a.find((d) => d.value === p);
    e(p, u || null), c(!1);
  };
  return a != null && a.length ? /* @__PURE__ */ h(
    "div",
    {
      className: x(y.sortDropdown.root, "relative"),
      ref: i,
      children: [
        /* @__PURE__ */ h(
          "button",
          {
            type: "button",
            onClick: () => c((p) => !p),
            className: x(
              y.sortDropdown.trigger,
              "relative inline-flex items-center justify-center h-[36px] w-[36px] rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
            ),
            "aria-label": "Open sort options",
            children: [
              /* @__PURE__ */ t(ct, { className: "w-4 h-4" }),
              s && /* @__PURE__ */ t("span", { className: "absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" })
            ]
          }
        ),
        o && /* @__PURE__ */ h(
          "div",
          {
            className: x(
              y.sortDropdown.menu,
              "absolute right-0 mt-2 z-20 min-w-[220px] max-h-[260px] overflow-auto rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg"
            ),
            children: [
              !!(r != null && r.trim()) && /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  onClick: () => b(""),
                  className: x(
                    y.sortDropdown.item,
                    "w-full text-left px-3 py-2 text-sm transition hover:bg-gray-100 dark:hover:bg-gray-700",
                    n ? "text-gray-700 dark:text-gray-200" : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                  ),
                  children: r
                }
              ),
              a.map((p) => /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  onClick: () => b(p.value),
                  className: x(
                    y.sortDropdown.item,
                    "w-full text-left px-3 py-2 text-sm transition hover:bg-gray-100 dark:hover:bg-gray-700",
                    n === p.value ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white" : "text-gray-700 dark:text-gray-200"
                  ),
                  children: p.label
                },
                p.value
              ))
            ]
          }
        )
      ]
    }
  ) : null;
}, nr = {
  enabled: !1,
  useServerSideSorting: !1,
  options: [],
  fields: [],
  defaultValue: "",
  autoGenerate: !0,
  clearLabel: "",
  onChange: null
}, da = (a) => a === !0 ? { ...nr, enabled: !0 } : !a || typeof a != "object" ? nr : {
  ...nr,
  ...a,
  enabled: a.enabled ?? !0,
  autoGenerate: a.autoGenerate ?? !0
}, pa = (a = []) => a.filter((n) => {
  const e = ["menu_actions", "index", "audio", "avatar"];
  return n.type && e.includes(n.type) ? !1 : !!(n.sortKey || (n.type === "group" ? n.titleKey : n.key));
}), ma = (a) => {
  if (a.sortType) return a.sortType;
  if (a.type === "date") return "date";
  if (a.type === "number") return "number";
  const n = String(
    a.sortKey || (a.type === "group" ? a.titleKey : a.key) || ""
  ).toLowerCase();
  return ["phone", "mobile", "contact", "tel", "whatsapp"].some(
    (r) => n.includes(r)
  ) ? "phone" : Array.isArray(a.chipOptions) && a.chipOptions.length > 0 && a.chipOptions.every(
    (o) => typeof o.value == "boolean"
  ) ? "boolean" : "string";
}, Ir = (a = []) => a.flatMap((n) => {
  const e = n.sortKey || (n.type === "group" ? n.titleKey : n.key), r = n.sortLabel || n.title || e, o = ma(n);
  return e ? o === "number" ? [
    {
      value: `${e}_asc`,
      label: `${r} (Low-High)`,
      key: e,
      order: "asc",
      type: o
    },
    {
      value: `${e}_desc`,
      label: `${r} (High-Low)`,
      key: e,
      order: "desc",
      type: o
    }
  ] : o === "phone" ? [
    {
      value: `${e}_asc`,
      label: `${r} (0-9)`,
      key: e,
      order: "asc",
      type: o
    },
    {
      value: `${e}_desc`,
      label: `${r} (9-0)`,
      key: e,
      order: "desc",
      type: o
    }
  ] : o === "date" ? [
    {
      value: `${e}_desc`,
      label: `${r} (Newest First)`,
      key: e,
      order: "desc",
      type: o
    },
    {
      value: `${e}_asc`,
      label: `${r} (Oldest First)`,
      key: e,
      order: "asc",
      type: o
    }
  ] : o === "boolean" ? [
    {
      value: `${e}_desc`,
      label: `${r} (True First)`,
      key: e,
      order: "desc",
      type: o
    },
    {
      value: `${e}_asc`,
      label: `${r} (False First)`,
      key: e,
      order: "asc",
      type: o
    }
  ] : [
    {
      value: `${e}_asc`,
      label: `${r} (A-Z)`,
      key: e,
      order: "asc",
      type: o
    },
    {
      value: `${e}_desc`,
      label: `${r} (Z-A)`,
      key: e,
      order: "desc",
      type: o
    }
  ] : [];
}), ua = (a, n = []) => {
  if (Array.isArray(a.options) && a.options.length > 0)
    return a.options.map((o) => ({
      ...o,
      type: o.type || "string",
      order: o.order === "desc" ? "desc" : "asc"
    }));
  const r = Array.isArray(a.fields) ? a.fields : [];
  if (r.length > 0) {
    const o = r.map((c) => {
      const i = typeof c == "string" ? c : c.key, s = n.find(
        (b) => b.key === i || b.sortKey === i || b.type === "group" && b.titleKey === i
      );
      return s ? {
        ...s,
        sortKey: typeof c == "object" && c.key ? c.key : s.sortKey,
        sortType: typeof c == "object" && c.type ? c.type : s.sortType,
        sortLabel: typeof c == "object" && c.label ? c.label : s.sortLabel
      } : null;
    }).filter((c) => c !== null);
    return Ir(o);
  }
  return a.autoGenerate ? Ir(n) : [];
}, ha = (a = [], n = "", e, r = []) => {
  if (!(e != null && e.enabled) || !n || e != null && e.useServerSideSorting)
    return a;
  const o = r == null ? void 0 : r.find(
    (p) => p.value === n
  );
  if (!(o != null && o.key))
    return a;
  const c = o.order === "desc" ? "desc" : "asc", i = o.key, s = o.type || "string", b = (p) => String(p ?? "").replace(/[^\d]/g, "").trim();
  return [...a].sort((p, u) => {
    const d = p == null ? void 0 : p[i], l = u == null ? void 0 : u[i];
    if (d == null && l == null) return 0;
    if (d == null) return c === "asc" ? 1 : -1;
    if (l == null) return c === "asc" ? -1 : 1;
    let g = 0;
    return s === "number" ? g = Number(d) - Number(l) : s === "phone" ? g = b(d).localeCompare(
      b(l),
      void 0,
      {
        numeric: !0
      }
    ) : s === "date" ? g = new Date(d).getTime() - new Date(l).getTime() : s === "boolean" ? g = +!!d - +!!l : g = String(d).localeCompare(String(l)), c === "asc" ? g : -g;
  });
}, ba = ({
  config: a,
  setShowAdd: n,
  title: e,
  buttonText: r,
  description: o,
  showAddButton: c
}) => {
  var xr;
  const {
    data: i = [],
    table_head: s = [],
    loading: b = !1,
    search: p = {
      enabled: !1,
      placeholder: "Search...",
      useServerSideSearch: !1
    },
    filter: u = {
      enabled: !1,
      useServerSideFilters: !1
    },
    sort: d = { enabled: !1 },
    pagination: l = {
      enabled: !1,
      rows_per_page: 10,
      useServerSidePagination: !1
    },
    exportCSV: g = {
      enabled: !1,
      fileName: "",
      fields: []
    },
    emptyMessage: f = "No data available",
    onMenuAction: w,
    setServerSidePaginationData: $ = () => {
    },
    onFilterApply: N,
    filterConfig: S = null,
    rowClick: A = null
  } = a, [B, F] = _(""), [E, O] = _(null), [v, z] = _([]), [L, U] = _({ top: 0, left: 0 }), [V, X] = _(!1), [ae, ne] = _({}), P = Re(() => da(d), [d]), D = Re(
    () => pa(s),
    [s]
  ), I = Re(() => ua(P, D), [P, D]), [K, R] = _(
    (P == null ? void 0 : P.defaultValue) || ""
  ), [W, pe] = _(null), [j, fe] = _(!1), ve = Re(() => !p.enabled || !B.trim() || p.useServerSideSearch ? i : yt(i, B, p.searchKeys || []), [i, B, p]), M = Re(() => ha(
    ve,
    K,
    P,
    I
  ), [ve, K, P, I]), [G, C] = _(1), [T, ee] = _((l == null ? void 0 : l.rows_per_page) || 50), [re, J] = _(ve.length || 0), ie = l != null && l.useServerSidePagination ? l.total_pages : Math.ceil(ve.length / T), De = Re(() => {
    if (l.useServerSidePagination) return M;
    const m = (G - 1) * T;
    return M.slice(m, m + T);
  }, [M, G, T, l.useServerSidePagination]), Le = le(null), Ee = le(null), je = le({}), Pe = le(null), ze = typeof document < "u" ? ((xr = Ee.current) == null ? void 0 : xr.closest(".racm-root")) || document.body : null, Ge = (m) => {
    F(m), C(1), p.useServerSideSearch && (Pe.current && clearTimeout(Pe.current), Pe.current = setTimeout(async () => {
      try {
        await $((k) => ({
          ...k,
          search: m,
          current_page: 1
        }));
      } catch (k) {
        console.error("Search error:", k);
      }
    }, 800));
  }, Ye = (m, k = null) => {
    R(m), C(1);
    const H = {
      value: m,
      option: k,
      key: (k == null ? void 0 : k.key) || "",
      order: (k == null ? void 0 : k.order) || "",
      type: (k == null ? void 0 : k.type) || ""
    };
    typeof (P == null ? void 0 : P.onChange) == "function" && P.onChange(H);
  }, Ke = (m, k, H) => {
    H.stopPropagation(), O(null), w == null || w(m.type, k);
  }, We = (m, k, H) => {
    k.stopPropagation(), z(H);
    const te = k.currentTarget;
    je.current[m] = te;
    const oe = te.getBoundingClientRect(), me = 192, ye = H.length * 40, ue = window.innerWidth, xe = window.innerHeight, Ne = ue - oe.right < me ? oe.left - me + oe.width : oe.left, Oe = xe - oe.bottom < ye && oe.top > ye ? oe.top - ye - 2 : oe.bottom + 2;
    U({
      top: Math.max(8, Math.min(Oe, xe - ye - 8)),
      left: Math.max(8, Math.min(Ne, ue - me - 8))
    }), O(E === m ? null : m);
  }, He = (m) => (G - 1) * T + m + 1, Ie = (m) => {
    let k = m;
    k && k.src instanceof File && (k = { ...k, src: URL.createObjectURL(k.src) }), pe(k), fe(!0);
  }, Ve = (m) => {
    if (!m) return "";
    if (typeof m == "string")
      return m;
    if (m instanceof File)
      return URL.createObjectURL(m);
    if (typeof m == "object") {
      if (typeof m.preview == "string")
        return m.preview;
      if (typeof m.src == "string")
        return m.src;
      if (m.src instanceof File)
        return URL.createObjectURL(m.src);
      if (m.file instanceof File)
        return URL.createObjectURL(m.file);
    }
    return "";
  }, Ze = (m, k) => {
    const H = Array.isArray(m) ? m : [];
    if (H.length === 0)
      return /* @__PURE__ */ t("span", { className: k.className || "", children: "N/A" });
    const te = k.maxPreview || 3, oe = H.slice(0, te), me = H.length - oe.length;
    return /* @__PURE__ */ h("div", { className: "flex items-center", children: [
      /* @__PURE__ */ t("div", { className: "flex -space-x-2", children: oe.map((ye, ue) => {
        const xe = Ve(ye);
        return xe ? /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            onClick: (Fe) => {
              Fe.stopPropagation(), Ie({ src: xe, alt: `Gallery ${ue + 1}` });
            },
            className: "w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden",
            children: /* @__PURE__ */ t(
              "img",
              {
                src: xe,
                alt: `gallery-${ue + 1}`,
                className: "w-full h-full object-cover"
              }
            )
          },
          `${xe}-${ue}`
        ) : null;
      }) }),
      me > 0 && /* @__PURE__ */ h("span", { className: "ml-2 text-xs font-medium text-gray-600 dark:text-gray-300", children: [
        "+",
        me
      ] })
    ] });
  }, Ue = (m, k, H, te = null, oe = null) => /* @__PURE__ */ t(Z, { children: m ? /* @__PURE__ */ t(
    "img",
    {
      src: m instanceof File ? URL.createObjectURL(m) : m,
      alt: k || "Avatar",
      onClick: (me) => {
        me.stopPropagation(), me.preventDefault(), Ie({ src: m, alt: k });
      },
      className: `w-10 h-10 cursor-pointer shrink-0 rounded-full object-cover border border-gray-200 dark:border-gray-700 ${H || ""}`
    }
  ) : /* @__PURE__ */ t(Z, { children: te ? typeof te == "function" ? te(oe) : te : /* @__PURE__ */ t(
    "div",
    {
      className: `w-10 h-10 flex items-center shrink-0 justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${H || ""}`,
      children: /* @__PURE__ */ t(wr, { className: "w-6 h-6 text-gray-400 dark:text-gray-400" })
    }
  ) }) }), Xe = (m, k) => /* @__PURE__ */ t(Z, { children: m ? /* @__PURE__ */ t(
    "audio",
    {
      controls: !0,
      src: m instanceof File ? URL.createObjectURL(m) : m,
      onClick: (H) => {
        H.stopPropagation();
      },
      className: `w-64 cursor-pointer ${k || ""}`
    },
    m instanceof File ? URL.createObjectURL(m) : m
  ) : /* @__PURE__ */ t(Z, { children: /* @__PURE__ */ t(
    "div",
    {
      className: `w-12 h-12 flex items-center shrink-0 justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${k || ""}`,
      children: /* @__PURE__ */ t(ht, { className: "w-6 h-6 text-gray-400 dark:text-gray-400" })
    }
  ) }) }), Y = (m, k) => /* @__PURE__ */ h("div", { className: `flex items-center space-x-4 ${k.className || ""}`, children: [
    k.imageKey ? Ue(
      m[k.imageKey],
      m[k.titleKey],
      "group-avatar",
      k.fallback_icon,
      m
    ) : "",
    /* @__PURE__ */ h("div", { children: [
      /* @__PURE__ */ t("p", { className: "font-medium text-gray-900 dark:text-white group-title", children: m[k.titleKey] || "" }),
      /* @__PURE__ */ t("p", { className: "text-sm text-gray-500 dark:text-gray-400 group-sub-title", children: m[k.subtitleKey] || "" })
    ] })
  ] }), Q = (m, k) => {
    var me;
    let H = String(m);
    const te = k.variant || "contained";
    let oe = k.defaultColor;
    if (((me = k == null ? void 0 : k.chipOptions) == null ? void 0 : me.length) > 0) {
      const ye = k == null ? void 0 : k.chipOptions.find((ue) => ue.value == m);
      ye && (H = ye.label, oe = ye.color);
    }
    return /* @__PURE__ */ t(
      et,
      {
        label: H,
        variant: te,
        color: oe,
        className: k.className || ""
      }
    );
  }, ce = (m, k, H) => {
    const te = k[m.key];
    return m.type === "menu_actions" ? /* @__PURE__ */ t("div", { className: `text-center ${m.className || ""}`, children: /* @__PURE__ */ t(
      "button",
      {
        ref: (oe) => {
          je.current[k.id || k._id] = oe;
        },
        onClick: (oe) => We(k.id || k._id, oe, m.menuList),
        className: x(
          y.table.actionButton,
          "p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition text-gray-700 dark:text-gray-300"
        ),
        children: /* @__PURE__ */ t(ut, { className: "h-4 w-4" })
      }
    ) }) : m.type === "index" ? /* @__PURE__ */ t("span", { className: m.className || "", children: He(H) }) : m.type === "group" ? Y(k, m) : m.type === "chip" ? /* @__PURE__ */ t(Z, { children: Q(te, m) }) : m.type === "date" ? /* @__PURE__ */ t("span", { className: m.className || "", children: ir(te, m.format || "DD MMM YYYY") }) : m.type === "avatar" ? /* @__PURE__ */ t(Z, { children: /* @__PURE__ */ t("div", { className: "min-w-[40px]", children: Ue(
      te,
      m.alt,
      m.className,
      m.fallback_icon,
      k
    ) }) }) : m.type === "audio" ? /* @__PURE__ */ t(Z, { children: Xe(te, m.className) }) : m.type === "multiImage" ? /* @__PURE__ */ t(Z, { children: Ze(te, m) }) : /* @__PURE__ */ t("span", { className: m.className || "", children: te || "N/A" });
  }, Se = (m) => {
    if (typeof A == "function")
      return A(m);
    if (A)
      return w == null ? void 0 : w("view", m);
  }, se = (m, k) => {
    if (m.onClickDetails)
      return w == null ? void 0 : w("view", k);
    if (typeof m.handleClick == "function")
      return m.handleClick(k);
  }, yr = () => A || typeof A == "function", vr = (m) => m.onClickDetails || typeof m.handleClick == "function", at = () => {
    var Fe;
    if (!(i != null && i.length) || !((Fe = g == null ? void 0 : g.fields) != null && Fe.length)) return;
    const m = g.fields.map((Ne) => Ne.label), k = De.map(
      (Ne) => g.fields.map((kr) => {
        const Oe = Ne == null ? void 0 : Ne[kr.key];
        return `"${Oe ?? ""}"`;
      })
    ), H = [
      m.join(","),
      ...k.map((Ne) => Ne.join(","))
    ].join(`
`), oe = `export-${ir(/* @__PURE__ */ new Date(), "YYYY-MM-DD_HH-mm-ss")}.csv`, me = g.fileName || oe, ye = new Blob([H], { type: "text/csv;charset=utf-8;" }), ue = document.createElement("a"), xe = URL.createObjectURL(ye);
    ue.href = xe, ue.download = me, document.body.appendChild(ue), ue.click(), document.body.removeChild(ue), URL.revokeObjectURL(xe);
  };
  return q(() => {
    const m = () => {
      E && O(null);
    };
    return window.addEventListener("scroll", m, !0), () => {
      window.removeEventListener("scroll", m, !0);
    };
  }, [E]), q(() => {
    const m = (k) => {
      Le.current && !Le.current.contains(k.target) && O(null);
    };
    return document.addEventListener("click", m), () => document.removeEventListener("click", m);
  }, []), q(() => {
    l != null && l.rows_per_page && (l != null && l.useServerSidePagination) && ee((l == null ? void 0 : l.rows_per_page) || 50), l.current_page && C(l.current_page);
  }, [
    l.rows_per_page,
    l == null ? void 0 : l.useServerSidePagination,
    l.current_page
  ]), q(() => {
    J(
      l != null && l.useServerSidePagination ? l.total_records : M.length
    ), M.length <= T * (G - 1) && !(l != null && l.useServerSidePagination) && C((m) => m - 1 || 1);
  }, [
    M.length,
    l.total_records,
    l == null ? void 0 : l.useServerSidePagination
  ]), q(() => {
    if (!(P != null && P.enabled)) {
      R("");
      return;
    }
    if (I.some(
      (k) => k.value === P.defaultValue
    )) {
      R(P.defaultValue);
      return;
    }
    R("");
  }, [P, I]), q(() => {
    if (!(P != null && P.enabled) || !(P != null && P.useServerSideSorting))
      return;
    const m = I == null ? void 0 : I.find(
      (k) => k.value === K
    );
    $((k) => ({
      ...k,
      current_page: 1,
      sort_by: (m == null ? void 0 : m.key) || "",
      sort_order: (m == null ? void 0 : m.order) || ""
    }));
  }, [
    K,
    P == null ? void 0 : P.enabled,
    P == null ? void 0 : P.useServerSideSorting,
    I,
    $
  ]), /* @__PURE__ */ h("div", { ref: Ee, children: [
    b ? /* @__PURE__ */ t(la, { rows: 6, columns: 6 }) : /* @__PURE__ */ h(Z, { children: [
      /* @__PURE__ */ h(
        "div",
        {
          className: x(
            y.table.toolbar,
            "flex flex-col lg:!flex-row lg:!justify-between gap-4 mb-3"
          ),
          children: [
            /* @__PURE__ */ h("div", { className: "table-heading", children: [
              /* @__PURE__ */ t("h1", { children: e }),
              /* @__PURE__ */ t("p", { children: o })
            ] }),
            /* @__PURE__ */ h("div", { className: "flex flex-col justify-end items-stretch lg:!items-end gap-2 w-full lg:!w-auto", children: [
              c && /* @__PURE__ */ h(
                ge,
                {
                  onClick: () => n(!0),
                  variant: "contained",
                  color: "primary",
                  children: [
                    /* @__PURE__ */ t(lt, { className: "w-4 h-4 mr-2" }),
                    r || "Add New"
                  ]
                }
              ),
              /* @__PURE__ */ h("div", { className: "flex flex-col sm:!flex-row sm:!flex-wrap justify-end items-stretch sm:!items-center gap-2 w-full", children: [
                p.enabled && /* @__PURE__ */ t("div", { className: "w-full sm:!w-auto", children: /* @__PURE__ */ h(
                  "div",
                  {
                    className: x(
                      y.table.searchField,
                      "table-search-field"
                    ),
                    children: [
                      /* @__PURE__ */ t(gr, { className: "search-icon" }),
                      /* @__PURE__ */ t(
                        "input",
                        {
                          type: "text",
                          placeholder: p.placeholder || "Search...",
                          value: B,
                          onChange: (m) => Ge(m.target.value),
                          className: y.table.searchInput
                        }
                      )
                    ]
                  }
                ) }),
                P != null && P.enabled && (I == null ? void 0 : I.length) > 0 || S && u.enabled || g && g.enabled ? /* @__PURE__ */ h("div", { className: "flex items-center justify-end gap-2 w-full sm:!w-auto", children: [
                  S && u.enabled && /* @__PURE__ */ h("div", { className: "filter-button-wrapper", children: [
                    /* @__PURE__ */ h(
                      ge,
                      {
                        onClick: () => X(!0),
                        variant: "contained",
                        className: "w-full sm:!w-auto",
                        children: [
                          /* @__PURE__ */ t(st, { className: "w-4 h-4 mr-2" }),
                          "Filters"
                        ]
                      }
                    ),
                    Object.keys(ae).length > 0 && /* @__PURE__ */ t("span", { className: "red-dot" })
                  ] }),
                  g && g.enabled && /* @__PURE__ */ t("div", { className: "filter-button-wrapper", children: /* @__PURE__ */ h(
                    ge,
                    {
                      onClick: () => at(),
                      variant: "contained",
                      className: "w-full sm:!w-auto",
                      children: [
                        /* @__PURE__ */ t(dt, { className: "w-4 h-4 mr-2" }),
                        "Export CSV"
                      ]
                    }
                  ) }),
                  (P == null ? void 0 : P.enabled) && (I == null ? void 0 : I.length) > 0 && /* @__PURE__ */ t(
                    sa,
                    {
                      options: I,
                      value: K,
                      onChange: Ye,
                      clearLabel: P == null ? void 0 : P.clearLabel
                    }
                  )
                ] }) : null
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ h(
        "div",
        {
          className: x(
            y.table.root,
            y.table.container,
            "table-container"
          ),
          children: [
            /* @__PURE__ */ t("div", { className: "overflow-x-auto", children: /* @__PURE__ */ h("table", { className: y.table.element, children: [
              /* @__PURE__ */ t("thead", { className: y.table.head, children: /* @__PURE__ */ t("tr", { className: y.table.headRow, children: s.map((m) => /* @__PURE__ */ t(
                "th",
                {
                  className: x(
                    y.table.headCell,
                    "table-head-data",
                    m.headClass || ""
                  ),
                  children: m.title
                },
                m.key
              )) }) }),
              /* @__PURE__ */ t("tbody", { className: y.table.body, children: De.length === 0 ? /* @__PURE__ */ t("tr", { children: /* @__PURE__ */ t(
                "td",
                {
                  colSpan: s.length,
                  className: x(
                    y.table.noData,
                    "no-data-message"
                  ),
                  children: f
                }
              ) }) : De.map((m, k) => /* @__PURE__ */ t(
                "tr",
                {
                  className: x(
                    y.table.row,
                    "table-row",
                    yr() ? "cursor-pointer" : ""
                  ),
                  onClick: () => {
                    yr() && Se(m);
                  },
                  children: s.map((H) => /* @__PURE__ */ t(
                    "td",
                    {
                      className: x(
                        y.table.cell,
                        "table-data",
                        H.type == "audio" ? "" : "max-w-[300px]",
                        "truncate",
                        vr(H) ? "cursor-pointer" : ""
                      ),
                      title: String(m[H.key] ?? ""),
                      onClick: (te) => {
                        vr(H) && (te.stopPropagation(), te.preventDefault(), se(H, m));
                      },
                      children: H.render ? H.render(m, k) : ce(H, m, k)
                    },
                    H.key
                  ))
                },
                m.id || m._id || k
              )) })
            ] }) }),
            (l == null ? void 0 : l.enabled) && M.length > 0 && /* @__PURE__ */ h(
              "div",
              {
                className: x(
                  y.table.pagination,
                  "pagination-wrapper"
                ),
                children: [
                  /* @__PURE__ */ h("span", { children: [
                    "Showing ",
                    (G - 1) * T + 1,
                    " to",
                    " ",
                    Math.min(G * T, re),
                    " of",
                    " ",
                    re,
                    " results"
                  ] }),
                  /* @__PURE__ */ h("div", { className: "flex items-center gap-4", children: [
                    /* @__PURE__ */ h("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ t("span", { children: "Rows per page:" }),
                      /* @__PURE__ */ t(
                        "select",
                        {
                          value: T,
                          onChange: (m) => {
                            const k = Number(m.target.value);
                            ee(k), C(1), l.useServerSidePagination && $(
                              (H) => ({
                                ...H,
                                current_page: 1,
                                rows_per_page: k
                              })
                            );
                          },
                          className: "rows-number-select",
                          children: [10, 25, 50, 100].map((m) => /* @__PURE__ */ t("option", { value: m, children: m }, m))
                        }
                      )
                    ] }),
                    /* @__PURE__ */ h("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ t(
                        "button",
                        {
                          onClick: () => {
                            if (G > 1) {
                              const m = G - 1;
                              C(m), l.useServerSidePagination && $(
                                (k) => ({
                                  ...k,
                                  current_page: m
                                })
                              );
                            }
                          },
                          disabled: G === 1,
                          className: "arrow-icons",
                          children: /* @__PURE__ */ t(pt, { className: "h-4 w-4" })
                        }
                      ),
                      /* @__PURE__ */ h("span", { children: [
                        "Page ",
                        G,
                        " of ",
                        ie
                      ] }),
                      /* @__PURE__ */ t(
                        "button",
                        {
                          onClick: () => {
                            if (G < ie) {
                              const m = G + 1;
                              C(m), l.useServerSidePagination && $(
                                (k) => ({
                                  ...k,
                                  current_page: m
                                })
                              );
                            }
                          },
                          disabled: G === ie,
                          className: "arrow-icons",
                          children: /* @__PURE__ */ t(mt, { className: "h-4 w-4" })
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
    E && ze && fr(
      /* @__PURE__ */ t(
        "div",
        {
          ref: Le,
          style: {
            position: "fixed",
            top: `${L.top}px`,
            left: `${L.left}px`,
            zIndex: 9999
          },
          className: x(
            y.table.menu,
            "w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg border border-gray-200 dark:border-gray-600"
          ),
          children: v.map((m, k) => /* @__PURE__ */ h(
            "button",
            {
              onClick: (H) => Ke(
                m,
                i.find(
                  (te) => te.id === E || te._id == E
                ),
                H
              ),
              className: x(
                y.table.menuItem,
                "w-full flex items-center gap-2 px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-600",
                m.variant === "danger" ? "text-red-600 dark:text-red-500" : "text-gray-700 dark:text-gray-200"
              ),
              children: [
                m.icon && /* @__PURE__ */ t("span", { className: "shrink-0", children: m.icon }),
                m.title
              ]
            },
            k
          ))
        }
      ),
      ze
    ),
    S && /* @__PURE__ */ t(
      ca,
      {
        isOpen: V,
        onClose: () => X(!1),
        config: S,
        onApply: (m) => {
          ne(m), N == null || N(m);
        }
      }
    ),
    j && W && /* @__PURE__ */ t(
      ke,
      {
        src: W.src,
        alt: W.alt,
        isOpen: j,
        setIsOpen: fe
      }
    )
  ] });
}, qe = ({
  isOpen: a,
  onClose: n,
  icon: e,
  title: r,
  children: o,
  size: c = "md",
  actionButtons: i = [],
  onFormSubmit: s = () => {
  },
  loadingBtn: b = !1,
  executeFunction: p = () => {
  },
  selectedItem: u = null,
  footerConfig: d,
  classNames: l
}) => {
  if (!a) return null;
  const g = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-full"
  }, f = i.length > 0 || !!(d != null && d.cancelButton);
  return /* @__PURE__ */ h(
    "div",
    {
      className: x(
        y.modal.root,
        "fixed inset-0 z-50 flex items-center justify-center p-4"
      ),
      children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: x(
              y.modal.overlay,
              "fixed inset-0 bg-gray-500 opacity-75",
              l == null ? void 0 : l.overlay
            )
          }
        ),
        /* @__PURE__ */ h(
          "div",
          {
            className: x(
              y.modal.container,
              "relative bg-white rounded-lg shadow-xl w-full max-h-[90vh] flex flex-col dark:bg-gray-800",
              g[c] || g.md,
              l == null ? void 0 : l.container
            ),
            children: [
              /* @__PURE__ */ h(
                "div",
                {
                  className: x(
                    y.modal.header,
                    "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0",
                    l == null ? void 0 : l.header
                  ),
                  children: [
                    /* @__PURE__ */ h("div", { className: "flex items-center gap-1", children: [
                      e && /* @__PURE__ */ t("span", { children: e }),
                      /* @__PURE__ */ t(
                        "h3",
                        {
                          className: x(
                            y.modal.title,
                            "text-lg font-medium text-gray-900 dark:text-white",
                            l == null ? void 0 : l.title
                          ),
                          children: r
                        }
                      )
                    ] }),
                    /* @__PURE__ */ t(
                      "button",
                      {
                        onClick: () => n(),
                        className: x(
                          y.modal.closeButton,
                          "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
                          l == null ? void 0 : l.closeButton
                        ),
                        children: /* @__PURE__ */ t(ar, { className: "w-6 h-6" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ t(
                "div",
                {
                  className: x(
                    y.modal.body,
                    "flex-1 overflow-y-auto p-4",
                    l == null ? void 0 : l.body
                  ),
                  children: o
                }
              ),
              f && /* @__PURE__ */ h(
                "div",
                {
                  className: x(
                    y.modal.footer,
                    "px-4 py-3 flex justify-end gap-3 border-t border-gray-200 dark:border-gray-700 sm:!px-6",
                    l == null ? void 0 : l.footer
                  ),
                  children: [
                    (d == null ? void 0 : d.cancelButton) && /* @__PURE__ */ t(
                      ge,
                      {
                        onClick: () => n(),
                        variant: "outlined",
                        color: "default",
                        className: x(
                          y.modal.actionButton,
                          "min-w-[100px]"
                        ),
                        type: "button",
                        children: (d == null ? void 0 : d.cancelText) || "Cancel"
                      }
                    ),
                    i.map((w, $) => /* @__PURE__ */ t(
                      ge,
                      {
                        onClick: (N) => {
                          w.type == "submit" ? s(N) : p(
                            () => {
                              var S;
                              return Promise.resolve((S = w == null ? void 0 : w.onClick) == null ? void 0 : S.call(w, N, u));
                            },
                            (S) => n == null ? void 0 : n(S)
                          );
                        },
                        disabled: b || w.disabled,
                        variant: w.variant || "contained",
                        color: w.color || "primary",
                        className: x(
                          y.modal.actionButton,
                          "min-w-[100px]",
                          w.className || ""
                        ),
                        type: w.type || "button",
                        children: b ? /* @__PURE__ */ h(
                          "div",
                          {
                            className: x(
                              y.modal.loadingIndicator,
                              "flex items-center"
                            ),
                            children: [
                              /* @__PURE__ */ t("div", { className: "animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-2 border-t-white mr-2" }),
                              w.label || "Submit",
                              "..."
                            ]
                          }
                        ) : w.label || "Submit"
                      },
                      `${w.label || "action"}-${$}`
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
}, Ur = ({
  config: a,
  onSubmit: n,
  initialData: e,
  fetchRowDetails: r,
  type: o
}) => {
  const c = e || {}, { formClass: i = "grid grid-cols-12 gap-4", formFields: s = [] } = a || {}, [b, p] = _(c), [u, d] = _(!1), [l, g] = _({}), f = async () => {
    r == null || r(c).then((N) => {
      p(N.data);
    }).catch((N) => {
      Ce(N.message, { variant: "error" });
    }).finally(() => {
      d(!1);
    });
  };
  q(() => {
    r instanceof Function ? (d(!0), f()) : (p(c), d(!1));
  }, []);
  const w = (N, S) => {
    p((A) => ({ ...A, [N]: S })), g((A) => ({
      ...A,
      [N]: ""
    }));
  }, $ = (N) => {
    N.preventDefault();
    const S = N.currentTarget;
    if (!S.checkValidity()) {
      S.reportValidity();
      return;
    }
    const A = {};
    let B = !1;
    for (const F of s) {
      const E = b[F.key] || "";
      if (F.customValidation) {
        const O = F.customValidation(E);
        if (O !== !1 && (A[F.key] = O, !B)) {
          const v = S.querySelector(
            `[id="field-${F.key}"]`
          );
          v == null || v.focus(), B = !0;
        }
      }
    }
    g(A), !(Object.keys(A).length > 0) && n(b);
  };
  return u ? /* @__PURE__ */ t(
    "div",
    {
      className: x(
        y.form.loading,
        "flex items-center justify-center h-64"
      ),
      children: /* @__PURE__ */ t(
        "div",
        {
          className: "rounded-full border-4 border-blue-500 border-t-gray-200 animate-spin w-8 h-8",
          style: {
            borderTopColor: "border-primary-500"
          }
        }
      )
    }
  ) : /* @__PURE__ */ t(
    "form",
    {
      id: o === "add" ? "addForm" : o === "edit" ? "editForm" : "defaultForm",
      onSubmit: $,
      className: x(y.form.root, i),
      noValidate: !1,
      children: s.map((N) => /* @__PURE__ */ t(
        tt,
        {
          field: N,
          formData: b,
          errorMessage: l[N.key] || "",
          handleChange: w
        },
        N.key
      ))
    }
  );
};
function ga({
  data: a,
  config: n,
  fetchRowDetails: e
}) {
  const {
    fields: r = [],
    containerClass: o,
    variant: c = "default",
    styles: i = {}
  } = n || {}, s = a || {}, [b, p] = _(s), [u, d] = _(!0), l = async () => {
    e == null || e(s).then((f) => {
      p(f.data);
    }).catch((f) => {
      Ce(f.message, { variant: "error" });
    }).finally(() => {
      d(!1);
    });
  };
  if (q(() => {
    e instanceof Function ? l() : (p(s), d(!1));
  }, []), u)
    return /* @__PURE__ */ t(
      "div",
      {
        className: x(
          y.form.loading,
          "flex items-center justify-center h-64"
        ),
        children: /* @__PURE__ */ t(
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
  const g = {
    default: "grid grid-cols-12 gap-4",
    // card: each field is a standalone elevated card in a 12-col grid
    card: "grid grid-cols-12 gap-3",
    // split: clean property-sheet — bordered box, rows divided by hairlines
    split: "rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden divide-y divide-gray-100 dark:divide-gray-800"
  };
  return /* @__PURE__ */ t(Z, { children: /* @__PURE__ */ t(
    "div",
    {
      className: x(
        y.details.root,
        y.details.container,
        g[c] || g.default,
        o || "",
        i.containerClass || ""
      ),
      children: r.map((f) => f.renderCondition && typeof f.renderCondition == "function" && !f.renderCondition(b) ? null : f.type == "group" ? /* @__PURE__ */ t(
        qr,
        {
          col: f,
          data: b,
          uiVariant: c,
          styleConfig: i
        },
        f.key || f.titleKey
      ) : f.type == "cardGroup" ? /* @__PURE__ */ t(
        Qr,
        {
          col: f,
          data: b,
          uiVariant: c,
          styleConfig: i
        },
        f.key || f.titleKey
      ) : /* @__PURE__ */ t(
        rt,
        {
          col: f,
          data: b,
          uiVariant: c,
          styleConfig: i
        },
        f.key || f.label
      ))
    }
  ) });
}
const wa = ({ config: a }) => {
  var C, T, ee, re, J, ie, De, Le, Ee, je, Pe, ze, Ge, Ye, Ke, We, He, Ie, Ve, Ze, Ue, Xe;
  const {
    title: n,
    fetchData: e,
    fetchRowDetails: r,
    isStaticData: o = !1,
    tableConfig: c,
    modalConfig: i,
    filterConfig: s
  } = a, [b, p] = _(!0), [u, d] = _(!1), [l, g] = _([]), [f, w] = _(null), [$, N] = _({
    search: "",
    rows_per_page: 50,
    current_page: 1,
    sort_by: "",
    sort_order: ""
  }), [S, A] = _({}), [B, F] = _(!1), [E, O] = _(!1), [v, z] = _(!1), [L, U] = _(!1), [V, X] = _(!1), [ae, ne] = _(
    null
  ), P = (Y, Q) => {
    Y === "edit" ? (ne(Q), z(!0)) : Y === "view" ? (ne(Q), X(!0)) : Y === "delete" && (ne(Q), U(!0));
  }, D = async (Y, Q, ce = "", Se = "") => {
    d(!0);
    try {
      if (!Y) return;
      const se = await Y();
      (ce || se != null && se.message) && Ce(ce || se.message || "Success", {
        variant: "success"
      }), Q == null || Q(se);
    } catch (se) {
      (Se || se != null && se.message) && Ce(Se || se.message || "Error occurred", {
        variant: "error"
      });
    } finally {
      d(!1);
    }
  }, I = (Y) => {
    const Q = Y.newObject;
    o ? (g((ce) => [Q, ...ce]), w((ce) => ({
      ...ce,
      current_page: 1
    }))) : (N((ce) => ({
      ...ce,
      current_page: 1
    })), $.current_page === 1 && j()), O(!1);
  }, K = (Y) => {
    const { newObject: Q, targetObject: ce } = Y;
    o ? g(
      (Se) => Se.map(
        (se) => se.id === ce.id ? { ...se, ...Q } : se
      )
    ) : j(), z(!1);
  }, R = (Y) => {
    if (!Y) {
      U(!1), ne(null);
      return;
    }
    o ? g(
      (Q) => Q.filter((ce) => ce.id !== Y.targetObject.id)
    ) : l.length === 1 && $.current_page > 1 ? N((Q) => ({
      ...Q,
      current_page: Q.current_page - 1
    })) : j(), U(!1), ne(null);
  }, W = (Y) => D(
    () => {
      var Q;
      return (Q = i == null ? void 0 : i.addModal) != null && Q.handleSubmit ? i.addModal.handleSubmit(Y) : Promise.resolve({ newObject: null });
    },
    I
  ), pe = (Y) => D(
    () => {
      var Q;
      return (Q = i == null ? void 0 : i.editModal) != null && Q.handleSubmit ? i.editModal.handleSubmit(Y, ae) : Promise.resolve({ newObject: null, targetObject: null });
    },
    K
  ), j = async () => {
    p(!0);
    try {
      const Y = await e({
        ...$,
        ...S
      });
      g(Y.data || []), w(Y.pagination || null);
    } catch (Y) {
      Ce(Y.message || "Failed to fetch data", {
        variant: "error"
      });
    } finally {
      p(!1);
    }
  }, fe = (Y) => {
    var Q;
    A((ce) => ({ ...Y })), (Q = c == null ? void 0 : c.filter) != null && Q.useServerSideFilters && F((ce) => !ce);
  }, ve = (Y, Q) => Y.filter(
    (ce) => Object.entries(Q).every(([Se, se]) => ce[Se] === se)
  ), M = Re(() => {
    var Y;
    return (Y = c == null ? void 0 : c.filter) != null && Y.useServerSideFilters ? l : ve(l, S);
  }, [l, S, (C = c == null ? void 0 : c.filter) == null ? void 0 : C.useServerSideFilters]), G = (T = i == null ? void 0 : i.viewModal) == null ? void 0 : T.component;
  return q(() => {
    j();
  }, [
    $.search,
    $.rows_per_page,
    $.current_page,
    $.sort_by,
    $.sort_order,
    B
  ]), /* @__PURE__ */ h("div", { className: y.crudPage.root, children: [
    /* @__PURE__ */ t(
      ba,
      {
        title: n,
        setShowAdd: O,
        description: a.description,
        buttonText: a.buttonText,
        showAddButton: !!(i != null && i.addModal),
        config: {
          ...c,
          pagination: {
            ...c.pagination,
            ...f
          },
          data: M,
          setServerSidePaginationData: N,
          onMenuAction: P,
          filterConfig: s,
          onFilterApply: fe,
          loading: b
        }
      }
    ),
    /* @__PURE__ */ t(
      qe,
      {
        isOpen: E,
        onClose: () => {
          u || O(!1);
        },
        icon: (ee = i == null ? void 0 : i.addModal) == null ? void 0 : ee.icon,
        title: ((re = i == null ? void 0 : i.addModal) == null ? void 0 : re.title) || "Add New",
        size: ((J = i == null ? void 0 : i.addModal) == null ? void 0 : J.size) || "md",
        onFormSubmit: () => {
          var Y;
          return (Y = document.querySelector("#addForm")) == null ? void 0 : Y.requestSubmit();
        },
        loadingBtn: u,
        actionButtons: ((ie = i == null ? void 0 : i.addModal) == null ? void 0 : ie.actionButtons) || [],
        children: /* @__PURE__ */ t(
          Ur,
          {
            config: (i == null ? void 0 : i.addModal) || {},
            onSubmit: W,
            initialData: {},
            type: "add",
            loading: u
          }
        )
      }
    ),
    /* @__PURE__ */ t(
      qe,
      {
        isOpen: v,
        onClose: () => {
          u || z(!1);
        },
        icon: (De = i == null ? void 0 : i.editModal) == null ? void 0 : De.icon,
        title: ((Le = i == null ? void 0 : i.editModal) == null ? void 0 : Le.title) || "Edit",
        size: ((Ee = i == null ? void 0 : i.editModal) == null ? void 0 : Ee.size) || "md",
        onFormSubmit: () => {
          var Y;
          return (Y = document.querySelector("#editForm")) == null ? void 0 : Y.requestSubmit();
        },
        actionButtons: ((je = i == null ? void 0 : i.editModal) == null ? void 0 : je.actionButtons) || [],
        loadingBtn: u,
        children: /* @__PURE__ */ t(
          Ur,
          {
            config: (i == null ? void 0 : i.editModal) || {},
            onSubmit: pe,
            initialData: ae,
            type: "edit",
            loading: u,
            fetchRowDetails: r
          }
        )
      }
    ),
    /* @__PURE__ */ t(
      qe,
      {
        isOpen: L,
        onClose: (Y) => {
          R(Y);
        },
        icon: ((Pe = i == null ? void 0 : i.deleteModal) == null ? void 0 : Pe.icon) || /* @__PURE__ */ t(be, { icon: "ph:warning-bold", className: "w-6 h-6 text-red-500" }),
        title: ((ze = i == null ? void 0 : i.deleteModal) == null ? void 0 : ze.title) || "Confirm Delete",
        size: ((Ge = i == null ? void 0 : i.deleteModal) == null ? void 0 : Ge.size) || "md",
        loading: u,
        actionButtons: ((Ye = i == null ? void 0 : i.deleteModal) == null ? void 0 : Ye.actionButtons) || [],
        executeFunction: D,
        selectedItem: ae,
        children: /* @__PURE__ */ t(
          "div",
          {
            className: x(
              y.crudPage.deleteContent,
              "flex items-center space-x-2 py-3"
            ),
            children: /* @__PURE__ */ h("div", { children: [
              /* @__PURE__ */ t("p", { className: "text-md text-gray-700 dark:text-white", children: ((Ke = i == null ? void 0 : i.deleteModal) == null ? void 0 : Ke.confirmText) || "Are you sure you want to delete this item?" }),
              ((We = i == null ? void 0 : i.deleteModal) == null ? void 0 : We.referenceKey) && /* @__PURE__ */ t("p", { className: "text-md font-semibold text-gray-700 dark:text-white", children: ae == null ? void 0 : ae[(He = i == null ? void 0 : i.deleteModal) == null ? void 0 : He.referenceKey] })
            ] })
          }
        )
      }
    ),
    (i == null ? void 0 : i.viewModal) && /* @__PURE__ */ t(
      qe,
      {
        isOpen: V,
        onClose: () => {
          X(!1), ne(null);
        },
        icon: (Ie = i == null ? void 0 : i.viewModal) == null ? void 0 : Ie.icon,
        title: ((Ve = i == null ? void 0 : i.viewModal) == null ? void 0 : Ve.title) || "View Details",
        size: ((Ze = i == null ? void 0 : i.viewModal) == null ? void 0 : Ze.size) || "lg",
        footerConfig: (Ue = i == null ? void 0 : i.viewModal) == null ? void 0 : Ue.footer,
        classNames: (Xe = i == null ? void 0 : i.viewModal) == null ? void 0 : Xe.modalClassNames,
        children: G ? /* @__PURE__ */ t(G, { data: ae }) : /* @__PURE__ */ t(
          ga,
          {
            data: ae,
            fetchRowDetails: r,
            config: (i == null ? void 0 : i.viewModal) || {}
          }
        )
      }
    )
  ] });
};
function fa({ children: a }) {
  return wt(), a;
}
function ya({
  children: a
}) {
  try {
    return /* @__PURE__ */ t(fa, { children: a });
  } catch {
    return /* @__PURE__ */ t(
      gt,
      {
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right"
        },
        action: (e) => /* @__PURE__ */ t(
          "button",
          {
            onClick: () => {
              window.dispatchEvent(
                new CustomEvent("closeSnackbar", { detail: e })
              );
            },
            className: "p-1 hover:bg-white/20 rounded-full transition-colors duration-200 text-white flex items-center justify-center",
            children: /* @__PURE__ */ t(ar, { className: "h-4 w-4" })
          }
        ),
        maxSnack: 3,
        autoHideDuration: 3e3,
        children: a
      }
    );
  }
}
const va = () => {
  if (typeof document > "u" || document.getElementById("react-admin-crud-manager-styles")) return;
  const a = document.createElement("style");
  a.id = "react-admin-crud-manager-styles", a.textContent = ft, document.head.appendChild(a);
};
function Ma({ config: a }) {
  return q(() => {
    va();
  }, []), /* @__PURE__ */ t("div", { className: "racm-root", children: /* @__PURE__ */ t(ya, { children: /* @__PURE__ */ t(wa, { config: a }) }) });
}
export {
  Ma as default
};
//# sourceMappingURL=index.es.js.map
