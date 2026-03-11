import { jsx as o, Fragment as G, jsxs as g } from "react/jsx-runtime";
import * as de from "react";
import Ye, { useState as S, useRef as te, useEffect as $, useCallback as Kt, useMemo as be } from "react";
import { Info as Wt, ChevronDown as St, Search as nt, Check as Yt, X as He, User as it, ArrowUpDown as Ht, Plus as Zt, Filter as Vt, ChevronLeft as Xt, ChevronRight as Jt, EllipsisVertical as qt, Music as Qt } from "lucide-react";
import { createPortal as er } from "react-dom";
import { Icon as pe } from "@iconify/react";
import { Editor as tr } from "@tinymce/tinymce-react";
import { enqueueSnackbar as we, SnackbarProvider as rr, useSnackbar as ar } from "notistack";
const or = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}:root{--background: 0 0% 100%;--foreground: 0 0% 3.9%;--card: 0 0% 100%;--card-foreground: 0 0% 3.9%;--popover: 0 0% 100%;--popover-foreground: 0 0% 3.9%;--primary: 0 0% 9%;--primary-foreground: 0 0% 98%;--secondary: 0 0% 96.1%;--secondary-foreground: 0 0% 9%;--muted: 0 0% 96.1%;--muted-foreground: 0 0% 45.1%;--accent: 0 0% 96.1%;--accent-foreground: 0 0% 9%;--destructive: 0 84.2% 60.2%;--destructive-foreground: 0 0% 98%;--border: 0 0% 89.8%;--input: 0 0% 89.8%;--ring: 0 0% 3.9%;--chart-1: 12 76% 61%;--chart-2: 173 58% 39%;--chart-3: 197 37% 24%;--chart-4: 43 74% 66%;--chart-5: 27 87% 67%;--radius: .5rem}*{border-color:hsl(var(--border))}body{background-color:hsl(var(--background));color:hsl(var(--foreground))}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{top:0;right:0;bottom:0;left:0}.inset-y-0{top:0;bottom:0}.-right-2{right:-.5rem}.-top-2{top:-.5rem}.bottom-full{bottom:100%}.left-0{left:0}.left-1{left:.25rem}.left-1\\/2{left:50%}.left-3{left:.75rem}.right-0{right:0}.right-1{right:.25rem}.right-1\\/2{right:50%}.right-3{right:.75rem}.right-4{right:1rem}.right-\\[50\\%\\]{right:50%}.top-0{top:0}.top-1{top:.25rem}.top-1\\/2{top:50%}.top-4{top:1rem}.top-\\[80\\%\\]{top:80%}.top-full{top:100%}.z-10{z-index:10}.z-20{z-index:20}.z-40{z-index:40}.z-50{z-index:50}.col-span-12{grid-column:span 12 / span 12}.mb-0{margin-bottom:0}.mb-1{margin-bottom:.25rem}.mb-3{margin-bottom:.75rem}.mb-6{margin-bottom:1.5rem}.ml-1{margin-left:.25rem}.ml-2{margin-left:.5rem}.mr-2{margin-right:.5rem}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.table-row{display:table-row}.grid{display:grid}.hidden{display:none}.h-10{height:2.5rem}.h-11{height:2.75rem}.h-12{height:3rem}.h-16{height:4rem}.h-2{height:.5rem}.h-20{height:5rem}.h-3{height:.75rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-64{height:16rem}.h-72{height:18rem}.h-8{height:2rem}.h-9{height:2.25rem}.h-\\[10px\\]{height:10px}.h-\\[150px\\]{height:150px}.h-\\[36px\\]{height:36px}.h-\\[40px\\]{height:40px}.h-full{height:100%}.max-h-40{max-height:10rem}.max-h-60{max-height:15rem}.max-h-\\[260px\\]{max-height:260px}.max-h-\\[90vh\\]{max-height:90vh}.w-10{width:2.5rem}.w-11{width:2.75rem}.w-12{width:3rem}.w-16{width:4rem}.w-2{width:.5rem}.w-20{width:5rem}.w-24{width:6rem}.w-3{width:.75rem}.w-4{width:1rem}.w-48{width:12rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-64{width:16rem}.w-8{width:2rem}.w-80{width:20rem}.w-\\[260px\\]{width:260px}.w-\\[28rem\\]{width:28rem}.w-\\[36px\\]{width:36px}.w-full{width:100%}.w-max{width:-moz-max-content;width:max-content}.min-w-0{min-width:0px}.min-w-\\[100px\\]{min-width:100px}.min-w-\\[150px\\]{min-width:150px}.min-w-\\[220px\\]{min-width:220px}.min-w-\\[40px\\]{min-width:40px}.min-w-\\[78px\\]{min-width:78px}.max-w-2xl{max-width:42rem}.max-w-4xl{max-width:56rem}.max-w-5xl{max-width:64rem}.max-w-\\[200px\\]{max-width:200px}.max-w-\\[300px\\]{max-width:300px}.max-w-full{max-width:100%}.max-w-lg{max-width:32rem}.max-w-md{max-width:28rem}.max-w-xs{max-width:20rem}.flex-1{flex:1 1 0%}.flex-shrink{flex-shrink:1}.flex-shrink-0,.shrink-0{flex-shrink:0}.border-collapse{border-collapse:collapse}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-0{--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-full{--tw-translate-x: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-95{--tw-scale-x: .95;--tw-scale-y: .95;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.items-stretch{align-items:stretch}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-6{gap:1.5rem}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.25rem * var(--tw-space-y-reverse))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.break-words{overflow-wrap:break-word}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:var(--radius)}.rounded-md{border-radius:calc(var(--radius) - 2px)}.rounded-sm{border-radius:calc(var(--radius) - 4px)}.rounded-xl{border-radius:.75rem}.border{border-width:1px}.border-2{border-width:2px}.border-4{border-width:4px}.border-8{border-width:8px}.border-b{border-bottom-width:1px}.border-l{border-left-width:1px}.border-r{border-right-width:1px}.border-t{border-top-width:1px}.border-t-2{border-top-width:2px}.border-dashed{border-style:dashed}.border-blue-300{--tw-border-opacity: 1;border-color:rgb(147 197 253 / var(--tw-border-opacity))}.border-blue-500{--tw-border-opacity: 1;border-color:rgb(59 130 246 / var(--tw-border-opacity))}.border-gray-100{--tw-border-opacity: 1;border-color:rgb(243 244 246 / var(--tw-border-opacity))}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity))}.border-green-300{--tw-border-opacity: 1;border-color:rgb(134 239 172 / var(--tw-border-opacity))}.border-green-600{--tw-border-opacity: 1;border-color:rgb(22 163 74 / var(--tw-border-opacity))}.border-primary,.border-primary-500{border-color:var(--primary-500)}.border-purple-300{--tw-border-opacity: 1;border-color:rgb(216 180 254 / var(--tw-border-opacity))}.border-red-300{--tw-border-opacity: 1;border-color:rgb(252 165 165 / var(--tw-border-opacity))}.border-red-600{--tw-border-opacity: 1;border-color:rgb(220 38 38 / var(--tw-border-opacity))}.border-teal-300{--tw-border-opacity: 1;border-color:rgb(94 234 212 / var(--tw-border-opacity))}.border-white\\/30{border-color:#ffffff4d}.border-yellow-300{--tw-border-opacity: 1;border-color:rgb(253 224 71 / var(--tw-border-opacity))}.border-t-gray-200{--tw-border-opacity: 1;border-top-color:rgb(229 231 235 / var(--tw-border-opacity))}.border-t-white{--tw-border-opacity: 1;border-top-color:rgb(255 255 255 / var(--tw-border-opacity))}.\\!bg-transparent{background-color:transparent!important}.bg-black\\/50{background-color:#00000080}.bg-black\\/70{background-color:#000000b3}.bg-blue-100{--tw-bg-opacity: 1;background-color:rgb(219 234 254 / var(--tw-bg-opacity))}.bg-blue-50{--tw-bg-opacity: 1;background-color:rgb(239 246 255 / var(--tw-bg-opacity))}.bg-blue-500\\/10{background-color:#3b82f61a}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.bg-gray-300{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity))}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.bg-gray-500{--tw-bg-opacity: 1;background-color:rgb(107 114 128 / var(--tw-bg-opacity))}.bg-gray-900{--tw-bg-opacity: 1;background-color:rgb(17 24 39 / var(--tw-bg-opacity))}.bg-green-100{--tw-bg-opacity: 1;background-color:rgb(220 252 231 / var(--tw-bg-opacity))}.bg-green-600{--tw-bg-opacity: 1;background-color:rgb(22 163 74 / var(--tw-bg-opacity))}.bg-primary{background-color:var(--primary-500)}.bg-purple-100{--tw-bg-opacity: 1;background-color:rgb(243 232 255 / var(--tw-bg-opacity))}.bg-red-100{--tw-bg-opacity: 1;background-color:rgb(254 226 226 / var(--tw-bg-opacity))}.bg-red-500{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.bg-red-600{--tw-bg-opacity: 1;background-color:rgb(220 38 38 / var(--tw-bg-opacity))}.bg-teal-100{--tw-bg-opacity: 1;background-color:rgb(204 251 241 / var(--tw-bg-opacity))}.bg-transparent{background-color:transparent}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-yellow-100{--tw-bg-opacity: 1;background-color:rgb(254 249 195 / var(--tw-bg-opacity))}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-4{padding:1rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-8{padding-left:2rem;padding-right:2rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.pl-9{padding-left:2.25rem}.pr-10{padding-right:2.5rem}.pr-2{padding-right:.5rem}.pr-3{padding-right:.75rem}.text-left{text-align:left}.text-center{text-align:center}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.font-semibold{font-weight:600}.italic{font-style:italic}.text-black{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.text-blue-600{--tw-text-opacity: 1;color:rgb(37 99 235 / var(--tw-text-opacity))}.text-blue-700{--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity))}.text-blue-800{--tw-text-opacity: 1;color:rgb(30 64 175 / var(--tw-text-opacity))}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity))}.text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.text-green-600{--tw-text-opacity: 1;color:rgb(22 163 74 / var(--tw-text-opacity))}.text-green-700{--tw-text-opacity: 1;color:rgb(21 128 61 / var(--tw-text-opacity))}.text-green-800{--tw-text-opacity: 1;color:rgb(22 101 52 / var(--tw-text-opacity))}.text-primary{color:var(--primary-500)}.text-purple-700{--tw-text-opacity: 1;color:rgb(126 34 206 / var(--tw-text-opacity))}.text-purple-800{--tw-text-opacity: 1;color:rgb(107 33 168 / var(--tw-text-opacity))}.text-red-500{--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity))}.text-red-600{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity))}.text-red-700{--tw-text-opacity: 1;color:rgb(185 28 28 / var(--tw-text-opacity))}.text-red-800{--tw-text-opacity: 1;color:rgb(153 27 27 / var(--tw-text-opacity))}.text-teal-700{--tw-text-opacity: 1;color:rgb(15 118 110 / var(--tw-text-opacity))}.text-teal-800{--tw-text-opacity: 1;color:rgb(17 94 89 / var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.text-yellow-700{--tw-text-opacity: 1;color:rgb(161 98 7 / var(--tw-text-opacity))}.text-yellow-800{--tw-text-opacity: 1;color:rgb(133 77 14 / var(--tw-text-opacity))}.underline{text-decoration-line:underline}.placeholder-gray-400::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.placeholder-gray-400::placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.placeholder-gray-500::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(107 114 128 / var(--tw-placeholder-opacity))}.placeholder-gray-500::placeholder{--tw-placeholder-opacity: 1;color:rgb(107 114 128 / var(--tw-placeholder-opacity))}.opacity-0{opacity:0}.opacity-100{opacity:1}.opacity-50{opacity:.5}.opacity-60{opacity:.6}.opacity-75{opacity:.75}.opacity-90{opacity:.9}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-2xl{--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / .25);--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-xl{--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.ring-0{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.ring-blue-100{--tw-ring-opacity: 1;--tw-ring-color: rgb(219 234 254 / var(--tw-ring-opacity))}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-sm{--tw-backdrop-blur: blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200{transition-duration:.2s}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}:root{--primary-50: #eff6ff;--primary-100: #dbeafe;--primary-200: #bfdbfe;--primary-300: #93c5fd;--primary-400: #60a5fa;--primary-500: #3b82f6;--primary-600: #2563eb;--primary-700: #1d4ed8;--primary-800: #1e40af;--primary-900: #1e3a8a}.primary-bg{background-color:var(--primary-500)}.primary-bg-light{background-color:var(--primary-100)}.primary-bg-dark{background-color:var(--primary-700)}.primary-text{color:var(--primary-600)}.primary-border{border-color:var(--primary-300)}.primary-hover:hover{background-color:var(--primary-600)}:root{--foreground-rgb: 0, 0, 0;--background-start-rgb: 214, 219, 220;--background-end-rgb: 255, 255, 255}@media (prefers-color-scheme: dark){:root{--foreground-rgb: 255, 255, 255;--background-start-rgb: 0, 0, 0;--background-end-rgb: 0, 0, 0}}html,body{height:100%}:root{--scrollbar-thumb: #d1d5db;--scrollbar-thumb-hover: #9ca3af}.dark{--scrollbar-thumb: #4b5563;--scrollbar-thumb-hover: #6b7280}*{scrollbar-width:thin;scrollbar-color:var(--scrollbar-thumb) transparent}*::-webkit-scrollbar{width:6px;height:6px}*::-webkit-scrollbar-track{background:transparent}*::-webkit-scrollbar-thumb{background-color:var(--scrollbar-thumb);border-radius:3px}*::-webkit-scrollbar-thumb:hover{background-color:var(--scrollbar-thumb-hover)}h1{font-size:1.5rem;line-height:2rem;font-weight:700;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}:is(.dark h1){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}p{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}:is(.dark p){--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.table-search-field{position:relative;width:100%}@media (min-width: 640px){.table-search-field{min-width:300px!important}}.table-search-field .search-icon{position:absolute;left:.75rem;top:50%;height:1rem;width:1rem;--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}:is(.dark .table-search-field .search-icon){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.table-search-field input{height:36px;width:100%;border-radius:calc(var(--radius) - 2px);border-width:1px;--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity));padding:.75rem 1rem .75rem 2.25rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.table-search-field input::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(107 114 128 / var(--tw-placeholder-opacity))}.table-search-field input::placeholder{--tw-placeholder-opacity: 1;color:rgb(107 114 128 / var(--tw-placeholder-opacity))}.table-search-field input:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-opacity: 1;--tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity))}.table-search-field input:disabled{opacity:.5}:is(.dark .table-search-field input){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}:is(.dark .table-search-field input)::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}:is(.dark .table-search-field input)::placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}:is(.dark .table-search-field input){--tw-ring-opacity: 1;--tw-ring-color: rgb(191 219 254 / var(--tw-ring-opacity))}.filter-button-wrapper{position:relative;width:100%}@media (min-width: 640px){.filter-button-wrapper{width:auto!important}}.filter-button-wrapper .red-dot{position:absolute;top:.25rem;right:.25rem;height:.5rem;width:.5rem;border-radius:9999px;--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.table-container{overflow:hidden;border-radius:var(--radius);border-width:1px;--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}:is(.dark .table-container){--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.table-container table{min-width:100%}.table-container table>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse));--tw-divide-opacity: 1;border-color:rgb(229 231 235 / var(--tw-divide-opacity))}:is(.dark .table-container table)>:not([hidden])~:not([hidden]){--tw-divide-opacity: 1;border-color:rgb(55 65 81 / var(--tw-divide-opacity))}.table-container thead{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}:is(.dark .table-container thead){background-color:#37415199}.table-container tbody>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse));--tw-divide-opacity: 1;border-color:rgb(229 231 235 / var(--tw-divide-opacity))}.table-container tbody{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}:is(.dark .table-container tbody)>:not([hidden])~:not([hidden]){--tw-divide-opacity: 1;border-color:rgb(55 65 81 / var(--tw-divide-opacity))}:is(.dark .table-container tbody){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.table-container .table-head-data{min-width:-moz-max-content;min-width:max-content;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:1rem 1.5rem;text-align:left;font-size:.75rem;line-height:1rem;font-weight:500;text-transform:uppercase;letter-spacing:.05em;--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}:is(.dark .table-container .table-head-data){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.table-container .no-data-message{padding-top:2.5rem;padding-bottom:2.5rem;text-align:center;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}:is(.dark .table-container .no-data-message){--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.table-container .table-row{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.table-container .table-row:hover{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}:is(.dark .table-container .table-row:hover){background-color:#1e40af1a}.table-container .table-data{min-width:-moz-max-content;min-width:max-content;padding:1rem 1.5rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}:is(.dark .table-container .table-data){--tw-text-opacity: 1;color:rgb(243 244 246 / var(--tw-text-opacity))}.table-container .pagination-wrapper{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:.75rem;border-top-width:1px;--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity));padding:.75rem 1.5rem}:is(.dark .table-container .pagination-wrapper){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity));background-color:#37415199}.table-container .pagination-wrapper span{font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}:is(.dark .table-container .pagination-wrapper span){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.table-container .pagination-wrapper .rows-number-select{border-radius:calc(var(--radius) - 2px);border-width:1px;--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:.25rem .5rem;font-size:.875rem;line-height:1.25rem}.table-container .pagination-wrapper .rows-number-select:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-opacity: 1;--tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity))}:is(.dark .table-container .pagination-wrapper .rows-number-select){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.table-container .pagination-wrapper .arrow-icons{border-radius:calc(var(--radius) - 2px);padding:.5rem;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity));transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.table-container .pagination-wrapper .arrow-icons:hover{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.table-container .pagination-wrapper .arrow-icons:disabled{opacity:.5}:is(.dark .table-container .pagination-wrapper .arrow-icons){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}:is(.dark .table-container .pagination-wrapper .arrow-icons:hover){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity))}.no-spinner::-webkit-outer-spin-button,.no-spinner::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.no-spinner{-moz-appearance:textfield}.tox.tox-tinymce .tox-edit-area:before{border:0!important;box-shadow:none!important}.hover\\:bg-blue-50:hover{--tw-bg-opacity: 1;background-color:rgb(239 246 255 / var(--tw-bg-opacity))}.hover\\:bg-gray-100:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.hover\\:bg-gray-200:hover{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.hover\\:bg-gray-300:hover{--tw-bg-opacity: 1;background-color:rgb(209 213 219 / var(--tw-bg-opacity))}.hover\\:bg-green-50:hover{--tw-bg-opacity: 1;background-color:rgb(240 253 244 / var(--tw-bg-opacity))}.hover\\:bg-green-700:hover{--tw-bg-opacity: 1;background-color:rgb(21 128 61 / var(--tw-bg-opacity))}.hover\\:bg-primary-50:hover{background-color:var(--primary-50)}.hover\\:bg-primary-600:hover{background-color:var(--primary-600)}.hover\\:bg-red-50:hover{--tw-bg-opacity: 1;background-color:rgb(254 242 242 / var(--tw-bg-opacity))}.hover\\:bg-red-600:hover{--tw-bg-opacity: 1;background-color:rgb(220 38 38 / var(--tw-bg-opacity))}.hover\\:bg-red-700:hover{--tw-bg-opacity: 1;background-color:rgb(185 28 28 / var(--tw-bg-opacity))}.hover\\:bg-white\\/20:hover{background-color:#fff3}.hover\\:text-gray-600:hover{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-1:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-blue-200:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(191 219 254 / var(--tw-ring-opacity))}.focus\\:ring-blue-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity))}.focus\\:ring-blue-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity))}.focus\\:ring-gray-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity))}.focus\\:ring-green-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(34 197 94 / var(--tw-ring-opacity))}.focus\\:ring-primary-500:focus{--tw-ring-color: var(--primary-500)}.focus\\:ring-red-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(239 68 68 / var(--tw-ring-opacity))}.focus\\:ring-offset-2:focus{--tw-ring-offset-width: 2px}.focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:ring-2:focus-visible{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus-visible\\:ring-blue-400:focus-visible{--tw-ring-opacity: 1;--tw-ring-color: rgb(96 165 250 / var(--tw-ring-opacity))}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width: 2px}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:opacity-50:disabled{opacity:.5}.group:hover .group-hover\\:opacity-100{opacity:1}.peer:checked~.peer-checked\\:translate-x-5{--tw-translate-x: 1.25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.peer:checked~.peer-checked\\:bg-primary-600{background-color:var(--primary-600)}.peer:focus~.peer-focus\\:outline-none{outline:2px solid transparent;outline-offset:2px}.peer:disabled~.peer-disabled\\:cursor-not-allowed{cursor:not-allowed}.peer:disabled~.peer-disabled\\:opacity-50{opacity:.5}:is(.dark .dark\\:border-blue-700){--tw-border-opacity: 1;border-color:rgb(29 78 216 / var(--tw-border-opacity))}:is(.dark .dark\\:border-gray-600){--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity))}:is(.dark .dark\\:border-gray-700){--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity))}:is(.dark .dark\\:border-gray-800){--tw-border-opacity: 1;border-color:rgb(31 41 55 / var(--tw-border-opacity))}:is(.dark .dark\\:border-green-700){--tw-border-opacity: 1;border-color:rgb(21 128 61 / var(--tw-border-opacity))}:is(.dark .dark\\:border-purple-700){--tw-border-opacity: 1;border-color:rgb(126 34 206 / var(--tw-border-opacity))}:is(.dark .dark\\:border-red-700){--tw-border-opacity: 1;border-color:rgb(185 28 28 / var(--tw-border-opacity))}:is(.dark .dark\\:border-teal-700){--tw-border-opacity: 1;border-color:rgb(15 118 110 / var(--tw-border-opacity))}:is(.dark .dark\\:border-yellow-700){--tw-border-opacity: 1;border-color:rgb(161 98 7 / var(--tw-border-opacity))}:is(.dark .dark\\:bg-black){--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}:is(.dark .dark\\:bg-black\\/80){background-color:#000c}:is(.dark .dark\\:bg-blue-900\\/20){background-color:#1e3a8a33}:is(.dark .dark\\:bg-blue-900\\/30){background-color:#1e3a8a4d}:is(.dark .dark\\:bg-gray-600){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity))}:is(.dark .dark\\:bg-gray-700){--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity))}:is(.dark .dark\\:bg-gray-800){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}:is(.dark .dark\\:bg-gray-900){--tw-bg-opacity: 1;background-color:rgb(17 24 39 / var(--tw-bg-opacity))}:is(.dark .dark\\:bg-gray-900\\/30){background-color:#1118274d}:is(.dark .dark\\:bg-green-900\\/30){background-color:#14532d4d}:is(.dark .dark\\:bg-purple-900\\/30){background-color:#581c874d}:is(.dark .dark\\:bg-red-900\\/30){background-color:#7f1d1d4d}:is(.dark .dark\\:bg-teal-900\\/30){background-color:#134e4a4d}:is(.dark .dark\\:bg-yellow-900\\/30){background-color:#713f124d}:is(.dark .dark\\:text-blue-300){--tw-text-opacity: 1;color:rgb(147 197 253 / var(--tw-text-opacity))}:is(.dark .dark\\:text-blue-400){--tw-text-opacity: 1;color:rgb(96 165 250 / var(--tw-text-opacity))}:is(.dark .dark\\:text-gray-100){--tw-text-opacity: 1;color:rgb(243 244 246 / var(--tw-text-opacity))}:is(.dark .dark\\:text-gray-200){--tw-text-opacity: 1;color:rgb(229 231 235 / var(--tw-text-opacity))}:is(.dark .dark\\:text-gray-300){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}:is(.dark .dark\\:text-gray-400){--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}:is(.dark .dark\\:text-green-300){--tw-text-opacity: 1;color:rgb(134 239 172 / var(--tw-text-opacity))}:is(.dark .dark\\:text-purple-300){--tw-text-opacity: 1;color:rgb(216 180 254 / var(--tw-text-opacity))}:is(.dark .dark\\:text-red-300){--tw-text-opacity: 1;color:rgb(252 165 165 / var(--tw-text-opacity))}:is(.dark .dark\\:text-red-500){--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity))}:is(.dark .dark\\:text-teal-300){--tw-text-opacity: 1;color:rgb(94 234 212 / var(--tw-text-opacity))}:is(.dark .dark\\:text-white){--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}:is(.dark .dark\\:text-yellow-300){--tw-text-opacity: 1;color:rgb(253 224 71 / var(--tw-text-opacity))}:is(.dark .dark\\:placeholder-gray-400)::-moz-placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}:is(.dark .dark\\:placeholder-gray-400)::placeholder{--tw-placeholder-opacity: 1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}:is(.dark .dark\\:hover\\:bg-gray-600:hover){--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity))}:is(.dark .dark\\:hover\\:bg-gray-700:hover){--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity))}:is(.dark .dark\\:hover\\:bg-gray-800:hover){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}:is(.dark .dark\\:hover\\:text-gray-200:hover){--tw-text-opacity: 1;color:rgb(229 231 235 / var(--tw-text-opacity))}:is(.dark .dark\\:hover\\:text-gray-300:hover){--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}:is(.dark .dark\\:focus\\:ring-blue-200:focus){--tw-ring-opacity: 1;--tw-ring-color: rgb(191 219 254 / var(--tw-ring-opacity))}:is(.dark .dark\\:focus\\:ring-blue-400:focus){--tw-ring-opacity: 1;--tw-ring-color: rgb(96 165 250 / var(--tw-ring-opacity))}:is(.dark .dark\\:focus\\:ring-gray-500:focus){--tw-ring-opacity: 1;--tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity))}:is(.dark .dark\\:focus\\:ring-gray-600:focus){--tw-ring-opacity: 1;--tw-ring-color: rgb(75 85 99 / var(--tw-ring-opacity))}:is(.dark .dark\\:focus\\:ring-offset-gray-800:focus){--tw-ring-offset-color: #1f2937}@media (min-width: 640px){.sm\\:\\!w-auto{width:auto!important}.sm\\:\\!flex-row{flex-direction:row!important}.sm\\:\\!flex-wrap{flex-wrap:wrap!important}.sm\\:\\!items-center{align-items:center!important}.sm\\:\\!px-6{padding-left:1.5rem!important;padding-right:1.5rem!important}}@media (min-width: 1024px){.lg\\:\\!w-auto{width:auto!important}.lg\\:\\!flex-row{flex-direction:row!important}.lg\\:\\!items-end{align-items:flex-end!important}.lg\\:\\!justify-between{justify-content:space-between!important}}', Mt = (a, r = "DD MMM YYYY") => {
  if (!a) return "N/A";
  const e = new Date(a);
  if (isNaN(e.getTime())) return "Invalid Date";
  const t = (l) => String(l).padStart(2, "0"), n = {
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
    (l) => String(n[l])
  );
}, nr = (a, r, e = []) => {
  if (!(r != null && r.trim())) return a;
  const t = r.toLowerCase(), n = (l) => l == null ? [] : typeof l == "object" ? Object.values(l).flatMap(n) : [String(l)];
  return a.filter((l) => {
    let i = [];
    return e.length > 0 ? e.forEach((c) => {
      l[c] !== void 0 && i.push(...n(l[c]));
    }) : i = n(l), i.some(
      (c) => c.toLowerCase().includes(t)
    );
  });
}, ie = Ye.forwardRef(
  ({
    className: a = "",
    variant: r = "contained",
    color: e = "default",
    size: t = "default",
    fullWidth: n = !1,
    children: l,
    ...i
  }, c) => {
    var w;
    const b = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", d = {
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
    }, h = ((w = u[e]) == null ? void 0 : w[r]) || u.default.contained, s = d[t] || d.default, f = `
      ${b} 
      ${h} 
      ${s} 
      ${n ? "w-full" : ""} 
      ${a}
    `.trim();
    return /* @__PURE__ */ o(
      "button",
      {
        ref: c,
        type: i.type || "button",
        className: f,
        ...i,
        children: l
      }
    );
  }
);
ie.displayName = "Button";
function re({
  label: a,
  required: r = !1,
  infoText: e = ""
}) {
  return /* @__PURE__ */ o(G, { children: /* @__PURE__ */ g("label", { className: "flex text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: [
    a,
    r && /* @__PURE__ */ o("span", { className: "ml-1", children: "*" }),
    e && /* @__PURE__ */ g("span", { className: "ml-2 relative group inline-flex items-center cursor-pointer", children: [
      /* @__PURE__ */ o(Wt, { className: "w-4 h-4 text-gray-500 dark:text-gray-400" }),
      /* @__PURE__ */ o(
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
  ] }) });
}
const ir = ({
  options: a = [],
  value: r = "",
  defaultValue: e = "",
  onChange: t,
  placeholder: n = "Select option",
  className: l = "",
  disabled: i = !1,
  search: c = !1,
  label: b = "",
  required: d = !1,
  name: u = "",
  parentClass: h = "",
  multiple: s = !1,
  dropdownMaxHeight: f = "",
  formData: w = {},
  dependencyKey: k = ""
}) => {
  var U;
  const [v, P] = S(!1), [F, z] = S(""), [D, T] = S(!0), A = te(null), m = te(null), [x, M] = S(
    []
  ), _ = r || r === !1 ? r : e, L = (R) => R == null || R === "" ? "" : String(typeof R == "boolean" ? R : R ?? "");
  $(
    () => {
      (async () => {
        if (typeof a == "function") {
          const N = await a(w);
          M(N || []);
        } else
          M(a || []);
      })();
    },
    k ? [a, w == null ? void 0 : w[k]] : [a]
  );
  const X = s ? (_ || []).map(L) : L(_), ae = x.filter(
    (R) => R.label.toLowerCase().includes(F.toLowerCase())
  ), W = (R) => {
    const N = L(R);
    return s ? X.includes(N) : N === X;
  };
  $(() => {
    const R = (N) => {
      A.current && !A.current.contains(N.target) && (P(!1), z(""));
    };
    return document.addEventListener("mousedown", R), () => document.removeEventListener("mousedown", R);
  }, []), $(() => {
    if (v && A.current) {
      const R = A.current.getBoundingClientRect(), B = window.innerHeight - R.bottom;
      T(B < 200);
    }
  }, [v]), $(() => {
    v && m.current && m.current.focus();
  }, [v]);
  const C = (R) => {
    let N = R;
    if (R === "true" ? N = !0 : R === "false" && (N = !1), s) {
      const B = X.includes(
        L(R)
      );
      let Z;
      B ? Z = (Array.isArray(r) ? r : []).filter(
        (j) => L(j) !== L(R)
      ) : Z = [...Array.isArray(r) ? r : [], N], t == null || t(Z);
    } else
      t == null || t(N), P(!1);
    z("");
  }, q = s ? x.filter((R) => W(R.value)).map((R) => R.label).join(", ") : (U = x.find((R) => W(R.value))) == null ? void 0 : U.label;
  return $(() => {
    (_ || _ === !1) && setTimeout(() => {
      t == null || t(_);
    }, 100);
  }, []), /* @__PURE__ */ g("div", { className: h || "col-span-12", children: [
    /* @__PURE__ */ o(re, { label: b, required: d }),
    /* @__PURE__ */ g("div", { className: `relative ${l}`, ref: A, children: [
      /* @__PURE__ */ o(
        "select",
        {
          name: "hidden_select_for_validation",
          value: q || "",
          required: d,
          multiple: s,
          className: "absolute opacity-0 right-1/2 top-[80%] -translate-x-1/2 -translate-y-1/2 pointer-events-none h-[10px]",
          onChange: () => {
          },
          children: /* @__PURE__ */ o("option", { hidden: !0, value: q, children: q })
        }
      ),
      /* @__PURE__ */ g(
        "button",
        {
          type: "button",
          onClick: () => !i && P(!v),
          disabled: i,
          className: `w-full h-10 px-3 border border-gray-300 dark:border-gray-600 rounded-md text-left text-sm flex items-center justify-between 
          ${q ? "dark:text-white" : "text-gray-500 dark:text-gray-400"} 
          ${i ? "opacity-50 cursor-not-allowed" : "dark:bg-gray-700"}`,
          children: [
            /* @__PURE__ */ o("span", { className: "truncate", children: q || n }),
            /* @__PURE__ */ o(
              St,
              {
                className: `w-4 h-4 transition-transform ${v ? "rotate-180" : ""}`
              }
            )
          ]
        }
      ),
      v && /* @__PURE__ */ g(
        "div",
        {
          className: `absolute z-50 w-full border rounded-md bg-white dark:bg-gray-700 shadow-lg 
            ${D ? "bottom-full mb-1" : "top-full mt-1"}`,
          children: [
            c && /* @__PURE__ */ o("div", { className: "p-2 border-b border-gray-200 dark:border-gray-600", children: /* @__PURE__ */ g("div", { className: "relative", children: [
              /* @__PURE__ */ o(nt, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }),
              /* @__PURE__ */ o(
                "input",
                {
                  ref: m,
                  type: "text",
                  value: F,
                  onChange: (R) => z(R.target.value),
                  placeholder: "Search...",
                  className: "w-full pl-9 pr-3 py-2 text-sm border rounded-md bg-white dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
                }
              )
            ] }) }),
            /* @__PURE__ */ o(
              "div",
              {
                className: "max-h-40 overflow-y-auto",
                style: {
                  maxHeight: f || ""
                },
                children: ae.length > 0 ? ae.map((R) => /* @__PURE__ */ g(
                  "button",
                  {
                    type: "button",
                    onClick: () => C(String(R.value)),
                    className: `w-full px-3 py-2 text-left text-sm flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 
                    ${W(R.value) ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300" : ""}`,
                    children: [
                      /* @__PURE__ */ o("span", { children: R.label }),
                      s && W(R.value) && /* @__PURE__ */ o(Yt, { className: "w-4 h-4" })
                    ]
                  },
                  String(R.value)
                )) : /* @__PURE__ */ o("div", { className: "px-3 py-2 text-sm text-gray-500 dark:text-gray-400", children: "No options found" })
              }
            )
          ]
        }
      )
    ] })
  ] }, u);
}, Ct = Ye.forwardRef(
  ({
    label: a,
    required: r,
    parentClass: e = "col-span-12",
    className: t = "",
    value: n = !1,
    onChange: l,
    disabled: i = !1,
    ...c
  }, b) => /* @__PURE__ */ g("div", { className: `flex justify-between ${e}`, children: [
    a && /* @__PURE__ */ o(re, { label: a, required: r }),
    /* @__PURE__ */ g("label", { className: "relative inline-flex items-center cursor-pointer", children: [
      /* @__PURE__ */ o(
        "input",
        {
          type: "checkbox",
          ref: b,
          className: "sr-only peer",
          checked: n,
          onChange: (d) => l == null ? void 0 : l(d.target.checked),
          disabled: i,
          ...c
        }
      ),
      /* @__PURE__ */ o(
        "div",
        {
          className: `
              w-11 h-6 bg-gray-200 peer-focus:outline-none
              rounded-full peer dark:bg-gray-700
              peer-checked:bg-primary-600
              peer-disabled:opacity-50 peer-disabled:cursor-not-allowed
              transition-colors duration-200
              ${t}
            `
        }
      ),
      /* @__PURE__ */ o(
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
Ct.displayName = "Switch";
const Be = [
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
function lr({
  label: a = "",
  value: r = "",
  name: e = "",
  parentClass: t = "",
  onChange: n,
  disabled: l = !1,
  required: i = !1,
  placeholder: c = "Phone number",
  search: b = !1,
  countriesList: d = !1,
  defaultCountry: u = ""
}) {
  const h = (x) => Be.find((M) => M.code == x), [s, f] = S(
    h(u) || Be[0]
  ), [w, k] = S(""), [v, P] = S(!1), [F, z] = S(""), D = te(null);
  $(() => {
    if (typeof r == "string" && r.startsWith("+")) {
      const x = Be.filter((M) => r.startsWith("+" + M.phone)).sort((M, _) => _.phone.length - M.phone.length)[0];
      if (x) {
        f(x), k(r.replace("+" + x.phone, ""));
        return;
      }
    }
    k(r || "");
  }, [r]);
  const T = (x) => {
    const M = x.target.value.replace(/\D/g, "");
    k(M), s && n && n("+" + s.phone + M);
  }, A = (x) => {
    f(x), n && n("+" + x.phone + w), P(!1), z("");
  };
  $(() => {
    const x = (M) => {
      D.current && !D.current.contains(M.target) && P(!1);
    };
    return document.addEventListener("mousedown", x), () => document.removeEventListener("mousedown", x);
  }, []);
  const m = Be.filter(
    (x) => x.label.toLowerCase().includes(F.toLowerCase()) || x.phone.includes(F)
  );
  return d ? /* @__PURE__ */ o(G, { children: /* @__PURE__ */ g("div", { className: t || "col-span-12", children: [
    /* @__PURE__ */ o(re, { label: a, required: i }),
    /* @__PURE__ */ g("div", { className: "relative ", ref: D, children: [
      /* @__PURE__ */ g(
        "div",
        {
          className: `h-[40px] flex items-center border rounded-md px-2 bg-white dark:bg-gray-700 transition-all
  ${v ? "ring-0.5 ring-blue-100 border-blue-300" : "border-gray-300 dark:border-gray-600"}
  ${l ? "opacity-60 cursor-not-allowed" : ""}`,
          children: [
            /* @__PURE__ */ g(
              "button",
              {
                type: "button",
                disabled: l,
                onClick: () => P(!v),
                className: "flex items-center gap-1 pr-2 border-r border-gray-300 dark:border-gray-700 focus:outline-none",
                children: [
                  s ? /* @__PURE__ */ o(
                    "img",
                    {
                      src: `https://flagcdn.com/w20/${s.code.toLowerCase()}.png`,
                      alt: s.code,
                      className: "w-5 h-3 object-cover"
                    }
                  ) : /* @__PURE__ */ o("span", { className: "text-gray-400 text-xs", children: "🌐" }),
                  /* @__PURE__ */ o(St, { className: "w-3 h-3 text-gray-500" })
                ]
              }
            ),
            s && /* @__PURE__ */ g("span", { className: "ml-2 text-sm text-gray-700 dark:text-gray-200 whitespace-nowrap", children: [
              "+",
              s.phone
            ] }),
            /* @__PURE__ */ o(
              "input",
              {
                type: "tel",
                value: w,
                onChange: T,
                required: i,
                disabled: l || !s,
                placeholder: s ? c : "Select a country",
                className: "flex-1 ml-2 bg-transparent outline-none text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400"
              }
            ),
            /* @__PURE__ */ o(
              "input",
              {
                type: "tel",
                required: i,
                tabIndex: -1,
                readOnly: !0,
                value: s && w ? "+" + s.phone + w : "",
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
      v && /* @__PURE__ */ g("div", { className: "absolute top-full left-0 w-full mt-1 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 shadow-lg z-50 max-h-60 overflow-y-auto", children: [
        b && /* @__PURE__ */ o("div", { className: "p-2 border-b border-gray-200 dark:border-gray-700", children: /* @__PURE__ */ g("div", { className: "relative", children: [
          /* @__PURE__ */ o(nt, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" }),
          /* @__PURE__ */ o(
            "input",
            {
              type: "text",
              value: F,
              onChange: (x) => z(x.target.value),
              placeholder: "Search country...",
              className: "w-full pl-9 pr-3 py-2 text-sm border rounded-md bg-white dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none "
            }
          )
        ] }) }),
        m.map((x) => /* @__PURE__ */ g(
          "button",
          {
            type: "button",
            onClick: () => A(x),
            className: "w-full flex items-center gap-2 px-2 py-1 text-sm hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100",
            children: [
              /* @__PURE__ */ o(
                "img",
                {
                  src: `https://flagcdn.com/w20/${x.code.toLowerCase()}.png`,
                  alt: x.code,
                  className: "w-5 h-3 object-cover"
                }
              ),
              /* @__PURE__ */ g("span", { children: [
                x.label,
                " (+",
                x.phone,
                ")"
              ] })
            ]
          },
          x.code
        ))
      ] })
    ] })
  ] }, e) }) : /* @__PURE__ */ o(G, { children: /* @__PURE__ */ g("div", { className: t || "col-span-12", children: [
    /* @__PURE__ */ o(re, { label: a, required: i }),
    /* @__PURE__ */ o(
      "input",
      {
        type: "text",
        value: r,
        onChange: (M) => {
          const _ = M.target.value.replace(/[^+\d]/g, ""), L = _.startsWith("+") ? "+" + _.replace(/[+]/g, "").slice(0) : _;
          n == null || n(L);
        },
        placeholder: c,
        disabled: l,
        required: i,
        className: `w-full h-10 px-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md \r
        bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none \r
        focus:ring-1 focus:ring-blue-300 dark:focus:ring-blue-200`,
        inputMode: "tel",
        pattern: "^\\+\\d{1,15}$"
      }
    )
  ] }, e) });
}
const Rt = Ye.forwardRef(
  ({ className: a = "", label: r, required: e, ...t }, n) => {
    const l = `
      placeholder-gray-400 dark:placeholder-gray-400
      ${a}
    `.trim();
    return /* @__PURE__ */ o(G, { children: /* @__PURE__ */ g("div", { className: t.parentClass || "col-span-12", children: [
      /* @__PURE__ */ o(re, { label: r, required: e }),
      /* @__PURE__ */ o("div", { className: "relative", children: /* @__PURE__ */ o(
        "textarea",
        {
          className: l,
          ref: n,
          required: e,
          ...t
        }
      ) })
    ] }, t.name) });
  }
);
Rt.displayName = "TextArea";
var Xe = function(a, r) {
  return Xe = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
    e.__proto__ = t;
  } || function(e, t) {
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
  }, Xe(a, r);
};
function sr(a, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  Xe(a, r);
  function e() {
    this.constructor = a;
  }
  a.prototype = r === null ? Object.create(r) : (e.prototype = r.prototype, new e());
}
var H = function() {
  return H = Object.assign || function(r) {
    for (var e, t = 1, n = arguments.length; t < n; t++) {
      e = arguments[t];
      for (var l in e) Object.prototype.hasOwnProperty.call(e, l) && (r[l] = e[l]);
    }
    return r;
  }, H.apply(this, arguments);
};
function cr(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var ct = !1, ge, Je, qe, Ge, Ke, Dt, We, Qe, et, tt, _t, rt, at, Pt, At;
function Q() {
  if (!ct) {
    ct = !0;
    var a = navigator.userAgent, r = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(a), e = /(Mac OS X)|(Windows)|(Linux)/.exec(a);
    if (rt = /\b(iPhone|iP[ao]d)/.exec(a), at = /\b(iP[ao]d)/.exec(a), tt = /Android/i.exec(a), Pt = /FBAN\/\w+;/i.exec(a), At = /Mobile/i.exec(a), _t = !!/Win64/.exec(a), r) {
      ge = r[1] ? parseFloat(r[1]) : r[5] ? parseFloat(r[5]) : NaN, ge && document && document.documentMode && (ge = document.documentMode);
      var t = /(?:Trident\/(\d+.\d+))/.exec(a);
      Dt = t ? parseFloat(t[1]) + 4 : ge, Je = r[2] ? parseFloat(r[2]) : NaN, qe = r[3] ? parseFloat(r[3]) : NaN, Ge = r[4] ? parseFloat(r[4]) : NaN, Ge ? (r = /(?:Chrome\/(\d+\.\d+))/.exec(a), Ke = r && r[1] ? parseFloat(r[1]) : NaN) : Ke = NaN;
    } else
      ge = Je = qe = Ke = Ge = NaN;
    if (e) {
      if (e[1]) {
        var n = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(a);
        We = n ? parseFloat(n[1].replace("_", ".")) : !0;
      } else
        We = !1;
      Qe = !!e[2], et = !!e[3];
    } else
      We = Qe = et = !1;
  }
}
var ot = {
  /**
   *  Check if the UA is Internet Explorer.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  ie: function() {
    return Q() || ge;
  },
  /**
   * Check if we're in Internet Explorer compatibility mode.
   *
   * @return bool true if in compatibility mode, false if
   * not compatibility mode or not ie
   */
  ieCompatibilityMode: function() {
    return Q() || Dt > ge;
  },
  /**
   * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
   * only need this because Skype can't handle 64-bit IE yet.  We need to remove
   * this when we don't need it -- tracked by #601957.
   */
  ie64: function() {
    return ot.ie() && _t;
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
    return ot.webkit();
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
}, dr = ot, pr = !!(typeof window < "u" && window.document && window.document.createElement), hr = {
  canUseDOM: pr
}, ur = hr, Et = ur, Lt;
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
function br(a, r) {
  if (!Et.canUseDOM || r && !("addEventListener" in document))
    return !1;
  var e = "on" + a, t = e in document;
  if (!t) {
    var n = document.createElement("div");
    n.setAttribute(e, "return;"), t = typeof n[e] == "function";
  }
  return !t && Lt && a === "wheel" && (t = document.implementation.hasFeature("Events.wheel", "3.0")), t;
}
var gr = br, wr = dr, fr = gr, dt = 10, pt = 40, ht = 800;
function zt(a) {
  var r = 0, e = 0, t = 0, n = 0;
  return "detail" in a && (e = a.detail), "wheelDelta" in a && (e = -a.wheelDelta / 120), "wheelDeltaY" in a && (e = -a.wheelDeltaY / 120), "wheelDeltaX" in a && (r = -a.wheelDeltaX / 120), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (r = e, e = 0), t = r * dt, n = e * dt, "deltaY" in a && (n = a.deltaY), "deltaX" in a && (t = a.deltaX), (t || n) && a.deltaMode && (a.deltaMode == 1 ? (t *= pt, n *= pt) : (t *= ht, n *= ht)), t && !r && (r = t < 1 ? -1 : 1), n && !e && (e = n < 1 ? -1 : 1), {
    spinX: r,
    spinY: e,
    pixelX: t,
    pixelY: n
  };
}
zt.getEventType = function() {
  return wr.firefox() ? "DOMMouseScroll" : fr("wheel") ? "wheel" : "mousewheel";
};
var mr = zt, yr = mr;
const vr = /* @__PURE__ */ cr(yr);
function xr(a, r, e, t, n, l) {
  l === void 0 && (l = 0);
  var i = xe(a, r, l), c = i.width, b = i.height, d = Math.min(c, e), u = Math.min(b, t);
  return d > u * n ? {
    width: u * n,
    height: u
  } : {
    width: d,
    height: d / n
  };
}
function kr(a) {
  return a.width > a.height ? a.width / a.naturalWidth : a.height / a.naturalHeight;
}
function Re(a, r, e, t, n) {
  n === void 0 && (n = 0);
  var l = xe(r.width, r.height, n), i = l.width, c = l.height;
  return {
    x: ut(a.x, i, e.width, t),
    y: ut(a.y, c, e.height, t)
  };
}
function ut(a, r, e, t) {
  var n = r * t / 2 - e / 2;
  return Ze(a, -n, n);
}
function bt(a, r) {
  return Math.sqrt(Math.pow(a.y - r.y, 2) + Math.pow(a.x - r.x, 2));
}
function gt(a, r) {
  return Math.atan2(r.y - a.y, r.x - a.x) * 180 / Math.PI;
}
function Nr(a, r, e, t, n, l, i) {
  l === void 0 && (l = 0), i === void 0 && (i = !0);
  var c = i ? Sr : Mr, b = xe(r.width, r.height, l), d = xe(r.naturalWidth, r.naturalHeight, l), u = {
    x: c(100, ((b.width - e.width / n) / 2 - a.x / n) / b.width * 100),
    y: c(100, ((b.height - e.height / n) / 2 - a.y / n) / b.height * 100),
    width: c(100, e.width / b.width * 100 / n),
    height: c(100, e.height / b.height * 100 / n)
  }, h = Math.round(c(d.width, u.width * d.width / 100)), s = Math.round(c(d.height, u.height * d.height / 100)), f = d.width >= d.height * t, w = f ? {
    width: Math.round(s * t),
    height: s
  } : {
    width: h,
    height: Math.round(h / t)
  }, k = H(H({}, w), {
    x: Math.round(c(d.width - w.width, u.x * d.width / 100)),
    y: Math.round(c(d.height - w.height, u.y * d.height / 100))
  });
  return {
    croppedAreaPercentages: u,
    croppedAreaPixels: k
  };
}
function Sr(a, r) {
  return Math.min(a, Math.max(0, r));
}
function Mr(a, r) {
  return r;
}
function Cr(a, r, e, t, n, l) {
  var i = xe(r.width, r.height, e), c = Ze(t.width / i.width * (100 / a.width), n, l), b = {
    x: c * i.width / 2 - t.width / 2 - i.width * c * (a.x / 100),
    y: c * i.height / 2 - t.height / 2 - i.height * c * (a.y / 100)
  };
  return {
    crop: b,
    zoom: c
  };
}
function Rr(a, r, e) {
  var t = kr(r);
  return e.height > e.width ? e.height / (a.height * t) : e.width / (a.width * t);
}
function Dr(a, r, e, t, n, l) {
  e === void 0 && (e = 0);
  var i = xe(r.naturalWidth, r.naturalHeight, e), c = Ze(Rr(a, r, t), n, l), b = t.height > t.width ? t.height / a.height : t.width / a.width, d = {
    x: ((i.width - a.width) / 2 - a.x) * b,
    y: ((i.height - a.height) / 2 - a.y) * b
  };
  return {
    crop: d,
    zoom: c
  };
}
function wt(a, r) {
  return {
    x: (r.x + a.x) / 2,
    y: (r.y + a.y) / 2
  };
}
function _r(a) {
  return a * Math.PI / 180;
}
function xe(a, r, e) {
  var t = _r(e);
  return {
    width: Math.abs(Math.cos(t) * a) + Math.abs(Math.sin(t) * r),
    height: Math.abs(Math.sin(t) * a) + Math.abs(Math.cos(t) * r)
  };
}
function Ze(a, r, e) {
  return Math.min(Math.max(a, r), e);
}
function Ue() {
  for (var a = [], r = 0; r < arguments.length; r++)
    a[r] = arguments[r];
  return a.filter(function(e) {
    return typeof e == "string" && e.length > 0;
  }).join(" ").trim();
}
var Pr = `.reactEasyCrop_Container {
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
`, Ar = 1, Er = 3, Lr = 1, zr = (
  /** @class */
  function(a) {
    sr(r, a);
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
          e.resizeObserver = new window.ResizeObserver(function(n) {
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
          var n = Cr(e.props.initialCroppedAreaPercentages, e.mediaSize, e.props.rotation, t, e.props.minZoom, e.props.maxZoom), l = n.crop, i = n.zoom;
          e.props.onCropChange(l), e.props.onZoomChange && e.props.onZoomChange(i);
        } else if (e.props.initialCroppedAreaPixels) {
          var c = Dr(e.props.initialCroppedAreaPixels, e.mediaSize, e.props.rotation, t, e.props.minZoom, e.props.maxZoom), l = c.crop, i = c.zoom;
          e.props.onCropChange(l), e.props.onZoomChange && e.props.onZoomChange(i);
        }
      }, e.computeSizes = function() {
        var t, n, l, i, c, b, d = e.imageRef.current || e.videoRef.current;
        if (d && e.containerRef) {
          e.containerRect = e.containerRef.getBoundingClientRect(), e.saveContainerPosition();
          var u = e.containerRect.width / e.containerRect.height, h = ((t = e.imageRef.current) === null || t === void 0 ? void 0 : t.naturalWidth) || ((n = e.videoRef.current) === null || n === void 0 ? void 0 : n.videoWidth) || 0, s = ((l = e.imageRef.current) === null || l === void 0 ? void 0 : l.naturalHeight) || ((i = e.videoRef.current) === null || i === void 0 ? void 0 : i.videoHeight) || 0, f = d.offsetWidth < h || d.offsetHeight < s, w = h / s, k = void 0;
          if (f)
            switch (e.state.mediaObjectFit) {
              default:
              case "contain":
                k = u > w ? {
                  width: e.containerRect.height * w,
                  height: e.containerRect.height
                } : {
                  width: e.containerRect.width,
                  height: e.containerRect.width / w
                };
                break;
              case "horizontal-cover":
                k = {
                  width: e.containerRect.width,
                  height: e.containerRect.width / w
                };
                break;
              case "vertical-cover":
                k = {
                  width: e.containerRect.height * w,
                  height: e.containerRect.height
                };
                break;
            }
          else
            k = {
              width: d.offsetWidth,
              height: d.offsetHeight
            };
          e.mediaSize = H(H({}, k), {
            naturalWidth: h,
            naturalHeight: s
          }), e.props.setMediaSize && e.props.setMediaSize(e.mediaSize);
          var v = e.props.cropSize ? e.props.cropSize : xr(e.mediaSize.width, e.mediaSize.height, e.containerRect.width, e.containerRect.height, e.props.aspect, e.props.rotation);
          return (((c = e.state.cropSize) === null || c === void 0 ? void 0 : c.height) !== v.height || ((b = e.state.cropSize) === null || b === void 0 ? void 0 : b.width) !== v.width) && e.props.onCropSizeChange && e.props.onCropSizeChange(v), e.setState({
            cropSize: v
          }, e.recomputeCropPosition), e.props.setCropSize && e.props.setCropSize(v), v;
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
          var n = r.getMousePoint(t), l = e.gestureZoomStart - 1 + t.scale;
          if (e.setNewZoom(l, n, {
            shouldUpdatePosition: !0
          }), e.props.onRotationChange) {
            var i = e.gestureRotationStart + t.rotation;
            e.props.onRotationChange(i);
          }
        }
      }, e.onGestureEnd = function(t) {
        e.cleanEvents();
      }, e.onDragStart = function(t) {
        var n, l, i = t.x, c = t.y;
        e.dragStartPosition = {
          x: i,
          y: c
        }, e.dragStartCrop = H({}, e.props.crop), (l = (n = e.props).onInteractionStart) === null || l === void 0 || l.call(n);
      }, e.onDrag = function(t) {
        var n = t.x, l = t.y;
        e.currentWindow && (e.rafDragTimeout && e.currentWindow.cancelAnimationFrame(e.rafDragTimeout), e.rafDragTimeout = e.currentWindow.requestAnimationFrame(function() {
          if (e.state.cropSize && !(n === void 0 || l === void 0)) {
            var i = n - e.dragStartPosition.x, c = l - e.dragStartPosition.y, b = {
              x: e.dragStartCrop.x + i,
              y: e.dragStartCrop.y + c
            }, d = e.props.restrictPosition ? Re(b, e.mediaSize, e.state.cropSize, e.props.zoom, e.props.rotation) : b;
            e.props.onCropChange(d);
          }
        }));
      }, e.onDragStopped = function() {
        var t, n;
        e.isTouching = !1, e.cleanEvents(), e.emitCropData(), (n = (t = e.props).onInteractionEnd) === null || n === void 0 || n.call(t);
      }, e.onWheel = function(t) {
        if (e.currentWindow && !(e.props.onWheelRequest && !e.props.onWheelRequest(t))) {
          t.preventDefault();
          var n = r.getMousePoint(t), l = vr(t).pixelY, i = e.props.zoom - l * e.props.zoomSpeed / 200;
          e.setNewZoom(i, n, {
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
      }, e.getPointOnContainer = function(t, n) {
        var l = t.x, i = t.y;
        if (!e.containerRect)
          throw new Error("The Cropper is not mounted");
        return {
          x: e.containerRect.width / 2 - (l - n.x),
          y: e.containerRect.height / 2 - (i - n.y)
        };
      }, e.getPointOnMedia = function(t) {
        var n = t.x, l = t.y, i = e.props, c = i.crop, b = i.zoom;
        return {
          x: (n + c.x) / b,
          y: (l + c.y) / b
        };
      }, e.setNewZoom = function(t, n, l) {
        var i = l === void 0 ? {} : l, c = i.shouldUpdatePosition, b = c === void 0 ? !0 : c;
        if (!(!e.state.cropSize || !e.props.onZoomChange)) {
          var d = Ze(t, e.props.minZoom, e.props.maxZoom);
          if (b) {
            var u = e.getPointOnContainer(n, e.containerPosition), h = e.getPointOnMedia(u), s = {
              x: h.x * d - u.x,
              y: h.y * d - u.y
            }, f = e.props.restrictPosition ? Re(s, e.mediaSize, e.state.cropSize, d, e.props.rotation) : s;
            e.props.onCropChange(f);
          }
          e.props.onZoomChange(d);
        }
      }, e.getCropData = function() {
        if (!e.state.cropSize)
          return null;
        var t = e.props.restrictPosition ? Re(e.props.crop, e.mediaSize, e.state.cropSize, e.props.zoom, e.props.rotation) : e.props.crop;
        return Nr(t, e.mediaSize, e.state.cropSize, e.getAspect(), e.props.zoom, e.props.rotation, e.props.restrictPosition);
      }, e.emitCropData = function() {
        var t = e.getCropData();
        if (t) {
          var n = t.croppedAreaPercentages, l = t.croppedAreaPixels;
          e.props.onCropComplete && e.props.onCropComplete(n, l), e.props.onCropAreaChange && e.props.onCropAreaChange(n, l);
        }
      }, e.emitCropAreaChange = function() {
        var t = e.getCropData();
        if (t) {
          var n = t.croppedAreaPercentages, l = t.croppedAreaPixels;
          e.props.onCropAreaChange && e.props.onCropAreaChange(n, l);
        }
      }, e.recomputeCropPosition = function() {
        var t, n;
        if (e.state.cropSize) {
          var l = e.props.crop;
          if (e.isInitialized && (!((t = e.previousCropSize) === null || t === void 0) && t.width) && (!((n = e.previousCropSize) === null || n === void 0) && n.height)) {
            var i = Math.abs(e.previousCropSize.width - e.state.cropSize.width) > 1e-6 || Math.abs(e.previousCropSize.height - e.state.cropSize.height) > 1e-6;
            if (i) {
              var c = e.state.cropSize.width / e.previousCropSize.width, b = e.state.cropSize.height / e.previousCropSize.height;
              l = {
                x: e.props.crop.x * c,
                y: e.props.crop.y * b
              };
            }
          }
          var d = e.props.restrictPosition ? Re(l, e.mediaSize, e.state.cropSize, e.props.zoom, e.props.rotation) : l;
          e.previousCropSize = e.state.cropSize, e.props.onCropChange(d), e.emitCropData();
        }
      }, e.onKeyDown = function(t) {
        var n, l, i = e.props, c = i.crop, b = i.onCropChange, d = i.keyboardStep, u = i.zoom, h = i.rotation, s = d;
        if (e.state.cropSize) {
          t.shiftKey && (s *= 0.2);
          var f = H({}, c);
          switch (t.key) {
            case "ArrowUp":
              f.y -= s, t.preventDefault();
              break;
            case "ArrowDown":
              f.y += s, t.preventDefault();
              break;
            case "ArrowLeft":
              f.x -= s, t.preventDefault();
              break;
            case "ArrowRight":
              f.x += s, t.preventDefault();
              break;
            default:
              return;
          }
          e.props.restrictPosition && (f = Re(f, e.mediaSize, e.state.cropSize, u, h)), t.repeat || (l = (n = e.props).onInteractionStart) === null || l === void 0 || l.call(n), b(f);
        }
      }, e.onKeyUp = function(t) {
        var n, l;
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
        e.emitCropData(), (l = (n = e.props).onInteractionEnd) === null || l === void 0 || l.call(n);
      }, e;
    }
    return r.prototype.componentDidMount = function() {
      !this.currentDoc || !this.currentWindow || (this.containerRef && (this.containerRef.ownerDocument && (this.currentDoc = this.containerRef.ownerDocument), this.currentDoc.defaultView && (this.currentWindow = this.currentDoc.defaultView), this.initResizeObserver(), typeof window.ResizeObserver > "u" && this.currentWindow.addEventListener("resize", this.computeSizes), this.props.zoomWithScroll && this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }), this.containerRef.addEventListener("gesturestart", this.onGestureStart)), this.currentDoc.addEventListener("scroll", this.onScroll), this.props.disableAutomaticStylesInjection || (this.styleRef = this.currentDoc.createElement("style"), this.styleRef.setAttribute("type", "text/css"), this.props.nonce && this.styleRef.setAttribute("nonce", this.props.nonce), this.styleRef.innerHTML = Pr, this.currentDoc.head.appendChild(this.styleRef)), this.imageRef.current && this.imageRef.current.complete && this.onMediaLoad(), this.props.setImageRef && this.props.setImageRef(this.imageRef), this.props.setVideoRef && this.props.setVideoRef(this.videoRef), this.props.setCropperRef && this.props.setCropperRef(this.cropperRef));
    }, r.prototype.componentWillUnmount = function() {
      var e, t;
      !this.currentDoc || !this.currentWindow || (typeof window.ResizeObserver > "u" && this.currentWindow.removeEventListener("resize", this.computeSizes), (e = this.resizeObserver) === null || e === void 0 || e.disconnect(), this.containerRef && this.containerRef.removeEventListener("gesturestart", this.preventZoomSafari), this.styleRef && ((t = this.styleRef.parentNode) === null || t === void 0 || t.removeChild(this.styleRef)), this.cleanEvents(), this.props.zoomWithScroll && this.clearScrollEvent());
    }, r.prototype.componentDidUpdate = function(e) {
      var t, n, l, i, c, b, d, u, h;
      e.rotation !== this.props.rotation ? (this.computeSizes(), this.recomputeCropPosition()) : e.aspect !== this.props.aspect ? this.computeSizes() : e.objectFit !== this.props.objectFit ? this.computeSizes() : e.zoom !== this.props.zoom ? this.recomputeCropPosition() : ((t = e.cropSize) === null || t === void 0 ? void 0 : t.height) !== ((n = this.props.cropSize) === null || n === void 0 ? void 0 : n.height) || ((l = e.cropSize) === null || l === void 0 ? void 0 : l.width) !== ((i = this.props.cropSize) === null || i === void 0 ? void 0 : i.width) ? this.computeSizes() : (((c = e.crop) === null || c === void 0 ? void 0 : c.x) !== ((b = this.props.crop) === null || b === void 0 ? void 0 : b.x) || ((d = e.crop) === null || d === void 0 ? void 0 : d.y) !== ((u = this.props.crop) === null || u === void 0 ? void 0 : u.y)) && this.emitCropAreaChange(), e.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef && (this.props.zoomWithScroll ? this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }) : this.clearScrollEvent()), e.video !== this.props.video && ((h = this.videoRef.current) === null || h === void 0 || h.load());
      var s = this.getObjectFit();
      s !== this.state.mediaObjectFit && this.setState({
        mediaObjectFit: s
      }, this.computeSizes);
    }, r.prototype.getAspect = function() {
      var e = this.props, t = e.cropSize, n = e.aspect;
      return t ? t.width / t.height : n;
    }, r.prototype.getObjectFit = function() {
      var e, t, n, l;
      if (this.props.objectFit === "cover") {
        var i = this.imageRef.current || this.videoRef.current;
        if (i && this.containerRef) {
          this.containerRect = this.containerRef.getBoundingClientRect();
          var c = this.containerRect.width / this.containerRect.height, b = ((e = this.imageRef.current) === null || e === void 0 ? void 0 : e.naturalWidth) || ((t = this.videoRef.current) === null || t === void 0 ? void 0 : t.videoWidth) || 0, d = ((n = this.imageRef.current) === null || n === void 0 ? void 0 : n.naturalHeight) || ((l = this.videoRef.current) === null || l === void 0 ? void 0 : l.videoHeight) || 0, u = b / d;
          return u < c ? "horizontal-cover" : "vertical-cover";
        }
        return "horizontal-cover";
      }
      return this.props.objectFit;
    }, r.prototype.onPinchStart = function(e) {
      var t = r.getTouchPoint(e.touches[0]), n = r.getTouchPoint(e.touches[1]);
      this.lastPinchDistance = bt(t, n), this.lastPinchRotation = gt(t, n), this.onDragStart(wt(t, n));
    }, r.prototype.onPinchMove = function(e) {
      var t = this;
      if (!(!this.currentDoc || !this.currentWindow)) {
        var n = r.getTouchPoint(e.touches[0]), l = r.getTouchPoint(e.touches[1]), i = wt(n, l);
        this.onDrag(i), this.rafPinchTimeout && this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout), this.rafPinchTimeout = this.currentWindow.requestAnimationFrame(function() {
          var c = bt(n, l), b = t.props.zoom * (c / t.lastPinchDistance);
          t.setNewZoom(b, i, {
            shouldUpdatePosition: !1
          }), t.lastPinchDistance = c;
          var d = gt(n, l), u = t.props.rotation + (d - t.lastPinchRotation);
          t.props.onRotationChange && t.props.onRotationChange(u), t.lastPinchRotation = d;
        });
      }
    }, r.prototype.render = function() {
      var e = this, t, n = this.props, l = n.image, i = n.video, c = n.mediaProps, b = n.cropperProps, d = n.transform, u = n.crop, h = u.x, s = u.y, f = n.rotation, w = n.zoom, k = n.cropShape, v = n.showGrid, P = n.roundCropAreaPixels, F = n.style, z = F.containerStyle, D = F.cropAreaStyle, T = F.mediaStyle, A = n.classes, m = A.containerClassName, x = A.cropAreaClassName, M = A.mediaClassName, _ = (t = this.state.mediaObjectFit) !== null && t !== void 0 ? t : this.getObjectFit();
      return de.createElement("div", {
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        ref: function(X) {
          return e.containerRef = X;
        },
        "data-testid": "container",
        style: z,
        className: Ue("reactEasyCrop_Container", m)
      }, l ? de.createElement("img", H({
        alt: "",
        className: Ue("reactEasyCrop_Image", _ === "contain" && "reactEasyCrop_Contain", _ === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", _ === "vertical-cover" && "reactEasyCrop_Cover_Vertical", M)
      }, c, {
        src: l,
        ref: this.imageRef,
        style: H(H({}, T), {
          transform: d || "translate(".concat(h, "px, ").concat(s, "px) rotate(").concat(f, "deg) scale(").concat(w, ")")
        }),
        onLoad: this.onMediaLoad
      })) : i && de.createElement("video", H({
        autoPlay: !0,
        playsInline: !0,
        loop: !0,
        muted: !0,
        className: Ue("reactEasyCrop_Video", _ === "contain" && "reactEasyCrop_Contain", _ === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", _ === "vertical-cover" && "reactEasyCrop_Cover_Vertical", M)
      }, c, {
        ref: this.videoRef,
        onLoadedMetadata: this.onMediaLoad,
        style: H(H({}, T), {
          transform: d || "translate(".concat(h, "px, ").concat(s, "px) rotate(").concat(f, "deg) scale(").concat(w, ")")
        }),
        controls: !1
      }), (Array.isArray(i) ? i : [{
        src: i
      }]).map(function(L) {
        return de.createElement("source", H({
          key: L.src
        }, L));
      })), this.state.cropSize && de.createElement("div", H({
        ref: this.cropperRef,
        style: H(H({}, D), {
          width: P ? Math.round(this.state.cropSize.width) : this.state.cropSize.width,
          height: P ? Math.round(this.state.cropSize.height) : this.state.cropSize.height
        }),
        tabIndex: 0,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        "data-testid": "cropper",
        className: Ue("reactEasyCrop_CropArea", k === "round" && "reactEasyCrop_CropAreaRound", v && "reactEasyCrop_CropAreaGrid", x)
      }, b)));
    }, r.defaultProps = {
      zoom: 1,
      rotation: 0,
      aspect: 4 / 3,
      maxZoom: Er,
      minZoom: Ar,
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
      keyboardStep: Lr
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
const ft = ie, jr = (a) => new Promise((r, e) => {
  const t = new Image();
  t.addEventListener("load", () => r(t)), t.addEventListener("error", (n) => e(n)), t.setAttribute("crossOrigin", "anonymous"), t.src = a;
}), jt = (a) => a * Math.PI / 180, Fr = (a, r, e) => {
  const t = jt(e);
  return {
    width: Math.abs(Math.cos(t) * a) + Math.abs(Math.sin(t) * r),
    height: Math.abs(Math.sin(t) * a) + Math.abs(Math.cos(t) * r)
  };
}, Tr = async (a, r, e = "image/jpeg", t = 0) => {
  const n = await jr(a), l = document.createElement("canvas"), i = l.getContext("2d");
  if (!i)
    throw new Error("Canvas context is not available");
  const c = jt(t), { width: b, height: d } = Fr(
    n.width,
    n.height,
    t
  );
  l.width = b, l.height = d, i.translate(b / 2, d / 2), i.rotate(c), i.translate(-n.width / 2, -n.height / 2), i.drawImage(n, 0, 0);
  const u = document.createElement("canvas"), h = u.getContext("2d");
  if (!h)
    throw new Error("Canvas context is not available");
  return u.width = r.width, u.height = r.height, h.drawImage(
    l,
    r.x,
    r.y,
    r.width,
    r.height,
    0,
    0,
    r.width,
    r.height
  ), new Promise((s, f) => {
    u.toBlob(
      (w) => {
        if (!w) {
          f(new Error("Image cropping failed"));
          return;
        }
        s(w);
      },
      e,
      0.95
    );
  });
}, Ir = ({
  isOpen: a,
  imageSrc: r,
  fileType: e = "image/jpeg",
  fileName: t = "cropped-image",
  aspect: n = 1 / 1,
  title: l = "Crop Image",
  onClose: i,
  onApply: c
}) => {
  const [b, d] = S({ x: 0, y: 0 }), [u, h] = S(1), [s, f] = S(null);
  $(() => {
    a && (d({ x: 0, y: 0 }), h(1), f(null));
  }, [a]);
  const w = Kt((v, P) => {
    f(P);
  }, []), k = async () => {
    var v, P;
    if (!(!r || !s))
      try {
        const F = await Tr(
          r,
          s,
          e
        ), z = ((P = (v = e == null ? void 0 : e.split("/")) == null ? void 0 : v[1]) == null ? void 0 : P.replace("jpeg", "jpg")) || "jpg", D = new File([F], `${t}.${z}`, {
          type: e
        });
        c == null || c(D);
      } catch {
        i == null || i();
      }
  };
  return a ? /* @__PURE__ */ g("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: [
    /* @__PURE__ */ o(
      "div",
      {
        className: "fixed inset-0 bg-gray-500 opacity-75",
        onClick: i
      }
    ),
    /* @__PURE__ */ g("div", { className: "relative bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col dark:bg-gray-800", children: [
      /* @__PURE__ */ g("div", { className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0", children: [
        /* @__PURE__ */ o("h3", { className: "text-lg font-medium text-gray-900 dark:text-white", children: l }),
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            onClick: i,
            className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
            "aria-label": "Close crop modal",
            children: /* @__PURE__ */ o(pe, { icon: "mdi:close", className: "w-6 h-6" })
          }
        )
      ] }),
      /* @__PURE__ */ g("div", { className: "p-4 space-y-4", children: [
        /* @__PURE__ */ o("div", { className: "relative h-72 w-full bg-gray-900 rounded-md overflow-hidden", children: r && /* @__PURE__ */ o(
          zr,
          {
            image: r,
            crop: b,
            zoom: u,
            aspect: n,
            onCropChange: d,
            onZoomChange: h,
            onCropComplete: w
          }
        ) }),
        /* @__PURE__ */ g("div", { className: "space-y-2", children: [
          /* @__PURE__ */ o("label", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Zoom" }),
          /* @__PURE__ */ o(
            "input",
            {
              type: "range",
              min: 1,
              max: 3,
              step: 0.1,
              value: u,
              onChange: (v) => h(Number(v.target.value)),
              className: "w-full"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ g("div", { className: "px-4 py-3 flex justify-end gap-3 border-t border-gray-200 dark:border-gray-700 sm:!px-6", children: [
        /* @__PURE__ */ o(
          ft,
          {
            type: "button",
            onClick: i,
            variant: "outlined",
            color: "default",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ o(
          ft,
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
}, Or = ie, ue = (a) => {
  typeof a == "string" && a.startsWith("blob:") && URL.revokeObjectURL(a);
}, Br = ({
  label: a = "",
  value: r = null,
  onChange: e,
  required: t = !1,
  accept: n = "image/*",
  aspect: l = "1",
  id: i,
  dragDrop: c = !1,
  cropImage: b = !1,
  name: d = "",
  parentClass: u = ""
}) => {
  const [h, s] = S(r), [f, w] = S(!1), [k, v] = S(!1), [P, F] = S(""), [z, D] = S("image/jpeg"), [T, A] = S("cropped-image"), m = te(null), x = te(""), M = te("");
  $(() => {
    if (r instanceof File) {
      const N = URL.createObjectURL(r);
      ue(M.current), M.current = N, s({ file: r, preview: N });
    } else r && typeof r == "object" && "preview" in r, s(r);
  }, [r]), $(() => () => {
    ue(M.current), ue(x.current);
  }, []);
  const _ = () => {
    v(!1), ue(x.current), x.current = "", F(""), m.current && (m.current.value = "");
  }, L = (N) => {
    const B = URL.createObjectURL(N);
    ue(M.current), M.current = B, s({ file: N, preview: B }), e == null || e(N), _();
  }, X = (N) => {
    if (!N || N.length === 0)
      return;
    const B = N[0];
    if (b) {
      const j = URL.createObjectURL(B);
      ue(x.current), x.current = j, F(j), D(B.type || "image/jpeg"), A(
        (B.name || "cropped-image").replace(/\.[^/.]+$/, "")
      ), v(!0);
      return;
    }
    const Z = URL.createObjectURL(B);
    ue(M.current), M.current = Z, s({ file: B, preview: Z }), e == null || e(B);
  }, ae = (N) => {
    N && N.stopPropagation(), ue(M.current), M.current = "", s(null), e == null || e(null), m.current && (m.current.value = "");
  }, W = (N) => {
    c && (N.preventDefault(), w(!0));
  }, C = (N) => {
    c && (N.preventDefault(), w(!1));
  }, q = (N) => {
    var B, Z, j, oe;
    c && (N.preventDefault(), w(!1), (oe = (j = (Z = (B = N.dataTransfer) == null ? void 0 : B.files) == null ? void 0 : Z[0]) == null ? void 0 : j.type) != null && oe.includes("image/") && X(N.dataTransfer.files));
  }, U = () => {
    var N;
    (N = m.current) == null || N.click();
  }, R = h && typeof h == "object" && "preview" in h ? h.preview : typeof h == "string" ? h : "";
  return /* @__PURE__ */ g(G, { children: [
    /* @__PURE__ */ g("div", { className: u || "col-span-12", children: [
      /* @__PURE__ */ o(re, { label: a, required: t }),
      /* @__PURE__ */ g(
        "div",
        {
          className: `relative rounded-md p-2 transition-all ${f ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"}`,
          onDragOver: W,
          onDragLeave: C,
          onDrop: q,
          children: [
            /* @__PURE__ */ o(
              "input",
              {
                ref: m,
                id: i,
                type: "file",
                accept: n,
                onChange: (N) => X(N.target.files),
                required: t && !h,
                className: "absolute opacity-0 right-[50%] top-[80%] -translate-y-1/2 pointer-events-none h-[10px]"
              }
            ),
            /* @__PURE__ */ g(
              "div",
              {
                className: `flex items-center space-x-4 transition-all ${f ? "opacity-50" : ""}`,
                children: [
                  h ? /* @__PURE__ */ g("div", { className: "relative group", children: [
                    /* @__PURE__ */ o(
                      "img",
                      {
                        src: R,
                        alt: "preview",
                        className: "object-cover w-20 h-20 rounded-full shadow-md"
                      }
                    ),
                    !t && /* @__PURE__ */ o(
                      "button",
                      {
                        type: "button",
                        onClick: ae,
                        className: "absolute top-0 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
                        "aria-label": "Remove image",
                        children: /* @__PURE__ */ o(pe, { icon: "mdi:close", className: "w-3 h-3" })
                      }
                    )
                  ] }) : /* @__PURE__ */ o("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ o(
                    pe,
                    {
                      icon: "ri:image-add-fill",
                      className: "text-gray-400 w-10 h-10"
                    }
                  ) }),
                  /* @__PURE__ */ g("div", { className: "flex flex-col items-center space-y-1", children: [
                    /* @__PURE__ */ o(
                      Or,
                      {
                        type: "button",
                        onClick: U,
                        variant: "outlined",
                        color: "default",
                        children: h ? "Change Image" : "Select Image"
                      }
                    ),
                    c && !h && /* @__PURE__ */ o("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop" })
                  ] })
                ]
              }
            ),
            c && f && /* @__PURE__ */ o("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-md", children: /* @__PURE__ */ o("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg", children: "Drop image here" }) })
          ]
        }
      )
    ] }, d),
    /* @__PURE__ */ o(
      Ir,
      {
        isOpen: k,
        imageSrc: P,
        fileType: z,
        fileName: T,
        onClose: _,
        onApply: L,
        aspect: Number(l)
      }
    )
  ] });
}, Ft = Ye.forwardRef(
  ({
    label: a,
    value: r,
    required: e,
    parentClass: t = "",
    className: n = "",
    type: l = "text",
    onKeyDown: i,
    negativeNumberAllow: c = !0,
    defaultValue: b = "",
    field: d = {},
    onChange: u,
    mask: h = "",
    maskApplyOnValue: s = !0,
    ...f
  }, w) => {
    const [k, v] = S(!1), P = (D) => {
      if (l === "number") {
        if (["e", "E", "+"].includes(D.key)) {
          D.preventDefault();
          return;
        }
        if (c == !1 && D.key === "-") {
          D.preventDefault();
          return;
        }
        if (["ArrowUp", "ArrowDown"].includes(D.key)) {
          D.preventDefault();
          return;
        }
      }
      i == null || i(D);
    }, F = `
      h-10 placeholder-gray-400 dark:placeholder-gray-400
      ${l === "password" ? "pr-10" : ""}
      ${l === "number" ? "no-spinner" : ""}
      ${n}
    `.trim();
    function z(D, T) {
      if (!D) return D;
      const A = String(D).replace(/[^a-zA-Z0-9]/g, "");
      let m = "", x = 0;
      for (let M = 0; M < (T == null ? void 0 : T.length) && x < A.length; M++) {
        const _ = T[M], L = A[x];
        _ === "9" ? /\d/.test(L) ? (m += L, x++) : (x++, M--) : _ === "A" ? /[a-zA-Z]/.test(L) ? (m += L, x++) : (x++, M--) : _ === "X" ? /[a-zA-Z0-9]/.test(L) ? (m += L, x++) : (x++, M--) : _ === "*" ? (m += L, x++) : (m += _, L === _ && x++);
      }
      return m;
    }
    return $(() => {
      if (b) {
        const D = r || b;
        setTimeout(() => {
          u == null || u(D);
        }, 100);
      }
    }, [b]), /* @__PURE__ */ o(G, { children: /* @__PURE__ */ g("div", { className: t || "col-span-12", children: [
      /* @__PURE__ */ o(
        re,
        {
          label: a,
          required: e,
          infoText: d == null ? void 0 : d.infoText
        }
      ),
      /* @__PURE__ */ g("div", { className: "relative", children: [
        /* @__PURE__ */ o(
          "input",
          {
            type: l === "password" && k ? "text" : l,
            ref: w,
            required: e,
            onKeyDown: P,
            className: F,
            value: h ? z(r, h) : r,
            onChange: (D) => {
              u(h && s ? z(D.target.value, h) : D.target.value);
            },
            ...f
          }
        ),
        l === "password" && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            tabIndex: -1,
            onClick: () => v((D) => !D),
            className: "absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200",
            children: /* @__PURE__ */ o(
              pe,
              {
                icon: k ? "mdi:eye-outline" : "mdi:eye-off-outline",
                className: "w-5 h-5"
              }
            )
          }
        )
      ] })
    ] }, f.name) });
  }
);
Ft.displayName = "Input";
const Ur = ({
  editorKey: a = "",
  value: r = "",
  onChange: e,
  label: t = "",
  required: n = !1,
  placeholder: l = "",
  parentClass: i = "col-span-12",
  height: c = 400,
  inline: b = !1,
  disabled: d = !1,
  plugins: u,
  toolbar: h,
  menubar: s = !1,
  fontFamily: f = "Inter, sans-serif",
  initConfig: w = {},
  imageUploadHandler: k
}) => /* @__PURE__ */ g("div", { className: i, children: [
  t && /* @__PURE__ */ o(re, { label: t, required: n }),
  /* @__PURE__ */ o(
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
        images_upload_handler: (z) => new Promise((D, T) => {
          if (!k) {
            D(`data:${z.blob().type};base64,${z.base64()}`);
            return;
          }
          k(z).then((A) => {
            A ? D(A) : T("Upload failed: No URL returned");
          }).catch((A) => {
            T(
              typeof A == "string" ? A : (A == null ? void 0 : A.message) || "Image upload failed"
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
        toolbar: h ?? "undo redo | blocks | bold italic underline forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media table | removeformat | code fullscreen preview",
        placeholder: l,
        content_style: `
            body {
                font-family: ${f};
            }
            `,
        ...w
      },
      onEditorChange: (z) => {
        e == null || e(z);
      }
    }
  )
] }), $r = ({
  name: a = "",
  label: r = "",
  options: e = [],
  value: t = null,
  onChange: n,
  disabled: l = !1,
  required: i = !1,
  parentClass: c = "col-span-12",
  className: b = "",
  multiSelect: d = !1
}) => {
  const u = Array.isArray(e) && e.length > 0, h = (w) => u ? d ? Array.isArray(t) && t.includes(w) : t === w : !!t, s = (w) => {
    n == null || n(w.target.checked, a);
  }, f = (w, k) => {
    if (n)
      if (!d)
        n(k ? w : "", a);
      else {
        const v = Array.isArray(t) ? [...t] : [];
        if (k)
          v.includes(w) || v.push(w);
        else {
          const P = v.indexOf(w);
          P > -1 && v.splice(P, 1);
        }
        n(v, a);
      }
  };
  return u ? /* @__PURE__ */ o(G, { children: /* @__PURE__ */ g("div", { className: `${c}`, children: [
    /* @__PURE__ */ o(re, { label: r, required: i }),
    /* @__PURE__ */ o("div", { className: "flex flex-col space-y-2", children: e.map((w, k) => /* @__PURE__ */ g("div", { className: "flex items-center", children: [
      /* @__PURE__ */ o(
        "input",
        {
          type: "checkbox",
          name: a,
          value: w.value,
          checked: h(w.value),
          disabled: l || !!w.disabled,
          required: i && k === 0,
          onChange: (v) => f(w.value, v.target.checked),
          className: `h-4 w-4 cursor-pointer text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${b}`
        },
        a
      ),
      w.label && /* @__PURE__ */ o(
        "label",
        {
          htmlFor: a,
          className: "ml-2 text-sm text-gray-700 dark:text-gray-200 select-none",
          children: w.label
        }
      )
    ] }, w.value || w.label)) })
  ] }) }) : /* @__PURE__ */ g("div", { className: `flex items-center ${c}`, children: [
    /* @__PURE__ */ o(
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
    r && /* @__PURE__ */ o(
      "label",
      {
        htmlFor: a,
        className: "ml-2 text-sm text-gray-700 dark:text-gray-200 select-none",
        children: r
      }
    )
  ] });
}, mt = ie, Gr = ({
  label: a = "",
  value: r = null,
  onChange: e,
  required: t = !1,
  accept: n = "audio/*",
  id: l,
  dragDrop: i = !1,
  name: c = "",
  parentClass: b = "",
  maxSize: d = 0
}) => {
  const [u, h] = S(
    null
  ), [s, f] = S(!1), w = te(null), k = d * 1024 * 1024;
  $(() => {
    if (!r) {
      v(), h(null);
      return;
    }
    if (r instanceof File) {
      const m = URL.createObjectURL(r);
      return h({ file: r, preview: m }), () => {
        URL.revokeObjectURL(m);
      };
    } else typeof r == "string" ? h({ preview: r }) : r != null && r.preview && h(r);
  }, [r]);
  const v = () => {
    u != null && u.preview && u.preview.startsWith("blob:") && URL.revokeObjectURL(u.preview);
  }, P = (m) => {
    if (!m || m.length === 0)
      return;
    const x = m[0];
    if (k && x.size > k) {
      we(
        `Audio is too large. Maximum allowed size is ${d} MB`,
        { variant: "warning" }
      );
      return;
    }
    const M = URL.createObjectURL(x);
    v(), h({ file: x, preview: M }), e == null || e(x);
  }, F = (m) => {
    m && m.stopPropagation(), v(), h(null), e == null || e(null), w.current && (w.current.value = "");
  }, z = (m) => {
    i && (m.preventDefault(), f(!0));
  }, D = (m) => {
    i && (m.preventDefault(), f(!1));
  }, T = (m) => {
    var x, M, _, L;
    i && (m.preventDefault(), f(!1), (L = (_ = (M = (x = m.dataTransfer) == null ? void 0 : x.files) == null ? void 0 : M[0]) == null ? void 0 : _.type) != null && L.includes("audio/") && P(m.dataTransfer.files));
  }, A = () => {
    var m;
    (m = w.current) == null || m.click();
  };
  return /* @__PURE__ */ g("div", { className: b || "col-span-12", children: [
    /* @__PURE__ */ o(re, { label: a, required: t }),
    /* @__PURE__ */ g(
      "div",
      {
        className: `relative rounded-lg p-2 transition-all ${s ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"}`,
        onDragOver: z,
        onDragLeave: D,
        onDrop: T,
        children: [
          /* @__PURE__ */ o(
            "input",
            {
              ref: w,
              id: l,
              type: "file",
              accept: n,
              onChange: (m) => P(m.target.files),
              required: t && !u,
              className: "absolute opacity-0 right-[50%] top-[80%] -translate-y-1/2 pointer-events-none h-[10px]"
            }
          ),
          /* @__PURE__ */ o(
            "div",
            {
              className: `flex items-center space-x-4 transition-all ${s ? "opacity-50" : ""}`,
              children: u ? /* @__PURE__ */ g("div", { className: "flex items-center space-x-4", children: [
                /* @__PURE__ */ g("div", { className: "relative w-full", children: [
                  !t && /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      onClick: F,
                      className: "absolute top-0 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800",
                      "aria-label": "Remove audio",
                      children: /* @__PURE__ */ o(pe, { icon: "mdi:close", className: "w-3 h-3" })
                    }
                  ),
                  /* @__PURE__ */ o(
                    "audio",
                    {
                      src: u.preview,
                      controls: !0,
                      controlsList: "nodownload"
                    },
                    u.preview
                  )
                ] }),
                /* @__PURE__ */ o(mt, { type: "button", onClick: A, children: /* @__PURE__ */ o("span", { children: "Change Audio File" }) })
              ] }) : /* @__PURE__ */ g("div", { className: "flex items-center justify-center space-x-4", children: [
                /* @__PURE__ */ o("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ o(pe, { icon: "mdi:music", className: "text-gray-400 w-10 h-10" }) }),
                /* @__PURE__ */ o(
                  mt,
                  {
                    type: "button",
                    onClick: A,
                    variant: "outlined",
                    children: /* @__PURE__ */ o("span", { children: "Choose Audio File" })
                  }
                ),
                i && /* @__PURE__ */ o("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop your audio file here" })
              ] })
            }
          ),
          i && s && !u && /* @__PURE__ */ o("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-lg", children: /* @__PURE__ */ o("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg", children: "Drop audio here" }) })
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
  const n = () => t(!1);
  return $(() => {
    const l = (i) => {
      i.key === "Escape" && n();
    };
    return e && (document.body.style.overflow = "hidden", document.addEventListener("keydown", l)), () => {
      document.body.style.overflow = "", document.removeEventListener("keydown", l);
    };
  }, [e]), /* @__PURE__ */ o(G, { children: /* @__PURE__ */ g(
    "div",
    {
      className: `fixed inset-0 z-50 flex items-center justify-center bg-black/70 dark:bg-black/80 \r
                   backdrop-blur-sm animate-in fade-in duration-200`,
      onClick: n,
      children: [
        /* @__PURE__ */ o(
          "button",
          {
            onClick: n,
            className: `absolute top-4 right-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200\r
                     hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-2 shadow-lg transition`,
            children: /* @__PURE__ */ o(He, { size: 20 })
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            className: "max-w-5xl w-full px-4 transform transition-all duration-200 scale-95 animate-in zoom-in-95",
            onClick: (l) => l.stopPropagation(),
            children: /* @__PURE__ */ o(
              "img",
              {
                src: a,
                alt: r,
                className: "w-full max-h-[90vh] object-contain rounded-xl"
              }
            )
          }
        )
      ]
    }
  ) });
}, Tt = ({ col: a, data: r }) => {
  const e = r[a.titleKey], t = r[a.subtitleKey], n = r[a.imageKey], l = a.fallback_icon, [i, c] = S(null), [b, d] = S(!1), u = (h) => {
    let s = h;
    h && h.src instanceof File && (s = { ...h, src: URL.createObjectURL(h.src) }), c(s), d(!0);
  };
  return /* @__PURE__ */ g(G, { children: [
    b && i && /* @__PURE__ */ o(
      lt,
      {
        src: i.src,
        alt: i.alt,
        isOpen: b,
        setIsOpen: d
      }
    ),
    /* @__PURE__ */ g(
      "div",
      {
        className: `col-span-12 flex items-center space-x-4 p-4 rounded-xl 
      bg-gray-100 dark:bg-gray-900 
      ${a.blockClass}`,
        children: [
          n ? /* @__PURE__ */ o(
            "img",
            {
              src: n instanceof File ? URL.createObjectURL(n) : n,
              alt: e,
              onClick: () => u({ src: n, alt: e }),
              className: "w-16 h-16 cursor-pointer rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
            }
          ) : l ? l instanceof Function ? l(r) : l : /* @__PURE__ */ o("div", { className: "w-16 h-16 flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600", children: /* @__PURE__ */ o(it, { className: "w-8 h-8 text-gray-400" }) }),
          /* @__PURE__ */ g("div", { children: [
            /* @__PURE__ */ o("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: e }),
            /* @__PURE__ */ o("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: t })
          ] })
        ]
      }
    )
  ] });
}, It = ({ col: a, data: r }) => {
  const e = r[a.titleKey], t = r[a.subtitleKey], n = r[a.imageKey], l = a.label, i = a == null ? void 0 : a.icon, c = a.fallback_icon, [b, d] = S(null), [u, h] = S(!1), s = (f) => {
    let w = f;
    f && f.src instanceof File && (w = { ...f, src: URL.createObjectURL(f.src) }), d(w), h(!0);
  };
  return /* @__PURE__ */ g(G, { children: [
    u && b && /* @__PURE__ */ o(
      lt,
      {
        src: b.src,
        alt: b.alt,
        isOpen: u,
        setIsOpen: h
      }
    ),
    /* @__PURE__ */ g(
      "div",
      {
        className: `col-span-12 flex items-center space-x-4 p-4 rounded-xl 
      bg-gray-100 dark:bg-gray-900 
      ${a.blockClass}`,
        children: [
          i && /* @__PURE__ */ o("div", { className: "flex-shrink-0", children: i }),
          /* @__PURE__ */ g("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ o("p", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: l }),
            /* @__PURE__ */ g("div", { className: "flex items-center", children: [
              n ? /* @__PURE__ */ o(
                "img",
                {
                  src: n instanceof File ? URL.createObjectURL(n) : n,
                  alt: e,
                  onClick: () => s({ src: n, alt: e }),
                  className: "w-8 h-8 cursor-pointer rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
                }
              ) : c ? c instanceof Function ? c(r) : c : /* @__PURE__ */ o("div", { className: "w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600", children: /* @__PURE__ */ o(it, { className: "w-6 h-6 text-gray-400" }) }),
              /* @__PURE__ */ g("div", { className: "ml-2", children: [
                /* @__PURE__ */ o("p", { className: "mb-0 text-sm text-gray-900 dark:text-white break-words", children: e }),
                /* @__PURE__ */ o("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: t })
              ] })
            ] })
          ] })
        ]
      }
    )
  ] });
}, yt = {
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
}, vt = {
  contained: "bg",
  outline: "border !bg-transparent",
  soft: "bg opacity-90"
}, Ot = ({
  label: a,
  variant: r = "contained",
  color: e = "green",
  className: t = ""
}) => {
  const n = yt[e] || yt.green, l = vt[r] || vt.contained, i = r === "outline" ? n.border : n.bg;
  return /* @__PURE__ */ o(
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
  let n = r[a.key];
  const l = a.type, i = a.variant || "outline";
  let c = a.defaultColor;
  if (l === "chip" && ((b = a.chipOptions) == null ? void 0 : b.length) > 0) {
    const d = a == null ? void 0 : a.chipOptions.find((u) => u.value == n);
    d && (n = d.label, c = d.color);
  }
  return /* @__PURE__ */ g(
    "div",
    {
      className: `col-span-12 flex items-center space-x-4 p-4 rounded-xl 
                  bg-gray-100 dark:bg-gray-900 ${a.blockClass || ""}`,
      children: [
        e && /* @__PURE__ */ o("div", { className: "flex-shrink-0", children: e }),
        /* @__PURE__ */ g("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ o("p", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: t }),
          l === "chip" ? /* @__PURE__ */ o(
            Ot,
            {
              label: n,
              variant: i,
              color: c,
              className: "mt-1"
            }
          ) : l === "tinyEditor" ? /* @__PURE__ */ o(
            "p",
            {
              className: "mt-1 text-sm text-gray-900 dark:text-white break-words",
              dangerouslySetInnerHTML: {
                __html: n
              }
            }
          ) : l === "audio" ? n ? /* @__PURE__ */ o(
            "audio",
            {
              controls: !0,
              src: n instanceof File ? URL.createObjectURL(n) : n,
              onClick: (d) => d.stopPropagation(),
              className: "shadow-md rounded-full mt-1"
            },
            n instanceof File ? URL.createObjectURL(n) : n
          ) : /* @__PURE__ */ o("p", { className: "mt-1 text-sm text-gray-400", children: "N/A" }) : /* @__PURE__ */ o("p", { className: "mt-1 text-sm text-gray-900 dark:text-white break-words", children: l == "date" ? /* @__PURE__ */ o("span", { children: Mt(n, a.format || "DD MMM YYYY") }) : n || "N/A" })
        ] })
      ]
    }
  );
}, Kr = ({
  value: a = !0,
  onChange: r,
  text: e,
  options: t = [],
  label: n,
  required: l,
  name: i = "",
  disabled: c = !1,
  parentClass: b = ""
}) => {
  const d = t.length > 0 ? t : [
    { label: "Active", value: !0 },
    { label: "Inactive", value: !1 }
  ];
  return /* @__PURE__ */ o(G, { children: /* @__PURE__ */ g("div", { className: b || "col-span-12", children: [
    /* @__PURE__ */ o(re, { label: n, required: l }),
    /* @__PURE__ */ g("div", { className: "flex items-center justify-between h-10 gap-4 bg-gray-100 dark:bg-gray-700 px-3 rounded-md border border-gray-100 dark:border-gray-600", children: [
      e && /* @__PURE__ */ o("p", { className: "text-xs text-gray-600 dark:text-gray-400 flex-shrink overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px]", children: e }),
      /* @__PURE__ */ o("div", { className: "flex items-center gap-6", children: d.map((u, h) => /* @__PURE__ */ g(
        "label",
        {
          className: "flex items-center gap-2 cursor-pointer select-none",
          children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "radio",
                name: "switch-field",
                required: l && h === 0,
                value: String(u.value),
                disabled: c,
                checked: a === u.value,
                onChange: () => r == null ? void 0 : r(u.value),
                className: "w-4 h-4  border-gray-300 cursor-pointer"
              }
            ),
            /* @__PURE__ */ o("span", { className: "text-sm text-gray-700 dark:text-white", children: u.label })
          ]
        },
        h
      )) })
    ] })
  ] }, i) });
}, xt = ie, Wr = ({
  label: a = "",
  value: r = null,
  onChange: e,
  required: t = !1,
  accept: n = "video/*",
  id: l,
  dragDrop: i = !1,
  name: c = "",
  parentClass: b = "",
  maxSize: d = 0
}) => {
  const [u, h] = S(
    null
  ), [s, f] = S(!1), w = te(null), k = d * 1024 * 1024;
  $(() => {
    if (!r) {
      v(), h(null);
      return;
    }
    if (r instanceof File) {
      const m = URL.createObjectURL(r);
      return h({ file: r, preview: m }), () => {
        URL.revokeObjectURL(m);
      };
    } else typeof r == "string" ? h({ preview: r }) : r != null && r.preview && h(r);
  }, [r]);
  const v = () => {
    u != null && u.preview && u.preview.startsWith("blob:") && URL.revokeObjectURL(u.preview);
  }, P = (m) => {
    if (!m || m.length === 0) return;
    const x = m[0];
    if (k && x.size > k) {
      we(
        `File is too large. Maximum allowed size is ${d} MB`,
        {
          variant: "warning"
        }
      );
      return;
    }
    const M = URL.createObjectURL(x);
    v(), h({ file: x, preview: M }), e == null || e(x);
  }, F = (m) => {
    m && m.stopPropagation(), v(), h(null), e == null || e(null), w.current && (w.current.value = "");
  }, z = (m) => {
    i && (m.preventDefault(), f(!0));
  }, D = (m) => {
    i && (m.preventDefault(), f(!1));
  }, T = (m) => {
    var x, M, _, L;
    i && (m.preventDefault(), f(!1), (L = (_ = (M = (x = m.dataTransfer) == null ? void 0 : x.files) == null ? void 0 : M[0]) == null ? void 0 : _.type) != null && L.includes("video/") && P(m.dataTransfer.files));
  }, A = () => {
    var m;
    (m = w.current) == null || m.click();
  };
  return /* @__PURE__ */ g("div", { className: b || "col-span-12", children: [
    /* @__PURE__ */ o(re, { label: a, required: t }),
    /* @__PURE__ */ g(
      "div",
      {
        className: `relative rounded-lg p-2 transition-all ${s ? "border-2 border-dashed border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"}`,
        onDragOver: z,
        onDragLeave: D,
        onDrop: T,
        children: [
          /* @__PURE__ */ o(
            "input",
            {
              ref: w,
              id: l,
              type: "file",
              accept: n,
              onChange: (m) => P(m.target.files),
              required: t && !u,
              className: "absolute opacity-0 pointer-events-none h-[10px]"
            }
          ),
          /* @__PURE__ */ o(
            "div",
            {
              className: `flex items-center space-x-4 transition-all ${s ? "opacity-50" : ""}`,
              children: u ? /* @__PURE__ */ g("div", { className: "flex items-center space-x-4", children: [
                /* @__PURE__ */ g("div", { className: "relative", children: [
                  !t && /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      onClick: F,
                      className: "absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow hover:bg-red-600 z-10",
                      children: /* @__PURE__ */ o(pe, { icon: "mdi:close", className: "w-3 h-3" })
                    }
                  ),
                  /* @__PURE__ */ o(
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
                /* @__PURE__ */ o(xt, { type: "button", onClick: A, children: "Change Video File" })
              ] }) : /* @__PURE__ */ g("div", { className: "flex items-center justify-center space-x-4", children: [
                /* @__PURE__ */ o("div", { className: "rounded-full bg-gray-100 dark:bg-gray-700 h-20 w-20 flex items-center justify-center", children: /* @__PURE__ */ o(pe, { icon: "mdi:video", className: "text-gray-400 w-10 h-10" }) }),
                /* @__PURE__ */ o(
                  xt,
                  {
                    type: "button",
                    onClick: A,
                    variant: "outlined",
                    children: "Choose Video File"
                  }
                ),
                i && /* @__PURE__ */ o("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "or drag and drop your video here" })
              ] })
            }
          ),
          i && s && !u && /* @__PURE__ */ o("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none bg-blue-500/10 rounded-lg", children: /* @__PURE__ */ o("span", { className: "text-blue-600 dark:text-blue-400 font-semibold text-lg bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg", children: "Drop video here" }) })
        ]
      }
    )
  ] }, c);
}, Ut = ({ field: a, formData: r, handleChange: e }) => {
  const {
    key: t,
    label: n,
    type: l,
    options: i,
    placeholder: c,
    rows: b,
    inputClass: d,
    search: u,
    accept: h,
    text: s,
    required: f = !1,
    minLength: w,
    dragDrop: k,
    parentClass: v,
    countriesList: P,
    defaultCountry: F,
    multiple: z,
    dropdownMaxHeight: D,
    editorKey: T,
    fontFamily: A,
    disabled: m,
    negativeNumberAllow: x,
    defaultValue: M,
    renderCondition: _,
    pattern: L,
    renderType: X,
    cropImage: ae,
    aspectRatio: W,
    dependencyKey: C,
    mask: q,
    maskApplyOnValue: U,
    maxSize: R
  } = a;
  let N = r == null ? void 0 : r[t];
  N == null && (N = "");
  const B = c || (l === "select" ? `Select ${n}` : `Enter ${n}`), Z = "w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm focus:outline-none focus:ring-1 focus:ring-blue-200 bg-white text-black dark:bg-gray-700 dark:text-white";
  if (_ && typeof _ == "function" && !_(r))
    return null;
  if (X && X == "details")
    switch (l) {
      case "group":
        return /* @__PURE__ */ o(Tt, { col: a, data: r });
      case "cardGroup":
        return /* @__PURE__ */ o(It, { col: a, data: r });
      default:
        return /* @__PURE__ */ o(Bt, { col: a, data: r });
    }
  switch (l) {
    case "select":
      return /* @__PURE__ */ o(
        ir,
        {
          options: i || [],
          value: N,
          formData: r,
          dependencyKey: C,
          onChange: (j) => e(t, j),
          placeholder: B,
          className: d || "",
          search: u,
          required: f,
          defaultValue: M,
          label: n || "",
          name: t,
          disabled: m,
          parentClass: v || "",
          multiple: z,
          dropdownMaxHeight: D
        }
      );
    case "checkbox":
      return /* @__PURE__ */ o(
        $r,
        {
          name: t,
          label: n || "",
          options: i || [],
          value: N,
          onChange: (j) => e(t, j),
          required: f,
          parentClass: v || "",
          className: d || "",
          multiSelect: z,
          disabled: m
        }
      );
    case "radio":
      return /* @__PURE__ */ o(
        Kr,
        {
          value: N,
          onChange: (j) => e(t, j),
          text: s,
          options: i || [],
          label: n || "",
          required: f,
          name: t,
          disabled: m,
          parentClass: v || ""
        }
      );
    case "switch":
      return /* @__PURE__ */ o(
        Ct,
        {
          value: !!N,
          onChange: (j) => e(t, j),
          label: n || "",
          required: f,
          name: t,
          disabled: m,
          className: "",
          parentClass: v || ""
        }
      );
    case "phone":
      return /* @__PURE__ */ o(
        lr,
        {
          value: N,
          onChange: (j) => e(t, j),
          countriesList: P,
          defaultCountry: F,
          required: f,
          placeholder: B,
          search: u,
          label: n || "",
          name: t,
          disabled: m,
          parentClass: v || ""
        }
      );
    case "textarea":
      return /* @__PURE__ */ o(
        Rt,
        {
          value: N,
          onChange: (j) => e(t, j.target.value),
          placeholder: B,
          rows: b || 3,
          className: `${Z} ${d || ""}`,
          required: f,
          name: t,
          label: n || "",
          disabled: m,
          parentClass: v || ""
        }
      );
    case "image":
      return /* @__PURE__ */ o(
        Br,
        {
          value: N,
          onChange: (j) => e(t, j),
          required: f,
          accept: h || "image/*",
          aspect: W,
          id: `file-${t}`,
          dragDrop: k,
          cropImage: ae,
          label: n || "",
          name: t,
          parentClass: v || ""
        }
      );
    case "audio":
      return /* @__PURE__ */ o(
        Gr,
        {
          value: N,
          onChange: (j) => e(t, j),
          required: f,
          accept: h || "audio/*",
          id: `file-${t}`,
          dragDrop: k,
          label: n || "",
          name: t,
          parentClass: v || "",
          maxSize: R
        }
      );
    case "video":
      return /* @__PURE__ */ o(
        Wr,
        {
          value: N,
          onChange: (j) => e(t, j),
          required: f,
          accept: h || "video/*",
          id: `file-${t}`,
          dragDrop: k,
          label: n || "",
          name: t,
          maxSize: R,
          parentClass: v || ""
        }
      );
    case "tinyEditor":
      return /* @__PURE__ */ o(
        Ur,
        {
          value: N,
          onChange: (j) => e(t, j),
          required: f,
          placeholder: B,
          label: n || "",
          parentClass: v || "",
          fontFamily: A,
          editorKey: T || "",
          disabled: m
        }
      );
    default:
      return /* @__PURE__ */ o(
        Ft,
        {
          field: a,
          type: l || "text",
          defaultValue: M,
          value: N,
          onChange: (j) => e(t, j),
          placeholder: B,
          className: `${Z} ${d || ""}`,
          required: f,
          name: t,
          minLength: w,
          label: n || "",
          negativeNumberAllow: x,
          parentClass: v || "",
          disabled: m,
          pattern: L,
          mask: q,
          maskApplyOnValue: U
        }
      );
  }
}, Yr = ({
  isOpen: a,
  onClose: r,
  config: e,
  onApply: t
}) => {
  var u;
  const [n, l] = S({}), i = (h, s) => {
    l((f) => ({ ...f, [h]: s }));
  }, c = () => {
    t(n), r();
  }, b = () => {
    l({}), t({}), r();
  }, d = e == null ? void 0 : e.component;
  return /* @__PURE__ */ g(G, { children: [
    /* @__PURE__ */ o(
      "div",
      {
        className: `fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${a ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
        onClick: r
      }
    ),
    /* @__PURE__ */ g(
      "div",
      {
        className: `fixed top-0 right-0 h-full w-[28rem] bg-white dark:bg-gray-900 shadow-2xl z-50 flex flex-col border-l border-gray-200 dark:border-gray-700
          transform transition-transform duration-300 ease-in-out
          ${a ? "translate-x-0" : "translate-x-full"}
        `,
        children: [
          /* @__PURE__ */ g("div", { className: "flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700", children: [
            /* @__PURE__ */ o("h2", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: "Filters" }),
            /* @__PURE__ */ o(
              "button",
              {
                onClick: r,
                className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition",
                children: /* @__PURE__ */ o(He, { className: "w-5 h-5 text-gray-500 dark:text-gray-400" })
              }
            )
          ] }),
          a && /* @__PURE__ */ o("div", { className: "flex-1 overflow-y-auto px-4 py-3", children: d ? /* @__PURE__ */ o(
            d,
            {
              filters: n,
              onFilterChange: i
            }
          ) : /* @__PURE__ */ o("div", { className: "space-y-4", children: (u = e == null ? void 0 : e.fields) == null ? void 0 : u.map((h) => /* @__PURE__ */ o(
            Ut,
            {
              field: h,
              formData: n,
              handleChange: i
            },
            h.key
          )) }) }),
          /* @__PURE__ */ g("div", { className: "flex gap-2 px-4 py-3 border-t border-gray-200 dark:border-gray-700", children: [
            /* @__PURE__ */ o(
              ie,
              {
                onClick: c,
                variant: "contained",
                color: "primary",
                fullWidth: !0,
                children: "Apply Filters"
              }
            ),
            /* @__PURE__ */ o(
              ie,
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
}, Hr = ({ rows: a = 5, columns: r = 5 }) => /* @__PURE__ */ g(G, { children: [
  /* @__PURE__ */ o("div", { className: "w-full mb-6 inline-flex justify-end items-center", children: /* @__PURE__ */ o("div", { className: "h-8 w-80 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }),
  /* @__PURE__ */ o("div", { className: "overflow-hidden rounded-md border border-gray-200 dark:border-gray-800", children: /* @__PURE__ */ g("table", { className: "w-full border-collapse", children: [
    /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ o("tr", { className: "bg-gray-50 dark:bg-gray-900", children: Array.from({ length: r }).map((e, t) => /* @__PURE__ */ o("th", { className: "px-4 py-3", children: /* @__PURE__ */ o("div", { className: "h-6 w-24 bg-gray-300 dark:bg-gray-700 rounded animate-pulse  inline-flex justify-center items-center" }) }, t)) }) }),
    /* @__PURE__ */ o("tbody", { children: Array.from({ length: a }).map((e, t) => /* @__PURE__ */ o(
      "tr",
      {
        className: "border-t border-gray-200 dark:border-gray-800",
        children: Array.from({ length: r }).map((n, l) => /* @__PURE__ */ o("td", { className: "px-4 py-6", children: /* @__PURE__ */ o("div", { className: "h-6 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse" }) }, l))
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
  const [n, l] = S(!1), i = te(null), c = !!r;
  $(() => {
    const d = (u) => {
      i.current && !i.current.contains(u.target) && l(!1);
    };
    return document.addEventListener("click", d), () => document.removeEventListener("click", d);
  }, []);
  const b = (d) => {
    const u = a.find((h) => h.value === d);
    e(d, u || null), l(!1);
  };
  return a != null && a.length ? /* @__PURE__ */ g("div", { className: "relative", ref: i, children: [
    /* @__PURE__ */ g(
      "button",
      {
        type: "button",
        onClick: () => l((d) => !d),
        className: "relative inline-flex items-center justify-center h-[36px] w-[36px] rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition",
        "aria-label": "Open sort options",
        children: [
          /* @__PURE__ */ o(Ht, { className: "w-4 h-4" }),
          c && /* @__PURE__ */ o("span", { className: "absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" })
        ]
      }
    ),
    n && /* @__PURE__ */ g("div", { className: "absolute right-0 mt-2 z-20 min-w-[220px] max-h-[260px] overflow-auto rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg", children: [
      !!(t != null && t.trim()) && /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          onClick: () => b(""),
          className: `w-full text-left px-3 py-2 text-sm transition hover:bg-gray-100 dark:hover:bg-gray-700 ${r ? "text-gray-700 dark:text-gray-200" : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"}`,
          children: t
        }
      ),
      a.map((d) => /* @__PURE__ */ o(
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
}, Vr = (a) => a === !0 ? { ...Ve, enabled: !0 } : !a || typeof a != "object" ? Ve : {
  ...Ve,
  ...a,
  enabled: a.enabled ?? !0,
  autoGenerate: a.autoGenerate ?? !0
}, Xr = (a = []) => a.filter((r) => {
  const e = ["menu_actions", "index", "audio", "avatar"];
  return r.type && e.includes(r.type) ? !1 : !!(r.sortKey || (r.type === "group" ? r.titleKey : r.key));
}), Jr = (a) => {
  if (a.sortType) return a.sortType;
  if (a.type === "date") return "date";
  if (a.type === "number") return "number";
  const r = String(
    a.sortKey || (a.type === "group" ? a.titleKey : a.key) || ""
  ).toLowerCase();
  return ["phone", "mobile", "contact", "tel", "whatsapp"].some(
    (t) => r.includes(t)
  ) ? "phone" : Array.isArray(a.chipOptions) && a.chipOptions.length > 0 && a.chipOptions.every(
    (n) => typeof n.value == "boolean"
  ) ? "boolean" : "string";
}, kt = (a = []) => a.flatMap((r) => {
  const e = r.sortKey || (r.type === "group" ? r.titleKey : r.key), t = r.sortLabel || r.title || e, n = Jr(r);
  return e ? n === "number" ? [
    {
      value: `${e}_asc`,
      label: `${t} (Low-High)`,
      key: e,
      order: "asc",
      type: n
    },
    {
      value: `${e}_desc`,
      label: `${t} (High-Low)`,
      key: e,
      order: "desc",
      type: n
    }
  ] : n === "phone" ? [
    {
      value: `${e}_asc`,
      label: `${t} (0-9)`,
      key: e,
      order: "asc",
      type: n
    },
    {
      value: `${e}_desc`,
      label: `${t} (9-0)`,
      key: e,
      order: "desc",
      type: n
    }
  ] : n === "date" ? [
    {
      value: `${e}_desc`,
      label: `${t} (Newest First)`,
      key: e,
      order: "desc",
      type: n
    },
    {
      value: `${e}_asc`,
      label: `${t} (Oldest First)`,
      key: e,
      order: "asc",
      type: n
    }
  ] : n === "boolean" ? [
    {
      value: `${e}_desc`,
      label: `${t} (True First)`,
      key: e,
      order: "desc",
      type: n
    },
    {
      value: `${e}_asc`,
      label: `${t} (False First)`,
      key: e,
      order: "asc",
      type: n
    }
  ] : [
    {
      value: `${e}_asc`,
      label: `${t} (A-Z)`,
      key: e,
      order: "asc",
      type: n
    },
    {
      value: `${e}_desc`,
      label: `${t} (Z-A)`,
      key: e,
      order: "desc",
      type: n
    }
  ] : [];
}), qr = (a, r = []) => {
  if (Array.isArray(a.options) && a.options.length > 0)
    return a.options.map((n) => ({
      ...n,
      type: n.type || "string",
      order: n.order === "desc" ? "desc" : "asc"
    }));
  const t = Array.isArray(a.fields) ? a.fields : [];
  if (t.length > 0) {
    const n = t.map((l) => {
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
    return kt(n);
  }
  return a.autoGenerate ? kt(r) : [];
}, Qr = (a = [], r = "", e, t = []) => {
  if (!(e != null && e.enabled) || !r || e != null && e.useServerSideSorting)
    return a;
  const n = t == null ? void 0 : t.find(
    (d) => d.value === r
  );
  if (!(n != null && n.key))
    return a;
  const l = n.order === "desc" ? "desc" : "asc", i = n.key, c = n.type || "string", b = (d) => String(d ?? "").replace(/[^\d]/g, "").trim();
  return [...a].sort((d, u) => {
    const h = d == null ? void 0 : d[i], s = u == null ? void 0 : u[i];
    if (h == null && s == null) return 0;
    if (h == null) return l === "asc" ? 1 : -1;
    if (s == null) return l === "asc" ? -1 : 1;
    let f = 0;
    return c === "number" ? f = Number(h) - Number(s) : c === "phone" ? f = b(h).localeCompare(
      b(s),
      void 0,
      {
        numeric: !0
      }
    ) : c === "date" ? f = new Date(h).getTime() - new Date(s).getTime() : c === "boolean" ? f = +!!h - +!!s : f = String(h).localeCompare(String(s)), l === "asc" ? f : -f;
  });
}, ea = ({
  config: a,
  setShowAdd: r,
  title: e,
  buttonText: t,
  description: n,
  showAddButton: l
}) => {
  const {
    data: i = [],
    table_head: c = [],
    loading: b = !1,
    search: d = {
      enabled: !1,
      placeholder: "Search...",
      useServerSideSearch: !1
    },
    filter: u = {
      enabled: !1,
      useServerSideFilters: !1
    },
    sort: h = { enabled: !1 },
    pagination: s = {
      enabled: !1,
      rows_per_page: 10,
      useServerSidePagination: !1
    },
    emptyMessage: f = "No data available",
    onMenuAction: w,
    setServerSidePaginationData: k = () => {
    },
    onFilterApply: v,
    filterConfig: P = null,
    rowClick: F = null
  } = a, [z, D] = S(""), [T, A] = S(null), [m, x] = S([]), [M, _] = S({ top: 0, left: 0 }), [L, X] = S(!1), [ae, W] = S({}), C = be(() => Vr(h), [h]), q = be(
    () => Xr(c),
    [c]
  ), U = be(() => qr(C, q), [C, q]), [R, N] = S(
    (C == null ? void 0 : C.defaultValue) || ""
  ), [B, Z] = S(null), [j, oe] = S(!1), fe = be(() => !d.enabled || !z.trim() || d.useServerSideSearch ? i : nr(i, z, d.searchKeys || []), [i, z, d]), le = be(() => Qr(
    fe,
    R,
    C,
    U
  ), [fe, R, C, U]), [J, ne] = S(1), [ee, ke] = S((s == null ? void 0 : s.rows_per_page) || 50), [Ne, De] = S(fe.length || 0), me = s != null && s.useServerSidePagination ? s.total_pages : Math.ceil(fe.length / ee), Se = be(() => {
    if (s.useServerSidePagination) return le;
    const p = (J - 1) * ee;
    return le.slice(p, p + ee);
  }, [le, J, ee, s.useServerSidePagination]), ye = te(null), Me = te({}), ve = te(null), _e = (p) => {
    D(p), ne(1), d.useServerSideSearch && (ve.current && clearTimeout(ve.current), ve.current = setTimeout(async () => {
      try {
        await k((y) => ({
          ...y,
          search: p,
          current_page: 1
        }));
      } catch (y) {
        console.error("Search error:", y);
      }
    }, 800));
  }, Pe = (p, y = null) => {
    N(p), ne(1);
    const I = {
      value: p,
      option: y,
      key: (y == null ? void 0 : y.key) || "",
      order: (y == null ? void 0 : y.order) || "",
      type: (y == null ? void 0 : y.type) || ""
    };
    typeof (C == null ? void 0 : C.onChange) == "function" && C.onChange(I);
  }, Ae = (p, y, I) => {
    I.stopPropagation(), A(null), w == null || w(p.type, y);
  }, Ee = (p, y, I) => {
    y.stopPropagation(), x(I);
    const K = y.currentTarget;
    Me.current[p] = K;
    const V = K.getBoundingClientRect(), ce = 192, he = I.length * 40, Oe = window.innerWidth, st = window.innerHeight, $t = Oe - V.right < ce ? V.left - ce + V.width : V.left, Gt = st - V.bottom < he && V.top > he ? V.top - he - 2 : V.bottom + 2;
    _({
      top: Math.max(8, Math.min(Gt, st - he - 8)),
      left: Math.max(8, Math.min($t, Oe - ce - 8))
    }), A(T === p ? null : p);
  }, Le = (p) => (J - 1) * ee + p + 1, ze = (p) => {
    let y = p;
    y && y.src instanceof File && (y = { ...y, src: URL.createObjectURL(y.src) }), Z(y), oe(!0);
  }, Ce = (p, y, I, K = null, V = null) => /* @__PURE__ */ o(G, { children: p ? /* @__PURE__ */ o(
    "img",
    {
      src: p instanceof File ? URL.createObjectURL(p) : p,
      alt: y || "Avatar",
      onClick: (ce) => {
        ce.stopPropagation(), ce.preventDefault(), ze({ src: p, alt: y });
      },
      className: `w-10 h-10 cursor-pointer shrink-0 rounded-full object-cover border border-gray-200 dark:border-gray-700 ${I || ""}`
    }
  ) : /* @__PURE__ */ o(G, { children: K ? typeof K == "function" ? K(V) : K : /* @__PURE__ */ o(
    "div",
    {
      className: `w-10 h-10 flex items-center shrink-0 justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${I || ""}`,
      children: /* @__PURE__ */ o(it, { className: "w-6 h-6 text-gray-400 dark:text-gray-400" })
    }
  ) }) }), je = (p, y) => /* @__PURE__ */ o(G, { children: p ? /* @__PURE__ */ o(
    "audio",
    {
      controls: !0,
      src: p instanceof File ? URL.createObjectURL(p) : p,
      onClick: (I) => {
        I.stopPropagation();
      },
      className: `w-64 cursor-pointer ${y || ""}`
    },
    p instanceof File ? URL.createObjectURL(p) : p
  ) : /* @__PURE__ */ o(G, { children: /* @__PURE__ */ o(
    "div",
    {
      className: `w-12 h-12 flex items-center shrink-0 justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-600 ${y || ""}`,
      children: /* @__PURE__ */ o(Qt, { className: "w-6 h-6 text-gray-400 dark:text-gray-400" })
    }
  ) }) }), Fe = (p, y) => /* @__PURE__ */ g("div", { className: `flex items-center space-x-4 ${y.className || ""}`, children: [
    y.imageKey ? Ce(
      p[y.imageKey],
      p[y.titleKey],
      "group-avatar",
      y.fallback_icon,
      p
    ) : "",
    /* @__PURE__ */ g("div", { children: [
      /* @__PURE__ */ o("p", { className: "font-medium text-gray-900 dark:text-white group-title", children: p[y.titleKey] || "" }),
      /* @__PURE__ */ o("p", { className: "text-sm text-gray-500 dark:text-gray-400 group-sub-title", children: p[y.subtitleKey] || "" })
    ] })
  ] }), Te = (p, y) => {
    var ce;
    let I = String(p);
    const K = y.variant || "contained";
    let V = y.defaultColor;
    if (((ce = y == null ? void 0 : y.chipOptions) == null ? void 0 : ce.length) > 0) {
      const he = y == null ? void 0 : y.chipOptions.find((Oe) => Oe.value == p);
      he && (I = he.label, V = he.color);
    }
    return /* @__PURE__ */ o(
      Ot,
      {
        label: I,
        variant: K,
        color: V,
        className: y.className || ""
      }
    );
  }, Ie = (p, y, I) => {
    const K = y[p.key];
    return p.type === "menu_actions" ? /* @__PURE__ */ o("div", { className: `text-center ${p.className || ""}`, children: /* @__PURE__ */ o(
      "button",
      {
        ref: (V) => {
          Me.current[y.id || y._id] = V;
        },
        onClick: (V) => Ee(y.id || y._id, V, p.menuList),
        className: "p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition text-gray-700 dark:text-gray-300",
        children: /* @__PURE__ */ o(qt, { className: "h-4 w-4" })
      }
    ) }) : p.type === "index" ? /* @__PURE__ */ o("span", { className: p.className || "", children: Le(I) }) : p.type === "group" ? Fe(y, p) : p.type === "chip" ? /* @__PURE__ */ o(G, { children: Te(K, p) }) : p.type === "date" ? /* @__PURE__ */ o("span", { className: p.className || "", children: Mt(K, p.format || "DD MMM YYYY") }) : p.type === "avatar" ? /* @__PURE__ */ o(G, { children: /* @__PURE__ */ o("div", { className: "min-w-[40px]", children: Ce(
      K,
      p.alt,
      p.className,
      p.fallback_icon,
      y
    ) }) }) : p.type === "audio" ? /* @__PURE__ */ o(G, { children: je(K, p.className) }) : /* @__PURE__ */ o("span", { className: p.className || "", children: K || "N/A" });
  }, E = (p) => {
    if (typeof F == "function")
      return F(p);
    if (F)
      return w == null ? void 0 : w("view", p);
  }, O = (p, y) => {
    if (p.onClickDetails)
      return w == null ? void 0 : w("view", y);
    if (typeof p.handleClick == "function")
      return p.handleClick(y);
  }, Y = () => F || typeof F == "function", se = (p) => p.onClickDetails || typeof p.handleClick == "function";
  return $(() => {
    const p = () => {
      T && A(null);
    };
    return window.addEventListener("scroll", p, !0), () => {
      window.removeEventListener("scroll", p, !0);
    };
  }, [T]), $(() => {
    const p = (y) => {
      ye.current && !ye.current.contains(y.target) && A(null);
    };
    return document.addEventListener("click", p), () => document.removeEventListener("click", p);
  }, []), $(() => {
    s != null && s.rows_per_page && (s != null && s.useServerSidePagination) && ke((s == null ? void 0 : s.rows_per_page) || 50), s.current_page && ne(s.current_page);
  }, [
    s.rows_per_page,
    s == null ? void 0 : s.useServerSidePagination,
    s.current_page
  ]), $(() => {
    De(
      s != null && s.useServerSidePagination ? s.total_records : le.length
    ), le.length <= ee * (J - 1) && !(s != null && s.useServerSidePagination) && ne((p) => p - 1 || 1);
  }, [
    le.length,
    s.total_records,
    s == null ? void 0 : s.useServerSidePagination
  ]), $(() => {
    if (!(C != null && C.enabled)) {
      N("");
      return;
    }
    if (U.some(
      (y) => y.value === C.defaultValue
    )) {
      N(C.defaultValue);
      return;
    }
    N("");
  }, [C, U]), $(() => {
    if (!(C != null && C.enabled) || !(C != null && C.useServerSideSorting))
      return;
    const p = U == null ? void 0 : U.find(
      (y) => y.value === R
    );
    k((y) => ({
      ...y,
      current_page: 1,
      sort_by: (p == null ? void 0 : p.key) || "",
      sort_order: (p == null ? void 0 : p.order) || ""
    }));
  }, [
    R,
    C == null ? void 0 : C.enabled,
    C == null ? void 0 : C.useServerSideSorting,
    U,
    k
  ]), /* @__PURE__ */ g(G, { children: [
    b ? /* @__PURE__ */ o(Hr, { rows: 6, columns: 6 }) : /* @__PURE__ */ g(G, { children: [
      /* @__PURE__ */ g("div", { className: "flex flex-col lg:!flex-row lg:!justify-between gap-4 mb-3", children: [
        /* @__PURE__ */ g("div", { className: "table-heading", children: [
          /* @__PURE__ */ o("h1", { children: e }),
          /* @__PURE__ */ o("p", { children: n })
        ] }),
        /* @__PURE__ */ g("div", { className: "flex flex-col justify-end items-stretch lg:!items-end gap-2 w-full lg:!w-auto", children: [
          l && /* @__PURE__ */ g(
            ie,
            {
              onClick: () => r(!0),
              variant: "contained",
              color: "primary",
              children: [
                /* @__PURE__ */ o(Zt, { className: "w-4 h-4 mr-2" }),
                t || "Add New"
              ]
            }
          ),
          /* @__PURE__ */ g("div", { className: "flex flex-col sm:!flex-row sm:!flex-wrap justify-end items-stretch sm:!items-center gap-2 w-full", children: [
            d.enabled && /* @__PURE__ */ o("div", { className: "w-full sm:!w-auto", children: /* @__PURE__ */ g("div", { className: "table-search-field", children: [
              /* @__PURE__ */ o(nt, { className: "search-icon" }),
              /* @__PURE__ */ o(
                "input",
                {
                  type: "text",
                  placeholder: d.placeholder || "Search...",
                  value: z,
                  onChange: (p) => _e(p.target.value)
                }
              )
            ] }) }),
            C != null && C.enabled && (U == null ? void 0 : U.length) > 0 || P && u.enabled ? /* @__PURE__ */ g("div", { className: "flex items-center justify-end gap-2 w-full sm:!w-auto", children: [
              P && u.enabled && /* @__PURE__ */ g("div", { className: "filter-button-wrapper", children: [
                /* @__PURE__ */ g(
                  ie,
                  {
                    onClick: () => X(!0),
                    variant: "contained",
                    className: "w-full sm:!w-auto",
                    children: [
                      /* @__PURE__ */ o(Vt, { className: "w-4 h-4 mr-2" }),
                      "Filters"
                    ]
                  }
                ),
                Object.keys(ae).length > 0 && /* @__PURE__ */ o("span", { className: "red-dot" })
              ] }),
              (C == null ? void 0 : C.enabled) && (U == null ? void 0 : U.length) > 0 && /* @__PURE__ */ o(
                Zr,
                {
                  options: U,
                  value: R,
                  onChange: Pe,
                  clearLabel: C == null ? void 0 : C.clearLabel
                }
              )
            ] }) : null
          ] })
        ] })
      ] }),
      /* @__PURE__ */ g("div", { className: "table-container", children: [
        /* @__PURE__ */ o("div", { className: "overflow-x-auto", children: /* @__PURE__ */ g("table", { children: [
          /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ o("tr", { children: c.map((p) => /* @__PURE__ */ o(
            "th",
            {
              className: `table-head-data ${p.headClass || ""}`,
              children: p.title
            },
            p.key
          )) }) }),
          /* @__PURE__ */ o("tbody", { children: Se.length === 0 ? /* @__PURE__ */ o("tr", { children: /* @__PURE__ */ o(
            "td",
            {
              colSpan: c.length,
              className: "no-data-message",
              children: f
            }
          ) }) : Se.map((p, y) => /* @__PURE__ */ o(
            "tr",
            {
              className: `table-row ${Y() ? "cursor-pointer" : ""}`,
              onClick: () => {
                Y() && E(p);
              },
              children: c.map((I) => /* @__PURE__ */ o(
                "td",
                {
                  className: `table-data ${I.type == "audio" ? "" : "max-w-[300px]"} truncate ${se(I) ? "cursor-pointer" : ""}`,
                  title: String(p[I.key] ?? ""),
                  onClick: (K) => {
                    se(I) && (K.stopPropagation(), K.preventDefault(), O(I, p));
                  },
                  children: I.render ? I.render(p, y) : Ie(I, p, y)
                },
                I.key
              ))
            },
            p.id || p._id || y
          )) })
        ] }) }),
        (s == null ? void 0 : s.enabled) && le.length > 0 && /* @__PURE__ */ g("div", { className: "pagination-wrapper", children: [
          /* @__PURE__ */ g("span", { children: [
            "Showing ",
            (J - 1) * ee + 1,
            " to",
            " ",
            Math.min(J * ee, Ne),
            " of",
            " ",
            Ne,
            " results"
          ] }),
          /* @__PURE__ */ g("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ g("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ o("span", { children: "Rows per page:" }),
              /* @__PURE__ */ o(
                "select",
                {
                  value: ee,
                  onChange: (p) => {
                    const y = Number(p.target.value);
                    ke(y), ne(1), s.useServerSidePagination && k(
                      (I) => ({
                        ...I,
                        current_page: 1,
                        rows_per_page: y
                      })
                    );
                  },
                  className: "rows-number-select",
                  children: [10, 25, 50, 100].map((p) => /* @__PURE__ */ o("option", { value: p, children: p }, p))
                }
              )
            ] }),
            /* @__PURE__ */ g("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ o(
                "button",
                {
                  onClick: () => {
                    if (J > 1) {
                      const p = J - 1;
                      ne(p), s.useServerSidePagination && k(
                        (y) => ({
                          ...y,
                          current_page: p
                        })
                      );
                    }
                  },
                  disabled: J === 1,
                  className: "arrow-icons",
                  children: /* @__PURE__ */ o(Xt, { className: "h-4 w-4" })
                }
              ),
              /* @__PURE__ */ g("span", { children: [
                "Page ",
                J,
                " of ",
                me
              ] }),
              /* @__PURE__ */ o(
                "button",
                {
                  onClick: () => {
                    if (J < me) {
                      const p = J + 1;
                      ne(p), s.useServerSidePagination && k(
                        (y) => ({
                          ...y,
                          current_page: p
                        })
                      );
                    }
                  },
                  disabled: J === me,
                  className: "arrow-icons",
                  children: /* @__PURE__ */ o(Jt, { className: "h-4 w-4" })
                }
              )
            ] })
          ] })
        ] })
      ] })
    ] }),
    T && er(
      /* @__PURE__ */ o(
        "div",
        {
          ref: ye,
          style: {
            position: "fixed",
            top: `${M.top}px`,
            left: `${M.left}px`,
            zIndex: 9999
          },
          className: "w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg border border-gray-200 dark:border-gray-600",
          children: m.map((p, y) => /* @__PURE__ */ g(
            "button",
            {
              onClick: (I) => Ae(
                p,
                i.find(
                  (K) => K.id === T || K._id == T
                ),
                I
              ),
              className: `w-full flex items-center gap-2 px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-600 ${p.variant === "danger" ? "text-red-600 dark:text-red-500" : "text-gray-700 dark:text-gray-200"}`,
              children: [
                p.icon && /* @__PURE__ */ o("span", { className: "shrink-0", children: p.icon }),
                p.title
              ]
            },
            y
          ))
        }
      ),
      document.body
    ),
    P && /* @__PURE__ */ o(
      Yr,
      {
        isOpen: L,
        onClose: () => X(!1),
        config: P,
        onApply: (p) => {
          W(p), v == null || v(p);
        }
      }
    ),
    j && B && /* @__PURE__ */ o(
      lt,
      {
        src: B.src,
        alt: B.alt,
        isOpen: j,
        setIsOpen: oe
      }
    )
  ] });
}, $e = ({
  isOpen: a,
  onClose: r,
  icon: e,
  title: t,
  children: n,
  size: l = "md",
  actionButtons: i = [],
  onFormSubmit: c = () => {
  },
  loadingBtn: b = !1,
  executeFunction: d = () => {
  },
  selectedItem: u = null
}) => {
  if (!a) return null;
  const h = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-full"
  };
  return /* @__PURE__ */ g("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: [
    /* @__PURE__ */ o(
      "div",
      {
        className: "fixed inset-0 bg-gray-500 opacity-75",
        onClick: () => r()
      }
    ),
    /* @__PURE__ */ g(
      "div",
      {
        className: `relative bg-white rounded-lg shadow-xl w-full ${h[l] || h.md} max-h-[90vh] flex flex-col dark:bg-gray-800`,
        children: [
          /* @__PURE__ */ g("div", { className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0", children: [
            /* @__PURE__ */ g("div", { className: "flex items-center gap-1", children: [
              e && /* @__PURE__ */ o("span", { children: e }),
              /* @__PURE__ */ o("h3", { className: "text-lg font-medium text-gray-900 dark:text-white", children: t })
            ] }),
            /* @__PURE__ */ o(
              "button",
              {
                onClick: () => r(),
                className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
                children: /* @__PURE__ */ o(He, { className: "w-6 h-6" })
              }
            )
          ] }),
          /* @__PURE__ */ o("div", { className: "flex-1 overflow-y-auto p-4", children: n }),
          i.length > 0 && /* @__PURE__ */ o("div", { className: "px-4 py-3 flex justify-end gap-3 border-t border-gray-200 dark:border-gray-700 sm:!px-6", children: i.map((s, f) => /* @__PURE__ */ o(
            ie,
            {
              onClick: (w) => {
                s.type == "submit" ? c(w) : d(
                  () => {
                    var k;
                    return Promise.resolve((k = s == null ? void 0 : s.onClick) == null ? void 0 : k.call(s, w, u));
                  },
                  (k) => r == null ? void 0 : r(k)
                );
              },
              disabled: b || s.disabled,
              variant: s.variant || "contained",
              color: s.color || "primary",
              className: `min-w-[100px] ${s.className || ""}`,
              type: s.type || "button",
              children: b ? /* @__PURE__ */ g("div", { className: "flex items-center", children: [
                /* @__PURE__ */ o("div", { className: "animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-2 border-t-white mr-2" }),
                s.label || "Submit",
                "..."
              ] }) : s.label || "Submit"
            },
            `${s.label || "action"}-${f}`
          )) })
        ]
      }
    )
  ] });
}, Nt = ({
  config: a,
  onSubmit: r,
  initialData: e,
  fetchRowDetails: t,
  type: n
}) => {
  const l = e || {}, { formClass: i = "grid grid-cols-12 gap-4", formFields: c = [] } = a || {}, [b, d] = S(l), [u, h] = S(!0), s = async () => {
    t == null || t(l).then((k) => {
      d(k.data);
    }).catch((k) => {
      we(k.message, { variant: "error" });
    }).finally(() => {
      h(!1);
    });
  };
  $(() => {
    t instanceof Function ? s() : (d(l), h(!1));
  }, []);
  const f = (k, v) => {
    d((P) => ({ ...P, [k]: v }));
  }, w = (k) => {
    k.preventDefault();
    const v = k.currentTarget;
    if (!v.checkValidity()) {
      v.reportValidity();
      return;
    }
    r(b);
  };
  return u ? /* @__PURE__ */ o("div", { className: "flex items-center justify-center h-64", children: /* @__PURE__ */ o(
    "div",
    {
      className: "rounded-full border-4 border-blue-500 border-t-gray-200 animate-spin w-8 h-8",
      style: {
        borderTopColor: "border-primary-500"
      }
    }
  ) }) : /* @__PURE__ */ o(
    "form",
    {
      id: n === "add" ? "addForm" : n === "edit" ? "editForm" : "defaultForm",
      onSubmit: w,
      className: i,
      noValidate: !1,
      children: c.map((k) => /* @__PURE__ */ o(
        Ut,
        {
          field: k,
          formData: b,
          handleChange: f
        },
        k.key
      ))
    }
  );
};
function ta({
  data: a,
  config: r,
  fetchRowDetails: e
}) {
  const { fields: t = [], containerClass: n } = r || {}, l = a || {}, [i, c] = S(l), [b, d] = S(!0), u = async () => {
    e == null || e(l).then((h) => {
      c(h.data);
    }).catch((h) => {
      we(h.message, { variant: "error" });
    }).finally(() => {
      d(!1);
    });
  };
  return $(() => {
    e instanceof Function ? u() : (c(l), d(!1));
  }, []), b ? /* @__PURE__ */ o("div", { className: "flex items-center justify-center h-64", children: /* @__PURE__ */ o(
    "div",
    {
      className: "rounded-full border-4 border-blue-500 border-t-gray-200 animate-spin w-8 h-8",
      style: {
        borderTopColor: "border-primary-500"
      }
    }
  ) }) : /* @__PURE__ */ o(G, { children: /* @__PURE__ */ o("div", { className: `grid grid-cols-12 gap-4 ${n || ""}`, children: t.map((h) => h.renderCondition && typeof h.renderCondition == "function" && !h.renderCondition(i) ? null : h.type == "group" ? /* @__PURE__ */ o(
    Tt,
    {
      col: h,
      data: i
    },
    h.key || h.titleKey
  ) : h.type == "cardGroup" ? /* @__PURE__ */ o(
    It,
    {
      col: h,
      data: i
    },
    h.key || h.titleKey
  ) : /* @__PURE__ */ o(
    Bt,
    {
      col: h,
      data: i
    },
    h.key || h.label
  )) }) });
}
const ra = ({ config: a }) => {
  var ee, ke, Ne, De, me, Se, ye, Me, ve, _e, Pe, Ae, Ee, Le, ze, Ce, je, Fe, Te, Ie;
  const {
    title: r,
    fetchData: e,
    fetchRowDetails: t,
    isStaticData: n = !1,
    tableConfig: l,
    modalConfig: i,
    filterConfig: c
  } = a, [b, d] = S(!0), [u, h] = S(!1), [s, f] = S([]), [w, k] = S(null), [v, P] = S({
    search: "",
    rows_per_page: 50,
    current_page: 1,
    sort_by: "",
    sort_order: ""
  }), [F, z] = S({}), [D, T] = S(!1), [A, m] = S(!1), [x, M] = S(!1), [_, L] = S(!1), [X, ae] = S(!1), [W, C] = S(
    null
  ), q = (E, O) => {
    E === "edit" ? (C(O), M(!0)) : E === "view" ? (C(O), ae(!0)) : E === "delete" && (C(O), L(!0));
  }, U = async (E, O, Y = "", se = "") => {
    h(!0);
    try {
      if (!E) return;
      const p = await E();
      (Y || p != null && p.message) && we(Y || p.message || "Success", {
        variant: "success"
      }), O == null || O(p);
    } catch (p) {
      (se || p != null && p.message) && we(se || p.message || "Error occurred", {
        variant: "error"
      });
    } finally {
      h(!1);
    }
  }, R = (E) => {
    const O = E.newObject;
    n ? (f((Y) => [O, ...Y]), k((Y) => ({
      ...Y,
      current_page: 1
    }))) : (P((Y) => ({
      ...Y,
      current_page: 1
    })), v.current_page === 1 && oe()), m(!1);
  }, N = (E) => {
    const { newObject: O, targetObject: Y } = E;
    n ? f(
      (se) => se.map(
        (p) => p.id === Y.id ? { ...p, ...O } : p
      )
    ) : oe(), M(!1);
  }, B = (E) => {
    if (!E) {
      L(!1), C(null);
      return;
    }
    n ? f(
      (O) => O.filter((Y) => Y.id !== E.targetObject.id)
    ) : s.length === 1 && v.current_page > 1 ? P((O) => ({
      ...O,
      current_page: O.current_page - 1
    })) : oe(), L(!1), C(null);
  }, Z = (E) => U(
    () => {
      var O;
      return (O = i == null ? void 0 : i.addModal) != null && O.handleSubmit ? i.addModal.handleSubmit(E) : Promise.resolve({ newObject: null });
    },
    R
  ), j = (E) => U(
    () => {
      var O;
      return (O = i == null ? void 0 : i.editModal) != null && O.handleSubmit ? i.editModal.handleSubmit(E, W) : Promise.resolve({ newObject: null, targetObject: null });
    },
    N
  ), oe = async () => {
    d(!0);
    try {
      const E = await e({
        ...v,
        ...F
      });
      f(E.data || []), k(E.pagination || null);
    } catch (E) {
      we(E.message || "Failed to fetch data", {
        variant: "error"
      });
    } finally {
      d(!1);
    }
  }, fe = (E) => {
    var O;
    z(() => ({ ...E })), (O = l == null ? void 0 : l.filter) != null && O.useServerSideFilters && T((Y) => !Y);
  }, le = (E, O) => E.filter(
    (Y) => Object.entries(O).every(([se, p]) => Y[se] === p)
  ), J = be(() => {
    var E;
    return (E = l == null ? void 0 : l.filter) != null && E.useServerSideFilters ? s : le(s, F);
  }, [s, F, (ee = l == null ? void 0 : l.filter) == null ? void 0 : ee.useServerSideFilters]), ne = (ke = i == null ? void 0 : i.viewModal) == null ? void 0 : ke.component;
  return $(() => {
    oe();
  }, [
    v.search,
    v.rows_per_page,
    v.current_page,
    v.sort_by,
    v.sort_order,
    D
  ]), /* @__PURE__ */ g("div", { children: [
    /* @__PURE__ */ o(
      ea,
      {
        title: r,
        setShowAdd: m,
        description: a.description,
        buttonText: a.buttonText,
        showAddButton: !!(i != null && i.addModal),
        config: {
          ...l,
          pagination: {
            ...l.pagination,
            ...w
          },
          data: J,
          setServerSidePaginationData: P,
          onMenuAction: q,
          filterConfig: c,
          onFilterApply: fe,
          loading: b
        }
      }
    ),
    /* @__PURE__ */ o(
      $e,
      {
        isOpen: A,
        onClose: () => {
          u || m(!1);
        },
        icon: (Ne = i == null ? void 0 : i.addModal) == null ? void 0 : Ne.icon,
        title: ((De = i == null ? void 0 : i.addModal) == null ? void 0 : De.title) || "Add New",
        size: ((me = i == null ? void 0 : i.addModal) == null ? void 0 : me.size) || "md",
        onFormSubmit: () => {
          var E;
          return (E = document.querySelector("#addForm")) == null ? void 0 : E.requestSubmit();
        },
        loadingBtn: u,
        actionButtons: ((Se = i == null ? void 0 : i.addModal) == null ? void 0 : Se.actionButtons) || [],
        children: /* @__PURE__ */ o(
          Nt,
          {
            config: (i == null ? void 0 : i.addModal) || {},
            onSubmit: Z,
            initialData: {},
            type: "add",
            loading: u
          }
        )
      }
    ),
    /* @__PURE__ */ o(
      $e,
      {
        isOpen: x,
        onClose: () => {
          u || M(!1);
        },
        icon: (ye = i == null ? void 0 : i.editModal) == null ? void 0 : ye.icon,
        title: ((Me = i == null ? void 0 : i.editModal) == null ? void 0 : Me.title) || "Edit",
        size: ((ve = i == null ? void 0 : i.editModal) == null ? void 0 : ve.size) || "md",
        onFormSubmit: () => {
          var E;
          return (E = document.querySelector("#editForm")) == null ? void 0 : E.requestSubmit();
        },
        actionButtons: ((_e = i == null ? void 0 : i.editModal) == null ? void 0 : _e.actionButtons) || [],
        loadingBtn: u,
        children: /* @__PURE__ */ o(
          Nt,
          {
            config: (i == null ? void 0 : i.editModal) || {},
            onSubmit: j,
            initialData: W,
            type: "edit",
            loading: u,
            fetchRowDetails: t
          }
        )
      }
    ),
    _ && /* @__PURE__ */ o(
      $e,
      {
        isOpen: _,
        onClose: (E) => {
          B(E);
        },
        icon: ((Pe = i == null ? void 0 : i.deleteModal) == null ? void 0 : Pe.icon) || /* @__PURE__ */ o(pe, { icon: "ph:warning-bold", className: "w-6 h-6 text-red-500" }),
        title: ((Ae = i == null ? void 0 : i.deleteModal) == null ? void 0 : Ae.title) || "Confirm Delete",
        size: ((Ee = i == null ? void 0 : i.deleteModal) == null ? void 0 : Ee.size) || "md",
        loading: u,
        actionButtons: ((Le = i == null ? void 0 : i.deleteModal) == null ? void 0 : Le.actionButtons) || [],
        executeFunction: U,
        selectedItem: W,
        children: /* @__PURE__ */ o("div", { className: "flex items-center space-x-2 py-3", children: /* @__PURE__ */ g("div", { children: [
          /* @__PURE__ */ o("p", { className: "text-md text-gray-700 dark:text-white", children: ((ze = i == null ? void 0 : i.deleteModal) == null ? void 0 : ze.confirmText) || "Are you sure you want to delete this item?" }),
          ((Ce = i == null ? void 0 : i.deleteModal) == null ? void 0 : Ce.referenceKey) && /* @__PURE__ */ o("p", { className: "text-md font-semibold text-gray-700 dark:text-white", children: W == null ? void 0 : W[(je = i == null ? void 0 : i.deleteModal) == null ? void 0 : je.referenceKey] })
        ] }) })
      }
    ),
    (i == null ? void 0 : i.viewModal) && /* @__PURE__ */ o(
      $e,
      {
        isOpen: X,
        onClose: () => {
          ae(!1), C(null);
        },
        icon: (Fe = i == null ? void 0 : i.viewModal) == null ? void 0 : Fe.icon,
        title: ((Te = i == null ? void 0 : i.viewModal) == null ? void 0 : Te.title) || "View Details",
        size: ((Ie = i == null ? void 0 : i.viewModal) == null ? void 0 : Ie.size) || "lg",
        footerConfig: i == null ? void 0 : i.viewModal.footer,
        children: ne ? /* @__PURE__ */ o(ne, { data: W }) : /* @__PURE__ */ o(
          ta,
          {
            data: W,
            fetchRowDetails: t,
            config: (i == null ? void 0 : i.viewModal) || {}
          }
        )
      }
    )
  ] });
};
function aa({ children: a }) {
  return ar(), a;
}
function oa({
  children: a
}) {
  try {
    return /* @__PURE__ */ o(aa, { children: a });
  } catch {
    return /* @__PURE__ */ o(
      rr,
      {
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right"
        },
        action: (e) => /* @__PURE__ */ o(
          "button",
          {
            onClick: () => {
              window.dispatchEvent(
                new CustomEvent("closeSnackbar", { detail: e })
              );
            },
            className: "p-1 hover:bg-white/20 rounded-full transition-colors duration-200 text-white flex items-center justify-center",
            children: /* @__PURE__ */ o(He, { className: "h-4 w-4" })
          }
        ),
        maxSnack: 3,
        autoHideDuration: 3e3,
        children: a
      }
    );
  }
}
const na = () => {
  if (typeof document > "u" || document.getElementById("react-admin-crud-manager-styles")) return;
  const a = document.createElement("style");
  a.id = "react-admin-crud-manager-styles", a.textContent = or, document.head.appendChild(a);
};
function ga({ config: a }) {
  return $(() => {
    na();
  }, []), /* @__PURE__ */ o(oa, { children: /* @__PURE__ */ o(ra, { config: a }) });
}
export {
  ga as default
};
//# sourceMappingURL=index.es.js.map
