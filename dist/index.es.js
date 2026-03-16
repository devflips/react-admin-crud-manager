import { jsx as t, Fragment as Y, jsxs as h } from "react/jsx-runtime";
import * as _e from "react";
import tr, { useState as D, useRef as de, useEffect as V, useCallback as et, useMemo as Ce } from "react";
import { Info as rt, ChevronDown as zr, Search as gr, Check as tt, X as ar, User as wr, ArrowUpDown as at, Plus as ot, Filter as nt, Download as it, ChevronLeft as ct, ChevronRight as lt, EllipsisVertical as st, Music as dt } from "lucide-react";
import { createPortal as pt } from "react-dom";
import { Icon as be } from "@iconify/react";
import { Editor as ut } from "@tinymce/tinymce-react";
import { enqueueSnackbar as De, SnackbarProvider as ht, useSnackbar as mt } from "notistack";
const bt = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";.racm-root *,.racm-root :before,.racm-root :after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}.racm-root :before,.racm-root :after{--tw-content: ""}.racm-root{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}.racm-root{margin:0;line-height:inherit}.racm-root hr{height:0;color:inherit;border-top-width:1px}.racm-root abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}.racm-root h1,.racm-root h2,.racm-root h3,.racm-root h4,.racm-root h5,.racm-root h6{font-size:inherit;font-weight:inherit}.racm-root a{color:inherit;text-decoration:inherit}.racm-root b,.racm-root strong{font-weight:bolder}.racm-root code,.racm-root kbd,.racm-root samp,.racm-root pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}.racm-root small{font-size:80%}.racm-root sub,.racm-root sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}.racm-root sub{bottom:-.25em}.racm-root sup{top:-.5em}.racm-root table{text-indent:0;border-color:inherit;border-collapse:collapse}.racm-root button,.racm-root input,.racm-root optgroup,.racm-root select,.racm-root textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}.racm-root button,.racm-root select{text-transform:none}.racm-root button,.racm-root [type=button],.racm-root [type=reset],.racm-root [type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}.racm-root :-moz-focusring{outline:auto}.racm-root :-moz-ui-invalid{box-shadow:none}.racm-root progress{vertical-align:baseline}.racm-root ::-webkit-inner-spin-button,.racm-root ::-webkit-outer-spin-button{height:auto}.racm-root [type=search]{-webkit-appearance:textfield;outline-offset:-2px}.racm-root ::-webkit-search-decoration{-webkit-appearance:none}.racm-root ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.racm-root summary{display:list-item}.racm-root blockquote,.racm-root dl,.racm-root dd,.racm-root h1,.racm-root h2,.racm-root h3,.racm-root h4,.racm-root h5,.racm-root h6,.racm-root hr,.racm-root figure,.racm-root p,.racm-root pre{margin:0}.racm-root fieldset{margin:0;padding:0}.racm-root legend{padding:0}.racm-root ol,.racm-root ul,.racm-root menu{list-style:none;margin:0;padding:0}.racm-root dialog{padding:0}.racm-root textarea{resize:vertical}.racm-root input::-moz-placeholder,.racm-root textarea::-moz-placeholder{opacity:1;color:#9ca3af}.racm-root input::placeholder,.racm-root textarea::placeholder{opacity:1;color:#9ca3af}.racm-root button,.racm-root [role=button]{cursor:pointer}.racm-root :disabled{cursor:default}.racm-root img,.racm-root svg,.racm-root video,.racm-root canvas,.racm-root audio,.racm-root iframe,.racm-root embed,.racm-root object{display:block;vertical-align:middle}.racm-root img,.racm-root video{max-width:100%;height:auto}.racm-root [hidden]{display:none}.racm-root{--background: 0 0% 100%;--foreground: 0 0% 3.9%;--card: 0 0% 100%;--card-foreground: 0 0% 3.9%;--popover: 0 0% 100%;--popover-foreground: 0 0% 3.9%;--primary: 0 0% 9%;--primary-foreground: 0 0% 98%;--secondary: 0 0% 96.1%;--secondary-foreground: 0 0% 9%;--muted: 0 0% 96.1%;--muted-foreground: 0 0% 45.1%;--accent: 0 0% 96.1%;--accent-foreground: 0 0% 9%;--destructive: 0 84.2% 60.2%;--destructive-foreground: 0 0% 98%;--border: 0 0% 89.8%;--input: 0 0% 89.8%;--ring: 0 0% 3.9%;--chart-1: 12 76% 61%;--chart-2: 173 58% 39%;--chart-3: 197 37% 24%;--chart-4: 43 74% 66%;--chart-5: 27 87% 67%;--radius: .5rem}.racm-root *{border-color:hsl(var(--border))}.racm-root{background-color:hsl(var(--background));color:hsl(var(--foreground))}.racm-root *,.racm-root :before,.racm-root :after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.racm-root ::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.racm-root .container{width:100%}@media (min-width: 640px){.racm-root .container{max-width:640px}}@media (min-width: 768px){.racm-root .container{max-width:768px}}@media (min-width: 1024px){.racm-root .container{max-width:1024px}}@media (min-width: 1280px){.racm-root .container{max-width:1280px}}@media (min-width: 1536px){.racm-root .container{max-width:1536px}}.racm-root .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.racm-root .pointer-events-none{pointer-events:none}.racm-root .pointer-events-auto{pointer-events:auto}.racm-root .fixed{position:fixed}.racm-root .absolute{position:absolute}.racm-root .relative{position:relative}.racm-root .inset-0{top:0;right:0;bottom:0;left:0}.racm-root .inset-y-0{top:0;bottom:0}.racm-root .-bottom-4{bottom:-1rem}.racm-root .-right-2{right:-.5rem}.racm-root .-right-6{right:-1.5rem}.racm-root .-top-2{top:-.5rem}.racm-root .-top-6{top:-1.5rem}.racm-root .bottom-full{bottom:100%}.racm-root .left-0{left:0}.racm-root .left-1{left:.25rem}.racm-root .left-1\\/2{left:50%}.racm-root .left-3{left:.75rem}.racm-root .right-0{right:0}.racm-root .right-1{right:.25rem}.racm-root .right-1\\/2{right:50%}.racm-root .right-2{right:.5rem}.racm-root .right-3{right:.75rem}.racm-root .right-4{right:1rem}.racm-root .right-\\[50\\%\\]{right:50%}.racm-root .top-0{top:0}.racm-root .top-1{top:.25rem}.racm-root .top-1\\/2{top:50%}.racm-root .top-2{top:.5rem}.racm-root .top-4{top:1rem}.racm-root .top-\\[80\\%\\]{top:80%}.racm-root .top-full{top:100%}.racm-root .z-10{z-index:10}.racm-root .z-20{z-index:20}.racm-root .z-40{z-index:40}.racm-root .z-50{z-index:50}.racm-root .col-span-12{grid-column:span 12 / span 12}.racm-root .col-span-6{grid-column:span 6 / span 6}.racm-root .mb-0{margin-bottom:0}.racm-root .mb-1{margin-bottom:.25rem}.racm-root .mb-3{margin-bottom:.75rem}.racm-root .mb-6{margin-bottom:1.5rem}.racm-root .ml-1{margin-left:.25rem}.racm-root .ml-2{margin-left:.5rem}.racm-root .mr-2{margin-right:.5rem}.racm-root .mt-1{margin-top:.25rem}.racm-root .mt-2{margin-top:.5rem}.racm-root .mt-auto{margin-top:auto}.racm-root .inline{display:inline}.racm-root .flex{display:flex}.racm-root .inline-flex{display:inline-flex}.racm-root .table{display:table}.racm-root .table-row{display:table-row}.racm-root .grid{display:grid}.racm-root .hidden{display:none}.racm-root .h-1{height:.25rem}.racm-root .h-10{height:2.5rem}.racm-root .h-11{height:2.75rem}.racm-root .h-12{height:3rem}.racm-root .h-16{height:4rem}.racm-root .h-2{height:.5rem}.racm-root .h-20{height:5rem}.racm-root .h-28{height:7rem}.racm-root .h-3{height:.75rem}.racm-root .h-32{height:8rem}.racm-root .h-4{height:1rem}.racm-root .h-5{height:1.25rem}.racm-root .h-6{height:1.5rem}.racm-root .h-64{height:16rem}.racm-root .h-7{height:1.75rem}.racm-root .h-72{height:18rem}.racm-root .h-8{height:2rem}.racm-root .h-9{height:2.25rem}.racm-root .h-\\[10px\\]{height:10px}.racm-root .h-\\[150px\\]{height:150px}.racm-root .h-\\[36px\\]{height:36px}.racm-root .h-\\[40px\\]{height:40px}.racm-root .h-full{height:100%}.racm-root .max-h-40{max-height:10rem}.racm-root .max-h-60{max-height:15rem}.racm-root .max-h-\\[260px\\]{max-height:260px}.racm-root .max-h-\\[90vh\\]{max-height:90vh}.racm-root .min-h-\\[52px\\]{min-height:52px}.racm-root .w-1{width:.25rem}.racm-root .w-10{width:2.5rem}.racm-root .w-11{width:2.75rem}.racm-root .w-12{width:3rem}.racm-root .w-16{width:4rem}.racm-root .w-2{width:.5rem}.racm-root .w-20{width:5rem}.racm-root .w-24{width:6rem}.racm-root .w-3{width:.75rem}.racm-root .w-32{width:8rem}.racm-root .w-4{width:1rem}.racm-root .w-48{width:12rem}.racm-root .w-5{width:1.25rem}.racm-root .w-6{width:1.5rem}.racm-root .w-64{width:16rem}.racm-root .w-7{width:1.75rem}.racm-root .w-8{width:2rem}.racm-root .w-80{width:20rem}.racm-root .w-\\[260px\\]{width:260px}.racm-root .w-\\[28rem\\]{width:28rem}.racm-root .w-\\[36px\\]{width:36px}.racm-root .w-\\[42\\%\\]{width:42%}.racm-root .w-full{width:100%}.racm-root .w-max{width:-moz-max-content;width:max-content}.racm-root .min-w-0{min-width:0px}.racm-root .min-w-\\[100px\\]{min-width:100px}.racm-root .min-w-\\[150px\\]{min-width:150px}.racm-root .min-w-\\[220px\\]{min-width:220px}.racm-root .min-w-\\[40px\\]{min-width:40px}.racm-root .min-w-\\[78px\\]{min-width:78px}.racm-root .max-w-2xl{max-width:42rem}.racm-root .max-w-4xl{max-width:56rem}.racm-root .max-w-5xl{max-width:64rem}.racm-root .max-w-\\[200px\\]{max-width:200px}.racm-root .max-w-\\[300px\\]{max-width:300px}.racm-root .max-w-full{max-width:100%}.racm-root .max-w-lg{max-width:32rem}.racm-root .max-w-md{max-width:28rem}.racm-root .max-w-xs{max-width:20rem}.racm-root .flex-1{flex:1 1 0%}.racm-root .flex-shrink{flex-shrink:1}.racm-root .flex-shrink-0,.racm-root .shrink-0{flex-shrink:0}.racm-root .border-collapse{border-collapse:collapse}.racm-root .-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .translate-x-0{--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .translate-x-full{--tw-translate-x: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .scale-95{--tw-scale-x: .95;--tw-scale-y: .95;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.racm-root .animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes spin{to{transform:rotate(360deg)}}.racm-root .animate-spin{animation:spin 1s linear infinite}.racm-root .cursor-not-allowed{cursor:not-allowed}.racm-root .cursor-pointer{cursor:pointer}.racm-root .select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.racm-root .grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.racm-root .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.racm-root .grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.racm-root .flex-col{flex-direction:column}.racm-root .items-center{align-items:center}.racm-root .items-stretch{align-items:stretch}.racm-root .justify-end{justify-content:flex-end}.racm-root .justify-center{justify-content:center}.racm-root .justify-between{justify-content:space-between}.racm-root .gap-1{gap:.25rem}.racm-root .gap-1\\.5{gap:.375rem}.racm-root .gap-2{gap:.5rem}.racm-root .gap-2\\.5{gap:.625rem}.racm-root .gap-3{gap:.75rem}.racm-root .gap-4{gap:1rem}.racm-root .gap-6{gap:1.5rem}.racm-root .-space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(-.5rem * var(--tw-space-x-reverse));margin-left:calc(-.5rem * calc(1 - var(--tw-space-x-reverse)))}.racm-root .space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.racm-root .space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.racm-root .space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.25rem * var(--tw-space-y-reverse))}.racm-root .space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.racm-root .space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.racm-root .divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse))}.racm-root .divide-gray-100>:not([hidden])~:not([hidden]){--tw-divide-opacity: 1;border-color:rgb(243 244 246 / var(--tw-divide-opacity))}.racm-root .overflow-auto{overflow:auto}.racm-root .overflow-hidden{overflow:hidden}.racm-root .overflow-x-auto{overflow-x:auto}.racm-root .overflow-y-auto{overflow-y:auto}.racm-root .truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.racm-root .text-ellipsis{text-overflow:ellipsis}.racm-root .whitespace-nowrap{white-space:nowrap}.racm-root .break-words{overflow-wrap:break-word}.racm-root .rounded{border-radius:.25rem}.racm-root .rounded-full{border-radius:9999px}.racm-root .rounded-lg{border-radius:var(--radius)}.racm-root .rounded-md{border-radius:calc(var(--radius) - 2px)}.racm-root .rounded-sm{border-radius:calc(var(--radius) - 4px)}.racm-root .rounded-xl{border-radius:.75rem}.racm-root .border{border-width:1px}.racm-root .border-2{border-width:2px}.racm-root .border-4{border-width:4px}.racm-root .border-8{border-width:8px}.racm-root .border-b{border-bottom-width:1px}.racm-root .border-l{border-left-width:1px}.racm-root .border-r{border-right-width:1px}.racm-root .border-t{border-top-width:1px}.racm-root .border-t-2{border-top-width:2px}.racm-root .border-dashed{border-style:dashed}.racm-root .border-blue-300{--tw-border-opacity: 1;border-color:rgb(147 197 253 / var(--tw-border-opacity))}.racm-root .border-blue-500{--tw-border-opacity: 1;border-color:rgb(59 130 246 / var(--tw-border-opacity))}.racm-root .border-gray-100{--tw-border-opacity: 1;border-color:rgb(243 244 246 / var(--tw-border-opacity))}.racm-root .border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.racm-root .border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity))}.racm-root .border-green-300{--tw-border-opacity: 1;border-color:rgb(134 239 172 / var(--tw-border-opacity))}.racm-root .border-green-600{--tw-border-opacity: 1;border-color:rgb(22 163 74 / var(--tw-border-opacity))}.racm-root .border-primary,.racm-root .border-primary-500{border-color:var(--primary-500)}.racm-root .border-purple-300{--tw-border-opacity: 1;border-color:rgb(216 180 254 / var(--tw-border-opacity))}.racm-root .border-red-300{--tw-border-opacity: 1;border-color:rgb(252 165 165 / var(--tw-border-opacity))}.racm-root .border-red-500{--tw-border-opacity: 1;border-color:rgb(239 68 68 / var(--tw-border-opacity))}.racm-root .border-red-600{--tw-border-opacity: 1;border-color:rgb(220 38 38 / var(--tw-border-opacity))}.racm-root .border-teal-300{--tw-border-opacity: 1;border-color:rgb(94 234 212 / var(--tw-border-opacity))}.racm-root .border-white{--tw-border-opacity: 1;border-color:rgb(255 255 255 / var(--tw-border-opacity))}.racm-root .border-white\\/30{border-color:#ffffff4d}.racm-root .border-yellow-300{--tw-border-opacity: 1;border-color:rgb(253 224 71 / var(--tw-border-opacity))}.racm-root .border-t-gray-200{--tw-border-opacity: 1;border-top-color:rgb(229 231 235 / var(--tw-border-opacity))}.racm-root .border-t-white{--tw-border-opacity: 1;border-top-color:rgb(255 255 255 / var(--tw-border-opacity))}.racm-root .\\!bg-transparent{background-color:transparent!important}.racm-root .bg-black\\/50{background-color:#00000080}.racm-root .bg-black\\/70{background-color:#000000b3}.racm-root .bg-blue-100{--tw-bg-opacity: 1;background-color:rgb(219 234 254 / var(--tw-bg-opacity))}.racm-root .bg-blue-50{--tw-bg-opacity: 1;background-color:rgb(239 246 255 / var(--tw-bg-opacity))}.racm-root .bg-blue-500\\/10{background-color:#3b82f61a}.racm-root .bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.racm-root .bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.racm-root .bg-gray-300{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity))}.racm-root .bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.racm-root .bg-gray-500{--tw-bg-opacity: 1;background-color:rgb(107 114 128 / var(--tw-bg-opacity))}.racm-root .bg-gray-900{--tw-bg-opacity: 1;background-color:rgb(17 24 39 / var(--tw-bg-opacity))}.racm-root .bg-green-100{--tw-bg-opacity: 1;background-color:rgb(220 252 231 / var(--tw-bg-opacity))}.racm-root .bg-green-600{--tw-bg-opacity: 1;background-color:rgb(22 163 74 / var(--tw-bg-opacity))}.racm-root .bg-primary{background-color:var(--primary-500)}.racm-root .bg-purple-100{--tw-bg-opacity: 1;background-color:rgb(243 232 255 / var(--tw-bg-opacity))}.racm-root .bg-red-100{--tw-bg-opacity: 1;background-color:rgb(254 226 226 / var(--tw-bg-opacity))}.racm-root .bg-red-500{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.racm-root .bg-red-500\\/95{background-color:#ef4444f2}.racm-root .bg-red-600{--tw-bg-opacity: 1;background-color:rgb(220 38 38 / var(--tw-bg-opacity))}.racm-root .bg-teal-100{--tw-bg-opacity: 1;background-color:rgb(204 251 241 / var(--tw-bg-opacity))}.racm-root .bg-transparent{background-color:transparent}.racm-root .bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.racm-root .bg-white\\/90{background-color:#ffffffe6}.racm-root .bg-yellow-100{--tw-bg-opacity: 1;background-color:rgb(254 249 195 / var(--tw-bg-opacity))}.racm-root .bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}.racm-root .to-transparent{--tw-gradient-to: transparent var(--tw-gradient-to-position)}.racm-root .object-contain{-o-object-fit:contain;object-fit:contain}.racm-root .object-cover{-o-object-fit:cover;object-fit:cover}.racm-root .p-1{padding:.25rem}.racm-root .p-2{padding:.5rem}.racm-root .p-4{padding:1rem}.racm-root .p-5{padding:1.25rem}.racm-root .px-2{padding-left:.5rem;padding-right:.5rem}.racm-root .px-3{padding-left:.75rem;padding-right:.75rem}.racm-root .px-4{padding-left:1rem;padding-right:1rem}.racm-root .px-5{padding-left:1.25rem;padding-right:1.25rem}.racm-root .px-6{padding-left:1.5rem;padding-right:1.5rem}.racm-root .px-8{padding-left:2rem;padding-right:2rem}.racm-root .py-1{padding-top:.25rem;padding-bottom:.25rem}.racm-root .py-2{padding-top:.5rem;padding-bottom:.5rem}.racm-root .py-3{padding-top:.75rem;padding-bottom:.75rem}.racm-root .py-4{padding-top:1rem;padding-bottom:1rem}.racm-root .py-6{padding-top:1.5rem;padding-bottom:1.5rem}.racm-root .pl-9{padding-left:2.25rem}.racm-root .pr-10{padding-right:2.5rem}.racm-root .pr-2{padding-right:.5rem}.racm-root .pr-3{padding-right:.75rem}.racm-root .text-left{text-align:left}.racm-root .text-center{text-align:center}.racm-root .text-base{font-size:1rem;line-height:1.5rem}.racm-root .text-lg{font-size:1.125rem;line-height:1.75rem}.racm-root .text-sm{font-size:.875rem;line-height:1.25rem}.racm-root .text-xl{font-size:1.25rem;line-height:1.75rem}.racm-root .text-xs{font-size:.75rem;line-height:1rem}.racm-root .font-bold{font-weight:700}.racm-root .font-medium{font-weight:500}.racm-root .font-semibold{font-weight:600}.racm-root .uppercase{text-transform:uppercase}.racm-root .italic{font-style:italic}.racm-root .leading-none{line-height:1}.racm-root .leading-snug{line-height:1.375}.racm-root .leading-tight{line-height:1.25}.racm-root .tracking-wide{letter-spacing:.025em}.racm-root .tracking-wider{letter-spacing:.05em}.racm-root .text-black{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.racm-root .text-blue-600{--tw-text-opacity: 1;color:rgb(37 99 235 / var(--tw-text-opacity))}.racm-root .text-blue-700{--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity))}.racm-root .text-blue-800{--tw-text-opacity: 1;color:rgb(30 64 175 / var(--tw-text-opacity))}.racm-root .text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.racm-root .text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.racm-root .text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.racm-root .text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.racm-root .text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity))}.racm-root .text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.racm-root .text-green-600{--tw-text-opacity: 1;color:rgb(22 163 74 / var(--tw-text-opacity))}.racm-root .text-green-700{--tw-text-opacity: 1;color:rgb(21 128 61 / var(--tw-text-opacity))}.racm-root .text-green-800{--tw-text-opacity: 1;color:rgb(22 101 52 / var(--tw-text-opacity))}.racm-root .text-primary{color:var(--primary-500)}.racm-root .text-purple-700{--tw-text-opacity: 1;color:rgb(126 34 206 / var(--tw-text-opacity))}.racm-root .text-purple-800{--tw-text-opacity: 1;color:rgb(107 33 168 / var(--tw-text-opacity))}.racm-root .text-red-500{--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity))}.racm-root .text-red-600{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity))}.racm-root .text-red-700{--tw-text-opacity: 1;color:rgb(185 28 28 / var(--tw-text-opacity))}.racm-root .text-red-800{--tw-text-opacity: 1;color:rgb(153 27 27 / var(--tw-text-opacity))}.racm-root .text-teal-700{--tw-text-opacity: 1;color:rgb(15 118 110 / var(--tw-text-opacity))}.racm-root .text-teal-800{--tw-text-opacity: 1;color:rgb(17 94 89 / var(--tw-text-opacity))}.racm-root .text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.racm-root .text-yellow-700{--tw-text-opacity: 1;color:rgb(161 98 7 / var(--tw-text-opacity))}.racm-root .text-yellow-800{--tw-text-opacity: 1;color:rgb(133 77 14 / var(--tw-text-opacity))}.racm-root .underline{text-decoration-line:underline}.racm-root .placeholder-gray-400::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.racm-root .placeholder-gray-400::placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.racm-root .placeholder-gray-500::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(107 114 128 / var(--tw-placeholder-opacity))}.racm-root .placeholder-gray-500::placeholder{--tw-placeholder-opacity: 1;color:rgb(107 114 128 / var(--tw-placeholder-opacity))}.racm-root .opacity-0{opacity:0}.racm-root .opacity-100{opacity:1}.racm-root .opacity-50{opacity:.5}.racm-root .opacity-60{opacity:.6}.racm-root .opacity-75{opacity:.75}.racm-root .opacity-90{opacity:.9}.racm-root .shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root .shadow-2xl{--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / .25);--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root .shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root .shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root .shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root .shadow-xl{--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root .outline-none{outline:2px solid transparent;outline-offset:2px}.racm-root .outline{outline-style:solid}.racm-root .ring-0{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.racm-root .ring-blue-100{--tw-ring-opacity: 1;--tw-ring-color: rgb(219 234 254 / var(--tw-ring-opacity))}.racm-root .filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.racm-root .backdrop-blur-sm{--tw-backdrop-blur: blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.racm-root .transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.racm-root .transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.racm-root .transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.racm-root .transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.racm-root .transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.racm-root .duration-200{transition-duration:.2s}.racm-root .duration-300{transition-duration:.3s}.racm-root .ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.racm-root .primary-bg{background-color:var(--primary-500)}.racm-root .primary-bg-light{background-color:var(--primary-100)}.racm-root .primary-bg-dark{background-color:var(--primary-700)}.racm-root .primary-text{color:var(--primary-600)}.racm-root .primary-border{border-color:var(--primary-300)}.racm-root .primary-hover:hover{background-color:var(--primary-600)}.racm-root{--foreground-rgb: 0, 0, 0;--background-start-rgb: 214, 219, 220;--background-end-rgb: 255, 255, 255}@media (prefers-color-scheme: dark){.racm-root{--foreground-rgb: 255, 255, 255;--background-start-rgb: 0, 0, 0;--background-end-rgb: 0, 0, 0}}.racm-root{height:100%}.racm-root{--scrollbar-thumb: #d1d5db;--scrollbar-thumb-hover: #9ca3af}.racm-root .dark{--scrollbar-thumb: #4b5563;--scrollbar-thumb-hover: #6b7280}.racm-root *{scrollbar-width:thin;scrollbar-color:var(--scrollbar-thumb) transparent}.racm-root *::-webkit-scrollbar{width:6px;height:6px}.racm-root *::-webkit-scrollbar-track{background:transparent}.racm-root *::-webkit-scrollbar-thumb{background-color:var(--scrollbar-thumb);border-radius:3px}.racm-root *::-webkit-scrollbar-thumb:hover{background-color:var(--scrollbar-thumb-hover)}.racm-root h1{font-size:1.5rem;line-height:2rem;font-weight:700;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.racm-root :is(.dark h1){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.racm-root p{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.racm-root :is(.dark p){--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.racm-root .table-search-field{position:relative;width:100%}@media (min-width: 640px){.racm-root .table-search-field{min-width:300px!important}}.racm-root .table-search-field .search-icon{position:absolute;left:.75rem;top:50%;height:1rem;width:1rem;--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.racm-root :is(.dark .table-search-field .search-icon){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.racm-root .table-search-field input{height:36px;width:100%;border-radius:calc(var(--radius) - 2px);border-width:1px;--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity));padding:.75rem 1rem .75rem 2.25rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.racm-root .table-search-field input::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(107 114 128 / var(--tw-placeholder-opacity))}.racm-root .table-search-field input::placeholder{--tw-placeholder-opacity: 1;color:rgb(107 114 128 / var(--tw-placeholder-opacity))}.racm-root .table-search-field input:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-opacity: 1;--tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity))}.racm-root .table-search-field input:disabled{opacity:.5}.racm-root :is(.dark .table-search-field input){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.racm-root :is(.dark .table-search-field input)::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.racm-root :is(.dark .table-search-field input)::placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.racm-root :is(.dark .table-search-field input){--tw-ring-opacity: 1;--tw-ring-color: rgb(191 219 254 / var(--tw-ring-opacity))}.racm-root .filter-button-wrapper{position:relative;width:100%}@media (min-width: 640px){.racm-root .filter-button-wrapper{width:auto!important}}.racm-root .filter-button-wrapper .red-dot{position:absolute;top:.25rem;right:.25rem;height:.5rem;width:.5rem;border-radius:9999px;--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.racm-root .table-container{overflow:hidden;border-radius:var(--radius);border-width:1px;--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root :is(.dark .table-container){--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.racm-root .table-container table{min-width:100%}.racm-root .table-container table>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse));--tw-divide-opacity: 1;border-color:rgb(229 231 235 / var(--tw-divide-opacity))}.racm-root :is(.dark .table-container table)>:not([hidden])~:not([hidden]){--tw-divide-opacity: 1;border-color:rgb(55 65 81 / var(--tw-divide-opacity))}.racm-root .table-container thead{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.racm-root :is(.dark .table-container thead){background-color:#37415199}.racm-root .table-container tbody>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse));--tw-divide-opacity: 1;border-color:rgb(229 231 235 / var(--tw-divide-opacity))}.racm-root .table-container tbody{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.racm-root :is(.dark .table-container tbody)>:not([hidden])~:not([hidden]){--tw-divide-opacity: 1;border-color:rgb(55 65 81 / var(--tw-divide-opacity))}.racm-root :is(.dark .table-container tbody){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.racm-root .table-container .table-head-data{min-width:-moz-max-content;min-width:max-content;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:1rem 1.5rem;text-align:left;font-size:.75rem;line-height:1rem;font-weight:500;text-transform:uppercase;letter-spacing:.05em;--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.racm-root :is(.dark .table-container .table-head-data){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.racm-root .table-container .no-data-message{padding-top:2.5rem;padding-bottom:2.5rem;text-align:center;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.racm-root :is(.dark .table-container .no-data-message){--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.racm-root .table-container .table-row{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.racm-root .table-container .table-row:hover{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.racm-root :is(.dark .table-container .table-row:hover){background-color:#1e40af1a}.racm-root .table-container .table-data{min-width:-moz-max-content;min-width:max-content;padding:1rem 1.5rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.racm-root :is(.dark .table-container .table-data){--tw-text-opacity: 1;color:rgb(243 244 246 / var(--tw-text-opacity))}.racm-root .table-container .pagination-wrapper{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:.75rem;border-top-width:1px;--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity));padding:.75rem 1.5rem}.racm-root :is(.dark .table-container .pagination-wrapper){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity));background-color:#37415199}.racm-root .table-container .pagination-wrapper span{font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.racm-root :is(.dark .table-container .pagination-wrapper span){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.racm-root .table-container .pagination-wrapper .rows-number-select{border-radius:calc(var(--radius) - 2px);border-width:1px;--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:.25rem .5rem;font-size:.875rem;line-height:1.25rem}.racm-root .table-container .pagination-wrapper .rows-number-select:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-opacity: 1;--tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity))}.racm-root :is(.dark .table-container .pagination-wrapper .rows-number-select){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.racm-root .table-container .pagination-wrapper .arrow-icons{border-radius:calc(var(--radius) - 2px);padding:.5rem;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity));transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.racm-root .table-container .pagination-wrapper .arrow-icons:hover{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.racm-root .table-container .pagination-wrapper .arrow-icons:disabled{opacity:.5}.racm-root :is(.dark .table-container .pagination-wrapper .arrow-icons){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.racm-root :is(.dark .table-container .pagination-wrapper .arrow-icons:hover){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity))}.racm-root .no-spinner::-webkit-outer-spin-button,.racm-root .no-spinner::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.racm-root .no-spinner{-moz-appearance:textfield}.racm-root .tox.tox-tinymce .tox-edit-area:before{border:0!important;box-shadow:none!important}.racm-root .hover\\:-translate-y-0:hover{--tw-translate-y: -0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .hover\\:-translate-y-0\\.5:hover{--tw-translate-y: -.125rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .hover\\:bg-blue-50:hover{--tw-bg-opacity: 1;background-color:rgb(239 246 255 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-gray-100:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-gray-200:hover{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-gray-300:hover{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-green-50:hover{--tw-bg-opacity: 1;background-color:rgb(240 253 244 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-green-700:hover{--tw-bg-opacity: 1;background-color:rgb(21 128 61 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-primary-50:hover{background-color:var(--primary-50)}.racm-root .hover\\:bg-primary-600:hover{background-color:var(--primary-600)}.racm-root .hover\\:bg-red-50:hover{--tw-bg-opacity: 1;background-color:rgb(254 242 242 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-red-600:hover{--tw-bg-opacity: 1;background-color:rgb(220 38 38 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-red-700:hover{--tw-bg-opacity: 1;background-color:rgb(185 28 28 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-white:hover{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.racm-root .hover\\:bg-white\\/20:hover{background-color:#fff3}.racm-root .hover\\:text-gray-600:hover{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.racm-root .hover\\:shadow-md:hover{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.racm-root .focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.racm-root .focus\\:ring-1:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.racm-root .focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.racm-root .focus\\:ring-blue-200:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(191 219 254 / var(--tw-ring-opacity))}.racm-root .focus\\:ring-blue-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity))}.racm-root .focus\\:ring-blue-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity))}.racm-root .focus\\:ring-gray-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity))}.racm-root .focus\\:ring-green-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(34 197 94 / var(--tw-ring-opacity))}.racm-root .focus\\:ring-primary-500:focus{--tw-ring-color: var(--primary-500)}.racm-root .focus\\:ring-red-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(239 68 68 / var(--tw-ring-opacity))}.racm-root .focus\\:ring-offset-2:focus{--tw-ring-offset-width: 2px}.racm-root .focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.racm-root .focus-visible\\:ring-2:focus-visible{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.racm-root .focus-visible\\:ring-blue-400:focus-visible{--tw-ring-opacity: 1;--tw-ring-color: rgb(96 165 250 / var(--tw-ring-opacity))}.racm-root .focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width: 2px}.racm-root .disabled\\:pointer-events-none:disabled{pointer-events:none}.racm-root .disabled\\:opacity-50:disabled{opacity:.5}.racm-root .group:hover .group-hover\\:opacity-100{opacity:1}.racm-root .peer:checked~.peer-checked\\:translate-x-5{--tw-translate-x: 1.25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.racm-root .peer:checked~.peer-checked\\:bg-primary-600{background-color:var(--primary-600)}.racm-root .peer:focus~.peer-focus\\:outline-none{outline:2px solid transparent;outline-offset:2px}.racm-root .peer:disabled~.peer-disabled\\:cursor-not-allowed{cursor:not-allowed}.racm-root .peer:disabled~.peer-disabled\\:opacity-50{opacity:.5}.racm-root :is(.dark .dark\\:divide-gray-800)>:not([hidden])~:not([hidden]){--tw-divide-opacity: 1;border-color:rgb(31 41 55 / var(--tw-divide-opacity))}.racm-root :is(.dark .dark\\:border-blue-700){--tw-border-opacity: 1;border-color:rgb(29 78 216 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-gray-600){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-gray-700){--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-gray-700\\/60){border-color:#37415199}.racm-root :is(.dark .dark\\:border-gray-800){--tw-border-opacity: 1;border-color:rgb(31 41 55 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-green-700){--tw-border-opacity: 1;border-color:rgb(21 128 61 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-purple-700){--tw-border-opacity: 1;border-color:rgb(126 34 206 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-red-700){--tw-border-opacity: 1;border-color:rgb(185 28 28 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-teal-700){--tw-border-opacity: 1;border-color:rgb(15 118 110 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:border-yellow-700){--tw-border-opacity: 1;border-color:rgb(161 98 7 / var(--tw-border-opacity))}.racm-root :is(.dark .dark\\:bg-black){--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:bg-black\\/80){background-color:#000c}.racm-root :is(.dark .dark\\:bg-blue-900\\/20){background-color:#1e3a8a33}.racm-root :is(.dark .dark\\:bg-blue-900\\/30){background-color:#1e3a8a4d}.racm-root :is(.dark .dark\\:bg-gray-600){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:bg-gray-700){--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:bg-gray-800){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:bg-gray-800\\/80){background-color:#1f2937cc}.racm-root :is(.dark .dark\\:bg-gray-900){--tw-bg-opacity: 1;background-color:rgb(17 24 39 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:bg-gray-900\\/30){background-color:#1118274d}.racm-root :is(.dark .dark\\:bg-green-900\\/30){background-color:#14532d4d}.racm-root :is(.dark .dark\\:bg-purple-900\\/30){background-color:#581c874d}.racm-root :is(.dark .dark\\:bg-red-900\\/30){background-color:#7f1d1d4d}.racm-root :is(.dark .dark\\:bg-teal-900\\/30){background-color:#134e4a4d}.racm-root :is(.dark .dark\\:bg-yellow-900\\/30){background-color:#713f124d}.racm-root :is(.dark .dark\\:text-blue-300){--tw-text-opacity: 1;color:rgb(147 197 253 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-blue-400){--tw-text-opacity: 1;color:rgb(96 165 250 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-gray-100){--tw-text-opacity: 1;color:rgb(243 244 246 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-gray-200){--tw-text-opacity: 1;color:rgb(229 231 235 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-gray-300){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-gray-400){--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-gray-500){--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-green-300){--tw-text-opacity: 1;color:rgb(134 239 172 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-purple-300){--tw-text-opacity: 1;color:rgb(216 180 254 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-red-300){--tw-text-opacity: 1;color:rgb(252 165 165 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-red-500){--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-teal-300){--tw-text-opacity: 1;color:rgb(94 234 212 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-white){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:text-yellow-300){--tw-text-opacity: 1;color:rgb(253 224 71 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:placeholder-gray-400)::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.racm-root :is(.dark .dark\\:placeholder-gray-400)::placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.racm-root :is(.dark .dark\\:hover\\:bg-gray-600:hover){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:hover\\:bg-gray-700:hover){--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:hover\\:bg-gray-800:hover){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.racm-root :is(.dark .dark\\:hover\\:text-gray-200:hover){--tw-text-opacity: 1;color:rgb(229 231 235 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:hover\\:text-gray-300:hover){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.racm-root :is(.dark .dark\\:focus\\:ring-blue-200:focus){--tw-ring-opacity: 1;--tw-ring-color: rgb(191 219 254 / var(--tw-ring-opacity))}.racm-root :is(.dark .dark\\:focus\\:ring-blue-400:focus){--tw-ring-opacity: 1;--tw-ring-color: rgb(96 165 250 / var(--tw-ring-opacity))}.racm-root :is(.dark .dark\\:focus\\:ring-gray-500:focus){--tw-ring-opacity: 1;--tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity))}.racm-root :is(.dark .dark\\:focus\\:ring-gray-600:focus){--tw-ring-opacity: 1;--tw-ring-color: rgb(75 85 99 / var(--tw-ring-opacity))}.racm-root :is(.dark .dark\\:focus\\:ring-offset-gray-800:focus){--tw-ring-offset-color: #1f2937}@media (min-width: 640px){.racm-root .sm\\:\\!w-auto{width:auto!important}.racm-root .sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.racm-root .sm\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.racm-root .sm\\:\\!flex-row{flex-direction:row!important}.racm-root .sm\\:\\!flex-wrap{flex-wrap:wrap!important}.racm-root .sm\\:\\!items-center{align-items:center!important}.racm-root .sm\\:\\!px-6{padding-left:1.5rem!important;padding-right:1.5rem!important}.racm-root .sm\\:opacity-0{opacity:0}.racm-root .group:hover .sm\\:group-hover\\:opacity-100{opacity:1}}@media (min-width: 1024px){.racm-root .lg\\:\\!w-auto{width:auto!important}.racm-root .lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.racm-root .lg\\:\\!flex-row{flex-direction:row!important}.racm-root .lg\\:\\!items-end{align-items:flex-end!important}.racm-root .lg\\:\\!justify-between{justify-content:space-between!important}}.racm-root .\\[\\&\\>svg\\]\\:h-3\\.5>svg{height:.875rem}.racm-root .\\[\\&\\>svg\\]\\:h-4>svg{height:1rem}.racm-root .\\[\\&\\>svg\\]\\:w-3\\.5>svg{width:.875rem}.racm-root .\\[\\&\\>svg\\]\\:w-4>svg{width:1rem}', ir = (a, o = "DD MMM YYYY") => {
  if (!a) return "N/A";
  const e = new Date(a);
  if (isNaN(e.getTime())) return "Invalid Date";
  const r = (c) => String(c).padStart(2, "0"), n = {
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
  return o.replace(
    /YYYY|YY|MMMM|MMM|MM|M|DD|D|dddd|ddd|HH|hh|mm|ss|A/g,
    (c) => String(n[c])
  );
}, gt = (a, o, e = []) => {
  if (!(o != null && o.trim())) return a;
  const r = o.toLowerCase(), n = (c) => c == null ? [] : typeof c == "object" ? Object.values(c).flatMap(n) : [String(c)];
  return a.filter((c) => {
    let i = [];
    return e.length > 0 ? e.forEach((s) => {
      c[s] !== void 0 && i.push(...n(c[s]));
    }) : i = n(c), i.some(
      (s) => s.toLowerCase().includes(r)
    );
  });
}, x = (...a) => a.filter(Boolean).join(" "), f = {
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
    variant: o = "contained",
    color: e = "default",
    size: r = "default",
    fullWidth: n = !1,
    children: c,
    ...i
  }, s) => {
    var w;
    const b = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", p = {
      sm: "h-8 px-3 rounded-md text-sm",
      md: "h-9 px-4 rounded-md text-sm",
      lg: "h-11 px-6 rounded-md text-base",
      xl: "h-12 px-8 rounded-lg text-lg",
      default: "h-9 px-4 rounded-md text-sm"
    }, m = {
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
    }, u = ((w = m[e]) == null ? void 0 : w[o]) || m.default.contained, l = p[r] || p.default, g = x(
      f.button.root,
      b,
      u,
      l,
      n ? "w-full" : "",
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
  required: o = !1,
  infoText: e = ""
}) {
  return /* @__PURE__ */ t(Y, { children: /* @__PURE__ */ h(
    "label",
    {
      className: x(
        f.field.label,
        "flex text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
      ),
      children: [
        a,
        o && /* @__PURE__ */ t("span", { className: "ml-1", children: "*" }),
        e && /* @__PURE__ */ h("span", { className: "ml-2 relative group inline-flex items-center cursor-pointer", children: [
          /* @__PURE__ */ t(rt, { className: "w-4 h-4 text-gray-500 dark:text-gray-400" }),
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
const Te = [
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
], wt = ({
  options: a = [],
  value: o = "",
  defaultValue: e = "",
  onChange: r,
  placeholder: n = "Select option",
  className: c = "",
  disabled: i = !1,
  search: s = !1,
  label: b = "",
  required: p = !1,
  name: m = "",
  parentClass: u = "",
  multiple: l = !1,
  dropdownMaxHeight: g = "",
  formData: w = {},
  countriesList: y = !1,
  dependencyKey: S = "",
  errorMessage: k = ""
}) => {
  var P;
  const [_, A] = D(!1), [F, I] = D(""), [E, T] = D(!0), v = de(null), R = de(null), [M, z] = D(
    []
  ), G = o || o === !1 ? o : e, K = (C) => C == null || C === "" ? "" : String(typeof C == "boolean" ? C : C ?? ""), te = () => Te.map((W) => ({
    value: W.code,
    label: W.label,
    code: W.code
  }));
  V(
    () => {
      (async () => {
        if (y == !0)
          z(te());
        else if (typeof a == "function") {
          const W = await a(w);
          z(W || []);
        } else
          z(a || []);
      })();
    },
    S ? [a, w == null ? void 0 : w[S]] : [a]
  );
  const ae = l ? (G || []).map(K) : K(G), j = M.filter(
    (C) => C.label.toLowerCase().includes(F.toLowerCase())
  ), se = (C) => {
    const W = K(C);
    return l ? ae.includes(W) : W === ae;
  };
  V(() => {
    const C = (W) => {
      v.current && !v.current.contains(W.target) && (A(!1), I(""));
    };
    return document.addEventListener("mousedown", C), () => document.removeEventListener("mousedown", C);
  }, []), V(() => {
    if (_ && v.current) {
      const C = v.current.getBoundingClientRect(), U = window.innerHeight - C.bottom;
      T(U < 200);
    }
  }, [_]), V(() => {
    _ && R.current && R.current.focus();
  }, [_]);
  const X = (C) => {
    let W = C;
    if (C === "true" ? W = !0 : C === "false" && (W = !1), l) {
      const U = ae.includes(
        K(C)
      );
      let pe;
      U ? pe = (Array.isArray(o) ? o : []).filter(
        (ve) => K(ve) !== K(C)
      ) : pe = [...Array.isArray(o) ? o : [], W], r == null || r(pe);
    } else
      r == null || r(W), A(!1);
    I("");
  }, re = l ? M.filter((C) => se(C.value)).map((C) => C.label).join(", ") : (P = M.find((C) => se(C.value))) == null ? void 0 : P.label;
  return V(() => {
    (G || G === !1) && setTimeout(() => {
      r == null || r(G);
    }, 100);
  }, []), /* @__PURE__ */ h(
    "div",
    {
      className: x(
        f.field.wrapper,
        u || "col-span-12"
      ),
      children: [
        /* @__PURE__ */ t(we, { label: b, required: p }),
        /* @__PURE__ */ h(
          "div",
          {
            className: x(f.field.input, "relative", c),
            ref: v,
            children: [
              /* @__PURE__ */ t(
                "select",
                {
                  name: "hidden_select_for_validation",
                  value: re || "",
                  required: p,
                  multiple: l,
                  id: `field-${m}`,
                  className: "absolute opacity-0 right-1/2 top-[80%] -translate-x-1/2 -translate-y-1/2 pointer-events-none h-[10px]",
                  onChange: () => {
                  },
                  children: /* @__PURE__ */ t("option", { hidden: !0, value: re, children: re })
                }
              ),
              /* @__PURE__ */ h(
                "button",
                {
                  type: "button",
                  onClick: () => !i && A(!_),
                  disabled: i,
                  className: `w-full h-10 px-3 border border-gray-300 dark:border-gray-600 rounded-md text-left text-sm flex items-center justify-between 
          ${re ? "dark:text-white" : "text-gray-500 dark:text-gray-400"} 
          ${i ? "opacity-50 cursor-not-allowed" : "dark:bg-gray-700"}
          ${k ? "border-red-500" : ""}`,
                  children: [
                    /* @__PURE__ */ t("span", { className: "truncate", children: re || n }),
                    /* @__PURE__ */ t(
                      zr,
                      {
                        className: `w-4 h-4 transition-transform ${_ ? "rotate-180" : ""}`
                      }
                    )
                  ]
                }
              ),
              _ && /* @__PURE__ */ h(
                "div",
                {
                  className: `absolute z-50 w-full border rounded-md bg-white dark:bg-gray-700 shadow-lg 
            ${E ? "bottom-full mb-1" : "top-full mt-1"}`,
                  children: [
                    s && /* @__PURE__ */ t("div", { className: "p-2 border-b border-gray-200 dark:border-gray-600", children: /* @__PURE__ */ h("div", { className: "relative", children: [
                      /* @__PURE__ */ t(gr, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }),
                      /* @__PURE__ */ t(
                        "input",
                        {
                          ref: R,
                          type: "text",
                          value: F,
                          onChange: (C) => I(C.target.value),
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
                        children: j.length > 0 ? j.map((C) => /* @__PURE__ */ h(
                          "button",
                          {
                            type: "button",
                            onClick: () => X(String(C.value)),
                            className: `w-full px-3 py-2 text-left text-sm flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 
                    ${se(C.value) ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300" : ""}`,
                            children: [
                              /* @__PURE__ */ h("div", { className: "flex gap-2 items-center", children: [
                                y && (C == null ? void 0 : C.code) && /* @__PURE__ */ t(
                                  "img",
                                  {
                                    src: `https://flagcdn.com/w20/${C == null ? void 0 : C.code.toLowerCase()}.png`,
                                    alt: C.code,
                                    className: "w-5 h-3 object-cover"
                                  }
                                ),
                                /* @__PURE__ */ t("span", { children: C.label })
                              ] }),
                              l && se(C.value) && /* @__PURE__ */ t(tt, { className: "w-4 h-4" })
                            ]
                          },
                          String(C.value)
                        )) : /* @__PURE__ */ t("div", { className: "px-3 py-2 text-sm text-gray-500 dark:text-gray-400", children: "No options found" })
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        k && /* @__PURE__ */ t(
          "span",
          {
            className: x(
              f.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: k
          }
        )
      ]
    },
    m
  );
}, Ir = tr.forwardRef(
  ({
    label: a,
    required: o,
    parentClass: e = "col-span-12",
    className: r = "",
    value: n = !1,
    onChange: c,
    disabled: i = !1,
    errorMessage: s = "",
    name: b,
    ...p
  }, m) => /* @__PURE__ */ h(
    "div",
    {
      className: x(
        f.field.wrapper,
        "flex justify-between",
        e
      ),
      children: [
        a && /* @__PURE__ */ t(we, { label: a, required: o }),
        /* @__PURE__ */ h("label", { className: "relative inline-flex items-center cursor-pointer", children: [
          /* @__PURE__ */ t(
            "input",
            {
              type: "checkbox",
              ref: m,
              id: `field-${b}`,
              className: x(f.field.input, "sr-only peer"),
              checked: n,
              onChange: (u) => c == null ? void 0 : c(u.target.checked),
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
              f.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: s
          }
        )
      ]
    }
  )
);
Ir.displayName = "Switch";
function ft({
  label: a = "",
  value: o = "",
  name: e = "",
  parentClass: r = "",
  onChange: n,
  disabled: c = !1,
  required: i = !1,
  placeholder: s = "Phone number",
  search: b = !1,
  countriesList: p = !1,
  defaultCountry: m = "",
  errorMessage: u = ""
}) {
  const l = (R) => Te.find((M) => M.code == R), [g, w] = D(
    l(m) || Te[0]
  ), [y, S] = D(""), [k, _] = D(!1), [A, F] = D(""), I = de(null);
  V(() => {
    if (typeof o == "string" && o.startsWith("+")) {
      const R = Te.filter((M) => o.startsWith("+" + M.phone)).sort((M, z) => z.phone.length - M.phone.length)[0];
      if (R) {
        w(R), S(o.replace("+" + R.phone, ""));
        return;
      }
    }
    S(o || "");
  }, [o]);
  const E = (R) => {
    const M = R.target.value.replace(/\D/g, "");
    S(M), g && n && n("+" + g.phone + M);
  }, T = (R) => {
    w(R), n && n("+" + R.phone + y), _(!1), F("");
  };
  V(() => {
    const R = (M) => {
      I.current && !I.current.contains(M.target) && _(!1);
    };
    return document.addEventListener("mousedown", R), () => document.removeEventListener("mousedown", R);
  }, []);
  const v = Te.filter(
    (R) => R.label.toLowerCase().includes(A.toLowerCase()) || R.phone.includes(A)
  );
  if (!p) {
    const R = (M) => {
      const z = M.target.value.replace(/[^+\d]/g, ""), G = z.startsWith("+") ? "+" + z.replace(/[+]/g, "").slice(0) : z;
      n == null || n(G);
    };
    return /* @__PURE__ */ t(Y, { children: /* @__PURE__ */ h(
      "div",
      {
        className: x(
          f.field.wrapper,
          r || "col-span-12"
        ),
        children: [
          /* @__PURE__ */ t(we, { label: a, required: i }),
          /* @__PURE__ */ t(
            "input",
            {
              type: "text",
              value: o,
              onChange: R,
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
  return /* @__PURE__ */ t(Y, { children: /* @__PURE__ */ h(
    "div",
    {
      className: x(
        f.field.wrapper,
        r || "col-span-12"
      ),
      children: [
        /* @__PURE__ */ t(we, { label: a, required: i }),
        /* @__PURE__ */ h("div", { className: "relative ", ref: I, children: [
          /* @__PURE__ */ h(
            "div",
            {
              className: `h-[40px] flex items-center border rounded-md px-2 bg-white dark:bg-gray-700 transition-all
  ${k ? "ring-0.5 ring-blue-100 border-blue-300" : "border-gray-300 dark:border-gray-600"}
  ${c ? "opacity-60 cursor-not-allowed" : ""}
    ${u ? "border-red-500" : ""}`,
              children: [
                /* @__PURE__ */ h(
                  "button",
                  {
                    type: "button",
                    disabled: c,
                    onClick: () => _(!k),
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
                      /* @__PURE__ */ t(zr, { className: "w-3 h-3 text-gray-500" })
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
                    value: y,
                    onChange: E,
                    required: i,
                    id: `field-${e}`,
                    disabled: c || !g,
                    placeholder: g ? s : "Select a country",
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
                    value: g && y ? "+" + g.phone + y : "",
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
          k && /* @__PURE__ */ h("div", { className: "absolute top-full left-0 w-full mt-1 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 shadow-lg z-50 max-h-60 overflow-y-auto", children: [
            b && /* @__PURE__ */ t("div", { className: "p-2 border-b border-gray-200 dark:border-gray-700", children: /* @__PURE__ */ h("div", { className: "relative", children: [
              /* @__PURE__ */ t(gr, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" }),
              /* @__PURE__ */ t(
                "input",
                {
                  type: "text",
                  value: A,
                  onChange: (R) => F(R.target.value),
                  placeholder: "Search country...",
                  className: "w-full pl-9 pr-3 py-2 text-sm border rounded-md bg-white dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none "
                }
              )
            ] }) }),
            v.map((R) => /* @__PURE__ */ h(
              "button",
              {
                type: "button",
                onClick: () => T(R),
                className: "w-full flex items-center gap-2 px-2 py-1 text-sm hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100",
                children: [
                  /* @__PURE__ */ t(
                    "img",
                    {
                      src: `https://flagcdn.com/w20/${R.code.toLowerCase()}.png`,
                      alt: R.code,
                      className: "w-5 h-3 object-cover"
                    }
                  ),
                  /* @__PURE__ */ h("span", { children: [
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
        ] }),
        u && /* @__PURE__ */ t(
          "span",
          {
            className: x(
              f.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: u
          }
        )
      ]
    },
    e
  ) });
}
const Ur = tr.forwardRef(
  ({ className: a = "", label: o, required: e, errorMessage: r = "", name: n, ...c }, i) => {
    const s = x(
      f.field.input,
      "placeholder-gray-400 dark:placeholder-gray-400",
      r ? "border-red-500" : "",
      a
    );
    return /* @__PURE__ */ t(Y, { children: /* @__PURE__ */ h(
      "div",
      {
        className: x(
          f.field.wrapper,
          c.parentClass || "col-span-12"
        ),
        children: [
          /* @__PURE__ */ t(we, { label: o, required: e }),
          /* @__PURE__ */ h("div", { className: "relative", children: [
            /* @__PURE__ */ t(
              "textarea",
              {
                className: s,
                ref: i,
                id: `field-${n}`,
                required: e,
                ...c
              }
            ),
            r && /* @__PURE__ */ t(
              "span",
              {
                className: x(
                  f.field.error,
                  "text-red-500 text-xs mt-1"
                ),
                children: r
              }
            )
          ] })
        ]
      },
      n
    ) });
  }
);
Ur.displayName = "TextArea";
var cr = function(a, o) {
  return cr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, r) {
    e.__proto__ = r;
  } || function(e, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  }, cr(a, o);
};
function yt(a, o) {
  if (typeof o != "function" && o !== null)
    throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
  cr(a, o);
  function e() {
    this.constructor = a;
  }
  a.prototype = o === null ? Object.create(o) : (e.prototype = o.prototype, new e());
}
var le = function() {
  return le = Object.assign || function(o) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var c in e) Object.prototype.hasOwnProperty.call(e, c) && (o[c] = e[c]);
    }
    return o;
  }, le.apply(this, arguments);
};
function vt(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var yr = !1, Me, lr, sr, Qe, er, Fr, rr, dr, pr, ur, Or, hr, mr, Tr, $r;
function me() {
  if (!yr) {
    yr = !0;
    var a = navigator.userAgent, o = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(a), e = /(Mac OS X)|(Windows)|(Linux)/.exec(a);
    if (hr = /\b(iPhone|iP[ao]d)/.exec(a), mr = /\b(iP[ao]d)/.exec(a), ur = /Android/i.exec(a), Tr = /FBAN\/\w+;/i.exec(a), $r = /Mobile/i.exec(a), Or = !!/Win64/.exec(a), o) {
      Me = o[1] ? parseFloat(o[1]) : o[5] ? parseFloat(o[5]) : NaN, Me && document && document.documentMode && (Me = document.documentMode);
      var r = /(?:Trident\/(\d+.\d+))/.exec(a);
      Fr = r ? parseFloat(r[1]) + 4 : Me, lr = o[2] ? parseFloat(o[2]) : NaN, sr = o[3] ? parseFloat(o[3]) : NaN, Qe = o[4] ? parseFloat(o[4]) : NaN, Qe ? (o = /(?:Chrome\/(\d+\.\d+))/.exec(a), er = o && o[1] ? parseFloat(o[1]) : NaN) : er = NaN;
    } else
      Me = lr = sr = er = Qe = NaN;
    if (e) {
      if (e[1]) {
        var n = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(a);
        rr = n ? parseFloat(n[1].replace("_", ".")) : !0;
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
    return me() || Me;
  },
  /**
   * Check if we're in Internet Explorer compatibility mode.
   *
   * @return bool true if in compatibility mode, false if
   * not compatibility mode or not ie
   */
  ieCompatibilityMode: function() {
    return me() || Fr > Me;
  },
  /**
   * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
   * only need this because Skype can't handle 64-bit IE yet.  We need to remove
   * this when we don't need it -- tracked by #601957.
   */
  ie64: function() {
    return br.ie() && Or;
  },
  /**
   *  Check if the UA is Firefox.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  firefox: function() {
    return me() || lr;
  },
  /**
   *  Check if the UA is Opera.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  opera: function() {
    return me() || sr;
  },
  /**
   *  Check if the UA is WebKit.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  webkit: function() {
    return me() || Qe;
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
    return me() || er;
  },
  /**
   *  Check if the user is running Windows.
   *
   *  @return bool `true' if the user's OS is Windows.
   */
  windows: function() {
    return me() || dr;
  },
  /**
   *  Check if the user is running Mac OS X.
   *
   *  @return float|bool   Returns a float if a version number is detected,
   *                       otherwise true/false.
   */
  osx: function() {
    return me() || rr;
  },
  /**
   * Check if the user is running Linux.
   *
   * @return bool `true' if the user's OS is some flavor of Linux.
   */
  linux: function() {
    return me() || pr;
  },
  /**
   * Check if the user is running on an iPhone or iPod platform.
   *
   * @return bool `true' if the user is running some flavor of the
   *    iPhone OS.
   */
  iphone: function() {
    return me() || hr;
  },
  mobile: function() {
    return me() || hr || mr || ur || $r;
  },
  nativeApp: function() {
    return me() || Tr;
  },
  android: function() {
    return me() || ur;
  },
  ipad: function() {
    return me() || mr;
  }
}, xt = br, kt = !!(typeof window < "u" && window.document && window.document.createElement), Nt = {
  canUseDOM: kt
}, St = Nt, Br = St, Gr;
Br.canUseDOM && (Gr = document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
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
function _t(a, o) {
  if (!Br.canUseDOM || o && !("addEventListener" in document))
    return !1;
  var e = "on" + a, r = e in document;
  if (!r) {
    var n = document.createElement("div");
    n.setAttribute(e, "return;"), r = typeof n[e] == "function";
  }
  return !r && Gr && a === "wheel" && (r = document.implementation.hasFeature("Events.wheel", "3.0")), r;
}
var Rt = _t, Ct = xt, Mt = Rt, vr = 10, xr = 40, kr = 800;
function Yr(a) {
  var o = 0, e = 0, r = 0, n = 0;
  return "detail" in a && (e = a.detail), "wheelDelta" in a && (e = -a.wheelDelta / 120), "wheelDeltaY" in a && (e = -a.wheelDeltaY / 120), "wheelDeltaX" in a && (o = -a.wheelDeltaX / 120), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (o = e, e = 0), r = o * vr, n = e * vr, "deltaY" in a && (n = a.deltaY), "deltaX" in a && (r = a.deltaX), (r || n) && a.deltaMode && (a.deltaMode == 1 ? (r *= xr, n *= xr) : (r *= kr, n *= kr)), r && !o && (o = r < 1 ? -1 : 1), n && !e && (e = n < 1 ? -1 : 1), {
    spinX: o,
    spinY: e,
    pixelX: r,
    pixelY: n
  };
}
Yr.getEventType = function() {
  return Ct.firefox() ? "DOMMouseScroll" : Mt("wheel") ? "wheel" : "mousewheel";
};
var Dt = Yr, Lt = Dt;
const Pt = /* @__PURE__ */ vt(Lt);
function At(a, o, e, r, n, c) {
  c === void 0 && (c = 0);
  var i = Ee(a, o, c), s = i.width, b = i.height, p = Math.min(s, e), m = Math.min(b, r);
  return p > m * n ? {
    width: m * n,
    height: m
  } : {
    width: p,
    height: p / n
  };
}
function Et(a) {
  return a.width > a.height ? a.width / a.naturalWidth : a.height / a.naturalHeight;
}
function Oe(a, o, e, r, n) {
  n === void 0 && (n = 0);
  var c = Ee(o.width, o.height, n), i = c.width, s = c.height;
  return {
    x: Nr(a.x, i, e.width, r),
    y: Nr(a.y, s, e.height, r)
  };
}
function Nr(a, o, e, r) {
  var n = o * r / 2 - e / 2;
  return or(a, -n, n);
}
function Sr(a, o) {
  return Math.sqrt(Math.pow(a.y - o.y, 2) + Math.pow(a.x - o.x, 2));
}
function _r(a, o) {
  return Math.atan2(o.y - a.y, o.x - a.x) * 180 / Math.PI;
}
function jt(a, o, e, r, n, c, i) {
  c === void 0 && (c = 0), i === void 0 && (i = !0);
  var s = i ? zt : It, b = Ee(o.width, o.height, c), p = Ee(o.naturalWidth, o.naturalHeight, c), m = {
    x: s(100, ((b.width - e.width / n) / 2 - a.x / n) / b.width * 100),
    y: s(100, ((b.height - e.height / n) / 2 - a.y / n) / b.height * 100),
    width: s(100, e.width / b.width * 100 / n),
    height: s(100, e.height / b.height * 100 / n)
  }, u = Math.round(s(p.width, m.width * p.width / 100)), l = Math.round(s(p.height, m.height * p.height / 100)), g = p.width >= p.height * r, w = g ? {
    width: Math.round(l * r),
    height: l
  } : {
    width: u,
    height: Math.round(u / r)
  }, y = le(le({}, w), {
    x: Math.round(s(p.width - w.width, m.x * p.width / 100)),
    y: Math.round(s(p.height - w.height, m.y * p.height / 100))
  });
  return {
    croppedAreaPercentages: m,
    croppedAreaPixels: y
  };
}
function zt(a, o) {
  return Math.min(a, Math.max(0, o));
}
function It(a, o) {
  return o;
}
function Ut(a, o, e, r, n, c) {
  var i = Ee(o.width, o.height, e), s = or(r.width / i.width * (100 / a.width), n, c), b = {
    x: s * i.width / 2 - r.width / 2 - i.width * s * (a.x / 100),
    y: s * i.height / 2 - r.height / 2 - i.height * s * (a.y / 100)
  };
  return {
    crop: b,
    zoom: s
  };
}
function Ft(a, o, e) {
  var r = Et(o);
  return e.height > e.width ? e.height / (a.height * r) : e.width / (a.width * r);
}
function Ot(a, o, e, r, n, c) {
  e === void 0 && (e = 0);
  var i = Ee(o.naturalWidth, o.naturalHeight, e), s = or(Ft(a, o, r), n, c), b = r.height > r.width ? r.height / a.height : r.width / a.width, p = {
    x: ((i.width - a.width) / 2 - a.x) * b,
    y: ((i.height - a.height) / 2 - a.y) * b
  };
  return {
    crop: p,
    zoom: s
  };
}
function Rr(a, o) {
  return {
    x: (o.x + a.x) / 2,
    y: (o.y + a.y) / 2
  };
}
function Tt(a) {
  return a * Math.PI / 180;
}
function Ee(a, o, e) {
  var r = Tt(e);
  return {
    width: Math.abs(Math.cos(r) * a) + Math.abs(Math.sin(r) * o),
    height: Math.abs(Math.sin(r) * a) + Math.abs(Math.cos(r) * o)
  };
}
function or(a, o, e) {
  return Math.min(Math.max(a, o), e);
}
function Je() {
  for (var a = [], o = 0; o < arguments.length; o++)
    a[o] = arguments[o];
  return a.filter(function(e) {
    return typeof e == "string" && e.length > 0;
  }).join(" ").trim();
}
var $t = `.reactEasyCrop_Container {
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
`, Bt = 1, Gt = 3, Yt = 1, Kt = (
  /** @class */
  function(a) {
    yt(o, a);
    function o() {
      var e = a !== null && a.apply(this, arguments) || this;
      return e.cropperRef = _e.createRef(), e.imageRef = _e.createRef(), e.videoRef = _e.createRef(), e.containerPosition = {
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
          e.resizeObserver = new window.ResizeObserver(function(n) {
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
          var n = Ut(e.props.initialCroppedAreaPercentages, e.mediaSize, e.props.rotation, r, e.props.minZoom, e.props.maxZoom), c = n.crop, i = n.zoom;
          e.props.onCropChange(c), e.props.onZoomChange && e.props.onZoomChange(i);
        } else if (e.props.initialCroppedAreaPixels) {
          var s = Ot(e.props.initialCroppedAreaPixels, e.mediaSize, e.props.rotation, r, e.props.minZoom, e.props.maxZoom), c = s.crop, i = s.zoom;
          e.props.onCropChange(c), e.props.onZoomChange && e.props.onZoomChange(i);
        }
      }, e.computeSizes = function() {
        var r, n, c, i, s, b, p = e.imageRef.current || e.videoRef.current;
        if (p && e.containerRef) {
          e.containerRect = e.containerRef.getBoundingClientRect(), e.saveContainerPosition();
          var m = e.containerRect.width / e.containerRect.height, u = ((r = e.imageRef.current) === null || r === void 0 ? void 0 : r.naturalWidth) || ((n = e.videoRef.current) === null || n === void 0 ? void 0 : n.videoWidth) || 0, l = ((c = e.imageRef.current) === null || c === void 0 ? void 0 : c.naturalHeight) || ((i = e.videoRef.current) === null || i === void 0 ? void 0 : i.videoHeight) || 0, g = p.offsetWidth < u || p.offsetHeight < l, w = u / l, y = void 0;
          if (g)
            switch (e.state.mediaObjectFit) {
              default:
              case "contain":
                y = m > w ? {
                  width: e.containerRect.height * w,
                  height: e.containerRect.height
                } : {
                  width: e.containerRect.width,
                  height: e.containerRect.width / w
                };
                break;
              case "horizontal-cover":
                y = {
                  width: e.containerRect.width,
                  height: e.containerRect.width / w
                };
                break;
              case "vertical-cover":
                y = {
                  width: e.containerRect.height * w,
                  height: e.containerRect.height
                };
                break;
            }
          else
            y = {
              width: p.offsetWidth,
              height: p.offsetHeight
            };
          e.mediaSize = le(le({}, y), {
            naturalWidth: u,
            naturalHeight: l
          }), e.props.setMediaSize && e.props.setMediaSize(e.mediaSize);
          var S = e.props.cropSize ? e.props.cropSize : At(e.mediaSize.width, e.mediaSize.height, e.containerRect.width, e.containerRect.height, e.props.aspect, e.props.rotation);
          return (((s = e.state.cropSize) === null || s === void 0 ? void 0 : s.height) !== S.height || ((b = e.state.cropSize) === null || b === void 0 ? void 0 : b.width) !== S.width) && e.props.onCropSizeChange && e.props.onCropSizeChange(S), e.setState({
            cropSize: S
          }, e.recomputeCropPosition), e.props.setCropSize && e.props.setCropSize(S), S;
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
        e.currentDoc && (r.preventDefault(), e.currentDoc.addEventListener("mousemove", e.onMouseMove), e.currentDoc.addEventListener("mouseup", e.onDragStopped), e.saveContainerPosition(), e.onDragStart(o.getMousePoint(r)));
      }, e.onMouseMove = function(r) {
        return e.onDrag(o.getMousePoint(r));
      }, e.onScroll = function(r) {
        e.currentDoc && (r.preventDefault(), e.saveContainerPosition());
      }, e.onTouchStart = function(r) {
        e.currentDoc && (e.isTouching = !0, !(e.props.onTouchRequest && !e.props.onTouchRequest(r)) && (e.currentDoc.addEventListener("touchmove", e.onTouchMove, {
          passive: !1
        }), e.currentDoc.addEventListener("touchend", e.onDragStopped), e.saveContainerPosition(), r.touches.length === 2 ? e.onPinchStart(r) : r.touches.length === 1 && e.onDragStart(o.getTouchPoint(r.touches[0]))));
      }, e.onTouchMove = function(r) {
        r.preventDefault(), r.touches.length === 2 ? e.onPinchMove(r) : r.touches.length === 1 && e.onDrag(o.getTouchPoint(r.touches[0]));
      }, e.onGestureStart = function(r) {
        e.currentDoc && (r.preventDefault(), e.currentDoc.addEventListener("gesturechange", e.onGestureChange), e.currentDoc.addEventListener("gestureend", e.onGestureEnd), e.gestureZoomStart = e.props.zoom, e.gestureRotationStart = e.props.rotation);
      }, e.onGestureChange = function(r) {
        if (r.preventDefault(), !e.isTouching) {
          var n = o.getMousePoint(r), c = e.gestureZoomStart - 1 + r.scale;
          if (e.setNewZoom(c, n, {
            shouldUpdatePosition: !0
          }), e.props.onRotationChange) {
            var i = e.gestureRotationStart + r.rotation;
            e.props.onRotationChange(i);
          }
        }
      }, e.onGestureEnd = function(r) {
        e.cleanEvents();
      }, e.onDragStart = function(r) {
        var n, c, i = r.x, s = r.y;
        e.dragStartPosition = {
          x: i,
          y: s
        }, e.dragStartCrop = le({}, e.props.crop), (c = (n = e.props).onInteractionStart) === null || c === void 0 || c.call(n);
      }, e.onDrag = function(r) {
        var n = r.x, c = r.y;
        e.currentWindow && (e.rafDragTimeout && e.currentWindow.cancelAnimationFrame(e.rafDragTimeout), e.rafDragTimeout = e.currentWindow.requestAnimationFrame(function() {
          if (e.state.cropSize && !(n === void 0 || c === void 0)) {
            var i = n - e.dragStartPosition.x, s = c - e.dragStartPosition.y, b = {
              x: e.dragStartCrop.x + i,
              y: e.dragStartCrop.y + s
            }, p = e.props.restrictPosition ? Oe(b, e.mediaSize, e.state.cropSize, e.props.zoom, e.props.rotation) : b;
            e.props.onCropChange(p);
          }
        }));
      }, e.onDragStopped = function() {
        var r, n;
        e.isTouching = !1, e.cleanEvents(), e.emitCropData(), (n = (r = e.props).onInteractionEnd) === null || n === void 0 || n.call(r);
      }, e.onWheel = function(r) {
        if (e.currentWindow && !(e.props.onWheelRequest && !e.props.onWheelRequest(r))) {
          r.preventDefault();
          var n = o.getMousePoint(r), c = Pt(r).pixelY, i = e.props.zoom - c * e.props.zoomSpeed / 200;
          e.setNewZoom(i, n, {
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
      }, e.getPointOnContainer = function(r, n) {
        var c = r.x, i = r.y;
        if (!e.containerRect)
          throw new Error("The Cropper is not mounted");
        return {
          x: e.containerRect.width / 2 - (c - n.x),
          y: e.containerRect.height / 2 - (i - n.y)
        };
      }, e.getPointOnMedia = function(r) {
        var n = r.x, c = r.y, i = e.props, s = i.crop, b = i.zoom;
        return {
          x: (n + s.x) / b,
          y: (c + s.y) / b
        };
      }, e.setNewZoom = function(r, n, c) {
        var i = c === void 0 ? {} : c, s = i.shouldUpdatePosition, b = s === void 0 ? !0 : s;
        if (!(!e.state.cropSize || !e.props.onZoomChange)) {
          var p = or(r, e.props.minZoom, e.props.maxZoom);
          if (b) {
            var m = e.getPointOnContainer(n, e.containerPosition), u = e.getPointOnMedia(m), l = {
              x: u.x * p - m.x,
              y: u.y * p - m.y
            }, g = e.props.restrictPosition ? Oe(l, e.mediaSize, e.state.cropSize, p, e.props.rotation) : l;
            e.props.onCropChange(g);
          }
          e.props.onZoomChange(p);
        }
      }, e.getCropData = function() {
        if (!e.state.cropSize)
          return null;
        var r = e.props.restrictPosition ? Oe(e.props.crop, e.mediaSize, e.state.cropSize, e.props.zoom, e.props.rotation) : e.props.crop;
        return jt(r, e.mediaSize, e.state.cropSize, e.getAspect(), e.props.zoom, e.props.rotation, e.props.restrictPosition);
      }, e.emitCropData = function() {
        var r = e.getCropData();
        if (r) {
          var n = r.croppedAreaPercentages, c = r.croppedAreaPixels;
          e.props.onCropComplete && e.props.onCropComplete(n, c), e.props.onCropAreaChange && e.props.onCropAreaChange(n, c);
        }
      }, e.emitCropAreaChange = function() {
        var r = e.getCropData();
        if (r) {
          var n = r.croppedAreaPercentages, c = r.croppedAreaPixels;
          e.props.onCropAreaChange && e.props.onCropAreaChange(n, c);
        }
      }, e.recomputeCropPosition = function() {
        var r, n;
        if (e.state.cropSize) {
          var c = e.props.crop;
          if (e.isInitialized && (!((r = e.previousCropSize) === null || r === void 0) && r.width) && (!((n = e.previousCropSize) === null || n === void 0) && n.height)) {
            var i = Math.abs(e.previousCropSize.width - e.state.cropSize.width) > 1e-6 || Math.abs(e.previousCropSize.height - e.state.cropSize.height) > 1e-6;
            if (i) {
              var s = e.state.cropSize.width / e.previousCropSize.width, b = e.state.cropSize.height / e.previousCropSize.height;
              c = {
                x: e.props.crop.x * s,
                y: e.props.crop.y * b
              };
            }
          }
          var p = e.props.restrictPosition ? Oe(c, e.mediaSize, e.state.cropSize, e.props.zoom, e.props.rotation) : c;
          e.previousCropSize = e.state.cropSize, e.props.onCropChange(p), e.emitCropData();
        }
      }, e.onKeyDown = function(r) {
        var n, c, i = e.props, s = i.crop, b = i.onCropChange, p = i.keyboardStep, m = i.zoom, u = i.rotation, l = p;
        if (e.state.cropSize) {
          r.shiftKey && (l *= 0.2);
          var g = le({}, s);
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
          e.props.restrictPosition && (g = Oe(g, e.mediaSize, e.state.cropSize, m, u)), r.repeat || (c = (n = e.props).onInteractionStart) === null || c === void 0 || c.call(n), b(g);
        }
      }, e.onKeyUp = function(r) {
        var n, c;
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
        e.emitCropData(), (c = (n = e.props).onInteractionEnd) === null || c === void 0 || c.call(n);
      }, e;
    }
    return o.prototype.componentDidMount = function() {
      !this.currentDoc || !this.currentWindow || (this.containerRef && (this.containerRef.ownerDocument && (this.currentDoc = this.containerRef.ownerDocument), this.currentDoc.defaultView && (this.currentWindow = this.currentDoc.defaultView), this.initResizeObserver(), typeof window.ResizeObserver > "u" && this.currentWindow.addEventListener("resize", this.computeSizes), this.props.zoomWithScroll && this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }), this.containerRef.addEventListener("gesturestart", this.onGestureStart)), this.currentDoc.addEventListener("scroll", this.onScroll), this.props.disableAutomaticStylesInjection || (this.styleRef = this.currentDoc.createElement("style"), this.styleRef.setAttribute("type", "text/css"), this.props.nonce && this.styleRef.setAttribute("nonce", this.props.nonce), this.styleRef.innerHTML = $t, this.currentDoc.head.appendChild(this.styleRef)), this.imageRef.current && this.imageRef.current.complete && this.onMediaLoad(), this.props.setImageRef && this.props.setImageRef(this.imageRef), this.props.setVideoRef && this.props.setVideoRef(this.videoRef), this.props.setCropperRef && this.props.setCropperRef(this.cropperRef));
    }, o.prototype.componentWillUnmount = function() {
      var e, r;
      !this.currentDoc || !this.currentWindow || (typeof window.ResizeObserver > "u" && this.currentWindow.removeEventListener("resize", this.computeSizes), (e = this.resizeObserver) === null || e === void 0 || e.disconnect(), this.containerRef && this.containerRef.removeEventListener("gesturestart", this.preventZoomSafari), this.styleRef && ((r = this.styleRef.parentNode) === null || r === void 0 || r.removeChild(this.styleRef)), this.cleanEvents(), this.props.zoomWithScroll && this.clearScrollEvent());
    }, o.prototype.componentDidUpdate = function(e) {
      var r, n, c, i, s, b, p, m, u;
      e.rotation !== this.props.rotation ? (this.computeSizes(), this.recomputeCropPosition()) : e.aspect !== this.props.aspect ? this.computeSizes() : e.objectFit !== this.props.objectFit ? this.computeSizes() : e.zoom !== this.props.zoom ? this.recomputeCropPosition() : ((r = e.cropSize) === null || r === void 0 ? void 0 : r.height) !== ((n = this.props.cropSize) === null || n === void 0 ? void 0 : n.height) || ((c = e.cropSize) === null || c === void 0 ? void 0 : c.width) !== ((i = this.props.cropSize) === null || i === void 0 ? void 0 : i.width) ? this.computeSizes() : (((s = e.crop) === null || s === void 0 ? void 0 : s.x) !== ((b = this.props.crop) === null || b === void 0 ? void 0 : b.x) || ((p = e.crop) === null || p === void 0 ? void 0 : p.y) !== ((m = this.props.crop) === null || m === void 0 ? void 0 : m.y)) && this.emitCropAreaChange(), e.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef && (this.props.zoomWithScroll ? this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }) : this.clearScrollEvent()), e.video !== this.props.video && ((u = this.videoRef.current) === null || u === void 0 || u.load());
      var l = this.getObjectFit();
      l !== this.state.mediaObjectFit && this.setState({
        mediaObjectFit: l
      }, this.computeSizes);
    }, o.prototype.getAspect = function() {
      var e = this.props, r = e.cropSize, n = e.aspect;
      return r ? r.width / r.height : n;
    }, o.prototype.getObjectFit = function() {
      var e, r, n, c;
      if (this.props.objectFit === "cover") {
        var i = this.imageRef.current || this.videoRef.current;
        if (i && this.containerRef) {
          this.containerRect = this.containerRef.getBoundingClientRect();
          var s = this.containerRect.width / this.containerRect.height, b = ((e = this.imageRef.current) === null || e === void 0 ? void 0 : e.naturalWidth) || ((r = this.videoRef.current) === null || r === void 0 ? void 0 : r.videoWidth) || 0, p = ((n = this.imageRef.current) === null || n === void 0 ? void 0 : n.naturalHeight) || ((c = this.videoRef.current) === null || c === void 0 ? void 0 : c.videoHeight) || 0, m = b / p;
          return m < s ? "horizontal-cover" : "vertical-cover";
        }
        return "horizontal-cover";
      }
      return this.props.objectFit;
    }, o.prototype.onPinchStart = function(e) {
      var r = o.getTouchPoint(e.touches[0]), n = o.getTouchPoint(e.touches[1]);
      this.lastPinchDistance = Sr(r, n), this.lastPinchRotation = _r(r, n), this.onDragStart(Rr(r, n));
    }, o.prototype.onPinchMove = function(e) {
      var r = this;
      if (!(!this.currentDoc || !this.currentWindow)) {
        var n = o.getTouchPoint(e.touches[0]), c = o.getTouchPoint(e.touches[1]), i = Rr(n, c);
        this.onDrag(i), this.rafPinchTimeout && this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout), this.rafPinchTimeout = this.currentWindow.requestAnimationFrame(function() {
          var s = Sr(n, c), b = r.props.zoom * (s / r.lastPinchDistance);
          r.setNewZoom(b, i, {
            shouldUpdatePosition: !1
          }), r.lastPinchDistance = s;
          var p = _r(n, c), m = r.props.rotation + (p - r.lastPinchRotation);
          r.props.onRotationChange && r.props.onRotationChange(m), r.lastPinchRotation = p;
        });
      }
    }, o.prototype.render = function() {
      var e = this, r, n = this.props, c = n.image, i = n.video, s = n.mediaProps, b = n.cropperProps, p = n.transform, m = n.crop, u = m.x, l = m.y, g = n.rotation, w = n.zoom, y = n.cropShape, S = n.showGrid, k = n.roundCropAreaPixels, _ = n.style, A = _.containerStyle, F = _.cropAreaStyle, I = _.mediaStyle, E = n.classes, T = E.containerClassName, v = E.cropAreaClassName, R = E.mediaClassName, M = (r = this.state.mediaObjectFit) !== null && r !== void 0 ? r : this.getObjectFit();
      return _e.createElement("div", {
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        ref: function(G) {
          return e.containerRef = G;
        },
        "data-testid": "container",
        style: A,
        className: Je("reactEasyCrop_Container", T)
      }, c ? _e.createElement("img", le({
        alt: "",
        className: Je("reactEasyCrop_Image", M === "contain" && "reactEasyCrop_Contain", M === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", M === "vertical-cover" && "reactEasyCrop_Cover_Vertical", R)
      }, s, {
        src: c,
        ref: this.imageRef,
        style: le(le({}, I), {
          transform: p || "translate(".concat(u, "px, ").concat(l, "px) rotate(").concat(g, "deg) scale(").concat(w, ")")
        }),
        onLoad: this.onMediaLoad
      })) : i && _e.createElement("video", le({
        autoPlay: !0,
        playsInline: !0,
        loop: !0,
        muted: !0,
        className: Je("reactEasyCrop_Video", M === "contain" && "reactEasyCrop_Contain", M === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", M === "vertical-cover" && "reactEasyCrop_Cover_Vertical", R)
      }, s, {
        ref: this.videoRef,
        onLoadedMetadata: this.onMediaLoad,
        style: le(le({}, I), {
          transform: p || "translate(".concat(u, "px, ").concat(l, "px) rotate(").concat(g, "deg) scale(").concat(w, ")")
        }),
        controls: !1
      }), (Array.isArray(i) ? i : [{
        src: i
      }]).map(function(z) {
        return _e.createElement("source", le({
          key: z.src
        }, z));
      })), this.state.cropSize && _e.createElement("div", le({
        ref: this.cropperRef,
        style: le(le({}, F), {
          width: k ? Math.round(this.state.cropSize.width) : this.state.cropSize.width,
          height: k ? Math.round(this.state.cropSize.height) : this.state.cropSize.height
        }),
        tabIndex: 0,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        "data-testid": "cropper",
        className: Je("reactEasyCrop_CropArea", y === "round" && "reactEasyCrop_CropAreaRound", S && "reactEasyCrop_CropAreaGrid", v)
      }, b)));
    }, o.defaultProps = {
      zoom: 1,
      rotation: 0,
      aspect: 4 / 3,
      maxZoom: Gt,
      minZoom: Bt,
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
      keyboardStep: Yt
    }, o.getMousePoint = function(e) {
      return {
        x: Number(e.clientX),
        y: Number(e.clientY)
      };
    }, o.getTouchPoint = function(e) {
      return {
        x: Number(e.clientX),
        y: Number(e.clientY)
      };
    }, o;
  }(_e.Component)
);
const Cr = ge, Wt = (a) => new Promise((o, e) => {
  const r = new Image();
  r.addEventListener("load", () => o(r)), r.addEventListener("error", (n) => e(n)), r.setAttribute("crossOrigin", "anonymous"), r.src = a;
}), Kr = (a) => a * Math.PI / 180, Ht = (a, o, e) => {
  const r = Kr(e);
  return {
    width: Math.abs(Math.cos(r) * a) + Math.abs(Math.sin(r) * o),
    height: Math.abs(Math.sin(r) * a) + Math.abs(Math.cos(r) * o)
  };
}, Zt = async (a, o, e = "image/jpeg", r = 0) => {
  const n = await Wt(a), c = document.createElement("canvas"), i = c.getContext("2d");
  if (!i)
    throw new Error("Canvas context is not available");
  const s = Kr(r), { width: b, height: p } = Ht(
    n.width,
    n.height,
    r
  );
  c.width = b, c.height = p, i.translate(b / 2, p / 2), i.rotate(s), i.translate(-n.width / 2, -n.height / 2), i.drawImage(n, 0, 0);
  const m = document.createElement("canvas"), u = m.getContext("2d");
  if (!u)
    throw new Error("Canvas context is not available");
  return m.width = o.width, m.height = o.height, u.drawImage(
    c,
    o.x,
    o.y,
    o.width,
    o.height,
    0,
    0,
    o.width,
    o.height
  ), new Promise((l, g) => {
    m.toBlob(
      (w) => {
        if (!w) {
          g(new Error("Image cropping failed"));
          return;
        }
        l(w);
      },
      e,
      0.95
    );
  });
}, Wr = ({
  isOpen: a,
  imageSrc: o,
  fileType: e = "image/jpeg",
  fileName: r = "cropped-image",
  aspect: n = 1 / 1,
  title: c = "Crop Image",
  onClose: i,
  onApply: s
}) => {
  const [b, p] = D({ x: 0, y: 0 }), [m, u] = D(1), [l, g] = D(null);
  V(() => {
    a && (p({ x: 0, y: 0 }), u(1), g(null));
  }, [a]);
  const w = et((S, k) => {
    g(k);
  }, []), y = async () => {
    var S, k;
    if (!(!o || !l))
      try {
        const _ = await Zt(
          o,
          l,
          e
        ), A = ((k = (S = e == null ? void 0 : e.split("/")) == null ? void 0 : S[1]) == null ? void 0 : k.replace("jpeg", "jpg")) || "jpg", F = new File([_], `${r}.${A}`, {
          type: e
        });
        s == null || s(F);
      } catch {
        i == null || i();
      }
  };
  return a ? /* @__PURE__ */ h(
    "div",
    {
      className: x(
        f.mediaPicker.cropModal,
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
            /* @__PURE__ */ t("div", { className: "relative h-72 w-full bg-gray-900 rounded-md overflow-hidden", children: o && /* @__PURE__ */ t(
              Kt,
              {
                image: o,
                crop: b,
                zoom: m,
                aspect: n,
                onCropChange: p,
                onZoomChange: u,
                onCropComplete: w
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
                  value: m,
                  onChange: (S) => u(Number(S.target.value)),
                  className: "w-full"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ h("div", { className: "px-4 py-3 flex justify-end gap-3 border-t border-gray-200 dark:border-gray-700 sm:!px-6", children: [
            /* @__PURE__ */ t(
              Cr,
              {
                type: "button",
                onClick: i,
                variant: "outlined",
                color: "default",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ t(
              Cr,
              {
                type: "button",
                onClick: y,
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
}, Vt = ge, Re = (a) => {
  typeof a == "string" && a.startsWith("blob:") && URL.revokeObjectURL(a);
}, Xt = ({
  label: a = "",
  value: o = null,
  onChange: e,
  required: r = !1,
  accept: n = "image/*",
  aspect: c = "1",
  id: i,
  dragDrop: s = !1,
  cropImage: b = !1,
  name: p = "",
  parentClass: m = "",
  errorMessage: u = ""
}) => {
  const [l, g] = D(o), [w, y] = D(!1), [S, k] = D(!1), [_, A] = D(""), [F, I] = D("image/jpeg"), [E, T] = D("cropped-image"), v = de(null), R = de(""), M = de("");
  V(() => {
    if (o instanceof File) {
      const P = URL.createObjectURL(o);
      Re(M.current), M.current = P, g({ file: o, preview: P });
    } else o && typeof o == "object" && "preview" in o, g(o);
  }, [o]), V(() => () => {
    Re(M.current), Re(R.current);
  }, []);
  const z = () => {
    k(!1), Re(R.current), R.current = "", A(""), v.current && (v.current.value = "");
  }, G = (P) => {
    const C = URL.createObjectURL(P);
    Re(M.current), M.current = C, g({ file: P, preview: C }), e == null || e(P), z();
  }, K = (P) => {
    if (!P || P.length === 0)
      return;
    const C = P[0];
    if (b) {
      const U = URL.createObjectURL(C);
      Re(R.current), R.current = U, A(U), I(C.type || "image/jpeg"), T(
        (C.name || "cropped-image").replace(/\.[^/.]+$/, "")
      ), k(!0);
      return;
    }
    const W = URL.createObjectURL(C);
    Re(M.current), M.current = W, g({ file: C, preview: W }), e == null || e(C);
  }, te = (P) => {
    P && P.stopPropagation(), Re(M.current), M.current = "", g(null), e == null || e(null), v.current && (v.current.value = "");
  }, ae = (P) => {
    s && (P.preventDefault(), y(!0));
  }, j = (P) => {
    s && (P.preventDefault(), y(!1));
  }, se = (P) => {
    var C, W, U, pe;
    s && (P.preventDefault(), y(!1), (pe = (U = (W = (C = P.dataTransfer) == null ? void 0 : C.files) == null ? void 0 : W[0]) == null ? void 0 : U.type) != null && pe.includes("image/") && K(P.dataTransfer.files));
  }, X = () => {
    var P;
    (P = v.current) == null || P.click();
  }, re = l && typeof l == "object" && "preview" in l ? l.preview : typeof l == "string" ? l : "";
  return /* @__PURE__ */ h(Y, { children: [
    /* @__PURE__ */ h(
      "div",
      {
        className: x(
          f.mediaPicker.image,
          f.field.wrapper,
          m || "col-span-12"
        ),
        children: [
          /* @__PURE__ */ t(we, { label: a, required: r }),
          /* @__PURE__ */ h(
            "div",
            {
              className: x(
                f.mediaPicker.dropzone,
                "relative rounded-md p-2 transition-all",
                w ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800",
                u ? "border-red-500" : ""
              ),
              onDragOver: ae,
              onDragLeave: j,
              onDrop: se,
              id: `field-${p}`,
              children: [
                /* @__PURE__ */ t(
                  "input",
                  {
                    ref: v,
                    id: i,
                    type: "file",
                    accept: n,
                    onChange: (P) => K(P.target.files),
                    required: r && !l,
                    className: "absolute opacity-0 right-[50%] top-[80%] -translate-y-1/2 pointer-events-none h-[10px]"
                  }
                ),
                /* @__PURE__ */ h(
                  "div",
                  {
                    className: `flex items-center space-x-4 transition-all ${w ? "opacity-50" : ""}`,
                    children: [
                      l ? /* @__PURE__ */ h("div", { className: "relative group", children: [
                        /* @__PURE__ */ t(
                          "img",
                          {
                            src: re,
                            alt: "preview",
                            className: "object-cover w-20 h-20 rounded-full shadow-md"
                          }
                        ),
                        !r && /* @__PURE__ */ t(
                          "button",
                          {
                            type: "button",
                            onClick: te,
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
                      /* @__PURE__ */ h("div", { className: "flex flex-col items-center space-y-1", children: [
                        /* @__PURE__ */ t(
                          Vt,
                          {
                            type: "button",
                            onClick: X,
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
                s && w && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-md", children: /* @__PURE__ */ t("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg", children: "Drop image here" }) })
              ]
            }
          ),
          u && /* @__PURE__ */ t(
            "span",
            {
              className: x(
                f.field.error,
                "text-red-500 text-xs mt-1"
              ),
              children: u
            }
          )
        ]
      },
      p
    ),
    /* @__PURE__ */ t(
      Wr,
      {
        isOpen: S,
        imageSrc: _,
        fileType: F,
        fileName: E,
        onClose: z,
        onApply: G,
        aspect: Number(c)
      }
    )
  ] });
}, Hr = tr.forwardRef(
  ({
    label: a,
    value: o,
    name: e,
    required: r,
    parentClass: n = "",
    className: c = "",
    type: i = "text",
    onKeyDown: s,
    negativeNumberAllow: b = !0,
    defaultValue: p = "",
    field: m = {},
    onChange: u,
    mask: l = "",
    errorMessage: g = "",
    maskApplyOnValue: w = !0,
    ...y
  }, S) => {
    const [k, _] = D(!1), A = (E) => {
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
    }, F = x(
      f.field.input,
      "h-10 placeholder-gray-400 dark:placeholder-gray-400",
      i === "password" ? "pr-10" : "",
      i === "number" ? "no-spinner" : "",
      c,
      g ? "border-red-500" : ""
    );
    function I(E, T) {
      if (!E) return E;
      const v = String(E).replace(/[^a-zA-Z0-9]/g, "");
      let R = "", M = 0;
      for (let z = 0; z < (T == null ? void 0 : T.length) && M < v.length; z++) {
        const G = T[z], K = v[M];
        G === "9" ? /\d/.test(K) ? (R += K, M++) : (M++, z--) : G === "A" ? /[a-zA-Z]/.test(K) ? (R += K, M++) : (M++, z--) : G === "X" ? /[a-zA-Z0-9]/.test(K) ? (R += K, M++) : (M++, z--) : G === "*" ? (R += K, M++) : (R += G, K === G && M++);
      }
      return R;
    }
    return V(() => {
      if (p) {
        const E = o || p;
        setTimeout(() => {
          u == null || u(E);
        }, 100);
      }
    }, [p]), /* @__PURE__ */ t(Y, { children: /* @__PURE__ */ h(
      "div",
      {
        className: x(
          f.field.wrapper,
          n || "col-span-12"
        ),
        children: [
          /* @__PURE__ */ t(
            we,
            {
              label: a,
              required: r,
              infoText: m == null ? void 0 : m.infoText
            }
          ),
          /* @__PURE__ */ h("div", { className: "relative", children: [
            /* @__PURE__ */ t(
              "input",
              {
                type: i === "password" && k ? "text" : i,
                ref: S,
                id: `field-${e}`,
                required: r,
                onKeyDown: A,
                className: F,
                value: l ? I(o, l) : o,
                onChange: (E) => {
                  u(l && w ? I(E.target.value, l) : E.target.value);
                },
                ...y
              }
            ),
            g && /* @__PURE__ */ t(
              "span",
              {
                className: x(
                  f.field.error,
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
                onClick: () => _((E) => !E),
                className: "absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200",
                children: /* @__PURE__ */ t(
                  be,
                  {
                    icon: k ? "mdi:eye-outline" : "mdi:eye-off-outline",
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
Hr.displayName = "Input";
const Jt = ({
  editorKey: a = "",
  value: o = "",
  name: e = "",
  onChange: r,
  label: n = "",
  required: c = !1,
  placeholder: i = "",
  parentClass: s = "col-span-12",
  height: b = 400,
  inline: p = !1,
  disabled: m = !1,
  plugins: u,
  toolbar: l,
  menubar: g = !1,
  fontFamily: w = "Inter, sans-serif",
  initConfig: y = {},
  imageUploadHandler: S,
  errorMessage: k = ""
}) => {
  const _ = [
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
  ], A = "undo redo | blocks | bold italic underline forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media table | removeformat | code fullscreen preview", F = (I) => new Promise((E, T) => {
    if (!S) {
      E(`data:${I.blob().type};base64,${I.base64()}`);
      return;
    }
    S(I).then((v) => {
      v ? E(v) : T("Upload failed: No URL returned");
    }).catch((v) => {
      T(
        typeof v == "string" ? v : (v == null ? void 0 : v.message) || "Image upload failed"
      );
    });
  });
  return /* @__PURE__ */ h(
    "div",
    {
      className: x(f.field.wrapper, s),
      id: `field-${e}`,
      children: [
        n && /* @__PURE__ */ t(we, { label: n, required: c }),
        /* @__PURE__ */ t(
          ut,
          {
            apiKey: a,
            value: o,
            disabled: m,
            init: {
              height: b,
              inline: p,
              menubar: g,
              branding: !1,
              statusbar: !0,
              automatic_uploads: !0,
              images_upload_handler: F,
              plugins: u ?? _,
              toolbar: l ?? A,
              placeholder: i,
              content_style: `
            body {
                font-family: ${w};
                border: ${k ? "1px solid blue" : ""};
            }
            `,
              ...y
            },
            onEditorChange: (I) => {
              r == null || r(I);
            }
          }
        ),
        k && /* @__PURE__ */ t(
          "span",
          {
            className: x(
              f.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: k
          }
        )
      ]
    }
  );
}, qt = ({
  name: a = "",
  label: o = "",
  options: e = [],
  value: r = null,
  onChange: n,
  disabled: c = !1,
  required: i = !1,
  parentClass: s = "col-span-12",
  className: b = "",
  errorMessage: p = "",
  multiSelect: m = !1
}) => {
  const u = Array.isArray(e) && e.length > 0, l = (y) => u ? m ? Array.isArray(r) && r.includes(y) : r === y : !!r, g = (y) => {
    n == null || n(y.target.checked, a);
  }, w = (y, S) => {
    if (n)
      if (!m)
        n(S ? y : "", a);
      else {
        const k = Array.isArray(r) ? [...r] : [];
        if (S)
          k.includes(y) || k.push(y);
        else {
          const _ = k.indexOf(y);
          _ > -1 && k.splice(_, 1);
        }
        n(k, a);
      }
  };
  return u ? /* @__PURE__ */ t(Y, { children: /* @__PURE__ */ h("div", { className: x(f.field.wrapper, s), children: [
    /* @__PURE__ */ t(we, { label: o, required: i }),
    /* @__PURE__ */ t("div", { className: "flex flex-col space-y-2", children: e.map((y, S) => /* @__PURE__ */ h("div", { className: "flex items-center", children: [
      /* @__PURE__ */ t(
        "input",
        {
          type: "checkbox",
          name: a,
          id: `field-${a}`,
          value: y.value,
          checked: l(y.value),
          disabled: c || !!y.disabled,
          required: i && S === 0,
          onChange: (k) => w(y.value, k.target.checked),
          className: x(
            f.field.input,
            "h-4 w-4 cursor-pointer text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400",
            b
          )
        },
        a
      ),
      y.label && /* @__PURE__ */ t(
        "label",
        {
          htmlFor: a,
          className: "ml-2 text-sm text-gray-700 dark:text-gray-200 select-none",
          children: y.label
        }
      )
    ] }, y.value || y.label)) }),
    p && /* @__PURE__ */ t(
      "span",
      {
        className: x(
          f.field.error,
          "text-red-500 text-xs mt-1"
        ),
        children: p
      }
    )
  ] }) }) : /* @__PURE__ */ h(
    "div",
    {
      className: x(
        f.field.wrapper,
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
              f.field.input,
              "h-4 w-4 text-blue-600 cursor-pointer border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400",
              b
            )
          }
        ),
        o && /* @__PURE__ */ t(
          "label",
          {
            htmlFor: a,
            className: "ml-2 text-sm text-gray-700 dark:text-gray-200 select-none",
            children: o
          }
        )
      ]
    }
  );
}, Mr = ge, Qt = ({
  label: a = "",
  value: o = null,
  onChange: e,
  required: r = !1,
  accept: n = "audio/*",
  id: c,
  dragDrop: i = !1,
  name: s = "",
  parentClass: b = "",
  errorMessage: p = "",
  maxSize: m = 0
}) => {
  const [u, l] = D(
    null
  ), [g, w] = D(!1), y = de(null), S = m * 1024 * 1024;
  V(() => {
    if (!o) {
      k(), l(null);
      return;
    }
    if (o instanceof File) {
      const v = URL.createObjectURL(o);
      return l({ file: o, preview: v }), () => {
        URL.revokeObjectURL(v);
      };
    } else typeof o == "string" ? l({ preview: o }) : o != null && o.preview && l(o);
  }, [o]);
  const k = () => {
    u != null && u.preview && u.preview.startsWith("blob:") && URL.revokeObjectURL(u.preview);
  }, _ = (v) => {
    if (!v || v.length === 0)
      return;
    const R = v[0];
    if (S && R.size > S) {
      De(
        `Audio is too large. Maximum allowed size is ${m} MB`,
        { variant: "warning" }
      );
      return;
    }
    const M = URL.createObjectURL(R);
    k(), l({ file: R, preview: M }), e == null || e(R);
  }, A = (v) => {
    v && v.stopPropagation(), k(), l(null), e == null || e(null), y.current && (y.current.value = "");
  }, F = (v) => {
    i && (v.preventDefault(), w(!0));
  }, I = (v) => {
    i && (v.preventDefault(), w(!1));
  }, E = (v) => {
    var R, M, z, G;
    i && (v.preventDefault(), w(!1), (G = (z = (M = (R = v.dataTransfer) == null ? void 0 : R.files) == null ? void 0 : M[0]) == null ? void 0 : z.type) != null && G.includes("audio/") && _(v.dataTransfer.files));
  }, T = () => {
    var v;
    (v = y.current) == null || v.click();
  };
  return /* @__PURE__ */ h(
    "div",
    {
      className: x(
        f.mediaPicker.audio,
        f.field.wrapper,
        b || "col-span-12"
      ),
      children: [
        /* @__PURE__ */ t(we, { label: a, required: r }),
        /* @__PURE__ */ h(
          "div",
          {
            className: x(
              f.mediaPicker.dropzone,
              "relative rounded-lg p-2 transition-all",
              g ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800",
              p ? "border-red-500" : ""
            ),
            onDragOver: F,
            onDragLeave: I,
            onDrop: E,
            id: `field-${s}`,
            children: [
              /* @__PURE__ */ t(
                "input",
                {
                  ref: y,
                  id: c,
                  type: "file",
                  accept: n,
                  onChange: (v) => _(v.target.files),
                  required: r && !u,
                  className: "absolute opacity-0 right-[50%] top-[80%] -translate-y-1/2 pointer-events-none h-[10px]"
                }
              ),
              /* @__PURE__ */ t(
                "div",
                {
                  className: `flex items-center space-x-4 transition-all ${g ? "opacity-50" : ""}`,
                  children: u ? /* @__PURE__ */ h("div", { className: "flex items-center space-x-4", children: [
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
                          src: u.preview,
                          controls: !0,
                          controlsList: "nodownload"
                        },
                        u.preview
                      )
                    ] }),
                    /* @__PURE__ */ t(Mr, { type: "button", onClick: T, children: /* @__PURE__ */ t("span", { children: "Change Audio File" }) })
                  ] }) : /* @__PURE__ */ h("div", { className: "flex items-center justify-center space-x-4", children: [
                    /* @__PURE__ */ t("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ t(be, { icon: "mdi:music", className: "text-gray-400 w-10 h-10" }) }),
                    /* @__PURE__ */ h("div", { className: "flex flex-col items-center space-y-1", children: [
                      /* @__PURE__ */ t(
                        Mr,
                        {
                          type: "button",
                          onClick: T,
                          variant: "outlined",
                          children: /* @__PURE__ */ t("span", { children: "Choose Audio File" })
                        }
                      ),
                      i && /* @__PURE__ */ t("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop your audio file here" })
                    ] })
                  ] })
                }
              ),
              i && g && !u && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-lg", children: /* @__PURE__ */ t("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg", children: "Drop audio here" }) })
            ]
          }
        ),
        p && /* @__PURE__ */ t(
          "span",
          {
            className: x(
              f.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: p
          }
        )
      ]
    },
    s
  );
}, Dr = ge, ea = (a) => {
  if (!a)
    return null;
  if (a instanceof File) {
    const o = URL.createObjectURL(a);
    return {
      id: `${Date.now()}-${Math.random()}`,
      file: a,
      preview: o,
      createdBlobUrl: o
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
      const o = URL.createObjectURL(a.file);
      return {
        id: `${Date.now()}-${Math.random()}`,
        file: a.file,
        preview: o,
        createdBlobUrl: o
      };
    }
  }
  return null;
}, ra = ({
  label: a = "",
  value: o = [],
  onChange: e,
  required: r = !1,
  accept: n = "image/*",
  aspect: c = "1",
  id: i,
  dragDrop: s = !1,
  cropImage: b = !1,
  name: p = "",
  parentClass: m = "",
  maxImages: u,
  errorMessage: l = ""
}) => {
  const [g, w] = D([]), [y, S] = D(!1), [k, _] = D(!1), [A, F] = D(""), [I, E] = D("image/jpeg"), [T, v] = D("cropped-image"), [R, M] = D(null), z = de(null), G = de(null), K = de(""), te = de([]);
  V(() => {
    te.current = g;
  }, [g]), V(() => () => {
    te.current.forEach((L) => {
      L.createdBlobUrl && URL.revokeObjectURL(L.createdBlobUrl);
    }), K.current && URL.revokeObjectURL(K.current);
  }, []), V(() => {
    if (!Array.isArray(o)) {
      w([]);
      return;
    }
    const L = o.map(($) => ea($)).filter(Boolean);
    w(($) => ($.forEach((q) => {
      q.createdBlobUrl && URL.revokeObjectURL(q.createdBlobUrl);
    }), L));
  }, [o]);
  const ae = typeof u == "number" && u > 0 ? Math.max(u - g.length, 0) : Number.POSITIVE_INFINITY, j = () => {
    _(!1), K.current && (URL.revokeObjectURL(K.current), K.current = ""), F(""), M(null), z.current && (z.current.value = "");
  }, se = (L) => {
    var $, q;
    F(L.preview), E((($ = L.file) == null ? void 0 : $.type) || "image/jpeg"), v(
      (((q = L.file) == null ? void 0 : q.name) || "cropped-image").replace(/\.[^/.]+$/, "")
    ), M(L.id), _(!0);
  }, X = (L) => {
    const $ = URL.createObjectURL(L);
    w((q) => {
      const Q = q.map((H) => H.id !== R ? H : (H.createdBlobUrl && URL.revokeObjectURL(H.createdBlobUrl), {
        ...H,
        file: L,
        preview: $,
        createdBlobUrl: $
      }));
      return e == null || e(
        Q.map((H) => H.file ? H.file : H.preview)
      ), Q;
    }), j();
  }, re = (L) => {
    if (!L || L.length === 0 || ae === 0)
      return;
    const $ = Array.from(L).filter((Q) => Q.type.includes("image/")).slice(0, ae);
    if ($.length === 0)
      return;
    const q = $.map((Q) => {
      const H = URL.createObjectURL(Q);
      return {
        id: `${Date.now()}-${Math.random()}`,
        file: Q,
        preview: H,
        createdBlobUrl: H
      };
    });
    w((Q) => {
      const H = [...Q, ...q];
      return e == null || e(
        H.map((oe) => oe.file ? oe.file : oe.preview)
      ), H;
    }), z.current && (z.current.value = "");
  }, P = (L) => {
    w(($) => {
      const q = $.find((H) => H.id === L);
      q != null && q.createdBlobUrl && URL.revokeObjectURL(q.createdBlobUrl);
      const Q = $.filter((H) => H.id !== L);
      return e == null || e(
        Q.map((H) => H.file ? H.file : H.preview)
      ), Q;
    }), z.current && (z.current.value = "");
  }, C = (L) => {
    var $;
    M(L), ($ = G.current) == null || $.click();
  }, W = (L) => {
    if (!L || L.length === 0 || !R)
      return;
    const $ = Array.from(L).find((Q) => Q.type.includes("image/"));
    if (!$)
      return;
    const q = URL.createObjectURL($);
    w((Q) => {
      const H = Q.map((oe) => oe.id !== R ? oe : (oe.createdBlobUrl && URL.revokeObjectURL(oe.createdBlobUrl), {
        ...oe,
        file: $,
        preview: q,
        createdBlobUrl: q
      }));
      return e == null || e(
        H.map((oe) => oe.file ? oe.file : oe.preview)
      ), H;
    }), M(null), G.current && (G.current.value = "");
  }, U = (L) => {
    s && (L.preventDefault(), S(!0));
  }, pe = (L) => {
    s && (L.preventDefault(), S(!1));
  }, ve = (L) => {
    var $;
    s && (L.preventDefault(), S(!1), re((($ = L.dataTransfer) == null ? void 0 : $.files) || null));
  }, fe = () => {
    var L;
    (L = z.current) == null || L.click();
  }, ce = typeof u == "number" && u > 0 ? g.length < u : !0;
  return /* @__PURE__ */ h(Y, { children: [
    /* @__PURE__ */ h(
      "div",
      {
        className: x(
          f.mediaPicker.multiImage,
          f.field.wrapper,
          m || "col-span-12"
        ),
        children: [
          /* @__PURE__ */ t(we, { label: a, required: r }),
          /* @__PURE__ */ h(
            "div",
            {
              className: x(
                f.mediaPicker.dropzone,
                "relative rounded-md p-2 transition-all",
                y ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800",
                l ? "border-red-500" : ""
              ),
              onDragOver: U,
              onDragLeave: pe,
              onDrop: ve,
              id: `field-${p}`,
              children: [
                /* @__PURE__ */ t(
                  "input",
                  {
                    ref: z,
                    id: i,
                    type: "file",
                    accept: n,
                    multiple: !0,
                    onChange: (L) => re(L.target.files),
                    required: r && g.length === 0,
                    className: "absolute opacity-0 pointer-events-none h-1 w-1"
                  }
                ),
                /* @__PURE__ */ t(
                  "input",
                  {
                    ref: G,
                    type: "file",
                    accept: n,
                    onChange: (L) => W(L.target.files),
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
                  /* @__PURE__ */ h("div", { className: "flex flex-col items-center space-y-1", children: [
                    /* @__PURE__ */ t(
                      Dr,
                      {
                        type: "button",
                        onClick: fe,
                        variant: "outlined",
                        color: "default",
                        children: /* @__PURE__ */ t("span", { className: "text-sm font-medium", children: "Choose Images" })
                      }
                    ),
                    s && /* @__PURE__ */ t("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop your images here" })
                  ] })
                ] }) : /* @__PURE__ */ h(Y, { children: [
                  /* @__PURE__ */ h("div", { className: "flex items-center justify-between gap-2 mb-3", children: [
                    /* @__PURE__ */ t(
                      Dr,
                      {
                        type: "button",
                        onClick: fe,
                        disabled: !ce,
                        variant: "outlined",
                        color: "default",
                        children: /* @__PURE__ */ t("span", { className: "text-sm font-medium", children: "Upload Images" })
                      }
                    ),
                    /* @__PURE__ */ t("span", { className: "text-xs text-gray-500 dark:text-gray-400", children: u ? `${g.length}/${u}` : `${g.length} selected` })
                  ] }),
                  /* @__PURE__ */ t("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3", children: g.map((L) => /* @__PURE__ */ h(
                    "div",
                    {
                      className: "relative group rounded-md overflow-hidden border border-gray-200 dark:border-gray-700",
                      children: [
                        /* @__PURE__ */ t(
                          "img",
                          {
                            src: L.preview,
                            alt: "preview",
                            className: "w-full h-28 object-cover"
                          }
                        ),
                        /* @__PURE__ */ h("div", { className: "absolute top-2 right-2 flex items-center gap-1.5 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity", children: [
                          /* @__PURE__ */ t(
                            "button",
                            {
                              type: "button",
                              onClick: () => C(L.id),
                              className: "w-7 h-7 rounded-full bg-white/90 text-gray-800 hover:bg-white flex items-center justify-center shadow",
                              "aria-label": "Replace image",
                              children: /* @__PURE__ */ t(be, { icon: "solar:refresh-bold", className: "w-4 h-4" })
                            }
                          ),
                          b && /* @__PURE__ */ t(
                            "button",
                            {
                              type: "button",
                              onClick: () => se(L),
                              className: "w-7 h-7 rounded-full bg-white/90 text-gray-800 hover:bg-white flex items-center justify-center shadow",
                              "aria-label": "Crop image",
                              children: /* @__PURE__ */ t(be, { icon: "solar:crop-bold", className: "w-4 h-4" })
                            }
                          ),
                          /* @__PURE__ */ t(
                            "button",
                            {
                              type: "button",
                              onClick: () => P(L.id),
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
                    L.id
                  )) })
                ] }),
                s && y && g.length === 0 && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-lg", children: /* @__PURE__ */ t("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg", children: "Drop images here" }) })
              ]
            }
          ),
          l && /* @__PURE__ */ t(
            "span",
            {
              className: x(
                f.field.error,
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
      Wr,
      {
        isOpen: k,
        imageSrc: A,
        fileType: I,
        fileName: T,
        onClose: j,
        onApply: X,
        aspect: Number(c)
      }
    )
  ] });
}, ke = ({
  src: a,
  alt: o = "preview",
  isOpen: e,
  setIsOpen: r
}) => {
  const n = () => r(!1);
  return V(() => {
    const c = (i) => {
      i.key === "Escape" && n();
    };
    return e && (document.body.style.overflow = "hidden", document.addEventListener("keydown", c)), () => {
      document.body.style.overflow = "", document.removeEventListener("keydown", c);
    };
  }, [e]), /* @__PURE__ */ t(Y, { children: /* @__PURE__ */ h(
    "div",
    {
      className: x(
        f.imagePreview.root,
        "fixed inset-0 z-50 flex items-center justify-center bg-black/70 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      ),
      onClick: n,
      children: [
        /* @__PURE__ */ t(
          "button",
          {
            onClick: n,
            className: `absolute top-4 right-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200\r
                     hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-2 shadow-lg transition`,
            children: /* @__PURE__ */ t(ar, { size: 20 })
          }
        ),
        /* @__PURE__ */ t(
          "div",
          {
            className: x(
              f.imagePreview.container,
              "max-w-5xl w-full px-4 transform transition-all duration-200 scale-95 animate-in zoom-in-95"
            ),
            onClick: (c) => c.stopPropagation(),
            children: /* @__PURE__ */ t(
              "img",
              {
                src: a,
                alt: o,
                className: x(
                  f.imagePreview.image,
                  "w-full max-h-[90vh] object-contain rounded-xl"
                )
              }
            )
          }
        )
      ]
    }
  ) });
}, Zr = ({
  col: a,
  data: o,
  uiVariant: e = "default",
  styleConfig: r = {}
}) => {
  const n = o[a.titleKey], c = o[a.subtitleKey], i = o[a.imageKey], s = a.fallback_icon, [b, p] = D(null), [m, u] = D(!1), l = (w) => {
    let y = w;
    w && w.src instanceof File && (y = { ...w, src: URL.createObjectURL(w.src) }), p(y), u(!0);
  }, g = (w) => {
    const S = {
      sm: { img: "w-8 h-8", wrap: "w-8 h-8", icon: "w-4 h-4" },
      md: { img: "w-12 h-12", wrap: "w-12 h-12", icon: "w-6 h-6" },
      lg: { img: "w-16 h-16", wrap: "w-16 h-16", icon: "w-8 h-8" }
    }[w];
    return i ? /* @__PURE__ */ t(
      "img",
      {
        src: i instanceof File ? URL.createObjectURL(i) : i,
        alt: n,
        onClick: () => l({ src: i, alt: n }),
        className: `${S.img} cursor-pointer rounded-full object-cover border-2 border-white dark:border-gray-700 shadow flex-shrink-0`
      }
    ) : s ? s instanceof Function ? s(o) : s : /* @__PURE__ */ t(
      "div",
      {
        className: `${S.wrap} flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-600 flex-shrink-0`,
        children: /* @__PURE__ */ t(wr, { className: `${S.icon} text-gray-400` })
      }
    );
  };
  return e === "card" ? /* @__PURE__ */ h(Y, { children: [
    m && b && /* @__PURE__ */ t(
      ke,
      {
        src: b.src,
        alt: b.alt,
        isOpen: m,
        setIsOpen: u
      }
    ),
    /* @__PURE__ */ h(
      "div",
      {
        className: x(
          f.details.row,
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
                children: n
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
  ] }) : e === "split" ? /* @__PURE__ */ h(Y, { children: [
    m && b && /* @__PURE__ */ t(
      ke,
      {
        src: b.src,
        alt: b.alt,
        isOpen: m,
        setIsOpen: u
      }
    ),
    /* @__PURE__ */ h(
      "div",
      {
        className: x(
          f.details.row,
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
                children: n
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
  ] }) : /* @__PURE__ */ h(Y, { children: [
    m && b && /* @__PURE__ */ t(
      ke,
      {
        src: b.src,
        alt: b.alt,
        isOpen: m,
        setIsOpen: u
      }
    ),
    /* @__PURE__ */ h(
      "div",
      {
        className: x(
          f.details.row,
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
                children: n
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
}, Vr = ({
  col: a,
  data: o,
  uiVariant: e = "default",
  styleConfig: r = {}
}) => {
  const n = o[a.titleKey], c = o[a.subtitleKey], i = o[a.imageKey], s = a.label, b = a == null ? void 0 : a.icon, p = a.fallback_icon, [m, u] = D(null), [l, g] = D(!1), w = (S) => {
    let k = S;
    S && S.src instanceof File && (k = { ...S, src: URL.createObjectURL(S.src) }), u(k), g(!0);
  }, y = () => i ? /* @__PURE__ */ t(
    "img",
    {
      src: i instanceof File ? URL.createObjectURL(i) : i,
      alt: n,
      onClick: () => w({ src: i, alt: n }),
      className: "w-8 h-8 cursor-pointer rounded-full object-cover border-2 border-gray-200 dark:border-gray-700 flex-shrink-0"
    }
  ) : p ? p instanceof Function ? p(o) : p : /* @__PURE__ */ t("div", { className: "w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 flex-shrink-0", children: /* @__PURE__ */ t(wr, { className: "w-5 h-5 text-gray-400" }) });
  return e === "card" ? /* @__PURE__ */ h(Y, { children: [
    l && m && /* @__PURE__ */ t(
      ke,
      {
        src: m.src,
        alt: m.alt,
        isOpen: l,
        setIsOpen: g
      }
    ),
    /* @__PURE__ */ h(
      "div",
      {
        className: x(
          f.details.row,
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
            y(),
            /* @__PURE__ */ h("div", { className: "min-w-0", children: [
              /* @__PURE__ */ t(
                "p",
                {
                  className: `text-sm font-semibold text-gray-800 dark:text-gray-100 truncate ${r.valueClass || ""}`,
                  children: n
                }
              ),
              c && /* @__PURE__ */ t("p", { className: "text-xs text-gray-400 dark:text-gray-500 truncate", children: c })
            ] })
          ] })
        ]
      }
    )
  ] }) : e === "split" ? /* @__PURE__ */ h(Y, { children: [
    l && m && /* @__PURE__ */ t(
      ke,
      {
        src: m.src,
        alt: m.alt,
        isOpen: l,
        setIsOpen: g
      }
    ),
    /* @__PURE__ */ h(
      "div",
      {
        className: x(
          f.details.row,
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
            y(),
            /* @__PURE__ */ h("div", { className: "min-w-0", children: [
              /* @__PURE__ */ t(
                "p",
                {
                  className: `text-sm text-gray-800 dark:text-gray-100 break-words ${r.valueClass || ""}`,
                  children: n
                }
              ),
              c && /* @__PURE__ */ t("p", { className: "text-xs text-gray-400 dark:text-gray-500 truncate", children: c })
            ] })
          ] })
        ]
      }
    )
  ] }) : /* @__PURE__ */ h(Y, { children: [
    l && m && /* @__PURE__ */ t(
      ke,
      {
        src: m.src,
        alt: m.alt,
        isOpen: l,
        setIsOpen: g
      }
    ),
    /* @__PURE__ */ h(
      "div",
      {
        className: x(
          f.details.row,
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
              y(),
              /* @__PURE__ */ h("div", { className: "ml-2", children: [
                /* @__PURE__ */ t(
                  "p",
                  {
                    className: `mb-0 text-sm text-gray-900 dark:text-white break-words ${r.valueClass || ""}`,
                    children: n
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
}, Lr = {
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
}, Pr = {
  contained: "bg",
  outline: "border !bg-transparent",
  soft: "bg opacity-90"
}, Xr = ({
  label: a,
  variant: o = "contained",
  color: e = "green",
  className: r = ""
}) => {
  const n = Lr[e] || Lr.green, c = Pr[o] || Pr.contained, i = o === "outline" ? n.border : n.bg;
  return /* @__PURE__ */ t(
    "span",
    {
      className: x(
        f.chip.root,
        "inline-flex justify-center items-center rounded-sm text-xs font-semibold px-3 py-1 min-w-[78px]",
        i,
        c,
        r
      ),
      children: a
    }
  );
}, Jr = ({
  col: a,
  data: o,
  uiVariant: e = "default",
  styleConfig: r = {}
}) => {
  var k;
  const [n, c] = D(null), [i, s] = D(!1), b = a == null ? void 0 : a.icon, p = a.label;
  let m = o[a.key];
  const u = a.type, l = a.variant || "outline";
  let g = a.defaultColor;
  if (u === "chip" && ((k = a.chipOptions) == null ? void 0 : k.length) > 0) {
    const _ = a == null ? void 0 : a.chipOptions.find((A) => A.value == m);
    _ && (m = _.label, g = _.color);
  }
  const w = (_) => {
    if (!_) return "";
    if (typeof _ == "string") return _;
    if (_ instanceof File) return URL.createObjectURL(_);
    if (typeof _ == "object") {
      if (typeof _.preview == "string") return _.preview;
      if (typeof _.src == "string") return _.src;
      if (_.src instanceof File) return URL.createObjectURL(_.src);
      if (_.file instanceof File) return URL.createObjectURL(_.file);
    }
    return "";
  }, y = (_, A) => {
    c({ src: _, alt: A }), s(!0);
  }, S = (_ = "text-sm text-gray-900 dark:text-white break-words") => u === "chip" ? /* @__PURE__ */ t(Xr, { label: m, variant: l, color: g, className: "mt-1" }) : u === "tinyEditor" ? /* @__PURE__ */ t(
    "p",
    {
      className: `${_} ${r.valueClass || ""}`,
      dangerouslySetInnerHTML: { __html: m }
    }
  ) : u === "audio" ? m ? /* @__PURE__ */ t(
    "audio",
    {
      controls: !0,
      src: m instanceof File ? URL.createObjectURL(m) : m,
      onClick: (A) => A.stopPropagation(),
      className: "shadow-sm rounded-full mt-1 w-full max-w-xs"
    },
    m instanceof File ? URL.createObjectURL(m) : m
  ) : /* @__PURE__ */ t("p", { className: "text-sm text-gray-400", children: "N/A" }) : u === "multiImage" ? Array.isArray(m) && m.length > 0 ? /* @__PURE__ */ t(
    "div",
    {
      className: `mt-1 grid grid-cols-3 sm:grid-cols-4 gap-2 ${r.mediaGridClass || ""}`,
      children: m.map((A, F) => {
        const I = w(A);
        return I ? /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            onClick: () => y(I, `Gallery ${F + 1}`),
            className: "w-full h-16 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-colors",
            children: /* @__PURE__ */ t(
              "img",
              {
                src: I,
                alt: `gallery-${F + 1}`,
                className: "w-full h-full object-cover"
              }
            )
          },
          `${I}-${F}`
        ) : null;
      })
    }
  ) : /* @__PURE__ */ t("p", { className: "text-sm text-gray-400", children: "N/A" }) : /* @__PURE__ */ t("p", { className: `${_} ${r.valueClass || ""}`, children: u === "date" ? /* @__PURE__ */ t("span", { children: ir(m, a.format || "DD MMM YYYY") }) : /* @__PURE__ */ t("span", { children: m || "N/A" }) });
  return e === "card" ? /* @__PURE__ */ h(Y, { children: [
    /* @__PURE__ */ h(
      "div",
      {
        className: x(
          f.details.row,
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
          /* @__PURE__ */ t("div", { className: "mt-auto", children: S(
            "text-sm font-semibold text-gray-800 dark:text-gray-100 break-words leading-snug"
          ) })
        ]
      }
    ),
    i && n && /* @__PURE__ */ t(
      ke,
      {
        src: n.src,
        alt: n.alt,
        isOpen: i,
        setIsOpen: s
      }
    )
  ] }) : e === "split" ? /* @__PURE__ */ h(Y, { children: [
    /* @__PURE__ */ h(
      "div",
      {
        className: x(
          f.details.row,
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
          /* @__PURE__ */ t("div", { className: "flex-1 flex items-center px-4 py-3 bg-white dark:bg-gray-900", children: S(
            "text-sm text-gray-800 dark:text-gray-100 break-words"
          ) })
        ]
      }
    ),
    i && n && /* @__PURE__ */ t(
      ke,
      {
        src: n.src,
        alt: n.alt,
        isOpen: i,
        setIsOpen: s
      }
    )
  ] }) : /* @__PURE__ */ h(Y, { children: [
    /* @__PURE__ */ h(
      "div",
      {
        className: x(
          f.details.row,
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
            S(
              "mt-1 text-sm text-gray-900 dark:text-white break-words"
            )
          ] })
        ]
      }
    ),
    i && n && /* @__PURE__ */ t(
      ke,
      {
        src: n.src,
        alt: n.alt,
        isOpen: i,
        setIsOpen: s
      }
    )
  ] });
}, ta = ({
  value: a = !0,
  onChange: o,
  text: e,
  options: r = [],
  label: n,
  required: c,
  name: i = "",
  disabled: s = !1,
  parentClass: b = "",
  errorMessage: p = ""
}) => {
  const m = r.length > 0 ? r : [
    { label: "Active", value: !0 },
    { label: "Inactive", value: !1 }
  ];
  return /* @__PURE__ */ t(Y, { children: /* @__PURE__ */ h(
    "div",
    {
      className: x(
        f.field.wrapper,
        b || "col-span-12"
      ),
      children: [
        /* @__PURE__ */ t(we, { label: n, required: c }),
        /* @__PURE__ */ h(
          "div",
          {
            className: `flex items-center justify-between h-10 gap-4 bg-gray-100 dark:bg-gray-700 px-3 rounded-md border border-gray-100 dark:border-gray-600
          ${p ? "border-red-500" : ""}`,
            children: [
              e && /* @__PURE__ */ t("p", { className: "text-xs text-gray-600 dark:text-gray-400 flex-shrink overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px]", children: e }),
              /* @__PURE__ */ t("div", { className: "flex items-center gap-6", children: m.map((u, l) => /* @__PURE__ */ h(
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
                        value: String(u.value),
                        disabled: s,
                        id: `field-${i}`,
                        checked: a === u.value,
                        onChange: () => o == null ? void 0 : o(u.value),
                        className: x(
                          f.field.input,
                          "w-4 h-4 border-gray-300 cursor-pointer"
                        )
                      }
                    ),
                    /* @__PURE__ */ t("span", { className: "text-sm text-gray-700 dark:text-white", children: u.label })
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
              f.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: p
          }
        )
      ]
    },
    i
  ) });
}, Ar = ge, aa = ({
  label: a = "",
  value: o = null,
  onChange: e,
  required: r = !1,
  accept: n = "video/*",
  id: c,
  dragDrop: i = !1,
  name: s = "",
  parentClass: b = "",
  maxSize: p = 0,
  errorMessage: m = ""
}) => {
  const [u, l] = D(
    null
  ), [g, w] = D(!1), y = de(null), S = p * 1024 * 1024;
  V(() => {
    if (!o) {
      k(), l(null);
      return;
    }
    if (o instanceof File) {
      const v = URL.createObjectURL(o);
      return l({ file: o, preview: v }), () => {
        URL.revokeObjectURL(v);
      };
    } else typeof o == "string" ? l({ preview: o }) : o != null && o.preview && l(o);
  }, [o]);
  const k = () => {
    u != null && u.preview && u.preview.startsWith("blob:") && URL.revokeObjectURL(u.preview);
  }, _ = (v) => {
    if (!v || v.length === 0) return;
    const R = v[0];
    if (S && R.size > S) {
      De(
        `File is too large. Maximum allowed size is ${p} MB`,
        {
          variant: "warning"
        }
      );
      return;
    }
    const M = URL.createObjectURL(R);
    k(), l({ file: R, preview: M }), e == null || e(R);
  }, A = (v) => {
    v && v.stopPropagation(), k(), l(null), e == null || e(null), y.current && (y.current.value = "");
  }, F = (v) => {
    i && (v.preventDefault(), w(!0));
  }, I = (v) => {
    i && (v.preventDefault(), w(!1));
  }, E = (v) => {
    var R, M, z, G;
    i && (v.preventDefault(), w(!1), (G = (z = (M = (R = v.dataTransfer) == null ? void 0 : R.files) == null ? void 0 : M[0]) == null ? void 0 : z.type) != null && G.includes("video/") && _(v.dataTransfer.files));
  }, T = () => {
    var v;
    (v = y.current) == null || v.click();
  };
  return /* @__PURE__ */ h(
    "div",
    {
      className: x(
        f.mediaPicker.video,
        f.field.wrapper,
        b || "col-span-12"
      ),
      children: [
        /* @__PURE__ */ t(we, { label: a, required: r }),
        /* @__PURE__ */ h(
          "div",
          {
            className: x(
              f.mediaPicker.dropzone,
              "relative rounded-lg p-2 transition-all",
              g ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800",
              m ? "border-red-500" : ""
            ),
            onDragOver: F,
            onDragLeave: I,
            onDrop: E,
            id: `field-${s}`,
            children: [
              /* @__PURE__ */ t(
                "input",
                {
                  ref: y,
                  id: c,
                  type: "file",
                  accept: n,
                  onChange: (v) => _(v.target.files),
                  required: r && !u,
                  className: "absolute opacity-0 pointer-events-none h-[10px]"
                }
              ),
              /* @__PURE__ */ t(
                "div",
                {
                  className: `flex items-center space-x-4 transition-all ${g ? "opacity-50" : ""}`,
                  children: u ? /* @__PURE__ */ h("div", { className: "flex items-center space-x-4", children: [
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
                          src: u.preview,
                          controls: !0,
                          controlsList: "nodownload",
                          className: "w-[260px] h-[150px] rounded-md object-cover"
                        },
                        u.preview
                      )
                    ] }),
                    /* @__PURE__ */ t(Ar, { type: "button", onClick: T, children: "Change Video File" })
                  ] }) : /* @__PURE__ */ h("div", { className: "flex items-center justify-center space-x-4", children: [
                    /* @__PURE__ */ t("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ t(be, { icon: "mdi:video", className: "text-gray-400 w-10 h-10" }) }),
                    /* @__PURE__ */ h("div", { className: "flex flex-col items-center space-y-1", children: [
                      /* @__PURE__ */ t(
                        Ar,
                        {
                          type: "button",
                          onClick: T,
                          variant: "outlined",
                          children: "Choose Video File"
                        }
                      ),
                      i && /* @__PURE__ */ t("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop your video here" })
                    ] })
                  ] })
                }
              ),
              i && g && !u && /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-lg", children: /* @__PURE__ */ t("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg", children: "Drop video here" }) })
            ]
          }
        ),
        m && /* @__PURE__ */ t(
          "span",
          {
            className: x(
              f.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: m
          }
        )
      ]
    },
    s
  );
}, qr = ({
  field: a,
  formData: o,
  handleChange: e,
  errorMessage: r
}) => {
  const {
    key: n,
    label: c,
    type: i,
    options: s,
    placeholder: b,
    rows: p,
    inputClass: m,
    search: u,
    accept: l,
    text: g,
    required: w = !1,
    minLength: y,
    dragDrop: S,
    parentClass: k,
    countriesList: _,
    defaultCountry: A,
    multiple: F,
    dropdownMaxHeight: I,
    editorKey: E,
    fontFamily: T,
    disabled: v,
    negativeNumberAllow: R,
    defaultValue: M,
    renderCondition: z,
    pattern: G,
    renderType: K,
    cropImage: te,
    aspectRatio: ae,
    dependencyKey: j,
    mask: se,
    maskApplyOnValue: X,
    maxSize: re
  } = a;
  let P = o == null ? void 0 : o[n];
  P == null && (P = "");
  const C = b || (i === "select" ? `Select ${c}` : `Enter ${c}`), W = "w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm focus:outline-none focus:ring-1 focus:ring-blue-200 bg-white text-black dark:bg-gray-700 dark:text-white";
  if (z && typeof z == "function" && !z(o))
    return null;
  if (K && K == "details")
    switch (i) {
      case "group":
        return /* @__PURE__ */ t(Zr, { col: a, data: o });
      case "cardGroup":
        return /* @__PURE__ */ t(Vr, { col: a, data: o });
      default:
        return /* @__PURE__ */ t(Jr, { col: a, data: o });
    }
  switch (i) {
    case "select":
      return /* @__PURE__ */ t(
        wt,
        {
          options: s || [],
          value: P,
          formData: o,
          dependencyKey: j,
          onChange: (U) => e(n, U),
          placeholder: C,
          className: m || "",
          search: u,
          required: w,
          defaultValue: M,
          label: c || "",
          name: n,
          countriesList: _,
          disabled: v,
          parentClass: k || "",
          multiple: F,
          dropdownMaxHeight: I,
          errorMessage: r
        }
      );
    case "checkbox":
      return /* @__PURE__ */ t(Y, { children: /* @__PURE__ */ t(
        qt,
        {
          name: n,
          label: c || "",
          options: s || [],
          value: P,
          onChange: (U) => e(n, U),
          required: w,
          parentClass: k || "",
          className: m || "",
          multiSelect: F,
          disabled: v,
          errorMessage: r
        }
      ) });
    case "radio":
      return /* @__PURE__ */ t(
        ta,
        {
          value: P,
          onChange: (U) => e(n, U),
          text: g,
          options: s || [],
          label: c || "",
          required: w,
          name: n,
          disabled: v,
          parentClass: k || "",
          errorMessage: r
        }
      );
    case "switch":
      return /* @__PURE__ */ t(
        Ir,
        {
          value: !!P,
          onChange: (U) => e(n, U),
          label: c || "",
          required: w,
          name: n,
          disabled: v,
          className: "",
          parentClass: k || "",
          errorMessage: r
        }
      );
    case "phone":
      return /* @__PURE__ */ t(
        ft,
        {
          value: P,
          onChange: (U) => e(n, U),
          countriesList: _,
          defaultCountry: A,
          required: w,
          placeholder: C,
          search: u,
          label: c || "",
          name: n,
          disabled: v,
          errorMessage: r,
          parentClass: k || ""
        }
      );
    case "textarea":
      return /* @__PURE__ */ t(
        Ur,
        {
          value: P,
          onChange: (U) => e(n, U.target.value),
          placeholder: C,
          rows: p || 3,
          className: `${W} ${m || ""}`,
          required: w,
          name: n,
          label: c || "",
          disabled: v,
          parentClass: k || "",
          errorMessage: r
        }
      );
    case "image":
    case "multiImage":
      return F || i === "multiImage" ? /* @__PURE__ */ t(
        ra,
        {
          value: Array.isArray(P) ? P : [],
          onChange: (U) => e(n, U),
          required: w,
          accept: l || "image/*",
          aspect: ae,
          id: `file-${n}`,
          dragDrop: S,
          cropImage: te,
          label: c || "",
          name: n,
          parentClass: k || "",
          maxImages: a.maxImages,
          errorMessage: r
        }
      ) : /* @__PURE__ */ t(
        Xt,
        {
          value: P,
          onChange: (U) => e(n, U),
          required: w,
          accept: l || "image/*",
          aspect: ae,
          id: `file-${n}`,
          dragDrop: S,
          cropImage: te,
          label: c || "",
          name: n,
          parentClass: k || "",
          errorMessage: r
        }
      );
    case "audio":
      return /* @__PURE__ */ t(
        Qt,
        {
          value: P,
          onChange: (U) => e(n, U),
          required: w,
          accept: l || "audio/*",
          id: `file-${n}`,
          dragDrop: S,
          label: c || "",
          name: n,
          parentClass: k || "",
          maxSize: re,
          errorMessage: r
        }
      );
    case "video":
      return /* @__PURE__ */ t(
        aa,
        {
          value: P,
          onChange: (U) => e(n, U),
          required: w,
          accept: l || "video/*",
          id: `file-${n}`,
          dragDrop: S,
          label: c || "",
          name: n,
          maxSize: re,
          parentClass: k || "",
          errorMessage: r
        }
      );
    case "tinyEditor":
      return /* @__PURE__ */ t(
        Jt,
        {
          value: P,
          name: n,
          onChange: (U) => e(n, U),
          required: w,
          placeholder: C,
          label: c || "",
          parentClass: k || "",
          fontFamily: T,
          editorKey: E || "",
          disabled: v,
          errorMessage: r
        }
      );
    default:
      return /* @__PURE__ */ t(
        Hr,
        {
          field: a,
          type: i || "text",
          defaultValue: M,
          value: P,
          onChange: (U) => e(n, U),
          placeholder: C,
          className: `${W} ${m || ""}`,
          required: w,
          name: n,
          minLength: y,
          label: c || "",
          negativeNumberAllow: R,
          parentClass: k || "",
          disabled: v,
          pattern: G,
          mask: se,
          errorMessage: r,
          maskApplyOnValue: X
        }
      );
  }
}, oa = ({
  isOpen: a,
  onClose: o,
  config: e,
  onApply: r
}) => {
  var m;
  const [n, c] = D({}), i = (u, l) => {
    c((g) => ({ ...g, [u]: l }));
  }, s = () => {
    r(n), o();
  }, b = () => {
    c({}), r({}), o();
  }, p = e == null ? void 0 : e.component;
  return /* @__PURE__ */ h(Y, { children: [
    /* @__PURE__ */ t(
      "div",
      {
        className: x(
          f.filterDrawer.overlay,
          "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300",
          a ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        ),
        onClick: o
      }
    ),
    /* @__PURE__ */ h(
      "div",
      {
        className: x(
          f.filterDrawer.panel,
          "fixed top-0 right-0 h-full w-[28rem] bg-white dark:bg-gray-900 shadow-2xl z-50 flex flex-col border-l border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out",
          a ? "translate-x-0" : "translate-x-full"
        ),
        children: [
          /* @__PURE__ */ h(
            "div",
            {
              className: x(
                f.filterDrawer.header,
                "flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700"
              ),
              children: [
                /* @__PURE__ */ t("h2", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: "Filters" }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: o,
                    className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition",
                    children: /* @__PURE__ */ t(ar, { className: "w-5 h-5 text-gray-500 dark:text-gray-400" })
                  }
                )
              ]
            }
          ),
          a && /* @__PURE__ */ t(
            "div",
            {
              className: x(
                f.filterDrawer.body,
                "flex-1 overflow-y-auto px-4 py-3"
              ),
              children: p ? /* @__PURE__ */ t(
                p,
                {
                  filters: n,
                  onFilterChange: i
                }
              ) : /* @__PURE__ */ t("div", { className: "space-y-4", children: (m = e == null ? void 0 : e.fields) == null ? void 0 : m.map((u) => /* @__PURE__ */ t(
                qr,
                {
                  field: u,
                  formData: n,
                  handleChange: i
                },
                u.key
              )) })
            }
          ),
          /* @__PURE__ */ h(
            "div",
            {
              className: x(
                f.filterDrawer.footer,
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
}, na = ({ rows: a = 5, columns: o = 5 }) => /* @__PURE__ */ h(Y, { children: [
  /* @__PURE__ */ t("div", { className: "w-full mb-6 inline-flex justify-end items-center", children: /* @__PURE__ */ t("div", { className: "h-8 w-80 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }),
  /* @__PURE__ */ t("div", { className: "overflow-hidden rounded-md border border-gray-200 dark:border-gray-800", children: /* @__PURE__ */ h(
    "table",
    {
      className: x(
        f.tableSkeleton.root,
        f.tableSkeleton.table,
        "w-full border-collapse"
      ),
      children: [
        /* @__PURE__ */ t("thead", { children: /* @__PURE__ */ t("tr", { className: "bg-gray-50 dark:bg-gray-900", children: Array.from({ length: o }).map((e, r) => /* @__PURE__ */ t("th", { className: "px-4 py-3", children: /* @__PURE__ */ t("div", { className: "h-6 w-24 bg-gray-300 dark:bg-gray-700 rounded animate-pulse  inline-flex justify-center items-center" }) }, r)) }) }),
        /* @__PURE__ */ t("tbody", { children: Array.from({ length: a }).map((e, r) => /* @__PURE__ */ t(
          "tr",
          {
            className: "border-t border-gray-200 dark:border-gray-800",
            children: Array.from({ length: o }).map((n, c) => /* @__PURE__ */ t("td", { className: "px-4 py-6", children: /* @__PURE__ */ t("div", { className: "h-6 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }, c))
          },
          r
        )) })
      ]
    }
  ) })
] }), ia = ({
  options: a = [],
  value: o = "",
  onChange: e,
  clearLabel: r = ""
}) => {
  const [n, c] = D(!1), i = de(null), s = !!o;
  V(() => {
    const p = (m) => {
      i.current && !i.current.contains(m.target) && c(!1);
    };
    return document.addEventListener("click", p), () => document.removeEventListener("click", p);
  }, []);
  const b = (p) => {
    const m = a.find((u) => u.value === p);
    e(p, m || null), c(!1);
  };
  return a != null && a.length ? /* @__PURE__ */ h(
    "div",
    {
      className: x(f.sortDropdown.root, "relative"),
      ref: i,
      children: [
        /* @__PURE__ */ h(
          "button",
          {
            type: "button",
            onClick: () => c((p) => !p),
            className: x(
              f.sortDropdown.trigger,
              "relative inline-flex items-center justify-center h-[36px] w-[36px] rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
            ),
            "aria-label": "Open sort options",
            children: [
              /* @__PURE__ */ t(at, { className: "w-4 h-4" }),
              s && /* @__PURE__ */ t("span", { className: "absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" })
            ]
          }
        ),
        n && /* @__PURE__ */ h(
          "div",
          {
            className: x(
              f.sortDropdown.menu,
              "absolute right-0 mt-2 z-20 min-w-[220px] max-h-[260px] overflow-auto rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg"
            ),
            children: [
              !!(r != null && r.trim()) && /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  onClick: () => b(""),
                  className: x(
                    f.sortDropdown.item,
                    "w-full text-left px-3 py-2 text-sm transition hover:bg-gray-100 dark:hover:bg-gray-700",
                    o ? "text-gray-700 dark:text-gray-200" : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
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
                    f.sortDropdown.item,
                    "w-full text-left px-3 py-2 text-sm transition hover:bg-gray-100 dark:hover:bg-gray-700",
                    o === p.value ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white" : "text-gray-700 dark:text-gray-200"
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
}, ca = (a) => a === !0 ? { ...nr, enabled: !0 } : !a || typeof a != "object" ? nr : {
  ...nr,
  ...a,
  enabled: a.enabled ?? !0,
  autoGenerate: a.autoGenerate ?? !0
}, la = (a = []) => a.filter((o) => {
  const e = ["menu_actions", "index", "audio", "avatar"];
  return o.type && e.includes(o.type) ? !1 : !!(o.sortKey || (o.type === "group" ? o.titleKey : o.key));
}), sa = (a) => {
  if (a.sortType) return a.sortType;
  if (a.type === "date") return "date";
  if (a.type === "number") return "number";
  const o = String(
    a.sortKey || (a.type === "group" ? a.titleKey : a.key) || ""
  ).toLowerCase();
  return ["phone", "mobile", "contact", "tel", "whatsapp"].some(
    (r) => o.includes(r)
  ) ? "phone" : Array.isArray(a.chipOptions) && a.chipOptions.length > 0 && a.chipOptions.every(
    (n) => typeof n.value == "boolean"
  ) ? "boolean" : "string";
}, Er = (a = []) => a.flatMap((o) => {
  const e = o.sortKey || (o.type === "group" ? o.titleKey : o.key), r = o.sortLabel || o.title || e, n = sa(o);
  return e ? n === "number" ? [
    {
      value: `${e}_asc`,
      label: `${r} (Low-High)`,
      key: e,
      order: "asc",
      type: n
    },
    {
      value: `${e}_desc`,
      label: `${r} (High-Low)`,
      key: e,
      order: "desc",
      type: n
    }
  ] : n === "phone" ? [
    {
      value: `${e}_asc`,
      label: `${r} (0-9)`,
      key: e,
      order: "asc",
      type: n
    },
    {
      value: `${e}_desc`,
      label: `${r} (9-0)`,
      key: e,
      order: "desc",
      type: n
    }
  ] : n === "date" ? [
    {
      value: `${e}_desc`,
      label: `${r} (Newest First)`,
      key: e,
      order: "desc",
      type: n
    },
    {
      value: `${e}_asc`,
      label: `${r} (Oldest First)`,
      key: e,
      order: "asc",
      type: n
    }
  ] : n === "boolean" ? [
    {
      value: `${e}_desc`,
      label: `${r} (True First)`,
      key: e,
      order: "desc",
      type: n
    },
    {
      value: `${e}_asc`,
      label: `${r} (False First)`,
      key: e,
      order: "asc",
      type: n
    }
  ] : [
    {
      value: `${e}_asc`,
      label: `${r} (A-Z)`,
      key: e,
      order: "asc",
      type: n
    },
    {
      value: `${e}_desc`,
      label: `${r} (Z-A)`,
      key: e,
      order: "desc",
      type: n
    }
  ] : [];
}), da = (a, o = []) => {
  if (Array.isArray(a.options) && a.options.length > 0)
    return a.options.map((n) => ({
      ...n,
      type: n.type || "string",
      order: n.order === "desc" ? "desc" : "asc"
    }));
  const r = Array.isArray(a.fields) ? a.fields : [];
  if (r.length > 0) {
    const n = r.map((c) => {
      const i = typeof c == "string" ? c : c.key, s = o.find(
        (b) => b.key === i || b.sortKey === i || b.type === "group" && b.titleKey === i
      );
      return s ? {
        ...s,
        sortKey: typeof c == "object" && c.key ? c.key : s.sortKey,
        sortType: typeof c == "object" && c.type ? c.type : s.sortType,
        sortLabel: typeof c == "object" && c.label ? c.label : s.sortLabel
      } : null;
    }).filter((c) => c !== null);
    return Er(n);
  }
  return a.autoGenerate ? Er(o) : [];
}, pa = (a = [], o = "", e, r = []) => {
  if (!(e != null && e.enabled) || !o || e != null && e.useServerSideSorting)
    return a;
  const n = r == null ? void 0 : r.find(
    (p) => p.value === o
  );
  if (!(n != null && n.key))
    return a;
  const c = n.order === "desc" ? "desc" : "asc", i = n.key, s = n.type || "string", b = (p) => String(p ?? "").replace(/[^\d]/g, "").trim();
  return [...a].sort((p, m) => {
    const u = p == null ? void 0 : p[i], l = m == null ? void 0 : m[i];
    if (u == null && l == null) return 0;
    if (u == null) return c === "asc" ? 1 : -1;
    if (l == null) return c === "asc" ? -1 : 1;
    let g = 0;
    return s === "number" ? g = Number(u) - Number(l) : s === "phone" ? g = b(u).localeCompare(
      b(l),
      void 0,
      {
        numeric: !0
      }
    ) : s === "date" ? g = new Date(u).getTime() - new Date(l).getTime() : s === "boolean" ? g = +!!u - +!!l : g = String(u).localeCompare(String(l)), c === "asc" ? g : -g;
  });
}, ua = ({
  config: a,
  setShowAdd: o,
  title: e,
  buttonText: r,
  description: n,
  showAddButton: c
}) => {
  const {
    data: i = [],
    table_head: s = [],
    loading: b = !1,
    search: p = {
      enabled: !1,
      placeholder: "Search...",
      useServerSideSearch: !1
    },
    filter: m = {
      enabled: !1,
      useServerSideFilters: !1
    },
    sort: u = { enabled: !1 },
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
    emptyMessage: w = "No data available",
    onMenuAction: y,
    setServerSidePaginationData: S = () => {
    },
    onFilterApply: k,
    filterConfig: _ = null,
    rowClick: A = null
  } = a, [F, I] = D(""), [E, T] = D(null), [v, R] = D([]), [M, z] = D({ top: 0, left: 0 }), [G, K] = D(!1), [te, ae] = D({}), j = Ce(() => ca(u), [u]), se = Ce(
    () => la(s),
    [s]
  ), X = Ce(() => da(j, se), [j, se]), [re, P] = D(
    (j == null ? void 0 : j.defaultValue) || ""
  ), [C, W] = D(null), [U, pe] = D(!1), ve = Ce(() => !p.enabled || !F.trim() || p.useServerSideSearch ? i : gt(i, F, p.searchKeys || []), [i, F, p]), fe = Ce(() => pa(
    ve,
    re,
    j,
    X
  ), [ve, re, j, X]), [ce, L] = D(1), [$, q] = D((l == null ? void 0 : l.rows_per_page) || 50), [Q, H] = D(ve.length || 0), oe = l != null && l.useServerSidePagination ? l.total_pages : Math.ceil(ve.length / $), Le = Ce(() => {
    if (l.useServerSidePagination) return fe;
    const d = (ce - 1) * $;
    return fe.slice(d, d + $);
  }, [fe, ce, $, l.useServerSidePagination]), Pe = de(null), je = de({}), Ae = de(null), $e = (d) => {
    I(d), L(1), p.useServerSideSearch && (Ae.current && clearTimeout(Ae.current), Ae.current = setTimeout(async () => {
      try {
        await S((N) => ({
          ...N,
          search: d,
          current_page: 1
        }));
      } catch (N) {
        console.error("Search error:", N);
      }
    }, 800));
  }, Be = (d, N = null) => {
    P(d), L(1);
    const B = {
      value: d,
      option: N,
      key: (N == null ? void 0 : N.key) || "",
      order: (N == null ? void 0 : N.order) || "",
      type: (N == null ? void 0 : N.type) || ""
    };
    typeof (j == null ? void 0 : j.onChange) == "function" && j.onChange(B);
  }, Ge = (d, N, B) => {
    B.stopPropagation(), T(null), y == null || y(d.type, N);
  }, Ye = (d, N, B) => {
    N.stopPropagation(), R(B);
    const J = N.currentTarget;
    je.current[d] = J;
    const ee = J.getBoundingClientRect(), ue = 192, ye = B.length * 40, he = window.innerWidth, xe = window.innerHeight, Se = he - ee.right < ue ? ee.left - ue + ee.width : ee.left, Fe = xe - ee.bottom < ye && ee.top > ye ? ee.top - ye - 2 : ee.bottom + 2;
    z({
      top: Math.max(8, Math.min(Fe, xe - ye - 8)),
      left: Math.max(8, Math.min(Se, he - ue - 8))
    }), T(E === d ? null : d);
  }, Ke = (d) => (ce - 1) * $ + d + 1, ze = (d) => {
    let N = d;
    N && N.src instanceof File && (N = { ...N, src: URL.createObjectURL(N.src) }), W(N), pe(!0);
  }, We = (d) => {
    if (!d) return "";
    if (typeof d == "string")
      return d;
    if (d instanceof File)
      return URL.createObjectURL(d);
    if (typeof d == "object") {
      if (typeof d.preview == "string")
        return d.preview;
      if (typeof d.src == "string")
        return d.src;
      if (d.src instanceof File)
        return URL.createObjectURL(d.src);
      if (d.file instanceof File)
        return URL.createObjectURL(d.file);
    }
    return "";
  }, He = (d, N) => {
    const B = Array.isArray(d) ? d : [];
    if (B.length === 0)
      return /* @__PURE__ */ t("span", { className: N.className || "", children: "N/A" });
    const J = N.maxPreview || 3, ee = B.slice(0, J), ue = B.length - ee.length;
    return /* @__PURE__ */ h("div", { className: "flex items-center", children: [
      /* @__PURE__ */ t("div", { className: "flex -space-x-2", children: ee.map((ye, he) => {
        const xe = We(ye);
        return xe ? /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            onClick: (Ue) => {
              Ue.stopPropagation(), ze({ src: xe, alt: `Gallery ${he + 1}` });
            },
            className: "w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden",
            children: /* @__PURE__ */ t(
              "img",
              {
                src: xe,
                alt: `gallery-${he + 1}`,
                className: "w-full h-full object-cover"
              }
            )
          },
          `${xe}-${he}`
        ) : null;
      }) }),
      ue > 0 && /* @__PURE__ */ h("span", { className: "ml-2 text-xs font-medium text-gray-600 dark:text-gray-300", children: [
        "+",
        ue
      ] })
    ] });
  }, Ie = (d, N, B, J = null, ee = null) => /* @__PURE__ */ t(Y, { children: d ? /* @__PURE__ */ t(
    "img",
    {
      src: d instanceof File ? URL.createObjectURL(d) : d,
      alt: N || "Avatar",
      onClick: (ue) => {
        ue.stopPropagation(), ue.preventDefault(), ze({ src: d, alt: N });
      },
      className: `w-10 h-10 cursor-pointer shrink-0 rounded-full object-cover border border-gray-200 dark:border-gray-700 ${B || ""}`
    }
  ) : /* @__PURE__ */ t(Y, { children: J ? typeof J == "function" ? J(ee) : J : /* @__PURE__ */ t(
    "div",
    {
      className: `w-10 h-10 flex items-center shrink-0 justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${B || ""}`,
      children: /* @__PURE__ */ t(wr, { className: "w-6 h-6 text-gray-400 dark:text-gray-400" })
    }
  ) }) }), Ze = (d, N) => /* @__PURE__ */ t(Y, { children: d ? /* @__PURE__ */ t(
    "audio",
    {
      controls: !0,
      src: d instanceof File ? URL.createObjectURL(d) : d,
      onClick: (B) => {
        B.stopPropagation();
      },
      className: `w-64 cursor-pointer ${N || ""}`
    },
    d instanceof File ? URL.createObjectURL(d) : d
  ) : /* @__PURE__ */ t(Y, { children: /* @__PURE__ */ t(
    "div",
    {
      className: `w-12 h-12 flex items-center shrink-0 justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${N || ""}`,
      children: /* @__PURE__ */ t(dt, { className: "w-6 h-6 text-gray-400 dark:text-gray-400" })
    }
  ) }) }), Ve = (d, N) => /* @__PURE__ */ h("div", { className: `flex items-center space-x-4 ${N.className || ""}`, children: [
    N.imageKey ? Ie(
      d[N.imageKey],
      d[N.titleKey],
      "group-avatar",
      N.fallback_icon,
      d
    ) : "",
    /* @__PURE__ */ h("div", { children: [
      /* @__PURE__ */ t("p", { className: "font-medium text-gray-900 dark:text-white group-title", children: d[N.titleKey] || "" }),
      /* @__PURE__ */ t("p", { className: "text-sm text-gray-500 dark:text-gray-400 group-sub-title", children: d[N.subtitleKey] || "" })
    ] })
  ] }), Xe = (d, N) => {
    var ue;
    let B = String(d);
    const J = N.variant || "contained";
    let ee = N.defaultColor;
    if (((ue = N == null ? void 0 : N.chipOptions) == null ? void 0 : ue.length) > 0) {
      const ye = N == null ? void 0 : N.chipOptions.find((he) => he.value == d);
      ye && (B = ye.label, ee = ye.color);
    }
    return /* @__PURE__ */ t(
      Xr,
      {
        label: B,
        variant: J,
        color: ee,
        className: N.className || ""
      }
    );
  }, O = (d, N, B) => {
    const J = N[d.key];
    return d.type === "menu_actions" ? /* @__PURE__ */ t("div", { className: `text-center ${d.className || ""}`, children: /* @__PURE__ */ t(
      "button",
      {
        ref: (ee) => {
          je.current[N.id || N._id] = ee;
        },
        onClick: (ee) => Ye(N.id || N._id, ee, d.menuList),
        className: x(
          f.table.actionButton,
          "p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition text-gray-700 dark:text-gray-300"
        ),
        children: /* @__PURE__ */ t(st, { className: "h-4 w-4" })
      }
    ) }) : d.type === "index" ? /* @__PURE__ */ t("span", { className: d.className || "", children: Ke(B) }) : d.type === "group" ? Ve(N, d) : d.type === "chip" ? /* @__PURE__ */ t(Y, { children: Xe(J, d) }) : d.type === "date" ? /* @__PURE__ */ t("span", { className: d.className || "", children: ir(J, d.format || "DD MMM YYYY") }) : d.type === "avatar" ? /* @__PURE__ */ t(Y, { children: /* @__PURE__ */ t("div", { className: "min-w-[40px]", children: Ie(
      J,
      d.alt,
      d.className,
      d.fallback_icon,
      N
    ) }) }) : d.type === "audio" ? /* @__PURE__ */ t(Y, { children: Ze(J, d.className) }) : d.type === "multiImage" ? /* @__PURE__ */ t(Y, { children: He(J, d) }) : /* @__PURE__ */ t("span", { className: d.className || "", children: J || "N/A" });
  }, Z = (d) => {
    if (typeof A == "function")
      return A(d);
    if (A)
      return y == null ? void 0 : y("view", d);
  }, ne = (d, N) => {
    if (d.onClickDetails)
      return y == null ? void 0 : y("view", N);
    if (typeof d.handleClick == "function")
      return d.handleClick(N);
  }, Ne = () => A || typeof A == "function", ie = (d) => d.onClickDetails || typeof d.handleClick == "function", Qr = () => {
    var Ue;
    if (!(i != null && i.length) || !((Ue = g == null ? void 0 : g.fields) != null && Ue.length)) return;
    const d = g.fields.map((Se) => Se.label), N = Le.map(
      (Se) => g.fields.map((fr) => {
        const Fe = Se == null ? void 0 : Se[fr.key];
        return `"${Fe ?? ""}"`;
      })
    ), B = [
      d.join(","),
      ...N.map((Se) => Se.join(","))
    ].join(`
`), ee = `export-${ir(/* @__PURE__ */ new Date(), "YYYY-MM-DD_HH-mm-ss")}.csv`, ue = g.fileName || ee, ye = new Blob([B], { type: "text/csv;charset=utf-8;" }), he = document.createElement("a"), xe = URL.createObjectURL(ye);
    he.href = xe, he.download = ue, document.body.appendChild(he), he.click(), document.body.removeChild(he), URL.revokeObjectURL(xe);
  };
  return V(() => {
    const d = () => {
      E && T(null);
    };
    return window.addEventListener("scroll", d, !0), () => {
      window.removeEventListener("scroll", d, !0);
    };
  }, [E]), V(() => {
    const d = (N) => {
      Pe.current && !Pe.current.contains(N.target) && T(null);
    };
    return document.addEventListener("click", d), () => document.removeEventListener("click", d);
  }, []), V(() => {
    l != null && l.rows_per_page && (l != null && l.useServerSidePagination) && q((l == null ? void 0 : l.rows_per_page) || 50), l.current_page && L(l.current_page);
  }, [
    l.rows_per_page,
    l == null ? void 0 : l.useServerSidePagination,
    l.current_page
  ]), V(() => {
    H(
      l != null && l.useServerSidePagination ? l.total_records : fe.length
    ), fe.length <= $ * (ce - 1) && !(l != null && l.useServerSidePagination) && L((d) => d - 1 || 1);
  }, [
    fe.length,
    l.total_records,
    l == null ? void 0 : l.useServerSidePagination
  ]), V(() => {
    if (!(j != null && j.enabled)) {
      P("");
      return;
    }
    if (X.some(
      (N) => N.value === j.defaultValue
    )) {
      P(j.defaultValue);
      return;
    }
    P("");
  }, [j, X]), V(() => {
    if (!(j != null && j.enabled) || !(j != null && j.useServerSideSorting))
      return;
    const d = X == null ? void 0 : X.find(
      (N) => N.value === re
    );
    S((N) => ({
      ...N,
      current_page: 1,
      sort_by: (d == null ? void 0 : d.key) || "",
      sort_order: (d == null ? void 0 : d.order) || ""
    }));
  }, [
    re,
    j == null ? void 0 : j.enabled,
    j == null ? void 0 : j.useServerSideSorting,
    X,
    S
  ]), /* @__PURE__ */ h(Y, { children: [
    b ? /* @__PURE__ */ t(na, { rows: 6, columns: 6 }) : /* @__PURE__ */ h(Y, { children: [
      /* @__PURE__ */ h(
        "div",
        {
          className: x(
            f.table.toolbar,
            "flex flex-col lg:!flex-row lg:!justify-between gap-4 mb-3"
          ),
          children: [
            /* @__PURE__ */ h("div", { className: "table-heading", children: [
              /* @__PURE__ */ t("h1", { children: e }),
              /* @__PURE__ */ t("p", { children: n })
            ] }),
            /* @__PURE__ */ h("div", { className: "flex flex-col justify-end items-stretch lg:!items-end gap-2 w-full lg:!w-auto", children: [
              c && /* @__PURE__ */ h(
                ge,
                {
                  onClick: () => o(!0),
                  variant: "contained",
                  color: "primary",
                  children: [
                    /* @__PURE__ */ t(ot, { className: "w-4 h-4 mr-2" }),
                    r || "Add New"
                  ]
                }
              ),
              /* @__PURE__ */ h("div", { className: "flex flex-col sm:!flex-row sm:!flex-wrap justify-end items-stretch sm:!items-center gap-2 w-full", children: [
                p.enabled && /* @__PURE__ */ t("div", { className: "w-full sm:!w-auto", children: /* @__PURE__ */ h(
                  "div",
                  {
                    className: x(
                      f.table.searchField,
                      "table-search-field"
                    ),
                    children: [
                      /* @__PURE__ */ t(gr, { className: "search-icon" }),
                      /* @__PURE__ */ t(
                        "input",
                        {
                          type: "text",
                          placeholder: p.placeholder || "Search...",
                          value: F,
                          onChange: (d) => $e(d.target.value),
                          className: f.table.searchInput
                        }
                      )
                    ]
                  }
                ) }),
                j != null && j.enabled && (X == null ? void 0 : X.length) > 0 || _ && m.enabled || g && g.enabled ? /* @__PURE__ */ h("div", { className: "flex items-center justify-end gap-2 w-full sm:!w-auto", children: [
                  _ && m.enabled && /* @__PURE__ */ h("div", { className: "filter-button-wrapper", children: [
                    /* @__PURE__ */ h(
                      ge,
                      {
                        onClick: () => K(!0),
                        variant: "contained",
                        className: "w-full sm:!w-auto",
                        children: [
                          /* @__PURE__ */ t(nt, { className: "w-4 h-4 mr-2" }),
                          "Filters"
                        ]
                      }
                    ),
                    Object.keys(te).length > 0 && /* @__PURE__ */ t("span", { className: "red-dot" })
                  ] }),
                  g && g.enabled && /* @__PURE__ */ t("div", { className: "filter-button-wrapper", children: /* @__PURE__ */ h(
                    ge,
                    {
                      onClick: () => Qr(),
                      variant: "contained",
                      className: "w-full sm:!w-auto",
                      children: [
                        /* @__PURE__ */ t(it, { className: "w-4 h-4 mr-2" }),
                        "Export CSV"
                      ]
                    }
                  ) }),
                  (j == null ? void 0 : j.enabled) && (X == null ? void 0 : X.length) > 0 && /* @__PURE__ */ t(
                    ia,
                    {
                      options: X,
                      value: re,
                      onChange: Be,
                      clearLabel: j == null ? void 0 : j.clearLabel
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
            f.table.root,
            f.table.container,
            "table-container"
          ),
          children: [
            /* @__PURE__ */ t("div", { className: "overflow-x-auto", children: /* @__PURE__ */ h("table", { className: f.table.element, children: [
              /* @__PURE__ */ t("thead", { className: f.table.head, children: /* @__PURE__ */ t("tr", { className: f.table.headRow, children: s.map((d) => /* @__PURE__ */ t(
                "th",
                {
                  className: x(
                    f.table.headCell,
                    "table-head-data",
                    d.headClass || ""
                  ),
                  children: d.title
                },
                d.key
              )) }) }),
              /* @__PURE__ */ t("tbody", { className: f.table.body, children: Le.length === 0 ? /* @__PURE__ */ t("tr", { children: /* @__PURE__ */ t(
                "td",
                {
                  colSpan: s.length,
                  className: x(
                    f.table.noData,
                    "no-data-message"
                  ),
                  children: w
                }
              ) }) : Le.map((d, N) => /* @__PURE__ */ t(
                "tr",
                {
                  className: x(
                    f.table.row,
                    "table-row",
                    Ne() ? "cursor-pointer" : ""
                  ),
                  onClick: () => {
                    Ne() && Z(d);
                  },
                  children: s.map((B) => /* @__PURE__ */ t(
                    "td",
                    {
                      className: x(
                        f.table.cell,
                        "table-data",
                        B.type == "audio" ? "" : "max-w-[300px]",
                        "truncate",
                        ie(B) ? "cursor-pointer" : ""
                      ),
                      title: String(d[B.key] ?? ""),
                      onClick: (J) => {
                        ie(B) && (J.stopPropagation(), J.preventDefault(), ne(B, d));
                      },
                      children: B.render ? B.render(d, N) : O(B, d, N)
                    },
                    B.key
                  ))
                },
                d.id || d._id || N
              )) })
            ] }) }),
            (l == null ? void 0 : l.enabled) && fe.length > 0 && /* @__PURE__ */ h(
              "div",
              {
                className: x(
                  f.table.pagination,
                  "pagination-wrapper"
                ),
                children: [
                  /* @__PURE__ */ h("span", { children: [
                    "Showing ",
                    (ce - 1) * $ + 1,
                    " to",
                    " ",
                    Math.min(ce * $, Q),
                    " of",
                    " ",
                    Q,
                    " results"
                  ] }),
                  /* @__PURE__ */ h("div", { className: "flex items-center gap-4", children: [
                    /* @__PURE__ */ h("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ t("span", { children: "Rows per page:" }),
                      /* @__PURE__ */ t(
                        "select",
                        {
                          value: $,
                          onChange: (d) => {
                            const N = Number(d.target.value);
                            q(N), L(1), l.useServerSidePagination && S(
                              (B) => ({
                                ...B,
                                current_page: 1,
                                rows_per_page: N
                              })
                            );
                          },
                          className: "rows-number-select",
                          children: [10, 25, 50, 100].map((d) => /* @__PURE__ */ t("option", { value: d, children: d }, d))
                        }
                      )
                    ] }),
                    /* @__PURE__ */ h("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ t(
                        "button",
                        {
                          onClick: () => {
                            if (ce > 1) {
                              const d = ce - 1;
                              L(d), l.useServerSidePagination && S(
                                (N) => ({
                                  ...N,
                                  current_page: d
                                })
                              );
                            }
                          },
                          disabled: ce === 1,
                          className: "arrow-icons",
                          children: /* @__PURE__ */ t(ct, { className: "h-4 w-4" })
                        }
                      ),
                      /* @__PURE__ */ h("span", { children: [
                        "Page ",
                        ce,
                        " of ",
                        oe
                      ] }),
                      /* @__PURE__ */ t(
                        "button",
                        {
                          onClick: () => {
                            if (ce < oe) {
                              const d = ce + 1;
                              L(d), l.useServerSidePagination && S(
                                (N) => ({
                                  ...N,
                                  current_page: d
                                })
                              );
                            }
                          },
                          disabled: ce === oe,
                          className: "arrow-icons",
                          children: /* @__PURE__ */ t(lt, { className: "h-4 w-4" })
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
    E && pt(
      /* @__PURE__ */ t(
        "div",
        {
          ref: Pe,
          style: {
            position: "fixed",
            top: `${M.top}px`,
            left: `${M.left}px`,
            zIndex: 9999
          },
          className: x(
            f.table.menu,
            "w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg border border-gray-200 dark:border-gray-600"
          ),
          children: v.map((d, N) => /* @__PURE__ */ h(
            "button",
            {
              onClick: (B) => Ge(
                d,
                i.find(
                  (J) => J.id === E || J._id == E
                ),
                B
              ),
              className: x(
                f.table.menuItem,
                "w-full flex items-center gap-2 px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-600",
                d.variant === "danger" ? "text-red-600 dark:text-red-500" : "text-gray-700 dark:text-gray-200"
              ),
              children: [
                d.icon && /* @__PURE__ */ t("span", { className: "shrink-0", children: d.icon }),
                d.title
              ]
            },
            N
          ))
        }
      ),
      document.body
    ),
    _ && /* @__PURE__ */ t(
      oa,
      {
        isOpen: G,
        onClose: () => K(!1),
        config: _,
        onApply: (d) => {
          ae(d), k == null || k(d);
        }
      }
    ),
    U && C && /* @__PURE__ */ t(
      ke,
      {
        src: C.src,
        alt: C.alt,
        isOpen: U,
        setIsOpen: pe
      }
    )
  ] });
}, qe = ({
  isOpen: a,
  onClose: o,
  icon: e,
  title: r,
  children: n,
  size: c = "md",
  actionButtons: i = [],
  onFormSubmit: s = () => {
  },
  loadingBtn: b = !1,
  executeFunction: p = () => {
  },
  selectedItem: m = null,
  footerConfig: u,
  classNames: l
}) => {
  if (!a) return null;
  const g = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-full"
  }, w = i.length > 0 || !!(u != null && u.cancelButton);
  return /* @__PURE__ */ h(
    "div",
    {
      className: x(
        f.modal.root,
        "fixed inset-0 z-50 flex items-center justify-center p-4"
      ),
      children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: x(
              f.modal.overlay,
              "fixed inset-0 bg-gray-500 opacity-75",
              l == null ? void 0 : l.overlay
            ),
            onClick: () => o()
          }
        ),
        /* @__PURE__ */ h(
          "div",
          {
            className: x(
              f.modal.container,
              "relative bg-white rounded-lg shadow-xl w-full max-h-[90vh] flex flex-col dark:bg-gray-800",
              g[c] || g.md,
              l == null ? void 0 : l.container
            ),
            children: [
              /* @__PURE__ */ h(
                "div",
                {
                  className: x(
                    f.modal.header,
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
                            f.modal.title,
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
                        onClick: () => o(),
                        className: x(
                          f.modal.closeButton,
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
                    f.modal.body,
                    "flex-1 overflow-y-auto p-4",
                    l == null ? void 0 : l.body
                  ),
                  children: n
                }
              ),
              w && /* @__PURE__ */ h(
                "div",
                {
                  className: x(
                    f.modal.footer,
                    "px-4 py-3 flex justify-end gap-3 border-t border-gray-200 dark:border-gray-700 sm:!px-6",
                    l == null ? void 0 : l.footer
                  ),
                  children: [
                    (u == null ? void 0 : u.cancelButton) && /* @__PURE__ */ t(
                      ge,
                      {
                        onClick: () => o(),
                        variant: "outlined",
                        color: "default",
                        className: x(
                          f.modal.actionButton,
                          "min-w-[100px]"
                        ),
                        type: "button",
                        children: (u == null ? void 0 : u.cancelText) || "Cancel"
                      }
                    ),
                    i.map((y, S) => /* @__PURE__ */ t(
                      ge,
                      {
                        onClick: (k) => {
                          y.type == "submit" ? s(k) : p(
                            () => {
                              var _;
                              return Promise.resolve((_ = y == null ? void 0 : y.onClick) == null ? void 0 : _.call(y, k, m));
                            },
                            (_) => o == null ? void 0 : o(_)
                          );
                        },
                        disabled: b || y.disabled,
                        variant: y.variant || "contained",
                        color: y.color || "primary",
                        className: x(
                          f.modal.actionButton,
                          "min-w-[100px]",
                          y.className || ""
                        ),
                        type: y.type || "button",
                        children: b ? /* @__PURE__ */ h(
                          "div",
                          {
                            className: x(
                              f.modal.loadingIndicator,
                              "flex items-center"
                            ),
                            children: [
                              /* @__PURE__ */ t("div", { className: "animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-2 border-t-white mr-2" }),
                              y.label || "Submit",
                              "..."
                            ]
                          }
                        ) : y.label || "Submit"
                      },
                      `${y.label || "action"}-${S}`
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
}, jr = ({
  config: a,
  onSubmit: o,
  initialData: e,
  fetchRowDetails: r,
  type: n
}) => {
  const c = e || {}, { formClass: i = "grid grid-cols-12 gap-4", formFields: s = [] } = a || {}, [b, p] = D(c), [m, u] = D(!0), [l, g] = D({}), w = async () => {
    r == null || r(c).then((k) => {
      p(k.data);
    }).catch((k) => {
      De(k.message, { variant: "error" });
    }).finally(() => {
      u(!1);
    });
  };
  V(() => {
    r instanceof Function ? w() : (p(c), u(!1));
  }, []);
  const y = (k, _) => {
    p((A) => ({ ...A, [k]: _ })), g((A) => ({
      ...A,
      [k]: ""
    }));
  }, S = (k) => {
    k.preventDefault();
    const _ = k.currentTarget;
    if (!_.checkValidity()) {
      _.reportValidity();
      return;
    }
    const A = {};
    let F = !1;
    for (const I of s) {
      const E = b[I.key] || "";
      if (I.customValidation) {
        const T = I.customValidation(E);
        if (T !== !1 && (A[I.key] = T, !F)) {
          const v = _.querySelector(
            `[id="field-${I.key}"]`
          );
          v == null || v.focus(), F = !0;
        }
      }
    }
    g(A), !(Object.keys(A).length > 0) && o(b);
  };
  return m ? /* @__PURE__ */ t(
    "div",
    {
      className: x(
        f.form.loading,
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
      id: n === "add" ? "addForm" : n === "edit" ? "editForm" : "defaultForm",
      onSubmit: S,
      className: x(f.form.root, i),
      noValidate: !1,
      children: s.map((k) => /* @__PURE__ */ t(
        qr,
        {
          field: k,
          formData: b,
          errorMessage: l[k.key] || "",
          handleChange: y
        },
        k.key
      ))
    }
  );
};
function ha({
  data: a,
  config: o,
  fetchRowDetails: e
}) {
  const {
    fields: r = [],
    containerClass: n,
    variant: c = "default",
    styles: i = {}
  } = o || {}, s = a || {}, [b, p] = D(s), [m, u] = D(!0), l = async () => {
    e == null || e(s).then((w) => {
      p(w.data);
    }).catch((w) => {
      De(w.message, { variant: "error" });
    }).finally(() => {
      u(!1);
    });
  };
  if (V(() => {
    e instanceof Function ? l() : (p(s), u(!1));
  }, []), m)
    return /* @__PURE__ */ t(
      "div",
      {
        className: x(
          f.form.loading,
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
  return /* @__PURE__ */ t(Y, { children: /* @__PURE__ */ t(
    "div",
    {
      className: x(
        f.details.root,
        f.details.container,
        g[c] || g.default,
        n || "",
        i.containerClass || ""
      ),
      children: r.map((w) => w.renderCondition && typeof w.renderCondition == "function" && !w.renderCondition(b) ? null : w.type == "group" ? /* @__PURE__ */ t(
        Zr,
        {
          col: w,
          data: b,
          uiVariant: c,
          styleConfig: i
        },
        w.key || w.titleKey
      ) : w.type == "cardGroup" ? /* @__PURE__ */ t(
        Vr,
        {
          col: w,
          data: b,
          uiVariant: c,
          styleConfig: i
        },
        w.key || w.titleKey
      ) : /* @__PURE__ */ t(
        Jr,
        {
          col: w,
          data: b,
          uiVariant: c,
          styleConfig: i
        },
        w.key || w.label
      ))
    }
  ) });
}
const ma = ({ config: a }) => {
  var L, $, q, Q, H, oe, Le, Pe, je, Ae, $e, Be, Ge, Ye, Ke, ze, We, He, Ie, Ze, Ve, Xe;
  const {
    title: o,
    fetchData: e,
    fetchRowDetails: r,
    isStaticData: n = !1,
    tableConfig: c,
    modalConfig: i,
    filterConfig: s
  } = a, [b, p] = D(!0), [m, u] = D(!1), [l, g] = D([]), [w, y] = D(null), [S, k] = D({
    search: "",
    rows_per_page: 50,
    current_page: 1,
    sort_by: "",
    sort_order: ""
  }), [_, A] = D({}), [F, I] = D(!1), [E, T] = D(!1), [v, R] = D(!1), [M, z] = D(!1), [G, K] = D(!1), [te, ae] = D(
    null
  ), j = (O, Z) => {
    O === "edit" ? (ae(Z), R(!0)) : O === "view" ? (ae(Z), K(!0)) : O === "delete" && (ae(Z), z(!0));
  }, se = async (O, Z, ne = "", Ne = "") => {
    u(!0);
    try {
      if (!O) return;
      const ie = await O();
      (ne || ie != null && ie.message) && De(ne || ie.message || "Success", {
        variant: "success"
      }), Z == null || Z(ie);
    } catch (ie) {
      (Ne || ie != null && ie.message) && De(Ne || ie.message || "Error occurred", {
        variant: "error"
      });
    } finally {
      u(!1);
    }
  }, X = (O) => {
    const Z = O.newObject;
    n ? (g((ne) => [Z, ...ne]), y((ne) => ({
      ...ne,
      current_page: 1
    }))) : (k((ne) => ({
      ...ne,
      current_page: 1
    })), S.current_page === 1 && U()), T(!1);
  }, re = (O) => {
    const { newObject: Z, targetObject: ne } = O;
    n ? g(
      (Ne) => Ne.map(
        (ie) => ie.id === ne.id ? { ...ie, ...Z } : ie
      )
    ) : U(), R(!1);
  }, P = (O) => {
    if (!O) {
      z(!1), ae(null);
      return;
    }
    n ? g(
      (Z) => Z.filter((ne) => ne.id !== O.targetObject.id)
    ) : l.length === 1 && S.current_page > 1 ? k((Z) => ({
      ...Z,
      current_page: Z.current_page - 1
    })) : U(), z(!1), ae(null);
  }, C = (O) => se(
    () => {
      var Z;
      return (Z = i == null ? void 0 : i.addModal) != null && Z.handleSubmit ? i.addModal.handleSubmit(O) : Promise.resolve({ newObject: null });
    },
    X
  ), W = (O) => se(
    () => {
      var Z;
      return (Z = i == null ? void 0 : i.editModal) != null && Z.handleSubmit ? i.editModal.handleSubmit(O, te) : Promise.resolve({ newObject: null, targetObject: null });
    },
    re
  ), U = async () => {
    p(!0);
    try {
      const O = await e({
        ...S,
        ..._
      });
      g(O.data || []), y(O.pagination || null);
    } catch (O) {
      De(O.message || "Failed to fetch data", {
        variant: "error"
      });
    } finally {
      p(!1);
    }
  }, pe = (O) => {
    var Z;
    A((ne) => ({ ...O })), (Z = c == null ? void 0 : c.filter) != null && Z.useServerSideFilters && I((ne) => !ne);
  }, ve = (O, Z) => O.filter(
    (ne) => Object.entries(Z).every(([Ne, ie]) => ne[Ne] === ie)
  ), fe = Ce(() => {
    var O;
    return (O = c == null ? void 0 : c.filter) != null && O.useServerSideFilters ? l : ve(l, _);
  }, [l, _, (L = c == null ? void 0 : c.filter) == null ? void 0 : L.useServerSideFilters]), ce = ($ = i == null ? void 0 : i.viewModal) == null ? void 0 : $.component;
  return V(() => {
    U();
  }, [
    S.search,
    S.rows_per_page,
    S.current_page,
    S.sort_by,
    S.sort_order,
    F
  ]), /* @__PURE__ */ h("div", { className: f.crudPage.root, children: [
    /* @__PURE__ */ t(
      ua,
      {
        title: o,
        setShowAdd: T,
        description: a.description,
        buttonText: a.buttonText,
        showAddButton: !!(i != null && i.addModal),
        config: {
          ...c,
          pagination: {
            ...c.pagination,
            ...w
          },
          data: fe,
          setServerSidePaginationData: k,
          onMenuAction: j,
          filterConfig: s,
          onFilterApply: pe,
          loading: b
        }
      }
    ),
    /* @__PURE__ */ t(
      qe,
      {
        isOpen: E,
        onClose: () => {
          m || T(!1);
        },
        icon: (q = i == null ? void 0 : i.addModal) == null ? void 0 : q.icon,
        title: ((Q = i == null ? void 0 : i.addModal) == null ? void 0 : Q.title) || "Add New",
        size: ((H = i == null ? void 0 : i.addModal) == null ? void 0 : H.size) || "md",
        onFormSubmit: () => {
          var O;
          return (O = document.querySelector("#addForm")) == null ? void 0 : O.requestSubmit();
        },
        loadingBtn: m,
        actionButtons: ((oe = i == null ? void 0 : i.addModal) == null ? void 0 : oe.actionButtons) || [],
        children: /* @__PURE__ */ t(
          jr,
          {
            config: (i == null ? void 0 : i.addModal) || {},
            onSubmit: C,
            initialData: {},
            type: "add",
            loading: m
          }
        )
      }
    ),
    /* @__PURE__ */ t(
      qe,
      {
        isOpen: v,
        onClose: () => {
          m || R(!1);
        },
        icon: (Le = i == null ? void 0 : i.editModal) == null ? void 0 : Le.icon,
        title: ((Pe = i == null ? void 0 : i.editModal) == null ? void 0 : Pe.title) || "Edit",
        size: ((je = i == null ? void 0 : i.editModal) == null ? void 0 : je.size) || "md",
        onFormSubmit: () => {
          var O;
          return (O = document.querySelector("#editForm")) == null ? void 0 : O.requestSubmit();
        },
        actionButtons: ((Ae = i == null ? void 0 : i.editModal) == null ? void 0 : Ae.actionButtons) || [],
        loadingBtn: m,
        children: /* @__PURE__ */ t(
          jr,
          {
            config: (i == null ? void 0 : i.editModal) || {},
            onSubmit: W,
            initialData: te,
            type: "edit",
            loading: m,
            fetchRowDetails: r
          }
        )
      }
    ),
    M && /* @__PURE__ */ t(
      qe,
      {
        isOpen: M,
        onClose: (O) => {
          P(O);
        },
        icon: (($e = i == null ? void 0 : i.deleteModal) == null ? void 0 : $e.icon) || /* @__PURE__ */ t(be, { icon: "ph:warning-bold", className: "w-6 h-6 text-red-500" }),
        title: ((Be = i == null ? void 0 : i.deleteModal) == null ? void 0 : Be.title) || "Confirm Delete",
        size: ((Ge = i == null ? void 0 : i.deleteModal) == null ? void 0 : Ge.size) || "md",
        loading: m,
        actionButtons: ((Ye = i == null ? void 0 : i.deleteModal) == null ? void 0 : Ye.actionButtons) || [],
        executeFunction: se,
        selectedItem: te,
        children: /* @__PURE__ */ t(
          "div",
          {
            className: x(
              f.crudPage.deleteContent,
              "flex items-center space-x-2 py-3"
            ),
            children: /* @__PURE__ */ h("div", { children: [
              /* @__PURE__ */ t("p", { className: "text-md text-gray-700 dark:text-white", children: ((Ke = i == null ? void 0 : i.deleteModal) == null ? void 0 : Ke.confirmText) || "Are you sure you want to delete this item?" }),
              ((ze = i == null ? void 0 : i.deleteModal) == null ? void 0 : ze.referenceKey) && /* @__PURE__ */ t("p", { className: "text-md font-semibold text-gray-700 dark:text-white", children: te == null ? void 0 : te[(We = i == null ? void 0 : i.deleteModal) == null ? void 0 : We.referenceKey] })
            ] })
          }
        )
      }
    ),
    (i == null ? void 0 : i.viewModal) && /* @__PURE__ */ t(
      qe,
      {
        isOpen: G,
        onClose: () => {
          K(!1), ae(null);
        },
        icon: (He = i == null ? void 0 : i.viewModal) == null ? void 0 : He.icon,
        title: ((Ie = i == null ? void 0 : i.viewModal) == null ? void 0 : Ie.title) || "View Details",
        size: ((Ze = i == null ? void 0 : i.viewModal) == null ? void 0 : Ze.size) || "lg",
        footerConfig: (Ve = i == null ? void 0 : i.viewModal) == null ? void 0 : Ve.footer,
        classNames: (Xe = i == null ? void 0 : i.viewModal) == null ? void 0 : Xe.modalClassNames,
        children: ce ? /* @__PURE__ */ t(ce, { data: te }) : /* @__PURE__ */ t(
          ha,
          {
            data: te,
            fetchRowDetails: r,
            config: (i == null ? void 0 : i.viewModal) || {}
          }
        )
      }
    )
  ] });
};
function ba({ children: a }) {
  return mt(), a;
}
function ga({
  children: a
}) {
  try {
    return /* @__PURE__ */ t(ba, { children: a });
  } catch {
    return /* @__PURE__ */ t(
      ht,
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
const wa = () => {
  if (typeof document > "u" || document.getElementById("react-admin-crud-manager-styles")) return;
  const a = document.createElement("style");
  a.id = "react-admin-crud-manager-styles", a.textContent = bt, document.head.appendChild(a);
};
function _a({ config: a }) {
  return V(() => {
    wa();
  }, []), /* @__PURE__ */ t("div", { className: "racm-root", children: /* @__PURE__ */ t(ga, { children: /* @__PURE__ */ t(ma, { config: a }) }) });
}
export {
  _a as default
};
//# sourceMappingURL=index.es.js.map
