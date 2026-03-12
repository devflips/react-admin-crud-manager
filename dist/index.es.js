import { jsx as r, Fragment as Y, jsxs as h } from "react/jsx-runtime";
import * as _e from "react";
import rt, { useState as D, useRef as de, useEffect as V, useCallback as er, useMemo as Ce } from "react";
import { Info as tr, ChevronDown as zt, Search as wt, Check as rr, X as at, User as mt, ArrowUpDown as ar, Plus as or, Filter as ir, Download as nr, ChevronLeft as lr, ChevronRight as sr, EllipsisVertical as cr, Music as dr } from "lucide-react";
import { createPortal as pr } from "react-dom";
import { Icon as ge } from "@iconify/react";
import { Editor as ur } from "@tinymce/tinymce-react";
import { enqueueSnackbar as De, SnackbarProvider as hr, useSnackbar as br } from "notistack";
const gr = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}:root{--background: 0 0% 100%;--foreground: 0 0% 3.9%;--card: 0 0% 100%;--card-foreground: 0 0% 3.9%;--popover: 0 0% 100%;--popover-foreground: 0 0% 3.9%;--primary: 0 0% 9%;--primary-foreground: 0 0% 98%;--secondary: 0 0% 96.1%;--secondary-foreground: 0 0% 9%;--muted: 0 0% 96.1%;--muted-foreground: 0 0% 45.1%;--accent: 0 0% 96.1%;--accent-foreground: 0 0% 9%;--destructive: 0 84.2% 60.2%;--destructive-foreground: 0 0% 98%;--border: 0 0% 89.8%;--input: 0 0% 89.8%;--ring: 0 0% 3.9%;--chart-1: 12 76% 61%;--chart-2: 173 58% 39%;--chart-3: 197 37% 24%;--chart-4: 43 74% 66%;--chart-5: 27 87% 67%;--radius: .5rem}*{border-color:hsl(var(--border))}body{background-color:hsl(var(--background));color:hsl(var(--foreground))}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{top:0;right:0;bottom:0;left:0}.inset-y-0{top:0;bottom:0}.-bottom-4{bottom:-1rem}.-right-2{right:-.5rem}.-right-6{right:-1.5rem}.-top-2{top:-.5rem}.-top-6{top:-1.5rem}.bottom-full{bottom:100%}.left-0{left:0}.left-1{left:.25rem}.left-1\\/2{left:50%}.left-3{left:.75rem}.right-0{right:0}.right-1{right:.25rem}.right-1\\/2{right:50%}.right-2{right:.5rem}.right-3{right:.75rem}.right-4{right:1rem}.right-\\[50\\%\\]{right:50%}.top-0{top:0}.top-1{top:.25rem}.top-1\\/2{top:50%}.top-2{top:.5rem}.top-4{top:1rem}.top-\\[80\\%\\]{top:80%}.top-full{top:100%}.z-10{z-index:10}.z-20{z-index:20}.z-40{z-index:40}.z-50{z-index:50}.col-span-12{grid-column:span 12 / span 12}.col-span-6{grid-column:span 6 / span 6}.mb-0{margin-bottom:0}.mb-1{margin-bottom:.25rem}.mb-3{margin-bottom:.75rem}.mb-6{margin-bottom:1.5rem}.ml-1{margin-left:.25rem}.ml-2{margin-left:.5rem}.mr-2{margin-right:.5rem}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.mt-auto{margin-top:auto}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.table-row{display:table-row}.grid{display:grid}.hidden{display:none}.h-1{height:.25rem}.h-10{height:2.5rem}.h-11{height:2.75rem}.h-12{height:3rem}.h-16{height:4rem}.h-2{height:.5rem}.h-20{height:5rem}.h-28{height:7rem}.h-3{height:.75rem}.h-32{height:8rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-64{height:16rem}.h-7{height:1.75rem}.h-72{height:18rem}.h-8{height:2rem}.h-9{height:2.25rem}.h-\\[10px\\]{height:10px}.h-\\[150px\\]{height:150px}.h-\\[36px\\]{height:36px}.h-\\[40px\\]{height:40px}.h-full{height:100%}.max-h-40{max-height:10rem}.max-h-60{max-height:15rem}.max-h-\\[260px\\]{max-height:260px}.max-h-\\[90vh\\]{max-height:90vh}.min-h-\\[52px\\]{min-height:52px}.w-1{width:.25rem}.w-10{width:2.5rem}.w-11{width:2.75rem}.w-12{width:3rem}.w-16{width:4rem}.w-2{width:.5rem}.w-20{width:5rem}.w-24{width:6rem}.w-3{width:.75rem}.w-32{width:8rem}.w-4{width:1rem}.w-48{width:12rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-64{width:16rem}.w-7{width:1.75rem}.w-8{width:2rem}.w-80{width:20rem}.w-\\[260px\\]{width:260px}.w-\\[28rem\\]{width:28rem}.w-\\[36px\\]{width:36px}.w-\\[42\\%\\]{width:42%}.w-full{width:100%}.w-max{width:-moz-max-content;width:max-content}.min-w-0{min-width:0px}.min-w-\\[100px\\]{min-width:100px}.min-w-\\[150px\\]{min-width:150px}.min-w-\\[220px\\]{min-width:220px}.min-w-\\[40px\\]{min-width:40px}.min-w-\\[78px\\]{min-width:78px}.max-w-2xl{max-width:42rem}.max-w-4xl{max-width:56rem}.max-w-5xl{max-width:64rem}.max-w-\\[200px\\]{max-width:200px}.max-w-\\[300px\\]{max-width:300px}.max-w-full{max-width:100%}.max-w-lg{max-width:32rem}.max-w-md{max-width:28rem}.max-w-xs{max-width:20rem}.flex-1{flex:1 1 0%}.flex-shrink{flex-shrink:1}.flex-shrink-0,.shrink-0{flex-shrink:0}.border-collapse{border-collapse:collapse}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-0{--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-full{--tw-translate-x: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-95{--tw-scale-x: .95;--tw-scale-y: .95;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.items-stretch{align-items:stretch}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-1\\.5{gap:.375rem}.gap-2{gap:.5rem}.gap-2\\.5{gap:.625rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-6{gap:1.5rem}.-space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(-.5rem * var(--tw-space-x-reverse));margin-left:calc(-.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.25rem * var(--tw-space-y-reverse))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse))}.divide-gray-100>:not([hidden])~:not([hidden]){--tw-divide-opacity: 1;border-color:rgb(243 244 246 / var(--tw-divide-opacity))}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.break-words{overflow-wrap:break-word}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:var(--radius)}.rounded-md{border-radius:calc(var(--radius) - 2px)}.rounded-sm{border-radius:calc(var(--radius) - 4px)}.rounded-xl{border-radius:.75rem}.border{border-width:1px}.border-2{border-width:2px}.border-4{border-width:4px}.border-8{border-width:8px}.border-b{border-bottom-width:1px}.border-l{border-left-width:1px}.border-r{border-right-width:1px}.border-t{border-top-width:1px}.border-t-2{border-top-width:2px}.border-dashed{border-style:dashed}.border-blue-300{--tw-border-opacity: 1;border-color:rgb(147 197 253 / var(--tw-border-opacity))}.border-blue-500{--tw-border-opacity: 1;border-color:rgb(59 130 246 / var(--tw-border-opacity))}.border-gray-100{--tw-border-opacity: 1;border-color:rgb(243 244 246 / var(--tw-border-opacity))}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity))}.border-green-300{--tw-border-opacity: 1;border-color:rgb(134 239 172 / var(--tw-border-opacity))}.border-green-600{--tw-border-opacity: 1;border-color:rgb(22 163 74 / var(--tw-border-opacity))}.border-primary,.border-primary-500{border-color:var(--primary-500)}.border-purple-300{--tw-border-opacity: 1;border-color:rgb(216 180 254 / var(--tw-border-opacity))}.border-red-300{--tw-border-opacity: 1;border-color:rgb(252 165 165 / var(--tw-border-opacity))}.border-red-500{--tw-border-opacity: 1;border-color:rgb(239 68 68 / var(--tw-border-opacity))}.border-red-600{--tw-border-opacity: 1;border-color:rgb(220 38 38 / var(--tw-border-opacity))}.border-teal-300{--tw-border-opacity: 1;border-color:rgb(94 234 212 / var(--tw-border-opacity))}.border-white{--tw-border-opacity: 1;border-color:rgb(255 255 255 / var(--tw-border-opacity))}.border-white\\/30{border-color:#ffffff4d}.border-yellow-300{--tw-border-opacity: 1;border-color:rgb(253 224 71 / var(--tw-border-opacity))}.border-t-gray-200{--tw-border-opacity: 1;border-top-color:rgb(229 231 235 / var(--tw-border-opacity))}.border-t-white{--tw-border-opacity: 1;border-top-color:rgb(255 255 255 / var(--tw-border-opacity))}.\\!bg-transparent{background-color:transparent!important}.bg-black\\/50{background-color:#00000080}.bg-black\\/70{background-color:#000000b3}.bg-blue-100{--tw-bg-opacity: 1;background-color:rgb(219 234 254 / var(--tw-bg-opacity))}.bg-blue-50{--tw-bg-opacity: 1;background-color:rgb(239 246 255 / var(--tw-bg-opacity))}.bg-blue-500\\/10{background-color:#3b82f61a}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.bg-gray-300{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity))}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.bg-gray-500{--tw-bg-opacity: 1;background-color:rgb(107 114 128 / var(--tw-bg-opacity))}.bg-gray-900{--tw-bg-opacity: 1;background-color:rgb(17 24 39 / var(--tw-bg-opacity))}.bg-green-100{--tw-bg-opacity: 1;background-color:rgb(220 252 231 / var(--tw-bg-opacity))}.bg-green-600{--tw-bg-opacity: 1;background-color:rgb(22 163 74 / var(--tw-bg-opacity))}.bg-primary{background-color:var(--primary-500)}.bg-purple-100{--tw-bg-opacity: 1;background-color:rgb(243 232 255 / var(--tw-bg-opacity))}.bg-red-100{--tw-bg-opacity: 1;background-color:rgb(254 226 226 / var(--tw-bg-opacity))}.bg-red-500{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.bg-red-500\\/95{background-color:#ef4444f2}.bg-red-600{--tw-bg-opacity: 1;background-color:rgb(220 38 38 / var(--tw-bg-opacity))}.bg-teal-100{--tw-bg-opacity: 1;background-color:rgb(204 251 241 / var(--tw-bg-opacity))}.bg-transparent{background-color:transparent}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-white\\/90{background-color:#ffffffe6}.bg-yellow-100{--tw-bg-opacity: 1;background-color:rgb(254 249 195 / var(--tw-bg-opacity))}.bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}.to-transparent{--tw-gradient-to: transparent var(--tw-gradient-to-position)}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-4{padding:1rem}.p-5{padding:1.25rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-8{padding-left:2rem;padding-right:2rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.pl-9{padding-left:2.25rem}.pr-10{padding-right:2.5rem}.pr-2{padding-right:.5rem}.pr-3{padding-right:.75rem}.text-left{text-align:left}.text-center{text-align:center}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.italic{font-style:italic}.leading-none{line-height:1}.leading-snug{line-height:1.375}.leading-tight{line-height:1.25}.tracking-wide{letter-spacing:.025em}.tracking-wider{letter-spacing:.05em}.text-black{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.text-blue-600{--tw-text-opacity: 1;color:rgb(37 99 235 / var(--tw-text-opacity))}.text-blue-700{--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity))}.text-blue-800{--tw-text-opacity: 1;color:rgb(30 64 175 / var(--tw-text-opacity))}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity))}.text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.text-green-600{--tw-text-opacity: 1;color:rgb(22 163 74 / var(--tw-text-opacity))}.text-green-700{--tw-text-opacity: 1;color:rgb(21 128 61 / var(--tw-text-opacity))}.text-green-800{--tw-text-opacity: 1;color:rgb(22 101 52 / var(--tw-text-opacity))}.text-primary{color:var(--primary-500)}.text-purple-700{--tw-text-opacity: 1;color:rgb(126 34 206 / var(--tw-text-opacity))}.text-purple-800{--tw-text-opacity: 1;color:rgb(107 33 168 / var(--tw-text-opacity))}.text-red-500{--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity))}.text-red-600{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity))}.text-red-700{--tw-text-opacity: 1;color:rgb(185 28 28 / var(--tw-text-opacity))}.text-red-800{--tw-text-opacity: 1;color:rgb(153 27 27 / var(--tw-text-opacity))}.text-teal-700{--tw-text-opacity: 1;color:rgb(15 118 110 / var(--tw-text-opacity))}.text-teal-800{--tw-text-opacity: 1;color:rgb(17 94 89 / var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.text-yellow-700{--tw-text-opacity: 1;color:rgb(161 98 7 / var(--tw-text-opacity))}.text-yellow-800{--tw-text-opacity: 1;color:rgb(133 77 14 / var(--tw-text-opacity))}.underline{text-decoration-line:underline}.placeholder-gray-400::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.placeholder-gray-400::placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.placeholder-gray-500::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(107 114 128 / var(--tw-placeholder-opacity))}.placeholder-gray-500::placeholder{--tw-placeholder-opacity: 1;color:rgb(107 114 128 / var(--tw-placeholder-opacity))}.opacity-0{opacity:0}.opacity-100{opacity:1}.opacity-50{opacity:.5}.opacity-60{opacity:.6}.opacity-75{opacity:.75}.opacity-90{opacity:.9}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-2xl{--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / .25);--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-xl{--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.ring-0{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.ring-blue-100{--tw-ring-opacity: 1;--tw-ring-color: rgb(219 234 254 / var(--tw-ring-opacity))}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-sm{--tw-backdrop-blur: blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200{transition-duration:.2s}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}:root{--primary-50: #eff6ff;--primary-100: #dbeafe;--primary-200: #bfdbfe;--primary-300: #93c5fd;--primary-400: #60a5fa;--primary-500: #3b82f6;--primary-600: #2563eb;--primary-700: #1d4ed8;--primary-800: #1e40af;--primary-900: #1e3a8a}.primary-bg{background-color:var(--primary-500)}.primary-bg-light{background-color:var(--primary-100)}.primary-bg-dark{background-color:var(--primary-700)}.primary-text{color:var(--primary-600)}.primary-border{border-color:var(--primary-300)}.primary-hover:hover{background-color:var(--primary-600)}:root{--foreground-rgb: 0, 0, 0;--background-start-rgb: 214, 219, 220;--background-end-rgb: 255, 255, 255}@media (prefers-color-scheme: dark){:root{--foreground-rgb: 255, 255, 255;--background-start-rgb: 0, 0, 0;--background-end-rgb: 0, 0, 0}}html,body{height:100%}:root{--scrollbar-thumb: #d1d5db;--scrollbar-thumb-hover: #9ca3af}.dark{--scrollbar-thumb: #4b5563;--scrollbar-thumb-hover: #6b7280}*{scrollbar-width:thin;scrollbar-color:var(--scrollbar-thumb) transparent}*::-webkit-scrollbar{width:6px;height:6px}*::-webkit-scrollbar-track{background:transparent}*::-webkit-scrollbar-thumb{background-color:var(--scrollbar-thumb);border-radius:3px}*::-webkit-scrollbar-thumb:hover{background-color:var(--scrollbar-thumb-hover)}h1{font-size:1.5rem;line-height:2rem;font-weight:700;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}:is(.dark h1){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}p{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}:is(.dark p){--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.table-search-field{position:relative;width:100%}@media (min-width: 640px){.table-search-field{min-width:300px!important}}.table-search-field .search-icon{position:absolute;left:.75rem;top:50%;height:1rem;width:1rem;--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}:is(.dark .table-search-field .search-icon){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.table-search-field input{height:36px;width:100%;border-radius:calc(var(--radius) - 2px);border-width:1px;--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity));padding:.75rem 1rem .75rem 2.25rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.table-search-field input::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(107 114 128 / var(--tw-placeholder-opacity))}.table-search-field input::placeholder{--tw-placeholder-opacity: 1;color:rgb(107 114 128 / var(--tw-placeholder-opacity))}.table-search-field input:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-opacity: 1;--tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity))}.table-search-field input:disabled{opacity:.5}:is(.dark .table-search-field input){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}:is(.dark .table-search-field input)::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}:is(.dark .table-search-field input)::placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}:is(.dark .table-search-field input){--tw-ring-opacity: 1;--tw-ring-color: rgb(191 219 254 / var(--tw-ring-opacity))}.filter-button-wrapper{position:relative;width:100%}@media (min-width: 640px){.filter-button-wrapper{width:auto!important}}.filter-button-wrapper .red-dot{position:absolute;top:.25rem;right:.25rem;height:.5rem;width:.5rem;border-radius:9999px;--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.table-container{overflow:hidden;border-radius:var(--radius);border-width:1px;--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}:is(.dark .table-container){--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.table-container table{min-width:100%}.table-container table>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse));--tw-divide-opacity: 1;border-color:rgb(229 231 235 / var(--tw-divide-opacity))}:is(.dark .table-container table)>:not([hidden])~:not([hidden]){--tw-divide-opacity: 1;border-color:rgb(55 65 81 / var(--tw-divide-opacity))}.table-container thead{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}:is(.dark .table-container thead){background-color:#37415199}.table-container tbody>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse));--tw-divide-opacity: 1;border-color:rgb(229 231 235 / var(--tw-divide-opacity))}.table-container tbody{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}:is(.dark .table-container tbody)>:not([hidden])~:not([hidden]){--tw-divide-opacity: 1;border-color:rgb(55 65 81 / var(--tw-divide-opacity))}:is(.dark .table-container tbody){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.table-container .table-head-data{min-width:-moz-max-content;min-width:max-content;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:1rem 1.5rem;text-align:left;font-size:.75rem;line-height:1rem;font-weight:500;text-transform:uppercase;letter-spacing:.05em;--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}:is(.dark .table-container .table-head-data){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.table-container .no-data-message{padding-top:2.5rem;padding-bottom:2.5rem;text-align:center;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}:is(.dark .table-container .no-data-message){--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.table-container .table-row{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.table-container .table-row:hover{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}:is(.dark .table-container .table-row:hover){background-color:#1e40af1a}.table-container .table-data{min-width:-moz-max-content;min-width:max-content;padding:1rem 1.5rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}:is(.dark .table-container .table-data){--tw-text-opacity: 1;color:rgb(243 244 246 / var(--tw-text-opacity))}.table-container .pagination-wrapper{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:.75rem;border-top-width:1px;--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity));padding:.75rem 1.5rem}:is(.dark .table-container .pagination-wrapper){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity));background-color:#37415199}.table-container .pagination-wrapper span{font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}:is(.dark .table-container .pagination-wrapper span){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.table-container .pagination-wrapper .rows-number-select{border-radius:calc(var(--radius) - 2px);border-width:1px;--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:.25rem .5rem;font-size:.875rem;line-height:1.25rem}.table-container .pagination-wrapper .rows-number-select:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-opacity: 1;--tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity))}:is(.dark .table-container .pagination-wrapper .rows-number-select){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.table-container .pagination-wrapper .arrow-icons{border-radius:calc(var(--radius) - 2px);padding:.5rem;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity));transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.table-container .pagination-wrapper .arrow-icons:hover{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.table-container .pagination-wrapper .arrow-icons:disabled{opacity:.5}:is(.dark .table-container .pagination-wrapper .arrow-icons){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}:is(.dark .table-container .pagination-wrapper .arrow-icons:hover){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity))}.no-spinner::-webkit-outer-spin-button,.no-spinner::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.no-spinner{-moz-appearance:textfield}.tox.tox-tinymce .tox-edit-area:before{border:0!important;box-shadow:none!important}.hover\\:-translate-y-0:hover{--tw-translate-y: -0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:-translate-y-0\\.5:hover{--tw-translate-y: -.125rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:bg-blue-50:hover{--tw-bg-opacity: 1;background-color:rgb(239 246 255 / var(--tw-bg-opacity))}.hover\\:bg-gray-100:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.hover\\:bg-gray-200:hover{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.hover\\:bg-gray-300:hover{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity))}.hover\\:bg-green-50:hover{--tw-bg-opacity: 1;background-color:rgb(240 253 244 / var(--tw-bg-opacity))}.hover\\:bg-green-700:hover{--tw-bg-opacity: 1;background-color:rgb(21 128 61 / var(--tw-bg-opacity))}.hover\\:bg-primary-50:hover{background-color:var(--primary-50)}.hover\\:bg-primary-600:hover{background-color:var(--primary-600)}.hover\\:bg-red-50:hover{--tw-bg-opacity: 1;background-color:rgb(254 242 242 / var(--tw-bg-opacity))}.hover\\:bg-red-600:hover{--tw-bg-opacity: 1;background-color:rgb(220 38 38 / var(--tw-bg-opacity))}.hover\\:bg-red-700:hover{--tw-bg-opacity: 1;background-color:rgb(185 28 28 / var(--tw-bg-opacity))}.hover\\:bg-white:hover{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.hover\\:bg-white\\/20:hover{background-color:#fff3}.hover\\:text-gray-600:hover{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.hover\\:shadow-md:hover{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-1:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-blue-200:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(191 219 254 / var(--tw-ring-opacity))}.focus\\:ring-blue-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity))}.focus\\:ring-blue-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity))}.focus\\:ring-gray-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity))}.focus\\:ring-green-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(34 197 94 / var(--tw-ring-opacity))}.focus\\:ring-primary-500:focus{--tw-ring-color: var(--primary-500)}.focus\\:ring-red-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(239 68 68 / var(--tw-ring-opacity))}.focus\\:ring-offset-2:focus{--tw-ring-offset-width: 2px}.focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:ring-2:focus-visible{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus-visible\\:ring-blue-400:focus-visible{--tw-ring-opacity: 1;--tw-ring-color: rgb(96 165 250 / var(--tw-ring-opacity))}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width: 2px}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:opacity-50:disabled{opacity:.5}.group:hover .group-hover\\:opacity-100{opacity:1}.peer:checked~.peer-checked\\:translate-x-5{--tw-translate-x: 1.25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.peer:checked~.peer-checked\\:bg-primary-600{background-color:var(--primary-600)}.peer:focus~.peer-focus\\:outline-none{outline:2px solid transparent;outline-offset:2px}.peer:disabled~.peer-disabled\\:cursor-not-allowed{cursor:not-allowed}.peer:disabled~.peer-disabled\\:opacity-50{opacity:.5}:is(.dark .dark\\:divide-gray-800)>:not([hidden])~:not([hidden]){--tw-divide-opacity: 1;border-color:rgb(31 41 55 / var(--tw-divide-opacity))}:is(.dark .dark\\:border-blue-700){--tw-border-opacity: 1;border-color:rgb(29 78 216 / var(--tw-border-opacity))}:is(.dark .dark\\:border-gray-600){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity))}:is(.dark .dark\\:border-gray-700){--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity))}:is(.dark .dark\\:border-gray-700\\/60){border-color:#37415199}:is(.dark .dark\\:border-gray-800){--tw-border-opacity: 1;border-color:rgb(31 41 55 / var(--tw-border-opacity))}:is(.dark .dark\\:border-green-700){--tw-border-opacity: 1;border-color:rgb(21 128 61 / var(--tw-border-opacity))}:is(.dark .dark\\:border-purple-700){--tw-border-opacity: 1;border-color:rgb(126 34 206 / var(--tw-border-opacity))}:is(.dark .dark\\:border-red-700){--tw-border-opacity: 1;border-color:rgb(185 28 28 / var(--tw-border-opacity))}:is(.dark .dark\\:border-teal-700){--tw-border-opacity: 1;border-color:rgb(15 118 110 / var(--tw-border-opacity))}:is(.dark .dark\\:border-yellow-700){--tw-border-opacity: 1;border-color:rgb(161 98 7 / var(--tw-border-opacity))}:is(.dark .dark\\:bg-black){--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}:is(.dark .dark\\:bg-black\\/80){background-color:#000c}:is(.dark .dark\\:bg-blue-900\\/20){background-color:#1e3a8a33}:is(.dark .dark\\:bg-blue-900\\/30){background-color:#1e3a8a4d}:is(.dark .dark\\:bg-gray-600){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity))}:is(.dark .dark\\:bg-gray-700){--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity))}:is(.dark .dark\\:bg-gray-800){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}:is(.dark .dark\\:bg-gray-800\\/80){background-color:#1f2937cc}:is(.dark .dark\\:bg-gray-900){--tw-bg-opacity: 1;background-color:rgb(17 24 39 / var(--tw-bg-opacity))}:is(.dark .dark\\:bg-gray-900\\/30){background-color:#1118274d}:is(.dark .dark\\:bg-green-900\\/30){background-color:#14532d4d}:is(.dark .dark\\:bg-purple-900\\/30){background-color:#581c874d}:is(.dark .dark\\:bg-red-900\\/30){background-color:#7f1d1d4d}:is(.dark .dark\\:bg-teal-900\\/30){background-color:#134e4a4d}:is(.dark .dark\\:bg-yellow-900\\/30){background-color:#713f124d}:is(.dark .dark\\:text-blue-300){--tw-text-opacity: 1;color:rgb(147 197 253 / var(--tw-text-opacity))}:is(.dark .dark\\:text-blue-400){--tw-text-opacity: 1;color:rgb(96 165 250 / var(--tw-text-opacity))}:is(.dark .dark\\:text-gray-100){--tw-text-opacity: 1;color:rgb(243 244 246 / var(--tw-text-opacity))}:is(.dark .dark\\:text-gray-200){--tw-text-opacity: 1;color:rgb(229 231 235 / var(--tw-text-opacity))}:is(.dark .dark\\:text-gray-300){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}:is(.dark .dark\\:text-gray-400){--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}:is(.dark .dark\\:text-gray-500){--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}:is(.dark .dark\\:text-green-300){--tw-text-opacity: 1;color:rgb(134 239 172 / var(--tw-text-opacity))}:is(.dark .dark\\:text-purple-300){--tw-text-opacity: 1;color:rgb(216 180 254 / var(--tw-text-opacity))}:is(.dark .dark\\:text-red-300){--tw-text-opacity: 1;color:rgb(252 165 165 / var(--tw-text-opacity))}:is(.dark .dark\\:text-red-500){--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity))}:is(.dark .dark\\:text-teal-300){--tw-text-opacity: 1;color:rgb(94 234 212 / var(--tw-text-opacity))}:is(.dark .dark\\:text-white){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}:is(.dark .dark\\:text-yellow-300){--tw-text-opacity: 1;color:rgb(253 224 71 / var(--tw-text-opacity))}:is(.dark .dark\\:placeholder-gray-400)::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}:is(.dark .dark\\:placeholder-gray-400)::placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}:is(.dark .dark\\:hover\\:bg-gray-600:hover){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity))}:is(.dark .dark\\:hover\\:bg-gray-700:hover){--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity))}:is(.dark .dark\\:hover\\:bg-gray-800:hover){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}:is(.dark .dark\\:hover\\:text-gray-200:hover){--tw-text-opacity: 1;color:rgb(229 231 235 / var(--tw-text-opacity))}:is(.dark .dark\\:hover\\:text-gray-300:hover){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}:is(.dark .dark\\:focus\\:ring-blue-200:focus){--tw-ring-opacity: 1;--tw-ring-color: rgb(191 219 254 / var(--tw-ring-opacity))}:is(.dark .dark\\:focus\\:ring-blue-400:focus){--tw-ring-opacity: 1;--tw-ring-color: rgb(96 165 250 / var(--tw-ring-opacity))}:is(.dark .dark\\:focus\\:ring-gray-500:focus){--tw-ring-opacity: 1;--tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity))}:is(.dark .dark\\:focus\\:ring-gray-600:focus){--tw-ring-opacity: 1;--tw-ring-color: rgb(75 85 99 / var(--tw-ring-opacity))}:is(.dark .dark\\:focus\\:ring-offset-gray-800:focus){--tw-ring-offset-color: #1f2937}@media (min-width: 640px){.sm\\:\\!w-auto{width:auto!important}.sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.sm\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.sm\\:\\!flex-row{flex-direction:row!important}.sm\\:\\!flex-wrap{flex-wrap:wrap!important}.sm\\:\\!items-center{align-items:center!important}.sm\\:\\!px-6{padding-left:1.5rem!important;padding-right:1.5rem!important}.sm\\:opacity-0{opacity:0}.group:hover .sm\\:group-hover\\:opacity-100{opacity:1}}@media (min-width: 1024px){.lg\\:\\!w-auto{width:auto!important}.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.lg\\:\\!flex-row{flex-direction:row!important}.lg\\:\\!items-end{align-items:flex-end!important}.lg\\:\\!justify-between{justify-content:space-between!important}}.\\[\\&\\>svg\\]\\:h-3\\.5>svg{height:.875rem}.\\[\\&\\>svg\\]\\:h-4>svg{height:1rem}.\\[\\&\\>svg\\]\\:w-3\\.5>svg{width:.875rem}.\\[\\&\\>svg\\]\\:w-4>svg{width:1rem}', nt = (a, o = "DD MMM YYYY") => {
  if (!a) return "N/A";
  const e = new Date(a);
  if (isNaN(e.getTime())) return "Invalid Date";
  const t = (l) => String(l).padStart(2, "0"), i = {
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
  return o.replace(
    /YYYY|YY|MMMM|MMM|MM|M|DD|D|dddd|ddd|HH|hh|mm|ss|A/g,
    (l) => String(i[l])
  );
}, wr = (a, o, e = []) => {
  if (!(o != null && o.trim())) return a;
  const t = o.toLowerCase(), i = (l) => l == null ? [] : typeof l == "object" ? Object.values(l).flatMap(i) : [String(l)];
  return a.filter((l) => {
    let n = [];
    return e.length > 0 ? e.forEach((c) => {
      l[c] !== void 0 && n.push(...i(l[c]));
    }) : n = i(l), n.some(
      (c) => c.toLowerCase().includes(t)
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
}, we = rt.forwardRef(
  ({
    className: a = "",
    variant: o = "contained",
    color: e = "default",
    size: t = "default",
    fullWidth: i = !1,
    children: l,
    ...n
  }, c) => {
    var m;
    const g = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", p = {
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
    }, u = ((m = b[e]) == null ? void 0 : m[o]) || b.default.contained, s = p[t] || p.default, w = x(
      f.button.root,
      g,
      u,
      s,
      i ? "w-full" : "",
      a
    );
    return /* @__PURE__ */ r(
      "button",
      {
        ref: c,
        type: n.type || "button",
        className: w,
        ...n,
        children: l
      }
    );
  }
);
we.displayName = "Button";
function me({
  label: a,
  required: o = !1,
  infoText: e = ""
}) {
  return /* @__PURE__ */ r(Y, { children: /* @__PURE__ */ h(
    "label",
    {
      className: x(
        f.field.label,
        "flex text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
      ),
      children: [
        a,
        o && /* @__PURE__ */ r("span", { className: "ml-1", children: "*" }),
        e && /* @__PURE__ */ h("span", { className: "ml-2 relative group inline-flex items-center cursor-pointer", children: [
          /* @__PURE__ */ r(tr, { className: "w-4 h-4 text-gray-500 dark:text-gray-400" }),
          /* @__PURE__ */ r(
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
], mr = ({
  options: a = [],
  value: o = "",
  defaultValue: e = "",
  onChange: t,
  placeholder: i = "Select option",
  className: l = "",
  disabled: n = !1,
  search: c = !1,
  label: g = "",
  required: p = !1,
  name: b = "",
  parentClass: u = "",
  multiple: s = !1,
  dropdownMaxHeight: w = "",
  formData: m = {},
  countriesList: y = !1,
  dependencyKey: S = "",
  errorMessage: k = ""
}) => {
  var P;
  const [_, A] = D(!1), [F, I] = D(""), [E, T] = D(!0), v = de(null), R = de(null), [M, z] = D(
    []
  ), G = o || o === !1 ? o : e, K = (C) => C == null || C === "" ? "" : String(typeof C == "boolean" ? C : C ?? ""), re = () => Te.map((W) => ({
    value: W.code,
    label: W.label,
    code: W.code
  }));
  V(
    () => {
      (async () => {
        if (y == !0)
          z(re());
        else if (typeof a == "function") {
          const W = await a(m);
          z(W || []);
        } else
          z(a || []);
      })();
    },
    S ? [a, m == null ? void 0 : m[S]] : [a]
  );
  const ae = s ? (G || []).map(K) : K(G), j = M.filter(
    (C) => C.label.toLowerCase().includes(F.toLowerCase())
  ), ce = (C) => {
    const W = K(C);
    return s ? ae.includes(W) : W === ae;
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
    if (C === "true" ? W = !0 : C === "false" && (W = !1), s) {
      const U = ae.includes(
        K(C)
      );
      let pe;
      U ? pe = (Array.isArray(o) ? o : []).filter(
        (ve) => K(ve) !== K(C)
      ) : pe = [...Array.isArray(o) ? o : [], W], t == null || t(pe);
    } else
      t == null || t(W), A(!1);
    I("");
  }, te = s ? M.filter((C) => ce(C.value)).map((C) => C.label).join(", ") : (P = M.find((C) => ce(C.value))) == null ? void 0 : P.label;
  return V(() => {
    (G || G === !1) && setTimeout(() => {
      t == null || t(G);
    }, 100);
  }, []), /* @__PURE__ */ h(
    "div",
    {
      className: x(
        f.field.wrapper,
        u || "col-span-12"
      ),
      children: [
        /* @__PURE__ */ r(me, { label: g, required: p }),
        /* @__PURE__ */ h(
          "div",
          {
            className: x(f.field.input, "relative", l),
            ref: v,
            children: [
              /* @__PURE__ */ r(
                "select",
                {
                  name: "hidden_select_for_validation",
                  value: te || "",
                  required: p,
                  multiple: s,
                  id: `field-${b}`,
                  className: "absolute opacity-0 right-1/2 top-[80%] -translate-x-1/2 -translate-y-1/2 pointer-events-none h-[10px]",
                  onChange: () => {
                  },
                  children: /* @__PURE__ */ r("option", { hidden: !0, value: te, children: te })
                }
              ),
              /* @__PURE__ */ h(
                "button",
                {
                  type: "button",
                  onClick: () => !n && A(!_),
                  disabled: n,
                  className: `w-full h-10 px-3 border border-gray-300 dark:border-gray-600 rounded-md text-left text-sm flex items-center justify-between 
          ${te ? "dark:text-white" : "text-gray-500 dark:text-gray-400"} 
          ${n ? "opacity-50 cursor-not-allowed" : "dark:bg-gray-700"}
          ${k ? "border-red-500" : ""}`,
                  children: [
                    /* @__PURE__ */ r("span", { className: "truncate", children: te || i }),
                    /* @__PURE__ */ r(
                      zt,
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
                    c && /* @__PURE__ */ r("div", { className: "p-2 border-b border-gray-200 dark:border-gray-600", children: /* @__PURE__ */ h("div", { className: "relative", children: [
                      /* @__PURE__ */ r(wt, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }),
                      /* @__PURE__ */ r(
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
                    /* @__PURE__ */ r(
                      "div",
                      {
                        className: "max-h-40 overflow-y-auto",
                        style: {
                          maxHeight: w || ""
                        },
                        children: j.length > 0 ? j.map((C) => /* @__PURE__ */ h(
                          "button",
                          {
                            type: "button",
                            onClick: () => X(String(C.value)),
                            className: `w-full px-3 py-2 text-left text-sm flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 
                    ${ce(C.value) ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300" : ""}`,
                            children: [
                              /* @__PURE__ */ h("div", { className: "flex gap-2 items-center", children: [
                                y && (C == null ? void 0 : C.code) && /* @__PURE__ */ r(
                                  "img",
                                  {
                                    src: `https://flagcdn.com/w20/${C == null ? void 0 : C.code.toLowerCase()}.png`,
                                    alt: C.code,
                                    className: "w-5 h-3 object-cover"
                                  }
                                ),
                                /* @__PURE__ */ r("span", { children: C.label })
                              ] }),
                              s && ce(C.value) && /* @__PURE__ */ r(rr, { className: "w-4 h-4" })
                            ]
                          },
                          String(C.value)
                        )) : /* @__PURE__ */ r("div", { className: "px-3 py-2 text-sm text-gray-500 dark:text-gray-400", children: "No options found" })
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        k && /* @__PURE__ */ r(
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
    b
  );
}, It = rt.forwardRef(
  ({
    label: a,
    required: o,
    parentClass: e = "col-span-12",
    className: t = "",
    value: i = !1,
    onChange: l,
    disabled: n = !1,
    errorMessage: c = "",
    name: g,
    ...p
  }, b) => /* @__PURE__ */ h(
    "div",
    {
      className: x(
        f.field.wrapper,
        "flex justify-between",
        e
      ),
      children: [
        a && /* @__PURE__ */ r(me, { label: a, required: o }),
        /* @__PURE__ */ h("label", { className: "relative inline-flex items-center cursor-pointer", children: [
          /* @__PURE__ */ r(
            "input",
            {
              type: "checkbox",
              ref: b,
              id: `field-${g}`,
              className: x(f.field.input, "sr-only peer"),
              checked: i,
              onChange: (u) => l == null ? void 0 : l(u.target.checked),
              disabled: n,
              ...p
            }
          ),
          /* @__PURE__ */ r(
            "div",
            {
              className: `
              w-11 h-6 bg-gray-200 peer-focus:outline-none
              rounded-full peer dark:bg-gray-700
              peer-checked:bg-primary-600
              peer-disabled:opacity-50 peer-disabled:cursor-not-allowed
              transition-colors duration-200
              ${c ? "border-red-500" : ""}
              ${t}
            `
            }
          ),
          /* @__PURE__ */ r(
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
        c && /* @__PURE__ */ r(
          "span",
          {
            className: x(
              f.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: c
          }
        )
      ]
    }
  )
);
It.displayName = "Switch";
function fr({
  label: a = "",
  value: o = "",
  name: e = "",
  parentClass: t = "",
  onChange: i,
  disabled: l = !1,
  required: n = !1,
  placeholder: c = "Phone number",
  search: g = !1,
  countriesList: p = !1,
  defaultCountry: b = "",
  errorMessage: u = ""
}) {
  const s = (R) => Te.find((M) => M.code == R), [w, m] = D(
    s(b) || Te[0]
  ), [y, S] = D(""), [k, _] = D(!1), [A, F] = D(""), I = de(null);
  V(() => {
    if (typeof o == "string" && o.startsWith("+")) {
      const R = Te.filter((M) => o.startsWith("+" + M.phone)).sort((M, z) => z.phone.length - M.phone.length)[0];
      if (R) {
        m(R), S(o.replace("+" + R.phone, ""));
        return;
      }
    }
    S(o || "");
  }, [o]);
  const E = (R) => {
    const M = R.target.value.replace(/\D/g, "");
    S(M), w && i && i("+" + w.phone + M);
  }, T = (R) => {
    m(R), i && i("+" + R.phone + y), _(!1), F("");
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
      i == null || i(G);
    };
    return /* @__PURE__ */ r(Y, { children: /* @__PURE__ */ h(
      "div",
      {
        className: x(
          f.field.wrapper,
          t || "col-span-12"
        ),
        children: [
          /* @__PURE__ */ r(me, { label: a, required: n }),
          /* @__PURE__ */ r(
            "input",
            {
              type: "text",
              value: o,
              onChange: R,
              placeholder: c,
              disabled: l,
              required: n,
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
  return /* @__PURE__ */ r(Y, { children: /* @__PURE__ */ h(
    "div",
    {
      className: x(
        f.field.wrapper,
        t || "col-span-12"
      ),
      children: [
        /* @__PURE__ */ r(me, { label: a, required: n }),
        /* @__PURE__ */ h("div", { className: "relative ", ref: I, children: [
          /* @__PURE__ */ h(
            "div",
            {
              className: `h-[40px] flex items-center border rounded-md px-2 bg-white dark:bg-gray-700 transition-all
  ${k ? "ring-0.5 ring-blue-100 border-blue-300" : "border-gray-300 dark:border-gray-600"}
  ${l ? "opacity-60 cursor-not-allowed" : ""}
    ${u ? "border-red-500" : ""}`,
              children: [
                /* @__PURE__ */ h(
                  "button",
                  {
                    type: "button",
                    disabled: l,
                    onClick: () => _(!k),
                    className: "flex items-center gap-1 pr-2 border-r border-gray-300 dark:border-gray-700 focus:outline-none",
                    children: [
                      w ? /* @__PURE__ */ r(
                        "img",
                        {
                          src: `https://flagcdn.com/w20/${w.code.toLowerCase()}.png`,
                          alt: w.code,
                          className: "w-5 h-3 object-cover"
                        }
                      ) : /* @__PURE__ */ r("span", { className: "text-gray-400 text-xs", children: "🌐" }),
                      /* @__PURE__ */ r(zt, { className: "w-3 h-3 text-gray-500" })
                    ]
                  }
                ),
                w && /* @__PURE__ */ h("span", { className: "ml-2 text-sm text-gray-700 dark:text-gray-200 whitespace-nowrap", children: [
                  "+",
                  w.phone
                ] }),
                /* @__PURE__ */ r(
                  "input",
                  {
                    type: "tel",
                    value: y,
                    onChange: E,
                    required: n,
                    id: `field-${e}`,
                    disabled: l || !w,
                    placeholder: w ? c : "Select a country",
                    className: "flex-1 ml-2 bg-transparent outline-none text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400"
                  }
                ),
                /* @__PURE__ */ r(
                  "input",
                  {
                    type: "tel",
                    required: n,
                    tabIndex: -1,
                    readOnly: !0,
                    value: w && y ? "+" + w.phone + y : "",
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
            g && /* @__PURE__ */ r("div", { className: "p-2 border-b border-gray-200 dark:border-gray-700", children: /* @__PURE__ */ h("div", { className: "relative", children: [
              /* @__PURE__ */ r(wt, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" }),
              /* @__PURE__ */ r(
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
                  /* @__PURE__ */ r(
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
        u && /* @__PURE__ */ r(
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
const Ut = rt.forwardRef(
  ({ className: a = "", label: o, required: e, errorMessage: t = "", name: i, ...l }, n) => {
    const c = x(
      f.field.input,
      "placeholder-gray-400 dark:placeholder-gray-400",
      t ? "border-red-500" : "",
      a
    );
    return /* @__PURE__ */ r(Y, { children: /* @__PURE__ */ h(
      "div",
      {
        className: x(
          f.field.wrapper,
          l.parentClass || "col-span-12"
        ),
        children: [
          /* @__PURE__ */ r(me, { label: o, required: e }),
          /* @__PURE__ */ h("div", { className: "relative", children: [
            /* @__PURE__ */ r(
              "textarea",
              {
                className: c,
                ref: n,
                id: `field-${i}`,
                required: e,
                ...l
              }
            ),
            t && /* @__PURE__ */ r(
              "span",
              {
                className: x(
                  f.field.error,
                  "text-red-500 text-xs mt-1"
                ),
                children: t
              }
            )
          ] })
        ]
      },
      i
    ) });
  }
);
Ut.displayName = "TextArea";
var lt = function(a, o) {
  return lt = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
    e.__proto__ = t;
  } || function(e, t) {
    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
  }, lt(a, o);
};
function yr(a, o) {
  if (typeof o != "function" && o !== null)
    throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
  lt(a, o);
  function e() {
    this.constructor = a;
  }
  a.prototype = o === null ? Object.create(o) : (e.prototype = o.prototype, new e());
}
var se = function() {
  return se = Object.assign || function(o) {
    for (var e, t = 1, i = arguments.length; t < i; t++) {
      e = arguments[t];
      for (var l in e) Object.prototype.hasOwnProperty.call(e, l) && (o[l] = e[l]);
    }
    return o;
  }, se.apply(this, arguments);
};
function vr(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var yt = !1, Me, st, ct, Qe, et, Ft, tt, dt, pt, ut, Ot, ht, bt, Tt, $t;
function be() {
  if (!yt) {
    yt = !0;
    var a = navigator.userAgent, o = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(a), e = /(Mac OS X)|(Windows)|(Linux)/.exec(a);
    if (ht = /\b(iPhone|iP[ao]d)/.exec(a), bt = /\b(iP[ao]d)/.exec(a), ut = /Android/i.exec(a), Tt = /FBAN\/\w+;/i.exec(a), $t = /Mobile/i.exec(a), Ot = !!/Win64/.exec(a), o) {
      Me = o[1] ? parseFloat(o[1]) : o[5] ? parseFloat(o[5]) : NaN, Me && document && document.documentMode && (Me = document.documentMode);
      var t = /(?:Trident\/(\d+.\d+))/.exec(a);
      Ft = t ? parseFloat(t[1]) + 4 : Me, st = o[2] ? parseFloat(o[2]) : NaN, ct = o[3] ? parseFloat(o[3]) : NaN, Qe = o[4] ? parseFloat(o[4]) : NaN, Qe ? (o = /(?:Chrome\/(\d+\.\d+))/.exec(a), et = o && o[1] ? parseFloat(o[1]) : NaN) : et = NaN;
    } else
      Me = st = ct = et = Qe = NaN;
    if (e) {
      if (e[1]) {
        var i = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(a);
        tt = i ? parseFloat(i[1].replace("_", ".")) : !0;
      } else
        tt = !1;
      dt = !!e[2], pt = !!e[3];
    } else
      tt = dt = pt = !1;
  }
}
var gt = {
  /**
   *  Check if the UA is Internet Explorer.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  ie: function() {
    return be() || Me;
  },
  /**
   * Check if we're in Internet Explorer compatibility mode.
   *
   * @return bool true if in compatibility mode, false if
   * not compatibility mode or not ie
   */
  ieCompatibilityMode: function() {
    return be() || Ft > Me;
  },
  /**
   * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
   * only need this because Skype can't handle 64-bit IE yet.  We need to remove
   * this when we don't need it -- tracked by #601957.
   */
  ie64: function() {
    return gt.ie() && Ot;
  },
  /**
   *  Check if the UA is Firefox.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  firefox: function() {
    return be() || st;
  },
  /**
   *  Check if the UA is Opera.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  opera: function() {
    return be() || ct;
  },
  /**
   *  Check if the UA is WebKit.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  webkit: function() {
    return be() || Qe;
  },
  /**
   *  For Push
   *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
   */
  safari: function() {
    return gt.webkit();
  },
  /**
   *  Check if the UA is a Chrome browser.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  chrome: function() {
    return be() || et;
  },
  /**
   *  Check if the user is running Windows.
   *
   *  @return bool `true' if the user's OS is Windows.
   */
  windows: function() {
    return be() || dt;
  },
  /**
   *  Check if the user is running Mac OS X.
   *
   *  @return float|bool   Returns a float if a version number is detected,
   *                       otherwise true/false.
   */
  osx: function() {
    return be() || tt;
  },
  /**
   * Check if the user is running Linux.
   *
   * @return bool `true' if the user's OS is some flavor of Linux.
   */
  linux: function() {
    return be() || pt;
  },
  /**
   * Check if the user is running on an iPhone or iPod platform.
   *
   * @return bool `true' if the user is running some flavor of the
   *    iPhone OS.
   */
  iphone: function() {
    return be() || ht;
  },
  mobile: function() {
    return be() || ht || bt || ut || $t;
  },
  nativeApp: function() {
    return be() || Tt;
  },
  android: function() {
    return be() || ut;
  },
  ipad: function() {
    return be() || bt;
  }
}, xr = gt, kr = !!(typeof window < "u" && window.document && window.document.createElement), Nr = {
  canUseDOM: kr
}, Sr = Nr, Bt = Sr, Gt;
Bt.canUseDOM && (Gt = document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
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
function _r(a, o) {
  if (!Bt.canUseDOM || o && !("addEventListener" in document))
    return !1;
  var e = "on" + a, t = e in document;
  if (!t) {
    var i = document.createElement("div");
    i.setAttribute(e, "return;"), t = typeof i[e] == "function";
  }
  return !t && Gt && a === "wheel" && (t = document.implementation.hasFeature("Events.wheel", "3.0")), t;
}
var Rr = _r, Cr = xr, Mr = Rr, vt = 10, xt = 40, kt = 800;
function Yt(a) {
  var o = 0, e = 0, t = 0, i = 0;
  return "detail" in a && (e = a.detail), "wheelDelta" in a && (e = -a.wheelDelta / 120), "wheelDeltaY" in a && (e = -a.wheelDeltaY / 120), "wheelDeltaX" in a && (o = -a.wheelDeltaX / 120), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (o = e, e = 0), t = o * vt, i = e * vt, "deltaY" in a && (i = a.deltaY), "deltaX" in a && (t = a.deltaX), (t || i) && a.deltaMode && (a.deltaMode == 1 ? (t *= xt, i *= xt) : (t *= kt, i *= kt)), t && !o && (o = t < 1 ? -1 : 1), i && !e && (e = i < 1 ? -1 : 1), {
    spinX: o,
    spinY: e,
    pixelX: t,
    pixelY: i
  };
}
Yt.getEventType = function() {
  return Cr.firefox() ? "DOMMouseScroll" : Mr("wheel") ? "wheel" : "mousewheel";
};
var Dr = Yt, Lr = Dr;
const Pr = /* @__PURE__ */ vr(Lr);
function Ar(a, o, e, t, i, l) {
  l === void 0 && (l = 0);
  var n = Ee(a, o, l), c = n.width, g = n.height, p = Math.min(c, e), b = Math.min(g, t);
  return p > b * i ? {
    width: b * i,
    height: b
  } : {
    width: p,
    height: p / i
  };
}
function Er(a) {
  return a.width > a.height ? a.width / a.naturalWidth : a.height / a.naturalHeight;
}
function Oe(a, o, e, t, i) {
  i === void 0 && (i = 0);
  var l = Ee(o.width, o.height, i), n = l.width, c = l.height;
  return {
    x: Nt(a.x, n, e.width, t),
    y: Nt(a.y, c, e.height, t)
  };
}
function Nt(a, o, e, t) {
  var i = o * t / 2 - e / 2;
  return ot(a, -i, i);
}
function St(a, o) {
  return Math.sqrt(Math.pow(a.y - o.y, 2) + Math.pow(a.x - o.x, 2));
}
function _t(a, o) {
  return Math.atan2(o.y - a.y, o.x - a.x) * 180 / Math.PI;
}
function jr(a, o, e, t, i, l, n) {
  l === void 0 && (l = 0), n === void 0 && (n = !0);
  var c = n ? zr : Ir, g = Ee(o.width, o.height, l), p = Ee(o.naturalWidth, o.naturalHeight, l), b = {
    x: c(100, ((g.width - e.width / i) / 2 - a.x / i) / g.width * 100),
    y: c(100, ((g.height - e.height / i) / 2 - a.y / i) / g.height * 100),
    width: c(100, e.width / g.width * 100 / i),
    height: c(100, e.height / g.height * 100 / i)
  }, u = Math.round(c(p.width, b.width * p.width / 100)), s = Math.round(c(p.height, b.height * p.height / 100)), w = p.width >= p.height * t, m = w ? {
    width: Math.round(s * t),
    height: s
  } : {
    width: u,
    height: Math.round(u / t)
  }, y = se(se({}, m), {
    x: Math.round(c(p.width - m.width, b.x * p.width / 100)),
    y: Math.round(c(p.height - m.height, b.y * p.height / 100))
  });
  return {
    croppedAreaPercentages: b,
    croppedAreaPixels: y
  };
}
function zr(a, o) {
  return Math.min(a, Math.max(0, o));
}
function Ir(a, o) {
  return o;
}
function Ur(a, o, e, t, i, l) {
  var n = Ee(o.width, o.height, e), c = ot(t.width / n.width * (100 / a.width), i, l), g = {
    x: c * n.width / 2 - t.width / 2 - n.width * c * (a.x / 100),
    y: c * n.height / 2 - t.height / 2 - n.height * c * (a.y / 100)
  };
  return {
    crop: g,
    zoom: c
  };
}
function Fr(a, o, e) {
  var t = Er(o);
  return e.height > e.width ? e.height / (a.height * t) : e.width / (a.width * t);
}
function Or(a, o, e, t, i, l) {
  e === void 0 && (e = 0);
  var n = Ee(o.naturalWidth, o.naturalHeight, e), c = ot(Fr(a, o, t), i, l), g = t.height > t.width ? t.height / a.height : t.width / a.width, p = {
    x: ((n.width - a.width) / 2 - a.x) * g,
    y: ((n.height - a.height) / 2 - a.y) * g
  };
  return {
    crop: p,
    zoom: c
  };
}
function Rt(a, o) {
  return {
    x: (o.x + a.x) / 2,
    y: (o.y + a.y) / 2
  };
}
function Tr(a) {
  return a * Math.PI / 180;
}
function Ee(a, o, e) {
  var t = Tr(e);
  return {
    width: Math.abs(Math.cos(t) * a) + Math.abs(Math.sin(t) * o),
    height: Math.abs(Math.sin(t) * a) + Math.abs(Math.cos(t) * o)
  };
}
function ot(a, o, e) {
  return Math.min(Math.max(a, o), e);
}
function Je() {
  for (var a = [], o = 0; o < arguments.length; o++)
    a[o] = arguments[o];
  return a.filter(function(e) {
    return typeof e == "string" && e.length > 0;
  }).join(" ").trim();
}
var $r = `.reactEasyCrop_Container {
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
`, Br = 1, Gr = 3, Yr = 1, Kr = (
  /** @class */
  function(a) {
    yr(o, a);
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
          var t = !0;
          e.resizeObserver = new window.ResizeObserver(function(i) {
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
          var i = Ur(e.props.initialCroppedAreaPercentages, e.mediaSize, e.props.rotation, t, e.props.minZoom, e.props.maxZoom), l = i.crop, n = i.zoom;
          e.props.onCropChange(l), e.props.onZoomChange && e.props.onZoomChange(n);
        } else if (e.props.initialCroppedAreaPixels) {
          var c = Or(e.props.initialCroppedAreaPixels, e.mediaSize, e.props.rotation, t, e.props.minZoom, e.props.maxZoom), l = c.crop, n = c.zoom;
          e.props.onCropChange(l), e.props.onZoomChange && e.props.onZoomChange(n);
        }
      }, e.computeSizes = function() {
        var t, i, l, n, c, g, p = e.imageRef.current || e.videoRef.current;
        if (p && e.containerRef) {
          e.containerRect = e.containerRef.getBoundingClientRect(), e.saveContainerPosition();
          var b = e.containerRect.width / e.containerRect.height, u = ((t = e.imageRef.current) === null || t === void 0 ? void 0 : t.naturalWidth) || ((i = e.videoRef.current) === null || i === void 0 ? void 0 : i.videoWidth) || 0, s = ((l = e.imageRef.current) === null || l === void 0 ? void 0 : l.naturalHeight) || ((n = e.videoRef.current) === null || n === void 0 ? void 0 : n.videoHeight) || 0, w = p.offsetWidth < u || p.offsetHeight < s, m = u / s, y = void 0;
          if (w)
            switch (e.state.mediaObjectFit) {
              default:
              case "contain":
                y = b > m ? {
                  width: e.containerRect.height * m,
                  height: e.containerRect.height
                } : {
                  width: e.containerRect.width,
                  height: e.containerRect.width / m
                };
                break;
              case "horizontal-cover":
                y = {
                  width: e.containerRect.width,
                  height: e.containerRect.width / m
                };
                break;
              case "vertical-cover":
                y = {
                  width: e.containerRect.height * m,
                  height: e.containerRect.height
                };
                break;
            }
          else
            y = {
              width: p.offsetWidth,
              height: p.offsetHeight
            };
          e.mediaSize = se(se({}, y), {
            naturalWidth: u,
            naturalHeight: s
          }), e.props.setMediaSize && e.props.setMediaSize(e.mediaSize);
          var S = e.props.cropSize ? e.props.cropSize : Ar(e.mediaSize.width, e.mediaSize.height, e.containerRect.width, e.containerRect.height, e.props.aspect, e.props.rotation);
          return (((c = e.state.cropSize) === null || c === void 0 ? void 0 : c.height) !== S.height || ((g = e.state.cropSize) === null || g === void 0 ? void 0 : g.width) !== S.width) && e.props.onCropSizeChange && e.props.onCropSizeChange(S), e.setState({
            cropSize: S
          }, e.recomputeCropPosition), e.props.setCropSize && e.props.setCropSize(S), S;
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
        e.currentDoc && (t.preventDefault(), e.currentDoc.addEventListener("mousemove", e.onMouseMove), e.currentDoc.addEventListener("mouseup", e.onDragStopped), e.saveContainerPosition(), e.onDragStart(o.getMousePoint(t)));
      }, e.onMouseMove = function(t) {
        return e.onDrag(o.getMousePoint(t));
      }, e.onScroll = function(t) {
        e.currentDoc && (t.preventDefault(), e.saveContainerPosition());
      }, e.onTouchStart = function(t) {
        e.currentDoc && (e.isTouching = !0, !(e.props.onTouchRequest && !e.props.onTouchRequest(t)) && (e.currentDoc.addEventListener("touchmove", e.onTouchMove, {
          passive: !1
        }), e.currentDoc.addEventListener("touchend", e.onDragStopped), e.saveContainerPosition(), t.touches.length === 2 ? e.onPinchStart(t) : t.touches.length === 1 && e.onDragStart(o.getTouchPoint(t.touches[0]))));
      }, e.onTouchMove = function(t) {
        t.preventDefault(), t.touches.length === 2 ? e.onPinchMove(t) : t.touches.length === 1 && e.onDrag(o.getTouchPoint(t.touches[0]));
      }, e.onGestureStart = function(t) {
        e.currentDoc && (t.preventDefault(), e.currentDoc.addEventListener("gesturechange", e.onGestureChange), e.currentDoc.addEventListener("gestureend", e.onGestureEnd), e.gestureZoomStart = e.props.zoom, e.gestureRotationStart = e.props.rotation);
      }, e.onGestureChange = function(t) {
        if (t.preventDefault(), !e.isTouching) {
          var i = o.getMousePoint(t), l = e.gestureZoomStart - 1 + t.scale;
          if (e.setNewZoom(l, i, {
            shouldUpdatePosition: !0
          }), e.props.onRotationChange) {
            var n = e.gestureRotationStart + t.rotation;
            e.props.onRotationChange(n);
          }
        }
      }, e.onGestureEnd = function(t) {
        e.cleanEvents();
      }, e.onDragStart = function(t) {
        var i, l, n = t.x, c = t.y;
        e.dragStartPosition = {
          x: n,
          y: c
        }, e.dragStartCrop = se({}, e.props.crop), (l = (i = e.props).onInteractionStart) === null || l === void 0 || l.call(i);
      }, e.onDrag = function(t) {
        var i = t.x, l = t.y;
        e.currentWindow && (e.rafDragTimeout && e.currentWindow.cancelAnimationFrame(e.rafDragTimeout), e.rafDragTimeout = e.currentWindow.requestAnimationFrame(function() {
          if (e.state.cropSize && !(i === void 0 || l === void 0)) {
            var n = i - e.dragStartPosition.x, c = l - e.dragStartPosition.y, g = {
              x: e.dragStartCrop.x + n,
              y: e.dragStartCrop.y + c
            }, p = e.props.restrictPosition ? Oe(g, e.mediaSize, e.state.cropSize, e.props.zoom, e.props.rotation) : g;
            e.props.onCropChange(p);
          }
        }));
      }, e.onDragStopped = function() {
        var t, i;
        e.isTouching = !1, e.cleanEvents(), e.emitCropData(), (i = (t = e.props).onInteractionEnd) === null || i === void 0 || i.call(t);
      }, e.onWheel = function(t) {
        if (e.currentWindow && !(e.props.onWheelRequest && !e.props.onWheelRequest(t))) {
          t.preventDefault();
          var i = o.getMousePoint(t), l = Pr(t).pixelY, n = e.props.zoom - l * e.props.zoomSpeed / 200;
          e.setNewZoom(n, i, {
            shouldUpdatePosition: !0
          }), e.state.hasWheelJustStarted || e.setState({
            hasWheelJustStarted: !0
          }, function() {
            var c, g;
            return (g = (c = e.props).onInteractionStart) === null || g === void 0 ? void 0 : g.call(c);
          }), e.wheelTimer && clearTimeout(e.wheelTimer), e.wheelTimer = e.currentWindow.setTimeout(function() {
            return e.setState({
              hasWheelJustStarted: !1
            }, function() {
              var c, g;
              return (g = (c = e.props).onInteractionEnd) === null || g === void 0 ? void 0 : g.call(c);
            });
          }, 250);
        }
      }, e.getPointOnContainer = function(t, i) {
        var l = t.x, n = t.y;
        if (!e.containerRect)
          throw new Error("The Cropper is not mounted");
        return {
          x: e.containerRect.width / 2 - (l - i.x),
          y: e.containerRect.height / 2 - (n - i.y)
        };
      }, e.getPointOnMedia = function(t) {
        var i = t.x, l = t.y, n = e.props, c = n.crop, g = n.zoom;
        return {
          x: (i + c.x) / g,
          y: (l + c.y) / g
        };
      }, e.setNewZoom = function(t, i, l) {
        var n = l === void 0 ? {} : l, c = n.shouldUpdatePosition, g = c === void 0 ? !0 : c;
        if (!(!e.state.cropSize || !e.props.onZoomChange)) {
          var p = ot(t, e.props.minZoom, e.props.maxZoom);
          if (g) {
            var b = e.getPointOnContainer(i, e.containerPosition), u = e.getPointOnMedia(b), s = {
              x: u.x * p - b.x,
              y: u.y * p - b.y
            }, w = e.props.restrictPosition ? Oe(s, e.mediaSize, e.state.cropSize, p, e.props.rotation) : s;
            e.props.onCropChange(w);
          }
          e.props.onZoomChange(p);
        }
      }, e.getCropData = function() {
        if (!e.state.cropSize)
          return null;
        var t = e.props.restrictPosition ? Oe(e.props.crop, e.mediaSize, e.state.cropSize, e.props.zoom, e.props.rotation) : e.props.crop;
        return jr(t, e.mediaSize, e.state.cropSize, e.getAspect(), e.props.zoom, e.props.rotation, e.props.restrictPosition);
      }, e.emitCropData = function() {
        var t = e.getCropData();
        if (t) {
          var i = t.croppedAreaPercentages, l = t.croppedAreaPixels;
          e.props.onCropComplete && e.props.onCropComplete(i, l), e.props.onCropAreaChange && e.props.onCropAreaChange(i, l);
        }
      }, e.emitCropAreaChange = function() {
        var t = e.getCropData();
        if (t) {
          var i = t.croppedAreaPercentages, l = t.croppedAreaPixels;
          e.props.onCropAreaChange && e.props.onCropAreaChange(i, l);
        }
      }, e.recomputeCropPosition = function() {
        var t, i;
        if (e.state.cropSize) {
          var l = e.props.crop;
          if (e.isInitialized && (!((t = e.previousCropSize) === null || t === void 0) && t.width) && (!((i = e.previousCropSize) === null || i === void 0) && i.height)) {
            var n = Math.abs(e.previousCropSize.width - e.state.cropSize.width) > 1e-6 || Math.abs(e.previousCropSize.height - e.state.cropSize.height) > 1e-6;
            if (n) {
              var c = e.state.cropSize.width / e.previousCropSize.width, g = e.state.cropSize.height / e.previousCropSize.height;
              l = {
                x: e.props.crop.x * c,
                y: e.props.crop.y * g
              };
            }
          }
          var p = e.props.restrictPosition ? Oe(l, e.mediaSize, e.state.cropSize, e.props.zoom, e.props.rotation) : l;
          e.previousCropSize = e.state.cropSize, e.props.onCropChange(p), e.emitCropData();
        }
      }, e.onKeyDown = function(t) {
        var i, l, n = e.props, c = n.crop, g = n.onCropChange, p = n.keyboardStep, b = n.zoom, u = n.rotation, s = p;
        if (e.state.cropSize) {
          t.shiftKey && (s *= 0.2);
          var w = se({}, c);
          switch (t.key) {
            case "ArrowUp":
              w.y -= s, t.preventDefault();
              break;
            case "ArrowDown":
              w.y += s, t.preventDefault();
              break;
            case "ArrowLeft":
              w.x -= s, t.preventDefault();
              break;
            case "ArrowRight":
              w.x += s, t.preventDefault();
              break;
            default:
              return;
          }
          e.props.restrictPosition && (w = Oe(w, e.mediaSize, e.state.cropSize, b, u)), t.repeat || (l = (i = e.props).onInteractionStart) === null || l === void 0 || l.call(i), g(w);
        }
      }, e.onKeyUp = function(t) {
        var i, l;
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
        e.emitCropData(), (l = (i = e.props).onInteractionEnd) === null || l === void 0 || l.call(i);
      }, e;
    }
    return o.prototype.componentDidMount = function() {
      !this.currentDoc || !this.currentWindow || (this.containerRef && (this.containerRef.ownerDocument && (this.currentDoc = this.containerRef.ownerDocument), this.currentDoc.defaultView && (this.currentWindow = this.currentDoc.defaultView), this.initResizeObserver(), typeof window.ResizeObserver > "u" && this.currentWindow.addEventListener("resize", this.computeSizes), this.props.zoomWithScroll && this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }), this.containerRef.addEventListener("gesturestart", this.onGestureStart)), this.currentDoc.addEventListener("scroll", this.onScroll), this.props.disableAutomaticStylesInjection || (this.styleRef = this.currentDoc.createElement("style"), this.styleRef.setAttribute("type", "text/css"), this.props.nonce && this.styleRef.setAttribute("nonce", this.props.nonce), this.styleRef.innerHTML = $r, this.currentDoc.head.appendChild(this.styleRef)), this.imageRef.current && this.imageRef.current.complete && this.onMediaLoad(), this.props.setImageRef && this.props.setImageRef(this.imageRef), this.props.setVideoRef && this.props.setVideoRef(this.videoRef), this.props.setCropperRef && this.props.setCropperRef(this.cropperRef));
    }, o.prototype.componentWillUnmount = function() {
      var e, t;
      !this.currentDoc || !this.currentWindow || (typeof window.ResizeObserver > "u" && this.currentWindow.removeEventListener("resize", this.computeSizes), (e = this.resizeObserver) === null || e === void 0 || e.disconnect(), this.containerRef && this.containerRef.removeEventListener("gesturestart", this.preventZoomSafari), this.styleRef && ((t = this.styleRef.parentNode) === null || t === void 0 || t.removeChild(this.styleRef)), this.cleanEvents(), this.props.zoomWithScroll && this.clearScrollEvent());
    }, o.prototype.componentDidUpdate = function(e) {
      var t, i, l, n, c, g, p, b, u;
      e.rotation !== this.props.rotation ? (this.computeSizes(), this.recomputeCropPosition()) : e.aspect !== this.props.aspect ? this.computeSizes() : e.objectFit !== this.props.objectFit ? this.computeSizes() : e.zoom !== this.props.zoom ? this.recomputeCropPosition() : ((t = e.cropSize) === null || t === void 0 ? void 0 : t.height) !== ((i = this.props.cropSize) === null || i === void 0 ? void 0 : i.height) || ((l = e.cropSize) === null || l === void 0 ? void 0 : l.width) !== ((n = this.props.cropSize) === null || n === void 0 ? void 0 : n.width) ? this.computeSizes() : (((c = e.crop) === null || c === void 0 ? void 0 : c.x) !== ((g = this.props.crop) === null || g === void 0 ? void 0 : g.x) || ((p = e.crop) === null || p === void 0 ? void 0 : p.y) !== ((b = this.props.crop) === null || b === void 0 ? void 0 : b.y)) && this.emitCropAreaChange(), e.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef && (this.props.zoomWithScroll ? this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }) : this.clearScrollEvent()), e.video !== this.props.video && ((u = this.videoRef.current) === null || u === void 0 || u.load());
      var s = this.getObjectFit();
      s !== this.state.mediaObjectFit && this.setState({
        mediaObjectFit: s
      }, this.computeSizes);
    }, o.prototype.getAspect = function() {
      var e = this.props, t = e.cropSize, i = e.aspect;
      return t ? t.width / t.height : i;
    }, o.prototype.getObjectFit = function() {
      var e, t, i, l;
      if (this.props.objectFit === "cover") {
        var n = this.imageRef.current || this.videoRef.current;
        if (n && this.containerRef) {
          this.containerRect = this.containerRef.getBoundingClientRect();
          var c = this.containerRect.width / this.containerRect.height, g = ((e = this.imageRef.current) === null || e === void 0 ? void 0 : e.naturalWidth) || ((t = this.videoRef.current) === null || t === void 0 ? void 0 : t.videoWidth) || 0, p = ((i = this.imageRef.current) === null || i === void 0 ? void 0 : i.naturalHeight) || ((l = this.videoRef.current) === null || l === void 0 ? void 0 : l.videoHeight) || 0, b = g / p;
          return b < c ? "horizontal-cover" : "vertical-cover";
        }
        return "horizontal-cover";
      }
      return this.props.objectFit;
    }, o.prototype.onPinchStart = function(e) {
      var t = o.getTouchPoint(e.touches[0]), i = o.getTouchPoint(e.touches[1]);
      this.lastPinchDistance = St(t, i), this.lastPinchRotation = _t(t, i), this.onDragStart(Rt(t, i));
    }, o.prototype.onPinchMove = function(e) {
      var t = this;
      if (!(!this.currentDoc || !this.currentWindow)) {
        var i = o.getTouchPoint(e.touches[0]), l = o.getTouchPoint(e.touches[1]), n = Rt(i, l);
        this.onDrag(n), this.rafPinchTimeout && this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout), this.rafPinchTimeout = this.currentWindow.requestAnimationFrame(function() {
          var c = St(i, l), g = t.props.zoom * (c / t.lastPinchDistance);
          t.setNewZoom(g, n, {
            shouldUpdatePosition: !1
          }), t.lastPinchDistance = c;
          var p = _t(i, l), b = t.props.rotation + (p - t.lastPinchRotation);
          t.props.onRotationChange && t.props.onRotationChange(b), t.lastPinchRotation = p;
        });
      }
    }, o.prototype.render = function() {
      var e = this, t, i = this.props, l = i.image, n = i.video, c = i.mediaProps, g = i.cropperProps, p = i.transform, b = i.crop, u = b.x, s = b.y, w = i.rotation, m = i.zoom, y = i.cropShape, S = i.showGrid, k = i.roundCropAreaPixels, _ = i.style, A = _.containerStyle, F = _.cropAreaStyle, I = _.mediaStyle, E = i.classes, T = E.containerClassName, v = E.cropAreaClassName, R = E.mediaClassName, M = (t = this.state.mediaObjectFit) !== null && t !== void 0 ? t : this.getObjectFit();
      return _e.createElement("div", {
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        ref: function(G) {
          return e.containerRef = G;
        },
        "data-testid": "container",
        style: A,
        className: Je("reactEasyCrop_Container", T)
      }, l ? _e.createElement("img", se({
        alt: "",
        className: Je("reactEasyCrop_Image", M === "contain" && "reactEasyCrop_Contain", M === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", M === "vertical-cover" && "reactEasyCrop_Cover_Vertical", R)
      }, c, {
        src: l,
        ref: this.imageRef,
        style: se(se({}, I), {
          transform: p || "translate(".concat(u, "px, ").concat(s, "px) rotate(").concat(w, "deg) scale(").concat(m, ")")
        }),
        onLoad: this.onMediaLoad
      })) : n && _e.createElement("video", se({
        autoPlay: !0,
        playsInline: !0,
        loop: !0,
        muted: !0,
        className: Je("reactEasyCrop_Video", M === "contain" && "reactEasyCrop_Contain", M === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", M === "vertical-cover" && "reactEasyCrop_Cover_Vertical", R)
      }, c, {
        ref: this.videoRef,
        onLoadedMetadata: this.onMediaLoad,
        style: se(se({}, I), {
          transform: p || "translate(".concat(u, "px, ").concat(s, "px) rotate(").concat(w, "deg) scale(").concat(m, ")")
        }),
        controls: !1
      }), (Array.isArray(n) ? n : [{
        src: n
      }]).map(function(z) {
        return _e.createElement("source", se({
          key: z.src
        }, z));
      })), this.state.cropSize && _e.createElement("div", se({
        ref: this.cropperRef,
        style: se(se({}, F), {
          width: k ? Math.round(this.state.cropSize.width) : this.state.cropSize.width,
          height: k ? Math.round(this.state.cropSize.height) : this.state.cropSize.height
        }),
        tabIndex: 0,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        "data-testid": "cropper",
        className: Je("reactEasyCrop_CropArea", y === "round" && "reactEasyCrop_CropAreaRound", S && "reactEasyCrop_CropAreaGrid", v)
      }, g)));
    }, o.defaultProps = {
      zoom: 1,
      rotation: 0,
      aspect: 4 / 3,
      maxZoom: Gr,
      minZoom: Br,
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
      keyboardStep: Yr
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
const Ct = we, Wr = (a) => new Promise((o, e) => {
  const t = new Image();
  t.addEventListener("load", () => o(t)), t.addEventListener("error", (i) => e(i)), t.setAttribute("crossOrigin", "anonymous"), t.src = a;
}), Kt = (a) => a * Math.PI / 180, Hr = (a, o, e) => {
  const t = Kt(e);
  return {
    width: Math.abs(Math.cos(t) * a) + Math.abs(Math.sin(t) * o),
    height: Math.abs(Math.sin(t) * a) + Math.abs(Math.cos(t) * o)
  };
}, Zr = async (a, o, e = "image/jpeg", t = 0) => {
  const i = await Wr(a), l = document.createElement("canvas"), n = l.getContext("2d");
  if (!n)
    throw new Error("Canvas context is not available");
  const c = Kt(t), { width: g, height: p } = Hr(
    i.width,
    i.height,
    t
  );
  l.width = g, l.height = p, n.translate(g / 2, p / 2), n.rotate(c), n.translate(-i.width / 2, -i.height / 2), n.drawImage(i, 0, 0);
  const b = document.createElement("canvas"), u = b.getContext("2d");
  if (!u)
    throw new Error("Canvas context is not available");
  return b.width = o.width, b.height = o.height, u.drawImage(
    l,
    o.x,
    o.y,
    o.width,
    o.height,
    0,
    0,
    o.width,
    o.height
  ), new Promise((s, w) => {
    b.toBlob(
      (m) => {
        if (!m) {
          w(new Error("Image cropping failed"));
          return;
        }
        s(m);
      },
      e,
      0.95
    );
  });
}, Wt = ({
  isOpen: a,
  imageSrc: o,
  fileType: e = "image/jpeg",
  fileName: t = "cropped-image",
  aspect: i = 1 / 1,
  title: l = "Crop Image",
  onClose: n,
  onApply: c
}) => {
  const [g, p] = D({ x: 0, y: 0 }), [b, u] = D(1), [s, w] = D(null);
  V(() => {
    a && (p({ x: 0, y: 0 }), u(1), w(null));
  }, [a]);
  const m = er((S, k) => {
    w(k);
  }, []), y = async () => {
    var S, k;
    if (!(!o || !s))
      try {
        const _ = await Zr(
          o,
          s,
          e
        ), A = ((k = (S = e == null ? void 0 : e.split("/")) == null ? void 0 : S[1]) == null ? void 0 : k.replace("jpeg", "jpg")) || "jpg", F = new File([_], `${t}.${A}`, {
          type: e
        });
        c == null || c(F);
      } catch {
        n == null || n();
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
        /* @__PURE__ */ r(
          "div",
          {
            className: "fixed inset-0 bg-gray-500 opacity-75",
            onClick: n
          }
        ),
        /* @__PURE__ */ h("div", { className: "relative bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col dark:bg-gray-800", children: [
          /* @__PURE__ */ h("div", { className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0", children: [
            /* @__PURE__ */ r("h3", { className: "text-lg font-medium text-gray-900 dark:text-white", children: l }),
            /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                onClick: n,
                className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
                "aria-label": "Close crop modal",
                children: /* @__PURE__ */ r(ge, { icon: "mdi:close", className: "w-6 h-6" })
              }
            )
          ] }),
          /* @__PURE__ */ h("div", { className: "p-4 space-y-4", children: [
            /* @__PURE__ */ r("div", { className: "relative h-72 w-full bg-gray-900 rounded-md overflow-hidden", children: o && /* @__PURE__ */ r(
              Kr,
              {
                image: o,
                crop: g,
                zoom: b,
                aspect: i,
                onCropChange: p,
                onZoomChange: u,
                onCropComplete: m
              }
            ) }),
            /* @__PURE__ */ h("div", { className: "space-y-2", children: [
              /* @__PURE__ */ r("label", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Zoom" }),
              /* @__PURE__ */ r(
                "input",
                {
                  type: "range",
                  min: 1,
                  max: 3,
                  step: 0.1,
                  value: b,
                  onChange: (S) => u(Number(S.target.value)),
                  className: "w-full"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ h("div", { className: "px-4 py-3 flex justify-end gap-3 border-t border-gray-200 dark:border-gray-700 sm:!px-6", children: [
            /* @__PURE__ */ r(
              Ct,
              {
                type: "button",
                onClick: n,
                variant: "outlined",
                color: "default",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ r(
              Ct,
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
}, Vr = we, Re = (a) => {
  typeof a == "string" && a.startsWith("blob:") && URL.revokeObjectURL(a);
}, Xr = ({
  label: a = "",
  value: o = null,
  onChange: e,
  required: t = !1,
  accept: i = "image/*",
  aspect: l = "1",
  id: n,
  dragDrop: c = !1,
  cropImage: g = !1,
  name: p = "",
  parentClass: b = "",
  errorMessage: u = ""
}) => {
  const [s, w] = D(o), [m, y] = D(!1), [S, k] = D(!1), [_, A] = D(""), [F, I] = D("image/jpeg"), [E, T] = D("cropped-image"), v = de(null), R = de(""), M = de("");
  V(() => {
    if (o instanceof File) {
      const P = URL.createObjectURL(o);
      Re(M.current), M.current = P, w({ file: o, preview: P });
    } else o && typeof o == "object" && "preview" in o, w(o);
  }, [o]), V(() => () => {
    Re(M.current), Re(R.current);
  }, []);
  const z = () => {
    k(!1), Re(R.current), R.current = "", A(""), v.current && (v.current.value = "");
  }, G = (P) => {
    const C = URL.createObjectURL(P);
    Re(M.current), M.current = C, w({ file: P, preview: C }), e == null || e(P), z();
  }, K = (P) => {
    if (!P || P.length === 0)
      return;
    const C = P[0];
    if (g) {
      const U = URL.createObjectURL(C);
      Re(R.current), R.current = U, A(U), I(C.type || "image/jpeg"), T(
        (C.name || "cropped-image").replace(/\.[^/.]+$/, "")
      ), k(!0);
      return;
    }
    const W = URL.createObjectURL(C);
    Re(M.current), M.current = W, w({ file: C, preview: W }), e == null || e(C);
  }, re = (P) => {
    P && P.stopPropagation(), Re(M.current), M.current = "", w(null), e == null || e(null), v.current && (v.current.value = "");
  }, ae = (P) => {
    c && (P.preventDefault(), y(!0));
  }, j = (P) => {
    c && (P.preventDefault(), y(!1));
  }, ce = (P) => {
    var C, W, U, pe;
    c && (P.preventDefault(), y(!1), (pe = (U = (W = (C = P.dataTransfer) == null ? void 0 : C.files) == null ? void 0 : W[0]) == null ? void 0 : U.type) != null && pe.includes("image/") && K(P.dataTransfer.files));
  }, X = () => {
    var P;
    (P = v.current) == null || P.click();
  }, te = s && typeof s == "object" && "preview" in s ? s.preview : typeof s == "string" ? s : "";
  return /* @__PURE__ */ h(Y, { children: [
    /* @__PURE__ */ h(
      "div",
      {
        className: x(
          f.mediaPicker.image,
          f.field.wrapper,
          b || "col-span-12"
        ),
        children: [
          /* @__PURE__ */ r(me, { label: a, required: t }),
          /* @__PURE__ */ h(
            "div",
            {
              className: x(
                f.mediaPicker.dropzone,
                "relative rounded-md p-2 transition-all",
                m ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800",
                u ? "border-red-500" : ""
              ),
              onDragOver: ae,
              onDragLeave: j,
              onDrop: ce,
              id: `field-${p}`,
              children: [
                /* @__PURE__ */ r(
                  "input",
                  {
                    ref: v,
                    id: n,
                    type: "file",
                    accept: i,
                    onChange: (P) => K(P.target.files),
                    required: t && !s,
                    className: "absolute opacity-0 right-[50%] top-[80%] -translate-y-1/2 pointer-events-none h-[10px]"
                  }
                ),
                /* @__PURE__ */ h(
                  "div",
                  {
                    className: `flex items-center space-x-4 transition-all ${m ? "opacity-50" : ""}`,
                    children: [
                      s ? /* @__PURE__ */ h("div", { className: "relative group", children: [
                        /* @__PURE__ */ r(
                          "img",
                          {
                            src: te,
                            alt: "preview",
                            className: "object-cover w-20 h-20 rounded-full shadow-md"
                          }
                        ),
                        !t && /* @__PURE__ */ r(
                          "button",
                          {
                            type: "button",
                            onClick: re,
                            className: "absolute top-0 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
                            "aria-label": "Remove image",
                            children: /* @__PURE__ */ r(ge, { icon: "mdi:close", className: "w-3 h-3" })
                          }
                        )
                      ] }) : /* @__PURE__ */ r("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ r(
                        ge,
                        {
                          icon: "ri:image-add-fill",
                          className: "text-gray-400 w-10 h-10"
                        }
                      ) }),
                      /* @__PURE__ */ h("div", { className: "flex flex-col items-center space-y-1", children: [
                        /* @__PURE__ */ r(
                          Vr,
                          {
                            type: "button",
                            onClick: X,
                            variant: "outlined",
                            color: "default",
                            children: s ? "Change Image" : "Select Image"
                          }
                        ),
                        c && !s && /* @__PURE__ */ r("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop" })
                      ] })
                    ]
                  }
                ),
                c && m && /* @__PURE__ */ r("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-md", children: /* @__PURE__ */ r("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg", children: "Drop image here" }) })
              ]
            }
          ),
          u && /* @__PURE__ */ r(
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
    /* @__PURE__ */ r(
      Wt,
      {
        isOpen: S,
        imageSrc: _,
        fileType: F,
        fileName: E,
        onClose: z,
        onApply: G,
        aspect: Number(l)
      }
    )
  ] });
}, Ht = rt.forwardRef(
  ({
    label: a,
    value: o,
    name: e,
    required: t,
    parentClass: i = "",
    className: l = "",
    type: n = "text",
    onKeyDown: c,
    negativeNumberAllow: g = !0,
    defaultValue: p = "",
    field: b = {},
    onChange: u,
    mask: s = "",
    errorMessage: w = "",
    maskApplyOnValue: m = !0,
    ...y
  }, S) => {
    const [k, _] = D(!1), A = (E) => {
      if (n === "number") {
        if (["e", "E", "+"].includes(E.key)) {
          E.preventDefault();
          return;
        }
        if (g == !1 && E.key === "-") {
          E.preventDefault();
          return;
        }
        if (["ArrowUp", "ArrowDown"].includes(E.key)) {
          E.preventDefault();
          return;
        }
      }
      c == null || c(E);
    }, F = x(
      f.field.input,
      "h-10 placeholder-gray-400 dark:placeholder-gray-400",
      n === "password" ? "pr-10" : "",
      n === "number" ? "no-spinner" : "",
      l,
      w ? "border-red-500" : ""
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
    }, [p]), /* @__PURE__ */ r(Y, { children: /* @__PURE__ */ h(
      "div",
      {
        className: x(
          f.field.wrapper,
          i || "col-span-12"
        ),
        children: [
          /* @__PURE__ */ r(
            me,
            {
              label: a,
              required: t,
              infoText: b == null ? void 0 : b.infoText
            }
          ),
          /* @__PURE__ */ h("div", { className: "relative", children: [
            /* @__PURE__ */ r(
              "input",
              {
                type: n === "password" && k ? "text" : n,
                ref: S,
                id: `field-${e}`,
                required: t,
                onKeyDown: A,
                className: F,
                value: s ? I(o, s) : o,
                onChange: (E) => {
                  u(s && m ? I(E.target.value, s) : E.target.value);
                },
                ...y
              }
            ),
            w && /* @__PURE__ */ r(
              "span",
              {
                className: x(
                  f.field.error,
                  "text-red-500 text-xs mt-1"
                ),
                children: w
              }
            ),
            n === "password" && /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                tabIndex: -1,
                onClick: () => _((E) => !E),
                className: "absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200",
                children: /* @__PURE__ */ r(
                  ge,
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
Ht.displayName = "Input";
const Jr = ({
  editorKey: a = "",
  value: o = "",
  name: e = "",
  onChange: t,
  label: i = "",
  required: l = !1,
  placeholder: n = "",
  parentClass: c = "col-span-12",
  height: g = 400,
  inline: p = !1,
  disabled: b = !1,
  plugins: u,
  toolbar: s,
  menubar: w = !1,
  fontFamily: m = "Inter, sans-serif",
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
      className: x(f.field.wrapper, c),
      id: `field-${e}`,
      children: [
        i && /* @__PURE__ */ r(me, { label: i, required: l }),
        /* @__PURE__ */ r(
          ur,
          {
            apiKey: a,
            value: o,
            disabled: b,
            init: {
              height: g,
              inline: p,
              menubar: w,
              branding: !1,
              statusbar: !0,
              automatic_uploads: !0,
              images_upload_handler: F,
              plugins: u ?? _,
              toolbar: s ?? A,
              placeholder: n,
              content_style: `
            body {
                font-family: ${m};
                border: ${k ? "1px solid blue" : ""};
            }
            `,
              ...y
            },
            onEditorChange: (I) => {
              t == null || t(I);
            }
          }
        ),
        k && /* @__PURE__ */ r(
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
}, qr = ({
  name: a = "",
  label: o = "",
  options: e = [],
  value: t = null,
  onChange: i,
  disabled: l = !1,
  required: n = !1,
  parentClass: c = "col-span-12",
  className: g = "",
  errorMessage: p = "",
  multiSelect: b = !1
}) => {
  const u = Array.isArray(e) && e.length > 0, s = (y) => u ? b ? Array.isArray(t) && t.includes(y) : t === y : !!t, w = (y) => {
    i == null || i(y.target.checked, a);
  }, m = (y, S) => {
    if (i)
      if (!b)
        i(S ? y : "", a);
      else {
        const k = Array.isArray(t) ? [...t] : [];
        if (S)
          k.includes(y) || k.push(y);
        else {
          const _ = k.indexOf(y);
          _ > -1 && k.splice(_, 1);
        }
        i(k, a);
      }
  };
  return u ? /* @__PURE__ */ r(Y, { children: /* @__PURE__ */ h("div", { className: x(f.field.wrapper, c), children: [
    /* @__PURE__ */ r(me, { label: o, required: n }),
    /* @__PURE__ */ r("div", { className: "flex flex-col space-y-2", children: e.map((y, S) => /* @__PURE__ */ h("div", { className: "flex items-center", children: [
      /* @__PURE__ */ r(
        "input",
        {
          type: "checkbox",
          name: a,
          id: `field-${a}`,
          value: y.value,
          checked: s(y.value),
          disabled: l || !!y.disabled,
          required: n && S === 0,
          onChange: (k) => m(y.value, k.target.checked),
          className: x(
            f.field.input,
            "h-4 w-4 cursor-pointer text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400",
            g
          )
        },
        a
      ),
      y.label && /* @__PURE__ */ r(
        "label",
        {
          htmlFor: a,
          className: "ml-2 text-sm text-gray-700 dark:text-gray-200 select-none",
          children: y.label
        }
      )
    ] }, y.value || y.label)) }),
    p && /* @__PURE__ */ r(
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
        c
      ),
      children: [
        /* @__PURE__ */ r(
          "input",
          {
            type: "checkbox",
            name: a,
            checked: s(),
            disabled: l,
            required: n,
            onChange: w,
            className: x(
              f.field.input,
              "h-4 w-4 text-blue-600 cursor-pointer border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400",
              g
            )
          }
        ),
        o && /* @__PURE__ */ r(
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
}, Mt = we, Qr = ({
  label: a = "",
  value: o = null,
  onChange: e,
  required: t = !1,
  accept: i = "audio/*",
  id: l,
  dragDrop: n = !1,
  name: c = "",
  parentClass: g = "",
  errorMessage: p = "",
  maxSize: b = 0
}) => {
  const [u, s] = D(
    null
  ), [w, m] = D(!1), y = de(null), S = b * 1024 * 1024;
  V(() => {
    if (!o) {
      k(), s(null);
      return;
    }
    if (o instanceof File) {
      const v = URL.createObjectURL(o);
      return s({ file: o, preview: v }), () => {
        URL.revokeObjectURL(v);
      };
    } else typeof o == "string" ? s({ preview: o }) : o != null && o.preview && s(o);
  }, [o]);
  const k = () => {
    u != null && u.preview && u.preview.startsWith("blob:") && URL.revokeObjectURL(u.preview);
  }, _ = (v) => {
    if (!v || v.length === 0)
      return;
    const R = v[0];
    if (S && R.size > S) {
      De(
        `Audio is too large. Maximum allowed size is ${b} MB`,
        { variant: "warning" }
      );
      return;
    }
    const M = URL.createObjectURL(R);
    k(), s({ file: R, preview: M }), e == null || e(R);
  }, A = (v) => {
    v && v.stopPropagation(), k(), s(null), e == null || e(null), y.current && (y.current.value = "");
  }, F = (v) => {
    n && (v.preventDefault(), m(!0));
  }, I = (v) => {
    n && (v.preventDefault(), m(!1));
  }, E = (v) => {
    var R, M, z, G;
    n && (v.preventDefault(), m(!1), (G = (z = (M = (R = v.dataTransfer) == null ? void 0 : R.files) == null ? void 0 : M[0]) == null ? void 0 : z.type) != null && G.includes("audio/") && _(v.dataTransfer.files));
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
        g || "col-span-12"
      ),
      children: [
        /* @__PURE__ */ r(me, { label: a, required: t }),
        /* @__PURE__ */ h(
          "div",
          {
            className: x(
              f.mediaPicker.dropzone,
              "relative rounded-lg p-2 transition-all",
              w ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800",
              p ? "border-red-500" : ""
            ),
            onDragOver: F,
            onDragLeave: I,
            onDrop: E,
            id: `field-${c}`,
            children: [
              /* @__PURE__ */ r(
                "input",
                {
                  ref: y,
                  id: l,
                  type: "file",
                  accept: i,
                  onChange: (v) => _(v.target.files),
                  required: t && !u,
                  className: "absolute opacity-0 right-[50%] top-[80%] -translate-y-1/2 pointer-events-none h-[10px]"
                }
              ),
              /* @__PURE__ */ r(
                "div",
                {
                  className: `flex items-center space-x-4 transition-all ${w ? "opacity-50" : ""}`,
                  children: u ? /* @__PURE__ */ h("div", { className: "flex items-center space-x-4", children: [
                    /* @__PURE__ */ h("div", { className: "relative w-full", children: [
                      !t && /* @__PURE__ */ r(
                        "button",
                        {
                          type: "button",
                          onClick: A,
                          className: "absolute top-0 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800",
                          "aria-label": "Remove audio",
                          children: /* @__PURE__ */ r(ge, { icon: "mdi:close", className: "w-3 h-3" })
                        }
                      ),
                      /* @__PURE__ */ r(
                        "audio",
                        {
                          src: u.preview,
                          controls: !0,
                          controlsList: "nodownload"
                        },
                        u.preview
                      )
                    ] }),
                    /* @__PURE__ */ r(Mt, { type: "button", onClick: T, children: /* @__PURE__ */ r("span", { children: "Change Audio File" }) })
                  ] }) : /* @__PURE__ */ h("div", { className: "flex items-center justify-center space-x-4", children: [
                    /* @__PURE__ */ r("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ r(ge, { icon: "mdi:music", className: "text-gray-400 w-10 h-10" }) }),
                    /* @__PURE__ */ h("div", { className: "flex flex-col items-center space-y-1", children: [
                      /* @__PURE__ */ r(
                        Mt,
                        {
                          type: "button",
                          onClick: T,
                          variant: "outlined",
                          children: /* @__PURE__ */ r("span", { children: "Choose Audio File" })
                        }
                      ),
                      n && /* @__PURE__ */ r("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop your audio file here" })
                    ] })
                  ] })
                }
              ),
              n && w && !u && /* @__PURE__ */ r("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-lg", children: /* @__PURE__ */ r("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg", children: "Drop audio here" }) })
            ]
          }
        ),
        p && /* @__PURE__ */ r(
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
    c
  );
}, Dt = we, ea = (a) => {
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
}, ta = ({
  label: a = "",
  value: o = [],
  onChange: e,
  required: t = !1,
  accept: i = "image/*",
  aspect: l = "1",
  id: n,
  dragDrop: c = !1,
  cropImage: g = !1,
  name: p = "",
  parentClass: b = "",
  maxImages: u,
  errorMessage: s = ""
}) => {
  const [w, m] = D([]), [y, S] = D(!1), [k, _] = D(!1), [A, F] = D(""), [I, E] = D("image/jpeg"), [T, v] = D("cropped-image"), [R, M] = D(null), z = de(null), G = de(null), K = de(""), re = de([]);
  V(() => {
    re.current = w;
  }, [w]), V(() => () => {
    re.current.forEach((L) => {
      L.createdBlobUrl && URL.revokeObjectURL(L.createdBlobUrl);
    }), K.current && URL.revokeObjectURL(K.current);
  }, []), V(() => {
    if (!Array.isArray(o)) {
      m([]);
      return;
    }
    const L = o.map(($) => ea($)).filter(Boolean);
    m(($) => ($.forEach((q) => {
      q.createdBlobUrl && URL.revokeObjectURL(q.createdBlobUrl);
    }), L));
  }, [o]);
  const ae = typeof u == "number" && u > 0 ? Math.max(u - w.length, 0) : Number.POSITIVE_INFINITY, j = () => {
    _(!1), K.current && (URL.revokeObjectURL(K.current), K.current = ""), F(""), M(null), z.current && (z.current.value = "");
  }, ce = (L) => {
    var $, q;
    F(L.preview), E((($ = L.file) == null ? void 0 : $.type) || "image/jpeg"), v(
      (((q = L.file) == null ? void 0 : q.name) || "cropped-image").replace(/\.[^/.]+$/, "")
    ), M(L.id), _(!0);
  }, X = (L) => {
    const $ = URL.createObjectURL(L);
    m((q) => {
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
  }, te = (L) => {
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
    m((Q) => {
      const H = [...Q, ...q];
      return e == null || e(
        H.map((oe) => oe.file ? oe.file : oe.preview)
      ), H;
    }), z.current && (z.current.value = "");
  }, P = (L) => {
    m(($) => {
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
    m((Q) => {
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
    c && (L.preventDefault(), S(!0));
  }, pe = (L) => {
    c && (L.preventDefault(), S(!1));
  }, ve = (L) => {
    var $;
    c && (L.preventDefault(), S(!1), te((($ = L.dataTransfer) == null ? void 0 : $.files) || null));
  }, fe = () => {
    var L;
    (L = z.current) == null || L.click();
  }, le = typeof u == "number" && u > 0 ? w.length < u : !0;
  return /* @__PURE__ */ h(Y, { children: [
    /* @__PURE__ */ h(
      "div",
      {
        className: x(
          f.mediaPicker.multiImage,
          f.field.wrapper,
          b || "col-span-12"
        ),
        children: [
          /* @__PURE__ */ r(me, { label: a, required: t }),
          /* @__PURE__ */ h(
            "div",
            {
              className: x(
                f.mediaPicker.dropzone,
                "relative rounded-md p-2 transition-all",
                y ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800",
                s ? "border-red-500" : ""
              ),
              onDragOver: U,
              onDragLeave: pe,
              onDrop: ve,
              id: `field-${p}`,
              children: [
                /* @__PURE__ */ r(
                  "input",
                  {
                    ref: z,
                    id: n,
                    type: "file",
                    accept: i,
                    multiple: !0,
                    onChange: (L) => te(L.target.files),
                    required: t && w.length === 0,
                    className: "absolute opacity-0 pointer-events-none h-1 w-1"
                  }
                ),
                /* @__PURE__ */ r(
                  "input",
                  {
                    ref: G,
                    type: "file",
                    accept: i,
                    onChange: (L) => W(L.target.files),
                    className: "absolute opacity-0 pointer-events-none h-1 w-1"
                  }
                ),
                w.length === 0 ? /* @__PURE__ */ h("div", { className: "flex items-center space-x-4", children: [
                  /* @__PURE__ */ r("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ r(
                    ge,
                    {
                      icon: "ri:multi-image-fill",
                      className: "text-gray-400 w-10 h-10"
                    }
                  ) }),
                  /* @__PURE__ */ h("div", { className: "flex flex-col items-center space-y-1", children: [
                    /* @__PURE__ */ r(
                      Dt,
                      {
                        type: "button",
                        onClick: fe,
                        variant: "outlined",
                        color: "default",
                        children: /* @__PURE__ */ r("span", { className: "text-sm font-medium", children: "Choose Images" })
                      }
                    ),
                    c && /* @__PURE__ */ r("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop your images here" })
                  ] })
                ] }) : /* @__PURE__ */ h(Y, { children: [
                  /* @__PURE__ */ h("div", { className: "flex items-center justify-between gap-2 mb-3", children: [
                    /* @__PURE__ */ r(
                      Dt,
                      {
                        type: "button",
                        onClick: fe,
                        disabled: !le,
                        variant: "outlined",
                        color: "default",
                        children: /* @__PURE__ */ r("span", { className: "text-sm font-medium", children: "Upload Images" })
                      }
                    ),
                    /* @__PURE__ */ r("span", { className: "text-xs text-gray-500 dark:text-gray-400", children: u ? `${w.length}/${u}` : `${w.length} selected` })
                  ] }),
                  /* @__PURE__ */ r("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3", children: w.map((L) => /* @__PURE__ */ h(
                    "div",
                    {
                      className: "relative group rounded-md overflow-hidden border border-gray-200 dark:border-gray-700",
                      children: [
                        /* @__PURE__ */ r(
                          "img",
                          {
                            src: L.preview,
                            alt: "preview",
                            className: "w-full h-28 object-cover"
                          }
                        ),
                        /* @__PURE__ */ h("div", { className: "absolute top-2 right-2 flex items-center gap-1.5 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity", children: [
                          /* @__PURE__ */ r(
                            "button",
                            {
                              type: "button",
                              onClick: () => C(L.id),
                              className: "w-7 h-7 rounded-full bg-white/90 text-gray-800 hover:bg-white flex items-center justify-center shadow",
                              "aria-label": "Replace image",
                              children: /* @__PURE__ */ r(ge, { icon: "solar:refresh-bold", className: "w-4 h-4" })
                            }
                          ),
                          g && /* @__PURE__ */ r(
                            "button",
                            {
                              type: "button",
                              onClick: () => ce(L),
                              className: "w-7 h-7 rounded-full bg-white/90 text-gray-800 hover:bg-white flex items-center justify-center shadow",
                              "aria-label": "Crop image",
                              children: /* @__PURE__ */ r(ge, { icon: "solar:crop-bold", className: "w-4 h-4" })
                            }
                          ),
                          /* @__PURE__ */ r(
                            "button",
                            {
                              type: "button",
                              onClick: () => P(L.id),
                              className: "w-7 h-7 rounded-full bg-red-500/95 text-white hover:bg-red-600 flex items-center justify-center shadow",
                              "aria-label": "Delete image",
                              children: /* @__PURE__ */ r(
                                ge,
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
                c && y && w.length === 0 && /* @__PURE__ */ r("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-lg", children: /* @__PURE__ */ r("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg", children: "Drop images here" }) })
              ]
            }
          ),
          s && /* @__PURE__ */ r(
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
      },
      p
    ),
    /* @__PURE__ */ r(
      Wt,
      {
        isOpen: k,
        imageSrc: A,
        fileType: I,
        fileName: T,
        onClose: j,
        onApply: X,
        aspect: Number(l)
      }
    )
  ] });
}, ke = ({
  src: a,
  alt: o = "preview",
  isOpen: e,
  setIsOpen: t
}) => {
  const i = () => t(!1);
  return V(() => {
    const l = (n) => {
      n.key === "Escape" && i();
    };
    return e && (document.body.style.overflow = "hidden", document.addEventListener("keydown", l)), () => {
      document.body.style.overflow = "", document.removeEventListener("keydown", l);
    };
  }, [e]), /* @__PURE__ */ r(Y, { children: /* @__PURE__ */ h(
    "div",
    {
      className: x(
        f.imagePreview.root,
        "fixed inset-0 z-50 flex items-center justify-center bg-black/70 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      ),
      onClick: i,
      children: [
        /* @__PURE__ */ r(
          "button",
          {
            onClick: i,
            className: `absolute top-4 right-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200\r
                     hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-2 shadow-lg transition`,
            children: /* @__PURE__ */ r(at, { size: 20 })
          }
        ),
        /* @__PURE__ */ r(
          "div",
          {
            className: x(
              f.imagePreview.container,
              "max-w-5xl w-full px-4 transform transition-all duration-200 scale-95 animate-in zoom-in-95"
            ),
            onClick: (l) => l.stopPropagation(),
            children: /* @__PURE__ */ r(
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
}, Zt = ({
  col: a,
  data: o,
  uiVariant: e = "default",
  styleConfig: t = {}
}) => {
  const i = o[a.titleKey], l = o[a.subtitleKey], n = o[a.imageKey], c = a.fallback_icon, [g, p] = D(null), [b, u] = D(!1), s = (m) => {
    let y = m;
    m && m.src instanceof File && (y = { ...m, src: URL.createObjectURL(m.src) }), p(y), u(!0);
  }, w = (m) => {
    const S = {
      sm: { img: "w-8 h-8", wrap: "w-8 h-8", icon: "w-4 h-4" },
      md: { img: "w-12 h-12", wrap: "w-12 h-12", icon: "w-6 h-6" },
      lg: { img: "w-16 h-16", wrap: "w-16 h-16", icon: "w-8 h-8" }
    }[m];
    return n ? /* @__PURE__ */ r(
      "img",
      {
        src: n instanceof File ? URL.createObjectURL(n) : n,
        alt: i,
        onClick: () => s({ src: n, alt: i }),
        className: `${S.img} cursor-pointer rounded-full object-cover border-2 border-white dark:border-gray-700 shadow flex-shrink-0`
      }
    ) : c ? c instanceof Function ? c(o) : c : /* @__PURE__ */ r(
      "div",
      {
        className: `${S.wrap} flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-600 flex-shrink-0`,
        children: /* @__PURE__ */ r(mt, { className: `${S.icon} text-gray-400` })
      }
    );
  };
  return e === "card" ? /* @__PURE__ */ h(Y, { children: [
    b && g && /* @__PURE__ */ r(
      ke,
      {
        src: g.src,
        alt: g.alt,
        isOpen: b,
        setIsOpen: u
      }
    ),
    /* @__PURE__ */ h(
      "div",
      {
        className: x(
          f.details.row,
          "col-span-12 relative overflow-hidden rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent dark:from-primary/20 dark:via-primary/10 border border-primary/20 dark:border-primary/30 p-5 flex items-center gap-4",
          t.rowClass || "",
          t.groupClass || "",
          a.blockClass || ""
        ),
        children: [
          /* @__PURE__ */ r("div", { className: "pointer-events-none absolute -right-6 -top-6 w-32 h-32 rounded-full bg-primary/8 dark:bg-primary/12" }),
          /* @__PURE__ */ r("div", { className: "pointer-events-none absolute -right-2 -bottom-4 w-20 h-20 rounded-full bg-primary/5" }),
          w("lg"),
          /* @__PURE__ */ h("div", { className: "min-w-0 z-10", children: [
            /* @__PURE__ */ r(
              "h3",
              {
                className: `text-lg font-bold text-gray-900 dark:text-white truncate ${t.valueClass || ""}`,
                children: i
              }
            ),
            /* @__PURE__ */ r(
              "p",
              {
                className: `text-sm text-primary/70 dark:text-primary/60 font-medium truncate ${t.labelClass || ""}`,
                children: l
              }
            )
          ] })
        ]
      }
    )
  ] }) : e === "split" ? /* @__PURE__ */ h(Y, { children: [
    b && g && /* @__PURE__ */ r(
      ke,
      {
        src: g.src,
        alt: g.alt,
        isOpen: b,
        setIsOpen: u
      }
    ),
    /* @__PURE__ */ h(
      "div",
      {
        className: x(
          f.details.row,
          "flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-primary/8 via-primary/4 to-transparent dark:from-primary/15 dark:via-primary/8",
          t.rowClass || "",
          t.groupClass || "",
          a.blockClass || ""
        ),
        children: [
          w("md"),
          /* @__PURE__ */ h("div", { className: "min-w-0", children: [
            /* @__PURE__ */ r(
              "h3",
              {
                className: `text-base font-bold text-gray-900 dark:text-white truncate ${t.valueClass || ""}`,
                children: i
              }
            ),
            /* @__PURE__ */ r(
              "p",
              {
                className: `text-xs font-semibold text-primary/70 dark:text-primary/60 truncate ${t.labelClass || ""}`,
                children: l
              }
            )
          ] })
        ]
      }
    )
  ] }) : /* @__PURE__ */ h(Y, { children: [
    b && g && /* @__PURE__ */ r(
      ke,
      {
        src: g.src,
        alt: g.alt,
        isOpen: b,
        setIsOpen: u
      }
    ),
    /* @__PURE__ */ h(
      "div",
      {
        className: x(
          f.details.row,
          "col-span-12 flex items-center space-x-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-900",
          t.rowClass || "",
          t.groupClass || "",
          a.blockClass || ""
        ),
        children: [
          w("lg"),
          /* @__PURE__ */ h("div", { children: [
            /* @__PURE__ */ r(
              "h3",
              {
                className: `text-xl font-semibold text-gray-900 dark:text-white ${t.valueClass || ""}`,
                children: i
              }
            ),
            /* @__PURE__ */ r(
              "p",
              {
                className: `text-sm text-gray-500 dark:text-gray-400 ${t.labelClass || ""}`,
                children: l
              }
            )
          ] })
        ]
      }
    )
  ] });
}, Vt = ({
  col: a,
  data: o,
  uiVariant: e = "default",
  styleConfig: t = {}
}) => {
  const i = o[a.titleKey], l = o[a.subtitleKey], n = o[a.imageKey], c = a.label, g = a == null ? void 0 : a.icon, p = a.fallback_icon, [b, u] = D(null), [s, w] = D(!1), m = (S) => {
    let k = S;
    S && S.src instanceof File && (k = { ...S, src: URL.createObjectURL(S.src) }), u(k), w(!0);
  }, y = () => n ? /* @__PURE__ */ r(
    "img",
    {
      src: n instanceof File ? URL.createObjectURL(n) : n,
      alt: i,
      onClick: () => m({ src: n, alt: i }),
      className: "w-8 h-8 cursor-pointer rounded-full object-cover border-2 border-gray-200 dark:border-gray-700 flex-shrink-0"
    }
  ) : p ? p instanceof Function ? p(o) : p : /* @__PURE__ */ r("div", { className: "w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 flex-shrink-0", children: /* @__PURE__ */ r(mt, { className: "w-5 h-5 text-gray-400" }) });
  return e === "card" ? /* @__PURE__ */ h(Y, { children: [
    s && b && /* @__PURE__ */ r(
      ke,
      {
        src: b.src,
        alt: b.alt,
        isOpen: s,
        setIsOpen: w
      }
    ),
    /* @__PURE__ */ h(
      "div",
      {
        className: x(
          f.details.row,
          a.blockClass || "col-span-6",
          "group bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 p-4 flex flex-col gap-2.5",
          t.rowClass || "",
          t.cardGroupClass || ""
        ),
        children: [
          g && /* @__PURE__ */ r(
            "div",
            {
              className: `w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 [&>svg]:w-4 [&>svg]:h-4 ${t.iconClass || ""}`,
              children: g
            }
          ),
          /* @__PURE__ */ r(
            "p",
            {
              className: `text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 leading-none ${t.labelClass || ""}`,
              children: c
            }
          ),
          /* @__PURE__ */ h("div", { className: "flex items-center gap-2 mt-auto", children: [
            y(),
            /* @__PURE__ */ h("div", { className: "min-w-0", children: [
              /* @__PURE__ */ r(
                "p",
                {
                  className: `text-sm font-semibold text-gray-800 dark:text-gray-100 truncate ${t.valueClass || ""}`,
                  children: i
                }
              ),
              l && /* @__PURE__ */ r("p", { className: "text-xs text-gray-400 dark:text-gray-500 truncate", children: l })
            ] })
          ] })
        ]
      }
    )
  ] }) : e === "split" ? /* @__PURE__ */ h(Y, { children: [
    s && b && /* @__PURE__ */ r(
      ke,
      {
        src: b.src,
        alt: b.alt,
        isOpen: s,
        setIsOpen: w
      }
    ),
    /* @__PURE__ */ h(
      "div",
      {
        className: x(
          f.details.row,
          "flex items-stretch min-h-[52px]",
          t.rowClass || "",
          t.cardGroupClass || "",
          a.blockClass || ""
        ),
        children: [
          /* @__PURE__ */ h("div", { className: "w-[42%] flex-shrink-0 flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-gray-800/80 border-r border-gray-200 dark:border-gray-700", children: [
            g && /* @__PURE__ */ r(
              "span",
              {
                className: `text-primary/60 dark:text-primary/50 flex-shrink-0 [&>svg]:w-3.5 [&>svg]:h-3.5 ${t.iconClass || ""}`,
                children: g
              }
            ),
            /* @__PURE__ */ r(
              "p",
              {
                className: `text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 leading-tight ${t.labelClass || ""}`,
                children: c
              }
            )
          ] }),
          /* @__PURE__ */ h("div", { className: "flex-1 flex items-center gap-2.5 px-4 py-3 bg-white dark:bg-gray-900", children: [
            y(),
            /* @__PURE__ */ h("div", { className: "min-w-0", children: [
              /* @__PURE__ */ r(
                "p",
                {
                  className: `text-sm text-gray-800 dark:text-gray-100 break-words ${t.valueClass || ""}`,
                  children: i
                }
              ),
              l && /* @__PURE__ */ r("p", { className: "text-xs text-gray-400 dark:text-gray-500 truncate", children: l })
            ] })
          ] })
        ]
      }
    )
  ] }) : /* @__PURE__ */ h(Y, { children: [
    s && b && /* @__PURE__ */ r(
      ke,
      {
        src: b.src,
        alt: b.alt,
        isOpen: s,
        setIsOpen: w
      }
    ),
    /* @__PURE__ */ h(
      "div",
      {
        className: x(
          f.details.row,
          "col-span-12 flex items-center space-x-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-900",
          t.rowClass || "",
          t.cardGroupClass || "",
          a.blockClass || ""
        ),
        children: [
          g && /* @__PURE__ */ r("div", { className: `flex-shrink-0 ${t.iconClass || ""}`, children: g }),
          /* @__PURE__ */ h("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ r(
              "p",
              {
                className: `text-sm font-medium text-gray-500 dark:text-gray-400 ${t.labelClass || ""}`,
                children: c
              }
            ),
            /* @__PURE__ */ h("div", { className: "flex items-center mt-1", children: [
              y(),
              /* @__PURE__ */ h("div", { className: "ml-2", children: [
                /* @__PURE__ */ r(
                  "p",
                  {
                    className: `mb-0 text-sm text-gray-900 dark:text-white break-words ${t.valueClass || ""}`,
                    children: i
                  }
                ),
                /* @__PURE__ */ r(
                  "p",
                  {
                    className: `text-xs text-gray-500 dark:text-gray-400 ${t.labelClass || ""}`,
                    children: l
                  }
                )
              ] })
            ] })
          ] })
        ]
      }
    )
  ] });
}, Lt = {
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
}, Pt = {
  contained: "bg",
  outline: "border !bg-transparent",
  soft: "bg opacity-90"
}, Xt = ({
  label: a,
  variant: o = "contained",
  color: e = "green",
  className: t = ""
}) => {
  const i = Lt[e] || Lt.green, l = Pt[o] || Pt.contained, n = o === "outline" ? i.border : i.bg;
  return /* @__PURE__ */ r(
    "span",
    {
      className: x(
        f.chip.root,
        "inline-flex justify-center items-center rounded-sm text-xs font-semibold px-3 py-1 min-w-[78px]",
        n,
        l,
        t
      ),
      children: a
    }
  );
}, Jt = ({
  col: a,
  data: o,
  uiVariant: e = "default",
  styleConfig: t = {}
}) => {
  var k;
  const [i, l] = D(null), [n, c] = D(!1), g = a == null ? void 0 : a.icon, p = a.label;
  let b = o[a.key];
  const u = a.type, s = a.variant || "outline";
  let w = a.defaultColor;
  if (u === "chip" && ((k = a.chipOptions) == null ? void 0 : k.length) > 0) {
    const _ = a == null ? void 0 : a.chipOptions.find((A) => A.value == b);
    _ && (b = _.label, w = _.color);
  }
  const m = (_) => {
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
    l({ src: _, alt: A }), c(!0);
  }, S = (_ = "text-sm text-gray-900 dark:text-white break-words") => u === "chip" ? /* @__PURE__ */ r(Xt, { label: b, variant: s, color: w, className: "mt-1" }) : u === "tinyEditor" ? /* @__PURE__ */ r(
    "p",
    {
      className: `${_} ${t.valueClass || ""}`,
      dangerouslySetInnerHTML: { __html: b }
    }
  ) : u === "audio" ? b ? /* @__PURE__ */ r(
    "audio",
    {
      controls: !0,
      src: b instanceof File ? URL.createObjectURL(b) : b,
      onClick: (A) => A.stopPropagation(),
      className: "shadow-sm rounded-full mt-1 w-full max-w-xs"
    },
    b instanceof File ? URL.createObjectURL(b) : b
  ) : /* @__PURE__ */ r("p", { className: "text-sm text-gray-400", children: "N/A" }) : u === "multiImage" ? Array.isArray(b) && b.length > 0 ? /* @__PURE__ */ r(
    "div",
    {
      className: `mt-1 grid grid-cols-3 sm:grid-cols-4 gap-2 ${t.mediaGridClass || ""}`,
      children: b.map((A, F) => {
        const I = m(A);
        return I ? /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            onClick: () => y(I, `Gallery ${F + 1}`),
            className: "w-full h-16 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-colors",
            children: /* @__PURE__ */ r(
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
  ) : /* @__PURE__ */ r("p", { className: "text-sm text-gray-400", children: "N/A" }) : /* @__PURE__ */ r("p", { className: `${_} ${t.valueClass || ""}`, children: u === "date" ? /* @__PURE__ */ r("span", { children: nt(b, a.format || "DD MMM YYYY") }) : /* @__PURE__ */ r("span", { children: b || "N/A" }) });
  return e === "card" ? /* @__PURE__ */ h(Y, { children: [
    /* @__PURE__ */ h(
      "div",
      {
        className: x(
          f.details.row,
          a.blockClass || "col-span-6",
          "group bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 p-4 flex flex-col gap-2.5",
          t.rowClass || ""
        ),
        children: [
          g && /* @__PURE__ */ r(
            "div",
            {
              className: `w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 [&>svg]:w-4 [&>svg]:h-4 ${t.iconClass || ""}`,
              children: g
            }
          ),
          /* @__PURE__ */ r(
            "p",
            {
              className: `text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 leading-none ${t.labelClass || ""}`,
              children: p
            }
          ),
          /* @__PURE__ */ r("div", { className: "mt-auto", children: S(
            "text-sm font-semibold text-gray-800 dark:text-gray-100 break-words leading-snug"
          ) })
        ]
      }
    ),
    n && i && /* @__PURE__ */ r(
      ke,
      {
        src: i.src,
        alt: i.alt,
        isOpen: n,
        setIsOpen: c
      }
    )
  ] }) : e === "split" ? /* @__PURE__ */ h(Y, { children: [
    /* @__PURE__ */ h(
      "div",
      {
        className: x(
          f.details.row,
          "flex items-stretch min-h-[52px]",
          t.rowClass || "",
          a.blockClass || ""
        ),
        children: [
          /* @__PURE__ */ h("div", { className: "w-[42%] flex-shrink-0 flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-gray-800/80 border-r border-gray-200 dark:border-gray-700", children: [
            g && /* @__PURE__ */ r(
              "span",
              {
                className: `text-primary/60 dark:text-primary/50 flex-shrink-0 [&>svg]:w-3.5 [&>svg]:h-3.5 ${t.iconClass || ""}`,
                children: g
              }
            ),
            /* @__PURE__ */ r(
              "p",
              {
                className: `text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 leading-tight ${t.labelClass || ""}`,
                children: p
              }
            )
          ] }),
          /* @__PURE__ */ r("div", { className: "flex-1 flex items-center px-4 py-3 bg-white dark:bg-gray-900", children: S(
            "text-sm text-gray-800 dark:text-gray-100 break-words"
          ) })
        ]
      }
    ),
    n && i && /* @__PURE__ */ r(
      ke,
      {
        src: i.src,
        alt: i.alt,
        isOpen: n,
        setIsOpen: c
      }
    )
  ] }) : /* @__PURE__ */ h(Y, { children: [
    /* @__PURE__ */ h(
      "div",
      {
        className: x(
          f.details.row,
          "col-span-12 flex items-center space-x-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-900",
          t.rowClass || "",
          a.blockClass || ""
        ),
        children: [
          g && /* @__PURE__ */ r("div", { className: `flex-shrink-0 ${t.iconClass || ""}`, children: g }),
          /* @__PURE__ */ h("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ r(
              "p",
              {
                className: `text-sm font-medium text-gray-500 dark:text-gray-400 ${t.labelClass || ""}`,
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
    n && i && /* @__PURE__ */ r(
      ke,
      {
        src: i.src,
        alt: i.alt,
        isOpen: n,
        setIsOpen: c
      }
    )
  ] });
}, ra = ({
  value: a = !0,
  onChange: o,
  text: e,
  options: t = [],
  label: i,
  required: l,
  name: n = "",
  disabled: c = !1,
  parentClass: g = "",
  errorMessage: p = ""
}) => {
  const b = t.length > 0 ? t : [
    { label: "Active", value: !0 },
    { label: "Inactive", value: !1 }
  ];
  return /* @__PURE__ */ r(Y, { children: /* @__PURE__ */ h(
    "div",
    {
      className: x(
        f.field.wrapper,
        g || "col-span-12"
      ),
      children: [
        /* @__PURE__ */ r(me, { label: i, required: l }),
        /* @__PURE__ */ h(
          "div",
          {
            className: `flex items-center justify-between h-10 gap-4 bg-gray-100 dark:bg-gray-700 px-3 rounded-md border border-gray-100 dark:border-gray-600
          ${p ? "border-red-500" : ""}`,
            children: [
              e && /* @__PURE__ */ r("p", { className: "text-xs text-gray-600 dark:text-gray-400 flex-shrink overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px]", children: e }),
              /* @__PURE__ */ r("div", { className: "flex items-center gap-6", children: b.map((u, s) => /* @__PURE__ */ h(
                "label",
                {
                  className: "flex items-center gap-2 cursor-pointer select-none",
                  children: [
                    /* @__PURE__ */ r(
                      "input",
                      {
                        type: "radio",
                        name: "switch-field",
                        required: l && s === 0,
                        value: String(u.value),
                        disabled: c,
                        id: `field-${n}`,
                        checked: a === u.value,
                        onChange: () => o == null ? void 0 : o(u.value),
                        className: x(
                          f.field.input,
                          "w-4 h-4 border-gray-300 cursor-pointer"
                        )
                      }
                    ),
                    /* @__PURE__ */ r("span", { className: "text-sm text-gray-700 dark:text-white", children: u.label })
                  ]
                },
                s
              )) })
            ]
          }
        ),
        p && /* @__PURE__ */ r(
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
    n
  ) });
}, At = we, aa = ({
  label: a = "",
  value: o = null,
  onChange: e,
  required: t = !1,
  accept: i = "video/*",
  id: l,
  dragDrop: n = !1,
  name: c = "",
  parentClass: g = "",
  maxSize: p = 0,
  errorMessage: b = ""
}) => {
  const [u, s] = D(
    null
  ), [w, m] = D(!1), y = de(null), S = p * 1024 * 1024;
  V(() => {
    if (!o) {
      k(), s(null);
      return;
    }
    if (o instanceof File) {
      const v = URL.createObjectURL(o);
      return s({ file: o, preview: v }), () => {
        URL.revokeObjectURL(v);
      };
    } else typeof o == "string" ? s({ preview: o }) : o != null && o.preview && s(o);
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
    k(), s({ file: R, preview: M }), e == null || e(R);
  }, A = (v) => {
    v && v.stopPropagation(), k(), s(null), e == null || e(null), y.current && (y.current.value = "");
  }, F = (v) => {
    n && (v.preventDefault(), m(!0));
  }, I = (v) => {
    n && (v.preventDefault(), m(!1));
  }, E = (v) => {
    var R, M, z, G;
    n && (v.preventDefault(), m(!1), (G = (z = (M = (R = v.dataTransfer) == null ? void 0 : R.files) == null ? void 0 : M[0]) == null ? void 0 : z.type) != null && G.includes("video/") && _(v.dataTransfer.files));
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
        g || "col-span-12"
      ),
      children: [
        /* @__PURE__ */ r(me, { label: a, required: t }),
        /* @__PURE__ */ h(
          "div",
          {
            className: x(
              f.mediaPicker.dropzone,
              "relative rounded-lg p-2 transition-all",
              w ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800",
              b ? "border-red-500" : ""
            ),
            onDragOver: F,
            onDragLeave: I,
            onDrop: E,
            id: `field-${c}`,
            children: [
              /* @__PURE__ */ r(
                "input",
                {
                  ref: y,
                  id: l,
                  type: "file",
                  accept: i,
                  onChange: (v) => _(v.target.files),
                  required: t && !u,
                  className: "absolute opacity-0 pointer-events-none h-[10px]"
                }
              ),
              /* @__PURE__ */ r(
                "div",
                {
                  className: `flex items-center space-x-4 transition-all ${w ? "opacity-50" : ""}`,
                  children: u ? /* @__PURE__ */ h("div", { className: "flex items-center space-x-4", children: [
                    /* @__PURE__ */ h("div", { className: "relative", children: [
                      !t && /* @__PURE__ */ r(
                        "button",
                        {
                          type: "button",
                          onClick: A,
                          className: "absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow hover:bg-red-600 z-10",
                          children: /* @__PURE__ */ r(ge, { icon: "mdi:close", className: "w-3 h-3" })
                        }
                      ),
                      /* @__PURE__ */ r(
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
                    /* @__PURE__ */ r(At, { type: "button", onClick: T, children: "Change Video File" })
                  ] }) : /* @__PURE__ */ h("div", { className: "flex items-center justify-center space-x-4", children: [
                    /* @__PURE__ */ r("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ r(ge, { icon: "mdi:video", className: "text-gray-400 w-10 h-10" }) }),
                    /* @__PURE__ */ h("div", { className: "flex flex-col items-center space-y-1", children: [
                      /* @__PURE__ */ r(
                        At,
                        {
                          type: "button",
                          onClick: T,
                          variant: "outlined",
                          children: "Choose Video File"
                        }
                      ),
                      n && /* @__PURE__ */ r("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop your video here" })
                    ] })
                  ] })
                }
              ),
              n && w && !u && /* @__PURE__ */ r("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-lg", children: /* @__PURE__ */ r("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg", children: "Drop video here" }) })
            ]
          }
        ),
        b && /* @__PURE__ */ r(
          "span",
          {
            className: x(
              f.field.error,
              "text-red-500 text-xs mt-1"
            ),
            children: b
          }
        )
      ]
    },
    c
  );
}, qt = ({
  field: a,
  formData: o,
  handleChange: e,
  errorMessage: t
}) => {
  const {
    key: i,
    label: l,
    type: n,
    options: c,
    placeholder: g,
    rows: p,
    inputClass: b,
    search: u,
    accept: s,
    text: w,
    required: m = !1,
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
    cropImage: re,
    aspectRatio: ae,
    dependencyKey: j,
    mask: ce,
    maskApplyOnValue: X,
    maxSize: te
  } = a;
  let P = o == null ? void 0 : o[i];
  P == null && (P = "");
  const C = g || (n === "select" ? `Select ${l}` : `Enter ${l}`), W = "w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm focus:outline-none focus:ring-1 focus:ring-blue-200 bg-white text-black dark:bg-gray-700 dark:text-white";
  if (z && typeof z == "function" && !z(o))
    return null;
  if (K && K == "details")
    switch (n) {
      case "group":
        return /* @__PURE__ */ r(Zt, { col: a, data: o });
      case "cardGroup":
        return /* @__PURE__ */ r(Vt, { col: a, data: o });
      default:
        return /* @__PURE__ */ r(Jt, { col: a, data: o });
    }
  switch (n) {
    case "select":
      return /* @__PURE__ */ r(
        mr,
        {
          options: c || [],
          value: P,
          formData: o,
          dependencyKey: j,
          onChange: (U) => e(i, U),
          placeholder: C,
          className: b || "",
          search: u,
          required: m,
          defaultValue: M,
          label: l || "",
          name: i,
          countriesList: _,
          disabled: v,
          parentClass: k || "",
          multiple: F,
          dropdownMaxHeight: I,
          errorMessage: t
        }
      );
    case "checkbox":
      return /* @__PURE__ */ r(Y, { children: /* @__PURE__ */ r(
        qr,
        {
          name: i,
          label: l || "",
          options: c || [],
          value: P,
          onChange: (U) => e(i, U),
          required: m,
          parentClass: k || "",
          className: b || "",
          multiSelect: F,
          disabled: v,
          errorMessage: t
        }
      ) });
    case "radio":
      return /* @__PURE__ */ r(
        ra,
        {
          value: P,
          onChange: (U) => e(i, U),
          text: w,
          options: c || [],
          label: l || "",
          required: m,
          name: i,
          disabled: v,
          parentClass: k || "",
          errorMessage: t
        }
      );
    case "switch":
      return /* @__PURE__ */ r(
        It,
        {
          value: !!P,
          onChange: (U) => e(i, U),
          label: l || "",
          required: m,
          name: i,
          disabled: v,
          className: "",
          parentClass: k || "",
          errorMessage: t
        }
      );
    case "phone":
      return /* @__PURE__ */ r(
        fr,
        {
          value: P,
          onChange: (U) => e(i, U),
          countriesList: _,
          defaultCountry: A,
          required: m,
          placeholder: C,
          search: u,
          label: l || "",
          name: i,
          disabled: v,
          errorMessage: t,
          parentClass: k || ""
        }
      );
    case "textarea":
      return /* @__PURE__ */ r(
        Ut,
        {
          value: P,
          onChange: (U) => e(i, U.target.value),
          placeholder: C,
          rows: p || 3,
          className: `${W} ${b || ""}`,
          required: m,
          name: i,
          label: l || "",
          disabled: v,
          parentClass: k || "",
          errorMessage: t
        }
      );
    case "image":
    case "multiImage":
      return F || n === "multiImage" ? /* @__PURE__ */ r(
        ta,
        {
          value: Array.isArray(P) ? P : [],
          onChange: (U) => e(i, U),
          required: m,
          accept: s || "image/*",
          aspect: ae,
          id: `file-${i}`,
          dragDrop: S,
          cropImage: re,
          label: l || "",
          name: i,
          parentClass: k || "",
          maxImages: a.maxImages,
          errorMessage: t
        }
      ) : /* @__PURE__ */ r(
        Xr,
        {
          value: P,
          onChange: (U) => e(i, U),
          required: m,
          accept: s || "image/*",
          aspect: ae,
          id: `file-${i}`,
          dragDrop: S,
          cropImage: re,
          label: l || "",
          name: i,
          parentClass: k || "",
          errorMessage: t
        }
      );
    case "audio":
      return /* @__PURE__ */ r(
        Qr,
        {
          value: P,
          onChange: (U) => e(i, U),
          required: m,
          accept: s || "audio/*",
          id: `file-${i}`,
          dragDrop: S,
          label: l || "",
          name: i,
          parentClass: k || "",
          maxSize: te,
          errorMessage: t
        }
      );
    case "video":
      return /* @__PURE__ */ r(
        aa,
        {
          value: P,
          onChange: (U) => e(i, U),
          required: m,
          accept: s || "video/*",
          id: `file-${i}`,
          dragDrop: S,
          label: l || "",
          name: i,
          maxSize: te,
          parentClass: k || "",
          errorMessage: t
        }
      );
    case "tinyEditor":
      return /* @__PURE__ */ r(
        Jr,
        {
          value: P,
          name: i,
          onChange: (U) => e(i, U),
          required: m,
          placeholder: C,
          label: l || "",
          parentClass: k || "",
          fontFamily: T,
          editorKey: E || "",
          disabled: v,
          errorMessage: t
        }
      );
    default:
      return /* @__PURE__ */ r(
        Ht,
        {
          field: a,
          type: n || "text",
          defaultValue: M,
          value: P,
          onChange: (U) => e(i, U),
          placeholder: C,
          className: `${W} ${b || ""}`,
          required: m,
          name: i,
          minLength: y,
          label: l || "",
          negativeNumberAllow: R,
          parentClass: k || "",
          disabled: v,
          pattern: G,
          mask: ce,
          errorMessage: t,
          maskApplyOnValue: X
        }
      );
  }
}, oa = ({
  isOpen: a,
  onClose: o,
  config: e,
  onApply: t
}) => {
  var b;
  const [i, l] = D({}), n = (u, s) => {
    l((w) => ({ ...w, [u]: s }));
  }, c = () => {
    t(i), o();
  }, g = () => {
    l({}), t({}), o();
  }, p = e == null ? void 0 : e.component;
  return /* @__PURE__ */ h(Y, { children: [
    /* @__PURE__ */ r(
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
                /* @__PURE__ */ r("h2", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: "Filters" }),
                /* @__PURE__ */ r(
                  "button",
                  {
                    onClick: o,
                    className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition",
                    children: /* @__PURE__ */ r(at, { className: "w-5 h-5 text-gray-500 dark:text-gray-400" })
                  }
                )
              ]
            }
          ),
          a && /* @__PURE__ */ r(
            "div",
            {
              className: x(
                f.filterDrawer.body,
                "flex-1 overflow-y-auto px-4 py-3"
              ),
              children: p ? /* @__PURE__ */ r(
                p,
                {
                  filters: i,
                  onFilterChange: n
                }
              ) : /* @__PURE__ */ r("div", { className: "space-y-4", children: (b = e == null ? void 0 : e.fields) == null ? void 0 : b.map((u) => /* @__PURE__ */ r(
                qt,
                {
                  field: u,
                  formData: i,
                  handleChange: n
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
                /* @__PURE__ */ r(
                  we,
                  {
                    onClick: c,
                    variant: "contained",
                    color: "primary",
                    fullWidth: !0,
                    children: "Apply Filters"
                  }
                ),
                /* @__PURE__ */ r(
                  we,
                  {
                    onClick: g,
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
}, ia = ({ rows: a = 5, columns: o = 5 }) => /* @__PURE__ */ h(Y, { children: [
  /* @__PURE__ */ r("div", { className: "w-full mb-6 inline-flex justify-end items-center", children: /* @__PURE__ */ r("div", { className: "h-8 w-80 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }),
  /* @__PURE__ */ r("div", { className: "overflow-hidden rounded-md border border-gray-200 dark:border-gray-800", children: /* @__PURE__ */ h(
    "table",
    {
      className: x(
        f.tableSkeleton.root,
        f.tableSkeleton.table,
        "w-full border-collapse"
      ),
      children: [
        /* @__PURE__ */ r("thead", { children: /* @__PURE__ */ r("tr", { className: "bg-gray-50 dark:bg-gray-900", children: Array.from({ length: o }).map((e, t) => /* @__PURE__ */ r("th", { className: "px-4 py-3", children: /* @__PURE__ */ r("div", { className: "h-6 w-24 bg-gray-300 dark:bg-gray-700 rounded animate-pulse  inline-flex justify-center items-center" }) }, t)) }) }),
        /* @__PURE__ */ r("tbody", { children: Array.from({ length: a }).map((e, t) => /* @__PURE__ */ r(
          "tr",
          {
            className: "border-t border-gray-200 dark:border-gray-800",
            children: Array.from({ length: o }).map((i, l) => /* @__PURE__ */ r("td", { className: "px-4 py-6", children: /* @__PURE__ */ r("div", { className: "h-6 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }, l))
          },
          t
        )) })
      ]
    }
  ) })
] }), na = ({
  options: a = [],
  value: o = "",
  onChange: e,
  clearLabel: t = ""
}) => {
  const [i, l] = D(!1), n = de(null), c = !!o;
  V(() => {
    const p = (b) => {
      n.current && !n.current.contains(b.target) && l(!1);
    };
    return document.addEventListener("click", p), () => document.removeEventListener("click", p);
  }, []);
  const g = (p) => {
    const b = a.find((u) => u.value === p);
    e(p, b || null), l(!1);
  };
  return a != null && a.length ? /* @__PURE__ */ h(
    "div",
    {
      className: x(f.sortDropdown.root, "relative"),
      ref: n,
      children: [
        /* @__PURE__ */ h(
          "button",
          {
            type: "button",
            onClick: () => l((p) => !p),
            className: x(
              f.sortDropdown.trigger,
              "relative inline-flex items-center justify-center h-[36px] w-[36px] rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
            ),
            "aria-label": "Open sort options",
            children: [
              /* @__PURE__ */ r(ar, { className: "w-4 h-4" }),
              c && /* @__PURE__ */ r("span", { className: "absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" })
            ]
          }
        ),
        i && /* @__PURE__ */ h(
          "div",
          {
            className: x(
              f.sortDropdown.menu,
              "absolute right-0 mt-2 z-20 min-w-[220px] max-h-[260px] overflow-auto rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg"
            ),
            children: [
              !!(t != null && t.trim()) && /* @__PURE__ */ r(
                "button",
                {
                  type: "button",
                  onClick: () => g(""),
                  className: x(
                    f.sortDropdown.item,
                    "w-full text-left px-3 py-2 text-sm transition hover:bg-gray-100 dark:hover:bg-gray-700",
                    o ? "text-gray-700 dark:text-gray-200" : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                  ),
                  children: t
                }
              ),
              a.map((p) => /* @__PURE__ */ r(
                "button",
                {
                  type: "button",
                  onClick: () => g(p.value),
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
}, it = {
  enabled: !1,
  useServerSideSorting: !1,
  options: [],
  fields: [],
  defaultValue: "",
  autoGenerate: !0,
  clearLabel: "",
  onChange: null
}, la = (a) => a === !0 ? { ...it, enabled: !0 } : !a || typeof a != "object" ? it : {
  ...it,
  ...a,
  enabled: a.enabled ?? !0,
  autoGenerate: a.autoGenerate ?? !0
}, sa = (a = []) => a.filter((o) => {
  const e = ["menu_actions", "index", "audio", "avatar"];
  return o.type && e.includes(o.type) ? !1 : !!(o.sortKey || (o.type === "group" ? o.titleKey : o.key));
}), ca = (a) => {
  if (a.sortType) return a.sortType;
  if (a.type === "date") return "date";
  if (a.type === "number") return "number";
  const o = String(
    a.sortKey || (a.type === "group" ? a.titleKey : a.key) || ""
  ).toLowerCase();
  return ["phone", "mobile", "contact", "tel", "whatsapp"].some(
    (t) => o.includes(t)
  ) ? "phone" : Array.isArray(a.chipOptions) && a.chipOptions.length > 0 && a.chipOptions.every(
    (i) => typeof i.value == "boolean"
  ) ? "boolean" : "string";
}, Et = (a = []) => a.flatMap((o) => {
  const e = o.sortKey || (o.type === "group" ? o.titleKey : o.key), t = o.sortLabel || o.title || e, i = ca(o);
  return e ? i === "number" ? [
    {
      value: `${e}_asc`,
      label: `${t} (Low-High)`,
      key: e,
      order: "asc",
      type: i
    },
    {
      value: `${e}_desc`,
      label: `${t} (High-Low)`,
      key: e,
      order: "desc",
      type: i
    }
  ] : i === "phone" ? [
    {
      value: `${e}_asc`,
      label: `${t} (0-9)`,
      key: e,
      order: "asc",
      type: i
    },
    {
      value: `${e}_desc`,
      label: `${t} (9-0)`,
      key: e,
      order: "desc",
      type: i
    }
  ] : i === "date" ? [
    {
      value: `${e}_desc`,
      label: `${t} (Newest First)`,
      key: e,
      order: "desc",
      type: i
    },
    {
      value: `${e}_asc`,
      label: `${t} (Oldest First)`,
      key: e,
      order: "asc",
      type: i
    }
  ] : i === "boolean" ? [
    {
      value: `${e}_desc`,
      label: `${t} (True First)`,
      key: e,
      order: "desc",
      type: i
    },
    {
      value: `${e}_asc`,
      label: `${t} (False First)`,
      key: e,
      order: "asc",
      type: i
    }
  ] : [
    {
      value: `${e}_asc`,
      label: `${t} (A-Z)`,
      key: e,
      order: "asc",
      type: i
    },
    {
      value: `${e}_desc`,
      label: `${t} (Z-A)`,
      key: e,
      order: "desc",
      type: i
    }
  ] : [];
}), da = (a, o = []) => {
  if (Array.isArray(a.options) && a.options.length > 0)
    return a.options.map((i) => ({
      ...i,
      type: i.type || "string",
      order: i.order === "desc" ? "desc" : "asc"
    }));
  const t = Array.isArray(a.fields) ? a.fields : [];
  if (t.length > 0) {
    const i = t.map((l) => {
      const n = typeof l == "string" ? l : l.key, c = o.find(
        (g) => g.key === n || g.sortKey === n || g.type === "group" && g.titleKey === n
      );
      return c ? {
        ...c,
        sortKey: typeof l == "object" && l.key ? l.key : c.sortKey,
        sortType: typeof l == "object" && l.type ? l.type : c.sortType,
        sortLabel: typeof l == "object" && l.label ? l.label : c.sortLabel
      } : null;
    }).filter((l) => l !== null);
    return Et(i);
  }
  return a.autoGenerate ? Et(o) : [];
}, pa = (a = [], o = "", e, t = []) => {
  if (!(e != null && e.enabled) || !o || e != null && e.useServerSideSorting)
    return a;
  const i = t == null ? void 0 : t.find(
    (p) => p.value === o
  );
  if (!(i != null && i.key))
    return a;
  const l = i.order === "desc" ? "desc" : "asc", n = i.key, c = i.type || "string", g = (p) => String(p ?? "").replace(/[^\d]/g, "").trim();
  return [...a].sort((p, b) => {
    const u = p == null ? void 0 : p[n], s = b == null ? void 0 : b[n];
    if (u == null && s == null) return 0;
    if (u == null) return l === "asc" ? 1 : -1;
    if (s == null) return l === "asc" ? -1 : 1;
    let w = 0;
    return c === "number" ? w = Number(u) - Number(s) : c === "phone" ? w = g(u).localeCompare(
      g(s),
      void 0,
      {
        numeric: !0
      }
    ) : c === "date" ? w = new Date(u).getTime() - new Date(s).getTime() : c === "boolean" ? w = +!!u - +!!s : w = String(u).localeCompare(String(s)), l === "asc" ? w : -w;
  });
}, ua = ({
  config: a,
  setShowAdd: o,
  title: e,
  buttonText: t,
  description: i,
  showAddButton: l
}) => {
  const {
    data: n = [],
    table_head: c = [],
    loading: g = !1,
    search: p = {
      enabled: !1,
      placeholder: "Search...",
      useServerSideSearch: !1
    },
    filter: b = {
      enabled: !1,
      useServerSideFilters: !1
    },
    sort: u = { enabled: !1 },
    pagination: s = {
      enabled: !1,
      rows_per_page: 10,
      useServerSidePagination: !1
    },
    exportCSV: w = {
      enabled: !1,
      fileName: "",
      fields: []
    },
    emptyMessage: m = "No data available",
    onMenuAction: y,
    setServerSidePaginationData: S = () => {
    },
    onFilterApply: k,
    filterConfig: _ = null,
    rowClick: A = null
  } = a, [F, I] = D(""), [E, T] = D(null), [v, R] = D([]), [M, z] = D({ top: 0, left: 0 }), [G, K] = D(!1), [re, ae] = D({}), j = Ce(() => la(u), [u]), ce = Ce(
    () => sa(c),
    [c]
  ), X = Ce(() => da(j, ce), [j, ce]), [te, P] = D(
    (j == null ? void 0 : j.defaultValue) || ""
  ), [C, W] = D(null), [U, pe] = D(!1), ve = Ce(() => !p.enabled || !F.trim() || p.useServerSideSearch ? n : wr(n, F, p.searchKeys || []), [n, F, p]), fe = Ce(() => pa(
    ve,
    te,
    j,
    X
  ), [ve, te, j, X]), [le, L] = D(1), [$, q] = D((s == null ? void 0 : s.rows_per_page) || 50), [Q, H] = D(ve.length || 0), oe = s != null && s.useServerSidePagination ? s.total_pages : Math.ceil(ve.length / $), Le = Ce(() => {
    if (s.useServerSidePagination) return fe;
    const d = (le - 1) * $;
    return fe.slice(d, d + $);
  }, [fe, le, $, s.useServerSidePagination]), Pe = de(null), je = de({}), Ae = de(null), $e = (d) => {
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
  }, Ke = (d) => (le - 1) * $ + d + 1, ze = (d) => {
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
      return /* @__PURE__ */ r("span", { className: N.className || "", children: "N/A" });
    const J = N.maxPreview || 3, ee = B.slice(0, J), ue = B.length - ee.length;
    return /* @__PURE__ */ h("div", { className: "flex items-center", children: [
      /* @__PURE__ */ r("div", { className: "flex -space-x-2", children: ee.map((ye, he) => {
        const xe = We(ye);
        return xe ? /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            onClick: (Ue) => {
              Ue.stopPropagation(), ze({ src: xe, alt: `Gallery ${he + 1}` });
            },
            className: "w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden",
            children: /* @__PURE__ */ r(
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
  }, Ie = (d, N, B, J = null, ee = null) => /* @__PURE__ */ r(Y, { children: d ? /* @__PURE__ */ r(
    "img",
    {
      src: d instanceof File ? URL.createObjectURL(d) : d,
      alt: N || "Avatar",
      onClick: (ue) => {
        ue.stopPropagation(), ue.preventDefault(), ze({ src: d, alt: N });
      },
      className: `w-10 h-10 cursor-pointer shrink-0 rounded-full object-cover border border-gray-200 dark:border-gray-700 ${B || ""}`
    }
  ) : /* @__PURE__ */ r(Y, { children: J ? typeof J == "function" ? J(ee) : J : /* @__PURE__ */ r(
    "div",
    {
      className: `w-10 h-10 flex items-center shrink-0 justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${B || ""}`,
      children: /* @__PURE__ */ r(mt, { className: "w-6 h-6 text-gray-400 dark:text-gray-400" })
    }
  ) }) }), Ze = (d, N) => /* @__PURE__ */ r(Y, { children: d ? /* @__PURE__ */ r(
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
  ) : /* @__PURE__ */ r(Y, { children: /* @__PURE__ */ r(
    "div",
    {
      className: `w-12 h-12 flex items-center shrink-0 justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${N || ""}`,
      children: /* @__PURE__ */ r(dr, { className: "w-6 h-6 text-gray-400 dark:text-gray-400" })
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
      /* @__PURE__ */ r("p", { className: "font-medium text-gray-900 dark:text-white group-title", children: d[N.titleKey] || "" }),
      /* @__PURE__ */ r("p", { className: "text-sm text-gray-500 dark:text-gray-400 group-sub-title", children: d[N.subtitleKey] || "" })
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
    return /* @__PURE__ */ r(
      Xt,
      {
        label: B,
        variant: J,
        color: ee,
        className: N.className || ""
      }
    );
  }, O = (d, N, B) => {
    const J = N[d.key];
    return d.type === "menu_actions" ? /* @__PURE__ */ r("div", { className: `text-center ${d.className || ""}`, children: /* @__PURE__ */ r(
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
        children: /* @__PURE__ */ r(cr, { className: "h-4 w-4" })
      }
    ) }) : d.type === "index" ? /* @__PURE__ */ r("span", { className: d.className || "", children: Ke(B) }) : d.type === "group" ? Ve(N, d) : d.type === "chip" ? /* @__PURE__ */ r(Y, { children: Xe(J, d) }) : d.type === "date" ? /* @__PURE__ */ r("span", { className: d.className || "", children: nt(J, d.format || "DD MMM YYYY") }) : d.type === "avatar" ? /* @__PURE__ */ r(Y, { children: /* @__PURE__ */ r("div", { className: "min-w-[40px]", children: Ie(
      J,
      d.alt,
      d.className,
      d.fallback_icon,
      N
    ) }) }) : d.type === "audio" ? /* @__PURE__ */ r(Y, { children: Ze(J, d.className) }) : d.type === "multiImage" ? /* @__PURE__ */ r(Y, { children: He(J, d) }) : /* @__PURE__ */ r("span", { className: d.className || "", children: J || "N/A" });
  }, Z = (d) => {
    if (typeof A == "function")
      return A(d);
    if (A)
      return y == null ? void 0 : y("view", d);
  }, ie = (d, N) => {
    if (d.onClickDetails)
      return y == null ? void 0 : y("view", N);
    if (typeof d.handleClick == "function")
      return d.handleClick(N);
  }, Ne = () => A || typeof A == "function", ne = (d) => d.onClickDetails || typeof d.handleClick == "function", Qt = () => {
    var Ue;
    if (!(n != null && n.length) || !((Ue = w == null ? void 0 : w.fields) != null && Ue.length)) return;
    const d = w.fields.map((Se) => Se.label), N = Le.map(
      (Se) => w.fields.map((ft) => {
        const Fe = Se == null ? void 0 : Se[ft.key];
        return `"${Fe ?? ""}"`;
      })
    ), B = [
      d.join(","),
      ...N.map((Se) => Se.join(","))
    ].join(`
`), ee = `export-${nt(/* @__PURE__ */ new Date(), "YYYY-MM-DD_HH-mm-ss")}.csv`, ue = w.fileName || ee, ye = new Blob([B], { type: "text/csv;charset=utf-8;" }), he = document.createElement("a"), xe = URL.createObjectURL(ye);
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
    s != null && s.rows_per_page && (s != null && s.useServerSidePagination) && q((s == null ? void 0 : s.rows_per_page) || 50), s.current_page && L(s.current_page);
  }, [
    s.rows_per_page,
    s == null ? void 0 : s.useServerSidePagination,
    s.current_page
  ]), V(() => {
    H(
      s != null && s.useServerSidePagination ? s.total_records : fe.length
    ), fe.length <= $ * (le - 1) && !(s != null && s.useServerSidePagination) && L((d) => d - 1 || 1);
  }, [
    fe.length,
    s.total_records,
    s == null ? void 0 : s.useServerSidePagination
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
      (N) => N.value === te
    );
    S((N) => ({
      ...N,
      current_page: 1,
      sort_by: (d == null ? void 0 : d.key) || "",
      sort_order: (d == null ? void 0 : d.order) || ""
    }));
  }, [
    te,
    j == null ? void 0 : j.enabled,
    j == null ? void 0 : j.useServerSideSorting,
    X,
    S
  ]), /* @__PURE__ */ h(Y, { children: [
    g ? /* @__PURE__ */ r(ia, { rows: 6, columns: 6 }) : /* @__PURE__ */ h(Y, { children: [
      /* @__PURE__ */ h(
        "div",
        {
          className: x(
            f.table.toolbar,
            "flex flex-col lg:!flex-row lg:!justify-between gap-4 mb-3"
          ),
          children: [
            /* @__PURE__ */ h("div", { className: "table-heading", children: [
              /* @__PURE__ */ r("h1", { children: e }),
              /* @__PURE__ */ r("p", { children: i })
            ] }),
            /* @__PURE__ */ h("div", { className: "flex flex-col justify-end items-stretch lg:!items-end gap-2 w-full lg:!w-auto", children: [
              l && /* @__PURE__ */ h(
                we,
                {
                  onClick: () => o(!0),
                  variant: "contained",
                  color: "primary",
                  children: [
                    /* @__PURE__ */ r(or, { className: "w-4 h-4 mr-2" }),
                    t || "Add New"
                  ]
                }
              ),
              /* @__PURE__ */ h("div", { className: "flex flex-col sm:!flex-row sm:!flex-wrap justify-end items-stretch sm:!items-center gap-2 w-full", children: [
                p.enabled && /* @__PURE__ */ r("div", { className: "w-full sm:!w-auto", children: /* @__PURE__ */ h(
                  "div",
                  {
                    className: x(
                      f.table.searchField,
                      "table-search-field"
                    ),
                    children: [
                      /* @__PURE__ */ r(wt, { className: "search-icon" }),
                      /* @__PURE__ */ r(
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
                j != null && j.enabled && (X == null ? void 0 : X.length) > 0 || _ && b.enabled || w && w.enabled ? /* @__PURE__ */ h("div", { className: "flex items-center justify-end gap-2 w-full sm:!w-auto", children: [
                  _ && b.enabled && /* @__PURE__ */ h("div", { className: "filter-button-wrapper", children: [
                    /* @__PURE__ */ h(
                      we,
                      {
                        onClick: () => K(!0),
                        variant: "contained",
                        className: "w-full sm:!w-auto",
                        children: [
                          /* @__PURE__ */ r(ir, { className: "w-4 h-4 mr-2" }),
                          "Filters"
                        ]
                      }
                    ),
                    Object.keys(re).length > 0 && /* @__PURE__ */ r("span", { className: "red-dot" })
                  ] }),
                  w && w.enabled && /* @__PURE__ */ r("div", { className: "filter-button-wrapper", children: /* @__PURE__ */ h(
                    we,
                    {
                      onClick: () => Qt(),
                      variant: "contained",
                      className: "w-full sm:!w-auto",
                      children: [
                        /* @__PURE__ */ r(nr, { className: "w-4 h-4 mr-2" }),
                        "Export CSV"
                      ]
                    }
                  ) }),
                  (j == null ? void 0 : j.enabled) && (X == null ? void 0 : X.length) > 0 && /* @__PURE__ */ r(
                    na,
                    {
                      options: X,
                      value: te,
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
            /* @__PURE__ */ r("div", { className: "overflow-x-auto", children: /* @__PURE__ */ h("table", { className: f.table.element, children: [
              /* @__PURE__ */ r("thead", { className: f.table.head, children: /* @__PURE__ */ r("tr", { className: f.table.headRow, children: c.map((d) => /* @__PURE__ */ r(
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
              /* @__PURE__ */ r("tbody", { className: f.table.body, children: Le.length === 0 ? /* @__PURE__ */ r("tr", { children: /* @__PURE__ */ r(
                "td",
                {
                  colSpan: c.length,
                  className: x(
                    f.table.noData,
                    "no-data-message"
                  ),
                  children: m
                }
              ) }) : Le.map((d, N) => /* @__PURE__ */ r(
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
                  children: c.map((B) => /* @__PURE__ */ r(
                    "td",
                    {
                      className: x(
                        f.table.cell,
                        "table-data",
                        B.type == "audio" ? "" : "max-w-[300px]",
                        "truncate",
                        ne(B) ? "cursor-pointer" : ""
                      ),
                      title: String(d[B.key] ?? ""),
                      onClick: (J) => {
                        ne(B) && (J.stopPropagation(), J.preventDefault(), ie(B, d));
                      },
                      children: B.render ? B.render(d, N) : O(B, d, N)
                    },
                    B.key
                  ))
                },
                d.id || d._id || N
              )) })
            ] }) }),
            (s == null ? void 0 : s.enabled) && fe.length > 0 && /* @__PURE__ */ h(
              "div",
              {
                className: x(
                  f.table.pagination,
                  "pagination-wrapper"
                ),
                children: [
                  /* @__PURE__ */ h("span", { children: [
                    "Showing ",
                    (le - 1) * $ + 1,
                    " to",
                    " ",
                    Math.min(le * $, Q),
                    " of",
                    " ",
                    Q,
                    " results"
                  ] }),
                  /* @__PURE__ */ h("div", { className: "flex items-center gap-4", children: [
                    /* @__PURE__ */ h("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ r("span", { children: "Rows per page:" }),
                      /* @__PURE__ */ r(
                        "select",
                        {
                          value: $,
                          onChange: (d) => {
                            const N = Number(d.target.value);
                            q(N), L(1), s.useServerSidePagination && S(
                              (B) => ({
                                ...B,
                                current_page: 1,
                                rows_per_page: N
                              })
                            );
                          },
                          className: "rows-number-select",
                          children: [10, 25, 50, 100].map((d) => /* @__PURE__ */ r("option", { value: d, children: d }, d))
                        }
                      )
                    ] }),
                    /* @__PURE__ */ h("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ r(
                        "button",
                        {
                          onClick: () => {
                            if (le > 1) {
                              const d = le - 1;
                              L(d), s.useServerSidePagination && S(
                                (N) => ({
                                  ...N,
                                  current_page: d
                                })
                              );
                            }
                          },
                          disabled: le === 1,
                          className: "arrow-icons",
                          children: /* @__PURE__ */ r(lr, { className: "h-4 w-4" })
                        }
                      ),
                      /* @__PURE__ */ h("span", { children: [
                        "Page ",
                        le,
                        " of ",
                        oe
                      ] }),
                      /* @__PURE__ */ r(
                        "button",
                        {
                          onClick: () => {
                            if (le < oe) {
                              const d = le + 1;
                              L(d), s.useServerSidePagination && S(
                                (N) => ({
                                  ...N,
                                  current_page: d
                                })
                              );
                            }
                          },
                          disabled: le === oe,
                          className: "arrow-icons",
                          children: /* @__PURE__ */ r(sr, { className: "h-4 w-4" })
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
    E && pr(
      /* @__PURE__ */ r(
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
                n.find(
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
                d.icon && /* @__PURE__ */ r("span", { className: "shrink-0", children: d.icon }),
                d.title
              ]
            },
            N
          ))
        }
      ),
      document.body
    ),
    _ && /* @__PURE__ */ r(
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
    U && C && /* @__PURE__ */ r(
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
  title: t,
  children: i,
  size: l = "md",
  actionButtons: n = [],
  onFormSubmit: c = () => {
  },
  loadingBtn: g = !1,
  executeFunction: p = () => {
  },
  selectedItem: b = null,
  footerConfig: u,
  classNames: s
}) => {
  if (!a) return null;
  const w = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-full"
  }, m = n.length > 0 || !!(u != null && u.cancelButton);
  return /* @__PURE__ */ h(
    "div",
    {
      className: x(
        f.modal.root,
        "fixed inset-0 z-50 flex items-center justify-center p-4"
      ),
      children: [
        /* @__PURE__ */ r(
          "div",
          {
            className: x(
              f.modal.overlay,
              "fixed inset-0 bg-gray-500 opacity-75",
              s == null ? void 0 : s.overlay
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
              w[l] || w.md,
              s == null ? void 0 : s.container
            ),
            children: [
              /* @__PURE__ */ h(
                "div",
                {
                  className: x(
                    f.modal.header,
                    "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0",
                    s == null ? void 0 : s.header
                  ),
                  children: [
                    /* @__PURE__ */ h("div", { className: "flex items-center gap-1", children: [
                      e && /* @__PURE__ */ r("span", { children: e }),
                      /* @__PURE__ */ r(
                        "h3",
                        {
                          className: x(
                            f.modal.title,
                            "text-lg font-medium text-gray-900 dark:text-white",
                            s == null ? void 0 : s.title
                          ),
                          children: t
                        }
                      )
                    ] }),
                    /* @__PURE__ */ r(
                      "button",
                      {
                        onClick: () => o(),
                        className: x(
                          f.modal.closeButton,
                          "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
                          s == null ? void 0 : s.closeButton
                        ),
                        children: /* @__PURE__ */ r(at, { className: "w-6 h-6" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ r(
                "div",
                {
                  className: x(
                    f.modal.body,
                    "flex-1 overflow-y-auto p-4",
                    s == null ? void 0 : s.body
                  ),
                  children: i
                }
              ),
              m && /* @__PURE__ */ h(
                "div",
                {
                  className: x(
                    f.modal.footer,
                    "px-4 py-3 flex justify-end gap-3 border-t border-gray-200 dark:border-gray-700 sm:!px-6",
                    s == null ? void 0 : s.footer
                  ),
                  children: [
                    (u == null ? void 0 : u.cancelButton) && /* @__PURE__ */ r(
                      we,
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
                    n.map((y, S) => /* @__PURE__ */ r(
                      we,
                      {
                        onClick: (k) => {
                          y.type == "submit" ? c(k) : p(
                            () => {
                              var _;
                              return Promise.resolve((_ = y == null ? void 0 : y.onClick) == null ? void 0 : _.call(y, k, b));
                            },
                            (_) => o == null ? void 0 : o(_)
                          );
                        },
                        disabled: g || y.disabled,
                        variant: y.variant || "contained",
                        color: y.color || "primary",
                        className: x(
                          f.modal.actionButton,
                          "min-w-[100px]",
                          y.className || ""
                        ),
                        type: y.type || "button",
                        children: g ? /* @__PURE__ */ h(
                          "div",
                          {
                            className: x(
                              f.modal.loadingIndicator,
                              "flex items-center"
                            ),
                            children: [
                              /* @__PURE__ */ r("div", { className: "animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-2 border-t-white mr-2" }),
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
}, jt = ({
  config: a,
  onSubmit: o,
  initialData: e,
  fetchRowDetails: t,
  type: i
}) => {
  const l = e || {}, { formClass: n = "grid grid-cols-12 gap-4", formFields: c = [] } = a || {}, [g, p] = D(l), [b, u] = D(!0), [s, w] = D({}), m = async () => {
    t == null || t(l).then((k) => {
      p(k.data);
    }).catch((k) => {
      De(k.message, { variant: "error" });
    }).finally(() => {
      u(!1);
    });
  };
  V(() => {
    t instanceof Function ? m() : (p(l), u(!1));
  }, []);
  const y = (k, _) => {
    p((A) => ({ ...A, [k]: _ })), w((A) => ({
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
    for (const I of c) {
      const E = g[I.key] || "";
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
    w(A), !(Object.keys(A).length > 0) && o(g);
  };
  return b ? /* @__PURE__ */ r(
    "div",
    {
      className: x(
        f.form.loading,
        "flex items-center justify-center h-64"
      ),
      children: /* @__PURE__ */ r(
        "div",
        {
          className: "rounded-full border-4 border-blue-500 border-t-gray-200 animate-spin w-8 h-8",
          style: {
            borderTopColor: "border-primary-500"
          }
        }
      )
    }
  ) : /* @__PURE__ */ r(
    "form",
    {
      id: i === "add" ? "addForm" : i === "edit" ? "editForm" : "defaultForm",
      onSubmit: S,
      className: x(f.form.root, n),
      noValidate: !1,
      children: c.map((k) => /* @__PURE__ */ r(
        qt,
        {
          field: k,
          formData: g,
          errorMessage: s[k.key] || "",
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
    fields: t = [],
    containerClass: i,
    variant: l = "default",
    styles: n = {}
  } = o || {}, c = a || {}, [g, p] = D(c), [b, u] = D(!0), s = async () => {
    e == null || e(c).then((m) => {
      p(m.data);
    }).catch((m) => {
      De(m.message, { variant: "error" });
    }).finally(() => {
      u(!1);
    });
  };
  if (V(() => {
    e instanceof Function ? s() : (p(c), u(!1));
  }, []), b)
    return /* @__PURE__ */ r(
      "div",
      {
        className: x(
          f.form.loading,
          "flex items-center justify-center h-64"
        ),
        children: /* @__PURE__ */ r(
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
  const w = {
    default: "grid grid-cols-12 gap-4",
    // card: each field is a standalone elevated card in a 12-col grid
    card: "grid grid-cols-12 gap-3",
    // split: clean property-sheet — bordered box, rows divided by hairlines
    split: "rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden divide-y divide-gray-100 dark:divide-gray-800"
  };
  return /* @__PURE__ */ r(Y, { children: /* @__PURE__ */ r(
    "div",
    {
      className: x(
        f.details.root,
        f.details.container,
        w[l] || w.default,
        i || "",
        n.containerClass || ""
      ),
      children: t.map((m) => m.renderCondition && typeof m.renderCondition == "function" && !m.renderCondition(g) ? null : m.type == "group" ? /* @__PURE__ */ r(
        Zt,
        {
          col: m,
          data: g,
          uiVariant: l,
          styleConfig: n
        },
        m.key || m.titleKey
      ) : m.type == "cardGroup" ? /* @__PURE__ */ r(
        Vt,
        {
          col: m,
          data: g,
          uiVariant: l,
          styleConfig: n
        },
        m.key || m.titleKey
      ) : /* @__PURE__ */ r(
        Jt,
        {
          col: m,
          data: g,
          uiVariant: l,
          styleConfig: n
        },
        m.key || m.label
      ))
    }
  ) });
}
const ba = ({ config: a }) => {
  var L, $, q, Q, H, oe, Le, Pe, je, Ae, $e, Be, Ge, Ye, Ke, ze, We, He, Ie, Ze, Ve, Xe;
  const {
    title: o,
    fetchData: e,
    fetchRowDetails: t,
    isStaticData: i = !1,
    tableConfig: l,
    modalConfig: n,
    filterConfig: c
  } = a, [g, p] = D(!0), [b, u] = D(!1), [s, w] = D([]), [m, y] = D(null), [S, k] = D({
    search: "",
    rows_per_page: 50,
    current_page: 1,
    sort_by: "",
    sort_order: ""
  }), [_, A] = D({}), [F, I] = D(!1), [E, T] = D(!1), [v, R] = D(!1), [M, z] = D(!1), [G, K] = D(!1), [re, ae] = D(
    null
  ), j = (O, Z) => {
    O === "edit" ? (ae(Z), R(!0)) : O === "view" ? (ae(Z), K(!0)) : O === "delete" && (ae(Z), z(!0));
  }, ce = async (O, Z, ie = "", Ne = "") => {
    u(!0);
    try {
      if (!O) return;
      const ne = await O();
      (ie || ne != null && ne.message) && De(ie || ne.message || "Success", {
        variant: "success"
      }), Z == null || Z(ne);
    } catch (ne) {
      (Ne || ne != null && ne.message) && De(Ne || ne.message || "Error occurred", {
        variant: "error"
      });
    } finally {
      u(!1);
    }
  }, X = (O) => {
    const Z = O.newObject;
    i ? (w((ie) => [Z, ...ie]), y((ie) => ({
      ...ie,
      current_page: 1
    }))) : (k((ie) => ({
      ...ie,
      current_page: 1
    })), S.current_page === 1 && U()), T(!1);
  }, te = (O) => {
    const { newObject: Z, targetObject: ie } = O;
    i ? w(
      (Ne) => Ne.map(
        (ne) => ne.id === ie.id ? { ...ne, ...Z } : ne
      )
    ) : U(), R(!1);
  }, P = (O) => {
    if (!O) {
      z(!1), ae(null);
      return;
    }
    i ? w(
      (Z) => Z.filter((ie) => ie.id !== O.targetObject.id)
    ) : s.length === 1 && S.current_page > 1 ? k((Z) => ({
      ...Z,
      current_page: Z.current_page - 1
    })) : U(), z(!1), ae(null);
  }, C = (O) => ce(
    () => {
      var Z;
      return (Z = n == null ? void 0 : n.addModal) != null && Z.handleSubmit ? n.addModal.handleSubmit(O) : Promise.resolve({ newObject: null });
    },
    X
  ), W = (O) => ce(
    () => {
      var Z;
      return (Z = n == null ? void 0 : n.editModal) != null && Z.handleSubmit ? n.editModal.handleSubmit(O, re) : Promise.resolve({ newObject: null, targetObject: null });
    },
    te
  ), U = async () => {
    p(!0);
    try {
      const O = await e({
        ...S,
        ..._
      });
      w(O.data || []), y(O.pagination || null);
    } catch (O) {
      De(O.message || "Failed to fetch data", {
        variant: "error"
      });
    } finally {
      p(!1);
    }
  }, pe = (O) => {
    var Z;
    A((ie) => ({ ...O })), (Z = l == null ? void 0 : l.filter) != null && Z.useServerSideFilters && I((ie) => !ie);
  }, ve = (O, Z) => O.filter(
    (ie) => Object.entries(Z).every(([Ne, ne]) => ie[Ne] === ne)
  ), fe = Ce(() => {
    var O;
    return (O = l == null ? void 0 : l.filter) != null && O.useServerSideFilters ? s : ve(s, _);
  }, [s, _, (L = l == null ? void 0 : l.filter) == null ? void 0 : L.useServerSideFilters]), le = ($ = n == null ? void 0 : n.viewModal) == null ? void 0 : $.component;
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
    /* @__PURE__ */ r(
      ua,
      {
        title: o,
        setShowAdd: T,
        description: a.description,
        buttonText: a.buttonText,
        showAddButton: !!(n != null && n.addModal),
        config: {
          ...l,
          pagination: {
            ...l.pagination,
            ...m
          },
          data: fe,
          setServerSidePaginationData: k,
          onMenuAction: j,
          filterConfig: c,
          onFilterApply: pe,
          loading: g
        }
      }
    ),
    /* @__PURE__ */ r(
      qe,
      {
        isOpen: E,
        onClose: () => {
          b || T(!1);
        },
        icon: (q = n == null ? void 0 : n.addModal) == null ? void 0 : q.icon,
        title: ((Q = n == null ? void 0 : n.addModal) == null ? void 0 : Q.title) || "Add New",
        size: ((H = n == null ? void 0 : n.addModal) == null ? void 0 : H.size) || "md",
        onFormSubmit: () => {
          var O;
          return (O = document.querySelector("#addForm")) == null ? void 0 : O.requestSubmit();
        },
        loadingBtn: b,
        actionButtons: ((oe = n == null ? void 0 : n.addModal) == null ? void 0 : oe.actionButtons) || [],
        children: /* @__PURE__ */ r(
          jt,
          {
            config: (n == null ? void 0 : n.addModal) || {},
            onSubmit: C,
            initialData: {},
            type: "add",
            loading: b
          }
        )
      }
    ),
    /* @__PURE__ */ r(
      qe,
      {
        isOpen: v,
        onClose: () => {
          b || R(!1);
        },
        icon: (Le = n == null ? void 0 : n.editModal) == null ? void 0 : Le.icon,
        title: ((Pe = n == null ? void 0 : n.editModal) == null ? void 0 : Pe.title) || "Edit",
        size: ((je = n == null ? void 0 : n.editModal) == null ? void 0 : je.size) || "md",
        onFormSubmit: () => {
          var O;
          return (O = document.querySelector("#editForm")) == null ? void 0 : O.requestSubmit();
        },
        actionButtons: ((Ae = n == null ? void 0 : n.editModal) == null ? void 0 : Ae.actionButtons) || [],
        loadingBtn: b,
        children: /* @__PURE__ */ r(
          jt,
          {
            config: (n == null ? void 0 : n.editModal) || {},
            onSubmit: W,
            initialData: re,
            type: "edit",
            loading: b,
            fetchRowDetails: t
          }
        )
      }
    ),
    M && /* @__PURE__ */ r(
      qe,
      {
        isOpen: M,
        onClose: (O) => {
          P(O);
        },
        icon: (($e = n == null ? void 0 : n.deleteModal) == null ? void 0 : $e.icon) || /* @__PURE__ */ r(ge, { icon: "ph:warning-bold", className: "w-6 h-6 text-red-500" }),
        title: ((Be = n == null ? void 0 : n.deleteModal) == null ? void 0 : Be.title) || "Confirm Delete",
        size: ((Ge = n == null ? void 0 : n.deleteModal) == null ? void 0 : Ge.size) || "md",
        loading: b,
        actionButtons: ((Ye = n == null ? void 0 : n.deleteModal) == null ? void 0 : Ye.actionButtons) || [],
        executeFunction: ce,
        selectedItem: re,
        children: /* @__PURE__ */ r(
          "div",
          {
            className: x(
              f.crudPage.deleteContent,
              "flex items-center space-x-2 py-3"
            ),
            children: /* @__PURE__ */ h("div", { children: [
              /* @__PURE__ */ r("p", { className: "text-md text-gray-700 dark:text-white", children: ((Ke = n == null ? void 0 : n.deleteModal) == null ? void 0 : Ke.confirmText) || "Are you sure you want to delete this item?" }),
              ((ze = n == null ? void 0 : n.deleteModal) == null ? void 0 : ze.referenceKey) && /* @__PURE__ */ r("p", { className: "text-md font-semibold text-gray-700 dark:text-white", children: re == null ? void 0 : re[(We = n == null ? void 0 : n.deleteModal) == null ? void 0 : We.referenceKey] })
            ] })
          }
        )
      }
    ),
    (n == null ? void 0 : n.viewModal) && /* @__PURE__ */ r(
      qe,
      {
        isOpen: G,
        onClose: () => {
          K(!1), ae(null);
        },
        icon: (He = n == null ? void 0 : n.viewModal) == null ? void 0 : He.icon,
        title: ((Ie = n == null ? void 0 : n.viewModal) == null ? void 0 : Ie.title) || "View Details",
        size: ((Ze = n == null ? void 0 : n.viewModal) == null ? void 0 : Ze.size) || "lg",
        footerConfig: (Ve = n == null ? void 0 : n.viewModal) == null ? void 0 : Ve.footer,
        classNames: (Xe = n == null ? void 0 : n.viewModal) == null ? void 0 : Xe.modalClassNames,
        children: le ? /* @__PURE__ */ r(le, { data: re }) : /* @__PURE__ */ r(
          ha,
          {
            data: re,
            fetchRowDetails: t,
            config: (n == null ? void 0 : n.viewModal) || {}
          }
        )
      }
    )
  ] });
};
function ga({ children: a }) {
  return br(), a;
}
function wa({
  children: a
}) {
  try {
    return /* @__PURE__ */ r(ga, { children: a });
  } catch {
    return /* @__PURE__ */ r(
      hr,
      {
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right"
        },
        action: (e) => /* @__PURE__ */ r(
          "button",
          {
            onClick: () => {
              window.dispatchEvent(
                new CustomEvent("closeSnackbar", { detail: e })
              );
            },
            className: "p-1 hover:bg-white/20 rounded-full transition-colors duration-200 text-white flex items-center justify-center",
            children: /* @__PURE__ */ r(at, { className: "h-4 w-4" })
          }
        ),
        maxSnack: 3,
        autoHideDuration: 3e3,
        children: a
      }
    );
  }
}
const ma = () => {
  if (typeof document > "u" || document.getElementById("react-admin-crud-manager-styles")) return;
  const a = document.createElement("style");
  a.id = "react-admin-crud-manager-styles", a.textContent = gr, document.head.appendChild(a);
};
function _a({ config: a }) {
  return V(() => {
    ma();
  }, []), /* @__PURE__ */ r(wa, { children: /* @__PURE__ */ r(ba, { config: a }) });
}
export {
  _a as default
};
//# sourceMappingURL=index.es.js.map
